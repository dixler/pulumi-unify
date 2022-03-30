
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    BatchGetNamedQueryInput,
    BatchGetQueryExecutionInput,
    CreateDataCatalogInput,
    CreateNamedQueryInput,
    CreatePreparedStatementInput,
    CreateWorkGroupInput,
    DeleteDataCatalogInput,
    DeleteNamedQueryInput,
    DeletePreparedStatementInput,
    DeleteWorkGroupInput,
    GetDataCatalogInput,
    GetDatabaseInput,
    GetNamedQueryInput,
    GetPreparedStatementInput,
    GetQueryExecutionInput,
    GetQueryResultsInput,
    GetTableMetadataInput,
    GetWorkGroupInput,
    ListDatabasesInput,
    ListPreparedStatementsInput,
    ListTableMetadataInput,
    ListTagsForResourceInput,
    StartQueryExecutionInput,
    StopQueryExecutionInput,
    TagResourceInput,
    UntagResourceInput,
    UpdateDataCatalogInput,
    UpdatePreparedStatementInput,
    UpdateWorkGroupInput,
    BatchGetNamedQueryOutput,
    BatchGetQueryExecutionOutput,
    CreateDataCatalogOutput,
    CreateNamedQueryOutput,
    CreatePreparedStatementOutput,
    CreateWorkGroupOutput,
    DeleteDataCatalogOutput,
    DeleteNamedQueryOutput,
    DeletePreparedStatementOutput,
    DeleteWorkGroupOutput,
    GetDataCatalogOutput,
    GetDatabaseOutput,
    GetNamedQueryOutput,
    GetPreparedStatementOutput,
    GetQueryExecutionOutput,
    GetQueryResultsOutput,
    GetTableMetadataOutput,
    GetWorkGroupOutput,
    ListDatabasesOutput,
    ListPreparedStatementsOutput,
    ListTableMetadataOutput,
    ListTagsForResourceOutput,
    StartQueryExecutionOutput,
    StopQueryExecutionOutput,
    TagResourceOutput,
    UntagResourceOutput,
    UpdateDataCatalogOutput,
    UpdatePreparedStatementOutput,
    UpdateWorkGroupOutput
} from "aws-sdk/clients/athena";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.athena.Database {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.athena.Database>) {
        super(...args)
        this.client = new awssdk.Athena()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/athena-2017-05-18.normal.json"), this.client)
    }

    invokeBatchGetNamedQuery(partialParams: ToOptional<{
      [K in keyof BatchGetNamedQueryInput & keyof BatchGetNamedQueryInput & keyof BatchGetNamedQueryInput & keyof BatchGetNamedQueryInput]: (BatchGetNamedQueryInput & BatchGetNamedQueryInput & BatchGetNamedQueryInput & BatchGetNamedQueryInput)[K]
    }>): BatchGetNamedQueryOutput {
        return this.client.batchGetNamedQuery(
            this.ops["BatchGetNamedQuery"].apply(partialParams)
        );
    }

    invokeBatchGetQueryExecution(partialParams: ToOptional<{
      [K in keyof BatchGetQueryExecutionInput & keyof BatchGetQueryExecutionInput & keyof BatchGetQueryExecutionInput & keyof BatchGetQueryExecutionInput]: (BatchGetQueryExecutionInput & BatchGetQueryExecutionInput & BatchGetQueryExecutionInput & BatchGetQueryExecutionInput)[K]
    }>): BatchGetQueryExecutionOutput {
        return this.client.batchGetQueryExecution(
            this.ops["BatchGetQueryExecution"].apply(partialParams)
        );
    }

    invokeCreateDataCatalog(partialParams: ToOptional<{
      [K in keyof CreateDataCatalogInput & keyof CreateDataCatalogInput & keyof CreateDataCatalogInput & keyof Omit<CreateDataCatalogInput, "Name">]: (CreateDataCatalogInput & CreateDataCatalogInput & CreateDataCatalogInput & Omit<CreateDataCatalogInput, "Name">)[K]
    }>): CreateDataCatalogOutput {
        return this.client.createDataCatalog(
            this.ops["CreateDataCatalog"].apply(partialParams)
        );
    }

    invokeCreateNamedQuery(partialParams: ToOptional<{
      [K in keyof CreateNamedQueryInput & keyof CreateNamedQueryInput & keyof CreateNamedQueryInput & keyof CreateNamedQueryInput]: (CreateNamedQueryInput & CreateNamedQueryInput & CreateNamedQueryInput & CreateNamedQueryInput)[K]
    }>): CreateNamedQueryOutput {
        return this.client.createNamedQuery(
            this.ops["CreateNamedQuery"].apply(partialParams)
        );
    }

    invokeCreatePreparedStatement(partialParams: ToOptional<{
      [K in keyof CreatePreparedStatementInput & keyof CreatePreparedStatementInput & keyof CreatePreparedStatementInput & keyof CreatePreparedStatementInput]: (CreatePreparedStatementInput & CreatePreparedStatementInput & CreatePreparedStatementInput & CreatePreparedStatementInput)[K]
    }>): CreatePreparedStatementOutput {
        return this.client.createPreparedStatement(
            this.ops["CreatePreparedStatement"].apply(partialParams)
        );
    }

    invokeCreateWorkGroup(partialParams: ToOptional<{
      [K in keyof CreateWorkGroupInput & keyof CreateWorkGroupInput & keyof CreateWorkGroupInput & keyof CreateWorkGroupInput]: (CreateWorkGroupInput & CreateWorkGroupInput & CreateWorkGroupInput & CreateWorkGroupInput)[K]
    }>): CreateWorkGroupOutput {
        return this.client.createWorkGroup(
            this.ops["CreateWorkGroup"].apply(partialParams)
        );
    }

    invokeDeleteDataCatalog(partialParams: ToOptional<{
      [K in keyof DeleteDataCatalogInput & keyof DeleteDataCatalogInput & keyof DeleteDataCatalogInput & keyof Omit<DeleteDataCatalogInput, "Name">]: (DeleteDataCatalogInput & DeleteDataCatalogInput & DeleteDataCatalogInput & Omit<DeleteDataCatalogInput, "Name">)[K]
    }>): DeleteDataCatalogOutput {
        return this.client.deleteDataCatalog(
            this.ops["DeleteDataCatalog"].apply(partialParams)
        );
    }

    invokeDeleteNamedQuery(partialParams: ToOptional<{
      [K in keyof DeleteNamedQueryInput & keyof DeleteNamedQueryInput & keyof DeleteNamedQueryInput & keyof DeleteNamedQueryInput]: (DeleteNamedQueryInput & DeleteNamedQueryInput & DeleteNamedQueryInput & DeleteNamedQueryInput)[K]
    }>): DeleteNamedQueryOutput {
        return this.client.deleteNamedQuery(
            this.ops["DeleteNamedQuery"].apply(partialParams)
        );
    }

    invokeDeletePreparedStatement(partialParams: ToOptional<{
      [K in keyof DeletePreparedStatementInput & keyof DeletePreparedStatementInput & keyof DeletePreparedStatementInput & keyof DeletePreparedStatementInput]: (DeletePreparedStatementInput & DeletePreparedStatementInput & DeletePreparedStatementInput & DeletePreparedStatementInput)[K]
    }>): DeletePreparedStatementOutput {
        return this.client.deletePreparedStatement(
            this.ops["DeletePreparedStatement"].apply(partialParams)
        );
    }

    invokeDeleteWorkGroup(partialParams: ToOptional<{
      [K in keyof DeleteWorkGroupInput & keyof DeleteWorkGroupInput & keyof DeleteWorkGroupInput & keyof DeleteWorkGroupInput]: (DeleteWorkGroupInput & DeleteWorkGroupInput & DeleteWorkGroupInput & DeleteWorkGroupInput)[K]
    }>): DeleteWorkGroupOutput {
        return this.client.deleteWorkGroup(
            this.ops["DeleteWorkGroup"].apply(partialParams)
        );
    }

    invokeGetDataCatalog(partialParams: ToOptional<{
      [K in keyof GetDataCatalogInput & keyof GetDataCatalogInput & keyof GetDataCatalogInput & keyof Omit<GetDataCatalogInput, "Name">]: (GetDataCatalogInput & GetDataCatalogInput & GetDataCatalogInput & Omit<GetDataCatalogInput, "Name">)[K]
    }>): GetDataCatalogOutput {
        return this.client.getDataCatalog(
            this.ops["GetDataCatalog"].apply(partialParams)
        );
    }

    invokeGetDatabase(partialParams: ToOptional<{
      [K in keyof GetDatabaseInput & keyof GetDatabaseInput & keyof GetDatabaseInput & keyof GetDatabaseInput]: (GetDatabaseInput & GetDatabaseInput & GetDatabaseInput & GetDatabaseInput)[K]
    }>): GetDatabaseOutput {
        return this.client.getDatabase(
            this.ops["GetDatabase"].apply(partialParams)
        );
    }

    invokeGetNamedQuery(partialParams: ToOptional<{
      [K in keyof GetNamedQueryInput & keyof GetNamedQueryInput & keyof GetNamedQueryInput & keyof GetNamedQueryInput]: (GetNamedQueryInput & GetNamedQueryInput & GetNamedQueryInput & GetNamedQueryInput)[K]
    }>): GetNamedQueryOutput {
        return this.client.getNamedQuery(
            this.ops["GetNamedQuery"].apply(partialParams)
        );
    }

    invokeGetPreparedStatement(partialParams: ToOptional<{
      [K in keyof GetPreparedStatementInput & keyof GetPreparedStatementInput & keyof GetPreparedStatementInput & keyof GetPreparedStatementInput]: (GetPreparedStatementInput & GetPreparedStatementInput & GetPreparedStatementInput & GetPreparedStatementInput)[K]
    }>): GetPreparedStatementOutput {
        return this.client.getPreparedStatement(
            this.ops["GetPreparedStatement"].apply(partialParams)
        );
    }

    invokeGetQueryExecution(partialParams: ToOptional<{
      [K in keyof GetQueryExecutionInput & keyof GetQueryExecutionInput & keyof GetQueryExecutionInput & keyof GetQueryExecutionInput]: (GetQueryExecutionInput & GetQueryExecutionInput & GetQueryExecutionInput & GetQueryExecutionInput)[K]
    }>): GetQueryExecutionOutput {
        return this.client.getQueryExecution(
            this.ops["GetQueryExecution"].apply(partialParams)
        );
    }

    invokeGetQueryResults(partialParams: ToOptional<{
      [K in keyof GetQueryResultsInput & keyof GetQueryResultsInput & keyof GetQueryResultsInput & keyof GetQueryResultsInput]: (GetQueryResultsInput & GetQueryResultsInput & GetQueryResultsInput & GetQueryResultsInput)[K]
    }>): GetQueryResultsOutput {
        return this.client.getQueryResults(
            this.ops["GetQueryResults"].apply(partialParams)
        );
    }

    invokeGetTableMetadata(partialParams: ToOptional<{
      [K in keyof GetTableMetadataInput & keyof GetTableMetadataInput & keyof GetTableMetadataInput & keyof GetTableMetadataInput]: (GetTableMetadataInput & GetTableMetadataInput & GetTableMetadataInput & GetTableMetadataInput)[K]
    }>): GetTableMetadataOutput {
        return this.client.getTableMetadata(
            this.ops["GetTableMetadata"].apply(partialParams)
        );
    }

    invokeGetWorkGroup(partialParams: ToOptional<{
      [K in keyof GetWorkGroupInput & keyof GetWorkGroupInput & keyof GetWorkGroupInput & keyof GetWorkGroupInput]: (GetWorkGroupInput & GetWorkGroupInput & GetWorkGroupInput & GetWorkGroupInput)[K]
    }>): GetWorkGroupOutput {
        return this.client.getWorkGroup(
            this.ops["GetWorkGroup"].apply(partialParams)
        );
    }

    invokeListDatabases(partialParams: ToOptional<{
      [K in keyof ListDatabasesInput & keyof ListDatabasesInput & keyof ListDatabasesInput & keyof ListDatabasesInput]: (ListDatabasesInput & ListDatabasesInput & ListDatabasesInput & ListDatabasesInput)[K]
    }>): ListDatabasesOutput {
        return this.client.listDatabases(
            this.ops["ListDatabases"].apply(partialParams)
        );
    }

    invokeListPreparedStatements(partialParams: ToOptional<{
      [K in keyof ListPreparedStatementsInput & keyof ListPreparedStatementsInput & keyof ListPreparedStatementsInput & keyof ListPreparedStatementsInput]: (ListPreparedStatementsInput & ListPreparedStatementsInput & ListPreparedStatementsInput & ListPreparedStatementsInput)[K]
    }>): ListPreparedStatementsOutput {
        return this.client.listPreparedStatements(
            this.ops["ListPreparedStatements"].apply(partialParams)
        );
    }

    invokeListTableMetadata(partialParams: ToOptional<{
      [K in keyof ListTableMetadataInput & keyof ListTableMetadataInput & keyof ListTableMetadataInput & keyof ListTableMetadataInput]: (ListTableMetadataInput & ListTableMetadataInput & ListTableMetadataInput & ListTableMetadataInput)[K]
    }>): ListTableMetadataOutput {
        return this.client.listTableMetadata(
            this.ops["ListTableMetadata"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput]: (ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput)[K]
    }>): ListTagsForResourceOutput {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeStartQueryExecution(partialParams: ToOptional<{
      [K in keyof StartQueryExecutionInput & keyof StartQueryExecutionInput & keyof StartQueryExecutionInput & keyof StartQueryExecutionInput]: (StartQueryExecutionInput & StartQueryExecutionInput & StartQueryExecutionInput & StartQueryExecutionInput)[K]
    }>): StartQueryExecutionOutput {
        return this.client.startQueryExecution(
            this.ops["StartQueryExecution"].apply(partialParams)
        );
    }

    invokeStopQueryExecution(partialParams: ToOptional<{
      [K in keyof StopQueryExecutionInput & keyof StopQueryExecutionInput & keyof StopQueryExecutionInput & keyof StopQueryExecutionInput]: (StopQueryExecutionInput & StopQueryExecutionInput & StopQueryExecutionInput & StopQueryExecutionInput)[K]
    }>): StopQueryExecutionOutput {
        return this.client.stopQueryExecution(
            this.ops["StopQueryExecution"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput]: (TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput)[K]
    }>): TagResourceOutput {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput]: (UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput)[K]
    }>): UntagResourceOutput {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateDataCatalog(partialParams: ToOptional<{
      [K in keyof UpdateDataCatalogInput & keyof UpdateDataCatalogInput & keyof UpdateDataCatalogInput & keyof Omit<UpdateDataCatalogInput, "Name">]: (UpdateDataCatalogInput & UpdateDataCatalogInput & UpdateDataCatalogInput & Omit<UpdateDataCatalogInput, "Name">)[K]
    }>): UpdateDataCatalogOutput {
        return this.client.updateDataCatalog(
            this.ops["UpdateDataCatalog"].apply(partialParams)
        );
    }

    invokeUpdatePreparedStatement(partialParams: ToOptional<{
      [K in keyof UpdatePreparedStatementInput & keyof UpdatePreparedStatementInput & keyof UpdatePreparedStatementInput & keyof UpdatePreparedStatementInput]: (UpdatePreparedStatementInput & UpdatePreparedStatementInput & UpdatePreparedStatementInput & UpdatePreparedStatementInput)[K]
    }>): UpdatePreparedStatementOutput {
        return this.client.updatePreparedStatement(
            this.ops["UpdatePreparedStatement"].apply(partialParams)
        );
    }

    invokeUpdateWorkGroup(partialParams: ToOptional<{
      [K in keyof UpdateWorkGroupInput & keyof UpdateWorkGroupInput & keyof UpdateWorkGroupInput & keyof UpdateWorkGroupInput]: (UpdateWorkGroupInput & UpdateWorkGroupInput & UpdateWorkGroupInput & UpdateWorkGroupInput)[K]
    }>): UpdateWorkGroupOutput {
        return this.client.updateWorkGroup(
            this.ops["UpdateWorkGroup"].apply(partialParams)
        );
    }
}