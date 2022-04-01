
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
    DeleteVpcLinkRequest,
    ExportApiRequest,
    GetApiRequest,
    GetApiMappingRequest,
    GetApiMappingsRequest,
    GetApisRequest,
    GetAuthorizerRequest,
    GetAuthorizersRequest,
    GetDeploymentRequest,
    GetDeploymentsRequest,
    GetDomainNameRequest,
    GetDomainNamesRequest,
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
    GetVpcLinksRequest,
    ImportApiRequest,
    ReimportApiRequest,
    TagResourceRequest,
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
    GetApisResponse,
    GetAuthorizerResponse,
    GetAuthorizersResponse,
    GetDeploymentResponse,
    GetDeploymentsResponse,
    GetDomainNameResponse,
    GetDomainNamesResponse,
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
    GetVpcLinksResponse,
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
const schema = require("../apis/apigatewayv2-2018-11-29.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.apigatewayv2.DomainName {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.apigatewayv2.DomainName>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.ApiGatewayV2()
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

    invokeCreateApi(partialParams: ToOptional<{
      [K in keyof CreateApiRequest]: (CreateApiRequest)[K]
    }>): Request<CreateApiResponse, AWSError> {
        this.boot();
        return this.client.createApi(
          this.ops["CreateApi"].apply(partialParams)
        );
    }

    invokeCreateApiMapping(partialParams: ToOptional<{
      [K in keyof CreateApiMappingRequest & keyof Omit<CreateApiMappingRequest, "DomainName">]: (CreateApiMappingRequest)[K]
    }>): Request<CreateApiMappingResponse, AWSError> {
        this.boot();
        return this.client.createApiMapping(
          this.ops["CreateApiMapping"].apply(partialParams)
        );
    }

    invokeCreateAuthorizer(partialParams: ToOptional<{
      [K in keyof CreateAuthorizerRequest]: (CreateAuthorizerRequest)[K]
    }>): Request<CreateAuthorizerResponse, AWSError> {
        this.boot();
        return this.client.createAuthorizer(
          this.ops["CreateAuthorizer"].apply(partialParams)
        );
    }

    invokeCreateDeployment(partialParams: ToOptional<{
      [K in keyof CreateDeploymentRequest]: (CreateDeploymentRequest)[K]
    }>): Request<CreateDeploymentResponse, AWSError> {
        this.boot();
        return this.client.createDeployment(
          this.ops["CreateDeployment"].apply(partialParams)
        );
    }

    invokeCreateDomainName(partialParams: ToOptional<{
      [K in keyof CreateDomainNameRequest & keyof Omit<CreateDomainNameRequest, "DomainName">]: (CreateDomainNameRequest)[K]
    }>): Request<CreateDomainNameResponse, AWSError> {
        this.boot();
        return this.client.createDomainName(
          this.ops["CreateDomainName"].apply(partialParams)
        );
    }

    invokeCreateIntegration(partialParams: ToOptional<{
      [K in keyof CreateIntegrationRequest]: (CreateIntegrationRequest)[K]
    }>): Request<CreateIntegrationResult, AWSError> {
        this.boot();
        return this.client.createIntegration(
          this.ops["CreateIntegration"].apply(partialParams)
        );
    }

    invokeCreateIntegrationResponse(partialParams: ToOptional<{
      [K in keyof CreateIntegrationResponseRequest]: (CreateIntegrationResponseRequest)[K]
    }>): Request<CreateIntegrationResponseResponse, AWSError> {
        this.boot();
        return this.client.createIntegrationResponse(
          this.ops["CreateIntegrationResponse"].apply(partialParams)
        );
    }

    invokeCreateModel(partialParams: ToOptional<{
      [K in keyof CreateModelRequest]: (CreateModelRequest)[K]
    }>): Request<CreateModelResponse, AWSError> {
        this.boot();
        return this.client.createModel(
          this.ops["CreateModel"].apply(partialParams)
        );
    }

    invokeCreateRoute(partialParams: ToOptional<{
      [K in keyof CreateRouteRequest]: (CreateRouteRequest)[K]
    }>): Request<CreateRouteResult, AWSError> {
        this.boot();
        return this.client.createRoute(
          this.ops["CreateRoute"].apply(partialParams)
        );
    }

    invokeCreateRouteResponse(partialParams: ToOptional<{
      [K in keyof CreateRouteResponseRequest]: (CreateRouteResponseRequest)[K]
    }>): Request<CreateRouteResponseResponse, AWSError> {
        this.boot();
        return this.client.createRouteResponse(
          this.ops["CreateRouteResponse"].apply(partialParams)
        );
    }

    invokeCreateStage(partialParams: ToOptional<{
      [K in keyof CreateStageRequest]: (CreateStageRequest)[K]
    }>): Request<CreateStageResponse, AWSError> {
        this.boot();
        return this.client.createStage(
          this.ops["CreateStage"].apply(partialParams)
        );
    }

    invokeCreateVpcLink(partialParams: ToOptional<{
      [K in keyof CreateVpcLinkRequest]: (CreateVpcLinkRequest)[K]
    }>): Request<CreateVpcLinkResponse, AWSError> {
        this.boot();
        return this.client.createVpcLink(
          this.ops["CreateVpcLink"].apply(partialParams)
        );
    }

    invokeDeleteVpcLink(partialParams: ToOptional<{
      [K in keyof DeleteVpcLinkRequest]: (DeleteVpcLinkRequest)[K]
    }>): Request<DeleteVpcLinkResponse, AWSError> {
        this.boot();
        return this.client.deleteVpcLink(
          this.ops["DeleteVpcLink"].apply(partialParams)
        );
    }

    invokeExportApi(partialParams: ToOptional<{
      [K in keyof ExportApiRequest]: (ExportApiRequest)[K]
    }>): Request<ExportApiResponse, AWSError> {
        this.boot();
        return this.client.exportApi(
          this.ops["ExportApi"].apply(partialParams)
        );
    }

    invokeGetApi(partialParams: ToOptional<{
      [K in keyof GetApiRequest]: (GetApiRequest)[K]
    }>): Request<GetApiResponse, AWSError> {
        this.boot();
        return this.client.getApi(
          this.ops["GetApi"].apply(partialParams)
        );
    }

    invokeGetApiMapping(partialParams: ToOptional<{
      [K in keyof GetApiMappingRequest & keyof Omit<GetApiMappingRequest, "DomainName">]: (GetApiMappingRequest)[K]
    }>): Request<GetApiMappingResponse, AWSError> {
        this.boot();
        return this.client.getApiMapping(
          this.ops["GetApiMapping"].apply(partialParams)
        );
    }

    invokeGetApiMappings(partialParams: ToOptional<{
      [K in keyof GetApiMappingsRequest & keyof Omit<GetApiMappingsRequest, "DomainName">]: (GetApiMappingsRequest)[K]
    }>): Request<GetApiMappingsResponse, AWSError> {
        this.boot();
        return this.client.getApiMappings(
          this.ops["GetApiMappings"].apply(partialParams)
        );
    }

    invokeGetApis(partialParams: ToOptional<{
      [K in keyof GetApisRequest]: (GetApisRequest)[K]
    }>): Request<GetApisResponse, AWSError> {
        this.boot();
        return this.client.getApis(
          this.ops["GetApis"].apply(partialParams)
        );
    }

    invokeGetAuthorizer(partialParams: ToOptional<{
      [K in keyof GetAuthorizerRequest]: (GetAuthorizerRequest)[K]
    }>): Request<GetAuthorizerResponse, AWSError> {
        this.boot();
        return this.client.getAuthorizer(
          this.ops["GetAuthorizer"].apply(partialParams)
        );
    }

    invokeGetAuthorizers(partialParams: ToOptional<{
      [K in keyof GetAuthorizersRequest]: (GetAuthorizersRequest)[K]
    }>): Request<GetAuthorizersResponse, AWSError> {
        this.boot();
        return this.client.getAuthorizers(
          this.ops["GetAuthorizers"].apply(partialParams)
        );
    }

    invokeGetDeployment(partialParams: ToOptional<{
      [K in keyof GetDeploymentRequest]: (GetDeploymentRequest)[K]
    }>): Request<GetDeploymentResponse, AWSError> {
        this.boot();
        return this.client.getDeployment(
          this.ops["GetDeployment"].apply(partialParams)
        );
    }

    invokeGetDeployments(partialParams: ToOptional<{
      [K in keyof GetDeploymentsRequest]: (GetDeploymentsRequest)[K]
    }>): Request<GetDeploymentsResponse, AWSError> {
        this.boot();
        return this.client.getDeployments(
          this.ops["GetDeployments"].apply(partialParams)
        );
    }

    invokeGetDomainName(partialParams: ToOptional<{
      [K in keyof GetDomainNameRequest & keyof Omit<GetDomainNameRequest, "DomainName">]: (GetDomainNameRequest)[K]
    }>): Request<GetDomainNameResponse, AWSError> {
        this.boot();
        return this.client.getDomainName(
          this.ops["GetDomainName"].apply(partialParams)
        );
    }

    invokeGetDomainNames(partialParams: ToOptional<{
      [K in keyof GetDomainNamesRequest]: (GetDomainNamesRequest)[K]
    }>): Request<GetDomainNamesResponse, AWSError> {
        this.boot();
        return this.client.getDomainNames(
          this.ops["GetDomainNames"].apply(partialParams)
        );
    }

    invokeGetIntegration(partialParams: ToOptional<{
      [K in keyof GetIntegrationRequest]: (GetIntegrationRequest)[K]
    }>): Request<GetIntegrationResult, AWSError> {
        this.boot();
        return this.client.getIntegration(
          this.ops["GetIntegration"].apply(partialParams)
        );
    }

    invokeGetIntegrationResponse(partialParams: ToOptional<{
      [K in keyof GetIntegrationResponseRequest]: (GetIntegrationResponseRequest)[K]
    }>): Request<GetIntegrationResponseResponse, AWSError> {
        this.boot();
        return this.client.getIntegrationResponse(
          this.ops["GetIntegrationResponse"].apply(partialParams)
        );
    }

    invokeGetIntegrationResponses(partialParams: ToOptional<{
      [K in keyof GetIntegrationResponsesRequest]: (GetIntegrationResponsesRequest)[K]
    }>): Request<GetIntegrationResponsesResponse, AWSError> {
        this.boot();
        return this.client.getIntegrationResponses(
          this.ops["GetIntegrationResponses"].apply(partialParams)
        );
    }

    invokeGetIntegrations(partialParams: ToOptional<{
      [K in keyof GetIntegrationsRequest]: (GetIntegrationsRequest)[K]
    }>): Request<GetIntegrationsResponse, AWSError> {
        this.boot();
        return this.client.getIntegrations(
          this.ops["GetIntegrations"].apply(partialParams)
        );
    }

    invokeGetModel(partialParams: ToOptional<{
      [K in keyof GetModelRequest]: (GetModelRequest)[K]
    }>): Request<GetModelResponse, AWSError> {
        this.boot();
        return this.client.getModel(
          this.ops["GetModel"].apply(partialParams)
        );
    }

    invokeGetModelTemplate(partialParams: ToOptional<{
      [K in keyof GetModelTemplateRequest]: (GetModelTemplateRequest)[K]
    }>): Request<GetModelTemplateResponse, AWSError> {
        this.boot();
        return this.client.getModelTemplate(
          this.ops["GetModelTemplate"].apply(partialParams)
        );
    }

    invokeGetModels(partialParams: ToOptional<{
      [K in keyof GetModelsRequest]: (GetModelsRequest)[K]
    }>): Request<GetModelsResponse, AWSError> {
        this.boot();
        return this.client.getModels(
          this.ops["GetModels"].apply(partialParams)
        );
    }

    invokeGetRoute(partialParams: ToOptional<{
      [K in keyof GetRouteRequest]: (GetRouteRequest)[K]
    }>): Request<GetRouteResult, AWSError> {
        this.boot();
        return this.client.getRoute(
          this.ops["GetRoute"].apply(partialParams)
        );
    }

    invokeGetRouteResponse(partialParams: ToOptional<{
      [K in keyof GetRouteResponseRequest]: (GetRouteResponseRequest)[K]
    }>): Request<GetRouteResponseResponse, AWSError> {
        this.boot();
        return this.client.getRouteResponse(
          this.ops["GetRouteResponse"].apply(partialParams)
        );
    }

    invokeGetRouteResponses(partialParams: ToOptional<{
      [K in keyof GetRouteResponsesRequest]: (GetRouteResponsesRequest)[K]
    }>): Request<GetRouteResponsesResponse, AWSError> {
        this.boot();
        return this.client.getRouteResponses(
          this.ops["GetRouteResponses"].apply(partialParams)
        );
    }

    invokeGetRoutes(partialParams: ToOptional<{
      [K in keyof GetRoutesRequest]: (GetRoutesRequest)[K]
    }>): Request<GetRoutesResponse, AWSError> {
        this.boot();
        return this.client.getRoutes(
          this.ops["GetRoutes"].apply(partialParams)
        );
    }

    invokeGetStage(partialParams: ToOptional<{
      [K in keyof GetStageRequest]: (GetStageRequest)[K]
    }>): Request<GetStageResponse, AWSError> {
        this.boot();
        return this.client.getStage(
          this.ops["GetStage"].apply(partialParams)
        );
    }

    invokeGetStages(partialParams: ToOptional<{
      [K in keyof GetStagesRequest]: (GetStagesRequest)[K]
    }>): Request<GetStagesResponse, AWSError> {
        this.boot();
        return this.client.getStages(
          this.ops["GetStages"].apply(partialParams)
        );
    }

    invokeGetTags(partialParams: ToOptional<{
      [K in keyof GetTagsRequest]: (GetTagsRequest)[K]
    }>): Request<GetTagsResponse, AWSError> {
        this.boot();
        return this.client.getTags(
          this.ops["GetTags"].apply(partialParams)
        );
    }

    invokeGetVpcLink(partialParams: ToOptional<{
      [K in keyof GetVpcLinkRequest]: (GetVpcLinkRequest)[K]
    }>): Request<GetVpcLinkResponse, AWSError> {
        this.boot();
        return this.client.getVpcLink(
          this.ops["GetVpcLink"].apply(partialParams)
        );
    }

    invokeGetVpcLinks(partialParams: ToOptional<{
      [K in keyof GetVpcLinksRequest]: (GetVpcLinksRequest)[K]
    }>): Request<GetVpcLinksResponse, AWSError> {
        this.boot();
        return this.client.getVpcLinks(
          this.ops["GetVpcLinks"].apply(partialParams)
        );
    }

    invokeImportApi(partialParams: ToOptional<{
      [K in keyof ImportApiRequest]: (ImportApiRequest)[K]
    }>): Request<ImportApiResponse, AWSError> {
        this.boot();
        return this.client.importApi(
          this.ops["ImportApi"].apply(partialParams)
        );
    }

    invokeReimportApi(partialParams: ToOptional<{
      [K in keyof ReimportApiRequest]: (ReimportApiRequest)[K]
    }>): Request<ReimportApiResponse, AWSError> {
        this.boot();
        return this.client.reimportApi(
          this.ops["ReimportApi"].apply(partialParams)
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

    invokeUpdateApi(partialParams: ToOptional<{
      [K in keyof UpdateApiRequest]: (UpdateApiRequest)[K]
    }>): Request<UpdateApiResponse, AWSError> {
        this.boot();
        return this.client.updateApi(
          this.ops["UpdateApi"].apply(partialParams)
        );
    }

    invokeUpdateApiMapping(partialParams: ToOptional<{
      [K in keyof UpdateApiMappingRequest & keyof Omit<UpdateApiMappingRequest, "DomainName">]: (UpdateApiMappingRequest)[K]
    }>): Request<UpdateApiMappingResponse, AWSError> {
        this.boot();
        return this.client.updateApiMapping(
          this.ops["UpdateApiMapping"].apply(partialParams)
        );
    }

    invokeUpdateAuthorizer(partialParams: ToOptional<{
      [K in keyof UpdateAuthorizerRequest]: (UpdateAuthorizerRequest)[K]
    }>): Request<UpdateAuthorizerResponse, AWSError> {
        this.boot();
        return this.client.updateAuthorizer(
          this.ops["UpdateAuthorizer"].apply(partialParams)
        );
    }

    invokeUpdateDeployment(partialParams: ToOptional<{
      [K in keyof UpdateDeploymentRequest]: (UpdateDeploymentRequest)[K]
    }>): Request<UpdateDeploymentResponse, AWSError> {
        this.boot();
        return this.client.updateDeployment(
          this.ops["UpdateDeployment"].apply(partialParams)
        );
    }

    invokeUpdateDomainName(partialParams: ToOptional<{
      [K in keyof UpdateDomainNameRequest & keyof Omit<UpdateDomainNameRequest, "DomainName">]: (UpdateDomainNameRequest)[K]
    }>): Request<UpdateDomainNameResponse, AWSError> {
        this.boot();
        return this.client.updateDomainName(
          this.ops["UpdateDomainName"].apply(partialParams)
        );
    }

    invokeUpdateIntegration(partialParams: ToOptional<{
      [K in keyof UpdateIntegrationRequest]: (UpdateIntegrationRequest)[K]
    }>): Request<UpdateIntegrationResult, AWSError> {
        this.boot();
        return this.client.updateIntegration(
          this.ops["UpdateIntegration"].apply(partialParams)
        );
    }

    invokeUpdateIntegrationResponse(partialParams: ToOptional<{
      [K in keyof UpdateIntegrationResponseRequest]: (UpdateIntegrationResponseRequest)[K]
    }>): Request<UpdateIntegrationResponseResponse, AWSError> {
        this.boot();
        return this.client.updateIntegrationResponse(
          this.ops["UpdateIntegrationResponse"].apply(partialParams)
        );
    }

    invokeUpdateModel(partialParams: ToOptional<{
      [K in keyof UpdateModelRequest]: (UpdateModelRequest)[K]
    }>): Request<UpdateModelResponse, AWSError> {
        this.boot();
        return this.client.updateModel(
          this.ops["UpdateModel"].apply(partialParams)
        );
    }

    invokeUpdateRoute(partialParams: ToOptional<{
      [K in keyof UpdateRouteRequest]: (UpdateRouteRequest)[K]
    }>): Request<UpdateRouteResult, AWSError> {
        this.boot();
        return this.client.updateRoute(
          this.ops["UpdateRoute"].apply(partialParams)
        );
    }

    invokeUpdateRouteResponse(partialParams: ToOptional<{
      [K in keyof UpdateRouteResponseRequest]: (UpdateRouteResponseRequest)[K]
    }>): Request<UpdateRouteResponseResponse, AWSError> {
        this.boot();
        return this.client.updateRouteResponse(
          this.ops["UpdateRouteResponse"].apply(partialParams)
        );
    }

    invokeUpdateStage(partialParams: ToOptional<{
      [K in keyof UpdateStageRequest]: (UpdateStageRequest)[K]
    }>): Request<UpdateStageResponse, AWSError> {
        this.boot();
        return this.client.updateStage(
          this.ops["UpdateStage"].apply(partialParams)
        );
    }

    invokeUpdateVpcLink(partialParams: ToOptional<{
      [K in keyof UpdateVpcLinkRequest]: (UpdateVpcLinkRequest)[K]
    }>): Request<UpdateVpcLinkResponse, AWSError> {
        this.boot();
        return this.client.updateVpcLink(
          this.ops["UpdateVpcLink"].apply(partialParams)
        );
    }
}