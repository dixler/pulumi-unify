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
        this.client = new awssdk.WorkSpaces();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
    }
    boot() {
        Object.entries(this.capitalizedParams).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value.value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
        this.ops = (0, parse_1.getResourceOperations)(this.capitalizedParams, schema, this.client);
    }
    invokeAssociateConnectionAlias(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateConnectionAlias(this.ops["AssociateConnectionAlias"].applicator.apply(partialParams));
    }
    invokeAssociateIpGroups(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateIpGroups(this.ops["AssociateIpGroups"].applicator.apply(partialParams));
    }
    invokeAuthorizeIpRules(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.authorizeIpRules(this.ops["AuthorizeIpRules"].applicator.apply(partialParams));
    }
    invokeCopyWorkspaceImage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copyWorkspaceImage(this.ops["CopyWorkspaceImage"].applicator.apply(partialParams));
    }
    invokeCreateConnectClientAddIn(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createConnectClientAddIn(this.ops["CreateConnectClientAddIn"].applicator.apply(partialParams));
    }
    invokeCreateConnectionAlias(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createConnectionAlias(this.ops["CreateConnectionAlias"].applicator.apply(partialParams));
    }
    invokeCreateIpGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createIpGroup(this.ops["CreateIpGroup"].applicator.apply(partialParams));
    }
    invokeCreateTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTags(this.ops["CreateTags"].applicator.apply(partialParams));
    }
    invokeCreateUpdatedWorkspaceImage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUpdatedWorkspaceImage(this.ops["CreateUpdatedWorkspaceImage"].applicator.apply(partialParams));
    }
    invokeCreateWorkspaceBundle(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createWorkspaceBundle(this.ops["CreateWorkspaceBundle"].applicator.apply(partialParams));
    }
    invokeCreateWorkspaces(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createWorkspaces(this.ops["CreateWorkspaces"].applicator.apply(partialParams));
    }
    invokeDeleteConnectClientAddIn(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteConnectClientAddIn(this.ops["DeleteConnectClientAddIn"].applicator.apply(partialParams));
    }
    invokeDeleteConnectionAlias(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteConnectionAlias(this.ops["DeleteConnectionAlias"].applicator.apply(partialParams));
    }
    invokeDeleteIpGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteIpGroup(this.ops["DeleteIpGroup"].applicator.apply(partialParams));
    }
    invokeDeleteTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTags(this.ops["DeleteTags"].applicator.apply(partialParams));
    }
    invokeDeleteWorkspaceImage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteWorkspaceImage(this.ops["DeleteWorkspaceImage"].applicator.apply(partialParams));
    }
    invokeDeregisterWorkspaceDirectory(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterWorkspaceDirectory(this.ops["DeregisterWorkspaceDirectory"].applicator.apply(partialParams));
    }
    invokeDescribeClientProperties(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeClientProperties(this.ops["DescribeClientProperties"].applicator.apply(partialParams));
    }
    invokeDescribeConnectClientAddIns(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeConnectClientAddIns(this.ops["DescribeConnectClientAddIns"].applicator.apply(partialParams));
    }
    invokeDescribeConnectionAliasPermissions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeConnectionAliasPermissions(this.ops["DescribeConnectionAliasPermissions"].applicator.apply(partialParams));
    }
    invokeDescribeTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTags(this.ops["DescribeTags"].applicator.apply(partialParams));
    }
    invokeDescribeWorkspaceImagePermissions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeWorkspaceImagePermissions(this.ops["DescribeWorkspaceImagePermissions"].applicator.apply(partialParams));
    }
    invokeDescribeWorkspaceSnapshots(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeWorkspaceSnapshots(this.ops["DescribeWorkspaceSnapshots"].applicator.apply(partialParams));
    }
    invokeDisassociateConnectionAlias(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateConnectionAlias(this.ops["DisassociateConnectionAlias"].applicator.apply(partialParams));
    }
    invokeDisassociateIpGroups(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateIpGroups(this.ops["DisassociateIpGroups"].applicator.apply(partialParams));
    }
    invokeImportWorkspaceImage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importWorkspaceImage(this.ops["ImportWorkspaceImage"].applicator.apply(partialParams));
    }
    invokeListAvailableManagementCidrRanges(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAvailableManagementCidrRanges(this.ops["ListAvailableManagementCidrRanges"].applicator.apply(partialParams));
    }
    invokeMigrateWorkspace(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.migrateWorkspace(this.ops["MigrateWorkspace"].applicator.apply(partialParams));
    }
    invokeModifyClientProperties(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyClientProperties(this.ops["ModifyClientProperties"].applicator.apply(partialParams));
    }
    invokeModifySelfservicePermissions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifySelfservicePermissions(this.ops["ModifySelfservicePermissions"].applicator.apply(partialParams));
    }
    invokeModifyWorkspaceAccessProperties(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyWorkspaceAccessProperties(this.ops["ModifyWorkspaceAccessProperties"].applicator.apply(partialParams));
    }
    invokeModifyWorkspaceCreationProperties(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyWorkspaceCreationProperties(this.ops["ModifyWorkspaceCreationProperties"].applicator.apply(partialParams));
    }
    invokeModifyWorkspaceProperties(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyWorkspaceProperties(this.ops["ModifyWorkspaceProperties"].applicator.apply(partialParams));
    }
    invokeModifyWorkspaceState(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyWorkspaceState(this.ops["ModifyWorkspaceState"].applicator.apply(partialParams));
    }
    invokeRebootWorkspaces(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rebootWorkspaces(this.ops["RebootWorkspaces"].applicator.apply(partialParams));
    }
    invokeRebuildWorkspaces(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rebuildWorkspaces(this.ops["RebuildWorkspaces"].applicator.apply(partialParams));
    }
    invokeRegisterWorkspaceDirectory(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerWorkspaceDirectory(this.ops["RegisterWorkspaceDirectory"].applicator.apply(partialParams));
    }
    invokeRestoreWorkspace(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreWorkspace(this.ops["RestoreWorkspace"].applicator.apply(partialParams));
    }
    invokeRevokeIpRules(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.revokeIpRules(this.ops["RevokeIpRules"].applicator.apply(partialParams));
    }
    invokeStartWorkspaces(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startWorkspaces(this.ops["StartWorkspaces"].applicator.apply(partialParams));
    }
    invokeStopWorkspaces(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopWorkspaces(this.ops["StopWorkspaces"].applicator.apply(partialParams));
    }
    invokeTerminateWorkspaces(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.terminateWorkspaces(this.ops["TerminateWorkspaces"].applicator.apply(partialParams));
    }
    invokeUpdateConnectClientAddIn(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateConnectClientAddIn(this.ops["UpdateConnectClientAddIn"].applicator.apply(partialParams));
    }
    invokeUpdateConnectionAliasPermission(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateConnectionAliasPermission(this.ops["UpdateConnectionAliasPermission"].applicator.apply(partialParams));
    }
    invokeUpdateRulesOfIpGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRulesOfIpGroup(this.ops["UpdateRulesOfIpGroup"].applicator.apply(partialParams));
    }
    invokeUpdateWorkspaceImagePermission(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateWorkspaceImagePermission(this.ops["UpdateWorkspaceImagePermission"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
