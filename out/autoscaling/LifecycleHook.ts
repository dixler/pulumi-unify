
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    AttachInstancesQuery,
    AttachLoadBalancerTargetGroupsType,
    AttachLoadBalancersType,
    BatchDeleteScheduledActionType,
    BatchPutScheduledUpdateGroupActionType,
    CancelInstanceRefreshType,
    CompleteLifecycleActionType,
    CreateAutoScalingGroupType,
    CreateLaunchConfigurationType,
    CreateOrUpdateTagsType,
    DeleteAutoScalingGroupType,
    LaunchConfigurationNameType,
    DeleteLifecycleHookType,
    DeleteNotificationConfigurationType,
    DeletePolicyType,
    DeleteScheduledActionType,
    DeleteTagsType,
    DeleteWarmPoolType,
    DescribeInstanceRefreshesType,
    DescribeLifecycleHooksType,
    DescribeLoadBalancerTargetGroupsRequest,
    DescribeLoadBalancersRequest,
    DescribeWarmPoolType,
    DetachInstancesQuery,
    DetachLoadBalancerTargetGroupsType,
    DetachLoadBalancersType,
    DisableMetricsCollectionQuery,
    EnableMetricsCollectionQuery,
    EnterStandbyQuery,
    ExecutePolicyType,
    ExitStandbyQuery,
    GetPredictiveScalingForecastType,
    PutLifecycleHookType,
    PutNotificationConfigurationType,
    PutScalingPolicyType,
    PutScheduledUpdateGroupActionType,
    PutWarmPoolType,
    RecordLifecycleActionHeartbeatType,
    ScalingProcessQuery,
    SetDesiredCapacityType,
    SetInstanceHealthQuery,
    SetInstanceProtectionQuery,
    StartInstanceRefreshType,
    TerminateInstanceInAutoScalingGroupType,
    UpdateAutoScalingGroupType,
    AttachLoadBalancerTargetGroupsResultType,
    AttachLoadBalancersResultType,
    BatchDeleteScheduledActionAnswer,
    BatchPutScheduledUpdateGroupActionAnswer,
    CancelInstanceRefreshAnswer,
    CompleteLifecycleActionAnswer,
    DeleteLifecycleHookAnswer,
    DeleteWarmPoolAnswer,
    DescribeInstanceRefreshesAnswer,
    DescribeLifecycleHooksAnswer,
    DescribeLoadBalancerTargetGroupsResponse,
    DescribeLoadBalancersResponse,
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.autoscaling.LifecycleHook {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.autoscaling.LifecycleHook>) {
        super(...args)
        this.client = new awssdk.AutoScaling()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/autoscaling-2011-01-01.normal.json"), this.client)
    }

    invokeAttachInstances(partialParams: ToOptional<{
      [K in keyof AttachInstancesQuery & keyof AttachInstancesQuery & keyof AttachInstancesQuery & keyof AttachInstancesQuery & keyof AttachInstancesQuery & keyof AttachInstancesQuery & keyof AttachInstancesQuery]: (AttachInstancesQuery & AttachInstancesQuery & AttachInstancesQuery & AttachInstancesQuery & AttachInstancesQuery & AttachInstancesQuery & AttachInstancesQuery)[K]
    }>): void {
        return this.client.attachInstances(
            this.ops["AttachInstances"].apply(partialParams)
        );
    }

    invokeAttachLoadBalancerTargetGroups(partialParams: ToOptional<{
      [K in keyof AttachLoadBalancerTargetGroupsType & keyof AttachLoadBalancerTargetGroupsType & keyof AttachLoadBalancerTargetGroupsType & keyof AttachLoadBalancerTargetGroupsType & keyof AttachLoadBalancerTargetGroupsType & keyof AttachLoadBalancerTargetGroupsType & keyof AttachLoadBalancerTargetGroupsType]: (AttachLoadBalancerTargetGroupsType & AttachLoadBalancerTargetGroupsType & AttachLoadBalancerTargetGroupsType & AttachLoadBalancerTargetGroupsType & AttachLoadBalancerTargetGroupsType & AttachLoadBalancerTargetGroupsType & AttachLoadBalancerTargetGroupsType)[K]
    }>): AttachLoadBalancerTargetGroupsResultType {
        return this.client.attachLoadBalancerTargetGroups(
            this.ops["AttachLoadBalancerTargetGroups"].apply(partialParams)
        );
    }

    invokeAttachLoadBalancers(partialParams: ToOptional<{
      [K in keyof AttachLoadBalancersType & keyof AttachLoadBalancersType & keyof AttachLoadBalancersType & keyof AttachLoadBalancersType & keyof AttachLoadBalancersType & keyof AttachLoadBalancersType & keyof AttachLoadBalancersType]: (AttachLoadBalancersType & AttachLoadBalancersType & AttachLoadBalancersType & AttachLoadBalancersType & AttachLoadBalancersType & AttachLoadBalancersType & AttachLoadBalancersType)[K]
    }>): AttachLoadBalancersResultType {
        return this.client.attachLoadBalancers(
            this.ops["AttachLoadBalancers"].apply(partialParams)
        );
    }

    invokeBatchDeleteScheduledAction(partialParams: ToOptional<{
      [K in keyof BatchDeleteScheduledActionType & keyof BatchDeleteScheduledActionType & keyof BatchDeleteScheduledActionType & keyof BatchDeleteScheduledActionType & keyof BatchDeleteScheduledActionType & keyof BatchDeleteScheduledActionType & keyof BatchDeleteScheduledActionType]: (BatchDeleteScheduledActionType & BatchDeleteScheduledActionType & BatchDeleteScheduledActionType & BatchDeleteScheduledActionType & BatchDeleteScheduledActionType & BatchDeleteScheduledActionType & BatchDeleteScheduledActionType)[K]
    }>): BatchDeleteScheduledActionAnswer {
        return this.client.batchDeleteScheduledAction(
            this.ops["BatchDeleteScheduledAction"].apply(partialParams)
        );
    }

    invokeBatchPutScheduledUpdateGroupAction(partialParams: ToOptional<{
      [K in keyof BatchPutScheduledUpdateGroupActionType & keyof BatchPutScheduledUpdateGroupActionType & keyof BatchPutScheduledUpdateGroupActionType & keyof BatchPutScheduledUpdateGroupActionType & keyof BatchPutScheduledUpdateGroupActionType & keyof BatchPutScheduledUpdateGroupActionType & keyof BatchPutScheduledUpdateGroupActionType]: (BatchPutScheduledUpdateGroupActionType & BatchPutScheduledUpdateGroupActionType & BatchPutScheduledUpdateGroupActionType & BatchPutScheduledUpdateGroupActionType & BatchPutScheduledUpdateGroupActionType & BatchPutScheduledUpdateGroupActionType & BatchPutScheduledUpdateGroupActionType)[K]
    }>): BatchPutScheduledUpdateGroupActionAnswer {
        return this.client.batchPutScheduledUpdateGroupAction(
            this.ops["BatchPutScheduledUpdateGroupAction"].apply(partialParams)
        );
    }

    invokeCancelInstanceRefresh(partialParams: ToOptional<{
      [K in keyof CancelInstanceRefreshType & keyof CancelInstanceRefreshType & keyof CancelInstanceRefreshType & keyof CancelInstanceRefreshType & keyof CancelInstanceRefreshType & keyof CancelInstanceRefreshType & keyof CancelInstanceRefreshType]: (CancelInstanceRefreshType & CancelInstanceRefreshType & CancelInstanceRefreshType & CancelInstanceRefreshType & CancelInstanceRefreshType & CancelInstanceRefreshType & CancelInstanceRefreshType)[K]
    }>): CancelInstanceRefreshAnswer {
        return this.client.cancelInstanceRefresh(
            this.ops["CancelInstanceRefresh"].apply(partialParams)
        );
    }

    invokeCompleteLifecycleAction(partialParams: ToOptional<{
      [K in keyof CompleteLifecycleActionType & keyof CompleteLifecycleActionType & keyof CompleteLifecycleActionType & keyof CompleteLifecycleActionType & keyof CompleteLifecycleActionType & keyof CompleteLifecycleActionType & keyof CompleteLifecycleActionType]: (CompleteLifecycleActionType & CompleteLifecycleActionType & CompleteLifecycleActionType & CompleteLifecycleActionType & CompleteLifecycleActionType & CompleteLifecycleActionType & CompleteLifecycleActionType)[K]
    }>): CompleteLifecycleActionAnswer {
        return this.client.completeLifecycleAction(
            this.ops["CompleteLifecycleAction"].apply(partialParams)
        );
    }

    invokeCreateAutoScalingGroup(partialParams: ToOptional<{
      [K in keyof CreateAutoScalingGroupType & keyof CreateAutoScalingGroupType & keyof CreateAutoScalingGroupType & keyof CreateAutoScalingGroupType & keyof CreateAutoScalingGroupType & keyof CreateAutoScalingGroupType & keyof CreateAutoScalingGroupType]: (CreateAutoScalingGroupType & CreateAutoScalingGroupType & CreateAutoScalingGroupType & CreateAutoScalingGroupType & CreateAutoScalingGroupType & CreateAutoScalingGroupType & CreateAutoScalingGroupType)[K]
    }>): void {
        return this.client.createAutoScalingGroup(
            this.ops["CreateAutoScalingGroup"].apply(partialParams)
        );
    }

    invokeCreateLaunchConfiguration(partialParams: ToOptional<{
      [K in keyof CreateLaunchConfigurationType & keyof CreateLaunchConfigurationType & keyof CreateLaunchConfigurationType & keyof CreateLaunchConfigurationType & keyof CreateLaunchConfigurationType & keyof CreateLaunchConfigurationType & keyof CreateLaunchConfigurationType]: (CreateLaunchConfigurationType & CreateLaunchConfigurationType & CreateLaunchConfigurationType & CreateLaunchConfigurationType & CreateLaunchConfigurationType & CreateLaunchConfigurationType & CreateLaunchConfigurationType)[K]
    }>): void {
        return this.client.createLaunchConfiguration(
            this.ops["CreateLaunchConfiguration"].apply(partialParams)
        );
    }

    invokeCreateOrUpdateTags(partialParams: ToOptional<{
      [K in keyof CreateOrUpdateTagsType & keyof CreateOrUpdateTagsType & keyof CreateOrUpdateTagsType & keyof CreateOrUpdateTagsType & keyof CreateOrUpdateTagsType & keyof CreateOrUpdateTagsType & keyof CreateOrUpdateTagsType]: (CreateOrUpdateTagsType & CreateOrUpdateTagsType & CreateOrUpdateTagsType & CreateOrUpdateTagsType & CreateOrUpdateTagsType & CreateOrUpdateTagsType & CreateOrUpdateTagsType)[K]
    }>): void {
        return this.client.createOrUpdateTags(
            this.ops["CreateOrUpdateTags"].apply(partialParams)
        );
    }

    invokeDeleteAutoScalingGroup(partialParams: ToOptional<{
      [K in keyof DeleteAutoScalingGroupType & keyof DeleteAutoScalingGroupType & keyof DeleteAutoScalingGroupType & keyof DeleteAutoScalingGroupType & keyof DeleteAutoScalingGroupType & keyof DeleteAutoScalingGroupType & keyof DeleteAutoScalingGroupType]: (DeleteAutoScalingGroupType & DeleteAutoScalingGroupType & DeleteAutoScalingGroupType & DeleteAutoScalingGroupType & DeleteAutoScalingGroupType & DeleteAutoScalingGroupType & DeleteAutoScalingGroupType)[K]
    }>): void {
        return this.client.deleteAutoScalingGroup(
            this.ops["DeleteAutoScalingGroup"].apply(partialParams)
        );
    }

    invokeDeleteLaunchConfiguration(partialParams: ToOptional<{
      [K in keyof LaunchConfigurationNameType & keyof LaunchConfigurationNameType & keyof LaunchConfigurationNameType & keyof LaunchConfigurationNameType & keyof LaunchConfigurationNameType & keyof LaunchConfigurationNameType & keyof LaunchConfigurationNameType]: (LaunchConfigurationNameType & LaunchConfigurationNameType & LaunchConfigurationNameType & LaunchConfigurationNameType & LaunchConfigurationNameType & LaunchConfigurationNameType & LaunchConfigurationNameType)[K]
    }>): void {
        return this.client.deleteLaunchConfiguration(
            this.ops["DeleteLaunchConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteLifecycleHook(partialParams: ToOptional<{
      [K in keyof DeleteLifecycleHookType & keyof DeleteLifecycleHookType & keyof DeleteLifecycleHookType & keyof DeleteLifecycleHookType & keyof DeleteLifecycleHookType & keyof DeleteLifecycleHookType & keyof DeleteLifecycleHookType]: (DeleteLifecycleHookType & DeleteLifecycleHookType & DeleteLifecycleHookType & DeleteLifecycleHookType & DeleteLifecycleHookType & DeleteLifecycleHookType & DeleteLifecycleHookType)[K]
    }>): DeleteLifecycleHookAnswer {
        return this.client.deleteLifecycleHook(
            this.ops["DeleteLifecycleHook"].apply(partialParams)
        );
    }

    invokeDeleteNotificationConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteNotificationConfigurationType & keyof DeleteNotificationConfigurationType & keyof DeleteNotificationConfigurationType & keyof DeleteNotificationConfigurationType & keyof DeleteNotificationConfigurationType & keyof DeleteNotificationConfigurationType & keyof DeleteNotificationConfigurationType]: (DeleteNotificationConfigurationType & DeleteNotificationConfigurationType & DeleteNotificationConfigurationType & DeleteNotificationConfigurationType & DeleteNotificationConfigurationType & DeleteNotificationConfigurationType & DeleteNotificationConfigurationType)[K]
    }>): void {
        return this.client.deleteNotificationConfiguration(
            this.ops["DeleteNotificationConfiguration"].apply(partialParams)
        );
    }

    invokeDeletePolicy(partialParams: ToOptional<{
      [K in keyof DeletePolicyType & keyof DeletePolicyType & keyof DeletePolicyType & keyof DeletePolicyType & keyof DeletePolicyType & keyof DeletePolicyType & keyof DeletePolicyType]: (DeletePolicyType & DeletePolicyType & DeletePolicyType & DeletePolicyType & DeletePolicyType & DeletePolicyType & DeletePolicyType)[K]
    }>): void {
        return this.client.deletePolicy(
            this.ops["DeletePolicy"].apply(partialParams)
        );
    }

    invokeDeleteScheduledAction(partialParams: ToOptional<{
      [K in keyof DeleteScheduledActionType & keyof DeleteScheduledActionType & keyof DeleteScheduledActionType & keyof DeleteScheduledActionType & keyof DeleteScheduledActionType & keyof DeleteScheduledActionType & keyof DeleteScheduledActionType]: (DeleteScheduledActionType & DeleteScheduledActionType & DeleteScheduledActionType & DeleteScheduledActionType & DeleteScheduledActionType & DeleteScheduledActionType & DeleteScheduledActionType)[K]
    }>): void {
        return this.client.deleteScheduledAction(
            this.ops["DeleteScheduledAction"].apply(partialParams)
        );
    }

    invokeDeleteTags(partialParams: ToOptional<{
      [K in keyof DeleteTagsType & keyof DeleteTagsType & keyof DeleteTagsType & keyof DeleteTagsType & keyof DeleteTagsType & keyof DeleteTagsType & keyof DeleteTagsType]: (DeleteTagsType & DeleteTagsType & DeleteTagsType & DeleteTagsType & DeleteTagsType & DeleteTagsType & DeleteTagsType)[K]
    }>): void {
        return this.client.deleteTags(
            this.ops["DeleteTags"].apply(partialParams)
        );
    }

    invokeDeleteWarmPool(partialParams: ToOptional<{
      [K in keyof DeleteWarmPoolType & keyof DeleteWarmPoolType & keyof DeleteWarmPoolType & keyof DeleteWarmPoolType & keyof DeleteWarmPoolType & keyof DeleteWarmPoolType & keyof DeleteWarmPoolType]: (DeleteWarmPoolType & DeleteWarmPoolType & DeleteWarmPoolType & DeleteWarmPoolType & DeleteWarmPoolType & DeleteWarmPoolType & DeleteWarmPoolType)[K]
    }>): DeleteWarmPoolAnswer {
        return this.client.deleteWarmPool(
            this.ops["DeleteWarmPool"].apply(partialParams)
        );
    }

    invokeDescribeInstanceRefreshes(partialParams: ToOptional<{
      [K in keyof DescribeInstanceRefreshesType & keyof DescribeInstanceRefreshesType & keyof DescribeInstanceRefreshesType & keyof DescribeInstanceRefreshesType & keyof DescribeInstanceRefreshesType & keyof DescribeInstanceRefreshesType & keyof DescribeInstanceRefreshesType]: (DescribeInstanceRefreshesType & DescribeInstanceRefreshesType & DescribeInstanceRefreshesType & DescribeInstanceRefreshesType & DescribeInstanceRefreshesType & DescribeInstanceRefreshesType & DescribeInstanceRefreshesType)[K]
    }>): DescribeInstanceRefreshesAnswer {
        return this.client.describeInstanceRefreshes(
            this.ops["DescribeInstanceRefreshes"].apply(partialParams)
        );
    }

    invokeDescribeLifecycleHooks(partialParams: ToOptional<{
      [K in keyof DescribeLifecycleHooksType & keyof DescribeLifecycleHooksType & keyof DescribeLifecycleHooksType & keyof DescribeLifecycleHooksType & keyof DescribeLifecycleHooksType & keyof DescribeLifecycleHooksType & keyof DescribeLifecycleHooksType]: (DescribeLifecycleHooksType & DescribeLifecycleHooksType & DescribeLifecycleHooksType & DescribeLifecycleHooksType & DescribeLifecycleHooksType & DescribeLifecycleHooksType & DescribeLifecycleHooksType)[K]
    }>): DescribeLifecycleHooksAnswer {
        return this.client.describeLifecycleHooks(
            this.ops["DescribeLifecycleHooks"].apply(partialParams)
        );
    }

    invokeDescribeLoadBalancerTargetGroups(partialParams: ToOptional<{
      [K in keyof DescribeLoadBalancerTargetGroupsRequest & keyof DescribeLoadBalancerTargetGroupsRequest & keyof DescribeLoadBalancerTargetGroupsRequest & keyof DescribeLoadBalancerTargetGroupsRequest & keyof DescribeLoadBalancerTargetGroupsRequest & keyof DescribeLoadBalancerTargetGroupsRequest & keyof DescribeLoadBalancerTargetGroupsRequest]: (DescribeLoadBalancerTargetGroupsRequest & DescribeLoadBalancerTargetGroupsRequest & DescribeLoadBalancerTargetGroupsRequest & DescribeLoadBalancerTargetGroupsRequest & DescribeLoadBalancerTargetGroupsRequest & DescribeLoadBalancerTargetGroupsRequest & DescribeLoadBalancerTargetGroupsRequest)[K]
    }>): DescribeLoadBalancerTargetGroupsResponse {
        return this.client.describeLoadBalancerTargetGroups(
            this.ops["DescribeLoadBalancerTargetGroups"].apply(partialParams)
        );
    }

    invokeDescribeLoadBalancers(partialParams: ToOptional<{
      [K in keyof DescribeLoadBalancersRequest & keyof DescribeLoadBalancersRequest & keyof DescribeLoadBalancersRequest & keyof DescribeLoadBalancersRequest & keyof DescribeLoadBalancersRequest & keyof DescribeLoadBalancersRequest & keyof DescribeLoadBalancersRequest]: (DescribeLoadBalancersRequest & DescribeLoadBalancersRequest & DescribeLoadBalancersRequest & DescribeLoadBalancersRequest & DescribeLoadBalancersRequest & DescribeLoadBalancersRequest & DescribeLoadBalancersRequest)[K]
    }>): DescribeLoadBalancersResponse {
        return this.client.describeLoadBalancers(
            this.ops["DescribeLoadBalancers"].apply(partialParams)
        );
    }

    invokeDescribeWarmPool(partialParams: ToOptional<{
      [K in keyof DescribeWarmPoolType & keyof DescribeWarmPoolType & keyof DescribeWarmPoolType & keyof DescribeWarmPoolType & keyof DescribeWarmPoolType & keyof DescribeWarmPoolType & keyof DescribeWarmPoolType]: (DescribeWarmPoolType & DescribeWarmPoolType & DescribeWarmPoolType & DescribeWarmPoolType & DescribeWarmPoolType & DescribeWarmPoolType & DescribeWarmPoolType)[K]
    }>): DescribeWarmPoolAnswer {
        return this.client.describeWarmPool(
            this.ops["DescribeWarmPool"].apply(partialParams)
        );
    }

    invokeDetachInstances(partialParams: ToOptional<{
      [K in keyof DetachInstancesQuery & keyof DetachInstancesQuery & keyof DetachInstancesQuery & keyof DetachInstancesQuery & keyof DetachInstancesQuery & keyof DetachInstancesQuery & keyof DetachInstancesQuery]: (DetachInstancesQuery & DetachInstancesQuery & DetachInstancesQuery & DetachInstancesQuery & DetachInstancesQuery & DetachInstancesQuery & DetachInstancesQuery)[K]
    }>): DetachInstancesAnswer {
        return this.client.detachInstances(
            this.ops["DetachInstances"].apply(partialParams)
        );
    }

    invokeDetachLoadBalancerTargetGroups(partialParams: ToOptional<{
      [K in keyof DetachLoadBalancerTargetGroupsType & keyof DetachLoadBalancerTargetGroupsType & keyof DetachLoadBalancerTargetGroupsType & keyof DetachLoadBalancerTargetGroupsType & keyof DetachLoadBalancerTargetGroupsType & keyof DetachLoadBalancerTargetGroupsType & keyof DetachLoadBalancerTargetGroupsType]: (DetachLoadBalancerTargetGroupsType & DetachLoadBalancerTargetGroupsType & DetachLoadBalancerTargetGroupsType & DetachLoadBalancerTargetGroupsType & DetachLoadBalancerTargetGroupsType & DetachLoadBalancerTargetGroupsType & DetachLoadBalancerTargetGroupsType)[K]
    }>): DetachLoadBalancerTargetGroupsResultType {
        return this.client.detachLoadBalancerTargetGroups(
            this.ops["DetachLoadBalancerTargetGroups"].apply(partialParams)
        );
    }

    invokeDetachLoadBalancers(partialParams: ToOptional<{
      [K in keyof DetachLoadBalancersType & keyof DetachLoadBalancersType & keyof DetachLoadBalancersType & keyof DetachLoadBalancersType & keyof DetachLoadBalancersType & keyof DetachLoadBalancersType & keyof DetachLoadBalancersType]: (DetachLoadBalancersType & DetachLoadBalancersType & DetachLoadBalancersType & DetachLoadBalancersType & DetachLoadBalancersType & DetachLoadBalancersType & DetachLoadBalancersType)[K]
    }>): DetachLoadBalancersResultType {
        return this.client.detachLoadBalancers(
            this.ops["DetachLoadBalancers"].apply(partialParams)
        );
    }

    invokeDisableMetricsCollection(partialParams: ToOptional<{
      [K in keyof DisableMetricsCollectionQuery & keyof DisableMetricsCollectionQuery & keyof DisableMetricsCollectionQuery & keyof DisableMetricsCollectionQuery & keyof DisableMetricsCollectionQuery & keyof DisableMetricsCollectionQuery & keyof DisableMetricsCollectionQuery]: (DisableMetricsCollectionQuery & DisableMetricsCollectionQuery & DisableMetricsCollectionQuery & DisableMetricsCollectionQuery & DisableMetricsCollectionQuery & DisableMetricsCollectionQuery & DisableMetricsCollectionQuery)[K]
    }>): void {
        return this.client.disableMetricsCollection(
            this.ops["DisableMetricsCollection"].apply(partialParams)
        );
    }

    invokeEnableMetricsCollection(partialParams: ToOptional<{
      [K in keyof EnableMetricsCollectionQuery & keyof EnableMetricsCollectionQuery & keyof EnableMetricsCollectionQuery & keyof EnableMetricsCollectionQuery & keyof EnableMetricsCollectionQuery & keyof EnableMetricsCollectionQuery & keyof EnableMetricsCollectionQuery]: (EnableMetricsCollectionQuery & EnableMetricsCollectionQuery & EnableMetricsCollectionQuery & EnableMetricsCollectionQuery & EnableMetricsCollectionQuery & EnableMetricsCollectionQuery & EnableMetricsCollectionQuery)[K]
    }>): void {
        return this.client.enableMetricsCollection(
            this.ops["EnableMetricsCollection"].apply(partialParams)
        );
    }

    invokeEnterStandby(partialParams: ToOptional<{
      [K in keyof EnterStandbyQuery & keyof EnterStandbyQuery & keyof EnterStandbyQuery & keyof EnterStandbyQuery & keyof EnterStandbyQuery & keyof EnterStandbyQuery & keyof EnterStandbyQuery]: (EnterStandbyQuery & EnterStandbyQuery & EnterStandbyQuery & EnterStandbyQuery & EnterStandbyQuery & EnterStandbyQuery & EnterStandbyQuery)[K]
    }>): EnterStandbyAnswer {
        return this.client.enterStandby(
            this.ops["EnterStandby"].apply(partialParams)
        );
    }

    invokeExecutePolicy(partialParams: ToOptional<{
      [K in keyof ExecutePolicyType & keyof ExecutePolicyType & keyof ExecutePolicyType & keyof ExecutePolicyType & keyof ExecutePolicyType & keyof ExecutePolicyType & keyof ExecutePolicyType]: (ExecutePolicyType & ExecutePolicyType & ExecutePolicyType & ExecutePolicyType & ExecutePolicyType & ExecutePolicyType & ExecutePolicyType)[K]
    }>): void {
        return this.client.executePolicy(
            this.ops["ExecutePolicy"].apply(partialParams)
        );
    }

    invokeExitStandby(partialParams: ToOptional<{
      [K in keyof ExitStandbyQuery & keyof ExitStandbyQuery & keyof ExitStandbyQuery & keyof ExitStandbyQuery & keyof ExitStandbyQuery & keyof ExitStandbyQuery & keyof ExitStandbyQuery]: (ExitStandbyQuery & ExitStandbyQuery & ExitStandbyQuery & ExitStandbyQuery & ExitStandbyQuery & ExitStandbyQuery & ExitStandbyQuery)[K]
    }>): ExitStandbyAnswer {
        return this.client.exitStandby(
            this.ops["ExitStandby"].apply(partialParams)
        );
    }

    invokeGetPredictiveScalingForecast(partialParams: ToOptional<{
      [K in keyof GetPredictiveScalingForecastType & keyof GetPredictiveScalingForecastType & keyof GetPredictiveScalingForecastType & keyof GetPredictiveScalingForecastType & keyof GetPredictiveScalingForecastType & keyof GetPredictiveScalingForecastType & keyof GetPredictiveScalingForecastType]: (GetPredictiveScalingForecastType & GetPredictiveScalingForecastType & GetPredictiveScalingForecastType & GetPredictiveScalingForecastType & GetPredictiveScalingForecastType & GetPredictiveScalingForecastType & GetPredictiveScalingForecastType)[K]
    }>): GetPredictiveScalingForecastAnswer {
        return this.client.getPredictiveScalingForecast(
            this.ops["GetPredictiveScalingForecast"].apply(partialParams)
        );
    }

    invokePutLifecycleHook(partialParams: ToOptional<{
      [K in keyof PutLifecycleHookType & keyof PutLifecycleHookType & keyof PutLifecycleHookType & keyof PutLifecycleHookType & keyof PutLifecycleHookType & keyof PutLifecycleHookType & keyof PutLifecycleHookType]: (PutLifecycleHookType & PutLifecycleHookType & PutLifecycleHookType & PutLifecycleHookType & PutLifecycleHookType & PutLifecycleHookType & PutLifecycleHookType)[K]
    }>): PutLifecycleHookAnswer {
        return this.client.putLifecycleHook(
            this.ops["PutLifecycleHook"].apply(partialParams)
        );
    }

    invokePutNotificationConfiguration(partialParams: ToOptional<{
      [K in keyof PutNotificationConfigurationType & keyof PutNotificationConfigurationType & keyof PutNotificationConfigurationType & keyof PutNotificationConfigurationType & keyof PutNotificationConfigurationType & keyof PutNotificationConfigurationType & keyof PutNotificationConfigurationType]: (PutNotificationConfigurationType & PutNotificationConfigurationType & PutNotificationConfigurationType & PutNotificationConfigurationType & PutNotificationConfigurationType & PutNotificationConfigurationType & PutNotificationConfigurationType)[K]
    }>): void {
        return this.client.putNotificationConfiguration(
            this.ops["PutNotificationConfiguration"].apply(partialParams)
        );
    }

    invokePutScalingPolicy(partialParams: ToOptional<{
      [K in keyof PutScalingPolicyType & keyof PutScalingPolicyType & keyof PutScalingPolicyType & keyof PutScalingPolicyType & keyof PutScalingPolicyType & keyof PutScalingPolicyType & keyof PutScalingPolicyType]: (PutScalingPolicyType & PutScalingPolicyType & PutScalingPolicyType & PutScalingPolicyType & PutScalingPolicyType & PutScalingPolicyType & PutScalingPolicyType)[K]
    }>): PolicyARNType {
        return this.client.putScalingPolicy(
            this.ops["PutScalingPolicy"].apply(partialParams)
        );
    }

    invokePutScheduledUpdateGroupAction(partialParams: ToOptional<{
      [K in keyof PutScheduledUpdateGroupActionType & keyof PutScheduledUpdateGroupActionType & keyof PutScheduledUpdateGroupActionType & keyof PutScheduledUpdateGroupActionType & keyof PutScheduledUpdateGroupActionType & keyof PutScheduledUpdateGroupActionType & keyof PutScheduledUpdateGroupActionType]: (PutScheduledUpdateGroupActionType & PutScheduledUpdateGroupActionType & PutScheduledUpdateGroupActionType & PutScheduledUpdateGroupActionType & PutScheduledUpdateGroupActionType & PutScheduledUpdateGroupActionType & PutScheduledUpdateGroupActionType)[K]
    }>): void {
        return this.client.putScheduledUpdateGroupAction(
            this.ops["PutScheduledUpdateGroupAction"].apply(partialParams)
        );
    }

    invokePutWarmPool(partialParams: ToOptional<{
      [K in keyof PutWarmPoolType & keyof PutWarmPoolType & keyof PutWarmPoolType & keyof PutWarmPoolType & keyof PutWarmPoolType & keyof PutWarmPoolType & keyof PutWarmPoolType]: (PutWarmPoolType & PutWarmPoolType & PutWarmPoolType & PutWarmPoolType & PutWarmPoolType & PutWarmPoolType & PutWarmPoolType)[K]
    }>): PutWarmPoolAnswer {
        return this.client.putWarmPool(
            this.ops["PutWarmPool"].apply(partialParams)
        );
    }

    invokeRecordLifecycleActionHeartbeat(partialParams: ToOptional<{
      [K in keyof RecordLifecycleActionHeartbeatType & keyof RecordLifecycleActionHeartbeatType & keyof RecordLifecycleActionHeartbeatType & keyof RecordLifecycleActionHeartbeatType & keyof RecordLifecycleActionHeartbeatType & keyof RecordLifecycleActionHeartbeatType & keyof RecordLifecycleActionHeartbeatType]: (RecordLifecycleActionHeartbeatType & RecordLifecycleActionHeartbeatType & RecordLifecycleActionHeartbeatType & RecordLifecycleActionHeartbeatType & RecordLifecycleActionHeartbeatType & RecordLifecycleActionHeartbeatType & RecordLifecycleActionHeartbeatType)[K]
    }>): RecordLifecycleActionHeartbeatAnswer {
        return this.client.recordLifecycleActionHeartbeat(
            this.ops["RecordLifecycleActionHeartbeat"].apply(partialParams)
        );
    }

    invokeResumeProcesses(partialParams: ToOptional<{
      [K in keyof ScalingProcessQuery & keyof ScalingProcessQuery & keyof ScalingProcessQuery & keyof ScalingProcessQuery & keyof ScalingProcessQuery & keyof ScalingProcessQuery & keyof ScalingProcessQuery]: (ScalingProcessQuery & ScalingProcessQuery & ScalingProcessQuery & ScalingProcessQuery & ScalingProcessQuery & ScalingProcessQuery & ScalingProcessQuery)[K]
    }>): void {
        return this.client.resumeProcesses(
            this.ops["ResumeProcesses"].apply(partialParams)
        );
    }

    invokeSetDesiredCapacity(partialParams: ToOptional<{
      [K in keyof SetDesiredCapacityType & keyof SetDesiredCapacityType & keyof SetDesiredCapacityType & keyof SetDesiredCapacityType & keyof SetDesiredCapacityType & keyof SetDesiredCapacityType & keyof SetDesiredCapacityType]: (SetDesiredCapacityType & SetDesiredCapacityType & SetDesiredCapacityType & SetDesiredCapacityType & SetDesiredCapacityType & SetDesiredCapacityType & SetDesiredCapacityType)[K]
    }>): void {
        return this.client.setDesiredCapacity(
            this.ops["SetDesiredCapacity"].apply(partialParams)
        );
    }

    invokeSetInstanceHealth(partialParams: ToOptional<{
      [K in keyof SetInstanceHealthQuery & keyof SetInstanceHealthQuery & keyof SetInstanceHealthQuery & keyof SetInstanceHealthQuery & keyof SetInstanceHealthQuery & keyof SetInstanceHealthQuery & keyof SetInstanceHealthQuery]: (SetInstanceHealthQuery & SetInstanceHealthQuery & SetInstanceHealthQuery & SetInstanceHealthQuery & SetInstanceHealthQuery & SetInstanceHealthQuery & SetInstanceHealthQuery)[K]
    }>): void {
        return this.client.setInstanceHealth(
            this.ops["SetInstanceHealth"].apply(partialParams)
        );
    }

    invokeSetInstanceProtection(partialParams: ToOptional<{
      [K in keyof SetInstanceProtectionQuery & keyof SetInstanceProtectionQuery & keyof SetInstanceProtectionQuery & keyof SetInstanceProtectionQuery & keyof SetInstanceProtectionQuery & keyof SetInstanceProtectionQuery & keyof SetInstanceProtectionQuery]: (SetInstanceProtectionQuery & SetInstanceProtectionQuery & SetInstanceProtectionQuery & SetInstanceProtectionQuery & SetInstanceProtectionQuery & SetInstanceProtectionQuery & SetInstanceProtectionQuery)[K]
    }>): SetInstanceProtectionAnswer {
        return this.client.setInstanceProtection(
            this.ops["SetInstanceProtection"].apply(partialParams)
        );
    }

    invokeStartInstanceRefresh(partialParams: ToOptional<{
      [K in keyof StartInstanceRefreshType & keyof StartInstanceRefreshType & keyof StartInstanceRefreshType & keyof StartInstanceRefreshType & keyof StartInstanceRefreshType & keyof StartInstanceRefreshType & keyof StartInstanceRefreshType]: (StartInstanceRefreshType & StartInstanceRefreshType & StartInstanceRefreshType & StartInstanceRefreshType & StartInstanceRefreshType & StartInstanceRefreshType & StartInstanceRefreshType)[K]
    }>): StartInstanceRefreshAnswer {
        return this.client.startInstanceRefresh(
            this.ops["StartInstanceRefresh"].apply(partialParams)
        );
    }

    invokeSuspendProcesses(partialParams: ToOptional<{
      [K in keyof ScalingProcessQuery & keyof ScalingProcessQuery & keyof ScalingProcessQuery & keyof ScalingProcessQuery & keyof ScalingProcessQuery & keyof ScalingProcessQuery & keyof ScalingProcessQuery]: (ScalingProcessQuery & ScalingProcessQuery & ScalingProcessQuery & ScalingProcessQuery & ScalingProcessQuery & ScalingProcessQuery & ScalingProcessQuery)[K]
    }>): void {
        return this.client.suspendProcesses(
            this.ops["SuspendProcesses"].apply(partialParams)
        );
    }

    invokeTerminateInstanceInAutoScalingGroup(partialParams: ToOptional<{
      [K in keyof TerminateInstanceInAutoScalingGroupType & keyof TerminateInstanceInAutoScalingGroupType & keyof TerminateInstanceInAutoScalingGroupType & keyof TerminateInstanceInAutoScalingGroupType & keyof TerminateInstanceInAutoScalingGroupType & keyof TerminateInstanceInAutoScalingGroupType & keyof TerminateInstanceInAutoScalingGroupType]: (TerminateInstanceInAutoScalingGroupType & TerminateInstanceInAutoScalingGroupType & TerminateInstanceInAutoScalingGroupType & TerminateInstanceInAutoScalingGroupType & TerminateInstanceInAutoScalingGroupType & TerminateInstanceInAutoScalingGroupType & TerminateInstanceInAutoScalingGroupType)[K]
    }>): ActivityType {
        return this.client.terminateInstanceInAutoScalingGroup(
            this.ops["TerminateInstanceInAutoScalingGroup"].apply(partialParams)
        );
    }

    invokeUpdateAutoScalingGroup(partialParams: ToOptional<{
      [K in keyof UpdateAutoScalingGroupType & keyof UpdateAutoScalingGroupType & keyof UpdateAutoScalingGroupType & keyof UpdateAutoScalingGroupType & keyof UpdateAutoScalingGroupType & keyof UpdateAutoScalingGroupType & keyof UpdateAutoScalingGroupType]: (UpdateAutoScalingGroupType & UpdateAutoScalingGroupType & UpdateAutoScalingGroupType & UpdateAutoScalingGroupType & UpdateAutoScalingGroupType & UpdateAutoScalingGroupType & UpdateAutoScalingGroupType)[K]
    }>): void {
        return this.client.updateAutoScalingGroup(
            this.ops["UpdateAutoScalingGroup"].apply(partialParams)
        );
    }
}