
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
const schema = require("../apis/autoscaling-2011-01-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.autoscaling.Schedule {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.autoscaling.Schedule>) {
        super(...args)
        this.client = new awssdk.AutoScaling()
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

    invokeAttachInstances(partialParams: ToOptional<{
      [K in keyof AttachInstancesQuery & keyof AttachInstancesQuery & keyof AttachInstancesQuery & keyof AttachInstancesQuery & keyof AttachInstancesQuery & keyof AttachInstancesQuery & keyof AttachInstancesQuery]: (AttachInstancesQuery & AttachInstancesQuery & AttachInstancesQuery & AttachInstancesQuery & AttachInstancesQuery & AttachInstancesQuery & AttachInstancesQuery)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachInstances(
          this.ops["AttachInstances"].applicator.apply(partialParams)
        );
    }

    invokeAttachLoadBalancerTargetGroups(partialParams: ToOptional<{
      [K in keyof AttachLoadBalancerTargetGroupsType & keyof AttachLoadBalancerTargetGroupsType & keyof AttachLoadBalancerTargetGroupsType & keyof AttachLoadBalancerTargetGroupsType & keyof AttachLoadBalancerTargetGroupsType & keyof AttachLoadBalancerTargetGroupsType & keyof AttachLoadBalancerTargetGroupsType]: (AttachLoadBalancerTargetGroupsType & AttachLoadBalancerTargetGroupsType & AttachLoadBalancerTargetGroupsType & AttachLoadBalancerTargetGroupsType & AttachLoadBalancerTargetGroupsType & AttachLoadBalancerTargetGroupsType & AttachLoadBalancerTargetGroupsType)[K]
    }>): Request<AttachLoadBalancerTargetGroupsResultType, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachLoadBalancerTargetGroups(
          this.ops["AttachLoadBalancerTargetGroups"].applicator.apply(partialParams)
        );
    }

    invokeAttachLoadBalancers(partialParams: ToOptional<{
      [K in keyof AttachLoadBalancersType & keyof AttachLoadBalancersType & keyof AttachLoadBalancersType & keyof AttachLoadBalancersType & keyof AttachLoadBalancersType & keyof AttachLoadBalancersType & keyof AttachLoadBalancersType]: (AttachLoadBalancersType & AttachLoadBalancersType & AttachLoadBalancersType & AttachLoadBalancersType & AttachLoadBalancersType & AttachLoadBalancersType & AttachLoadBalancersType)[K]
    }>): Request<AttachLoadBalancersResultType, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachLoadBalancers(
          this.ops["AttachLoadBalancers"].applicator.apply(partialParams)
        );
    }

    invokeBatchDeleteScheduledAction(partialParams: ToOptional<{
      [K in keyof BatchDeleteScheduledActionType & keyof BatchDeleteScheduledActionType & keyof BatchDeleteScheduledActionType & keyof BatchDeleteScheduledActionType & keyof BatchDeleteScheduledActionType & keyof BatchDeleteScheduledActionType & keyof BatchDeleteScheduledActionType]: (BatchDeleteScheduledActionType & BatchDeleteScheduledActionType & BatchDeleteScheduledActionType & BatchDeleteScheduledActionType & BatchDeleteScheduledActionType & BatchDeleteScheduledActionType & BatchDeleteScheduledActionType)[K]
    }>): Request<BatchDeleteScheduledActionAnswer, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchDeleteScheduledAction(
          this.ops["BatchDeleteScheduledAction"].applicator.apply(partialParams)
        );
    }

    invokeBatchPutScheduledUpdateGroupAction(partialParams: ToOptional<{
      [K in keyof BatchPutScheduledUpdateGroupActionType & keyof BatchPutScheduledUpdateGroupActionType & keyof BatchPutScheduledUpdateGroupActionType & keyof BatchPutScheduledUpdateGroupActionType & keyof BatchPutScheduledUpdateGroupActionType & keyof BatchPutScheduledUpdateGroupActionType & keyof BatchPutScheduledUpdateGroupActionType]: (BatchPutScheduledUpdateGroupActionType & BatchPutScheduledUpdateGroupActionType & BatchPutScheduledUpdateGroupActionType & BatchPutScheduledUpdateGroupActionType & BatchPutScheduledUpdateGroupActionType & BatchPutScheduledUpdateGroupActionType & BatchPutScheduledUpdateGroupActionType)[K]
    }>): Request<BatchPutScheduledUpdateGroupActionAnswer, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchPutScheduledUpdateGroupAction(
          this.ops["BatchPutScheduledUpdateGroupAction"].applicator.apply(partialParams)
        );
    }

    invokeCancelInstanceRefresh(partialParams: ToOptional<{
      [K in keyof CancelInstanceRefreshType & keyof CancelInstanceRefreshType & keyof CancelInstanceRefreshType & keyof CancelInstanceRefreshType & keyof CancelInstanceRefreshType & keyof CancelInstanceRefreshType & keyof CancelInstanceRefreshType]: (CancelInstanceRefreshType & CancelInstanceRefreshType & CancelInstanceRefreshType & CancelInstanceRefreshType & CancelInstanceRefreshType & CancelInstanceRefreshType & CancelInstanceRefreshType)[K]
    }>): Request<CancelInstanceRefreshAnswer, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelInstanceRefresh(
          this.ops["CancelInstanceRefresh"].applicator.apply(partialParams)
        );
    }

    invokeCompleteLifecycleAction(partialParams: ToOptional<{
      [K in keyof CompleteLifecycleActionType & keyof CompleteLifecycleActionType & keyof CompleteLifecycleActionType & keyof CompleteLifecycleActionType & keyof CompleteLifecycleActionType & keyof CompleteLifecycleActionType & keyof CompleteLifecycleActionType]: (CompleteLifecycleActionType & CompleteLifecycleActionType & CompleteLifecycleActionType & CompleteLifecycleActionType & CompleteLifecycleActionType & CompleteLifecycleActionType & CompleteLifecycleActionType)[K]
    }>): Request<CompleteLifecycleActionAnswer, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.completeLifecycleAction(
          this.ops["CompleteLifecycleAction"].applicator.apply(partialParams)
        );
    }

    invokeCreateAutoScalingGroup(partialParams: ToOptional<{
      [K in keyof CreateAutoScalingGroupType & keyof CreateAutoScalingGroupType & keyof CreateAutoScalingGroupType & keyof CreateAutoScalingGroupType & keyof CreateAutoScalingGroupType & keyof CreateAutoScalingGroupType & keyof CreateAutoScalingGroupType]: (CreateAutoScalingGroupType & CreateAutoScalingGroupType & CreateAutoScalingGroupType & CreateAutoScalingGroupType & CreateAutoScalingGroupType & CreateAutoScalingGroupType & CreateAutoScalingGroupType)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAutoScalingGroup(
          this.ops["CreateAutoScalingGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateLaunchConfiguration(partialParams: ToOptional<{
      [K in keyof CreateLaunchConfigurationType & keyof CreateLaunchConfigurationType & keyof CreateLaunchConfigurationType & keyof CreateLaunchConfigurationType & keyof CreateLaunchConfigurationType & keyof CreateLaunchConfigurationType & keyof CreateLaunchConfigurationType]: (CreateLaunchConfigurationType & CreateLaunchConfigurationType & CreateLaunchConfigurationType & CreateLaunchConfigurationType & CreateLaunchConfigurationType & CreateLaunchConfigurationType & CreateLaunchConfigurationType)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createLaunchConfiguration(
          this.ops["CreateLaunchConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeCreateOrUpdateTags(partialParams: ToOptional<{
      [K in keyof CreateOrUpdateTagsType & keyof CreateOrUpdateTagsType & keyof CreateOrUpdateTagsType & keyof CreateOrUpdateTagsType & keyof CreateOrUpdateTagsType & keyof CreateOrUpdateTagsType & keyof CreateOrUpdateTagsType]: (CreateOrUpdateTagsType & CreateOrUpdateTagsType & CreateOrUpdateTagsType & CreateOrUpdateTagsType & CreateOrUpdateTagsType & CreateOrUpdateTagsType & CreateOrUpdateTagsType)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createOrUpdateTags(
          this.ops["CreateOrUpdateTags"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAutoScalingGroup(partialParams: ToOptional<{
      [K in keyof DeleteAutoScalingGroupType & keyof DeleteAutoScalingGroupType & keyof DeleteAutoScalingGroupType & keyof DeleteAutoScalingGroupType & keyof DeleteAutoScalingGroupType & keyof DeleteAutoScalingGroupType & keyof DeleteAutoScalingGroupType]: (DeleteAutoScalingGroupType & DeleteAutoScalingGroupType & DeleteAutoScalingGroupType & DeleteAutoScalingGroupType & DeleteAutoScalingGroupType & DeleteAutoScalingGroupType & DeleteAutoScalingGroupType)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAutoScalingGroup(
          this.ops["DeleteAutoScalingGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteLaunchConfiguration(partialParams: ToOptional<{
      [K in keyof LaunchConfigurationNameType & keyof LaunchConfigurationNameType & keyof LaunchConfigurationNameType & keyof LaunchConfigurationNameType & keyof LaunchConfigurationNameType & keyof LaunchConfigurationNameType & keyof LaunchConfigurationNameType]: (LaunchConfigurationNameType & LaunchConfigurationNameType & LaunchConfigurationNameType & LaunchConfigurationNameType & LaunchConfigurationNameType & LaunchConfigurationNameType & LaunchConfigurationNameType)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteLaunchConfiguration(
          this.ops["DeleteLaunchConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDeleteLifecycleHook(partialParams: ToOptional<{
      [K in keyof DeleteLifecycleHookType & keyof DeleteLifecycleHookType & keyof DeleteLifecycleHookType & keyof DeleteLifecycleHookType & keyof DeleteLifecycleHookType & keyof DeleteLifecycleHookType & keyof DeleteLifecycleHookType]: (DeleteLifecycleHookType & DeleteLifecycleHookType & DeleteLifecycleHookType & DeleteLifecycleHookType & DeleteLifecycleHookType & DeleteLifecycleHookType & DeleteLifecycleHookType)[K]
    }>): Request<DeleteLifecycleHookAnswer, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteLifecycleHook(
          this.ops["DeleteLifecycleHook"].applicator.apply(partialParams)
        );
    }

    invokeDeleteNotificationConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteNotificationConfigurationType & keyof DeleteNotificationConfigurationType & keyof DeleteNotificationConfigurationType & keyof DeleteNotificationConfigurationType & keyof DeleteNotificationConfigurationType & keyof DeleteNotificationConfigurationType & keyof DeleteNotificationConfigurationType]: (DeleteNotificationConfigurationType & DeleteNotificationConfigurationType & DeleteNotificationConfigurationType & DeleteNotificationConfigurationType & DeleteNotificationConfigurationType & DeleteNotificationConfigurationType & DeleteNotificationConfigurationType)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteNotificationConfiguration(
          this.ops["DeleteNotificationConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDeletePolicy(partialParams: ToOptional<{
      [K in keyof DeletePolicyType & keyof DeletePolicyType & keyof DeletePolicyType & keyof DeletePolicyType & keyof DeletePolicyType & keyof DeletePolicyType & keyof DeletePolicyType]: (DeletePolicyType & DeletePolicyType & DeletePolicyType & DeletePolicyType & DeletePolicyType & DeletePolicyType & DeletePolicyType)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePolicy(
          this.ops["DeletePolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeleteScheduledAction(partialParams: ToOptional<{
      [K in keyof DeleteScheduledActionType & keyof DeleteScheduledActionType & keyof DeleteScheduledActionType & keyof DeleteScheduledActionType & keyof DeleteScheduledActionType & keyof DeleteScheduledActionType & keyof DeleteScheduledActionType]: (DeleteScheduledActionType & DeleteScheduledActionType & DeleteScheduledActionType & DeleteScheduledActionType & DeleteScheduledActionType & DeleteScheduledActionType & DeleteScheduledActionType)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteScheduledAction(
          this.ops["DeleteScheduledAction"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTags(partialParams: ToOptional<{
      [K in keyof DeleteTagsType & keyof DeleteTagsType & keyof DeleteTagsType & keyof DeleteTagsType & keyof DeleteTagsType & keyof DeleteTagsType & keyof DeleteTagsType]: (DeleteTagsType & DeleteTagsType & DeleteTagsType & DeleteTagsType & DeleteTagsType & DeleteTagsType & DeleteTagsType)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTags(
          this.ops["DeleteTags"].applicator.apply(partialParams)
        );
    }

    invokeDeleteWarmPool(partialParams: ToOptional<{
      [K in keyof DeleteWarmPoolType & keyof DeleteWarmPoolType & keyof DeleteWarmPoolType & keyof DeleteWarmPoolType & keyof DeleteWarmPoolType & keyof DeleteWarmPoolType & keyof DeleteWarmPoolType]: (DeleteWarmPoolType & DeleteWarmPoolType & DeleteWarmPoolType & DeleteWarmPoolType & DeleteWarmPoolType & DeleteWarmPoolType & DeleteWarmPoolType)[K]
    }>): Request<DeleteWarmPoolAnswer, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteWarmPool(
          this.ops["DeleteWarmPool"].applicator.apply(partialParams)
        );
    }

    invokeDescribeInstanceRefreshes(partialParams: ToOptional<{
      [K in keyof DescribeInstanceRefreshesType & keyof DescribeInstanceRefreshesType & keyof DescribeInstanceRefreshesType & keyof DescribeInstanceRefreshesType & keyof DescribeInstanceRefreshesType & keyof DescribeInstanceRefreshesType & keyof DescribeInstanceRefreshesType]: (DescribeInstanceRefreshesType & DescribeInstanceRefreshesType & DescribeInstanceRefreshesType & DescribeInstanceRefreshesType & DescribeInstanceRefreshesType & DescribeInstanceRefreshesType & DescribeInstanceRefreshesType)[K]
    }>): Request<DescribeInstanceRefreshesAnswer, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeInstanceRefreshes(
          this.ops["DescribeInstanceRefreshes"].applicator.apply(partialParams)
        );
    }

    invokeDescribeLifecycleHooks(partialParams: ToOptional<{
      [K in keyof DescribeLifecycleHooksType & keyof DescribeLifecycleHooksType & keyof DescribeLifecycleHooksType & keyof DescribeLifecycleHooksType & keyof DescribeLifecycleHooksType & keyof DescribeLifecycleHooksType & keyof DescribeLifecycleHooksType]: (DescribeLifecycleHooksType & DescribeLifecycleHooksType & DescribeLifecycleHooksType & DescribeLifecycleHooksType & DescribeLifecycleHooksType & DescribeLifecycleHooksType & DescribeLifecycleHooksType)[K]
    }>): Request<DescribeLifecycleHooksAnswer, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeLifecycleHooks(
          this.ops["DescribeLifecycleHooks"].applicator.apply(partialParams)
        );
    }

    invokeDescribeLoadBalancerTargetGroups(partialParams: ToOptional<{
      [K in keyof DescribeLoadBalancerTargetGroupsRequest & keyof DescribeLoadBalancerTargetGroupsRequest & keyof DescribeLoadBalancerTargetGroupsRequest & keyof DescribeLoadBalancerTargetGroupsRequest & keyof DescribeLoadBalancerTargetGroupsRequest & keyof DescribeLoadBalancerTargetGroupsRequest & keyof DescribeLoadBalancerTargetGroupsRequest]: (DescribeLoadBalancerTargetGroupsRequest & DescribeLoadBalancerTargetGroupsRequest & DescribeLoadBalancerTargetGroupsRequest & DescribeLoadBalancerTargetGroupsRequest & DescribeLoadBalancerTargetGroupsRequest & DescribeLoadBalancerTargetGroupsRequest & DescribeLoadBalancerTargetGroupsRequest)[K]
    }>): Request<DescribeLoadBalancerTargetGroupsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeLoadBalancerTargetGroups(
          this.ops["DescribeLoadBalancerTargetGroups"].applicator.apply(partialParams)
        );
    }

    invokeDescribeLoadBalancers(partialParams: ToOptional<{
      [K in keyof DescribeLoadBalancersRequest & keyof DescribeLoadBalancersRequest & keyof DescribeLoadBalancersRequest & keyof DescribeLoadBalancersRequest & keyof DescribeLoadBalancersRequest & keyof DescribeLoadBalancersRequest & keyof DescribeLoadBalancersRequest]: (DescribeLoadBalancersRequest & DescribeLoadBalancersRequest & DescribeLoadBalancersRequest & DescribeLoadBalancersRequest & DescribeLoadBalancersRequest & DescribeLoadBalancersRequest & DescribeLoadBalancersRequest)[K]
    }>): Request<DescribeLoadBalancersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeLoadBalancers(
          this.ops["DescribeLoadBalancers"].applicator.apply(partialParams)
        );
    }

    invokeDescribeWarmPool(partialParams: ToOptional<{
      [K in keyof DescribeWarmPoolType & keyof DescribeWarmPoolType & keyof DescribeWarmPoolType & keyof DescribeWarmPoolType & keyof DescribeWarmPoolType & keyof DescribeWarmPoolType & keyof DescribeWarmPoolType]: (DescribeWarmPoolType & DescribeWarmPoolType & DescribeWarmPoolType & DescribeWarmPoolType & DescribeWarmPoolType & DescribeWarmPoolType & DescribeWarmPoolType)[K]
    }>): Request<DescribeWarmPoolAnswer, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeWarmPool(
          this.ops["DescribeWarmPool"].applicator.apply(partialParams)
        );
    }

    invokeDetachInstances(partialParams: ToOptional<{
      [K in keyof DetachInstancesQuery & keyof DetachInstancesQuery & keyof DetachInstancesQuery & keyof DetachInstancesQuery & keyof DetachInstancesQuery & keyof DetachInstancesQuery & keyof DetachInstancesQuery]: (DetachInstancesQuery & DetachInstancesQuery & DetachInstancesQuery & DetachInstancesQuery & DetachInstancesQuery & DetachInstancesQuery & DetachInstancesQuery)[K]
    }>): Request<DetachInstancesAnswer, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachInstances(
          this.ops["DetachInstances"].applicator.apply(partialParams)
        );
    }

    invokeDetachLoadBalancerTargetGroups(partialParams: ToOptional<{
      [K in keyof DetachLoadBalancerTargetGroupsType & keyof DetachLoadBalancerTargetGroupsType & keyof DetachLoadBalancerTargetGroupsType & keyof DetachLoadBalancerTargetGroupsType & keyof DetachLoadBalancerTargetGroupsType & keyof DetachLoadBalancerTargetGroupsType & keyof DetachLoadBalancerTargetGroupsType]: (DetachLoadBalancerTargetGroupsType & DetachLoadBalancerTargetGroupsType & DetachLoadBalancerTargetGroupsType & DetachLoadBalancerTargetGroupsType & DetachLoadBalancerTargetGroupsType & DetachLoadBalancerTargetGroupsType & DetachLoadBalancerTargetGroupsType)[K]
    }>): Request<DetachLoadBalancerTargetGroupsResultType, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachLoadBalancerTargetGroups(
          this.ops["DetachLoadBalancerTargetGroups"].applicator.apply(partialParams)
        );
    }

    invokeDetachLoadBalancers(partialParams: ToOptional<{
      [K in keyof DetachLoadBalancersType & keyof DetachLoadBalancersType & keyof DetachLoadBalancersType & keyof DetachLoadBalancersType & keyof DetachLoadBalancersType & keyof DetachLoadBalancersType & keyof DetachLoadBalancersType]: (DetachLoadBalancersType & DetachLoadBalancersType & DetachLoadBalancersType & DetachLoadBalancersType & DetachLoadBalancersType & DetachLoadBalancersType & DetachLoadBalancersType)[K]
    }>): Request<DetachLoadBalancersResultType, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachLoadBalancers(
          this.ops["DetachLoadBalancers"].applicator.apply(partialParams)
        );
    }

    invokeDisableMetricsCollection(partialParams: ToOptional<{
      [K in keyof DisableMetricsCollectionQuery & keyof DisableMetricsCollectionQuery & keyof DisableMetricsCollectionQuery & keyof DisableMetricsCollectionQuery & keyof DisableMetricsCollectionQuery & keyof DisableMetricsCollectionQuery & keyof DisableMetricsCollectionQuery]: (DisableMetricsCollectionQuery & DisableMetricsCollectionQuery & DisableMetricsCollectionQuery & DisableMetricsCollectionQuery & DisableMetricsCollectionQuery & DisableMetricsCollectionQuery & DisableMetricsCollectionQuery)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableMetricsCollection(
          this.ops["DisableMetricsCollection"].applicator.apply(partialParams)
        );
    }

    invokeEnableMetricsCollection(partialParams: ToOptional<{
      [K in keyof EnableMetricsCollectionQuery & keyof EnableMetricsCollectionQuery & keyof EnableMetricsCollectionQuery & keyof EnableMetricsCollectionQuery & keyof EnableMetricsCollectionQuery & keyof EnableMetricsCollectionQuery & keyof EnableMetricsCollectionQuery]: (EnableMetricsCollectionQuery & EnableMetricsCollectionQuery & EnableMetricsCollectionQuery & EnableMetricsCollectionQuery & EnableMetricsCollectionQuery & EnableMetricsCollectionQuery & EnableMetricsCollectionQuery)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableMetricsCollection(
          this.ops["EnableMetricsCollection"].applicator.apply(partialParams)
        );
    }

    invokeEnterStandby(partialParams: ToOptional<{
      [K in keyof EnterStandbyQuery & keyof EnterStandbyQuery & keyof EnterStandbyQuery & keyof EnterStandbyQuery & keyof EnterStandbyQuery & keyof EnterStandbyQuery & keyof EnterStandbyQuery]: (EnterStandbyQuery & EnterStandbyQuery & EnterStandbyQuery & EnterStandbyQuery & EnterStandbyQuery & EnterStandbyQuery & EnterStandbyQuery)[K]
    }>): Request<EnterStandbyAnswer, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enterStandby(
          this.ops["EnterStandby"].applicator.apply(partialParams)
        );
    }

    invokeExecutePolicy(partialParams: ToOptional<{
      [K in keyof ExecutePolicyType & keyof ExecutePolicyType & keyof ExecutePolicyType & keyof ExecutePolicyType & keyof ExecutePolicyType & keyof ExecutePolicyType & keyof ExecutePolicyType]: (ExecutePolicyType & ExecutePolicyType & ExecutePolicyType & ExecutePolicyType & ExecutePolicyType & ExecutePolicyType & ExecutePolicyType)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.executePolicy(
          this.ops["ExecutePolicy"].applicator.apply(partialParams)
        );
    }

    invokeExitStandby(partialParams: ToOptional<{
      [K in keyof ExitStandbyQuery & keyof ExitStandbyQuery & keyof ExitStandbyQuery & keyof ExitStandbyQuery & keyof ExitStandbyQuery & keyof ExitStandbyQuery & keyof ExitStandbyQuery]: (ExitStandbyQuery & ExitStandbyQuery & ExitStandbyQuery & ExitStandbyQuery & ExitStandbyQuery & ExitStandbyQuery & ExitStandbyQuery)[K]
    }>): Request<ExitStandbyAnswer, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.exitStandby(
          this.ops["ExitStandby"].applicator.apply(partialParams)
        );
    }

    invokeGetPredictiveScalingForecast(partialParams: ToOptional<{
      [K in keyof GetPredictiveScalingForecastType & keyof GetPredictiveScalingForecastType & keyof GetPredictiveScalingForecastType & keyof GetPredictiveScalingForecastType & keyof GetPredictiveScalingForecastType & keyof GetPredictiveScalingForecastType & keyof GetPredictiveScalingForecastType]: (GetPredictiveScalingForecastType & GetPredictiveScalingForecastType & GetPredictiveScalingForecastType & GetPredictiveScalingForecastType & GetPredictiveScalingForecastType & GetPredictiveScalingForecastType & GetPredictiveScalingForecastType)[K]
    }>): Request<GetPredictiveScalingForecastAnswer, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPredictiveScalingForecast(
          this.ops["GetPredictiveScalingForecast"].applicator.apply(partialParams)
        );
    }

    invokePutLifecycleHook(partialParams: ToOptional<{
      [K in keyof PutLifecycleHookType & keyof PutLifecycleHookType & keyof PutLifecycleHookType & keyof PutLifecycleHookType & keyof PutLifecycleHookType & keyof PutLifecycleHookType & keyof PutLifecycleHookType]: (PutLifecycleHookType & PutLifecycleHookType & PutLifecycleHookType & PutLifecycleHookType & PutLifecycleHookType & PutLifecycleHookType & PutLifecycleHookType)[K]
    }>): Request<PutLifecycleHookAnswer, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putLifecycleHook(
          this.ops["PutLifecycleHook"].applicator.apply(partialParams)
        );
    }

    invokePutNotificationConfiguration(partialParams: ToOptional<{
      [K in keyof PutNotificationConfigurationType & keyof PutNotificationConfigurationType & keyof PutNotificationConfigurationType & keyof PutNotificationConfigurationType & keyof PutNotificationConfigurationType & keyof PutNotificationConfigurationType & keyof PutNotificationConfigurationType]: (PutNotificationConfigurationType & PutNotificationConfigurationType & PutNotificationConfigurationType & PutNotificationConfigurationType & PutNotificationConfigurationType & PutNotificationConfigurationType & PutNotificationConfigurationType)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putNotificationConfiguration(
          this.ops["PutNotificationConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutScalingPolicy(partialParams: ToOptional<{
      [K in keyof PutScalingPolicyType & keyof PutScalingPolicyType & keyof PutScalingPolicyType & keyof PutScalingPolicyType & keyof PutScalingPolicyType & keyof PutScalingPolicyType & keyof PutScalingPolicyType]: (PutScalingPolicyType & PutScalingPolicyType & PutScalingPolicyType & PutScalingPolicyType & PutScalingPolicyType & PutScalingPolicyType & PutScalingPolicyType)[K]
    }>): Request<PolicyARNType, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putScalingPolicy(
          this.ops["PutScalingPolicy"].applicator.apply(partialParams)
        );
    }

    invokePutScheduledUpdateGroupAction(partialParams: ToOptional<{
      [K in keyof PutScheduledUpdateGroupActionType & keyof PutScheduledUpdateGroupActionType & keyof PutScheduledUpdateGroupActionType & keyof PutScheduledUpdateGroupActionType & keyof PutScheduledUpdateGroupActionType & keyof PutScheduledUpdateGroupActionType & keyof PutScheduledUpdateGroupActionType]: (PutScheduledUpdateGroupActionType & PutScheduledUpdateGroupActionType & PutScheduledUpdateGroupActionType & PutScheduledUpdateGroupActionType & PutScheduledUpdateGroupActionType & PutScheduledUpdateGroupActionType & PutScheduledUpdateGroupActionType)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putScheduledUpdateGroupAction(
          this.ops["PutScheduledUpdateGroupAction"].applicator.apply(partialParams)
        );
    }

    invokePutWarmPool(partialParams: ToOptional<{
      [K in keyof PutWarmPoolType & keyof PutWarmPoolType & keyof PutWarmPoolType & keyof PutWarmPoolType & keyof PutWarmPoolType & keyof PutWarmPoolType & keyof PutWarmPoolType]: (PutWarmPoolType & PutWarmPoolType & PutWarmPoolType & PutWarmPoolType & PutWarmPoolType & PutWarmPoolType & PutWarmPoolType)[K]
    }>): Request<PutWarmPoolAnswer, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putWarmPool(
          this.ops["PutWarmPool"].applicator.apply(partialParams)
        );
    }

    invokeRecordLifecycleActionHeartbeat(partialParams: ToOptional<{
      [K in keyof RecordLifecycleActionHeartbeatType & keyof RecordLifecycleActionHeartbeatType & keyof RecordLifecycleActionHeartbeatType & keyof RecordLifecycleActionHeartbeatType & keyof RecordLifecycleActionHeartbeatType & keyof RecordLifecycleActionHeartbeatType & keyof RecordLifecycleActionHeartbeatType]: (RecordLifecycleActionHeartbeatType & RecordLifecycleActionHeartbeatType & RecordLifecycleActionHeartbeatType & RecordLifecycleActionHeartbeatType & RecordLifecycleActionHeartbeatType & RecordLifecycleActionHeartbeatType & RecordLifecycleActionHeartbeatType)[K]
    }>): Request<RecordLifecycleActionHeartbeatAnswer, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.recordLifecycleActionHeartbeat(
          this.ops["RecordLifecycleActionHeartbeat"].applicator.apply(partialParams)
        );
    }

    invokeResumeProcesses(partialParams: ToOptional<{
      [K in keyof ScalingProcessQuery & keyof ScalingProcessQuery & keyof ScalingProcessQuery & keyof ScalingProcessQuery & keyof ScalingProcessQuery & keyof ScalingProcessQuery & keyof ScalingProcessQuery]: (ScalingProcessQuery & ScalingProcessQuery & ScalingProcessQuery & ScalingProcessQuery & ScalingProcessQuery & ScalingProcessQuery & ScalingProcessQuery)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resumeProcesses(
          this.ops["ResumeProcesses"].applicator.apply(partialParams)
        );
    }

    invokeSetDesiredCapacity(partialParams: ToOptional<{
      [K in keyof SetDesiredCapacityType & keyof SetDesiredCapacityType & keyof SetDesiredCapacityType & keyof SetDesiredCapacityType & keyof SetDesiredCapacityType & keyof SetDesiredCapacityType & keyof SetDesiredCapacityType]: (SetDesiredCapacityType & SetDesiredCapacityType & SetDesiredCapacityType & SetDesiredCapacityType & SetDesiredCapacityType & SetDesiredCapacityType & SetDesiredCapacityType)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setDesiredCapacity(
          this.ops["SetDesiredCapacity"].applicator.apply(partialParams)
        );
    }

    invokeSetInstanceHealth(partialParams: ToOptional<{
      [K in keyof SetInstanceHealthQuery & keyof SetInstanceHealthQuery & keyof SetInstanceHealthQuery & keyof SetInstanceHealthQuery & keyof SetInstanceHealthQuery & keyof SetInstanceHealthQuery & keyof SetInstanceHealthQuery]: (SetInstanceHealthQuery & SetInstanceHealthQuery & SetInstanceHealthQuery & SetInstanceHealthQuery & SetInstanceHealthQuery & SetInstanceHealthQuery & SetInstanceHealthQuery)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setInstanceHealth(
          this.ops["SetInstanceHealth"].applicator.apply(partialParams)
        );
    }

    invokeSetInstanceProtection(partialParams: ToOptional<{
      [K in keyof SetInstanceProtectionQuery & keyof SetInstanceProtectionQuery & keyof SetInstanceProtectionQuery & keyof SetInstanceProtectionQuery & keyof SetInstanceProtectionQuery & keyof SetInstanceProtectionQuery & keyof SetInstanceProtectionQuery]: (SetInstanceProtectionQuery & SetInstanceProtectionQuery & SetInstanceProtectionQuery & SetInstanceProtectionQuery & SetInstanceProtectionQuery & SetInstanceProtectionQuery & SetInstanceProtectionQuery)[K]
    }>): Request<SetInstanceProtectionAnswer, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setInstanceProtection(
          this.ops["SetInstanceProtection"].applicator.apply(partialParams)
        );
    }

    invokeStartInstanceRefresh(partialParams: ToOptional<{
      [K in keyof StartInstanceRefreshType & keyof StartInstanceRefreshType & keyof StartInstanceRefreshType & keyof StartInstanceRefreshType & keyof StartInstanceRefreshType & keyof StartInstanceRefreshType & keyof StartInstanceRefreshType]: (StartInstanceRefreshType & StartInstanceRefreshType & StartInstanceRefreshType & StartInstanceRefreshType & StartInstanceRefreshType & StartInstanceRefreshType & StartInstanceRefreshType)[K]
    }>): Request<StartInstanceRefreshAnswer, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startInstanceRefresh(
          this.ops["StartInstanceRefresh"].applicator.apply(partialParams)
        );
    }

    invokeSuspendProcesses(partialParams: ToOptional<{
      [K in keyof ScalingProcessQuery & keyof ScalingProcessQuery & keyof ScalingProcessQuery & keyof ScalingProcessQuery & keyof ScalingProcessQuery & keyof ScalingProcessQuery & keyof ScalingProcessQuery]: (ScalingProcessQuery & ScalingProcessQuery & ScalingProcessQuery & ScalingProcessQuery & ScalingProcessQuery & ScalingProcessQuery & ScalingProcessQuery)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.suspendProcesses(
          this.ops["SuspendProcesses"].applicator.apply(partialParams)
        );
    }

    invokeTerminateInstanceInAutoScalingGroup(partialParams: ToOptional<{
      [K in keyof TerminateInstanceInAutoScalingGroupType & keyof TerminateInstanceInAutoScalingGroupType & keyof TerminateInstanceInAutoScalingGroupType & keyof TerminateInstanceInAutoScalingGroupType & keyof TerminateInstanceInAutoScalingGroupType & keyof TerminateInstanceInAutoScalingGroupType & keyof TerminateInstanceInAutoScalingGroupType]: (TerminateInstanceInAutoScalingGroupType & TerminateInstanceInAutoScalingGroupType & TerminateInstanceInAutoScalingGroupType & TerminateInstanceInAutoScalingGroupType & TerminateInstanceInAutoScalingGroupType & TerminateInstanceInAutoScalingGroupType & TerminateInstanceInAutoScalingGroupType)[K]
    }>): Request<ActivityType, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.terminateInstanceInAutoScalingGroup(
          this.ops["TerminateInstanceInAutoScalingGroup"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAutoScalingGroup(partialParams: ToOptional<{
      [K in keyof UpdateAutoScalingGroupType & keyof UpdateAutoScalingGroupType & keyof UpdateAutoScalingGroupType & keyof UpdateAutoScalingGroupType & keyof UpdateAutoScalingGroupType & keyof UpdateAutoScalingGroupType & keyof UpdateAutoScalingGroupType]: (UpdateAutoScalingGroupType & UpdateAutoScalingGroupType & UpdateAutoScalingGroupType & UpdateAutoScalingGroupType & UpdateAutoScalingGroupType & UpdateAutoScalingGroupType & UpdateAutoScalingGroupType)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAutoScalingGroup(
          this.ops["UpdateAutoScalingGroup"].applicator.apply(partialParams)
        );
    }
}