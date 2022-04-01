
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    BatchCreatePartitionRequest,
    BatchDeletePartitionRequest,
    BatchDeleteTableRequest,
    BatchDeleteTableVersionRequest,
    BatchGetPartitionRequest,
    BatchUpdatePartitionRequest,
    CreatePartitionRequest,
    CreatePartitionIndexRequest,
    CreateTableRequest,
    CreateUserDefinedFunctionRequest,
    DeleteColumnStatisticsForPartitionRequest,
    DeleteColumnStatisticsForTableRequest,
    DeletePartitionRequest,
    DeletePartitionIndexRequest,
    DeleteTableRequest,
    DeleteTableVersionRequest,
    DeleteUserDefinedFunctionRequest,
    GetColumnStatisticsForPartitionRequest,
    GetColumnStatisticsForTableRequest,
    GetPartitionRequest,
    GetPartitionIndexesRequest,
    GetPartitionsRequest,
    GetTableRequest,
    GetTableVersionRequest,
    GetTableVersionsRequest,
    GetTablesRequest,
    GetUnfilteredPartitionMetadataRequest,
    GetUnfilteredPartitionsMetadataRequest,
    GetUnfilteredTableMetadataRequest,
    GetUserDefinedFunctionRequest,
    UpdateColumnStatisticsForPartitionRequest,
    UpdateColumnStatisticsForTableRequest,
    UpdatePartitionRequest,
    UpdateTableRequest,
    UpdateUserDefinedFunctionRequest,
    BatchCreatePartitionResponse,
    BatchDeletePartitionResponse,
    BatchDeleteTableResponse,
    BatchDeleteTableVersionResponse,
    BatchGetPartitionResponse,
    BatchUpdatePartitionResponse,
    CreatePartitionResponse,
    CreatePartitionIndexResponse,
    CreateTableResponse,
    CreateUserDefinedFunctionResponse,
    DeleteColumnStatisticsForPartitionResponse,
    DeleteColumnStatisticsForTableResponse,
    DeletePartitionResponse,
    DeletePartitionIndexResponse,
    DeleteTableResponse,
    DeleteTableVersionResponse,
    DeleteUserDefinedFunctionResponse,
    GetColumnStatisticsForPartitionResponse,
    GetColumnStatisticsForTableResponse,
    GetPartitionResponse,
    GetPartitionIndexesResponse,
    GetPartitionsResponse,
    GetTableResponse,
    GetTableVersionResponse,
    GetTableVersionsResponse,
    GetTablesResponse,
    GetUnfilteredPartitionMetadataResponse,
    GetUnfilteredPartitionsMetadataResponse,
    GetUnfilteredTableMetadataResponse,
    GetUserDefinedFunctionResponse,
    UpdateColumnStatisticsForPartitionResponse,
    UpdateColumnStatisticsForTableResponse,
    UpdatePartitionResponse,
    UpdateTableResponse,
    UpdateUserDefinedFunctionResponse
} from "aws-sdk/clients/glue";
const schema = require("../apis/glue-2017-03-31.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.glue.PartitionIndex {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.glue.PartitionIndex>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Glue()
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

    invokeBatchCreatePartition(partialParams: ToOptional<{
      [K in keyof BatchCreatePartitionRequest & keyof Omit<BatchCreatePartitionRequest, "DatabaseName" | "TableName">]: (BatchCreatePartitionRequest)[K]
    }>): Request<BatchCreatePartitionResponse, AWSError> {
        this.boot();
        return this.client.batchCreatePartition(
          this.ops["BatchCreatePartition"].apply(partialParams)
        );
    }

    invokeBatchDeletePartition(partialParams: ToOptional<{
      [K in keyof BatchDeletePartitionRequest & keyof Omit<BatchDeletePartitionRequest, "DatabaseName" | "TableName">]: (BatchDeletePartitionRequest)[K]
    }>): Request<BatchDeletePartitionResponse, AWSError> {
        this.boot();
        return this.client.batchDeletePartition(
          this.ops["BatchDeletePartition"].apply(partialParams)
        );
    }

    invokeBatchDeleteTable(partialParams: ToOptional<{
      [K in keyof BatchDeleteTableRequest & keyof Omit<BatchDeleteTableRequest, "DatabaseName">]: (BatchDeleteTableRequest)[K]
    }>): Request<BatchDeleteTableResponse, AWSError> {
        this.boot();
        return this.client.batchDeleteTable(
          this.ops["BatchDeleteTable"].apply(partialParams)
        );
    }

    invokeBatchDeleteTableVersion(partialParams: ToOptional<{
      [K in keyof BatchDeleteTableVersionRequest & keyof Omit<BatchDeleteTableVersionRequest, "DatabaseName" | "TableName">]: (BatchDeleteTableVersionRequest)[K]
    }>): Request<BatchDeleteTableVersionResponse, AWSError> {
        this.boot();
        return this.client.batchDeleteTableVersion(
          this.ops["BatchDeleteTableVersion"].apply(partialParams)
        );
    }

    invokeBatchGetPartition(partialParams: ToOptional<{
      [K in keyof BatchGetPartitionRequest & keyof Omit<BatchGetPartitionRequest, "DatabaseName" | "TableName">]: (BatchGetPartitionRequest)[K]
    }>): Request<BatchGetPartitionResponse, AWSError> {
        this.boot();
        return this.client.batchGetPartition(
          this.ops["BatchGetPartition"].apply(partialParams)
        );
    }

    invokeBatchUpdatePartition(partialParams: ToOptional<{
      [K in keyof BatchUpdatePartitionRequest & keyof Omit<BatchUpdatePartitionRequest, "DatabaseName" | "TableName">]: (BatchUpdatePartitionRequest)[K]
    }>): Request<BatchUpdatePartitionResponse, AWSError> {
        this.boot();
        return this.client.batchUpdatePartition(
          this.ops["BatchUpdatePartition"].apply(partialParams)
        );
    }

    invokeCreatePartition(partialParams: ToOptional<{
      [K in keyof CreatePartitionRequest & keyof Omit<CreatePartitionRequest, "DatabaseName" | "TableName">]: (CreatePartitionRequest)[K]
    }>): Request<CreatePartitionResponse, AWSError> {
        this.boot();
        return this.client.createPartition(
          this.ops["CreatePartition"].apply(partialParams)
        );
    }

    invokeCreatePartitionIndex(partialParams: ToOptional<{
      [K in keyof CreatePartitionIndexRequest & keyof Omit<CreatePartitionIndexRequest, "DatabaseName" | "TableName">]: (CreatePartitionIndexRequest)[K]
    }>): Request<CreatePartitionIndexResponse, AWSError> {
        this.boot();
        return this.client.createPartitionIndex(
          this.ops["CreatePartitionIndex"].apply(partialParams)
        );
    }

    invokeCreateTable(partialParams: ToOptional<{
      [K in keyof CreateTableRequest & keyof Omit<CreateTableRequest, "DatabaseName">]: (CreateTableRequest)[K]
    }>): Request<CreateTableResponse, AWSError> {
        this.boot();
        return this.client.createTable(
          this.ops["CreateTable"].apply(partialParams)
        );
    }

    invokeCreateUserDefinedFunction(partialParams: ToOptional<{
      [K in keyof CreateUserDefinedFunctionRequest & keyof Omit<CreateUserDefinedFunctionRequest, "DatabaseName">]: (CreateUserDefinedFunctionRequest)[K]
    }>): Request<CreateUserDefinedFunctionResponse, AWSError> {
        this.boot();
        return this.client.createUserDefinedFunction(
          this.ops["CreateUserDefinedFunction"].apply(partialParams)
        );
    }

    invokeDeleteColumnStatisticsForPartition(partialParams: ToOptional<{
      [K in keyof DeleteColumnStatisticsForPartitionRequest & keyof Omit<DeleteColumnStatisticsForPartitionRequest, "DatabaseName" | "TableName">]: (DeleteColumnStatisticsForPartitionRequest)[K]
    }>): Request<DeleteColumnStatisticsForPartitionResponse, AWSError> {
        this.boot();
        return this.client.deleteColumnStatisticsForPartition(
          this.ops["DeleteColumnStatisticsForPartition"].apply(partialParams)
        );
    }

    invokeDeleteColumnStatisticsForTable(partialParams: ToOptional<{
      [K in keyof DeleteColumnStatisticsForTableRequest & keyof Omit<DeleteColumnStatisticsForTableRequest, "DatabaseName" | "TableName">]: (DeleteColumnStatisticsForTableRequest)[K]
    }>): Request<DeleteColumnStatisticsForTableResponse, AWSError> {
        this.boot();
        return this.client.deleteColumnStatisticsForTable(
          this.ops["DeleteColumnStatisticsForTable"].apply(partialParams)
        );
    }

    invokeDeletePartition(partialParams: ToOptional<{
      [K in keyof DeletePartitionRequest & keyof Omit<DeletePartitionRequest, "DatabaseName" | "TableName">]: (DeletePartitionRequest)[K]
    }>): Request<DeletePartitionResponse, AWSError> {
        this.boot();
        return this.client.deletePartition(
          this.ops["DeletePartition"].apply(partialParams)
        );
    }

    invokeDeletePartitionIndex(partialParams: ToOptional<{
      [K in keyof DeletePartitionIndexRequest & keyof Omit<DeletePartitionIndexRequest, "DatabaseName" | "TableName">]: (DeletePartitionIndexRequest)[K]
    }>): Request<DeletePartitionIndexResponse, AWSError> {
        this.boot();
        return this.client.deletePartitionIndex(
          this.ops["DeletePartitionIndex"].apply(partialParams)
        );
    }

    invokeDeleteTable(partialParams: ToOptional<{
      [K in keyof DeleteTableRequest & keyof Omit<DeleteTableRequest, "DatabaseName">]: (DeleteTableRequest)[K]
    }>): Request<DeleteTableResponse, AWSError> {
        this.boot();
        return this.client.deleteTable(
          this.ops["DeleteTable"].apply(partialParams)
        );
    }

    invokeDeleteTableVersion(partialParams: ToOptional<{
      [K in keyof DeleteTableVersionRequest & keyof Omit<DeleteTableVersionRequest, "DatabaseName" | "TableName">]: (DeleteTableVersionRequest)[K]
    }>): Request<DeleteTableVersionResponse, AWSError> {
        this.boot();
        return this.client.deleteTableVersion(
          this.ops["DeleteTableVersion"].apply(partialParams)
        );
    }

    invokeDeleteUserDefinedFunction(partialParams: ToOptional<{
      [K in keyof DeleteUserDefinedFunctionRequest & keyof Omit<DeleteUserDefinedFunctionRequest, "DatabaseName">]: (DeleteUserDefinedFunctionRequest)[K]
    }>): Request<DeleteUserDefinedFunctionResponse, AWSError> {
        this.boot();
        return this.client.deleteUserDefinedFunction(
          this.ops["DeleteUserDefinedFunction"].apply(partialParams)
        );
    }

    invokeGetColumnStatisticsForPartition(partialParams: ToOptional<{
      [K in keyof GetColumnStatisticsForPartitionRequest & keyof Omit<GetColumnStatisticsForPartitionRequest, "DatabaseName" | "TableName">]: (GetColumnStatisticsForPartitionRequest)[K]
    }>): Request<GetColumnStatisticsForPartitionResponse, AWSError> {
        this.boot();
        return this.client.getColumnStatisticsForPartition(
          this.ops["GetColumnStatisticsForPartition"].apply(partialParams)
        );
    }

    invokeGetColumnStatisticsForTable(partialParams: ToOptional<{
      [K in keyof GetColumnStatisticsForTableRequest & keyof Omit<GetColumnStatisticsForTableRequest, "DatabaseName" | "TableName">]: (GetColumnStatisticsForTableRequest)[K]
    }>): Request<GetColumnStatisticsForTableResponse, AWSError> {
        this.boot();
        return this.client.getColumnStatisticsForTable(
          this.ops["GetColumnStatisticsForTable"].apply(partialParams)
        );
    }

    invokeGetPartition(partialParams: ToOptional<{
      [K in keyof GetPartitionRequest & keyof Omit<GetPartitionRequest, "DatabaseName" | "TableName">]: (GetPartitionRequest)[K]
    }>): Request<GetPartitionResponse, AWSError> {
        this.boot();
        return this.client.getPartition(
          this.ops["GetPartition"].apply(partialParams)
        );
    }

    invokeGetPartitionIndexes(partialParams: ToOptional<{
      [K in keyof GetPartitionIndexesRequest & keyof Omit<GetPartitionIndexesRequest, "DatabaseName" | "TableName">]: (GetPartitionIndexesRequest)[K]
    }>): Request<GetPartitionIndexesResponse, AWSError> {
        this.boot();
        return this.client.getPartitionIndexes(
          this.ops["GetPartitionIndexes"].apply(partialParams)
        );
    }

    invokeGetPartitions(partialParams: ToOptional<{
      [K in keyof GetPartitionsRequest & keyof Omit<GetPartitionsRequest, "DatabaseName" | "TableName">]: (GetPartitionsRequest)[K]
    }>): Request<GetPartitionsResponse, AWSError> {
        this.boot();
        return this.client.getPartitions(
          this.ops["GetPartitions"].apply(partialParams)
        );
    }

    invokeGetTable(partialParams: ToOptional<{
      [K in keyof GetTableRequest & keyof Omit<GetTableRequest, "DatabaseName">]: (GetTableRequest)[K]
    }>): Request<GetTableResponse, AWSError> {
        this.boot();
        return this.client.getTable(
          this.ops["GetTable"].apply(partialParams)
        );
    }

    invokeGetTableVersion(partialParams: ToOptional<{
      [K in keyof GetTableVersionRequest & keyof Omit<GetTableVersionRequest, "DatabaseName" | "TableName">]: (GetTableVersionRequest)[K]
    }>): Request<GetTableVersionResponse, AWSError> {
        this.boot();
        return this.client.getTableVersion(
          this.ops["GetTableVersion"].apply(partialParams)
        );
    }

    invokeGetTableVersions(partialParams: ToOptional<{
      [K in keyof GetTableVersionsRequest & keyof Omit<GetTableVersionsRequest, "DatabaseName" | "TableName">]: (GetTableVersionsRequest)[K]
    }>): Request<GetTableVersionsResponse, AWSError> {
        this.boot();
        return this.client.getTableVersions(
          this.ops["GetTableVersions"].apply(partialParams)
        );
    }

    invokeGetTables(partialParams: ToOptional<{
      [K in keyof GetTablesRequest & keyof Omit<GetTablesRequest, "DatabaseName">]: (GetTablesRequest)[K]
    }>): Request<GetTablesResponse, AWSError> {
        this.boot();
        return this.client.getTables(
          this.ops["GetTables"].apply(partialParams)
        );
    }

    invokeGetUnfilteredPartitionMetadata(partialParams: ToOptional<{
      [K in keyof GetUnfilteredPartitionMetadataRequest & keyof Omit<GetUnfilteredPartitionMetadataRequest, "CatalogId" | "DatabaseName" | "TableName">]: (GetUnfilteredPartitionMetadataRequest)[K]
    }>): Request<GetUnfilteredPartitionMetadataResponse, AWSError> {
        this.boot();
        return this.client.getUnfilteredPartitionMetadata(
          this.ops["GetUnfilteredPartitionMetadata"].apply(partialParams)
        );
    }

    invokeGetUnfilteredPartitionsMetadata(partialParams: ToOptional<{
      [K in keyof GetUnfilteredPartitionsMetadataRequest & keyof Omit<GetUnfilteredPartitionsMetadataRequest, "CatalogId" | "DatabaseName" | "TableName">]: (GetUnfilteredPartitionsMetadataRequest)[K]
    }>): Request<GetUnfilteredPartitionsMetadataResponse, AWSError> {
        this.boot();
        return this.client.getUnfilteredPartitionsMetadata(
          this.ops["GetUnfilteredPartitionsMetadata"].apply(partialParams)
        );
    }

    invokeGetUnfilteredTableMetadata(partialParams: ToOptional<{
      [K in keyof GetUnfilteredTableMetadataRequest & keyof Omit<GetUnfilteredTableMetadataRequest, "CatalogId" | "DatabaseName">]: (GetUnfilteredTableMetadataRequest)[K]
    }>): Request<GetUnfilteredTableMetadataResponse, AWSError> {
        this.boot();
        return this.client.getUnfilteredTableMetadata(
          this.ops["GetUnfilteredTableMetadata"].apply(partialParams)
        );
    }

    invokeGetUserDefinedFunction(partialParams: ToOptional<{
      [K in keyof GetUserDefinedFunctionRequest & keyof Omit<GetUserDefinedFunctionRequest, "DatabaseName">]: (GetUserDefinedFunctionRequest)[K]
    }>): Request<GetUserDefinedFunctionResponse, AWSError> {
        this.boot();
        return this.client.getUserDefinedFunction(
          this.ops["GetUserDefinedFunction"].apply(partialParams)
        );
    }

    invokeUpdateColumnStatisticsForPartition(partialParams: ToOptional<{
      [K in keyof UpdateColumnStatisticsForPartitionRequest & keyof Omit<UpdateColumnStatisticsForPartitionRequest, "DatabaseName" | "TableName">]: (UpdateColumnStatisticsForPartitionRequest)[K]
    }>): Request<UpdateColumnStatisticsForPartitionResponse, AWSError> {
        this.boot();
        return this.client.updateColumnStatisticsForPartition(
          this.ops["UpdateColumnStatisticsForPartition"].apply(partialParams)
        );
    }

    invokeUpdateColumnStatisticsForTable(partialParams: ToOptional<{
      [K in keyof UpdateColumnStatisticsForTableRequest & keyof Omit<UpdateColumnStatisticsForTableRequest, "DatabaseName" | "TableName">]: (UpdateColumnStatisticsForTableRequest)[K]
    }>): Request<UpdateColumnStatisticsForTableResponse, AWSError> {
        this.boot();
        return this.client.updateColumnStatisticsForTable(
          this.ops["UpdateColumnStatisticsForTable"].apply(partialParams)
        );
    }

    invokeUpdatePartition(partialParams: ToOptional<{
      [K in keyof UpdatePartitionRequest & keyof Omit<UpdatePartitionRequest, "DatabaseName" | "TableName">]: (UpdatePartitionRequest)[K]
    }>): Request<UpdatePartitionResponse, AWSError> {
        this.boot();
        return this.client.updatePartition(
          this.ops["UpdatePartition"].apply(partialParams)
        );
    }

    invokeUpdateTable(partialParams: ToOptional<{
      [K in keyof UpdateTableRequest & keyof Omit<UpdateTableRequest, "DatabaseName">]: (UpdateTableRequest)[K]
    }>): Request<UpdateTableResponse, AWSError> {
        this.boot();
        return this.client.updateTable(
          this.ops["UpdateTable"].apply(partialParams)
        );
    }

    invokeUpdateUserDefinedFunction(partialParams: ToOptional<{
      [K in keyof UpdateUserDefinedFunctionRequest & keyof Omit<UpdateUserDefinedFunctionRequest, "DatabaseName">]: (UpdateUserDefinedFunctionRequest)[K]
    }>): Request<UpdateUserDefinedFunctionResponse, AWSError> {
        this.boot();
        return this.client.updateUserDefinedFunction(
          this.ops["UpdateUserDefinedFunction"].apply(partialParams)
        );
    }
}