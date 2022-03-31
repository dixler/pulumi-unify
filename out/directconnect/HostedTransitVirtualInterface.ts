
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AcceptDirectConnectGatewayAssociationProposalRequest,
    AllocateConnectionOnInterconnectRequest,
    AllocateHostedConnectionRequest,
    AllocatePrivateVirtualInterfaceRequest,
    AllocatePublicVirtualInterfaceRequest,
    AllocateTransitVirtualInterfaceRequest,
    AssociateConnectionWithLagRequest,
    AssociateHostedConnectionRequest,
    AssociateMacSecKeyRequest,
    AssociateVirtualInterfaceRequest,
    ConfirmConnectionRequest,
    ConfirmPrivateVirtualInterfaceRequest,
    ConfirmPublicVirtualInterfaceRequest,
    ConfirmTransitVirtualInterfaceRequest,
    CreateConnectionRequest,
    CreateDirectConnectGatewayRequest,
    CreateDirectConnectGatewayAssociationRequest,
    CreateDirectConnectGatewayAssociationProposalRequest,
    CreateInterconnectRequest,
    CreateLagRequest,
    CreatePrivateVirtualInterfaceRequest,
    CreatePublicVirtualInterfaceRequest,
    CreateTransitVirtualInterfaceRequest,
    DeleteConnectionRequest,
    DeleteDirectConnectGatewayRequest,
    DeleteDirectConnectGatewayAssociationProposalRequest,
    DeleteInterconnectRequest,
    DeleteLagRequest,
    DeleteVirtualInterfaceRequest,
    DescribeConnectionLoaRequest,
    DescribeConnectionsOnInterconnectRequest,
    DescribeHostedConnectionsRequest,
    DescribeInterconnectLoaRequest,
    DescribeLoaRequest,
    DescribeRouterConfigurationRequest,
    DescribeTagsRequest,
    DisassociateConnectionFromLagRequest,
    DisassociateMacSecKeyRequest,
    StartBgpFailoverTestRequest,
    StopBgpFailoverTestRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateConnectionRequest,
    UpdateDirectConnectGatewayRequest,
    UpdateLagRequest,
    UpdateVirtualInterfaceAttributesRequest,
    AcceptDirectConnectGatewayAssociationProposalResult,
    Connection,
    VirtualInterface,
    AllocateTransitVirtualInterfaceResult,
    AssociateMacSecKeyResponse,
    ConfirmConnectionResponse,
    ConfirmPrivateVirtualInterfaceResponse,
    ConfirmPublicVirtualInterfaceResponse,
    ConfirmTransitVirtualInterfaceResponse,
    CreateDirectConnectGatewayResult,
    CreateDirectConnectGatewayAssociationResult,
    CreateDirectConnectGatewayAssociationProposalResult,
    Interconnect,
    Lag,
    CreateTransitVirtualInterfaceResult,
    DeleteDirectConnectGatewayResult,
    DeleteDirectConnectGatewayAssociationProposalResult,
    DeleteInterconnectResponse,
    DeleteVirtualInterfaceResponse,
    DescribeConnectionLoaResponse,
    Connections,
    DescribeInterconnectLoaResponse,
    Loa,
    DescribeRouterConfigurationResponse,
    DescribeTagsResponse,
    DisassociateMacSecKeyResponse,
    StartBgpFailoverTestResponse,
    StopBgpFailoverTestResponse,
    TagResourceResponse,
    UntagResourceResponse,
    UpdateDirectConnectGatewayResponse
} from "aws-sdk/clients/directconnect";
const schema = require("../apis/directconnect-2012-10-25.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.directconnect.HostedTransitVirtualInterface {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.directconnect.HostedTransitVirtualInterface>) {
        super(...args)
        this.client = new awssdk.DirectConnect()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
    }
    boot() {
        Object.entries(this.capitalizedParams).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value.value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
        this.ops = getResourceOperations(this.capitalizedParams as any, schema, this.client)
    }

    invokeAcceptDirectConnectGatewayAssociationProposal(partialParams: ToOptional<{
      [K in keyof AcceptDirectConnectGatewayAssociationProposalRequest & keyof AcceptDirectConnectGatewayAssociationProposalRequest & keyof AcceptDirectConnectGatewayAssociationProposalRequest & keyof AcceptDirectConnectGatewayAssociationProposalRequest & keyof AcceptDirectConnectGatewayAssociationProposalRequest & keyof AcceptDirectConnectGatewayAssociationProposalRequest & keyof AcceptDirectConnectGatewayAssociationProposalRequest & keyof AcceptDirectConnectGatewayAssociationProposalRequest & keyof AcceptDirectConnectGatewayAssociationProposalRequest & keyof AcceptDirectConnectGatewayAssociationProposalRequest]: (AcceptDirectConnectGatewayAssociationProposalRequest & AcceptDirectConnectGatewayAssociationProposalRequest & AcceptDirectConnectGatewayAssociationProposalRequest & AcceptDirectConnectGatewayAssociationProposalRequest & AcceptDirectConnectGatewayAssociationProposalRequest & AcceptDirectConnectGatewayAssociationProposalRequest & AcceptDirectConnectGatewayAssociationProposalRequest & AcceptDirectConnectGatewayAssociationProposalRequest & AcceptDirectConnectGatewayAssociationProposalRequest & AcceptDirectConnectGatewayAssociationProposalRequest)[K]
    }>): Request<AcceptDirectConnectGatewayAssociationProposalResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.acceptDirectConnectGatewayAssociationProposal(
          this.ops["AcceptDirectConnectGatewayAssociationProposal"].applicator.apply(partialParams)
        );
    }

    invokeAllocateConnectionOnInterconnect(partialParams: ToOptional<{
      [K in keyof AllocateConnectionOnInterconnectRequest & keyof AllocateConnectionOnInterconnectRequest & keyof AllocateConnectionOnInterconnectRequest & keyof AllocateConnectionOnInterconnectRequest & keyof AllocateConnectionOnInterconnectRequest & keyof AllocateConnectionOnInterconnectRequest & keyof AllocateConnectionOnInterconnectRequest & keyof AllocateConnectionOnInterconnectRequest & keyof AllocateConnectionOnInterconnectRequest & keyof AllocateConnectionOnInterconnectRequest]: (AllocateConnectionOnInterconnectRequest & AllocateConnectionOnInterconnectRequest & AllocateConnectionOnInterconnectRequest & AllocateConnectionOnInterconnectRequest & AllocateConnectionOnInterconnectRequest & AllocateConnectionOnInterconnectRequest & AllocateConnectionOnInterconnectRequest & AllocateConnectionOnInterconnectRequest & AllocateConnectionOnInterconnectRequest & AllocateConnectionOnInterconnectRequest)[K]
    }>): Request<Connection, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.allocateConnectionOnInterconnect(
          this.ops["AllocateConnectionOnInterconnect"].applicator.apply(partialParams)
        );
    }

    invokeAllocateHostedConnection(partialParams: ToOptional<{
      [K in keyof AllocateHostedConnectionRequest & keyof AllocateHostedConnectionRequest & keyof AllocateHostedConnectionRequest & keyof AllocateHostedConnectionRequest & keyof AllocateHostedConnectionRequest & keyof AllocateHostedConnectionRequest & keyof AllocateHostedConnectionRequest & keyof AllocateHostedConnectionRequest & keyof AllocateHostedConnectionRequest & keyof AllocateHostedConnectionRequest]: (AllocateHostedConnectionRequest & AllocateHostedConnectionRequest & AllocateHostedConnectionRequest & AllocateHostedConnectionRequest & AllocateHostedConnectionRequest & AllocateHostedConnectionRequest & AllocateHostedConnectionRequest & AllocateHostedConnectionRequest & AllocateHostedConnectionRequest & AllocateHostedConnectionRequest)[K]
    }>): Request<Connection, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.allocateHostedConnection(
          this.ops["AllocateHostedConnection"].applicator.apply(partialParams)
        );
    }

    invokeAllocatePrivateVirtualInterface(partialParams: ToOptional<{
      [K in keyof AllocatePrivateVirtualInterfaceRequest & keyof AllocatePrivateVirtualInterfaceRequest & keyof AllocatePrivateVirtualInterfaceRequest & keyof AllocatePrivateVirtualInterfaceRequest & keyof AllocatePrivateVirtualInterfaceRequest & keyof AllocatePrivateVirtualInterfaceRequest & keyof AllocatePrivateVirtualInterfaceRequest & keyof AllocatePrivateVirtualInterfaceRequest & keyof AllocatePrivateVirtualInterfaceRequest & keyof AllocatePrivateVirtualInterfaceRequest]: (AllocatePrivateVirtualInterfaceRequest & AllocatePrivateVirtualInterfaceRequest & AllocatePrivateVirtualInterfaceRequest & AllocatePrivateVirtualInterfaceRequest & AllocatePrivateVirtualInterfaceRequest & AllocatePrivateVirtualInterfaceRequest & AllocatePrivateVirtualInterfaceRequest & AllocatePrivateVirtualInterfaceRequest & AllocatePrivateVirtualInterfaceRequest & AllocatePrivateVirtualInterfaceRequest)[K]
    }>): Request<VirtualInterface, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.allocatePrivateVirtualInterface(
          this.ops["AllocatePrivateVirtualInterface"].applicator.apply(partialParams)
        );
    }

    invokeAllocatePublicVirtualInterface(partialParams: ToOptional<{
      [K in keyof AllocatePublicVirtualInterfaceRequest & keyof AllocatePublicVirtualInterfaceRequest & keyof AllocatePublicVirtualInterfaceRequest & keyof AllocatePublicVirtualInterfaceRequest & keyof AllocatePublicVirtualInterfaceRequest & keyof AllocatePublicVirtualInterfaceRequest & keyof AllocatePublicVirtualInterfaceRequest & keyof AllocatePublicVirtualInterfaceRequest & keyof AllocatePublicVirtualInterfaceRequest & keyof AllocatePublicVirtualInterfaceRequest]: (AllocatePublicVirtualInterfaceRequest & AllocatePublicVirtualInterfaceRequest & AllocatePublicVirtualInterfaceRequest & AllocatePublicVirtualInterfaceRequest & AllocatePublicVirtualInterfaceRequest & AllocatePublicVirtualInterfaceRequest & AllocatePublicVirtualInterfaceRequest & AllocatePublicVirtualInterfaceRequest & AllocatePublicVirtualInterfaceRequest & AllocatePublicVirtualInterfaceRequest)[K]
    }>): Request<VirtualInterface, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.allocatePublicVirtualInterface(
          this.ops["AllocatePublicVirtualInterface"].applicator.apply(partialParams)
        );
    }

    invokeAllocateTransitVirtualInterface(partialParams: ToOptional<{
      [K in keyof AllocateTransitVirtualInterfaceRequest & keyof AllocateTransitVirtualInterfaceRequest & keyof AllocateTransitVirtualInterfaceRequest & keyof AllocateTransitVirtualInterfaceRequest & keyof AllocateTransitVirtualInterfaceRequest & keyof AllocateTransitVirtualInterfaceRequest & keyof AllocateTransitVirtualInterfaceRequest & keyof AllocateTransitVirtualInterfaceRequest & keyof AllocateTransitVirtualInterfaceRequest & keyof AllocateTransitVirtualInterfaceRequest]: (AllocateTransitVirtualInterfaceRequest & AllocateTransitVirtualInterfaceRequest & AllocateTransitVirtualInterfaceRequest & AllocateTransitVirtualInterfaceRequest & AllocateTransitVirtualInterfaceRequest & AllocateTransitVirtualInterfaceRequest & AllocateTransitVirtualInterfaceRequest & AllocateTransitVirtualInterfaceRequest & AllocateTransitVirtualInterfaceRequest & AllocateTransitVirtualInterfaceRequest)[K]
    }>): Request<AllocateTransitVirtualInterfaceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.allocateTransitVirtualInterface(
          this.ops["AllocateTransitVirtualInterface"].applicator.apply(partialParams)
        );
    }

    invokeAssociateConnectionWithLag(partialParams: ToOptional<{
      [K in keyof AssociateConnectionWithLagRequest & keyof AssociateConnectionWithLagRequest & keyof AssociateConnectionWithLagRequest & keyof AssociateConnectionWithLagRequest & keyof AssociateConnectionWithLagRequest & keyof AssociateConnectionWithLagRequest & keyof AssociateConnectionWithLagRequest & keyof AssociateConnectionWithLagRequest & keyof AssociateConnectionWithLagRequest & keyof AssociateConnectionWithLagRequest]: (AssociateConnectionWithLagRequest & AssociateConnectionWithLagRequest & AssociateConnectionWithLagRequest & AssociateConnectionWithLagRequest & AssociateConnectionWithLagRequest & AssociateConnectionWithLagRequest & AssociateConnectionWithLagRequest & AssociateConnectionWithLagRequest & AssociateConnectionWithLagRequest & AssociateConnectionWithLagRequest)[K]
    }>): Request<Connection, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateConnectionWithLag(
          this.ops["AssociateConnectionWithLag"].applicator.apply(partialParams)
        );
    }

    invokeAssociateHostedConnection(partialParams: ToOptional<{
      [K in keyof AssociateHostedConnectionRequest & keyof AssociateHostedConnectionRequest & keyof AssociateHostedConnectionRequest & keyof AssociateHostedConnectionRequest & keyof AssociateHostedConnectionRequest & keyof AssociateHostedConnectionRequest & keyof AssociateHostedConnectionRequest & keyof AssociateHostedConnectionRequest & keyof AssociateHostedConnectionRequest & keyof AssociateHostedConnectionRequest]: (AssociateHostedConnectionRequest & AssociateHostedConnectionRequest & AssociateHostedConnectionRequest & AssociateHostedConnectionRequest & AssociateHostedConnectionRequest & AssociateHostedConnectionRequest & AssociateHostedConnectionRequest & AssociateHostedConnectionRequest & AssociateHostedConnectionRequest & AssociateHostedConnectionRequest)[K]
    }>): Request<Connection, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateHostedConnection(
          this.ops["AssociateHostedConnection"].applicator.apply(partialParams)
        );
    }

    invokeAssociateMacSecKey(partialParams: ToOptional<{
      [K in keyof AssociateMacSecKeyRequest & keyof AssociateMacSecKeyRequest & keyof AssociateMacSecKeyRequest & keyof AssociateMacSecKeyRequest & keyof AssociateMacSecKeyRequest & keyof AssociateMacSecKeyRequest & keyof AssociateMacSecKeyRequest & keyof AssociateMacSecKeyRequest & keyof AssociateMacSecKeyRequest & keyof AssociateMacSecKeyRequest]: (AssociateMacSecKeyRequest & AssociateMacSecKeyRequest & AssociateMacSecKeyRequest & AssociateMacSecKeyRequest & AssociateMacSecKeyRequest & AssociateMacSecKeyRequest & AssociateMacSecKeyRequest & AssociateMacSecKeyRequest & AssociateMacSecKeyRequest & AssociateMacSecKeyRequest)[K]
    }>): Request<AssociateMacSecKeyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateMacSecKey(
          this.ops["AssociateMacSecKey"].applicator.apply(partialParams)
        );
    }

    invokeAssociateVirtualInterface(partialParams: ToOptional<{
      [K in keyof AssociateVirtualInterfaceRequest & keyof AssociateVirtualInterfaceRequest & keyof AssociateVirtualInterfaceRequest & keyof AssociateVirtualInterfaceRequest & keyof AssociateVirtualInterfaceRequest & keyof AssociateVirtualInterfaceRequest & keyof AssociateVirtualInterfaceRequest & keyof AssociateVirtualInterfaceRequest & keyof AssociateVirtualInterfaceRequest & keyof AssociateVirtualInterfaceRequest]: (AssociateVirtualInterfaceRequest & AssociateVirtualInterfaceRequest & AssociateVirtualInterfaceRequest & AssociateVirtualInterfaceRequest & AssociateVirtualInterfaceRequest & AssociateVirtualInterfaceRequest & AssociateVirtualInterfaceRequest & AssociateVirtualInterfaceRequest & AssociateVirtualInterfaceRequest & AssociateVirtualInterfaceRequest)[K]
    }>): Request<VirtualInterface, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateVirtualInterface(
          this.ops["AssociateVirtualInterface"].applicator.apply(partialParams)
        );
    }

    invokeConfirmConnection(partialParams: ToOptional<{
      [K in keyof ConfirmConnectionRequest & keyof ConfirmConnectionRequest & keyof ConfirmConnectionRequest & keyof ConfirmConnectionRequest & keyof ConfirmConnectionRequest & keyof ConfirmConnectionRequest & keyof ConfirmConnectionRequest & keyof ConfirmConnectionRequest & keyof ConfirmConnectionRequest & keyof ConfirmConnectionRequest]: (ConfirmConnectionRequest & ConfirmConnectionRequest & ConfirmConnectionRequest & ConfirmConnectionRequest & ConfirmConnectionRequest & ConfirmConnectionRequest & ConfirmConnectionRequest & ConfirmConnectionRequest & ConfirmConnectionRequest & ConfirmConnectionRequest)[K]
    }>): Request<ConfirmConnectionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.confirmConnection(
          this.ops["ConfirmConnection"].applicator.apply(partialParams)
        );
    }

    invokeConfirmPrivateVirtualInterface(partialParams: ToOptional<{
      [K in keyof ConfirmPrivateVirtualInterfaceRequest & keyof ConfirmPrivateVirtualInterfaceRequest & keyof ConfirmPrivateVirtualInterfaceRequest & keyof ConfirmPrivateVirtualInterfaceRequest & keyof ConfirmPrivateVirtualInterfaceRequest & keyof ConfirmPrivateVirtualInterfaceRequest & keyof ConfirmPrivateVirtualInterfaceRequest & keyof ConfirmPrivateVirtualInterfaceRequest & keyof ConfirmPrivateVirtualInterfaceRequest & keyof ConfirmPrivateVirtualInterfaceRequest]: (ConfirmPrivateVirtualInterfaceRequest & ConfirmPrivateVirtualInterfaceRequest & ConfirmPrivateVirtualInterfaceRequest & ConfirmPrivateVirtualInterfaceRequest & ConfirmPrivateVirtualInterfaceRequest & ConfirmPrivateVirtualInterfaceRequest & ConfirmPrivateVirtualInterfaceRequest & ConfirmPrivateVirtualInterfaceRequest & ConfirmPrivateVirtualInterfaceRequest & ConfirmPrivateVirtualInterfaceRequest)[K]
    }>): Request<ConfirmPrivateVirtualInterfaceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.confirmPrivateVirtualInterface(
          this.ops["ConfirmPrivateVirtualInterface"].applicator.apply(partialParams)
        );
    }

    invokeConfirmPublicVirtualInterface(partialParams: ToOptional<{
      [K in keyof ConfirmPublicVirtualInterfaceRequest & keyof ConfirmPublicVirtualInterfaceRequest & keyof ConfirmPublicVirtualInterfaceRequest & keyof ConfirmPublicVirtualInterfaceRequest & keyof ConfirmPublicVirtualInterfaceRequest & keyof ConfirmPublicVirtualInterfaceRequest & keyof ConfirmPublicVirtualInterfaceRequest & keyof ConfirmPublicVirtualInterfaceRequest & keyof ConfirmPublicVirtualInterfaceRequest & keyof ConfirmPublicVirtualInterfaceRequest]: (ConfirmPublicVirtualInterfaceRequest & ConfirmPublicVirtualInterfaceRequest & ConfirmPublicVirtualInterfaceRequest & ConfirmPublicVirtualInterfaceRequest & ConfirmPublicVirtualInterfaceRequest & ConfirmPublicVirtualInterfaceRequest & ConfirmPublicVirtualInterfaceRequest & ConfirmPublicVirtualInterfaceRequest & ConfirmPublicVirtualInterfaceRequest & ConfirmPublicVirtualInterfaceRequest)[K]
    }>): Request<ConfirmPublicVirtualInterfaceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.confirmPublicVirtualInterface(
          this.ops["ConfirmPublicVirtualInterface"].applicator.apply(partialParams)
        );
    }

    invokeConfirmTransitVirtualInterface(partialParams: ToOptional<{
      [K in keyof ConfirmTransitVirtualInterfaceRequest & keyof ConfirmTransitVirtualInterfaceRequest & keyof ConfirmTransitVirtualInterfaceRequest & keyof ConfirmTransitVirtualInterfaceRequest & keyof ConfirmTransitVirtualInterfaceRequest & keyof ConfirmTransitVirtualInterfaceRequest & keyof ConfirmTransitVirtualInterfaceRequest & keyof ConfirmTransitVirtualInterfaceRequest & keyof ConfirmTransitVirtualInterfaceRequest & keyof ConfirmTransitVirtualInterfaceRequest]: (ConfirmTransitVirtualInterfaceRequest & ConfirmTransitVirtualInterfaceRequest & ConfirmTransitVirtualInterfaceRequest & ConfirmTransitVirtualInterfaceRequest & ConfirmTransitVirtualInterfaceRequest & ConfirmTransitVirtualInterfaceRequest & ConfirmTransitVirtualInterfaceRequest & ConfirmTransitVirtualInterfaceRequest & ConfirmTransitVirtualInterfaceRequest & ConfirmTransitVirtualInterfaceRequest)[K]
    }>): Request<ConfirmTransitVirtualInterfaceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.confirmTransitVirtualInterface(
          this.ops["ConfirmTransitVirtualInterface"].applicator.apply(partialParams)
        );
    }

    invokeCreateConnection(partialParams: ToOptional<{
      [K in keyof CreateConnectionRequest & keyof CreateConnectionRequest & keyof CreateConnectionRequest & keyof CreateConnectionRequest & keyof CreateConnectionRequest & keyof CreateConnectionRequest & keyof CreateConnectionRequest & keyof CreateConnectionRequest & keyof CreateConnectionRequest & keyof CreateConnectionRequest]: (CreateConnectionRequest & CreateConnectionRequest & CreateConnectionRequest & CreateConnectionRequest & CreateConnectionRequest & CreateConnectionRequest & CreateConnectionRequest & CreateConnectionRequest & CreateConnectionRequest & CreateConnectionRequest)[K]
    }>): Request<Connection, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createConnection(
          this.ops["CreateConnection"].applicator.apply(partialParams)
        );
    }

    invokeCreateDirectConnectGateway(partialParams: ToOptional<{
      [K in keyof CreateDirectConnectGatewayRequest & keyof CreateDirectConnectGatewayRequest & keyof CreateDirectConnectGatewayRequest & keyof CreateDirectConnectGatewayRequest & keyof CreateDirectConnectGatewayRequest & keyof CreateDirectConnectGatewayRequest & keyof CreateDirectConnectGatewayRequest & keyof CreateDirectConnectGatewayRequest & keyof CreateDirectConnectGatewayRequest & keyof CreateDirectConnectGatewayRequest]: (CreateDirectConnectGatewayRequest & CreateDirectConnectGatewayRequest & CreateDirectConnectGatewayRequest & CreateDirectConnectGatewayRequest & CreateDirectConnectGatewayRequest & CreateDirectConnectGatewayRequest & CreateDirectConnectGatewayRequest & CreateDirectConnectGatewayRequest & CreateDirectConnectGatewayRequest & CreateDirectConnectGatewayRequest)[K]
    }>): Request<CreateDirectConnectGatewayResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDirectConnectGateway(
          this.ops["CreateDirectConnectGateway"].applicator.apply(partialParams)
        );
    }

    invokeCreateDirectConnectGatewayAssociation(partialParams: ToOptional<{
      [K in keyof CreateDirectConnectGatewayAssociationRequest & keyof CreateDirectConnectGatewayAssociationRequest & keyof CreateDirectConnectGatewayAssociationRequest & keyof CreateDirectConnectGatewayAssociationRequest & keyof CreateDirectConnectGatewayAssociationRequest & keyof CreateDirectConnectGatewayAssociationRequest & keyof CreateDirectConnectGatewayAssociationRequest & keyof CreateDirectConnectGatewayAssociationRequest & keyof CreateDirectConnectGatewayAssociationRequest & keyof CreateDirectConnectGatewayAssociationRequest]: (CreateDirectConnectGatewayAssociationRequest & CreateDirectConnectGatewayAssociationRequest & CreateDirectConnectGatewayAssociationRequest & CreateDirectConnectGatewayAssociationRequest & CreateDirectConnectGatewayAssociationRequest & CreateDirectConnectGatewayAssociationRequest & CreateDirectConnectGatewayAssociationRequest & CreateDirectConnectGatewayAssociationRequest & CreateDirectConnectGatewayAssociationRequest & CreateDirectConnectGatewayAssociationRequest)[K]
    }>): Request<CreateDirectConnectGatewayAssociationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDirectConnectGatewayAssociation(
          this.ops["CreateDirectConnectGatewayAssociation"].applicator.apply(partialParams)
        );
    }

    invokeCreateDirectConnectGatewayAssociationProposal(partialParams: ToOptional<{
      [K in keyof CreateDirectConnectGatewayAssociationProposalRequest & keyof CreateDirectConnectGatewayAssociationProposalRequest & keyof CreateDirectConnectGatewayAssociationProposalRequest & keyof CreateDirectConnectGatewayAssociationProposalRequest & keyof CreateDirectConnectGatewayAssociationProposalRequest & keyof CreateDirectConnectGatewayAssociationProposalRequest & keyof CreateDirectConnectGatewayAssociationProposalRequest & keyof CreateDirectConnectGatewayAssociationProposalRequest & keyof CreateDirectConnectGatewayAssociationProposalRequest & keyof CreateDirectConnectGatewayAssociationProposalRequest]: (CreateDirectConnectGatewayAssociationProposalRequest & CreateDirectConnectGatewayAssociationProposalRequest & CreateDirectConnectGatewayAssociationProposalRequest & CreateDirectConnectGatewayAssociationProposalRequest & CreateDirectConnectGatewayAssociationProposalRequest & CreateDirectConnectGatewayAssociationProposalRequest & CreateDirectConnectGatewayAssociationProposalRequest & CreateDirectConnectGatewayAssociationProposalRequest & CreateDirectConnectGatewayAssociationProposalRequest & CreateDirectConnectGatewayAssociationProposalRequest)[K]
    }>): Request<CreateDirectConnectGatewayAssociationProposalResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDirectConnectGatewayAssociationProposal(
          this.ops["CreateDirectConnectGatewayAssociationProposal"].applicator.apply(partialParams)
        );
    }

    invokeCreateInterconnect(partialParams: ToOptional<{
      [K in keyof CreateInterconnectRequest & keyof CreateInterconnectRequest & keyof CreateInterconnectRequest & keyof CreateInterconnectRequest & keyof CreateInterconnectRequest & keyof CreateInterconnectRequest & keyof CreateInterconnectRequest & keyof CreateInterconnectRequest & keyof CreateInterconnectRequest & keyof CreateInterconnectRequest]: (CreateInterconnectRequest & CreateInterconnectRequest & CreateInterconnectRequest & CreateInterconnectRequest & CreateInterconnectRequest & CreateInterconnectRequest & CreateInterconnectRequest & CreateInterconnectRequest & CreateInterconnectRequest & CreateInterconnectRequest)[K]
    }>): Request<Interconnect, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createInterconnect(
          this.ops["CreateInterconnect"].applicator.apply(partialParams)
        );
    }

    invokeCreateLag(partialParams: ToOptional<{
      [K in keyof CreateLagRequest & keyof CreateLagRequest & keyof CreateLagRequest & keyof CreateLagRequest & keyof CreateLagRequest & keyof CreateLagRequest & keyof CreateLagRequest & keyof CreateLagRequest & keyof CreateLagRequest & keyof CreateLagRequest]: (CreateLagRequest & CreateLagRequest & CreateLagRequest & CreateLagRequest & CreateLagRequest & CreateLagRequest & CreateLagRequest & CreateLagRequest & CreateLagRequest & CreateLagRequest)[K]
    }>): Request<Lag, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createLag(
          this.ops["CreateLag"].applicator.apply(partialParams)
        );
    }

    invokeCreatePrivateVirtualInterface(partialParams: ToOptional<{
      [K in keyof CreatePrivateVirtualInterfaceRequest & keyof CreatePrivateVirtualInterfaceRequest & keyof CreatePrivateVirtualInterfaceRequest & keyof CreatePrivateVirtualInterfaceRequest & keyof CreatePrivateVirtualInterfaceRequest & keyof CreatePrivateVirtualInterfaceRequest & keyof Omit<CreatePrivateVirtualInterfaceRequest, "connectionId"> & keyof CreatePrivateVirtualInterfaceRequest & keyof CreatePrivateVirtualInterfaceRequest & keyof CreatePrivateVirtualInterfaceRequest]: (CreatePrivateVirtualInterfaceRequest & CreatePrivateVirtualInterfaceRequest & CreatePrivateVirtualInterfaceRequest & CreatePrivateVirtualInterfaceRequest & CreatePrivateVirtualInterfaceRequest & CreatePrivateVirtualInterfaceRequest & Omit<CreatePrivateVirtualInterfaceRequest, "connectionId"> & CreatePrivateVirtualInterfaceRequest & CreatePrivateVirtualInterfaceRequest & CreatePrivateVirtualInterfaceRequest)[K]
    }>): Request<VirtualInterface, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPrivateVirtualInterface(
          this.ops["CreatePrivateVirtualInterface"].applicator.apply(partialParams)
        );
    }

    invokeCreatePublicVirtualInterface(partialParams: ToOptional<{
      [K in keyof CreatePublicVirtualInterfaceRequest & keyof CreatePublicVirtualInterfaceRequest & keyof CreatePublicVirtualInterfaceRequest & keyof CreatePublicVirtualInterfaceRequest & keyof CreatePublicVirtualInterfaceRequest & keyof CreatePublicVirtualInterfaceRequest & keyof Omit<CreatePublicVirtualInterfaceRequest, "connectionId"> & keyof CreatePublicVirtualInterfaceRequest & keyof CreatePublicVirtualInterfaceRequest & keyof CreatePublicVirtualInterfaceRequest]: (CreatePublicVirtualInterfaceRequest & CreatePublicVirtualInterfaceRequest & CreatePublicVirtualInterfaceRequest & CreatePublicVirtualInterfaceRequest & CreatePublicVirtualInterfaceRequest & CreatePublicVirtualInterfaceRequest & Omit<CreatePublicVirtualInterfaceRequest, "connectionId"> & CreatePublicVirtualInterfaceRequest & CreatePublicVirtualInterfaceRequest & CreatePublicVirtualInterfaceRequest)[K]
    }>): Request<VirtualInterface, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPublicVirtualInterface(
          this.ops["CreatePublicVirtualInterface"].applicator.apply(partialParams)
        );
    }

    invokeCreateTransitVirtualInterface(partialParams: ToOptional<{
      [K in keyof CreateTransitVirtualInterfaceRequest & keyof CreateTransitVirtualInterfaceRequest & keyof CreateTransitVirtualInterfaceRequest & keyof CreateTransitVirtualInterfaceRequest & keyof CreateTransitVirtualInterfaceRequest & keyof CreateTransitVirtualInterfaceRequest & keyof Omit<CreateTransitVirtualInterfaceRequest, "connectionId"> & keyof CreateTransitVirtualInterfaceRequest & keyof CreateTransitVirtualInterfaceRequest & keyof CreateTransitVirtualInterfaceRequest]: (CreateTransitVirtualInterfaceRequest & CreateTransitVirtualInterfaceRequest & CreateTransitVirtualInterfaceRequest & CreateTransitVirtualInterfaceRequest & CreateTransitVirtualInterfaceRequest & CreateTransitVirtualInterfaceRequest & Omit<CreateTransitVirtualInterfaceRequest, "connectionId"> & CreateTransitVirtualInterfaceRequest & CreateTransitVirtualInterfaceRequest & CreateTransitVirtualInterfaceRequest)[K]
    }>): Request<CreateTransitVirtualInterfaceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTransitVirtualInterface(
          this.ops["CreateTransitVirtualInterface"].applicator.apply(partialParams)
        );
    }

    invokeDeleteConnection(partialParams: ToOptional<{
      [K in keyof DeleteConnectionRequest & keyof DeleteConnectionRequest & keyof DeleteConnectionRequest & keyof DeleteConnectionRequest & keyof DeleteConnectionRequest & keyof DeleteConnectionRequest & keyof Omit<DeleteConnectionRequest, "connectionId"> & keyof DeleteConnectionRequest & keyof DeleteConnectionRequest & keyof DeleteConnectionRequest]: (DeleteConnectionRequest & DeleteConnectionRequest & DeleteConnectionRequest & DeleteConnectionRequest & DeleteConnectionRequest & DeleteConnectionRequest & Omit<DeleteConnectionRequest, "connectionId"> & DeleteConnectionRequest & DeleteConnectionRequest & DeleteConnectionRequest)[K]
    }>): Request<Connection, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteConnection(
          this.ops["DeleteConnection"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDirectConnectGateway(partialParams: ToOptional<{
      [K in keyof DeleteDirectConnectGatewayRequest & keyof DeleteDirectConnectGatewayRequest & keyof DeleteDirectConnectGatewayRequest & keyof DeleteDirectConnectGatewayRequest & keyof DeleteDirectConnectGatewayRequest & keyof DeleteDirectConnectGatewayRequest & keyof DeleteDirectConnectGatewayRequest & keyof DeleteDirectConnectGatewayRequest & keyof DeleteDirectConnectGatewayRequest & keyof DeleteDirectConnectGatewayRequest]: (DeleteDirectConnectGatewayRequest & DeleteDirectConnectGatewayRequest & DeleteDirectConnectGatewayRequest & DeleteDirectConnectGatewayRequest & DeleteDirectConnectGatewayRequest & DeleteDirectConnectGatewayRequest & DeleteDirectConnectGatewayRequest & DeleteDirectConnectGatewayRequest & DeleteDirectConnectGatewayRequest & DeleteDirectConnectGatewayRequest)[K]
    }>): Request<DeleteDirectConnectGatewayResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDirectConnectGateway(
          this.ops["DeleteDirectConnectGateway"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDirectConnectGatewayAssociationProposal(partialParams: ToOptional<{
      [K in keyof DeleteDirectConnectGatewayAssociationProposalRequest & keyof DeleteDirectConnectGatewayAssociationProposalRequest & keyof DeleteDirectConnectGatewayAssociationProposalRequest & keyof DeleteDirectConnectGatewayAssociationProposalRequest & keyof DeleteDirectConnectGatewayAssociationProposalRequest & keyof DeleteDirectConnectGatewayAssociationProposalRequest & keyof DeleteDirectConnectGatewayAssociationProposalRequest & keyof DeleteDirectConnectGatewayAssociationProposalRequest & keyof DeleteDirectConnectGatewayAssociationProposalRequest & keyof DeleteDirectConnectGatewayAssociationProposalRequest]: (DeleteDirectConnectGatewayAssociationProposalRequest & DeleteDirectConnectGatewayAssociationProposalRequest & DeleteDirectConnectGatewayAssociationProposalRequest & DeleteDirectConnectGatewayAssociationProposalRequest & DeleteDirectConnectGatewayAssociationProposalRequest & DeleteDirectConnectGatewayAssociationProposalRequest & DeleteDirectConnectGatewayAssociationProposalRequest & DeleteDirectConnectGatewayAssociationProposalRequest & DeleteDirectConnectGatewayAssociationProposalRequest & DeleteDirectConnectGatewayAssociationProposalRequest)[K]
    }>): Request<DeleteDirectConnectGatewayAssociationProposalResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDirectConnectGatewayAssociationProposal(
          this.ops["DeleteDirectConnectGatewayAssociationProposal"].applicator.apply(partialParams)
        );
    }

    invokeDeleteInterconnect(partialParams: ToOptional<{
      [K in keyof DeleteInterconnectRequest & keyof DeleteInterconnectRequest & keyof DeleteInterconnectRequest & keyof DeleteInterconnectRequest & keyof DeleteInterconnectRequest & keyof DeleteInterconnectRequest & keyof DeleteInterconnectRequest & keyof DeleteInterconnectRequest & keyof DeleteInterconnectRequest & keyof DeleteInterconnectRequest]: (DeleteInterconnectRequest & DeleteInterconnectRequest & DeleteInterconnectRequest & DeleteInterconnectRequest & DeleteInterconnectRequest & DeleteInterconnectRequest & DeleteInterconnectRequest & DeleteInterconnectRequest & DeleteInterconnectRequest & DeleteInterconnectRequest)[K]
    }>): Request<DeleteInterconnectResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteInterconnect(
          this.ops["DeleteInterconnect"].applicator.apply(partialParams)
        );
    }

    invokeDeleteLag(partialParams: ToOptional<{
      [K in keyof DeleteLagRequest & keyof DeleteLagRequest & keyof DeleteLagRequest & keyof DeleteLagRequest & keyof DeleteLagRequest & keyof DeleteLagRequest & keyof DeleteLagRequest & keyof DeleteLagRequest & keyof DeleteLagRequest & keyof DeleteLagRequest]: (DeleteLagRequest & DeleteLagRequest & DeleteLagRequest & DeleteLagRequest & DeleteLagRequest & DeleteLagRequest & DeleteLagRequest & DeleteLagRequest & DeleteLagRequest & DeleteLagRequest)[K]
    }>): Request<Lag, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteLag(
          this.ops["DeleteLag"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVirtualInterface(partialParams: ToOptional<{
      [K in keyof DeleteVirtualInterfaceRequest & keyof DeleteVirtualInterfaceRequest & keyof DeleteVirtualInterfaceRequest & keyof DeleteVirtualInterfaceRequest & keyof DeleteVirtualInterfaceRequest & keyof DeleteVirtualInterfaceRequest & keyof DeleteVirtualInterfaceRequest & keyof DeleteVirtualInterfaceRequest & keyof DeleteVirtualInterfaceRequest & keyof DeleteVirtualInterfaceRequest]: (DeleteVirtualInterfaceRequest & DeleteVirtualInterfaceRequest & DeleteVirtualInterfaceRequest & DeleteVirtualInterfaceRequest & DeleteVirtualInterfaceRequest & DeleteVirtualInterfaceRequest & DeleteVirtualInterfaceRequest & DeleteVirtualInterfaceRequest & DeleteVirtualInterfaceRequest & DeleteVirtualInterfaceRequest)[K]
    }>): Request<DeleteVirtualInterfaceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVirtualInterface(
          this.ops["DeleteVirtualInterface"].applicator.apply(partialParams)
        );
    }

    invokeDescribeConnectionLoa(partialParams: ToOptional<{
      [K in keyof DescribeConnectionLoaRequest & keyof DescribeConnectionLoaRequest & keyof DescribeConnectionLoaRequest & keyof DescribeConnectionLoaRequest & keyof DescribeConnectionLoaRequest & keyof DescribeConnectionLoaRequest & keyof Omit<DescribeConnectionLoaRequest, "connectionId"> & keyof DescribeConnectionLoaRequest & keyof DescribeConnectionLoaRequest & keyof DescribeConnectionLoaRequest]: (DescribeConnectionLoaRequest & DescribeConnectionLoaRequest & DescribeConnectionLoaRequest & DescribeConnectionLoaRequest & DescribeConnectionLoaRequest & DescribeConnectionLoaRequest & Omit<DescribeConnectionLoaRequest, "connectionId"> & DescribeConnectionLoaRequest & DescribeConnectionLoaRequest & DescribeConnectionLoaRequest)[K]
    }>): Request<DescribeConnectionLoaResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeConnectionLoa(
          this.ops["DescribeConnectionLoa"].applicator.apply(partialParams)
        );
    }

    invokeDescribeConnectionsOnInterconnect(partialParams: ToOptional<{
      [K in keyof DescribeConnectionsOnInterconnectRequest & keyof DescribeConnectionsOnInterconnectRequest & keyof DescribeConnectionsOnInterconnectRequest & keyof DescribeConnectionsOnInterconnectRequest & keyof DescribeConnectionsOnInterconnectRequest & keyof DescribeConnectionsOnInterconnectRequest & keyof DescribeConnectionsOnInterconnectRequest & keyof DescribeConnectionsOnInterconnectRequest & keyof DescribeConnectionsOnInterconnectRequest & keyof DescribeConnectionsOnInterconnectRequest]: (DescribeConnectionsOnInterconnectRequest & DescribeConnectionsOnInterconnectRequest & DescribeConnectionsOnInterconnectRequest & DescribeConnectionsOnInterconnectRequest & DescribeConnectionsOnInterconnectRequest & DescribeConnectionsOnInterconnectRequest & DescribeConnectionsOnInterconnectRequest & DescribeConnectionsOnInterconnectRequest & DescribeConnectionsOnInterconnectRequest & DescribeConnectionsOnInterconnectRequest)[K]
    }>): Request<Connections, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeConnectionsOnInterconnect(
          this.ops["DescribeConnectionsOnInterconnect"].applicator.apply(partialParams)
        );
    }

    invokeDescribeHostedConnections(partialParams: ToOptional<{
      [K in keyof DescribeHostedConnectionsRequest & keyof DescribeHostedConnectionsRequest & keyof DescribeHostedConnectionsRequest & keyof DescribeHostedConnectionsRequest & keyof DescribeHostedConnectionsRequest & keyof DescribeHostedConnectionsRequest & keyof Omit<DescribeHostedConnectionsRequest, "connectionId"> & keyof DescribeHostedConnectionsRequest & keyof DescribeHostedConnectionsRequest & keyof DescribeHostedConnectionsRequest]: (DescribeHostedConnectionsRequest & DescribeHostedConnectionsRequest & DescribeHostedConnectionsRequest & DescribeHostedConnectionsRequest & DescribeHostedConnectionsRequest & DescribeHostedConnectionsRequest & Omit<DescribeHostedConnectionsRequest, "connectionId"> & DescribeHostedConnectionsRequest & DescribeHostedConnectionsRequest & DescribeHostedConnectionsRequest)[K]
    }>): Request<Connections, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeHostedConnections(
          this.ops["DescribeHostedConnections"].applicator.apply(partialParams)
        );
    }

    invokeDescribeInterconnectLoa(partialParams: ToOptional<{
      [K in keyof DescribeInterconnectLoaRequest & keyof DescribeInterconnectLoaRequest & keyof DescribeInterconnectLoaRequest & keyof DescribeInterconnectLoaRequest & keyof DescribeInterconnectLoaRequest & keyof DescribeInterconnectLoaRequest & keyof DescribeInterconnectLoaRequest & keyof DescribeInterconnectLoaRequest & keyof DescribeInterconnectLoaRequest & keyof DescribeInterconnectLoaRequest]: (DescribeInterconnectLoaRequest & DescribeInterconnectLoaRequest & DescribeInterconnectLoaRequest & DescribeInterconnectLoaRequest & DescribeInterconnectLoaRequest & DescribeInterconnectLoaRequest & DescribeInterconnectLoaRequest & DescribeInterconnectLoaRequest & DescribeInterconnectLoaRequest & DescribeInterconnectLoaRequest)[K]
    }>): Request<DescribeInterconnectLoaResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeInterconnectLoa(
          this.ops["DescribeInterconnectLoa"].applicator.apply(partialParams)
        );
    }

    invokeDescribeLoa(partialParams: ToOptional<{
      [K in keyof DescribeLoaRequest & keyof DescribeLoaRequest & keyof DescribeLoaRequest & keyof DescribeLoaRequest & keyof DescribeLoaRequest & keyof DescribeLoaRequest & keyof Omit<DescribeLoaRequest, "connectionId"> & keyof DescribeLoaRequest & keyof DescribeLoaRequest & keyof DescribeLoaRequest]: (DescribeLoaRequest & DescribeLoaRequest & DescribeLoaRequest & DescribeLoaRequest & DescribeLoaRequest & DescribeLoaRequest & Omit<DescribeLoaRequest, "connectionId"> & DescribeLoaRequest & DescribeLoaRequest & DescribeLoaRequest)[K]
    }>): Request<Loa, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeLoa(
          this.ops["DescribeLoa"].applicator.apply(partialParams)
        );
    }

    invokeDescribeRouterConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeRouterConfigurationRequest & keyof DescribeRouterConfigurationRequest & keyof DescribeRouterConfigurationRequest & keyof DescribeRouterConfigurationRequest & keyof DescribeRouterConfigurationRequest & keyof DescribeRouterConfigurationRequest & keyof DescribeRouterConfigurationRequest & keyof DescribeRouterConfigurationRequest & keyof DescribeRouterConfigurationRequest & keyof DescribeRouterConfigurationRequest]: (DescribeRouterConfigurationRequest & DescribeRouterConfigurationRequest & DescribeRouterConfigurationRequest & DescribeRouterConfigurationRequest & DescribeRouterConfigurationRequest & DescribeRouterConfigurationRequest & DescribeRouterConfigurationRequest & DescribeRouterConfigurationRequest & DescribeRouterConfigurationRequest & DescribeRouterConfigurationRequest)[K]
    }>): Request<DescribeRouterConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeRouterConfiguration(
          this.ops["DescribeRouterConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDescribeTags(partialParams: ToOptional<{
      [K in keyof DescribeTagsRequest & keyof DescribeTagsRequest & keyof DescribeTagsRequest & keyof DescribeTagsRequest & keyof DescribeTagsRequest & keyof DescribeTagsRequest & keyof DescribeTagsRequest & keyof DescribeTagsRequest & keyof DescribeTagsRequest & keyof DescribeTagsRequest]: (DescribeTagsRequest & DescribeTagsRequest & DescribeTagsRequest & DescribeTagsRequest & DescribeTagsRequest & DescribeTagsRequest & DescribeTagsRequest & DescribeTagsRequest & DescribeTagsRequest & DescribeTagsRequest)[K]
    }>): Request<DescribeTagsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTags(
          this.ops["DescribeTags"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateConnectionFromLag(partialParams: ToOptional<{
      [K in keyof DisassociateConnectionFromLagRequest & keyof DisassociateConnectionFromLagRequest & keyof DisassociateConnectionFromLagRequest & keyof DisassociateConnectionFromLagRequest & keyof DisassociateConnectionFromLagRequest & keyof DisassociateConnectionFromLagRequest & keyof Omit<DisassociateConnectionFromLagRequest, "connectionId"> & keyof DisassociateConnectionFromLagRequest & keyof DisassociateConnectionFromLagRequest & keyof DisassociateConnectionFromLagRequest]: (DisassociateConnectionFromLagRequest & DisassociateConnectionFromLagRequest & DisassociateConnectionFromLagRequest & DisassociateConnectionFromLagRequest & DisassociateConnectionFromLagRequest & DisassociateConnectionFromLagRequest & Omit<DisassociateConnectionFromLagRequest, "connectionId"> & DisassociateConnectionFromLagRequest & DisassociateConnectionFromLagRequest & DisassociateConnectionFromLagRequest)[K]
    }>): Request<Connection, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateConnectionFromLag(
          this.ops["DisassociateConnectionFromLag"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateMacSecKey(partialParams: ToOptional<{
      [K in keyof DisassociateMacSecKeyRequest & keyof DisassociateMacSecKeyRequest & keyof DisassociateMacSecKeyRequest & keyof DisassociateMacSecKeyRequest & keyof DisassociateMacSecKeyRequest & keyof DisassociateMacSecKeyRequest & keyof Omit<DisassociateMacSecKeyRequest, "connectionId"> & keyof DisassociateMacSecKeyRequest & keyof DisassociateMacSecKeyRequest & keyof DisassociateMacSecKeyRequest]: (DisassociateMacSecKeyRequest & DisassociateMacSecKeyRequest & DisassociateMacSecKeyRequest & DisassociateMacSecKeyRequest & DisassociateMacSecKeyRequest & DisassociateMacSecKeyRequest & Omit<DisassociateMacSecKeyRequest, "connectionId"> & DisassociateMacSecKeyRequest & DisassociateMacSecKeyRequest & DisassociateMacSecKeyRequest)[K]
    }>): Request<DisassociateMacSecKeyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateMacSecKey(
          this.ops["DisassociateMacSecKey"].applicator.apply(partialParams)
        );
    }

    invokeStartBgpFailoverTest(partialParams: ToOptional<{
      [K in keyof StartBgpFailoverTestRequest & keyof StartBgpFailoverTestRequest & keyof StartBgpFailoverTestRequest & keyof StartBgpFailoverTestRequest & keyof StartBgpFailoverTestRequest & keyof StartBgpFailoverTestRequest & keyof StartBgpFailoverTestRequest & keyof StartBgpFailoverTestRequest & keyof StartBgpFailoverTestRequest & keyof StartBgpFailoverTestRequest]: (StartBgpFailoverTestRequest & StartBgpFailoverTestRequest & StartBgpFailoverTestRequest & StartBgpFailoverTestRequest & StartBgpFailoverTestRequest & StartBgpFailoverTestRequest & StartBgpFailoverTestRequest & StartBgpFailoverTestRequest & StartBgpFailoverTestRequest & StartBgpFailoverTestRequest)[K]
    }>): Request<StartBgpFailoverTestResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startBgpFailoverTest(
          this.ops["StartBgpFailoverTest"].applicator.apply(partialParams)
        );
    }

    invokeStopBgpFailoverTest(partialParams: ToOptional<{
      [K in keyof StopBgpFailoverTestRequest & keyof StopBgpFailoverTestRequest & keyof StopBgpFailoverTestRequest & keyof StopBgpFailoverTestRequest & keyof StopBgpFailoverTestRequest & keyof StopBgpFailoverTestRequest & keyof StopBgpFailoverTestRequest & keyof StopBgpFailoverTestRequest & keyof StopBgpFailoverTestRequest & keyof StopBgpFailoverTestRequest]: (StopBgpFailoverTestRequest & StopBgpFailoverTestRequest & StopBgpFailoverTestRequest & StopBgpFailoverTestRequest & StopBgpFailoverTestRequest & StopBgpFailoverTestRequest & StopBgpFailoverTestRequest & StopBgpFailoverTestRequest & StopBgpFailoverTestRequest & StopBgpFailoverTestRequest)[K]
    }>): Request<StopBgpFailoverTestResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopBgpFailoverTest(
          this.ops["StopBgpFailoverTest"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateConnection(partialParams: ToOptional<{
      [K in keyof UpdateConnectionRequest & keyof UpdateConnectionRequest & keyof UpdateConnectionRequest & keyof UpdateConnectionRequest & keyof UpdateConnectionRequest & keyof UpdateConnectionRequest & keyof Omit<UpdateConnectionRequest, "connectionId"> & keyof UpdateConnectionRequest & keyof UpdateConnectionRequest & keyof UpdateConnectionRequest]: (UpdateConnectionRequest & UpdateConnectionRequest & UpdateConnectionRequest & UpdateConnectionRequest & UpdateConnectionRequest & UpdateConnectionRequest & Omit<UpdateConnectionRequest, "connectionId"> & UpdateConnectionRequest & UpdateConnectionRequest & UpdateConnectionRequest)[K]
    }>): Request<Connection, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateConnection(
          this.ops["UpdateConnection"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDirectConnectGateway(partialParams: ToOptional<{
      [K in keyof UpdateDirectConnectGatewayRequest & keyof UpdateDirectConnectGatewayRequest & keyof UpdateDirectConnectGatewayRequest & keyof UpdateDirectConnectGatewayRequest & keyof UpdateDirectConnectGatewayRequest & keyof UpdateDirectConnectGatewayRequest & keyof UpdateDirectConnectGatewayRequest & keyof UpdateDirectConnectGatewayRequest & keyof UpdateDirectConnectGatewayRequest & keyof UpdateDirectConnectGatewayRequest]: (UpdateDirectConnectGatewayRequest & UpdateDirectConnectGatewayRequest & UpdateDirectConnectGatewayRequest & UpdateDirectConnectGatewayRequest & UpdateDirectConnectGatewayRequest & UpdateDirectConnectGatewayRequest & UpdateDirectConnectGatewayRequest & UpdateDirectConnectGatewayRequest & UpdateDirectConnectGatewayRequest & UpdateDirectConnectGatewayRequest)[K]
    }>): Request<UpdateDirectConnectGatewayResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDirectConnectGateway(
          this.ops["UpdateDirectConnectGateway"].applicator.apply(partialParams)
        );
    }

    invokeUpdateLag(partialParams: ToOptional<{
      [K in keyof UpdateLagRequest & keyof UpdateLagRequest & keyof UpdateLagRequest & keyof UpdateLagRequest & keyof UpdateLagRequest & keyof UpdateLagRequest & keyof UpdateLagRequest & keyof UpdateLagRequest & keyof UpdateLagRequest & keyof UpdateLagRequest]: (UpdateLagRequest & UpdateLagRequest & UpdateLagRequest & UpdateLagRequest & UpdateLagRequest & UpdateLagRequest & UpdateLagRequest & UpdateLagRequest & UpdateLagRequest & UpdateLagRequest)[K]
    }>): Request<Lag, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateLag(
          this.ops["UpdateLag"].applicator.apply(partialParams)
        );
    }

    invokeUpdateVirtualInterfaceAttributes(partialParams: ToOptional<{
      [K in keyof UpdateVirtualInterfaceAttributesRequest & keyof UpdateVirtualInterfaceAttributesRequest & keyof UpdateVirtualInterfaceAttributesRequest & keyof UpdateVirtualInterfaceAttributesRequest & keyof UpdateVirtualInterfaceAttributesRequest & keyof UpdateVirtualInterfaceAttributesRequest & keyof UpdateVirtualInterfaceAttributesRequest & keyof UpdateVirtualInterfaceAttributesRequest & keyof UpdateVirtualInterfaceAttributesRequest & keyof UpdateVirtualInterfaceAttributesRequest]: (UpdateVirtualInterfaceAttributesRequest & UpdateVirtualInterfaceAttributesRequest & UpdateVirtualInterfaceAttributesRequest & UpdateVirtualInterfaceAttributesRequest & UpdateVirtualInterfaceAttributesRequest & UpdateVirtualInterfaceAttributesRequest & UpdateVirtualInterfaceAttributesRequest & UpdateVirtualInterfaceAttributesRequest & UpdateVirtualInterfaceAttributesRequest & UpdateVirtualInterfaceAttributesRequest)[K]
    }>): Request<VirtualInterface, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateVirtualInterfaceAttributes(
          this.ops["UpdateVirtualInterfaceAttributes"].applicator.apply(partialParams)
        );
    }
}