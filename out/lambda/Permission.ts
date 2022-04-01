
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AddLayerVersionPermissionRequest,
    AddPermissionRequest,
    GetProvisionedConcurrencyConfigRequest,
    PutProvisionedConcurrencyConfigRequest,
    AddLayerVersionPermissionResponse,
    AddPermissionResponse,
    GetProvisionedConcurrencyConfigResponse,
    PutProvisionedConcurrencyConfigResponse
} from "aws-sdk/clients/lambda";
const schema = require("../apis/lambda-2015-03-31.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.lambda.Permission {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.lambda.Permission>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Lambda()
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

    invokeAddLayerVersionPermission(partialParams: ToOptional<{
      [K in keyof AddLayerVersionPermissionRequest & keyof Omit<AddLayerVersionPermissionRequest, "StatementId" | "Action" | "Principal">]: (AddLayerVersionPermissionRequest)[K]
    }>): Request<AddLayerVersionPermissionResponse, AWSError> {
        this.boot();
        return this.client.addLayerVersionPermission(
          this.ops["AddLayerVersionPermission"].apply(partialParams)
        );
    }

    invokeAddPermission(partialParams: ToOptional<{
      [K in keyof AddPermissionRequest & keyof Omit<AddPermissionRequest, "StatementId" | "Action" | "Principal">]: (AddPermissionRequest)[K]
    }>): Request<AddPermissionResponse, AWSError> {
        this.boot();
        return this.client.addPermission(
          this.ops["AddPermission"].apply(partialParams)
        );
    }

    invokeGetProvisionedConcurrencyConfig(partialParams: ToOptional<{
      [K in keyof GetProvisionedConcurrencyConfigRequest & keyof Omit<GetProvisionedConcurrencyConfigRequest, "Qualifier">]: (GetProvisionedConcurrencyConfigRequest)[K]
    }>): Request<GetProvisionedConcurrencyConfigResponse, AWSError> {
        this.boot();
        return this.client.getProvisionedConcurrencyConfig(
          this.ops["GetProvisionedConcurrencyConfig"].apply(partialParams)
        );
    }

    invokePutProvisionedConcurrencyConfig(partialParams: ToOptional<{
      [K in keyof PutProvisionedConcurrencyConfigRequest & keyof Omit<PutProvisionedConcurrencyConfigRequest, "Qualifier">]: (PutProvisionedConcurrencyConfigRequest)[K]
    }>): Request<PutProvisionedConcurrencyConfigResponse, AWSError> {
        this.boot();
        return this.client.putProvisionedConcurrencyConfig(
          this.ops["PutProvisionedConcurrencyConfig"].apply(partialParams)
        );
    }
}