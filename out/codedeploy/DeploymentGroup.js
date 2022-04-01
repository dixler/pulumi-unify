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
const schema = require("../apis/codedeploy-2014-10-06.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.codedeploy.DeploymentGroup {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.CodeDeploy();
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
    invokeBatchGetApplicationRevisions(partialParams) {
        this.boot();
        return this.client.batchGetApplicationRevisions(this.ops["BatchGetApplicationRevisions"].apply(partialParams));
    }
    invokeBatchGetApplications(partialParams) {
        this.boot();
        return this.client.batchGetApplications(this.ops["BatchGetApplications"].apply(partialParams));
    }
    invokeBatchGetDeploymentGroups(partialParams) {
        this.boot();
        return this.client.batchGetDeploymentGroups(this.ops["BatchGetDeploymentGroups"].apply(partialParams));
    }
    invokeBatchGetDeploymentInstances(partialParams) {
        this.boot();
        return this.client.batchGetDeploymentInstances(this.ops["BatchGetDeploymentInstances"].apply(partialParams));
    }
    invokeBatchGetDeploymentTargets(partialParams) {
        this.boot();
        return this.client.batchGetDeploymentTargets(this.ops["BatchGetDeploymentTargets"].apply(partialParams));
    }
    invokeBatchGetDeployments(partialParams) {
        this.boot();
        return this.client.batchGetDeployments(this.ops["BatchGetDeployments"].apply(partialParams));
    }
    invokeBatchGetOnPremisesInstances(partialParams) {
        this.boot();
        return this.client.batchGetOnPremisesInstances(this.ops["BatchGetOnPremisesInstances"].apply(partialParams));
    }
    invokeCreateApplication(partialParams) {
        this.boot();
        return this.client.createApplication(this.ops["CreateApplication"].apply(partialParams));
    }
    invokeCreateDeployment(partialParams) {
        this.boot();
        return this.client.createDeployment(this.ops["CreateDeployment"].apply(partialParams));
    }
    invokeCreateDeploymentConfig(partialParams) {
        this.boot();
        return this.client.createDeploymentConfig(this.ops["CreateDeploymentConfig"].apply(partialParams));
    }
    invokeCreateDeploymentGroup(partialParams) {
        this.boot();
        return this.client.createDeploymentGroup(this.ops["CreateDeploymentGroup"].apply(partialParams));
    }
    invokeDeleteDeploymentGroup(partialParams) {
        this.boot();
        return this.client.deleteDeploymentGroup(this.ops["DeleteDeploymentGroup"].apply(partialParams));
    }
    invokeDeleteGitHubAccountToken(partialParams) {
        this.boot();
        return this.client.deleteGitHubAccountToken(this.ops["DeleteGitHubAccountToken"].apply(partialParams));
    }
    invokeDeleteResourcesByExternalId(partialParams) {
        this.boot();
        return this.client.deleteResourcesByExternalId(this.ops["DeleteResourcesByExternalId"].apply(partialParams));
    }
    invokeGetApplication(partialParams) {
        this.boot();
        return this.client.getApplication(this.ops["GetApplication"].apply(partialParams));
    }
    invokeGetApplicationRevision(partialParams) {
        this.boot();
        return this.client.getApplicationRevision(this.ops["GetApplicationRevision"].apply(partialParams));
    }
    invokeGetDeployment(partialParams) {
        this.boot();
        return this.client.getDeployment(this.ops["GetDeployment"].apply(partialParams));
    }
    invokeGetDeploymentConfig(partialParams) {
        this.boot();
        return this.client.getDeploymentConfig(this.ops["GetDeploymentConfig"].apply(partialParams));
    }
    invokeGetDeploymentGroup(partialParams) {
        this.boot();
        return this.client.getDeploymentGroup(this.ops["GetDeploymentGroup"].apply(partialParams));
    }
    invokeGetDeploymentInstance(partialParams) {
        this.boot();
        return this.client.getDeploymentInstance(this.ops["GetDeploymentInstance"].apply(partialParams));
    }
    invokeGetDeploymentTarget(partialParams) {
        this.boot();
        return this.client.getDeploymentTarget(this.ops["GetDeploymentTarget"].apply(partialParams));
    }
    invokeGetOnPremisesInstance(partialParams) {
        this.boot();
        return this.client.getOnPremisesInstance(this.ops["GetOnPremisesInstance"].apply(partialParams));
    }
    invokeListApplicationRevisions(partialParams) {
        this.boot();
        return this.client.listApplicationRevisions(this.ops["ListApplicationRevisions"].apply(partialParams));
    }
    invokeListApplications(partialParams) {
        this.boot();
        return this.client.listApplications(this.ops["ListApplications"].apply(partialParams));
    }
    invokeListDeploymentConfigs(partialParams) {
        this.boot();
        return this.client.listDeploymentConfigs(this.ops["ListDeploymentConfigs"].apply(partialParams));
    }
    invokeListDeploymentGroups(partialParams) {
        this.boot();
        return this.client.listDeploymentGroups(this.ops["ListDeploymentGroups"].apply(partialParams));
    }
    invokeListDeploymentInstances(partialParams) {
        this.boot();
        return this.client.listDeploymentInstances(this.ops["ListDeploymentInstances"].apply(partialParams));
    }
    invokeListDeploymentTargets(partialParams) {
        this.boot();
        return this.client.listDeploymentTargets(this.ops["ListDeploymentTargets"].apply(partialParams));
    }
    invokeListDeployments(partialParams) {
        this.boot();
        return this.client.listDeployments(this.ops["ListDeployments"].apply(partialParams));
    }
    invokeListGitHubAccountTokenNames(partialParams) {
        this.boot();
        return this.client.listGitHubAccountTokenNames(this.ops["ListGitHubAccountTokenNames"].apply(partialParams));
    }
    invokeListOnPremisesInstances(partialParams) {
        this.boot();
        return this.client.listOnPremisesInstances(this.ops["ListOnPremisesInstances"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokePutLifecycleEventHookExecutionStatus(partialParams) {
        this.boot();
        return this.client.putLifecycleEventHookExecutionStatus(this.ops["PutLifecycleEventHookExecutionStatus"].apply(partialParams));
    }
    invokeStopDeployment(partialParams) {
        this.boot();
        return this.client.stopDeployment(this.ops["StopDeployment"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateDeploymentGroup(partialParams) {
        this.boot();
        return this.client.updateDeploymentGroup(this.ops["UpdateDeploymentGroup"].apply(partialParams));
    }
}
exports.default = default_1;
