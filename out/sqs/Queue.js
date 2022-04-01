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
const schema = require("../apis/sqs-2012-11-05.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.sqs.Queue {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.SQS();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
            if (this[(0, parse_1.upperCamelCase)(this.constructor.name) + (0, parse_1.upperCamelCase)(key)] === undefined) {
                this.capitalizedParams[this.constructor.name + (0, parse_1.upperCamelCase)(key)] = value;
            }
            console.log(this.capitalizedParams);
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
    invokeChangeMessageVisibilityBatch(partialParams) {
        this.boot();
        return this.client.changeMessageVisibilityBatch(this.ops["ChangeMessageVisibilityBatch"].apply(partialParams));
    }
    invokeCreateQueue(partialParams) {
        this.boot();
        return this.client.createQueue(this.ops["CreateQueue"].apply(partialParams));
    }
    invokeDeleteMessageBatch(partialParams) {
        this.boot();
        return this.client.deleteMessageBatch(this.ops["DeleteMessageBatch"].apply(partialParams));
    }
    invokeGetQueueAttributes(partialParams) {
        this.boot();
        return this.client.getQueueAttributes(this.ops["GetQueueAttributes"].apply(partialParams));
    }
    invokeGetQueueUrl(partialParams) {
        this.boot();
        return this.client.getQueueUrl(this.ops["GetQueueUrl"].apply(partialParams));
    }
    invokeListDeadLetterSourceQueues(partialParams) {
        this.boot();
        return this.client.listDeadLetterSourceQueues(this.ops["ListDeadLetterSourceQueues"].apply(partialParams));
    }
    invokeListQueueTags(partialParams) {
        this.boot();
        return this.client.listQueueTags(this.ops["ListQueueTags"].apply(partialParams));
    }
    invokeListQueues(partialParams) {
        this.boot();
        return this.client.listQueues(this.ops["ListQueues"].apply(partialParams));
    }
    invokeReceiveMessage(partialParams) {
        this.boot();
        return this.client.receiveMessage(this.ops["ReceiveMessage"].apply(partialParams));
    }
    invokeSendMessage(partialParams) {
        this.boot();
        return this.client.sendMessage(this.ops["SendMessage"].apply(partialParams));
    }
    invokeSendMessageBatch(partialParams) {
        this.boot();
        return this.client.sendMessageBatch(this.ops["SendMessageBatch"].apply(partialParams));
    }
}
exports.default = default_1;
