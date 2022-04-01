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
class default_1 extends aws.iam.Role {
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
    invokeCreateRole(partialParams) {
        this.boot();
        return this.client.createRole(this.ops["CreateRole"].apply(partialParams));
    }
    invokeCreateSAMLProvider(partialParams) {
        this.boot();
        return this.client.createSAMLProvider(this.ops["CreateSAMLProvider"].apply(partialParams));
    }
    invokeDeleteServiceLinkedRole(partialParams) {
        this.boot();
        return this.client.deleteServiceLinkedRole(this.ops["DeleteServiceLinkedRole"].apply(partialParams));
    }
    invokeGenerateServiceLastAccessedDetails(partialParams) {
        this.boot();
        return this.client.generateServiceLastAccessedDetails(this.ops["GenerateServiceLastAccessedDetails"].apply(partialParams));
    }
    invokeGetRole(partialParams) {
        this.boot();
        return this.client.getRole(this.ops["GetRole"].apply(partialParams));
    }
    invokeGetRolePolicy(partialParams) {
        this.boot();
        return this.client.getRolePolicy(this.ops["GetRolePolicy"].apply(partialParams));
    }
    invokeListAttachedRolePolicies(partialParams) {
        this.boot();
        return this.client.listAttachedRolePolicies(this.ops["ListAttachedRolePolicies"].apply(partialParams));
    }
    invokeListInstanceProfilesForRole(partialParams) {
        this.boot();
        return this.client.listInstanceProfilesForRole(this.ops["ListInstanceProfilesForRole"].apply(partialParams));
    }
    invokeListPoliciesGrantingServiceAccess(partialParams) {
        this.boot();
        return this.client.listPoliciesGrantingServiceAccess(this.ops["ListPoliciesGrantingServiceAccess"].apply(partialParams));
    }
    invokeListRolePolicies(partialParams) {
        this.boot();
        return this.client.listRolePolicies(this.ops["ListRolePolicies"].apply(partialParams));
    }
    invokeListRoleTags(partialParams) {
        this.boot();
        return this.client.listRoleTags(this.ops["ListRoleTags"].apply(partialParams));
    }
    invokeUpdateRole(partialParams) {
        this.boot();
        return this.client.updateRole(this.ops["UpdateRole"].apply(partialParams));
    }
    invokeUpdateRoleDescription(partialParams) {
        this.boot();
        return this.client.updateRoleDescription(this.ops["UpdateRoleDescription"].apply(partialParams));
    }
}
exports.default = default_1;
