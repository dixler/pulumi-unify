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
class default_1 extends aws.servicecatalog.TagOptionResourceAssociation {
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
    invokeAcceptPortfolioShare(partialParams) {
        this.boot();
        return this.client.acceptPortfolioShare(this.ops["AcceptPortfolioShare"].apply(partialParams));
    }
    invokeAssociateBudgetWithResource(partialParams) {
        this.boot();
        return this.client.associateBudgetWithResource(this.ops["AssociateBudgetWithResource"].apply(partialParams));
    }
    invokeAssociatePrincipalWithPortfolio(partialParams) {
        this.boot();
        return this.client.associatePrincipalWithPortfolio(this.ops["AssociatePrincipalWithPortfolio"].apply(partialParams));
    }
    invokeAssociateProductWithPortfolio(partialParams) {
        this.boot();
        return this.client.associateProductWithPortfolio(this.ops["AssociateProductWithPortfolio"].apply(partialParams));
    }
    invokeAssociateServiceActionWithProvisioningArtifact(partialParams) {
        this.boot();
        return this.client.associateServiceActionWithProvisioningArtifact(this.ops["AssociateServiceActionWithProvisioningArtifact"].apply(partialParams));
    }
    invokeAssociateTagOptionWithResource(partialParams) {
        this.boot();
        return this.client.associateTagOptionWithResource(this.ops["AssociateTagOptionWithResource"].apply(partialParams));
    }
    invokeBatchAssociateServiceActionWithProvisioningArtifact(partialParams) {
        this.boot();
        return this.client.batchAssociateServiceActionWithProvisioningArtifact(this.ops["BatchAssociateServiceActionWithProvisioningArtifact"].apply(partialParams));
    }
    invokeBatchDisassociateServiceActionFromProvisioningArtifact(partialParams) {
        this.boot();
        return this.client.batchDisassociateServiceActionFromProvisioningArtifact(this.ops["BatchDisassociateServiceActionFromProvisioningArtifact"].apply(partialParams));
    }
    invokeCopyProduct(partialParams) {
        this.boot();
        return this.client.copyProduct(this.ops["CopyProduct"].apply(partialParams));
    }
    invokeCreateConstraint(partialParams) {
        this.boot();
        return this.client.createConstraint(this.ops["CreateConstraint"].apply(partialParams));
    }
    invokeCreatePortfolio(partialParams) {
        this.boot();
        return this.client.createPortfolio(this.ops["CreatePortfolio"].apply(partialParams));
    }
    invokeCreatePortfolioShare(partialParams) {
        this.boot();
        return this.client.createPortfolioShare(this.ops["CreatePortfolioShare"].apply(partialParams));
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
    invokeCreateTagOption(partialParams) {
        this.boot();
        return this.client.createTagOption(this.ops["CreateTagOption"].apply(partialParams));
    }
    invokeDeleteConstraint(partialParams) {
        this.boot();
        return this.client.deleteConstraint(this.ops["DeleteConstraint"].apply(partialParams));
    }
    invokeDeletePortfolio(partialParams) {
        this.boot();
        return this.client.deletePortfolio(this.ops["DeletePortfolio"].apply(partialParams));
    }
    invokeDeletePortfolioShare(partialParams) {
        this.boot();
        return this.client.deletePortfolioShare(this.ops["DeletePortfolioShare"].apply(partialParams));
    }
    invokeDeleteProduct(partialParams) {
        this.boot();
        return this.client.deleteProduct(this.ops["DeleteProduct"].apply(partialParams));
    }
    invokeDeleteProvisionedProductPlan(partialParams) {
        this.boot();
        return this.client.deleteProvisionedProductPlan(this.ops["DeleteProvisionedProductPlan"].apply(partialParams));
    }
    invokeDeleteProvisioningArtifact(partialParams) {
        this.boot();
        return this.client.deleteProvisioningArtifact(this.ops["DeleteProvisioningArtifact"].apply(partialParams));
    }
    invokeDeleteServiceAction(partialParams) {
        this.boot();
        return this.client.deleteServiceAction(this.ops["DeleteServiceAction"].apply(partialParams));
    }
    invokeDeleteTagOption(partialParams) {
        this.boot();
        return this.client.deleteTagOption(this.ops["DeleteTagOption"].apply(partialParams));
    }
    invokeDescribeConstraint(partialParams) {
        this.boot();
        return this.client.describeConstraint(this.ops["DescribeConstraint"].apply(partialParams));
    }
    invokeDescribeCopyProductStatus(partialParams) {
        this.boot();
        return this.client.describeCopyProductStatus(this.ops["DescribeCopyProductStatus"].apply(partialParams));
    }
    invokeDescribePortfolio(partialParams) {
        this.boot();
        return this.client.describePortfolio(this.ops["DescribePortfolio"].apply(partialParams));
    }
    invokeDescribePortfolioShareStatus(partialParams) {
        this.boot();
        return this.client.describePortfolioShareStatus(this.ops["DescribePortfolioShareStatus"].apply(partialParams));
    }
    invokeDescribePortfolioShares(partialParams) {
        this.boot();
        return this.client.describePortfolioShares(this.ops["DescribePortfolioShares"].apply(partialParams));
    }
    invokeDescribeProduct(partialParams) {
        this.boot();
        return this.client.describeProduct(this.ops["DescribeProduct"].apply(partialParams));
    }
    invokeDescribeProductAsAdmin(partialParams) {
        this.boot();
        return this.client.describeProductAsAdmin(this.ops["DescribeProductAsAdmin"].apply(partialParams));
    }
    invokeDescribeProductView(partialParams) {
        this.boot();
        return this.client.describeProductView(this.ops["DescribeProductView"].apply(partialParams));
    }
    invokeDescribeProvisionedProduct(partialParams) {
        this.boot();
        return this.client.describeProvisionedProduct(this.ops["DescribeProvisionedProduct"].apply(partialParams));
    }
    invokeDescribeProvisionedProductPlan(partialParams) {
        this.boot();
        return this.client.describeProvisionedProductPlan(this.ops["DescribeProvisionedProductPlan"].apply(partialParams));
    }
    invokeDescribeProvisioningArtifact(partialParams) {
        this.boot();
        return this.client.describeProvisioningArtifact(this.ops["DescribeProvisioningArtifact"].apply(partialParams));
    }
    invokeDescribeProvisioningParameters(partialParams) {
        this.boot();
        return this.client.describeProvisioningParameters(this.ops["DescribeProvisioningParameters"].apply(partialParams));
    }
    invokeDescribeRecord(partialParams) {
        this.boot();
        return this.client.describeRecord(this.ops["DescribeRecord"].apply(partialParams));
    }
    invokeDescribeServiceAction(partialParams) {
        this.boot();
        return this.client.describeServiceAction(this.ops["DescribeServiceAction"].apply(partialParams));
    }
    invokeDescribeServiceActionExecutionParameters(partialParams) {
        this.boot();
        return this.client.describeServiceActionExecutionParameters(this.ops["DescribeServiceActionExecutionParameters"].apply(partialParams));
    }
    invokeDescribeTagOption(partialParams) {
        this.boot();
        return this.client.describeTagOption(this.ops["DescribeTagOption"].apply(partialParams));
    }
    invokeDisableAWSOrganizationsAccess(partialParams) {
        this.boot();
        return this.client.disableAWSOrganizationsAccess(this.ops["DisableAWSOrganizationsAccess"].apply(partialParams));
    }
    invokeDisassociateBudgetFromResource(partialParams) {
        this.boot();
        return this.client.disassociateBudgetFromResource(this.ops["DisassociateBudgetFromResource"].apply(partialParams));
    }
    invokeDisassociatePrincipalFromPortfolio(partialParams) {
        this.boot();
        return this.client.disassociatePrincipalFromPortfolio(this.ops["DisassociatePrincipalFromPortfolio"].apply(partialParams));
    }
    invokeDisassociateProductFromPortfolio(partialParams) {
        this.boot();
        return this.client.disassociateProductFromPortfolio(this.ops["DisassociateProductFromPortfolio"].apply(partialParams));
    }
    invokeDisassociateServiceActionFromProvisioningArtifact(partialParams) {
        this.boot();
        return this.client.disassociateServiceActionFromProvisioningArtifact(this.ops["DisassociateServiceActionFromProvisioningArtifact"].apply(partialParams));
    }
    invokeDisassociateTagOptionFromResource(partialParams) {
        this.boot();
        return this.client.disassociateTagOptionFromResource(this.ops["DisassociateTagOptionFromResource"].apply(partialParams));
    }
    invokeEnableAWSOrganizationsAccess(partialParams) {
        this.boot();
        return this.client.enableAWSOrganizationsAccess(this.ops["EnableAWSOrganizationsAccess"].apply(partialParams));
    }
    invokeExecuteProvisionedProductPlan(partialParams) {
        this.boot();
        return this.client.executeProvisionedProductPlan(this.ops["ExecuteProvisionedProductPlan"].apply(partialParams));
    }
    invokeExecuteProvisionedProductServiceAction(partialParams) {
        this.boot();
        return this.client.executeProvisionedProductServiceAction(this.ops["ExecuteProvisionedProductServiceAction"].apply(partialParams));
    }
    invokeGetAWSOrganizationsAccessStatus(partialParams) {
        this.boot();
        return this.client.getAWSOrganizationsAccessStatus(this.ops["GetAWSOrganizationsAccessStatus"].apply(partialParams));
    }
    invokeGetProvisionedProductOutputs(partialParams) {
        this.boot();
        return this.client.getProvisionedProductOutputs(this.ops["GetProvisionedProductOutputs"].apply(partialParams));
    }
    invokeImportAsProvisionedProduct(partialParams) {
        this.boot();
        return this.client.importAsProvisionedProduct(this.ops["ImportAsProvisionedProduct"].apply(partialParams));
    }
    invokeListAcceptedPortfolioShares(partialParams) {
        this.boot();
        return this.client.listAcceptedPortfolioShares(this.ops["ListAcceptedPortfolioShares"].apply(partialParams));
    }
    invokeListBudgetsForResource(partialParams) {
        this.boot();
        return this.client.listBudgetsForResource(this.ops["ListBudgetsForResource"].apply(partialParams));
    }
    invokeListConstraintsForPortfolio(partialParams) {
        this.boot();
        return this.client.listConstraintsForPortfolio(this.ops["ListConstraintsForPortfolio"].apply(partialParams));
    }
    invokeListLaunchPaths(partialParams) {
        this.boot();
        return this.client.listLaunchPaths(this.ops["ListLaunchPaths"].apply(partialParams));
    }
    invokeListOrganizationPortfolioAccess(partialParams) {
        this.boot();
        return this.client.listOrganizationPortfolioAccess(this.ops["ListOrganizationPortfolioAccess"].apply(partialParams));
    }
    invokeListPortfolioAccess(partialParams) {
        this.boot();
        return this.client.listPortfolioAccess(this.ops["ListPortfolioAccess"].apply(partialParams));
    }
    invokeListPortfolios(partialParams) {
        this.boot();
        return this.client.listPortfolios(this.ops["ListPortfolios"].apply(partialParams));
    }
    invokeListPortfoliosForProduct(partialParams) {
        this.boot();
        return this.client.listPortfoliosForProduct(this.ops["ListPortfoliosForProduct"].apply(partialParams));
    }
    invokeListPrincipalsForPortfolio(partialParams) {
        this.boot();
        return this.client.listPrincipalsForPortfolio(this.ops["ListPrincipalsForPortfolio"].apply(partialParams));
    }
    invokeListProvisionedProductPlans(partialParams) {
        this.boot();
        return this.client.listProvisionedProductPlans(this.ops["ListProvisionedProductPlans"].apply(partialParams));
    }
    invokeListProvisioningArtifacts(partialParams) {
        this.boot();
        return this.client.listProvisioningArtifacts(this.ops["ListProvisioningArtifacts"].apply(partialParams));
    }
    invokeListProvisioningArtifactsForServiceAction(partialParams) {
        this.boot();
        return this.client.listProvisioningArtifactsForServiceAction(this.ops["ListProvisioningArtifactsForServiceAction"].apply(partialParams));
    }
    invokeListRecordHistory(partialParams) {
        this.boot();
        return this.client.listRecordHistory(this.ops["ListRecordHistory"].apply(partialParams));
    }
    invokeListResourcesForTagOption(partialParams) {
        this.boot();
        return this.client.listResourcesForTagOption(this.ops["ListResourcesForTagOption"].apply(partialParams));
    }
    invokeListServiceActions(partialParams) {
        this.boot();
        return this.client.listServiceActions(this.ops["ListServiceActions"].apply(partialParams));
    }
    invokeListServiceActionsForProvisioningArtifact(partialParams) {
        this.boot();
        return this.client.listServiceActionsForProvisioningArtifact(this.ops["ListServiceActionsForProvisioningArtifact"].apply(partialParams));
    }
    invokeListStackInstancesForProvisionedProduct(partialParams) {
        this.boot();
        return this.client.listStackInstancesForProvisionedProduct(this.ops["ListStackInstancesForProvisionedProduct"].apply(partialParams));
    }
    invokeListTagOptions(partialParams) {
        this.boot();
        return this.client.listTagOptions(this.ops["ListTagOptions"].apply(partialParams));
    }
    invokeProvisionProduct(partialParams) {
        this.boot();
        return this.client.provisionProduct(this.ops["ProvisionProduct"].apply(partialParams));
    }
    invokeRejectPortfolioShare(partialParams) {
        this.boot();
        return this.client.rejectPortfolioShare(this.ops["RejectPortfolioShare"].apply(partialParams));
    }
    invokeScanProvisionedProducts(partialParams) {
        this.boot();
        return this.client.scanProvisionedProducts(this.ops["ScanProvisionedProducts"].apply(partialParams));
    }
    invokeSearchProducts(partialParams) {
        this.boot();
        return this.client.searchProducts(this.ops["SearchProducts"].apply(partialParams));
    }
    invokeSearchProductsAsAdmin(partialParams) {
        this.boot();
        return this.client.searchProductsAsAdmin(this.ops["SearchProductsAsAdmin"].apply(partialParams));
    }
    invokeSearchProvisionedProducts(partialParams) {
        this.boot();
        return this.client.searchProvisionedProducts(this.ops["SearchProvisionedProducts"].apply(partialParams));
    }
    invokeTerminateProvisionedProduct(partialParams) {
        this.boot();
        return this.client.terminateProvisionedProduct(this.ops["TerminateProvisionedProduct"].apply(partialParams));
    }
    invokeUpdateConstraint(partialParams) {
        this.boot();
        return this.client.updateConstraint(this.ops["UpdateConstraint"].apply(partialParams));
    }
    invokeUpdatePortfolio(partialParams) {
        this.boot();
        return this.client.updatePortfolio(this.ops["UpdatePortfolio"].apply(partialParams));
    }
    invokeUpdatePortfolioShare(partialParams) {
        this.boot();
        return this.client.updatePortfolioShare(this.ops["UpdatePortfolioShare"].apply(partialParams));
    }
    invokeUpdateProduct(partialParams) {
        this.boot();
        return this.client.updateProduct(this.ops["UpdateProduct"].apply(partialParams));
    }
    invokeUpdateProvisionedProduct(partialParams) {
        this.boot();
        return this.client.updateProvisionedProduct(this.ops["UpdateProvisionedProduct"].apply(partialParams));
    }
    invokeUpdateProvisionedProductProperties(partialParams) {
        this.boot();
        return this.client.updateProvisionedProductProperties(this.ops["UpdateProvisionedProductProperties"].apply(partialParams));
    }
    invokeUpdateProvisioningArtifact(partialParams) {
        this.boot();
        return this.client.updateProvisioningArtifact(this.ops["UpdateProvisioningArtifact"].apply(partialParams));
    }
    invokeUpdateServiceAction(partialParams) {
        this.boot();
        return this.client.updateServiceAction(this.ops["UpdateServiceAction"].apply(partialParams));
    }
    invokeUpdateTagOption(partialParams) {
        this.boot();
        return this.client.updateTagOption(this.ops["UpdateTagOption"].apply(partialParams));
    }
}
exports.default = default_1;
