
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AllocateHostsRequest,
    AssociateClientVpnTargetNetworkRequest,
    AssociateIamInstanceProfileRequest,
    AssociateSubnetCidrBlockRequest,
    CreateCapacityReservationRequest,
    CreateDefaultSubnetRequest,
    CreateKeyPairRequest,
    CreateNatGatewayRequest,
    CreateNetworkInterfaceRequest,
    CreateSubnetCidrReservationRequest,
    CreateVolumeRequest,
    GetSubnetCidrReservationsRequest,
    ImportKeyPairRequest,
    ImportVolumeRequest,
    ModifyVpcTenancyRequest,
    MoveAddressToVpcRequest,
    ReplaceIamInstanceProfileAssociationRequest,
    RestoreAddressToClassicRequest,
    AllocateHostsResult,
    AssociateClientVpnTargetNetworkResult,
    AssociateIamInstanceProfileResult,
    AssociateSubnetCidrBlockResult,
    CreateCapacityReservationResult,
    CreateDefaultSubnetResult,
    KeyPair,
    CreateNatGatewayResult,
    CreateNetworkInterfaceResult,
    CreateSubnetCidrReservationResult,
    Volume,
    GetSubnetCidrReservationsResult,
    ImportKeyPairResult,
    ImportVolumeResult,
    ModifyVpcTenancyResult,
    MoveAddressToVpcResult,
    ReplaceIamInstanceProfileAssociationResult,
    RestoreAddressToClassicResult
} from "aws-sdk/clients/ec2";
const schema = require("../apis/ec2-2016-11-15.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ec2.Instance {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.ec2.Instance>) {
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

    invokeAllocateHosts(partialParams: ToOptional<{
      [K in keyof AllocateHostsRequest & keyof Omit<AllocateHostsRequest, "AvailabilityZone">]: (AllocateHostsRequest)[K]
    }>): Request<AllocateHostsResult, AWSError> {
        this.boot();
        return this.client.allocateHosts(
          this.ops["AllocateHosts"].apply(partialParams)
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

    invokeAssociateIamInstanceProfile(partialParams: ToOptional<{
      [K in keyof AssociateIamInstanceProfileRequest & keyof Omit<AssociateIamInstanceProfileRequest, "IamInstanceProfile">]: (AssociateIamInstanceProfileRequest)[K]
    }>): Request<AssociateIamInstanceProfileResult, AWSError> {
        this.boot();
        return this.client.associateIamInstanceProfile(
          this.ops["AssociateIamInstanceProfile"].apply(partialParams)
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

    invokeCreateCapacityReservation(partialParams: ToOptional<{
      [K in keyof CreateCapacityReservationRequest & keyof Omit<CreateCapacityReservationRequest, "InstanceType">]: (CreateCapacityReservationRequest)[K]
    }>): Request<CreateCapacityReservationResult, AWSError> {
        this.boot();
        return this.client.createCapacityReservation(
          this.ops["CreateCapacityReservation"].apply(partialParams)
        );
    }

    invokeCreateDefaultSubnet(partialParams: ToOptional<{
      [K in keyof CreateDefaultSubnetRequest & keyof Omit<CreateDefaultSubnetRequest, "AvailabilityZone">]: (CreateDefaultSubnetRequest)[K]
    }>): Request<CreateDefaultSubnetResult, AWSError> {
        this.boot();
        return this.client.createDefaultSubnet(
          this.ops["CreateDefaultSubnet"].apply(partialParams)
        );
    }

    invokeCreateKeyPair(partialParams: ToOptional<{
      [K in keyof CreateKeyPairRequest & keyof Omit<CreateKeyPairRequest, "KeyName">]: (CreateKeyPairRequest)[K]
    }>): Request<KeyPair, AWSError> {
        this.boot();
        return this.client.createKeyPair(
          this.ops["CreateKeyPair"].apply(partialParams)
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

    invokeCreateSubnetCidrReservation(partialParams: ToOptional<{
      [K in keyof CreateSubnetCidrReservationRequest & keyof Omit<CreateSubnetCidrReservationRequest, "SubnetId">]: (CreateSubnetCidrReservationRequest)[K]
    }>): Request<CreateSubnetCidrReservationResult, AWSError> {
        this.boot();
        return this.client.createSubnetCidrReservation(
          this.ops["CreateSubnetCidrReservation"].apply(partialParams)
        );
    }

    invokeCreateVolume(partialParams: ToOptional<{
      [K in keyof CreateVolumeRequest & keyof Omit<CreateVolumeRequest, "AvailabilityZone">]: (CreateVolumeRequest)[K]
    }>): Request<Volume, AWSError> {
        this.boot();
        return this.client.createVolume(
          this.ops["CreateVolume"].apply(partialParams)
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

    invokeImportKeyPair(partialParams: ToOptional<{
      [K in keyof ImportKeyPairRequest & keyof Omit<ImportKeyPairRequest, "KeyName">]: (ImportKeyPairRequest)[K]
    }>): Request<ImportKeyPairResult, AWSError> {
        this.boot();
        return this.client.importKeyPair(
          this.ops["ImportKeyPair"].apply(partialParams)
        );
    }

    invokeImportVolume(partialParams: ToOptional<{
      [K in keyof ImportVolumeRequest & keyof Omit<ImportVolumeRequest, "AvailabilityZone">]: (ImportVolumeRequest)[K]
    }>): Request<ImportVolumeResult, AWSError> {
        this.boot();
        return this.client.importVolume(
          this.ops["ImportVolume"].apply(partialParams)
        );
    }

    invokeModifyVpcTenancy(partialParams: ToOptional<{
      [K in keyof ModifyVpcTenancyRequest & keyof Omit<ModifyVpcTenancyRequest, "InstanceTenancy">]: (ModifyVpcTenancyRequest)[K]
    }>): Request<ModifyVpcTenancyResult, AWSError> {
        this.boot();
        return this.client.modifyVpcTenancy(
          this.ops["ModifyVpcTenancy"].apply(partialParams)
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

    invokeReplaceIamInstanceProfileAssociation(partialParams: ToOptional<{
      [K in keyof ReplaceIamInstanceProfileAssociationRequest & keyof Omit<ReplaceIamInstanceProfileAssociationRequest, "IamInstanceProfile">]: (ReplaceIamInstanceProfileAssociationRequest)[K]
    }>): Request<ReplaceIamInstanceProfileAssociationResult, AWSError> {
        this.boot();
        return this.client.replaceIamInstanceProfileAssociation(
          this.ops["ReplaceIamInstanceProfileAssociation"].apply(partialParams)
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
}