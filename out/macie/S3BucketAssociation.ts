
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AssociateMemberAccountRequest,
    AssociateS3ResourcesRequest,
    DisassociateMemberAccountRequest,
    DisassociateS3ResourcesRequest,
    UpdateS3ResourcesRequest,
    AssociateS3ResourcesResult,
    DisassociateS3ResourcesResult,
    UpdateS3ResourcesResult
} from "aws-sdk/clients/macie";
const schema = require("../apis/macie-2017-12-19.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.macie.S3BucketAssociation {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.macie.S3BucketAssociation>) {
        super(...args)
        this.client = new awssdk.Macie()
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

    invokeAssociateMemberAccount(partialParams: ToOptional<{
      [K in keyof AssociateMemberAccountRequest & keyof Omit<AssociateMemberAccountRequest, "memberAccountId"> & keyof AssociateMemberAccountRequest]: (AssociateMemberAccountRequest & Omit<AssociateMemberAccountRequest, "memberAccountId"> & AssociateMemberAccountRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateMemberAccount(
          this.ops["AssociateMemberAccount"].applicator.apply(partialParams)
        );
    }

    invokeAssociateS3Resources(partialParams: ToOptional<{
      [K in keyof AssociateS3ResourcesRequest & keyof AssociateS3ResourcesRequest & keyof AssociateS3ResourcesRequest]: (AssociateS3ResourcesRequest & AssociateS3ResourcesRequest & AssociateS3ResourcesRequest)[K]
    }>): Request<AssociateS3ResourcesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateS3Resources(
          this.ops["AssociateS3Resources"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateMemberAccount(partialParams: ToOptional<{
      [K in keyof DisassociateMemberAccountRequest & keyof Omit<DisassociateMemberAccountRequest, "memberAccountId"> & keyof DisassociateMemberAccountRequest]: (DisassociateMemberAccountRequest & Omit<DisassociateMemberAccountRequest, "memberAccountId"> & DisassociateMemberAccountRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateMemberAccount(
          this.ops["DisassociateMemberAccount"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateS3Resources(partialParams: ToOptional<{
      [K in keyof DisassociateS3ResourcesRequest & keyof DisassociateS3ResourcesRequest & keyof DisassociateS3ResourcesRequest]: (DisassociateS3ResourcesRequest & DisassociateS3ResourcesRequest & DisassociateS3ResourcesRequest)[K]
    }>): Request<DisassociateS3ResourcesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateS3Resources(
          this.ops["DisassociateS3Resources"].applicator.apply(partialParams)
        );
    }

    invokeUpdateS3Resources(partialParams: ToOptional<{
      [K in keyof UpdateS3ResourcesRequest & keyof UpdateS3ResourcesRequest & keyof UpdateS3ResourcesRequest]: (UpdateS3ResourcesRequest & UpdateS3ResourcesRequest & UpdateS3ResourcesRequest)[K]
    }>): Request<UpdateS3ResourcesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateS3Resources(
          this.ops["UpdateS3Resources"].applicator.apply(partialParams)
        );
    }
}