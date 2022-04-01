
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AssociateBudgetWithResourceInput,
    AssociateTagOptionWithResourceInput,
    DisassociateBudgetFromResourceInput,
    DisassociateTagOptionFromResourceInput,
    ListBudgetsForResourceInput,
    ListResourcesForTagOptionInput,
    AssociateBudgetWithResourceOutput,
    AssociateTagOptionWithResourceOutput,
    DisassociateBudgetFromResourceOutput,
    DisassociateTagOptionFromResourceOutput,
    ListBudgetsForResourceOutput,
    ListResourcesForTagOptionOutput
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
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.servicecatalog.TagOptionResourceAssociation>) {
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

    invokeAssociateBudgetWithResource(partialParams: ToOptional<{
      [K in keyof AssociateBudgetWithResourceInput & keyof Omit<AssociateBudgetWithResourceInput, "ResourceId">]: (AssociateBudgetWithResourceInput)[K]
    }>): Request<AssociateBudgetWithResourceOutput, AWSError> {
        this.boot();
        return this.client.associateBudgetWithResource(
          this.ops["AssociateBudgetWithResource"].apply(partialParams)
        );
    }

    invokeAssociateTagOptionWithResource(partialParams: ToOptional<{
      [K in keyof AssociateTagOptionWithResourceInput & keyof Omit<AssociateTagOptionWithResourceInput, "ResourceId" | "TagOptionId">]: (AssociateTagOptionWithResourceInput)[K]
    }>): Request<AssociateTagOptionWithResourceOutput, AWSError> {
        this.boot();
        return this.client.associateTagOptionWithResource(
          this.ops["AssociateTagOptionWithResource"].apply(partialParams)
        );
    }

    invokeDisassociateBudgetFromResource(partialParams: ToOptional<{
      [K in keyof DisassociateBudgetFromResourceInput & keyof Omit<DisassociateBudgetFromResourceInput, "ResourceId">]: (DisassociateBudgetFromResourceInput)[K]
    }>): Request<DisassociateBudgetFromResourceOutput, AWSError> {
        this.boot();
        return this.client.disassociateBudgetFromResource(
          this.ops["DisassociateBudgetFromResource"].apply(partialParams)
        );
    }

    invokeDisassociateTagOptionFromResource(partialParams: ToOptional<{
      [K in keyof DisassociateTagOptionFromResourceInput & keyof Omit<DisassociateTagOptionFromResourceInput, "ResourceId" | "TagOptionId">]: (DisassociateTagOptionFromResourceInput)[K]
    }>): Request<DisassociateTagOptionFromResourceOutput, AWSError> {
        this.boot();
        return this.client.disassociateTagOptionFromResource(
          this.ops["DisassociateTagOptionFromResource"].apply(partialParams)
        );
    }

    invokeListBudgetsForResource(partialParams: ToOptional<{
      [K in keyof ListBudgetsForResourceInput & keyof Omit<ListBudgetsForResourceInput, "ResourceId">]: (ListBudgetsForResourceInput)[K]
    }>): Request<ListBudgetsForResourceOutput, AWSError> {
        this.boot();
        return this.client.listBudgetsForResource(
          this.ops["ListBudgetsForResource"].apply(partialParams)
        );
    }

    invokeListResourcesForTagOption(partialParams: ToOptional<{
      [K in keyof ListResourcesForTagOptionInput & keyof Omit<ListResourcesForTagOptionInput, "TagOptionId">]: (ListResourcesForTagOptionInput)[K]
    }>): Request<ListResourcesForTagOptionOutput, AWSError> {
        this.boot();
        return this.client.listResourcesForTagOption(
          this.ops["ListResourcesForTagOption"].apply(partialParams)
        );
    }
}