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
const schema = require("../apis/wafv2-2019-07-29.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.wafv2.WebAclAssociation {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.WAFV2();
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
    invokeAssociateWebACL(partialParams) {
        this.boot();
        return this.client.associateWebACL(this.ops["AssociateWebACL"].apply(partialParams));
    }
    invokeDeleteLoggingConfiguration(partialParams) {
        this.boot();
        return this.client.deleteLoggingConfiguration(this.ops["DeleteLoggingConfiguration"].apply(partialParams));
    }
    invokeDeletePermissionPolicy(partialParams) {
        this.boot();
        return this.client.deletePermissionPolicy(this.ops["DeletePermissionPolicy"].apply(partialParams));
    }
    invokeDisassociateWebACL(partialParams) {
        this.boot();
        return this.client.disassociateWebACL(this.ops["DisassociateWebACL"].apply(partialParams));
    }
    invokeGetLoggingConfiguration(partialParams) {
        this.boot();
        return this.client.getLoggingConfiguration(this.ops["GetLoggingConfiguration"].apply(partialParams));
    }
    invokeGetPermissionPolicy(partialParams) {
        this.boot();
        return this.client.getPermissionPolicy(this.ops["GetPermissionPolicy"].apply(partialParams));
    }
    invokeGetSampledRequests(partialParams) {
        this.boot();
        return this.client.getSampledRequests(this.ops["GetSampledRequests"].apply(partialParams));
    }
    invokeGetWebACLForResource(partialParams) {
        this.boot();
        return this.client.getWebACLForResource(this.ops["GetWebACLForResource"].apply(partialParams));
    }
    invokePutPermissionPolicy(partialParams) {
        this.boot();
        return this.client.putPermissionPolicy(this.ops["PutPermissionPolicy"].apply(partialParams));
    }
}
exports.default = default_1;
