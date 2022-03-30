
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.cloud9.EnvironmentEC2 {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.cloud9.EnvironmentEC2>) {
        super(...args)
        this.client = new awssdk.Cloud9()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/cloud9-2017-09-23.normal.json"), this.client)
    }

    invokeCreateEnvironmentEC2(partialParams: ToOptional<{
      [K in keyof CreateEnvironmentEC2Request & keyof CreateEnvironmentEC2Request & keyof CreateEnvironmentEC2Request & keyof CreateEnvironmentEC2Request & keyof CreateEnvironmentEC2Request & keyof CreateEnvironmentEC2Request & keyof CreateEnvironmentEC2Request & keyof CreateEnvironmentEC2Request & keyof CreateEnvironmentEC2Request]: (CreateEnvironmentEC2Request & CreateEnvironmentEC2Request & CreateEnvironmentEC2Request & CreateEnvironmentEC2Request & CreateEnvironmentEC2Request & CreateEnvironmentEC2Request & CreateEnvironmentEC2Request & CreateEnvironmentEC2Request & CreateEnvironmentEC2Request)[K]
    }>): CreateEnvironmentEC2Result {
        return this.client.createEnvironmentEC2(
            this.ops["CreateEnvironmentEC2"].apply(partialParams)
        );
    }

    invokeCreateEnvironmentMembership(partialParams: ToOptional<{
      [K in keyof CreateEnvironmentMembershipRequest & keyof CreateEnvironmentMembershipRequest & keyof CreateEnvironmentMembershipRequest & keyof CreateEnvironmentMembershipRequest & keyof CreateEnvironmentMembershipRequest & keyof CreateEnvironmentMembershipRequest & keyof CreateEnvironmentMembershipRequest & keyof CreateEnvironmentMembershipRequest & keyof CreateEnvironmentMembershipRequest]: (CreateEnvironmentMembershipRequest & CreateEnvironmentMembershipRequest & CreateEnvironmentMembershipRequest & CreateEnvironmentMembershipRequest & CreateEnvironmentMembershipRequest & CreateEnvironmentMembershipRequest & CreateEnvironmentMembershipRequest & CreateEnvironmentMembershipRequest & CreateEnvironmentMembershipRequest)[K]
    }>): CreateEnvironmentMembershipResult {
        return this.client.createEnvironmentMembership(
            this.ops["CreateEnvironmentMembership"].apply(partialParams)
        );
    }

    invokeDeleteEnvironment(partialParams: ToOptional<{
      [K in keyof DeleteEnvironmentRequest & keyof DeleteEnvironmentRequest & keyof DeleteEnvironmentRequest & keyof DeleteEnvironmentRequest & keyof DeleteEnvironmentRequest & keyof DeleteEnvironmentRequest & keyof DeleteEnvironmentRequest & keyof DeleteEnvironmentRequest & keyof DeleteEnvironmentRequest]: (DeleteEnvironmentRequest & DeleteEnvironmentRequest & DeleteEnvironmentRequest & DeleteEnvironmentRequest & DeleteEnvironmentRequest & DeleteEnvironmentRequest & DeleteEnvironmentRequest & DeleteEnvironmentRequest & DeleteEnvironmentRequest)[K]
    }>): DeleteEnvironmentResult {
        return this.client.deleteEnvironment(
            this.ops["DeleteEnvironment"].apply(partialParams)
        );
    }

    invokeDeleteEnvironmentMembership(partialParams: ToOptional<{
      [K in keyof DeleteEnvironmentMembershipRequest & keyof DeleteEnvironmentMembershipRequest & keyof DeleteEnvironmentMembershipRequest & keyof DeleteEnvironmentMembershipRequest & keyof DeleteEnvironmentMembershipRequest & keyof DeleteEnvironmentMembershipRequest & keyof DeleteEnvironmentMembershipRequest & keyof DeleteEnvironmentMembershipRequest & keyof DeleteEnvironmentMembershipRequest]: (DeleteEnvironmentMembershipRequest & DeleteEnvironmentMembershipRequest & DeleteEnvironmentMembershipRequest & DeleteEnvironmentMembershipRequest & DeleteEnvironmentMembershipRequest & DeleteEnvironmentMembershipRequest & DeleteEnvironmentMembershipRequest & DeleteEnvironmentMembershipRequest & DeleteEnvironmentMembershipRequest)[K]
    }>): DeleteEnvironmentMembershipResult {
        return this.client.deleteEnvironmentMembership(
            this.ops["DeleteEnvironmentMembership"].apply(partialParams)
        );
    }

    invokeDescribeEnvironmentStatus(partialParams: ToOptional<{
      [K in keyof DescribeEnvironmentStatusRequest & keyof DescribeEnvironmentStatusRequest & keyof DescribeEnvironmentStatusRequest & keyof DescribeEnvironmentStatusRequest & keyof DescribeEnvironmentStatusRequest & keyof DescribeEnvironmentStatusRequest & keyof DescribeEnvironmentStatusRequest & keyof DescribeEnvironmentStatusRequest & keyof DescribeEnvironmentStatusRequest]: (DescribeEnvironmentStatusRequest & DescribeEnvironmentStatusRequest & DescribeEnvironmentStatusRequest & DescribeEnvironmentStatusRequest & DescribeEnvironmentStatusRequest & DescribeEnvironmentStatusRequest & DescribeEnvironmentStatusRequest & DescribeEnvironmentStatusRequest & DescribeEnvironmentStatusRequest)[K]
    }>): DescribeEnvironmentStatusResult {
        return this.client.describeEnvironmentStatus(
            this.ops["DescribeEnvironmentStatus"].apply(partialParams)
        );
    }

    invokeDescribeEnvironments(partialParams: ToOptional<{
      [K in keyof DescribeEnvironmentsRequest & keyof DescribeEnvironmentsRequest & keyof DescribeEnvironmentsRequest & keyof DescribeEnvironmentsRequest & keyof DescribeEnvironmentsRequest & keyof DescribeEnvironmentsRequest & keyof DescribeEnvironmentsRequest & keyof DescribeEnvironmentsRequest & keyof DescribeEnvironmentsRequest]: (DescribeEnvironmentsRequest & DescribeEnvironmentsRequest & DescribeEnvironmentsRequest & DescribeEnvironmentsRequest & DescribeEnvironmentsRequest & DescribeEnvironmentsRequest & DescribeEnvironmentsRequest & DescribeEnvironmentsRequest & DescribeEnvironmentsRequest)[K]
    }>): DescribeEnvironmentsResult {
        return this.client.describeEnvironments(
            this.ops["DescribeEnvironments"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateEnvironment(partialParams: ToOptional<{
      [K in keyof UpdateEnvironmentRequest & keyof UpdateEnvironmentRequest & keyof UpdateEnvironmentRequest & keyof UpdateEnvironmentRequest & keyof UpdateEnvironmentRequest & keyof UpdateEnvironmentRequest & keyof UpdateEnvironmentRequest & keyof UpdateEnvironmentRequest & keyof UpdateEnvironmentRequest]: (UpdateEnvironmentRequest & UpdateEnvironmentRequest & UpdateEnvironmentRequest & UpdateEnvironmentRequest & UpdateEnvironmentRequest & UpdateEnvironmentRequest & UpdateEnvironmentRequest & UpdateEnvironmentRequest & UpdateEnvironmentRequest)[K]
    }>): UpdateEnvironmentResult {
        return this.client.updateEnvironment(
            this.ops["UpdateEnvironment"].apply(partialParams)
        );
    }

    invokeUpdateEnvironmentMembership(partialParams: ToOptional<{
      [K in keyof UpdateEnvironmentMembershipRequest & keyof UpdateEnvironmentMembershipRequest & keyof UpdateEnvironmentMembershipRequest & keyof UpdateEnvironmentMembershipRequest & keyof UpdateEnvironmentMembershipRequest & keyof UpdateEnvironmentMembershipRequest & keyof UpdateEnvironmentMembershipRequest & keyof UpdateEnvironmentMembershipRequest & keyof UpdateEnvironmentMembershipRequest]: (UpdateEnvironmentMembershipRequest & UpdateEnvironmentMembershipRequest & UpdateEnvironmentMembershipRequest & UpdateEnvironmentMembershipRequest & UpdateEnvironmentMembershipRequest & UpdateEnvironmentMembershipRequest & UpdateEnvironmentMembershipRequest & UpdateEnvironmentMembershipRequest & UpdateEnvironmentMembershipRequest)[K]
    }>): UpdateEnvironmentMembershipResult {
        return this.client.updateEnvironmentMembership(
            this.ops["UpdateEnvironmentMembership"].apply(partialParams)
        );
    }
}