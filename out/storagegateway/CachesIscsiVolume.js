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
const schema = require("../apis/storagegateway-2013-06-30.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.storagegateway.CachesIscsiVolume {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.StorageGateway();
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
    invokeActivateGateway(partialParams) {
        this.boot();
        return this.client.activateGateway(this.ops["ActivateGateway"].apply(partialParams));
    }
    invokeAddCache(partialParams) {
        this.boot();
        return this.client.addCache(this.ops["AddCache"].apply(partialParams));
    }
    invokeAddTagsToResource(partialParams) {
        this.boot();
        return this.client.addTagsToResource(this.ops["AddTagsToResource"].apply(partialParams));
    }
    invokeAddUploadBuffer(partialParams) {
        this.boot();
        return this.client.addUploadBuffer(this.ops["AddUploadBuffer"].apply(partialParams));
    }
    invokeAddWorkingStorage(partialParams) {
        this.boot();
        return this.client.addWorkingStorage(this.ops["AddWorkingStorage"].apply(partialParams));
    }
    invokeAssignTapePool(partialParams) {
        this.boot();
        return this.client.assignTapePool(this.ops["AssignTapePool"].apply(partialParams));
    }
    invokeAssociateFileSystem(partialParams) {
        this.boot();
        return this.client.associateFileSystem(this.ops["AssociateFileSystem"].apply(partialParams));
    }
    invokeAttachVolume(partialParams) {
        this.boot();
        return this.client.attachVolume(this.ops["AttachVolume"].apply(partialParams));
    }
    invokeCancelArchival(partialParams) {
        this.boot();
        return this.client.cancelArchival(this.ops["CancelArchival"].apply(partialParams));
    }
    invokeCancelRetrieval(partialParams) {
        this.boot();
        return this.client.cancelRetrieval(this.ops["CancelRetrieval"].apply(partialParams));
    }
    invokeCreateCachediSCSIVolume(partialParams) {
        this.boot();
        return this.client.createCachediSCSIVolume(this.ops["CreateCachediSCSIVolume"].apply(partialParams));
    }
    invokeCreateNFSFileShare(partialParams) {
        this.boot();
        return this.client.createNFSFileShare(this.ops["CreateNFSFileShare"].apply(partialParams));
    }
    invokeCreateSMBFileShare(partialParams) {
        this.boot();
        return this.client.createSMBFileShare(this.ops["CreateSMBFileShare"].apply(partialParams));
    }
    invokeCreateSnapshot(partialParams) {
        this.boot();
        return this.client.createSnapshot(this.ops["CreateSnapshot"].apply(partialParams));
    }
    invokeCreateSnapshotFromVolumeRecoveryPoint(partialParams) {
        this.boot();
        return this.client.createSnapshotFromVolumeRecoveryPoint(this.ops["CreateSnapshotFromVolumeRecoveryPoint"].apply(partialParams));
    }
    invokeCreateStorediSCSIVolume(partialParams) {
        this.boot();
        return this.client.createStorediSCSIVolume(this.ops["CreateStorediSCSIVolume"].apply(partialParams));
    }
    invokeCreateTapePool(partialParams) {
        this.boot();
        return this.client.createTapePool(this.ops["CreateTapePool"].apply(partialParams));
    }
    invokeCreateTapeWithBarcode(partialParams) {
        this.boot();
        return this.client.createTapeWithBarcode(this.ops["CreateTapeWithBarcode"].apply(partialParams));
    }
    invokeCreateTapes(partialParams) {
        this.boot();
        return this.client.createTapes(this.ops["CreateTapes"].apply(partialParams));
    }
    invokeDeleteAutomaticTapeCreationPolicy(partialParams) {
        this.boot();
        return this.client.deleteAutomaticTapeCreationPolicy(this.ops["DeleteAutomaticTapeCreationPolicy"].apply(partialParams));
    }
    invokeDeleteBandwidthRateLimit(partialParams) {
        this.boot();
        return this.client.deleteBandwidthRateLimit(this.ops["DeleteBandwidthRateLimit"].apply(partialParams));
    }
    invokeDeleteChapCredentials(partialParams) {
        this.boot();
        return this.client.deleteChapCredentials(this.ops["DeleteChapCredentials"].apply(partialParams));
    }
    invokeDeleteFileShare(partialParams) {
        this.boot();
        return this.client.deleteFileShare(this.ops["DeleteFileShare"].apply(partialParams));
    }
    invokeDeleteGateway(partialParams) {
        this.boot();
        return this.client.deleteGateway(this.ops["DeleteGateway"].apply(partialParams));
    }
    invokeDeleteSnapshotSchedule(partialParams) {
        this.boot();
        return this.client.deleteSnapshotSchedule(this.ops["DeleteSnapshotSchedule"].apply(partialParams));
    }
    invokeDeleteTape(partialParams) {
        this.boot();
        return this.client.deleteTape(this.ops["DeleteTape"].apply(partialParams));
    }
    invokeDeleteTapeArchive(partialParams) {
        this.boot();
        return this.client.deleteTapeArchive(this.ops["DeleteTapeArchive"].apply(partialParams));
    }
    invokeDeleteTapePool(partialParams) {
        this.boot();
        return this.client.deleteTapePool(this.ops["DeleteTapePool"].apply(partialParams));
    }
    invokeDeleteVolume(partialParams) {
        this.boot();
        return this.client.deleteVolume(this.ops["DeleteVolume"].apply(partialParams));
    }
    invokeDescribeAvailabilityMonitorTest(partialParams) {
        this.boot();
        return this.client.describeAvailabilityMonitorTest(this.ops["DescribeAvailabilityMonitorTest"].apply(partialParams));
    }
    invokeDescribeBandwidthRateLimit(partialParams) {
        this.boot();
        return this.client.describeBandwidthRateLimit(this.ops["DescribeBandwidthRateLimit"].apply(partialParams));
    }
    invokeDescribeBandwidthRateLimitSchedule(partialParams) {
        this.boot();
        return this.client.describeBandwidthRateLimitSchedule(this.ops["DescribeBandwidthRateLimitSchedule"].apply(partialParams));
    }
    invokeDescribeCache(partialParams) {
        this.boot();
        return this.client.describeCache(this.ops["DescribeCache"].apply(partialParams));
    }
    invokeDescribeCachediSCSIVolumes(partialParams) {
        this.boot();
        return this.client.describeCachediSCSIVolumes(this.ops["DescribeCachediSCSIVolumes"].apply(partialParams));
    }
    invokeDescribeChapCredentials(partialParams) {
        this.boot();
        return this.client.describeChapCredentials(this.ops["DescribeChapCredentials"].apply(partialParams));
    }
    invokeDescribeFileSystemAssociations(partialParams) {
        this.boot();
        return this.client.describeFileSystemAssociations(this.ops["DescribeFileSystemAssociations"].apply(partialParams));
    }
    invokeDescribeGatewayInformation(partialParams) {
        this.boot();
        return this.client.describeGatewayInformation(this.ops["DescribeGatewayInformation"].apply(partialParams));
    }
    invokeDescribeMaintenanceStartTime(partialParams) {
        this.boot();
        return this.client.describeMaintenanceStartTime(this.ops["DescribeMaintenanceStartTime"].apply(partialParams));
    }
    invokeDescribeNFSFileShares(partialParams) {
        this.boot();
        return this.client.describeNFSFileShares(this.ops["DescribeNFSFileShares"].apply(partialParams));
    }
    invokeDescribeSMBFileShares(partialParams) {
        this.boot();
        return this.client.describeSMBFileShares(this.ops["DescribeSMBFileShares"].apply(partialParams));
    }
    invokeDescribeSMBSettings(partialParams) {
        this.boot();
        return this.client.describeSMBSettings(this.ops["DescribeSMBSettings"].apply(partialParams));
    }
    invokeDescribeSnapshotSchedule(partialParams) {
        this.boot();
        return this.client.describeSnapshotSchedule(this.ops["DescribeSnapshotSchedule"].apply(partialParams));
    }
    invokeDescribeStorediSCSIVolumes(partialParams) {
        this.boot();
        return this.client.describeStorediSCSIVolumes(this.ops["DescribeStorediSCSIVolumes"].apply(partialParams));
    }
    invokeDescribeTapeArchives(partialParams) {
        this.boot();
        return this.client.describeTapeArchives(this.ops["DescribeTapeArchives"].apply(partialParams));
    }
    invokeDescribeTapeRecoveryPoints(partialParams) {
        this.boot();
        return this.client.describeTapeRecoveryPoints(this.ops["DescribeTapeRecoveryPoints"].apply(partialParams));
    }
    invokeDescribeTapes(partialParams) {
        this.boot();
        return this.client.describeTapes(this.ops["DescribeTapes"].apply(partialParams));
    }
    invokeDescribeUploadBuffer(partialParams) {
        this.boot();
        return this.client.describeUploadBuffer(this.ops["DescribeUploadBuffer"].apply(partialParams));
    }
    invokeDescribeVTLDevices(partialParams) {
        this.boot();
        return this.client.describeVTLDevices(this.ops["DescribeVTLDevices"].apply(partialParams));
    }
    invokeDescribeWorkingStorage(partialParams) {
        this.boot();
        return this.client.describeWorkingStorage(this.ops["DescribeWorkingStorage"].apply(partialParams));
    }
    invokeDetachVolume(partialParams) {
        this.boot();
        return this.client.detachVolume(this.ops["DetachVolume"].apply(partialParams));
    }
    invokeDisableGateway(partialParams) {
        this.boot();
        return this.client.disableGateway(this.ops["DisableGateway"].apply(partialParams));
    }
    invokeDisassociateFileSystem(partialParams) {
        this.boot();
        return this.client.disassociateFileSystem(this.ops["DisassociateFileSystem"].apply(partialParams));
    }
    invokeJoinDomain(partialParams) {
        this.boot();
        return this.client.joinDomain(this.ops["JoinDomain"].apply(partialParams));
    }
    invokeListAutomaticTapeCreationPolicies(partialParams) {
        this.boot();
        return this.client.listAutomaticTapeCreationPolicies(this.ops["ListAutomaticTapeCreationPolicies"].apply(partialParams));
    }
    invokeListFileShares(partialParams) {
        this.boot();
        return this.client.listFileShares(this.ops["ListFileShares"].apply(partialParams));
    }
    invokeListFileSystemAssociations(partialParams) {
        this.boot();
        return this.client.listFileSystemAssociations(this.ops["ListFileSystemAssociations"].apply(partialParams));
    }
    invokeListGateways(partialParams) {
        this.boot();
        return this.client.listGateways(this.ops["ListGateways"].apply(partialParams));
    }
    invokeListLocalDisks(partialParams) {
        this.boot();
        return this.client.listLocalDisks(this.ops["ListLocalDisks"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListTapePools(partialParams) {
        this.boot();
        return this.client.listTapePools(this.ops["ListTapePools"].apply(partialParams));
    }
    invokeListTapes(partialParams) {
        this.boot();
        return this.client.listTapes(this.ops["ListTapes"].apply(partialParams));
    }
    invokeListVolumeInitiators(partialParams) {
        this.boot();
        return this.client.listVolumeInitiators(this.ops["ListVolumeInitiators"].apply(partialParams));
    }
    invokeListVolumeRecoveryPoints(partialParams) {
        this.boot();
        return this.client.listVolumeRecoveryPoints(this.ops["ListVolumeRecoveryPoints"].apply(partialParams));
    }
    invokeListVolumes(partialParams) {
        this.boot();
        return this.client.listVolumes(this.ops["ListVolumes"].apply(partialParams));
    }
    invokeNotifyWhenUploaded(partialParams) {
        this.boot();
        return this.client.notifyWhenUploaded(this.ops["NotifyWhenUploaded"].apply(partialParams));
    }
    invokeRefreshCache(partialParams) {
        this.boot();
        return this.client.refreshCache(this.ops["RefreshCache"].apply(partialParams));
    }
    invokeRemoveTagsFromResource(partialParams) {
        this.boot();
        return this.client.removeTagsFromResource(this.ops["RemoveTagsFromResource"].apply(partialParams));
    }
    invokeResetCache(partialParams) {
        this.boot();
        return this.client.resetCache(this.ops["ResetCache"].apply(partialParams));
    }
    invokeRetrieveTapeArchive(partialParams) {
        this.boot();
        return this.client.retrieveTapeArchive(this.ops["RetrieveTapeArchive"].apply(partialParams));
    }
    invokeRetrieveTapeRecoveryPoint(partialParams) {
        this.boot();
        return this.client.retrieveTapeRecoveryPoint(this.ops["RetrieveTapeRecoveryPoint"].apply(partialParams));
    }
    invokeSetLocalConsolePassword(partialParams) {
        this.boot();
        return this.client.setLocalConsolePassword(this.ops["SetLocalConsolePassword"].apply(partialParams));
    }
    invokeSetSMBGuestPassword(partialParams) {
        this.boot();
        return this.client.setSMBGuestPassword(this.ops["SetSMBGuestPassword"].apply(partialParams));
    }
    invokeShutdownGateway(partialParams) {
        this.boot();
        return this.client.shutdownGateway(this.ops["ShutdownGateway"].apply(partialParams));
    }
    invokeStartAvailabilityMonitorTest(partialParams) {
        this.boot();
        return this.client.startAvailabilityMonitorTest(this.ops["StartAvailabilityMonitorTest"].apply(partialParams));
    }
    invokeStartGateway(partialParams) {
        this.boot();
        return this.client.startGateway(this.ops["StartGateway"].apply(partialParams));
    }
    invokeUpdateAutomaticTapeCreationPolicy(partialParams) {
        this.boot();
        return this.client.updateAutomaticTapeCreationPolicy(this.ops["UpdateAutomaticTapeCreationPolicy"].apply(partialParams));
    }
    invokeUpdateBandwidthRateLimit(partialParams) {
        this.boot();
        return this.client.updateBandwidthRateLimit(this.ops["UpdateBandwidthRateLimit"].apply(partialParams));
    }
    invokeUpdateBandwidthRateLimitSchedule(partialParams) {
        this.boot();
        return this.client.updateBandwidthRateLimitSchedule(this.ops["UpdateBandwidthRateLimitSchedule"].apply(partialParams));
    }
    invokeUpdateChapCredentials(partialParams) {
        this.boot();
        return this.client.updateChapCredentials(this.ops["UpdateChapCredentials"].apply(partialParams));
    }
    invokeUpdateFileSystemAssociation(partialParams) {
        this.boot();
        return this.client.updateFileSystemAssociation(this.ops["UpdateFileSystemAssociation"].apply(partialParams));
    }
    invokeUpdateGatewayInformation(partialParams) {
        this.boot();
        return this.client.updateGatewayInformation(this.ops["UpdateGatewayInformation"].apply(partialParams));
    }
    invokeUpdateGatewaySoftwareNow(partialParams) {
        this.boot();
        return this.client.updateGatewaySoftwareNow(this.ops["UpdateGatewaySoftwareNow"].apply(partialParams));
    }
    invokeUpdateMaintenanceStartTime(partialParams) {
        this.boot();
        return this.client.updateMaintenanceStartTime(this.ops["UpdateMaintenanceStartTime"].apply(partialParams));
    }
    invokeUpdateNFSFileShare(partialParams) {
        this.boot();
        return this.client.updateNFSFileShare(this.ops["UpdateNFSFileShare"].apply(partialParams));
    }
    invokeUpdateSMBFileShare(partialParams) {
        this.boot();
        return this.client.updateSMBFileShare(this.ops["UpdateSMBFileShare"].apply(partialParams));
    }
    invokeUpdateSMBFileShareVisibility(partialParams) {
        this.boot();
        return this.client.updateSMBFileShareVisibility(this.ops["UpdateSMBFileShareVisibility"].apply(partialParams));
    }
    invokeUpdateSMBLocalGroups(partialParams) {
        this.boot();
        return this.client.updateSMBLocalGroups(this.ops["UpdateSMBLocalGroups"].apply(partialParams));
    }
    invokeUpdateSMBSecurityStrategy(partialParams) {
        this.boot();
        return this.client.updateSMBSecurityStrategy(this.ops["UpdateSMBSecurityStrategy"].apply(partialParams));
    }
    invokeUpdateSnapshotSchedule(partialParams) {
        this.boot();
        return this.client.updateSnapshotSchedule(this.ops["UpdateSnapshotSchedule"].apply(partialParams));
    }
    invokeUpdateVTLDeviceType(partialParams) {
        this.boot();
        return this.client.updateVTLDeviceType(this.ops["UpdateVTLDeviceType"].apply(partialParams));
    }
}
exports.default = default_1;
