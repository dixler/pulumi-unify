
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    ApplyPendingMaintenanceActionMessage,
    CreateReplicationTaskMessage,
    DeleteConnectionMessage,
    DeleteReplicationInstanceMessage,
    DeleteReplicationTaskMessage,
    DescribeReplicationInstanceTaskLogsMessage,
    DescribeTableStatisticsMessage,
    ModifyReplicationInstanceMessage,
    ModifyReplicationTaskMessage,
    MoveReplicationTaskMessage,
    RebootReplicationInstanceMessage,
    RefreshSchemasMessage,
    ReloadTablesMessage,
    StartReplicationTaskMessage,
    StartReplicationTaskAssessmentMessage,
    StartReplicationTaskAssessmentRunMessage,
    StopReplicationTaskMessage,
    TestConnectionMessage,
    ApplyPendingMaintenanceActionResponse,
    CreateReplicationTaskResponse,
    DeleteConnectionResponse,
    DeleteReplicationInstanceResponse,
    DeleteReplicationTaskResponse,
    DescribeReplicationInstanceTaskLogsResponse,
    DescribeTableStatisticsResponse,
    ModifyReplicationInstanceResponse,
    ModifyReplicationTaskResponse,
    MoveReplicationTaskResponse,
    RebootReplicationInstanceResponse,
    RefreshSchemasResponse,
    ReloadTablesResponse,
    StartReplicationTaskResponse,
    StartReplicationTaskAssessmentResponse,
    StartReplicationTaskAssessmentRunResponse,
    StopReplicationTaskResponse,
    TestConnectionResponse
} from "aws-sdk/clients/dms";
const schema = require("../apis/dms-2016-01-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.dms.ReplicationTask {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.dms.ReplicationTask>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.DMS()
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

    invokeApplyPendingMaintenanceAction(partialParams: ToOptional<{
      [K in keyof ApplyPendingMaintenanceActionMessage & keyof Omit<ApplyPendingMaintenanceActionMessage, "ReplicationInstanceArn">]: (ApplyPendingMaintenanceActionMessage)[K]
    }>): Request<ApplyPendingMaintenanceActionResponse, AWSError> {
        this.boot();
        return this.client.applyPendingMaintenanceAction(
          this.ops["ApplyPendingMaintenanceAction"].apply(partialParams)
        );
    }

    invokeCreateReplicationTask(partialParams: ToOptional<{
      [K in keyof CreateReplicationTaskMessage & keyof Omit<CreateReplicationTaskMessage, "SourceEndpointArn" | "TargetEndpointArn" | "ReplicationInstanceArn" | "MigrationType" | "TableMappings">]: (CreateReplicationTaskMessage)[K]
    }>): Request<CreateReplicationTaskResponse, AWSError> {
        this.boot();
        return this.client.createReplicationTask(
          this.ops["CreateReplicationTask"].apply(partialParams)
        );
    }

    invokeDeleteConnection(partialParams: ToOptional<{
      [K in keyof DeleteConnectionMessage & keyof Omit<DeleteConnectionMessage, "ReplicationInstanceArn">]: (DeleteConnectionMessage)[K]
    }>): Request<DeleteConnectionResponse, AWSError> {
        this.boot();
        return this.client.deleteConnection(
          this.ops["DeleteConnection"].apply(partialParams)
        );
    }

    invokeDeleteReplicationInstance(partialParams: ToOptional<{
      [K in keyof DeleteReplicationInstanceMessage & keyof Omit<DeleteReplicationInstanceMessage, "ReplicationInstanceArn">]: (DeleteReplicationInstanceMessage)[K]
    }>): Request<DeleteReplicationInstanceResponse, AWSError> {
        this.boot();
        return this.client.deleteReplicationInstance(
          this.ops["DeleteReplicationInstance"].apply(partialParams)
        );
    }

    invokeDeleteReplicationTask(partialParams: ToOptional<{
      [K in keyof DeleteReplicationTaskMessage & keyof Omit<DeleteReplicationTaskMessage, "ReplicationTaskArn">]: (DeleteReplicationTaskMessage)[K]
    }>): Request<DeleteReplicationTaskResponse, AWSError> {
        this.boot();
        return this.client.deleteReplicationTask(
          this.ops["DeleteReplicationTask"].apply(partialParams)
        );
    }

    invokeDescribeReplicationInstanceTaskLogs(partialParams: ToOptional<{
      [K in keyof DescribeReplicationInstanceTaskLogsMessage & keyof Omit<DescribeReplicationInstanceTaskLogsMessage, "ReplicationInstanceArn">]: (DescribeReplicationInstanceTaskLogsMessage)[K]
    }>): Request<DescribeReplicationInstanceTaskLogsResponse, AWSError> {
        this.boot();
        return this.client.describeReplicationInstanceTaskLogs(
          this.ops["DescribeReplicationInstanceTaskLogs"].apply(partialParams)
        );
    }

    invokeDescribeTableStatistics(partialParams: ToOptional<{
      [K in keyof DescribeTableStatisticsMessage & keyof Omit<DescribeTableStatisticsMessage, "ReplicationTaskArn">]: (DescribeTableStatisticsMessage)[K]
    }>): Request<DescribeTableStatisticsResponse, AWSError> {
        this.boot();
        return this.client.describeTableStatistics(
          this.ops["DescribeTableStatistics"].apply(partialParams)
        );
    }

    invokeModifyReplicationInstance(partialParams: ToOptional<{
      [K in keyof ModifyReplicationInstanceMessage & keyof Omit<ModifyReplicationInstanceMessage, "ReplicationInstanceArn">]: (ModifyReplicationInstanceMessage)[K]
    }>): Request<ModifyReplicationInstanceResponse, AWSError> {
        this.boot();
        return this.client.modifyReplicationInstance(
          this.ops["ModifyReplicationInstance"].apply(partialParams)
        );
    }

    invokeModifyReplicationTask(partialParams: ToOptional<{
      [K in keyof ModifyReplicationTaskMessage & keyof Omit<ModifyReplicationTaskMessage, "ReplicationTaskArn">]: (ModifyReplicationTaskMessage)[K]
    }>): Request<ModifyReplicationTaskResponse, AWSError> {
        this.boot();
        return this.client.modifyReplicationTask(
          this.ops["ModifyReplicationTask"].apply(partialParams)
        );
    }

    invokeMoveReplicationTask(partialParams: ToOptional<{
      [K in keyof MoveReplicationTaskMessage & keyof Omit<MoveReplicationTaskMessage, "ReplicationTaskArn">]: (MoveReplicationTaskMessage)[K]
    }>): Request<MoveReplicationTaskResponse, AWSError> {
        this.boot();
        return this.client.moveReplicationTask(
          this.ops["MoveReplicationTask"].apply(partialParams)
        );
    }

    invokeRebootReplicationInstance(partialParams: ToOptional<{
      [K in keyof RebootReplicationInstanceMessage & keyof Omit<RebootReplicationInstanceMessage, "ReplicationInstanceArn">]: (RebootReplicationInstanceMessage)[K]
    }>): Request<RebootReplicationInstanceResponse, AWSError> {
        this.boot();
        return this.client.rebootReplicationInstance(
          this.ops["RebootReplicationInstance"].apply(partialParams)
        );
    }

    invokeRefreshSchemas(partialParams: ToOptional<{
      [K in keyof RefreshSchemasMessage & keyof Omit<RefreshSchemasMessage, "ReplicationInstanceArn">]: (RefreshSchemasMessage)[K]
    }>): Request<RefreshSchemasResponse, AWSError> {
        this.boot();
        return this.client.refreshSchemas(
          this.ops["RefreshSchemas"].apply(partialParams)
        );
    }

    invokeReloadTables(partialParams: ToOptional<{
      [K in keyof ReloadTablesMessage & keyof Omit<ReloadTablesMessage, "ReplicationTaskArn">]: (ReloadTablesMessage)[K]
    }>): Request<ReloadTablesResponse, AWSError> {
        this.boot();
        return this.client.reloadTables(
          this.ops["ReloadTables"].apply(partialParams)
        );
    }

    invokeStartReplicationTask(partialParams: ToOptional<{
      [K in keyof StartReplicationTaskMessage & keyof Omit<StartReplicationTaskMessage, "ReplicationTaskArn">]: (StartReplicationTaskMessage)[K]
    }>): Request<StartReplicationTaskResponse, AWSError> {
        this.boot();
        return this.client.startReplicationTask(
          this.ops["StartReplicationTask"].apply(partialParams)
        );
    }

    invokeStartReplicationTaskAssessment(partialParams: ToOptional<{
      [K in keyof StartReplicationTaskAssessmentMessage & keyof Omit<StartReplicationTaskAssessmentMessage, "ReplicationTaskArn">]: (StartReplicationTaskAssessmentMessage)[K]
    }>): Request<StartReplicationTaskAssessmentResponse, AWSError> {
        this.boot();
        return this.client.startReplicationTaskAssessment(
          this.ops["StartReplicationTaskAssessment"].apply(partialParams)
        );
    }

    invokeStartReplicationTaskAssessmentRun(partialParams: ToOptional<{
      [K in keyof StartReplicationTaskAssessmentRunMessage & keyof Omit<StartReplicationTaskAssessmentRunMessage, "ReplicationTaskArn">]: (StartReplicationTaskAssessmentRunMessage)[K]
    }>): Request<StartReplicationTaskAssessmentRunResponse, AWSError> {
        this.boot();
        return this.client.startReplicationTaskAssessmentRun(
          this.ops["StartReplicationTaskAssessmentRun"].apply(partialParams)
        );
    }

    invokeStopReplicationTask(partialParams: ToOptional<{
      [K in keyof StopReplicationTaskMessage & keyof Omit<StopReplicationTaskMessage, "ReplicationTaskArn">]: (StopReplicationTaskMessage)[K]
    }>): Request<StopReplicationTaskResponse, AWSError> {
        this.boot();
        return this.client.stopReplicationTask(
          this.ops["StopReplicationTask"].apply(partialParams)
        );
    }

    invokeTestConnection(partialParams: ToOptional<{
      [K in keyof TestConnectionMessage & keyof Omit<TestConnectionMessage, "ReplicationInstanceArn">]: (TestConnectionMessage)[K]
    }>): Request<TestConnectionResponse, AWSError> {
        this.boot();
        return this.client.testConnection(
          this.ops["TestConnection"].apply(partialParams)
        );
    }
}