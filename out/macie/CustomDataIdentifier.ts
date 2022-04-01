
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AssociateS3ResourcesRequest,
    DisassociateS3ResourcesRequest,
    ListMemberAccountsRequest,
    ListS3ResourcesRequest,
    UpdateS3ResourcesRequest,
    AssociateS3ResourcesResult,
    DisassociateS3ResourcesResult,
    ListMemberAccountsResult,
    ListS3ResourcesResult,
    UpdateS3ResourcesResult
} from "aws-sdk/clients/macie";
const schema = require("../apis/macie-2017-12-19.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.macie.CustomDataIdentifier {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.macie.CustomDataIdentifier>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Macie()
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

    invokeAssociateS3Resources(partialParams: ToOptional<{
      [K in keyof AssociateS3ResourcesRequest]: (AssociateS3ResourcesRequest)[K]
    }>): Request<AssociateS3ResourcesResult, AWSError> {
        this.boot();
        return this.client.associateS3Resources(
          this.ops["AssociateS3Resources"].apply(partialParams)
        );
    }

    invokeDisassociateS3Resources(partialParams: ToOptional<{
      [K in keyof DisassociateS3ResourcesRequest]: (DisassociateS3ResourcesRequest)[K]
    }>): Request<DisassociateS3ResourcesResult, AWSError> {
        this.boot();
        return this.client.disassociateS3Resources(
          this.ops["DisassociateS3Resources"].apply(partialParams)
        );
    }

    invokeListMemberAccounts(partialParams: ToOptional<{
      [K in keyof ListMemberAccountsRequest]: (ListMemberAccountsRequest)[K]
    }>): Request<ListMemberAccountsResult, AWSError> {
        this.boot();
        return this.client.listMemberAccounts(
          this.ops["ListMemberAccounts"].apply(partialParams)
        );
    }

    invokeListS3Resources(partialParams: ToOptional<{
      [K in keyof ListS3ResourcesRequest]: (ListS3ResourcesRequest)[K]
    }>): Request<ListS3ResourcesResult, AWSError> {
        this.boot();
        return this.client.listS3Resources(
          this.ops["ListS3Resources"].apply(partialParams)
        );
    }

    invokeUpdateS3Resources(partialParams: ToOptional<{
      [K in keyof UpdateS3ResourcesRequest]: (UpdateS3ResourcesRequest)[K]
    }>): Request<UpdateS3ResourcesResult, AWSError> {
        this.boot();
        return this.client.updateS3Resources(
          this.ops["UpdateS3Resources"].apply(partialParams)
        );
    }
}