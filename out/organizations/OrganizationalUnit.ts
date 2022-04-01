
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateOrganizationalUnitRequest,
    CreatePolicyRequest,
    ListAccountsForParentRequest,
    ListChildrenRequest,
    ListOrganizationalUnitsForParentRequest,
    CreateOrganizationalUnitResponse,
    CreatePolicyResponse,
    ListAccountsForParentResponse,
    ListChildrenResponse,
    ListOrganizationalUnitsForParentResponse
} from "aws-sdk/clients/organizations";
const schema = require("../apis/organizations-2016-11-28.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.organizations.OrganizationalUnit {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.organizations.OrganizationalUnit>) {
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

    invokeCreateOrganizationalUnit(partialParams: ToOptional<{
      [K in keyof CreateOrganizationalUnitRequest & keyof Omit<CreateOrganizationalUnitRequest, "ParentId" | "Name">]: (CreateOrganizationalUnitRequest)[K]
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

    invokeListAccountsForParent(partialParams: ToOptional<{
      [K in keyof ListAccountsForParentRequest & keyof Omit<ListAccountsForParentRequest, "ParentId">]: (ListAccountsForParentRequest)[K]
    }>): Request<ListAccountsForParentResponse, AWSError> {
        this.boot();
        return this.client.listAccountsForParent(
          this.ops["ListAccountsForParent"].apply(partialParams)
        );
    }

    invokeListChildren(partialParams: ToOptional<{
      [K in keyof ListChildrenRequest & keyof Omit<ListChildrenRequest, "ParentId">]: (ListChildrenRequest)[K]
    }>): Request<ListChildrenResponse, AWSError> {
        this.boot();
        return this.client.listChildren(
          this.ops["ListChildren"].apply(partialParams)
        );
    }

    invokeListOrganizationalUnitsForParent(partialParams: ToOptional<{
      [K in keyof ListOrganizationalUnitsForParentRequest & keyof Omit<ListOrganizationalUnitsForParentRequest, "ParentId">]: (ListOrganizationalUnitsForParentRequest)[K]
    }>): Request<ListOrganizationalUnitsForParentResponse, AWSError> {
        this.boot();
        return this.client.listOrganizationalUnitsForParent(
          this.ops["ListOrganizationalUnitsForParent"].apply(partialParams)
        );
    }
}