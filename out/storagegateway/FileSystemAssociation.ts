
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AssociateFileSystemInput,
    JoinDomainInput,
    SetSMBGuestPasswordInput,
    AssociateFileSystemOutput,
    JoinDomainOutput,
    SetSMBGuestPasswordOutput
} from "aws-sdk/clients/storagegateway";
const schema = require("../apis/storagegateway-2013-06-30.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.storagegateway.FileSystemAssociation {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.storagegateway.FileSystemAssociation>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.StorageGateway()
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

    invokeAssociateFileSystem(partialParams: ToOptional<{
      [K in keyof AssociateFileSystemInput & keyof Omit<AssociateFileSystemInput, "Password">]: (AssociateFileSystemInput)[K]
    }>): Request<AssociateFileSystemOutput, AWSError> {
        this.boot();
        return this.client.associateFileSystem(
          this.ops["AssociateFileSystem"].apply(partialParams)
        );
    }

    invokeJoinDomain(partialParams: ToOptional<{
      [K in keyof JoinDomainInput & keyof Omit<JoinDomainInput, "Password">]: (JoinDomainInput)[K]
    }>): Request<JoinDomainOutput, AWSError> {
        this.boot();
        return this.client.joinDomain(
          this.ops["JoinDomain"].apply(partialParams)
        );
    }

    invokeSetSMBGuestPassword(partialParams: ToOptional<{
      [K in keyof SetSMBGuestPasswordInput & keyof Omit<SetSMBGuestPasswordInput, "Password">]: (SetSMBGuestPasswordInput)[K]
    }>): Request<SetSMBGuestPasswordOutput, AWSError> {
        this.boot();
        return this.client.setSMBGuestPassword(
          this.ops["SetSMBGuestPassword"].apply(partialParams)
        );
    }
}