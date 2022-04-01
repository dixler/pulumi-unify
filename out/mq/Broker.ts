
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateBrokerRequest,
    CreateConfigurationRequest,
    CreateBrokerResponse,
    CreateConfigurationResponse
} from "aws-sdk/clients/mq";
const schema = require("../apis/mq-2017-11-27.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.mq.Broker {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.mq.Broker>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.MQ()
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

    invokeCreateBroker(partialParams: ToOptional<{
      [K in keyof CreateBrokerRequest & keyof Omit<CreateBrokerRequest, "EngineVersion" | "HostInstanceType" | "BrokerName" | "DeploymentMode" | "EngineType">]: (CreateBrokerRequest)[K]
    }>): Request<CreateBrokerResponse, AWSError> {
        this.boot();
        return this.client.createBroker(
          this.ops["CreateBroker"].apply(partialParams)
        );
    }

    invokeCreateConfiguration(partialParams: ToOptional<{
      [K in keyof CreateConfigurationRequest & keyof Omit<CreateConfigurationRequest, "EngineVersion" | "EngineType">]: (CreateConfigurationRequest)[K]
    }>): Request<CreateConfigurationResponse, AWSError> {
        this.boot();
        return this.client.createConfiguration(
          this.ops["CreateConfiguration"].apply(partialParams)
        );
    }
}