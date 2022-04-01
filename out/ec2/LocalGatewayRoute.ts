
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateClientVpnRouteRequest,
    CreateLocalGatewayRouteRequest,
    CreateLocalGatewayRouteTableVpcAssociationRequest,
    CreateTrafficMirrorFilterRuleRequest,
    CreateTransitGatewayRouteRequest,
    DeleteClientVpnRouteRequest,
    DeleteLocalGatewayRouteRequest,
    DeleteTransitGatewayRouteRequest,
    ReplaceTransitGatewayRouteRequest,
    SearchLocalGatewayRoutesRequest,
    CreateClientVpnRouteResult,
    CreateLocalGatewayRouteResult,
    CreateLocalGatewayRouteTableVpcAssociationResult,
    CreateTrafficMirrorFilterRuleResult,
    CreateTransitGatewayRouteResult,
    DeleteClientVpnRouteResult,
    DeleteLocalGatewayRouteResult,
    DeleteTransitGatewayRouteResult,
    ReplaceTransitGatewayRouteResult,
    SearchLocalGatewayRoutesResult
} from "aws-sdk/clients/ec2";
const schema = require("../apis/ec2-2016-11-15.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ec2.LocalGatewayRoute {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.ec2.LocalGatewayRoute>) {
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

    invokeCreateClientVpnRoute(partialParams: ToOptional<{
      [K in keyof CreateClientVpnRouteRequest & keyof Omit<CreateClientVpnRouteRequest, "DestinationCidrBlock">]: (CreateClientVpnRouteRequest)[K]
    }>): Request<CreateClientVpnRouteResult, AWSError> {
        this.boot();
        return this.client.createClientVpnRoute(
          this.ops["CreateClientVpnRoute"].apply(partialParams)
        );
    }

    invokeCreateLocalGatewayRoute(partialParams: ToOptional<{
      [K in keyof CreateLocalGatewayRouteRequest & keyof Omit<CreateLocalGatewayRouteRequest, "DestinationCidrBlock" | "LocalGatewayRouteTableId" | "LocalGatewayVirtualInterfaceGroupId">]: (CreateLocalGatewayRouteRequest)[K]
    }>): Request<CreateLocalGatewayRouteResult, AWSError> {
        this.boot();
        return this.client.createLocalGatewayRoute(
          this.ops["CreateLocalGatewayRoute"].apply(partialParams)
        );
    }

    invokeCreateLocalGatewayRouteTableVpcAssociation(partialParams: ToOptional<{
      [K in keyof CreateLocalGatewayRouteTableVpcAssociationRequest & keyof Omit<CreateLocalGatewayRouteTableVpcAssociationRequest, "LocalGatewayRouteTableId">]: (CreateLocalGatewayRouteTableVpcAssociationRequest)[K]
    }>): Request<CreateLocalGatewayRouteTableVpcAssociationResult, AWSError> {
        this.boot();
        return this.client.createLocalGatewayRouteTableVpcAssociation(
          this.ops["CreateLocalGatewayRouteTableVpcAssociation"].apply(partialParams)
        );
    }

    invokeCreateTrafficMirrorFilterRule(partialParams: ToOptional<{
      [K in keyof CreateTrafficMirrorFilterRuleRequest & keyof Omit<CreateTrafficMirrorFilterRuleRequest, "DestinationCidrBlock">]: (CreateTrafficMirrorFilterRuleRequest)[K]
    }>): Request<CreateTrafficMirrorFilterRuleResult, AWSError> {
        this.boot();
        return this.client.createTrafficMirrorFilterRule(
          this.ops["CreateTrafficMirrorFilterRule"].apply(partialParams)
        );
    }

    invokeCreateTransitGatewayRoute(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayRouteRequest & keyof Omit<CreateTransitGatewayRouteRequest, "DestinationCidrBlock">]: (CreateTransitGatewayRouteRequest)[K]
    }>): Request<CreateTransitGatewayRouteResult, AWSError> {
        this.boot();
        return this.client.createTransitGatewayRoute(
          this.ops["CreateTransitGatewayRoute"].apply(partialParams)
        );
    }

    invokeDeleteClientVpnRoute(partialParams: ToOptional<{
      [K in keyof DeleteClientVpnRouteRequest & keyof Omit<DeleteClientVpnRouteRequest, "DestinationCidrBlock">]: (DeleteClientVpnRouteRequest)[K]
    }>): Request<DeleteClientVpnRouteResult, AWSError> {
        this.boot();
        return this.client.deleteClientVpnRoute(
          this.ops["DeleteClientVpnRoute"].apply(partialParams)
        );
    }

    invokeDeleteLocalGatewayRoute(partialParams: ToOptional<{
      [K in keyof DeleteLocalGatewayRouteRequest & keyof Omit<DeleteLocalGatewayRouteRequest, "DestinationCidrBlock" | "LocalGatewayRouteTableId">]: (DeleteLocalGatewayRouteRequest)[K]
    }>): Request<DeleteLocalGatewayRouteResult, AWSError> {
        this.boot();
        return this.client.deleteLocalGatewayRoute(
          this.ops["DeleteLocalGatewayRoute"].apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayRoute(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayRouteRequest & keyof Omit<DeleteTransitGatewayRouteRequest, "DestinationCidrBlock">]: (DeleteTransitGatewayRouteRequest)[K]
    }>): Request<DeleteTransitGatewayRouteResult, AWSError> {
        this.boot();
        return this.client.deleteTransitGatewayRoute(
          this.ops["DeleteTransitGatewayRoute"].apply(partialParams)
        );
    }

    invokeReplaceTransitGatewayRoute(partialParams: ToOptional<{
      [K in keyof ReplaceTransitGatewayRouteRequest & keyof Omit<ReplaceTransitGatewayRouteRequest, "DestinationCidrBlock">]: (ReplaceTransitGatewayRouteRequest)[K]
    }>): Request<ReplaceTransitGatewayRouteResult, AWSError> {
        this.boot();
        return this.client.replaceTransitGatewayRoute(
          this.ops["ReplaceTransitGatewayRoute"].apply(partialParams)
        );
    }

    invokeSearchLocalGatewayRoutes(partialParams: ToOptional<{
      [K in keyof SearchLocalGatewayRoutesRequest & keyof Omit<SearchLocalGatewayRoutesRequest, "LocalGatewayRouteTableId">]: (SearchLocalGatewayRoutesRequest)[K]
    }>): Request<SearchLocalGatewayRoutesResult, AWSError> {
        this.boot();
        return this.client.searchLocalGatewayRoutes(
          this.ops["SearchLocalGatewayRoutes"].apply(partialParams)
        );
    }
}