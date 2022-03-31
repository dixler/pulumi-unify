
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateDiscovererRequest,
    CreateRegistryRequest,
    CreateSchemaRequest,
    DeleteDiscovererRequest,
    DeleteRegistryRequest,
    DeleteSchemaRequest,
    DeleteSchemaVersionRequest,
    DescribeCodeBindingRequest,
    DescribeDiscovererRequest,
    DescribeRegistryRequest,
    DescribeSchemaRequest,
    ExportSchemaRequest,
    GetCodeBindingSourceRequest,
    GetDiscoveredSchemaRequest,
    ListSchemaVersionsRequest,
    ListSchemasRequest,
    ListTagsForResourceRequest,
    PutCodeBindingRequest,
    PutResourcePolicyRequest,
    SearchSchemasRequest,
    StartDiscovererRequest,
    StopDiscovererRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateDiscovererRequest,
    UpdateRegistryRequest,
    UpdateSchemaRequest,
    CreateDiscovererResponse,
    CreateRegistryResponse,
    CreateSchemaResponse,
    DescribeCodeBindingResponse,
    DescribeDiscovererResponse,
    DescribeRegistryResponse,
    DescribeSchemaResponse,
    ExportSchemaResponse,
    GetCodeBindingSourceResponse,
    GetDiscoveredSchemaResponse,
    ListSchemaVersionsResponse,
    ListSchemasResponse,
    ListTagsForResourceResponse,
    PutCodeBindingResponse,
    PutResourcePolicyResponse,
    SearchSchemasResponse,
    StartDiscovererResponse,
    StopDiscovererResponse,
    UpdateDiscovererResponse,
    UpdateRegistryResponse,
    UpdateSchemaResponse
} from "aws-sdk/clients/schemas";
const schema = require("../apis/schemas-2019-12-02.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.schemas.Discoverer {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.schemas.Discoverer>) {
        super(...args)
        this.client = new awssdk.Schemas()
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

    invokeCreateDiscoverer(partialParams: ToOptional<{
      [K in keyof CreateDiscovererRequest & keyof CreateDiscovererRequest & keyof CreateDiscovererRequest]: (CreateDiscovererRequest & CreateDiscovererRequest & CreateDiscovererRequest)[K]
    }>): Request<CreateDiscovererResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDiscoverer(
          this.ops["CreateDiscoverer"].applicator.apply(partialParams)
        );
    }

    invokeCreateRegistry(partialParams: ToOptional<{
      [K in keyof CreateRegistryRequest & keyof CreateRegistryRequest & keyof CreateRegistryRequest]: (CreateRegistryRequest & CreateRegistryRequest & CreateRegistryRequest)[K]
    }>): Request<CreateRegistryResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRegistry(
          this.ops["CreateRegistry"].applicator.apply(partialParams)
        );
    }

    invokeCreateSchema(partialParams: ToOptional<{
      [K in keyof CreateSchemaRequest & keyof CreateSchemaRequest & keyof CreateSchemaRequest]: (CreateSchemaRequest & CreateSchemaRequest & CreateSchemaRequest)[K]
    }>): Request<CreateSchemaResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSchema(
          this.ops["CreateSchema"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDiscoverer(partialParams: ToOptional<{
      [K in keyof DeleteDiscovererRequest & keyof DeleteDiscovererRequest & keyof DeleteDiscovererRequest]: (DeleteDiscovererRequest & DeleteDiscovererRequest & DeleteDiscovererRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDiscoverer(
          this.ops["DeleteDiscoverer"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRegistry(partialParams: ToOptional<{
      [K in keyof DeleteRegistryRequest & keyof DeleteRegistryRequest & keyof DeleteRegistryRequest]: (DeleteRegistryRequest & DeleteRegistryRequest & DeleteRegistryRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRegistry(
          this.ops["DeleteRegistry"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSchema(partialParams: ToOptional<{
      [K in keyof DeleteSchemaRequest & keyof DeleteSchemaRequest & keyof DeleteSchemaRequest]: (DeleteSchemaRequest & DeleteSchemaRequest & DeleteSchemaRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSchema(
          this.ops["DeleteSchema"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSchemaVersion(partialParams: ToOptional<{
      [K in keyof DeleteSchemaVersionRequest & keyof DeleteSchemaVersionRequest & keyof DeleteSchemaVersionRequest]: (DeleteSchemaVersionRequest & DeleteSchemaVersionRequest & DeleteSchemaVersionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSchemaVersion(
          this.ops["DeleteSchemaVersion"].applicator.apply(partialParams)
        );
    }

    invokeDescribeCodeBinding(partialParams: ToOptional<{
      [K in keyof DescribeCodeBindingRequest & keyof DescribeCodeBindingRequest & keyof DescribeCodeBindingRequest]: (DescribeCodeBindingRequest & DescribeCodeBindingRequest & DescribeCodeBindingRequest)[K]
    }>): Request<DescribeCodeBindingResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCodeBinding(
          this.ops["DescribeCodeBinding"].applicator.apply(partialParams)
        );
    }

    invokeDescribeDiscoverer(partialParams: ToOptional<{
      [K in keyof DescribeDiscovererRequest & keyof DescribeDiscovererRequest & keyof DescribeDiscovererRequest]: (DescribeDiscovererRequest & DescribeDiscovererRequest & DescribeDiscovererRequest)[K]
    }>): Request<DescribeDiscovererResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDiscoverer(
          this.ops["DescribeDiscoverer"].applicator.apply(partialParams)
        );
    }

    invokeDescribeRegistry(partialParams: ToOptional<{
      [K in keyof DescribeRegistryRequest & keyof DescribeRegistryRequest & keyof DescribeRegistryRequest]: (DescribeRegistryRequest & DescribeRegistryRequest & DescribeRegistryRequest)[K]
    }>): Request<DescribeRegistryResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeRegistry(
          this.ops["DescribeRegistry"].applicator.apply(partialParams)
        );
    }

    invokeDescribeSchema(partialParams: ToOptional<{
      [K in keyof DescribeSchemaRequest & keyof DescribeSchemaRequest & keyof DescribeSchemaRequest]: (DescribeSchemaRequest & DescribeSchemaRequest & DescribeSchemaRequest)[K]
    }>): Request<DescribeSchemaResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeSchema(
          this.ops["DescribeSchema"].applicator.apply(partialParams)
        );
    }

    invokeExportSchema(partialParams: ToOptional<{
      [K in keyof ExportSchemaRequest & keyof ExportSchemaRequest & keyof ExportSchemaRequest]: (ExportSchemaRequest & ExportSchemaRequest & ExportSchemaRequest)[K]
    }>): Request<ExportSchemaResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.exportSchema(
          this.ops["ExportSchema"].applicator.apply(partialParams)
        );
    }

    invokeGetCodeBindingSource(partialParams: ToOptional<{
      [K in keyof GetCodeBindingSourceRequest & keyof GetCodeBindingSourceRequest & keyof GetCodeBindingSourceRequest]: (GetCodeBindingSourceRequest & GetCodeBindingSourceRequest & GetCodeBindingSourceRequest)[K]
    }>): Request<GetCodeBindingSourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCodeBindingSource(
          this.ops["GetCodeBindingSource"].applicator.apply(partialParams)
        );
    }

    invokeGetDiscoveredSchema(partialParams: ToOptional<{
      [K in keyof GetDiscoveredSchemaRequest & keyof GetDiscoveredSchemaRequest & keyof GetDiscoveredSchemaRequest]: (GetDiscoveredSchemaRequest & GetDiscoveredSchemaRequest & GetDiscoveredSchemaRequest)[K]
    }>): Request<GetDiscoveredSchemaResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDiscoveredSchema(
          this.ops["GetDiscoveredSchema"].applicator.apply(partialParams)
        );
    }

    invokeListSchemaVersions(partialParams: ToOptional<{
      [K in keyof ListSchemaVersionsRequest & keyof ListSchemaVersionsRequest & keyof ListSchemaVersionsRequest]: (ListSchemaVersionsRequest & ListSchemaVersionsRequest & ListSchemaVersionsRequest)[K]
    }>): Request<ListSchemaVersionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listSchemaVersions(
          this.ops["ListSchemaVersions"].applicator.apply(partialParams)
        );
    }

    invokeListSchemas(partialParams: ToOptional<{
      [K in keyof ListSchemasRequest & keyof ListSchemasRequest & keyof ListSchemasRequest]: (ListSchemasRequest & ListSchemasRequest & ListSchemasRequest)[K]
    }>): Request<ListSchemasResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listSchemas(
          this.ops["ListSchemas"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokePutCodeBinding(partialParams: ToOptional<{
      [K in keyof PutCodeBindingRequest & keyof PutCodeBindingRequest & keyof PutCodeBindingRequest]: (PutCodeBindingRequest & PutCodeBindingRequest & PutCodeBindingRequest)[K]
    }>): Request<PutCodeBindingResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putCodeBinding(
          this.ops["PutCodeBinding"].applicator.apply(partialParams)
        );
    }

    invokePutResourcePolicy(partialParams: ToOptional<{
      [K in keyof PutResourcePolicyRequest & keyof PutResourcePolicyRequest & keyof PutResourcePolicyRequest]: (PutResourcePolicyRequest & PutResourcePolicyRequest & PutResourcePolicyRequest)[K]
    }>): Request<PutResourcePolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putResourcePolicy(
          this.ops["PutResourcePolicy"].applicator.apply(partialParams)
        );
    }

    invokeSearchSchemas(partialParams: ToOptional<{
      [K in keyof SearchSchemasRequest & keyof SearchSchemasRequest & keyof SearchSchemasRequest]: (SearchSchemasRequest & SearchSchemasRequest & SearchSchemasRequest)[K]
    }>): Request<SearchSchemasResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.searchSchemas(
          this.ops["SearchSchemas"].applicator.apply(partialParams)
        );
    }

    invokeStartDiscoverer(partialParams: ToOptional<{
      [K in keyof StartDiscovererRequest & keyof StartDiscovererRequest & keyof StartDiscovererRequest]: (StartDiscovererRequest & StartDiscovererRequest & StartDiscovererRequest)[K]
    }>): Request<StartDiscovererResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startDiscoverer(
          this.ops["StartDiscoverer"].applicator.apply(partialParams)
        );
    }

    invokeStopDiscoverer(partialParams: ToOptional<{
      [K in keyof StopDiscovererRequest & keyof StopDiscovererRequest & keyof StopDiscovererRequest]: (StopDiscovererRequest & StopDiscovererRequest & StopDiscovererRequest)[K]
    }>): Request<StopDiscovererResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopDiscoverer(
          this.ops["StopDiscoverer"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDiscoverer(partialParams: ToOptional<{
      [K in keyof UpdateDiscovererRequest & keyof UpdateDiscovererRequest & keyof UpdateDiscovererRequest]: (UpdateDiscovererRequest & UpdateDiscovererRequest & UpdateDiscovererRequest)[K]
    }>): Request<UpdateDiscovererResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDiscoverer(
          this.ops["UpdateDiscoverer"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRegistry(partialParams: ToOptional<{
      [K in keyof UpdateRegistryRequest & keyof UpdateRegistryRequest & keyof UpdateRegistryRequest]: (UpdateRegistryRequest & UpdateRegistryRequest & UpdateRegistryRequest)[K]
    }>): Request<UpdateRegistryResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRegistry(
          this.ops["UpdateRegistry"].applicator.apply(partialParams)
        );
    }

    invokeUpdateSchema(partialParams: ToOptional<{
      [K in keyof UpdateSchemaRequest & keyof UpdateSchemaRequest & keyof UpdateSchemaRequest]: (UpdateSchemaRequest & UpdateSchemaRequest & UpdateSchemaRequest)[K]
    }>): Request<UpdateSchemaResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSchema(
          this.ops["UpdateSchema"].applicator.apply(partialParams)
        );
    }
}