
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateInstanceProfileRequest,
    CreateSAMLProviderRequest,
    GenerateServiceLastAccessedDetailsRequest,
    GetInstanceProfileRequest,
    ListInstanceProfileTagsRequest,
    ListPoliciesGrantingServiceAccessRequest,
    CreateInstanceProfileResponse,
    CreateSAMLProviderResponse,
    GenerateServiceLastAccessedDetailsResponse,
    GetInstanceProfileResponse,
    ListInstanceProfileTagsResponse,
    ListPoliciesGrantingServiceAccessResponse
} from "aws-sdk/clients/iam";
const schema = require("../apis/iam-2010-05-08.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.iam.InstanceProfile {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.iam.InstanceProfile>) {
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

    invokeCreateInstanceProfile(partialParams: ToOptional<{
      [K in keyof CreateInstanceProfileRequest & keyof Omit<CreateInstanceProfileRequest, "InstanceProfileName">]: (CreateInstanceProfileRequest)[K]
    }>): Request<CreateInstanceProfileResponse, AWSError> {
        this.boot();
        return this.client.createInstanceProfile(
          this.ops["CreateInstanceProfile"].apply(partialParams)
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

    invokeGetInstanceProfile(partialParams: ToOptional<{
      [K in keyof GetInstanceProfileRequest & keyof Omit<GetInstanceProfileRequest, "InstanceProfileName">]: (GetInstanceProfileRequest)[K]
    }>): Request<GetInstanceProfileResponse, AWSError> {
        this.boot();
        return this.client.getInstanceProfile(
          this.ops["GetInstanceProfile"].apply(partialParams)
        );
    }

    invokeListInstanceProfileTags(partialParams: ToOptional<{
      [K in keyof ListInstanceProfileTagsRequest & keyof Omit<ListInstanceProfileTagsRequest, "InstanceProfileName">]: (ListInstanceProfileTagsRequest)[K]
    }>): Request<ListInstanceProfileTagsResponse, AWSError> {
        this.boot();
        return this.client.listInstanceProfileTags(
          this.ops["ListInstanceProfileTags"].apply(partialParams)
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