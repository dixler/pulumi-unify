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
class default_1 extends aws.codedeploy.DeploymentConfig {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.CodeDeploy();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/codedeploy-2014-10-06.normal.json"), this.client);
    }
    invokeAddTagsToOnPremisesInstances(partialParams) {
        return this.client.addTagsToOnPremisesInstances(this.ops["AddTagsToOnPremisesInstances"].apply(partialParams));
    }
    invokeBatchGetApplicationRevisions(partialParams) {
        return this.client.batchGetApplicationRevisions(this.ops["BatchGetApplicationRevisions"].apply(partialParams));
    }
    invokeBatchGetApplications(partialParams) {
        return this.client.batchGetApplications(this.ops["BatchGetApplications"].apply(partialParams));
    }
    invokeBatchGetDeploymentGroups(partialParams) {
        return this.client.batchGetDeploymentGroups(this.ops["BatchGetDeploymentGroups"].apply(partialParams));
    }
    invokeBatchGetDeploymentInstances(partialParams) {
        return this.client.batchGetDeploymentInstances(this.ops["BatchGetDeploymentInstances"].apply(partialParams));
    }
    invokeBatchGetDeployments(partialParams) {
        return this.client.batchGetDeployments(this.ops["BatchGetDeployments"].apply(partialParams));
    }
    invokeBatchGetOnPremisesInstances(partialParams) {
        return this.client.batchGetOnPremisesInstances(this.ops["BatchGetOnPremisesInstances"].apply(partialParams));
    }
    invokeCreateApplication(partialParams) {
        return this.client.createApplication(this.ops["CreateApplication"].apply(partialParams));
    }
    invokeCreateDeployment(partialParams) {
        return this.client.createDeployment(this.ops["CreateDeployment"].apply(partialParams));
    }
    invokeCreateDeploymentConfig(partialParams) {
        return this.client.createDeploymentConfig(this.ops["CreateDeploymentConfig"].apply(partialParams));
    }
    invokeCreateDeploymentGroup(partialParams) {
        return this.client.createDeploymentGroup(this.ops["CreateDeploymentGroup"].apply(partialParams));
    }
    invokeDeleteApplication(partialParams) {
        return this.client.deleteApplication(this.ops["DeleteApplication"].apply(partialParams));
    }
    invokeDeleteDeploymentConfig(partialParams) {
        return this.client.deleteDeploymentConfig(this.ops["DeleteDeploymentConfig"].apply(partialParams));
    }
    invokeDeleteDeploymentGroup(partialParams) {
        return this.client.deleteDeploymentGroup(this.ops["DeleteDeploymentGroup"].apply(partialParams));
    }
    invokeDeregisterOnPremisesInstance(partialParams) {
        return this.client.deregisterOnPremisesInstance(this.ops["DeregisterOnPremisesInstance"].apply(partialParams));
    }
    invokeGetApplication(partialParams) {
        return this.client.getApplication(this.ops["GetApplication"].apply(partialParams));
    }
    invokeGetApplicationRevision(partialParams) {
        return this.client.getApplicationRevision(this.ops["GetApplicationRevision"].apply(partialParams));
    }
    invokeGetDeployment(partialParams) {
        return this.client.getDeployment(this.ops["GetDeployment"].apply(partialParams));
    }
    invokeGetDeploymentConfig(partialParams) {
        return this.client.getDeploymentConfig(this.ops["GetDeploymentConfig"].apply(partialParams));
    }
    invokeGetDeploymentGroup(partialParams) {
        return this.client.getDeploymentGroup(this.ops["GetDeploymentGroup"].apply(partialParams));
    }
    invokeGetDeploymentInstance(partialParams) {
        return this.client.getDeploymentInstance(this.ops["GetDeploymentInstance"].apply(partialParams));
    }
    invokeGetOnPremisesInstance(partialParams) {
        return this.client.getOnPremisesInstance(this.ops["GetOnPremisesInstance"].apply(partialParams));
    }
    invokeListApplicationRevisions(partialParams) {
        return this.client.listApplicationRevisions(this.ops["ListApplicationRevisions"].apply(partialParams));
    }
    invokeListDeploymentGroups(partialParams) {
        return this.client.listDeploymentGroups(this.ops["ListDeploymentGroups"].apply(partialParams));
    }
    invokeListDeploymentInstances(partialParams) {
        return this.client.listDeploymentInstances(this.ops["ListDeploymentInstances"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeRegisterApplicationRevision(partialParams) {
        return this.client.registerApplicationRevision(this.ops["RegisterApplicationRevision"].apply(partialParams));
    }
    invokeRegisterOnPremisesInstance(partialParams) {
        return this.client.registerOnPremisesInstance(this.ops["RegisterOnPremisesInstance"].apply(partialParams));
    }
    invokeRemoveTagsFromOnPremisesInstances(partialParams) {
        return this.client.removeTagsFromOnPremisesInstances(this.ops["RemoveTagsFromOnPremisesInstances"].apply(partialParams));
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
    invokeUpdateDeploymentGroup(partialParams) {
        return this.client.updateDeploymentGroup(this.ops["UpdateDeploymentGroup"].apply(partialParams));
    }
}
exports.default = default_1;
