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
const schema = require("../apis/servicediscovery-2017-03-14.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.servicediscovery.Service {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.ServiceDiscovery();
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
    invokeCreateHttpNamespace(partialParams) {
        this.boot();
        return this.client.createHttpNamespace(this.ops["CreateHttpNamespace"].apply(partialParams));
    }
    invokeCreatePrivateDnsNamespace(partialParams) {
        this.boot();
        return this.client.createPrivateDnsNamespace(this.ops["CreatePrivateDnsNamespace"].apply(partialParams));
    }
    invokeCreatePublicDnsNamespace(partialParams) {
        this.boot();
        return this.client.createPublicDnsNamespace(this.ops["CreatePublicDnsNamespace"].apply(partialParams));
    }
    invokeCreateService(partialParams) {
        this.boot();
        return this.client.createService(this.ops["CreateService"].apply(partialParams));
    }
    invokeDeleteNamespace(partialParams) {
        this.boot();
        return this.client.deleteNamespace(this.ops["DeleteNamespace"].apply(partialParams));
    }
    invokeDeleteService(partialParams) {
        this.boot();
        return this.client.deleteService(this.ops["DeleteService"].apply(partialParams));
    }
    invokeDeregisterInstance(partialParams) {
        this.boot();
        return this.client.deregisterInstance(this.ops["DeregisterInstance"].apply(partialParams));
    }
    invokeDiscoverInstances(partialParams) {
        this.boot();
        return this.client.discoverInstances(this.ops["DiscoverInstances"].apply(partialParams));
    }
    invokeGetInstance(partialParams) {
        this.boot();
        return this.client.getInstance(this.ops["GetInstance"].apply(partialParams));
    }
    invokeGetInstancesHealthStatus(partialParams) {
        this.boot();
        return this.client.getInstancesHealthStatus(this.ops["GetInstancesHealthStatus"].apply(partialParams));
    }
    invokeGetNamespace(partialParams) {
        this.boot();
        return this.client.getNamespace(this.ops["GetNamespace"].apply(partialParams));
    }
    invokeGetOperation(partialParams) {
        this.boot();
        return this.client.getOperation(this.ops["GetOperation"].apply(partialParams));
    }
    invokeGetService(partialParams) {
        this.boot();
        return this.client.getService(this.ops["GetService"].apply(partialParams));
    }
    invokeListInstances(partialParams) {
        this.boot();
        return this.client.listInstances(this.ops["ListInstances"].apply(partialParams));
    }
    invokeListNamespaces(partialParams) {
        this.boot();
        return this.client.listNamespaces(this.ops["ListNamespaces"].apply(partialParams));
    }
    invokeListOperations(partialParams) {
        this.boot();
        return this.client.listOperations(this.ops["ListOperations"].apply(partialParams));
    }
    invokeListServices(partialParams) {
        this.boot();
        return this.client.listServices(this.ops["ListServices"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeRegisterInstance(partialParams) {
        this.boot();
        return this.client.registerInstance(this.ops["RegisterInstance"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateHttpNamespace(partialParams) {
        this.boot();
        return this.client.updateHttpNamespace(this.ops["UpdateHttpNamespace"].apply(partialParams));
    }
    invokeUpdatePrivateDnsNamespace(partialParams) {
        this.boot();
        return this.client.updatePrivateDnsNamespace(this.ops["UpdatePrivateDnsNamespace"].apply(partialParams));
    }
    invokeUpdatePublicDnsNamespace(partialParams) {
        this.boot();
        return this.client.updatePublicDnsNamespace(this.ops["UpdatePublicDnsNamespace"].apply(partialParams));
    }
    invokeUpdateService(partialParams) {
        this.boot();
        return this.client.updateService(this.ops["UpdateService"].apply(partialParams));
    }
}
exports.default = default_1;
