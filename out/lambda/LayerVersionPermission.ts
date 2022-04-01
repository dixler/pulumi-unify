
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AddLayerVersionPermissionRequest,
    AddPermissionRequest,
    GetLayerVersionRequest,
    GetLayerVersionPolicyRequest,
    ListLayerVersionsRequest,
    PublishLayerVersionRequest,
    AddLayerVersionPermissionResponse,
    AddPermissionResponse,
    GetLayerVersionResponse,
    GetLayerVersionPolicyResponse,
    ListLayerVersionsResponse,
    PublishLayerVersionResponse
} from "aws-sdk/clients/lambda";
const schema = require("../apis/lambda-2015-03-31.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.lambda.LayerVersionPermission {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.lambda.LayerVersionPermission>) {
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
      [K in keyof AddLayerVersionPermissionRequest & keyof Omit<AddLayerVersionPermissionRequest, "LayerName" | "StatementId" | "Action" | "Principal">]: (AddLayerVersionPermissionRequest)[K]
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

    invokeGetLayerVersion(partialParams: ToOptional<{
      [K in keyof GetLayerVersionRequest & keyof Omit<GetLayerVersionRequest, "LayerName">]: (GetLayerVersionRequest)[K]
    }>): Request<GetLayerVersionResponse, AWSError> {
        this.boot();
        return this.client.getLayerVersion(
          this.ops["GetLayerVersion"].apply(partialParams)
        );
    }

    invokeGetLayerVersionPolicy(partialParams: ToOptional<{
      [K in keyof GetLayerVersionPolicyRequest & keyof Omit<GetLayerVersionPolicyRequest, "LayerName">]: (GetLayerVersionPolicyRequest)[K]
    }>): Request<GetLayerVersionPolicyResponse, AWSError> {
        this.boot();
        return this.client.getLayerVersionPolicy(
          this.ops["GetLayerVersionPolicy"].apply(partialParams)
        );
    }

    invokeListLayerVersions(partialParams: ToOptional<{
      [K in keyof ListLayerVersionsRequest & keyof Omit<ListLayerVersionsRequest, "LayerName">]: (ListLayerVersionsRequest)[K]
    }>): Request<ListLayerVersionsResponse, AWSError> {
        this.boot();
        return this.client.listLayerVersions(
          this.ops["ListLayerVersions"].apply(partialParams)
        );
    }

    invokePublishLayerVersion(partialParams: ToOptional<{
      [K in keyof PublishLayerVersionRequest & keyof Omit<PublishLayerVersionRequest, "LayerName">]: (PublishLayerVersionRequest)[K]
    }>): Request<PublishLayerVersionResponse, AWSError> {
        this.boot();
        return this.client.publishLayerVersion(
          this.ops["PublishLayerVersion"].apply(partialParams)
        );
    }
}