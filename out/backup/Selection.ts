
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    CreateBackupPlanInput,
    CreateBackupSelectionInput,
    CreateBackupVaultInput,
    CreateFrameworkInput,
    CreateReportPlanInput,
    DeleteBackupPlanInput,
    DeleteBackupSelectionInput,
    DeleteBackupVaultInput,
    DeleteBackupVaultAccessPolicyInput,
    DeleteBackupVaultLockConfigurationInput,
    DeleteBackupVaultNotificationsInput,
    DeleteFrameworkInput,
    DeleteRecoveryPointInput,
    DeleteReportPlanInput,
    DescribeBackupJobInput,
    DescribeBackupVaultInput,
    DescribeCopyJobInput,
    DescribeFrameworkInput,
    DescribeProtectedResourceInput,
    DescribeRecoveryPointInput,
    DescribeReportJobInput,
    DescribeReportPlanInput,
    DescribeRestoreJobInput,
    DisassociateRecoveryPointInput,
    ExportBackupPlanTemplateInput,
    GetBackupPlanInput,
    GetBackupPlanFromJSONInput,
    GetBackupPlanFromTemplateInput,
    GetBackupSelectionInput,
    GetBackupVaultAccessPolicyInput,
    GetBackupVaultNotificationsInput,
    GetRecoveryPointRestoreMetadataInput,
    ListBackupPlanVersionsInput,
    ListBackupSelectionsInput,
    ListRecoveryPointsByBackupVaultInput,
    ListRecoveryPointsByResourceInput,
    ListTagsInput,
    PutBackupVaultAccessPolicyInput,
    PutBackupVaultLockConfigurationInput,
    PutBackupVaultNotificationsInput,
    StartBackupJobInput,
    StartCopyJobInput,
    StartReportJobInput,
    StartRestoreJobInput,
    StopBackupJobInput,
    TagResourceInput,
    UntagResourceInput,
    UpdateBackupPlanInput,
    UpdateFrameworkInput,
    UpdateRecoveryPointLifecycleInput,
    UpdateReportPlanInput,
    CreateBackupPlanOutput,
    CreateBackupSelectionOutput,
    CreateBackupVaultOutput,
    CreateFrameworkOutput,
    CreateReportPlanOutput,
    DeleteBackupPlanOutput,
    DescribeBackupJobOutput,
    DescribeBackupVaultOutput,
    DescribeCopyJobOutput,
    DescribeFrameworkOutput,
    DescribeProtectedResourceOutput,
    DescribeRecoveryPointOutput,
    DescribeReportJobOutput,
    DescribeReportPlanOutput,
    DescribeRestoreJobOutput,
    ExportBackupPlanTemplateOutput,
    GetBackupPlanOutput,
    GetBackupPlanFromJSONOutput,
    GetBackupPlanFromTemplateOutput,
    GetBackupSelectionOutput,
    GetBackupVaultAccessPolicyOutput,
    GetBackupVaultNotificationsOutput,
    GetRecoveryPointRestoreMetadataOutput,
    ListBackupPlanVersionsOutput,
    ListBackupSelectionsOutput,
    ListRecoveryPointsByBackupVaultOutput,
    ListRecoveryPointsByResourceOutput,
    ListTagsOutput,
    StartBackupJobOutput,
    StartCopyJobOutput,
    StartReportJobOutput,
    StartRestoreJobOutput,
    UpdateBackupPlanOutput,
    UpdateFrameworkOutput,
    UpdateRecoveryPointLifecycleOutput,
    UpdateReportPlanOutput
} from "aws-sdk/clients/backup";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.backup.Selection {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.backup.Selection>) {
        super(...args)
        this.client = new awssdk.Backup()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/backup-2018-11-15.normal.json"), this.client)
    }

    invokeCreateBackupPlan(partialParams: ToOptional<{
      [K in keyof CreateBackupPlanInput & keyof CreateBackupPlanInput & keyof CreateBackupPlanInput]: (CreateBackupPlanInput & CreateBackupPlanInput & CreateBackupPlanInput)[K]
    }>): CreateBackupPlanOutput {
        return this.client.createBackupPlan(
            this.ops["CreateBackupPlan"].apply(partialParams)
        );
    }

    invokeCreateBackupSelection(partialParams: ToOptional<{
      [K in keyof CreateBackupSelectionInput & keyof CreateBackupSelectionInput & keyof CreateBackupSelectionInput]: (CreateBackupSelectionInput & CreateBackupSelectionInput & CreateBackupSelectionInput)[K]
    }>): CreateBackupSelectionOutput {
        return this.client.createBackupSelection(
            this.ops["CreateBackupSelection"].apply(partialParams)
        );
    }

    invokeCreateBackupVault(partialParams: ToOptional<{
      [K in keyof CreateBackupVaultInput & keyof CreateBackupVaultInput & keyof CreateBackupVaultInput]: (CreateBackupVaultInput & CreateBackupVaultInput & CreateBackupVaultInput)[K]
    }>): CreateBackupVaultOutput {
        return this.client.createBackupVault(
            this.ops["CreateBackupVault"].apply(partialParams)
        );
    }

    invokeCreateFramework(partialParams: ToOptional<{
      [K in keyof CreateFrameworkInput & keyof CreateFrameworkInput & keyof CreateFrameworkInput]: (CreateFrameworkInput & CreateFrameworkInput & CreateFrameworkInput)[K]
    }>): CreateFrameworkOutput {
        return this.client.createFramework(
            this.ops["CreateFramework"].apply(partialParams)
        );
    }

    invokeCreateReportPlan(partialParams: ToOptional<{
      [K in keyof CreateReportPlanInput & keyof CreateReportPlanInput & keyof CreateReportPlanInput]: (CreateReportPlanInput & CreateReportPlanInput & CreateReportPlanInput)[K]
    }>): CreateReportPlanOutput {
        return this.client.createReportPlan(
            this.ops["CreateReportPlan"].apply(partialParams)
        );
    }

    invokeDeleteBackupPlan(partialParams: ToOptional<{
      [K in keyof DeleteBackupPlanInput & keyof DeleteBackupPlanInput & keyof DeleteBackupPlanInput]: (DeleteBackupPlanInput & DeleteBackupPlanInput & DeleteBackupPlanInput)[K]
    }>): DeleteBackupPlanOutput {
        return this.client.deleteBackupPlan(
            this.ops["DeleteBackupPlan"].apply(partialParams)
        );
    }

    invokeDeleteBackupSelection(partialParams: ToOptional<{
      [K in keyof DeleteBackupSelectionInput & keyof DeleteBackupSelectionInput & keyof DeleteBackupSelectionInput]: (DeleteBackupSelectionInput & DeleteBackupSelectionInput & DeleteBackupSelectionInput)[K]
    }>): void {
        return this.client.deleteBackupSelection(
            this.ops["DeleteBackupSelection"].apply(partialParams)
        );
    }

    invokeDeleteBackupVault(partialParams: ToOptional<{
      [K in keyof DeleteBackupVaultInput & keyof DeleteBackupVaultInput & keyof DeleteBackupVaultInput]: (DeleteBackupVaultInput & DeleteBackupVaultInput & DeleteBackupVaultInput)[K]
    }>): void {
        return this.client.deleteBackupVault(
            this.ops["DeleteBackupVault"].apply(partialParams)
        );
    }

    invokeDeleteBackupVaultAccessPolicy(partialParams: ToOptional<{
      [K in keyof DeleteBackupVaultAccessPolicyInput & keyof DeleteBackupVaultAccessPolicyInput & keyof DeleteBackupVaultAccessPolicyInput]: (DeleteBackupVaultAccessPolicyInput & DeleteBackupVaultAccessPolicyInput & DeleteBackupVaultAccessPolicyInput)[K]
    }>): void {
        return this.client.deleteBackupVaultAccessPolicy(
            this.ops["DeleteBackupVaultAccessPolicy"].apply(partialParams)
        );
    }

    invokeDeleteBackupVaultLockConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteBackupVaultLockConfigurationInput & keyof DeleteBackupVaultLockConfigurationInput & keyof DeleteBackupVaultLockConfigurationInput]: (DeleteBackupVaultLockConfigurationInput & DeleteBackupVaultLockConfigurationInput & DeleteBackupVaultLockConfigurationInput)[K]
    }>): void {
        return this.client.deleteBackupVaultLockConfiguration(
            this.ops["DeleteBackupVaultLockConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteBackupVaultNotifications(partialParams: ToOptional<{
      [K in keyof DeleteBackupVaultNotificationsInput & keyof DeleteBackupVaultNotificationsInput & keyof DeleteBackupVaultNotificationsInput]: (DeleteBackupVaultNotificationsInput & DeleteBackupVaultNotificationsInput & DeleteBackupVaultNotificationsInput)[K]
    }>): void {
        return this.client.deleteBackupVaultNotifications(
            this.ops["DeleteBackupVaultNotifications"].apply(partialParams)
        );
    }

    invokeDeleteFramework(partialParams: ToOptional<{
      [K in keyof DeleteFrameworkInput & keyof DeleteFrameworkInput & keyof DeleteFrameworkInput]: (DeleteFrameworkInput & DeleteFrameworkInput & DeleteFrameworkInput)[K]
    }>): void {
        return this.client.deleteFramework(
            this.ops["DeleteFramework"].apply(partialParams)
        );
    }

    invokeDeleteRecoveryPoint(partialParams: ToOptional<{
      [K in keyof DeleteRecoveryPointInput & keyof DeleteRecoveryPointInput & keyof DeleteRecoveryPointInput]: (DeleteRecoveryPointInput & DeleteRecoveryPointInput & DeleteRecoveryPointInput)[K]
    }>): void {
        return this.client.deleteRecoveryPoint(
            this.ops["DeleteRecoveryPoint"].apply(partialParams)
        );
    }

    invokeDeleteReportPlan(partialParams: ToOptional<{
      [K in keyof DeleteReportPlanInput & keyof DeleteReportPlanInput & keyof DeleteReportPlanInput]: (DeleteReportPlanInput & DeleteReportPlanInput & DeleteReportPlanInput)[K]
    }>): void {
        return this.client.deleteReportPlan(
            this.ops["DeleteReportPlan"].apply(partialParams)
        );
    }

    invokeDescribeBackupJob(partialParams: ToOptional<{
      [K in keyof DescribeBackupJobInput & keyof DescribeBackupJobInput & keyof DescribeBackupJobInput]: (DescribeBackupJobInput & DescribeBackupJobInput & DescribeBackupJobInput)[K]
    }>): DescribeBackupJobOutput {
        return this.client.describeBackupJob(
            this.ops["DescribeBackupJob"].apply(partialParams)
        );
    }

    invokeDescribeBackupVault(partialParams: ToOptional<{
      [K in keyof DescribeBackupVaultInput & keyof DescribeBackupVaultInput & keyof DescribeBackupVaultInput]: (DescribeBackupVaultInput & DescribeBackupVaultInput & DescribeBackupVaultInput)[K]
    }>): DescribeBackupVaultOutput {
        return this.client.describeBackupVault(
            this.ops["DescribeBackupVault"].apply(partialParams)
        );
    }

    invokeDescribeCopyJob(partialParams: ToOptional<{
      [K in keyof DescribeCopyJobInput & keyof DescribeCopyJobInput & keyof DescribeCopyJobInput]: (DescribeCopyJobInput & DescribeCopyJobInput & DescribeCopyJobInput)[K]
    }>): DescribeCopyJobOutput {
        return this.client.describeCopyJob(
            this.ops["DescribeCopyJob"].apply(partialParams)
        );
    }

    invokeDescribeFramework(partialParams: ToOptional<{
      [K in keyof DescribeFrameworkInput & keyof DescribeFrameworkInput & keyof DescribeFrameworkInput]: (DescribeFrameworkInput & DescribeFrameworkInput & DescribeFrameworkInput)[K]
    }>): DescribeFrameworkOutput {
        return this.client.describeFramework(
            this.ops["DescribeFramework"].apply(partialParams)
        );
    }

    invokeDescribeProtectedResource(partialParams: ToOptional<{
      [K in keyof DescribeProtectedResourceInput & keyof DescribeProtectedResourceInput & keyof DescribeProtectedResourceInput]: (DescribeProtectedResourceInput & DescribeProtectedResourceInput & DescribeProtectedResourceInput)[K]
    }>): DescribeProtectedResourceOutput {
        return this.client.describeProtectedResource(
            this.ops["DescribeProtectedResource"].apply(partialParams)
        );
    }

    invokeDescribeRecoveryPoint(partialParams: ToOptional<{
      [K in keyof DescribeRecoveryPointInput & keyof DescribeRecoveryPointInput & keyof DescribeRecoveryPointInput]: (DescribeRecoveryPointInput & DescribeRecoveryPointInput & DescribeRecoveryPointInput)[K]
    }>): DescribeRecoveryPointOutput {
        return this.client.describeRecoveryPoint(
            this.ops["DescribeRecoveryPoint"].apply(partialParams)
        );
    }

    invokeDescribeReportJob(partialParams: ToOptional<{
      [K in keyof DescribeReportJobInput & keyof DescribeReportJobInput & keyof DescribeReportJobInput]: (DescribeReportJobInput & DescribeReportJobInput & DescribeReportJobInput)[K]
    }>): DescribeReportJobOutput {
        return this.client.describeReportJob(
            this.ops["DescribeReportJob"].apply(partialParams)
        );
    }

    invokeDescribeReportPlan(partialParams: ToOptional<{
      [K in keyof DescribeReportPlanInput & keyof DescribeReportPlanInput & keyof DescribeReportPlanInput]: (DescribeReportPlanInput & DescribeReportPlanInput & DescribeReportPlanInput)[K]
    }>): DescribeReportPlanOutput {
        return this.client.describeReportPlan(
            this.ops["DescribeReportPlan"].apply(partialParams)
        );
    }

    invokeDescribeRestoreJob(partialParams: ToOptional<{
      [K in keyof DescribeRestoreJobInput & keyof DescribeRestoreJobInput & keyof DescribeRestoreJobInput]: (DescribeRestoreJobInput & DescribeRestoreJobInput & DescribeRestoreJobInput)[K]
    }>): DescribeRestoreJobOutput {
        return this.client.describeRestoreJob(
            this.ops["DescribeRestoreJob"].apply(partialParams)
        );
    }

    invokeDisassociateRecoveryPoint(partialParams: ToOptional<{
      [K in keyof DisassociateRecoveryPointInput & keyof DisassociateRecoveryPointInput & keyof DisassociateRecoveryPointInput]: (DisassociateRecoveryPointInput & DisassociateRecoveryPointInput & DisassociateRecoveryPointInput)[K]
    }>): void {
        return this.client.disassociateRecoveryPoint(
            this.ops["DisassociateRecoveryPoint"].apply(partialParams)
        );
    }

    invokeExportBackupPlanTemplate(partialParams: ToOptional<{
      [K in keyof ExportBackupPlanTemplateInput & keyof ExportBackupPlanTemplateInput & keyof ExportBackupPlanTemplateInput]: (ExportBackupPlanTemplateInput & ExportBackupPlanTemplateInput & ExportBackupPlanTemplateInput)[K]
    }>): ExportBackupPlanTemplateOutput {
        return this.client.exportBackupPlanTemplate(
            this.ops["ExportBackupPlanTemplate"].apply(partialParams)
        );
    }

    invokeGetBackupPlan(partialParams: ToOptional<{
      [K in keyof GetBackupPlanInput & keyof GetBackupPlanInput & keyof GetBackupPlanInput]: (GetBackupPlanInput & GetBackupPlanInput & GetBackupPlanInput)[K]
    }>): GetBackupPlanOutput {
        return this.client.getBackupPlan(
            this.ops["GetBackupPlan"].apply(partialParams)
        );
    }

    invokeGetBackupPlanFromJSON(partialParams: ToOptional<{
      [K in keyof GetBackupPlanFromJSONInput & keyof GetBackupPlanFromJSONInput & keyof GetBackupPlanFromJSONInput]: (GetBackupPlanFromJSONInput & GetBackupPlanFromJSONInput & GetBackupPlanFromJSONInput)[K]
    }>): GetBackupPlanFromJSONOutput {
        return this.client.getBackupPlanFromJSON(
            this.ops["GetBackupPlanFromJSON"].apply(partialParams)
        );
    }

    invokeGetBackupPlanFromTemplate(partialParams: ToOptional<{
      [K in keyof GetBackupPlanFromTemplateInput & keyof GetBackupPlanFromTemplateInput & keyof GetBackupPlanFromTemplateInput]: (GetBackupPlanFromTemplateInput & GetBackupPlanFromTemplateInput & GetBackupPlanFromTemplateInput)[K]
    }>): GetBackupPlanFromTemplateOutput {
        return this.client.getBackupPlanFromTemplate(
            this.ops["GetBackupPlanFromTemplate"].apply(partialParams)
        );
    }

    invokeGetBackupSelection(partialParams: ToOptional<{
      [K in keyof GetBackupSelectionInput & keyof GetBackupSelectionInput & keyof GetBackupSelectionInput]: (GetBackupSelectionInput & GetBackupSelectionInput & GetBackupSelectionInput)[K]
    }>): GetBackupSelectionOutput {
        return this.client.getBackupSelection(
            this.ops["GetBackupSelection"].apply(partialParams)
        );
    }

    invokeGetBackupVaultAccessPolicy(partialParams: ToOptional<{
      [K in keyof GetBackupVaultAccessPolicyInput & keyof GetBackupVaultAccessPolicyInput & keyof GetBackupVaultAccessPolicyInput]: (GetBackupVaultAccessPolicyInput & GetBackupVaultAccessPolicyInput & GetBackupVaultAccessPolicyInput)[K]
    }>): GetBackupVaultAccessPolicyOutput {
        return this.client.getBackupVaultAccessPolicy(
            this.ops["GetBackupVaultAccessPolicy"].apply(partialParams)
        );
    }

    invokeGetBackupVaultNotifications(partialParams: ToOptional<{
      [K in keyof GetBackupVaultNotificationsInput & keyof GetBackupVaultNotificationsInput & keyof GetBackupVaultNotificationsInput]: (GetBackupVaultNotificationsInput & GetBackupVaultNotificationsInput & GetBackupVaultNotificationsInput)[K]
    }>): GetBackupVaultNotificationsOutput {
        return this.client.getBackupVaultNotifications(
            this.ops["GetBackupVaultNotifications"].apply(partialParams)
        );
    }

    invokeGetRecoveryPointRestoreMetadata(partialParams: ToOptional<{
      [K in keyof GetRecoveryPointRestoreMetadataInput & keyof GetRecoveryPointRestoreMetadataInput & keyof GetRecoveryPointRestoreMetadataInput]: (GetRecoveryPointRestoreMetadataInput & GetRecoveryPointRestoreMetadataInput & GetRecoveryPointRestoreMetadataInput)[K]
    }>): GetRecoveryPointRestoreMetadataOutput {
        return this.client.getRecoveryPointRestoreMetadata(
            this.ops["GetRecoveryPointRestoreMetadata"].apply(partialParams)
        );
    }

    invokeListBackupPlanVersions(partialParams: ToOptional<{
      [K in keyof ListBackupPlanVersionsInput & keyof ListBackupPlanVersionsInput & keyof ListBackupPlanVersionsInput]: (ListBackupPlanVersionsInput & ListBackupPlanVersionsInput & ListBackupPlanVersionsInput)[K]
    }>): ListBackupPlanVersionsOutput {
        return this.client.listBackupPlanVersions(
            this.ops["ListBackupPlanVersions"].apply(partialParams)
        );
    }

    invokeListBackupSelections(partialParams: ToOptional<{
      [K in keyof ListBackupSelectionsInput & keyof ListBackupSelectionsInput & keyof ListBackupSelectionsInput]: (ListBackupSelectionsInput & ListBackupSelectionsInput & ListBackupSelectionsInput)[K]
    }>): ListBackupSelectionsOutput {
        return this.client.listBackupSelections(
            this.ops["ListBackupSelections"].apply(partialParams)
        );
    }

    invokeListRecoveryPointsByBackupVault(partialParams: ToOptional<{
      [K in keyof ListRecoveryPointsByBackupVaultInput & keyof ListRecoveryPointsByBackupVaultInput & keyof ListRecoveryPointsByBackupVaultInput]: (ListRecoveryPointsByBackupVaultInput & ListRecoveryPointsByBackupVaultInput & ListRecoveryPointsByBackupVaultInput)[K]
    }>): ListRecoveryPointsByBackupVaultOutput {
        return this.client.listRecoveryPointsByBackupVault(
            this.ops["ListRecoveryPointsByBackupVault"].apply(partialParams)
        );
    }

    invokeListRecoveryPointsByResource(partialParams: ToOptional<{
      [K in keyof ListRecoveryPointsByResourceInput & keyof ListRecoveryPointsByResourceInput & keyof ListRecoveryPointsByResourceInput]: (ListRecoveryPointsByResourceInput & ListRecoveryPointsByResourceInput & ListRecoveryPointsByResourceInput)[K]
    }>): ListRecoveryPointsByResourceOutput {
        return this.client.listRecoveryPointsByResource(
            this.ops["ListRecoveryPointsByResource"].apply(partialParams)
        );
    }

    invokeListTags(partialParams: ToOptional<{
      [K in keyof ListTagsInput & keyof ListTagsInput & keyof ListTagsInput]: (ListTagsInput & ListTagsInput & ListTagsInput)[K]
    }>): ListTagsOutput {
        return this.client.listTags(
            this.ops["ListTags"].apply(partialParams)
        );
    }

    invokePutBackupVaultAccessPolicy(partialParams: ToOptional<{
      [K in keyof PutBackupVaultAccessPolicyInput & keyof PutBackupVaultAccessPolicyInput & keyof PutBackupVaultAccessPolicyInput]: (PutBackupVaultAccessPolicyInput & PutBackupVaultAccessPolicyInput & PutBackupVaultAccessPolicyInput)[K]
    }>): void {
        return this.client.putBackupVaultAccessPolicy(
            this.ops["PutBackupVaultAccessPolicy"].apply(partialParams)
        );
    }

    invokePutBackupVaultLockConfiguration(partialParams: ToOptional<{
      [K in keyof PutBackupVaultLockConfigurationInput & keyof PutBackupVaultLockConfigurationInput & keyof PutBackupVaultLockConfigurationInput]: (PutBackupVaultLockConfigurationInput & PutBackupVaultLockConfigurationInput & PutBackupVaultLockConfigurationInput)[K]
    }>): void {
        return this.client.putBackupVaultLockConfiguration(
            this.ops["PutBackupVaultLockConfiguration"].apply(partialParams)
        );
    }

    invokePutBackupVaultNotifications(partialParams: ToOptional<{
      [K in keyof PutBackupVaultNotificationsInput & keyof PutBackupVaultNotificationsInput & keyof PutBackupVaultNotificationsInput]: (PutBackupVaultNotificationsInput & PutBackupVaultNotificationsInput & PutBackupVaultNotificationsInput)[K]
    }>): void {
        return this.client.putBackupVaultNotifications(
            this.ops["PutBackupVaultNotifications"].apply(partialParams)
        );
    }

    invokeStartBackupJob(partialParams: ToOptional<{
      [K in keyof Omit<StartBackupJobInput, "IamRoleArn"> & keyof StartBackupJobInput & keyof StartBackupJobInput]: (Omit<StartBackupJobInput, "IamRoleArn"> & StartBackupJobInput & StartBackupJobInput)[K]
    }>): StartBackupJobOutput {
        return this.client.startBackupJob(
            this.ops["StartBackupJob"].apply(partialParams)
        );
    }

    invokeStartCopyJob(partialParams: ToOptional<{
      [K in keyof Omit<StartCopyJobInput, "IamRoleArn"> & keyof StartCopyJobInput & keyof StartCopyJobInput]: (Omit<StartCopyJobInput, "IamRoleArn"> & StartCopyJobInput & StartCopyJobInput)[K]
    }>): StartCopyJobOutput {
        return this.client.startCopyJob(
            this.ops["StartCopyJob"].apply(partialParams)
        );
    }

    invokeStartReportJob(partialParams: ToOptional<{
      [K in keyof StartReportJobInput & keyof StartReportJobInput & keyof StartReportJobInput]: (StartReportJobInput & StartReportJobInput & StartReportJobInput)[K]
    }>): StartReportJobOutput {
        return this.client.startReportJob(
            this.ops["StartReportJob"].apply(partialParams)
        );
    }

    invokeStartRestoreJob(partialParams: ToOptional<{
      [K in keyof Omit<StartRestoreJobInput, "IamRoleArn"> & keyof StartRestoreJobInput & keyof StartRestoreJobInput]: (Omit<StartRestoreJobInput, "IamRoleArn"> & StartRestoreJobInput & StartRestoreJobInput)[K]
    }>): StartRestoreJobOutput {
        return this.client.startRestoreJob(
            this.ops["StartRestoreJob"].apply(partialParams)
        );
    }

    invokeStopBackupJob(partialParams: ToOptional<{
      [K in keyof StopBackupJobInput & keyof StopBackupJobInput & keyof StopBackupJobInput]: (StopBackupJobInput & StopBackupJobInput & StopBackupJobInput)[K]
    }>): void {
        return this.client.stopBackupJob(
            this.ops["StopBackupJob"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput]: (TagResourceInput & TagResourceInput & TagResourceInput)[K]
    }>): void {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput]: (UntagResourceInput & UntagResourceInput & UntagResourceInput)[K]
    }>): void {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateBackupPlan(partialParams: ToOptional<{
      [K in keyof UpdateBackupPlanInput & keyof UpdateBackupPlanInput & keyof UpdateBackupPlanInput]: (UpdateBackupPlanInput & UpdateBackupPlanInput & UpdateBackupPlanInput)[K]
    }>): UpdateBackupPlanOutput {
        return this.client.updateBackupPlan(
            this.ops["UpdateBackupPlan"].apply(partialParams)
        );
    }

    invokeUpdateFramework(partialParams: ToOptional<{
      [K in keyof UpdateFrameworkInput & keyof UpdateFrameworkInput & keyof UpdateFrameworkInput]: (UpdateFrameworkInput & UpdateFrameworkInput & UpdateFrameworkInput)[K]
    }>): UpdateFrameworkOutput {
        return this.client.updateFramework(
            this.ops["UpdateFramework"].apply(partialParams)
        );
    }

    invokeUpdateRecoveryPointLifecycle(partialParams: ToOptional<{
      [K in keyof UpdateRecoveryPointLifecycleInput & keyof UpdateRecoveryPointLifecycleInput & keyof UpdateRecoveryPointLifecycleInput]: (UpdateRecoveryPointLifecycleInput & UpdateRecoveryPointLifecycleInput & UpdateRecoveryPointLifecycleInput)[K]
    }>): UpdateRecoveryPointLifecycleOutput {
        return this.client.updateRecoveryPointLifecycle(
            this.ops["UpdateRecoveryPointLifecycle"].apply(partialParams)
        );
    }

    invokeUpdateReportPlan(partialParams: ToOptional<{
      [K in keyof UpdateReportPlanInput & keyof UpdateReportPlanInput & keyof UpdateReportPlanInput]: (UpdateReportPlanInput & UpdateReportPlanInput & UpdateReportPlanInput)[K]
    }>): UpdateReportPlanOutput {
        return this.client.updateReportPlan(
            this.ops["UpdateReportPlan"].apply(partialParams)
        );
    }
}