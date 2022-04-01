
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
    CreateSubscriptionRequest,
    DeleteProtectionRequest,
    DeleteProtectionGroupRequest,
    DeleteSubscriptionRequest,
    DescribeAttackRequest,
    DescribeAttackStatisticsRequest,
    DescribeDRTAccessRequest,
    DescribeEmergencyContactSettingsRequest,
    DescribeProtectionRequest,
    DescribeProtectionGroupRequest,
    DescribeSubscriptionRequest,
    DisableApplicationLayerAutomaticResponseRequest,
    DisableProactiveEngagementRequest,
    DisassociateDRTLogBucketRequest,
    DisassociateDRTRoleRequest,
    DisassociateHealthCheckRequest,
    EnableApplicationLayerAutomaticResponseRequest,
    EnableProactiveEngagementRequest,
    GetSubscriptionStateRequest,
    ListAttacksRequest,
    ListProtectionGroupsRequest,
    ListProtectionsRequest,
    ListResourcesInProtectionGroupRequest,
    ListTagsForResourceRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateApplicationLayerAutomaticResponseRequest,
    UpdateEmergencyContactSettingsRequest,
    UpdateProtectionGroupRequest,
    UpdateSubscriptionRequest,
    AssociateDRTLogBucketResponse,
    AssociateDRTRoleResponse,
    AssociateHealthCheckResponse,
    AssociateProactiveEngagementDetailsResponse,
    CreateProtectionResponse,
    CreateProtectionGroupResponse,
    CreateSubscriptionResponse,
    DeleteProtectionResponse,
    DeleteProtectionGroupResponse,
    DeleteSubscriptionResponse,
    DescribeAttackResponse,
    DescribeAttackStatisticsResponse,
    DescribeDRTAccessResponse,
    DescribeEmergencyContactSettingsResponse,
    DescribeProtectionResponse,
    DescribeProtectionGroupResponse,
    DescribeSubscriptionResponse,
    DisableApplicationLayerAutomaticResponseResponse,
    DisableProactiveEngagementResponse,
    DisassociateDRTLogBucketResponse,
    DisassociateDRTRoleResponse,
    DisassociateHealthCheckResponse,
    EnableApplicationLayerAutomaticResponseResponse,
    EnableProactiveEngagementResponse,
    GetSubscriptionStateResponse,
    ListAttacksResponse,
    ListProtectionGroupsResponse,
    ListProtectionsResponse,
    ListResourcesInProtectionGroupResponse,
    ListTagsForResourceResponse,
    TagResourceResponse,
    UntagResourceResponse,
    UpdateApplicationLayerAutomaticResponseResponse,
    UpdateEmergencyContactSettingsResponse,
    UpdateProtectionGroupResponse,
    UpdateSubscriptionResponse
} from "aws-sdk/clients/shield";
const schema = require("../apis/shield-2016-06-02.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.shield.ProtectionHealthCheckAssociation {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.shield.ProtectionHealthCheckAssociation>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Shield()
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

    invokeAssociateDRTLogBucket(partialParams: ToOptional<{
      [K in keyof AssociateDRTLogBucketRequest]: (AssociateDRTLogBucketRequest)[K]
    }>): Request<AssociateDRTLogBucketResponse, AWSError> {
        this.boot();
        return this.client.associateDRTLogBucket(
          this.ops["AssociateDRTLogBucket"].apply(partialParams)
        );
    }

    invokeAssociateDRTRole(partialParams: ToOptional<{
      [K in keyof AssociateDRTRoleRequest]: (AssociateDRTRoleRequest)[K]
    }>): Request<AssociateDRTRoleResponse, AWSError> {
        this.boot();
        return this.client.associateDRTRole(
          this.ops["AssociateDRTRole"].apply(partialParams)
        );
    }

    invokeAssociateHealthCheck(partialParams: ToOptional<{
      [K in keyof AssociateHealthCheckRequest & keyof Omit<AssociateHealthCheckRequest, "HealthCheckArn">]: (AssociateHealthCheckRequest)[K]
    }>): Request<AssociateHealthCheckResponse, AWSError> {
        this.boot();
        return this.client.associateHealthCheck(
          this.ops["AssociateHealthCheck"].apply(partialParams)
        );
    }

    invokeAssociateProactiveEngagementDetails(partialParams: ToOptional<{
      [K in keyof AssociateProactiveEngagementDetailsRequest]: (AssociateProactiveEngagementDetailsRequest)[K]
    }>): Request<AssociateProactiveEngagementDetailsResponse, AWSError> {
        this.boot();
        return this.client.associateProactiveEngagementDetails(
          this.ops["AssociateProactiveEngagementDetails"].apply(partialParams)
        );
    }

    invokeCreateProtection(partialParams: ToOptional<{
      [K in keyof CreateProtectionRequest]: (CreateProtectionRequest)[K]
    }>): Request<CreateProtectionResponse, AWSError> {
        this.boot();
        return this.client.createProtection(
          this.ops["CreateProtection"].apply(partialParams)
        );
    }

    invokeCreateProtectionGroup(partialParams: ToOptional<{
      [K in keyof CreateProtectionGroupRequest]: (CreateProtectionGroupRequest)[K]
    }>): Request<CreateProtectionGroupResponse, AWSError> {
        this.boot();
        return this.client.createProtectionGroup(
          this.ops["CreateProtectionGroup"].apply(partialParams)
        );
    }

    invokeCreateSubscription(partialParams: ToOptional<{
      [K in keyof CreateSubscriptionRequest]: (CreateSubscriptionRequest)[K]
    }>): Request<CreateSubscriptionResponse, AWSError> {
        this.boot();
        return this.client.createSubscription(
          this.ops["CreateSubscription"].apply(partialParams)
        );
    }

    invokeDeleteProtection(partialParams: ToOptional<{
      [K in keyof DeleteProtectionRequest]: (DeleteProtectionRequest)[K]
    }>): Request<DeleteProtectionResponse, AWSError> {
        this.boot();
        return this.client.deleteProtection(
          this.ops["DeleteProtection"].apply(partialParams)
        );
    }

    invokeDeleteProtectionGroup(partialParams: ToOptional<{
      [K in keyof DeleteProtectionGroupRequest]: (DeleteProtectionGroupRequest)[K]
    }>): Request<DeleteProtectionGroupResponse, AWSError> {
        this.boot();
        return this.client.deleteProtectionGroup(
          this.ops["DeleteProtectionGroup"].apply(partialParams)
        );
    }

    invokeDeleteSubscription(partialParams: ToOptional<{
      [K in keyof DeleteSubscriptionRequest]: (DeleteSubscriptionRequest)[K]
    }>): Request<DeleteSubscriptionResponse, AWSError> {
        this.boot();
        return this.client.deleteSubscription(
          this.ops["DeleteSubscription"].apply(partialParams)
        );
    }

    invokeDescribeAttack(partialParams: ToOptional<{
      [K in keyof DescribeAttackRequest]: (DescribeAttackRequest)[K]
    }>): Request<DescribeAttackResponse, AWSError> {
        this.boot();
        return this.client.describeAttack(
          this.ops["DescribeAttack"].apply(partialParams)
        );
    }

    invokeDescribeAttackStatistics(partialParams: ToOptional<{
      [K in keyof DescribeAttackStatisticsRequest]: (DescribeAttackStatisticsRequest)[K]
    }>): Request<DescribeAttackStatisticsResponse, AWSError> {
        this.boot();
        return this.client.describeAttackStatistics(
          this.ops["DescribeAttackStatistics"].apply(partialParams)
        );
    }

    invokeDescribeDRTAccess(partialParams: ToOptional<{
      [K in keyof DescribeDRTAccessRequest]: (DescribeDRTAccessRequest)[K]
    }>): Request<DescribeDRTAccessResponse, AWSError> {
        this.boot();
        return this.client.describeDRTAccess(
          this.ops["DescribeDRTAccess"].apply(partialParams)
        );
    }

    invokeDescribeEmergencyContactSettings(partialParams: ToOptional<{
      [K in keyof DescribeEmergencyContactSettingsRequest]: (DescribeEmergencyContactSettingsRequest)[K]
    }>): Request<DescribeEmergencyContactSettingsResponse, AWSError> {
        this.boot();
        return this.client.describeEmergencyContactSettings(
          this.ops["DescribeEmergencyContactSettings"].apply(partialParams)
        );
    }

    invokeDescribeProtection(partialParams: ToOptional<{
      [K in keyof DescribeProtectionRequest]: (DescribeProtectionRequest)[K]
    }>): Request<DescribeProtectionResponse, AWSError> {
        this.boot();
        return this.client.describeProtection(
          this.ops["DescribeProtection"].apply(partialParams)
        );
    }

    invokeDescribeProtectionGroup(partialParams: ToOptional<{
      [K in keyof DescribeProtectionGroupRequest]: (DescribeProtectionGroupRequest)[K]
    }>): Request<DescribeProtectionGroupResponse, AWSError> {
        this.boot();
        return this.client.describeProtectionGroup(
          this.ops["DescribeProtectionGroup"].apply(partialParams)
        );
    }

    invokeDescribeSubscription(partialParams: ToOptional<{
      [K in keyof DescribeSubscriptionRequest]: (DescribeSubscriptionRequest)[K]
    }>): Request<DescribeSubscriptionResponse, AWSError> {
        this.boot();
        return this.client.describeSubscription(
          this.ops["DescribeSubscription"].apply(partialParams)
        );
    }

    invokeDisableApplicationLayerAutomaticResponse(partialParams: ToOptional<{
      [K in keyof DisableApplicationLayerAutomaticResponseRequest]: (DisableApplicationLayerAutomaticResponseRequest)[K]
    }>): Request<DisableApplicationLayerAutomaticResponseResponse, AWSError> {
        this.boot();
        return this.client.disableApplicationLayerAutomaticResponse(
          this.ops["DisableApplicationLayerAutomaticResponse"].apply(partialParams)
        );
    }

    invokeDisableProactiveEngagement(partialParams: ToOptional<{
      [K in keyof DisableProactiveEngagementRequest]: (DisableProactiveEngagementRequest)[K]
    }>): Request<DisableProactiveEngagementResponse, AWSError> {
        this.boot();
        return this.client.disableProactiveEngagement(
          this.ops["DisableProactiveEngagement"].apply(partialParams)
        );
    }

    invokeDisassociateDRTLogBucket(partialParams: ToOptional<{
      [K in keyof DisassociateDRTLogBucketRequest]: (DisassociateDRTLogBucketRequest)[K]
    }>): Request<DisassociateDRTLogBucketResponse, AWSError> {
        this.boot();
        return this.client.disassociateDRTLogBucket(
          this.ops["DisassociateDRTLogBucket"].apply(partialParams)
        );
    }

    invokeDisassociateDRTRole(partialParams: ToOptional<{
      [K in keyof DisassociateDRTRoleRequest]: (DisassociateDRTRoleRequest)[K]
    }>): Request<DisassociateDRTRoleResponse, AWSError> {
        this.boot();
        return this.client.disassociateDRTRole(
          this.ops["DisassociateDRTRole"].apply(partialParams)
        );
    }

    invokeDisassociateHealthCheck(partialParams: ToOptional<{
      [K in keyof DisassociateHealthCheckRequest & keyof Omit<DisassociateHealthCheckRequest, "HealthCheckArn">]: (DisassociateHealthCheckRequest)[K]
    }>): Request<DisassociateHealthCheckResponse, AWSError> {
        this.boot();
        return this.client.disassociateHealthCheck(
          this.ops["DisassociateHealthCheck"].apply(partialParams)
        );
    }

    invokeEnableApplicationLayerAutomaticResponse(partialParams: ToOptional<{
      [K in keyof EnableApplicationLayerAutomaticResponseRequest]: (EnableApplicationLayerAutomaticResponseRequest)[K]
    }>): Request<EnableApplicationLayerAutomaticResponseResponse, AWSError> {
        this.boot();
        return this.client.enableApplicationLayerAutomaticResponse(
          this.ops["EnableApplicationLayerAutomaticResponse"].apply(partialParams)
        );
    }

    invokeEnableProactiveEngagement(partialParams: ToOptional<{
      [K in keyof EnableProactiveEngagementRequest]: (EnableProactiveEngagementRequest)[K]
    }>): Request<EnableProactiveEngagementResponse, AWSError> {
        this.boot();
        return this.client.enableProactiveEngagement(
          this.ops["EnableProactiveEngagement"].apply(partialParams)
        );
    }

    invokeGetSubscriptionState(partialParams: ToOptional<{
      [K in keyof GetSubscriptionStateRequest]: (GetSubscriptionStateRequest)[K]
    }>): Request<GetSubscriptionStateResponse, AWSError> {
        this.boot();
        return this.client.getSubscriptionState(
          this.ops["GetSubscriptionState"].apply(partialParams)
        );
    }

    invokeListAttacks(partialParams: ToOptional<{
      [K in keyof ListAttacksRequest]: (ListAttacksRequest)[K]
    }>): Request<ListAttacksResponse, AWSError> {
        this.boot();
        return this.client.listAttacks(
          this.ops["ListAttacks"].apply(partialParams)
        );
    }

    invokeListProtectionGroups(partialParams: ToOptional<{
      [K in keyof ListProtectionGroupsRequest]: (ListProtectionGroupsRequest)[K]
    }>): Request<ListProtectionGroupsResponse, AWSError> {
        this.boot();
        return this.client.listProtectionGroups(
          this.ops["ListProtectionGroups"].apply(partialParams)
        );
    }

    invokeListProtections(partialParams: ToOptional<{
      [K in keyof ListProtectionsRequest]: (ListProtectionsRequest)[K]
    }>): Request<ListProtectionsResponse, AWSError> {
        this.boot();
        return this.client.listProtections(
          this.ops["ListProtections"].apply(partialParams)
        );
    }

    invokeListResourcesInProtectionGroup(partialParams: ToOptional<{
      [K in keyof ListResourcesInProtectionGroupRequest]: (ListResourcesInProtectionGroupRequest)[K]
    }>): Request<ListResourcesInProtectionGroupResponse, AWSError> {
        this.boot();
        return this.client.listResourcesInProtectionGroup(
          this.ops["ListResourcesInProtectionGroup"].apply(partialParams)
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

    invokeUpdateApplicationLayerAutomaticResponse(partialParams: ToOptional<{
      [K in keyof UpdateApplicationLayerAutomaticResponseRequest]: (UpdateApplicationLayerAutomaticResponseRequest)[K]
    }>): Request<UpdateApplicationLayerAutomaticResponseResponse, AWSError> {
        this.boot();
        return this.client.updateApplicationLayerAutomaticResponse(
          this.ops["UpdateApplicationLayerAutomaticResponse"].apply(partialParams)
        );
    }

    invokeUpdateEmergencyContactSettings(partialParams: ToOptional<{
      [K in keyof UpdateEmergencyContactSettingsRequest]: (UpdateEmergencyContactSettingsRequest)[K]
    }>): Request<UpdateEmergencyContactSettingsResponse, AWSError> {
        this.boot();
        return this.client.updateEmergencyContactSettings(
          this.ops["UpdateEmergencyContactSettings"].apply(partialParams)
        );
    }

    invokeUpdateProtectionGroup(partialParams: ToOptional<{
      [K in keyof UpdateProtectionGroupRequest]: (UpdateProtectionGroupRequest)[K]
    }>): Request<UpdateProtectionGroupResponse, AWSError> {
        this.boot();
        return this.client.updateProtectionGroup(
          this.ops["UpdateProtectionGroup"].apply(partialParams)
        );
    }

    invokeUpdateSubscription(partialParams: ToOptional<{
      [K in keyof UpdateSubscriptionRequest]: (UpdateSubscriptionRequest)[K]
    }>): Request<UpdateSubscriptionResponse, AWSError> {
        this.boot();
        return this.client.updateSubscription(
          this.ops["UpdateSubscription"].apply(partialParams)
        );
    }
}