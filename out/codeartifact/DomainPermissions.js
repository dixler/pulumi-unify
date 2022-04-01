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
const schema = require("../apis/codeartifact-2018-09-22.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.codeartifact.DomainPermissions {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.CodeArtifact();
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
    invokeAssociateExternalConnection(partialParams) {
        this.boot();
        return this.client.associateExternalConnection(this.ops["AssociateExternalConnection"].apply(partialParams));
    }
    invokeCopyPackageVersions(partialParams) {
        this.boot();
        return this.client.copyPackageVersions(this.ops["CopyPackageVersions"].apply(partialParams));
    }
    invokeCreateDomain(partialParams) {
        this.boot();
        return this.client.createDomain(this.ops["CreateDomain"].apply(partialParams));
    }
    invokeCreateRepository(partialParams) {
        this.boot();
        return this.client.createRepository(this.ops["CreateRepository"].apply(partialParams));
    }
    invokeDeleteDomain(partialParams) {
        this.boot();
        return this.client.deleteDomain(this.ops["DeleteDomain"].apply(partialParams));
    }
    invokeDeleteDomainPermissionsPolicy(partialParams) {
        this.boot();
        return this.client.deleteDomainPermissionsPolicy(this.ops["DeleteDomainPermissionsPolicy"].apply(partialParams));
    }
    invokeDeletePackageVersions(partialParams) {
        this.boot();
        return this.client.deletePackageVersions(this.ops["DeletePackageVersions"].apply(partialParams));
    }
    invokeDeleteRepository(partialParams) {
        this.boot();
        return this.client.deleteRepository(this.ops["DeleteRepository"].apply(partialParams));
    }
    invokeDeleteRepositoryPermissionsPolicy(partialParams) {
        this.boot();
        return this.client.deleteRepositoryPermissionsPolicy(this.ops["DeleteRepositoryPermissionsPolicy"].apply(partialParams));
    }
    invokeDescribeDomain(partialParams) {
        this.boot();
        return this.client.describeDomain(this.ops["DescribeDomain"].apply(partialParams));
    }
    invokeDescribePackageVersion(partialParams) {
        this.boot();
        return this.client.describePackageVersion(this.ops["DescribePackageVersion"].apply(partialParams));
    }
    invokeDescribeRepository(partialParams) {
        this.boot();
        return this.client.describeRepository(this.ops["DescribeRepository"].apply(partialParams));
    }
    invokeDisassociateExternalConnection(partialParams) {
        this.boot();
        return this.client.disassociateExternalConnection(this.ops["DisassociateExternalConnection"].apply(partialParams));
    }
    invokeDisposePackageVersions(partialParams) {
        this.boot();
        return this.client.disposePackageVersions(this.ops["DisposePackageVersions"].apply(partialParams));
    }
    invokeGetAuthorizationToken(partialParams) {
        this.boot();
        return this.client.getAuthorizationToken(this.ops["GetAuthorizationToken"].apply(partialParams));
    }
    invokeGetDomainPermissionsPolicy(partialParams) {
        this.boot();
        return this.client.getDomainPermissionsPolicy(this.ops["GetDomainPermissionsPolicy"].apply(partialParams));
    }
    invokeGetPackageVersionAsset(partialParams) {
        this.boot();
        return this.client.getPackageVersionAsset(this.ops["GetPackageVersionAsset"].apply(partialParams));
    }
    invokeGetPackageVersionReadme(partialParams) {
        this.boot();
        return this.client.getPackageVersionReadme(this.ops["GetPackageVersionReadme"].apply(partialParams));
    }
    invokeGetRepositoryEndpoint(partialParams) {
        this.boot();
        return this.client.getRepositoryEndpoint(this.ops["GetRepositoryEndpoint"].apply(partialParams));
    }
    invokeGetRepositoryPermissionsPolicy(partialParams) {
        this.boot();
        return this.client.getRepositoryPermissionsPolicy(this.ops["GetRepositoryPermissionsPolicy"].apply(partialParams));
    }
    invokeListDomains(partialParams) {
        this.boot();
        return this.client.listDomains(this.ops["ListDomains"].apply(partialParams));
    }
    invokeListPackageVersionAssets(partialParams) {
        this.boot();
        return this.client.listPackageVersionAssets(this.ops["ListPackageVersionAssets"].apply(partialParams));
    }
    invokeListPackageVersionDependencies(partialParams) {
        this.boot();
        return this.client.listPackageVersionDependencies(this.ops["ListPackageVersionDependencies"].apply(partialParams));
    }
    invokeListPackageVersions(partialParams) {
        this.boot();
        return this.client.listPackageVersions(this.ops["ListPackageVersions"].apply(partialParams));
    }
    invokeListPackages(partialParams) {
        this.boot();
        return this.client.listPackages(this.ops["ListPackages"].apply(partialParams));
    }
    invokeListRepositories(partialParams) {
        this.boot();
        return this.client.listRepositories(this.ops["ListRepositories"].apply(partialParams));
    }
    invokeListRepositoriesInDomain(partialParams) {
        this.boot();
        return this.client.listRepositoriesInDomain(this.ops["ListRepositoriesInDomain"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokePutDomainPermissionsPolicy(partialParams) {
        this.boot();
        return this.client.putDomainPermissionsPolicy(this.ops["PutDomainPermissionsPolicy"].apply(partialParams));
    }
    invokePutRepositoryPermissionsPolicy(partialParams) {
        this.boot();
        return this.client.putRepositoryPermissionsPolicy(this.ops["PutRepositoryPermissionsPolicy"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdatePackageVersionsStatus(partialParams) {
        this.boot();
        return this.client.updatePackageVersionsStatus(this.ops["UpdatePackageVersionsStatus"].apply(partialParams));
    }
    invokeUpdateRepository(partialParams) {
        this.boot();
        return this.client.updateRepository(this.ops["UpdateRepository"].apply(partialParams));
    }
}
exports.default = default_1;
