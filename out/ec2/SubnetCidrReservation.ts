
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AssociateClientVpnTargetNetworkRequest,
    AssociateSubnetCidrBlockRequest,
    CreateNatGatewayRequest,
    CreateNetworkInterfaceRequest,
    CreateSecurityGroupRequest,
    CreateSubnetCidrReservationRequest,
    GetSubnetCidrReservationsRequest,
    AssociateClientVpnTargetNetworkResult,
    AssociateSubnetCidrBlockResult,
    CreateNatGatewayResult,
    CreateNetworkInterfaceResult,
    CreateSecurityGroupResult,
    CreateSubnetCidrReservationResult,
    GetSubnetCidrReservationsResult
} from "aws-sdk/clients/ec2";
const schema = require("../apis/ec2-2016-11-15.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ec2.SubnetCidrReservation {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.ec2.SubnetCidrReservation>) {
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

    invokeAssociateClientVpnTargetNetwork(partialParams: ToOptional<{
      [K in keyof AssociateClientVpnTargetNetworkRequest & keyof Omit<AssociateClientVpnTargetNetworkRequest, "SubnetId">]: (AssociateClientVpnTargetNetworkRequest)[K]
    }>): Request<AssociateClientVpnTargetNetworkResult, AWSError> {
        this.boot();
        return this.client.associateClientVpnTargetNetwork(
          this.ops["AssociateClientVpnTargetNetwork"].apply(partialParams)
        );
    }

    invokeAssociateSubnetCidrBlock(partialParams: ToOptional<{
      [K in keyof AssociateSubnetCidrBlockRequest & keyof Omit<AssociateSubnetCidrBlockRequest, "SubnetId">]: (AssociateSubnetCidrBlockRequest)[K]
    }>): Request<AssociateSubnetCidrBlockResult, AWSError> {
        this.boot();
        return this.client.associateSubnetCidrBlock(
          this.ops["AssociateSubnetCidrBlock"].apply(partialParams)
        );
    }

    invokeCreateNatGateway(partialParams: ToOptional<{
      [K in keyof CreateNatGatewayRequest & keyof Omit<CreateNatGatewayRequest, "SubnetId">]: (CreateNatGatewayRequest)[K]
    }>): Request<CreateNatGatewayResult, AWSError> {
        this.boot();
        return this.client.createNatGateway(
          this.ops["CreateNatGateway"].apply(partialParams)
        );
    }

    invokeCreateNetworkInterface(partialParams: ToOptional<{
      [K in keyof CreateNetworkInterfaceRequest & keyof Omit<CreateNetworkInterfaceRequest, "SubnetId">]: (CreateNetworkInterfaceRequest)[K]
    }>): Request<CreateNetworkInterfaceResult, AWSError> {
        this.boot();
        return this.client.createNetworkInterface(
          this.ops["CreateNetworkInterface"].apply(partialParams)
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

    invokeCreateSubnetCidrReservation(partialParams: ToOptional<{
      [K in keyof CreateSubnetCidrReservationRequest & keyof Omit<CreateSubnetCidrReservationRequest, "SubnetId" | "ReservationType">]: (CreateSubnetCidrReservationRequest)[K]
    }>): Request<CreateSubnetCidrReservationResult, AWSError> {
        this.boot();
        return this.client.createSubnetCidrReservation(
          this.ops["CreateSubnetCidrReservation"].apply(partialParams)
        );
    }

    invokeGetSubnetCidrReservations(partialParams: ToOptional<{
      [K in keyof GetSubnetCidrReservationsRequest & keyof Omit<GetSubnetCidrReservationsRequest, "SubnetId">]: (GetSubnetCidrReservationsRequest)[K]
    }>): Request<GetSubnetCidrReservationsResult, AWSError> {
        this.boot();
        return this.client.getSubnetCidrReservations(
          this.ops["GetSubnetCidrReservations"].apply(partialParams)
        );
    }
}