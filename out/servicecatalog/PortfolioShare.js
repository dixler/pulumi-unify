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
const schema = require("../apis/servicecatalog-2015-12-10.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.servicecatalog.PortfolioShare {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.ServiceCatalog();
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
    invokeAcceptPortfolioShare(partialParams) {
        this.boot();
        return this.client.acceptPortfolioShare(this.ops["AcceptPortfolioShare"].apply(partialParams));
    }
    invokeAssociatePrincipalWithPortfolio(partialParams) {
        this.boot();
        return this.client.associatePrincipalWithPortfolio(this.ops["AssociatePrincipalWithPortfolio"].apply(partialParams));
    }
    invokeAssociateProductWithPortfolio(partialParams) {
        this.boot();
        return this.client.associateProductWithPortfolio(this.ops["AssociateProductWithPortfolio"].apply(partialParams));
    }
    invokeCreateConstraint(partialParams) {
        this.boot();
        return this.client.createConstraint(this.ops["CreateConstraint"].apply(partialParams));
    }
    invokeCreatePortfolioShare(partialParams) {
        this.boot();
        return this.client.createPortfolioShare(this.ops["CreatePortfolioShare"].apply(partialParams));
    }
    invokeDeletePortfolioShare(partialParams) {
        this.boot();
        return this.client.deletePortfolioShare(this.ops["DeletePortfolioShare"].apply(partialParams));
    }
    invokeDescribePortfolioShares(partialParams) {
        this.boot();
        return this.client.describePortfolioShares(this.ops["DescribePortfolioShares"].apply(partialParams));
    }
    invokeDisassociatePrincipalFromPortfolio(partialParams) {
        this.boot();
        return this.client.disassociatePrincipalFromPortfolio(this.ops["DisassociatePrincipalFromPortfolio"].apply(partialParams));
    }
    invokeDisassociateProductFromPortfolio(partialParams) {
        this.boot();
        return this.client.disassociateProductFromPortfolio(this.ops["DisassociateProductFromPortfolio"].apply(partialParams));
    }
    invokeListConstraintsForPortfolio(partialParams) {
        this.boot();
        return this.client.listConstraintsForPortfolio(this.ops["ListConstraintsForPortfolio"].apply(partialParams));
    }
    invokeListOrganizationPortfolioAccess(partialParams) {
        this.boot();
        return this.client.listOrganizationPortfolioAccess(this.ops["ListOrganizationPortfolioAccess"].apply(partialParams));
    }
    invokeListPortfolioAccess(partialParams) {
        this.boot();
        return this.client.listPortfolioAccess(this.ops["ListPortfolioAccess"].apply(partialParams));
    }
    invokeListPrincipalsForPortfolio(partialParams) {
        this.boot();
        return this.client.listPrincipalsForPortfolio(this.ops["ListPrincipalsForPortfolio"].apply(partialParams));
    }
    invokeRejectPortfolioShare(partialParams) {
        this.boot();
        return this.client.rejectPortfolioShare(this.ops["RejectPortfolioShare"].apply(partialParams));
    }
    invokeUpdatePortfolioShare(partialParams) {
        this.boot();
        return this.client.updatePortfolioShare(this.ops["UpdatePortfolioShare"].apply(partialParams));
    }
}
exports.default = default_1;
