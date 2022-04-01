
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateAppRequest,
    CreatePresignedDomainUrlRequest,
    CreateUserProfileRequest,
    DescribeAppRequest,
    DescribeDomainRequest,
    DescribeUserProfileRequest,
    UpdateDomainRequest,
    UpdateUserProfileRequest,
    CreateAppResponse,
    CreatePresignedDomainUrlResponse,
    CreateUserProfileResponse,
    DescribeAppResponse,
    DescribeDomainResponse,
    DescribeUserProfileResponse,
    UpdateDomainResponse,
    UpdateUserProfileResponse
} from "aws-sdk/clients/sagemaker";
const schema = require("../apis/sagemaker-2017-07-24.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.sagemaker.App {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.sagemaker.App>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.SageMaker()
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

    invokeCreateApp(partialParams: ToOptional<{
      [K in keyof CreateAppRequest & keyof Omit<CreateAppRequest, "DomainId" | "UserProfileName" | "AppType" | "AppName">]: (CreateAppRequest)[K]
    }>): Request<CreateAppResponse, AWSError> {
        this.boot();
        return this.client.createApp(
          this.ops["CreateApp"].apply(partialParams)
        );
    }

    invokeCreatePresignedDomainUrl(partialParams: ToOptional<{
      [K in keyof CreatePresignedDomainUrlRequest & keyof Omit<CreatePresignedDomainUrlRequest, "DomainId" | "UserProfileName">]: (CreatePresignedDomainUrlRequest)[K]
    }>): Request<CreatePresignedDomainUrlResponse, AWSError> {
        this.boot();
        return this.client.createPresignedDomainUrl(
          this.ops["CreatePresignedDomainUrl"].apply(partialParams)
        );
    }

    invokeCreateUserProfile(partialParams: ToOptional<{
      [K in keyof CreateUserProfileRequest & keyof Omit<CreateUserProfileRequest, "DomainId" | "UserProfileName">]: (CreateUserProfileRequest)[K]
    }>): Request<CreateUserProfileResponse, AWSError> {
        this.boot();
        return this.client.createUserProfile(
          this.ops["CreateUserProfile"].apply(partialParams)
        );
    }

    invokeDescribeApp(partialParams: ToOptional<{
      [K in keyof DescribeAppRequest & keyof Omit<DescribeAppRequest, "DomainId" | "UserProfileName" | "AppType" | "AppName">]: (DescribeAppRequest)[K]
    }>): Request<DescribeAppResponse, AWSError> {
        this.boot();
        return this.client.describeApp(
          this.ops["DescribeApp"].apply(partialParams)
        );
    }

    invokeDescribeDomain(partialParams: ToOptional<{
      [K in keyof DescribeDomainRequest & keyof Omit<DescribeDomainRequest, "DomainId">]: (DescribeDomainRequest)[K]
    }>): Request<DescribeDomainResponse, AWSError> {
        this.boot();
        return this.client.describeDomain(
          this.ops["DescribeDomain"].apply(partialParams)
        );
    }

    invokeDescribeUserProfile(partialParams: ToOptional<{
      [K in keyof DescribeUserProfileRequest & keyof Omit<DescribeUserProfileRequest, "DomainId" | "UserProfileName">]: (DescribeUserProfileRequest)[K]
    }>): Request<DescribeUserProfileResponse, AWSError> {
        this.boot();
        return this.client.describeUserProfile(
          this.ops["DescribeUserProfile"].apply(partialParams)
        );
    }

    invokeUpdateDomain(partialParams: ToOptional<{
      [K in keyof UpdateDomainRequest & keyof Omit<UpdateDomainRequest, "DomainId">]: (UpdateDomainRequest)[K]
    }>): Request<UpdateDomainResponse, AWSError> {
        this.boot();
        return this.client.updateDomain(
          this.ops["UpdateDomain"].apply(partialParams)
        );
    }

    invokeUpdateUserProfile(partialParams: ToOptional<{
      [K in keyof UpdateUserProfileRequest & keyof Omit<UpdateUserProfileRequest, "DomainId" | "UserProfileName">]: (UpdateUserProfileRequest)[K]
    }>): Request<UpdateUserProfileResponse, AWSError> {
        this.boot();
        return this.client.updateUserProfile(
          this.ops["UpdateUserProfile"].apply(partialParams)
        );
    }
}