
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
    ListDataCatalogsInput,
    ListDatabasesInput,
    ListEngineVersionsInput,
    ListNamedQueriesInput,
    ListPreparedStatementsInput,
    ListQueryExecutionsInput,
    ListTableMetadataInput,
    ListTagsForResourceInput,
    ListWorkGroupsInput,
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
    ListDataCatalogsOutput,
    ListDatabasesOutput,
    ListEngineVersionsOutput,
    ListNamedQueriesOutput,
    ListPreparedStatementsOutput,
    ListQueryExecutionsOutput,
    ListTableMetadataOutput,
    ListTagsForResourceOutput,
    ListWorkGroupsOutput,
    StartQueryExecutionOutput,
    StopQueryExecutionOutput,
    TagResourceOutput,
    UntagResourceOutput,
    UpdateDataCatalogOutput,
    UpdatePreparedStatementOutput,
    UpdateWorkGroupOutput
} from "aws-sdk/clients/athena";
const schema = require("../apis/athena-2017-05-18.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.athena.Database {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.athena.Database>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Athena()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
          console.log(this.capitalizedParams);
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

    invokeBatchGetNamedQuery(partialParams: ToOptional<{
      [K in keyof BatchGetNamedQueryInput]: (BatchGetNamedQueryInput)[K]
    }>): Request<BatchGetNamedQueryOutput, AWSError> {
        this.boot();
        return this.client.batchGetNamedQuery(
          this.ops["BatchGetNamedQuery"].apply(partialParams)
        );
    }

    invokeBatchGetQueryExecution(partialParams: ToOptional<{
      [K in keyof BatchGetQueryExecutionInput]: (BatchGetQueryExecutionInput)[K]
    }>): Request<BatchGetQueryExecutionOutput, AWSError> {
        this.boot();
        return this.client.batchGetQueryExecution(
          this.ops["BatchGetQueryExecution"].apply(partialParams)
        );
    }

    invokeCreateDataCatalog(partialParams: ToOptional<{
      [K in keyof CreateDataCatalogInput & keyof Omit<CreateDataCatalogInput, "Name">]: (CreateDataCatalogInput)[K]
    }>): Request<CreateDataCatalogOutput, AWSError> {
        this.boot();
        return this.client.createDataCatalog(
          this.ops["CreateDataCatalog"].apply(partialParams)
        );
    }

    invokeCreateNamedQuery(partialParams: ToOptional<{
      [K in keyof CreateNamedQueryInput & keyof Omit<CreateNamedQueryInput, "Name">]: (CreateNamedQueryInput)[K]
    }>): Request<CreateNamedQueryOutput, AWSError> {
        this.boot();
        return this.client.createNamedQuery(
          this.ops["CreateNamedQuery"].apply(partialParams)
        );
    }

    invokeCreatePreparedStatement(partialParams: ToOptional<{
      [K in keyof CreatePreparedStatementInput]: (CreatePreparedStatementInput)[K]
    }>): Request<CreatePreparedStatementOutput, AWSError> {
        this.boot();
        return this.client.createPreparedStatement(
          this.ops["CreatePreparedStatement"].apply(partialParams)
        );
    }

    invokeCreateWorkGroup(partialParams: ToOptional<{
      [K in keyof CreateWorkGroupInput & keyof Omit<CreateWorkGroupInput, "Name">]: (CreateWorkGroupInput)[K]
    }>): Request<CreateWorkGroupOutput, AWSError> {
        this.boot();
        return this.client.createWorkGroup(
          this.ops["CreateWorkGroup"].apply(partialParams)
        );
    }

    invokeDeleteDataCatalog(partialParams: ToOptional<{
      [K in keyof DeleteDataCatalogInput & keyof Omit<DeleteDataCatalogInput, "Name">]: (DeleteDataCatalogInput)[K]
    }>): Request<DeleteDataCatalogOutput, AWSError> {
        this.boot();
        return this.client.deleteDataCatalog(
          this.ops["DeleteDataCatalog"].apply(partialParams)
        );
    }

    invokeDeleteNamedQuery(partialParams: ToOptional<{
      [K in keyof DeleteNamedQueryInput]: (DeleteNamedQueryInput)[K]
    }>): Request<DeleteNamedQueryOutput, AWSError> {
        this.boot();
        return this.client.deleteNamedQuery(
          this.ops["DeleteNamedQuery"].apply(partialParams)
        );
    }

    invokeDeletePreparedStatement(partialParams: ToOptional<{
      [K in keyof DeletePreparedStatementInput]: (DeletePreparedStatementInput)[K]
    }>): Request<DeletePreparedStatementOutput, AWSError> {
        this.boot();
        return this.client.deletePreparedStatement(
          this.ops["DeletePreparedStatement"].apply(partialParams)
        );
    }

    invokeDeleteWorkGroup(partialParams: ToOptional<{
      [K in keyof DeleteWorkGroupInput]: (DeleteWorkGroupInput)[K]
    }>): Request<DeleteWorkGroupOutput, AWSError> {
        this.boot();
        return this.client.deleteWorkGroup(
          this.ops["DeleteWorkGroup"].apply(partialParams)
        );
    }

    invokeGetDataCatalog(partialParams: ToOptional<{
      [K in keyof GetDataCatalogInput & keyof Omit<GetDataCatalogInput, "Name">]: (GetDataCatalogInput)[K]
    }>): Request<GetDataCatalogOutput, AWSError> {
        this.boot();
        return this.client.getDataCatalog(
          this.ops["GetDataCatalog"].apply(partialParams)
        );
    }

    invokeGetDatabase(partialParams: ToOptional<{
      [K in keyof GetDatabaseInput & keyof Omit<GetDatabaseInput, "DatabaseName">]: (GetDatabaseInput)[K]
    }>): Request<GetDatabaseOutput, AWSError> {
        this.boot();
        return this.client.getDatabase(
          this.ops["GetDatabase"].apply(partialParams)
        );
    }

    invokeGetNamedQuery(partialParams: ToOptional<{
      [K in keyof GetNamedQueryInput]: (GetNamedQueryInput)[K]
    }>): Request<GetNamedQueryOutput, AWSError> {
        this.boot();
        return this.client.getNamedQuery(
          this.ops["GetNamedQuery"].apply(partialParams)
        );
    }

    invokeGetPreparedStatement(partialParams: ToOptional<{
      [K in keyof GetPreparedStatementInput]: (GetPreparedStatementInput)[K]
    }>): Request<GetPreparedStatementOutput, AWSError> {
        this.boot();
        return this.client.getPreparedStatement(
          this.ops["GetPreparedStatement"].apply(partialParams)
        );
    }

    invokeGetQueryExecution(partialParams: ToOptional<{
      [K in keyof GetQueryExecutionInput]: (GetQueryExecutionInput)[K]
    }>): Request<GetQueryExecutionOutput, AWSError> {
        this.boot();
        return this.client.getQueryExecution(
          this.ops["GetQueryExecution"].apply(partialParams)
        );
    }

    invokeGetQueryResults(partialParams: ToOptional<{
      [K in keyof GetQueryResultsInput]: (GetQueryResultsInput)[K]
    }>): Request<GetQueryResultsOutput, AWSError> {
        this.boot();
        return this.client.getQueryResults(
          this.ops["GetQueryResults"].apply(partialParams)
        );
    }

    invokeGetTableMetadata(partialParams: ToOptional<{
      [K in keyof GetTableMetadataInput & keyof Omit<GetTableMetadataInput, "DatabaseName">]: (GetTableMetadataInput)[K]
    }>): Request<GetTableMetadataOutput, AWSError> {
        this.boot();
        return this.client.getTableMetadata(
          this.ops["GetTableMetadata"].apply(partialParams)
        );
    }

    invokeGetWorkGroup(partialParams: ToOptional<{
      [K in keyof GetWorkGroupInput]: (GetWorkGroupInput)[K]
    }>): Request<GetWorkGroupOutput, AWSError> {
        this.boot();
        return this.client.getWorkGroup(
          this.ops["GetWorkGroup"].apply(partialParams)
        );
    }

    invokeListDataCatalogs(partialParams: ToOptional<{
      [K in keyof ListDataCatalogsInput]: (ListDataCatalogsInput)[K]
    }>): Request<ListDataCatalogsOutput, AWSError> {
        this.boot();
        return this.client.listDataCatalogs(
          this.ops["ListDataCatalogs"].apply(partialParams)
        );
    }

    invokeListDatabases(partialParams: ToOptional<{
      [K in keyof ListDatabasesInput]: (ListDatabasesInput)[K]
    }>): Request<ListDatabasesOutput, AWSError> {
        this.boot();
        return this.client.listDatabases(
          this.ops["ListDatabases"].apply(partialParams)
        );
    }

    invokeListEngineVersions(partialParams: ToOptional<{
      [K in keyof ListEngineVersionsInput]: (ListEngineVersionsInput)[K]
    }>): Request<ListEngineVersionsOutput, AWSError> {
        this.boot();
        return this.client.listEngineVersions(
          this.ops["ListEngineVersions"].apply(partialParams)
        );
    }

    invokeListNamedQueries(partialParams: ToOptional<{
      [K in keyof ListNamedQueriesInput]: (ListNamedQueriesInput)[K]
    }>): Request<ListNamedQueriesOutput, AWSError> {
        this.boot();
        return this.client.listNamedQueries(
          this.ops["ListNamedQueries"].apply(partialParams)
        );
    }

    invokeListPreparedStatements(partialParams: ToOptional<{
      [K in keyof ListPreparedStatementsInput]: (ListPreparedStatementsInput)[K]
    }>): Request<ListPreparedStatementsOutput, AWSError> {
        this.boot();
        return this.client.listPreparedStatements(
          this.ops["ListPreparedStatements"].apply(partialParams)
        );
    }

    invokeListQueryExecutions(partialParams: ToOptional<{
      [K in keyof ListQueryExecutionsInput]: (ListQueryExecutionsInput)[K]
    }>): Request<ListQueryExecutionsOutput, AWSError> {
        this.boot();
        return this.client.listQueryExecutions(
          this.ops["ListQueryExecutions"].apply(partialParams)
        );
    }

    invokeListTableMetadata(partialParams: ToOptional<{
      [K in keyof ListTableMetadataInput & keyof Omit<ListTableMetadataInput, "DatabaseName">]: (ListTableMetadataInput)[K]
    }>): Request<ListTableMetadataOutput, AWSError> {
        this.boot();
        return this.client.listTableMetadata(
          this.ops["ListTableMetadata"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceInput]: (ListTagsForResourceInput)[K]
    }>): Request<ListTagsForResourceOutput, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeListWorkGroups(partialParams: ToOptional<{
      [K in keyof ListWorkGroupsInput]: (ListWorkGroupsInput)[K]
    }>): Request<ListWorkGroupsOutput, AWSError> {
        this.boot();
        return this.client.listWorkGroups(
          this.ops["ListWorkGroups"].apply(partialParams)
        );
    }

    invokeStartQueryExecution(partialParams: ToOptional<{
      [K in keyof StartQueryExecutionInput]: (StartQueryExecutionInput)[K]
    }>): Request<StartQueryExecutionOutput, AWSError> {
        this.boot();
        return this.client.startQueryExecution(
          this.ops["StartQueryExecution"].apply(partialParams)
        );
    }

    invokeStopQueryExecution(partialParams: ToOptional<{
      [K in keyof StopQueryExecutionInput]: (StopQueryExecutionInput)[K]
    }>): Request<StopQueryExecutionOutput, AWSError> {
        this.boot();
        return this.client.stopQueryExecution(
          this.ops["StopQueryExecution"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceInput]: (TagResourceInput)[K]
    }>): Request<TagResourceOutput, AWSError> {
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceInput]: (UntagResourceInput)[K]
    }>): Request<UntagResourceOutput, AWSError> {
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateDataCatalog(partialParams: ToOptional<{
      [K in keyof UpdateDataCatalogInput & keyof Omit<UpdateDataCatalogInput, "Name">]: (UpdateDataCatalogInput)[K]
    }>): Request<UpdateDataCatalogOutput, AWSError> {
        this.boot();
        return this.client.updateDataCatalog(
          this.ops["UpdateDataCatalog"].apply(partialParams)
        );
    }

    invokeUpdatePreparedStatement(partialParams: ToOptional<{
      [K in keyof UpdatePreparedStatementInput]: (UpdatePreparedStatementInput)[K]
    }>): Request<UpdatePreparedStatementOutput, AWSError> {
        this.boot();
        return this.client.updatePreparedStatement(
          this.ops["UpdatePreparedStatement"].apply(partialParams)
        );
    }

    invokeUpdateWorkGroup(partialParams: ToOptional<{
      [K in keyof UpdateWorkGroupInput]: (UpdateWorkGroupInput)[K]
    }>): Request<UpdateWorkGroupOutput, AWSError> {
        this.boot();
        return this.client.updateWorkGroup(
          this.ops["UpdateWorkGroup"].apply(partialParams)
        );
    }
}