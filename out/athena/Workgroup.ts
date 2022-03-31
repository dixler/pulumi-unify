
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
const schema = require("../apis/athena-2017-05-18.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.athena.Workgroup {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.athena.Workgroup>) {
        super(...args)
        this.client = new awssdk.Athena()
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

    invokeBatchGetNamedQuery(partialParams: ToOptional<{
      [K in keyof BatchGetNamedQueryInput & keyof BatchGetNamedQueryInput & keyof BatchGetNamedQueryInput & keyof BatchGetNamedQueryInput]: (BatchGetNamedQueryInput & BatchGetNamedQueryInput & BatchGetNamedQueryInput & BatchGetNamedQueryInput)[K]
    }>): Request<BatchGetNamedQueryOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetNamedQuery(
          this.ops["BatchGetNamedQuery"].applicator.apply(partialParams)
        );
    }

    invokeBatchGetQueryExecution(partialParams: ToOptional<{
      [K in keyof BatchGetQueryExecutionInput & keyof BatchGetQueryExecutionInput & keyof BatchGetQueryExecutionInput & keyof BatchGetQueryExecutionInput]: (BatchGetQueryExecutionInput & BatchGetQueryExecutionInput & BatchGetQueryExecutionInput & BatchGetQueryExecutionInput)[K]
    }>): Request<BatchGetQueryExecutionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetQueryExecution(
          this.ops["BatchGetQueryExecution"].applicator.apply(partialParams)
        );
    }

    invokeCreateDataCatalog(partialParams: ToOptional<{
      [K in keyof CreateDataCatalogInput & keyof CreateDataCatalogInput & keyof Omit<CreateDataCatalogInput, "Name"> & keyof CreateDataCatalogInput]: (CreateDataCatalogInput & CreateDataCatalogInput & Omit<CreateDataCatalogInput, "Name"> & CreateDataCatalogInput)[K]
    }>): Request<CreateDataCatalogOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDataCatalog(
          this.ops["CreateDataCatalog"].applicator.apply(partialParams)
        );
    }

    invokeCreateNamedQuery(partialParams: ToOptional<{
      [K in keyof CreateNamedQueryInput & keyof CreateNamedQueryInput & keyof CreateNamedQueryInput & keyof CreateNamedQueryInput]: (CreateNamedQueryInput & CreateNamedQueryInput & CreateNamedQueryInput & CreateNamedQueryInput)[K]
    }>): Request<CreateNamedQueryOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createNamedQuery(
          this.ops["CreateNamedQuery"].applicator.apply(partialParams)
        );
    }

    invokeCreatePreparedStatement(partialParams: ToOptional<{
      [K in keyof CreatePreparedStatementInput & keyof CreatePreparedStatementInput & keyof CreatePreparedStatementInput & keyof CreatePreparedStatementInput]: (CreatePreparedStatementInput & CreatePreparedStatementInput & CreatePreparedStatementInput & CreatePreparedStatementInput)[K]
    }>): Request<CreatePreparedStatementOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPreparedStatement(
          this.ops["CreatePreparedStatement"].applicator.apply(partialParams)
        );
    }

    invokeCreateWorkGroup(partialParams: ToOptional<{
      [K in keyof CreateWorkGroupInput & keyof CreateWorkGroupInput & keyof CreateWorkGroupInput & keyof CreateWorkGroupInput]: (CreateWorkGroupInput & CreateWorkGroupInput & CreateWorkGroupInput & CreateWorkGroupInput)[K]
    }>): Request<CreateWorkGroupOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createWorkGroup(
          this.ops["CreateWorkGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDataCatalog(partialParams: ToOptional<{
      [K in keyof DeleteDataCatalogInput & keyof DeleteDataCatalogInput & keyof Omit<DeleteDataCatalogInput, "Name"> & keyof DeleteDataCatalogInput]: (DeleteDataCatalogInput & DeleteDataCatalogInput & Omit<DeleteDataCatalogInput, "Name"> & DeleteDataCatalogInput)[K]
    }>): Request<DeleteDataCatalogOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDataCatalog(
          this.ops["DeleteDataCatalog"].applicator.apply(partialParams)
        );
    }

    invokeDeleteNamedQuery(partialParams: ToOptional<{
      [K in keyof DeleteNamedQueryInput & keyof DeleteNamedQueryInput & keyof DeleteNamedQueryInput & keyof DeleteNamedQueryInput]: (DeleteNamedQueryInput & DeleteNamedQueryInput & DeleteNamedQueryInput & DeleteNamedQueryInput)[K]
    }>): Request<DeleteNamedQueryOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteNamedQuery(
          this.ops["DeleteNamedQuery"].applicator.apply(partialParams)
        );
    }

    invokeDeletePreparedStatement(partialParams: ToOptional<{
      [K in keyof DeletePreparedStatementInput & keyof DeletePreparedStatementInput & keyof DeletePreparedStatementInput & keyof DeletePreparedStatementInput]: (DeletePreparedStatementInput & DeletePreparedStatementInput & DeletePreparedStatementInput & DeletePreparedStatementInput)[K]
    }>): Request<DeletePreparedStatementOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePreparedStatement(
          this.ops["DeletePreparedStatement"].applicator.apply(partialParams)
        );
    }

    invokeDeleteWorkGroup(partialParams: ToOptional<{
      [K in keyof DeleteWorkGroupInput & keyof DeleteWorkGroupInput & keyof DeleteWorkGroupInput & keyof DeleteWorkGroupInput]: (DeleteWorkGroupInput & DeleteWorkGroupInput & DeleteWorkGroupInput & DeleteWorkGroupInput)[K]
    }>): Request<DeleteWorkGroupOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteWorkGroup(
          this.ops["DeleteWorkGroup"].applicator.apply(partialParams)
        );
    }

    invokeGetDataCatalog(partialParams: ToOptional<{
      [K in keyof GetDataCatalogInput & keyof GetDataCatalogInput & keyof Omit<GetDataCatalogInput, "Name"> & keyof GetDataCatalogInput]: (GetDataCatalogInput & GetDataCatalogInput & Omit<GetDataCatalogInput, "Name"> & GetDataCatalogInput)[K]
    }>): Request<GetDataCatalogOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDataCatalog(
          this.ops["GetDataCatalog"].applicator.apply(partialParams)
        );
    }

    invokeGetDatabase(partialParams: ToOptional<{
      [K in keyof GetDatabaseInput & keyof GetDatabaseInput & keyof GetDatabaseInput & keyof GetDatabaseInput]: (GetDatabaseInput & GetDatabaseInput & GetDatabaseInput & GetDatabaseInput)[K]
    }>): Request<GetDatabaseOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDatabase(
          this.ops["GetDatabase"].applicator.apply(partialParams)
        );
    }

    invokeGetNamedQuery(partialParams: ToOptional<{
      [K in keyof GetNamedQueryInput & keyof GetNamedQueryInput & keyof GetNamedQueryInput & keyof GetNamedQueryInput]: (GetNamedQueryInput & GetNamedQueryInput & GetNamedQueryInput & GetNamedQueryInput)[K]
    }>): Request<GetNamedQueryOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getNamedQuery(
          this.ops["GetNamedQuery"].applicator.apply(partialParams)
        );
    }

    invokeGetPreparedStatement(partialParams: ToOptional<{
      [K in keyof GetPreparedStatementInput & keyof GetPreparedStatementInput & keyof GetPreparedStatementInput & keyof GetPreparedStatementInput]: (GetPreparedStatementInput & GetPreparedStatementInput & GetPreparedStatementInput & GetPreparedStatementInput)[K]
    }>): Request<GetPreparedStatementOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPreparedStatement(
          this.ops["GetPreparedStatement"].applicator.apply(partialParams)
        );
    }

    invokeGetQueryExecution(partialParams: ToOptional<{
      [K in keyof GetQueryExecutionInput & keyof GetQueryExecutionInput & keyof GetQueryExecutionInput & keyof GetQueryExecutionInput]: (GetQueryExecutionInput & GetQueryExecutionInput & GetQueryExecutionInput & GetQueryExecutionInput)[K]
    }>): Request<GetQueryExecutionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getQueryExecution(
          this.ops["GetQueryExecution"].applicator.apply(partialParams)
        );
    }

    invokeGetQueryResults(partialParams: ToOptional<{
      [K in keyof GetQueryResultsInput & keyof GetQueryResultsInput & keyof GetQueryResultsInput & keyof GetQueryResultsInput]: (GetQueryResultsInput & GetQueryResultsInput & GetQueryResultsInput & GetQueryResultsInput)[K]
    }>): Request<GetQueryResultsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getQueryResults(
          this.ops["GetQueryResults"].applicator.apply(partialParams)
        );
    }

    invokeGetTableMetadata(partialParams: ToOptional<{
      [K in keyof GetTableMetadataInput & keyof GetTableMetadataInput & keyof GetTableMetadataInput & keyof GetTableMetadataInput]: (GetTableMetadataInput & GetTableMetadataInput & GetTableMetadataInput & GetTableMetadataInput)[K]
    }>): Request<GetTableMetadataOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTableMetadata(
          this.ops["GetTableMetadata"].applicator.apply(partialParams)
        );
    }

    invokeGetWorkGroup(partialParams: ToOptional<{
      [K in keyof GetWorkGroupInput & keyof GetWorkGroupInput & keyof GetWorkGroupInput & keyof GetWorkGroupInput]: (GetWorkGroupInput & GetWorkGroupInput & GetWorkGroupInput & GetWorkGroupInput)[K]
    }>): Request<GetWorkGroupOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getWorkGroup(
          this.ops["GetWorkGroup"].applicator.apply(partialParams)
        );
    }

    invokeListDatabases(partialParams: ToOptional<{
      [K in keyof ListDatabasesInput & keyof ListDatabasesInput & keyof ListDatabasesInput & keyof ListDatabasesInput]: (ListDatabasesInput & ListDatabasesInput & ListDatabasesInput & ListDatabasesInput)[K]
    }>): Request<ListDatabasesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDatabases(
          this.ops["ListDatabases"].applicator.apply(partialParams)
        );
    }

    invokeListPreparedStatements(partialParams: ToOptional<{
      [K in keyof ListPreparedStatementsInput & keyof ListPreparedStatementsInput & keyof ListPreparedStatementsInput & keyof ListPreparedStatementsInput]: (ListPreparedStatementsInput & ListPreparedStatementsInput & ListPreparedStatementsInput & ListPreparedStatementsInput)[K]
    }>): Request<ListPreparedStatementsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPreparedStatements(
          this.ops["ListPreparedStatements"].applicator.apply(partialParams)
        );
    }

    invokeListTableMetadata(partialParams: ToOptional<{
      [K in keyof ListTableMetadataInput & keyof ListTableMetadataInput & keyof ListTableMetadataInput & keyof ListTableMetadataInput]: (ListTableMetadataInput & ListTableMetadataInput & ListTableMetadataInput & ListTableMetadataInput)[K]
    }>): Request<ListTableMetadataOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTableMetadata(
          this.ops["ListTableMetadata"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput]: (ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput)[K]
    }>): Request<ListTagsForResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeStartQueryExecution(partialParams: ToOptional<{
      [K in keyof StartQueryExecutionInput & keyof StartQueryExecutionInput & keyof StartQueryExecutionInput & keyof StartQueryExecutionInput]: (StartQueryExecutionInput & StartQueryExecutionInput & StartQueryExecutionInput & StartQueryExecutionInput)[K]
    }>): Request<StartQueryExecutionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startQueryExecution(
          this.ops["StartQueryExecution"].applicator.apply(partialParams)
        );
    }

    invokeStopQueryExecution(partialParams: ToOptional<{
      [K in keyof StopQueryExecutionInput & keyof StopQueryExecutionInput & keyof StopQueryExecutionInput & keyof StopQueryExecutionInput]: (StopQueryExecutionInput & StopQueryExecutionInput & StopQueryExecutionInput & StopQueryExecutionInput)[K]
    }>): Request<StopQueryExecutionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopQueryExecution(
          this.ops["StopQueryExecution"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput]: (TagResourceInput & TagResourceInput & TagResourceInput & TagResourceInput)[K]
    }>): Request<TagResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput]: (UntagResourceInput & UntagResourceInput & UntagResourceInput & UntagResourceInput)[K]
    }>): Request<UntagResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDataCatalog(partialParams: ToOptional<{
      [K in keyof UpdateDataCatalogInput & keyof UpdateDataCatalogInput & keyof Omit<UpdateDataCatalogInput, "Name"> & keyof UpdateDataCatalogInput]: (UpdateDataCatalogInput & UpdateDataCatalogInput & Omit<UpdateDataCatalogInput, "Name"> & UpdateDataCatalogInput)[K]
    }>): Request<UpdateDataCatalogOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDataCatalog(
          this.ops["UpdateDataCatalog"].applicator.apply(partialParams)
        );
    }

    invokeUpdatePreparedStatement(partialParams: ToOptional<{
      [K in keyof UpdatePreparedStatementInput & keyof UpdatePreparedStatementInput & keyof UpdatePreparedStatementInput & keyof UpdatePreparedStatementInput]: (UpdatePreparedStatementInput & UpdatePreparedStatementInput & UpdatePreparedStatementInput & UpdatePreparedStatementInput)[K]
    }>): Request<UpdatePreparedStatementOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePreparedStatement(
          this.ops["UpdatePreparedStatement"].applicator.apply(partialParams)
        );
    }

    invokeUpdateWorkGroup(partialParams: ToOptional<{
      [K in keyof UpdateWorkGroupInput & keyof UpdateWorkGroupInput & keyof UpdateWorkGroupInput & keyof UpdateWorkGroupInput]: (UpdateWorkGroupInput & UpdateWorkGroupInput & UpdateWorkGroupInput & UpdateWorkGroupInput)[K]
    }>): Request<UpdateWorkGroupOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateWorkGroup(
          this.ops["UpdateWorkGroup"].applicator.apply(partialParams)
        );
    }
}