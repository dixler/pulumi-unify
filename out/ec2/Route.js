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
class default_1 extends aws.ec2.Route {
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
    invokeAssignIpv6Addresses(partialParams) {
        this.boot();
        return this.client.assignIpv6Addresses(this.ops["AssignIpv6Addresses"].apply(partialParams));
    }
    invokeAssignPrivateIpAddresses(partialParams) {
        this.boot();
        return this.client.assignPrivateIpAddresses(this.ops["AssignPrivateIpAddresses"].apply(partialParams));
    }
    invokeAssociateIamInstanceProfile(partialParams) {
        this.boot();
        return this.client.associateIamInstanceProfile(this.ops["AssociateIamInstanceProfile"].apply(partialParams));
    }
    invokeAssociateRouteTable(partialParams) {
        this.boot();
        return this.client.associateRouteTable(this.ops["AssociateRouteTable"].apply(partialParams));
    }
    invokeAttachClassicLinkVpc(partialParams) {
        this.boot();
        return this.client.attachClassicLinkVpc(this.ops["AttachClassicLinkVpc"].apply(partialParams));
    }
    invokeAttachNetworkInterface(partialParams) {
        this.boot();
        return this.client.attachNetworkInterface(this.ops["AttachNetworkInterface"].apply(partialParams));
    }
    invokeAttachVolume(partialParams) {
        this.boot();
        return this.client.attachVolume(this.ops["AttachVolume"].apply(partialParams));
    }
    invokeBundleInstance(partialParams) {
        this.boot();
        return this.client.bundleInstance(this.ops["BundleInstance"].apply(partialParams));
    }
    invokeConfirmProductInstance(partialParams) {
        this.boot();
        return this.client.confirmProductInstance(this.ops["ConfirmProductInstance"].apply(partialParams));
    }
    invokeCreateClientVpnRoute(partialParams) {
        this.boot();
        return this.client.createClientVpnRoute(this.ops["CreateClientVpnRoute"].apply(partialParams));
    }
    invokeCreateImage(partialParams) {
        this.boot();
        return this.client.createImage(this.ops["CreateImage"].apply(partialParams));
    }
    invokeCreateInstanceExportTask(partialParams) {
        this.boot();
        return this.client.createInstanceExportTask(this.ops["CreateInstanceExportTask"].apply(partialParams));
    }
    invokeCreateLocalGatewayRoute(partialParams) {
        this.boot();
        return this.client.createLocalGatewayRoute(this.ops["CreateLocalGatewayRoute"].apply(partialParams));
    }
    invokeCreateNetworkInterfacePermission(partialParams) {
        this.boot();
        return this.client.createNetworkInterfacePermission(this.ops["CreateNetworkInterfacePermission"].apply(partialParams));
    }
    invokeCreateReplaceRootVolumeTask(partialParams) {
        this.boot();
        return this.client.createReplaceRootVolumeTask(this.ops["CreateReplaceRootVolumeTask"].apply(partialParams));
    }
    invokeCreateRoute(partialParams) {
        this.boot();
        return this.client.createRoute(this.ops["CreateRoute"].apply(partialParams));
    }
    invokeCreateTrafficMirrorFilterRule(partialParams) {
        this.boot();
        return this.client.createTrafficMirrorFilterRule(this.ops["CreateTrafficMirrorFilterRule"].apply(partialParams));
    }
    invokeCreateTrafficMirrorSession(partialParams) {
        this.boot();
        return this.client.createTrafficMirrorSession(this.ops["CreateTrafficMirrorSession"].apply(partialParams));
    }
    invokeCreateTransitGatewayMulticastDomain(partialParams) {
        this.boot();
        return this.client.createTransitGatewayMulticastDomain(this.ops["CreateTransitGatewayMulticastDomain"].apply(partialParams));
    }
    invokeCreateTransitGatewayPeeringAttachment(partialParams) {
        this.boot();
        return this.client.createTransitGatewayPeeringAttachment(this.ops["CreateTransitGatewayPeeringAttachment"].apply(partialParams));
    }
    invokeCreateTransitGatewayRoute(partialParams) {
        this.boot();
        return this.client.createTransitGatewayRoute(this.ops["CreateTransitGatewayRoute"].apply(partialParams));
    }
    invokeCreateTransitGatewayRouteTable(partialParams) {
        this.boot();
        return this.client.createTransitGatewayRouteTable(this.ops["CreateTransitGatewayRouteTable"].apply(partialParams));
    }
    invokeCreateTransitGatewayVpcAttachment(partialParams) {
        this.boot();
        return this.client.createTransitGatewayVpcAttachment(this.ops["CreateTransitGatewayVpcAttachment"].apply(partialParams));
    }
    invokeDeleteCarrierGateway(partialParams) {
        this.boot();
        return this.client.deleteCarrierGateway(this.ops["DeleteCarrierGateway"].apply(partialParams));
    }
    invokeDeleteClientVpnRoute(partialParams) {
        this.boot();
        return this.client.deleteClientVpnRoute(this.ops["DeleteClientVpnRoute"].apply(partialParams));
    }
    invokeDeleteLocalGatewayRoute(partialParams) {
        this.boot();
        return this.client.deleteLocalGatewayRoute(this.ops["DeleteLocalGatewayRoute"].apply(partialParams));
    }
    invokeDeleteNatGateway(partialParams) {
        this.boot();
        return this.client.deleteNatGateway(this.ops["DeleteNatGateway"].apply(partialParams));
    }
    invokeDeleteTransitGateway(partialParams) {
        this.boot();
        return this.client.deleteTransitGateway(this.ops["DeleteTransitGateway"].apply(partialParams));
    }
    invokeDeleteTransitGatewayRoute(partialParams) {
        this.boot();
        return this.client.deleteTransitGatewayRoute(this.ops["DeleteTransitGatewayRoute"].apply(partialParams));
    }
    invokeDeleteVpcPeeringConnection(partialParams) {
        this.boot();
        return this.client.deleteVpcPeeringConnection(this.ops["DeleteVpcPeeringConnection"].apply(partialParams));
    }
    invokeDescribeInstanceAttribute(partialParams) {
        this.boot();
        return this.client.describeInstanceAttribute(this.ops["DescribeInstanceAttribute"].apply(partialParams));
    }
    invokeDescribeNetworkInterfaceAttribute(partialParams) {
        this.boot();
        return this.client.describeNetworkInterfaceAttribute(this.ops["DescribeNetworkInterfaceAttribute"].apply(partialParams));
    }
    invokeDetachClassicLinkVpc(partialParams) {
        this.boot();
        return this.client.detachClassicLinkVpc(this.ops["DetachClassicLinkVpc"].apply(partialParams));
    }
    invokeGetConsoleOutput(partialParams) {
        this.boot();
        return this.client.getConsoleOutput(this.ops["GetConsoleOutput"].apply(partialParams));
    }
    invokeGetConsoleScreenshot(partialParams) {
        this.boot();
        return this.client.getConsoleScreenshot(this.ops["GetConsoleScreenshot"].apply(partialParams));
    }
    invokeGetLaunchTemplateData(partialParams) {
        this.boot();
        return this.client.getLaunchTemplateData(this.ops["GetLaunchTemplateData"].apply(partialParams));
    }
    invokeGetPasswordData(partialParams) {
        this.boot();
        return this.client.getPasswordData(this.ops["GetPasswordData"].apply(partialParams));
    }
    invokeModifyInstanceCapacityReservationAttributes(partialParams) {
        this.boot();
        return this.client.modifyInstanceCapacityReservationAttributes(this.ops["ModifyInstanceCapacityReservationAttributes"].apply(partialParams));
    }
    invokeModifyInstanceEventStartTime(partialParams) {
        this.boot();
        return this.client.modifyInstanceEventStartTime(this.ops["ModifyInstanceEventStartTime"].apply(partialParams));
    }
    invokeModifyInstanceMetadataOptions(partialParams) {
        this.boot();
        return this.client.modifyInstanceMetadataOptions(this.ops["ModifyInstanceMetadataOptions"].apply(partialParams));
    }
    invokeModifyInstancePlacement(partialParams) {
        this.boot();
        return this.client.modifyInstancePlacement(this.ops["ModifyInstancePlacement"].apply(partialParams));
    }
    invokeModifyTransitGateway(partialParams) {
        this.boot();
        return this.client.modifyTransitGateway(this.ops["ModifyTransitGateway"].apply(partialParams));
    }
    invokeModifyVpcEndpoint(partialParams) {
        this.boot();
        return this.client.modifyVpcEndpoint(this.ops["ModifyVpcEndpoint"].apply(partialParams));
    }
    invokeModifyVpcPeeringConnectionOptions(partialParams) {
        this.boot();
        return this.client.modifyVpcPeeringConnectionOptions(this.ops["ModifyVpcPeeringConnectionOptions"].apply(partialParams));
    }
    invokeRejectVpcPeeringConnection(partialParams) {
        this.boot();
        return this.client.rejectVpcPeeringConnection(this.ops["RejectVpcPeeringConnection"].apply(partialParams));
    }
    invokeReplaceRouteTableAssociation(partialParams) {
        this.boot();
        return this.client.replaceRouteTableAssociation(this.ops["ReplaceRouteTableAssociation"].apply(partialParams));
    }
    invokeReplaceTransitGatewayRoute(partialParams) {
        this.boot();
        return this.client.replaceTransitGatewayRoute(this.ops["ReplaceTransitGatewayRoute"].apply(partialParams));
    }
    invokeUnassignIpv6Addresses(partialParams) {
        this.boot();
        return this.client.unassignIpv6Addresses(this.ops["UnassignIpv6Addresses"].apply(partialParams));
    }
}
exports.default = default_1;
