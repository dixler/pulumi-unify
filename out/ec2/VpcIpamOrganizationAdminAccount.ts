
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CopyImageRequest,
    CreateImageRequest,
    DisableIpamOrganizationAdminAccountRequest,
    EnableIpamOrganizationAdminAccountRequest,
    RegisterImageRequest,
    CopyImageResult,
    CreateImageResult,
    DisableIpamOrganizationAdminAccountResult,
    EnableIpamOrganizationAdminAccountResult,
    RegisterImageResult
} from "aws-sdk/clients/ec2";
const schema = require("../apis/ec2-2016-11-15.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ec2.VpcIpamOrganizationAdminAccount {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.ec2.VpcIpamOrganizationAdminAccount>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.EC2()
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

    invokeCopyImage(partialParams: ToOptional<{
      [K in keyof CopyImageRequest & keyof Omit<CopyImageRequest, "Name">]: (CopyImageRequest)[K]
    }>): Request<CopyImageResult, AWSError> {
        this.boot();
        return this.client.copyImage(
          this.ops["CopyImage"].apply(partialParams)
        );
    }

    invokeCreateImage(partialParams: ToOptional<{
      [K in keyof CreateImageRequest & keyof Omit<CreateImageRequest, "Name">]: (CreateImageRequest)[K]
    }>): Request<CreateImageResult, AWSError> {
        this.boot();
        return this.client.createImage(
          this.ops["CreateImage"].apply(partialParams)
        );
    }

    invokeDisableIpamOrganizationAdminAccount(partialParams: ToOptional<{
      [K in keyof DisableIpamOrganizationAdminAccountRequest & keyof Omit<DisableIpamOrganizationAdminAccountRequest, "DelegatedAdminAccountId">]: (DisableIpamOrganizationAdminAccountRequest)[K]
    }>): Request<DisableIpamOrganizationAdminAccountResult, AWSError> {
        this.boot();
        return this.client.disableIpamOrganizationAdminAccount(
          this.ops["DisableIpamOrganizationAdminAccount"].apply(partialParams)
        );
    }

    invokeEnableIpamOrganizationAdminAccount(partialParams: ToOptional<{
      [K in keyof EnableIpamOrganizationAdminAccountRequest & keyof Omit<EnableIpamOrganizationAdminAccountRequest, "DelegatedAdminAccountId">]: (EnableIpamOrganizationAdminAccountRequest)[K]
    }>): Request<EnableIpamOrganizationAdminAccountResult, AWSError> {
        this.boot();
        return this.client.enableIpamOrganizationAdminAccount(
          this.ops["EnableIpamOrganizationAdminAccount"].apply(partialParams)
        );
    }

    invokeRegisterImage(partialParams: ToOptional<{
      [K in keyof RegisterImageRequest & keyof Omit<RegisterImageRequest, "Name">]: (RegisterImageRequest)[K]
    }>): Request<RegisterImageResult, AWSError> {
        this.boot();
        return this.client.registerImage(
          this.ops["RegisterImage"].apply(partialParams)
        );
    }
}