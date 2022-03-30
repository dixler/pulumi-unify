
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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
    DeleteWorkspaceImageRequest,
    DeregisterWorkspaceDirectoryRequest,
    DescribeClientPropertiesRequest,
    DescribeConnectClientAddInsRequest,
    DescribeConnectionAliasPermissionsRequest,
    DescribeTagsRequest,
    DescribeWorkspaceImagePermissionsRequest,
    DescribeWorkspaceSnapshotsRequest,
    DisassociateConnectionAliasRequest,
    DisassociateIpGroupsRequest,
    ImportWorkspaceImageRequest,
    ListAvailableManagementCidrRangesRequest,
    MigrateWorkspaceRequest,
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
    DeleteWorkspaceImageResult,
    DeregisterWorkspaceDirectoryResult,
    DescribeClientPropertiesResult,
    DescribeConnectClientAddInsResult,
    DescribeConnectionAliasPermissionsResult,
    DescribeTagsResult,
    DescribeWorkspaceImagePermissionsResult,
    DescribeWorkspaceSnapshotsResult,
    DisassociateConnectionAliasResult,
    DisassociateIpGroupsResult,
    ImportWorkspaceImageResult,
    ListAvailableManagementCidrRangesResult,
    MigrateWorkspaceResult,
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
    UpdateWorkspaceImagePermissionResult
} from "aws-sdk/clients/workspaces";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.workspaces.Workspace {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.workspaces.Workspace>) {
        super(...args)
        this.client = new awssdk.WorkSpaces()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/workspaces-2015-04-08.normal.json"), this.client)
    }

    invokeAssociateConnectionAlias(partialParams: ToOptional<{
      [K in keyof AssociateConnectionAliasRequest & keyof AssociateConnectionAliasRequest & keyof AssociateConnectionAliasRequest & keyof AssociateConnectionAliasRequest & keyof AssociateConnectionAliasRequest & keyof AssociateConnectionAliasRequest & keyof AssociateConnectionAliasRequest]: (AssociateConnectionAliasRequest & AssociateConnectionAliasRequest & AssociateConnectionAliasRequest & AssociateConnectionAliasRequest & AssociateConnectionAliasRequest & AssociateConnectionAliasRequest & AssociateConnectionAliasRequest)[K]
    }>): AssociateConnectionAliasResult {
        return this.client.associateConnectionAlias(
            this.ops["AssociateConnectionAlias"].apply(partialParams)
        );
    }

    invokeAssociateIpGroups(partialParams: ToOptional<{
      [K in keyof AssociateIpGroupsRequest & keyof AssociateIpGroupsRequest & keyof AssociateIpGroupsRequest & keyof AssociateIpGroupsRequest & keyof AssociateIpGroupsRequest & keyof AssociateIpGroupsRequest & keyof AssociateIpGroupsRequest]: (AssociateIpGroupsRequest & AssociateIpGroupsRequest & AssociateIpGroupsRequest & AssociateIpGroupsRequest & AssociateIpGroupsRequest & AssociateIpGroupsRequest & AssociateIpGroupsRequest)[K]
    }>): AssociateIpGroupsResult {
        return this.client.associateIpGroups(
            this.ops["AssociateIpGroups"].apply(partialParams)
        );
    }

    invokeAuthorizeIpRules(partialParams: ToOptional<{
      [K in keyof AuthorizeIpRulesRequest & keyof AuthorizeIpRulesRequest & keyof AuthorizeIpRulesRequest & keyof AuthorizeIpRulesRequest & keyof AuthorizeIpRulesRequest & keyof AuthorizeIpRulesRequest & keyof AuthorizeIpRulesRequest]: (AuthorizeIpRulesRequest & AuthorizeIpRulesRequest & AuthorizeIpRulesRequest & AuthorizeIpRulesRequest & AuthorizeIpRulesRequest & AuthorizeIpRulesRequest & AuthorizeIpRulesRequest)[K]
    }>): AuthorizeIpRulesResult {
        return this.client.authorizeIpRules(
            this.ops["AuthorizeIpRules"].apply(partialParams)
        );
    }

    invokeCopyWorkspaceImage(partialParams: ToOptional<{
      [K in keyof CopyWorkspaceImageRequest & keyof CopyWorkspaceImageRequest & keyof CopyWorkspaceImageRequest & keyof CopyWorkspaceImageRequest & keyof CopyWorkspaceImageRequest & keyof CopyWorkspaceImageRequest & keyof CopyWorkspaceImageRequest]: (CopyWorkspaceImageRequest & CopyWorkspaceImageRequest & CopyWorkspaceImageRequest & CopyWorkspaceImageRequest & CopyWorkspaceImageRequest & CopyWorkspaceImageRequest & CopyWorkspaceImageRequest)[K]
    }>): CopyWorkspaceImageResult {
        return this.client.copyWorkspaceImage(
            this.ops["CopyWorkspaceImage"].apply(partialParams)
        );
    }

    invokeCreateConnectClientAddIn(partialParams: ToOptional<{
      [K in keyof CreateConnectClientAddInRequest & keyof CreateConnectClientAddInRequest & keyof CreateConnectClientAddInRequest & keyof CreateConnectClientAddInRequest & keyof CreateConnectClientAddInRequest & keyof CreateConnectClientAddInRequest & keyof CreateConnectClientAddInRequest]: (CreateConnectClientAddInRequest & CreateConnectClientAddInRequest & CreateConnectClientAddInRequest & CreateConnectClientAddInRequest & CreateConnectClientAddInRequest & CreateConnectClientAddInRequest & CreateConnectClientAddInRequest)[K]
    }>): CreateConnectClientAddInResult {
        return this.client.createConnectClientAddIn(
            this.ops["CreateConnectClientAddIn"].apply(partialParams)
        );
    }

    invokeCreateConnectionAlias(partialParams: ToOptional<{
      [K in keyof CreateConnectionAliasRequest & keyof CreateConnectionAliasRequest & keyof CreateConnectionAliasRequest & keyof CreateConnectionAliasRequest & keyof CreateConnectionAliasRequest & keyof CreateConnectionAliasRequest & keyof CreateConnectionAliasRequest]: (CreateConnectionAliasRequest & CreateConnectionAliasRequest & CreateConnectionAliasRequest & CreateConnectionAliasRequest & CreateConnectionAliasRequest & CreateConnectionAliasRequest & CreateConnectionAliasRequest)[K]
    }>): CreateConnectionAliasResult {
        return this.client.createConnectionAlias(
            this.ops["CreateConnectionAlias"].apply(partialParams)
        );
    }

    invokeCreateIpGroup(partialParams: ToOptional<{
      [K in keyof CreateIpGroupRequest & keyof CreateIpGroupRequest & keyof CreateIpGroupRequest & keyof CreateIpGroupRequest & keyof CreateIpGroupRequest & keyof CreateIpGroupRequest & keyof CreateIpGroupRequest]: (CreateIpGroupRequest & CreateIpGroupRequest & CreateIpGroupRequest & CreateIpGroupRequest & CreateIpGroupRequest & CreateIpGroupRequest & CreateIpGroupRequest)[K]
    }>): CreateIpGroupResult {
        return this.client.createIpGroup(
            this.ops["CreateIpGroup"].apply(partialParams)
        );
    }

    invokeCreateTags(partialParams: ToOptional<{
      [K in keyof CreateTagsRequest & keyof CreateTagsRequest & keyof CreateTagsRequest & keyof CreateTagsRequest & keyof CreateTagsRequest & keyof CreateTagsRequest & keyof CreateTagsRequest]: (CreateTagsRequest & CreateTagsRequest & CreateTagsRequest & CreateTagsRequest & CreateTagsRequest & CreateTagsRequest & CreateTagsRequest)[K]
    }>): CreateTagsResult {
        return this.client.createTags(
            this.ops["CreateTags"].apply(partialParams)
        );
    }

    invokeCreateUpdatedWorkspaceImage(partialParams: ToOptional<{
      [K in keyof CreateUpdatedWorkspaceImageRequest & keyof CreateUpdatedWorkspaceImageRequest & keyof CreateUpdatedWorkspaceImageRequest & keyof CreateUpdatedWorkspaceImageRequest & keyof CreateUpdatedWorkspaceImageRequest & keyof CreateUpdatedWorkspaceImageRequest & keyof CreateUpdatedWorkspaceImageRequest]: (CreateUpdatedWorkspaceImageRequest & CreateUpdatedWorkspaceImageRequest & CreateUpdatedWorkspaceImageRequest & CreateUpdatedWorkspaceImageRequest & CreateUpdatedWorkspaceImageRequest & CreateUpdatedWorkspaceImageRequest & CreateUpdatedWorkspaceImageRequest)[K]
    }>): CreateUpdatedWorkspaceImageResult {
        return this.client.createUpdatedWorkspaceImage(
            this.ops["CreateUpdatedWorkspaceImage"].apply(partialParams)
        );
    }

    invokeCreateWorkspaceBundle(partialParams: ToOptional<{
      [K in keyof CreateWorkspaceBundleRequest & keyof CreateWorkspaceBundleRequest & keyof CreateWorkspaceBundleRequest & keyof CreateWorkspaceBundleRequest & keyof CreateWorkspaceBundleRequest & keyof CreateWorkspaceBundleRequest & keyof CreateWorkspaceBundleRequest]: (CreateWorkspaceBundleRequest & CreateWorkspaceBundleRequest & CreateWorkspaceBundleRequest & CreateWorkspaceBundleRequest & CreateWorkspaceBundleRequest & CreateWorkspaceBundleRequest & CreateWorkspaceBundleRequest)[K]
    }>): CreateWorkspaceBundleResult {
        return this.client.createWorkspaceBundle(
            this.ops["CreateWorkspaceBundle"].apply(partialParams)
        );
    }

    invokeCreateWorkspaces(partialParams: ToOptional<{
      [K in keyof CreateWorkspacesRequest & keyof CreateWorkspacesRequest & keyof CreateWorkspacesRequest & keyof CreateWorkspacesRequest & keyof CreateWorkspacesRequest & keyof CreateWorkspacesRequest & keyof CreateWorkspacesRequest]: (CreateWorkspacesRequest & CreateWorkspacesRequest & CreateWorkspacesRequest & CreateWorkspacesRequest & CreateWorkspacesRequest & CreateWorkspacesRequest & CreateWorkspacesRequest)[K]
    }>): CreateWorkspacesResult {
        return this.client.createWorkspaces(
            this.ops["CreateWorkspaces"].apply(partialParams)
        );
    }

    invokeDeleteConnectClientAddIn(partialParams: ToOptional<{
      [K in keyof DeleteConnectClientAddInRequest & keyof DeleteConnectClientAddInRequest & keyof DeleteConnectClientAddInRequest & keyof DeleteConnectClientAddInRequest & keyof DeleteConnectClientAddInRequest & keyof DeleteConnectClientAddInRequest & keyof DeleteConnectClientAddInRequest]: (DeleteConnectClientAddInRequest & DeleteConnectClientAddInRequest & DeleteConnectClientAddInRequest & DeleteConnectClientAddInRequest & DeleteConnectClientAddInRequest & DeleteConnectClientAddInRequest & DeleteConnectClientAddInRequest)[K]
    }>): DeleteConnectClientAddInResult {
        return this.client.deleteConnectClientAddIn(
            this.ops["DeleteConnectClientAddIn"].apply(partialParams)
        );
    }

    invokeDeleteConnectionAlias(partialParams: ToOptional<{
      [K in keyof DeleteConnectionAliasRequest & keyof DeleteConnectionAliasRequest & keyof DeleteConnectionAliasRequest & keyof DeleteConnectionAliasRequest & keyof DeleteConnectionAliasRequest & keyof DeleteConnectionAliasRequest & keyof DeleteConnectionAliasRequest]: (DeleteConnectionAliasRequest & DeleteConnectionAliasRequest & DeleteConnectionAliasRequest & DeleteConnectionAliasRequest & DeleteConnectionAliasRequest & DeleteConnectionAliasRequest & DeleteConnectionAliasRequest)[K]
    }>): DeleteConnectionAliasResult {
        return this.client.deleteConnectionAlias(
            this.ops["DeleteConnectionAlias"].apply(partialParams)
        );
    }

    invokeDeleteIpGroup(partialParams: ToOptional<{
      [K in keyof DeleteIpGroupRequest & keyof DeleteIpGroupRequest & keyof DeleteIpGroupRequest & keyof DeleteIpGroupRequest & keyof DeleteIpGroupRequest & keyof DeleteIpGroupRequest & keyof DeleteIpGroupRequest]: (DeleteIpGroupRequest & DeleteIpGroupRequest & DeleteIpGroupRequest & DeleteIpGroupRequest & DeleteIpGroupRequest & DeleteIpGroupRequest & DeleteIpGroupRequest)[K]
    }>): DeleteIpGroupResult {
        return this.client.deleteIpGroup(
            this.ops["DeleteIpGroup"].apply(partialParams)
        );
    }

    invokeDeleteTags(partialParams: ToOptional<{
      [K in keyof DeleteTagsRequest & keyof DeleteTagsRequest & keyof DeleteTagsRequest & keyof DeleteTagsRequest & keyof DeleteTagsRequest & keyof DeleteTagsRequest & keyof DeleteTagsRequest]: (DeleteTagsRequest & DeleteTagsRequest & DeleteTagsRequest & DeleteTagsRequest & DeleteTagsRequest & DeleteTagsRequest & DeleteTagsRequest)[K]
    }>): DeleteTagsResult {
        return this.client.deleteTags(
            this.ops["DeleteTags"].apply(partialParams)
        );
    }

    invokeDeleteWorkspaceImage(partialParams: ToOptional<{
      [K in keyof DeleteWorkspaceImageRequest & keyof DeleteWorkspaceImageRequest & keyof DeleteWorkspaceImageRequest & keyof DeleteWorkspaceImageRequest & keyof DeleteWorkspaceImageRequest & keyof DeleteWorkspaceImageRequest & keyof DeleteWorkspaceImageRequest]: (DeleteWorkspaceImageRequest & DeleteWorkspaceImageRequest & DeleteWorkspaceImageRequest & DeleteWorkspaceImageRequest & DeleteWorkspaceImageRequest & DeleteWorkspaceImageRequest & DeleteWorkspaceImageRequest)[K]
    }>): DeleteWorkspaceImageResult {
        return this.client.deleteWorkspaceImage(
            this.ops["DeleteWorkspaceImage"].apply(partialParams)
        );
    }

    invokeDeregisterWorkspaceDirectory(partialParams: ToOptional<{
      [K in keyof DeregisterWorkspaceDirectoryRequest & keyof DeregisterWorkspaceDirectoryRequest & keyof DeregisterWorkspaceDirectoryRequest & keyof DeregisterWorkspaceDirectoryRequest & keyof DeregisterWorkspaceDirectoryRequest & keyof DeregisterWorkspaceDirectoryRequest & keyof DeregisterWorkspaceDirectoryRequest]: (DeregisterWorkspaceDirectoryRequest & DeregisterWorkspaceDirectoryRequest & DeregisterWorkspaceDirectoryRequest & DeregisterWorkspaceDirectoryRequest & DeregisterWorkspaceDirectoryRequest & DeregisterWorkspaceDirectoryRequest & DeregisterWorkspaceDirectoryRequest)[K]
    }>): DeregisterWorkspaceDirectoryResult {
        return this.client.deregisterWorkspaceDirectory(
            this.ops["DeregisterWorkspaceDirectory"].apply(partialParams)
        );
    }

    invokeDescribeClientProperties(partialParams: ToOptional<{
      [K in keyof DescribeClientPropertiesRequest & keyof DescribeClientPropertiesRequest & keyof DescribeClientPropertiesRequest & keyof DescribeClientPropertiesRequest & keyof DescribeClientPropertiesRequest & keyof DescribeClientPropertiesRequest & keyof DescribeClientPropertiesRequest]: (DescribeClientPropertiesRequest & DescribeClientPropertiesRequest & DescribeClientPropertiesRequest & DescribeClientPropertiesRequest & DescribeClientPropertiesRequest & DescribeClientPropertiesRequest & DescribeClientPropertiesRequest)[K]
    }>): DescribeClientPropertiesResult {
        return this.client.describeClientProperties(
            this.ops["DescribeClientProperties"].apply(partialParams)
        );
    }

    invokeDescribeConnectClientAddIns(partialParams: ToOptional<{
      [K in keyof DescribeConnectClientAddInsRequest & keyof DescribeConnectClientAddInsRequest & keyof DescribeConnectClientAddInsRequest & keyof DescribeConnectClientAddInsRequest & keyof DescribeConnectClientAddInsRequest & keyof DescribeConnectClientAddInsRequest & keyof DescribeConnectClientAddInsRequest]: (DescribeConnectClientAddInsRequest & DescribeConnectClientAddInsRequest & DescribeConnectClientAddInsRequest & DescribeConnectClientAddInsRequest & DescribeConnectClientAddInsRequest & DescribeConnectClientAddInsRequest & DescribeConnectClientAddInsRequest)[K]
    }>): DescribeConnectClientAddInsResult {
        return this.client.describeConnectClientAddIns(
            this.ops["DescribeConnectClientAddIns"].apply(partialParams)
        );
    }

    invokeDescribeConnectionAliasPermissions(partialParams: ToOptional<{
      [K in keyof DescribeConnectionAliasPermissionsRequest & keyof DescribeConnectionAliasPermissionsRequest & keyof DescribeConnectionAliasPermissionsRequest & keyof DescribeConnectionAliasPermissionsRequest & keyof DescribeConnectionAliasPermissionsRequest & keyof DescribeConnectionAliasPermissionsRequest & keyof DescribeConnectionAliasPermissionsRequest]: (DescribeConnectionAliasPermissionsRequest & DescribeConnectionAliasPermissionsRequest & DescribeConnectionAliasPermissionsRequest & DescribeConnectionAliasPermissionsRequest & DescribeConnectionAliasPermissionsRequest & DescribeConnectionAliasPermissionsRequest & DescribeConnectionAliasPermissionsRequest)[K]
    }>): DescribeConnectionAliasPermissionsResult {
        return this.client.describeConnectionAliasPermissions(
            this.ops["DescribeConnectionAliasPermissions"].apply(partialParams)
        );
    }

    invokeDescribeTags(partialParams: ToOptional<{
      [K in keyof DescribeTagsRequest & keyof DescribeTagsRequest & keyof DescribeTagsRequest & keyof DescribeTagsRequest & keyof DescribeTagsRequest & keyof DescribeTagsRequest & keyof DescribeTagsRequest]: (DescribeTagsRequest & DescribeTagsRequest & DescribeTagsRequest & DescribeTagsRequest & DescribeTagsRequest & DescribeTagsRequest & DescribeTagsRequest)[K]
    }>): DescribeTagsResult {
        return this.client.describeTags(
            this.ops["DescribeTags"].apply(partialParams)
        );
    }

    invokeDescribeWorkspaceImagePermissions(partialParams: ToOptional<{
      [K in keyof DescribeWorkspaceImagePermissionsRequest & keyof DescribeWorkspaceImagePermissionsRequest & keyof DescribeWorkspaceImagePermissionsRequest & keyof DescribeWorkspaceImagePermissionsRequest & keyof DescribeWorkspaceImagePermissionsRequest & keyof DescribeWorkspaceImagePermissionsRequest & keyof DescribeWorkspaceImagePermissionsRequest]: (DescribeWorkspaceImagePermissionsRequest & DescribeWorkspaceImagePermissionsRequest & DescribeWorkspaceImagePermissionsRequest & DescribeWorkspaceImagePermissionsRequest & DescribeWorkspaceImagePermissionsRequest & DescribeWorkspaceImagePermissionsRequest & DescribeWorkspaceImagePermissionsRequest)[K]
    }>): DescribeWorkspaceImagePermissionsResult {
        return this.client.describeWorkspaceImagePermissions(
            this.ops["DescribeWorkspaceImagePermissions"].apply(partialParams)
        );
    }

    invokeDescribeWorkspaceSnapshots(partialParams: ToOptional<{
      [K in keyof DescribeWorkspaceSnapshotsRequest & keyof DescribeWorkspaceSnapshotsRequest & keyof DescribeWorkspaceSnapshotsRequest & keyof DescribeWorkspaceSnapshotsRequest & keyof DescribeWorkspaceSnapshotsRequest & keyof DescribeWorkspaceSnapshotsRequest & keyof DescribeWorkspaceSnapshotsRequest]: (DescribeWorkspaceSnapshotsRequest & DescribeWorkspaceSnapshotsRequest & DescribeWorkspaceSnapshotsRequest & DescribeWorkspaceSnapshotsRequest & DescribeWorkspaceSnapshotsRequest & DescribeWorkspaceSnapshotsRequest & DescribeWorkspaceSnapshotsRequest)[K]
    }>): DescribeWorkspaceSnapshotsResult {
        return this.client.describeWorkspaceSnapshots(
            this.ops["DescribeWorkspaceSnapshots"].apply(partialParams)
        );
    }

    invokeDisassociateConnectionAlias(partialParams: ToOptional<{
      [K in keyof DisassociateConnectionAliasRequest & keyof DisassociateConnectionAliasRequest & keyof DisassociateConnectionAliasRequest & keyof DisassociateConnectionAliasRequest & keyof DisassociateConnectionAliasRequest & keyof DisassociateConnectionAliasRequest & keyof DisassociateConnectionAliasRequest]: (DisassociateConnectionAliasRequest & DisassociateConnectionAliasRequest & DisassociateConnectionAliasRequest & DisassociateConnectionAliasRequest & DisassociateConnectionAliasRequest & DisassociateConnectionAliasRequest & DisassociateConnectionAliasRequest)[K]
    }>): DisassociateConnectionAliasResult {
        return this.client.disassociateConnectionAlias(
            this.ops["DisassociateConnectionAlias"].apply(partialParams)
        );
    }

    invokeDisassociateIpGroups(partialParams: ToOptional<{
      [K in keyof DisassociateIpGroupsRequest & keyof DisassociateIpGroupsRequest & keyof Omit<DisassociateIpGroupsRequest, "DirectoryId"> & keyof DisassociateIpGroupsRequest & keyof DisassociateIpGroupsRequest & keyof DisassociateIpGroupsRequest & keyof DisassociateIpGroupsRequest]: (DisassociateIpGroupsRequest & DisassociateIpGroupsRequest & Omit<DisassociateIpGroupsRequest, "DirectoryId"> & DisassociateIpGroupsRequest & DisassociateIpGroupsRequest & DisassociateIpGroupsRequest & DisassociateIpGroupsRequest)[K]
    }>): DisassociateIpGroupsResult {
        return this.client.disassociateIpGroups(
            this.ops["DisassociateIpGroups"].apply(partialParams)
        );
    }

    invokeImportWorkspaceImage(partialParams: ToOptional<{
      [K in keyof ImportWorkspaceImageRequest & keyof ImportWorkspaceImageRequest & keyof ImportWorkspaceImageRequest & keyof ImportWorkspaceImageRequest & keyof ImportWorkspaceImageRequest & keyof ImportWorkspaceImageRequest & keyof ImportWorkspaceImageRequest]: (ImportWorkspaceImageRequest & ImportWorkspaceImageRequest & ImportWorkspaceImageRequest & ImportWorkspaceImageRequest & ImportWorkspaceImageRequest & ImportWorkspaceImageRequest & ImportWorkspaceImageRequest)[K]
    }>): ImportWorkspaceImageResult {
        return this.client.importWorkspaceImage(
            this.ops["ImportWorkspaceImage"].apply(partialParams)
        );
    }

    invokeListAvailableManagementCidrRanges(partialParams: ToOptional<{
      [K in keyof ListAvailableManagementCidrRangesRequest & keyof ListAvailableManagementCidrRangesRequest & keyof ListAvailableManagementCidrRangesRequest & keyof ListAvailableManagementCidrRangesRequest & keyof ListAvailableManagementCidrRangesRequest & keyof ListAvailableManagementCidrRangesRequest & keyof ListAvailableManagementCidrRangesRequest]: (ListAvailableManagementCidrRangesRequest & ListAvailableManagementCidrRangesRequest & ListAvailableManagementCidrRangesRequest & ListAvailableManagementCidrRangesRequest & ListAvailableManagementCidrRangesRequest & ListAvailableManagementCidrRangesRequest & ListAvailableManagementCidrRangesRequest)[K]
    }>): ListAvailableManagementCidrRangesResult {
        return this.client.listAvailableManagementCidrRanges(
            this.ops["ListAvailableManagementCidrRanges"].apply(partialParams)
        );
    }

    invokeMigrateWorkspace(partialParams: ToOptional<{
      [K in keyof Omit<MigrateWorkspaceRequest, "BundleId"> & keyof MigrateWorkspaceRequest & keyof MigrateWorkspaceRequest & keyof MigrateWorkspaceRequest & keyof MigrateWorkspaceRequest & keyof MigrateWorkspaceRequest & keyof MigrateWorkspaceRequest]: (Omit<MigrateWorkspaceRequest, "BundleId"> & MigrateWorkspaceRequest & MigrateWorkspaceRequest & MigrateWorkspaceRequest & MigrateWorkspaceRequest & MigrateWorkspaceRequest & MigrateWorkspaceRequest)[K]
    }>): MigrateWorkspaceResult {
        return this.client.migrateWorkspace(
            this.ops["MigrateWorkspace"].apply(partialParams)
        );
    }

    invokeModifyClientProperties(partialParams: ToOptional<{
      [K in keyof ModifyClientPropertiesRequest & keyof ModifyClientPropertiesRequest & keyof ModifyClientPropertiesRequest & keyof ModifyClientPropertiesRequest & keyof ModifyClientPropertiesRequest & keyof ModifyClientPropertiesRequest & keyof ModifyClientPropertiesRequest]: (ModifyClientPropertiesRequest & ModifyClientPropertiesRequest & ModifyClientPropertiesRequest & ModifyClientPropertiesRequest & ModifyClientPropertiesRequest & ModifyClientPropertiesRequest & ModifyClientPropertiesRequest)[K]
    }>): ModifyClientPropertiesResult {
        return this.client.modifyClientProperties(
            this.ops["ModifyClientProperties"].apply(partialParams)
        );
    }

    invokeModifySelfservicePermissions(partialParams: ToOptional<{
      [K in keyof ModifySelfservicePermissionsRequest & keyof ModifySelfservicePermissionsRequest & keyof Omit<ModifySelfservicePermissionsRequest, "ResourceId"> & keyof ModifySelfservicePermissionsRequest & keyof ModifySelfservicePermissionsRequest & keyof ModifySelfservicePermissionsRequest & keyof ModifySelfservicePermissionsRequest]: (ModifySelfservicePermissionsRequest & ModifySelfservicePermissionsRequest & Omit<ModifySelfservicePermissionsRequest, "ResourceId"> & ModifySelfservicePermissionsRequest & ModifySelfservicePermissionsRequest & ModifySelfservicePermissionsRequest & ModifySelfservicePermissionsRequest)[K]
    }>): ModifySelfservicePermissionsResult {
        return this.client.modifySelfservicePermissions(
            this.ops["ModifySelfservicePermissions"].apply(partialParams)
        );
    }

    invokeModifyWorkspaceAccessProperties(partialParams: ToOptional<{
      [K in keyof ModifyWorkspaceAccessPropertiesRequest & keyof ModifyWorkspaceAccessPropertiesRequest & keyof Omit<ModifyWorkspaceAccessPropertiesRequest, "ResourceId"> & keyof ModifyWorkspaceAccessPropertiesRequest & keyof ModifyWorkspaceAccessPropertiesRequest & keyof ModifyWorkspaceAccessPropertiesRequest & keyof ModifyWorkspaceAccessPropertiesRequest]: (ModifyWorkspaceAccessPropertiesRequest & ModifyWorkspaceAccessPropertiesRequest & Omit<ModifyWorkspaceAccessPropertiesRequest, "ResourceId"> & ModifyWorkspaceAccessPropertiesRequest & ModifyWorkspaceAccessPropertiesRequest & ModifyWorkspaceAccessPropertiesRequest & ModifyWorkspaceAccessPropertiesRequest)[K]
    }>): ModifyWorkspaceAccessPropertiesResult {
        return this.client.modifyWorkspaceAccessProperties(
            this.ops["ModifyWorkspaceAccessProperties"].apply(partialParams)
        );
    }

    invokeModifyWorkspaceCreationProperties(partialParams: ToOptional<{
      [K in keyof ModifyWorkspaceCreationPropertiesRequest & keyof ModifyWorkspaceCreationPropertiesRequest & keyof Omit<ModifyWorkspaceCreationPropertiesRequest, "ResourceId"> & keyof ModifyWorkspaceCreationPropertiesRequest & keyof ModifyWorkspaceCreationPropertiesRequest & keyof ModifyWorkspaceCreationPropertiesRequest & keyof ModifyWorkspaceCreationPropertiesRequest]: (ModifyWorkspaceCreationPropertiesRequest & ModifyWorkspaceCreationPropertiesRequest & Omit<ModifyWorkspaceCreationPropertiesRequest, "ResourceId"> & ModifyWorkspaceCreationPropertiesRequest & ModifyWorkspaceCreationPropertiesRequest & ModifyWorkspaceCreationPropertiesRequest & ModifyWorkspaceCreationPropertiesRequest)[K]
    }>): ModifyWorkspaceCreationPropertiesResult {
        return this.client.modifyWorkspaceCreationProperties(
            this.ops["ModifyWorkspaceCreationProperties"].apply(partialParams)
        );
    }

    invokeModifyWorkspaceProperties(partialParams: ToOptional<{
      [K in keyof ModifyWorkspacePropertiesRequest & keyof ModifyWorkspacePropertiesRequest & keyof ModifyWorkspacePropertiesRequest & keyof ModifyWorkspacePropertiesRequest & keyof ModifyWorkspacePropertiesRequest & keyof ModifyWorkspacePropertiesRequest & keyof ModifyWorkspacePropertiesRequest]: (ModifyWorkspacePropertiesRequest & ModifyWorkspacePropertiesRequest & ModifyWorkspacePropertiesRequest & ModifyWorkspacePropertiesRequest & ModifyWorkspacePropertiesRequest & ModifyWorkspacePropertiesRequest & ModifyWorkspacePropertiesRequest)[K]
    }>): ModifyWorkspacePropertiesResult {
        return this.client.modifyWorkspaceProperties(
            this.ops["ModifyWorkspaceProperties"].apply(partialParams)
        );
    }

    invokeModifyWorkspaceState(partialParams: ToOptional<{
      [K in keyof ModifyWorkspaceStateRequest & keyof ModifyWorkspaceStateRequest & keyof ModifyWorkspaceStateRequest & keyof ModifyWorkspaceStateRequest & keyof ModifyWorkspaceStateRequest & keyof ModifyWorkspaceStateRequest & keyof ModifyWorkspaceStateRequest]: (ModifyWorkspaceStateRequest & ModifyWorkspaceStateRequest & ModifyWorkspaceStateRequest & ModifyWorkspaceStateRequest & ModifyWorkspaceStateRequest & ModifyWorkspaceStateRequest & ModifyWorkspaceStateRequest)[K]
    }>): ModifyWorkspaceStateResult {
        return this.client.modifyWorkspaceState(
            this.ops["ModifyWorkspaceState"].apply(partialParams)
        );
    }

    invokeRebootWorkspaces(partialParams: ToOptional<{
      [K in keyof RebootWorkspacesRequest & keyof RebootWorkspacesRequest & keyof RebootWorkspacesRequest & keyof RebootWorkspacesRequest & keyof RebootWorkspacesRequest & keyof RebootWorkspacesRequest & keyof RebootWorkspacesRequest]: (RebootWorkspacesRequest & RebootWorkspacesRequest & RebootWorkspacesRequest & RebootWorkspacesRequest & RebootWorkspacesRequest & RebootWorkspacesRequest & RebootWorkspacesRequest)[K]
    }>): RebootWorkspacesResult {
        return this.client.rebootWorkspaces(
            this.ops["RebootWorkspaces"].apply(partialParams)
        );
    }

    invokeRebuildWorkspaces(partialParams: ToOptional<{
      [K in keyof RebuildWorkspacesRequest & keyof RebuildWorkspacesRequest & keyof RebuildWorkspacesRequest & keyof RebuildWorkspacesRequest & keyof RebuildWorkspacesRequest & keyof RebuildWorkspacesRequest & keyof RebuildWorkspacesRequest]: (RebuildWorkspacesRequest & RebuildWorkspacesRequest & RebuildWorkspacesRequest & RebuildWorkspacesRequest & RebuildWorkspacesRequest & RebuildWorkspacesRequest & RebuildWorkspacesRequest)[K]
    }>): RebuildWorkspacesResult {
        return this.client.rebuildWorkspaces(
            this.ops["RebuildWorkspaces"].apply(partialParams)
        );
    }

    invokeRegisterWorkspaceDirectory(partialParams: ToOptional<{
      [K in keyof RegisterWorkspaceDirectoryRequest & keyof RegisterWorkspaceDirectoryRequest & keyof Omit<RegisterWorkspaceDirectoryRequest, "DirectoryId"> & keyof RegisterWorkspaceDirectoryRequest & keyof RegisterWorkspaceDirectoryRequest & keyof RegisterWorkspaceDirectoryRequest & keyof RegisterWorkspaceDirectoryRequest]: (RegisterWorkspaceDirectoryRequest & RegisterWorkspaceDirectoryRequest & Omit<RegisterWorkspaceDirectoryRequest, "DirectoryId"> & RegisterWorkspaceDirectoryRequest & RegisterWorkspaceDirectoryRequest & RegisterWorkspaceDirectoryRequest & RegisterWorkspaceDirectoryRequest)[K]
    }>): RegisterWorkspaceDirectoryResult {
        return this.client.registerWorkspaceDirectory(
            this.ops["RegisterWorkspaceDirectory"].apply(partialParams)
        );
    }

    invokeRestoreWorkspace(partialParams: ToOptional<{
      [K in keyof RestoreWorkspaceRequest & keyof RestoreWorkspaceRequest & keyof RestoreWorkspaceRequest & keyof RestoreWorkspaceRequest & keyof RestoreWorkspaceRequest & keyof RestoreWorkspaceRequest & keyof RestoreWorkspaceRequest]: (RestoreWorkspaceRequest & RestoreWorkspaceRequest & RestoreWorkspaceRequest & RestoreWorkspaceRequest & RestoreWorkspaceRequest & RestoreWorkspaceRequest & RestoreWorkspaceRequest)[K]
    }>): RestoreWorkspaceResult {
        return this.client.restoreWorkspace(
            this.ops["RestoreWorkspace"].apply(partialParams)
        );
    }

    invokeRevokeIpRules(partialParams: ToOptional<{
      [K in keyof RevokeIpRulesRequest & keyof RevokeIpRulesRequest & keyof RevokeIpRulesRequest & keyof RevokeIpRulesRequest & keyof RevokeIpRulesRequest & keyof RevokeIpRulesRequest & keyof RevokeIpRulesRequest]: (RevokeIpRulesRequest & RevokeIpRulesRequest & RevokeIpRulesRequest & RevokeIpRulesRequest & RevokeIpRulesRequest & RevokeIpRulesRequest & RevokeIpRulesRequest)[K]
    }>): RevokeIpRulesResult {
        return this.client.revokeIpRules(
            this.ops["RevokeIpRules"].apply(partialParams)
        );
    }

    invokeStartWorkspaces(partialParams: ToOptional<{
      [K in keyof StartWorkspacesRequest & keyof StartWorkspacesRequest & keyof StartWorkspacesRequest & keyof StartWorkspacesRequest & keyof StartWorkspacesRequest & keyof StartWorkspacesRequest & keyof StartWorkspacesRequest]: (StartWorkspacesRequest & StartWorkspacesRequest & StartWorkspacesRequest & StartWorkspacesRequest & StartWorkspacesRequest & StartWorkspacesRequest & StartWorkspacesRequest)[K]
    }>): StartWorkspacesResult {
        return this.client.startWorkspaces(
            this.ops["StartWorkspaces"].apply(partialParams)
        );
    }

    invokeStopWorkspaces(partialParams: ToOptional<{
      [K in keyof StopWorkspacesRequest & keyof StopWorkspacesRequest & keyof StopWorkspacesRequest & keyof StopWorkspacesRequest & keyof StopWorkspacesRequest & keyof StopWorkspacesRequest & keyof StopWorkspacesRequest]: (StopWorkspacesRequest & StopWorkspacesRequest & StopWorkspacesRequest & StopWorkspacesRequest & StopWorkspacesRequest & StopWorkspacesRequest & StopWorkspacesRequest)[K]
    }>): StopWorkspacesResult {
        return this.client.stopWorkspaces(
            this.ops["StopWorkspaces"].apply(partialParams)
        );
    }

    invokeTerminateWorkspaces(partialParams: ToOptional<{
      [K in keyof TerminateWorkspacesRequest & keyof TerminateWorkspacesRequest & keyof TerminateWorkspacesRequest & keyof TerminateWorkspacesRequest & keyof TerminateWorkspacesRequest & keyof TerminateWorkspacesRequest & keyof TerminateWorkspacesRequest]: (TerminateWorkspacesRequest & TerminateWorkspacesRequest & TerminateWorkspacesRequest & TerminateWorkspacesRequest & TerminateWorkspacesRequest & TerminateWorkspacesRequest & TerminateWorkspacesRequest)[K]
    }>): TerminateWorkspacesResult {
        return this.client.terminateWorkspaces(
            this.ops["TerminateWorkspaces"].apply(partialParams)
        );
    }

    invokeUpdateConnectClientAddIn(partialParams: ToOptional<{
      [K in keyof UpdateConnectClientAddInRequest & keyof UpdateConnectClientAddInRequest & keyof Omit<UpdateConnectClientAddInRequest, "ResourceId"> & keyof UpdateConnectClientAddInRequest & keyof UpdateConnectClientAddInRequest & keyof UpdateConnectClientAddInRequest & keyof UpdateConnectClientAddInRequest]: (UpdateConnectClientAddInRequest & UpdateConnectClientAddInRequest & Omit<UpdateConnectClientAddInRequest, "ResourceId"> & UpdateConnectClientAddInRequest & UpdateConnectClientAddInRequest & UpdateConnectClientAddInRequest & UpdateConnectClientAddInRequest)[K]
    }>): UpdateConnectClientAddInResult {
        return this.client.updateConnectClientAddIn(
            this.ops["UpdateConnectClientAddIn"].apply(partialParams)
        );
    }

    invokeUpdateConnectionAliasPermission(partialParams: ToOptional<{
      [K in keyof UpdateConnectionAliasPermissionRequest & keyof UpdateConnectionAliasPermissionRequest & keyof UpdateConnectionAliasPermissionRequest & keyof UpdateConnectionAliasPermissionRequest & keyof UpdateConnectionAliasPermissionRequest & keyof UpdateConnectionAliasPermissionRequest & keyof UpdateConnectionAliasPermissionRequest]: (UpdateConnectionAliasPermissionRequest & UpdateConnectionAliasPermissionRequest & UpdateConnectionAliasPermissionRequest & UpdateConnectionAliasPermissionRequest & UpdateConnectionAliasPermissionRequest & UpdateConnectionAliasPermissionRequest & UpdateConnectionAliasPermissionRequest)[K]
    }>): UpdateConnectionAliasPermissionResult {
        return this.client.updateConnectionAliasPermission(
            this.ops["UpdateConnectionAliasPermission"].apply(partialParams)
        );
    }

    invokeUpdateRulesOfIpGroup(partialParams: ToOptional<{
      [K in keyof UpdateRulesOfIpGroupRequest & keyof UpdateRulesOfIpGroupRequest & keyof UpdateRulesOfIpGroupRequest & keyof UpdateRulesOfIpGroupRequest & keyof UpdateRulesOfIpGroupRequest & keyof UpdateRulesOfIpGroupRequest & keyof UpdateRulesOfIpGroupRequest]: (UpdateRulesOfIpGroupRequest & UpdateRulesOfIpGroupRequest & UpdateRulesOfIpGroupRequest & UpdateRulesOfIpGroupRequest & UpdateRulesOfIpGroupRequest & UpdateRulesOfIpGroupRequest & UpdateRulesOfIpGroupRequest)[K]
    }>): UpdateRulesOfIpGroupResult {
        return this.client.updateRulesOfIpGroup(
            this.ops["UpdateRulesOfIpGroup"].apply(partialParams)
        );
    }

    invokeUpdateWorkspaceImagePermission(partialParams: ToOptional<{
      [K in keyof UpdateWorkspaceImagePermissionRequest & keyof UpdateWorkspaceImagePermissionRequest & keyof UpdateWorkspaceImagePermissionRequest & keyof UpdateWorkspaceImagePermissionRequest & keyof UpdateWorkspaceImagePermissionRequest & keyof UpdateWorkspaceImagePermissionRequest & keyof UpdateWorkspaceImagePermissionRequest]: (UpdateWorkspaceImagePermissionRequest & UpdateWorkspaceImagePermissionRequest & UpdateWorkspaceImagePermissionRequest & UpdateWorkspaceImagePermissionRequest & UpdateWorkspaceImagePermissionRequest & UpdateWorkspaceImagePermissionRequest & UpdateWorkspaceImagePermissionRequest)[K]
    }>): UpdateWorkspaceImagePermissionResult {
        return this.client.updateWorkspaceImagePermission(
            this.ops["UpdateWorkspaceImagePermission"].apply(partialParams)
        );
    }
}