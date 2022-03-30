"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws = __importStar(require("@pulumi/aws"));
const awssdk = __importStar(require("aws-sdk"));
const parse_1 = require("../parse");
class default_1 extends aws.redshift.EventSubscription {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Redshift();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/redshift-2012-12-01.normal.json"), this.client);
    }
    invokeAcceptReservedNodeExchange(partialParams) {
        return this.client.acceptReservedNodeExchange(this.ops["AcceptReservedNodeExchange"].apply(partialParams));
    }
    invokeAddPartner(partialParams) {
        return this.client.addPartner(this.ops["AddPartner"].apply(partialParams));
    }
    invokeAssociateDataShareConsumer(partialParams) {
        return this.client.associateDataShareConsumer(this.ops["AssociateDataShareConsumer"].apply(partialParams));
    }
    invokeAuthorizeClusterSecurityGroupIngress(partialParams) {
        return this.client.authorizeClusterSecurityGroupIngress(this.ops["AuthorizeClusterSecurityGroupIngress"].apply(partialParams));
    }
    invokeAuthorizeDataShare(partialParams) {
        return this.client.authorizeDataShare(this.ops["AuthorizeDataShare"].apply(partialParams));
    }
    invokeAuthorizeEndpointAccess(partialParams) {
        return this.client.authorizeEndpointAccess(this.ops["AuthorizeEndpointAccess"].apply(partialParams));
    }
    invokeAuthorizeSnapshotAccess(partialParams) {
        return this.client.authorizeSnapshotAccess(this.ops["AuthorizeSnapshotAccess"].apply(partialParams));
    }
    invokeBatchDeleteClusterSnapshots(partialParams) {
        return this.client.batchDeleteClusterSnapshots(this.ops["BatchDeleteClusterSnapshots"].apply(partialParams));
    }
    invokeBatchModifyClusterSnapshots(partialParams) {
        return this.client.batchModifyClusterSnapshots(this.ops["BatchModifyClusterSnapshots"].apply(partialParams));
    }
    invokeCancelResize(partialParams) {
        return this.client.cancelResize(this.ops["CancelResize"].apply(partialParams));
    }
    invokeCopyClusterSnapshot(partialParams) {
        return this.client.copyClusterSnapshot(this.ops["CopyClusterSnapshot"].apply(partialParams));
    }
    invokeCreateAuthenticationProfile(partialParams) {
        return this.client.createAuthenticationProfile(this.ops["CreateAuthenticationProfile"].apply(partialParams));
    }
    invokeCreateCluster(partialParams) {
        return this.client.createCluster(this.ops["CreateCluster"].apply(partialParams));
    }
    invokeCreateClusterParameterGroup(partialParams) {
        return this.client.createClusterParameterGroup(this.ops["CreateClusterParameterGroup"].apply(partialParams));
    }
    invokeCreateClusterSecurityGroup(partialParams) {
        return this.client.createClusterSecurityGroup(this.ops["CreateClusterSecurityGroup"].apply(partialParams));
    }
    invokeCreateClusterSnapshot(partialParams) {
        return this.client.createClusterSnapshot(this.ops["CreateClusterSnapshot"].apply(partialParams));
    }
    invokeCreateClusterSubnetGroup(partialParams) {
        return this.client.createClusterSubnetGroup(this.ops["CreateClusterSubnetGroup"].apply(partialParams));
    }
    invokeCreateEndpointAccess(partialParams) {
        return this.client.createEndpointAccess(this.ops["CreateEndpointAccess"].apply(partialParams));
    }
    invokeCreateEventSubscription(partialParams) {
        return this.client.createEventSubscription(this.ops["CreateEventSubscription"].apply(partialParams));
    }
    invokeCreateHsmClientCertificate(partialParams) {
        return this.client.createHsmClientCertificate(this.ops["CreateHsmClientCertificate"].apply(partialParams));
    }
    invokeCreateHsmConfiguration(partialParams) {
        return this.client.createHsmConfiguration(this.ops["CreateHsmConfiguration"].apply(partialParams));
    }
    invokeCreateScheduledAction(partialParams) {
        return this.client.createScheduledAction(this.ops["CreateScheduledAction"].apply(partialParams));
    }
    invokeCreateSnapshotCopyGrant(partialParams) {
        return this.client.createSnapshotCopyGrant(this.ops["CreateSnapshotCopyGrant"].apply(partialParams));
    }
    invokeCreateTags(partialParams) {
        return this.client.createTags(this.ops["CreateTags"].apply(partialParams));
    }
    invokeCreateUsageLimit(partialParams) {
        return this.client.createUsageLimit(this.ops["CreateUsageLimit"].apply(partialParams));
    }
    invokeDeauthorizeDataShare(partialParams) {
        return this.client.deauthorizeDataShare(this.ops["DeauthorizeDataShare"].apply(partialParams));
    }
    invokeDeleteAuthenticationProfile(partialParams) {
        return this.client.deleteAuthenticationProfile(this.ops["DeleteAuthenticationProfile"].apply(partialParams));
    }
    invokeDeleteCluster(partialParams) {
        return this.client.deleteCluster(this.ops["DeleteCluster"].apply(partialParams));
    }
    invokeDeleteClusterParameterGroup(partialParams) {
        return this.client.deleteClusterParameterGroup(this.ops["DeleteClusterParameterGroup"].apply(partialParams));
    }
    invokeDeleteClusterSecurityGroup(partialParams) {
        return this.client.deleteClusterSecurityGroup(this.ops["DeleteClusterSecurityGroup"].apply(partialParams));
    }
    invokeDeleteClusterSnapshot(partialParams) {
        return this.client.deleteClusterSnapshot(this.ops["DeleteClusterSnapshot"].apply(partialParams));
    }
    invokeDeleteClusterSubnetGroup(partialParams) {
        return this.client.deleteClusterSubnetGroup(this.ops["DeleteClusterSubnetGroup"].apply(partialParams));
    }
    invokeDeleteEndpointAccess(partialParams) {
        return this.client.deleteEndpointAccess(this.ops["DeleteEndpointAccess"].apply(partialParams));
    }
    invokeDeleteEventSubscription(partialParams) {
        return this.client.deleteEventSubscription(this.ops["DeleteEventSubscription"].apply(partialParams));
    }
    invokeDeleteHsmClientCertificate(partialParams) {
        return this.client.deleteHsmClientCertificate(this.ops["DeleteHsmClientCertificate"].apply(partialParams));
    }
    invokeDeleteHsmConfiguration(partialParams) {
        return this.client.deleteHsmConfiguration(this.ops["DeleteHsmConfiguration"].apply(partialParams));
    }
    invokeDeletePartner(partialParams) {
        return this.client.deletePartner(this.ops["DeletePartner"].apply(partialParams));
    }
    invokeDeleteScheduledAction(partialParams) {
        return this.client.deleteScheduledAction(this.ops["DeleteScheduledAction"].apply(partialParams));
    }
    invokeDeleteSnapshotCopyGrant(partialParams) {
        return this.client.deleteSnapshotCopyGrant(this.ops["DeleteSnapshotCopyGrant"].apply(partialParams));
    }
    invokeDeleteSnapshotSchedule(partialParams) {
        return this.client.deleteSnapshotSchedule(this.ops["DeleteSnapshotSchedule"].apply(partialParams));
    }
    invokeDeleteTags(partialParams) {
        return this.client.deleteTags(this.ops["DeleteTags"].apply(partialParams));
    }
    invokeDeleteUsageLimit(partialParams) {
        return this.client.deleteUsageLimit(this.ops["DeleteUsageLimit"].apply(partialParams));
    }
    invokeDescribeClusterParameters(partialParams) {
        return this.client.describeClusterParameters(this.ops["DescribeClusterParameters"].apply(partialParams));
    }
    invokeDescribeDefaultClusterParameters(partialParams) {
        return this.client.describeDefaultClusterParameters(this.ops["DescribeDefaultClusterParameters"].apply(partialParams));
    }
    invokeDescribeLoggingStatus(partialParams) {
        return this.client.describeLoggingStatus(this.ops["DescribeLoggingStatus"].apply(partialParams));
    }
    invokeDescribeNodeConfigurationOptions(partialParams) {
        return this.client.describeNodeConfigurationOptions(this.ops["DescribeNodeConfigurationOptions"].apply(partialParams));
    }
    invokeDescribePartners(partialParams) {
        return this.client.describePartners(this.ops["DescribePartners"].apply(partialParams));
    }
    invokeDescribeResize(partialParams) {
        return this.client.describeResize(this.ops["DescribeResize"].apply(partialParams));
    }
    invokeDisableLogging(partialParams) {
        return this.client.disableLogging(this.ops["DisableLogging"].apply(partialParams));
    }
    invokeDisableSnapshotCopy(partialParams) {
        return this.client.disableSnapshotCopy(this.ops["DisableSnapshotCopy"].apply(partialParams));
    }
    invokeDisassociateDataShareConsumer(partialParams) {
        return this.client.disassociateDataShareConsumer(this.ops["DisassociateDataShareConsumer"].apply(partialParams));
    }
    invokeEnableLogging(partialParams) {
        return this.client.enableLogging(this.ops["EnableLogging"].apply(partialParams));
    }
    invokeEnableSnapshotCopy(partialParams) {
        return this.client.enableSnapshotCopy(this.ops["EnableSnapshotCopy"].apply(partialParams));
    }
    invokeGetClusterCredentials(partialParams) {
        return this.client.getClusterCredentials(this.ops["GetClusterCredentials"].apply(partialParams));
    }
    invokeGetReservedNodeExchangeConfigurationOptions(partialParams) {
        return this.client.getReservedNodeExchangeConfigurationOptions(this.ops["GetReservedNodeExchangeConfigurationOptions"].apply(partialParams));
    }
    invokeGetReservedNodeExchangeOfferings(partialParams) {
        return this.client.getReservedNodeExchangeOfferings(this.ops["GetReservedNodeExchangeOfferings"].apply(partialParams));
    }
    invokeModifyAquaConfiguration(partialParams) {
        return this.client.modifyAquaConfiguration(this.ops["ModifyAquaConfiguration"].apply(partialParams));
    }
    invokeModifyAuthenticationProfile(partialParams) {
        return this.client.modifyAuthenticationProfile(this.ops["ModifyAuthenticationProfile"].apply(partialParams));
    }
    invokeModifyCluster(partialParams) {
        return this.client.modifyCluster(this.ops["ModifyCluster"].apply(partialParams));
    }
    invokeModifyClusterDbRevision(partialParams) {
        return this.client.modifyClusterDbRevision(this.ops["ModifyClusterDbRevision"].apply(partialParams));
    }
    invokeModifyClusterIamRoles(partialParams) {
        return this.client.modifyClusterIamRoles(this.ops["ModifyClusterIamRoles"].apply(partialParams));
    }
    invokeModifyClusterMaintenance(partialParams) {
        return this.client.modifyClusterMaintenance(this.ops["ModifyClusterMaintenance"].apply(partialParams));
    }
    invokeModifyClusterParameterGroup(partialParams) {
        return this.client.modifyClusterParameterGroup(this.ops["ModifyClusterParameterGroup"].apply(partialParams));
    }
    invokeModifyClusterSnapshot(partialParams) {
        return this.client.modifyClusterSnapshot(this.ops["ModifyClusterSnapshot"].apply(partialParams));
    }
    invokeModifyClusterSnapshotSchedule(partialParams) {
        return this.client.modifyClusterSnapshotSchedule(this.ops["ModifyClusterSnapshotSchedule"].apply(partialParams));
    }
    invokeModifyClusterSubnetGroup(partialParams) {
        return this.client.modifyClusterSubnetGroup(this.ops["ModifyClusterSubnetGroup"].apply(partialParams));
    }
    invokeModifyEndpointAccess(partialParams) {
        return this.client.modifyEndpointAccess(this.ops["ModifyEndpointAccess"].apply(partialParams));
    }
    invokeModifyEventSubscription(partialParams) {
        return this.client.modifyEventSubscription(this.ops["ModifyEventSubscription"].apply(partialParams));
    }
    invokeModifyScheduledAction(partialParams) {
        return this.client.modifyScheduledAction(this.ops["ModifyScheduledAction"].apply(partialParams));
    }
    invokeModifySnapshotCopyRetentionPeriod(partialParams) {
        return this.client.modifySnapshotCopyRetentionPeriod(this.ops["ModifySnapshotCopyRetentionPeriod"].apply(partialParams));
    }
    invokeModifySnapshotSchedule(partialParams) {
        return this.client.modifySnapshotSchedule(this.ops["ModifySnapshotSchedule"].apply(partialParams));
    }
    invokeModifyUsageLimit(partialParams) {
        return this.client.modifyUsageLimit(this.ops["ModifyUsageLimit"].apply(partialParams));
    }
    invokePauseCluster(partialParams) {
        return this.client.pauseCluster(this.ops["PauseCluster"].apply(partialParams));
    }
    invokePurchaseReservedNodeOffering(partialParams) {
        return this.client.purchaseReservedNodeOffering(this.ops["PurchaseReservedNodeOffering"].apply(partialParams));
    }
    invokeRebootCluster(partialParams) {
        return this.client.rebootCluster(this.ops["RebootCluster"].apply(partialParams));
    }
    invokeRejectDataShare(partialParams) {
        return this.client.rejectDataShare(this.ops["RejectDataShare"].apply(partialParams));
    }
    invokeResetClusterParameterGroup(partialParams) {
        return this.client.resetClusterParameterGroup(this.ops["ResetClusterParameterGroup"].apply(partialParams));
    }
    invokeResizeCluster(partialParams) {
        return this.client.resizeCluster(this.ops["ResizeCluster"].apply(partialParams));
    }
    invokeRestoreFromClusterSnapshot(partialParams) {
        return this.client.restoreFromClusterSnapshot(this.ops["RestoreFromClusterSnapshot"].apply(partialParams));
    }
    invokeRestoreTableFromClusterSnapshot(partialParams) {
        return this.client.restoreTableFromClusterSnapshot(this.ops["RestoreTableFromClusterSnapshot"].apply(partialParams));
    }
    invokeResumeCluster(partialParams) {
        return this.client.resumeCluster(this.ops["ResumeCluster"].apply(partialParams));
    }
    invokeRevokeClusterSecurityGroupIngress(partialParams) {
        return this.client.revokeClusterSecurityGroupIngress(this.ops["RevokeClusterSecurityGroupIngress"].apply(partialParams));
    }
    invokeRevokeSnapshotAccess(partialParams) {
        return this.client.revokeSnapshotAccess(this.ops["RevokeSnapshotAccess"].apply(partialParams));
    }
    invokeRotateEncryptionKey(partialParams) {
        return this.client.rotateEncryptionKey(this.ops["RotateEncryptionKey"].apply(partialParams));
    }
    invokeUpdatePartnerStatus(partialParams) {
        return this.client.updatePartnerStatus(this.ops["UpdatePartnerStatus"].apply(partialParams));
    }
}
exports.default = default_1;
