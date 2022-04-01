
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    StartBackupJobInput,
    StartCopyJobInput,
    StartRestoreJobInput,
    StartBackupJobOutput,
    StartCopyJobOutput,
    StartRestoreJobOutput
} from "aws-sdk/clients/backup";
const schema = require("../apis/backup-2018-11-15.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.backup.Selection {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.backup.Selection>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Backup()
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

    invokeStartBackupJob(partialParams: ToOptional<{
      [K in keyof StartBackupJobInput & keyof Omit<StartBackupJobInput, "IamRoleArn">]: (StartBackupJobInput)[K]
    }>): Request<StartBackupJobOutput, AWSError> {
        this.boot();
        return this.client.startBackupJob(
          this.ops["StartBackupJob"].apply(partialParams)
        );
    }

    invokeStartCopyJob(partialParams: ToOptional<{
      [K in keyof StartCopyJobInput & keyof Omit<StartCopyJobInput, "IamRoleArn">]: (StartCopyJobInput)[K]
    }>): Request<StartCopyJobOutput, AWSError> {
        this.boot();
        return this.client.startCopyJob(
          this.ops["StartCopyJob"].apply(partialParams)
        );
    }

    invokeStartRestoreJob(partialParams: ToOptional<{
      [K in keyof StartRestoreJobInput & keyof Omit<StartRestoreJobInput, "IamRoleArn">]: (StartRestoreJobInput)[K]
    }>): Request<StartRestoreJobOutput, AWSError> {
        this.boot();
        return this.client.startRestoreJob(
          this.ops["StartRestoreJob"].apply(partialParams)
        );
    }
}