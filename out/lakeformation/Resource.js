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
class default_1 extends aws.lakeformation.Resource {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.LakeFormation();
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
    invokeAddLFTagsToResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addLFTagsToResource(this.ops["AddLFTagsToResource"].applicator.apply(partialParams));
    }
    invokeBatchGrantPermissions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGrantPermissions(this.ops["BatchGrantPermissions"].applicator.apply(partialParams));
    }
    invokeBatchRevokePermissions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchRevokePermissions(this.ops["BatchRevokePermissions"].applicator.apply(partialParams));
    }
    invokeCancelTransaction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelTransaction(this.ops["CancelTransaction"].applicator.apply(partialParams));
    }
    invokeCommitTransaction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.commitTransaction(this.ops["CommitTransaction"].applicator.apply(partialParams));
    }
    invokeCreateDataCellsFilter(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDataCellsFilter(this.ops["CreateDataCellsFilter"].applicator.apply(partialParams));
    }
    invokeCreateLFTag(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createLFTag(this.ops["CreateLFTag"].applicator.apply(partialParams));
    }
    invokeDeleteLFTag(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteLFTag(this.ops["DeleteLFTag"].applicator.apply(partialParams));
    }
    invokeDeleteObjectsOnCancel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteObjectsOnCancel(this.ops["DeleteObjectsOnCancel"].applicator.apply(partialParams));
    }
    invokeDeregisterResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterResource(this.ops["DeregisterResource"].applicator.apply(partialParams));
    }
    invokeDescribeResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeResource(this.ops["DescribeResource"].applicator.apply(partialParams));
    }
    invokeDescribeTransaction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTransaction(this.ops["DescribeTransaction"].applicator.apply(partialParams));
    }
    invokeGetEffectivePermissionsForPath(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getEffectivePermissionsForPath(this.ops["GetEffectivePermissionsForPath"].applicator.apply(partialParams));
    }
    invokeGetLFTag(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getLFTag(this.ops["GetLFTag"].applicator.apply(partialParams));
    }
    invokeGetQueryState(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getQueryState(this.ops["GetQueryState"].applicator.apply(partialParams));
    }
    invokeGetQueryStatistics(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getQueryStatistics(this.ops["GetQueryStatistics"].applicator.apply(partialParams));
    }
    invokeGetResourceLFTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getResourceLFTags(this.ops["GetResourceLFTags"].applicator.apply(partialParams));
    }
    invokeGetTableObjects(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTableObjects(this.ops["GetTableObjects"].applicator.apply(partialParams));
    }
    invokeGetTemporaryGluePartitionCredentials(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTemporaryGluePartitionCredentials(this.ops["GetTemporaryGluePartitionCredentials"].applicator.apply(partialParams));
    }
    invokeGetTemporaryGlueTableCredentials(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTemporaryGlueTableCredentials(this.ops["GetTemporaryGlueTableCredentials"].applicator.apply(partialParams));
    }
    invokeGetWorkUnitResults(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getWorkUnitResults(this.ops["GetWorkUnitResults"].applicator.apply(partialParams));
    }
    invokeGetWorkUnits(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getWorkUnits(this.ops["GetWorkUnits"].applicator.apply(partialParams));
    }
    invokeGrantPermissions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.grantPermissions(this.ops["GrantPermissions"].applicator.apply(partialParams));
    }
    invokeListTableStorageOptimizers(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTableStorageOptimizers(this.ops["ListTableStorageOptimizers"].applicator.apply(partialParams));
    }
    invokePutDataLakeSettings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putDataLakeSettings(this.ops["PutDataLakeSettings"].applicator.apply(partialParams));
    }
    invokeRegisterResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerResource(this.ops["RegisterResource"].applicator.apply(partialParams));
    }
    invokeRemoveLFTagsFromResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeLFTagsFromResource(this.ops["RemoveLFTagsFromResource"].applicator.apply(partialParams));
    }
    invokeRevokePermissions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.revokePermissions(this.ops["RevokePermissions"].applicator.apply(partialParams));
    }
    invokeSearchDatabasesByLFTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.searchDatabasesByLFTags(this.ops["SearchDatabasesByLFTags"].applicator.apply(partialParams));
    }
    invokeSearchTablesByLFTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.searchTablesByLFTags(this.ops["SearchTablesByLFTags"].applicator.apply(partialParams));
    }
    invokeStartQueryPlanning(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startQueryPlanning(this.ops["StartQueryPlanning"].applicator.apply(partialParams));
    }
    invokeUpdateLFTag(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateLFTag(this.ops["UpdateLFTag"].applicator.apply(partialParams));
    }
    invokeUpdateResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateResource(this.ops["UpdateResource"].applicator.apply(partialParams));
    }
    invokeUpdateTableObjects(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTableObjects(this.ops["UpdateTableObjects"].applicator.apply(partialParams));
    }
    invokeUpdateTableStorageOptimizer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTableStorageOptimizer(this.ops["UpdateTableStorageOptimizer"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
