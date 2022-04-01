
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateConstraintInput,
    CreateProductInput,
    CreateServiceActionInput,
    DescribePortfolioSharesInput,
    CreateConstraintOutput,
    CreateProductOutput,
    CreateServiceActionOutput,
    DescribePortfolioSharesOutput
} from "aws-sdk/clients/servicecatalog";
const schema = require("../apis/servicecatalog-2015-12-10.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.servicecatalog.Product {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.servicecatalog.Product>) {
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

    invokeCreateConstraint(partialParams: ToOptional<{
      [K in keyof CreateConstraintInput & keyof Omit<CreateConstraintInput, "Type">]: (CreateConstraintInput)[K]
    }>): Request<CreateConstraintOutput, AWSError> {
        this.boot();
        return this.client.createConstraint(
          this.ops["CreateConstraint"].apply(partialParams)
        );
    }

    invokeCreateProduct(partialParams: ToOptional<{
      [K in keyof CreateProductInput & keyof Omit<CreateProductInput, "Name" | "Owner" | "ProductType">]: (CreateProductInput)[K]
    }>): Request<CreateProductOutput, AWSError> {
        this.boot();
        return this.client.createProduct(
          this.ops["CreateProduct"].apply(partialParams)
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

    invokeDescribePortfolioShares(partialParams: ToOptional<{
      [K in keyof DescribePortfolioSharesInput & keyof Omit<DescribePortfolioSharesInput, "Type">]: (DescribePortfolioSharesInput)[K]
    }>): Request<DescribePortfolioSharesOutput, AWSError> {
        this.boot();
        return this.client.describePortfolioShares(
          this.ops["DescribePortfolioShares"].apply(partialParams)
        );
    }
}