
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateApiMappingRequest,
    CreateDomainNameRequest,
    GetApiMappingRequest,
    GetApiMappingsRequest,
    GetDomainNameRequest,
    UpdateApiMappingRequest,
    UpdateDomainNameRequest,
    CreateApiMappingResponse,
    CreateDomainNameResponse,
    GetApiMappingResponse,
    GetApiMappingsResponse,
    GetDomainNameResponse,
    UpdateApiMappingResponse,
    UpdateDomainNameResponse
} from "aws-sdk/clients/apigatewayv2";
const schema = require("../apis/apigatewayv2-2018-11-29.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.apigatewayv2.DomainName {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.apigatewayv2.DomainName>) {
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

    invokeCreateApiMapping(partialParams: ToOptional<{
      [K in keyof CreateApiMappingRequest & keyof Omit<CreateApiMappingRequest, "DomainName">]: (CreateApiMappingRequest)[K]
    }>): Request<CreateApiMappingResponse, AWSError> {
        this.boot();
        return this.client.createApiMapping(
          this.ops["CreateApiMapping"].apply(partialParams)
        );
    }

    invokeCreateDomainName(partialParams: ToOptional<{
      [K in keyof CreateDomainNameRequest & keyof Omit<CreateDomainNameRequest, "DomainName">]: (CreateDomainNameRequest)[K]
    }>): Request<CreateDomainNameResponse, AWSError> {
        this.boot();
        return this.client.createDomainName(
          this.ops["CreateDomainName"].apply(partialParams)
        );
    }

    invokeGetApiMapping(partialParams: ToOptional<{
      [K in keyof GetApiMappingRequest & keyof Omit<GetApiMappingRequest, "DomainName">]: (GetApiMappingRequest)[K]
    }>): Request<GetApiMappingResponse, AWSError> {
        this.boot();
        return this.client.getApiMapping(
          this.ops["GetApiMapping"].apply(partialParams)
        );
    }

    invokeGetApiMappings(partialParams: ToOptional<{
      [K in keyof GetApiMappingsRequest & keyof Omit<GetApiMappingsRequest, "DomainName">]: (GetApiMappingsRequest)[K]
    }>): Request<GetApiMappingsResponse, AWSError> {
        this.boot();
        return this.client.getApiMappings(
          this.ops["GetApiMappings"].apply(partialParams)
        );
    }

    invokeGetDomainName(partialParams: ToOptional<{
      [K in keyof GetDomainNameRequest & keyof Omit<GetDomainNameRequest, "DomainName">]: (GetDomainNameRequest)[K]
    }>): Request<GetDomainNameResponse, AWSError> {
        this.boot();
        return this.client.getDomainName(
          this.ops["GetDomainName"].apply(partialParams)
        );
    }

    invokeUpdateApiMapping(partialParams: ToOptional<{
      [K in keyof UpdateApiMappingRequest & keyof Omit<UpdateApiMappingRequest, "DomainName">]: (UpdateApiMappingRequest)[K]
    }>): Request<UpdateApiMappingResponse, AWSError> {
        this.boot();
        return this.client.updateApiMapping(
          this.ops["UpdateApiMapping"].apply(partialParams)
        );
    }

    invokeUpdateDomainName(partialParams: ToOptional<{
      [K in keyof UpdateDomainNameRequest & keyof Omit<UpdateDomainNameRequest, "DomainName">]: (UpdateDomainNameRequest)[K]
    }>): Request<UpdateDomainNameResponse, AWSError> {
        this.boot();
        return this.client.updateDomainName(
          this.ops["UpdateDomainName"].apply(partialParams)
        );
    }
}