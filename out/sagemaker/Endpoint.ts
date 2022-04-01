
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateEndpointInput,
    CreateEndpointConfigInput,
    DescribeEndpointInput,
    DescribeEndpointConfigInput,
    UpdateEndpointInput,
    UpdateEndpointWeightsAndCapacitiesInput,
    CreateEndpointOutput,
    CreateEndpointConfigOutput,
    DescribeEndpointOutput,
    DescribeEndpointConfigOutput,
    UpdateEndpointOutput,
    UpdateEndpointWeightsAndCapacitiesOutput
} from "aws-sdk/clients/sagemaker";
const schema = require("../apis/sagemaker-2017-07-24.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.sagemaker.Endpoint {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.sagemaker.Endpoint>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.SageMaker()
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

    invokeCreateEndpoint(partialParams: ToOptional<{
      [K in keyof CreateEndpointInput & keyof Omit<CreateEndpointInput, "EndpointName" | "EndpointConfigName">]: (CreateEndpointInput)[K]
    }>): Request<CreateEndpointOutput, AWSError> {
        this.boot();
        return this.client.createEndpoint(
          this.ops["CreateEndpoint"].apply(partialParams)
        );
    }

    invokeCreateEndpointConfig(partialParams: ToOptional<{
      [K in keyof CreateEndpointConfigInput & keyof Omit<CreateEndpointConfigInput, "EndpointConfigName">]: (CreateEndpointConfigInput)[K]
    }>): Request<CreateEndpointConfigOutput, AWSError> {
        this.boot();
        return this.client.createEndpointConfig(
          this.ops["CreateEndpointConfig"].apply(partialParams)
        );
    }

    invokeDescribeEndpoint(partialParams: ToOptional<{
      [K in keyof DescribeEndpointInput & keyof Omit<DescribeEndpointInput, "EndpointName">]: (DescribeEndpointInput)[K]
    }>): Request<DescribeEndpointOutput, AWSError> {
        this.boot();
        return this.client.describeEndpoint(
          this.ops["DescribeEndpoint"].apply(partialParams)
        );
    }

    invokeDescribeEndpointConfig(partialParams: ToOptional<{
      [K in keyof DescribeEndpointConfigInput & keyof Omit<DescribeEndpointConfigInput, "EndpointConfigName">]: (DescribeEndpointConfigInput)[K]
    }>): Request<DescribeEndpointConfigOutput, AWSError> {
        this.boot();
        return this.client.describeEndpointConfig(
          this.ops["DescribeEndpointConfig"].apply(partialParams)
        );
    }

    invokeUpdateEndpoint(partialParams: ToOptional<{
      [K in keyof UpdateEndpointInput & keyof Omit<UpdateEndpointInput, "EndpointName" | "EndpointConfigName">]: (UpdateEndpointInput)[K]
    }>): Request<UpdateEndpointOutput, AWSError> {
        this.boot();
        return this.client.updateEndpoint(
          this.ops["UpdateEndpoint"].apply(partialParams)
        );
    }

    invokeUpdateEndpointWeightsAndCapacities(partialParams: ToOptional<{
      [K in keyof UpdateEndpointWeightsAndCapacitiesInput & keyof Omit<UpdateEndpointWeightsAndCapacitiesInput, "EndpointName">]: (UpdateEndpointWeightsAndCapacitiesInput)[K]
    }>): Request<UpdateEndpointWeightsAndCapacitiesOutput, AWSError> {
        this.boot();
        return this.client.updateEndpointWeightsAndCapacities(
          this.ops["UpdateEndpointWeightsAndCapacities"].apply(partialParams)
        );
    }
}