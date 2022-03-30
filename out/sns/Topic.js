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
class default_1 extends aws.sns.Topic {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.SNS();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/sns-2010-03-31.normal.json"), this.client);
    }
    invokeAddPermission(partialParams) {
        return this.client.addPermission(this.ops["AddPermission"].apply(partialParams));
    }
    invokeCheckIfPhoneNumberIsOptedOut(partialParams) {
        return this.client.checkIfPhoneNumberIsOptedOut(this.ops["CheckIfPhoneNumberIsOptedOut"].apply(partialParams));
    }
    invokeConfirmSubscription(partialParams) {
        return this.client.confirmSubscription(this.ops["ConfirmSubscription"].apply(partialParams));
    }
    invokeCreatePlatformApplication(partialParams) {
        return this.client.createPlatformApplication(this.ops["CreatePlatformApplication"].apply(partialParams));
    }
    invokeCreatePlatformEndpoint(partialParams) {
        return this.client.createPlatformEndpoint(this.ops["CreatePlatformEndpoint"].apply(partialParams));
    }
    invokeCreateSMSSandboxPhoneNumber(partialParams) {
        return this.client.createSMSSandboxPhoneNumber(this.ops["CreateSMSSandboxPhoneNumber"].apply(partialParams));
    }
    invokeCreateTopic(partialParams) {
        return this.client.createTopic(this.ops["CreateTopic"].apply(partialParams));
    }
    invokeDeleteEndpoint(partialParams) {
        return this.client.deleteEndpoint(this.ops["DeleteEndpoint"].apply(partialParams));
    }
    invokeDeletePlatformApplication(partialParams) {
        return this.client.deletePlatformApplication(this.ops["DeletePlatformApplication"].apply(partialParams));
    }
    invokeDeleteSMSSandboxPhoneNumber(partialParams) {
        return this.client.deleteSMSSandboxPhoneNumber(this.ops["DeleteSMSSandboxPhoneNumber"].apply(partialParams));
    }
    invokeDeleteTopic(partialParams) {
        return this.client.deleteTopic(this.ops["DeleteTopic"].apply(partialParams));
    }
    invokeGetEndpointAttributes(partialParams) {
        return this.client.getEndpointAttributes(this.ops["GetEndpointAttributes"].apply(partialParams));
    }
    invokeGetPlatformApplicationAttributes(partialParams) {
        return this.client.getPlatformApplicationAttributes(this.ops["GetPlatformApplicationAttributes"].apply(partialParams));
    }
    invokeGetSubscriptionAttributes(partialParams) {
        return this.client.getSubscriptionAttributes(this.ops["GetSubscriptionAttributes"].apply(partialParams));
    }
    invokeGetTopicAttributes(partialParams) {
        return this.client.getTopicAttributes(this.ops["GetTopicAttributes"].apply(partialParams));
    }
    invokeListEndpointsByPlatformApplication(partialParams) {
        return this.client.listEndpointsByPlatformApplication(this.ops["ListEndpointsByPlatformApplication"].apply(partialParams));
    }
    invokeListSubscriptionsByTopic(partialParams) {
        return this.client.listSubscriptionsByTopic(this.ops["ListSubscriptionsByTopic"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeOptInPhoneNumber(partialParams) {
        return this.client.optInPhoneNumber(this.ops["OptInPhoneNumber"].apply(partialParams));
    }
    invokePublish(partialParams) {
        return this.client.publish(this.ops["Publish"].apply(partialParams));
    }
    invokePublishBatch(partialParams) {
        return this.client.publishBatch(this.ops["PublishBatch"].apply(partialParams));
    }
    invokeRemovePermission(partialParams) {
        return this.client.removePermission(this.ops["RemovePermission"].apply(partialParams));
    }
    invokeSetEndpointAttributes(partialParams) {
        return this.client.setEndpointAttributes(this.ops["SetEndpointAttributes"].apply(partialParams));
    }
    invokeSetPlatformApplicationAttributes(partialParams) {
        return this.client.setPlatformApplicationAttributes(this.ops["SetPlatformApplicationAttributes"].apply(partialParams));
    }
    invokeSetSMSAttributes(partialParams) {
        return this.client.setSMSAttributes(this.ops["SetSMSAttributes"].apply(partialParams));
    }
    invokeSetSubscriptionAttributes(partialParams) {
        return this.client.setSubscriptionAttributes(this.ops["SetSubscriptionAttributes"].apply(partialParams));
    }
    invokeSetTopicAttributes(partialParams) {
        return this.client.setTopicAttributes(this.ops["SetTopicAttributes"].apply(partialParams));
    }
    invokeSubscribe(partialParams) {
        return this.client.subscribe(this.ops["Subscribe"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUnsubscribe(partialParams) {
        return this.client.unsubscribe(this.ops["Unsubscribe"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeVerifySMSSandboxPhoneNumber(partialParams) {
        return this.client.verifySMSSandboxPhoneNumber(this.ops["VerifySMSSandboxPhoneNumber"].apply(partialParams));
    }
}
exports.default = default_1;
