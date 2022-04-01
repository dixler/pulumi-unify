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
const schema = require("../apis/ecs-2014-11-13.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.ecs.ClusterCapacityProviders {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.ECS();
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
    invokeCreateCapacityProvider(partialParams) {
        this.boot();
        return this.client.createCapacityProvider(this.ops["CreateCapacityProvider"].apply(partialParams));
    }
    invokeCreateCluster(partialParams) {
        this.boot();
        return this.client.createCluster(this.ops["CreateCluster"].apply(partialParams));
    }
    invokeCreateService(partialParams) {
        this.boot();
        return this.client.createService(this.ops["CreateService"].apply(partialParams));
    }
    invokeCreateTaskSet(partialParams) {
        this.boot();
        return this.client.createTaskSet(this.ops["CreateTaskSet"].apply(partialParams));
    }
    invokeDeleteAccountSetting(partialParams) {
        this.boot();
        return this.client.deleteAccountSetting(this.ops["DeleteAccountSetting"].apply(partialParams));
    }
    invokeDeleteAttributes(partialParams) {
        this.boot();
        return this.client.deleteAttributes(this.ops["DeleteAttributes"].apply(partialParams));
    }
    invokeDeleteCapacityProvider(partialParams) {
        this.boot();
        return this.client.deleteCapacityProvider(this.ops["DeleteCapacityProvider"].apply(partialParams));
    }
    invokeDeleteCluster(partialParams) {
        this.boot();
        return this.client.deleteCluster(this.ops["DeleteCluster"].apply(partialParams));
    }
    invokeDeleteService(partialParams) {
        this.boot();
        return this.client.deleteService(this.ops["DeleteService"].apply(partialParams));
    }
    invokeDeleteTaskSet(partialParams) {
        this.boot();
        return this.client.deleteTaskSet(this.ops["DeleteTaskSet"].apply(partialParams));
    }
    invokeDeregisterContainerInstance(partialParams) {
        this.boot();
        return this.client.deregisterContainerInstance(this.ops["DeregisterContainerInstance"].apply(partialParams));
    }
    invokeDeregisterTaskDefinition(partialParams) {
        this.boot();
        return this.client.deregisterTaskDefinition(this.ops["DeregisterTaskDefinition"].apply(partialParams));
    }
    invokeDescribeCapacityProviders(partialParams) {
        this.boot();
        return this.client.describeCapacityProviders(this.ops["DescribeCapacityProviders"].apply(partialParams));
    }
    invokeDescribeClusters(partialParams) {
        this.boot();
        return this.client.describeClusters(this.ops["DescribeClusters"].apply(partialParams));
    }
    invokeDescribeContainerInstances(partialParams) {
        this.boot();
        return this.client.describeContainerInstances(this.ops["DescribeContainerInstances"].apply(partialParams));
    }
    invokeDescribeServices(partialParams) {
        this.boot();
        return this.client.describeServices(this.ops["DescribeServices"].apply(partialParams));
    }
    invokeDescribeTaskDefinition(partialParams) {
        this.boot();
        return this.client.describeTaskDefinition(this.ops["DescribeTaskDefinition"].apply(partialParams));
    }
    invokeDescribeTaskSets(partialParams) {
        this.boot();
        return this.client.describeTaskSets(this.ops["DescribeTaskSets"].apply(partialParams));
    }
    invokeDescribeTasks(partialParams) {
        this.boot();
        return this.client.describeTasks(this.ops["DescribeTasks"].apply(partialParams));
    }
    invokeDiscoverPollEndpoint(partialParams) {
        this.boot();
        return this.client.discoverPollEndpoint(this.ops["DiscoverPollEndpoint"].apply(partialParams));
    }
    invokeExecuteCommand(partialParams) {
        this.boot();
        return this.client.executeCommand(this.ops["ExecuteCommand"].apply(partialParams));
    }
    invokeListAccountSettings(partialParams) {
        this.boot();
        return this.client.listAccountSettings(this.ops["ListAccountSettings"].apply(partialParams));
    }
    invokeListAttributes(partialParams) {
        this.boot();
        return this.client.listAttributes(this.ops["ListAttributes"].apply(partialParams));
    }
    invokeListClusters(partialParams) {
        this.boot();
        return this.client.listClusters(this.ops["ListClusters"].apply(partialParams));
    }
    invokeListContainerInstances(partialParams) {
        this.boot();
        return this.client.listContainerInstances(this.ops["ListContainerInstances"].apply(partialParams));
    }
    invokeListServices(partialParams) {
        this.boot();
        return this.client.listServices(this.ops["ListServices"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListTaskDefinitionFamilies(partialParams) {
        this.boot();
        return this.client.listTaskDefinitionFamilies(this.ops["ListTaskDefinitionFamilies"].apply(partialParams));
    }
    invokeListTaskDefinitions(partialParams) {
        this.boot();
        return this.client.listTaskDefinitions(this.ops["ListTaskDefinitions"].apply(partialParams));
    }
    invokeListTasks(partialParams) {
        this.boot();
        return this.client.listTasks(this.ops["ListTasks"].apply(partialParams));
    }
    invokePutAccountSetting(partialParams) {
        this.boot();
        return this.client.putAccountSetting(this.ops["PutAccountSetting"].apply(partialParams));
    }
    invokePutAccountSettingDefault(partialParams) {
        this.boot();
        return this.client.putAccountSettingDefault(this.ops["PutAccountSettingDefault"].apply(partialParams));
    }
    invokePutAttributes(partialParams) {
        this.boot();
        return this.client.putAttributes(this.ops["PutAttributes"].apply(partialParams));
    }
    invokePutClusterCapacityProviders(partialParams) {
        this.boot();
        return this.client.putClusterCapacityProviders(this.ops["PutClusterCapacityProviders"].apply(partialParams));
    }
    invokeRegisterContainerInstance(partialParams) {
        this.boot();
        return this.client.registerContainerInstance(this.ops["RegisterContainerInstance"].apply(partialParams));
    }
    invokeRegisterTaskDefinition(partialParams) {
        this.boot();
        return this.client.registerTaskDefinition(this.ops["RegisterTaskDefinition"].apply(partialParams));
    }
    invokeRunTask(partialParams) {
        this.boot();
        return this.client.runTask(this.ops["RunTask"].apply(partialParams));
    }
    invokeStartTask(partialParams) {
        this.boot();
        return this.client.startTask(this.ops["StartTask"].apply(partialParams));
    }
    invokeStopTask(partialParams) {
        this.boot();
        return this.client.stopTask(this.ops["StopTask"].apply(partialParams));
    }
    invokeSubmitAttachmentStateChanges(partialParams) {
        this.boot();
        return this.client.submitAttachmentStateChanges(this.ops["SubmitAttachmentStateChanges"].apply(partialParams));
    }
    invokeSubmitContainerStateChange(partialParams) {
        this.boot();
        return this.client.submitContainerStateChange(this.ops["SubmitContainerStateChange"].apply(partialParams));
    }
    invokeSubmitTaskStateChange(partialParams) {
        this.boot();
        return this.client.submitTaskStateChange(this.ops["SubmitTaskStateChange"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateCapacityProvider(partialParams) {
        this.boot();
        return this.client.updateCapacityProvider(this.ops["UpdateCapacityProvider"].apply(partialParams));
    }
    invokeUpdateCluster(partialParams) {
        this.boot();
        return this.client.updateCluster(this.ops["UpdateCluster"].apply(partialParams));
    }
    invokeUpdateClusterSettings(partialParams) {
        this.boot();
        return this.client.updateClusterSettings(this.ops["UpdateClusterSettings"].apply(partialParams));
    }
    invokeUpdateContainerAgent(partialParams) {
        this.boot();
        return this.client.updateContainerAgent(this.ops["UpdateContainerAgent"].apply(partialParams));
    }
    invokeUpdateContainerInstancesState(partialParams) {
        this.boot();
        return this.client.updateContainerInstancesState(this.ops["UpdateContainerInstancesState"].apply(partialParams));
    }
    invokeUpdateService(partialParams) {
        this.boot();
        return this.client.updateService(this.ops["UpdateService"].apply(partialParams));
    }
    invokeUpdateServicePrimaryTaskSet(partialParams) {
        this.boot();
        return this.client.updateServicePrimaryTaskSet(this.ops["UpdateServicePrimaryTaskSet"].apply(partialParams));
    }
    invokeUpdateTaskSet(partialParams) {
        this.boot();
        return this.client.updateTaskSet(this.ops["UpdateTaskSet"].apply(partialParams));
    }
}
exports.default = default_1;
