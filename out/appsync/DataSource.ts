
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    AssociateApiRequest,
    CreateApiCacheRequest,
    CreateApiKeyRequest,
    CreateDataSourceRequest,
    CreateDomainNameRequest,
    CreateFunctionRequest,
    CreateGraphqlApiRequest,
    CreateResolverRequest,
    CreateTypeRequest,
    DeleteApiCacheRequest,
    DeleteApiKeyRequest,
    DeleteDataSourceRequest,
    DeleteDomainNameRequest,
    DeleteFunctionRequest,
    DeleteGraphqlApiRequest,
    DeleteResolverRequest,
    DeleteTypeRequest,
    DisassociateApiRequest,
    FlushApiCacheRequest,
    GetApiAssociationRequest,
    GetApiCacheRequest,
    GetDataSourceRequest,
    GetDomainNameRequest,
    GetFunctionRequest,
    GetGraphqlApiRequest,
    GetIntrospectionSchemaRequest,
    GetResolverRequest,
    GetSchemaCreationStatusRequest,
    GetTypeRequest,
    ListApiKeysRequest,
    ListDataSourcesRequest,
    ListFunctionsRequest,
    ListResolversRequest,
    ListResolversByFunctionRequest,
    ListTagsForResourceRequest,
    ListTypesRequest,
    StartSchemaCreationRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateApiCacheRequest,
    UpdateApiKeyRequest,
    UpdateDataSourceRequest,
    UpdateDomainNameRequest,
    UpdateFunctionRequest,
    UpdateGraphqlApiRequest,
    UpdateResolverRequest,
    UpdateTypeRequest,
    AssociateApiResponse,
    CreateApiCacheResponse,
    CreateApiKeyResponse,
    CreateDataSourceResponse,
    CreateDomainNameResponse,
    CreateFunctionResponse,
    CreateGraphqlApiResponse,
    CreateResolverResponse,
    CreateTypeResponse,
    DeleteApiCacheResponse,
    DeleteApiKeyResponse,
    DeleteDataSourceResponse,
    DeleteDomainNameResponse,
    DeleteFunctionResponse,
    DeleteGraphqlApiResponse,
    DeleteResolverResponse,
    DeleteTypeResponse,
    DisassociateApiResponse,
    FlushApiCacheResponse,
    GetApiAssociationResponse,
    GetApiCacheResponse,
    GetDataSourceResponse,
    GetDomainNameResponse,
    GetFunctionResponse,
    GetGraphqlApiResponse,
    GetIntrospectionSchemaResponse,
    GetResolverResponse,
    GetSchemaCreationStatusResponse,
    GetTypeResponse,
    ListApiKeysResponse,
    ListDataSourcesResponse,
    ListFunctionsResponse,
    ListResolversResponse,
    ListResolversByFunctionResponse,
    ListTagsForResourceResponse,
    ListTypesResponse,
    StartSchemaCreationResponse,
    TagResourceResponse,
    UntagResourceResponse,
    UpdateApiCacheResponse,
    UpdateApiKeyResponse,
    UpdateDataSourceResponse,
    UpdateDomainNameResponse,
    UpdateFunctionResponse,
    UpdateGraphqlApiResponse,
    UpdateResolverResponse,
    UpdateTypeResponse
} from "aws-sdk/clients/appsync";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.appsync.DataSource {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.appsync.DataSource>) {
        super(...args)
        this.client = new awssdk.AppSync()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/appsync-2017-07-25.normal.json"), this.client)
    }

    invokeAssociateApi(partialParams: ToOptional<{
      [K in keyof AssociateApiRequest & keyof AssociateApiRequest & keyof AssociateApiRequest & keyof AssociateApiRequest & keyof AssociateApiRequest & keyof AssociateApiRequest]: (AssociateApiRequest & AssociateApiRequest & AssociateApiRequest & AssociateApiRequest & AssociateApiRequest & AssociateApiRequest)[K]
    }>): AssociateApiResponse {
        return this.client.associateApi(
            this.ops["AssociateApi"].apply(partialParams)
        );
    }

    invokeCreateApiCache(partialParams: ToOptional<{
      [K in keyof CreateApiCacheRequest & keyof CreateApiCacheRequest & keyof CreateApiCacheRequest & keyof CreateApiCacheRequest & keyof CreateApiCacheRequest & keyof Omit<CreateApiCacheRequest, "type">]: (CreateApiCacheRequest & CreateApiCacheRequest & CreateApiCacheRequest & CreateApiCacheRequest & CreateApiCacheRequest & Omit<CreateApiCacheRequest, "type">)[K]
    }>): CreateApiCacheResponse {
        return this.client.createApiCache(
            this.ops["CreateApiCache"].apply(partialParams)
        );
    }

    invokeCreateApiKey(partialParams: ToOptional<{
      [K in keyof CreateApiKeyRequest & keyof CreateApiKeyRequest & keyof CreateApiKeyRequest & keyof CreateApiKeyRequest & keyof CreateApiKeyRequest & keyof CreateApiKeyRequest]: (CreateApiKeyRequest & CreateApiKeyRequest & CreateApiKeyRequest & CreateApiKeyRequest & CreateApiKeyRequest & CreateApiKeyRequest)[K]
    }>): CreateApiKeyResponse {
        return this.client.createApiKey(
            this.ops["CreateApiKey"].apply(partialParams)
        );
    }

    invokeCreateDataSource(partialParams: ToOptional<{
      [K in keyof CreateDataSourceRequest & keyof CreateDataSourceRequest & keyof CreateDataSourceRequest & keyof CreateDataSourceRequest & keyof CreateDataSourceRequest & keyof CreateDataSourceRequest]: (CreateDataSourceRequest & CreateDataSourceRequest & CreateDataSourceRequest & CreateDataSourceRequest & CreateDataSourceRequest & CreateDataSourceRequest)[K]
    }>): CreateDataSourceResponse {
        return this.client.createDataSource(
            this.ops["CreateDataSource"].apply(partialParams)
        );
    }

    invokeCreateDomainName(partialParams: ToOptional<{
      [K in keyof CreateDomainNameRequest & keyof CreateDomainNameRequest & keyof CreateDomainNameRequest & keyof CreateDomainNameRequest & keyof CreateDomainNameRequest & keyof CreateDomainNameRequest]: (CreateDomainNameRequest & CreateDomainNameRequest & CreateDomainNameRequest & CreateDomainNameRequest & CreateDomainNameRequest & CreateDomainNameRequest)[K]
    }>): CreateDomainNameResponse {
        return this.client.createDomainName(
            this.ops["CreateDomainName"].apply(partialParams)
        );
    }

    invokeCreateFunction(partialParams: ToOptional<{
      [K in keyof CreateFunctionRequest & keyof CreateFunctionRequest & keyof CreateFunctionRequest & keyof CreateFunctionRequest & keyof CreateFunctionRequest & keyof CreateFunctionRequest]: (CreateFunctionRequest & CreateFunctionRequest & CreateFunctionRequest & CreateFunctionRequest & CreateFunctionRequest & CreateFunctionRequest)[K]
    }>): CreateFunctionResponse {
        return this.client.createFunction(
            this.ops["CreateFunction"].apply(partialParams)
        );
    }

    invokeCreateGraphqlApi(partialParams: ToOptional<{
      [K in keyof CreateGraphqlApiRequest & keyof CreateGraphqlApiRequest & keyof CreateGraphqlApiRequest & keyof CreateGraphqlApiRequest & keyof CreateGraphqlApiRequest & keyof CreateGraphqlApiRequest]: (CreateGraphqlApiRequest & CreateGraphqlApiRequest & CreateGraphqlApiRequest & CreateGraphqlApiRequest & CreateGraphqlApiRequest & CreateGraphqlApiRequest)[K]
    }>): CreateGraphqlApiResponse {
        return this.client.createGraphqlApi(
            this.ops["CreateGraphqlApi"].apply(partialParams)
        );
    }

    invokeCreateResolver(partialParams: ToOptional<{
      [K in keyof CreateResolverRequest & keyof CreateResolverRequest & keyof CreateResolverRequest & keyof CreateResolverRequest & keyof CreateResolverRequest & keyof CreateResolverRequest]: (CreateResolverRequest & CreateResolverRequest & CreateResolverRequest & CreateResolverRequest & CreateResolverRequest & CreateResolverRequest)[K]
    }>): CreateResolverResponse {
        return this.client.createResolver(
            this.ops["CreateResolver"].apply(partialParams)
        );
    }

    invokeCreateType(partialParams: ToOptional<{
      [K in keyof CreateTypeRequest & keyof CreateTypeRequest & keyof CreateTypeRequest & keyof CreateTypeRequest & keyof CreateTypeRequest & keyof CreateTypeRequest]: (CreateTypeRequest & CreateTypeRequest & CreateTypeRequest & CreateTypeRequest & CreateTypeRequest & CreateTypeRequest)[K]
    }>): CreateTypeResponse {
        return this.client.createType(
            this.ops["CreateType"].apply(partialParams)
        );
    }

    invokeDeleteApiCache(partialParams: ToOptional<{
      [K in keyof DeleteApiCacheRequest & keyof DeleteApiCacheRequest & keyof DeleteApiCacheRequest & keyof DeleteApiCacheRequest & keyof DeleteApiCacheRequest & keyof DeleteApiCacheRequest]: (DeleteApiCacheRequest & DeleteApiCacheRequest & DeleteApiCacheRequest & DeleteApiCacheRequest & DeleteApiCacheRequest & DeleteApiCacheRequest)[K]
    }>): DeleteApiCacheResponse {
        return this.client.deleteApiCache(
            this.ops["DeleteApiCache"].apply(partialParams)
        );
    }

    invokeDeleteApiKey(partialParams: ToOptional<{
      [K in keyof DeleteApiKeyRequest & keyof DeleteApiKeyRequest & keyof DeleteApiKeyRequest & keyof DeleteApiKeyRequest & keyof DeleteApiKeyRequest & keyof DeleteApiKeyRequest]: (DeleteApiKeyRequest & DeleteApiKeyRequest & DeleteApiKeyRequest & DeleteApiKeyRequest & DeleteApiKeyRequest & DeleteApiKeyRequest)[K]
    }>): DeleteApiKeyResponse {
        return this.client.deleteApiKey(
            this.ops["DeleteApiKey"].apply(partialParams)
        );
    }

    invokeDeleteDataSource(partialParams: ToOptional<{
      [K in keyof DeleteDataSourceRequest & keyof DeleteDataSourceRequest & keyof DeleteDataSourceRequest & keyof DeleteDataSourceRequest & keyof DeleteDataSourceRequest & keyof DeleteDataSourceRequest]: (DeleteDataSourceRequest & DeleteDataSourceRequest & DeleteDataSourceRequest & DeleteDataSourceRequest & DeleteDataSourceRequest & DeleteDataSourceRequest)[K]
    }>): DeleteDataSourceResponse {
        return this.client.deleteDataSource(
            this.ops["DeleteDataSource"].apply(partialParams)
        );
    }

    invokeDeleteDomainName(partialParams: ToOptional<{
      [K in keyof DeleteDomainNameRequest & keyof DeleteDomainNameRequest & keyof DeleteDomainNameRequest & keyof DeleteDomainNameRequest & keyof DeleteDomainNameRequest & keyof DeleteDomainNameRequest]: (DeleteDomainNameRequest & DeleteDomainNameRequest & DeleteDomainNameRequest & DeleteDomainNameRequest & DeleteDomainNameRequest & DeleteDomainNameRequest)[K]
    }>): DeleteDomainNameResponse {
        return this.client.deleteDomainName(
            this.ops["DeleteDomainName"].apply(partialParams)
        );
    }

    invokeDeleteFunction(partialParams: ToOptional<{
      [K in keyof DeleteFunctionRequest & keyof DeleteFunctionRequest & keyof DeleteFunctionRequest & keyof DeleteFunctionRequest & keyof DeleteFunctionRequest & keyof DeleteFunctionRequest]: (DeleteFunctionRequest & DeleteFunctionRequest & DeleteFunctionRequest & DeleteFunctionRequest & DeleteFunctionRequest & DeleteFunctionRequest)[K]
    }>): DeleteFunctionResponse {
        return this.client.deleteFunction(
            this.ops["DeleteFunction"].apply(partialParams)
        );
    }

    invokeDeleteGraphqlApi(partialParams: ToOptional<{
      [K in keyof DeleteGraphqlApiRequest & keyof DeleteGraphqlApiRequest & keyof DeleteGraphqlApiRequest & keyof DeleteGraphqlApiRequest & keyof DeleteGraphqlApiRequest & keyof DeleteGraphqlApiRequest]: (DeleteGraphqlApiRequest & DeleteGraphqlApiRequest & DeleteGraphqlApiRequest & DeleteGraphqlApiRequest & DeleteGraphqlApiRequest & DeleteGraphqlApiRequest)[K]
    }>): DeleteGraphqlApiResponse {
        return this.client.deleteGraphqlApi(
            this.ops["DeleteGraphqlApi"].apply(partialParams)
        );
    }

    invokeDeleteResolver(partialParams: ToOptional<{
      [K in keyof DeleteResolverRequest & keyof DeleteResolverRequest & keyof DeleteResolverRequest & keyof DeleteResolverRequest & keyof DeleteResolverRequest & keyof DeleteResolverRequest]: (DeleteResolverRequest & DeleteResolverRequest & DeleteResolverRequest & DeleteResolverRequest & DeleteResolverRequest & DeleteResolverRequest)[K]
    }>): DeleteResolverResponse {
        return this.client.deleteResolver(
            this.ops["DeleteResolver"].apply(partialParams)
        );
    }

    invokeDeleteType(partialParams: ToOptional<{
      [K in keyof DeleteTypeRequest & keyof DeleteTypeRequest & keyof DeleteTypeRequest & keyof DeleteTypeRequest & keyof DeleteTypeRequest & keyof DeleteTypeRequest]: (DeleteTypeRequest & DeleteTypeRequest & DeleteTypeRequest & DeleteTypeRequest & DeleteTypeRequest & DeleteTypeRequest)[K]
    }>): DeleteTypeResponse {
        return this.client.deleteType(
            this.ops["DeleteType"].apply(partialParams)
        );
    }

    invokeDisassociateApi(partialParams: ToOptional<{
      [K in keyof DisassociateApiRequest & keyof DisassociateApiRequest & keyof DisassociateApiRequest & keyof DisassociateApiRequest & keyof DisassociateApiRequest & keyof DisassociateApiRequest]: (DisassociateApiRequest & DisassociateApiRequest & DisassociateApiRequest & DisassociateApiRequest & DisassociateApiRequest & DisassociateApiRequest)[K]
    }>): DisassociateApiResponse {
        return this.client.disassociateApi(
            this.ops["DisassociateApi"].apply(partialParams)
        );
    }

    invokeFlushApiCache(partialParams: ToOptional<{
      [K in keyof FlushApiCacheRequest & keyof FlushApiCacheRequest & keyof FlushApiCacheRequest & keyof FlushApiCacheRequest & keyof FlushApiCacheRequest & keyof FlushApiCacheRequest]: (FlushApiCacheRequest & FlushApiCacheRequest & FlushApiCacheRequest & FlushApiCacheRequest & FlushApiCacheRequest & FlushApiCacheRequest)[K]
    }>): FlushApiCacheResponse {
        return this.client.flushApiCache(
            this.ops["FlushApiCache"].apply(partialParams)
        );
    }

    invokeGetApiAssociation(partialParams: ToOptional<{
      [K in keyof GetApiAssociationRequest & keyof GetApiAssociationRequest & keyof GetApiAssociationRequest & keyof GetApiAssociationRequest & keyof GetApiAssociationRequest & keyof GetApiAssociationRequest]: (GetApiAssociationRequest & GetApiAssociationRequest & GetApiAssociationRequest & GetApiAssociationRequest & GetApiAssociationRequest & GetApiAssociationRequest)[K]
    }>): GetApiAssociationResponse {
        return this.client.getApiAssociation(
            this.ops["GetApiAssociation"].apply(partialParams)
        );
    }

    invokeGetApiCache(partialParams: ToOptional<{
      [K in keyof GetApiCacheRequest & keyof GetApiCacheRequest & keyof GetApiCacheRequest & keyof GetApiCacheRequest & keyof GetApiCacheRequest & keyof GetApiCacheRequest]: (GetApiCacheRequest & GetApiCacheRequest & GetApiCacheRequest & GetApiCacheRequest & GetApiCacheRequest & GetApiCacheRequest)[K]
    }>): GetApiCacheResponse {
        return this.client.getApiCache(
            this.ops["GetApiCache"].apply(partialParams)
        );
    }

    invokeGetDataSource(partialParams: ToOptional<{
      [K in keyof GetDataSourceRequest & keyof GetDataSourceRequest & keyof GetDataSourceRequest & keyof GetDataSourceRequest & keyof GetDataSourceRequest & keyof GetDataSourceRequest]: (GetDataSourceRequest & GetDataSourceRequest & GetDataSourceRequest & GetDataSourceRequest & GetDataSourceRequest & GetDataSourceRequest)[K]
    }>): GetDataSourceResponse {
        return this.client.getDataSource(
            this.ops["GetDataSource"].apply(partialParams)
        );
    }

    invokeGetDomainName(partialParams: ToOptional<{
      [K in keyof GetDomainNameRequest & keyof GetDomainNameRequest & keyof GetDomainNameRequest & keyof GetDomainNameRequest & keyof GetDomainNameRequest & keyof GetDomainNameRequest]: (GetDomainNameRequest & GetDomainNameRequest & GetDomainNameRequest & GetDomainNameRequest & GetDomainNameRequest & GetDomainNameRequest)[K]
    }>): GetDomainNameResponse {
        return this.client.getDomainName(
            this.ops["GetDomainName"].apply(partialParams)
        );
    }

    invokeGetFunction(partialParams: ToOptional<{
      [K in keyof GetFunctionRequest & keyof GetFunctionRequest & keyof GetFunctionRequest & keyof GetFunctionRequest & keyof GetFunctionRequest & keyof GetFunctionRequest]: (GetFunctionRequest & GetFunctionRequest & GetFunctionRequest & GetFunctionRequest & GetFunctionRequest & GetFunctionRequest)[K]
    }>): GetFunctionResponse {
        return this.client.getFunction(
            this.ops["GetFunction"].apply(partialParams)
        );
    }

    invokeGetGraphqlApi(partialParams: ToOptional<{
      [K in keyof GetGraphqlApiRequest & keyof GetGraphqlApiRequest & keyof GetGraphqlApiRequest & keyof GetGraphqlApiRequest & keyof GetGraphqlApiRequest & keyof GetGraphqlApiRequest]: (GetGraphqlApiRequest & GetGraphqlApiRequest & GetGraphqlApiRequest & GetGraphqlApiRequest & GetGraphqlApiRequest & GetGraphqlApiRequest)[K]
    }>): GetGraphqlApiResponse {
        return this.client.getGraphqlApi(
            this.ops["GetGraphqlApi"].apply(partialParams)
        );
    }

    invokeGetIntrospectionSchema(partialParams: ToOptional<{
      [K in keyof GetIntrospectionSchemaRequest & keyof GetIntrospectionSchemaRequest & keyof GetIntrospectionSchemaRequest & keyof GetIntrospectionSchemaRequest & keyof GetIntrospectionSchemaRequest & keyof GetIntrospectionSchemaRequest]: (GetIntrospectionSchemaRequest & GetIntrospectionSchemaRequest & GetIntrospectionSchemaRequest & GetIntrospectionSchemaRequest & GetIntrospectionSchemaRequest & GetIntrospectionSchemaRequest)[K]
    }>): GetIntrospectionSchemaResponse {
        return this.client.getIntrospectionSchema(
            this.ops["GetIntrospectionSchema"].apply(partialParams)
        );
    }

    invokeGetResolver(partialParams: ToOptional<{
      [K in keyof GetResolverRequest & keyof GetResolverRequest & keyof GetResolverRequest & keyof GetResolverRequest & keyof GetResolverRequest & keyof GetResolverRequest]: (GetResolverRequest & GetResolverRequest & GetResolverRequest & GetResolverRequest & GetResolverRequest & GetResolverRequest)[K]
    }>): GetResolverResponse {
        return this.client.getResolver(
            this.ops["GetResolver"].apply(partialParams)
        );
    }

    invokeGetSchemaCreationStatus(partialParams: ToOptional<{
      [K in keyof GetSchemaCreationStatusRequest & keyof GetSchemaCreationStatusRequest & keyof GetSchemaCreationStatusRequest & keyof GetSchemaCreationStatusRequest & keyof GetSchemaCreationStatusRequest & keyof GetSchemaCreationStatusRequest]: (GetSchemaCreationStatusRequest & GetSchemaCreationStatusRequest & GetSchemaCreationStatusRequest & GetSchemaCreationStatusRequest & GetSchemaCreationStatusRequest & GetSchemaCreationStatusRequest)[K]
    }>): GetSchemaCreationStatusResponse {
        return this.client.getSchemaCreationStatus(
            this.ops["GetSchemaCreationStatus"].apply(partialParams)
        );
    }

    invokeGetType(partialParams: ToOptional<{
      [K in keyof GetTypeRequest & keyof GetTypeRequest & keyof GetTypeRequest & keyof GetTypeRequest & keyof GetTypeRequest & keyof GetTypeRequest]: (GetTypeRequest & GetTypeRequest & GetTypeRequest & GetTypeRequest & GetTypeRequest & GetTypeRequest)[K]
    }>): GetTypeResponse {
        return this.client.getType(
            this.ops["GetType"].apply(partialParams)
        );
    }

    invokeListApiKeys(partialParams: ToOptional<{
      [K in keyof ListApiKeysRequest & keyof ListApiKeysRequest & keyof ListApiKeysRequest & keyof ListApiKeysRequest & keyof ListApiKeysRequest & keyof ListApiKeysRequest]: (ListApiKeysRequest & ListApiKeysRequest & ListApiKeysRequest & ListApiKeysRequest & ListApiKeysRequest & ListApiKeysRequest)[K]
    }>): ListApiKeysResponse {
        return this.client.listApiKeys(
            this.ops["ListApiKeys"].apply(partialParams)
        );
    }

    invokeListDataSources(partialParams: ToOptional<{
      [K in keyof ListDataSourcesRequest & keyof ListDataSourcesRequest & keyof ListDataSourcesRequest & keyof ListDataSourcesRequest & keyof ListDataSourcesRequest & keyof ListDataSourcesRequest]: (ListDataSourcesRequest & ListDataSourcesRequest & ListDataSourcesRequest & ListDataSourcesRequest & ListDataSourcesRequest & ListDataSourcesRequest)[K]
    }>): ListDataSourcesResponse {
        return this.client.listDataSources(
            this.ops["ListDataSources"].apply(partialParams)
        );
    }

    invokeListFunctions(partialParams: ToOptional<{
      [K in keyof ListFunctionsRequest & keyof ListFunctionsRequest & keyof ListFunctionsRequest & keyof ListFunctionsRequest & keyof ListFunctionsRequest & keyof ListFunctionsRequest]: (ListFunctionsRequest & ListFunctionsRequest & ListFunctionsRequest & ListFunctionsRequest & ListFunctionsRequest & ListFunctionsRequest)[K]
    }>): ListFunctionsResponse {
        return this.client.listFunctions(
            this.ops["ListFunctions"].apply(partialParams)
        );
    }

    invokeListResolvers(partialParams: ToOptional<{
      [K in keyof ListResolversRequest & keyof ListResolversRequest & keyof ListResolversRequest & keyof ListResolversRequest & keyof ListResolversRequest & keyof ListResolversRequest]: (ListResolversRequest & ListResolversRequest & ListResolversRequest & ListResolversRequest & ListResolversRequest & ListResolversRequest)[K]
    }>): ListResolversResponse {
        return this.client.listResolvers(
            this.ops["ListResolvers"].apply(partialParams)
        );
    }

    invokeListResolversByFunction(partialParams: ToOptional<{
      [K in keyof ListResolversByFunctionRequest & keyof ListResolversByFunctionRequest & keyof ListResolversByFunctionRequest & keyof ListResolversByFunctionRequest & keyof ListResolversByFunctionRequest & keyof ListResolversByFunctionRequest]: (ListResolversByFunctionRequest & ListResolversByFunctionRequest & ListResolversByFunctionRequest & ListResolversByFunctionRequest & ListResolversByFunctionRequest & ListResolversByFunctionRequest)[K]
    }>): ListResolversByFunctionResponse {
        return this.client.listResolversByFunction(
            this.ops["ListResolversByFunction"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeListTypes(partialParams: ToOptional<{
      [K in keyof ListTypesRequest & keyof ListTypesRequest & keyof ListTypesRequest & keyof ListTypesRequest & keyof ListTypesRequest & keyof ListTypesRequest]: (ListTypesRequest & ListTypesRequest & ListTypesRequest & ListTypesRequest & ListTypesRequest & ListTypesRequest)[K]
    }>): ListTypesResponse {
        return this.client.listTypes(
            this.ops["ListTypes"].apply(partialParams)
        );
    }

    invokeStartSchemaCreation(partialParams: ToOptional<{
      [K in keyof StartSchemaCreationRequest & keyof StartSchemaCreationRequest & keyof StartSchemaCreationRequest & keyof StartSchemaCreationRequest & keyof StartSchemaCreationRequest & keyof StartSchemaCreationRequest]: (StartSchemaCreationRequest & StartSchemaCreationRequest & StartSchemaCreationRequest & StartSchemaCreationRequest & StartSchemaCreationRequest & StartSchemaCreationRequest)[K]
    }>): StartSchemaCreationResponse {
        return this.client.startSchemaCreation(
            this.ops["StartSchemaCreation"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateApiCache(partialParams: ToOptional<{
      [K in keyof Omit<UpdateApiCacheRequest, "apiId"> & keyof UpdateApiCacheRequest & keyof UpdateApiCacheRequest & keyof UpdateApiCacheRequest & keyof UpdateApiCacheRequest & keyof Omit<UpdateApiCacheRequest, "type">]: (Omit<UpdateApiCacheRequest, "apiId"> & UpdateApiCacheRequest & UpdateApiCacheRequest & UpdateApiCacheRequest & UpdateApiCacheRequest & Omit<UpdateApiCacheRequest, "type">)[K]
    }>): UpdateApiCacheResponse {
        return this.client.updateApiCache(
            this.ops["UpdateApiCache"].apply(partialParams)
        );
    }

    invokeUpdateApiKey(partialParams: ToOptional<{
      [K in keyof Omit<UpdateApiKeyRequest, "apiId"> & keyof UpdateApiKeyRequest & keyof UpdateApiKeyRequest & keyof UpdateApiKeyRequest & keyof UpdateApiKeyRequest & keyof UpdateApiKeyRequest]: (Omit<UpdateApiKeyRequest, "apiId"> & UpdateApiKeyRequest & UpdateApiKeyRequest & UpdateApiKeyRequest & UpdateApiKeyRequest & UpdateApiKeyRequest)[K]
    }>): UpdateApiKeyResponse {
        return this.client.updateApiKey(
            this.ops["UpdateApiKey"].apply(partialParams)
        );
    }

    invokeUpdateDataSource(partialParams: ToOptional<{
      [K in keyof Omit<UpdateDataSourceRequest, "apiId"> & keyof UpdateDataSourceRequest & keyof UpdateDataSourceRequest & keyof Omit<UpdateDataSourceRequest, "name"> & keyof UpdateDataSourceRequest & keyof Omit<UpdateDataSourceRequest, "type">]: (Omit<UpdateDataSourceRequest, "apiId"> & UpdateDataSourceRequest & UpdateDataSourceRequest & Omit<UpdateDataSourceRequest, "name"> & UpdateDataSourceRequest & Omit<UpdateDataSourceRequest, "type">)[K]
    }>): UpdateDataSourceResponse {
        return this.client.updateDataSource(
            this.ops["UpdateDataSource"].apply(partialParams)
        );
    }

    invokeUpdateDomainName(partialParams: ToOptional<{
      [K in keyof UpdateDomainNameRequest & keyof UpdateDomainNameRequest & keyof UpdateDomainNameRequest & keyof UpdateDomainNameRequest & keyof UpdateDomainNameRequest & keyof UpdateDomainNameRequest]: (UpdateDomainNameRequest & UpdateDomainNameRequest & UpdateDomainNameRequest & UpdateDomainNameRequest & UpdateDomainNameRequest & UpdateDomainNameRequest)[K]
    }>): UpdateDomainNameResponse {
        return this.client.updateDomainName(
            this.ops["UpdateDomainName"].apply(partialParams)
        );
    }

    invokeUpdateFunction(partialParams: ToOptional<{
      [K in keyof Omit<UpdateFunctionRequest, "apiId"> & keyof UpdateFunctionRequest & keyof UpdateFunctionRequest & keyof Omit<UpdateFunctionRequest, "name"> & keyof UpdateFunctionRequest & keyof UpdateFunctionRequest]: (Omit<UpdateFunctionRequest, "apiId"> & UpdateFunctionRequest & UpdateFunctionRequest & Omit<UpdateFunctionRequest, "name"> & UpdateFunctionRequest & UpdateFunctionRequest)[K]
    }>): UpdateFunctionResponse {
        return this.client.updateFunction(
            this.ops["UpdateFunction"].apply(partialParams)
        );
    }

    invokeUpdateGraphqlApi(partialParams: ToOptional<{
      [K in keyof Omit<UpdateGraphqlApiRequest, "apiId"> & keyof UpdateGraphqlApiRequest & keyof UpdateGraphqlApiRequest & keyof Omit<UpdateGraphqlApiRequest, "name"> & keyof UpdateGraphqlApiRequest & keyof UpdateGraphqlApiRequest]: (Omit<UpdateGraphqlApiRequest, "apiId"> & UpdateGraphqlApiRequest & UpdateGraphqlApiRequest & Omit<UpdateGraphqlApiRequest, "name"> & UpdateGraphqlApiRequest & UpdateGraphqlApiRequest)[K]
    }>): UpdateGraphqlApiResponse {
        return this.client.updateGraphqlApi(
            this.ops["UpdateGraphqlApi"].apply(partialParams)
        );
    }

    invokeUpdateResolver(partialParams: ToOptional<{
      [K in keyof Omit<UpdateResolverRequest, "apiId"> & keyof UpdateResolverRequest & keyof UpdateResolverRequest & keyof UpdateResolverRequest & keyof UpdateResolverRequest & keyof UpdateResolverRequest]: (Omit<UpdateResolverRequest, "apiId"> & UpdateResolverRequest & UpdateResolverRequest & UpdateResolverRequest & UpdateResolverRequest & UpdateResolverRequest)[K]
    }>): UpdateResolverResponse {
        return this.client.updateResolver(
            this.ops["UpdateResolver"].apply(partialParams)
        );
    }

    invokeUpdateType(partialParams: ToOptional<{
      [K in keyof Omit<UpdateTypeRequest, "apiId"> & keyof UpdateTypeRequest & keyof UpdateTypeRequest & keyof UpdateTypeRequest & keyof UpdateTypeRequest & keyof UpdateTypeRequest]: (Omit<UpdateTypeRequest, "apiId"> & UpdateTypeRequest & UpdateTypeRequest & UpdateTypeRequest & UpdateTypeRequest & UpdateTypeRequest)[K]
    }>): UpdateTypeResponse {
        return this.client.updateType(
            this.ops["UpdateType"].apply(partialParams)
        );
    }
}