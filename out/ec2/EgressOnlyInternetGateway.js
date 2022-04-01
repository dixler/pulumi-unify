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
class default_1 extends aws.ec2.EgressOnlyInternetGateway {
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
    invokeApplySecurityGroupsToClientVpnTargetNetwork(partialParams) {
        this.boot();
        return this.client.applySecurityGroupsToClientVpnTargetNetwork(this.ops["ApplySecurityGroupsToClientVpnTargetNetwork"].apply(partialParams));
    }
    invokeAssociateVpcCidrBlock(partialParams) {
        this.boot();
        return this.client.associateVpcCidrBlock(this.ops["AssociateVpcCidrBlock"].apply(partialParams));
    }
    invokeAttachClassicLinkVpc(partialParams) {
        this.boot();
        return this.client.attachClassicLinkVpc(this.ops["AttachClassicLinkVpc"].apply(partialParams));
    }
    invokeAttachVpnGateway(partialParams) {
        this.boot();
        return this.client.attachVpnGateway(this.ops["AttachVpnGateway"].apply(partialParams));
    }
    invokeCreateCarrierGateway(partialParams) {
        this.boot();
        return this.client.createCarrierGateway(this.ops["CreateCarrierGateway"].apply(partialParams));
    }
    invokeCreateEgressOnlyInternetGateway(partialParams) {
        this.boot();
        return this.client.createEgressOnlyInternetGateway(this.ops["CreateEgressOnlyInternetGateway"].apply(partialParams));
    }
    invokeCreateLocalGatewayRouteTableVpcAssociation(partialParams) {
        this.boot();
        return this.client.createLocalGatewayRouteTableVpcAssociation(this.ops["CreateLocalGatewayRouteTableVpcAssociation"].apply(partialParams));
    }
    invokeCreateNetworkAcl(partialParams) {
        this.boot();
        return this.client.createNetworkAcl(this.ops["CreateNetworkAcl"].apply(partialParams));
    }
    invokeCreateRouteTable(partialParams) {
        this.boot();
        return this.client.createRouteTable(this.ops["CreateRouteTable"].apply(partialParams));
    }
    invokeCreateSubnet(partialParams) {
        this.boot();
        return this.client.createSubnet(this.ops["CreateSubnet"].apply(partialParams));
    }
    invokeCreateTransitGatewayVpcAttachment(partialParams) {
        this.boot();
        return this.client.createTransitGatewayVpcAttachment(this.ops["CreateTransitGatewayVpcAttachment"].apply(partialParams));
    }
    invokeCreateVpcEndpoint(partialParams) {
        this.boot();
        return this.client.createVpcEndpoint(this.ops["CreateVpcEndpoint"].apply(partialParams));
    }
    invokeDescribeStaleSecurityGroups(partialParams) {
        this.boot();
        return this.client.describeStaleSecurityGroups(this.ops["DescribeStaleSecurityGroups"].apply(partialParams));
    }
    invokeDescribeVpcAttribute(partialParams) {
        this.boot();
        return this.client.describeVpcAttribute(this.ops["DescribeVpcAttribute"].apply(partialParams));
    }
    invokeDetachClassicLinkVpc(partialParams) {
        this.boot();
        return this.client.detachClassicLinkVpc(this.ops["DetachClassicLinkVpc"].apply(partialParams));
    }
    invokeDisableVpcClassicLink(partialParams) {
        this.boot();
        return this.client.disableVpcClassicLink(this.ops["DisableVpcClassicLink"].apply(partialParams));
    }
    invokeEnableVpcClassicLink(partialParams) {
        this.boot();
        return this.client.enableVpcClassicLink(this.ops["EnableVpcClassicLink"].apply(partialParams));
    }
    invokeModifyVpcTenancy(partialParams) {
        this.boot();
        return this.client.modifyVpcTenancy(this.ops["ModifyVpcTenancy"].apply(partialParams));
    }
}
exports.default = default_1;
