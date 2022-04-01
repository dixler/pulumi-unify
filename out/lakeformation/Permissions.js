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
const schema = require("../apis/lakeformation-2017-03-31.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.lakeformation.Permissions {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.LakeFormation();
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
    invokeAddLFTagsToResource(partialParams) {
        this.boot();
        return this.client.addLFTagsToResource(this.ops["AddLFTagsToResource"].apply(partialParams));
    }
    invokeBatchGrantPermissions(partialParams) {
        this.boot();
        return this.client.batchGrantPermissions(this.ops["BatchGrantPermissions"].apply(partialParams));
    }
    invokeBatchRevokePermissions(partialParams) {
        this.boot();
        return this.client.batchRevokePermissions(this.ops["BatchRevokePermissions"].apply(partialParams));
    }
    invokeCancelTransaction(partialParams) {
        this.boot();
        return this.client.cancelTransaction(this.ops["CancelTransaction"].apply(partialParams));
    }
    invokeCommitTransaction(partialParams) {
        this.boot();
        return this.client.commitTransaction(this.ops["CommitTransaction"].apply(partialParams));
    }
    invokeCreateDataCellsFilter(partialParams) {
        this.boot();
        return this.client.createDataCellsFilter(this.ops["CreateDataCellsFilter"].apply(partialParams));
    }
    invokeCreateLFTag(partialParams) {
        this.boot();
        return this.client.createLFTag(this.ops["CreateLFTag"].apply(partialParams));
    }
    invokeDeleteDataCellsFilter(partialParams) {
        this.boot();
        return this.client.deleteDataCellsFilter(this.ops["DeleteDataCellsFilter"].apply(partialParams));
    }
    invokeDeleteLFTag(partialParams) {
        this.boot();
        return this.client.deleteLFTag(this.ops["DeleteLFTag"].apply(partialParams));
    }
    invokeDeleteObjectsOnCancel(partialParams) {
        this.boot();
        return this.client.deleteObjectsOnCancel(this.ops["DeleteObjectsOnCancel"].apply(partialParams));
    }
    invokeDeregisterResource(partialParams) {
        this.boot();
        return this.client.deregisterResource(this.ops["DeregisterResource"].apply(partialParams));
    }
    invokeDescribeResource(partialParams) {
        this.boot();
        return this.client.describeResource(this.ops["DescribeResource"].apply(partialParams));
    }
    invokeDescribeTransaction(partialParams) {
        this.boot();
        return this.client.describeTransaction(this.ops["DescribeTransaction"].apply(partialParams));
    }
    invokeExtendTransaction(partialParams) {
        this.boot();
        return this.client.extendTransaction(this.ops["ExtendTransaction"].apply(partialParams));
    }
    invokeGetDataLakeSettings(partialParams) {
        this.boot();
        return this.client.getDataLakeSettings(this.ops["GetDataLakeSettings"].apply(partialParams));
    }
    invokeGetEffectivePermissionsForPath(partialParams) {
        this.boot();
        return this.client.getEffectivePermissionsForPath(this.ops["GetEffectivePermissionsForPath"].apply(partialParams));
    }
    invokeGetLFTag(partialParams) {
        this.boot();
        return this.client.getLFTag(this.ops["GetLFTag"].apply(partialParams));
    }
    invokeGetQueryState(partialParams) {
        this.boot();
        return this.client.getQueryState(this.ops["GetQueryState"].apply(partialParams));
    }
    invokeGetQueryStatistics(partialParams) {
        this.boot();
        return this.client.getQueryStatistics(this.ops["GetQueryStatistics"].apply(partialParams));
    }
    invokeGetResourceLFTags(partialParams) {
        this.boot();
        return this.client.getResourceLFTags(this.ops["GetResourceLFTags"].apply(partialParams));
    }
    invokeGetTableObjects(partialParams) {
        this.boot();
        return this.client.getTableObjects(this.ops["GetTableObjects"].apply(partialParams));
    }
    invokeGetTemporaryGluePartitionCredentials(partialParams) {
        this.boot();
        return this.client.getTemporaryGluePartitionCredentials(this.ops["GetTemporaryGluePartitionCredentials"].apply(partialParams));
    }
    invokeGetTemporaryGlueTableCredentials(partialParams) {
        this.boot();
        return this.client.getTemporaryGlueTableCredentials(this.ops["GetTemporaryGlueTableCredentials"].apply(partialParams));
    }
    invokeGetWorkUnitResults(partialParams) {
        this.boot();
        return this.client.getWorkUnitResults(this.ops["GetWorkUnitResults"].apply(partialParams));
    }
    invokeGetWorkUnits(partialParams) {
        this.boot();
        return this.client.getWorkUnits(this.ops["GetWorkUnits"].apply(partialParams));
    }
    invokeGrantPermissions(partialParams) {
        this.boot();
        return this.client.grantPermissions(this.ops["GrantPermissions"].apply(partialParams));
    }
    invokeListDataCellsFilter(partialParams) {
        this.boot();
        return this.client.listDataCellsFilter(this.ops["ListDataCellsFilter"].apply(partialParams));
    }
    invokeListLFTags(partialParams) {
        this.boot();
        return this.client.listLFTags(this.ops["ListLFTags"].apply(partialParams));
    }
    invokeListPermissions(partialParams) {
        this.boot();
        return this.client.listPermissions(this.ops["ListPermissions"].apply(partialParams));
    }
    invokeListResources(partialParams) {
        this.boot();
        return this.client.listResources(this.ops["ListResources"].apply(partialParams));
    }
    invokeListTableStorageOptimizers(partialParams) {
        this.boot();
        return this.client.listTableStorageOptimizers(this.ops["ListTableStorageOptimizers"].apply(partialParams));
    }
    invokeListTransactions(partialParams) {
        this.boot();
        return this.client.listTransactions(this.ops["ListTransactions"].apply(partialParams));
    }
    invokePutDataLakeSettings(partialParams) {
        this.boot();
        return this.client.putDataLakeSettings(this.ops["PutDataLakeSettings"].apply(partialParams));
    }
    invokeRegisterResource(partialParams) {
        this.boot();
        return this.client.registerResource(this.ops["RegisterResource"].apply(partialParams));
    }
    invokeRemoveLFTagsFromResource(partialParams) {
        this.boot();
        return this.client.removeLFTagsFromResource(this.ops["RemoveLFTagsFromResource"].apply(partialParams));
    }
    invokeRevokePermissions(partialParams) {
        this.boot();
        return this.client.revokePermissions(this.ops["RevokePermissions"].apply(partialParams));
    }
    invokeSearchDatabasesByLFTags(partialParams) {
        this.boot();
        return this.client.searchDatabasesByLFTags(this.ops["SearchDatabasesByLFTags"].apply(partialParams));
    }
    invokeSearchTablesByLFTags(partialParams) {
        this.boot();
        return this.client.searchTablesByLFTags(this.ops["SearchTablesByLFTags"].apply(partialParams));
    }
    invokeStartQueryPlanning(partialParams) {
        this.boot();
        return this.client.startQueryPlanning(this.ops["StartQueryPlanning"].apply(partialParams));
    }
    invokeStartTransaction(partialParams) {
        this.boot();
        return this.client.startTransaction(this.ops["StartTransaction"].apply(partialParams));
    }
    invokeUpdateLFTag(partialParams) {
        this.boot();
        return this.client.updateLFTag(this.ops["UpdateLFTag"].apply(partialParams));
    }
    invokeUpdateResource(partialParams) {
        this.boot();
        return this.client.updateResource(this.ops["UpdateResource"].apply(partialParams));
    }
    invokeUpdateTableObjects(partialParams) {
        this.boot();
        return this.client.updateTableObjects(this.ops["UpdateTableObjects"].apply(partialParams));
    }
    invokeUpdateTableStorageOptimizer(partialParams) {
        this.boot();
        return this.client.updateTableStorageOptimizer(this.ops["UpdateTableStorageOptimizer"].apply(partialParams));
    }
}
exports.default = default_1;
