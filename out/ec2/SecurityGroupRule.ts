
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateCustomerGatewayRequest,
    CreateNetworkInsightsPathRequest,
    CreateSecurityGroupRequest,
    CreateVpnConnectionRequest,
    CreateVpnGatewayRequest,
    CreateCustomerGatewayResult,
    CreateNetworkInsightsPathResult,
    CreateSecurityGroupResult,
    CreateVpnConnectionResult,
    CreateVpnGatewayResult
} from "aws-sdk/clients/ec2";
const schema = require("../apis/ec2-2016-11-15.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ec2.SecurityGroupRule {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.ec2.SecurityGroupRule>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.EC2()
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

    invokeCreateCustomerGateway(partialParams: ToOptional<{
      [K in keyof CreateCustomerGatewayRequest & keyof Omit<CreateCustomerGatewayRequest, "Type">]: (CreateCustomerGatewayRequest)[K]
    }>): Request<CreateCustomerGatewayResult, AWSError> {
        this.boot();
        return this.client.createCustomerGateway(
          this.ops["CreateCustomerGateway"].apply(partialParams)
        );
    }

    invokeCreateNetworkInsightsPath(partialParams: ToOptional<{
      [K in keyof CreateNetworkInsightsPathRequest & keyof Omit<CreateNetworkInsightsPathRequest, "Protocol">]: (CreateNetworkInsightsPathRequest)[K]
    }>): Request<CreateNetworkInsightsPathResult, AWSError> {
        this.boot();
        return this.client.createNetworkInsightsPath(
          this.ops["CreateNetworkInsightsPath"].apply(partialParams)
        );
    }

    invokeCreateSecurityGroup(partialParams: ToOptional<{
      [K in keyof CreateSecurityGroupRequest & keyof Omit<CreateSecurityGroupRequest, "Description">]: (CreateSecurityGroupRequest)[K]
    }>): Request<CreateSecurityGroupResult, AWSError> {
        this.boot();
        return this.client.createSecurityGroup(
          this.ops["CreateSecurityGroup"].apply(partialParams)
        );
    }

    invokeCreateVpnConnection(partialParams: ToOptional<{
      [K in keyof CreateVpnConnectionRequest & keyof Omit<CreateVpnConnectionRequest, "Type">]: (CreateVpnConnectionRequest)[K]
    }>): Request<CreateVpnConnectionResult, AWSError> {
        this.boot();
        return this.client.createVpnConnection(
          this.ops["CreateVpnConnection"].apply(partialParams)
        );
    }

    invokeCreateVpnGateway(partialParams: ToOptional<{
      [K in keyof CreateVpnGatewayRequest & keyof Omit<CreateVpnGatewayRequest, "Type">]: (CreateVpnGatewayRequest)[K]
    }>): Request<CreateVpnGatewayResult, AWSError> {
        this.boot();
        return this.client.createVpnGateway(
          this.ops["CreateVpnGateway"].apply(partialParams)
        );
    }
}