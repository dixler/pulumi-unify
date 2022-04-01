
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateDataSetRequest,
    UpdateAssetRequest,
    CreateDataSetResponse,
    UpdateAssetResponse
} from "aws-sdk/clients/dataexchange";
const schema = require("../apis/dataexchange-2017-07-25.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.dataexchange.DataSet {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.dataexchange.DataSet>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.DataExchange()
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

    invokeCreateDataSet(partialParams: ToOptional<{
      [K in keyof CreateDataSetRequest & keyof Omit<CreateDataSetRequest, "AssetType" | "Description" | "Name">]: (CreateDataSetRequest)[K]
    }>): Request<CreateDataSetResponse, AWSError> {
        this.boot();
        return this.client.createDataSet(
          this.ops["CreateDataSet"].apply(partialParams)
        );
    }

    invokeUpdateAsset(partialParams: ToOptional<{
      [K in keyof UpdateAssetRequest & keyof Omit<UpdateAssetRequest, "Name">]: (UpdateAssetRequest)[K]
    }>): Request<UpdateAssetResponse, AWSError> {
        this.boot();
        return this.client.updateAsset(
          this.ops["UpdateAsset"].apply(partialParams)
        );
    }
}