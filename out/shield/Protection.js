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
class default_1 extends aws.shield.Protection {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Shield();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/shield-2016-06-02.normal.json"), this.client);
    }
    invokeAssociateDRTLogBucket(partialParams) {
        return this.client.associateDRTLogBucket(this.ops["AssociateDRTLogBucket"].apply(partialParams));
    }
    invokeAssociateDRTRole(partialParams) {
        return this.client.associateDRTRole(this.ops["AssociateDRTRole"].apply(partialParams));
    }
    invokeAssociateHealthCheck(partialParams) {
        return this.client.associateHealthCheck(this.ops["AssociateHealthCheck"].apply(partialParams));
    }
    invokeAssociateProactiveEngagementDetails(partialParams) {
        return this.client.associateProactiveEngagementDetails(this.ops["AssociateProactiveEngagementDetails"].apply(partialParams));
    }
    invokeCreateProtection(partialParams) {
        return this.client.createProtection(this.ops["CreateProtection"].apply(partialParams));
    }
    invokeCreateProtectionGroup(partialParams) {
        return this.client.createProtectionGroup(this.ops["CreateProtectionGroup"].apply(partialParams));
    }
    invokeDeleteProtection(partialParams) {
        return this.client.deleteProtection(this.ops["DeleteProtection"].apply(partialParams));
    }
    invokeDeleteProtectionGroup(partialParams) {
        return this.client.deleteProtectionGroup(this.ops["DeleteProtectionGroup"].apply(partialParams));
    }
    invokeDescribeAttack(partialParams) {
        return this.client.describeAttack(this.ops["DescribeAttack"].apply(partialParams));
    }
    invokeDescribeProtectionGroup(partialParams) {
        return this.client.describeProtectionGroup(this.ops["DescribeProtectionGroup"].apply(partialParams));
    }
    invokeDisableApplicationLayerAutomaticResponse(partialParams) {
        return this.client.disableApplicationLayerAutomaticResponse(this.ops["DisableApplicationLayerAutomaticResponse"].apply(partialParams));
    }
    invokeDisassociateDRTLogBucket(partialParams) {
        return this.client.disassociateDRTLogBucket(this.ops["DisassociateDRTLogBucket"].apply(partialParams));
    }
    invokeDisassociateHealthCheck(partialParams) {
        return this.client.disassociateHealthCheck(this.ops["DisassociateHealthCheck"].apply(partialParams));
    }
    invokeEnableApplicationLayerAutomaticResponse(partialParams) {
        return this.client.enableApplicationLayerAutomaticResponse(this.ops["EnableApplicationLayerAutomaticResponse"].apply(partialParams));
    }
    invokeListResourcesInProtectionGroup(partialParams) {
        return this.client.listResourcesInProtectionGroup(this.ops["ListResourcesInProtectionGroup"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateApplicationLayerAutomaticResponse(partialParams) {
        return this.client.updateApplicationLayerAutomaticResponse(this.ops["UpdateApplicationLayerAutomaticResponse"].apply(partialParams));
    }
    invokeUpdateProtectionGroup(partialParams) {
        return this.client.updateProtectionGroup(this.ops["UpdateProtectionGroup"].apply(partialParams));
    }
}
exports.default = default_1;
