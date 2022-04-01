"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
const schema = require("../apis/redshift-2012-12-01.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.redshift.SubnetGroup {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.Redshift();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
            if (this[(0, parse_1.upperCamelCase)(this.constructor.name) + (0, parse_1.upperCamelCase)(key)] === undefined) {
                this.capitalizedParams[this.constructor.name + (0, parse_1.upperCamelCase)(key)] = value;
            }
            console.log(this.capitalizedParams);
        });
    }
    boot() {
        if (this.booted) {
            return;
        }
        Object.entries(this.capitalizedParams).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value.value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
        this.ops = (0, parse_1.getResourceOperations)(this.capitalizedParams, schema);
        this.booted = true;
    }
    invokeAcceptReservedNodeExchange(partialParams) {
        this.boot();
        return this.client.acceptReservedNodeExchange(this.ops["AcceptReservedNodeExchange"].apply(partialParams));
    }
    invokeAddPartner(partialParams) {
        this.boot();
        return this.client.addPartner(this.ops["AddPartner"].apply(partialParams));
    }
    invokeAssociateDataShareConsumer(partialParams) {
        this.boot();
        return this.client.associateDataShareConsumer(this.ops["AssociateDataShareConsumer"].apply(partialParams));
    }
    invokeAuthorizeClusterSecurityGroupIngress(partialParams) {
        this.boot();
        return this.client.authorizeClusterSecurityGroupIngress(this.ops["AuthorizeClusterSecurityGroupIngress"].apply(partialParams));
    }
    invokeAuthorizeDataShare(partialParams) {
        this.boot();
        return this.client.authorizeDataShare(this.ops["AuthorizeDataShare"].apply(partialParams));
    }
    invokeAuthorizeEndpointAccess(partialParams) {
        this.boot();
        return this.client.authorizeEndpointAccess(this.ops["AuthorizeEndpointAccess"].apply(partialParams));
    }
    invokeAuthorizeSnapshotAccess(partialParams) {
        this.boot();
        return this.client.authorizeSnapshotAccess(this.ops["AuthorizeSnapshotAccess"].apply(partialParams));
    }
    invokeBatchDeleteClusterSnapshots(partialParams) {
        this.boot();
        return this.client.batchDeleteClusterSnapshots(this.ops["BatchDeleteClusterSnapshots"].apply(partialParams));
    }
    invokeBatchModifyClusterSnapshots(partialParams) {
        this.boot();
        return this.client.batchModifyClusterSnapshots(this.ops["BatchModifyClusterSnapshots"].apply(partialParams));
    }
    invokeCancelResize(partialParams) {
        this.boot();
        return this.client.cancelResize(this.ops["CancelResize"].apply(partialParams));
    }
    invokeCopyClusterSnapshot(partialParams) {
        this.boot();
        return this.client.copyClusterSnapshot(this.ops["CopyClusterSnapshot"].apply(partialParams));
    }
    invokeCreateAuthenticationProfile(partialParams) {
        this.boot();
        return this.client.createAuthenticationProfile(this.ops["CreateAuthenticationProfile"].apply(partialParams));
    }
    invokeCreateCluster(partialParams) {
        this.boot();
        return this.client.createCluster(this.ops["CreateCluster"].apply(partialParams));
    }
    invokeCreateClusterParameterGroup(partialParams) {
        this.boot();
        return this.client.createClusterParameterGroup(this.ops["CreateClusterParameterGroup"].apply(partialParams));
    }
    invokeCreateClusterSecurityGroup(partialParams) {
        this.boot();
        return this.client.createClusterSecurityGroup(this.ops["CreateClusterSecurityGroup"].apply(partialParams));
    }
    invokeCreateClusterSnapshot(partialParams) {
        this.boot();
        return this.client.createClusterSnapshot(this.ops["CreateClusterSnapshot"].apply(partialParams));
    }
    invokeCreateClusterSubnetGroup(partialParams) {
        this.boot();
        return this.client.createClusterSubnetGroup(this.ops["CreateClusterSubnetGroup"].apply(partialParams));
    }
    invokeCreateEndpointAccess(partialParams) {
        this.boot();
        return this.client.createEndpointAccess(this.ops["CreateEndpointAccess"].apply(partialParams));
    }
    invokeCreateEventSubscription(partialParams) {
        this.boot();
        return this.client.createEventSubscription(this.ops["CreateEventSubscription"].apply(partialParams));
    }
    invokeCreateHsmClientCertificate(partialParams) {
        this.boot();
        return this.client.createHsmClientCertificate(this.ops["CreateHsmClientCertificate"].apply(partialParams));
    }
    invokeCreateHsmConfiguration(partialParams) {
        this.boot();
        return this.client.createHsmConfiguration(this.ops["CreateHsmConfiguration"].apply(partialParams));
    }
    invokeCreateScheduledAction(partialParams) {
        this.boot();
        return this.client.createScheduledAction(this.ops["CreateScheduledAction"].apply(partialParams));
    }
    invokeCreateSnapshotCopyGrant(partialParams) {
        this.boot();
        return this.client.createSnapshotCopyGrant(this.ops["CreateSnapshotCopyGrant"].apply(partialParams));
    }
    invokeCreateSnapshotSchedule(partialParams) {
        this.boot();
        return this.client.createSnapshotSchedule(this.ops["CreateSnapshotSchedule"].apply(partialParams));
    }
    invokeCreateUsageLimit(partialParams) {
        this.boot();
        return this.client.createUsageLimit(this.ops["CreateUsageLimit"].apply(partialParams));
    }
    invokeDeauthorizeDataShare(partialParams) {
        this.boot();
        return this.client.deauthorizeDataShare(this.ops["DeauthorizeDataShare"].apply(partialParams));
    }
    invokeDeleteAuthenticationProfile(partialParams) {
        this.boot();
        return this.client.deleteAuthenticationProfile(this.ops["DeleteAuthenticationProfile"].apply(partialParams));
    }
    invokeDeleteCluster(partialParams) {
        this.boot();
        return this.client.deleteCluster(this.ops["DeleteCluster"].apply(partialParams));
    }
    invokeDeleteClusterSnapshot(partialParams) {
        this.boot();
        return this.client.deleteClusterSnapshot(this.ops["DeleteClusterSnapshot"].apply(partialParams));
    }
    invokeDeleteEndpointAccess(partialParams) {
        this.boot();
        return this.client.deleteEndpointAccess(this.ops["DeleteEndpointAccess"].apply(partialParams));
    }
    invokeDeletePartner(partialParams) {
        this.boot();
        return this.client.deletePartner(this.ops["DeletePartner"].apply(partialParams));
    }
    invokeDescribeAccountAttributes(partialParams) {
        this.boot();
        return this.client.describeAccountAttributes(this.ops["DescribeAccountAttributes"].apply(partialParams));
    }
    invokeDescribeAuthenticationProfiles(partialParams) {
        this.boot();
        return this.client.describeAuthenticationProfiles(this.ops["DescribeAuthenticationProfiles"].apply(partialParams));
    }
    invokeDescribeClusterDbRevisions(partialParams) {
        this.boot();
        return this.client.describeClusterDbRevisions(this.ops["DescribeClusterDbRevisions"].apply(partialParams));
    }
    invokeDescribeClusterParameterGroups(partialParams) {
        this.boot();
        return this.client.describeClusterParameterGroups(this.ops["DescribeClusterParameterGroups"].apply(partialParams));
    }
    invokeDescribeClusterParameters(partialParams) {
        this.boot();
        return this.client.describeClusterParameters(this.ops["DescribeClusterParameters"].apply(partialParams));
    }
    invokeDescribeClusterSecurityGroups(partialParams) {
        this.boot();
        return this.client.describeClusterSecurityGroups(this.ops["DescribeClusterSecurityGroups"].apply(partialParams));
    }
    invokeDescribeClusterSnapshots(partialParams) {
        this.boot();
        return this.client.describeClusterSnapshots(this.ops["DescribeClusterSnapshots"].apply(partialParams));
    }
    invokeDescribeClusterSubnetGroups(partialParams) {
        this.boot();
        return this.client.describeClusterSubnetGroups(this.ops["DescribeClusterSubnetGroups"].apply(partialParams));
    }
    invokeDescribeClusterTracks(partialParams) {
        this.boot();
        return this.client.describeClusterTracks(this.ops["DescribeClusterTracks"].apply(partialParams));
    }
    invokeDescribeClusterVersions(partialParams) {
        this.boot();
        return this.client.describeClusterVersions(this.ops["DescribeClusterVersions"].apply(partialParams));
    }
    invokeDescribeClusters(partialParams) {
        this.boot();
        return this.client.describeClusters(this.ops["DescribeClusters"].apply(partialParams));
    }
    invokeDescribeDataShares(partialParams) {
        this.boot();
        return this.client.describeDataShares(this.ops["DescribeDataShares"].apply(partialParams));
    }
    invokeDescribeDataSharesForConsumer(partialParams) {
        this.boot();
        return this.client.describeDataSharesForConsumer(this.ops["DescribeDataSharesForConsumer"].apply(partialParams));
    }
    invokeDescribeDataSharesForProducer(partialParams) {
        this.boot();
        return this.client.describeDataSharesForProducer(this.ops["DescribeDataSharesForProducer"].apply(partialParams));
    }
    invokeDescribeDefaultClusterParameters(partialParams) {
        this.boot();
        return this.client.describeDefaultClusterParameters(this.ops["DescribeDefaultClusterParameters"].apply(partialParams));
    }
    invokeDescribeEndpointAccess(partialParams) {
        this.boot();
        return this.client.describeEndpointAccess(this.ops["DescribeEndpointAccess"].apply(partialParams));
    }
    invokeDescribeEndpointAuthorization(partialParams) {
        this.boot();
        return this.client.describeEndpointAuthorization(this.ops["DescribeEndpointAuthorization"].apply(partialParams));
    }
    invokeDescribeEventCategories(partialParams) {
        this.boot();
        return this.client.describeEventCategories(this.ops["DescribeEventCategories"].apply(partialParams));
    }
    invokeDescribeEventSubscriptions(partialParams) {
        this.boot();
        return this.client.describeEventSubscriptions(this.ops["DescribeEventSubscriptions"].apply(partialParams));
    }
    invokeDescribeEvents(partialParams) {
        this.boot();
        return this.client.describeEvents(this.ops["DescribeEvents"].apply(partialParams));
    }
    invokeDescribeHsmClientCertificates(partialParams) {
        this.boot();
        return this.client.describeHsmClientCertificates(this.ops["DescribeHsmClientCertificates"].apply(partialParams));
    }
    invokeDescribeHsmConfigurations(partialParams) {
        this.boot();
        return this.client.describeHsmConfigurations(this.ops["DescribeHsmConfigurations"].apply(partialParams));
    }
    invokeDescribeLoggingStatus(partialParams) {
        this.boot();
        return this.client.describeLoggingStatus(this.ops["DescribeLoggingStatus"].apply(partialParams));
    }
    invokeDescribeNodeConfigurationOptions(partialParams) {
        this.boot();
        return this.client.describeNodeConfigurationOptions(this.ops["DescribeNodeConfigurationOptions"].apply(partialParams));
    }
    invokeDescribeOrderableClusterOptions(partialParams) {
        this.boot();
        return this.client.describeOrderableClusterOptions(this.ops["DescribeOrderableClusterOptions"].apply(partialParams));
    }
    invokeDescribePartners(partialParams) {
        this.boot();
        return this.client.describePartners(this.ops["DescribePartners"].apply(partialParams));
    }
    invokeDescribeReservedNodeExchangeStatus(partialParams) {
        this.boot();
        return this.client.describeReservedNodeExchangeStatus(this.ops["DescribeReservedNodeExchangeStatus"].apply(partialParams));
    }
    invokeDescribeReservedNodeOfferings(partialParams) {
        this.boot();
        return this.client.describeReservedNodeOfferings(this.ops["DescribeReservedNodeOfferings"].apply(partialParams));
    }
    invokeDescribeReservedNodes(partialParams) {
        this.boot();
        return this.client.describeReservedNodes(this.ops["DescribeReservedNodes"].apply(partialParams));
    }
    invokeDescribeResize(partialParams) {
        this.boot();
        return this.client.describeResize(this.ops["DescribeResize"].apply(partialParams));
    }
    invokeDescribeScheduledActions(partialParams) {
        this.boot();
        return this.client.describeScheduledActions(this.ops["DescribeScheduledActions"].apply(partialParams));
    }
    invokeDescribeSnapshotCopyGrants(partialParams) {
        this.boot();
        return this.client.describeSnapshotCopyGrants(this.ops["DescribeSnapshotCopyGrants"].apply(partialParams));
    }
    invokeDescribeSnapshotSchedules(partialParams) {
        this.boot();
        return this.client.describeSnapshotSchedules(this.ops["DescribeSnapshotSchedules"].apply(partialParams));
    }
    invokeDescribeTableRestoreStatus(partialParams) {
        this.boot();
        return this.client.describeTableRestoreStatus(this.ops["DescribeTableRestoreStatus"].apply(partialParams));
    }
    invokeDescribeTags(partialParams) {
        this.boot();
        return this.client.describeTags(this.ops["DescribeTags"].apply(partialParams));
    }
    invokeDescribeUsageLimits(partialParams) {
        this.boot();
        return this.client.describeUsageLimits(this.ops["DescribeUsageLimits"].apply(partialParams));
    }
    invokeDisableLogging(partialParams) {
        this.boot();
        return this.client.disableLogging(this.ops["DisableLogging"].apply(partialParams));
    }
    invokeDisableSnapshotCopy(partialParams) {
        this.boot();
        return this.client.disableSnapshotCopy(this.ops["DisableSnapshotCopy"].apply(partialParams));
    }
    invokeDisassociateDataShareConsumer(partialParams) {
        this.boot();
        return this.client.disassociateDataShareConsumer(this.ops["DisassociateDataShareConsumer"].apply(partialParams));
    }
    invokeEnableLogging(partialParams) {
        this.boot();
        return this.client.enableLogging(this.ops["EnableLogging"].apply(partialParams));
    }
    invokeEnableSnapshotCopy(partialParams) {
        this.boot();
        return this.client.enableSnapshotCopy(this.ops["EnableSnapshotCopy"].apply(partialParams));
    }
    invokeGetClusterCredentials(partialParams) {
        this.boot();
        return this.client.getClusterCredentials(this.ops["GetClusterCredentials"].apply(partialParams));
    }
    invokeGetReservedNodeExchangeConfigurationOptions(partialParams) {
        this.boot();
        return this.client.getReservedNodeExchangeConfigurationOptions(this.ops["GetReservedNodeExchangeConfigurationOptions"].apply(partialParams));
    }
    invokeGetReservedNodeExchangeOfferings(partialParams) {
        this.boot();
        return this.client.getReservedNodeExchangeOfferings(this.ops["GetReservedNodeExchangeOfferings"].apply(partialParams));
    }
    invokeModifyAquaConfiguration(partialParams) {
        this.boot();
        return this.client.modifyAquaConfiguration(this.ops["ModifyAquaConfiguration"].apply(partialParams));
    }
    invokeModifyAuthenticationProfile(partialParams) {
        this.boot();
        return this.client.modifyAuthenticationProfile(this.ops["ModifyAuthenticationProfile"].apply(partialParams));
    }
    invokeModifyCluster(partialParams) {
        this.boot();
        return this.client.modifyCluster(this.ops["ModifyCluster"].apply(partialParams));
    }
    invokeModifyClusterDbRevision(partialParams) {
        this.boot();
        return this.client.modifyClusterDbRevision(this.ops["ModifyClusterDbRevision"].apply(partialParams));
    }
    invokeModifyClusterIamRoles(partialParams) {
        this.boot();
        return this.client.modifyClusterIamRoles(this.ops["ModifyClusterIamRoles"].apply(partialParams));
    }
    invokeModifyClusterMaintenance(partialParams) {
        this.boot();
        return this.client.modifyClusterMaintenance(this.ops["ModifyClusterMaintenance"].apply(partialParams));
    }
    invokeModifyClusterParameterGroup(partialParams) {
        this.boot();
        return this.client.modifyClusterParameterGroup(this.ops["ModifyClusterParameterGroup"].apply(partialParams));
    }
    invokeModifyClusterSnapshot(partialParams) {
        this.boot();
        return this.client.modifyClusterSnapshot(this.ops["ModifyClusterSnapshot"].apply(partialParams));
    }
    invokeModifyClusterSubnetGroup(partialParams) {
        this.boot();
        return this.client.modifyClusterSubnetGroup(this.ops["ModifyClusterSubnetGroup"].apply(partialParams));
    }
    invokeModifyEndpointAccess(partialParams) {
        this.boot();
        return this.client.modifyEndpointAccess(this.ops["ModifyEndpointAccess"].apply(partialParams));
    }
    invokeModifyEventSubscription(partialParams) {
        this.boot();
        return this.client.modifyEventSubscription(this.ops["ModifyEventSubscription"].apply(partialParams));
    }
    invokeModifyScheduledAction(partialParams) {
        this.boot();
        return this.client.modifyScheduledAction(this.ops["ModifyScheduledAction"].apply(partialParams));
    }
    invokeModifySnapshotCopyRetentionPeriod(partialParams) {
        this.boot();
        return this.client.modifySnapshotCopyRetentionPeriod(this.ops["ModifySnapshotCopyRetentionPeriod"].apply(partialParams));
    }
    invokeModifySnapshotSchedule(partialParams) {
        this.boot();
        return this.client.modifySnapshotSchedule(this.ops["ModifySnapshotSchedule"].apply(partialParams));
    }
    invokeModifyUsageLimit(partialParams) {
        this.boot();
        return this.client.modifyUsageLimit(this.ops["ModifyUsageLimit"].apply(partialParams));
    }
    invokePauseCluster(partialParams) {
        this.boot();
        return this.client.pauseCluster(this.ops["PauseCluster"].apply(partialParams));
    }
    invokePurchaseReservedNodeOffering(partialParams) {
        this.boot();
        return this.client.purchaseReservedNodeOffering(this.ops["PurchaseReservedNodeOffering"].apply(partialParams));
    }
    invokeRebootCluster(partialParams) {
        this.boot();
        return this.client.rebootCluster(this.ops["RebootCluster"].apply(partialParams));
    }
    invokeRejectDataShare(partialParams) {
        this.boot();
        return this.client.rejectDataShare(this.ops["RejectDataShare"].apply(partialParams));
    }
    invokeResetClusterParameterGroup(partialParams) {
        this.boot();
        return this.client.resetClusterParameterGroup(this.ops["ResetClusterParameterGroup"].apply(partialParams));
    }
    invokeResizeCluster(partialParams) {
        this.boot();
        return this.client.resizeCluster(this.ops["ResizeCluster"].apply(partialParams));
    }
    invokeRestoreFromClusterSnapshot(partialParams) {
        this.boot();
        return this.client.restoreFromClusterSnapshot(this.ops["RestoreFromClusterSnapshot"].apply(partialParams));
    }
    invokeRestoreTableFromClusterSnapshot(partialParams) {
        this.boot();
        return this.client.restoreTableFromClusterSnapshot(this.ops["RestoreTableFromClusterSnapshot"].apply(partialParams));
    }
    invokeResumeCluster(partialParams) {
        this.boot();
        return this.client.resumeCluster(this.ops["ResumeCluster"].apply(partialParams));
    }
    invokeRevokeClusterSecurityGroupIngress(partialParams) {
        this.boot();
        return this.client.revokeClusterSecurityGroupIngress(this.ops["RevokeClusterSecurityGroupIngress"].apply(partialParams));
    }
    invokeRevokeEndpointAccess(partialParams) {
        this.boot();
        return this.client.revokeEndpointAccess(this.ops["RevokeEndpointAccess"].apply(partialParams));
    }
    invokeRevokeSnapshotAccess(partialParams) {
        this.boot();
        return this.client.revokeSnapshotAccess(this.ops["RevokeSnapshotAccess"].apply(partialParams));
    }
    invokeRotateEncryptionKey(partialParams) {
        this.boot();
        return this.client.rotateEncryptionKey(this.ops["RotateEncryptionKey"].apply(partialParams));
    }
    invokeUpdatePartnerStatus(partialParams) {
        this.boot();
        return this.client.updatePartnerStatus(this.ops["UpdatePartnerStatus"].apply(partialParams));
    }
}
exports.default = default_1;
