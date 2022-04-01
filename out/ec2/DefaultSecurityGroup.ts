
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    ApplySecurityGroupsToClientVpnTargetNetworkRequest,
    AssociateVpcCidrBlockRequest,
    AttachClassicLinkVpcRequest,
    AttachVpnGatewayRequest,
    CopyImageRequest,
    CreateCarrierGatewayRequest,
    CreateEgressOnlyInternetGatewayRequest,
    CreateImageRequest,
    CreateLocalGatewayRouteTableVpcAssociationRequest,
    CreateNetworkAclRequest,
    CreateRouteTableRequest,
    CreateSecurityGroupRequest,
    CreateSubnetRequest,
    CreateTransitGatewayVpcAttachmentRequest,
    CreateVpcEndpointRequest,
    DescribeStaleSecurityGroupsRequest,
    DescribeVpcAttributeRequest,
    DetachClassicLinkVpcRequest,
    DisableVpcClassicLinkRequest,
    EnableVpcClassicLinkRequest,
    ModifyVpcTenancyRequest,
    RegisterImageRequest,
    ApplySecurityGroupsToClientVpnTargetNetworkResult,
    AssociateVpcCidrBlockResult,
    AttachClassicLinkVpcResult,
    AttachVpnGatewayResult,
    CopyImageResult,
    CreateCarrierGatewayResult,
    CreateEgressOnlyInternetGatewayResult,
    CreateImageResult,
    CreateLocalGatewayRouteTableVpcAssociationResult,
    CreateNetworkAclResult,
    CreateRouteTableResult,
    CreateSecurityGroupResult,
    CreateSubnetResult,
    CreateTransitGatewayVpcAttachmentResult,
    CreateVpcEndpointResult,
    DescribeStaleSecurityGroupsResult,
    DescribeVpcAttributeResult,
    DetachClassicLinkVpcResult,
    DisableVpcClassicLinkResult,
    EnableVpcClassicLinkResult,
    ModifyVpcTenancyResult,
    RegisterImageResult
} from "aws-sdk/clients/ec2";
const schema = require("../apis/ec2-2016-11-15.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ec2.DefaultSecurityGroup {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.ec2.DefaultSecurityGroup>) {
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

    invokeApplySecurityGroupsToClientVpnTargetNetwork(partialParams: ToOptional<{
      [K in keyof ApplySecurityGroupsToClientVpnTargetNetworkRequest & keyof Omit<ApplySecurityGroupsToClientVpnTargetNetworkRequest, "VpcId">]: (ApplySecurityGroupsToClientVpnTargetNetworkRequest)[K]
    }>): Request<ApplySecurityGroupsToClientVpnTargetNetworkResult, AWSError> {
        this.boot();
        return this.client.applySecurityGroupsToClientVpnTargetNetwork(
          this.ops["ApplySecurityGroupsToClientVpnTargetNetwork"].apply(partialParams)
        );
    }

    invokeAssociateVpcCidrBlock(partialParams: ToOptional<{
      [K in keyof AssociateVpcCidrBlockRequest & keyof Omit<AssociateVpcCidrBlockRequest, "VpcId">]: (AssociateVpcCidrBlockRequest)[K]
    }>): Request<AssociateVpcCidrBlockResult, AWSError> {
        this.boot();
        return this.client.associateVpcCidrBlock(
          this.ops["AssociateVpcCidrBlock"].apply(partialParams)
        );
    }

    invokeAttachClassicLinkVpc(partialParams: ToOptional<{
      [K in keyof AttachClassicLinkVpcRequest & keyof Omit<AttachClassicLinkVpcRequest, "VpcId">]: (AttachClassicLinkVpcRequest)[K]
    }>): Request<AttachClassicLinkVpcResult, AWSError> {
        this.boot();
        return this.client.attachClassicLinkVpc(
          this.ops["AttachClassicLinkVpc"].apply(partialParams)
        );
    }

    invokeAttachVpnGateway(partialParams: ToOptional<{
      [K in keyof AttachVpnGatewayRequest & keyof Omit<AttachVpnGatewayRequest, "VpcId">]: (AttachVpnGatewayRequest)[K]
    }>): Request<AttachVpnGatewayResult, AWSError> {
        this.boot();
        return this.client.attachVpnGateway(
          this.ops["AttachVpnGateway"].apply(partialParams)
        );
    }

    invokeCopyImage(partialParams: ToOptional<{
      [K in keyof CopyImageRequest & keyof Omit<CopyImageRequest, "Name">]: (CopyImageRequest)[K]
    }>): Request<CopyImageResult, AWSError> {
        this.boot();
        return this.client.copyImage(
          this.ops["CopyImage"].apply(partialParams)
        );
    }

    invokeCreateCarrierGateway(partialParams: ToOptional<{
      [K in keyof CreateCarrierGatewayRequest & keyof Omit<CreateCarrierGatewayRequest, "VpcId">]: (CreateCarrierGatewayRequest)[K]
    }>): Request<CreateCarrierGatewayResult, AWSError> {
        this.boot();
        return this.client.createCarrierGateway(
          this.ops["CreateCarrierGateway"].apply(partialParams)
        );
    }

    invokeCreateEgressOnlyInternetGateway(partialParams: ToOptional<{
      [K in keyof CreateEgressOnlyInternetGatewayRequest & keyof Omit<CreateEgressOnlyInternetGatewayRequest, "VpcId">]: (CreateEgressOnlyInternetGatewayRequest)[K]
    }>): Request<CreateEgressOnlyInternetGatewayResult, AWSError> {
        this.boot();
        return this.client.createEgressOnlyInternetGateway(
          this.ops["CreateEgressOnlyInternetGateway"].apply(partialParams)
        );
    }

    invokeCreateImage(partialParams: ToOptional<{
      [K in keyof CreateImageRequest & keyof Omit<CreateImageRequest, "Name">]: (CreateImageRequest)[K]
    }>): Request<CreateImageResult, AWSError> {
        this.boot();
        return this.client.createImage(
          this.ops["CreateImage"].apply(partialParams)
        );
    }

    invokeCreateLocalGatewayRouteTableVpcAssociation(partialParams: ToOptional<{
      [K in keyof CreateLocalGatewayRouteTableVpcAssociationRequest & keyof Omit<CreateLocalGatewayRouteTableVpcAssociationRequest, "VpcId">]: (CreateLocalGatewayRouteTableVpcAssociationRequest)[K]
    }>): Request<CreateLocalGatewayRouteTableVpcAssociationResult, AWSError> {
        this.boot();
        return this.client.createLocalGatewayRouteTableVpcAssociation(
          this.ops["CreateLocalGatewayRouteTableVpcAssociation"].apply(partialParams)
        );
    }

    invokeCreateNetworkAcl(partialParams: ToOptional<{
      [K in keyof CreateNetworkAclRequest & keyof Omit<CreateNetworkAclRequest, "VpcId">]: (CreateNetworkAclRequest)[K]
    }>): Request<CreateNetworkAclResult, AWSError> {
        this.boot();
        return this.client.createNetworkAcl(
          this.ops["CreateNetworkAcl"].apply(partialParams)
        );
    }

    invokeCreateRouteTable(partialParams: ToOptional<{
      [K in keyof CreateRouteTableRequest & keyof Omit<CreateRouteTableRequest, "VpcId">]: (CreateRouteTableRequest)[K]
    }>): Request<CreateRouteTableResult, AWSError> {
        this.boot();
        return this.client.createRouteTable(
          this.ops["CreateRouteTable"].apply(partialParams)
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

    invokeCreateSubnet(partialParams: ToOptional<{
      [K in keyof CreateSubnetRequest & keyof Omit<CreateSubnetRequest, "VpcId">]: (CreateSubnetRequest)[K]
    }>): Request<CreateSubnetResult, AWSError> {
        this.boot();
        return this.client.createSubnet(
          this.ops["CreateSubnet"].apply(partialParams)
        );
    }

    invokeCreateTransitGatewayVpcAttachment(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayVpcAttachmentRequest & keyof Omit<CreateTransitGatewayVpcAttachmentRequest, "VpcId">]: (CreateTransitGatewayVpcAttachmentRequest)[K]
    }>): Request<CreateTransitGatewayVpcAttachmentResult, AWSError> {
        this.boot();
        return this.client.createTransitGatewayVpcAttachment(
          this.ops["CreateTransitGatewayVpcAttachment"].apply(partialParams)
        );
    }

    invokeCreateVpcEndpoint(partialParams: ToOptional<{
      [K in keyof CreateVpcEndpointRequest & keyof Omit<CreateVpcEndpointRequest, "VpcId">]: (CreateVpcEndpointRequest)[K]
    }>): Request<CreateVpcEndpointResult, AWSError> {
        this.boot();
        return this.client.createVpcEndpoint(
          this.ops["CreateVpcEndpoint"].apply(partialParams)
        );
    }

    invokeDescribeStaleSecurityGroups(partialParams: ToOptional<{
      [K in keyof DescribeStaleSecurityGroupsRequest & keyof Omit<DescribeStaleSecurityGroupsRequest, "VpcId">]: (DescribeStaleSecurityGroupsRequest)[K]
    }>): Request<DescribeStaleSecurityGroupsResult, AWSError> {
        this.boot();
        return this.client.describeStaleSecurityGroups(
          this.ops["DescribeStaleSecurityGroups"].apply(partialParams)
        );
    }

    invokeDescribeVpcAttribute(partialParams: ToOptional<{
      [K in keyof DescribeVpcAttributeRequest & keyof Omit<DescribeVpcAttributeRequest, "VpcId">]: (DescribeVpcAttributeRequest)[K]
    }>): Request<DescribeVpcAttributeResult, AWSError> {
        this.boot();
        return this.client.describeVpcAttribute(
          this.ops["DescribeVpcAttribute"].apply(partialParams)
        );
    }

    invokeDetachClassicLinkVpc(partialParams: ToOptional<{
      [K in keyof DetachClassicLinkVpcRequest & keyof Omit<DetachClassicLinkVpcRequest, "VpcId">]: (DetachClassicLinkVpcRequest)[K]
    }>): Request<DetachClassicLinkVpcResult, AWSError> {
        this.boot();
        return this.client.detachClassicLinkVpc(
          this.ops["DetachClassicLinkVpc"].apply(partialParams)
        );
    }

    invokeDisableVpcClassicLink(partialParams: ToOptional<{
      [K in keyof DisableVpcClassicLinkRequest & keyof Omit<DisableVpcClassicLinkRequest, "VpcId">]: (DisableVpcClassicLinkRequest)[K]
    }>): Request<DisableVpcClassicLinkResult, AWSError> {
        this.boot();
        return this.client.disableVpcClassicLink(
          this.ops["DisableVpcClassicLink"].apply(partialParams)
        );
    }

    invokeEnableVpcClassicLink(partialParams: ToOptional<{
      [K in keyof EnableVpcClassicLinkRequest & keyof Omit<EnableVpcClassicLinkRequest, "VpcId">]: (EnableVpcClassicLinkRequest)[K]
    }>): Request<EnableVpcClassicLinkResult, AWSError> {
        this.boot();
        return this.client.enableVpcClassicLink(
          this.ops["EnableVpcClassicLink"].apply(partialParams)
        );
    }

    invokeModifyVpcTenancy(partialParams: ToOptional<{
      [K in keyof ModifyVpcTenancyRequest & keyof Omit<ModifyVpcTenancyRequest, "VpcId">]: (ModifyVpcTenancyRequest)[K]
    }>): Request<ModifyVpcTenancyResult, AWSError> {
        this.boot();
        return this.client.modifyVpcTenancy(
          this.ops["ModifyVpcTenancy"].apply(partialParams)
        );
    }

    invokeRegisterImage(partialParams: ToOptional<{
      [K in keyof RegisterImageRequest & keyof Omit<RegisterImageRequest, "Name">]: (RegisterImageRequest)[K]
    }>): Request<RegisterImageResult, AWSError> {
        this.boot();
        return this.client.registerImage(
          this.ops["RegisterImage"].apply(partialParams)
        );
    }
}