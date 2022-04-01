
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AssignIpv6AddressesRequest,
    AssignPrivateIpAddressesRequest,
    AssociateClientVpnTargetNetworkRequest,
    AssociateSubnetCidrBlockRequest,
    AttachNetworkInterfaceRequest,
    CreateNatGatewayRequest,
    CreateNetworkInterfaceRequest,
    CreateNetworkInterfacePermissionRequest,
    CreateSubnetCidrReservationRequest,
    CreateTrafficMirrorSessionRequest,
    DescribeNetworkInterfaceAttributeRequest,
    GetSubnetCidrReservationsRequest,
    ModifyAddressAttributeRequest,
    MoveAddressToVpcRequest,
    ResetAddressAttributeRequest,
    RestoreAddressToClassicRequest,
    UnassignIpv6AddressesRequest,
    AssignIpv6AddressesResult,
    AssignPrivateIpAddressesResult,
    AssociateClientVpnTargetNetworkResult,
    AssociateSubnetCidrBlockResult,
    AttachNetworkInterfaceResult,
    CreateNatGatewayResult,
    CreateNetworkInterfaceResult,
    CreateNetworkInterfacePermissionResult,
    CreateSubnetCidrReservationResult,
    CreateTrafficMirrorSessionResult,
    DescribeNetworkInterfaceAttributeResult,
    GetSubnetCidrReservationsResult,
    ModifyAddressAttributeResult,
    MoveAddressToVpcResult,
    ResetAddressAttributeResult,
    RestoreAddressToClassicResult,
    UnassignIpv6AddressesResult
} from "aws-sdk/clients/ec2";
const schema = require("../apis/ec2-2016-11-15.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ec2.NatGateway {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.ec2.NatGateway>) {
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

    invokeAssignIpv6Addresses(partialParams: ToOptional<{
      [K in keyof AssignIpv6AddressesRequest & keyof Omit<AssignIpv6AddressesRequest, "NetworkInterfaceId">]: (AssignIpv6AddressesRequest)[K]
    }>): Request<AssignIpv6AddressesResult, AWSError> {
        this.boot();
        return this.client.assignIpv6Addresses(
          this.ops["AssignIpv6Addresses"].apply(partialParams)
        );
    }

    invokeAssignPrivateIpAddresses(partialParams: ToOptional<{
      [K in keyof AssignPrivateIpAddressesRequest & keyof Omit<AssignPrivateIpAddressesRequest, "NetworkInterfaceId">]: (AssignPrivateIpAddressesRequest)[K]
    }>): Request<AssignPrivateIpAddressesResult, AWSError> {
        this.boot();
        return this.client.assignPrivateIpAddresses(
          this.ops["AssignPrivateIpAddresses"].apply(partialParams)
        );
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

    invokeAttachNetworkInterface(partialParams: ToOptional<{
      [K in keyof AttachNetworkInterfaceRequest & keyof Omit<AttachNetworkInterfaceRequest, "NetworkInterfaceId">]: (AttachNetworkInterfaceRequest)[K]
    }>): Request<AttachNetworkInterfaceResult, AWSError> {
        this.boot();
        return this.client.attachNetworkInterface(
          this.ops["AttachNetworkInterface"].apply(partialParams)
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

    invokeCreateNetworkInterfacePermission(partialParams: ToOptional<{
      [K in keyof CreateNetworkInterfacePermissionRequest & keyof Omit<CreateNetworkInterfacePermissionRequest, "NetworkInterfaceId">]: (CreateNetworkInterfacePermissionRequest)[K]
    }>): Request<CreateNetworkInterfacePermissionResult, AWSError> {
        this.boot();
        return this.client.createNetworkInterfacePermission(
          this.ops["CreateNetworkInterfacePermission"].apply(partialParams)
        );
    }

    invokeCreateSubnetCidrReservation(partialParams: ToOptional<{
      [K in keyof CreateSubnetCidrReservationRequest & keyof Omit<CreateSubnetCidrReservationRequest, "SubnetId">]: (CreateSubnetCidrReservationRequest)[K]
    }>): Request<CreateSubnetCidrReservationResult, AWSError> {
        this.boot();
        return this.client.createSubnetCidrReservation(
          this.ops["CreateSubnetCidrReservation"].apply(partialParams)
        );
    }

    invokeCreateTrafficMirrorSession(partialParams: ToOptional<{
      [K in keyof CreateTrafficMirrorSessionRequest & keyof Omit<CreateTrafficMirrorSessionRequest, "NetworkInterfaceId">]: (CreateTrafficMirrorSessionRequest)[K]
    }>): Request<CreateTrafficMirrorSessionResult, AWSError> {
        this.boot();
        return this.client.createTrafficMirrorSession(
          this.ops["CreateTrafficMirrorSession"].apply(partialParams)
        );
    }

    invokeDescribeNetworkInterfaceAttribute(partialParams: ToOptional<{
      [K in keyof DescribeNetworkInterfaceAttributeRequest & keyof Omit<DescribeNetworkInterfaceAttributeRequest, "NetworkInterfaceId">]: (DescribeNetworkInterfaceAttributeRequest)[K]
    }>): Request<DescribeNetworkInterfaceAttributeResult, AWSError> {
        this.boot();
        return this.client.describeNetworkInterfaceAttribute(
          this.ops["DescribeNetworkInterfaceAttribute"].apply(partialParams)
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

    invokeModifyAddressAttribute(partialParams: ToOptional<{
      [K in keyof ModifyAddressAttributeRequest & keyof Omit<ModifyAddressAttributeRequest, "AllocationId">]: (ModifyAddressAttributeRequest)[K]
    }>): Request<ModifyAddressAttributeResult, AWSError> {
        this.boot();
        return this.client.modifyAddressAttribute(
          this.ops["ModifyAddressAttribute"].apply(partialParams)
        );
    }

    invokeMoveAddressToVpc(partialParams: ToOptional<{
      [K in keyof MoveAddressToVpcRequest & keyof Omit<MoveAddressToVpcRequest, "PublicIp">]: (MoveAddressToVpcRequest)[K]
    }>): Request<MoveAddressToVpcResult, AWSError> {
        this.boot();
        return this.client.moveAddressToVpc(
          this.ops["MoveAddressToVpc"].apply(partialParams)
        );
    }

    invokeResetAddressAttribute(partialParams: ToOptional<{
      [K in keyof ResetAddressAttributeRequest & keyof Omit<ResetAddressAttributeRequest, "AllocationId">]: (ResetAddressAttributeRequest)[K]
    }>): Request<ResetAddressAttributeResult, AWSError> {
        this.boot();
        return this.client.resetAddressAttribute(
          this.ops["ResetAddressAttribute"].apply(partialParams)
        );
    }

    invokeRestoreAddressToClassic(partialParams: ToOptional<{
      [K in keyof RestoreAddressToClassicRequest & keyof Omit<RestoreAddressToClassicRequest, "PublicIp">]: (RestoreAddressToClassicRequest)[K]
    }>): Request<RestoreAddressToClassicResult, AWSError> {
        this.boot();
        return this.client.restoreAddressToClassic(
          this.ops["RestoreAddressToClassic"].apply(partialParams)
        );
    }

    invokeUnassignIpv6Addresses(partialParams: ToOptional<{
      [K in keyof UnassignIpv6AddressesRequest & keyof Omit<UnassignIpv6AddressesRequest, "NetworkInterfaceId">]: (UnassignIpv6AddressesRequest)[K]
    }>): Request<UnassignIpv6AddressesResult, AWSError> {
        this.boot();
        return this.client.unassignIpv6Addresses(
          this.ops["UnassignIpv6Addresses"].apply(partialParams)
        );
    }
}