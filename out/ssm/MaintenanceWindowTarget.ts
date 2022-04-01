
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AddTagsToResourceRequest,
    AssociateOpsItemRelatedItemRequest,
    CreateAssociationRequest,
    CreateDocumentRequest,
    CreateMaintenanceWindowRequest,
    CreateOpsItemRequest,
    CreatePatchBaselineRequest,
    DeleteDocumentRequest,
    DeleteMaintenanceWindowRequest,
    DeleteParameterRequest,
    DeregisterTargetFromMaintenanceWindowRequest,
    DeregisterTaskFromMaintenanceWindowRequest,
    DescribeDocumentRequest,
    DescribeDocumentPermissionRequest,
    DescribeMaintenanceWindowExecutionsRequest,
    DescribeMaintenanceWindowTargetsRequest,
    DescribeMaintenanceWindowTasksRequest,
    DescribeMaintenanceWindowsForTargetRequest,
    GetDocumentRequest,
    GetMaintenanceWindowRequest,
    GetMaintenanceWindowTaskRequest,
    GetParameterRequest,
    GetParameterHistoryRequest,
    LabelParameterVersionRequest,
    ListDocumentMetadataHistoryRequest,
    ListDocumentVersionsRequest,
    ListTagsForResourceRequest,
    ModifyDocumentPermissionRequest,
    PutComplianceItemsRequest,
    PutParameterRequest,
    RegisterTargetWithMaintenanceWindowRequest,
    RegisterTaskWithMaintenanceWindowRequest,
    RemoveTagsFromResourceRequest,
    UnlabelParameterVersionRequest,
    UpdateAssociationStatusRequest,
    UpdateDocumentRequest,
    UpdateDocumentDefaultVersionRequest,
    UpdateDocumentMetadataRequest,
    UpdateMaintenanceWindowRequest,
    UpdateMaintenanceWindowTargetRequest,
    UpdateMaintenanceWindowTaskRequest,
    AddTagsToResourceResult,
    AssociateOpsItemRelatedItemResponse,
    CreateAssociationResult,
    CreateDocumentResult,
    CreateMaintenanceWindowResult,
    CreateOpsItemResponse,
    CreatePatchBaselineResult,
    DeleteDocumentResult,
    DeleteMaintenanceWindowResult,
    DeleteParameterResult,
    DeregisterTargetFromMaintenanceWindowResult,
    DeregisterTaskFromMaintenanceWindowResult,
    DescribeDocumentResult,
    DescribeDocumentPermissionResponse,
    DescribeMaintenanceWindowExecutionsResult,
    DescribeMaintenanceWindowTargetsResult,
    DescribeMaintenanceWindowTasksResult,
    DescribeMaintenanceWindowsForTargetResult,
    GetDocumentResult,
    GetMaintenanceWindowResult,
    GetMaintenanceWindowTaskResult,
    GetParameterResult,
    GetParameterHistoryResult,
    LabelParameterVersionResult,
    ListDocumentMetadataHistoryResponse,
    ListDocumentVersionsResult,
    ListTagsForResourceResult,
    ModifyDocumentPermissionResponse,
    PutComplianceItemsResult,
    PutParameterResult,
    RegisterTargetWithMaintenanceWindowResult,
    RegisterTaskWithMaintenanceWindowResult,
    RemoveTagsFromResourceResult,
    UnlabelParameterVersionResult,
    UpdateAssociationStatusResult,
    UpdateDocumentResult,
    UpdateDocumentDefaultVersionResult,
    UpdateDocumentMetadataResponse,
    UpdateMaintenanceWindowResult,
    UpdateMaintenanceWindowTargetResult,
    UpdateMaintenanceWindowTaskResult
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

    invokeCreateAssociation(partialParams: ToOptional<{
      [K in keyof CreateAssociationRequest & keyof Omit<CreateAssociationRequest, "Name">]: (CreateAssociationRequest)[K]
    }>): Request<CreateAssociationResult, AWSError> {
        this.boot();
        return this.client.createAssociation(
          this.ops["CreateAssociation"].apply(partialParams)
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

    invokeCreatePatchBaseline(partialParams: ToOptional<{
      [K in keyof CreatePatchBaselineRequest & keyof Omit<CreatePatchBaselineRequest, "Name">]: (CreatePatchBaselineRequest)[K]
    }>): Request<CreatePatchBaselineResult, AWSError> {
        this.boot();
        return this.client.createPatchBaseline(
          this.ops["CreatePatchBaseline"].apply(partialParams)
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

    invokeDeleteMaintenanceWindow(partialParams: ToOptional<{
      [K in keyof DeleteMaintenanceWindowRequest & keyof Omit<DeleteMaintenanceWindowRequest, "WindowId">]: (DeleteMaintenanceWindowRequest)[K]
    }>): Request<DeleteMaintenanceWindowResult, AWSError> {
        this.boot();
        return this.client.deleteMaintenanceWindow(
          this.ops["DeleteMaintenanceWindow"].apply(partialParams)
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

    invokeDescribeMaintenanceWindowExecutions(partialParams: ToOptional<{
      [K in keyof DescribeMaintenanceWindowExecutionsRequest & keyof Omit<DescribeMaintenanceWindowExecutionsRequest, "WindowId">]: (DescribeMaintenanceWindowExecutionsRequest)[K]
    }>): Request<DescribeMaintenanceWindowExecutionsResult, AWSError> {
        this.boot();
        return this.client.describeMaintenanceWindowExecutions(
          this.ops["DescribeMaintenanceWindowExecutions"].apply(partialParams)
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

    invokeDescribeMaintenanceWindowsForTarget(partialParams: ToOptional<{
      [K in keyof DescribeMaintenanceWindowsForTargetRequest & keyof Omit<DescribeMaintenanceWindowsForTargetRequest, "ResourceType">]: (DescribeMaintenanceWindowsForTargetRequest)[K]
    }>): Request<DescribeMaintenanceWindowsForTargetResult, AWSError> {
        this.boot();
        return this.client.describeMaintenanceWindowsForTarget(
          this.ops["DescribeMaintenanceWindowsForTarget"].apply(partialParams)
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

    invokeGetMaintenanceWindow(partialParams: ToOptional<{
      [K in keyof GetMaintenanceWindowRequest & keyof Omit<GetMaintenanceWindowRequest, "WindowId">]: (GetMaintenanceWindowRequest)[K]
    }>): Request<GetMaintenanceWindowResult, AWSError> {
        this.boot();
        return this.client.getMaintenanceWindow(
          this.ops["GetMaintenanceWindow"].apply(partialParams)
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

    invokeLabelParameterVersion(partialParams: ToOptional<{
      [K in keyof LabelParameterVersionRequest & keyof Omit<LabelParameterVersionRequest, "Name">]: (LabelParameterVersionRequest)[K]
    }>): Request<LabelParameterVersionResult, AWSError> {
        this.boot();
        return this.client.labelParameterVersion(
          this.ops["LabelParameterVersion"].apply(partialParams)
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

    invokePutParameter(partialParams: ToOptional<{
      [K in keyof PutParameterRequest & keyof Omit<PutParameterRequest, "Name">]: (PutParameterRequest)[K]
    }>): Request<PutParameterResult, AWSError> {
        this.boot();
        return this.client.putParameter(
          this.ops["PutParameter"].apply(partialParams)
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

    invokeUnlabelParameterVersion(partialParams: ToOptional<{
      [K in keyof UnlabelParameterVersionRequest & keyof Omit<UnlabelParameterVersionRequest, "Name">]: (UnlabelParameterVersionRequest)[K]
    }>): Request<UnlabelParameterVersionResult, AWSError> {
        this.boot();
        return this.client.unlabelParameterVersion(
          this.ops["UnlabelParameterVersion"].apply(partialParams)
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
}