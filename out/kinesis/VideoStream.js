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
class default_1 extends aws.kinesis.VideoStream {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.Kinesis();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
            if (this[(0, parse_1.upperCamelCase)(this.constructor.name) + (0, parse_1.upperCamelCase)(key)] === undefined) {
                this.capitalizedParams[this.constructor.name + (0, parse_1.upperCamelCase)(key)] = value;
            }
        });
    }
    boot() {
        if (this.booted) {
            return;
        }
        Object.entries(this.capitalizedParams).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value.value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
        this.ops = (0, parse_1.getResourceOperations)(this.capitalizedParams, schema);
        this.booted = true;
    }
    invokeDescribeLimits(partialParams) {
        this.boot();
        return this.client.describeLimits(this.ops["DescribeLimits"].apply(partialParams));
    }
    invokeDescribeStream(partialParams) {
        this.boot();
        return this.client.describeStream(this.ops["DescribeStream"].apply(partialParams));
    }
    invokeDescribeStreamConsumer(partialParams) {
        this.boot();
        return this.client.describeStreamConsumer(this.ops["DescribeStreamConsumer"].apply(partialParams));
    }
    invokeDescribeStreamSummary(partialParams) {
        this.boot();
        return this.client.describeStreamSummary(this.ops["DescribeStreamSummary"].apply(partialParams));
    }
    invokeDisableEnhancedMonitoring(partialParams) {
        this.boot();
        return this.client.disableEnhancedMonitoring(this.ops["DisableEnhancedMonitoring"].apply(partialParams));
    }
    invokeEnableEnhancedMonitoring(partialParams) {
        this.boot();
        return this.client.enableEnhancedMonitoring(this.ops["EnableEnhancedMonitoring"].apply(partialParams));
    }
    invokeGetRecords(partialParams) {
        this.boot();
        return this.client.getRecords(this.ops["GetRecords"].apply(partialParams));
    }
    invokeGetShardIterator(partialParams) {
        this.boot();
        return this.client.getShardIterator(this.ops["GetShardIterator"].apply(partialParams));
    }
    invokeListShards(partialParams) {
        this.boot();
        return this.client.listShards(this.ops["ListShards"].apply(partialParams));
    }
    invokeListStreamConsumers(partialParams) {
        this.boot();
        return this.client.listStreamConsumers(this.ops["ListStreamConsumers"].apply(partialParams));
    }
    invokeListStreams(partialParams) {
        this.boot();
        return this.client.listStreams(this.ops["ListStreams"].apply(partialParams));
    }
    invokeListTagsForStream(partialParams) {
        this.boot();
        return this.client.listTagsForStream(this.ops["ListTagsForStream"].apply(partialParams));
    }
    invokePutRecord(partialParams) {
        this.boot();
        return this.client.putRecord(this.ops["PutRecord"].apply(partialParams));
    }
    invokePutRecords(partialParams) {
        this.boot();
        return this.client.putRecords(this.ops["PutRecords"].apply(partialParams));
    }
    invokeRegisterStreamConsumer(partialParams) {
        this.boot();
        return this.client.registerStreamConsumer(this.ops["RegisterStreamConsumer"].apply(partialParams));
    }
    invokeUpdateShardCount(partialParams) {
        this.boot();
        return this.client.updateShardCount(this.ops["UpdateShardCount"].apply(partialParams));
    }
}
exports.default = default_1;
