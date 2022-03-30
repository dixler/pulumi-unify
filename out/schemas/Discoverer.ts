
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.schemas.Discoverer {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.schemas.Discoverer>) {
        super(...args)
        this.client = new awssdk.Schemas()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/schemas-2019-12-02.normal.json"), this.client)
    }

    invokeCreateDiscoverer(partialParams: ToOptional<{
      [K in keyof CreateDiscovererRequest & keyof CreateDiscovererRequest & keyof CreateDiscovererRequest]: (CreateDiscovererRequest & CreateDiscovererRequest & CreateDiscovererRequest)[K]
    }>): CreateDiscovererResponse {
        return this.client.createDiscoverer(
            this.ops["CreateDiscoverer"].apply(partialParams)
        );
    }

    invokeCreateRegistry(partialParams: ToOptional<{
      [K in keyof CreateRegistryRequest & keyof CreateRegistryRequest & keyof CreateRegistryRequest]: (CreateRegistryRequest & CreateRegistryRequest & CreateRegistryRequest)[K]
    }>): CreateRegistryResponse {
        return this.client.createRegistry(
            this.ops["CreateRegistry"].apply(partialParams)
        );
    }

    invokeCreateSchema(partialParams: ToOptional<{
      [K in keyof CreateSchemaRequest & keyof CreateSchemaRequest & keyof CreateSchemaRequest]: (CreateSchemaRequest & CreateSchemaRequest & CreateSchemaRequest)[K]
    }>): CreateSchemaResponse {
        return this.client.createSchema(
            this.ops["CreateSchema"].apply(partialParams)
        );
    }

    invokeDeleteDiscoverer(partialParams: ToOptional<{
      [K in keyof DeleteDiscovererRequest & keyof DeleteDiscovererRequest & keyof DeleteDiscovererRequest]: (DeleteDiscovererRequest & DeleteDiscovererRequest & DeleteDiscovererRequest)[K]
    }>): void {
        return this.client.deleteDiscoverer(
            this.ops["DeleteDiscoverer"].apply(partialParams)
        );
    }

    invokeDeleteRegistry(partialParams: ToOptional<{
      [K in keyof DeleteRegistryRequest & keyof DeleteRegistryRequest & keyof DeleteRegistryRequest]: (DeleteRegistryRequest & DeleteRegistryRequest & DeleteRegistryRequest)[K]
    }>): void {
        return this.client.deleteRegistry(
            this.ops["DeleteRegistry"].apply(partialParams)
        );
    }

    invokeDeleteSchema(partialParams: ToOptional<{
      [K in keyof DeleteSchemaRequest & keyof DeleteSchemaRequest & keyof DeleteSchemaRequest]: (DeleteSchemaRequest & DeleteSchemaRequest & DeleteSchemaRequest)[K]
    }>): void {
        return this.client.deleteSchema(
            this.ops["DeleteSchema"].apply(partialParams)
        );
    }

    invokeDeleteSchemaVersion(partialParams: ToOptional<{
      [K in keyof DeleteSchemaVersionRequest & keyof DeleteSchemaVersionRequest & keyof DeleteSchemaVersionRequest]: (DeleteSchemaVersionRequest & DeleteSchemaVersionRequest & DeleteSchemaVersionRequest)[K]
    }>): void {
        return this.client.deleteSchemaVersion(
            this.ops["DeleteSchemaVersion"].apply(partialParams)
        );
    }

    invokeDescribeCodeBinding(partialParams: ToOptional<{
      [K in keyof DescribeCodeBindingRequest & keyof DescribeCodeBindingRequest & keyof DescribeCodeBindingRequest]: (DescribeCodeBindingRequest & DescribeCodeBindingRequest & DescribeCodeBindingRequest)[K]
    }>): DescribeCodeBindingResponse {
        return this.client.describeCodeBinding(
            this.ops["DescribeCodeBinding"].apply(partialParams)
        );
    }

    invokeDescribeDiscoverer(partialParams: ToOptional<{
      [K in keyof DescribeDiscovererRequest & keyof DescribeDiscovererRequest & keyof DescribeDiscovererRequest]: (DescribeDiscovererRequest & DescribeDiscovererRequest & DescribeDiscovererRequest)[K]
    }>): DescribeDiscovererResponse {
        return this.client.describeDiscoverer(
            this.ops["DescribeDiscoverer"].apply(partialParams)
        );
    }

    invokeDescribeRegistry(partialParams: ToOptional<{
      [K in keyof DescribeRegistryRequest & keyof DescribeRegistryRequest & keyof DescribeRegistryRequest]: (DescribeRegistryRequest & DescribeRegistryRequest & DescribeRegistryRequest)[K]
    }>): DescribeRegistryResponse {
        return this.client.describeRegistry(
            this.ops["DescribeRegistry"].apply(partialParams)
        );
    }

    invokeDescribeSchema(partialParams: ToOptional<{
      [K in keyof DescribeSchemaRequest & keyof DescribeSchemaRequest & keyof DescribeSchemaRequest]: (DescribeSchemaRequest & DescribeSchemaRequest & DescribeSchemaRequest)[K]
    }>): DescribeSchemaResponse {
        return this.client.describeSchema(
            this.ops["DescribeSchema"].apply(partialParams)
        );
    }

    invokeExportSchema(partialParams: ToOptional<{
      [K in keyof ExportSchemaRequest & keyof ExportSchemaRequest & keyof ExportSchemaRequest]: (ExportSchemaRequest & ExportSchemaRequest & ExportSchemaRequest)[K]
    }>): ExportSchemaResponse {
        return this.client.exportSchema(
            this.ops["ExportSchema"].apply(partialParams)
        );
    }

    invokeGetCodeBindingSource(partialParams: ToOptional<{
      [K in keyof GetCodeBindingSourceRequest & keyof GetCodeBindingSourceRequest & keyof GetCodeBindingSourceRequest]: (GetCodeBindingSourceRequest & GetCodeBindingSourceRequest & GetCodeBindingSourceRequest)[K]
    }>): GetCodeBindingSourceResponse {
        return this.client.getCodeBindingSource(
            this.ops["GetCodeBindingSource"].apply(partialParams)
        );
    }

    invokeGetDiscoveredSchema(partialParams: ToOptional<{
      [K in keyof GetDiscoveredSchemaRequest & keyof GetDiscoveredSchemaRequest & keyof GetDiscoveredSchemaRequest]: (GetDiscoveredSchemaRequest & GetDiscoveredSchemaRequest & GetDiscoveredSchemaRequest)[K]
    }>): GetDiscoveredSchemaResponse {
        return this.client.getDiscoveredSchema(
            this.ops["GetDiscoveredSchema"].apply(partialParams)
        );
    }

    invokeListSchemaVersions(partialParams: ToOptional<{
      [K in keyof ListSchemaVersionsRequest & keyof ListSchemaVersionsRequest & keyof ListSchemaVersionsRequest]: (ListSchemaVersionsRequest & ListSchemaVersionsRequest & ListSchemaVersionsRequest)[K]
    }>): ListSchemaVersionsResponse {
        return this.client.listSchemaVersions(
            this.ops["ListSchemaVersions"].apply(partialParams)
        );
    }

    invokeListSchemas(partialParams: ToOptional<{
      [K in keyof ListSchemasRequest & keyof ListSchemasRequest & keyof ListSchemasRequest]: (ListSchemasRequest & ListSchemasRequest & ListSchemasRequest)[K]
    }>): ListSchemasResponse {
        return this.client.listSchemas(
            this.ops["ListSchemas"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokePutCodeBinding(partialParams: ToOptional<{
      [K in keyof PutCodeBindingRequest & keyof PutCodeBindingRequest & keyof PutCodeBindingRequest]: (PutCodeBindingRequest & PutCodeBindingRequest & PutCodeBindingRequest)[K]
    }>): PutCodeBindingResponse {
        return this.client.putCodeBinding(
            this.ops["PutCodeBinding"].apply(partialParams)
        );
    }

    invokePutResourcePolicy(partialParams: ToOptional<{
      [K in keyof PutResourcePolicyRequest & keyof PutResourcePolicyRequest & keyof PutResourcePolicyRequest]: (PutResourcePolicyRequest & PutResourcePolicyRequest & PutResourcePolicyRequest)[K]
    }>): PutResourcePolicyResponse {
        return this.client.putResourcePolicy(
            this.ops["PutResourcePolicy"].apply(partialParams)
        );
    }

    invokeSearchSchemas(partialParams: ToOptional<{
      [K in keyof SearchSchemasRequest & keyof SearchSchemasRequest & keyof SearchSchemasRequest]: (SearchSchemasRequest & SearchSchemasRequest & SearchSchemasRequest)[K]
    }>): SearchSchemasResponse {
        return this.client.searchSchemas(
            this.ops["SearchSchemas"].apply(partialParams)
        );
    }

    invokeStartDiscoverer(partialParams: ToOptional<{
      [K in keyof StartDiscovererRequest & keyof StartDiscovererRequest & keyof StartDiscovererRequest]: (StartDiscovererRequest & StartDiscovererRequest & StartDiscovererRequest)[K]
    }>): StartDiscovererResponse {
        return this.client.startDiscoverer(
            this.ops["StartDiscoverer"].apply(partialParams)
        );
    }

    invokeStopDiscoverer(partialParams: ToOptional<{
      [K in keyof StopDiscovererRequest & keyof StopDiscovererRequest & keyof StopDiscovererRequest]: (StopDiscovererRequest & StopDiscovererRequest & StopDiscovererRequest)[K]
    }>): StopDiscovererResponse {
        return this.client.stopDiscoverer(
            this.ops["StopDiscoverer"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): void {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): void {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateDiscoverer(partialParams: ToOptional<{
      [K in keyof UpdateDiscovererRequest & keyof UpdateDiscovererRequest & keyof UpdateDiscovererRequest]: (UpdateDiscovererRequest & UpdateDiscovererRequest & UpdateDiscovererRequest)[K]
    }>): UpdateDiscovererResponse {
        return this.client.updateDiscoverer(
            this.ops["UpdateDiscoverer"].apply(partialParams)
        );
    }

    invokeUpdateRegistry(partialParams: ToOptional<{
      [K in keyof UpdateRegistryRequest & keyof UpdateRegistryRequest & keyof UpdateRegistryRequest]: (UpdateRegistryRequest & UpdateRegistryRequest & UpdateRegistryRequest)[K]
    }>): UpdateRegistryResponse {
        return this.client.updateRegistry(
            this.ops["UpdateRegistry"].apply(partialParams)
        );
    }

    invokeUpdateSchema(partialParams: ToOptional<{
      [K in keyof UpdateSchemaRequest & keyof UpdateSchemaRequest & keyof UpdateSchemaRequest]: (UpdateSchemaRequest & UpdateSchemaRequest & UpdateSchemaRequest)[K]
    }>): UpdateSchemaResponse {
        return this.client.updateSchema(
            this.ops["UpdateSchema"].apply(partialParams)
        );
    }
}