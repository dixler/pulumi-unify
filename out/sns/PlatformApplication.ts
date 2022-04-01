
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreatePlatformApplicationInput,
    CreatePlatformEndpointInput,
    CreateTopicInput,
    GetPlatformApplicationAttributesInput,
    ListEndpointsByPlatformApplicationInput,
    CreatePlatformApplicationResponse,
    CreateEndpointResponse,
    CreateTopicResponse,
    GetPlatformApplicationAttributesResponse,
    ListEndpointsByPlatformApplicationResponse
} from "aws-sdk/clients/sns";
const schema = require("../apis/sns-2010-03-31.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.sns.PlatformApplication {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.sns.PlatformApplication>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.SNS()
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

    invokeCreatePlatformApplication(partialParams: ToOptional<{
      [K in keyof CreatePlatformApplicationInput & keyof Omit<CreatePlatformApplicationInput, "Name" | "Platform">]: (CreatePlatformApplicationInput)[K]
    }>): Request<CreatePlatformApplicationResponse, AWSError> {
        this.boot();
        return this.client.createPlatformApplication(
          this.ops["CreatePlatformApplication"].apply(partialParams)
        );
    }

    invokeCreatePlatformEndpoint(partialParams: ToOptional<{
      [K in keyof CreatePlatformEndpointInput & keyof Omit<CreatePlatformEndpointInput, "PlatformApplicationArn">]: (CreatePlatformEndpointInput)[K]
    }>): Request<CreateEndpointResponse, AWSError> {
        this.boot();
        return this.client.createPlatformEndpoint(
          this.ops["CreatePlatformEndpoint"].apply(partialParams)
        );
    }

    invokeCreateTopic(partialParams: ToOptional<{
      [K in keyof CreateTopicInput & keyof Omit<CreateTopicInput, "Name">]: (CreateTopicInput)[K]
    }>): Request<CreateTopicResponse, AWSError> {
        this.boot();
        return this.client.createTopic(
          this.ops["CreateTopic"].apply(partialParams)
        );
    }

    invokeGetPlatformApplicationAttributes(partialParams: ToOptional<{
      [K in keyof GetPlatformApplicationAttributesInput & keyof Omit<GetPlatformApplicationAttributesInput, "PlatformApplicationArn">]: (GetPlatformApplicationAttributesInput)[K]
    }>): Request<GetPlatformApplicationAttributesResponse, AWSError> {
        this.boot();
        return this.client.getPlatformApplicationAttributes(
          this.ops["GetPlatformApplicationAttributes"].apply(partialParams)
        );
    }

    invokeListEndpointsByPlatformApplication(partialParams: ToOptional<{
      [K in keyof ListEndpointsByPlatformApplicationInput & keyof Omit<ListEndpointsByPlatformApplicationInput, "PlatformApplicationArn">]: (ListEndpointsByPlatformApplicationInput)[K]
    }>): Request<ListEndpointsByPlatformApplicationResponse, AWSError> {
        this.boot();
        return this.client.listEndpointsByPlatformApplication(
          this.ops["ListEndpointsByPlatformApplication"].apply(partialParams)
        );
    }
}