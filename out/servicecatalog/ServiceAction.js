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
class default_1 extends aws.servicecatalog.ServiceAction {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.ServiceCatalog();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/servicecatalog-2015-12-10.normal.json"), this.client);
    }
    invokeAcceptPortfolioShare(partialParams) {
        return this.client.acceptPortfolioShare(this.ops["AcceptPortfolioShare"].apply(partialParams));
    }
    invokeAssociateBudgetWithResource(partialParams) {
        return this.client.associateBudgetWithResource(this.ops["AssociateBudgetWithResource"].apply(partialParams));
    }
    invokeAssociatePrincipalWithPortfolio(partialParams) {
        return this.client.associatePrincipalWithPortfolio(this.ops["AssociatePrincipalWithPortfolio"].apply(partialParams));
    }
    invokeAssociateProductWithPortfolio(partialParams) {
        return this.client.associateProductWithPortfolio(this.ops["AssociateProductWithPortfolio"].apply(partialParams));
    }
    invokeAssociateServiceActionWithProvisioningArtifact(partialParams) {
        return this.client.associateServiceActionWithProvisioningArtifact(this.ops["AssociateServiceActionWithProvisioningArtifact"].apply(partialParams));
    }
    invokeAssociateTagOptionWithResource(partialParams) {
        return this.client.associateTagOptionWithResource(this.ops["AssociateTagOptionWithResource"].apply(partialParams));
    }
    invokeBatchAssociateServiceActionWithProvisioningArtifact(partialParams) {
        return this.client.batchAssociateServiceActionWithProvisioningArtifact(this.ops["BatchAssociateServiceActionWithProvisioningArtifact"].apply(partialParams));
    }
    invokeBatchDisassociateServiceActionFromProvisioningArtifact(partialParams) {
        return this.client.batchDisassociateServiceActionFromProvisioningArtifact(this.ops["BatchDisassociateServiceActionFromProvisioningArtifact"].apply(partialParams));
    }
    invokeCopyProduct(partialParams) {
        return this.client.copyProduct(this.ops["CopyProduct"].apply(partialParams));
    }
    invokeCreateConstraint(partialParams) {
        return this.client.createConstraint(this.ops["CreateConstraint"].apply(partialParams));
    }
    invokeCreatePortfolio(partialParams) {
        return this.client.createPortfolio(this.ops["CreatePortfolio"].apply(partialParams));
    }
    invokeCreatePortfolioShare(partialParams) {
        return this.client.createPortfolioShare(this.ops["CreatePortfolioShare"].apply(partialParams));
    }
    invokeCreateProduct(partialParams) {
        return this.client.createProduct(this.ops["CreateProduct"].apply(partialParams));
    }
    invokeCreateProvisionedProductPlan(partialParams) {
        return this.client.createProvisionedProductPlan(this.ops["CreateProvisionedProductPlan"].apply(partialParams));
    }
    invokeCreateProvisioningArtifact(partialParams) {
        return this.client.createProvisioningArtifact(this.ops["CreateProvisioningArtifact"].apply(partialParams));
    }
    invokeCreateServiceAction(partialParams) {
        return this.client.createServiceAction(this.ops["CreateServiceAction"].apply(partialParams));
    }
    invokeCreateTagOption(partialParams) {
        return this.client.createTagOption(this.ops["CreateTagOption"].apply(partialParams));
    }
    invokeDeleteConstraint(partialParams) {
        return this.client.deleteConstraint(this.ops["DeleteConstraint"].apply(partialParams));
    }
    invokeDeletePortfolio(partialParams) {
        return this.client.deletePortfolio(this.ops["DeletePortfolio"].apply(partialParams));
    }
    invokeDeletePortfolioShare(partialParams) {
        return this.client.deletePortfolioShare(this.ops["DeletePortfolioShare"].apply(partialParams));
    }
    invokeDeleteProduct(partialParams) {
        return this.client.deleteProduct(this.ops["DeleteProduct"].apply(partialParams));
    }
    invokeDeleteProvisionedProductPlan(partialParams) {
        return this.client.deleteProvisionedProductPlan(this.ops["DeleteProvisionedProductPlan"].apply(partialParams));
    }
    invokeDeleteProvisioningArtifact(partialParams) {
        return this.client.deleteProvisioningArtifact(this.ops["DeleteProvisioningArtifact"].apply(partialParams));
    }
    invokeDeleteServiceAction(partialParams) {
        return this.client.deleteServiceAction(this.ops["DeleteServiceAction"].apply(partialParams));
    }
    invokeDeleteTagOption(partialParams) {
        return this.client.deleteTagOption(this.ops["DeleteTagOption"].apply(partialParams));
    }
    invokeDescribeConstraint(partialParams) {
        return this.client.describeConstraint(this.ops["DescribeConstraint"].apply(partialParams));
    }
    invokeDescribeCopyProductStatus(partialParams) {
        return this.client.describeCopyProductStatus(this.ops["DescribeCopyProductStatus"].apply(partialParams));
    }
    invokeDescribePortfolio(partialParams) {
        return this.client.describePortfolio(this.ops["DescribePortfolio"].apply(partialParams));
    }
    invokeDescribePortfolioShareStatus(partialParams) {
        return this.client.describePortfolioShareStatus(this.ops["DescribePortfolioShareStatus"].apply(partialParams));
    }
    invokeDescribePortfolioShares(partialParams) {
        return this.client.describePortfolioShares(this.ops["DescribePortfolioShares"].apply(partialParams));
    }
    invokeDescribeProductView(partialParams) {
        return this.client.describeProductView(this.ops["DescribeProductView"].apply(partialParams));
    }
    invokeDescribeProvisionedProductPlan(partialParams) {
        return this.client.describeProvisionedProductPlan(this.ops["DescribeProvisionedProductPlan"].apply(partialParams));
    }
    invokeDescribeRecord(partialParams) {
        return this.client.describeRecord(this.ops["DescribeRecord"].apply(partialParams));
    }
    invokeDescribeServiceAction(partialParams) {
        return this.client.describeServiceAction(this.ops["DescribeServiceAction"].apply(partialParams));
    }
    invokeDescribeServiceActionExecutionParameters(partialParams) {
        return this.client.describeServiceActionExecutionParameters(this.ops["DescribeServiceActionExecutionParameters"].apply(partialParams));
    }
    invokeDescribeTagOption(partialParams) {
        return this.client.describeTagOption(this.ops["DescribeTagOption"].apply(partialParams));
    }
    invokeDisassociateBudgetFromResource(partialParams) {
        return this.client.disassociateBudgetFromResource(this.ops["DisassociateBudgetFromResource"].apply(partialParams));
    }
    invokeDisassociatePrincipalFromPortfolio(partialParams) {
        return this.client.disassociatePrincipalFromPortfolio(this.ops["DisassociatePrincipalFromPortfolio"].apply(partialParams));
    }
    invokeDisassociateProductFromPortfolio(partialParams) {
        return this.client.disassociateProductFromPortfolio(this.ops["DisassociateProductFromPortfolio"].apply(partialParams));
    }
    invokeDisassociateServiceActionFromProvisioningArtifact(partialParams) {
        return this.client.disassociateServiceActionFromProvisioningArtifact(this.ops["DisassociateServiceActionFromProvisioningArtifact"].apply(partialParams));
    }
    invokeDisassociateTagOptionFromResource(partialParams) {
        return this.client.disassociateTagOptionFromResource(this.ops["DisassociateTagOptionFromResource"].apply(partialParams));
    }
    invokeExecuteProvisionedProductPlan(partialParams) {
        return this.client.executeProvisionedProductPlan(this.ops["ExecuteProvisionedProductPlan"].apply(partialParams));
    }
    invokeExecuteProvisionedProductServiceAction(partialParams) {
        return this.client.executeProvisionedProductServiceAction(this.ops["ExecuteProvisionedProductServiceAction"].apply(partialParams));
    }
    invokeImportAsProvisionedProduct(partialParams) {
        return this.client.importAsProvisionedProduct(this.ops["ImportAsProvisionedProduct"].apply(partialParams));
    }
    invokeListBudgetsForResource(partialParams) {
        return this.client.listBudgetsForResource(this.ops["ListBudgetsForResource"].apply(partialParams));
    }
    invokeListConstraintsForPortfolio(partialParams) {
        return this.client.listConstraintsForPortfolio(this.ops["ListConstraintsForPortfolio"].apply(partialParams));
    }
    invokeListLaunchPaths(partialParams) {
        return this.client.listLaunchPaths(this.ops["ListLaunchPaths"].apply(partialParams));
    }
    invokeListOrganizationPortfolioAccess(partialParams) {
        return this.client.listOrganizationPortfolioAccess(this.ops["ListOrganizationPortfolioAccess"].apply(partialParams));
    }
    invokeListPortfolioAccess(partialParams) {
        return this.client.listPortfolioAccess(this.ops["ListPortfolioAccess"].apply(partialParams));
    }
    invokeListPortfoliosForProduct(partialParams) {
        return this.client.listPortfoliosForProduct(this.ops["ListPortfoliosForProduct"].apply(partialParams));
    }
    invokeListPrincipalsForPortfolio(partialParams) {
        return this.client.listPrincipalsForPortfolio(this.ops["ListPrincipalsForPortfolio"].apply(partialParams));
    }
    invokeListProvisioningArtifacts(partialParams) {
        return this.client.listProvisioningArtifacts(this.ops["ListProvisioningArtifacts"].apply(partialParams));
    }
    invokeListProvisioningArtifactsForServiceAction(partialParams) {
        return this.client.listProvisioningArtifactsForServiceAction(this.ops["ListProvisioningArtifactsForServiceAction"].apply(partialParams));
    }
    invokeListResourcesForTagOption(partialParams) {
        return this.client.listResourcesForTagOption(this.ops["ListResourcesForTagOption"].apply(partialParams));
    }
    invokeListServiceActionsForProvisioningArtifact(partialParams) {
        return this.client.listServiceActionsForProvisioningArtifact(this.ops["ListServiceActionsForProvisioningArtifact"].apply(partialParams));
    }
    invokeListStackInstancesForProvisionedProduct(partialParams) {
        return this.client.listStackInstancesForProvisionedProduct(this.ops["ListStackInstancesForProvisionedProduct"].apply(partialParams));
    }
    invokeProvisionProduct(partialParams) {
        return this.client.provisionProduct(this.ops["ProvisionProduct"].apply(partialParams));
    }
    invokeRejectPortfolioShare(partialParams) {
        return this.client.rejectPortfolioShare(this.ops["RejectPortfolioShare"].apply(partialParams));
    }
    invokeTerminateProvisionedProduct(partialParams) {
        return this.client.terminateProvisionedProduct(this.ops["TerminateProvisionedProduct"].apply(partialParams));
    }
    invokeUpdateConstraint(partialParams) {
        return this.client.updateConstraint(this.ops["UpdateConstraint"].apply(partialParams));
    }
    invokeUpdatePortfolio(partialParams) {
        return this.client.updatePortfolio(this.ops["UpdatePortfolio"].apply(partialParams));
    }
    invokeUpdatePortfolioShare(partialParams) {
        return this.client.updatePortfolioShare(this.ops["UpdatePortfolioShare"].apply(partialParams));
    }
    invokeUpdateProduct(partialParams) {
        return this.client.updateProduct(this.ops["UpdateProduct"].apply(partialParams));
    }
    invokeUpdateProvisionedProduct(partialParams) {
        return this.client.updateProvisionedProduct(this.ops["UpdateProvisionedProduct"].apply(partialParams));
    }
    invokeUpdateProvisionedProductProperties(partialParams) {
        return this.client.updateProvisionedProductProperties(this.ops["UpdateProvisionedProductProperties"].apply(partialParams));
    }
    invokeUpdateProvisioningArtifact(partialParams) {
        return this.client.updateProvisioningArtifact(this.ops["UpdateProvisioningArtifact"].apply(partialParams));
    }
    invokeUpdateServiceAction(partialParams) {
        return this.client.updateServiceAction(this.ops["UpdateServiceAction"].apply(partialParams));
    }
    invokeUpdateTagOption(partialParams) {
        return this.client.updateTagOption(this.ops["UpdateTagOption"].apply(partialParams));
    }
}
exports.default = default_1;
