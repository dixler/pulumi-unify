
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateLocationFsxLustreRequest,
    CreateLocationFsxWindowsRequest,
    CreateLocationNfsRequest,
    CreateLocationSmbRequest,
    CreateLocationFsxLustreResponse,
    CreateLocationFsxWindowsResponse,
    CreateLocationNfsResponse,
    CreateLocationSmbResponse
} from "aws-sdk/clients/datasync";
const schema = require("../apis/datasync-2018-11-09.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.datasync.LocationFsxWindows {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.datasync.LocationFsxWindows>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.DataSync()
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

    invokeCreateLocationFsxLustre(partialParams: ToOptional<{
      [K in keyof CreateLocationFsxLustreRequest & keyof Omit<CreateLocationFsxLustreRequest, "FsxFilesystemArn">]: (CreateLocationFsxLustreRequest)[K]
    }>): Request<CreateLocationFsxLustreResponse, AWSError> {
        this.boot();
        return this.client.createLocationFsxLustre(
          this.ops["CreateLocationFsxLustre"].apply(partialParams)
        );
    }

    invokeCreateLocationFsxWindows(partialParams: ToOptional<{
      [K in keyof CreateLocationFsxWindowsRequest & keyof Omit<CreateLocationFsxWindowsRequest, "FsxFilesystemArn" | "User" | "Password">]: (CreateLocationFsxWindowsRequest)[K]
    }>): Request<CreateLocationFsxWindowsResponse, AWSError> {
        this.boot();
        return this.client.createLocationFsxWindows(
          this.ops["CreateLocationFsxWindows"].apply(partialParams)
        );
    }

    invokeCreateLocationNfs(partialParams: ToOptional<{
      [K in keyof CreateLocationNfsRequest & keyof Omit<CreateLocationNfsRequest, "Subdirectory">]: (CreateLocationNfsRequest)[K]
    }>): Request<CreateLocationNfsResponse, AWSError> {
        this.boot();
        return this.client.createLocationNfs(
          this.ops["CreateLocationNfs"].apply(partialParams)
        );
    }

    invokeCreateLocationSmb(partialParams: ToOptional<{
      [K in keyof CreateLocationSmbRequest & keyof Omit<CreateLocationSmbRequest, "Subdirectory" | "User" | "Password">]: (CreateLocationSmbRequest)[K]
    }>): Request<CreateLocationSmbResponse, AWSError> {
        this.boot();
        return this.client.createLocationSmb(
          this.ops["CreateLocationSmb"].apply(partialParams)
        );
    }
}