
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
    DeleteAliasRequest,
    DeleteCodeSigningConfigRequest,
    DeleteEventSourceMappingRequest,
    DeleteFunctionRequest,
    DeleteFunctionCodeSigningConfigRequest,
    DeleteFunctionConcurrencyRequest,
    DeleteFunctionEventInvokeConfigRequest,
    DeleteLayerVersionRequest,
    DeleteProvisionedConcurrencyConfigRequest,
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
    ListFunctionEventInvokeConfigsRequest,
    ListFunctionsByCodeSigningConfigRequest,
    ListLayerVersionsRequest,
    ListProvisionedConcurrencyConfigsRequest,
    ListTagsRequest,
    ListVersionsByFunctionRequest,
    PublishLayerVersionRequest,
    PublishVersionRequest,
    PutFunctionCodeSigningConfigRequest,
    PutFunctionConcurrencyRequest,
    PutFunctionEventInvokeConfigRequest,
    PutProvisionedConcurrencyConfigRequest,
    RemoveLayerVersionPermissionRequest,
    RemovePermissionRequest,
    TagResourceRequest,
    UntagResourceRequest,
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
    ListFunctionEventInvokeConfigsResponse,
    ListFunctionsByCodeSigningConfigResponse,
    ListLayerVersionsResponse,
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
    constructor(...args: ConstructorParameters<typeof aws.lambda.Function>) {
        super(...args)
        this.client = new awssdk.Lambda()
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

    invokeAddLayerVersionPermission(partialParams: ToOptional<{
      [K in keyof AddLayerVersionPermissionRequest & keyof AddLayerVersionPermissionRequest & keyof AddLayerVersionPermissionRequest & keyof AddLayerVersionPermissionRequest & keyof AddLayerVersionPermissionRequest & keyof AddLayerVersionPermissionRequest & keyof AddLayerVersionPermissionRequest & keyof AddLayerVersionPermissionRequest & keyof AddLayerVersionPermissionRequest & keyof AddLayerVersionPermissionRequest & keyof AddLayerVersionPermissionRequest & keyof AddLayerVersionPermissionRequest & keyof AddLayerVersionPermissionRequest & keyof AddLayerVersionPermissionRequest & keyof AddLayerVersionPermissionRequest & keyof AddLayerVersionPermissionRequest & keyof AddLayerVersionPermissionRequest & keyof AddLayerVersionPermissionRequest & keyof AddLayerVersionPermissionRequest & keyof AddLayerVersionPermissionRequest]: (AddLayerVersionPermissionRequest & AddLayerVersionPermissionRequest & AddLayerVersionPermissionRequest & AddLayerVersionPermissionRequest & AddLayerVersionPermissionRequest & AddLayerVersionPermissionRequest & AddLayerVersionPermissionRequest & AddLayerVersionPermissionRequest & AddLayerVersionPermissionRequest & AddLayerVersionPermissionRequest & AddLayerVersionPermissionRequest & AddLayerVersionPermissionRequest & AddLayerVersionPermissionRequest & AddLayerVersionPermissionRequest & AddLayerVersionPermissionRequest & AddLayerVersionPermissionRequest & AddLayerVersionPermissionRequest & AddLayerVersionPermissionRequest & AddLayerVersionPermissionRequest & AddLayerVersionPermissionRequest)[K]
    }>): Request<AddLayerVersionPermissionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addLayerVersionPermission(
          this.ops["AddLayerVersionPermission"].applicator.apply(partialParams)
        );
    }

    invokeAddPermission(partialParams: ToOptional<{
      [K in keyof AddPermissionRequest & keyof AddPermissionRequest & keyof AddPermissionRequest & keyof AddPermissionRequest & keyof AddPermissionRequest & keyof AddPermissionRequest & keyof AddPermissionRequest & keyof AddPermissionRequest & keyof AddPermissionRequest & keyof AddPermissionRequest & keyof AddPermissionRequest & keyof AddPermissionRequest & keyof AddPermissionRequest & keyof AddPermissionRequest & keyof AddPermissionRequest & keyof AddPermissionRequest & keyof AddPermissionRequest & keyof AddPermissionRequest & keyof AddPermissionRequest & keyof AddPermissionRequest]: (AddPermissionRequest & AddPermissionRequest & AddPermissionRequest & AddPermissionRequest & AddPermissionRequest & AddPermissionRequest & AddPermissionRequest & AddPermissionRequest & AddPermissionRequest & AddPermissionRequest & AddPermissionRequest & AddPermissionRequest & AddPermissionRequest & AddPermissionRequest & AddPermissionRequest & AddPermissionRequest & AddPermissionRequest & AddPermissionRequest & AddPermissionRequest & AddPermissionRequest)[K]
    }>): Request<AddPermissionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addPermission(
          this.ops["AddPermission"].applicator.apply(partialParams)
        );
    }

    invokeCreateAlias(partialParams: ToOptional<{
      [K in keyof CreateAliasRequest & keyof CreateAliasRequest & keyof CreateAliasRequest & keyof CreateAliasRequest & keyof CreateAliasRequest & keyof CreateAliasRequest & keyof CreateAliasRequest & keyof CreateAliasRequest & keyof Omit<CreateAliasRequest, "Name"> & keyof CreateAliasRequest & keyof CreateAliasRequest & keyof CreateAliasRequest & keyof CreateAliasRequest & keyof CreateAliasRequest & keyof CreateAliasRequest & keyof CreateAliasRequest & keyof CreateAliasRequest & keyof CreateAliasRequest & keyof CreateAliasRequest & keyof CreateAliasRequest]: (CreateAliasRequest & CreateAliasRequest & CreateAliasRequest & CreateAliasRequest & CreateAliasRequest & CreateAliasRequest & CreateAliasRequest & CreateAliasRequest & Omit<CreateAliasRequest, "Name"> & CreateAliasRequest & CreateAliasRequest & CreateAliasRequest & CreateAliasRequest & CreateAliasRequest & CreateAliasRequest & CreateAliasRequest & CreateAliasRequest & CreateAliasRequest & CreateAliasRequest & CreateAliasRequest)[K]
    }>): Request<AliasConfiguration, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAlias(
          this.ops["CreateAlias"].applicator.apply(partialParams)
        );
    }

    invokeCreateCodeSigningConfig(partialParams: ToOptional<{
      [K in keyof CreateCodeSigningConfigRequest & keyof CreateCodeSigningConfigRequest & keyof CreateCodeSigningConfigRequest & keyof CreateCodeSigningConfigRequest & keyof CreateCodeSigningConfigRequest & keyof CreateCodeSigningConfigRequest & keyof CreateCodeSigningConfigRequest & keyof CreateCodeSigningConfigRequest & keyof CreateCodeSigningConfigRequest & keyof CreateCodeSigningConfigRequest & keyof CreateCodeSigningConfigRequest & keyof CreateCodeSigningConfigRequest & keyof CreateCodeSigningConfigRequest & keyof CreateCodeSigningConfigRequest & keyof CreateCodeSigningConfigRequest & keyof CreateCodeSigningConfigRequest & keyof CreateCodeSigningConfigRequest & keyof CreateCodeSigningConfigRequest & keyof CreateCodeSigningConfigRequest & keyof CreateCodeSigningConfigRequest]: (CreateCodeSigningConfigRequest & CreateCodeSigningConfigRequest & CreateCodeSigningConfigRequest & CreateCodeSigningConfigRequest & CreateCodeSigningConfigRequest & CreateCodeSigningConfigRequest & CreateCodeSigningConfigRequest & CreateCodeSigningConfigRequest & CreateCodeSigningConfigRequest & CreateCodeSigningConfigRequest & CreateCodeSigningConfigRequest & CreateCodeSigningConfigRequest & CreateCodeSigningConfigRequest & CreateCodeSigningConfigRequest & CreateCodeSigningConfigRequest & CreateCodeSigningConfigRequest & CreateCodeSigningConfigRequest & CreateCodeSigningConfigRequest & CreateCodeSigningConfigRequest & CreateCodeSigningConfigRequest)[K]
    }>): Request<CreateCodeSigningConfigResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCodeSigningConfig(
          this.ops["CreateCodeSigningConfig"].applicator.apply(partialParams)
        );
    }

    invokeCreateEventSourceMapping(partialParams: ToOptional<{
      [K in keyof CreateEventSourceMappingRequest & keyof CreateEventSourceMappingRequest & keyof CreateEventSourceMappingRequest & keyof CreateEventSourceMappingRequest & keyof CreateEventSourceMappingRequest & keyof CreateEventSourceMappingRequest & keyof CreateEventSourceMappingRequest & keyof CreateEventSourceMappingRequest & keyof CreateEventSourceMappingRequest & keyof CreateEventSourceMappingRequest & keyof CreateEventSourceMappingRequest & keyof CreateEventSourceMappingRequest & keyof CreateEventSourceMappingRequest & keyof CreateEventSourceMappingRequest & keyof CreateEventSourceMappingRequest & keyof CreateEventSourceMappingRequest & keyof CreateEventSourceMappingRequest & keyof CreateEventSourceMappingRequest & keyof CreateEventSourceMappingRequest & keyof CreateEventSourceMappingRequest]: (CreateEventSourceMappingRequest & CreateEventSourceMappingRequest & CreateEventSourceMappingRequest & CreateEventSourceMappingRequest & CreateEventSourceMappingRequest & CreateEventSourceMappingRequest & CreateEventSourceMappingRequest & CreateEventSourceMappingRequest & CreateEventSourceMappingRequest & CreateEventSourceMappingRequest & CreateEventSourceMappingRequest & CreateEventSourceMappingRequest & CreateEventSourceMappingRequest & CreateEventSourceMappingRequest & CreateEventSourceMappingRequest & CreateEventSourceMappingRequest & CreateEventSourceMappingRequest & CreateEventSourceMappingRequest & CreateEventSourceMappingRequest & CreateEventSourceMappingRequest)[K]
    }>): Request<EventSourceMappingConfiguration, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createEventSourceMapping(
          this.ops["CreateEventSourceMapping"].applicator.apply(partialParams)
        );
    }

    invokeCreateFunction(partialParams: ToOptional<{
      [K in keyof CreateFunctionRequest & keyof CreateFunctionRequest & keyof CreateFunctionRequest & keyof CreateFunctionRequest & keyof CreateFunctionRequest & keyof CreateFunctionRequest & keyof CreateFunctionRequest & keyof CreateFunctionRequest & keyof CreateFunctionRequest & keyof CreateFunctionRequest & keyof CreateFunctionRequest & keyof CreateFunctionRequest & keyof CreateFunctionRequest & keyof CreateFunctionRequest & keyof CreateFunctionRequest & keyof CreateFunctionRequest & keyof CreateFunctionRequest & keyof CreateFunctionRequest & keyof CreateFunctionRequest & keyof CreateFunctionRequest]: (CreateFunctionRequest & CreateFunctionRequest & CreateFunctionRequest & CreateFunctionRequest & CreateFunctionRequest & CreateFunctionRequest & CreateFunctionRequest & CreateFunctionRequest & CreateFunctionRequest & CreateFunctionRequest & CreateFunctionRequest & CreateFunctionRequest & CreateFunctionRequest & CreateFunctionRequest & CreateFunctionRequest & CreateFunctionRequest & CreateFunctionRequest & CreateFunctionRequest & CreateFunctionRequest & CreateFunctionRequest)[K]
    }>): Request<FunctionConfiguration, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFunction(
          this.ops["CreateFunction"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAlias(partialParams: ToOptional<{
      [K in keyof DeleteAliasRequest & keyof DeleteAliasRequest & keyof DeleteAliasRequest & keyof DeleteAliasRequest & keyof DeleteAliasRequest & keyof DeleteAliasRequest & keyof DeleteAliasRequest & keyof DeleteAliasRequest & keyof Omit<DeleteAliasRequest, "Name"> & keyof DeleteAliasRequest & keyof DeleteAliasRequest & keyof DeleteAliasRequest & keyof DeleteAliasRequest & keyof DeleteAliasRequest & keyof DeleteAliasRequest & keyof DeleteAliasRequest & keyof DeleteAliasRequest & keyof DeleteAliasRequest & keyof DeleteAliasRequest & keyof DeleteAliasRequest]: (DeleteAliasRequest & DeleteAliasRequest & DeleteAliasRequest & DeleteAliasRequest & DeleteAliasRequest & DeleteAliasRequest & DeleteAliasRequest & DeleteAliasRequest & Omit<DeleteAliasRequest, "Name"> & DeleteAliasRequest & DeleteAliasRequest & DeleteAliasRequest & DeleteAliasRequest & DeleteAliasRequest & DeleteAliasRequest & DeleteAliasRequest & DeleteAliasRequest & DeleteAliasRequest & DeleteAliasRequest & DeleteAliasRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAlias(
          this.ops["DeleteAlias"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCodeSigningConfig(partialParams: ToOptional<{
      [K in keyof DeleteCodeSigningConfigRequest & keyof Omit<DeleteCodeSigningConfigRequest, "CodeSigningConfigArn"> & keyof DeleteCodeSigningConfigRequest & keyof DeleteCodeSigningConfigRequest & keyof DeleteCodeSigningConfigRequest & keyof DeleteCodeSigningConfigRequest & keyof DeleteCodeSigningConfigRequest & keyof DeleteCodeSigningConfigRequest & keyof DeleteCodeSigningConfigRequest & keyof DeleteCodeSigningConfigRequest & keyof DeleteCodeSigningConfigRequest & keyof DeleteCodeSigningConfigRequest & keyof DeleteCodeSigningConfigRequest & keyof DeleteCodeSigningConfigRequest & keyof DeleteCodeSigningConfigRequest & keyof DeleteCodeSigningConfigRequest & keyof DeleteCodeSigningConfigRequest & keyof DeleteCodeSigningConfigRequest & keyof DeleteCodeSigningConfigRequest & keyof DeleteCodeSigningConfigRequest]: (DeleteCodeSigningConfigRequest & Omit<DeleteCodeSigningConfigRequest, "CodeSigningConfigArn"> & DeleteCodeSigningConfigRequest & DeleteCodeSigningConfigRequest & DeleteCodeSigningConfigRequest & DeleteCodeSigningConfigRequest & DeleteCodeSigningConfigRequest & DeleteCodeSigningConfigRequest & DeleteCodeSigningConfigRequest & DeleteCodeSigningConfigRequest & DeleteCodeSigningConfigRequest & DeleteCodeSigningConfigRequest & DeleteCodeSigningConfigRequest & DeleteCodeSigningConfigRequest & DeleteCodeSigningConfigRequest & DeleteCodeSigningConfigRequest & DeleteCodeSigningConfigRequest & DeleteCodeSigningConfigRequest & DeleteCodeSigningConfigRequest & DeleteCodeSigningConfigRequest)[K]
    }>): Request<DeleteCodeSigningConfigResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCodeSigningConfig(
          this.ops["DeleteCodeSigningConfig"].applicator.apply(partialParams)
        );
    }

    invokeDeleteEventSourceMapping(partialParams: ToOptional<{
      [K in keyof DeleteEventSourceMappingRequest & keyof DeleteEventSourceMappingRequest & keyof DeleteEventSourceMappingRequest & keyof DeleteEventSourceMappingRequest & keyof DeleteEventSourceMappingRequest & keyof DeleteEventSourceMappingRequest & keyof DeleteEventSourceMappingRequest & keyof DeleteEventSourceMappingRequest & keyof DeleteEventSourceMappingRequest & keyof DeleteEventSourceMappingRequest & keyof DeleteEventSourceMappingRequest & keyof DeleteEventSourceMappingRequest & keyof DeleteEventSourceMappingRequest & keyof DeleteEventSourceMappingRequest & keyof DeleteEventSourceMappingRequest & keyof DeleteEventSourceMappingRequest & keyof DeleteEventSourceMappingRequest & keyof DeleteEventSourceMappingRequest & keyof DeleteEventSourceMappingRequest & keyof DeleteEventSourceMappingRequest]: (DeleteEventSourceMappingRequest & DeleteEventSourceMappingRequest & DeleteEventSourceMappingRequest & DeleteEventSourceMappingRequest & DeleteEventSourceMappingRequest & DeleteEventSourceMappingRequest & DeleteEventSourceMappingRequest & DeleteEventSourceMappingRequest & DeleteEventSourceMappingRequest & DeleteEventSourceMappingRequest & DeleteEventSourceMappingRequest & DeleteEventSourceMappingRequest & DeleteEventSourceMappingRequest & DeleteEventSourceMappingRequest & DeleteEventSourceMappingRequest & DeleteEventSourceMappingRequest & DeleteEventSourceMappingRequest & DeleteEventSourceMappingRequest & DeleteEventSourceMappingRequest & DeleteEventSourceMappingRequest)[K]
    }>): Request<EventSourceMappingConfiguration, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEventSourceMapping(
          this.ops["DeleteEventSourceMapping"].applicator.apply(partialParams)
        );
    }

    invokeDeleteFunction(partialParams: ToOptional<{
      [K in keyof DeleteFunctionRequest & keyof DeleteFunctionRequest & keyof DeleteFunctionRequest & keyof DeleteFunctionRequest & keyof DeleteFunctionRequest & keyof DeleteFunctionRequest & keyof DeleteFunctionRequest & keyof DeleteFunctionRequest & keyof DeleteFunctionRequest & keyof DeleteFunctionRequest & keyof DeleteFunctionRequest & keyof DeleteFunctionRequest & keyof DeleteFunctionRequest & keyof DeleteFunctionRequest & keyof DeleteFunctionRequest & keyof DeleteFunctionRequest & keyof DeleteFunctionRequest & keyof DeleteFunctionRequest & keyof DeleteFunctionRequest & keyof DeleteFunctionRequest]: (DeleteFunctionRequest & DeleteFunctionRequest & DeleteFunctionRequest & DeleteFunctionRequest & DeleteFunctionRequest & DeleteFunctionRequest & DeleteFunctionRequest & DeleteFunctionRequest & DeleteFunctionRequest & DeleteFunctionRequest & DeleteFunctionRequest & DeleteFunctionRequest & DeleteFunctionRequest & DeleteFunctionRequest & DeleteFunctionRequest & DeleteFunctionRequest & DeleteFunctionRequest & DeleteFunctionRequest & DeleteFunctionRequest & DeleteFunctionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFunction(
          this.ops["DeleteFunction"].applicator.apply(partialParams)
        );
    }

    invokeDeleteFunctionCodeSigningConfig(partialParams: ToOptional<{
      [K in keyof DeleteFunctionCodeSigningConfigRequest & keyof DeleteFunctionCodeSigningConfigRequest & keyof DeleteFunctionCodeSigningConfigRequest & keyof DeleteFunctionCodeSigningConfigRequest & keyof DeleteFunctionCodeSigningConfigRequest & keyof DeleteFunctionCodeSigningConfigRequest & keyof DeleteFunctionCodeSigningConfigRequest & keyof DeleteFunctionCodeSigningConfigRequest & keyof DeleteFunctionCodeSigningConfigRequest & keyof DeleteFunctionCodeSigningConfigRequest & keyof DeleteFunctionCodeSigningConfigRequest & keyof DeleteFunctionCodeSigningConfigRequest & keyof DeleteFunctionCodeSigningConfigRequest & keyof DeleteFunctionCodeSigningConfigRequest & keyof DeleteFunctionCodeSigningConfigRequest & keyof DeleteFunctionCodeSigningConfigRequest & keyof DeleteFunctionCodeSigningConfigRequest & keyof DeleteFunctionCodeSigningConfigRequest & keyof DeleteFunctionCodeSigningConfigRequest & keyof DeleteFunctionCodeSigningConfigRequest]: (DeleteFunctionCodeSigningConfigRequest & DeleteFunctionCodeSigningConfigRequest & DeleteFunctionCodeSigningConfigRequest & DeleteFunctionCodeSigningConfigRequest & DeleteFunctionCodeSigningConfigRequest & DeleteFunctionCodeSigningConfigRequest & DeleteFunctionCodeSigningConfigRequest & DeleteFunctionCodeSigningConfigRequest & DeleteFunctionCodeSigningConfigRequest & DeleteFunctionCodeSigningConfigRequest & DeleteFunctionCodeSigningConfigRequest & DeleteFunctionCodeSigningConfigRequest & DeleteFunctionCodeSigningConfigRequest & DeleteFunctionCodeSigningConfigRequest & DeleteFunctionCodeSigningConfigRequest & DeleteFunctionCodeSigningConfigRequest & DeleteFunctionCodeSigningConfigRequest & DeleteFunctionCodeSigningConfigRequest & DeleteFunctionCodeSigningConfigRequest & DeleteFunctionCodeSigningConfigRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFunctionCodeSigningConfig(
          this.ops["DeleteFunctionCodeSigningConfig"].applicator.apply(partialParams)
        );
    }

    invokeDeleteFunctionConcurrency(partialParams: ToOptional<{
      [K in keyof DeleteFunctionConcurrencyRequest & keyof DeleteFunctionConcurrencyRequest & keyof DeleteFunctionConcurrencyRequest & keyof DeleteFunctionConcurrencyRequest & keyof DeleteFunctionConcurrencyRequest & keyof DeleteFunctionConcurrencyRequest & keyof DeleteFunctionConcurrencyRequest & keyof DeleteFunctionConcurrencyRequest & keyof DeleteFunctionConcurrencyRequest & keyof DeleteFunctionConcurrencyRequest & keyof DeleteFunctionConcurrencyRequest & keyof DeleteFunctionConcurrencyRequest & keyof DeleteFunctionConcurrencyRequest & keyof DeleteFunctionConcurrencyRequest & keyof DeleteFunctionConcurrencyRequest & keyof DeleteFunctionConcurrencyRequest & keyof DeleteFunctionConcurrencyRequest & keyof DeleteFunctionConcurrencyRequest & keyof DeleteFunctionConcurrencyRequest & keyof DeleteFunctionConcurrencyRequest]: (DeleteFunctionConcurrencyRequest & DeleteFunctionConcurrencyRequest & DeleteFunctionConcurrencyRequest & DeleteFunctionConcurrencyRequest & DeleteFunctionConcurrencyRequest & DeleteFunctionConcurrencyRequest & DeleteFunctionConcurrencyRequest & DeleteFunctionConcurrencyRequest & DeleteFunctionConcurrencyRequest & DeleteFunctionConcurrencyRequest & DeleteFunctionConcurrencyRequest & DeleteFunctionConcurrencyRequest & DeleteFunctionConcurrencyRequest & DeleteFunctionConcurrencyRequest & DeleteFunctionConcurrencyRequest & DeleteFunctionConcurrencyRequest & DeleteFunctionConcurrencyRequest & DeleteFunctionConcurrencyRequest & DeleteFunctionConcurrencyRequest & DeleteFunctionConcurrencyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFunctionConcurrency(
          this.ops["DeleteFunctionConcurrency"].applicator.apply(partialParams)
        );
    }

    invokeDeleteFunctionEventInvokeConfig(partialParams: ToOptional<{
      [K in keyof DeleteFunctionEventInvokeConfigRequest & keyof DeleteFunctionEventInvokeConfigRequest & keyof DeleteFunctionEventInvokeConfigRequest & keyof DeleteFunctionEventInvokeConfigRequest & keyof DeleteFunctionEventInvokeConfigRequest & keyof DeleteFunctionEventInvokeConfigRequest & keyof DeleteFunctionEventInvokeConfigRequest & keyof DeleteFunctionEventInvokeConfigRequest & keyof DeleteFunctionEventInvokeConfigRequest & keyof DeleteFunctionEventInvokeConfigRequest & keyof DeleteFunctionEventInvokeConfigRequest & keyof DeleteFunctionEventInvokeConfigRequest & keyof DeleteFunctionEventInvokeConfigRequest & keyof DeleteFunctionEventInvokeConfigRequest & keyof DeleteFunctionEventInvokeConfigRequest & keyof DeleteFunctionEventInvokeConfigRequest & keyof DeleteFunctionEventInvokeConfigRequest & keyof DeleteFunctionEventInvokeConfigRequest & keyof DeleteFunctionEventInvokeConfigRequest & keyof DeleteFunctionEventInvokeConfigRequest]: (DeleteFunctionEventInvokeConfigRequest & DeleteFunctionEventInvokeConfigRequest & DeleteFunctionEventInvokeConfigRequest & DeleteFunctionEventInvokeConfigRequest & DeleteFunctionEventInvokeConfigRequest & DeleteFunctionEventInvokeConfigRequest & DeleteFunctionEventInvokeConfigRequest & DeleteFunctionEventInvokeConfigRequest & DeleteFunctionEventInvokeConfigRequest & DeleteFunctionEventInvokeConfigRequest & DeleteFunctionEventInvokeConfigRequest & DeleteFunctionEventInvokeConfigRequest & DeleteFunctionEventInvokeConfigRequest & DeleteFunctionEventInvokeConfigRequest & DeleteFunctionEventInvokeConfigRequest & DeleteFunctionEventInvokeConfigRequest & DeleteFunctionEventInvokeConfigRequest & DeleteFunctionEventInvokeConfigRequest & DeleteFunctionEventInvokeConfigRequest & DeleteFunctionEventInvokeConfigRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFunctionEventInvokeConfig(
          this.ops["DeleteFunctionEventInvokeConfig"].applicator.apply(partialParams)
        );
    }

    invokeDeleteLayerVersion(partialParams: ToOptional<{
      [K in keyof DeleteLayerVersionRequest & keyof DeleteLayerVersionRequest & keyof DeleteLayerVersionRequest & keyof DeleteLayerVersionRequest & keyof DeleteLayerVersionRequest & keyof DeleteLayerVersionRequest & keyof DeleteLayerVersionRequest & keyof DeleteLayerVersionRequest & keyof DeleteLayerVersionRequest & keyof DeleteLayerVersionRequest & keyof DeleteLayerVersionRequest & keyof DeleteLayerVersionRequest & keyof DeleteLayerVersionRequest & keyof DeleteLayerVersionRequest & keyof DeleteLayerVersionRequest & keyof DeleteLayerVersionRequest & keyof DeleteLayerVersionRequest & keyof DeleteLayerVersionRequest & keyof DeleteLayerVersionRequest & keyof DeleteLayerVersionRequest]: (DeleteLayerVersionRequest & DeleteLayerVersionRequest & DeleteLayerVersionRequest & DeleteLayerVersionRequest & DeleteLayerVersionRequest & DeleteLayerVersionRequest & DeleteLayerVersionRequest & DeleteLayerVersionRequest & DeleteLayerVersionRequest & DeleteLayerVersionRequest & DeleteLayerVersionRequest & DeleteLayerVersionRequest & DeleteLayerVersionRequest & DeleteLayerVersionRequest & DeleteLayerVersionRequest & DeleteLayerVersionRequest & DeleteLayerVersionRequest & DeleteLayerVersionRequest & DeleteLayerVersionRequest & DeleteLayerVersionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteLayerVersion(
          this.ops["DeleteLayerVersion"].applicator.apply(partialParams)
        );
    }

    invokeDeleteProvisionedConcurrencyConfig(partialParams: ToOptional<{
      [K in keyof DeleteProvisionedConcurrencyConfigRequest & keyof DeleteProvisionedConcurrencyConfigRequest & keyof DeleteProvisionedConcurrencyConfigRequest & keyof DeleteProvisionedConcurrencyConfigRequest & keyof DeleteProvisionedConcurrencyConfigRequest & keyof DeleteProvisionedConcurrencyConfigRequest & keyof DeleteProvisionedConcurrencyConfigRequest & keyof DeleteProvisionedConcurrencyConfigRequest & keyof DeleteProvisionedConcurrencyConfigRequest & keyof DeleteProvisionedConcurrencyConfigRequest & keyof DeleteProvisionedConcurrencyConfigRequest & keyof DeleteProvisionedConcurrencyConfigRequest & keyof DeleteProvisionedConcurrencyConfigRequest & keyof DeleteProvisionedConcurrencyConfigRequest & keyof DeleteProvisionedConcurrencyConfigRequest & keyof DeleteProvisionedConcurrencyConfigRequest & keyof DeleteProvisionedConcurrencyConfigRequest & keyof DeleteProvisionedConcurrencyConfigRequest & keyof DeleteProvisionedConcurrencyConfigRequest & keyof DeleteProvisionedConcurrencyConfigRequest]: (DeleteProvisionedConcurrencyConfigRequest & DeleteProvisionedConcurrencyConfigRequest & DeleteProvisionedConcurrencyConfigRequest & DeleteProvisionedConcurrencyConfigRequest & DeleteProvisionedConcurrencyConfigRequest & DeleteProvisionedConcurrencyConfigRequest & DeleteProvisionedConcurrencyConfigRequest & DeleteProvisionedConcurrencyConfigRequest & DeleteProvisionedConcurrencyConfigRequest & DeleteProvisionedConcurrencyConfigRequest & DeleteProvisionedConcurrencyConfigRequest & DeleteProvisionedConcurrencyConfigRequest & DeleteProvisionedConcurrencyConfigRequest & DeleteProvisionedConcurrencyConfigRequest & DeleteProvisionedConcurrencyConfigRequest & DeleteProvisionedConcurrencyConfigRequest & DeleteProvisionedConcurrencyConfigRequest & DeleteProvisionedConcurrencyConfigRequest & DeleteProvisionedConcurrencyConfigRequest & DeleteProvisionedConcurrencyConfigRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteProvisionedConcurrencyConfig(
          this.ops["DeleteProvisionedConcurrencyConfig"].applicator.apply(partialParams)
        );
    }

    invokeGetAlias(partialParams: ToOptional<{
      [K in keyof GetAliasRequest & keyof GetAliasRequest & keyof GetAliasRequest & keyof GetAliasRequest & keyof GetAliasRequest & keyof GetAliasRequest & keyof GetAliasRequest & keyof GetAliasRequest & keyof Omit<GetAliasRequest, "Name"> & keyof GetAliasRequest & keyof GetAliasRequest & keyof GetAliasRequest & keyof GetAliasRequest & keyof GetAliasRequest & keyof GetAliasRequest & keyof GetAliasRequest & keyof GetAliasRequest & keyof GetAliasRequest & keyof GetAliasRequest & keyof GetAliasRequest]: (GetAliasRequest & GetAliasRequest & GetAliasRequest & GetAliasRequest & GetAliasRequest & GetAliasRequest & GetAliasRequest & GetAliasRequest & Omit<GetAliasRequest, "Name"> & GetAliasRequest & GetAliasRequest & GetAliasRequest & GetAliasRequest & GetAliasRequest & GetAliasRequest & GetAliasRequest & GetAliasRequest & GetAliasRequest & GetAliasRequest & GetAliasRequest)[K]
    }>): Request<AliasConfiguration, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAlias(
          this.ops["GetAlias"].applicator.apply(partialParams)
        );
    }

    invokeGetCodeSigningConfig(partialParams: ToOptional<{
      [K in keyof GetCodeSigningConfigRequest & keyof Omit<GetCodeSigningConfigRequest, "CodeSigningConfigArn"> & keyof GetCodeSigningConfigRequest & keyof GetCodeSigningConfigRequest & keyof GetCodeSigningConfigRequest & keyof GetCodeSigningConfigRequest & keyof GetCodeSigningConfigRequest & keyof GetCodeSigningConfigRequest & keyof GetCodeSigningConfigRequest & keyof GetCodeSigningConfigRequest & keyof GetCodeSigningConfigRequest & keyof GetCodeSigningConfigRequest & keyof GetCodeSigningConfigRequest & keyof GetCodeSigningConfigRequest & keyof GetCodeSigningConfigRequest & keyof GetCodeSigningConfigRequest & keyof GetCodeSigningConfigRequest & keyof GetCodeSigningConfigRequest & keyof GetCodeSigningConfigRequest & keyof GetCodeSigningConfigRequest]: (GetCodeSigningConfigRequest & Omit<GetCodeSigningConfigRequest, "CodeSigningConfigArn"> & GetCodeSigningConfigRequest & GetCodeSigningConfigRequest & GetCodeSigningConfigRequest & GetCodeSigningConfigRequest & GetCodeSigningConfigRequest & GetCodeSigningConfigRequest & GetCodeSigningConfigRequest & GetCodeSigningConfigRequest & GetCodeSigningConfigRequest & GetCodeSigningConfigRequest & GetCodeSigningConfigRequest & GetCodeSigningConfigRequest & GetCodeSigningConfigRequest & GetCodeSigningConfigRequest & GetCodeSigningConfigRequest & GetCodeSigningConfigRequest & GetCodeSigningConfigRequest & GetCodeSigningConfigRequest)[K]
    }>): Request<GetCodeSigningConfigResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCodeSigningConfig(
          this.ops["GetCodeSigningConfig"].applicator.apply(partialParams)
        );
    }

    invokeGetEventSourceMapping(partialParams: ToOptional<{
      [K in keyof GetEventSourceMappingRequest & keyof GetEventSourceMappingRequest & keyof GetEventSourceMappingRequest & keyof GetEventSourceMappingRequest & keyof GetEventSourceMappingRequest & keyof GetEventSourceMappingRequest & keyof GetEventSourceMappingRequest & keyof GetEventSourceMappingRequest & keyof GetEventSourceMappingRequest & keyof GetEventSourceMappingRequest & keyof GetEventSourceMappingRequest & keyof GetEventSourceMappingRequest & keyof GetEventSourceMappingRequest & keyof GetEventSourceMappingRequest & keyof GetEventSourceMappingRequest & keyof GetEventSourceMappingRequest & keyof GetEventSourceMappingRequest & keyof GetEventSourceMappingRequest & keyof GetEventSourceMappingRequest & keyof GetEventSourceMappingRequest]: (GetEventSourceMappingRequest & GetEventSourceMappingRequest & GetEventSourceMappingRequest & GetEventSourceMappingRequest & GetEventSourceMappingRequest & GetEventSourceMappingRequest & GetEventSourceMappingRequest & GetEventSourceMappingRequest & GetEventSourceMappingRequest & GetEventSourceMappingRequest & GetEventSourceMappingRequest & GetEventSourceMappingRequest & GetEventSourceMappingRequest & GetEventSourceMappingRequest & GetEventSourceMappingRequest & GetEventSourceMappingRequest & GetEventSourceMappingRequest & GetEventSourceMappingRequest & GetEventSourceMappingRequest & GetEventSourceMappingRequest)[K]
    }>): Request<EventSourceMappingConfiguration, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getEventSourceMapping(
          this.ops["GetEventSourceMapping"].applicator.apply(partialParams)
        );
    }

    invokeGetFunction(partialParams: ToOptional<{
      [K in keyof GetFunctionRequest & keyof GetFunctionRequest & keyof GetFunctionRequest & keyof GetFunctionRequest & keyof GetFunctionRequest & keyof GetFunctionRequest & keyof GetFunctionRequest & keyof GetFunctionRequest & keyof GetFunctionRequest & keyof GetFunctionRequest & keyof GetFunctionRequest & keyof GetFunctionRequest & keyof GetFunctionRequest & keyof GetFunctionRequest & keyof GetFunctionRequest & keyof GetFunctionRequest & keyof GetFunctionRequest & keyof GetFunctionRequest & keyof GetFunctionRequest & keyof GetFunctionRequest]: (GetFunctionRequest & GetFunctionRequest & GetFunctionRequest & GetFunctionRequest & GetFunctionRequest & GetFunctionRequest & GetFunctionRequest & GetFunctionRequest & GetFunctionRequest & GetFunctionRequest & GetFunctionRequest & GetFunctionRequest & GetFunctionRequest & GetFunctionRequest & GetFunctionRequest & GetFunctionRequest & GetFunctionRequest & GetFunctionRequest & GetFunctionRequest & GetFunctionRequest)[K]
    }>): Request<GetFunctionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFunction(
          this.ops["GetFunction"].applicator.apply(partialParams)
        );
    }

    invokeGetFunctionCodeSigningConfig(partialParams: ToOptional<{
      [K in keyof GetFunctionCodeSigningConfigRequest & keyof GetFunctionCodeSigningConfigRequest & keyof GetFunctionCodeSigningConfigRequest & keyof GetFunctionCodeSigningConfigRequest & keyof GetFunctionCodeSigningConfigRequest & keyof GetFunctionCodeSigningConfigRequest & keyof GetFunctionCodeSigningConfigRequest & keyof GetFunctionCodeSigningConfigRequest & keyof GetFunctionCodeSigningConfigRequest & keyof GetFunctionCodeSigningConfigRequest & keyof GetFunctionCodeSigningConfigRequest & keyof GetFunctionCodeSigningConfigRequest & keyof GetFunctionCodeSigningConfigRequest & keyof GetFunctionCodeSigningConfigRequest & keyof GetFunctionCodeSigningConfigRequest & keyof GetFunctionCodeSigningConfigRequest & keyof GetFunctionCodeSigningConfigRequest & keyof GetFunctionCodeSigningConfigRequest & keyof GetFunctionCodeSigningConfigRequest & keyof GetFunctionCodeSigningConfigRequest]: (GetFunctionCodeSigningConfigRequest & GetFunctionCodeSigningConfigRequest & GetFunctionCodeSigningConfigRequest & GetFunctionCodeSigningConfigRequest & GetFunctionCodeSigningConfigRequest & GetFunctionCodeSigningConfigRequest & GetFunctionCodeSigningConfigRequest & GetFunctionCodeSigningConfigRequest & GetFunctionCodeSigningConfigRequest & GetFunctionCodeSigningConfigRequest & GetFunctionCodeSigningConfigRequest & GetFunctionCodeSigningConfigRequest & GetFunctionCodeSigningConfigRequest & GetFunctionCodeSigningConfigRequest & GetFunctionCodeSigningConfigRequest & GetFunctionCodeSigningConfigRequest & GetFunctionCodeSigningConfigRequest & GetFunctionCodeSigningConfigRequest & GetFunctionCodeSigningConfigRequest & GetFunctionCodeSigningConfigRequest)[K]
    }>): Request<GetFunctionCodeSigningConfigResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFunctionCodeSigningConfig(
          this.ops["GetFunctionCodeSigningConfig"].applicator.apply(partialParams)
        );
    }

    invokeGetFunctionConcurrency(partialParams: ToOptional<{
      [K in keyof GetFunctionConcurrencyRequest & keyof GetFunctionConcurrencyRequest & keyof GetFunctionConcurrencyRequest & keyof GetFunctionConcurrencyRequest & keyof GetFunctionConcurrencyRequest & keyof GetFunctionConcurrencyRequest & keyof GetFunctionConcurrencyRequest & keyof GetFunctionConcurrencyRequest & keyof GetFunctionConcurrencyRequest & keyof GetFunctionConcurrencyRequest & keyof GetFunctionConcurrencyRequest & keyof GetFunctionConcurrencyRequest & keyof GetFunctionConcurrencyRequest & keyof GetFunctionConcurrencyRequest & keyof GetFunctionConcurrencyRequest & keyof GetFunctionConcurrencyRequest & keyof GetFunctionConcurrencyRequest & keyof GetFunctionConcurrencyRequest & keyof GetFunctionConcurrencyRequest & keyof GetFunctionConcurrencyRequest]: (GetFunctionConcurrencyRequest & GetFunctionConcurrencyRequest & GetFunctionConcurrencyRequest & GetFunctionConcurrencyRequest & GetFunctionConcurrencyRequest & GetFunctionConcurrencyRequest & GetFunctionConcurrencyRequest & GetFunctionConcurrencyRequest & GetFunctionConcurrencyRequest & GetFunctionConcurrencyRequest & GetFunctionConcurrencyRequest & GetFunctionConcurrencyRequest & GetFunctionConcurrencyRequest & GetFunctionConcurrencyRequest & GetFunctionConcurrencyRequest & GetFunctionConcurrencyRequest & GetFunctionConcurrencyRequest & GetFunctionConcurrencyRequest & GetFunctionConcurrencyRequest & GetFunctionConcurrencyRequest)[K]
    }>): Request<GetFunctionConcurrencyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFunctionConcurrency(
          this.ops["GetFunctionConcurrency"].applicator.apply(partialParams)
        );
    }

    invokeGetFunctionConfiguration(partialParams: ToOptional<{
      [K in keyof GetFunctionConfigurationRequest & keyof GetFunctionConfigurationRequest & keyof GetFunctionConfigurationRequest & keyof GetFunctionConfigurationRequest & keyof GetFunctionConfigurationRequest & keyof GetFunctionConfigurationRequest & keyof GetFunctionConfigurationRequest & keyof GetFunctionConfigurationRequest & keyof GetFunctionConfigurationRequest & keyof GetFunctionConfigurationRequest & keyof GetFunctionConfigurationRequest & keyof GetFunctionConfigurationRequest & keyof GetFunctionConfigurationRequest & keyof GetFunctionConfigurationRequest & keyof GetFunctionConfigurationRequest & keyof GetFunctionConfigurationRequest & keyof GetFunctionConfigurationRequest & keyof GetFunctionConfigurationRequest & keyof GetFunctionConfigurationRequest & keyof GetFunctionConfigurationRequest]: (GetFunctionConfigurationRequest & GetFunctionConfigurationRequest & GetFunctionConfigurationRequest & GetFunctionConfigurationRequest & GetFunctionConfigurationRequest & GetFunctionConfigurationRequest & GetFunctionConfigurationRequest & GetFunctionConfigurationRequest & GetFunctionConfigurationRequest & GetFunctionConfigurationRequest & GetFunctionConfigurationRequest & GetFunctionConfigurationRequest & GetFunctionConfigurationRequest & GetFunctionConfigurationRequest & GetFunctionConfigurationRequest & GetFunctionConfigurationRequest & GetFunctionConfigurationRequest & GetFunctionConfigurationRequest & GetFunctionConfigurationRequest & GetFunctionConfigurationRequest)[K]
    }>): Request<FunctionConfiguration, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFunctionConfiguration(
          this.ops["GetFunctionConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetFunctionEventInvokeConfig(partialParams: ToOptional<{
      [K in keyof GetFunctionEventInvokeConfigRequest & keyof GetFunctionEventInvokeConfigRequest & keyof GetFunctionEventInvokeConfigRequest & keyof GetFunctionEventInvokeConfigRequest & keyof GetFunctionEventInvokeConfigRequest & keyof GetFunctionEventInvokeConfigRequest & keyof GetFunctionEventInvokeConfigRequest & keyof GetFunctionEventInvokeConfigRequest & keyof GetFunctionEventInvokeConfigRequest & keyof GetFunctionEventInvokeConfigRequest & keyof GetFunctionEventInvokeConfigRequest & keyof GetFunctionEventInvokeConfigRequest & keyof GetFunctionEventInvokeConfigRequest & keyof GetFunctionEventInvokeConfigRequest & keyof GetFunctionEventInvokeConfigRequest & keyof GetFunctionEventInvokeConfigRequest & keyof GetFunctionEventInvokeConfigRequest & keyof GetFunctionEventInvokeConfigRequest & keyof GetFunctionEventInvokeConfigRequest & keyof GetFunctionEventInvokeConfigRequest]: (GetFunctionEventInvokeConfigRequest & GetFunctionEventInvokeConfigRequest & GetFunctionEventInvokeConfigRequest & GetFunctionEventInvokeConfigRequest & GetFunctionEventInvokeConfigRequest & GetFunctionEventInvokeConfigRequest & GetFunctionEventInvokeConfigRequest & GetFunctionEventInvokeConfigRequest & GetFunctionEventInvokeConfigRequest & GetFunctionEventInvokeConfigRequest & GetFunctionEventInvokeConfigRequest & GetFunctionEventInvokeConfigRequest & GetFunctionEventInvokeConfigRequest & GetFunctionEventInvokeConfigRequest & GetFunctionEventInvokeConfigRequest & GetFunctionEventInvokeConfigRequest & GetFunctionEventInvokeConfigRequest & GetFunctionEventInvokeConfigRequest & GetFunctionEventInvokeConfigRequest & GetFunctionEventInvokeConfigRequest)[K]
    }>): Request<FunctionEventInvokeConfig, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFunctionEventInvokeConfig(
          this.ops["GetFunctionEventInvokeConfig"].applicator.apply(partialParams)
        );
    }

    invokeGetLayerVersion(partialParams: ToOptional<{
      [K in keyof GetLayerVersionRequest & keyof GetLayerVersionRequest & keyof GetLayerVersionRequest & keyof GetLayerVersionRequest & keyof GetLayerVersionRequest & keyof GetLayerVersionRequest & keyof GetLayerVersionRequest & keyof GetLayerVersionRequest & keyof GetLayerVersionRequest & keyof GetLayerVersionRequest & keyof GetLayerVersionRequest & keyof GetLayerVersionRequest & keyof GetLayerVersionRequest & keyof GetLayerVersionRequest & keyof GetLayerVersionRequest & keyof GetLayerVersionRequest & keyof GetLayerVersionRequest & keyof GetLayerVersionRequest & keyof GetLayerVersionRequest & keyof GetLayerVersionRequest]: (GetLayerVersionRequest & GetLayerVersionRequest & GetLayerVersionRequest & GetLayerVersionRequest & GetLayerVersionRequest & GetLayerVersionRequest & GetLayerVersionRequest & GetLayerVersionRequest & GetLayerVersionRequest & GetLayerVersionRequest & GetLayerVersionRequest & GetLayerVersionRequest & GetLayerVersionRequest & GetLayerVersionRequest & GetLayerVersionRequest & GetLayerVersionRequest & GetLayerVersionRequest & GetLayerVersionRequest & GetLayerVersionRequest & GetLayerVersionRequest)[K]
    }>): Request<GetLayerVersionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getLayerVersion(
          this.ops["GetLayerVersion"].applicator.apply(partialParams)
        );
    }

    invokeGetLayerVersionByArn(partialParams: ToOptional<{
      [K in keyof GetLayerVersionByArnRequest & keyof GetLayerVersionByArnRequest & keyof GetLayerVersionByArnRequest & keyof GetLayerVersionByArnRequest & keyof GetLayerVersionByArnRequest & keyof GetLayerVersionByArnRequest & keyof GetLayerVersionByArnRequest & keyof GetLayerVersionByArnRequest & keyof GetLayerVersionByArnRequest & keyof GetLayerVersionByArnRequest & keyof GetLayerVersionByArnRequest & keyof GetLayerVersionByArnRequest & keyof GetLayerVersionByArnRequest & keyof GetLayerVersionByArnRequest & keyof GetLayerVersionByArnRequest & keyof GetLayerVersionByArnRequest & keyof GetLayerVersionByArnRequest & keyof GetLayerVersionByArnRequest & keyof GetLayerVersionByArnRequest & keyof GetLayerVersionByArnRequest]: (GetLayerVersionByArnRequest & GetLayerVersionByArnRequest & GetLayerVersionByArnRequest & GetLayerVersionByArnRequest & GetLayerVersionByArnRequest & GetLayerVersionByArnRequest & GetLayerVersionByArnRequest & GetLayerVersionByArnRequest & GetLayerVersionByArnRequest & GetLayerVersionByArnRequest & GetLayerVersionByArnRequest & GetLayerVersionByArnRequest & GetLayerVersionByArnRequest & GetLayerVersionByArnRequest & GetLayerVersionByArnRequest & GetLayerVersionByArnRequest & GetLayerVersionByArnRequest & GetLayerVersionByArnRequest & GetLayerVersionByArnRequest & GetLayerVersionByArnRequest)[K]
    }>): Request<GetLayerVersionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getLayerVersionByArn(
          this.ops["GetLayerVersionByArn"].applicator.apply(partialParams)
        );
    }

    invokeGetLayerVersionPolicy(partialParams: ToOptional<{
      [K in keyof GetLayerVersionPolicyRequest & keyof GetLayerVersionPolicyRequest & keyof GetLayerVersionPolicyRequest & keyof GetLayerVersionPolicyRequest & keyof GetLayerVersionPolicyRequest & keyof GetLayerVersionPolicyRequest & keyof GetLayerVersionPolicyRequest & keyof GetLayerVersionPolicyRequest & keyof GetLayerVersionPolicyRequest & keyof GetLayerVersionPolicyRequest & keyof GetLayerVersionPolicyRequest & keyof GetLayerVersionPolicyRequest & keyof GetLayerVersionPolicyRequest & keyof GetLayerVersionPolicyRequest & keyof GetLayerVersionPolicyRequest & keyof GetLayerVersionPolicyRequest & keyof GetLayerVersionPolicyRequest & keyof GetLayerVersionPolicyRequest & keyof GetLayerVersionPolicyRequest & keyof GetLayerVersionPolicyRequest]: (GetLayerVersionPolicyRequest & GetLayerVersionPolicyRequest & GetLayerVersionPolicyRequest & GetLayerVersionPolicyRequest & GetLayerVersionPolicyRequest & GetLayerVersionPolicyRequest & GetLayerVersionPolicyRequest & GetLayerVersionPolicyRequest & GetLayerVersionPolicyRequest & GetLayerVersionPolicyRequest & GetLayerVersionPolicyRequest & GetLayerVersionPolicyRequest & GetLayerVersionPolicyRequest & GetLayerVersionPolicyRequest & GetLayerVersionPolicyRequest & GetLayerVersionPolicyRequest & GetLayerVersionPolicyRequest & GetLayerVersionPolicyRequest & GetLayerVersionPolicyRequest & GetLayerVersionPolicyRequest)[K]
    }>): Request<GetLayerVersionPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getLayerVersionPolicy(
          this.ops["GetLayerVersionPolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetPolicy(partialParams: ToOptional<{
      [K in keyof GetPolicyRequest & keyof GetPolicyRequest & keyof GetPolicyRequest & keyof GetPolicyRequest & keyof GetPolicyRequest & keyof GetPolicyRequest & keyof GetPolicyRequest & keyof GetPolicyRequest & keyof GetPolicyRequest & keyof GetPolicyRequest & keyof GetPolicyRequest & keyof GetPolicyRequest & keyof GetPolicyRequest & keyof GetPolicyRequest & keyof GetPolicyRequest & keyof GetPolicyRequest & keyof GetPolicyRequest & keyof GetPolicyRequest & keyof GetPolicyRequest & keyof GetPolicyRequest]: (GetPolicyRequest & GetPolicyRequest & GetPolicyRequest & GetPolicyRequest & GetPolicyRequest & GetPolicyRequest & GetPolicyRequest & GetPolicyRequest & GetPolicyRequest & GetPolicyRequest & GetPolicyRequest & GetPolicyRequest & GetPolicyRequest & GetPolicyRequest & GetPolicyRequest & GetPolicyRequest & GetPolicyRequest & GetPolicyRequest & GetPolicyRequest & GetPolicyRequest)[K]
    }>): Request<GetPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPolicy(
          this.ops["GetPolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetProvisionedConcurrencyConfig(partialParams: ToOptional<{
      [K in keyof GetProvisionedConcurrencyConfigRequest & keyof GetProvisionedConcurrencyConfigRequest & keyof GetProvisionedConcurrencyConfigRequest & keyof GetProvisionedConcurrencyConfigRequest & keyof GetProvisionedConcurrencyConfigRequest & keyof GetProvisionedConcurrencyConfigRequest & keyof GetProvisionedConcurrencyConfigRequest & keyof GetProvisionedConcurrencyConfigRequest & keyof GetProvisionedConcurrencyConfigRequest & keyof GetProvisionedConcurrencyConfigRequest & keyof GetProvisionedConcurrencyConfigRequest & keyof GetProvisionedConcurrencyConfigRequest & keyof GetProvisionedConcurrencyConfigRequest & keyof GetProvisionedConcurrencyConfigRequest & keyof GetProvisionedConcurrencyConfigRequest & keyof GetProvisionedConcurrencyConfigRequest & keyof GetProvisionedConcurrencyConfigRequest & keyof GetProvisionedConcurrencyConfigRequest & keyof GetProvisionedConcurrencyConfigRequest & keyof GetProvisionedConcurrencyConfigRequest]: (GetProvisionedConcurrencyConfigRequest & GetProvisionedConcurrencyConfigRequest & GetProvisionedConcurrencyConfigRequest & GetProvisionedConcurrencyConfigRequest & GetProvisionedConcurrencyConfigRequest & GetProvisionedConcurrencyConfigRequest & GetProvisionedConcurrencyConfigRequest & GetProvisionedConcurrencyConfigRequest & GetProvisionedConcurrencyConfigRequest & GetProvisionedConcurrencyConfigRequest & GetProvisionedConcurrencyConfigRequest & GetProvisionedConcurrencyConfigRequest & GetProvisionedConcurrencyConfigRequest & GetProvisionedConcurrencyConfigRequest & GetProvisionedConcurrencyConfigRequest & GetProvisionedConcurrencyConfigRequest & GetProvisionedConcurrencyConfigRequest & GetProvisionedConcurrencyConfigRequest & GetProvisionedConcurrencyConfigRequest & GetProvisionedConcurrencyConfigRequest)[K]
    }>): Request<GetProvisionedConcurrencyConfigResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getProvisionedConcurrencyConfig(
          this.ops["GetProvisionedConcurrencyConfig"].applicator.apply(partialParams)
        );
    }

    invokeInvoke(partialParams: ToOptional<{
      [K in keyof InvocationRequest & keyof InvocationRequest & keyof InvocationRequest & keyof InvocationRequest & keyof InvocationRequest & keyof InvocationRequest & keyof InvocationRequest & keyof InvocationRequest & keyof InvocationRequest & keyof InvocationRequest & keyof InvocationRequest & keyof InvocationRequest & keyof InvocationRequest & keyof InvocationRequest & keyof InvocationRequest & keyof InvocationRequest & keyof InvocationRequest & keyof InvocationRequest & keyof InvocationRequest & keyof InvocationRequest]: (InvocationRequest & InvocationRequest & InvocationRequest & InvocationRequest & InvocationRequest & InvocationRequest & InvocationRequest & InvocationRequest & InvocationRequest & InvocationRequest & InvocationRequest & InvocationRequest & InvocationRequest & InvocationRequest & InvocationRequest & InvocationRequest & InvocationRequest & InvocationRequest & InvocationRequest & InvocationRequest)[K]
    }>): Request<InvocationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.invoke(
          this.ops["Invoke"].applicator.apply(partialParams)
        );
    }

    invokeInvokeAsync(partialParams: ToOptional<{
      [K in keyof InvokeAsyncRequest & keyof InvokeAsyncRequest & keyof InvokeAsyncRequest & keyof InvokeAsyncRequest & keyof InvokeAsyncRequest & keyof InvokeAsyncRequest & keyof InvokeAsyncRequest & keyof InvokeAsyncRequest & keyof InvokeAsyncRequest & keyof InvokeAsyncRequest & keyof InvokeAsyncRequest & keyof InvokeAsyncRequest & keyof InvokeAsyncRequest & keyof InvokeAsyncRequest & keyof InvokeAsyncRequest & keyof InvokeAsyncRequest & keyof InvokeAsyncRequest & keyof InvokeAsyncRequest & keyof InvokeAsyncRequest & keyof InvokeAsyncRequest]: (InvokeAsyncRequest & InvokeAsyncRequest & InvokeAsyncRequest & InvokeAsyncRequest & InvokeAsyncRequest & InvokeAsyncRequest & InvokeAsyncRequest & InvokeAsyncRequest & InvokeAsyncRequest & InvokeAsyncRequest & InvokeAsyncRequest & InvokeAsyncRequest & InvokeAsyncRequest & InvokeAsyncRequest & InvokeAsyncRequest & InvokeAsyncRequest & InvokeAsyncRequest & InvokeAsyncRequest & InvokeAsyncRequest & InvokeAsyncRequest)[K]
    }>): Request<InvokeAsyncResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.invokeAsync(
          this.ops["InvokeAsync"].applicator.apply(partialParams)
        );
    }

    invokeListAliases(partialParams: ToOptional<{
      [K in keyof ListAliasesRequest & keyof ListAliasesRequest & keyof ListAliasesRequest & keyof ListAliasesRequest & keyof ListAliasesRequest & keyof ListAliasesRequest & keyof ListAliasesRequest & keyof ListAliasesRequest & keyof ListAliasesRequest & keyof ListAliasesRequest & keyof ListAliasesRequest & keyof ListAliasesRequest & keyof ListAliasesRequest & keyof ListAliasesRequest & keyof ListAliasesRequest & keyof ListAliasesRequest & keyof ListAliasesRequest & keyof ListAliasesRequest & keyof ListAliasesRequest & keyof ListAliasesRequest]: (ListAliasesRequest & ListAliasesRequest & ListAliasesRequest & ListAliasesRequest & ListAliasesRequest & ListAliasesRequest & ListAliasesRequest & ListAliasesRequest & ListAliasesRequest & ListAliasesRequest & ListAliasesRequest & ListAliasesRequest & ListAliasesRequest & ListAliasesRequest & ListAliasesRequest & ListAliasesRequest & ListAliasesRequest & ListAliasesRequest & ListAliasesRequest & ListAliasesRequest)[K]
    }>): Request<ListAliasesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAliases(
          this.ops["ListAliases"].applicator.apply(partialParams)
        );
    }

    invokeListFunctionEventInvokeConfigs(partialParams: ToOptional<{
      [K in keyof ListFunctionEventInvokeConfigsRequest & keyof ListFunctionEventInvokeConfigsRequest & keyof ListFunctionEventInvokeConfigsRequest & keyof ListFunctionEventInvokeConfigsRequest & keyof ListFunctionEventInvokeConfigsRequest & keyof ListFunctionEventInvokeConfigsRequest & keyof ListFunctionEventInvokeConfigsRequest & keyof ListFunctionEventInvokeConfigsRequest & keyof ListFunctionEventInvokeConfigsRequest & keyof ListFunctionEventInvokeConfigsRequest & keyof ListFunctionEventInvokeConfigsRequest & keyof ListFunctionEventInvokeConfigsRequest & keyof ListFunctionEventInvokeConfigsRequest & keyof ListFunctionEventInvokeConfigsRequest & keyof ListFunctionEventInvokeConfigsRequest & keyof ListFunctionEventInvokeConfigsRequest & keyof ListFunctionEventInvokeConfigsRequest & keyof ListFunctionEventInvokeConfigsRequest & keyof ListFunctionEventInvokeConfigsRequest & keyof ListFunctionEventInvokeConfigsRequest]: (ListFunctionEventInvokeConfigsRequest & ListFunctionEventInvokeConfigsRequest & ListFunctionEventInvokeConfigsRequest & ListFunctionEventInvokeConfigsRequest & ListFunctionEventInvokeConfigsRequest & ListFunctionEventInvokeConfigsRequest & ListFunctionEventInvokeConfigsRequest & ListFunctionEventInvokeConfigsRequest & ListFunctionEventInvokeConfigsRequest & ListFunctionEventInvokeConfigsRequest & ListFunctionEventInvokeConfigsRequest & ListFunctionEventInvokeConfigsRequest & ListFunctionEventInvokeConfigsRequest & ListFunctionEventInvokeConfigsRequest & ListFunctionEventInvokeConfigsRequest & ListFunctionEventInvokeConfigsRequest & ListFunctionEventInvokeConfigsRequest & ListFunctionEventInvokeConfigsRequest & ListFunctionEventInvokeConfigsRequest & ListFunctionEventInvokeConfigsRequest)[K]
    }>): Request<ListFunctionEventInvokeConfigsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listFunctionEventInvokeConfigs(
          this.ops["ListFunctionEventInvokeConfigs"].applicator.apply(partialParams)
        );
    }

    invokeListFunctionsByCodeSigningConfig(partialParams: ToOptional<{
      [K in keyof ListFunctionsByCodeSigningConfigRequest & keyof Omit<ListFunctionsByCodeSigningConfigRequest, "CodeSigningConfigArn"> & keyof ListFunctionsByCodeSigningConfigRequest & keyof ListFunctionsByCodeSigningConfigRequest & keyof ListFunctionsByCodeSigningConfigRequest & keyof ListFunctionsByCodeSigningConfigRequest & keyof ListFunctionsByCodeSigningConfigRequest & keyof ListFunctionsByCodeSigningConfigRequest & keyof ListFunctionsByCodeSigningConfigRequest & keyof ListFunctionsByCodeSigningConfigRequest & keyof ListFunctionsByCodeSigningConfigRequest & keyof ListFunctionsByCodeSigningConfigRequest & keyof ListFunctionsByCodeSigningConfigRequest & keyof ListFunctionsByCodeSigningConfigRequest & keyof ListFunctionsByCodeSigningConfigRequest & keyof ListFunctionsByCodeSigningConfigRequest & keyof ListFunctionsByCodeSigningConfigRequest & keyof ListFunctionsByCodeSigningConfigRequest & keyof ListFunctionsByCodeSigningConfigRequest & keyof ListFunctionsByCodeSigningConfigRequest]: (ListFunctionsByCodeSigningConfigRequest & Omit<ListFunctionsByCodeSigningConfigRequest, "CodeSigningConfigArn"> & ListFunctionsByCodeSigningConfigRequest & ListFunctionsByCodeSigningConfigRequest & ListFunctionsByCodeSigningConfigRequest & ListFunctionsByCodeSigningConfigRequest & ListFunctionsByCodeSigningConfigRequest & ListFunctionsByCodeSigningConfigRequest & ListFunctionsByCodeSigningConfigRequest & ListFunctionsByCodeSigningConfigRequest & ListFunctionsByCodeSigningConfigRequest & ListFunctionsByCodeSigningConfigRequest & ListFunctionsByCodeSigningConfigRequest & ListFunctionsByCodeSigningConfigRequest & ListFunctionsByCodeSigningConfigRequest & ListFunctionsByCodeSigningConfigRequest & ListFunctionsByCodeSigningConfigRequest & ListFunctionsByCodeSigningConfigRequest & ListFunctionsByCodeSigningConfigRequest & ListFunctionsByCodeSigningConfigRequest)[K]
    }>): Request<ListFunctionsByCodeSigningConfigResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listFunctionsByCodeSigningConfig(
          this.ops["ListFunctionsByCodeSigningConfig"].applicator.apply(partialParams)
        );
    }

    invokeListLayerVersions(partialParams: ToOptional<{
      [K in keyof ListLayerVersionsRequest & keyof ListLayerVersionsRequest & keyof ListLayerVersionsRequest & keyof ListLayerVersionsRequest & keyof ListLayerVersionsRequest & keyof ListLayerVersionsRequest & keyof ListLayerVersionsRequest & keyof ListLayerVersionsRequest & keyof ListLayerVersionsRequest & keyof ListLayerVersionsRequest & keyof ListLayerVersionsRequest & keyof ListLayerVersionsRequest & keyof ListLayerVersionsRequest & keyof ListLayerVersionsRequest & keyof ListLayerVersionsRequest & keyof ListLayerVersionsRequest & keyof ListLayerVersionsRequest & keyof ListLayerVersionsRequest & keyof ListLayerVersionsRequest & keyof ListLayerVersionsRequest]: (ListLayerVersionsRequest & ListLayerVersionsRequest & ListLayerVersionsRequest & ListLayerVersionsRequest & ListLayerVersionsRequest & ListLayerVersionsRequest & ListLayerVersionsRequest & ListLayerVersionsRequest & ListLayerVersionsRequest & ListLayerVersionsRequest & ListLayerVersionsRequest & ListLayerVersionsRequest & ListLayerVersionsRequest & ListLayerVersionsRequest & ListLayerVersionsRequest & ListLayerVersionsRequest & ListLayerVersionsRequest & ListLayerVersionsRequest & ListLayerVersionsRequest & ListLayerVersionsRequest)[K]
    }>): Request<ListLayerVersionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listLayerVersions(
          this.ops["ListLayerVersions"].applicator.apply(partialParams)
        );
    }

    invokeListProvisionedConcurrencyConfigs(partialParams: ToOptional<{
      [K in keyof ListProvisionedConcurrencyConfigsRequest & keyof ListProvisionedConcurrencyConfigsRequest & keyof ListProvisionedConcurrencyConfigsRequest & keyof ListProvisionedConcurrencyConfigsRequest & keyof ListProvisionedConcurrencyConfigsRequest & keyof ListProvisionedConcurrencyConfigsRequest & keyof ListProvisionedConcurrencyConfigsRequest & keyof ListProvisionedConcurrencyConfigsRequest & keyof ListProvisionedConcurrencyConfigsRequest & keyof ListProvisionedConcurrencyConfigsRequest & keyof ListProvisionedConcurrencyConfigsRequest & keyof ListProvisionedConcurrencyConfigsRequest & keyof ListProvisionedConcurrencyConfigsRequest & keyof ListProvisionedConcurrencyConfigsRequest & keyof ListProvisionedConcurrencyConfigsRequest & keyof ListProvisionedConcurrencyConfigsRequest & keyof ListProvisionedConcurrencyConfigsRequest & keyof ListProvisionedConcurrencyConfigsRequest & keyof ListProvisionedConcurrencyConfigsRequest & keyof ListProvisionedConcurrencyConfigsRequest]: (ListProvisionedConcurrencyConfigsRequest & ListProvisionedConcurrencyConfigsRequest & ListProvisionedConcurrencyConfigsRequest & ListProvisionedConcurrencyConfigsRequest & ListProvisionedConcurrencyConfigsRequest & ListProvisionedConcurrencyConfigsRequest & ListProvisionedConcurrencyConfigsRequest & ListProvisionedConcurrencyConfigsRequest & ListProvisionedConcurrencyConfigsRequest & ListProvisionedConcurrencyConfigsRequest & ListProvisionedConcurrencyConfigsRequest & ListProvisionedConcurrencyConfigsRequest & ListProvisionedConcurrencyConfigsRequest & ListProvisionedConcurrencyConfigsRequest & ListProvisionedConcurrencyConfigsRequest & ListProvisionedConcurrencyConfigsRequest & ListProvisionedConcurrencyConfigsRequest & ListProvisionedConcurrencyConfigsRequest & ListProvisionedConcurrencyConfigsRequest & ListProvisionedConcurrencyConfigsRequest)[K]
    }>): Request<ListProvisionedConcurrencyConfigsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listProvisionedConcurrencyConfigs(
          this.ops["ListProvisionedConcurrencyConfigs"].applicator.apply(partialParams)
        );
    }

    invokeListTags(partialParams: ToOptional<{
      [K in keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest]: (ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest)[K]
    }>): Request<ListTagsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTags(
          this.ops["ListTags"].applicator.apply(partialParams)
        );
    }

    invokeListVersionsByFunction(partialParams: ToOptional<{
      [K in keyof ListVersionsByFunctionRequest & keyof ListVersionsByFunctionRequest & keyof ListVersionsByFunctionRequest & keyof ListVersionsByFunctionRequest & keyof ListVersionsByFunctionRequest & keyof ListVersionsByFunctionRequest & keyof ListVersionsByFunctionRequest & keyof ListVersionsByFunctionRequest & keyof ListVersionsByFunctionRequest & keyof ListVersionsByFunctionRequest & keyof ListVersionsByFunctionRequest & keyof ListVersionsByFunctionRequest & keyof ListVersionsByFunctionRequest & keyof ListVersionsByFunctionRequest & keyof ListVersionsByFunctionRequest & keyof ListVersionsByFunctionRequest & keyof ListVersionsByFunctionRequest & keyof ListVersionsByFunctionRequest & keyof ListVersionsByFunctionRequest & keyof ListVersionsByFunctionRequest]: (ListVersionsByFunctionRequest & ListVersionsByFunctionRequest & ListVersionsByFunctionRequest & ListVersionsByFunctionRequest & ListVersionsByFunctionRequest & ListVersionsByFunctionRequest & ListVersionsByFunctionRequest & ListVersionsByFunctionRequest & ListVersionsByFunctionRequest & ListVersionsByFunctionRequest & ListVersionsByFunctionRequest & ListVersionsByFunctionRequest & ListVersionsByFunctionRequest & ListVersionsByFunctionRequest & ListVersionsByFunctionRequest & ListVersionsByFunctionRequest & ListVersionsByFunctionRequest & ListVersionsByFunctionRequest & ListVersionsByFunctionRequest & ListVersionsByFunctionRequest)[K]
    }>): Request<ListVersionsByFunctionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listVersionsByFunction(
          this.ops["ListVersionsByFunction"].applicator.apply(partialParams)
        );
    }

    invokePublishLayerVersion(partialParams: ToOptional<{
      [K in keyof PublishLayerVersionRequest & keyof PublishLayerVersionRequest & keyof PublishLayerVersionRequest & keyof PublishLayerVersionRequest & keyof PublishLayerVersionRequest & keyof PublishLayerVersionRequest & keyof PublishLayerVersionRequest & keyof PublishLayerVersionRequest & keyof PublishLayerVersionRequest & keyof PublishLayerVersionRequest & keyof PublishLayerVersionRequest & keyof PublishLayerVersionRequest & keyof PublishLayerVersionRequest & keyof PublishLayerVersionRequest & keyof PublishLayerVersionRequest & keyof PublishLayerVersionRequest & keyof PublishLayerVersionRequest & keyof PublishLayerVersionRequest & keyof PublishLayerVersionRequest & keyof PublishLayerVersionRequest]: (PublishLayerVersionRequest & PublishLayerVersionRequest & PublishLayerVersionRequest & PublishLayerVersionRequest & PublishLayerVersionRequest & PublishLayerVersionRequest & PublishLayerVersionRequest & PublishLayerVersionRequest & PublishLayerVersionRequest & PublishLayerVersionRequest & PublishLayerVersionRequest & PublishLayerVersionRequest & PublishLayerVersionRequest & PublishLayerVersionRequest & PublishLayerVersionRequest & PublishLayerVersionRequest & PublishLayerVersionRequest & PublishLayerVersionRequest & PublishLayerVersionRequest & PublishLayerVersionRequest)[K]
    }>): Request<PublishLayerVersionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.publishLayerVersion(
          this.ops["PublishLayerVersion"].applicator.apply(partialParams)
        );
    }

    invokePublishVersion(partialParams: ToOptional<{
      [K in keyof PublishVersionRequest & keyof PublishVersionRequest & keyof PublishVersionRequest & keyof PublishVersionRequest & keyof PublishVersionRequest & keyof PublishVersionRequest & keyof PublishVersionRequest & keyof PublishVersionRequest & keyof PublishVersionRequest & keyof PublishVersionRequest & keyof PublishVersionRequest & keyof PublishVersionRequest & keyof PublishVersionRequest & keyof PublishVersionRequest & keyof PublishVersionRequest & keyof PublishVersionRequest & keyof PublishVersionRequest & keyof PublishVersionRequest & keyof PublishVersionRequest & keyof PublishVersionRequest]: (PublishVersionRequest & PublishVersionRequest & PublishVersionRequest & PublishVersionRequest & PublishVersionRequest & PublishVersionRequest & PublishVersionRequest & PublishVersionRequest & PublishVersionRequest & PublishVersionRequest & PublishVersionRequest & PublishVersionRequest & PublishVersionRequest & PublishVersionRequest & PublishVersionRequest & PublishVersionRequest & PublishVersionRequest & PublishVersionRequest & PublishVersionRequest & PublishVersionRequest)[K]
    }>): Request<FunctionConfiguration, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.publishVersion(
          this.ops["PublishVersion"].applicator.apply(partialParams)
        );
    }

    invokePutFunctionCodeSigningConfig(partialParams: ToOptional<{
      [K in keyof PutFunctionCodeSigningConfigRequest & keyof Omit<PutFunctionCodeSigningConfigRequest, "CodeSigningConfigArn"> & keyof PutFunctionCodeSigningConfigRequest & keyof PutFunctionCodeSigningConfigRequest & keyof PutFunctionCodeSigningConfigRequest & keyof PutFunctionCodeSigningConfigRequest & keyof PutFunctionCodeSigningConfigRequest & keyof PutFunctionCodeSigningConfigRequest & keyof PutFunctionCodeSigningConfigRequest & keyof PutFunctionCodeSigningConfigRequest & keyof PutFunctionCodeSigningConfigRequest & keyof PutFunctionCodeSigningConfigRequest & keyof PutFunctionCodeSigningConfigRequest & keyof PutFunctionCodeSigningConfigRequest & keyof PutFunctionCodeSigningConfigRequest & keyof PutFunctionCodeSigningConfigRequest & keyof PutFunctionCodeSigningConfigRequest & keyof PutFunctionCodeSigningConfigRequest & keyof PutFunctionCodeSigningConfigRequest & keyof PutFunctionCodeSigningConfigRequest]: (PutFunctionCodeSigningConfigRequest & Omit<PutFunctionCodeSigningConfigRequest, "CodeSigningConfigArn"> & PutFunctionCodeSigningConfigRequest & PutFunctionCodeSigningConfigRequest & PutFunctionCodeSigningConfigRequest & PutFunctionCodeSigningConfigRequest & PutFunctionCodeSigningConfigRequest & PutFunctionCodeSigningConfigRequest & PutFunctionCodeSigningConfigRequest & PutFunctionCodeSigningConfigRequest & PutFunctionCodeSigningConfigRequest & PutFunctionCodeSigningConfigRequest & PutFunctionCodeSigningConfigRequest & PutFunctionCodeSigningConfigRequest & PutFunctionCodeSigningConfigRequest & PutFunctionCodeSigningConfigRequest & PutFunctionCodeSigningConfigRequest & PutFunctionCodeSigningConfigRequest & PutFunctionCodeSigningConfigRequest & PutFunctionCodeSigningConfigRequest)[K]
    }>): Request<PutFunctionCodeSigningConfigResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putFunctionCodeSigningConfig(
          this.ops["PutFunctionCodeSigningConfig"].applicator.apply(partialParams)
        );
    }

    invokePutFunctionConcurrency(partialParams: ToOptional<{
      [K in keyof PutFunctionConcurrencyRequest & keyof PutFunctionConcurrencyRequest & keyof PutFunctionConcurrencyRequest & keyof PutFunctionConcurrencyRequest & keyof PutFunctionConcurrencyRequest & keyof PutFunctionConcurrencyRequest & keyof PutFunctionConcurrencyRequest & keyof PutFunctionConcurrencyRequest & keyof PutFunctionConcurrencyRequest & keyof PutFunctionConcurrencyRequest & keyof PutFunctionConcurrencyRequest & keyof PutFunctionConcurrencyRequest & keyof PutFunctionConcurrencyRequest & keyof PutFunctionConcurrencyRequest & keyof PutFunctionConcurrencyRequest & keyof PutFunctionConcurrencyRequest & keyof PutFunctionConcurrencyRequest & keyof PutFunctionConcurrencyRequest & keyof PutFunctionConcurrencyRequest & keyof PutFunctionConcurrencyRequest]: (PutFunctionConcurrencyRequest & PutFunctionConcurrencyRequest & PutFunctionConcurrencyRequest & PutFunctionConcurrencyRequest & PutFunctionConcurrencyRequest & PutFunctionConcurrencyRequest & PutFunctionConcurrencyRequest & PutFunctionConcurrencyRequest & PutFunctionConcurrencyRequest & PutFunctionConcurrencyRequest & PutFunctionConcurrencyRequest & PutFunctionConcurrencyRequest & PutFunctionConcurrencyRequest & PutFunctionConcurrencyRequest & PutFunctionConcurrencyRequest & PutFunctionConcurrencyRequest & PutFunctionConcurrencyRequest & PutFunctionConcurrencyRequest & PutFunctionConcurrencyRequest & PutFunctionConcurrencyRequest)[K]
    }>): Request<Concurrency, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putFunctionConcurrency(
          this.ops["PutFunctionConcurrency"].applicator.apply(partialParams)
        );
    }

    invokePutFunctionEventInvokeConfig(partialParams: ToOptional<{
      [K in keyof PutFunctionEventInvokeConfigRequest & keyof PutFunctionEventInvokeConfigRequest & keyof PutFunctionEventInvokeConfigRequest & keyof PutFunctionEventInvokeConfigRequest & keyof PutFunctionEventInvokeConfigRequest & keyof PutFunctionEventInvokeConfigRequest & keyof PutFunctionEventInvokeConfigRequest & keyof PutFunctionEventInvokeConfigRequest & keyof PutFunctionEventInvokeConfigRequest & keyof PutFunctionEventInvokeConfigRequest & keyof PutFunctionEventInvokeConfigRequest & keyof PutFunctionEventInvokeConfigRequest & keyof PutFunctionEventInvokeConfigRequest & keyof PutFunctionEventInvokeConfigRequest & keyof PutFunctionEventInvokeConfigRequest & keyof PutFunctionEventInvokeConfigRequest & keyof PutFunctionEventInvokeConfigRequest & keyof PutFunctionEventInvokeConfigRequest & keyof PutFunctionEventInvokeConfigRequest & keyof PutFunctionEventInvokeConfigRequest]: (PutFunctionEventInvokeConfigRequest & PutFunctionEventInvokeConfigRequest & PutFunctionEventInvokeConfigRequest & PutFunctionEventInvokeConfigRequest & PutFunctionEventInvokeConfigRequest & PutFunctionEventInvokeConfigRequest & PutFunctionEventInvokeConfigRequest & PutFunctionEventInvokeConfigRequest & PutFunctionEventInvokeConfigRequest & PutFunctionEventInvokeConfigRequest & PutFunctionEventInvokeConfigRequest & PutFunctionEventInvokeConfigRequest & PutFunctionEventInvokeConfigRequest & PutFunctionEventInvokeConfigRequest & PutFunctionEventInvokeConfigRequest & PutFunctionEventInvokeConfigRequest & PutFunctionEventInvokeConfigRequest & PutFunctionEventInvokeConfigRequest & PutFunctionEventInvokeConfigRequest & PutFunctionEventInvokeConfigRequest)[K]
    }>): Request<FunctionEventInvokeConfig, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putFunctionEventInvokeConfig(
          this.ops["PutFunctionEventInvokeConfig"].applicator.apply(partialParams)
        );
    }

    invokePutProvisionedConcurrencyConfig(partialParams: ToOptional<{
      [K in keyof PutProvisionedConcurrencyConfigRequest & keyof PutProvisionedConcurrencyConfigRequest & keyof PutProvisionedConcurrencyConfigRequest & keyof PutProvisionedConcurrencyConfigRequest & keyof PutProvisionedConcurrencyConfigRequest & keyof PutProvisionedConcurrencyConfigRequest & keyof PutProvisionedConcurrencyConfigRequest & keyof PutProvisionedConcurrencyConfigRequest & keyof PutProvisionedConcurrencyConfigRequest & keyof PutProvisionedConcurrencyConfigRequest & keyof PutProvisionedConcurrencyConfigRequest & keyof PutProvisionedConcurrencyConfigRequest & keyof PutProvisionedConcurrencyConfigRequest & keyof PutProvisionedConcurrencyConfigRequest & keyof PutProvisionedConcurrencyConfigRequest & keyof PutProvisionedConcurrencyConfigRequest & keyof PutProvisionedConcurrencyConfigRequest & keyof PutProvisionedConcurrencyConfigRequest & keyof PutProvisionedConcurrencyConfigRequest & keyof PutProvisionedConcurrencyConfigRequest]: (PutProvisionedConcurrencyConfigRequest & PutProvisionedConcurrencyConfigRequest & PutProvisionedConcurrencyConfigRequest & PutProvisionedConcurrencyConfigRequest & PutProvisionedConcurrencyConfigRequest & PutProvisionedConcurrencyConfigRequest & PutProvisionedConcurrencyConfigRequest & PutProvisionedConcurrencyConfigRequest & PutProvisionedConcurrencyConfigRequest & PutProvisionedConcurrencyConfigRequest & PutProvisionedConcurrencyConfigRequest & PutProvisionedConcurrencyConfigRequest & PutProvisionedConcurrencyConfigRequest & PutProvisionedConcurrencyConfigRequest & PutProvisionedConcurrencyConfigRequest & PutProvisionedConcurrencyConfigRequest & PutProvisionedConcurrencyConfigRequest & PutProvisionedConcurrencyConfigRequest & PutProvisionedConcurrencyConfigRequest & PutProvisionedConcurrencyConfigRequest)[K]
    }>): Request<PutProvisionedConcurrencyConfigResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putProvisionedConcurrencyConfig(
          this.ops["PutProvisionedConcurrencyConfig"].applicator.apply(partialParams)
        );
    }

    invokeRemoveLayerVersionPermission(partialParams: ToOptional<{
      [K in keyof RemoveLayerVersionPermissionRequest & keyof RemoveLayerVersionPermissionRequest & keyof RemoveLayerVersionPermissionRequest & keyof RemoveLayerVersionPermissionRequest & keyof RemoveLayerVersionPermissionRequest & keyof RemoveLayerVersionPermissionRequest & keyof RemoveLayerVersionPermissionRequest & keyof RemoveLayerVersionPermissionRequest & keyof RemoveLayerVersionPermissionRequest & keyof RemoveLayerVersionPermissionRequest & keyof RemoveLayerVersionPermissionRequest & keyof RemoveLayerVersionPermissionRequest & keyof RemoveLayerVersionPermissionRequest & keyof RemoveLayerVersionPermissionRequest & keyof RemoveLayerVersionPermissionRequest & keyof RemoveLayerVersionPermissionRequest & keyof RemoveLayerVersionPermissionRequest & keyof RemoveLayerVersionPermissionRequest & keyof RemoveLayerVersionPermissionRequest & keyof RemoveLayerVersionPermissionRequest]: (RemoveLayerVersionPermissionRequest & RemoveLayerVersionPermissionRequest & RemoveLayerVersionPermissionRequest & RemoveLayerVersionPermissionRequest & RemoveLayerVersionPermissionRequest & RemoveLayerVersionPermissionRequest & RemoveLayerVersionPermissionRequest & RemoveLayerVersionPermissionRequest & RemoveLayerVersionPermissionRequest & RemoveLayerVersionPermissionRequest & RemoveLayerVersionPermissionRequest & RemoveLayerVersionPermissionRequest & RemoveLayerVersionPermissionRequest & RemoveLayerVersionPermissionRequest & RemoveLayerVersionPermissionRequest & RemoveLayerVersionPermissionRequest & RemoveLayerVersionPermissionRequest & RemoveLayerVersionPermissionRequest & RemoveLayerVersionPermissionRequest & RemoveLayerVersionPermissionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeLayerVersionPermission(
          this.ops["RemoveLayerVersionPermission"].applicator.apply(partialParams)
        );
    }

    invokeRemovePermission(partialParams: ToOptional<{
      [K in keyof RemovePermissionRequest & keyof RemovePermissionRequest & keyof RemovePermissionRequest & keyof RemovePermissionRequest & keyof RemovePermissionRequest & keyof RemovePermissionRequest & keyof RemovePermissionRequest & keyof RemovePermissionRequest & keyof RemovePermissionRequest & keyof RemovePermissionRequest & keyof RemovePermissionRequest & keyof RemovePermissionRequest & keyof RemovePermissionRequest & keyof RemovePermissionRequest & keyof RemovePermissionRequest & keyof RemovePermissionRequest & keyof RemovePermissionRequest & keyof RemovePermissionRequest & keyof RemovePermissionRequest & keyof RemovePermissionRequest]: (RemovePermissionRequest & RemovePermissionRequest & RemovePermissionRequest & RemovePermissionRequest & RemovePermissionRequest & RemovePermissionRequest & RemovePermissionRequest & RemovePermissionRequest & RemovePermissionRequest & RemovePermissionRequest & RemovePermissionRequest & RemovePermissionRequest & RemovePermissionRequest & RemovePermissionRequest & RemovePermissionRequest & RemovePermissionRequest & RemovePermissionRequest & RemovePermissionRequest & RemovePermissionRequest & RemovePermissionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removePermission(
          this.ops["RemovePermission"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAlias(partialParams: ToOptional<{
      [K in keyof UpdateAliasRequest & keyof UpdateAliasRequest & keyof UpdateAliasRequest & keyof UpdateAliasRequest & keyof UpdateAliasRequest & keyof UpdateAliasRequest & keyof UpdateAliasRequest & keyof UpdateAliasRequest & keyof Omit<UpdateAliasRequest, "Name"> & keyof UpdateAliasRequest & keyof UpdateAliasRequest & keyof UpdateAliasRequest & keyof UpdateAliasRequest & keyof UpdateAliasRequest & keyof UpdateAliasRequest & keyof UpdateAliasRequest & keyof UpdateAliasRequest & keyof UpdateAliasRequest & keyof UpdateAliasRequest & keyof UpdateAliasRequest]: (UpdateAliasRequest & UpdateAliasRequest & UpdateAliasRequest & UpdateAliasRequest & UpdateAliasRequest & UpdateAliasRequest & UpdateAliasRequest & UpdateAliasRequest & Omit<UpdateAliasRequest, "Name"> & UpdateAliasRequest & UpdateAliasRequest & UpdateAliasRequest & UpdateAliasRequest & UpdateAliasRequest & UpdateAliasRequest & UpdateAliasRequest & UpdateAliasRequest & UpdateAliasRequest & UpdateAliasRequest & UpdateAliasRequest)[K]
    }>): Request<AliasConfiguration, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAlias(
          this.ops["UpdateAlias"].applicator.apply(partialParams)
        );
    }

    invokeUpdateCodeSigningConfig(partialParams: ToOptional<{
      [K in keyof UpdateCodeSigningConfigRequest & keyof Omit<UpdateCodeSigningConfigRequest, "CodeSigningConfigArn"> & keyof UpdateCodeSigningConfigRequest & keyof UpdateCodeSigningConfigRequest & keyof UpdateCodeSigningConfigRequest & keyof UpdateCodeSigningConfigRequest & keyof UpdateCodeSigningConfigRequest & keyof UpdateCodeSigningConfigRequest & keyof UpdateCodeSigningConfigRequest & keyof UpdateCodeSigningConfigRequest & keyof UpdateCodeSigningConfigRequest & keyof UpdateCodeSigningConfigRequest & keyof UpdateCodeSigningConfigRequest & keyof UpdateCodeSigningConfigRequest & keyof UpdateCodeSigningConfigRequest & keyof UpdateCodeSigningConfigRequest & keyof UpdateCodeSigningConfigRequest & keyof UpdateCodeSigningConfigRequest & keyof UpdateCodeSigningConfigRequest & keyof UpdateCodeSigningConfigRequest]: (UpdateCodeSigningConfigRequest & Omit<UpdateCodeSigningConfigRequest, "CodeSigningConfigArn"> & UpdateCodeSigningConfigRequest & UpdateCodeSigningConfigRequest & UpdateCodeSigningConfigRequest & UpdateCodeSigningConfigRequest & UpdateCodeSigningConfigRequest & UpdateCodeSigningConfigRequest & UpdateCodeSigningConfigRequest & UpdateCodeSigningConfigRequest & UpdateCodeSigningConfigRequest & UpdateCodeSigningConfigRequest & UpdateCodeSigningConfigRequest & UpdateCodeSigningConfigRequest & UpdateCodeSigningConfigRequest & UpdateCodeSigningConfigRequest & UpdateCodeSigningConfigRequest & UpdateCodeSigningConfigRequest & UpdateCodeSigningConfigRequest & UpdateCodeSigningConfigRequest)[K]
    }>): Request<UpdateCodeSigningConfigResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCodeSigningConfig(
          this.ops["UpdateCodeSigningConfig"].applicator.apply(partialParams)
        );
    }

    invokeUpdateEventSourceMapping(partialParams: ToOptional<{
      [K in keyof UpdateEventSourceMappingRequest & keyof UpdateEventSourceMappingRequest & keyof UpdateEventSourceMappingRequest & keyof UpdateEventSourceMappingRequest & keyof UpdateEventSourceMappingRequest & keyof UpdateEventSourceMappingRequest & keyof UpdateEventSourceMappingRequest & keyof UpdateEventSourceMappingRequest & keyof UpdateEventSourceMappingRequest & keyof UpdateEventSourceMappingRequest & keyof UpdateEventSourceMappingRequest & keyof UpdateEventSourceMappingRequest & keyof UpdateEventSourceMappingRequest & keyof UpdateEventSourceMappingRequest & keyof UpdateEventSourceMappingRequest & keyof UpdateEventSourceMappingRequest & keyof UpdateEventSourceMappingRequest & keyof UpdateEventSourceMappingRequest & keyof UpdateEventSourceMappingRequest & keyof UpdateEventSourceMappingRequest]: (UpdateEventSourceMappingRequest & UpdateEventSourceMappingRequest & UpdateEventSourceMappingRequest & UpdateEventSourceMappingRequest & UpdateEventSourceMappingRequest & UpdateEventSourceMappingRequest & UpdateEventSourceMappingRequest & UpdateEventSourceMappingRequest & UpdateEventSourceMappingRequest & UpdateEventSourceMappingRequest & UpdateEventSourceMappingRequest & UpdateEventSourceMappingRequest & UpdateEventSourceMappingRequest & UpdateEventSourceMappingRequest & UpdateEventSourceMappingRequest & UpdateEventSourceMappingRequest & UpdateEventSourceMappingRequest & UpdateEventSourceMappingRequest & UpdateEventSourceMappingRequest & UpdateEventSourceMappingRequest)[K]
    }>): Request<EventSourceMappingConfiguration, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateEventSourceMapping(
          this.ops["UpdateEventSourceMapping"].applicator.apply(partialParams)
        );
    }

    invokeUpdateFunctionCode(partialParams: ToOptional<{
      [K in keyof UpdateFunctionCodeRequest & keyof UpdateFunctionCodeRequest & keyof UpdateFunctionCodeRequest & keyof UpdateFunctionCodeRequest & keyof UpdateFunctionCodeRequest & keyof UpdateFunctionCodeRequest & keyof UpdateFunctionCodeRequest & keyof UpdateFunctionCodeRequest & keyof UpdateFunctionCodeRequest & keyof UpdateFunctionCodeRequest & keyof UpdateFunctionCodeRequest & keyof UpdateFunctionCodeRequest & keyof UpdateFunctionCodeRequest & keyof UpdateFunctionCodeRequest & keyof UpdateFunctionCodeRequest & keyof UpdateFunctionCodeRequest & keyof UpdateFunctionCodeRequest & keyof UpdateFunctionCodeRequest & keyof UpdateFunctionCodeRequest & keyof UpdateFunctionCodeRequest]: (UpdateFunctionCodeRequest & UpdateFunctionCodeRequest & UpdateFunctionCodeRequest & UpdateFunctionCodeRequest & UpdateFunctionCodeRequest & UpdateFunctionCodeRequest & UpdateFunctionCodeRequest & UpdateFunctionCodeRequest & UpdateFunctionCodeRequest & UpdateFunctionCodeRequest & UpdateFunctionCodeRequest & UpdateFunctionCodeRequest & UpdateFunctionCodeRequest & UpdateFunctionCodeRequest & UpdateFunctionCodeRequest & UpdateFunctionCodeRequest & UpdateFunctionCodeRequest & UpdateFunctionCodeRequest & UpdateFunctionCodeRequest & UpdateFunctionCodeRequest)[K]
    }>): Request<FunctionConfiguration, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFunctionCode(
          this.ops["UpdateFunctionCode"].applicator.apply(partialParams)
        );
    }

    invokeUpdateFunctionConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateFunctionConfigurationRequest & keyof UpdateFunctionConfigurationRequest & keyof UpdateFunctionConfigurationRequest & keyof UpdateFunctionConfigurationRequest & keyof UpdateFunctionConfigurationRequest & keyof UpdateFunctionConfigurationRequest & keyof UpdateFunctionConfigurationRequest & keyof UpdateFunctionConfigurationRequest & keyof UpdateFunctionConfigurationRequest & keyof UpdateFunctionConfigurationRequest & keyof UpdateFunctionConfigurationRequest & keyof UpdateFunctionConfigurationRequest & keyof UpdateFunctionConfigurationRequest & keyof UpdateFunctionConfigurationRequest & keyof UpdateFunctionConfigurationRequest & keyof UpdateFunctionConfigurationRequest & keyof UpdateFunctionConfigurationRequest & keyof UpdateFunctionConfigurationRequest & keyof UpdateFunctionConfigurationRequest & keyof UpdateFunctionConfigurationRequest]: (UpdateFunctionConfigurationRequest & UpdateFunctionConfigurationRequest & UpdateFunctionConfigurationRequest & UpdateFunctionConfigurationRequest & UpdateFunctionConfigurationRequest & UpdateFunctionConfigurationRequest & UpdateFunctionConfigurationRequest & UpdateFunctionConfigurationRequest & UpdateFunctionConfigurationRequest & UpdateFunctionConfigurationRequest & UpdateFunctionConfigurationRequest & UpdateFunctionConfigurationRequest & UpdateFunctionConfigurationRequest & UpdateFunctionConfigurationRequest & UpdateFunctionConfigurationRequest & UpdateFunctionConfigurationRequest & UpdateFunctionConfigurationRequest & UpdateFunctionConfigurationRequest & UpdateFunctionConfigurationRequest & UpdateFunctionConfigurationRequest)[K]
    }>): Request<FunctionConfiguration, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFunctionConfiguration(
          this.ops["UpdateFunctionConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeUpdateFunctionEventInvokeConfig(partialParams: ToOptional<{
      [K in keyof UpdateFunctionEventInvokeConfigRequest & keyof UpdateFunctionEventInvokeConfigRequest & keyof UpdateFunctionEventInvokeConfigRequest & keyof UpdateFunctionEventInvokeConfigRequest & keyof UpdateFunctionEventInvokeConfigRequest & keyof UpdateFunctionEventInvokeConfigRequest & keyof UpdateFunctionEventInvokeConfigRequest & keyof UpdateFunctionEventInvokeConfigRequest & keyof UpdateFunctionEventInvokeConfigRequest & keyof UpdateFunctionEventInvokeConfigRequest & keyof UpdateFunctionEventInvokeConfigRequest & keyof UpdateFunctionEventInvokeConfigRequest & keyof UpdateFunctionEventInvokeConfigRequest & keyof UpdateFunctionEventInvokeConfigRequest & keyof UpdateFunctionEventInvokeConfigRequest & keyof UpdateFunctionEventInvokeConfigRequest & keyof UpdateFunctionEventInvokeConfigRequest & keyof UpdateFunctionEventInvokeConfigRequest & keyof UpdateFunctionEventInvokeConfigRequest & keyof UpdateFunctionEventInvokeConfigRequest]: (UpdateFunctionEventInvokeConfigRequest & UpdateFunctionEventInvokeConfigRequest & UpdateFunctionEventInvokeConfigRequest & UpdateFunctionEventInvokeConfigRequest & UpdateFunctionEventInvokeConfigRequest & UpdateFunctionEventInvokeConfigRequest & UpdateFunctionEventInvokeConfigRequest & UpdateFunctionEventInvokeConfigRequest & UpdateFunctionEventInvokeConfigRequest & UpdateFunctionEventInvokeConfigRequest & UpdateFunctionEventInvokeConfigRequest & UpdateFunctionEventInvokeConfigRequest & UpdateFunctionEventInvokeConfigRequest & UpdateFunctionEventInvokeConfigRequest & UpdateFunctionEventInvokeConfigRequest & UpdateFunctionEventInvokeConfigRequest & UpdateFunctionEventInvokeConfigRequest & UpdateFunctionEventInvokeConfigRequest & UpdateFunctionEventInvokeConfigRequest & UpdateFunctionEventInvokeConfigRequest)[K]
    }>): Request<FunctionEventInvokeConfig, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFunctionEventInvokeConfig(
          this.ops["UpdateFunctionEventInvokeConfig"].applicator.apply(partialParams)
        );
    }
}