
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
const schema = require("../apis/apigateway-2015-07-09.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.apigateway.Deployment {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.apigateway.Deployment>) {
        super(...args)
        this.client = new awssdk.APIGateway()
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

    invokeCreateAuthorizer(partialParams: ToOptional<{
      [K in keyof CreateAuthorizerRequest & keyof CreateAuthorizerRequest & keyof CreateAuthorizerRequest & keyof CreateAuthorizerRequest & keyof CreateAuthorizerRequest & keyof CreateAuthorizerRequest & keyof CreateAuthorizerRequest]: (CreateAuthorizerRequest & CreateAuthorizerRequest & CreateAuthorizerRequest & CreateAuthorizerRequest & CreateAuthorizerRequest & CreateAuthorizerRequest & CreateAuthorizerRequest)[K]
    }>): Request<Authorizer, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAuthorizer(
          this.ops["CreateAuthorizer"].applicator.apply(partialParams)
        );
    }

    invokeCreateBasePathMapping(partialParams: ToOptional<{
      [K in keyof CreateBasePathMappingRequest & keyof CreateBasePathMappingRequest & keyof CreateBasePathMappingRequest & keyof CreateBasePathMappingRequest & keyof CreateBasePathMappingRequest & keyof CreateBasePathMappingRequest & keyof CreateBasePathMappingRequest]: (CreateBasePathMappingRequest & CreateBasePathMappingRequest & CreateBasePathMappingRequest & CreateBasePathMappingRequest & CreateBasePathMappingRequest & CreateBasePathMappingRequest & CreateBasePathMappingRequest)[K]
    }>): Request<BasePathMapping, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createBasePathMapping(
          this.ops["CreateBasePathMapping"].applicator.apply(partialParams)
        );
    }

    invokeCreateDeployment(partialParams: ToOptional<{
      [K in keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest]: (CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest)[K]
    }>): Request<Deployment, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDeployment(
          this.ops["CreateDeployment"].applicator.apply(partialParams)
        );
    }

    invokeCreateDocumentationPart(partialParams: ToOptional<{
      [K in keyof CreateDocumentationPartRequest & keyof CreateDocumentationPartRequest & keyof CreateDocumentationPartRequest & keyof CreateDocumentationPartRequest & keyof CreateDocumentationPartRequest & keyof CreateDocumentationPartRequest & keyof CreateDocumentationPartRequest]: (CreateDocumentationPartRequest & CreateDocumentationPartRequest & CreateDocumentationPartRequest & CreateDocumentationPartRequest & CreateDocumentationPartRequest & CreateDocumentationPartRequest & CreateDocumentationPartRequest)[K]
    }>): Request<DocumentationPart, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDocumentationPart(
          this.ops["CreateDocumentationPart"].applicator.apply(partialParams)
        );
    }

    invokeCreateDocumentationVersion(partialParams: ToOptional<{
      [K in keyof CreateDocumentationVersionRequest & keyof CreateDocumentationVersionRequest & keyof CreateDocumentationVersionRequest & keyof CreateDocumentationVersionRequest & keyof CreateDocumentationVersionRequest & keyof CreateDocumentationVersionRequest & keyof CreateDocumentationVersionRequest]: (CreateDocumentationVersionRequest & CreateDocumentationVersionRequest & CreateDocumentationVersionRequest & CreateDocumentationVersionRequest & CreateDocumentationVersionRequest & CreateDocumentationVersionRequest & CreateDocumentationVersionRequest)[K]
    }>): Request<DocumentationVersion, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDocumentationVersion(
          this.ops["CreateDocumentationVersion"].applicator.apply(partialParams)
        );
    }

    invokeCreateDomainName(partialParams: ToOptional<{
      [K in keyof CreateDomainNameRequest & keyof CreateDomainNameRequest & keyof CreateDomainNameRequest & keyof CreateDomainNameRequest & keyof CreateDomainNameRequest & keyof CreateDomainNameRequest & keyof CreateDomainNameRequest]: (CreateDomainNameRequest & CreateDomainNameRequest & CreateDomainNameRequest & CreateDomainNameRequest & CreateDomainNameRequest & CreateDomainNameRequest & CreateDomainNameRequest)[K]
    }>): Request<DomainName, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDomainName(
          this.ops["CreateDomainName"].applicator.apply(partialParams)
        );
    }

    invokeCreateModel(partialParams: ToOptional<{
      [K in keyof CreateModelRequest & keyof CreateModelRequest & keyof CreateModelRequest & keyof CreateModelRequest & keyof CreateModelRequest & keyof CreateModelRequest & keyof CreateModelRequest]: (CreateModelRequest & CreateModelRequest & CreateModelRequest & CreateModelRequest & CreateModelRequest & CreateModelRequest & CreateModelRequest)[K]
    }>): Request<Model, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createModel(
          this.ops["CreateModel"].applicator.apply(partialParams)
        );
    }

    invokeCreateRequestValidator(partialParams: ToOptional<{
      [K in keyof CreateRequestValidatorRequest & keyof CreateRequestValidatorRequest & keyof CreateRequestValidatorRequest & keyof CreateRequestValidatorRequest & keyof CreateRequestValidatorRequest & keyof CreateRequestValidatorRequest & keyof CreateRequestValidatorRequest]: (CreateRequestValidatorRequest & CreateRequestValidatorRequest & CreateRequestValidatorRequest & CreateRequestValidatorRequest & CreateRequestValidatorRequest & CreateRequestValidatorRequest & CreateRequestValidatorRequest)[K]
    }>): Request<RequestValidator, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRequestValidator(
          this.ops["CreateRequestValidator"].applicator.apply(partialParams)
        );
    }

    invokeCreateResource(partialParams: ToOptional<{
      [K in keyof CreateResourceRequest & keyof CreateResourceRequest & keyof CreateResourceRequest & keyof CreateResourceRequest & keyof CreateResourceRequest & keyof CreateResourceRequest & keyof CreateResourceRequest]: (CreateResourceRequest & CreateResourceRequest & CreateResourceRequest & CreateResourceRequest & CreateResourceRequest & CreateResourceRequest & CreateResourceRequest)[K]
    }>): Request<Resource, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createResource(
          this.ops["CreateResource"].applicator.apply(partialParams)
        );
    }

    invokeCreateRestApi(partialParams: ToOptional<{
      [K in keyof CreateRestApiRequest & keyof CreateRestApiRequest & keyof CreateRestApiRequest & keyof CreateRestApiRequest & keyof CreateRestApiRequest & keyof CreateRestApiRequest & keyof CreateRestApiRequest]: (CreateRestApiRequest & CreateRestApiRequest & CreateRestApiRequest & CreateRestApiRequest & CreateRestApiRequest & CreateRestApiRequest & CreateRestApiRequest)[K]
    }>): Request<RestApi, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRestApi(
          this.ops["CreateRestApi"].applicator.apply(partialParams)
        );
    }

    invokeCreateStage(partialParams: ToOptional<{
      [K in keyof CreateStageRequest & keyof CreateStageRequest & keyof CreateStageRequest & keyof CreateStageRequest & keyof CreateStageRequest & keyof CreateStageRequest & keyof CreateStageRequest]: (CreateStageRequest & CreateStageRequest & CreateStageRequest & CreateStageRequest & CreateStageRequest & CreateStageRequest & CreateStageRequest)[K]
    }>): Request<Stage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createStage(
          this.ops["CreateStage"].applicator.apply(partialParams)
        );
    }

    invokeCreateUsagePlan(partialParams: ToOptional<{
      [K in keyof CreateUsagePlanRequest & keyof CreateUsagePlanRequest & keyof CreateUsagePlanRequest & keyof CreateUsagePlanRequest & keyof CreateUsagePlanRequest & keyof CreateUsagePlanRequest & keyof CreateUsagePlanRequest]: (CreateUsagePlanRequest & CreateUsagePlanRequest & CreateUsagePlanRequest & CreateUsagePlanRequest & CreateUsagePlanRequest & CreateUsagePlanRequest & CreateUsagePlanRequest)[K]
    }>): Request<UsagePlan, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUsagePlan(
          this.ops["CreateUsagePlan"].applicator.apply(partialParams)
        );
    }

    invokeCreateUsagePlanKey(partialParams: ToOptional<{
      [K in keyof CreateUsagePlanKeyRequest & keyof CreateUsagePlanKeyRequest & keyof CreateUsagePlanKeyRequest & keyof CreateUsagePlanKeyRequest & keyof CreateUsagePlanKeyRequest & keyof CreateUsagePlanKeyRequest & keyof CreateUsagePlanKeyRequest]: (CreateUsagePlanKeyRequest & CreateUsagePlanKeyRequest & CreateUsagePlanKeyRequest & CreateUsagePlanKeyRequest & CreateUsagePlanKeyRequest & CreateUsagePlanKeyRequest & CreateUsagePlanKeyRequest)[K]
    }>): Request<UsagePlanKey, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUsagePlanKey(
          this.ops["CreateUsagePlanKey"].applicator.apply(partialParams)
        );
    }

    invokeCreateVpcLink(partialParams: ToOptional<{
      [K in keyof CreateVpcLinkRequest & keyof CreateVpcLinkRequest & keyof CreateVpcLinkRequest & keyof CreateVpcLinkRequest & keyof CreateVpcLinkRequest & keyof CreateVpcLinkRequest & keyof CreateVpcLinkRequest]: (CreateVpcLinkRequest & CreateVpcLinkRequest & CreateVpcLinkRequest & CreateVpcLinkRequest & CreateVpcLinkRequest & CreateVpcLinkRequest & CreateVpcLinkRequest)[K]
    }>): Request<VpcLink, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVpcLink(
          this.ops["CreateVpcLink"].applicator.apply(partialParams)
        );
    }

    invokeDeleteApiKey(partialParams: ToOptional<{
      [K in keyof DeleteApiKeyRequest & keyof DeleteApiKeyRequest & keyof DeleteApiKeyRequest & keyof DeleteApiKeyRequest & keyof DeleteApiKeyRequest & keyof DeleteApiKeyRequest & keyof DeleteApiKeyRequest]: (DeleteApiKeyRequest & DeleteApiKeyRequest & DeleteApiKeyRequest & DeleteApiKeyRequest & DeleteApiKeyRequest & DeleteApiKeyRequest & DeleteApiKeyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApiKey(
          this.ops["DeleteApiKey"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAuthorizer(partialParams: ToOptional<{
      [K in keyof DeleteAuthorizerRequest & keyof DeleteAuthorizerRequest & keyof DeleteAuthorizerRequest & keyof DeleteAuthorizerRequest & keyof DeleteAuthorizerRequest & keyof DeleteAuthorizerRequest & keyof DeleteAuthorizerRequest]: (DeleteAuthorizerRequest & DeleteAuthorizerRequest & DeleteAuthorizerRequest & DeleteAuthorizerRequest & DeleteAuthorizerRequest & DeleteAuthorizerRequest & DeleteAuthorizerRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAuthorizer(
          this.ops["DeleteAuthorizer"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBasePathMapping(partialParams: ToOptional<{
      [K in keyof DeleteBasePathMappingRequest & keyof DeleteBasePathMappingRequest & keyof DeleteBasePathMappingRequest & keyof DeleteBasePathMappingRequest & keyof DeleteBasePathMappingRequest & keyof DeleteBasePathMappingRequest & keyof DeleteBasePathMappingRequest]: (DeleteBasePathMappingRequest & DeleteBasePathMappingRequest & DeleteBasePathMappingRequest & DeleteBasePathMappingRequest & DeleteBasePathMappingRequest & DeleteBasePathMappingRequest & DeleteBasePathMappingRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBasePathMapping(
          this.ops["DeleteBasePathMapping"].applicator.apply(partialParams)
        );
    }

    invokeDeleteClientCertificate(partialParams: ToOptional<{
      [K in keyof DeleteClientCertificateRequest & keyof DeleteClientCertificateRequest & keyof DeleteClientCertificateRequest & keyof DeleteClientCertificateRequest & keyof DeleteClientCertificateRequest & keyof DeleteClientCertificateRequest & keyof DeleteClientCertificateRequest]: (DeleteClientCertificateRequest & DeleteClientCertificateRequest & DeleteClientCertificateRequest & DeleteClientCertificateRequest & DeleteClientCertificateRequest & DeleteClientCertificateRequest & DeleteClientCertificateRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteClientCertificate(
          this.ops["DeleteClientCertificate"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDeployment(partialParams: ToOptional<{
      [K in keyof DeleteDeploymentRequest & keyof DeleteDeploymentRequest & keyof DeleteDeploymentRequest & keyof DeleteDeploymentRequest & keyof DeleteDeploymentRequest & keyof DeleteDeploymentRequest & keyof DeleteDeploymentRequest]: (DeleteDeploymentRequest & DeleteDeploymentRequest & DeleteDeploymentRequest & DeleteDeploymentRequest & DeleteDeploymentRequest & DeleteDeploymentRequest & DeleteDeploymentRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDeployment(
          this.ops["DeleteDeployment"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDocumentationPart(partialParams: ToOptional<{
      [K in keyof DeleteDocumentationPartRequest & keyof DeleteDocumentationPartRequest & keyof DeleteDocumentationPartRequest & keyof DeleteDocumentationPartRequest & keyof DeleteDocumentationPartRequest & keyof DeleteDocumentationPartRequest & keyof DeleteDocumentationPartRequest]: (DeleteDocumentationPartRequest & DeleteDocumentationPartRequest & DeleteDocumentationPartRequest & DeleteDocumentationPartRequest & DeleteDocumentationPartRequest & DeleteDocumentationPartRequest & DeleteDocumentationPartRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDocumentationPart(
          this.ops["DeleteDocumentationPart"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDocumentationVersion(partialParams: ToOptional<{
      [K in keyof DeleteDocumentationVersionRequest & keyof DeleteDocumentationVersionRequest & keyof DeleteDocumentationVersionRequest & keyof DeleteDocumentationVersionRequest & keyof DeleteDocumentationVersionRequest & keyof DeleteDocumentationVersionRequest & keyof DeleteDocumentationVersionRequest]: (DeleteDocumentationVersionRequest & DeleteDocumentationVersionRequest & DeleteDocumentationVersionRequest & DeleteDocumentationVersionRequest & DeleteDocumentationVersionRequest & DeleteDocumentationVersionRequest & DeleteDocumentationVersionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDocumentationVersion(
          this.ops["DeleteDocumentationVersion"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDomainName(partialParams: ToOptional<{
      [K in keyof DeleteDomainNameRequest & keyof DeleteDomainNameRequest & keyof DeleteDomainNameRequest & keyof DeleteDomainNameRequest & keyof DeleteDomainNameRequest & keyof DeleteDomainNameRequest & keyof DeleteDomainNameRequest]: (DeleteDomainNameRequest & DeleteDomainNameRequest & DeleteDomainNameRequest & DeleteDomainNameRequest & DeleteDomainNameRequest & DeleteDomainNameRequest & DeleteDomainNameRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDomainName(
          this.ops["DeleteDomainName"].applicator.apply(partialParams)
        );
    }

    invokeDeleteGatewayResponse(partialParams: ToOptional<{
      [K in keyof DeleteGatewayResponseRequest & keyof DeleteGatewayResponseRequest & keyof DeleteGatewayResponseRequest & keyof DeleteGatewayResponseRequest & keyof DeleteGatewayResponseRequest & keyof DeleteGatewayResponseRequest & keyof DeleteGatewayResponseRequest]: (DeleteGatewayResponseRequest & DeleteGatewayResponseRequest & DeleteGatewayResponseRequest & DeleteGatewayResponseRequest & DeleteGatewayResponseRequest & DeleteGatewayResponseRequest & DeleteGatewayResponseRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteGatewayResponse(
          this.ops["DeleteGatewayResponse"].applicator.apply(partialParams)
        );
    }

    invokeDeleteIntegration(partialParams: ToOptional<{
      [K in keyof DeleteIntegrationRequest & keyof DeleteIntegrationRequest & keyof DeleteIntegrationRequest & keyof DeleteIntegrationRequest & keyof DeleteIntegrationRequest & keyof DeleteIntegrationRequest & keyof DeleteIntegrationRequest]: (DeleteIntegrationRequest & DeleteIntegrationRequest & DeleteIntegrationRequest & DeleteIntegrationRequest & DeleteIntegrationRequest & DeleteIntegrationRequest & DeleteIntegrationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteIntegration(
          this.ops["DeleteIntegration"].applicator.apply(partialParams)
        );
    }

    invokeDeleteIntegrationResponse(partialParams: ToOptional<{
      [K in keyof DeleteIntegrationResponseRequest & keyof DeleteIntegrationResponseRequest & keyof DeleteIntegrationResponseRequest & keyof DeleteIntegrationResponseRequest & keyof DeleteIntegrationResponseRequest & keyof DeleteIntegrationResponseRequest & keyof DeleteIntegrationResponseRequest]: (DeleteIntegrationResponseRequest & DeleteIntegrationResponseRequest & DeleteIntegrationResponseRequest & DeleteIntegrationResponseRequest & DeleteIntegrationResponseRequest & DeleteIntegrationResponseRequest & DeleteIntegrationResponseRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteIntegrationResponse(
          this.ops["DeleteIntegrationResponse"].applicator.apply(partialParams)
        );
    }

    invokeDeleteMethod(partialParams: ToOptional<{
      [K in keyof DeleteMethodRequest & keyof DeleteMethodRequest & keyof DeleteMethodRequest & keyof DeleteMethodRequest & keyof DeleteMethodRequest & keyof DeleteMethodRequest & keyof DeleteMethodRequest]: (DeleteMethodRequest & DeleteMethodRequest & DeleteMethodRequest & DeleteMethodRequest & DeleteMethodRequest & DeleteMethodRequest & DeleteMethodRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteMethod(
          this.ops["DeleteMethod"].applicator.apply(partialParams)
        );
    }

    invokeDeleteMethodResponse(partialParams: ToOptional<{
      [K in keyof DeleteMethodResponseRequest & keyof DeleteMethodResponseRequest & keyof DeleteMethodResponseRequest & keyof DeleteMethodResponseRequest & keyof DeleteMethodResponseRequest & keyof DeleteMethodResponseRequest & keyof DeleteMethodResponseRequest]: (DeleteMethodResponseRequest & DeleteMethodResponseRequest & DeleteMethodResponseRequest & DeleteMethodResponseRequest & DeleteMethodResponseRequest & DeleteMethodResponseRequest & DeleteMethodResponseRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteMethodResponse(
          this.ops["DeleteMethodResponse"].applicator.apply(partialParams)
        );
    }

    invokeDeleteModel(partialParams: ToOptional<{
      [K in keyof DeleteModelRequest & keyof DeleteModelRequest & keyof DeleteModelRequest & keyof DeleteModelRequest & keyof DeleteModelRequest & keyof DeleteModelRequest & keyof DeleteModelRequest]: (DeleteModelRequest & DeleteModelRequest & DeleteModelRequest & DeleteModelRequest & DeleteModelRequest & DeleteModelRequest & DeleteModelRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteModel(
          this.ops["DeleteModel"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRequestValidator(partialParams: ToOptional<{
      [K in keyof DeleteRequestValidatorRequest & keyof DeleteRequestValidatorRequest & keyof DeleteRequestValidatorRequest & keyof DeleteRequestValidatorRequest & keyof DeleteRequestValidatorRequest & keyof DeleteRequestValidatorRequest & keyof DeleteRequestValidatorRequest]: (DeleteRequestValidatorRequest & DeleteRequestValidatorRequest & DeleteRequestValidatorRequest & DeleteRequestValidatorRequest & DeleteRequestValidatorRequest & DeleteRequestValidatorRequest & DeleteRequestValidatorRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRequestValidator(
          this.ops["DeleteRequestValidator"].applicator.apply(partialParams)
        );
    }

    invokeDeleteResource(partialParams: ToOptional<{
      [K in keyof DeleteResourceRequest & keyof DeleteResourceRequest & keyof DeleteResourceRequest & keyof DeleteResourceRequest & keyof DeleteResourceRequest & keyof DeleteResourceRequest & keyof DeleteResourceRequest]: (DeleteResourceRequest & DeleteResourceRequest & DeleteResourceRequest & DeleteResourceRequest & DeleteResourceRequest & DeleteResourceRequest & DeleteResourceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteResource(
          this.ops["DeleteResource"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRestApi(partialParams: ToOptional<{
      [K in keyof DeleteRestApiRequest & keyof DeleteRestApiRequest & keyof DeleteRestApiRequest & keyof DeleteRestApiRequest & keyof DeleteRestApiRequest & keyof DeleteRestApiRequest & keyof DeleteRestApiRequest]: (DeleteRestApiRequest & DeleteRestApiRequest & DeleteRestApiRequest & DeleteRestApiRequest & DeleteRestApiRequest & DeleteRestApiRequest & DeleteRestApiRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRestApi(
          this.ops["DeleteRestApi"].applicator.apply(partialParams)
        );
    }

    invokeDeleteStage(partialParams: ToOptional<{
      [K in keyof DeleteStageRequest & keyof DeleteStageRequest & keyof DeleteStageRequest & keyof DeleteStageRequest & keyof DeleteStageRequest & keyof DeleteStageRequest & keyof DeleteStageRequest]: (DeleteStageRequest & DeleteStageRequest & DeleteStageRequest & DeleteStageRequest & DeleteStageRequest & DeleteStageRequest & DeleteStageRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteStage(
          this.ops["DeleteStage"].applicator.apply(partialParams)
        );
    }

    invokeDeleteUsagePlan(partialParams: ToOptional<{
      [K in keyof DeleteUsagePlanRequest & keyof DeleteUsagePlanRequest & keyof DeleteUsagePlanRequest & keyof DeleteUsagePlanRequest & keyof DeleteUsagePlanRequest & keyof DeleteUsagePlanRequest & keyof DeleteUsagePlanRequest]: (DeleteUsagePlanRequest & DeleteUsagePlanRequest & DeleteUsagePlanRequest & DeleteUsagePlanRequest & DeleteUsagePlanRequest & DeleteUsagePlanRequest & DeleteUsagePlanRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUsagePlan(
          this.ops["DeleteUsagePlan"].applicator.apply(partialParams)
        );
    }

    invokeDeleteUsagePlanKey(partialParams: ToOptional<{
      [K in keyof DeleteUsagePlanKeyRequest & keyof DeleteUsagePlanKeyRequest & keyof DeleteUsagePlanKeyRequest & keyof DeleteUsagePlanKeyRequest & keyof DeleteUsagePlanKeyRequest & keyof DeleteUsagePlanKeyRequest & keyof DeleteUsagePlanKeyRequest]: (DeleteUsagePlanKeyRequest & DeleteUsagePlanKeyRequest & DeleteUsagePlanKeyRequest & DeleteUsagePlanKeyRequest & DeleteUsagePlanKeyRequest & DeleteUsagePlanKeyRequest & DeleteUsagePlanKeyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUsagePlanKey(
          this.ops["DeleteUsagePlanKey"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVpcLink(partialParams: ToOptional<{
      [K in keyof DeleteVpcLinkRequest & keyof DeleteVpcLinkRequest & keyof DeleteVpcLinkRequest & keyof DeleteVpcLinkRequest & keyof DeleteVpcLinkRequest & keyof DeleteVpcLinkRequest & keyof DeleteVpcLinkRequest]: (DeleteVpcLinkRequest & DeleteVpcLinkRequest & DeleteVpcLinkRequest & DeleteVpcLinkRequest & DeleteVpcLinkRequest & DeleteVpcLinkRequest & DeleteVpcLinkRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVpcLink(
          this.ops["DeleteVpcLink"].applicator.apply(partialParams)
        );
    }

    invokeFlushStageAuthorizersCache(partialParams: ToOptional<{
      [K in keyof FlushStageAuthorizersCacheRequest & keyof FlushStageAuthorizersCacheRequest & keyof FlushStageAuthorizersCacheRequest & keyof FlushStageAuthorizersCacheRequest & keyof FlushStageAuthorizersCacheRequest & keyof FlushStageAuthorizersCacheRequest & keyof FlushStageAuthorizersCacheRequest]: (FlushStageAuthorizersCacheRequest & FlushStageAuthorizersCacheRequest & FlushStageAuthorizersCacheRequest & FlushStageAuthorizersCacheRequest & FlushStageAuthorizersCacheRequest & FlushStageAuthorizersCacheRequest & FlushStageAuthorizersCacheRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.flushStageAuthorizersCache(
          this.ops["FlushStageAuthorizersCache"].applicator.apply(partialParams)
        );
    }

    invokeFlushStageCache(partialParams: ToOptional<{
      [K in keyof FlushStageCacheRequest & keyof FlushStageCacheRequest & keyof FlushStageCacheRequest & keyof FlushStageCacheRequest & keyof FlushStageCacheRequest & keyof FlushStageCacheRequest & keyof FlushStageCacheRequest]: (FlushStageCacheRequest & FlushStageCacheRequest & FlushStageCacheRequest & FlushStageCacheRequest & FlushStageCacheRequest & FlushStageCacheRequest & FlushStageCacheRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.flushStageCache(
          this.ops["FlushStageCache"].applicator.apply(partialParams)
        );
    }

    invokeGetApiKey(partialParams: ToOptional<{
      [K in keyof GetApiKeyRequest & keyof GetApiKeyRequest & keyof GetApiKeyRequest & keyof GetApiKeyRequest & keyof GetApiKeyRequest & keyof GetApiKeyRequest & keyof GetApiKeyRequest]: (GetApiKeyRequest & GetApiKeyRequest & GetApiKeyRequest & GetApiKeyRequest & GetApiKeyRequest & GetApiKeyRequest & GetApiKeyRequest)[K]
    }>): Request<ApiKey, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getApiKey(
          this.ops["GetApiKey"].applicator.apply(partialParams)
        );
    }

    invokeGetAuthorizer(partialParams: ToOptional<{
      [K in keyof GetAuthorizerRequest & keyof GetAuthorizerRequest & keyof GetAuthorizerRequest & keyof GetAuthorizerRequest & keyof GetAuthorizerRequest & keyof GetAuthorizerRequest & keyof GetAuthorizerRequest]: (GetAuthorizerRequest & GetAuthorizerRequest & GetAuthorizerRequest & GetAuthorizerRequest & GetAuthorizerRequest & GetAuthorizerRequest & GetAuthorizerRequest)[K]
    }>): Request<Authorizer, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAuthorizer(
          this.ops["GetAuthorizer"].applicator.apply(partialParams)
        );
    }

    invokeGetAuthorizers(partialParams: ToOptional<{
      [K in keyof GetAuthorizersRequest & keyof GetAuthorizersRequest & keyof GetAuthorizersRequest & keyof GetAuthorizersRequest & keyof GetAuthorizersRequest & keyof GetAuthorizersRequest & keyof GetAuthorizersRequest]: (GetAuthorizersRequest & GetAuthorizersRequest & GetAuthorizersRequest & GetAuthorizersRequest & GetAuthorizersRequest & GetAuthorizersRequest & GetAuthorizersRequest)[K]
    }>): Request<Authorizers, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAuthorizers(
          this.ops["GetAuthorizers"].applicator.apply(partialParams)
        );
    }

    invokeGetBasePathMapping(partialParams: ToOptional<{
      [K in keyof GetBasePathMappingRequest & keyof GetBasePathMappingRequest & keyof GetBasePathMappingRequest & keyof GetBasePathMappingRequest & keyof GetBasePathMappingRequest & keyof GetBasePathMappingRequest & keyof GetBasePathMappingRequest]: (GetBasePathMappingRequest & GetBasePathMappingRequest & GetBasePathMappingRequest & GetBasePathMappingRequest & GetBasePathMappingRequest & GetBasePathMappingRequest & GetBasePathMappingRequest)[K]
    }>): Request<BasePathMapping, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBasePathMapping(
          this.ops["GetBasePathMapping"].applicator.apply(partialParams)
        );
    }

    invokeGetBasePathMappings(partialParams: ToOptional<{
      [K in keyof GetBasePathMappingsRequest & keyof GetBasePathMappingsRequest & keyof GetBasePathMappingsRequest & keyof GetBasePathMappingsRequest & keyof GetBasePathMappingsRequest & keyof GetBasePathMappingsRequest & keyof GetBasePathMappingsRequest]: (GetBasePathMappingsRequest & GetBasePathMappingsRequest & GetBasePathMappingsRequest & GetBasePathMappingsRequest & GetBasePathMappingsRequest & GetBasePathMappingsRequest & GetBasePathMappingsRequest)[K]
    }>): Request<BasePathMappings, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBasePathMappings(
          this.ops["GetBasePathMappings"].applicator.apply(partialParams)
        );
    }

    invokeGetClientCertificate(partialParams: ToOptional<{
      [K in keyof GetClientCertificateRequest & keyof GetClientCertificateRequest & keyof GetClientCertificateRequest & keyof GetClientCertificateRequest & keyof GetClientCertificateRequest & keyof GetClientCertificateRequest & keyof GetClientCertificateRequest]: (GetClientCertificateRequest & GetClientCertificateRequest & GetClientCertificateRequest & GetClientCertificateRequest & GetClientCertificateRequest & GetClientCertificateRequest & GetClientCertificateRequest)[K]
    }>): Request<ClientCertificate, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getClientCertificate(
          this.ops["GetClientCertificate"].applicator.apply(partialParams)
        );
    }

    invokeGetDeployment(partialParams: ToOptional<{
      [K in keyof GetDeploymentRequest & keyof GetDeploymentRequest & keyof GetDeploymentRequest & keyof GetDeploymentRequest & keyof GetDeploymentRequest & keyof GetDeploymentRequest & keyof GetDeploymentRequest]: (GetDeploymentRequest & GetDeploymentRequest & GetDeploymentRequest & GetDeploymentRequest & GetDeploymentRequest & GetDeploymentRequest & GetDeploymentRequest)[K]
    }>): Request<Deployment, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDeployment(
          this.ops["GetDeployment"].applicator.apply(partialParams)
        );
    }

    invokeGetDeployments(partialParams: ToOptional<{
      [K in keyof GetDeploymentsRequest & keyof GetDeploymentsRequest & keyof GetDeploymentsRequest & keyof GetDeploymentsRequest & keyof GetDeploymentsRequest & keyof GetDeploymentsRequest & keyof GetDeploymentsRequest]: (GetDeploymentsRequest & GetDeploymentsRequest & GetDeploymentsRequest & GetDeploymentsRequest & GetDeploymentsRequest & GetDeploymentsRequest & GetDeploymentsRequest)[K]
    }>): Request<Deployments, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDeployments(
          this.ops["GetDeployments"].applicator.apply(partialParams)
        );
    }

    invokeGetDocumentationPart(partialParams: ToOptional<{
      [K in keyof GetDocumentationPartRequest & keyof GetDocumentationPartRequest & keyof GetDocumentationPartRequest & keyof GetDocumentationPartRequest & keyof GetDocumentationPartRequest & keyof GetDocumentationPartRequest & keyof GetDocumentationPartRequest]: (GetDocumentationPartRequest & GetDocumentationPartRequest & GetDocumentationPartRequest & GetDocumentationPartRequest & GetDocumentationPartRequest & GetDocumentationPartRequest & GetDocumentationPartRequest)[K]
    }>): Request<DocumentationPart, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDocumentationPart(
          this.ops["GetDocumentationPart"].applicator.apply(partialParams)
        );
    }

    invokeGetDocumentationParts(partialParams: ToOptional<{
      [K in keyof GetDocumentationPartsRequest & keyof GetDocumentationPartsRequest & keyof GetDocumentationPartsRequest & keyof GetDocumentationPartsRequest & keyof GetDocumentationPartsRequest & keyof GetDocumentationPartsRequest & keyof GetDocumentationPartsRequest]: (GetDocumentationPartsRequest & GetDocumentationPartsRequest & GetDocumentationPartsRequest & GetDocumentationPartsRequest & GetDocumentationPartsRequest & GetDocumentationPartsRequest & GetDocumentationPartsRequest)[K]
    }>): Request<DocumentationParts, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDocumentationParts(
          this.ops["GetDocumentationParts"].applicator.apply(partialParams)
        );
    }

    invokeGetDocumentationVersion(partialParams: ToOptional<{
      [K in keyof GetDocumentationVersionRequest & keyof GetDocumentationVersionRequest & keyof GetDocumentationVersionRequest & keyof GetDocumentationVersionRequest & keyof GetDocumentationVersionRequest & keyof GetDocumentationVersionRequest & keyof GetDocumentationVersionRequest]: (GetDocumentationVersionRequest & GetDocumentationVersionRequest & GetDocumentationVersionRequest & GetDocumentationVersionRequest & GetDocumentationVersionRequest & GetDocumentationVersionRequest & GetDocumentationVersionRequest)[K]
    }>): Request<DocumentationVersion, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDocumentationVersion(
          this.ops["GetDocumentationVersion"].applicator.apply(partialParams)
        );
    }

    invokeGetDocumentationVersions(partialParams: ToOptional<{
      [K in keyof GetDocumentationVersionsRequest & keyof GetDocumentationVersionsRequest & keyof GetDocumentationVersionsRequest & keyof GetDocumentationVersionsRequest & keyof GetDocumentationVersionsRequest & keyof GetDocumentationVersionsRequest & keyof GetDocumentationVersionsRequest]: (GetDocumentationVersionsRequest & GetDocumentationVersionsRequest & GetDocumentationVersionsRequest & GetDocumentationVersionsRequest & GetDocumentationVersionsRequest & GetDocumentationVersionsRequest & GetDocumentationVersionsRequest)[K]
    }>): Request<DocumentationVersions, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDocumentationVersions(
          this.ops["GetDocumentationVersions"].applicator.apply(partialParams)
        );
    }

    invokeGetDomainName(partialParams: ToOptional<{
      [K in keyof GetDomainNameRequest & keyof GetDomainNameRequest & keyof GetDomainNameRequest & keyof GetDomainNameRequest & keyof GetDomainNameRequest & keyof GetDomainNameRequest & keyof GetDomainNameRequest]: (GetDomainNameRequest & GetDomainNameRequest & GetDomainNameRequest & GetDomainNameRequest & GetDomainNameRequest & GetDomainNameRequest & GetDomainNameRequest)[K]
    }>): Request<DomainName, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDomainName(
          this.ops["GetDomainName"].applicator.apply(partialParams)
        );
    }

    invokeGetExport(partialParams: ToOptional<{
      [K in keyof GetExportRequest & keyof GetExportRequest & keyof GetExportRequest & keyof GetExportRequest & keyof GetExportRequest & keyof GetExportRequest & keyof GetExportRequest]: (GetExportRequest & GetExportRequest & GetExportRequest & GetExportRequest & GetExportRequest & GetExportRequest & GetExportRequest)[K]
    }>): Request<ExportResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getExport(
          this.ops["GetExport"].applicator.apply(partialParams)
        );
    }

    invokeGetGatewayResponse(partialParams: ToOptional<{
      [K in keyof GetGatewayResponseRequest & keyof GetGatewayResponseRequest & keyof GetGatewayResponseRequest & keyof GetGatewayResponseRequest & keyof GetGatewayResponseRequest & keyof GetGatewayResponseRequest & keyof GetGatewayResponseRequest]: (GetGatewayResponseRequest & GetGatewayResponseRequest & GetGatewayResponseRequest & GetGatewayResponseRequest & GetGatewayResponseRequest & GetGatewayResponseRequest & GetGatewayResponseRequest)[K]
    }>): Request<GatewayResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getGatewayResponse(
          this.ops["GetGatewayResponse"].applicator.apply(partialParams)
        );
    }

    invokeGetGatewayResponses(partialParams: ToOptional<{
      [K in keyof GetGatewayResponsesRequest & keyof GetGatewayResponsesRequest & keyof GetGatewayResponsesRequest & keyof GetGatewayResponsesRequest & keyof GetGatewayResponsesRequest & keyof GetGatewayResponsesRequest & keyof GetGatewayResponsesRequest]: (GetGatewayResponsesRequest & GetGatewayResponsesRequest & GetGatewayResponsesRequest & GetGatewayResponsesRequest & GetGatewayResponsesRequest & GetGatewayResponsesRequest & GetGatewayResponsesRequest)[K]
    }>): Request<GatewayResponses, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getGatewayResponses(
          this.ops["GetGatewayResponses"].applicator.apply(partialParams)
        );
    }

    invokeGetIntegration(partialParams: ToOptional<{
      [K in keyof GetIntegrationRequest & keyof GetIntegrationRequest & keyof GetIntegrationRequest & keyof GetIntegrationRequest & keyof GetIntegrationRequest & keyof GetIntegrationRequest & keyof GetIntegrationRequest]: (GetIntegrationRequest & GetIntegrationRequest & GetIntegrationRequest & GetIntegrationRequest & GetIntegrationRequest & GetIntegrationRequest & GetIntegrationRequest)[K]
    }>): Request<Integration, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getIntegration(
          this.ops["GetIntegration"].applicator.apply(partialParams)
        );
    }

    invokeGetIntegrationResponse(partialParams: ToOptional<{
      [K in keyof GetIntegrationResponseRequest & keyof GetIntegrationResponseRequest & keyof GetIntegrationResponseRequest & keyof GetIntegrationResponseRequest & keyof GetIntegrationResponseRequest & keyof GetIntegrationResponseRequest & keyof GetIntegrationResponseRequest]: (GetIntegrationResponseRequest & GetIntegrationResponseRequest & GetIntegrationResponseRequest & GetIntegrationResponseRequest & GetIntegrationResponseRequest & GetIntegrationResponseRequest & GetIntegrationResponseRequest)[K]
    }>): Request<IntegrationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getIntegrationResponse(
          this.ops["GetIntegrationResponse"].applicator.apply(partialParams)
        );
    }

    invokeGetMethod(partialParams: ToOptional<{
      [K in keyof GetMethodRequest & keyof GetMethodRequest & keyof GetMethodRequest & keyof GetMethodRequest & keyof GetMethodRequest & keyof GetMethodRequest & keyof GetMethodRequest]: (GetMethodRequest & GetMethodRequest & GetMethodRequest & GetMethodRequest & GetMethodRequest & GetMethodRequest & GetMethodRequest)[K]
    }>): Request<Method, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMethod(
          this.ops["GetMethod"].applicator.apply(partialParams)
        );
    }

    invokeGetMethodResponse(partialParams: ToOptional<{
      [K in keyof GetMethodResponseRequest & keyof GetMethodResponseRequest & keyof GetMethodResponseRequest & keyof GetMethodResponseRequest & keyof GetMethodResponseRequest & keyof GetMethodResponseRequest & keyof GetMethodResponseRequest]: (GetMethodResponseRequest & GetMethodResponseRequest & GetMethodResponseRequest & GetMethodResponseRequest & GetMethodResponseRequest & GetMethodResponseRequest & GetMethodResponseRequest)[K]
    }>): Request<MethodResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMethodResponse(
          this.ops["GetMethodResponse"].applicator.apply(partialParams)
        );
    }

    invokeGetModel(partialParams: ToOptional<{
      [K in keyof GetModelRequest & keyof GetModelRequest & keyof GetModelRequest & keyof GetModelRequest & keyof GetModelRequest & keyof GetModelRequest & keyof GetModelRequest]: (GetModelRequest & GetModelRequest & GetModelRequest & GetModelRequest & GetModelRequest & GetModelRequest & GetModelRequest)[K]
    }>): Request<Model, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getModel(
          this.ops["GetModel"].applicator.apply(partialParams)
        );
    }

    invokeGetModelTemplate(partialParams: ToOptional<{
      [K in keyof GetModelTemplateRequest & keyof GetModelTemplateRequest & keyof GetModelTemplateRequest & keyof GetModelTemplateRequest & keyof GetModelTemplateRequest & keyof GetModelTemplateRequest & keyof GetModelTemplateRequest]: (GetModelTemplateRequest & GetModelTemplateRequest & GetModelTemplateRequest & GetModelTemplateRequest & GetModelTemplateRequest & GetModelTemplateRequest & GetModelTemplateRequest)[K]
    }>): Request<Template, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getModelTemplate(
          this.ops["GetModelTemplate"].applicator.apply(partialParams)
        );
    }

    invokeGetModels(partialParams: ToOptional<{
      [K in keyof GetModelsRequest & keyof GetModelsRequest & keyof GetModelsRequest & keyof GetModelsRequest & keyof GetModelsRequest & keyof GetModelsRequest & keyof GetModelsRequest]: (GetModelsRequest & GetModelsRequest & GetModelsRequest & GetModelsRequest & GetModelsRequest & GetModelsRequest & GetModelsRequest)[K]
    }>): Request<Models, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getModels(
          this.ops["GetModels"].applicator.apply(partialParams)
        );
    }

    invokeGetRequestValidator(partialParams: ToOptional<{
      [K in keyof GetRequestValidatorRequest & keyof GetRequestValidatorRequest & keyof GetRequestValidatorRequest & keyof GetRequestValidatorRequest & keyof GetRequestValidatorRequest & keyof GetRequestValidatorRequest & keyof GetRequestValidatorRequest]: (GetRequestValidatorRequest & GetRequestValidatorRequest & GetRequestValidatorRequest & GetRequestValidatorRequest & GetRequestValidatorRequest & GetRequestValidatorRequest & GetRequestValidatorRequest)[K]
    }>): Request<RequestValidator, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRequestValidator(
          this.ops["GetRequestValidator"].applicator.apply(partialParams)
        );
    }

    invokeGetRequestValidators(partialParams: ToOptional<{
      [K in keyof GetRequestValidatorsRequest & keyof GetRequestValidatorsRequest & keyof GetRequestValidatorsRequest & keyof GetRequestValidatorsRequest & keyof GetRequestValidatorsRequest & keyof GetRequestValidatorsRequest & keyof GetRequestValidatorsRequest]: (GetRequestValidatorsRequest & GetRequestValidatorsRequest & GetRequestValidatorsRequest & GetRequestValidatorsRequest & GetRequestValidatorsRequest & GetRequestValidatorsRequest & GetRequestValidatorsRequest)[K]
    }>): Request<RequestValidators, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRequestValidators(
          this.ops["GetRequestValidators"].applicator.apply(partialParams)
        );
    }

    invokeGetResource(partialParams: ToOptional<{
      [K in keyof GetResourceRequest & keyof GetResourceRequest & keyof GetResourceRequest & keyof GetResourceRequest & keyof GetResourceRequest & keyof GetResourceRequest & keyof GetResourceRequest]: (GetResourceRequest & GetResourceRequest & GetResourceRequest & GetResourceRequest & GetResourceRequest & GetResourceRequest & GetResourceRequest)[K]
    }>): Request<Resource, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getResource(
          this.ops["GetResource"].applicator.apply(partialParams)
        );
    }

    invokeGetResources(partialParams: ToOptional<{
      [K in keyof GetResourcesRequest & keyof GetResourcesRequest & keyof GetResourcesRequest & keyof GetResourcesRequest & keyof GetResourcesRequest & keyof GetResourcesRequest & keyof GetResourcesRequest]: (GetResourcesRequest & GetResourcesRequest & GetResourcesRequest & GetResourcesRequest & GetResourcesRequest & GetResourcesRequest & GetResourcesRequest)[K]
    }>): Request<Resources, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getResources(
          this.ops["GetResources"].applicator.apply(partialParams)
        );
    }

    invokeGetRestApi(partialParams: ToOptional<{
      [K in keyof GetRestApiRequest & keyof GetRestApiRequest & keyof GetRestApiRequest & keyof GetRestApiRequest & keyof GetRestApiRequest & keyof GetRestApiRequest & keyof GetRestApiRequest]: (GetRestApiRequest & GetRestApiRequest & GetRestApiRequest & GetRestApiRequest & GetRestApiRequest & GetRestApiRequest & GetRestApiRequest)[K]
    }>): Request<RestApi, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRestApi(
          this.ops["GetRestApi"].applicator.apply(partialParams)
        );
    }

    invokeGetSdk(partialParams: ToOptional<{
      [K in keyof GetSdkRequest & keyof GetSdkRequest & keyof GetSdkRequest & keyof GetSdkRequest & keyof GetSdkRequest & keyof GetSdkRequest & keyof GetSdkRequest]: (GetSdkRequest & GetSdkRequest & GetSdkRequest & GetSdkRequest & GetSdkRequest & GetSdkRequest & GetSdkRequest)[K]
    }>): Request<SdkResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSdk(
          this.ops["GetSdk"].applicator.apply(partialParams)
        );
    }

    invokeGetSdkType(partialParams: ToOptional<{
      [K in keyof GetSdkTypeRequest & keyof GetSdkTypeRequest & keyof GetSdkTypeRequest & keyof GetSdkTypeRequest & keyof GetSdkTypeRequest & keyof GetSdkTypeRequest & keyof GetSdkTypeRequest]: (GetSdkTypeRequest & GetSdkTypeRequest & GetSdkTypeRequest & GetSdkTypeRequest & GetSdkTypeRequest & GetSdkTypeRequest & GetSdkTypeRequest)[K]
    }>): Request<SdkType, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSdkType(
          this.ops["GetSdkType"].applicator.apply(partialParams)
        );
    }

    invokeGetStage(partialParams: ToOptional<{
      [K in keyof GetStageRequest & keyof GetStageRequest & keyof GetStageRequest & keyof GetStageRequest & keyof GetStageRequest & keyof GetStageRequest & keyof GetStageRequest]: (GetStageRequest & GetStageRequest & GetStageRequest & GetStageRequest & GetStageRequest & GetStageRequest & GetStageRequest)[K]
    }>): Request<Stage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getStage(
          this.ops["GetStage"].applicator.apply(partialParams)
        );
    }

    invokeGetStages(partialParams: ToOptional<{
      [K in keyof GetStagesRequest & keyof GetStagesRequest & keyof GetStagesRequest & keyof GetStagesRequest & keyof GetStagesRequest & keyof GetStagesRequest & keyof GetStagesRequest]: (GetStagesRequest & GetStagesRequest & GetStagesRequest & GetStagesRequest & GetStagesRequest & GetStagesRequest & GetStagesRequest)[K]
    }>): Request<Stages, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getStages(
          this.ops["GetStages"].applicator.apply(partialParams)
        );
    }

    invokeGetTags(partialParams: ToOptional<{
      [K in keyof GetTagsRequest & keyof GetTagsRequest & keyof GetTagsRequest & keyof GetTagsRequest & keyof GetTagsRequest & keyof GetTagsRequest & keyof GetTagsRequest]: (GetTagsRequest & GetTagsRequest & GetTagsRequest & GetTagsRequest & GetTagsRequest & GetTagsRequest & GetTagsRequest)[K]
    }>): Request<Tags, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTags(
          this.ops["GetTags"].applicator.apply(partialParams)
        );
    }

    invokeGetUsage(partialParams: ToOptional<{
      [K in keyof GetUsageRequest & keyof GetUsageRequest & keyof GetUsageRequest & keyof GetUsageRequest & keyof GetUsageRequest & keyof GetUsageRequest & keyof GetUsageRequest]: (GetUsageRequest & GetUsageRequest & GetUsageRequest & GetUsageRequest & GetUsageRequest & GetUsageRequest & GetUsageRequest)[K]
    }>): Request<Usage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getUsage(
          this.ops["GetUsage"].applicator.apply(partialParams)
        );
    }

    invokeGetUsagePlan(partialParams: ToOptional<{
      [K in keyof GetUsagePlanRequest & keyof GetUsagePlanRequest & keyof GetUsagePlanRequest & keyof GetUsagePlanRequest & keyof GetUsagePlanRequest & keyof GetUsagePlanRequest & keyof GetUsagePlanRequest]: (GetUsagePlanRequest & GetUsagePlanRequest & GetUsagePlanRequest & GetUsagePlanRequest & GetUsagePlanRequest & GetUsagePlanRequest & GetUsagePlanRequest)[K]
    }>): Request<UsagePlan, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getUsagePlan(
          this.ops["GetUsagePlan"].applicator.apply(partialParams)
        );
    }

    invokeGetUsagePlanKey(partialParams: ToOptional<{
      [K in keyof GetUsagePlanKeyRequest & keyof GetUsagePlanKeyRequest & keyof GetUsagePlanKeyRequest & keyof GetUsagePlanKeyRequest & keyof GetUsagePlanKeyRequest & keyof GetUsagePlanKeyRequest & keyof GetUsagePlanKeyRequest]: (GetUsagePlanKeyRequest & GetUsagePlanKeyRequest & GetUsagePlanKeyRequest & GetUsagePlanKeyRequest & GetUsagePlanKeyRequest & GetUsagePlanKeyRequest & GetUsagePlanKeyRequest)[K]
    }>): Request<UsagePlanKey, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getUsagePlanKey(
          this.ops["GetUsagePlanKey"].applicator.apply(partialParams)
        );
    }

    invokeGetUsagePlanKeys(partialParams: ToOptional<{
      [K in keyof GetUsagePlanKeysRequest & keyof GetUsagePlanKeysRequest & keyof GetUsagePlanKeysRequest & keyof GetUsagePlanKeysRequest & keyof GetUsagePlanKeysRequest & keyof GetUsagePlanKeysRequest & keyof GetUsagePlanKeysRequest]: (GetUsagePlanKeysRequest & GetUsagePlanKeysRequest & GetUsagePlanKeysRequest & GetUsagePlanKeysRequest & GetUsagePlanKeysRequest & GetUsagePlanKeysRequest & GetUsagePlanKeysRequest)[K]
    }>): Request<UsagePlanKeys, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getUsagePlanKeys(
          this.ops["GetUsagePlanKeys"].applicator.apply(partialParams)
        );
    }

    invokeGetVpcLink(partialParams: ToOptional<{
      [K in keyof GetVpcLinkRequest & keyof GetVpcLinkRequest & keyof GetVpcLinkRequest & keyof GetVpcLinkRequest & keyof GetVpcLinkRequest & keyof GetVpcLinkRequest & keyof GetVpcLinkRequest]: (GetVpcLinkRequest & GetVpcLinkRequest & GetVpcLinkRequest & GetVpcLinkRequest & GetVpcLinkRequest & GetVpcLinkRequest & GetVpcLinkRequest)[K]
    }>): Request<VpcLink, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVpcLink(
          this.ops["GetVpcLink"].applicator.apply(partialParams)
        );
    }

    invokeImportApiKeys(partialParams: ToOptional<{
      [K in keyof ImportApiKeysRequest & keyof ImportApiKeysRequest & keyof ImportApiKeysRequest & keyof ImportApiKeysRequest & keyof ImportApiKeysRequest & keyof ImportApiKeysRequest & keyof ImportApiKeysRequest]: (ImportApiKeysRequest & ImportApiKeysRequest & ImportApiKeysRequest & ImportApiKeysRequest & ImportApiKeysRequest & ImportApiKeysRequest & ImportApiKeysRequest)[K]
    }>): Request<ApiKeyIds, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importApiKeys(
          this.ops["ImportApiKeys"].applicator.apply(partialParams)
        );
    }

    invokeImportDocumentationParts(partialParams: ToOptional<{
      [K in keyof ImportDocumentationPartsRequest & keyof ImportDocumentationPartsRequest & keyof ImportDocumentationPartsRequest & keyof ImportDocumentationPartsRequest & keyof ImportDocumentationPartsRequest & keyof ImportDocumentationPartsRequest & keyof ImportDocumentationPartsRequest]: (ImportDocumentationPartsRequest & ImportDocumentationPartsRequest & ImportDocumentationPartsRequest & ImportDocumentationPartsRequest & ImportDocumentationPartsRequest & ImportDocumentationPartsRequest & ImportDocumentationPartsRequest)[K]
    }>): Request<DocumentationPartIds, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importDocumentationParts(
          this.ops["ImportDocumentationParts"].applicator.apply(partialParams)
        );
    }

    invokeImportRestApi(partialParams: ToOptional<{
      [K in keyof ImportRestApiRequest & keyof ImportRestApiRequest & keyof ImportRestApiRequest & keyof ImportRestApiRequest & keyof ImportRestApiRequest & keyof ImportRestApiRequest & keyof ImportRestApiRequest]: (ImportRestApiRequest & ImportRestApiRequest & ImportRestApiRequest & ImportRestApiRequest & ImportRestApiRequest & ImportRestApiRequest & ImportRestApiRequest)[K]
    }>): Request<RestApi, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importRestApi(
          this.ops["ImportRestApi"].applicator.apply(partialParams)
        );
    }

    invokePutGatewayResponse(partialParams: ToOptional<{
      [K in keyof PutGatewayResponseRequest & keyof PutGatewayResponseRequest & keyof PutGatewayResponseRequest & keyof PutGatewayResponseRequest & keyof PutGatewayResponseRequest & keyof PutGatewayResponseRequest & keyof PutGatewayResponseRequest]: (PutGatewayResponseRequest & PutGatewayResponseRequest & PutGatewayResponseRequest & PutGatewayResponseRequest & PutGatewayResponseRequest & PutGatewayResponseRequest & PutGatewayResponseRequest)[K]
    }>): Request<GatewayResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putGatewayResponse(
          this.ops["PutGatewayResponse"].applicator.apply(partialParams)
        );
    }

    invokePutIntegration(partialParams: ToOptional<{
      [K in keyof PutIntegrationRequest & keyof PutIntegrationRequest & keyof PutIntegrationRequest & keyof PutIntegrationRequest & keyof PutIntegrationRequest & keyof PutIntegrationRequest & keyof PutIntegrationRequest]: (PutIntegrationRequest & PutIntegrationRequest & PutIntegrationRequest & PutIntegrationRequest & PutIntegrationRequest & PutIntegrationRequest & PutIntegrationRequest)[K]
    }>): Request<Integration, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putIntegration(
          this.ops["PutIntegration"].applicator.apply(partialParams)
        );
    }

    invokePutIntegrationResponse(partialParams: ToOptional<{
      [K in keyof PutIntegrationResponseRequest & keyof PutIntegrationResponseRequest & keyof PutIntegrationResponseRequest & keyof PutIntegrationResponseRequest & keyof PutIntegrationResponseRequest & keyof PutIntegrationResponseRequest & keyof PutIntegrationResponseRequest]: (PutIntegrationResponseRequest & PutIntegrationResponseRequest & PutIntegrationResponseRequest & PutIntegrationResponseRequest & PutIntegrationResponseRequest & PutIntegrationResponseRequest & PutIntegrationResponseRequest)[K]
    }>): Request<IntegrationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putIntegrationResponse(
          this.ops["PutIntegrationResponse"].applicator.apply(partialParams)
        );
    }

    invokePutMethod(partialParams: ToOptional<{
      [K in keyof PutMethodRequest & keyof PutMethodRequest & keyof PutMethodRequest & keyof PutMethodRequest & keyof PutMethodRequest & keyof PutMethodRequest & keyof PutMethodRequest]: (PutMethodRequest & PutMethodRequest & PutMethodRequest & PutMethodRequest & PutMethodRequest & PutMethodRequest & PutMethodRequest)[K]
    }>): Request<Method, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putMethod(
          this.ops["PutMethod"].applicator.apply(partialParams)
        );
    }

    invokePutMethodResponse(partialParams: ToOptional<{
      [K in keyof PutMethodResponseRequest & keyof PutMethodResponseRequest & keyof PutMethodResponseRequest & keyof PutMethodResponseRequest & keyof PutMethodResponseRequest & keyof PutMethodResponseRequest & keyof PutMethodResponseRequest]: (PutMethodResponseRequest & PutMethodResponseRequest & PutMethodResponseRequest & PutMethodResponseRequest & PutMethodResponseRequest & PutMethodResponseRequest & PutMethodResponseRequest)[K]
    }>): Request<MethodResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putMethodResponse(
          this.ops["PutMethodResponse"].applicator.apply(partialParams)
        );
    }

    invokePutRestApi(partialParams: ToOptional<{
      [K in keyof PutRestApiRequest & keyof PutRestApiRequest & keyof PutRestApiRequest & keyof PutRestApiRequest & keyof PutRestApiRequest & keyof PutRestApiRequest & keyof PutRestApiRequest]: (PutRestApiRequest & PutRestApiRequest & PutRestApiRequest & PutRestApiRequest & PutRestApiRequest & PutRestApiRequest & PutRestApiRequest)[K]
    }>): Request<RestApi, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putRestApi(
          this.ops["PutRestApi"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeTestInvokeAuthorizer(partialParams: ToOptional<{
      [K in keyof TestInvokeAuthorizerRequest & keyof TestInvokeAuthorizerRequest & keyof TestInvokeAuthorizerRequest & keyof TestInvokeAuthorizerRequest & keyof TestInvokeAuthorizerRequest & keyof TestInvokeAuthorizerRequest & keyof TestInvokeAuthorizerRequest]: (TestInvokeAuthorizerRequest & TestInvokeAuthorizerRequest & TestInvokeAuthorizerRequest & TestInvokeAuthorizerRequest & TestInvokeAuthorizerRequest & TestInvokeAuthorizerRequest & TestInvokeAuthorizerRequest)[K]
    }>): Request<TestInvokeAuthorizerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.testInvokeAuthorizer(
          this.ops["TestInvokeAuthorizer"].applicator.apply(partialParams)
        );
    }

    invokeTestInvokeMethod(partialParams: ToOptional<{
      [K in keyof TestInvokeMethodRequest & keyof TestInvokeMethodRequest & keyof TestInvokeMethodRequest & keyof TestInvokeMethodRequest & keyof TestInvokeMethodRequest & keyof TestInvokeMethodRequest & keyof TestInvokeMethodRequest]: (TestInvokeMethodRequest & TestInvokeMethodRequest & TestInvokeMethodRequest & TestInvokeMethodRequest & TestInvokeMethodRequest & TestInvokeMethodRequest & TestInvokeMethodRequest)[K]
    }>): Request<TestInvokeMethodResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.testInvokeMethod(
          this.ops["TestInvokeMethod"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateApiKey(partialParams: ToOptional<{
      [K in keyof UpdateApiKeyRequest & keyof UpdateApiKeyRequest & keyof UpdateApiKeyRequest & keyof UpdateApiKeyRequest & keyof UpdateApiKeyRequest & keyof UpdateApiKeyRequest & keyof UpdateApiKeyRequest]: (UpdateApiKeyRequest & UpdateApiKeyRequest & UpdateApiKeyRequest & UpdateApiKeyRequest & UpdateApiKeyRequest & UpdateApiKeyRequest & UpdateApiKeyRequest)[K]
    }>): Request<ApiKey, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApiKey(
          this.ops["UpdateApiKey"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAuthorizer(partialParams: ToOptional<{
      [K in keyof UpdateAuthorizerRequest & keyof UpdateAuthorizerRequest & keyof UpdateAuthorizerRequest & keyof UpdateAuthorizerRequest & keyof UpdateAuthorizerRequest & keyof UpdateAuthorizerRequest & keyof UpdateAuthorizerRequest]: (UpdateAuthorizerRequest & UpdateAuthorizerRequest & UpdateAuthorizerRequest & UpdateAuthorizerRequest & UpdateAuthorizerRequest & UpdateAuthorizerRequest & UpdateAuthorizerRequest)[K]
    }>): Request<Authorizer, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAuthorizer(
          this.ops["UpdateAuthorizer"].applicator.apply(partialParams)
        );
    }

    invokeUpdateBasePathMapping(partialParams: ToOptional<{
      [K in keyof UpdateBasePathMappingRequest & keyof UpdateBasePathMappingRequest & keyof UpdateBasePathMappingRequest & keyof UpdateBasePathMappingRequest & keyof UpdateBasePathMappingRequest & keyof UpdateBasePathMappingRequest & keyof UpdateBasePathMappingRequest]: (UpdateBasePathMappingRequest & UpdateBasePathMappingRequest & UpdateBasePathMappingRequest & UpdateBasePathMappingRequest & UpdateBasePathMappingRequest & UpdateBasePathMappingRequest & UpdateBasePathMappingRequest)[K]
    }>): Request<BasePathMapping, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateBasePathMapping(
          this.ops["UpdateBasePathMapping"].applicator.apply(partialParams)
        );
    }

    invokeUpdateClientCertificate(partialParams: ToOptional<{
      [K in keyof UpdateClientCertificateRequest & keyof UpdateClientCertificateRequest & keyof UpdateClientCertificateRequest & keyof UpdateClientCertificateRequest & keyof UpdateClientCertificateRequest & keyof UpdateClientCertificateRequest & keyof UpdateClientCertificateRequest]: (UpdateClientCertificateRequest & UpdateClientCertificateRequest & UpdateClientCertificateRequest & UpdateClientCertificateRequest & UpdateClientCertificateRequest & UpdateClientCertificateRequest & UpdateClientCertificateRequest)[K]
    }>): Request<ClientCertificate, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateClientCertificate(
          this.ops["UpdateClientCertificate"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDeployment(partialParams: ToOptional<{
      [K in keyof UpdateDeploymentRequest & keyof UpdateDeploymentRequest & keyof UpdateDeploymentRequest & keyof UpdateDeploymentRequest & keyof UpdateDeploymentRequest & keyof UpdateDeploymentRequest & keyof UpdateDeploymentRequest]: (UpdateDeploymentRequest & UpdateDeploymentRequest & UpdateDeploymentRequest & UpdateDeploymentRequest & UpdateDeploymentRequest & UpdateDeploymentRequest & UpdateDeploymentRequest)[K]
    }>): Request<Deployment, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDeployment(
          this.ops["UpdateDeployment"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDocumentationPart(partialParams: ToOptional<{
      [K in keyof UpdateDocumentationPartRequest & keyof UpdateDocumentationPartRequest & keyof UpdateDocumentationPartRequest & keyof UpdateDocumentationPartRequest & keyof UpdateDocumentationPartRequest & keyof UpdateDocumentationPartRequest & keyof UpdateDocumentationPartRequest]: (UpdateDocumentationPartRequest & UpdateDocumentationPartRequest & UpdateDocumentationPartRequest & UpdateDocumentationPartRequest & UpdateDocumentationPartRequest & UpdateDocumentationPartRequest & UpdateDocumentationPartRequest)[K]
    }>): Request<DocumentationPart, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDocumentationPart(
          this.ops["UpdateDocumentationPart"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDocumentationVersion(partialParams: ToOptional<{
      [K in keyof UpdateDocumentationVersionRequest & keyof UpdateDocumentationVersionRequest & keyof UpdateDocumentationVersionRequest & keyof UpdateDocumentationVersionRequest & keyof UpdateDocumentationVersionRequest & keyof UpdateDocumentationVersionRequest & keyof UpdateDocumentationVersionRequest]: (UpdateDocumentationVersionRequest & UpdateDocumentationVersionRequest & UpdateDocumentationVersionRequest & UpdateDocumentationVersionRequest & UpdateDocumentationVersionRequest & UpdateDocumentationVersionRequest & UpdateDocumentationVersionRequest)[K]
    }>): Request<DocumentationVersion, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDocumentationVersion(
          this.ops["UpdateDocumentationVersion"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDomainName(partialParams: ToOptional<{
      [K in keyof UpdateDomainNameRequest & keyof UpdateDomainNameRequest & keyof UpdateDomainNameRequest & keyof UpdateDomainNameRequest & keyof UpdateDomainNameRequest & keyof UpdateDomainNameRequest & keyof UpdateDomainNameRequest]: (UpdateDomainNameRequest & UpdateDomainNameRequest & UpdateDomainNameRequest & UpdateDomainNameRequest & UpdateDomainNameRequest & UpdateDomainNameRequest & UpdateDomainNameRequest)[K]
    }>): Request<DomainName, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDomainName(
          this.ops["UpdateDomainName"].applicator.apply(partialParams)
        );
    }

    invokeUpdateGatewayResponse(partialParams: ToOptional<{
      [K in keyof UpdateGatewayResponseRequest & keyof UpdateGatewayResponseRequest & keyof UpdateGatewayResponseRequest & keyof UpdateGatewayResponseRequest & keyof UpdateGatewayResponseRequest & keyof UpdateGatewayResponseRequest & keyof UpdateGatewayResponseRequest]: (UpdateGatewayResponseRequest & UpdateGatewayResponseRequest & UpdateGatewayResponseRequest & UpdateGatewayResponseRequest & UpdateGatewayResponseRequest & UpdateGatewayResponseRequest & UpdateGatewayResponseRequest)[K]
    }>): Request<GatewayResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateGatewayResponse(
          this.ops["UpdateGatewayResponse"].applicator.apply(partialParams)
        );
    }

    invokeUpdateIntegration(partialParams: ToOptional<{
      [K in keyof UpdateIntegrationRequest & keyof UpdateIntegrationRequest & keyof UpdateIntegrationRequest & keyof UpdateIntegrationRequest & keyof UpdateIntegrationRequest & keyof UpdateIntegrationRequest & keyof UpdateIntegrationRequest]: (UpdateIntegrationRequest & UpdateIntegrationRequest & UpdateIntegrationRequest & UpdateIntegrationRequest & UpdateIntegrationRequest & UpdateIntegrationRequest & UpdateIntegrationRequest)[K]
    }>): Request<Integration, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateIntegration(
          this.ops["UpdateIntegration"].applicator.apply(partialParams)
        );
    }

    invokeUpdateIntegrationResponse(partialParams: ToOptional<{
      [K in keyof UpdateIntegrationResponseRequest & keyof UpdateIntegrationResponseRequest & keyof UpdateIntegrationResponseRequest & keyof UpdateIntegrationResponseRequest & keyof UpdateIntegrationResponseRequest & keyof UpdateIntegrationResponseRequest & keyof UpdateIntegrationResponseRequest]: (UpdateIntegrationResponseRequest & UpdateIntegrationResponseRequest & UpdateIntegrationResponseRequest & UpdateIntegrationResponseRequest & UpdateIntegrationResponseRequest & UpdateIntegrationResponseRequest & UpdateIntegrationResponseRequest)[K]
    }>): Request<IntegrationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateIntegrationResponse(
          this.ops["UpdateIntegrationResponse"].applicator.apply(partialParams)
        );
    }

    invokeUpdateMethod(partialParams: ToOptional<{
      [K in keyof UpdateMethodRequest & keyof UpdateMethodRequest & keyof UpdateMethodRequest & keyof UpdateMethodRequest & keyof UpdateMethodRequest & keyof UpdateMethodRequest & keyof UpdateMethodRequest]: (UpdateMethodRequest & UpdateMethodRequest & UpdateMethodRequest & UpdateMethodRequest & UpdateMethodRequest & UpdateMethodRequest & UpdateMethodRequest)[K]
    }>): Request<Method, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateMethod(
          this.ops["UpdateMethod"].applicator.apply(partialParams)
        );
    }

    invokeUpdateMethodResponse(partialParams: ToOptional<{
      [K in keyof UpdateMethodResponseRequest & keyof UpdateMethodResponseRequest & keyof UpdateMethodResponseRequest & keyof UpdateMethodResponseRequest & keyof UpdateMethodResponseRequest & keyof UpdateMethodResponseRequest & keyof UpdateMethodResponseRequest]: (UpdateMethodResponseRequest & UpdateMethodResponseRequest & UpdateMethodResponseRequest & UpdateMethodResponseRequest & UpdateMethodResponseRequest & UpdateMethodResponseRequest & UpdateMethodResponseRequest)[K]
    }>): Request<MethodResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateMethodResponse(
          this.ops["UpdateMethodResponse"].applicator.apply(partialParams)
        );
    }

    invokeUpdateModel(partialParams: ToOptional<{
      [K in keyof UpdateModelRequest & keyof UpdateModelRequest & keyof UpdateModelRequest & keyof UpdateModelRequest & keyof UpdateModelRequest & keyof UpdateModelRequest & keyof UpdateModelRequest]: (UpdateModelRequest & UpdateModelRequest & UpdateModelRequest & UpdateModelRequest & UpdateModelRequest & UpdateModelRequest & UpdateModelRequest)[K]
    }>): Request<Model, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateModel(
          this.ops["UpdateModel"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRequestValidator(partialParams: ToOptional<{
      [K in keyof UpdateRequestValidatorRequest & keyof UpdateRequestValidatorRequest & keyof UpdateRequestValidatorRequest & keyof UpdateRequestValidatorRequest & keyof UpdateRequestValidatorRequest & keyof UpdateRequestValidatorRequest & keyof UpdateRequestValidatorRequest]: (UpdateRequestValidatorRequest & UpdateRequestValidatorRequest & UpdateRequestValidatorRequest & UpdateRequestValidatorRequest & UpdateRequestValidatorRequest & UpdateRequestValidatorRequest & UpdateRequestValidatorRequest)[K]
    }>): Request<RequestValidator, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRequestValidator(
          this.ops["UpdateRequestValidator"].applicator.apply(partialParams)
        );
    }

    invokeUpdateResource(partialParams: ToOptional<{
      [K in keyof UpdateResourceRequest & keyof UpdateResourceRequest & keyof UpdateResourceRequest & keyof UpdateResourceRequest & keyof UpdateResourceRequest & keyof UpdateResourceRequest & keyof UpdateResourceRequest]: (UpdateResourceRequest & UpdateResourceRequest & UpdateResourceRequest & UpdateResourceRequest & UpdateResourceRequest & UpdateResourceRequest & UpdateResourceRequest)[K]
    }>): Request<Resource, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateResource(
          this.ops["UpdateResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRestApi(partialParams: ToOptional<{
      [K in keyof UpdateRestApiRequest & keyof UpdateRestApiRequest & keyof UpdateRestApiRequest & keyof UpdateRestApiRequest & keyof UpdateRestApiRequest & keyof UpdateRestApiRequest & keyof UpdateRestApiRequest]: (UpdateRestApiRequest & UpdateRestApiRequest & UpdateRestApiRequest & UpdateRestApiRequest & UpdateRestApiRequest & UpdateRestApiRequest & UpdateRestApiRequest)[K]
    }>): Request<RestApi, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRestApi(
          this.ops["UpdateRestApi"].applicator.apply(partialParams)
        );
    }

    invokeUpdateStage(partialParams: ToOptional<{
      [K in keyof UpdateStageRequest & keyof UpdateStageRequest & keyof UpdateStageRequest & keyof UpdateStageRequest & keyof UpdateStageRequest & keyof UpdateStageRequest & keyof Omit<UpdateStageRequest, "stageName">]: (UpdateStageRequest & UpdateStageRequest & UpdateStageRequest & UpdateStageRequest & UpdateStageRequest & UpdateStageRequest & Omit<UpdateStageRequest, "stageName">)[K]
    }>): Request<Stage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateStage(
          this.ops["UpdateStage"].applicator.apply(partialParams)
        );
    }

    invokeUpdateUsage(partialParams: ToOptional<{
      [K in keyof UpdateUsageRequest & keyof UpdateUsageRequest & keyof UpdateUsageRequest & keyof UpdateUsageRequest & keyof UpdateUsageRequest & keyof UpdateUsageRequest & keyof UpdateUsageRequest]: (UpdateUsageRequest & UpdateUsageRequest & UpdateUsageRequest & UpdateUsageRequest & UpdateUsageRequest & UpdateUsageRequest & UpdateUsageRequest)[K]
    }>): Request<Usage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUsage(
          this.ops["UpdateUsage"].applicator.apply(partialParams)
        );
    }

    invokeUpdateUsagePlan(partialParams: ToOptional<{
      [K in keyof UpdateUsagePlanRequest & keyof UpdateUsagePlanRequest & keyof UpdateUsagePlanRequest & keyof UpdateUsagePlanRequest & keyof UpdateUsagePlanRequest & keyof UpdateUsagePlanRequest & keyof UpdateUsagePlanRequest]: (UpdateUsagePlanRequest & UpdateUsagePlanRequest & UpdateUsagePlanRequest & UpdateUsagePlanRequest & UpdateUsagePlanRequest & UpdateUsagePlanRequest & UpdateUsagePlanRequest)[K]
    }>): Request<UsagePlan, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUsagePlan(
          this.ops["UpdateUsagePlan"].applicator.apply(partialParams)
        );
    }

    invokeUpdateVpcLink(partialParams: ToOptional<{
      [K in keyof UpdateVpcLinkRequest & keyof UpdateVpcLinkRequest & keyof UpdateVpcLinkRequest & keyof UpdateVpcLinkRequest & keyof UpdateVpcLinkRequest & keyof UpdateVpcLinkRequest & keyof UpdateVpcLinkRequest]: (UpdateVpcLinkRequest & UpdateVpcLinkRequest & UpdateVpcLinkRequest & UpdateVpcLinkRequest & UpdateVpcLinkRequest & UpdateVpcLinkRequest & UpdateVpcLinkRequest)[K]
    }>): Request<VpcLink, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateVpcLink(
          this.ops["UpdateVpcLink"].applicator.apply(partialParams)
        );
    }
}