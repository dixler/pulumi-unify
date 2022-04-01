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
class default_1 extends aws.fsx.OntapVolume {
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
    invokeCreateDataRepositoryAssociation(partialParams) {
        this.boot();
        return this.client.createDataRepositoryAssociation(this.ops["CreateDataRepositoryAssociation"].apply(partialParams));
    }
    invokeCreateDataRepositoryTask(partialParams) {
        this.boot();
        return this.client.createDataRepositoryTask(this.ops["CreateDataRepositoryTask"].apply(partialParams));
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
    invokeDeleteFileSystem(partialParams) {
        this.boot();
        return this.client.deleteFileSystem(this.ops["DeleteFileSystem"].apply(partialParams));
    }
    invokeDeleteStorageVirtualMachine(partialParams) {
        this.boot();
        return this.client.deleteStorageVirtualMachine(this.ops["DeleteStorageVirtualMachine"].apply(partialParams));
    }
    invokeDescribeFileSystemAliases(partialParams) {
        this.boot();
        return this.client.describeFileSystemAliases(this.ops["DescribeFileSystemAliases"].apply(partialParams));
    }
    invokeDisassociateFileSystemAliases(partialParams) {
        this.boot();
        return this.client.disassociateFileSystemAliases(this.ops["DisassociateFileSystemAliases"].apply(partialParams));
    }
    invokeReleaseFileSystemNfsV3Locks(partialParams) {
        this.boot();
        return this.client.releaseFileSystemNfsV3Locks(this.ops["ReleaseFileSystemNfsV3Locks"].apply(partialParams));
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
}
exports.default = default_1;
