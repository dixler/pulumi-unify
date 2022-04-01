
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateBackupVaultInput,
    DescribeBackupVaultInput,
    DescribeRecoveryPointInput,
    GetBackupVaultAccessPolicyInput,
    GetBackupVaultNotificationsInput,
    GetRecoveryPointRestoreMetadataInput,
    ListRecoveryPointsByBackupVaultInput,
    StartBackupJobInput,
    UpdateRecoveryPointLifecycleInput,
    CreateBackupVaultOutput,
    DescribeBackupVaultOutput,
    DescribeRecoveryPointOutput,
    GetBackupVaultAccessPolicyOutput,
    GetBackupVaultNotificationsOutput,
    GetRecoveryPointRestoreMetadataOutput,
    ListRecoveryPointsByBackupVaultOutput,
    StartBackupJobOutput,
    UpdateRecoveryPointLifecycleOutput
} from "aws-sdk/clients/backup";
const schema = require("../apis/backup-2018-11-15.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.backup.VaultPolicy {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.backup.VaultPolicy>) {
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

    invokeCreateBackupVault(partialParams: ToOptional<{
      [K in keyof CreateBackupVaultInput & keyof Omit<CreateBackupVaultInput, "BackupVaultName">]: (CreateBackupVaultInput)[K]
    }>): Request<CreateBackupVaultOutput, AWSError> {
        this.boot();
        return this.client.createBackupVault(
          this.ops["CreateBackupVault"].apply(partialParams)
        );
    }

    invokeDescribeBackupVault(partialParams: ToOptional<{
      [K in keyof DescribeBackupVaultInput & keyof Omit<DescribeBackupVaultInput, "BackupVaultName">]: (DescribeBackupVaultInput)[K]
    }>): Request<DescribeBackupVaultOutput, AWSError> {
        this.boot();
        return this.client.describeBackupVault(
          this.ops["DescribeBackupVault"].apply(partialParams)
        );
    }

    invokeDescribeRecoveryPoint(partialParams: ToOptional<{
      [K in keyof DescribeRecoveryPointInput & keyof Omit<DescribeRecoveryPointInput, "BackupVaultName">]: (DescribeRecoveryPointInput)[K]
    }>): Request<DescribeRecoveryPointOutput, AWSError> {
        this.boot();
        return this.client.describeRecoveryPoint(
          this.ops["DescribeRecoveryPoint"].apply(partialParams)
        );
    }

    invokeGetBackupVaultAccessPolicy(partialParams: ToOptional<{
      [K in keyof GetBackupVaultAccessPolicyInput & keyof Omit<GetBackupVaultAccessPolicyInput, "BackupVaultName">]: (GetBackupVaultAccessPolicyInput)[K]
    }>): Request<GetBackupVaultAccessPolicyOutput, AWSError> {
        this.boot();
        return this.client.getBackupVaultAccessPolicy(
          this.ops["GetBackupVaultAccessPolicy"].apply(partialParams)
        );
    }

    invokeGetBackupVaultNotifications(partialParams: ToOptional<{
      [K in keyof GetBackupVaultNotificationsInput & keyof Omit<GetBackupVaultNotificationsInput, "BackupVaultName">]: (GetBackupVaultNotificationsInput)[K]
    }>): Request<GetBackupVaultNotificationsOutput, AWSError> {
        this.boot();
        return this.client.getBackupVaultNotifications(
          this.ops["GetBackupVaultNotifications"].apply(partialParams)
        );
    }

    invokeGetRecoveryPointRestoreMetadata(partialParams: ToOptional<{
      [K in keyof GetRecoveryPointRestoreMetadataInput & keyof Omit<GetRecoveryPointRestoreMetadataInput, "BackupVaultName">]: (GetRecoveryPointRestoreMetadataInput)[K]
    }>): Request<GetRecoveryPointRestoreMetadataOutput, AWSError> {
        this.boot();
        return this.client.getRecoveryPointRestoreMetadata(
          this.ops["GetRecoveryPointRestoreMetadata"].apply(partialParams)
        );
    }

    invokeListRecoveryPointsByBackupVault(partialParams: ToOptional<{
      [K in keyof ListRecoveryPointsByBackupVaultInput & keyof Omit<ListRecoveryPointsByBackupVaultInput, "BackupVaultName">]: (ListRecoveryPointsByBackupVaultInput)[K]
    }>): Request<ListRecoveryPointsByBackupVaultOutput, AWSError> {
        this.boot();
        return this.client.listRecoveryPointsByBackupVault(
          this.ops["ListRecoveryPointsByBackupVault"].apply(partialParams)
        );
    }

    invokeStartBackupJob(partialParams: ToOptional<{
      [K in keyof StartBackupJobInput & keyof Omit<StartBackupJobInput, "BackupVaultName">]: (StartBackupJobInput)[K]
    }>): Request<StartBackupJobOutput, AWSError> {
        this.boot();
        return this.client.startBackupJob(
          this.ops["StartBackupJob"].apply(partialParams)
        );
    }

    invokeUpdateRecoveryPointLifecycle(partialParams: ToOptional<{
      [K in keyof UpdateRecoveryPointLifecycleInput & keyof Omit<UpdateRecoveryPointLifecycleInput, "BackupVaultName">]: (UpdateRecoveryPointLifecycleInput)[K]
    }>): Request<UpdateRecoveryPointLifecycleOutput, AWSError> {
        this.boot();
        return this.client.updateRecoveryPointLifecycle(
          this.ops["UpdateRecoveryPointLifecycle"].apply(partialParams)
        );
    }
}