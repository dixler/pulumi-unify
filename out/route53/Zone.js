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
class default_1 extends aws.route53.Zone {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Route53();
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
    invokeActivateKeySigningKey(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.activateKeySigningKey(this.ops["ActivateKeySigningKey"].applicator.apply(partialParams));
    }
    invokeAssociateVPCWithHostedZone(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateVPCWithHostedZone(this.ops["AssociateVPCWithHostedZone"].applicator.apply(partialParams));
    }
    invokeChangeResourceRecordSets(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.changeResourceRecordSets(this.ops["ChangeResourceRecordSets"].applicator.apply(partialParams));
    }
    invokeChangeTagsForResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.changeTagsForResource(this.ops["ChangeTagsForResource"].applicator.apply(partialParams));
    }
    invokeCreateHealthCheck(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createHealthCheck(this.ops["CreateHealthCheck"].applicator.apply(partialParams));
    }
    invokeCreateHostedZone(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createHostedZone(this.ops["CreateHostedZone"].applicator.apply(partialParams));
    }
    invokeCreateKeySigningKey(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createKeySigningKey(this.ops["CreateKeySigningKey"].applicator.apply(partialParams));
    }
    invokeCreateQueryLoggingConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createQueryLoggingConfig(this.ops["CreateQueryLoggingConfig"].applicator.apply(partialParams));
    }
    invokeCreateReusableDelegationSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createReusableDelegationSet(this.ops["CreateReusableDelegationSet"].applicator.apply(partialParams));
    }
    invokeCreateTrafficPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTrafficPolicy(this.ops["CreateTrafficPolicy"].applicator.apply(partialParams));
    }
    invokeCreateTrafficPolicyInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTrafficPolicyInstance(this.ops["CreateTrafficPolicyInstance"].applicator.apply(partialParams));
    }
    invokeCreateTrafficPolicyVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTrafficPolicyVersion(this.ops["CreateTrafficPolicyVersion"].applicator.apply(partialParams));
    }
    invokeCreateVPCAssociationAuthorization(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVPCAssociationAuthorization(this.ops["CreateVPCAssociationAuthorization"].applicator.apply(partialParams));
    }
    invokeDeactivateKeySigningKey(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deactivateKeySigningKey(this.ops["DeactivateKeySigningKey"].applicator.apply(partialParams));
    }
    invokeDeleteHealthCheck(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteHealthCheck(this.ops["DeleteHealthCheck"].applicator.apply(partialParams));
    }
    invokeDeleteHostedZone(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteHostedZone(this.ops["DeleteHostedZone"].applicator.apply(partialParams));
    }
    invokeDeleteKeySigningKey(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteKeySigningKey(this.ops["DeleteKeySigningKey"].applicator.apply(partialParams));
    }
    invokeDeleteQueryLoggingConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteQueryLoggingConfig(this.ops["DeleteQueryLoggingConfig"].applicator.apply(partialParams));
    }
    invokeDeleteReusableDelegationSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteReusableDelegationSet(this.ops["DeleteReusableDelegationSet"].applicator.apply(partialParams));
    }
    invokeDeleteTrafficPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTrafficPolicy(this.ops["DeleteTrafficPolicy"].applicator.apply(partialParams));
    }
    invokeDeleteTrafficPolicyInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTrafficPolicyInstance(this.ops["DeleteTrafficPolicyInstance"].applicator.apply(partialParams));
    }
    invokeDeleteVPCAssociationAuthorization(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVPCAssociationAuthorization(this.ops["DeleteVPCAssociationAuthorization"].applicator.apply(partialParams));
    }
    invokeDisableHostedZoneDNSSEC(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableHostedZoneDNSSEC(this.ops["DisableHostedZoneDNSSEC"].applicator.apply(partialParams));
    }
    invokeDisassociateVPCFromHostedZone(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateVPCFromHostedZone(this.ops["DisassociateVPCFromHostedZone"].applicator.apply(partialParams));
    }
    invokeEnableHostedZoneDNSSEC(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableHostedZoneDNSSEC(this.ops["EnableHostedZoneDNSSEC"].applicator.apply(partialParams));
    }
    invokeGetAccountLimit(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAccountLimit(this.ops["GetAccountLimit"].applicator.apply(partialParams));
    }
    invokeGetChange(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getChange(this.ops["GetChange"].applicator.apply(partialParams));
    }
    invokeGetDNSSEC(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDNSSEC(this.ops["GetDNSSEC"].applicator.apply(partialParams));
    }
    invokeGetHealthCheck(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getHealthCheck(this.ops["GetHealthCheck"].applicator.apply(partialParams));
    }
    invokeGetHealthCheckLastFailureReason(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getHealthCheckLastFailureReason(this.ops["GetHealthCheckLastFailureReason"].applicator.apply(partialParams));
    }
    invokeGetHealthCheckStatus(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getHealthCheckStatus(this.ops["GetHealthCheckStatus"].applicator.apply(partialParams));
    }
    invokeGetHostedZone(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getHostedZone(this.ops["GetHostedZone"].applicator.apply(partialParams));
    }
    invokeGetHostedZoneLimit(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getHostedZoneLimit(this.ops["GetHostedZoneLimit"].applicator.apply(partialParams));
    }
    invokeGetQueryLoggingConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getQueryLoggingConfig(this.ops["GetQueryLoggingConfig"].applicator.apply(partialParams));
    }
    invokeGetReusableDelegationSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getReusableDelegationSet(this.ops["GetReusableDelegationSet"].applicator.apply(partialParams));
    }
    invokeGetReusableDelegationSetLimit(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getReusableDelegationSetLimit(this.ops["GetReusableDelegationSetLimit"].applicator.apply(partialParams));
    }
    invokeGetTrafficPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTrafficPolicy(this.ops["GetTrafficPolicy"].applicator.apply(partialParams));
    }
    invokeGetTrafficPolicyInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTrafficPolicyInstance(this.ops["GetTrafficPolicyInstance"].applicator.apply(partialParams));
    }
    invokeListHostedZonesByVPC(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listHostedZonesByVPC(this.ops["ListHostedZonesByVPC"].applicator.apply(partialParams));
    }
    invokeListResourceRecordSets(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listResourceRecordSets(this.ops["ListResourceRecordSets"].applicator.apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].applicator.apply(partialParams));
    }
    invokeListTagsForResources(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResources(this.ops["ListTagsForResources"].applicator.apply(partialParams));
    }
    invokeListTrafficPolicyInstancesByHostedZone(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTrafficPolicyInstancesByHostedZone(this.ops["ListTrafficPolicyInstancesByHostedZone"].applicator.apply(partialParams));
    }
    invokeListTrafficPolicyInstancesByPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTrafficPolicyInstancesByPolicy(this.ops["ListTrafficPolicyInstancesByPolicy"].applicator.apply(partialParams));
    }
    invokeListTrafficPolicyVersions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTrafficPolicyVersions(this.ops["ListTrafficPolicyVersions"].applicator.apply(partialParams));
    }
    invokeListVPCAssociationAuthorizations(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listVPCAssociationAuthorizations(this.ops["ListVPCAssociationAuthorizations"].applicator.apply(partialParams));
    }
    invokeTestDNSAnswer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.testDNSAnswer(this.ops["TestDNSAnswer"].applicator.apply(partialParams));
    }
    invokeUpdateHealthCheck(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateHealthCheck(this.ops["UpdateHealthCheck"].applicator.apply(partialParams));
    }
    invokeUpdateHostedZoneComment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateHostedZoneComment(this.ops["UpdateHostedZoneComment"].applicator.apply(partialParams));
    }
    invokeUpdateTrafficPolicyComment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTrafficPolicyComment(this.ops["UpdateTrafficPolicyComment"].applicator.apply(partialParams));
    }
    invokeUpdateTrafficPolicyInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTrafficPolicyInstance(this.ops["UpdateTrafficPolicyInstance"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
