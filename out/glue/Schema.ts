
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CheckSchemaVersionValidityInput,
    CreateRegistryInput,
    CreateSchemaInput,
    GetSchemaByDefinitionInput,
    RegisterSchemaVersionInput,
    UpdateRegistryInput,
    CheckSchemaVersionValidityResponse,
    CreateRegistryResponse,
    CreateSchemaResponse,
    GetSchemaByDefinitionResponse,
    RegisterSchemaVersionResponse,
    UpdateRegistryResponse
} from "aws-sdk/clients/glue";
const schema = require("../apis/glue-2017-03-31.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.glue.Schema {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.glue.Schema>) {
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

    invokeCheckSchemaVersionValidity(partialParams: ToOptional<{
      [K in keyof CheckSchemaVersionValidityInput & keyof Omit<CheckSchemaVersionValidityInput, "DataFormat" | "SchemaDefinition">]: (CheckSchemaVersionValidityInput)[K]
    }>): Request<CheckSchemaVersionValidityResponse, AWSError> {
        this.boot();
        return this.client.checkSchemaVersionValidity(
          this.ops["CheckSchemaVersionValidity"].apply(partialParams)
        );
    }

    invokeCreateRegistry(partialParams: ToOptional<{
      [K in keyof CreateRegistryInput & keyof Omit<CreateRegistryInput, "RegistryName">]: (CreateRegistryInput)[K]
    }>): Request<CreateRegistryResponse, AWSError> {
        this.boot();
        return this.client.createRegistry(
          this.ops["CreateRegistry"].apply(partialParams)
        );
    }

    invokeCreateSchema(partialParams: ToOptional<{
      [K in keyof CreateSchemaInput & keyof Omit<CreateSchemaInput, "SchemaName" | "DataFormat">]: (CreateSchemaInput)[K]
    }>): Request<CreateSchemaResponse, AWSError> {
        this.boot();
        return this.client.createSchema(
          this.ops["CreateSchema"].apply(partialParams)
        );
    }

    invokeGetSchemaByDefinition(partialParams: ToOptional<{
      [K in keyof GetSchemaByDefinitionInput & keyof Omit<GetSchemaByDefinitionInput, "SchemaDefinition">]: (GetSchemaByDefinitionInput)[K]
    }>): Request<GetSchemaByDefinitionResponse, AWSError> {
        this.boot();
        return this.client.getSchemaByDefinition(
          this.ops["GetSchemaByDefinition"].apply(partialParams)
        );
    }

    invokeRegisterSchemaVersion(partialParams: ToOptional<{
      [K in keyof RegisterSchemaVersionInput & keyof Omit<RegisterSchemaVersionInput, "SchemaDefinition">]: (RegisterSchemaVersionInput)[K]
    }>): Request<RegisterSchemaVersionResponse, AWSError> {
        this.boot();
        return this.client.registerSchemaVersion(
          this.ops["RegisterSchemaVersion"].apply(partialParams)
        );
    }

    invokeUpdateRegistry(partialParams: ToOptional<{
      [K in keyof UpdateRegistryInput & keyof Omit<UpdateRegistryInput, "Description">]: (UpdateRegistryInput)[K]
    }>): Request<UpdateRegistryResponse, AWSError> {
        this.boot();
        return this.client.updateRegistry(
          this.ops["UpdateRegistry"].apply(partialParams)
        );
    }
}