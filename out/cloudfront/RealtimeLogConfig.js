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
const schema = require("../apis/cloudfront-2020-05-31.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.cloudfront.RealtimeLogConfig {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.CloudFront();
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
    invokeAssociateAlias(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateAlias(this.ops["AssociateAlias"].applicator.apply(partialParams));
    }
    invokeCreateCachePolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCachePolicy(this.ops["CreateCachePolicy"].applicator.apply(partialParams));
    }
    invokeCreateCloudFrontOriginAccessIdentity(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCloudFrontOriginAccessIdentity(this.ops["CreateCloudFrontOriginAccessIdentity"].applicator.apply(partialParams));
    }
    invokeCreateDistribution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDistribution(this.ops["CreateDistribution"].applicator.apply(partialParams));
    }
    invokeCreateDistributionWithTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDistributionWithTags(this.ops["CreateDistributionWithTags"].applicator.apply(partialParams));
    }
    invokeCreateFieldLevelEncryptionConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFieldLevelEncryptionConfig(this.ops["CreateFieldLevelEncryptionConfig"].applicator.apply(partialParams));
    }
    invokeCreateFieldLevelEncryptionProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFieldLevelEncryptionProfile(this.ops["CreateFieldLevelEncryptionProfile"].applicator.apply(partialParams));
    }
    invokeCreateFunction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFunction(this.ops["CreateFunction"].applicator.apply(partialParams));
    }
    invokeCreateInvalidation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createInvalidation(this.ops["CreateInvalidation"].applicator.apply(partialParams));
    }
    invokeCreateKeyGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createKeyGroup(this.ops["CreateKeyGroup"].applicator.apply(partialParams));
    }
    invokeCreateMonitoringSubscription(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMonitoringSubscription(this.ops["CreateMonitoringSubscription"].applicator.apply(partialParams));
    }
    invokeCreateOriginRequestPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createOriginRequestPolicy(this.ops["CreateOriginRequestPolicy"].applicator.apply(partialParams));
    }
    invokeCreatePublicKey(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPublicKey(this.ops["CreatePublicKey"].applicator.apply(partialParams));
    }
    invokeCreateRealtimeLogConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRealtimeLogConfig(this.ops["CreateRealtimeLogConfig"].applicator.apply(partialParams));
    }
    invokeCreateResponseHeadersPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createResponseHeadersPolicy(this.ops["CreateResponseHeadersPolicy"].applicator.apply(partialParams));
    }
    invokeCreateStreamingDistribution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createStreamingDistribution(this.ops["CreateStreamingDistribution"].applicator.apply(partialParams));
    }
    invokeCreateStreamingDistributionWithTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createStreamingDistributionWithTags(this.ops["CreateStreamingDistributionWithTags"].applicator.apply(partialParams));
    }
    invokeDeleteCachePolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCachePolicy(this.ops["DeleteCachePolicy"].applicator.apply(partialParams));
    }
    invokeDeleteCloudFrontOriginAccessIdentity(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCloudFrontOriginAccessIdentity(this.ops["DeleteCloudFrontOriginAccessIdentity"].applicator.apply(partialParams));
    }
    invokeDeleteDistribution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDistribution(this.ops["DeleteDistribution"].applicator.apply(partialParams));
    }
    invokeDeleteFieldLevelEncryptionConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFieldLevelEncryptionConfig(this.ops["DeleteFieldLevelEncryptionConfig"].applicator.apply(partialParams));
    }
    invokeDeleteFieldLevelEncryptionProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFieldLevelEncryptionProfile(this.ops["DeleteFieldLevelEncryptionProfile"].applicator.apply(partialParams));
    }
    invokeDeleteFunction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFunction(this.ops["DeleteFunction"].applicator.apply(partialParams));
    }
    invokeDeleteKeyGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteKeyGroup(this.ops["DeleteKeyGroup"].applicator.apply(partialParams));
    }
    invokeDeleteMonitoringSubscription(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteMonitoringSubscription(this.ops["DeleteMonitoringSubscription"].applicator.apply(partialParams));
    }
    invokeDeleteOriginRequestPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteOriginRequestPolicy(this.ops["DeleteOriginRequestPolicy"].applicator.apply(partialParams));
    }
    invokeDeletePublicKey(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePublicKey(this.ops["DeletePublicKey"].applicator.apply(partialParams));
    }
    invokeDeleteResponseHeadersPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteResponseHeadersPolicy(this.ops["DeleteResponseHeadersPolicy"].applicator.apply(partialParams));
    }
    invokeDeleteStreamingDistribution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteStreamingDistribution(this.ops["DeleteStreamingDistribution"].applicator.apply(partialParams));
    }
    invokeDescribeFunction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFunction(this.ops["DescribeFunction"].applicator.apply(partialParams));
    }
    invokeGetCachePolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCachePolicy(this.ops["GetCachePolicy"].applicator.apply(partialParams));
    }
    invokeGetCachePolicyConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCachePolicyConfig(this.ops["GetCachePolicyConfig"].applicator.apply(partialParams));
    }
    invokeGetCloudFrontOriginAccessIdentity(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCloudFrontOriginAccessIdentity(this.ops["GetCloudFrontOriginAccessIdentity"].applicator.apply(partialParams));
    }
    invokeGetCloudFrontOriginAccessIdentityConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCloudFrontOriginAccessIdentityConfig(this.ops["GetCloudFrontOriginAccessIdentityConfig"].applicator.apply(partialParams));
    }
    invokeGetDistribution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDistribution(this.ops["GetDistribution"].applicator.apply(partialParams));
    }
    invokeGetDistributionConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDistributionConfig(this.ops["GetDistributionConfig"].applicator.apply(partialParams));
    }
    invokeGetFieldLevelEncryption(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFieldLevelEncryption(this.ops["GetFieldLevelEncryption"].applicator.apply(partialParams));
    }
    invokeGetFieldLevelEncryptionConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFieldLevelEncryptionConfig(this.ops["GetFieldLevelEncryptionConfig"].applicator.apply(partialParams));
    }
    invokeGetFieldLevelEncryptionProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFieldLevelEncryptionProfile(this.ops["GetFieldLevelEncryptionProfile"].applicator.apply(partialParams));
    }
    invokeGetFieldLevelEncryptionProfileConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFieldLevelEncryptionProfileConfig(this.ops["GetFieldLevelEncryptionProfileConfig"].applicator.apply(partialParams));
    }
    invokeGetFunction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFunction(this.ops["GetFunction"].applicator.apply(partialParams));
    }
    invokeGetInvalidation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInvalidation(this.ops["GetInvalidation"].applicator.apply(partialParams));
    }
    invokeGetKeyGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getKeyGroup(this.ops["GetKeyGroup"].applicator.apply(partialParams));
    }
    invokeGetKeyGroupConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getKeyGroupConfig(this.ops["GetKeyGroupConfig"].applicator.apply(partialParams));
    }
    invokeGetMonitoringSubscription(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMonitoringSubscription(this.ops["GetMonitoringSubscription"].applicator.apply(partialParams));
    }
    invokeGetOriginRequestPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getOriginRequestPolicy(this.ops["GetOriginRequestPolicy"].applicator.apply(partialParams));
    }
    invokeGetOriginRequestPolicyConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getOriginRequestPolicyConfig(this.ops["GetOriginRequestPolicyConfig"].applicator.apply(partialParams));
    }
    invokeGetPublicKey(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPublicKey(this.ops["GetPublicKey"].applicator.apply(partialParams));
    }
    invokeGetPublicKeyConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPublicKeyConfig(this.ops["GetPublicKeyConfig"].applicator.apply(partialParams));
    }
    invokeGetResponseHeadersPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getResponseHeadersPolicy(this.ops["GetResponseHeadersPolicy"].applicator.apply(partialParams));
    }
    invokeGetResponseHeadersPolicyConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getResponseHeadersPolicyConfig(this.ops["GetResponseHeadersPolicyConfig"].applicator.apply(partialParams));
    }
    invokeGetStreamingDistribution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getStreamingDistribution(this.ops["GetStreamingDistribution"].applicator.apply(partialParams));
    }
    invokeGetStreamingDistributionConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getStreamingDistributionConfig(this.ops["GetStreamingDistributionConfig"].applicator.apply(partialParams));
    }
    invokeListConflictingAliases(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listConflictingAliases(this.ops["ListConflictingAliases"].applicator.apply(partialParams));
    }
    invokeListDistributionsByCachePolicyId(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDistributionsByCachePolicyId(this.ops["ListDistributionsByCachePolicyId"].applicator.apply(partialParams));
    }
    invokeListDistributionsByKeyGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDistributionsByKeyGroup(this.ops["ListDistributionsByKeyGroup"].applicator.apply(partialParams));
    }
    invokeListDistributionsByOriginRequestPolicyId(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDistributionsByOriginRequestPolicyId(this.ops["ListDistributionsByOriginRequestPolicyId"].applicator.apply(partialParams));
    }
    invokeListDistributionsByResponseHeadersPolicyId(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDistributionsByResponseHeadersPolicyId(this.ops["ListDistributionsByResponseHeadersPolicyId"].applicator.apply(partialParams));
    }
    invokeListDistributionsByWebACLId(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDistributionsByWebACLId(this.ops["ListDistributionsByWebACLId"].applicator.apply(partialParams));
    }
    invokeListInvalidations(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listInvalidations(this.ops["ListInvalidations"].applicator.apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].applicator.apply(partialParams));
    }
    invokePublishFunction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.publishFunction(this.ops["PublishFunction"].applicator.apply(partialParams));
    }
    invokeTagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].applicator.apply(partialParams));
    }
    invokeTestFunction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.testFunction(this.ops["TestFunction"].applicator.apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].applicator.apply(partialParams));
    }
    invokeUpdateCachePolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCachePolicy(this.ops["UpdateCachePolicy"].applicator.apply(partialParams));
    }
    invokeUpdateCloudFrontOriginAccessIdentity(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCloudFrontOriginAccessIdentity(this.ops["UpdateCloudFrontOriginAccessIdentity"].applicator.apply(partialParams));
    }
    invokeUpdateDistribution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDistribution(this.ops["UpdateDistribution"].applicator.apply(partialParams));
    }
    invokeUpdateFieldLevelEncryptionConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFieldLevelEncryptionConfig(this.ops["UpdateFieldLevelEncryptionConfig"].applicator.apply(partialParams));
    }
    invokeUpdateFieldLevelEncryptionProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFieldLevelEncryptionProfile(this.ops["UpdateFieldLevelEncryptionProfile"].applicator.apply(partialParams));
    }
    invokeUpdateFunction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFunction(this.ops["UpdateFunction"].applicator.apply(partialParams));
    }
    invokeUpdateKeyGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateKeyGroup(this.ops["UpdateKeyGroup"].applicator.apply(partialParams));
    }
    invokeUpdateOriginRequestPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateOriginRequestPolicy(this.ops["UpdateOriginRequestPolicy"].applicator.apply(partialParams));
    }
    invokeUpdatePublicKey(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePublicKey(this.ops["UpdatePublicKey"].applicator.apply(partialParams));
    }
    invokeUpdateResponseHeadersPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateResponseHeadersPolicy(this.ops["UpdateResponseHeadersPolicy"].applicator.apply(partialParams));
    }
    invokeUpdateStreamingDistribution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateStreamingDistribution(this.ops["UpdateStreamingDistribution"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
