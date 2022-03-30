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
class default_1 extends aws.cloudcontrol.Resource {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.CloudControl();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/cloudcontrol-2021-09-30.normal.json"), this.client);
    }
    invokeCancelResourceRequest(partialParams) {
        return this.client.cancelResourceRequest(this.ops["CancelResourceRequest"].apply(partialParams));
    }
    invokeCreateResource(partialParams) {
        return this.client.createResource(this.ops["CreateResource"].apply(partialParams));
    }
    invokeDeleteResource(partialParams) {
        return this.client.deleteResource(this.ops["DeleteResource"].apply(partialParams));
    }
    invokeGetResource(partialParams) {
        return this.client.getResource(this.ops["GetResource"].apply(partialParams));
    }
    invokeGetResourceRequestStatus(partialParams) {
        return this.client.getResourceRequestStatus(this.ops["GetResourceRequestStatus"].apply(partialParams));
    }
    invokeListResources(partialParams) {
        return this.client.listResources(this.ops["ListResources"].apply(partialParams));
    }
    invokeUpdateResource(partialParams) {
        return this.client.updateResource(this.ops["UpdateResource"].apply(partialParams));
    }
}
exports.default = default_1;
