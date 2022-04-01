
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
    ListDomainNamesRequest,
    ListFunctionsRequest,
    ListGraphqlApisRequest,
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
    ListDomainNamesResponse,
    ListFunctionsResponse,
    ListGraphqlApisResponse,
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
const schema = require("../apis/appsync-2017-07-25.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.appsync.DomainNameApiAssociation {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.appsync.DomainNameApiAssociation>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.AppSync()
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

    invokeAssociateApi(partialParams: ToOptional<{
      [K in keyof AssociateApiRequest]: (AssociateApiRequest)[K]
    }>): Request<AssociateApiResponse, AWSError> {
        this.boot();
        return this.client.associateApi(
          this.ops["AssociateApi"].apply(partialParams)
        );
    }

    invokeCreateApiCache(partialParams: ToOptional<{
      [K in keyof CreateApiCacheRequest]: (CreateApiCacheRequest)[K]
    }>): Request<CreateApiCacheResponse, AWSError> {
        this.boot();
        return this.client.createApiCache(
          this.ops["CreateApiCache"].apply(partialParams)
        );
    }

    invokeCreateApiKey(partialParams: ToOptional<{
      [K in keyof CreateApiKeyRequest]: (CreateApiKeyRequest)[K]
    }>): Request<CreateApiKeyResponse, AWSError> {
        this.boot();
        return this.client.createApiKey(
          this.ops["CreateApiKey"].apply(partialParams)
        );
    }

    invokeCreateDataSource(partialParams: ToOptional<{
      [K in keyof CreateDataSourceRequest]: (CreateDataSourceRequest)[K]
    }>): Request<CreateDataSourceResponse, AWSError> {
        this.boot();
        return this.client.createDataSource(
          this.ops["CreateDataSource"].apply(partialParams)
        );
    }

    invokeCreateDomainName(partialParams: ToOptional<{
      [K in keyof CreateDomainNameRequest]: (CreateDomainNameRequest)[K]
    }>): Request<CreateDomainNameResponse, AWSError> {
        this.boot();
        return this.client.createDomainName(
          this.ops["CreateDomainName"].apply(partialParams)
        );
    }

    invokeCreateFunction(partialParams: ToOptional<{
      [K in keyof CreateFunctionRequest]: (CreateFunctionRequest)[K]
    }>): Request<CreateFunctionResponse, AWSError> {
        this.boot();
        return this.client.createFunction(
          this.ops["CreateFunction"].apply(partialParams)
        );
    }

    invokeCreateGraphqlApi(partialParams: ToOptional<{
      [K in keyof CreateGraphqlApiRequest]: (CreateGraphqlApiRequest)[K]
    }>): Request<CreateGraphqlApiResponse, AWSError> {
        this.boot();
        return this.client.createGraphqlApi(
          this.ops["CreateGraphqlApi"].apply(partialParams)
        );
    }

    invokeCreateResolver(partialParams: ToOptional<{
      [K in keyof CreateResolverRequest]: (CreateResolverRequest)[K]
    }>): Request<CreateResolverResponse, AWSError> {
        this.boot();
        return this.client.createResolver(
          this.ops["CreateResolver"].apply(partialParams)
        );
    }

    invokeCreateType(partialParams: ToOptional<{
      [K in keyof CreateTypeRequest]: (CreateTypeRequest)[K]
    }>): Request<CreateTypeResponse, AWSError> {
        this.boot();
        return this.client.createType(
          this.ops["CreateType"].apply(partialParams)
        );
    }

    invokeDeleteApiCache(partialParams: ToOptional<{
      [K in keyof DeleteApiCacheRequest]: (DeleteApiCacheRequest)[K]
    }>): Request<DeleteApiCacheResponse, AWSError> {
        this.boot();
        return this.client.deleteApiCache(
          this.ops["DeleteApiCache"].apply(partialParams)
        );
    }

    invokeDeleteApiKey(partialParams: ToOptional<{
      [K in keyof DeleteApiKeyRequest]: (DeleteApiKeyRequest)[K]
    }>): Request<DeleteApiKeyResponse, AWSError> {
        this.boot();
        return this.client.deleteApiKey(
          this.ops["DeleteApiKey"].apply(partialParams)
        );
    }

    invokeDeleteDataSource(partialParams: ToOptional<{
      [K in keyof DeleteDataSourceRequest]: (DeleteDataSourceRequest)[K]
    }>): Request<DeleteDataSourceResponse, AWSError> {
        this.boot();
        return this.client.deleteDataSource(
          this.ops["DeleteDataSource"].apply(partialParams)
        );
    }

    invokeDeleteDomainName(partialParams: ToOptional<{
      [K in keyof DeleteDomainNameRequest]: (DeleteDomainNameRequest)[K]
    }>): Request<DeleteDomainNameResponse, AWSError> {
        this.boot();
        return this.client.deleteDomainName(
          this.ops["DeleteDomainName"].apply(partialParams)
        );
    }

    invokeDeleteFunction(partialParams: ToOptional<{
      [K in keyof DeleteFunctionRequest]: (DeleteFunctionRequest)[K]
    }>): Request<DeleteFunctionResponse, AWSError> {
        this.boot();
        return this.client.deleteFunction(
          this.ops["DeleteFunction"].apply(partialParams)
        );
    }

    invokeDeleteGraphqlApi(partialParams: ToOptional<{
      [K in keyof DeleteGraphqlApiRequest]: (DeleteGraphqlApiRequest)[K]
    }>): Request<DeleteGraphqlApiResponse, AWSError> {
        this.boot();
        return this.client.deleteGraphqlApi(
          this.ops["DeleteGraphqlApi"].apply(partialParams)
        );
    }

    invokeDeleteResolver(partialParams: ToOptional<{
      [K in keyof DeleteResolverRequest]: (DeleteResolverRequest)[K]
    }>): Request<DeleteResolverResponse, AWSError> {
        this.boot();
        return this.client.deleteResolver(
          this.ops["DeleteResolver"].apply(partialParams)
        );
    }

    invokeDeleteType(partialParams: ToOptional<{
      [K in keyof DeleteTypeRequest]: (DeleteTypeRequest)[K]
    }>): Request<DeleteTypeResponse, AWSError> {
        this.boot();
        return this.client.deleteType(
          this.ops["DeleteType"].apply(partialParams)
        );
    }

    invokeDisassociateApi(partialParams: ToOptional<{
      [K in keyof DisassociateApiRequest]: (DisassociateApiRequest)[K]
    }>): Request<DisassociateApiResponse, AWSError> {
        this.boot();
        return this.client.disassociateApi(
          this.ops["DisassociateApi"].apply(partialParams)
        );
    }

    invokeFlushApiCache(partialParams: ToOptional<{
      [K in keyof FlushApiCacheRequest]: (FlushApiCacheRequest)[K]
    }>): Request<FlushApiCacheResponse, AWSError> {
        this.boot();
        return this.client.flushApiCache(
          this.ops["FlushApiCache"].apply(partialParams)
        );
    }

    invokeGetApiAssociation(partialParams: ToOptional<{
      [K in keyof GetApiAssociationRequest]: (GetApiAssociationRequest)[K]
    }>): Request<GetApiAssociationResponse, AWSError> {
        this.boot();
        return this.client.getApiAssociation(
          this.ops["GetApiAssociation"].apply(partialParams)
        );
    }

    invokeGetApiCache(partialParams: ToOptional<{
      [K in keyof GetApiCacheRequest]: (GetApiCacheRequest)[K]
    }>): Request<GetApiCacheResponse, AWSError> {
        this.boot();
        return this.client.getApiCache(
          this.ops["GetApiCache"].apply(partialParams)
        );
    }

    invokeGetDataSource(partialParams: ToOptional<{
      [K in keyof GetDataSourceRequest]: (GetDataSourceRequest)[K]
    }>): Request<GetDataSourceResponse, AWSError> {
        this.boot();
        return this.client.getDataSource(
          this.ops["GetDataSource"].apply(partialParams)
        );
    }

    invokeGetDomainName(partialParams: ToOptional<{
      [K in keyof GetDomainNameRequest]: (GetDomainNameRequest)[K]
    }>): Request<GetDomainNameResponse, AWSError> {
        this.boot();
        return this.client.getDomainName(
          this.ops["GetDomainName"].apply(partialParams)
        );
    }

    invokeGetFunction(partialParams: ToOptional<{
      [K in keyof GetFunctionRequest]: (GetFunctionRequest)[K]
    }>): Request<GetFunctionResponse, AWSError> {
        this.boot();
        return this.client.getFunction(
          this.ops["GetFunction"].apply(partialParams)
        );
    }

    invokeGetGraphqlApi(partialParams: ToOptional<{
      [K in keyof GetGraphqlApiRequest]: (GetGraphqlApiRequest)[K]
    }>): Request<GetGraphqlApiResponse, AWSError> {
        this.boot();
        return this.client.getGraphqlApi(
          this.ops["GetGraphqlApi"].apply(partialParams)
        );
    }

    invokeGetIntrospectionSchema(partialParams: ToOptional<{
      [K in keyof GetIntrospectionSchemaRequest]: (GetIntrospectionSchemaRequest)[K]
    }>): Request<GetIntrospectionSchemaResponse, AWSError> {
        this.boot();
        return this.client.getIntrospectionSchema(
          this.ops["GetIntrospectionSchema"].apply(partialParams)
        );
    }

    invokeGetResolver(partialParams: ToOptional<{
      [K in keyof GetResolverRequest]: (GetResolverRequest)[K]
    }>): Request<GetResolverResponse, AWSError> {
        this.boot();
        return this.client.getResolver(
          this.ops["GetResolver"].apply(partialParams)
        );
    }

    invokeGetSchemaCreationStatus(partialParams: ToOptional<{
      [K in keyof GetSchemaCreationStatusRequest]: (GetSchemaCreationStatusRequest)[K]
    }>): Request<GetSchemaCreationStatusResponse, AWSError> {
        this.boot();
        return this.client.getSchemaCreationStatus(
          this.ops["GetSchemaCreationStatus"].apply(partialParams)
        );
    }

    invokeGetType(partialParams: ToOptional<{
      [K in keyof GetTypeRequest]: (GetTypeRequest)[K]
    }>): Request<GetTypeResponse, AWSError> {
        this.boot();
        return this.client.getType(
          this.ops["GetType"].apply(partialParams)
        );
    }

    invokeListApiKeys(partialParams: ToOptional<{
      [K in keyof ListApiKeysRequest]: (ListApiKeysRequest)[K]
    }>): Request<ListApiKeysResponse, AWSError> {
        this.boot();
        return this.client.listApiKeys(
          this.ops["ListApiKeys"].apply(partialParams)
        );
    }

    invokeListDataSources(partialParams: ToOptional<{
      [K in keyof ListDataSourcesRequest]: (ListDataSourcesRequest)[K]
    }>): Request<ListDataSourcesResponse, AWSError> {
        this.boot();
        return this.client.listDataSources(
          this.ops["ListDataSources"].apply(partialParams)
        );
    }

    invokeListDomainNames(partialParams: ToOptional<{
      [K in keyof ListDomainNamesRequest]: (ListDomainNamesRequest)[K]
    }>): Request<ListDomainNamesResponse, AWSError> {
        this.boot();
        return this.client.listDomainNames(
          this.ops["ListDomainNames"].apply(partialParams)
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

    invokeListGraphqlApis(partialParams: ToOptional<{
      [K in keyof ListGraphqlApisRequest]: (ListGraphqlApisRequest)[K]
    }>): Request<ListGraphqlApisResponse, AWSError> {
        this.boot();
        return this.client.listGraphqlApis(
          this.ops["ListGraphqlApis"].apply(partialParams)
        );
    }

    invokeListResolvers(partialParams: ToOptional<{
      [K in keyof ListResolversRequest]: (ListResolversRequest)[K]
    }>): Request<ListResolversResponse, AWSError> {
        this.boot();
        return this.client.listResolvers(
          this.ops["ListResolvers"].apply(partialParams)
        );
    }

    invokeListResolversByFunction(partialParams: ToOptional<{
      [K in keyof ListResolversByFunctionRequest]: (ListResolversByFunctionRequest)[K]
    }>): Request<ListResolversByFunctionResponse, AWSError> {
        this.boot();
        return this.client.listResolversByFunction(
          this.ops["ListResolversByFunction"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeListTypes(partialParams: ToOptional<{
      [K in keyof ListTypesRequest]: (ListTypesRequest)[K]
    }>): Request<ListTypesResponse, AWSError> {
        this.boot();
        return this.client.listTypes(
          this.ops["ListTypes"].apply(partialParams)
        );
    }

    invokeStartSchemaCreation(partialParams: ToOptional<{
      [K in keyof StartSchemaCreationRequest]: (StartSchemaCreationRequest)[K]
    }>): Request<StartSchemaCreationResponse, AWSError> {
        this.boot();
        return this.client.startSchemaCreation(
          this.ops["StartSchemaCreation"].apply(partialParams)
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

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest]: (UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateApiCache(partialParams: ToOptional<{
      [K in keyof UpdateApiCacheRequest]: (UpdateApiCacheRequest)[K]
    }>): Request<UpdateApiCacheResponse, AWSError> {
        this.boot();
        return this.client.updateApiCache(
          this.ops["UpdateApiCache"].apply(partialParams)
        );
    }

    invokeUpdateApiKey(partialParams: ToOptional<{
      [K in keyof UpdateApiKeyRequest]: (UpdateApiKeyRequest)[K]
    }>): Request<UpdateApiKeyResponse, AWSError> {
        this.boot();
        return this.client.updateApiKey(
          this.ops["UpdateApiKey"].apply(partialParams)
        );
    }

    invokeUpdateDataSource(partialParams: ToOptional<{
      [K in keyof UpdateDataSourceRequest]: (UpdateDataSourceRequest)[K]
    }>): Request<UpdateDataSourceResponse, AWSError> {
        this.boot();
        return this.client.updateDataSource(
          this.ops["UpdateDataSource"].apply(partialParams)
        );
    }

    invokeUpdateDomainName(partialParams: ToOptional<{
      [K in keyof UpdateDomainNameRequest]: (UpdateDomainNameRequest)[K]
    }>): Request<UpdateDomainNameResponse, AWSError> {
        this.boot();
        return this.client.updateDomainName(
          this.ops["UpdateDomainName"].apply(partialParams)
        );
    }

    invokeUpdateFunction(partialParams: ToOptional<{
      [K in keyof UpdateFunctionRequest]: (UpdateFunctionRequest)[K]
    }>): Request<UpdateFunctionResponse, AWSError> {
        this.boot();
        return this.client.updateFunction(
          this.ops["UpdateFunction"].apply(partialParams)
        );
    }

    invokeUpdateGraphqlApi(partialParams: ToOptional<{
      [K in keyof UpdateGraphqlApiRequest]: (UpdateGraphqlApiRequest)[K]
    }>): Request<UpdateGraphqlApiResponse, AWSError> {
        this.boot();
        return this.client.updateGraphqlApi(
          this.ops["UpdateGraphqlApi"].apply(partialParams)
        );
    }

    invokeUpdateResolver(partialParams: ToOptional<{
      [K in keyof UpdateResolverRequest]: (UpdateResolverRequest)[K]
    }>): Request<UpdateResolverResponse, AWSError> {
        this.boot();
        return this.client.updateResolver(
          this.ops["UpdateResolver"].apply(partialParams)
        );
    }

    invokeUpdateType(partialParams: ToOptional<{
      [K in keyof UpdateTypeRequest]: (UpdateTypeRequest)[K]
    }>): Request<UpdateTypeResponse, AWSError> {
        this.boot();
        return this.client.updateType(
          this.ops["UpdateType"].apply(partialParams)
        );
    }
}