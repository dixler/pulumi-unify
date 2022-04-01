
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateApiRequest,
    CreateAuthorizerRequest,
    CreateModelRequest,
    CreateRouteRequest,
    CreateVpcLinkRequest,
    ImportApiRequest,
    ReimportApiRequest,
    CreateApiResponse,
    CreateAuthorizerResponse,
    CreateModelResponse,
    CreateRouteResult,
    CreateVpcLinkResponse,
    ImportApiResponse,
    ReimportApiResponse
} from "aws-sdk/clients/apigatewayv2";
const schema = require("../apis/apigatewayv2-2018-11-29.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.apigatewayv2.Api {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.apigatewayv2.Api>) {
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
      [K in keyof CreateApiRequest & keyof Omit<CreateApiRequest, "ProtocolType" | "Name">]: (CreateApiRequest)[K]
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

    invokeCreateRoute(partialParams: ToOptional<{
      [K in keyof CreateRouteRequest & keyof Omit<CreateRouteRequest, "RouteKey">]: (CreateRouteRequest)[K]
    }>): Request<CreateRouteResult, AWSError> {
        this.boot();
        return this.client.createRoute(
          this.ops["CreateRoute"].apply(partialParams)
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

    invokeImportApi(partialParams: ToOptional<{
      [K in keyof ImportApiRequest & keyof Omit<ImportApiRequest, "Body">]: (ImportApiRequest)[K]
    }>): Request<ImportApiResponse, AWSError> {
        this.boot();
        return this.client.importApi(
          this.ops["ImportApi"].apply(partialParams)
        );
    }

    invokeReimportApi(partialParams: ToOptional<{
      [K in keyof ReimportApiRequest & keyof Omit<ReimportApiRequest, "Body">]: (ReimportApiRequest)[K]
    }>): Request<ReimportApiResponse, AWSError> {
        this.boot();
        return this.client.reimportApi(
          this.ops["ReimportApi"].apply(partialParams)
        );
    }
}