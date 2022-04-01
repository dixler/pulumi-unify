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
const schema = require("../apis/ec2-2016-11-15.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.ec2.TransitGatewayPeeringAttachmentAccepter {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.EC2();
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
    invokeAcceptTransitGatewayPeeringAttachment(partialParams) {
        this.boot();
        return this.client.acceptTransitGatewayPeeringAttachment(this.ops["AcceptTransitGatewayPeeringAttachment"].apply(partialParams));
    }
    invokeAcceptTransitGatewayVpcAttachment(partialParams) {
        this.boot();
        return this.client.acceptTransitGatewayVpcAttachment(this.ops["AcceptTransitGatewayVpcAttachment"].apply(partialParams));
    }
    invokeAssociateTransitGatewayRouteTable(partialParams) {
        this.boot();
        return this.client.associateTransitGatewayRouteTable(this.ops["AssociateTransitGatewayRouteTable"].apply(partialParams));
    }
    invokeCreateTransitGatewayConnectPeer(partialParams) {
        this.boot();
        return this.client.createTransitGatewayConnectPeer(this.ops["CreateTransitGatewayConnectPeer"].apply(partialParams));
    }
    invokeCreateTransitGatewayMulticastDomain(partialParams) {
        this.boot();
        return this.client.createTransitGatewayMulticastDomain(this.ops["CreateTransitGatewayMulticastDomain"].apply(partialParams));
    }
    invokeCreateTransitGatewayPeeringAttachment(partialParams) {
        this.boot();
        return this.client.createTransitGatewayPeeringAttachment(this.ops["CreateTransitGatewayPeeringAttachment"].apply(partialParams));
    }
    invokeCreateTransitGatewayRouteTable(partialParams) {
        this.boot();
        return this.client.createTransitGatewayRouteTable(this.ops["CreateTransitGatewayRouteTable"].apply(partialParams));
    }
    invokeCreateTransitGatewayVpcAttachment(partialParams) {
        this.boot();
        return this.client.createTransitGatewayVpcAttachment(this.ops["CreateTransitGatewayVpcAttachment"].apply(partialParams));
    }
    invokeDeleteTransitGateway(partialParams) {
        this.boot();
        return this.client.deleteTransitGateway(this.ops["DeleteTransitGateway"].apply(partialParams));
    }
    invokeDeleteTransitGatewayConnect(partialParams) {
        this.boot();
        return this.client.deleteTransitGatewayConnect(this.ops["DeleteTransitGatewayConnect"].apply(partialParams));
    }
    invokeDeleteTransitGatewayPeeringAttachment(partialParams) {
        this.boot();
        return this.client.deleteTransitGatewayPeeringAttachment(this.ops["DeleteTransitGatewayPeeringAttachment"].apply(partialParams));
    }
    invokeDeleteTransitGatewayVpcAttachment(partialParams) {
        this.boot();
        return this.client.deleteTransitGatewayVpcAttachment(this.ops["DeleteTransitGatewayVpcAttachment"].apply(partialParams));
    }
    invokeDisableTransitGatewayRouteTablePropagation(partialParams) {
        this.boot();
        return this.client.disableTransitGatewayRouteTablePropagation(this.ops["DisableTransitGatewayRouteTablePropagation"].apply(partialParams));
    }
    invokeDisassociateTransitGatewayRouteTable(partialParams) {
        this.boot();
        return this.client.disassociateTransitGatewayRouteTable(this.ops["DisassociateTransitGatewayRouteTable"].apply(partialParams));
    }
    invokeEnableTransitGatewayRouteTablePropagation(partialParams) {
        this.boot();
        return this.client.enableTransitGatewayRouteTablePropagation(this.ops["EnableTransitGatewayRouteTablePropagation"].apply(partialParams));
    }
    invokeGetTransitGatewayAttachmentPropagations(partialParams) {
        this.boot();
        return this.client.getTransitGatewayAttachmentPropagations(this.ops["GetTransitGatewayAttachmentPropagations"].apply(partialParams));
    }
    invokeModifyTransitGateway(partialParams) {
        this.boot();
        return this.client.modifyTransitGateway(this.ops["ModifyTransitGateway"].apply(partialParams));
    }
    invokeModifyTransitGatewayVpcAttachment(partialParams) {
        this.boot();
        return this.client.modifyTransitGatewayVpcAttachment(this.ops["ModifyTransitGatewayVpcAttachment"].apply(partialParams));
    }
    invokeRejectTransitGatewayPeeringAttachment(partialParams) {
        this.boot();
        return this.client.rejectTransitGatewayPeeringAttachment(this.ops["RejectTransitGatewayPeeringAttachment"].apply(partialParams));
    }
    invokeRejectTransitGatewayVpcAttachment(partialParams) {
        this.boot();
        return this.client.rejectTransitGatewayVpcAttachment(this.ops["RejectTransitGatewayVpcAttachment"].apply(partialParams));
    }
}
exports.default = default_1;
