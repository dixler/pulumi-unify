
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

export default class extends aws.ssm.Parameter {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.ssm.Parameter>) {
        super(...args)
        this.client = new awssdk.SSM()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/ssm-2014-11-06.normal.json"), this.client)
    }

    invokeAddTagsToResource(partialParams: ToOptional<{
      [K in keyof AddTagsToResourceRequest & keyof AddTagsToResourceRequest & keyof AddTagsToResourceRequest & keyof AddTagsToResourceRequest & keyof AddTagsToResourceRequest & keyof AddTagsToResourceRequest & keyof AddTagsToResourceRequest & keyof AddTagsToResourceRequest & keyof AddTagsToResourceRequest]: (AddTagsToResourceRequest & AddTagsToResourceRequest & AddTagsToResourceRequest & AddTagsToResourceRequest & AddTagsToResourceRequest & AddTagsToResourceRequest & AddTagsToResourceRequest & AddTagsToResourceRequest & AddTagsToResourceRequest)[K]
    }>): AddTagsToResourceResult {
        return this.client.addTagsToResource(
            this.ops["AddTagsToResource"].apply(partialParams)
        );
    }

    invokeAssociateOpsItemRelatedItem(partialParams: ToOptional<{
      [K in keyof AssociateOpsItemRelatedItemRequest & keyof AssociateOpsItemRelatedItemRequest & keyof AssociateOpsItemRelatedItemRequest & keyof AssociateOpsItemRelatedItemRequest & keyof AssociateOpsItemRelatedItemRequest & keyof AssociateOpsItemRelatedItemRequest & keyof AssociateOpsItemRelatedItemRequest & keyof AssociateOpsItemRelatedItemRequest & keyof AssociateOpsItemRelatedItemRequest]: (AssociateOpsItemRelatedItemRequest & AssociateOpsItemRelatedItemRequest & AssociateOpsItemRelatedItemRequest & AssociateOpsItemRelatedItemRequest & AssociateOpsItemRelatedItemRequest & AssociateOpsItemRelatedItemRequest & AssociateOpsItemRelatedItemRequest & AssociateOpsItemRelatedItemRequest & AssociateOpsItemRelatedItemRequest)[K]
    }>): AssociateOpsItemRelatedItemResponse {
        return this.client.associateOpsItemRelatedItem(
            this.ops["AssociateOpsItemRelatedItem"].apply(partialParams)
        );
    }

    invokeCancelCommand(partialParams: ToOptional<{
      [K in keyof CancelCommandRequest & keyof CancelCommandRequest & keyof CancelCommandRequest & keyof CancelCommandRequest & keyof CancelCommandRequest & keyof CancelCommandRequest & keyof CancelCommandRequest & keyof CancelCommandRequest & keyof CancelCommandRequest]: (CancelCommandRequest & CancelCommandRequest & CancelCommandRequest & CancelCommandRequest & CancelCommandRequest & CancelCommandRequest & CancelCommandRequest & CancelCommandRequest & CancelCommandRequest)[K]
    }>): CancelCommandResult {
        return this.client.cancelCommand(
            this.ops["CancelCommand"].apply(partialParams)
        );
    }

    invokeCancelMaintenanceWindowExecution(partialParams: ToOptional<{
      [K in keyof CancelMaintenanceWindowExecutionRequest & keyof CancelMaintenanceWindowExecutionRequest & keyof CancelMaintenanceWindowExecutionRequest & keyof CancelMaintenanceWindowExecutionRequest & keyof CancelMaintenanceWindowExecutionRequest & keyof CancelMaintenanceWindowExecutionRequest & keyof CancelMaintenanceWindowExecutionRequest & keyof CancelMaintenanceWindowExecutionRequest & keyof CancelMaintenanceWindowExecutionRequest]: (CancelMaintenanceWindowExecutionRequest & CancelMaintenanceWindowExecutionRequest & CancelMaintenanceWindowExecutionRequest & CancelMaintenanceWindowExecutionRequest & CancelMaintenanceWindowExecutionRequest & CancelMaintenanceWindowExecutionRequest & CancelMaintenanceWindowExecutionRequest & CancelMaintenanceWindowExecutionRequest & CancelMaintenanceWindowExecutionRequest)[K]
    }>): CancelMaintenanceWindowExecutionResult {
        return this.client.cancelMaintenanceWindowExecution(
            this.ops["CancelMaintenanceWindowExecution"].apply(partialParams)
        );
    }

    invokeCreateActivation(partialParams: ToOptional<{
      [K in keyof CreateActivationRequest & keyof CreateActivationRequest & keyof CreateActivationRequest & keyof CreateActivationRequest & keyof CreateActivationRequest & keyof CreateActivationRequest & keyof CreateActivationRequest & keyof CreateActivationRequest & keyof CreateActivationRequest]: (CreateActivationRequest & CreateActivationRequest & CreateActivationRequest & CreateActivationRequest & CreateActivationRequest & CreateActivationRequest & CreateActivationRequest & CreateActivationRequest & CreateActivationRequest)[K]
    }>): CreateActivationResult {
        return this.client.createActivation(
            this.ops["CreateActivation"].apply(partialParams)
        );
    }

    invokeCreateAssociation(partialParams: ToOptional<{
      [K in keyof CreateAssociationRequest & keyof CreateAssociationRequest & keyof CreateAssociationRequest & keyof CreateAssociationRequest & keyof CreateAssociationRequest & keyof CreateAssociationRequest & keyof CreateAssociationRequest & keyof CreateAssociationRequest & keyof CreateAssociationRequest]: (CreateAssociationRequest & CreateAssociationRequest & CreateAssociationRequest & CreateAssociationRequest & CreateAssociationRequest & CreateAssociationRequest & CreateAssociationRequest & CreateAssociationRequest & CreateAssociationRequest)[K]
    }>): CreateAssociationResult {
        return this.client.createAssociation(
            this.ops["CreateAssociation"].apply(partialParams)
        );
    }

    invokeCreateAssociationBatch(partialParams: ToOptional<{
      [K in keyof CreateAssociationBatchRequest & keyof CreateAssociationBatchRequest & keyof CreateAssociationBatchRequest & keyof CreateAssociationBatchRequest & keyof CreateAssociationBatchRequest & keyof CreateAssociationBatchRequest & keyof CreateAssociationBatchRequest & keyof CreateAssociationBatchRequest & keyof CreateAssociationBatchRequest]: (CreateAssociationBatchRequest & CreateAssociationBatchRequest & CreateAssociationBatchRequest & CreateAssociationBatchRequest & CreateAssociationBatchRequest & CreateAssociationBatchRequest & CreateAssociationBatchRequest & CreateAssociationBatchRequest & CreateAssociationBatchRequest)[K]
    }>): CreateAssociationBatchResult {
        return this.client.createAssociationBatch(
            this.ops["CreateAssociationBatch"].apply(partialParams)
        );
    }

    invokeCreateDocument(partialParams: ToOptional<{
      [K in keyof CreateDocumentRequest & keyof CreateDocumentRequest & keyof CreateDocumentRequest & keyof CreateDocumentRequest & keyof CreateDocumentRequest & keyof CreateDocumentRequest & keyof CreateDocumentRequest & keyof CreateDocumentRequest & keyof CreateDocumentRequest]: (CreateDocumentRequest & CreateDocumentRequest & CreateDocumentRequest & CreateDocumentRequest & CreateDocumentRequest & CreateDocumentRequest & CreateDocumentRequest & CreateDocumentRequest & CreateDocumentRequest)[K]
    }>): CreateDocumentResult {
        return this.client.createDocument(
            this.ops["CreateDocument"].apply(partialParams)
        );
    }

    invokeCreateMaintenanceWindow(partialParams: ToOptional<{
      [K in keyof CreateMaintenanceWindowRequest & keyof CreateMaintenanceWindowRequest & keyof CreateMaintenanceWindowRequest & keyof CreateMaintenanceWindowRequest & keyof CreateMaintenanceWindowRequest & keyof CreateMaintenanceWindowRequest & keyof CreateMaintenanceWindowRequest & keyof CreateMaintenanceWindowRequest & keyof CreateMaintenanceWindowRequest]: (CreateMaintenanceWindowRequest & CreateMaintenanceWindowRequest & CreateMaintenanceWindowRequest & CreateMaintenanceWindowRequest & CreateMaintenanceWindowRequest & CreateMaintenanceWindowRequest & CreateMaintenanceWindowRequest & CreateMaintenanceWindowRequest & CreateMaintenanceWindowRequest)[K]
    }>): CreateMaintenanceWindowResult {
        return this.client.createMaintenanceWindow(
            this.ops["CreateMaintenanceWindow"].apply(partialParams)
        );
    }

    invokeCreateOpsItem(partialParams: ToOptional<{
      [K in keyof CreateOpsItemRequest & keyof CreateOpsItemRequest & keyof CreateOpsItemRequest & keyof CreateOpsItemRequest & keyof CreateOpsItemRequest & keyof CreateOpsItemRequest & keyof CreateOpsItemRequest & keyof CreateOpsItemRequest & keyof CreateOpsItemRequest]: (CreateOpsItemRequest & CreateOpsItemRequest & CreateOpsItemRequest & CreateOpsItemRequest & CreateOpsItemRequest & CreateOpsItemRequest & CreateOpsItemRequest & CreateOpsItemRequest & CreateOpsItemRequest)[K]
    }>): CreateOpsItemResponse {
        return this.client.createOpsItem(
            this.ops["CreateOpsItem"].apply(partialParams)
        );
    }

    invokeCreateOpsMetadata(partialParams: ToOptional<{
      [K in keyof CreateOpsMetadataRequest & keyof CreateOpsMetadataRequest & keyof CreateOpsMetadataRequest & keyof CreateOpsMetadataRequest & keyof CreateOpsMetadataRequest & keyof CreateOpsMetadataRequest & keyof CreateOpsMetadataRequest & keyof CreateOpsMetadataRequest & keyof CreateOpsMetadataRequest]: (CreateOpsMetadataRequest & CreateOpsMetadataRequest & CreateOpsMetadataRequest & CreateOpsMetadataRequest & CreateOpsMetadataRequest & CreateOpsMetadataRequest & CreateOpsMetadataRequest & CreateOpsMetadataRequest & CreateOpsMetadataRequest)[K]
    }>): CreateOpsMetadataResult {
        return this.client.createOpsMetadata(
            this.ops["CreateOpsMetadata"].apply(partialParams)
        );
    }

    invokeCreatePatchBaseline(partialParams: ToOptional<{
      [K in keyof CreatePatchBaselineRequest & keyof CreatePatchBaselineRequest & keyof CreatePatchBaselineRequest & keyof CreatePatchBaselineRequest & keyof CreatePatchBaselineRequest & keyof Omit<CreatePatchBaselineRequest, "Name"> & keyof CreatePatchBaselineRequest & keyof CreatePatchBaselineRequest & keyof CreatePatchBaselineRequest]: (CreatePatchBaselineRequest & CreatePatchBaselineRequest & CreatePatchBaselineRequest & CreatePatchBaselineRequest & CreatePatchBaselineRequest & Omit<CreatePatchBaselineRequest, "Name"> & CreatePatchBaselineRequest & CreatePatchBaselineRequest & CreatePatchBaselineRequest)[K]
    }>): CreatePatchBaselineResult {
        return this.client.createPatchBaseline(
            this.ops["CreatePatchBaseline"].apply(partialParams)
        );
    }

    invokeCreateResourceDataSync(partialParams: ToOptional<{
      [K in keyof CreateResourceDataSyncRequest & keyof CreateResourceDataSyncRequest & keyof CreateResourceDataSyncRequest & keyof CreateResourceDataSyncRequest & keyof CreateResourceDataSyncRequest & keyof CreateResourceDataSyncRequest & keyof CreateResourceDataSyncRequest & keyof CreateResourceDataSyncRequest & keyof CreateResourceDataSyncRequest]: (CreateResourceDataSyncRequest & CreateResourceDataSyncRequest & CreateResourceDataSyncRequest & CreateResourceDataSyncRequest & CreateResourceDataSyncRequest & CreateResourceDataSyncRequest & CreateResourceDataSyncRequest & CreateResourceDataSyncRequest & CreateResourceDataSyncRequest)[K]
    }>): CreateResourceDataSyncResult {
        return this.client.createResourceDataSync(
            this.ops["CreateResourceDataSync"].apply(partialParams)
        );
    }

    invokeDeleteActivation(partialParams: ToOptional<{
      [K in keyof DeleteActivationRequest & keyof DeleteActivationRequest & keyof DeleteActivationRequest & keyof DeleteActivationRequest & keyof DeleteActivationRequest & keyof DeleteActivationRequest & keyof DeleteActivationRequest & keyof DeleteActivationRequest & keyof DeleteActivationRequest]: (DeleteActivationRequest & DeleteActivationRequest & DeleteActivationRequest & DeleteActivationRequest & DeleteActivationRequest & DeleteActivationRequest & DeleteActivationRequest & DeleteActivationRequest & DeleteActivationRequest)[K]
    }>): DeleteActivationResult {
        return this.client.deleteActivation(
            this.ops["DeleteActivation"].apply(partialParams)
        );
    }

    invokeDeleteDocument(partialParams: ToOptional<{
      [K in keyof DeleteDocumentRequest & keyof DeleteDocumentRequest & keyof DeleteDocumentRequest & keyof DeleteDocumentRequest & keyof DeleteDocumentRequest & keyof DeleteDocumentRequest & keyof DeleteDocumentRequest & keyof DeleteDocumentRequest & keyof DeleteDocumentRequest]: (DeleteDocumentRequest & DeleteDocumentRequest & DeleteDocumentRequest & DeleteDocumentRequest & DeleteDocumentRequest & DeleteDocumentRequest & DeleteDocumentRequest & DeleteDocumentRequest & DeleteDocumentRequest)[K]
    }>): DeleteDocumentResult {
        return this.client.deleteDocument(
            this.ops["DeleteDocument"].apply(partialParams)
        );
    }

    invokeDeleteInventory(partialParams: ToOptional<{
      [K in keyof DeleteInventoryRequest & keyof DeleteInventoryRequest & keyof DeleteInventoryRequest & keyof DeleteInventoryRequest & keyof DeleteInventoryRequest & keyof DeleteInventoryRequest & keyof DeleteInventoryRequest & keyof DeleteInventoryRequest & keyof DeleteInventoryRequest]: (DeleteInventoryRequest & DeleteInventoryRequest & DeleteInventoryRequest & DeleteInventoryRequest & DeleteInventoryRequest & DeleteInventoryRequest & DeleteInventoryRequest & DeleteInventoryRequest & DeleteInventoryRequest)[K]
    }>): DeleteInventoryResult {
        return this.client.deleteInventory(
            this.ops["DeleteInventory"].apply(partialParams)
        );
    }

    invokeDeleteMaintenanceWindow(partialParams: ToOptional<{
      [K in keyof DeleteMaintenanceWindowRequest & keyof DeleteMaintenanceWindowRequest & keyof DeleteMaintenanceWindowRequest & keyof DeleteMaintenanceWindowRequest & keyof DeleteMaintenanceWindowRequest & keyof DeleteMaintenanceWindowRequest & keyof DeleteMaintenanceWindowRequest & keyof DeleteMaintenanceWindowRequest & keyof DeleteMaintenanceWindowRequest]: (DeleteMaintenanceWindowRequest & DeleteMaintenanceWindowRequest & DeleteMaintenanceWindowRequest & DeleteMaintenanceWindowRequest & DeleteMaintenanceWindowRequest & DeleteMaintenanceWindowRequest & DeleteMaintenanceWindowRequest & DeleteMaintenanceWindowRequest & DeleteMaintenanceWindowRequest)[K]
    }>): DeleteMaintenanceWindowResult {
        return this.client.deleteMaintenanceWindow(
            this.ops["DeleteMaintenanceWindow"].apply(partialParams)
        );
    }

    invokeDeleteOpsMetadata(partialParams: ToOptional<{
      [K in keyof DeleteOpsMetadataRequest & keyof DeleteOpsMetadataRequest & keyof DeleteOpsMetadataRequest & keyof DeleteOpsMetadataRequest & keyof DeleteOpsMetadataRequest & keyof DeleteOpsMetadataRequest & keyof DeleteOpsMetadataRequest & keyof DeleteOpsMetadataRequest & keyof DeleteOpsMetadataRequest]: (DeleteOpsMetadataRequest & DeleteOpsMetadataRequest & DeleteOpsMetadataRequest & DeleteOpsMetadataRequest & DeleteOpsMetadataRequest & DeleteOpsMetadataRequest & DeleteOpsMetadataRequest & DeleteOpsMetadataRequest & DeleteOpsMetadataRequest)[K]
    }>): DeleteOpsMetadataResult {
        return this.client.deleteOpsMetadata(
            this.ops["DeleteOpsMetadata"].apply(partialParams)
        );
    }

    invokeDeleteParameter(partialParams: ToOptional<{
      [K in keyof DeleteParameterRequest & keyof DeleteParameterRequest & keyof DeleteParameterRequest & keyof DeleteParameterRequest & keyof DeleteParameterRequest & keyof DeleteParameterRequest & keyof DeleteParameterRequest & keyof DeleteParameterRequest & keyof DeleteParameterRequest]: (DeleteParameterRequest & DeleteParameterRequest & DeleteParameterRequest & DeleteParameterRequest & DeleteParameterRequest & DeleteParameterRequest & DeleteParameterRequest & DeleteParameterRequest & DeleteParameterRequest)[K]
    }>): DeleteParameterResult {
        return this.client.deleteParameter(
            this.ops["DeleteParameter"].apply(partialParams)
        );
    }

    invokeDeleteParameters(partialParams: ToOptional<{
      [K in keyof DeleteParametersRequest & keyof DeleteParametersRequest & keyof DeleteParametersRequest & keyof DeleteParametersRequest & keyof DeleteParametersRequest & keyof DeleteParametersRequest & keyof DeleteParametersRequest & keyof DeleteParametersRequest & keyof DeleteParametersRequest]: (DeleteParametersRequest & DeleteParametersRequest & DeleteParametersRequest & DeleteParametersRequest & DeleteParametersRequest & DeleteParametersRequest & DeleteParametersRequest & DeleteParametersRequest & DeleteParametersRequest)[K]
    }>): DeleteParametersResult {
        return this.client.deleteParameters(
            this.ops["DeleteParameters"].apply(partialParams)
        );
    }

    invokeDeletePatchBaseline(partialParams: ToOptional<{
      [K in keyof DeletePatchBaselineRequest & keyof DeletePatchBaselineRequest & keyof DeletePatchBaselineRequest & keyof DeletePatchBaselineRequest & keyof DeletePatchBaselineRequest & keyof DeletePatchBaselineRequest & keyof DeletePatchBaselineRequest & keyof DeletePatchBaselineRequest & keyof DeletePatchBaselineRequest]: (DeletePatchBaselineRequest & DeletePatchBaselineRequest & DeletePatchBaselineRequest & DeletePatchBaselineRequest & DeletePatchBaselineRequest & DeletePatchBaselineRequest & DeletePatchBaselineRequest & DeletePatchBaselineRequest & DeletePatchBaselineRequest)[K]
    }>): DeletePatchBaselineResult {
        return this.client.deletePatchBaseline(
            this.ops["DeletePatchBaseline"].apply(partialParams)
        );
    }

    invokeDeleteResourceDataSync(partialParams: ToOptional<{
      [K in keyof DeleteResourceDataSyncRequest & keyof DeleteResourceDataSyncRequest & keyof DeleteResourceDataSyncRequest & keyof DeleteResourceDataSyncRequest & keyof DeleteResourceDataSyncRequest & keyof DeleteResourceDataSyncRequest & keyof DeleteResourceDataSyncRequest & keyof DeleteResourceDataSyncRequest & keyof DeleteResourceDataSyncRequest]: (DeleteResourceDataSyncRequest & DeleteResourceDataSyncRequest & DeleteResourceDataSyncRequest & DeleteResourceDataSyncRequest & DeleteResourceDataSyncRequest & DeleteResourceDataSyncRequest & DeleteResourceDataSyncRequest & DeleteResourceDataSyncRequest & DeleteResourceDataSyncRequest)[K]
    }>): DeleteResourceDataSyncResult {
        return this.client.deleteResourceDataSync(
            this.ops["DeleteResourceDataSync"].apply(partialParams)
        );
    }

    invokeDeregisterManagedInstance(partialParams: ToOptional<{
      [K in keyof DeregisterManagedInstanceRequest & keyof DeregisterManagedInstanceRequest & keyof DeregisterManagedInstanceRequest & keyof DeregisterManagedInstanceRequest & keyof DeregisterManagedInstanceRequest & keyof DeregisterManagedInstanceRequest & keyof DeregisterManagedInstanceRequest & keyof DeregisterManagedInstanceRequest & keyof DeregisterManagedInstanceRequest]: (DeregisterManagedInstanceRequest & DeregisterManagedInstanceRequest & DeregisterManagedInstanceRequest & DeregisterManagedInstanceRequest & DeregisterManagedInstanceRequest & DeregisterManagedInstanceRequest & DeregisterManagedInstanceRequest & DeregisterManagedInstanceRequest & DeregisterManagedInstanceRequest)[K]
    }>): DeregisterManagedInstanceResult {
        return this.client.deregisterManagedInstance(
            this.ops["DeregisterManagedInstance"].apply(partialParams)
        );
    }

    invokeDeregisterPatchBaselineForPatchGroup(partialParams: ToOptional<{
      [K in keyof DeregisterPatchBaselineForPatchGroupRequest & keyof DeregisterPatchBaselineForPatchGroupRequest & keyof DeregisterPatchBaselineForPatchGroupRequest & keyof DeregisterPatchBaselineForPatchGroupRequest & keyof DeregisterPatchBaselineForPatchGroupRequest & keyof DeregisterPatchBaselineForPatchGroupRequest & keyof DeregisterPatchBaselineForPatchGroupRequest & keyof DeregisterPatchBaselineForPatchGroupRequest & keyof DeregisterPatchBaselineForPatchGroupRequest]: (DeregisterPatchBaselineForPatchGroupRequest & DeregisterPatchBaselineForPatchGroupRequest & DeregisterPatchBaselineForPatchGroupRequest & DeregisterPatchBaselineForPatchGroupRequest & DeregisterPatchBaselineForPatchGroupRequest & DeregisterPatchBaselineForPatchGroupRequest & DeregisterPatchBaselineForPatchGroupRequest & DeregisterPatchBaselineForPatchGroupRequest & DeregisterPatchBaselineForPatchGroupRequest)[K]
    }>): DeregisterPatchBaselineForPatchGroupResult {
        return this.client.deregisterPatchBaselineForPatchGroup(
            this.ops["DeregisterPatchBaselineForPatchGroup"].apply(partialParams)
        );
    }

    invokeDeregisterTargetFromMaintenanceWindow(partialParams: ToOptional<{
      [K in keyof DeregisterTargetFromMaintenanceWindowRequest & keyof DeregisterTargetFromMaintenanceWindowRequest & keyof DeregisterTargetFromMaintenanceWindowRequest & keyof DeregisterTargetFromMaintenanceWindowRequest & keyof DeregisterTargetFromMaintenanceWindowRequest & keyof DeregisterTargetFromMaintenanceWindowRequest & keyof DeregisterTargetFromMaintenanceWindowRequest & keyof DeregisterTargetFromMaintenanceWindowRequest & keyof DeregisterTargetFromMaintenanceWindowRequest]: (DeregisterTargetFromMaintenanceWindowRequest & DeregisterTargetFromMaintenanceWindowRequest & DeregisterTargetFromMaintenanceWindowRequest & DeregisterTargetFromMaintenanceWindowRequest & DeregisterTargetFromMaintenanceWindowRequest & DeregisterTargetFromMaintenanceWindowRequest & DeregisterTargetFromMaintenanceWindowRequest & DeregisterTargetFromMaintenanceWindowRequest & DeregisterTargetFromMaintenanceWindowRequest)[K]
    }>): DeregisterTargetFromMaintenanceWindowResult {
        return this.client.deregisterTargetFromMaintenanceWindow(
            this.ops["DeregisterTargetFromMaintenanceWindow"].apply(partialParams)
        );
    }

    invokeDeregisterTaskFromMaintenanceWindow(partialParams: ToOptional<{
      [K in keyof DeregisterTaskFromMaintenanceWindowRequest & keyof DeregisterTaskFromMaintenanceWindowRequest & keyof DeregisterTaskFromMaintenanceWindowRequest & keyof DeregisterTaskFromMaintenanceWindowRequest & keyof DeregisterTaskFromMaintenanceWindowRequest & keyof DeregisterTaskFromMaintenanceWindowRequest & keyof DeregisterTaskFromMaintenanceWindowRequest & keyof DeregisterTaskFromMaintenanceWindowRequest & keyof DeregisterTaskFromMaintenanceWindowRequest]: (DeregisterTaskFromMaintenanceWindowRequest & DeregisterTaskFromMaintenanceWindowRequest & DeregisterTaskFromMaintenanceWindowRequest & DeregisterTaskFromMaintenanceWindowRequest & DeregisterTaskFromMaintenanceWindowRequest & DeregisterTaskFromMaintenanceWindowRequest & DeregisterTaskFromMaintenanceWindowRequest & DeregisterTaskFromMaintenanceWindowRequest & DeregisterTaskFromMaintenanceWindowRequest)[K]
    }>): DeregisterTaskFromMaintenanceWindowResult {
        return this.client.deregisterTaskFromMaintenanceWindow(
            this.ops["DeregisterTaskFromMaintenanceWindow"].apply(partialParams)
        );
    }

    invokeDescribeAssociationExecutionTargets(partialParams: ToOptional<{
      [K in keyof DescribeAssociationExecutionTargetsRequest & keyof DescribeAssociationExecutionTargetsRequest & keyof DescribeAssociationExecutionTargetsRequest & keyof DescribeAssociationExecutionTargetsRequest & keyof DescribeAssociationExecutionTargetsRequest & keyof DescribeAssociationExecutionTargetsRequest & keyof DescribeAssociationExecutionTargetsRequest & keyof DescribeAssociationExecutionTargetsRequest & keyof DescribeAssociationExecutionTargetsRequest]: (DescribeAssociationExecutionTargetsRequest & DescribeAssociationExecutionTargetsRequest & DescribeAssociationExecutionTargetsRequest & DescribeAssociationExecutionTargetsRequest & DescribeAssociationExecutionTargetsRequest & DescribeAssociationExecutionTargetsRequest & DescribeAssociationExecutionTargetsRequest & DescribeAssociationExecutionTargetsRequest & DescribeAssociationExecutionTargetsRequest)[K]
    }>): DescribeAssociationExecutionTargetsResult {
        return this.client.describeAssociationExecutionTargets(
            this.ops["DescribeAssociationExecutionTargets"].apply(partialParams)
        );
    }

    invokeDescribeAssociationExecutions(partialParams: ToOptional<{
      [K in keyof DescribeAssociationExecutionsRequest & keyof DescribeAssociationExecutionsRequest & keyof DescribeAssociationExecutionsRequest & keyof DescribeAssociationExecutionsRequest & keyof DescribeAssociationExecutionsRequest & keyof DescribeAssociationExecutionsRequest & keyof DescribeAssociationExecutionsRequest & keyof DescribeAssociationExecutionsRequest & keyof DescribeAssociationExecutionsRequest]: (DescribeAssociationExecutionsRequest & DescribeAssociationExecutionsRequest & DescribeAssociationExecutionsRequest & DescribeAssociationExecutionsRequest & DescribeAssociationExecutionsRequest & DescribeAssociationExecutionsRequest & DescribeAssociationExecutionsRequest & DescribeAssociationExecutionsRequest & DescribeAssociationExecutionsRequest)[K]
    }>): DescribeAssociationExecutionsResult {
        return this.client.describeAssociationExecutions(
            this.ops["DescribeAssociationExecutions"].apply(partialParams)
        );
    }

    invokeDescribeAutomationStepExecutions(partialParams: ToOptional<{
      [K in keyof DescribeAutomationStepExecutionsRequest & keyof DescribeAutomationStepExecutionsRequest & keyof DescribeAutomationStepExecutionsRequest & keyof DescribeAutomationStepExecutionsRequest & keyof DescribeAutomationStepExecutionsRequest & keyof DescribeAutomationStepExecutionsRequest & keyof DescribeAutomationStepExecutionsRequest & keyof DescribeAutomationStepExecutionsRequest & keyof DescribeAutomationStepExecutionsRequest]: (DescribeAutomationStepExecutionsRequest & DescribeAutomationStepExecutionsRequest & DescribeAutomationStepExecutionsRequest & DescribeAutomationStepExecutionsRequest & DescribeAutomationStepExecutionsRequest & DescribeAutomationStepExecutionsRequest & DescribeAutomationStepExecutionsRequest & DescribeAutomationStepExecutionsRequest & DescribeAutomationStepExecutionsRequest)[K]
    }>): DescribeAutomationStepExecutionsResult {
        return this.client.describeAutomationStepExecutions(
            this.ops["DescribeAutomationStepExecutions"].apply(partialParams)
        );
    }

    invokeDescribeDocument(partialParams: ToOptional<{
      [K in keyof DescribeDocumentRequest & keyof DescribeDocumentRequest & keyof DescribeDocumentRequest & keyof DescribeDocumentRequest & keyof DescribeDocumentRequest & keyof DescribeDocumentRequest & keyof DescribeDocumentRequest & keyof DescribeDocumentRequest & keyof DescribeDocumentRequest]: (DescribeDocumentRequest & DescribeDocumentRequest & DescribeDocumentRequest & DescribeDocumentRequest & DescribeDocumentRequest & DescribeDocumentRequest & DescribeDocumentRequest & DescribeDocumentRequest & DescribeDocumentRequest)[K]
    }>): DescribeDocumentResult {
        return this.client.describeDocument(
            this.ops["DescribeDocument"].apply(partialParams)
        );
    }

    invokeDescribeDocumentPermission(partialParams: ToOptional<{
      [K in keyof DescribeDocumentPermissionRequest & keyof DescribeDocumentPermissionRequest & keyof DescribeDocumentPermissionRequest & keyof DescribeDocumentPermissionRequest & keyof DescribeDocumentPermissionRequest & keyof DescribeDocumentPermissionRequest & keyof DescribeDocumentPermissionRequest & keyof DescribeDocumentPermissionRequest & keyof DescribeDocumentPermissionRequest]: (DescribeDocumentPermissionRequest & DescribeDocumentPermissionRequest & DescribeDocumentPermissionRequest & DescribeDocumentPermissionRequest & DescribeDocumentPermissionRequest & DescribeDocumentPermissionRequest & DescribeDocumentPermissionRequest & DescribeDocumentPermissionRequest & DescribeDocumentPermissionRequest)[K]
    }>): DescribeDocumentPermissionResponse {
        return this.client.describeDocumentPermission(
            this.ops["DescribeDocumentPermission"].apply(partialParams)
        );
    }

    invokeDescribeEffectiveInstanceAssociations(partialParams: ToOptional<{
      [K in keyof DescribeEffectiveInstanceAssociationsRequest & keyof DescribeEffectiveInstanceAssociationsRequest & keyof DescribeEffectiveInstanceAssociationsRequest & keyof DescribeEffectiveInstanceAssociationsRequest & keyof DescribeEffectiveInstanceAssociationsRequest & keyof DescribeEffectiveInstanceAssociationsRequest & keyof DescribeEffectiveInstanceAssociationsRequest & keyof DescribeEffectiveInstanceAssociationsRequest & keyof DescribeEffectiveInstanceAssociationsRequest]: (DescribeEffectiveInstanceAssociationsRequest & DescribeEffectiveInstanceAssociationsRequest & DescribeEffectiveInstanceAssociationsRequest & DescribeEffectiveInstanceAssociationsRequest & DescribeEffectiveInstanceAssociationsRequest & DescribeEffectiveInstanceAssociationsRequest & DescribeEffectiveInstanceAssociationsRequest & DescribeEffectiveInstanceAssociationsRequest & DescribeEffectiveInstanceAssociationsRequest)[K]
    }>): DescribeEffectiveInstanceAssociationsResult {
        return this.client.describeEffectiveInstanceAssociations(
            this.ops["DescribeEffectiveInstanceAssociations"].apply(partialParams)
        );
    }

    invokeDescribeEffectivePatchesForPatchBaseline(partialParams: ToOptional<{
      [K in keyof DescribeEffectivePatchesForPatchBaselineRequest & keyof DescribeEffectivePatchesForPatchBaselineRequest & keyof DescribeEffectivePatchesForPatchBaselineRequest & keyof DescribeEffectivePatchesForPatchBaselineRequest & keyof DescribeEffectivePatchesForPatchBaselineRequest & keyof DescribeEffectivePatchesForPatchBaselineRequest & keyof DescribeEffectivePatchesForPatchBaselineRequest & keyof DescribeEffectivePatchesForPatchBaselineRequest & keyof DescribeEffectivePatchesForPatchBaselineRequest]: (DescribeEffectivePatchesForPatchBaselineRequest & DescribeEffectivePatchesForPatchBaselineRequest & DescribeEffectivePatchesForPatchBaselineRequest & DescribeEffectivePatchesForPatchBaselineRequest & DescribeEffectivePatchesForPatchBaselineRequest & DescribeEffectivePatchesForPatchBaselineRequest & DescribeEffectivePatchesForPatchBaselineRequest & DescribeEffectivePatchesForPatchBaselineRequest & DescribeEffectivePatchesForPatchBaselineRequest)[K]
    }>): DescribeEffectivePatchesForPatchBaselineResult {
        return this.client.describeEffectivePatchesForPatchBaseline(
            this.ops["DescribeEffectivePatchesForPatchBaseline"].apply(partialParams)
        );
    }

    invokeDescribeInstanceAssociationsStatus(partialParams: ToOptional<{
      [K in keyof DescribeInstanceAssociationsStatusRequest & keyof DescribeInstanceAssociationsStatusRequest & keyof DescribeInstanceAssociationsStatusRequest & keyof DescribeInstanceAssociationsStatusRequest & keyof DescribeInstanceAssociationsStatusRequest & keyof DescribeInstanceAssociationsStatusRequest & keyof DescribeInstanceAssociationsStatusRequest & keyof DescribeInstanceAssociationsStatusRequest & keyof DescribeInstanceAssociationsStatusRequest]: (DescribeInstanceAssociationsStatusRequest & DescribeInstanceAssociationsStatusRequest & DescribeInstanceAssociationsStatusRequest & DescribeInstanceAssociationsStatusRequest & DescribeInstanceAssociationsStatusRequest & DescribeInstanceAssociationsStatusRequest & DescribeInstanceAssociationsStatusRequest & DescribeInstanceAssociationsStatusRequest & DescribeInstanceAssociationsStatusRequest)[K]
    }>): DescribeInstanceAssociationsStatusResult {
        return this.client.describeInstanceAssociationsStatus(
            this.ops["DescribeInstanceAssociationsStatus"].apply(partialParams)
        );
    }

    invokeDescribeInstancePatchStates(partialParams: ToOptional<{
      [K in keyof DescribeInstancePatchStatesRequest & keyof DescribeInstancePatchStatesRequest & keyof DescribeInstancePatchStatesRequest & keyof DescribeInstancePatchStatesRequest & keyof DescribeInstancePatchStatesRequest & keyof DescribeInstancePatchStatesRequest & keyof DescribeInstancePatchStatesRequest & keyof DescribeInstancePatchStatesRequest & keyof DescribeInstancePatchStatesRequest]: (DescribeInstancePatchStatesRequest & DescribeInstancePatchStatesRequest & DescribeInstancePatchStatesRequest & DescribeInstancePatchStatesRequest & DescribeInstancePatchStatesRequest & DescribeInstancePatchStatesRequest & DescribeInstancePatchStatesRequest & DescribeInstancePatchStatesRequest & DescribeInstancePatchStatesRequest)[K]
    }>): DescribeInstancePatchStatesResult {
        return this.client.describeInstancePatchStates(
            this.ops["DescribeInstancePatchStates"].apply(partialParams)
        );
    }

    invokeDescribeInstancePatchStatesForPatchGroup(partialParams: ToOptional<{
      [K in keyof DescribeInstancePatchStatesForPatchGroupRequest & keyof DescribeInstancePatchStatesForPatchGroupRequest & keyof DescribeInstancePatchStatesForPatchGroupRequest & keyof DescribeInstancePatchStatesForPatchGroupRequest & keyof DescribeInstancePatchStatesForPatchGroupRequest & keyof DescribeInstancePatchStatesForPatchGroupRequest & keyof DescribeInstancePatchStatesForPatchGroupRequest & keyof DescribeInstancePatchStatesForPatchGroupRequest & keyof DescribeInstancePatchStatesForPatchGroupRequest]: (DescribeInstancePatchStatesForPatchGroupRequest & DescribeInstancePatchStatesForPatchGroupRequest & DescribeInstancePatchStatesForPatchGroupRequest & DescribeInstancePatchStatesForPatchGroupRequest & DescribeInstancePatchStatesForPatchGroupRequest & DescribeInstancePatchStatesForPatchGroupRequest & DescribeInstancePatchStatesForPatchGroupRequest & DescribeInstancePatchStatesForPatchGroupRequest & DescribeInstancePatchStatesForPatchGroupRequest)[K]
    }>): DescribeInstancePatchStatesForPatchGroupResult {
        return this.client.describeInstancePatchStatesForPatchGroup(
            this.ops["DescribeInstancePatchStatesForPatchGroup"].apply(partialParams)
        );
    }

    invokeDescribeInstancePatches(partialParams: ToOptional<{
      [K in keyof DescribeInstancePatchesRequest & keyof DescribeInstancePatchesRequest & keyof DescribeInstancePatchesRequest & keyof DescribeInstancePatchesRequest & keyof DescribeInstancePatchesRequest & keyof DescribeInstancePatchesRequest & keyof DescribeInstancePatchesRequest & keyof DescribeInstancePatchesRequest & keyof DescribeInstancePatchesRequest]: (DescribeInstancePatchesRequest & DescribeInstancePatchesRequest & DescribeInstancePatchesRequest & DescribeInstancePatchesRequest & DescribeInstancePatchesRequest & DescribeInstancePatchesRequest & DescribeInstancePatchesRequest & DescribeInstancePatchesRequest & DescribeInstancePatchesRequest)[K]
    }>): DescribeInstancePatchesResult {
        return this.client.describeInstancePatches(
            this.ops["DescribeInstancePatches"].apply(partialParams)
        );
    }

    invokeDescribeMaintenanceWindowExecutionTaskInvocations(partialParams: ToOptional<{
      [K in keyof DescribeMaintenanceWindowExecutionTaskInvocationsRequest & keyof DescribeMaintenanceWindowExecutionTaskInvocationsRequest & keyof DescribeMaintenanceWindowExecutionTaskInvocationsRequest & keyof DescribeMaintenanceWindowExecutionTaskInvocationsRequest & keyof DescribeMaintenanceWindowExecutionTaskInvocationsRequest & keyof DescribeMaintenanceWindowExecutionTaskInvocationsRequest & keyof DescribeMaintenanceWindowExecutionTaskInvocationsRequest & keyof DescribeMaintenanceWindowExecutionTaskInvocationsRequest & keyof DescribeMaintenanceWindowExecutionTaskInvocationsRequest]: (DescribeMaintenanceWindowExecutionTaskInvocationsRequest & DescribeMaintenanceWindowExecutionTaskInvocationsRequest & DescribeMaintenanceWindowExecutionTaskInvocationsRequest & DescribeMaintenanceWindowExecutionTaskInvocationsRequest & DescribeMaintenanceWindowExecutionTaskInvocationsRequest & DescribeMaintenanceWindowExecutionTaskInvocationsRequest & DescribeMaintenanceWindowExecutionTaskInvocationsRequest & DescribeMaintenanceWindowExecutionTaskInvocationsRequest & DescribeMaintenanceWindowExecutionTaskInvocationsRequest)[K]
    }>): DescribeMaintenanceWindowExecutionTaskInvocationsResult {
        return this.client.describeMaintenanceWindowExecutionTaskInvocations(
            this.ops["DescribeMaintenanceWindowExecutionTaskInvocations"].apply(partialParams)
        );
    }

    invokeDescribeMaintenanceWindowExecutionTasks(partialParams: ToOptional<{
      [K in keyof DescribeMaintenanceWindowExecutionTasksRequest & keyof DescribeMaintenanceWindowExecutionTasksRequest & keyof DescribeMaintenanceWindowExecutionTasksRequest & keyof DescribeMaintenanceWindowExecutionTasksRequest & keyof DescribeMaintenanceWindowExecutionTasksRequest & keyof DescribeMaintenanceWindowExecutionTasksRequest & keyof DescribeMaintenanceWindowExecutionTasksRequest & keyof DescribeMaintenanceWindowExecutionTasksRequest & keyof DescribeMaintenanceWindowExecutionTasksRequest]: (DescribeMaintenanceWindowExecutionTasksRequest & DescribeMaintenanceWindowExecutionTasksRequest & DescribeMaintenanceWindowExecutionTasksRequest & DescribeMaintenanceWindowExecutionTasksRequest & DescribeMaintenanceWindowExecutionTasksRequest & DescribeMaintenanceWindowExecutionTasksRequest & DescribeMaintenanceWindowExecutionTasksRequest & DescribeMaintenanceWindowExecutionTasksRequest & DescribeMaintenanceWindowExecutionTasksRequest)[K]
    }>): DescribeMaintenanceWindowExecutionTasksResult {
        return this.client.describeMaintenanceWindowExecutionTasks(
            this.ops["DescribeMaintenanceWindowExecutionTasks"].apply(partialParams)
        );
    }

    invokeDescribeMaintenanceWindowExecutions(partialParams: ToOptional<{
      [K in keyof DescribeMaintenanceWindowExecutionsRequest & keyof DescribeMaintenanceWindowExecutionsRequest & keyof DescribeMaintenanceWindowExecutionsRequest & keyof DescribeMaintenanceWindowExecutionsRequest & keyof DescribeMaintenanceWindowExecutionsRequest & keyof DescribeMaintenanceWindowExecutionsRequest & keyof DescribeMaintenanceWindowExecutionsRequest & keyof DescribeMaintenanceWindowExecutionsRequest & keyof DescribeMaintenanceWindowExecutionsRequest]: (DescribeMaintenanceWindowExecutionsRequest & DescribeMaintenanceWindowExecutionsRequest & DescribeMaintenanceWindowExecutionsRequest & DescribeMaintenanceWindowExecutionsRequest & DescribeMaintenanceWindowExecutionsRequest & DescribeMaintenanceWindowExecutionsRequest & DescribeMaintenanceWindowExecutionsRequest & DescribeMaintenanceWindowExecutionsRequest & DescribeMaintenanceWindowExecutionsRequest)[K]
    }>): DescribeMaintenanceWindowExecutionsResult {
        return this.client.describeMaintenanceWindowExecutions(
            this.ops["DescribeMaintenanceWindowExecutions"].apply(partialParams)
        );
    }

    invokeDescribeMaintenanceWindowTargets(partialParams: ToOptional<{
      [K in keyof DescribeMaintenanceWindowTargetsRequest & keyof DescribeMaintenanceWindowTargetsRequest & keyof DescribeMaintenanceWindowTargetsRequest & keyof DescribeMaintenanceWindowTargetsRequest & keyof DescribeMaintenanceWindowTargetsRequest & keyof DescribeMaintenanceWindowTargetsRequest & keyof DescribeMaintenanceWindowTargetsRequest & keyof DescribeMaintenanceWindowTargetsRequest & keyof DescribeMaintenanceWindowTargetsRequest]: (DescribeMaintenanceWindowTargetsRequest & DescribeMaintenanceWindowTargetsRequest & DescribeMaintenanceWindowTargetsRequest & DescribeMaintenanceWindowTargetsRequest & DescribeMaintenanceWindowTargetsRequest & DescribeMaintenanceWindowTargetsRequest & DescribeMaintenanceWindowTargetsRequest & DescribeMaintenanceWindowTargetsRequest & DescribeMaintenanceWindowTargetsRequest)[K]
    }>): DescribeMaintenanceWindowTargetsResult {
        return this.client.describeMaintenanceWindowTargets(
            this.ops["DescribeMaintenanceWindowTargets"].apply(partialParams)
        );
    }

    invokeDescribeMaintenanceWindowTasks(partialParams: ToOptional<{
      [K in keyof DescribeMaintenanceWindowTasksRequest & keyof DescribeMaintenanceWindowTasksRequest & keyof DescribeMaintenanceWindowTasksRequest & keyof DescribeMaintenanceWindowTasksRequest & keyof DescribeMaintenanceWindowTasksRequest & keyof DescribeMaintenanceWindowTasksRequest & keyof DescribeMaintenanceWindowTasksRequest & keyof DescribeMaintenanceWindowTasksRequest & keyof DescribeMaintenanceWindowTasksRequest]: (DescribeMaintenanceWindowTasksRequest & DescribeMaintenanceWindowTasksRequest & DescribeMaintenanceWindowTasksRequest & DescribeMaintenanceWindowTasksRequest & DescribeMaintenanceWindowTasksRequest & DescribeMaintenanceWindowTasksRequest & DescribeMaintenanceWindowTasksRequest & DescribeMaintenanceWindowTasksRequest & DescribeMaintenanceWindowTasksRequest)[K]
    }>): DescribeMaintenanceWindowTasksResult {
        return this.client.describeMaintenanceWindowTasks(
            this.ops["DescribeMaintenanceWindowTasks"].apply(partialParams)
        );
    }

    invokeDescribeMaintenanceWindowsForTarget(partialParams: ToOptional<{
      [K in keyof DescribeMaintenanceWindowsForTargetRequest & keyof DescribeMaintenanceWindowsForTargetRequest & keyof DescribeMaintenanceWindowsForTargetRequest & keyof DescribeMaintenanceWindowsForTargetRequest & keyof DescribeMaintenanceWindowsForTargetRequest & keyof DescribeMaintenanceWindowsForTargetRequest & keyof DescribeMaintenanceWindowsForTargetRequest & keyof DescribeMaintenanceWindowsForTargetRequest & keyof DescribeMaintenanceWindowsForTargetRequest]: (DescribeMaintenanceWindowsForTargetRequest & DescribeMaintenanceWindowsForTargetRequest & DescribeMaintenanceWindowsForTargetRequest & DescribeMaintenanceWindowsForTargetRequest & DescribeMaintenanceWindowsForTargetRequest & DescribeMaintenanceWindowsForTargetRequest & DescribeMaintenanceWindowsForTargetRequest & DescribeMaintenanceWindowsForTargetRequest & DescribeMaintenanceWindowsForTargetRequest)[K]
    }>): DescribeMaintenanceWindowsForTargetResult {
        return this.client.describeMaintenanceWindowsForTarget(
            this.ops["DescribeMaintenanceWindowsForTarget"].apply(partialParams)
        );
    }

    invokeDescribePatchGroupState(partialParams: ToOptional<{
      [K in keyof DescribePatchGroupStateRequest & keyof DescribePatchGroupStateRequest & keyof DescribePatchGroupStateRequest & keyof DescribePatchGroupStateRequest & keyof DescribePatchGroupStateRequest & keyof DescribePatchGroupStateRequest & keyof DescribePatchGroupStateRequest & keyof DescribePatchGroupStateRequest & keyof DescribePatchGroupStateRequest]: (DescribePatchGroupStateRequest & DescribePatchGroupStateRequest & DescribePatchGroupStateRequest & DescribePatchGroupStateRequest & DescribePatchGroupStateRequest & DescribePatchGroupStateRequest & DescribePatchGroupStateRequest & DescribePatchGroupStateRequest & DescribePatchGroupStateRequest)[K]
    }>): DescribePatchGroupStateResult {
        return this.client.describePatchGroupState(
            this.ops["DescribePatchGroupState"].apply(partialParams)
        );
    }

    invokeDescribePatchProperties(partialParams: ToOptional<{
      [K in keyof DescribePatchPropertiesRequest & keyof DescribePatchPropertiesRequest & keyof DescribePatchPropertiesRequest & keyof DescribePatchPropertiesRequest & keyof DescribePatchPropertiesRequest & keyof DescribePatchPropertiesRequest & keyof DescribePatchPropertiesRequest & keyof DescribePatchPropertiesRequest & keyof DescribePatchPropertiesRequest]: (DescribePatchPropertiesRequest & DescribePatchPropertiesRequest & DescribePatchPropertiesRequest & DescribePatchPropertiesRequest & DescribePatchPropertiesRequest & DescribePatchPropertiesRequest & DescribePatchPropertiesRequest & DescribePatchPropertiesRequest & DescribePatchPropertiesRequest)[K]
    }>): DescribePatchPropertiesResult {
        return this.client.describePatchProperties(
            this.ops["DescribePatchProperties"].apply(partialParams)
        );
    }

    invokeDescribeSessions(partialParams: ToOptional<{
      [K in keyof DescribeSessionsRequest & keyof DescribeSessionsRequest & keyof DescribeSessionsRequest & keyof DescribeSessionsRequest & keyof DescribeSessionsRequest & keyof DescribeSessionsRequest & keyof DescribeSessionsRequest & keyof DescribeSessionsRequest & keyof DescribeSessionsRequest]: (DescribeSessionsRequest & DescribeSessionsRequest & DescribeSessionsRequest & DescribeSessionsRequest & DescribeSessionsRequest & DescribeSessionsRequest & DescribeSessionsRequest & DescribeSessionsRequest & DescribeSessionsRequest)[K]
    }>): DescribeSessionsResponse {
        return this.client.describeSessions(
            this.ops["DescribeSessions"].apply(partialParams)
        );
    }

    invokeDisassociateOpsItemRelatedItem(partialParams: ToOptional<{
      [K in keyof DisassociateOpsItemRelatedItemRequest & keyof DisassociateOpsItemRelatedItemRequest & keyof DisassociateOpsItemRelatedItemRequest & keyof DisassociateOpsItemRelatedItemRequest & keyof DisassociateOpsItemRelatedItemRequest & keyof DisassociateOpsItemRelatedItemRequest & keyof DisassociateOpsItemRelatedItemRequest & keyof DisassociateOpsItemRelatedItemRequest & keyof DisassociateOpsItemRelatedItemRequest]: (DisassociateOpsItemRelatedItemRequest & DisassociateOpsItemRelatedItemRequest & DisassociateOpsItemRelatedItemRequest & DisassociateOpsItemRelatedItemRequest & DisassociateOpsItemRelatedItemRequest & DisassociateOpsItemRelatedItemRequest & DisassociateOpsItemRelatedItemRequest & DisassociateOpsItemRelatedItemRequest & DisassociateOpsItemRelatedItemRequest)[K]
    }>): DisassociateOpsItemRelatedItemResponse {
        return this.client.disassociateOpsItemRelatedItem(
            this.ops["DisassociateOpsItemRelatedItem"].apply(partialParams)
        );
    }

    invokeGetAutomationExecution(partialParams: ToOptional<{
      [K in keyof GetAutomationExecutionRequest & keyof GetAutomationExecutionRequest & keyof GetAutomationExecutionRequest & keyof GetAutomationExecutionRequest & keyof GetAutomationExecutionRequest & keyof GetAutomationExecutionRequest & keyof GetAutomationExecutionRequest & keyof GetAutomationExecutionRequest & keyof GetAutomationExecutionRequest]: (GetAutomationExecutionRequest & GetAutomationExecutionRequest & GetAutomationExecutionRequest & GetAutomationExecutionRequest & GetAutomationExecutionRequest & GetAutomationExecutionRequest & GetAutomationExecutionRequest & GetAutomationExecutionRequest & GetAutomationExecutionRequest)[K]
    }>): GetAutomationExecutionResult {
        return this.client.getAutomationExecution(
            this.ops["GetAutomationExecution"].apply(partialParams)
        );
    }

    invokeGetCalendarState(partialParams: ToOptional<{
      [K in keyof GetCalendarStateRequest & keyof GetCalendarStateRequest & keyof GetCalendarStateRequest & keyof GetCalendarStateRequest & keyof GetCalendarStateRequest & keyof GetCalendarStateRequest & keyof GetCalendarStateRequest & keyof GetCalendarStateRequest & keyof GetCalendarStateRequest]: (GetCalendarStateRequest & GetCalendarStateRequest & GetCalendarStateRequest & GetCalendarStateRequest & GetCalendarStateRequest & GetCalendarStateRequest & GetCalendarStateRequest & GetCalendarStateRequest & GetCalendarStateRequest)[K]
    }>): GetCalendarStateResponse {
        return this.client.getCalendarState(
            this.ops["GetCalendarState"].apply(partialParams)
        );
    }

    invokeGetCommandInvocation(partialParams: ToOptional<{
      [K in keyof GetCommandInvocationRequest & keyof GetCommandInvocationRequest & keyof GetCommandInvocationRequest & keyof GetCommandInvocationRequest & keyof GetCommandInvocationRequest & keyof GetCommandInvocationRequest & keyof GetCommandInvocationRequest & keyof GetCommandInvocationRequest & keyof GetCommandInvocationRequest]: (GetCommandInvocationRequest & GetCommandInvocationRequest & GetCommandInvocationRequest & GetCommandInvocationRequest & GetCommandInvocationRequest & GetCommandInvocationRequest & GetCommandInvocationRequest & GetCommandInvocationRequest & GetCommandInvocationRequest)[K]
    }>): GetCommandInvocationResult {
        return this.client.getCommandInvocation(
            this.ops["GetCommandInvocation"].apply(partialParams)
        );
    }

    invokeGetConnectionStatus(partialParams: ToOptional<{
      [K in keyof GetConnectionStatusRequest & keyof GetConnectionStatusRequest & keyof GetConnectionStatusRequest & keyof GetConnectionStatusRequest & keyof GetConnectionStatusRequest & keyof GetConnectionStatusRequest & keyof GetConnectionStatusRequest & keyof GetConnectionStatusRequest & keyof GetConnectionStatusRequest]: (GetConnectionStatusRequest & GetConnectionStatusRequest & GetConnectionStatusRequest & GetConnectionStatusRequest & GetConnectionStatusRequest & GetConnectionStatusRequest & GetConnectionStatusRequest & GetConnectionStatusRequest & GetConnectionStatusRequest)[K]
    }>): GetConnectionStatusResponse {
        return this.client.getConnectionStatus(
            this.ops["GetConnectionStatus"].apply(partialParams)
        );
    }

    invokeGetDeployablePatchSnapshotForInstance(partialParams: ToOptional<{
      [K in keyof GetDeployablePatchSnapshotForInstanceRequest & keyof GetDeployablePatchSnapshotForInstanceRequest & keyof GetDeployablePatchSnapshotForInstanceRequest & keyof GetDeployablePatchSnapshotForInstanceRequest & keyof GetDeployablePatchSnapshotForInstanceRequest & keyof GetDeployablePatchSnapshotForInstanceRequest & keyof GetDeployablePatchSnapshotForInstanceRequest & keyof GetDeployablePatchSnapshotForInstanceRequest & keyof GetDeployablePatchSnapshotForInstanceRequest]: (GetDeployablePatchSnapshotForInstanceRequest & GetDeployablePatchSnapshotForInstanceRequest & GetDeployablePatchSnapshotForInstanceRequest & GetDeployablePatchSnapshotForInstanceRequest & GetDeployablePatchSnapshotForInstanceRequest & GetDeployablePatchSnapshotForInstanceRequest & GetDeployablePatchSnapshotForInstanceRequest & GetDeployablePatchSnapshotForInstanceRequest & GetDeployablePatchSnapshotForInstanceRequest)[K]
    }>): GetDeployablePatchSnapshotForInstanceResult {
        return this.client.getDeployablePatchSnapshotForInstance(
            this.ops["GetDeployablePatchSnapshotForInstance"].apply(partialParams)
        );
    }

    invokeGetDocument(partialParams: ToOptional<{
      [K in keyof GetDocumentRequest & keyof GetDocumentRequest & keyof GetDocumentRequest & keyof GetDocumentRequest & keyof GetDocumentRequest & keyof Omit<GetDocumentRequest, "Name"> & keyof GetDocumentRequest & keyof GetDocumentRequest & keyof GetDocumentRequest]: (GetDocumentRequest & GetDocumentRequest & GetDocumentRequest & GetDocumentRequest & GetDocumentRequest & Omit<GetDocumentRequest, "Name"> & GetDocumentRequest & GetDocumentRequest & GetDocumentRequest)[K]
    }>): GetDocumentResult {
        return this.client.getDocument(
            this.ops["GetDocument"].apply(partialParams)
        );
    }

    invokeGetMaintenanceWindow(partialParams: ToOptional<{
      [K in keyof GetMaintenanceWindowRequest & keyof GetMaintenanceWindowRequest & keyof GetMaintenanceWindowRequest & keyof GetMaintenanceWindowRequest & keyof GetMaintenanceWindowRequest & keyof GetMaintenanceWindowRequest & keyof GetMaintenanceWindowRequest & keyof GetMaintenanceWindowRequest & keyof GetMaintenanceWindowRequest]: (GetMaintenanceWindowRequest & GetMaintenanceWindowRequest & GetMaintenanceWindowRequest & GetMaintenanceWindowRequest & GetMaintenanceWindowRequest & GetMaintenanceWindowRequest & GetMaintenanceWindowRequest & GetMaintenanceWindowRequest & GetMaintenanceWindowRequest)[K]
    }>): GetMaintenanceWindowResult {
        return this.client.getMaintenanceWindow(
            this.ops["GetMaintenanceWindow"].apply(partialParams)
        );
    }

    invokeGetMaintenanceWindowExecution(partialParams: ToOptional<{
      [K in keyof GetMaintenanceWindowExecutionRequest & keyof GetMaintenanceWindowExecutionRequest & keyof GetMaintenanceWindowExecutionRequest & keyof GetMaintenanceWindowExecutionRequest & keyof GetMaintenanceWindowExecutionRequest & keyof GetMaintenanceWindowExecutionRequest & keyof GetMaintenanceWindowExecutionRequest & keyof GetMaintenanceWindowExecutionRequest & keyof GetMaintenanceWindowExecutionRequest]: (GetMaintenanceWindowExecutionRequest & GetMaintenanceWindowExecutionRequest & GetMaintenanceWindowExecutionRequest & GetMaintenanceWindowExecutionRequest & GetMaintenanceWindowExecutionRequest & GetMaintenanceWindowExecutionRequest & GetMaintenanceWindowExecutionRequest & GetMaintenanceWindowExecutionRequest & GetMaintenanceWindowExecutionRequest)[K]
    }>): GetMaintenanceWindowExecutionResult {
        return this.client.getMaintenanceWindowExecution(
            this.ops["GetMaintenanceWindowExecution"].apply(partialParams)
        );
    }

    invokeGetMaintenanceWindowExecutionTask(partialParams: ToOptional<{
      [K in keyof GetMaintenanceWindowExecutionTaskRequest & keyof GetMaintenanceWindowExecutionTaskRequest & keyof GetMaintenanceWindowExecutionTaskRequest & keyof GetMaintenanceWindowExecutionTaskRequest & keyof GetMaintenanceWindowExecutionTaskRequest & keyof GetMaintenanceWindowExecutionTaskRequest & keyof GetMaintenanceWindowExecutionTaskRequest & keyof GetMaintenanceWindowExecutionTaskRequest & keyof GetMaintenanceWindowExecutionTaskRequest]: (GetMaintenanceWindowExecutionTaskRequest & GetMaintenanceWindowExecutionTaskRequest & GetMaintenanceWindowExecutionTaskRequest & GetMaintenanceWindowExecutionTaskRequest & GetMaintenanceWindowExecutionTaskRequest & GetMaintenanceWindowExecutionTaskRequest & GetMaintenanceWindowExecutionTaskRequest & GetMaintenanceWindowExecutionTaskRequest & GetMaintenanceWindowExecutionTaskRequest)[K]
    }>): GetMaintenanceWindowExecutionTaskResult {
        return this.client.getMaintenanceWindowExecutionTask(
            this.ops["GetMaintenanceWindowExecutionTask"].apply(partialParams)
        );
    }

    invokeGetMaintenanceWindowExecutionTaskInvocation(partialParams: ToOptional<{
      [K in keyof GetMaintenanceWindowExecutionTaskInvocationRequest & keyof GetMaintenanceWindowExecutionTaskInvocationRequest & keyof GetMaintenanceWindowExecutionTaskInvocationRequest & keyof GetMaintenanceWindowExecutionTaskInvocationRequest & keyof GetMaintenanceWindowExecutionTaskInvocationRequest & keyof GetMaintenanceWindowExecutionTaskInvocationRequest & keyof GetMaintenanceWindowExecutionTaskInvocationRequest & keyof GetMaintenanceWindowExecutionTaskInvocationRequest & keyof GetMaintenanceWindowExecutionTaskInvocationRequest]: (GetMaintenanceWindowExecutionTaskInvocationRequest & GetMaintenanceWindowExecutionTaskInvocationRequest & GetMaintenanceWindowExecutionTaskInvocationRequest & GetMaintenanceWindowExecutionTaskInvocationRequest & GetMaintenanceWindowExecutionTaskInvocationRequest & GetMaintenanceWindowExecutionTaskInvocationRequest & GetMaintenanceWindowExecutionTaskInvocationRequest & GetMaintenanceWindowExecutionTaskInvocationRequest & GetMaintenanceWindowExecutionTaskInvocationRequest)[K]
    }>): GetMaintenanceWindowExecutionTaskInvocationResult {
        return this.client.getMaintenanceWindowExecutionTaskInvocation(
            this.ops["GetMaintenanceWindowExecutionTaskInvocation"].apply(partialParams)
        );
    }

    invokeGetMaintenanceWindowTask(partialParams: ToOptional<{
      [K in keyof GetMaintenanceWindowTaskRequest & keyof GetMaintenanceWindowTaskRequest & keyof GetMaintenanceWindowTaskRequest & keyof GetMaintenanceWindowTaskRequest & keyof GetMaintenanceWindowTaskRequest & keyof GetMaintenanceWindowTaskRequest & keyof GetMaintenanceWindowTaskRequest & keyof GetMaintenanceWindowTaskRequest & keyof GetMaintenanceWindowTaskRequest]: (GetMaintenanceWindowTaskRequest & GetMaintenanceWindowTaskRequest & GetMaintenanceWindowTaskRequest & GetMaintenanceWindowTaskRequest & GetMaintenanceWindowTaskRequest & GetMaintenanceWindowTaskRequest & GetMaintenanceWindowTaskRequest & GetMaintenanceWindowTaskRequest & GetMaintenanceWindowTaskRequest)[K]
    }>): GetMaintenanceWindowTaskResult {
        return this.client.getMaintenanceWindowTask(
            this.ops["GetMaintenanceWindowTask"].apply(partialParams)
        );
    }

    invokeGetOpsItem(partialParams: ToOptional<{
      [K in keyof GetOpsItemRequest & keyof GetOpsItemRequest & keyof GetOpsItemRequest & keyof GetOpsItemRequest & keyof GetOpsItemRequest & keyof GetOpsItemRequest & keyof GetOpsItemRequest & keyof GetOpsItemRequest & keyof GetOpsItemRequest]: (GetOpsItemRequest & GetOpsItemRequest & GetOpsItemRequest & GetOpsItemRequest & GetOpsItemRequest & GetOpsItemRequest & GetOpsItemRequest & GetOpsItemRequest & GetOpsItemRequest)[K]
    }>): GetOpsItemResponse {
        return this.client.getOpsItem(
            this.ops["GetOpsItem"].apply(partialParams)
        );
    }

    invokeGetOpsMetadata(partialParams: ToOptional<{
      [K in keyof GetOpsMetadataRequest & keyof GetOpsMetadataRequest & keyof GetOpsMetadataRequest & keyof GetOpsMetadataRequest & keyof GetOpsMetadataRequest & keyof GetOpsMetadataRequest & keyof GetOpsMetadataRequest & keyof GetOpsMetadataRequest & keyof GetOpsMetadataRequest]: (GetOpsMetadataRequest & GetOpsMetadataRequest & GetOpsMetadataRequest & GetOpsMetadataRequest & GetOpsMetadataRequest & GetOpsMetadataRequest & GetOpsMetadataRequest & GetOpsMetadataRequest & GetOpsMetadataRequest)[K]
    }>): GetOpsMetadataResult {
        return this.client.getOpsMetadata(
            this.ops["GetOpsMetadata"].apply(partialParams)
        );
    }

    invokeGetParameter(partialParams: ToOptional<{
      [K in keyof GetParameterRequest & keyof GetParameterRequest & keyof GetParameterRequest & keyof GetParameterRequest & keyof GetParameterRequest & keyof GetParameterRequest & keyof GetParameterRequest & keyof GetParameterRequest & keyof GetParameterRequest]: (GetParameterRequest & GetParameterRequest & GetParameterRequest & GetParameterRequest & GetParameterRequest & GetParameterRequest & GetParameterRequest & GetParameterRequest & GetParameterRequest)[K]
    }>): GetParameterResult {
        return this.client.getParameter(
            this.ops["GetParameter"].apply(partialParams)
        );
    }

    invokeGetParameterHistory(partialParams: ToOptional<{
      [K in keyof GetParameterHistoryRequest & keyof GetParameterHistoryRequest & keyof GetParameterHistoryRequest & keyof GetParameterHistoryRequest & keyof GetParameterHistoryRequest & keyof GetParameterHistoryRequest & keyof GetParameterHistoryRequest & keyof GetParameterHistoryRequest & keyof GetParameterHistoryRequest]: (GetParameterHistoryRequest & GetParameterHistoryRequest & GetParameterHistoryRequest & GetParameterHistoryRequest & GetParameterHistoryRequest & GetParameterHistoryRequest & GetParameterHistoryRequest & GetParameterHistoryRequest & GetParameterHistoryRequest)[K]
    }>): GetParameterHistoryResult {
        return this.client.getParameterHistory(
            this.ops["GetParameterHistory"].apply(partialParams)
        );
    }

    invokeGetParameters(partialParams: ToOptional<{
      [K in keyof GetParametersRequest & keyof GetParametersRequest & keyof GetParametersRequest & keyof GetParametersRequest & keyof GetParametersRequest & keyof GetParametersRequest & keyof GetParametersRequest & keyof GetParametersRequest & keyof GetParametersRequest]: (GetParametersRequest & GetParametersRequest & GetParametersRequest & GetParametersRequest & GetParametersRequest & GetParametersRequest & GetParametersRequest & GetParametersRequest & GetParametersRequest)[K]
    }>): GetParametersResult {
        return this.client.getParameters(
            this.ops["GetParameters"].apply(partialParams)
        );
    }

    invokeGetParametersByPath(partialParams: ToOptional<{
      [K in keyof GetParametersByPathRequest & keyof GetParametersByPathRequest & keyof GetParametersByPathRequest & keyof GetParametersByPathRequest & keyof GetParametersByPathRequest & keyof GetParametersByPathRequest & keyof GetParametersByPathRequest & keyof GetParametersByPathRequest & keyof GetParametersByPathRequest]: (GetParametersByPathRequest & GetParametersByPathRequest & GetParametersByPathRequest & GetParametersByPathRequest & GetParametersByPathRequest & GetParametersByPathRequest & GetParametersByPathRequest & GetParametersByPathRequest & GetParametersByPathRequest)[K]
    }>): GetParametersByPathResult {
        return this.client.getParametersByPath(
            this.ops["GetParametersByPath"].apply(partialParams)
        );
    }

    invokeGetPatchBaseline(partialParams: ToOptional<{
      [K in keyof GetPatchBaselineRequest & keyof GetPatchBaselineRequest & keyof GetPatchBaselineRequest & keyof GetPatchBaselineRequest & keyof GetPatchBaselineRequest & keyof GetPatchBaselineRequest & keyof GetPatchBaselineRequest & keyof GetPatchBaselineRequest & keyof GetPatchBaselineRequest]: (GetPatchBaselineRequest & GetPatchBaselineRequest & GetPatchBaselineRequest & GetPatchBaselineRequest & GetPatchBaselineRequest & GetPatchBaselineRequest & GetPatchBaselineRequest & GetPatchBaselineRequest & GetPatchBaselineRequest)[K]
    }>): GetPatchBaselineResult {
        return this.client.getPatchBaseline(
            this.ops["GetPatchBaseline"].apply(partialParams)
        );
    }

    invokeGetPatchBaselineForPatchGroup(partialParams: ToOptional<{
      [K in keyof GetPatchBaselineForPatchGroupRequest & keyof GetPatchBaselineForPatchGroupRequest & keyof GetPatchBaselineForPatchGroupRequest & keyof GetPatchBaselineForPatchGroupRequest & keyof GetPatchBaselineForPatchGroupRequest & keyof GetPatchBaselineForPatchGroupRequest & keyof GetPatchBaselineForPatchGroupRequest & keyof GetPatchBaselineForPatchGroupRequest & keyof GetPatchBaselineForPatchGroupRequest]: (GetPatchBaselineForPatchGroupRequest & GetPatchBaselineForPatchGroupRequest & GetPatchBaselineForPatchGroupRequest & GetPatchBaselineForPatchGroupRequest & GetPatchBaselineForPatchGroupRequest & GetPatchBaselineForPatchGroupRequest & GetPatchBaselineForPatchGroupRequest & GetPatchBaselineForPatchGroupRequest & GetPatchBaselineForPatchGroupRequest)[K]
    }>): GetPatchBaselineForPatchGroupResult {
        return this.client.getPatchBaselineForPatchGroup(
            this.ops["GetPatchBaselineForPatchGroup"].apply(partialParams)
        );
    }

    invokeGetServiceSetting(partialParams: ToOptional<{
      [K in keyof GetServiceSettingRequest & keyof GetServiceSettingRequest & keyof GetServiceSettingRequest & keyof GetServiceSettingRequest & keyof GetServiceSettingRequest & keyof GetServiceSettingRequest & keyof GetServiceSettingRequest & keyof GetServiceSettingRequest & keyof GetServiceSettingRequest]: (GetServiceSettingRequest & GetServiceSettingRequest & GetServiceSettingRequest & GetServiceSettingRequest & GetServiceSettingRequest & GetServiceSettingRequest & GetServiceSettingRequest & GetServiceSettingRequest & GetServiceSettingRequest)[K]
    }>): GetServiceSettingResult {
        return this.client.getServiceSetting(
            this.ops["GetServiceSetting"].apply(partialParams)
        );
    }

    invokeLabelParameterVersion(partialParams: ToOptional<{
      [K in keyof LabelParameterVersionRequest & keyof LabelParameterVersionRequest & keyof LabelParameterVersionRequest & keyof LabelParameterVersionRequest & keyof LabelParameterVersionRequest & keyof LabelParameterVersionRequest & keyof LabelParameterVersionRequest & keyof LabelParameterVersionRequest & keyof LabelParameterVersionRequest]: (LabelParameterVersionRequest & LabelParameterVersionRequest & LabelParameterVersionRequest & LabelParameterVersionRequest & LabelParameterVersionRequest & LabelParameterVersionRequest & LabelParameterVersionRequest & LabelParameterVersionRequest & LabelParameterVersionRequest)[K]
    }>): LabelParameterVersionResult {
        return this.client.labelParameterVersion(
            this.ops["LabelParameterVersion"].apply(partialParams)
        );
    }

    invokeListAssociationVersions(partialParams: ToOptional<{
      [K in keyof ListAssociationVersionsRequest & keyof ListAssociationVersionsRequest & keyof ListAssociationVersionsRequest & keyof ListAssociationVersionsRequest & keyof ListAssociationVersionsRequest & keyof ListAssociationVersionsRequest & keyof ListAssociationVersionsRequest & keyof ListAssociationVersionsRequest & keyof ListAssociationVersionsRequest]: (ListAssociationVersionsRequest & ListAssociationVersionsRequest & ListAssociationVersionsRequest & ListAssociationVersionsRequest & ListAssociationVersionsRequest & ListAssociationVersionsRequest & ListAssociationVersionsRequest & ListAssociationVersionsRequest & ListAssociationVersionsRequest)[K]
    }>): ListAssociationVersionsResult {
        return this.client.listAssociationVersions(
            this.ops["ListAssociationVersions"].apply(partialParams)
        );
    }

    invokeListDocumentMetadataHistory(partialParams: ToOptional<{
      [K in keyof ListDocumentMetadataHistoryRequest & keyof ListDocumentMetadataHistoryRequest & keyof ListDocumentMetadataHistoryRequest & keyof ListDocumentMetadataHistoryRequest & keyof ListDocumentMetadataHistoryRequest & keyof Omit<ListDocumentMetadataHistoryRequest, "Name"> & keyof ListDocumentMetadataHistoryRequest & keyof ListDocumentMetadataHistoryRequest & keyof ListDocumentMetadataHistoryRequest]: (ListDocumentMetadataHistoryRequest & ListDocumentMetadataHistoryRequest & ListDocumentMetadataHistoryRequest & ListDocumentMetadataHistoryRequest & ListDocumentMetadataHistoryRequest & Omit<ListDocumentMetadataHistoryRequest, "Name"> & ListDocumentMetadataHistoryRequest & ListDocumentMetadataHistoryRequest & ListDocumentMetadataHistoryRequest)[K]
    }>): ListDocumentMetadataHistoryResponse {
        return this.client.listDocumentMetadataHistory(
            this.ops["ListDocumentMetadataHistory"].apply(partialParams)
        );
    }

    invokeListDocumentVersions(partialParams: ToOptional<{
      [K in keyof ListDocumentVersionsRequest & keyof ListDocumentVersionsRequest & keyof ListDocumentVersionsRequest & keyof ListDocumentVersionsRequest & keyof ListDocumentVersionsRequest & keyof Omit<ListDocumentVersionsRequest, "Name"> & keyof ListDocumentVersionsRequest & keyof ListDocumentVersionsRequest & keyof ListDocumentVersionsRequest]: (ListDocumentVersionsRequest & ListDocumentVersionsRequest & ListDocumentVersionsRequest & ListDocumentVersionsRequest & ListDocumentVersionsRequest & Omit<ListDocumentVersionsRequest, "Name"> & ListDocumentVersionsRequest & ListDocumentVersionsRequest & ListDocumentVersionsRequest)[K]
    }>): ListDocumentVersionsResult {
        return this.client.listDocumentVersions(
            this.ops["ListDocumentVersions"].apply(partialParams)
        );
    }

    invokeListInventoryEntries(partialParams: ToOptional<{
      [K in keyof ListInventoryEntriesRequest & keyof ListInventoryEntriesRequest & keyof ListInventoryEntriesRequest & keyof ListInventoryEntriesRequest & keyof ListInventoryEntriesRequest & keyof ListInventoryEntriesRequest & keyof ListInventoryEntriesRequest & keyof ListInventoryEntriesRequest & keyof ListInventoryEntriesRequest]: (ListInventoryEntriesRequest & ListInventoryEntriesRequest & ListInventoryEntriesRequest & ListInventoryEntriesRequest & ListInventoryEntriesRequest & ListInventoryEntriesRequest & ListInventoryEntriesRequest & ListInventoryEntriesRequest & ListInventoryEntriesRequest)[K]
    }>): ListInventoryEntriesResult {
        return this.client.listInventoryEntries(
            this.ops["ListInventoryEntries"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResult {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeModifyDocumentPermission(partialParams: ToOptional<{
      [K in keyof ModifyDocumentPermissionRequest & keyof ModifyDocumentPermissionRequest & keyof ModifyDocumentPermissionRequest & keyof ModifyDocumentPermissionRequest & keyof ModifyDocumentPermissionRequest & keyof Omit<ModifyDocumentPermissionRequest, "Name"> & keyof ModifyDocumentPermissionRequest & keyof ModifyDocumentPermissionRequest & keyof ModifyDocumentPermissionRequest]: (ModifyDocumentPermissionRequest & ModifyDocumentPermissionRequest & ModifyDocumentPermissionRequest & ModifyDocumentPermissionRequest & ModifyDocumentPermissionRequest & Omit<ModifyDocumentPermissionRequest, "Name"> & ModifyDocumentPermissionRequest & ModifyDocumentPermissionRequest & ModifyDocumentPermissionRequest)[K]
    }>): ModifyDocumentPermissionResponse {
        return this.client.modifyDocumentPermission(
            this.ops["ModifyDocumentPermission"].apply(partialParams)
        );
    }

    invokePutComplianceItems(partialParams: ToOptional<{
      [K in keyof PutComplianceItemsRequest & keyof PutComplianceItemsRequest & keyof PutComplianceItemsRequest & keyof PutComplianceItemsRequest & keyof PutComplianceItemsRequest & keyof PutComplianceItemsRequest & keyof PutComplianceItemsRequest & keyof PutComplianceItemsRequest & keyof PutComplianceItemsRequest]: (PutComplianceItemsRequest & PutComplianceItemsRequest & PutComplianceItemsRequest & PutComplianceItemsRequest & PutComplianceItemsRequest & PutComplianceItemsRequest & PutComplianceItemsRequest & PutComplianceItemsRequest & PutComplianceItemsRequest)[K]
    }>): PutComplianceItemsResult {
        return this.client.putComplianceItems(
            this.ops["PutComplianceItems"].apply(partialParams)
        );
    }

    invokePutInventory(partialParams: ToOptional<{
      [K in keyof PutInventoryRequest & keyof PutInventoryRequest & keyof PutInventoryRequest & keyof PutInventoryRequest & keyof PutInventoryRequest & keyof PutInventoryRequest & keyof PutInventoryRequest & keyof PutInventoryRequest & keyof PutInventoryRequest]: (PutInventoryRequest & PutInventoryRequest & PutInventoryRequest & PutInventoryRequest & PutInventoryRequest & PutInventoryRequest & PutInventoryRequest & PutInventoryRequest & PutInventoryRequest)[K]
    }>): PutInventoryResult {
        return this.client.putInventory(
            this.ops["PutInventory"].apply(partialParams)
        );
    }

    invokePutParameter(partialParams: ToOptional<{
      [K in keyof PutParameterRequest & keyof PutParameterRequest & keyof PutParameterRequest & keyof PutParameterRequest & keyof PutParameterRequest & keyof Omit<PutParameterRequest, "Name"> & keyof PutParameterRequest & keyof PutParameterRequest & keyof Omit<PutParameterRequest, "Value">]: (PutParameterRequest & PutParameterRequest & PutParameterRequest & PutParameterRequest & PutParameterRequest & Omit<PutParameterRequest, "Name"> & PutParameterRequest & PutParameterRequest & Omit<PutParameterRequest, "Value">)[K]
    }>): PutParameterResult {
        return this.client.putParameter(
            this.ops["PutParameter"].apply(partialParams)
        );
    }

    invokeRegisterDefaultPatchBaseline(partialParams: ToOptional<{
      [K in keyof RegisterDefaultPatchBaselineRequest & keyof RegisterDefaultPatchBaselineRequest & keyof RegisterDefaultPatchBaselineRequest & keyof RegisterDefaultPatchBaselineRequest & keyof RegisterDefaultPatchBaselineRequest & keyof RegisterDefaultPatchBaselineRequest & keyof RegisterDefaultPatchBaselineRequest & keyof RegisterDefaultPatchBaselineRequest & keyof RegisterDefaultPatchBaselineRequest]: (RegisterDefaultPatchBaselineRequest & RegisterDefaultPatchBaselineRequest & RegisterDefaultPatchBaselineRequest & RegisterDefaultPatchBaselineRequest & RegisterDefaultPatchBaselineRequest & RegisterDefaultPatchBaselineRequest & RegisterDefaultPatchBaselineRequest & RegisterDefaultPatchBaselineRequest & RegisterDefaultPatchBaselineRequest)[K]
    }>): RegisterDefaultPatchBaselineResult {
        return this.client.registerDefaultPatchBaseline(
            this.ops["RegisterDefaultPatchBaseline"].apply(partialParams)
        );
    }

    invokeRegisterPatchBaselineForPatchGroup(partialParams: ToOptional<{
      [K in keyof RegisterPatchBaselineForPatchGroupRequest & keyof RegisterPatchBaselineForPatchGroupRequest & keyof RegisterPatchBaselineForPatchGroupRequest & keyof RegisterPatchBaselineForPatchGroupRequest & keyof RegisterPatchBaselineForPatchGroupRequest & keyof RegisterPatchBaselineForPatchGroupRequest & keyof RegisterPatchBaselineForPatchGroupRequest & keyof RegisterPatchBaselineForPatchGroupRequest & keyof RegisterPatchBaselineForPatchGroupRequest]: (RegisterPatchBaselineForPatchGroupRequest & RegisterPatchBaselineForPatchGroupRequest & RegisterPatchBaselineForPatchGroupRequest & RegisterPatchBaselineForPatchGroupRequest & RegisterPatchBaselineForPatchGroupRequest & RegisterPatchBaselineForPatchGroupRequest & RegisterPatchBaselineForPatchGroupRequest & RegisterPatchBaselineForPatchGroupRequest & RegisterPatchBaselineForPatchGroupRequest)[K]
    }>): RegisterPatchBaselineForPatchGroupResult {
        return this.client.registerPatchBaselineForPatchGroup(
            this.ops["RegisterPatchBaselineForPatchGroup"].apply(partialParams)
        );
    }

    invokeRegisterTargetWithMaintenanceWindow(partialParams: ToOptional<{
      [K in keyof RegisterTargetWithMaintenanceWindowRequest & keyof RegisterTargetWithMaintenanceWindowRequest & keyof RegisterTargetWithMaintenanceWindowRequest & keyof RegisterTargetWithMaintenanceWindowRequest & keyof RegisterTargetWithMaintenanceWindowRequest & keyof RegisterTargetWithMaintenanceWindowRequest & keyof RegisterTargetWithMaintenanceWindowRequest & keyof RegisterTargetWithMaintenanceWindowRequest & keyof RegisterTargetWithMaintenanceWindowRequest]: (RegisterTargetWithMaintenanceWindowRequest & RegisterTargetWithMaintenanceWindowRequest & RegisterTargetWithMaintenanceWindowRequest & RegisterTargetWithMaintenanceWindowRequest & RegisterTargetWithMaintenanceWindowRequest & RegisterTargetWithMaintenanceWindowRequest & RegisterTargetWithMaintenanceWindowRequest & RegisterTargetWithMaintenanceWindowRequest & RegisterTargetWithMaintenanceWindowRequest)[K]
    }>): RegisterTargetWithMaintenanceWindowResult {
        return this.client.registerTargetWithMaintenanceWindow(
            this.ops["RegisterTargetWithMaintenanceWindow"].apply(partialParams)
        );
    }

    invokeRegisterTaskWithMaintenanceWindow(partialParams: ToOptional<{
      [K in keyof RegisterTaskWithMaintenanceWindowRequest & keyof RegisterTaskWithMaintenanceWindowRequest & keyof RegisterTaskWithMaintenanceWindowRequest & keyof RegisterTaskWithMaintenanceWindowRequest & keyof RegisterTaskWithMaintenanceWindowRequest & keyof RegisterTaskWithMaintenanceWindowRequest & keyof RegisterTaskWithMaintenanceWindowRequest & keyof RegisterTaskWithMaintenanceWindowRequest & keyof RegisterTaskWithMaintenanceWindowRequest]: (RegisterTaskWithMaintenanceWindowRequest & RegisterTaskWithMaintenanceWindowRequest & RegisterTaskWithMaintenanceWindowRequest & RegisterTaskWithMaintenanceWindowRequest & RegisterTaskWithMaintenanceWindowRequest & RegisterTaskWithMaintenanceWindowRequest & RegisterTaskWithMaintenanceWindowRequest & RegisterTaskWithMaintenanceWindowRequest & RegisterTaskWithMaintenanceWindowRequest)[K]
    }>): RegisterTaskWithMaintenanceWindowResult {
        return this.client.registerTaskWithMaintenanceWindow(
            this.ops["RegisterTaskWithMaintenanceWindow"].apply(partialParams)
        );
    }

    invokeRemoveTagsFromResource(partialParams: ToOptional<{
      [K in keyof RemoveTagsFromResourceRequest & keyof RemoveTagsFromResourceRequest & keyof RemoveTagsFromResourceRequest & keyof RemoveTagsFromResourceRequest & keyof RemoveTagsFromResourceRequest & keyof RemoveTagsFromResourceRequest & keyof RemoveTagsFromResourceRequest & keyof RemoveTagsFromResourceRequest & keyof RemoveTagsFromResourceRequest]: (RemoveTagsFromResourceRequest & RemoveTagsFromResourceRequest & RemoveTagsFromResourceRequest & RemoveTagsFromResourceRequest & RemoveTagsFromResourceRequest & RemoveTagsFromResourceRequest & RemoveTagsFromResourceRequest & RemoveTagsFromResourceRequest & RemoveTagsFromResourceRequest)[K]
    }>): RemoveTagsFromResourceResult {
        return this.client.removeTagsFromResource(
            this.ops["RemoveTagsFromResource"].apply(partialParams)
        );
    }

    invokeResetServiceSetting(partialParams: ToOptional<{
      [K in keyof ResetServiceSettingRequest & keyof ResetServiceSettingRequest & keyof ResetServiceSettingRequest & keyof ResetServiceSettingRequest & keyof ResetServiceSettingRequest & keyof ResetServiceSettingRequest & keyof ResetServiceSettingRequest & keyof ResetServiceSettingRequest & keyof ResetServiceSettingRequest]: (ResetServiceSettingRequest & ResetServiceSettingRequest & ResetServiceSettingRequest & ResetServiceSettingRequest & ResetServiceSettingRequest & ResetServiceSettingRequest & ResetServiceSettingRequest & ResetServiceSettingRequest & ResetServiceSettingRequest)[K]
    }>): ResetServiceSettingResult {
        return this.client.resetServiceSetting(
            this.ops["ResetServiceSetting"].apply(partialParams)
        );
    }

    invokeResumeSession(partialParams: ToOptional<{
      [K in keyof ResumeSessionRequest & keyof ResumeSessionRequest & keyof ResumeSessionRequest & keyof ResumeSessionRequest & keyof ResumeSessionRequest & keyof ResumeSessionRequest & keyof ResumeSessionRequest & keyof ResumeSessionRequest & keyof ResumeSessionRequest]: (ResumeSessionRequest & ResumeSessionRequest & ResumeSessionRequest & ResumeSessionRequest & ResumeSessionRequest & ResumeSessionRequest & ResumeSessionRequest & ResumeSessionRequest & ResumeSessionRequest)[K]
    }>): ResumeSessionResponse {
        return this.client.resumeSession(
            this.ops["ResumeSession"].apply(partialParams)
        );
    }

    invokeSendAutomationSignal(partialParams: ToOptional<{
      [K in keyof SendAutomationSignalRequest & keyof SendAutomationSignalRequest & keyof SendAutomationSignalRequest & keyof SendAutomationSignalRequest & keyof SendAutomationSignalRequest & keyof SendAutomationSignalRequest & keyof SendAutomationSignalRequest & keyof SendAutomationSignalRequest & keyof SendAutomationSignalRequest]: (SendAutomationSignalRequest & SendAutomationSignalRequest & SendAutomationSignalRequest & SendAutomationSignalRequest & SendAutomationSignalRequest & SendAutomationSignalRequest & SendAutomationSignalRequest & SendAutomationSignalRequest & SendAutomationSignalRequest)[K]
    }>): SendAutomationSignalResult {
        return this.client.sendAutomationSignal(
            this.ops["SendAutomationSignal"].apply(partialParams)
        );
    }

    invokeSendCommand(partialParams: ToOptional<{
      [K in keyof SendCommandRequest & keyof SendCommandRequest & keyof SendCommandRequest & keyof SendCommandRequest & keyof SendCommandRequest & keyof SendCommandRequest & keyof SendCommandRequest & keyof SendCommandRequest & keyof SendCommandRequest]: (SendCommandRequest & SendCommandRequest & SendCommandRequest & SendCommandRequest & SendCommandRequest & SendCommandRequest & SendCommandRequest & SendCommandRequest & SendCommandRequest)[K]
    }>): SendCommandResult {
        return this.client.sendCommand(
            this.ops["SendCommand"].apply(partialParams)
        );
    }

    invokeStartAssociationsOnce(partialParams: ToOptional<{
      [K in keyof StartAssociationsOnceRequest & keyof StartAssociationsOnceRequest & keyof StartAssociationsOnceRequest & keyof StartAssociationsOnceRequest & keyof StartAssociationsOnceRequest & keyof StartAssociationsOnceRequest & keyof StartAssociationsOnceRequest & keyof StartAssociationsOnceRequest & keyof StartAssociationsOnceRequest]: (StartAssociationsOnceRequest & StartAssociationsOnceRequest & StartAssociationsOnceRequest & StartAssociationsOnceRequest & StartAssociationsOnceRequest & StartAssociationsOnceRequest & StartAssociationsOnceRequest & StartAssociationsOnceRequest & StartAssociationsOnceRequest)[K]
    }>): StartAssociationsOnceResult {
        return this.client.startAssociationsOnce(
            this.ops["StartAssociationsOnce"].apply(partialParams)
        );
    }

    invokeStartAutomationExecution(partialParams: ToOptional<{
      [K in keyof StartAutomationExecutionRequest & keyof StartAutomationExecutionRequest & keyof StartAutomationExecutionRequest & keyof StartAutomationExecutionRequest & keyof StartAutomationExecutionRequest & keyof StartAutomationExecutionRequest & keyof StartAutomationExecutionRequest & keyof StartAutomationExecutionRequest & keyof StartAutomationExecutionRequest]: (StartAutomationExecutionRequest & StartAutomationExecutionRequest & StartAutomationExecutionRequest & StartAutomationExecutionRequest & StartAutomationExecutionRequest & StartAutomationExecutionRequest & StartAutomationExecutionRequest & StartAutomationExecutionRequest & StartAutomationExecutionRequest)[K]
    }>): StartAutomationExecutionResult {
        return this.client.startAutomationExecution(
            this.ops["StartAutomationExecution"].apply(partialParams)
        );
    }

    invokeStartChangeRequestExecution(partialParams: ToOptional<{
      [K in keyof StartChangeRequestExecutionRequest & keyof StartChangeRequestExecutionRequest & keyof StartChangeRequestExecutionRequest & keyof StartChangeRequestExecutionRequest & keyof StartChangeRequestExecutionRequest & keyof StartChangeRequestExecutionRequest & keyof StartChangeRequestExecutionRequest & keyof StartChangeRequestExecutionRequest & keyof StartChangeRequestExecutionRequest]: (StartChangeRequestExecutionRequest & StartChangeRequestExecutionRequest & StartChangeRequestExecutionRequest & StartChangeRequestExecutionRequest & StartChangeRequestExecutionRequest & StartChangeRequestExecutionRequest & StartChangeRequestExecutionRequest & StartChangeRequestExecutionRequest & StartChangeRequestExecutionRequest)[K]
    }>): StartChangeRequestExecutionResult {
        return this.client.startChangeRequestExecution(
            this.ops["StartChangeRequestExecution"].apply(partialParams)
        );
    }

    invokeStartSession(partialParams: ToOptional<{
      [K in keyof StartSessionRequest & keyof StartSessionRequest & keyof StartSessionRequest & keyof StartSessionRequest & keyof StartSessionRequest & keyof StartSessionRequest & keyof StartSessionRequest & keyof StartSessionRequest & keyof StartSessionRequest]: (StartSessionRequest & StartSessionRequest & StartSessionRequest & StartSessionRequest & StartSessionRequest & StartSessionRequest & StartSessionRequest & StartSessionRequest & StartSessionRequest)[K]
    }>): StartSessionResponse {
        return this.client.startSession(
            this.ops["StartSession"].apply(partialParams)
        );
    }

    invokeStopAutomationExecution(partialParams: ToOptional<{
      [K in keyof StopAutomationExecutionRequest & keyof StopAutomationExecutionRequest & keyof StopAutomationExecutionRequest & keyof StopAutomationExecutionRequest & keyof StopAutomationExecutionRequest & keyof StopAutomationExecutionRequest & keyof StopAutomationExecutionRequest & keyof StopAutomationExecutionRequest & keyof StopAutomationExecutionRequest]: (StopAutomationExecutionRequest & StopAutomationExecutionRequest & StopAutomationExecutionRequest & StopAutomationExecutionRequest & StopAutomationExecutionRequest & StopAutomationExecutionRequest & StopAutomationExecutionRequest & StopAutomationExecutionRequest & StopAutomationExecutionRequest)[K]
    }>): StopAutomationExecutionResult {
        return this.client.stopAutomationExecution(
            this.ops["StopAutomationExecution"].apply(partialParams)
        );
    }

    invokeTerminateSession(partialParams: ToOptional<{
      [K in keyof TerminateSessionRequest & keyof TerminateSessionRequest & keyof TerminateSessionRequest & keyof TerminateSessionRequest & keyof TerminateSessionRequest & keyof TerminateSessionRequest & keyof TerminateSessionRequest & keyof TerminateSessionRequest & keyof TerminateSessionRequest]: (TerminateSessionRequest & TerminateSessionRequest & TerminateSessionRequest & TerminateSessionRequest & TerminateSessionRequest & TerminateSessionRequest & TerminateSessionRequest & TerminateSessionRequest & TerminateSessionRequest)[K]
    }>): TerminateSessionResponse {
        return this.client.terminateSession(
            this.ops["TerminateSession"].apply(partialParams)
        );
    }

    invokeUnlabelParameterVersion(partialParams: ToOptional<{
      [K in keyof UnlabelParameterVersionRequest & keyof UnlabelParameterVersionRequest & keyof UnlabelParameterVersionRequest & keyof UnlabelParameterVersionRequest & keyof UnlabelParameterVersionRequest & keyof Omit<UnlabelParameterVersionRequest, "Name"> & keyof UnlabelParameterVersionRequest & keyof UnlabelParameterVersionRequest & keyof UnlabelParameterVersionRequest]: (UnlabelParameterVersionRequest & UnlabelParameterVersionRequest & UnlabelParameterVersionRequest & UnlabelParameterVersionRequest & UnlabelParameterVersionRequest & Omit<UnlabelParameterVersionRequest, "Name"> & UnlabelParameterVersionRequest & UnlabelParameterVersionRequest & UnlabelParameterVersionRequest)[K]
    }>): UnlabelParameterVersionResult {
        return this.client.unlabelParameterVersion(
            this.ops["UnlabelParameterVersion"].apply(partialParams)
        );
    }

    invokeUpdateAssociation(partialParams: ToOptional<{
      [K in keyof UpdateAssociationRequest & keyof UpdateAssociationRequest & keyof UpdateAssociationRequest & keyof UpdateAssociationRequest & keyof UpdateAssociationRequest & keyof UpdateAssociationRequest & keyof UpdateAssociationRequest & keyof UpdateAssociationRequest & keyof UpdateAssociationRequest]: (UpdateAssociationRequest & UpdateAssociationRequest & UpdateAssociationRequest & UpdateAssociationRequest & UpdateAssociationRequest & UpdateAssociationRequest & UpdateAssociationRequest & UpdateAssociationRequest & UpdateAssociationRequest)[K]
    }>): UpdateAssociationResult {
        return this.client.updateAssociation(
            this.ops["UpdateAssociation"].apply(partialParams)
        );
    }

    invokeUpdateAssociationStatus(partialParams: ToOptional<{
      [K in keyof UpdateAssociationStatusRequest & keyof UpdateAssociationStatusRequest & keyof UpdateAssociationStatusRequest & keyof UpdateAssociationStatusRequest & keyof UpdateAssociationStatusRequest & keyof Omit<UpdateAssociationStatusRequest, "Name"> & keyof UpdateAssociationStatusRequest & keyof UpdateAssociationStatusRequest & keyof UpdateAssociationStatusRequest]: (UpdateAssociationStatusRequest & UpdateAssociationStatusRequest & UpdateAssociationStatusRequest & UpdateAssociationStatusRequest & UpdateAssociationStatusRequest & Omit<UpdateAssociationStatusRequest, "Name"> & UpdateAssociationStatusRequest & UpdateAssociationStatusRequest & UpdateAssociationStatusRequest)[K]
    }>): UpdateAssociationStatusResult {
        return this.client.updateAssociationStatus(
            this.ops["UpdateAssociationStatus"].apply(partialParams)
        );
    }

    invokeUpdateDocument(partialParams: ToOptional<{
      [K in keyof UpdateDocumentRequest & keyof UpdateDocumentRequest & keyof UpdateDocumentRequest & keyof UpdateDocumentRequest & keyof UpdateDocumentRequest & keyof Omit<UpdateDocumentRequest, "Name"> & keyof UpdateDocumentRequest & keyof UpdateDocumentRequest & keyof UpdateDocumentRequest]: (UpdateDocumentRequest & UpdateDocumentRequest & UpdateDocumentRequest & UpdateDocumentRequest & UpdateDocumentRequest & Omit<UpdateDocumentRequest, "Name"> & UpdateDocumentRequest & UpdateDocumentRequest & UpdateDocumentRequest)[K]
    }>): UpdateDocumentResult {
        return this.client.updateDocument(
            this.ops["UpdateDocument"].apply(partialParams)
        );
    }

    invokeUpdateDocumentDefaultVersion(partialParams: ToOptional<{
      [K in keyof UpdateDocumentDefaultVersionRequest & keyof UpdateDocumentDefaultVersionRequest & keyof UpdateDocumentDefaultVersionRequest & keyof UpdateDocumentDefaultVersionRequest & keyof UpdateDocumentDefaultVersionRequest & keyof Omit<UpdateDocumentDefaultVersionRequest, "Name"> & keyof UpdateDocumentDefaultVersionRequest & keyof UpdateDocumentDefaultVersionRequest & keyof UpdateDocumentDefaultVersionRequest]: (UpdateDocumentDefaultVersionRequest & UpdateDocumentDefaultVersionRequest & UpdateDocumentDefaultVersionRequest & UpdateDocumentDefaultVersionRequest & UpdateDocumentDefaultVersionRequest & Omit<UpdateDocumentDefaultVersionRequest, "Name"> & UpdateDocumentDefaultVersionRequest & UpdateDocumentDefaultVersionRequest & UpdateDocumentDefaultVersionRequest)[K]
    }>): UpdateDocumentDefaultVersionResult {
        return this.client.updateDocumentDefaultVersion(
            this.ops["UpdateDocumentDefaultVersion"].apply(partialParams)
        );
    }

    invokeUpdateDocumentMetadata(partialParams: ToOptional<{
      [K in keyof UpdateDocumentMetadataRequest & keyof UpdateDocumentMetadataRequest & keyof UpdateDocumentMetadataRequest & keyof UpdateDocumentMetadataRequest & keyof UpdateDocumentMetadataRequest & keyof Omit<UpdateDocumentMetadataRequest, "Name"> & keyof UpdateDocumentMetadataRequest & keyof UpdateDocumentMetadataRequest & keyof UpdateDocumentMetadataRequest]: (UpdateDocumentMetadataRequest & UpdateDocumentMetadataRequest & UpdateDocumentMetadataRequest & UpdateDocumentMetadataRequest & UpdateDocumentMetadataRequest & Omit<UpdateDocumentMetadataRequest, "Name"> & UpdateDocumentMetadataRequest & UpdateDocumentMetadataRequest & UpdateDocumentMetadataRequest)[K]
    }>): UpdateDocumentMetadataResponse {
        return this.client.updateDocumentMetadata(
            this.ops["UpdateDocumentMetadata"].apply(partialParams)
        );
    }

    invokeUpdateMaintenanceWindow(partialParams: ToOptional<{
      [K in keyof UpdateMaintenanceWindowRequest & keyof UpdateMaintenanceWindowRequest & keyof UpdateMaintenanceWindowRequest & keyof UpdateMaintenanceWindowRequest & keyof UpdateMaintenanceWindowRequest & keyof UpdateMaintenanceWindowRequest & keyof UpdateMaintenanceWindowRequest & keyof UpdateMaintenanceWindowRequest & keyof UpdateMaintenanceWindowRequest]: (UpdateMaintenanceWindowRequest & UpdateMaintenanceWindowRequest & UpdateMaintenanceWindowRequest & UpdateMaintenanceWindowRequest & UpdateMaintenanceWindowRequest & UpdateMaintenanceWindowRequest & UpdateMaintenanceWindowRequest & UpdateMaintenanceWindowRequest & UpdateMaintenanceWindowRequest)[K]
    }>): UpdateMaintenanceWindowResult {
        return this.client.updateMaintenanceWindow(
            this.ops["UpdateMaintenanceWindow"].apply(partialParams)
        );
    }

    invokeUpdateMaintenanceWindowTarget(partialParams: ToOptional<{
      [K in keyof UpdateMaintenanceWindowTargetRequest & keyof UpdateMaintenanceWindowTargetRequest & keyof UpdateMaintenanceWindowTargetRequest & keyof UpdateMaintenanceWindowTargetRequest & keyof UpdateMaintenanceWindowTargetRequest & keyof UpdateMaintenanceWindowTargetRequest & keyof UpdateMaintenanceWindowTargetRequest & keyof UpdateMaintenanceWindowTargetRequest & keyof UpdateMaintenanceWindowTargetRequest]: (UpdateMaintenanceWindowTargetRequest & UpdateMaintenanceWindowTargetRequest & UpdateMaintenanceWindowTargetRequest & UpdateMaintenanceWindowTargetRequest & UpdateMaintenanceWindowTargetRequest & UpdateMaintenanceWindowTargetRequest & UpdateMaintenanceWindowTargetRequest & UpdateMaintenanceWindowTargetRequest & UpdateMaintenanceWindowTargetRequest)[K]
    }>): UpdateMaintenanceWindowTargetResult {
        return this.client.updateMaintenanceWindowTarget(
            this.ops["UpdateMaintenanceWindowTarget"].apply(partialParams)
        );
    }

    invokeUpdateMaintenanceWindowTask(partialParams: ToOptional<{
      [K in keyof UpdateMaintenanceWindowTaskRequest & keyof UpdateMaintenanceWindowTaskRequest & keyof UpdateMaintenanceWindowTaskRequest & keyof UpdateMaintenanceWindowTaskRequest & keyof UpdateMaintenanceWindowTaskRequest & keyof UpdateMaintenanceWindowTaskRequest & keyof UpdateMaintenanceWindowTaskRequest & keyof UpdateMaintenanceWindowTaskRequest & keyof UpdateMaintenanceWindowTaskRequest]: (UpdateMaintenanceWindowTaskRequest & UpdateMaintenanceWindowTaskRequest & UpdateMaintenanceWindowTaskRequest & UpdateMaintenanceWindowTaskRequest & UpdateMaintenanceWindowTaskRequest & UpdateMaintenanceWindowTaskRequest & UpdateMaintenanceWindowTaskRequest & UpdateMaintenanceWindowTaskRequest & UpdateMaintenanceWindowTaskRequest)[K]
    }>): UpdateMaintenanceWindowTaskResult {
        return this.client.updateMaintenanceWindowTask(
            this.ops["UpdateMaintenanceWindowTask"].apply(partialParams)
        );
    }

    invokeUpdateManagedInstanceRole(partialParams: ToOptional<{
      [K in keyof UpdateManagedInstanceRoleRequest & keyof UpdateManagedInstanceRoleRequest & keyof UpdateManagedInstanceRoleRequest & keyof UpdateManagedInstanceRoleRequest & keyof UpdateManagedInstanceRoleRequest & keyof UpdateManagedInstanceRoleRequest & keyof UpdateManagedInstanceRoleRequest & keyof UpdateManagedInstanceRoleRequest & keyof UpdateManagedInstanceRoleRequest]: (UpdateManagedInstanceRoleRequest & UpdateManagedInstanceRoleRequest & UpdateManagedInstanceRoleRequest & UpdateManagedInstanceRoleRequest & UpdateManagedInstanceRoleRequest & UpdateManagedInstanceRoleRequest & UpdateManagedInstanceRoleRequest & UpdateManagedInstanceRoleRequest & UpdateManagedInstanceRoleRequest)[K]
    }>): UpdateManagedInstanceRoleResult {
        return this.client.updateManagedInstanceRole(
            this.ops["UpdateManagedInstanceRole"].apply(partialParams)
        );
    }

    invokeUpdateOpsItem(partialParams: ToOptional<{
      [K in keyof UpdateOpsItemRequest & keyof UpdateOpsItemRequest & keyof UpdateOpsItemRequest & keyof UpdateOpsItemRequest & keyof UpdateOpsItemRequest & keyof UpdateOpsItemRequest & keyof UpdateOpsItemRequest & keyof UpdateOpsItemRequest & keyof UpdateOpsItemRequest]: (UpdateOpsItemRequest & UpdateOpsItemRequest & UpdateOpsItemRequest & UpdateOpsItemRequest & UpdateOpsItemRequest & UpdateOpsItemRequest & UpdateOpsItemRequest & UpdateOpsItemRequest & UpdateOpsItemRequest)[K]
    }>): UpdateOpsItemResponse {
        return this.client.updateOpsItem(
            this.ops["UpdateOpsItem"].apply(partialParams)
        );
    }

    invokeUpdateOpsMetadata(partialParams: ToOptional<{
      [K in keyof UpdateOpsMetadataRequest & keyof UpdateOpsMetadataRequest & keyof UpdateOpsMetadataRequest & keyof UpdateOpsMetadataRequest & keyof UpdateOpsMetadataRequest & keyof UpdateOpsMetadataRequest & keyof UpdateOpsMetadataRequest & keyof UpdateOpsMetadataRequest & keyof UpdateOpsMetadataRequest]: (UpdateOpsMetadataRequest & UpdateOpsMetadataRequest & UpdateOpsMetadataRequest & UpdateOpsMetadataRequest & UpdateOpsMetadataRequest & UpdateOpsMetadataRequest & UpdateOpsMetadataRequest & UpdateOpsMetadataRequest & UpdateOpsMetadataRequest)[K]
    }>): UpdateOpsMetadataResult {
        return this.client.updateOpsMetadata(
            this.ops["UpdateOpsMetadata"].apply(partialParams)
        );
    }

    invokeUpdatePatchBaseline(partialParams: ToOptional<{
      [K in keyof UpdatePatchBaselineRequest & keyof UpdatePatchBaselineRequest & keyof UpdatePatchBaselineRequest & keyof UpdatePatchBaselineRequest & keyof UpdatePatchBaselineRequest & keyof UpdatePatchBaselineRequest & keyof UpdatePatchBaselineRequest & keyof UpdatePatchBaselineRequest & keyof UpdatePatchBaselineRequest]: (UpdatePatchBaselineRequest & UpdatePatchBaselineRequest & UpdatePatchBaselineRequest & UpdatePatchBaselineRequest & UpdatePatchBaselineRequest & UpdatePatchBaselineRequest & UpdatePatchBaselineRequest & UpdatePatchBaselineRequest & UpdatePatchBaselineRequest)[K]
    }>): UpdatePatchBaselineResult {
        return this.client.updatePatchBaseline(
            this.ops["UpdatePatchBaseline"].apply(partialParams)
        );
    }

    invokeUpdateResourceDataSync(partialParams: ToOptional<{
      [K in keyof UpdateResourceDataSyncRequest & keyof UpdateResourceDataSyncRequest & keyof UpdateResourceDataSyncRequest & keyof UpdateResourceDataSyncRequest & keyof UpdateResourceDataSyncRequest & keyof UpdateResourceDataSyncRequest & keyof UpdateResourceDataSyncRequest & keyof UpdateResourceDataSyncRequest & keyof UpdateResourceDataSyncRequest]: (UpdateResourceDataSyncRequest & UpdateResourceDataSyncRequest & UpdateResourceDataSyncRequest & UpdateResourceDataSyncRequest & UpdateResourceDataSyncRequest & UpdateResourceDataSyncRequest & UpdateResourceDataSyncRequest & UpdateResourceDataSyncRequest & UpdateResourceDataSyncRequest)[K]
    }>): UpdateResourceDataSyncResult {
        return this.client.updateResourceDataSync(
            this.ops["UpdateResourceDataSync"].apply(partialParams)
        );
    }

    invokeUpdateServiceSetting(partialParams: ToOptional<{
      [K in keyof UpdateServiceSettingRequest & keyof UpdateServiceSettingRequest & keyof UpdateServiceSettingRequest & keyof UpdateServiceSettingRequest & keyof UpdateServiceSettingRequest & keyof UpdateServiceSettingRequest & keyof UpdateServiceSettingRequest & keyof UpdateServiceSettingRequest & keyof UpdateServiceSettingRequest]: (UpdateServiceSettingRequest & UpdateServiceSettingRequest & UpdateServiceSettingRequest & UpdateServiceSettingRequest & UpdateServiceSettingRequest & UpdateServiceSettingRequest & UpdateServiceSettingRequest & UpdateServiceSettingRequest & UpdateServiceSettingRequest)[K]
    }>): UpdateServiceSettingResult {
        return this.client.updateServiceSetting(
            this.ops["UpdateServiceSetting"].apply(partialParams)
        );
    }
}