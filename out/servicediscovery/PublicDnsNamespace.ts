
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateHttpNamespaceRequest,
    CreatePrivateDnsNamespaceRequest,
    CreatePublicDnsNamespaceRequest,
    CreateServiceRequest,
    CreateHttpNamespaceResponse,
    CreatePrivateDnsNamespaceResponse,
    CreatePublicDnsNamespaceResponse,
    CreateServiceResponse
} from "aws-sdk/clients/servicediscovery";
const schema = require("../apis/servicediscovery-2017-03-14.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.servicediscovery.PublicDnsNamespace {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.servicediscovery.PublicDnsNamespace>) {
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

    invokeCreateHttpNamespace(partialParams: ToOptional<{
      [K in keyof CreateHttpNamespaceRequest & keyof Omit<CreateHttpNamespaceRequest, "Name">]: (CreateHttpNamespaceRequest)[K]
    }>): Request<CreateHttpNamespaceResponse, AWSError> {
        this.boot();
        return this.client.createHttpNamespace(
          this.ops["CreateHttpNamespace"].apply(partialParams)
        );
    }

    invokeCreatePrivateDnsNamespace(partialParams: ToOptional<{
      [K in keyof CreatePrivateDnsNamespaceRequest & keyof Omit<CreatePrivateDnsNamespaceRequest, "Name">]: (CreatePrivateDnsNamespaceRequest)[K]
    }>): Request<CreatePrivateDnsNamespaceResponse, AWSError> {
        this.boot();
        return this.client.createPrivateDnsNamespace(
          this.ops["CreatePrivateDnsNamespace"].apply(partialParams)
        );
    }

    invokeCreatePublicDnsNamespace(partialParams: ToOptional<{
      [K in keyof CreatePublicDnsNamespaceRequest & keyof Omit<CreatePublicDnsNamespaceRequest, "Name">]: (CreatePublicDnsNamespaceRequest)[K]
    }>): Request<CreatePublicDnsNamespaceResponse, AWSError> {
        this.boot();
        return this.client.createPublicDnsNamespace(
          this.ops["CreatePublicDnsNamespace"].apply(partialParams)
        );
    }

    invokeCreateService(partialParams: ToOptional<{
      [K in keyof CreateServiceRequest & keyof Omit<CreateServiceRequest, "Name">]: (CreateServiceRequest)[K]
    }>): Request<CreateServiceResponse, AWSError> {
        this.boot();
        return this.client.createService(
          this.ops["CreateService"].apply(partialParams)
        );
    }
}