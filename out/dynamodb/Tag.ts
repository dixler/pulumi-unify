
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    DeleteItemInput,
    GetItemInput,
    ListTagsOfResourceInput,
    UpdateItemInput,
    DeleteItemOutput,
    GetItemOutput,
    ListTagsOfResourceOutput,
    UpdateItemOutput
} from "aws-sdk/clients/dynamodb";
const schema = require("../apis/dynamodb-2012-08-10.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.dynamodb.Tag {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.dynamodb.Tag>) {
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

    invokeDeleteItem(partialParams: ToOptional<{
      [K in keyof DeleteItemInput & keyof Omit<DeleteItemInput, "Key">]: (DeleteItemInput)[K]
    }>): Request<DeleteItemOutput, AWSError> {
        this.boot();
        return this.client.deleteItem(
          this.ops["DeleteItem"].apply(partialParams)
        );
    }

    invokeGetItem(partialParams: ToOptional<{
      [K in keyof GetItemInput & keyof Omit<GetItemInput, "Key">]: (GetItemInput)[K]
    }>): Request<GetItemOutput, AWSError> {
        this.boot();
        return this.client.getItem(
          this.ops["GetItem"].apply(partialParams)
        );
    }

    invokeListTagsOfResource(partialParams: ToOptional<{
      [K in keyof ListTagsOfResourceInput & keyof Omit<ListTagsOfResourceInput, "ResourceArn">]: (ListTagsOfResourceInput)[K]
    }>): Request<ListTagsOfResourceOutput, AWSError> {
        this.boot();
        return this.client.listTagsOfResource(
          this.ops["ListTagsOfResource"].apply(partialParams)
        );
    }

    invokeUpdateItem(partialParams: ToOptional<{
      [K in keyof UpdateItemInput & keyof Omit<UpdateItemInput, "Key">]: (UpdateItemInput)[K]
    }>): Request<UpdateItemOutput, AWSError> {
        this.boot();
        return this.client.updateItem(
          this.ops["UpdateItem"].apply(partialParams)
        );
    }
}