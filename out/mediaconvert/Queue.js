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
class default_1 extends aws.mediaconvert.Queue {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.MediaConvert();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/mediaconvert-2017-08-29.normal.json"), this.client);
    }
    invokeAssociateCertificate(partialParams) {
        return this.client.associateCertificate(this.ops["AssociateCertificate"].apply(partialParams));
    }
    invokeCancelJob(partialParams) {
        return this.client.cancelJob(this.ops["CancelJob"].apply(partialParams));
    }
    invokeCreateJob(partialParams) {
        return this.client.createJob(this.ops["CreateJob"].apply(partialParams));
    }
    invokeCreateJobTemplate(partialParams) {
        return this.client.createJobTemplate(this.ops["CreateJobTemplate"].apply(partialParams));
    }
    invokeCreatePreset(partialParams) {
        return this.client.createPreset(this.ops["CreatePreset"].apply(partialParams));
    }
    invokeCreateQueue(partialParams) {
        return this.client.createQueue(this.ops["CreateQueue"].apply(partialParams));
    }
    invokeDeleteJobTemplate(partialParams) {
        return this.client.deleteJobTemplate(this.ops["DeleteJobTemplate"].apply(partialParams));
    }
    invokeDeletePreset(partialParams) {
        return this.client.deletePreset(this.ops["DeletePreset"].apply(partialParams));
    }
    invokeDeleteQueue(partialParams) {
        return this.client.deleteQueue(this.ops["DeleteQueue"].apply(partialParams));
    }
    invokeDisassociateCertificate(partialParams) {
        return this.client.disassociateCertificate(this.ops["DisassociateCertificate"].apply(partialParams));
    }
    invokeGetJob(partialParams) {
        return this.client.getJob(this.ops["GetJob"].apply(partialParams));
    }
    invokeGetJobTemplate(partialParams) {
        return this.client.getJobTemplate(this.ops["GetJobTemplate"].apply(partialParams));
    }
    invokeGetPreset(partialParams) {
        return this.client.getPreset(this.ops["GetPreset"].apply(partialParams));
    }
    invokeGetQueue(partialParams) {
        return this.client.getQueue(this.ops["GetQueue"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokePutPolicy(partialParams) {
        return this.client.putPolicy(this.ops["PutPolicy"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateJobTemplate(partialParams) {
        return this.client.updateJobTemplate(this.ops["UpdateJobTemplate"].apply(partialParams));
    }
    invokeUpdatePreset(partialParams) {
        return this.client.updatePreset(this.ops["UpdatePreset"].apply(partialParams));
    }
    invokeUpdateQueue(partialParams) {
        return this.client.updateQueue(this.ops["UpdateQueue"].apply(partialParams));
    }
}
exports.default = default_1;
