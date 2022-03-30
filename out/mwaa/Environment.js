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
class default_1 extends aws.mwaa.Environment {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.MWAA();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/mwaa-2020-07-01.normal.json"), this.client);
    }
    invokeCreateCliToken(partialParams) {
        return this.client.createCliToken(this.ops["CreateCliToken"].apply(partialParams));
    }
    invokeCreateEnvironment(partialParams) {
        return this.client.createEnvironment(this.ops["CreateEnvironment"].apply(partialParams));
    }
    invokeCreateWebLoginToken(partialParams) {
        return this.client.createWebLoginToken(this.ops["CreateWebLoginToken"].apply(partialParams));
    }
    invokeDeleteEnvironment(partialParams) {
        return this.client.deleteEnvironment(this.ops["DeleteEnvironment"].apply(partialParams));
    }
    invokeGetEnvironment(partialParams) {
        return this.client.getEnvironment(this.ops["GetEnvironment"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokePublishMetrics(partialParams) {
        return this.client.publishMetrics(this.ops["PublishMetrics"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateEnvironment(partialParams) {
        return this.client.updateEnvironment(this.ops["UpdateEnvironment"].apply(partialParams));
    }
}
exports.default = default_1;
