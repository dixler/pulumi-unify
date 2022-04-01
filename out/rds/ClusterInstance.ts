
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateCustomDBEngineVersionMessage,
    CreateDBClusterMessage,
    CreateDBInstanceMessage,
    DeleteCustomDBEngineVersionMessage,
    DescribeOrderableDBInstanceOptionsMessage,
    ImportInstallationMediaMessage,
    ModifyCustomDBEngineVersionMessage,
    RestoreDBClusterFromS3Message,
    RestoreDBClusterFromSnapshotMessage,
    RestoreDBInstanceFromS3Message,
    StartActivityStreamRequest,
    StartExportTaskMessage,
    DBEngineVersion,
    CreateDBClusterResult,
    CreateDBInstanceResult,
    OrderableDBInstanceOptionsMessage,
    InstallationMedia,
    RestoreDBClusterFromS3Result,
    RestoreDBClusterFromSnapshotResult,
    RestoreDBInstanceFromS3Result,
    StartActivityStreamResponse,
    ExportTask
} from "aws-sdk/clients/rds";
const schema = require("../apis/rds-2014-10-31.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.rds.ClusterInstance {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.rds.ClusterInstance>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.RDS()
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

    invokeCreateCustomDBEngineVersion(partialParams: ToOptional<{
      [K in keyof CreateCustomDBEngineVersionMessage & keyof Omit<CreateCustomDBEngineVersionMessage, "Engine" | "EngineVersion">]: (CreateCustomDBEngineVersionMessage)[K]
    }>): Request<DBEngineVersion, AWSError> {
        this.boot();
        return this.client.createCustomDBEngineVersion(
          this.ops["CreateCustomDBEngineVersion"].apply(partialParams)
        );
    }

    invokeCreateDBCluster(partialParams: ToOptional<{
      [K in keyof CreateDBClusterMessage & keyof Omit<CreateDBClusterMessage, "Engine">]: (CreateDBClusterMessage)[K]
    }>): Request<CreateDBClusterResult, AWSError> {
        this.boot();
        return this.client.createDBCluster(
          this.ops["CreateDBCluster"].apply(partialParams)
        );
    }

    invokeCreateDBInstance(partialParams: ToOptional<{
      [K in keyof CreateDBInstanceMessage & keyof Omit<CreateDBInstanceMessage, "Engine">]: (CreateDBInstanceMessage)[K]
    }>): Request<CreateDBInstanceResult, AWSError> {
        this.boot();
        return this.client.createDBInstance(
          this.ops["CreateDBInstance"].apply(partialParams)
        );
    }

    invokeDeleteCustomDBEngineVersion(partialParams: ToOptional<{
      [K in keyof DeleteCustomDBEngineVersionMessage & keyof Omit<DeleteCustomDBEngineVersionMessage, "Engine" | "EngineVersion">]: (DeleteCustomDBEngineVersionMessage)[K]
    }>): Request<DBEngineVersion, AWSError> {
        this.boot();
        return this.client.deleteCustomDBEngineVersion(
          this.ops["DeleteCustomDBEngineVersion"].apply(partialParams)
        );
    }

    invokeDescribeOrderableDBInstanceOptions(partialParams: ToOptional<{
      [K in keyof DescribeOrderableDBInstanceOptionsMessage & keyof Omit<DescribeOrderableDBInstanceOptionsMessage, "Engine">]: (DescribeOrderableDBInstanceOptionsMessage)[K]
    }>): Request<OrderableDBInstanceOptionsMessage, AWSError> {
        this.boot();
        return this.client.describeOrderableDBInstanceOptions(
          this.ops["DescribeOrderableDBInstanceOptions"].apply(partialParams)
        );
    }

    invokeImportInstallationMedia(partialParams: ToOptional<{
      [K in keyof ImportInstallationMediaMessage & keyof Omit<ImportInstallationMediaMessage, "Engine" | "EngineVersion">]: (ImportInstallationMediaMessage)[K]
    }>): Request<InstallationMedia, AWSError> {
        this.boot();
        return this.client.importInstallationMedia(
          this.ops["ImportInstallationMedia"].apply(partialParams)
        );
    }

    invokeModifyCustomDBEngineVersion(partialParams: ToOptional<{
      [K in keyof ModifyCustomDBEngineVersionMessage & keyof Omit<ModifyCustomDBEngineVersionMessage, "Engine" | "EngineVersion">]: (ModifyCustomDBEngineVersionMessage)[K]
    }>): Request<DBEngineVersion, AWSError> {
        this.boot();
        return this.client.modifyCustomDBEngineVersion(
          this.ops["ModifyCustomDBEngineVersion"].apply(partialParams)
        );
    }

    invokeRestoreDBClusterFromS3(partialParams: ToOptional<{
      [K in keyof RestoreDBClusterFromS3Message & keyof Omit<RestoreDBClusterFromS3Message, "Engine">]: (RestoreDBClusterFromS3Message)[K]
    }>): Request<RestoreDBClusterFromS3Result, AWSError> {
        this.boot();
        return this.client.restoreDBClusterFromS3(
          this.ops["RestoreDBClusterFromS3"].apply(partialParams)
        );
    }

    invokeRestoreDBClusterFromSnapshot(partialParams: ToOptional<{
      [K in keyof RestoreDBClusterFromSnapshotMessage & keyof Omit<RestoreDBClusterFromSnapshotMessage, "Engine">]: (RestoreDBClusterFromSnapshotMessage)[K]
    }>): Request<RestoreDBClusterFromSnapshotResult, AWSError> {
        this.boot();
        return this.client.restoreDBClusterFromSnapshot(
          this.ops["RestoreDBClusterFromSnapshot"].apply(partialParams)
        );
    }

    invokeRestoreDBInstanceFromS3(partialParams: ToOptional<{
      [K in keyof RestoreDBInstanceFromS3Message & keyof Omit<RestoreDBInstanceFromS3Message, "Engine">]: (RestoreDBInstanceFromS3Message)[K]
    }>): Request<RestoreDBInstanceFromS3Result, AWSError> {
        this.boot();
        return this.client.restoreDBInstanceFromS3(
          this.ops["RestoreDBInstanceFromS3"].apply(partialParams)
        );
    }

    invokeStartActivityStream(partialParams: ToOptional<{
      [K in keyof StartActivityStreamRequest & keyof Omit<StartActivityStreamRequest, "KmsKeyId">]: (StartActivityStreamRequest)[K]
    }>): Request<StartActivityStreamResponse, AWSError> {
        this.boot();
        return this.client.startActivityStream(
          this.ops["StartActivityStream"].apply(partialParams)
        );
    }

    invokeStartExportTask(partialParams: ToOptional<{
      [K in keyof StartExportTaskMessage & keyof Omit<StartExportTaskMessage, "KmsKeyId">]: (StartExportTaskMessage)[K]
    }>): Request<ExportTask, AWSError> {
        this.boot();
        return this.client.startExportTask(
          this.ops["StartExportTask"].apply(partialParams)
        );
    }
}