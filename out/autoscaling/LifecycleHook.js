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
class default_1 extends aws.autoscaling.LifecycleHook {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.AutoScaling();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
            if (this[(0, parse_1.upperCamelCase)(this.constructor.name) + (0, parse_1.upperCamelCase)(key)] === undefined) {
                this.capitalizedParams[this.constructor.name + (0, parse_1.upperCamelCase)(key)] = value;
            }
        });
    }
    boot() {
        if (this.booted) {
            return;
        }
        Object.entries(this.capitalizedParams).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value.value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
        this.ops = (0, parse_1.getResourceOperations)(this.capitalizedParams, schema);
        this.booted = true;
    }
    invokeAttachLoadBalancerTargetGroups(partialParams) {
        this.boot();
        return this.client.attachLoadBalancerTargetGroups(this.ops["AttachLoadBalancerTargetGroups"].apply(partialParams));
    }
    invokeAttachLoadBalancers(partialParams) {
        this.boot();
        return this.client.attachLoadBalancers(this.ops["AttachLoadBalancers"].apply(partialParams));
    }
    invokeBatchDeleteScheduledAction(partialParams) {
        this.boot();
        return this.client.batchDeleteScheduledAction(this.ops["BatchDeleteScheduledAction"].apply(partialParams));
    }
    invokeBatchPutScheduledUpdateGroupAction(partialParams) {
        this.boot();
        return this.client.batchPutScheduledUpdateGroupAction(this.ops["BatchPutScheduledUpdateGroupAction"].apply(partialParams));
    }
    invokeCancelInstanceRefresh(partialParams) {
        this.boot();
        return this.client.cancelInstanceRefresh(this.ops["CancelInstanceRefresh"].apply(partialParams));
    }
    invokeCompleteLifecycleAction(partialParams) {
        this.boot();
        return this.client.completeLifecycleAction(this.ops["CompleteLifecycleAction"].apply(partialParams));
    }
    invokeDeleteLifecycleHook(partialParams) {
        this.boot();
        return this.client.deleteLifecycleHook(this.ops["DeleteLifecycleHook"].apply(partialParams));
    }
    invokeDeleteWarmPool(partialParams) {
        this.boot();
        return this.client.deleteWarmPool(this.ops["DeleteWarmPool"].apply(partialParams));
    }
    invokeDescribeAutoScalingGroups(partialParams) {
        this.boot();
        return this.client.describeAutoScalingGroups(this.ops["DescribeAutoScalingGroups"].apply(partialParams));
    }
    invokeDescribeAutoScalingInstances(partialParams) {
        this.boot();
        return this.client.describeAutoScalingInstances(this.ops["DescribeAutoScalingInstances"].apply(partialParams));
    }
    invokeDescribeInstanceRefreshes(partialParams) {
        this.boot();
        return this.client.describeInstanceRefreshes(this.ops["DescribeInstanceRefreshes"].apply(partialParams));
    }
    invokeDescribeLaunchConfigurations(partialParams) {
        this.boot();
        return this.client.describeLaunchConfigurations(this.ops["DescribeLaunchConfigurations"].apply(partialParams));
    }
    invokeDescribeLifecycleHooks(partialParams) {
        this.boot();
        return this.client.describeLifecycleHooks(this.ops["DescribeLifecycleHooks"].apply(partialParams));
    }
    invokeDescribeLoadBalancerTargetGroups(partialParams) {
        this.boot();
        return this.client.describeLoadBalancerTargetGroups(this.ops["DescribeLoadBalancerTargetGroups"].apply(partialParams));
    }
    invokeDescribeLoadBalancers(partialParams) {
        this.boot();
        return this.client.describeLoadBalancers(this.ops["DescribeLoadBalancers"].apply(partialParams));
    }
    invokeDescribeNotificationConfigurations(partialParams) {
        this.boot();
        return this.client.describeNotificationConfigurations(this.ops["DescribeNotificationConfigurations"].apply(partialParams));
    }
    invokeDescribePolicies(partialParams) {
        this.boot();
        return this.client.describePolicies(this.ops["DescribePolicies"].apply(partialParams));
    }
    invokeDescribeScalingActivities(partialParams) {
        this.boot();
        return this.client.describeScalingActivities(this.ops["DescribeScalingActivities"].apply(partialParams));
    }
    invokeDescribeScheduledActions(partialParams) {
        this.boot();
        return this.client.describeScheduledActions(this.ops["DescribeScheduledActions"].apply(partialParams));
    }
    invokeDescribeTags(partialParams) {
        this.boot();
        return this.client.describeTags(this.ops["DescribeTags"].apply(partialParams));
    }
    invokeDescribeWarmPool(partialParams) {
        this.boot();
        return this.client.describeWarmPool(this.ops["DescribeWarmPool"].apply(partialParams));
    }
    invokeDetachInstances(partialParams) {
        this.boot();
        return this.client.detachInstances(this.ops["DetachInstances"].apply(partialParams));
    }
    invokeDetachLoadBalancerTargetGroups(partialParams) {
        this.boot();
        return this.client.detachLoadBalancerTargetGroups(this.ops["DetachLoadBalancerTargetGroups"].apply(partialParams));
    }
    invokeDetachLoadBalancers(partialParams) {
        this.boot();
        return this.client.detachLoadBalancers(this.ops["DetachLoadBalancers"].apply(partialParams));
    }
    invokeEnterStandby(partialParams) {
        this.boot();
        return this.client.enterStandby(this.ops["EnterStandby"].apply(partialParams));
    }
    invokeExitStandby(partialParams) {
        this.boot();
        return this.client.exitStandby(this.ops["ExitStandby"].apply(partialParams));
    }
    invokeGetPredictiveScalingForecast(partialParams) {
        this.boot();
        return this.client.getPredictiveScalingForecast(this.ops["GetPredictiveScalingForecast"].apply(partialParams));
    }
    invokePutLifecycleHook(partialParams) {
        this.boot();
        return this.client.putLifecycleHook(this.ops["PutLifecycleHook"].apply(partialParams));
    }
    invokePutScalingPolicy(partialParams) {
        this.boot();
        return this.client.putScalingPolicy(this.ops["PutScalingPolicy"].apply(partialParams));
    }
    invokePutWarmPool(partialParams) {
        this.boot();
        return this.client.putWarmPool(this.ops["PutWarmPool"].apply(partialParams));
    }
    invokeRecordLifecycleActionHeartbeat(partialParams) {
        this.boot();
        return this.client.recordLifecycleActionHeartbeat(this.ops["RecordLifecycleActionHeartbeat"].apply(partialParams));
    }
    invokeSetInstanceProtection(partialParams) {
        this.boot();
        return this.client.setInstanceProtection(this.ops["SetInstanceProtection"].apply(partialParams));
    }
    invokeStartInstanceRefresh(partialParams) {
        this.boot();
        return this.client.startInstanceRefresh(this.ops["StartInstanceRefresh"].apply(partialParams));
    }
    invokeTerminateInstanceInAutoScalingGroup(partialParams) {
        this.boot();
        return this.client.terminateInstanceInAutoScalingGroup(this.ops["TerminateInstanceInAutoScalingGroup"].apply(partialParams));
    }
}
exports.default = default_1;
