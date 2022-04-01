
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    DeleteCodeSigningConfigRequest,
    GetCodeSigningConfigRequest,
    GetLayerVersionByArnRequest,
    ListFunctionsByCodeSigningConfigRequest,
    PutFunctionCodeSigningConfigRequest,
    UpdateCodeSigningConfigRequest,
    DeleteCodeSigningConfigResponse,
    GetCodeSigningConfigResponse,
    GetLayerVersionResponse,
    ListFunctionsByCodeSigningConfigResponse,
    PutFunctionCodeSigningConfigResponse,
    UpdateCodeSigningConfigResponse
} from "aws-sdk/clients/lambda";
const schema = require("../apis/lambda-2015-03-31.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.lambda.CodeSigningConfig {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.lambda.CodeSigningConfig>) {
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

    invokeDeleteCodeSigningConfig(partialParams: ToOptional<{
      [K in keyof DeleteCodeSigningConfigRequest & keyof Omit<DeleteCodeSigningConfigRequest, "CodeSigningConfigArn">]: (DeleteCodeSigningConfigRequest)[K]
    }>): Request<DeleteCodeSigningConfigResponse, AWSError> {
        this.boot();
        return this.client.deleteCodeSigningConfig(
          this.ops["DeleteCodeSigningConfig"].apply(partialParams)
        );
    }

    invokeGetCodeSigningConfig(partialParams: ToOptional<{
      [K in keyof GetCodeSigningConfigRequest & keyof Omit<GetCodeSigningConfigRequest, "CodeSigningConfigArn">]: (GetCodeSigningConfigRequest)[K]
    }>): Request<GetCodeSigningConfigResponse, AWSError> {
        this.boot();
        return this.client.getCodeSigningConfig(
          this.ops["GetCodeSigningConfig"].apply(partialParams)
        );
    }

    invokeGetLayerVersionByArn(partialParams: ToOptional<{
      [K in keyof GetLayerVersionByArnRequest & keyof Omit<GetLayerVersionByArnRequest, "Arn">]: (GetLayerVersionByArnRequest)[K]
    }>): Request<GetLayerVersionResponse, AWSError> {
        this.boot();
        return this.client.getLayerVersionByArn(
          this.ops["GetLayerVersionByArn"].apply(partialParams)
        );
    }

    invokeListFunctionsByCodeSigningConfig(partialParams: ToOptional<{
      [K in keyof ListFunctionsByCodeSigningConfigRequest & keyof Omit<ListFunctionsByCodeSigningConfigRequest, "CodeSigningConfigArn">]: (ListFunctionsByCodeSigningConfigRequest)[K]
    }>): Request<ListFunctionsByCodeSigningConfigResponse, AWSError> {
        this.boot();
        return this.client.listFunctionsByCodeSigningConfig(
          this.ops["ListFunctionsByCodeSigningConfig"].apply(partialParams)
        );
    }

    invokePutFunctionCodeSigningConfig(partialParams: ToOptional<{
      [K in keyof PutFunctionCodeSigningConfigRequest & keyof Omit<PutFunctionCodeSigningConfigRequest, "CodeSigningConfigArn">]: (PutFunctionCodeSigningConfigRequest)[K]
    }>): Request<PutFunctionCodeSigningConfigResponse, AWSError> {
        this.boot();
        return this.client.putFunctionCodeSigningConfig(
          this.ops["PutFunctionCodeSigningConfig"].apply(partialParams)
        );
    }

    invokeUpdateCodeSigningConfig(partialParams: ToOptional<{
      [K in keyof UpdateCodeSigningConfigRequest & keyof Omit<UpdateCodeSigningConfigRequest, "CodeSigningConfigArn">]: (UpdateCodeSigningConfigRequest)[K]
    }>): Request<UpdateCodeSigningConfigResponse, AWSError> {
        this.boot();
        return this.client.updateCodeSigningConfig(
          this.ops["UpdateCodeSigningConfig"].apply(partialParams)
        );
    }
}