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
class default_1 extends aws.route53.ResolverEndpoint {
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
    invokeCreateHostedZone(partialParams) {
        this.boot();
        return this.client.createHostedZone(this.ops["CreateHostedZone"].apply(partialParams));
    }
    invokeCreateKeySigningKey(partialParams) {
        this.boot();
        return this.client.createKeySigningKey(this.ops["CreateKeySigningKey"].apply(partialParams));
    }
    invokeCreateTrafficPolicy(partialParams) {
        this.boot();
        return this.client.createTrafficPolicy(this.ops["CreateTrafficPolicy"].apply(partialParams));
    }
    invokeCreateTrafficPolicyInstance(partialParams) {
        this.boot();
        return this.client.createTrafficPolicyInstance(this.ops["CreateTrafficPolicyInstance"].apply(partialParams));
    }
    invokeDeactivateKeySigningKey(partialParams) {
        this.boot();
        return this.client.deactivateKeySigningKey(this.ops["DeactivateKeySigningKey"].apply(partialParams));
    }
    invokeDeleteKeySigningKey(partialParams) {
        this.boot();
        return this.client.deleteKeySigningKey(this.ops["DeleteKeySigningKey"].apply(partialParams));
    }
}
exports.default = default_1;
