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
class default_1 extends aws.servicecatalog.ProvisioningArtifact {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.ServiceCatalog();
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
    invokeAcceptPortfolioShare(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.acceptPortfolioShare(this.ops["AcceptPortfolioShare"].applicator.apply(partialParams));
    }
    invokeAssociateBudgetWithResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateBudgetWithResource(this.ops["AssociateBudgetWithResource"].applicator.apply(partialParams));
    }
    invokeAssociatePrincipalWithPortfolio(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associatePrincipalWithPortfolio(this.ops["AssociatePrincipalWithPortfolio"].applicator.apply(partialParams));
    }
    invokeAssociateProductWithPortfolio(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateProductWithPortfolio(this.ops["AssociateProductWithPortfolio"].applicator.apply(partialParams));
    }
    invokeAssociateServiceActionWithProvisioningArtifact(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateServiceActionWithProvisioningArtifact(this.ops["AssociateServiceActionWithProvisioningArtifact"].applicator.apply(partialParams));
    }
    invokeAssociateTagOptionWithResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateTagOptionWithResource(this.ops["AssociateTagOptionWithResource"].applicator.apply(partialParams));
    }
    invokeBatchAssociateServiceActionWithProvisioningArtifact(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchAssociateServiceActionWithProvisioningArtifact(this.ops["BatchAssociateServiceActionWithProvisioningArtifact"].applicator.apply(partialParams));
    }
    invokeBatchDisassociateServiceActionFromProvisioningArtifact(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchDisassociateServiceActionFromProvisioningArtifact(this.ops["BatchDisassociateServiceActionFromProvisioningArtifact"].applicator.apply(partialParams));
    }
    invokeCopyProduct(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copyProduct(this.ops["CopyProduct"].applicator.apply(partialParams));
    }
    invokeCreateConstraint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createConstraint(this.ops["CreateConstraint"].applicator.apply(partialParams));
    }
    invokeCreatePortfolio(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPortfolio(this.ops["CreatePortfolio"].applicator.apply(partialParams));
    }
    invokeCreatePortfolioShare(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPortfolioShare(this.ops["CreatePortfolioShare"].applicator.apply(partialParams));
    }
    invokeCreateProduct(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createProduct(this.ops["CreateProduct"].applicator.apply(partialParams));
    }
    invokeCreateProvisionedProductPlan(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createProvisionedProductPlan(this.ops["CreateProvisionedProductPlan"].applicator.apply(partialParams));
    }
    invokeCreateProvisioningArtifact(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createProvisioningArtifact(this.ops["CreateProvisioningArtifact"].applicator.apply(partialParams));
    }
    invokeCreateServiceAction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createServiceAction(this.ops["CreateServiceAction"].applicator.apply(partialParams));
    }
    invokeCreateTagOption(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTagOption(this.ops["CreateTagOption"].applicator.apply(partialParams));
    }
    invokeDeleteConstraint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteConstraint(this.ops["DeleteConstraint"].applicator.apply(partialParams));
    }
    invokeDeletePortfolio(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePortfolio(this.ops["DeletePortfolio"].applicator.apply(partialParams));
    }
    invokeDeletePortfolioShare(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePortfolioShare(this.ops["DeletePortfolioShare"].applicator.apply(partialParams));
    }
    invokeDeleteProduct(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteProduct(this.ops["DeleteProduct"].applicator.apply(partialParams));
    }
    invokeDeleteProvisionedProductPlan(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteProvisionedProductPlan(this.ops["DeleteProvisionedProductPlan"].applicator.apply(partialParams));
    }
    invokeDeleteProvisioningArtifact(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteProvisioningArtifact(this.ops["DeleteProvisioningArtifact"].applicator.apply(partialParams));
    }
    invokeDeleteServiceAction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteServiceAction(this.ops["DeleteServiceAction"].applicator.apply(partialParams));
    }
    invokeDeleteTagOption(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTagOption(this.ops["DeleteTagOption"].applicator.apply(partialParams));
    }
    invokeDescribeConstraint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeConstraint(this.ops["DescribeConstraint"].applicator.apply(partialParams));
    }
    invokeDescribeCopyProductStatus(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCopyProductStatus(this.ops["DescribeCopyProductStatus"].applicator.apply(partialParams));
    }
    invokeDescribePortfolio(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describePortfolio(this.ops["DescribePortfolio"].applicator.apply(partialParams));
    }
    invokeDescribePortfolioShareStatus(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describePortfolioShareStatus(this.ops["DescribePortfolioShareStatus"].applicator.apply(partialParams));
    }
    invokeDescribePortfolioShares(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describePortfolioShares(this.ops["DescribePortfolioShares"].applicator.apply(partialParams));
    }
    invokeDescribeProductView(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeProductView(this.ops["DescribeProductView"].applicator.apply(partialParams));
    }
    invokeDescribeProvisionedProductPlan(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeProvisionedProductPlan(this.ops["DescribeProvisionedProductPlan"].applicator.apply(partialParams));
    }
    invokeDescribeRecord(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeRecord(this.ops["DescribeRecord"].applicator.apply(partialParams));
    }
    invokeDescribeServiceAction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeServiceAction(this.ops["DescribeServiceAction"].applicator.apply(partialParams));
    }
    invokeDescribeServiceActionExecutionParameters(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeServiceActionExecutionParameters(this.ops["DescribeServiceActionExecutionParameters"].applicator.apply(partialParams));
    }
    invokeDescribeTagOption(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTagOption(this.ops["DescribeTagOption"].applicator.apply(partialParams));
    }
    invokeDisassociateBudgetFromResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateBudgetFromResource(this.ops["DisassociateBudgetFromResource"].applicator.apply(partialParams));
    }
    invokeDisassociatePrincipalFromPortfolio(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociatePrincipalFromPortfolio(this.ops["DisassociatePrincipalFromPortfolio"].applicator.apply(partialParams));
    }
    invokeDisassociateProductFromPortfolio(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateProductFromPortfolio(this.ops["DisassociateProductFromPortfolio"].applicator.apply(partialParams));
    }
    invokeDisassociateServiceActionFromProvisioningArtifact(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateServiceActionFromProvisioningArtifact(this.ops["DisassociateServiceActionFromProvisioningArtifact"].applicator.apply(partialParams));
    }
    invokeDisassociateTagOptionFromResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateTagOptionFromResource(this.ops["DisassociateTagOptionFromResource"].applicator.apply(partialParams));
    }
    invokeExecuteProvisionedProductPlan(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.executeProvisionedProductPlan(this.ops["ExecuteProvisionedProductPlan"].applicator.apply(partialParams));
    }
    invokeExecuteProvisionedProductServiceAction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.executeProvisionedProductServiceAction(this.ops["ExecuteProvisionedProductServiceAction"].applicator.apply(partialParams));
    }
    invokeImportAsProvisionedProduct(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importAsProvisionedProduct(this.ops["ImportAsProvisionedProduct"].applicator.apply(partialParams));
    }
    invokeListBudgetsForResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listBudgetsForResource(this.ops["ListBudgetsForResource"].applicator.apply(partialParams));
    }
    invokeListConstraintsForPortfolio(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listConstraintsForPortfolio(this.ops["ListConstraintsForPortfolio"].applicator.apply(partialParams));
    }
    invokeListLaunchPaths(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listLaunchPaths(this.ops["ListLaunchPaths"].applicator.apply(partialParams));
    }
    invokeListOrganizationPortfolioAccess(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listOrganizationPortfolioAccess(this.ops["ListOrganizationPortfolioAccess"].applicator.apply(partialParams));
    }
    invokeListPortfolioAccess(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPortfolioAccess(this.ops["ListPortfolioAccess"].applicator.apply(partialParams));
    }
    invokeListPortfoliosForProduct(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPortfoliosForProduct(this.ops["ListPortfoliosForProduct"].applicator.apply(partialParams));
    }
    invokeListPrincipalsForPortfolio(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPrincipalsForPortfolio(this.ops["ListPrincipalsForPortfolio"].applicator.apply(partialParams));
    }
    invokeListProvisioningArtifacts(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listProvisioningArtifacts(this.ops["ListProvisioningArtifacts"].applicator.apply(partialParams));
    }
    invokeListProvisioningArtifactsForServiceAction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listProvisioningArtifactsForServiceAction(this.ops["ListProvisioningArtifactsForServiceAction"].applicator.apply(partialParams));
    }
    invokeListResourcesForTagOption(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listResourcesForTagOption(this.ops["ListResourcesForTagOption"].applicator.apply(partialParams));
    }
    invokeListServiceActionsForProvisioningArtifact(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listServiceActionsForProvisioningArtifact(this.ops["ListServiceActionsForProvisioningArtifact"].applicator.apply(partialParams));
    }
    invokeListStackInstancesForProvisionedProduct(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listStackInstancesForProvisionedProduct(this.ops["ListStackInstancesForProvisionedProduct"].applicator.apply(partialParams));
    }
    invokeProvisionProduct(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.provisionProduct(this.ops["ProvisionProduct"].applicator.apply(partialParams));
    }
    invokeRejectPortfolioShare(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rejectPortfolioShare(this.ops["RejectPortfolioShare"].applicator.apply(partialParams));
    }
    invokeTerminateProvisionedProduct(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.terminateProvisionedProduct(this.ops["TerminateProvisionedProduct"].applicator.apply(partialParams));
    }
    invokeUpdateConstraint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateConstraint(this.ops["UpdateConstraint"].applicator.apply(partialParams));
    }
    invokeUpdatePortfolio(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePortfolio(this.ops["UpdatePortfolio"].applicator.apply(partialParams));
    }
    invokeUpdatePortfolioShare(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePortfolioShare(this.ops["UpdatePortfolioShare"].applicator.apply(partialParams));
    }
    invokeUpdateProduct(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateProduct(this.ops["UpdateProduct"].applicator.apply(partialParams));
    }
    invokeUpdateProvisionedProduct(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateProvisionedProduct(this.ops["UpdateProvisionedProduct"].applicator.apply(partialParams));
    }
    invokeUpdateProvisionedProductProperties(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateProvisionedProductProperties(this.ops["UpdateProvisionedProductProperties"].applicator.apply(partialParams));
    }
    invokeUpdateProvisioningArtifact(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateProvisioningArtifact(this.ops["UpdateProvisioningArtifact"].applicator.apply(partialParams));
    }
    invokeUpdateServiceAction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateServiceAction(this.ops["UpdateServiceAction"].applicator.apply(partialParams));
    }
    invokeUpdateTagOption(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTagOption(this.ops["UpdateTagOption"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
