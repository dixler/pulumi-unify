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
class default_1 extends aws.storagegateway.UploadBuffer {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.StorageGateway();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/storagegateway-2013-06-30.normal.json"), this.client);
    }
    invokeActivateGateway(partialParams) {
        return this.client.activateGateway(this.ops["ActivateGateway"].apply(partialParams));
    }
    invokeAddCache(partialParams) {
        return this.client.addCache(this.ops["AddCache"].apply(partialParams));
    }
    invokeAddTagsToResource(partialParams) {
        return this.client.addTagsToResource(this.ops["AddTagsToResource"].apply(partialParams));
    }
    invokeAddUploadBuffer(partialParams) {
        return this.client.addUploadBuffer(this.ops["AddUploadBuffer"].apply(partialParams));
    }
    invokeAddWorkingStorage(partialParams) {
        return this.client.addWorkingStorage(this.ops["AddWorkingStorage"].apply(partialParams));
    }
    invokeAssignTapePool(partialParams) {
        return this.client.assignTapePool(this.ops["AssignTapePool"].apply(partialParams));
    }
    invokeAssociateFileSystem(partialParams) {
        return this.client.associateFileSystem(this.ops["AssociateFileSystem"].apply(partialParams));
    }
    invokeAttachVolume(partialParams) {
        return this.client.attachVolume(this.ops["AttachVolume"].apply(partialParams));
    }
    invokeCancelArchival(partialParams) {
        return this.client.cancelArchival(this.ops["CancelArchival"].apply(partialParams));
    }
    invokeCancelRetrieval(partialParams) {
        return this.client.cancelRetrieval(this.ops["CancelRetrieval"].apply(partialParams));
    }
    invokeCreateCachediSCSIVolume(partialParams) {
        return this.client.createCachediSCSIVolume(this.ops["CreateCachediSCSIVolume"].apply(partialParams));
    }
    invokeCreateNFSFileShare(partialParams) {
        return this.client.createNFSFileShare(this.ops["CreateNFSFileShare"].apply(partialParams));
    }
    invokeCreateSMBFileShare(partialParams) {
        return this.client.createSMBFileShare(this.ops["CreateSMBFileShare"].apply(partialParams));
    }
    invokeCreateSnapshot(partialParams) {
        return this.client.createSnapshot(this.ops["CreateSnapshot"].apply(partialParams));
    }
    invokeCreateSnapshotFromVolumeRecoveryPoint(partialParams) {
        return this.client.createSnapshotFromVolumeRecoveryPoint(this.ops["CreateSnapshotFromVolumeRecoveryPoint"].apply(partialParams));
    }
    invokeCreateStorediSCSIVolume(partialParams) {
        return this.client.createStorediSCSIVolume(this.ops["CreateStorediSCSIVolume"].apply(partialParams));
    }
    invokeCreateTapePool(partialParams) {
        return this.client.createTapePool(this.ops["CreateTapePool"].apply(partialParams));
    }
    invokeCreateTapeWithBarcode(partialParams) {
        return this.client.createTapeWithBarcode(this.ops["CreateTapeWithBarcode"].apply(partialParams));
    }
    invokeCreateTapes(partialParams) {
        return this.client.createTapes(this.ops["CreateTapes"].apply(partialParams));
    }
    invokeDeleteAutomaticTapeCreationPolicy(partialParams) {
        return this.client.deleteAutomaticTapeCreationPolicy(this.ops["DeleteAutomaticTapeCreationPolicy"].apply(partialParams));
    }
    invokeDeleteBandwidthRateLimit(partialParams) {
        return this.client.deleteBandwidthRateLimit(this.ops["DeleteBandwidthRateLimit"].apply(partialParams));
    }
    invokeDeleteChapCredentials(partialParams) {
        return this.client.deleteChapCredentials(this.ops["DeleteChapCredentials"].apply(partialParams));
    }
    invokeDeleteFileShare(partialParams) {
        return this.client.deleteFileShare(this.ops["DeleteFileShare"].apply(partialParams));
    }
    invokeDeleteGateway(partialParams) {
        return this.client.deleteGateway(this.ops["DeleteGateway"].apply(partialParams));
    }
    invokeDeleteSnapshotSchedule(partialParams) {
        return this.client.deleteSnapshotSchedule(this.ops["DeleteSnapshotSchedule"].apply(partialParams));
    }
    invokeDeleteTape(partialParams) {
        return this.client.deleteTape(this.ops["DeleteTape"].apply(partialParams));
    }
    invokeDeleteTapeArchive(partialParams) {
        return this.client.deleteTapeArchive(this.ops["DeleteTapeArchive"].apply(partialParams));
    }
    invokeDeleteTapePool(partialParams) {
        return this.client.deleteTapePool(this.ops["DeleteTapePool"].apply(partialParams));
    }
    invokeDeleteVolume(partialParams) {
        return this.client.deleteVolume(this.ops["DeleteVolume"].apply(partialParams));
    }
    invokeDescribeAvailabilityMonitorTest(partialParams) {
        return this.client.describeAvailabilityMonitorTest(this.ops["DescribeAvailabilityMonitorTest"].apply(partialParams));
    }
    invokeDescribeBandwidthRateLimit(partialParams) {
        return this.client.describeBandwidthRateLimit(this.ops["DescribeBandwidthRateLimit"].apply(partialParams));
    }
    invokeDescribeBandwidthRateLimitSchedule(partialParams) {
        return this.client.describeBandwidthRateLimitSchedule(this.ops["DescribeBandwidthRateLimitSchedule"].apply(partialParams));
    }
    invokeDescribeCache(partialParams) {
        return this.client.describeCache(this.ops["DescribeCache"].apply(partialParams));
    }
    invokeDescribeCachediSCSIVolumes(partialParams) {
        return this.client.describeCachediSCSIVolumes(this.ops["DescribeCachediSCSIVolumes"].apply(partialParams));
    }
    invokeDescribeChapCredentials(partialParams) {
        return this.client.describeChapCredentials(this.ops["DescribeChapCredentials"].apply(partialParams));
    }
    invokeDescribeFileSystemAssociations(partialParams) {
        return this.client.describeFileSystemAssociations(this.ops["DescribeFileSystemAssociations"].apply(partialParams));
    }
    invokeDescribeGatewayInformation(partialParams) {
        return this.client.describeGatewayInformation(this.ops["DescribeGatewayInformation"].apply(partialParams));
    }
    invokeDescribeMaintenanceStartTime(partialParams) {
        return this.client.describeMaintenanceStartTime(this.ops["DescribeMaintenanceStartTime"].apply(partialParams));
    }
    invokeDescribeNFSFileShares(partialParams) {
        return this.client.describeNFSFileShares(this.ops["DescribeNFSFileShares"].apply(partialParams));
    }
    invokeDescribeSMBFileShares(partialParams) {
        return this.client.describeSMBFileShares(this.ops["DescribeSMBFileShares"].apply(partialParams));
    }
    invokeDescribeSMBSettings(partialParams) {
        return this.client.describeSMBSettings(this.ops["DescribeSMBSettings"].apply(partialParams));
    }
    invokeDescribeSnapshotSchedule(partialParams) {
        return this.client.describeSnapshotSchedule(this.ops["DescribeSnapshotSchedule"].apply(partialParams));
    }
    invokeDescribeStorediSCSIVolumes(partialParams) {
        return this.client.describeStorediSCSIVolumes(this.ops["DescribeStorediSCSIVolumes"].apply(partialParams));
    }
    invokeDescribeTapeRecoveryPoints(partialParams) {
        return this.client.describeTapeRecoveryPoints(this.ops["DescribeTapeRecoveryPoints"].apply(partialParams));
    }
    invokeDescribeTapes(partialParams) {
        return this.client.describeTapes(this.ops["DescribeTapes"].apply(partialParams));
    }
    invokeDescribeUploadBuffer(partialParams) {
        return this.client.describeUploadBuffer(this.ops["DescribeUploadBuffer"].apply(partialParams));
    }
    invokeDescribeVTLDevices(partialParams) {
        return this.client.describeVTLDevices(this.ops["DescribeVTLDevices"].apply(partialParams));
    }
    invokeDescribeWorkingStorage(partialParams) {
        return this.client.describeWorkingStorage(this.ops["DescribeWorkingStorage"].apply(partialParams));
    }
    invokeDetachVolume(partialParams) {
        return this.client.detachVolume(this.ops["DetachVolume"].apply(partialParams));
    }
    invokeDisableGateway(partialParams) {
        return this.client.disableGateway(this.ops["DisableGateway"].apply(partialParams));
    }
    invokeDisassociateFileSystem(partialParams) {
        return this.client.disassociateFileSystem(this.ops["DisassociateFileSystem"].apply(partialParams));
    }
    invokeJoinDomain(partialParams) {
        return this.client.joinDomain(this.ops["JoinDomain"].apply(partialParams));
    }
    invokeListLocalDisks(partialParams) {
        return this.client.listLocalDisks(this.ops["ListLocalDisks"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListVolumeInitiators(partialParams) {
        return this.client.listVolumeInitiators(this.ops["ListVolumeInitiators"].apply(partialParams));
    }
    invokeListVolumeRecoveryPoints(partialParams) {
        return this.client.listVolumeRecoveryPoints(this.ops["ListVolumeRecoveryPoints"].apply(partialParams));
    }
    invokeNotifyWhenUploaded(partialParams) {
        return this.client.notifyWhenUploaded(this.ops["NotifyWhenUploaded"].apply(partialParams));
    }
    invokeRefreshCache(partialParams) {
        return this.client.refreshCache(this.ops["RefreshCache"].apply(partialParams));
    }
    invokeRemoveTagsFromResource(partialParams) {
        return this.client.removeTagsFromResource(this.ops["RemoveTagsFromResource"].apply(partialParams));
    }
    invokeResetCache(partialParams) {
        return this.client.resetCache(this.ops["ResetCache"].apply(partialParams));
    }
    invokeRetrieveTapeArchive(partialParams) {
        return this.client.retrieveTapeArchive(this.ops["RetrieveTapeArchive"].apply(partialParams));
    }
    invokeRetrieveTapeRecoveryPoint(partialParams) {
        return this.client.retrieveTapeRecoveryPoint(this.ops["RetrieveTapeRecoveryPoint"].apply(partialParams));
    }
    invokeSetLocalConsolePassword(partialParams) {
        return this.client.setLocalConsolePassword(this.ops["SetLocalConsolePassword"].apply(partialParams));
    }
    invokeSetSMBGuestPassword(partialParams) {
        return this.client.setSMBGuestPassword(this.ops["SetSMBGuestPassword"].apply(partialParams));
    }
    invokeShutdownGateway(partialParams) {
        return this.client.shutdownGateway(this.ops["ShutdownGateway"].apply(partialParams));
    }
    invokeStartAvailabilityMonitorTest(partialParams) {
        return this.client.startAvailabilityMonitorTest(this.ops["StartAvailabilityMonitorTest"].apply(partialParams));
    }
    invokeStartGateway(partialParams) {
        return this.client.startGateway(this.ops["StartGateway"].apply(partialParams));
    }
    invokeUpdateAutomaticTapeCreationPolicy(partialParams) {
        return this.client.updateAutomaticTapeCreationPolicy(this.ops["UpdateAutomaticTapeCreationPolicy"].apply(partialParams));
    }
    invokeUpdateBandwidthRateLimit(partialParams) {
        return this.client.updateBandwidthRateLimit(this.ops["UpdateBandwidthRateLimit"].apply(partialParams));
    }
    invokeUpdateBandwidthRateLimitSchedule(partialParams) {
        return this.client.updateBandwidthRateLimitSchedule(this.ops["UpdateBandwidthRateLimitSchedule"].apply(partialParams));
    }
    invokeUpdateChapCredentials(partialParams) {
        return this.client.updateChapCredentials(this.ops["UpdateChapCredentials"].apply(partialParams));
    }
    invokeUpdateFileSystemAssociation(partialParams) {
        return this.client.updateFileSystemAssociation(this.ops["UpdateFileSystemAssociation"].apply(partialParams));
    }
    invokeUpdateGatewayInformation(partialParams) {
        return this.client.updateGatewayInformation(this.ops["UpdateGatewayInformation"].apply(partialParams));
    }
    invokeUpdateGatewaySoftwareNow(partialParams) {
        return this.client.updateGatewaySoftwareNow(this.ops["UpdateGatewaySoftwareNow"].apply(partialParams));
    }
    invokeUpdateMaintenanceStartTime(partialParams) {
        return this.client.updateMaintenanceStartTime(this.ops["UpdateMaintenanceStartTime"].apply(partialParams));
    }
    invokeUpdateNFSFileShare(partialParams) {
        return this.client.updateNFSFileShare(this.ops["UpdateNFSFileShare"].apply(partialParams));
    }
    invokeUpdateSMBFileShare(partialParams) {
        return this.client.updateSMBFileShare(this.ops["UpdateSMBFileShare"].apply(partialParams));
    }
    invokeUpdateSMBFileShareVisibility(partialParams) {
        return this.client.updateSMBFileShareVisibility(this.ops["UpdateSMBFileShareVisibility"].apply(partialParams));
    }
    invokeUpdateSMBLocalGroups(partialParams) {
        return this.client.updateSMBLocalGroups(this.ops["UpdateSMBLocalGroups"].apply(partialParams));
    }
    invokeUpdateSMBSecurityStrategy(partialParams) {
        return this.client.updateSMBSecurityStrategy(this.ops["UpdateSMBSecurityStrategy"].apply(partialParams));
    }
    invokeUpdateSnapshotSchedule(partialParams) {
        return this.client.updateSnapshotSchedule(this.ops["UpdateSnapshotSchedule"].apply(partialParams));
    }
    invokeUpdateVTLDeviceType(partialParams) {
        return this.client.updateVTLDeviceType(this.ops["UpdateVTLDeviceType"].apply(partialParams));
    }
}
exports.default = default_1;
