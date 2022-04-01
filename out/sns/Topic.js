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
const schema = require("../apis/sns-2010-03-31.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.sns.Topic {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.SNS();
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
    invokeConfirmSubscription(partialParams) {
        this.boot();
        return this.client.confirmSubscription(this.ops["ConfirmSubscription"].apply(partialParams));
    }
    invokeCreatePlatformApplication(partialParams) {
        this.boot();
        return this.client.createPlatformApplication(this.ops["CreatePlatformApplication"].apply(partialParams));
    }
    invokeCreateTopic(partialParams) {
        this.boot();
        return this.client.createTopic(this.ops["CreateTopic"].apply(partialParams));
    }
    invokeGetTopicAttributes(partialParams) {
        this.boot();
        return this.client.getTopicAttributes(this.ops["GetTopicAttributes"].apply(partialParams));
    }
    invokeListSubscriptionsByTopic(partialParams) {
        this.boot();
        return this.client.listSubscriptionsByTopic(this.ops["ListSubscriptionsByTopic"].apply(partialParams));
    }
    invokePublishBatch(partialParams) {
        this.boot();
        return this.client.publishBatch(this.ops["PublishBatch"].apply(partialParams));
    }
    invokeSubscribe(partialParams) {
        this.boot();
        return this.client.subscribe(this.ops["Subscribe"].apply(partialParams));
    }
}
exports.default = default_1;
