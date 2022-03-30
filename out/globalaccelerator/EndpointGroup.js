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
class default_1 extends aws.globalaccelerator.EndpointGroup {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.GlobalAccelerator();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/globalaccelerator-2018-08-08.normal.json"), this.client);
    }
    invokeAddCustomRoutingEndpoints(partialParams) {
        return this.client.addCustomRoutingEndpoints(this.ops["AddCustomRoutingEndpoints"].apply(partialParams));
    }
    invokeAdvertiseByoipCidr(partialParams) {
        return this.client.advertiseByoipCidr(this.ops["AdvertiseByoipCidr"].apply(partialParams));
    }
    invokeAllowCustomRoutingTraffic(partialParams) {
        return this.client.allowCustomRoutingTraffic(this.ops["AllowCustomRoutingTraffic"].apply(partialParams));
    }
    invokeCreateAccelerator(partialParams) {
        return this.client.createAccelerator(this.ops["CreateAccelerator"].apply(partialParams));
    }
    invokeCreateCustomRoutingAccelerator(partialParams) {
        return this.client.createCustomRoutingAccelerator(this.ops["CreateCustomRoutingAccelerator"].apply(partialParams));
    }
    invokeCreateCustomRoutingEndpointGroup(partialParams) {
        return this.client.createCustomRoutingEndpointGroup(this.ops["CreateCustomRoutingEndpointGroup"].apply(partialParams));
    }
    invokeCreateCustomRoutingListener(partialParams) {
        return this.client.createCustomRoutingListener(this.ops["CreateCustomRoutingListener"].apply(partialParams));
    }
    invokeCreateEndpointGroup(partialParams) {
        return this.client.createEndpointGroup(this.ops["CreateEndpointGroup"].apply(partialParams));
    }
    invokeCreateListener(partialParams) {
        return this.client.createListener(this.ops["CreateListener"].apply(partialParams));
    }
    invokeDeleteAccelerator(partialParams) {
        return this.client.deleteAccelerator(this.ops["DeleteAccelerator"].apply(partialParams));
    }
    invokeDeleteCustomRoutingAccelerator(partialParams) {
        return this.client.deleteCustomRoutingAccelerator(this.ops["DeleteCustomRoutingAccelerator"].apply(partialParams));
    }
    invokeDeleteCustomRoutingEndpointGroup(partialParams) {
        return this.client.deleteCustomRoutingEndpointGroup(this.ops["DeleteCustomRoutingEndpointGroup"].apply(partialParams));
    }
    invokeDeleteCustomRoutingListener(partialParams) {
        return this.client.deleteCustomRoutingListener(this.ops["DeleteCustomRoutingListener"].apply(partialParams));
    }
    invokeDeleteEndpointGroup(partialParams) {
        return this.client.deleteEndpointGroup(this.ops["DeleteEndpointGroup"].apply(partialParams));
    }
    invokeDeleteListener(partialParams) {
        return this.client.deleteListener(this.ops["DeleteListener"].apply(partialParams));
    }
    invokeDenyCustomRoutingTraffic(partialParams) {
        return this.client.denyCustomRoutingTraffic(this.ops["DenyCustomRoutingTraffic"].apply(partialParams));
    }
    invokeDeprovisionByoipCidr(partialParams) {
        return this.client.deprovisionByoipCidr(this.ops["DeprovisionByoipCidr"].apply(partialParams));
    }
    invokeDescribeAccelerator(partialParams) {
        return this.client.describeAccelerator(this.ops["DescribeAccelerator"].apply(partialParams));
    }
    invokeDescribeAcceleratorAttributes(partialParams) {
        return this.client.describeAcceleratorAttributes(this.ops["DescribeAcceleratorAttributes"].apply(partialParams));
    }
    invokeDescribeCustomRoutingAccelerator(partialParams) {
        return this.client.describeCustomRoutingAccelerator(this.ops["DescribeCustomRoutingAccelerator"].apply(partialParams));
    }
    invokeDescribeCustomRoutingAcceleratorAttributes(partialParams) {
        return this.client.describeCustomRoutingAcceleratorAttributes(this.ops["DescribeCustomRoutingAcceleratorAttributes"].apply(partialParams));
    }
    invokeDescribeCustomRoutingEndpointGroup(partialParams) {
        return this.client.describeCustomRoutingEndpointGroup(this.ops["DescribeCustomRoutingEndpointGroup"].apply(partialParams));
    }
    invokeDescribeCustomRoutingListener(partialParams) {
        return this.client.describeCustomRoutingListener(this.ops["DescribeCustomRoutingListener"].apply(partialParams));
    }
    invokeDescribeEndpointGroup(partialParams) {
        return this.client.describeEndpointGroup(this.ops["DescribeEndpointGroup"].apply(partialParams));
    }
    invokeDescribeListener(partialParams) {
        return this.client.describeListener(this.ops["DescribeListener"].apply(partialParams));
    }
    invokeListCustomRoutingEndpointGroups(partialParams) {
        return this.client.listCustomRoutingEndpointGroups(this.ops["ListCustomRoutingEndpointGroups"].apply(partialParams));
    }
    invokeListCustomRoutingListeners(partialParams) {
        return this.client.listCustomRoutingListeners(this.ops["ListCustomRoutingListeners"].apply(partialParams));
    }
    invokeListCustomRoutingPortMappings(partialParams) {
        return this.client.listCustomRoutingPortMappings(this.ops["ListCustomRoutingPortMappings"].apply(partialParams));
    }
    invokeListCustomRoutingPortMappingsByDestination(partialParams) {
        return this.client.listCustomRoutingPortMappingsByDestination(this.ops["ListCustomRoutingPortMappingsByDestination"].apply(partialParams));
    }
    invokeListEndpointGroups(partialParams) {
        return this.client.listEndpointGroups(this.ops["ListEndpointGroups"].apply(partialParams));
    }
    invokeListListeners(partialParams) {
        return this.client.listListeners(this.ops["ListListeners"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeProvisionByoipCidr(partialParams) {
        return this.client.provisionByoipCidr(this.ops["ProvisionByoipCidr"].apply(partialParams));
    }
    invokeRemoveCustomRoutingEndpoints(partialParams) {
        return this.client.removeCustomRoutingEndpoints(this.ops["RemoveCustomRoutingEndpoints"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateAccelerator(partialParams) {
        return this.client.updateAccelerator(this.ops["UpdateAccelerator"].apply(partialParams));
    }
    invokeUpdateAcceleratorAttributes(partialParams) {
        return this.client.updateAcceleratorAttributes(this.ops["UpdateAcceleratorAttributes"].apply(partialParams));
    }
    invokeUpdateCustomRoutingAccelerator(partialParams) {
        return this.client.updateCustomRoutingAccelerator(this.ops["UpdateCustomRoutingAccelerator"].apply(partialParams));
    }
    invokeUpdateCustomRoutingAcceleratorAttributes(partialParams) {
        return this.client.updateCustomRoutingAcceleratorAttributes(this.ops["UpdateCustomRoutingAcceleratorAttributes"].apply(partialParams));
    }
    invokeUpdateCustomRoutingListener(partialParams) {
        return this.client.updateCustomRoutingListener(this.ops["UpdateCustomRoutingListener"].apply(partialParams));
    }
    invokeUpdateEndpointGroup(partialParams) {
        return this.client.updateEndpointGroup(this.ops["UpdateEndpointGroup"].apply(partialParams));
    }
    invokeUpdateListener(partialParams) {
        return this.client.updateListener(this.ops["UpdateListener"].apply(partialParams));
    }
    invokeWithdrawByoipCidr(partialParams) {
        return this.client.withdrawByoipCidr(this.ops["WithdrawByoipCidr"].apply(partialParams));
    }
}
exports.default = default_1;
