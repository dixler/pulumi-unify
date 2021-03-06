
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateRegistryRequest,
    CreateSchemaRequest,
    DescribeCodeBindingRequest,
    DescribeRegistryRequest,
    DescribeSchemaRequest,
    ExportSchemaRequest,
    GetCodeBindingSourceRequest,
    GetDiscoveredSchemaRequest,
    ListSchemaVersionsRequest,
    ListSchemasRequest,
    PutCodeBindingRequest,
    SearchSchemasRequest,
    UpdateRegistryRequest,
    UpdateSchemaRequest,
    CreateRegistryResponse,
    CreateSchemaResponse,
    DescribeCodeBindingResponse,
    DescribeRegistryResponse,
    DescribeSchemaResponse,
    ExportSchemaResponse,
    GetCodeBindingSourceResponse,
    GetDiscoveredSchemaResponse,
    ListSchemaVersionsResponse,
    ListSchemasResponse,
    PutCodeBindingResponse,
    SearchSchemasResponse,
    UpdateRegistryResponse,
    UpdateSchemaResponse
} from "aws-sdk/clients/schemas";
const schema = require("../apis/schemas-2019-12-02.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.schemas.Schema {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.schemas.Schema>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Schemas()
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

    invokeCreateRegistry(partialParams: ToOptional<{
      [K in keyof CreateRegistryRequest & keyof Omit<CreateRegistryRequest, "RegistryName">]: (CreateRegistryRequest)[K]
    }>): Request<CreateRegistryResponse, AWSError> {
        this.boot();
        return this.client.createRegistry(
          this.ops["CreateRegistry"].apply(partialParams)
        );
    }

    invokeCreateSchema(partialParams: ToOptional<{
      [K in keyof CreateSchemaRequest & keyof Omit<CreateSchemaRequest, "RegistryName" | "SchemaName" | "Type" | "Content">]: (CreateSchemaRequest)[K]
    }>): Request<CreateSchemaResponse, AWSError> {
        this.boot();
        return this.client.createSchema(
          this.ops["CreateSchema"].apply(partialParams)
        );
    }

    invokeDescribeCodeBinding(partialParams: ToOptional<{
      [K in keyof DescribeCodeBindingRequest & keyof Omit<DescribeCodeBindingRequest, "RegistryName" | "SchemaName">]: (DescribeCodeBindingRequest)[K]
    }>): Request<DescribeCodeBindingResponse, AWSError> {
        this.boot();
        return this.client.describeCodeBinding(
          this.ops["DescribeCodeBinding"].apply(partialParams)
        );
    }

    invokeDescribeRegistry(partialParams: ToOptional<{
      [K in keyof DescribeRegistryRequest & keyof Omit<DescribeRegistryRequest, "RegistryName">]: (DescribeRegistryRequest)[K]
    }>): Request<DescribeRegistryResponse, AWSError> {
        this.boot();
        return this.client.describeRegistry(
          this.ops["DescribeRegistry"].apply(partialParams)
        );
    }

    invokeDescribeSchema(partialParams: ToOptional<{
      [K in keyof DescribeSchemaRequest & keyof Omit<DescribeSchemaRequest, "RegistryName" | "SchemaName">]: (DescribeSchemaRequest)[K]
    }>): Request<DescribeSchemaResponse, AWSError> {
        this.boot();
        return this.client.describeSchema(
          this.ops["DescribeSchema"].apply(partialParams)
        );
    }

    invokeExportSchema(partialParams: ToOptional<{
      [K in keyof ExportSchemaRequest & keyof Omit<ExportSchemaRequest, "RegistryName" | "SchemaName" | "Type">]: (ExportSchemaRequest)[K]
    }>): Request<ExportSchemaResponse, AWSError> {
        this.boot();
        return this.client.exportSchema(
          this.ops["ExportSchema"].apply(partialParams)
        );
    }

    invokeGetCodeBindingSource(partialParams: ToOptional<{
      [K in keyof GetCodeBindingSourceRequest & keyof Omit<GetCodeBindingSourceRequest, "RegistryName" | "SchemaName">]: (GetCodeBindingSourceRequest)[K]
    }>): Request<GetCodeBindingSourceResponse, AWSError> {
        this.boot();
        return this.client.getCodeBindingSource(
          this.ops["GetCodeBindingSource"].apply(partialParams)
        );
    }

    invokeGetDiscoveredSchema(partialParams: ToOptional<{
      [K in keyof GetDiscoveredSchemaRequest & keyof Omit<GetDiscoveredSchemaRequest, "Type">]: (GetDiscoveredSchemaRequest)[K]
    }>): Request<GetDiscoveredSchemaResponse, AWSError> {
        this.boot();
        return this.client.getDiscoveredSchema(
          this.ops["GetDiscoveredSchema"].apply(partialParams)
        );
    }

    invokeListSchemaVersions(partialParams: ToOptional<{
      [K in keyof ListSchemaVersionsRequest & keyof Omit<ListSchemaVersionsRequest, "RegistryName" | "SchemaName">]: (ListSchemaVersionsRequest)[K]
    }>): Request<ListSchemaVersionsResponse, AWSError> {
        this.boot();
        return this.client.listSchemaVersions(
          this.ops["ListSchemaVersions"].apply(partialParams)
        );
    }

    invokeListSchemas(partialParams: ToOptional<{
      [K in keyof ListSchemasRequest & keyof Omit<ListSchemasRequest, "RegistryName">]: (ListSchemasRequest)[K]
    }>): Request<ListSchemasResponse, AWSError> {
        this.boot();
        return this.client.listSchemas(
          this.ops["ListSchemas"].apply(partialParams)
        );
    }

    invokePutCodeBinding(partialParams: ToOptional<{
      [K in keyof PutCodeBindingRequest & keyof Omit<PutCodeBindingRequest, "RegistryName" | "SchemaName">]: (PutCodeBindingRequest)[K]
    }>): Request<PutCodeBindingResponse, AWSError> {
        this.boot();
        return this.client.putCodeBinding(
          this.ops["PutCodeBinding"].apply(partialParams)
        );
    }

    invokeSearchSchemas(partialParams: ToOptional<{
      [K in keyof SearchSchemasRequest & keyof Omit<SearchSchemasRequest, "RegistryName">]: (SearchSchemasRequest)[K]
    }>): Request<SearchSchemasResponse, AWSError> {
        this.boot();
        return this.client.searchSchemas(
          this.ops["SearchSchemas"].apply(partialParams)
        );
    }

    invokeUpdateRegistry(partialParams: ToOptional<{
      [K in keyof UpdateRegistryRequest & keyof Omit<UpdateRegistryRequest, "RegistryName">]: (UpdateRegistryRequest)[K]
    }>): Request<UpdateRegistryResponse, AWSError> {
        this.boot();
        return this.client.updateRegistry(
          this.ops["UpdateRegistry"].apply(partialParams)
        );
    }

    invokeUpdateSchema(partialParams: ToOptional<{
      [K in keyof UpdateSchemaRequest & keyof Omit<UpdateSchemaRequest, "RegistryName" | "SchemaName">]: (UpdateSchemaRequest)[K]
    }>): Request<UpdateSchemaResponse, AWSError> {
        this.boot();
        return this.client.updateSchema(
          this.ops["UpdateSchema"].apply(partialParams)
        );
    }
}