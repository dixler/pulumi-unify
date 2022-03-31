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
const schema = require("../apis/globalaccelerator-2018-08-08.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.globalaccelerator.EndpointGroup {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.GlobalAccelerator();
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
    invokeAddCustomRoutingEndpoints(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addCustomRoutingEndpoints(this.ops["AddCustomRoutingEndpoints"].applicator.apply(partialParams));
    }
    invokeAdvertiseByoipCidr(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.advertiseByoipCidr(this.ops["AdvertiseByoipCidr"].applicator.apply(partialParams));
    }
    invokeAllowCustomRoutingTraffic(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.allowCustomRoutingTraffic(this.ops["AllowCustomRoutingTraffic"].applicator.apply(partialParams));
    }
    invokeCreateAccelerator(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAccelerator(this.ops["CreateAccelerator"].applicator.apply(partialParams));
    }
    invokeCreateCustomRoutingAccelerator(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCustomRoutingAccelerator(this.ops["CreateCustomRoutingAccelerator"].applicator.apply(partialParams));
    }
    invokeCreateCustomRoutingEndpointGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCustomRoutingEndpointGroup(this.ops["CreateCustomRoutingEndpointGroup"].applicator.apply(partialParams));
    }
    invokeCreateCustomRoutingListener(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCustomRoutingListener(this.ops["CreateCustomRoutingListener"].applicator.apply(partialParams));
    }
    invokeCreateEndpointGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createEndpointGroup(this.ops["CreateEndpointGroup"].applicator.apply(partialParams));
    }
    invokeCreateListener(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createListener(this.ops["CreateListener"].applicator.apply(partialParams));
    }
    invokeDeleteAccelerator(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAccelerator(this.ops["DeleteAccelerator"].applicator.apply(partialParams));
    }
    invokeDeleteCustomRoutingAccelerator(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCustomRoutingAccelerator(this.ops["DeleteCustomRoutingAccelerator"].applicator.apply(partialParams));
    }
    invokeDeleteCustomRoutingEndpointGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCustomRoutingEndpointGroup(this.ops["DeleteCustomRoutingEndpointGroup"].applicator.apply(partialParams));
    }
    invokeDeleteCustomRoutingListener(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCustomRoutingListener(this.ops["DeleteCustomRoutingListener"].applicator.apply(partialParams));
    }
    invokeDeleteEndpointGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEndpointGroup(this.ops["DeleteEndpointGroup"].applicator.apply(partialParams));
    }
    invokeDeleteListener(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteListener(this.ops["DeleteListener"].applicator.apply(partialParams));
    }
    invokeDenyCustomRoutingTraffic(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.denyCustomRoutingTraffic(this.ops["DenyCustomRoutingTraffic"].applicator.apply(partialParams));
    }
    invokeDeprovisionByoipCidr(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deprovisionByoipCidr(this.ops["DeprovisionByoipCidr"].applicator.apply(partialParams));
    }
    invokeDescribeAccelerator(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAccelerator(this.ops["DescribeAccelerator"].applicator.apply(partialParams));
    }
    invokeDescribeAcceleratorAttributes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAcceleratorAttributes(this.ops["DescribeAcceleratorAttributes"].applicator.apply(partialParams));
    }
    invokeDescribeCustomRoutingAccelerator(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCustomRoutingAccelerator(this.ops["DescribeCustomRoutingAccelerator"].applicator.apply(partialParams));
    }
    invokeDescribeCustomRoutingAcceleratorAttributes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCustomRoutingAcceleratorAttributes(this.ops["DescribeCustomRoutingAcceleratorAttributes"].applicator.apply(partialParams));
    }
    invokeDescribeCustomRoutingEndpointGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCustomRoutingEndpointGroup(this.ops["DescribeCustomRoutingEndpointGroup"].applicator.apply(partialParams));
    }
    invokeDescribeCustomRoutingListener(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCustomRoutingListener(this.ops["DescribeCustomRoutingListener"].applicator.apply(partialParams));
    }
    invokeDescribeEndpointGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeEndpointGroup(this.ops["DescribeEndpointGroup"].applicator.apply(partialParams));
    }
    invokeDescribeListener(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeListener(this.ops["DescribeListener"].applicator.apply(partialParams));
    }
    invokeListCustomRoutingEndpointGroups(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listCustomRoutingEndpointGroups(this.ops["ListCustomRoutingEndpointGroups"].applicator.apply(partialParams));
    }
    invokeListCustomRoutingListeners(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listCustomRoutingListeners(this.ops["ListCustomRoutingListeners"].applicator.apply(partialParams));
    }
    invokeListCustomRoutingPortMappings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listCustomRoutingPortMappings(this.ops["ListCustomRoutingPortMappings"].applicator.apply(partialParams));
    }
    invokeListCustomRoutingPortMappingsByDestination(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listCustomRoutingPortMappingsByDestination(this.ops["ListCustomRoutingPortMappingsByDestination"].applicator.apply(partialParams));
    }
    invokeListEndpointGroups(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listEndpointGroups(this.ops["ListEndpointGroups"].applicator.apply(partialParams));
    }
    invokeListListeners(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listListeners(this.ops["ListListeners"].applicator.apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].applicator.apply(partialParams));
    }
    invokeProvisionByoipCidr(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.provisionByoipCidr(this.ops["ProvisionByoipCidr"].applicator.apply(partialParams));
    }
    invokeRemoveCustomRoutingEndpoints(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeCustomRoutingEndpoints(this.ops["RemoveCustomRoutingEndpoints"].applicator.apply(partialParams));
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
    invokeUpdateAccelerator(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAccelerator(this.ops["UpdateAccelerator"].applicator.apply(partialParams));
    }
    invokeUpdateAcceleratorAttributes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAcceleratorAttributes(this.ops["UpdateAcceleratorAttributes"].applicator.apply(partialParams));
    }
    invokeUpdateCustomRoutingAccelerator(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCustomRoutingAccelerator(this.ops["UpdateCustomRoutingAccelerator"].applicator.apply(partialParams));
    }
    invokeUpdateCustomRoutingAcceleratorAttributes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCustomRoutingAcceleratorAttributes(this.ops["UpdateCustomRoutingAcceleratorAttributes"].applicator.apply(partialParams));
    }
    invokeUpdateCustomRoutingListener(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCustomRoutingListener(this.ops["UpdateCustomRoutingListener"].applicator.apply(partialParams));
    }
    invokeUpdateEndpointGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateEndpointGroup(this.ops["UpdateEndpointGroup"].applicator.apply(partialParams));
    }
    invokeUpdateListener(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateListener(this.ops["UpdateListener"].applicator.apply(partialParams));
    }
    invokeWithdrawByoipCidr(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.withdrawByoipCidr(this.ops["WithdrawByoipCidr"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
