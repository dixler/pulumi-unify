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
        this.client = new awssdk.WorkLink();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
    }
    boot() {
        Object.entries(this.capitalizedParams).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value.value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
        this.ops = (0, parse_1.getResourceOperations)(this.capitalizedParams, schema, this.client);
    }
    invokeAssociateDomain(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateDomain(this.ops["AssociateDomain"].applicator.apply(partialParams));
    }
    invokeAssociateWebsiteAuthorizationProvider(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateWebsiteAuthorizationProvider(this.ops["AssociateWebsiteAuthorizationProvider"].applicator.apply(partialParams));
    }
    invokeAssociateWebsiteCertificateAuthority(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateWebsiteCertificateAuthority(this.ops["AssociateWebsiteCertificateAuthority"].applicator.apply(partialParams));
    }
    invokeCreateFleet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFleet(this.ops["CreateFleet"].applicator.apply(partialParams));
    }
    invokeDeleteFleet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFleet(this.ops["DeleteFleet"].applicator.apply(partialParams));
    }
    invokeDescribeAuditStreamConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAuditStreamConfiguration(this.ops["DescribeAuditStreamConfiguration"].applicator.apply(partialParams));
    }
    invokeDescribeCompanyNetworkConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCompanyNetworkConfiguration(this.ops["DescribeCompanyNetworkConfiguration"].applicator.apply(partialParams));
    }
    invokeDescribeDevice(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDevice(this.ops["DescribeDevice"].applicator.apply(partialParams));
    }
    invokeDescribeDevicePolicyConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDevicePolicyConfiguration(this.ops["DescribeDevicePolicyConfiguration"].applicator.apply(partialParams));
    }
    invokeDescribeDomain(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDomain(this.ops["DescribeDomain"].applicator.apply(partialParams));
    }
    invokeDescribeFleetMetadata(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFleetMetadata(this.ops["DescribeFleetMetadata"].applicator.apply(partialParams));
    }
    invokeDescribeIdentityProviderConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeIdentityProviderConfiguration(this.ops["DescribeIdentityProviderConfiguration"].applicator.apply(partialParams));
    }
    invokeDescribeWebsiteCertificateAuthority(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeWebsiteCertificateAuthority(this.ops["DescribeWebsiteCertificateAuthority"].applicator.apply(partialParams));
    }
    invokeDisassociateDomain(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateDomain(this.ops["DisassociateDomain"].applicator.apply(partialParams));
    }
    invokeDisassociateWebsiteAuthorizationProvider(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateWebsiteAuthorizationProvider(this.ops["DisassociateWebsiteAuthorizationProvider"].applicator.apply(partialParams));
    }
    invokeDisassociateWebsiteCertificateAuthority(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateWebsiteCertificateAuthority(this.ops["DisassociateWebsiteCertificateAuthority"].applicator.apply(partialParams));
    }
    invokeListDevices(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDevices(this.ops["ListDevices"].applicator.apply(partialParams));
    }
    invokeListDomains(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDomains(this.ops["ListDomains"].applicator.apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].applicator.apply(partialParams));
    }
    invokeListWebsiteAuthorizationProviders(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listWebsiteAuthorizationProviders(this.ops["ListWebsiteAuthorizationProviders"].applicator.apply(partialParams));
    }
    invokeListWebsiteCertificateAuthorities(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listWebsiteCertificateAuthorities(this.ops["ListWebsiteCertificateAuthorities"].applicator.apply(partialParams));
    }
    invokeRestoreDomainAccess(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreDomainAccess(this.ops["RestoreDomainAccess"].applicator.apply(partialParams));
    }
    invokeRevokeDomainAccess(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.revokeDomainAccess(this.ops["RevokeDomainAccess"].applicator.apply(partialParams));
    }
    invokeSignOutUser(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.signOutUser(this.ops["SignOutUser"].applicator.apply(partialParams));
    }
    invokeTagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].applicator.apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].applicator.apply(partialParams));
    }
    invokeUpdateAuditStreamConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAuditStreamConfiguration(this.ops["UpdateAuditStreamConfiguration"].applicator.apply(partialParams));
    }
    invokeUpdateCompanyNetworkConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCompanyNetworkConfiguration(this.ops["UpdateCompanyNetworkConfiguration"].applicator.apply(partialParams));
    }
    invokeUpdateDevicePolicyConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDevicePolicyConfiguration(this.ops["UpdateDevicePolicyConfiguration"].applicator.apply(partialParams));
    }
    invokeUpdateDomainMetadata(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDomainMetadata(this.ops["UpdateDomainMetadata"].applicator.apply(partialParams));
    }
    invokeUpdateFleetMetadata(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFleetMetadata(this.ops["UpdateFleetMetadata"].applicator.apply(partialParams));
    }
    invokeUpdateIdentityProviderConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateIdentityProviderConfiguration(this.ops["UpdateIdentityProviderConfiguration"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
