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
const schema = require("../apis/eks-2017-11-01.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.eks.IdentityProviderConfig {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.EKS();
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
    invokeAssociateEncryptionConfig(partialParams) {
        this.boot();
        return this.client.associateEncryptionConfig(this.ops["AssociateEncryptionConfig"].apply(partialParams));
    }
    invokeAssociateIdentityProviderConfig(partialParams) {
        this.boot();
        return this.client.associateIdentityProviderConfig(this.ops["AssociateIdentityProviderConfig"].apply(partialParams));
    }
    invokeCreateAddon(partialParams) {
        this.boot();
        return this.client.createAddon(this.ops["CreateAddon"].apply(partialParams));
    }
    invokeCreateCluster(partialParams) {
        this.boot();
        return this.client.createCluster(this.ops["CreateCluster"].apply(partialParams));
    }
    invokeCreateFargateProfile(partialParams) {
        this.boot();
        return this.client.createFargateProfile(this.ops["CreateFargateProfile"].apply(partialParams));
    }
    invokeCreateNodegroup(partialParams) {
        this.boot();
        return this.client.createNodegroup(this.ops["CreateNodegroup"].apply(partialParams));
    }
    invokeDeleteAddon(partialParams) {
        this.boot();
        return this.client.deleteAddon(this.ops["DeleteAddon"].apply(partialParams));
    }
    invokeDeleteCluster(partialParams) {
        this.boot();
        return this.client.deleteCluster(this.ops["DeleteCluster"].apply(partialParams));
    }
    invokeDeleteFargateProfile(partialParams) {
        this.boot();
        return this.client.deleteFargateProfile(this.ops["DeleteFargateProfile"].apply(partialParams));
    }
    invokeDeleteNodegroup(partialParams) {
        this.boot();
        return this.client.deleteNodegroup(this.ops["DeleteNodegroup"].apply(partialParams));
    }
    invokeDeregisterCluster(partialParams) {
        this.boot();
        return this.client.deregisterCluster(this.ops["DeregisterCluster"].apply(partialParams));
    }
    invokeDescribeAddon(partialParams) {
        this.boot();
        return this.client.describeAddon(this.ops["DescribeAddon"].apply(partialParams));
    }
    invokeDescribeAddonVersions(partialParams) {
        this.boot();
        return this.client.describeAddonVersions(this.ops["DescribeAddonVersions"].apply(partialParams));
    }
    invokeDescribeCluster(partialParams) {
        this.boot();
        return this.client.describeCluster(this.ops["DescribeCluster"].apply(partialParams));
    }
    invokeDescribeFargateProfile(partialParams) {
        this.boot();
        return this.client.describeFargateProfile(this.ops["DescribeFargateProfile"].apply(partialParams));
    }
    invokeDescribeIdentityProviderConfig(partialParams) {
        this.boot();
        return this.client.describeIdentityProviderConfig(this.ops["DescribeIdentityProviderConfig"].apply(partialParams));
    }
    invokeDescribeNodegroup(partialParams) {
        this.boot();
        return this.client.describeNodegroup(this.ops["DescribeNodegroup"].apply(partialParams));
    }
    invokeDescribeUpdate(partialParams) {
        this.boot();
        return this.client.describeUpdate(this.ops["DescribeUpdate"].apply(partialParams));
    }
    invokeDisassociateIdentityProviderConfig(partialParams) {
        this.boot();
        return this.client.disassociateIdentityProviderConfig(this.ops["DisassociateIdentityProviderConfig"].apply(partialParams));
    }
    invokeListAddons(partialParams) {
        this.boot();
        return this.client.listAddons(this.ops["ListAddons"].apply(partialParams));
    }
    invokeListClusters(partialParams) {
        this.boot();
        return this.client.listClusters(this.ops["ListClusters"].apply(partialParams));
    }
    invokeListFargateProfiles(partialParams) {
        this.boot();
        return this.client.listFargateProfiles(this.ops["ListFargateProfiles"].apply(partialParams));
    }
    invokeListIdentityProviderConfigs(partialParams) {
        this.boot();
        return this.client.listIdentityProviderConfigs(this.ops["ListIdentityProviderConfigs"].apply(partialParams));
    }
    invokeListNodegroups(partialParams) {
        this.boot();
        return this.client.listNodegroups(this.ops["ListNodegroups"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListUpdates(partialParams) {
        this.boot();
        return this.client.listUpdates(this.ops["ListUpdates"].apply(partialParams));
    }
    invokeRegisterCluster(partialParams) {
        this.boot();
        return this.client.registerCluster(this.ops["RegisterCluster"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateAddon(partialParams) {
        this.boot();
        return this.client.updateAddon(this.ops["UpdateAddon"].apply(partialParams));
    }
    invokeUpdateClusterConfig(partialParams) {
        this.boot();
        return this.client.updateClusterConfig(this.ops["UpdateClusterConfig"].apply(partialParams));
    }
    invokeUpdateClusterVersion(partialParams) {
        this.boot();
        return this.client.updateClusterVersion(this.ops["UpdateClusterVersion"].apply(partialParams));
    }
    invokeUpdateNodegroupConfig(partialParams) {
        this.boot();
        return this.client.updateNodegroupConfig(this.ops["UpdateNodegroupConfig"].apply(partialParams));
    }
    invokeUpdateNodegroupVersion(partialParams) {
        this.boot();
        return this.client.updateNodegroupVersion(this.ops["UpdateNodegroupVersion"].apply(partialParams));
    }
}
exports.default = default_1;
