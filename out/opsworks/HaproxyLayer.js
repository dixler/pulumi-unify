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
const schema = require("../apis/opsworks-2013-02-18.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.opsworks.HaproxyLayer {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.OpsWorks();
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
    invokeAssignInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.assignInstance(this.ops["AssignInstance"].applicator.apply(partialParams));
    }
    invokeAssignVolume(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.assignVolume(this.ops["AssignVolume"].applicator.apply(partialParams));
    }
    invokeAssociateElasticIp(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateElasticIp(this.ops["AssociateElasticIp"].applicator.apply(partialParams));
    }
    invokeAttachElasticLoadBalancer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachElasticLoadBalancer(this.ops["AttachElasticLoadBalancer"].applicator.apply(partialParams));
    }
    invokeCloneStack(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cloneStack(this.ops["CloneStack"].applicator.apply(partialParams));
    }
    invokeCreateApp(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createApp(this.ops["CreateApp"].applicator.apply(partialParams));
    }
    invokeCreateDeployment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDeployment(this.ops["CreateDeployment"].applicator.apply(partialParams));
    }
    invokeCreateInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createInstance(this.ops["CreateInstance"].applicator.apply(partialParams));
    }
    invokeCreateLayer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createLayer(this.ops["CreateLayer"].applicator.apply(partialParams));
    }
    invokeCreateStack(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createStack(this.ops["CreateStack"].applicator.apply(partialParams));
    }
    invokeCreateUserProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUserProfile(this.ops["CreateUserProfile"].applicator.apply(partialParams));
    }
    invokeDeleteApp(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApp(this.ops["DeleteApp"].applicator.apply(partialParams));
    }
    invokeDeleteInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteInstance(this.ops["DeleteInstance"].applicator.apply(partialParams));
    }
    invokeDeleteLayer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteLayer(this.ops["DeleteLayer"].applicator.apply(partialParams));
    }
    invokeDeleteStack(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteStack(this.ops["DeleteStack"].applicator.apply(partialParams));
    }
    invokeDeleteUserProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUserProfile(this.ops["DeleteUserProfile"].applicator.apply(partialParams));
    }
    invokeDeregisterEcsCluster(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterEcsCluster(this.ops["DeregisterEcsCluster"].applicator.apply(partialParams));
    }
    invokeDeregisterElasticIp(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterElasticIp(this.ops["DeregisterElasticIp"].applicator.apply(partialParams));
    }
    invokeDeregisterInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterInstance(this.ops["DeregisterInstance"].applicator.apply(partialParams));
    }
    invokeDeregisterRdsDbInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterRdsDbInstance(this.ops["DeregisterRdsDbInstance"].applicator.apply(partialParams));
    }
    invokeDeregisterVolume(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterVolume(this.ops["DeregisterVolume"].applicator.apply(partialParams));
    }
    invokeDescribeLoadBasedAutoScaling(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeLoadBasedAutoScaling(this.ops["DescribeLoadBasedAutoScaling"].applicator.apply(partialParams));
    }
    invokeDescribeRdsDbInstances(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeRdsDbInstances(this.ops["DescribeRdsDbInstances"].applicator.apply(partialParams));
    }
    invokeDescribeStackProvisioningParameters(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeStackProvisioningParameters(this.ops["DescribeStackProvisioningParameters"].applicator.apply(partialParams));
    }
    invokeDescribeStackSummary(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeStackSummary(this.ops["DescribeStackSummary"].applicator.apply(partialParams));
    }
    invokeDescribeTimeBasedAutoScaling(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTimeBasedAutoScaling(this.ops["DescribeTimeBasedAutoScaling"].applicator.apply(partialParams));
    }
    invokeDetachElasticLoadBalancer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachElasticLoadBalancer(this.ops["DetachElasticLoadBalancer"].applicator.apply(partialParams));
    }
    invokeDisassociateElasticIp(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateElasticIp(this.ops["DisassociateElasticIp"].applicator.apply(partialParams));
    }
    invokeGetHostnameSuggestion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getHostnameSuggestion(this.ops["GetHostnameSuggestion"].applicator.apply(partialParams));
    }
    invokeGrantAccess(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.grantAccess(this.ops["GrantAccess"].applicator.apply(partialParams));
    }
    invokeListTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTags(this.ops["ListTags"].applicator.apply(partialParams));
    }
    invokeRebootInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rebootInstance(this.ops["RebootInstance"].applicator.apply(partialParams));
    }
    invokeRegisterEcsCluster(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerEcsCluster(this.ops["RegisterEcsCluster"].applicator.apply(partialParams));
    }
    invokeRegisterElasticIp(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerElasticIp(this.ops["RegisterElasticIp"].applicator.apply(partialParams));
    }
    invokeRegisterInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerInstance(this.ops["RegisterInstance"].applicator.apply(partialParams));
    }
    invokeRegisterRdsDbInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerRdsDbInstance(this.ops["RegisterRdsDbInstance"].applicator.apply(partialParams));
    }
    invokeRegisterVolume(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerVolume(this.ops["RegisterVolume"].applicator.apply(partialParams));
    }
    invokeSetLoadBasedAutoScaling(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setLoadBasedAutoScaling(this.ops["SetLoadBasedAutoScaling"].applicator.apply(partialParams));
    }
    invokeSetPermission(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setPermission(this.ops["SetPermission"].applicator.apply(partialParams));
    }
    invokeSetTimeBasedAutoScaling(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setTimeBasedAutoScaling(this.ops["SetTimeBasedAutoScaling"].applicator.apply(partialParams));
    }
    invokeStartInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startInstance(this.ops["StartInstance"].applicator.apply(partialParams));
    }
    invokeStartStack(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startStack(this.ops["StartStack"].applicator.apply(partialParams));
    }
    invokeStopInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopInstance(this.ops["StopInstance"].applicator.apply(partialParams));
    }
    invokeStopStack(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopStack(this.ops["StopStack"].applicator.apply(partialParams));
    }
    invokeTagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].applicator.apply(partialParams));
    }
    invokeUnassignInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.unassignInstance(this.ops["UnassignInstance"].applicator.apply(partialParams));
    }
    invokeUnassignVolume(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.unassignVolume(this.ops["UnassignVolume"].applicator.apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].applicator.apply(partialParams));
    }
    invokeUpdateApp(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApp(this.ops["UpdateApp"].applicator.apply(partialParams));
    }
    invokeUpdateElasticIp(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateElasticIp(this.ops["UpdateElasticIp"].applicator.apply(partialParams));
    }
    invokeUpdateInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateInstance(this.ops["UpdateInstance"].applicator.apply(partialParams));
    }
    invokeUpdateLayer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateLayer(this.ops["UpdateLayer"].applicator.apply(partialParams));
    }
    invokeUpdateRdsDbInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRdsDbInstance(this.ops["UpdateRdsDbInstance"].applicator.apply(partialParams));
    }
    invokeUpdateStack(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateStack(this.ops["UpdateStack"].applicator.apply(partialParams));
    }
    invokeUpdateUserProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUserProfile(this.ops["UpdateUserProfile"].applicator.apply(partialParams));
    }
    invokeUpdateVolume(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateVolume(this.ops["UpdateVolume"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
