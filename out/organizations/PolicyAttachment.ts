
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    DescribePolicyRequest,
    ListPoliciesForTargetRequest,
    ListTargetsForPolicyRequest,
    UpdatePolicyRequest,
    DescribePolicyResponse,
    ListPoliciesForTargetResponse,
    ListTargetsForPolicyResponse,
    UpdatePolicyResponse
} from "aws-sdk/clients/organizations";
const schema = require("../apis/organizations-2016-11-28.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.organizations.PolicyAttachment {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.organizations.PolicyAttachment>) {
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

    invokeDescribePolicy(partialParams: ToOptional<{
      [K in keyof DescribePolicyRequest & keyof Omit<DescribePolicyRequest, "PolicyId">]: (DescribePolicyRequest)[K]
    }>): Request<DescribePolicyResponse, AWSError> {
        this.boot();
        return this.client.describePolicy(
          this.ops["DescribePolicy"].apply(partialParams)
        );
    }

    invokeListPoliciesForTarget(partialParams: ToOptional<{
      [K in keyof ListPoliciesForTargetRequest & keyof Omit<ListPoliciesForTargetRequest, "TargetId">]: (ListPoliciesForTargetRequest)[K]
    }>): Request<ListPoliciesForTargetResponse, AWSError> {
        this.boot();
        return this.client.listPoliciesForTarget(
          this.ops["ListPoliciesForTarget"].apply(partialParams)
        );
    }

    invokeListTargetsForPolicy(partialParams: ToOptional<{
      [K in keyof ListTargetsForPolicyRequest & keyof Omit<ListTargetsForPolicyRequest, "PolicyId">]: (ListTargetsForPolicyRequest)[K]
    }>): Request<ListTargetsForPolicyResponse, AWSError> {
        this.boot();
        return this.client.listTargetsForPolicy(
          this.ops["ListTargetsForPolicy"].apply(partialParams)
        );
    }

    invokeUpdatePolicy(partialParams: ToOptional<{
      [K in keyof UpdatePolicyRequest & keyof Omit<UpdatePolicyRequest, "PolicyId">]: (UpdatePolicyRequest)[K]
    }>): Request<UpdatePolicyResponse, AWSError> {
        this.boot();
        return this.client.updatePolicy(
          this.ops["UpdatePolicy"].apply(partialParams)
        );
    }
}