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
class default_1 extends aws.detective.Graph {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Detective();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/detective-2018-10-26.normal.json"), this.client);
    }
    invokeAcceptInvitation(partialParams) {
        return this.client.acceptInvitation(this.ops["AcceptInvitation"].apply(partialParams));
    }
    invokeCreateMembers(partialParams) {
        return this.client.createMembers(this.ops["CreateMembers"].apply(partialParams));
    }
    invokeDeleteGraph(partialParams) {
        return this.client.deleteGraph(this.ops["DeleteGraph"].apply(partialParams));
    }
    invokeDeleteMembers(partialParams) {
        return this.client.deleteMembers(this.ops["DeleteMembers"].apply(partialParams));
    }
    invokeDescribeOrganizationConfiguration(partialParams) {
        return this.client.describeOrganizationConfiguration(this.ops["DescribeOrganizationConfiguration"].apply(partialParams));
    }
    invokeDisassociateMembership(partialParams) {
        return this.client.disassociateMembership(this.ops["DisassociateMembership"].apply(partialParams));
    }
    invokeEnableOrganizationAdminAccount(partialParams) {
        return this.client.enableOrganizationAdminAccount(this.ops["EnableOrganizationAdminAccount"].apply(partialParams));
    }
    invokeGetMembers(partialParams) {
        return this.client.getMembers(this.ops["GetMembers"].apply(partialParams));
    }
    invokeListMembers(partialParams) {
        return this.client.listMembers(this.ops["ListMembers"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeRejectInvitation(partialParams) {
        return this.client.rejectInvitation(this.ops["RejectInvitation"].apply(partialParams));
    }
    invokeStartMonitoringMember(partialParams) {
        return this.client.startMonitoringMember(this.ops["StartMonitoringMember"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateOrganizationConfiguration(partialParams) {
        return this.client.updateOrganizationConfiguration(this.ops["UpdateOrganizationConfiguration"].apply(partialParams));
    }
}
exports.default = default_1;
