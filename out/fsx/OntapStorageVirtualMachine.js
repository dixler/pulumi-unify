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
class default_1 extends aws.fsx.OntapStorageVirtualMachine {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.FSx();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/fsx-2018-03-01.normal.json"), this.client);
    }
    invokeAssociateFileSystemAliases(partialParams) {
        return this.client.associateFileSystemAliases(this.ops["AssociateFileSystemAliases"].apply(partialParams));
    }
    invokeCancelDataRepositoryTask(partialParams) {
        return this.client.cancelDataRepositoryTask(this.ops["CancelDataRepositoryTask"].apply(partialParams));
    }
    invokeCopyBackup(partialParams) {
        return this.client.copyBackup(this.ops["CopyBackup"].apply(partialParams));
    }
    invokeCreateDataRepositoryAssociation(partialParams) {
        return this.client.createDataRepositoryAssociation(this.ops["CreateDataRepositoryAssociation"].apply(partialParams));
    }
    invokeCreateDataRepositoryTask(partialParams) {
        return this.client.createDataRepositoryTask(this.ops["CreateDataRepositoryTask"].apply(partialParams));
    }
    invokeCreateFileSystem(partialParams) {
        return this.client.createFileSystem(this.ops["CreateFileSystem"].apply(partialParams));
    }
    invokeCreateFileSystemFromBackup(partialParams) {
        return this.client.createFileSystemFromBackup(this.ops["CreateFileSystemFromBackup"].apply(partialParams));
    }
    invokeCreateSnapshot(partialParams) {
        return this.client.createSnapshot(this.ops["CreateSnapshot"].apply(partialParams));
    }
    invokeCreateStorageVirtualMachine(partialParams) {
        return this.client.createStorageVirtualMachine(this.ops["CreateStorageVirtualMachine"].apply(partialParams));
    }
    invokeCreateVolume(partialParams) {
        return this.client.createVolume(this.ops["CreateVolume"].apply(partialParams));
    }
    invokeCreateVolumeFromBackup(partialParams) {
        return this.client.createVolumeFromBackup(this.ops["CreateVolumeFromBackup"].apply(partialParams));
    }
    invokeDeleteBackup(partialParams) {
        return this.client.deleteBackup(this.ops["DeleteBackup"].apply(partialParams));
    }
    invokeDeleteDataRepositoryAssociation(partialParams) {
        return this.client.deleteDataRepositoryAssociation(this.ops["DeleteDataRepositoryAssociation"].apply(partialParams));
    }
    invokeDeleteFileSystem(partialParams) {
        return this.client.deleteFileSystem(this.ops["DeleteFileSystem"].apply(partialParams));
    }
    invokeDeleteSnapshot(partialParams) {
        return this.client.deleteSnapshot(this.ops["DeleteSnapshot"].apply(partialParams));
    }
    invokeDeleteStorageVirtualMachine(partialParams) {
        return this.client.deleteStorageVirtualMachine(this.ops["DeleteStorageVirtualMachine"].apply(partialParams));
    }
    invokeDeleteVolume(partialParams) {
        return this.client.deleteVolume(this.ops["DeleteVolume"].apply(partialParams));
    }
    invokeDescribeFileSystemAliases(partialParams) {
        return this.client.describeFileSystemAliases(this.ops["DescribeFileSystemAliases"].apply(partialParams));
    }
    invokeDisassociateFileSystemAliases(partialParams) {
        return this.client.disassociateFileSystemAliases(this.ops["DisassociateFileSystemAliases"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeReleaseFileSystemNfsV3Locks(partialParams) {
        return this.client.releaseFileSystemNfsV3Locks(this.ops["ReleaseFileSystemNfsV3Locks"].apply(partialParams));
    }
    invokeRestoreVolumeFromSnapshot(partialParams) {
        return this.client.restoreVolumeFromSnapshot(this.ops["RestoreVolumeFromSnapshot"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateDataRepositoryAssociation(partialParams) {
        return this.client.updateDataRepositoryAssociation(this.ops["UpdateDataRepositoryAssociation"].apply(partialParams));
    }
    invokeUpdateFileSystem(partialParams) {
        return this.client.updateFileSystem(this.ops["UpdateFileSystem"].apply(partialParams));
    }
    invokeUpdateSnapshot(partialParams) {
        return this.client.updateSnapshot(this.ops["UpdateSnapshot"].apply(partialParams));
    }
    invokeUpdateStorageVirtualMachine(partialParams) {
        return this.client.updateStorageVirtualMachine(this.ops["UpdateStorageVirtualMachine"].apply(partialParams));
    }
    invokeUpdateVolume(partialParams) {
        return this.client.updateVolume(this.ops["UpdateVolume"].apply(partialParams));
    }
}
exports.default = default_1;
