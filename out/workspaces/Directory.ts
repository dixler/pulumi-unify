
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AssociateIpGroupsRequest,
    DeregisterWorkspaceDirectoryRequest,
    DisassociateIpGroupsRequest,
    RegisterWorkspaceDirectoryRequest,
    AssociateIpGroupsResult,
    DeregisterWorkspaceDirectoryResult,
    DisassociateIpGroupsResult,
    RegisterWorkspaceDirectoryResult
} from "aws-sdk/clients/workspaces";
const schema = require("../apis/workspaces-2015-04-08.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.workspaces.Directory {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.workspaces.Directory>) {
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

    invokeRegisterWorkspaceDirectory(partialParams: ToOptional<{
      [K in keyof RegisterWorkspaceDirectoryRequest & keyof Omit<RegisterWorkspaceDirectoryRequest, "DirectoryId">]: (RegisterWorkspaceDirectoryRequest)[K]
    }>): Request<RegisterWorkspaceDirectoryResult, AWSError> {
        this.boot();
        return this.client.registerWorkspaceDirectory(
          this.ops["RegisterWorkspaceDirectory"].apply(partialParams)
        );
    }
}