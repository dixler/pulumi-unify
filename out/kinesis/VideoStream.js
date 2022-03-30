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
class default_1 extends aws.kinesis.VideoStream {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Kinesis();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/kinesis-2013-12-02.normal.json"), this.client);
    }
    invokeAddTagsToStream(partialParams) {
        return this.client.addTagsToStream(this.ops["AddTagsToStream"].apply(partialParams));
    }
    invokeCreateStream(partialParams) {
        return this.client.createStream(this.ops["CreateStream"].apply(partialParams));
    }
    invokeDecreaseStreamRetentionPeriod(partialParams) {
        return this.client.decreaseStreamRetentionPeriod(this.ops["DecreaseStreamRetentionPeriod"].apply(partialParams));
    }
    invokeDeleteStream(partialParams) {
        return this.client.deleteStream(this.ops["DeleteStream"].apply(partialParams));
    }
    invokeDescribeStream(partialParams) {
        return this.client.describeStream(this.ops["DescribeStream"].apply(partialParams));
    }
    invokeDescribeStreamSummary(partialParams) {
        return this.client.describeStreamSummary(this.ops["DescribeStreamSummary"].apply(partialParams));
    }
    invokeDisableEnhancedMonitoring(partialParams) {
        return this.client.disableEnhancedMonitoring(this.ops["DisableEnhancedMonitoring"].apply(partialParams));
    }
    invokeEnableEnhancedMonitoring(partialParams) {
        return this.client.enableEnhancedMonitoring(this.ops["EnableEnhancedMonitoring"].apply(partialParams));
    }
    invokeGetRecords(partialParams) {
        return this.client.getRecords(this.ops["GetRecords"].apply(partialParams));
    }
    invokeGetShardIterator(partialParams) {
        return this.client.getShardIterator(this.ops["GetShardIterator"].apply(partialParams));
    }
    invokeIncreaseStreamRetentionPeriod(partialParams) {
        return this.client.increaseStreamRetentionPeriod(this.ops["IncreaseStreamRetentionPeriod"].apply(partialParams));
    }
    invokeListStreamConsumers(partialParams) {
        return this.client.listStreamConsumers(this.ops["ListStreamConsumers"].apply(partialParams));
    }
    invokeListTagsForStream(partialParams) {
        return this.client.listTagsForStream(this.ops["ListTagsForStream"].apply(partialParams));
    }
    invokeMergeShards(partialParams) {
        return this.client.mergeShards(this.ops["MergeShards"].apply(partialParams));
    }
    invokePutRecord(partialParams) {
        return this.client.putRecord(this.ops["PutRecord"].apply(partialParams));
    }
    invokePutRecords(partialParams) {
        return this.client.putRecords(this.ops["PutRecords"].apply(partialParams));
    }
    invokeRegisterStreamConsumer(partialParams) {
        return this.client.registerStreamConsumer(this.ops["RegisterStreamConsumer"].apply(partialParams));
    }
    invokeRemoveTagsFromStream(partialParams) {
        return this.client.removeTagsFromStream(this.ops["RemoveTagsFromStream"].apply(partialParams));
    }
    invokeSplitShard(partialParams) {
        return this.client.splitShard(this.ops["SplitShard"].apply(partialParams));
    }
    invokeStartStreamEncryption(partialParams) {
        return this.client.startStreamEncryption(this.ops["StartStreamEncryption"].apply(partialParams));
    }
    invokeStopStreamEncryption(partialParams) {
        return this.client.stopStreamEncryption(this.ops["StopStreamEncryption"].apply(partialParams));
    }
    invokeUpdateShardCount(partialParams) {
        return this.client.updateShardCount(this.ops["UpdateShardCount"].apply(partialParams));
    }
    invokeUpdateStreamMode(partialParams) {
        return this.client.updateStreamMode(this.ops["UpdateStreamMode"].apply(partialParams));
    }
}
exports.default = default_1;
