
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.macie.CustomDataIdentifier {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.macie.CustomDataIdentifier>) {
        super(...args)
        this.client = new awssdk.Macie()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/macie-2017-12-19.normal.json"), this.client)
    }

    invokeAssociateMemberAccount(partialParams: ToOptional<{
      [K in keyof AssociateMemberAccountRequest & keyof AssociateMemberAccountRequest & keyof AssociateMemberAccountRequest & keyof AssociateMemberAccountRequest & keyof AssociateMemberAccountRequest & keyof AssociateMemberAccountRequest]: (AssociateMemberAccountRequest & AssociateMemberAccountRequest & AssociateMemberAccountRequest & AssociateMemberAccountRequest & AssociateMemberAccountRequest & AssociateMemberAccountRequest)[K]
    }>): void {
        return this.client.associateMemberAccount(
            this.ops["AssociateMemberAccount"].apply(partialParams)
        );
    }

    invokeAssociateS3Resources(partialParams: ToOptional<{
      [K in keyof AssociateS3ResourcesRequest & keyof AssociateS3ResourcesRequest & keyof AssociateS3ResourcesRequest & keyof AssociateS3ResourcesRequest & keyof AssociateS3ResourcesRequest & keyof AssociateS3ResourcesRequest]: (AssociateS3ResourcesRequest & AssociateS3ResourcesRequest & AssociateS3ResourcesRequest & AssociateS3ResourcesRequest & AssociateS3ResourcesRequest & AssociateS3ResourcesRequest)[K]
    }>): AssociateS3ResourcesResult {
        return this.client.associateS3Resources(
            this.ops["AssociateS3Resources"].apply(partialParams)
        );
    }

    invokeDisassociateMemberAccount(partialParams: ToOptional<{
      [K in keyof DisassociateMemberAccountRequest & keyof DisassociateMemberAccountRequest & keyof DisassociateMemberAccountRequest & keyof DisassociateMemberAccountRequest & keyof DisassociateMemberAccountRequest & keyof DisassociateMemberAccountRequest]: (DisassociateMemberAccountRequest & DisassociateMemberAccountRequest & DisassociateMemberAccountRequest & DisassociateMemberAccountRequest & DisassociateMemberAccountRequest & DisassociateMemberAccountRequest)[K]
    }>): void {
        return this.client.disassociateMemberAccount(
            this.ops["DisassociateMemberAccount"].apply(partialParams)
        );
    }

    invokeDisassociateS3Resources(partialParams: ToOptional<{
      [K in keyof DisassociateS3ResourcesRequest & keyof DisassociateS3ResourcesRequest & keyof DisassociateS3ResourcesRequest & keyof DisassociateS3ResourcesRequest & keyof DisassociateS3ResourcesRequest & keyof DisassociateS3ResourcesRequest]: (DisassociateS3ResourcesRequest & DisassociateS3ResourcesRequest & DisassociateS3ResourcesRequest & DisassociateS3ResourcesRequest & DisassociateS3ResourcesRequest & DisassociateS3ResourcesRequest)[K]
    }>): DisassociateS3ResourcesResult {
        return this.client.disassociateS3Resources(
            this.ops["DisassociateS3Resources"].apply(partialParams)
        );
    }

    invokeUpdateS3Resources(partialParams: ToOptional<{
      [K in keyof UpdateS3ResourcesRequest & keyof UpdateS3ResourcesRequest & keyof UpdateS3ResourcesRequest & keyof UpdateS3ResourcesRequest & keyof UpdateS3ResourcesRequest & keyof UpdateS3ResourcesRequest]: (UpdateS3ResourcesRequest & UpdateS3ResourcesRequest & UpdateS3ResourcesRequest & UpdateS3ResourcesRequest & UpdateS3ResourcesRequest & UpdateS3ResourcesRequest)[K]
    }>): UpdateS3ResourcesResult {
        return this.client.updateS3Resources(
            this.ops["UpdateS3Resources"].apply(partialParams)
        );
    }
}