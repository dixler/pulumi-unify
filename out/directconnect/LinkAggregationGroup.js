"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
const schema = require("../apis/directconnect-2012-10-25.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.directconnect.LinkAggregationGroup {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.DirectConnect();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
            if (this[(0, parse_1.upperCamelCase)(this.constructor.name) + (0, parse_1.upperCamelCase)(key)] === undefined) {
                this.capitalizedParams[this.constructor.name + (0, parse_1.upperCamelCase)(key)] = value;
            }
        });
    }
    boot() {
        if (this.booted) {
            return;
        }
        Object.entries(this.capitalizedParams).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value.value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
        this.ops = (0, parse_1.getResourceOperations)(this.capitalizedParams, schema);
        this.booted = true;
    }
    invokeAcceptDirectConnectGatewayAssociationProposal(partialParams) {
        this.boot();
        return this.client.acceptDirectConnectGatewayAssociationProposal(this.ops["AcceptDirectConnectGatewayAssociationProposal"].apply(partialParams));
    }
    invokeAllocateConnectionOnInterconnect(partialParams) {
        this.boot();
        return this.client.allocateConnectionOnInterconnect(this.ops["AllocateConnectionOnInterconnect"].apply(partialParams));
    }
    invokeAllocateHostedConnection(partialParams) {
        this.boot();
        return this.client.allocateHostedConnection(this.ops["AllocateHostedConnection"].apply(partialParams));
    }
    invokeAllocatePrivateVirtualInterface(partialParams) {
        this.boot();
        return this.client.allocatePrivateVirtualInterface(this.ops["AllocatePrivateVirtualInterface"].apply(partialParams));
    }
    invokeAllocatePublicVirtualInterface(partialParams) {
        this.boot();
        return this.client.allocatePublicVirtualInterface(this.ops["AllocatePublicVirtualInterface"].apply(partialParams));
    }
    invokeAllocateTransitVirtualInterface(partialParams) {
        this.boot();
        return this.client.allocateTransitVirtualInterface(this.ops["AllocateTransitVirtualInterface"].apply(partialParams));
    }
    invokeAssociateConnectionWithLag(partialParams) {
        this.boot();
        return this.client.associateConnectionWithLag(this.ops["AssociateConnectionWithLag"].apply(partialParams));
    }
    invokeAssociateHostedConnection(partialParams) {
        this.boot();
        return this.client.associateHostedConnection(this.ops["AssociateHostedConnection"].apply(partialParams));
    }
    invokeAssociateMacSecKey(partialParams) {
        this.boot();
        return this.client.associateMacSecKey(this.ops["AssociateMacSecKey"].apply(partialParams));
    }
    invokeAssociateVirtualInterface(partialParams) {
        this.boot();
        return this.client.associateVirtualInterface(this.ops["AssociateVirtualInterface"].apply(partialParams));
    }
    invokeConfirmConnection(partialParams) {
        this.boot();
        return this.client.confirmConnection(this.ops["ConfirmConnection"].apply(partialParams));
    }
    invokeConfirmCustomerAgreement(partialParams) {
        this.boot();
        return this.client.confirmCustomerAgreement(this.ops["ConfirmCustomerAgreement"].apply(partialParams));
    }
    invokeConfirmPrivateVirtualInterface(partialParams) {
        this.boot();
        return this.client.confirmPrivateVirtualInterface(this.ops["ConfirmPrivateVirtualInterface"].apply(partialParams));
    }
    invokeConfirmPublicVirtualInterface(partialParams) {
        this.boot();
        return this.client.confirmPublicVirtualInterface(this.ops["ConfirmPublicVirtualInterface"].apply(partialParams));
    }
    invokeConfirmTransitVirtualInterface(partialParams) {
        this.boot();
        return this.client.confirmTransitVirtualInterface(this.ops["ConfirmTransitVirtualInterface"].apply(partialParams));
    }
    invokeCreateBGPPeer(partialParams) {
        this.boot();
        return this.client.createBGPPeer(this.ops["CreateBGPPeer"].apply(partialParams));
    }
    invokeCreateConnection(partialParams) {
        this.boot();
        return this.client.createConnection(this.ops["CreateConnection"].apply(partialParams));
    }
    invokeCreateDirectConnectGateway(partialParams) {
        this.boot();
        return this.client.createDirectConnectGateway(this.ops["CreateDirectConnectGateway"].apply(partialParams));
    }
    invokeCreateDirectConnectGatewayAssociation(partialParams) {
        this.boot();
        return this.client.createDirectConnectGatewayAssociation(this.ops["CreateDirectConnectGatewayAssociation"].apply(partialParams));
    }
    invokeCreateDirectConnectGatewayAssociationProposal(partialParams) {
        this.boot();
        return this.client.createDirectConnectGatewayAssociationProposal(this.ops["CreateDirectConnectGatewayAssociationProposal"].apply(partialParams));
    }
    invokeCreateInterconnect(partialParams) {
        this.boot();
        return this.client.createInterconnect(this.ops["CreateInterconnect"].apply(partialParams));
    }
    invokeCreateLag(partialParams) {
        this.boot();
        return this.client.createLag(this.ops["CreateLag"].apply(partialParams));
    }
    invokeCreatePrivateVirtualInterface(partialParams) {
        this.boot();
        return this.client.createPrivateVirtualInterface(this.ops["CreatePrivateVirtualInterface"].apply(partialParams));
    }
    invokeCreatePublicVirtualInterface(partialParams) {
        this.boot();
        return this.client.createPublicVirtualInterface(this.ops["CreatePublicVirtualInterface"].apply(partialParams));
    }
    invokeCreateTransitVirtualInterface(partialParams) {
        this.boot();
        return this.client.createTransitVirtualInterface(this.ops["CreateTransitVirtualInterface"].apply(partialParams));
    }
    invokeDeleteBGPPeer(partialParams) {
        this.boot();
        return this.client.deleteBGPPeer(this.ops["DeleteBGPPeer"].apply(partialParams));
    }
    invokeDeleteConnection(partialParams) {
        this.boot();
        return this.client.deleteConnection(this.ops["DeleteConnection"].apply(partialParams));
    }
    invokeDeleteDirectConnectGateway(partialParams) {
        this.boot();
        return this.client.deleteDirectConnectGateway(this.ops["DeleteDirectConnectGateway"].apply(partialParams));
    }
    invokeDeleteDirectConnectGatewayAssociation(partialParams) {
        this.boot();
        return this.client.deleteDirectConnectGatewayAssociation(this.ops["DeleteDirectConnectGatewayAssociation"].apply(partialParams));
    }
    invokeDeleteDirectConnectGatewayAssociationProposal(partialParams) {
        this.boot();
        return this.client.deleteDirectConnectGatewayAssociationProposal(this.ops["DeleteDirectConnectGatewayAssociationProposal"].apply(partialParams));
    }
    invokeDeleteInterconnect(partialParams) {
        this.boot();
        return this.client.deleteInterconnect(this.ops["DeleteInterconnect"].apply(partialParams));
    }
    invokeDeleteLag(partialParams) {
        this.boot();
        return this.client.deleteLag(this.ops["DeleteLag"].apply(partialParams));
    }
    invokeDeleteVirtualInterface(partialParams) {
        this.boot();
        return this.client.deleteVirtualInterface(this.ops["DeleteVirtualInterface"].apply(partialParams));
    }
    invokeDescribeConnectionLoa(partialParams) {
        this.boot();
        return this.client.describeConnectionLoa(this.ops["DescribeConnectionLoa"].apply(partialParams));
    }
    invokeDescribeConnections(partialParams) {
        this.boot();
        return this.client.describeConnections(this.ops["DescribeConnections"].apply(partialParams));
    }
    invokeDescribeConnectionsOnInterconnect(partialParams) {
        this.boot();
        return this.client.describeConnectionsOnInterconnect(this.ops["DescribeConnectionsOnInterconnect"].apply(partialParams));
    }
    invokeDescribeDirectConnectGatewayAssociationProposals(partialParams) {
        this.boot();
        return this.client.describeDirectConnectGatewayAssociationProposals(this.ops["DescribeDirectConnectGatewayAssociationProposals"].apply(partialParams));
    }
    invokeDescribeDirectConnectGatewayAssociations(partialParams) {
        this.boot();
        return this.client.describeDirectConnectGatewayAssociations(this.ops["DescribeDirectConnectGatewayAssociations"].apply(partialParams));
    }
    invokeDescribeDirectConnectGatewayAttachments(partialParams) {
        this.boot();
        return this.client.describeDirectConnectGatewayAttachments(this.ops["DescribeDirectConnectGatewayAttachments"].apply(partialParams));
    }
    invokeDescribeDirectConnectGateways(partialParams) {
        this.boot();
        return this.client.describeDirectConnectGateways(this.ops["DescribeDirectConnectGateways"].apply(partialParams));
    }
    invokeDescribeHostedConnections(partialParams) {
        this.boot();
        return this.client.describeHostedConnections(this.ops["DescribeHostedConnections"].apply(partialParams));
    }
    invokeDescribeInterconnectLoa(partialParams) {
        this.boot();
        return this.client.describeInterconnectLoa(this.ops["DescribeInterconnectLoa"].apply(partialParams));
    }
    invokeDescribeInterconnects(partialParams) {
        this.boot();
        return this.client.describeInterconnects(this.ops["DescribeInterconnects"].apply(partialParams));
    }
    invokeDescribeLags(partialParams) {
        this.boot();
        return this.client.describeLags(this.ops["DescribeLags"].apply(partialParams));
    }
    invokeDescribeLoa(partialParams) {
        this.boot();
        return this.client.describeLoa(this.ops["DescribeLoa"].apply(partialParams));
    }
    invokeDescribeRouterConfiguration(partialParams) {
        this.boot();
        return this.client.describeRouterConfiguration(this.ops["DescribeRouterConfiguration"].apply(partialParams));
    }
    invokeDescribeTags(partialParams) {
        this.boot();
        return this.client.describeTags(this.ops["DescribeTags"].apply(partialParams));
    }
    invokeDescribeVirtualInterfaces(partialParams) {
        this.boot();
        return this.client.describeVirtualInterfaces(this.ops["DescribeVirtualInterfaces"].apply(partialParams));
    }
    invokeDisassociateConnectionFromLag(partialParams) {
        this.boot();
        return this.client.disassociateConnectionFromLag(this.ops["DisassociateConnectionFromLag"].apply(partialParams));
    }
    invokeDisassociateMacSecKey(partialParams) {
        this.boot();
        return this.client.disassociateMacSecKey(this.ops["DisassociateMacSecKey"].apply(partialParams));
    }
    invokeListVirtualInterfaceTestHistory(partialParams) {
        this.boot();
        return this.client.listVirtualInterfaceTestHistory(this.ops["ListVirtualInterfaceTestHistory"].apply(partialParams));
    }
    invokeStartBgpFailoverTest(partialParams) {
        this.boot();
        return this.client.startBgpFailoverTest(this.ops["StartBgpFailoverTest"].apply(partialParams));
    }
    invokeStopBgpFailoverTest(partialParams) {
        this.boot();
        return this.client.stopBgpFailoverTest(this.ops["StopBgpFailoverTest"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateConnection(partialParams) {
        this.boot();
        return this.client.updateConnection(this.ops["UpdateConnection"].apply(partialParams));
    }
    invokeUpdateDirectConnectGateway(partialParams) {
        this.boot();
        return this.client.updateDirectConnectGateway(this.ops["UpdateDirectConnectGateway"].apply(partialParams));
    }
    invokeUpdateDirectConnectGatewayAssociation(partialParams) {
        this.boot();
        return this.client.updateDirectConnectGatewayAssociation(this.ops["UpdateDirectConnectGatewayAssociation"].apply(partialParams));
    }
    invokeUpdateLag(partialParams) {
        this.boot();
        return this.client.updateLag(this.ops["UpdateLag"].apply(partialParams));
    }
    invokeUpdateVirtualInterfaceAttributes(partialParams) {
        this.boot();
        return this.client.updateVirtualInterfaceAttributes(this.ops["UpdateVirtualInterfaceAttributes"].apply(partialParams));
    }
}
exports.default = default_1;
