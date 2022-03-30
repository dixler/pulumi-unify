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
class default_1 extends aws.fms.Policy {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.FMS();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/fms-2018-01-01.normal.json"), this.client);
    }
    invokeAssociateAdminAccount(partialParams) {
        return this.client.associateAdminAccount(this.ops["AssociateAdminAccount"].apply(partialParams));
    }
    invokeDeleteAppsList(partialParams) {
        return this.client.deleteAppsList(this.ops["DeleteAppsList"].apply(partialParams));
    }
    invokeDeletePolicy(partialParams) {
        return this.client.deletePolicy(this.ops["DeletePolicy"].apply(partialParams));
    }
    invokeDeleteProtocolsList(partialParams) {
        return this.client.deleteProtocolsList(this.ops["DeleteProtocolsList"].apply(partialParams));
    }
    invokeGetAppsList(partialParams) {
        return this.client.getAppsList(this.ops["GetAppsList"].apply(partialParams));
    }
    invokeGetComplianceDetail(partialParams) {
        return this.client.getComplianceDetail(this.ops["GetComplianceDetail"].apply(partialParams));
    }
    invokeGetPolicy(partialParams) {
        return this.client.getPolicy(this.ops["GetPolicy"].apply(partialParams));
    }
    invokeGetProtectionStatus(partialParams) {
        return this.client.getProtectionStatus(this.ops["GetProtectionStatus"].apply(partialParams));
    }
    invokeGetProtocolsList(partialParams) {
        return this.client.getProtocolsList(this.ops["GetProtocolsList"].apply(partialParams));
    }
    invokeGetViolationDetails(partialParams) {
        return this.client.getViolationDetails(this.ops["GetViolationDetails"].apply(partialParams));
    }
    invokeListAppsLists(partialParams) {
        return this.client.listAppsLists(this.ops["ListAppsLists"].apply(partialParams));
    }
    invokeListComplianceStatus(partialParams) {
        return this.client.listComplianceStatus(this.ops["ListComplianceStatus"].apply(partialParams));
    }
    invokeListProtocolsLists(partialParams) {
        return this.client.listProtocolsLists(this.ops["ListProtocolsLists"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokePutAppsList(partialParams) {
        return this.client.putAppsList(this.ops["PutAppsList"].apply(partialParams));
    }
    invokePutNotificationChannel(partialParams) {
        return this.client.putNotificationChannel(this.ops["PutNotificationChannel"].apply(partialParams));
    }
    invokePutPolicy(partialParams) {
        return this.client.putPolicy(this.ops["PutPolicy"].apply(partialParams));
    }
    invokePutProtocolsList(partialParams) {
        return this.client.putProtocolsList(this.ops["PutProtocolsList"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
}
exports.default = default_1;
