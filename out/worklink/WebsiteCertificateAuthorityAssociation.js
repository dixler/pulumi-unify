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
class default_1 extends aws.worklink.WebsiteCertificateAuthorityAssociation {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.WorkLink();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/worklink-2018-09-25.normal.json"), this.client);
    }
    invokeAssociateDomain(partialParams) {
        return this.client.associateDomain(this.ops["AssociateDomain"].apply(partialParams));
    }
    invokeAssociateWebsiteAuthorizationProvider(partialParams) {
        return this.client.associateWebsiteAuthorizationProvider(this.ops["AssociateWebsiteAuthorizationProvider"].apply(partialParams));
    }
    invokeAssociateWebsiteCertificateAuthority(partialParams) {
        return this.client.associateWebsiteCertificateAuthority(this.ops["AssociateWebsiteCertificateAuthority"].apply(partialParams));
    }
    invokeCreateFleet(partialParams) {
        return this.client.createFleet(this.ops["CreateFleet"].apply(partialParams));
    }
    invokeDeleteFleet(partialParams) {
        return this.client.deleteFleet(this.ops["DeleteFleet"].apply(partialParams));
    }
    invokeDescribeAuditStreamConfiguration(partialParams) {
        return this.client.describeAuditStreamConfiguration(this.ops["DescribeAuditStreamConfiguration"].apply(partialParams));
    }
    invokeDescribeCompanyNetworkConfiguration(partialParams) {
        return this.client.describeCompanyNetworkConfiguration(this.ops["DescribeCompanyNetworkConfiguration"].apply(partialParams));
    }
    invokeDescribeDevice(partialParams) {
        return this.client.describeDevice(this.ops["DescribeDevice"].apply(partialParams));
    }
    invokeDescribeDevicePolicyConfiguration(partialParams) {
        return this.client.describeDevicePolicyConfiguration(this.ops["DescribeDevicePolicyConfiguration"].apply(partialParams));
    }
    invokeDescribeDomain(partialParams) {
        return this.client.describeDomain(this.ops["DescribeDomain"].apply(partialParams));
    }
    invokeDescribeFleetMetadata(partialParams) {
        return this.client.describeFleetMetadata(this.ops["DescribeFleetMetadata"].apply(partialParams));
    }
    invokeDescribeIdentityProviderConfiguration(partialParams) {
        return this.client.describeIdentityProviderConfiguration(this.ops["DescribeIdentityProviderConfiguration"].apply(partialParams));
    }
    invokeDescribeWebsiteCertificateAuthority(partialParams) {
        return this.client.describeWebsiteCertificateAuthority(this.ops["DescribeWebsiteCertificateAuthority"].apply(partialParams));
    }
    invokeDisassociateDomain(partialParams) {
        return this.client.disassociateDomain(this.ops["DisassociateDomain"].apply(partialParams));
    }
    invokeDisassociateWebsiteAuthorizationProvider(partialParams) {
        return this.client.disassociateWebsiteAuthorizationProvider(this.ops["DisassociateWebsiteAuthorizationProvider"].apply(partialParams));
    }
    invokeDisassociateWebsiteCertificateAuthority(partialParams) {
        return this.client.disassociateWebsiteCertificateAuthority(this.ops["DisassociateWebsiteCertificateAuthority"].apply(partialParams));
    }
    invokeListDevices(partialParams) {
        return this.client.listDevices(this.ops["ListDevices"].apply(partialParams));
    }
    invokeListDomains(partialParams) {
        return this.client.listDomains(this.ops["ListDomains"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListWebsiteAuthorizationProviders(partialParams) {
        return this.client.listWebsiteAuthorizationProviders(this.ops["ListWebsiteAuthorizationProviders"].apply(partialParams));
    }
    invokeListWebsiteCertificateAuthorities(partialParams) {
        return this.client.listWebsiteCertificateAuthorities(this.ops["ListWebsiteCertificateAuthorities"].apply(partialParams));
    }
    invokeRestoreDomainAccess(partialParams) {
        return this.client.restoreDomainAccess(this.ops["RestoreDomainAccess"].apply(partialParams));
    }
    invokeRevokeDomainAccess(partialParams) {
        return this.client.revokeDomainAccess(this.ops["RevokeDomainAccess"].apply(partialParams));
    }
    invokeSignOutUser(partialParams) {
        return this.client.signOutUser(this.ops["SignOutUser"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateAuditStreamConfiguration(partialParams) {
        return this.client.updateAuditStreamConfiguration(this.ops["UpdateAuditStreamConfiguration"].apply(partialParams));
    }
    invokeUpdateCompanyNetworkConfiguration(partialParams) {
        return this.client.updateCompanyNetworkConfiguration(this.ops["UpdateCompanyNetworkConfiguration"].apply(partialParams));
    }
    invokeUpdateDevicePolicyConfiguration(partialParams) {
        return this.client.updateDevicePolicyConfiguration(this.ops["UpdateDevicePolicyConfiguration"].apply(partialParams));
    }
    invokeUpdateDomainMetadata(partialParams) {
        return this.client.updateDomainMetadata(this.ops["UpdateDomainMetadata"].apply(partialParams));
    }
    invokeUpdateFleetMetadata(partialParams) {
        return this.client.updateFleetMetadata(this.ops["UpdateFleetMetadata"].apply(partialParams));
    }
    invokeUpdateIdentityProviderConfiguration(partialParams) {
        return this.client.updateIdentityProviderConfiguration(this.ops["UpdateIdentityProviderConfiguration"].apply(partialParams));
    }
}
exports.default = default_1;
