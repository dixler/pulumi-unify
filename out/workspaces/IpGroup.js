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
class default_1 extends aws.workspaces.IpGroup {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.WorkSpaces();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/workspaces-2015-04-08.normal.json"), this.client);
    }
    invokeAssociateConnectionAlias(partialParams) {
        return this.client.associateConnectionAlias(this.ops["AssociateConnectionAlias"].apply(partialParams));
    }
    invokeAssociateIpGroups(partialParams) {
        return this.client.associateIpGroups(this.ops["AssociateIpGroups"].apply(partialParams));
    }
    invokeAuthorizeIpRules(partialParams) {
        return this.client.authorizeIpRules(this.ops["AuthorizeIpRules"].apply(partialParams));
    }
    invokeCopyWorkspaceImage(partialParams) {
        return this.client.copyWorkspaceImage(this.ops["CopyWorkspaceImage"].apply(partialParams));
    }
    invokeCreateConnectClientAddIn(partialParams) {
        return this.client.createConnectClientAddIn(this.ops["CreateConnectClientAddIn"].apply(partialParams));
    }
    invokeCreateConnectionAlias(partialParams) {
        return this.client.createConnectionAlias(this.ops["CreateConnectionAlias"].apply(partialParams));
    }
    invokeCreateIpGroup(partialParams) {
        return this.client.createIpGroup(this.ops["CreateIpGroup"].apply(partialParams));
    }
    invokeCreateTags(partialParams) {
        return this.client.createTags(this.ops["CreateTags"].apply(partialParams));
    }
    invokeCreateUpdatedWorkspaceImage(partialParams) {
        return this.client.createUpdatedWorkspaceImage(this.ops["CreateUpdatedWorkspaceImage"].apply(partialParams));
    }
    invokeCreateWorkspaceBundle(partialParams) {
        return this.client.createWorkspaceBundle(this.ops["CreateWorkspaceBundle"].apply(partialParams));
    }
    invokeCreateWorkspaces(partialParams) {
        return this.client.createWorkspaces(this.ops["CreateWorkspaces"].apply(partialParams));
    }
    invokeDeleteConnectClientAddIn(partialParams) {
        return this.client.deleteConnectClientAddIn(this.ops["DeleteConnectClientAddIn"].apply(partialParams));
    }
    invokeDeleteConnectionAlias(partialParams) {
        return this.client.deleteConnectionAlias(this.ops["DeleteConnectionAlias"].apply(partialParams));
    }
    invokeDeleteIpGroup(partialParams) {
        return this.client.deleteIpGroup(this.ops["DeleteIpGroup"].apply(partialParams));
    }
    invokeDeleteTags(partialParams) {
        return this.client.deleteTags(this.ops["DeleteTags"].apply(partialParams));
    }
    invokeDeleteWorkspaceImage(partialParams) {
        return this.client.deleteWorkspaceImage(this.ops["DeleteWorkspaceImage"].apply(partialParams));
    }
    invokeDeregisterWorkspaceDirectory(partialParams) {
        return this.client.deregisterWorkspaceDirectory(this.ops["DeregisterWorkspaceDirectory"].apply(partialParams));
    }
    invokeDescribeClientProperties(partialParams) {
        return this.client.describeClientProperties(this.ops["DescribeClientProperties"].apply(partialParams));
    }
    invokeDescribeConnectClientAddIns(partialParams) {
        return this.client.describeConnectClientAddIns(this.ops["DescribeConnectClientAddIns"].apply(partialParams));
    }
    invokeDescribeConnectionAliasPermissions(partialParams) {
        return this.client.describeConnectionAliasPermissions(this.ops["DescribeConnectionAliasPermissions"].apply(partialParams));
    }
    invokeDescribeTags(partialParams) {
        return this.client.describeTags(this.ops["DescribeTags"].apply(partialParams));
    }
    invokeDescribeWorkspaceImagePermissions(partialParams) {
        return this.client.describeWorkspaceImagePermissions(this.ops["DescribeWorkspaceImagePermissions"].apply(partialParams));
    }
    invokeDescribeWorkspaceSnapshots(partialParams) {
        return this.client.describeWorkspaceSnapshots(this.ops["DescribeWorkspaceSnapshots"].apply(partialParams));
    }
    invokeDisassociateConnectionAlias(partialParams) {
        return this.client.disassociateConnectionAlias(this.ops["DisassociateConnectionAlias"].apply(partialParams));
    }
    invokeDisassociateIpGroups(partialParams) {
        return this.client.disassociateIpGroups(this.ops["DisassociateIpGroups"].apply(partialParams));
    }
    invokeImportWorkspaceImage(partialParams) {
        return this.client.importWorkspaceImage(this.ops["ImportWorkspaceImage"].apply(partialParams));
    }
    invokeListAvailableManagementCidrRanges(partialParams) {
        return this.client.listAvailableManagementCidrRanges(this.ops["ListAvailableManagementCidrRanges"].apply(partialParams));
    }
    invokeMigrateWorkspace(partialParams) {
        return this.client.migrateWorkspace(this.ops["MigrateWorkspace"].apply(partialParams));
    }
    invokeModifyClientProperties(partialParams) {
        return this.client.modifyClientProperties(this.ops["ModifyClientProperties"].apply(partialParams));
    }
    invokeModifySelfservicePermissions(partialParams) {
        return this.client.modifySelfservicePermissions(this.ops["ModifySelfservicePermissions"].apply(partialParams));
    }
    invokeModifyWorkspaceAccessProperties(partialParams) {
        return this.client.modifyWorkspaceAccessProperties(this.ops["ModifyWorkspaceAccessProperties"].apply(partialParams));
    }
    invokeModifyWorkspaceCreationProperties(partialParams) {
        return this.client.modifyWorkspaceCreationProperties(this.ops["ModifyWorkspaceCreationProperties"].apply(partialParams));
    }
    invokeModifyWorkspaceProperties(partialParams) {
        return this.client.modifyWorkspaceProperties(this.ops["ModifyWorkspaceProperties"].apply(partialParams));
    }
    invokeModifyWorkspaceState(partialParams) {
        return this.client.modifyWorkspaceState(this.ops["ModifyWorkspaceState"].apply(partialParams));
    }
    invokeRebootWorkspaces(partialParams) {
        return this.client.rebootWorkspaces(this.ops["RebootWorkspaces"].apply(partialParams));
    }
    invokeRebuildWorkspaces(partialParams) {
        return this.client.rebuildWorkspaces(this.ops["RebuildWorkspaces"].apply(partialParams));
    }
    invokeRegisterWorkspaceDirectory(partialParams) {
        return this.client.registerWorkspaceDirectory(this.ops["RegisterWorkspaceDirectory"].apply(partialParams));
    }
    invokeRestoreWorkspace(partialParams) {
        return this.client.restoreWorkspace(this.ops["RestoreWorkspace"].apply(partialParams));
    }
    invokeRevokeIpRules(partialParams) {
        return this.client.revokeIpRules(this.ops["RevokeIpRules"].apply(partialParams));
    }
    invokeStartWorkspaces(partialParams) {
        return this.client.startWorkspaces(this.ops["StartWorkspaces"].apply(partialParams));
    }
    invokeStopWorkspaces(partialParams) {
        return this.client.stopWorkspaces(this.ops["StopWorkspaces"].apply(partialParams));
    }
    invokeTerminateWorkspaces(partialParams) {
        return this.client.terminateWorkspaces(this.ops["TerminateWorkspaces"].apply(partialParams));
    }
    invokeUpdateConnectClientAddIn(partialParams) {
        return this.client.updateConnectClientAddIn(this.ops["UpdateConnectClientAddIn"].apply(partialParams));
    }
    invokeUpdateConnectionAliasPermission(partialParams) {
        return this.client.updateConnectionAliasPermission(this.ops["UpdateConnectionAliasPermission"].apply(partialParams));
    }
    invokeUpdateRulesOfIpGroup(partialParams) {
        return this.client.updateRulesOfIpGroup(this.ops["UpdateRulesOfIpGroup"].apply(partialParams));
    }
    invokeUpdateWorkspaceImagePermission(partialParams) {
        return this.client.updateWorkspaceImagePermission(this.ops["UpdateWorkspaceImagePermission"].apply(partialParams));
    }
}
exports.default = default_1;
