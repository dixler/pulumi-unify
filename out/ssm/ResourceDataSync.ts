
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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
    DescribeAssociationExecutionTargetsRequest,
    DescribeAssociationExecutionsRequest,
    DescribeAutomationStepExecutionsRequest,
    DescribeDocumentRequest,
    DescribeDocumentPermissionRequest,
    DescribeEffectiveInstanceAssociationsRequest,
    DescribeEffectivePatchesForPatchBaselineRequest,
    DescribeInstanceAssociationsStatusRequest,
    DescribeInstancePatchStatesRequest,
    DescribeInstancePatchStatesForPatchGroupRequest,
    DescribeInstancePatchesRequest,
    DescribeMaintenanceWindowExecutionTaskInvocationsRequest,
    DescribeMaintenanceWindowExecutionTasksRequest,
    DescribeMaintenanceWindowExecutionsRequest,
    DescribeMaintenanceWindowTargetsRequest,
    DescribeMaintenanceWindowTasksRequest,
    DescribeMaintenanceWindowsForTargetRequest,
    DescribePatchGroupStateRequest,
    DescribePatchPropertiesRequest,
    DescribeSessionsRequest,
    DisassociateOpsItemRelatedItemRequest,
    GetAutomationExecutionRequest,
    GetCalendarStateRequest,
    GetCommandInvocationRequest,
    GetConnectionStatusRequest,
    GetDeployablePatchSnapshotForInstanceRequest,
    GetDocumentRequest,
    GetMaintenanceWindowRequest,
    GetMaintenanceWindowExecutionRequest,
    GetMaintenanceWindowExecutionTaskRequest,
    GetMaintenanceWindowExecutionTaskInvocationRequest,
    GetMaintenanceWindowTaskRequest,
    GetOpsItemRequest,
    GetOpsMetadataRequest,
    GetParameterRequest,
    GetParameterHistoryRequest,
    GetParametersRequest,
    GetParametersByPathRequest,
    GetPatchBaselineRequest,
    GetPatchBaselineForPatchGroupRequest,
    GetServiceSettingRequest,
    LabelParameterVersionRequest,
    ListAssociationVersionsRequest,
    ListDocumentMetadataHistoryRequest,
    ListDocumentVersionsRequest,
    ListInventoryEntriesRequest,
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
    DescribeAssociationExecutionTargetsResult,
    DescribeAssociationExecutionsResult,
    DescribeAutomationStepExecutionsResult,
    DescribeDocumentResult,
    DescribeDocumentPermissionResponse,
    DescribeEffectiveInstanceAssociationsResult,
    DescribeEffectivePatchesForPatchBaselineResult,
    DescribeInstanceAssociationsStatusResult,
    DescribeInstancePatchStatesResult,
    DescribeInstancePatchStatesForPatchGroupResult,
    DescribeInstancePatchesResult,
    DescribeMaintenanceWindowExecutionTaskInvocationsResult,
    DescribeMaintenanceWindowExecutionTasksResult,
    DescribeMaintenanceWindowExecutionsResult,
    DescribeMaintenanceWindowTargetsResult,
    DescribeMaintenanceWindowTasksResult,
    DescribeMaintenanceWindowsForTargetResult,
    DescribePatchGroupStateResult,
    DescribePatchPropertiesResult,
    DescribeSessionsResponse,
    DisassociateOpsItemRelatedItemResponse,
    GetAutomationExecutionResult,
    GetCalendarStateResponse,
    GetCommandInvocationResult,
    GetConnectionStatusResponse,
    GetDeployablePatchSnapshotForInstanceResult,
    GetDocumentResult,
    GetMaintenanceWindowResult,
    GetMaintenanceWindowExecutionResult,
    GetMaintenanceWindowExecutionTaskResult,
    GetMaintenanceWindowExecutionTaskInvocationResult,
    GetMaintenanceWindowTaskResult,
    GetOpsItemResponse,
    GetOpsMetadataResult,
    GetParameterResult,
    GetParameterHistoryResult,
    GetParametersResult,
    GetParametersByPathResult,
    GetPatchBaselineResult,
    GetPatchBaselineForPatchGroupResult,
    GetServiceSettingResult,
    LabelParameterVersionResult,
    ListAssociationVersionsResult,
    ListDocumentMetadataHistoryResponse,
    ListDocumentVersionsResult,
    ListInventoryEntriesResult,
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ssm.ResourceDataSync {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.ssm.ResourceDataSync>) {
        super(...args)
        this.client = new awssdk.SSM()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/ssm-2014-11-06.normal.json"), this.client)
    }

    invokeAddTagsToResource(partialParams: ToOptional<{
      [K in keyof AddTagsToResourceRequest]: (AddTagsToResourceRequest)[K]
    }>): AddTagsToResourceResult {
        return this.client.addTagsToResource(
            this.ops["AddTagsToResource"].apply(partialParams)
        );
    }

    invokeAssociateOpsItemRelatedItem(partialParams: ToOptional<{
      [K in keyof AssociateOpsItemRelatedItemRequest]: (AssociateOpsItemRelatedItemRequest)[K]
    }>): AssociateOpsItemRelatedItemResponse {
        return this.client.associateOpsItemRelatedItem(
            this.ops["AssociateOpsItemRelatedItem"].apply(partialParams)
        );
    }

    invokeCancelCommand(partialParams: ToOptional<{
      [K in keyof CancelCommandRequest]: (CancelCommandRequest)[K]
    }>): CancelCommandResult {
        return this.client.cancelCommand(
            this.ops["CancelCommand"].apply(partialParams)
        );
    }

    invokeCancelMaintenanceWindowExecution(partialParams: ToOptional<{
      [K in keyof CancelMaintenanceWindowExecutionRequest]: (CancelMaintenanceWindowExecutionRequest)[K]
    }>): CancelMaintenanceWindowExecutionResult {
        return this.client.cancelMaintenanceWindowExecution(
            this.ops["CancelMaintenanceWindowExecution"].apply(partialParams)
        );
    }

    invokeCreateActivation(partialParams: ToOptional<{
      [K in keyof CreateActivationRequest]: (CreateActivationRequest)[K]
    }>): CreateActivationResult {
        return this.client.createActivation(
            this.ops["CreateActivation"].apply(partialParams)
        );
    }

    invokeCreateAssociation(partialParams: ToOptional<{
      [K in keyof CreateAssociationRequest]: (CreateAssociationRequest)[K]
    }>): CreateAssociationResult {
        return this.client.createAssociation(
            this.ops["CreateAssociation"].apply(partialParams)
        );
    }

    invokeCreateAssociationBatch(partialParams: ToOptional<{
      [K in keyof CreateAssociationBatchRequest]: (CreateAssociationBatchRequest)[K]
    }>): CreateAssociationBatchResult {
        return this.client.createAssociationBatch(
            this.ops["CreateAssociationBatch"].apply(partialParams)
        );
    }

    invokeCreateDocument(partialParams: ToOptional<{
      [K in keyof CreateDocumentRequest]: (CreateDocumentRequest)[K]
    }>): CreateDocumentResult {
        return this.client.createDocument(
            this.ops["CreateDocument"].apply(partialParams)
        );
    }

    invokeCreateMaintenanceWindow(partialParams: ToOptional<{
      [K in keyof CreateMaintenanceWindowRequest]: (CreateMaintenanceWindowRequest)[K]
    }>): CreateMaintenanceWindowResult {
        return this.client.createMaintenanceWindow(
            this.ops["CreateMaintenanceWindow"].apply(partialParams)
        );
    }

    invokeCreateOpsItem(partialParams: ToOptional<{
      [K in keyof CreateOpsItemRequest]: (CreateOpsItemRequest)[K]
    }>): CreateOpsItemResponse {
        return this.client.createOpsItem(
            this.ops["CreateOpsItem"].apply(partialParams)
        );
    }

    invokeCreateOpsMetadata(partialParams: ToOptional<{
      [K in keyof CreateOpsMetadataRequest]: (CreateOpsMetadataRequest)[K]
    }>): CreateOpsMetadataResult {
        return this.client.createOpsMetadata(
            this.ops["CreateOpsMetadata"].apply(partialParams)
        );
    }

    invokeCreatePatchBaseline(partialParams: ToOptional<{
      [K in keyof Omit<CreatePatchBaselineRequest, "Name">]: (Omit<CreatePatchBaselineRequest, "Name">)[K]
    }>): CreatePatchBaselineResult {
        return this.client.createPatchBaseline(
            this.ops["CreatePatchBaseline"].apply(partialParams)
        );
    }

    invokeCreateResourceDataSync(partialParams: ToOptional<{
      [K in keyof CreateResourceDataSyncRequest]: (CreateResourceDataSyncRequest)[K]
    }>): CreateResourceDataSyncResult {
        return this.client.createResourceDataSync(
            this.ops["CreateResourceDataSync"].apply(partialParams)
        );
    }

    invokeDeleteActivation(partialParams: ToOptional<{
      [K in keyof DeleteActivationRequest]: (DeleteActivationRequest)[K]
    }>): DeleteActivationResult {
        return this.client.deleteActivation(
            this.ops["DeleteActivation"].apply(partialParams)
        );
    }

    invokeDeleteDocument(partialParams: ToOptional<{
      [K in keyof DeleteDocumentRequest]: (DeleteDocumentRequest)[K]
    }>): DeleteDocumentResult {
        return this.client.deleteDocument(
            this.ops["DeleteDocument"].apply(partialParams)
        );
    }

    invokeDeleteInventory(partialParams: ToOptional<{
      [K in keyof DeleteInventoryRequest]: (DeleteInventoryRequest)[K]
    }>): DeleteInventoryResult {
        return this.client.deleteInventory(
            this.ops["DeleteInventory"].apply(partialParams)
        );
    }

    invokeDeleteMaintenanceWindow(partialParams: ToOptional<{
      [K in keyof DeleteMaintenanceWindowRequest]: (DeleteMaintenanceWindowRequest)[K]
    }>): DeleteMaintenanceWindowResult {
        return this.client.deleteMaintenanceWindow(
            this.ops["DeleteMaintenanceWindow"].apply(partialParams)
        );
    }

    invokeDeleteOpsMetadata(partialParams: ToOptional<{
      [K in keyof DeleteOpsMetadataRequest]: (DeleteOpsMetadataRequest)[K]
    }>): DeleteOpsMetadataResult {
        return this.client.deleteOpsMetadata(
            this.ops["DeleteOpsMetadata"].apply(partialParams)
        );
    }

    invokeDeleteParameter(partialParams: ToOptional<{
      [K in keyof DeleteParameterRequest]: (DeleteParameterRequest)[K]
    }>): DeleteParameterResult {
        return this.client.deleteParameter(
            this.ops["DeleteParameter"].apply(partialParams)
        );
    }

    invokeDeleteParameters(partialParams: ToOptional<{
      [K in keyof DeleteParametersRequest]: (DeleteParametersRequest)[K]
    }>): DeleteParametersResult {
        return this.client.deleteParameters(
            this.ops["DeleteParameters"].apply(partialParams)
        );
    }

    invokeDeletePatchBaseline(partialParams: ToOptional<{
      [K in keyof DeletePatchBaselineRequest]: (DeletePatchBaselineRequest)[K]
    }>): DeletePatchBaselineResult {
        return this.client.deletePatchBaseline(
            this.ops["DeletePatchBaseline"].apply(partialParams)
        );
    }

    invokeDeleteResourceDataSync(partialParams: ToOptional<{
      [K in keyof DeleteResourceDataSyncRequest]: (DeleteResourceDataSyncRequest)[K]
    }>): DeleteResourceDataSyncResult {
        return this.client.deleteResourceDataSync(
            this.ops["DeleteResourceDataSync"].apply(partialParams)
        );
    }

    invokeDeregisterManagedInstance(partialParams: ToOptional<{
      [K in keyof DeregisterManagedInstanceRequest]: (DeregisterManagedInstanceRequest)[K]
    }>): DeregisterManagedInstanceResult {
        return this.client.deregisterManagedInstance(
            this.ops["DeregisterManagedInstance"].apply(partialParams)
        );
    }

    invokeDeregisterPatchBaselineForPatchGroup(partialParams: ToOptional<{
      [K in keyof DeregisterPatchBaselineForPatchGroupRequest]: (DeregisterPatchBaselineForPatchGroupRequest)[K]
    }>): DeregisterPatchBaselineForPatchGroupResult {
        return this.client.deregisterPatchBaselineForPatchGroup(
            this.ops["DeregisterPatchBaselineForPatchGroup"].apply(partialParams)
        );
    }

    invokeDeregisterTargetFromMaintenanceWindow(partialParams: ToOptional<{
      [K in keyof DeregisterTargetFromMaintenanceWindowRequest]: (DeregisterTargetFromMaintenanceWindowRequest)[K]
    }>): DeregisterTargetFromMaintenanceWindowResult {
        return this.client.deregisterTargetFromMaintenanceWindow(
            this.ops["DeregisterTargetFromMaintenanceWindow"].apply(partialParams)
        );
    }

    invokeDeregisterTaskFromMaintenanceWindow(partialParams: ToOptional<{
      [K in keyof DeregisterTaskFromMaintenanceWindowRequest]: (DeregisterTaskFromMaintenanceWindowRequest)[K]
    }>): DeregisterTaskFromMaintenanceWindowResult {
        return this.client.deregisterTaskFromMaintenanceWindow(
            this.ops["DeregisterTaskFromMaintenanceWindow"].apply(partialParams)
        );
    }

    invokeDescribeAssociationExecutionTargets(partialParams: ToOptional<{
      [K in keyof DescribeAssociationExecutionTargetsRequest]: (DescribeAssociationExecutionTargetsRequest)[K]
    }>): DescribeAssociationExecutionTargetsResult {
        return this.client.describeAssociationExecutionTargets(
            this.ops["DescribeAssociationExecutionTargets"].apply(partialParams)
        );
    }

    invokeDescribeAssociationExecutions(partialParams: ToOptional<{
      [K in keyof DescribeAssociationExecutionsRequest]: (DescribeAssociationExecutionsRequest)[K]
    }>): DescribeAssociationExecutionsResult {
        return this.client.describeAssociationExecutions(
            this.ops["DescribeAssociationExecutions"].apply(partialParams)
        );
    }

    invokeDescribeAutomationStepExecutions(partialParams: ToOptional<{
      [K in keyof DescribeAutomationStepExecutionsRequest]: (DescribeAutomationStepExecutionsRequest)[K]
    }>): DescribeAutomationStepExecutionsResult {
        return this.client.describeAutomationStepExecutions(
            this.ops["DescribeAutomationStepExecutions"].apply(partialParams)
        );
    }

    invokeDescribeDocument(partialParams: ToOptional<{
      [K in keyof DescribeDocumentRequest]: (DescribeDocumentRequest)[K]
    }>): DescribeDocumentResult {
        return this.client.describeDocument(
            this.ops["DescribeDocument"].apply(partialParams)
        );
    }

    invokeDescribeDocumentPermission(partialParams: ToOptional<{
      [K in keyof DescribeDocumentPermissionRequest]: (DescribeDocumentPermissionRequest)[K]
    }>): DescribeDocumentPermissionResponse {
        return this.client.describeDocumentPermission(
            this.ops["DescribeDocumentPermission"].apply(partialParams)
        );
    }

    invokeDescribeEffectiveInstanceAssociations(partialParams: ToOptional<{
      [K in keyof DescribeEffectiveInstanceAssociationsRequest]: (DescribeEffectiveInstanceAssociationsRequest)[K]
    }>): DescribeEffectiveInstanceAssociationsResult {
        return this.client.describeEffectiveInstanceAssociations(
            this.ops["DescribeEffectiveInstanceAssociations"].apply(partialParams)
        );
    }

    invokeDescribeEffectivePatchesForPatchBaseline(partialParams: ToOptional<{
      [K in keyof DescribeEffectivePatchesForPatchBaselineRequest]: (DescribeEffectivePatchesForPatchBaselineRequest)[K]
    }>): DescribeEffectivePatchesForPatchBaselineResult {
        return this.client.describeEffectivePatchesForPatchBaseline(
            this.ops["DescribeEffectivePatchesForPatchBaseline"].apply(partialParams)
        );
    }

    invokeDescribeInstanceAssociationsStatus(partialParams: ToOptional<{
      [K in keyof DescribeInstanceAssociationsStatusRequest]: (DescribeInstanceAssociationsStatusRequest)[K]
    }>): DescribeInstanceAssociationsStatusResult {
        return this.client.describeInstanceAssociationsStatus(
            this.ops["DescribeInstanceAssociationsStatus"].apply(partialParams)
        );
    }

    invokeDescribeInstancePatchStates(partialParams: ToOptional<{
      [K in keyof DescribeInstancePatchStatesRequest]: (DescribeInstancePatchStatesRequest)[K]
    }>): DescribeInstancePatchStatesResult {
        return this.client.describeInstancePatchStates(
            this.ops["DescribeInstancePatchStates"].apply(partialParams)
        );
    }

    invokeDescribeInstancePatchStatesForPatchGroup(partialParams: ToOptional<{
      [K in keyof DescribeInstancePatchStatesForPatchGroupRequest]: (DescribeInstancePatchStatesForPatchGroupRequest)[K]
    }>): DescribeInstancePatchStatesForPatchGroupResult {
        return this.client.describeInstancePatchStatesForPatchGroup(
            this.ops["DescribeInstancePatchStatesForPatchGroup"].apply(partialParams)
        );
    }

    invokeDescribeInstancePatches(partialParams: ToOptional<{
      [K in keyof DescribeInstancePatchesRequest]: (DescribeInstancePatchesRequest)[K]
    }>): DescribeInstancePatchesResult {
        return this.client.describeInstancePatches(
            this.ops["DescribeInstancePatches"].apply(partialParams)
        );
    }

    invokeDescribeMaintenanceWindowExecutionTaskInvocations(partialParams: ToOptional<{
      [K in keyof DescribeMaintenanceWindowExecutionTaskInvocationsRequest]: (DescribeMaintenanceWindowExecutionTaskInvocationsRequest)[K]
    }>): DescribeMaintenanceWindowExecutionTaskInvocationsResult {
        return this.client.describeMaintenanceWindowExecutionTaskInvocations(
            this.ops["DescribeMaintenanceWindowExecutionTaskInvocations"].apply(partialParams)
        );
    }

    invokeDescribeMaintenanceWindowExecutionTasks(partialParams: ToOptional<{
      [K in keyof DescribeMaintenanceWindowExecutionTasksRequest]: (DescribeMaintenanceWindowExecutionTasksRequest)[K]
    }>): DescribeMaintenanceWindowExecutionTasksResult {
        return this.client.describeMaintenanceWindowExecutionTasks(
            this.ops["DescribeMaintenanceWindowExecutionTasks"].apply(partialParams)
        );
    }

    invokeDescribeMaintenanceWindowExecutions(partialParams: ToOptional<{
      [K in keyof DescribeMaintenanceWindowExecutionsRequest]: (DescribeMaintenanceWindowExecutionsRequest)[K]
    }>): DescribeMaintenanceWindowExecutionsResult {
        return this.client.describeMaintenanceWindowExecutions(
            this.ops["DescribeMaintenanceWindowExecutions"].apply(partialParams)
        );
    }

    invokeDescribeMaintenanceWindowTargets(partialParams: ToOptional<{
      [K in keyof DescribeMaintenanceWindowTargetsRequest]: (DescribeMaintenanceWindowTargetsRequest)[K]
    }>): DescribeMaintenanceWindowTargetsResult {
        return this.client.describeMaintenanceWindowTargets(
            this.ops["DescribeMaintenanceWindowTargets"].apply(partialParams)
        );
    }

    invokeDescribeMaintenanceWindowTasks(partialParams: ToOptional<{
      [K in keyof DescribeMaintenanceWindowTasksRequest]: (DescribeMaintenanceWindowTasksRequest)[K]
    }>): DescribeMaintenanceWindowTasksResult {
        return this.client.describeMaintenanceWindowTasks(
            this.ops["DescribeMaintenanceWindowTasks"].apply(partialParams)
        );
    }

    invokeDescribeMaintenanceWindowsForTarget(partialParams: ToOptional<{
      [K in keyof DescribeMaintenanceWindowsForTargetRequest]: (DescribeMaintenanceWindowsForTargetRequest)[K]
    }>): DescribeMaintenanceWindowsForTargetResult {
        return this.client.describeMaintenanceWindowsForTarget(
            this.ops["DescribeMaintenanceWindowsForTarget"].apply(partialParams)
        );
    }

    invokeDescribePatchGroupState(partialParams: ToOptional<{
      [K in keyof DescribePatchGroupStateRequest]: (DescribePatchGroupStateRequest)[K]
    }>): DescribePatchGroupStateResult {
        return this.client.describePatchGroupState(
            this.ops["DescribePatchGroupState"].apply(partialParams)
        );
    }

    invokeDescribePatchProperties(partialParams: ToOptional<{
      [K in keyof DescribePatchPropertiesRequest]: (DescribePatchPropertiesRequest)[K]
    }>): DescribePatchPropertiesResult {
        return this.client.describePatchProperties(
            this.ops["DescribePatchProperties"].apply(partialParams)
        );
    }

    invokeDescribeSessions(partialParams: ToOptional<{
      [K in keyof DescribeSessionsRequest]: (DescribeSessionsRequest)[K]
    }>): DescribeSessionsResponse {
        return this.client.describeSessions(
            this.ops["DescribeSessions"].apply(partialParams)
        );
    }

    invokeDisassociateOpsItemRelatedItem(partialParams: ToOptional<{
      [K in keyof DisassociateOpsItemRelatedItemRequest]: (DisassociateOpsItemRelatedItemRequest)[K]
    }>): DisassociateOpsItemRelatedItemResponse {
        return this.client.disassociateOpsItemRelatedItem(
            this.ops["DisassociateOpsItemRelatedItem"].apply(partialParams)
        );
    }

    invokeGetAutomationExecution(partialParams: ToOptional<{
      [K in keyof GetAutomationExecutionRequest]: (GetAutomationExecutionRequest)[K]
    }>): GetAutomationExecutionResult {
        return this.client.getAutomationExecution(
            this.ops["GetAutomationExecution"].apply(partialParams)
        );
    }

    invokeGetCalendarState(partialParams: ToOptional<{
      [K in keyof GetCalendarStateRequest]: (GetCalendarStateRequest)[K]
    }>): GetCalendarStateResponse {
        return this.client.getCalendarState(
            this.ops["GetCalendarState"].apply(partialParams)
        );
    }

    invokeGetCommandInvocation(partialParams: ToOptional<{
      [K in keyof GetCommandInvocationRequest]: (GetCommandInvocationRequest)[K]
    }>): GetCommandInvocationResult {
        return this.client.getCommandInvocation(
            this.ops["GetCommandInvocation"].apply(partialParams)
        );
    }

    invokeGetConnectionStatus(partialParams: ToOptional<{
      [K in keyof GetConnectionStatusRequest]: (GetConnectionStatusRequest)[K]
    }>): GetConnectionStatusResponse {
        return this.client.getConnectionStatus(
            this.ops["GetConnectionStatus"].apply(partialParams)
        );
    }

    invokeGetDeployablePatchSnapshotForInstance(partialParams: ToOptional<{
      [K in keyof GetDeployablePatchSnapshotForInstanceRequest]: (GetDeployablePatchSnapshotForInstanceRequest)[K]
    }>): GetDeployablePatchSnapshotForInstanceResult {
        return this.client.getDeployablePatchSnapshotForInstance(
            this.ops["GetDeployablePatchSnapshotForInstance"].apply(partialParams)
        );
    }

    invokeGetDocument(partialParams: ToOptional<{
      [K in keyof Omit<GetDocumentRequest, "Name">]: (Omit<GetDocumentRequest, "Name">)[K]
    }>): GetDocumentResult {
        return this.client.getDocument(
            this.ops["GetDocument"].apply(partialParams)
        );
    }

    invokeGetMaintenanceWindow(partialParams: ToOptional<{
      [K in keyof GetMaintenanceWindowRequest]: (GetMaintenanceWindowRequest)[K]
    }>): GetMaintenanceWindowResult {
        return this.client.getMaintenanceWindow(
            this.ops["GetMaintenanceWindow"].apply(partialParams)
        );
    }

    invokeGetMaintenanceWindowExecution(partialParams: ToOptional<{
      [K in keyof GetMaintenanceWindowExecutionRequest]: (GetMaintenanceWindowExecutionRequest)[K]
    }>): GetMaintenanceWindowExecutionResult {
        return this.client.getMaintenanceWindowExecution(
            this.ops["GetMaintenanceWindowExecution"].apply(partialParams)
        );
    }

    invokeGetMaintenanceWindowExecutionTask(partialParams: ToOptional<{
      [K in keyof GetMaintenanceWindowExecutionTaskRequest]: (GetMaintenanceWindowExecutionTaskRequest)[K]
    }>): GetMaintenanceWindowExecutionTaskResult {
        return this.client.getMaintenanceWindowExecutionTask(
            this.ops["GetMaintenanceWindowExecutionTask"].apply(partialParams)
        );
    }

    invokeGetMaintenanceWindowExecutionTaskInvocation(partialParams: ToOptional<{
      [K in keyof GetMaintenanceWindowExecutionTaskInvocationRequest]: (GetMaintenanceWindowExecutionTaskInvocationRequest)[K]
    }>): GetMaintenanceWindowExecutionTaskInvocationResult {
        return this.client.getMaintenanceWindowExecutionTaskInvocation(
            this.ops["GetMaintenanceWindowExecutionTaskInvocation"].apply(partialParams)
        );
    }

    invokeGetMaintenanceWindowTask(partialParams: ToOptional<{
      [K in keyof GetMaintenanceWindowTaskRequest]: (GetMaintenanceWindowTaskRequest)[K]
    }>): GetMaintenanceWindowTaskResult {
        return this.client.getMaintenanceWindowTask(
            this.ops["GetMaintenanceWindowTask"].apply(partialParams)
        );
    }

    invokeGetOpsItem(partialParams: ToOptional<{
      [K in keyof GetOpsItemRequest]: (GetOpsItemRequest)[K]
    }>): GetOpsItemResponse {
        return this.client.getOpsItem(
            this.ops["GetOpsItem"].apply(partialParams)
        );
    }

    invokeGetOpsMetadata(partialParams: ToOptional<{
      [K in keyof GetOpsMetadataRequest]: (GetOpsMetadataRequest)[K]
    }>): GetOpsMetadataResult {
        return this.client.getOpsMetadata(
            this.ops["GetOpsMetadata"].apply(partialParams)
        );
    }

    invokeGetParameter(partialParams: ToOptional<{
      [K in keyof GetParameterRequest]: (GetParameterRequest)[K]
    }>): GetParameterResult {
        return this.client.getParameter(
            this.ops["GetParameter"].apply(partialParams)
        );
    }

    invokeGetParameterHistory(partialParams: ToOptional<{
      [K in keyof GetParameterHistoryRequest]: (GetParameterHistoryRequest)[K]
    }>): GetParameterHistoryResult {
        return this.client.getParameterHistory(
            this.ops["GetParameterHistory"].apply(partialParams)
        );
    }

    invokeGetParameters(partialParams: ToOptional<{
      [K in keyof GetParametersRequest]: (GetParametersRequest)[K]
    }>): GetParametersResult {
        return this.client.getParameters(
            this.ops["GetParameters"].apply(partialParams)
        );
    }

    invokeGetParametersByPath(partialParams: ToOptional<{
      [K in keyof GetParametersByPathRequest]: (GetParametersByPathRequest)[K]
    }>): GetParametersByPathResult {
        return this.client.getParametersByPath(
            this.ops["GetParametersByPath"].apply(partialParams)
        );
    }

    invokeGetPatchBaseline(partialParams: ToOptional<{
      [K in keyof GetPatchBaselineRequest]: (GetPatchBaselineRequest)[K]
    }>): GetPatchBaselineResult {
        return this.client.getPatchBaseline(
            this.ops["GetPatchBaseline"].apply(partialParams)
        );
    }

    invokeGetPatchBaselineForPatchGroup(partialParams: ToOptional<{
      [K in keyof GetPatchBaselineForPatchGroupRequest]: (GetPatchBaselineForPatchGroupRequest)[K]
    }>): GetPatchBaselineForPatchGroupResult {
        return this.client.getPatchBaselineForPatchGroup(
            this.ops["GetPatchBaselineForPatchGroup"].apply(partialParams)
        );
    }

    invokeGetServiceSetting(partialParams: ToOptional<{
      [K in keyof GetServiceSettingRequest]: (GetServiceSettingRequest)[K]
    }>): GetServiceSettingResult {
        return this.client.getServiceSetting(
            this.ops["GetServiceSetting"].apply(partialParams)
        );
    }

    invokeLabelParameterVersion(partialParams: ToOptional<{
      [K in keyof LabelParameterVersionRequest]: (LabelParameterVersionRequest)[K]
    }>): LabelParameterVersionResult {
        return this.client.labelParameterVersion(
            this.ops["LabelParameterVersion"].apply(partialParams)
        );
    }

    invokeListAssociationVersions(partialParams: ToOptional<{
      [K in keyof ListAssociationVersionsRequest]: (ListAssociationVersionsRequest)[K]
    }>): ListAssociationVersionsResult {
        return this.client.listAssociationVersions(
            this.ops["ListAssociationVersions"].apply(partialParams)
        );
    }

    invokeListDocumentMetadataHistory(partialParams: ToOptional<{
      [K in keyof Omit<ListDocumentMetadataHistoryRequest, "Name">]: (Omit<ListDocumentMetadataHistoryRequest, "Name">)[K]
    }>): ListDocumentMetadataHistoryResponse {
        return this.client.listDocumentMetadataHistory(
            this.ops["ListDocumentMetadataHistory"].apply(partialParams)
        );
    }

    invokeListDocumentVersions(partialParams: ToOptional<{
      [K in keyof Omit<ListDocumentVersionsRequest, "Name">]: (Omit<ListDocumentVersionsRequest, "Name">)[K]
    }>): ListDocumentVersionsResult {
        return this.client.listDocumentVersions(
            this.ops["ListDocumentVersions"].apply(partialParams)
        );
    }

    invokeListInventoryEntries(partialParams: ToOptional<{
      [K in keyof ListInventoryEntriesRequest]: (ListInventoryEntriesRequest)[K]
    }>): ListInventoryEntriesResult {
        return this.client.listInventoryEntries(
            this.ops["ListInventoryEntries"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResult {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeModifyDocumentPermission(partialParams: ToOptional<{
      [K in keyof Omit<ModifyDocumentPermissionRequest, "Name">]: (Omit<ModifyDocumentPermissionRequest, "Name">)[K]
    }>): ModifyDocumentPermissionResponse {
        return this.client.modifyDocumentPermission(
            this.ops["ModifyDocumentPermission"].apply(partialParams)
        );
    }

    invokePutComplianceItems(partialParams: ToOptional<{
      [K in keyof PutComplianceItemsRequest]: (PutComplianceItemsRequest)[K]
    }>): PutComplianceItemsResult {
        return this.client.putComplianceItems(
            this.ops["PutComplianceItems"].apply(partialParams)
        );
    }

    invokePutInventory(partialParams: ToOptional<{
      [K in keyof PutInventoryRequest]: (PutInventoryRequest)[K]
    }>): PutInventoryResult {
        return this.client.putInventory(
            this.ops["PutInventory"].apply(partialParams)
        );
    }

    invokePutParameter(partialParams: ToOptional<{
      [K in keyof Omit<PutParameterRequest, "Name">]: (Omit<PutParameterRequest, "Name">)[K]
    }>): PutParameterResult {
        return this.client.putParameter(
            this.ops["PutParameter"].apply(partialParams)
        );
    }

    invokeRegisterDefaultPatchBaseline(partialParams: ToOptional<{
      [K in keyof RegisterDefaultPatchBaselineRequest]: (RegisterDefaultPatchBaselineRequest)[K]
    }>): RegisterDefaultPatchBaselineResult {
        return this.client.registerDefaultPatchBaseline(
            this.ops["RegisterDefaultPatchBaseline"].apply(partialParams)
        );
    }

    invokeRegisterPatchBaselineForPatchGroup(partialParams: ToOptional<{
      [K in keyof RegisterPatchBaselineForPatchGroupRequest]: (RegisterPatchBaselineForPatchGroupRequest)[K]
    }>): RegisterPatchBaselineForPatchGroupResult {
        return this.client.registerPatchBaselineForPatchGroup(
            this.ops["RegisterPatchBaselineForPatchGroup"].apply(partialParams)
        );
    }

    invokeRegisterTargetWithMaintenanceWindow(partialParams: ToOptional<{
      [K in keyof RegisterTargetWithMaintenanceWindowRequest]: (RegisterTargetWithMaintenanceWindowRequest)[K]
    }>): RegisterTargetWithMaintenanceWindowResult {
        return this.client.registerTargetWithMaintenanceWindow(
            this.ops["RegisterTargetWithMaintenanceWindow"].apply(partialParams)
        );
    }

    invokeRegisterTaskWithMaintenanceWindow(partialParams: ToOptional<{
      [K in keyof RegisterTaskWithMaintenanceWindowRequest]: (RegisterTaskWithMaintenanceWindowRequest)[K]
    }>): RegisterTaskWithMaintenanceWindowResult {
        return this.client.registerTaskWithMaintenanceWindow(
            this.ops["RegisterTaskWithMaintenanceWindow"].apply(partialParams)
        );
    }

    invokeRemoveTagsFromResource(partialParams: ToOptional<{
      [K in keyof RemoveTagsFromResourceRequest]: (RemoveTagsFromResourceRequest)[K]
    }>): RemoveTagsFromResourceResult {
        return this.client.removeTagsFromResource(
            this.ops["RemoveTagsFromResource"].apply(partialParams)
        );
    }

    invokeResetServiceSetting(partialParams: ToOptional<{
      [K in keyof ResetServiceSettingRequest]: (ResetServiceSettingRequest)[K]
    }>): ResetServiceSettingResult {
        return this.client.resetServiceSetting(
            this.ops["ResetServiceSetting"].apply(partialParams)
        );
    }

    invokeResumeSession(partialParams: ToOptional<{
      [K in keyof ResumeSessionRequest]: (ResumeSessionRequest)[K]
    }>): ResumeSessionResponse {
        return this.client.resumeSession(
            this.ops["ResumeSession"].apply(partialParams)
        );
    }

    invokeSendAutomationSignal(partialParams: ToOptional<{
      [K in keyof SendAutomationSignalRequest]: (SendAutomationSignalRequest)[K]
    }>): SendAutomationSignalResult {
        return this.client.sendAutomationSignal(
            this.ops["SendAutomationSignal"].apply(partialParams)
        );
    }

    invokeSendCommand(partialParams: ToOptional<{
      [K in keyof SendCommandRequest]: (SendCommandRequest)[K]
    }>): SendCommandResult {
        return this.client.sendCommand(
            this.ops["SendCommand"].apply(partialParams)
        );
    }

    invokeStartAssociationsOnce(partialParams: ToOptional<{
      [K in keyof StartAssociationsOnceRequest]: (StartAssociationsOnceRequest)[K]
    }>): StartAssociationsOnceResult {
        return this.client.startAssociationsOnce(
            this.ops["StartAssociationsOnce"].apply(partialParams)
        );
    }

    invokeStartAutomationExecution(partialParams: ToOptional<{
      [K in keyof StartAutomationExecutionRequest]: (StartAutomationExecutionRequest)[K]
    }>): StartAutomationExecutionResult {
        return this.client.startAutomationExecution(
            this.ops["StartAutomationExecution"].apply(partialParams)
        );
    }

    invokeStartChangeRequestExecution(partialParams: ToOptional<{
      [K in keyof StartChangeRequestExecutionRequest]: (StartChangeRequestExecutionRequest)[K]
    }>): StartChangeRequestExecutionResult {
        return this.client.startChangeRequestExecution(
            this.ops["StartChangeRequestExecution"].apply(partialParams)
        );
    }

    invokeStartSession(partialParams: ToOptional<{
      [K in keyof StartSessionRequest]: (StartSessionRequest)[K]
    }>): StartSessionResponse {
        return this.client.startSession(
            this.ops["StartSession"].apply(partialParams)
        );
    }

    invokeStopAutomationExecution(partialParams: ToOptional<{
      [K in keyof StopAutomationExecutionRequest]: (StopAutomationExecutionRequest)[K]
    }>): StopAutomationExecutionResult {
        return this.client.stopAutomationExecution(
            this.ops["StopAutomationExecution"].apply(partialParams)
        );
    }

    invokeTerminateSession(partialParams: ToOptional<{
      [K in keyof TerminateSessionRequest]: (TerminateSessionRequest)[K]
    }>): TerminateSessionResponse {
        return this.client.terminateSession(
            this.ops["TerminateSession"].apply(partialParams)
        );
    }

    invokeUnlabelParameterVersion(partialParams: ToOptional<{
      [K in keyof Omit<UnlabelParameterVersionRequest, "Name">]: (Omit<UnlabelParameterVersionRequest, "Name">)[K]
    }>): UnlabelParameterVersionResult {
        return this.client.unlabelParameterVersion(
            this.ops["UnlabelParameterVersion"].apply(partialParams)
        );
    }

    invokeUpdateAssociation(partialParams: ToOptional<{
      [K in keyof UpdateAssociationRequest]: (UpdateAssociationRequest)[K]
    }>): UpdateAssociationResult {
        return this.client.updateAssociation(
            this.ops["UpdateAssociation"].apply(partialParams)
        );
    }

    invokeUpdateAssociationStatus(partialParams: ToOptional<{
      [K in keyof Omit<UpdateAssociationStatusRequest, "Name">]: (Omit<UpdateAssociationStatusRequest, "Name">)[K]
    }>): UpdateAssociationStatusResult {
        return this.client.updateAssociationStatus(
            this.ops["UpdateAssociationStatus"].apply(partialParams)
        );
    }

    invokeUpdateDocument(partialParams: ToOptional<{
      [K in keyof Omit<UpdateDocumentRequest, "Name">]: (Omit<UpdateDocumentRequest, "Name">)[K]
    }>): UpdateDocumentResult {
        return this.client.updateDocument(
            this.ops["UpdateDocument"].apply(partialParams)
        );
    }

    invokeUpdateDocumentDefaultVersion(partialParams: ToOptional<{
      [K in keyof Omit<UpdateDocumentDefaultVersionRequest, "Name">]: (Omit<UpdateDocumentDefaultVersionRequest, "Name">)[K]
    }>): UpdateDocumentDefaultVersionResult {
        return this.client.updateDocumentDefaultVersion(
            this.ops["UpdateDocumentDefaultVersion"].apply(partialParams)
        );
    }

    invokeUpdateDocumentMetadata(partialParams: ToOptional<{
      [K in keyof Omit<UpdateDocumentMetadataRequest, "Name">]: (Omit<UpdateDocumentMetadataRequest, "Name">)[K]
    }>): UpdateDocumentMetadataResponse {
        return this.client.updateDocumentMetadata(
            this.ops["UpdateDocumentMetadata"].apply(partialParams)
        );
    }

    invokeUpdateMaintenanceWindow(partialParams: ToOptional<{
      [K in keyof UpdateMaintenanceWindowRequest]: (UpdateMaintenanceWindowRequest)[K]
    }>): UpdateMaintenanceWindowResult {
        return this.client.updateMaintenanceWindow(
            this.ops["UpdateMaintenanceWindow"].apply(partialParams)
        );
    }

    invokeUpdateMaintenanceWindowTarget(partialParams: ToOptional<{
      [K in keyof UpdateMaintenanceWindowTargetRequest]: (UpdateMaintenanceWindowTargetRequest)[K]
    }>): UpdateMaintenanceWindowTargetResult {
        return this.client.updateMaintenanceWindowTarget(
            this.ops["UpdateMaintenanceWindowTarget"].apply(partialParams)
        );
    }

    invokeUpdateMaintenanceWindowTask(partialParams: ToOptional<{
      [K in keyof UpdateMaintenanceWindowTaskRequest]: (UpdateMaintenanceWindowTaskRequest)[K]
    }>): UpdateMaintenanceWindowTaskResult {
        return this.client.updateMaintenanceWindowTask(
            this.ops["UpdateMaintenanceWindowTask"].apply(partialParams)
        );
    }

    invokeUpdateManagedInstanceRole(partialParams: ToOptional<{
      [K in keyof UpdateManagedInstanceRoleRequest]: (UpdateManagedInstanceRoleRequest)[K]
    }>): UpdateManagedInstanceRoleResult {
        return this.client.updateManagedInstanceRole(
            this.ops["UpdateManagedInstanceRole"].apply(partialParams)
        );
    }

    invokeUpdateOpsItem(partialParams: ToOptional<{
      [K in keyof UpdateOpsItemRequest]: (UpdateOpsItemRequest)[K]
    }>): UpdateOpsItemResponse {
        return this.client.updateOpsItem(
            this.ops["UpdateOpsItem"].apply(partialParams)
        );
    }

    invokeUpdateOpsMetadata(partialParams: ToOptional<{
      [K in keyof UpdateOpsMetadataRequest]: (UpdateOpsMetadataRequest)[K]
    }>): UpdateOpsMetadataResult {
        return this.client.updateOpsMetadata(
            this.ops["UpdateOpsMetadata"].apply(partialParams)
        );
    }

    invokeUpdatePatchBaseline(partialParams: ToOptional<{
      [K in keyof UpdatePatchBaselineRequest]: (UpdatePatchBaselineRequest)[K]
    }>): UpdatePatchBaselineResult {
        return this.client.updatePatchBaseline(
            this.ops["UpdatePatchBaseline"].apply(partialParams)
        );
    }

    invokeUpdateResourceDataSync(partialParams: ToOptional<{
      [K in keyof UpdateResourceDataSyncRequest]: (UpdateResourceDataSyncRequest)[K]
    }>): UpdateResourceDataSyncResult {
        return this.client.updateResourceDataSync(
            this.ops["UpdateResourceDataSync"].apply(partialParams)
        );
    }

    invokeUpdateServiceSetting(partialParams: ToOptional<{
      [K in keyof UpdateServiceSettingRequest]: (UpdateServiceSettingRequest)[K]
    }>): UpdateServiceSettingResult {
        return this.client.updateServiceSetting(
            this.ops["UpdateServiceSetting"].apply(partialParams)
        );
    }
}