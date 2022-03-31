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
class default_1 extends aws.codebuild.SourceCredential {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.CodeBuild();
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
    invokeBatchDeleteBuilds(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchDeleteBuilds(this.ops["BatchDeleteBuilds"].applicator.apply(partialParams));
    }
    invokeBatchGetBuildBatches(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetBuildBatches(this.ops["BatchGetBuildBatches"].applicator.apply(partialParams));
    }
    invokeBatchGetBuilds(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetBuilds(this.ops["BatchGetBuilds"].applicator.apply(partialParams));
    }
    invokeBatchGetProjects(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetProjects(this.ops["BatchGetProjects"].applicator.apply(partialParams));
    }
    invokeBatchGetReportGroups(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetReportGroups(this.ops["BatchGetReportGroups"].applicator.apply(partialParams));
    }
    invokeBatchGetReports(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetReports(this.ops["BatchGetReports"].applicator.apply(partialParams));
    }
    invokeCreateProject(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createProject(this.ops["CreateProject"].applicator.apply(partialParams));
    }
    invokeCreateReportGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createReportGroup(this.ops["CreateReportGroup"].applicator.apply(partialParams));
    }
    invokeCreateWebhook(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createWebhook(this.ops["CreateWebhook"].applicator.apply(partialParams));
    }
    invokeDeleteBuildBatch(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBuildBatch(this.ops["DeleteBuildBatch"].applicator.apply(partialParams));
    }
    invokeDeleteProject(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteProject(this.ops["DeleteProject"].applicator.apply(partialParams));
    }
    invokeDeleteReport(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteReport(this.ops["DeleteReport"].applicator.apply(partialParams));
    }
    invokeDeleteReportGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteReportGroup(this.ops["DeleteReportGroup"].applicator.apply(partialParams));
    }
    invokeDeleteResourcePolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteResourcePolicy(this.ops["DeleteResourcePolicy"].applicator.apply(partialParams));
    }
    invokeDeleteSourceCredentials(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSourceCredentials(this.ops["DeleteSourceCredentials"].applicator.apply(partialParams));
    }
    invokeDeleteWebhook(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteWebhook(this.ops["DeleteWebhook"].applicator.apply(partialParams));
    }
    invokeDescribeCodeCoverages(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCodeCoverages(this.ops["DescribeCodeCoverages"].applicator.apply(partialParams));
    }
    invokeDescribeTestCases(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTestCases(this.ops["DescribeTestCases"].applicator.apply(partialParams));
    }
    invokeGetReportGroupTrend(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getReportGroupTrend(this.ops["GetReportGroupTrend"].applicator.apply(partialParams));
    }
    invokeGetResourcePolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getResourcePolicy(this.ops["GetResourcePolicy"].applicator.apply(partialParams));
    }
    invokeImportSourceCredentials(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importSourceCredentials(this.ops["ImportSourceCredentials"].applicator.apply(partialParams));
    }
    invokeInvalidateProjectCache(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.invalidateProjectCache(this.ops["InvalidateProjectCache"].applicator.apply(partialParams));
    }
    invokeListBuildsForProject(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listBuildsForProject(this.ops["ListBuildsForProject"].applicator.apply(partialParams));
    }
    invokeListReportsForReportGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listReportsForReportGroup(this.ops["ListReportsForReportGroup"].applicator.apply(partialParams));
    }
    invokePutResourcePolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putResourcePolicy(this.ops["PutResourcePolicy"].applicator.apply(partialParams));
    }
    invokeStartBuild(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startBuild(this.ops["StartBuild"].applicator.apply(partialParams));
    }
    invokeStartBuildBatch(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startBuildBatch(this.ops["StartBuildBatch"].applicator.apply(partialParams));
    }
    invokeStopBuild(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopBuild(this.ops["StopBuild"].applicator.apply(partialParams));
    }
    invokeStopBuildBatch(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopBuildBatch(this.ops["StopBuildBatch"].applicator.apply(partialParams));
    }
    invokeUpdateProject(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateProject(this.ops["UpdateProject"].applicator.apply(partialParams));
    }
    invokeUpdateProjectVisibility(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateProjectVisibility(this.ops["UpdateProjectVisibility"].applicator.apply(partialParams));
    }
    invokeUpdateReportGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateReportGroup(this.ops["UpdateReportGroup"].applicator.apply(partialParams));
    }
    invokeUpdateWebhook(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateWebhook(this.ops["UpdateWebhook"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
