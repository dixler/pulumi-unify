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
class default_1 extends aws.mediastore.Container {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.MediaStore();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/mediastore-2017-09-01.normal.json"), this.client);
    }
    invokeCreateContainer(partialParams) {
        return this.client.createContainer(this.ops["CreateContainer"].apply(partialParams));
    }
    invokeDeleteContainer(partialParams) {
        return this.client.deleteContainer(this.ops["DeleteContainer"].apply(partialParams));
    }
    invokeDeleteContainerPolicy(partialParams) {
        return this.client.deleteContainerPolicy(this.ops["DeleteContainerPolicy"].apply(partialParams));
    }
    invokeDeleteCorsPolicy(partialParams) {
        return this.client.deleteCorsPolicy(this.ops["DeleteCorsPolicy"].apply(partialParams));
    }
    invokeDeleteLifecyclePolicy(partialParams) {
        return this.client.deleteLifecyclePolicy(this.ops["DeleteLifecyclePolicy"].apply(partialParams));
    }
    invokeDeleteMetricPolicy(partialParams) {
        return this.client.deleteMetricPolicy(this.ops["DeleteMetricPolicy"].apply(partialParams));
    }
    invokeGetContainerPolicy(partialParams) {
        return this.client.getContainerPolicy(this.ops["GetContainerPolicy"].apply(partialParams));
    }
    invokeGetCorsPolicy(partialParams) {
        return this.client.getCorsPolicy(this.ops["GetCorsPolicy"].apply(partialParams));
    }
    invokeGetLifecyclePolicy(partialParams) {
        return this.client.getLifecyclePolicy(this.ops["GetLifecyclePolicy"].apply(partialParams));
    }
    invokeGetMetricPolicy(partialParams) {
        return this.client.getMetricPolicy(this.ops["GetMetricPolicy"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokePutContainerPolicy(partialParams) {
        return this.client.putContainerPolicy(this.ops["PutContainerPolicy"].apply(partialParams));
    }
    invokePutCorsPolicy(partialParams) {
        return this.client.putCorsPolicy(this.ops["PutCorsPolicy"].apply(partialParams));
    }
    invokePutLifecyclePolicy(partialParams) {
        return this.client.putLifecyclePolicy(this.ops["PutLifecyclePolicy"].apply(partialParams));
    }
    invokePutMetricPolicy(partialParams) {
        return this.client.putMetricPolicy(this.ops["PutMetricPolicy"].apply(partialParams));
    }
    invokeStartAccessLogging(partialParams) {
        return this.client.startAccessLogging(this.ops["StartAccessLogging"].apply(partialParams));
    }
    invokeStopAccessLogging(partialParams) {
        return this.client.stopAccessLogging(this.ops["StopAccessLogging"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
}
exports.default = default_1;
