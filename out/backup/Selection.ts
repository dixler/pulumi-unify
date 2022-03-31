
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
const schema = require("../apis/backup-2018-11-15.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.backup.Selection {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.backup.Selection>) {
        super(...args)
        this.client = new awssdk.Backup()
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

    invokeCreateBackupPlan(partialParams: ToOptional<{
      [K in keyof CreateBackupPlanInput & keyof CreateBackupPlanInput & keyof CreateBackupPlanInput]: (CreateBackupPlanInput & CreateBackupPlanInput & CreateBackupPlanInput)[K]
    }>): Request<CreateBackupPlanOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createBackupPlan(
          this.ops["CreateBackupPlan"].applicator.apply(partialParams)
        );
    }

    invokeCreateBackupSelection(partialParams: ToOptional<{
      [K in keyof CreateBackupSelectionInput & keyof CreateBackupSelectionInput & keyof CreateBackupSelectionInput]: (CreateBackupSelectionInput & CreateBackupSelectionInput & CreateBackupSelectionInput)[K]
    }>): Request<CreateBackupSelectionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createBackupSelection(
          this.ops["CreateBackupSelection"].applicator.apply(partialParams)
        );
    }

    invokeCreateBackupVault(partialParams: ToOptional<{
      [K in keyof CreateBackupVaultInput & keyof CreateBackupVaultInput & keyof CreateBackupVaultInput]: (CreateBackupVaultInput & CreateBackupVaultInput & CreateBackupVaultInput)[K]
    }>): Request<CreateBackupVaultOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createBackupVault(
          this.ops["CreateBackupVault"].applicator.apply(partialParams)
        );
    }

    invokeCreateFramework(partialParams: ToOptional<{
      [K in keyof CreateFrameworkInput & keyof CreateFrameworkInput & keyof CreateFrameworkInput]: (CreateFrameworkInput & CreateFrameworkInput & CreateFrameworkInput)[K]
    }>): Request<CreateFrameworkOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFramework(
          this.ops["CreateFramework"].applicator.apply(partialParams)
        );
    }

    invokeCreateReportPlan(partialParams: ToOptional<{
      [K in keyof CreateReportPlanInput & keyof CreateReportPlanInput & keyof CreateReportPlanInput]: (CreateReportPlanInput & CreateReportPlanInput & CreateReportPlanInput)[K]
    }>): Request<CreateReportPlanOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createReportPlan(
          this.ops["CreateReportPlan"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBackupPlan(partialParams: ToOptional<{
      [K in keyof DeleteBackupPlanInput & keyof DeleteBackupPlanInput & keyof DeleteBackupPlanInput]: (DeleteBackupPlanInput & DeleteBackupPlanInput & DeleteBackupPlanInput)[K]
    }>): Request<DeleteBackupPlanOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBackupPlan(
          this.ops["DeleteBackupPlan"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBackupSelection(partialParams: ToOptional<{
      [K in keyof DeleteBackupSelectionInput & keyof DeleteBackupSelectionInput & keyof DeleteBackupSelectionInput]: (DeleteBackupSelectionInput & DeleteBackupSelectionInput & DeleteBackupSelectionInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBackupSelection(
          this.ops["DeleteBackupSelection"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBackupVault(partialParams: ToOptional<{
      [K in keyof DeleteBackupVaultInput & keyof DeleteBackupVaultInput & keyof DeleteBackupVaultInput]: (DeleteBackupVaultInput & DeleteBackupVaultInput & DeleteBackupVaultInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBackupVault(
          this.ops["DeleteBackupVault"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBackupVaultAccessPolicy(partialParams: ToOptional<{
      [K in keyof DeleteBackupVaultAccessPolicyInput & keyof DeleteBackupVaultAccessPolicyInput & keyof DeleteBackupVaultAccessPolicyInput]: (DeleteBackupVaultAccessPolicyInput & DeleteBackupVaultAccessPolicyInput & DeleteBackupVaultAccessPolicyInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBackupVaultAccessPolicy(
          this.ops["DeleteBackupVaultAccessPolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBackupVaultLockConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteBackupVaultLockConfigurationInput & keyof DeleteBackupVaultLockConfigurationInput & keyof DeleteBackupVaultLockConfigurationInput]: (DeleteBackupVaultLockConfigurationInput & DeleteBackupVaultLockConfigurationInput & DeleteBackupVaultLockConfigurationInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBackupVaultLockConfiguration(
          this.ops["DeleteBackupVaultLockConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBackupVaultNotifications(partialParams: ToOptional<{
      [K in keyof DeleteBackupVaultNotificationsInput & keyof DeleteBackupVaultNotificationsInput & keyof DeleteBackupVaultNotificationsInput]: (DeleteBackupVaultNotificationsInput & DeleteBackupVaultNotificationsInput & DeleteBackupVaultNotificationsInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBackupVaultNotifications(
          this.ops["DeleteBackupVaultNotifications"].applicator.apply(partialParams)
        );
    }

    invokeDeleteFramework(partialParams: ToOptional<{
      [K in keyof DeleteFrameworkInput & keyof DeleteFrameworkInput & keyof DeleteFrameworkInput]: (DeleteFrameworkInput & DeleteFrameworkInput & DeleteFrameworkInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFramework(
          this.ops["DeleteFramework"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRecoveryPoint(partialParams: ToOptional<{
      [K in keyof DeleteRecoveryPointInput & keyof DeleteRecoveryPointInput & keyof DeleteRecoveryPointInput]: (DeleteRecoveryPointInput & DeleteRecoveryPointInput & DeleteRecoveryPointInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRecoveryPoint(
          this.ops["DeleteRecoveryPoint"].applicator.apply(partialParams)
        );
    }

    invokeDeleteReportPlan(partialParams: ToOptional<{
      [K in keyof DeleteReportPlanInput & keyof DeleteReportPlanInput & keyof DeleteReportPlanInput]: (DeleteReportPlanInput & DeleteReportPlanInput & DeleteReportPlanInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteReportPlan(
          this.ops["DeleteReportPlan"].applicator.apply(partialParams)
        );
    }

    invokeDescribeBackupJob(partialParams: ToOptional<{
      [K in keyof DescribeBackupJobInput & keyof DescribeBackupJobInput & keyof DescribeBackupJobInput]: (DescribeBackupJobInput & DescribeBackupJobInput & DescribeBackupJobInput)[K]
    }>): Request<DescribeBackupJobOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeBackupJob(
          this.ops["DescribeBackupJob"].applicator.apply(partialParams)
        );
    }

    invokeDescribeBackupVault(partialParams: ToOptional<{
      [K in keyof DescribeBackupVaultInput & keyof DescribeBackupVaultInput & keyof DescribeBackupVaultInput]: (DescribeBackupVaultInput & DescribeBackupVaultInput & DescribeBackupVaultInput)[K]
    }>): Request<DescribeBackupVaultOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeBackupVault(
          this.ops["DescribeBackupVault"].applicator.apply(partialParams)
        );
    }

    invokeDescribeCopyJob(partialParams: ToOptional<{
      [K in keyof DescribeCopyJobInput & keyof DescribeCopyJobInput & keyof DescribeCopyJobInput]: (DescribeCopyJobInput & DescribeCopyJobInput & DescribeCopyJobInput)[K]
    }>): Request<DescribeCopyJobOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCopyJob(
          this.ops["DescribeCopyJob"].applicator.apply(partialParams)
        );
    }

    invokeDescribeFramework(partialParams: ToOptional<{
      [K in keyof DescribeFrameworkInput & keyof DescribeFrameworkInput & keyof DescribeFrameworkInput]: (DescribeFrameworkInput & DescribeFrameworkInput & DescribeFrameworkInput)[K]
    }>): Request<DescribeFrameworkOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFramework(
          this.ops["DescribeFramework"].applicator.apply(partialParams)
        );
    }

    invokeDescribeProtectedResource(partialParams: ToOptional<{
      [K in keyof DescribeProtectedResourceInput & keyof DescribeProtectedResourceInput & keyof DescribeProtectedResourceInput]: (DescribeProtectedResourceInput & DescribeProtectedResourceInput & DescribeProtectedResourceInput)[K]
    }>): Request<DescribeProtectedResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeProtectedResource(
          this.ops["DescribeProtectedResource"].applicator.apply(partialParams)
        );
    }

    invokeDescribeRecoveryPoint(partialParams: ToOptional<{
      [K in keyof DescribeRecoveryPointInput & keyof DescribeRecoveryPointInput & keyof DescribeRecoveryPointInput]: (DescribeRecoveryPointInput & DescribeRecoveryPointInput & DescribeRecoveryPointInput)[K]
    }>): Request<DescribeRecoveryPointOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeRecoveryPoint(
          this.ops["DescribeRecoveryPoint"].applicator.apply(partialParams)
        );
    }

    invokeDescribeReportJob(partialParams: ToOptional<{
      [K in keyof DescribeReportJobInput & keyof DescribeReportJobInput & keyof DescribeReportJobInput]: (DescribeReportJobInput & DescribeReportJobInput & DescribeReportJobInput)[K]
    }>): Request<DescribeReportJobOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeReportJob(
          this.ops["DescribeReportJob"].applicator.apply(partialParams)
        );
    }

    invokeDescribeReportPlan(partialParams: ToOptional<{
      [K in keyof DescribeReportPlanInput & keyof DescribeReportPlanInput & keyof DescribeReportPlanInput]: (DescribeReportPlanInput & DescribeReportPlanInput & DescribeReportPlanInput)[K]
    }>): Request<DescribeReportPlanOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeReportPlan(
          this.ops["DescribeReportPlan"].applicator.apply(partialParams)
        );
    }

    invokeDescribeRestoreJob(partialParams: ToOptional<{
      [K in keyof DescribeRestoreJobInput & keyof DescribeRestoreJobInput & keyof DescribeRestoreJobInput]: (DescribeRestoreJobInput & DescribeRestoreJobInput & DescribeRestoreJobInput)[K]
    }>): Request<DescribeRestoreJobOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeRestoreJob(
          this.ops["DescribeRestoreJob"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateRecoveryPoint(partialParams: ToOptional<{
      [K in keyof DisassociateRecoveryPointInput & keyof DisassociateRecoveryPointInput & keyof DisassociateRecoveryPointInput]: (DisassociateRecoveryPointInput & DisassociateRecoveryPointInput & DisassociateRecoveryPointInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateRecoveryPoint(
          this.ops["DisassociateRecoveryPoint"].applicator.apply(partialParams)
        );
    }

    invokeExportBackupPlanTemplate(partialParams: ToOptional<{
      [K in keyof ExportBackupPlanTemplateInput & keyof ExportBackupPlanTemplateInput & keyof ExportBackupPlanTemplateInput]: (ExportBackupPlanTemplateInput & ExportBackupPlanTemplateInput & ExportBackupPlanTemplateInput)[K]
    }>): Request<ExportBackupPlanTemplateOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.exportBackupPlanTemplate(
          this.ops["ExportBackupPlanTemplate"].applicator.apply(partialParams)
        );
    }

    invokeGetBackupPlan(partialParams: ToOptional<{
      [K in keyof GetBackupPlanInput & keyof GetBackupPlanInput & keyof GetBackupPlanInput]: (GetBackupPlanInput & GetBackupPlanInput & GetBackupPlanInput)[K]
    }>): Request<GetBackupPlanOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBackupPlan(
          this.ops["GetBackupPlan"].applicator.apply(partialParams)
        );
    }

    invokeGetBackupPlanFromJSON(partialParams: ToOptional<{
      [K in keyof GetBackupPlanFromJSONInput & keyof GetBackupPlanFromJSONInput & keyof GetBackupPlanFromJSONInput]: (GetBackupPlanFromJSONInput & GetBackupPlanFromJSONInput & GetBackupPlanFromJSONInput)[K]
    }>): Request<GetBackupPlanFromJSONOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBackupPlanFromJSON(
          this.ops["GetBackupPlanFromJSON"].applicator.apply(partialParams)
        );
    }

    invokeGetBackupPlanFromTemplate(partialParams: ToOptional<{
      [K in keyof GetBackupPlanFromTemplateInput & keyof GetBackupPlanFromTemplateInput & keyof GetBackupPlanFromTemplateInput]: (GetBackupPlanFromTemplateInput & GetBackupPlanFromTemplateInput & GetBackupPlanFromTemplateInput)[K]
    }>): Request<GetBackupPlanFromTemplateOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBackupPlanFromTemplate(
          this.ops["GetBackupPlanFromTemplate"].applicator.apply(partialParams)
        );
    }

    invokeGetBackupSelection(partialParams: ToOptional<{
      [K in keyof GetBackupSelectionInput & keyof GetBackupSelectionInput & keyof GetBackupSelectionInput]: (GetBackupSelectionInput & GetBackupSelectionInput & GetBackupSelectionInput)[K]
    }>): Request<GetBackupSelectionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBackupSelection(
          this.ops["GetBackupSelection"].applicator.apply(partialParams)
        );
    }

    invokeGetBackupVaultAccessPolicy(partialParams: ToOptional<{
      [K in keyof GetBackupVaultAccessPolicyInput & keyof GetBackupVaultAccessPolicyInput & keyof GetBackupVaultAccessPolicyInput]: (GetBackupVaultAccessPolicyInput & GetBackupVaultAccessPolicyInput & GetBackupVaultAccessPolicyInput)[K]
    }>): Request<GetBackupVaultAccessPolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBackupVaultAccessPolicy(
          this.ops["GetBackupVaultAccessPolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetBackupVaultNotifications(partialParams: ToOptional<{
      [K in keyof GetBackupVaultNotificationsInput & keyof GetBackupVaultNotificationsInput & keyof GetBackupVaultNotificationsInput]: (GetBackupVaultNotificationsInput & GetBackupVaultNotificationsInput & GetBackupVaultNotificationsInput)[K]
    }>): Request<GetBackupVaultNotificationsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBackupVaultNotifications(
          this.ops["GetBackupVaultNotifications"].applicator.apply(partialParams)
        );
    }

    invokeGetRecoveryPointRestoreMetadata(partialParams: ToOptional<{
      [K in keyof GetRecoveryPointRestoreMetadataInput & keyof GetRecoveryPointRestoreMetadataInput & keyof GetRecoveryPointRestoreMetadataInput]: (GetRecoveryPointRestoreMetadataInput & GetRecoveryPointRestoreMetadataInput & GetRecoveryPointRestoreMetadataInput)[K]
    }>): Request<GetRecoveryPointRestoreMetadataOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRecoveryPointRestoreMetadata(
          this.ops["GetRecoveryPointRestoreMetadata"].applicator.apply(partialParams)
        );
    }

    invokeListBackupPlanVersions(partialParams: ToOptional<{
      [K in keyof ListBackupPlanVersionsInput & keyof ListBackupPlanVersionsInput & keyof ListBackupPlanVersionsInput]: (ListBackupPlanVersionsInput & ListBackupPlanVersionsInput & ListBackupPlanVersionsInput)[K]
    }>): Request<ListBackupPlanVersionsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listBackupPlanVersions(
          this.ops["ListBackupPlanVersions"].applicator.apply(partialParams)
        );
    }

    invokeListBackupSelections(partialParams: ToOptional<{
      [K in keyof ListBackupSelectionsInput & keyof ListBackupSelectionsInput & keyof ListBackupSelectionsInput]: (ListBackupSelectionsInput & ListBackupSelectionsInput & ListBackupSelectionsInput)[K]
    }>): Request<ListBackupSelectionsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listBackupSelections(
          this.ops["ListBackupSelections"].applicator.apply(partialParams)
        );
    }

    invokeListRecoveryPointsByBackupVault(partialParams: ToOptional<{
      [K in keyof ListRecoveryPointsByBackupVaultInput & keyof ListRecoveryPointsByBackupVaultInput & keyof ListRecoveryPointsByBackupVaultInput]: (ListRecoveryPointsByBackupVaultInput & ListRecoveryPointsByBackupVaultInput & ListRecoveryPointsByBackupVaultInput)[K]
    }>): Request<ListRecoveryPointsByBackupVaultOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRecoveryPointsByBackupVault(
          this.ops["ListRecoveryPointsByBackupVault"].applicator.apply(partialParams)
        );
    }

    invokeListRecoveryPointsByResource(partialParams: ToOptional<{
      [K in keyof ListRecoveryPointsByResourceInput & keyof ListRecoveryPointsByResourceInput & keyof ListRecoveryPointsByResourceInput]: (ListRecoveryPointsByResourceInput & ListRecoveryPointsByResourceInput & ListRecoveryPointsByResourceInput)[K]
    }>): Request<ListRecoveryPointsByResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRecoveryPointsByResource(
          this.ops["ListRecoveryPointsByResource"].applicator.apply(partialParams)
        );
    }

    invokeListTags(partialParams: ToOptional<{
      [K in keyof ListTagsInput & keyof ListTagsInput & keyof ListTagsInput]: (ListTagsInput & ListTagsInput & ListTagsInput)[K]
    }>): Request<ListTagsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTags(
          this.ops["ListTags"].applicator.apply(partialParams)
        );
    }

    invokePutBackupVaultAccessPolicy(partialParams: ToOptional<{
      [K in keyof PutBackupVaultAccessPolicyInput & keyof PutBackupVaultAccessPolicyInput & keyof PutBackupVaultAccessPolicyInput]: (PutBackupVaultAccessPolicyInput & PutBackupVaultAccessPolicyInput & PutBackupVaultAccessPolicyInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBackupVaultAccessPolicy(
          this.ops["PutBackupVaultAccessPolicy"].applicator.apply(partialParams)
        );
    }

    invokePutBackupVaultLockConfiguration(partialParams: ToOptional<{
      [K in keyof PutBackupVaultLockConfigurationInput & keyof PutBackupVaultLockConfigurationInput & keyof PutBackupVaultLockConfigurationInput]: (PutBackupVaultLockConfigurationInput & PutBackupVaultLockConfigurationInput & PutBackupVaultLockConfigurationInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBackupVaultLockConfiguration(
          this.ops["PutBackupVaultLockConfiguration"].applicator.apply(partialParams)
        );
    }

    invokePutBackupVaultNotifications(partialParams: ToOptional<{
      [K in keyof PutBackupVaultNotificationsInput & keyof PutBackupVaultNotificationsInput & keyof PutBackupVaultNotificationsInput]: (PutBackupVaultNotificationsInput & PutBackupVaultNotificationsInput & PutBackupVaultNotificationsInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putBackupVaultNotifications(
          this.ops["PutBackupVaultNotifications"].applicator.apply(partialParams)
        );
    }

    invokeStartBackupJob(partialParams: ToOptional<{
      [K in keyof Omit<StartBackupJobInput, "IamRoleArn"> & keyof StartBackupJobInput & keyof StartBackupJobInput]: (Omit<StartBackupJobInput, "IamRoleArn"> & StartBackupJobInput & StartBackupJobInput)[K]
    }>): Request<StartBackupJobOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startBackupJob(
          this.ops["StartBackupJob"].applicator.apply(partialParams)
        );
    }

    invokeStartCopyJob(partialParams: ToOptional<{
      [K in keyof Omit<StartCopyJobInput, "IamRoleArn"> & keyof StartCopyJobInput & keyof StartCopyJobInput]: (Omit<StartCopyJobInput, "IamRoleArn"> & StartCopyJobInput & StartCopyJobInput)[K]
    }>): Request<StartCopyJobOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startCopyJob(
          this.ops["StartCopyJob"].applicator.apply(partialParams)
        );
    }

    invokeStartReportJob(partialParams: ToOptional<{
      [K in keyof StartReportJobInput & keyof StartReportJobInput & keyof StartReportJobInput]: (StartReportJobInput & StartReportJobInput & StartReportJobInput)[K]
    }>): Request<StartReportJobOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startReportJob(
          this.ops["StartReportJob"].applicator.apply(partialParams)
        );
    }

    invokeStartRestoreJob(partialParams: ToOptional<{
      [K in keyof Omit<StartRestoreJobInput, "IamRoleArn"> & keyof StartRestoreJobInput & keyof StartRestoreJobInput]: (Omit<StartRestoreJobInput, "IamRoleArn"> & StartRestoreJobInput & StartRestoreJobInput)[K]
    }>): Request<StartRestoreJobOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startRestoreJob(
          this.ops["StartRestoreJob"].applicator.apply(partialParams)
        );
    }

    invokeStopBackupJob(partialParams: ToOptional<{
      [K in keyof StopBackupJobInput & keyof StopBackupJobInput & keyof StopBackupJobInput]: (StopBackupJobInput & StopBackupJobInput & StopBackupJobInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopBackupJob(
          this.ops["StopBackupJob"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput]: (TagResourceInput & TagResourceInput & TagResourceInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput]: (UntagResourceInput & UntagResourceInput & UntagResourceInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateBackupPlan(partialParams: ToOptional<{
      [K in keyof UpdateBackupPlanInput & keyof UpdateBackupPlanInput & keyof UpdateBackupPlanInput]: (UpdateBackupPlanInput & UpdateBackupPlanInput & UpdateBackupPlanInput)[K]
    }>): Request<UpdateBackupPlanOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateBackupPlan(
          this.ops["UpdateBackupPlan"].applicator.apply(partialParams)
        );
    }

    invokeUpdateFramework(partialParams: ToOptional<{
      [K in keyof UpdateFrameworkInput & keyof UpdateFrameworkInput & keyof UpdateFrameworkInput]: (UpdateFrameworkInput & UpdateFrameworkInput & UpdateFrameworkInput)[K]
    }>): Request<UpdateFrameworkOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFramework(
          this.ops["UpdateFramework"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRecoveryPointLifecycle(partialParams: ToOptional<{
      [K in keyof UpdateRecoveryPointLifecycleInput & keyof UpdateRecoveryPointLifecycleInput & keyof UpdateRecoveryPointLifecycleInput]: (UpdateRecoveryPointLifecycleInput & UpdateRecoveryPointLifecycleInput & UpdateRecoveryPointLifecycleInput)[K]
    }>): Request<UpdateRecoveryPointLifecycleOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRecoveryPointLifecycle(
          this.ops["UpdateRecoveryPointLifecycle"].applicator.apply(partialParams)
        );
    }

    invokeUpdateReportPlan(partialParams: ToOptional<{
      [K in keyof UpdateReportPlanInput & keyof UpdateReportPlanInput & keyof UpdateReportPlanInput]: (UpdateReportPlanInput & UpdateReportPlanInput & UpdateReportPlanInput)[K]
    }>): Request<UpdateReportPlanOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateReportPlan(
          this.ops["UpdateReportPlan"].applicator.apply(partialParams)
        );
    }
}