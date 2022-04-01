
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    DisableOrganizationAdminAccountRequest,
    EnableOrganizationAdminAccountRequest,
    DisableOrganizationAdminAccountResponse,
    EnableOrganizationAdminAccountResponse
} from "aws-sdk/clients/guardduty";
const schema = require("../apis/guardduty-2017-11-28.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.guardduty.OrganizationAdminAccount {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.guardduty.OrganizationAdminAccount>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.GuardDuty()
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

    invokeDisableOrganizationAdminAccount(partialParams: ToOptional<{
      [K in keyof DisableOrganizationAdminAccountRequest & keyof Omit<DisableOrganizationAdminAccountRequest, "AdminAccountId">]: (DisableOrganizationAdminAccountRequest)[K]
    }>): Request<DisableOrganizationAdminAccountResponse, AWSError> {
        this.boot();
        return this.client.disableOrganizationAdminAccount(
          this.ops["DisableOrganizationAdminAccount"].apply(partialParams)
        );
    }

    invokeEnableOrganizationAdminAccount(partialParams: ToOptional<{
      [K in keyof EnableOrganizationAdminAccountRequest & keyof Omit<EnableOrganizationAdminAccountRequest, "AdminAccountId">]: (EnableOrganizationAdminAccountRequest)[K]
    }>): Request<EnableOrganizationAdminAccountResponse, AWSError> {
        this.boot();
        return this.client.enableOrganizationAdminAccount(
          this.ops["EnableOrganizationAdminAccount"].apply(partialParams)
        );
    }
}