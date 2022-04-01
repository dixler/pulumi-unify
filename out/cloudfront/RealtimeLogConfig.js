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
        this.booted = false;
        this.client = new awssdk.CloudFront();
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
    invokeCreateCachePolicy2020_05_31(partialParams) {
        this.boot();
        return this.client.createCachePolicy2020_05_31(this.ops["CreateCachePolicy2020_05_31"].apply(partialParams));
    }
    invokeCreateCloudFrontOriginAccessIdentity2020_05_31(partialParams) {
        this.boot();
        return this.client.createCloudFrontOriginAccessIdentity2020_05_31(this.ops["CreateCloudFrontOriginAccessIdentity2020_05_31"].apply(partialParams));
    }
    invokeCreateDistribution2020_05_31(partialParams) {
        this.boot();
        return this.client.createDistribution2020_05_31(this.ops["CreateDistribution2020_05_31"].apply(partialParams));
    }
    invokeCreateDistributionWithTags2020_05_31(partialParams) {
        this.boot();
        return this.client.createDistributionWithTags2020_05_31(this.ops["CreateDistributionWithTags2020_05_31"].apply(partialParams));
    }
    invokeCreateFieldLevelEncryptionConfig2020_05_31(partialParams) {
        this.boot();
        return this.client.createFieldLevelEncryptionConfig2020_05_31(this.ops["CreateFieldLevelEncryptionConfig2020_05_31"].apply(partialParams));
    }
    invokeCreateFieldLevelEncryptionProfile2020_05_31(partialParams) {
        this.boot();
        return this.client.createFieldLevelEncryptionProfile2020_05_31(this.ops["CreateFieldLevelEncryptionProfile2020_05_31"].apply(partialParams));
    }
    invokeCreateFunction2020_05_31(partialParams) {
        this.boot();
        return this.client.createFunction2020_05_31(this.ops["CreateFunction2020_05_31"].apply(partialParams));
    }
    invokeCreateInvalidation2020_05_31(partialParams) {
        this.boot();
        return this.client.createInvalidation2020_05_31(this.ops["CreateInvalidation2020_05_31"].apply(partialParams));
    }
    invokeCreateKeyGroup2020_05_31(partialParams) {
        this.boot();
        return this.client.createKeyGroup2020_05_31(this.ops["CreateKeyGroup2020_05_31"].apply(partialParams));
    }
    invokeCreateMonitoringSubscription2020_05_31(partialParams) {
        this.boot();
        return this.client.createMonitoringSubscription2020_05_31(this.ops["CreateMonitoringSubscription2020_05_31"].apply(partialParams));
    }
    invokeCreateOriginRequestPolicy2020_05_31(partialParams) {
        this.boot();
        return this.client.createOriginRequestPolicy2020_05_31(this.ops["CreateOriginRequestPolicy2020_05_31"].apply(partialParams));
    }
    invokeCreatePublicKey2020_05_31(partialParams) {
        this.boot();
        return this.client.createPublicKey2020_05_31(this.ops["CreatePublicKey2020_05_31"].apply(partialParams));
    }
    invokeCreateRealtimeLogConfig2020_05_31(partialParams) {
        this.boot();
        return this.client.createRealtimeLogConfig2020_05_31(this.ops["CreateRealtimeLogConfig2020_05_31"].apply(partialParams));
    }
    invokeCreateResponseHeadersPolicy2020_05_31(partialParams) {
        this.boot();
        return this.client.createResponseHeadersPolicy2020_05_31(this.ops["CreateResponseHeadersPolicy2020_05_31"].apply(partialParams));
    }
    invokeCreateStreamingDistribution2020_05_31(partialParams) {
        this.boot();
        return this.client.createStreamingDistribution2020_05_31(this.ops["CreateStreamingDistribution2020_05_31"].apply(partialParams));
    }
    invokeCreateStreamingDistributionWithTags2020_05_31(partialParams) {
        this.boot();
        return this.client.createStreamingDistributionWithTags2020_05_31(this.ops["CreateStreamingDistributionWithTags2020_05_31"].apply(partialParams));
    }
    invokeDeleteMonitoringSubscription2020_05_31(partialParams) {
        this.boot();
        return this.client.deleteMonitoringSubscription2020_05_31(this.ops["DeleteMonitoringSubscription2020_05_31"].apply(partialParams));
    }
    invokeDescribeFunction2020_05_31(partialParams) {
        this.boot();
        return this.client.describeFunction2020_05_31(this.ops["DescribeFunction2020_05_31"].apply(partialParams));
    }
    invokeGetCachePolicy2020_05_31(partialParams) {
        this.boot();
        return this.client.getCachePolicy2020_05_31(this.ops["GetCachePolicy2020_05_31"].apply(partialParams));
    }
    invokeGetCachePolicyConfig2020_05_31(partialParams) {
        this.boot();
        return this.client.getCachePolicyConfig2020_05_31(this.ops["GetCachePolicyConfig2020_05_31"].apply(partialParams));
    }
    invokeGetCloudFrontOriginAccessIdentity2020_05_31(partialParams) {
        this.boot();
        return this.client.getCloudFrontOriginAccessIdentity2020_05_31(this.ops["GetCloudFrontOriginAccessIdentity2020_05_31"].apply(partialParams));
    }
    invokeGetCloudFrontOriginAccessIdentityConfig2020_05_31(partialParams) {
        this.boot();
        return this.client.getCloudFrontOriginAccessIdentityConfig2020_05_31(this.ops["GetCloudFrontOriginAccessIdentityConfig2020_05_31"].apply(partialParams));
    }
    invokeGetDistribution2020_05_31(partialParams) {
        this.boot();
        return this.client.getDistribution2020_05_31(this.ops["GetDistribution2020_05_31"].apply(partialParams));
    }
    invokeGetDistributionConfig2020_05_31(partialParams) {
        this.boot();
        return this.client.getDistributionConfig2020_05_31(this.ops["GetDistributionConfig2020_05_31"].apply(partialParams));
    }
    invokeGetFieldLevelEncryption2020_05_31(partialParams) {
        this.boot();
        return this.client.getFieldLevelEncryption2020_05_31(this.ops["GetFieldLevelEncryption2020_05_31"].apply(partialParams));
    }
    invokeGetFieldLevelEncryptionConfig2020_05_31(partialParams) {
        this.boot();
        return this.client.getFieldLevelEncryptionConfig2020_05_31(this.ops["GetFieldLevelEncryptionConfig2020_05_31"].apply(partialParams));
    }
    invokeGetFieldLevelEncryptionProfile2020_05_31(partialParams) {
        this.boot();
        return this.client.getFieldLevelEncryptionProfile2020_05_31(this.ops["GetFieldLevelEncryptionProfile2020_05_31"].apply(partialParams));
    }
    invokeGetFieldLevelEncryptionProfileConfig2020_05_31(partialParams) {
        this.boot();
        return this.client.getFieldLevelEncryptionProfileConfig2020_05_31(this.ops["GetFieldLevelEncryptionProfileConfig2020_05_31"].apply(partialParams));
    }
    invokeGetFunction2020_05_31(partialParams) {
        this.boot();
        return this.client.getFunction2020_05_31(this.ops["GetFunction2020_05_31"].apply(partialParams));
    }
    invokeGetInvalidation2020_05_31(partialParams) {
        this.boot();
        return this.client.getInvalidation2020_05_31(this.ops["GetInvalidation2020_05_31"].apply(partialParams));
    }
    invokeGetKeyGroup2020_05_31(partialParams) {
        this.boot();
        return this.client.getKeyGroup2020_05_31(this.ops["GetKeyGroup2020_05_31"].apply(partialParams));
    }
    invokeGetKeyGroupConfig2020_05_31(partialParams) {
        this.boot();
        return this.client.getKeyGroupConfig2020_05_31(this.ops["GetKeyGroupConfig2020_05_31"].apply(partialParams));
    }
    invokeGetMonitoringSubscription2020_05_31(partialParams) {
        this.boot();
        return this.client.getMonitoringSubscription2020_05_31(this.ops["GetMonitoringSubscription2020_05_31"].apply(partialParams));
    }
    invokeGetOriginRequestPolicy2020_05_31(partialParams) {
        this.boot();
        return this.client.getOriginRequestPolicy2020_05_31(this.ops["GetOriginRequestPolicy2020_05_31"].apply(partialParams));
    }
    invokeGetOriginRequestPolicyConfig2020_05_31(partialParams) {
        this.boot();
        return this.client.getOriginRequestPolicyConfig2020_05_31(this.ops["GetOriginRequestPolicyConfig2020_05_31"].apply(partialParams));
    }
    invokeGetPublicKey2020_05_31(partialParams) {
        this.boot();
        return this.client.getPublicKey2020_05_31(this.ops["GetPublicKey2020_05_31"].apply(partialParams));
    }
    invokeGetPublicKeyConfig2020_05_31(partialParams) {
        this.boot();
        return this.client.getPublicKeyConfig2020_05_31(this.ops["GetPublicKeyConfig2020_05_31"].apply(partialParams));
    }
    invokeGetRealtimeLogConfig2020_05_31(partialParams) {
        this.boot();
        return this.client.getRealtimeLogConfig2020_05_31(this.ops["GetRealtimeLogConfig2020_05_31"].apply(partialParams));
    }
    invokeGetResponseHeadersPolicy2020_05_31(partialParams) {
        this.boot();
        return this.client.getResponseHeadersPolicy2020_05_31(this.ops["GetResponseHeadersPolicy2020_05_31"].apply(partialParams));
    }
    invokeGetResponseHeadersPolicyConfig2020_05_31(partialParams) {
        this.boot();
        return this.client.getResponseHeadersPolicyConfig2020_05_31(this.ops["GetResponseHeadersPolicyConfig2020_05_31"].apply(partialParams));
    }
    invokeGetStreamingDistribution2020_05_31(partialParams) {
        this.boot();
        return this.client.getStreamingDistribution2020_05_31(this.ops["GetStreamingDistribution2020_05_31"].apply(partialParams));
    }
    invokeGetStreamingDistributionConfig2020_05_31(partialParams) {
        this.boot();
        return this.client.getStreamingDistributionConfig2020_05_31(this.ops["GetStreamingDistributionConfig2020_05_31"].apply(partialParams));
    }
    invokeListCachePolicies2020_05_31(partialParams) {
        this.boot();
        return this.client.listCachePolicies2020_05_31(this.ops["ListCachePolicies2020_05_31"].apply(partialParams));
    }
    invokeListCloudFrontOriginAccessIdentities2020_05_31(partialParams) {
        this.boot();
        return this.client.listCloudFrontOriginAccessIdentities2020_05_31(this.ops["ListCloudFrontOriginAccessIdentities2020_05_31"].apply(partialParams));
    }
    invokeListConflictingAliases2020_05_31(partialParams) {
        this.boot();
        return this.client.listConflictingAliases2020_05_31(this.ops["ListConflictingAliases2020_05_31"].apply(partialParams));
    }
    invokeListDistributions2020_05_31(partialParams) {
        this.boot();
        return this.client.listDistributions2020_05_31(this.ops["ListDistributions2020_05_31"].apply(partialParams));
    }
    invokeListDistributionsByCachePolicyId2020_05_31(partialParams) {
        this.boot();
        return this.client.listDistributionsByCachePolicyId2020_05_31(this.ops["ListDistributionsByCachePolicyId2020_05_31"].apply(partialParams));
    }
    invokeListDistributionsByKeyGroup2020_05_31(partialParams) {
        this.boot();
        return this.client.listDistributionsByKeyGroup2020_05_31(this.ops["ListDistributionsByKeyGroup2020_05_31"].apply(partialParams));
    }
    invokeListDistributionsByOriginRequestPolicyId2020_05_31(partialParams) {
        this.boot();
        return this.client.listDistributionsByOriginRequestPolicyId2020_05_31(this.ops["ListDistributionsByOriginRequestPolicyId2020_05_31"].apply(partialParams));
    }
    invokeListDistributionsByRealtimeLogConfig2020_05_31(partialParams) {
        this.boot();
        return this.client.listDistributionsByRealtimeLogConfig2020_05_31(this.ops["ListDistributionsByRealtimeLogConfig2020_05_31"].apply(partialParams));
    }
    invokeListDistributionsByResponseHeadersPolicyId2020_05_31(partialParams) {
        this.boot();
        return this.client.listDistributionsByResponseHeadersPolicyId2020_05_31(this.ops["ListDistributionsByResponseHeadersPolicyId2020_05_31"].apply(partialParams));
    }
    invokeListDistributionsByWebACLId2020_05_31(partialParams) {
        this.boot();
        return this.client.listDistributionsByWebACLId2020_05_31(this.ops["ListDistributionsByWebACLId2020_05_31"].apply(partialParams));
    }
    invokeListFieldLevelEncryptionConfigs2020_05_31(partialParams) {
        this.boot();
        return this.client.listFieldLevelEncryptionConfigs2020_05_31(this.ops["ListFieldLevelEncryptionConfigs2020_05_31"].apply(partialParams));
    }
    invokeListFieldLevelEncryptionProfiles2020_05_31(partialParams) {
        this.boot();
        return this.client.listFieldLevelEncryptionProfiles2020_05_31(this.ops["ListFieldLevelEncryptionProfiles2020_05_31"].apply(partialParams));
    }
    invokeListFunctions2020_05_31(partialParams) {
        this.boot();
        return this.client.listFunctions2020_05_31(this.ops["ListFunctions2020_05_31"].apply(partialParams));
    }
    invokeListInvalidations2020_05_31(partialParams) {
        this.boot();
        return this.client.listInvalidations2020_05_31(this.ops["ListInvalidations2020_05_31"].apply(partialParams));
    }
    invokeListKeyGroups2020_05_31(partialParams) {
        this.boot();
        return this.client.listKeyGroups2020_05_31(this.ops["ListKeyGroups2020_05_31"].apply(partialParams));
    }
    invokeListOriginRequestPolicies2020_05_31(partialParams) {
        this.boot();
        return this.client.listOriginRequestPolicies2020_05_31(this.ops["ListOriginRequestPolicies2020_05_31"].apply(partialParams));
    }
    invokeListPublicKeys2020_05_31(partialParams) {
        this.boot();
        return this.client.listPublicKeys2020_05_31(this.ops["ListPublicKeys2020_05_31"].apply(partialParams));
    }
    invokeListRealtimeLogConfigs2020_05_31(partialParams) {
        this.boot();
        return this.client.listRealtimeLogConfigs2020_05_31(this.ops["ListRealtimeLogConfigs2020_05_31"].apply(partialParams));
    }
    invokeListResponseHeadersPolicies2020_05_31(partialParams) {
        this.boot();
        return this.client.listResponseHeadersPolicies2020_05_31(this.ops["ListResponseHeadersPolicies2020_05_31"].apply(partialParams));
    }
    invokeListStreamingDistributions2020_05_31(partialParams) {
        this.boot();
        return this.client.listStreamingDistributions2020_05_31(this.ops["ListStreamingDistributions2020_05_31"].apply(partialParams));
    }
    invokeListTagsForResource2020_05_31(partialParams) {
        this.boot();
        return this.client.listTagsForResource2020_05_31(this.ops["ListTagsForResource2020_05_31"].apply(partialParams));
    }
    invokePublishFunction2020_05_31(partialParams) {
        this.boot();
        return this.client.publishFunction2020_05_31(this.ops["PublishFunction2020_05_31"].apply(partialParams));
    }
    invokeTestFunction2020_05_31(partialParams) {
        this.boot();
        return this.client.testFunction2020_05_31(this.ops["TestFunction2020_05_31"].apply(partialParams));
    }
    invokeUpdateCachePolicy2020_05_31(partialParams) {
        this.boot();
        return this.client.updateCachePolicy2020_05_31(this.ops["UpdateCachePolicy2020_05_31"].apply(partialParams));
    }
    invokeUpdateCloudFrontOriginAccessIdentity2020_05_31(partialParams) {
        this.boot();
        return this.client.updateCloudFrontOriginAccessIdentity2020_05_31(this.ops["UpdateCloudFrontOriginAccessIdentity2020_05_31"].apply(partialParams));
    }
    invokeUpdateDistribution2020_05_31(partialParams) {
        this.boot();
        return this.client.updateDistribution2020_05_31(this.ops["UpdateDistribution2020_05_31"].apply(partialParams));
    }
    invokeUpdateFieldLevelEncryptionConfig2020_05_31(partialParams) {
        this.boot();
        return this.client.updateFieldLevelEncryptionConfig2020_05_31(this.ops["UpdateFieldLevelEncryptionConfig2020_05_31"].apply(partialParams));
    }
    invokeUpdateFieldLevelEncryptionProfile2020_05_31(partialParams) {
        this.boot();
        return this.client.updateFieldLevelEncryptionProfile2020_05_31(this.ops["UpdateFieldLevelEncryptionProfile2020_05_31"].apply(partialParams));
    }
    invokeUpdateFunction2020_05_31(partialParams) {
        this.boot();
        return this.client.updateFunction2020_05_31(this.ops["UpdateFunction2020_05_31"].apply(partialParams));
    }
    invokeUpdateKeyGroup2020_05_31(partialParams) {
        this.boot();
        return this.client.updateKeyGroup2020_05_31(this.ops["UpdateKeyGroup2020_05_31"].apply(partialParams));
    }
    invokeUpdateOriginRequestPolicy2020_05_31(partialParams) {
        this.boot();
        return this.client.updateOriginRequestPolicy2020_05_31(this.ops["UpdateOriginRequestPolicy2020_05_31"].apply(partialParams));
    }
    invokeUpdatePublicKey2020_05_31(partialParams) {
        this.boot();
        return this.client.updatePublicKey2020_05_31(this.ops["UpdatePublicKey2020_05_31"].apply(partialParams));
    }
    invokeUpdateRealtimeLogConfig2020_05_31(partialParams) {
        this.boot();
        return this.client.updateRealtimeLogConfig2020_05_31(this.ops["UpdateRealtimeLogConfig2020_05_31"].apply(partialParams));
    }
    invokeUpdateResponseHeadersPolicy2020_05_31(partialParams) {
        this.boot();
        return this.client.updateResponseHeadersPolicy2020_05_31(this.ops["UpdateResponseHeadersPolicy2020_05_31"].apply(partialParams));
    }
    invokeUpdateStreamingDistribution2020_05_31(partialParams) {
        this.boot();
        return this.client.updateStreamingDistribution2020_05_31(this.ops["UpdateStreamingDistribution2020_05_31"].apply(partialParams));
    }
}
exports.default = default_1;
