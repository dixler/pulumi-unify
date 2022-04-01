
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateApiRequest,
    CreateAuthorizerRequest,
    CreateModelRequest,
    CreateVpcLinkRequest,
    CreateApiResponse,
    CreateAuthorizerResponse,
    CreateModelResponse,
    CreateVpcLinkResponse
} from "aws-sdk/clients/apigatewayv2";
const schema = require("../apis/apigatewayv2-2018-11-29.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.apigatewayv2.VpcLink {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.apigatewayv2.VpcLink>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.ApiGatewayV2()
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

    invokeCreateApi(partialParams: ToOptional<{
      [K in keyof CreateApiRequest & keyof Omit<CreateApiRequest, "Name">]: (CreateApiRequest)[K]
    }>): Request<CreateApiResponse, AWSError> {
        this.boot();
        return this.client.createApi(
          this.ops["CreateApi"].apply(partialParams)
        );
    }

    invokeCreateAuthorizer(partialParams: ToOptional<{
      [K in keyof CreateAuthorizerRequest & keyof Omit<CreateAuthorizerRequest, "Name">]: (CreateAuthorizerRequest)[K]
    }>): Request<CreateAuthorizerResponse, AWSError> {
        this.boot();
        return this.client.createAuthorizer(
          this.ops["CreateAuthorizer"].apply(partialParams)
        );
    }

    invokeCreateModel(partialParams: ToOptional<{
      [K in keyof CreateModelRequest & keyof Omit<CreateModelRequest, "Name">]: (CreateModelRequest)[K]
    }>): Request<CreateModelResponse, AWSError> {
        this.boot();
        return this.client.createModel(
          this.ops["CreateModel"].apply(partialParams)
        );
    }

    invokeCreateVpcLink(partialParams: ToOptional<{
      [K in keyof CreateVpcLinkRequest & keyof Omit<CreateVpcLinkRequest, "Name">]: (CreateVpcLinkRequest)[K]
    }>): Request<CreateVpcLinkResponse, AWSError> {
        this.boot();
        return this.client.createVpcLink(
          this.ops["CreateVpcLink"].apply(partialParams)
        );
    }
}