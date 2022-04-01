
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AddPermissionRequest,
    CreateAliasRequest,
    CreateEventSourceMappingRequest,
    CreateFunctionRequest,
    GetAliasRequest,
    GetFunctionRequest,
    GetFunctionCodeSigningConfigRequest,
    GetFunctionConcurrencyRequest,
    GetFunctionConfigurationRequest,
    GetFunctionEventInvokeConfigRequest,
    GetPolicyRequest,
    GetProvisionedConcurrencyConfigRequest,
    InvocationRequest,
    InvokeAsyncRequest,
    ListAliasesRequest,
    ListFunctionEventInvokeConfigsRequest,
    ListProvisionedConcurrencyConfigsRequest,
    ListVersionsByFunctionRequest,
    PublishVersionRequest,
    PutFunctionCodeSigningConfigRequest,
    PutFunctionConcurrencyRequest,
    PutFunctionEventInvokeConfigRequest,
    PutProvisionedConcurrencyConfigRequest,
    UpdateAliasRequest,
    UpdateFunctionCodeRequest,
    UpdateFunctionConfigurationRequest,
    UpdateFunctionEventInvokeConfigRequest,
    AddPermissionResponse,
    AliasConfiguration,
    EventSourceMappingConfiguration,
    FunctionConfiguration,
    GetFunctionResponse,
    GetFunctionCodeSigningConfigResponse,
    GetFunctionConcurrencyResponse,
    FunctionEventInvokeConfig,
    GetPolicyResponse,
    GetProvisionedConcurrencyConfigResponse,
    InvocationResponse,
    InvokeAsyncResponse,
    ListAliasesResponse,
    ListFunctionEventInvokeConfigsResponse,
    ListProvisionedConcurrencyConfigsResponse,
    ListVersionsByFunctionResponse,
    PutFunctionCodeSigningConfigResponse,
    Concurrency,
    PutProvisionedConcurrencyConfigResponse
} from "aws-sdk/clients/lambda";
const schema = require("../apis/lambda-2015-03-31.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.lambda.Invocation {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.lambda.Invocation>) {
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

    invokeAddPermission(partialParams: ToOptional<{
      [K in keyof AddPermissionRequest & keyof Omit<AddPermissionRequest, "FunctionName">]: (AddPermissionRequest)[K]
    }>): Request<AddPermissionResponse, AWSError> {
        this.boot();
        return this.client.addPermission(
          this.ops["AddPermission"].apply(partialParams)
        );
    }

    invokeCreateAlias(partialParams: ToOptional<{
      [K in keyof CreateAliasRequest & keyof Omit<CreateAliasRequest, "FunctionName">]: (CreateAliasRequest)[K]
    }>): Request<AliasConfiguration, AWSError> {
        this.boot();
        return this.client.createAlias(
          this.ops["CreateAlias"].apply(partialParams)
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
      [K in keyof CreateFunctionRequest & keyof Omit<CreateFunctionRequest, "FunctionName">]: (CreateFunctionRequest)[K]
    }>): Request<FunctionConfiguration, AWSError> {
        this.boot();
        return this.client.createFunction(
          this.ops["CreateFunction"].apply(partialParams)
        );
    }

    invokeGetAlias(partialParams: ToOptional<{
      [K in keyof GetAliasRequest & keyof Omit<GetAliasRequest, "FunctionName">]: (GetAliasRequest)[K]
    }>): Request<AliasConfiguration, AWSError> {
        this.boot();
        return this.client.getAlias(
          this.ops["GetAlias"].apply(partialParams)
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

    invokeGetPolicy(partialParams: ToOptional<{
      [K in keyof GetPolicyRequest & keyof Omit<GetPolicyRequest, "FunctionName">]: (GetPolicyRequest)[K]
    }>): Request<GetPolicyResponse, AWSError> {
        this.boot();
        return this.client.getPolicy(
          this.ops["GetPolicy"].apply(partialParams)
        );
    }

    invokeGetProvisionedConcurrencyConfig(partialParams: ToOptional<{
      [K in keyof GetProvisionedConcurrencyConfigRequest & keyof Omit<GetProvisionedConcurrencyConfigRequest, "FunctionName" | "Qualifier">]: (GetProvisionedConcurrencyConfigRequest)[K]
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

    invokeListFunctionEventInvokeConfigs(partialParams: ToOptional<{
      [K in keyof ListFunctionEventInvokeConfigsRequest & keyof Omit<ListFunctionEventInvokeConfigsRequest, "FunctionName">]: (ListFunctionEventInvokeConfigsRequest)[K]
    }>): Request<ListFunctionEventInvokeConfigsResponse, AWSError> {
        this.boot();
        return this.client.listFunctionEventInvokeConfigs(
          this.ops["ListFunctionEventInvokeConfigs"].apply(partialParams)
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

    invokeListVersionsByFunction(partialParams: ToOptional<{
      [K in keyof ListVersionsByFunctionRequest & keyof Omit<ListVersionsByFunctionRequest, "FunctionName">]: (ListVersionsByFunctionRequest)[K]
    }>): Request<ListVersionsByFunctionResponse, AWSError> {
        this.boot();
        return this.client.listVersionsByFunction(
          this.ops["ListVersionsByFunction"].apply(partialParams)
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
      [K in keyof PutFunctionCodeSigningConfigRequest & keyof Omit<PutFunctionCodeSigningConfigRequest, "FunctionName">]: (PutFunctionCodeSigningConfigRequest)[K]
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
      [K in keyof PutProvisionedConcurrencyConfigRequest & keyof Omit<PutProvisionedConcurrencyConfigRequest, "FunctionName" | "Qualifier">]: (PutProvisionedConcurrencyConfigRequest)[K]
    }>): Request<PutProvisionedConcurrencyConfigResponse, AWSError> {
        this.boot();
        return this.client.putProvisionedConcurrencyConfig(
          this.ops["PutProvisionedConcurrencyConfig"].apply(partialParams)
        );
    }

    invokeUpdateAlias(partialParams: ToOptional<{
      [K in keyof UpdateAliasRequest & keyof Omit<UpdateAliasRequest, "FunctionName">]: (UpdateAliasRequest)[K]
    }>): Request<AliasConfiguration, AWSError> {
        this.boot();
        return this.client.updateAlias(
          this.ops["UpdateAlias"].apply(partialParams)
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