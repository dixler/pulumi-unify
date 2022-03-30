
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.lambda.LayerVersionPermission {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.lambda.LayerVersionPermission>) {
        super(...args)
        this.client = new awssdk.Lambda()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/lambda-2015-03-31.normal.json"), this.client)
    }

    invokeAddLayerVersionPermission(partialParams: ToOptional<{
      [K in keyof AddLayerVersionPermissionRequest & keyof AddLayerVersionPermissionRequest & keyof AddLayerVersionPermissionRequest & keyof AddLayerVersionPermissionRequest & keyof AddLayerVersionPermissionRequest & keyof AddLayerVersionPermissionRequest & keyof AddLayerVersionPermissionRequest]: (AddLayerVersionPermissionRequest & AddLayerVersionPermissionRequest & AddLayerVersionPermissionRequest & AddLayerVersionPermissionRequest & AddLayerVersionPermissionRequest & AddLayerVersionPermissionRequest & AddLayerVersionPermissionRequest)[K]
    }>): AddLayerVersionPermissionResponse {
        return this.client.addLayerVersionPermission(
            this.ops["AddLayerVersionPermission"].apply(partialParams)
        );
    }

    invokeAddPermission(partialParams: ToOptional<{
      [K in keyof Omit<AddPermissionRequest, "Action"> & keyof AddPermissionRequest & keyof AddPermissionRequest & keyof AddPermissionRequest & keyof AddPermissionRequest & keyof AddPermissionRequest & keyof AddPermissionRequest]: (Omit<AddPermissionRequest, "Action"> & AddPermissionRequest & AddPermissionRequest & AddPermissionRequest & AddPermissionRequest & AddPermissionRequest & AddPermissionRequest)[K]
    }>): AddPermissionResponse {
        return this.client.addPermission(
            this.ops["AddPermission"].apply(partialParams)
        );
    }

    invokeCreateAlias(partialParams: ToOptional<{
      [K in keyof CreateAliasRequest & keyof CreateAliasRequest & keyof CreateAliasRequest & keyof CreateAliasRequest & keyof CreateAliasRequest & keyof CreateAliasRequest & keyof CreateAliasRequest]: (CreateAliasRequest & CreateAliasRequest & CreateAliasRequest & CreateAliasRequest & CreateAliasRequest & CreateAliasRequest & CreateAliasRequest)[K]
    }>): AliasConfiguration {
        return this.client.createAlias(
            this.ops["CreateAlias"].apply(partialParams)
        );
    }

    invokeCreateCodeSigningConfig(partialParams: ToOptional<{
      [K in keyof CreateCodeSigningConfigRequest & keyof CreateCodeSigningConfigRequest & keyof CreateCodeSigningConfigRequest & keyof CreateCodeSigningConfigRequest & keyof CreateCodeSigningConfigRequest & keyof CreateCodeSigningConfigRequest & keyof CreateCodeSigningConfigRequest]: (CreateCodeSigningConfigRequest & CreateCodeSigningConfigRequest & CreateCodeSigningConfigRequest & CreateCodeSigningConfigRequest & CreateCodeSigningConfigRequest & CreateCodeSigningConfigRequest & CreateCodeSigningConfigRequest)[K]
    }>): CreateCodeSigningConfigResponse {
        return this.client.createCodeSigningConfig(
            this.ops["CreateCodeSigningConfig"].apply(partialParams)
        );
    }

    invokeCreateEventSourceMapping(partialParams: ToOptional<{
      [K in keyof CreateEventSourceMappingRequest & keyof CreateEventSourceMappingRequest & keyof CreateEventSourceMappingRequest & keyof CreateEventSourceMappingRequest & keyof CreateEventSourceMappingRequest & keyof CreateEventSourceMappingRequest & keyof CreateEventSourceMappingRequest]: (CreateEventSourceMappingRequest & CreateEventSourceMappingRequest & CreateEventSourceMappingRequest & CreateEventSourceMappingRequest & CreateEventSourceMappingRequest & CreateEventSourceMappingRequest & CreateEventSourceMappingRequest)[K]
    }>): EventSourceMappingConfiguration {
        return this.client.createEventSourceMapping(
            this.ops["CreateEventSourceMapping"].apply(partialParams)
        );
    }

    invokeCreateFunction(partialParams: ToOptional<{
      [K in keyof CreateFunctionRequest & keyof CreateFunctionRequest & keyof CreateFunctionRequest & keyof CreateFunctionRequest & keyof CreateFunctionRequest & keyof CreateFunctionRequest & keyof CreateFunctionRequest]: (CreateFunctionRequest & CreateFunctionRequest & CreateFunctionRequest & CreateFunctionRequest & CreateFunctionRequest & CreateFunctionRequest & CreateFunctionRequest)[K]
    }>): FunctionConfiguration {
        return this.client.createFunction(
            this.ops["CreateFunction"].apply(partialParams)
        );
    }

    invokeDeleteAlias(partialParams: ToOptional<{
      [K in keyof DeleteAliasRequest & keyof DeleteAliasRequest & keyof DeleteAliasRequest & keyof DeleteAliasRequest & keyof DeleteAliasRequest & keyof DeleteAliasRequest & keyof DeleteAliasRequest]: (DeleteAliasRequest & DeleteAliasRequest & DeleteAliasRequest & DeleteAliasRequest & DeleteAliasRequest & DeleteAliasRequest & DeleteAliasRequest)[K]
    }>): void {
        return this.client.deleteAlias(
            this.ops["DeleteAlias"].apply(partialParams)
        );
    }

    invokeDeleteCodeSigningConfig(partialParams: ToOptional<{
      [K in keyof DeleteCodeSigningConfigRequest & keyof DeleteCodeSigningConfigRequest & keyof DeleteCodeSigningConfigRequest & keyof DeleteCodeSigningConfigRequest & keyof DeleteCodeSigningConfigRequest & keyof DeleteCodeSigningConfigRequest & keyof DeleteCodeSigningConfigRequest]: (DeleteCodeSigningConfigRequest & DeleteCodeSigningConfigRequest & DeleteCodeSigningConfigRequest & DeleteCodeSigningConfigRequest & DeleteCodeSigningConfigRequest & DeleteCodeSigningConfigRequest & DeleteCodeSigningConfigRequest)[K]
    }>): DeleteCodeSigningConfigResponse {
        return this.client.deleteCodeSigningConfig(
            this.ops["DeleteCodeSigningConfig"].apply(partialParams)
        );
    }

    invokeDeleteEventSourceMapping(partialParams: ToOptional<{
      [K in keyof DeleteEventSourceMappingRequest & keyof DeleteEventSourceMappingRequest & keyof DeleteEventSourceMappingRequest & keyof DeleteEventSourceMappingRequest & keyof DeleteEventSourceMappingRequest & keyof DeleteEventSourceMappingRequest & keyof DeleteEventSourceMappingRequest]: (DeleteEventSourceMappingRequest & DeleteEventSourceMappingRequest & DeleteEventSourceMappingRequest & DeleteEventSourceMappingRequest & DeleteEventSourceMappingRequest & DeleteEventSourceMappingRequest & DeleteEventSourceMappingRequest)[K]
    }>): EventSourceMappingConfiguration {
        return this.client.deleteEventSourceMapping(
            this.ops["DeleteEventSourceMapping"].apply(partialParams)
        );
    }

    invokeDeleteFunction(partialParams: ToOptional<{
      [K in keyof DeleteFunctionRequest & keyof DeleteFunctionRequest & keyof DeleteFunctionRequest & keyof DeleteFunctionRequest & keyof DeleteFunctionRequest & keyof DeleteFunctionRequest & keyof DeleteFunctionRequest]: (DeleteFunctionRequest & DeleteFunctionRequest & DeleteFunctionRequest & DeleteFunctionRequest & DeleteFunctionRequest & DeleteFunctionRequest & DeleteFunctionRequest)[K]
    }>): void {
        return this.client.deleteFunction(
            this.ops["DeleteFunction"].apply(partialParams)
        );
    }

    invokeDeleteFunctionCodeSigningConfig(partialParams: ToOptional<{
      [K in keyof DeleteFunctionCodeSigningConfigRequest & keyof DeleteFunctionCodeSigningConfigRequest & keyof DeleteFunctionCodeSigningConfigRequest & keyof DeleteFunctionCodeSigningConfigRequest & keyof DeleteFunctionCodeSigningConfigRequest & keyof DeleteFunctionCodeSigningConfigRequest & keyof DeleteFunctionCodeSigningConfigRequest]: (DeleteFunctionCodeSigningConfigRequest & DeleteFunctionCodeSigningConfigRequest & DeleteFunctionCodeSigningConfigRequest & DeleteFunctionCodeSigningConfigRequest & DeleteFunctionCodeSigningConfigRequest & DeleteFunctionCodeSigningConfigRequest & DeleteFunctionCodeSigningConfigRequest)[K]
    }>): void {
        return this.client.deleteFunctionCodeSigningConfig(
            this.ops["DeleteFunctionCodeSigningConfig"].apply(partialParams)
        );
    }

    invokeDeleteFunctionConcurrency(partialParams: ToOptional<{
      [K in keyof DeleteFunctionConcurrencyRequest & keyof DeleteFunctionConcurrencyRequest & keyof DeleteFunctionConcurrencyRequest & keyof DeleteFunctionConcurrencyRequest & keyof DeleteFunctionConcurrencyRequest & keyof DeleteFunctionConcurrencyRequest & keyof DeleteFunctionConcurrencyRequest]: (DeleteFunctionConcurrencyRequest & DeleteFunctionConcurrencyRequest & DeleteFunctionConcurrencyRequest & DeleteFunctionConcurrencyRequest & DeleteFunctionConcurrencyRequest & DeleteFunctionConcurrencyRequest & DeleteFunctionConcurrencyRequest)[K]
    }>): void {
        return this.client.deleteFunctionConcurrency(
            this.ops["DeleteFunctionConcurrency"].apply(partialParams)
        );
    }

    invokeDeleteFunctionEventInvokeConfig(partialParams: ToOptional<{
      [K in keyof DeleteFunctionEventInvokeConfigRequest & keyof DeleteFunctionEventInvokeConfigRequest & keyof DeleteFunctionEventInvokeConfigRequest & keyof DeleteFunctionEventInvokeConfigRequest & keyof DeleteFunctionEventInvokeConfigRequest & keyof DeleteFunctionEventInvokeConfigRequest & keyof DeleteFunctionEventInvokeConfigRequest]: (DeleteFunctionEventInvokeConfigRequest & DeleteFunctionEventInvokeConfigRequest & DeleteFunctionEventInvokeConfigRequest & DeleteFunctionEventInvokeConfigRequest & DeleteFunctionEventInvokeConfigRequest & DeleteFunctionEventInvokeConfigRequest & DeleteFunctionEventInvokeConfigRequest)[K]
    }>): void {
        return this.client.deleteFunctionEventInvokeConfig(
            this.ops["DeleteFunctionEventInvokeConfig"].apply(partialParams)
        );
    }

    invokeDeleteLayerVersion(partialParams: ToOptional<{
      [K in keyof DeleteLayerVersionRequest & keyof DeleteLayerVersionRequest & keyof DeleteLayerVersionRequest & keyof DeleteLayerVersionRequest & keyof DeleteLayerVersionRequest & keyof DeleteLayerVersionRequest & keyof DeleteLayerVersionRequest]: (DeleteLayerVersionRequest & DeleteLayerVersionRequest & DeleteLayerVersionRequest & DeleteLayerVersionRequest & DeleteLayerVersionRequest & DeleteLayerVersionRequest & DeleteLayerVersionRequest)[K]
    }>): void {
        return this.client.deleteLayerVersion(
            this.ops["DeleteLayerVersion"].apply(partialParams)
        );
    }

    invokeDeleteProvisionedConcurrencyConfig(partialParams: ToOptional<{
      [K in keyof DeleteProvisionedConcurrencyConfigRequest & keyof DeleteProvisionedConcurrencyConfigRequest & keyof DeleteProvisionedConcurrencyConfigRequest & keyof DeleteProvisionedConcurrencyConfigRequest & keyof DeleteProvisionedConcurrencyConfigRequest & keyof DeleteProvisionedConcurrencyConfigRequest & keyof DeleteProvisionedConcurrencyConfigRequest]: (DeleteProvisionedConcurrencyConfigRequest & DeleteProvisionedConcurrencyConfigRequest & DeleteProvisionedConcurrencyConfigRequest & DeleteProvisionedConcurrencyConfigRequest & DeleteProvisionedConcurrencyConfigRequest & DeleteProvisionedConcurrencyConfigRequest & DeleteProvisionedConcurrencyConfigRequest)[K]
    }>): void {
        return this.client.deleteProvisionedConcurrencyConfig(
            this.ops["DeleteProvisionedConcurrencyConfig"].apply(partialParams)
        );
    }

    invokeGetAlias(partialParams: ToOptional<{
      [K in keyof GetAliasRequest & keyof GetAliasRequest & keyof GetAliasRequest & keyof GetAliasRequest & keyof GetAliasRequest & keyof GetAliasRequest & keyof GetAliasRequest]: (GetAliasRequest & GetAliasRequest & GetAliasRequest & GetAliasRequest & GetAliasRequest & GetAliasRequest & GetAliasRequest)[K]
    }>): AliasConfiguration {
        return this.client.getAlias(
            this.ops["GetAlias"].apply(partialParams)
        );
    }

    invokeGetCodeSigningConfig(partialParams: ToOptional<{
      [K in keyof GetCodeSigningConfigRequest & keyof GetCodeSigningConfigRequest & keyof GetCodeSigningConfigRequest & keyof GetCodeSigningConfigRequest & keyof GetCodeSigningConfigRequest & keyof GetCodeSigningConfigRequest & keyof GetCodeSigningConfigRequest]: (GetCodeSigningConfigRequest & GetCodeSigningConfigRequest & GetCodeSigningConfigRequest & GetCodeSigningConfigRequest & GetCodeSigningConfigRequest & GetCodeSigningConfigRequest & GetCodeSigningConfigRequest)[K]
    }>): GetCodeSigningConfigResponse {
        return this.client.getCodeSigningConfig(
            this.ops["GetCodeSigningConfig"].apply(partialParams)
        );
    }

    invokeGetEventSourceMapping(partialParams: ToOptional<{
      [K in keyof GetEventSourceMappingRequest & keyof GetEventSourceMappingRequest & keyof GetEventSourceMappingRequest & keyof GetEventSourceMappingRequest & keyof GetEventSourceMappingRequest & keyof GetEventSourceMappingRequest & keyof GetEventSourceMappingRequest]: (GetEventSourceMappingRequest & GetEventSourceMappingRequest & GetEventSourceMappingRequest & GetEventSourceMappingRequest & GetEventSourceMappingRequest & GetEventSourceMappingRequest & GetEventSourceMappingRequest)[K]
    }>): EventSourceMappingConfiguration {
        return this.client.getEventSourceMapping(
            this.ops["GetEventSourceMapping"].apply(partialParams)
        );
    }

    invokeGetFunction(partialParams: ToOptional<{
      [K in keyof GetFunctionRequest & keyof GetFunctionRequest & keyof GetFunctionRequest & keyof GetFunctionRequest & keyof GetFunctionRequest & keyof GetFunctionRequest & keyof GetFunctionRequest]: (GetFunctionRequest & GetFunctionRequest & GetFunctionRequest & GetFunctionRequest & GetFunctionRequest & GetFunctionRequest & GetFunctionRequest)[K]
    }>): GetFunctionResponse {
        return this.client.getFunction(
            this.ops["GetFunction"].apply(partialParams)
        );
    }

    invokeGetFunctionCodeSigningConfig(partialParams: ToOptional<{
      [K in keyof GetFunctionCodeSigningConfigRequest & keyof GetFunctionCodeSigningConfigRequest & keyof GetFunctionCodeSigningConfigRequest & keyof GetFunctionCodeSigningConfigRequest & keyof GetFunctionCodeSigningConfigRequest & keyof GetFunctionCodeSigningConfigRequest & keyof GetFunctionCodeSigningConfigRequest]: (GetFunctionCodeSigningConfigRequest & GetFunctionCodeSigningConfigRequest & GetFunctionCodeSigningConfigRequest & GetFunctionCodeSigningConfigRequest & GetFunctionCodeSigningConfigRequest & GetFunctionCodeSigningConfigRequest & GetFunctionCodeSigningConfigRequest)[K]
    }>): GetFunctionCodeSigningConfigResponse {
        return this.client.getFunctionCodeSigningConfig(
            this.ops["GetFunctionCodeSigningConfig"].apply(partialParams)
        );
    }

    invokeGetFunctionConcurrency(partialParams: ToOptional<{
      [K in keyof GetFunctionConcurrencyRequest & keyof GetFunctionConcurrencyRequest & keyof GetFunctionConcurrencyRequest & keyof GetFunctionConcurrencyRequest & keyof GetFunctionConcurrencyRequest & keyof GetFunctionConcurrencyRequest & keyof GetFunctionConcurrencyRequest]: (GetFunctionConcurrencyRequest & GetFunctionConcurrencyRequest & GetFunctionConcurrencyRequest & GetFunctionConcurrencyRequest & GetFunctionConcurrencyRequest & GetFunctionConcurrencyRequest & GetFunctionConcurrencyRequest)[K]
    }>): GetFunctionConcurrencyResponse {
        return this.client.getFunctionConcurrency(
            this.ops["GetFunctionConcurrency"].apply(partialParams)
        );
    }

    invokeGetFunctionConfiguration(partialParams: ToOptional<{
      [K in keyof GetFunctionConfigurationRequest & keyof GetFunctionConfigurationRequest & keyof GetFunctionConfigurationRequest & keyof GetFunctionConfigurationRequest & keyof GetFunctionConfigurationRequest & keyof GetFunctionConfigurationRequest & keyof GetFunctionConfigurationRequest]: (GetFunctionConfigurationRequest & GetFunctionConfigurationRequest & GetFunctionConfigurationRequest & GetFunctionConfigurationRequest & GetFunctionConfigurationRequest & GetFunctionConfigurationRequest & GetFunctionConfigurationRequest)[K]
    }>): FunctionConfiguration {
        return this.client.getFunctionConfiguration(
            this.ops["GetFunctionConfiguration"].apply(partialParams)
        );
    }

    invokeGetFunctionEventInvokeConfig(partialParams: ToOptional<{
      [K in keyof GetFunctionEventInvokeConfigRequest & keyof GetFunctionEventInvokeConfigRequest & keyof GetFunctionEventInvokeConfigRequest & keyof GetFunctionEventInvokeConfigRequest & keyof GetFunctionEventInvokeConfigRequest & keyof GetFunctionEventInvokeConfigRequest & keyof GetFunctionEventInvokeConfigRequest]: (GetFunctionEventInvokeConfigRequest & GetFunctionEventInvokeConfigRequest & GetFunctionEventInvokeConfigRequest & GetFunctionEventInvokeConfigRequest & GetFunctionEventInvokeConfigRequest & GetFunctionEventInvokeConfigRequest & GetFunctionEventInvokeConfigRequest)[K]
    }>): FunctionEventInvokeConfig {
        return this.client.getFunctionEventInvokeConfig(
            this.ops["GetFunctionEventInvokeConfig"].apply(partialParams)
        );
    }

    invokeGetLayerVersion(partialParams: ToOptional<{
      [K in keyof GetLayerVersionRequest & keyof GetLayerVersionRequest & keyof GetLayerVersionRequest & keyof GetLayerVersionRequest & keyof GetLayerVersionRequest & keyof GetLayerVersionRequest & keyof GetLayerVersionRequest]: (GetLayerVersionRequest & GetLayerVersionRequest & GetLayerVersionRequest & GetLayerVersionRequest & GetLayerVersionRequest & GetLayerVersionRequest & GetLayerVersionRequest)[K]
    }>): GetLayerVersionResponse {
        return this.client.getLayerVersion(
            this.ops["GetLayerVersion"].apply(partialParams)
        );
    }

    invokeGetLayerVersionByArn(partialParams: ToOptional<{
      [K in keyof GetLayerVersionByArnRequest & keyof GetLayerVersionByArnRequest & keyof GetLayerVersionByArnRequest & keyof GetLayerVersionByArnRequest & keyof GetLayerVersionByArnRequest & keyof GetLayerVersionByArnRequest & keyof GetLayerVersionByArnRequest]: (GetLayerVersionByArnRequest & GetLayerVersionByArnRequest & GetLayerVersionByArnRequest & GetLayerVersionByArnRequest & GetLayerVersionByArnRequest & GetLayerVersionByArnRequest & GetLayerVersionByArnRequest)[K]
    }>): GetLayerVersionResponse {
        return this.client.getLayerVersionByArn(
            this.ops["GetLayerVersionByArn"].apply(partialParams)
        );
    }

    invokeGetLayerVersionPolicy(partialParams: ToOptional<{
      [K in keyof GetLayerVersionPolicyRequest & keyof GetLayerVersionPolicyRequest & keyof GetLayerVersionPolicyRequest & keyof GetLayerVersionPolicyRequest & keyof GetLayerVersionPolicyRequest & keyof GetLayerVersionPolicyRequest & keyof GetLayerVersionPolicyRequest]: (GetLayerVersionPolicyRequest & GetLayerVersionPolicyRequest & GetLayerVersionPolicyRequest & GetLayerVersionPolicyRequest & GetLayerVersionPolicyRequest & GetLayerVersionPolicyRequest & GetLayerVersionPolicyRequest)[K]
    }>): GetLayerVersionPolicyResponse {
        return this.client.getLayerVersionPolicy(
            this.ops["GetLayerVersionPolicy"].apply(partialParams)
        );
    }

    invokeGetPolicy(partialParams: ToOptional<{
      [K in keyof GetPolicyRequest & keyof GetPolicyRequest & keyof GetPolicyRequest & keyof GetPolicyRequest & keyof GetPolicyRequest & keyof GetPolicyRequest & keyof GetPolicyRequest]: (GetPolicyRequest & GetPolicyRequest & GetPolicyRequest & GetPolicyRequest & GetPolicyRequest & GetPolicyRequest & GetPolicyRequest)[K]
    }>): GetPolicyResponse {
        return this.client.getPolicy(
            this.ops["GetPolicy"].apply(partialParams)
        );
    }

    invokeGetProvisionedConcurrencyConfig(partialParams: ToOptional<{
      [K in keyof GetProvisionedConcurrencyConfigRequest & keyof GetProvisionedConcurrencyConfigRequest & keyof GetProvisionedConcurrencyConfigRequest & keyof GetProvisionedConcurrencyConfigRequest & keyof GetProvisionedConcurrencyConfigRequest & keyof GetProvisionedConcurrencyConfigRequest & keyof GetProvisionedConcurrencyConfigRequest]: (GetProvisionedConcurrencyConfigRequest & GetProvisionedConcurrencyConfigRequest & GetProvisionedConcurrencyConfigRequest & GetProvisionedConcurrencyConfigRequest & GetProvisionedConcurrencyConfigRequest & GetProvisionedConcurrencyConfigRequest & GetProvisionedConcurrencyConfigRequest)[K]
    }>): GetProvisionedConcurrencyConfigResponse {
        return this.client.getProvisionedConcurrencyConfig(
            this.ops["GetProvisionedConcurrencyConfig"].apply(partialParams)
        );
    }

    invokeInvoke(partialParams: ToOptional<{
      [K in keyof InvocationRequest & keyof InvocationRequest & keyof InvocationRequest & keyof InvocationRequest & keyof InvocationRequest & keyof InvocationRequest & keyof InvocationRequest]: (InvocationRequest & InvocationRequest & InvocationRequest & InvocationRequest & InvocationRequest & InvocationRequest & InvocationRequest)[K]
    }>): InvocationResponse {
        return this.client.invoke(
            this.ops["Invoke"].apply(partialParams)
        );
    }

    invokeInvokeAsync(partialParams: ToOptional<{
      [K in keyof InvokeAsyncRequest & keyof InvokeAsyncRequest & keyof InvokeAsyncRequest & keyof InvokeAsyncRequest & keyof InvokeAsyncRequest & keyof InvokeAsyncRequest & keyof InvokeAsyncRequest]: (InvokeAsyncRequest & InvokeAsyncRequest & InvokeAsyncRequest & InvokeAsyncRequest & InvokeAsyncRequest & InvokeAsyncRequest & InvokeAsyncRequest)[K]
    }>): InvokeAsyncResponse {
        return this.client.invokeAsync(
            this.ops["InvokeAsync"].apply(partialParams)
        );
    }

    invokeListAliases(partialParams: ToOptional<{
      [K in keyof ListAliasesRequest & keyof ListAliasesRequest & keyof ListAliasesRequest & keyof ListAliasesRequest & keyof ListAliasesRequest & keyof ListAliasesRequest & keyof ListAliasesRequest]: (ListAliasesRequest & ListAliasesRequest & ListAliasesRequest & ListAliasesRequest & ListAliasesRequest & ListAliasesRequest & ListAliasesRequest)[K]
    }>): ListAliasesResponse {
        return this.client.listAliases(
            this.ops["ListAliases"].apply(partialParams)
        );
    }

    invokeListFunctionEventInvokeConfigs(partialParams: ToOptional<{
      [K in keyof ListFunctionEventInvokeConfigsRequest & keyof ListFunctionEventInvokeConfigsRequest & keyof ListFunctionEventInvokeConfigsRequest & keyof ListFunctionEventInvokeConfigsRequest & keyof ListFunctionEventInvokeConfigsRequest & keyof ListFunctionEventInvokeConfigsRequest & keyof ListFunctionEventInvokeConfigsRequest]: (ListFunctionEventInvokeConfigsRequest & ListFunctionEventInvokeConfigsRequest & ListFunctionEventInvokeConfigsRequest & ListFunctionEventInvokeConfigsRequest & ListFunctionEventInvokeConfigsRequest & ListFunctionEventInvokeConfigsRequest & ListFunctionEventInvokeConfigsRequest)[K]
    }>): ListFunctionEventInvokeConfigsResponse {
        return this.client.listFunctionEventInvokeConfigs(
            this.ops["ListFunctionEventInvokeConfigs"].apply(partialParams)
        );
    }

    invokeListFunctionsByCodeSigningConfig(partialParams: ToOptional<{
      [K in keyof ListFunctionsByCodeSigningConfigRequest & keyof ListFunctionsByCodeSigningConfigRequest & keyof ListFunctionsByCodeSigningConfigRequest & keyof ListFunctionsByCodeSigningConfigRequest & keyof ListFunctionsByCodeSigningConfigRequest & keyof ListFunctionsByCodeSigningConfigRequest & keyof ListFunctionsByCodeSigningConfigRequest]: (ListFunctionsByCodeSigningConfigRequest & ListFunctionsByCodeSigningConfigRequest & ListFunctionsByCodeSigningConfigRequest & ListFunctionsByCodeSigningConfigRequest & ListFunctionsByCodeSigningConfigRequest & ListFunctionsByCodeSigningConfigRequest & ListFunctionsByCodeSigningConfigRequest)[K]
    }>): ListFunctionsByCodeSigningConfigResponse {
        return this.client.listFunctionsByCodeSigningConfig(
            this.ops["ListFunctionsByCodeSigningConfig"].apply(partialParams)
        );
    }

    invokeListLayerVersions(partialParams: ToOptional<{
      [K in keyof ListLayerVersionsRequest & keyof Omit<ListLayerVersionsRequest, "LayerName"> & keyof ListLayerVersionsRequest & keyof ListLayerVersionsRequest & keyof ListLayerVersionsRequest & keyof ListLayerVersionsRequest & keyof ListLayerVersionsRequest]: (ListLayerVersionsRequest & Omit<ListLayerVersionsRequest, "LayerName"> & ListLayerVersionsRequest & ListLayerVersionsRequest & ListLayerVersionsRequest & ListLayerVersionsRequest & ListLayerVersionsRequest)[K]
    }>): ListLayerVersionsResponse {
        return this.client.listLayerVersions(
            this.ops["ListLayerVersions"].apply(partialParams)
        );
    }

    invokeListProvisionedConcurrencyConfigs(partialParams: ToOptional<{
      [K in keyof ListProvisionedConcurrencyConfigsRequest & keyof ListProvisionedConcurrencyConfigsRequest & keyof ListProvisionedConcurrencyConfigsRequest & keyof ListProvisionedConcurrencyConfigsRequest & keyof ListProvisionedConcurrencyConfigsRequest & keyof ListProvisionedConcurrencyConfigsRequest & keyof ListProvisionedConcurrencyConfigsRequest]: (ListProvisionedConcurrencyConfigsRequest & ListProvisionedConcurrencyConfigsRequest & ListProvisionedConcurrencyConfigsRequest & ListProvisionedConcurrencyConfigsRequest & ListProvisionedConcurrencyConfigsRequest & ListProvisionedConcurrencyConfigsRequest & ListProvisionedConcurrencyConfigsRequest)[K]
    }>): ListProvisionedConcurrencyConfigsResponse {
        return this.client.listProvisionedConcurrencyConfigs(
            this.ops["ListProvisionedConcurrencyConfigs"].apply(partialParams)
        );
    }

    invokeListTags(partialParams: ToOptional<{
      [K in keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest]: (ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest)[K]
    }>): ListTagsResponse {
        return this.client.listTags(
            this.ops["ListTags"].apply(partialParams)
        );
    }

    invokeListVersionsByFunction(partialParams: ToOptional<{
      [K in keyof ListVersionsByFunctionRequest & keyof ListVersionsByFunctionRequest & keyof ListVersionsByFunctionRequest & keyof ListVersionsByFunctionRequest & keyof ListVersionsByFunctionRequest & keyof ListVersionsByFunctionRequest & keyof ListVersionsByFunctionRequest]: (ListVersionsByFunctionRequest & ListVersionsByFunctionRequest & ListVersionsByFunctionRequest & ListVersionsByFunctionRequest & ListVersionsByFunctionRequest & ListVersionsByFunctionRequest & ListVersionsByFunctionRequest)[K]
    }>): ListVersionsByFunctionResponse {
        return this.client.listVersionsByFunction(
            this.ops["ListVersionsByFunction"].apply(partialParams)
        );
    }

    invokePublishLayerVersion(partialParams: ToOptional<{
      [K in keyof PublishLayerVersionRequest & keyof Omit<PublishLayerVersionRequest, "LayerName"> & keyof PublishLayerVersionRequest & keyof PublishLayerVersionRequest & keyof PublishLayerVersionRequest & keyof PublishLayerVersionRequest & keyof PublishLayerVersionRequest]: (PublishLayerVersionRequest & Omit<PublishLayerVersionRequest, "LayerName"> & PublishLayerVersionRequest & PublishLayerVersionRequest & PublishLayerVersionRequest & PublishLayerVersionRequest & PublishLayerVersionRequest)[K]
    }>): PublishLayerVersionResponse {
        return this.client.publishLayerVersion(
            this.ops["PublishLayerVersion"].apply(partialParams)
        );
    }

    invokePublishVersion(partialParams: ToOptional<{
      [K in keyof PublishVersionRequest & keyof PublishVersionRequest & keyof PublishVersionRequest & keyof PublishVersionRequest & keyof PublishVersionRequest & keyof PublishVersionRequest & keyof PublishVersionRequest]: (PublishVersionRequest & PublishVersionRequest & PublishVersionRequest & PublishVersionRequest & PublishVersionRequest & PublishVersionRequest & PublishVersionRequest)[K]
    }>): FunctionConfiguration {
        return this.client.publishVersion(
            this.ops["PublishVersion"].apply(partialParams)
        );
    }

    invokePutFunctionCodeSigningConfig(partialParams: ToOptional<{
      [K in keyof PutFunctionCodeSigningConfigRequest & keyof PutFunctionCodeSigningConfigRequest & keyof PutFunctionCodeSigningConfigRequest & keyof PutFunctionCodeSigningConfigRequest & keyof PutFunctionCodeSigningConfigRequest & keyof PutFunctionCodeSigningConfigRequest & keyof PutFunctionCodeSigningConfigRequest]: (PutFunctionCodeSigningConfigRequest & PutFunctionCodeSigningConfigRequest & PutFunctionCodeSigningConfigRequest & PutFunctionCodeSigningConfigRequest & PutFunctionCodeSigningConfigRequest & PutFunctionCodeSigningConfigRequest & PutFunctionCodeSigningConfigRequest)[K]
    }>): PutFunctionCodeSigningConfigResponse {
        return this.client.putFunctionCodeSigningConfig(
            this.ops["PutFunctionCodeSigningConfig"].apply(partialParams)
        );
    }

    invokePutFunctionConcurrency(partialParams: ToOptional<{
      [K in keyof PutFunctionConcurrencyRequest & keyof PutFunctionConcurrencyRequest & keyof PutFunctionConcurrencyRequest & keyof PutFunctionConcurrencyRequest & keyof PutFunctionConcurrencyRequest & keyof PutFunctionConcurrencyRequest & keyof PutFunctionConcurrencyRequest]: (PutFunctionConcurrencyRequest & PutFunctionConcurrencyRequest & PutFunctionConcurrencyRequest & PutFunctionConcurrencyRequest & PutFunctionConcurrencyRequest & PutFunctionConcurrencyRequest & PutFunctionConcurrencyRequest)[K]
    }>): Concurrency {
        return this.client.putFunctionConcurrency(
            this.ops["PutFunctionConcurrency"].apply(partialParams)
        );
    }

    invokePutFunctionEventInvokeConfig(partialParams: ToOptional<{
      [K in keyof PutFunctionEventInvokeConfigRequest & keyof PutFunctionEventInvokeConfigRequest & keyof PutFunctionEventInvokeConfigRequest & keyof PutFunctionEventInvokeConfigRequest & keyof PutFunctionEventInvokeConfigRequest & keyof PutFunctionEventInvokeConfigRequest & keyof PutFunctionEventInvokeConfigRequest]: (PutFunctionEventInvokeConfigRequest & PutFunctionEventInvokeConfigRequest & PutFunctionEventInvokeConfigRequest & PutFunctionEventInvokeConfigRequest & PutFunctionEventInvokeConfigRequest & PutFunctionEventInvokeConfigRequest & PutFunctionEventInvokeConfigRequest)[K]
    }>): FunctionEventInvokeConfig {
        return this.client.putFunctionEventInvokeConfig(
            this.ops["PutFunctionEventInvokeConfig"].apply(partialParams)
        );
    }

    invokePutProvisionedConcurrencyConfig(partialParams: ToOptional<{
      [K in keyof PutProvisionedConcurrencyConfigRequest & keyof PutProvisionedConcurrencyConfigRequest & keyof PutProvisionedConcurrencyConfigRequest & keyof PutProvisionedConcurrencyConfigRequest & keyof PutProvisionedConcurrencyConfigRequest & keyof PutProvisionedConcurrencyConfigRequest & keyof PutProvisionedConcurrencyConfigRequest]: (PutProvisionedConcurrencyConfigRequest & PutProvisionedConcurrencyConfigRequest & PutProvisionedConcurrencyConfigRequest & PutProvisionedConcurrencyConfigRequest & PutProvisionedConcurrencyConfigRequest & PutProvisionedConcurrencyConfigRequest & PutProvisionedConcurrencyConfigRequest)[K]
    }>): PutProvisionedConcurrencyConfigResponse {
        return this.client.putProvisionedConcurrencyConfig(
            this.ops["PutProvisionedConcurrencyConfig"].apply(partialParams)
        );
    }

    invokeRemoveLayerVersionPermission(partialParams: ToOptional<{
      [K in keyof RemoveLayerVersionPermissionRequest & keyof Omit<RemoveLayerVersionPermissionRequest, "LayerName"> & keyof RemoveLayerVersionPermissionRequest & keyof RemoveLayerVersionPermissionRequest & keyof RemoveLayerVersionPermissionRequest & keyof RemoveLayerVersionPermissionRequest & keyof RemoveLayerVersionPermissionRequest]: (RemoveLayerVersionPermissionRequest & Omit<RemoveLayerVersionPermissionRequest, "LayerName"> & RemoveLayerVersionPermissionRequest & RemoveLayerVersionPermissionRequest & RemoveLayerVersionPermissionRequest & RemoveLayerVersionPermissionRequest & RemoveLayerVersionPermissionRequest)[K]
    }>): void {
        return this.client.removeLayerVersionPermission(
            this.ops["RemoveLayerVersionPermission"].apply(partialParams)
        );
    }

    invokeRemovePermission(partialParams: ToOptional<{
      [K in keyof RemovePermissionRequest & keyof RemovePermissionRequest & keyof RemovePermissionRequest & keyof RemovePermissionRequest & keyof RemovePermissionRequest & keyof RemovePermissionRequest & keyof Omit<RemovePermissionRequest, "StatementId">]: (RemovePermissionRequest & RemovePermissionRequest & RemovePermissionRequest & RemovePermissionRequest & RemovePermissionRequest & RemovePermissionRequest & Omit<RemovePermissionRequest, "StatementId">)[K]
    }>): void {
        return this.client.removePermission(
            this.ops["RemovePermission"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): void {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): void {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateAlias(partialParams: ToOptional<{
      [K in keyof UpdateAliasRequest & keyof UpdateAliasRequest & keyof UpdateAliasRequest & keyof UpdateAliasRequest & keyof UpdateAliasRequest & keyof UpdateAliasRequest & keyof UpdateAliasRequest]: (UpdateAliasRequest & UpdateAliasRequest & UpdateAliasRequest & UpdateAliasRequest & UpdateAliasRequest & UpdateAliasRequest & UpdateAliasRequest)[K]
    }>): AliasConfiguration {
        return this.client.updateAlias(
            this.ops["UpdateAlias"].apply(partialParams)
        );
    }

    invokeUpdateCodeSigningConfig(partialParams: ToOptional<{
      [K in keyof UpdateCodeSigningConfigRequest & keyof UpdateCodeSigningConfigRequest & keyof UpdateCodeSigningConfigRequest & keyof UpdateCodeSigningConfigRequest & keyof UpdateCodeSigningConfigRequest & keyof UpdateCodeSigningConfigRequest & keyof UpdateCodeSigningConfigRequest]: (UpdateCodeSigningConfigRequest & UpdateCodeSigningConfigRequest & UpdateCodeSigningConfigRequest & UpdateCodeSigningConfigRequest & UpdateCodeSigningConfigRequest & UpdateCodeSigningConfigRequest & UpdateCodeSigningConfigRequest)[K]
    }>): UpdateCodeSigningConfigResponse {
        return this.client.updateCodeSigningConfig(
            this.ops["UpdateCodeSigningConfig"].apply(partialParams)
        );
    }

    invokeUpdateEventSourceMapping(partialParams: ToOptional<{
      [K in keyof UpdateEventSourceMappingRequest & keyof UpdateEventSourceMappingRequest & keyof UpdateEventSourceMappingRequest & keyof UpdateEventSourceMappingRequest & keyof UpdateEventSourceMappingRequest & keyof UpdateEventSourceMappingRequest & keyof UpdateEventSourceMappingRequest]: (UpdateEventSourceMappingRequest & UpdateEventSourceMappingRequest & UpdateEventSourceMappingRequest & UpdateEventSourceMappingRequest & UpdateEventSourceMappingRequest & UpdateEventSourceMappingRequest & UpdateEventSourceMappingRequest)[K]
    }>): EventSourceMappingConfiguration {
        return this.client.updateEventSourceMapping(
            this.ops["UpdateEventSourceMapping"].apply(partialParams)
        );
    }

    invokeUpdateFunctionCode(partialParams: ToOptional<{
      [K in keyof UpdateFunctionCodeRequest & keyof UpdateFunctionCodeRequest & keyof UpdateFunctionCodeRequest & keyof UpdateFunctionCodeRequest & keyof UpdateFunctionCodeRequest & keyof UpdateFunctionCodeRequest & keyof UpdateFunctionCodeRequest]: (UpdateFunctionCodeRequest & UpdateFunctionCodeRequest & UpdateFunctionCodeRequest & UpdateFunctionCodeRequest & UpdateFunctionCodeRequest & UpdateFunctionCodeRequest & UpdateFunctionCodeRequest)[K]
    }>): FunctionConfiguration {
        return this.client.updateFunctionCode(
            this.ops["UpdateFunctionCode"].apply(partialParams)
        );
    }

    invokeUpdateFunctionConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateFunctionConfigurationRequest & keyof UpdateFunctionConfigurationRequest & keyof UpdateFunctionConfigurationRequest & keyof UpdateFunctionConfigurationRequest & keyof UpdateFunctionConfigurationRequest & keyof UpdateFunctionConfigurationRequest & keyof UpdateFunctionConfigurationRequest]: (UpdateFunctionConfigurationRequest & UpdateFunctionConfigurationRequest & UpdateFunctionConfigurationRequest & UpdateFunctionConfigurationRequest & UpdateFunctionConfigurationRequest & UpdateFunctionConfigurationRequest & UpdateFunctionConfigurationRequest)[K]
    }>): FunctionConfiguration {
        return this.client.updateFunctionConfiguration(
            this.ops["UpdateFunctionConfiguration"].apply(partialParams)
        );
    }

    invokeUpdateFunctionEventInvokeConfig(partialParams: ToOptional<{
      [K in keyof UpdateFunctionEventInvokeConfigRequest & keyof UpdateFunctionEventInvokeConfigRequest & keyof UpdateFunctionEventInvokeConfigRequest & keyof UpdateFunctionEventInvokeConfigRequest & keyof UpdateFunctionEventInvokeConfigRequest & keyof UpdateFunctionEventInvokeConfigRequest & keyof UpdateFunctionEventInvokeConfigRequest]: (UpdateFunctionEventInvokeConfigRequest & UpdateFunctionEventInvokeConfigRequest & UpdateFunctionEventInvokeConfigRequest & UpdateFunctionEventInvokeConfigRequest & UpdateFunctionEventInvokeConfigRequest & UpdateFunctionEventInvokeConfigRequest & UpdateFunctionEventInvokeConfigRequest)[K]
    }>): FunctionEventInvokeConfig {
        return this.client.updateFunctionEventInvokeConfig(
            this.ops["UpdateFunctionEventInvokeConfig"].apply(partialParams)
        );
    }
}