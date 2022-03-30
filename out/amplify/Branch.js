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
class default_1 extends aws.amplify.Branch {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Amplify();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/amplify-2017-07-25.normal.json"), this.client);
    }
    invokeCreateApp(partialParams) {
        return this.client.createApp(this.ops["CreateApp"].apply(partialParams));
    }
    invokeCreateBackendEnvironment(partialParams) {
        return this.client.createBackendEnvironment(this.ops["CreateBackendEnvironment"].apply(partialParams));
    }
    invokeCreateBranch(partialParams) {
        return this.client.createBranch(this.ops["CreateBranch"].apply(partialParams));
    }
    invokeCreateDeployment(partialParams) {
        return this.client.createDeployment(this.ops["CreateDeployment"].apply(partialParams));
    }
    invokeCreateDomainAssociation(partialParams) {
        return this.client.createDomainAssociation(this.ops["CreateDomainAssociation"].apply(partialParams));
    }
    invokeCreateWebhook(partialParams) {
        return this.client.createWebhook(this.ops["CreateWebhook"].apply(partialParams));
    }
    invokeDeleteApp(partialParams) {
        return this.client.deleteApp(this.ops["DeleteApp"].apply(partialParams));
    }
    invokeDeleteBackendEnvironment(partialParams) {
        return this.client.deleteBackendEnvironment(this.ops["DeleteBackendEnvironment"].apply(partialParams));
    }
    invokeDeleteBranch(partialParams) {
        return this.client.deleteBranch(this.ops["DeleteBranch"].apply(partialParams));
    }
    invokeDeleteDomainAssociation(partialParams) {
        return this.client.deleteDomainAssociation(this.ops["DeleteDomainAssociation"].apply(partialParams));
    }
    invokeDeleteJob(partialParams) {
        return this.client.deleteJob(this.ops["DeleteJob"].apply(partialParams));
    }
    invokeDeleteWebhook(partialParams) {
        return this.client.deleteWebhook(this.ops["DeleteWebhook"].apply(partialParams));
    }
    invokeGenerateAccessLogs(partialParams) {
        return this.client.generateAccessLogs(this.ops["GenerateAccessLogs"].apply(partialParams));
    }
    invokeGetApp(partialParams) {
        return this.client.getApp(this.ops["GetApp"].apply(partialParams));
    }
    invokeGetArtifactUrl(partialParams) {
        return this.client.getArtifactUrl(this.ops["GetArtifactUrl"].apply(partialParams));
    }
    invokeGetBackendEnvironment(partialParams) {
        return this.client.getBackendEnvironment(this.ops["GetBackendEnvironment"].apply(partialParams));
    }
    invokeGetBranch(partialParams) {
        return this.client.getBranch(this.ops["GetBranch"].apply(partialParams));
    }
    invokeGetDomainAssociation(partialParams) {
        return this.client.getDomainAssociation(this.ops["GetDomainAssociation"].apply(partialParams));
    }
    invokeGetJob(partialParams) {
        return this.client.getJob(this.ops["GetJob"].apply(partialParams));
    }
    invokeGetWebhook(partialParams) {
        return this.client.getWebhook(this.ops["GetWebhook"].apply(partialParams));
    }
    invokeListArtifacts(partialParams) {
        return this.client.listArtifacts(this.ops["ListArtifacts"].apply(partialParams));
    }
    invokeListBackendEnvironments(partialParams) {
        return this.client.listBackendEnvironments(this.ops["ListBackendEnvironments"].apply(partialParams));
    }
    invokeListBranches(partialParams) {
        return this.client.listBranches(this.ops["ListBranches"].apply(partialParams));
    }
    invokeListDomainAssociations(partialParams) {
        return this.client.listDomainAssociations(this.ops["ListDomainAssociations"].apply(partialParams));
    }
    invokeListJobs(partialParams) {
        return this.client.listJobs(this.ops["ListJobs"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListWebhooks(partialParams) {
        return this.client.listWebhooks(this.ops["ListWebhooks"].apply(partialParams));
    }
    invokeStartDeployment(partialParams) {
        return this.client.startDeployment(this.ops["StartDeployment"].apply(partialParams));
    }
    invokeStartJob(partialParams) {
        return this.client.startJob(this.ops["StartJob"].apply(partialParams));
    }
    invokeStopJob(partialParams) {
        return this.client.stopJob(this.ops["StopJob"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateApp(partialParams) {
        return this.client.updateApp(this.ops["UpdateApp"].apply(partialParams));
    }
    invokeUpdateBranch(partialParams) {
        return this.client.updateBranch(this.ops["UpdateBranch"].apply(partialParams));
    }
    invokeUpdateDomainAssociation(partialParams) {
        return this.client.updateDomainAssociation(this.ops["UpdateDomainAssociation"].apply(partialParams));
    }
    invokeUpdateWebhook(partialParams) {
        return this.client.updateWebhook(this.ops["UpdateWebhook"].apply(partialParams));
    }
}
exports.default = default_1;
