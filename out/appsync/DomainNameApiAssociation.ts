
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
    constructor(...args: ConstructorParameters<typeof aws.appsync.DomainNameApiAssociation>) {
        super(...args)
        this.client = new awssdk.AppSync()
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

    invokeAssociateApi(partialParams: ToOptional<{
      [K in keyof AssociateApiRequest & keyof AssociateApiRequest]: (AssociateApiRequest & AssociateApiRequest)[K]
    }>): Request<AssociateApiResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateApi(
          this.ops["AssociateApi"].applicator.apply(partialParams)
        );
    }

    invokeCreateApiCache(partialParams: ToOptional<{
      [K in keyof CreateApiCacheRequest & keyof CreateApiCacheRequest]: (CreateApiCacheRequest & CreateApiCacheRequest)[K]
    }>): Request<CreateApiCacheResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createApiCache(
          this.ops["CreateApiCache"].applicator.apply(partialParams)
        );
    }

    invokeCreateApiKey(partialParams: ToOptional<{
      [K in keyof CreateApiKeyRequest & keyof CreateApiKeyRequest]: (CreateApiKeyRequest & CreateApiKeyRequest)[K]
    }>): Request<CreateApiKeyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createApiKey(
          this.ops["CreateApiKey"].applicator.apply(partialParams)
        );
    }

    invokeCreateDataSource(partialParams: ToOptional<{
      [K in keyof CreateDataSourceRequest & keyof CreateDataSourceRequest]: (CreateDataSourceRequest & CreateDataSourceRequest)[K]
    }>): Request<CreateDataSourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDataSource(
          this.ops["CreateDataSource"].applicator.apply(partialParams)
        );
    }

    invokeCreateDomainName(partialParams: ToOptional<{
      [K in keyof CreateDomainNameRequest & keyof CreateDomainNameRequest]: (CreateDomainNameRequest & CreateDomainNameRequest)[K]
    }>): Request<CreateDomainNameResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDomainName(
          this.ops["CreateDomainName"].applicator.apply(partialParams)
        );
    }

    invokeCreateFunction(partialParams: ToOptional<{
      [K in keyof CreateFunctionRequest & keyof CreateFunctionRequest]: (CreateFunctionRequest & CreateFunctionRequest)[K]
    }>): Request<CreateFunctionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFunction(
          this.ops["CreateFunction"].applicator.apply(partialParams)
        );
    }

    invokeCreateGraphqlApi(partialParams: ToOptional<{
      [K in keyof CreateGraphqlApiRequest & keyof CreateGraphqlApiRequest]: (CreateGraphqlApiRequest & CreateGraphqlApiRequest)[K]
    }>): Request<CreateGraphqlApiResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createGraphqlApi(
          this.ops["CreateGraphqlApi"].applicator.apply(partialParams)
        );
    }

    invokeCreateResolver(partialParams: ToOptional<{
      [K in keyof CreateResolverRequest & keyof CreateResolverRequest]: (CreateResolverRequest & CreateResolverRequest)[K]
    }>): Request<CreateResolverResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createResolver(
          this.ops["CreateResolver"].applicator.apply(partialParams)
        );
    }

    invokeCreateType(partialParams: ToOptional<{
      [K in keyof CreateTypeRequest & keyof CreateTypeRequest]: (CreateTypeRequest & CreateTypeRequest)[K]
    }>): Request<CreateTypeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createType(
          this.ops["CreateType"].applicator.apply(partialParams)
        );
    }

    invokeDeleteApiCache(partialParams: ToOptional<{
      [K in keyof DeleteApiCacheRequest & keyof DeleteApiCacheRequest]: (DeleteApiCacheRequest & DeleteApiCacheRequest)[K]
    }>): Request<DeleteApiCacheResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApiCache(
          this.ops["DeleteApiCache"].applicator.apply(partialParams)
        );
    }

    invokeDeleteApiKey(partialParams: ToOptional<{
      [K in keyof DeleteApiKeyRequest & keyof DeleteApiKeyRequest]: (DeleteApiKeyRequest & DeleteApiKeyRequest)[K]
    }>): Request<DeleteApiKeyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApiKey(
          this.ops["DeleteApiKey"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDataSource(partialParams: ToOptional<{
      [K in keyof DeleteDataSourceRequest & keyof DeleteDataSourceRequest]: (DeleteDataSourceRequest & DeleteDataSourceRequest)[K]
    }>): Request<DeleteDataSourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDataSource(
          this.ops["DeleteDataSource"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDomainName(partialParams: ToOptional<{
      [K in keyof DeleteDomainNameRequest & keyof DeleteDomainNameRequest]: (DeleteDomainNameRequest & DeleteDomainNameRequest)[K]
    }>): Request<DeleteDomainNameResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDomainName(
          this.ops["DeleteDomainName"].applicator.apply(partialParams)
        );
    }

    invokeDeleteFunction(partialParams: ToOptional<{
      [K in keyof DeleteFunctionRequest & keyof DeleteFunctionRequest]: (DeleteFunctionRequest & DeleteFunctionRequest)[K]
    }>): Request<DeleteFunctionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFunction(
          this.ops["DeleteFunction"].applicator.apply(partialParams)
        );
    }

    invokeDeleteGraphqlApi(partialParams: ToOptional<{
      [K in keyof DeleteGraphqlApiRequest & keyof DeleteGraphqlApiRequest]: (DeleteGraphqlApiRequest & DeleteGraphqlApiRequest)[K]
    }>): Request<DeleteGraphqlApiResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteGraphqlApi(
          this.ops["DeleteGraphqlApi"].applicator.apply(partialParams)
        );
    }

    invokeDeleteResolver(partialParams: ToOptional<{
      [K in keyof DeleteResolverRequest & keyof DeleteResolverRequest]: (DeleteResolverRequest & DeleteResolverRequest)[K]
    }>): Request<DeleteResolverResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteResolver(
          this.ops["DeleteResolver"].applicator.apply(partialParams)
        );
    }

    invokeDeleteType(partialParams: ToOptional<{
      [K in keyof DeleteTypeRequest & keyof DeleteTypeRequest]: (DeleteTypeRequest & DeleteTypeRequest)[K]
    }>): Request<DeleteTypeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteType(
          this.ops["DeleteType"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateApi(partialParams: ToOptional<{
      [K in keyof DisassociateApiRequest & keyof DisassociateApiRequest]: (DisassociateApiRequest & DisassociateApiRequest)[K]
    }>): Request<DisassociateApiResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateApi(
          this.ops["DisassociateApi"].applicator.apply(partialParams)
        );
    }

    invokeFlushApiCache(partialParams: ToOptional<{
      [K in keyof FlushApiCacheRequest & keyof FlushApiCacheRequest]: (FlushApiCacheRequest & FlushApiCacheRequest)[K]
    }>): Request<FlushApiCacheResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.flushApiCache(
          this.ops["FlushApiCache"].applicator.apply(partialParams)
        );
    }

    invokeGetApiAssociation(partialParams: ToOptional<{
      [K in keyof GetApiAssociationRequest & keyof Omit<GetApiAssociationRequest, "domainName">]: (GetApiAssociationRequest & Omit<GetApiAssociationRequest, "domainName">)[K]
    }>): Request<GetApiAssociationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getApiAssociation(
          this.ops["GetApiAssociation"].applicator.apply(partialParams)
        );
    }

    invokeGetApiCache(partialParams: ToOptional<{
      [K in keyof GetApiCacheRequest & keyof GetApiCacheRequest]: (GetApiCacheRequest & GetApiCacheRequest)[K]
    }>): Request<GetApiCacheResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getApiCache(
          this.ops["GetApiCache"].applicator.apply(partialParams)
        );
    }

    invokeGetDataSource(partialParams: ToOptional<{
      [K in keyof GetDataSourceRequest & keyof GetDataSourceRequest]: (GetDataSourceRequest & GetDataSourceRequest)[K]
    }>): Request<GetDataSourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDataSource(
          this.ops["GetDataSource"].applicator.apply(partialParams)
        );
    }

    invokeGetDomainName(partialParams: ToOptional<{
      [K in keyof GetDomainNameRequest & keyof Omit<GetDomainNameRequest, "domainName">]: (GetDomainNameRequest & Omit<GetDomainNameRequest, "domainName">)[K]
    }>): Request<GetDomainNameResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDomainName(
          this.ops["GetDomainName"].applicator.apply(partialParams)
        );
    }

    invokeGetFunction(partialParams: ToOptional<{
      [K in keyof GetFunctionRequest & keyof GetFunctionRequest]: (GetFunctionRequest & GetFunctionRequest)[K]
    }>): Request<GetFunctionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFunction(
          this.ops["GetFunction"].applicator.apply(partialParams)
        );
    }

    invokeGetGraphqlApi(partialParams: ToOptional<{
      [K in keyof GetGraphqlApiRequest & keyof GetGraphqlApiRequest]: (GetGraphqlApiRequest & GetGraphqlApiRequest)[K]
    }>): Request<GetGraphqlApiResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getGraphqlApi(
          this.ops["GetGraphqlApi"].applicator.apply(partialParams)
        );
    }

    invokeGetIntrospectionSchema(partialParams: ToOptional<{
      [K in keyof GetIntrospectionSchemaRequest & keyof GetIntrospectionSchemaRequest]: (GetIntrospectionSchemaRequest & GetIntrospectionSchemaRequest)[K]
    }>): Request<GetIntrospectionSchemaResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getIntrospectionSchema(
          this.ops["GetIntrospectionSchema"].applicator.apply(partialParams)
        );
    }

    invokeGetResolver(partialParams: ToOptional<{
      [K in keyof GetResolverRequest & keyof GetResolverRequest]: (GetResolverRequest & GetResolverRequest)[K]
    }>): Request<GetResolverResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getResolver(
          this.ops["GetResolver"].applicator.apply(partialParams)
        );
    }

    invokeGetSchemaCreationStatus(partialParams: ToOptional<{
      [K in keyof GetSchemaCreationStatusRequest & keyof GetSchemaCreationStatusRequest]: (GetSchemaCreationStatusRequest & GetSchemaCreationStatusRequest)[K]
    }>): Request<GetSchemaCreationStatusResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSchemaCreationStatus(
          this.ops["GetSchemaCreationStatus"].applicator.apply(partialParams)
        );
    }

    invokeGetType(partialParams: ToOptional<{
      [K in keyof GetTypeRequest & keyof GetTypeRequest]: (GetTypeRequest & GetTypeRequest)[K]
    }>): Request<GetTypeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getType(
          this.ops["GetType"].applicator.apply(partialParams)
        );
    }

    invokeListApiKeys(partialParams: ToOptional<{
      [K in keyof ListApiKeysRequest & keyof ListApiKeysRequest]: (ListApiKeysRequest & ListApiKeysRequest)[K]
    }>): Request<ListApiKeysResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listApiKeys(
          this.ops["ListApiKeys"].applicator.apply(partialParams)
        );
    }

    invokeListDataSources(partialParams: ToOptional<{
      [K in keyof ListDataSourcesRequest & keyof ListDataSourcesRequest]: (ListDataSourcesRequest & ListDataSourcesRequest)[K]
    }>): Request<ListDataSourcesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDataSources(
          this.ops["ListDataSources"].applicator.apply(partialParams)
        );
    }

    invokeListFunctions(partialParams: ToOptional<{
      [K in keyof ListFunctionsRequest & keyof ListFunctionsRequest]: (ListFunctionsRequest & ListFunctionsRequest)[K]
    }>): Request<ListFunctionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listFunctions(
          this.ops["ListFunctions"].applicator.apply(partialParams)
        );
    }

    invokeListResolvers(partialParams: ToOptional<{
      [K in keyof ListResolversRequest & keyof ListResolversRequest]: (ListResolversRequest & ListResolversRequest)[K]
    }>): Request<ListResolversResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listResolvers(
          this.ops["ListResolvers"].applicator.apply(partialParams)
        );
    }

    invokeListResolversByFunction(partialParams: ToOptional<{
      [K in keyof ListResolversByFunctionRequest & keyof ListResolversByFunctionRequest]: (ListResolversByFunctionRequest & ListResolversByFunctionRequest)[K]
    }>): Request<ListResolversByFunctionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listResolversByFunction(
          this.ops["ListResolversByFunction"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeListTypes(partialParams: ToOptional<{
      [K in keyof ListTypesRequest & keyof ListTypesRequest]: (ListTypesRequest & ListTypesRequest)[K]
    }>): Request<ListTypesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTypes(
          this.ops["ListTypes"].applicator.apply(partialParams)
        );
    }

    invokeStartSchemaCreation(partialParams: ToOptional<{
      [K in keyof StartSchemaCreationRequest & keyof StartSchemaCreationRequest]: (StartSchemaCreationRequest & StartSchemaCreationRequest)[K]
    }>): Request<StartSchemaCreationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startSchemaCreation(
          this.ops["StartSchemaCreation"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateApiCache(partialParams: ToOptional<{
      [K in keyof Omit<UpdateApiCacheRequest, "apiId"> & keyof UpdateApiCacheRequest]: (Omit<UpdateApiCacheRequest, "apiId"> & UpdateApiCacheRequest)[K]
    }>): Request<UpdateApiCacheResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApiCache(
          this.ops["UpdateApiCache"].applicator.apply(partialParams)
        );
    }

    invokeUpdateApiKey(partialParams: ToOptional<{
      [K in keyof Omit<UpdateApiKeyRequest, "apiId"> & keyof UpdateApiKeyRequest]: (Omit<UpdateApiKeyRequest, "apiId"> & UpdateApiKeyRequest)[K]
    }>): Request<UpdateApiKeyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApiKey(
          this.ops["UpdateApiKey"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDataSource(partialParams: ToOptional<{
      [K in keyof Omit<UpdateDataSourceRequest, "apiId"> & keyof UpdateDataSourceRequest]: (Omit<UpdateDataSourceRequest, "apiId"> & UpdateDataSourceRequest)[K]
    }>): Request<UpdateDataSourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDataSource(
          this.ops["UpdateDataSource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDomainName(partialParams: ToOptional<{
      [K in keyof UpdateDomainNameRequest & keyof Omit<UpdateDomainNameRequest, "domainName">]: (UpdateDomainNameRequest & Omit<UpdateDomainNameRequest, "domainName">)[K]
    }>): Request<UpdateDomainNameResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDomainName(
          this.ops["UpdateDomainName"].applicator.apply(partialParams)
        );
    }

    invokeUpdateFunction(partialParams: ToOptional<{
      [K in keyof Omit<UpdateFunctionRequest, "apiId"> & keyof UpdateFunctionRequest]: (Omit<UpdateFunctionRequest, "apiId"> & UpdateFunctionRequest)[K]
    }>): Request<UpdateFunctionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFunction(
          this.ops["UpdateFunction"].applicator.apply(partialParams)
        );
    }

    invokeUpdateGraphqlApi(partialParams: ToOptional<{
      [K in keyof Omit<UpdateGraphqlApiRequest, "apiId"> & keyof UpdateGraphqlApiRequest]: (Omit<UpdateGraphqlApiRequest, "apiId"> & UpdateGraphqlApiRequest)[K]
    }>): Request<UpdateGraphqlApiResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateGraphqlApi(
          this.ops["UpdateGraphqlApi"].applicator.apply(partialParams)
        );
    }

    invokeUpdateResolver(partialParams: ToOptional<{
      [K in keyof Omit<UpdateResolverRequest, "apiId"> & keyof UpdateResolverRequest]: (Omit<UpdateResolverRequest, "apiId"> & UpdateResolverRequest)[K]
    }>): Request<UpdateResolverResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateResolver(
          this.ops["UpdateResolver"].applicator.apply(partialParams)
        );
    }

    invokeUpdateType(partialParams: ToOptional<{
      [K in keyof Omit<UpdateTypeRequest, "apiId"> & keyof UpdateTypeRequest]: (Omit<UpdateTypeRequest, "apiId"> & UpdateTypeRequest)[K]
    }>): Request<UpdateTypeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateType(
          this.ops["UpdateType"].applicator.apply(partialParams)
        );
    }
}