
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
    constructor(...args: ConstructorParameters<typeof aws.workspaces.Workspace>) {
        super(...args)
        this.client = new awssdk.WorkSpaces()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
    }
    boot() {
        Object.entries(this.capitalizedParams).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value.value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
        this.ops = getResourceOperations(this.capitalizedParams as any, schema, this.client)
    }

    invokeAssociateConnectionAlias(partialParams: ToOptional<{
      [K in keyof AssociateConnectionAliasRequest & keyof AssociateConnectionAliasRequest & keyof AssociateConnectionAliasRequest & keyof AssociateConnectionAliasRequest & keyof AssociateConnectionAliasRequest & keyof AssociateConnectionAliasRequest & keyof AssociateConnectionAliasRequest]: (AssociateConnectionAliasRequest & AssociateConnectionAliasRequest & AssociateConnectionAliasRequest & AssociateConnectionAliasRequest & AssociateConnectionAliasRequest & AssociateConnectionAliasRequest & AssociateConnectionAliasRequest)[K]
    }>): Request<AssociateConnectionAliasResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateConnectionAlias(
          this.ops["AssociateConnectionAlias"].applicator.apply(partialParams)
        );
    }

    invokeAssociateIpGroups(partialParams: ToOptional<{
      [K in keyof AssociateIpGroupsRequest & keyof AssociateIpGroupsRequest & keyof AssociateIpGroupsRequest & keyof AssociateIpGroupsRequest & keyof AssociateIpGroupsRequest & keyof AssociateIpGroupsRequest & keyof AssociateIpGroupsRequest]: (AssociateIpGroupsRequest & AssociateIpGroupsRequest & AssociateIpGroupsRequest & AssociateIpGroupsRequest & AssociateIpGroupsRequest & AssociateIpGroupsRequest & AssociateIpGroupsRequest)[K]
    }>): Request<AssociateIpGroupsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateIpGroups(
          this.ops["AssociateIpGroups"].applicator.apply(partialParams)
        );
    }

    invokeAuthorizeIpRules(partialParams: ToOptional<{
      [K in keyof AuthorizeIpRulesRequest & keyof AuthorizeIpRulesRequest & keyof AuthorizeIpRulesRequest & keyof AuthorizeIpRulesRequest & keyof AuthorizeIpRulesRequest & keyof AuthorizeIpRulesRequest & keyof AuthorizeIpRulesRequest]: (AuthorizeIpRulesRequest & AuthorizeIpRulesRequest & AuthorizeIpRulesRequest & AuthorizeIpRulesRequest & AuthorizeIpRulesRequest & AuthorizeIpRulesRequest & AuthorizeIpRulesRequest)[K]
    }>): Request<AuthorizeIpRulesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.authorizeIpRules(
          this.ops["AuthorizeIpRules"].applicator.apply(partialParams)
        );
    }

    invokeCopyWorkspaceImage(partialParams: ToOptional<{
      [K in keyof CopyWorkspaceImageRequest & keyof CopyWorkspaceImageRequest & keyof CopyWorkspaceImageRequest & keyof CopyWorkspaceImageRequest & keyof CopyWorkspaceImageRequest & keyof CopyWorkspaceImageRequest & keyof CopyWorkspaceImageRequest]: (CopyWorkspaceImageRequest & CopyWorkspaceImageRequest & CopyWorkspaceImageRequest & CopyWorkspaceImageRequest & CopyWorkspaceImageRequest & CopyWorkspaceImageRequest & CopyWorkspaceImageRequest)[K]
    }>): Request<CopyWorkspaceImageResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copyWorkspaceImage(
          this.ops["CopyWorkspaceImage"].applicator.apply(partialParams)
        );
    }

    invokeCreateConnectClientAddIn(partialParams: ToOptional<{
      [K in keyof CreateConnectClientAddInRequest & keyof CreateConnectClientAddInRequest & keyof CreateConnectClientAddInRequest & keyof CreateConnectClientAddInRequest & keyof CreateConnectClientAddInRequest & keyof CreateConnectClientAddInRequest & keyof CreateConnectClientAddInRequest]: (CreateConnectClientAddInRequest & CreateConnectClientAddInRequest & CreateConnectClientAddInRequest & CreateConnectClientAddInRequest & CreateConnectClientAddInRequest & CreateConnectClientAddInRequest & CreateConnectClientAddInRequest)[K]
    }>): Request<CreateConnectClientAddInResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createConnectClientAddIn(
          this.ops["CreateConnectClientAddIn"].applicator.apply(partialParams)
        );
    }

    invokeCreateConnectionAlias(partialParams: ToOptional<{
      [K in keyof CreateConnectionAliasRequest & keyof CreateConnectionAliasRequest & keyof CreateConnectionAliasRequest & keyof CreateConnectionAliasRequest & keyof CreateConnectionAliasRequest & keyof CreateConnectionAliasRequest & keyof CreateConnectionAliasRequest]: (CreateConnectionAliasRequest & CreateConnectionAliasRequest & CreateConnectionAliasRequest & CreateConnectionAliasRequest & CreateConnectionAliasRequest & CreateConnectionAliasRequest & CreateConnectionAliasRequest)[K]
    }>): Request<CreateConnectionAliasResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createConnectionAlias(
          this.ops["CreateConnectionAlias"].applicator.apply(partialParams)
        );
    }

    invokeCreateIpGroup(partialParams: ToOptional<{
      [K in keyof CreateIpGroupRequest & keyof CreateIpGroupRequest & keyof CreateIpGroupRequest & keyof CreateIpGroupRequest & keyof CreateIpGroupRequest & keyof CreateIpGroupRequest & keyof CreateIpGroupRequest]: (CreateIpGroupRequest & CreateIpGroupRequest & CreateIpGroupRequest & CreateIpGroupRequest & CreateIpGroupRequest & CreateIpGroupRequest & CreateIpGroupRequest)[K]
    }>): Request<CreateIpGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createIpGroup(
          this.ops["CreateIpGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateTags(partialParams: ToOptional<{
      [K in keyof CreateTagsRequest & keyof CreateTagsRequest & keyof CreateTagsRequest & keyof CreateTagsRequest & keyof CreateTagsRequest & keyof CreateTagsRequest & keyof CreateTagsRequest]: (CreateTagsRequest & CreateTagsRequest & CreateTagsRequest & CreateTagsRequest & CreateTagsRequest & CreateTagsRequest & CreateTagsRequest)[K]
    }>): Request<CreateTagsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTags(
          this.ops["CreateTags"].applicator.apply(partialParams)
        );
    }

    invokeCreateUpdatedWorkspaceImage(partialParams: ToOptional<{
      [K in keyof CreateUpdatedWorkspaceImageRequest & keyof CreateUpdatedWorkspaceImageRequest & keyof CreateUpdatedWorkspaceImageRequest & keyof CreateUpdatedWorkspaceImageRequest & keyof CreateUpdatedWorkspaceImageRequest & keyof CreateUpdatedWorkspaceImageRequest & keyof CreateUpdatedWorkspaceImageRequest]: (CreateUpdatedWorkspaceImageRequest & CreateUpdatedWorkspaceImageRequest & CreateUpdatedWorkspaceImageRequest & CreateUpdatedWorkspaceImageRequest & CreateUpdatedWorkspaceImageRequest & CreateUpdatedWorkspaceImageRequest & CreateUpdatedWorkspaceImageRequest)[K]
    }>): Request<CreateUpdatedWorkspaceImageResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUpdatedWorkspaceImage(
          this.ops["CreateUpdatedWorkspaceImage"].applicator.apply(partialParams)
        );
    }

    invokeCreateWorkspaceBundle(partialParams: ToOptional<{
      [K in keyof CreateWorkspaceBundleRequest & keyof CreateWorkspaceBundleRequest & keyof CreateWorkspaceBundleRequest & keyof CreateWorkspaceBundleRequest & keyof CreateWorkspaceBundleRequest & keyof CreateWorkspaceBundleRequest & keyof CreateWorkspaceBundleRequest]: (CreateWorkspaceBundleRequest & CreateWorkspaceBundleRequest & CreateWorkspaceBundleRequest & CreateWorkspaceBundleRequest & CreateWorkspaceBundleRequest & CreateWorkspaceBundleRequest & CreateWorkspaceBundleRequest)[K]
    }>): Request<CreateWorkspaceBundleResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createWorkspaceBundle(
          this.ops["CreateWorkspaceBundle"].applicator.apply(partialParams)
        );
    }

    invokeCreateWorkspaces(partialParams: ToOptional<{
      [K in keyof CreateWorkspacesRequest & keyof CreateWorkspacesRequest & keyof CreateWorkspacesRequest & keyof CreateWorkspacesRequest & keyof CreateWorkspacesRequest & keyof CreateWorkspacesRequest & keyof CreateWorkspacesRequest]: (CreateWorkspacesRequest & CreateWorkspacesRequest & CreateWorkspacesRequest & CreateWorkspacesRequest & CreateWorkspacesRequest & CreateWorkspacesRequest & CreateWorkspacesRequest)[K]
    }>): Request<CreateWorkspacesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createWorkspaces(
          this.ops["CreateWorkspaces"].applicator.apply(partialParams)
        );
    }

    invokeDeleteConnectClientAddIn(partialParams: ToOptional<{
      [K in keyof DeleteConnectClientAddInRequest & keyof DeleteConnectClientAddInRequest & keyof DeleteConnectClientAddInRequest & keyof DeleteConnectClientAddInRequest & keyof DeleteConnectClientAddInRequest & keyof DeleteConnectClientAddInRequest & keyof DeleteConnectClientAddInRequest]: (DeleteConnectClientAddInRequest & DeleteConnectClientAddInRequest & DeleteConnectClientAddInRequest & DeleteConnectClientAddInRequest & DeleteConnectClientAddInRequest & DeleteConnectClientAddInRequest & DeleteConnectClientAddInRequest)[K]
    }>): Request<DeleteConnectClientAddInResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteConnectClientAddIn(
          this.ops["DeleteConnectClientAddIn"].applicator.apply(partialParams)
        );
    }

    invokeDeleteConnectionAlias(partialParams: ToOptional<{
      [K in keyof DeleteConnectionAliasRequest & keyof DeleteConnectionAliasRequest & keyof DeleteConnectionAliasRequest & keyof DeleteConnectionAliasRequest & keyof DeleteConnectionAliasRequest & keyof DeleteConnectionAliasRequest & keyof DeleteConnectionAliasRequest]: (DeleteConnectionAliasRequest & DeleteConnectionAliasRequest & DeleteConnectionAliasRequest & DeleteConnectionAliasRequest & DeleteConnectionAliasRequest & DeleteConnectionAliasRequest & DeleteConnectionAliasRequest)[K]
    }>): Request<DeleteConnectionAliasResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteConnectionAlias(
          this.ops["DeleteConnectionAlias"].applicator.apply(partialParams)
        );
    }

    invokeDeleteIpGroup(partialParams: ToOptional<{
      [K in keyof DeleteIpGroupRequest & keyof DeleteIpGroupRequest & keyof DeleteIpGroupRequest & keyof DeleteIpGroupRequest & keyof DeleteIpGroupRequest & keyof DeleteIpGroupRequest & keyof DeleteIpGroupRequest]: (DeleteIpGroupRequest & DeleteIpGroupRequest & DeleteIpGroupRequest & DeleteIpGroupRequest & DeleteIpGroupRequest & DeleteIpGroupRequest & DeleteIpGroupRequest)[K]
    }>): Request<DeleteIpGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteIpGroup(
          this.ops["DeleteIpGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTags(partialParams: ToOptional<{
      [K in keyof DeleteTagsRequest & keyof DeleteTagsRequest & keyof DeleteTagsRequest & keyof DeleteTagsRequest & keyof DeleteTagsRequest & keyof DeleteTagsRequest & keyof DeleteTagsRequest]: (DeleteTagsRequest & DeleteTagsRequest & DeleteTagsRequest & DeleteTagsRequest & DeleteTagsRequest & DeleteTagsRequest & DeleteTagsRequest)[K]
    }>): Request<DeleteTagsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTags(
          this.ops["DeleteTags"].applicator.apply(partialParams)
        );
    }

    invokeDeleteWorkspaceImage(partialParams: ToOptional<{
      [K in keyof DeleteWorkspaceImageRequest & keyof DeleteWorkspaceImageRequest & keyof DeleteWorkspaceImageRequest & keyof DeleteWorkspaceImageRequest & keyof DeleteWorkspaceImageRequest & keyof DeleteWorkspaceImageRequest & keyof DeleteWorkspaceImageRequest]: (DeleteWorkspaceImageRequest & DeleteWorkspaceImageRequest & DeleteWorkspaceImageRequest & DeleteWorkspaceImageRequest & DeleteWorkspaceImageRequest & DeleteWorkspaceImageRequest & DeleteWorkspaceImageRequest)[K]
    }>): Request<DeleteWorkspaceImageResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteWorkspaceImage(
          this.ops["DeleteWorkspaceImage"].applicator.apply(partialParams)
        );
    }

    invokeDeregisterWorkspaceDirectory(partialParams: ToOptional<{
      [K in keyof DeregisterWorkspaceDirectoryRequest & keyof DeregisterWorkspaceDirectoryRequest & keyof DeregisterWorkspaceDirectoryRequest & keyof DeregisterWorkspaceDirectoryRequest & keyof DeregisterWorkspaceDirectoryRequest & keyof DeregisterWorkspaceDirectoryRequest & keyof DeregisterWorkspaceDirectoryRequest]: (DeregisterWorkspaceDirectoryRequest & DeregisterWorkspaceDirectoryRequest & DeregisterWorkspaceDirectoryRequest & DeregisterWorkspaceDirectoryRequest & DeregisterWorkspaceDirectoryRequest & DeregisterWorkspaceDirectoryRequest & DeregisterWorkspaceDirectoryRequest)[K]
    }>): Request<DeregisterWorkspaceDirectoryResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterWorkspaceDirectory(
          this.ops["DeregisterWorkspaceDirectory"].applicator.apply(partialParams)
        );
    }

    invokeDescribeClientProperties(partialParams: ToOptional<{
      [K in keyof DescribeClientPropertiesRequest & keyof DescribeClientPropertiesRequest & keyof DescribeClientPropertiesRequest & keyof DescribeClientPropertiesRequest & keyof DescribeClientPropertiesRequest & keyof DescribeClientPropertiesRequest & keyof DescribeClientPropertiesRequest]: (DescribeClientPropertiesRequest & DescribeClientPropertiesRequest & DescribeClientPropertiesRequest & DescribeClientPropertiesRequest & DescribeClientPropertiesRequest & DescribeClientPropertiesRequest & DescribeClientPropertiesRequest)[K]
    }>): Request<DescribeClientPropertiesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeClientProperties(
          this.ops["DescribeClientProperties"].applicator.apply(partialParams)
        );
    }

    invokeDescribeConnectClientAddIns(partialParams: ToOptional<{
      [K in keyof DescribeConnectClientAddInsRequest & keyof DescribeConnectClientAddInsRequest & keyof DescribeConnectClientAddInsRequest & keyof DescribeConnectClientAddInsRequest & keyof DescribeConnectClientAddInsRequest & keyof DescribeConnectClientAddInsRequest & keyof DescribeConnectClientAddInsRequest]: (DescribeConnectClientAddInsRequest & DescribeConnectClientAddInsRequest & DescribeConnectClientAddInsRequest & DescribeConnectClientAddInsRequest & DescribeConnectClientAddInsRequest & DescribeConnectClientAddInsRequest & DescribeConnectClientAddInsRequest)[K]
    }>): Request<DescribeConnectClientAddInsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeConnectClientAddIns(
          this.ops["DescribeConnectClientAddIns"].applicator.apply(partialParams)
        );
    }

    invokeDescribeConnectionAliasPermissions(partialParams: ToOptional<{
      [K in keyof DescribeConnectionAliasPermissionsRequest & keyof DescribeConnectionAliasPermissionsRequest & keyof DescribeConnectionAliasPermissionsRequest & keyof DescribeConnectionAliasPermissionsRequest & keyof DescribeConnectionAliasPermissionsRequest & keyof DescribeConnectionAliasPermissionsRequest & keyof DescribeConnectionAliasPermissionsRequest]: (DescribeConnectionAliasPermissionsRequest & DescribeConnectionAliasPermissionsRequest & DescribeConnectionAliasPermissionsRequest & DescribeConnectionAliasPermissionsRequest & DescribeConnectionAliasPermissionsRequest & DescribeConnectionAliasPermissionsRequest & DescribeConnectionAliasPermissionsRequest)[K]
    }>): Request<DescribeConnectionAliasPermissionsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeConnectionAliasPermissions(
          this.ops["DescribeConnectionAliasPermissions"].applicator.apply(partialParams)
        );
    }

    invokeDescribeTags(partialParams: ToOptional<{
      [K in keyof DescribeTagsRequest & keyof DescribeTagsRequest & keyof DescribeTagsRequest & keyof DescribeTagsRequest & keyof DescribeTagsRequest & keyof DescribeTagsRequest & keyof DescribeTagsRequest]: (DescribeTagsRequest & DescribeTagsRequest & DescribeTagsRequest & DescribeTagsRequest & DescribeTagsRequest & DescribeTagsRequest & DescribeTagsRequest)[K]
    }>): Request<DescribeTagsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTags(
          this.ops["DescribeTags"].applicator.apply(partialParams)
        );
    }

    invokeDescribeWorkspaceImagePermissions(partialParams: ToOptional<{
      [K in keyof DescribeWorkspaceImagePermissionsRequest & keyof DescribeWorkspaceImagePermissionsRequest & keyof DescribeWorkspaceImagePermissionsRequest & keyof DescribeWorkspaceImagePermissionsRequest & keyof DescribeWorkspaceImagePermissionsRequest & keyof DescribeWorkspaceImagePermissionsRequest & keyof DescribeWorkspaceImagePermissionsRequest]: (DescribeWorkspaceImagePermissionsRequest & DescribeWorkspaceImagePermissionsRequest & DescribeWorkspaceImagePermissionsRequest & DescribeWorkspaceImagePermissionsRequest & DescribeWorkspaceImagePermissionsRequest & DescribeWorkspaceImagePermissionsRequest & DescribeWorkspaceImagePermissionsRequest)[K]
    }>): Request<DescribeWorkspaceImagePermissionsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeWorkspaceImagePermissions(
          this.ops["DescribeWorkspaceImagePermissions"].applicator.apply(partialParams)
        );
    }

    invokeDescribeWorkspaceSnapshots(partialParams: ToOptional<{
      [K in keyof DescribeWorkspaceSnapshotsRequest & keyof DescribeWorkspaceSnapshotsRequest & keyof DescribeWorkspaceSnapshotsRequest & keyof DescribeWorkspaceSnapshotsRequest & keyof DescribeWorkspaceSnapshotsRequest & keyof DescribeWorkspaceSnapshotsRequest & keyof DescribeWorkspaceSnapshotsRequest]: (DescribeWorkspaceSnapshotsRequest & DescribeWorkspaceSnapshotsRequest & DescribeWorkspaceSnapshotsRequest & DescribeWorkspaceSnapshotsRequest & DescribeWorkspaceSnapshotsRequest & DescribeWorkspaceSnapshotsRequest & DescribeWorkspaceSnapshotsRequest)[K]
    }>): Request<DescribeWorkspaceSnapshotsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeWorkspaceSnapshots(
          this.ops["DescribeWorkspaceSnapshots"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateConnectionAlias(partialParams: ToOptional<{
      [K in keyof DisassociateConnectionAliasRequest & keyof DisassociateConnectionAliasRequest & keyof DisassociateConnectionAliasRequest & keyof DisassociateConnectionAliasRequest & keyof DisassociateConnectionAliasRequest & keyof DisassociateConnectionAliasRequest & keyof DisassociateConnectionAliasRequest]: (DisassociateConnectionAliasRequest & DisassociateConnectionAliasRequest & DisassociateConnectionAliasRequest & DisassociateConnectionAliasRequest & DisassociateConnectionAliasRequest & DisassociateConnectionAliasRequest & DisassociateConnectionAliasRequest)[K]
    }>): Request<DisassociateConnectionAliasResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateConnectionAlias(
          this.ops["DisassociateConnectionAlias"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateIpGroups(partialParams: ToOptional<{
      [K in keyof DisassociateIpGroupsRequest & keyof DisassociateIpGroupsRequest & keyof Omit<DisassociateIpGroupsRequest, "DirectoryId"> & keyof DisassociateIpGroupsRequest & keyof DisassociateIpGroupsRequest & keyof DisassociateIpGroupsRequest & keyof DisassociateIpGroupsRequest]: (DisassociateIpGroupsRequest & DisassociateIpGroupsRequest & Omit<DisassociateIpGroupsRequest, "DirectoryId"> & DisassociateIpGroupsRequest & DisassociateIpGroupsRequest & DisassociateIpGroupsRequest & DisassociateIpGroupsRequest)[K]
    }>): Request<DisassociateIpGroupsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateIpGroups(
          this.ops["DisassociateIpGroups"].applicator.apply(partialParams)
        );
    }

    invokeImportWorkspaceImage(partialParams: ToOptional<{
      [K in keyof ImportWorkspaceImageRequest & keyof ImportWorkspaceImageRequest & keyof ImportWorkspaceImageRequest & keyof ImportWorkspaceImageRequest & keyof ImportWorkspaceImageRequest & keyof ImportWorkspaceImageRequest & keyof ImportWorkspaceImageRequest]: (ImportWorkspaceImageRequest & ImportWorkspaceImageRequest & ImportWorkspaceImageRequest & ImportWorkspaceImageRequest & ImportWorkspaceImageRequest & ImportWorkspaceImageRequest & ImportWorkspaceImageRequest)[K]
    }>): Request<ImportWorkspaceImageResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importWorkspaceImage(
          this.ops["ImportWorkspaceImage"].applicator.apply(partialParams)
        );
    }

    invokeListAvailableManagementCidrRanges(partialParams: ToOptional<{
      [K in keyof ListAvailableManagementCidrRangesRequest & keyof ListAvailableManagementCidrRangesRequest & keyof ListAvailableManagementCidrRangesRequest & keyof ListAvailableManagementCidrRangesRequest & keyof ListAvailableManagementCidrRangesRequest & keyof ListAvailableManagementCidrRangesRequest & keyof ListAvailableManagementCidrRangesRequest]: (ListAvailableManagementCidrRangesRequest & ListAvailableManagementCidrRangesRequest & ListAvailableManagementCidrRangesRequest & ListAvailableManagementCidrRangesRequest & ListAvailableManagementCidrRangesRequest & ListAvailableManagementCidrRangesRequest & ListAvailableManagementCidrRangesRequest)[K]
    }>): Request<ListAvailableManagementCidrRangesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAvailableManagementCidrRanges(
          this.ops["ListAvailableManagementCidrRanges"].applicator.apply(partialParams)
        );
    }

    invokeMigrateWorkspace(partialParams: ToOptional<{
      [K in keyof Omit<MigrateWorkspaceRequest, "BundleId"> & keyof MigrateWorkspaceRequest & keyof MigrateWorkspaceRequest & keyof MigrateWorkspaceRequest & keyof MigrateWorkspaceRequest & keyof MigrateWorkspaceRequest & keyof MigrateWorkspaceRequest]: (Omit<MigrateWorkspaceRequest, "BundleId"> & MigrateWorkspaceRequest & MigrateWorkspaceRequest & MigrateWorkspaceRequest & MigrateWorkspaceRequest & MigrateWorkspaceRequest & MigrateWorkspaceRequest)[K]
    }>): Request<MigrateWorkspaceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.migrateWorkspace(
          this.ops["MigrateWorkspace"].applicator.apply(partialParams)
        );
    }

    invokeModifyClientProperties(partialParams: ToOptional<{
      [K in keyof ModifyClientPropertiesRequest & keyof ModifyClientPropertiesRequest & keyof ModifyClientPropertiesRequest & keyof ModifyClientPropertiesRequest & keyof ModifyClientPropertiesRequest & keyof ModifyClientPropertiesRequest & keyof ModifyClientPropertiesRequest]: (ModifyClientPropertiesRequest & ModifyClientPropertiesRequest & ModifyClientPropertiesRequest & ModifyClientPropertiesRequest & ModifyClientPropertiesRequest & ModifyClientPropertiesRequest & ModifyClientPropertiesRequest)[K]
    }>): Request<ModifyClientPropertiesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyClientProperties(
          this.ops["ModifyClientProperties"].applicator.apply(partialParams)
        );
    }

    invokeModifySelfservicePermissions(partialParams: ToOptional<{
      [K in keyof ModifySelfservicePermissionsRequest & keyof ModifySelfservicePermissionsRequest & keyof Omit<ModifySelfservicePermissionsRequest, "ResourceId"> & keyof ModifySelfservicePermissionsRequest & keyof ModifySelfservicePermissionsRequest & keyof ModifySelfservicePermissionsRequest & keyof ModifySelfservicePermissionsRequest]: (ModifySelfservicePermissionsRequest & ModifySelfservicePermissionsRequest & Omit<ModifySelfservicePermissionsRequest, "ResourceId"> & ModifySelfservicePermissionsRequest & ModifySelfservicePermissionsRequest & ModifySelfservicePermissionsRequest & ModifySelfservicePermissionsRequest)[K]
    }>): Request<ModifySelfservicePermissionsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifySelfservicePermissions(
          this.ops["ModifySelfservicePermissions"].applicator.apply(partialParams)
        );
    }

    invokeModifyWorkspaceAccessProperties(partialParams: ToOptional<{
      [K in keyof ModifyWorkspaceAccessPropertiesRequest & keyof ModifyWorkspaceAccessPropertiesRequest & keyof Omit<ModifyWorkspaceAccessPropertiesRequest, "ResourceId"> & keyof ModifyWorkspaceAccessPropertiesRequest & keyof ModifyWorkspaceAccessPropertiesRequest & keyof ModifyWorkspaceAccessPropertiesRequest & keyof ModifyWorkspaceAccessPropertiesRequest]: (ModifyWorkspaceAccessPropertiesRequest & ModifyWorkspaceAccessPropertiesRequest & Omit<ModifyWorkspaceAccessPropertiesRequest, "ResourceId"> & ModifyWorkspaceAccessPropertiesRequest & ModifyWorkspaceAccessPropertiesRequest & ModifyWorkspaceAccessPropertiesRequest & ModifyWorkspaceAccessPropertiesRequest)[K]
    }>): Request<ModifyWorkspaceAccessPropertiesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyWorkspaceAccessProperties(
          this.ops["ModifyWorkspaceAccessProperties"].applicator.apply(partialParams)
        );
    }

    invokeModifyWorkspaceCreationProperties(partialParams: ToOptional<{
      [K in keyof ModifyWorkspaceCreationPropertiesRequest & keyof ModifyWorkspaceCreationPropertiesRequest & keyof Omit<ModifyWorkspaceCreationPropertiesRequest, "ResourceId"> & keyof ModifyWorkspaceCreationPropertiesRequest & keyof ModifyWorkspaceCreationPropertiesRequest & keyof ModifyWorkspaceCreationPropertiesRequest & keyof ModifyWorkspaceCreationPropertiesRequest]: (ModifyWorkspaceCreationPropertiesRequest & ModifyWorkspaceCreationPropertiesRequest & Omit<ModifyWorkspaceCreationPropertiesRequest, "ResourceId"> & ModifyWorkspaceCreationPropertiesRequest & ModifyWorkspaceCreationPropertiesRequest & ModifyWorkspaceCreationPropertiesRequest & ModifyWorkspaceCreationPropertiesRequest)[K]
    }>): Request<ModifyWorkspaceCreationPropertiesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyWorkspaceCreationProperties(
          this.ops["ModifyWorkspaceCreationProperties"].applicator.apply(partialParams)
        );
    }

    invokeModifyWorkspaceProperties(partialParams: ToOptional<{
      [K in keyof ModifyWorkspacePropertiesRequest & keyof ModifyWorkspacePropertiesRequest & keyof ModifyWorkspacePropertiesRequest & keyof ModifyWorkspacePropertiesRequest & keyof ModifyWorkspacePropertiesRequest & keyof ModifyWorkspacePropertiesRequest & keyof ModifyWorkspacePropertiesRequest]: (ModifyWorkspacePropertiesRequest & ModifyWorkspacePropertiesRequest & ModifyWorkspacePropertiesRequest & ModifyWorkspacePropertiesRequest & ModifyWorkspacePropertiesRequest & ModifyWorkspacePropertiesRequest & ModifyWorkspacePropertiesRequest)[K]
    }>): Request<ModifyWorkspacePropertiesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyWorkspaceProperties(
          this.ops["ModifyWorkspaceProperties"].applicator.apply(partialParams)
        );
    }

    invokeModifyWorkspaceState(partialParams: ToOptional<{
      [K in keyof ModifyWorkspaceStateRequest & keyof ModifyWorkspaceStateRequest & keyof ModifyWorkspaceStateRequest & keyof ModifyWorkspaceStateRequest & keyof ModifyWorkspaceStateRequest & keyof ModifyWorkspaceStateRequest & keyof ModifyWorkspaceStateRequest]: (ModifyWorkspaceStateRequest & ModifyWorkspaceStateRequest & ModifyWorkspaceStateRequest & ModifyWorkspaceStateRequest & ModifyWorkspaceStateRequest & ModifyWorkspaceStateRequest & ModifyWorkspaceStateRequest)[K]
    }>): Request<ModifyWorkspaceStateResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyWorkspaceState(
          this.ops["ModifyWorkspaceState"].applicator.apply(partialParams)
        );
    }

    invokeRebootWorkspaces(partialParams: ToOptional<{
      [K in keyof RebootWorkspacesRequest & keyof RebootWorkspacesRequest & keyof RebootWorkspacesRequest & keyof RebootWorkspacesRequest & keyof RebootWorkspacesRequest & keyof RebootWorkspacesRequest & keyof RebootWorkspacesRequest]: (RebootWorkspacesRequest & RebootWorkspacesRequest & RebootWorkspacesRequest & RebootWorkspacesRequest & RebootWorkspacesRequest & RebootWorkspacesRequest & RebootWorkspacesRequest)[K]
    }>): Request<RebootWorkspacesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rebootWorkspaces(
          this.ops["RebootWorkspaces"].applicator.apply(partialParams)
        );
    }

    invokeRebuildWorkspaces(partialParams: ToOptional<{
      [K in keyof RebuildWorkspacesRequest & keyof RebuildWorkspacesRequest & keyof RebuildWorkspacesRequest & keyof RebuildWorkspacesRequest & keyof RebuildWorkspacesRequest & keyof RebuildWorkspacesRequest & keyof RebuildWorkspacesRequest]: (RebuildWorkspacesRequest & RebuildWorkspacesRequest & RebuildWorkspacesRequest & RebuildWorkspacesRequest & RebuildWorkspacesRequest & RebuildWorkspacesRequest & RebuildWorkspacesRequest)[K]
    }>): Request<RebuildWorkspacesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rebuildWorkspaces(
          this.ops["RebuildWorkspaces"].applicator.apply(partialParams)
        );
    }

    invokeRegisterWorkspaceDirectory(partialParams: ToOptional<{
      [K in keyof RegisterWorkspaceDirectoryRequest & keyof RegisterWorkspaceDirectoryRequest & keyof Omit<RegisterWorkspaceDirectoryRequest, "DirectoryId"> & keyof RegisterWorkspaceDirectoryRequest & keyof RegisterWorkspaceDirectoryRequest & keyof RegisterWorkspaceDirectoryRequest & keyof RegisterWorkspaceDirectoryRequest]: (RegisterWorkspaceDirectoryRequest & RegisterWorkspaceDirectoryRequest & Omit<RegisterWorkspaceDirectoryRequest, "DirectoryId"> & RegisterWorkspaceDirectoryRequest & RegisterWorkspaceDirectoryRequest & RegisterWorkspaceDirectoryRequest & RegisterWorkspaceDirectoryRequest)[K]
    }>): Request<RegisterWorkspaceDirectoryResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerWorkspaceDirectory(
          this.ops["RegisterWorkspaceDirectory"].applicator.apply(partialParams)
        );
    }

    invokeRestoreWorkspace(partialParams: ToOptional<{
      [K in keyof RestoreWorkspaceRequest & keyof RestoreWorkspaceRequest & keyof RestoreWorkspaceRequest & keyof RestoreWorkspaceRequest & keyof RestoreWorkspaceRequest & keyof RestoreWorkspaceRequest & keyof RestoreWorkspaceRequest]: (RestoreWorkspaceRequest & RestoreWorkspaceRequest & RestoreWorkspaceRequest & RestoreWorkspaceRequest & RestoreWorkspaceRequest & RestoreWorkspaceRequest & RestoreWorkspaceRequest)[K]
    }>): Request<RestoreWorkspaceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreWorkspace(
          this.ops["RestoreWorkspace"].applicator.apply(partialParams)
        );
    }

    invokeRevokeIpRules(partialParams: ToOptional<{
      [K in keyof RevokeIpRulesRequest & keyof RevokeIpRulesRequest & keyof RevokeIpRulesRequest & keyof RevokeIpRulesRequest & keyof RevokeIpRulesRequest & keyof RevokeIpRulesRequest & keyof RevokeIpRulesRequest]: (RevokeIpRulesRequest & RevokeIpRulesRequest & RevokeIpRulesRequest & RevokeIpRulesRequest & RevokeIpRulesRequest & RevokeIpRulesRequest & RevokeIpRulesRequest)[K]
    }>): Request<RevokeIpRulesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.revokeIpRules(
          this.ops["RevokeIpRules"].applicator.apply(partialParams)
        );
    }

    invokeStartWorkspaces(partialParams: ToOptional<{
      [K in keyof StartWorkspacesRequest & keyof StartWorkspacesRequest & keyof StartWorkspacesRequest & keyof StartWorkspacesRequest & keyof StartWorkspacesRequest & keyof StartWorkspacesRequest & keyof StartWorkspacesRequest]: (StartWorkspacesRequest & StartWorkspacesRequest & StartWorkspacesRequest & StartWorkspacesRequest & StartWorkspacesRequest & StartWorkspacesRequest & StartWorkspacesRequest)[K]
    }>): Request<StartWorkspacesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startWorkspaces(
          this.ops["StartWorkspaces"].applicator.apply(partialParams)
        );
    }

    invokeStopWorkspaces(partialParams: ToOptional<{
      [K in keyof StopWorkspacesRequest & keyof StopWorkspacesRequest & keyof StopWorkspacesRequest & keyof StopWorkspacesRequest & keyof StopWorkspacesRequest & keyof StopWorkspacesRequest & keyof StopWorkspacesRequest]: (StopWorkspacesRequest & StopWorkspacesRequest & StopWorkspacesRequest & StopWorkspacesRequest & StopWorkspacesRequest & StopWorkspacesRequest & StopWorkspacesRequest)[K]
    }>): Request<StopWorkspacesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopWorkspaces(
          this.ops["StopWorkspaces"].applicator.apply(partialParams)
        );
    }

    invokeTerminateWorkspaces(partialParams: ToOptional<{
      [K in keyof TerminateWorkspacesRequest & keyof TerminateWorkspacesRequest & keyof TerminateWorkspacesRequest & keyof TerminateWorkspacesRequest & keyof TerminateWorkspacesRequest & keyof TerminateWorkspacesRequest & keyof TerminateWorkspacesRequest]: (TerminateWorkspacesRequest & TerminateWorkspacesRequest & TerminateWorkspacesRequest & TerminateWorkspacesRequest & TerminateWorkspacesRequest & TerminateWorkspacesRequest & TerminateWorkspacesRequest)[K]
    }>): Request<TerminateWorkspacesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.terminateWorkspaces(
          this.ops["TerminateWorkspaces"].applicator.apply(partialParams)
        );
    }

    invokeUpdateConnectClientAddIn(partialParams: ToOptional<{
      [K in keyof UpdateConnectClientAddInRequest & keyof UpdateConnectClientAddInRequest & keyof Omit<UpdateConnectClientAddInRequest, "ResourceId"> & keyof UpdateConnectClientAddInRequest & keyof UpdateConnectClientAddInRequest & keyof UpdateConnectClientAddInRequest & keyof UpdateConnectClientAddInRequest]: (UpdateConnectClientAddInRequest & UpdateConnectClientAddInRequest & Omit<UpdateConnectClientAddInRequest, "ResourceId"> & UpdateConnectClientAddInRequest & UpdateConnectClientAddInRequest & UpdateConnectClientAddInRequest & UpdateConnectClientAddInRequest)[K]
    }>): Request<UpdateConnectClientAddInResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateConnectClientAddIn(
          this.ops["UpdateConnectClientAddIn"].applicator.apply(partialParams)
        );
    }

    invokeUpdateConnectionAliasPermission(partialParams: ToOptional<{
      [K in keyof UpdateConnectionAliasPermissionRequest & keyof UpdateConnectionAliasPermissionRequest & keyof UpdateConnectionAliasPermissionRequest & keyof UpdateConnectionAliasPermissionRequest & keyof UpdateConnectionAliasPermissionRequest & keyof UpdateConnectionAliasPermissionRequest & keyof UpdateConnectionAliasPermissionRequest]: (UpdateConnectionAliasPermissionRequest & UpdateConnectionAliasPermissionRequest & UpdateConnectionAliasPermissionRequest & UpdateConnectionAliasPermissionRequest & UpdateConnectionAliasPermissionRequest & UpdateConnectionAliasPermissionRequest & UpdateConnectionAliasPermissionRequest)[K]
    }>): Request<UpdateConnectionAliasPermissionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateConnectionAliasPermission(
          this.ops["UpdateConnectionAliasPermission"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRulesOfIpGroup(partialParams: ToOptional<{
      [K in keyof UpdateRulesOfIpGroupRequest & keyof UpdateRulesOfIpGroupRequest & keyof UpdateRulesOfIpGroupRequest & keyof UpdateRulesOfIpGroupRequest & keyof UpdateRulesOfIpGroupRequest & keyof UpdateRulesOfIpGroupRequest & keyof UpdateRulesOfIpGroupRequest]: (UpdateRulesOfIpGroupRequest & UpdateRulesOfIpGroupRequest & UpdateRulesOfIpGroupRequest & UpdateRulesOfIpGroupRequest & UpdateRulesOfIpGroupRequest & UpdateRulesOfIpGroupRequest & UpdateRulesOfIpGroupRequest)[K]
    }>): Request<UpdateRulesOfIpGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRulesOfIpGroup(
          this.ops["UpdateRulesOfIpGroup"].applicator.apply(partialParams)
        );
    }

    invokeUpdateWorkspaceImagePermission(partialParams: ToOptional<{
      [K in keyof UpdateWorkspaceImagePermissionRequest & keyof UpdateWorkspaceImagePermissionRequest & keyof UpdateWorkspaceImagePermissionRequest & keyof UpdateWorkspaceImagePermissionRequest & keyof UpdateWorkspaceImagePermissionRequest & keyof UpdateWorkspaceImagePermissionRequest & keyof UpdateWorkspaceImagePermissionRequest]: (UpdateWorkspaceImagePermissionRequest & UpdateWorkspaceImagePermissionRequest & UpdateWorkspaceImagePermissionRequest & UpdateWorkspaceImagePermissionRequest & UpdateWorkspaceImagePermissionRequest & UpdateWorkspaceImagePermissionRequest & UpdateWorkspaceImagePermissionRequest)[K]
    }>): Request<UpdateWorkspaceImagePermissionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateWorkspaceImagePermission(
          this.ops["UpdateWorkspaceImagePermission"].applicator.apply(partialParams)
        );
    }
}