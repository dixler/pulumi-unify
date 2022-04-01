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
const schema = require("../apis/amplify-2017-07-25.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.amplify.Branch {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.Amplify();
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
    invokeCreateApp(partialParams) {
        this.boot();
        return this.client.createApp(this.ops["CreateApp"].apply(partialParams));
    }
    invokeCreateBackendEnvironment(partialParams) {
        this.boot();
        return this.client.createBackendEnvironment(this.ops["CreateBackendEnvironment"].apply(partialParams));
    }
    invokeCreateBranch(partialParams) {
        this.boot();
        return this.client.createBranch(this.ops["CreateBranch"].apply(partialParams));
    }
    invokeCreateDeployment(partialParams) {
        this.boot();
        return this.client.createDeployment(this.ops["CreateDeployment"].apply(partialParams));
    }
    invokeCreateDomainAssociation(partialParams) {
        this.boot();
        return this.client.createDomainAssociation(this.ops["CreateDomainAssociation"].apply(partialParams));
    }
    invokeCreateWebhook(partialParams) {
        this.boot();
        return this.client.createWebhook(this.ops["CreateWebhook"].apply(partialParams));
    }
    invokeDeleteApp(partialParams) {
        this.boot();
        return this.client.deleteApp(this.ops["DeleteApp"].apply(partialParams));
    }
    invokeDeleteBackendEnvironment(partialParams) {
        this.boot();
        return this.client.deleteBackendEnvironment(this.ops["DeleteBackendEnvironment"].apply(partialParams));
    }
    invokeDeleteBranch(partialParams) {
        this.boot();
        return this.client.deleteBranch(this.ops["DeleteBranch"].apply(partialParams));
    }
    invokeDeleteDomainAssociation(partialParams) {
        this.boot();
        return this.client.deleteDomainAssociation(this.ops["DeleteDomainAssociation"].apply(partialParams));
    }
    invokeDeleteJob(partialParams) {
        this.boot();
        return this.client.deleteJob(this.ops["DeleteJob"].apply(partialParams));
    }
    invokeDeleteWebhook(partialParams) {
        this.boot();
        return this.client.deleteWebhook(this.ops["DeleteWebhook"].apply(partialParams));
    }
    invokeGenerateAccessLogs(partialParams) {
        this.boot();
        return this.client.generateAccessLogs(this.ops["GenerateAccessLogs"].apply(partialParams));
    }
    invokeGetApp(partialParams) {
        this.boot();
        return this.client.getApp(this.ops["GetApp"].apply(partialParams));
    }
    invokeGetArtifactUrl(partialParams) {
        this.boot();
        return this.client.getArtifactUrl(this.ops["GetArtifactUrl"].apply(partialParams));
    }
    invokeGetBackendEnvironment(partialParams) {
        this.boot();
        return this.client.getBackendEnvironment(this.ops["GetBackendEnvironment"].apply(partialParams));
    }
    invokeGetBranch(partialParams) {
        this.boot();
        return this.client.getBranch(this.ops["GetBranch"].apply(partialParams));
    }
    invokeGetDomainAssociation(partialParams) {
        this.boot();
        return this.client.getDomainAssociation(this.ops["GetDomainAssociation"].apply(partialParams));
    }
    invokeGetJob(partialParams) {
        this.boot();
        return this.client.getJob(this.ops["GetJob"].apply(partialParams));
    }
    invokeGetWebhook(partialParams) {
        this.boot();
        return this.client.getWebhook(this.ops["GetWebhook"].apply(partialParams));
    }
    invokeListApps(partialParams) {
        this.boot();
        return this.client.listApps(this.ops["ListApps"].apply(partialParams));
    }
    invokeListArtifacts(partialParams) {
        this.boot();
        return this.client.listArtifacts(this.ops["ListArtifacts"].apply(partialParams));
    }
    invokeListBackendEnvironments(partialParams) {
        this.boot();
        return this.client.listBackendEnvironments(this.ops["ListBackendEnvironments"].apply(partialParams));
    }
    invokeListBranches(partialParams) {
        this.boot();
        return this.client.listBranches(this.ops["ListBranches"].apply(partialParams));
    }
    invokeListDomainAssociations(partialParams) {
        this.boot();
        return this.client.listDomainAssociations(this.ops["ListDomainAssociations"].apply(partialParams));
    }
    invokeListJobs(partialParams) {
        this.boot();
        return this.client.listJobs(this.ops["ListJobs"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListWebhooks(partialParams) {
        this.boot();
        return this.client.listWebhooks(this.ops["ListWebhooks"].apply(partialParams));
    }
    invokeStartDeployment(partialParams) {
        this.boot();
        return this.client.startDeployment(this.ops["StartDeployment"].apply(partialParams));
    }
    invokeStartJob(partialParams) {
        this.boot();
        return this.client.startJob(this.ops["StartJob"].apply(partialParams));
    }
    invokeStopJob(partialParams) {
        this.boot();
        return this.client.stopJob(this.ops["StopJob"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateApp(partialParams) {
        this.boot();
        return this.client.updateApp(this.ops["UpdateApp"].apply(partialParams));
    }
    invokeUpdateBranch(partialParams) {
        this.boot();
        return this.client.updateBranch(this.ops["UpdateBranch"].apply(partialParams));
    }
    invokeUpdateDomainAssociation(partialParams) {
        this.boot();
        return this.client.updateDomainAssociation(this.ops["UpdateDomainAssociation"].apply(partialParams));
    }
    invokeUpdateWebhook(partialParams) {
        this.boot();
        return this.client.updateWebhook(this.ops["UpdateWebhook"].apply(partialParams));
    }
}
exports.default = default_1;
