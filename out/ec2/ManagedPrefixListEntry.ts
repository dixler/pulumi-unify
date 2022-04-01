
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AdvertiseByoipCidrRequest,
    CreateSecurityGroupRequest,
    CreateSubnetCidrReservationRequest,
    CreateTransitGatewayPrefixListReferenceRequest,
    DeleteManagedPrefixListRequest,
    DeleteTransitGatewayPrefixListReferenceRequest,
    DeprovisionByoipCidrRequest,
    DeprovisionPublicIpv4PoolCidrRequest,
    GetIpamAddressHistoryRequest,
    GetManagedPrefixListAssociationsRequest,
    GetManagedPrefixListEntriesRequest,
    ModifyManagedPrefixListRequest,
    ModifyTransitGatewayPrefixListReferenceRequest,
    MoveByoipCidrToIpamRequest,
    ProvisionByoipCidrRequest,
    ReleaseIpamPoolAllocationRequest,
    RestoreManagedPrefixListVersionRequest,
    WithdrawByoipCidrRequest,
    AdvertiseByoipCidrResult,
    CreateSecurityGroupResult,
    CreateSubnetCidrReservationResult,
    CreateTransitGatewayPrefixListReferenceResult,
    DeleteManagedPrefixListResult,
    DeleteTransitGatewayPrefixListReferenceResult,
    DeprovisionByoipCidrResult,
    DeprovisionPublicIpv4PoolCidrResult,
    GetIpamAddressHistoryResult,
    GetManagedPrefixListAssociationsResult,
    GetManagedPrefixListEntriesResult,
    ModifyManagedPrefixListResult,
    ModifyTransitGatewayPrefixListReferenceResult,
    MoveByoipCidrToIpamResult,
    ProvisionByoipCidrResult,
    ReleaseIpamPoolAllocationResult,
    RestoreManagedPrefixListVersionResult,
    WithdrawByoipCidrResult
} from "aws-sdk/clients/ec2";
const schema = require("../apis/ec2-2016-11-15.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ec2.ManagedPrefixListEntry {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.ec2.ManagedPrefixListEntry>) {
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

    invokeCreateSecurityGroup(partialParams: ToOptional<{
      [K in keyof CreateSecurityGroupRequest & keyof Omit<CreateSecurityGroupRequest, "Description">]: (CreateSecurityGroupRequest)[K]
    }>): Request<CreateSecurityGroupResult, AWSError> {
        this.boot();
        return this.client.createSecurityGroup(
          this.ops["CreateSecurityGroup"].apply(partialParams)
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

    invokeCreateTransitGatewayPrefixListReference(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayPrefixListReferenceRequest & keyof Omit<CreateTransitGatewayPrefixListReferenceRequest, "PrefixListId">]: (CreateTransitGatewayPrefixListReferenceRequest)[K]
    }>): Request<CreateTransitGatewayPrefixListReferenceResult, AWSError> {
        this.boot();
        return this.client.createTransitGatewayPrefixListReference(
          this.ops["CreateTransitGatewayPrefixListReference"].apply(partialParams)
        );
    }

    invokeDeleteManagedPrefixList(partialParams: ToOptional<{
      [K in keyof DeleteManagedPrefixListRequest & keyof Omit<DeleteManagedPrefixListRequest, "PrefixListId">]: (DeleteManagedPrefixListRequest)[K]
    }>): Request<DeleteManagedPrefixListResult, AWSError> {
        this.boot();
        return this.client.deleteManagedPrefixList(
          this.ops["DeleteManagedPrefixList"].apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayPrefixListReference(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayPrefixListReferenceRequest & keyof Omit<DeleteTransitGatewayPrefixListReferenceRequest, "PrefixListId">]: (DeleteTransitGatewayPrefixListReferenceRequest)[K]
    }>): Request<DeleteTransitGatewayPrefixListReferenceResult, AWSError> {
        this.boot();
        return this.client.deleteTransitGatewayPrefixListReference(
          this.ops["DeleteTransitGatewayPrefixListReference"].apply(partialParams)
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

    invokeGetManagedPrefixListAssociations(partialParams: ToOptional<{
      [K in keyof GetManagedPrefixListAssociationsRequest & keyof Omit<GetManagedPrefixListAssociationsRequest, "PrefixListId">]: (GetManagedPrefixListAssociationsRequest)[K]
    }>): Request<GetManagedPrefixListAssociationsResult, AWSError> {
        this.boot();
        return this.client.getManagedPrefixListAssociations(
          this.ops["GetManagedPrefixListAssociations"].apply(partialParams)
        );
    }

    invokeGetManagedPrefixListEntries(partialParams: ToOptional<{
      [K in keyof GetManagedPrefixListEntriesRequest & keyof Omit<GetManagedPrefixListEntriesRequest, "PrefixListId">]: (GetManagedPrefixListEntriesRequest)[K]
    }>): Request<GetManagedPrefixListEntriesResult, AWSError> {
        this.boot();
        return this.client.getManagedPrefixListEntries(
          this.ops["GetManagedPrefixListEntries"].apply(partialParams)
        );
    }

    invokeModifyManagedPrefixList(partialParams: ToOptional<{
      [K in keyof ModifyManagedPrefixListRequest & keyof Omit<ModifyManagedPrefixListRequest, "PrefixListId">]: (ModifyManagedPrefixListRequest)[K]
    }>): Request<ModifyManagedPrefixListResult, AWSError> {
        this.boot();
        return this.client.modifyManagedPrefixList(
          this.ops["ModifyManagedPrefixList"].apply(partialParams)
        );
    }

    invokeModifyTransitGatewayPrefixListReference(partialParams: ToOptional<{
      [K in keyof ModifyTransitGatewayPrefixListReferenceRequest & keyof Omit<ModifyTransitGatewayPrefixListReferenceRequest, "PrefixListId">]: (ModifyTransitGatewayPrefixListReferenceRequest)[K]
    }>): Request<ModifyTransitGatewayPrefixListReferenceResult, AWSError> {
        this.boot();
        return this.client.modifyTransitGatewayPrefixListReference(
          this.ops["ModifyTransitGatewayPrefixListReference"].apply(partialParams)
        );
    }

    invokeMoveByoipCidrToIpam(partialParams: ToOptional<{
      [K in keyof MoveByoipCidrToIpamRequest & keyof Omit<MoveByoipCidrToIpamRequest, "Cidr">]: (MoveByoipCidrToIpamRequest)[K]
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

    invokeReleaseIpamPoolAllocation(partialParams: ToOptional<{
      [K in keyof ReleaseIpamPoolAllocationRequest & keyof Omit<ReleaseIpamPoolAllocationRequest, "Cidr">]: (ReleaseIpamPoolAllocationRequest)[K]
    }>): Request<ReleaseIpamPoolAllocationResult, AWSError> {
        this.boot();
        return this.client.releaseIpamPoolAllocation(
          this.ops["ReleaseIpamPoolAllocation"].apply(partialParams)
        );
    }

    invokeRestoreManagedPrefixListVersion(partialParams: ToOptional<{
      [K in keyof RestoreManagedPrefixListVersionRequest & keyof Omit<RestoreManagedPrefixListVersionRequest, "PrefixListId">]: (RestoreManagedPrefixListVersionRequest)[K]
    }>): Request<RestoreManagedPrefixListVersionResult, AWSError> {
        this.boot();
        return this.client.restoreManagedPrefixListVersion(
          this.ops["RestoreManagedPrefixListVersion"].apply(partialParams)
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