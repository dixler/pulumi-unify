
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AddTagsToResourceRequest,
    AssociateOpsItemRelatedItemRequest,
    CancelCommandRequest,
    CancelMaintenanceWindowExecutionRequest,
    CreateActivationRequest,
    CreateAssociationRequest,
    CreateAssociationBatchRequest,
    CreateDocumentRequest,
    CreateMaintenanceWindowRequest,
    CreateOpsItemRequest,
    CreateOpsMetadataRequest,
    CreatePatchBaselineRequest,
    CreateResourceDataSyncRequest,
    DeleteActivationRequest,
    DeleteAssociationRequest,
    DeleteDocumentRequest,
    DeleteInventoryRequest,
    DeleteMaintenanceWindowRequest,
    DeleteOpsMetadataRequest,
    DeleteParameterRequest,
    DeleteParametersRequest,
    DeletePatchBaselineRequest,
    DeleteResourceDataSyncRequest,
    DeregisterManagedInstanceRequest,
    DeregisterPatchBaselineForPatchGroupRequest,
    DeregisterTargetFromMaintenanceWindowRequest,
    DeregisterTaskFromMaintenanceWindowRequest,
    DescribeActivationsRequest,
    DescribeAssociationRequest,
    DescribeAssociationExecutionTargetsRequest,
    DescribeAssociationExecutionsRequest,
    DescribeAutomationExecutionsRequest,
    DescribeAutomationStepExecutionsRequest,
    DescribeAvailablePatchesRequest,
    DescribeDocumentRequest,
    DescribeDocumentPermissionRequest,
    DescribeEffectiveInstanceAssociationsRequest,
    DescribeEffectivePatchesForPatchBaselineRequest,
    DescribeInstanceAssociationsStatusRequest,
    DescribeInstanceInformationRequest,
    DescribeInstancePatchStatesRequest,
    DescribeInstancePatchStatesForPatchGroupRequest,
    DescribeInstancePatchesRequest,
    DescribeInventoryDeletionsRequest,
    DescribeMaintenanceWindowExecutionTaskInvocationsRequest,
    DescribeMaintenanceWindowExecutionTasksRequest,
    DescribeMaintenanceWindowExecutionsRequest,
    DescribeMaintenanceWindowScheduleRequest,
    DescribeMaintenanceWindowTargetsRequest,
    DescribeMaintenanceWindowTasksRequest,
    DescribeMaintenanceWindowsRequest,
    DescribeMaintenanceWindowsForTargetRequest,
    DescribeOpsItemsRequest,
    DescribeParametersRequest,
    DescribePatchBaselinesRequest,
    DescribePatchGroupStateRequest,
    DescribePatchGroupsRequest,
    DescribePatchPropertiesRequest,
    DescribeSessionsRequest,
    DisassociateOpsItemRelatedItemRequest,
    GetAutomationExecutionRequest,
    GetCalendarStateRequest,
    GetCommandInvocationRequest,
    GetConnectionStatusRequest,
    GetDefaultPatchBaselineRequest,
    GetDeployablePatchSnapshotForInstanceRequest,
    GetDocumentRequest,
    GetInventoryRequest,
    GetInventorySchemaRequest,
    GetMaintenanceWindowRequest,
    GetMaintenanceWindowExecutionRequest,
    GetMaintenanceWindowExecutionTaskRequest,
    GetMaintenanceWindowExecutionTaskInvocationRequest,
    GetMaintenanceWindowTaskRequest,
    GetOpsItemRequest,
    GetOpsMetadataRequest,
    GetOpsSummaryRequest,
    GetParameterRequest,
    GetParameterHistoryRequest,
    GetParametersRequest,
    GetParametersByPathRequest,
    GetPatchBaselineRequest,
    GetPatchBaselineForPatchGroupRequest,
    GetServiceSettingRequest,
    LabelParameterVersionRequest,
    ListAssociationVersionsRequest,
    ListAssociationsRequest,
    ListCommandInvocationsRequest,
    ListCommandsRequest,
    ListComplianceItemsRequest,
    ListComplianceSummariesRequest,
    ListDocumentMetadataHistoryRequest,
    ListDocumentVersionsRequest,
    ListDocumentsRequest,
    ListInventoryEntriesRequest,
    ListOpsItemEventsRequest,
    ListOpsItemRelatedItemsRequest,
    ListOpsMetadataRequest,
    ListResourceComplianceSummariesRequest,
    ListResourceDataSyncRequest,
    ListTagsForResourceRequest,
    ModifyDocumentPermissionRequest,
    PutComplianceItemsRequest,
    PutInventoryRequest,
    PutParameterRequest,
    RegisterDefaultPatchBaselineRequest,
    RegisterPatchBaselineForPatchGroupRequest,
    RegisterTargetWithMaintenanceWindowRequest,
    RegisterTaskWithMaintenanceWindowRequest,
    RemoveTagsFromResourceRequest,
    ResetServiceSettingRequest,
    ResumeSessionRequest,
    SendAutomationSignalRequest,
    SendCommandRequest,
    StartAssociationsOnceRequest,
    StartAutomationExecutionRequest,
    StartChangeRequestExecutionRequest,
    StartSessionRequest,
    StopAutomationExecutionRequest,
    TerminateSessionRequest,
    UnlabelParameterVersionRequest,
    UpdateAssociationRequest,
    UpdateAssociationStatusRequest,
    UpdateDocumentRequest,
    UpdateDocumentDefaultVersionRequest,
    UpdateDocumentMetadataRequest,
    UpdateMaintenanceWindowRequest,
    UpdateMaintenanceWindowTargetRequest,
    UpdateMaintenanceWindowTaskRequest,
    UpdateManagedInstanceRoleRequest,
    UpdateOpsItemRequest,
    UpdateOpsMetadataRequest,
    UpdatePatchBaselineRequest,
    UpdateResourceDataSyncRequest,
    UpdateServiceSettingRequest,
    AddTagsToResourceResult,
    AssociateOpsItemRelatedItemResponse,
    CancelCommandResult,
    CancelMaintenanceWindowExecutionResult,
    CreateActivationResult,
    CreateAssociationResult,
    CreateAssociationBatchResult,
    CreateDocumentResult,
    CreateMaintenanceWindowResult,
    CreateOpsItemResponse,
    CreateOpsMetadataResult,
    CreatePatchBaselineResult,
    CreateResourceDataSyncResult,
    DeleteActivationResult,
    DeleteAssociationResult,
    DeleteDocumentResult,
    DeleteInventoryResult,
    DeleteMaintenanceWindowResult,
    DeleteOpsMetadataResult,
    DeleteParameterResult,
    DeleteParametersResult,
    DeletePatchBaselineResult,
    DeleteResourceDataSyncResult,
    DeregisterManagedInstanceResult,
    DeregisterPatchBaselineForPatchGroupResult,
    DeregisterTargetFromMaintenanceWindowResult,
    DeregisterTaskFromMaintenanceWindowResult,
    DescribeActivationsResult,
    DescribeAssociationResult,
    DescribeAssociationExecutionTargetsResult,
    DescribeAssociationExecutionsResult,
    DescribeAutomationExecutionsResult,
    DescribeAutomationStepExecutionsResult,
    DescribeAvailablePatchesResult,
    DescribeDocumentResult,
    DescribeDocumentPermissionResponse,
    DescribeEffectiveInstanceAssociationsResult,
    DescribeEffectivePatchesForPatchBaselineResult,
    DescribeInstanceAssociationsStatusResult,
    DescribeInstanceInformationResult,
    DescribeInstancePatchStatesResult,
    DescribeInstancePatchStatesForPatchGroupResult,
    DescribeInstancePatchesResult,
    DescribeInventoryDeletionsResult,
    DescribeMaintenanceWindowExecutionTaskInvocationsResult,
    DescribeMaintenanceWindowExecutionTasksResult,
    DescribeMaintenanceWindowExecutionsResult,
    DescribeMaintenanceWindowScheduleResult,
    DescribeMaintenanceWindowTargetsResult,
    DescribeMaintenanceWindowTasksResult,
    DescribeMaintenanceWindowsResult,
    DescribeMaintenanceWindowsForTargetResult,
    DescribeOpsItemsResponse,
    DescribeParametersResult,
    DescribePatchBaselinesResult,
    DescribePatchGroupStateResult,
    DescribePatchGroupsResult,
    DescribePatchPropertiesResult,
    DescribeSessionsResponse,
    DisassociateOpsItemRelatedItemResponse,
    GetAutomationExecutionResult,
    GetCalendarStateResponse,
    GetCommandInvocationResult,
    GetConnectionStatusResponse,
    GetDefaultPatchBaselineResult,
    GetDeployablePatchSnapshotForInstanceResult,
    GetDocumentResult,
    GetInventoryResult,
    GetInventorySchemaResult,
    GetMaintenanceWindowResult,
    GetMaintenanceWindowExecutionResult,
    GetMaintenanceWindowExecutionTaskResult,
    GetMaintenanceWindowExecutionTaskInvocationResult,
    GetMaintenanceWindowTaskResult,
    GetOpsItemResponse,
    GetOpsMetadataResult,
    GetOpsSummaryResult,
    GetParameterResult,
    GetParameterHistoryResult,
    GetParametersResult,
    GetParametersByPathResult,
    GetPatchBaselineResult,
    GetPatchBaselineForPatchGroupResult,
    GetServiceSettingResult,
    LabelParameterVersionResult,
    ListAssociationVersionsResult,
    ListAssociationsResult,
    ListCommandInvocationsResult,
    ListCommandsResult,
    ListComplianceItemsResult,
    ListComplianceSummariesResult,
    ListDocumentMetadataHistoryResponse,
    ListDocumentVersionsResult,
    ListDocumentsResult,
    ListInventoryEntriesResult,
    ListOpsItemEventsResponse,
    ListOpsItemRelatedItemsResponse,
    ListOpsMetadataResult,
    ListResourceComplianceSummariesResult,
    ListResourceDataSyncResult,
    ListTagsForResourceResult,
    ModifyDocumentPermissionResponse,
    PutComplianceItemsResult,
    PutInventoryResult,
    PutParameterResult,
    RegisterDefaultPatchBaselineResult,
    RegisterPatchBaselineForPatchGroupResult,
    RegisterTargetWithMaintenanceWindowResult,
    RegisterTaskWithMaintenanceWindowResult,
    RemoveTagsFromResourceResult,
    ResetServiceSettingResult,
    ResumeSessionResponse,
    SendAutomationSignalResult,
    SendCommandResult,
    StartAssociationsOnceResult,
    StartAutomationExecutionResult,
    StartChangeRequestExecutionResult,
    StartSessionResponse,
    StopAutomationExecutionResult,
    TerminateSessionResponse,
    UnlabelParameterVersionResult,
    UpdateAssociationResult,
    UpdateAssociationStatusResult,
    UpdateDocumentResult,
    UpdateDocumentDefaultVersionResult,
    UpdateDocumentMetadataResponse,
    UpdateMaintenanceWindowResult,
    UpdateMaintenanceWindowTargetResult,
    UpdateMaintenanceWindowTaskResult,
    UpdateManagedInstanceRoleResult,
    UpdateOpsItemResponse,
    UpdateOpsMetadataResult,
    UpdatePatchBaselineResult,
    UpdateResourceDataSyncResult,
    UpdateServiceSettingResult
} from "aws-sdk/clients/ssm";
const schema = require("../apis/ssm-2014-11-06.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ssm.MaintenanceWindowTarget {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.ssm.MaintenanceWindowTarget>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.SSM()
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
      [K in keyof AddTagsToResourceRequest & keyof Omit<AddTagsToResourceRequest, "ResourceType">]: (AddTagsToResourceRequest)[K]
    }>): Request<AddTagsToResourceResult, AWSError> {
        this.boot();
        return this.client.addTagsToResource(
          this.ops["AddTagsToResource"].apply(partialParams)
        );
    }

    invokeAssociateOpsItemRelatedItem(partialParams: ToOptional<{
      [K in keyof AssociateOpsItemRelatedItemRequest & keyof Omit<AssociateOpsItemRelatedItemRequest, "ResourceType">]: (AssociateOpsItemRelatedItemRequest)[K]
    }>): Request<AssociateOpsItemRelatedItemResponse, AWSError> {
        this.boot();
        return this.client.associateOpsItemRelatedItem(
          this.ops["AssociateOpsItemRelatedItem"].apply(partialParams)
        );
    }

    invokeCancelCommand(partialParams: ToOptional<{
      [K in keyof CancelCommandRequest]: (CancelCommandRequest)[K]
    }>): Request<CancelCommandResult, AWSError> {
        this.boot();
        return this.client.cancelCommand(
          this.ops["CancelCommand"].apply(partialParams)
        );
    }

    invokeCancelMaintenanceWindowExecution(partialParams: ToOptional<{
      [K in keyof CancelMaintenanceWindowExecutionRequest]: (CancelMaintenanceWindowExecutionRequest)[K]
    }>): Request<CancelMaintenanceWindowExecutionResult, AWSError> {
        this.boot();
        return this.client.cancelMaintenanceWindowExecution(
          this.ops["CancelMaintenanceWindowExecution"].apply(partialParams)
        );
    }

    invokeCreateActivation(partialParams: ToOptional<{
      [K in keyof CreateActivationRequest]: (CreateActivationRequest)[K]
    }>): Request<CreateActivationResult, AWSError> {
        this.boot();
        return this.client.createActivation(
          this.ops["CreateActivation"].apply(partialParams)
        );
    }

    invokeCreateAssociation(partialParams: ToOptional<{
      [K in keyof CreateAssociationRequest & keyof Omit<CreateAssociationRequest, "Name">]: (CreateAssociationRequest)[K]
    }>): Request<CreateAssociationResult, AWSError> {
        this.boot();
        return this.client.createAssociation(
          this.ops["CreateAssociation"].apply(partialParams)
        );
    }

    invokeCreateAssociationBatch(partialParams: ToOptional<{
      [K in keyof CreateAssociationBatchRequest]: (CreateAssociationBatchRequest)[K]
    }>): Request<CreateAssociationBatchResult, AWSError> {
        this.boot();
        return this.client.createAssociationBatch(
          this.ops["CreateAssociationBatch"].apply(partialParams)
        );
    }

    invokeCreateDocument(partialParams: ToOptional<{
      [K in keyof CreateDocumentRequest & keyof Omit<CreateDocumentRequest, "Name">]: (CreateDocumentRequest)[K]
    }>): Request<CreateDocumentResult, AWSError> {
        this.boot();
        return this.client.createDocument(
          this.ops["CreateDocument"].apply(partialParams)
        );
    }

    invokeCreateMaintenanceWindow(partialParams: ToOptional<{
      [K in keyof CreateMaintenanceWindowRequest & keyof Omit<CreateMaintenanceWindowRequest, "Name">]: (CreateMaintenanceWindowRequest)[K]
    }>): Request<CreateMaintenanceWindowResult, AWSError> {
        this.boot();
        return this.client.createMaintenanceWindow(
          this.ops["CreateMaintenanceWindow"].apply(partialParams)
        );
    }

    invokeCreateOpsItem(partialParams: ToOptional<{
      [K in keyof CreateOpsItemRequest & keyof Omit<CreateOpsItemRequest, "Description">]: (CreateOpsItemRequest)[K]
    }>): Request<CreateOpsItemResponse, AWSError> {
        this.boot();
        return this.client.createOpsItem(
          this.ops["CreateOpsItem"].apply(partialParams)
        );
    }

    invokeCreateOpsMetadata(partialParams: ToOptional<{
      [K in keyof CreateOpsMetadataRequest]: (CreateOpsMetadataRequest)[K]
    }>): Request<CreateOpsMetadataResult, AWSError> {
        this.boot();
        return this.client.createOpsMetadata(
          this.ops["CreateOpsMetadata"].apply(partialParams)
        );
    }

    invokeCreatePatchBaseline(partialParams: ToOptional<{
      [K in keyof CreatePatchBaselineRequest & keyof Omit<CreatePatchBaselineRequest, "Name">]: (CreatePatchBaselineRequest)[K]
    }>): Request<CreatePatchBaselineResult, AWSError> {
        this.boot();
        return this.client.createPatchBaseline(
          this.ops["CreatePatchBaseline"].apply(partialParams)
        );
    }

    invokeCreateResourceDataSync(partialParams: ToOptional<{
      [K in keyof CreateResourceDataSyncRequest]: (CreateResourceDataSyncRequest)[K]
    }>): Request<CreateResourceDataSyncResult, AWSError> {
        this.boot();
        return this.client.createResourceDataSync(
          this.ops["CreateResourceDataSync"].apply(partialParams)
        );
    }

    invokeDeleteActivation(partialParams: ToOptional<{
      [K in keyof DeleteActivationRequest]: (DeleteActivationRequest)[K]
    }>): Request<DeleteActivationResult, AWSError> {
        this.boot();
        return this.client.deleteActivation(
          this.ops["DeleteActivation"].apply(partialParams)
        );
    }

    invokeDeleteAssociation(partialParams: ToOptional<{
      [K in keyof DeleteAssociationRequest]: (DeleteAssociationRequest)[K]
    }>): Request<DeleteAssociationResult, AWSError> {
        this.boot();
        return this.client.deleteAssociation(
          this.ops["DeleteAssociation"].apply(partialParams)
        );
    }

    invokeDeleteDocument(partialParams: ToOptional<{
      [K in keyof DeleteDocumentRequest & keyof Omit<DeleteDocumentRequest, "Name">]: (DeleteDocumentRequest)[K]
    }>): Request<DeleteDocumentResult, AWSError> {
        this.boot();
        return this.client.deleteDocument(
          this.ops["DeleteDocument"].apply(partialParams)
        );
    }

    invokeDeleteInventory(partialParams: ToOptional<{
      [K in keyof DeleteInventoryRequest]: (DeleteInventoryRequest)[K]
    }>): Request<DeleteInventoryResult, AWSError> {
        this.boot();
        return this.client.deleteInventory(
          this.ops["DeleteInventory"].apply(partialParams)
        );
    }

    invokeDeleteMaintenanceWindow(partialParams: ToOptional<{
      [K in keyof DeleteMaintenanceWindowRequest & keyof Omit<DeleteMaintenanceWindowRequest, "WindowId">]: (DeleteMaintenanceWindowRequest)[K]
    }>): Request<DeleteMaintenanceWindowResult, AWSError> {
        this.boot();
        return this.client.deleteMaintenanceWindow(
          this.ops["DeleteMaintenanceWindow"].apply(partialParams)
        );
    }

    invokeDeleteOpsMetadata(partialParams: ToOptional<{
      [K in keyof DeleteOpsMetadataRequest]: (DeleteOpsMetadataRequest)[K]
    }>): Request<DeleteOpsMetadataResult, AWSError> {
        this.boot();
        return this.client.deleteOpsMetadata(
          this.ops["DeleteOpsMetadata"].apply(partialParams)
        );
    }

    invokeDeleteParameter(partialParams: ToOptional<{
      [K in keyof DeleteParameterRequest & keyof Omit<DeleteParameterRequest, "Name">]: (DeleteParameterRequest)[K]
    }>): Request<DeleteParameterResult, AWSError> {
        this.boot();
        return this.client.deleteParameter(
          this.ops["DeleteParameter"].apply(partialParams)
        );
    }

    invokeDeleteParameters(partialParams: ToOptional<{
      [K in keyof DeleteParametersRequest]: (DeleteParametersRequest)[K]
    }>): Request<DeleteParametersResult, AWSError> {
        this.boot();
        return this.client.deleteParameters(
          this.ops["DeleteParameters"].apply(partialParams)
        );
    }

    invokeDeletePatchBaseline(partialParams: ToOptional<{
      [K in keyof DeletePatchBaselineRequest]: (DeletePatchBaselineRequest)[K]
    }>): Request<DeletePatchBaselineResult, AWSError> {
        this.boot();
        return this.client.deletePatchBaseline(
          this.ops["DeletePatchBaseline"].apply(partialParams)
        );
    }

    invokeDeleteResourceDataSync(partialParams: ToOptional<{
      [K in keyof DeleteResourceDataSyncRequest]: (DeleteResourceDataSyncRequest)[K]
    }>): Request<DeleteResourceDataSyncResult, AWSError> {
        this.boot();
        return this.client.deleteResourceDataSync(
          this.ops["DeleteResourceDataSync"].apply(partialParams)
        );
    }

    invokeDeregisterManagedInstance(partialParams: ToOptional<{
      [K in keyof DeregisterManagedInstanceRequest]: (DeregisterManagedInstanceRequest)[K]
    }>): Request<DeregisterManagedInstanceResult, AWSError> {
        this.boot();
        return this.client.deregisterManagedInstance(
          this.ops["DeregisterManagedInstance"].apply(partialParams)
        );
    }

    invokeDeregisterPatchBaselineForPatchGroup(partialParams: ToOptional<{
      [K in keyof DeregisterPatchBaselineForPatchGroupRequest]: (DeregisterPatchBaselineForPatchGroupRequest)[K]
    }>): Request<DeregisterPatchBaselineForPatchGroupResult, AWSError> {
        this.boot();
        return this.client.deregisterPatchBaselineForPatchGroup(
          this.ops["DeregisterPatchBaselineForPatchGroup"].apply(partialParams)
        );
    }

    invokeDeregisterTargetFromMaintenanceWindow(partialParams: ToOptional<{
      [K in keyof DeregisterTargetFromMaintenanceWindowRequest & keyof Omit<DeregisterTargetFromMaintenanceWindowRequest, "WindowId">]: (DeregisterTargetFromMaintenanceWindowRequest)[K]
    }>): Request<DeregisterTargetFromMaintenanceWindowResult, AWSError> {
        this.boot();
        return this.client.deregisterTargetFromMaintenanceWindow(
          this.ops["DeregisterTargetFromMaintenanceWindow"].apply(partialParams)
        );
    }

    invokeDeregisterTaskFromMaintenanceWindow(partialParams: ToOptional<{
      [K in keyof DeregisterTaskFromMaintenanceWindowRequest & keyof Omit<DeregisterTaskFromMaintenanceWindowRequest, "WindowId">]: (DeregisterTaskFromMaintenanceWindowRequest)[K]
    }>): Request<DeregisterTaskFromMaintenanceWindowResult, AWSError> {
        this.boot();
        return this.client.deregisterTaskFromMaintenanceWindow(
          this.ops["DeregisterTaskFromMaintenanceWindow"].apply(partialParams)
        );
    }

    invokeDescribeActivations(partialParams: ToOptional<{
      [K in keyof DescribeActivationsRequest]: (DescribeActivationsRequest)[K]
    }>): Request<DescribeActivationsResult, AWSError> {
        this.boot();
        return this.client.describeActivations(
          this.ops["DescribeActivations"].apply(partialParams)
        );
    }

    invokeDescribeAssociation(partialParams: ToOptional<{
      [K in keyof DescribeAssociationRequest]: (DescribeAssociationRequest)[K]
    }>): Request<DescribeAssociationResult, AWSError> {
        this.boot();
        return this.client.describeAssociation(
          this.ops["DescribeAssociation"].apply(partialParams)
        );
    }

    invokeDescribeAssociationExecutionTargets(partialParams: ToOptional<{
      [K in keyof DescribeAssociationExecutionTargetsRequest]: (DescribeAssociationExecutionTargetsRequest)[K]
    }>): Request<DescribeAssociationExecutionTargetsResult, AWSError> {
        this.boot();
        return this.client.describeAssociationExecutionTargets(
          this.ops["DescribeAssociationExecutionTargets"].apply(partialParams)
        );
    }

    invokeDescribeAssociationExecutions(partialParams: ToOptional<{
      [K in keyof DescribeAssociationExecutionsRequest]: (DescribeAssociationExecutionsRequest)[K]
    }>): Request<DescribeAssociationExecutionsResult, AWSError> {
        this.boot();
        return this.client.describeAssociationExecutions(
          this.ops["DescribeAssociationExecutions"].apply(partialParams)
        );
    }

    invokeDescribeAutomationExecutions(partialParams: ToOptional<{
      [K in keyof DescribeAutomationExecutionsRequest]: (DescribeAutomationExecutionsRequest)[K]
    }>): Request<DescribeAutomationExecutionsResult, AWSError> {
        this.boot();
        return this.client.describeAutomationExecutions(
          this.ops["DescribeAutomationExecutions"].apply(partialParams)
        );
    }

    invokeDescribeAutomationStepExecutions(partialParams: ToOptional<{
      [K in keyof DescribeAutomationStepExecutionsRequest]: (DescribeAutomationStepExecutionsRequest)[K]
    }>): Request<DescribeAutomationStepExecutionsResult, AWSError> {
        this.boot();
        return this.client.describeAutomationStepExecutions(
          this.ops["DescribeAutomationStepExecutions"].apply(partialParams)
        );
    }

    invokeDescribeAvailablePatches(partialParams: ToOptional<{
      [K in keyof DescribeAvailablePatchesRequest]: (DescribeAvailablePatchesRequest)[K]
    }>): Request<DescribeAvailablePatchesResult, AWSError> {
        this.boot();
        return this.client.describeAvailablePatches(
          this.ops["DescribeAvailablePatches"].apply(partialParams)
        );
    }

    invokeDescribeDocument(partialParams: ToOptional<{
      [K in keyof DescribeDocumentRequest & keyof Omit<DescribeDocumentRequest, "Name">]: (DescribeDocumentRequest)[K]
    }>): Request<DescribeDocumentResult, AWSError> {
        this.boot();
        return this.client.describeDocument(
          this.ops["DescribeDocument"].apply(partialParams)
        );
    }

    invokeDescribeDocumentPermission(partialParams: ToOptional<{
      [K in keyof DescribeDocumentPermissionRequest & keyof Omit<DescribeDocumentPermissionRequest, "Name">]: (DescribeDocumentPermissionRequest)[K]
    }>): Request<DescribeDocumentPermissionResponse, AWSError> {
        this.boot();
        return this.client.describeDocumentPermission(
          this.ops["DescribeDocumentPermission"].apply(partialParams)
        );
    }

    invokeDescribeEffectiveInstanceAssociations(partialParams: ToOptional<{
      [K in keyof DescribeEffectiveInstanceAssociationsRequest]: (DescribeEffectiveInstanceAssociationsRequest)[K]
    }>): Request<DescribeEffectiveInstanceAssociationsResult, AWSError> {
        this.boot();
        return this.client.describeEffectiveInstanceAssociations(
          this.ops["DescribeEffectiveInstanceAssociations"].apply(partialParams)
        );
    }

    invokeDescribeEffectivePatchesForPatchBaseline(partialParams: ToOptional<{
      [K in keyof DescribeEffectivePatchesForPatchBaselineRequest]: (DescribeEffectivePatchesForPatchBaselineRequest)[K]
    }>): Request<DescribeEffectivePatchesForPatchBaselineResult, AWSError> {
        this.boot();
        return this.client.describeEffectivePatchesForPatchBaseline(
          this.ops["DescribeEffectivePatchesForPatchBaseline"].apply(partialParams)
        );
    }

    invokeDescribeInstanceAssociationsStatus(partialParams: ToOptional<{
      [K in keyof DescribeInstanceAssociationsStatusRequest]: (DescribeInstanceAssociationsStatusRequest)[K]
    }>): Request<DescribeInstanceAssociationsStatusResult, AWSError> {
        this.boot();
        return this.client.describeInstanceAssociationsStatus(
          this.ops["DescribeInstanceAssociationsStatus"].apply(partialParams)
        );
    }

    invokeDescribeInstanceInformation(partialParams: ToOptional<{
      [K in keyof DescribeInstanceInformationRequest]: (DescribeInstanceInformationRequest)[K]
    }>): Request<DescribeInstanceInformationResult, AWSError> {
        this.boot();
        return this.client.describeInstanceInformation(
          this.ops["DescribeInstanceInformation"].apply(partialParams)
        );
    }

    invokeDescribeInstancePatchStates(partialParams: ToOptional<{
      [K in keyof DescribeInstancePatchStatesRequest]: (DescribeInstancePatchStatesRequest)[K]
    }>): Request<DescribeInstancePatchStatesResult, AWSError> {
        this.boot();
        return this.client.describeInstancePatchStates(
          this.ops["DescribeInstancePatchStates"].apply(partialParams)
        );
    }

    invokeDescribeInstancePatchStatesForPatchGroup(partialParams: ToOptional<{
      [K in keyof DescribeInstancePatchStatesForPatchGroupRequest]: (DescribeInstancePatchStatesForPatchGroupRequest)[K]
    }>): Request<DescribeInstancePatchStatesForPatchGroupResult, AWSError> {
        this.boot();
        return this.client.describeInstancePatchStatesForPatchGroup(
          this.ops["DescribeInstancePatchStatesForPatchGroup"].apply(partialParams)
        );
    }

    invokeDescribeInstancePatches(partialParams: ToOptional<{
      [K in keyof DescribeInstancePatchesRequest]: (DescribeInstancePatchesRequest)[K]
    }>): Request<DescribeInstancePatchesResult, AWSError> {
        this.boot();
        return this.client.describeInstancePatches(
          this.ops["DescribeInstancePatches"].apply(partialParams)
        );
    }

    invokeDescribeInventoryDeletions(partialParams: ToOptional<{
      [K in keyof DescribeInventoryDeletionsRequest]: (DescribeInventoryDeletionsRequest)[K]
    }>): Request<DescribeInventoryDeletionsResult, AWSError> {
        this.boot();
        return this.client.describeInventoryDeletions(
          this.ops["DescribeInventoryDeletions"].apply(partialParams)
        );
    }

    invokeDescribeMaintenanceWindowExecutionTaskInvocations(partialParams: ToOptional<{
      [K in keyof DescribeMaintenanceWindowExecutionTaskInvocationsRequest]: (DescribeMaintenanceWindowExecutionTaskInvocationsRequest)[K]
    }>): Request<DescribeMaintenanceWindowExecutionTaskInvocationsResult, AWSError> {
        this.boot();
        return this.client.describeMaintenanceWindowExecutionTaskInvocations(
          this.ops["DescribeMaintenanceWindowExecutionTaskInvocations"].apply(partialParams)
        );
    }

    invokeDescribeMaintenanceWindowExecutionTasks(partialParams: ToOptional<{
      [K in keyof DescribeMaintenanceWindowExecutionTasksRequest]: (DescribeMaintenanceWindowExecutionTasksRequest)[K]
    }>): Request<DescribeMaintenanceWindowExecutionTasksResult, AWSError> {
        this.boot();
        return this.client.describeMaintenanceWindowExecutionTasks(
          this.ops["DescribeMaintenanceWindowExecutionTasks"].apply(partialParams)
        );
    }

    invokeDescribeMaintenanceWindowExecutions(partialParams: ToOptional<{
      [K in keyof DescribeMaintenanceWindowExecutionsRequest & keyof Omit<DescribeMaintenanceWindowExecutionsRequest, "WindowId">]: (DescribeMaintenanceWindowExecutionsRequest)[K]
    }>): Request<DescribeMaintenanceWindowExecutionsResult, AWSError> {
        this.boot();
        return this.client.describeMaintenanceWindowExecutions(
          this.ops["DescribeMaintenanceWindowExecutions"].apply(partialParams)
        );
    }

    invokeDescribeMaintenanceWindowSchedule(partialParams: ToOptional<{
      [K in keyof DescribeMaintenanceWindowScheduleRequest]: (DescribeMaintenanceWindowScheduleRequest)[K]
    }>): Request<DescribeMaintenanceWindowScheduleResult, AWSError> {
        this.boot();
        return this.client.describeMaintenanceWindowSchedule(
          this.ops["DescribeMaintenanceWindowSchedule"].apply(partialParams)
        );
    }

    invokeDescribeMaintenanceWindowTargets(partialParams: ToOptional<{
      [K in keyof DescribeMaintenanceWindowTargetsRequest & keyof Omit<DescribeMaintenanceWindowTargetsRequest, "WindowId">]: (DescribeMaintenanceWindowTargetsRequest)[K]
    }>): Request<DescribeMaintenanceWindowTargetsResult, AWSError> {
        this.boot();
        return this.client.describeMaintenanceWindowTargets(
          this.ops["DescribeMaintenanceWindowTargets"].apply(partialParams)
        );
    }

    invokeDescribeMaintenanceWindowTasks(partialParams: ToOptional<{
      [K in keyof DescribeMaintenanceWindowTasksRequest & keyof Omit<DescribeMaintenanceWindowTasksRequest, "WindowId">]: (DescribeMaintenanceWindowTasksRequest)[K]
    }>): Request<DescribeMaintenanceWindowTasksResult, AWSError> {
        this.boot();
        return this.client.describeMaintenanceWindowTasks(
          this.ops["DescribeMaintenanceWindowTasks"].apply(partialParams)
        );
    }

    invokeDescribeMaintenanceWindows(partialParams: ToOptional<{
      [K in keyof DescribeMaintenanceWindowsRequest]: (DescribeMaintenanceWindowsRequest)[K]
    }>): Request<DescribeMaintenanceWindowsResult, AWSError> {
        this.boot();
        return this.client.describeMaintenanceWindows(
          this.ops["DescribeMaintenanceWindows"].apply(partialParams)
        );
    }

    invokeDescribeMaintenanceWindowsForTarget(partialParams: ToOptional<{
      [K in keyof DescribeMaintenanceWindowsForTargetRequest & keyof Omit<DescribeMaintenanceWindowsForTargetRequest, "ResourceType">]: (DescribeMaintenanceWindowsForTargetRequest)[K]
    }>): Request<DescribeMaintenanceWindowsForTargetResult, AWSError> {
        this.boot();
        return this.client.describeMaintenanceWindowsForTarget(
          this.ops["DescribeMaintenanceWindowsForTarget"].apply(partialParams)
        );
    }

    invokeDescribeOpsItems(partialParams: ToOptional<{
      [K in keyof DescribeOpsItemsRequest]: (DescribeOpsItemsRequest)[K]
    }>): Request<DescribeOpsItemsResponse, AWSError> {
        this.boot();
        return this.client.describeOpsItems(
          this.ops["DescribeOpsItems"].apply(partialParams)
        );
    }

    invokeDescribeParameters(partialParams: ToOptional<{
      [K in keyof DescribeParametersRequest]: (DescribeParametersRequest)[K]
    }>): Request<DescribeParametersResult, AWSError> {
        this.boot();
        return this.client.describeParameters(
          this.ops["DescribeParameters"].apply(partialParams)
        );
    }

    invokeDescribePatchBaselines(partialParams: ToOptional<{
      [K in keyof DescribePatchBaselinesRequest]: (DescribePatchBaselinesRequest)[K]
    }>): Request<DescribePatchBaselinesResult, AWSError> {
        this.boot();
        return this.client.describePatchBaselines(
          this.ops["DescribePatchBaselines"].apply(partialParams)
        );
    }

    invokeDescribePatchGroupState(partialParams: ToOptional<{
      [K in keyof DescribePatchGroupStateRequest]: (DescribePatchGroupStateRequest)[K]
    }>): Request<DescribePatchGroupStateResult, AWSError> {
        this.boot();
        return this.client.describePatchGroupState(
          this.ops["DescribePatchGroupState"].apply(partialParams)
        );
    }

    invokeDescribePatchGroups(partialParams: ToOptional<{
      [K in keyof DescribePatchGroupsRequest]: (DescribePatchGroupsRequest)[K]
    }>): Request<DescribePatchGroupsResult, AWSError> {
        this.boot();
        return this.client.describePatchGroups(
          this.ops["DescribePatchGroups"].apply(partialParams)
        );
    }

    invokeDescribePatchProperties(partialParams: ToOptional<{
      [K in keyof DescribePatchPropertiesRequest]: (DescribePatchPropertiesRequest)[K]
    }>): Request<DescribePatchPropertiesResult, AWSError> {
        this.boot();
        return this.client.describePatchProperties(
          this.ops["DescribePatchProperties"].apply(partialParams)
        );
    }

    invokeDescribeSessions(partialParams: ToOptional<{
      [K in keyof DescribeSessionsRequest]: (DescribeSessionsRequest)[K]
    }>): Request<DescribeSessionsResponse, AWSError> {
        this.boot();
        return this.client.describeSessions(
          this.ops["DescribeSessions"].apply(partialParams)
        );
    }

    invokeDisassociateOpsItemRelatedItem(partialParams: ToOptional<{
      [K in keyof DisassociateOpsItemRelatedItemRequest]: (DisassociateOpsItemRelatedItemRequest)[K]
    }>): Request<DisassociateOpsItemRelatedItemResponse, AWSError> {
        this.boot();
        return this.client.disassociateOpsItemRelatedItem(
          this.ops["DisassociateOpsItemRelatedItem"].apply(partialParams)
        );
    }

    invokeGetAutomationExecution(partialParams: ToOptional<{
      [K in keyof GetAutomationExecutionRequest]: (GetAutomationExecutionRequest)[K]
    }>): Request<GetAutomationExecutionResult, AWSError> {
        this.boot();
        return this.client.getAutomationExecution(
          this.ops["GetAutomationExecution"].apply(partialParams)
        );
    }

    invokeGetCalendarState(partialParams: ToOptional<{
      [K in keyof GetCalendarStateRequest]: (GetCalendarStateRequest)[K]
    }>): Request<GetCalendarStateResponse, AWSError> {
        this.boot();
        return this.client.getCalendarState(
          this.ops["GetCalendarState"].apply(partialParams)
        );
    }

    invokeGetCommandInvocation(partialParams: ToOptional<{
      [K in keyof GetCommandInvocationRequest]: (GetCommandInvocationRequest)[K]
    }>): Request<GetCommandInvocationResult, AWSError> {
        this.boot();
        return this.client.getCommandInvocation(
          this.ops["GetCommandInvocation"].apply(partialParams)
        );
    }

    invokeGetConnectionStatus(partialParams: ToOptional<{
      [K in keyof GetConnectionStatusRequest]: (GetConnectionStatusRequest)[K]
    }>): Request<GetConnectionStatusResponse, AWSError> {
        this.boot();
        return this.client.getConnectionStatus(
          this.ops["GetConnectionStatus"].apply(partialParams)
        );
    }

    invokeGetDefaultPatchBaseline(partialParams: ToOptional<{
      [K in keyof GetDefaultPatchBaselineRequest]: (GetDefaultPatchBaselineRequest)[K]
    }>): Request<GetDefaultPatchBaselineResult, AWSError> {
        this.boot();
        return this.client.getDefaultPatchBaseline(
          this.ops["GetDefaultPatchBaseline"].apply(partialParams)
        );
    }

    invokeGetDeployablePatchSnapshotForInstance(partialParams: ToOptional<{
      [K in keyof GetDeployablePatchSnapshotForInstanceRequest]: (GetDeployablePatchSnapshotForInstanceRequest)[K]
    }>): Request<GetDeployablePatchSnapshotForInstanceResult, AWSError> {
        this.boot();
        return this.client.getDeployablePatchSnapshotForInstance(
          this.ops["GetDeployablePatchSnapshotForInstance"].apply(partialParams)
        );
    }

    invokeGetDocument(partialParams: ToOptional<{
      [K in keyof GetDocumentRequest & keyof Omit<GetDocumentRequest, "Name">]: (GetDocumentRequest)[K]
    }>): Request<GetDocumentResult, AWSError> {
        this.boot();
        return this.client.getDocument(
          this.ops["GetDocument"].apply(partialParams)
        );
    }

    invokeGetInventory(partialParams: ToOptional<{
      [K in keyof GetInventoryRequest]: (GetInventoryRequest)[K]
    }>): Request<GetInventoryResult, AWSError> {
        this.boot();
        return this.client.getInventory(
          this.ops["GetInventory"].apply(partialParams)
        );
    }

    invokeGetInventorySchema(partialParams: ToOptional<{
      [K in keyof GetInventorySchemaRequest]: (GetInventorySchemaRequest)[K]
    }>): Request<GetInventorySchemaResult, AWSError> {
        this.boot();
        return this.client.getInventorySchema(
          this.ops["GetInventorySchema"].apply(partialParams)
        );
    }

    invokeGetMaintenanceWindow(partialParams: ToOptional<{
      [K in keyof GetMaintenanceWindowRequest & keyof Omit<GetMaintenanceWindowRequest, "WindowId">]: (GetMaintenanceWindowRequest)[K]
    }>): Request<GetMaintenanceWindowResult, AWSError> {
        this.boot();
        return this.client.getMaintenanceWindow(
          this.ops["GetMaintenanceWindow"].apply(partialParams)
        );
    }

    invokeGetMaintenanceWindowExecution(partialParams: ToOptional<{
      [K in keyof GetMaintenanceWindowExecutionRequest]: (GetMaintenanceWindowExecutionRequest)[K]
    }>): Request<GetMaintenanceWindowExecutionResult, AWSError> {
        this.boot();
        return this.client.getMaintenanceWindowExecution(
          this.ops["GetMaintenanceWindowExecution"].apply(partialParams)
        );
    }

    invokeGetMaintenanceWindowExecutionTask(partialParams: ToOptional<{
      [K in keyof GetMaintenanceWindowExecutionTaskRequest]: (GetMaintenanceWindowExecutionTaskRequest)[K]
    }>): Request<GetMaintenanceWindowExecutionTaskResult, AWSError> {
        this.boot();
        return this.client.getMaintenanceWindowExecutionTask(
          this.ops["GetMaintenanceWindowExecutionTask"].apply(partialParams)
        );
    }

    invokeGetMaintenanceWindowExecutionTaskInvocation(partialParams: ToOptional<{
      [K in keyof GetMaintenanceWindowExecutionTaskInvocationRequest]: (GetMaintenanceWindowExecutionTaskInvocationRequest)[K]
    }>): Request<GetMaintenanceWindowExecutionTaskInvocationResult, AWSError> {
        this.boot();
        return this.client.getMaintenanceWindowExecutionTaskInvocation(
          this.ops["GetMaintenanceWindowExecutionTaskInvocation"].apply(partialParams)
        );
    }

    invokeGetMaintenanceWindowTask(partialParams: ToOptional<{
      [K in keyof GetMaintenanceWindowTaskRequest & keyof Omit<GetMaintenanceWindowTaskRequest, "WindowId">]: (GetMaintenanceWindowTaskRequest)[K]
    }>): Request<GetMaintenanceWindowTaskResult, AWSError> {
        this.boot();
        return this.client.getMaintenanceWindowTask(
          this.ops["GetMaintenanceWindowTask"].apply(partialParams)
        );
    }

    invokeGetOpsItem(partialParams: ToOptional<{
      [K in keyof GetOpsItemRequest]: (GetOpsItemRequest)[K]
    }>): Request<GetOpsItemResponse, AWSError> {
        this.boot();
        return this.client.getOpsItem(
          this.ops["GetOpsItem"].apply(partialParams)
        );
    }

    invokeGetOpsMetadata(partialParams: ToOptional<{
      [K in keyof GetOpsMetadataRequest]: (GetOpsMetadataRequest)[K]
    }>): Request<GetOpsMetadataResult, AWSError> {
        this.boot();
        return this.client.getOpsMetadata(
          this.ops["GetOpsMetadata"].apply(partialParams)
        );
    }

    invokeGetOpsSummary(partialParams: ToOptional<{
      [K in keyof GetOpsSummaryRequest]: (GetOpsSummaryRequest)[K]
    }>): Request<GetOpsSummaryResult, AWSError> {
        this.boot();
        return this.client.getOpsSummary(
          this.ops["GetOpsSummary"].apply(partialParams)
        );
    }

    invokeGetParameter(partialParams: ToOptional<{
      [K in keyof GetParameterRequest & keyof Omit<GetParameterRequest, "Name">]: (GetParameterRequest)[K]
    }>): Request<GetParameterResult, AWSError> {
        this.boot();
        return this.client.getParameter(
          this.ops["GetParameter"].apply(partialParams)
        );
    }

    invokeGetParameterHistory(partialParams: ToOptional<{
      [K in keyof GetParameterHistoryRequest & keyof Omit<GetParameterHistoryRequest, "Name">]: (GetParameterHistoryRequest)[K]
    }>): Request<GetParameterHistoryResult, AWSError> {
        this.boot();
        return this.client.getParameterHistory(
          this.ops["GetParameterHistory"].apply(partialParams)
        );
    }

    invokeGetParameters(partialParams: ToOptional<{
      [K in keyof GetParametersRequest]: (GetParametersRequest)[K]
    }>): Request<GetParametersResult, AWSError> {
        this.boot();
        return this.client.getParameters(
          this.ops["GetParameters"].apply(partialParams)
        );
    }

    invokeGetParametersByPath(partialParams: ToOptional<{
      [K in keyof GetParametersByPathRequest]: (GetParametersByPathRequest)[K]
    }>): Request<GetParametersByPathResult, AWSError> {
        this.boot();
        return this.client.getParametersByPath(
          this.ops["GetParametersByPath"].apply(partialParams)
        );
    }

    invokeGetPatchBaseline(partialParams: ToOptional<{
      [K in keyof GetPatchBaselineRequest]: (GetPatchBaselineRequest)[K]
    }>): Request<GetPatchBaselineResult, AWSError> {
        this.boot();
        return this.client.getPatchBaseline(
          this.ops["GetPatchBaseline"].apply(partialParams)
        );
    }

    invokeGetPatchBaselineForPatchGroup(partialParams: ToOptional<{
      [K in keyof GetPatchBaselineForPatchGroupRequest]: (GetPatchBaselineForPatchGroupRequest)[K]
    }>): Request<GetPatchBaselineForPatchGroupResult, AWSError> {
        this.boot();
        return this.client.getPatchBaselineForPatchGroup(
          this.ops["GetPatchBaselineForPatchGroup"].apply(partialParams)
        );
    }

    invokeGetServiceSetting(partialParams: ToOptional<{
      [K in keyof GetServiceSettingRequest]: (GetServiceSettingRequest)[K]
    }>): Request<GetServiceSettingResult, AWSError> {
        this.boot();
        return this.client.getServiceSetting(
          this.ops["GetServiceSetting"].apply(partialParams)
        );
    }

    invokeLabelParameterVersion(partialParams: ToOptional<{
      [K in keyof LabelParameterVersionRequest & keyof Omit<LabelParameterVersionRequest, "Name">]: (LabelParameterVersionRequest)[K]
    }>): Request<LabelParameterVersionResult, AWSError> {
        this.boot();
        return this.client.labelParameterVersion(
          this.ops["LabelParameterVersion"].apply(partialParams)
        );
    }

    invokeListAssociationVersions(partialParams: ToOptional<{
      [K in keyof ListAssociationVersionsRequest]: (ListAssociationVersionsRequest)[K]
    }>): Request<ListAssociationVersionsResult, AWSError> {
        this.boot();
        return this.client.listAssociationVersions(
          this.ops["ListAssociationVersions"].apply(partialParams)
        );
    }

    invokeListAssociations(partialParams: ToOptional<{
      [K in keyof ListAssociationsRequest]: (ListAssociationsRequest)[K]
    }>): Request<ListAssociationsResult, AWSError> {
        this.boot();
        return this.client.listAssociations(
          this.ops["ListAssociations"].apply(partialParams)
        );
    }

    invokeListCommandInvocations(partialParams: ToOptional<{
      [K in keyof ListCommandInvocationsRequest]: (ListCommandInvocationsRequest)[K]
    }>): Request<ListCommandInvocationsResult, AWSError> {
        this.boot();
        return this.client.listCommandInvocations(
          this.ops["ListCommandInvocations"].apply(partialParams)
        );
    }

    invokeListCommands(partialParams: ToOptional<{
      [K in keyof ListCommandsRequest]: (ListCommandsRequest)[K]
    }>): Request<ListCommandsResult, AWSError> {
        this.boot();
        return this.client.listCommands(
          this.ops["ListCommands"].apply(partialParams)
        );
    }

    invokeListComplianceItems(partialParams: ToOptional<{
      [K in keyof ListComplianceItemsRequest]: (ListComplianceItemsRequest)[K]
    }>): Request<ListComplianceItemsResult, AWSError> {
        this.boot();
        return this.client.listComplianceItems(
          this.ops["ListComplianceItems"].apply(partialParams)
        );
    }

    invokeListComplianceSummaries(partialParams: ToOptional<{
      [K in keyof ListComplianceSummariesRequest]: (ListComplianceSummariesRequest)[K]
    }>): Request<ListComplianceSummariesResult, AWSError> {
        this.boot();
        return this.client.listComplianceSummaries(
          this.ops["ListComplianceSummaries"].apply(partialParams)
        );
    }

    invokeListDocumentMetadataHistory(partialParams: ToOptional<{
      [K in keyof ListDocumentMetadataHistoryRequest & keyof Omit<ListDocumentMetadataHistoryRequest, "Name">]: (ListDocumentMetadataHistoryRequest)[K]
    }>): Request<ListDocumentMetadataHistoryResponse, AWSError> {
        this.boot();
        return this.client.listDocumentMetadataHistory(
          this.ops["ListDocumentMetadataHistory"].apply(partialParams)
        );
    }

    invokeListDocumentVersions(partialParams: ToOptional<{
      [K in keyof ListDocumentVersionsRequest & keyof Omit<ListDocumentVersionsRequest, "Name">]: (ListDocumentVersionsRequest)[K]
    }>): Request<ListDocumentVersionsResult, AWSError> {
        this.boot();
        return this.client.listDocumentVersions(
          this.ops["ListDocumentVersions"].apply(partialParams)
        );
    }

    invokeListDocuments(partialParams: ToOptional<{
      [K in keyof ListDocumentsRequest]: (ListDocumentsRequest)[K]
    }>): Request<ListDocumentsResult, AWSError> {
        this.boot();
        return this.client.listDocuments(
          this.ops["ListDocuments"].apply(partialParams)
        );
    }

    invokeListInventoryEntries(partialParams: ToOptional<{
      [K in keyof ListInventoryEntriesRequest]: (ListInventoryEntriesRequest)[K]
    }>): Request<ListInventoryEntriesResult, AWSError> {
        this.boot();
        return this.client.listInventoryEntries(
          this.ops["ListInventoryEntries"].apply(partialParams)
        );
    }

    invokeListOpsItemEvents(partialParams: ToOptional<{
      [K in keyof ListOpsItemEventsRequest]: (ListOpsItemEventsRequest)[K]
    }>): Request<ListOpsItemEventsResponse, AWSError> {
        this.boot();
        return this.client.listOpsItemEvents(
          this.ops["ListOpsItemEvents"].apply(partialParams)
        );
    }

    invokeListOpsItemRelatedItems(partialParams: ToOptional<{
      [K in keyof ListOpsItemRelatedItemsRequest]: (ListOpsItemRelatedItemsRequest)[K]
    }>): Request<ListOpsItemRelatedItemsResponse, AWSError> {
        this.boot();
        return this.client.listOpsItemRelatedItems(
          this.ops["ListOpsItemRelatedItems"].apply(partialParams)
        );
    }

    invokeListOpsMetadata(partialParams: ToOptional<{
      [K in keyof ListOpsMetadataRequest]: (ListOpsMetadataRequest)[K]
    }>): Request<ListOpsMetadataResult, AWSError> {
        this.boot();
        return this.client.listOpsMetadata(
          this.ops["ListOpsMetadata"].apply(partialParams)
        );
    }

    invokeListResourceComplianceSummaries(partialParams: ToOptional<{
      [K in keyof ListResourceComplianceSummariesRequest]: (ListResourceComplianceSummariesRequest)[K]
    }>): Request<ListResourceComplianceSummariesResult, AWSError> {
        this.boot();
        return this.client.listResourceComplianceSummaries(
          this.ops["ListResourceComplianceSummaries"].apply(partialParams)
        );
    }

    invokeListResourceDataSync(partialParams: ToOptional<{
      [K in keyof ListResourceDataSyncRequest]: (ListResourceDataSyncRequest)[K]
    }>): Request<ListResourceDataSyncResult, AWSError> {
        this.boot();
        return this.client.listResourceDataSync(
          this.ops["ListResourceDataSync"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof Omit<ListTagsForResourceRequest, "ResourceType">]: (ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResult, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeModifyDocumentPermission(partialParams: ToOptional<{
      [K in keyof ModifyDocumentPermissionRequest & keyof Omit<ModifyDocumentPermissionRequest, "Name">]: (ModifyDocumentPermissionRequest)[K]
    }>): Request<ModifyDocumentPermissionResponse, AWSError> {
        this.boot();
        return this.client.modifyDocumentPermission(
          this.ops["ModifyDocumentPermission"].apply(partialParams)
        );
    }

    invokePutComplianceItems(partialParams: ToOptional<{
      [K in keyof PutComplianceItemsRequest & keyof Omit<PutComplianceItemsRequest, "ResourceType">]: (PutComplianceItemsRequest)[K]
    }>): Request<PutComplianceItemsResult, AWSError> {
        this.boot();
        return this.client.putComplianceItems(
          this.ops["PutComplianceItems"].apply(partialParams)
        );
    }

    invokePutInventory(partialParams: ToOptional<{
      [K in keyof PutInventoryRequest]: (PutInventoryRequest)[K]
    }>): Request<PutInventoryResult, AWSError> {
        this.boot();
        return this.client.putInventory(
          this.ops["PutInventory"].apply(partialParams)
        );
    }

    invokePutParameter(partialParams: ToOptional<{
      [K in keyof PutParameterRequest & keyof Omit<PutParameterRequest, "Name">]: (PutParameterRequest)[K]
    }>): Request<PutParameterResult, AWSError> {
        this.boot();
        return this.client.putParameter(
          this.ops["PutParameter"].apply(partialParams)
        );
    }

    invokeRegisterDefaultPatchBaseline(partialParams: ToOptional<{
      [K in keyof RegisterDefaultPatchBaselineRequest]: (RegisterDefaultPatchBaselineRequest)[K]
    }>): Request<RegisterDefaultPatchBaselineResult, AWSError> {
        this.boot();
        return this.client.registerDefaultPatchBaseline(
          this.ops["RegisterDefaultPatchBaseline"].apply(partialParams)
        );
    }

    invokeRegisterPatchBaselineForPatchGroup(partialParams: ToOptional<{
      [K in keyof RegisterPatchBaselineForPatchGroupRequest]: (RegisterPatchBaselineForPatchGroupRequest)[K]
    }>): Request<RegisterPatchBaselineForPatchGroupResult, AWSError> {
        this.boot();
        return this.client.registerPatchBaselineForPatchGroup(
          this.ops["RegisterPatchBaselineForPatchGroup"].apply(partialParams)
        );
    }

    invokeRegisterTargetWithMaintenanceWindow(partialParams: ToOptional<{
      [K in keyof RegisterTargetWithMaintenanceWindowRequest & keyof Omit<RegisterTargetWithMaintenanceWindowRequest, "WindowId" | "ResourceType">]: (RegisterTargetWithMaintenanceWindowRequest)[K]
    }>): Request<RegisterTargetWithMaintenanceWindowResult, AWSError> {
        this.boot();
        return this.client.registerTargetWithMaintenanceWindow(
          this.ops["RegisterTargetWithMaintenanceWindow"].apply(partialParams)
        );
    }

    invokeRegisterTaskWithMaintenanceWindow(partialParams: ToOptional<{
      [K in keyof RegisterTaskWithMaintenanceWindowRequest & keyof Omit<RegisterTaskWithMaintenanceWindowRequest, "WindowId">]: (RegisterTaskWithMaintenanceWindowRequest)[K]
    }>): Request<RegisterTaskWithMaintenanceWindowResult, AWSError> {
        this.boot();
        return this.client.registerTaskWithMaintenanceWindow(
          this.ops["RegisterTaskWithMaintenanceWindow"].apply(partialParams)
        );
    }

    invokeRemoveTagsFromResource(partialParams: ToOptional<{
      [K in keyof RemoveTagsFromResourceRequest & keyof Omit<RemoveTagsFromResourceRequest, "ResourceType">]: (RemoveTagsFromResourceRequest)[K]
    }>): Request<RemoveTagsFromResourceResult, AWSError> {
        this.boot();
        return this.client.removeTagsFromResource(
          this.ops["RemoveTagsFromResource"].apply(partialParams)
        );
    }

    invokeResetServiceSetting(partialParams: ToOptional<{
      [K in keyof ResetServiceSettingRequest]: (ResetServiceSettingRequest)[K]
    }>): Request<ResetServiceSettingResult, AWSError> {
        this.boot();
        return this.client.resetServiceSetting(
          this.ops["ResetServiceSetting"].apply(partialParams)
        );
    }

    invokeResumeSession(partialParams: ToOptional<{
      [K in keyof ResumeSessionRequest]: (ResumeSessionRequest)[K]
    }>): Request<ResumeSessionResponse, AWSError> {
        this.boot();
        return this.client.resumeSession(
          this.ops["ResumeSession"].apply(partialParams)
        );
    }

    invokeSendAutomationSignal(partialParams: ToOptional<{
      [K in keyof SendAutomationSignalRequest]: (SendAutomationSignalRequest)[K]
    }>): Request<SendAutomationSignalResult, AWSError> {
        this.boot();
        return this.client.sendAutomationSignal(
          this.ops["SendAutomationSignal"].apply(partialParams)
        );
    }

    invokeSendCommand(partialParams: ToOptional<{
      [K in keyof SendCommandRequest]: (SendCommandRequest)[K]
    }>): Request<SendCommandResult, AWSError> {
        this.boot();
        return this.client.sendCommand(
          this.ops["SendCommand"].apply(partialParams)
        );
    }

    invokeStartAssociationsOnce(partialParams: ToOptional<{
      [K in keyof StartAssociationsOnceRequest]: (StartAssociationsOnceRequest)[K]
    }>): Request<StartAssociationsOnceResult, AWSError> {
        this.boot();
        return this.client.startAssociationsOnce(
          this.ops["StartAssociationsOnce"].apply(partialParams)
        );
    }

    invokeStartAutomationExecution(partialParams: ToOptional<{
      [K in keyof StartAutomationExecutionRequest]: (StartAutomationExecutionRequest)[K]
    }>): Request<StartAutomationExecutionResult, AWSError> {
        this.boot();
        return this.client.startAutomationExecution(
          this.ops["StartAutomationExecution"].apply(partialParams)
        );
    }

    invokeStartChangeRequestExecution(partialParams: ToOptional<{
      [K in keyof StartChangeRequestExecutionRequest]: (StartChangeRequestExecutionRequest)[K]
    }>): Request<StartChangeRequestExecutionResult, AWSError> {
        this.boot();
        return this.client.startChangeRequestExecution(
          this.ops["StartChangeRequestExecution"].apply(partialParams)
        );
    }

    invokeStartSession(partialParams: ToOptional<{
      [K in keyof StartSessionRequest]: (StartSessionRequest)[K]
    }>): Request<StartSessionResponse, AWSError> {
        this.boot();
        return this.client.startSession(
          this.ops["StartSession"].apply(partialParams)
        );
    }

    invokeStopAutomationExecution(partialParams: ToOptional<{
      [K in keyof StopAutomationExecutionRequest]: (StopAutomationExecutionRequest)[K]
    }>): Request<StopAutomationExecutionResult, AWSError> {
        this.boot();
        return this.client.stopAutomationExecution(
          this.ops["StopAutomationExecution"].apply(partialParams)
        );
    }

    invokeTerminateSession(partialParams: ToOptional<{
      [K in keyof TerminateSessionRequest]: (TerminateSessionRequest)[K]
    }>): Request<TerminateSessionResponse, AWSError> {
        this.boot();
        return this.client.terminateSession(
          this.ops["TerminateSession"].apply(partialParams)
        );
    }

    invokeUnlabelParameterVersion(partialParams: ToOptional<{
      [K in keyof UnlabelParameterVersionRequest & keyof Omit<UnlabelParameterVersionRequest, "Name">]: (UnlabelParameterVersionRequest)[K]
    }>): Request<UnlabelParameterVersionResult, AWSError> {
        this.boot();
        return this.client.unlabelParameterVersion(
          this.ops["UnlabelParameterVersion"].apply(partialParams)
        );
    }

    invokeUpdateAssociation(partialParams: ToOptional<{
      [K in keyof UpdateAssociationRequest]: (UpdateAssociationRequest)[K]
    }>): Request<UpdateAssociationResult, AWSError> {
        this.boot();
        return this.client.updateAssociation(
          this.ops["UpdateAssociation"].apply(partialParams)
        );
    }

    invokeUpdateAssociationStatus(partialParams: ToOptional<{
      [K in keyof UpdateAssociationStatusRequest & keyof Omit<UpdateAssociationStatusRequest, "Name">]: (UpdateAssociationStatusRequest)[K]
    }>): Request<UpdateAssociationStatusResult, AWSError> {
        this.boot();
        return this.client.updateAssociationStatus(
          this.ops["UpdateAssociationStatus"].apply(partialParams)
        );
    }

    invokeUpdateDocument(partialParams: ToOptional<{
      [K in keyof UpdateDocumentRequest & keyof Omit<UpdateDocumentRequest, "Name">]: (UpdateDocumentRequest)[K]
    }>): Request<UpdateDocumentResult, AWSError> {
        this.boot();
        return this.client.updateDocument(
          this.ops["UpdateDocument"].apply(partialParams)
        );
    }

    invokeUpdateDocumentDefaultVersion(partialParams: ToOptional<{
      [K in keyof UpdateDocumentDefaultVersionRequest & keyof Omit<UpdateDocumentDefaultVersionRequest, "Name">]: (UpdateDocumentDefaultVersionRequest)[K]
    }>): Request<UpdateDocumentDefaultVersionResult, AWSError> {
        this.boot();
        return this.client.updateDocumentDefaultVersion(
          this.ops["UpdateDocumentDefaultVersion"].apply(partialParams)
        );
    }

    invokeUpdateDocumentMetadata(partialParams: ToOptional<{
      [K in keyof UpdateDocumentMetadataRequest & keyof Omit<UpdateDocumentMetadataRequest, "Name">]: (UpdateDocumentMetadataRequest)[K]
    }>): Request<UpdateDocumentMetadataResponse, AWSError> {
        this.boot();
        return this.client.updateDocumentMetadata(
          this.ops["UpdateDocumentMetadata"].apply(partialParams)
        );
    }

    invokeUpdateMaintenanceWindow(partialParams: ToOptional<{
      [K in keyof UpdateMaintenanceWindowRequest & keyof Omit<UpdateMaintenanceWindowRequest, "WindowId">]: (UpdateMaintenanceWindowRequest)[K]
    }>): Request<UpdateMaintenanceWindowResult, AWSError> {
        this.boot();
        return this.client.updateMaintenanceWindow(
          this.ops["UpdateMaintenanceWindow"].apply(partialParams)
        );
    }

    invokeUpdateMaintenanceWindowTarget(partialParams: ToOptional<{
      [K in keyof UpdateMaintenanceWindowTargetRequest & keyof Omit<UpdateMaintenanceWindowTargetRequest, "WindowId">]: (UpdateMaintenanceWindowTargetRequest)[K]
    }>): Request<UpdateMaintenanceWindowTargetResult, AWSError> {
        this.boot();
        return this.client.updateMaintenanceWindowTarget(
          this.ops["UpdateMaintenanceWindowTarget"].apply(partialParams)
        );
    }

    invokeUpdateMaintenanceWindowTask(partialParams: ToOptional<{
      [K in keyof UpdateMaintenanceWindowTaskRequest & keyof Omit<UpdateMaintenanceWindowTaskRequest, "WindowId">]: (UpdateMaintenanceWindowTaskRequest)[K]
    }>): Request<UpdateMaintenanceWindowTaskResult, AWSError> {
        this.boot();
        return this.client.updateMaintenanceWindowTask(
          this.ops["UpdateMaintenanceWindowTask"].apply(partialParams)
        );
    }

    invokeUpdateManagedInstanceRole(partialParams: ToOptional<{
      [K in keyof UpdateManagedInstanceRoleRequest]: (UpdateManagedInstanceRoleRequest)[K]
    }>): Request<UpdateManagedInstanceRoleResult, AWSError> {
        this.boot();
        return this.client.updateManagedInstanceRole(
          this.ops["UpdateManagedInstanceRole"].apply(partialParams)
        );
    }

    invokeUpdateOpsItem(partialParams: ToOptional<{
      [K in keyof UpdateOpsItemRequest]: (UpdateOpsItemRequest)[K]
    }>): Request<UpdateOpsItemResponse, AWSError> {
        this.boot();
        return this.client.updateOpsItem(
          this.ops["UpdateOpsItem"].apply(partialParams)
        );
    }

    invokeUpdateOpsMetadata(partialParams: ToOptional<{
      [K in keyof UpdateOpsMetadataRequest]: (UpdateOpsMetadataRequest)[K]
    }>): Request<UpdateOpsMetadataResult, AWSError> {
        this.boot();
        return this.client.updateOpsMetadata(
          this.ops["UpdateOpsMetadata"].apply(partialParams)
        );
    }

    invokeUpdatePatchBaseline(partialParams: ToOptional<{
      [K in keyof UpdatePatchBaselineRequest]: (UpdatePatchBaselineRequest)[K]
    }>): Request<UpdatePatchBaselineResult, AWSError> {
        this.boot();
        return this.client.updatePatchBaseline(
          this.ops["UpdatePatchBaseline"].apply(partialParams)
        );
    }

    invokeUpdateResourceDataSync(partialParams: ToOptional<{
      [K in keyof UpdateResourceDataSyncRequest]: (UpdateResourceDataSyncRequest)[K]
    }>): Request<UpdateResourceDataSyncResult, AWSError> {
        this.boot();
        return this.client.updateResourceDataSync(
          this.ops["UpdateResourceDataSync"].apply(partialParams)
        );
    }

    invokeUpdateServiceSetting(partialParams: ToOptional<{
      [K in keyof UpdateServiceSettingRequest]: (UpdateServiceSettingRequest)[K]
    }>): Request<UpdateServiceSettingResult, AWSError> {
        this.boot();
        return this.client.updateServiceSetting(
          this.ops["UpdateServiceSetting"].apply(partialParams)
        );
    }
}