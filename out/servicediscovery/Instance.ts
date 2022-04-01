
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    DeregisterInstanceRequest,
    GetInstanceRequest,
    GetInstancesHealthStatusRequest,
    ListInstancesRequest,
    RegisterInstanceRequest,
    DeregisterInstanceResponse,
    GetInstanceResponse,
    GetInstancesHealthStatusResponse,
    ListInstancesResponse,
    RegisterInstanceResponse
} from "aws-sdk/clients/servicediscovery";
const schema = require("../apis/servicediscovery-2017-03-14.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.servicediscovery.Instance {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.servicediscovery.Instance>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.ServiceDiscovery()
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

    invokeDeregisterInstance(partialParams: ToOptional<{
      [K in keyof DeregisterInstanceRequest & keyof Omit<DeregisterInstanceRequest, "ServiceId" | "InstanceId">]: (DeregisterInstanceRequest)[K]
    }>): Request<DeregisterInstanceResponse, AWSError> {
        this.boot();
        return this.client.deregisterInstance(
          this.ops["DeregisterInstance"].apply(partialParams)
        );
    }

    invokeGetInstance(partialParams: ToOptional<{
      [K in keyof GetInstanceRequest & keyof Omit<GetInstanceRequest, "ServiceId" | "InstanceId">]: (GetInstanceRequest)[K]
    }>): Request<GetInstanceResponse, AWSError> {
        this.boot();
        return this.client.getInstance(
          this.ops["GetInstance"].apply(partialParams)
        );
    }

    invokeGetInstancesHealthStatus(partialParams: ToOptional<{
      [K in keyof GetInstancesHealthStatusRequest & keyof Omit<GetInstancesHealthStatusRequest, "ServiceId">]: (GetInstancesHealthStatusRequest)[K]
    }>): Request<GetInstancesHealthStatusResponse, AWSError> {
        this.boot();
        return this.client.getInstancesHealthStatus(
          this.ops["GetInstancesHealthStatus"].apply(partialParams)
        );
    }

    invokeListInstances(partialParams: ToOptional<{
      [K in keyof ListInstancesRequest & keyof Omit<ListInstancesRequest, "ServiceId">]: (ListInstancesRequest)[K]
    }>): Request<ListInstancesResponse, AWSError> {
        this.boot();
        return this.client.listInstances(
          this.ops["ListInstances"].apply(partialParams)
        );
    }

    invokeRegisterInstance(partialParams: ToOptional<{
      [K in keyof RegisterInstanceRequest & keyof Omit<RegisterInstanceRequest, "ServiceId" | "InstanceId">]: (RegisterInstanceRequest)[K]
    }>): Request<RegisterInstanceResponse, AWSError> {
        this.boot();
        return this.client.registerInstance(
          this.ops["RegisterInstance"].apply(partialParams)
        );
    }
}