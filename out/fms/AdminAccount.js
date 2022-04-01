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
const schema = require("../apis/fms-2018-01-01.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.fms.AdminAccount {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.FMS();
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
    invokeGetAdminAccount(partialParams) {
        this.boot();
        return this.client.getAdminAccount(this.ops["GetAdminAccount"].apply(partialParams));
    }
    invokeGetAppsList(partialParams) {
        this.boot();
        return this.client.getAppsList(this.ops["GetAppsList"].apply(partialParams));
    }
    invokeGetComplianceDetail(partialParams) {
        this.boot();
        return this.client.getComplianceDetail(this.ops["GetComplianceDetail"].apply(partialParams));
    }
    invokeGetNotificationChannel(partialParams) {
        this.boot();
        return this.client.getNotificationChannel(this.ops["GetNotificationChannel"].apply(partialParams));
    }
    invokeGetPolicy(partialParams) {
        this.boot();
        return this.client.getPolicy(this.ops["GetPolicy"].apply(partialParams));
    }
    invokeGetProtectionStatus(partialParams) {
        this.boot();
        return this.client.getProtectionStatus(this.ops["GetProtectionStatus"].apply(partialParams));
    }
    invokeGetProtocolsList(partialParams) {
        this.boot();
        return this.client.getProtocolsList(this.ops["GetProtocolsList"].apply(partialParams));
    }
    invokeGetViolationDetails(partialParams) {
        this.boot();
        return this.client.getViolationDetails(this.ops["GetViolationDetails"].apply(partialParams));
    }
    invokeListAppsLists(partialParams) {
        this.boot();
        return this.client.listAppsLists(this.ops["ListAppsLists"].apply(partialParams));
    }
    invokeListComplianceStatus(partialParams) {
        this.boot();
        return this.client.listComplianceStatus(this.ops["ListComplianceStatus"].apply(partialParams));
    }
    invokeListMemberAccounts(partialParams) {
        this.boot();
        return this.client.listMemberAccounts(this.ops["ListMemberAccounts"].apply(partialParams));
    }
    invokeListPolicies(partialParams) {
        this.boot();
        return this.client.listPolicies(this.ops["ListPolicies"].apply(partialParams));
    }
    invokeListProtocolsLists(partialParams) {
        this.boot();
        return this.client.listProtocolsLists(this.ops["ListProtocolsLists"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokePutAppsList(partialParams) {
        this.boot();
        return this.client.putAppsList(this.ops["PutAppsList"].apply(partialParams));
    }
    invokePutPolicy(partialParams) {
        this.boot();
        return this.client.putPolicy(this.ops["PutPolicy"].apply(partialParams));
    }
    invokePutProtocolsList(partialParams) {
        this.boot();
        return this.client.putProtocolsList(this.ops["PutProtocolsList"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
}
exports.default = default_1;
