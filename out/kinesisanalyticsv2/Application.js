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
class default_1 extends aws.kinesisanalyticsv2.Application {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.KinesisAnalyticsV2();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/kinesisanalyticsv2-2018-05-23.normal.json"), this.client);
    }
    invokeAddApplicationCloudWatchLoggingOption(partialParams) {
        return this.client.addApplicationCloudWatchLoggingOption(this.ops["AddApplicationCloudWatchLoggingOption"].apply(partialParams));
    }
    invokeAddApplicationInput(partialParams) {
        return this.client.addApplicationInput(this.ops["AddApplicationInput"].apply(partialParams));
    }
    invokeAddApplicationInputProcessingConfiguration(partialParams) {
        return this.client.addApplicationInputProcessingConfiguration(this.ops["AddApplicationInputProcessingConfiguration"].apply(partialParams));
    }
    invokeAddApplicationOutput(partialParams) {
        return this.client.addApplicationOutput(this.ops["AddApplicationOutput"].apply(partialParams));
    }
    invokeAddApplicationReferenceDataSource(partialParams) {
        return this.client.addApplicationReferenceDataSource(this.ops["AddApplicationReferenceDataSource"].apply(partialParams));
    }
    invokeAddApplicationVpcConfiguration(partialParams) {
        return this.client.addApplicationVpcConfiguration(this.ops["AddApplicationVpcConfiguration"].apply(partialParams));
    }
    invokeCreateApplication(partialParams) {
        return this.client.createApplication(this.ops["CreateApplication"].apply(partialParams));
    }
    invokeCreateApplicationPresignedUrl(partialParams) {
        return this.client.createApplicationPresignedUrl(this.ops["CreateApplicationPresignedUrl"].apply(partialParams));
    }
    invokeCreateApplicationSnapshot(partialParams) {
        return this.client.createApplicationSnapshot(this.ops["CreateApplicationSnapshot"].apply(partialParams));
    }
    invokeDeleteApplication(partialParams) {
        return this.client.deleteApplication(this.ops["DeleteApplication"].apply(partialParams));
    }
    invokeDeleteApplicationCloudWatchLoggingOption(partialParams) {
        return this.client.deleteApplicationCloudWatchLoggingOption(this.ops["DeleteApplicationCloudWatchLoggingOption"].apply(partialParams));
    }
    invokeDeleteApplicationInputProcessingConfiguration(partialParams) {
        return this.client.deleteApplicationInputProcessingConfiguration(this.ops["DeleteApplicationInputProcessingConfiguration"].apply(partialParams));
    }
    invokeDeleteApplicationOutput(partialParams) {
        return this.client.deleteApplicationOutput(this.ops["DeleteApplicationOutput"].apply(partialParams));
    }
    invokeDeleteApplicationReferenceDataSource(partialParams) {
        return this.client.deleteApplicationReferenceDataSource(this.ops["DeleteApplicationReferenceDataSource"].apply(partialParams));
    }
    invokeDeleteApplicationSnapshot(partialParams) {
        return this.client.deleteApplicationSnapshot(this.ops["DeleteApplicationSnapshot"].apply(partialParams));
    }
    invokeDeleteApplicationVpcConfiguration(partialParams) {
        return this.client.deleteApplicationVpcConfiguration(this.ops["DeleteApplicationVpcConfiguration"].apply(partialParams));
    }
    invokeDescribeApplication(partialParams) {
        return this.client.describeApplication(this.ops["DescribeApplication"].apply(partialParams));
    }
    invokeDescribeApplicationSnapshot(partialParams) {
        return this.client.describeApplicationSnapshot(this.ops["DescribeApplicationSnapshot"].apply(partialParams));
    }
    invokeDescribeApplicationVersion(partialParams) {
        return this.client.describeApplicationVersion(this.ops["DescribeApplicationVersion"].apply(partialParams));
    }
    invokeDiscoverInputSchema(partialParams) {
        return this.client.discoverInputSchema(this.ops["DiscoverInputSchema"].apply(partialParams));
    }
    invokeListApplicationSnapshots(partialParams) {
        return this.client.listApplicationSnapshots(this.ops["ListApplicationSnapshots"].apply(partialParams));
    }
    invokeListApplicationVersions(partialParams) {
        return this.client.listApplicationVersions(this.ops["ListApplicationVersions"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeRollbackApplication(partialParams) {
        return this.client.rollbackApplication(this.ops["RollbackApplication"].apply(partialParams));
    }
    invokeStartApplication(partialParams) {
        return this.client.startApplication(this.ops["StartApplication"].apply(partialParams));
    }
    invokeStopApplication(partialParams) {
        return this.client.stopApplication(this.ops["StopApplication"].apply(partialParams));
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
    invokeUpdateApplicationMaintenanceConfiguration(partialParams) {
        return this.client.updateApplicationMaintenanceConfiguration(this.ops["UpdateApplicationMaintenanceConfiguration"].apply(partialParams));
    }
}
exports.default = default_1;
