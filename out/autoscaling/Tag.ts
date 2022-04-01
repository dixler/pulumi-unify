
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AttachLoadBalancerTargetGroupsType,
    AttachLoadBalancersType,
    BatchDeleteScheduledActionType,
    BatchPutScheduledUpdateGroupActionType,
    CancelInstanceRefreshType,
    CompleteLifecycleActionType,
    DeleteLifecycleHookType,
    DeleteWarmPoolType,
    AutoScalingGroupNamesType,
    DescribeAutoScalingInstancesType,
    DescribeInstanceRefreshesType,
    LaunchConfigurationNamesType,
    DescribeLifecycleHooksType,
    DescribeLoadBalancerTargetGroupsRequest,
    DescribeLoadBalancersRequest,
    DescribeNotificationConfigurationsType,
    DescribePoliciesType,
    DescribeScalingActivitiesType,
    DescribeScheduledActionsType,
    DescribeTagsType,
    DescribeWarmPoolType,
    DetachInstancesQuery,
    DetachLoadBalancerTargetGroupsType,
    DetachLoadBalancersType,
    EnterStandbyQuery,
    ExitStandbyQuery,
    GetPredictiveScalingForecastType,
    PutLifecycleHookType,
    PutScalingPolicyType,
    PutWarmPoolType,
    RecordLifecycleActionHeartbeatType,
    SetInstanceProtectionQuery,
    StartInstanceRefreshType,
    TerminateInstanceInAutoScalingGroupType,
    AttachLoadBalancerTargetGroupsResultType,
    AttachLoadBalancersResultType,
    BatchDeleteScheduledActionAnswer,
    BatchPutScheduledUpdateGroupActionAnswer,
    CancelInstanceRefreshAnswer,
    CompleteLifecycleActionAnswer,
    DeleteLifecycleHookAnswer,
    DeleteWarmPoolAnswer,
    AutoScalingGroupsType,
    AutoScalingInstancesType,
    DescribeInstanceRefreshesAnswer,
    LaunchConfigurationsType,
    DescribeLifecycleHooksAnswer,
    DescribeLoadBalancerTargetGroupsResponse,
    DescribeLoadBalancersResponse,
    DescribeNotificationConfigurationsAnswer,
    PoliciesType,
    ActivitiesType,
    ScheduledActionsType,
    TagsType,
    DescribeWarmPoolAnswer,
    DetachInstancesAnswer,
    DetachLoadBalancerTargetGroupsResultType,
    DetachLoadBalancersResultType,
    EnterStandbyAnswer,
    ExitStandbyAnswer,
    GetPredictiveScalingForecastAnswer,
    PutLifecycleHookAnswer,
    PolicyARNType,
    PutWarmPoolAnswer,
    RecordLifecycleActionHeartbeatAnswer,
    SetInstanceProtectionAnswer,
    StartInstanceRefreshAnswer,
    ActivityType
} from "aws-sdk/clients/autoscaling";
const schema = require("../apis/autoscaling-2011-01-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.autoscaling.Tag {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.autoscaling.Tag>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.AutoScaling()
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

    invokeAttachLoadBalancerTargetGroups(partialParams: ToOptional<{
      [K in keyof AttachLoadBalancerTargetGroupsType]: (AttachLoadBalancerTargetGroupsType)[K]
    }>): Request<AttachLoadBalancerTargetGroupsResultType, AWSError> {
        this.boot();
        return this.client.attachLoadBalancerTargetGroups(
          this.ops["AttachLoadBalancerTargetGroups"].apply(partialParams)
        );
    }

    invokeAttachLoadBalancers(partialParams: ToOptional<{
      [K in keyof AttachLoadBalancersType]: (AttachLoadBalancersType)[K]
    }>): Request<AttachLoadBalancersResultType, AWSError> {
        this.boot();
        return this.client.attachLoadBalancers(
          this.ops["AttachLoadBalancers"].apply(partialParams)
        );
    }

    invokeBatchDeleteScheduledAction(partialParams: ToOptional<{
      [K in keyof BatchDeleteScheduledActionType]: (BatchDeleteScheduledActionType)[K]
    }>): Request<BatchDeleteScheduledActionAnswer, AWSError> {
        this.boot();
        return this.client.batchDeleteScheduledAction(
          this.ops["BatchDeleteScheduledAction"].apply(partialParams)
        );
    }

    invokeBatchPutScheduledUpdateGroupAction(partialParams: ToOptional<{
      [K in keyof BatchPutScheduledUpdateGroupActionType]: (BatchPutScheduledUpdateGroupActionType)[K]
    }>): Request<BatchPutScheduledUpdateGroupActionAnswer, AWSError> {
        this.boot();
        return this.client.batchPutScheduledUpdateGroupAction(
          this.ops["BatchPutScheduledUpdateGroupAction"].apply(partialParams)
        );
    }

    invokeCancelInstanceRefresh(partialParams: ToOptional<{
      [K in keyof CancelInstanceRefreshType]: (CancelInstanceRefreshType)[K]
    }>): Request<CancelInstanceRefreshAnswer, AWSError> {
        this.boot();
        return this.client.cancelInstanceRefresh(
          this.ops["CancelInstanceRefresh"].apply(partialParams)
        );
    }

    invokeCompleteLifecycleAction(partialParams: ToOptional<{
      [K in keyof CompleteLifecycleActionType]: (CompleteLifecycleActionType)[K]
    }>): Request<CompleteLifecycleActionAnswer, AWSError> {
        this.boot();
        return this.client.completeLifecycleAction(
          this.ops["CompleteLifecycleAction"].apply(partialParams)
        );
    }

    invokeDeleteLifecycleHook(partialParams: ToOptional<{
      [K in keyof DeleteLifecycleHookType]: (DeleteLifecycleHookType)[K]
    }>): Request<DeleteLifecycleHookAnswer, AWSError> {
        this.boot();
        return this.client.deleteLifecycleHook(
          this.ops["DeleteLifecycleHook"].apply(partialParams)
        );
    }

    invokeDeleteWarmPool(partialParams: ToOptional<{
      [K in keyof DeleteWarmPoolType]: (DeleteWarmPoolType)[K]
    }>): Request<DeleteWarmPoolAnswer, AWSError> {
        this.boot();
        return this.client.deleteWarmPool(
          this.ops["DeleteWarmPool"].apply(partialParams)
        );
    }

    invokeDescribeAutoScalingGroups(partialParams: ToOptional<{
      [K in keyof AutoScalingGroupNamesType]: (AutoScalingGroupNamesType)[K]
    }>): Request<AutoScalingGroupsType, AWSError> {
        this.boot();
        return this.client.describeAutoScalingGroups(
          this.ops["DescribeAutoScalingGroups"].apply(partialParams)
        );
    }

    invokeDescribeAutoScalingInstances(partialParams: ToOptional<{
      [K in keyof DescribeAutoScalingInstancesType]: (DescribeAutoScalingInstancesType)[K]
    }>): Request<AutoScalingInstancesType, AWSError> {
        this.boot();
        return this.client.describeAutoScalingInstances(
          this.ops["DescribeAutoScalingInstances"].apply(partialParams)
        );
    }

    invokeDescribeInstanceRefreshes(partialParams: ToOptional<{
      [K in keyof DescribeInstanceRefreshesType]: (DescribeInstanceRefreshesType)[K]
    }>): Request<DescribeInstanceRefreshesAnswer, AWSError> {
        this.boot();
        return this.client.describeInstanceRefreshes(
          this.ops["DescribeInstanceRefreshes"].apply(partialParams)
        );
    }

    invokeDescribeLaunchConfigurations(partialParams: ToOptional<{
      [K in keyof LaunchConfigurationNamesType]: (LaunchConfigurationNamesType)[K]
    }>): Request<LaunchConfigurationsType, AWSError> {
        this.boot();
        return this.client.describeLaunchConfigurations(
          this.ops["DescribeLaunchConfigurations"].apply(partialParams)
        );
    }

    invokeDescribeLifecycleHooks(partialParams: ToOptional<{
      [K in keyof DescribeLifecycleHooksType]: (DescribeLifecycleHooksType)[K]
    }>): Request<DescribeLifecycleHooksAnswer, AWSError> {
        this.boot();
        return this.client.describeLifecycleHooks(
          this.ops["DescribeLifecycleHooks"].apply(partialParams)
        );
    }

    invokeDescribeLoadBalancerTargetGroups(partialParams: ToOptional<{
      [K in keyof DescribeLoadBalancerTargetGroupsRequest]: (DescribeLoadBalancerTargetGroupsRequest)[K]
    }>): Request<DescribeLoadBalancerTargetGroupsResponse, AWSError> {
        this.boot();
        return this.client.describeLoadBalancerTargetGroups(
          this.ops["DescribeLoadBalancerTargetGroups"].apply(partialParams)
        );
    }

    invokeDescribeLoadBalancers(partialParams: ToOptional<{
      [K in keyof DescribeLoadBalancersRequest]: (DescribeLoadBalancersRequest)[K]
    }>): Request<DescribeLoadBalancersResponse, AWSError> {
        this.boot();
        return this.client.describeLoadBalancers(
          this.ops["DescribeLoadBalancers"].apply(partialParams)
        );
    }

    invokeDescribeNotificationConfigurations(partialParams: ToOptional<{
      [K in keyof DescribeNotificationConfigurationsType]: (DescribeNotificationConfigurationsType)[K]
    }>): Request<DescribeNotificationConfigurationsAnswer, AWSError> {
        this.boot();
        return this.client.describeNotificationConfigurations(
          this.ops["DescribeNotificationConfigurations"].apply(partialParams)
        );
    }

    invokeDescribePolicies(partialParams: ToOptional<{
      [K in keyof DescribePoliciesType]: (DescribePoliciesType)[K]
    }>): Request<PoliciesType, AWSError> {
        this.boot();
        return this.client.describePolicies(
          this.ops["DescribePolicies"].apply(partialParams)
        );
    }

    invokeDescribeScalingActivities(partialParams: ToOptional<{
      [K in keyof DescribeScalingActivitiesType]: (DescribeScalingActivitiesType)[K]
    }>): Request<ActivitiesType, AWSError> {
        this.boot();
        return this.client.describeScalingActivities(
          this.ops["DescribeScalingActivities"].apply(partialParams)
        );
    }

    invokeDescribeScheduledActions(partialParams: ToOptional<{
      [K in keyof DescribeScheduledActionsType]: (DescribeScheduledActionsType)[K]
    }>): Request<ScheduledActionsType, AWSError> {
        this.boot();
        return this.client.describeScheduledActions(
          this.ops["DescribeScheduledActions"].apply(partialParams)
        );
    }

    invokeDescribeTags(partialParams: ToOptional<{
      [K in keyof DescribeTagsType]: (DescribeTagsType)[K]
    }>): Request<TagsType, AWSError> {
        this.boot();
        return this.client.describeTags(
          this.ops["DescribeTags"].apply(partialParams)
        );
    }

    invokeDescribeWarmPool(partialParams: ToOptional<{
      [K in keyof DescribeWarmPoolType]: (DescribeWarmPoolType)[K]
    }>): Request<DescribeWarmPoolAnswer, AWSError> {
        this.boot();
        return this.client.describeWarmPool(
          this.ops["DescribeWarmPool"].apply(partialParams)
        );
    }

    invokeDetachInstances(partialParams: ToOptional<{
      [K in keyof DetachInstancesQuery]: (DetachInstancesQuery)[K]
    }>): Request<DetachInstancesAnswer, AWSError> {
        this.boot();
        return this.client.detachInstances(
          this.ops["DetachInstances"].apply(partialParams)
        );
    }

    invokeDetachLoadBalancerTargetGroups(partialParams: ToOptional<{
      [K in keyof DetachLoadBalancerTargetGroupsType]: (DetachLoadBalancerTargetGroupsType)[K]
    }>): Request<DetachLoadBalancerTargetGroupsResultType, AWSError> {
        this.boot();
        return this.client.detachLoadBalancerTargetGroups(
          this.ops["DetachLoadBalancerTargetGroups"].apply(partialParams)
        );
    }

    invokeDetachLoadBalancers(partialParams: ToOptional<{
      [K in keyof DetachLoadBalancersType]: (DetachLoadBalancersType)[K]
    }>): Request<DetachLoadBalancersResultType, AWSError> {
        this.boot();
        return this.client.detachLoadBalancers(
          this.ops["DetachLoadBalancers"].apply(partialParams)
        );
    }

    invokeEnterStandby(partialParams: ToOptional<{
      [K in keyof EnterStandbyQuery]: (EnterStandbyQuery)[K]
    }>): Request<EnterStandbyAnswer, AWSError> {
        this.boot();
        return this.client.enterStandby(
          this.ops["EnterStandby"].apply(partialParams)
        );
    }

    invokeExitStandby(partialParams: ToOptional<{
      [K in keyof ExitStandbyQuery]: (ExitStandbyQuery)[K]
    }>): Request<ExitStandbyAnswer, AWSError> {
        this.boot();
        return this.client.exitStandby(
          this.ops["ExitStandby"].apply(partialParams)
        );
    }

    invokeGetPredictiveScalingForecast(partialParams: ToOptional<{
      [K in keyof GetPredictiveScalingForecastType]: (GetPredictiveScalingForecastType)[K]
    }>): Request<GetPredictiveScalingForecastAnswer, AWSError> {
        this.boot();
        return this.client.getPredictiveScalingForecast(
          this.ops["GetPredictiveScalingForecast"].apply(partialParams)
        );
    }

    invokePutLifecycleHook(partialParams: ToOptional<{
      [K in keyof PutLifecycleHookType]: (PutLifecycleHookType)[K]
    }>): Request<PutLifecycleHookAnswer, AWSError> {
        this.boot();
        return this.client.putLifecycleHook(
          this.ops["PutLifecycleHook"].apply(partialParams)
        );
    }

    invokePutScalingPolicy(partialParams: ToOptional<{
      [K in keyof PutScalingPolicyType]: (PutScalingPolicyType)[K]
    }>): Request<PolicyARNType, AWSError> {
        this.boot();
        return this.client.putScalingPolicy(
          this.ops["PutScalingPolicy"].apply(partialParams)
        );
    }

    invokePutWarmPool(partialParams: ToOptional<{
      [K in keyof PutWarmPoolType]: (PutWarmPoolType)[K]
    }>): Request<PutWarmPoolAnswer, AWSError> {
        this.boot();
        return this.client.putWarmPool(
          this.ops["PutWarmPool"].apply(partialParams)
        );
    }

    invokeRecordLifecycleActionHeartbeat(partialParams: ToOptional<{
      [K in keyof RecordLifecycleActionHeartbeatType]: (RecordLifecycleActionHeartbeatType)[K]
    }>): Request<RecordLifecycleActionHeartbeatAnswer, AWSError> {
        this.boot();
        return this.client.recordLifecycleActionHeartbeat(
          this.ops["RecordLifecycleActionHeartbeat"].apply(partialParams)
        );
    }

    invokeSetInstanceProtection(partialParams: ToOptional<{
      [K in keyof SetInstanceProtectionQuery]: (SetInstanceProtectionQuery)[K]
    }>): Request<SetInstanceProtectionAnswer, AWSError> {
        this.boot();
        return this.client.setInstanceProtection(
          this.ops["SetInstanceProtection"].apply(partialParams)
        );
    }

    invokeStartInstanceRefresh(partialParams: ToOptional<{
      [K in keyof StartInstanceRefreshType]: (StartInstanceRefreshType)[K]
    }>): Request<StartInstanceRefreshAnswer, AWSError> {
        this.boot();
        return this.client.startInstanceRefresh(
          this.ops["StartInstanceRefresh"].apply(partialParams)
        );
    }

    invokeTerminateInstanceInAutoScalingGroup(partialParams: ToOptional<{
      [K in keyof TerminateInstanceInAutoScalingGroupType]: (TerminateInstanceInAutoScalingGroupType)[K]
    }>): Request<ActivityType, AWSError> {
        this.boot();
        return this.client.terminateInstanceInAutoScalingGroup(
          this.ops["TerminateInstanceInAutoScalingGroup"].apply(partialParams)
        );
    }
}