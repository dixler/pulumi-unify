
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

export default class extends aws.directconnect.ConnectionConfirmation {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.directconnect.ConnectionConfirmation>) {
        super(...args)
        this.client = new awssdk.DirectConnect()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/directconnect-2012-10-25.normal.json"), this.client)
    }

    invokeAcceptDirectConnectGatewayAssociationProposal(partialParams: ToOptional<{
      [K in keyof AcceptDirectConnectGatewayAssociationProposalRequest]: (AcceptDirectConnectGatewayAssociationProposalRequest)[K]
    }>): AcceptDirectConnectGatewayAssociationProposalResult {
        return this.client.acceptDirectConnectGatewayAssociationProposal(
            this.ops["AcceptDirectConnectGatewayAssociationProposal"].apply(partialParams)
        );
    }

    invokeAllocateConnectionOnInterconnect(partialParams: ToOptional<{
      [K in keyof AllocateConnectionOnInterconnectRequest]: (AllocateConnectionOnInterconnectRequest)[K]
    }>): Connection {
        return this.client.allocateConnectionOnInterconnect(
            this.ops["AllocateConnectionOnInterconnect"].apply(partialParams)
        );
    }

    invokeAllocateHostedConnection(partialParams: ToOptional<{
      [K in keyof AllocateHostedConnectionRequest]: (AllocateHostedConnectionRequest)[K]
    }>): Connection {
        return this.client.allocateHostedConnection(
            this.ops["AllocateHostedConnection"].apply(partialParams)
        );
    }

    invokeAllocatePrivateVirtualInterface(partialParams: ToOptional<{
      [K in keyof AllocatePrivateVirtualInterfaceRequest]: (AllocatePrivateVirtualInterfaceRequest)[K]
    }>): VirtualInterface {
        return this.client.allocatePrivateVirtualInterface(
            this.ops["AllocatePrivateVirtualInterface"].apply(partialParams)
        );
    }

    invokeAllocatePublicVirtualInterface(partialParams: ToOptional<{
      [K in keyof AllocatePublicVirtualInterfaceRequest]: (AllocatePublicVirtualInterfaceRequest)[K]
    }>): VirtualInterface {
        return this.client.allocatePublicVirtualInterface(
            this.ops["AllocatePublicVirtualInterface"].apply(partialParams)
        );
    }

    invokeAllocateTransitVirtualInterface(partialParams: ToOptional<{
      [K in keyof AllocateTransitVirtualInterfaceRequest]: (AllocateTransitVirtualInterfaceRequest)[K]
    }>): AllocateTransitVirtualInterfaceResult {
        return this.client.allocateTransitVirtualInterface(
            this.ops["AllocateTransitVirtualInterface"].apply(partialParams)
        );
    }

    invokeAssociateConnectionWithLag(partialParams: ToOptional<{
      [K in keyof AssociateConnectionWithLagRequest]: (AssociateConnectionWithLagRequest)[K]
    }>): Connection {
        return this.client.associateConnectionWithLag(
            this.ops["AssociateConnectionWithLag"].apply(partialParams)
        );
    }

    invokeAssociateHostedConnection(partialParams: ToOptional<{
      [K in keyof AssociateHostedConnectionRequest]: (AssociateHostedConnectionRequest)[K]
    }>): Connection {
        return this.client.associateHostedConnection(
            this.ops["AssociateHostedConnection"].apply(partialParams)
        );
    }

    invokeAssociateMacSecKey(partialParams: ToOptional<{
      [K in keyof AssociateMacSecKeyRequest]: (AssociateMacSecKeyRequest)[K]
    }>): AssociateMacSecKeyResponse {
        return this.client.associateMacSecKey(
            this.ops["AssociateMacSecKey"].apply(partialParams)
        );
    }

    invokeAssociateVirtualInterface(partialParams: ToOptional<{
      [K in keyof AssociateVirtualInterfaceRequest]: (AssociateVirtualInterfaceRequest)[K]
    }>): VirtualInterface {
        return this.client.associateVirtualInterface(
            this.ops["AssociateVirtualInterface"].apply(partialParams)
        );
    }

    invokeConfirmConnection(partialParams: ToOptional<{
      [K in keyof ConfirmConnectionRequest]: (ConfirmConnectionRequest)[K]
    }>): ConfirmConnectionResponse {
        return this.client.confirmConnection(
            this.ops["ConfirmConnection"].apply(partialParams)
        );
    }

    invokeConfirmPrivateVirtualInterface(partialParams: ToOptional<{
      [K in keyof ConfirmPrivateVirtualInterfaceRequest]: (ConfirmPrivateVirtualInterfaceRequest)[K]
    }>): ConfirmPrivateVirtualInterfaceResponse {
        return this.client.confirmPrivateVirtualInterface(
            this.ops["ConfirmPrivateVirtualInterface"].apply(partialParams)
        );
    }

    invokeConfirmPublicVirtualInterface(partialParams: ToOptional<{
      [K in keyof ConfirmPublicVirtualInterfaceRequest]: (ConfirmPublicVirtualInterfaceRequest)[K]
    }>): ConfirmPublicVirtualInterfaceResponse {
        return this.client.confirmPublicVirtualInterface(
            this.ops["ConfirmPublicVirtualInterface"].apply(partialParams)
        );
    }

    invokeConfirmTransitVirtualInterface(partialParams: ToOptional<{
      [K in keyof ConfirmTransitVirtualInterfaceRequest]: (ConfirmTransitVirtualInterfaceRequest)[K]
    }>): ConfirmTransitVirtualInterfaceResponse {
        return this.client.confirmTransitVirtualInterface(
            this.ops["ConfirmTransitVirtualInterface"].apply(partialParams)
        );
    }

    invokeCreateConnection(partialParams: ToOptional<{
      [K in keyof CreateConnectionRequest]: (CreateConnectionRequest)[K]
    }>): Connection {
        return this.client.createConnection(
            this.ops["CreateConnection"].apply(partialParams)
        );
    }

    invokeCreateDirectConnectGateway(partialParams: ToOptional<{
      [K in keyof CreateDirectConnectGatewayRequest]: (CreateDirectConnectGatewayRequest)[K]
    }>): CreateDirectConnectGatewayResult {
        return this.client.createDirectConnectGateway(
            this.ops["CreateDirectConnectGateway"].apply(partialParams)
        );
    }

    invokeCreateDirectConnectGatewayAssociation(partialParams: ToOptional<{
      [K in keyof CreateDirectConnectGatewayAssociationRequest]: (CreateDirectConnectGatewayAssociationRequest)[K]
    }>): CreateDirectConnectGatewayAssociationResult {
        return this.client.createDirectConnectGatewayAssociation(
            this.ops["CreateDirectConnectGatewayAssociation"].apply(partialParams)
        );
    }

    invokeCreateDirectConnectGatewayAssociationProposal(partialParams: ToOptional<{
      [K in keyof CreateDirectConnectGatewayAssociationProposalRequest]: (CreateDirectConnectGatewayAssociationProposalRequest)[K]
    }>): CreateDirectConnectGatewayAssociationProposalResult {
        return this.client.createDirectConnectGatewayAssociationProposal(
            this.ops["CreateDirectConnectGatewayAssociationProposal"].apply(partialParams)
        );
    }

    invokeCreateInterconnect(partialParams: ToOptional<{
      [K in keyof CreateInterconnectRequest]: (CreateInterconnectRequest)[K]
    }>): Interconnect {
        return this.client.createInterconnect(
            this.ops["CreateInterconnect"].apply(partialParams)
        );
    }

    invokeCreateLag(partialParams: ToOptional<{
      [K in keyof CreateLagRequest]: (CreateLagRequest)[K]
    }>): Lag {
        return this.client.createLag(
            this.ops["CreateLag"].apply(partialParams)
        );
    }

    invokeCreatePrivateVirtualInterface(partialParams: ToOptional<{
      [K in keyof Omit<CreatePrivateVirtualInterfaceRequest, "connectionId">]: (Omit<CreatePrivateVirtualInterfaceRequest, "connectionId">)[K]
    }>): VirtualInterface {
        return this.client.createPrivateVirtualInterface(
            this.ops["CreatePrivateVirtualInterface"].apply(partialParams)
        );
    }

    invokeCreatePublicVirtualInterface(partialParams: ToOptional<{
      [K in keyof Omit<CreatePublicVirtualInterfaceRequest, "connectionId">]: (Omit<CreatePublicVirtualInterfaceRequest, "connectionId">)[K]
    }>): VirtualInterface {
        return this.client.createPublicVirtualInterface(
            this.ops["CreatePublicVirtualInterface"].apply(partialParams)
        );
    }

    invokeCreateTransitVirtualInterface(partialParams: ToOptional<{
      [K in keyof Omit<CreateTransitVirtualInterfaceRequest, "connectionId">]: (Omit<CreateTransitVirtualInterfaceRequest, "connectionId">)[K]
    }>): CreateTransitVirtualInterfaceResult {
        return this.client.createTransitVirtualInterface(
            this.ops["CreateTransitVirtualInterface"].apply(partialParams)
        );
    }

    invokeDeleteConnection(partialParams: ToOptional<{
      [K in keyof Omit<DeleteConnectionRequest, "connectionId">]: (Omit<DeleteConnectionRequest, "connectionId">)[K]
    }>): Connection {
        return this.client.deleteConnection(
            this.ops["DeleteConnection"].apply(partialParams)
        );
    }

    invokeDeleteDirectConnectGateway(partialParams: ToOptional<{
      [K in keyof DeleteDirectConnectGatewayRequest]: (DeleteDirectConnectGatewayRequest)[K]
    }>): DeleteDirectConnectGatewayResult {
        return this.client.deleteDirectConnectGateway(
            this.ops["DeleteDirectConnectGateway"].apply(partialParams)
        );
    }

    invokeDeleteDirectConnectGatewayAssociationProposal(partialParams: ToOptional<{
      [K in keyof DeleteDirectConnectGatewayAssociationProposalRequest]: (DeleteDirectConnectGatewayAssociationProposalRequest)[K]
    }>): DeleteDirectConnectGatewayAssociationProposalResult {
        return this.client.deleteDirectConnectGatewayAssociationProposal(
            this.ops["DeleteDirectConnectGatewayAssociationProposal"].apply(partialParams)
        );
    }

    invokeDeleteInterconnect(partialParams: ToOptional<{
      [K in keyof DeleteInterconnectRequest]: (DeleteInterconnectRequest)[K]
    }>): DeleteInterconnectResponse {
        return this.client.deleteInterconnect(
            this.ops["DeleteInterconnect"].apply(partialParams)
        );
    }

    invokeDeleteLag(partialParams: ToOptional<{
      [K in keyof DeleteLagRequest]: (DeleteLagRequest)[K]
    }>): Lag {
        return this.client.deleteLag(
            this.ops["DeleteLag"].apply(partialParams)
        );
    }

    invokeDeleteVirtualInterface(partialParams: ToOptional<{
      [K in keyof DeleteVirtualInterfaceRequest]: (DeleteVirtualInterfaceRequest)[K]
    }>): DeleteVirtualInterfaceResponse {
        return this.client.deleteVirtualInterface(
            this.ops["DeleteVirtualInterface"].apply(partialParams)
        );
    }

    invokeDescribeConnectionLoa(partialParams: ToOptional<{
      [K in keyof Omit<DescribeConnectionLoaRequest, "connectionId">]: (Omit<DescribeConnectionLoaRequest, "connectionId">)[K]
    }>): DescribeConnectionLoaResponse {
        return this.client.describeConnectionLoa(
            this.ops["DescribeConnectionLoa"].apply(partialParams)
        );
    }

    invokeDescribeConnectionsOnInterconnect(partialParams: ToOptional<{
      [K in keyof DescribeConnectionsOnInterconnectRequest]: (DescribeConnectionsOnInterconnectRequest)[K]
    }>): Connections {
        return this.client.describeConnectionsOnInterconnect(
            this.ops["DescribeConnectionsOnInterconnect"].apply(partialParams)
        );
    }

    invokeDescribeHostedConnections(partialParams: ToOptional<{
      [K in keyof Omit<DescribeHostedConnectionsRequest, "connectionId">]: (Omit<DescribeHostedConnectionsRequest, "connectionId">)[K]
    }>): Connections {
        return this.client.describeHostedConnections(
            this.ops["DescribeHostedConnections"].apply(partialParams)
        );
    }

    invokeDescribeInterconnectLoa(partialParams: ToOptional<{
      [K in keyof DescribeInterconnectLoaRequest]: (DescribeInterconnectLoaRequest)[K]
    }>): DescribeInterconnectLoaResponse {
        return this.client.describeInterconnectLoa(
            this.ops["DescribeInterconnectLoa"].apply(partialParams)
        );
    }

    invokeDescribeLoa(partialParams: ToOptional<{
      [K in keyof Omit<DescribeLoaRequest, "connectionId">]: (Omit<DescribeLoaRequest, "connectionId">)[K]
    }>): Loa {
        return this.client.describeLoa(
            this.ops["DescribeLoa"].apply(partialParams)
        );
    }

    invokeDescribeRouterConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeRouterConfigurationRequest]: (DescribeRouterConfigurationRequest)[K]
    }>): DescribeRouterConfigurationResponse {
        return this.client.describeRouterConfiguration(
            this.ops["DescribeRouterConfiguration"].apply(partialParams)
        );
    }

    invokeDescribeTags(partialParams: ToOptional<{
      [K in keyof DescribeTagsRequest]: (DescribeTagsRequest)[K]
    }>): DescribeTagsResponse {
        return this.client.describeTags(
            this.ops["DescribeTags"].apply(partialParams)
        );
    }

    invokeDisassociateConnectionFromLag(partialParams: ToOptional<{
      [K in keyof Omit<DisassociateConnectionFromLagRequest, "connectionId">]: (Omit<DisassociateConnectionFromLagRequest, "connectionId">)[K]
    }>): Connection {
        return this.client.disassociateConnectionFromLag(
            this.ops["DisassociateConnectionFromLag"].apply(partialParams)
        );
    }

    invokeDisassociateMacSecKey(partialParams: ToOptional<{
      [K in keyof Omit<DisassociateMacSecKeyRequest, "connectionId">]: (Omit<DisassociateMacSecKeyRequest, "connectionId">)[K]
    }>): DisassociateMacSecKeyResponse {
        return this.client.disassociateMacSecKey(
            this.ops["DisassociateMacSecKey"].apply(partialParams)
        );
    }

    invokeStartBgpFailoverTest(partialParams: ToOptional<{
      [K in keyof StartBgpFailoverTestRequest]: (StartBgpFailoverTestRequest)[K]
    }>): StartBgpFailoverTestResponse {
        return this.client.startBgpFailoverTest(
            this.ops["StartBgpFailoverTest"].apply(partialParams)
        );
    }

    invokeStopBgpFailoverTest(partialParams: ToOptional<{
      [K in keyof StopBgpFailoverTestRequest]: (StopBgpFailoverTestRequest)[K]
    }>): StopBgpFailoverTestResponse {
        return this.client.stopBgpFailoverTest(
            this.ops["StopBgpFailoverTest"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest]: (TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest]: (UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateConnection(partialParams: ToOptional<{
      [K in keyof Omit<UpdateConnectionRequest, "connectionId">]: (Omit<UpdateConnectionRequest, "connectionId">)[K]
    }>): Connection {
        return this.client.updateConnection(
            this.ops["UpdateConnection"].apply(partialParams)
        );
    }

    invokeUpdateDirectConnectGateway(partialParams: ToOptional<{
      [K in keyof UpdateDirectConnectGatewayRequest]: (UpdateDirectConnectGatewayRequest)[K]
    }>): UpdateDirectConnectGatewayResponse {
        return this.client.updateDirectConnectGateway(
            this.ops["UpdateDirectConnectGateway"].apply(partialParams)
        );
    }

    invokeUpdateLag(partialParams: ToOptional<{
      [K in keyof UpdateLagRequest]: (UpdateLagRequest)[K]
    }>): Lag {
        return this.client.updateLag(
            this.ops["UpdateLag"].apply(partialParams)
        );
    }

    invokeUpdateVirtualInterfaceAttributes(partialParams: ToOptional<{
      [K in keyof UpdateVirtualInterfaceAttributesRequest]: (UpdateVirtualInterfaceAttributesRequest)[K]
    }>): VirtualInterface {
        return this.client.updateVirtualInterfaceAttributes(
            this.ops["UpdateVirtualInterfaceAttributes"].apply(partialParams)
        );
    }
}