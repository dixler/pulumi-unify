
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateGroupRequest,
    CreateSAMLProviderRequest,
    GenerateServiceLastAccessedDetailsRequest,
    GetGroupRequest,
    GetGroupPolicyRequest,
    ListAttachedGroupPoliciesRequest,
    ListGroupPoliciesRequest,
    ListPoliciesGrantingServiceAccessRequest,
    CreateGroupResponse,
    CreateSAMLProviderResponse,
    GenerateServiceLastAccessedDetailsResponse,
    GetGroupResponse,
    GetGroupPolicyResponse,
    ListAttachedGroupPoliciesResponse,
    ListGroupPoliciesResponse,
    ListPoliciesGrantingServiceAccessResponse
} from "aws-sdk/clients/iam";
const schema = require("../apis/iam-2010-05-08.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.iam.Group {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.iam.Group>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.IAM()
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

    invokeCreateGroup(partialParams: ToOptional<{
      [K in keyof CreateGroupRequest & keyof Omit<CreateGroupRequest, "GroupName">]: (CreateGroupRequest)[K]
    }>): Request<CreateGroupResponse, AWSError> {
        this.boot();
        return this.client.createGroup(
          this.ops["CreateGroup"].apply(partialParams)
        );
    }

    invokeCreateSAMLProvider(partialParams: ToOptional<{
      [K in keyof CreateSAMLProviderRequest & keyof Omit<CreateSAMLProviderRequest, "Name">]: (CreateSAMLProviderRequest)[K]
    }>): Request<CreateSAMLProviderResponse, AWSError> {
        this.boot();
        return this.client.createSAMLProvider(
          this.ops["CreateSAMLProvider"].apply(partialParams)
        );
    }

    invokeGenerateServiceLastAccessedDetails(partialParams: ToOptional<{
      [K in keyof GenerateServiceLastAccessedDetailsRequest & keyof Omit<GenerateServiceLastAccessedDetailsRequest, "Arn">]: (GenerateServiceLastAccessedDetailsRequest)[K]
    }>): Request<GenerateServiceLastAccessedDetailsResponse, AWSError> {
        this.boot();
        return this.client.generateServiceLastAccessedDetails(
          this.ops["GenerateServiceLastAccessedDetails"].apply(partialParams)
        );
    }

    invokeGetGroup(partialParams: ToOptional<{
      [K in keyof GetGroupRequest & keyof Omit<GetGroupRequest, "GroupName">]: (GetGroupRequest)[K]
    }>): Request<GetGroupResponse, AWSError> {
        this.boot();
        return this.client.getGroup(
          this.ops["GetGroup"].apply(partialParams)
        );
    }

    invokeGetGroupPolicy(partialParams: ToOptional<{
      [K in keyof GetGroupPolicyRequest & keyof Omit<GetGroupPolicyRequest, "GroupName">]: (GetGroupPolicyRequest)[K]
    }>): Request<GetGroupPolicyResponse, AWSError> {
        this.boot();
        return this.client.getGroupPolicy(
          this.ops["GetGroupPolicy"].apply(partialParams)
        );
    }

    invokeListAttachedGroupPolicies(partialParams: ToOptional<{
      [K in keyof ListAttachedGroupPoliciesRequest & keyof Omit<ListAttachedGroupPoliciesRequest, "GroupName">]: (ListAttachedGroupPoliciesRequest)[K]
    }>): Request<ListAttachedGroupPoliciesResponse, AWSError> {
        this.boot();
        return this.client.listAttachedGroupPolicies(
          this.ops["ListAttachedGroupPolicies"].apply(partialParams)
        );
    }

    invokeListGroupPolicies(partialParams: ToOptional<{
      [K in keyof ListGroupPoliciesRequest & keyof Omit<ListGroupPoliciesRequest, "GroupName">]: (ListGroupPoliciesRequest)[K]
    }>): Request<ListGroupPoliciesResponse, AWSError> {
        this.boot();
        return this.client.listGroupPolicies(
          this.ops["ListGroupPolicies"].apply(partialParams)
        );
    }

    invokeListPoliciesGrantingServiceAccess(partialParams: ToOptional<{
      [K in keyof ListPoliciesGrantingServiceAccessRequest & keyof Omit<ListPoliciesGrantingServiceAccessRequest, "Arn">]: (ListPoliciesGrantingServiceAccessRequest)[K]
    }>): Request<ListPoliciesGrantingServiceAccessResponse, AWSError> {
        this.boot();
        return this.client.listPoliciesGrantingServiceAccess(
          this.ops["ListPoliciesGrantingServiceAccess"].apply(partialParams)
        );
    }
}