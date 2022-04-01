
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CopyWorkspaceImageRequest,
    CreateConnectClientAddInRequest,
    CreateUpdatedWorkspaceImageRequest,
    CopyWorkspaceImageResult,
    CreateConnectClientAddInResult,
    CreateUpdatedWorkspaceImageResult
} from "aws-sdk/clients/workspaces";
const schema = require("../apis/workspaces-2015-04-08.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.workspaces.IpGroup {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.workspaces.IpGroup>) {
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

    invokeCopyWorkspaceImage(partialParams: ToOptional<{
      [K in keyof CopyWorkspaceImageRequest & keyof Omit<CopyWorkspaceImageRequest, "Name">]: (CopyWorkspaceImageRequest)[K]
    }>): Request<CopyWorkspaceImageResult, AWSError> {
        this.boot();
        return this.client.copyWorkspaceImage(
          this.ops["CopyWorkspaceImage"].apply(partialParams)
        );
    }

    invokeCreateConnectClientAddIn(partialParams: ToOptional<{
      [K in keyof CreateConnectClientAddInRequest & keyof Omit<CreateConnectClientAddInRequest, "Name">]: (CreateConnectClientAddInRequest)[K]
    }>): Request<CreateConnectClientAddInResult, AWSError> {
        this.boot();
        return this.client.createConnectClientAddIn(
          this.ops["CreateConnectClientAddIn"].apply(partialParams)
        );
    }

    invokeCreateUpdatedWorkspaceImage(partialParams: ToOptional<{
      [K in keyof CreateUpdatedWorkspaceImageRequest & keyof Omit<CreateUpdatedWorkspaceImageRequest, "Name" | "Description">]: (CreateUpdatedWorkspaceImageRequest)[K]
    }>): Request<CreateUpdatedWorkspaceImageResult, AWSError> {
        this.boot();
        return this.client.createUpdatedWorkspaceImage(
          this.ops["CreateUpdatedWorkspaceImage"].apply(partialParams)
        );
    }
}