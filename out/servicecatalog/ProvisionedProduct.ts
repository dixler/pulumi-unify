
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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
    DescribeProductViewInput,
    DescribeProvisionedProductPlanInput,
    DescribeRecordInput,
    DescribeServiceActionInput,
    DescribeServiceActionExecutionParametersInput,
    DescribeTagOptionInput,
    DisassociateBudgetFromResourceInput,
    DisassociatePrincipalFromPortfolioInput,
    DisassociateProductFromPortfolioInput,
    DisassociateServiceActionFromProvisioningArtifactInput,
    DisassociateTagOptionFromResourceInput,
    ExecuteProvisionedProductPlanInput,
    ExecuteProvisionedProductServiceActionInput,
    ImportAsProvisionedProductInput,
    ListBudgetsForResourceInput,
    ListConstraintsForPortfolioInput,
    ListLaunchPathsInput,
    ListOrganizationPortfolioAccessInput,
    ListPortfolioAccessInput,
    ListPortfoliosForProductInput,
    ListPrincipalsForPortfolioInput,
    ListProvisioningArtifactsInput,
    ListProvisioningArtifactsForServiceActionInput,
    ListResourcesForTagOptionInput,
    ListServiceActionsForProvisioningArtifactInput,
    ListStackInstancesForProvisionedProductInput,
    ProvisionProductInput,
    RejectPortfolioShareInput,
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
    DescribeProductViewOutput,
    DescribeProvisionedProductPlanOutput,
    DescribeRecordOutput,
    DescribeServiceActionOutput,
    DescribeServiceActionExecutionParametersOutput,
    DescribeTagOptionOutput,
    DisassociateBudgetFromResourceOutput,
    DisassociatePrincipalFromPortfolioOutput,
    DisassociateProductFromPortfolioOutput,
    DisassociateServiceActionFromProvisioningArtifactOutput,
    DisassociateTagOptionFromResourceOutput,
    ExecuteProvisionedProductPlanOutput,
    ExecuteProvisionedProductServiceActionOutput,
    ImportAsProvisionedProductOutput,
    ListBudgetsForResourceOutput,
    ListConstraintsForPortfolioOutput,
    ListLaunchPathsOutput,
    ListOrganizationPortfolioAccessOutput,
    ListPortfolioAccessOutput,
    ListPortfoliosForProductOutput,
    ListPrincipalsForPortfolioOutput,
    ListProvisioningArtifactsOutput,
    ListProvisioningArtifactsForServiceActionOutput,
    ListResourcesForTagOptionOutput,
    ListServiceActionsForProvisioningArtifactOutput,
    ListStackInstancesForProvisionedProductOutput,
    ProvisionProductOutput,
    RejectPortfolioShareOutput,
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.servicecatalog.ProvisionedProduct {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.servicecatalog.ProvisionedProduct>) {
        super(...args)
        this.client = new awssdk.ServiceCatalog()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/servicecatalog-2015-12-10.normal.json"), this.client)
    }

    invokeAcceptPortfolioShare(partialParams: ToOptional<{
      [K in keyof AcceptPortfolioShareInput & keyof AcceptPortfolioShareInput & keyof AcceptPortfolioShareInput & keyof AcceptPortfolioShareInput & keyof AcceptPortfolioShareInput & keyof AcceptPortfolioShareInput & keyof AcceptPortfolioShareInput & keyof AcceptPortfolioShareInput & keyof AcceptPortfolioShareInput & keyof AcceptPortfolioShareInput & keyof AcceptPortfolioShareInput & keyof AcceptPortfolioShareInput & keyof AcceptPortfolioShareInput & keyof AcceptPortfolioShareInput & keyof AcceptPortfolioShareInput & keyof AcceptPortfolioShareInput & keyof AcceptPortfolioShareInput]: (AcceptPortfolioShareInput & AcceptPortfolioShareInput & AcceptPortfolioShareInput & AcceptPortfolioShareInput & AcceptPortfolioShareInput & AcceptPortfolioShareInput & AcceptPortfolioShareInput & AcceptPortfolioShareInput & AcceptPortfolioShareInput & AcceptPortfolioShareInput & AcceptPortfolioShareInput & AcceptPortfolioShareInput & AcceptPortfolioShareInput & AcceptPortfolioShareInput & AcceptPortfolioShareInput & AcceptPortfolioShareInput & AcceptPortfolioShareInput)[K]
    }>): AcceptPortfolioShareOutput {
        return this.client.acceptPortfolioShare(
            this.ops["AcceptPortfolioShare"].apply(partialParams)
        );
    }

    invokeAssociateBudgetWithResource(partialParams: ToOptional<{
      [K in keyof AssociateBudgetWithResourceInput & keyof AssociateBudgetWithResourceInput & keyof AssociateBudgetWithResourceInput & keyof AssociateBudgetWithResourceInput & keyof AssociateBudgetWithResourceInput & keyof AssociateBudgetWithResourceInput & keyof AssociateBudgetWithResourceInput & keyof AssociateBudgetWithResourceInput & keyof AssociateBudgetWithResourceInput & keyof AssociateBudgetWithResourceInput & keyof AssociateBudgetWithResourceInput & keyof AssociateBudgetWithResourceInput & keyof AssociateBudgetWithResourceInput & keyof AssociateBudgetWithResourceInput & keyof AssociateBudgetWithResourceInput & keyof AssociateBudgetWithResourceInput & keyof AssociateBudgetWithResourceInput]: (AssociateBudgetWithResourceInput & AssociateBudgetWithResourceInput & AssociateBudgetWithResourceInput & AssociateBudgetWithResourceInput & AssociateBudgetWithResourceInput & AssociateBudgetWithResourceInput & AssociateBudgetWithResourceInput & AssociateBudgetWithResourceInput & AssociateBudgetWithResourceInput & AssociateBudgetWithResourceInput & AssociateBudgetWithResourceInput & AssociateBudgetWithResourceInput & AssociateBudgetWithResourceInput & AssociateBudgetWithResourceInput & AssociateBudgetWithResourceInput & AssociateBudgetWithResourceInput & AssociateBudgetWithResourceInput)[K]
    }>): AssociateBudgetWithResourceOutput {
        return this.client.associateBudgetWithResource(
            this.ops["AssociateBudgetWithResource"].apply(partialParams)
        );
    }

    invokeAssociatePrincipalWithPortfolio(partialParams: ToOptional<{
      [K in keyof AssociatePrincipalWithPortfolioInput & keyof AssociatePrincipalWithPortfolioInput & keyof AssociatePrincipalWithPortfolioInput & keyof AssociatePrincipalWithPortfolioInput & keyof AssociatePrincipalWithPortfolioInput & keyof AssociatePrincipalWithPortfolioInput & keyof AssociatePrincipalWithPortfolioInput & keyof AssociatePrincipalWithPortfolioInput & keyof AssociatePrincipalWithPortfolioInput & keyof AssociatePrincipalWithPortfolioInput & keyof AssociatePrincipalWithPortfolioInput & keyof AssociatePrincipalWithPortfolioInput & keyof AssociatePrincipalWithPortfolioInput & keyof AssociatePrincipalWithPortfolioInput & keyof AssociatePrincipalWithPortfolioInput & keyof AssociatePrincipalWithPortfolioInput & keyof AssociatePrincipalWithPortfolioInput]: (AssociatePrincipalWithPortfolioInput & AssociatePrincipalWithPortfolioInput & AssociatePrincipalWithPortfolioInput & AssociatePrincipalWithPortfolioInput & AssociatePrincipalWithPortfolioInput & AssociatePrincipalWithPortfolioInput & AssociatePrincipalWithPortfolioInput & AssociatePrincipalWithPortfolioInput & AssociatePrincipalWithPortfolioInput & AssociatePrincipalWithPortfolioInput & AssociatePrincipalWithPortfolioInput & AssociatePrincipalWithPortfolioInput & AssociatePrincipalWithPortfolioInput & AssociatePrincipalWithPortfolioInput & AssociatePrincipalWithPortfolioInput & AssociatePrincipalWithPortfolioInput & AssociatePrincipalWithPortfolioInput)[K]
    }>): AssociatePrincipalWithPortfolioOutput {
        return this.client.associatePrincipalWithPortfolio(
            this.ops["AssociatePrincipalWithPortfolio"].apply(partialParams)
        );
    }

    invokeAssociateProductWithPortfolio(partialParams: ToOptional<{
      [K in keyof AssociateProductWithPortfolioInput & keyof AssociateProductWithPortfolioInput & keyof AssociateProductWithPortfolioInput & keyof AssociateProductWithPortfolioInput & keyof AssociateProductWithPortfolioInput & keyof AssociateProductWithPortfolioInput & keyof AssociateProductWithPortfolioInput & keyof AssociateProductWithPortfolioInput & keyof AssociateProductWithPortfolioInput & keyof AssociateProductWithPortfolioInput & keyof AssociateProductWithPortfolioInput & keyof AssociateProductWithPortfolioInput & keyof AssociateProductWithPortfolioInput & keyof AssociateProductWithPortfolioInput & keyof AssociateProductWithPortfolioInput & keyof AssociateProductWithPortfolioInput & keyof AssociateProductWithPortfolioInput]: (AssociateProductWithPortfolioInput & AssociateProductWithPortfolioInput & AssociateProductWithPortfolioInput & AssociateProductWithPortfolioInput & AssociateProductWithPortfolioInput & AssociateProductWithPortfolioInput & AssociateProductWithPortfolioInput & AssociateProductWithPortfolioInput & AssociateProductWithPortfolioInput & AssociateProductWithPortfolioInput & AssociateProductWithPortfolioInput & AssociateProductWithPortfolioInput & AssociateProductWithPortfolioInput & AssociateProductWithPortfolioInput & AssociateProductWithPortfolioInput & AssociateProductWithPortfolioInput & AssociateProductWithPortfolioInput)[K]
    }>): AssociateProductWithPortfolioOutput {
        return this.client.associateProductWithPortfolio(
            this.ops["AssociateProductWithPortfolio"].apply(partialParams)
        );
    }

    invokeAssociateServiceActionWithProvisioningArtifact(partialParams: ToOptional<{
      [K in keyof AssociateServiceActionWithProvisioningArtifactInput & keyof AssociateServiceActionWithProvisioningArtifactInput & keyof AssociateServiceActionWithProvisioningArtifactInput & keyof AssociateServiceActionWithProvisioningArtifactInput & keyof AssociateServiceActionWithProvisioningArtifactInput & keyof AssociateServiceActionWithProvisioningArtifactInput & keyof AssociateServiceActionWithProvisioningArtifactInput & keyof AssociateServiceActionWithProvisioningArtifactInput & keyof AssociateServiceActionWithProvisioningArtifactInput & keyof AssociateServiceActionWithProvisioningArtifactInput & keyof AssociateServiceActionWithProvisioningArtifactInput & keyof AssociateServiceActionWithProvisioningArtifactInput & keyof AssociateServiceActionWithProvisioningArtifactInput & keyof AssociateServiceActionWithProvisioningArtifactInput & keyof AssociateServiceActionWithProvisioningArtifactInput & keyof AssociateServiceActionWithProvisioningArtifactInput & keyof AssociateServiceActionWithProvisioningArtifactInput]: (AssociateServiceActionWithProvisioningArtifactInput & AssociateServiceActionWithProvisioningArtifactInput & AssociateServiceActionWithProvisioningArtifactInput & AssociateServiceActionWithProvisioningArtifactInput & AssociateServiceActionWithProvisioningArtifactInput & AssociateServiceActionWithProvisioningArtifactInput & AssociateServiceActionWithProvisioningArtifactInput & AssociateServiceActionWithProvisioningArtifactInput & AssociateServiceActionWithProvisioningArtifactInput & AssociateServiceActionWithProvisioningArtifactInput & AssociateServiceActionWithProvisioningArtifactInput & AssociateServiceActionWithProvisioningArtifactInput & AssociateServiceActionWithProvisioningArtifactInput & AssociateServiceActionWithProvisioningArtifactInput & AssociateServiceActionWithProvisioningArtifactInput & AssociateServiceActionWithProvisioningArtifactInput & AssociateServiceActionWithProvisioningArtifactInput)[K]
    }>): AssociateServiceActionWithProvisioningArtifactOutput {
        return this.client.associateServiceActionWithProvisioningArtifact(
            this.ops["AssociateServiceActionWithProvisioningArtifact"].apply(partialParams)
        );
    }

    invokeAssociateTagOptionWithResource(partialParams: ToOptional<{
      [K in keyof AssociateTagOptionWithResourceInput & keyof AssociateTagOptionWithResourceInput & keyof AssociateTagOptionWithResourceInput & keyof AssociateTagOptionWithResourceInput & keyof AssociateTagOptionWithResourceInput & keyof AssociateTagOptionWithResourceInput & keyof AssociateTagOptionWithResourceInput & keyof AssociateTagOptionWithResourceInput & keyof AssociateTagOptionWithResourceInput & keyof AssociateTagOptionWithResourceInput & keyof AssociateTagOptionWithResourceInput & keyof AssociateTagOptionWithResourceInput & keyof AssociateTagOptionWithResourceInput & keyof AssociateTagOptionWithResourceInput & keyof AssociateTagOptionWithResourceInput & keyof AssociateTagOptionWithResourceInput & keyof AssociateTagOptionWithResourceInput]: (AssociateTagOptionWithResourceInput & AssociateTagOptionWithResourceInput & AssociateTagOptionWithResourceInput & AssociateTagOptionWithResourceInput & AssociateTagOptionWithResourceInput & AssociateTagOptionWithResourceInput & AssociateTagOptionWithResourceInput & AssociateTagOptionWithResourceInput & AssociateTagOptionWithResourceInput & AssociateTagOptionWithResourceInput & AssociateTagOptionWithResourceInput & AssociateTagOptionWithResourceInput & AssociateTagOptionWithResourceInput & AssociateTagOptionWithResourceInput & AssociateTagOptionWithResourceInput & AssociateTagOptionWithResourceInput & AssociateTagOptionWithResourceInput)[K]
    }>): AssociateTagOptionWithResourceOutput {
        return this.client.associateTagOptionWithResource(
            this.ops["AssociateTagOptionWithResource"].apply(partialParams)
        );
    }

    invokeBatchAssociateServiceActionWithProvisioningArtifact(partialParams: ToOptional<{
      [K in keyof BatchAssociateServiceActionWithProvisioningArtifactInput & keyof BatchAssociateServiceActionWithProvisioningArtifactInput & keyof BatchAssociateServiceActionWithProvisioningArtifactInput & keyof BatchAssociateServiceActionWithProvisioningArtifactInput & keyof BatchAssociateServiceActionWithProvisioningArtifactInput & keyof BatchAssociateServiceActionWithProvisioningArtifactInput & keyof BatchAssociateServiceActionWithProvisioningArtifactInput & keyof BatchAssociateServiceActionWithProvisioningArtifactInput & keyof BatchAssociateServiceActionWithProvisioningArtifactInput & keyof BatchAssociateServiceActionWithProvisioningArtifactInput & keyof BatchAssociateServiceActionWithProvisioningArtifactInput & keyof BatchAssociateServiceActionWithProvisioningArtifactInput & keyof BatchAssociateServiceActionWithProvisioningArtifactInput & keyof BatchAssociateServiceActionWithProvisioningArtifactInput & keyof BatchAssociateServiceActionWithProvisioningArtifactInput & keyof BatchAssociateServiceActionWithProvisioningArtifactInput & keyof BatchAssociateServiceActionWithProvisioningArtifactInput]: (BatchAssociateServiceActionWithProvisioningArtifactInput & BatchAssociateServiceActionWithProvisioningArtifactInput & BatchAssociateServiceActionWithProvisioningArtifactInput & BatchAssociateServiceActionWithProvisioningArtifactInput & BatchAssociateServiceActionWithProvisioningArtifactInput & BatchAssociateServiceActionWithProvisioningArtifactInput & BatchAssociateServiceActionWithProvisioningArtifactInput & BatchAssociateServiceActionWithProvisioningArtifactInput & BatchAssociateServiceActionWithProvisioningArtifactInput & BatchAssociateServiceActionWithProvisioningArtifactInput & BatchAssociateServiceActionWithProvisioningArtifactInput & BatchAssociateServiceActionWithProvisioningArtifactInput & BatchAssociateServiceActionWithProvisioningArtifactInput & BatchAssociateServiceActionWithProvisioningArtifactInput & BatchAssociateServiceActionWithProvisioningArtifactInput & BatchAssociateServiceActionWithProvisioningArtifactInput & BatchAssociateServiceActionWithProvisioningArtifactInput)[K]
    }>): BatchAssociateServiceActionWithProvisioningArtifactOutput {
        return this.client.batchAssociateServiceActionWithProvisioningArtifact(
            this.ops["BatchAssociateServiceActionWithProvisioningArtifact"].apply(partialParams)
        );
    }

    invokeBatchDisassociateServiceActionFromProvisioningArtifact(partialParams: ToOptional<{
      [K in keyof BatchDisassociateServiceActionFromProvisioningArtifactInput & keyof BatchDisassociateServiceActionFromProvisioningArtifactInput & keyof BatchDisassociateServiceActionFromProvisioningArtifactInput & keyof BatchDisassociateServiceActionFromProvisioningArtifactInput & keyof BatchDisassociateServiceActionFromProvisioningArtifactInput & keyof BatchDisassociateServiceActionFromProvisioningArtifactInput & keyof BatchDisassociateServiceActionFromProvisioningArtifactInput & keyof BatchDisassociateServiceActionFromProvisioningArtifactInput & keyof BatchDisassociateServiceActionFromProvisioningArtifactInput & keyof BatchDisassociateServiceActionFromProvisioningArtifactInput & keyof BatchDisassociateServiceActionFromProvisioningArtifactInput & keyof BatchDisassociateServiceActionFromProvisioningArtifactInput & keyof BatchDisassociateServiceActionFromProvisioningArtifactInput & keyof BatchDisassociateServiceActionFromProvisioningArtifactInput & keyof BatchDisassociateServiceActionFromProvisioningArtifactInput & keyof BatchDisassociateServiceActionFromProvisioningArtifactInput & keyof BatchDisassociateServiceActionFromProvisioningArtifactInput]: (BatchDisassociateServiceActionFromProvisioningArtifactInput & BatchDisassociateServiceActionFromProvisioningArtifactInput & BatchDisassociateServiceActionFromProvisioningArtifactInput & BatchDisassociateServiceActionFromProvisioningArtifactInput & BatchDisassociateServiceActionFromProvisioningArtifactInput & BatchDisassociateServiceActionFromProvisioningArtifactInput & BatchDisassociateServiceActionFromProvisioningArtifactInput & BatchDisassociateServiceActionFromProvisioningArtifactInput & BatchDisassociateServiceActionFromProvisioningArtifactInput & BatchDisassociateServiceActionFromProvisioningArtifactInput & BatchDisassociateServiceActionFromProvisioningArtifactInput & BatchDisassociateServiceActionFromProvisioningArtifactInput & BatchDisassociateServiceActionFromProvisioningArtifactInput & BatchDisassociateServiceActionFromProvisioningArtifactInput & BatchDisassociateServiceActionFromProvisioningArtifactInput & BatchDisassociateServiceActionFromProvisioningArtifactInput & BatchDisassociateServiceActionFromProvisioningArtifactInput)[K]
    }>): BatchDisassociateServiceActionFromProvisioningArtifactOutput {
        return this.client.batchDisassociateServiceActionFromProvisioningArtifact(
            this.ops["BatchDisassociateServiceActionFromProvisioningArtifact"].apply(partialParams)
        );
    }

    invokeCopyProduct(partialParams: ToOptional<{
      [K in keyof CopyProductInput & keyof CopyProductInput & keyof CopyProductInput & keyof CopyProductInput & keyof CopyProductInput & keyof CopyProductInput & keyof CopyProductInput & keyof CopyProductInput & keyof CopyProductInput & keyof CopyProductInput & keyof CopyProductInput & keyof CopyProductInput & keyof CopyProductInput & keyof CopyProductInput & keyof CopyProductInput & keyof CopyProductInput & keyof CopyProductInput]: (CopyProductInput & CopyProductInput & CopyProductInput & CopyProductInput & CopyProductInput & CopyProductInput & CopyProductInput & CopyProductInput & CopyProductInput & CopyProductInput & CopyProductInput & CopyProductInput & CopyProductInput & CopyProductInput & CopyProductInput & CopyProductInput & CopyProductInput)[K]
    }>): CopyProductOutput {
        return this.client.copyProduct(
            this.ops["CopyProduct"].apply(partialParams)
        );
    }

    invokeCreateConstraint(partialParams: ToOptional<{
      [K in keyof CreateConstraintInput & keyof CreateConstraintInput & keyof CreateConstraintInput & keyof CreateConstraintInput & keyof CreateConstraintInput & keyof CreateConstraintInput & keyof CreateConstraintInput & keyof CreateConstraintInput & keyof CreateConstraintInput & keyof CreateConstraintInput & keyof CreateConstraintInput & keyof CreateConstraintInput & keyof CreateConstraintInput & keyof CreateConstraintInput & keyof CreateConstraintInput & keyof CreateConstraintInput & keyof Omit<CreateConstraintInput, "Type">]: (CreateConstraintInput & CreateConstraintInput & CreateConstraintInput & CreateConstraintInput & CreateConstraintInput & CreateConstraintInput & CreateConstraintInput & CreateConstraintInput & CreateConstraintInput & CreateConstraintInput & CreateConstraintInput & CreateConstraintInput & CreateConstraintInput & CreateConstraintInput & CreateConstraintInput & CreateConstraintInput & Omit<CreateConstraintInput, "Type">)[K]
    }>): CreateConstraintOutput {
        return this.client.createConstraint(
            this.ops["CreateConstraint"].apply(partialParams)
        );
    }

    invokeCreatePortfolio(partialParams: ToOptional<{
      [K in keyof CreatePortfolioInput & keyof CreatePortfolioInput & keyof CreatePortfolioInput & keyof CreatePortfolioInput & keyof CreatePortfolioInput & keyof CreatePortfolioInput & keyof CreatePortfolioInput & keyof CreatePortfolioInput & keyof CreatePortfolioInput & keyof CreatePortfolioInput & keyof CreatePortfolioInput & keyof CreatePortfolioInput & keyof CreatePortfolioInput & keyof CreatePortfolioInput & keyof CreatePortfolioInput & keyof CreatePortfolioInput & keyof CreatePortfolioInput]: (CreatePortfolioInput & CreatePortfolioInput & CreatePortfolioInput & CreatePortfolioInput & CreatePortfolioInput & CreatePortfolioInput & CreatePortfolioInput & CreatePortfolioInput & CreatePortfolioInput & CreatePortfolioInput & CreatePortfolioInput & CreatePortfolioInput & CreatePortfolioInput & CreatePortfolioInput & CreatePortfolioInput & CreatePortfolioInput & CreatePortfolioInput)[K]
    }>): CreatePortfolioOutput {
        return this.client.createPortfolio(
            this.ops["CreatePortfolio"].apply(partialParams)
        );
    }

    invokeCreatePortfolioShare(partialParams: ToOptional<{
      [K in keyof CreatePortfolioShareInput & keyof CreatePortfolioShareInput & keyof CreatePortfolioShareInput & keyof CreatePortfolioShareInput & keyof CreatePortfolioShareInput & keyof CreatePortfolioShareInput & keyof CreatePortfolioShareInput & keyof CreatePortfolioShareInput & keyof CreatePortfolioShareInput & keyof CreatePortfolioShareInput & keyof CreatePortfolioShareInput & keyof CreatePortfolioShareInput & keyof CreatePortfolioShareInput & keyof CreatePortfolioShareInput & keyof CreatePortfolioShareInput & keyof CreatePortfolioShareInput & keyof CreatePortfolioShareInput]: (CreatePortfolioShareInput & CreatePortfolioShareInput & CreatePortfolioShareInput & CreatePortfolioShareInput & CreatePortfolioShareInput & CreatePortfolioShareInput & CreatePortfolioShareInput & CreatePortfolioShareInput & CreatePortfolioShareInput & CreatePortfolioShareInput & CreatePortfolioShareInput & CreatePortfolioShareInput & CreatePortfolioShareInput & CreatePortfolioShareInput & CreatePortfolioShareInput & CreatePortfolioShareInput & CreatePortfolioShareInput)[K]
    }>): CreatePortfolioShareOutput {
        return this.client.createPortfolioShare(
            this.ops["CreatePortfolioShare"].apply(partialParams)
        );
    }

    invokeCreateProduct(partialParams: ToOptional<{
      [K in keyof CreateProductInput & keyof CreateProductInput & keyof CreateProductInput & keyof CreateProductInput & keyof CreateProductInput & keyof CreateProductInput & keyof CreateProductInput & keyof CreateProductInput & keyof CreateProductInput & keyof CreateProductInput & keyof CreateProductInput & keyof CreateProductInput & keyof CreateProductInput & keyof CreateProductInput & keyof CreateProductInput & keyof CreateProductInput & keyof CreateProductInput]: (CreateProductInput & CreateProductInput & CreateProductInput & CreateProductInput & CreateProductInput & CreateProductInput & CreateProductInput & CreateProductInput & CreateProductInput & CreateProductInput & CreateProductInput & CreateProductInput & CreateProductInput & CreateProductInput & CreateProductInput & CreateProductInput & CreateProductInput)[K]
    }>): CreateProductOutput {
        return this.client.createProduct(
            this.ops["CreateProduct"].apply(partialParams)
        );
    }

    invokeCreateProvisionedProductPlan(partialParams: ToOptional<{
      [K in keyof CreateProvisionedProductPlanInput & keyof CreateProvisionedProductPlanInput & keyof CreateProvisionedProductPlanInput & keyof CreateProvisionedProductPlanInput & keyof CreateProvisionedProductPlanInput & keyof CreateProvisionedProductPlanInput & keyof CreateProvisionedProductPlanInput & keyof CreateProvisionedProductPlanInput & keyof CreateProvisionedProductPlanInput & keyof CreateProvisionedProductPlanInput & keyof CreateProvisionedProductPlanInput & keyof CreateProvisionedProductPlanInput & keyof CreateProvisionedProductPlanInput & keyof CreateProvisionedProductPlanInput & keyof CreateProvisionedProductPlanInput & keyof CreateProvisionedProductPlanInput & keyof CreateProvisionedProductPlanInput]: (CreateProvisionedProductPlanInput & CreateProvisionedProductPlanInput & CreateProvisionedProductPlanInput & CreateProvisionedProductPlanInput & CreateProvisionedProductPlanInput & CreateProvisionedProductPlanInput & CreateProvisionedProductPlanInput & CreateProvisionedProductPlanInput & CreateProvisionedProductPlanInput & CreateProvisionedProductPlanInput & CreateProvisionedProductPlanInput & CreateProvisionedProductPlanInput & CreateProvisionedProductPlanInput & CreateProvisionedProductPlanInput & CreateProvisionedProductPlanInput & CreateProvisionedProductPlanInput & CreateProvisionedProductPlanInput)[K]
    }>): CreateProvisionedProductPlanOutput {
        return this.client.createProvisionedProductPlan(
            this.ops["CreateProvisionedProductPlan"].apply(partialParams)
        );
    }

    invokeCreateProvisioningArtifact(partialParams: ToOptional<{
      [K in keyof CreateProvisioningArtifactInput & keyof CreateProvisioningArtifactInput & keyof CreateProvisioningArtifactInput & keyof CreateProvisioningArtifactInput & keyof CreateProvisioningArtifactInput & keyof CreateProvisioningArtifactInput & keyof CreateProvisioningArtifactInput & keyof CreateProvisioningArtifactInput & keyof CreateProvisioningArtifactInput & keyof CreateProvisioningArtifactInput & keyof CreateProvisioningArtifactInput & keyof CreateProvisioningArtifactInput & keyof CreateProvisioningArtifactInput & keyof CreateProvisioningArtifactInput & keyof CreateProvisioningArtifactInput & keyof CreateProvisioningArtifactInput & keyof CreateProvisioningArtifactInput]: (CreateProvisioningArtifactInput & CreateProvisioningArtifactInput & CreateProvisioningArtifactInput & CreateProvisioningArtifactInput & CreateProvisioningArtifactInput & CreateProvisioningArtifactInput & CreateProvisioningArtifactInput & CreateProvisioningArtifactInput & CreateProvisioningArtifactInput & CreateProvisioningArtifactInput & CreateProvisioningArtifactInput & CreateProvisioningArtifactInput & CreateProvisioningArtifactInput & CreateProvisioningArtifactInput & CreateProvisioningArtifactInput & CreateProvisioningArtifactInput & CreateProvisioningArtifactInput)[K]
    }>): CreateProvisioningArtifactOutput {
        return this.client.createProvisioningArtifact(
            this.ops["CreateProvisioningArtifact"].apply(partialParams)
        );
    }

    invokeCreateServiceAction(partialParams: ToOptional<{
      [K in keyof CreateServiceActionInput & keyof CreateServiceActionInput & keyof CreateServiceActionInput & keyof CreateServiceActionInput & keyof CreateServiceActionInput & keyof CreateServiceActionInput & keyof CreateServiceActionInput & keyof CreateServiceActionInput & keyof CreateServiceActionInput & keyof CreateServiceActionInput & keyof CreateServiceActionInput & keyof CreateServiceActionInput & keyof CreateServiceActionInput & keyof CreateServiceActionInput & keyof CreateServiceActionInput & keyof CreateServiceActionInput & keyof CreateServiceActionInput]: (CreateServiceActionInput & CreateServiceActionInput & CreateServiceActionInput & CreateServiceActionInput & CreateServiceActionInput & CreateServiceActionInput & CreateServiceActionInput & CreateServiceActionInput & CreateServiceActionInput & CreateServiceActionInput & CreateServiceActionInput & CreateServiceActionInput & CreateServiceActionInput & CreateServiceActionInput & CreateServiceActionInput & CreateServiceActionInput & CreateServiceActionInput)[K]
    }>): CreateServiceActionOutput {
        return this.client.createServiceAction(
            this.ops["CreateServiceAction"].apply(partialParams)
        );
    }

    invokeCreateTagOption(partialParams: ToOptional<{
      [K in keyof CreateTagOptionInput & keyof CreateTagOptionInput & keyof CreateTagOptionInput & keyof CreateTagOptionInput & keyof CreateTagOptionInput & keyof CreateTagOptionInput & keyof CreateTagOptionInput & keyof CreateTagOptionInput & keyof CreateTagOptionInput & keyof CreateTagOptionInput & keyof CreateTagOptionInput & keyof CreateTagOptionInput & keyof CreateTagOptionInput & keyof CreateTagOptionInput & keyof CreateTagOptionInput & keyof CreateTagOptionInput & keyof CreateTagOptionInput]: (CreateTagOptionInput & CreateTagOptionInput & CreateTagOptionInput & CreateTagOptionInput & CreateTagOptionInput & CreateTagOptionInput & CreateTagOptionInput & CreateTagOptionInput & CreateTagOptionInput & CreateTagOptionInput & CreateTagOptionInput & CreateTagOptionInput & CreateTagOptionInput & CreateTagOptionInput & CreateTagOptionInput & CreateTagOptionInput & CreateTagOptionInput)[K]
    }>): CreateTagOptionOutput {
        return this.client.createTagOption(
            this.ops["CreateTagOption"].apply(partialParams)
        );
    }

    invokeDeleteConstraint(partialParams: ToOptional<{
      [K in keyof DeleteConstraintInput & keyof DeleteConstraintInput & keyof DeleteConstraintInput & keyof DeleteConstraintInput & keyof DeleteConstraintInput & keyof DeleteConstraintInput & keyof DeleteConstraintInput & keyof DeleteConstraintInput & keyof DeleteConstraintInput & keyof DeleteConstraintInput & keyof DeleteConstraintInput & keyof DeleteConstraintInput & keyof DeleteConstraintInput & keyof DeleteConstraintInput & keyof DeleteConstraintInput & keyof DeleteConstraintInput & keyof DeleteConstraintInput]: (DeleteConstraintInput & DeleteConstraintInput & DeleteConstraintInput & DeleteConstraintInput & DeleteConstraintInput & DeleteConstraintInput & DeleteConstraintInput & DeleteConstraintInput & DeleteConstraintInput & DeleteConstraintInput & DeleteConstraintInput & DeleteConstraintInput & DeleteConstraintInput & DeleteConstraintInput & DeleteConstraintInput & DeleteConstraintInput & DeleteConstraintInput)[K]
    }>): DeleteConstraintOutput {
        return this.client.deleteConstraint(
            this.ops["DeleteConstraint"].apply(partialParams)
        );
    }

    invokeDeletePortfolio(partialParams: ToOptional<{
      [K in keyof DeletePortfolioInput & keyof DeletePortfolioInput & keyof DeletePortfolioInput & keyof DeletePortfolioInput & keyof DeletePortfolioInput & keyof DeletePortfolioInput & keyof DeletePortfolioInput & keyof DeletePortfolioInput & keyof DeletePortfolioInput & keyof DeletePortfolioInput & keyof DeletePortfolioInput & keyof DeletePortfolioInput & keyof DeletePortfolioInput & keyof DeletePortfolioInput & keyof DeletePortfolioInput & keyof DeletePortfolioInput & keyof DeletePortfolioInput]: (DeletePortfolioInput & DeletePortfolioInput & DeletePortfolioInput & DeletePortfolioInput & DeletePortfolioInput & DeletePortfolioInput & DeletePortfolioInput & DeletePortfolioInput & DeletePortfolioInput & DeletePortfolioInput & DeletePortfolioInput & DeletePortfolioInput & DeletePortfolioInput & DeletePortfolioInput & DeletePortfolioInput & DeletePortfolioInput & DeletePortfolioInput)[K]
    }>): DeletePortfolioOutput {
        return this.client.deletePortfolio(
            this.ops["DeletePortfolio"].apply(partialParams)
        );
    }

    invokeDeletePortfolioShare(partialParams: ToOptional<{
      [K in keyof DeletePortfolioShareInput & keyof DeletePortfolioShareInput & keyof DeletePortfolioShareInput & keyof DeletePortfolioShareInput & keyof DeletePortfolioShareInput & keyof DeletePortfolioShareInput & keyof DeletePortfolioShareInput & keyof DeletePortfolioShareInput & keyof DeletePortfolioShareInput & keyof DeletePortfolioShareInput & keyof DeletePortfolioShareInput & keyof DeletePortfolioShareInput & keyof DeletePortfolioShareInput & keyof DeletePortfolioShareInput & keyof DeletePortfolioShareInput & keyof DeletePortfolioShareInput & keyof DeletePortfolioShareInput]: (DeletePortfolioShareInput & DeletePortfolioShareInput & DeletePortfolioShareInput & DeletePortfolioShareInput & DeletePortfolioShareInput & DeletePortfolioShareInput & DeletePortfolioShareInput & DeletePortfolioShareInput & DeletePortfolioShareInput & DeletePortfolioShareInput & DeletePortfolioShareInput & DeletePortfolioShareInput & DeletePortfolioShareInput & DeletePortfolioShareInput & DeletePortfolioShareInput & DeletePortfolioShareInput & DeletePortfolioShareInput)[K]
    }>): DeletePortfolioShareOutput {
        return this.client.deletePortfolioShare(
            this.ops["DeletePortfolioShare"].apply(partialParams)
        );
    }

    invokeDeleteProduct(partialParams: ToOptional<{
      [K in keyof DeleteProductInput & keyof DeleteProductInput & keyof DeleteProductInput & keyof DeleteProductInput & keyof DeleteProductInput & keyof DeleteProductInput & keyof DeleteProductInput & keyof DeleteProductInput & keyof DeleteProductInput & keyof DeleteProductInput & keyof DeleteProductInput & keyof DeleteProductInput & keyof DeleteProductInput & keyof DeleteProductInput & keyof DeleteProductInput & keyof DeleteProductInput & keyof DeleteProductInput]: (DeleteProductInput & DeleteProductInput & DeleteProductInput & DeleteProductInput & DeleteProductInput & DeleteProductInput & DeleteProductInput & DeleteProductInput & DeleteProductInput & DeleteProductInput & DeleteProductInput & DeleteProductInput & DeleteProductInput & DeleteProductInput & DeleteProductInput & DeleteProductInput & DeleteProductInput)[K]
    }>): DeleteProductOutput {
        return this.client.deleteProduct(
            this.ops["DeleteProduct"].apply(partialParams)
        );
    }

    invokeDeleteProvisionedProductPlan(partialParams: ToOptional<{
      [K in keyof DeleteProvisionedProductPlanInput & keyof DeleteProvisionedProductPlanInput & keyof DeleteProvisionedProductPlanInput & keyof DeleteProvisionedProductPlanInput & keyof DeleteProvisionedProductPlanInput & keyof DeleteProvisionedProductPlanInput & keyof DeleteProvisionedProductPlanInput & keyof DeleteProvisionedProductPlanInput & keyof DeleteProvisionedProductPlanInput & keyof DeleteProvisionedProductPlanInput & keyof DeleteProvisionedProductPlanInput & keyof DeleteProvisionedProductPlanInput & keyof DeleteProvisionedProductPlanInput & keyof DeleteProvisionedProductPlanInput & keyof DeleteProvisionedProductPlanInput & keyof DeleteProvisionedProductPlanInput & keyof DeleteProvisionedProductPlanInput]: (DeleteProvisionedProductPlanInput & DeleteProvisionedProductPlanInput & DeleteProvisionedProductPlanInput & DeleteProvisionedProductPlanInput & DeleteProvisionedProductPlanInput & DeleteProvisionedProductPlanInput & DeleteProvisionedProductPlanInput & DeleteProvisionedProductPlanInput & DeleteProvisionedProductPlanInput & DeleteProvisionedProductPlanInput & DeleteProvisionedProductPlanInput & DeleteProvisionedProductPlanInput & DeleteProvisionedProductPlanInput & DeleteProvisionedProductPlanInput & DeleteProvisionedProductPlanInput & DeleteProvisionedProductPlanInput & DeleteProvisionedProductPlanInput)[K]
    }>): DeleteProvisionedProductPlanOutput {
        return this.client.deleteProvisionedProductPlan(
            this.ops["DeleteProvisionedProductPlan"].apply(partialParams)
        );
    }

    invokeDeleteProvisioningArtifact(partialParams: ToOptional<{
      [K in keyof DeleteProvisioningArtifactInput & keyof DeleteProvisioningArtifactInput & keyof DeleteProvisioningArtifactInput & keyof DeleteProvisioningArtifactInput & keyof DeleteProvisioningArtifactInput & keyof DeleteProvisioningArtifactInput & keyof DeleteProvisioningArtifactInput & keyof DeleteProvisioningArtifactInput & keyof DeleteProvisioningArtifactInput & keyof DeleteProvisioningArtifactInput & keyof DeleteProvisioningArtifactInput & keyof DeleteProvisioningArtifactInput & keyof DeleteProvisioningArtifactInput & keyof DeleteProvisioningArtifactInput & keyof DeleteProvisioningArtifactInput & keyof DeleteProvisioningArtifactInput & keyof DeleteProvisioningArtifactInput]: (DeleteProvisioningArtifactInput & DeleteProvisioningArtifactInput & DeleteProvisioningArtifactInput & DeleteProvisioningArtifactInput & DeleteProvisioningArtifactInput & DeleteProvisioningArtifactInput & DeleteProvisioningArtifactInput & DeleteProvisioningArtifactInput & DeleteProvisioningArtifactInput & DeleteProvisioningArtifactInput & DeleteProvisioningArtifactInput & DeleteProvisioningArtifactInput & DeleteProvisioningArtifactInput & DeleteProvisioningArtifactInput & DeleteProvisioningArtifactInput & DeleteProvisioningArtifactInput & DeleteProvisioningArtifactInput)[K]
    }>): DeleteProvisioningArtifactOutput {
        return this.client.deleteProvisioningArtifact(
            this.ops["DeleteProvisioningArtifact"].apply(partialParams)
        );
    }

    invokeDeleteServiceAction(partialParams: ToOptional<{
      [K in keyof DeleteServiceActionInput & keyof DeleteServiceActionInput & keyof DeleteServiceActionInput & keyof DeleteServiceActionInput & keyof DeleteServiceActionInput & keyof DeleteServiceActionInput & keyof DeleteServiceActionInput & keyof DeleteServiceActionInput & keyof DeleteServiceActionInput & keyof DeleteServiceActionInput & keyof DeleteServiceActionInput & keyof DeleteServiceActionInput & keyof DeleteServiceActionInput & keyof DeleteServiceActionInput & keyof DeleteServiceActionInput & keyof DeleteServiceActionInput & keyof DeleteServiceActionInput]: (DeleteServiceActionInput & DeleteServiceActionInput & DeleteServiceActionInput & DeleteServiceActionInput & DeleteServiceActionInput & DeleteServiceActionInput & DeleteServiceActionInput & DeleteServiceActionInput & DeleteServiceActionInput & DeleteServiceActionInput & DeleteServiceActionInput & DeleteServiceActionInput & DeleteServiceActionInput & DeleteServiceActionInput & DeleteServiceActionInput & DeleteServiceActionInput & DeleteServiceActionInput)[K]
    }>): DeleteServiceActionOutput {
        return this.client.deleteServiceAction(
            this.ops["DeleteServiceAction"].apply(partialParams)
        );
    }

    invokeDeleteTagOption(partialParams: ToOptional<{
      [K in keyof DeleteTagOptionInput & keyof DeleteTagOptionInput & keyof DeleteTagOptionInput & keyof DeleteTagOptionInput & keyof DeleteTagOptionInput & keyof DeleteTagOptionInput & keyof DeleteTagOptionInput & keyof DeleteTagOptionInput & keyof DeleteTagOptionInput & keyof DeleteTagOptionInput & keyof DeleteTagOptionInput & keyof DeleteTagOptionInput & keyof DeleteTagOptionInput & keyof DeleteTagOptionInput & keyof DeleteTagOptionInput & keyof DeleteTagOptionInput & keyof DeleteTagOptionInput]: (DeleteTagOptionInput & DeleteTagOptionInput & DeleteTagOptionInput & DeleteTagOptionInput & DeleteTagOptionInput & DeleteTagOptionInput & DeleteTagOptionInput & DeleteTagOptionInput & DeleteTagOptionInput & DeleteTagOptionInput & DeleteTagOptionInput & DeleteTagOptionInput & DeleteTagOptionInput & DeleteTagOptionInput & DeleteTagOptionInput & DeleteTagOptionInput & DeleteTagOptionInput)[K]
    }>): DeleteTagOptionOutput {
        return this.client.deleteTagOption(
            this.ops["DeleteTagOption"].apply(partialParams)
        );
    }

    invokeDescribeConstraint(partialParams: ToOptional<{
      [K in keyof DescribeConstraintInput & keyof DescribeConstraintInput & keyof DescribeConstraintInput & keyof DescribeConstraintInput & keyof DescribeConstraintInput & keyof DescribeConstraintInput & keyof DescribeConstraintInput & keyof DescribeConstraintInput & keyof DescribeConstraintInput & keyof DescribeConstraintInput & keyof DescribeConstraintInput & keyof DescribeConstraintInput & keyof DescribeConstraintInput & keyof DescribeConstraintInput & keyof DescribeConstraintInput & keyof DescribeConstraintInput & keyof DescribeConstraintInput]: (DescribeConstraintInput & DescribeConstraintInput & DescribeConstraintInput & DescribeConstraintInput & DescribeConstraintInput & DescribeConstraintInput & DescribeConstraintInput & DescribeConstraintInput & DescribeConstraintInput & DescribeConstraintInput & DescribeConstraintInput & DescribeConstraintInput & DescribeConstraintInput & DescribeConstraintInput & DescribeConstraintInput & DescribeConstraintInput & DescribeConstraintInput)[K]
    }>): DescribeConstraintOutput {
        return this.client.describeConstraint(
            this.ops["DescribeConstraint"].apply(partialParams)
        );
    }

    invokeDescribeCopyProductStatus(partialParams: ToOptional<{
      [K in keyof DescribeCopyProductStatusInput & keyof DescribeCopyProductStatusInput & keyof DescribeCopyProductStatusInput & keyof DescribeCopyProductStatusInput & keyof DescribeCopyProductStatusInput & keyof DescribeCopyProductStatusInput & keyof DescribeCopyProductStatusInput & keyof DescribeCopyProductStatusInput & keyof DescribeCopyProductStatusInput & keyof DescribeCopyProductStatusInput & keyof DescribeCopyProductStatusInput & keyof DescribeCopyProductStatusInput & keyof DescribeCopyProductStatusInput & keyof DescribeCopyProductStatusInput & keyof DescribeCopyProductStatusInput & keyof DescribeCopyProductStatusInput & keyof DescribeCopyProductStatusInput]: (DescribeCopyProductStatusInput & DescribeCopyProductStatusInput & DescribeCopyProductStatusInput & DescribeCopyProductStatusInput & DescribeCopyProductStatusInput & DescribeCopyProductStatusInput & DescribeCopyProductStatusInput & DescribeCopyProductStatusInput & DescribeCopyProductStatusInput & DescribeCopyProductStatusInput & DescribeCopyProductStatusInput & DescribeCopyProductStatusInput & DescribeCopyProductStatusInput & DescribeCopyProductStatusInput & DescribeCopyProductStatusInput & DescribeCopyProductStatusInput & DescribeCopyProductStatusInput)[K]
    }>): DescribeCopyProductStatusOutput {
        return this.client.describeCopyProductStatus(
            this.ops["DescribeCopyProductStatus"].apply(partialParams)
        );
    }

    invokeDescribePortfolio(partialParams: ToOptional<{
      [K in keyof DescribePortfolioInput & keyof DescribePortfolioInput & keyof DescribePortfolioInput & keyof DescribePortfolioInput & keyof DescribePortfolioInput & keyof DescribePortfolioInput & keyof DescribePortfolioInput & keyof DescribePortfolioInput & keyof DescribePortfolioInput & keyof DescribePortfolioInput & keyof DescribePortfolioInput & keyof DescribePortfolioInput & keyof DescribePortfolioInput & keyof DescribePortfolioInput & keyof DescribePortfolioInput & keyof DescribePortfolioInput & keyof DescribePortfolioInput]: (DescribePortfolioInput & DescribePortfolioInput & DescribePortfolioInput & DescribePortfolioInput & DescribePortfolioInput & DescribePortfolioInput & DescribePortfolioInput & DescribePortfolioInput & DescribePortfolioInput & DescribePortfolioInput & DescribePortfolioInput & DescribePortfolioInput & DescribePortfolioInput & DescribePortfolioInput & DescribePortfolioInput & DescribePortfolioInput & DescribePortfolioInput)[K]
    }>): DescribePortfolioOutput {
        return this.client.describePortfolio(
            this.ops["DescribePortfolio"].apply(partialParams)
        );
    }

    invokeDescribePortfolioShareStatus(partialParams: ToOptional<{
      [K in keyof DescribePortfolioShareStatusInput & keyof DescribePortfolioShareStatusInput & keyof DescribePortfolioShareStatusInput & keyof DescribePortfolioShareStatusInput & keyof DescribePortfolioShareStatusInput & keyof DescribePortfolioShareStatusInput & keyof DescribePortfolioShareStatusInput & keyof DescribePortfolioShareStatusInput & keyof DescribePortfolioShareStatusInput & keyof DescribePortfolioShareStatusInput & keyof DescribePortfolioShareStatusInput & keyof DescribePortfolioShareStatusInput & keyof DescribePortfolioShareStatusInput & keyof DescribePortfolioShareStatusInput & keyof DescribePortfolioShareStatusInput & keyof DescribePortfolioShareStatusInput & keyof DescribePortfolioShareStatusInput]: (DescribePortfolioShareStatusInput & DescribePortfolioShareStatusInput & DescribePortfolioShareStatusInput & DescribePortfolioShareStatusInput & DescribePortfolioShareStatusInput & DescribePortfolioShareStatusInput & DescribePortfolioShareStatusInput & DescribePortfolioShareStatusInput & DescribePortfolioShareStatusInput & DescribePortfolioShareStatusInput & DescribePortfolioShareStatusInput & DescribePortfolioShareStatusInput & DescribePortfolioShareStatusInput & DescribePortfolioShareStatusInput & DescribePortfolioShareStatusInput & DescribePortfolioShareStatusInput & DescribePortfolioShareStatusInput)[K]
    }>): DescribePortfolioShareStatusOutput {
        return this.client.describePortfolioShareStatus(
            this.ops["DescribePortfolioShareStatus"].apply(partialParams)
        );
    }

    invokeDescribePortfolioShares(partialParams: ToOptional<{
      [K in keyof DescribePortfolioSharesInput & keyof DescribePortfolioSharesInput & keyof DescribePortfolioSharesInput & keyof DescribePortfolioSharesInput & keyof DescribePortfolioSharesInput & keyof DescribePortfolioSharesInput & keyof DescribePortfolioSharesInput & keyof DescribePortfolioSharesInput & keyof DescribePortfolioSharesInput & keyof DescribePortfolioSharesInput & keyof DescribePortfolioSharesInput & keyof DescribePortfolioSharesInput & keyof DescribePortfolioSharesInput & keyof DescribePortfolioSharesInput & keyof DescribePortfolioSharesInput & keyof DescribePortfolioSharesInput & keyof Omit<DescribePortfolioSharesInput, "Type">]: (DescribePortfolioSharesInput & DescribePortfolioSharesInput & DescribePortfolioSharesInput & DescribePortfolioSharesInput & DescribePortfolioSharesInput & DescribePortfolioSharesInput & DescribePortfolioSharesInput & DescribePortfolioSharesInput & DescribePortfolioSharesInput & DescribePortfolioSharesInput & DescribePortfolioSharesInput & DescribePortfolioSharesInput & DescribePortfolioSharesInput & DescribePortfolioSharesInput & DescribePortfolioSharesInput & DescribePortfolioSharesInput & Omit<DescribePortfolioSharesInput, "Type">)[K]
    }>): DescribePortfolioSharesOutput {
        return this.client.describePortfolioShares(
            this.ops["DescribePortfolioShares"].apply(partialParams)
        );
    }

    invokeDescribeProductView(partialParams: ToOptional<{
      [K in keyof DescribeProductViewInput & keyof DescribeProductViewInput & keyof DescribeProductViewInput & keyof DescribeProductViewInput & keyof DescribeProductViewInput & keyof DescribeProductViewInput & keyof DescribeProductViewInput & keyof DescribeProductViewInput & keyof DescribeProductViewInput & keyof DescribeProductViewInput & keyof DescribeProductViewInput & keyof DescribeProductViewInput & keyof DescribeProductViewInput & keyof DescribeProductViewInput & keyof DescribeProductViewInput & keyof DescribeProductViewInput & keyof DescribeProductViewInput]: (DescribeProductViewInput & DescribeProductViewInput & DescribeProductViewInput & DescribeProductViewInput & DescribeProductViewInput & DescribeProductViewInput & DescribeProductViewInput & DescribeProductViewInput & DescribeProductViewInput & DescribeProductViewInput & DescribeProductViewInput & DescribeProductViewInput & DescribeProductViewInput & DescribeProductViewInput & DescribeProductViewInput & DescribeProductViewInput & DescribeProductViewInput)[K]
    }>): DescribeProductViewOutput {
        return this.client.describeProductView(
            this.ops["DescribeProductView"].apply(partialParams)
        );
    }

    invokeDescribeProvisionedProductPlan(partialParams: ToOptional<{
      [K in keyof DescribeProvisionedProductPlanInput & keyof DescribeProvisionedProductPlanInput & keyof DescribeProvisionedProductPlanInput & keyof DescribeProvisionedProductPlanInput & keyof DescribeProvisionedProductPlanInput & keyof DescribeProvisionedProductPlanInput & keyof DescribeProvisionedProductPlanInput & keyof DescribeProvisionedProductPlanInput & keyof DescribeProvisionedProductPlanInput & keyof DescribeProvisionedProductPlanInput & keyof DescribeProvisionedProductPlanInput & keyof DescribeProvisionedProductPlanInput & keyof DescribeProvisionedProductPlanInput & keyof DescribeProvisionedProductPlanInput & keyof DescribeProvisionedProductPlanInput & keyof DescribeProvisionedProductPlanInput & keyof DescribeProvisionedProductPlanInput]: (DescribeProvisionedProductPlanInput & DescribeProvisionedProductPlanInput & DescribeProvisionedProductPlanInput & DescribeProvisionedProductPlanInput & DescribeProvisionedProductPlanInput & DescribeProvisionedProductPlanInput & DescribeProvisionedProductPlanInput & DescribeProvisionedProductPlanInput & DescribeProvisionedProductPlanInput & DescribeProvisionedProductPlanInput & DescribeProvisionedProductPlanInput & DescribeProvisionedProductPlanInput & DescribeProvisionedProductPlanInput & DescribeProvisionedProductPlanInput & DescribeProvisionedProductPlanInput & DescribeProvisionedProductPlanInput & DescribeProvisionedProductPlanInput)[K]
    }>): DescribeProvisionedProductPlanOutput {
        return this.client.describeProvisionedProductPlan(
            this.ops["DescribeProvisionedProductPlan"].apply(partialParams)
        );
    }

    invokeDescribeRecord(partialParams: ToOptional<{
      [K in keyof DescribeRecordInput & keyof DescribeRecordInput & keyof DescribeRecordInput & keyof DescribeRecordInput & keyof DescribeRecordInput & keyof DescribeRecordInput & keyof DescribeRecordInput & keyof DescribeRecordInput & keyof DescribeRecordInput & keyof DescribeRecordInput & keyof DescribeRecordInput & keyof DescribeRecordInput & keyof DescribeRecordInput & keyof DescribeRecordInput & keyof DescribeRecordInput & keyof DescribeRecordInput & keyof DescribeRecordInput]: (DescribeRecordInput & DescribeRecordInput & DescribeRecordInput & DescribeRecordInput & DescribeRecordInput & DescribeRecordInput & DescribeRecordInput & DescribeRecordInput & DescribeRecordInput & DescribeRecordInput & DescribeRecordInput & DescribeRecordInput & DescribeRecordInput & DescribeRecordInput & DescribeRecordInput & DescribeRecordInput & DescribeRecordInput)[K]
    }>): DescribeRecordOutput {
        return this.client.describeRecord(
            this.ops["DescribeRecord"].apply(partialParams)
        );
    }

    invokeDescribeServiceAction(partialParams: ToOptional<{
      [K in keyof DescribeServiceActionInput & keyof DescribeServiceActionInput & keyof DescribeServiceActionInput & keyof DescribeServiceActionInput & keyof DescribeServiceActionInput & keyof DescribeServiceActionInput & keyof DescribeServiceActionInput & keyof DescribeServiceActionInput & keyof DescribeServiceActionInput & keyof DescribeServiceActionInput & keyof DescribeServiceActionInput & keyof DescribeServiceActionInput & keyof DescribeServiceActionInput & keyof DescribeServiceActionInput & keyof DescribeServiceActionInput & keyof DescribeServiceActionInput & keyof DescribeServiceActionInput]: (DescribeServiceActionInput & DescribeServiceActionInput & DescribeServiceActionInput & DescribeServiceActionInput & DescribeServiceActionInput & DescribeServiceActionInput & DescribeServiceActionInput & DescribeServiceActionInput & DescribeServiceActionInput & DescribeServiceActionInput & DescribeServiceActionInput & DescribeServiceActionInput & DescribeServiceActionInput & DescribeServiceActionInput & DescribeServiceActionInput & DescribeServiceActionInput & DescribeServiceActionInput)[K]
    }>): DescribeServiceActionOutput {
        return this.client.describeServiceAction(
            this.ops["DescribeServiceAction"].apply(partialParams)
        );
    }

    invokeDescribeServiceActionExecutionParameters(partialParams: ToOptional<{
      [K in keyof DescribeServiceActionExecutionParametersInput & keyof DescribeServiceActionExecutionParametersInput & keyof DescribeServiceActionExecutionParametersInput & keyof DescribeServiceActionExecutionParametersInput & keyof DescribeServiceActionExecutionParametersInput & keyof DescribeServiceActionExecutionParametersInput & keyof DescribeServiceActionExecutionParametersInput & keyof DescribeServiceActionExecutionParametersInput & keyof DescribeServiceActionExecutionParametersInput & keyof DescribeServiceActionExecutionParametersInput & keyof DescribeServiceActionExecutionParametersInput & keyof DescribeServiceActionExecutionParametersInput & keyof DescribeServiceActionExecutionParametersInput & keyof DescribeServiceActionExecutionParametersInput & keyof DescribeServiceActionExecutionParametersInput & keyof DescribeServiceActionExecutionParametersInput & keyof DescribeServiceActionExecutionParametersInput]: (DescribeServiceActionExecutionParametersInput & DescribeServiceActionExecutionParametersInput & DescribeServiceActionExecutionParametersInput & DescribeServiceActionExecutionParametersInput & DescribeServiceActionExecutionParametersInput & DescribeServiceActionExecutionParametersInput & DescribeServiceActionExecutionParametersInput & DescribeServiceActionExecutionParametersInput & DescribeServiceActionExecutionParametersInput & DescribeServiceActionExecutionParametersInput & DescribeServiceActionExecutionParametersInput & DescribeServiceActionExecutionParametersInput & DescribeServiceActionExecutionParametersInput & DescribeServiceActionExecutionParametersInput & DescribeServiceActionExecutionParametersInput & DescribeServiceActionExecutionParametersInput & DescribeServiceActionExecutionParametersInput)[K]
    }>): DescribeServiceActionExecutionParametersOutput {
        return this.client.describeServiceActionExecutionParameters(
            this.ops["DescribeServiceActionExecutionParameters"].apply(partialParams)
        );
    }

    invokeDescribeTagOption(partialParams: ToOptional<{
      [K in keyof DescribeTagOptionInput & keyof DescribeTagOptionInput & keyof DescribeTagOptionInput & keyof DescribeTagOptionInput & keyof DescribeTagOptionInput & keyof DescribeTagOptionInput & keyof DescribeTagOptionInput & keyof DescribeTagOptionInput & keyof DescribeTagOptionInput & keyof DescribeTagOptionInput & keyof DescribeTagOptionInput & keyof DescribeTagOptionInput & keyof DescribeTagOptionInput & keyof DescribeTagOptionInput & keyof DescribeTagOptionInput & keyof DescribeTagOptionInput & keyof DescribeTagOptionInput]: (DescribeTagOptionInput & DescribeTagOptionInput & DescribeTagOptionInput & DescribeTagOptionInput & DescribeTagOptionInput & DescribeTagOptionInput & DescribeTagOptionInput & DescribeTagOptionInput & DescribeTagOptionInput & DescribeTagOptionInput & DescribeTagOptionInput & DescribeTagOptionInput & DescribeTagOptionInput & DescribeTagOptionInput & DescribeTagOptionInput & DescribeTagOptionInput & DescribeTagOptionInput)[K]
    }>): DescribeTagOptionOutput {
        return this.client.describeTagOption(
            this.ops["DescribeTagOption"].apply(partialParams)
        );
    }

    invokeDisassociateBudgetFromResource(partialParams: ToOptional<{
      [K in keyof DisassociateBudgetFromResourceInput & keyof DisassociateBudgetFromResourceInput & keyof DisassociateBudgetFromResourceInput & keyof DisassociateBudgetFromResourceInput & keyof DisassociateBudgetFromResourceInput & keyof DisassociateBudgetFromResourceInput & keyof DisassociateBudgetFromResourceInput & keyof DisassociateBudgetFromResourceInput & keyof DisassociateBudgetFromResourceInput & keyof DisassociateBudgetFromResourceInput & keyof DisassociateBudgetFromResourceInput & keyof DisassociateBudgetFromResourceInput & keyof DisassociateBudgetFromResourceInput & keyof DisassociateBudgetFromResourceInput & keyof DisassociateBudgetFromResourceInput & keyof DisassociateBudgetFromResourceInput & keyof DisassociateBudgetFromResourceInput]: (DisassociateBudgetFromResourceInput & DisassociateBudgetFromResourceInput & DisassociateBudgetFromResourceInput & DisassociateBudgetFromResourceInput & DisassociateBudgetFromResourceInput & DisassociateBudgetFromResourceInput & DisassociateBudgetFromResourceInput & DisassociateBudgetFromResourceInput & DisassociateBudgetFromResourceInput & DisassociateBudgetFromResourceInput & DisassociateBudgetFromResourceInput & DisassociateBudgetFromResourceInput & DisassociateBudgetFromResourceInput & DisassociateBudgetFromResourceInput & DisassociateBudgetFromResourceInput & DisassociateBudgetFromResourceInput & DisassociateBudgetFromResourceInput)[K]
    }>): DisassociateBudgetFromResourceOutput {
        return this.client.disassociateBudgetFromResource(
            this.ops["DisassociateBudgetFromResource"].apply(partialParams)
        );
    }

    invokeDisassociatePrincipalFromPortfolio(partialParams: ToOptional<{
      [K in keyof DisassociatePrincipalFromPortfolioInput & keyof DisassociatePrincipalFromPortfolioInput & keyof DisassociatePrincipalFromPortfolioInput & keyof DisassociatePrincipalFromPortfolioInput & keyof DisassociatePrincipalFromPortfolioInput & keyof DisassociatePrincipalFromPortfolioInput & keyof DisassociatePrincipalFromPortfolioInput & keyof DisassociatePrincipalFromPortfolioInput & keyof DisassociatePrincipalFromPortfolioInput & keyof DisassociatePrincipalFromPortfolioInput & keyof DisassociatePrincipalFromPortfolioInput & keyof DisassociatePrincipalFromPortfolioInput & keyof DisassociatePrincipalFromPortfolioInput & keyof DisassociatePrincipalFromPortfolioInput & keyof DisassociatePrincipalFromPortfolioInput & keyof DisassociatePrincipalFromPortfolioInput & keyof DisassociatePrincipalFromPortfolioInput]: (DisassociatePrincipalFromPortfolioInput & DisassociatePrincipalFromPortfolioInput & DisassociatePrincipalFromPortfolioInput & DisassociatePrincipalFromPortfolioInput & DisassociatePrincipalFromPortfolioInput & DisassociatePrincipalFromPortfolioInput & DisassociatePrincipalFromPortfolioInput & DisassociatePrincipalFromPortfolioInput & DisassociatePrincipalFromPortfolioInput & DisassociatePrincipalFromPortfolioInput & DisassociatePrincipalFromPortfolioInput & DisassociatePrincipalFromPortfolioInput & DisassociatePrincipalFromPortfolioInput & DisassociatePrincipalFromPortfolioInput & DisassociatePrincipalFromPortfolioInput & DisassociatePrincipalFromPortfolioInput & DisassociatePrincipalFromPortfolioInput)[K]
    }>): DisassociatePrincipalFromPortfolioOutput {
        return this.client.disassociatePrincipalFromPortfolio(
            this.ops["DisassociatePrincipalFromPortfolio"].apply(partialParams)
        );
    }

    invokeDisassociateProductFromPortfolio(partialParams: ToOptional<{
      [K in keyof DisassociateProductFromPortfolioInput & keyof DisassociateProductFromPortfolioInput & keyof DisassociateProductFromPortfolioInput & keyof DisassociateProductFromPortfolioInput & keyof DisassociateProductFromPortfolioInput & keyof DisassociateProductFromPortfolioInput & keyof DisassociateProductFromPortfolioInput & keyof DisassociateProductFromPortfolioInput & keyof DisassociateProductFromPortfolioInput & keyof DisassociateProductFromPortfolioInput & keyof DisassociateProductFromPortfolioInput & keyof DisassociateProductFromPortfolioInput & keyof DisassociateProductFromPortfolioInput & keyof DisassociateProductFromPortfolioInput & keyof DisassociateProductFromPortfolioInput & keyof DisassociateProductFromPortfolioInput & keyof DisassociateProductFromPortfolioInput]: (DisassociateProductFromPortfolioInput & DisassociateProductFromPortfolioInput & DisassociateProductFromPortfolioInput & DisassociateProductFromPortfolioInput & DisassociateProductFromPortfolioInput & DisassociateProductFromPortfolioInput & DisassociateProductFromPortfolioInput & DisassociateProductFromPortfolioInput & DisassociateProductFromPortfolioInput & DisassociateProductFromPortfolioInput & DisassociateProductFromPortfolioInput & DisassociateProductFromPortfolioInput & DisassociateProductFromPortfolioInput & DisassociateProductFromPortfolioInput & DisassociateProductFromPortfolioInput & DisassociateProductFromPortfolioInput & DisassociateProductFromPortfolioInput)[K]
    }>): DisassociateProductFromPortfolioOutput {
        return this.client.disassociateProductFromPortfolio(
            this.ops["DisassociateProductFromPortfolio"].apply(partialParams)
        );
    }

    invokeDisassociateServiceActionFromProvisioningArtifact(partialParams: ToOptional<{
      [K in keyof DisassociateServiceActionFromProvisioningArtifactInput & keyof DisassociateServiceActionFromProvisioningArtifactInput & keyof DisassociateServiceActionFromProvisioningArtifactInput & keyof DisassociateServiceActionFromProvisioningArtifactInput & keyof DisassociateServiceActionFromProvisioningArtifactInput & keyof DisassociateServiceActionFromProvisioningArtifactInput & keyof DisassociateServiceActionFromProvisioningArtifactInput & keyof DisassociateServiceActionFromProvisioningArtifactInput & keyof DisassociateServiceActionFromProvisioningArtifactInput & keyof DisassociateServiceActionFromProvisioningArtifactInput & keyof DisassociateServiceActionFromProvisioningArtifactInput & keyof DisassociateServiceActionFromProvisioningArtifactInput & keyof DisassociateServiceActionFromProvisioningArtifactInput & keyof DisassociateServiceActionFromProvisioningArtifactInput & keyof DisassociateServiceActionFromProvisioningArtifactInput & keyof DisassociateServiceActionFromProvisioningArtifactInput & keyof DisassociateServiceActionFromProvisioningArtifactInput]: (DisassociateServiceActionFromProvisioningArtifactInput & DisassociateServiceActionFromProvisioningArtifactInput & DisassociateServiceActionFromProvisioningArtifactInput & DisassociateServiceActionFromProvisioningArtifactInput & DisassociateServiceActionFromProvisioningArtifactInput & DisassociateServiceActionFromProvisioningArtifactInput & DisassociateServiceActionFromProvisioningArtifactInput & DisassociateServiceActionFromProvisioningArtifactInput & DisassociateServiceActionFromProvisioningArtifactInput & DisassociateServiceActionFromProvisioningArtifactInput & DisassociateServiceActionFromProvisioningArtifactInput & DisassociateServiceActionFromProvisioningArtifactInput & DisassociateServiceActionFromProvisioningArtifactInput & DisassociateServiceActionFromProvisioningArtifactInput & DisassociateServiceActionFromProvisioningArtifactInput & DisassociateServiceActionFromProvisioningArtifactInput & DisassociateServiceActionFromProvisioningArtifactInput)[K]
    }>): DisassociateServiceActionFromProvisioningArtifactOutput {
        return this.client.disassociateServiceActionFromProvisioningArtifact(
            this.ops["DisassociateServiceActionFromProvisioningArtifact"].apply(partialParams)
        );
    }

    invokeDisassociateTagOptionFromResource(partialParams: ToOptional<{
      [K in keyof DisassociateTagOptionFromResourceInput & keyof DisassociateTagOptionFromResourceInput & keyof DisassociateTagOptionFromResourceInput & keyof DisassociateTagOptionFromResourceInput & keyof DisassociateTagOptionFromResourceInput & keyof DisassociateTagOptionFromResourceInput & keyof DisassociateTagOptionFromResourceInput & keyof DisassociateTagOptionFromResourceInput & keyof DisassociateTagOptionFromResourceInput & keyof DisassociateTagOptionFromResourceInput & keyof DisassociateTagOptionFromResourceInput & keyof DisassociateTagOptionFromResourceInput & keyof DisassociateTagOptionFromResourceInput & keyof DisassociateTagOptionFromResourceInput & keyof DisassociateTagOptionFromResourceInput & keyof DisassociateTagOptionFromResourceInput & keyof DisassociateTagOptionFromResourceInput]: (DisassociateTagOptionFromResourceInput & DisassociateTagOptionFromResourceInput & DisassociateTagOptionFromResourceInput & DisassociateTagOptionFromResourceInput & DisassociateTagOptionFromResourceInput & DisassociateTagOptionFromResourceInput & DisassociateTagOptionFromResourceInput & DisassociateTagOptionFromResourceInput & DisassociateTagOptionFromResourceInput & DisassociateTagOptionFromResourceInput & DisassociateTagOptionFromResourceInput & DisassociateTagOptionFromResourceInput & DisassociateTagOptionFromResourceInput & DisassociateTagOptionFromResourceInput & DisassociateTagOptionFromResourceInput & DisassociateTagOptionFromResourceInput & DisassociateTagOptionFromResourceInput)[K]
    }>): DisassociateTagOptionFromResourceOutput {
        return this.client.disassociateTagOptionFromResource(
            this.ops["DisassociateTagOptionFromResource"].apply(partialParams)
        );
    }

    invokeExecuteProvisionedProductPlan(partialParams: ToOptional<{
      [K in keyof ExecuteProvisionedProductPlanInput & keyof ExecuteProvisionedProductPlanInput & keyof ExecuteProvisionedProductPlanInput & keyof ExecuteProvisionedProductPlanInput & keyof ExecuteProvisionedProductPlanInput & keyof ExecuteProvisionedProductPlanInput & keyof ExecuteProvisionedProductPlanInput & keyof ExecuteProvisionedProductPlanInput & keyof ExecuteProvisionedProductPlanInput & keyof ExecuteProvisionedProductPlanInput & keyof ExecuteProvisionedProductPlanInput & keyof ExecuteProvisionedProductPlanInput & keyof ExecuteProvisionedProductPlanInput & keyof ExecuteProvisionedProductPlanInput & keyof ExecuteProvisionedProductPlanInput & keyof ExecuteProvisionedProductPlanInput & keyof ExecuteProvisionedProductPlanInput]: (ExecuteProvisionedProductPlanInput & ExecuteProvisionedProductPlanInput & ExecuteProvisionedProductPlanInput & ExecuteProvisionedProductPlanInput & ExecuteProvisionedProductPlanInput & ExecuteProvisionedProductPlanInput & ExecuteProvisionedProductPlanInput & ExecuteProvisionedProductPlanInput & ExecuteProvisionedProductPlanInput & ExecuteProvisionedProductPlanInput & ExecuteProvisionedProductPlanInput & ExecuteProvisionedProductPlanInput & ExecuteProvisionedProductPlanInput & ExecuteProvisionedProductPlanInput & ExecuteProvisionedProductPlanInput & ExecuteProvisionedProductPlanInput & ExecuteProvisionedProductPlanInput)[K]
    }>): ExecuteProvisionedProductPlanOutput {
        return this.client.executeProvisionedProductPlan(
            this.ops["ExecuteProvisionedProductPlan"].apply(partialParams)
        );
    }

    invokeExecuteProvisionedProductServiceAction(partialParams: ToOptional<{
      [K in keyof ExecuteProvisionedProductServiceActionInput & keyof ExecuteProvisionedProductServiceActionInput & keyof ExecuteProvisionedProductServiceActionInput & keyof ExecuteProvisionedProductServiceActionInput & keyof ExecuteProvisionedProductServiceActionInput & keyof ExecuteProvisionedProductServiceActionInput & keyof ExecuteProvisionedProductServiceActionInput & keyof ExecuteProvisionedProductServiceActionInput & keyof ExecuteProvisionedProductServiceActionInput & keyof ExecuteProvisionedProductServiceActionInput & keyof ExecuteProvisionedProductServiceActionInput & keyof ExecuteProvisionedProductServiceActionInput & keyof ExecuteProvisionedProductServiceActionInput & keyof ExecuteProvisionedProductServiceActionInput & keyof ExecuteProvisionedProductServiceActionInput & keyof ExecuteProvisionedProductServiceActionInput & keyof ExecuteProvisionedProductServiceActionInput]: (ExecuteProvisionedProductServiceActionInput & ExecuteProvisionedProductServiceActionInput & ExecuteProvisionedProductServiceActionInput & ExecuteProvisionedProductServiceActionInput & ExecuteProvisionedProductServiceActionInput & ExecuteProvisionedProductServiceActionInput & ExecuteProvisionedProductServiceActionInput & ExecuteProvisionedProductServiceActionInput & ExecuteProvisionedProductServiceActionInput & ExecuteProvisionedProductServiceActionInput & ExecuteProvisionedProductServiceActionInput & ExecuteProvisionedProductServiceActionInput & ExecuteProvisionedProductServiceActionInput & ExecuteProvisionedProductServiceActionInput & ExecuteProvisionedProductServiceActionInput & ExecuteProvisionedProductServiceActionInput & ExecuteProvisionedProductServiceActionInput)[K]
    }>): ExecuteProvisionedProductServiceActionOutput {
        return this.client.executeProvisionedProductServiceAction(
            this.ops["ExecuteProvisionedProductServiceAction"].apply(partialParams)
        );
    }

    invokeImportAsProvisionedProduct(partialParams: ToOptional<{
      [K in keyof ImportAsProvisionedProductInput & keyof ImportAsProvisionedProductInput & keyof ImportAsProvisionedProductInput & keyof ImportAsProvisionedProductInput & keyof ImportAsProvisionedProductInput & keyof ImportAsProvisionedProductInput & keyof ImportAsProvisionedProductInput & keyof ImportAsProvisionedProductInput & keyof ImportAsProvisionedProductInput & keyof ImportAsProvisionedProductInput & keyof Omit<ImportAsProvisionedProductInput, "ProductId"> & keyof ImportAsProvisionedProductInput & keyof Omit<ImportAsProvisionedProductInput, "ProvisioningArtifactId"> & keyof ImportAsProvisionedProductInput & keyof ImportAsProvisionedProductInput & keyof ImportAsProvisionedProductInput & keyof ImportAsProvisionedProductInput]: (ImportAsProvisionedProductInput & ImportAsProvisionedProductInput & ImportAsProvisionedProductInput & ImportAsProvisionedProductInput & ImportAsProvisionedProductInput & ImportAsProvisionedProductInput & ImportAsProvisionedProductInput & ImportAsProvisionedProductInput & ImportAsProvisionedProductInput & ImportAsProvisionedProductInput & Omit<ImportAsProvisionedProductInput, "ProductId"> & ImportAsProvisionedProductInput & Omit<ImportAsProvisionedProductInput, "ProvisioningArtifactId"> & ImportAsProvisionedProductInput & ImportAsProvisionedProductInput & ImportAsProvisionedProductInput & ImportAsProvisionedProductInput)[K]
    }>): ImportAsProvisionedProductOutput {
        return this.client.importAsProvisionedProduct(
            this.ops["ImportAsProvisionedProduct"].apply(partialParams)
        );
    }

    invokeListBudgetsForResource(partialParams: ToOptional<{
      [K in keyof ListBudgetsForResourceInput & keyof ListBudgetsForResourceInput & keyof ListBudgetsForResourceInput & keyof ListBudgetsForResourceInput & keyof ListBudgetsForResourceInput & keyof ListBudgetsForResourceInput & keyof ListBudgetsForResourceInput & keyof ListBudgetsForResourceInput & keyof ListBudgetsForResourceInput & keyof ListBudgetsForResourceInput & keyof ListBudgetsForResourceInput & keyof ListBudgetsForResourceInput & keyof ListBudgetsForResourceInput & keyof ListBudgetsForResourceInput & keyof ListBudgetsForResourceInput & keyof ListBudgetsForResourceInput & keyof ListBudgetsForResourceInput]: (ListBudgetsForResourceInput & ListBudgetsForResourceInput & ListBudgetsForResourceInput & ListBudgetsForResourceInput & ListBudgetsForResourceInput & ListBudgetsForResourceInput & ListBudgetsForResourceInput & ListBudgetsForResourceInput & ListBudgetsForResourceInput & ListBudgetsForResourceInput & ListBudgetsForResourceInput & ListBudgetsForResourceInput & ListBudgetsForResourceInput & ListBudgetsForResourceInput & ListBudgetsForResourceInput & ListBudgetsForResourceInput & ListBudgetsForResourceInput)[K]
    }>): ListBudgetsForResourceOutput {
        return this.client.listBudgetsForResource(
            this.ops["ListBudgetsForResource"].apply(partialParams)
        );
    }

    invokeListConstraintsForPortfolio(partialParams: ToOptional<{
      [K in keyof ListConstraintsForPortfolioInput & keyof ListConstraintsForPortfolioInput & keyof ListConstraintsForPortfolioInput & keyof ListConstraintsForPortfolioInput & keyof ListConstraintsForPortfolioInput & keyof ListConstraintsForPortfolioInput & keyof ListConstraintsForPortfolioInput & keyof ListConstraintsForPortfolioInput & keyof ListConstraintsForPortfolioInput & keyof ListConstraintsForPortfolioInput & keyof ListConstraintsForPortfolioInput & keyof ListConstraintsForPortfolioInput & keyof ListConstraintsForPortfolioInput & keyof ListConstraintsForPortfolioInput & keyof ListConstraintsForPortfolioInput & keyof ListConstraintsForPortfolioInput & keyof ListConstraintsForPortfolioInput]: (ListConstraintsForPortfolioInput & ListConstraintsForPortfolioInput & ListConstraintsForPortfolioInput & ListConstraintsForPortfolioInput & ListConstraintsForPortfolioInput & ListConstraintsForPortfolioInput & ListConstraintsForPortfolioInput & ListConstraintsForPortfolioInput & ListConstraintsForPortfolioInput & ListConstraintsForPortfolioInput & ListConstraintsForPortfolioInput & ListConstraintsForPortfolioInput & ListConstraintsForPortfolioInput & ListConstraintsForPortfolioInput & ListConstraintsForPortfolioInput & ListConstraintsForPortfolioInput & ListConstraintsForPortfolioInput)[K]
    }>): ListConstraintsForPortfolioOutput {
        return this.client.listConstraintsForPortfolio(
            this.ops["ListConstraintsForPortfolio"].apply(partialParams)
        );
    }

    invokeListLaunchPaths(partialParams: ToOptional<{
      [K in keyof ListLaunchPathsInput & keyof ListLaunchPathsInput & keyof ListLaunchPathsInput & keyof ListLaunchPathsInput & keyof ListLaunchPathsInput & keyof ListLaunchPathsInput & keyof ListLaunchPathsInput & keyof ListLaunchPathsInput & keyof ListLaunchPathsInput & keyof ListLaunchPathsInput & keyof Omit<ListLaunchPathsInput, "ProductId"> & keyof ListLaunchPathsInput & keyof ListLaunchPathsInput & keyof ListLaunchPathsInput & keyof ListLaunchPathsInput & keyof ListLaunchPathsInput & keyof ListLaunchPathsInput]: (ListLaunchPathsInput & ListLaunchPathsInput & ListLaunchPathsInput & ListLaunchPathsInput & ListLaunchPathsInput & ListLaunchPathsInput & ListLaunchPathsInput & ListLaunchPathsInput & ListLaunchPathsInput & ListLaunchPathsInput & Omit<ListLaunchPathsInput, "ProductId"> & ListLaunchPathsInput & ListLaunchPathsInput & ListLaunchPathsInput & ListLaunchPathsInput & ListLaunchPathsInput & ListLaunchPathsInput)[K]
    }>): ListLaunchPathsOutput {
        return this.client.listLaunchPaths(
            this.ops["ListLaunchPaths"].apply(partialParams)
        );
    }

    invokeListOrganizationPortfolioAccess(partialParams: ToOptional<{
      [K in keyof ListOrganizationPortfolioAccessInput & keyof ListOrganizationPortfolioAccessInput & keyof ListOrganizationPortfolioAccessInput & keyof ListOrganizationPortfolioAccessInput & keyof ListOrganizationPortfolioAccessInput & keyof ListOrganizationPortfolioAccessInput & keyof ListOrganizationPortfolioAccessInput & keyof ListOrganizationPortfolioAccessInput & keyof ListOrganizationPortfolioAccessInput & keyof ListOrganizationPortfolioAccessInput & keyof ListOrganizationPortfolioAccessInput & keyof ListOrganizationPortfolioAccessInput & keyof ListOrganizationPortfolioAccessInput & keyof ListOrganizationPortfolioAccessInput & keyof ListOrganizationPortfolioAccessInput & keyof ListOrganizationPortfolioAccessInput & keyof ListOrganizationPortfolioAccessInput]: (ListOrganizationPortfolioAccessInput & ListOrganizationPortfolioAccessInput & ListOrganizationPortfolioAccessInput & ListOrganizationPortfolioAccessInput & ListOrganizationPortfolioAccessInput & ListOrganizationPortfolioAccessInput & ListOrganizationPortfolioAccessInput & ListOrganizationPortfolioAccessInput & ListOrganizationPortfolioAccessInput & ListOrganizationPortfolioAccessInput & ListOrganizationPortfolioAccessInput & ListOrganizationPortfolioAccessInput & ListOrganizationPortfolioAccessInput & ListOrganizationPortfolioAccessInput & ListOrganizationPortfolioAccessInput & ListOrganizationPortfolioAccessInput & ListOrganizationPortfolioAccessInput)[K]
    }>): ListOrganizationPortfolioAccessOutput {
        return this.client.listOrganizationPortfolioAccess(
            this.ops["ListOrganizationPortfolioAccess"].apply(partialParams)
        );
    }

    invokeListPortfolioAccess(partialParams: ToOptional<{
      [K in keyof ListPortfolioAccessInput & keyof ListPortfolioAccessInput & keyof ListPortfolioAccessInput & keyof ListPortfolioAccessInput & keyof ListPortfolioAccessInput & keyof ListPortfolioAccessInput & keyof ListPortfolioAccessInput & keyof ListPortfolioAccessInput & keyof ListPortfolioAccessInput & keyof ListPortfolioAccessInput & keyof ListPortfolioAccessInput & keyof ListPortfolioAccessInput & keyof ListPortfolioAccessInput & keyof ListPortfolioAccessInput & keyof ListPortfolioAccessInput & keyof ListPortfolioAccessInput & keyof ListPortfolioAccessInput]: (ListPortfolioAccessInput & ListPortfolioAccessInput & ListPortfolioAccessInput & ListPortfolioAccessInput & ListPortfolioAccessInput & ListPortfolioAccessInput & ListPortfolioAccessInput & ListPortfolioAccessInput & ListPortfolioAccessInput & ListPortfolioAccessInput & ListPortfolioAccessInput & ListPortfolioAccessInput & ListPortfolioAccessInput & ListPortfolioAccessInput & ListPortfolioAccessInput & ListPortfolioAccessInput & ListPortfolioAccessInput)[K]
    }>): ListPortfolioAccessOutput {
        return this.client.listPortfolioAccess(
            this.ops["ListPortfolioAccess"].apply(partialParams)
        );
    }

    invokeListPortfoliosForProduct(partialParams: ToOptional<{
      [K in keyof ListPortfoliosForProductInput & keyof ListPortfoliosForProductInput & keyof ListPortfoliosForProductInput & keyof ListPortfoliosForProductInput & keyof ListPortfoliosForProductInput & keyof ListPortfoliosForProductInput & keyof ListPortfoliosForProductInput & keyof ListPortfoliosForProductInput & keyof ListPortfoliosForProductInput & keyof ListPortfoliosForProductInput & keyof Omit<ListPortfoliosForProductInput, "ProductId"> & keyof ListPortfoliosForProductInput & keyof ListPortfoliosForProductInput & keyof ListPortfoliosForProductInput & keyof ListPortfoliosForProductInput & keyof ListPortfoliosForProductInput & keyof ListPortfoliosForProductInput]: (ListPortfoliosForProductInput & ListPortfoliosForProductInput & ListPortfoliosForProductInput & ListPortfoliosForProductInput & ListPortfoliosForProductInput & ListPortfoliosForProductInput & ListPortfoliosForProductInput & ListPortfoliosForProductInput & ListPortfoliosForProductInput & ListPortfoliosForProductInput & Omit<ListPortfoliosForProductInput, "ProductId"> & ListPortfoliosForProductInput & ListPortfoliosForProductInput & ListPortfoliosForProductInput & ListPortfoliosForProductInput & ListPortfoliosForProductInput & ListPortfoliosForProductInput)[K]
    }>): ListPortfoliosForProductOutput {
        return this.client.listPortfoliosForProduct(
            this.ops["ListPortfoliosForProduct"].apply(partialParams)
        );
    }

    invokeListPrincipalsForPortfolio(partialParams: ToOptional<{
      [K in keyof ListPrincipalsForPortfolioInput & keyof ListPrincipalsForPortfolioInput & keyof ListPrincipalsForPortfolioInput & keyof ListPrincipalsForPortfolioInput & keyof ListPrincipalsForPortfolioInput & keyof ListPrincipalsForPortfolioInput & keyof ListPrincipalsForPortfolioInput & keyof ListPrincipalsForPortfolioInput & keyof ListPrincipalsForPortfolioInput & keyof ListPrincipalsForPortfolioInput & keyof ListPrincipalsForPortfolioInput & keyof ListPrincipalsForPortfolioInput & keyof ListPrincipalsForPortfolioInput & keyof ListPrincipalsForPortfolioInput & keyof ListPrincipalsForPortfolioInput & keyof ListPrincipalsForPortfolioInput & keyof ListPrincipalsForPortfolioInput]: (ListPrincipalsForPortfolioInput & ListPrincipalsForPortfolioInput & ListPrincipalsForPortfolioInput & ListPrincipalsForPortfolioInput & ListPrincipalsForPortfolioInput & ListPrincipalsForPortfolioInput & ListPrincipalsForPortfolioInput & ListPrincipalsForPortfolioInput & ListPrincipalsForPortfolioInput & ListPrincipalsForPortfolioInput & ListPrincipalsForPortfolioInput & ListPrincipalsForPortfolioInput & ListPrincipalsForPortfolioInput & ListPrincipalsForPortfolioInput & ListPrincipalsForPortfolioInput & ListPrincipalsForPortfolioInput & ListPrincipalsForPortfolioInput)[K]
    }>): ListPrincipalsForPortfolioOutput {
        return this.client.listPrincipalsForPortfolio(
            this.ops["ListPrincipalsForPortfolio"].apply(partialParams)
        );
    }

    invokeListProvisioningArtifacts(partialParams: ToOptional<{
      [K in keyof ListProvisioningArtifactsInput & keyof ListProvisioningArtifactsInput & keyof ListProvisioningArtifactsInput & keyof ListProvisioningArtifactsInput & keyof ListProvisioningArtifactsInput & keyof ListProvisioningArtifactsInput & keyof ListProvisioningArtifactsInput & keyof ListProvisioningArtifactsInput & keyof ListProvisioningArtifactsInput & keyof ListProvisioningArtifactsInput & keyof Omit<ListProvisioningArtifactsInput, "ProductId"> & keyof ListProvisioningArtifactsInput & keyof ListProvisioningArtifactsInput & keyof ListProvisioningArtifactsInput & keyof ListProvisioningArtifactsInput & keyof ListProvisioningArtifactsInput & keyof ListProvisioningArtifactsInput]: (ListProvisioningArtifactsInput & ListProvisioningArtifactsInput & ListProvisioningArtifactsInput & ListProvisioningArtifactsInput & ListProvisioningArtifactsInput & ListProvisioningArtifactsInput & ListProvisioningArtifactsInput & ListProvisioningArtifactsInput & ListProvisioningArtifactsInput & ListProvisioningArtifactsInput & Omit<ListProvisioningArtifactsInput, "ProductId"> & ListProvisioningArtifactsInput & ListProvisioningArtifactsInput & ListProvisioningArtifactsInput & ListProvisioningArtifactsInput & ListProvisioningArtifactsInput & ListProvisioningArtifactsInput)[K]
    }>): ListProvisioningArtifactsOutput {
        return this.client.listProvisioningArtifacts(
            this.ops["ListProvisioningArtifacts"].apply(partialParams)
        );
    }

    invokeListProvisioningArtifactsForServiceAction(partialParams: ToOptional<{
      [K in keyof ListProvisioningArtifactsForServiceActionInput & keyof ListProvisioningArtifactsForServiceActionInput & keyof ListProvisioningArtifactsForServiceActionInput & keyof ListProvisioningArtifactsForServiceActionInput & keyof ListProvisioningArtifactsForServiceActionInput & keyof ListProvisioningArtifactsForServiceActionInput & keyof ListProvisioningArtifactsForServiceActionInput & keyof ListProvisioningArtifactsForServiceActionInput & keyof ListProvisioningArtifactsForServiceActionInput & keyof ListProvisioningArtifactsForServiceActionInput & keyof ListProvisioningArtifactsForServiceActionInput & keyof ListProvisioningArtifactsForServiceActionInput & keyof ListProvisioningArtifactsForServiceActionInput & keyof ListProvisioningArtifactsForServiceActionInput & keyof ListProvisioningArtifactsForServiceActionInput & keyof ListProvisioningArtifactsForServiceActionInput & keyof ListProvisioningArtifactsForServiceActionInput]: (ListProvisioningArtifactsForServiceActionInput & ListProvisioningArtifactsForServiceActionInput & ListProvisioningArtifactsForServiceActionInput & ListProvisioningArtifactsForServiceActionInput & ListProvisioningArtifactsForServiceActionInput & ListProvisioningArtifactsForServiceActionInput & ListProvisioningArtifactsForServiceActionInput & ListProvisioningArtifactsForServiceActionInput & ListProvisioningArtifactsForServiceActionInput & ListProvisioningArtifactsForServiceActionInput & ListProvisioningArtifactsForServiceActionInput & ListProvisioningArtifactsForServiceActionInput & ListProvisioningArtifactsForServiceActionInput & ListProvisioningArtifactsForServiceActionInput & ListProvisioningArtifactsForServiceActionInput & ListProvisioningArtifactsForServiceActionInput & ListProvisioningArtifactsForServiceActionInput)[K]
    }>): ListProvisioningArtifactsForServiceActionOutput {
        return this.client.listProvisioningArtifactsForServiceAction(
            this.ops["ListProvisioningArtifactsForServiceAction"].apply(partialParams)
        );
    }

    invokeListResourcesForTagOption(partialParams: ToOptional<{
      [K in keyof ListResourcesForTagOptionInput & keyof ListResourcesForTagOptionInput & keyof ListResourcesForTagOptionInput & keyof ListResourcesForTagOptionInput & keyof ListResourcesForTagOptionInput & keyof ListResourcesForTagOptionInput & keyof ListResourcesForTagOptionInput & keyof ListResourcesForTagOptionInput & keyof ListResourcesForTagOptionInput & keyof ListResourcesForTagOptionInput & keyof ListResourcesForTagOptionInput & keyof ListResourcesForTagOptionInput & keyof ListResourcesForTagOptionInput & keyof ListResourcesForTagOptionInput & keyof ListResourcesForTagOptionInput & keyof ListResourcesForTagOptionInput & keyof ListResourcesForTagOptionInput]: (ListResourcesForTagOptionInput & ListResourcesForTagOptionInput & ListResourcesForTagOptionInput & ListResourcesForTagOptionInput & ListResourcesForTagOptionInput & ListResourcesForTagOptionInput & ListResourcesForTagOptionInput & ListResourcesForTagOptionInput & ListResourcesForTagOptionInput & ListResourcesForTagOptionInput & ListResourcesForTagOptionInput & ListResourcesForTagOptionInput & ListResourcesForTagOptionInput & ListResourcesForTagOptionInput & ListResourcesForTagOptionInput & ListResourcesForTagOptionInput & ListResourcesForTagOptionInput)[K]
    }>): ListResourcesForTagOptionOutput {
        return this.client.listResourcesForTagOption(
            this.ops["ListResourcesForTagOption"].apply(partialParams)
        );
    }

    invokeListServiceActionsForProvisioningArtifact(partialParams: ToOptional<{
      [K in keyof ListServiceActionsForProvisioningArtifactInput & keyof ListServiceActionsForProvisioningArtifactInput & keyof ListServiceActionsForProvisioningArtifactInput & keyof ListServiceActionsForProvisioningArtifactInput & keyof ListServiceActionsForProvisioningArtifactInput & keyof ListServiceActionsForProvisioningArtifactInput & keyof ListServiceActionsForProvisioningArtifactInput & keyof ListServiceActionsForProvisioningArtifactInput & keyof ListServiceActionsForProvisioningArtifactInput & keyof ListServiceActionsForProvisioningArtifactInput & keyof Omit<ListServiceActionsForProvisioningArtifactInput, "ProductId"> & keyof ListServiceActionsForProvisioningArtifactInput & keyof Omit<ListServiceActionsForProvisioningArtifactInput, "ProvisioningArtifactId"> & keyof ListServiceActionsForProvisioningArtifactInput & keyof ListServiceActionsForProvisioningArtifactInput & keyof ListServiceActionsForProvisioningArtifactInput & keyof ListServiceActionsForProvisioningArtifactInput]: (ListServiceActionsForProvisioningArtifactInput & ListServiceActionsForProvisioningArtifactInput & ListServiceActionsForProvisioningArtifactInput & ListServiceActionsForProvisioningArtifactInput & ListServiceActionsForProvisioningArtifactInput & ListServiceActionsForProvisioningArtifactInput & ListServiceActionsForProvisioningArtifactInput & ListServiceActionsForProvisioningArtifactInput & ListServiceActionsForProvisioningArtifactInput & ListServiceActionsForProvisioningArtifactInput & Omit<ListServiceActionsForProvisioningArtifactInput, "ProductId"> & ListServiceActionsForProvisioningArtifactInput & Omit<ListServiceActionsForProvisioningArtifactInput, "ProvisioningArtifactId"> & ListServiceActionsForProvisioningArtifactInput & ListServiceActionsForProvisioningArtifactInput & ListServiceActionsForProvisioningArtifactInput & ListServiceActionsForProvisioningArtifactInput)[K]
    }>): ListServiceActionsForProvisioningArtifactOutput {
        return this.client.listServiceActionsForProvisioningArtifact(
            this.ops["ListServiceActionsForProvisioningArtifact"].apply(partialParams)
        );
    }

    invokeListStackInstancesForProvisionedProduct(partialParams: ToOptional<{
      [K in keyof ListStackInstancesForProvisionedProductInput & keyof ListStackInstancesForProvisionedProductInput & keyof ListStackInstancesForProvisionedProductInput & keyof ListStackInstancesForProvisionedProductInput & keyof ListStackInstancesForProvisionedProductInput & keyof ListStackInstancesForProvisionedProductInput & keyof ListStackInstancesForProvisionedProductInput & keyof ListStackInstancesForProvisionedProductInput & keyof ListStackInstancesForProvisionedProductInput & keyof ListStackInstancesForProvisionedProductInput & keyof ListStackInstancesForProvisionedProductInput & keyof ListStackInstancesForProvisionedProductInput & keyof ListStackInstancesForProvisionedProductInput & keyof ListStackInstancesForProvisionedProductInput & keyof ListStackInstancesForProvisionedProductInput & keyof ListStackInstancesForProvisionedProductInput & keyof ListStackInstancesForProvisionedProductInput]: (ListStackInstancesForProvisionedProductInput & ListStackInstancesForProvisionedProductInput & ListStackInstancesForProvisionedProductInput & ListStackInstancesForProvisionedProductInput & ListStackInstancesForProvisionedProductInput & ListStackInstancesForProvisionedProductInput & ListStackInstancesForProvisionedProductInput & ListStackInstancesForProvisionedProductInput & ListStackInstancesForProvisionedProductInput & ListStackInstancesForProvisionedProductInput & ListStackInstancesForProvisionedProductInput & ListStackInstancesForProvisionedProductInput & ListStackInstancesForProvisionedProductInput & ListStackInstancesForProvisionedProductInput & ListStackInstancesForProvisionedProductInput & ListStackInstancesForProvisionedProductInput & ListStackInstancesForProvisionedProductInput)[K]
    }>): ListStackInstancesForProvisionedProductOutput {
        return this.client.listStackInstancesForProvisionedProduct(
            this.ops["ListStackInstancesForProvisionedProduct"].apply(partialParams)
        );
    }

    invokeProvisionProduct(partialParams: ToOptional<{
      [K in keyof ProvisionProductInput & keyof ProvisionProductInput & keyof ProvisionProductInput & keyof ProvisionProductInput & keyof ProvisionProductInput & keyof ProvisionProductInput & keyof ProvisionProductInput & keyof ProvisionProductInput & keyof ProvisionProductInput & keyof ProvisionProductInput & keyof ProvisionProductInput & keyof ProvisionProductInput & keyof ProvisionProductInput & keyof ProvisionProductInput & keyof ProvisionProductInput & keyof ProvisionProductInput & keyof ProvisionProductInput]: (ProvisionProductInput & ProvisionProductInput & ProvisionProductInput & ProvisionProductInput & ProvisionProductInput & ProvisionProductInput & ProvisionProductInput & ProvisionProductInput & ProvisionProductInput & ProvisionProductInput & ProvisionProductInput & ProvisionProductInput & ProvisionProductInput & ProvisionProductInput & ProvisionProductInput & ProvisionProductInput & ProvisionProductInput)[K]
    }>): ProvisionProductOutput {
        return this.client.provisionProduct(
            this.ops["ProvisionProduct"].apply(partialParams)
        );
    }

    invokeRejectPortfolioShare(partialParams: ToOptional<{
      [K in keyof RejectPortfolioShareInput & keyof RejectPortfolioShareInput & keyof RejectPortfolioShareInput & keyof RejectPortfolioShareInput & keyof RejectPortfolioShareInput & keyof RejectPortfolioShareInput & keyof RejectPortfolioShareInput & keyof RejectPortfolioShareInput & keyof RejectPortfolioShareInput & keyof RejectPortfolioShareInput & keyof RejectPortfolioShareInput & keyof RejectPortfolioShareInput & keyof RejectPortfolioShareInput & keyof RejectPortfolioShareInput & keyof RejectPortfolioShareInput & keyof RejectPortfolioShareInput & keyof RejectPortfolioShareInput]: (RejectPortfolioShareInput & RejectPortfolioShareInput & RejectPortfolioShareInput & RejectPortfolioShareInput & RejectPortfolioShareInput & RejectPortfolioShareInput & RejectPortfolioShareInput & RejectPortfolioShareInput & RejectPortfolioShareInput & RejectPortfolioShareInput & RejectPortfolioShareInput & RejectPortfolioShareInput & RejectPortfolioShareInput & RejectPortfolioShareInput & RejectPortfolioShareInput & RejectPortfolioShareInput & RejectPortfolioShareInput)[K]
    }>): RejectPortfolioShareOutput {
        return this.client.rejectPortfolioShare(
            this.ops["RejectPortfolioShare"].apply(partialParams)
        );
    }

    invokeTerminateProvisionedProduct(partialParams: ToOptional<{
      [K in keyof TerminateProvisionedProductInput & keyof TerminateProvisionedProductInput & keyof TerminateProvisionedProductInput & keyof TerminateProvisionedProductInput & keyof TerminateProvisionedProductInput & keyof TerminateProvisionedProductInput & keyof TerminateProvisionedProductInput & keyof TerminateProvisionedProductInput & keyof TerminateProvisionedProductInput & keyof TerminateProvisionedProductInput & keyof TerminateProvisionedProductInput & keyof TerminateProvisionedProductInput & keyof TerminateProvisionedProductInput & keyof TerminateProvisionedProductInput & keyof TerminateProvisionedProductInput & keyof TerminateProvisionedProductInput & keyof TerminateProvisionedProductInput]: (TerminateProvisionedProductInput & TerminateProvisionedProductInput & TerminateProvisionedProductInput & TerminateProvisionedProductInput & TerminateProvisionedProductInput & TerminateProvisionedProductInput & TerminateProvisionedProductInput & TerminateProvisionedProductInput & TerminateProvisionedProductInput & TerminateProvisionedProductInput & TerminateProvisionedProductInput & TerminateProvisionedProductInput & TerminateProvisionedProductInput & TerminateProvisionedProductInput & TerminateProvisionedProductInput & TerminateProvisionedProductInput & TerminateProvisionedProductInput)[K]
    }>): TerminateProvisionedProductOutput {
        return this.client.terminateProvisionedProduct(
            this.ops["TerminateProvisionedProduct"].apply(partialParams)
        );
    }

    invokeUpdateConstraint(partialParams: ToOptional<{
      [K in keyof UpdateConstraintInput & keyof UpdateConstraintInput & keyof UpdateConstraintInput & keyof UpdateConstraintInput & keyof UpdateConstraintInput & keyof UpdateConstraintInput & keyof UpdateConstraintInput & keyof UpdateConstraintInput & keyof UpdateConstraintInput & keyof UpdateConstraintInput & keyof UpdateConstraintInput & keyof UpdateConstraintInput & keyof UpdateConstraintInput & keyof UpdateConstraintInput & keyof UpdateConstraintInput & keyof UpdateConstraintInput & keyof UpdateConstraintInput]: (UpdateConstraintInput & UpdateConstraintInput & UpdateConstraintInput & UpdateConstraintInput & UpdateConstraintInput & UpdateConstraintInput & UpdateConstraintInput & UpdateConstraintInput & UpdateConstraintInput & UpdateConstraintInput & UpdateConstraintInput & UpdateConstraintInput & UpdateConstraintInput & UpdateConstraintInput & UpdateConstraintInput & UpdateConstraintInput & UpdateConstraintInput)[K]
    }>): UpdateConstraintOutput {
        return this.client.updateConstraint(
            this.ops["UpdateConstraint"].apply(partialParams)
        );
    }

    invokeUpdatePortfolio(partialParams: ToOptional<{
      [K in keyof UpdatePortfolioInput & keyof UpdatePortfolioInput & keyof UpdatePortfolioInput & keyof UpdatePortfolioInput & keyof UpdatePortfolioInput & keyof UpdatePortfolioInput & keyof UpdatePortfolioInput & keyof UpdatePortfolioInput & keyof UpdatePortfolioInput & keyof UpdatePortfolioInput & keyof UpdatePortfolioInput & keyof UpdatePortfolioInput & keyof UpdatePortfolioInput & keyof UpdatePortfolioInput & keyof UpdatePortfolioInput & keyof UpdatePortfolioInput & keyof UpdatePortfolioInput]: (UpdatePortfolioInput & UpdatePortfolioInput & UpdatePortfolioInput & UpdatePortfolioInput & UpdatePortfolioInput & UpdatePortfolioInput & UpdatePortfolioInput & UpdatePortfolioInput & UpdatePortfolioInput & UpdatePortfolioInput & UpdatePortfolioInput & UpdatePortfolioInput & UpdatePortfolioInput & UpdatePortfolioInput & UpdatePortfolioInput & UpdatePortfolioInput & UpdatePortfolioInput)[K]
    }>): UpdatePortfolioOutput {
        return this.client.updatePortfolio(
            this.ops["UpdatePortfolio"].apply(partialParams)
        );
    }

    invokeUpdatePortfolioShare(partialParams: ToOptional<{
      [K in keyof UpdatePortfolioShareInput & keyof UpdatePortfolioShareInput & keyof UpdatePortfolioShareInput & keyof UpdatePortfolioShareInput & keyof UpdatePortfolioShareInput & keyof UpdatePortfolioShareInput & keyof UpdatePortfolioShareInput & keyof UpdatePortfolioShareInput & keyof UpdatePortfolioShareInput & keyof UpdatePortfolioShareInput & keyof UpdatePortfolioShareInput & keyof UpdatePortfolioShareInput & keyof UpdatePortfolioShareInput & keyof UpdatePortfolioShareInput & keyof UpdatePortfolioShareInput & keyof UpdatePortfolioShareInput & keyof UpdatePortfolioShareInput]: (UpdatePortfolioShareInput & UpdatePortfolioShareInput & UpdatePortfolioShareInput & UpdatePortfolioShareInput & UpdatePortfolioShareInput & UpdatePortfolioShareInput & UpdatePortfolioShareInput & UpdatePortfolioShareInput & UpdatePortfolioShareInput & UpdatePortfolioShareInput & UpdatePortfolioShareInput & UpdatePortfolioShareInput & UpdatePortfolioShareInput & UpdatePortfolioShareInput & UpdatePortfolioShareInput & UpdatePortfolioShareInput & UpdatePortfolioShareInput)[K]
    }>): UpdatePortfolioShareOutput {
        return this.client.updatePortfolioShare(
            this.ops["UpdatePortfolioShare"].apply(partialParams)
        );
    }

    invokeUpdateProduct(partialParams: ToOptional<{
      [K in keyof UpdateProductInput & keyof UpdateProductInput & keyof UpdateProductInput & keyof UpdateProductInput & keyof UpdateProductInput & keyof UpdateProductInput & keyof UpdateProductInput & keyof UpdateProductInput & keyof UpdateProductInput & keyof UpdateProductInput & keyof UpdateProductInput & keyof UpdateProductInput & keyof UpdateProductInput & keyof UpdateProductInput & keyof UpdateProductInput & keyof UpdateProductInput & keyof UpdateProductInput]: (UpdateProductInput & UpdateProductInput & UpdateProductInput & UpdateProductInput & UpdateProductInput & UpdateProductInput & UpdateProductInput & UpdateProductInput & UpdateProductInput & UpdateProductInput & UpdateProductInput & UpdateProductInput & UpdateProductInput & UpdateProductInput & UpdateProductInput & UpdateProductInput & UpdateProductInput)[K]
    }>): UpdateProductOutput {
        return this.client.updateProduct(
            this.ops["UpdateProduct"].apply(partialParams)
        );
    }

    invokeUpdateProvisionedProduct(partialParams: ToOptional<{
      [K in keyof UpdateProvisionedProductInput & keyof UpdateProvisionedProductInput & keyof UpdateProvisionedProductInput & keyof UpdateProvisionedProductInput & keyof UpdateProvisionedProductInput & keyof UpdateProvisionedProductInput & keyof UpdateProvisionedProductInput & keyof UpdateProvisionedProductInput & keyof UpdateProvisionedProductInput & keyof UpdateProvisionedProductInput & keyof UpdateProvisionedProductInput & keyof UpdateProvisionedProductInput & keyof UpdateProvisionedProductInput & keyof UpdateProvisionedProductInput & keyof UpdateProvisionedProductInput & keyof UpdateProvisionedProductInput & keyof UpdateProvisionedProductInput]: (UpdateProvisionedProductInput & UpdateProvisionedProductInput & UpdateProvisionedProductInput & UpdateProvisionedProductInput & UpdateProvisionedProductInput & UpdateProvisionedProductInput & UpdateProvisionedProductInput & UpdateProvisionedProductInput & UpdateProvisionedProductInput & UpdateProvisionedProductInput & UpdateProvisionedProductInput & UpdateProvisionedProductInput & UpdateProvisionedProductInput & UpdateProvisionedProductInput & UpdateProvisionedProductInput & UpdateProvisionedProductInput & UpdateProvisionedProductInput)[K]
    }>): UpdateProvisionedProductOutput {
        return this.client.updateProvisionedProduct(
            this.ops["UpdateProvisionedProduct"].apply(partialParams)
        );
    }

    invokeUpdateProvisionedProductProperties(partialParams: ToOptional<{
      [K in keyof UpdateProvisionedProductPropertiesInput & keyof UpdateProvisionedProductPropertiesInput & keyof UpdateProvisionedProductPropertiesInput & keyof UpdateProvisionedProductPropertiesInput & keyof UpdateProvisionedProductPropertiesInput & keyof UpdateProvisionedProductPropertiesInput & keyof UpdateProvisionedProductPropertiesInput & keyof UpdateProvisionedProductPropertiesInput & keyof UpdateProvisionedProductPropertiesInput & keyof UpdateProvisionedProductPropertiesInput & keyof UpdateProvisionedProductPropertiesInput & keyof UpdateProvisionedProductPropertiesInput & keyof UpdateProvisionedProductPropertiesInput & keyof UpdateProvisionedProductPropertiesInput & keyof UpdateProvisionedProductPropertiesInput & keyof UpdateProvisionedProductPropertiesInput & keyof UpdateProvisionedProductPropertiesInput]: (UpdateProvisionedProductPropertiesInput & UpdateProvisionedProductPropertiesInput & UpdateProvisionedProductPropertiesInput & UpdateProvisionedProductPropertiesInput & UpdateProvisionedProductPropertiesInput & UpdateProvisionedProductPropertiesInput & UpdateProvisionedProductPropertiesInput & UpdateProvisionedProductPropertiesInput & UpdateProvisionedProductPropertiesInput & UpdateProvisionedProductPropertiesInput & UpdateProvisionedProductPropertiesInput & UpdateProvisionedProductPropertiesInput & UpdateProvisionedProductPropertiesInput & UpdateProvisionedProductPropertiesInput & UpdateProvisionedProductPropertiesInput & UpdateProvisionedProductPropertiesInput & UpdateProvisionedProductPropertiesInput)[K]
    }>): UpdateProvisionedProductPropertiesOutput {
        return this.client.updateProvisionedProductProperties(
            this.ops["UpdateProvisionedProductProperties"].apply(partialParams)
        );
    }

    invokeUpdateProvisioningArtifact(partialParams: ToOptional<{
      [K in keyof UpdateProvisioningArtifactInput & keyof UpdateProvisioningArtifactInput & keyof UpdateProvisioningArtifactInput & keyof UpdateProvisioningArtifactInput & keyof UpdateProvisioningArtifactInput & keyof UpdateProvisioningArtifactInput & keyof UpdateProvisioningArtifactInput & keyof UpdateProvisioningArtifactInput & keyof UpdateProvisioningArtifactInput & keyof UpdateProvisioningArtifactInput & keyof Omit<UpdateProvisioningArtifactInput, "ProductId"> & keyof UpdateProvisioningArtifactInput & keyof Omit<UpdateProvisioningArtifactInput, "ProvisioningArtifactId"> & keyof UpdateProvisioningArtifactInput & keyof UpdateProvisioningArtifactInput & keyof UpdateProvisioningArtifactInput & keyof UpdateProvisioningArtifactInput]: (UpdateProvisioningArtifactInput & UpdateProvisioningArtifactInput & UpdateProvisioningArtifactInput & UpdateProvisioningArtifactInput & UpdateProvisioningArtifactInput & UpdateProvisioningArtifactInput & UpdateProvisioningArtifactInput & UpdateProvisioningArtifactInput & UpdateProvisioningArtifactInput & UpdateProvisioningArtifactInput & Omit<UpdateProvisioningArtifactInput, "ProductId"> & UpdateProvisioningArtifactInput & Omit<UpdateProvisioningArtifactInput, "ProvisioningArtifactId"> & UpdateProvisioningArtifactInput & UpdateProvisioningArtifactInput & UpdateProvisioningArtifactInput & UpdateProvisioningArtifactInput)[K]
    }>): UpdateProvisioningArtifactOutput {
        return this.client.updateProvisioningArtifact(
            this.ops["UpdateProvisioningArtifact"].apply(partialParams)
        );
    }

    invokeUpdateServiceAction(partialParams: ToOptional<{
      [K in keyof UpdateServiceActionInput & keyof UpdateServiceActionInput & keyof UpdateServiceActionInput & keyof UpdateServiceActionInput & keyof UpdateServiceActionInput & keyof UpdateServiceActionInput & keyof UpdateServiceActionInput & keyof UpdateServiceActionInput & keyof UpdateServiceActionInput & keyof UpdateServiceActionInput & keyof UpdateServiceActionInput & keyof UpdateServiceActionInput & keyof UpdateServiceActionInput & keyof UpdateServiceActionInput & keyof UpdateServiceActionInput & keyof UpdateServiceActionInput & keyof UpdateServiceActionInput]: (UpdateServiceActionInput & UpdateServiceActionInput & UpdateServiceActionInput & UpdateServiceActionInput & UpdateServiceActionInput & UpdateServiceActionInput & UpdateServiceActionInput & UpdateServiceActionInput & UpdateServiceActionInput & UpdateServiceActionInput & UpdateServiceActionInput & UpdateServiceActionInput & UpdateServiceActionInput & UpdateServiceActionInput & UpdateServiceActionInput & UpdateServiceActionInput & UpdateServiceActionInput)[K]
    }>): UpdateServiceActionOutput {
        return this.client.updateServiceAction(
            this.ops["UpdateServiceAction"].apply(partialParams)
        );
    }

    invokeUpdateTagOption(partialParams: ToOptional<{
      [K in keyof UpdateTagOptionInput & keyof UpdateTagOptionInput & keyof UpdateTagOptionInput & keyof UpdateTagOptionInput & keyof UpdateTagOptionInput & keyof UpdateTagOptionInput & keyof UpdateTagOptionInput & keyof UpdateTagOptionInput & keyof UpdateTagOptionInput & keyof UpdateTagOptionInput & keyof UpdateTagOptionInput & keyof UpdateTagOptionInput & keyof UpdateTagOptionInput & keyof UpdateTagOptionInput & keyof UpdateTagOptionInput & keyof UpdateTagOptionInput & keyof UpdateTagOptionInput]: (UpdateTagOptionInput & UpdateTagOptionInput & UpdateTagOptionInput & UpdateTagOptionInput & UpdateTagOptionInput & UpdateTagOptionInput & UpdateTagOptionInput & UpdateTagOptionInput & UpdateTagOptionInput & UpdateTagOptionInput & UpdateTagOptionInput & UpdateTagOptionInput & UpdateTagOptionInput & UpdateTagOptionInput & UpdateTagOptionInput & UpdateTagOptionInput & UpdateTagOptionInput)[K]
    }>): UpdateTagOptionOutput {
        return this.client.updateTagOption(
            this.ops["UpdateTagOption"].apply(partialParams)
        );
    }
}