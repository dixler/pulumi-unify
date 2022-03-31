
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
const schema = require("../apis/servicecatalog-2015-12-10.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.servicecatalog.TagOptionResourceAssociation {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.servicecatalog.TagOptionResourceAssociation>) {
        super(...args)
        this.client = new awssdk.ServiceCatalog()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
    }
    boot() {
        Object.entries(this.capitalizedParams).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value.value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
        this.ops = getResourceOperations(this.capitalizedParams as any, schema, this.client)
    }

    invokeAcceptPortfolioShare(partialParams: ToOptional<{
      [K in keyof AcceptPortfolioShareInput & keyof AcceptPortfolioShareInput & keyof AcceptPortfolioShareInput & keyof AcceptPortfolioShareInput & keyof AcceptPortfolioShareInput & keyof AcceptPortfolioShareInput]: (AcceptPortfolioShareInput & AcceptPortfolioShareInput & AcceptPortfolioShareInput & AcceptPortfolioShareInput & AcceptPortfolioShareInput & AcceptPortfolioShareInput)[K]
    }>): Request<AcceptPortfolioShareOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.acceptPortfolioShare(
          this.ops["AcceptPortfolioShare"].applicator.apply(partialParams)
        );
    }

    invokeAssociateBudgetWithResource(partialParams: ToOptional<{
      [K in keyof AssociateBudgetWithResourceInput & keyof AssociateBudgetWithResourceInput & keyof AssociateBudgetWithResourceInput & keyof AssociateBudgetWithResourceInput & keyof AssociateBudgetWithResourceInput & keyof AssociateBudgetWithResourceInput]: (AssociateBudgetWithResourceInput & AssociateBudgetWithResourceInput & AssociateBudgetWithResourceInput & AssociateBudgetWithResourceInput & AssociateBudgetWithResourceInput & AssociateBudgetWithResourceInput)[K]
    }>): Request<AssociateBudgetWithResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateBudgetWithResource(
          this.ops["AssociateBudgetWithResource"].applicator.apply(partialParams)
        );
    }

    invokeAssociatePrincipalWithPortfolio(partialParams: ToOptional<{
      [K in keyof AssociatePrincipalWithPortfolioInput & keyof AssociatePrincipalWithPortfolioInput & keyof AssociatePrincipalWithPortfolioInput & keyof AssociatePrincipalWithPortfolioInput & keyof AssociatePrincipalWithPortfolioInput & keyof AssociatePrincipalWithPortfolioInput]: (AssociatePrincipalWithPortfolioInput & AssociatePrincipalWithPortfolioInput & AssociatePrincipalWithPortfolioInput & AssociatePrincipalWithPortfolioInput & AssociatePrincipalWithPortfolioInput & AssociatePrincipalWithPortfolioInput)[K]
    }>): Request<AssociatePrincipalWithPortfolioOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associatePrincipalWithPortfolio(
          this.ops["AssociatePrincipalWithPortfolio"].applicator.apply(partialParams)
        );
    }

    invokeAssociateProductWithPortfolio(partialParams: ToOptional<{
      [K in keyof AssociateProductWithPortfolioInput & keyof AssociateProductWithPortfolioInput & keyof AssociateProductWithPortfolioInput & keyof AssociateProductWithPortfolioInput & keyof AssociateProductWithPortfolioInput & keyof AssociateProductWithPortfolioInput]: (AssociateProductWithPortfolioInput & AssociateProductWithPortfolioInput & AssociateProductWithPortfolioInput & AssociateProductWithPortfolioInput & AssociateProductWithPortfolioInput & AssociateProductWithPortfolioInput)[K]
    }>): Request<AssociateProductWithPortfolioOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateProductWithPortfolio(
          this.ops["AssociateProductWithPortfolio"].applicator.apply(partialParams)
        );
    }

    invokeAssociateServiceActionWithProvisioningArtifact(partialParams: ToOptional<{
      [K in keyof AssociateServiceActionWithProvisioningArtifactInput & keyof AssociateServiceActionWithProvisioningArtifactInput & keyof AssociateServiceActionWithProvisioningArtifactInput & keyof AssociateServiceActionWithProvisioningArtifactInput & keyof AssociateServiceActionWithProvisioningArtifactInput & keyof AssociateServiceActionWithProvisioningArtifactInput]: (AssociateServiceActionWithProvisioningArtifactInput & AssociateServiceActionWithProvisioningArtifactInput & AssociateServiceActionWithProvisioningArtifactInput & AssociateServiceActionWithProvisioningArtifactInput & AssociateServiceActionWithProvisioningArtifactInput & AssociateServiceActionWithProvisioningArtifactInput)[K]
    }>): Request<AssociateServiceActionWithProvisioningArtifactOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateServiceActionWithProvisioningArtifact(
          this.ops["AssociateServiceActionWithProvisioningArtifact"].applicator.apply(partialParams)
        );
    }

    invokeAssociateTagOptionWithResource(partialParams: ToOptional<{
      [K in keyof AssociateTagOptionWithResourceInput & keyof AssociateTagOptionWithResourceInput & keyof AssociateTagOptionWithResourceInput & keyof AssociateTagOptionWithResourceInput & keyof AssociateTagOptionWithResourceInput & keyof AssociateTagOptionWithResourceInput]: (AssociateTagOptionWithResourceInput & AssociateTagOptionWithResourceInput & AssociateTagOptionWithResourceInput & AssociateTagOptionWithResourceInput & AssociateTagOptionWithResourceInput & AssociateTagOptionWithResourceInput)[K]
    }>): Request<AssociateTagOptionWithResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateTagOptionWithResource(
          this.ops["AssociateTagOptionWithResource"].applicator.apply(partialParams)
        );
    }

    invokeBatchAssociateServiceActionWithProvisioningArtifact(partialParams: ToOptional<{
      [K in keyof BatchAssociateServiceActionWithProvisioningArtifactInput & keyof BatchAssociateServiceActionWithProvisioningArtifactInput & keyof BatchAssociateServiceActionWithProvisioningArtifactInput & keyof BatchAssociateServiceActionWithProvisioningArtifactInput & keyof BatchAssociateServiceActionWithProvisioningArtifactInput & keyof BatchAssociateServiceActionWithProvisioningArtifactInput]: (BatchAssociateServiceActionWithProvisioningArtifactInput & BatchAssociateServiceActionWithProvisioningArtifactInput & BatchAssociateServiceActionWithProvisioningArtifactInput & BatchAssociateServiceActionWithProvisioningArtifactInput & BatchAssociateServiceActionWithProvisioningArtifactInput & BatchAssociateServiceActionWithProvisioningArtifactInput)[K]
    }>): Request<BatchAssociateServiceActionWithProvisioningArtifactOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchAssociateServiceActionWithProvisioningArtifact(
          this.ops["BatchAssociateServiceActionWithProvisioningArtifact"].applicator.apply(partialParams)
        );
    }

    invokeBatchDisassociateServiceActionFromProvisioningArtifact(partialParams: ToOptional<{
      [K in keyof BatchDisassociateServiceActionFromProvisioningArtifactInput & keyof BatchDisassociateServiceActionFromProvisioningArtifactInput & keyof BatchDisassociateServiceActionFromProvisioningArtifactInput & keyof BatchDisassociateServiceActionFromProvisioningArtifactInput & keyof BatchDisassociateServiceActionFromProvisioningArtifactInput & keyof BatchDisassociateServiceActionFromProvisioningArtifactInput]: (BatchDisassociateServiceActionFromProvisioningArtifactInput & BatchDisassociateServiceActionFromProvisioningArtifactInput & BatchDisassociateServiceActionFromProvisioningArtifactInput & BatchDisassociateServiceActionFromProvisioningArtifactInput & BatchDisassociateServiceActionFromProvisioningArtifactInput & BatchDisassociateServiceActionFromProvisioningArtifactInput)[K]
    }>): Request<BatchDisassociateServiceActionFromProvisioningArtifactOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchDisassociateServiceActionFromProvisioningArtifact(
          this.ops["BatchDisassociateServiceActionFromProvisioningArtifact"].applicator.apply(partialParams)
        );
    }

    invokeCopyProduct(partialParams: ToOptional<{
      [K in keyof CopyProductInput & keyof CopyProductInput & keyof CopyProductInput & keyof CopyProductInput & keyof CopyProductInput & keyof CopyProductInput]: (CopyProductInput & CopyProductInput & CopyProductInput & CopyProductInput & CopyProductInput & CopyProductInput)[K]
    }>): Request<CopyProductOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copyProduct(
          this.ops["CopyProduct"].applicator.apply(partialParams)
        );
    }

    invokeCreateConstraint(partialParams: ToOptional<{
      [K in keyof CreateConstraintInput & keyof CreateConstraintInput & keyof CreateConstraintInput & keyof CreateConstraintInput & keyof CreateConstraintInput & keyof CreateConstraintInput]: (CreateConstraintInput & CreateConstraintInput & CreateConstraintInput & CreateConstraintInput & CreateConstraintInput & CreateConstraintInput)[K]
    }>): Request<CreateConstraintOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createConstraint(
          this.ops["CreateConstraint"].applicator.apply(partialParams)
        );
    }

    invokeCreatePortfolio(partialParams: ToOptional<{
      [K in keyof CreatePortfolioInput & keyof CreatePortfolioInput & keyof CreatePortfolioInput & keyof CreatePortfolioInput & keyof CreatePortfolioInput & keyof CreatePortfolioInput]: (CreatePortfolioInput & CreatePortfolioInput & CreatePortfolioInput & CreatePortfolioInput & CreatePortfolioInput & CreatePortfolioInput)[K]
    }>): Request<CreatePortfolioOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPortfolio(
          this.ops["CreatePortfolio"].applicator.apply(partialParams)
        );
    }

    invokeCreatePortfolioShare(partialParams: ToOptional<{
      [K in keyof CreatePortfolioShareInput & keyof CreatePortfolioShareInput & keyof CreatePortfolioShareInput & keyof CreatePortfolioShareInput & keyof CreatePortfolioShareInput & keyof CreatePortfolioShareInput]: (CreatePortfolioShareInput & CreatePortfolioShareInput & CreatePortfolioShareInput & CreatePortfolioShareInput & CreatePortfolioShareInput & CreatePortfolioShareInput)[K]
    }>): Request<CreatePortfolioShareOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPortfolioShare(
          this.ops["CreatePortfolioShare"].applicator.apply(partialParams)
        );
    }

    invokeCreateProduct(partialParams: ToOptional<{
      [K in keyof CreateProductInput & keyof CreateProductInput & keyof CreateProductInput & keyof CreateProductInput & keyof CreateProductInput & keyof CreateProductInput]: (CreateProductInput & CreateProductInput & CreateProductInput & CreateProductInput & CreateProductInput & CreateProductInput)[K]
    }>): Request<CreateProductOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createProduct(
          this.ops["CreateProduct"].applicator.apply(partialParams)
        );
    }

    invokeCreateProvisionedProductPlan(partialParams: ToOptional<{
      [K in keyof CreateProvisionedProductPlanInput & keyof CreateProvisionedProductPlanInput & keyof CreateProvisionedProductPlanInput & keyof CreateProvisionedProductPlanInput & keyof CreateProvisionedProductPlanInput & keyof CreateProvisionedProductPlanInput]: (CreateProvisionedProductPlanInput & CreateProvisionedProductPlanInput & CreateProvisionedProductPlanInput & CreateProvisionedProductPlanInput & CreateProvisionedProductPlanInput & CreateProvisionedProductPlanInput)[K]
    }>): Request<CreateProvisionedProductPlanOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createProvisionedProductPlan(
          this.ops["CreateProvisionedProductPlan"].applicator.apply(partialParams)
        );
    }

    invokeCreateProvisioningArtifact(partialParams: ToOptional<{
      [K in keyof CreateProvisioningArtifactInput & keyof CreateProvisioningArtifactInput & keyof CreateProvisioningArtifactInput & keyof CreateProvisioningArtifactInput & keyof CreateProvisioningArtifactInput & keyof CreateProvisioningArtifactInput]: (CreateProvisioningArtifactInput & CreateProvisioningArtifactInput & CreateProvisioningArtifactInput & CreateProvisioningArtifactInput & CreateProvisioningArtifactInput & CreateProvisioningArtifactInput)[K]
    }>): Request<CreateProvisioningArtifactOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createProvisioningArtifact(
          this.ops["CreateProvisioningArtifact"].applicator.apply(partialParams)
        );
    }

    invokeCreateServiceAction(partialParams: ToOptional<{
      [K in keyof CreateServiceActionInput & keyof CreateServiceActionInput & keyof CreateServiceActionInput & keyof CreateServiceActionInput & keyof CreateServiceActionInput & keyof CreateServiceActionInput]: (CreateServiceActionInput & CreateServiceActionInput & CreateServiceActionInput & CreateServiceActionInput & CreateServiceActionInput & CreateServiceActionInput)[K]
    }>): Request<CreateServiceActionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createServiceAction(
          this.ops["CreateServiceAction"].applicator.apply(partialParams)
        );
    }

    invokeCreateTagOption(partialParams: ToOptional<{
      [K in keyof CreateTagOptionInput & keyof CreateTagOptionInput & keyof CreateTagOptionInput & keyof CreateTagOptionInput & keyof CreateTagOptionInput & keyof CreateTagOptionInput]: (CreateTagOptionInput & CreateTagOptionInput & CreateTagOptionInput & CreateTagOptionInput & CreateTagOptionInput & CreateTagOptionInput)[K]
    }>): Request<CreateTagOptionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTagOption(
          this.ops["CreateTagOption"].applicator.apply(partialParams)
        );
    }

    invokeDeleteConstraint(partialParams: ToOptional<{
      [K in keyof DeleteConstraintInput & keyof DeleteConstraintInput & keyof DeleteConstraintInput & keyof DeleteConstraintInput & keyof DeleteConstraintInput & keyof DeleteConstraintInput]: (DeleteConstraintInput & DeleteConstraintInput & DeleteConstraintInput & DeleteConstraintInput & DeleteConstraintInput & DeleteConstraintInput)[K]
    }>): Request<DeleteConstraintOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteConstraint(
          this.ops["DeleteConstraint"].applicator.apply(partialParams)
        );
    }

    invokeDeletePortfolio(partialParams: ToOptional<{
      [K in keyof DeletePortfolioInput & keyof DeletePortfolioInput & keyof DeletePortfolioInput & keyof DeletePortfolioInput & keyof DeletePortfolioInput & keyof DeletePortfolioInput]: (DeletePortfolioInput & DeletePortfolioInput & DeletePortfolioInput & DeletePortfolioInput & DeletePortfolioInput & DeletePortfolioInput)[K]
    }>): Request<DeletePortfolioOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePortfolio(
          this.ops["DeletePortfolio"].applicator.apply(partialParams)
        );
    }

    invokeDeletePortfolioShare(partialParams: ToOptional<{
      [K in keyof DeletePortfolioShareInput & keyof DeletePortfolioShareInput & keyof DeletePortfolioShareInput & keyof DeletePortfolioShareInput & keyof DeletePortfolioShareInput & keyof DeletePortfolioShareInput]: (DeletePortfolioShareInput & DeletePortfolioShareInput & DeletePortfolioShareInput & DeletePortfolioShareInput & DeletePortfolioShareInput & DeletePortfolioShareInput)[K]
    }>): Request<DeletePortfolioShareOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePortfolioShare(
          this.ops["DeletePortfolioShare"].applicator.apply(partialParams)
        );
    }

    invokeDeleteProduct(partialParams: ToOptional<{
      [K in keyof DeleteProductInput & keyof DeleteProductInput & keyof DeleteProductInput & keyof DeleteProductInput & keyof DeleteProductInput & keyof DeleteProductInput]: (DeleteProductInput & DeleteProductInput & DeleteProductInput & DeleteProductInput & DeleteProductInput & DeleteProductInput)[K]
    }>): Request<DeleteProductOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteProduct(
          this.ops["DeleteProduct"].applicator.apply(partialParams)
        );
    }

    invokeDeleteProvisionedProductPlan(partialParams: ToOptional<{
      [K in keyof DeleteProvisionedProductPlanInput & keyof DeleteProvisionedProductPlanInput & keyof DeleteProvisionedProductPlanInput & keyof DeleteProvisionedProductPlanInput & keyof DeleteProvisionedProductPlanInput & keyof DeleteProvisionedProductPlanInput]: (DeleteProvisionedProductPlanInput & DeleteProvisionedProductPlanInput & DeleteProvisionedProductPlanInput & DeleteProvisionedProductPlanInput & DeleteProvisionedProductPlanInput & DeleteProvisionedProductPlanInput)[K]
    }>): Request<DeleteProvisionedProductPlanOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteProvisionedProductPlan(
          this.ops["DeleteProvisionedProductPlan"].applicator.apply(partialParams)
        );
    }

    invokeDeleteProvisioningArtifact(partialParams: ToOptional<{
      [K in keyof DeleteProvisioningArtifactInput & keyof DeleteProvisioningArtifactInput & keyof DeleteProvisioningArtifactInput & keyof DeleteProvisioningArtifactInput & keyof DeleteProvisioningArtifactInput & keyof DeleteProvisioningArtifactInput]: (DeleteProvisioningArtifactInput & DeleteProvisioningArtifactInput & DeleteProvisioningArtifactInput & DeleteProvisioningArtifactInput & DeleteProvisioningArtifactInput & DeleteProvisioningArtifactInput)[K]
    }>): Request<DeleteProvisioningArtifactOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteProvisioningArtifact(
          this.ops["DeleteProvisioningArtifact"].applicator.apply(partialParams)
        );
    }

    invokeDeleteServiceAction(partialParams: ToOptional<{
      [K in keyof DeleteServiceActionInput & keyof DeleteServiceActionInput & keyof DeleteServiceActionInput & keyof DeleteServiceActionInput & keyof DeleteServiceActionInput & keyof DeleteServiceActionInput]: (DeleteServiceActionInput & DeleteServiceActionInput & DeleteServiceActionInput & DeleteServiceActionInput & DeleteServiceActionInput & DeleteServiceActionInput)[K]
    }>): Request<DeleteServiceActionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteServiceAction(
          this.ops["DeleteServiceAction"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTagOption(partialParams: ToOptional<{
      [K in keyof DeleteTagOptionInput & keyof DeleteTagOptionInput & keyof DeleteTagOptionInput & keyof DeleteTagOptionInput & keyof DeleteTagOptionInput & keyof DeleteTagOptionInput]: (DeleteTagOptionInput & DeleteTagOptionInput & DeleteTagOptionInput & DeleteTagOptionInput & DeleteTagOptionInput & DeleteTagOptionInput)[K]
    }>): Request<DeleteTagOptionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTagOption(
          this.ops["DeleteTagOption"].applicator.apply(partialParams)
        );
    }

    invokeDescribeConstraint(partialParams: ToOptional<{
      [K in keyof DescribeConstraintInput & keyof DescribeConstraintInput & keyof DescribeConstraintInput & keyof DescribeConstraintInput & keyof DescribeConstraintInput & keyof DescribeConstraintInput]: (DescribeConstraintInput & DescribeConstraintInput & DescribeConstraintInput & DescribeConstraintInput & DescribeConstraintInput & DescribeConstraintInput)[K]
    }>): Request<DescribeConstraintOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeConstraint(
          this.ops["DescribeConstraint"].applicator.apply(partialParams)
        );
    }

    invokeDescribeCopyProductStatus(partialParams: ToOptional<{
      [K in keyof DescribeCopyProductStatusInput & keyof DescribeCopyProductStatusInput & keyof DescribeCopyProductStatusInput & keyof DescribeCopyProductStatusInput & keyof DescribeCopyProductStatusInput & keyof DescribeCopyProductStatusInput]: (DescribeCopyProductStatusInput & DescribeCopyProductStatusInput & DescribeCopyProductStatusInput & DescribeCopyProductStatusInput & DescribeCopyProductStatusInput & DescribeCopyProductStatusInput)[K]
    }>): Request<DescribeCopyProductStatusOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCopyProductStatus(
          this.ops["DescribeCopyProductStatus"].applicator.apply(partialParams)
        );
    }

    invokeDescribePortfolio(partialParams: ToOptional<{
      [K in keyof DescribePortfolioInput & keyof DescribePortfolioInput & keyof DescribePortfolioInput & keyof DescribePortfolioInput & keyof DescribePortfolioInput & keyof DescribePortfolioInput]: (DescribePortfolioInput & DescribePortfolioInput & DescribePortfolioInput & DescribePortfolioInput & DescribePortfolioInput & DescribePortfolioInput)[K]
    }>): Request<DescribePortfolioOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describePortfolio(
          this.ops["DescribePortfolio"].applicator.apply(partialParams)
        );
    }

    invokeDescribePortfolioShareStatus(partialParams: ToOptional<{
      [K in keyof DescribePortfolioShareStatusInput & keyof DescribePortfolioShareStatusInput & keyof DescribePortfolioShareStatusInput & keyof DescribePortfolioShareStatusInput & keyof DescribePortfolioShareStatusInput & keyof DescribePortfolioShareStatusInput]: (DescribePortfolioShareStatusInput & DescribePortfolioShareStatusInput & DescribePortfolioShareStatusInput & DescribePortfolioShareStatusInput & DescribePortfolioShareStatusInput & DescribePortfolioShareStatusInput)[K]
    }>): Request<DescribePortfolioShareStatusOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describePortfolioShareStatus(
          this.ops["DescribePortfolioShareStatus"].applicator.apply(partialParams)
        );
    }

    invokeDescribePortfolioShares(partialParams: ToOptional<{
      [K in keyof DescribePortfolioSharesInput & keyof DescribePortfolioSharesInput & keyof DescribePortfolioSharesInput & keyof DescribePortfolioSharesInput & keyof DescribePortfolioSharesInput & keyof DescribePortfolioSharesInput]: (DescribePortfolioSharesInput & DescribePortfolioSharesInput & DescribePortfolioSharesInput & DescribePortfolioSharesInput & DescribePortfolioSharesInput & DescribePortfolioSharesInput)[K]
    }>): Request<DescribePortfolioSharesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describePortfolioShares(
          this.ops["DescribePortfolioShares"].applicator.apply(partialParams)
        );
    }

    invokeDescribeProductView(partialParams: ToOptional<{
      [K in keyof DescribeProductViewInput & keyof DescribeProductViewInput & keyof DescribeProductViewInput & keyof DescribeProductViewInput & keyof DescribeProductViewInput & keyof DescribeProductViewInput]: (DescribeProductViewInput & DescribeProductViewInput & DescribeProductViewInput & DescribeProductViewInput & DescribeProductViewInput & DescribeProductViewInput)[K]
    }>): Request<DescribeProductViewOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeProductView(
          this.ops["DescribeProductView"].applicator.apply(partialParams)
        );
    }

    invokeDescribeProvisionedProductPlan(partialParams: ToOptional<{
      [K in keyof DescribeProvisionedProductPlanInput & keyof DescribeProvisionedProductPlanInput & keyof DescribeProvisionedProductPlanInput & keyof DescribeProvisionedProductPlanInput & keyof DescribeProvisionedProductPlanInput & keyof DescribeProvisionedProductPlanInput]: (DescribeProvisionedProductPlanInput & DescribeProvisionedProductPlanInput & DescribeProvisionedProductPlanInput & DescribeProvisionedProductPlanInput & DescribeProvisionedProductPlanInput & DescribeProvisionedProductPlanInput)[K]
    }>): Request<DescribeProvisionedProductPlanOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeProvisionedProductPlan(
          this.ops["DescribeProvisionedProductPlan"].applicator.apply(partialParams)
        );
    }

    invokeDescribeRecord(partialParams: ToOptional<{
      [K in keyof DescribeRecordInput & keyof DescribeRecordInput & keyof DescribeRecordInput & keyof DescribeRecordInput & keyof DescribeRecordInput & keyof DescribeRecordInput]: (DescribeRecordInput & DescribeRecordInput & DescribeRecordInput & DescribeRecordInput & DescribeRecordInput & DescribeRecordInput)[K]
    }>): Request<DescribeRecordOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeRecord(
          this.ops["DescribeRecord"].applicator.apply(partialParams)
        );
    }

    invokeDescribeServiceAction(partialParams: ToOptional<{
      [K in keyof DescribeServiceActionInput & keyof DescribeServiceActionInput & keyof DescribeServiceActionInput & keyof DescribeServiceActionInput & keyof DescribeServiceActionInput & keyof DescribeServiceActionInput]: (DescribeServiceActionInput & DescribeServiceActionInput & DescribeServiceActionInput & DescribeServiceActionInput & DescribeServiceActionInput & DescribeServiceActionInput)[K]
    }>): Request<DescribeServiceActionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeServiceAction(
          this.ops["DescribeServiceAction"].applicator.apply(partialParams)
        );
    }

    invokeDescribeServiceActionExecutionParameters(partialParams: ToOptional<{
      [K in keyof DescribeServiceActionExecutionParametersInput & keyof DescribeServiceActionExecutionParametersInput & keyof DescribeServiceActionExecutionParametersInput & keyof DescribeServiceActionExecutionParametersInput & keyof DescribeServiceActionExecutionParametersInput & keyof DescribeServiceActionExecutionParametersInput]: (DescribeServiceActionExecutionParametersInput & DescribeServiceActionExecutionParametersInput & DescribeServiceActionExecutionParametersInput & DescribeServiceActionExecutionParametersInput & DescribeServiceActionExecutionParametersInput & DescribeServiceActionExecutionParametersInput)[K]
    }>): Request<DescribeServiceActionExecutionParametersOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeServiceActionExecutionParameters(
          this.ops["DescribeServiceActionExecutionParameters"].applicator.apply(partialParams)
        );
    }

    invokeDescribeTagOption(partialParams: ToOptional<{
      [K in keyof DescribeTagOptionInput & keyof DescribeTagOptionInput & keyof DescribeTagOptionInput & keyof DescribeTagOptionInput & keyof DescribeTagOptionInput & keyof DescribeTagOptionInput]: (DescribeTagOptionInput & DescribeTagOptionInput & DescribeTagOptionInput & DescribeTagOptionInput & DescribeTagOptionInput & DescribeTagOptionInput)[K]
    }>): Request<DescribeTagOptionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTagOption(
          this.ops["DescribeTagOption"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateBudgetFromResource(partialParams: ToOptional<{
      [K in keyof DisassociateBudgetFromResourceInput & keyof DisassociateBudgetFromResourceInput & keyof DisassociateBudgetFromResourceInput & keyof DisassociateBudgetFromResourceInput & keyof DisassociateBudgetFromResourceInput & keyof DisassociateBudgetFromResourceInput]: (DisassociateBudgetFromResourceInput & DisassociateBudgetFromResourceInput & DisassociateBudgetFromResourceInput & DisassociateBudgetFromResourceInput & DisassociateBudgetFromResourceInput & DisassociateBudgetFromResourceInput)[K]
    }>): Request<DisassociateBudgetFromResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateBudgetFromResource(
          this.ops["DisassociateBudgetFromResource"].applicator.apply(partialParams)
        );
    }

    invokeDisassociatePrincipalFromPortfolio(partialParams: ToOptional<{
      [K in keyof DisassociatePrincipalFromPortfolioInput & keyof DisassociatePrincipalFromPortfolioInput & keyof DisassociatePrincipalFromPortfolioInput & keyof DisassociatePrincipalFromPortfolioInput & keyof DisassociatePrincipalFromPortfolioInput & keyof DisassociatePrincipalFromPortfolioInput]: (DisassociatePrincipalFromPortfolioInput & DisassociatePrincipalFromPortfolioInput & DisassociatePrincipalFromPortfolioInput & DisassociatePrincipalFromPortfolioInput & DisassociatePrincipalFromPortfolioInput & DisassociatePrincipalFromPortfolioInput)[K]
    }>): Request<DisassociatePrincipalFromPortfolioOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociatePrincipalFromPortfolio(
          this.ops["DisassociatePrincipalFromPortfolio"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateProductFromPortfolio(partialParams: ToOptional<{
      [K in keyof DisassociateProductFromPortfolioInput & keyof DisassociateProductFromPortfolioInput & keyof DisassociateProductFromPortfolioInput & keyof DisassociateProductFromPortfolioInput & keyof DisassociateProductFromPortfolioInput & keyof DisassociateProductFromPortfolioInput]: (DisassociateProductFromPortfolioInput & DisassociateProductFromPortfolioInput & DisassociateProductFromPortfolioInput & DisassociateProductFromPortfolioInput & DisassociateProductFromPortfolioInput & DisassociateProductFromPortfolioInput)[K]
    }>): Request<DisassociateProductFromPortfolioOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateProductFromPortfolio(
          this.ops["DisassociateProductFromPortfolio"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateServiceActionFromProvisioningArtifact(partialParams: ToOptional<{
      [K in keyof DisassociateServiceActionFromProvisioningArtifactInput & keyof DisassociateServiceActionFromProvisioningArtifactInput & keyof DisassociateServiceActionFromProvisioningArtifactInput & keyof DisassociateServiceActionFromProvisioningArtifactInput & keyof DisassociateServiceActionFromProvisioningArtifactInput & keyof DisassociateServiceActionFromProvisioningArtifactInput]: (DisassociateServiceActionFromProvisioningArtifactInput & DisassociateServiceActionFromProvisioningArtifactInput & DisassociateServiceActionFromProvisioningArtifactInput & DisassociateServiceActionFromProvisioningArtifactInput & DisassociateServiceActionFromProvisioningArtifactInput & DisassociateServiceActionFromProvisioningArtifactInput)[K]
    }>): Request<DisassociateServiceActionFromProvisioningArtifactOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateServiceActionFromProvisioningArtifact(
          this.ops["DisassociateServiceActionFromProvisioningArtifact"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateTagOptionFromResource(partialParams: ToOptional<{
      [K in keyof DisassociateTagOptionFromResourceInput & keyof DisassociateTagOptionFromResourceInput & keyof DisassociateTagOptionFromResourceInput & keyof DisassociateTagOptionFromResourceInput & keyof DisassociateTagOptionFromResourceInput & keyof DisassociateTagOptionFromResourceInput]: (DisassociateTagOptionFromResourceInput & DisassociateTagOptionFromResourceInput & DisassociateTagOptionFromResourceInput & DisassociateTagOptionFromResourceInput & DisassociateTagOptionFromResourceInput & DisassociateTagOptionFromResourceInput)[K]
    }>): Request<DisassociateTagOptionFromResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateTagOptionFromResource(
          this.ops["DisassociateTagOptionFromResource"].applicator.apply(partialParams)
        );
    }

    invokeExecuteProvisionedProductPlan(partialParams: ToOptional<{
      [K in keyof ExecuteProvisionedProductPlanInput & keyof ExecuteProvisionedProductPlanInput & keyof ExecuteProvisionedProductPlanInput & keyof ExecuteProvisionedProductPlanInput & keyof ExecuteProvisionedProductPlanInput & keyof ExecuteProvisionedProductPlanInput]: (ExecuteProvisionedProductPlanInput & ExecuteProvisionedProductPlanInput & ExecuteProvisionedProductPlanInput & ExecuteProvisionedProductPlanInput & ExecuteProvisionedProductPlanInput & ExecuteProvisionedProductPlanInput)[K]
    }>): Request<ExecuteProvisionedProductPlanOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.executeProvisionedProductPlan(
          this.ops["ExecuteProvisionedProductPlan"].applicator.apply(partialParams)
        );
    }

    invokeExecuteProvisionedProductServiceAction(partialParams: ToOptional<{
      [K in keyof ExecuteProvisionedProductServiceActionInput & keyof ExecuteProvisionedProductServiceActionInput & keyof ExecuteProvisionedProductServiceActionInput & keyof ExecuteProvisionedProductServiceActionInput & keyof ExecuteProvisionedProductServiceActionInput & keyof ExecuteProvisionedProductServiceActionInput]: (ExecuteProvisionedProductServiceActionInput & ExecuteProvisionedProductServiceActionInput & ExecuteProvisionedProductServiceActionInput & ExecuteProvisionedProductServiceActionInput & ExecuteProvisionedProductServiceActionInput & ExecuteProvisionedProductServiceActionInput)[K]
    }>): Request<ExecuteProvisionedProductServiceActionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.executeProvisionedProductServiceAction(
          this.ops["ExecuteProvisionedProductServiceAction"].applicator.apply(partialParams)
        );
    }

    invokeImportAsProvisionedProduct(partialParams: ToOptional<{
      [K in keyof ImportAsProvisionedProductInput & keyof ImportAsProvisionedProductInput & keyof ImportAsProvisionedProductInput & keyof ImportAsProvisionedProductInput & keyof ImportAsProvisionedProductInput & keyof ImportAsProvisionedProductInput]: (ImportAsProvisionedProductInput & ImportAsProvisionedProductInput & ImportAsProvisionedProductInput & ImportAsProvisionedProductInput & ImportAsProvisionedProductInput & ImportAsProvisionedProductInput)[K]
    }>): Request<ImportAsProvisionedProductOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importAsProvisionedProduct(
          this.ops["ImportAsProvisionedProduct"].applicator.apply(partialParams)
        );
    }

    invokeListBudgetsForResource(partialParams: ToOptional<{
      [K in keyof ListBudgetsForResourceInput & keyof ListBudgetsForResourceInput & keyof ListBudgetsForResourceInput & keyof Omit<ListBudgetsForResourceInput, "ResourceId"> & keyof ListBudgetsForResourceInput & keyof ListBudgetsForResourceInput]: (ListBudgetsForResourceInput & ListBudgetsForResourceInput & ListBudgetsForResourceInput & Omit<ListBudgetsForResourceInput, "ResourceId"> & ListBudgetsForResourceInput & ListBudgetsForResourceInput)[K]
    }>): Request<ListBudgetsForResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listBudgetsForResource(
          this.ops["ListBudgetsForResource"].applicator.apply(partialParams)
        );
    }

    invokeListConstraintsForPortfolio(partialParams: ToOptional<{
      [K in keyof ListConstraintsForPortfolioInput & keyof ListConstraintsForPortfolioInput & keyof ListConstraintsForPortfolioInput & keyof ListConstraintsForPortfolioInput & keyof ListConstraintsForPortfolioInput & keyof ListConstraintsForPortfolioInput]: (ListConstraintsForPortfolioInput & ListConstraintsForPortfolioInput & ListConstraintsForPortfolioInput & ListConstraintsForPortfolioInput & ListConstraintsForPortfolioInput & ListConstraintsForPortfolioInput)[K]
    }>): Request<ListConstraintsForPortfolioOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listConstraintsForPortfolio(
          this.ops["ListConstraintsForPortfolio"].applicator.apply(partialParams)
        );
    }

    invokeListLaunchPaths(partialParams: ToOptional<{
      [K in keyof ListLaunchPathsInput & keyof ListLaunchPathsInput & keyof ListLaunchPathsInput & keyof ListLaunchPathsInput & keyof ListLaunchPathsInput & keyof ListLaunchPathsInput]: (ListLaunchPathsInput & ListLaunchPathsInput & ListLaunchPathsInput & ListLaunchPathsInput & ListLaunchPathsInput & ListLaunchPathsInput)[K]
    }>): Request<ListLaunchPathsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listLaunchPaths(
          this.ops["ListLaunchPaths"].applicator.apply(partialParams)
        );
    }

    invokeListOrganizationPortfolioAccess(partialParams: ToOptional<{
      [K in keyof ListOrganizationPortfolioAccessInput & keyof ListOrganizationPortfolioAccessInput & keyof ListOrganizationPortfolioAccessInput & keyof ListOrganizationPortfolioAccessInput & keyof ListOrganizationPortfolioAccessInput & keyof ListOrganizationPortfolioAccessInput]: (ListOrganizationPortfolioAccessInput & ListOrganizationPortfolioAccessInput & ListOrganizationPortfolioAccessInput & ListOrganizationPortfolioAccessInput & ListOrganizationPortfolioAccessInput & ListOrganizationPortfolioAccessInput)[K]
    }>): Request<ListOrganizationPortfolioAccessOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listOrganizationPortfolioAccess(
          this.ops["ListOrganizationPortfolioAccess"].applicator.apply(partialParams)
        );
    }

    invokeListPortfolioAccess(partialParams: ToOptional<{
      [K in keyof ListPortfolioAccessInput & keyof ListPortfolioAccessInput & keyof ListPortfolioAccessInput & keyof ListPortfolioAccessInput & keyof ListPortfolioAccessInput & keyof ListPortfolioAccessInput]: (ListPortfolioAccessInput & ListPortfolioAccessInput & ListPortfolioAccessInput & ListPortfolioAccessInput & ListPortfolioAccessInput & ListPortfolioAccessInput)[K]
    }>): Request<ListPortfolioAccessOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPortfolioAccess(
          this.ops["ListPortfolioAccess"].applicator.apply(partialParams)
        );
    }

    invokeListPortfoliosForProduct(partialParams: ToOptional<{
      [K in keyof ListPortfoliosForProductInput & keyof ListPortfoliosForProductInput & keyof ListPortfoliosForProductInput & keyof ListPortfoliosForProductInput & keyof ListPortfoliosForProductInput & keyof ListPortfoliosForProductInput]: (ListPortfoliosForProductInput & ListPortfoliosForProductInput & ListPortfoliosForProductInput & ListPortfoliosForProductInput & ListPortfoliosForProductInput & ListPortfoliosForProductInput)[K]
    }>): Request<ListPortfoliosForProductOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPortfoliosForProduct(
          this.ops["ListPortfoliosForProduct"].applicator.apply(partialParams)
        );
    }

    invokeListPrincipalsForPortfolio(partialParams: ToOptional<{
      [K in keyof ListPrincipalsForPortfolioInput & keyof ListPrincipalsForPortfolioInput & keyof ListPrincipalsForPortfolioInput & keyof ListPrincipalsForPortfolioInput & keyof ListPrincipalsForPortfolioInput & keyof ListPrincipalsForPortfolioInput]: (ListPrincipalsForPortfolioInput & ListPrincipalsForPortfolioInput & ListPrincipalsForPortfolioInput & ListPrincipalsForPortfolioInput & ListPrincipalsForPortfolioInput & ListPrincipalsForPortfolioInput)[K]
    }>): Request<ListPrincipalsForPortfolioOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPrincipalsForPortfolio(
          this.ops["ListPrincipalsForPortfolio"].applicator.apply(partialParams)
        );
    }

    invokeListProvisioningArtifacts(partialParams: ToOptional<{
      [K in keyof ListProvisioningArtifactsInput & keyof ListProvisioningArtifactsInput & keyof ListProvisioningArtifactsInput & keyof ListProvisioningArtifactsInput & keyof ListProvisioningArtifactsInput & keyof ListProvisioningArtifactsInput]: (ListProvisioningArtifactsInput & ListProvisioningArtifactsInput & ListProvisioningArtifactsInput & ListProvisioningArtifactsInput & ListProvisioningArtifactsInput & ListProvisioningArtifactsInput)[K]
    }>): Request<ListProvisioningArtifactsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listProvisioningArtifacts(
          this.ops["ListProvisioningArtifacts"].applicator.apply(partialParams)
        );
    }

    invokeListProvisioningArtifactsForServiceAction(partialParams: ToOptional<{
      [K in keyof ListProvisioningArtifactsForServiceActionInput & keyof ListProvisioningArtifactsForServiceActionInput & keyof ListProvisioningArtifactsForServiceActionInput & keyof ListProvisioningArtifactsForServiceActionInput & keyof ListProvisioningArtifactsForServiceActionInput & keyof ListProvisioningArtifactsForServiceActionInput]: (ListProvisioningArtifactsForServiceActionInput & ListProvisioningArtifactsForServiceActionInput & ListProvisioningArtifactsForServiceActionInput & ListProvisioningArtifactsForServiceActionInput & ListProvisioningArtifactsForServiceActionInput & ListProvisioningArtifactsForServiceActionInput)[K]
    }>): Request<ListProvisioningArtifactsForServiceActionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listProvisioningArtifactsForServiceAction(
          this.ops["ListProvisioningArtifactsForServiceAction"].applicator.apply(partialParams)
        );
    }

    invokeListResourcesForTagOption(partialParams: ToOptional<{
      [K in keyof ListResourcesForTagOptionInput & keyof ListResourcesForTagOptionInput & keyof ListResourcesForTagOptionInput & keyof ListResourcesForTagOptionInput & keyof ListResourcesForTagOptionInput & keyof ListResourcesForTagOptionInput]: (ListResourcesForTagOptionInput & ListResourcesForTagOptionInput & ListResourcesForTagOptionInput & ListResourcesForTagOptionInput & ListResourcesForTagOptionInput & ListResourcesForTagOptionInput)[K]
    }>): Request<ListResourcesForTagOptionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listResourcesForTagOption(
          this.ops["ListResourcesForTagOption"].applicator.apply(partialParams)
        );
    }

    invokeListServiceActionsForProvisioningArtifact(partialParams: ToOptional<{
      [K in keyof ListServiceActionsForProvisioningArtifactInput & keyof ListServiceActionsForProvisioningArtifactInput & keyof ListServiceActionsForProvisioningArtifactInput & keyof ListServiceActionsForProvisioningArtifactInput & keyof ListServiceActionsForProvisioningArtifactInput & keyof ListServiceActionsForProvisioningArtifactInput]: (ListServiceActionsForProvisioningArtifactInput & ListServiceActionsForProvisioningArtifactInput & ListServiceActionsForProvisioningArtifactInput & ListServiceActionsForProvisioningArtifactInput & ListServiceActionsForProvisioningArtifactInput & ListServiceActionsForProvisioningArtifactInput)[K]
    }>): Request<ListServiceActionsForProvisioningArtifactOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listServiceActionsForProvisioningArtifact(
          this.ops["ListServiceActionsForProvisioningArtifact"].applicator.apply(partialParams)
        );
    }

    invokeListStackInstancesForProvisionedProduct(partialParams: ToOptional<{
      [K in keyof ListStackInstancesForProvisionedProductInput & keyof ListStackInstancesForProvisionedProductInput & keyof ListStackInstancesForProvisionedProductInput & keyof ListStackInstancesForProvisionedProductInput & keyof ListStackInstancesForProvisionedProductInput & keyof ListStackInstancesForProvisionedProductInput]: (ListStackInstancesForProvisionedProductInput & ListStackInstancesForProvisionedProductInput & ListStackInstancesForProvisionedProductInput & ListStackInstancesForProvisionedProductInput & ListStackInstancesForProvisionedProductInput & ListStackInstancesForProvisionedProductInput)[K]
    }>): Request<ListStackInstancesForProvisionedProductOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listStackInstancesForProvisionedProduct(
          this.ops["ListStackInstancesForProvisionedProduct"].applicator.apply(partialParams)
        );
    }

    invokeProvisionProduct(partialParams: ToOptional<{
      [K in keyof ProvisionProductInput & keyof ProvisionProductInput & keyof ProvisionProductInput & keyof ProvisionProductInput & keyof ProvisionProductInput & keyof ProvisionProductInput]: (ProvisionProductInput & ProvisionProductInput & ProvisionProductInput & ProvisionProductInput & ProvisionProductInput & ProvisionProductInput)[K]
    }>): Request<ProvisionProductOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.provisionProduct(
          this.ops["ProvisionProduct"].applicator.apply(partialParams)
        );
    }

    invokeRejectPortfolioShare(partialParams: ToOptional<{
      [K in keyof RejectPortfolioShareInput & keyof RejectPortfolioShareInput & keyof RejectPortfolioShareInput & keyof RejectPortfolioShareInput & keyof RejectPortfolioShareInput & keyof RejectPortfolioShareInput]: (RejectPortfolioShareInput & RejectPortfolioShareInput & RejectPortfolioShareInput & RejectPortfolioShareInput & RejectPortfolioShareInput & RejectPortfolioShareInput)[K]
    }>): Request<RejectPortfolioShareOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rejectPortfolioShare(
          this.ops["RejectPortfolioShare"].applicator.apply(partialParams)
        );
    }

    invokeTerminateProvisionedProduct(partialParams: ToOptional<{
      [K in keyof TerminateProvisionedProductInput & keyof TerminateProvisionedProductInput & keyof TerminateProvisionedProductInput & keyof TerminateProvisionedProductInput & keyof TerminateProvisionedProductInput & keyof TerminateProvisionedProductInput]: (TerminateProvisionedProductInput & TerminateProvisionedProductInput & TerminateProvisionedProductInput & TerminateProvisionedProductInput & TerminateProvisionedProductInput & TerminateProvisionedProductInput)[K]
    }>): Request<TerminateProvisionedProductOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.terminateProvisionedProduct(
          this.ops["TerminateProvisionedProduct"].applicator.apply(partialParams)
        );
    }

    invokeUpdateConstraint(partialParams: ToOptional<{
      [K in keyof UpdateConstraintInput & keyof UpdateConstraintInput & keyof UpdateConstraintInput & keyof UpdateConstraintInput & keyof UpdateConstraintInput & keyof UpdateConstraintInput]: (UpdateConstraintInput & UpdateConstraintInput & UpdateConstraintInput & UpdateConstraintInput & UpdateConstraintInput & UpdateConstraintInput)[K]
    }>): Request<UpdateConstraintOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateConstraint(
          this.ops["UpdateConstraint"].applicator.apply(partialParams)
        );
    }

    invokeUpdatePortfolio(partialParams: ToOptional<{
      [K in keyof UpdatePortfolioInput & keyof UpdatePortfolioInput & keyof UpdatePortfolioInput & keyof UpdatePortfolioInput & keyof UpdatePortfolioInput & keyof UpdatePortfolioInput]: (UpdatePortfolioInput & UpdatePortfolioInput & UpdatePortfolioInput & UpdatePortfolioInput & UpdatePortfolioInput & UpdatePortfolioInput)[K]
    }>): Request<UpdatePortfolioOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePortfolio(
          this.ops["UpdatePortfolio"].applicator.apply(partialParams)
        );
    }

    invokeUpdatePortfolioShare(partialParams: ToOptional<{
      [K in keyof UpdatePortfolioShareInput & keyof UpdatePortfolioShareInput & keyof UpdatePortfolioShareInput & keyof UpdatePortfolioShareInput & keyof UpdatePortfolioShareInput & keyof UpdatePortfolioShareInput]: (UpdatePortfolioShareInput & UpdatePortfolioShareInput & UpdatePortfolioShareInput & UpdatePortfolioShareInput & UpdatePortfolioShareInput & UpdatePortfolioShareInput)[K]
    }>): Request<UpdatePortfolioShareOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePortfolioShare(
          this.ops["UpdatePortfolioShare"].applicator.apply(partialParams)
        );
    }

    invokeUpdateProduct(partialParams: ToOptional<{
      [K in keyof UpdateProductInput & keyof UpdateProductInput & keyof UpdateProductInput & keyof UpdateProductInput & keyof UpdateProductInput & keyof UpdateProductInput]: (UpdateProductInput & UpdateProductInput & UpdateProductInput & UpdateProductInput & UpdateProductInput & UpdateProductInput)[K]
    }>): Request<UpdateProductOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateProduct(
          this.ops["UpdateProduct"].applicator.apply(partialParams)
        );
    }

    invokeUpdateProvisionedProduct(partialParams: ToOptional<{
      [K in keyof UpdateProvisionedProductInput & keyof UpdateProvisionedProductInput & keyof UpdateProvisionedProductInput & keyof UpdateProvisionedProductInput & keyof UpdateProvisionedProductInput & keyof UpdateProvisionedProductInput]: (UpdateProvisionedProductInput & UpdateProvisionedProductInput & UpdateProvisionedProductInput & UpdateProvisionedProductInput & UpdateProvisionedProductInput & UpdateProvisionedProductInput)[K]
    }>): Request<UpdateProvisionedProductOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateProvisionedProduct(
          this.ops["UpdateProvisionedProduct"].applicator.apply(partialParams)
        );
    }

    invokeUpdateProvisionedProductProperties(partialParams: ToOptional<{
      [K in keyof UpdateProvisionedProductPropertiesInput & keyof UpdateProvisionedProductPropertiesInput & keyof UpdateProvisionedProductPropertiesInput & keyof UpdateProvisionedProductPropertiesInput & keyof UpdateProvisionedProductPropertiesInput & keyof UpdateProvisionedProductPropertiesInput]: (UpdateProvisionedProductPropertiesInput & UpdateProvisionedProductPropertiesInput & UpdateProvisionedProductPropertiesInput & UpdateProvisionedProductPropertiesInput & UpdateProvisionedProductPropertiesInput & UpdateProvisionedProductPropertiesInput)[K]
    }>): Request<UpdateProvisionedProductPropertiesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateProvisionedProductProperties(
          this.ops["UpdateProvisionedProductProperties"].applicator.apply(partialParams)
        );
    }

    invokeUpdateProvisioningArtifact(partialParams: ToOptional<{
      [K in keyof UpdateProvisioningArtifactInput & keyof UpdateProvisioningArtifactInput & keyof UpdateProvisioningArtifactInput & keyof UpdateProvisioningArtifactInput & keyof UpdateProvisioningArtifactInput & keyof UpdateProvisioningArtifactInput]: (UpdateProvisioningArtifactInput & UpdateProvisioningArtifactInput & UpdateProvisioningArtifactInput & UpdateProvisioningArtifactInput & UpdateProvisioningArtifactInput & UpdateProvisioningArtifactInput)[K]
    }>): Request<UpdateProvisioningArtifactOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateProvisioningArtifact(
          this.ops["UpdateProvisioningArtifact"].applicator.apply(partialParams)
        );
    }

    invokeUpdateServiceAction(partialParams: ToOptional<{
      [K in keyof UpdateServiceActionInput & keyof UpdateServiceActionInput & keyof UpdateServiceActionInput & keyof UpdateServiceActionInput & keyof UpdateServiceActionInput & keyof UpdateServiceActionInput]: (UpdateServiceActionInput & UpdateServiceActionInput & UpdateServiceActionInput & UpdateServiceActionInput & UpdateServiceActionInput & UpdateServiceActionInput)[K]
    }>): Request<UpdateServiceActionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateServiceAction(
          this.ops["UpdateServiceAction"].applicator.apply(partialParams)
        );
    }

    invokeUpdateTagOption(partialParams: ToOptional<{
      [K in keyof UpdateTagOptionInput & keyof UpdateTagOptionInput & keyof UpdateTagOptionInput & keyof UpdateTagOptionInput & keyof UpdateTagOptionInput & keyof Omit<UpdateTagOptionInput, "Id">]: (UpdateTagOptionInput & UpdateTagOptionInput & UpdateTagOptionInput & UpdateTagOptionInput & UpdateTagOptionInput & Omit<UpdateTagOptionInput, "Id">)[K]
    }>): Request<UpdateTagOptionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTagOption(
          this.ops["UpdateTagOption"].applicator.apply(partialParams)
        );
    }
}