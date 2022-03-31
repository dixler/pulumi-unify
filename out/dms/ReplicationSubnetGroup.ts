
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AddTagsToResourceMessage,
    ApplyPendingMaintenanceActionMessage,
    CancelReplicationTaskAssessmentRunMessage,
    CreateEndpointMessage,
    CreateEventSubscriptionMessage,
    CreateReplicationInstanceMessage,
    CreateReplicationSubnetGroupMessage,
    CreateReplicationTaskMessage,
    DeleteCertificateMessage,
    DeleteConnectionMessage,
    DeleteEndpointMessage,
    DeleteEventSubscriptionMessage,
    DeleteReplicationInstanceMessage,
    DeleteReplicationSubnetGroupMessage,
    DeleteReplicationTaskMessage,
    DeleteReplicationTaskAssessmentRunMessage,
    DescribeEndpointSettingsMessage,
    DescribeRefreshSchemasStatusMessage,
    DescribeReplicationInstanceTaskLogsMessage,
    DescribeSchemasMessage,
    DescribeTableStatisticsMessage,
    ImportCertificateMessage,
    ModifyEndpointMessage,
    ModifyEventSubscriptionMessage,
    ModifyReplicationInstanceMessage,
    ModifyReplicationSubnetGroupMessage,
    ModifyReplicationTaskMessage,
    MoveReplicationTaskMessage,
    RebootReplicationInstanceMessage,
    RefreshSchemasMessage,
    ReloadTablesMessage,
    RemoveTagsFromResourceMessage,
    StartReplicationTaskMessage,
    StartReplicationTaskAssessmentMessage,
    StartReplicationTaskAssessmentRunMessage,
    StopReplicationTaskMessage,
    TestConnectionMessage,
    AddTagsToResourceResponse,
    ApplyPendingMaintenanceActionResponse,
    CancelReplicationTaskAssessmentRunResponse,
    CreateEndpointResponse,
    CreateEventSubscriptionResponse,
    CreateReplicationInstanceResponse,
    CreateReplicationSubnetGroupResponse,
    CreateReplicationTaskResponse,
    DeleteCertificateResponse,
    DeleteConnectionResponse,
    DeleteEndpointResponse,
    DeleteEventSubscriptionResponse,
    DeleteReplicationInstanceResponse,
    DeleteReplicationSubnetGroupResponse,
    DeleteReplicationTaskResponse,
    DeleteReplicationTaskAssessmentRunResponse,
    DescribeEndpointSettingsResponse,
    DescribeRefreshSchemasStatusResponse,
    DescribeReplicationInstanceTaskLogsResponse,
    DescribeSchemasResponse,
    DescribeTableStatisticsResponse,
    ImportCertificateResponse,
    ModifyEndpointResponse,
    ModifyEventSubscriptionResponse,
    ModifyReplicationInstanceResponse,
    ModifyReplicationSubnetGroupResponse,
    ModifyReplicationTaskResponse,
    MoveReplicationTaskResponse,
    RebootReplicationInstanceResponse,
    RefreshSchemasResponse,
    ReloadTablesResponse,
    RemoveTagsFromResourceResponse,
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

export default class extends aws.dms.ReplicationSubnetGroup {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.dms.ReplicationSubnetGroup>) {
        super(...args)
        this.client = new awssdk.DMS()
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

    invokeAddTagsToResource(partialParams: ToOptional<{
      [K in keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage]: (AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage)[K]
    }>): Request<AddTagsToResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addTagsToResource(
          this.ops["AddTagsToResource"].applicator.apply(partialParams)
        );
    }

    invokeApplyPendingMaintenanceAction(partialParams: ToOptional<{
      [K in keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage]: (ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage)[K]
    }>): Request<ApplyPendingMaintenanceActionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.applyPendingMaintenanceAction(
          this.ops["ApplyPendingMaintenanceAction"].applicator.apply(partialParams)
        );
    }

    invokeCancelReplicationTaskAssessmentRun(partialParams: ToOptional<{
      [K in keyof CancelReplicationTaskAssessmentRunMessage & keyof CancelReplicationTaskAssessmentRunMessage & keyof CancelReplicationTaskAssessmentRunMessage & keyof CancelReplicationTaskAssessmentRunMessage]: (CancelReplicationTaskAssessmentRunMessage & CancelReplicationTaskAssessmentRunMessage & CancelReplicationTaskAssessmentRunMessage & CancelReplicationTaskAssessmentRunMessage)[K]
    }>): Request<CancelReplicationTaskAssessmentRunResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelReplicationTaskAssessmentRun(
          this.ops["CancelReplicationTaskAssessmentRun"].applicator.apply(partialParams)
        );
    }

    invokeCreateEndpoint(partialParams: ToOptional<{
      [K in keyof CreateEndpointMessage & keyof CreateEndpointMessage & keyof CreateEndpointMessage & keyof CreateEndpointMessage]: (CreateEndpointMessage & CreateEndpointMessage & CreateEndpointMessage & CreateEndpointMessage)[K]
    }>): Request<CreateEndpointResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createEndpoint(
          this.ops["CreateEndpoint"].applicator.apply(partialParams)
        );
    }

    invokeCreateEventSubscription(partialParams: ToOptional<{
      [K in keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage]: (CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage)[K]
    }>): Request<CreateEventSubscriptionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createEventSubscription(
          this.ops["CreateEventSubscription"].applicator.apply(partialParams)
        );
    }

    invokeCreateReplicationInstance(partialParams: ToOptional<{
      [K in keyof CreateReplicationInstanceMessage & keyof CreateReplicationInstanceMessage & keyof CreateReplicationInstanceMessage & keyof CreateReplicationInstanceMessage]: (CreateReplicationInstanceMessage & CreateReplicationInstanceMessage & CreateReplicationInstanceMessage & CreateReplicationInstanceMessage)[K]
    }>): Request<CreateReplicationInstanceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createReplicationInstance(
          this.ops["CreateReplicationInstance"].applicator.apply(partialParams)
        );
    }

    invokeCreateReplicationSubnetGroup(partialParams: ToOptional<{
      [K in keyof CreateReplicationSubnetGroupMessage & keyof CreateReplicationSubnetGroupMessage & keyof CreateReplicationSubnetGroupMessage & keyof CreateReplicationSubnetGroupMessage]: (CreateReplicationSubnetGroupMessage & CreateReplicationSubnetGroupMessage & CreateReplicationSubnetGroupMessage & CreateReplicationSubnetGroupMessage)[K]
    }>): Request<CreateReplicationSubnetGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createReplicationSubnetGroup(
          this.ops["CreateReplicationSubnetGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateReplicationTask(partialParams: ToOptional<{
      [K in keyof CreateReplicationTaskMessage & keyof CreateReplicationTaskMessage & keyof CreateReplicationTaskMessage & keyof CreateReplicationTaskMessage]: (CreateReplicationTaskMessage & CreateReplicationTaskMessage & CreateReplicationTaskMessage & CreateReplicationTaskMessage)[K]
    }>): Request<CreateReplicationTaskResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createReplicationTask(
          this.ops["CreateReplicationTask"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCertificate(partialParams: ToOptional<{
      [K in keyof DeleteCertificateMessage & keyof DeleteCertificateMessage & keyof DeleteCertificateMessage & keyof DeleteCertificateMessage]: (DeleteCertificateMessage & DeleteCertificateMessage & DeleteCertificateMessage & DeleteCertificateMessage)[K]
    }>): Request<DeleteCertificateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCertificate(
          this.ops["DeleteCertificate"].applicator.apply(partialParams)
        );
    }

    invokeDeleteConnection(partialParams: ToOptional<{
      [K in keyof DeleteConnectionMessage & keyof DeleteConnectionMessage & keyof DeleteConnectionMessage & keyof DeleteConnectionMessage]: (DeleteConnectionMessage & DeleteConnectionMessage & DeleteConnectionMessage & DeleteConnectionMessage)[K]
    }>): Request<DeleteConnectionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteConnection(
          this.ops["DeleteConnection"].applicator.apply(partialParams)
        );
    }

    invokeDeleteEndpoint(partialParams: ToOptional<{
      [K in keyof DeleteEndpointMessage & keyof DeleteEndpointMessage & keyof DeleteEndpointMessage & keyof DeleteEndpointMessage]: (DeleteEndpointMessage & DeleteEndpointMessage & DeleteEndpointMessage & DeleteEndpointMessage)[K]
    }>): Request<DeleteEndpointResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEndpoint(
          this.ops["DeleteEndpoint"].applicator.apply(partialParams)
        );
    }

    invokeDeleteEventSubscription(partialParams: ToOptional<{
      [K in keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage]: (DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage)[K]
    }>): Request<DeleteEventSubscriptionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEventSubscription(
          this.ops["DeleteEventSubscription"].applicator.apply(partialParams)
        );
    }

    invokeDeleteReplicationInstance(partialParams: ToOptional<{
      [K in keyof DeleteReplicationInstanceMessage & keyof DeleteReplicationInstanceMessage & keyof DeleteReplicationInstanceMessage & keyof DeleteReplicationInstanceMessage]: (DeleteReplicationInstanceMessage & DeleteReplicationInstanceMessage & DeleteReplicationInstanceMessage & DeleteReplicationInstanceMessage)[K]
    }>): Request<DeleteReplicationInstanceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteReplicationInstance(
          this.ops["DeleteReplicationInstance"].applicator.apply(partialParams)
        );
    }

    invokeDeleteReplicationSubnetGroup(partialParams: ToOptional<{
      [K in keyof DeleteReplicationSubnetGroupMessage & keyof DeleteReplicationSubnetGroupMessage & keyof DeleteReplicationSubnetGroupMessage & keyof DeleteReplicationSubnetGroupMessage]: (DeleteReplicationSubnetGroupMessage & DeleteReplicationSubnetGroupMessage & DeleteReplicationSubnetGroupMessage & DeleteReplicationSubnetGroupMessage)[K]
    }>): Request<DeleteReplicationSubnetGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteReplicationSubnetGroup(
          this.ops["DeleteReplicationSubnetGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteReplicationTask(partialParams: ToOptional<{
      [K in keyof DeleteReplicationTaskMessage & keyof DeleteReplicationTaskMessage & keyof DeleteReplicationTaskMessage & keyof DeleteReplicationTaskMessage]: (DeleteReplicationTaskMessage & DeleteReplicationTaskMessage & DeleteReplicationTaskMessage & DeleteReplicationTaskMessage)[K]
    }>): Request<DeleteReplicationTaskResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteReplicationTask(
          this.ops["DeleteReplicationTask"].applicator.apply(partialParams)
        );
    }

    invokeDeleteReplicationTaskAssessmentRun(partialParams: ToOptional<{
      [K in keyof DeleteReplicationTaskAssessmentRunMessage & keyof DeleteReplicationTaskAssessmentRunMessage & keyof DeleteReplicationTaskAssessmentRunMessage & keyof DeleteReplicationTaskAssessmentRunMessage]: (DeleteReplicationTaskAssessmentRunMessage & DeleteReplicationTaskAssessmentRunMessage & DeleteReplicationTaskAssessmentRunMessage & DeleteReplicationTaskAssessmentRunMessage)[K]
    }>): Request<DeleteReplicationTaskAssessmentRunResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteReplicationTaskAssessmentRun(
          this.ops["DeleteReplicationTaskAssessmentRun"].applicator.apply(partialParams)
        );
    }

    invokeDescribeEndpointSettings(partialParams: ToOptional<{
      [K in keyof DescribeEndpointSettingsMessage & keyof DescribeEndpointSettingsMessage & keyof DescribeEndpointSettingsMessage & keyof DescribeEndpointSettingsMessage]: (DescribeEndpointSettingsMessage & DescribeEndpointSettingsMessage & DescribeEndpointSettingsMessage & DescribeEndpointSettingsMessage)[K]
    }>): Request<DescribeEndpointSettingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeEndpointSettings(
          this.ops["DescribeEndpointSettings"].applicator.apply(partialParams)
        );
    }

    invokeDescribeRefreshSchemasStatus(partialParams: ToOptional<{
      [K in keyof DescribeRefreshSchemasStatusMessage & keyof DescribeRefreshSchemasStatusMessage & keyof DescribeRefreshSchemasStatusMessage & keyof DescribeRefreshSchemasStatusMessage]: (DescribeRefreshSchemasStatusMessage & DescribeRefreshSchemasStatusMessage & DescribeRefreshSchemasStatusMessage & DescribeRefreshSchemasStatusMessage)[K]
    }>): Request<DescribeRefreshSchemasStatusResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeRefreshSchemasStatus(
          this.ops["DescribeRefreshSchemasStatus"].applicator.apply(partialParams)
        );
    }

    invokeDescribeReplicationInstanceTaskLogs(partialParams: ToOptional<{
      [K in keyof DescribeReplicationInstanceTaskLogsMessage & keyof DescribeReplicationInstanceTaskLogsMessage & keyof DescribeReplicationInstanceTaskLogsMessage & keyof DescribeReplicationInstanceTaskLogsMessage]: (DescribeReplicationInstanceTaskLogsMessage & DescribeReplicationInstanceTaskLogsMessage & DescribeReplicationInstanceTaskLogsMessage & DescribeReplicationInstanceTaskLogsMessage)[K]
    }>): Request<DescribeReplicationInstanceTaskLogsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeReplicationInstanceTaskLogs(
          this.ops["DescribeReplicationInstanceTaskLogs"].applicator.apply(partialParams)
        );
    }

    invokeDescribeSchemas(partialParams: ToOptional<{
      [K in keyof DescribeSchemasMessage & keyof DescribeSchemasMessage & keyof DescribeSchemasMessage & keyof DescribeSchemasMessage]: (DescribeSchemasMessage & DescribeSchemasMessage & DescribeSchemasMessage & DescribeSchemasMessage)[K]
    }>): Request<DescribeSchemasResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeSchemas(
          this.ops["DescribeSchemas"].applicator.apply(partialParams)
        );
    }

    invokeDescribeTableStatistics(partialParams: ToOptional<{
      [K in keyof DescribeTableStatisticsMessage & keyof DescribeTableStatisticsMessage & keyof DescribeTableStatisticsMessage & keyof DescribeTableStatisticsMessage]: (DescribeTableStatisticsMessage & DescribeTableStatisticsMessage & DescribeTableStatisticsMessage & DescribeTableStatisticsMessage)[K]
    }>): Request<DescribeTableStatisticsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTableStatistics(
          this.ops["DescribeTableStatistics"].applicator.apply(partialParams)
        );
    }

    invokeImportCertificate(partialParams: ToOptional<{
      [K in keyof ImportCertificateMessage & keyof ImportCertificateMessage & keyof ImportCertificateMessage & keyof ImportCertificateMessage]: (ImportCertificateMessage & ImportCertificateMessage & ImportCertificateMessage & ImportCertificateMessage)[K]
    }>): Request<ImportCertificateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importCertificate(
          this.ops["ImportCertificate"].applicator.apply(partialParams)
        );
    }

    invokeModifyEndpoint(partialParams: ToOptional<{
      [K in keyof ModifyEndpointMessage & keyof ModifyEndpointMessage & keyof ModifyEndpointMessage & keyof ModifyEndpointMessage]: (ModifyEndpointMessage & ModifyEndpointMessage & ModifyEndpointMessage & ModifyEndpointMessage)[K]
    }>): Request<ModifyEndpointResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyEndpoint(
          this.ops["ModifyEndpoint"].applicator.apply(partialParams)
        );
    }

    invokeModifyEventSubscription(partialParams: ToOptional<{
      [K in keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage]: (ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage)[K]
    }>): Request<ModifyEventSubscriptionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyEventSubscription(
          this.ops["ModifyEventSubscription"].applicator.apply(partialParams)
        );
    }

    invokeModifyReplicationInstance(partialParams: ToOptional<{
      [K in keyof ModifyReplicationInstanceMessage & keyof ModifyReplicationInstanceMessage & keyof ModifyReplicationInstanceMessage & keyof ModifyReplicationInstanceMessage]: (ModifyReplicationInstanceMessage & ModifyReplicationInstanceMessage & ModifyReplicationInstanceMessage & ModifyReplicationInstanceMessage)[K]
    }>): Request<ModifyReplicationInstanceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyReplicationInstance(
          this.ops["ModifyReplicationInstance"].applicator.apply(partialParams)
        );
    }

    invokeModifyReplicationSubnetGroup(partialParams: ToOptional<{
      [K in keyof ModifyReplicationSubnetGroupMessage & keyof ModifyReplicationSubnetGroupMessage & keyof ModifyReplicationSubnetGroupMessage & keyof ModifyReplicationSubnetGroupMessage]: (ModifyReplicationSubnetGroupMessage & ModifyReplicationSubnetGroupMessage & ModifyReplicationSubnetGroupMessage & ModifyReplicationSubnetGroupMessage)[K]
    }>): Request<ModifyReplicationSubnetGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyReplicationSubnetGroup(
          this.ops["ModifyReplicationSubnetGroup"].applicator.apply(partialParams)
        );
    }

    invokeModifyReplicationTask(partialParams: ToOptional<{
      [K in keyof ModifyReplicationTaskMessage & keyof ModifyReplicationTaskMessage & keyof ModifyReplicationTaskMessage & keyof ModifyReplicationTaskMessage]: (ModifyReplicationTaskMessage & ModifyReplicationTaskMessage & ModifyReplicationTaskMessage & ModifyReplicationTaskMessage)[K]
    }>): Request<ModifyReplicationTaskResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyReplicationTask(
          this.ops["ModifyReplicationTask"].applicator.apply(partialParams)
        );
    }

    invokeMoveReplicationTask(partialParams: ToOptional<{
      [K in keyof MoveReplicationTaskMessage & keyof MoveReplicationTaskMessage & keyof MoveReplicationTaskMessage & keyof MoveReplicationTaskMessage]: (MoveReplicationTaskMessage & MoveReplicationTaskMessage & MoveReplicationTaskMessage & MoveReplicationTaskMessage)[K]
    }>): Request<MoveReplicationTaskResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.moveReplicationTask(
          this.ops["MoveReplicationTask"].applicator.apply(partialParams)
        );
    }

    invokeRebootReplicationInstance(partialParams: ToOptional<{
      [K in keyof RebootReplicationInstanceMessage & keyof RebootReplicationInstanceMessage & keyof RebootReplicationInstanceMessage & keyof RebootReplicationInstanceMessage]: (RebootReplicationInstanceMessage & RebootReplicationInstanceMessage & RebootReplicationInstanceMessage & RebootReplicationInstanceMessage)[K]
    }>): Request<RebootReplicationInstanceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rebootReplicationInstance(
          this.ops["RebootReplicationInstance"].applicator.apply(partialParams)
        );
    }

    invokeRefreshSchemas(partialParams: ToOptional<{
      [K in keyof RefreshSchemasMessage & keyof RefreshSchemasMessage & keyof RefreshSchemasMessage & keyof RefreshSchemasMessage]: (RefreshSchemasMessage & RefreshSchemasMessage & RefreshSchemasMessage & RefreshSchemasMessage)[K]
    }>): Request<RefreshSchemasResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.refreshSchemas(
          this.ops["RefreshSchemas"].applicator.apply(partialParams)
        );
    }

    invokeReloadTables(partialParams: ToOptional<{
      [K in keyof ReloadTablesMessage & keyof ReloadTablesMessage & keyof ReloadTablesMessage & keyof ReloadTablesMessage]: (ReloadTablesMessage & ReloadTablesMessage & ReloadTablesMessage & ReloadTablesMessage)[K]
    }>): Request<ReloadTablesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.reloadTables(
          this.ops["ReloadTables"].applicator.apply(partialParams)
        );
    }

    invokeRemoveTagsFromResource(partialParams: ToOptional<{
      [K in keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage]: (RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage)[K]
    }>): Request<RemoveTagsFromResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeTagsFromResource(
          this.ops["RemoveTagsFromResource"].applicator.apply(partialParams)
        );
    }

    invokeStartReplicationTask(partialParams: ToOptional<{
      [K in keyof StartReplicationTaskMessage & keyof StartReplicationTaskMessage & keyof StartReplicationTaskMessage & keyof StartReplicationTaskMessage]: (StartReplicationTaskMessage & StartReplicationTaskMessage & StartReplicationTaskMessage & StartReplicationTaskMessage)[K]
    }>): Request<StartReplicationTaskResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startReplicationTask(
          this.ops["StartReplicationTask"].applicator.apply(partialParams)
        );
    }

    invokeStartReplicationTaskAssessment(partialParams: ToOptional<{
      [K in keyof StartReplicationTaskAssessmentMessage & keyof StartReplicationTaskAssessmentMessage & keyof StartReplicationTaskAssessmentMessage & keyof StartReplicationTaskAssessmentMessage]: (StartReplicationTaskAssessmentMessage & StartReplicationTaskAssessmentMessage & StartReplicationTaskAssessmentMessage & StartReplicationTaskAssessmentMessage)[K]
    }>): Request<StartReplicationTaskAssessmentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startReplicationTaskAssessment(
          this.ops["StartReplicationTaskAssessment"].applicator.apply(partialParams)
        );
    }

    invokeStartReplicationTaskAssessmentRun(partialParams: ToOptional<{
      [K in keyof StartReplicationTaskAssessmentRunMessage & keyof StartReplicationTaskAssessmentRunMessage & keyof StartReplicationTaskAssessmentRunMessage & keyof StartReplicationTaskAssessmentRunMessage]: (StartReplicationTaskAssessmentRunMessage & StartReplicationTaskAssessmentRunMessage & StartReplicationTaskAssessmentRunMessage & StartReplicationTaskAssessmentRunMessage)[K]
    }>): Request<StartReplicationTaskAssessmentRunResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startReplicationTaskAssessmentRun(
          this.ops["StartReplicationTaskAssessmentRun"].applicator.apply(partialParams)
        );
    }

    invokeStopReplicationTask(partialParams: ToOptional<{
      [K in keyof StopReplicationTaskMessage & keyof StopReplicationTaskMessage & keyof StopReplicationTaskMessage & keyof StopReplicationTaskMessage]: (StopReplicationTaskMessage & StopReplicationTaskMessage & StopReplicationTaskMessage & StopReplicationTaskMessage)[K]
    }>): Request<StopReplicationTaskResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopReplicationTask(
          this.ops["StopReplicationTask"].applicator.apply(partialParams)
        );
    }

    invokeTestConnection(partialParams: ToOptional<{
      [K in keyof TestConnectionMessage & keyof TestConnectionMessage & keyof TestConnectionMessage & keyof TestConnectionMessage]: (TestConnectionMessage & TestConnectionMessage & TestConnectionMessage & TestConnectionMessage)[K]
    }>): Request<TestConnectionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.testConnection(
          this.ops["TestConnection"].applicator.apply(partialParams)
        );
    }
}