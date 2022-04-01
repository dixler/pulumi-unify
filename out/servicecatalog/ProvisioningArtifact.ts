
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AcceptPortfolioShareInput,
    AssociateBudgetWithResourceInput,
    AssociatePrincipalWithPortfolioInput,
    AssociateProductWithPortfolioInput,
    AssociateServiceActionWithProvisioningArtifactInput,
    AssociateTagOptionWithResourceInput,
    BatchAssociateServiceActionWithProvisioningArtifactInput,
    BatchDisassociateServiceActionFromProvisioningArtifactInput,
    CopyProductInput,
    CreateConstraintInput,
    CreatePortfolioInput,
    CreatePortfolioShareInput,
    CreateProductInput,
    CreateProvisionedProductPlanInput,
    CreateProvisioningArtifactInput,
    CreateServiceActionInput,
    CreateTagOptionInput,
    DeleteConstraintInput,
    DeletePortfolioInput,
    DeletePortfolioShareInput,
    DeleteProductInput,
    DeleteProvisionedProductPlanInput,
    DeleteProvisioningArtifactInput,
    DeleteServiceActionInput,
    DeleteTagOptionInput,
    DescribeConstraintInput,
    DescribeCopyProductStatusInput,
    DescribePortfolioInput,
    DescribePortfolioShareStatusInput,
    DescribePortfolioSharesInput,
    DescribeProductInput,
    DescribeProductAsAdminInput,
    DescribeProductViewInput,
    DescribeProvisionedProductInput,
    DescribeProvisionedProductPlanInput,
    DescribeProvisioningArtifactInput,
    DescribeProvisioningParametersInput,
    DescribeRecordInput,
    DescribeServiceActionInput,
    DescribeServiceActionExecutionParametersInput,
    DescribeTagOptionInput,
    DisableAWSOrganizationsAccessInput,
    DisassociateBudgetFromResourceInput,
    DisassociatePrincipalFromPortfolioInput,
    DisassociateProductFromPortfolioInput,
    DisassociateServiceActionFromProvisioningArtifactInput,
    DisassociateTagOptionFromResourceInput,
    EnableAWSOrganizationsAccessInput,
    ExecuteProvisionedProductPlanInput,
    ExecuteProvisionedProductServiceActionInput,
    GetAWSOrganizationsAccessStatusInput,
    GetProvisionedProductOutputsInput,
    ImportAsProvisionedProductInput,
    ListAcceptedPortfolioSharesInput,
    ListBudgetsForResourceInput,
    ListConstraintsForPortfolioInput,
    ListLaunchPathsInput,
    ListOrganizationPortfolioAccessInput,
    ListPortfolioAccessInput,
    ListPortfoliosInput,
    ListPortfoliosForProductInput,
    ListPrincipalsForPortfolioInput,
    ListProvisionedProductPlansInput,
    ListProvisioningArtifactsInput,
    ListProvisioningArtifactsForServiceActionInput,
    ListRecordHistoryInput,
    ListResourcesForTagOptionInput,
    ListServiceActionsInput,
    ListServiceActionsForProvisioningArtifactInput,
    ListStackInstancesForProvisionedProductInput,
    ListTagOptionsInput,
    ProvisionProductInput,
    RejectPortfolioShareInput,
    ScanProvisionedProductsInput,
    SearchProductsInput,
    SearchProductsAsAdminInput,
    SearchProvisionedProductsInput,
    TerminateProvisionedProductInput,
    UpdateConstraintInput,
    UpdatePortfolioInput,
    UpdatePortfolioShareInput,
    UpdateProductInput,
    UpdateProvisionedProductInput,
    UpdateProvisionedProductPropertiesInput,
    UpdateProvisioningArtifactInput,
    UpdateServiceActionInput,
    UpdateTagOptionInput,
    AcceptPortfolioShareOutput,
    AssociateBudgetWithResourceOutput,
    AssociatePrincipalWithPortfolioOutput,
    AssociateProductWithPortfolioOutput,
    AssociateServiceActionWithProvisioningArtifactOutput,
    AssociateTagOptionWithResourceOutput,
    BatchAssociateServiceActionWithProvisioningArtifactOutput,
    BatchDisassociateServiceActionFromProvisioningArtifactOutput,
    CopyProductOutput,
    CreateConstraintOutput,
    CreatePortfolioOutput,
    CreatePortfolioShareOutput,
    CreateProductOutput,
    CreateProvisionedProductPlanOutput,
    CreateProvisioningArtifactOutput,
    CreateServiceActionOutput,
    CreateTagOptionOutput,
    DeleteConstraintOutput,
    DeletePortfolioOutput,
    DeletePortfolioShareOutput,
    DeleteProductOutput,
    DeleteProvisionedProductPlanOutput,
    DeleteProvisioningArtifactOutput,
    DeleteServiceActionOutput,
    DeleteTagOptionOutput,
    DescribeConstraintOutput,
    DescribeCopyProductStatusOutput,
    DescribePortfolioOutput,
    DescribePortfolioShareStatusOutput,
    DescribePortfolioSharesOutput,
    DescribeProductOutput,
    DescribeProductAsAdminOutput,
    DescribeProductViewOutput,
    DescribeProvisionedProductOutput,
    DescribeProvisionedProductPlanOutput,
    DescribeProvisioningArtifactOutput,
    DescribeProvisioningParametersOutput,
    DescribeRecordOutput,
    DescribeServiceActionOutput,
    DescribeServiceActionExecutionParametersOutput,
    DescribeTagOptionOutput,
    DisableAWSOrganizationsAccessOutput,
    DisassociateBudgetFromResourceOutput,
    DisassociatePrincipalFromPortfolioOutput,
    DisassociateProductFromPortfolioOutput,
    DisassociateServiceActionFromProvisioningArtifactOutput,
    DisassociateTagOptionFromResourceOutput,
    EnableAWSOrganizationsAccessOutput,
    ExecuteProvisionedProductPlanOutput,
    ExecuteProvisionedProductServiceActionOutput,
    GetAWSOrganizationsAccessStatusOutput,
    GetProvisionedProductOutputsOutput,
    ImportAsProvisionedProductOutput,
    ListAcceptedPortfolioSharesOutput,
    ListBudgetsForResourceOutput,
    ListConstraintsForPortfolioOutput,
    ListLaunchPathsOutput,
    ListOrganizationPortfolioAccessOutput,
    ListPortfolioAccessOutput,
    ListPortfoliosOutput,
    ListPortfoliosForProductOutput,
    ListPrincipalsForPortfolioOutput,
    ListProvisionedProductPlansOutput,
    ListProvisioningArtifactsOutput,
    ListProvisioningArtifactsForServiceActionOutput,
    ListRecordHistoryOutput,
    ListResourcesForTagOptionOutput,
    ListServiceActionsOutput,
    ListServiceActionsForProvisioningArtifactOutput,
    ListStackInstancesForProvisionedProductOutput,
    ListTagOptionsOutput,
    ProvisionProductOutput,
    RejectPortfolioShareOutput,
    ScanProvisionedProductsOutput,
    SearchProductsOutput,
    SearchProductsAsAdminOutput,
    SearchProvisionedProductsOutput,
    TerminateProvisionedProductOutput,
    UpdateConstraintOutput,
    UpdatePortfolioOutput,
    UpdatePortfolioShareOutput,
    UpdateProductOutput,
    UpdateProvisionedProductOutput,
    UpdateProvisionedProductPropertiesOutput,
    UpdateProvisioningArtifactOutput,
    UpdateServiceActionOutput,
    UpdateTagOptionOutput
} from "aws-sdk/clients/servicecatalog";
const schema = require("../apis/servicecatalog-2015-12-10.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.servicecatalog.ProvisioningArtifact {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.servicecatalog.ProvisioningArtifact>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.ServiceCatalog()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
          console.log(this.capitalizedParams);
        })
    }
    boot() {
        if (this.booted) {
          return;
        }
        Object.entries(this.capitalizedParams).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value.value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
        this.ops = getResourceOperations(this.capitalizedParams as any, schema);
        this.booted = true;
    }

    invokeAcceptPortfolioShare(partialParams: ToOptional<{
      [K in keyof AcceptPortfolioShareInput]: (AcceptPortfolioShareInput)[K]
    }>): Request<AcceptPortfolioShareOutput, AWSError> {
        this.boot();
        return this.client.acceptPortfolioShare(
          this.ops["AcceptPortfolioShare"].apply(partialParams)
        );
    }

    invokeAssociateBudgetWithResource(partialParams: ToOptional<{
      [K in keyof AssociateBudgetWithResourceInput]: (AssociateBudgetWithResourceInput)[K]
    }>): Request<AssociateBudgetWithResourceOutput, AWSError> {
        this.boot();
        return this.client.associateBudgetWithResource(
          this.ops["AssociateBudgetWithResource"].apply(partialParams)
        );
    }

    invokeAssociatePrincipalWithPortfolio(partialParams: ToOptional<{
      [K in keyof AssociatePrincipalWithPortfolioInput]: (AssociatePrincipalWithPortfolioInput)[K]
    }>): Request<AssociatePrincipalWithPortfolioOutput, AWSError> {
        this.boot();
        return this.client.associatePrincipalWithPortfolio(
          this.ops["AssociatePrincipalWithPortfolio"].apply(partialParams)
        );
    }

    invokeAssociateProductWithPortfolio(partialParams: ToOptional<{
      [K in keyof AssociateProductWithPortfolioInput & keyof Omit<AssociateProductWithPortfolioInput, "ProductId">]: (AssociateProductWithPortfolioInput)[K]
    }>): Request<AssociateProductWithPortfolioOutput, AWSError> {
        this.boot();
        return this.client.associateProductWithPortfolio(
          this.ops["AssociateProductWithPortfolio"].apply(partialParams)
        );
    }

    invokeAssociateServiceActionWithProvisioningArtifact(partialParams: ToOptional<{
      [K in keyof AssociateServiceActionWithProvisioningArtifactInput & keyof Omit<AssociateServiceActionWithProvisioningArtifactInput, "ProductId">]: (AssociateServiceActionWithProvisioningArtifactInput)[K]
    }>): Request<AssociateServiceActionWithProvisioningArtifactOutput, AWSError> {
        this.boot();
        return this.client.associateServiceActionWithProvisioningArtifact(
          this.ops["AssociateServiceActionWithProvisioningArtifact"].apply(partialParams)
        );
    }

    invokeAssociateTagOptionWithResource(partialParams: ToOptional<{
      [K in keyof AssociateTagOptionWithResourceInput]: (AssociateTagOptionWithResourceInput)[K]
    }>): Request<AssociateTagOptionWithResourceOutput, AWSError> {
        this.boot();
        return this.client.associateTagOptionWithResource(
          this.ops["AssociateTagOptionWithResource"].apply(partialParams)
        );
    }

    invokeBatchAssociateServiceActionWithProvisioningArtifact(partialParams: ToOptional<{
      [K in keyof BatchAssociateServiceActionWithProvisioningArtifactInput]: (BatchAssociateServiceActionWithProvisioningArtifactInput)[K]
    }>): Request<BatchAssociateServiceActionWithProvisioningArtifactOutput, AWSError> {
        this.boot();
        return this.client.batchAssociateServiceActionWithProvisioningArtifact(
          this.ops["BatchAssociateServiceActionWithProvisioningArtifact"].apply(partialParams)
        );
    }

    invokeBatchDisassociateServiceActionFromProvisioningArtifact(partialParams: ToOptional<{
      [K in keyof BatchDisassociateServiceActionFromProvisioningArtifactInput]: (BatchDisassociateServiceActionFromProvisioningArtifactInput)[K]
    }>): Request<BatchDisassociateServiceActionFromProvisioningArtifactOutput, AWSError> {
        this.boot();
        return this.client.batchDisassociateServiceActionFromProvisioningArtifact(
          this.ops["BatchDisassociateServiceActionFromProvisioningArtifact"].apply(partialParams)
        );
    }

    invokeCopyProduct(partialParams: ToOptional<{
      [K in keyof CopyProductInput]: (CopyProductInput)[K]
    }>): Request<CopyProductOutput, AWSError> {
        this.boot();
        return this.client.copyProduct(
          this.ops["CopyProduct"].apply(partialParams)
        );
    }

    invokeCreateConstraint(partialParams: ToOptional<{
      [K in keyof CreateConstraintInput & keyof Omit<CreateConstraintInput, "ProductId" | "Type">]: (CreateConstraintInput)[K]
    }>): Request<CreateConstraintOutput, AWSError> {
        this.boot();
        return this.client.createConstraint(
          this.ops["CreateConstraint"].apply(partialParams)
        );
    }

    invokeCreatePortfolio(partialParams: ToOptional<{
      [K in keyof CreatePortfolioInput]: (CreatePortfolioInput)[K]
    }>): Request<CreatePortfolioOutput, AWSError> {
        this.boot();
        return this.client.createPortfolio(
          this.ops["CreatePortfolio"].apply(partialParams)
        );
    }

    invokeCreatePortfolioShare(partialParams: ToOptional<{
      [K in keyof CreatePortfolioShareInput]: (CreatePortfolioShareInput)[K]
    }>): Request<CreatePortfolioShareOutput, AWSError> {
        this.boot();
        return this.client.createPortfolioShare(
          this.ops["CreatePortfolioShare"].apply(partialParams)
        );
    }

    invokeCreateProduct(partialParams: ToOptional<{
      [K in keyof CreateProductInput & keyof Omit<CreateProductInput, "Name">]: (CreateProductInput)[K]
    }>): Request<CreateProductOutput, AWSError> {
        this.boot();
        return this.client.createProduct(
          this.ops["CreateProduct"].apply(partialParams)
        );
    }

    invokeCreateProvisionedProductPlan(partialParams: ToOptional<{
      [K in keyof CreateProvisionedProductPlanInput & keyof Omit<CreateProvisionedProductPlanInput, "ProductId">]: (CreateProvisionedProductPlanInput)[K]
    }>): Request<CreateProvisionedProductPlanOutput, AWSError> {
        this.boot();
        return this.client.createProvisionedProductPlan(
          this.ops["CreateProvisionedProductPlan"].apply(partialParams)
        );
    }

    invokeCreateProvisioningArtifact(partialParams: ToOptional<{
      [K in keyof CreateProvisioningArtifactInput & keyof Omit<CreateProvisioningArtifactInput, "ProductId">]: (CreateProvisioningArtifactInput)[K]
    }>): Request<CreateProvisioningArtifactOutput, AWSError> {
        this.boot();
        return this.client.createProvisioningArtifact(
          this.ops["CreateProvisioningArtifact"].apply(partialParams)
        );
    }

    invokeCreateServiceAction(partialParams: ToOptional<{
      [K in keyof CreateServiceActionInput & keyof Omit<CreateServiceActionInput, "Name">]: (CreateServiceActionInput)[K]
    }>): Request<CreateServiceActionOutput, AWSError> {
        this.boot();
        return this.client.createServiceAction(
          this.ops["CreateServiceAction"].apply(partialParams)
        );
    }

    invokeCreateTagOption(partialParams: ToOptional<{
      [K in keyof CreateTagOptionInput]: (CreateTagOptionInput)[K]
    }>): Request<CreateTagOptionOutput, AWSError> {
        this.boot();
        return this.client.createTagOption(
          this.ops["CreateTagOption"].apply(partialParams)
        );
    }

    invokeDeleteConstraint(partialParams: ToOptional<{
      [K in keyof DeleteConstraintInput]: (DeleteConstraintInput)[K]
    }>): Request<DeleteConstraintOutput, AWSError> {
        this.boot();
        return this.client.deleteConstraint(
          this.ops["DeleteConstraint"].apply(partialParams)
        );
    }

    invokeDeletePortfolio(partialParams: ToOptional<{
      [K in keyof DeletePortfolioInput]: (DeletePortfolioInput)[K]
    }>): Request<DeletePortfolioOutput, AWSError> {
        this.boot();
        return this.client.deletePortfolio(
          this.ops["DeletePortfolio"].apply(partialParams)
        );
    }

    invokeDeletePortfolioShare(partialParams: ToOptional<{
      [K in keyof DeletePortfolioShareInput]: (DeletePortfolioShareInput)[K]
    }>): Request<DeletePortfolioShareOutput, AWSError> {
        this.boot();
        return this.client.deletePortfolioShare(
          this.ops["DeletePortfolioShare"].apply(partialParams)
        );
    }

    invokeDeleteProduct(partialParams: ToOptional<{
      [K in keyof DeleteProductInput]: (DeleteProductInput)[K]
    }>): Request<DeleteProductOutput, AWSError> {
        this.boot();
        return this.client.deleteProduct(
          this.ops["DeleteProduct"].apply(partialParams)
        );
    }

    invokeDeleteProvisionedProductPlan(partialParams: ToOptional<{
      [K in keyof DeleteProvisionedProductPlanInput]: (DeleteProvisionedProductPlanInput)[K]
    }>): Request<DeleteProvisionedProductPlanOutput, AWSError> {
        this.boot();
        return this.client.deleteProvisionedProductPlan(
          this.ops["DeleteProvisionedProductPlan"].apply(partialParams)
        );
    }

    invokeDeleteProvisioningArtifact(partialParams: ToOptional<{
      [K in keyof DeleteProvisioningArtifactInput & keyof Omit<DeleteProvisioningArtifactInput, "ProductId">]: (DeleteProvisioningArtifactInput)[K]
    }>): Request<DeleteProvisioningArtifactOutput, AWSError> {
        this.boot();
        return this.client.deleteProvisioningArtifact(
          this.ops["DeleteProvisioningArtifact"].apply(partialParams)
        );
    }

    invokeDeleteServiceAction(partialParams: ToOptional<{
      [K in keyof DeleteServiceActionInput]: (DeleteServiceActionInput)[K]
    }>): Request<DeleteServiceActionOutput, AWSError> {
        this.boot();
        return this.client.deleteServiceAction(
          this.ops["DeleteServiceAction"].apply(partialParams)
        );
    }

    invokeDeleteTagOption(partialParams: ToOptional<{
      [K in keyof DeleteTagOptionInput]: (DeleteTagOptionInput)[K]
    }>): Request<DeleteTagOptionOutput, AWSError> {
        this.boot();
        return this.client.deleteTagOption(
          this.ops["DeleteTagOption"].apply(partialParams)
        );
    }

    invokeDescribeConstraint(partialParams: ToOptional<{
      [K in keyof DescribeConstraintInput]: (DescribeConstraintInput)[K]
    }>): Request<DescribeConstraintOutput, AWSError> {
        this.boot();
        return this.client.describeConstraint(
          this.ops["DescribeConstraint"].apply(partialParams)
        );
    }

    invokeDescribeCopyProductStatus(partialParams: ToOptional<{
      [K in keyof DescribeCopyProductStatusInput]: (DescribeCopyProductStatusInput)[K]
    }>): Request<DescribeCopyProductStatusOutput, AWSError> {
        this.boot();
        return this.client.describeCopyProductStatus(
          this.ops["DescribeCopyProductStatus"].apply(partialParams)
        );
    }

    invokeDescribePortfolio(partialParams: ToOptional<{
      [K in keyof DescribePortfolioInput]: (DescribePortfolioInput)[K]
    }>): Request<DescribePortfolioOutput, AWSError> {
        this.boot();
        return this.client.describePortfolio(
          this.ops["DescribePortfolio"].apply(partialParams)
        );
    }

    invokeDescribePortfolioShareStatus(partialParams: ToOptional<{
      [K in keyof DescribePortfolioShareStatusInput]: (DescribePortfolioShareStatusInput)[K]
    }>): Request<DescribePortfolioShareStatusOutput, AWSError> {
        this.boot();
        return this.client.describePortfolioShareStatus(
          this.ops["DescribePortfolioShareStatus"].apply(partialParams)
        );
    }

    invokeDescribePortfolioShares(partialParams: ToOptional<{
      [K in keyof DescribePortfolioSharesInput & keyof Omit<DescribePortfolioSharesInput, "Type">]: (DescribePortfolioSharesInput)[K]
    }>): Request<DescribePortfolioSharesOutput, AWSError> {
        this.boot();
        return this.client.describePortfolioShares(
          this.ops["DescribePortfolioShares"].apply(partialParams)
        );
    }

    invokeDescribeProduct(partialParams: ToOptional<{
      [K in keyof DescribeProductInput]: (DescribeProductInput)[K]
    }>): Request<DescribeProductOutput, AWSError> {
        this.boot();
        return this.client.describeProduct(
          this.ops["DescribeProduct"].apply(partialParams)
        );
    }

    invokeDescribeProductAsAdmin(partialParams: ToOptional<{
      [K in keyof DescribeProductAsAdminInput]: (DescribeProductAsAdminInput)[K]
    }>): Request<DescribeProductAsAdminOutput, AWSError> {
        this.boot();
        return this.client.describeProductAsAdmin(
          this.ops["DescribeProductAsAdmin"].apply(partialParams)
        );
    }

    invokeDescribeProductView(partialParams: ToOptional<{
      [K in keyof DescribeProductViewInput]: (DescribeProductViewInput)[K]
    }>): Request<DescribeProductViewOutput, AWSError> {
        this.boot();
        return this.client.describeProductView(
          this.ops["DescribeProductView"].apply(partialParams)
        );
    }

    invokeDescribeProvisionedProduct(partialParams: ToOptional<{
      [K in keyof DescribeProvisionedProductInput]: (DescribeProvisionedProductInput)[K]
    }>): Request<DescribeProvisionedProductOutput, AWSError> {
        this.boot();
        return this.client.describeProvisionedProduct(
          this.ops["DescribeProvisionedProduct"].apply(partialParams)
        );
    }

    invokeDescribeProvisionedProductPlan(partialParams: ToOptional<{
      [K in keyof DescribeProvisionedProductPlanInput]: (DescribeProvisionedProductPlanInput)[K]
    }>): Request<DescribeProvisionedProductPlanOutput, AWSError> {
        this.boot();
        return this.client.describeProvisionedProductPlan(
          this.ops["DescribeProvisionedProductPlan"].apply(partialParams)
        );
    }

    invokeDescribeProvisioningArtifact(partialParams: ToOptional<{
      [K in keyof DescribeProvisioningArtifactInput]: (DescribeProvisioningArtifactInput)[K]
    }>): Request<DescribeProvisioningArtifactOutput, AWSError> {
        this.boot();
        return this.client.describeProvisioningArtifact(
          this.ops["DescribeProvisioningArtifact"].apply(partialParams)
        );
    }

    invokeDescribeProvisioningParameters(partialParams: ToOptional<{
      [K in keyof DescribeProvisioningParametersInput]: (DescribeProvisioningParametersInput)[K]
    }>): Request<DescribeProvisioningParametersOutput, AWSError> {
        this.boot();
        return this.client.describeProvisioningParameters(
          this.ops["DescribeProvisioningParameters"].apply(partialParams)
        );
    }

    invokeDescribeRecord(partialParams: ToOptional<{
      [K in keyof DescribeRecordInput]: (DescribeRecordInput)[K]
    }>): Request<DescribeRecordOutput, AWSError> {
        this.boot();
        return this.client.describeRecord(
          this.ops["DescribeRecord"].apply(partialParams)
        );
    }

    invokeDescribeServiceAction(partialParams: ToOptional<{
      [K in keyof DescribeServiceActionInput]: (DescribeServiceActionInput)[K]
    }>): Request<DescribeServiceActionOutput, AWSError> {
        this.boot();
        return this.client.describeServiceAction(
          this.ops["DescribeServiceAction"].apply(partialParams)
        );
    }

    invokeDescribeServiceActionExecutionParameters(partialParams: ToOptional<{
      [K in keyof DescribeServiceActionExecutionParametersInput]: (DescribeServiceActionExecutionParametersInput)[K]
    }>): Request<DescribeServiceActionExecutionParametersOutput, AWSError> {
        this.boot();
        return this.client.describeServiceActionExecutionParameters(
          this.ops["DescribeServiceActionExecutionParameters"].apply(partialParams)
        );
    }

    invokeDescribeTagOption(partialParams: ToOptional<{
      [K in keyof DescribeTagOptionInput]: (DescribeTagOptionInput)[K]
    }>): Request<DescribeTagOptionOutput, AWSError> {
        this.boot();
        return this.client.describeTagOption(
          this.ops["DescribeTagOption"].apply(partialParams)
        );
    }

    invokeDisableAWSOrganizationsAccess(partialParams: ToOptional<{
      [K in keyof DisableAWSOrganizationsAccessInput]: (DisableAWSOrganizationsAccessInput)[K]
    }>): Request<DisableAWSOrganizationsAccessOutput, AWSError> {
        this.boot();
        return this.client.disableAWSOrganizationsAccess(
          this.ops["DisableAWSOrganizationsAccess"].apply(partialParams)
        );
    }

    invokeDisassociateBudgetFromResource(partialParams: ToOptional<{
      [K in keyof DisassociateBudgetFromResourceInput]: (DisassociateBudgetFromResourceInput)[K]
    }>): Request<DisassociateBudgetFromResourceOutput, AWSError> {
        this.boot();
        return this.client.disassociateBudgetFromResource(
          this.ops["DisassociateBudgetFromResource"].apply(partialParams)
        );
    }

    invokeDisassociatePrincipalFromPortfolio(partialParams: ToOptional<{
      [K in keyof DisassociatePrincipalFromPortfolioInput]: (DisassociatePrincipalFromPortfolioInput)[K]
    }>): Request<DisassociatePrincipalFromPortfolioOutput, AWSError> {
        this.boot();
        return this.client.disassociatePrincipalFromPortfolio(
          this.ops["DisassociatePrincipalFromPortfolio"].apply(partialParams)
        );
    }

    invokeDisassociateProductFromPortfolio(partialParams: ToOptional<{
      [K in keyof DisassociateProductFromPortfolioInput & keyof Omit<DisassociateProductFromPortfolioInput, "ProductId">]: (DisassociateProductFromPortfolioInput)[K]
    }>): Request<DisassociateProductFromPortfolioOutput, AWSError> {
        this.boot();
        return this.client.disassociateProductFromPortfolio(
          this.ops["DisassociateProductFromPortfolio"].apply(partialParams)
        );
    }

    invokeDisassociateServiceActionFromProvisioningArtifact(partialParams: ToOptional<{
      [K in keyof DisassociateServiceActionFromProvisioningArtifactInput & keyof Omit<DisassociateServiceActionFromProvisioningArtifactInput, "ProductId">]: (DisassociateServiceActionFromProvisioningArtifactInput)[K]
    }>): Request<DisassociateServiceActionFromProvisioningArtifactOutput, AWSError> {
        this.boot();
        return this.client.disassociateServiceActionFromProvisioningArtifact(
          this.ops["DisassociateServiceActionFromProvisioningArtifact"].apply(partialParams)
        );
    }

    invokeDisassociateTagOptionFromResource(partialParams: ToOptional<{
      [K in keyof DisassociateTagOptionFromResourceInput]: (DisassociateTagOptionFromResourceInput)[K]
    }>): Request<DisassociateTagOptionFromResourceOutput, AWSError> {
        this.boot();
        return this.client.disassociateTagOptionFromResource(
          this.ops["DisassociateTagOptionFromResource"].apply(partialParams)
        );
    }

    invokeEnableAWSOrganizationsAccess(partialParams: ToOptional<{
      [K in keyof EnableAWSOrganizationsAccessInput]: (EnableAWSOrganizationsAccessInput)[K]
    }>): Request<EnableAWSOrganizationsAccessOutput, AWSError> {
        this.boot();
        return this.client.enableAWSOrganizationsAccess(
          this.ops["EnableAWSOrganizationsAccess"].apply(partialParams)
        );
    }

    invokeExecuteProvisionedProductPlan(partialParams: ToOptional<{
      [K in keyof ExecuteProvisionedProductPlanInput]: (ExecuteProvisionedProductPlanInput)[K]
    }>): Request<ExecuteProvisionedProductPlanOutput, AWSError> {
        this.boot();
        return this.client.executeProvisionedProductPlan(
          this.ops["ExecuteProvisionedProductPlan"].apply(partialParams)
        );
    }

    invokeExecuteProvisionedProductServiceAction(partialParams: ToOptional<{
      [K in keyof ExecuteProvisionedProductServiceActionInput]: (ExecuteProvisionedProductServiceActionInput)[K]
    }>): Request<ExecuteProvisionedProductServiceActionOutput, AWSError> {
        this.boot();
        return this.client.executeProvisionedProductServiceAction(
          this.ops["ExecuteProvisionedProductServiceAction"].apply(partialParams)
        );
    }

    invokeGetAWSOrganizationsAccessStatus(partialParams: ToOptional<{
      [K in keyof GetAWSOrganizationsAccessStatusInput]: (GetAWSOrganizationsAccessStatusInput)[K]
    }>): Request<GetAWSOrganizationsAccessStatusOutput, AWSError> {
        this.boot();
        return this.client.getAWSOrganizationsAccessStatus(
          this.ops["GetAWSOrganizationsAccessStatus"].apply(partialParams)
        );
    }

    invokeGetProvisionedProductOutputs(partialParams: ToOptional<{
      [K in keyof GetProvisionedProductOutputsInput]: (GetProvisionedProductOutputsInput)[K]
    }>): Request<GetProvisionedProductOutputsOutput, AWSError> {
        this.boot();
        return this.client.getProvisionedProductOutputs(
          this.ops["GetProvisionedProductOutputs"].apply(partialParams)
        );
    }

    invokeImportAsProvisionedProduct(partialParams: ToOptional<{
      [K in keyof ImportAsProvisionedProductInput & keyof Omit<ImportAsProvisionedProductInput, "ProductId">]: (ImportAsProvisionedProductInput)[K]
    }>): Request<ImportAsProvisionedProductOutput, AWSError> {
        this.boot();
        return this.client.importAsProvisionedProduct(
          this.ops["ImportAsProvisionedProduct"].apply(partialParams)
        );
    }

    invokeListAcceptedPortfolioShares(partialParams: ToOptional<{
      [K in keyof ListAcceptedPortfolioSharesInput]: (ListAcceptedPortfolioSharesInput)[K]
    }>): Request<ListAcceptedPortfolioSharesOutput, AWSError> {
        this.boot();
        return this.client.listAcceptedPortfolioShares(
          this.ops["ListAcceptedPortfolioShares"].apply(partialParams)
        );
    }

    invokeListBudgetsForResource(partialParams: ToOptional<{
      [K in keyof ListBudgetsForResourceInput]: (ListBudgetsForResourceInput)[K]
    }>): Request<ListBudgetsForResourceOutput, AWSError> {
        this.boot();
        return this.client.listBudgetsForResource(
          this.ops["ListBudgetsForResource"].apply(partialParams)
        );
    }

    invokeListConstraintsForPortfolio(partialParams: ToOptional<{
      [K in keyof ListConstraintsForPortfolioInput]: (ListConstraintsForPortfolioInput)[K]
    }>): Request<ListConstraintsForPortfolioOutput, AWSError> {
        this.boot();
        return this.client.listConstraintsForPortfolio(
          this.ops["ListConstraintsForPortfolio"].apply(partialParams)
        );
    }

    invokeListLaunchPaths(partialParams: ToOptional<{
      [K in keyof ListLaunchPathsInput & keyof Omit<ListLaunchPathsInput, "ProductId">]: (ListLaunchPathsInput)[K]
    }>): Request<ListLaunchPathsOutput, AWSError> {
        this.boot();
        return this.client.listLaunchPaths(
          this.ops["ListLaunchPaths"].apply(partialParams)
        );
    }

    invokeListOrganizationPortfolioAccess(partialParams: ToOptional<{
      [K in keyof ListOrganizationPortfolioAccessInput]: (ListOrganizationPortfolioAccessInput)[K]
    }>): Request<ListOrganizationPortfolioAccessOutput, AWSError> {
        this.boot();
        return this.client.listOrganizationPortfolioAccess(
          this.ops["ListOrganizationPortfolioAccess"].apply(partialParams)
        );
    }

    invokeListPortfolioAccess(partialParams: ToOptional<{
      [K in keyof ListPortfolioAccessInput]: (ListPortfolioAccessInput)[K]
    }>): Request<ListPortfolioAccessOutput, AWSError> {
        this.boot();
        return this.client.listPortfolioAccess(
          this.ops["ListPortfolioAccess"].apply(partialParams)
        );
    }

    invokeListPortfolios(partialParams: ToOptional<{
      [K in keyof ListPortfoliosInput]: (ListPortfoliosInput)[K]
    }>): Request<ListPortfoliosOutput, AWSError> {
        this.boot();
        return this.client.listPortfolios(
          this.ops["ListPortfolios"].apply(partialParams)
        );
    }

    invokeListPortfoliosForProduct(partialParams: ToOptional<{
      [K in keyof ListPortfoliosForProductInput & keyof Omit<ListPortfoliosForProductInput, "ProductId">]: (ListPortfoliosForProductInput)[K]
    }>): Request<ListPortfoliosForProductOutput, AWSError> {
        this.boot();
        return this.client.listPortfoliosForProduct(
          this.ops["ListPortfoliosForProduct"].apply(partialParams)
        );
    }

    invokeListPrincipalsForPortfolio(partialParams: ToOptional<{
      [K in keyof ListPrincipalsForPortfolioInput]: (ListPrincipalsForPortfolioInput)[K]
    }>): Request<ListPrincipalsForPortfolioOutput, AWSError> {
        this.boot();
        return this.client.listPrincipalsForPortfolio(
          this.ops["ListPrincipalsForPortfolio"].apply(partialParams)
        );
    }

    invokeListProvisionedProductPlans(partialParams: ToOptional<{
      [K in keyof ListProvisionedProductPlansInput]: (ListProvisionedProductPlansInput)[K]
    }>): Request<ListProvisionedProductPlansOutput, AWSError> {
        this.boot();
        return this.client.listProvisionedProductPlans(
          this.ops["ListProvisionedProductPlans"].apply(partialParams)
        );
    }

    invokeListProvisioningArtifacts(partialParams: ToOptional<{
      [K in keyof ListProvisioningArtifactsInput & keyof Omit<ListProvisioningArtifactsInput, "ProductId">]: (ListProvisioningArtifactsInput)[K]
    }>): Request<ListProvisioningArtifactsOutput, AWSError> {
        this.boot();
        return this.client.listProvisioningArtifacts(
          this.ops["ListProvisioningArtifacts"].apply(partialParams)
        );
    }

    invokeListProvisioningArtifactsForServiceAction(partialParams: ToOptional<{
      [K in keyof ListProvisioningArtifactsForServiceActionInput]: (ListProvisioningArtifactsForServiceActionInput)[K]
    }>): Request<ListProvisioningArtifactsForServiceActionOutput, AWSError> {
        this.boot();
        return this.client.listProvisioningArtifactsForServiceAction(
          this.ops["ListProvisioningArtifactsForServiceAction"].apply(partialParams)
        );
    }

    invokeListRecordHistory(partialParams: ToOptional<{
      [K in keyof ListRecordHistoryInput]: (ListRecordHistoryInput)[K]
    }>): Request<ListRecordHistoryOutput, AWSError> {
        this.boot();
        return this.client.listRecordHistory(
          this.ops["ListRecordHistory"].apply(partialParams)
        );
    }

    invokeListResourcesForTagOption(partialParams: ToOptional<{
      [K in keyof ListResourcesForTagOptionInput]: (ListResourcesForTagOptionInput)[K]
    }>): Request<ListResourcesForTagOptionOutput, AWSError> {
        this.boot();
        return this.client.listResourcesForTagOption(
          this.ops["ListResourcesForTagOption"].apply(partialParams)
        );
    }

    invokeListServiceActions(partialParams: ToOptional<{
      [K in keyof ListServiceActionsInput]: (ListServiceActionsInput)[K]
    }>): Request<ListServiceActionsOutput, AWSError> {
        this.boot();
        return this.client.listServiceActions(
          this.ops["ListServiceActions"].apply(partialParams)
        );
    }

    invokeListServiceActionsForProvisioningArtifact(partialParams: ToOptional<{
      [K in keyof ListServiceActionsForProvisioningArtifactInput & keyof Omit<ListServiceActionsForProvisioningArtifactInput, "ProductId">]: (ListServiceActionsForProvisioningArtifactInput)[K]
    }>): Request<ListServiceActionsForProvisioningArtifactOutput, AWSError> {
        this.boot();
        return this.client.listServiceActionsForProvisioningArtifact(
          this.ops["ListServiceActionsForProvisioningArtifact"].apply(partialParams)
        );
    }

    invokeListStackInstancesForProvisionedProduct(partialParams: ToOptional<{
      [K in keyof ListStackInstancesForProvisionedProductInput]: (ListStackInstancesForProvisionedProductInput)[K]
    }>): Request<ListStackInstancesForProvisionedProductOutput, AWSError> {
        this.boot();
        return this.client.listStackInstancesForProvisionedProduct(
          this.ops["ListStackInstancesForProvisionedProduct"].apply(partialParams)
        );
    }

    invokeListTagOptions(partialParams: ToOptional<{
      [K in keyof ListTagOptionsInput]: (ListTagOptionsInput)[K]
    }>): Request<ListTagOptionsOutput, AWSError> {
        this.boot();
        return this.client.listTagOptions(
          this.ops["ListTagOptions"].apply(partialParams)
        );
    }

    invokeProvisionProduct(partialParams: ToOptional<{
      [K in keyof ProvisionProductInput]: (ProvisionProductInput)[K]
    }>): Request<ProvisionProductOutput, AWSError> {
        this.boot();
        return this.client.provisionProduct(
          this.ops["ProvisionProduct"].apply(partialParams)
        );
    }

    invokeRejectPortfolioShare(partialParams: ToOptional<{
      [K in keyof RejectPortfolioShareInput]: (RejectPortfolioShareInput)[K]
    }>): Request<RejectPortfolioShareOutput, AWSError> {
        this.boot();
        return this.client.rejectPortfolioShare(
          this.ops["RejectPortfolioShare"].apply(partialParams)
        );
    }

    invokeScanProvisionedProducts(partialParams: ToOptional<{
      [K in keyof ScanProvisionedProductsInput]: (ScanProvisionedProductsInput)[K]
    }>): Request<ScanProvisionedProductsOutput, AWSError> {
        this.boot();
        return this.client.scanProvisionedProducts(
          this.ops["ScanProvisionedProducts"].apply(partialParams)
        );
    }

    invokeSearchProducts(partialParams: ToOptional<{
      [K in keyof SearchProductsInput]: (SearchProductsInput)[K]
    }>): Request<SearchProductsOutput, AWSError> {
        this.boot();
        return this.client.searchProducts(
          this.ops["SearchProducts"].apply(partialParams)
        );
    }

    invokeSearchProductsAsAdmin(partialParams: ToOptional<{
      [K in keyof SearchProductsAsAdminInput]: (SearchProductsAsAdminInput)[K]
    }>): Request<SearchProductsAsAdminOutput, AWSError> {
        this.boot();
        return this.client.searchProductsAsAdmin(
          this.ops["SearchProductsAsAdmin"].apply(partialParams)
        );
    }

    invokeSearchProvisionedProducts(partialParams: ToOptional<{
      [K in keyof SearchProvisionedProductsInput]: (SearchProvisionedProductsInput)[K]
    }>): Request<SearchProvisionedProductsOutput, AWSError> {
        this.boot();
        return this.client.searchProvisionedProducts(
          this.ops["SearchProvisionedProducts"].apply(partialParams)
        );
    }

    invokeTerminateProvisionedProduct(partialParams: ToOptional<{
      [K in keyof TerminateProvisionedProductInput]: (TerminateProvisionedProductInput)[K]
    }>): Request<TerminateProvisionedProductOutput, AWSError> {
        this.boot();
        return this.client.terminateProvisionedProduct(
          this.ops["TerminateProvisionedProduct"].apply(partialParams)
        );
    }

    invokeUpdateConstraint(partialParams: ToOptional<{
      [K in keyof UpdateConstraintInput]: (UpdateConstraintInput)[K]
    }>): Request<UpdateConstraintOutput, AWSError> {
        this.boot();
        return this.client.updateConstraint(
          this.ops["UpdateConstraint"].apply(partialParams)
        );
    }

    invokeUpdatePortfolio(partialParams: ToOptional<{
      [K in keyof UpdatePortfolioInput]: (UpdatePortfolioInput)[K]
    }>): Request<UpdatePortfolioOutput, AWSError> {
        this.boot();
        return this.client.updatePortfolio(
          this.ops["UpdatePortfolio"].apply(partialParams)
        );
    }

    invokeUpdatePortfolioShare(partialParams: ToOptional<{
      [K in keyof UpdatePortfolioShareInput]: (UpdatePortfolioShareInput)[K]
    }>): Request<UpdatePortfolioShareOutput, AWSError> {
        this.boot();
        return this.client.updatePortfolioShare(
          this.ops["UpdatePortfolioShare"].apply(partialParams)
        );
    }

    invokeUpdateProduct(partialParams: ToOptional<{
      [K in keyof UpdateProductInput]: (UpdateProductInput)[K]
    }>): Request<UpdateProductOutput, AWSError> {
        this.boot();
        return this.client.updateProduct(
          this.ops["UpdateProduct"].apply(partialParams)
        );
    }

    invokeUpdateProvisionedProduct(partialParams: ToOptional<{
      [K in keyof UpdateProvisionedProductInput]: (UpdateProvisionedProductInput)[K]
    }>): Request<UpdateProvisionedProductOutput, AWSError> {
        this.boot();
        return this.client.updateProvisionedProduct(
          this.ops["UpdateProvisionedProduct"].apply(partialParams)
        );
    }

    invokeUpdateProvisionedProductProperties(partialParams: ToOptional<{
      [K in keyof UpdateProvisionedProductPropertiesInput]: (UpdateProvisionedProductPropertiesInput)[K]
    }>): Request<UpdateProvisionedProductPropertiesOutput, AWSError> {
        this.boot();
        return this.client.updateProvisionedProductProperties(
          this.ops["UpdateProvisionedProductProperties"].apply(partialParams)
        );
    }

    invokeUpdateProvisioningArtifact(partialParams: ToOptional<{
      [K in keyof UpdateProvisioningArtifactInput & keyof Omit<UpdateProvisioningArtifactInput, "ProductId">]: (UpdateProvisioningArtifactInput)[K]
    }>): Request<UpdateProvisioningArtifactOutput, AWSError> {
        this.boot();
        return this.client.updateProvisioningArtifact(
          this.ops["UpdateProvisioningArtifact"].apply(partialParams)
        );
    }

    invokeUpdateServiceAction(partialParams: ToOptional<{
      [K in keyof UpdateServiceActionInput]: (UpdateServiceActionInput)[K]
    }>): Request<UpdateServiceActionOutput, AWSError> {
        this.boot();
        return this.client.updateServiceAction(
          this.ops["UpdateServiceAction"].apply(partialParams)
        );
    }

    invokeUpdateTagOption(partialParams: ToOptional<{
      [K in keyof UpdateTagOptionInput]: (UpdateTagOptionInput)[K]
    }>): Request<UpdateTagOptionOutput, AWSError> {
        this.boot();
        return this.client.updateTagOption(
          this.ops["UpdateTagOption"].apply(partialParams)
        );
    }
}