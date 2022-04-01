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
class default_1 extends aws.globalaccelerator.Listener {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.GlobalAccelerator();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
            if (this[(0, parse_1.upperCamelCase)(this.constructor.name) + (0, parse_1.upperCamelCase)(key)] === undefined) {
                this.capitalizedParams[this.constructor.name + (0, parse_1.upperCamelCase)(key)] = value;
            }
            console.log(this.capitalizedParams);
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
    invokeAddCustomRoutingEndpoints(partialParams) {
        this.boot();
        return this.client.addCustomRoutingEndpoints(this.ops["AddCustomRoutingEndpoints"].apply(partialParams));
    }
    invokeAdvertiseByoipCidr(partialParams) {
        this.boot();
        return this.client.advertiseByoipCidr(this.ops["AdvertiseByoipCidr"].apply(partialParams));
    }
    invokeCreateAccelerator(partialParams) {
        this.boot();
        return this.client.createAccelerator(this.ops["CreateAccelerator"].apply(partialParams));
    }
    invokeCreateCustomRoutingAccelerator(partialParams) {
        this.boot();
        return this.client.createCustomRoutingAccelerator(this.ops["CreateCustomRoutingAccelerator"].apply(partialParams));
    }
    invokeCreateCustomRoutingEndpointGroup(partialParams) {
        this.boot();
        return this.client.createCustomRoutingEndpointGroup(this.ops["CreateCustomRoutingEndpointGroup"].apply(partialParams));
    }
    invokeCreateCustomRoutingListener(partialParams) {
        this.boot();
        return this.client.createCustomRoutingListener(this.ops["CreateCustomRoutingListener"].apply(partialParams));
    }
    invokeCreateEndpointGroup(partialParams) {
        this.boot();
        return this.client.createEndpointGroup(this.ops["CreateEndpointGroup"].apply(partialParams));
    }
    invokeCreateListener(partialParams) {
        this.boot();
        return this.client.createListener(this.ops["CreateListener"].apply(partialParams));
    }
    invokeDeprovisionByoipCidr(partialParams) {
        this.boot();
        return this.client.deprovisionByoipCidr(this.ops["DeprovisionByoipCidr"].apply(partialParams));
    }
    invokeDescribeAccelerator(partialParams) {
        this.boot();
        return this.client.describeAccelerator(this.ops["DescribeAccelerator"].apply(partialParams));
    }
    invokeDescribeAcceleratorAttributes(partialParams) {
        this.boot();
        return this.client.describeAcceleratorAttributes(this.ops["DescribeAcceleratorAttributes"].apply(partialParams));
    }
    invokeDescribeCustomRoutingAccelerator(partialParams) {
        this.boot();
        return this.client.describeCustomRoutingAccelerator(this.ops["DescribeCustomRoutingAccelerator"].apply(partialParams));
    }
    invokeDescribeCustomRoutingAcceleratorAttributes(partialParams) {
        this.boot();
        return this.client.describeCustomRoutingAcceleratorAttributes(this.ops["DescribeCustomRoutingAcceleratorAttributes"].apply(partialParams));
    }
    invokeDescribeCustomRoutingEndpointGroup(partialParams) {
        this.boot();
        return this.client.describeCustomRoutingEndpointGroup(this.ops["DescribeCustomRoutingEndpointGroup"].apply(partialParams));
    }
    invokeDescribeCustomRoutingListener(partialParams) {
        this.boot();
        return this.client.describeCustomRoutingListener(this.ops["DescribeCustomRoutingListener"].apply(partialParams));
    }
    invokeDescribeEndpointGroup(partialParams) {
        this.boot();
        return this.client.describeEndpointGroup(this.ops["DescribeEndpointGroup"].apply(partialParams));
    }
    invokeDescribeListener(partialParams) {
        this.boot();
        return this.client.describeListener(this.ops["DescribeListener"].apply(partialParams));
    }
    invokeListAccelerators(partialParams) {
        this.boot();
        return this.client.listAccelerators(this.ops["ListAccelerators"].apply(partialParams));
    }
    invokeListByoipCidrs(partialParams) {
        this.boot();
        return this.client.listByoipCidrs(this.ops["ListByoipCidrs"].apply(partialParams));
    }
    invokeListCustomRoutingAccelerators(partialParams) {
        this.boot();
        return this.client.listCustomRoutingAccelerators(this.ops["ListCustomRoutingAccelerators"].apply(partialParams));
    }
    invokeListCustomRoutingEndpointGroups(partialParams) {
        this.boot();
        return this.client.listCustomRoutingEndpointGroups(this.ops["ListCustomRoutingEndpointGroups"].apply(partialParams));
    }
    invokeListCustomRoutingListeners(partialParams) {
        this.boot();
        return this.client.listCustomRoutingListeners(this.ops["ListCustomRoutingListeners"].apply(partialParams));
    }
    invokeListCustomRoutingPortMappings(partialParams) {
        this.boot();
        return this.client.listCustomRoutingPortMappings(this.ops["ListCustomRoutingPortMappings"].apply(partialParams));
    }
    invokeListCustomRoutingPortMappingsByDestination(partialParams) {
        this.boot();
        return this.client.listCustomRoutingPortMappingsByDestination(this.ops["ListCustomRoutingPortMappingsByDestination"].apply(partialParams));
    }
    invokeListEndpointGroups(partialParams) {
        this.boot();
        return this.client.listEndpointGroups(this.ops["ListEndpointGroups"].apply(partialParams));
    }
    invokeListListeners(partialParams) {
        this.boot();
        return this.client.listListeners(this.ops["ListListeners"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeProvisionByoipCidr(partialParams) {
        this.boot();
        return this.client.provisionByoipCidr(this.ops["ProvisionByoipCidr"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateAccelerator(partialParams) {
        this.boot();
        return this.client.updateAccelerator(this.ops["UpdateAccelerator"].apply(partialParams));
    }
    invokeUpdateAcceleratorAttributes(partialParams) {
        this.boot();
        return this.client.updateAcceleratorAttributes(this.ops["UpdateAcceleratorAttributes"].apply(partialParams));
    }
    invokeUpdateCustomRoutingAccelerator(partialParams) {
        this.boot();
        return this.client.updateCustomRoutingAccelerator(this.ops["UpdateCustomRoutingAccelerator"].apply(partialParams));
    }
    invokeUpdateCustomRoutingAcceleratorAttributes(partialParams) {
        this.boot();
        return this.client.updateCustomRoutingAcceleratorAttributes(this.ops["UpdateCustomRoutingAcceleratorAttributes"].apply(partialParams));
    }
    invokeUpdateCustomRoutingListener(partialParams) {
        this.boot();
        return this.client.updateCustomRoutingListener(this.ops["UpdateCustomRoutingListener"].apply(partialParams));
    }
    invokeUpdateEndpointGroup(partialParams) {
        this.boot();
        return this.client.updateEndpointGroup(this.ops["UpdateEndpointGroup"].apply(partialParams));
    }
    invokeUpdateListener(partialParams) {
        this.boot();
        return this.client.updateListener(this.ops["UpdateListener"].apply(partialParams));
    }
    invokeWithdrawByoipCidr(partialParams) {
        this.boot();
        return this.client.withdrawByoipCidr(this.ops["WithdrawByoipCidr"].apply(partialParams));
    }
}
exports.default = default_1;
