
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AssociateIpGroupsRequest,
    DeregisterWorkspaceDirectoryRequest,
    DisassociateIpGroupsRequest,
    MigrateWorkspaceRequest,
    ModifyWorkspaceStateRequest,
    RegisterWorkspaceDirectoryRequest,
    AssociateIpGroupsResult,
    DeregisterWorkspaceDirectoryResult,
    DisassociateIpGroupsResult,
    MigrateWorkspaceResult,
    ModifyWorkspaceStateResult,
    RegisterWorkspaceDirectoryResult
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

    invokeAssociateIpGroups(partialParams: ToOptional<{
      [K in keyof AssociateIpGroupsRequest & keyof Omit<AssociateIpGroupsRequest, "DirectoryId">]: (AssociateIpGroupsRequest)[K]
    }>): Request<AssociateIpGroupsResult, AWSError> {
        this.boot();
        return this.client.associateIpGroups(
          this.ops["AssociateIpGroups"].apply(partialParams)
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

    invokeDisassociateIpGroups(partialParams: ToOptional<{
      [K in keyof DisassociateIpGroupsRequest & keyof Omit<DisassociateIpGroupsRequest, "DirectoryId">]: (DisassociateIpGroupsRequest)[K]
    }>): Request<DisassociateIpGroupsResult, AWSError> {
        this.boot();
        return this.client.disassociateIpGroups(
          this.ops["DisassociateIpGroups"].apply(partialParams)
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

    invokeModifyWorkspaceState(partialParams: ToOptional<{
      [K in keyof ModifyWorkspaceStateRequest & keyof Omit<ModifyWorkspaceStateRequest, "WorkspaceState">]: (ModifyWorkspaceStateRequest)[K]
    }>): Request<ModifyWorkspaceStateResult, AWSError> {
        this.boot();
        return this.client.modifyWorkspaceState(
          this.ops["ModifyWorkspaceState"].apply(partialParams)
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
}