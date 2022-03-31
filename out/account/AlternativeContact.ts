
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    DeleteAlternateContactRequest,
    GetAlternateContactRequest,
    PutAlternateContactRequest,
    GetAlternateContactResponse
} from "aws-sdk/clients/account";
const schema = require("../apis/account-2021-02-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.account.AlternativeContact {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.account.AlternativeContact>) {
        super(...args)
        this.client = new awssdk.Account()
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

    invokeDeleteAlternateContact(partialParams: ToOptional<{
      [K in keyof DeleteAlternateContactRequest & keyof Omit<DeleteAlternateContactRequest, "AlternateContactType"> & keyof DeleteAlternateContactRequest & keyof DeleteAlternateContactRequest & keyof DeleteAlternateContactRequest & keyof DeleteAlternateContactRequest]: (DeleteAlternateContactRequest & Omit<DeleteAlternateContactRequest, "AlternateContactType"> & DeleteAlternateContactRequest & DeleteAlternateContactRequest & DeleteAlternateContactRequest & DeleteAlternateContactRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAlternateContact(
          this.ops["DeleteAlternateContact"].applicator.apply(partialParams)
        );
    }

    invokeGetAlternateContact(partialParams: ToOptional<{
      [K in keyof GetAlternateContactRequest & keyof Omit<GetAlternateContactRequest, "AlternateContactType"> & keyof GetAlternateContactRequest & keyof GetAlternateContactRequest & keyof GetAlternateContactRequest & keyof GetAlternateContactRequest]: (GetAlternateContactRequest & Omit<GetAlternateContactRequest, "AlternateContactType"> & GetAlternateContactRequest & GetAlternateContactRequest & GetAlternateContactRequest & GetAlternateContactRequest)[K]
    }>): Request<GetAlternateContactResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAlternateContact(
          this.ops["GetAlternateContact"].applicator.apply(partialParams)
        );
    }

    invokePutAlternateContact(partialParams: ToOptional<{
      [K in keyof PutAlternateContactRequest & keyof Omit<PutAlternateContactRequest, "AlternateContactType"> & keyof Omit<PutAlternateContactRequest, "EmailAddress"> & keyof Omit<PutAlternateContactRequest, "Name"> & keyof Omit<PutAlternateContactRequest, "PhoneNumber"> & keyof PutAlternateContactRequest]: (PutAlternateContactRequest & Omit<PutAlternateContactRequest, "AlternateContactType"> & Omit<PutAlternateContactRequest, "EmailAddress"> & Omit<PutAlternateContactRequest, "Name"> & Omit<PutAlternateContactRequest, "PhoneNumber"> & PutAlternateContactRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putAlternateContact(
          this.ops["PutAlternateContact"].applicator.apply(partialParams)
        );
    }
}