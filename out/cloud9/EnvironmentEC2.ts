
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateEnvironmentEC2Request,
    CreateEnvironmentMembershipRequest,
    DeleteEnvironmentRequest,
    DeleteEnvironmentMembershipRequest,
    DescribeEnvironmentMembershipsRequest,
    DescribeEnvironmentStatusRequest,
    DescribeEnvironmentsRequest,
    ListEnvironmentsRequest,
    ListTagsForResourceRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateEnvironmentRequest,
    UpdateEnvironmentMembershipRequest,
    CreateEnvironmentEC2Result,
    CreateEnvironmentMembershipResult,
    DeleteEnvironmentResult,
    DeleteEnvironmentMembershipResult,
    DescribeEnvironmentMembershipsResult,
    DescribeEnvironmentStatusResult,
    DescribeEnvironmentsResult,
    ListEnvironmentsResult,
    ListTagsForResourceResponse,
    TagResourceResponse,
    UntagResourceResponse,
    UpdateEnvironmentResult,
    UpdateEnvironmentMembershipResult
} from "aws-sdk/clients/cloud9";
const schema = require("../apis/cloud9-2017-09-23.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.cloud9.EnvironmentEC2 {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.cloud9.EnvironmentEC2>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Cloud9()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
          console.log(this.capitalizedParams);
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

    invokeCreateEnvironmentEC2(partialParams: ToOptional<{
      [K in keyof CreateEnvironmentEC2Request]: (CreateEnvironmentEC2Request)[K]
    }>): Request<CreateEnvironmentEC2Result, AWSError> {
        this.boot();
        return this.client.createEnvironmentEC2(
          this.ops["CreateEnvironmentEC2"].apply(partialParams)
        );
    }

    invokeCreateEnvironmentMembership(partialParams: ToOptional<{
      [K in keyof CreateEnvironmentMembershipRequest]: (CreateEnvironmentMembershipRequest)[K]
    }>): Request<CreateEnvironmentMembershipResult, AWSError> {
        this.boot();
        return this.client.createEnvironmentMembership(
          this.ops["CreateEnvironmentMembership"].apply(partialParams)
        );
    }

    invokeDeleteEnvironment(partialParams: ToOptional<{
      [K in keyof DeleteEnvironmentRequest]: (DeleteEnvironmentRequest)[K]
    }>): Request<DeleteEnvironmentResult, AWSError> {
        this.boot();
        return this.client.deleteEnvironment(
          this.ops["DeleteEnvironment"].apply(partialParams)
        );
    }

    invokeDeleteEnvironmentMembership(partialParams: ToOptional<{
      [K in keyof DeleteEnvironmentMembershipRequest]: (DeleteEnvironmentMembershipRequest)[K]
    }>): Request<DeleteEnvironmentMembershipResult, AWSError> {
        this.boot();
        return this.client.deleteEnvironmentMembership(
          this.ops["DeleteEnvironmentMembership"].apply(partialParams)
        );
    }

    invokeDescribeEnvironmentMemberships(partialParams: ToOptional<{
      [K in keyof DescribeEnvironmentMembershipsRequest]: (DescribeEnvironmentMembershipsRequest)[K]
    }>): Request<DescribeEnvironmentMembershipsResult, AWSError> {
        this.boot();
        return this.client.describeEnvironmentMemberships(
          this.ops["DescribeEnvironmentMemberships"].apply(partialParams)
        );
    }

    invokeDescribeEnvironmentStatus(partialParams: ToOptional<{
      [K in keyof DescribeEnvironmentStatusRequest]: (DescribeEnvironmentStatusRequest)[K]
    }>): Request<DescribeEnvironmentStatusResult, AWSError> {
        this.boot();
        return this.client.describeEnvironmentStatus(
          this.ops["DescribeEnvironmentStatus"].apply(partialParams)
        );
    }

    invokeDescribeEnvironments(partialParams: ToOptional<{
      [K in keyof DescribeEnvironmentsRequest]: (DescribeEnvironmentsRequest)[K]
    }>): Request<DescribeEnvironmentsResult, AWSError> {
        this.boot();
        return this.client.describeEnvironments(
          this.ops["DescribeEnvironments"].apply(partialParams)
        );
    }

    invokeListEnvironments(partialParams: ToOptional<{
      [K in keyof ListEnvironmentsRequest]: (ListEnvironmentsRequest)[K]
    }>): Request<ListEnvironmentsResult, AWSError> {
        this.boot();
        return this.client.listEnvironments(
          this.ops["ListEnvironments"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest]: (TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest]: (UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateEnvironment(partialParams: ToOptional<{
      [K in keyof UpdateEnvironmentRequest]: (UpdateEnvironmentRequest)[K]
    }>): Request<UpdateEnvironmentResult, AWSError> {
        this.boot();
        return this.client.updateEnvironment(
          this.ops["UpdateEnvironment"].apply(partialParams)
        );
    }

    invokeUpdateEnvironmentMembership(partialParams: ToOptional<{
      [K in keyof UpdateEnvironmentMembershipRequest]: (UpdateEnvironmentMembershipRequest)[K]
    }>): Request<UpdateEnvironmentMembershipResult, AWSError> {
        this.boot();
        return this.client.updateEnvironmentMembership(
          this.ops["UpdateEnvironmentMembership"].apply(partialParams)
        );
    }
}