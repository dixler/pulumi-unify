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
class default_1 extends aws.lakeformation.Resource {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.LakeFormation();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/lakeformation-2017-03-31.normal.json"), this.client);
    }
    invokeAddLFTagsToResource(partialParams) {
        return this.client.addLFTagsToResource(this.ops["AddLFTagsToResource"].apply(partialParams));
    }
    invokeBatchGrantPermissions(partialParams) {
        return this.client.batchGrantPermissions(this.ops["BatchGrantPermissions"].apply(partialParams));
    }
    invokeBatchRevokePermissions(partialParams) {
        return this.client.batchRevokePermissions(this.ops["BatchRevokePermissions"].apply(partialParams));
    }
    invokeCancelTransaction(partialParams) {
        return this.client.cancelTransaction(this.ops["CancelTransaction"].apply(partialParams));
    }
    invokeCommitTransaction(partialParams) {
        return this.client.commitTransaction(this.ops["CommitTransaction"].apply(partialParams));
    }
    invokeCreateDataCellsFilter(partialParams) {
        return this.client.createDataCellsFilter(this.ops["CreateDataCellsFilter"].apply(partialParams));
    }
    invokeCreateLFTag(partialParams) {
        return this.client.createLFTag(this.ops["CreateLFTag"].apply(partialParams));
    }
    invokeDeleteLFTag(partialParams) {
        return this.client.deleteLFTag(this.ops["DeleteLFTag"].apply(partialParams));
    }
    invokeDeleteObjectsOnCancel(partialParams) {
        return this.client.deleteObjectsOnCancel(this.ops["DeleteObjectsOnCancel"].apply(partialParams));
    }
    invokeDeregisterResource(partialParams) {
        return this.client.deregisterResource(this.ops["DeregisterResource"].apply(partialParams));
    }
    invokeDescribeResource(partialParams) {
        return this.client.describeResource(this.ops["DescribeResource"].apply(partialParams));
    }
    invokeDescribeTransaction(partialParams) {
        return this.client.describeTransaction(this.ops["DescribeTransaction"].apply(partialParams));
    }
    invokeGetEffectivePermissionsForPath(partialParams) {
        return this.client.getEffectivePermissionsForPath(this.ops["GetEffectivePermissionsForPath"].apply(partialParams));
    }
    invokeGetLFTag(partialParams) {
        return this.client.getLFTag(this.ops["GetLFTag"].apply(partialParams));
    }
    invokeGetQueryState(partialParams) {
        return this.client.getQueryState(this.ops["GetQueryState"].apply(partialParams));
    }
    invokeGetQueryStatistics(partialParams) {
        return this.client.getQueryStatistics(this.ops["GetQueryStatistics"].apply(partialParams));
    }
    invokeGetResourceLFTags(partialParams) {
        return this.client.getResourceLFTags(this.ops["GetResourceLFTags"].apply(partialParams));
    }
    invokeGetTableObjects(partialParams) {
        return this.client.getTableObjects(this.ops["GetTableObjects"].apply(partialParams));
    }
    invokeGetTemporaryGluePartitionCredentials(partialParams) {
        return this.client.getTemporaryGluePartitionCredentials(this.ops["GetTemporaryGluePartitionCredentials"].apply(partialParams));
    }
    invokeGetTemporaryGlueTableCredentials(partialParams) {
        return this.client.getTemporaryGlueTableCredentials(this.ops["GetTemporaryGlueTableCredentials"].apply(partialParams));
    }
    invokeGetWorkUnitResults(partialParams) {
        return this.client.getWorkUnitResults(this.ops["GetWorkUnitResults"].apply(partialParams));
    }
    invokeGetWorkUnits(partialParams) {
        return this.client.getWorkUnits(this.ops["GetWorkUnits"].apply(partialParams));
    }
    invokeGrantPermissions(partialParams) {
        return this.client.grantPermissions(this.ops["GrantPermissions"].apply(partialParams));
    }
    invokeListTableStorageOptimizers(partialParams) {
        return this.client.listTableStorageOptimizers(this.ops["ListTableStorageOptimizers"].apply(partialParams));
    }
    invokePutDataLakeSettings(partialParams) {
        return this.client.putDataLakeSettings(this.ops["PutDataLakeSettings"].apply(partialParams));
    }
    invokeRegisterResource(partialParams) {
        return this.client.registerResource(this.ops["RegisterResource"].apply(partialParams));
    }
    invokeRemoveLFTagsFromResource(partialParams) {
        return this.client.removeLFTagsFromResource(this.ops["RemoveLFTagsFromResource"].apply(partialParams));
    }
    invokeRevokePermissions(partialParams) {
        return this.client.revokePermissions(this.ops["RevokePermissions"].apply(partialParams));
    }
    invokeSearchDatabasesByLFTags(partialParams) {
        return this.client.searchDatabasesByLFTags(this.ops["SearchDatabasesByLFTags"].apply(partialParams));
    }
    invokeSearchTablesByLFTags(partialParams) {
        return this.client.searchTablesByLFTags(this.ops["SearchTablesByLFTags"].apply(partialParams));
    }
    invokeStartQueryPlanning(partialParams) {
        return this.client.startQueryPlanning(this.ops["StartQueryPlanning"].apply(partialParams));
    }
    invokeUpdateLFTag(partialParams) {
        return this.client.updateLFTag(this.ops["UpdateLFTag"].apply(partialParams));
    }
    invokeUpdateResource(partialParams) {
        return this.client.updateResource(this.ops["UpdateResource"].apply(partialParams));
    }
    invokeUpdateTableObjects(partialParams) {
        return this.client.updateTableObjects(this.ops["UpdateTableObjects"].apply(partialParams));
    }
    invokeUpdateTableStorageOptimizer(partialParams) {
        return this.client.updateTableStorageOptimizer(this.ops["UpdateTableStorageOptimizer"].apply(partialParams));
    }
}
exports.default = default_1;
