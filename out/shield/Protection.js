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
const schema = require("../apis/shield-2016-06-02.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.shield.Protection {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.Shield();
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
    invokeAssociateDRTLogBucket(partialParams) {
        this.boot();
        return this.client.associateDRTLogBucket(this.ops["AssociateDRTLogBucket"].apply(partialParams));
    }
    invokeAssociateDRTRole(partialParams) {
        this.boot();
        return this.client.associateDRTRole(this.ops["AssociateDRTRole"].apply(partialParams));
    }
    invokeAssociateHealthCheck(partialParams) {
        this.boot();
        return this.client.associateHealthCheck(this.ops["AssociateHealthCheck"].apply(partialParams));
    }
    invokeAssociateProactiveEngagementDetails(partialParams) {
        this.boot();
        return this.client.associateProactiveEngagementDetails(this.ops["AssociateProactiveEngagementDetails"].apply(partialParams));
    }
    invokeCreateProtection(partialParams) {
        this.boot();
        return this.client.createProtection(this.ops["CreateProtection"].apply(partialParams));
    }
    invokeCreateProtectionGroup(partialParams) {
        this.boot();
        return this.client.createProtectionGroup(this.ops["CreateProtectionGroup"].apply(partialParams));
    }
    invokeCreateSubscription(partialParams) {
        this.boot();
        return this.client.createSubscription(this.ops["CreateSubscription"].apply(partialParams));
    }
    invokeDeleteProtection(partialParams) {
        this.boot();
        return this.client.deleteProtection(this.ops["DeleteProtection"].apply(partialParams));
    }
    invokeDeleteProtectionGroup(partialParams) {
        this.boot();
        return this.client.deleteProtectionGroup(this.ops["DeleteProtectionGroup"].apply(partialParams));
    }
    invokeDeleteSubscription(partialParams) {
        this.boot();
        return this.client.deleteSubscription(this.ops["DeleteSubscription"].apply(partialParams));
    }
    invokeDescribeAttack(partialParams) {
        this.boot();
        return this.client.describeAttack(this.ops["DescribeAttack"].apply(partialParams));
    }
    invokeDescribeAttackStatistics(partialParams) {
        this.boot();
        return this.client.describeAttackStatistics(this.ops["DescribeAttackStatistics"].apply(partialParams));
    }
    invokeDescribeDRTAccess(partialParams) {
        this.boot();
        return this.client.describeDRTAccess(this.ops["DescribeDRTAccess"].apply(partialParams));
    }
    invokeDescribeEmergencyContactSettings(partialParams) {
        this.boot();
        return this.client.describeEmergencyContactSettings(this.ops["DescribeEmergencyContactSettings"].apply(partialParams));
    }
    invokeDescribeProtection(partialParams) {
        this.boot();
        return this.client.describeProtection(this.ops["DescribeProtection"].apply(partialParams));
    }
    invokeDescribeProtectionGroup(partialParams) {
        this.boot();
        return this.client.describeProtectionGroup(this.ops["DescribeProtectionGroup"].apply(partialParams));
    }
    invokeDescribeSubscription(partialParams) {
        this.boot();
        return this.client.describeSubscription(this.ops["DescribeSubscription"].apply(partialParams));
    }
    invokeDisableApplicationLayerAutomaticResponse(partialParams) {
        this.boot();
        return this.client.disableApplicationLayerAutomaticResponse(this.ops["DisableApplicationLayerAutomaticResponse"].apply(partialParams));
    }
    invokeDisableProactiveEngagement(partialParams) {
        this.boot();
        return this.client.disableProactiveEngagement(this.ops["DisableProactiveEngagement"].apply(partialParams));
    }
    invokeDisassociateDRTLogBucket(partialParams) {
        this.boot();
        return this.client.disassociateDRTLogBucket(this.ops["DisassociateDRTLogBucket"].apply(partialParams));
    }
    invokeDisassociateDRTRole(partialParams) {
        this.boot();
        return this.client.disassociateDRTRole(this.ops["DisassociateDRTRole"].apply(partialParams));
    }
    invokeDisassociateHealthCheck(partialParams) {
        this.boot();
        return this.client.disassociateHealthCheck(this.ops["DisassociateHealthCheck"].apply(partialParams));
    }
    invokeEnableApplicationLayerAutomaticResponse(partialParams) {
        this.boot();
        return this.client.enableApplicationLayerAutomaticResponse(this.ops["EnableApplicationLayerAutomaticResponse"].apply(partialParams));
    }
    invokeEnableProactiveEngagement(partialParams) {
        this.boot();
        return this.client.enableProactiveEngagement(this.ops["EnableProactiveEngagement"].apply(partialParams));
    }
    invokeGetSubscriptionState(partialParams) {
        this.boot();
        return this.client.getSubscriptionState(this.ops["GetSubscriptionState"].apply(partialParams));
    }
    invokeListAttacks(partialParams) {
        this.boot();
        return this.client.listAttacks(this.ops["ListAttacks"].apply(partialParams));
    }
    invokeListProtectionGroups(partialParams) {
        this.boot();
        return this.client.listProtectionGroups(this.ops["ListProtectionGroups"].apply(partialParams));
    }
    invokeListProtections(partialParams) {
        this.boot();
        return this.client.listProtections(this.ops["ListProtections"].apply(partialParams));
    }
    invokeListResourcesInProtectionGroup(partialParams) {
        this.boot();
        return this.client.listResourcesInProtectionGroup(this.ops["ListResourcesInProtectionGroup"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateApplicationLayerAutomaticResponse(partialParams) {
        this.boot();
        return this.client.updateApplicationLayerAutomaticResponse(this.ops["UpdateApplicationLayerAutomaticResponse"].apply(partialParams));
    }
    invokeUpdateEmergencyContactSettings(partialParams) {
        this.boot();
        return this.client.updateEmergencyContactSettings(this.ops["UpdateEmergencyContactSettings"].apply(partialParams));
    }
    invokeUpdateProtectionGroup(partialParams) {
        this.boot();
        return this.client.updateProtectionGroup(this.ops["UpdateProtectionGroup"].apply(partialParams));
    }
    invokeUpdateSubscription(partialParams) {
        this.boot();
        return this.client.updateSubscription(this.ops["UpdateSubscription"].apply(partialParams));
    }
}
exports.default = default_1;
