
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    PartnerIntegrationInputMessage,
    AuthorizeSnapshotAccessMessage,
    CancelResizeMessage,
    CreateClusterMessage,
    CreateClusterSnapshotMessage,
    CreateClusterSubnetGroupMessage,
    CreateUsageLimitMessage,
    DeleteClusterMessage,
    DeleteClusterSnapshotMessage,
    DescribeLoggingStatusMessage,
    DescribePartnersInputMessage,
    DescribeResizeMessage,
    DisableLoggingMessage,
    DisableSnapshotCopyMessage,
    EnableLoggingMessage,
    EnableSnapshotCopyMessage,
    GetClusterCredentialsMessage,
    ModifyAquaInputMessage,
    ModifyClusterMessage,
    ModifyClusterDbRevisionMessage,
    ModifyClusterIamRolesMessage,
    ModifyClusterMaintenanceMessage,
    ModifyClusterSnapshotMessage,
    ModifyClusterSubnetGroupMessage,
    ModifySnapshotCopyRetentionPeriodMessage,
    PauseClusterMessage,
    RebootClusterMessage,
    ResizeClusterMessage,
    RestoreFromClusterSnapshotMessage,
    RestoreTableFromClusterSnapshotMessage,
    ResumeClusterMessage,
    RevokeSnapshotAccessMessage,
    RotateEncryptionKeyMessage,
    UpdatePartnerStatusInputMessage,
    PartnerIntegrationOutputMessage,
    AuthorizeSnapshotAccessResult,
    ResizeProgressMessage,
    CreateClusterResult,
    CreateClusterSnapshotResult,
    CreateClusterSubnetGroupResult,
    UsageLimit,
    DeleteClusterResult,
    DeleteClusterSnapshotResult,
    LoggingStatus,
    DescribePartnersOutputMessage,
    DisableSnapshotCopyResult,
    EnableSnapshotCopyResult,
    ClusterCredentials,
    ModifyAquaOutputMessage,
    ModifyClusterResult,
    ModifyClusterDbRevisionResult,
    ModifyClusterIamRolesResult,
    ModifyClusterMaintenanceResult,
    ModifyClusterSnapshotResult,
    ModifyClusterSubnetGroupResult,
    ModifySnapshotCopyRetentionPeriodResult,
    PauseClusterResult,
    RebootClusterResult,
    ResizeClusterResult,
    RestoreFromClusterSnapshotResult,
    RestoreTableFromClusterSnapshotResult,
    ResumeClusterResult,
    RevokeSnapshotAccessResult,
    RotateEncryptionKeyResult
} from "aws-sdk/clients/redshift";
const schema = require("../apis/redshift-2012-12-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.redshift.Cluster {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.redshift.Cluster>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Redshift()
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

    invokeAddPartner(partialParams: ToOptional<{
      [K in keyof PartnerIntegrationInputMessage & keyof Omit<PartnerIntegrationInputMessage, "ClusterIdentifier" | "DatabaseName">]: (PartnerIntegrationInputMessage)[K]
    }>): Request<PartnerIntegrationOutputMessage, AWSError> {
        this.boot();
        return this.client.addPartner(
          this.ops["AddPartner"].apply(partialParams)
        );
    }

    invokeAuthorizeSnapshotAccess(partialParams: ToOptional<{
      [K in keyof AuthorizeSnapshotAccessMessage & keyof Omit<AuthorizeSnapshotAccessMessage, "SnapshotIdentifier">]: (AuthorizeSnapshotAccessMessage)[K]
    }>): Request<AuthorizeSnapshotAccessResult, AWSError> {
        this.boot();
        return this.client.authorizeSnapshotAccess(
          this.ops["AuthorizeSnapshotAccess"].apply(partialParams)
        );
    }

    invokeCancelResize(partialParams: ToOptional<{
      [K in keyof CancelResizeMessage & keyof Omit<CancelResizeMessage, "ClusterIdentifier">]: (CancelResizeMessage)[K]
    }>): Request<ResizeProgressMessage, AWSError> {
        this.boot();
        return this.client.cancelResize(
          this.ops["CancelResize"].apply(partialParams)
        );
    }

    invokeCreateCluster(partialParams: ToOptional<{
      [K in keyof CreateClusterMessage & keyof Omit<CreateClusterMessage, "ClusterIdentifier" | "NodeType" | "MasterUsername">]: (CreateClusterMessage)[K]
    }>): Request<CreateClusterResult, AWSError> {
        this.boot();
        return this.client.createCluster(
          this.ops["CreateCluster"].apply(partialParams)
        );
    }

    invokeCreateClusterSnapshot(partialParams: ToOptional<{
      [K in keyof CreateClusterSnapshotMessage & keyof Omit<CreateClusterSnapshotMessage, "SnapshotIdentifier" | "ClusterIdentifier">]: (CreateClusterSnapshotMessage)[K]
    }>): Request<CreateClusterSnapshotResult, AWSError> {
        this.boot();
        return this.client.createClusterSnapshot(
          this.ops["CreateClusterSnapshot"].apply(partialParams)
        );
    }

    invokeCreateClusterSubnetGroup(partialParams: ToOptional<{
      [K in keyof CreateClusterSubnetGroupMessage & keyof Omit<CreateClusterSubnetGroupMessage, "ClusterSubnetGroupName">]: (CreateClusterSubnetGroupMessage)[K]
    }>): Request<CreateClusterSubnetGroupResult, AWSError> {
        this.boot();
        return this.client.createClusterSubnetGroup(
          this.ops["CreateClusterSubnetGroup"].apply(partialParams)
        );
    }

    invokeCreateUsageLimit(partialParams: ToOptional<{
      [K in keyof CreateUsageLimitMessage & keyof Omit<CreateUsageLimitMessage, "ClusterIdentifier">]: (CreateUsageLimitMessage)[K]
    }>): Request<UsageLimit, AWSError> {
        this.boot();
        return this.client.createUsageLimit(
          this.ops["CreateUsageLimit"].apply(partialParams)
        );
    }

    invokeDeleteCluster(partialParams: ToOptional<{
      [K in keyof DeleteClusterMessage & keyof Omit<DeleteClusterMessage, "ClusterIdentifier">]: (DeleteClusterMessage)[K]
    }>): Request<DeleteClusterResult, AWSError> {
        this.boot();
        return this.client.deleteCluster(
          this.ops["DeleteCluster"].apply(partialParams)
        );
    }

    invokeDeleteClusterSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteClusterSnapshotMessage & keyof Omit<DeleteClusterSnapshotMessage, "SnapshotIdentifier">]: (DeleteClusterSnapshotMessage)[K]
    }>): Request<DeleteClusterSnapshotResult, AWSError> {
        this.boot();
        return this.client.deleteClusterSnapshot(
          this.ops["DeleteClusterSnapshot"].apply(partialParams)
        );
    }

    invokeDeletePartner(partialParams: ToOptional<{
      [K in keyof PartnerIntegrationInputMessage & keyof Omit<PartnerIntegrationInputMessage, "ClusterIdentifier" | "DatabaseName">]: (PartnerIntegrationInputMessage)[K]
    }>): Request<PartnerIntegrationOutputMessage, AWSError> {
        this.boot();
        return this.client.deletePartner(
          this.ops["DeletePartner"].apply(partialParams)
        );
    }

    invokeDescribeLoggingStatus(partialParams: ToOptional<{
      [K in keyof DescribeLoggingStatusMessage & keyof Omit<DescribeLoggingStatusMessage, "ClusterIdentifier">]: (DescribeLoggingStatusMessage)[K]
    }>): Request<LoggingStatus, AWSError> {
        this.boot();
        return this.client.describeLoggingStatus(
          this.ops["DescribeLoggingStatus"].apply(partialParams)
        );
    }

    invokeDescribePartners(partialParams: ToOptional<{
      [K in keyof DescribePartnersInputMessage & keyof Omit<DescribePartnersInputMessage, "ClusterIdentifier">]: (DescribePartnersInputMessage)[K]
    }>): Request<DescribePartnersOutputMessage, AWSError> {
        this.boot();
        return this.client.describePartners(
          this.ops["DescribePartners"].apply(partialParams)
        );
    }

    invokeDescribeResize(partialParams: ToOptional<{
      [K in keyof DescribeResizeMessage & keyof Omit<DescribeResizeMessage, "ClusterIdentifier">]: (DescribeResizeMessage)[K]
    }>): Request<ResizeProgressMessage, AWSError> {
        this.boot();
        return this.client.describeResize(
          this.ops["DescribeResize"].apply(partialParams)
        );
    }

    invokeDisableLogging(partialParams: ToOptional<{
      [K in keyof DisableLoggingMessage & keyof Omit<DisableLoggingMessage, "ClusterIdentifier">]: (DisableLoggingMessage)[K]
    }>): Request<LoggingStatus, AWSError> {
        this.boot();
        return this.client.disableLogging(
          this.ops["DisableLogging"].apply(partialParams)
        );
    }

    invokeDisableSnapshotCopy(partialParams: ToOptional<{
      [K in keyof DisableSnapshotCopyMessage & keyof Omit<DisableSnapshotCopyMessage, "ClusterIdentifier">]: (DisableSnapshotCopyMessage)[K]
    }>): Request<DisableSnapshotCopyResult, AWSError> {
        this.boot();
        return this.client.disableSnapshotCopy(
          this.ops["DisableSnapshotCopy"].apply(partialParams)
        );
    }

    invokeEnableLogging(partialParams: ToOptional<{
      [K in keyof EnableLoggingMessage & keyof Omit<EnableLoggingMessage, "ClusterIdentifier">]: (EnableLoggingMessage)[K]
    }>): Request<LoggingStatus, AWSError> {
        this.boot();
        return this.client.enableLogging(
          this.ops["EnableLogging"].apply(partialParams)
        );
    }

    invokeEnableSnapshotCopy(partialParams: ToOptional<{
      [K in keyof EnableSnapshotCopyMessage & keyof Omit<EnableSnapshotCopyMessage, "ClusterIdentifier">]: (EnableSnapshotCopyMessage)[K]
    }>): Request<EnableSnapshotCopyResult, AWSError> {
        this.boot();
        return this.client.enableSnapshotCopy(
          this.ops["EnableSnapshotCopy"].apply(partialParams)
        );
    }

    invokeGetClusterCredentials(partialParams: ToOptional<{
      [K in keyof GetClusterCredentialsMessage & keyof Omit<GetClusterCredentialsMessage, "ClusterIdentifier">]: (GetClusterCredentialsMessage)[K]
    }>): Request<ClusterCredentials, AWSError> {
        this.boot();
        return this.client.getClusterCredentials(
          this.ops["GetClusterCredentials"].apply(partialParams)
        );
    }

    invokeModifyAquaConfiguration(partialParams: ToOptional<{
      [K in keyof ModifyAquaInputMessage & keyof Omit<ModifyAquaInputMessage, "ClusterIdentifier">]: (ModifyAquaInputMessage)[K]
    }>): Request<ModifyAquaOutputMessage, AWSError> {
        this.boot();
        return this.client.modifyAquaConfiguration(
          this.ops["ModifyAquaConfiguration"].apply(partialParams)
        );
    }

    invokeModifyCluster(partialParams: ToOptional<{
      [K in keyof ModifyClusterMessage & keyof Omit<ModifyClusterMessage, "ClusterIdentifier">]: (ModifyClusterMessage)[K]
    }>): Request<ModifyClusterResult, AWSError> {
        this.boot();
        return this.client.modifyCluster(
          this.ops["ModifyCluster"].apply(partialParams)
        );
    }

    invokeModifyClusterDbRevision(partialParams: ToOptional<{
      [K in keyof ModifyClusterDbRevisionMessage & keyof Omit<ModifyClusterDbRevisionMessage, "ClusterIdentifier">]: (ModifyClusterDbRevisionMessage)[K]
    }>): Request<ModifyClusterDbRevisionResult, AWSError> {
        this.boot();
        return this.client.modifyClusterDbRevision(
          this.ops["ModifyClusterDbRevision"].apply(partialParams)
        );
    }

    invokeModifyClusterIamRoles(partialParams: ToOptional<{
      [K in keyof ModifyClusterIamRolesMessage & keyof Omit<ModifyClusterIamRolesMessage, "ClusterIdentifier">]: (ModifyClusterIamRolesMessage)[K]
    }>): Request<ModifyClusterIamRolesResult, AWSError> {
        this.boot();
        return this.client.modifyClusterIamRoles(
          this.ops["ModifyClusterIamRoles"].apply(partialParams)
        );
    }

    invokeModifyClusterMaintenance(partialParams: ToOptional<{
      [K in keyof ModifyClusterMaintenanceMessage & keyof Omit<ModifyClusterMaintenanceMessage, "ClusterIdentifier">]: (ModifyClusterMaintenanceMessage)[K]
    }>): Request<ModifyClusterMaintenanceResult, AWSError> {
        this.boot();
        return this.client.modifyClusterMaintenance(
          this.ops["ModifyClusterMaintenance"].apply(partialParams)
        );
    }

    invokeModifyClusterSnapshot(partialParams: ToOptional<{
      [K in keyof ModifyClusterSnapshotMessage & keyof Omit<ModifyClusterSnapshotMessage, "SnapshotIdentifier">]: (ModifyClusterSnapshotMessage)[K]
    }>): Request<ModifyClusterSnapshotResult, AWSError> {
        this.boot();
        return this.client.modifyClusterSnapshot(
          this.ops["ModifyClusterSnapshot"].apply(partialParams)
        );
    }

    invokeModifyClusterSubnetGroup(partialParams: ToOptional<{
      [K in keyof ModifyClusterSubnetGroupMessage & keyof Omit<ModifyClusterSubnetGroupMessage, "ClusterSubnetGroupName">]: (ModifyClusterSubnetGroupMessage)[K]
    }>): Request<ModifyClusterSubnetGroupResult, AWSError> {
        this.boot();
        return this.client.modifyClusterSubnetGroup(
          this.ops["ModifyClusterSubnetGroup"].apply(partialParams)
        );
    }

    invokeModifySnapshotCopyRetentionPeriod(partialParams: ToOptional<{
      [K in keyof ModifySnapshotCopyRetentionPeriodMessage & keyof Omit<ModifySnapshotCopyRetentionPeriodMessage, "ClusterIdentifier">]: (ModifySnapshotCopyRetentionPeriodMessage)[K]
    }>): Request<ModifySnapshotCopyRetentionPeriodResult, AWSError> {
        this.boot();
        return this.client.modifySnapshotCopyRetentionPeriod(
          this.ops["ModifySnapshotCopyRetentionPeriod"].apply(partialParams)
        );
    }

    invokePauseCluster(partialParams: ToOptional<{
      [K in keyof PauseClusterMessage & keyof Omit<PauseClusterMessage, "ClusterIdentifier">]: (PauseClusterMessage)[K]
    }>): Request<PauseClusterResult, AWSError> {
        this.boot();
        return this.client.pauseCluster(
          this.ops["PauseCluster"].apply(partialParams)
        );
    }

    invokeRebootCluster(partialParams: ToOptional<{
      [K in keyof RebootClusterMessage & keyof Omit<RebootClusterMessage, "ClusterIdentifier">]: (RebootClusterMessage)[K]
    }>): Request<RebootClusterResult, AWSError> {
        this.boot();
        return this.client.rebootCluster(
          this.ops["RebootCluster"].apply(partialParams)
        );
    }

    invokeResizeCluster(partialParams: ToOptional<{
      [K in keyof ResizeClusterMessage & keyof Omit<ResizeClusterMessage, "ClusterIdentifier">]: (ResizeClusterMessage)[K]
    }>): Request<ResizeClusterResult, AWSError> {
        this.boot();
        return this.client.resizeCluster(
          this.ops["ResizeCluster"].apply(partialParams)
        );
    }

    invokeRestoreFromClusterSnapshot(partialParams: ToOptional<{
      [K in keyof RestoreFromClusterSnapshotMessage & keyof Omit<RestoreFromClusterSnapshotMessage, "ClusterIdentifier" | "SnapshotIdentifier">]: (RestoreFromClusterSnapshotMessage)[K]
    }>): Request<RestoreFromClusterSnapshotResult, AWSError> {
        this.boot();
        return this.client.restoreFromClusterSnapshot(
          this.ops["RestoreFromClusterSnapshot"].apply(partialParams)
        );
    }

    invokeRestoreTableFromClusterSnapshot(partialParams: ToOptional<{
      [K in keyof RestoreTableFromClusterSnapshotMessage & keyof Omit<RestoreTableFromClusterSnapshotMessage, "ClusterIdentifier" | "SnapshotIdentifier">]: (RestoreTableFromClusterSnapshotMessage)[K]
    }>): Request<RestoreTableFromClusterSnapshotResult, AWSError> {
        this.boot();
        return this.client.restoreTableFromClusterSnapshot(
          this.ops["RestoreTableFromClusterSnapshot"].apply(partialParams)
        );
    }

    invokeResumeCluster(partialParams: ToOptional<{
      [K in keyof ResumeClusterMessage & keyof Omit<ResumeClusterMessage, "ClusterIdentifier">]: (ResumeClusterMessage)[K]
    }>): Request<ResumeClusterResult, AWSError> {
        this.boot();
        return this.client.resumeCluster(
          this.ops["ResumeCluster"].apply(partialParams)
        );
    }

    invokeRevokeSnapshotAccess(partialParams: ToOptional<{
      [K in keyof RevokeSnapshotAccessMessage & keyof Omit<RevokeSnapshotAccessMessage, "SnapshotIdentifier">]: (RevokeSnapshotAccessMessage)[K]
    }>): Request<RevokeSnapshotAccessResult, AWSError> {
        this.boot();
        return this.client.revokeSnapshotAccess(
          this.ops["RevokeSnapshotAccess"].apply(partialParams)
        );
    }

    invokeRotateEncryptionKey(partialParams: ToOptional<{
      [K in keyof RotateEncryptionKeyMessage & keyof Omit<RotateEncryptionKeyMessage, "ClusterIdentifier">]: (RotateEncryptionKeyMessage)[K]
    }>): Request<RotateEncryptionKeyResult, AWSError> {
        this.boot();
        return this.client.rotateEncryptionKey(
          this.ops["RotateEncryptionKey"].apply(partialParams)
        );
    }

    invokeUpdatePartnerStatus(partialParams: ToOptional<{
      [K in keyof UpdatePartnerStatusInputMessage & keyof Omit<UpdatePartnerStatusInputMessage, "ClusterIdentifier" | "DatabaseName">]: (UpdatePartnerStatusInputMessage)[K]
    }>): Request<PartnerIntegrationOutputMessage, AWSError> {
        this.boot();
        return this.client.updatePartnerStatus(
          this.ops["UpdatePartnerStatus"].apply(partialParams)
        );
    }
}