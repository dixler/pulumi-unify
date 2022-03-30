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
class default_1 extends aws.codebuild.ReportGroup {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.CodeBuild();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/codebuild-2016-10-06.normal.json"), this.client);
    }
    invokeBatchDeleteBuilds(partialParams) {
        return this.client.batchDeleteBuilds(this.ops["BatchDeleteBuilds"].apply(partialParams));
    }
    invokeBatchGetBuildBatches(partialParams) {
        return this.client.batchGetBuildBatches(this.ops["BatchGetBuildBatches"].apply(partialParams));
    }
    invokeBatchGetBuilds(partialParams) {
        return this.client.batchGetBuilds(this.ops["BatchGetBuilds"].apply(partialParams));
    }
    invokeBatchGetProjects(partialParams) {
        return this.client.batchGetProjects(this.ops["BatchGetProjects"].apply(partialParams));
    }
    invokeBatchGetReportGroups(partialParams) {
        return this.client.batchGetReportGroups(this.ops["BatchGetReportGroups"].apply(partialParams));
    }
    invokeBatchGetReports(partialParams) {
        return this.client.batchGetReports(this.ops["BatchGetReports"].apply(partialParams));
    }
    invokeCreateProject(partialParams) {
        return this.client.createProject(this.ops["CreateProject"].apply(partialParams));
    }
    invokeCreateReportGroup(partialParams) {
        return this.client.createReportGroup(this.ops["CreateReportGroup"].apply(partialParams));
    }
    invokeCreateWebhook(partialParams) {
        return this.client.createWebhook(this.ops["CreateWebhook"].apply(partialParams));
    }
    invokeDeleteBuildBatch(partialParams) {
        return this.client.deleteBuildBatch(this.ops["DeleteBuildBatch"].apply(partialParams));
    }
    invokeDeleteProject(partialParams) {
        return this.client.deleteProject(this.ops["DeleteProject"].apply(partialParams));
    }
    invokeDeleteReport(partialParams) {
        return this.client.deleteReport(this.ops["DeleteReport"].apply(partialParams));
    }
    invokeDeleteReportGroup(partialParams) {
        return this.client.deleteReportGroup(this.ops["DeleteReportGroup"].apply(partialParams));
    }
    invokeDeleteResourcePolicy(partialParams) {
        return this.client.deleteResourcePolicy(this.ops["DeleteResourcePolicy"].apply(partialParams));
    }
    invokeDeleteSourceCredentials(partialParams) {
        return this.client.deleteSourceCredentials(this.ops["DeleteSourceCredentials"].apply(partialParams));
    }
    invokeDeleteWebhook(partialParams) {
        return this.client.deleteWebhook(this.ops["DeleteWebhook"].apply(partialParams));
    }
    invokeDescribeCodeCoverages(partialParams) {
        return this.client.describeCodeCoverages(this.ops["DescribeCodeCoverages"].apply(partialParams));
    }
    invokeDescribeTestCases(partialParams) {
        return this.client.describeTestCases(this.ops["DescribeTestCases"].apply(partialParams));
    }
    invokeGetReportGroupTrend(partialParams) {
        return this.client.getReportGroupTrend(this.ops["GetReportGroupTrend"].apply(partialParams));
    }
    invokeGetResourcePolicy(partialParams) {
        return this.client.getResourcePolicy(this.ops["GetResourcePolicy"].apply(partialParams));
    }
    invokeImportSourceCredentials(partialParams) {
        return this.client.importSourceCredentials(this.ops["ImportSourceCredentials"].apply(partialParams));
    }
    invokeInvalidateProjectCache(partialParams) {
        return this.client.invalidateProjectCache(this.ops["InvalidateProjectCache"].apply(partialParams));
    }
    invokeListBuildsForProject(partialParams) {
        return this.client.listBuildsForProject(this.ops["ListBuildsForProject"].apply(partialParams));
    }
    invokeListReportsForReportGroup(partialParams) {
        return this.client.listReportsForReportGroup(this.ops["ListReportsForReportGroup"].apply(partialParams));
    }
    invokePutResourcePolicy(partialParams) {
        return this.client.putResourcePolicy(this.ops["PutResourcePolicy"].apply(partialParams));
    }
    invokeStartBuild(partialParams) {
        return this.client.startBuild(this.ops["StartBuild"].apply(partialParams));
    }
    invokeStartBuildBatch(partialParams) {
        return this.client.startBuildBatch(this.ops["StartBuildBatch"].apply(partialParams));
    }
    invokeStopBuild(partialParams) {
        return this.client.stopBuild(this.ops["StopBuild"].apply(partialParams));
    }
    invokeStopBuildBatch(partialParams) {
        return this.client.stopBuildBatch(this.ops["StopBuildBatch"].apply(partialParams));
    }
    invokeUpdateProject(partialParams) {
        return this.client.updateProject(this.ops["UpdateProject"].apply(partialParams));
    }
    invokeUpdateProjectVisibility(partialParams) {
        return this.client.updateProjectVisibility(this.ops["UpdateProjectVisibility"].apply(partialParams));
    }
    invokeUpdateReportGroup(partialParams) {
        return this.client.updateReportGroup(this.ops["UpdateReportGroup"].apply(partialParams));
    }
    invokeUpdateWebhook(partialParams) {
        return this.client.updateWebhook(this.ops["UpdateWebhook"].apply(partialParams));
    }
}
exports.default = default_1;
