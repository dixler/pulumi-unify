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
const schema = require("../apis/workspaces-2015-04-08.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.workspaces.Workspace {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.WorkSpaces();
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
    invokeAssociateConnectionAlias(partialParams) {
        this.boot();
        return this.client.associateConnectionAlias(this.ops["AssociateConnectionAlias"].apply(partialParams));
    }
    invokeAssociateIpGroups(partialParams) {
        this.boot();
        return this.client.associateIpGroups(this.ops["AssociateIpGroups"].apply(partialParams));
    }
    invokeAuthorizeIpRules(partialParams) {
        this.boot();
        return this.client.authorizeIpRules(this.ops["AuthorizeIpRules"].apply(partialParams));
    }
    invokeCopyWorkspaceImage(partialParams) {
        this.boot();
        return this.client.copyWorkspaceImage(this.ops["CopyWorkspaceImage"].apply(partialParams));
    }
    invokeCreateConnectClientAddIn(partialParams) {
        this.boot();
        return this.client.createConnectClientAddIn(this.ops["CreateConnectClientAddIn"].apply(partialParams));
    }
    invokeCreateConnectionAlias(partialParams) {
        this.boot();
        return this.client.createConnectionAlias(this.ops["CreateConnectionAlias"].apply(partialParams));
    }
    invokeCreateIpGroup(partialParams) {
        this.boot();
        return this.client.createIpGroup(this.ops["CreateIpGroup"].apply(partialParams));
    }
    invokeCreateTags(partialParams) {
        this.boot();
        return this.client.createTags(this.ops["CreateTags"].apply(partialParams));
    }
    invokeCreateUpdatedWorkspaceImage(partialParams) {
        this.boot();
        return this.client.createUpdatedWorkspaceImage(this.ops["CreateUpdatedWorkspaceImage"].apply(partialParams));
    }
    invokeCreateWorkspaceBundle(partialParams) {
        this.boot();
        return this.client.createWorkspaceBundle(this.ops["CreateWorkspaceBundle"].apply(partialParams));
    }
    invokeCreateWorkspaces(partialParams) {
        this.boot();
        return this.client.createWorkspaces(this.ops["CreateWorkspaces"].apply(partialParams));
    }
    invokeDeleteConnectClientAddIn(partialParams) {
        this.boot();
        return this.client.deleteConnectClientAddIn(this.ops["DeleteConnectClientAddIn"].apply(partialParams));
    }
    invokeDeleteConnectionAlias(partialParams) {
        this.boot();
        return this.client.deleteConnectionAlias(this.ops["DeleteConnectionAlias"].apply(partialParams));
    }
    invokeDeleteIpGroup(partialParams) {
        this.boot();
        return this.client.deleteIpGroup(this.ops["DeleteIpGroup"].apply(partialParams));
    }
    invokeDeleteTags(partialParams) {
        this.boot();
        return this.client.deleteTags(this.ops["DeleteTags"].apply(partialParams));
    }
    invokeDeleteWorkspaceBundle(partialParams) {
        this.boot();
        return this.client.deleteWorkspaceBundle(this.ops["DeleteWorkspaceBundle"].apply(partialParams));
    }
    invokeDeleteWorkspaceImage(partialParams) {
        this.boot();
        return this.client.deleteWorkspaceImage(this.ops["DeleteWorkspaceImage"].apply(partialParams));
    }
    invokeDeregisterWorkspaceDirectory(partialParams) {
        this.boot();
        return this.client.deregisterWorkspaceDirectory(this.ops["DeregisterWorkspaceDirectory"].apply(partialParams));
    }
    invokeDescribeAccount(partialParams) {
        this.boot();
        return this.client.describeAccount(this.ops["DescribeAccount"].apply(partialParams));
    }
    invokeDescribeAccountModifications(partialParams) {
        this.boot();
        return this.client.describeAccountModifications(this.ops["DescribeAccountModifications"].apply(partialParams));
    }
    invokeDescribeClientProperties(partialParams) {
        this.boot();
        return this.client.describeClientProperties(this.ops["DescribeClientProperties"].apply(partialParams));
    }
    invokeDescribeConnectClientAddIns(partialParams) {
        this.boot();
        return this.client.describeConnectClientAddIns(this.ops["DescribeConnectClientAddIns"].apply(partialParams));
    }
    invokeDescribeConnectionAliasPermissions(partialParams) {
        this.boot();
        return this.client.describeConnectionAliasPermissions(this.ops["DescribeConnectionAliasPermissions"].apply(partialParams));
    }
    invokeDescribeConnectionAliases(partialParams) {
        this.boot();
        return this.client.describeConnectionAliases(this.ops["DescribeConnectionAliases"].apply(partialParams));
    }
    invokeDescribeIpGroups(partialParams) {
        this.boot();
        return this.client.describeIpGroups(this.ops["DescribeIpGroups"].apply(partialParams));
    }
    invokeDescribeTags(partialParams) {
        this.boot();
        return this.client.describeTags(this.ops["DescribeTags"].apply(partialParams));
    }
    invokeDescribeWorkspaceBundles(partialParams) {
        this.boot();
        return this.client.describeWorkspaceBundles(this.ops["DescribeWorkspaceBundles"].apply(partialParams));
    }
    invokeDescribeWorkspaceDirectories(partialParams) {
        this.boot();
        return this.client.describeWorkspaceDirectories(this.ops["DescribeWorkspaceDirectories"].apply(partialParams));
    }
    invokeDescribeWorkspaceImagePermissions(partialParams) {
        this.boot();
        return this.client.describeWorkspaceImagePermissions(this.ops["DescribeWorkspaceImagePermissions"].apply(partialParams));
    }
    invokeDescribeWorkspaceImages(partialParams) {
        this.boot();
        return this.client.describeWorkspaceImages(this.ops["DescribeWorkspaceImages"].apply(partialParams));
    }
    invokeDescribeWorkspaceSnapshots(partialParams) {
        this.boot();
        return this.client.describeWorkspaceSnapshots(this.ops["DescribeWorkspaceSnapshots"].apply(partialParams));
    }
    invokeDescribeWorkspaces(partialParams) {
        this.boot();
        return this.client.describeWorkspaces(this.ops["DescribeWorkspaces"].apply(partialParams));
    }
    invokeDescribeWorkspacesConnectionStatus(partialParams) {
        this.boot();
        return this.client.describeWorkspacesConnectionStatus(this.ops["DescribeWorkspacesConnectionStatus"].apply(partialParams));
    }
    invokeDisassociateConnectionAlias(partialParams) {
        this.boot();
        return this.client.disassociateConnectionAlias(this.ops["DisassociateConnectionAlias"].apply(partialParams));
    }
    invokeDisassociateIpGroups(partialParams) {
        this.boot();
        return this.client.disassociateIpGroups(this.ops["DisassociateIpGroups"].apply(partialParams));
    }
    invokeImportWorkspaceImage(partialParams) {
        this.boot();
        return this.client.importWorkspaceImage(this.ops["ImportWorkspaceImage"].apply(partialParams));
    }
    invokeListAvailableManagementCidrRanges(partialParams) {
        this.boot();
        return this.client.listAvailableManagementCidrRanges(this.ops["ListAvailableManagementCidrRanges"].apply(partialParams));
    }
    invokeMigrateWorkspace(partialParams) {
        this.boot();
        return this.client.migrateWorkspace(this.ops["MigrateWorkspace"].apply(partialParams));
    }
    invokeModifyAccount(partialParams) {
        this.boot();
        return this.client.modifyAccount(this.ops["ModifyAccount"].apply(partialParams));
    }
    invokeModifyClientProperties(partialParams) {
        this.boot();
        return this.client.modifyClientProperties(this.ops["ModifyClientProperties"].apply(partialParams));
    }
    invokeModifySelfservicePermissions(partialParams) {
        this.boot();
        return this.client.modifySelfservicePermissions(this.ops["ModifySelfservicePermissions"].apply(partialParams));
    }
    invokeModifyWorkspaceAccessProperties(partialParams) {
        this.boot();
        return this.client.modifyWorkspaceAccessProperties(this.ops["ModifyWorkspaceAccessProperties"].apply(partialParams));
    }
    invokeModifyWorkspaceCreationProperties(partialParams) {
        this.boot();
        return this.client.modifyWorkspaceCreationProperties(this.ops["ModifyWorkspaceCreationProperties"].apply(partialParams));
    }
    invokeModifyWorkspaceProperties(partialParams) {
        this.boot();
        return this.client.modifyWorkspaceProperties(this.ops["ModifyWorkspaceProperties"].apply(partialParams));
    }
    invokeModifyWorkspaceState(partialParams) {
        this.boot();
        return this.client.modifyWorkspaceState(this.ops["ModifyWorkspaceState"].apply(partialParams));
    }
    invokeRebootWorkspaces(partialParams) {
        this.boot();
        return this.client.rebootWorkspaces(this.ops["RebootWorkspaces"].apply(partialParams));
    }
    invokeRebuildWorkspaces(partialParams) {
        this.boot();
        return this.client.rebuildWorkspaces(this.ops["RebuildWorkspaces"].apply(partialParams));
    }
    invokeRegisterWorkspaceDirectory(partialParams) {
        this.boot();
        return this.client.registerWorkspaceDirectory(this.ops["RegisterWorkspaceDirectory"].apply(partialParams));
    }
    invokeRestoreWorkspace(partialParams) {
        this.boot();
        return this.client.restoreWorkspace(this.ops["RestoreWorkspace"].apply(partialParams));
    }
    invokeRevokeIpRules(partialParams) {
        this.boot();
        return this.client.revokeIpRules(this.ops["RevokeIpRules"].apply(partialParams));
    }
    invokeStartWorkspaces(partialParams) {
        this.boot();
        return this.client.startWorkspaces(this.ops["StartWorkspaces"].apply(partialParams));
    }
    invokeStopWorkspaces(partialParams) {
        this.boot();
        return this.client.stopWorkspaces(this.ops["StopWorkspaces"].apply(partialParams));
    }
    invokeTerminateWorkspaces(partialParams) {
        this.boot();
        return this.client.terminateWorkspaces(this.ops["TerminateWorkspaces"].apply(partialParams));
    }
    invokeUpdateConnectClientAddIn(partialParams) {
        this.boot();
        return this.client.updateConnectClientAddIn(this.ops["UpdateConnectClientAddIn"].apply(partialParams));
    }
    invokeUpdateConnectionAliasPermission(partialParams) {
        this.boot();
        return this.client.updateConnectionAliasPermission(this.ops["UpdateConnectionAliasPermission"].apply(partialParams));
    }
    invokeUpdateRulesOfIpGroup(partialParams) {
        this.boot();
        return this.client.updateRulesOfIpGroup(this.ops["UpdateRulesOfIpGroup"].apply(partialParams));
    }
    invokeUpdateWorkspaceBundle(partialParams) {
        this.boot();
        return this.client.updateWorkspaceBundle(this.ops["UpdateWorkspaceBundle"].apply(partialParams));
    }
    invokeUpdateWorkspaceImagePermission(partialParams) {
        this.boot();
        return this.client.updateWorkspaceImagePermission(this.ops["UpdateWorkspaceImagePermission"].apply(partialParams));
    }
}
exports.default = default_1;
