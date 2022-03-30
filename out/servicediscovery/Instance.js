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
class default_1 extends aws.servicediscovery.Instance {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.ServiceDiscovery();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/servicediscovery-2017-03-14.normal.json"), this.client);
    }
    invokeCreateHttpNamespace(partialParams) {
        return this.client.createHttpNamespace(this.ops["CreateHttpNamespace"].apply(partialParams));
    }
    invokeCreatePrivateDnsNamespace(partialParams) {
        return this.client.createPrivateDnsNamespace(this.ops["CreatePrivateDnsNamespace"].apply(partialParams));
    }
    invokeCreatePublicDnsNamespace(partialParams) {
        return this.client.createPublicDnsNamespace(this.ops["CreatePublicDnsNamespace"].apply(partialParams));
    }
    invokeCreateService(partialParams) {
        return this.client.createService(this.ops["CreateService"].apply(partialParams));
    }
    invokeDeleteNamespace(partialParams) {
        return this.client.deleteNamespace(this.ops["DeleteNamespace"].apply(partialParams));
    }
    invokeDeleteService(partialParams) {
        return this.client.deleteService(this.ops["DeleteService"].apply(partialParams));
    }
    invokeDeregisterInstance(partialParams) {
        return this.client.deregisterInstance(this.ops["DeregisterInstance"].apply(partialParams));
    }
    invokeDiscoverInstances(partialParams) {
        return this.client.discoverInstances(this.ops["DiscoverInstances"].apply(partialParams));
    }
    invokeGetInstance(partialParams) {
        return this.client.getInstance(this.ops["GetInstance"].apply(partialParams));
    }
    invokeGetInstancesHealthStatus(partialParams) {
        return this.client.getInstancesHealthStatus(this.ops["GetInstancesHealthStatus"].apply(partialParams));
    }
    invokeGetNamespace(partialParams) {
        return this.client.getNamespace(this.ops["GetNamespace"].apply(partialParams));
    }
    invokeGetOperation(partialParams) {
        return this.client.getOperation(this.ops["GetOperation"].apply(partialParams));
    }
    invokeGetService(partialParams) {
        return this.client.getService(this.ops["GetService"].apply(partialParams));
    }
    invokeListInstances(partialParams) {
        return this.client.listInstances(this.ops["ListInstances"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeRegisterInstance(partialParams) {
        return this.client.registerInstance(this.ops["RegisterInstance"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateHttpNamespace(partialParams) {
        return this.client.updateHttpNamespace(this.ops["UpdateHttpNamespace"].apply(partialParams));
    }
    invokeUpdateInstanceCustomHealthStatus(partialParams) {
        return this.client.updateInstanceCustomHealthStatus(this.ops["UpdateInstanceCustomHealthStatus"].apply(partialParams));
    }
    invokeUpdatePrivateDnsNamespace(partialParams) {
        return this.client.updatePrivateDnsNamespace(this.ops["UpdatePrivateDnsNamespace"].apply(partialParams));
    }
    invokeUpdatePublicDnsNamespace(partialParams) {
        return this.client.updatePublicDnsNamespace(this.ops["UpdatePublicDnsNamespace"].apply(partialParams));
    }
    invokeUpdateService(partialParams) {
        return this.client.updateService(this.ops["UpdateService"].apply(partialParams));
    }
}
exports.default = default_1;
