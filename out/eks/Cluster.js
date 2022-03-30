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
class default_1 extends aws.eks.Cluster {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.EKS();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/eks-2017-11-01.normal.json"), this.client);
    }
    invokeAssociateEncryptionConfig(partialParams) {
        return this.client.associateEncryptionConfig(this.ops["AssociateEncryptionConfig"].apply(partialParams));
    }
    invokeAssociateIdentityProviderConfig(partialParams) {
        return this.client.associateIdentityProviderConfig(this.ops["AssociateIdentityProviderConfig"].apply(partialParams));
    }
    invokeCreateAddon(partialParams) {
        return this.client.createAddon(this.ops["CreateAddon"].apply(partialParams));
    }
    invokeCreateCluster(partialParams) {
        return this.client.createCluster(this.ops["CreateCluster"].apply(partialParams));
    }
    invokeCreateFargateProfile(partialParams) {
        return this.client.createFargateProfile(this.ops["CreateFargateProfile"].apply(partialParams));
    }
    invokeCreateNodegroup(partialParams) {
        return this.client.createNodegroup(this.ops["CreateNodegroup"].apply(partialParams));
    }
    invokeDeleteAddon(partialParams) {
        return this.client.deleteAddon(this.ops["DeleteAddon"].apply(partialParams));
    }
    invokeDeleteCluster(partialParams) {
        return this.client.deleteCluster(this.ops["DeleteCluster"].apply(partialParams));
    }
    invokeDeleteFargateProfile(partialParams) {
        return this.client.deleteFargateProfile(this.ops["DeleteFargateProfile"].apply(partialParams));
    }
    invokeDeleteNodegroup(partialParams) {
        return this.client.deleteNodegroup(this.ops["DeleteNodegroup"].apply(partialParams));
    }
    invokeDeregisterCluster(partialParams) {
        return this.client.deregisterCluster(this.ops["DeregisterCluster"].apply(partialParams));
    }
    invokeDescribeAddon(partialParams) {
        return this.client.describeAddon(this.ops["DescribeAddon"].apply(partialParams));
    }
    invokeDescribeCluster(partialParams) {
        return this.client.describeCluster(this.ops["DescribeCluster"].apply(partialParams));
    }
    invokeDescribeFargateProfile(partialParams) {
        return this.client.describeFargateProfile(this.ops["DescribeFargateProfile"].apply(partialParams));
    }
    invokeDescribeIdentityProviderConfig(partialParams) {
        return this.client.describeIdentityProviderConfig(this.ops["DescribeIdentityProviderConfig"].apply(partialParams));
    }
    invokeDescribeNodegroup(partialParams) {
        return this.client.describeNodegroup(this.ops["DescribeNodegroup"].apply(partialParams));
    }
    invokeDescribeUpdate(partialParams) {
        return this.client.describeUpdate(this.ops["DescribeUpdate"].apply(partialParams));
    }
    invokeDisassociateIdentityProviderConfig(partialParams) {
        return this.client.disassociateIdentityProviderConfig(this.ops["DisassociateIdentityProviderConfig"].apply(partialParams));
    }
    invokeListAddons(partialParams) {
        return this.client.listAddons(this.ops["ListAddons"].apply(partialParams));
    }
    invokeListFargateProfiles(partialParams) {
        return this.client.listFargateProfiles(this.ops["ListFargateProfiles"].apply(partialParams));
    }
    invokeListIdentityProviderConfigs(partialParams) {
        return this.client.listIdentityProviderConfigs(this.ops["ListIdentityProviderConfigs"].apply(partialParams));
    }
    invokeListNodegroups(partialParams) {
        return this.client.listNodegroups(this.ops["ListNodegroups"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListUpdates(partialParams) {
        return this.client.listUpdates(this.ops["ListUpdates"].apply(partialParams));
    }
    invokeRegisterCluster(partialParams) {
        return this.client.registerCluster(this.ops["RegisterCluster"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateAddon(partialParams) {
        return this.client.updateAddon(this.ops["UpdateAddon"].apply(partialParams));
    }
    invokeUpdateClusterConfig(partialParams) {
        return this.client.updateClusterConfig(this.ops["UpdateClusterConfig"].apply(partialParams));
    }
    invokeUpdateClusterVersion(partialParams) {
        return this.client.updateClusterVersion(this.ops["UpdateClusterVersion"].apply(partialParams));
    }
    invokeUpdateNodegroupConfig(partialParams) {
        return this.client.updateNodegroupConfig(this.ops["UpdateNodegroupConfig"].apply(partialParams));
    }
    invokeUpdateNodegroupVersion(partialParams) {
        return this.client.updateNodegroupVersion(this.ops["UpdateNodegroupVersion"].apply(partialParams));
    }
}
exports.default = default_1;
