
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
const schema = require("../apis/ssm-2014-11-06.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ssm.PatchGroup {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.ssm.PatchGroup>) {
        super(...args)
        this.client = new awssdk.SSM()
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
      [K in keyof AddTagsToResourceRequest & keyof AddTagsToResourceRequest]: (AddTagsToResourceRequest & AddTagsToResourceRequest)[K]
    }>): Request<AddTagsToResourceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addTagsToResource(
          this.ops["AddTagsToResource"].applicator.apply(partialParams)
        );
    }

    invokeAssociateOpsItemRelatedItem(partialParams: ToOptional<{
      [K in keyof AssociateOpsItemRelatedItemRequest & keyof AssociateOpsItemRelatedItemRequest]: (AssociateOpsItemRelatedItemRequest & AssociateOpsItemRelatedItemRequest)[K]
    }>): Request<AssociateOpsItemRelatedItemResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateOpsItemRelatedItem(
          this.ops["AssociateOpsItemRelatedItem"].applicator.apply(partialParams)
        );
    }

    invokeCancelCommand(partialParams: ToOptional<{
      [K in keyof CancelCommandRequest & keyof CancelCommandRequest]: (CancelCommandRequest & CancelCommandRequest)[K]
    }>): Request<CancelCommandResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelCommand(
          this.ops["CancelCommand"].applicator.apply(partialParams)
        );
    }

    invokeCancelMaintenanceWindowExecution(partialParams: ToOptional<{
      [K in keyof CancelMaintenanceWindowExecutionRequest & keyof CancelMaintenanceWindowExecutionRequest]: (CancelMaintenanceWindowExecutionRequest & CancelMaintenanceWindowExecutionRequest)[K]
    }>): Request<CancelMaintenanceWindowExecutionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelMaintenanceWindowExecution(
          this.ops["CancelMaintenanceWindowExecution"].applicator.apply(partialParams)
        );
    }

    invokeCreateActivation(partialParams: ToOptional<{
      [K in keyof CreateActivationRequest & keyof CreateActivationRequest]: (CreateActivationRequest & CreateActivationRequest)[K]
    }>): Request<CreateActivationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createActivation(
          this.ops["CreateActivation"].applicator.apply(partialParams)
        );
    }

    invokeCreateAssociation(partialParams: ToOptional<{
      [K in keyof CreateAssociationRequest & keyof CreateAssociationRequest]: (CreateAssociationRequest & CreateAssociationRequest)[K]
    }>): Request<CreateAssociationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAssociation(
          this.ops["CreateAssociation"].applicator.apply(partialParams)
        );
    }

    invokeCreateAssociationBatch(partialParams: ToOptional<{
      [K in keyof CreateAssociationBatchRequest & keyof CreateAssociationBatchRequest]: (CreateAssociationBatchRequest & CreateAssociationBatchRequest)[K]
    }>): Request<CreateAssociationBatchResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAssociationBatch(
          this.ops["CreateAssociationBatch"].applicator.apply(partialParams)
        );
    }

    invokeCreateDocument(partialParams: ToOptional<{
      [K in keyof CreateDocumentRequest & keyof CreateDocumentRequest]: (CreateDocumentRequest & CreateDocumentRequest)[K]
    }>): Request<CreateDocumentResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDocument(
          this.ops["CreateDocument"].applicator.apply(partialParams)
        );
    }

    invokeCreateMaintenanceWindow(partialParams: ToOptional<{
      [K in keyof CreateMaintenanceWindowRequest & keyof CreateMaintenanceWindowRequest]: (CreateMaintenanceWindowRequest & CreateMaintenanceWindowRequest)[K]
    }>): Request<CreateMaintenanceWindowResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMaintenanceWindow(
          this.ops["CreateMaintenanceWindow"].applicator.apply(partialParams)
        );
    }

    invokeCreateOpsItem(partialParams: ToOptional<{
      [K in keyof CreateOpsItemRequest & keyof CreateOpsItemRequest]: (CreateOpsItemRequest & CreateOpsItemRequest)[K]
    }>): Request<CreateOpsItemResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createOpsItem(
          this.ops["CreateOpsItem"].applicator.apply(partialParams)
        );
    }

    invokeCreateOpsMetadata(partialParams: ToOptional<{
      [K in keyof CreateOpsMetadataRequest & keyof CreateOpsMetadataRequest]: (CreateOpsMetadataRequest & CreateOpsMetadataRequest)[K]
    }>): Request<CreateOpsMetadataResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createOpsMetadata(
          this.ops["CreateOpsMetadata"].applicator.apply(partialParams)
        );
    }

    invokeCreatePatchBaseline(partialParams: ToOptional<{
      [K in keyof CreatePatchBaselineRequest & keyof CreatePatchBaselineRequest]: (CreatePatchBaselineRequest & CreatePatchBaselineRequest)[K]
    }>): Request<CreatePatchBaselineResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPatchBaseline(
          this.ops["CreatePatchBaseline"].applicator.apply(partialParams)
        );
    }

    invokeCreateResourceDataSync(partialParams: ToOptional<{
      [K in keyof CreateResourceDataSyncRequest & keyof CreateResourceDataSyncRequest]: (CreateResourceDataSyncRequest & CreateResourceDataSyncRequest)[K]
    }>): Request<CreateResourceDataSyncResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createResourceDataSync(
          this.ops["CreateResourceDataSync"].applicator.apply(partialParams)
        );
    }

    invokeDeleteActivation(partialParams: ToOptional<{
      [K in keyof DeleteActivationRequest & keyof DeleteActivationRequest]: (DeleteActivationRequest & DeleteActivationRequest)[K]
    }>): Request<DeleteActivationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteActivation(
          this.ops["DeleteActivation"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDocument(partialParams: ToOptional<{
      [K in keyof DeleteDocumentRequest & keyof DeleteDocumentRequest]: (DeleteDocumentRequest & DeleteDocumentRequest)[K]
    }>): Request<DeleteDocumentResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDocument(
          this.ops["DeleteDocument"].applicator.apply(partialParams)
        );
    }

    invokeDeleteInventory(partialParams: ToOptional<{
      [K in keyof DeleteInventoryRequest & keyof DeleteInventoryRequest]: (DeleteInventoryRequest & DeleteInventoryRequest)[K]
    }>): Request<DeleteInventoryResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteInventory(
          this.ops["DeleteInventory"].applicator.apply(partialParams)
        );
    }

    invokeDeleteMaintenanceWindow(partialParams: ToOptional<{
      [K in keyof DeleteMaintenanceWindowRequest & keyof DeleteMaintenanceWindowRequest]: (DeleteMaintenanceWindowRequest & DeleteMaintenanceWindowRequest)[K]
    }>): Request<DeleteMaintenanceWindowResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteMaintenanceWindow(
          this.ops["DeleteMaintenanceWindow"].applicator.apply(partialParams)
        );
    }

    invokeDeleteOpsMetadata(partialParams: ToOptional<{
      [K in keyof DeleteOpsMetadataRequest & keyof DeleteOpsMetadataRequest]: (DeleteOpsMetadataRequest & DeleteOpsMetadataRequest)[K]
    }>): Request<DeleteOpsMetadataResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteOpsMetadata(
          this.ops["DeleteOpsMetadata"].applicator.apply(partialParams)
        );
    }

    invokeDeleteParameter(partialParams: ToOptional<{
      [K in keyof DeleteParameterRequest & keyof DeleteParameterRequest]: (DeleteParameterRequest & DeleteParameterRequest)[K]
    }>): Request<DeleteParameterResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteParameter(
          this.ops["DeleteParameter"].applicator.apply(partialParams)
        );
    }

    invokeDeleteParameters(partialParams: ToOptional<{
      [K in keyof DeleteParametersRequest & keyof DeleteParametersRequest]: (DeleteParametersRequest & DeleteParametersRequest)[K]
    }>): Request<DeleteParametersResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteParameters(
          this.ops["DeleteParameters"].applicator.apply(partialParams)
        );
    }

    invokeDeletePatchBaseline(partialParams: ToOptional<{
      [K in keyof Omit<DeletePatchBaselineRequest, "BaselineId"> & keyof DeletePatchBaselineRequest]: (Omit<DeletePatchBaselineRequest, "BaselineId"> & DeletePatchBaselineRequest)[K]
    }>): Request<DeletePatchBaselineResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePatchBaseline(
          this.ops["DeletePatchBaseline"].applicator.apply(partialParams)
        );
    }

    invokeDeleteResourceDataSync(partialParams: ToOptional<{
      [K in keyof DeleteResourceDataSyncRequest & keyof DeleteResourceDataSyncRequest]: (DeleteResourceDataSyncRequest & DeleteResourceDataSyncRequest)[K]
    }>): Request<DeleteResourceDataSyncResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteResourceDataSync(
          this.ops["DeleteResourceDataSync"].applicator.apply(partialParams)
        );
    }

    invokeDeregisterManagedInstance(partialParams: ToOptional<{
      [K in keyof DeregisterManagedInstanceRequest & keyof DeregisterManagedInstanceRequest]: (DeregisterManagedInstanceRequest & DeregisterManagedInstanceRequest)[K]
    }>): Request<DeregisterManagedInstanceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterManagedInstance(
          this.ops["DeregisterManagedInstance"].applicator.apply(partialParams)
        );
    }

    invokeDeregisterPatchBaselineForPatchGroup(partialParams: ToOptional<{
      [K in keyof Omit<DeregisterPatchBaselineForPatchGroupRequest, "BaselineId"> & keyof DeregisterPatchBaselineForPatchGroupRequest]: (Omit<DeregisterPatchBaselineForPatchGroupRequest, "BaselineId"> & DeregisterPatchBaselineForPatchGroupRequest)[K]
    }>): Request<DeregisterPatchBaselineForPatchGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterPatchBaselineForPatchGroup(
          this.ops["DeregisterPatchBaselineForPatchGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeregisterTargetFromMaintenanceWindow(partialParams: ToOptional<{
      [K in keyof DeregisterTargetFromMaintenanceWindowRequest & keyof DeregisterTargetFromMaintenanceWindowRequest]: (DeregisterTargetFromMaintenanceWindowRequest & DeregisterTargetFromMaintenanceWindowRequest)[K]
    }>): Request<DeregisterTargetFromMaintenanceWindowResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterTargetFromMaintenanceWindow(
          this.ops["DeregisterTargetFromMaintenanceWindow"].applicator.apply(partialParams)
        );
    }

    invokeDeregisterTaskFromMaintenanceWindow(partialParams: ToOptional<{
      [K in keyof DeregisterTaskFromMaintenanceWindowRequest & keyof DeregisterTaskFromMaintenanceWindowRequest]: (DeregisterTaskFromMaintenanceWindowRequest & DeregisterTaskFromMaintenanceWindowRequest)[K]
    }>): Request<DeregisterTaskFromMaintenanceWindowResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterTaskFromMaintenanceWindow(
          this.ops["DeregisterTaskFromMaintenanceWindow"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAssociationExecutionTargets(partialParams: ToOptional<{
      [K in keyof DescribeAssociationExecutionTargetsRequest & keyof DescribeAssociationExecutionTargetsRequest]: (DescribeAssociationExecutionTargetsRequest & DescribeAssociationExecutionTargetsRequest)[K]
    }>): Request<DescribeAssociationExecutionTargetsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAssociationExecutionTargets(
          this.ops["DescribeAssociationExecutionTargets"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAssociationExecutions(partialParams: ToOptional<{
      [K in keyof DescribeAssociationExecutionsRequest & keyof DescribeAssociationExecutionsRequest]: (DescribeAssociationExecutionsRequest & DescribeAssociationExecutionsRequest)[K]
    }>): Request<DescribeAssociationExecutionsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAssociationExecutions(
          this.ops["DescribeAssociationExecutions"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAutomationStepExecutions(partialParams: ToOptional<{
      [K in keyof DescribeAutomationStepExecutionsRequest & keyof DescribeAutomationStepExecutionsRequest]: (DescribeAutomationStepExecutionsRequest & DescribeAutomationStepExecutionsRequest)[K]
    }>): Request<DescribeAutomationStepExecutionsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAutomationStepExecutions(
          this.ops["DescribeAutomationStepExecutions"].applicator.apply(partialParams)
        );
    }

    invokeDescribeDocument(partialParams: ToOptional<{
      [K in keyof DescribeDocumentRequest & keyof DescribeDocumentRequest]: (DescribeDocumentRequest & DescribeDocumentRequest)[K]
    }>): Request<DescribeDocumentResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDocument(
          this.ops["DescribeDocument"].applicator.apply(partialParams)
        );
    }

    invokeDescribeDocumentPermission(partialParams: ToOptional<{
      [K in keyof DescribeDocumentPermissionRequest & keyof DescribeDocumentPermissionRequest]: (DescribeDocumentPermissionRequest & DescribeDocumentPermissionRequest)[K]
    }>): Request<DescribeDocumentPermissionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDocumentPermission(
          this.ops["DescribeDocumentPermission"].applicator.apply(partialParams)
        );
    }

    invokeDescribeEffectiveInstanceAssociations(partialParams: ToOptional<{
      [K in keyof DescribeEffectiveInstanceAssociationsRequest & keyof DescribeEffectiveInstanceAssociationsRequest]: (DescribeEffectiveInstanceAssociationsRequest & DescribeEffectiveInstanceAssociationsRequest)[K]
    }>): Request<DescribeEffectiveInstanceAssociationsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeEffectiveInstanceAssociations(
          this.ops["DescribeEffectiveInstanceAssociations"].applicator.apply(partialParams)
        );
    }

    invokeDescribeEffectivePatchesForPatchBaseline(partialParams: ToOptional<{
      [K in keyof Omit<DescribeEffectivePatchesForPatchBaselineRequest, "BaselineId"> & keyof DescribeEffectivePatchesForPatchBaselineRequest]: (Omit<DescribeEffectivePatchesForPatchBaselineRequest, "BaselineId"> & DescribeEffectivePatchesForPatchBaselineRequest)[K]
    }>): Request<DescribeEffectivePatchesForPatchBaselineResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeEffectivePatchesForPatchBaseline(
          this.ops["DescribeEffectivePatchesForPatchBaseline"].applicator.apply(partialParams)
        );
    }

    invokeDescribeInstanceAssociationsStatus(partialParams: ToOptional<{
      [K in keyof DescribeInstanceAssociationsStatusRequest & keyof DescribeInstanceAssociationsStatusRequest]: (DescribeInstanceAssociationsStatusRequest & DescribeInstanceAssociationsStatusRequest)[K]
    }>): Request<DescribeInstanceAssociationsStatusResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeInstanceAssociationsStatus(
          this.ops["DescribeInstanceAssociationsStatus"].applicator.apply(partialParams)
        );
    }

    invokeDescribeInstancePatchStates(partialParams: ToOptional<{
      [K in keyof DescribeInstancePatchStatesRequest & keyof DescribeInstancePatchStatesRequest]: (DescribeInstancePatchStatesRequest & DescribeInstancePatchStatesRequest)[K]
    }>): Request<DescribeInstancePatchStatesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeInstancePatchStates(
          this.ops["DescribeInstancePatchStates"].applicator.apply(partialParams)
        );
    }

    invokeDescribeInstancePatchStatesForPatchGroup(partialParams: ToOptional<{
      [K in keyof DescribeInstancePatchStatesForPatchGroupRequest & keyof DescribeInstancePatchStatesForPatchGroupRequest]: (DescribeInstancePatchStatesForPatchGroupRequest & DescribeInstancePatchStatesForPatchGroupRequest)[K]
    }>): Request<DescribeInstancePatchStatesForPatchGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeInstancePatchStatesForPatchGroup(
          this.ops["DescribeInstancePatchStatesForPatchGroup"].applicator.apply(partialParams)
        );
    }

    invokeDescribeInstancePatches(partialParams: ToOptional<{
      [K in keyof DescribeInstancePatchesRequest & keyof DescribeInstancePatchesRequest]: (DescribeInstancePatchesRequest & DescribeInstancePatchesRequest)[K]
    }>): Request<DescribeInstancePatchesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeInstancePatches(
          this.ops["DescribeInstancePatches"].applicator.apply(partialParams)
        );
    }

    invokeDescribeMaintenanceWindowExecutionTaskInvocations(partialParams: ToOptional<{
      [K in keyof DescribeMaintenanceWindowExecutionTaskInvocationsRequest & keyof DescribeMaintenanceWindowExecutionTaskInvocationsRequest]: (DescribeMaintenanceWindowExecutionTaskInvocationsRequest & DescribeMaintenanceWindowExecutionTaskInvocationsRequest)[K]
    }>): Request<DescribeMaintenanceWindowExecutionTaskInvocationsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeMaintenanceWindowExecutionTaskInvocations(
          this.ops["DescribeMaintenanceWindowExecutionTaskInvocations"].applicator.apply(partialParams)
        );
    }

    invokeDescribeMaintenanceWindowExecutionTasks(partialParams: ToOptional<{
      [K in keyof DescribeMaintenanceWindowExecutionTasksRequest & keyof DescribeMaintenanceWindowExecutionTasksRequest]: (DescribeMaintenanceWindowExecutionTasksRequest & DescribeMaintenanceWindowExecutionTasksRequest)[K]
    }>): Request<DescribeMaintenanceWindowExecutionTasksResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeMaintenanceWindowExecutionTasks(
          this.ops["DescribeMaintenanceWindowExecutionTasks"].applicator.apply(partialParams)
        );
    }

    invokeDescribeMaintenanceWindowExecutions(partialParams: ToOptional<{
      [K in keyof DescribeMaintenanceWindowExecutionsRequest & keyof DescribeMaintenanceWindowExecutionsRequest]: (DescribeMaintenanceWindowExecutionsRequest & DescribeMaintenanceWindowExecutionsRequest)[K]
    }>): Request<DescribeMaintenanceWindowExecutionsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeMaintenanceWindowExecutions(
          this.ops["DescribeMaintenanceWindowExecutions"].applicator.apply(partialParams)
        );
    }

    invokeDescribeMaintenanceWindowTargets(partialParams: ToOptional<{
      [K in keyof DescribeMaintenanceWindowTargetsRequest & keyof DescribeMaintenanceWindowTargetsRequest]: (DescribeMaintenanceWindowTargetsRequest & DescribeMaintenanceWindowTargetsRequest)[K]
    }>): Request<DescribeMaintenanceWindowTargetsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeMaintenanceWindowTargets(
          this.ops["DescribeMaintenanceWindowTargets"].applicator.apply(partialParams)
        );
    }

    invokeDescribeMaintenanceWindowTasks(partialParams: ToOptional<{
      [K in keyof DescribeMaintenanceWindowTasksRequest & keyof DescribeMaintenanceWindowTasksRequest]: (DescribeMaintenanceWindowTasksRequest & DescribeMaintenanceWindowTasksRequest)[K]
    }>): Request<DescribeMaintenanceWindowTasksResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeMaintenanceWindowTasks(
          this.ops["DescribeMaintenanceWindowTasks"].applicator.apply(partialParams)
        );
    }

    invokeDescribeMaintenanceWindowsForTarget(partialParams: ToOptional<{
      [K in keyof DescribeMaintenanceWindowsForTargetRequest & keyof DescribeMaintenanceWindowsForTargetRequest]: (DescribeMaintenanceWindowsForTargetRequest & DescribeMaintenanceWindowsForTargetRequest)[K]
    }>): Request<DescribeMaintenanceWindowsForTargetResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeMaintenanceWindowsForTarget(
          this.ops["DescribeMaintenanceWindowsForTarget"].applicator.apply(partialParams)
        );
    }

    invokeDescribePatchGroupState(partialParams: ToOptional<{
      [K in keyof DescribePatchGroupStateRequest & keyof DescribePatchGroupStateRequest]: (DescribePatchGroupStateRequest & DescribePatchGroupStateRequest)[K]
    }>): Request<DescribePatchGroupStateResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describePatchGroupState(
          this.ops["DescribePatchGroupState"].applicator.apply(partialParams)
        );
    }

    invokeDescribePatchProperties(partialParams: ToOptional<{
      [K in keyof DescribePatchPropertiesRequest & keyof DescribePatchPropertiesRequest]: (DescribePatchPropertiesRequest & DescribePatchPropertiesRequest)[K]
    }>): Request<DescribePatchPropertiesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describePatchProperties(
          this.ops["DescribePatchProperties"].applicator.apply(partialParams)
        );
    }

    invokeDescribeSessions(partialParams: ToOptional<{
      [K in keyof DescribeSessionsRequest & keyof DescribeSessionsRequest]: (DescribeSessionsRequest & DescribeSessionsRequest)[K]
    }>): Request<DescribeSessionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeSessions(
          this.ops["DescribeSessions"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateOpsItemRelatedItem(partialParams: ToOptional<{
      [K in keyof DisassociateOpsItemRelatedItemRequest & keyof DisassociateOpsItemRelatedItemRequest]: (DisassociateOpsItemRelatedItemRequest & DisassociateOpsItemRelatedItemRequest)[K]
    }>): Request<DisassociateOpsItemRelatedItemResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateOpsItemRelatedItem(
          this.ops["DisassociateOpsItemRelatedItem"].applicator.apply(partialParams)
        );
    }

    invokeGetAutomationExecution(partialParams: ToOptional<{
      [K in keyof GetAutomationExecutionRequest & keyof GetAutomationExecutionRequest]: (GetAutomationExecutionRequest & GetAutomationExecutionRequest)[K]
    }>): Request<GetAutomationExecutionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAutomationExecution(
          this.ops["GetAutomationExecution"].applicator.apply(partialParams)
        );
    }

    invokeGetCalendarState(partialParams: ToOptional<{
      [K in keyof GetCalendarStateRequest & keyof GetCalendarStateRequest]: (GetCalendarStateRequest & GetCalendarStateRequest)[K]
    }>): Request<GetCalendarStateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCalendarState(
          this.ops["GetCalendarState"].applicator.apply(partialParams)
        );
    }

    invokeGetCommandInvocation(partialParams: ToOptional<{
      [K in keyof GetCommandInvocationRequest & keyof GetCommandInvocationRequest]: (GetCommandInvocationRequest & GetCommandInvocationRequest)[K]
    }>): Request<GetCommandInvocationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCommandInvocation(
          this.ops["GetCommandInvocation"].applicator.apply(partialParams)
        );
    }

    invokeGetConnectionStatus(partialParams: ToOptional<{
      [K in keyof GetConnectionStatusRequest & keyof GetConnectionStatusRequest]: (GetConnectionStatusRequest & GetConnectionStatusRequest)[K]
    }>): Request<GetConnectionStatusResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getConnectionStatus(
          this.ops["GetConnectionStatus"].applicator.apply(partialParams)
        );
    }

    invokeGetDeployablePatchSnapshotForInstance(partialParams: ToOptional<{
      [K in keyof GetDeployablePatchSnapshotForInstanceRequest & keyof GetDeployablePatchSnapshotForInstanceRequest]: (GetDeployablePatchSnapshotForInstanceRequest & GetDeployablePatchSnapshotForInstanceRequest)[K]
    }>): Request<GetDeployablePatchSnapshotForInstanceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDeployablePatchSnapshotForInstance(
          this.ops["GetDeployablePatchSnapshotForInstance"].applicator.apply(partialParams)
        );
    }

    invokeGetDocument(partialParams: ToOptional<{
      [K in keyof GetDocumentRequest & keyof GetDocumentRequest]: (GetDocumentRequest & GetDocumentRequest)[K]
    }>): Request<GetDocumentResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDocument(
          this.ops["GetDocument"].applicator.apply(partialParams)
        );
    }

    invokeGetMaintenanceWindow(partialParams: ToOptional<{
      [K in keyof GetMaintenanceWindowRequest & keyof GetMaintenanceWindowRequest]: (GetMaintenanceWindowRequest & GetMaintenanceWindowRequest)[K]
    }>): Request<GetMaintenanceWindowResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMaintenanceWindow(
          this.ops["GetMaintenanceWindow"].applicator.apply(partialParams)
        );
    }

    invokeGetMaintenanceWindowExecution(partialParams: ToOptional<{
      [K in keyof GetMaintenanceWindowExecutionRequest & keyof GetMaintenanceWindowExecutionRequest]: (GetMaintenanceWindowExecutionRequest & GetMaintenanceWindowExecutionRequest)[K]
    }>): Request<GetMaintenanceWindowExecutionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMaintenanceWindowExecution(
          this.ops["GetMaintenanceWindowExecution"].applicator.apply(partialParams)
        );
    }

    invokeGetMaintenanceWindowExecutionTask(partialParams: ToOptional<{
      [K in keyof GetMaintenanceWindowExecutionTaskRequest & keyof GetMaintenanceWindowExecutionTaskRequest]: (GetMaintenanceWindowExecutionTaskRequest & GetMaintenanceWindowExecutionTaskRequest)[K]
    }>): Request<GetMaintenanceWindowExecutionTaskResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMaintenanceWindowExecutionTask(
          this.ops["GetMaintenanceWindowExecutionTask"].applicator.apply(partialParams)
        );
    }

    invokeGetMaintenanceWindowExecutionTaskInvocation(partialParams: ToOptional<{
      [K in keyof GetMaintenanceWindowExecutionTaskInvocationRequest & keyof GetMaintenanceWindowExecutionTaskInvocationRequest]: (GetMaintenanceWindowExecutionTaskInvocationRequest & GetMaintenanceWindowExecutionTaskInvocationRequest)[K]
    }>): Request<GetMaintenanceWindowExecutionTaskInvocationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMaintenanceWindowExecutionTaskInvocation(
          this.ops["GetMaintenanceWindowExecutionTaskInvocation"].applicator.apply(partialParams)
        );
    }

    invokeGetMaintenanceWindowTask(partialParams: ToOptional<{
      [K in keyof GetMaintenanceWindowTaskRequest & keyof GetMaintenanceWindowTaskRequest]: (GetMaintenanceWindowTaskRequest & GetMaintenanceWindowTaskRequest)[K]
    }>): Request<GetMaintenanceWindowTaskResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMaintenanceWindowTask(
          this.ops["GetMaintenanceWindowTask"].applicator.apply(partialParams)
        );
    }

    invokeGetOpsItem(partialParams: ToOptional<{
      [K in keyof GetOpsItemRequest & keyof GetOpsItemRequest]: (GetOpsItemRequest & GetOpsItemRequest)[K]
    }>): Request<GetOpsItemResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getOpsItem(
          this.ops["GetOpsItem"].applicator.apply(partialParams)
        );
    }

    invokeGetOpsMetadata(partialParams: ToOptional<{
      [K in keyof GetOpsMetadataRequest & keyof GetOpsMetadataRequest]: (GetOpsMetadataRequest & GetOpsMetadataRequest)[K]
    }>): Request<GetOpsMetadataResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getOpsMetadata(
          this.ops["GetOpsMetadata"].applicator.apply(partialParams)
        );
    }

    invokeGetParameter(partialParams: ToOptional<{
      [K in keyof GetParameterRequest & keyof GetParameterRequest]: (GetParameterRequest & GetParameterRequest)[K]
    }>): Request<GetParameterResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getParameter(
          this.ops["GetParameter"].applicator.apply(partialParams)
        );
    }

    invokeGetParameterHistory(partialParams: ToOptional<{
      [K in keyof GetParameterHistoryRequest & keyof GetParameterHistoryRequest]: (GetParameterHistoryRequest & GetParameterHistoryRequest)[K]
    }>): Request<GetParameterHistoryResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getParameterHistory(
          this.ops["GetParameterHistory"].applicator.apply(partialParams)
        );
    }

    invokeGetParameters(partialParams: ToOptional<{
      [K in keyof GetParametersRequest & keyof GetParametersRequest]: (GetParametersRequest & GetParametersRequest)[K]
    }>): Request<GetParametersResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getParameters(
          this.ops["GetParameters"].applicator.apply(partialParams)
        );
    }

    invokeGetParametersByPath(partialParams: ToOptional<{
      [K in keyof GetParametersByPathRequest & keyof GetParametersByPathRequest]: (GetParametersByPathRequest & GetParametersByPathRequest)[K]
    }>): Request<GetParametersByPathResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getParametersByPath(
          this.ops["GetParametersByPath"].applicator.apply(partialParams)
        );
    }

    invokeGetPatchBaseline(partialParams: ToOptional<{
      [K in keyof Omit<GetPatchBaselineRequest, "BaselineId"> & keyof GetPatchBaselineRequest]: (Omit<GetPatchBaselineRequest, "BaselineId"> & GetPatchBaselineRequest)[K]
    }>): Request<GetPatchBaselineResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPatchBaseline(
          this.ops["GetPatchBaseline"].applicator.apply(partialParams)
        );
    }

    invokeGetPatchBaselineForPatchGroup(partialParams: ToOptional<{
      [K in keyof GetPatchBaselineForPatchGroupRequest & keyof GetPatchBaselineForPatchGroupRequest]: (GetPatchBaselineForPatchGroupRequest & GetPatchBaselineForPatchGroupRequest)[K]
    }>): Request<GetPatchBaselineForPatchGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPatchBaselineForPatchGroup(
          this.ops["GetPatchBaselineForPatchGroup"].applicator.apply(partialParams)
        );
    }

    invokeGetServiceSetting(partialParams: ToOptional<{
      [K in keyof GetServiceSettingRequest & keyof GetServiceSettingRequest]: (GetServiceSettingRequest & GetServiceSettingRequest)[K]
    }>): Request<GetServiceSettingResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getServiceSetting(
          this.ops["GetServiceSetting"].applicator.apply(partialParams)
        );
    }

    invokeLabelParameterVersion(partialParams: ToOptional<{
      [K in keyof LabelParameterVersionRequest & keyof LabelParameterVersionRequest]: (LabelParameterVersionRequest & LabelParameterVersionRequest)[K]
    }>): Request<LabelParameterVersionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.labelParameterVersion(
          this.ops["LabelParameterVersion"].applicator.apply(partialParams)
        );
    }

    invokeListAssociationVersions(partialParams: ToOptional<{
      [K in keyof ListAssociationVersionsRequest & keyof ListAssociationVersionsRequest]: (ListAssociationVersionsRequest & ListAssociationVersionsRequest)[K]
    }>): Request<ListAssociationVersionsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAssociationVersions(
          this.ops["ListAssociationVersions"].applicator.apply(partialParams)
        );
    }

    invokeListDocumentMetadataHistory(partialParams: ToOptional<{
      [K in keyof ListDocumentMetadataHistoryRequest & keyof ListDocumentMetadataHistoryRequest]: (ListDocumentMetadataHistoryRequest & ListDocumentMetadataHistoryRequest)[K]
    }>): Request<ListDocumentMetadataHistoryResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDocumentMetadataHistory(
          this.ops["ListDocumentMetadataHistory"].applicator.apply(partialParams)
        );
    }

    invokeListDocumentVersions(partialParams: ToOptional<{
      [K in keyof ListDocumentVersionsRequest & keyof ListDocumentVersionsRequest]: (ListDocumentVersionsRequest & ListDocumentVersionsRequest)[K]
    }>): Request<ListDocumentVersionsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDocumentVersions(
          this.ops["ListDocumentVersions"].applicator.apply(partialParams)
        );
    }

    invokeListInventoryEntries(partialParams: ToOptional<{
      [K in keyof ListInventoryEntriesRequest & keyof ListInventoryEntriesRequest]: (ListInventoryEntriesRequest & ListInventoryEntriesRequest)[K]
    }>): Request<ListInventoryEntriesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listInventoryEntries(
          this.ops["ListInventoryEntries"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeModifyDocumentPermission(partialParams: ToOptional<{
      [K in keyof ModifyDocumentPermissionRequest & keyof ModifyDocumentPermissionRequest]: (ModifyDocumentPermissionRequest & ModifyDocumentPermissionRequest)[K]
    }>): Request<ModifyDocumentPermissionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDocumentPermission(
          this.ops["ModifyDocumentPermission"].applicator.apply(partialParams)
        );
    }

    invokePutComplianceItems(partialParams: ToOptional<{
      [K in keyof PutComplianceItemsRequest & keyof PutComplianceItemsRequest]: (PutComplianceItemsRequest & PutComplianceItemsRequest)[K]
    }>): Request<PutComplianceItemsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putComplianceItems(
          this.ops["PutComplianceItems"].applicator.apply(partialParams)
        );
    }

    invokePutInventory(partialParams: ToOptional<{
      [K in keyof PutInventoryRequest & keyof PutInventoryRequest]: (PutInventoryRequest & PutInventoryRequest)[K]
    }>): Request<PutInventoryResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putInventory(
          this.ops["PutInventory"].applicator.apply(partialParams)
        );
    }

    invokePutParameter(partialParams: ToOptional<{
      [K in keyof PutParameterRequest & keyof PutParameterRequest]: (PutParameterRequest & PutParameterRequest)[K]
    }>): Request<PutParameterResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putParameter(
          this.ops["PutParameter"].applicator.apply(partialParams)
        );
    }

    invokeRegisterDefaultPatchBaseline(partialParams: ToOptional<{
      [K in keyof Omit<RegisterDefaultPatchBaselineRequest, "BaselineId"> & keyof RegisterDefaultPatchBaselineRequest]: (Omit<RegisterDefaultPatchBaselineRequest, "BaselineId"> & RegisterDefaultPatchBaselineRequest)[K]
    }>): Request<RegisterDefaultPatchBaselineResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerDefaultPatchBaseline(
          this.ops["RegisterDefaultPatchBaseline"].applicator.apply(partialParams)
        );
    }

    invokeRegisterPatchBaselineForPatchGroup(partialParams: ToOptional<{
      [K in keyof Omit<RegisterPatchBaselineForPatchGroupRequest, "BaselineId"> & keyof Omit<RegisterPatchBaselineForPatchGroupRequest, "PatchGroup">]: (Omit<RegisterPatchBaselineForPatchGroupRequest, "BaselineId"> & Omit<RegisterPatchBaselineForPatchGroupRequest, "PatchGroup">)[K]
    }>): Request<RegisterPatchBaselineForPatchGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerPatchBaselineForPatchGroup(
          this.ops["RegisterPatchBaselineForPatchGroup"].applicator.apply(partialParams)
        );
    }

    invokeRegisterTargetWithMaintenanceWindow(partialParams: ToOptional<{
      [K in keyof RegisterTargetWithMaintenanceWindowRequest & keyof RegisterTargetWithMaintenanceWindowRequest]: (RegisterTargetWithMaintenanceWindowRequest & RegisterTargetWithMaintenanceWindowRequest)[K]
    }>): Request<RegisterTargetWithMaintenanceWindowResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerTargetWithMaintenanceWindow(
          this.ops["RegisterTargetWithMaintenanceWindow"].applicator.apply(partialParams)
        );
    }

    invokeRegisterTaskWithMaintenanceWindow(partialParams: ToOptional<{
      [K in keyof RegisterTaskWithMaintenanceWindowRequest & keyof RegisterTaskWithMaintenanceWindowRequest]: (RegisterTaskWithMaintenanceWindowRequest & RegisterTaskWithMaintenanceWindowRequest)[K]
    }>): Request<RegisterTaskWithMaintenanceWindowResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerTaskWithMaintenanceWindow(
          this.ops["RegisterTaskWithMaintenanceWindow"].applicator.apply(partialParams)
        );
    }

    invokeRemoveTagsFromResource(partialParams: ToOptional<{
      [K in keyof RemoveTagsFromResourceRequest & keyof RemoveTagsFromResourceRequest]: (RemoveTagsFromResourceRequest & RemoveTagsFromResourceRequest)[K]
    }>): Request<RemoveTagsFromResourceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeTagsFromResource(
          this.ops["RemoveTagsFromResource"].applicator.apply(partialParams)
        );
    }

    invokeResetServiceSetting(partialParams: ToOptional<{
      [K in keyof ResetServiceSettingRequest & keyof ResetServiceSettingRequest]: (ResetServiceSettingRequest & ResetServiceSettingRequest)[K]
    }>): Request<ResetServiceSettingResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetServiceSetting(
          this.ops["ResetServiceSetting"].applicator.apply(partialParams)
        );
    }

    invokeResumeSession(partialParams: ToOptional<{
      [K in keyof ResumeSessionRequest & keyof ResumeSessionRequest]: (ResumeSessionRequest & ResumeSessionRequest)[K]
    }>): Request<ResumeSessionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resumeSession(
          this.ops["ResumeSession"].applicator.apply(partialParams)
        );
    }

    invokeSendAutomationSignal(partialParams: ToOptional<{
      [K in keyof SendAutomationSignalRequest & keyof SendAutomationSignalRequest]: (SendAutomationSignalRequest & SendAutomationSignalRequest)[K]
    }>): Request<SendAutomationSignalResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.sendAutomationSignal(
          this.ops["SendAutomationSignal"].applicator.apply(partialParams)
        );
    }

    invokeSendCommand(partialParams: ToOptional<{
      [K in keyof SendCommandRequest & keyof SendCommandRequest]: (SendCommandRequest & SendCommandRequest)[K]
    }>): Request<SendCommandResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.sendCommand(
          this.ops["SendCommand"].applicator.apply(partialParams)
        );
    }

    invokeStartAssociationsOnce(partialParams: ToOptional<{
      [K in keyof StartAssociationsOnceRequest & keyof StartAssociationsOnceRequest]: (StartAssociationsOnceRequest & StartAssociationsOnceRequest)[K]
    }>): Request<StartAssociationsOnceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startAssociationsOnce(
          this.ops["StartAssociationsOnce"].applicator.apply(partialParams)
        );
    }

    invokeStartAutomationExecution(partialParams: ToOptional<{
      [K in keyof StartAutomationExecutionRequest & keyof StartAutomationExecutionRequest]: (StartAutomationExecutionRequest & StartAutomationExecutionRequest)[K]
    }>): Request<StartAutomationExecutionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startAutomationExecution(
          this.ops["StartAutomationExecution"].applicator.apply(partialParams)
        );
    }

    invokeStartChangeRequestExecution(partialParams: ToOptional<{
      [K in keyof StartChangeRequestExecutionRequest & keyof StartChangeRequestExecutionRequest]: (StartChangeRequestExecutionRequest & StartChangeRequestExecutionRequest)[K]
    }>): Request<StartChangeRequestExecutionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startChangeRequestExecution(
          this.ops["StartChangeRequestExecution"].applicator.apply(partialParams)
        );
    }

    invokeStartSession(partialParams: ToOptional<{
      [K in keyof StartSessionRequest & keyof StartSessionRequest]: (StartSessionRequest & StartSessionRequest)[K]
    }>): Request<StartSessionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startSession(
          this.ops["StartSession"].applicator.apply(partialParams)
        );
    }

    invokeStopAutomationExecution(partialParams: ToOptional<{
      [K in keyof StopAutomationExecutionRequest & keyof StopAutomationExecutionRequest]: (StopAutomationExecutionRequest & StopAutomationExecutionRequest)[K]
    }>): Request<StopAutomationExecutionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopAutomationExecution(
          this.ops["StopAutomationExecution"].applicator.apply(partialParams)
        );
    }

    invokeTerminateSession(partialParams: ToOptional<{
      [K in keyof TerminateSessionRequest & keyof TerminateSessionRequest]: (TerminateSessionRequest & TerminateSessionRequest)[K]
    }>): Request<TerminateSessionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.terminateSession(
          this.ops["TerminateSession"].applicator.apply(partialParams)
        );
    }

    invokeUnlabelParameterVersion(partialParams: ToOptional<{
      [K in keyof UnlabelParameterVersionRequest & keyof UnlabelParameterVersionRequest]: (UnlabelParameterVersionRequest & UnlabelParameterVersionRequest)[K]
    }>): Request<UnlabelParameterVersionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.unlabelParameterVersion(
          this.ops["UnlabelParameterVersion"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAssociation(partialParams: ToOptional<{
      [K in keyof UpdateAssociationRequest & keyof UpdateAssociationRequest]: (UpdateAssociationRequest & UpdateAssociationRequest)[K]
    }>): Request<UpdateAssociationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAssociation(
          this.ops["UpdateAssociation"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAssociationStatus(partialParams: ToOptional<{
      [K in keyof UpdateAssociationStatusRequest & keyof UpdateAssociationStatusRequest]: (UpdateAssociationStatusRequest & UpdateAssociationStatusRequest)[K]
    }>): Request<UpdateAssociationStatusResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAssociationStatus(
          this.ops["UpdateAssociationStatus"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDocument(partialParams: ToOptional<{
      [K in keyof UpdateDocumentRequest & keyof UpdateDocumentRequest]: (UpdateDocumentRequest & UpdateDocumentRequest)[K]
    }>): Request<UpdateDocumentResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDocument(
          this.ops["UpdateDocument"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDocumentDefaultVersion(partialParams: ToOptional<{
      [K in keyof UpdateDocumentDefaultVersionRequest & keyof UpdateDocumentDefaultVersionRequest]: (UpdateDocumentDefaultVersionRequest & UpdateDocumentDefaultVersionRequest)[K]
    }>): Request<UpdateDocumentDefaultVersionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDocumentDefaultVersion(
          this.ops["UpdateDocumentDefaultVersion"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDocumentMetadata(partialParams: ToOptional<{
      [K in keyof UpdateDocumentMetadataRequest & keyof UpdateDocumentMetadataRequest]: (UpdateDocumentMetadataRequest & UpdateDocumentMetadataRequest)[K]
    }>): Request<UpdateDocumentMetadataResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDocumentMetadata(
          this.ops["UpdateDocumentMetadata"].applicator.apply(partialParams)
        );
    }

    invokeUpdateMaintenanceWindow(partialParams: ToOptional<{
      [K in keyof UpdateMaintenanceWindowRequest & keyof UpdateMaintenanceWindowRequest]: (UpdateMaintenanceWindowRequest & UpdateMaintenanceWindowRequest)[K]
    }>): Request<UpdateMaintenanceWindowResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateMaintenanceWindow(
          this.ops["UpdateMaintenanceWindow"].applicator.apply(partialParams)
        );
    }

    invokeUpdateMaintenanceWindowTarget(partialParams: ToOptional<{
      [K in keyof UpdateMaintenanceWindowTargetRequest & keyof UpdateMaintenanceWindowTargetRequest]: (UpdateMaintenanceWindowTargetRequest & UpdateMaintenanceWindowTargetRequest)[K]
    }>): Request<UpdateMaintenanceWindowTargetResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateMaintenanceWindowTarget(
          this.ops["UpdateMaintenanceWindowTarget"].applicator.apply(partialParams)
        );
    }

    invokeUpdateMaintenanceWindowTask(partialParams: ToOptional<{
      [K in keyof UpdateMaintenanceWindowTaskRequest & keyof UpdateMaintenanceWindowTaskRequest]: (UpdateMaintenanceWindowTaskRequest & UpdateMaintenanceWindowTaskRequest)[K]
    }>): Request<UpdateMaintenanceWindowTaskResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateMaintenanceWindowTask(
          this.ops["UpdateMaintenanceWindowTask"].applicator.apply(partialParams)
        );
    }

    invokeUpdateManagedInstanceRole(partialParams: ToOptional<{
      [K in keyof UpdateManagedInstanceRoleRequest & keyof UpdateManagedInstanceRoleRequest]: (UpdateManagedInstanceRoleRequest & UpdateManagedInstanceRoleRequest)[K]
    }>): Request<UpdateManagedInstanceRoleResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateManagedInstanceRole(
          this.ops["UpdateManagedInstanceRole"].applicator.apply(partialParams)
        );
    }

    invokeUpdateOpsItem(partialParams: ToOptional<{
      [K in keyof UpdateOpsItemRequest & keyof UpdateOpsItemRequest]: (UpdateOpsItemRequest & UpdateOpsItemRequest)[K]
    }>): Request<UpdateOpsItemResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateOpsItem(
          this.ops["UpdateOpsItem"].applicator.apply(partialParams)
        );
    }

    invokeUpdateOpsMetadata(partialParams: ToOptional<{
      [K in keyof UpdateOpsMetadataRequest & keyof UpdateOpsMetadataRequest]: (UpdateOpsMetadataRequest & UpdateOpsMetadataRequest)[K]
    }>): Request<UpdateOpsMetadataResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateOpsMetadata(
          this.ops["UpdateOpsMetadata"].applicator.apply(partialParams)
        );
    }

    invokeUpdatePatchBaseline(partialParams: ToOptional<{
      [K in keyof Omit<UpdatePatchBaselineRequest, "BaselineId"> & keyof UpdatePatchBaselineRequest]: (Omit<UpdatePatchBaselineRequest, "BaselineId"> & UpdatePatchBaselineRequest)[K]
    }>): Request<UpdatePatchBaselineResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePatchBaseline(
          this.ops["UpdatePatchBaseline"].applicator.apply(partialParams)
        );
    }

    invokeUpdateResourceDataSync(partialParams: ToOptional<{
      [K in keyof UpdateResourceDataSyncRequest & keyof UpdateResourceDataSyncRequest]: (UpdateResourceDataSyncRequest & UpdateResourceDataSyncRequest)[K]
    }>): Request<UpdateResourceDataSyncResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateResourceDataSync(
          this.ops["UpdateResourceDataSync"].applicator.apply(partialParams)
        );
    }

    invokeUpdateServiceSetting(partialParams: ToOptional<{
      [K in keyof UpdateServiceSettingRequest & keyof UpdateServiceSettingRequest]: (UpdateServiceSettingRequest & UpdateServiceSettingRequest)[K]
    }>): Request<UpdateServiceSettingResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateServiceSetting(
          this.ops["UpdateServiceSetting"].applicator.apply(partialParams)
        );
    }
}