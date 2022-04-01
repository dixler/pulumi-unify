
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AssignIpv6AddressesRequest,
    AssignPrivateIpAddressesRequest,
    AssociateIamInstanceProfileRequest,
    AssociateRouteTableRequest,
    AttachClassicLinkVpcRequest,
    AttachNetworkInterfaceRequest,
    AttachVolumeRequest,
    BundleInstanceRequest,
    ConfirmProductInstanceRequest,
    CreateClientVpnRouteRequest,
    CreateImageRequest,
    CreateInstanceExportTaskRequest,
    CreateLocalGatewayRouteRequest,
    CreateNetworkInterfacePermissionRequest,
    CreateReplaceRootVolumeTaskRequest,
    CreateRouteRequest,
    CreateTrafficMirrorFilterRuleRequest,
    CreateTrafficMirrorSessionRequest,
    CreateTransitGatewayMulticastDomainRequest,
    CreateTransitGatewayPeeringAttachmentRequest,
    CreateTransitGatewayRouteRequest,
    CreateTransitGatewayRouteTableRequest,
    CreateTransitGatewayVpcAttachmentRequest,
    DeleteCarrierGatewayRequest,
    DeleteClientVpnRouteRequest,
    DeleteLocalGatewayRouteRequest,
    DeleteNatGatewayRequest,
    DeleteTransitGatewayRequest,
    DeleteTransitGatewayRouteRequest,
    DeleteVpcPeeringConnectionRequest,
    DescribeInstanceAttributeRequest,
    DescribeNetworkInterfaceAttributeRequest,
    DetachClassicLinkVpcRequest,
    GetConsoleOutputRequest,
    GetConsoleScreenshotRequest,
    GetLaunchTemplateDataRequest,
    GetPasswordDataRequest,
    ModifyInstanceCapacityReservationAttributesRequest,
    ModifyInstanceEventStartTimeRequest,
    ModifyInstanceMetadataOptionsRequest,
    ModifyInstancePlacementRequest,
    ModifyTransitGatewayRequest,
    ModifyVpcEndpointRequest,
    ModifyVpcPeeringConnectionOptionsRequest,
    RejectVpcPeeringConnectionRequest,
    ReplaceRouteTableAssociationRequest,
    ReplaceTransitGatewayRouteRequest,
    UnassignIpv6AddressesRequest,
    AssignIpv6AddressesResult,
    AssignPrivateIpAddressesResult,
    AssociateIamInstanceProfileResult,
    AssociateRouteTableResult,
    AttachClassicLinkVpcResult,
    AttachNetworkInterfaceResult,
    VolumeAttachment,
    BundleInstanceResult,
    ConfirmProductInstanceResult,
    CreateClientVpnRouteResult,
    CreateImageResult,
    CreateInstanceExportTaskResult,
    CreateLocalGatewayRouteResult,
    CreateNetworkInterfacePermissionResult,
    CreateReplaceRootVolumeTaskResult,
    CreateRouteResult,
    CreateTrafficMirrorFilterRuleResult,
    CreateTrafficMirrorSessionResult,
    CreateTransitGatewayMulticastDomainResult,
    CreateTransitGatewayPeeringAttachmentResult,
    CreateTransitGatewayRouteResult,
    CreateTransitGatewayRouteTableResult,
    CreateTransitGatewayVpcAttachmentResult,
    DeleteCarrierGatewayResult,
    DeleteClientVpnRouteResult,
    DeleteLocalGatewayRouteResult,
    DeleteNatGatewayResult,
    DeleteTransitGatewayResult,
    DeleteTransitGatewayRouteResult,
    DeleteVpcPeeringConnectionResult,
    InstanceAttribute,
    DescribeNetworkInterfaceAttributeResult,
    DetachClassicLinkVpcResult,
    GetConsoleOutputResult,
    GetConsoleScreenshotResult,
    GetLaunchTemplateDataResult,
    GetPasswordDataResult,
    ModifyInstanceCapacityReservationAttributesResult,
    ModifyInstanceEventStartTimeResult,
    ModifyInstanceMetadataOptionsResult,
    ModifyInstancePlacementResult,
    ModifyTransitGatewayResult,
    ModifyVpcEndpointResult,
    ModifyVpcPeeringConnectionOptionsResult,
    RejectVpcPeeringConnectionResult,
    ReplaceRouteTableAssociationResult,
    ReplaceTransitGatewayRouteResult,
    UnassignIpv6AddressesResult
} from "aws-sdk/clients/ec2";
const schema = require("../apis/ec2-2016-11-15.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ec2.Route {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.ec2.Route>) {
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

    invokeAssociateIamInstanceProfile(partialParams: ToOptional<{
      [K in keyof AssociateIamInstanceProfileRequest & keyof Omit<AssociateIamInstanceProfileRequest, "InstanceId">]: (AssociateIamInstanceProfileRequest)[K]
    }>): Request<AssociateIamInstanceProfileResult, AWSError> {
        this.boot();
        return this.client.associateIamInstanceProfile(
          this.ops["AssociateIamInstanceProfile"].apply(partialParams)
        );
    }

    invokeAssociateRouteTable(partialParams: ToOptional<{
      [K in keyof AssociateRouteTableRequest & keyof Omit<AssociateRouteTableRequest, "RouteTableId">]: (AssociateRouteTableRequest)[K]
    }>): Request<AssociateRouteTableResult, AWSError> {
        this.boot();
        return this.client.associateRouteTable(
          this.ops["AssociateRouteTable"].apply(partialParams)
        );
    }

    invokeAttachClassicLinkVpc(partialParams: ToOptional<{
      [K in keyof AttachClassicLinkVpcRequest & keyof Omit<AttachClassicLinkVpcRequest, "InstanceId">]: (AttachClassicLinkVpcRequest)[K]
    }>): Request<AttachClassicLinkVpcResult, AWSError> {
        this.boot();
        return this.client.attachClassicLinkVpc(
          this.ops["AttachClassicLinkVpc"].apply(partialParams)
        );
    }

    invokeAttachNetworkInterface(partialParams: ToOptional<{
      [K in keyof AttachNetworkInterfaceRequest & keyof Omit<AttachNetworkInterfaceRequest, "InstanceId" | "NetworkInterfaceId">]: (AttachNetworkInterfaceRequest)[K]
    }>): Request<AttachNetworkInterfaceResult, AWSError> {
        this.boot();
        return this.client.attachNetworkInterface(
          this.ops["AttachNetworkInterface"].apply(partialParams)
        );
    }

    invokeAttachVolume(partialParams: ToOptional<{
      [K in keyof AttachVolumeRequest & keyof Omit<AttachVolumeRequest, "InstanceId">]: (AttachVolumeRequest)[K]
    }>): Request<VolumeAttachment, AWSError> {
        this.boot();
        return this.client.attachVolume(
          this.ops["AttachVolume"].apply(partialParams)
        );
    }

    invokeBundleInstance(partialParams: ToOptional<{
      [K in keyof BundleInstanceRequest & keyof Omit<BundleInstanceRequest, "InstanceId">]: (BundleInstanceRequest)[K]
    }>): Request<BundleInstanceResult, AWSError> {
        this.boot();
        return this.client.bundleInstance(
          this.ops["BundleInstance"].apply(partialParams)
        );
    }

    invokeConfirmProductInstance(partialParams: ToOptional<{
      [K in keyof ConfirmProductInstanceRequest & keyof Omit<ConfirmProductInstanceRequest, "InstanceId">]: (ConfirmProductInstanceRequest)[K]
    }>): Request<ConfirmProductInstanceResult, AWSError> {
        this.boot();
        return this.client.confirmProductInstance(
          this.ops["ConfirmProductInstance"].apply(partialParams)
        );
    }

    invokeCreateClientVpnRoute(partialParams: ToOptional<{
      [K in keyof CreateClientVpnRouteRequest & keyof Omit<CreateClientVpnRouteRequest, "DestinationCidrBlock">]: (CreateClientVpnRouteRequest)[K]
    }>): Request<CreateClientVpnRouteResult, AWSError> {
        this.boot();
        return this.client.createClientVpnRoute(
          this.ops["CreateClientVpnRoute"].apply(partialParams)
        );
    }

    invokeCreateImage(partialParams: ToOptional<{
      [K in keyof CreateImageRequest & keyof Omit<CreateImageRequest, "InstanceId">]: (CreateImageRequest)[K]
    }>): Request<CreateImageResult, AWSError> {
        this.boot();
        return this.client.createImage(
          this.ops["CreateImage"].apply(partialParams)
        );
    }

    invokeCreateInstanceExportTask(partialParams: ToOptional<{
      [K in keyof CreateInstanceExportTaskRequest & keyof Omit<CreateInstanceExportTaskRequest, "InstanceId">]: (CreateInstanceExportTaskRequest)[K]
    }>): Request<CreateInstanceExportTaskResult, AWSError> {
        this.boot();
        return this.client.createInstanceExportTask(
          this.ops["CreateInstanceExportTask"].apply(partialParams)
        );
    }

    invokeCreateLocalGatewayRoute(partialParams: ToOptional<{
      [K in keyof CreateLocalGatewayRouteRequest & keyof Omit<CreateLocalGatewayRouteRequest, "DestinationCidrBlock">]: (CreateLocalGatewayRouteRequest)[K]
    }>): Request<CreateLocalGatewayRouteResult, AWSError> {
        this.boot();
        return this.client.createLocalGatewayRoute(
          this.ops["CreateLocalGatewayRoute"].apply(partialParams)
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

    invokeCreateReplaceRootVolumeTask(partialParams: ToOptional<{
      [K in keyof CreateReplaceRootVolumeTaskRequest & keyof Omit<CreateReplaceRootVolumeTaskRequest, "InstanceId">]: (CreateReplaceRootVolumeTaskRequest)[K]
    }>): Request<CreateReplaceRootVolumeTaskResult, AWSError> {
        this.boot();
        return this.client.createReplaceRootVolumeTask(
          this.ops["CreateReplaceRootVolumeTask"].apply(partialParams)
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

    invokeCreateTrafficMirrorFilterRule(partialParams: ToOptional<{
      [K in keyof CreateTrafficMirrorFilterRuleRequest & keyof Omit<CreateTrafficMirrorFilterRuleRequest, "DestinationCidrBlock">]: (CreateTrafficMirrorFilterRuleRequest)[K]
    }>): Request<CreateTrafficMirrorFilterRuleResult, AWSError> {
        this.boot();
        return this.client.createTrafficMirrorFilterRule(
          this.ops["CreateTrafficMirrorFilterRule"].apply(partialParams)
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

    invokeCreateTransitGatewayMulticastDomain(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayMulticastDomainRequest & keyof Omit<CreateTransitGatewayMulticastDomainRequest, "TransitGatewayId">]: (CreateTransitGatewayMulticastDomainRequest)[K]
    }>): Request<CreateTransitGatewayMulticastDomainResult, AWSError> {
        this.boot();
        return this.client.createTransitGatewayMulticastDomain(
          this.ops["CreateTransitGatewayMulticastDomain"].apply(partialParams)
        );
    }

    invokeCreateTransitGatewayPeeringAttachment(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayPeeringAttachmentRequest & keyof Omit<CreateTransitGatewayPeeringAttachmentRequest, "TransitGatewayId">]: (CreateTransitGatewayPeeringAttachmentRequest)[K]
    }>): Request<CreateTransitGatewayPeeringAttachmentResult, AWSError> {
        this.boot();
        return this.client.createTransitGatewayPeeringAttachment(
          this.ops["CreateTransitGatewayPeeringAttachment"].apply(partialParams)
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

    invokeCreateTransitGatewayRouteTable(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayRouteTableRequest & keyof Omit<CreateTransitGatewayRouteTableRequest, "TransitGatewayId">]: (CreateTransitGatewayRouteTableRequest)[K]
    }>): Request<CreateTransitGatewayRouteTableResult, AWSError> {
        this.boot();
        return this.client.createTransitGatewayRouteTable(
          this.ops["CreateTransitGatewayRouteTable"].apply(partialParams)
        );
    }

    invokeCreateTransitGatewayVpcAttachment(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayVpcAttachmentRequest & keyof Omit<CreateTransitGatewayVpcAttachmentRequest, "TransitGatewayId">]: (CreateTransitGatewayVpcAttachmentRequest)[K]
    }>): Request<CreateTransitGatewayVpcAttachmentResult, AWSError> {
        this.boot();
        return this.client.createTransitGatewayVpcAttachment(
          this.ops["CreateTransitGatewayVpcAttachment"].apply(partialParams)
        );
    }

    invokeDeleteCarrierGateway(partialParams: ToOptional<{
      [K in keyof DeleteCarrierGatewayRequest & keyof Omit<DeleteCarrierGatewayRequest, "CarrierGatewayId">]: (DeleteCarrierGatewayRequest)[K]
    }>): Request<DeleteCarrierGatewayResult, AWSError> {
        this.boot();
        return this.client.deleteCarrierGateway(
          this.ops["DeleteCarrierGateway"].apply(partialParams)
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
      [K in keyof DeleteLocalGatewayRouteRequest & keyof Omit<DeleteLocalGatewayRouteRequest, "DestinationCidrBlock">]: (DeleteLocalGatewayRouteRequest)[K]
    }>): Request<DeleteLocalGatewayRouteResult, AWSError> {
        this.boot();
        return this.client.deleteLocalGatewayRoute(
          this.ops["DeleteLocalGatewayRoute"].apply(partialParams)
        );
    }

    invokeDeleteNatGateway(partialParams: ToOptional<{
      [K in keyof DeleteNatGatewayRequest & keyof Omit<DeleteNatGatewayRequest, "NatGatewayId">]: (DeleteNatGatewayRequest)[K]
    }>): Request<DeleteNatGatewayResult, AWSError> {
        this.boot();
        return this.client.deleteNatGateway(
          this.ops["DeleteNatGateway"].apply(partialParams)
        );
    }

    invokeDeleteTransitGateway(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayRequest & keyof Omit<DeleteTransitGatewayRequest, "TransitGatewayId">]: (DeleteTransitGatewayRequest)[K]
    }>): Request<DeleteTransitGatewayResult, AWSError> {
        this.boot();
        return this.client.deleteTransitGateway(
          this.ops["DeleteTransitGateway"].apply(partialParams)
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

    invokeDeleteVpcPeeringConnection(partialParams: ToOptional<{
      [K in keyof DeleteVpcPeeringConnectionRequest & keyof Omit<DeleteVpcPeeringConnectionRequest, "VpcPeeringConnectionId">]: (DeleteVpcPeeringConnectionRequest)[K]
    }>): Request<DeleteVpcPeeringConnectionResult, AWSError> {
        this.boot();
        return this.client.deleteVpcPeeringConnection(
          this.ops["DeleteVpcPeeringConnection"].apply(partialParams)
        );
    }

    invokeDescribeInstanceAttribute(partialParams: ToOptional<{
      [K in keyof DescribeInstanceAttributeRequest & keyof Omit<DescribeInstanceAttributeRequest, "InstanceId">]: (DescribeInstanceAttributeRequest)[K]
    }>): Request<InstanceAttribute, AWSError> {
        this.boot();
        return this.client.describeInstanceAttribute(
          this.ops["DescribeInstanceAttribute"].apply(partialParams)
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

    invokeDetachClassicLinkVpc(partialParams: ToOptional<{
      [K in keyof DetachClassicLinkVpcRequest & keyof Omit<DetachClassicLinkVpcRequest, "InstanceId">]: (DetachClassicLinkVpcRequest)[K]
    }>): Request<DetachClassicLinkVpcResult, AWSError> {
        this.boot();
        return this.client.detachClassicLinkVpc(
          this.ops["DetachClassicLinkVpc"].apply(partialParams)
        );
    }

    invokeGetConsoleOutput(partialParams: ToOptional<{
      [K in keyof GetConsoleOutputRequest & keyof Omit<GetConsoleOutputRequest, "InstanceId">]: (GetConsoleOutputRequest)[K]
    }>): Request<GetConsoleOutputResult, AWSError> {
        this.boot();
        return this.client.getConsoleOutput(
          this.ops["GetConsoleOutput"].apply(partialParams)
        );
    }

    invokeGetConsoleScreenshot(partialParams: ToOptional<{
      [K in keyof GetConsoleScreenshotRequest & keyof Omit<GetConsoleScreenshotRequest, "InstanceId">]: (GetConsoleScreenshotRequest)[K]
    }>): Request<GetConsoleScreenshotResult, AWSError> {
        this.boot();
        return this.client.getConsoleScreenshot(
          this.ops["GetConsoleScreenshot"].apply(partialParams)
        );
    }

    invokeGetLaunchTemplateData(partialParams: ToOptional<{
      [K in keyof GetLaunchTemplateDataRequest & keyof Omit<GetLaunchTemplateDataRequest, "InstanceId">]: (GetLaunchTemplateDataRequest)[K]
    }>): Request<GetLaunchTemplateDataResult, AWSError> {
        this.boot();
        return this.client.getLaunchTemplateData(
          this.ops["GetLaunchTemplateData"].apply(partialParams)
        );
    }

    invokeGetPasswordData(partialParams: ToOptional<{
      [K in keyof GetPasswordDataRequest & keyof Omit<GetPasswordDataRequest, "InstanceId">]: (GetPasswordDataRequest)[K]
    }>): Request<GetPasswordDataResult, AWSError> {
        this.boot();
        return this.client.getPasswordData(
          this.ops["GetPasswordData"].apply(partialParams)
        );
    }

    invokeModifyInstanceCapacityReservationAttributes(partialParams: ToOptional<{
      [K in keyof ModifyInstanceCapacityReservationAttributesRequest & keyof Omit<ModifyInstanceCapacityReservationAttributesRequest, "InstanceId">]: (ModifyInstanceCapacityReservationAttributesRequest)[K]
    }>): Request<ModifyInstanceCapacityReservationAttributesResult, AWSError> {
        this.boot();
        return this.client.modifyInstanceCapacityReservationAttributes(
          this.ops["ModifyInstanceCapacityReservationAttributes"].apply(partialParams)
        );
    }

    invokeModifyInstanceEventStartTime(partialParams: ToOptional<{
      [K in keyof ModifyInstanceEventStartTimeRequest & keyof Omit<ModifyInstanceEventStartTimeRequest, "InstanceId">]: (ModifyInstanceEventStartTimeRequest)[K]
    }>): Request<ModifyInstanceEventStartTimeResult, AWSError> {
        this.boot();
        return this.client.modifyInstanceEventStartTime(
          this.ops["ModifyInstanceEventStartTime"].apply(partialParams)
        );
    }

    invokeModifyInstanceMetadataOptions(partialParams: ToOptional<{
      [K in keyof ModifyInstanceMetadataOptionsRequest & keyof Omit<ModifyInstanceMetadataOptionsRequest, "InstanceId">]: (ModifyInstanceMetadataOptionsRequest)[K]
    }>): Request<ModifyInstanceMetadataOptionsResult, AWSError> {
        this.boot();
        return this.client.modifyInstanceMetadataOptions(
          this.ops["ModifyInstanceMetadataOptions"].apply(partialParams)
        );
    }

    invokeModifyInstancePlacement(partialParams: ToOptional<{
      [K in keyof ModifyInstancePlacementRequest & keyof Omit<ModifyInstancePlacementRequest, "InstanceId">]: (ModifyInstancePlacementRequest)[K]
    }>): Request<ModifyInstancePlacementResult, AWSError> {
        this.boot();
        return this.client.modifyInstancePlacement(
          this.ops["ModifyInstancePlacement"].apply(partialParams)
        );
    }

    invokeModifyTransitGateway(partialParams: ToOptional<{
      [K in keyof ModifyTransitGatewayRequest & keyof Omit<ModifyTransitGatewayRequest, "TransitGatewayId">]: (ModifyTransitGatewayRequest)[K]
    }>): Request<ModifyTransitGatewayResult, AWSError> {
        this.boot();
        return this.client.modifyTransitGateway(
          this.ops["ModifyTransitGateway"].apply(partialParams)
        );
    }

    invokeModifyVpcEndpoint(partialParams: ToOptional<{
      [K in keyof ModifyVpcEndpointRequest & keyof Omit<ModifyVpcEndpointRequest, "VpcEndpointId">]: (ModifyVpcEndpointRequest)[K]
    }>): Request<ModifyVpcEndpointResult, AWSError> {
        this.boot();
        return this.client.modifyVpcEndpoint(
          this.ops["ModifyVpcEndpoint"].apply(partialParams)
        );
    }

    invokeModifyVpcPeeringConnectionOptions(partialParams: ToOptional<{
      [K in keyof ModifyVpcPeeringConnectionOptionsRequest & keyof Omit<ModifyVpcPeeringConnectionOptionsRequest, "VpcPeeringConnectionId">]: (ModifyVpcPeeringConnectionOptionsRequest)[K]
    }>): Request<ModifyVpcPeeringConnectionOptionsResult, AWSError> {
        this.boot();
        return this.client.modifyVpcPeeringConnectionOptions(
          this.ops["ModifyVpcPeeringConnectionOptions"].apply(partialParams)
        );
    }

    invokeRejectVpcPeeringConnection(partialParams: ToOptional<{
      [K in keyof RejectVpcPeeringConnectionRequest & keyof Omit<RejectVpcPeeringConnectionRequest, "VpcPeeringConnectionId">]: (RejectVpcPeeringConnectionRequest)[K]
    }>): Request<RejectVpcPeeringConnectionResult, AWSError> {
        this.boot();
        return this.client.rejectVpcPeeringConnection(
          this.ops["RejectVpcPeeringConnection"].apply(partialParams)
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

    invokeReplaceTransitGatewayRoute(partialParams: ToOptional<{
      [K in keyof ReplaceTransitGatewayRouteRequest & keyof Omit<ReplaceTransitGatewayRouteRequest, "DestinationCidrBlock">]: (ReplaceTransitGatewayRouteRequest)[K]
    }>): Request<ReplaceTransitGatewayRouteResult, AWSError> {
        this.boot();
        return this.client.replaceTransitGatewayRoute(
          this.ops["ReplaceTransitGatewayRoute"].apply(partialParams)
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