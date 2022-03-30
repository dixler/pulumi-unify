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
class default_1 extends aws.appconfig.ConfigurationProfile {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.AppConfig();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/appconfig-2019-10-09.normal.json"), this.client);
    }
    invokeCreateApplication(partialParams) {
        return this.client.createApplication(this.ops["CreateApplication"].apply(partialParams));
    }
    invokeCreateConfigurationProfile(partialParams) {
        return this.client.createConfigurationProfile(this.ops["CreateConfigurationProfile"].apply(partialParams));
    }
    invokeCreateDeploymentStrategy(partialParams) {
        return this.client.createDeploymentStrategy(this.ops["CreateDeploymentStrategy"].apply(partialParams));
    }
    invokeCreateEnvironment(partialParams) {
        return this.client.createEnvironment(this.ops["CreateEnvironment"].apply(partialParams));
    }
    invokeCreateHostedConfigurationVersion(partialParams) {
        return this.client.createHostedConfigurationVersion(this.ops["CreateHostedConfigurationVersion"].apply(partialParams));
    }
    invokeDeleteApplication(partialParams) {
        return this.client.deleteApplication(this.ops["DeleteApplication"].apply(partialParams));
    }
    invokeDeleteConfigurationProfile(partialParams) {
        return this.client.deleteConfigurationProfile(this.ops["DeleteConfigurationProfile"].apply(partialParams));
    }
    invokeDeleteDeploymentStrategy(partialParams) {
        return this.client.deleteDeploymentStrategy(this.ops["DeleteDeploymentStrategy"].apply(partialParams));
    }
    invokeDeleteEnvironment(partialParams) {
        return this.client.deleteEnvironment(this.ops["DeleteEnvironment"].apply(partialParams));
    }
    invokeDeleteHostedConfigurationVersion(partialParams) {
        return this.client.deleteHostedConfigurationVersion(this.ops["DeleteHostedConfigurationVersion"].apply(partialParams));
    }
    invokeGetApplication(partialParams) {
        return this.client.getApplication(this.ops["GetApplication"].apply(partialParams));
    }
    invokeGetConfiguration(partialParams) {
        return this.client.getConfiguration(this.ops["GetConfiguration"].apply(partialParams));
    }
    invokeGetConfigurationProfile(partialParams) {
        return this.client.getConfigurationProfile(this.ops["GetConfigurationProfile"].apply(partialParams));
    }
    invokeGetDeployment(partialParams) {
        return this.client.getDeployment(this.ops["GetDeployment"].apply(partialParams));
    }
    invokeGetDeploymentStrategy(partialParams) {
        return this.client.getDeploymentStrategy(this.ops["GetDeploymentStrategy"].apply(partialParams));
    }
    invokeGetEnvironment(partialParams) {
        return this.client.getEnvironment(this.ops["GetEnvironment"].apply(partialParams));
    }
    invokeGetHostedConfigurationVersion(partialParams) {
        return this.client.getHostedConfigurationVersion(this.ops["GetHostedConfigurationVersion"].apply(partialParams));
    }
    invokeListConfigurationProfiles(partialParams) {
        return this.client.listConfigurationProfiles(this.ops["ListConfigurationProfiles"].apply(partialParams));
    }
    invokeListDeployments(partialParams) {
        return this.client.listDeployments(this.ops["ListDeployments"].apply(partialParams));
    }
    invokeListEnvironments(partialParams) {
        return this.client.listEnvironments(this.ops["ListEnvironments"].apply(partialParams));
    }
    invokeListHostedConfigurationVersions(partialParams) {
        return this.client.listHostedConfigurationVersions(this.ops["ListHostedConfigurationVersions"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeStartDeployment(partialParams) {
        return this.client.startDeployment(this.ops["StartDeployment"].apply(partialParams));
    }
    invokeStopDeployment(partialParams) {
        return this.client.stopDeployment(this.ops["StopDeployment"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateApplication(partialParams) {
        return this.client.updateApplication(this.ops["UpdateApplication"].apply(partialParams));
    }
    invokeUpdateConfigurationProfile(partialParams) {
        return this.client.updateConfigurationProfile(this.ops["UpdateConfigurationProfile"].apply(partialParams));
    }
    invokeUpdateDeploymentStrategy(partialParams) {
        return this.client.updateDeploymentStrategy(this.ops["UpdateDeploymentStrategy"].apply(partialParams));
    }
    invokeUpdateEnvironment(partialParams) {
        return this.client.updateEnvironment(this.ops["UpdateEnvironment"].apply(partialParams));
    }
    invokeValidateConfiguration(partialParams) {
        return this.client.validateConfiguration(this.ops["ValidateConfiguration"].apply(partialParams));
    }
}
exports.default = default_1;
