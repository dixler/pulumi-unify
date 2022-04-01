
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateDataCatalogInput,
    CreateNamedQueryInput,
    CreateWorkGroupInput,
    DeleteDataCatalogInput,
    GetDataCatalogInput,
    GetDatabaseInput,
    GetTableMetadataInput,
    ListTableMetadataInput,
    UpdateDataCatalogInput,
    CreateDataCatalogOutput,
    CreateNamedQueryOutput,
    CreateWorkGroupOutput,
    DeleteDataCatalogOutput,
    GetDataCatalogOutput,
    GetDatabaseOutput,
    GetTableMetadataOutput,
    ListTableMetadataOutput,
    UpdateDataCatalogOutput
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

    invokeGetTableMetadata(partialParams: ToOptional<{
      [K in keyof GetTableMetadataInput & keyof Omit<GetTableMetadataInput, "DatabaseName">]: (GetTableMetadataInput)[K]
    }>): Request<GetTableMetadataOutput, AWSError> {
        this.boot();
        return this.client.getTableMetadata(
          this.ops["GetTableMetadata"].apply(partialParams)
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

    invokeUpdateDataCatalog(partialParams: ToOptional<{
      [K in keyof UpdateDataCatalogInput & keyof Omit<UpdateDataCatalogInput, "Name">]: (UpdateDataCatalogInput)[K]
    }>): Request<UpdateDataCatalogOutput, AWSError> {
        this.boot();
        return this.client.updateDataCatalog(
          this.ops["UpdateDataCatalog"].apply(partialParams)
        );
    }
}