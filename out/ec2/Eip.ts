
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    DisassociateClientVpnTargetNetworkRequest,
    DisassociateIamInstanceProfileRequest,
    DisassociateSubnetCidrBlockRequest,
    DisassociateTrunkInterfaceRequest,
    DisassociateVpcCidrBlockRequest,
    ModifyAddressAttributeRequest,
    MoveAddressToVpcRequest,
    ReplaceIamInstanceProfileAssociationRequest,
    ReplaceNetworkAclAssociationRequest,
    ReplaceRouteTableAssociationRequest,
    ResetAddressAttributeRequest,
    RestoreAddressToClassicRequest,
    DisassociateClientVpnTargetNetworkResult,
    DisassociateIamInstanceProfileResult,
    DisassociateSubnetCidrBlockResult,
    DisassociateTrunkInterfaceResult,
    DisassociateVpcCidrBlockResult,
    ModifyAddressAttributeResult,
    MoveAddressToVpcResult,
    ReplaceIamInstanceProfileAssociationResult,
    ReplaceNetworkAclAssociationResult,
    ReplaceRouteTableAssociationResult,
    ResetAddressAttributeResult,
    RestoreAddressToClassicResult
} from "aws-sdk/clients/ec2";
const schema = require("../apis/ec2-2016-11-15.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ec2.Eip {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.ec2.Eip>) {
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

    invokeDisassociateClientVpnTargetNetwork(partialParams: ToOptional<{
      [K in keyof DisassociateClientVpnTargetNetworkRequest & keyof Omit<DisassociateClientVpnTargetNetworkRequest, "AssociationId">]: (DisassociateClientVpnTargetNetworkRequest)[K]
    }>): Request<DisassociateClientVpnTargetNetworkResult, AWSError> {
        this.boot();
        return this.client.disassociateClientVpnTargetNetwork(
          this.ops["DisassociateClientVpnTargetNetwork"].apply(partialParams)
        );
    }

    invokeDisassociateIamInstanceProfile(partialParams: ToOptional<{
      [K in keyof DisassociateIamInstanceProfileRequest & keyof Omit<DisassociateIamInstanceProfileRequest, "AssociationId">]: (DisassociateIamInstanceProfileRequest)[K]
    }>): Request<DisassociateIamInstanceProfileResult, AWSError> {
        this.boot();
        return this.client.disassociateIamInstanceProfile(
          this.ops["DisassociateIamInstanceProfile"].apply(partialParams)
        );
    }

    invokeDisassociateSubnetCidrBlock(partialParams: ToOptional<{
      [K in keyof DisassociateSubnetCidrBlockRequest & keyof Omit<DisassociateSubnetCidrBlockRequest, "AssociationId">]: (DisassociateSubnetCidrBlockRequest)[K]
    }>): Request<DisassociateSubnetCidrBlockResult, AWSError> {
        this.boot();
        return this.client.disassociateSubnetCidrBlock(
          this.ops["DisassociateSubnetCidrBlock"].apply(partialParams)
        );
    }

    invokeDisassociateTrunkInterface(partialParams: ToOptional<{
      [K in keyof DisassociateTrunkInterfaceRequest & keyof Omit<DisassociateTrunkInterfaceRequest, "AssociationId">]: (DisassociateTrunkInterfaceRequest)[K]
    }>): Request<DisassociateTrunkInterfaceResult, AWSError> {
        this.boot();
        return this.client.disassociateTrunkInterface(
          this.ops["DisassociateTrunkInterface"].apply(partialParams)
        );
    }

    invokeDisassociateVpcCidrBlock(partialParams: ToOptional<{
      [K in keyof DisassociateVpcCidrBlockRequest & keyof Omit<DisassociateVpcCidrBlockRequest, "AssociationId">]: (DisassociateVpcCidrBlockRequest)[K]
    }>): Request<DisassociateVpcCidrBlockResult, AWSError> {
        this.boot();
        return this.client.disassociateVpcCidrBlock(
          this.ops["DisassociateVpcCidrBlock"].apply(partialParams)
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

    invokeReplaceIamInstanceProfileAssociation(partialParams: ToOptional<{
      [K in keyof ReplaceIamInstanceProfileAssociationRequest & keyof Omit<ReplaceIamInstanceProfileAssociationRequest, "AssociationId">]: (ReplaceIamInstanceProfileAssociationRequest)[K]
    }>): Request<ReplaceIamInstanceProfileAssociationResult, AWSError> {
        this.boot();
        return this.client.replaceIamInstanceProfileAssociation(
          this.ops["ReplaceIamInstanceProfileAssociation"].apply(partialParams)
        );
    }

    invokeReplaceNetworkAclAssociation(partialParams: ToOptional<{
      [K in keyof ReplaceNetworkAclAssociationRequest & keyof Omit<ReplaceNetworkAclAssociationRequest, "AssociationId">]: (ReplaceNetworkAclAssociationRequest)[K]
    }>): Request<ReplaceNetworkAclAssociationResult, AWSError> {
        this.boot();
        return this.client.replaceNetworkAclAssociation(
          this.ops["ReplaceNetworkAclAssociation"].apply(partialParams)
        );
    }

    invokeReplaceRouteTableAssociation(partialParams: ToOptional<{
      [K in keyof ReplaceRouteTableAssociationRequest & keyof Omit<ReplaceRouteTableAssociationRequest, "AssociationId">]: (ReplaceRouteTableAssociationRequest)[K]
    }>): Request<ReplaceRouteTableAssociationResult, AWSError> {
        this.boot();
        return this.client.replaceRouteTableAssociation(
          this.ops["ReplaceRouteTableAssociation"].apply(partialParams)
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
}