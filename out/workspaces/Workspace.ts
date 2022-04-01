
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AssociateConnectionAliasRequest,
    AssociateIpGroupsRequest,
    AuthorizeIpRulesRequest,
    CopyWorkspaceImageRequest,
    CreateConnectClientAddInRequest,
    CreateConnectionAliasRequest,
    CreateIpGroupRequest,
    CreateTagsRequest,
    CreateUpdatedWorkspaceImageRequest,
    CreateWorkspaceBundleRequest,
    CreateWorkspacesRequest,
    DeleteConnectClientAddInRequest,
    DeleteConnectionAliasRequest,
    DeleteIpGroupRequest,
    DeleteTagsRequest,
    DeleteWorkspaceBundleRequest,
    DeleteWorkspaceImageRequest,
    DeregisterWorkspaceDirectoryRequest,
    DescribeAccountRequest,
    DescribeAccountModificationsRequest,
    DescribeClientPropertiesRequest,
    DescribeConnectClientAddInsRequest,
    DescribeConnectionAliasPermissionsRequest,
    DescribeConnectionAliasesRequest,
    DescribeIpGroupsRequest,
    DescribeTagsRequest,
    DescribeWorkspaceBundlesRequest,
    DescribeWorkspaceDirectoriesRequest,
    DescribeWorkspaceImagePermissionsRequest,
    DescribeWorkspaceImagesRequest,
    DescribeWorkspaceSnapshotsRequest,
    DescribeWorkspacesRequest,
    DescribeWorkspacesConnectionStatusRequest,
    DisassociateConnectionAliasRequest,
    DisassociateIpGroupsRequest,
    ImportWorkspaceImageRequest,
    ListAvailableManagementCidrRangesRequest,
    MigrateWorkspaceRequest,
    ModifyAccountRequest,
    ModifyClientPropertiesRequest,
    ModifySelfservicePermissionsRequest,
    ModifyWorkspaceAccessPropertiesRequest,
    ModifyWorkspaceCreationPropertiesRequest,
    ModifyWorkspacePropertiesRequest,
    ModifyWorkspaceStateRequest,
    RebootWorkspacesRequest,
    RebuildWorkspacesRequest,
    RegisterWorkspaceDirectoryRequest,
    RestoreWorkspaceRequest,
    RevokeIpRulesRequest,
    StartWorkspacesRequest,
    StopWorkspacesRequest,
    TerminateWorkspacesRequest,
    UpdateConnectClientAddInRequest,
    UpdateConnectionAliasPermissionRequest,
    UpdateRulesOfIpGroupRequest,
    UpdateWorkspaceBundleRequest,
    UpdateWorkspaceImagePermissionRequest,
    AssociateConnectionAliasResult,
    AssociateIpGroupsResult,
    AuthorizeIpRulesResult,
    CopyWorkspaceImageResult,
    CreateConnectClientAddInResult,
    CreateConnectionAliasResult,
    CreateIpGroupResult,
    CreateTagsResult,
    CreateUpdatedWorkspaceImageResult,
    CreateWorkspaceBundleResult,
    CreateWorkspacesResult,
    DeleteConnectClientAddInResult,
    DeleteConnectionAliasResult,
    DeleteIpGroupResult,
    DeleteTagsResult,
    DeleteWorkspaceBundleResult,
    DeleteWorkspaceImageResult,
    DeregisterWorkspaceDirectoryResult,
    DescribeAccountResult,
    DescribeAccountModificationsResult,
    DescribeClientPropertiesResult,
    DescribeConnectClientAddInsResult,
    DescribeConnectionAliasPermissionsResult,
    DescribeConnectionAliasesResult,
    DescribeIpGroupsResult,
    DescribeTagsResult,
    DescribeWorkspaceBundlesResult,
    DescribeWorkspaceDirectoriesResult,
    DescribeWorkspaceImagePermissionsResult,
    DescribeWorkspaceImagesResult,
    DescribeWorkspaceSnapshotsResult,
    DescribeWorkspacesResult,
    DescribeWorkspacesConnectionStatusResult,
    DisassociateConnectionAliasResult,
    DisassociateIpGroupsResult,
    ImportWorkspaceImageResult,
    ListAvailableManagementCidrRangesResult,
    MigrateWorkspaceResult,
    ModifyAccountResult,
    ModifyClientPropertiesResult,
    ModifySelfservicePermissionsResult,
    ModifyWorkspaceAccessPropertiesResult,
    ModifyWorkspaceCreationPropertiesResult,
    ModifyWorkspacePropertiesResult,
    ModifyWorkspaceStateResult,
    RebootWorkspacesResult,
    RebuildWorkspacesResult,
    RegisterWorkspaceDirectoryResult,
    RestoreWorkspaceResult,
    RevokeIpRulesResult,
    StartWorkspacesResult,
    StopWorkspacesResult,
    TerminateWorkspacesResult,
    UpdateConnectClientAddInResult,
    UpdateConnectionAliasPermissionResult,
    UpdateRulesOfIpGroupResult,
    UpdateWorkspaceBundleResult,
    UpdateWorkspaceImagePermissionResult
} from "aws-sdk/clients/workspaces";
const schema = require("../apis/workspaces-2015-04-08.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.workspaces.Workspace {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.workspaces.Workspace>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.WorkSpaces()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
        })
    }
    boot() {
        if (this.booted) {
          return;
        }
        Object.entries(this.capitalizedParams).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value.value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
        this.ops = getResourceOperations(this.capitalizedParams as any, schema);
        this.booted = true;
    }

    invokeAssociateConnectionAlias(partialParams: ToOptional<{
      [K in keyof AssociateConnectionAliasRequest]: (AssociateConnectionAliasRequest)[K]
    }>): Request<AssociateConnectionAliasResult, AWSError> {
        this.boot();
        return this.client.associateConnectionAlias(
          this.ops["AssociateConnectionAlias"].apply(partialParams)
        );
    }

    invokeAssociateIpGroups(partialParams: ToOptional<{
      [K in keyof AssociateIpGroupsRequest & keyof Omit<AssociateIpGroupsRequest, "DirectoryId">]: (AssociateIpGroupsRequest)[K]
    }>): Request<AssociateIpGroupsResult, AWSError> {
        this.boot();
        return this.client.associateIpGroups(
          this.ops["AssociateIpGroups"].apply(partialParams)
        );
    }

    invokeAuthorizeIpRules(partialParams: ToOptional<{
      [K in keyof AuthorizeIpRulesRequest]: (AuthorizeIpRulesRequest)[K]
    }>): Request<AuthorizeIpRulesResult, AWSError> {
        this.boot();
        return this.client.authorizeIpRules(
          this.ops["AuthorizeIpRules"].apply(partialParams)
        );
    }

    invokeCopyWorkspaceImage(partialParams: ToOptional<{
      [K in keyof CopyWorkspaceImageRequest]: (CopyWorkspaceImageRequest)[K]
    }>): Request<CopyWorkspaceImageResult, AWSError> {
        this.boot();
        return this.client.copyWorkspaceImage(
          this.ops["CopyWorkspaceImage"].apply(partialParams)
        );
    }

    invokeCreateConnectClientAddIn(partialParams: ToOptional<{
      [K in keyof CreateConnectClientAddInRequest]: (CreateConnectClientAddInRequest)[K]
    }>): Request<CreateConnectClientAddInResult, AWSError> {
        this.boot();
        return this.client.createConnectClientAddIn(
          this.ops["CreateConnectClientAddIn"].apply(partialParams)
        );
    }

    invokeCreateConnectionAlias(partialParams: ToOptional<{
      [K in keyof CreateConnectionAliasRequest]: (CreateConnectionAliasRequest)[K]
    }>): Request<CreateConnectionAliasResult, AWSError> {
        this.boot();
        return this.client.createConnectionAlias(
          this.ops["CreateConnectionAlias"].apply(partialParams)
        );
    }

    invokeCreateIpGroup(partialParams: ToOptional<{
      [K in keyof CreateIpGroupRequest]: (CreateIpGroupRequest)[K]
    }>): Request<CreateIpGroupResult, AWSError> {
        this.boot();
        return this.client.createIpGroup(
          this.ops["CreateIpGroup"].apply(partialParams)
        );
    }

    invokeCreateTags(partialParams: ToOptional<{
      [K in keyof CreateTagsRequest]: (CreateTagsRequest)[K]
    }>): Request<CreateTagsResult, AWSError> {
        this.boot();
        return this.client.createTags(
          this.ops["CreateTags"].apply(partialParams)
        );
    }

    invokeCreateUpdatedWorkspaceImage(partialParams: ToOptional<{
      [K in keyof CreateUpdatedWorkspaceImageRequest]: (CreateUpdatedWorkspaceImageRequest)[K]
    }>): Request<CreateUpdatedWorkspaceImageResult, AWSError> {
        this.boot();
        return this.client.createUpdatedWorkspaceImage(
          this.ops["CreateUpdatedWorkspaceImage"].apply(partialParams)
        );
    }

    invokeCreateWorkspaceBundle(partialParams: ToOptional<{
      [K in keyof CreateWorkspaceBundleRequest]: (CreateWorkspaceBundleRequest)[K]
    }>): Request<CreateWorkspaceBundleResult, AWSError> {
        this.boot();
        return this.client.createWorkspaceBundle(
          this.ops["CreateWorkspaceBundle"].apply(partialParams)
        );
    }

    invokeCreateWorkspaces(partialParams: ToOptional<{
      [K in keyof CreateWorkspacesRequest]: (CreateWorkspacesRequest)[K]
    }>): Request<CreateWorkspacesResult, AWSError> {
        this.boot();
        return this.client.createWorkspaces(
          this.ops["CreateWorkspaces"].apply(partialParams)
        );
    }

    invokeDeleteConnectClientAddIn(partialParams: ToOptional<{
      [K in keyof DeleteConnectClientAddInRequest]: (DeleteConnectClientAddInRequest)[K]
    }>): Request<DeleteConnectClientAddInResult, AWSError> {
        this.boot();
        return this.client.deleteConnectClientAddIn(
          this.ops["DeleteConnectClientAddIn"].apply(partialParams)
        );
    }

    invokeDeleteConnectionAlias(partialParams: ToOptional<{
      [K in keyof DeleteConnectionAliasRequest]: (DeleteConnectionAliasRequest)[K]
    }>): Request<DeleteConnectionAliasResult, AWSError> {
        this.boot();
        return this.client.deleteConnectionAlias(
          this.ops["DeleteConnectionAlias"].apply(partialParams)
        );
    }

    invokeDeleteIpGroup(partialParams: ToOptional<{
      [K in keyof DeleteIpGroupRequest]: (DeleteIpGroupRequest)[K]
    }>): Request<DeleteIpGroupResult, AWSError> {
        this.boot();
        return this.client.deleteIpGroup(
          this.ops["DeleteIpGroup"].apply(partialParams)
        );
    }

    invokeDeleteTags(partialParams: ToOptional<{
      [K in keyof DeleteTagsRequest]: (DeleteTagsRequest)[K]
    }>): Request<DeleteTagsResult, AWSError> {
        this.boot();
        return this.client.deleteTags(
          this.ops["DeleteTags"].apply(partialParams)
        );
    }

    invokeDeleteWorkspaceBundle(partialParams: ToOptional<{
      [K in keyof DeleteWorkspaceBundleRequest]: (DeleteWorkspaceBundleRequest)[K]
    }>): Request<DeleteWorkspaceBundleResult, AWSError> {
        this.boot();
        return this.client.deleteWorkspaceBundle(
          this.ops["DeleteWorkspaceBundle"].apply(partialParams)
        );
    }

    invokeDeleteWorkspaceImage(partialParams: ToOptional<{
      [K in keyof DeleteWorkspaceImageRequest]: (DeleteWorkspaceImageRequest)[K]
    }>): Request<DeleteWorkspaceImageResult, AWSError> {
        this.boot();
        return this.client.deleteWorkspaceImage(
          this.ops["DeleteWorkspaceImage"].apply(partialParams)
        );
    }

    invokeDeregisterWorkspaceDirectory(partialParams: ToOptional<{
      [K in keyof DeregisterWorkspaceDirectoryRequest & keyof Omit<DeregisterWorkspaceDirectoryRequest, "DirectoryId">]: (DeregisterWorkspaceDirectoryRequest)[K]
    }>): Request<DeregisterWorkspaceDirectoryResult, AWSError> {
        this.boot();
        return this.client.deregisterWorkspaceDirectory(
          this.ops["DeregisterWorkspaceDirectory"].apply(partialParams)
        );
    }

    invokeDescribeAccount(partialParams: ToOptional<{
      [K in keyof DescribeAccountRequest]: (DescribeAccountRequest)[K]
    }>): Request<DescribeAccountResult, AWSError> {
        this.boot();
        return this.client.describeAccount(
          this.ops["DescribeAccount"].apply(partialParams)
        );
    }

    invokeDescribeAccountModifications(partialParams: ToOptional<{
      [K in keyof DescribeAccountModificationsRequest]: (DescribeAccountModificationsRequest)[K]
    }>): Request<DescribeAccountModificationsResult, AWSError> {
        this.boot();
        return this.client.describeAccountModifications(
          this.ops["DescribeAccountModifications"].apply(partialParams)
        );
    }

    invokeDescribeClientProperties(partialParams: ToOptional<{
      [K in keyof DescribeClientPropertiesRequest]: (DescribeClientPropertiesRequest)[K]
    }>): Request<DescribeClientPropertiesResult, AWSError> {
        this.boot();
        return this.client.describeClientProperties(
          this.ops["DescribeClientProperties"].apply(partialParams)
        );
    }

    invokeDescribeConnectClientAddIns(partialParams: ToOptional<{
      [K in keyof DescribeConnectClientAddInsRequest]: (DescribeConnectClientAddInsRequest)[K]
    }>): Request<DescribeConnectClientAddInsResult, AWSError> {
        this.boot();
        return this.client.describeConnectClientAddIns(
          this.ops["DescribeConnectClientAddIns"].apply(partialParams)
        );
    }

    invokeDescribeConnectionAliasPermissions(partialParams: ToOptional<{
      [K in keyof DescribeConnectionAliasPermissionsRequest]: (DescribeConnectionAliasPermissionsRequest)[K]
    }>): Request<DescribeConnectionAliasPermissionsResult, AWSError> {
        this.boot();
        return this.client.describeConnectionAliasPermissions(
          this.ops["DescribeConnectionAliasPermissions"].apply(partialParams)
        );
    }

    invokeDescribeConnectionAliases(partialParams: ToOptional<{
      [K in keyof DescribeConnectionAliasesRequest]: (DescribeConnectionAliasesRequest)[K]
    }>): Request<DescribeConnectionAliasesResult, AWSError> {
        this.boot();
        return this.client.describeConnectionAliases(
          this.ops["DescribeConnectionAliases"].apply(partialParams)
        );
    }

    invokeDescribeIpGroups(partialParams: ToOptional<{
      [K in keyof DescribeIpGroupsRequest]: (DescribeIpGroupsRequest)[K]
    }>): Request<DescribeIpGroupsResult, AWSError> {
        this.boot();
        return this.client.describeIpGroups(
          this.ops["DescribeIpGroups"].apply(partialParams)
        );
    }

    invokeDescribeTags(partialParams: ToOptional<{
      [K in keyof DescribeTagsRequest]: (DescribeTagsRequest)[K]
    }>): Request<DescribeTagsResult, AWSError> {
        this.boot();
        return this.client.describeTags(
          this.ops["DescribeTags"].apply(partialParams)
        );
    }

    invokeDescribeWorkspaceBundles(partialParams: ToOptional<{
      [K in keyof DescribeWorkspaceBundlesRequest]: (DescribeWorkspaceBundlesRequest)[K]
    }>): Request<DescribeWorkspaceBundlesResult, AWSError> {
        this.boot();
        return this.client.describeWorkspaceBundles(
          this.ops["DescribeWorkspaceBundles"].apply(partialParams)
        );
    }

    invokeDescribeWorkspaceDirectories(partialParams: ToOptional<{
      [K in keyof DescribeWorkspaceDirectoriesRequest]: (DescribeWorkspaceDirectoriesRequest)[K]
    }>): Request<DescribeWorkspaceDirectoriesResult, AWSError> {
        this.boot();
        return this.client.describeWorkspaceDirectories(
          this.ops["DescribeWorkspaceDirectories"].apply(partialParams)
        );
    }

    invokeDescribeWorkspaceImagePermissions(partialParams: ToOptional<{
      [K in keyof DescribeWorkspaceImagePermissionsRequest]: (DescribeWorkspaceImagePermissionsRequest)[K]
    }>): Request<DescribeWorkspaceImagePermissionsResult, AWSError> {
        this.boot();
        return this.client.describeWorkspaceImagePermissions(
          this.ops["DescribeWorkspaceImagePermissions"].apply(partialParams)
        );
    }

    invokeDescribeWorkspaceImages(partialParams: ToOptional<{
      [K in keyof DescribeWorkspaceImagesRequest]: (DescribeWorkspaceImagesRequest)[K]
    }>): Request<DescribeWorkspaceImagesResult, AWSError> {
        this.boot();
        return this.client.describeWorkspaceImages(
          this.ops["DescribeWorkspaceImages"].apply(partialParams)
        );
    }

    invokeDescribeWorkspaceSnapshots(partialParams: ToOptional<{
      [K in keyof DescribeWorkspaceSnapshotsRequest]: (DescribeWorkspaceSnapshotsRequest)[K]
    }>): Request<DescribeWorkspaceSnapshotsResult, AWSError> {
        this.boot();
        return this.client.describeWorkspaceSnapshots(
          this.ops["DescribeWorkspaceSnapshots"].apply(partialParams)
        );
    }

    invokeDescribeWorkspaces(partialParams: ToOptional<{
      [K in keyof DescribeWorkspacesRequest]: (DescribeWorkspacesRequest)[K]
    }>): Request<DescribeWorkspacesResult, AWSError> {
        this.boot();
        return this.client.describeWorkspaces(
          this.ops["DescribeWorkspaces"].apply(partialParams)
        );
    }

    invokeDescribeWorkspacesConnectionStatus(partialParams: ToOptional<{
      [K in keyof DescribeWorkspacesConnectionStatusRequest]: (DescribeWorkspacesConnectionStatusRequest)[K]
    }>): Request<DescribeWorkspacesConnectionStatusResult, AWSError> {
        this.boot();
        return this.client.describeWorkspacesConnectionStatus(
          this.ops["DescribeWorkspacesConnectionStatus"].apply(partialParams)
        );
    }

    invokeDisassociateConnectionAlias(partialParams: ToOptional<{
      [K in keyof DisassociateConnectionAliasRequest]: (DisassociateConnectionAliasRequest)[K]
    }>): Request<DisassociateConnectionAliasResult, AWSError> {
        this.boot();
        return this.client.disassociateConnectionAlias(
          this.ops["DisassociateConnectionAlias"].apply(partialParams)
        );
    }

    invokeDisassociateIpGroups(partialParams: ToOptional<{
      [K in keyof DisassociateIpGroupsRequest & keyof Omit<DisassociateIpGroupsRequest, "DirectoryId">]: (DisassociateIpGroupsRequest)[K]
    }>): Request<DisassociateIpGroupsResult, AWSError> {
        this.boot();
        return this.client.disassociateIpGroups(
          this.ops["DisassociateIpGroups"].apply(partialParams)
        );
    }

    invokeImportWorkspaceImage(partialParams: ToOptional<{
      [K in keyof ImportWorkspaceImageRequest]: (ImportWorkspaceImageRequest)[K]
    }>): Request<ImportWorkspaceImageResult, AWSError> {
        this.boot();
        return this.client.importWorkspaceImage(
          this.ops["ImportWorkspaceImage"].apply(partialParams)
        );
    }

    invokeListAvailableManagementCidrRanges(partialParams: ToOptional<{
      [K in keyof ListAvailableManagementCidrRangesRequest]: (ListAvailableManagementCidrRangesRequest)[K]
    }>): Request<ListAvailableManagementCidrRangesResult, AWSError> {
        this.boot();
        return this.client.listAvailableManagementCidrRanges(
          this.ops["ListAvailableManagementCidrRanges"].apply(partialParams)
        );
    }

    invokeMigrateWorkspace(partialParams: ToOptional<{
      [K in keyof MigrateWorkspaceRequest & keyof Omit<MigrateWorkspaceRequest, "BundleId">]: (MigrateWorkspaceRequest)[K]
    }>): Request<MigrateWorkspaceResult, AWSError> {
        this.boot();
        return this.client.migrateWorkspace(
          this.ops["MigrateWorkspace"].apply(partialParams)
        );
    }

    invokeModifyAccount(partialParams: ToOptional<{
      [K in keyof ModifyAccountRequest]: (ModifyAccountRequest)[K]
    }>): Request<ModifyAccountResult, AWSError> {
        this.boot();
        return this.client.modifyAccount(
          this.ops["ModifyAccount"].apply(partialParams)
        );
    }

    invokeModifyClientProperties(partialParams: ToOptional<{
      [K in keyof ModifyClientPropertiesRequest]: (ModifyClientPropertiesRequest)[K]
    }>): Request<ModifyClientPropertiesResult, AWSError> {
        this.boot();
        return this.client.modifyClientProperties(
          this.ops["ModifyClientProperties"].apply(partialParams)
        );
    }

    invokeModifySelfservicePermissions(partialParams: ToOptional<{
      [K in keyof ModifySelfservicePermissionsRequest]: (ModifySelfservicePermissionsRequest)[K]
    }>): Request<ModifySelfservicePermissionsResult, AWSError> {
        this.boot();
        return this.client.modifySelfservicePermissions(
          this.ops["ModifySelfservicePermissions"].apply(partialParams)
        );
    }

    invokeModifyWorkspaceAccessProperties(partialParams: ToOptional<{
      [K in keyof ModifyWorkspaceAccessPropertiesRequest]: (ModifyWorkspaceAccessPropertiesRequest)[K]
    }>): Request<ModifyWorkspaceAccessPropertiesResult, AWSError> {
        this.boot();
        return this.client.modifyWorkspaceAccessProperties(
          this.ops["ModifyWorkspaceAccessProperties"].apply(partialParams)
        );
    }

    invokeModifyWorkspaceCreationProperties(partialParams: ToOptional<{
      [K in keyof ModifyWorkspaceCreationPropertiesRequest]: (ModifyWorkspaceCreationPropertiesRequest)[K]
    }>): Request<ModifyWorkspaceCreationPropertiesResult, AWSError> {
        this.boot();
        return this.client.modifyWorkspaceCreationProperties(
          this.ops["ModifyWorkspaceCreationProperties"].apply(partialParams)
        );
    }

    invokeModifyWorkspaceProperties(partialParams: ToOptional<{
      [K in keyof ModifyWorkspacePropertiesRequest]: (ModifyWorkspacePropertiesRequest)[K]
    }>): Request<ModifyWorkspacePropertiesResult, AWSError> {
        this.boot();
        return this.client.modifyWorkspaceProperties(
          this.ops["ModifyWorkspaceProperties"].apply(partialParams)
        );
    }

    invokeModifyWorkspaceState(partialParams: ToOptional<{
      [K in keyof ModifyWorkspaceStateRequest & keyof Omit<ModifyWorkspaceStateRequest, "WorkspaceState">]: (ModifyWorkspaceStateRequest)[K]
    }>): Request<ModifyWorkspaceStateResult, AWSError> {
        this.boot();
        return this.client.modifyWorkspaceState(
          this.ops["ModifyWorkspaceState"].apply(partialParams)
        );
    }

    invokeRebootWorkspaces(partialParams: ToOptional<{
      [K in keyof RebootWorkspacesRequest]: (RebootWorkspacesRequest)[K]
    }>): Request<RebootWorkspacesResult, AWSError> {
        this.boot();
        return this.client.rebootWorkspaces(
          this.ops["RebootWorkspaces"].apply(partialParams)
        );
    }

    invokeRebuildWorkspaces(partialParams: ToOptional<{
      [K in keyof RebuildWorkspacesRequest]: (RebuildWorkspacesRequest)[K]
    }>): Request<RebuildWorkspacesResult, AWSError> {
        this.boot();
        return this.client.rebuildWorkspaces(
          this.ops["RebuildWorkspaces"].apply(partialParams)
        );
    }

    invokeRegisterWorkspaceDirectory(partialParams: ToOptional<{
      [K in keyof RegisterWorkspaceDirectoryRequest & keyof Omit<RegisterWorkspaceDirectoryRequest, "DirectoryId">]: (RegisterWorkspaceDirectoryRequest)[K]
    }>): Request<RegisterWorkspaceDirectoryResult, AWSError> {
        this.boot();
        return this.client.registerWorkspaceDirectory(
          this.ops["RegisterWorkspaceDirectory"].apply(partialParams)
        );
    }

    invokeRestoreWorkspace(partialParams: ToOptional<{
      [K in keyof RestoreWorkspaceRequest]: (RestoreWorkspaceRequest)[K]
    }>): Request<RestoreWorkspaceResult, AWSError> {
        this.boot();
        return this.client.restoreWorkspace(
          this.ops["RestoreWorkspace"].apply(partialParams)
        );
    }

    invokeRevokeIpRules(partialParams: ToOptional<{
      [K in keyof RevokeIpRulesRequest]: (RevokeIpRulesRequest)[K]
    }>): Request<RevokeIpRulesResult, AWSError> {
        this.boot();
        return this.client.revokeIpRules(
          this.ops["RevokeIpRules"].apply(partialParams)
        );
    }

    invokeStartWorkspaces(partialParams: ToOptional<{
      [K in keyof StartWorkspacesRequest]: (StartWorkspacesRequest)[K]
    }>): Request<StartWorkspacesResult, AWSError> {
        this.boot();
        return this.client.startWorkspaces(
          this.ops["StartWorkspaces"].apply(partialParams)
        );
    }

    invokeStopWorkspaces(partialParams: ToOptional<{
      [K in keyof StopWorkspacesRequest]: (StopWorkspacesRequest)[K]
    }>): Request<StopWorkspacesResult, AWSError> {
        this.boot();
        return this.client.stopWorkspaces(
          this.ops["StopWorkspaces"].apply(partialParams)
        );
    }

    invokeTerminateWorkspaces(partialParams: ToOptional<{
      [K in keyof TerminateWorkspacesRequest]: (TerminateWorkspacesRequest)[K]
    }>): Request<TerminateWorkspacesResult, AWSError> {
        this.boot();
        return this.client.terminateWorkspaces(
          this.ops["TerminateWorkspaces"].apply(partialParams)
        );
    }

    invokeUpdateConnectClientAddIn(partialParams: ToOptional<{
      [K in keyof UpdateConnectClientAddInRequest]: (UpdateConnectClientAddInRequest)[K]
    }>): Request<UpdateConnectClientAddInResult, AWSError> {
        this.boot();
        return this.client.updateConnectClientAddIn(
          this.ops["UpdateConnectClientAddIn"].apply(partialParams)
        );
    }

    invokeUpdateConnectionAliasPermission(partialParams: ToOptional<{
      [K in keyof UpdateConnectionAliasPermissionRequest]: (UpdateConnectionAliasPermissionRequest)[K]
    }>): Request<UpdateConnectionAliasPermissionResult, AWSError> {
        this.boot();
        return this.client.updateConnectionAliasPermission(
          this.ops["UpdateConnectionAliasPermission"].apply(partialParams)
        );
    }

    invokeUpdateRulesOfIpGroup(partialParams: ToOptional<{
      [K in keyof UpdateRulesOfIpGroupRequest]: (UpdateRulesOfIpGroupRequest)[K]
    }>): Request<UpdateRulesOfIpGroupResult, AWSError> {
        this.boot();
        return this.client.updateRulesOfIpGroup(
          this.ops["UpdateRulesOfIpGroup"].apply(partialParams)
        );
    }

    invokeUpdateWorkspaceBundle(partialParams: ToOptional<{
      [K in keyof UpdateWorkspaceBundleRequest]: (UpdateWorkspaceBundleRequest)[K]
    }>): Request<UpdateWorkspaceBundleResult, AWSError> {
        this.boot();
        return this.client.updateWorkspaceBundle(
          this.ops["UpdateWorkspaceBundle"].apply(partialParams)
        );
    }

    invokeUpdateWorkspaceImagePermission(partialParams: ToOptional<{
      [K in keyof UpdateWorkspaceImagePermissionRequest]: (UpdateWorkspaceImagePermissionRequest)[K]
    }>): Request<UpdateWorkspaceImagePermissionResult, AWSError> {
        this.boot();
        return this.client.updateWorkspaceImagePermission(
          this.ops["UpdateWorkspaceImagePermission"].apply(partialParams)
        );
    }
}