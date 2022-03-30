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
class default_1 extends aws.opsworks.RailsAppLayer {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.OpsWorks();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/opsworks-2013-02-18.normal.json"), this.client);
    }
    invokeAssignInstance(partialParams) {
        return this.client.assignInstance(this.ops["AssignInstance"].apply(partialParams));
    }
    invokeAssignVolume(partialParams) {
        return this.client.assignVolume(this.ops["AssignVolume"].apply(partialParams));
    }
    invokeAssociateElasticIp(partialParams) {
        return this.client.associateElasticIp(this.ops["AssociateElasticIp"].apply(partialParams));
    }
    invokeAttachElasticLoadBalancer(partialParams) {
        return this.client.attachElasticLoadBalancer(this.ops["AttachElasticLoadBalancer"].apply(partialParams));
    }
    invokeCloneStack(partialParams) {
        return this.client.cloneStack(this.ops["CloneStack"].apply(partialParams));
    }
    invokeCreateApp(partialParams) {
        return this.client.createApp(this.ops["CreateApp"].apply(partialParams));
    }
    invokeCreateDeployment(partialParams) {
        return this.client.createDeployment(this.ops["CreateDeployment"].apply(partialParams));
    }
    invokeCreateInstance(partialParams) {
        return this.client.createInstance(this.ops["CreateInstance"].apply(partialParams));
    }
    invokeCreateLayer(partialParams) {
        return this.client.createLayer(this.ops["CreateLayer"].apply(partialParams));
    }
    invokeCreateStack(partialParams) {
        return this.client.createStack(this.ops["CreateStack"].apply(partialParams));
    }
    invokeCreateUserProfile(partialParams) {
        return this.client.createUserProfile(this.ops["CreateUserProfile"].apply(partialParams));
    }
    invokeDeleteApp(partialParams) {
        return this.client.deleteApp(this.ops["DeleteApp"].apply(partialParams));
    }
    invokeDeleteInstance(partialParams) {
        return this.client.deleteInstance(this.ops["DeleteInstance"].apply(partialParams));
    }
    invokeDeleteLayer(partialParams) {
        return this.client.deleteLayer(this.ops["DeleteLayer"].apply(partialParams));
    }
    invokeDeleteStack(partialParams) {
        return this.client.deleteStack(this.ops["DeleteStack"].apply(partialParams));
    }
    invokeDeleteUserProfile(partialParams) {
        return this.client.deleteUserProfile(this.ops["DeleteUserProfile"].apply(partialParams));
    }
    invokeDeregisterEcsCluster(partialParams) {
        return this.client.deregisterEcsCluster(this.ops["DeregisterEcsCluster"].apply(partialParams));
    }
    invokeDeregisterElasticIp(partialParams) {
        return this.client.deregisterElasticIp(this.ops["DeregisterElasticIp"].apply(partialParams));
    }
    invokeDeregisterInstance(partialParams) {
        return this.client.deregisterInstance(this.ops["DeregisterInstance"].apply(partialParams));
    }
    invokeDeregisterRdsDbInstance(partialParams) {
        return this.client.deregisterRdsDbInstance(this.ops["DeregisterRdsDbInstance"].apply(partialParams));
    }
    invokeDeregisterVolume(partialParams) {
        return this.client.deregisterVolume(this.ops["DeregisterVolume"].apply(partialParams));
    }
    invokeDescribeLoadBasedAutoScaling(partialParams) {
        return this.client.describeLoadBasedAutoScaling(this.ops["DescribeLoadBasedAutoScaling"].apply(partialParams));
    }
    invokeDescribeRdsDbInstances(partialParams) {
        return this.client.describeRdsDbInstances(this.ops["DescribeRdsDbInstances"].apply(partialParams));
    }
    invokeDescribeStackProvisioningParameters(partialParams) {
        return this.client.describeStackProvisioningParameters(this.ops["DescribeStackProvisioningParameters"].apply(partialParams));
    }
    invokeDescribeStackSummary(partialParams) {
        return this.client.describeStackSummary(this.ops["DescribeStackSummary"].apply(partialParams));
    }
    invokeDescribeTimeBasedAutoScaling(partialParams) {
        return this.client.describeTimeBasedAutoScaling(this.ops["DescribeTimeBasedAutoScaling"].apply(partialParams));
    }
    invokeDetachElasticLoadBalancer(partialParams) {
        return this.client.detachElasticLoadBalancer(this.ops["DetachElasticLoadBalancer"].apply(partialParams));
    }
    invokeDisassociateElasticIp(partialParams) {
        return this.client.disassociateElasticIp(this.ops["DisassociateElasticIp"].apply(partialParams));
    }
    invokeGetHostnameSuggestion(partialParams) {
        return this.client.getHostnameSuggestion(this.ops["GetHostnameSuggestion"].apply(partialParams));
    }
    invokeGrantAccess(partialParams) {
        return this.client.grantAccess(this.ops["GrantAccess"].apply(partialParams));
    }
    invokeListTags(partialParams) {
        return this.client.listTags(this.ops["ListTags"].apply(partialParams));
    }
    invokeRebootInstance(partialParams) {
        return this.client.rebootInstance(this.ops["RebootInstance"].apply(partialParams));
    }
    invokeRegisterEcsCluster(partialParams) {
        return this.client.registerEcsCluster(this.ops["RegisterEcsCluster"].apply(partialParams));
    }
    invokeRegisterElasticIp(partialParams) {
        return this.client.registerElasticIp(this.ops["RegisterElasticIp"].apply(partialParams));
    }
    invokeRegisterInstance(partialParams) {
        return this.client.registerInstance(this.ops["RegisterInstance"].apply(partialParams));
    }
    invokeRegisterRdsDbInstance(partialParams) {
        return this.client.registerRdsDbInstance(this.ops["RegisterRdsDbInstance"].apply(partialParams));
    }
    invokeRegisterVolume(partialParams) {
        return this.client.registerVolume(this.ops["RegisterVolume"].apply(partialParams));
    }
    invokeSetLoadBasedAutoScaling(partialParams) {
        return this.client.setLoadBasedAutoScaling(this.ops["SetLoadBasedAutoScaling"].apply(partialParams));
    }
    invokeSetPermission(partialParams) {
        return this.client.setPermission(this.ops["SetPermission"].apply(partialParams));
    }
    invokeSetTimeBasedAutoScaling(partialParams) {
        return this.client.setTimeBasedAutoScaling(this.ops["SetTimeBasedAutoScaling"].apply(partialParams));
    }
    invokeStartInstance(partialParams) {
        return this.client.startInstance(this.ops["StartInstance"].apply(partialParams));
    }
    invokeStartStack(partialParams) {
        return this.client.startStack(this.ops["StartStack"].apply(partialParams));
    }
    invokeStopInstance(partialParams) {
        return this.client.stopInstance(this.ops["StopInstance"].apply(partialParams));
    }
    invokeStopStack(partialParams) {
        return this.client.stopStack(this.ops["StopStack"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUnassignInstance(partialParams) {
        return this.client.unassignInstance(this.ops["UnassignInstance"].apply(partialParams));
    }
    invokeUnassignVolume(partialParams) {
        return this.client.unassignVolume(this.ops["UnassignVolume"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateApp(partialParams) {
        return this.client.updateApp(this.ops["UpdateApp"].apply(partialParams));
    }
    invokeUpdateElasticIp(partialParams) {
        return this.client.updateElasticIp(this.ops["UpdateElasticIp"].apply(partialParams));
    }
    invokeUpdateInstance(partialParams) {
        return this.client.updateInstance(this.ops["UpdateInstance"].apply(partialParams));
    }
    invokeUpdateLayer(partialParams) {
        return this.client.updateLayer(this.ops["UpdateLayer"].apply(partialParams));
    }
    invokeUpdateRdsDbInstance(partialParams) {
        return this.client.updateRdsDbInstance(this.ops["UpdateRdsDbInstance"].apply(partialParams));
    }
    invokeUpdateStack(partialParams) {
        return this.client.updateStack(this.ops["UpdateStack"].apply(partialParams));
    }
    invokeUpdateUserProfile(partialParams) {
        return this.client.updateUserProfile(this.ops["UpdateUserProfile"].apply(partialParams));
    }
    invokeUpdateVolume(partialParams) {
        return this.client.updateVolume(this.ops["UpdateVolume"].apply(partialParams));
    }
}
exports.default = default_1;
