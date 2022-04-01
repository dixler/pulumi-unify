
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateActivationRequest,
    CreateAssociationRequest,
    CreateDocumentRequest,
    CreateMaintenanceWindowRequest,
    CreateOpsItemRequest,
    CreatePatchBaselineRequest,
    DeleteDocumentRequest,
    DeleteParameterRequest,
    DescribeDocumentRequest,
    DescribeDocumentPermissionRequest,
    GetDocumentRequest,
    GetParameterRequest,
    GetParameterHistoryRequest,
    LabelParameterVersionRequest,
    ListDocumentMetadataHistoryRequest,
    ListDocumentVersionsRequest,
    ModifyDocumentPermissionRequest,
    PutParameterRequest,
    UnlabelParameterVersionRequest,
    UpdateAssociationStatusRequest,
    UpdateDocumentRequest,
    UpdateDocumentDefaultVersionRequest,
    UpdateDocumentMetadataRequest,
    UpdateManagedInstanceRoleRequest,
    CreateActivationResult,
    CreateAssociationResult,
    CreateDocumentResult,
    CreateMaintenanceWindowResult,
    CreateOpsItemResponse,
    CreatePatchBaselineResult,
    DeleteDocumentResult,
    DeleteParameterResult,
    DescribeDocumentResult,
    DescribeDocumentPermissionResponse,
    GetDocumentResult,
    GetParameterResult,
    GetParameterHistoryResult,
    LabelParameterVersionResult,
    ListDocumentMetadataHistoryResponse,
    ListDocumentVersionsResult,
    ModifyDocumentPermissionResponse,
    PutParameterResult,
    UnlabelParameterVersionResult,
    UpdateAssociationStatusResult,
    UpdateDocumentResult,
    UpdateDocumentDefaultVersionResult,
    UpdateDocumentMetadataResponse,
    UpdateManagedInstanceRoleResult
} from "aws-sdk/clients/ssm";
const schema = require("../apis/ssm-2014-11-06.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ssm.Activation {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.ssm.Activation>) {
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

    invokeCreateActivation(partialParams: ToOptional<{
      [K in keyof CreateActivationRequest & keyof Omit<CreateActivationRequest, "IamRole">]: (CreateActivationRequest)[K]
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

    invokeDeleteParameter(partialParams: ToOptional<{
      [K in keyof DeleteParameterRequest & keyof Omit<DeleteParameterRequest, "Name">]: (DeleteParameterRequest)[K]
    }>): Request<DeleteParameterResult, AWSError> {
        this.boot();
        return this.client.deleteParameter(
          this.ops["DeleteParameter"].apply(partialParams)
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

    invokeGetDocument(partialParams: ToOptional<{
      [K in keyof GetDocumentRequest & keyof Omit<GetDocumentRequest, "Name">]: (GetDocumentRequest)[K]
    }>): Request<GetDocumentResult, AWSError> {
        this.boot();
        return this.client.getDocument(
          this.ops["GetDocument"].apply(partialParams)
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

    invokeModifyDocumentPermission(partialParams: ToOptional<{
      [K in keyof ModifyDocumentPermissionRequest & keyof Omit<ModifyDocumentPermissionRequest, "Name">]: (ModifyDocumentPermissionRequest)[K]
    }>): Request<ModifyDocumentPermissionResponse, AWSError> {
        this.boot();
        return this.client.modifyDocumentPermission(
          this.ops["ModifyDocumentPermission"].apply(partialParams)
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

    invokeUpdateManagedInstanceRole(partialParams: ToOptional<{
      [K in keyof UpdateManagedInstanceRoleRequest & keyof Omit<UpdateManagedInstanceRoleRequest, "IamRole">]: (UpdateManagedInstanceRoleRequest)[K]
    }>): Request<UpdateManagedInstanceRoleResult, AWSError> {
        this.boot();
        return this.client.updateManagedInstanceRole(
          this.ops["UpdateManagedInstanceRole"].apply(partialParams)
        );
    }
}