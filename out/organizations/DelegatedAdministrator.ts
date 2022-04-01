
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateAccountRequest,
    CreateGovCloudAccountRequest,
    CreateOrganizationalUnitRequest,
    CreatePolicyRequest,
    DescribeAccountRequest,
    ListDelegatedServicesForAccountRequest,
    CreateAccountResponse,
    CreateGovCloudAccountResponse,
    CreateOrganizationalUnitResponse,
    CreatePolicyResponse,
    DescribeAccountResponse,
    ListDelegatedServicesForAccountResponse
} from "aws-sdk/clients/organizations";
const schema = require("../apis/organizations-2016-11-28.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.organizations.DelegatedAdministrator {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.organizations.DelegatedAdministrator>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Organizations()
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

    invokeCreateAccount(partialParams: ToOptional<{
      [K in keyof CreateAccountRequest & keyof Omit<CreateAccountRequest, "Email">]: (CreateAccountRequest)[K]
    }>): Request<CreateAccountResponse, AWSError> {
        this.boot();
        return this.client.createAccount(
          this.ops["CreateAccount"].apply(partialParams)
        );
    }

    invokeCreateGovCloudAccount(partialParams: ToOptional<{
      [K in keyof CreateGovCloudAccountRequest & keyof Omit<CreateGovCloudAccountRequest, "Email">]: (CreateGovCloudAccountRequest)[K]
    }>): Request<CreateGovCloudAccountResponse, AWSError> {
        this.boot();
        return this.client.createGovCloudAccount(
          this.ops["CreateGovCloudAccount"].apply(partialParams)
        );
    }

    invokeCreateOrganizationalUnit(partialParams: ToOptional<{
      [K in keyof CreateOrganizationalUnitRequest & keyof Omit<CreateOrganizationalUnitRequest, "Name">]: (CreateOrganizationalUnitRequest)[K]
    }>): Request<CreateOrganizationalUnitResponse, AWSError> {
        this.boot();
        return this.client.createOrganizationalUnit(
          this.ops["CreateOrganizationalUnit"].apply(partialParams)
        );
    }

    invokeCreatePolicy(partialParams: ToOptional<{
      [K in keyof CreatePolicyRequest & keyof Omit<CreatePolicyRequest, "Name">]: (CreatePolicyRequest)[K]
    }>): Request<CreatePolicyResponse, AWSError> {
        this.boot();
        return this.client.createPolicy(
          this.ops["CreatePolicy"].apply(partialParams)
        );
    }

    invokeDescribeAccount(partialParams: ToOptional<{
      [K in keyof DescribeAccountRequest & keyof Omit<DescribeAccountRequest, "AccountId">]: (DescribeAccountRequest)[K]
    }>): Request<DescribeAccountResponse, AWSError> {
        this.boot();
        return this.client.describeAccount(
          this.ops["DescribeAccount"].apply(partialParams)
        );
    }

    invokeListDelegatedServicesForAccount(partialParams: ToOptional<{
      [K in keyof ListDelegatedServicesForAccountRequest & keyof Omit<ListDelegatedServicesForAccountRequest, "AccountId">]: (ListDelegatedServicesForAccountRequest)[K]
    }>): Request<ListDelegatedServicesForAccountResponse, AWSError> {
        this.boot();
        return this.client.listDelegatedServicesForAccount(
          this.ops["ListDelegatedServicesForAccount"].apply(partialParams)
        );
    }
}