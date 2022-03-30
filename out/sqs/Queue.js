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
class default_1 extends aws.sqs.Queue {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.SQS();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/sqs-2012-11-05.normal.json"), this.client);
    }
    invokeAddPermission(partialParams) {
        return this.client.addPermission(this.ops["AddPermission"].apply(partialParams));
    }
    invokeChangeMessageVisibility(partialParams) {
        return this.client.changeMessageVisibility(this.ops["ChangeMessageVisibility"].apply(partialParams));
    }
    invokeChangeMessageVisibilityBatch(partialParams) {
        return this.client.changeMessageVisibilityBatch(this.ops["ChangeMessageVisibilityBatch"].apply(partialParams));
    }
    invokeCreateQueue(partialParams) {
        return this.client.createQueue(this.ops["CreateQueue"].apply(partialParams));
    }
    invokeDeleteMessage(partialParams) {
        return this.client.deleteMessage(this.ops["DeleteMessage"].apply(partialParams));
    }
    invokeDeleteMessageBatch(partialParams) {
        return this.client.deleteMessageBatch(this.ops["DeleteMessageBatch"].apply(partialParams));
    }
    invokeDeleteQueue(partialParams) {
        return this.client.deleteQueue(this.ops["DeleteQueue"].apply(partialParams));
    }
    invokeGetQueueAttributes(partialParams) {
        return this.client.getQueueAttributes(this.ops["GetQueueAttributes"].apply(partialParams));
    }
    invokeGetQueueUrl(partialParams) {
        return this.client.getQueueUrl(this.ops["GetQueueUrl"].apply(partialParams));
    }
    invokeListDeadLetterSourceQueues(partialParams) {
        return this.client.listDeadLetterSourceQueues(this.ops["ListDeadLetterSourceQueues"].apply(partialParams));
    }
    invokeListQueueTags(partialParams) {
        return this.client.listQueueTags(this.ops["ListQueueTags"].apply(partialParams));
    }
    invokePurgeQueue(partialParams) {
        return this.client.purgeQueue(this.ops["PurgeQueue"].apply(partialParams));
    }
    invokeReceiveMessage(partialParams) {
        return this.client.receiveMessage(this.ops["ReceiveMessage"].apply(partialParams));
    }
    invokeRemovePermission(partialParams) {
        return this.client.removePermission(this.ops["RemovePermission"].apply(partialParams));
    }
    invokeSendMessage(partialParams) {
        return this.client.sendMessage(this.ops["SendMessage"].apply(partialParams));
    }
    invokeSendMessageBatch(partialParams) {
        return this.client.sendMessageBatch(this.ops["SendMessageBatch"].apply(partialParams));
    }
    invokeSetQueueAttributes(partialParams) {
        return this.client.setQueueAttributes(this.ops["SetQueueAttributes"].apply(partialParams));
    }
    invokeTagQueue(partialParams) {
        return this.client.tagQueue(this.ops["TagQueue"].apply(partialParams));
    }
    invokeUntagQueue(partialParams) {
        return this.client.untagQueue(this.ops["UntagQueue"].apply(partialParams));
    }
}
exports.default = default_1;
