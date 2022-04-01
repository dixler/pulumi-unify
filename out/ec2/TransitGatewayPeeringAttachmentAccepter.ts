
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AcceptTransitGatewayPeeringAttachmentRequest,
    AcceptTransitGatewayVpcAttachmentRequest,
    AssociateTransitGatewayRouteTableRequest,
    CreateTransitGatewayConnectPeerRequest,
    CreateTransitGatewayMulticastDomainRequest,
    CreateTransitGatewayPeeringAttachmentRequest,
    CreateTransitGatewayRouteTableRequest,
    CreateTransitGatewayVpcAttachmentRequest,
    DeleteTransitGatewayRequest,
    DeleteTransitGatewayConnectRequest,
    DeleteTransitGatewayPeeringAttachmentRequest,
    DeleteTransitGatewayVpcAttachmentRequest,
    DisableTransitGatewayRouteTablePropagationRequest,
    DisassociateTransitGatewayRouteTableRequest,
    EnableTransitGatewayRouteTablePropagationRequest,
    GetTransitGatewayAttachmentPropagationsRequest,
    ModifyTransitGatewayRequest,
    ModifyTransitGatewayVpcAttachmentRequest,
    RejectTransitGatewayPeeringAttachmentRequest,
    RejectTransitGatewayVpcAttachmentRequest,
    AcceptTransitGatewayPeeringAttachmentResult,
    AcceptTransitGatewayVpcAttachmentResult,
    AssociateTransitGatewayRouteTableResult,
    CreateTransitGatewayConnectPeerResult,
    CreateTransitGatewayMulticastDomainResult,
    CreateTransitGatewayPeeringAttachmentResult,
    CreateTransitGatewayRouteTableResult,
    CreateTransitGatewayVpcAttachmentResult,
    DeleteTransitGatewayResult,
    DeleteTransitGatewayConnectResult,
    DeleteTransitGatewayPeeringAttachmentResult,
    DeleteTransitGatewayVpcAttachmentResult,
    DisableTransitGatewayRouteTablePropagationResult,
    DisassociateTransitGatewayRouteTableResult,
    EnableTransitGatewayRouteTablePropagationResult,
    GetTransitGatewayAttachmentPropagationsResult,
    ModifyTransitGatewayResult,
    ModifyTransitGatewayVpcAttachmentResult,
    RejectTransitGatewayPeeringAttachmentResult,
    RejectTransitGatewayVpcAttachmentResult
} from "aws-sdk/clients/ec2";
const schema = require("../apis/ec2-2016-11-15.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ec2.TransitGatewayPeeringAttachmentAccepter {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.ec2.TransitGatewayPeeringAttachmentAccepter>) {
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

    invokeAcceptTransitGatewayPeeringAttachment(partialParams: ToOptional<{
      [K in keyof AcceptTransitGatewayPeeringAttachmentRequest & keyof Omit<AcceptTransitGatewayPeeringAttachmentRequest, "TransitGatewayAttachmentId">]: (AcceptTransitGatewayPeeringAttachmentRequest)[K]
    }>): Request<AcceptTransitGatewayPeeringAttachmentResult, AWSError> {
        this.boot();
        return this.client.acceptTransitGatewayPeeringAttachment(
          this.ops["AcceptTransitGatewayPeeringAttachment"].apply(partialParams)
        );
    }

    invokeAcceptTransitGatewayVpcAttachment(partialParams: ToOptional<{
      [K in keyof AcceptTransitGatewayVpcAttachmentRequest & keyof Omit<AcceptTransitGatewayVpcAttachmentRequest, "TransitGatewayAttachmentId">]: (AcceptTransitGatewayVpcAttachmentRequest)[K]
    }>): Request<AcceptTransitGatewayVpcAttachmentResult, AWSError> {
        this.boot();
        return this.client.acceptTransitGatewayVpcAttachment(
          this.ops["AcceptTransitGatewayVpcAttachment"].apply(partialParams)
        );
    }

    invokeAssociateTransitGatewayRouteTable(partialParams: ToOptional<{
      [K in keyof AssociateTransitGatewayRouteTableRequest & keyof Omit<AssociateTransitGatewayRouteTableRequest, "TransitGatewayAttachmentId">]: (AssociateTransitGatewayRouteTableRequest)[K]
    }>): Request<AssociateTransitGatewayRouteTableResult, AWSError> {
        this.boot();
        return this.client.associateTransitGatewayRouteTable(
          this.ops["AssociateTransitGatewayRouteTable"].apply(partialParams)
        );
    }

    invokeCreateTransitGatewayConnectPeer(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayConnectPeerRequest & keyof Omit<CreateTransitGatewayConnectPeerRequest, "TransitGatewayAttachmentId">]: (CreateTransitGatewayConnectPeerRequest)[K]
    }>): Request<CreateTransitGatewayConnectPeerResult, AWSError> {
        this.boot();
        return this.client.createTransitGatewayConnectPeer(
          this.ops["CreateTransitGatewayConnectPeer"].apply(partialParams)
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
      [K in keyof CreateTransitGatewayPeeringAttachmentRequest & keyof Omit<CreateTransitGatewayPeeringAttachmentRequest, "TransitGatewayId" | "PeerTransitGatewayId" | "PeerAccountId" | "PeerRegion">]: (CreateTransitGatewayPeeringAttachmentRequest)[K]
    }>): Request<CreateTransitGatewayPeeringAttachmentResult, AWSError> {
        this.boot();
        return this.client.createTransitGatewayPeeringAttachment(
          this.ops["CreateTransitGatewayPeeringAttachment"].apply(partialParams)
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

    invokeDeleteTransitGateway(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayRequest & keyof Omit<DeleteTransitGatewayRequest, "TransitGatewayId">]: (DeleteTransitGatewayRequest)[K]
    }>): Request<DeleteTransitGatewayResult, AWSError> {
        this.boot();
        return this.client.deleteTransitGateway(
          this.ops["DeleteTransitGateway"].apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayConnect(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayConnectRequest & keyof Omit<DeleteTransitGatewayConnectRequest, "TransitGatewayAttachmentId">]: (DeleteTransitGatewayConnectRequest)[K]
    }>): Request<DeleteTransitGatewayConnectResult, AWSError> {
        this.boot();
        return this.client.deleteTransitGatewayConnect(
          this.ops["DeleteTransitGatewayConnect"].apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayPeeringAttachment(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayPeeringAttachmentRequest & keyof Omit<DeleteTransitGatewayPeeringAttachmentRequest, "TransitGatewayAttachmentId">]: (DeleteTransitGatewayPeeringAttachmentRequest)[K]
    }>): Request<DeleteTransitGatewayPeeringAttachmentResult, AWSError> {
        this.boot();
        return this.client.deleteTransitGatewayPeeringAttachment(
          this.ops["DeleteTransitGatewayPeeringAttachment"].apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayVpcAttachment(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayVpcAttachmentRequest & keyof Omit<DeleteTransitGatewayVpcAttachmentRequest, "TransitGatewayAttachmentId">]: (DeleteTransitGatewayVpcAttachmentRequest)[K]
    }>): Request<DeleteTransitGatewayVpcAttachmentResult, AWSError> {
        this.boot();
        return this.client.deleteTransitGatewayVpcAttachment(
          this.ops["DeleteTransitGatewayVpcAttachment"].apply(partialParams)
        );
    }

    invokeDisableTransitGatewayRouteTablePropagation(partialParams: ToOptional<{
      [K in keyof DisableTransitGatewayRouteTablePropagationRequest & keyof Omit<DisableTransitGatewayRouteTablePropagationRequest, "TransitGatewayAttachmentId">]: (DisableTransitGatewayRouteTablePropagationRequest)[K]
    }>): Request<DisableTransitGatewayRouteTablePropagationResult, AWSError> {
        this.boot();
        return this.client.disableTransitGatewayRouteTablePropagation(
          this.ops["DisableTransitGatewayRouteTablePropagation"].apply(partialParams)
        );
    }

    invokeDisassociateTransitGatewayRouteTable(partialParams: ToOptional<{
      [K in keyof DisassociateTransitGatewayRouteTableRequest & keyof Omit<DisassociateTransitGatewayRouteTableRequest, "TransitGatewayAttachmentId">]: (DisassociateTransitGatewayRouteTableRequest)[K]
    }>): Request<DisassociateTransitGatewayRouteTableResult, AWSError> {
        this.boot();
        return this.client.disassociateTransitGatewayRouteTable(
          this.ops["DisassociateTransitGatewayRouteTable"].apply(partialParams)
        );
    }

    invokeEnableTransitGatewayRouteTablePropagation(partialParams: ToOptional<{
      [K in keyof EnableTransitGatewayRouteTablePropagationRequest & keyof Omit<EnableTransitGatewayRouteTablePropagationRequest, "TransitGatewayAttachmentId">]: (EnableTransitGatewayRouteTablePropagationRequest)[K]
    }>): Request<EnableTransitGatewayRouteTablePropagationResult, AWSError> {
        this.boot();
        return this.client.enableTransitGatewayRouteTablePropagation(
          this.ops["EnableTransitGatewayRouteTablePropagation"].apply(partialParams)
        );
    }

    invokeGetTransitGatewayAttachmentPropagations(partialParams: ToOptional<{
      [K in keyof GetTransitGatewayAttachmentPropagationsRequest & keyof Omit<GetTransitGatewayAttachmentPropagationsRequest, "TransitGatewayAttachmentId">]: (GetTransitGatewayAttachmentPropagationsRequest)[K]
    }>): Request<GetTransitGatewayAttachmentPropagationsResult, AWSError> {
        this.boot();
        return this.client.getTransitGatewayAttachmentPropagations(
          this.ops["GetTransitGatewayAttachmentPropagations"].apply(partialParams)
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

    invokeModifyTransitGatewayVpcAttachment(partialParams: ToOptional<{
      [K in keyof ModifyTransitGatewayVpcAttachmentRequest & keyof Omit<ModifyTransitGatewayVpcAttachmentRequest, "TransitGatewayAttachmentId">]: (ModifyTransitGatewayVpcAttachmentRequest)[K]
    }>): Request<ModifyTransitGatewayVpcAttachmentResult, AWSError> {
        this.boot();
        return this.client.modifyTransitGatewayVpcAttachment(
          this.ops["ModifyTransitGatewayVpcAttachment"].apply(partialParams)
        );
    }

    invokeRejectTransitGatewayPeeringAttachment(partialParams: ToOptional<{
      [K in keyof RejectTransitGatewayPeeringAttachmentRequest & keyof Omit<RejectTransitGatewayPeeringAttachmentRequest, "TransitGatewayAttachmentId">]: (RejectTransitGatewayPeeringAttachmentRequest)[K]
    }>): Request<RejectTransitGatewayPeeringAttachmentResult, AWSError> {
        this.boot();
        return this.client.rejectTransitGatewayPeeringAttachment(
          this.ops["RejectTransitGatewayPeeringAttachment"].apply(partialParams)
        );
    }

    invokeRejectTransitGatewayVpcAttachment(partialParams: ToOptional<{
      [K in keyof RejectTransitGatewayVpcAttachmentRequest & keyof Omit<RejectTransitGatewayVpcAttachmentRequest, "TransitGatewayAttachmentId">]: (RejectTransitGatewayVpcAttachmentRequest)[K]
    }>): Request<RejectTransitGatewayVpcAttachmentResult, AWSError> {
        this.boot();
        return this.client.rejectTransitGatewayVpcAttachment(
          this.ops["RejectTransitGatewayVpcAttachment"].apply(partialParams)
        );
    }
}