
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateEnvironmentEC2Request,
    CreateEnvironmentMembershipRequest,
    DeleteEnvironmentRequest,
    DeleteEnvironmentMembershipRequest,
    DescribeEnvironmentStatusRequest,
    DescribeEnvironmentsRequest,
    ListTagsForResourceRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateEnvironmentRequest,
    UpdateEnvironmentMembershipRequest,
    CreateEnvironmentEC2Result,
    CreateEnvironmentMembershipResult,
    DeleteEnvironmentResult,
    DeleteEnvironmentMembershipResult,
    DescribeEnvironmentStatusResult,
    DescribeEnvironmentsResult,
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
    constructor(...args: ConstructorParameters<typeof aws.cloud9.EnvironmentEC2>) {
        super(...args)
        this.client = new awssdk.Cloud9()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
    }
    boot() {
        Object.entries(this.capitalizedParams).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value.value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
        this.ops = getResourceOperations(this.capitalizedParams as any, schema, this.client)
    }

    invokeCreateEnvironmentEC2(partialParams: ToOptional<{
      [K in keyof CreateEnvironmentEC2Request & keyof CreateEnvironmentEC2Request & keyof CreateEnvironmentEC2Request & keyof CreateEnvironmentEC2Request & keyof CreateEnvironmentEC2Request & keyof CreateEnvironmentEC2Request & keyof CreateEnvironmentEC2Request & keyof CreateEnvironmentEC2Request & keyof CreateEnvironmentEC2Request]: (CreateEnvironmentEC2Request & CreateEnvironmentEC2Request & CreateEnvironmentEC2Request & CreateEnvironmentEC2Request & CreateEnvironmentEC2Request & CreateEnvironmentEC2Request & CreateEnvironmentEC2Request & CreateEnvironmentEC2Request & CreateEnvironmentEC2Request)[K]
    }>): Request<CreateEnvironmentEC2Result, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createEnvironmentEC2(
          this.ops["CreateEnvironmentEC2"].applicator.apply(partialParams)
        );
    }

    invokeCreateEnvironmentMembership(partialParams: ToOptional<{
      [K in keyof CreateEnvironmentMembershipRequest & keyof CreateEnvironmentMembershipRequest & keyof CreateEnvironmentMembershipRequest & keyof CreateEnvironmentMembershipRequest & keyof CreateEnvironmentMembershipRequest & keyof CreateEnvironmentMembershipRequest & keyof CreateEnvironmentMembershipRequest & keyof CreateEnvironmentMembershipRequest & keyof CreateEnvironmentMembershipRequest]: (CreateEnvironmentMembershipRequest & CreateEnvironmentMembershipRequest & CreateEnvironmentMembershipRequest & CreateEnvironmentMembershipRequest & CreateEnvironmentMembershipRequest & CreateEnvironmentMembershipRequest & CreateEnvironmentMembershipRequest & CreateEnvironmentMembershipRequest & CreateEnvironmentMembershipRequest)[K]
    }>): Request<CreateEnvironmentMembershipResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createEnvironmentMembership(
          this.ops["CreateEnvironmentMembership"].applicator.apply(partialParams)
        );
    }

    invokeDeleteEnvironment(partialParams: ToOptional<{
      [K in keyof DeleteEnvironmentRequest & keyof DeleteEnvironmentRequest & keyof DeleteEnvironmentRequest & keyof DeleteEnvironmentRequest & keyof DeleteEnvironmentRequest & keyof DeleteEnvironmentRequest & keyof DeleteEnvironmentRequest & keyof DeleteEnvironmentRequest & keyof DeleteEnvironmentRequest]: (DeleteEnvironmentRequest & DeleteEnvironmentRequest & DeleteEnvironmentRequest & DeleteEnvironmentRequest & DeleteEnvironmentRequest & DeleteEnvironmentRequest & DeleteEnvironmentRequest & DeleteEnvironmentRequest & DeleteEnvironmentRequest)[K]
    }>): Request<DeleteEnvironmentResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEnvironment(
          this.ops["DeleteEnvironment"].applicator.apply(partialParams)
        );
    }

    invokeDeleteEnvironmentMembership(partialParams: ToOptional<{
      [K in keyof DeleteEnvironmentMembershipRequest & keyof DeleteEnvironmentMembershipRequest & keyof DeleteEnvironmentMembershipRequest & keyof DeleteEnvironmentMembershipRequest & keyof DeleteEnvironmentMembershipRequest & keyof DeleteEnvironmentMembershipRequest & keyof DeleteEnvironmentMembershipRequest & keyof DeleteEnvironmentMembershipRequest & keyof DeleteEnvironmentMembershipRequest]: (DeleteEnvironmentMembershipRequest & DeleteEnvironmentMembershipRequest & DeleteEnvironmentMembershipRequest & DeleteEnvironmentMembershipRequest & DeleteEnvironmentMembershipRequest & DeleteEnvironmentMembershipRequest & DeleteEnvironmentMembershipRequest & DeleteEnvironmentMembershipRequest & DeleteEnvironmentMembershipRequest)[K]
    }>): Request<DeleteEnvironmentMembershipResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEnvironmentMembership(
          this.ops["DeleteEnvironmentMembership"].applicator.apply(partialParams)
        );
    }

    invokeDescribeEnvironmentStatus(partialParams: ToOptional<{
      [K in keyof DescribeEnvironmentStatusRequest & keyof DescribeEnvironmentStatusRequest & keyof DescribeEnvironmentStatusRequest & keyof DescribeEnvironmentStatusRequest & keyof DescribeEnvironmentStatusRequest & keyof DescribeEnvironmentStatusRequest & keyof DescribeEnvironmentStatusRequest & keyof DescribeEnvironmentStatusRequest & keyof DescribeEnvironmentStatusRequest]: (DescribeEnvironmentStatusRequest & DescribeEnvironmentStatusRequest & DescribeEnvironmentStatusRequest & DescribeEnvironmentStatusRequest & DescribeEnvironmentStatusRequest & DescribeEnvironmentStatusRequest & DescribeEnvironmentStatusRequest & DescribeEnvironmentStatusRequest & DescribeEnvironmentStatusRequest)[K]
    }>): Request<DescribeEnvironmentStatusResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeEnvironmentStatus(
          this.ops["DescribeEnvironmentStatus"].applicator.apply(partialParams)
        );
    }

    invokeDescribeEnvironments(partialParams: ToOptional<{
      [K in keyof DescribeEnvironmentsRequest & keyof DescribeEnvironmentsRequest & keyof DescribeEnvironmentsRequest & keyof DescribeEnvironmentsRequest & keyof DescribeEnvironmentsRequest & keyof DescribeEnvironmentsRequest & keyof DescribeEnvironmentsRequest & keyof DescribeEnvironmentsRequest & keyof DescribeEnvironmentsRequest]: (DescribeEnvironmentsRequest & DescribeEnvironmentsRequest & DescribeEnvironmentsRequest & DescribeEnvironmentsRequest & DescribeEnvironmentsRequest & DescribeEnvironmentsRequest & DescribeEnvironmentsRequest & DescribeEnvironmentsRequest & DescribeEnvironmentsRequest)[K]
    }>): Request<DescribeEnvironmentsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeEnvironments(
          this.ops["DescribeEnvironments"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateEnvironment(partialParams: ToOptional<{
      [K in keyof UpdateEnvironmentRequest & keyof UpdateEnvironmentRequest & keyof UpdateEnvironmentRequest & keyof UpdateEnvironmentRequest & keyof UpdateEnvironmentRequest & keyof UpdateEnvironmentRequest & keyof UpdateEnvironmentRequest & keyof UpdateEnvironmentRequest & keyof UpdateEnvironmentRequest]: (UpdateEnvironmentRequest & UpdateEnvironmentRequest & UpdateEnvironmentRequest & UpdateEnvironmentRequest & UpdateEnvironmentRequest & UpdateEnvironmentRequest & UpdateEnvironmentRequest & UpdateEnvironmentRequest & UpdateEnvironmentRequest)[K]
    }>): Request<UpdateEnvironmentResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateEnvironment(
          this.ops["UpdateEnvironment"].applicator.apply(partialParams)
        );
    }

    invokeUpdateEnvironmentMembership(partialParams: ToOptional<{
      [K in keyof UpdateEnvironmentMembershipRequest & keyof UpdateEnvironmentMembershipRequest & keyof UpdateEnvironmentMembershipRequest & keyof UpdateEnvironmentMembershipRequest & keyof UpdateEnvironmentMembershipRequest & keyof UpdateEnvironmentMembershipRequest & keyof UpdateEnvironmentMembershipRequest & keyof UpdateEnvironmentMembershipRequest & keyof UpdateEnvironmentMembershipRequest]: (UpdateEnvironmentMembershipRequest & UpdateEnvironmentMembershipRequest & UpdateEnvironmentMembershipRequest & UpdateEnvironmentMembershipRequest & UpdateEnvironmentMembershipRequest & UpdateEnvironmentMembershipRequest & UpdateEnvironmentMembershipRequest & UpdateEnvironmentMembershipRequest & UpdateEnvironmentMembershipRequest)[K]
    }>): Request<UpdateEnvironmentMembershipResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateEnvironmentMembership(
          this.ops["UpdateEnvironmentMembership"].applicator.apply(partialParams)
        );
    }
}