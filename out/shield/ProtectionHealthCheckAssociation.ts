
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    AssociateDRTLogBucketRequest,
    AssociateDRTRoleRequest,
    AssociateHealthCheckRequest,
    AssociateProactiveEngagementDetailsRequest,
    CreateProtectionRequest,
    CreateProtectionGroupRequest,
    DeleteProtectionRequest,
    DeleteProtectionGroupRequest,
    DescribeAttackRequest,
    DescribeProtectionGroupRequest,
    DisableApplicationLayerAutomaticResponseRequest,
    DisassociateDRTLogBucketRequest,
    DisassociateHealthCheckRequest,
    EnableApplicationLayerAutomaticResponseRequest,
    ListResourcesInProtectionGroupRequest,
    ListTagsForResourceRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateApplicationLayerAutomaticResponseRequest,
    UpdateProtectionGroupRequest,
    AssociateDRTLogBucketResponse,
    AssociateDRTRoleResponse,
    AssociateHealthCheckResponse,
    AssociateProactiveEngagementDetailsResponse,
    CreateProtectionResponse,
    CreateProtectionGroupResponse,
    DeleteProtectionResponse,
    DeleteProtectionGroupResponse,
    DescribeAttackResponse,
    DescribeProtectionGroupResponse,
    DisableApplicationLayerAutomaticResponseResponse,
    DisassociateDRTLogBucketResponse,
    DisassociateHealthCheckResponse,
    EnableApplicationLayerAutomaticResponseResponse,
    ListResourcesInProtectionGroupResponse,
    ListTagsForResourceResponse,
    TagResourceResponse,
    UntagResourceResponse,
    UpdateApplicationLayerAutomaticResponseResponse,
    UpdateProtectionGroupResponse
} from "aws-sdk/clients/shield";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.shield.ProtectionHealthCheckAssociation {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.shield.ProtectionHealthCheckAssociation>) {
        super(...args)
        this.client = new awssdk.Shield()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/shield-2016-06-02.normal.json"), this.client)
    }

    invokeAssociateDRTLogBucket(partialParams: ToOptional<{
      [K in keyof AssociateDRTLogBucketRequest & keyof AssociateDRTLogBucketRequest]: (AssociateDRTLogBucketRequest & AssociateDRTLogBucketRequest)[K]
    }>): AssociateDRTLogBucketResponse {
        return this.client.associateDRTLogBucket(
            this.ops["AssociateDRTLogBucket"].apply(partialParams)
        );
    }

    invokeAssociateDRTRole(partialParams: ToOptional<{
      [K in keyof AssociateDRTRoleRequest & keyof AssociateDRTRoleRequest]: (AssociateDRTRoleRequest & AssociateDRTRoleRequest)[K]
    }>): AssociateDRTRoleResponse {
        return this.client.associateDRTRole(
            this.ops["AssociateDRTRole"].apply(partialParams)
        );
    }

    invokeAssociateHealthCheck(partialParams: ToOptional<{
      [K in keyof AssociateHealthCheckRequest & keyof AssociateHealthCheckRequest]: (AssociateHealthCheckRequest & AssociateHealthCheckRequest)[K]
    }>): AssociateHealthCheckResponse {
        return this.client.associateHealthCheck(
            this.ops["AssociateHealthCheck"].apply(partialParams)
        );
    }

    invokeAssociateProactiveEngagementDetails(partialParams: ToOptional<{
      [K in keyof AssociateProactiveEngagementDetailsRequest & keyof AssociateProactiveEngagementDetailsRequest]: (AssociateProactiveEngagementDetailsRequest & AssociateProactiveEngagementDetailsRequest)[K]
    }>): AssociateProactiveEngagementDetailsResponse {
        return this.client.associateProactiveEngagementDetails(
            this.ops["AssociateProactiveEngagementDetails"].apply(partialParams)
        );
    }

    invokeCreateProtection(partialParams: ToOptional<{
      [K in keyof CreateProtectionRequest & keyof CreateProtectionRequest]: (CreateProtectionRequest & CreateProtectionRequest)[K]
    }>): CreateProtectionResponse {
        return this.client.createProtection(
            this.ops["CreateProtection"].apply(partialParams)
        );
    }

    invokeCreateProtectionGroup(partialParams: ToOptional<{
      [K in keyof CreateProtectionGroupRequest & keyof CreateProtectionGroupRequest]: (CreateProtectionGroupRequest & CreateProtectionGroupRequest)[K]
    }>): CreateProtectionGroupResponse {
        return this.client.createProtectionGroup(
            this.ops["CreateProtectionGroup"].apply(partialParams)
        );
    }

    invokeDeleteProtection(partialParams: ToOptional<{
      [K in keyof DeleteProtectionRequest & keyof DeleteProtectionRequest]: (DeleteProtectionRequest & DeleteProtectionRequest)[K]
    }>): DeleteProtectionResponse {
        return this.client.deleteProtection(
            this.ops["DeleteProtection"].apply(partialParams)
        );
    }

    invokeDeleteProtectionGroup(partialParams: ToOptional<{
      [K in keyof DeleteProtectionGroupRequest & keyof DeleteProtectionGroupRequest]: (DeleteProtectionGroupRequest & DeleteProtectionGroupRequest)[K]
    }>): DeleteProtectionGroupResponse {
        return this.client.deleteProtectionGroup(
            this.ops["DeleteProtectionGroup"].apply(partialParams)
        );
    }

    invokeDescribeAttack(partialParams: ToOptional<{
      [K in keyof DescribeAttackRequest & keyof DescribeAttackRequest]: (DescribeAttackRequest & DescribeAttackRequest)[K]
    }>): DescribeAttackResponse {
        return this.client.describeAttack(
            this.ops["DescribeAttack"].apply(partialParams)
        );
    }

    invokeDescribeProtectionGroup(partialParams: ToOptional<{
      [K in keyof DescribeProtectionGroupRequest & keyof DescribeProtectionGroupRequest]: (DescribeProtectionGroupRequest & DescribeProtectionGroupRequest)[K]
    }>): DescribeProtectionGroupResponse {
        return this.client.describeProtectionGroup(
            this.ops["DescribeProtectionGroup"].apply(partialParams)
        );
    }

    invokeDisableApplicationLayerAutomaticResponse(partialParams: ToOptional<{
      [K in keyof DisableApplicationLayerAutomaticResponseRequest & keyof DisableApplicationLayerAutomaticResponseRequest]: (DisableApplicationLayerAutomaticResponseRequest & DisableApplicationLayerAutomaticResponseRequest)[K]
    }>): DisableApplicationLayerAutomaticResponseResponse {
        return this.client.disableApplicationLayerAutomaticResponse(
            this.ops["DisableApplicationLayerAutomaticResponse"].apply(partialParams)
        );
    }

    invokeDisassociateDRTLogBucket(partialParams: ToOptional<{
      [K in keyof DisassociateDRTLogBucketRequest & keyof DisassociateDRTLogBucketRequest]: (DisassociateDRTLogBucketRequest & DisassociateDRTLogBucketRequest)[K]
    }>): DisassociateDRTLogBucketResponse {
        return this.client.disassociateDRTLogBucket(
            this.ops["DisassociateDRTLogBucket"].apply(partialParams)
        );
    }

    invokeDisassociateHealthCheck(partialParams: ToOptional<{
      [K in keyof DisassociateHealthCheckRequest & keyof DisassociateHealthCheckRequest]: (DisassociateHealthCheckRequest & DisassociateHealthCheckRequest)[K]
    }>): DisassociateHealthCheckResponse {
        return this.client.disassociateHealthCheck(
            this.ops["DisassociateHealthCheck"].apply(partialParams)
        );
    }

    invokeEnableApplicationLayerAutomaticResponse(partialParams: ToOptional<{
      [K in keyof EnableApplicationLayerAutomaticResponseRequest & keyof EnableApplicationLayerAutomaticResponseRequest]: (EnableApplicationLayerAutomaticResponseRequest & EnableApplicationLayerAutomaticResponseRequest)[K]
    }>): EnableApplicationLayerAutomaticResponseResponse {
        return this.client.enableApplicationLayerAutomaticResponse(
            this.ops["EnableApplicationLayerAutomaticResponse"].apply(partialParams)
        );
    }

    invokeListResourcesInProtectionGroup(partialParams: ToOptional<{
      [K in keyof ListResourcesInProtectionGroupRequest & keyof ListResourcesInProtectionGroupRequest]: (ListResourcesInProtectionGroupRequest & ListResourcesInProtectionGroupRequest)[K]
    }>): ListResourcesInProtectionGroupResponse {
        return this.client.listResourcesInProtectionGroup(
            this.ops["ListResourcesInProtectionGroup"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateApplicationLayerAutomaticResponse(partialParams: ToOptional<{
      [K in keyof UpdateApplicationLayerAutomaticResponseRequest & keyof UpdateApplicationLayerAutomaticResponseRequest]: (UpdateApplicationLayerAutomaticResponseRequest & UpdateApplicationLayerAutomaticResponseRequest)[K]
    }>): UpdateApplicationLayerAutomaticResponseResponse {
        return this.client.updateApplicationLayerAutomaticResponse(
            this.ops["UpdateApplicationLayerAutomaticResponse"].apply(partialParams)
        );
    }

    invokeUpdateProtectionGroup(partialParams: ToOptional<{
      [K in keyof UpdateProtectionGroupRequest & keyof UpdateProtectionGroupRequest]: (UpdateProtectionGroupRequest & UpdateProtectionGroupRequest)[K]
    }>): UpdateProtectionGroupResponse {
        return this.client.updateProtectionGroup(
            this.ops["UpdateProtectionGroup"].apply(partialParams)
        );
    }
}