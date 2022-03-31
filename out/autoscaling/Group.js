"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
const schema = require("../apis/autoscaling-2011-01-01.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.autoscaling.Group {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.AutoScaling();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
    }
    boot() {
        Object.entries(this.capitalizedParams).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value.value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
        this.ops = (0, parse_1.getResourceOperations)(this.capitalizedParams, schema, this.client);
    }
    invokeAttachInstances(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachInstances(this.ops["AttachInstances"].applicator.apply(partialParams));
    }
    invokeAttachLoadBalancerTargetGroups(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachLoadBalancerTargetGroups(this.ops["AttachLoadBalancerTargetGroups"].applicator.apply(partialParams));
    }
    invokeAttachLoadBalancers(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachLoadBalancers(this.ops["AttachLoadBalancers"].applicator.apply(partialParams));
    }
    invokeBatchDeleteScheduledAction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchDeleteScheduledAction(this.ops["BatchDeleteScheduledAction"].applicator.apply(partialParams));
    }
    invokeBatchPutScheduledUpdateGroupAction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchPutScheduledUpdateGroupAction(this.ops["BatchPutScheduledUpdateGroupAction"].applicator.apply(partialParams));
    }
    invokeCancelInstanceRefresh(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelInstanceRefresh(this.ops["CancelInstanceRefresh"].applicator.apply(partialParams));
    }
    invokeCompleteLifecycleAction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.completeLifecycleAction(this.ops["CompleteLifecycleAction"].applicator.apply(partialParams));
    }
    invokeCreateAutoScalingGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAutoScalingGroup(this.ops["CreateAutoScalingGroup"].applicator.apply(partialParams));
    }
    invokeCreateLaunchConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createLaunchConfiguration(this.ops["CreateLaunchConfiguration"].applicator.apply(partialParams));
    }
    invokeCreateOrUpdateTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createOrUpdateTags(this.ops["CreateOrUpdateTags"].applicator.apply(partialParams));
    }
    invokeDeleteAutoScalingGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAutoScalingGroup(this.ops["DeleteAutoScalingGroup"].applicator.apply(partialParams));
    }
    invokeDeleteLaunchConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteLaunchConfiguration(this.ops["DeleteLaunchConfiguration"].applicator.apply(partialParams));
    }
    invokeDeleteLifecycleHook(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteLifecycleHook(this.ops["DeleteLifecycleHook"].applicator.apply(partialParams));
    }
    invokeDeleteNotificationConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteNotificationConfiguration(this.ops["DeleteNotificationConfiguration"].applicator.apply(partialParams));
    }
    invokeDeletePolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePolicy(this.ops["DeletePolicy"].applicator.apply(partialParams));
    }
    invokeDeleteScheduledAction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteScheduledAction(this.ops["DeleteScheduledAction"].applicator.apply(partialParams));
    }
    invokeDeleteTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTags(this.ops["DeleteTags"].applicator.apply(partialParams));
    }
    invokeDeleteWarmPool(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteWarmPool(this.ops["DeleteWarmPool"].applicator.apply(partialParams));
    }
    invokeDescribeInstanceRefreshes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeInstanceRefreshes(this.ops["DescribeInstanceRefreshes"].applicator.apply(partialParams));
    }
    invokeDescribeLifecycleHooks(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeLifecycleHooks(this.ops["DescribeLifecycleHooks"].applicator.apply(partialParams));
    }
    invokeDescribeLoadBalancerTargetGroups(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeLoadBalancerTargetGroups(this.ops["DescribeLoadBalancerTargetGroups"].applicator.apply(partialParams));
    }
    invokeDescribeLoadBalancers(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeLoadBalancers(this.ops["DescribeLoadBalancers"].applicator.apply(partialParams));
    }
    invokeDescribeWarmPool(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeWarmPool(this.ops["DescribeWarmPool"].applicator.apply(partialParams));
    }
    invokeDetachInstances(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachInstances(this.ops["DetachInstances"].applicator.apply(partialParams));
    }
    invokeDetachLoadBalancerTargetGroups(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachLoadBalancerTargetGroups(this.ops["DetachLoadBalancerTargetGroups"].applicator.apply(partialParams));
    }
    invokeDetachLoadBalancers(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachLoadBalancers(this.ops["DetachLoadBalancers"].applicator.apply(partialParams));
    }
    invokeDisableMetricsCollection(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableMetricsCollection(this.ops["DisableMetricsCollection"].applicator.apply(partialParams));
    }
    invokeEnableMetricsCollection(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableMetricsCollection(this.ops["EnableMetricsCollection"].applicator.apply(partialParams));
    }
    invokeEnterStandby(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enterStandby(this.ops["EnterStandby"].applicator.apply(partialParams));
    }
    invokeExecutePolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.executePolicy(this.ops["ExecutePolicy"].applicator.apply(partialParams));
    }
    invokeExitStandby(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.exitStandby(this.ops["ExitStandby"].applicator.apply(partialParams));
    }
    invokeGetPredictiveScalingForecast(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPredictiveScalingForecast(this.ops["GetPredictiveScalingForecast"].applicator.apply(partialParams));
    }
    invokePutLifecycleHook(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putLifecycleHook(this.ops["PutLifecycleHook"].applicator.apply(partialParams));
    }
    invokePutNotificationConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putNotificationConfiguration(this.ops["PutNotificationConfiguration"].applicator.apply(partialParams));
    }
    invokePutScalingPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putScalingPolicy(this.ops["PutScalingPolicy"].applicator.apply(partialParams));
    }
    invokePutScheduledUpdateGroupAction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putScheduledUpdateGroupAction(this.ops["PutScheduledUpdateGroupAction"].applicator.apply(partialParams));
    }
    invokePutWarmPool(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putWarmPool(this.ops["PutWarmPool"].applicator.apply(partialParams));
    }
    invokeRecordLifecycleActionHeartbeat(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.recordLifecycleActionHeartbeat(this.ops["RecordLifecycleActionHeartbeat"].applicator.apply(partialParams));
    }
    invokeResumeProcesses(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resumeProcesses(this.ops["ResumeProcesses"].applicator.apply(partialParams));
    }
    invokeSetDesiredCapacity(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setDesiredCapacity(this.ops["SetDesiredCapacity"].applicator.apply(partialParams));
    }
    invokeSetInstanceHealth(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setInstanceHealth(this.ops["SetInstanceHealth"].applicator.apply(partialParams));
    }
    invokeSetInstanceProtection(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setInstanceProtection(this.ops["SetInstanceProtection"].applicator.apply(partialParams));
    }
    invokeStartInstanceRefresh(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startInstanceRefresh(this.ops["StartInstanceRefresh"].applicator.apply(partialParams));
    }
    invokeSuspendProcesses(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.suspendProcesses(this.ops["SuspendProcesses"].applicator.apply(partialParams));
    }
    invokeTerminateInstanceInAutoScalingGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.terminateInstanceInAutoScalingGroup(this.ops["TerminateInstanceInAutoScalingGroup"].applicator.apply(partialParams));
    }
    invokeUpdateAutoScalingGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAutoScalingGroup(this.ops["UpdateAutoScalingGroup"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
