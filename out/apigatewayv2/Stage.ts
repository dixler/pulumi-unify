
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
const schema = require("../apis/apigatewayv2-2018-11-29.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.apigatewayv2.Stage {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.apigatewayv2.Stage>) {
        super(...args)
        this.client = new awssdk.ApiGatewayV2()
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

    invokeCreateApi(partialParams: ToOptional<{
      [K in keyof CreateApiRequest & keyof CreateApiRequest & keyof CreateApiRequest & keyof CreateApiRequest & keyof CreateApiRequest & keyof CreateApiRequest & keyof CreateApiRequest & keyof CreateApiRequest]: (CreateApiRequest & CreateApiRequest & CreateApiRequest & CreateApiRequest & CreateApiRequest & CreateApiRequest & CreateApiRequest & CreateApiRequest)[K]
    }>): Request<CreateApiResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createApi(
          this.ops["CreateApi"].applicator.apply(partialParams)
        );
    }

    invokeCreateApiMapping(partialParams: ToOptional<{
      [K in keyof CreateApiMappingRequest & keyof CreateApiMappingRequest & keyof CreateApiMappingRequest & keyof CreateApiMappingRequest & keyof CreateApiMappingRequest & keyof CreateApiMappingRequest & keyof CreateApiMappingRequest & keyof CreateApiMappingRequest]: (CreateApiMappingRequest & CreateApiMappingRequest & CreateApiMappingRequest & CreateApiMappingRequest & CreateApiMappingRequest & CreateApiMappingRequest & CreateApiMappingRequest & CreateApiMappingRequest)[K]
    }>): Request<CreateApiMappingResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createApiMapping(
          this.ops["CreateApiMapping"].applicator.apply(partialParams)
        );
    }

    invokeCreateAuthorizer(partialParams: ToOptional<{
      [K in keyof CreateAuthorizerRequest & keyof CreateAuthorizerRequest & keyof CreateAuthorizerRequest & keyof CreateAuthorizerRequest & keyof CreateAuthorizerRequest & keyof CreateAuthorizerRequest & keyof CreateAuthorizerRequest & keyof CreateAuthorizerRequest]: (CreateAuthorizerRequest & CreateAuthorizerRequest & CreateAuthorizerRequest & CreateAuthorizerRequest & CreateAuthorizerRequest & CreateAuthorizerRequest & CreateAuthorizerRequest & CreateAuthorizerRequest)[K]
    }>): Request<CreateAuthorizerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAuthorizer(
          this.ops["CreateAuthorizer"].applicator.apply(partialParams)
        );
    }

    invokeCreateDeployment(partialParams: ToOptional<{
      [K in keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest]: (CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest)[K]
    }>): Request<CreateDeploymentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDeployment(
          this.ops["CreateDeployment"].applicator.apply(partialParams)
        );
    }

    invokeCreateDomainName(partialParams: ToOptional<{
      [K in keyof CreateDomainNameRequest & keyof CreateDomainNameRequest & keyof CreateDomainNameRequest & keyof CreateDomainNameRequest & keyof CreateDomainNameRequest & keyof CreateDomainNameRequest & keyof CreateDomainNameRequest & keyof CreateDomainNameRequest]: (CreateDomainNameRequest & CreateDomainNameRequest & CreateDomainNameRequest & CreateDomainNameRequest & CreateDomainNameRequest & CreateDomainNameRequest & CreateDomainNameRequest & CreateDomainNameRequest)[K]
    }>): Request<CreateDomainNameResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDomainName(
          this.ops["CreateDomainName"].applicator.apply(partialParams)
        );
    }

    invokeCreateIntegration(partialParams: ToOptional<{
      [K in keyof CreateIntegrationRequest & keyof CreateIntegrationRequest & keyof CreateIntegrationRequest & keyof CreateIntegrationRequest & keyof CreateIntegrationRequest & keyof CreateIntegrationRequest & keyof CreateIntegrationRequest & keyof CreateIntegrationRequest]: (CreateIntegrationRequest & CreateIntegrationRequest & CreateIntegrationRequest & CreateIntegrationRequest & CreateIntegrationRequest & CreateIntegrationRequest & CreateIntegrationRequest & CreateIntegrationRequest)[K]
    }>): Request<CreateIntegrationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createIntegration(
          this.ops["CreateIntegration"].applicator.apply(partialParams)
        );
    }

    invokeCreateIntegrationResponse(partialParams: ToOptional<{
      [K in keyof CreateIntegrationResponseRequest & keyof CreateIntegrationResponseRequest & keyof CreateIntegrationResponseRequest & keyof CreateIntegrationResponseRequest & keyof CreateIntegrationResponseRequest & keyof CreateIntegrationResponseRequest & keyof CreateIntegrationResponseRequest & keyof CreateIntegrationResponseRequest]: (CreateIntegrationResponseRequest & CreateIntegrationResponseRequest & CreateIntegrationResponseRequest & CreateIntegrationResponseRequest & CreateIntegrationResponseRequest & CreateIntegrationResponseRequest & CreateIntegrationResponseRequest & CreateIntegrationResponseRequest)[K]
    }>): Request<CreateIntegrationResponseResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createIntegrationResponse(
          this.ops["CreateIntegrationResponse"].applicator.apply(partialParams)
        );
    }

    invokeCreateModel(partialParams: ToOptional<{
      [K in keyof CreateModelRequest & keyof CreateModelRequest & keyof CreateModelRequest & keyof CreateModelRequest & keyof CreateModelRequest & keyof CreateModelRequest & keyof CreateModelRequest & keyof CreateModelRequest]: (CreateModelRequest & CreateModelRequest & CreateModelRequest & CreateModelRequest & CreateModelRequest & CreateModelRequest & CreateModelRequest & CreateModelRequest)[K]
    }>): Request<CreateModelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createModel(
          this.ops["CreateModel"].applicator.apply(partialParams)
        );
    }

    invokeCreateRoute(partialParams: ToOptional<{
      [K in keyof CreateRouteRequest & keyof CreateRouteRequest & keyof CreateRouteRequest & keyof CreateRouteRequest & keyof CreateRouteRequest & keyof CreateRouteRequest & keyof CreateRouteRequest & keyof CreateRouteRequest]: (CreateRouteRequest & CreateRouteRequest & CreateRouteRequest & CreateRouteRequest & CreateRouteRequest & CreateRouteRequest & CreateRouteRequest & CreateRouteRequest)[K]
    }>): Request<CreateRouteResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRoute(
          this.ops["CreateRoute"].applicator.apply(partialParams)
        );
    }

    invokeCreateRouteResponse(partialParams: ToOptional<{
      [K in keyof CreateRouteResponseRequest & keyof CreateRouteResponseRequest & keyof CreateRouteResponseRequest & keyof CreateRouteResponseRequest & keyof CreateRouteResponseRequest & keyof CreateRouteResponseRequest & keyof CreateRouteResponseRequest & keyof CreateRouteResponseRequest]: (CreateRouteResponseRequest & CreateRouteResponseRequest & CreateRouteResponseRequest & CreateRouteResponseRequest & CreateRouteResponseRequest & CreateRouteResponseRequest & CreateRouteResponseRequest & CreateRouteResponseRequest)[K]
    }>): Request<CreateRouteResponseResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRouteResponse(
          this.ops["CreateRouteResponse"].applicator.apply(partialParams)
        );
    }

    invokeCreateStage(partialParams: ToOptional<{
      [K in keyof CreateStageRequest & keyof CreateStageRequest & keyof CreateStageRequest & keyof CreateStageRequest & keyof CreateStageRequest & keyof CreateStageRequest & keyof CreateStageRequest & keyof CreateStageRequest]: (CreateStageRequest & CreateStageRequest & CreateStageRequest & CreateStageRequest & CreateStageRequest & CreateStageRequest & CreateStageRequest & CreateStageRequest)[K]
    }>): Request<CreateStageResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createStage(
          this.ops["CreateStage"].applicator.apply(partialParams)
        );
    }

    invokeCreateVpcLink(partialParams: ToOptional<{
      [K in keyof CreateVpcLinkRequest & keyof CreateVpcLinkRequest & keyof CreateVpcLinkRequest & keyof CreateVpcLinkRequest & keyof CreateVpcLinkRequest & keyof CreateVpcLinkRequest & keyof CreateVpcLinkRequest & keyof CreateVpcLinkRequest]: (CreateVpcLinkRequest & CreateVpcLinkRequest & CreateVpcLinkRequest & CreateVpcLinkRequest & CreateVpcLinkRequest & CreateVpcLinkRequest & CreateVpcLinkRequest & CreateVpcLinkRequest)[K]
    }>): Request<CreateVpcLinkResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVpcLink(
          this.ops["CreateVpcLink"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAccessLogSettings(partialParams: ToOptional<{
      [K in keyof DeleteAccessLogSettingsRequest & keyof DeleteAccessLogSettingsRequest & keyof DeleteAccessLogSettingsRequest & keyof DeleteAccessLogSettingsRequest & keyof DeleteAccessLogSettingsRequest & keyof DeleteAccessLogSettingsRequest & keyof DeleteAccessLogSettingsRequest & keyof DeleteAccessLogSettingsRequest]: (DeleteAccessLogSettingsRequest & DeleteAccessLogSettingsRequest & DeleteAccessLogSettingsRequest & DeleteAccessLogSettingsRequest & DeleteAccessLogSettingsRequest & DeleteAccessLogSettingsRequest & DeleteAccessLogSettingsRequest & DeleteAccessLogSettingsRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAccessLogSettings(
          this.ops["DeleteAccessLogSettings"].applicator.apply(partialParams)
        );
    }

    invokeDeleteApi(partialParams: ToOptional<{
      [K in keyof DeleteApiRequest & keyof DeleteApiRequest & keyof DeleteApiRequest & keyof DeleteApiRequest & keyof DeleteApiRequest & keyof DeleteApiRequest & keyof DeleteApiRequest & keyof DeleteApiRequest]: (DeleteApiRequest & DeleteApiRequest & DeleteApiRequest & DeleteApiRequest & DeleteApiRequest & DeleteApiRequest & DeleteApiRequest & DeleteApiRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApi(
          this.ops["DeleteApi"].applicator.apply(partialParams)
        );
    }

    invokeDeleteApiMapping(partialParams: ToOptional<{
      [K in keyof DeleteApiMappingRequest & keyof DeleteApiMappingRequest & keyof DeleteApiMappingRequest & keyof DeleteApiMappingRequest & keyof DeleteApiMappingRequest & keyof DeleteApiMappingRequest & keyof DeleteApiMappingRequest & keyof DeleteApiMappingRequest]: (DeleteApiMappingRequest & DeleteApiMappingRequest & DeleteApiMappingRequest & DeleteApiMappingRequest & DeleteApiMappingRequest & DeleteApiMappingRequest & DeleteApiMappingRequest & DeleteApiMappingRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApiMapping(
          this.ops["DeleteApiMapping"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAuthorizer(partialParams: ToOptional<{
      [K in keyof DeleteAuthorizerRequest & keyof DeleteAuthorizerRequest & keyof DeleteAuthorizerRequest & keyof DeleteAuthorizerRequest & keyof DeleteAuthorizerRequest & keyof DeleteAuthorizerRequest & keyof DeleteAuthorizerRequest & keyof DeleteAuthorizerRequest]: (DeleteAuthorizerRequest & DeleteAuthorizerRequest & DeleteAuthorizerRequest & DeleteAuthorizerRequest & DeleteAuthorizerRequest & DeleteAuthorizerRequest & DeleteAuthorizerRequest & DeleteAuthorizerRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAuthorizer(
          this.ops["DeleteAuthorizer"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCorsConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteCorsConfigurationRequest & keyof DeleteCorsConfigurationRequest & keyof DeleteCorsConfigurationRequest & keyof DeleteCorsConfigurationRequest & keyof DeleteCorsConfigurationRequest & keyof DeleteCorsConfigurationRequest & keyof DeleteCorsConfigurationRequest & keyof DeleteCorsConfigurationRequest]: (DeleteCorsConfigurationRequest & DeleteCorsConfigurationRequest & DeleteCorsConfigurationRequest & DeleteCorsConfigurationRequest & DeleteCorsConfigurationRequest & DeleteCorsConfigurationRequest & DeleteCorsConfigurationRequest & DeleteCorsConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCorsConfiguration(
          this.ops["DeleteCorsConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDeployment(partialParams: ToOptional<{
      [K in keyof DeleteDeploymentRequest & keyof DeleteDeploymentRequest & keyof DeleteDeploymentRequest & keyof DeleteDeploymentRequest & keyof DeleteDeploymentRequest & keyof DeleteDeploymentRequest & keyof DeleteDeploymentRequest & keyof DeleteDeploymentRequest]: (DeleteDeploymentRequest & DeleteDeploymentRequest & DeleteDeploymentRequest & DeleteDeploymentRequest & DeleteDeploymentRequest & DeleteDeploymentRequest & DeleteDeploymentRequest & DeleteDeploymentRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDeployment(
          this.ops["DeleteDeployment"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDomainName(partialParams: ToOptional<{
      [K in keyof DeleteDomainNameRequest & keyof DeleteDomainNameRequest & keyof DeleteDomainNameRequest & keyof DeleteDomainNameRequest & keyof DeleteDomainNameRequest & keyof DeleteDomainNameRequest & keyof DeleteDomainNameRequest & keyof DeleteDomainNameRequest]: (DeleteDomainNameRequest & DeleteDomainNameRequest & DeleteDomainNameRequest & DeleteDomainNameRequest & DeleteDomainNameRequest & DeleteDomainNameRequest & DeleteDomainNameRequest & DeleteDomainNameRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDomainName(
          this.ops["DeleteDomainName"].applicator.apply(partialParams)
        );
    }

    invokeDeleteIntegration(partialParams: ToOptional<{
      [K in keyof DeleteIntegrationRequest & keyof DeleteIntegrationRequest & keyof DeleteIntegrationRequest & keyof DeleteIntegrationRequest & keyof DeleteIntegrationRequest & keyof DeleteIntegrationRequest & keyof DeleteIntegrationRequest & keyof DeleteIntegrationRequest]: (DeleteIntegrationRequest & DeleteIntegrationRequest & DeleteIntegrationRequest & DeleteIntegrationRequest & DeleteIntegrationRequest & DeleteIntegrationRequest & DeleteIntegrationRequest & DeleteIntegrationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteIntegration(
          this.ops["DeleteIntegration"].applicator.apply(partialParams)
        );
    }

    invokeDeleteIntegrationResponse(partialParams: ToOptional<{
      [K in keyof DeleteIntegrationResponseRequest & keyof DeleteIntegrationResponseRequest & keyof DeleteIntegrationResponseRequest & keyof DeleteIntegrationResponseRequest & keyof DeleteIntegrationResponseRequest & keyof DeleteIntegrationResponseRequest & keyof DeleteIntegrationResponseRequest & keyof DeleteIntegrationResponseRequest]: (DeleteIntegrationResponseRequest & DeleteIntegrationResponseRequest & DeleteIntegrationResponseRequest & DeleteIntegrationResponseRequest & DeleteIntegrationResponseRequest & DeleteIntegrationResponseRequest & DeleteIntegrationResponseRequest & DeleteIntegrationResponseRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteIntegrationResponse(
          this.ops["DeleteIntegrationResponse"].applicator.apply(partialParams)
        );
    }

    invokeDeleteModel(partialParams: ToOptional<{
      [K in keyof DeleteModelRequest & keyof DeleteModelRequest & keyof DeleteModelRequest & keyof DeleteModelRequest & keyof DeleteModelRequest & keyof DeleteModelRequest & keyof DeleteModelRequest & keyof DeleteModelRequest]: (DeleteModelRequest & DeleteModelRequest & DeleteModelRequest & DeleteModelRequest & DeleteModelRequest & DeleteModelRequest & DeleteModelRequest & DeleteModelRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteModel(
          this.ops["DeleteModel"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRoute(partialParams: ToOptional<{
      [K in keyof DeleteRouteRequest & keyof DeleteRouteRequest & keyof DeleteRouteRequest & keyof DeleteRouteRequest & keyof DeleteRouteRequest & keyof DeleteRouteRequest & keyof DeleteRouteRequest & keyof DeleteRouteRequest]: (DeleteRouteRequest & DeleteRouteRequest & DeleteRouteRequest & DeleteRouteRequest & DeleteRouteRequest & DeleteRouteRequest & DeleteRouteRequest & DeleteRouteRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRoute(
          this.ops["DeleteRoute"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRouteRequestParameter(partialParams: ToOptional<{
      [K in keyof DeleteRouteRequestParameterRequest & keyof DeleteRouteRequestParameterRequest & keyof DeleteRouteRequestParameterRequest & keyof DeleteRouteRequestParameterRequest & keyof DeleteRouteRequestParameterRequest & keyof DeleteRouteRequestParameterRequest & keyof DeleteRouteRequestParameterRequest & keyof DeleteRouteRequestParameterRequest]: (DeleteRouteRequestParameterRequest & DeleteRouteRequestParameterRequest & DeleteRouteRequestParameterRequest & DeleteRouteRequestParameterRequest & DeleteRouteRequestParameterRequest & DeleteRouteRequestParameterRequest & DeleteRouteRequestParameterRequest & DeleteRouteRequestParameterRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRouteRequestParameter(
          this.ops["DeleteRouteRequestParameter"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRouteResponse(partialParams: ToOptional<{
      [K in keyof DeleteRouteResponseRequest & keyof DeleteRouteResponseRequest & keyof DeleteRouteResponseRequest & keyof DeleteRouteResponseRequest & keyof DeleteRouteResponseRequest & keyof DeleteRouteResponseRequest & keyof DeleteRouteResponseRequest & keyof DeleteRouteResponseRequest]: (DeleteRouteResponseRequest & DeleteRouteResponseRequest & DeleteRouteResponseRequest & DeleteRouteResponseRequest & DeleteRouteResponseRequest & DeleteRouteResponseRequest & DeleteRouteResponseRequest & DeleteRouteResponseRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRouteResponse(
          this.ops["DeleteRouteResponse"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRouteSettings(partialParams: ToOptional<{
      [K in keyof DeleteRouteSettingsRequest & keyof DeleteRouteSettingsRequest & keyof DeleteRouteSettingsRequest & keyof DeleteRouteSettingsRequest & keyof DeleteRouteSettingsRequest & keyof DeleteRouteSettingsRequest & keyof DeleteRouteSettingsRequest & keyof DeleteRouteSettingsRequest]: (DeleteRouteSettingsRequest & DeleteRouteSettingsRequest & DeleteRouteSettingsRequest & DeleteRouteSettingsRequest & DeleteRouteSettingsRequest & DeleteRouteSettingsRequest & DeleteRouteSettingsRequest & DeleteRouteSettingsRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRouteSettings(
          this.ops["DeleteRouteSettings"].applicator.apply(partialParams)
        );
    }

    invokeDeleteStage(partialParams: ToOptional<{
      [K in keyof DeleteStageRequest & keyof DeleteStageRequest & keyof DeleteStageRequest & keyof DeleteStageRequest & keyof DeleteStageRequest & keyof DeleteStageRequest & keyof DeleteStageRequest & keyof DeleteStageRequest]: (DeleteStageRequest & DeleteStageRequest & DeleteStageRequest & DeleteStageRequest & DeleteStageRequest & DeleteStageRequest & DeleteStageRequest & DeleteStageRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteStage(
          this.ops["DeleteStage"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVpcLink(partialParams: ToOptional<{
      [K in keyof DeleteVpcLinkRequest & keyof DeleteVpcLinkRequest & keyof DeleteVpcLinkRequest & keyof DeleteVpcLinkRequest & keyof DeleteVpcLinkRequest & keyof DeleteVpcLinkRequest & keyof DeleteVpcLinkRequest & keyof DeleteVpcLinkRequest]: (DeleteVpcLinkRequest & DeleteVpcLinkRequest & DeleteVpcLinkRequest & DeleteVpcLinkRequest & DeleteVpcLinkRequest & DeleteVpcLinkRequest & DeleteVpcLinkRequest & DeleteVpcLinkRequest)[K]
    }>): Request<DeleteVpcLinkResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVpcLink(
          this.ops["DeleteVpcLink"].applicator.apply(partialParams)
        );
    }

    invokeExportApi(partialParams: ToOptional<{
      [K in keyof ExportApiRequest & keyof ExportApiRequest & keyof ExportApiRequest & keyof ExportApiRequest & keyof ExportApiRequest & keyof ExportApiRequest & keyof ExportApiRequest & keyof ExportApiRequest]: (ExportApiRequest & ExportApiRequest & ExportApiRequest & ExportApiRequest & ExportApiRequest & ExportApiRequest & ExportApiRequest & ExportApiRequest)[K]
    }>): Request<ExportApiResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.exportApi(
          this.ops["ExportApi"].applicator.apply(partialParams)
        );
    }

    invokeResetAuthorizersCache(partialParams: ToOptional<{
      [K in keyof ResetAuthorizersCacheRequest & keyof ResetAuthorizersCacheRequest & keyof ResetAuthorizersCacheRequest & keyof ResetAuthorizersCacheRequest & keyof ResetAuthorizersCacheRequest & keyof ResetAuthorizersCacheRequest & keyof ResetAuthorizersCacheRequest & keyof ResetAuthorizersCacheRequest]: (ResetAuthorizersCacheRequest & ResetAuthorizersCacheRequest & ResetAuthorizersCacheRequest & ResetAuthorizersCacheRequest & ResetAuthorizersCacheRequest & ResetAuthorizersCacheRequest & ResetAuthorizersCacheRequest & ResetAuthorizersCacheRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetAuthorizersCache(
          this.ops["ResetAuthorizersCache"].applicator.apply(partialParams)
        );
    }

    invokeGetApi(partialParams: ToOptional<{
      [K in keyof GetApiRequest & keyof GetApiRequest & keyof GetApiRequest & keyof GetApiRequest & keyof GetApiRequest & keyof GetApiRequest & keyof GetApiRequest & keyof GetApiRequest]: (GetApiRequest & GetApiRequest & GetApiRequest & GetApiRequest & GetApiRequest & GetApiRequest & GetApiRequest & GetApiRequest)[K]
    }>): Request<GetApiResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getApi(
          this.ops["GetApi"].applicator.apply(partialParams)
        );
    }

    invokeGetApiMapping(partialParams: ToOptional<{
      [K in keyof GetApiMappingRequest & keyof GetApiMappingRequest & keyof GetApiMappingRequest & keyof GetApiMappingRequest & keyof GetApiMappingRequest & keyof GetApiMappingRequest & keyof GetApiMappingRequest & keyof GetApiMappingRequest]: (GetApiMappingRequest & GetApiMappingRequest & GetApiMappingRequest & GetApiMappingRequest & GetApiMappingRequest & GetApiMappingRequest & GetApiMappingRequest & GetApiMappingRequest)[K]
    }>): Request<GetApiMappingResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getApiMapping(
          this.ops["GetApiMapping"].applicator.apply(partialParams)
        );
    }

    invokeGetApiMappings(partialParams: ToOptional<{
      [K in keyof GetApiMappingsRequest & keyof GetApiMappingsRequest & keyof GetApiMappingsRequest & keyof GetApiMappingsRequest & keyof GetApiMappingsRequest & keyof GetApiMappingsRequest & keyof GetApiMappingsRequest & keyof GetApiMappingsRequest]: (GetApiMappingsRequest & GetApiMappingsRequest & GetApiMappingsRequest & GetApiMappingsRequest & GetApiMappingsRequest & GetApiMappingsRequest & GetApiMappingsRequest & GetApiMappingsRequest)[K]
    }>): Request<GetApiMappingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getApiMappings(
          this.ops["GetApiMappings"].applicator.apply(partialParams)
        );
    }

    invokeGetAuthorizer(partialParams: ToOptional<{
      [K in keyof GetAuthorizerRequest & keyof GetAuthorizerRequest & keyof GetAuthorizerRequest & keyof GetAuthorizerRequest & keyof GetAuthorizerRequest & keyof GetAuthorizerRequest & keyof GetAuthorizerRequest & keyof GetAuthorizerRequest]: (GetAuthorizerRequest & GetAuthorizerRequest & GetAuthorizerRequest & GetAuthorizerRequest & GetAuthorizerRequest & GetAuthorizerRequest & GetAuthorizerRequest & GetAuthorizerRequest)[K]
    }>): Request<GetAuthorizerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAuthorizer(
          this.ops["GetAuthorizer"].applicator.apply(partialParams)
        );
    }

    invokeGetAuthorizers(partialParams: ToOptional<{
      [K in keyof GetAuthorizersRequest & keyof GetAuthorizersRequest & keyof GetAuthorizersRequest & keyof GetAuthorizersRequest & keyof GetAuthorizersRequest & keyof GetAuthorizersRequest & keyof GetAuthorizersRequest & keyof GetAuthorizersRequest]: (GetAuthorizersRequest & GetAuthorizersRequest & GetAuthorizersRequest & GetAuthorizersRequest & GetAuthorizersRequest & GetAuthorizersRequest & GetAuthorizersRequest & GetAuthorizersRequest)[K]
    }>): Request<GetAuthorizersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAuthorizers(
          this.ops["GetAuthorizers"].applicator.apply(partialParams)
        );
    }

    invokeGetDeployment(partialParams: ToOptional<{
      [K in keyof GetDeploymentRequest & keyof GetDeploymentRequest & keyof GetDeploymentRequest & keyof GetDeploymentRequest & keyof GetDeploymentRequest & keyof GetDeploymentRequest & keyof GetDeploymentRequest & keyof GetDeploymentRequest]: (GetDeploymentRequest & GetDeploymentRequest & GetDeploymentRequest & GetDeploymentRequest & GetDeploymentRequest & GetDeploymentRequest & GetDeploymentRequest & GetDeploymentRequest)[K]
    }>): Request<GetDeploymentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDeployment(
          this.ops["GetDeployment"].applicator.apply(partialParams)
        );
    }

    invokeGetDeployments(partialParams: ToOptional<{
      [K in keyof GetDeploymentsRequest & keyof GetDeploymentsRequest & keyof GetDeploymentsRequest & keyof GetDeploymentsRequest & keyof GetDeploymentsRequest & keyof GetDeploymentsRequest & keyof GetDeploymentsRequest & keyof GetDeploymentsRequest]: (GetDeploymentsRequest & GetDeploymentsRequest & GetDeploymentsRequest & GetDeploymentsRequest & GetDeploymentsRequest & GetDeploymentsRequest & GetDeploymentsRequest & GetDeploymentsRequest)[K]
    }>): Request<GetDeploymentsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDeployments(
          this.ops["GetDeployments"].applicator.apply(partialParams)
        );
    }

    invokeGetDomainName(partialParams: ToOptional<{
      [K in keyof GetDomainNameRequest & keyof GetDomainNameRequest & keyof GetDomainNameRequest & keyof GetDomainNameRequest & keyof GetDomainNameRequest & keyof GetDomainNameRequest & keyof GetDomainNameRequest & keyof GetDomainNameRequest]: (GetDomainNameRequest & GetDomainNameRequest & GetDomainNameRequest & GetDomainNameRequest & GetDomainNameRequest & GetDomainNameRequest & GetDomainNameRequest & GetDomainNameRequest)[K]
    }>): Request<GetDomainNameResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDomainName(
          this.ops["GetDomainName"].applicator.apply(partialParams)
        );
    }

    invokeGetIntegration(partialParams: ToOptional<{
      [K in keyof GetIntegrationRequest & keyof GetIntegrationRequest & keyof GetIntegrationRequest & keyof GetIntegrationRequest & keyof GetIntegrationRequest & keyof GetIntegrationRequest & keyof GetIntegrationRequest & keyof GetIntegrationRequest]: (GetIntegrationRequest & GetIntegrationRequest & GetIntegrationRequest & GetIntegrationRequest & GetIntegrationRequest & GetIntegrationRequest & GetIntegrationRequest & GetIntegrationRequest)[K]
    }>): Request<GetIntegrationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getIntegration(
          this.ops["GetIntegration"].applicator.apply(partialParams)
        );
    }

    invokeGetIntegrationResponse(partialParams: ToOptional<{
      [K in keyof GetIntegrationResponseRequest & keyof GetIntegrationResponseRequest & keyof GetIntegrationResponseRequest & keyof GetIntegrationResponseRequest & keyof GetIntegrationResponseRequest & keyof GetIntegrationResponseRequest & keyof GetIntegrationResponseRequest & keyof GetIntegrationResponseRequest]: (GetIntegrationResponseRequest & GetIntegrationResponseRequest & GetIntegrationResponseRequest & GetIntegrationResponseRequest & GetIntegrationResponseRequest & GetIntegrationResponseRequest & GetIntegrationResponseRequest & GetIntegrationResponseRequest)[K]
    }>): Request<GetIntegrationResponseResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getIntegrationResponse(
          this.ops["GetIntegrationResponse"].applicator.apply(partialParams)
        );
    }

    invokeGetIntegrationResponses(partialParams: ToOptional<{
      [K in keyof GetIntegrationResponsesRequest & keyof GetIntegrationResponsesRequest & keyof GetIntegrationResponsesRequest & keyof GetIntegrationResponsesRequest & keyof GetIntegrationResponsesRequest & keyof GetIntegrationResponsesRequest & keyof GetIntegrationResponsesRequest & keyof GetIntegrationResponsesRequest]: (GetIntegrationResponsesRequest & GetIntegrationResponsesRequest & GetIntegrationResponsesRequest & GetIntegrationResponsesRequest & GetIntegrationResponsesRequest & GetIntegrationResponsesRequest & GetIntegrationResponsesRequest & GetIntegrationResponsesRequest)[K]
    }>): Request<GetIntegrationResponsesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getIntegrationResponses(
          this.ops["GetIntegrationResponses"].applicator.apply(partialParams)
        );
    }

    invokeGetIntegrations(partialParams: ToOptional<{
      [K in keyof GetIntegrationsRequest & keyof GetIntegrationsRequest & keyof GetIntegrationsRequest & keyof GetIntegrationsRequest & keyof GetIntegrationsRequest & keyof GetIntegrationsRequest & keyof GetIntegrationsRequest & keyof GetIntegrationsRequest]: (GetIntegrationsRequest & GetIntegrationsRequest & GetIntegrationsRequest & GetIntegrationsRequest & GetIntegrationsRequest & GetIntegrationsRequest & GetIntegrationsRequest & GetIntegrationsRequest)[K]
    }>): Request<GetIntegrationsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getIntegrations(
          this.ops["GetIntegrations"].applicator.apply(partialParams)
        );
    }

    invokeGetModel(partialParams: ToOptional<{
      [K in keyof GetModelRequest & keyof GetModelRequest & keyof GetModelRequest & keyof GetModelRequest & keyof GetModelRequest & keyof GetModelRequest & keyof GetModelRequest & keyof GetModelRequest]: (GetModelRequest & GetModelRequest & GetModelRequest & GetModelRequest & GetModelRequest & GetModelRequest & GetModelRequest & GetModelRequest)[K]
    }>): Request<GetModelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getModel(
          this.ops["GetModel"].applicator.apply(partialParams)
        );
    }

    invokeGetModelTemplate(partialParams: ToOptional<{
      [K in keyof GetModelTemplateRequest & keyof GetModelTemplateRequest & keyof GetModelTemplateRequest & keyof GetModelTemplateRequest & keyof GetModelTemplateRequest & keyof GetModelTemplateRequest & keyof GetModelTemplateRequest & keyof GetModelTemplateRequest]: (GetModelTemplateRequest & GetModelTemplateRequest & GetModelTemplateRequest & GetModelTemplateRequest & GetModelTemplateRequest & GetModelTemplateRequest & GetModelTemplateRequest & GetModelTemplateRequest)[K]
    }>): Request<GetModelTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getModelTemplate(
          this.ops["GetModelTemplate"].applicator.apply(partialParams)
        );
    }

    invokeGetModels(partialParams: ToOptional<{
      [K in keyof GetModelsRequest & keyof GetModelsRequest & keyof GetModelsRequest & keyof GetModelsRequest & keyof GetModelsRequest & keyof GetModelsRequest & keyof GetModelsRequest & keyof GetModelsRequest]: (GetModelsRequest & GetModelsRequest & GetModelsRequest & GetModelsRequest & GetModelsRequest & GetModelsRequest & GetModelsRequest & GetModelsRequest)[K]
    }>): Request<GetModelsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getModels(
          this.ops["GetModels"].applicator.apply(partialParams)
        );
    }

    invokeGetRoute(partialParams: ToOptional<{
      [K in keyof GetRouteRequest & keyof GetRouteRequest & keyof GetRouteRequest & keyof GetRouteRequest & keyof GetRouteRequest & keyof GetRouteRequest & keyof GetRouteRequest & keyof GetRouteRequest]: (GetRouteRequest & GetRouteRequest & GetRouteRequest & GetRouteRequest & GetRouteRequest & GetRouteRequest & GetRouteRequest & GetRouteRequest)[K]
    }>): Request<GetRouteResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRoute(
          this.ops["GetRoute"].applicator.apply(partialParams)
        );
    }

    invokeGetRouteResponse(partialParams: ToOptional<{
      [K in keyof GetRouteResponseRequest & keyof GetRouteResponseRequest & keyof GetRouteResponseRequest & keyof GetRouteResponseRequest & keyof GetRouteResponseRequest & keyof GetRouteResponseRequest & keyof GetRouteResponseRequest & keyof GetRouteResponseRequest]: (GetRouteResponseRequest & GetRouteResponseRequest & GetRouteResponseRequest & GetRouteResponseRequest & GetRouteResponseRequest & GetRouteResponseRequest & GetRouteResponseRequest & GetRouteResponseRequest)[K]
    }>): Request<GetRouteResponseResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRouteResponse(
          this.ops["GetRouteResponse"].applicator.apply(partialParams)
        );
    }

    invokeGetRouteResponses(partialParams: ToOptional<{
      [K in keyof GetRouteResponsesRequest & keyof GetRouteResponsesRequest & keyof GetRouteResponsesRequest & keyof GetRouteResponsesRequest & keyof GetRouteResponsesRequest & keyof GetRouteResponsesRequest & keyof GetRouteResponsesRequest & keyof GetRouteResponsesRequest]: (GetRouteResponsesRequest & GetRouteResponsesRequest & GetRouteResponsesRequest & GetRouteResponsesRequest & GetRouteResponsesRequest & GetRouteResponsesRequest & GetRouteResponsesRequest & GetRouteResponsesRequest)[K]
    }>): Request<GetRouteResponsesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRouteResponses(
          this.ops["GetRouteResponses"].applicator.apply(partialParams)
        );
    }

    invokeGetRoutes(partialParams: ToOptional<{
      [K in keyof GetRoutesRequest & keyof GetRoutesRequest & keyof GetRoutesRequest & keyof GetRoutesRequest & keyof GetRoutesRequest & keyof GetRoutesRequest & keyof GetRoutesRequest & keyof GetRoutesRequest]: (GetRoutesRequest & GetRoutesRequest & GetRoutesRequest & GetRoutesRequest & GetRoutesRequest & GetRoutesRequest & GetRoutesRequest & GetRoutesRequest)[K]
    }>): Request<GetRoutesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRoutes(
          this.ops["GetRoutes"].applicator.apply(partialParams)
        );
    }

    invokeGetStage(partialParams: ToOptional<{
      [K in keyof GetStageRequest & keyof GetStageRequest & keyof GetStageRequest & keyof GetStageRequest & keyof GetStageRequest & keyof GetStageRequest & keyof GetStageRequest & keyof GetStageRequest]: (GetStageRequest & GetStageRequest & GetStageRequest & GetStageRequest & GetStageRequest & GetStageRequest & GetStageRequest & GetStageRequest)[K]
    }>): Request<GetStageResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getStage(
          this.ops["GetStage"].applicator.apply(partialParams)
        );
    }

    invokeGetStages(partialParams: ToOptional<{
      [K in keyof GetStagesRequest & keyof GetStagesRequest & keyof GetStagesRequest & keyof GetStagesRequest & keyof GetStagesRequest & keyof GetStagesRequest & keyof GetStagesRequest & keyof GetStagesRequest]: (GetStagesRequest & GetStagesRequest & GetStagesRequest & GetStagesRequest & GetStagesRequest & GetStagesRequest & GetStagesRequest & GetStagesRequest)[K]
    }>): Request<GetStagesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getStages(
          this.ops["GetStages"].applicator.apply(partialParams)
        );
    }

    invokeGetTags(partialParams: ToOptional<{
      [K in keyof GetTagsRequest & keyof GetTagsRequest & keyof GetTagsRequest & keyof GetTagsRequest & keyof GetTagsRequest & keyof GetTagsRequest & keyof GetTagsRequest & keyof GetTagsRequest]: (GetTagsRequest & GetTagsRequest & GetTagsRequest & GetTagsRequest & GetTagsRequest & GetTagsRequest & GetTagsRequest & GetTagsRequest)[K]
    }>): Request<GetTagsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTags(
          this.ops["GetTags"].applicator.apply(partialParams)
        );
    }

    invokeGetVpcLink(partialParams: ToOptional<{
      [K in keyof GetVpcLinkRequest & keyof GetVpcLinkRequest & keyof GetVpcLinkRequest & keyof GetVpcLinkRequest & keyof GetVpcLinkRequest & keyof GetVpcLinkRequest & keyof GetVpcLinkRequest & keyof GetVpcLinkRequest]: (GetVpcLinkRequest & GetVpcLinkRequest & GetVpcLinkRequest & GetVpcLinkRequest & GetVpcLinkRequest & GetVpcLinkRequest & GetVpcLinkRequest & GetVpcLinkRequest)[K]
    }>): Request<GetVpcLinkResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVpcLink(
          this.ops["GetVpcLink"].applicator.apply(partialParams)
        );
    }

    invokeImportApi(partialParams: ToOptional<{
      [K in keyof ImportApiRequest & keyof ImportApiRequest & keyof ImportApiRequest & keyof ImportApiRequest & keyof ImportApiRequest & keyof ImportApiRequest & keyof ImportApiRequest & keyof ImportApiRequest]: (ImportApiRequest & ImportApiRequest & ImportApiRequest & ImportApiRequest & ImportApiRequest & ImportApiRequest & ImportApiRequest & ImportApiRequest)[K]
    }>): Request<ImportApiResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importApi(
          this.ops["ImportApi"].applicator.apply(partialParams)
        );
    }

    invokeReimportApi(partialParams: ToOptional<{
      [K in keyof ReimportApiRequest & keyof ReimportApiRequest & keyof ReimportApiRequest & keyof ReimportApiRequest & keyof ReimportApiRequest & keyof ReimportApiRequest & keyof ReimportApiRequest & keyof ReimportApiRequest]: (ReimportApiRequest & ReimportApiRequest & ReimportApiRequest & ReimportApiRequest & ReimportApiRequest & ReimportApiRequest & ReimportApiRequest & ReimportApiRequest)[K]
    }>): Request<ReimportApiResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.reimportApi(
          this.ops["ReimportApi"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateApi(partialParams: ToOptional<{
      [K in keyof UpdateApiRequest & keyof UpdateApiRequest & keyof UpdateApiRequest & keyof UpdateApiRequest & keyof UpdateApiRequest & keyof UpdateApiRequest & keyof UpdateApiRequest & keyof UpdateApiRequest]: (UpdateApiRequest & UpdateApiRequest & UpdateApiRequest & UpdateApiRequest & UpdateApiRequest & UpdateApiRequest & UpdateApiRequest & UpdateApiRequest)[K]
    }>): Request<UpdateApiResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApi(
          this.ops["UpdateApi"].applicator.apply(partialParams)
        );
    }

    invokeUpdateApiMapping(partialParams: ToOptional<{
      [K in keyof Omit<UpdateApiMappingRequest, "ApiId"> & keyof UpdateApiMappingRequest & keyof UpdateApiMappingRequest & keyof UpdateApiMappingRequest & keyof UpdateApiMappingRequest & keyof UpdateApiMappingRequest & keyof UpdateApiMappingRequest & keyof UpdateApiMappingRequest]: (Omit<UpdateApiMappingRequest, "ApiId"> & UpdateApiMappingRequest & UpdateApiMappingRequest & UpdateApiMappingRequest & UpdateApiMappingRequest & UpdateApiMappingRequest & UpdateApiMappingRequest & UpdateApiMappingRequest)[K]
    }>): Request<UpdateApiMappingResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApiMapping(
          this.ops["UpdateApiMapping"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAuthorizer(partialParams: ToOptional<{
      [K in keyof UpdateAuthorizerRequest & keyof UpdateAuthorizerRequest & keyof UpdateAuthorizerRequest & keyof UpdateAuthorizerRequest & keyof UpdateAuthorizerRequest & keyof UpdateAuthorizerRequest & keyof UpdateAuthorizerRequest & keyof UpdateAuthorizerRequest]: (UpdateAuthorizerRequest & UpdateAuthorizerRequest & UpdateAuthorizerRequest & UpdateAuthorizerRequest & UpdateAuthorizerRequest & UpdateAuthorizerRequest & UpdateAuthorizerRequest & UpdateAuthorizerRequest)[K]
    }>): Request<UpdateAuthorizerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAuthorizer(
          this.ops["UpdateAuthorizer"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDeployment(partialParams: ToOptional<{
      [K in keyof UpdateDeploymentRequest & keyof UpdateDeploymentRequest & keyof UpdateDeploymentRequest & keyof UpdateDeploymentRequest & keyof UpdateDeploymentRequest & keyof UpdateDeploymentRequest & keyof UpdateDeploymentRequest & keyof UpdateDeploymentRequest]: (UpdateDeploymentRequest & UpdateDeploymentRequest & UpdateDeploymentRequest & UpdateDeploymentRequest & UpdateDeploymentRequest & UpdateDeploymentRequest & UpdateDeploymentRequest & UpdateDeploymentRequest)[K]
    }>): Request<UpdateDeploymentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDeployment(
          this.ops["UpdateDeployment"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDomainName(partialParams: ToOptional<{
      [K in keyof UpdateDomainNameRequest & keyof UpdateDomainNameRequest & keyof UpdateDomainNameRequest & keyof UpdateDomainNameRequest & keyof UpdateDomainNameRequest & keyof UpdateDomainNameRequest & keyof UpdateDomainNameRequest & keyof UpdateDomainNameRequest]: (UpdateDomainNameRequest & UpdateDomainNameRequest & UpdateDomainNameRequest & UpdateDomainNameRequest & UpdateDomainNameRequest & UpdateDomainNameRequest & UpdateDomainNameRequest & UpdateDomainNameRequest)[K]
    }>): Request<UpdateDomainNameResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDomainName(
          this.ops["UpdateDomainName"].applicator.apply(partialParams)
        );
    }

    invokeUpdateIntegration(partialParams: ToOptional<{
      [K in keyof UpdateIntegrationRequest & keyof UpdateIntegrationRequest & keyof UpdateIntegrationRequest & keyof UpdateIntegrationRequest & keyof UpdateIntegrationRequest & keyof UpdateIntegrationRequest & keyof UpdateIntegrationRequest & keyof UpdateIntegrationRequest]: (UpdateIntegrationRequest & UpdateIntegrationRequest & UpdateIntegrationRequest & UpdateIntegrationRequest & UpdateIntegrationRequest & UpdateIntegrationRequest & UpdateIntegrationRequest & UpdateIntegrationRequest)[K]
    }>): Request<UpdateIntegrationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateIntegration(
          this.ops["UpdateIntegration"].applicator.apply(partialParams)
        );
    }

    invokeUpdateIntegrationResponse(partialParams: ToOptional<{
      [K in keyof UpdateIntegrationResponseRequest & keyof UpdateIntegrationResponseRequest & keyof UpdateIntegrationResponseRequest & keyof UpdateIntegrationResponseRequest & keyof UpdateIntegrationResponseRequest & keyof UpdateIntegrationResponseRequest & keyof UpdateIntegrationResponseRequest & keyof UpdateIntegrationResponseRequest]: (UpdateIntegrationResponseRequest & UpdateIntegrationResponseRequest & UpdateIntegrationResponseRequest & UpdateIntegrationResponseRequest & UpdateIntegrationResponseRequest & UpdateIntegrationResponseRequest & UpdateIntegrationResponseRequest & UpdateIntegrationResponseRequest)[K]
    }>): Request<UpdateIntegrationResponseResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateIntegrationResponse(
          this.ops["UpdateIntegrationResponse"].applicator.apply(partialParams)
        );
    }

    invokeUpdateModel(partialParams: ToOptional<{
      [K in keyof UpdateModelRequest & keyof UpdateModelRequest & keyof UpdateModelRequest & keyof UpdateModelRequest & keyof UpdateModelRequest & keyof UpdateModelRequest & keyof UpdateModelRequest & keyof UpdateModelRequest]: (UpdateModelRequest & UpdateModelRequest & UpdateModelRequest & UpdateModelRequest & UpdateModelRequest & UpdateModelRequest & UpdateModelRequest & UpdateModelRequest)[K]
    }>): Request<UpdateModelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateModel(
          this.ops["UpdateModel"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRoute(partialParams: ToOptional<{
      [K in keyof UpdateRouteRequest & keyof UpdateRouteRequest & keyof UpdateRouteRequest & keyof UpdateRouteRequest & keyof UpdateRouteRequest & keyof UpdateRouteRequest & keyof UpdateRouteRequest & keyof UpdateRouteRequest]: (UpdateRouteRequest & UpdateRouteRequest & UpdateRouteRequest & UpdateRouteRequest & UpdateRouteRequest & UpdateRouteRequest & UpdateRouteRequest & UpdateRouteRequest)[K]
    }>): Request<UpdateRouteResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRoute(
          this.ops["UpdateRoute"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRouteResponse(partialParams: ToOptional<{
      [K in keyof UpdateRouteResponseRequest & keyof UpdateRouteResponseRequest & keyof UpdateRouteResponseRequest & keyof UpdateRouteResponseRequest & keyof UpdateRouteResponseRequest & keyof UpdateRouteResponseRequest & keyof UpdateRouteResponseRequest & keyof UpdateRouteResponseRequest]: (UpdateRouteResponseRequest & UpdateRouteResponseRequest & UpdateRouteResponseRequest & UpdateRouteResponseRequest & UpdateRouteResponseRequest & UpdateRouteResponseRequest & UpdateRouteResponseRequest & UpdateRouteResponseRequest)[K]
    }>): Request<UpdateRouteResponseResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRouteResponse(
          this.ops["UpdateRouteResponse"].applicator.apply(partialParams)
        );
    }

    invokeUpdateStage(partialParams: ToOptional<{
      [K in keyof UpdateStageRequest & keyof UpdateStageRequest & keyof UpdateStageRequest & keyof UpdateStageRequest & keyof UpdateStageRequest & keyof UpdateStageRequest & keyof UpdateStageRequest & keyof UpdateStageRequest]: (UpdateStageRequest & UpdateStageRequest & UpdateStageRequest & UpdateStageRequest & UpdateStageRequest & UpdateStageRequest & UpdateStageRequest & UpdateStageRequest)[K]
    }>): Request<UpdateStageResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateStage(
          this.ops["UpdateStage"].applicator.apply(partialParams)
        );
    }

    invokeUpdateVpcLink(partialParams: ToOptional<{
      [K in keyof UpdateVpcLinkRequest & keyof UpdateVpcLinkRequest & keyof UpdateVpcLinkRequest & keyof UpdateVpcLinkRequest & keyof UpdateVpcLinkRequest & keyof UpdateVpcLinkRequest & keyof UpdateVpcLinkRequest & keyof UpdateVpcLinkRequest]: (UpdateVpcLinkRequest & UpdateVpcLinkRequest & UpdateVpcLinkRequest & UpdateVpcLinkRequest & UpdateVpcLinkRequest & UpdateVpcLinkRequest & UpdateVpcLinkRequest & UpdateVpcLinkRequest)[K]
    }>): Request<UpdateVpcLinkResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateVpcLink(
          this.ops["UpdateVpcLink"].applicator.apply(partialParams)
        );
    }
}