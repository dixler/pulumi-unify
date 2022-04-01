
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateGlobalTableInput,
    DescribeGlobalTableInput,
    DescribeGlobalTableSettingsInput,
    UpdateGlobalTableInput,
    UpdateGlobalTableSettingsInput,
    CreateGlobalTableOutput,
    DescribeGlobalTableOutput,
    DescribeGlobalTableSettingsOutput,
    UpdateGlobalTableOutput,
    UpdateGlobalTableSettingsOutput
} from "aws-sdk/clients/dynamodb";
const schema = require("../apis/dynamodb-2012-08-10.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.dynamodb.GlobalTable {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.dynamodb.GlobalTable>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.DynamoDB()
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

    invokeCreateGlobalTable(partialParams: ToOptional<{
      [K in keyof CreateGlobalTableInput & keyof Omit<CreateGlobalTableInput, "GlobalTableName">]: (CreateGlobalTableInput)[K]
    }>): Request<CreateGlobalTableOutput, AWSError> {
        this.boot();
        return this.client.createGlobalTable(
          this.ops["CreateGlobalTable"].apply(partialParams)
        );
    }

    invokeDescribeGlobalTable(partialParams: ToOptional<{
      [K in keyof DescribeGlobalTableInput & keyof Omit<DescribeGlobalTableInput, "GlobalTableName">]: (DescribeGlobalTableInput)[K]
    }>): Request<DescribeGlobalTableOutput, AWSError> {
        this.boot();
        return this.client.describeGlobalTable(
          this.ops["DescribeGlobalTable"].apply(partialParams)
        );
    }

    invokeDescribeGlobalTableSettings(partialParams: ToOptional<{
      [K in keyof DescribeGlobalTableSettingsInput & keyof Omit<DescribeGlobalTableSettingsInput, "GlobalTableName">]: (DescribeGlobalTableSettingsInput)[K]
    }>): Request<DescribeGlobalTableSettingsOutput, AWSError> {
        this.boot();
        return this.client.describeGlobalTableSettings(
          this.ops["DescribeGlobalTableSettings"].apply(partialParams)
        );
    }

    invokeUpdateGlobalTable(partialParams: ToOptional<{
      [K in keyof UpdateGlobalTableInput & keyof Omit<UpdateGlobalTableInput, "GlobalTableName">]: (UpdateGlobalTableInput)[K]
    }>): Request<UpdateGlobalTableOutput, AWSError> {
        this.boot();
        return this.client.updateGlobalTable(
          this.ops["UpdateGlobalTable"].apply(partialParams)
        );
    }

    invokeUpdateGlobalTableSettings(partialParams: ToOptional<{
      [K in keyof UpdateGlobalTableSettingsInput & keyof Omit<UpdateGlobalTableSettingsInput, "GlobalTableName">]: (UpdateGlobalTableSettingsInput)[K]
    }>): Request<UpdateGlobalTableSettingsOutput, AWSError> {
        this.boot();
        return this.client.updateGlobalTableSettings(
          this.ops["UpdateGlobalTableSettings"].apply(partialParams)
        );
    }
}