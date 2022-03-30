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
class default_1 extends aws.dlm.LifecyclePolicy {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.DLM();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/dlm-2018-01-12.normal.json"), this.client);
    }
    invokeCreateLifecyclePolicy(partialParams) {
        return this.client.createLifecyclePolicy(this.ops["CreateLifecyclePolicy"].apply(partialParams));
    }
    invokeDeleteLifecyclePolicy(partialParams) {
        return this.client.deleteLifecyclePolicy(this.ops["DeleteLifecyclePolicy"].apply(partialParams));
    }
    invokeGetLifecyclePolicy(partialParams) {
        return this.client.getLifecyclePolicy(this.ops["GetLifecyclePolicy"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateLifecyclePolicy(partialParams) {
        return this.client.updateLifecyclePolicy(this.ops["UpdateLifecyclePolicy"].apply(partialParams));
    }
}
exports.default = default_1;