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
class default_1 extends aws.iam.User {
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
    invokeCreateLoginProfile(partialParams) {
        this.boot();
        return this.client.createLoginProfile(this.ops["CreateLoginProfile"].apply(partialParams));
    }
    invokeCreateSAMLProvider(partialParams) {
        this.boot();
        return this.client.createSAMLProvider(this.ops["CreateSAMLProvider"].apply(partialParams));
    }
    invokeCreateServiceSpecificCredential(partialParams) {
        this.boot();
        return this.client.createServiceSpecificCredential(this.ops["CreateServiceSpecificCredential"].apply(partialParams));
    }
    invokeCreateUser(partialParams) {
        this.boot();
        return this.client.createUser(this.ops["CreateUser"].apply(partialParams));
    }
    invokeGenerateServiceLastAccessedDetails(partialParams) {
        this.boot();
        return this.client.generateServiceLastAccessedDetails(this.ops["GenerateServiceLastAccessedDetails"].apply(partialParams));
    }
    invokeGetLoginProfile(partialParams) {
        this.boot();
        return this.client.getLoginProfile(this.ops["GetLoginProfile"].apply(partialParams));
    }
    invokeGetSSHPublicKey(partialParams) {
        this.boot();
        return this.client.getSSHPublicKey(this.ops["GetSSHPublicKey"].apply(partialParams));
    }
    invokeGetUserPolicy(partialParams) {
        this.boot();
        return this.client.getUserPolicy(this.ops["GetUserPolicy"].apply(partialParams));
    }
    invokeListAttachedUserPolicies(partialParams) {
        this.boot();
        return this.client.listAttachedUserPolicies(this.ops["ListAttachedUserPolicies"].apply(partialParams));
    }
    invokeListGroupsForUser(partialParams) {
        this.boot();
        return this.client.listGroupsForUser(this.ops["ListGroupsForUser"].apply(partialParams));
    }
    invokeListPoliciesGrantingServiceAccess(partialParams) {
        this.boot();
        return this.client.listPoliciesGrantingServiceAccess(this.ops["ListPoliciesGrantingServiceAccess"].apply(partialParams));
    }
    invokeListUserPolicies(partialParams) {
        this.boot();
        return this.client.listUserPolicies(this.ops["ListUserPolicies"].apply(partialParams));
    }
    invokeListUserTags(partialParams) {
        this.boot();
        return this.client.listUserTags(this.ops["ListUserTags"].apply(partialParams));
    }
    invokeUploadSSHPublicKey(partialParams) {
        this.boot();
        return this.client.uploadSSHPublicKey(this.ops["UploadSSHPublicKey"].apply(partialParams));
    }
}
exports.default = default_1;
