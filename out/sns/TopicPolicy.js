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
class default_1 extends aws.sns.TopicPolicy {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.SNS();
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
    invokeAddPermission(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addPermission(this.ops["AddPermission"].applicator.apply(partialParams));
    }
    invokeCheckIfPhoneNumberIsOptedOut(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.checkIfPhoneNumberIsOptedOut(this.ops["CheckIfPhoneNumberIsOptedOut"].applicator.apply(partialParams));
    }
    invokeConfirmSubscription(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.confirmSubscription(this.ops["ConfirmSubscription"].applicator.apply(partialParams));
    }
    invokeCreatePlatformApplication(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPlatformApplication(this.ops["CreatePlatformApplication"].applicator.apply(partialParams));
    }
    invokeCreatePlatformEndpoint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPlatformEndpoint(this.ops["CreatePlatformEndpoint"].applicator.apply(partialParams));
    }
    invokeCreateSMSSandboxPhoneNumber(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSMSSandboxPhoneNumber(this.ops["CreateSMSSandboxPhoneNumber"].applicator.apply(partialParams));
    }
    invokeCreateTopic(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTopic(this.ops["CreateTopic"].applicator.apply(partialParams));
    }
    invokeDeleteEndpoint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEndpoint(this.ops["DeleteEndpoint"].applicator.apply(partialParams));
    }
    invokeDeletePlatformApplication(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePlatformApplication(this.ops["DeletePlatformApplication"].applicator.apply(partialParams));
    }
    invokeDeleteSMSSandboxPhoneNumber(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSMSSandboxPhoneNumber(this.ops["DeleteSMSSandboxPhoneNumber"].applicator.apply(partialParams));
    }
    invokeDeleteTopic(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTopic(this.ops["DeleteTopic"].applicator.apply(partialParams));
    }
    invokeGetEndpointAttributes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getEndpointAttributes(this.ops["GetEndpointAttributes"].applicator.apply(partialParams));
    }
    invokeGetPlatformApplicationAttributes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPlatformApplicationAttributes(this.ops["GetPlatformApplicationAttributes"].applicator.apply(partialParams));
    }
    invokeGetSubscriptionAttributes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSubscriptionAttributes(this.ops["GetSubscriptionAttributes"].applicator.apply(partialParams));
    }
    invokeGetTopicAttributes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTopicAttributes(this.ops["GetTopicAttributes"].applicator.apply(partialParams));
    }
    invokeListEndpointsByPlatformApplication(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listEndpointsByPlatformApplication(this.ops["ListEndpointsByPlatformApplication"].applicator.apply(partialParams));
    }
    invokeListSubscriptionsByTopic(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listSubscriptionsByTopic(this.ops["ListSubscriptionsByTopic"].applicator.apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].applicator.apply(partialParams));
    }
    invokeOptInPhoneNumber(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.optInPhoneNumber(this.ops["OptInPhoneNumber"].applicator.apply(partialParams));
    }
    invokePublish(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.publish(this.ops["Publish"].applicator.apply(partialParams));
    }
    invokePublishBatch(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.publishBatch(this.ops["PublishBatch"].applicator.apply(partialParams));
    }
    invokeRemovePermission(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removePermission(this.ops["RemovePermission"].applicator.apply(partialParams));
    }
    invokeSetEndpointAttributes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setEndpointAttributes(this.ops["SetEndpointAttributes"].applicator.apply(partialParams));
    }
    invokeSetPlatformApplicationAttributes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setPlatformApplicationAttributes(this.ops["SetPlatformApplicationAttributes"].applicator.apply(partialParams));
    }
    invokeSetSMSAttributes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setSMSAttributes(this.ops["SetSMSAttributes"].applicator.apply(partialParams));
    }
    invokeSetSubscriptionAttributes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setSubscriptionAttributes(this.ops["SetSubscriptionAttributes"].applicator.apply(partialParams));
    }
    invokeSetTopicAttributes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setTopicAttributes(this.ops["SetTopicAttributes"].applicator.apply(partialParams));
    }
    invokeSubscribe(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.subscribe(this.ops["Subscribe"].applicator.apply(partialParams));
    }
    invokeTagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].applicator.apply(partialParams));
    }
    invokeUnsubscribe(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.unsubscribe(this.ops["Unsubscribe"].applicator.apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].applicator.apply(partialParams));
    }
    invokeVerifySMSSandboxPhoneNumber(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.verifySMSSandboxPhoneNumber(this.ops["VerifySMSSandboxPhoneNumber"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
