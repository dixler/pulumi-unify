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
class default_1 extends aws.codeartifact.Domain {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.CodeArtifact();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/codeartifact-2018-09-22.normal.json"), this.client);
    }
    invokeAssociateExternalConnection(partialParams) {
        return this.client.associateExternalConnection(this.ops["AssociateExternalConnection"].apply(partialParams));
    }
    invokeCopyPackageVersions(partialParams) {
        return this.client.copyPackageVersions(this.ops["CopyPackageVersions"].apply(partialParams));
    }
    invokeCreateDomain(partialParams) {
        return this.client.createDomain(this.ops["CreateDomain"].apply(partialParams));
    }
    invokeCreateRepository(partialParams) {
        return this.client.createRepository(this.ops["CreateRepository"].apply(partialParams));
    }
    invokeDeleteDomain(partialParams) {
        return this.client.deleteDomain(this.ops["DeleteDomain"].apply(partialParams));
    }
    invokeDeleteDomainPermissionsPolicy(partialParams) {
        return this.client.deleteDomainPermissionsPolicy(this.ops["DeleteDomainPermissionsPolicy"].apply(partialParams));
    }
    invokeDeletePackageVersions(partialParams) {
        return this.client.deletePackageVersions(this.ops["DeletePackageVersions"].apply(partialParams));
    }
    invokeDeleteRepository(partialParams) {
        return this.client.deleteRepository(this.ops["DeleteRepository"].apply(partialParams));
    }
    invokeDeleteRepositoryPermissionsPolicy(partialParams) {
        return this.client.deleteRepositoryPermissionsPolicy(this.ops["DeleteRepositoryPermissionsPolicy"].apply(partialParams));
    }
    invokeDescribeDomain(partialParams) {
        return this.client.describeDomain(this.ops["DescribeDomain"].apply(partialParams));
    }
    invokeDescribePackageVersion(partialParams) {
        return this.client.describePackageVersion(this.ops["DescribePackageVersion"].apply(partialParams));
    }
    invokeDescribeRepository(partialParams) {
        return this.client.describeRepository(this.ops["DescribeRepository"].apply(partialParams));
    }
    invokeDisassociateExternalConnection(partialParams) {
        return this.client.disassociateExternalConnection(this.ops["DisassociateExternalConnection"].apply(partialParams));
    }
    invokeDisposePackageVersions(partialParams) {
        return this.client.disposePackageVersions(this.ops["DisposePackageVersions"].apply(partialParams));
    }
    invokeGetAuthorizationToken(partialParams) {
        return this.client.getAuthorizationToken(this.ops["GetAuthorizationToken"].apply(partialParams));
    }
    invokeGetDomainPermissionsPolicy(partialParams) {
        return this.client.getDomainPermissionsPolicy(this.ops["GetDomainPermissionsPolicy"].apply(partialParams));
    }
    invokeGetPackageVersionAsset(partialParams) {
        return this.client.getPackageVersionAsset(this.ops["GetPackageVersionAsset"].apply(partialParams));
    }
    invokeGetPackageVersionReadme(partialParams) {
        return this.client.getPackageVersionReadme(this.ops["GetPackageVersionReadme"].apply(partialParams));
    }
    invokeGetRepositoryEndpoint(partialParams) {
        return this.client.getRepositoryEndpoint(this.ops["GetRepositoryEndpoint"].apply(partialParams));
    }
    invokeGetRepositoryPermissionsPolicy(partialParams) {
        return this.client.getRepositoryPermissionsPolicy(this.ops["GetRepositoryPermissionsPolicy"].apply(partialParams));
    }
    invokeListPackageVersionAssets(partialParams) {
        return this.client.listPackageVersionAssets(this.ops["ListPackageVersionAssets"].apply(partialParams));
    }
    invokeListPackageVersionDependencies(partialParams) {
        return this.client.listPackageVersionDependencies(this.ops["ListPackageVersionDependencies"].apply(partialParams));
    }
    invokeListPackageVersions(partialParams) {
        return this.client.listPackageVersions(this.ops["ListPackageVersions"].apply(partialParams));
    }
    invokeListPackages(partialParams) {
        return this.client.listPackages(this.ops["ListPackages"].apply(partialParams));
    }
    invokeListRepositoriesInDomain(partialParams) {
        return this.client.listRepositoriesInDomain(this.ops["ListRepositoriesInDomain"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokePutDomainPermissionsPolicy(partialParams) {
        return this.client.putDomainPermissionsPolicy(this.ops["PutDomainPermissionsPolicy"].apply(partialParams));
    }
    invokePutRepositoryPermissionsPolicy(partialParams) {
        return this.client.putRepositoryPermissionsPolicy(this.ops["PutRepositoryPermissionsPolicy"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdatePackageVersionsStatus(partialParams) {
        return this.client.updatePackageVersionsStatus(this.ops["UpdatePackageVersionsStatus"].apply(partialParams));
    }
    invokeUpdateRepository(partialParams) {
        return this.client.updateRepository(this.ops["UpdateRepository"].apply(partialParams));
    }
}
exports.default = default_1;
