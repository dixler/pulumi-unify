"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws = __importStar(require("@pulumi/aws"));
const awssdk = __importStar(require("aws-sdk"));
const parse_1 = require("../parse");
class default_1 extends aws.directconnect.HostedPrivateVirtualInterface {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.DirectConnect();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/directconnect-2012-10-25.normal.json"), this.client);
    }
    invokeAcceptDirectConnectGatewayAssociationProposal(partialParams) {
        return this.client.acceptDirectConnectGatewayAssociationProposal(this.ops["AcceptDirectConnectGatewayAssociationProposal"].apply(partialParams));
    }
    invokeAllocateConnectionOnInterconnect(partialParams) {
        return this.client.allocateConnectionOnInterconnect(this.ops["AllocateConnectionOnInterconnect"].apply(partialParams));
    }
    invokeAllocateHostedConnection(partialParams) {
        return this.client.allocateHostedConnection(this.ops["AllocateHostedConnection"].apply(partialParams));
    }
    invokeAllocatePrivateVirtualInterface(partialParams) {
        return this.client.allocatePrivateVirtualInterface(this.ops["AllocatePrivateVirtualInterface"].apply(partialParams));
    }
    invokeAllocatePublicVirtualInterface(partialParams) {
        return this.client.allocatePublicVirtualInterface(this.ops["AllocatePublicVirtualInterface"].apply(partialParams));
    }
    invokeAllocateTransitVirtualInterface(partialParams) {
        return this.client.allocateTransitVirtualInterface(this.ops["AllocateTransitVirtualInterface"].apply(partialParams));
    }
    invokeAssociateConnectionWithLag(partialParams) {
        return this.client.associateConnectionWithLag(this.ops["AssociateConnectionWithLag"].apply(partialParams));
    }
    invokeAssociateHostedConnection(partialParams) {
        return this.client.associateHostedConnection(this.ops["AssociateHostedConnection"].apply(partialParams));
    }
    invokeAssociateMacSecKey(partialParams) {
        return this.client.associateMacSecKey(this.ops["AssociateMacSecKey"].apply(partialParams));
    }
    invokeAssociateVirtualInterface(partialParams) {
        return this.client.associateVirtualInterface(this.ops["AssociateVirtualInterface"].apply(partialParams));
    }
    invokeConfirmConnection(partialParams) {
        return this.client.confirmConnection(this.ops["ConfirmConnection"].apply(partialParams));
    }
    invokeConfirmPrivateVirtualInterface(partialParams) {
        return this.client.confirmPrivateVirtualInterface(this.ops["ConfirmPrivateVirtualInterface"].apply(partialParams));
    }
    invokeConfirmPublicVirtualInterface(partialParams) {
        return this.client.confirmPublicVirtualInterface(this.ops["ConfirmPublicVirtualInterface"].apply(partialParams));
    }
    invokeConfirmTransitVirtualInterface(partialParams) {
        return this.client.confirmTransitVirtualInterface(this.ops["ConfirmTransitVirtualInterface"].apply(partialParams));
    }
    invokeCreateConnection(partialParams) {
        return this.client.createConnection(this.ops["CreateConnection"].apply(partialParams));
    }
    invokeCreateDirectConnectGateway(partialParams) {
        return this.client.createDirectConnectGateway(this.ops["CreateDirectConnectGateway"].apply(partialParams));
    }
    invokeCreateDirectConnectGatewayAssociation(partialParams) {
        return this.client.createDirectConnectGatewayAssociation(this.ops["CreateDirectConnectGatewayAssociation"].apply(partialParams));
    }
    invokeCreateDirectConnectGatewayAssociationProposal(partialParams) {
        return this.client.createDirectConnectGatewayAssociationProposal(this.ops["CreateDirectConnectGatewayAssociationProposal"].apply(partialParams));
    }
    invokeCreateInterconnect(partialParams) {
        return this.client.createInterconnect(this.ops["CreateInterconnect"].apply(partialParams));
    }
    invokeCreateLag(partialParams) {
        return this.client.createLag(this.ops["CreateLag"].apply(partialParams));
    }
    invokeCreatePrivateVirtualInterface(partialParams) {
        return this.client.createPrivateVirtualInterface(this.ops["CreatePrivateVirtualInterface"].apply(partialParams));
    }
    invokeCreatePublicVirtualInterface(partialParams) {
        return this.client.createPublicVirtualInterface(this.ops["CreatePublicVirtualInterface"].apply(partialParams));
    }
    invokeCreateTransitVirtualInterface(partialParams) {
        return this.client.createTransitVirtualInterface(this.ops["CreateTransitVirtualInterface"].apply(partialParams));
    }
    invokeDeleteConnection(partialParams) {
        return this.client.deleteConnection(this.ops["DeleteConnection"].apply(partialParams));
    }
    invokeDeleteDirectConnectGateway(partialParams) {
        return this.client.deleteDirectConnectGateway(this.ops["DeleteDirectConnectGateway"].apply(partialParams));
    }
    invokeDeleteDirectConnectGatewayAssociationProposal(partialParams) {
        return this.client.deleteDirectConnectGatewayAssociationProposal(this.ops["DeleteDirectConnectGatewayAssociationProposal"].apply(partialParams));
    }
    invokeDeleteInterconnect(partialParams) {
        return this.client.deleteInterconnect(this.ops["DeleteInterconnect"].apply(partialParams));
    }
    invokeDeleteLag(partialParams) {
        return this.client.deleteLag(this.ops["DeleteLag"].apply(partialParams));
    }
    invokeDeleteVirtualInterface(partialParams) {
        return this.client.deleteVirtualInterface(this.ops["DeleteVirtualInterface"].apply(partialParams));
    }
    invokeDescribeConnectionLoa(partialParams) {
        return this.client.describeConnectionLoa(this.ops["DescribeConnectionLoa"].apply(partialParams));
    }
    invokeDescribeConnectionsOnInterconnect(partialParams) {
        return this.client.describeConnectionsOnInterconnect(this.ops["DescribeConnectionsOnInterconnect"].apply(partialParams));
    }
    invokeDescribeHostedConnections(partialParams) {
        return this.client.describeHostedConnections(this.ops["DescribeHostedConnections"].apply(partialParams));
    }
    invokeDescribeInterconnectLoa(partialParams) {
        return this.client.describeInterconnectLoa(this.ops["DescribeInterconnectLoa"].apply(partialParams));
    }
    invokeDescribeLoa(partialParams) {
        return this.client.describeLoa(this.ops["DescribeLoa"].apply(partialParams));
    }
    invokeDescribeRouterConfiguration(partialParams) {
        return this.client.describeRouterConfiguration(this.ops["DescribeRouterConfiguration"].apply(partialParams));
    }
    invokeDescribeTags(partialParams) {
        return this.client.describeTags(this.ops["DescribeTags"].apply(partialParams));
    }
    invokeDisassociateConnectionFromLag(partialParams) {
        return this.client.disassociateConnectionFromLag(this.ops["DisassociateConnectionFromLag"].apply(partialParams));
    }
    invokeDisassociateMacSecKey(partialParams) {
        return this.client.disassociateMacSecKey(this.ops["DisassociateMacSecKey"].apply(partialParams));
    }
    invokeStartBgpFailoverTest(partialParams) {
        return this.client.startBgpFailoverTest(this.ops["StartBgpFailoverTest"].apply(partialParams));
    }
    invokeStopBgpFailoverTest(partialParams) {
        return this.client.stopBgpFailoverTest(this.ops["StopBgpFailoverTest"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateConnection(partialParams) {
        return this.client.updateConnection(this.ops["UpdateConnection"].apply(partialParams));
    }
    invokeUpdateDirectConnectGateway(partialParams) {
        return this.client.updateDirectConnectGateway(this.ops["UpdateDirectConnectGateway"].apply(partialParams));
    }
    invokeUpdateLag(partialParams) {
        return this.client.updateLag(this.ops["UpdateLag"].apply(partialParams));
    }
    invokeUpdateVirtualInterfaceAttributes(partialParams) {
        return this.client.updateVirtualInterfaceAttributes(this.ops["UpdateVirtualInterfaceAttributes"].apply(partialParams));
    }
}
exports.default = default_1;
