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
const schema = require("../apis/cloudhsmv2-2017-04-28.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.cloudhsmv2.Hsm {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.CloudHSMV2();
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
    invokeCopyBackupToRegion(partialParams) {
        this.boot();
        return this.client.copyBackupToRegion(this.ops["CopyBackupToRegion"].apply(partialParams));
    }
    invokeCreateCluster(partialParams) {
        this.boot();
        return this.client.createCluster(this.ops["CreateCluster"].apply(partialParams));
    }
    invokeCreateHsm(partialParams) {
        this.boot();
        return this.client.createHsm(this.ops["CreateHsm"].apply(partialParams));
    }
    invokeDeleteBackup(partialParams) {
        this.boot();
        return this.client.deleteBackup(this.ops["DeleteBackup"].apply(partialParams));
    }
    invokeDeleteCluster(partialParams) {
        this.boot();
        return this.client.deleteCluster(this.ops["DeleteCluster"].apply(partialParams));
    }
    invokeDeleteHsm(partialParams) {
        this.boot();
        return this.client.deleteHsm(this.ops["DeleteHsm"].apply(partialParams));
    }
    invokeDescribeBackups(partialParams) {
        this.boot();
        return this.client.describeBackups(this.ops["DescribeBackups"].apply(partialParams));
    }
    invokeDescribeClusters(partialParams) {
        this.boot();
        return this.client.describeClusters(this.ops["DescribeClusters"].apply(partialParams));
    }
    invokeInitializeCluster(partialParams) {
        this.boot();
        return this.client.initializeCluster(this.ops["InitializeCluster"].apply(partialParams));
    }
    invokeListTags(partialParams) {
        this.boot();
        return this.client.listTags(this.ops["ListTags"].apply(partialParams));
    }
    invokeModifyBackupAttributes(partialParams) {
        this.boot();
        return this.client.modifyBackupAttributes(this.ops["ModifyBackupAttributes"].apply(partialParams));
    }
    invokeModifyCluster(partialParams) {
        this.boot();
        return this.client.modifyCluster(this.ops["ModifyCluster"].apply(partialParams));
    }
    invokeRestoreBackup(partialParams) {
        this.boot();
        return this.client.restoreBackup(this.ops["RestoreBackup"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
}
exports.default = default_1;
