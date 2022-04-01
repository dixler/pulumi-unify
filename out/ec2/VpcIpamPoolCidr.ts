
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AdvertiseByoipCidrRequest,
    AllocateIpamPoolCidrRequest,
    CreateSubnetCidrReservationRequest,
    DeleteIpamPoolRequest,
    DeprovisionByoipCidrRequest,
    DeprovisionIpamPoolCidrRequest,
    DeprovisionPublicIpv4PoolCidrRequest,
    GetIpamAddressHistoryRequest,
    GetIpamPoolAllocationsRequest,
    GetIpamPoolCidrsRequest,
    ModifyIpamPoolRequest,
    MoveByoipCidrToIpamRequest,
    ProvisionByoipCidrRequest,
    ProvisionIpamPoolCidrRequest,
    ProvisionPublicIpv4PoolCidrRequest,
    ReleaseIpamPoolAllocationRequest,
    WithdrawByoipCidrRequest,
    AdvertiseByoipCidrResult,
    AllocateIpamPoolCidrResult,
    CreateSubnetCidrReservationResult,
    DeleteIpamPoolResult,
    DeprovisionByoipCidrResult,
    DeprovisionIpamPoolCidrResult,
    DeprovisionPublicIpv4PoolCidrResult,
    GetIpamAddressHistoryResult,
    GetIpamPoolAllocationsResult,
    GetIpamPoolCidrsResult,
    ModifyIpamPoolResult,
    MoveByoipCidrToIpamResult,
    ProvisionByoipCidrResult,
    ProvisionIpamPoolCidrResult,
    ProvisionPublicIpv4PoolCidrResult,
    ReleaseIpamPoolAllocationResult,
    WithdrawByoipCidrResult
} from "aws-sdk/clients/ec2";
const schema = require("../apis/ec2-2016-11-15.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ec2.VpcIpamPoolCidr {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.ec2.VpcIpamPoolCidr>) {
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

    invokeAdvertiseByoipCidr(partialParams: ToOptional<{
      [K in keyof AdvertiseByoipCidrRequest & keyof Omit<AdvertiseByoipCidrRequest, "Cidr">]: (AdvertiseByoipCidrRequest)[K]
    }>): Request<AdvertiseByoipCidrResult, AWSError> {
        this.boot();
        return this.client.advertiseByoipCidr(
          this.ops["AdvertiseByoipCidr"].apply(partialParams)
        );
    }

    invokeAllocateIpamPoolCidr(partialParams: ToOptional<{
      [K in keyof AllocateIpamPoolCidrRequest & keyof Omit<AllocateIpamPoolCidrRequest, "IpamPoolId">]: (AllocateIpamPoolCidrRequest)[K]
    }>): Request<AllocateIpamPoolCidrResult, AWSError> {
        this.boot();
        return this.client.allocateIpamPoolCidr(
          this.ops["AllocateIpamPoolCidr"].apply(partialParams)
        );
    }

    invokeCreateSubnetCidrReservation(partialParams: ToOptional<{
      [K in keyof CreateSubnetCidrReservationRequest & keyof Omit<CreateSubnetCidrReservationRequest, "Cidr">]: (CreateSubnetCidrReservationRequest)[K]
    }>): Request<CreateSubnetCidrReservationResult, AWSError> {
        this.boot();
        return this.client.createSubnetCidrReservation(
          this.ops["CreateSubnetCidrReservation"].apply(partialParams)
        );
    }

    invokeDeleteIpamPool(partialParams: ToOptional<{
      [K in keyof DeleteIpamPoolRequest & keyof Omit<DeleteIpamPoolRequest, "IpamPoolId">]: (DeleteIpamPoolRequest)[K]
    }>): Request<DeleteIpamPoolResult, AWSError> {
        this.boot();
        return this.client.deleteIpamPool(
          this.ops["DeleteIpamPool"].apply(partialParams)
        );
    }

    invokeDeprovisionByoipCidr(partialParams: ToOptional<{
      [K in keyof DeprovisionByoipCidrRequest & keyof Omit<DeprovisionByoipCidrRequest, "Cidr">]: (DeprovisionByoipCidrRequest)[K]
    }>): Request<DeprovisionByoipCidrResult, AWSError> {
        this.boot();
        return this.client.deprovisionByoipCidr(
          this.ops["DeprovisionByoipCidr"].apply(partialParams)
        );
    }

    invokeDeprovisionIpamPoolCidr(partialParams: ToOptional<{
      [K in keyof DeprovisionIpamPoolCidrRequest & keyof Omit<DeprovisionIpamPoolCidrRequest, "IpamPoolId">]: (DeprovisionIpamPoolCidrRequest)[K]
    }>): Request<DeprovisionIpamPoolCidrResult, AWSError> {
        this.boot();
        return this.client.deprovisionIpamPoolCidr(
          this.ops["DeprovisionIpamPoolCidr"].apply(partialParams)
        );
    }

    invokeDeprovisionPublicIpv4PoolCidr(partialParams: ToOptional<{
      [K in keyof DeprovisionPublicIpv4PoolCidrRequest & keyof Omit<DeprovisionPublicIpv4PoolCidrRequest, "Cidr">]: (DeprovisionPublicIpv4PoolCidrRequest)[K]
    }>): Request<DeprovisionPublicIpv4PoolCidrResult, AWSError> {
        this.boot();
        return this.client.deprovisionPublicIpv4PoolCidr(
          this.ops["DeprovisionPublicIpv4PoolCidr"].apply(partialParams)
        );
    }

    invokeGetIpamAddressHistory(partialParams: ToOptional<{
      [K in keyof GetIpamAddressHistoryRequest & keyof Omit<GetIpamAddressHistoryRequest, "Cidr">]: (GetIpamAddressHistoryRequest)[K]
    }>): Request<GetIpamAddressHistoryResult, AWSError> {
        this.boot();
        return this.client.getIpamAddressHistory(
          this.ops["GetIpamAddressHistory"].apply(partialParams)
        );
    }

    invokeGetIpamPoolAllocations(partialParams: ToOptional<{
      [K in keyof GetIpamPoolAllocationsRequest & keyof Omit<GetIpamPoolAllocationsRequest, "IpamPoolId">]: (GetIpamPoolAllocationsRequest)[K]
    }>): Request<GetIpamPoolAllocationsResult, AWSError> {
        this.boot();
        return this.client.getIpamPoolAllocations(
          this.ops["GetIpamPoolAllocations"].apply(partialParams)
        );
    }

    invokeGetIpamPoolCidrs(partialParams: ToOptional<{
      [K in keyof GetIpamPoolCidrsRequest & keyof Omit<GetIpamPoolCidrsRequest, "IpamPoolId">]: (GetIpamPoolCidrsRequest)[K]
    }>): Request<GetIpamPoolCidrsResult, AWSError> {
        this.boot();
        return this.client.getIpamPoolCidrs(
          this.ops["GetIpamPoolCidrs"].apply(partialParams)
        );
    }

    invokeModifyIpamPool(partialParams: ToOptional<{
      [K in keyof ModifyIpamPoolRequest & keyof Omit<ModifyIpamPoolRequest, "IpamPoolId">]: (ModifyIpamPoolRequest)[K]
    }>): Request<ModifyIpamPoolResult, AWSError> {
        this.boot();
        return this.client.modifyIpamPool(
          this.ops["ModifyIpamPool"].apply(partialParams)
        );
    }

    invokeMoveByoipCidrToIpam(partialParams: ToOptional<{
      [K in keyof MoveByoipCidrToIpamRequest & keyof Omit<MoveByoipCidrToIpamRequest, "Cidr" | "IpamPoolId">]: (MoveByoipCidrToIpamRequest)[K]
    }>): Request<MoveByoipCidrToIpamResult, AWSError> {
        this.boot();
        return this.client.moveByoipCidrToIpam(
          this.ops["MoveByoipCidrToIpam"].apply(partialParams)
        );
    }

    invokeProvisionByoipCidr(partialParams: ToOptional<{
      [K in keyof ProvisionByoipCidrRequest & keyof Omit<ProvisionByoipCidrRequest, "Cidr">]: (ProvisionByoipCidrRequest)[K]
    }>): Request<ProvisionByoipCidrResult, AWSError> {
        this.boot();
        return this.client.provisionByoipCidr(
          this.ops["ProvisionByoipCidr"].apply(partialParams)
        );
    }

    invokeProvisionIpamPoolCidr(partialParams: ToOptional<{
      [K in keyof ProvisionIpamPoolCidrRequest & keyof Omit<ProvisionIpamPoolCidrRequest, "IpamPoolId">]: (ProvisionIpamPoolCidrRequest)[K]
    }>): Request<ProvisionIpamPoolCidrResult, AWSError> {
        this.boot();
        return this.client.provisionIpamPoolCidr(
          this.ops["ProvisionIpamPoolCidr"].apply(partialParams)
        );
    }

    invokeProvisionPublicIpv4PoolCidr(partialParams: ToOptional<{
      [K in keyof ProvisionPublicIpv4PoolCidrRequest & keyof Omit<ProvisionPublicIpv4PoolCidrRequest, "IpamPoolId">]: (ProvisionPublicIpv4PoolCidrRequest)[K]
    }>): Request<ProvisionPublicIpv4PoolCidrResult, AWSError> {
        this.boot();
        return this.client.provisionPublicIpv4PoolCidr(
          this.ops["ProvisionPublicIpv4PoolCidr"].apply(partialParams)
        );
    }

    invokeReleaseIpamPoolAllocation(partialParams: ToOptional<{
      [K in keyof ReleaseIpamPoolAllocationRequest & keyof Omit<ReleaseIpamPoolAllocationRequest, "IpamPoolId" | "Cidr">]: (ReleaseIpamPoolAllocationRequest)[K]
    }>): Request<ReleaseIpamPoolAllocationResult, AWSError> {
        this.boot();
        return this.client.releaseIpamPoolAllocation(
          this.ops["ReleaseIpamPoolAllocation"].apply(partialParams)
        );
    }

    invokeWithdrawByoipCidr(partialParams: ToOptional<{
      [K in keyof WithdrawByoipCidrRequest & keyof Omit<WithdrawByoipCidrRequest, "Cidr">]: (WithdrawByoipCidrRequest)[K]
    }>): Request<WithdrawByoipCidrResult, AWSError> {
        this.boot();
        return this.client.withdrawByoipCidr(
          this.ops["WithdrawByoipCidr"].apply(partialParams)
        );
    }
}