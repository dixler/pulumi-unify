
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.dms.ReplicationTask {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.dms.ReplicationTask>) {
        super(...args)
        this.client = new awssdk.DMS()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/dms-2016-01-01.normal.json"), this.client)
    }

    invokeAddTagsToResource(partialParams: ToOptional<{
      [K in keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage & keyof AddTagsToResourceMessage]: (AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage & AddTagsToResourceMessage)[K]
    }>): AddTagsToResourceResponse {
        return this.client.addTagsToResource(
            this.ops["AddTagsToResource"].apply(partialParams)
        );
    }

    invokeApplyPendingMaintenanceAction(partialParams: ToOptional<{
      [K in keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage & keyof ApplyPendingMaintenanceActionMessage]: (ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage & ApplyPendingMaintenanceActionMessage)[K]
    }>): ApplyPendingMaintenanceActionResponse {
        return this.client.applyPendingMaintenanceAction(
            this.ops["ApplyPendingMaintenanceAction"].apply(partialParams)
        );
    }

    invokeCancelReplicationTaskAssessmentRun(partialParams: ToOptional<{
      [K in keyof CancelReplicationTaskAssessmentRunMessage & keyof CancelReplicationTaskAssessmentRunMessage & keyof CancelReplicationTaskAssessmentRunMessage & keyof CancelReplicationTaskAssessmentRunMessage & keyof CancelReplicationTaskAssessmentRunMessage & keyof CancelReplicationTaskAssessmentRunMessage & keyof CancelReplicationTaskAssessmentRunMessage & keyof CancelReplicationTaskAssessmentRunMessage & keyof CancelReplicationTaskAssessmentRunMessage & keyof CancelReplicationTaskAssessmentRunMessage & keyof CancelReplicationTaskAssessmentRunMessage]: (CancelReplicationTaskAssessmentRunMessage & CancelReplicationTaskAssessmentRunMessage & CancelReplicationTaskAssessmentRunMessage & CancelReplicationTaskAssessmentRunMessage & CancelReplicationTaskAssessmentRunMessage & CancelReplicationTaskAssessmentRunMessage & CancelReplicationTaskAssessmentRunMessage & CancelReplicationTaskAssessmentRunMessage & CancelReplicationTaskAssessmentRunMessage & CancelReplicationTaskAssessmentRunMessage & CancelReplicationTaskAssessmentRunMessage)[K]
    }>): CancelReplicationTaskAssessmentRunResponse {
        return this.client.cancelReplicationTaskAssessmentRun(
            this.ops["CancelReplicationTaskAssessmentRun"].apply(partialParams)
        );
    }

    invokeCreateEndpoint(partialParams: ToOptional<{
      [K in keyof CreateEndpointMessage & keyof CreateEndpointMessage & keyof CreateEndpointMessage & keyof CreateEndpointMessage & keyof CreateEndpointMessage & keyof CreateEndpointMessage & keyof CreateEndpointMessage & keyof CreateEndpointMessage & keyof CreateEndpointMessage & keyof CreateEndpointMessage & keyof CreateEndpointMessage]: (CreateEndpointMessage & CreateEndpointMessage & CreateEndpointMessage & CreateEndpointMessage & CreateEndpointMessage & CreateEndpointMessage & CreateEndpointMessage & CreateEndpointMessage & CreateEndpointMessage & CreateEndpointMessage & CreateEndpointMessage)[K]
    }>): CreateEndpointResponse {
        return this.client.createEndpoint(
            this.ops["CreateEndpoint"].apply(partialParams)
        );
    }

    invokeCreateEventSubscription(partialParams: ToOptional<{
      [K in keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage & keyof CreateEventSubscriptionMessage]: (CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage & CreateEventSubscriptionMessage)[K]
    }>): CreateEventSubscriptionResponse {
        return this.client.createEventSubscription(
            this.ops["CreateEventSubscription"].apply(partialParams)
        );
    }

    invokeCreateReplicationInstance(partialParams: ToOptional<{
      [K in keyof CreateReplicationInstanceMessage & keyof CreateReplicationInstanceMessage & keyof CreateReplicationInstanceMessage & keyof CreateReplicationInstanceMessage & keyof CreateReplicationInstanceMessage & keyof CreateReplicationInstanceMessage & keyof CreateReplicationInstanceMessage & keyof CreateReplicationInstanceMessage & keyof CreateReplicationInstanceMessage & keyof CreateReplicationInstanceMessage & keyof CreateReplicationInstanceMessage]: (CreateReplicationInstanceMessage & CreateReplicationInstanceMessage & CreateReplicationInstanceMessage & CreateReplicationInstanceMessage & CreateReplicationInstanceMessage & CreateReplicationInstanceMessage & CreateReplicationInstanceMessage & CreateReplicationInstanceMessage & CreateReplicationInstanceMessage & CreateReplicationInstanceMessage & CreateReplicationInstanceMessage)[K]
    }>): CreateReplicationInstanceResponse {
        return this.client.createReplicationInstance(
            this.ops["CreateReplicationInstance"].apply(partialParams)
        );
    }

    invokeCreateReplicationSubnetGroup(partialParams: ToOptional<{
      [K in keyof CreateReplicationSubnetGroupMessage & keyof CreateReplicationSubnetGroupMessage & keyof CreateReplicationSubnetGroupMessage & keyof CreateReplicationSubnetGroupMessage & keyof CreateReplicationSubnetGroupMessage & keyof CreateReplicationSubnetGroupMessage & keyof CreateReplicationSubnetGroupMessage & keyof CreateReplicationSubnetGroupMessage & keyof CreateReplicationSubnetGroupMessage & keyof CreateReplicationSubnetGroupMessage & keyof CreateReplicationSubnetGroupMessage]: (CreateReplicationSubnetGroupMessage & CreateReplicationSubnetGroupMessage & CreateReplicationSubnetGroupMessage & CreateReplicationSubnetGroupMessage & CreateReplicationSubnetGroupMessage & CreateReplicationSubnetGroupMessage & CreateReplicationSubnetGroupMessage & CreateReplicationSubnetGroupMessage & CreateReplicationSubnetGroupMessage & CreateReplicationSubnetGroupMessage & CreateReplicationSubnetGroupMessage)[K]
    }>): CreateReplicationSubnetGroupResponse {
        return this.client.createReplicationSubnetGroup(
            this.ops["CreateReplicationSubnetGroup"].apply(partialParams)
        );
    }

    invokeCreateReplicationTask(partialParams: ToOptional<{
      [K in keyof CreateReplicationTaskMessage & keyof CreateReplicationTaskMessage & keyof CreateReplicationTaskMessage & keyof CreateReplicationTaskMessage & keyof CreateReplicationTaskMessage & keyof CreateReplicationTaskMessage & keyof CreateReplicationTaskMessage & keyof CreateReplicationTaskMessage & keyof CreateReplicationTaskMessage & keyof CreateReplicationTaskMessage & keyof CreateReplicationTaskMessage]: (CreateReplicationTaskMessage & CreateReplicationTaskMessage & CreateReplicationTaskMessage & CreateReplicationTaskMessage & CreateReplicationTaskMessage & CreateReplicationTaskMessage & CreateReplicationTaskMessage & CreateReplicationTaskMessage & CreateReplicationTaskMessage & CreateReplicationTaskMessage & CreateReplicationTaskMessage)[K]
    }>): CreateReplicationTaskResponse {
        return this.client.createReplicationTask(
            this.ops["CreateReplicationTask"].apply(partialParams)
        );
    }

    invokeDeleteCertificate(partialParams: ToOptional<{
      [K in keyof DeleteCertificateMessage & keyof DeleteCertificateMessage & keyof DeleteCertificateMessage & keyof DeleteCertificateMessage & keyof DeleteCertificateMessage & keyof DeleteCertificateMessage & keyof DeleteCertificateMessage & keyof DeleteCertificateMessage & keyof DeleteCertificateMessage & keyof DeleteCertificateMessage & keyof DeleteCertificateMessage]: (DeleteCertificateMessage & DeleteCertificateMessage & DeleteCertificateMessage & DeleteCertificateMessage & DeleteCertificateMessage & DeleteCertificateMessage & DeleteCertificateMessage & DeleteCertificateMessage & DeleteCertificateMessage & DeleteCertificateMessage & DeleteCertificateMessage)[K]
    }>): DeleteCertificateResponse {
        return this.client.deleteCertificate(
            this.ops["DeleteCertificate"].apply(partialParams)
        );
    }

    invokeDeleteConnection(partialParams: ToOptional<{
      [K in keyof DeleteConnectionMessage & keyof DeleteConnectionMessage & keyof DeleteConnectionMessage & keyof DeleteConnectionMessage & keyof DeleteConnectionMessage & keyof DeleteConnectionMessage & keyof DeleteConnectionMessage & keyof DeleteConnectionMessage & keyof DeleteConnectionMessage & keyof DeleteConnectionMessage & keyof DeleteConnectionMessage]: (DeleteConnectionMessage & DeleteConnectionMessage & DeleteConnectionMessage & DeleteConnectionMessage & DeleteConnectionMessage & DeleteConnectionMessage & DeleteConnectionMessage & DeleteConnectionMessage & DeleteConnectionMessage & DeleteConnectionMessage & DeleteConnectionMessage)[K]
    }>): DeleteConnectionResponse {
        return this.client.deleteConnection(
            this.ops["DeleteConnection"].apply(partialParams)
        );
    }

    invokeDeleteEndpoint(partialParams: ToOptional<{
      [K in keyof DeleteEndpointMessage & keyof DeleteEndpointMessage & keyof DeleteEndpointMessage & keyof DeleteEndpointMessage & keyof DeleteEndpointMessage & keyof DeleteEndpointMessage & keyof DeleteEndpointMessage & keyof DeleteEndpointMessage & keyof DeleteEndpointMessage & keyof DeleteEndpointMessage & keyof DeleteEndpointMessage]: (DeleteEndpointMessage & DeleteEndpointMessage & DeleteEndpointMessage & DeleteEndpointMessage & DeleteEndpointMessage & DeleteEndpointMessage & DeleteEndpointMessage & DeleteEndpointMessage & DeleteEndpointMessage & DeleteEndpointMessage & DeleteEndpointMessage)[K]
    }>): DeleteEndpointResponse {
        return this.client.deleteEndpoint(
            this.ops["DeleteEndpoint"].apply(partialParams)
        );
    }

    invokeDeleteEventSubscription(partialParams: ToOptional<{
      [K in keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage & keyof DeleteEventSubscriptionMessage]: (DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage & DeleteEventSubscriptionMessage)[K]
    }>): DeleteEventSubscriptionResponse {
        return this.client.deleteEventSubscription(
            this.ops["DeleteEventSubscription"].apply(partialParams)
        );
    }

    invokeDeleteReplicationInstance(partialParams: ToOptional<{
      [K in keyof DeleteReplicationInstanceMessage & keyof DeleteReplicationInstanceMessage & keyof DeleteReplicationInstanceMessage & keyof DeleteReplicationInstanceMessage & keyof DeleteReplicationInstanceMessage & keyof DeleteReplicationInstanceMessage & keyof DeleteReplicationInstanceMessage & keyof DeleteReplicationInstanceMessage & keyof DeleteReplicationInstanceMessage & keyof DeleteReplicationInstanceMessage & keyof DeleteReplicationInstanceMessage]: (DeleteReplicationInstanceMessage & DeleteReplicationInstanceMessage & DeleteReplicationInstanceMessage & DeleteReplicationInstanceMessage & DeleteReplicationInstanceMessage & DeleteReplicationInstanceMessage & DeleteReplicationInstanceMessage & DeleteReplicationInstanceMessage & DeleteReplicationInstanceMessage & DeleteReplicationInstanceMessage & DeleteReplicationInstanceMessage)[K]
    }>): DeleteReplicationInstanceResponse {
        return this.client.deleteReplicationInstance(
            this.ops["DeleteReplicationInstance"].apply(partialParams)
        );
    }

    invokeDeleteReplicationSubnetGroup(partialParams: ToOptional<{
      [K in keyof DeleteReplicationSubnetGroupMessage & keyof DeleteReplicationSubnetGroupMessage & keyof DeleteReplicationSubnetGroupMessage & keyof DeleteReplicationSubnetGroupMessage & keyof DeleteReplicationSubnetGroupMessage & keyof DeleteReplicationSubnetGroupMessage & keyof DeleteReplicationSubnetGroupMessage & keyof DeleteReplicationSubnetGroupMessage & keyof DeleteReplicationSubnetGroupMessage & keyof DeleteReplicationSubnetGroupMessage & keyof DeleteReplicationSubnetGroupMessage]: (DeleteReplicationSubnetGroupMessage & DeleteReplicationSubnetGroupMessage & DeleteReplicationSubnetGroupMessage & DeleteReplicationSubnetGroupMessage & DeleteReplicationSubnetGroupMessage & DeleteReplicationSubnetGroupMessage & DeleteReplicationSubnetGroupMessage & DeleteReplicationSubnetGroupMessage & DeleteReplicationSubnetGroupMessage & DeleteReplicationSubnetGroupMessage & DeleteReplicationSubnetGroupMessage)[K]
    }>): DeleteReplicationSubnetGroupResponse {
        return this.client.deleteReplicationSubnetGroup(
            this.ops["DeleteReplicationSubnetGroup"].apply(partialParams)
        );
    }

    invokeDeleteReplicationTask(partialParams: ToOptional<{
      [K in keyof DeleteReplicationTaskMessage & keyof DeleteReplicationTaskMessage & keyof DeleteReplicationTaskMessage & keyof DeleteReplicationTaskMessage & keyof DeleteReplicationTaskMessage & keyof DeleteReplicationTaskMessage & keyof DeleteReplicationTaskMessage & keyof DeleteReplicationTaskMessage & keyof DeleteReplicationTaskMessage & keyof DeleteReplicationTaskMessage & keyof DeleteReplicationTaskMessage]: (DeleteReplicationTaskMessage & DeleteReplicationTaskMessage & DeleteReplicationTaskMessage & DeleteReplicationTaskMessage & DeleteReplicationTaskMessage & DeleteReplicationTaskMessage & DeleteReplicationTaskMessage & DeleteReplicationTaskMessage & DeleteReplicationTaskMessage & DeleteReplicationTaskMessage & DeleteReplicationTaskMessage)[K]
    }>): DeleteReplicationTaskResponse {
        return this.client.deleteReplicationTask(
            this.ops["DeleteReplicationTask"].apply(partialParams)
        );
    }

    invokeDeleteReplicationTaskAssessmentRun(partialParams: ToOptional<{
      [K in keyof DeleteReplicationTaskAssessmentRunMessage & keyof DeleteReplicationTaskAssessmentRunMessage & keyof DeleteReplicationTaskAssessmentRunMessage & keyof DeleteReplicationTaskAssessmentRunMessage & keyof DeleteReplicationTaskAssessmentRunMessage & keyof DeleteReplicationTaskAssessmentRunMessage & keyof DeleteReplicationTaskAssessmentRunMessage & keyof DeleteReplicationTaskAssessmentRunMessage & keyof DeleteReplicationTaskAssessmentRunMessage & keyof DeleteReplicationTaskAssessmentRunMessage & keyof DeleteReplicationTaskAssessmentRunMessage]: (DeleteReplicationTaskAssessmentRunMessage & DeleteReplicationTaskAssessmentRunMessage & DeleteReplicationTaskAssessmentRunMessage & DeleteReplicationTaskAssessmentRunMessage & DeleteReplicationTaskAssessmentRunMessage & DeleteReplicationTaskAssessmentRunMessage & DeleteReplicationTaskAssessmentRunMessage & DeleteReplicationTaskAssessmentRunMessage & DeleteReplicationTaskAssessmentRunMessage & DeleteReplicationTaskAssessmentRunMessage & DeleteReplicationTaskAssessmentRunMessage)[K]
    }>): DeleteReplicationTaskAssessmentRunResponse {
        return this.client.deleteReplicationTaskAssessmentRun(
            this.ops["DeleteReplicationTaskAssessmentRun"].apply(partialParams)
        );
    }

    invokeDescribeEndpointSettings(partialParams: ToOptional<{
      [K in keyof DescribeEndpointSettingsMessage & keyof DescribeEndpointSettingsMessage & keyof DescribeEndpointSettingsMessage & keyof DescribeEndpointSettingsMessage & keyof DescribeEndpointSettingsMessage & keyof DescribeEndpointSettingsMessage & keyof DescribeEndpointSettingsMessage & keyof DescribeEndpointSettingsMessage & keyof DescribeEndpointSettingsMessage & keyof DescribeEndpointSettingsMessage & keyof DescribeEndpointSettingsMessage]: (DescribeEndpointSettingsMessage & DescribeEndpointSettingsMessage & DescribeEndpointSettingsMessage & DescribeEndpointSettingsMessage & DescribeEndpointSettingsMessage & DescribeEndpointSettingsMessage & DescribeEndpointSettingsMessage & DescribeEndpointSettingsMessage & DescribeEndpointSettingsMessage & DescribeEndpointSettingsMessage & DescribeEndpointSettingsMessage)[K]
    }>): DescribeEndpointSettingsResponse {
        return this.client.describeEndpointSettings(
            this.ops["DescribeEndpointSettings"].apply(partialParams)
        );
    }

    invokeDescribeRefreshSchemasStatus(partialParams: ToOptional<{
      [K in keyof DescribeRefreshSchemasStatusMessage & keyof DescribeRefreshSchemasStatusMessage & keyof DescribeRefreshSchemasStatusMessage & keyof DescribeRefreshSchemasStatusMessage & keyof DescribeRefreshSchemasStatusMessage & keyof DescribeRefreshSchemasStatusMessage & keyof DescribeRefreshSchemasStatusMessage & keyof DescribeRefreshSchemasStatusMessage & keyof DescribeRefreshSchemasStatusMessage & keyof DescribeRefreshSchemasStatusMessage & keyof DescribeRefreshSchemasStatusMessage]: (DescribeRefreshSchemasStatusMessage & DescribeRefreshSchemasStatusMessage & DescribeRefreshSchemasStatusMessage & DescribeRefreshSchemasStatusMessage & DescribeRefreshSchemasStatusMessage & DescribeRefreshSchemasStatusMessage & DescribeRefreshSchemasStatusMessage & DescribeRefreshSchemasStatusMessage & DescribeRefreshSchemasStatusMessage & DescribeRefreshSchemasStatusMessage & DescribeRefreshSchemasStatusMessage)[K]
    }>): DescribeRefreshSchemasStatusResponse {
        return this.client.describeRefreshSchemasStatus(
            this.ops["DescribeRefreshSchemasStatus"].apply(partialParams)
        );
    }

    invokeDescribeReplicationInstanceTaskLogs(partialParams: ToOptional<{
      [K in keyof DescribeReplicationInstanceTaskLogsMessage & keyof DescribeReplicationInstanceTaskLogsMessage & keyof DescribeReplicationInstanceTaskLogsMessage & keyof DescribeReplicationInstanceTaskLogsMessage & keyof DescribeReplicationInstanceTaskLogsMessage & keyof DescribeReplicationInstanceTaskLogsMessage & keyof DescribeReplicationInstanceTaskLogsMessage & keyof DescribeReplicationInstanceTaskLogsMessage & keyof DescribeReplicationInstanceTaskLogsMessage & keyof DescribeReplicationInstanceTaskLogsMessage & keyof DescribeReplicationInstanceTaskLogsMessage]: (DescribeReplicationInstanceTaskLogsMessage & DescribeReplicationInstanceTaskLogsMessage & DescribeReplicationInstanceTaskLogsMessage & DescribeReplicationInstanceTaskLogsMessage & DescribeReplicationInstanceTaskLogsMessage & DescribeReplicationInstanceTaskLogsMessage & DescribeReplicationInstanceTaskLogsMessage & DescribeReplicationInstanceTaskLogsMessage & DescribeReplicationInstanceTaskLogsMessage & DescribeReplicationInstanceTaskLogsMessage & DescribeReplicationInstanceTaskLogsMessage)[K]
    }>): DescribeReplicationInstanceTaskLogsResponse {
        return this.client.describeReplicationInstanceTaskLogs(
            this.ops["DescribeReplicationInstanceTaskLogs"].apply(partialParams)
        );
    }

    invokeDescribeSchemas(partialParams: ToOptional<{
      [K in keyof DescribeSchemasMessage & keyof DescribeSchemasMessage & keyof DescribeSchemasMessage & keyof DescribeSchemasMessage & keyof DescribeSchemasMessage & keyof DescribeSchemasMessage & keyof DescribeSchemasMessage & keyof DescribeSchemasMessage & keyof DescribeSchemasMessage & keyof DescribeSchemasMessage & keyof DescribeSchemasMessage]: (DescribeSchemasMessage & DescribeSchemasMessage & DescribeSchemasMessage & DescribeSchemasMessage & DescribeSchemasMessage & DescribeSchemasMessage & DescribeSchemasMessage & DescribeSchemasMessage & DescribeSchemasMessage & DescribeSchemasMessage & DescribeSchemasMessage)[K]
    }>): DescribeSchemasResponse {
        return this.client.describeSchemas(
            this.ops["DescribeSchemas"].apply(partialParams)
        );
    }

    invokeDescribeTableStatistics(partialParams: ToOptional<{
      [K in keyof DescribeTableStatisticsMessage & keyof DescribeTableStatisticsMessage & keyof DescribeTableStatisticsMessage & keyof DescribeTableStatisticsMessage & keyof DescribeTableStatisticsMessage & keyof DescribeTableStatisticsMessage & keyof DescribeTableStatisticsMessage & keyof DescribeTableStatisticsMessage & keyof DescribeTableStatisticsMessage & keyof DescribeTableStatisticsMessage & keyof DescribeTableStatisticsMessage]: (DescribeTableStatisticsMessage & DescribeTableStatisticsMessage & DescribeTableStatisticsMessage & DescribeTableStatisticsMessage & DescribeTableStatisticsMessage & DescribeTableStatisticsMessage & DescribeTableStatisticsMessage & DescribeTableStatisticsMessage & DescribeTableStatisticsMessage & DescribeTableStatisticsMessage & DescribeTableStatisticsMessage)[K]
    }>): DescribeTableStatisticsResponse {
        return this.client.describeTableStatistics(
            this.ops["DescribeTableStatistics"].apply(partialParams)
        );
    }

    invokeImportCertificate(partialParams: ToOptional<{
      [K in keyof ImportCertificateMessage & keyof ImportCertificateMessage & keyof ImportCertificateMessage & keyof ImportCertificateMessage & keyof ImportCertificateMessage & keyof ImportCertificateMessage & keyof ImportCertificateMessage & keyof ImportCertificateMessage & keyof ImportCertificateMessage & keyof ImportCertificateMessage & keyof ImportCertificateMessage]: (ImportCertificateMessage & ImportCertificateMessage & ImportCertificateMessage & ImportCertificateMessage & ImportCertificateMessage & ImportCertificateMessage & ImportCertificateMessage & ImportCertificateMessage & ImportCertificateMessage & ImportCertificateMessage & ImportCertificateMessage)[K]
    }>): ImportCertificateResponse {
        return this.client.importCertificate(
            this.ops["ImportCertificate"].apply(partialParams)
        );
    }

    invokeModifyEndpoint(partialParams: ToOptional<{
      [K in keyof ModifyEndpointMessage & keyof ModifyEndpointMessage & keyof ModifyEndpointMessage & keyof ModifyEndpointMessage & keyof ModifyEndpointMessage & keyof ModifyEndpointMessage & keyof ModifyEndpointMessage & keyof ModifyEndpointMessage & keyof ModifyEndpointMessage & keyof ModifyEndpointMessage & keyof ModifyEndpointMessage]: (ModifyEndpointMessage & ModifyEndpointMessage & ModifyEndpointMessage & ModifyEndpointMessage & ModifyEndpointMessage & ModifyEndpointMessage & ModifyEndpointMessage & ModifyEndpointMessage & ModifyEndpointMessage & ModifyEndpointMessage & ModifyEndpointMessage)[K]
    }>): ModifyEndpointResponse {
        return this.client.modifyEndpoint(
            this.ops["ModifyEndpoint"].apply(partialParams)
        );
    }

    invokeModifyEventSubscription(partialParams: ToOptional<{
      [K in keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage & keyof ModifyEventSubscriptionMessage]: (ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage & ModifyEventSubscriptionMessage)[K]
    }>): ModifyEventSubscriptionResponse {
        return this.client.modifyEventSubscription(
            this.ops["ModifyEventSubscription"].apply(partialParams)
        );
    }

    invokeModifyReplicationInstance(partialParams: ToOptional<{
      [K in keyof ModifyReplicationInstanceMessage & keyof ModifyReplicationInstanceMessage & keyof ModifyReplicationInstanceMessage & keyof ModifyReplicationInstanceMessage & keyof ModifyReplicationInstanceMessage & keyof ModifyReplicationInstanceMessage & keyof ModifyReplicationInstanceMessage & keyof ModifyReplicationInstanceMessage & keyof ModifyReplicationInstanceMessage & keyof ModifyReplicationInstanceMessage & keyof ModifyReplicationInstanceMessage]: (ModifyReplicationInstanceMessage & ModifyReplicationInstanceMessage & ModifyReplicationInstanceMessage & ModifyReplicationInstanceMessage & ModifyReplicationInstanceMessage & ModifyReplicationInstanceMessage & ModifyReplicationInstanceMessage & ModifyReplicationInstanceMessage & ModifyReplicationInstanceMessage & ModifyReplicationInstanceMessage & ModifyReplicationInstanceMessage)[K]
    }>): ModifyReplicationInstanceResponse {
        return this.client.modifyReplicationInstance(
            this.ops["ModifyReplicationInstance"].apply(partialParams)
        );
    }

    invokeModifyReplicationSubnetGroup(partialParams: ToOptional<{
      [K in keyof ModifyReplicationSubnetGroupMessage & keyof ModifyReplicationSubnetGroupMessage & keyof ModifyReplicationSubnetGroupMessage & keyof ModifyReplicationSubnetGroupMessage & keyof ModifyReplicationSubnetGroupMessage & keyof ModifyReplicationSubnetGroupMessage & keyof ModifyReplicationSubnetGroupMessage & keyof ModifyReplicationSubnetGroupMessage & keyof ModifyReplicationSubnetGroupMessage & keyof ModifyReplicationSubnetGroupMessage & keyof ModifyReplicationSubnetGroupMessage]: (ModifyReplicationSubnetGroupMessage & ModifyReplicationSubnetGroupMessage & ModifyReplicationSubnetGroupMessage & ModifyReplicationSubnetGroupMessage & ModifyReplicationSubnetGroupMessage & ModifyReplicationSubnetGroupMessage & ModifyReplicationSubnetGroupMessage & ModifyReplicationSubnetGroupMessage & ModifyReplicationSubnetGroupMessage & ModifyReplicationSubnetGroupMessage & ModifyReplicationSubnetGroupMessage)[K]
    }>): ModifyReplicationSubnetGroupResponse {
        return this.client.modifyReplicationSubnetGroup(
            this.ops["ModifyReplicationSubnetGroup"].apply(partialParams)
        );
    }

    invokeModifyReplicationTask(partialParams: ToOptional<{
      [K in keyof ModifyReplicationTaskMessage & keyof ModifyReplicationTaskMessage & keyof ModifyReplicationTaskMessage & keyof ModifyReplicationTaskMessage & keyof ModifyReplicationTaskMessage & keyof ModifyReplicationTaskMessage & keyof ModifyReplicationTaskMessage & keyof ModifyReplicationTaskMessage & keyof ModifyReplicationTaskMessage & keyof ModifyReplicationTaskMessage & keyof ModifyReplicationTaskMessage]: (ModifyReplicationTaskMessage & ModifyReplicationTaskMessage & ModifyReplicationTaskMessage & ModifyReplicationTaskMessage & ModifyReplicationTaskMessage & ModifyReplicationTaskMessage & ModifyReplicationTaskMessage & ModifyReplicationTaskMessage & ModifyReplicationTaskMessage & ModifyReplicationTaskMessage & ModifyReplicationTaskMessage)[K]
    }>): ModifyReplicationTaskResponse {
        return this.client.modifyReplicationTask(
            this.ops["ModifyReplicationTask"].apply(partialParams)
        );
    }

    invokeMoveReplicationTask(partialParams: ToOptional<{
      [K in keyof MoveReplicationTaskMessage & keyof MoveReplicationTaskMessage & keyof MoveReplicationTaskMessage & keyof MoveReplicationTaskMessage & keyof MoveReplicationTaskMessage & keyof MoveReplicationTaskMessage & keyof MoveReplicationTaskMessage & keyof MoveReplicationTaskMessage & keyof MoveReplicationTaskMessage & keyof MoveReplicationTaskMessage & keyof MoveReplicationTaskMessage]: (MoveReplicationTaskMessage & MoveReplicationTaskMessage & MoveReplicationTaskMessage & MoveReplicationTaskMessage & MoveReplicationTaskMessage & MoveReplicationTaskMessage & MoveReplicationTaskMessage & MoveReplicationTaskMessage & MoveReplicationTaskMessage & MoveReplicationTaskMessage & MoveReplicationTaskMessage)[K]
    }>): MoveReplicationTaskResponse {
        return this.client.moveReplicationTask(
            this.ops["MoveReplicationTask"].apply(partialParams)
        );
    }

    invokeRebootReplicationInstance(partialParams: ToOptional<{
      [K in keyof RebootReplicationInstanceMessage & keyof RebootReplicationInstanceMessage & keyof RebootReplicationInstanceMessage & keyof RebootReplicationInstanceMessage & keyof RebootReplicationInstanceMessage & keyof RebootReplicationInstanceMessage & keyof RebootReplicationInstanceMessage & keyof RebootReplicationInstanceMessage & keyof RebootReplicationInstanceMessage & keyof RebootReplicationInstanceMessage & keyof RebootReplicationInstanceMessage]: (RebootReplicationInstanceMessage & RebootReplicationInstanceMessage & RebootReplicationInstanceMessage & RebootReplicationInstanceMessage & RebootReplicationInstanceMessage & RebootReplicationInstanceMessage & RebootReplicationInstanceMessage & RebootReplicationInstanceMessage & RebootReplicationInstanceMessage & RebootReplicationInstanceMessage & RebootReplicationInstanceMessage)[K]
    }>): RebootReplicationInstanceResponse {
        return this.client.rebootReplicationInstance(
            this.ops["RebootReplicationInstance"].apply(partialParams)
        );
    }

    invokeRefreshSchemas(partialParams: ToOptional<{
      [K in keyof RefreshSchemasMessage & keyof RefreshSchemasMessage & keyof RefreshSchemasMessage & keyof RefreshSchemasMessage & keyof RefreshSchemasMessage & keyof RefreshSchemasMessage & keyof RefreshSchemasMessage & keyof RefreshSchemasMessage & keyof RefreshSchemasMessage & keyof RefreshSchemasMessage & keyof RefreshSchemasMessage]: (RefreshSchemasMessage & RefreshSchemasMessage & RefreshSchemasMessage & RefreshSchemasMessage & RefreshSchemasMessage & RefreshSchemasMessage & RefreshSchemasMessage & RefreshSchemasMessage & RefreshSchemasMessage & RefreshSchemasMessage & RefreshSchemasMessage)[K]
    }>): RefreshSchemasResponse {
        return this.client.refreshSchemas(
            this.ops["RefreshSchemas"].apply(partialParams)
        );
    }

    invokeReloadTables(partialParams: ToOptional<{
      [K in keyof ReloadTablesMessage & keyof ReloadTablesMessage & keyof ReloadTablesMessage & keyof ReloadTablesMessage & keyof ReloadTablesMessage & keyof ReloadTablesMessage & keyof ReloadTablesMessage & keyof ReloadTablesMessage & keyof ReloadTablesMessage & keyof ReloadTablesMessage & keyof ReloadTablesMessage]: (ReloadTablesMessage & ReloadTablesMessage & ReloadTablesMessage & ReloadTablesMessage & ReloadTablesMessage & ReloadTablesMessage & ReloadTablesMessage & ReloadTablesMessage & ReloadTablesMessage & ReloadTablesMessage & ReloadTablesMessage)[K]
    }>): ReloadTablesResponse {
        return this.client.reloadTables(
            this.ops["ReloadTables"].apply(partialParams)
        );
    }

    invokeRemoveTagsFromResource(partialParams: ToOptional<{
      [K in keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage & keyof RemoveTagsFromResourceMessage]: (RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage & RemoveTagsFromResourceMessage)[K]
    }>): RemoveTagsFromResourceResponse {
        return this.client.removeTagsFromResource(
            this.ops["RemoveTagsFromResource"].apply(partialParams)
        );
    }

    invokeStartReplicationTask(partialParams: ToOptional<{
      [K in keyof StartReplicationTaskMessage & keyof StartReplicationTaskMessage & keyof StartReplicationTaskMessage & keyof StartReplicationTaskMessage & keyof StartReplicationTaskMessage & keyof StartReplicationTaskMessage & keyof StartReplicationTaskMessage & keyof StartReplicationTaskMessage & keyof StartReplicationTaskMessage & keyof StartReplicationTaskMessage & keyof StartReplicationTaskMessage]: (StartReplicationTaskMessage & StartReplicationTaskMessage & StartReplicationTaskMessage & StartReplicationTaskMessage & StartReplicationTaskMessage & StartReplicationTaskMessage & StartReplicationTaskMessage & StartReplicationTaskMessage & StartReplicationTaskMessage & StartReplicationTaskMessage & StartReplicationTaskMessage)[K]
    }>): StartReplicationTaskResponse {
        return this.client.startReplicationTask(
            this.ops["StartReplicationTask"].apply(partialParams)
        );
    }

    invokeStartReplicationTaskAssessment(partialParams: ToOptional<{
      [K in keyof StartReplicationTaskAssessmentMessage & keyof StartReplicationTaskAssessmentMessage & keyof StartReplicationTaskAssessmentMessage & keyof StartReplicationTaskAssessmentMessage & keyof StartReplicationTaskAssessmentMessage & keyof StartReplicationTaskAssessmentMessage & keyof StartReplicationTaskAssessmentMessage & keyof StartReplicationTaskAssessmentMessage & keyof StartReplicationTaskAssessmentMessage & keyof StartReplicationTaskAssessmentMessage & keyof StartReplicationTaskAssessmentMessage]: (StartReplicationTaskAssessmentMessage & StartReplicationTaskAssessmentMessage & StartReplicationTaskAssessmentMessage & StartReplicationTaskAssessmentMessage & StartReplicationTaskAssessmentMessage & StartReplicationTaskAssessmentMessage & StartReplicationTaskAssessmentMessage & StartReplicationTaskAssessmentMessage & StartReplicationTaskAssessmentMessage & StartReplicationTaskAssessmentMessage & StartReplicationTaskAssessmentMessage)[K]
    }>): StartReplicationTaskAssessmentResponse {
        return this.client.startReplicationTaskAssessment(
            this.ops["StartReplicationTaskAssessment"].apply(partialParams)
        );
    }

    invokeStartReplicationTaskAssessmentRun(partialParams: ToOptional<{
      [K in keyof StartReplicationTaskAssessmentRunMessage & keyof StartReplicationTaskAssessmentRunMessage & keyof StartReplicationTaskAssessmentRunMessage & keyof StartReplicationTaskAssessmentRunMessage & keyof StartReplicationTaskAssessmentRunMessage & keyof StartReplicationTaskAssessmentRunMessage & keyof StartReplicationTaskAssessmentRunMessage & keyof StartReplicationTaskAssessmentRunMessage & keyof StartReplicationTaskAssessmentRunMessage & keyof StartReplicationTaskAssessmentRunMessage & keyof StartReplicationTaskAssessmentRunMessage]: (StartReplicationTaskAssessmentRunMessage & StartReplicationTaskAssessmentRunMessage & StartReplicationTaskAssessmentRunMessage & StartReplicationTaskAssessmentRunMessage & StartReplicationTaskAssessmentRunMessage & StartReplicationTaskAssessmentRunMessage & StartReplicationTaskAssessmentRunMessage & StartReplicationTaskAssessmentRunMessage & StartReplicationTaskAssessmentRunMessage & StartReplicationTaskAssessmentRunMessage & StartReplicationTaskAssessmentRunMessage)[K]
    }>): StartReplicationTaskAssessmentRunResponse {
        return this.client.startReplicationTaskAssessmentRun(
            this.ops["StartReplicationTaskAssessmentRun"].apply(partialParams)
        );
    }

    invokeStopReplicationTask(partialParams: ToOptional<{
      [K in keyof StopReplicationTaskMessage & keyof StopReplicationTaskMessage & keyof StopReplicationTaskMessage & keyof StopReplicationTaskMessage & keyof StopReplicationTaskMessage & keyof StopReplicationTaskMessage & keyof StopReplicationTaskMessage & keyof StopReplicationTaskMessage & keyof StopReplicationTaskMessage & keyof StopReplicationTaskMessage & keyof StopReplicationTaskMessage]: (StopReplicationTaskMessage & StopReplicationTaskMessage & StopReplicationTaskMessage & StopReplicationTaskMessage & StopReplicationTaskMessage & StopReplicationTaskMessage & StopReplicationTaskMessage & StopReplicationTaskMessage & StopReplicationTaskMessage & StopReplicationTaskMessage & StopReplicationTaskMessage)[K]
    }>): StopReplicationTaskResponse {
        return this.client.stopReplicationTask(
            this.ops["StopReplicationTask"].apply(partialParams)
        );
    }

    invokeTestConnection(partialParams: ToOptional<{
      [K in keyof TestConnectionMessage & keyof TestConnectionMessage & keyof TestConnectionMessage & keyof Omit<TestConnectionMessage, "ReplicationInstanceArn"> & keyof TestConnectionMessage & keyof TestConnectionMessage & keyof TestConnectionMessage & keyof TestConnectionMessage & keyof TestConnectionMessage & keyof TestConnectionMessage & keyof TestConnectionMessage]: (TestConnectionMessage & TestConnectionMessage & TestConnectionMessage & Omit<TestConnectionMessage, "ReplicationInstanceArn"> & TestConnectionMessage & TestConnectionMessage & TestConnectionMessage & TestConnectionMessage & TestConnectionMessage & TestConnectionMessage & TestConnectionMessage)[K]
    }>): TestConnectionResponse {
        return this.client.testConnection(
            this.ops["TestConnection"].apply(partialParams)
        );
    }
}