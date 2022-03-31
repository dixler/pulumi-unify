"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
const schema = require("../apis/kinesis-2013-12-02.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.kinesis.FirehoseDeliveryStream {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Kinesis();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
    }
    boot() {
        Object.entries(this.capitalizedParams).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value.value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
        this.ops = (0, parse_1.getResourceOperations)(this.capitalizedParams, schema, this.client);
    }
    invokeAddTagsToStream(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addTagsToStream(this.ops["AddTagsToStream"].applicator.apply(partialParams));
    }
    invokeCreateStream(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createStream(this.ops["CreateStream"].applicator.apply(partialParams));
    }
    invokeDecreaseStreamRetentionPeriod(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.decreaseStreamRetentionPeriod(this.ops["DecreaseStreamRetentionPeriod"].applicator.apply(partialParams));
    }
    invokeDeleteStream(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteStream(this.ops["DeleteStream"].applicator.apply(partialParams));
    }
    invokeDescribeStream(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeStream(this.ops["DescribeStream"].applicator.apply(partialParams));
    }
    invokeDescribeStreamSummary(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeStreamSummary(this.ops["DescribeStreamSummary"].applicator.apply(partialParams));
    }
    invokeDisableEnhancedMonitoring(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableEnhancedMonitoring(this.ops["DisableEnhancedMonitoring"].applicator.apply(partialParams));
    }
    invokeEnableEnhancedMonitoring(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableEnhancedMonitoring(this.ops["EnableEnhancedMonitoring"].applicator.apply(partialParams));
    }
    invokeGetRecords(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRecords(this.ops["GetRecords"].applicator.apply(partialParams));
    }
    invokeGetShardIterator(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getShardIterator(this.ops["GetShardIterator"].applicator.apply(partialParams));
    }
    invokeIncreaseStreamRetentionPeriod(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.increaseStreamRetentionPeriod(this.ops["IncreaseStreamRetentionPeriod"].applicator.apply(partialParams));
    }
    invokeListStreamConsumers(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listStreamConsumers(this.ops["ListStreamConsumers"].applicator.apply(partialParams));
    }
    invokeListTagsForStream(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForStream(this.ops["ListTagsForStream"].applicator.apply(partialParams));
    }
    invokeMergeShards(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.mergeShards(this.ops["MergeShards"].applicator.apply(partialParams));
    }
    invokePutRecord(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putRecord(this.ops["PutRecord"].applicator.apply(partialParams));
    }
    invokePutRecords(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putRecords(this.ops["PutRecords"].applicator.apply(partialParams));
    }
    invokeRegisterStreamConsumer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerStreamConsumer(this.ops["RegisterStreamConsumer"].applicator.apply(partialParams));
    }
    invokeRemoveTagsFromStream(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeTagsFromStream(this.ops["RemoveTagsFromStream"].applicator.apply(partialParams));
    }
    invokeSplitShard(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.splitShard(this.ops["SplitShard"].applicator.apply(partialParams));
    }
    invokeStartStreamEncryption(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startStreamEncryption(this.ops["StartStreamEncryption"].applicator.apply(partialParams));
    }
    invokeStopStreamEncryption(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopStreamEncryption(this.ops["StopStreamEncryption"].applicator.apply(partialParams));
    }
    invokeUpdateShardCount(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateShardCount(this.ops["UpdateShardCount"].applicator.apply(partialParams));
    }
    invokeUpdateStreamMode(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateStreamMode(this.ops["UpdateStreamMode"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
