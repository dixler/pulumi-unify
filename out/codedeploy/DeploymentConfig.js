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
class default_1 extends aws.codedeploy.DeploymentConfig {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.CodeDeploy();
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
    invokeAddTagsToOnPremisesInstances(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addTagsToOnPremisesInstances(this.ops["AddTagsToOnPremisesInstances"].applicator.apply(partialParams));
    }
    invokeBatchGetApplicationRevisions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetApplicationRevisions(this.ops["BatchGetApplicationRevisions"].applicator.apply(partialParams));
    }
    invokeBatchGetApplications(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetApplications(this.ops["BatchGetApplications"].applicator.apply(partialParams));
    }
    invokeBatchGetDeploymentGroups(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetDeploymentGroups(this.ops["BatchGetDeploymentGroups"].applicator.apply(partialParams));
    }
    invokeBatchGetDeploymentInstances(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetDeploymentInstances(this.ops["BatchGetDeploymentInstances"].applicator.apply(partialParams));
    }
    invokeBatchGetDeployments(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetDeployments(this.ops["BatchGetDeployments"].applicator.apply(partialParams));
    }
    invokeBatchGetOnPremisesInstances(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetOnPremisesInstances(this.ops["BatchGetOnPremisesInstances"].applicator.apply(partialParams));
    }
    invokeCreateApplication(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createApplication(this.ops["CreateApplication"].applicator.apply(partialParams));
    }
    invokeCreateDeployment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDeployment(this.ops["CreateDeployment"].applicator.apply(partialParams));
    }
    invokeCreateDeploymentConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDeploymentConfig(this.ops["CreateDeploymentConfig"].applicator.apply(partialParams));
    }
    invokeCreateDeploymentGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDeploymentGroup(this.ops["CreateDeploymentGroup"].applicator.apply(partialParams));
    }
    invokeDeleteApplication(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApplication(this.ops["DeleteApplication"].applicator.apply(partialParams));
    }
    invokeDeleteDeploymentConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDeploymentConfig(this.ops["DeleteDeploymentConfig"].applicator.apply(partialParams));
    }
    invokeDeleteDeploymentGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDeploymentGroup(this.ops["DeleteDeploymentGroup"].applicator.apply(partialParams));
    }
    invokeDeregisterOnPremisesInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterOnPremisesInstance(this.ops["DeregisterOnPremisesInstance"].applicator.apply(partialParams));
    }
    invokeGetApplication(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getApplication(this.ops["GetApplication"].applicator.apply(partialParams));
    }
    invokeGetApplicationRevision(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getApplicationRevision(this.ops["GetApplicationRevision"].applicator.apply(partialParams));
    }
    invokeGetDeployment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDeployment(this.ops["GetDeployment"].applicator.apply(partialParams));
    }
    invokeGetDeploymentConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDeploymentConfig(this.ops["GetDeploymentConfig"].applicator.apply(partialParams));
    }
    invokeGetDeploymentGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDeploymentGroup(this.ops["GetDeploymentGroup"].applicator.apply(partialParams));
    }
    invokeGetDeploymentInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDeploymentInstance(this.ops["GetDeploymentInstance"].applicator.apply(partialParams));
    }
    invokeGetOnPremisesInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getOnPremisesInstance(this.ops["GetOnPremisesInstance"].applicator.apply(partialParams));
    }
    invokeListApplicationRevisions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listApplicationRevisions(this.ops["ListApplicationRevisions"].applicator.apply(partialParams));
    }
    invokeListDeploymentGroups(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDeploymentGroups(this.ops["ListDeploymentGroups"].applicator.apply(partialParams));
    }
    invokeListDeploymentInstances(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDeploymentInstances(this.ops["ListDeploymentInstances"].applicator.apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].applicator.apply(partialParams));
    }
    invokeRegisterApplicationRevision(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerApplicationRevision(this.ops["RegisterApplicationRevision"].applicator.apply(partialParams));
    }
    invokeRegisterOnPremisesInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerOnPremisesInstance(this.ops["RegisterOnPremisesInstance"].applicator.apply(partialParams));
    }
    invokeRemoveTagsFromOnPremisesInstances(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeTagsFromOnPremisesInstances(this.ops["RemoveTagsFromOnPremisesInstances"].applicator.apply(partialParams));
    }
    invokeStopDeployment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopDeployment(this.ops["StopDeployment"].applicator.apply(partialParams));
    }
    invokeTagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].applicator.apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].applicator.apply(partialParams));
    }
    invokeUpdateDeploymentGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDeploymentGroup(this.ops["UpdateDeploymentGroup"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
