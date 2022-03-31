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
class default_1 extends aws.fsx.OntapStorageVirtualMachine {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.FSx();
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
    invokeAssociateFileSystemAliases(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateFileSystemAliases(this.ops["AssociateFileSystemAliases"].applicator.apply(partialParams));
    }
    invokeCancelDataRepositoryTask(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelDataRepositoryTask(this.ops["CancelDataRepositoryTask"].applicator.apply(partialParams));
    }
    invokeCopyBackup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copyBackup(this.ops["CopyBackup"].applicator.apply(partialParams));
    }
    invokeCreateDataRepositoryAssociation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDataRepositoryAssociation(this.ops["CreateDataRepositoryAssociation"].applicator.apply(partialParams));
    }
    invokeCreateDataRepositoryTask(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDataRepositoryTask(this.ops["CreateDataRepositoryTask"].applicator.apply(partialParams));
    }
    invokeCreateFileSystem(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFileSystem(this.ops["CreateFileSystem"].applicator.apply(partialParams));
    }
    invokeCreateFileSystemFromBackup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFileSystemFromBackup(this.ops["CreateFileSystemFromBackup"].applicator.apply(partialParams));
    }
    invokeCreateSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSnapshot(this.ops["CreateSnapshot"].applicator.apply(partialParams));
    }
    invokeCreateStorageVirtualMachine(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createStorageVirtualMachine(this.ops["CreateStorageVirtualMachine"].applicator.apply(partialParams));
    }
    invokeCreateVolume(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVolume(this.ops["CreateVolume"].applicator.apply(partialParams));
    }
    invokeCreateVolumeFromBackup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVolumeFromBackup(this.ops["CreateVolumeFromBackup"].applicator.apply(partialParams));
    }
    invokeDeleteBackup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBackup(this.ops["DeleteBackup"].applicator.apply(partialParams));
    }
    invokeDeleteDataRepositoryAssociation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDataRepositoryAssociation(this.ops["DeleteDataRepositoryAssociation"].applicator.apply(partialParams));
    }
    invokeDeleteFileSystem(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFileSystem(this.ops["DeleteFileSystem"].applicator.apply(partialParams));
    }
    invokeDeleteSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSnapshot(this.ops["DeleteSnapshot"].applicator.apply(partialParams));
    }
    invokeDeleteStorageVirtualMachine(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteStorageVirtualMachine(this.ops["DeleteStorageVirtualMachine"].applicator.apply(partialParams));
    }
    invokeDeleteVolume(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVolume(this.ops["DeleteVolume"].applicator.apply(partialParams));
    }
    invokeDescribeFileSystemAliases(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFileSystemAliases(this.ops["DescribeFileSystemAliases"].applicator.apply(partialParams));
    }
    invokeDisassociateFileSystemAliases(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateFileSystemAliases(this.ops["DisassociateFileSystemAliases"].applicator.apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].applicator.apply(partialParams));
    }
    invokeReleaseFileSystemNfsV3Locks(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.releaseFileSystemNfsV3Locks(this.ops["ReleaseFileSystemNfsV3Locks"].applicator.apply(partialParams));
    }
    invokeRestoreVolumeFromSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreVolumeFromSnapshot(this.ops["RestoreVolumeFromSnapshot"].applicator.apply(partialParams));
    }
    invokeTagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].applicator.apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].applicator.apply(partialParams));
    }
    invokeUpdateDataRepositoryAssociation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDataRepositoryAssociation(this.ops["UpdateDataRepositoryAssociation"].applicator.apply(partialParams));
    }
    invokeUpdateFileSystem(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFileSystem(this.ops["UpdateFileSystem"].applicator.apply(partialParams));
    }
    invokeUpdateSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSnapshot(this.ops["UpdateSnapshot"].applicator.apply(partialParams));
    }
    invokeUpdateStorageVirtualMachine(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateStorageVirtualMachine(this.ops["UpdateStorageVirtualMachine"].applicator.apply(partialParams));
    }
    invokeUpdateVolume(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateVolume(this.ops["UpdateVolume"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
