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
class default_1 extends aws.fsx.DataRepositoryAssociation {
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
    invokeCreateStorageVirtualMachine(partialParams) {
        this.boot();
        return this.client.createStorageVirtualMachine(this.ops["CreateStorageVirtualMachine"].apply(partialParams));
    }
    invokeDeleteDataRepositoryAssociation(partialParams) {
        this.boot();
        return this.client.deleteDataRepositoryAssociation(this.ops["DeleteDataRepositoryAssociation"].apply(partialParams));
    }
    invokeDeleteFileSystem(partialParams) {
        this.boot();
        return this.client.deleteFileSystem(this.ops["DeleteFileSystem"].apply(partialParams));
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
    invokeUpdateDataRepositoryAssociation(partialParams) {
        this.boot();
        return this.client.updateDataRepositoryAssociation(this.ops["UpdateDataRepositoryAssociation"].apply(partialParams));
    }
    invokeUpdateFileSystem(partialParams) {
        this.boot();
        return this.client.updateFileSystem(this.ops["UpdateFileSystem"].apply(partialParams));
    }
}
exports.default = default_1;
