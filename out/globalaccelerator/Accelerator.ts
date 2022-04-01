
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateAcceleratorRequest,
    CreateCustomRoutingAcceleratorRequest,
    CreateAcceleratorResponse,
    CreateCustomRoutingAcceleratorResponse
} from "aws-sdk/clients/globalaccelerator";
const schema = require("../apis/globalaccelerator-2018-08-08.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.globalaccelerator.Accelerator {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.globalaccelerator.Accelerator>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.GlobalAccelerator()
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

    invokeCreateAccelerator(partialParams: ToOptional<{
      [K in keyof CreateAcceleratorRequest & keyof Omit<CreateAcceleratorRequest, "Name">]: (CreateAcceleratorRequest)[K]
    }>): Request<CreateAcceleratorResponse, AWSError> {
        this.boot();
        return this.client.createAccelerator(
          this.ops["CreateAccelerator"].apply(partialParams)
        );
    }

    invokeCreateCustomRoutingAccelerator(partialParams: ToOptional<{
      [K in keyof CreateCustomRoutingAcceleratorRequest & keyof Omit<CreateCustomRoutingAcceleratorRequest, "Name">]: (CreateCustomRoutingAcceleratorRequest)[K]
    }>): Request<CreateCustomRoutingAcceleratorResponse, AWSError> {
        this.boot();
        return this.client.createCustomRoutingAccelerator(
          this.ops["CreateCustomRoutingAccelerator"].apply(partialParams)
        );
    }
}