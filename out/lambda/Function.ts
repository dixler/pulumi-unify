
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AddLayerVersionPermissionRequest,
    AddPermissionRequest,
    CreateAliasRequest,
    CreateCodeSigningConfigRequest,
    CreateEventSourceMappingRequest,
    CreateFunctionRequest,
    DeleteCodeSigningConfigRequest,
    DeleteEventSourceMappingRequest,
    GetAccountSettingsRequest,
    GetAliasRequest,
    GetCodeSigningConfigRequest,
    GetEventSourceMappingRequest,
    GetFunctionRequest,
    GetFunctionCodeSigningConfigRequest,
    GetFunctionConcurrencyRequest,
    GetFunctionConfigurationRequest,
    GetFunctionEventInvokeConfigRequest,
    GetLayerVersionRequest,
    GetLayerVersionByArnRequest,
    GetLayerVersionPolicyRequest,
    GetPolicyRequest,
    GetProvisionedConcurrencyConfigRequest,
    InvocationRequest,
    InvokeAsyncRequest,
    ListAliasesRequest,
    ListCodeSigningConfigsRequest,
    ListEventSourceMappingsRequest,
    ListFunctionEventInvokeConfigsRequest,
    ListFunctionsRequest,
    ListFunctionsByCodeSigningConfigRequest,
    ListLayerVersionsRequest,
    ListLayersRequest,
    ListProvisionedConcurrencyConfigsRequest,
    ListTagsRequest,
    ListVersionsByFunctionRequest,
    PublishLayerVersionRequest,
    PublishVersionRequest,
    PutFunctionCodeSigningConfigRequest,
    PutFunctionConcurrencyRequest,
    PutFunctionEventInvokeConfigRequest,
    PutProvisionedConcurrencyConfigRequest,
    UpdateAliasRequest,
    UpdateCodeSigningConfigRequest,
    UpdateEventSourceMappingRequest,
    UpdateFunctionCodeRequest,
    UpdateFunctionConfigurationRequest,
    UpdateFunctionEventInvokeConfigRequest,
    AddLayerVersionPermissionResponse,
    AddPermissionResponse,
    AliasConfiguration,
    CreateCodeSigningConfigResponse,
    EventSourceMappingConfiguration,
    FunctionConfiguration,
    DeleteCodeSigningConfigResponse,
    GetAccountSettingsResponse,
    GetCodeSigningConfigResponse,
    GetFunctionResponse,
    GetFunctionCodeSigningConfigResponse,
    GetFunctionConcurrencyResponse,
    FunctionEventInvokeConfig,
    GetLayerVersionResponse,
    GetLayerVersionPolicyResponse,
    GetPolicyResponse,
    GetProvisionedConcurrencyConfigResponse,
    InvocationResponse,
    InvokeAsyncResponse,
    ListAliasesResponse,
    ListCodeSigningConfigsResponse,
    ListEventSourceMappingsResponse,
    ListFunctionEventInvokeConfigsResponse,
    ListFunctionsResponse,
    ListFunctionsByCodeSigningConfigResponse,
    ListLayerVersionsResponse,
    ListLayersResponse,
    ListProvisionedConcurrencyConfigsResponse,
    ListTagsResponse,
    ListVersionsByFunctionResponse,
    PublishLayerVersionResponse,
    PutFunctionCodeSigningConfigResponse,
    Concurrency,
    PutProvisionedConcurrencyConfigResponse,
    UpdateCodeSigningConfigResponse
} from "aws-sdk/clients/lambda";
const schema = require("../apis/lambda-2015-03-31.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.lambda.Function {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.lambda.Function>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Lambda()
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

    invokeAddLayerVersionPermission(partialParams: ToOptional<{
      [K in keyof AddLayerVersionPermissionRequest]: (AddLayerVersionPermissionRequest)[K]
    }>): Request<AddLayerVersionPermissionResponse, AWSError> {
        this.boot();
        return this.client.addLayerVersionPermission(
          this.ops["AddLayerVersionPermission"].apply(partialParams)
        );
    }

    invokeAddPermission(partialParams: ToOptional<{
      [K in keyof AddPermissionRequest & keyof Omit<AddPermissionRequest, "FunctionName">]: (AddPermissionRequest)[K]
    }>): Request<AddPermissionResponse, AWSError> {
        this.boot();
        return this.client.addPermission(
          this.ops["AddPermission"].apply(partialParams)
        );
    }

    invokeCreateAlias(partialParams: ToOptional<{
      [K in keyof CreateAliasRequest & keyof Omit<CreateAliasRequest, "FunctionName" | "Name" | "FunctionVersion">]: (CreateAliasRequest)[K]
    }>): Request<AliasConfiguration, AWSError> {
        this.boot();
        return this.client.createAlias(
          this.ops["CreateAlias"].apply(partialParams)
        );
    }

    invokeCreateCodeSigningConfig(partialParams: ToOptional<{
      [K in keyof CreateCodeSigningConfigRequest]: (CreateCodeSigningConfigRequest)[K]
    }>): Request<CreateCodeSigningConfigResponse, AWSError> {
        this.boot();
        return this.client.createCodeSigningConfig(
          this.ops["CreateCodeSigningConfig"].apply(partialParams)
        );
    }

    invokeCreateEventSourceMapping(partialParams: ToOptional<{
      [K in keyof CreateEventSourceMappingRequest & keyof Omit<CreateEventSourceMappingRequest, "FunctionName">]: (CreateEventSourceMappingRequest)[K]
    }>): Request<EventSourceMappingConfiguration, AWSError> {
        this.boot();
        return this.client.createEventSourceMapping(
          this.ops["CreateEventSourceMapping"].apply(partialParams)
        );
    }

    invokeCreateFunction(partialParams: ToOptional<{
      [K in keyof CreateFunctionRequest & keyof Omit<CreateFunctionRequest, "FunctionName" | "Role">]: (CreateFunctionRequest)[K]
    }>): Request<FunctionConfiguration, AWSError> {
        this.boot();
        return this.client.createFunction(
          this.ops["CreateFunction"].apply(partialParams)
        );
    }

    invokeDeleteCodeSigningConfig(partialParams: ToOptional<{
      [K in keyof DeleteCodeSigningConfigRequest & keyof Omit<DeleteCodeSigningConfigRequest, "CodeSigningConfigArn">]: (DeleteCodeSigningConfigRequest)[K]
    }>): Request<DeleteCodeSigningConfigResponse, AWSError> {
        this.boot();
        return this.client.deleteCodeSigningConfig(
          this.ops["DeleteCodeSigningConfig"].apply(partialParams)
        );
    }

    invokeDeleteEventSourceMapping(partialParams: ToOptional<{
      [K in keyof DeleteEventSourceMappingRequest]: (DeleteEventSourceMappingRequest)[K]
    }>): Request<EventSourceMappingConfiguration, AWSError> {
        this.boot();
        return this.client.deleteEventSourceMapping(
          this.ops["DeleteEventSourceMapping"].apply(partialParams)
        );
    }

    invokeGetAccountSettings(partialParams: ToOptional<{
      [K in keyof GetAccountSettingsRequest]: (GetAccountSettingsRequest)[K]
    }>): Request<GetAccountSettingsResponse, AWSError> {
        this.boot();
        return this.client.getAccountSettings(
          this.ops["GetAccountSettings"].apply(partialParams)
        );
    }

    invokeGetAlias(partialParams: ToOptional<{
      [K in keyof GetAliasRequest & keyof Omit<GetAliasRequest, "FunctionName" | "Name">]: (GetAliasRequest)[K]
    }>): Request<AliasConfiguration, AWSError> {
        this.boot();
        return this.client.getAlias(
          this.ops["GetAlias"].apply(partialParams)
        );
    }

    invokeGetCodeSigningConfig(partialParams: ToOptional<{
      [K in keyof GetCodeSigningConfigRequest & keyof Omit<GetCodeSigningConfigRequest, "CodeSigningConfigArn">]: (GetCodeSigningConfigRequest)[K]
    }>): Request<GetCodeSigningConfigResponse, AWSError> {
        this.boot();
        return this.client.getCodeSigningConfig(
          this.ops["GetCodeSigningConfig"].apply(partialParams)
        );
    }

    invokeGetEventSourceMapping(partialParams: ToOptional<{
      [K in keyof GetEventSourceMappingRequest]: (GetEventSourceMappingRequest)[K]
    }>): Request<EventSourceMappingConfiguration, AWSError> {
        this.boot();
        return this.client.getEventSourceMapping(
          this.ops["GetEventSourceMapping"].apply(partialParams)
        );
    }

    invokeGetFunction(partialParams: ToOptional<{
      [K in keyof GetFunctionRequest & keyof Omit<GetFunctionRequest, "FunctionName">]: (GetFunctionRequest)[K]
    }>): Request<GetFunctionResponse, AWSError> {
        this.boot();
        return this.client.getFunction(
          this.ops["GetFunction"].apply(partialParams)
        );
    }

    invokeGetFunctionCodeSigningConfig(partialParams: ToOptional<{
      [K in keyof GetFunctionCodeSigningConfigRequest & keyof Omit<GetFunctionCodeSigningConfigRequest, "FunctionName">]: (GetFunctionCodeSigningConfigRequest)[K]
    }>): Request<GetFunctionCodeSigningConfigResponse, AWSError> {
        this.boot();
        return this.client.getFunctionCodeSigningConfig(
          this.ops["GetFunctionCodeSigningConfig"].apply(partialParams)
        );
    }

    invokeGetFunctionConcurrency(partialParams: ToOptional<{
      [K in keyof GetFunctionConcurrencyRequest & keyof Omit<GetFunctionConcurrencyRequest, "FunctionName">]: (GetFunctionConcurrencyRequest)[K]
    }>): Request<GetFunctionConcurrencyResponse, AWSError> {
        this.boot();
        return this.client.getFunctionConcurrency(
          this.ops["GetFunctionConcurrency"].apply(partialParams)
        );
    }

    invokeGetFunctionConfiguration(partialParams: ToOptional<{
      [K in keyof GetFunctionConfigurationRequest & keyof Omit<GetFunctionConfigurationRequest, "FunctionName">]: (GetFunctionConfigurationRequest)[K]
    }>): Request<FunctionConfiguration, AWSError> {
        this.boot();
        return this.client.getFunctionConfiguration(
          this.ops["GetFunctionConfiguration"].apply(partialParams)
        );
    }

    invokeGetFunctionEventInvokeConfig(partialParams: ToOptional<{
      [K in keyof GetFunctionEventInvokeConfigRequest & keyof Omit<GetFunctionEventInvokeConfigRequest, "FunctionName">]: (GetFunctionEventInvokeConfigRequest)[K]
    }>): Request<FunctionEventInvokeConfig, AWSError> {
        this.boot();
        return this.client.getFunctionEventInvokeConfig(
          this.ops["GetFunctionEventInvokeConfig"].apply(partialParams)
        );
    }

    invokeGetLayerVersion(partialParams: ToOptional<{
      [K in keyof GetLayerVersionRequest]: (GetLayerVersionRequest)[K]
    }>): Request<GetLayerVersionResponse, AWSError> {
        this.boot();
        return this.client.getLayerVersion(
          this.ops["GetLayerVersion"].apply(partialParams)
        );
    }

    invokeGetLayerVersionByArn(partialParams: ToOptional<{
      [K in keyof GetLayerVersionByArnRequest & keyof Omit<GetLayerVersionByArnRequest, "Arn">]: (GetLayerVersionByArnRequest)[K]
    }>): Request<GetLayerVersionResponse, AWSError> {
        this.boot();
        return this.client.getLayerVersionByArn(
          this.ops["GetLayerVersionByArn"].apply(partialParams)
        );
    }

    invokeGetLayerVersionPolicy(partialParams: ToOptional<{
      [K in keyof GetLayerVersionPolicyRequest]: (GetLayerVersionPolicyRequest)[K]
    }>): Request<GetLayerVersionPolicyResponse, AWSError> {
        this.boot();
        return this.client.getLayerVersionPolicy(
          this.ops["GetLayerVersionPolicy"].apply(partialParams)
        );
    }

    invokeGetPolicy(partialParams: ToOptional<{
      [K in keyof GetPolicyRequest & keyof Omit<GetPolicyRequest, "FunctionName">]: (GetPolicyRequest)[K]
    }>): Request<GetPolicyResponse, AWSError> {
        this.boot();
        return this.client.getPolicy(
          this.ops["GetPolicy"].apply(partialParams)
        );
    }

    invokeGetProvisionedConcurrencyConfig(partialParams: ToOptional<{
      [K in keyof GetProvisionedConcurrencyConfigRequest & keyof Omit<GetProvisionedConcurrencyConfigRequest, "FunctionName">]: (GetProvisionedConcurrencyConfigRequest)[K]
    }>): Request<GetProvisionedConcurrencyConfigResponse, AWSError> {
        this.boot();
        return this.client.getProvisionedConcurrencyConfig(
          this.ops["GetProvisionedConcurrencyConfig"].apply(partialParams)
        );
    }

    invokeInvoke(partialParams: ToOptional<{
      [K in keyof InvocationRequest & keyof Omit<InvocationRequest, "FunctionName">]: (InvocationRequest)[K]
    }>): Request<InvocationResponse, AWSError> {
        this.boot();
        return this.client.invoke(
          this.ops["Invoke"].apply(partialParams)
        );
    }

    invokeInvokeAsync(partialParams: ToOptional<{
      [K in keyof InvokeAsyncRequest & keyof Omit<InvokeAsyncRequest, "FunctionName">]: (InvokeAsyncRequest)[K]
    }>): Request<InvokeAsyncResponse, AWSError> {
        this.boot();
        return this.client.invokeAsync(
          this.ops["InvokeAsync"].apply(partialParams)
        );
    }

    invokeListAliases(partialParams: ToOptional<{
      [K in keyof ListAliasesRequest & keyof Omit<ListAliasesRequest, "FunctionName">]: (ListAliasesRequest)[K]
    }>): Request<ListAliasesResponse, AWSError> {
        this.boot();
        return this.client.listAliases(
          this.ops["ListAliases"].apply(partialParams)
        );
    }

    invokeListCodeSigningConfigs(partialParams: ToOptional<{
      [K in keyof ListCodeSigningConfigsRequest]: (ListCodeSigningConfigsRequest)[K]
    }>): Request<ListCodeSigningConfigsResponse, AWSError> {
        this.boot();
        return this.client.listCodeSigningConfigs(
          this.ops["ListCodeSigningConfigs"].apply(partialParams)
        );
    }

    invokeListEventSourceMappings(partialParams: ToOptional<{
      [K in keyof ListEventSourceMappingsRequest]: (ListEventSourceMappingsRequest)[K]
    }>): Request<ListEventSourceMappingsResponse, AWSError> {
        this.boot();
        return this.client.listEventSourceMappings(
          this.ops["ListEventSourceMappings"].apply(partialParams)
        );
    }

    invokeListFunctionEventInvokeConfigs(partialParams: ToOptional<{
      [K in keyof ListFunctionEventInvokeConfigsRequest & keyof Omit<ListFunctionEventInvokeConfigsRequest, "FunctionName">]: (ListFunctionEventInvokeConfigsRequest)[K]
    }>): Request<ListFunctionEventInvokeConfigsResponse, AWSError> {
        this.boot();
        return this.client.listFunctionEventInvokeConfigs(
          this.ops["ListFunctionEventInvokeConfigs"].apply(partialParams)
        );
    }

    invokeListFunctions(partialParams: ToOptional<{
      [K in keyof ListFunctionsRequest]: (ListFunctionsRequest)[K]
    }>): Request<ListFunctionsResponse, AWSError> {
        this.boot();
        return this.client.listFunctions(
          this.ops["ListFunctions"].apply(partialParams)
        );
    }

    invokeListFunctionsByCodeSigningConfig(partialParams: ToOptional<{
      [K in keyof ListFunctionsByCodeSigningConfigRequest & keyof Omit<ListFunctionsByCodeSigningConfigRequest, "CodeSigningConfigArn">]: (ListFunctionsByCodeSigningConfigRequest)[K]
    }>): Request<ListFunctionsByCodeSigningConfigResponse, AWSError> {
        this.boot();
        return this.client.listFunctionsByCodeSigningConfig(
          this.ops["ListFunctionsByCodeSigningConfig"].apply(partialParams)
        );
    }

    invokeListLayerVersions(partialParams: ToOptional<{
      [K in keyof ListLayerVersionsRequest]: (ListLayerVersionsRequest)[K]
    }>): Request<ListLayerVersionsResponse, AWSError> {
        this.boot();
        return this.client.listLayerVersions(
          this.ops["ListLayerVersions"].apply(partialParams)
        );
    }

    invokeListLayers(partialParams: ToOptional<{
      [K in keyof ListLayersRequest]: (ListLayersRequest)[K]
    }>): Request<ListLayersResponse, AWSError> {
        this.boot();
        return this.client.listLayers(
          this.ops["ListLayers"].apply(partialParams)
        );
    }

    invokeListProvisionedConcurrencyConfigs(partialParams: ToOptional<{
      [K in keyof ListProvisionedConcurrencyConfigsRequest & keyof Omit<ListProvisionedConcurrencyConfigsRequest, "FunctionName">]: (ListProvisionedConcurrencyConfigsRequest)[K]
    }>): Request<ListProvisionedConcurrencyConfigsResponse, AWSError> {
        this.boot();
        return this.client.listProvisionedConcurrencyConfigs(
          this.ops["ListProvisionedConcurrencyConfigs"].apply(partialParams)
        );
    }

    invokeListTags(partialParams: ToOptional<{
      [K in keyof ListTagsRequest]: (ListTagsRequest)[K]
    }>): Request<ListTagsResponse, AWSError> {
        this.boot();
        return this.client.listTags(
          this.ops["ListTags"].apply(partialParams)
        );
    }

    invokeListVersionsByFunction(partialParams: ToOptional<{
      [K in keyof ListVersionsByFunctionRequest & keyof Omit<ListVersionsByFunctionRequest, "FunctionName">]: (ListVersionsByFunctionRequest)[K]
    }>): Request<ListVersionsByFunctionResponse, AWSError> {
        this.boot();
        return this.client.listVersionsByFunction(
          this.ops["ListVersionsByFunction"].apply(partialParams)
        );
    }

    invokePublishLayerVersion(partialParams: ToOptional<{
      [K in keyof PublishLayerVersionRequest]: (PublishLayerVersionRequest)[K]
    }>): Request<PublishLayerVersionResponse, AWSError> {
        this.boot();
        return this.client.publishLayerVersion(
          this.ops["PublishLayerVersion"].apply(partialParams)
        );
    }

    invokePublishVersion(partialParams: ToOptional<{
      [K in keyof PublishVersionRequest & keyof Omit<PublishVersionRequest, "FunctionName">]: (PublishVersionRequest)[K]
    }>): Request<FunctionConfiguration, AWSError> {
        this.boot();
        return this.client.publishVersion(
          this.ops["PublishVersion"].apply(partialParams)
        );
    }

    invokePutFunctionCodeSigningConfig(partialParams: ToOptional<{
      [K in keyof PutFunctionCodeSigningConfigRequest & keyof Omit<PutFunctionCodeSigningConfigRequest, "CodeSigningConfigArn" | "FunctionName">]: (PutFunctionCodeSigningConfigRequest)[K]
    }>): Request<PutFunctionCodeSigningConfigResponse, AWSError> {
        this.boot();
        return this.client.putFunctionCodeSigningConfig(
          this.ops["PutFunctionCodeSigningConfig"].apply(partialParams)
        );
    }

    invokePutFunctionConcurrency(partialParams: ToOptional<{
      [K in keyof PutFunctionConcurrencyRequest & keyof Omit<PutFunctionConcurrencyRequest, "FunctionName">]: (PutFunctionConcurrencyRequest)[K]
    }>): Request<Concurrency, AWSError> {
        this.boot();
        return this.client.putFunctionConcurrency(
          this.ops["PutFunctionConcurrency"].apply(partialParams)
        );
    }

    invokePutFunctionEventInvokeConfig(partialParams: ToOptional<{
      [K in keyof PutFunctionEventInvokeConfigRequest & keyof Omit<PutFunctionEventInvokeConfigRequest, "FunctionName">]: (PutFunctionEventInvokeConfigRequest)[K]
    }>): Request<FunctionEventInvokeConfig, AWSError> {
        this.boot();
        return this.client.putFunctionEventInvokeConfig(
          this.ops["PutFunctionEventInvokeConfig"].apply(partialParams)
        );
    }

    invokePutProvisionedConcurrencyConfig(partialParams: ToOptional<{
      [K in keyof PutProvisionedConcurrencyConfigRequest & keyof Omit<PutProvisionedConcurrencyConfigRequest, "FunctionName">]: (PutProvisionedConcurrencyConfigRequest)[K]
    }>): Request<PutProvisionedConcurrencyConfigResponse, AWSError> {
        this.boot();
        return this.client.putProvisionedConcurrencyConfig(
          this.ops["PutProvisionedConcurrencyConfig"].apply(partialParams)
        );
    }

    invokeUpdateAlias(partialParams: ToOptional<{
      [K in keyof UpdateAliasRequest & keyof Omit<UpdateAliasRequest, "FunctionName" | "Name">]: (UpdateAliasRequest)[K]
    }>): Request<AliasConfiguration, AWSError> {
        this.boot();
        return this.client.updateAlias(
          this.ops["UpdateAlias"].apply(partialParams)
        );
    }

    invokeUpdateCodeSigningConfig(partialParams: ToOptional<{
      [K in keyof UpdateCodeSigningConfigRequest & keyof Omit<UpdateCodeSigningConfigRequest, "CodeSigningConfigArn">]: (UpdateCodeSigningConfigRequest)[K]
    }>): Request<UpdateCodeSigningConfigResponse, AWSError> {
        this.boot();
        return this.client.updateCodeSigningConfig(
          this.ops["UpdateCodeSigningConfig"].apply(partialParams)
        );
    }

    invokeUpdateEventSourceMapping(partialParams: ToOptional<{
      [K in keyof UpdateEventSourceMappingRequest]: (UpdateEventSourceMappingRequest)[K]
    }>): Request<EventSourceMappingConfiguration, AWSError> {
        this.boot();
        return this.client.updateEventSourceMapping(
          this.ops["UpdateEventSourceMapping"].apply(partialParams)
        );
    }

    invokeUpdateFunctionCode(partialParams: ToOptional<{
      [K in keyof UpdateFunctionCodeRequest & keyof Omit<UpdateFunctionCodeRequest, "FunctionName">]: (UpdateFunctionCodeRequest)[K]
    }>): Request<FunctionConfiguration, AWSError> {
        this.boot();
        return this.client.updateFunctionCode(
          this.ops["UpdateFunctionCode"].apply(partialParams)
        );
    }

    invokeUpdateFunctionConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateFunctionConfigurationRequest & keyof Omit<UpdateFunctionConfigurationRequest, "FunctionName">]: (UpdateFunctionConfigurationRequest)[K]
    }>): Request<FunctionConfiguration, AWSError> {
        this.boot();
        return this.client.updateFunctionConfiguration(
          this.ops["UpdateFunctionConfiguration"].apply(partialParams)
        );
    }

    invokeUpdateFunctionEventInvokeConfig(partialParams: ToOptional<{
      [K in keyof UpdateFunctionEventInvokeConfigRequest & keyof Omit<UpdateFunctionEventInvokeConfigRequest, "FunctionName">]: (UpdateFunctionEventInvokeConfigRequest)[K]
    }>): Request<FunctionEventInvokeConfig, AWSError> {
        this.boot();
        return this.client.updateFunctionEventInvokeConfig(
          this.ops["UpdateFunctionEventInvokeConfig"].apply(partialParams)
        );
    }
}