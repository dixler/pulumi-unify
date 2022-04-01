
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AcceptPortfolioShareInput,
    AssociatePrincipalWithPortfolioInput,
    AssociateProductWithPortfolioInput,
    AssociateServiceActionWithProvisioningArtifactInput,
    CreateConstraintInput,
    CreatePortfolioShareInput,
    CreateProductInput,
    CreateProvisionedProductPlanInput,
    CreateProvisioningArtifactInput,
    DeletePortfolioShareInput,
    DeleteProvisioningArtifactInput,
    DescribePortfolioSharesInput,
    DisassociatePrincipalFromPortfolioInput,
    DisassociateProductFromPortfolioInput,
    DisassociateServiceActionFromProvisioningArtifactInput,
    ImportAsProvisionedProductInput,
    ListConstraintsForPortfolioInput,
    ListLaunchPathsInput,
    ListOrganizationPortfolioAccessInput,
    ListPortfolioAccessInput,
    ListPortfoliosForProductInput,
    ListPrincipalsForPortfolioInput,
    ListProvisioningArtifactsInput,
    ListServiceActionsForProvisioningArtifactInput,
    RejectPortfolioShareInput,
    UpdatePortfolioShareInput,
    UpdateProvisioningArtifactInput,
    AcceptPortfolioShareOutput,
    AssociatePrincipalWithPortfolioOutput,
    AssociateProductWithPortfolioOutput,
    AssociateServiceActionWithProvisioningArtifactOutput,
    CreateConstraintOutput,
    CreatePortfolioShareOutput,
    CreateProductOutput,
    CreateProvisionedProductPlanOutput,
    CreateProvisioningArtifactOutput,
    DeletePortfolioShareOutput,
    DeleteProvisioningArtifactOutput,
    DescribePortfolioSharesOutput,
    DisassociatePrincipalFromPortfolioOutput,
    DisassociateProductFromPortfolioOutput,
    DisassociateServiceActionFromProvisioningArtifactOutput,
    ImportAsProvisionedProductOutput,
    ListConstraintsForPortfolioOutput,
    ListLaunchPathsOutput,
    ListOrganizationPortfolioAccessOutput,
    ListPortfolioAccessOutput,
    ListPortfoliosForProductOutput,
    ListPrincipalsForPortfolioOutput,
    ListProvisioningArtifactsOutput,
    ListServiceActionsForProvisioningArtifactOutput,
    RejectPortfolioShareOutput,
    UpdatePortfolioShareOutput,
    UpdateProvisioningArtifactOutput
} from "aws-sdk/clients/servicecatalog";
const schema = require("../apis/servicecatalog-2015-12-10.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.servicecatalog.Constraint {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.servicecatalog.Constraint>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.ServiceCatalog()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
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
      [K in keyof AcceptPortfolioShareInput & keyof Omit<AcceptPortfolioShareInput, "PortfolioId">]: (AcceptPortfolioShareInput)[K]
    }>): Request<AcceptPortfolioShareOutput, AWSError> {
        this.boot();
        return this.client.acceptPortfolioShare(
          this.ops["AcceptPortfolioShare"].apply(partialParams)
        );
    }

    invokeAssociatePrincipalWithPortfolio(partialParams: ToOptional<{
      [K in keyof AssociatePrincipalWithPortfolioInput & keyof Omit<AssociatePrincipalWithPortfolioInput, "PortfolioId">]: (AssociatePrincipalWithPortfolioInput)[K]
    }>): Request<AssociatePrincipalWithPortfolioOutput, AWSError> {
        this.boot();
        return this.client.associatePrincipalWithPortfolio(
          this.ops["AssociatePrincipalWithPortfolio"].apply(partialParams)
        );
    }

    invokeAssociateProductWithPortfolio(partialParams: ToOptional<{
      [K in keyof AssociateProductWithPortfolioInput & keyof Omit<AssociateProductWithPortfolioInput, "ProductId" | "PortfolioId">]: (AssociateProductWithPortfolioInput)[K]
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

    invokeCreateConstraint(partialParams: ToOptional<{
      [K in keyof CreateConstraintInput & keyof Omit<CreateConstraintInput, "PortfolioId" | "ProductId" | "Parameters" | "Type">]: (CreateConstraintInput)[K]
    }>): Request<CreateConstraintOutput, AWSError> {
        this.boot();
        return this.client.createConstraint(
          this.ops["CreateConstraint"].apply(partialParams)
        );
    }

    invokeCreatePortfolioShare(partialParams: ToOptional<{
      [K in keyof CreatePortfolioShareInput & keyof Omit<CreatePortfolioShareInput, "PortfolioId">]: (CreatePortfolioShareInput)[K]
    }>): Request<CreatePortfolioShareOutput, AWSError> {
        this.boot();
        return this.client.createPortfolioShare(
          this.ops["CreatePortfolioShare"].apply(partialParams)
        );
    }

    invokeCreateProduct(partialParams: ToOptional<{
      [K in keyof CreateProductInput & keyof Omit<CreateProductInput, "Owner">]: (CreateProductInput)[K]
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
      [K in keyof CreateProvisioningArtifactInput & keyof Omit<CreateProvisioningArtifactInput, "ProductId" | "Parameters">]: (CreateProvisioningArtifactInput)[K]
    }>): Request<CreateProvisioningArtifactOutput, AWSError> {
        this.boot();
        return this.client.createProvisioningArtifact(
          this.ops["CreateProvisioningArtifact"].apply(partialParams)
        );
    }

    invokeDeletePortfolioShare(partialParams: ToOptional<{
      [K in keyof DeletePortfolioShareInput & keyof Omit<DeletePortfolioShareInput, "PortfolioId">]: (DeletePortfolioShareInput)[K]
    }>): Request<DeletePortfolioShareOutput, AWSError> {
        this.boot();
        return this.client.deletePortfolioShare(
          this.ops["DeletePortfolioShare"].apply(partialParams)
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

    invokeDescribePortfolioShares(partialParams: ToOptional<{
      [K in keyof DescribePortfolioSharesInput & keyof Omit<DescribePortfolioSharesInput, "PortfolioId" | "Type">]: (DescribePortfolioSharesInput)[K]
    }>): Request<DescribePortfolioSharesOutput, AWSError> {
        this.boot();
        return this.client.describePortfolioShares(
          this.ops["DescribePortfolioShares"].apply(partialParams)
        );
    }

    invokeDisassociatePrincipalFromPortfolio(partialParams: ToOptional<{
      [K in keyof DisassociatePrincipalFromPortfolioInput & keyof Omit<DisassociatePrincipalFromPortfolioInput, "PortfolioId">]: (DisassociatePrincipalFromPortfolioInput)[K]
    }>): Request<DisassociatePrincipalFromPortfolioOutput, AWSError> {
        this.boot();
        return this.client.disassociatePrincipalFromPortfolio(
          this.ops["DisassociatePrincipalFromPortfolio"].apply(partialParams)
        );
    }

    invokeDisassociateProductFromPortfolio(partialParams: ToOptional<{
      [K in keyof DisassociateProductFromPortfolioInput & keyof Omit<DisassociateProductFromPortfolioInput, "ProductId" | "PortfolioId">]: (DisassociateProductFromPortfolioInput)[K]
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

    invokeImportAsProvisionedProduct(partialParams: ToOptional<{
      [K in keyof ImportAsProvisionedProductInput & keyof Omit<ImportAsProvisionedProductInput, "ProductId">]: (ImportAsProvisionedProductInput)[K]
    }>): Request<ImportAsProvisionedProductOutput, AWSError> {
        this.boot();
        return this.client.importAsProvisionedProduct(
          this.ops["ImportAsProvisionedProduct"].apply(partialParams)
        );
    }

    invokeListConstraintsForPortfolio(partialParams: ToOptional<{
      [K in keyof ListConstraintsForPortfolioInput & keyof Omit<ListConstraintsForPortfolioInput, "PortfolioId">]: (ListConstraintsForPortfolioInput)[K]
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
      [K in keyof ListOrganizationPortfolioAccessInput & keyof Omit<ListOrganizationPortfolioAccessInput, "PortfolioId">]: (ListOrganizationPortfolioAccessInput)[K]
    }>): Request<ListOrganizationPortfolioAccessOutput, AWSError> {
        this.boot();
        return this.client.listOrganizationPortfolioAccess(
          this.ops["ListOrganizationPortfolioAccess"].apply(partialParams)
        );
    }

    invokeListPortfolioAccess(partialParams: ToOptional<{
      [K in keyof ListPortfolioAccessInput & keyof Omit<ListPortfolioAccessInput, "PortfolioId">]: (ListPortfolioAccessInput)[K]
    }>): Request<ListPortfolioAccessOutput, AWSError> {
        this.boot();
        return this.client.listPortfolioAccess(
          this.ops["ListPortfolioAccess"].apply(partialParams)
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
      [K in keyof ListPrincipalsForPortfolioInput & keyof Omit<ListPrincipalsForPortfolioInput, "PortfolioId">]: (ListPrincipalsForPortfolioInput)[K]
    }>): Request<ListPrincipalsForPortfolioOutput, AWSError> {
        this.boot();
        return this.client.listPrincipalsForPortfolio(
          this.ops["ListPrincipalsForPortfolio"].apply(partialParams)
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

    invokeListServiceActionsForProvisioningArtifact(partialParams: ToOptional<{
      [K in keyof ListServiceActionsForProvisioningArtifactInput & keyof Omit<ListServiceActionsForProvisioningArtifactInput, "ProductId">]: (ListServiceActionsForProvisioningArtifactInput)[K]
    }>): Request<ListServiceActionsForProvisioningArtifactOutput, AWSError> {
        this.boot();
        return this.client.listServiceActionsForProvisioningArtifact(
          this.ops["ListServiceActionsForProvisioningArtifact"].apply(partialParams)
        );
    }

    invokeRejectPortfolioShare(partialParams: ToOptional<{
      [K in keyof RejectPortfolioShareInput & keyof Omit<RejectPortfolioShareInput, "PortfolioId">]: (RejectPortfolioShareInput)[K]
    }>): Request<RejectPortfolioShareOutput, AWSError> {
        this.boot();
        return this.client.rejectPortfolioShare(
          this.ops["RejectPortfolioShare"].apply(partialParams)
        );
    }

    invokeUpdatePortfolioShare(partialParams: ToOptional<{
      [K in keyof UpdatePortfolioShareInput & keyof Omit<UpdatePortfolioShareInput, "PortfolioId">]: (UpdatePortfolioShareInput)[K]
    }>): Request<UpdatePortfolioShareOutput, AWSError> {
        this.boot();
        return this.client.updatePortfolioShare(
          this.ops["UpdatePortfolioShare"].apply(partialParams)
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
}