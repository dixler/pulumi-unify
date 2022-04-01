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
const schema = require("../apis/fsx-2018-03-01.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.fsx.OpenZfsFileSystem {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.FSx();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
            if (this[(0, parse_1.upperCamelCase)(this.constructor.name) + (0, parse_1.upperCamelCase)(key)] === undefined) {
                this.capitalizedParams[this.constructor.name + (0, parse_1.upperCamelCase)(key)] = value;
            }
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
    invokeAssociateFileSystemAliases(partialParams) {
        this.boot();
        return this.client.associateFileSystemAliases(this.ops["AssociateFileSystemAliases"].apply(partialParams));
    }
    invokeCancelDataRepositoryTask(partialParams) {
        this.boot();
        return this.client.cancelDataRepositoryTask(this.ops["CancelDataRepositoryTask"].apply(partialParams));
    }
    invokeCopyBackup(partialParams) {
        this.boot();
        return this.client.copyBackup(this.ops["CopyBackup"].apply(partialParams));
    }
    invokeCreateBackup(partialParams) {
        this.boot();
        return this.client.createBackup(this.ops["CreateBackup"].apply(partialParams));
    }
    invokeCreateDataRepositoryAssociation(partialParams) {
        this.boot();
        return this.client.createDataRepositoryAssociation(this.ops["CreateDataRepositoryAssociation"].apply(partialParams));
    }
    invokeCreateDataRepositoryTask(partialParams) {
        this.boot();
        return this.client.createDataRepositoryTask(this.ops["CreateDataRepositoryTask"].apply(partialParams));
    }
    invokeCreateFileSystem(partialParams) {
        this.boot();
        return this.client.createFileSystem(this.ops["CreateFileSystem"].apply(partialParams));
    }
    invokeCreateFileSystemFromBackup(partialParams) {
        this.boot();
        return this.client.createFileSystemFromBackup(this.ops["CreateFileSystemFromBackup"].apply(partialParams));
    }
    invokeCreateSnapshot(partialParams) {
        this.boot();
        return this.client.createSnapshot(this.ops["CreateSnapshot"].apply(partialParams));
    }
    invokeCreateStorageVirtualMachine(partialParams) {
        this.boot();
        return this.client.createStorageVirtualMachine(this.ops["CreateStorageVirtualMachine"].apply(partialParams));
    }
    invokeCreateVolume(partialParams) {
        this.boot();
        return this.client.createVolume(this.ops["CreateVolume"].apply(partialParams));
    }
    invokeCreateVolumeFromBackup(partialParams) {
        this.boot();
        return this.client.createVolumeFromBackup(this.ops["CreateVolumeFromBackup"].apply(partialParams));
    }
    invokeDeleteBackup(partialParams) {
        this.boot();
        return this.client.deleteBackup(this.ops["DeleteBackup"].apply(partialParams));
    }
    invokeDeleteDataRepositoryAssociation(partialParams) {
        this.boot();
        return this.client.deleteDataRepositoryAssociation(this.ops["DeleteDataRepositoryAssociation"].apply(partialParams));
    }
    invokeDeleteFileSystem(partialParams) {
        this.boot();
        return this.client.deleteFileSystem(this.ops["DeleteFileSystem"].apply(partialParams));
    }
    invokeDeleteSnapshot(partialParams) {
        this.boot();
        return this.client.deleteSnapshot(this.ops["DeleteSnapshot"].apply(partialParams));
    }
    invokeDeleteStorageVirtualMachine(partialParams) {
        this.boot();
        return this.client.deleteStorageVirtualMachine(this.ops["DeleteStorageVirtualMachine"].apply(partialParams));
    }
    invokeDeleteVolume(partialParams) {
        this.boot();
        return this.client.deleteVolume(this.ops["DeleteVolume"].apply(partialParams));
    }
    invokeDescribeBackups(partialParams) {
        this.boot();
        return this.client.describeBackups(this.ops["DescribeBackups"].apply(partialParams));
    }
    invokeDescribeDataRepositoryAssociations(partialParams) {
        this.boot();
        return this.client.describeDataRepositoryAssociations(this.ops["DescribeDataRepositoryAssociations"].apply(partialParams));
    }
    invokeDescribeDataRepositoryTasks(partialParams) {
        this.boot();
        return this.client.describeDataRepositoryTasks(this.ops["DescribeDataRepositoryTasks"].apply(partialParams));
    }
    invokeDescribeFileSystemAliases(partialParams) {
        this.boot();
        return this.client.describeFileSystemAliases(this.ops["DescribeFileSystemAliases"].apply(partialParams));
    }
    invokeDescribeFileSystems(partialParams) {
        this.boot();
        return this.client.describeFileSystems(this.ops["DescribeFileSystems"].apply(partialParams));
    }
    invokeDescribeSnapshots(partialParams) {
        this.boot();
        return this.client.describeSnapshots(this.ops["DescribeSnapshots"].apply(partialParams));
    }
    invokeDescribeStorageVirtualMachines(partialParams) {
        this.boot();
        return this.client.describeStorageVirtualMachines(this.ops["DescribeStorageVirtualMachines"].apply(partialParams));
    }
    invokeDescribeVolumes(partialParams) {
        this.boot();
        return this.client.describeVolumes(this.ops["DescribeVolumes"].apply(partialParams));
    }
    invokeDisassociateFileSystemAliases(partialParams) {
        this.boot();
        return this.client.disassociateFileSystemAliases(this.ops["DisassociateFileSystemAliases"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeReleaseFileSystemNfsV3Locks(partialParams) {
        this.boot();
        return this.client.releaseFileSystemNfsV3Locks(this.ops["ReleaseFileSystemNfsV3Locks"].apply(partialParams));
    }
    invokeRestoreVolumeFromSnapshot(partialParams) {
        this.boot();
        return this.client.restoreVolumeFromSnapshot(this.ops["RestoreVolumeFromSnapshot"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateDataRepositoryAssociation(partialParams) {
        this.boot();
        return this.client.updateDataRepositoryAssociation(this.ops["UpdateDataRepositoryAssociation"].apply(partialParams));
    }
    invokeUpdateFileSystem(partialParams) {
        this.boot();
        return this.client.updateFileSystem(this.ops["UpdateFileSystem"].apply(partialParams));
    }
    invokeUpdateSnapshot(partialParams) {
        this.boot();
        return this.client.updateSnapshot(this.ops["UpdateSnapshot"].apply(partialParams));
    }
    invokeUpdateStorageVirtualMachine(partialParams) {
        this.boot();
        return this.client.updateStorageVirtualMachine(this.ops["UpdateStorageVirtualMachine"].apply(partialParams));
    }
    invokeUpdateVolume(partialParams) {
        this.boot();
        return this.client.updateVolume(this.ops["UpdateVolume"].apply(partialParams));
    }
}
exports.default = default_1;
