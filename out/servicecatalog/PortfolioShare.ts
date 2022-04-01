
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AcceptPortfolioShareInput,
    AssociatePrincipalWithPortfolioInput,
    AssociateProductWithPortfolioInput,
    CreateConstraintInput,
    CreatePortfolioShareInput,
    DeletePortfolioShareInput,
    DescribePortfolioSharesInput,
    DisassociatePrincipalFromPortfolioInput,
    DisassociateProductFromPortfolioInput,
    ListConstraintsForPortfolioInput,
    ListOrganizationPortfolioAccessInput,
    ListPortfolioAccessInput,
    ListPrincipalsForPortfolioInput,
    RejectPortfolioShareInput,
    UpdatePortfolioShareInput,
    AcceptPortfolioShareOutput,
    AssociatePrincipalWithPortfolioOutput,
    AssociateProductWithPortfolioOutput,
    CreateConstraintOutput,
    CreatePortfolioShareOutput,
    DeletePortfolioShareOutput,
    DescribePortfolioSharesOutput,
    DisassociatePrincipalFromPortfolioOutput,
    DisassociateProductFromPortfolioOutput,
    ListConstraintsForPortfolioOutput,
    ListOrganizationPortfolioAccessOutput,
    ListPortfolioAccessOutput,
    ListPrincipalsForPortfolioOutput,
    RejectPortfolioShareOutput,
    UpdatePortfolioShareOutput
} from "aws-sdk/clients/servicecatalog";
const schema = require("../apis/servicecatalog-2015-12-10.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.servicecatalog.PortfolioShare {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.servicecatalog.PortfolioShare>) {
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
      [K in keyof AssociateProductWithPortfolioInput & keyof Omit<AssociateProductWithPortfolioInput, "PortfolioId">]: (AssociateProductWithPortfolioInput)[K]
    }>): Request<AssociateProductWithPortfolioOutput, AWSError> {
        this.boot();
        return this.client.associateProductWithPortfolio(
          this.ops["AssociateProductWithPortfolio"].apply(partialParams)
        );
    }

    invokeCreateConstraint(partialParams: ToOptional<{
      [K in keyof CreateConstraintInput & keyof Omit<CreateConstraintInput, "PortfolioId" | "Type">]: (CreateConstraintInput)[K]
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

    invokeDeletePortfolioShare(partialParams: ToOptional<{
      [K in keyof DeletePortfolioShareInput & keyof Omit<DeletePortfolioShareInput, "PortfolioId">]: (DeletePortfolioShareInput)[K]
    }>): Request<DeletePortfolioShareOutput, AWSError> {
        this.boot();
        return this.client.deletePortfolioShare(
          this.ops["DeletePortfolioShare"].apply(partialParams)
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
      [K in keyof DisassociateProductFromPortfolioInput & keyof Omit<DisassociateProductFromPortfolioInput, "PortfolioId">]: (DisassociateProductFromPortfolioInput)[K]
    }>): Request<DisassociateProductFromPortfolioOutput, AWSError> {
        this.boot();
        return this.client.disassociateProductFromPortfolio(
          this.ops["DisassociateProductFromPortfolio"].apply(partialParams)
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

    invokeListPrincipalsForPortfolio(partialParams: ToOptional<{
      [K in keyof ListPrincipalsForPortfolioInput & keyof Omit<ListPrincipalsForPortfolioInput, "PortfolioId">]: (ListPrincipalsForPortfolioInput)[K]
    }>): Request<ListPrincipalsForPortfolioOutput, AWSError> {
        this.boot();
        return this.client.listPrincipalsForPortfolio(
          this.ops["ListPrincipalsForPortfolio"].apply(partialParams)
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
}