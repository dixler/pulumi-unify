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
const schema = require("../apis/glue-2017-03-31.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.glue.Partition {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.Glue();
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
    invokeBatchCreatePartition(partialParams) {
        this.boot();
        return this.client.batchCreatePartition(this.ops["BatchCreatePartition"].apply(partialParams));
    }
    invokeBatchDeletePartition(partialParams) {
        this.boot();
        return this.client.batchDeletePartition(this.ops["BatchDeletePartition"].apply(partialParams));
    }
    invokeBatchDeleteTable(partialParams) {
        this.boot();
        return this.client.batchDeleteTable(this.ops["BatchDeleteTable"].apply(partialParams));
    }
    invokeBatchDeleteTableVersion(partialParams) {
        this.boot();
        return this.client.batchDeleteTableVersion(this.ops["BatchDeleteTableVersion"].apply(partialParams));
    }
    invokeBatchGetPartition(partialParams) {
        this.boot();
        return this.client.batchGetPartition(this.ops["BatchGetPartition"].apply(partialParams));
    }
    invokeBatchUpdatePartition(partialParams) {
        this.boot();
        return this.client.batchUpdatePartition(this.ops["BatchUpdatePartition"].apply(partialParams));
    }
    invokeCreatePartition(partialParams) {
        this.boot();
        return this.client.createPartition(this.ops["CreatePartition"].apply(partialParams));
    }
    invokeCreatePartitionIndex(partialParams) {
        this.boot();
        return this.client.createPartitionIndex(this.ops["CreatePartitionIndex"].apply(partialParams));
    }
    invokeCreateTable(partialParams) {
        this.boot();
        return this.client.createTable(this.ops["CreateTable"].apply(partialParams));
    }
    invokeCreateUserDefinedFunction(partialParams) {
        this.boot();
        return this.client.createUserDefinedFunction(this.ops["CreateUserDefinedFunction"].apply(partialParams));
    }
    invokeDeleteColumnStatisticsForPartition(partialParams) {
        this.boot();
        return this.client.deleteColumnStatisticsForPartition(this.ops["DeleteColumnStatisticsForPartition"].apply(partialParams));
    }
    invokeDeleteColumnStatisticsForTable(partialParams) {
        this.boot();
        return this.client.deleteColumnStatisticsForTable(this.ops["DeleteColumnStatisticsForTable"].apply(partialParams));
    }
    invokeDeletePartition(partialParams) {
        this.boot();
        return this.client.deletePartition(this.ops["DeletePartition"].apply(partialParams));
    }
    invokeDeletePartitionIndex(partialParams) {
        this.boot();
        return this.client.deletePartitionIndex(this.ops["DeletePartitionIndex"].apply(partialParams));
    }
    invokeDeleteTable(partialParams) {
        this.boot();
        return this.client.deleteTable(this.ops["DeleteTable"].apply(partialParams));
    }
    invokeDeleteTableVersion(partialParams) {
        this.boot();
        return this.client.deleteTableVersion(this.ops["DeleteTableVersion"].apply(partialParams));
    }
    invokeDeleteUserDefinedFunction(partialParams) {
        this.boot();
        return this.client.deleteUserDefinedFunction(this.ops["DeleteUserDefinedFunction"].apply(partialParams));
    }
    invokeGetColumnStatisticsForPartition(partialParams) {
        this.boot();
        return this.client.getColumnStatisticsForPartition(this.ops["GetColumnStatisticsForPartition"].apply(partialParams));
    }
    invokeGetColumnStatisticsForTable(partialParams) {
        this.boot();
        return this.client.getColumnStatisticsForTable(this.ops["GetColumnStatisticsForTable"].apply(partialParams));
    }
    invokeGetPartition(partialParams) {
        this.boot();
        return this.client.getPartition(this.ops["GetPartition"].apply(partialParams));
    }
    invokeGetPartitionIndexes(partialParams) {
        this.boot();
        return this.client.getPartitionIndexes(this.ops["GetPartitionIndexes"].apply(partialParams));
    }
    invokeGetPartitions(partialParams) {
        this.boot();
        return this.client.getPartitions(this.ops["GetPartitions"].apply(partialParams));
    }
    invokeGetTable(partialParams) {
        this.boot();
        return this.client.getTable(this.ops["GetTable"].apply(partialParams));
    }
    invokeGetTableVersion(partialParams) {
        this.boot();
        return this.client.getTableVersion(this.ops["GetTableVersion"].apply(partialParams));
    }
    invokeGetTableVersions(partialParams) {
        this.boot();
        return this.client.getTableVersions(this.ops["GetTableVersions"].apply(partialParams));
    }
    invokeGetTables(partialParams) {
        this.boot();
        return this.client.getTables(this.ops["GetTables"].apply(partialParams));
    }
    invokeGetUnfilteredPartitionMetadata(partialParams) {
        this.boot();
        return this.client.getUnfilteredPartitionMetadata(this.ops["GetUnfilteredPartitionMetadata"].apply(partialParams));
    }
    invokeGetUnfilteredPartitionsMetadata(partialParams) {
        this.boot();
        return this.client.getUnfilteredPartitionsMetadata(this.ops["GetUnfilteredPartitionsMetadata"].apply(partialParams));
    }
    invokeGetUnfilteredTableMetadata(partialParams) {
        this.boot();
        return this.client.getUnfilteredTableMetadata(this.ops["GetUnfilteredTableMetadata"].apply(partialParams));
    }
    invokeGetUserDefinedFunction(partialParams) {
        this.boot();
        return this.client.getUserDefinedFunction(this.ops["GetUserDefinedFunction"].apply(partialParams));
    }
    invokeUpdateColumnStatisticsForPartition(partialParams) {
        this.boot();
        return this.client.updateColumnStatisticsForPartition(this.ops["UpdateColumnStatisticsForPartition"].apply(partialParams));
    }
    invokeUpdateColumnStatisticsForTable(partialParams) {
        this.boot();
        return this.client.updateColumnStatisticsForTable(this.ops["UpdateColumnStatisticsForTable"].apply(partialParams));
    }
    invokeUpdatePartition(partialParams) {
        this.boot();
        return this.client.updatePartition(this.ops["UpdatePartition"].apply(partialParams));
    }
    invokeUpdateTable(partialParams) {
        this.boot();
        return this.client.updateTable(this.ops["UpdateTable"].apply(partialParams));
    }
    invokeUpdateUserDefinedFunction(partialParams) {
        this.boot();
        return this.client.updateUserDefinedFunction(this.ops["UpdateUserDefinedFunction"].apply(partialParams));
    }
}
exports.default = default_1;
