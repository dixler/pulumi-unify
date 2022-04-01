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
class default_1 extends aws.servicecatalog.ProvisionedProduct {
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
    invokeAssociateProductWithPortfolio(partialParams) {
        this.boot();
        return this.client.associateProductWithPortfolio(this.ops["AssociateProductWithPortfolio"].apply(partialParams));
    }
    invokeAssociateServiceActionWithProvisioningArtifact(partialParams) {
        this.boot();
        return this.client.associateServiceActionWithProvisioningArtifact(this.ops["AssociateServiceActionWithProvisioningArtifact"].apply(partialParams));
    }
    invokeCreateConstraint(partialParams) {
        this.boot();
        return this.client.createConstraint(this.ops["CreateConstraint"].apply(partialParams));
    }
    invokeCreateProduct(partialParams) {
        this.boot();
        return this.client.createProduct(this.ops["CreateProduct"].apply(partialParams));
    }
    invokeCreateProvisionedProductPlan(partialParams) {
        this.boot();
        return this.client.createProvisionedProductPlan(this.ops["CreateProvisionedProductPlan"].apply(partialParams));
    }
    invokeCreateProvisioningArtifact(partialParams) {
        this.boot();
        return this.client.createProvisioningArtifact(this.ops["CreateProvisioningArtifact"].apply(partialParams));
    }
    invokeCreateServiceAction(partialParams) {
        this.boot();
        return this.client.createServiceAction(this.ops["CreateServiceAction"].apply(partialParams));
    }
    invokeDeleteProvisioningArtifact(partialParams) {
        this.boot();
        return this.client.deleteProvisioningArtifact(this.ops["DeleteProvisioningArtifact"].apply(partialParams));
    }
    invokeDescribePortfolioShares(partialParams) {
        this.boot();
        return this.client.describePortfolioShares(this.ops["DescribePortfolioShares"].apply(partialParams));
    }
    invokeDisassociateProductFromPortfolio(partialParams) {
        this.boot();
        return this.client.disassociateProductFromPortfolio(this.ops["DisassociateProductFromPortfolio"].apply(partialParams));
    }
    invokeDisassociateServiceActionFromProvisioningArtifact(partialParams) {
        this.boot();
        return this.client.disassociateServiceActionFromProvisioningArtifact(this.ops["DisassociateServiceActionFromProvisioningArtifact"].apply(partialParams));
    }
    invokeImportAsProvisionedProduct(partialParams) {
        this.boot();
        return this.client.importAsProvisionedProduct(this.ops["ImportAsProvisionedProduct"].apply(partialParams));
    }
    invokeListLaunchPaths(partialParams) {
        this.boot();
        return this.client.listLaunchPaths(this.ops["ListLaunchPaths"].apply(partialParams));
    }
    invokeListPortfoliosForProduct(partialParams) {
        this.boot();
        return this.client.listPortfoliosForProduct(this.ops["ListPortfoliosForProduct"].apply(partialParams));
    }
    invokeListProvisioningArtifacts(partialParams) {
        this.boot();
        return this.client.listProvisioningArtifacts(this.ops["ListProvisioningArtifacts"].apply(partialParams));
    }
    invokeListServiceActionsForProvisioningArtifact(partialParams) {
        this.boot();
        return this.client.listServiceActionsForProvisioningArtifact(this.ops["ListServiceActionsForProvisioningArtifact"].apply(partialParams));
    }
    invokeProvisionProduct(partialParams) {
        this.boot();
        return this.client.provisionProduct(this.ops["ProvisionProduct"].apply(partialParams));
    }
    invokeUpdateProvisioningArtifact(partialParams) {
        this.boot();
        return this.client.updateProvisioningArtifact(this.ops["UpdateProvisioningArtifact"].apply(partialParams));
    }
}
exports.default = default_1;
