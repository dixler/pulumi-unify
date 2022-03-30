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
class default_1 extends aws.ebs.SnapshotCopy {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.EBS();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/ebs-2019-11-02.normal.json"), this.client);
    }
    invokeCompleteSnapshot(partialParams) {
        return this.client.completeSnapshot(this.ops["CompleteSnapshot"].apply(partialParams));
    }
    invokeGetSnapshotBlock(partialParams) {
        return this.client.getSnapshotBlock(this.ops["GetSnapshotBlock"].apply(partialParams));
    }
    invokeListChangedBlocks(partialParams) {
        return this.client.listChangedBlocks(this.ops["ListChangedBlocks"].apply(partialParams));
    }
    invokeListSnapshotBlocks(partialParams) {
        return this.client.listSnapshotBlocks(this.ops["ListSnapshotBlocks"].apply(partialParams));
    }
    invokePutSnapshotBlock(partialParams) {
        return this.client.putSnapshotBlock(this.ops["PutSnapshotBlock"].apply(partialParams));
    }
    invokeStartSnapshot(partialParams) {
        return this.client.startSnapshot(this.ops["StartSnapshot"].apply(partialParams));
    }
}
exports.default = default_1;
