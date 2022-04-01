
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
    ConfirmCustomerAgreementRequest,
    ConfirmPrivateVirtualInterfaceRequest,
    ConfirmPublicVirtualInterfaceRequest,
    ConfirmTransitVirtualInterfaceRequest,
    CreateBGPPeerRequest,
    CreateConnectionRequest,
    CreateDirectConnectGatewayRequest,
    CreateDirectConnectGatewayAssociationRequest,
    CreateDirectConnectGatewayAssociationProposalRequest,
    CreateInterconnectRequest,
    CreateLagRequest,
    CreatePrivateVirtualInterfaceRequest,
    CreatePublicVirtualInterfaceRequest,
    CreateTransitVirtualInterfaceRequest,
    DeleteBGPPeerRequest,
    DeleteConnectionRequest,
    DeleteDirectConnectGatewayRequest,
    DeleteDirectConnectGatewayAssociationRequest,
    DeleteDirectConnectGatewayAssociationProposalRequest,
    DeleteInterconnectRequest,
    DeleteLagRequest,
    DeleteVirtualInterfaceRequest,
    DescribeConnectionLoaRequest,
    DescribeConnectionsRequest,
    DescribeConnectionsOnInterconnectRequest,
    DescribeDirectConnectGatewayAssociationProposalsRequest,
    DescribeDirectConnectGatewayAssociationsRequest,
    DescribeDirectConnectGatewayAttachmentsRequest,
    DescribeDirectConnectGatewaysRequest,
    DescribeHostedConnectionsRequest,
    DescribeInterconnectLoaRequest,
    DescribeInterconnectsRequest,
    DescribeLagsRequest,
    DescribeLoaRequest,
    DescribeRouterConfigurationRequest,
    DescribeTagsRequest,
    DescribeVirtualInterfacesRequest,
    DisassociateConnectionFromLagRequest,
    DisassociateMacSecKeyRequest,
    ListVirtualInterfaceTestHistoryRequest,
    StartBgpFailoverTestRequest,
    StopBgpFailoverTestRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateConnectionRequest,
    UpdateDirectConnectGatewayRequest,
    UpdateDirectConnectGatewayAssociationRequest,
    UpdateLagRequest,
    UpdateVirtualInterfaceAttributesRequest,
    AcceptDirectConnectGatewayAssociationProposalResult,
    Connection,
    VirtualInterface,
    AllocateTransitVirtualInterfaceResult,
    AssociateMacSecKeyResponse,
    ConfirmConnectionResponse,
    ConfirmCustomerAgreementResponse,
    ConfirmPrivateVirtualInterfaceResponse,
    ConfirmPublicVirtualInterfaceResponse,
    ConfirmTransitVirtualInterfaceResponse,
    CreateBGPPeerResponse,
    CreateDirectConnectGatewayResult,
    CreateDirectConnectGatewayAssociationResult,
    CreateDirectConnectGatewayAssociationProposalResult,
    Interconnect,
    Lag,
    CreateTransitVirtualInterfaceResult,
    DeleteBGPPeerResponse,
    DeleteDirectConnectGatewayResult,
    DeleteDirectConnectGatewayAssociationResult,
    DeleteDirectConnectGatewayAssociationProposalResult,
    DeleteInterconnectResponse,
    DeleteVirtualInterfaceResponse,
    DescribeConnectionLoaResponse,
    Connections,
    DescribeDirectConnectGatewayAssociationProposalsResult,
    DescribeDirectConnectGatewayAssociationsResult,
    DescribeDirectConnectGatewayAttachmentsResult,
    DescribeDirectConnectGatewaysResult,
    DescribeInterconnectLoaResponse,
    Interconnects,
    Lags,
    Loa,
    DescribeRouterConfigurationResponse,
    DescribeTagsResponse,
    VirtualInterfaces,
    DisassociateMacSecKeyResponse,
    ListVirtualInterfaceTestHistoryResponse,
    StartBgpFailoverTestResponse,
    StopBgpFailoverTestResponse,
    TagResourceResponse,
    UntagResourceResponse,
    UpdateDirectConnectGatewayResponse,
    UpdateDirectConnectGatewayAssociationResult
} from "aws-sdk/clients/directconnect";
const schema = require("../apis/directconnect-2012-10-25.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.directconnect.BgpPeer {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.directconnect.BgpPeer>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.DirectConnect()
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

    invokeAcceptDirectConnectGatewayAssociationProposal(partialParams: ToOptional<{
      [K in keyof AcceptDirectConnectGatewayAssociationProposalRequest]: (AcceptDirectConnectGatewayAssociationProposalRequest)[K]
    }>): Request<AcceptDirectConnectGatewayAssociationProposalResult, AWSError> {
        this.boot();
        return this.client.acceptDirectConnectGatewayAssociationProposal(
          this.ops["AcceptDirectConnectGatewayAssociationProposal"].apply(partialParams)
        );
    }

    invokeAllocateConnectionOnInterconnect(partialParams: ToOptional<{
      [K in keyof AllocateConnectionOnInterconnectRequest]: (AllocateConnectionOnInterconnectRequest)[K]
    }>): Request<Connection, AWSError> {
        this.boot();
        return this.client.allocateConnectionOnInterconnect(
          this.ops["AllocateConnectionOnInterconnect"].apply(partialParams)
        );
    }

    invokeAllocateHostedConnection(partialParams: ToOptional<{
      [K in keyof AllocateHostedConnectionRequest]: (AllocateHostedConnectionRequest)[K]
    }>): Request<Connection, AWSError> {
        this.boot();
        return this.client.allocateHostedConnection(
          this.ops["AllocateHostedConnection"].apply(partialParams)
        );
    }

    invokeAllocatePrivateVirtualInterface(partialParams: ToOptional<{
      [K in keyof AllocatePrivateVirtualInterfaceRequest]: (AllocatePrivateVirtualInterfaceRequest)[K]
    }>): Request<VirtualInterface, AWSError> {
        this.boot();
        return this.client.allocatePrivateVirtualInterface(
          this.ops["AllocatePrivateVirtualInterface"].apply(partialParams)
        );
    }

    invokeAllocatePublicVirtualInterface(partialParams: ToOptional<{
      [K in keyof AllocatePublicVirtualInterfaceRequest]: (AllocatePublicVirtualInterfaceRequest)[K]
    }>): Request<VirtualInterface, AWSError> {
        this.boot();
        return this.client.allocatePublicVirtualInterface(
          this.ops["AllocatePublicVirtualInterface"].apply(partialParams)
        );
    }

    invokeAllocateTransitVirtualInterface(partialParams: ToOptional<{
      [K in keyof AllocateTransitVirtualInterfaceRequest]: (AllocateTransitVirtualInterfaceRequest)[K]
    }>): Request<AllocateTransitVirtualInterfaceResult, AWSError> {
        this.boot();
        return this.client.allocateTransitVirtualInterface(
          this.ops["AllocateTransitVirtualInterface"].apply(partialParams)
        );
    }

    invokeAssociateConnectionWithLag(partialParams: ToOptional<{
      [K in keyof AssociateConnectionWithLagRequest]: (AssociateConnectionWithLagRequest)[K]
    }>): Request<Connection, AWSError> {
        this.boot();
        return this.client.associateConnectionWithLag(
          this.ops["AssociateConnectionWithLag"].apply(partialParams)
        );
    }

    invokeAssociateHostedConnection(partialParams: ToOptional<{
      [K in keyof AssociateHostedConnectionRequest]: (AssociateHostedConnectionRequest)[K]
    }>): Request<Connection, AWSError> {
        this.boot();
        return this.client.associateHostedConnection(
          this.ops["AssociateHostedConnection"].apply(partialParams)
        );
    }

    invokeAssociateMacSecKey(partialParams: ToOptional<{
      [K in keyof AssociateMacSecKeyRequest]: (AssociateMacSecKeyRequest)[K]
    }>): Request<AssociateMacSecKeyResponse, AWSError> {
        this.boot();
        return this.client.associateMacSecKey(
          this.ops["AssociateMacSecKey"].apply(partialParams)
        );
    }

    invokeAssociateVirtualInterface(partialParams: ToOptional<{
      [K in keyof AssociateVirtualInterfaceRequest]: (AssociateVirtualInterfaceRequest)[K]
    }>): Request<VirtualInterface, AWSError> {
        this.boot();
        return this.client.associateVirtualInterface(
          this.ops["AssociateVirtualInterface"].apply(partialParams)
        );
    }

    invokeConfirmConnection(partialParams: ToOptional<{
      [K in keyof ConfirmConnectionRequest]: (ConfirmConnectionRequest)[K]
    }>): Request<ConfirmConnectionResponse, AWSError> {
        this.boot();
        return this.client.confirmConnection(
          this.ops["ConfirmConnection"].apply(partialParams)
        );
    }

    invokeConfirmCustomerAgreement(partialParams: ToOptional<{
      [K in keyof ConfirmCustomerAgreementRequest]: (ConfirmCustomerAgreementRequest)[K]
    }>): Request<ConfirmCustomerAgreementResponse, AWSError> {
        this.boot();
        return this.client.confirmCustomerAgreement(
          this.ops["ConfirmCustomerAgreement"].apply(partialParams)
        );
    }

    invokeConfirmPrivateVirtualInterface(partialParams: ToOptional<{
      [K in keyof ConfirmPrivateVirtualInterfaceRequest]: (ConfirmPrivateVirtualInterfaceRequest)[K]
    }>): Request<ConfirmPrivateVirtualInterfaceResponse, AWSError> {
        this.boot();
        return this.client.confirmPrivateVirtualInterface(
          this.ops["ConfirmPrivateVirtualInterface"].apply(partialParams)
        );
    }

    invokeConfirmPublicVirtualInterface(partialParams: ToOptional<{
      [K in keyof ConfirmPublicVirtualInterfaceRequest]: (ConfirmPublicVirtualInterfaceRequest)[K]
    }>): Request<ConfirmPublicVirtualInterfaceResponse, AWSError> {
        this.boot();
        return this.client.confirmPublicVirtualInterface(
          this.ops["ConfirmPublicVirtualInterface"].apply(partialParams)
        );
    }

    invokeConfirmTransitVirtualInterface(partialParams: ToOptional<{
      [K in keyof ConfirmTransitVirtualInterfaceRequest]: (ConfirmTransitVirtualInterfaceRequest)[K]
    }>): Request<ConfirmTransitVirtualInterfaceResponse, AWSError> {
        this.boot();
        return this.client.confirmTransitVirtualInterface(
          this.ops["ConfirmTransitVirtualInterface"].apply(partialParams)
        );
    }

    invokeCreateBGPPeer(partialParams: ToOptional<{
      [K in keyof CreateBGPPeerRequest]: (CreateBGPPeerRequest)[K]
    }>): Request<CreateBGPPeerResponse, AWSError> {
        this.boot();
        return this.client.createBGPPeer(
          this.ops["CreateBGPPeer"].apply(partialParams)
        );
    }

    invokeCreateConnection(partialParams: ToOptional<{
      [K in keyof CreateConnectionRequest]: (CreateConnectionRequest)[K]
    }>): Request<Connection, AWSError> {
        this.boot();
        return this.client.createConnection(
          this.ops["CreateConnection"].apply(partialParams)
        );
    }

    invokeCreateDirectConnectGateway(partialParams: ToOptional<{
      [K in keyof CreateDirectConnectGatewayRequest]: (CreateDirectConnectGatewayRequest)[K]
    }>): Request<CreateDirectConnectGatewayResult, AWSError> {
        this.boot();
        return this.client.createDirectConnectGateway(
          this.ops["CreateDirectConnectGateway"].apply(partialParams)
        );
    }

    invokeCreateDirectConnectGatewayAssociation(partialParams: ToOptional<{
      [K in keyof CreateDirectConnectGatewayAssociationRequest]: (CreateDirectConnectGatewayAssociationRequest)[K]
    }>): Request<CreateDirectConnectGatewayAssociationResult, AWSError> {
        this.boot();
        return this.client.createDirectConnectGatewayAssociation(
          this.ops["CreateDirectConnectGatewayAssociation"].apply(partialParams)
        );
    }

    invokeCreateDirectConnectGatewayAssociationProposal(partialParams: ToOptional<{
      [K in keyof CreateDirectConnectGatewayAssociationProposalRequest]: (CreateDirectConnectGatewayAssociationProposalRequest)[K]
    }>): Request<CreateDirectConnectGatewayAssociationProposalResult, AWSError> {
        this.boot();
        return this.client.createDirectConnectGatewayAssociationProposal(
          this.ops["CreateDirectConnectGatewayAssociationProposal"].apply(partialParams)
        );
    }

    invokeCreateInterconnect(partialParams: ToOptional<{
      [K in keyof CreateInterconnectRequest]: (CreateInterconnectRequest)[K]
    }>): Request<Interconnect, AWSError> {
        this.boot();
        return this.client.createInterconnect(
          this.ops["CreateInterconnect"].apply(partialParams)
        );
    }

    invokeCreateLag(partialParams: ToOptional<{
      [K in keyof CreateLagRequest]: (CreateLagRequest)[K]
    }>): Request<Lag, AWSError> {
        this.boot();
        return this.client.createLag(
          this.ops["CreateLag"].apply(partialParams)
        );
    }

    invokeCreatePrivateVirtualInterface(partialParams: ToOptional<{
      [K in keyof CreatePrivateVirtualInterfaceRequest]: (CreatePrivateVirtualInterfaceRequest)[K]
    }>): Request<VirtualInterface, AWSError> {
        this.boot();
        return this.client.createPrivateVirtualInterface(
          this.ops["CreatePrivateVirtualInterface"].apply(partialParams)
        );
    }

    invokeCreatePublicVirtualInterface(partialParams: ToOptional<{
      [K in keyof CreatePublicVirtualInterfaceRequest]: (CreatePublicVirtualInterfaceRequest)[K]
    }>): Request<VirtualInterface, AWSError> {
        this.boot();
        return this.client.createPublicVirtualInterface(
          this.ops["CreatePublicVirtualInterface"].apply(partialParams)
        );
    }

    invokeCreateTransitVirtualInterface(partialParams: ToOptional<{
      [K in keyof CreateTransitVirtualInterfaceRequest]: (CreateTransitVirtualInterfaceRequest)[K]
    }>): Request<CreateTransitVirtualInterfaceResult, AWSError> {
        this.boot();
        return this.client.createTransitVirtualInterface(
          this.ops["CreateTransitVirtualInterface"].apply(partialParams)
        );
    }

    invokeDeleteBGPPeer(partialParams: ToOptional<{
      [K in keyof DeleteBGPPeerRequest]: (DeleteBGPPeerRequest)[K]
    }>): Request<DeleteBGPPeerResponse, AWSError> {
        this.boot();
        return this.client.deleteBGPPeer(
          this.ops["DeleteBGPPeer"].apply(partialParams)
        );
    }

    invokeDeleteConnection(partialParams: ToOptional<{
      [K in keyof DeleteConnectionRequest]: (DeleteConnectionRequest)[K]
    }>): Request<Connection, AWSError> {
        this.boot();
        return this.client.deleteConnection(
          this.ops["DeleteConnection"].apply(partialParams)
        );
    }

    invokeDeleteDirectConnectGateway(partialParams: ToOptional<{
      [K in keyof DeleteDirectConnectGatewayRequest]: (DeleteDirectConnectGatewayRequest)[K]
    }>): Request<DeleteDirectConnectGatewayResult, AWSError> {
        this.boot();
        return this.client.deleteDirectConnectGateway(
          this.ops["DeleteDirectConnectGateway"].apply(partialParams)
        );
    }

    invokeDeleteDirectConnectGatewayAssociation(partialParams: ToOptional<{
      [K in keyof DeleteDirectConnectGatewayAssociationRequest]: (DeleteDirectConnectGatewayAssociationRequest)[K]
    }>): Request<DeleteDirectConnectGatewayAssociationResult, AWSError> {
        this.boot();
        return this.client.deleteDirectConnectGatewayAssociation(
          this.ops["DeleteDirectConnectGatewayAssociation"].apply(partialParams)
        );
    }

    invokeDeleteDirectConnectGatewayAssociationProposal(partialParams: ToOptional<{
      [K in keyof DeleteDirectConnectGatewayAssociationProposalRequest]: (DeleteDirectConnectGatewayAssociationProposalRequest)[K]
    }>): Request<DeleteDirectConnectGatewayAssociationProposalResult, AWSError> {
        this.boot();
        return this.client.deleteDirectConnectGatewayAssociationProposal(
          this.ops["DeleteDirectConnectGatewayAssociationProposal"].apply(partialParams)
        );
    }

    invokeDeleteInterconnect(partialParams: ToOptional<{
      [K in keyof DeleteInterconnectRequest]: (DeleteInterconnectRequest)[K]
    }>): Request<DeleteInterconnectResponse, AWSError> {
        this.boot();
        return this.client.deleteInterconnect(
          this.ops["DeleteInterconnect"].apply(partialParams)
        );
    }

    invokeDeleteLag(partialParams: ToOptional<{
      [K in keyof DeleteLagRequest]: (DeleteLagRequest)[K]
    }>): Request<Lag, AWSError> {
        this.boot();
        return this.client.deleteLag(
          this.ops["DeleteLag"].apply(partialParams)
        );
    }

    invokeDeleteVirtualInterface(partialParams: ToOptional<{
      [K in keyof DeleteVirtualInterfaceRequest]: (DeleteVirtualInterfaceRequest)[K]
    }>): Request<DeleteVirtualInterfaceResponse, AWSError> {
        this.boot();
        return this.client.deleteVirtualInterface(
          this.ops["DeleteVirtualInterface"].apply(partialParams)
        );
    }

    invokeDescribeConnectionLoa(partialParams: ToOptional<{
      [K in keyof DescribeConnectionLoaRequest]: (DescribeConnectionLoaRequest)[K]
    }>): Request<DescribeConnectionLoaResponse, AWSError> {
        this.boot();
        return this.client.describeConnectionLoa(
          this.ops["DescribeConnectionLoa"].apply(partialParams)
        );
    }

    invokeDescribeConnections(partialParams: ToOptional<{
      [K in keyof DescribeConnectionsRequest]: (DescribeConnectionsRequest)[K]
    }>): Request<Connections, AWSError> {
        this.boot();
        return this.client.describeConnections(
          this.ops["DescribeConnections"].apply(partialParams)
        );
    }

    invokeDescribeConnectionsOnInterconnect(partialParams: ToOptional<{
      [K in keyof DescribeConnectionsOnInterconnectRequest]: (DescribeConnectionsOnInterconnectRequest)[K]
    }>): Request<Connections, AWSError> {
        this.boot();
        return this.client.describeConnectionsOnInterconnect(
          this.ops["DescribeConnectionsOnInterconnect"].apply(partialParams)
        );
    }

    invokeDescribeDirectConnectGatewayAssociationProposals(partialParams: ToOptional<{
      [K in keyof DescribeDirectConnectGatewayAssociationProposalsRequest]: (DescribeDirectConnectGatewayAssociationProposalsRequest)[K]
    }>): Request<DescribeDirectConnectGatewayAssociationProposalsResult, AWSError> {
        this.boot();
        return this.client.describeDirectConnectGatewayAssociationProposals(
          this.ops["DescribeDirectConnectGatewayAssociationProposals"].apply(partialParams)
        );
    }

    invokeDescribeDirectConnectGatewayAssociations(partialParams: ToOptional<{
      [K in keyof DescribeDirectConnectGatewayAssociationsRequest]: (DescribeDirectConnectGatewayAssociationsRequest)[K]
    }>): Request<DescribeDirectConnectGatewayAssociationsResult, AWSError> {
        this.boot();
        return this.client.describeDirectConnectGatewayAssociations(
          this.ops["DescribeDirectConnectGatewayAssociations"].apply(partialParams)
        );
    }

    invokeDescribeDirectConnectGatewayAttachments(partialParams: ToOptional<{
      [K in keyof DescribeDirectConnectGatewayAttachmentsRequest]: (DescribeDirectConnectGatewayAttachmentsRequest)[K]
    }>): Request<DescribeDirectConnectGatewayAttachmentsResult, AWSError> {
        this.boot();
        return this.client.describeDirectConnectGatewayAttachments(
          this.ops["DescribeDirectConnectGatewayAttachments"].apply(partialParams)
        );
    }

    invokeDescribeDirectConnectGateways(partialParams: ToOptional<{
      [K in keyof DescribeDirectConnectGatewaysRequest]: (DescribeDirectConnectGatewaysRequest)[K]
    }>): Request<DescribeDirectConnectGatewaysResult, AWSError> {
        this.boot();
        return this.client.describeDirectConnectGateways(
          this.ops["DescribeDirectConnectGateways"].apply(partialParams)
        );
    }

    invokeDescribeHostedConnections(partialParams: ToOptional<{
      [K in keyof DescribeHostedConnectionsRequest]: (DescribeHostedConnectionsRequest)[K]
    }>): Request<Connections, AWSError> {
        this.boot();
        return this.client.describeHostedConnections(
          this.ops["DescribeHostedConnections"].apply(partialParams)
        );
    }

    invokeDescribeInterconnectLoa(partialParams: ToOptional<{
      [K in keyof DescribeInterconnectLoaRequest]: (DescribeInterconnectLoaRequest)[K]
    }>): Request<DescribeInterconnectLoaResponse, AWSError> {
        this.boot();
        return this.client.describeInterconnectLoa(
          this.ops["DescribeInterconnectLoa"].apply(partialParams)
        );
    }

    invokeDescribeInterconnects(partialParams: ToOptional<{
      [K in keyof DescribeInterconnectsRequest]: (DescribeInterconnectsRequest)[K]
    }>): Request<Interconnects, AWSError> {
        this.boot();
        return this.client.describeInterconnects(
          this.ops["DescribeInterconnects"].apply(partialParams)
        );
    }

    invokeDescribeLags(partialParams: ToOptional<{
      [K in keyof DescribeLagsRequest]: (DescribeLagsRequest)[K]
    }>): Request<Lags, AWSError> {
        this.boot();
        return this.client.describeLags(
          this.ops["DescribeLags"].apply(partialParams)
        );
    }

    invokeDescribeLoa(partialParams: ToOptional<{
      [K in keyof DescribeLoaRequest]: (DescribeLoaRequest)[K]
    }>): Request<Loa, AWSError> {
        this.boot();
        return this.client.describeLoa(
          this.ops["DescribeLoa"].apply(partialParams)
        );
    }

    invokeDescribeRouterConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeRouterConfigurationRequest]: (DescribeRouterConfigurationRequest)[K]
    }>): Request<DescribeRouterConfigurationResponse, AWSError> {
        this.boot();
        return this.client.describeRouterConfiguration(
          this.ops["DescribeRouterConfiguration"].apply(partialParams)
        );
    }

    invokeDescribeTags(partialParams: ToOptional<{
      [K in keyof DescribeTagsRequest]: (DescribeTagsRequest)[K]
    }>): Request<DescribeTagsResponse, AWSError> {
        this.boot();
        return this.client.describeTags(
          this.ops["DescribeTags"].apply(partialParams)
        );
    }

    invokeDescribeVirtualInterfaces(partialParams: ToOptional<{
      [K in keyof DescribeVirtualInterfacesRequest]: (DescribeVirtualInterfacesRequest)[K]
    }>): Request<VirtualInterfaces, AWSError> {
        this.boot();
        return this.client.describeVirtualInterfaces(
          this.ops["DescribeVirtualInterfaces"].apply(partialParams)
        );
    }

    invokeDisassociateConnectionFromLag(partialParams: ToOptional<{
      [K in keyof DisassociateConnectionFromLagRequest]: (DisassociateConnectionFromLagRequest)[K]
    }>): Request<Connection, AWSError> {
        this.boot();
        return this.client.disassociateConnectionFromLag(
          this.ops["DisassociateConnectionFromLag"].apply(partialParams)
        );
    }

    invokeDisassociateMacSecKey(partialParams: ToOptional<{
      [K in keyof DisassociateMacSecKeyRequest]: (DisassociateMacSecKeyRequest)[K]
    }>): Request<DisassociateMacSecKeyResponse, AWSError> {
        this.boot();
        return this.client.disassociateMacSecKey(
          this.ops["DisassociateMacSecKey"].apply(partialParams)
        );
    }

    invokeListVirtualInterfaceTestHistory(partialParams: ToOptional<{
      [K in keyof ListVirtualInterfaceTestHistoryRequest]: (ListVirtualInterfaceTestHistoryRequest)[K]
    }>): Request<ListVirtualInterfaceTestHistoryResponse, AWSError> {
        this.boot();
        return this.client.listVirtualInterfaceTestHistory(
          this.ops["ListVirtualInterfaceTestHistory"].apply(partialParams)
        );
    }

    invokeStartBgpFailoverTest(partialParams: ToOptional<{
      [K in keyof StartBgpFailoverTestRequest]: (StartBgpFailoverTestRequest)[K]
    }>): Request<StartBgpFailoverTestResponse, AWSError> {
        this.boot();
        return this.client.startBgpFailoverTest(
          this.ops["StartBgpFailoverTest"].apply(partialParams)
        );
    }

    invokeStopBgpFailoverTest(partialParams: ToOptional<{
      [K in keyof StopBgpFailoverTestRequest]: (StopBgpFailoverTestRequest)[K]
    }>): Request<StopBgpFailoverTestResponse, AWSError> {
        this.boot();
        return this.client.stopBgpFailoverTest(
          this.ops["StopBgpFailoverTest"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest]: (TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest]: (UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateConnection(partialParams: ToOptional<{
      [K in keyof UpdateConnectionRequest]: (UpdateConnectionRequest)[K]
    }>): Request<Connection, AWSError> {
        this.boot();
        return this.client.updateConnection(
          this.ops["UpdateConnection"].apply(partialParams)
        );
    }

    invokeUpdateDirectConnectGateway(partialParams: ToOptional<{
      [K in keyof UpdateDirectConnectGatewayRequest]: (UpdateDirectConnectGatewayRequest)[K]
    }>): Request<UpdateDirectConnectGatewayResponse, AWSError> {
        this.boot();
        return this.client.updateDirectConnectGateway(
          this.ops["UpdateDirectConnectGateway"].apply(partialParams)
        );
    }

    invokeUpdateDirectConnectGatewayAssociation(partialParams: ToOptional<{
      [K in keyof UpdateDirectConnectGatewayAssociationRequest]: (UpdateDirectConnectGatewayAssociationRequest)[K]
    }>): Request<UpdateDirectConnectGatewayAssociationResult, AWSError> {
        this.boot();
        return this.client.updateDirectConnectGatewayAssociation(
          this.ops["UpdateDirectConnectGatewayAssociation"].apply(partialParams)
        );
    }

    invokeUpdateLag(partialParams: ToOptional<{
      [K in keyof UpdateLagRequest]: (UpdateLagRequest)[K]
    }>): Request<Lag, AWSError> {
        this.boot();
        return this.client.updateLag(
          this.ops["UpdateLag"].apply(partialParams)
        );
    }

    invokeUpdateVirtualInterfaceAttributes(partialParams: ToOptional<{
      [K in keyof UpdateVirtualInterfaceAttributesRequest]: (UpdateVirtualInterfaceAttributesRequest)[K]
    }>): Request<VirtualInterface, AWSError> {
        this.boot();
        return this.client.updateVirtualInterfaceAttributes(
          this.ops["UpdateVirtualInterfaceAttributes"].apply(partialParams)
        );
    }
}