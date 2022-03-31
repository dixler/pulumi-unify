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
class default_1 extends aws.redshift.ScheduledAction {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Redshift();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
    }
    boot() {
        Object.entries(this.capitalizedParams).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value.value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
        this.ops = (0, parse_1.getResourceOperations)(this.capitalizedParams, schema, this.client);
    }
    invokeAcceptReservedNodeExchange(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.acceptReservedNodeExchange(this.ops["AcceptReservedNodeExchange"].applicator.apply(partialParams));
    }
    invokeAddPartner(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addPartner(this.ops["AddPartner"].applicator.apply(partialParams));
    }
    invokeAssociateDataShareConsumer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateDataShareConsumer(this.ops["AssociateDataShareConsumer"].applicator.apply(partialParams));
    }
    invokeAuthorizeClusterSecurityGroupIngress(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.authorizeClusterSecurityGroupIngress(this.ops["AuthorizeClusterSecurityGroupIngress"].applicator.apply(partialParams));
    }
    invokeAuthorizeDataShare(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.authorizeDataShare(this.ops["AuthorizeDataShare"].applicator.apply(partialParams));
    }
    invokeAuthorizeEndpointAccess(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.authorizeEndpointAccess(this.ops["AuthorizeEndpointAccess"].applicator.apply(partialParams));
    }
    invokeAuthorizeSnapshotAccess(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.authorizeSnapshotAccess(this.ops["AuthorizeSnapshotAccess"].applicator.apply(partialParams));
    }
    invokeBatchDeleteClusterSnapshots(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchDeleteClusterSnapshots(this.ops["BatchDeleteClusterSnapshots"].applicator.apply(partialParams));
    }
    invokeBatchModifyClusterSnapshots(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchModifyClusterSnapshots(this.ops["BatchModifyClusterSnapshots"].applicator.apply(partialParams));
    }
    invokeCancelResize(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelResize(this.ops["CancelResize"].applicator.apply(partialParams));
    }
    invokeCopyClusterSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copyClusterSnapshot(this.ops["CopyClusterSnapshot"].applicator.apply(partialParams));
    }
    invokeCreateAuthenticationProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAuthenticationProfile(this.ops["CreateAuthenticationProfile"].applicator.apply(partialParams));
    }
    invokeCreateCluster(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCluster(this.ops["CreateCluster"].applicator.apply(partialParams));
    }
    invokeCreateClusterParameterGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createClusterParameterGroup(this.ops["CreateClusterParameterGroup"].applicator.apply(partialParams));
    }
    invokeCreateClusterSecurityGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createClusterSecurityGroup(this.ops["CreateClusterSecurityGroup"].applicator.apply(partialParams));
    }
    invokeCreateClusterSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createClusterSnapshot(this.ops["CreateClusterSnapshot"].applicator.apply(partialParams));
    }
    invokeCreateClusterSubnetGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createClusterSubnetGroup(this.ops["CreateClusterSubnetGroup"].applicator.apply(partialParams));
    }
    invokeCreateEndpointAccess(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createEndpointAccess(this.ops["CreateEndpointAccess"].applicator.apply(partialParams));
    }
    invokeCreateEventSubscription(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createEventSubscription(this.ops["CreateEventSubscription"].applicator.apply(partialParams));
    }
    invokeCreateHsmClientCertificate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createHsmClientCertificate(this.ops["CreateHsmClientCertificate"].applicator.apply(partialParams));
    }
    invokeCreateHsmConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createHsmConfiguration(this.ops["CreateHsmConfiguration"].applicator.apply(partialParams));
    }
    invokeCreateScheduledAction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createScheduledAction(this.ops["CreateScheduledAction"].applicator.apply(partialParams));
    }
    invokeCreateSnapshotCopyGrant(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSnapshotCopyGrant(this.ops["CreateSnapshotCopyGrant"].applicator.apply(partialParams));
    }
    invokeCreateTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTags(this.ops["CreateTags"].applicator.apply(partialParams));
    }
    invokeCreateUsageLimit(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUsageLimit(this.ops["CreateUsageLimit"].applicator.apply(partialParams));
    }
    invokeDeauthorizeDataShare(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deauthorizeDataShare(this.ops["DeauthorizeDataShare"].applicator.apply(partialParams));
    }
    invokeDeleteAuthenticationProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAuthenticationProfile(this.ops["DeleteAuthenticationProfile"].applicator.apply(partialParams));
    }
    invokeDeleteCluster(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCluster(this.ops["DeleteCluster"].applicator.apply(partialParams));
    }
    invokeDeleteClusterParameterGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteClusterParameterGroup(this.ops["DeleteClusterParameterGroup"].applicator.apply(partialParams));
    }
    invokeDeleteClusterSecurityGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteClusterSecurityGroup(this.ops["DeleteClusterSecurityGroup"].applicator.apply(partialParams));
    }
    invokeDeleteClusterSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteClusterSnapshot(this.ops["DeleteClusterSnapshot"].applicator.apply(partialParams));
    }
    invokeDeleteClusterSubnetGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteClusterSubnetGroup(this.ops["DeleteClusterSubnetGroup"].applicator.apply(partialParams));
    }
    invokeDeleteEndpointAccess(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEndpointAccess(this.ops["DeleteEndpointAccess"].applicator.apply(partialParams));
    }
    invokeDeleteEventSubscription(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEventSubscription(this.ops["DeleteEventSubscription"].applicator.apply(partialParams));
    }
    invokeDeleteHsmClientCertificate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteHsmClientCertificate(this.ops["DeleteHsmClientCertificate"].applicator.apply(partialParams));
    }
    invokeDeleteHsmConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteHsmConfiguration(this.ops["DeleteHsmConfiguration"].applicator.apply(partialParams));
    }
    invokeDeletePartner(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePartner(this.ops["DeletePartner"].applicator.apply(partialParams));
    }
    invokeDeleteScheduledAction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteScheduledAction(this.ops["DeleteScheduledAction"].applicator.apply(partialParams));
    }
    invokeDeleteSnapshotCopyGrant(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSnapshotCopyGrant(this.ops["DeleteSnapshotCopyGrant"].applicator.apply(partialParams));
    }
    invokeDeleteSnapshotSchedule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSnapshotSchedule(this.ops["DeleteSnapshotSchedule"].applicator.apply(partialParams));
    }
    invokeDeleteTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTags(this.ops["DeleteTags"].applicator.apply(partialParams));
    }
    invokeDeleteUsageLimit(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUsageLimit(this.ops["DeleteUsageLimit"].applicator.apply(partialParams));
    }
    invokeDescribeClusterParameters(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeClusterParameters(this.ops["DescribeClusterParameters"].applicator.apply(partialParams));
    }
    invokeDescribeDefaultClusterParameters(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDefaultClusterParameters(this.ops["DescribeDefaultClusterParameters"].applicator.apply(partialParams));
    }
    invokeDescribeLoggingStatus(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeLoggingStatus(this.ops["DescribeLoggingStatus"].applicator.apply(partialParams));
    }
    invokeDescribeNodeConfigurationOptions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeNodeConfigurationOptions(this.ops["DescribeNodeConfigurationOptions"].applicator.apply(partialParams));
    }
    invokeDescribePartners(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describePartners(this.ops["DescribePartners"].applicator.apply(partialParams));
    }
    invokeDescribeResize(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeResize(this.ops["DescribeResize"].applicator.apply(partialParams));
    }
    invokeDisableLogging(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableLogging(this.ops["DisableLogging"].applicator.apply(partialParams));
    }
    invokeDisableSnapshotCopy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableSnapshotCopy(this.ops["DisableSnapshotCopy"].applicator.apply(partialParams));
    }
    invokeDisassociateDataShareConsumer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateDataShareConsumer(this.ops["DisassociateDataShareConsumer"].applicator.apply(partialParams));
    }
    invokeEnableLogging(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableLogging(this.ops["EnableLogging"].applicator.apply(partialParams));
    }
    invokeEnableSnapshotCopy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableSnapshotCopy(this.ops["EnableSnapshotCopy"].applicator.apply(partialParams));
    }
    invokeGetClusterCredentials(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getClusterCredentials(this.ops["GetClusterCredentials"].applicator.apply(partialParams));
    }
    invokeGetReservedNodeExchangeConfigurationOptions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getReservedNodeExchangeConfigurationOptions(this.ops["GetReservedNodeExchangeConfigurationOptions"].applicator.apply(partialParams));
    }
    invokeGetReservedNodeExchangeOfferings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getReservedNodeExchangeOfferings(this.ops["GetReservedNodeExchangeOfferings"].applicator.apply(partialParams));
    }
    invokeModifyAquaConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyAquaConfiguration(this.ops["ModifyAquaConfiguration"].applicator.apply(partialParams));
    }
    invokeModifyAuthenticationProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyAuthenticationProfile(this.ops["ModifyAuthenticationProfile"].applicator.apply(partialParams));
    }
    invokeModifyCluster(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyCluster(this.ops["ModifyCluster"].applicator.apply(partialParams));
    }
    invokeModifyClusterDbRevision(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyClusterDbRevision(this.ops["ModifyClusterDbRevision"].applicator.apply(partialParams));
    }
    invokeModifyClusterIamRoles(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyClusterIamRoles(this.ops["ModifyClusterIamRoles"].applicator.apply(partialParams));
    }
    invokeModifyClusterMaintenance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyClusterMaintenance(this.ops["ModifyClusterMaintenance"].applicator.apply(partialParams));
    }
    invokeModifyClusterParameterGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyClusterParameterGroup(this.ops["ModifyClusterParameterGroup"].applicator.apply(partialParams));
    }
    invokeModifyClusterSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyClusterSnapshot(this.ops["ModifyClusterSnapshot"].applicator.apply(partialParams));
    }
    invokeModifyClusterSnapshotSchedule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyClusterSnapshotSchedule(this.ops["ModifyClusterSnapshotSchedule"].applicator.apply(partialParams));
    }
    invokeModifyClusterSubnetGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyClusterSubnetGroup(this.ops["ModifyClusterSubnetGroup"].applicator.apply(partialParams));
    }
    invokeModifyEndpointAccess(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyEndpointAccess(this.ops["ModifyEndpointAccess"].applicator.apply(partialParams));
    }
    invokeModifyEventSubscription(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyEventSubscription(this.ops["ModifyEventSubscription"].applicator.apply(partialParams));
    }
    invokeModifyScheduledAction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyScheduledAction(this.ops["ModifyScheduledAction"].applicator.apply(partialParams));
    }
    invokeModifySnapshotCopyRetentionPeriod(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifySnapshotCopyRetentionPeriod(this.ops["ModifySnapshotCopyRetentionPeriod"].applicator.apply(partialParams));
    }
    invokeModifySnapshotSchedule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifySnapshotSchedule(this.ops["ModifySnapshotSchedule"].applicator.apply(partialParams));
    }
    invokeModifyUsageLimit(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyUsageLimit(this.ops["ModifyUsageLimit"].applicator.apply(partialParams));
    }
    invokePauseCluster(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.pauseCluster(this.ops["PauseCluster"].applicator.apply(partialParams));
    }
    invokePurchaseReservedNodeOffering(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.purchaseReservedNodeOffering(this.ops["PurchaseReservedNodeOffering"].applicator.apply(partialParams));
    }
    invokeRebootCluster(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rebootCluster(this.ops["RebootCluster"].applicator.apply(partialParams));
    }
    invokeRejectDataShare(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rejectDataShare(this.ops["RejectDataShare"].applicator.apply(partialParams));
    }
    invokeResetClusterParameterGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetClusterParameterGroup(this.ops["ResetClusterParameterGroup"].applicator.apply(partialParams));
    }
    invokeResizeCluster(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resizeCluster(this.ops["ResizeCluster"].applicator.apply(partialParams));
    }
    invokeRestoreFromClusterSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreFromClusterSnapshot(this.ops["RestoreFromClusterSnapshot"].applicator.apply(partialParams));
    }
    invokeRestoreTableFromClusterSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreTableFromClusterSnapshot(this.ops["RestoreTableFromClusterSnapshot"].applicator.apply(partialParams));
    }
    invokeResumeCluster(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resumeCluster(this.ops["ResumeCluster"].applicator.apply(partialParams));
    }
    invokeRevokeClusterSecurityGroupIngress(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.revokeClusterSecurityGroupIngress(this.ops["RevokeClusterSecurityGroupIngress"].applicator.apply(partialParams));
    }
    invokeRevokeSnapshotAccess(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.revokeSnapshotAccess(this.ops["RevokeSnapshotAccess"].applicator.apply(partialParams));
    }
    invokeRotateEncryptionKey(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rotateEncryptionKey(this.ops["RotateEncryptionKey"].applicator.apply(partialParams));
    }
    invokeUpdatePartnerStatus(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePartnerStatus(this.ops["UpdatePartnerStatus"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
