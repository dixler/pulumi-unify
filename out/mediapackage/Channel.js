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
class default_1 extends aws.mediapackage.Channel {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.MediaPackage();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/mediapackage-2017-10-12.normal.json"), this.client);
    }
    invokeConfigureLogs(partialParams) {
        return this.client.configureLogs(this.ops["ConfigureLogs"].apply(partialParams));
    }
    invokeCreateChannel(partialParams) {
        return this.client.createChannel(this.ops["CreateChannel"].apply(partialParams));
    }
    invokeCreateHarvestJob(partialParams) {
        return this.client.createHarvestJob(this.ops["CreateHarvestJob"].apply(partialParams));
    }
    invokeCreateOriginEndpoint(partialParams) {
        return this.client.createOriginEndpoint(this.ops["CreateOriginEndpoint"].apply(partialParams));
    }
    invokeDeleteChannel(partialParams) {
        return this.client.deleteChannel(this.ops["DeleteChannel"].apply(partialParams));
    }
    invokeDeleteOriginEndpoint(partialParams) {
        return this.client.deleteOriginEndpoint(this.ops["DeleteOriginEndpoint"].apply(partialParams));
    }
    invokeDescribeChannel(partialParams) {
        return this.client.describeChannel(this.ops["DescribeChannel"].apply(partialParams));
    }
    invokeDescribeHarvestJob(partialParams) {
        return this.client.describeHarvestJob(this.ops["DescribeHarvestJob"].apply(partialParams));
    }
    invokeDescribeOriginEndpoint(partialParams) {
        return this.client.describeOriginEndpoint(this.ops["DescribeOriginEndpoint"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeRotateChannelCredentials(partialParams) {
        return this.client.rotateChannelCredentials(this.ops["RotateChannelCredentials"].apply(partialParams));
    }
    invokeRotateIngestEndpointCredentials(partialParams) {
        return this.client.rotateIngestEndpointCredentials(this.ops["RotateIngestEndpointCredentials"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateChannel(partialParams) {
        return this.client.updateChannel(this.ops["UpdateChannel"].apply(partialParams));
    }
    invokeUpdateOriginEndpoint(partialParams) {
        return this.client.updateOriginEndpoint(this.ops["UpdateOriginEndpoint"].apply(partialParams));
    }
}
exports.default = default_1;
