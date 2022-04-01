
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateBackupPlanInput,
    CreateBackupSelectionInput,
    CreateBackupVaultInput,
    CreateFrameworkInput,
    CreateReportPlanInput,
    DeleteBackupPlanInput,
    DescribeBackupJobInput,
    DescribeBackupVaultInput,
    DescribeCopyJobInput,
    DescribeFrameworkInput,
    DescribeGlobalSettingsInput,
    DescribeProtectedResourceInput,
    DescribeRecoveryPointInput,
    DescribeRegionSettingsInput,
    DescribeReportJobInput,
    DescribeReportPlanInput,
    DescribeRestoreJobInput,
    ExportBackupPlanTemplateInput,
    GetBackupPlanInput,
    GetBackupPlanFromJSONInput,
    GetBackupPlanFromTemplateInput,
    GetBackupSelectionInput,
    GetBackupVaultAccessPolicyInput,
    GetBackupVaultNotificationsInput,
    GetRecoveryPointRestoreMetadataInput,
    ListBackupJobsInput,
    ListBackupPlanTemplatesInput,
    ListBackupPlanVersionsInput,
    ListBackupPlansInput,
    ListBackupSelectionsInput,
    ListBackupVaultsInput,
    ListCopyJobsInput,
    ListFrameworksInput,
    ListProtectedResourcesInput,
    ListRecoveryPointsByBackupVaultInput,
    ListRecoveryPointsByResourceInput,
    ListReportJobsInput,
    ListReportPlansInput,
    ListRestoreJobsInput,
    ListTagsInput,
    StartBackupJobInput,
    StartCopyJobInput,
    StartReportJobInput,
    StartRestoreJobInput,
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
    DescribeGlobalSettingsOutput,
    DescribeProtectedResourceOutput,
    DescribeRecoveryPointOutput,
    DescribeRegionSettingsOutput,
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
    ListBackupJobsOutput,
    ListBackupPlanTemplatesOutput,
    ListBackupPlanVersionsOutput,
    ListBackupPlansOutput,
    ListBackupSelectionsOutput,
    ListBackupVaultsOutput,
    ListCopyJobsOutput,
    ListFrameworksOutput,
    ListProtectedResourcesOutput,
    ListRecoveryPointsByBackupVaultOutput,
    ListRecoveryPointsByResourceOutput,
    ListReportJobsOutput,
    ListReportPlansOutput,
    ListRestoreJobsOutput,
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
const schema = require("../apis/backup-2018-11-15.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.backup.Plan {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.backup.Plan>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Backup()
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

    invokeCreateBackupPlan(partialParams: ToOptional<{
      [K in keyof CreateBackupPlanInput]: (CreateBackupPlanInput)[K]
    }>): Request<CreateBackupPlanOutput, AWSError> {
        this.boot();
        return this.client.createBackupPlan(
          this.ops["CreateBackupPlan"].apply(partialParams)
        );
    }

    invokeCreateBackupSelection(partialParams: ToOptional<{
      [K in keyof CreateBackupSelectionInput]: (CreateBackupSelectionInput)[K]
    }>): Request<CreateBackupSelectionOutput, AWSError> {
        this.boot();
        return this.client.createBackupSelection(
          this.ops["CreateBackupSelection"].apply(partialParams)
        );
    }

    invokeCreateBackupVault(partialParams: ToOptional<{
      [K in keyof CreateBackupVaultInput]: (CreateBackupVaultInput)[K]
    }>): Request<CreateBackupVaultOutput, AWSError> {
        this.boot();
        return this.client.createBackupVault(
          this.ops["CreateBackupVault"].apply(partialParams)
        );
    }

    invokeCreateFramework(partialParams: ToOptional<{
      [K in keyof CreateFrameworkInput]: (CreateFrameworkInput)[K]
    }>): Request<CreateFrameworkOutput, AWSError> {
        this.boot();
        return this.client.createFramework(
          this.ops["CreateFramework"].apply(partialParams)
        );
    }

    invokeCreateReportPlan(partialParams: ToOptional<{
      [K in keyof CreateReportPlanInput]: (CreateReportPlanInput)[K]
    }>): Request<CreateReportPlanOutput, AWSError> {
        this.boot();
        return this.client.createReportPlan(
          this.ops["CreateReportPlan"].apply(partialParams)
        );
    }

    invokeDeleteBackupPlan(partialParams: ToOptional<{
      [K in keyof DeleteBackupPlanInput]: (DeleteBackupPlanInput)[K]
    }>): Request<DeleteBackupPlanOutput, AWSError> {
        this.boot();
        return this.client.deleteBackupPlan(
          this.ops["DeleteBackupPlan"].apply(partialParams)
        );
    }

    invokeDescribeBackupJob(partialParams: ToOptional<{
      [K in keyof DescribeBackupJobInput]: (DescribeBackupJobInput)[K]
    }>): Request<DescribeBackupJobOutput, AWSError> {
        this.boot();
        return this.client.describeBackupJob(
          this.ops["DescribeBackupJob"].apply(partialParams)
        );
    }

    invokeDescribeBackupVault(partialParams: ToOptional<{
      [K in keyof DescribeBackupVaultInput]: (DescribeBackupVaultInput)[K]
    }>): Request<DescribeBackupVaultOutput, AWSError> {
        this.boot();
        return this.client.describeBackupVault(
          this.ops["DescribeBackupVault"].apply(partialParams)
        );
    }

    invokeDescribeCopyJob(partialParams: ToOptional<{
      [K in keyof DescribeCopyJobInput]: (DescribeCopyJobInput)[K]
    }>): Request<DescribeCopyJobOutput, AWSError> {
        this.boot();
        return this.client.describeCopyJob(
          this.ops["DescribeCopyJob"].apply(partialParams)
        );
    }

    invokeDescribeFramework(partialParams: ToOptional<{
      [K in keyof DescribeFrameworkInput]: (DescribeFrameworkInput)[K]
    }>): Request<DescribeFrameworkOutput, AWSError> {
        this.boot();
        return this.client.describeFramework(
          this.ops["DescribeFramework"].apply(partialParams)
        );
    }

    invokeDescribeGlobalSettings(partialParams: ToOptional<{
      [K in keyof DescribeGlobalSettingsInput]: (DescribeGlobalSettingsInput)[K]
    }>): Request<DescribeGlobalSettingsOutput, AWSError> {
        this.boot();
        return this.client.describeGlobalSettings(
          this.ops["DescribeGlobalSettings"].apply(partialParams)
        );
    }

    invokeDescribeProtectedResource(partialParams: ToOptional<{
      [K in keyof DescribeProtectedResourceInput]: (DescribeProtectedResourceInput)[K]
    }>): Request<DescribeProtectedResourceOutput, AWSError> {
        this.boot();
        return this.client.describeProtectedResource(
          this.ops["DescribeProtectedResource"].apply(partialParams)
        );
    }

    invokeDescribeRecoveryPoint(partialParams: ToOptional<{
      [K in keyof DescribeRecoveryPointInput]: (DescribeRecoveryPointInput)[K]
    }>): Request<DescribeRecoveryPointOutput, AWSError> {
        this.boot();
        return this.client.describeRecoveryPoint(
          this.ops["DescribeRecoveryPoint"].apply(partialParams)
        );
    }

    invokeDescribeRegionSettings(partialParams: ToOptional<{
      [K in keyof DescribeRegionSettingsInput]: (DescribeRegionSettingsInput)[K]
    }>): Request<DescribeRegionSettingsOutput, AWSError> {
        this.boot();
        return this.client.describeRegionSettings(
          this.ops["DescribeRegionSettings"].apply(partialParams)
        );
    }

    invokeDescribeReportJob(partialParams: ToOptional<{
      [K in keyof DescribeReportJobInput]: (DescribeReportJobInput)[K]
    }>): Request<DescribeReportJobOutput, AWSError> {
        this.boot();
        return this.client.describeReportJob(
          this.ops["DescribeReportJob"].apply(partialParams)
        );
    }

    invokeDescribeReportPlan(partialParams: ToOptional<{
      [K in keyof DescribeReportPlanInput]: (DescribeReportPlanInput)[K]
    }>): Request<DescribeReportPlanOutput, AWSError> {
        this.boot();
        return this.client.describeReportPlan(
          this.ops["DescribeReportPlan"].apply(partialParams)
        );
    }

    invokeDescribeRestoreJob(partialParams: ToOptional<{
      [K in keyof DescribeRestoreJobInput]: (DescribeRestoreJobInput)[K]
    }>): Request<DescribeRestoreJobOutput, AWSError> {
        this.boot();
        return this.client.describeRestoreJob(
          this.ops["DescribeRestoreJob"].apply(partialParams)
        );
    }

    invokeExportBackupPlanTemplate(partialParams: ToOptional<{
      [K in keyof ExportBackupPlanTemplateInput]: (ExportBackupPlanTemplateInput)[K]
    }>): Request<ExportBackupPlanTemplateOutput, AWSError> {
        this.boot();
        return this.client.exportBackupPlanTemplate(
          this.ops["ExportBackupPlanTemplate"].apply(partialParams)
        );
    }

    invokeGetBackupPlan(partialParams: ToOptional<{
      [K in keyof GetBackupPlanInput]: (GetBackupPlanInput)[K]
    }>): Request<GetBackupPlanOutput, AWSError> {
        this.boot();
        return this.client.getBackupPlan(
          this.ops["GetBackupPlan"].apply(partialParams)
        );
    }

    invokeGetBackupPlanFromJSON(partialParams: ToOptional<{
      [K in keyof GetBackupPlanFromJSONInput]: (GetBackupPlanFromJSONInput)[K]
    }>): Request<GetBackupPlanFromJSONOutput, AWSError> {
        this.boot();
        return this.client.getBackupPlanFromJSON(
          this.ops["GetBackupPlanFromJSON"].apply(partialParams)
        );
    }

    invokeGetBackupPlanFromTemplate(partialParams: ToOptional<{
      [K in keyof GetBackupPlanFromTemplateInput]: (GetBackupPlanFromTemplateInput)[K]
    }>): Request<GetBackupPlanFromTemplateOutput, AWSError> {
        this.boot();
        return this.client.getBackupPlanFromTemplate(
          this.ops["GetBackupPlanFromTemplate"].apply(partialParams)
        );
    }

    invokeGetBackupSelection(partialParams: ToOptional<{
      [K in keyof GetBackupSelectionInput]: (GetBackupSelectionInput)[K]
    }>): Request<GetBackupSelectionOutput, AWSError> {
        this.boot();
        return this.client.getBackupSelection(
          this.ops["GetBackupSelection"].apply(partialParams)
        );
    }

    invokeGetBackupVaultAccessPolicy(partialParams: ToOptional<{
      [K in keyof GetBackupVaultAccessPolicyInput]: (GetBackupVaultAccessPolicyInput)[K]
    }>): Request<GetBackupVaultAccessPolicyOutput, AWSError> {
        this.boot();
        return this.client.getBackupVaultAccessPolicy(
          this.ops["GetBackupVaultAccessPolicy"].apply(partialParams)
        );
    }

    invokeGetBackupVaultNotifications(partialParams: ToOptional<{
      [K in keyof GetBackupVaultNotificationsInput]: (GetBackupVaultNotificationsInput)[K]
    }>): Request<GetBackupVaultNotificationsOutput, AWSError> {
        this.boot();
        return this.client.getBackupVaultNotifications(
          this.ops["GetBackupVaultNotifications"].apply(partialParams)
        );
    }

    invokeGetRecoveryPointRestoreMetadata(partialParams: ToOptional<{
      [K in keyof GetRecoveryPointRestoreMetadataInput]: (GetRecoveryPointRestoreMetadataInput)[K]
    }>): Request<GetRecoveryPointRestoreMetadataOutput, AWSError> {
        this.boot();
        return this.client.getRecoveryPointRestoreMetadata(
          this.ops["GetRecoveryPointRestoreMetadata"].apply(partialParams)
        );
    }

    invokeListBackupJobs(partialParams: ToOptional<{
      [K in keyof ListBackupJobsInput]: (ListBackupJobsInput)[K]
    }>): Request<ListBackupJobsOutput, AWSError> {
        this.boot();
        return this.client.listBackupJobs(
          this.ops["ListBackupJobs"].apply(partialParams)
        );
    }

    invokeListBackupPlanTemplates(partialParams: ToOptional<{
      [K in keyof ListBackupPlanTemplatesInput]: (ListBackupPlanTemplatesInput)[K]
    }>): Request<ListBackupPlanTemplatesOutput, AWSError> {
        this.boot();
        return this.client.listBackupPlanTemplates(
          this.ops["ListBackupPlanTemplates"].apply(partialParams)
        );
    }

    invokeListBackupPlanVersions(partialParams: ToOptional<{
      [K in keyof ListBackupPlanVersionsInput]: (ListBackupPlanVersionsInput)[K]
    }>): Request<ListBackupPlanVersionsOutput, AWSError> {
        this.boot();
        return this.client.listBackupPlanVersions(
          this.ops["ListBackupPlanVersions"].apply(partialParams)
        );
    }

    invokeListBackupPlans(partialParams: ToOptional<{
      [K in keyof ListBackupPlansInput]: (ListBackupPlansInput)[K]
    }>): Request<ListBackupPlansOutput, AWSError> {
        this.boot();
        return this.client.listBackupPlans(
          this.ops["ListBackupPlans"].apply(partialParams)
        );
    }

    invokeListBackupSelections(partialParams: ToOptional<{
      [K in keyof ListBackupSelectionsInput]: (ListBackupSelectionsInput)[K]
    }>): Request<ListBackupSelectionsOutput, AWSError> {
        this.boot();
        return this.client.listBackupSelections(
          this.ops["ListBackupSelections"].apply(partialParams)
        );
    }

    invokeListBackupVaults(partialParams: ToOptional<{
      [K in keyof ListBackupVaultsInput]: (ListBackupVaultsInput)[K]
    }>): Request<ListBackupVaultsOutput, AWSError> {
        this.boot();
        return this.client.listBackupVaults(
          this.ops["ListBackupVaults"].apply(partialParams)
        );
    }

    invokeListCopyJobs(partialParams: ToOptional<{
      [K in keyof ListCopyJobsInput]: (ListCopyJobsInput)[K]
    }>): Request<ListCopyJobsOutput, AWSError> {
        this.boot();
        return this.client.listCopyJobs(
          this.ops["ListCopyJobs"].apply(partialParams)
        );
    }

    invokeListFrameworks(partialParams: ToOptional<{
      [K in keyof ListFrameworksInput]: (ListFrameworksInput)[K]
    }>): Request<ListFrameworksOutput, AWSError> {
        this.boot();
        return this.client.listFrameworks(
          this.ops["ListFrameworks"].apply(partialParams)
        );
    }

    invokeListProtectedResources(partialParams: ToOptional<{
      [K in keyof ListProtectedResourcesInput]: (ListProtectedResourcesInput)[K]
    }>): Request<ListProtectedResourcesOutput, AWSError> {
        this.boot();
        return this.client.listProtectedResources(
          this.ops["ListProtectedResources"].apply(partialParams)
        );
    }

    invokeListRecoveryPointsByBackupVault(partialParams: ToOptional<{
      [K in keyof ListRecoveryPointsByBackupVaultInput]: (ListRecoveryPointsByBackupVaultInput)[K]
    }>): Request<ListRecoveryPointsByBackupVaultOutput, AWSError> {
        this.boot();
        return this.client.listRecoveryPointsByBackupVault(
          this.ops["ListRecoveryPointsByBackupVault"].apply(partialParams)
        );
    }

    invokeListRecoveryPointsByResource(partialParams: ToOptional<{
      [K in keyof ListRecoveryPointsByResourceInput]: (ListRecoveryPointsByResourceInput)[K]
    }>): Request<ListRecoveryPointsByResourceOutput, AWSError> {
        this.boot();
        return this.client.listRecoveryPointsByResource(
          this.ops["ListRecoveryPointsByResource"].apply(partialParams)
        );
    }

    invokeListReportJobs(partialParams: ToOptional<{
      [K in keyof ListReportJobsInput]: (ListReportJobsInput)[K]
    }>): Request<ListReportJobsOutput, AWSError> {
        this.boot();
        return this.client.listReportJobs(
          this.ops["ListReportJobs"].apply(partialParams)
        );
    }

    invokeListReportPlans(partialParams: ToOptional<{
      [K in keyof ListReportPlansInput]: (ListReportPlansInput)[K]
    }>): Request<ListReportPlansOutput, AWSError> {
        this.boot();
        return this.client.listReportPlans(
          this.ops["ListReportPlans"].apply(partialParams)
        );
    }

    invokeListRestoreJobs(partialParams: ToOptional<{
      [K in keyof ListRestoreJobsInput]: (ListRestoreJobsInput)[K]
    }>): Request<ListRestoreJobsOutput, AWSError> {
        this.boot();
        return this.client.listRestoreJobs(
          this.ops["ListRestoreJobs"].apply(partialParams)
        );
    }

    invokeListTags(partialParams: ToOptional<{
      [K in keyof ListTagsInput]: (ListTagsInput)[K]
    }>): Request<ListTagsOutput, AWSError> {
        this.boot();
        return this.client.listTags(
          this.ops["ListTags"].apply(partialParams)
        );
    }

    invokeStartBackupJob(partialParams: ToOptional<{
      [K in keyof StartBackupJobInput]: (StartBackupJobInput)[K]
    }>): Request<StartBackupJobOutput, AWSError> {
        this.boot();
        return this.client.startBackupJob(
          this.ops["StartBackupJob"].apply(partialParams)
        );
    }

    invokeStartCopyJob(partialParams: ToOptional<{
      [K in keyof StartCopyJobInput]: (StartCopyJobInput)[K]
    }>): Request<StartCopyJobOutput, AWSError> {
        this.boot();
        return this.client.startCopyJob(
          this.ops["StartCopyJob"].apply(partialParams)
        );
    }

    invokeStartReportJob(partialParams: ToOptional<{
      [K in keyof StartReportJobInput]: (StartReportJobInput)[K]
    }>): Request<StartReportJobOutput, AWSError> {
        this.boot();
        return this.client.startReportJob(
          this.ops["StartReportJob"].apply(partialParams)
        );
    }

    invokeStartRestoreJob(partialParams: ToOptional<{
      [K in keyof StartRestoreJobInput]: (StartRestoreJobInput)[K]
    }>): Request<StartRestoreJobOutput, AWSError> {
        this.boot();
        return this.client.startRestoreJob(
          this.ops["StartRestoreJob"].apply(partialParams)
        );
    }

    invokeUpdateBackupPlan(partialParams: ToOptional<{
      [K in keyof UpdateBackupPlanInput]: (UpdateBackupPlanInput)[K]
    }>): Request<UpdateBackupPlanOutput, AWSError> {
        this.boot();
        return this.client.updateBackupPlan(
          this.ops["UpdateBackupPlan"].apply(partialParams)
        );
    }

    invokeUpdateFramework(partialParams: ToOptional<{
      [K in keyof UpdateFrameworkInput]: (UpdateFrameworkInput)[K]
    }>): Request<UpdateFrameworkOutput, AWSError> {
        this.boot();
        return this.client.updateFramework(
          this.ops["UpdateFramework"].apply(partialParams)
        );
    }

    invokeUpdateRecoveryPointLifecycle(partialParams: ToOptional<{
      [K in keyof UpdateRecoveryPointLifecycleInput]: (UpdateRecoveryPointLifecycleInput)[K]
    }>): Request<UpdateRecoveryPointLifecycleOutput, AWSError> {
        this.boot();
        return this.client.updateRecoveryPointLifecycle(
          this.ops["UpdateRecoveryPointLifecycle"].apply(partialParams)
        );
    }

    invokeUpdateReportPlan(partialParams: ToOptional<{
      [K in keyof UpdateReportPlanInput]: (UpdateReportPlanInput)[K]
    }>): Request<UpdateReportPlanOutput, AWSError> {
        this.boot();
        return this.client.updateReportPlan(
          this.ops["UpdateReportPlan"].apply(partialParams)
        );
    }
}