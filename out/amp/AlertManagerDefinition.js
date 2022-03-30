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
class default_1 extends aws.amp.AlertManagerDefinition {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Amp();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/amp-2020-08-01.normal.json"), this.client);
    }
    invokeCreateAlertManagerDefinition(partialParams) {
        return this.client.createAlertManagerDefinition(this.ops["CreateAlertManagerDefinition"].apply(partialParams));
    }
    invokeCreateRuleGroupsNamespace(partialParams) {
        return this.client.createRuleGroupsNamespace(this.ops["CreateRuleGroupsNamespace"].apply(partialParams));
    }
    invokeDeleteAlertManagerDefinition(partialParams) {
        return this.client.deleteAlertManagerDefinition(this.ops["DeleteAlertManagerDefinition"].apply(partialParams));
    }
    invokeDeleteRuleGroupsNamespace(partialParams) {
        return this.client.deleteRuleGroupsNamespace(this.ops["DeleteRuleGroupsNamespace"].apply(partialParams));
    }
    invokeDeleteWorkspace(partialParams) {
        return this.client.deleteWorkspace(this.ops["DeleteWorkspace"].apply(partialParams));
    }
    invokeDescribeAlertManagerDefinition(partialParams) {
        return this.client.describeAlertManagerDefinition(this.ops["DescribeAlertManagerDefinition"].apply(partialParams));
    }
    invokeDescribeRuleGroupsNamespace(partialParams) {
        return this.client.describeRuleGroupsNamespace(this.ops["DescribeRuleGroupsNamespace"].apply(partialParams));
    }
    invokeDescribeWorkspace(partialParams) {
        return this.client.describeWorkspace(this.ops["DescribeWorkspace"].apply(partialParams));
    }
    invokeListRuleGroupsNamespaces(partialParams) {
        return this.client.listRuleGroupsNamespaces(this.ops["ListRuleGroupsNamespaces"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokePutAlertManagerDefinition(partialParams) {
        return this.client.putAlertManagerDefinition(this.ops["PutAlertManagerDefinition"].apply(partialParams));
    }
    invokePutRuleGroupsNamespace(partialParams) {
        return this.client.putRuleGroupsNamespace(this.ops["PutRuleGroupsNamespace"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateWorkspaceAlias(partialParams) {
        return this.client.updateWorkspaceAlias(this.ops["UpdateWorkspaceAlias"].apply(partialParams));
    }
}
exports.default = default_1;
