
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateAgentRequest,
    DeleteAgentRequest,
    DescribeAgentRequest,
    UpdateAgentRequest,
    CreateAgentResponse,
    DeleteAgentResponse,
    DescribeAgentResponse,
    UpdateAgentResponse
} from "aws-sdk/clients/datasync";
const schema = require("../apis/datasync-2018-11-09.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.datasync.Agent {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.datasync.Agent>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.DataSync()
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

    invokeCreateAgent(partialParams: ToOptional<{
      [K in keyof CreateAgentRequest & keyof Omit<CreateAgentRequest, "ActivationKey">]: (CreateAgentRequest)[K]
    }>): Request<CreateAgentResponse, AWSError> {
        this.boot();
        return this.client.createAgent(
          this.ops["CreateAgent"].apply(partialParams)
        );
    }

    invokeDeleteAgent(partialParams: ToOptional<{
      [K in keyof DeleteAgentRequest & keyof Omit<DeleteAgentRequest, "AgentArn">]: (DeleteAgentRequest)[K]
    }>): Request<DeleteAgentResponse, AWSError> {
        this.boot();
        return this.client.deleteAgent(
          this.ops["DeleteAgent"].apply(partialParams)
        );
    }

    invokeDescribeAgent(partialParams: ToOptional<{
      [K in keyof DescribeAgentRequest & keyof Omit<DescribeAgentRequest, "AgentArn">]: (DescribeAgentRequest)[K]
    }>): Request<DescribeAgentResponse, AWSError> {
        this.boot();
        return this.client.describeAgent(
          this.ops["DescribeAgent"].apply(partialParams)
        );
    }

    invokeUpdateAgent(partialParams: ToOptional<{
      [K in keyof UpdateAgentRequest & keyof Omit<UpdateAgentRequest, "AgentArn">]: (UpdateAgentRequest)[K]
    }>): Request<UpdateAgentResponse, AWSError> {
        this.boot();
        return this.client.updateAgent(
          this.ops["UpdateAgent"].apply(partialParams)
        );
    }
}