
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateOrganizationalUnitRequest,
    CreatePolicyRequest,
    DescribeEffectivePolicyRequest,
    DisablePolicyTypeRequest,
    EnablePolicyTypeRequest,
    CreateOrganizationalUnitResponse,
    CreatePolicyResponse,
    DescribeEffectivePolicyResponse,
    DisablePolicyTypeResponse,
    EnablePolicyTypeResponse
} from "aws-sdk/clients/organizations";
const schema = require("../apis/organizations-2016-11-28.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.organizations.Policy {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.organizations.Policy>) {
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
      [K in keyof CreateOrganizationalUnitRequest & keyof Omit<CreateOrganizationalUnitRequest, "Name">]: (CreateOrganizationalUnitRequest)[K]
    }>): Request<CreateOrganizationalUnitResponse, AWSError> {
        this.boot();
        return this.client.createOrganizationalUnit(
          this.ops["CreateOrganizationalUnit"].apply(partialParams)
        );
    }

    invokeCreatePolicy(partialParams: ToOptional<{
      [K in keyof CreatePolicyRequest & keyof Omit<CreatePolicyRequest, "Content" | "Description" | "Name" | "Type">]: (CreatePolicyRequest)[K]
    }>): Request<CreatePolicyResponse, AWSError> {
        this.boot();
        return this.client.createPolicy(
          this.ops["CreatePolicy"].apply(partialParams)
        );
    }

    invokeDescribeEffectivePolicy(partialParams: ToOptional<{
      [K in keyof DescribeEffectivePolicyRequest & keyof Omit<DescribeEffectivePolicyRequest, "PolicyType">]: (DescribeEffectivePolicyRequest)[K]
    }>): Request<DescribeEffectivePolicyResponse, AWSError> {
        this.boot();
        return this.client.describeEffectivePolicy(
          this.ops["DescribeEffectivePolicy"].apply(partialParams)
        );
    }

    invokeDisablePolicyType(partialParams: ToOptional<{
      [K in keyof DisablePolicyTypeRequest & keyof Omit<DisablePolicyTypeRequest, "PolicyType">]: (DisablePolicyTypeRequest)[K]
    }>): Request<DisablePolicyTypeResponse, AWSError> {
        this.boot();
        return this.client.disablePolicyType(
          this.ops["DisablePolicyType"].apply(partialParams)
        );
    }

    invokeEnablePolicyType(partialParams: ToOptional<{
      [K in keyof EnablePolicyTypeRequest & keyof Omit<EnablePolicyTypeRequest, "PolicyType">]: (EnablePolicyTypeRequest)[K]
    }>): Request<EnablePolicyTypeResponse, AWSError> {
        this.boot();
        return this.client.enablePolicyType(
          this.ops["EnablePolicyType"].apply(partialParams)
        );
    }
}