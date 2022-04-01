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
const schema = require("../apis/worklink-2018-09-25.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.worklink.WebsiteCertificateAuthorityAssociation {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.WorkLink();
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
    invokeAssociateDomain(partialParams) {
        this.boot();
        return this.client.associateDomain(this.ops["AssociateDomain"].apply(partialParams));
    }
    invokeAssociateWebsiteAuthorizationProvider(partialParams) {
        this.boot();
        return this.client.associateWebsiteAuthorizationProvider(this.ops["AssociateWebsiteAuthorizationProvider"].apply(partialParams));
    }
    invokeAssociateWebsiteCertificateAuthority(partialParams) {
        this.boot();
        return this.client.associateWebsiteCertificateAuthority(this.ops["AssociateWebsiteCertificateAuthority"].apply(partialParams));
    }
    invokeCreateFleet(partialParams) {
        this.boot();
        return this.client.createFleet(this.ops["CreateFleet"].apply(partialParams));
    }
    invokeDeleteFleet(partialParams) {
        this.boot();
        return this.client.deleteFleet(this.ops["DeleteFleet"].apply(partialParams));
    }
    invokeDescribeAuditStreamConfiguration(partialParams) {
        this.boot();
        return this.client.describeAuditStreamConfiguration(this.ops["DescribeAuditStreamConfiguration"].apply(partialParams));
    }
    invokeDescribeCompanyNetworkConfiguration(partialParams) {
        this.boot();
        return this.client.describeCompanyNetworkConfiguration(this.ops["DescribeCompanyNetworkConfiguration"].apply(partialParams));
    }
    invokeDescribeDevice(partialParams) {
        this.boot();
        return this.client.describeDevice(this.ops["DescribeDevice"].apply(partialParams));
    }
    invokeDescribeDevicePolicyConfiguration(partialParams) {
        this.boot();
        return this.client.describeDevicePolicyConfiguration(this.ops["DescribeDevicePolicyConfiguration"].apply(partialParams));
    }
    invokeDescribeDomain(partialParams) {
        this.boot();
        return this.client.describeDomain(this.ops["DescribeDomain"].apply(partialParams));
    }
    invokeDescribeFleetMetadata(partialParams) {
        this.boot();
        return this.client.describeFleetMetadata(this.ops["DescribeFleetMetadata"].apply(partialParams));
    }
    invokeDescribeIdentityProviderConfiguration(partialParams) {
        this.boot();
        return this.client.describeIdentityProviderConfiguration(this.ops["DescribeIdentityProviderConfiguration"].apply(partialParams));
    }
    invokeDescribeWebsiteCertificateAuthority(partialParams) {
        this.boot();
        return this.client.describeWebsiteCertificateAuthority(this.ops["DescribeWebsiteCertificateAuthority"].apply(partialParams));
    }
    invokeDisassociateDomain(partialParams) {
        this.boot();
        return this.client.disassociateDomain(this.ops["DisassociateDomain"].apply(partialParams));
    }
    invokeDisassociateWebsiteAuthorizationProvider(partialParams) {
        this.boot();
        return this.client.disassociateWebsiteAuthorizationProvider(this.ops["DisassociateWebsiteAuthorizationProvider"].apply(partialParams));
    }
    invokeDisassociateWebsiteCertificateAuthority(partialParams) {
        this.boot();
        return this.client.disassociateWebsiteCertificateAuthority(this.ops["DisassociateWebsiteCertificateAuthority"].apply(partialParams));
    }
    invokeListDevices(partialParams) {
        this.boot();
        return this.client.listDevices(this.ops["ListDevices"].apply(partialParams));
    }
    invokeListDomains(partialParams) {
        this.boot();
        return this.client.listDomains(this.ops["ListDomains"].apply(partialParams));
    }
    invokeListFleets(partialParams) {
        this.boot();
        return this.client.listFleets(this.ops["ListFleets"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListWebsiteAuthorizationProviders(partialParams) {
        this.boot();
        return this.client.listWebsiteAuthorizationProviders(this.ops["ListWebsiteAuthorizationProviders"].apply(partialParams));
    }
    invokeListWebsiteCertificateAuthorities(partialParams) {
        this.boot();
        return this.client.listWebsiteCertificateAuthorities(this.ops["ListWebsiteCertificateAuthorities"].apply(partialParams));
    }
    invokeRestoreDomainAccess(partialParams) {
        this.boot();
        return this.client.restoreDomainAccess(this.ops["RestoreDomainAccess"].apply(partialParams));
    }
    invokeRevokeDomainAccess(partialParams) {
        this.boot();
        return this.client.revokeDomainAccess(this.ops["RevokeDomainAccess"].apply(partialParams));
    }
    invokeSignOutUser(partialParams) {
        this.boot();
        return this.client.signOutUser(this.ops["SignOutUser"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateAuditStreamConfiguration(partialParams) {
        this.boot();
        return this.client.updateAuditStreamConfiguration(this.ops["UpdateAuditStreamConfiguration"].apply(partialParams));
    }
    invokeUpdateCompanyNetworkConfiguration(partialParams) {
        this.boot();
        return this.client.updateCompanyNetworkConfiguration(this.ops["UpdateCompanyNetworkConfiguration"].apply(partialParams));
    }
    invokeUpdateDevicePolicyConfiguration(partialParams) {
        this.boot();
        return this.client.updateDevicePolicyConfiguration(this.ops["UpdateDevicePolicyConfiguration"].apply(partialParams));
    }
    invokeUpdateDomainMetadata(partialParams) {
        this.boot();
        return this.client.updateDomainMetadata(this.ops["UpdateDomainMetadata"].apply(partialParams));
    }
    invokeUpdateFleetMetadata(partialParams) {
        this.boot();
        return this.client.updateFleetMetadata(this.ops["UpdateFleetMetadata"].apply(partialParams));
    }
    invokeUpdateIdentityProviderConfiguration(partialParams) {
        this.boot();
        return this.client.updateIdentityProviderConfiguration(this.ops["UpdateIdentityProviderConfiguration"].apply(partialParams));
    }
}
exports.default = default_1;
