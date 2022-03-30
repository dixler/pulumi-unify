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
class default_1 extends aws.route53.KeySigningKey {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Route53();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/route53-2013-04-01.normal.json"), this.client);
    }
    invokeActivateKeySigningKey(partialParams) {
        return this.client.activateKeySigningKey(this.ops["ActivateKeySigningKey"].apply(partialParams));
    }
    invokeAssociateVPCWithHostedZone(partialParams) {
        return this.client.associateVPCWithHostedZone(this.ops["AssociateVPCWithHostedZone"].apply(partialParams));
    }
    invokeChangeResourceRecordSets(partialParams) {
        return this.client.changeResourceRecordSets(this.ops["ChangeResourceRecordSets"].apply(partialParams));
    }
    invokeChangeTagsForResource(partialParams) {
        return this.client.changeTagsForResource(this.ops["ChangeTagsForResource"].apply(partialParams));
    }
    invokeCreateHealthCheck(partialParams) {
        return this.client.createHealthCheck(this.ops["CreateHealthCheck"].apply(partialParams));
    }
    invokeCreateHostedZone(partialParams) {
        return this.client.createHostedZone(this.ops["CreateHostedZone"].apply(partialParams));
    }
    invokeCreateKeySigningKey(partialParams) {
        return this.client.createKeySigningKey(this.ops["CreateKeySigningKey"].apply(partialParams));
    }
    invokeCreateQueryLoggingConfig(partialParams) {
        return this.client.createQueryLoggingConfig(this.ops["CreateQueryLoggingConfig"].apply(partialParams));
    }
    invokeCreateReusableDelegationSet(partialParams) {
        return this.client.createReusableDelegationSet(this.ops["CreateReusableDelegationSet"].apply(partialParams));
    }
    invokeCreateTrafficPolicy(partialParams) {
        return this.client.createTrafficPolicy(this.ops["CreateTrafficPolicy"].apply(partialParams));
    }
    invokeCreateTrafficPolicyInstance(partialParams) {
        return this.client.createTrafficPolicyInstance(this.ops["CreateTrafficPolicyInstance"].apply(partialParams));
    }
    invokeCreateTrafficPolicyVersion(partialParams) {
        return this.client.createTrafficPolicyVersion(this.ops["CreateTrafficPolicyVersion"].apply(partialParams));
    }
    invokeCreateVPCAssociationAuthorization(partialParams) {
        return this.client.createVPCAssociationAuthorization(this.ops["CreateVPCAssociationAuthorization"].apply(partialParams));
    }
    invokeDeactivateKeySigningKey(partialParams) {
        return this.client.deactivateKeySigningKey(this.ops["DeactivateKeySigningKey"].apply(partialParams));
    }
    invokeDeleteHealthCheck(partialParams) {
        return this.client.deleteHealthCheck(this.ops["DeleteHealthCheck"].apply(partialParams));
    }
    invokeDeleteHostedZone(partialParams) {
        return this.client.deleteHostedZone(this.ops["DeleteHostedZone"].apply(partialParams));
    }
    invokeDeleteKeySigningKey(partialParams) {
        return this.client.deleteKeySigningKey(this.ops["DeleteKeySigningKey"].apply(partialParams));
    }
    invokeDeleteQueryLoggingConfig(partialParams) {
        return this.client.deleteQueryLoggingConfig(this.ops["DeleteQueryLoggingConfig"].apply(partialParams));
    }
    invokeDeleteReusableDelegationSet(partialParams) {
        return this.client.deleteReusableDelegationSet(this.ops["DeleteReusableDelegationSet"].apply(partialParams));
    }
    invokeDeleteTrafficPolicy(partialParams) {
        return this.client.deleteTrafficPolicy(this.ops["DeleteTrafficPolicy"].apply(partialParams));
    }
    invokeDeleteTrafficPolicyInstance(partialParams) {
        return this.client.deleteTrafficPolicyInstance(this.ops["DeleteTrafficPolicyInstance"].apply(partialParams));
    }
    invokeDeleteVPCAssociationAuthorization(partialParams) {
        return this.client.deleteVPCAssociationAuthorization(this.ops["DeleteVPCAssociationAuthorization"].apply(partialParams));
    }
    invokeDisableHostedZoneDNSSEC(partialParams) {
        return this.client.disableHostedZoneDNSSEC(this.ops["DisableHostedZoneDNSSEC"].apply(partialParams));
    }
    invokeDisassociateVPCFromHostedZone(partialParams) {
        return this.client.disassociateVPCFromHostedZone(this.ops["DisassociateVPCFromHostedZone"].apply(partialParams));
    }
    invokeEnableHostedZoneDNSSEC(partialParams) {
        return this.client.enableHostedZoneDNSSEC(this.ops["EnableHostedZoneDNSSEC"].apply(partialParams));
    }
    invokeGetAccountLimit(partialParams) {
        return this.client.getAccountLimit(this.ops["GetAccountLimit"].apply(partialParams));
    }
    invokeGetChange(partialParams) {
        return this.client.getChange(this.ops["GetChange"].apply(partialParams));
    }
    invokeGetDNSSEC(partialParams) {
        return this.client.getDNSSEC(this.ops["GetDNSSEC"].apply(partialParams));
    }
    invokeGetHealthCheck(partialParams) {
        return this.client.getHealthCheck(this.ops["GetHealthCheck"].apply(partialParams));
    }
    invokeGetHealthCheckLastFailureReason(partialParams) {
        return this.client.getHealthCheckLastFailureReason(this.ops["GetHealthCheckLastFailureReason"].apply(partialParams));
    }
    invokeGetHealthCheckStatus(partialParams) {
        return this.client.getHealthCheckStatus(this.ops["GetHealthCheckStatus"].apply(partialParams));
    }
    invokeGetHostedZone(partialParams) {
        return this.client.getHostedZone(this.ops["GetHostedZone"].apply(partialParams));
    }
    invokeGetHostedZoneLimit(partialParams) {
        return this.client.getHostedZoneLimit(this.ops["GetHostedZoneLimit"].apply(partialParams));
    }
    invokeGetQueryLoggingConfig(partialParams) {
        return this.client.getQueryLoggingConfig(this.ops["GetQueryLoggingConfig"].apply(partialParams));
    }
    invokeGetReusableDelegationSet(partialParams) {
        return this.client.getReusableDelegationSet(this.ops["GetReusableDelegationSet"].apply(partialParams));
    }
    invokeGetReusableDelegationSetLimit(partialParams) {
        return this.client.getReusableDelegationSetLimit(this.ops["GetReusableDelegationSetLimit"].apply(partialParams));
    }
    invokeGetTrafficPolicy(partialParams) {
        return this.client.getTrafficPolicy(this.ops["GetTrafficPolicy"].apply(partialParams));
    }
    invokeGetTrafficPolicyInstance(partialParams) {
        return this.client.getTrafficPolicyInstance(this.ops["GetTrafficPolicyInstance"].apply(partialParams));
    }
    invokeListHostedZonesByVPC(partialParams) {
        return this.client.listHostedZonesByVPC(this.ops["ListHostedZonesByVPC"].apply(partialParams));
    }
    invokeListResourceRecordSets(partialParams) {
        return this.client.listResourceRecordSets(this.ops["ListResourceRecordSets"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListTagsForResources(partialParams) {
        return this.client.listTagsForResources(this.ops["ListTagsForResources"].apply(partialParams));
    }
    invokeListTrafficPolicyInstancesByHostedZone(partialParams) {
        return this.client.listTrafficPolicyInstancesByHostedZone(this.ops["ListTrafficPolicyInstancesByHostedZone"].apply(partialParams));
    }
    invokeListTrafficPolicyInstancesByPolicy(partialParams) {
        return this.client.listTrafficPolicyInstancesByPolicy(this.ops["ListTrafficPolicyInstancesByPolicy"].apply(partialParams));
    }
    invokeListTrafficPolicyVersions(partialParams) {
        return this.client.listTrafficPolicyVersions(this.ops["ListTrafficPolicyVersions"].apply(partialParams));
    }
    invokeListVPCAssociationAuthorizations(partialParams) {
        return this.client.listVPCAssociationAuthorizations(this.ops["ListVPCAssociationAuthorizations"].apply(partialParams));
    }
    invokeTestDNSAnswer(partialParams) {
        return this.client.testDNSAnswer(this.ops["TestDNSAnswer"].apply(partialParams));
    }
    invokeUpdateHealthCheck(partialParams) {
        return this.client.updateHealthCheck(this.ops["UpdateHealthCheck"].apply(partialParams));
    }
    invokeUpdateHostedZoneComment(partialParams) {
        return this.client.updateHostedZoneComment(this.ops["UpdateHostedZoneComment"].apply(partialParams));
    }
    invokeUpdateTrafficPolicyComment(partialParams) {
        return this.client.updateTrafficPolicyComment(this.ops["UpdateTrafficPolicyComment"].apply(partialParams));
    }
    invokeUpdateTrafficPolicyInstance(partialParams) {
        return this.client.updateTrafficPolicyInstance(this.ops["UpdateTrafficPolicyInstance"].apply(partialParams));
    }
}
exports.default = default_1;
