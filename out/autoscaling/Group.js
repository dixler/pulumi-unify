"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws = __importStar(require("@pulumi/aws"));
const awssdk = __importStar(require("aws-sdk"));
const parse_1 = require("../parse");
class default_1 extends aws.autoscaling.Group {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.AutoScaling();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/autoscaling-2011-01-01.normal.json"), this.client);
    }
    invokeAttachInstances(partialParams) {
        return this.client.attachInstances(this.ops["AttachInstances"].apply(partialParams));
    }
    invokeAttachLoadBalancerTargetGroups(partialParams) {
        return this.client.attachLoadBalancerTargetGroups(this.ops["AttachLoadBalancerTargetGroups"].apply(partialParams));
    }
    invokeAttachLoadBalancers(partialParams) {
        return this.client.attachLoadBalancers(this.ops["AttachLoadBalancers"].apply(partialParams));
    }
    invokeBatchDeleteScheduledAction(partialParams) {
        return this.client.batchDeleteScheduledAction(this.ops["BatchDeleteScheduledAction"].apply(partialParams));
    }
    invokeBatchPutScheduledUpdateGroupAction(partialParams) {
        return this.client.batchPutScheduledUpdateGroupAction(this.ops["BatchPutScheduledUpdateGroupAction"].apply(partialParams));
    }
    invokeCancelInstanceRefresh(partialParams) {
        return this.client.cancelInstanceRefresh(this.ops["CancelInstanceRefresh"].apply(partialParams));
    }
    invokeCompleteLifecycleAction(partialParams) {
        return this.client.completeLifecycleAction(this.ops["CompleteLifecycleAction"].apply(partialParams));
    }
    invokeCreateAutoScalingGroup(partialParams) {
        return this.client.createAutoScalingGroup(this.ops["CreateAutoScalingGroup"].apply(partialParams));
    }
    invokeCreateLaunchConfiguration(partialParams) {
        return this.client.createLaunchConfiguration(this.ops["CreateLaunchConfiguration"].apply(partialParams));
    }
    invokeCreateOrUpdateTags(partialParams) {
        return this.client.createOrUpdateTags(this.ops["CreateOrUpdateTags"].apply(partialParams));
    }
    invokeDeleteAutoScalingGroup(partialParams) {
        return this.client.deleteAutoScalingGroup(this.ops["DeleteAutoScalingGroup"].apply(partialParams));
    }
    invokeDeleteLaunchConfiguration(partialParams) {
        return this.client.deleteLaunchConfiguration(this.ops["DeleteLaunchConfiguration"].apply(partialParams));
    }
    invokeDeleteLifecycleHook(partialParams) {
        return this.client.deleteLifecycleHook(this.ops["DeleteLifecycleHook"].apply(partialParams));
    }
    invokeDeleteNotificationConfiguration(partialParams) {
        return this.client.deleteNotificationConfiguration(this.ops["DeleteNotificationConfiguration"].apply(partialParams));
    }
    invokeDeletePolicy(partialParams) {
        return this.client.deletePolicy(this.ops["DeletePolicy"].apply(partialParams));
    }
    invokeDeleteScheduledAction(partialParams) {
        return this.client.deleteScheduledAction(this.ops["DeleteScheduledAction"].apply(partialParams));
    }
    invokeDeleteTags(partialParams) {
        return this.client.deleteTags(this.ops["DeleteTags"].apply(partialParams));
    }
    invokeDeleteWarmPool(partialParams) {
        return this.client.deleteWarmPool(this.ops["DeleteWarmPool"].apply(partialParams));
    }
    invokeDescribeInstanceRefreshes(partialParams) {
        return this.client.describeInstanceRefreshes(this.ops["DescribeInstanceRefreshes"].apply(partialParams));
    }
    invokeDescribeLifecycleHooks(partialParams) {
        return this.client.describeLifecycleHooks(this.ops["DescribeLifecycleHooks"].apply(partialParams));
    }
    invokeDescribeLoadBalancerTargetGroups(partialParams) {
        return this.client.describeLoadBalancerTargetGroups(this.ops["DescribeLoadBalancerTargetGroups"].apply(partialParams));
    }
    invokeDescribeLoadBalancers(partialParams) {
        return this.client.describeLoadBalancers(this.ops["DescribeLoadBalancers"].apply(partialParams));
    }
    invokeDescribeWarmPool(partialParams) {
        return this.client.describeWarmPool(this.ops["DescribeWarmPool"].apply(partialParams));
    }
    invokeDetachInstances(partialParams) {
        return this.client.detachInstances(this.ops["DetachInstances"].apply(partialParams));
    }
    invokeDetachLoadBalancerTargetGroups(partialParams) {
        return this.client.detachLoadBalancerTargetGroups(this.ops["DetachLoadBalancerTargetGroups"].apply(partialParams));
    }
    invokeDetachLoadBalancers(partialParams) {
        return this.client.detachLoadBalancers(this.ops["DetachLoadBalancers"].apply(partialParams));
    }
    invokeDisableMetricsCollection(partialParams) {
        return this.client.disableMetricsCollection(this.ops["DisableMetricsCollection"].apply(partialParams));
    }
    invokeEnableMetricsCollection(partialParams) {
        return this.client.enableMetricsCollection(this.ops["EnableMetricsCollection"].apply(partialParams));
    }
    invokeEnterStandby(partialParams) {
        return this.client.enterStandby(this.ops["EnterStandby"].apply(partialParams));
    }
    invokeExecutePolicy(partialParams) {
        return this.client.executePolicy(this.ops["ExecutePolicy"].apply(partialParams));
    }
    invokeExitStandby(partialParams) {
        return this.client.exitStandby(this.ops["ExitStandby"].apply(partialParams));
    }
    invokeGetPredictiveScalingForecast(partialParams) {
        return this.client.getPredictiveScalingForecast(this.ops["GetPredictiveScalingForecast"].apply(partialParams));
    }
    invokePutLifecycleHook(partialParams) {
        return this.client.putLifecycleHook(this.ops["PutLifecycleHook"].apply(partialParams));
    }
    invokePutNotificationConfiguration(partialParams) {
        return this.client.putNotificationConfiguration(this.ops["PutNotificationConfiguration"].apply(partialParams));
    }
    invokePutScalingPolicy(partialParams) {
        return this.client.putScalingPolicy(this.ops["PutScalingPolicy"].apply(partialParams));
    }
    invokePutScheduledUpdateGroupAction(partialParams) {
        return this.client.putScheduledUpdateGroupAction(this.ops["PutScheduledUpdateGroupAction"].apply(partialParams));
    }
    invokePutWarmPool(partialParams) {
        return this.client.putWarmPool(this.ops["PutWarmPool"].apply(partialParams));
    }
    invokeRecordLifecycleActionHeartbeat(partialParams) {
        return this.client.recordLifecycleActionHeartbeat(this.ops["RecordLifecycleActionHeartbeat"].apply(partialParams));
    }
    invokeResumeProcesses(partialParams) {
        return this.client.resumeProcesses(this.ops["ResumeProcesses"].apply(partialParams));
    }
    invokeSetDesiredCapacity(partialParams) {
        return this.client.setDesiredCapacity(this.ops["SetDesiredCapacity"].apply(partialParams));
    }
    invokeSetInstanceHealth(partialParams) {
        return this.client.setInstanceHealth(this.ops["SetInstanceHealth"].apply(partialParams));
    }
    invokeSetInstanceProtection(partialParams) {
        return this.client.setInstanceProtection(this.ops["SetInstanceProtection"].apply(partialParams));
    }
    invokeStartInstanceRefresh(partialParams) {
        return this.client.startInstanceRefresh(this.ops["StartInstanceRefresh"].apply(partialParams));
    }
    invokeSuspendProcesses(partialParams) {
        return this.client.suspendProcesses(this.ops["SuspendProcesses"].apply(partialParams));
    }
    invokeTerminateInstanceInAutoScalingGroup(partialParams) {
        return this.client.terminateInstanceInAutoScalingGroup(this.ops["TerminateInstanceInAutoScalingGroup"].apply(partialParams));
    }
    invokeUpdateAutoScalingGroup(partialParams) {
        return this.client.updateAutoScalingGroup(this.ops["UpdateAutoScalingGroup"].apply(partialParams));
    }
}
exports.default = default_1;
