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
const schema = require("../apis/codebuild-2016-10-06.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.codebuild.Webhook {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.CodeBuild();
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
    invokeBatchDeleteBuilds(partialParams) {
        this.boot();
        return this.client.batchDeleteBuilds(this.ops["BatchDeleteBuilds"].apply(partialParams));
    }
    invokeBatchGetBuildBatches(partialParams) {
        this.boot();
        return this.client.batchGetBuildBatches(this.ops["BatchGetBuildBatches"].apply(partialParams));
    }
    invokeBatchGetBuilds(partialParams) {
        this.boot();
        return this.client.batchGetBuilds(this.ops["BatchGetBuilds"].apply(partialParams));
    }
    invokeBatchGetProjects(partialParams) {
        this.boot();
        return this.client.batchGetProjects(this.ops["BatchGetProjects"].apply(partialParams));
    }
    invokeBatchGetReportGroups(partialParams) {
        this.boot();
        return this.client.batchGetReportGroups(this.ops["BatchGetReportGroups"].apply(partialParams));
    }
    invokeBatchGetReports(partialParams) {
        this.boot();
        return this.client.batchGetReports(this.ops["BatchGetReports"].apply(partialParams));
    }
    invokeCreateProject(partialParams) {
        this.boot();
        return this.client.createProject(this.ops["CreateProject"].apply(partialParams));
    }
    invokeCreateReportGroup(partialParams) {
        this.boot();
        return this.client.createReportGroup(this.ops["CreateReportGroup"].apply(partialParams));
    }
    invokeCreateWebhook(partialParams) {
        this.boot();
        return this.client.createWebhook(this.ops["CreateWebhook"].apply(partialParams));
    }
    invokeDeleteBuildBatch(partialParams) {
        this.boot();
        return this.client.deleteBuildBatch(this.ops["DeleteBuildBatch"].apply(partialParams));
    }
    invokeDeleteProject(partialParams) {
        this.boot();
        return this.client.deleteProject(this.ops["DeleteProject"].apply(partialParams));
    }
    invokeDeleteReport(partialParams) {
        this.boot();
        return this.client.deleteReport(this.ops["DeleteReport"].apply(partialParams));
    }
    invokeDeleteReportGroup(partialParams) {
        this.boot();
        return this.client.deleteReportGroup(this.ops["DeleteReportGroup"].apply(partialParams));
    }
    invokeDeleteResourcePolicy(partialParams) {
        this.boot();
        return this.client.deleteResourcePolicy(this.ops["DeleteResourcePolicy"].apply(partialParams));
    }
    invokeDeleteSourceCredentials(partialParams) {
        this.boot();
        return this.client.deleteSourceCredentials(this.ops["DeleteSourceCredentials"].apply(partialParams));
    }
    invokeDeleteWebhook(partialParams) {
        this.boot();
        return this.client.deleteWebhook(this.ops["DeleteWebhook"].apply(partialParams));
    }
    invokeDescribeCodeCoverages(partialParams) {
        this.boot();
        return this.client.describeCodeCoverages(this.ops["DescribeCodeCoverages"].apply(partialParams));
    }
    invokeDescribeTestCases(partialParams) {
        this.boot();
        return this.client.describeTestCases(this.ops["DescribeTestCases"].apply(partialParams));
    }
    invokeGetReportGroupTrend(partialParams) {
        this.boot();
        return this.client.getReportGroupTrend(this.ops["GetReportGroupTrend"].apply(partialParams));
    }
    invokeGetResourcePolicy(partialParams) {
        this.boot();
        return this.client.getResourcePolicy(this.ops["GetResourcePolicy"].apply(partialParams));
    }
    invokeImportSourceCredentials(partialParams) {
        this.boot();
        return this.client.importSourceCredentials(this.ops["ImportSourceCredentials"].apply(partialParams));
    }
    invokeInvalidateProjectCache(partialParams) {
        this.boot();
        return this.client.invalidateProjectCache(this.ops["InvalidateProjectCache"].apply(partialParams));
    }
    invokeListBuildBatches(partialParams) {
        this.boot();
        return this.client.listBuildBatches(this.ops["ListBuildBatches"].apply(partialParams));
    }
    invokeListBuildBatchesForProject(partialParams) {
        this.boot();
        return this.client.listBuildBatchesForProject(this.ops["ListBuildBatchesForProject"].apply(partialParams));
    }
    invokeListBuilds(partialParams) {
        this.boot();
        return this.client.listBuilds(this.ops["ListBuilds"].apply(partialParams));
    }
    invokeListBuildsForProject(partialParams) {
        this.boot();
        return this.client.listBuildsForProject(this.ops["ListBuildsForProject"].apply(partialParams));
    }
    invokeListCuratedEnvironmentImages(partialParams) {
        this.boot();
        return this.client.listCuratedEnvironmentImages(this.ops["ListCuratedEnvironmentImages"].apply(partialParams));
    }
    invokeListProjects(partialParams) {
        this.boot();
        return this.client.listProjects(this.ops["ListProjects"].apply(partialParams));
    }
    invokeListReportGroups(partialParams) {
        this.boot();
        return this.client.listReportGroups(this.ops["ListReportGroups"].apply(partialParams));
    }
    invokeListReports(partialParams) {
        this.boot();
        return this.client.listReports(this.ops["ListReports"].apply(partialParams));
    }
    invokeListReportsForReportGroup(partialParams) {
        this.boot();
        return this.client.listReportsForReportGroup(this.ops["ListReportsForReportGroup"].apply(partialParams));
    }
    invokeListSharedProjects(partialParams) {
        this.boot();
        return this.client.listSharedProjects(this.ops["ListSharedProjects"].apply(partialParams));
    }
    invokeListSharedReportGroups(partialParams) {
        this.boot();
        return this.client.listSharedReportGroups(this.ops["ListSharedReportGroups"].apply(partialParams));
    }
    invokeListSourceCredentials(partialParams) {
        this.boot();
        return this.client.listSourceCredentials(this.ops["ListSourceCredentials"].apply(partialParams));
    }
    invokePutResourcePolicy(partialParams) {
        this.boot();
        return this.client.putResourcePolicy(this.ops["PutResourcePolicy"].apply(partialParams));
    }
    invokeRetryBuild(partialParams) {
        this.boot();
        return this.client.retryBuild(this.ops["RetryBuild"].apply(partialParams));
    }
    invokeRetryBuildBatch(partialParams) {
        this.boot();
        return this.client.retryBuildBatch(this.ops["RetryBuildBatch"].apply(partialParams));
    }
    invokeStartBuild(partialParams) {
        this.boot();
        return this.client.startBuild(this.ops["StartBuild"].apply(partialParams));
    }
    invokeStartBuildBatch(partialParams) {
        this.boot();
        return this.client.startBuildBatch(this.ops["StartBuildBatch"].apply(partialParams));
    }
    invokeStopBuild(partialParams) {
        this.boot();
        return this.client.stopBuild(this.ops["StopBuild"].apply(partialParams));
    }
    invokeStopBuildBatch(partialParams) {
        this.boot();
        return this.client.stopBuildBatch(this.ops["StopBuildBatch"].apply(partialParams));
    }
    invokeUpdateProject(partialParams) {
        this.boot();
        return this.client.updateProject(this.ops["UpdateProject"].apply(partialParams));
    }
    invokeUpdateProjectVisibility(partialParams) {
        this.boot();
        return this.client.updateProjectVisibility(this.ops["UpdateProjectVisibility"].apply(partialParams));
    }
    invokeUpdateReportGroup(partialParams) {
        this.boot();
        return this.client.updateReportGroup(this.ops["UpdateReportGroup"].apply(partialParams));
    }
    invokeUpdateWebhook(partialParams) {
        this.boot();
        return this.client.updateWebhook(this.ops["UpdateWebhook"].apply(partialParams));
    }
}
exports.default = default_1;
