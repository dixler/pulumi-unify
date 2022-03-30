
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    DeleteAlternateContactRequest,
    GetAlternateContactRequest,
    PutAlternateContactRequest,
    GetAlternateContactResponse
} from "aws-sdk/clients/account";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.account.AlternativeContact {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.account.AlternativeContact>) {
        super(...args)
        this.client = new awssdk.Account()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/account-2021-02-01.normal.json"), this.client)
    }

    invokeDeleteAlternateContact(partialParams: ToOptional<{
      [K in keyof DeleteAlternateContactRequest & keyof Omit<DeleteAlternateContactRequest, "AlternateContactType"> & keyof DeleteAlternateContactRequest & keyof DeleteAlternateContactRequest & keyof DeleteAlternateContactRequest & keyof DeleteAlternateContactRequest]: (DeleteAlternateContactRequest & Omit<DeleteAlternateContactRequest, "AlternateContactType"> & DeleteAlternateContactRequest & DeleteAlternateContactRequest & DeleteAlternateContactRequest & DeleteAlternateContactRequest)[K]
    }>): void {
        return this.client.deleteAlternateContact(
            this.ops["DeleteAlternateContact"].apply(partialParams)
        );
    }

    invokeGetAlternateContact(partialParams: ToOptional<{
      [K in keyof GetAlternateContactRequest & keyof Omit<GetAlternateContactRequest, "AlternateContactType"> & keyof GetAlternateContactRequest & keyof GetAlternateContactRequest & keyof GetAlternateContactRequest & keyof GetAlternateContactRequest]: (GetAlternateContactRequest & Omit<GetAlternateContactRequest, "AlternateContactType"> & GetAlternateContactRequest & GetAlternateContactRequest & GetAlternateContactRequest & GetAlternateContactRequest)[K]
    }>): GetAlternateContactResponse {
        return this.client.getAlternateContact(
            this.ops["GetAlternateContact"].apply(partialParams)
        );
    }

    invokePutAlternateContact(partialParams: ToOptional<{
      [K in keyof PutAlternateContactRequest & keyof Omit<PutAlternateContactRequest, "AlternateContactType"> & keyof Omit<PutAlternateContactRequest, "EmailAddress"> & keyof Omit<PutAlternateContactRequest, "Name"> & keyof Omit<PutAlternateContactRequest, "PhoneNumber"> & keyof PutAlternateContactRequest]: (PutAlternateContactRequest & Omit<PutAlternateContactRequest, "AlternateContactType"> & Omit<PutAlternateContactRequest, "EmailAddress"> & Omit<PutAlternateContactRequest, "Name"> & Omit<PutAlternateContactRequest, "PhoneNumber"> & PutAlternateContactRequest)[K]
    }>): void {
        return this.client.putAlternateContact(
            this.ops["PutAlternateContact"].apply(partialParams)
        );
    }
}