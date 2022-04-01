
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateDirectoryConfigRequest,
    DeleteDirectoryConfigRequest,
    UpdateDirectoryConfigRequest,
    CreateDirectoryConfigResult,
    DeleteDirectoryConfigResult,
    UpdateDirectoryConfigResult
} from "aws-sdk/clients/appstream";
const schema = require("../apis/appstream-2016-12-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.appstream.DirectoryConfig {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.appstream.DirectoryConfig>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.AppStream()
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

    invokeCreateDirectoryConfig(partialParams: ToOptional<{
      [K in keyof CreateDirectoryConfigRequest & keyof Omit<CreateDirectoryConfigRequest, "DirectoryName">]: (CreateDirectoryConfigRequest)[K]
    }>): Request<CreateDirectoryConfigResult, AWSError> {
        this.boot();
        return this.client.createDirectoryConfig(
          this.ops["CreateDirectoryConfig"].apply(partialParams)
        );
    }

    invokeDeleteDirectoryConfig(partialParams: ToOptional<{
      [K in keyof DeleteDirectoryConfigRequest & keyof Omit<DeleteDirectoryConfigRequest, "DirectoryName">]: (DeleteDirectoryConfigRequest)[K]
    }>): Request<DeleteDirectoryConfigResult, AWSError> {
        this.boot();
        return this.client.deleteDirectoryConfig(
          this.ops["DeleteDirectoryConfig"].apply(partialParams)
        );
    }

    invokeUpdateDirectoryConfig(partialParams: ToOptional<{
      [K in keyof UpdateDirectoryConfigRequest & keyof Omit<UpdateDirectoryConfigRequest, "DirectoryName">]: (UpdateDirectoryConfigRequest)[K]
    }>): Request<UpdateDirectoryConfigResult, AWSError> {
        this.boot();
        return this.client.updateDirectoryConfig(
          this.ops["UpdateDirectoryConfig"].apply(partialParams)
        );
    }
}