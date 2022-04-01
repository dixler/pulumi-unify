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
const schema = require("../apis/apprunner-2020-05-15.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.apprunner.Connection {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.AppRunner();
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
    invokeAssociateCustomDomain(partialParams) {
        this.boot();
        return this.client.associateCustomDomain(this.ops["AssociateCustomDomain"].apply(partialParams));
    }
    invokeCreateAutoScalingConfiguration(partialParams) {
        this.boot();
        return this.client.createAutoScalingConfiguration(this.ops["CreateAutoScalingConfiguration"].apply(partialParams));
    }
    invokeCreateConnection(partialParams) {
        this.boot();
        return this.client.createConnection(this.ops["CreateConnection"].apply(partialParams));
    }
    invokeCreateService(partialParams) {
        this.boot();
        return this.client.createService(this.ops["CreateService"].apply(partialParams));
    }
    invokeCreateVpcConnector(partialParams) {
        this.boot();
        return this.client.createVpcConnector(this.ops["CreateVpcConnector"].apply(partialParams));
    }
    invokeDeleteAutoScalingConfiguration(partialParams) {
        this.boot();
        return this.client.deleteAutoScalingConfiguration(this.ops["DeleteAutoScalingConfiguration"].apply(partialParams));
    }
    invokeDeleteConnection(partialParams) {
        this.boot();
        return this.client.deleteConnection(this.ops["DeleteConnection"].apply(partialParams));
    }
    invokeDeleteService(partialParams) {
        this.boot();
        return this.client.deleteService(this.ops["DeleteService"].apply(partialParams));
    }
    invokeDeleteVpcConnector(partialParams) {
        this.boot();
        return this.client.deleteVpcConnector(this.ops["DeleteVpcConnector"].apply(partialParams));
    }
    invokeDescribeAutoScalingConfiguration(partialParams) {
        this.boot();
        return this.client.describeAutoScalingConfiguration(this.ops["DescribeAutoScalingConfiguration"].apply(partialParams));
    }
    invokeDescribeCustomDomains(partialParams) {
        this.boot();
        return this.client.describeCustomDomains(this.ops["DescribeCustomDomains"].apply(partialParams));
    }
    invokeDescribeService(partialParams) {
        this.boot();
        return this.client.describeService(this.ops["DescribeService"].apply(partialParams));
    }
    invokeDescribeVpcConnector(partialParams) {
        this.boot();
        return this.client.describeVpcConnector(this.ops["DescribeVpcConnector"].apply(partialParams));
    }
    invokeDisassociateCustomDomain(partialParams) {
        this.boot();
        return this.client.disassociateCustomDomain(this.ops["DisassociateCustomDomain"].apply(partialParams));
    }
    invokeListAutoScalingConfigurations(partialParams) {
        this.boot();
        return this.client.listAutoScalingConfigurations(this.ops["ListAutoScalingConfigurations"].apply(partialParams));
    }
    invokeListConnections(partialParams) {
        this.boot();
        return this.client.listConnections(this.ops["ListConnections"].apply(partialParams));
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
    invokeListVpcConnectors(partialParams) {
        this.boot();
        return this.client.listVpcConnectors(this.ops["ListVpcConnectors"].apply(partialParams));
    }
    invokePauseService(partialParams) {
        this.boot();
        return this.client.pauseService(this.ops["PauseService"].apply(partialParams));
    }
    invokeResumeService(partialParams) {
        this.boot();
        return this.client.resumeService(this.ops["ResumeService"].apply(partialParams));
    }
    invokeStartDeployment(partialParams) {
        this.boot();
        return this.client.startDeployment(this.ops["StartDeployment"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateService(partialParams) {
        this.boot();
        return this.client.updateService(this.ops["UpdateService"].apply(partialParams));
    }
}
exports.default = default_1;
