
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
    DescribeAccountAttributesMessage,
    DescribeApplicableIndividualAssessmentsMessage,
    DescribeCertificatesMessage,
    DescribeConnectionsMessage,
    DescribeEndpointSettingsMessage,
    DescribeEndpointTypesMessage,
    DescribeEndpointsMessage,
    DescribeEventCategoriesMessage,
    DescribeEventSubscriptionsMessage,
    DescribeEventsMessage,
    DescribeOrderableReplicationInstancesMessage,
    DescribePendingMaintenanceActionsMessage,
    DescribeRefreshSchemasStatusMessage,
    DescribeReplicationInstanceTaskLogsMessage,
    DescribeReplicationInstancesMessage,
    DescribeReplicationSubnetGroupsMessage,
    DescribeReplicationTaskAssessmentResultsMessage,
    DescribeReplicationTaskAssessmentRunsMessage,
    DescribeReplicationTaskIndividualAssessmentsMessage,
    DescribeReplicationTasksMessage,
    DescribeSchemasMessage,
    DescribeTableStatisticsMessage,
    ImportCertificateMessage,
    ListTagsForResourceMessage,
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
    DescribeAccountAttributesResponse,
    DescribeApplicableIndividualAssessmentsResponse,
    DescribeCertificatesResponse,
    DescribeConnectionsResponse,
    DescribeEndpointSettingsResponse,
    DescribeEndpointTypesResponse,
    DescribeEndpointsResponse,
    DescribeEventCategoriesResponse,
    DescribeEventSubscriptionsResponse,
    DescribeEventsResponse,
    DescribeOrderableReplicationInstancesResponse,
    DescribePendingMaintenanceActionsResponse,
    DescribeRefreshSchemasStatusResponse,
    DescribeReplicationInstanceTaskLogsResponse,
    DescribeReplicationInstancesResponse,
    DescribeReplicationSubnetGroupsResponse,
    DescribeReplicationTaskAssessmentResultsResponse,
    DescribeReplicationTaskAssessmentRunsResponse,
    DescribeReplicationTaskIndividualAssessmentsResponse,
    DescribeReplicationTasksResponse,
    DescribeSchemasResponse,
    DescribeTableStatisticsResponse,
    ImportCertificateResponse,
    ListTagsForResourceResponse,
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

export default class extends aws.dms.Certificate {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.dms.Certificate>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.DMS()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
          console.log(this.capitalizedParams);
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

    invokeAddTagsToResource(partialParams: ToOptional<{
      [K in keyof AddTagsToResourceMessage]: (AddTagsToResourceMessage)[K]
    }>): Request<AddTagsToResourceResponse, AWSError> {
        this.boot();
        return this.client.addTagsToResource(
          this.ops["AddTagsToResource"].apply(partialParams)
        );
    }

    invokeApplyPendingMaintenanceAction(partialParams: ToOptional<{
      [K in keyof ApplyPendingMaintenanceActionMessage]: (ApplyPendingMaintenanceActionMessage)[K]
    }>): Request<ApplyPendingMaintenanceActionResponse, AWSError> {
        this.boot();
        return this.client.applyPendingMaintenanceAction(
          this.ops["ApplyPendingMaintenanceAction"].apply(partialParams)
        );
    }

    invokeCancelReplicationTaskAssessmentRun(partialParams: ToOptional<{
      [K in keyof CancelReplicationTaskAssessmentRunMessage]: (CancelReplicationTaskAssessmentRunMessage)[K]
    }>): Request<CancelReplicationTaskAssessmentRunResponse, AWSError> {
        this.boot();
        return this.client.cancelReplicationTaskAssessmentRun(
          this.ops["CancelReplicationTaskAssessmentRun"].apply(partialParams)
        );
    }

    invokeCreateEndpoint(partialParams: ToOptional<{
      [K in keyof CreateEndpointMessage]: (CreateEndpointMessage)[K]
    }>): Request<CreateEndpointResponse, AWSError> {
        this.boot();
        return this.client.createEndpoint(
          this.ops["CreateEndpoint"].apply(partialParams)
        );
    }

    invokeCreateEventSubscription(partialParams: ToOptional<{
      [K in keyof CreateEventSubscriptionMessage]: (CreateEventSubscriptionMessage)[K]
    }>): Request<CreateEventSubscriptionResponse, AWSError> {
        this.boot();
        return this.client.createEventSubscription(
          this.ops["CreateEventSubscription"].apply(partialParams)
        );
    }

    invokeCreateReplicationInstance(partialParams: ToOptional<{
      [K in keyof CreateReplicationInstanceMessage]: (CreateReplicationInstanceMessage)[K]
    }>): Request<CreateReplicationInstanceResponse, AWSError> {
        this.boot();
        return this.client.createReplicationInstance(
          this.ops["CreateReplicationInstance"].apply(partialParams)
        );
    }

    invokeCreateReplicationSubnetGroup(partialParams: ToOptional<{
      [K in keyof CreateReplicationSubnetGroupMessage]: (CreateReplicationSubnetGroupMessage)[K]
    }>): Request<CreateReplicationSubnetGroupResponse, AWSError> {
        this.boot();
        return this.client.createReplicationSubnetGroup(
          this.ops["CreateReplicationSubnetGroup"].apply(partialParams)
        );
    }

    invokeCreateReplicationTask(partialParams: ToOptional<{
      [K in keyof CreateReplicationTaskMessage]: (CreateReplicationTaskMessage)[K]
    }>): Request<CreateReplicationTaskResponse, AWSError> {
        this.boot();
        return this.client.createReplicationTask(
          this.ops["CreateReplicationTask"].apply(partialParams)
        );
    }

    invokeDeleteCertificate(partialParams: ToOptional<{
      [K in keyof DeleteCertificateMessage & keyof Omit<DeleteCertificateMessage, "CertificateArn">]: (DeleteCertificateMessage)[K]
    }>): Request<DeleteCertificateResponse, AWSError> {
        this.boot();
        return this.client.deleteCertificate(
          this.ops["DeleteCertificate"].apply(partialParams)
        );
    }

    invokeDeleteConnection(partialParams: ToOptional<{
      [K in keyof DeleteConnectionMessage]: (DeleteConnectionMessage)[K]
    }>): Request<DeleteConnectionResponse, AWSError> {
        this.boot();
        return this.client.deleteConnection(
          this.ops["DeleteConnection"].apply(partialParams)
        );
    }

    invokeDeleteEndpoint(partialParams: ToOptional<{
      [K in keyof DeleteEndpointMessage]: (DeleteEndpointMessage)[K]
    }>): Request<DeleteEndpointResponse, AWSError> {
        this.boot();
        return this.client.deleteEndpoint(
          this.ops["DeleteEndpoint"].apply(partialParams)
        );
    }

    invokeDeleteEventSubscription(partialParams: ToOptional<{
      [K in keyof DeleteEventSubscriptionMessage]: (DeleteEventSubscriptionMessage)[K]
    }>): Request<DeleteEventSubscriptionResponse, AWSError> {
        this.boot();
        return this.client.deleteEventSubscription(
          this.ops["DeleteEventSubscription"].apply(partialParams)
        );
    }

    invokeDeleteReplicationInstance(partialParams: ToOptional<{
      [K in keyof DeleteReplicationInstanceMessage]: (DeleteReplicationInstanceMessage)[K]
    }>): Request<DeleteReplicationInstanceResponse, AWSError> {
        this.boot();
        return this.client.deleteReplicationInstance(
          this.ops["DeleteReplicationInstance"].apply(partialParams)
        );
    }

    invokeDeleteReplicationSubnetGroup(partialParams: ToOptional<{
      [K in keyof DeleteReplicationSubnetGroupMessage]: (DeleteReplicationSubnetGroupMessage)[K]
    }>): Request<DeleteReplicationSubnetGroupResponse, AWSError> {
        this.boot();
        return this.client.deleteReplicationSubnetGroup(
          this.ops["DeleteReplicationSubnetGroup"].apply(partialParams)
        );
    }

    invokeDeleteReplicationTask(partialParams: ToOptional<{
      [K in keyof DeleteReplicationTaskMessage]: (DeleteReplicationTaskMessage)[K]
    }>): Request<DeleteReplicationTaskResponse, AWSError> {
        this.boot();
        return this.client.deleteReplicationTask(
          this.ops["DeleteReplicationTask"].apply(partialParams)
        );
    }

    invokeDeleteReplicationTaskAssessmentRun(partialParams: ToOptional<{
      [K in keyof DeleteReplicationTaskAssessmentRunMessage]: (DeleteReplicationTaskAssessmentRunMessage)[K]
    }>): Request<DeleteReplicationTaskAssessmentRunResponse, AWSError> {
        this.boot();
        return this.client.deleteReplicationTaskAssessmentRun(
          this.ops["DeleteReplicationTaskAssessmentRun"].apply(partialParams)
        );
    }

    invokeDescribeAccountAttributes(partialParams: ToOptional<{
      [K in keyof DescribeAccountAttributesMessage]: (DescribeAccountAttributesMessage)[K]
    }>): Request<DescribeAccountAttributesResponse, AWSError> {
        this.boot();
        return this.client.describeAccountAttributes(
          this.ops["DescribeAccountAttributes"].apply(partialParams)
        );
    }

    invokeDescribeApplicableIndividualAssessments(partialParams: ToOptional<{
      [K in keyof DescribeApplicableIndividualAssessmentsMessage]: (DescribeApplicableIndividualAssessmentsMessage)[K]
    }>): Request<DescribeApplicableIndividualAssessmentsResponse, AWSError> {
        this.boot();
        return this.client.describeApplicableIndividualAssessments(
          this.ops["DescribeApplicableIndividualAssessments"].apply(partialParams)
        );
    }

    invokeDescribeCertificates(partialParams: ToOptional<{
      [K in keyof DescribeCertificatesMessage]: (DescribeCertificatesMessage)[K]
    }>): Request<DescribeCertificatesResponse, AWSError> {
        this.boot();
        return this.client.describeCertificates(
          this.ops["DescribeCertificates"].apply(partialParams)
        );
    }

    invokeDescribeConnections(partialParams: ToOptional<{
      [K in keyof DescribeConnectionsMessage]: (DescribeConnectionsMessage)[K]
    }>): Request<DescribeConnectionsResponse, AWSError> {
        this.boot();
        return this.client.describeConnections(
          this.ops["DescribeConnections"].apply(partialParams)
        );
    }

    invokeDescribeEndpointSettings(partialParams: ToOptional<{
      [K in keyof DescribeEndpointSettingsMessage]: (DescribeEndpointSettingsMessage)[K]
    }>): Request<DescribeEndpointSettingsResponse, AWSError> {
        this.boot();
        return this.client.describeEndpointSettings(
          this.ops["DescribeEndpointSettings"].apply(partialParams)
        );
    }

    invokeDescribeEndpointTypes(partialParams: ToOptional<{
      [K in keyof DescribeEndpointTypesMessage]: (DescribeEndpointTypesMessage)[K]
    }>): Request<DescribeEndpointTypesResponse, AWSError> {
        this.boot();
        return this.client.describeEndpointTypes(
          this.ops["DescribeEndpointTypes"].apply(partialParams)
        );
    }

    invokeDescribeEndpoints(partialParams: ToOptional<{
      [K in keyof DescribeEndpointsMessage]: (DescribeEndpointsMessage)[K]
    }>): Request<DescribeEndpointsResponse, AWSError> {
        this.boot();
        return this.client.describeEndpoints(
          this.ops["DescribeEndpoints"].apply(partialParams)
        );
    }

    invokeDescribeEventCategories(partialParams: ToOptional<{
      [K in keyof DescribeEventCategoriesMessage]: (DescribeEventCategoriesMessage)[K]
    }>): Request<DescribeEventCategoriesResponse, AWSError> {
        this.boot();
        return this.client.describeEventCategories(
          this.ops["DescribeEventCategories"].apply(partialParams)
        );
    }

    invokeDescribeEventSubscriptions(partialParams: ToOptional<{
      [K in keyof DescribeEventSubscriptionsMessage]: (DescribeEventSubscriptionsMessage)[K]
    }>): Request<DescribeEventSubscriptionsResponse, AWSError> {
        this.boot();
        return this.client.describeEventSubscriptions(
          this.ops["DescribeEventSubscriptions"].apply(partialParams)
        );
    }

    invokeDescribeEvents(partialParams: ToOptional<{
      [K in keyof DescribeEventsMessage]: (DescribeEventsMessage)[K]
    }>): Request<DescribeEventsResponse, AWSError> {
        this.boot();
        return this.client.describeEvents(
          this.ops["DescribeEvents"].apply(partialParams)
        );
    }

    invokeDescribeOrderableReplicationInstances(partialParams: ToOptional<{
      [K in keyof DescribeOrderableReplicationInstancesMessage]: (DescribeOrderableReplicationInstancesMessage)[K]
    }>): Request<DescribeOrderableReplicationInstancesResponse, AWSError> {
        this.boot();
        return this.client.describeOrderableReplicationInstances(
          this.ops["DescribeOrderableReplicationInstances"].apply(partialParams)
        );
    }

    invokeDescribePendingMaintenanceActions(partialParams: ToOptional<{
      [K in keyof DescribePendingMaintenanceActionsMessage]: (DescribePendingMaintenanceActionsMessage)[K]
    }>): Request<DescribePendingMaintenanceActionsResponse, AWSError> {
        this.boot();
        return this.client.describePendingMaintenanceActions(
          this.ops["DescribePendingMaintenanceActions"].apply(partialParams)
        );
    }

    invokeDescribeRefreshSchemasStatus(partialParams: ToOptional<{
      [K in keyof DescribeRefreshSchemasStatusMessage]: (DescribeRefreshSchemasStatusMessage)[K]
    }>): Request<DescribeRefreshSchemasStatusResponse, AWSError> {
        this.boot();
        return this.client.describeRefreshSchemasStatus(
          this.ops["DescribeRefreshSchemasStatus"].apply(partialParams)
        );
    }

    invokeDescribeReplicationInstanceTaskLogs(partialParams: ToOptional<{
      [K in keyof DescribeReplicationInstanceTaskLogsMessage]: (DescribeReplicationInstanceTaskLogsMessage)[K]
    }>): Request<DescribeReplicationInstanceTaskLogsResponse, AWSError> {
        this.boot();
        return this.client.describeReplicationInstanceTaskLogs(
          this.ops["DescribeReplicationInstanceTaskLogs"].apply(partialParams)
        );
    }

    invokeDescribeReplicationInstances(partialParams: ToOptional<{
      [K in keyof DescribeReplicationInstancesMessage]: (DescribeReplicationInstancesMessage)[K]
    }>): Request<DescribeReplicationInstancesResponse, AWSError> {
        this.boot();
        return this.client.describeReplicationInstances(
          this.ops["DescribeReplicationInstances"].apply(partialParams)
        );
    }

    invokeDescribeReplicationSubnetGroups(partialParams: ToOptional<{
      [K in keyof DescribeReplicationSubnetGroupsMessage]: (DescribeReplicationSubnetGroupsMessage)[K]
    }>): Request<DescribeReplicationSubnetGroupsResponse, AWSError> {
        this.boot();
        return this.client.describeReplicationSubnetGroups(
          this.ops["DescribeReplicationSubnetGroups"].apply(partialParams)
        );
    }

    invokeDescribeReplicationTaskAssessmentResults(partialParams: ToOptional<{
      [K in keyof DescribeReplicationTaskAssessmentResultsMessage]: (DescribeReplicationTaskAssessmentResultsMessage)[K]
    }>): Request<DescribeReplicationTaskAssessmentResultsResponse, AWSError> {
        this.boot();
        return this.client.describeReplicationTaskAssessmentResults(
          this.ops["DescribeReplicationTaskAssessmentResults"].apply(partialParams)
        );
    }

    invokeDescribeReplicationTaskAssessmentRuns(partialParams: ToOptional<{
      [K in keyof DescribeReplicationTaskAssessmentRunsMessage]: (DescribeReplicationTaskAssessmentRunsMessage)[K]
    }>): Request<DescribeReplicationTaskAssessmentRunsResponse, AWSError> {
        this.boot();
        return this.client.describeReplicationTaskAssessmentRuns(
          this.ops["DescribeReplicationTaskAssessmentRuns"].apply(partialParams)
        );
    }

    invokeDescribeReplicationTaskIndividualAssessments(partialParams: ToOptional<{
      [K in keyof DescribeReplicationTaskIndividualAssessmentsMessage]: (DescribeReplicationTaskIndividualAssessmentsMessage)[K]
    }>): Request<DescribeReplicationTaskIndividualAssessmentsResponse, AWSError> {
        this.boot();
        return this.client.describeReplicationTaskIndividualAssessments(
          this.ops["DescribeReplicationTaskIndividualAssessments"].apply(partialParams)
        );
    }

    invokeDescribeReplicationTasks(partialParams: ToOptional<{
      [K in keyof DescribeReplicationTasksMessage]: (DescribeReplicationTasksMessage)[K]
    }>): Request<DescribeReplicationTasksResponse, AWSError> {
        this.boot();
        return this.client.describeReplicationTasks(
          this.ops["DescribeReplicationTasks"].apply(partialParams)
        );
    }

    invokeDescribeSchemas(partialParams: ToOptional<{
      [K in keyof DescribeSchemasMessage]: (DescribeSchemasMessage)[K]
    }>): Request<DescribeSchemasResponse, AWSError> {
        this.boot();
        return this.client.describeSchemas(
          this.ops["DescribeSchemas"].apply(partialParams)
        );
    }

    invokeDescribeTableStatistics(partialParams: ToOptional<{
      [K in keyof DescribeTableStatisticsMessage]: (DescribeTableStatisticsMessage)[K]
    }>): Request<DescribeTableStatisticsResponse, AWSError> {
        this.boot();
        return this.client.describeTableStatistics(
          this.ops["DescribeTableStatistics"].apply(partialParams)
        );
    }

    invokeImportCertificate(partialParams: ToOptional<{
      [K in keyof ImportCertificateMessage]: (ImportCertificateMessage)[K]
    }>): Request<ImportCertificateResponse, AWSError> {
        this.boot();
        return this.client.importCertificate(
          this.ops["ImportCertificate"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceMessage]: (ListTagsForResourceMessage)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeModifyEndpoint(partialParams: ToOptional<{
      [K in keyof ModifyEndpointMessage]: (ModifyEndpointMessage)[K]
    }>): Request<ModifyEndpointResponse, AWSError> {
        this.boot();
        return this.client.modifyEndpoint(
          this.ops["ModifyEndpoint"].apply(partialParams)
        );
    }

    invokeModifyEventSubscription(partialParams: ToOptional<{
      [K in keyof ModifyEventSubscriptionMessage]: (ModifyEventSubscriptionMessage)[K]
    }>): Request<ModifyEventSubscriptionResponse, AWSError> {
        this.boot();
        return this.client.modifyEventSubscription(
          this.ops["ModifyEventSubscription"].apply(partialParams)
        );
    }

    invokeModifyReplicationInstance(partialParams: ToOptional<{
      [K in keyof ModifyReplicationInstanceMessage]: (ModifyReplicationInstanceMessage)[K]
    }>): Request<ModifyReplicationInstanceResponse, AWSError> {
        this.boot();
        return this.client.modifyReplicationInstance(
          this.ops["ModifyReplicationInstance"].apply(partialParams)
        );
    }

    invokeModifyReplicationSubnetGroup(partialParams: ToOptional<{
      [K in keyof ModifyReplicationSubnetGroupMessage]: (ModifyReplicationSubnetGroupMessage)[K]
    }>): Request<ModifyReplicationSubnetGroupResponse, AWSError> {
        this.boot();
        return this.client.modifyReplicationSubnetGroup(
          this.ops["ModifyReplicationSubnetGroup"].apply(partialParams)
        );
    }

    invokeModifyReplicationTask(partialParams: ToOptional<{
      [K in keyof ModifyReplicationTaskMessage]: (ModifyReplicationTaskMessage)[K]
    }>): Request<ModifyReplicationTaskResponse, AWSError> {
        this.boot();
        return this.client.modifyReplicationTask(
          this.ops["ModifyReplicationTask"].apply(partialParams)
        );
    }

    invokeMoveReplicationTask(partialParams: ToOptional<{
      [K in keyof MoveReplicationTaskMessage]: (MoveReplicationTaskMessage)[K]
    }>): Request<MoveReplicationTaskResponse, AWSError> {
        this.boot();
        return this.client.moveReplicationTask(
          this.ops["MoveReplicationTask"].apply(partialParams)
        );
    }

    invokeRebootReplicationInstance(partialParams: ToOptional<{
      [K in keyof RebootReplicationInstanceMessage]: (RebootReplicationInstanceMessage)[K]
    }>): Request<RebootReplicationInstanceResponse, AWSError> {
        this.boot();
        return this.client.rebootReplicationInstance(
          this.ops["RebootReplicationInstance"].apply(partialParams)
        );
    }

    invokeRefreshSchemas(partialParams: ToOptional<{
      [K in keyof RefreshSchemasMessage]: (RefreshSchemasMessage)[K]
    }>): Request<RefreshSchemasResponse, AWSError> {
        this.boot();
        return this.client.refreshSchemas(
          this.ops["RefreshSchemas"].apply(partialParams)
        );
    }

    invokeReloadTables(partialParams: ToOptional<{
      [K in keyof ReloadTablesMessage]: (ReloadTablesMessage)[K]
    }>): Request<ReloadTablesResponse, AWSError> {
        this.boot();
        return this.client.reloadTables(
          this.ops["ReloadTables"].apply(partialParams)
        );
    }

    invokeRemoveTagsFromResource(partialParams: ToOptional<{
      [K in keyof RemoveTagsFromResourceMessage]: (RemoveTagsFromResourceMessage)[K]
    }>): Request<RemoveTagsFromResourceResponse, AWSError> {
        this.boot();
        return this.client.removeTagsFromResource(
          this.ops["RemoveTagsFromResource"].apply(partialParams)
        );
    }

    invokeStartReplicationTask(partialParams: ToOptional<{
      [K in keyof StartReplicationTaskMessage]: (StartReplicationTaskMessage)[K]
    }>): Request<StartReplicationTaskResponse, AWSError> {
        this.boot();
        return this.client.startReplicationTask(
          this.ops["StartReplicationTask"].apply(partialParams)
        );
    }

    invokeStartReplicationTaskAssessment(partialParams: ToOptional<{
      [K in keyof StartReplicationTaskAssessmentMessage]: (StartReplicationTaskAssessmentMessage)[K]
    }>): Request<StartReplicationTaskAssessmentResponse, AWSError> {
        this.boot();
        return this.client.startReplicationTaskAssessment(
          this.ops["StartReplicationTaskAssessment"].apply(partialParams)
        );
    }

    invokeStartReplicationTaskAssessmentRun(partialParams: ToOptional<{
      [K in keyof StartReplicationTaskAssessmentRunMessage]: (StartReplicationTaskAssessmentRunMessage)[K]
    }>): Request<StartReplicationTaskAssessmentRunResponse, AWSError> {
        this.boot();
        return this.client.startReplicationTaskAssessmentRun(
          this.ops["StartReplicationTaskAssessmentRun"].apply(partialParams)
        );
    }

    invokeStopReplicationTask(partialParams: ToOptional<{
      [K in keyof StopReplicationTaskMessage]: (StopReplicationTaskMessage)[K]
    }>): Request<StopReplicationTaskResponse, AWSError> {
        this.boot();
        return this.client.stopReplicationTask(
          this.ops["StopReplicationTask"].apply(partialParams)
        );
    }

    invokeTestConnection(partialParams: ToOptional<{
      [K in keyof TestConnectionMessage]: (TestConnectionMessage)[K]
    }>): Request<TestConnectionResponse, AWSError> {
        this.boot();
        return this.client.testConnection(
          this.ops["TestConnection"].apply(partialParams)
        );
    }
}