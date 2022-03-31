
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
const schema = require("../apis/shield-2016-06-02.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.shield.Protection {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.shield.Protection>) {
        super(...args)
        this.client = new awssdk.Shield()
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

    invokeAssociateDRTLogBucket(partialParams: ToOptional<{
      [K in keyof AssociateDRTLogBucketRequest & keyof AssociateDRTLogBucketRequest & keyof AssociateDRTLogBucketRequest]: (AssociateDRTLogBucketRequest & AssociateDRTLogBucketRequest & AssociateDRTLogBucketRequest)[K]
    }>): Request<AssociateDRTLogBucketResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateDRTLogBucket(
          this.ops["AssociateDRTLogBucket"].applicator.apply(partialParams)
        );
    }

    invokeAssociateDRTRole(partialParams: ToOptional<{
      [K in keyof AssociateDRTRoleRequest & keyof AssociateDRTRoleRequest & keyof AssociateDRTRoleRequest]: (AssociateDRTRoleRequest & AssociateDRTRoleRequest & AssociateDRTRoleRequest)[K]
    }>): Request<AssociateDRTRoleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateDRTRole(
          this.ops["AssociateDRTRole"].applicator.apply(partialParams)
        );
    }

    invokeAssociateHealthCheck(partialParams: ToOptional<{
      [K in keyof AssociateHealthCheckRequest & keyof AssociateHealthCheckRequest & keyof AssociateHealthCheckRequest]: (AssociateHealthCheckRequest & AssociateHealthCheckRequest & AssociateHealthCheckRequest)[K]
    }>): Request<AssociateHealthCheckResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateHealthCheck(
          this.ops["AssociateHealthCheck"].applicator.apply(partialParams)
        );
    }

    invokeAssociateProactiveEngagementDetails(partialParams: ToOptional<{
      [K in keyof AssociateProactiveEngagementDetailsRequest & keyof AssociateProactiveEngagementDetailsRequest & keyof AssociateProactiveEngagementDetailsRequest]: (AssociateProactiveEngagementDetailsRequest & AssociateProactiveEngagementDetailsRequest & AssociateProactiveEngagementDetailsRequest)[K]
    }>): Request<AssociateProactiveEngagementDetailsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateProactiveEngagementDetails(
          this.ops["AssociateProactiveEngagementDetails"].applicator.apply(partialParams)
        );
    }

    invokeCreateProtection(partialParams: ToOptional<{
      [K in keyof CreateProtectionRequest & keyof CreateProtectionRequest & keyof CreateProtectionRequest]: (CreateProtectionRequest & CreateProtectionRequest & CreateProtectionRequest)[K]
    }>): Request<CreateProtectionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createProtection(
          this.ops["CreateProtection"].applicator.apply(partialParams)
        );
    }

    invokeCreateProtectionGroup(partialParams: ToOptional<{
      [K in keyof CreateProtectionGroupRequest & keyof CreateProtectionGroupRequest & keyof CreateProtectionGroupRequest]: (CreateProtectionGroupRequest & CreateProtectionGroupRequest & CreateProtectionGroupRequest)[K]
    }>): Request<CreateProtectionGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createProtectionGroup(
          this.ops["CreateProtectionGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteProtection(partialParams: ToOptional<{
      [K in keyof DeleteProtectionRequest & keyof DeleteProtectionRequest & keyof DeleteProtectionRequest]: (DeleteProtectionRequest & DeleteProtectionRequest & DeleteProtectionRequest)[K]
    }>): Request<DeleteProtectionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteProtection(
          this.ops["DeleteProtection"].applicator.apply(partialParams)
        );
    }

    invokeDeleteProtectionGroup(partialParams: ToOptional<{
      [K in keyof DeleteProtectionGroupRequest & keyof DeleteProtectionGroupRequest & keyof DeleteProtectionGroupRequest]: (DeleteProtectionGroupRequest & DeleteProtectionGroupRequest & DeleteProtectionGroupRequest)[K]
    }>): Request<DeleteProtectionGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteProtectionGroup(
          this.ops["DeleteProtectionGroup"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAttack(partialParams: ToOptional<{
      [K in keyof DescribeAttackRequest & keyof DescribeAttackRequest & keyof DescribeAttackRequest]: (DescribeAttackRequest & DescribeAttackRequest & DescribeAttackRequest)[K]
    }>): Request<DescribeAttackResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAttack(
          this.ops["DescribeAttack"].applicator.apply(partialParams)
        );
    }

    invokeDescribeProtectionGroup(partialParams: ToOptional<{
      [K in keyof DescribeProtectionGroupRequest & keyof DescribeProtectionGroupRequest & keyof DescribeProtectionGroupRequest]: (DescribeProtectionGroupRequest & DescribeProtectionGroupRequest & DescribeProtectionGroupRequest)[K]
    }>): Request<DescribeProtectionGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeProtectionGroup(
          this.ops["DescribeProtectionGroup"].applicator.apply(partialParams)
        );
    }

    invokeDisableApplicationLayerAutomaticResponse(partialParams: ToOptional<{
      [K in keyof DisableApplicationLayerAutomaticResponseRequest & keyof DisableApplicationLayerAutomaticResponseRequest & keyof DisableApplicationLayerAutomaticResponseRequest]: (DisableApplicationLayerAutomaticResponseRequest & DisableApplicationLayerAutomaticResponseRequest & DisableApplicationLayerAutomaticResponseRequest)[K]
    }>): Request<DisableApplicationLayerAutomaticResponseResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableApplicationLayerAutomaticResponse(
          this.ops["DisableApplicationLayerAutomaticResponse"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateDRTLogBucket(partialParams: ToOptional<{
      [K in keyof DisassociateDRTLogBucketRequest & keyof DisassociateDRTLogBucketRequest & keyof DisassociateDRTLogBucketRequest]: (DisassociateDRTLogBucketRequest & DisassociateDRTLogBucketRequest & DisassociateDRTLogBucketRequest)[K]
    }>): Request<DisassociateDRTLogBucketResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateDRTLogBucket(
          this.ops["DisassociateDRTLogBucket"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateHealthCheck(partialParams: ToOptional<{
      [K in keyof DisassociateHealthCheckRequest & keyof DisassociateHealthCheckRequest & keyof DisassociateHealthCheckRequest]: (DisassociateHealthCheckRequest & DisassociateHealthCheckRequest & DisassociateHealthCheckRequest)[K]
    }>): Request<DisassociateHealthCheckResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateHealthCheck(
          this.ops["DisassociateHealthCheck"].applicator.apply(partialParams)
        );
    }

    invokeEnableApplicationLayerAutomaticResponse(partialParams: ToOptional<{
      [K in keyof EnableApplicationLayerAutomaticResponseRequest & keyof EnableApplicationLayerAutomaticResponseRequest & keyof EnableApplicationLayerAutomaticResponseRequest]: (EnableApplicationLayerAutomaticResponseRequest & EnableApplicationLayerAutomaticResponseRequest & EnableApplicationLayerAutomaticResponseRequest)[K]
    }>): Request<EnableApplicationLayerAutomaticResponseResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableApplicationLayerAutomaticResponse(
          this.ops["EnableApplicationLayerAutomaticResponse"].applicator.apply(partialParams)
        );
    }

    invokeListResourcesInProtectionGroup(partialParams: ToOptional<{
      [K in keyof ListResourcesInProtectionGroupRequest & keyof ListResourcesInProtectionGroupRequest & keyof ListResourcesInProtectionGroupRequest]: (ListResourcesInProtectionGroupRequest & ListResourcesInProtectionGroupRequest & ListResourcesInProtectionGroupRequest)[K]
    }>): Request<ListResourcesInProtectionGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listResourcesInProtectionGroup(
          this.ops["ListResourcesInProtectionGroup"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof Omit<TagResourceRequest, "ResourceARN">]: (TagResourceRequest & TagResourceRequest & Omit<TagResourceRequest, "ResourceARN">)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof Omit<UntagResourceRequest, "ResourceARN">]: (UntagResourceRequest & UntagResourceRequest & Omit<UntagResourceRequest, "ResourceARN">)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateApplicationLayerAutomaticResponse(partialParams: ToOptional<{
      [K in keyof UpdateApplicationLayerAutomaticResponseRequest & keyof UpdateApplicationLayerAutomaticResponseRequest & keyof Omit<UpdateApplicationLayerAutomaticResponseRequest, "ResourceArn">]: (UpdateApplicationLayerAutomaticResponseRequest & UpdateApplicationLayerAutomaticResponseRequest & Omit<UpdateApplicationLayerAutomaticResponseRequest, "ResourceArn">)[K]
    }>): Request<UpdateApplicationLayerAutomaticResponseResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApplicationLayerAutomaticResponse(
          this.ops["UpdateApplicationLayerAutomaticResponse"].applicator.apply(partialParams)
        );
    }

    invokeUpdateProtectionGroup(partialParams: ToOptional<{
      [K in keyof UpdateProtectionGroupRequest & keyof UpdateProtectionGroupRequest & keyof UpdateProtectionGroupRequest]: (UpdateProtectionGroupRequest & UpdateProtectionGroupRequest & UpdateProtectionGroupRequest)[K]
    }>): Request<UpdateProtectionGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateProtectionGroup(
          this.ops["UpdateProtectionGroup"].applicator.apply(partialParams)
        );
    }
}