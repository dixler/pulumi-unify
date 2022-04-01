
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AssignIpv6AddressesRequest,
    AssignPrivateIpAddressesRequest,
    AttachNetworkInterfaceRequest,
    CreateNetworkInterfacePermissionRequest,
    CreateSecurityGroupRequest,
    CreateTrafficMirrorSessionRequest,
    DescribeNetworkInterfaceAttributeRequest,
    UnassignIpv6AddressesRequest,
    AssignIpv6AddressesResult,
    AssignPrivateIpAddressesResult,
    AttachNetworkInterfaceResult,
    CreateNetworkInterfacePermissionResult,
    CreateSecurityGroupResult,
    CreateTrafficMirrorSessionResult,
    DescribeNetworkInterfaceAttributeResult,
    UnassignIpv6AddressesResult
} from "aws-sdk/clients/ec2";
const schema = require("../apis/ec2-2016-11-15.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ec2.TrafficMirrorTarget {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.ec2.TrafficMirrorTarget>) {
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

    invokeAttachNetworkInterface(partialParams: ToOptional<{
      [K in keyof AttachNetworkInterfaceRequest & keyof Omit<AttachNetworkInterfaceRequest, "NetworkInterfaceId">]: (AttachNetworkInterfaceRequest)[K]
    }>): Request<AttachNetworkInterfaceResult, AWSError> {
        this.boot();
        return this.client.attachNetworkInterface(
          this.ops["AttachNetworkInterface"].apply(partialParams)
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

    invokeCreateSecurityGroup(partialParams: ToOptional<{
      [K in keyof CreateSecurityGroupRequest & keyof Omit<CreateSecurityGroupRequest, "Description">]: (CreateSecurityGroupRequest)[K]
    }>): Request<CreateSecurityGroupResult, AWSError> {
        this.boot();
        return this.client.createSecurityGroup(
          this.ops["CreateSecurityGroup"].apply(partialParams)
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

    invokeUnassignIpv6Addresses(partialParams: ToOptional<{
      [K in keyof UnassignIpv6AddressesRequest & keyof Omit<UnassignIpv6AddressesRequest, "NetworkInterfaceId">]: (UnassignIpv6AddressesRequest)[K]
    }>): Request<UnassignIpv6AddressesResult, AWSError> {
        this.boot();
        return this.client.unassignIpv6Addresses(
          this.ops["UnassignIpv6Addresses"].apply(partialParams)
        );
    }
}