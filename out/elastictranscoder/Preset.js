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
class default_1 extends aws.elastictranscoder.Preset {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.ElasticTranscoder();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/elastictranscoder-2012-09-25.normal.json"), this.client);
    }
    invokeCancelJob(partialParams) {
        return this.client.cancelJob(this.ops["CancelJob"].apply(partialParams));
    }
    invokeCreateJob(partialParams) {
        return this.client.createJob(this.ops["CreateJob"].apply(partialParams));
    }
    invokeCreatePipeline(partialParams) {
        return this.client.createPipeline(this.ops["CreatePipeline"].apply(partialParams));
    }
    invokeCreatePreset(partialParams) {
        return this.client.createPreset(this.ops["CreatePreset"].apply(partialParams));
    }
    invokeDeletePipeline(partialParams) {
        return this.client.deletePipeline(this.ops["DeletePipeline"].apply(partialParams));
    }
    invokeDeletePreset(partialParams) {
        return this.client.deletePreset(this.ops["DeletePreset"].apply(partialParams));
    }
    invokeListJobsByPipeline(partialParams) {
        return this.client.listJobsByPipeline(this.ops["ListJobsByPipeline"].apply(partialParams));
    }
    invokeListJobsByStatus(partialParams) {
        return this.client.listJobsByStatus(this.ops["ListJobsByStatus"].apply(partialParams));
    }
    invokeReadJob(partialParams) {
        return this.client.readJob(this.ops["ReadJob"].apply(partialParams));
    }
    invokeReadPipeline(partialParams) {
        return this.client.readPipeline(this.ops["ReadPipeline"].apply(partialParams));
    }
    invokeReadPreset(partialParams) {
        return this.client.readPreset(this.ops["ReadPreset"].apply(partialParams));
    }
    invokeTestRole(partialParams) {
        return this.client.testRole(this.ops["TestRole"].apply(partialParams));
    }
    invokeUpdatePipeline(partialParams) {
        return this.client.updatePipeline(this.ops["UpdatePipeline"].apply(partialParams));
    }
    invokeUpdatePipelineNotifications(partialParams) {
        return this.client.updatePipelineNotifications(this.ops["UpdatePipelineNotifications"].apply(partialParams));
    }
    invokeUpdatePipelineStatus(partialParams) {
        return this.client.updatePipelineStatus(this.ops["UpdatePipelineStatus"].apply(partialParams));
    }
}
exports.default = default_1;
