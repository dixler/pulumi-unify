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
class default_1 extends aws.storagegateway.Gateway {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.StorageGateway();
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
    invokeActivateGateway(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.activateGateway(this.ops["ActivateGateway"].applicator.apply(partialParams));
    }
    invokeAddCache(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addCache(this.ops["AddCache"].applicator.apply(partialParams));
    }
    invokeAddTagsToResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addTagsToResource(this.ops["AddTagsToResource"].applicator.apply(partialParams));
    }
    invokeAddUploadBuffer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addUploadBuffer(this.ops["AddUploadBuffer"].applicator.apply(partialParams));
    }
    invokeAddWorkingStorage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addWorkingStorage(this.ops["AddWorkingStorage"].applicator.apply(partialParams));
    }
    invokeAssignTapePool(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.assignTapePool(this.ops["AssignTapePool"].applicator.apply(partialParams));
    }
    invokeAssociateFileSystem(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateFileSystem(this.ops["AssociateFileSystem"].applicator.apply(partialParams));
    }
    invokeAttachVolume(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachVolume(this.ops["AttachVolume"].applicator.apply(partialParams));
    }
    invokeCancelArchival(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelArchival(this.ops["CancelArchival"].applicator.apply(partialParams));
    }
    invokeCancelRetrieval(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelRetrieval(this.ops["CancelRetrieval"].applicator.apply(partialParams));
    }
    invokeCreateCachediSCSIVolume(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCachediSCSIVolume(this.ops["CreateCachediSCSIVolume"].applicator.apply(partialParams));
    }
    invokeCreateNFSFileShare(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createNFSFileShare(this.ops["CreateNFSFileShare"].applicator.apply(partialParams));
    }
    invokeCreateSMBFileShare(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSMBFileShare(this.ops["CreateSMBFileShare"].applicator.apply(partialParams));
    }
    invokeCreateSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSnapshot(this.ops["CreateSnapshot"].applicator.apply(partialParams));
    }
    invokeCreateSnapshotFromVolumeRecoveryPoint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSnapshotFromVolumeRecoveryPoint(this.ops["CreateSnapshotFromVolumeRecoveryPoint"].applicator.apply(partialParams));
    }
    invokeCreateStorediSCSIVolume(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createStorediSCSIVolume(this.ops["CreateStorediSCSIVolume"].applicator.apply(partialParams));
    }
    invokeCreateTapePool(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTapePool(this.ops["CreateTapePool"].applicator.apply(partialParams));
    }
    invokeCreateTapeWithBarcode(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTapeWithBarcode(this.ops["CreateTapeWithBarcode"].applicator.apply(partialParams));
    }
    invokeCreateTapes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTapes(this.ops["CreateTapes"].applicator.apply(partialParams));
    }
    invokeDeleteAutomaticTapeCreationPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAutomaticTapeCreationPolicy(this.ops["DeleteAutomaticTapeCreationPolicy"].applicator.apply(partialParams));
    }
    invokeDeleteBandwidthRateLimit(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBandwidthRateLimit(this.ops["DeleteBandwidthRateLimit"].applicator.apply(partialParams));
    }
    invokeDeleteChapCredentials(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteChapCredentials(this.ops["DeleteChapCredentials"].applicator.apply(partialParams));
    }
    invokeDeleteFileShare(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFileShare(this.ops["DeleteFileShare"].applicator.apply(partialParams));
    }
    invokeDeleteGateway(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteGateway(this.ops["DeleteGateway"].applicator.apply(partialParams));
    }
    invokeDeleteSnapshotSchedule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSnapshotSchedule(this.ops["DeleteSnapshotSchedule"].applicator.apply(partialParams));
    }
    invokeDeleteTape(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTape(this.ops["DeleteTape"].applicator.apply(partialParams));
    }
    invokeDeleteTapeArchive(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTapeArchive(this.ops["DeleteTapeArchive"].applicator.apply(partialParams));
    }
    invokeDeleteTapePool(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTapePool(this.ops["DeleteTapePool"].applicator.apply(partialParams));
    }
    invokeDeleteVolume(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVolume(this.ops["DeleteVolume"].applicator.apply(partialParams));
    }
    invokeDescribeAvailabilityMonitorTest(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAvailabilityMonitorTest(this.ops["DescribeAvailabilityMonitorTest"].applicator.apply(partialParams));
    }
    invokeDescribeBandwidthRateLimit(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeBandwidthRateLimit(this.ops["DescribeBandwidthRateLimit"].applicator.apply(partialParams));
    }
    invokeDescribeBandwidthRateLimitSchedule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeBandwidthRateLimitSchedule(this.ops["DescribeBandwidthRateLimitSchedule"].applicator.apply(partialParams));
    }
    invokeDescribeCache(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCache(this.ops["DescribeCache"].applicator.apply(partialParams));
    }
    invokeDescribeCachediSCSIVolumes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCachediSCSIVolumes(this.ops["DescribeCachediSCSIVolumes"].applicator.apply(partialParams));
    }
    invokeDescribeChapCredentials(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeChapCredentials(this.ops["DescribeChapCredentials"].applicator.apply(partialParams));
    }
    invokeDescribeFileSystemAssociations(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFileSystemAssociations(this.ops["DescribeFileSystemAssociations"].applicator.apply(partialParams));
    }
    invokeDescribeGatewayInformation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeGatewayInformation(this.ops["DescribeGatewayInformation"].applicator.apply(partialParams));
    }
    invokeDescribeMaintenanceStartTime(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeMaintenanceStartTime(this.ops["DescribeMaintenanceStartTime"].applicator.apply(partialParams));
    }
    invokeDescribeNFSFileShares(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeNFSFileShares(this.ops["DescribeNFSFileShares"].applicator.apply(partialParams));
    }
    invokeDescribeSMBFileShares(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeSMBFileShares(this.ops["DescribeSMBFileShares"].applicator.apply(partialParams));
    }
    invokeDescribeSMBSettings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeSMBSettings(this.ops["DescribeSMBSettings"].applicator.apply(partialParams));
    }
    invokeDescribeSnapshotSchedule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeSnapshotSchedule(this.ops["DescribeSnapshotSchedule"].applicator.apply(partialParams));
    }
    invokeDescribeStorediSCSIVolumes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeStorediSCSIVolumes(this.ops["DescribeStorediSCSIVolumes"].applicator.apply(partialParams));
    }
    invokeDescribeTapeRecoveryPoints(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTapeRecoveryPoints(this.ops["DescribeTapeRecoveryPoints"].applicator.apply(partialParams));
    }
    invokeDescribeTapes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTapes(this.ops["DescribeTapes"].applicator.apply(partialParams));
    }
    invokeDescribeUploadBuffer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeUploadBuffer(this.ops["DescribeUploadBuffer"].applicator.apply(partialParams));
    }
    invokeDescribeVTLDevices(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeVTLDevices(this.ops["DescribeVTLDevices"].applicator.apply(partialParams));
    }
    invokeDescribeWorkingStorage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeWorkingStorage(this.ops["DescribeWorkingStorage"].applicator.apply(partialParams));
    }
    invokeDetachVolume(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachVolume(this.ops["DetachVolume"].applicator.apply(partialParams));
    }
    invokeDisableGateway(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableGateway(this.ops["DisableGateway"].applicator.apply(partialParams));
    }
    invokeDisassociateFileSystem(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateFileSystem(this.ops["DisassociateFileSystem"].applicator.apply(partialParams));
    }
    invokeJoinDomain(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.joinDomain(this.ops["JoinDomain"].applicator.apply(partialParams));
    }
    invokeListLocalDisks(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listLocalDisks(this.ops["ListLocalDisks"].applicator.apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].applicator.apply(partialParams));
    }
    invokeListVolumeInitiators(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listVolumeInitiators(this.ops["ListVolumeInitiators"].applicator.apply(partialParams));
    }
    invokeListVolumeRecoveryPoints(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listVolumeRecoveryPoints(this.ops["ListVolumeRecoveryPoints"].applicator.apply(partialParams));
    }
    invokeNotifyWhenUploaded(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.notifyWhenUploaded(this.ops["NotifyWhenUploaded"].applicator.apply(partialParams));
    }
    invokeRefreshCache(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.refreshCache(this.ops["RefreshCache"].applicator.apply(partialParams));
    }
    invokeRemoveTagsFromResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeTagsFromResource(this.ops["RemoveTagsFromResource"].applicator.apply(partialParams));
    }
    invokeResetCache(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetCache(this.ops["ResetCache"].applicator.apply(partialParams));
    }
    invokeRetrieveTapeArchive(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.retrieveTapeArchive(this.ops["RetrieveTapeArchive"].applicator.apply(partialParams));
    }
    invokeRetrieveTapeRecoveryPoint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.retrieveTapeRecoveryPoint(this.ops["RetrieveTapeRecoveryPoint"].applicator.apply(partialParams));
    }
    invokeSetLocalConsolePassword(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setLocalConsolePassword(this.ops["SetLocalConsolePassword"].applicator.apply(partialParams));
    }
    invokeSetSMBGuestPassword(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setSMBGuestPassword(this.ops["SetSMBGuestPassword"].applicator.apply(partialParams));
    }
    invokeShutdownGateway(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.shutdownGateway(this.ops["ShutdownGateway"].applicator.apply(partialParams));
    }
    invokeStartAvailabilityMonitorTest(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startAvailabilityMonitorTest(this.ops["StartAvailabilityMonitorTest"].applicator.apply(partialParams));
    }
    invokeStartGateway(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startGateway(this.ops["StartGateway"].applicator.apply(partialParams));
    }
    invokeUpdateAutomaticTapeCreationPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAutomaticTapeCreationPolicy(this.ops["UpdateAutomaticTapeCreationPolicy"].applicator.apply(partialParams));
    }
    invokeUpdateBandwidthRateLimit(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateBandwidthRateLimit(this.ops["UpdateBandwidthRateLimit"].applicator.apply(partialParams));
    }
    invokeUpdateBandwidthRateLimitSchedule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateBandwidthRateLimitSchedule(this.ops["UpdateBandwidthRateLimitSchedule"].applicator.apply(partialParams));
    }
    invokeUpdateChapCredentials(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateChapCredentials(this.ops["UpdateChapCredentials"].applicator.apply(partialParams));
    }
    invokeUpdateFileSystemAssociation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFileSystemAssociation(this.ops["UpdateFileSystemAssociation"].applicator.apply(partialParams));
    }
    invokeUpdateGatewayInformation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateGatewayInformation(this.ops["UpdateGatewayInformation"].applicator.apply(partialParams));
    }
    invokeUpdateGatewaySoftwareNow(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateGatewaySoftwareNow(this.ops["UpdateGatewaySoftwareNow"].applicator.apply(partialParams));
    }
    invokeUpdateMaintenanceStartTime(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateMaintenanceStartTime(this.ops["UpdateMaintenanceStartTime"].applicator.apply(partialParams));
    }
    invokeUpdateNFSFileShare(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateNFSFileShare(this.ops["UpdateNFSFileShare"].applicator.apply(partialParams));
    }
    invokeUpdateSMBFileShare(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSMBFileShare(this.ops["UpdateSMBFileShare"].applicator.apply(partialParams));
    }
    invokeUpdateSMBFileShareVisibility(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSMBFileShareVisibility(this.ops["UpdateSMBFileShareVisibility"].applicator.apply(partialParams));
    }
    invokeUpdateSMBLocalGroups(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSMBLocalGroups(this.ops["UpdateSMBLocalGroups"].applicator.apply(partialParams));
    }
    invokeUpdateSMBSecurityStrategy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSMBSecurityStrategy(this.ops["UpdateSMBSecurityStrategy"].applicator.apply(partialParams));
    }
    invokeUpdateSnapshotSchedule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSnapshotSchedule(this.ops["UpdateSnapshotSchedule"].applicator.apply(partialParams));
    }
    invokeUpdateVTLDeviceType(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateVTLDeviceType(this.ops["UpdateVTLDeviceType"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
