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
const schema = require("../apis/kinesisanalyticsv2-2018-05-23.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.kinesisanalyticsv2.ApplicationSnapshot {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.KinesisAnalyticsV2();
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
    invokeAddApplicationCloudWatchLoggingOption(partialParams) {
        this.boot();
        return this.client.addApplicationCloudWatchLoggingOption(this.ops["AddApplicationCloudWatchLoggingOption"].apply(partialParams));
    }
    invokeAddApplicationInput(partialParams) {
        this.boot();
        return this.client.addApplicationInput(this.ops["AddApplicationInput"].apply(partialParams));
    }
    invokeAddApplicationInputProcessingConfiguration(partialParams) {
        this.boot();
        return this.client.addApplicationInputProcessingConfiguration(this.ops["AddApplicationInputProcessingConfiguration"].apply(partialParams));
    }
    invokeAddApplicationOutput(partialParams) {
        this.boot();
        return this.client.addApplicationOutput(this.ops["AddApplicationOutput"].apply(partialParams));
    }
    invokeAddApplicationReferenceDataSource(partialParams) {
        this.boot();
        return this.client.addApplicationReferenceDataSource(this.ops["AddApplicationReferenceDataSource"].apply(partialParams));
    }
    invokeAddApplicationVpcConfiguration(partialParams) {
        this.boot();
        return this.client.addApplicationVpcConfiguration(this.ops["AddApplicationVpcConfiguration"].apply(partialParams));
    }
    invokeCreateApplication(partialParams) {
        this.boot();
        return this.client.createApplication(this.ops["CreateApplication"].apply(partialParams));
    }
    invokeCreateApplicationPresignedUrl(partialParams) {
        this.boot();
        return this.client.createApplicationPresignedUrl(this.ops["CreateApplicationPresignedUrl"].apply(partialParams));
    }
    invokeCreateApplicationSnapshot(partialParams) {
        this.boot();
        return this.client.createApplicationSnapshot(this.ops["CreateApplicationSnapshot"].apply(partialParams));
    }
    invokeDeleteApplication(partialParams) {
        this.boot();
        return this.client.deleteApplication(this.ops["DeleteApplication"].apply(partialParams));
    }
    invokeDeleteApplicationCloudWatchLoggingOption(partialParams) {
        this.boot();
        return this.client.deleteApplicationCloudWatchLoggingOption(this.ops["DeleteApplicationCloudWatchLoggingOption"].apply(partialParams));
    }
    invokeDeleteApplicationInputProcessingConfiguration(partialParams) {
        this.boot();
        return this.client.deleteApplicationInputProcessingConfiguration(this.ops["DeleteApplicationInputProcessingConfiguration"].apply(partialParams));
    }
    invokeDeleteApplicationOutput(partialParams) {
        this.boot();
        return this.client.deleteApplicationOutput(this.ops["DeleteApplicationOutput"].apply(partialParams));
    }
    invokeDeleteApplicationReferenceDataSource(partialParams) {
        this.boot();
        return this.client.deleteApplicationReferenceDataSource(this.ops["DeleteApplicationReferenceDataSource"].apply(partialParams));
    }
    invokeDeleteApplicationSnapshot(partialParams) {
        this.boot();
        return this.client.deleteApplicationSnapshot(this.ops["DeleteApplicationSnapshot"].apply(partialParams));
    }
    invokeDeleteApplicationVpcConfiguration(partialParams) {
        this.boot();
        return this.client.deleteApplicationVpcConfiguration(this.ops["DeleteApplicationVpcConfiguration"].apply(partialParams));
    }
    invokeDescribeApplication(partialParams) {
        this.boot();
        return this.client.describeApplication(this.ops["DescribeApplication"].apply(partialParams));
    }
    invokeDescribeApplicationSnapshot(partialParams) {
        this.boot();
        return this.client.describeApplicationSnapshot(this.ops["DescribeApplicationSnapshot"].apply(partialParams));
    }
    invokeDescribeApplicationVersion(partialParams) {
        this.boot();
        return this.client.describeApplicationVersion(this.ops["DescribeApplicationVersion"].apply(partialParams));
    }
    invokeDiscoverInputSchema(partialParams) {
        this.boot();
        return this.client.discoverInputSchema(this.ops["DiscoverInputSchema"].apply(partialParams));
    }
    invokeListApplicationSnapshots(partialParams) {
        this.boot();
        return this.client.listApplicationSnapshots(this.ops["ListApplicationSnapshots"].apply(partialParams));
    }
    invokeListApplicationVersions(partialParams) {
        this.boot();
        return this.client.listApplicationVersions(this.ops["ListApplicationVersions"].apply(partialParams));
    }
    invokeListApplications(partialParams) {
        this.boot();
        return this.client.listApplications(this.ops["ListApplications"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeRollbackApplication(partialParams) {
        this.boot();
        return this.client.rollbackApplication(this.ops["RollbackApplication"].apply(partialParams));
    }
    invokeStartApplication(partialParams) {
        this.boot();
        return this.client.startApplication(this.ops["StartApplication"].apply(partialParams));
    }
    invokeStopApplication(partialParams) {
        this.boot();
        return this.client.stopApplication(this.ops["StopApplication"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateApplication(partialParams) {
        this.boot();
        return this.client.updateApplication(this.ops["UpdateApplication"].apply(partialParams));
    }
    invokeUpdateApplicationMaintenanceConfiguration(partialParams) {
        this.boot();
        return this.client.updateApplicationMaintenanceConfiguration(this.ops["UpdateApplicationMaintenanceConfiguration"].apply(partialParams));
    }
}
exports.default = default_1;
