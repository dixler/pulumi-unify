
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.directconnect.ConnectionAssociation {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.directconnect.ConnectionAssociation>) {
        super(...args)
        this.client = new awssdk.DirectConnect()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/directconnect-2012-10-25.normal.json"), this.client)
    }

    invokeAcceptDirectConnectGatewayAssociationProposal(partialParams: ToOptional<{
      [K in keyof AcceptDirectConnectGatewayAssociationProposalRequest & keyof AcceptDirectConnectGatewayAssociationProposalRequest]: (AcceptDirectConnectGatewayAssociationProposalRequest & AcceptDirectConnectGatewayAssociationProposalRequest)[K]
    }>): AcceptDirectConnectGatewayAssociationProposalResult {
        return this.client.acceptDirectConnectGatewayAssociationProposal(
            this.ops["AcceptDirectConnectGatewayAssociationProposal"].apply(partialParams)
        );
    }

    invokeAllocateConnectionOnInterconnect(partialParams: ToOptional<{
      [K in keyof AllocateConnectionOnInterconnectRequest & keyof AllocateConnectionOnInterconnectRequest]: (AllocateConnectionOnInterconnectRequest & AllocateConnectionOnInterconnectRequest)[K]
    }>): Connection {
        return this.client.allocateConnectionOnInterconnect(
            this.ops["AllocateConnectionOnInterconnect"].apply(partialParams)
        );
    }

    invokeAllocateHostedConnection(partialParams: ToOptional<{
      [K in keyof AllocateHostedConnectionRequest & keyof AllocateHostedConnectionRequest]: (AllocateHostedConnectionRequest & AllocateHostedConnectionRequest)[K]
    }>): Connection {
        return this.client.allocateHostedConnection(
            this.ops["AllocateHostedConnection"].apply(partialParams)
        );
    }

    invokeAllocatePrivateVirtualInterface(partialParams: ToOptional<{
      [K in keyof AllocatePrivateVirtualInterfaceRequest & keyof AllocatePrivateVirtualInterfaceRequest]: (AllocatePrivateVirtualInterfaceRequest & AllocatePrivateVirtualInterfaceRequest)[K]
    }>): VirtualInterface {
        return this.client.allocatePrivateVirtualInterface(
            this.ops["AllocatePrivateVirtualInterface"].apply(partialParams)
        );
    }

    invokeAllocatePublicVirtualInterface(partialParams: ToOptional<{
      [K in keyof AllocatePublicVirtualInterfaceRequest & keyof AllocatePublicVirtualInterfaceRequest]: (AllocatePublicVirtualInterfaceRequest & AllocatePublicVirtualInterfaceRequest)[K]
    }>): VirtualInterface {
        return this.client.allocatePublicVirtualInterface(
            this.ops["AllocatePublicVirtualInterface"].apply(partialParams)
        );
    }

    invokeAllocateTransitVirtualInterface(partialParams: ToOptional<{
      [K in keyof AllocateTransitVirtualInterfaceRequest & keyof AllocateTransitVirtualInterfaceRequest]: (AllocateTransitVirtualInterfaceRequest & AllocateTransitVirtualInterfaceRequest)[K]
    }>): AllocateTransitVirtualInterfaceResult {
        return this.client.allocateTransitVirtualInterface(
            this.ops["AllocateTransitVirtualInterface"].apply(partialParams)
        );
    }

    invokeAssociateConnectionWithLag(partialParams: ToOptional<{
      [K in keyof AssociateConnectionWithLagRequest & keyof AssociateConnectionWithLagRequest]: (AssociateConnectionWithLagRequest & AssociateConnectionWithLagRequest)[K]
    }>): Connection {
        return this.client.associateConnectionWithLag(
            this.ops["AssociateConnectionWithLag"].apply(partialParams)
        );
    }

    invokeAssociateHostedConnection(partialParams: ToOptional<{
      [K in keyof AssociateHostedConnectionRequest & keyof AssociateHostedConnectionRequest]: (AssociateHostedConnectionRequest & AssociateHostedConnectionRequest)[K]
    }>): Connection {
        return this.client.associateHostedConnection(
            this.ops["AssociateHostedConnection"].apply(partialParams)
        );
    }

    invokeAssociateMacSecKey(partialParams: ToOptional<{
      [K in keyof AssociateMacSecKeyRequest & keyof AssociateMacSecKeyRequest]: (AssociateMacSecKeyRequest & AssociateMacSecKeyRequest)[K]
    }>): AssociateMacSecKeyResponse {
        return this.client.associateMacSecKey(
            this.ops["AssociateMacSecKey"].apply(partialParams)
        );
    }

    invokeAssociateVirtualInterface(partialParams: ToOptional<{
      [K in keyof AssociateVirtualInterfaceRequest & keyof AssociateVirtualInterfaceRequest]: (AssociateVirtualInterfaceRequest & AssociateVirtualInterfaceRequest)[K]
    }>): VirtualInterface {
        return this.client.associateVirtualInterface(
            this.ops["AssociateVirtualInterface"].apply(partialParams)
        );
    }

    invokeConfirmConnection(partialParams: ToOptional<{
      [K in keyof ConfirmConnectionRequest & keyof ConfirmConnectionRequest]: (ConfirmConnectionRequest & ConfirmConnectionRequest)[K]
    }>): ConfirmConnectionResponse {
        return this.client.confirmConnection(
            this.ops["ConfirmConnection"].apply(partialParams)
        );
    }

    invokeConfirmPrivateVirtualInterface(partialParams: ToOptional<{
      [K in keyof ConfirmPrivateVirtualInterfaceRequest & keyof ConfirmPrivateVirtualInterfaceRequest]: (ConfirmPrivateVirtualInterfaceRequest & ConfirmPrivateVirtualInterfaceRequest)[K]
    }>): ConfirmPrivateVirtualInterfaceResponse {
        return this.client.confirmPrivateVirtualInterface(
            this.ops["ConfirmPrivateVirtualInterface"].apply(partialParams)
        );
    }

    invokeConfirmPublicVirtualInterface(partialParams: ToOptional<{
      [K in keyof ConfirmPublicVirtualInterfaceRequest & keyof ConfirmPublicVirtualInterfaceRequest]: (ConfirmPublicVirtualInterfaceRequest & ConfirmPublicVirtualInterfaceRequest)[K]
    }>): ConfirmPublicVirtualInterfaceResponse {
        return this.client.confirmPublicVirtualInterface(
            this.ops["ConfirmPublicVirtualInterface"].apply(partialParams)
        );
    }

    invokeConfirmTransitVirtualInterface(partialParams: ToOptional<{
      [K in keyof ConfirmTransitVirtualInterfaceRequest & keyof ConfirmTransitVirtualInterfaceRequest]: (ConfirmTransitVirtualInterfaceRequest & ConfirmTransitVirtualInterfaceRequest)[K]
    }>): ConfirmTransitVirtualInterfaceResponse {
        return this.client.confirmTransitVirtualInterface(
            this.ops["ConfirmTransitVirtualInterface"].apply(partialParams)
        );
    }

    invokeCreateConnection(partialParams: ToOptional<{
      [K in keyof CreateConnectionRequest & keyof CreateConnectionRequest]: (CreateConnectionRequest & CreateConnectionRequest)[K]
    }>): Connection {
        return this.client.createConnection(
            this.ops["CreateConnection"].apply(partialParams)
        );
    }

    invokeCreateDirectConnectGateway(partialParams: ToOptional<{
      [K in keyof CreateDirectConnectGatewayRequest & keyof CreateDirectConnectGatewayRequest]: (CreateDirectConnectGatewayRequest & CreateDirectConnectGatewayRequest)[K]
    }>): CreateDirectConnectGatewayResult {
        return this.client.createDirectConnectGateway(
            this.ops["CreateDirectConnectGateway"].apply(partialParams)
        );
    }

    invokeCreateDirectConnectGatewayAssociation(partialParams: ToOptional<{
      [K in keyof CreateDirectConnectGatewayAssociationRequest & keyof CreateDirectConnectGatewayAssociationRequest]: (CreateDirectConnectGatewayAssociationRequest & CreateDirectConnectGatewayAssociationRequest)[K]
    }>): CreateDirectConnectGatewayAssociationResult {
        return this.client.createDirectConnectGatewayAssociation(
            this.ops["CreateDirectConnectGatewayAssociation"].apply(partialParams)
        );
    }

    invokeCreateDirectConnectGatewayAssociationProposal(partialParams: ToOptional<{
      [K in keyof CreateDirectConnectGatewayAssociationProposalRequest & keyof CreateDirectConnectGatewayAssociationProposalRequest]: (CreateDirectConnectGatewayAssociationProposalRequest & CreateDirectConnectGatewayAssociationProposalRequest)[K]
    }>): CreateDirectConnectGatewayAssociationProposalResult {
        return this.client.createDirectConnectGatewayAssociationProposal(
            this.ops["CreateDirectConnectGatewayAssociationProposal"].apply(partialParams)
        );
    }

    invokeCreateInterconnect(partialParams: ToOptional<{
      [K in keyof CreateInterconnectRequest & keyof CreateInterconnectRequest]: (CreateInterconnectRequest & CreateInterconnectRequest)[K]
    }>): Interconnect {
        return this.client.createInterconnect(
            this.ops["CreateInterconnect"].apply(partialParams)
        );
    }

    invokeCreateLag(partialParams: ToOptional<{
      [K in keyof CreateLagRequest & keyof CreateLagRequest]: (CreateLagRequest & CreateLagRequest)[K]
    }>): Lag {
        return this.client.createLag(
            this.ops["CreateLag"].apply(partialParams)
        );
    }

    invokeCreatePrivateVirtualInterface(partialParams: ToOptional<{
      [K in keyof Omit<CreatePrivateVirtualInterfaceRequest, "connectionId"> & keyof CreatePrivateVirtualInterfaceRequest]: (Omit<CreatePrivateVirtualInterfaceRequest, "connectionId"> & CreatePrivateVirtualInterfaceRequest)[K]
    }>): VirtualInterface {
        return this.client.createPrivateVirtualInterface(
            this.ops["CreatePrivateVirtualInterface"].apply(partialParams)
        );
    }

    invokeCreatePublicVirtualInterface(partialParams: ToOptional<{
      [K in keyof Omit<CreatePublicVirtualInterfaceRequest, "connectionId"> & keyof CreatePublicVirtualInterfaceRequest]: (Omit<CreatePublicVirtualInterfaceRequest, "connectionId"> & CreatePublicVirtualInterfaceRequest)[K]
    }>): VirtualInterface {
        return this.client.createPublicVirtualInterface(
            this.ops["CreatePublicVirtualInterface"].apply(partialParams)
        );
    }

    invokeCreateTransitVirtualInterface(partialParams: ToOptional<{
      [K in keyof Omit<CreateTransitVirtualInterfaceRequest, "connectionId"> & keyof CreateTransitVirtualInterfaceRequest]: (Omit<CreateTransitVirtualInterfaceRequest, "connectionId"> & CreateTransitVirtualInterfaceRequest)[K]
    }>): CreateTransitVirtualInterfaceResult {
        return this.client.createTransitVirtualInterface(
            this.ops["CreateTransitVirtualInterface"].apply(partialParams)
        );
    }

    invokeDeleteConnection(partialParams: ToOptional<{
      [K in keyof Omit<DeleteConnectionRequest, "connectionId"> & keyof DeleteConnectionRequest]: (Omit<DeleteConnectionRequest, "connectionId"> & DeleteConnectionRequest)[K]
    }>): Connection {
        return this.client.deleteConnection(
            this.ops["DeleteConnection"].apply(partialParams)
        );
    }

    invokeDeleteDirectConnectGateway(partialParams: ToOptional<{
      [K in keyof DeleteDirectConnectGatewayRequest & keyof DeleteDirectConnectGatewayRequest]: (DeleteDirectConnectGatewayRequest & DeleteDirectConnectGatewayRequest)[K]
    }>): DeleteDirectConnectGatewayResult {
        return this.client.deleteDirectConnectGateway(
            this.ops["DeleteDirectConnectGateway"].apply(partialParams)
        );
    }

    invokeDeleteDirectConnectGatewayAssociationProposal(partialParams: ToOptional<{
      [K in keyof DeleteDirectConnectGatewayAssociationProposalRequest & keyof DeleteDirectConnectGatewayAssociationProposalRequest]: (DeleteDirectConnectGatewayAssociationProposalRequest & DeleteDirectConnectGatewayAssociationProposalRequest)[K]
    }>): DeleteDirectConnectGatewayAssociationProposalResult {
        return this.client.deleteDirectConnectGatewayAssociationProposal(
            this.ops["DeleteDirectConnectGatewayAssociationProposal"].apply(partialParams)
        );
    }

    invokeDeleteInterconnect(partialParams: ToOptional<{
      [K in keyof DeleteInterconnectRequest & keyof DeleteInterconnectRequest]: (DeleteInterconnectRequest & DeleteInterconnectRequest)[K]
    }>): DeleteInterconnectResponse {
        return this.client.deleteInterconnect(
            this.ops["DeleteInterconnect"].apply(partialParams)
        );
    }

    invokeDeleteLag(partialParams: ToOptional<{
      [K in keyof DeleteLagRequest & keyof DeleteLagRequest]: (DeleteLagRequest & DeleteLagRequest)[K]
    }>): Lag {
        return this.client.deleteLag(
            this.ops["DeleteLag"].apply(partialParams)
        );
    }

    invokeDeleteVirtualInterface(partialParams: ToOptional<{
      [K in keyof DeleteVirtualInterfaceRequest & keyof DeleteVirtualInterfaceRequest]: (DeleteVirtualInterfaceRequest & DeleteVirtualInterfaceRequest)[K]
    }>): DeleteVirtualInterfaceResponse {
        return this.client.deleteVirtualInterface(
            this.ops["DeleteVirtualInterface"].apply(partialParams)
        );
    }

    invokeDescribeConnectionLoa(partialParams: ToOptional<{
      [K in keyof Omit<DescribeConnectionLoaRequest, "connectionId"> & keyof DescribeConnectionLoaRequest]: (Omit<DescribeConnectionLoaRequest, "connectionId"> & DescribeConnectionLoaRequest)[K]
    }>): DescribeConnectionLoaResponse {
        return this.client.describeConnectionLoa(
            this.ops["DescribeConnectionLoa"].apply(partialParams)
        );
    }

    invokeDescribeConnectionsOnInterconnect(partialParams: ToOptional<{
      [K in keyof DescribeConnectionsOnInterconnectRequest & keyof DescribeConnectionsOnInterconnectRequest]: (DescribeConnectionsOnInterconnectRequest & DescribeConnectionsOnInterconnectRequest)[K]
    }>): Connections {
        return this.client.describeConnectionsOnInterconnect(
            this.ops["DescribeConnectionsOnInterconnect"].apply(partialParams)
        );
    }

    invokeDescribeHostedConnections(partialParams: ToOptional<{
      [K in keyof Omit<DescribeHostedConnectionsRequest, "connectionId"> & keyof DescribeHostedConnectionsRequest]: (Omit<DescribeHostedConnectionsRequest, "connectionId"> & DescribeHostedConnectionsRequest)[K]
    }>): Connections {
        return this.client.describeHostedConnections(
            this.ops["DescribeHostedConnections"].apply(partialParams)
        );
    }

    invokeDescribeInterconnectLoa(partialParams: ToOptional<{
      [K in keyof DescribeInterconnectLoaRequest & keyof DescribeInterconnectLoaRequest]: (DescribeInterconnectLoaRequest & DescribeInterconnectLoaRequest)[K]
    }>): DescribeInterconnectLoaResponse {
        return this.client.describeInterconnectLoa(
            this.ops["DescribeInterconnectLoa"].apply(partialParams)
        );
    }

    invokeDescribeLoa(partialParams: ToOptional<{
      [K in keyof Omit<DescribeLoaRequest, "connectionId"> & keyof DescribeLoaRequest]: (Omit<DescribeLoaRequest, "connectionId"> & DescribeLoaRequest)[K]
    }>): Loa {
        return this.client.describeLoa(
            this.ops["DescribeLoa"].apply(partialParams)
        );
    }

    invokeDescribeRouterConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeRouterConfigurationRequest & keyof DescribeRouterConfigurationRequest]: (DescribeRouterConfigurationRequest & DescribeRouterConfigurationRequest)[K]
    }>): DescribeRouterConfigurationResponse {
        return this.client.describeRouterConfiguration(
            this.ops["DescribeRouterConfiguration"].apply(partialParams)
        );
    }

    invokeDescribeTags(partialParams: ToOptional<{
      [K in keyof DescribeTagsRequest & keyof DescribeTagsRequest]: (DescribeTagsRequest & DescribeTagsRequest)[K]
    }>): DescribeTagsResponse {
        return this.client.describeTags(
            this.ops["DescribeTags"].apply(partialParams)
        );
    }

    invokeDisassociateConnectionFromLag(partialParams: ToOptional<{
      [K in keyof Omit<DisassociateConnectionFromLagRequest, "connectionId"> & keyof DisassociateConnectionFromLagRequest]: (Omit<DisassociateConnectionFromLagRequest, "connectionId"> & DisassociateConnectionFromLagRequest)[K]
    }>): Connection {
        return this.client.disassociateConnectionFromLag(
            this.ops["DisassociateConnectionFromLag"].apply(partialParams)
        );
    }

    invokeDisassociateMacSecKey(partialParams: ToOptional<{
      [K in keyof Omit<DisassociateMacSecKeyRequest, "connectionId"> & keyof DisassociateMacSecKeyRequest]: (Omit<DisassociateMacSecKeyRequest, "connectionId"> & DisassociateMacSecKeyRequest)[K]
    }>): DisassociateMacSecKeyResponse {
        return this.client.disassociateMacSecKey(
            this.ops["DisassociateMacSecKey"].apply(partialParams)
        );
    }

    invokeStartBgpFailoverTest(partialParams: ToOptional<{
      [K in keyof StartBgpFailoverTestRequest & keyof StartBgpFailoverTestRequest]: (StartBgpFailoverTestRequest & StartBgpFailoverTestRequest)[K]
    }>): StartBgpFailoverTestResponse {
        return this.client.startBgpFailoverTest(
            this.ops["StartBgpFailoverTest"].apply(partialParams)
        );
    }

    invokeStopBgpFailoverTest(partialParams: ToOptional<{
      [K in keyof StopBgpFailoverTestRequest & keyof StopBgpFailoverTestRequest]: (StopBgpFailoverTestRequest & StopBgpFailoverTestRequest)[K]
    }>): StopBgpFailoverTestResponse {
        return this.client.stopBgpFailoverTest(
            this.ops["StopBgpFailoverTest"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateConnection(partialParams: ToOptional<{
      [K in keyof Omit<UpdateConnectionRequest, "connectionId"> & keyof UpdateConnectionRequest]: (Omit<UpdateConnectionRequest, "connectionId"> & UpdateConnectionRequest)[K]
    }>): Connection {
        return this.client.updateConnection(
            this.ops["UpdateConnection"].apply(partialParams)
        );
    }

    invokeUpdateDirectConnectGateway(partialParams: ToOptional<{
      [K in keyof UpdateDirectConnectGatewayRequest & keyof UpdateDirectConnectGatewayRequest]: (UpdateDirectConnectGatewayRequest & UpdateDirectConnectGatewayRequest)[K]
    }>): UpdateDirectConnectGatewayResponse {
        return this.client.updateDirectConnectGateway(
            this.ops["UpdateDirectConnectGateway"].apply(partialParams)
        );
    }

    invokeUpdateLag(partialParams: ToOptional<{
      [K in keyof UpdateLagRequest & keyof Omit<UpdateLagRequest, "lagId">]: (UpdateLagRequest & Omit<UpdateLagRequest, "lagId">)[K]
    }>): Lag {
        return this.client.updateLag(
            this.ops["UpdateLag"].apply(partialParams)
        );
    }

    invokeUpdateVirtualInterfaceAttributes(partialParams: ToOptional<{
      [K in keyof UpdateVirtualInterfaceAttributesRequest & keyof UpdateVirtualInterfaceAttributesRequest]: (UpdateVirtualInterfaceAttributesRequest & UpdateVirtualInterfaceAttributesRequest)[K]
    }>): VirtualInterface {
        return this.client.updateVirtualInterfaceAttributes(
            this.ops["UpdateVirtualInterfaceAttributes"].apply(partialParams)
        );
    }
}