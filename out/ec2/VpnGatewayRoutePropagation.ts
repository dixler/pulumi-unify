
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AssociateRouteTableRequest,
    AttachVpnGatewayRequest,
    CreateRouteRequest,
    ReplaceRouteTableAssociationRequest,
    AssociateRouteTableResult,
    AttachVpnGatewayResult,
    CreateRouteResult,
    ReplaceRouteTableAssociationResult
} from "aws-sdk/clients/ec2";
const schema = require("../apis/ec2-2016-11-15.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ec2.VpnGatewayRoutePropagation {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.ec2.VpnGatewayRoutePropagation>) {
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

    invokeAssociateRouteTable(partialParams: ToOptional<{
      [K in keyof AssociateRouteTableRequest & keyof Omit<AssociateRouteTableRequest, "RouteTableId">]: (AssociateRouteTableRequest)[K]
    }>): Request<AssociateRouteTableResult, AWSError> {
        this.boot();
        return this.client.associateRouteTable(
          this.ops["AssociateRouteTable"].apply(partialParams)
        );
    }

    invokeAttachVpnGateway(partialParams: ToOptional<{
      [K in keyof AttachVpnGatewayRequest & keyof Omit<AttachVpnGatewayRequest, "VpnGatewayId">]: (AttachVpnGatewayRequest)[K]
    }>): Request<AttachVpnGatewayResult, AWSError> {
        this.boot();
        return this.client.attachVpnGateway(
          this.ops["AttachVpnGateway"].apply(partialParams)
        );
    }

    invokeCreateRoute(partialParams: ToOptional<{
      [K in keyof CreateRouteRequest & keyof Omit<CreateRouteRequest, "RouteTableId">]: (CreateRouteRequest)[K]
    }>): Request<CreateRouteResult, AWSError> {
        this.boot();
        return this.client.createRoute(
          this.ops["CreateRoute"].apply(partialParams)
        );
    }

    invokeReplaceRouteTableAssociation(partialParams: ToOptional<{
      [K in keyof ReplaceRouteTableAssociationRequest & keyof Omit<ReplaceRouteTableAssociationRequest, "RouteTableId">]: (ReplaceRouteTableAssociationRequest)[K]
    }>): Request<ReplaceRouteTableAssociationResult, AWSError> {
        this.boot();
        return this.client.replaceRouteTableAssociation(
          this.ops["ReplaceRouteTableAssociation"].apply(partialParams)
        );
    }
}