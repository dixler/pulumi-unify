
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateEndpointRequest,
    DeleteEndpointRequest,
    CreateEndpointResult
} from "aws-sdk/clients/s3outposts";
const schema = require("../apis/s3outposts-2017-07-25.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.s3outposts.Endpoint {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.s3outposts.Endpoint>) {
        super(...args)
        this.client = new awssdk.S3Outposts()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
    }
    boot() {
        Object.entries(this.capitalizedParams).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value.value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
        this.ops = getResourceOperations(this.capitalizedParams as any, schema, this.client)
    }

    invokeCreateEndpoint(partialParams: ToOptional<{
      [K in keyof CreateEndpointRequest & keyof CreateEndpointRequest & keyof CreateEndpointRequest & keyof CreateEndpointRequest & keyof CreateEndpointRequest & keyof CreateEndpointRequest]: (CreateEndpointRequest & CreateEndpointRequest & CreateEndpointRequest & CreateEndpointRequest & CreateEndpointRequest & CreateEndpointRequest)[K]
    }>): Request<CreateEndpointResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createEndpoint(
          this.ops["CreateEndpoint"].applicator.apply(partialParams)
        );
    }

    invokeDeleteEndpoint(partialParams: ToOptional<{
      [K in keyof DeleteEndpointRequest & keyof DeleteEndpointRequest & keyof DeleteEndpointRequest & keyof DeleteEndpointRequest & keyof DeleteEndpointRequest & keyof DeleteEndpointRequest]: (DeleteEndpointRequest & DeleteEndpointRequest & DeleteEndpointRequest & DeleteEndpointRequest & DeleteEndpointRequest & DeleteEndpointRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEndpoint(
          this.ops["DeleteEndpoint"].applicator.apply(partialParams)
        );
    }
}