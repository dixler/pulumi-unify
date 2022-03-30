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
class default_1 extends aws.ecs.TaskSet {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.ECS();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/ecs-2014-11-13.normal.json"), this.client);
    }
    invokeCreateCapacityProvider(partialParams) {
        return this.client.createCapacityProvider(this.ops["CreateCapacityProvider"].apply(partialParams));
    }
    invokeCreateService(partialParams) {
        return this.client.createService(this.ops["CreateService"].apply(partialParams));
    }
    invokeCreateTaskSet(partialParams) {
        return this.client.createTaskSet(this.ops["CreateTaskSet"].apply(partialParams));
    }
    invokeDeleteAccountSetting(partialParams) {
        return this.client.deleteAccountSetting(this.ops["DeleteAccountSetting"].apply(partialParams));
    }
    invokeDeleteAttributes(partialParams) {
        return this.client.deleteAttributes(this.ops["DeleteAttributes"].apply(partialParams));
    }
    invokeDeleteCapacityProvider(partialParams) {
        return this.client.deleteCapacityProvider(this.ops["DeleteCapacityProvider"].apply(partialParams));
    }
    invokeDeleteCluster(partialParams) {
        return this.client.deleteCluster(this.ops["DeleteCluster"].apply(partialParams));
    }
    invokeDeleteService(partialParams) {
        return this.client.deleteService(this.ops["DeleteService"].apply(partialParams));
    }
    invokeDeleteTaskSet(partialParams) {
        return this.client.deleteTaskSet(this.ops["DeleteTaskSet"].apply(partialParams));
    }
    invokeDeregisterContainerInstance(partialParams) {
        return this.client.deregisterContainerInstance(this.ops["DeregisterContainerInstance"].apply(partialParams));
    }
    invokeDeregisterTaskDefinition(partialParams) {
        return this.client.deregisterTaskDefinition(this.ops["DeregisterTaskDefinition"].apply(partialParams));
    }
    invokeDescribeContainerInstances(partialParams) {
        return this.client.describeContainerInstances(this.ops["DescribeContainerInstances"].apply(partialParams));
    }
    invokeDescribeServices(partialParams) {
        return this.client.describeServices(this.ops["DescribeServices"].apply(partialParams));
    }
    invokeDescribeTaskDefinition(partialParams) {
        return this.client.describeTaskDefinition(this.ops["DescribeTaskDefinition"].apply(partialParams));
    }
    invokeDescribeTaskSets(partialParams) {
        return this.client.describeTaskSets(this.ops["DescribeTaskSets"].apply(partialParams));
    }
    invokeDescribeTasks(partialParams) {
        return this.client.describeTasks(this.ops["DescribeTasks"].apply(partialParams));
    }
    invokeExecuteCommand(partialParams) {
        return this.client.executeCommand(this.ops["ExecuteCommand"].apply(partialParams));
    }
    invokeListAttributes(partialParams) {
        return this.client.listAttributes(this.ops["ListAttributes"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokePutAccountSetting(partialParams) {
        return this.client.putAccountSetting(this.ops["PutAccountSetting"].apply(partialParams));
    }
    invokePutAccountSettingDefault(partialParams) {
        return this.client.putAccountSettingDefault(this.ops["PutAccountSettingDefault"].apply(partialParams));
    }
    invokePutAttributes(partialParams) {
        return this.client.putAttributes(this.ops["PutAttributes"].apply(partialParams));
    }
    invokePutClusterCapacityProviders(partialParams) {
        return this.client.putClusterCapacityProviders(this.ops["PutClusterCapacityProviders"].apply(partialParams));
    }
    invokeRegisterTaskDefinition(partialParams) {
        return this.client.registerTaskDefinition(this.ops["RegisterTaskDefinition"].apply(partialParams));
    }
    invokeRunTask(partialParams) {
        return this.client.runTask(this.ops["RunTask"].apply(partialParams));
    }
    invokeStartTask(partialParams) {
        return this.client.startTask(this.ops["StartTask"].apply(partialParams));
    }
    invokeStopTask(partialParams) {
        return this.client.stopTask(this.ops["StopTask"].apply(partialParams));
    }
    invokeSubmitAttachmentStateChanges(partialParams) {
        return this.client.submitAttachmentStateChanges(this.ops["SubmitAttachmentStateChanges"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateCapacityProvider(partialParams) {
        return this.client.updateCapacityProvider(this.ops["UpdateCapacityProvider"].apply(partialParams));
    }
    invokeUpdateCluster(partialParams) {
        return this.client.updateCluster(this.ops["UpdateCluster"].apply(partialParams));
    }
    invokeUpdateClusterSettings(partialParams) {
        return this.client.updateClusterSettings(this.ops["UpdateClusterSettings"].apply(partialParams));
    }
    invokeUpdateContainerAgent(partialParams) {
        return this.client.updateContainerAgent(this.ops["UpdateContainerAgent"].apply(partialParams));
    }
    invokeUpdateContainerInstancesState(partialParams) {
        return this.client.updateContainerInstancesState(this.ops["UpdateContainerInstancesState"].apply(partialParams));
    }
    invokeUpdateService(partialParams) {
        return this.client.updateService(this.ops["UpdateService"].apply(partialParams));
    }
    invokeUpdateServicePrimaryTaskSet(partialParams) {
        return this.client.updateServicePrimaryTaskSet(this.ops["UpdateServicePrimaryTaskSet"].apply(partialParams));
    }
    invokeUpdateTaskSet(partialParams) {
        return this.client.updateTaskSet(this.ops["UpdateTaskSet"].apply(partialParams));
    }
}
exports.default = default_1;
