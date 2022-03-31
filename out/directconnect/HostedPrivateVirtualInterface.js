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
class default_1 extends aws.directconnect.HostedPrivateVirtualInterface {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.DirectConnect();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
    }
    boot() {
        Object.entries(this.capitalizedParams).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value.value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
        this.ops = (0, parse_1.getResourceOperations)(this.capitalizedParams, schema, this.client);
    }
    invokeAcceptDirectConnectGatewayAssociationProposal(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.acceptDirectConnectGatewayAssociationProposal(this.ops["AcceptDirectConnectGatewayAssociationProposal"].applicator.apply(partialParams));
    }
    invokeAllocateConnectionOnInterconnect(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.allocateConnectionOnInterconnect(this.ops["AllocateConnectionOnInterconnect"].applicator.apply(partialParams));
    }
    invokeAllocateHostedConnection(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.allocateHostedConnection(this.ops["AllocateHostedConnection"].applicator.apply(partialParams));
    }
    invokeAllocatePrivateVirtualInterface(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.allocatePrivateVirtualInterface(this.ops["AllocatePrivateVirtualInterface"].applicator.apply(partialParams));
    }
    invokeAllocatePublicVirtualInterface(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.allocatePublicVirtualInterface(this.ops["AllocatePublicVirtualInterface"].applicator.apply(partialParams));
    }
    invokeAllocateTransitVirtualInterface(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.allocateTransitVirtualInterface(this.ops["AllocateTransitVirtualInterface"].applicator.apply(partialParams));
    }
    invokeAssociateConnectionWithLag(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateConnectionWithLag(this.ops["AssociateConnectionWithLag"].applicator.apply(partialParams));
    }
    invokeAssociateHostedConnection(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateHostedConnection(this.ops["AssociateHostedConnection"].applicator.apply(partialParams));
    }
    invokeAssociateMacSecKey(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateMacSecKey(this.ops["AssociateMacSecKey"].applicator.apply(partialParams));
    }
    invokeAssociateVirtualInterface(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateVirtualInterface(this.ops["AssociateVirtualInterface"].applicator.apply(partialParams));
    }
    invokeConfirmConnection(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.confirmConnection(this.ops["ConfirmConnection"].applicator.apply(partialParams));
    }
    invokeConfirmPrivateVirtualInterface(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.confirmPrivateVirtualInterface(this.ops["ConfirmPrivateVirtualInterface"].applicator.apply(partialParams));
    }
    invokeConfirmPublicVirtualInterface(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.confirmPublicVirtualInterface(this.ops["ConfirmPublicVirtualInterface"].applicator.apply(partialParams));
    }
    invokeConfirmTransitVirtualInterface(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.confirmTransitVirtualInterface(this.ops["ConfirmTransitVirtualInterface"].applicator.apply(partialParams));
    }
    invokeCreateConnection(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createConnection(this.ops["CreateConnection"].applicator.apply(partialParams));
    }
    invokeCreateDirectConnectGateway(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDirectConnectGateway(this.ops["CreateDirectConnectGateway"].applicator.apply(partialParams));
    }
    invokeCreateDirectConnectGatewayAssociation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDirectConnectGatewayAssociation(this.ops["CreateDirectConnectGatewayAssociation"].applicator.apply(partialParams));
    }
    invokeCreateDirectConnectGatewayAssociationProposal(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDirectConnectGatewayAssociationProposal(this.ops["CreateDirectConnectGatewayAssociationProposal"].applicator.apply(partialParams));
    }
    invokeCreateInterconnect(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createInterconnect(this.ops["CreateInterconnect"].applicator.apply(partialParams));
    }
    invokeCreateLag(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createLag(this.ops["CreateLag"].applicator.apply(partialParams));
    }
    invokeCreatePrivateVirtualInterface(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPrivateVirtualInterface(this.ops["CreatePrivateVirtualInterface"].applicator.apply(partialParams));
    }
    invokeCreatePublicVirtualInterface(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPublicVirtualInterface(this.ops["CreatePublicVirtualInterface"].applicator.apply(partialParams));
    }
    invokeCreateTransitVirtualInterface(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTransitVirtualInterface(this.ops["CreateTransitVirtualInterface"].applicator.apply(partialParams));
    }
    invokeDeleteConnection(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteConnection(this.ops["DeleteConnection"].applicator.apply(partialParams));
    }
    invokeDeleteDirectConnectGateway(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDirectConnectGateway(this.ops["DeleteDirectConnectGateway"].applicator.apply(partialParams));
    }
    invokeDeleteDirectConnectGatewayAssociationProposal(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDirectConnectGatewayAssociationProposal(this.ops["DeleteDirectConnectGatewayAssociationProposal"].applicator.apply(partialParams));
    }
    invokeDeleteInterconnect(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteInterconnect(this.ops["DeleteInterconnect"].applicator.apply(partialParams));
    }
    invokeDeleteLag(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteLag(this.ops["DeleteLag"].applicator.apply(partialParams));
    }
    invokeDeleteVirtualInterface(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVirtualInterface(this.ops["DeleteVirtualInterface"].applicator.apply(partialParams));
    }
    invokeDescribeConnectionLoa(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeConnectionLoa(this.ops["DescribeConnectionLoa"].applicator.apply(partialParams));
    }
    invokeDescribeConnectionsOnInterconnect(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeConnectionsOnInterconnect(this.ops["DescribeConnectionsOnInterconnect"].applicator.apply(partialParams));
    }
    invokeDescribeHostedConnections(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeHostedConnections(this.ops["DescribeHostedConnections"].applicator.apply(partialParams));
    }
    invokeDescribeInterconnectLoa(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeInterconnectLoa(this.ops["DescribeInterconnectLoa"].applicator.apply(partialParams));
    }
    invokeDescribeLoa(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeLoa(this.ops["DescribeLoa"].applicator.apply(partialParams));
    }
    invokeDescribeRouterConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeRouterConfiguration(this.ops["DescribeRouterConfiguration"].applicator.apply(partialParams));
    }
    invokeDescribeTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTags(this.ops["DescribeTags"].applicator.apply(partialParams));
    }
    invokeDisassociateConnectionFromLag(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateConnectionFromLag(this.ops["DisassociateConnectionFromLag"].applicator.apply(partialParams));
    }
    invokeDisassociateMacSecKey(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateMacSecKey(this.ops["DisassociateMacSecKey"].applicator.apply(partialParams));
    }
    invokeStartBgpFailoverTest(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startBgpFailoverTest(this.ops["StartBgpFailoverTest"].applicator.apply(partialParams));
    }
    invokeStopBgpFailoverTest(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopBgpFailoverTest(this.ops["StopBgpFailoverTest"].applicator.apply(partialParams));
    }
    invokeTagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].applicator.apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].applicator.apply(partialParams));
    }
    invokeUpdateConnection(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateConnection(this.ops["UpdateConnection"].applicator.apply(partialParams));
    }
    invokeUpdateDirectConnectGateway(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDirectConnectGateway(this.ops["UpdateDirectConnectGateway"].applicator.apply(partialParams));
    }
    invokeUpdateLag(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateLag(this.ops["UpdateLag"].applicator.apply(partialParams));
    }
    invokeUpdateVirtualInterfaceAttributes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateVirtualInterfaceAttributes(this.ops["UpdateVirtualInterfaceAttributes"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
