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
class default_1 extends aws.cloudfront.MonitoringSubscription {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.CloudFront();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/cloudfront-2020-05-31.normal.json"), this.client);
    }
    invokeAssociateAlias(partialParams) {
        return this.client.associateAlias(this.ops["AssociateAlias"].apply(partialParams));
    }
    invokeCreateCachePolicy(partialParams) {
        return this.client.createCachePolicy(this.ops["CreateCachePolicy"].apply(partialParams));
    }
    invokeCreateCloudFrontOriginAccessIdentity(partialParams) {
        return this.client.createCloudFrontOriginAccessIdentity(this.ops["CreateCloudFrontOriginAccessIdentity"].apply(partialParams));
    }
    invokeCreateDistribution(partialParams) {
        return this.client.createDistribution(this.ops["CreateDistribution"].apply(partialParams));
    }
    invokeCreateDistributionWithTags(partialParams) {
        return this.client.createDistributionWithTags(this.ops["CreateDistributionWithTags"].apply(partialParams));
    }
    invokeCreateFieldLevelEncryptionConfig(partialParams) {
        return this.client.createFieldLevelEncryptionConfig(this.ops["CreateFieldLevelEncryptionConfig"].apply(partialParams));
    }
    invokeCreateFieldLevelEncryptionProfile(partialParams) {
        return this.client.createFieldLevelEncryptionProfile(this.ops["CreateFieldLevelEncryptionProfile"].apply(partialParams));
    }
    invokeCreateFunction(partialParams) {
        return this.client.createFunction(this.ops["CreateFunction"].apply(partialParams));
    }
    invokeCreateInvalidation(partialParams) {
        return this.client.createInvalidation(this.ops["CreateInvalidation"].apply(partialParams));
    }
    invokeCreateKeyGroup(partialParams) {
        return this.client.createKeyGroup(this.ops["CreateKeyGroup"].apply(partialParams));
    }
    invokeCreateMonitoringSubscription(partialParams) {
        return this.client.createMonitoringSubscription(this.ops["CreateMonitoringSubscription"].apply(partialParams));
    }
    invokeCreateOriginRequestPolicy(partialParams) {
        return this.client.createOriginRequestPolicy(this.ops["CreateOriginRequestPolicy"].apply(partialParams));
    }
    invokeCreatePublicKey(partialParams) {
        return this.client.createPublicKey(this.ops["CreatePublicKey"].apply(partialParams));
    }
    invokeCreateRealtimeLogConfig(partialParams) {
        return this.client.createRealtimeLogConfig(this.ops["CreateRealtimeLogConfig"].apply(partialParams));
    }
    invokeCreateResponseHeadersPolicy(partialParams) {
        return this.client.createResponseHeadersPolicy(this.ops["CreateResponseHeadersPolicy"].apply(partialParams));
    }
    invokeCreateStreamingDistribution(partialParams) {
        return this.client.createStreamingDistribution(this.ops["CreateStreamingDistribution"].apply(partialParams));
    }
    invokeCreateStreamingDistributionWithTags(partialParams) {
        return this.client.createStreamingDistributionWithTags(this.ops["CreateStreamingDistributionWithTags"].apply(partialParams));
    }
    invokeDeleteCachePolicy(partialParams) {
        return this.client.deleteCachePolicy(this.ops["DeleteCachePolicy"].apply(partialParams));
    }
    invokeDeleteCloudFrontOriginAccessIdentity(partialParams) {
        return this.client.deleteCloudFrontOriginAccessIdentity(this.ops["DeleteCloudFrontOriginAccessIdentity"].apply(partialParams));
    }
    invokeDeleteDistribution(partialParams) {
        return this.client.deleteDistribution(this.ops["DeleteDistribution"].apply(partialParams));
    }
    invokeDeleteFieldLevelEncryptionConfig(partialParams) {
        return this.client.deleteFieldLevelEncryptionConfig(this.ops["DeleteFieldLevelEncryptionConfig"].apply(partialParams));
    }
    invokeDeleteFieldLevelEncryptionProfile(partialParams) {
        return this.client.deleteFieldLevelEncryptionProfile(this.ops["DeleteFieldLevelEncryptionProfile"].apply(partialParams));
    }
    invokeDeleteFunction(partialParams) {
        return this.client.deleteFunction(this.ops["DeleteFunction"].apply(partialParams));
    }
    invokeDeleteKeyGroup(partialParams) {
        return this.client.deleteKeyGroup(this.ops["DeleteKeyGroup"].apply(partialParams));
    }
    invokeDeleteMonitoringSubscription(partialParams) {
        return this.client.deleteMonitoringSubscription(this.ops["DeleteMonitoringSubscription"].apply(partialParams));
    }
    invokeDeleteOriginRequestPolicy(partialParams) {
        return this.client.deleteOriginRequestPolicy(this.ops["DeleteOriginRequestPolicy"].apply(partialParams));
    }
    invokeDeletePublicKey(partialParams) {
        return this.client.deletePublicKey(this.ops["DeletePublicKey"].apply(partialParams));
    }
    invokeDeleteResponseHeadersPolicy(partialParams) {
        return this.client.deleteResponseHeadersPolicy(this.ops["DeleteResponseHeadersPolicy"].apply(partialParams));
    }
    invokeDeleteStreamingDistribution(partialParams) {
        return this.client.deleteStreamingDistribution(this.ops["DeleteStreamingDistribution"].apply(partialParams));
    }
    invokeDescribeFunction(partialParams) {
        return this.client.describeFunction(this.ops["DescribeFunction"].apply(partialParams));
    }
    invokeGetCachePolicy(partialParams) {
        return this.client.getCachePolicy(this.ops["GetCachePolicy"].apply(partialParams));
    }
    invokeGetCachePolicyConfig(partialParams) {
        return this.client.getCachePolicyConfig(this.ops["GetCachePolicyConfig"].apply(partialParams));
    }
    invokeGetCloudFrontOriginAccessIdentity(partialParams) {
        return this.client.getCloudFrontOriginAccessIdentity(this.ops["GetCloudFrontOriginAccessIdentity"].apply(partialParams));
    }
    invokeGetCloudFrontOriginAccessIdentityConfig(partialParams) {
        return this.client.getCloudFrontOriginAccessIdentityConfig(this.ops["GetCloudFrontOriginAccessIdentityConfig"].apply(partialParams));
    }
    invokeGetDistribution(partialParams) {
        return this.client.getDistribution(this.ops["GetDistribution"].apply(partialParams));
    }
    invokeGetDistributionConfig(partialParams) {
        return this.client.getDistributionConfig(this.ops["GetDistributionConfig"].apply(partialParams));
    }
    invokeGetFieldLevelEncryption(partialParams) {
        return this.client.getFieldLevelEncryption(this.ops["GetFieldLevelEncryption"].apply(partialParams));
    }
    invokeGetFieldLevelEncryptionConfig(partialParams) {
        return this.client.getFieldLevelEncryptionConfig(this.ops["GetFieldLevelEncryptionConfig"].apply(partialParams));
    }
    invokeGetFieldLevelEncryptionProfile(partialParams) {
        return this.client.getFieldLevelEncryptionProfile(this.ops["GetFieldLevelEncryptionProfile"].apply(partialParams));
    }
    invokeGetFieldLevelEncryptionProfileConfig(partialParams) {
        return this.client.getFieldLevelEncryptionProfileConfig(this.ops["GetFieldLevelEncryptionProfileConfig"].apply(partialParams));
    }
    invokeGetFunction(partialParams) {
        return this.client.getFunction(this.ops["GetFunction"].apply(partialParams));
    }
    invokeGetInvalidation(partialParams) {
        return this.client.getInvalidation(this.ops["GetInvalidation"].apply(partialParams));
    }
    invokeGetKeyGroup(partialParams) {
        return this.client.getKeyGroup(this.ops["GetKeyGroup"].apply(partialParams));
    }
    invokeGetKeyGroupConfig(partialParams) {
        return this.client.getKeyGroupConfig(this.ops["GetKeyGroupConfig"].apply(partialParams));
    }
    invokeGetMonitoringSubscription(partialParams) {
        return this.client.getMonitoringSubscription(this.ops["GetMonitoringSubscription"].apply(partialParams));
    }
    invokeGetOriginRequestPolicy(partialParams) {
        return this.client.getOriginRequestPolicy(this.ops["GetOriginRequestPolicy"].apply(partialParams));
    }
    invokeGetOriginRequestPolicyConfig(partialParams) {
        return this.client.getOriginRequestPolicyConfig(this.ops["GetOriginRequestPolicyConfig"].apply(partialParams));
    }
    invokeGetPublicKey(partialParams) {
        return this.client.getPublicKey(this.ops["GetPublicKey"].apply(partialParams));
    }
    invokeGetPublicKeyConfig(partialParams) {
        return this.client.getPublicKeyConfig(this.ops["GetPublicKeyConfig"].apply(partialParams));
    }
    invokeGetResponseHeadersPolicy(partialParams) {
        return this.client.getResponseHeadersPolicy(this.ops["GetResponseHeadersPolicy"].apply(partialParams));
    }
    invokeGetResponseHeadersPolicyConfig(partialParams) {
        return this.client.getResponseHeadersPolicyConfig(this.ops["GetResponseHeadersPolicyConfig"].apply(partialParams));
    }
    invokeGetStreamingDistribution(partialParams) {
        return this.client.getStreamingDistribution(this.ops["GetStreamingDistribution"].apply(partialParams));
    }
    invokeGetStreamingDistributionConfig(partialParams) {
        return this.client.getStreamingDistributionConfig(this.ops["GetStreamingDistributionConfig"].apply(partialParams));
    }
    invokeListConflictingAliases(partialParams) {
        return this.client.listConflictingAliases(this.ops["ListConflictingAliases"].apply(partialParams));
    }
    invokeListDistributionsByCachePolicyId(partialParams) {
        return this.client.listDistributionsByCachePolicyId(this.ops["ListDistributionsByCachePolicyId"].apply(partialParams));
    }
    invokeListDistributionsByKeyGroup(partialParams) {
        return this.client.listDistributionsByKeyGroup(this.ops["ListDistributionsByKeyGroup"].apply(partialParams));
    }
    invokeListDistributionsByOriginRequestPolicyId(partialParams) {
        return this.client.listDistributionsByOriginRequestPolicyId(this.ops["ListDistributionsByOriginRequestPolicyId"].apply(partialParams));
    }
    invokeListDistributionsByResponseHeadersPolicyId(partialParams) {
        return this.client.listDistributionsByResponseHeadersPolicyId(this.ops["ListDistributionsByResponseHeadersPolicyId"].apply(partialParams));
    }
    invokeListDistributionsByWebACLId(partialParams) {
        return this.client.listDistributionsByWebACLId(this.ops["ListDistributionsByWebACLId"].apply(partialParams));
    }
    invokeListInvalidations(partialParams) {
        return this.client.listInvalidations(this.ops["ListInvalidations"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokePublishFunction(partialParams) {
        return this.client.publishFunction(this.ops["PublishFunction"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeTestFunction(partialParams) {
        return this.client.testFunction(this.ops["TestFunction"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateCachePolicy(partialParams) {
        return this.client.updateCachePolicy(this.ops["UpdateCachePolicy"].apply(partialParams));
    }
    invokeUpdateCloudFrontOriginAccessIdentity(partialParams) {
        return this.client.updateCloudFrontOriginAccessIdentity(this.ops["UpdateCloudFrontOriginAccessIdentity"].apply(partialParams));
    }
    invokeUpdateDistribution(partialParams) {
        return this.client.updateDistribution(this.ops["UpdateDistribution"].apply(partialParams));
    }
    invokeUpdateFieldLevelEncryptionConfig(partialParams) {
        return this.client.updateFieldLevelEncryptionConfig(this.ops["UpdateFieldLevelEncryptionConfig"].apply(partialParams));
    }
    invokeUpdateFieldLevelEncryptionProfile(partialParams) {
        return this.client.updateFieldLevelEncryptionProfile(this.ops["UpdateFieldLevelEncryptionProfile"].apply(partialParams));
    }
    invokeUpdateFunction(partialParams) {
        return this.client.updateFunction(this.ops["UpdateFunction"].apply(partialParams));
    }
    invokeUpdateKeyGroup(partialParams) {
        return this.client.updateKeyGroup(this.ops["UpdateKeyGroup"].apply(partialParams));
    }
    invokeUpdateOriginRequestPolicy(partialParams) {
        return this.client.updateOriginRequestPolicy(this.ops["UpdateOriginRequestPolicy"].apply(partialParams));
    }
    invokeUpdatePublicKey(partialParams) {
        return this.client.updatePublicKey(this.ops["UpdatePublicKey"].apply(partialParams));
    }
    invokeUpdateResponseHeadersPolicy(partialParams) {
        return this.client.updateResponseHeadersPolicy(this.ops["UpdateResponseHeadersPolicy"].apply(partialParams));
    }
    invokeUpdateStreamingDistribution(partialParams) {
        return this.client.updateStreamingDistribution(this.ops["UpdateStreamingDistribution"].apply(partialParams));
    }
}
exports.default = default_1;
