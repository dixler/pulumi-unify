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
const schema = require("../apis/iam-2010-05-08.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.iam.PolicyAttachment {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.IAM();
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
    invokeCreatePolicyVersion(partialParams) {
        this.boot();
        return this.client.createPolicyVersion(this.ops["CreatePolicyVersion"].apply(partialParams));
    }
    invokeCreateSAMLProvider(partialParams) {
        this.boot();
        return this.client.createSAMLProvider(this.ops["CreateSAMLProvider"].apply(partialParams));
    }
    invokeGetPolicy(partialParams) {
        this.boot();
        return this.client.getPolicy(this.ops["GetPolicy"].apply(partialParams));
    }
    invokeGetPolicyVersion(partialParams) {
        this.boot();
        return this.client.getPolicyVersion(this.ops["GetPolicyVersion"].apply(partialParams));
    }
    invokeListEntitiesForPolicy(partialParams) {
        this.boot();
        return this.client.listEntitiesForPolicy(this.ops["ListEntitiesForPolicy"].apply(partialParams));
    }
    invokeListPolicyTags(partialParams) {
        this.boot();
        return this.client.listPolicyTags(this.ops["ListPolicyTags"].apply(partialParams));
    }
    invokeListPolicyVersions(partialParams) {
        this.boot();
        return this.client.listPolicyVersions(this.ops["ListPolicyVersions"].apply(partialParams));
    }
}
exports.default = default_1;
