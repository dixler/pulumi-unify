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
const schema = require("../apis/route53-2013-04-01.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.route53.ResolverFirewallConfig {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.Route53();
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
    invokeActivateKeySigningKey(partialParams) {
        this.boot();
        return this.client.activateKeySigningKey(this.ops["ActivateKeySigningKey"].apply(partialParams));
    }
    invokeAssociateVPCWithHostedZone(partialParams) {
        this.boot();
        return this.client.associateVPCWithHostedZone(this.ops["AssociateVPCWithHostedZone"].apply(partialParams));
    }
    invokeChangeResourceRecordSets(partialParams) {
        this.boot();
        return this.client.changeResourceRecordSets(this.ops["ChangeResourceRecordSets"].apply(partialParams));
    }
    invokeChangeTagsForResource(partialParams) {
        this.boot();
        return this.client.changeTagsForResource(this.ops["ChangeTagsForResource"].apply(partialParams));
    }
    invokeCreateHealthCheck(partialParams) {
        this.boot();
        return this.client.createHealthCheck(this.ops["CreateHealthCheck"].apply(partialParams));
    }
    invokeCreateHostedZone(partialParams) {
        this.boot();
        return this.client.createHostedZone(this.ops["CreateHostedZone"].apply(partialParams));
    }
    invokeCreateKeySigningKey(partialParams) {
        this.boot();
        return this.client.createKeySigningKey(this.ops["CreateKeySigningKey"].apply(partialParams));
    }
    invokeCreateQueryLoggingConfig(partialParams) {
        this.boot();
        return this.client.createQueryLoggingConfig(this.ops["CreateQueryLoggingConfig"].apply(partialParams));
    }
    invokeCreateReusableDelegationSet(partialParams) {
        this.boot();
        return this.client.createReusableDelegationSet(this.ops["CreateReusableDelegationSet"].apply(partialParams));
    }
    invokeCreateTrafficPolicy(partialParams) {
        this.boot();
        return this.client.createTrafficPolicy(this.ops["CreateTrafficPolicy"].apply(partialParams));
    }
    invokeCreateTrafficPolicyInstance(partialParams) {
        this.boot();
        return this.client.createTrafficPolicyInstance(this.ops["CreateTrafficPolicyInstance"].apply(partialParams));
    }
    invokeCreateTrafficPolicyVersion(partialParams) {
        this.boot();
        return this.client.createTrafficPolicyVersion(this.ops["CreateTrafficPolicyVersion"].apply(partialParams));
    }
    invokeCreateVPCAssociationAuthorization(partialParams) {
        this.boot();
        return this.client.createVPCAssociationAuthorization(this.ops["CreateVPCAssociationAuthorization"].apply(partialParams));
    }
    invokeDeactivateKeySigningKey(partialParams) {
        this.boot();
        return this.client.deactivateKeySigningKey(this.ops["DeactivateKeySigningKey"].apply(partialParams));
    }
    invokeDeleteHealthCheck(partialParams) {
        this.boot();
        return this.client.deleteHealthCheck(this.ops["DeleteHealthCheck"].apply(partialParams));
    }
    invokeDeleteHostedZone(partialParams) {
        this.boot();
        return this.client.deleteHostedZone(this.ops["DeleteHostedZone"].apply(partialParams));
    }
    invokeDeleteKeySigningKey(partialParams) {
        this.boot();
        return this.client.deleteKeySigningKey(this.ops["DeleteKeySigningKey"].apply(partialParams));
    }
    invokeDeleteQueryLoggingConfig(partialParams) {
        this.boot();
        return this.client.deleteQueryLoggingConfig(this.ops["DeleteQueryLoggingConfig"].apply(partialParams));
    }
    invokeDeleteReusableDelegationSet(partialParams) {
        this.boot();
        return this.client.deleteReusableDelegationSet(this.ops["DeleteReusableDelegationSet"].apply(partialParams));
    }
    invokeDeleteTrafficPolicy(partialParams) {
        this.boot();
        return this.client.deleteTrafficPolicy(this.ops["DeleteTrafficPolicy"].apply(partialParams));
    }
    invokeDeleteTrafficPolicyInstance(partialParams) {
        this.boot();
        return this.client.deleteTrafficPolicyInstance(this.ops["DeleteTrafficPolicyInstance"].apply(partialParams));
    }
    invokeDeleteVPCAssociationAuthorization(partialParams) {
        this.boot();
        return this.client.deleteVPCAssociationAuthorization(this.ops["DeleteVPCAssociationAuthorization"].apply(partialParams));
    }
    invokeDisableHostedZoneDNSSEC(partialParams) {
        this.boot();
        return this.client.disableHostedZoneDNSSEC(this.ops["DisableHostedZoneDNSSEC"].apply(partialParams));
    }
    invokeDisassociateVPCFromHostedZone(partialParams) {
        this.boot();
        return this.client.disassociateVPCFromHostedZone(this.ops["DisassociateVPCFromHostedZone"].apply(partialParams));
    }
    invokeEnableHostedZoneDNSSEC(partialParams) {
        this.boot();
        return this.client.enableHostedZoneDNSSEC(this.ops["EnableHostedZoneDNSSEC"].apply(partialParams));
    }
    invokeGetAccountLimit(partialParams) {
        this.boot();
        return this.client.getAccountLimit(this.ops["GetAccountLimit"].apply(partialParams));
    }
    invokeGetChange(partialParams) {
        this.boot();
        return this.client.getChange(this.ops["GetChange"].apply(partialParams));
    }
    invokeGetCheckerIpRanges(partialParams) {
        this.boot();
        return this.client.getCheckerIpRanges(this.ops["GetCheckerIpRanges"].apply(partialParams));
    }
    invokeGetDNSSEC(partialParams) {
        this.boot();
        return this.client.getDNSSEC(this.ops["GetDNSSEC"].apply(partialParams));
    }
    invokeGetGeoLocation(partialParams) {
        this.boot();
        return this.client.getGeoLocation(this.ops["GetGeoLocation"].apply(partialParams));
    }
    invokeGetHealthCheck(partialParams) {
        this.boot();
        return this.client.getHealthCheck(this.ops["GetHealthCheck"].apply(partialParams));
    }
    invokeGetHealthCheckCount(partialParams) {
        this.boot();
        return this.client.getHealthCheckCount(this.ops["GetHealthCheckCount"].apply(partialParams));
    }
    invokeGetHealthCheckLastFailureReason(partialParams) {
        this.boot();
        return this.client.getHealthCheckLastFailureReason(this.ops["GetHealthCheckLastFailureReason"].apply(partialParams));
    }
    invokeGetHealthCheckStatus(partialParams) {
        this.boot();
        return this.client.getHealthCheckStatus(this.ops["GetHealthCheckStatus"].apply(partialParams));
    }
    invokeGetHostedZone(partialParams) {
        this.boot();
        return this.client.getHostedZone(this.ops["GetHostedZone"].apply(partialParams));
    }
    invokeGetHostedZoneCount(partialParams) {
        this.boot();
        return this.client.getHostedZoneCount(this.ops["GetHostedZoneCount"].apply(partialParams));
    }
    invokeGetHostedZoneLimit(partialParams) {
        this.boot();
        return this.client.getHostedZoneLimit(this.ops["GetHostedZoneLimit"].apply(partialParams));
    }
    invokeGetQueryLoggingConfig(partialParams) {
        this.boot();
        return this.client.getQueryLoggingConfig(this.ops["GetQueryLoggingConfig"].apply(partialParams));
    }
    invokeGetReusableDelegationSet(partialParams) {
        this.boot();
        return this.client.getReusableDelegationSet(this.ops["GetReusableDelegationSet"].apply(partialParams));
    }
    invokeGetReusableDelegationSetLimit(partialParams) {
        this.boot();
        return this.client.getReusableDelegationSetLimit(this.ops["GetReusableDelegationSetLimit"].apply(partialParams));
    }
    invokeGetTrafficPolicy(partialParams) {
        this.boot();
        return this.client.getTrafficPolicy(this.ops["GetTrafficPolicy"].apply(partialParams));
    }
    invokeGetTrafficPolicyInstance(partialParams) {
        this.boot();
        return this.client.getTrafficPolicyInstance(this.ops["GetTrafficPolicyInstance"].apply(partialParams));
    }
    invokeGetTrafficPolicyInstanceCount(partialParams) {
        this.boot();
        return this.client.getTrafficPolicyInstanceCount(this.ops["GetTrafficPolicyInstanceCount"].apply(partialParams));
    }
    invokeListGeoLocations(partialParams) {
        this.boot();
        return this.client.listGeoLocations(this.ops["ListGeoLocations"].apply(partialParams));
    }
    invokeListHealthChecks(partialParams) {
        this.boot();
        return this.client.listHealthChecks(this.ops["ListHealthChecks"].apply(partialParams));
    }
    invokeListHostedZones(partialParams) {
        this.boot();
        return this.client.listHostedZones(this.ops["ListHostedZones"].apply(partialParams));
    }
    invokeListHostedZonesByName(partialParams) {
        this.boot();
        return this.client.listHostedZonesByName(this.ops["ListHostedZonesByName"].apply(partialParams));
    }
    invokeListHostedZonesByVPC(partialParams) {
        this.boot();
        return this.client.listHostedZonesByVPC(this.ops["ListHostedZonesByVPC"].apply(partialParams));
    }
    invokeListQueryLoggingConfigs(partialParams) {
        this.boot();
        return this.client.listQueryLoggingConfigs(this.ops["ListQueryLoggingConfigs"].apply(partialParams));
    }
    invokeListResourceRecordSets(partialParams) {
        this.boot();
        return this.client.listResourceRecordSets(this.ops["ListResourceRecordSets"].apply(partialParams));
    }
    invokeListReusableDelegationSets(partialParams) {
        this.boot();
        return this.client.listReusableDelegationSets(this.ops["ListReusableDelegationSets"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListTagsForResources(partialParams) {
        this.boot();
        return this.client.listTagsForResources(this.ops["ListTagsForResources"].apply(partialParams));
    }
    invokeListTrafficPolicies(partialParams) {
        this.boot();
        return this.client.listTrafficPolicies(this.ops["ListTrafficPolicies"].apply(partialParams));
    }
    invokeListTrafficPolicyInstances(partialParams) {
        this.boot();
        return this.client.listTrafficPolicyInstances(this.ops["ListTrafficPolicyInstances"].apply(partialParams));
    }
    invokeListTrafficPolicyInstancesByHostedZone(partialParams) {
        this.boot();
        return this.client.listTrafficPolicyInstancesByHostedZone(this.ops["ListTrafficPolicyInstancesByHostedZone"].apply(partialParams));
    }
    invokeListTrafficPolicyInstancesByPolicy(partialParams) {
        this.boot();
        return this.client.listTrafficPolicyInstancesByPolicy(this.ops["ListTrafficPolicyInstancesByPolicy"].apply(partialParams));
    }
    invokeListTrafficPolicyVersions(partialParams) {
        this.boot();
        return this.client.listTrafficPolicyVersions(this.ops["ListTrafficPolicyVersions"].apply(partialParams));
    }
    invokeListVPCAssociationAuthorizations(partialParams) {
        this.boot();
        return this.client.listVPCAssociationAuthorizations(this.ops["ListVPCAssociationAuthorizations"].apply(partialParams));
    }
    invokeTestDNSAnswer(partialParams) {
        this.boot();
        return this.client.testDNSAnswer(this.ops["TestDNSAnswer"].apply(partialParams));
    }
    invokeUpdateHealthCheck(partialParams) {
        this.boot();
        return this.client.updateHealthCheck(this.ops["UpdateHealthCheck"].apply(partialParams));
    }
    invokeUpdateHostedZoneComment(partialParams) {
        this.boot();
        return this.client.updateHostedZoneComment(this.ops["UpdateHostedZoneComment"].apply(partialParams));
    }
    invokeUpdateTrafficPolicyComment(partialParams) {
        this.boot();
        return this.client.updateTrafficPolicyComment(this.ops["UpdateTrafficPolicyComment"].apply(partialParams));
    }
    invokeUpdateTrafficPolicyInstance(partialParams) {
        this.boot();
        return this.client.updateTrafficPolicyInstance(this.ops["UpdateTrafficPolicyInstance"].apply(partialParams));
    }
}
exports.default = default_1;
