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
class default_1 extends aws.opsworks.Permission {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.OpsWorks();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
            if (this[(0, parse_1.upperCamelCase)(this.constructor.name) + (0, parse_1.upperCamelCase)(key)] === undefined) {
                this.capitalizedParams[this.constructor.name + (0, parse_1.upperCamelCase)(key)] = value;
            }
            console.log(this.capitalizedParams);
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
    invokeCloneStack(partialParams) {
        this.boot();
        return this.client.cloneStack(this.ops["CloneStack"].apply(partialParams));
    }
    invokeCreateApp(partialParams) {
        this.boot();
        return this.client.createApp(this.ops["CreateApp"].apply(partialParams));
    }
    invokeCreateDeployment(partialParams) {
        this.boot();
        return this.client.createDeployment(this.ops["CreateDeployment"].apply(partialParams));
    }
    invokeCreateInstance(partialParams) {
        this.boot();
        return this.client.createInstance(this.ops["CreateInstance"].apply(partialParams));
    }
    invokeCreateLayer(partialParams) {
        this.boot();
        return this.client.createLayer(this.ops["CreateLayer"].apply(partialParams));
    }
    invokeCreateStack(partialParams) {
        this.boot();
        return this.client.createStack(this.ops["CreateStack"].apply(partialParams));
    }
    invokeCreateUserProfile(partialParams) {
        this.boot();
        return this.client.createUserProfile(this.ops["CreateUserProfile"].apply(partialParams));
    }
    invokeDescribeAgentVersions(partialParams) {
        this.boot();
        return this.client.describeAgentVersions(this.ops["DescribeAgentVersions"].apply(partialParams));
    }
    invokeDescribeApps(partialParams) {
        this.boot();
        return this.client.describeApps(this.ops["DescribeApps"].apply(partialParams));
    }
    invokeDescribeCommands(partialParams) {
        this.boot();
        return this.client.describeCommands(this.ops["DescribeCommands"].apply(partialParams));
    }
    invokeDescribeDeployments(partialParams) {
        this.boot();
        return this.client.describeDeployments(this.ops["DescribeDeployments"].apply(partialParams));
    }
    invokeDescribeEcsClusters(partialParams) {
        this.boot();
        return this.client.describeEcsClusters(this.ops["DescribeEcsClusters"].apply(partialParams));
    }
    invokeDescribeElasticIps(partialParams) {
        this.boot();
        return this.client.describeElasticIps(this.ops["DescribeElasticIps"].apply(partialParams));
    }
    invokeDescribeElasticLoadBalancers(partialParams) {
        this.boot();
        return this.client.describeElasticLoadBalancers(this.ops["DescribeElasticLoadBalancers"].apply(partialParams));
    }
    invokeDescribeInstances(partialParams) {
        this.boot();
        return this.client.describeInstances(this.ops["DescribeInstances"].apply(partialParams));
    }
    invokeDescribeLayers(partialParams) {
        this.boot();
        return this.client.describeLayers(this.ops["DescribeLayers"].apply(partialParams));
    }
    invokeDescribeLoadBasedAutoScaling(partialParams) {
        this.boot();
        return this.client.describeLoadBasedAutoScaling(this.ops["DescribeLoadBasedAutoScaling"].apply(partialParams));
    }
    invokeDescribePermissions(partialParams) {
        this.boot();
        return this.client.describePermissions(this.ops["DescribePermissions"].apply(partialParams));
    }
    invokeDescribeRaidArrays(partialParams) {
        this.boot();
        return this.client.describeRaidArrays(this.ops["DescribeRaidArrays"].apply(partialParams));
    }
    invokeDescribeRdsDbInstances(partialParams) {
        this.boot();
        return this.client.describeRdsDbInstances(this.ops["DescribeRdsDbInstances"].apply(partialParams));
    }
    invokeDescribeServiceErrors(partialParams) {
        this.boot();
        return this.client.describeServiceErrors(this.ops["DescribeServiceErrors"].apply(partialParams));
    }
    invokeDescribeStackProvisioningParameters(partialParams) {
        this.boot();
        return this.client.describeStackProvisioningParameters(this.ops["DescribeStackProvisioningParameters"].apply(partialParams));
    }
    invokeDescribeStackSummary(partialParams) {
        this.boot();
        return this.client.describeStackSummary(this.ops["DescribeStackSummary"].apply(partialParams));
    }
    invokeDescribeStacks(partialParams) {
        this.boot();
        return this.client.describeStacks(this.ops["DescribeStacks"].apply(partialParams));
    }
    invokeDescribeTimeBasedAutoScaling(partialParams) {
        this.boot();
        return this.client.describeTimeBasedAutoScaling(this.ops["DescribeTimeBasedAutoScaling"].apply(partialParams));
    }
    invokeDescribeUserProfiles(partialParams) {
        this.boot();
        return this.client.describeUserProfiles(this.ops["DescribeUserProfiles"].apply(partialParams));
    }
    invokeDescribeVolumes(partialParams) {
        this.boot();
        return this.client.describeVolumes(this.ops["DescribeVolumes"].apply(partialParams));
    }
    invokeGetHostnameSuggestion(partialParams) {
        this.boot();
        return this.client.getHostnameSuggestion(this.ops["GetHostnameSuggestion"].apply(partialParams));
    }
    invokeGrantAccess(partialParams) {
        this.boot();
        return this.client.grantAccess(this.ops["GrantAccess"].apply(partialParams));
    }
    invokeListTags(partialParams) {
        this.boot();
        return this.client.listTags(this.ops["ListTags"].apply(partialParams));
    }
    invokeRegisterEcsCluster(partialParams) {
        this.boot();
        return this.client.registerEcsCluster(this.ops["RegisterEcsCluster"].apply(partialParams));
    }
    invokeRegisterElasticIp(partialParams) {
        this.boot();
        return this.client.registerElasticIp(this.ops["RegisterElasticIp"].apply(partialParams));
    }
    invokeRegisterInstance(partialParams) {
        this.boot();
        return this.client.registerInstance(this.ops["RegisterInstance"].apply(partialParams));
    }
    invokeRegisterVolume(partialParams) {
        this.boot();
        return this.client.registerVolume(this.ops["RegisterVolume"].apply(partialParams));
    }
}
exports.default = default_1;
