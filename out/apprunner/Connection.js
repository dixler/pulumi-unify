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
class default_1 extends aws.apprunner.Connection {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.AppRunner();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/apprunner-2020-05-15.normal.json"), this.client);
    }
    invokeAssociateCustomDomain(partialParams) {
        return this.client.associateCustomDomain(this.ops["AssociateCustomDomain"].apply(partialParams));
    }
    invokeCreateAutoScalingConfiguration(partialParams) {
        return this.client.createAutoScalingConfiguration(this.ops["CreateAutoScalingConfiguration"].apply(partialParams));
    }
    invokeCreateConnection(partialParams) {
        return this.client.createConnection(this.ops["CreateConnection"].apply(partialParams));
    }
    invokeCreateService(partialParams) {
        return this.client.createService(this.ops["CreateService"].apply(partialParams));
    }
    invokeCreateVpcConnector(partialParams) {
        return this.client.createVpcConnector(this.ops["CreateVpcConnector"].apply(partialParams));
    }
    invokeDeleteAutoScalingConfiguration(partialParams) {
        return this.client.deleteAutoScalingConfiguration(this.ops["DeleteAutoScalingConfiguration"].apply(partialParams));
    }
    invokeDeleteConnection(partialParams) {
        return this.client.deleteConnection(this.ops["DeleteConnection"].apply(partialParams));
    }
    invokeDeleteService(partialParams) {
        return this.client.deleteService(this.ops["DeleteService"].apply(partialParams));
    }
    invokeDeleteVpcConnector(partialParams) {
        return this.client.deleteVpcConnector(this.ops["DeleteVpcConnector"].apply(partialParams));
    }
    invokeDescribeAutoScalingConfiguration(partialParams) {
        return this.client.describeAutoScalingConfiguration(this.ops["DescribeAutoScalingConfiguration"].apply(partialParams));
    }
    invokeDescribeCustomDomains(partialParams) {
        return this.client.describeCustomDomains(this.ops["DescribeCustomDomains"].apply(partialParams));
    }
    invokeDescribeService(partialParams) {
        return this.client.describeService(this.ops["DescribeService"].apply(partialParams));
    }
    invokeDescribeVpcConnector(partialParams) {
        return this.client.describeVpcConnector(this.ops["DescribeVpcConnector"].apply(partialParams));
    }
    invokeDisassociateCustomDomain(partialParams) {
        return this.client.disassociateCustomDomain(this.ops["DisassociateCustomDomain"].apply(partialParams));
    }
    invokeListOperations(partialParams) {
        return this.client.listOperations(this.ops["ListOperations"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokePauseService(partialParams) {
        return this.client.pauseService(this.ops["PauseService"].apply(partialParams));
    }
    invokeResumeService(partialParams) {
        return this.client.resumeService(this.ops["ResumeService"].apply(partialParams));
    }
    invokeStartDeployment(partialParams) {
        return this.client.startDeployment(this.ops["StartDeployment"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateService(partialParams) {
        return this.client.updateService(this.ops["UpdateService"].apply(partialParams));
    }
}
exports.default = default_1;
