
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AddLFTagsToResourceRequest,
    BatchGrantPermissionsRequest,
    BatchRevokePermissionsRequest,
    CancelTransactionRequest,
    CommitTransactionRequest,
    CreateDataCellsFilterRequest,
    CreateLFTagRequest,
    DeleteDataCellsFilterRequest,
    DeleteLFTagRequest,
    DeleteObjectsOnCancelRequest,
    DeregisterResourceRequest,
    DescribeResourceRequest,
    DescribeTransactionRequest,
    ExtendTransactionRequest,
    GetDataLakeSettingsRequest,
    GetEffectivePermissionsForPathRequest,
    GetLFTagRequest,
    GetQueryStateRequest,
    GetQueryStatisticsRequest,
    GetResourceLFTagsRequest,
    GetTableObjectsRequest,
    GetTemporaryGluePartitionCredentialsRequest,
    GetTemporaryGlueTableCredentialsRequest,
    GetWorkUnitResultsRequest,
    GetWorkUnitsRequest,
    GrantPermissionsRequest,
    ListDataCellsFilterRequest,
    ListLFTagsRequest,
    ListPermissionsRequest,
    ListResourcesRequest,
    ListTableStorageOptimizersRequest,
    ListTransactionsRequest,
    PutDataLakeSettingsRequest,
    RegisterResourceRequest,
    RemoveLFTagsFromResourceRequest,
    RevokePermissionsRequest,
    SearchDatabasesByLFTagsRequest,
    SearchTablesByLFTagsRequest,
    StartQueryPlanningRequest,
    StartTransactionRequest,
    UpdateLFTagRequest,
    UpdateResourceRequest,
    UpdateTableObjectsRequest,
    UpdateTableStorageOptimizerRequest,
    AddLFTagsToResourceResponse,
    BatchGrantPermissionsResponse,
    BatchRevokePermissionsResponse,
    CancelTransactionResponse,
    CommitTransactionResponse,
    CreateDataCellsFilterResponse,
    CreateLFTagResponse,
    DeleteDataCellsFilterResponse,
    DeleteLFTagResponse,
    DeleteObjectsOnCancelResponse,
    DeregisterResourceResponse,
    DescribeResourceResponse,
    DescribeTransactionResponse,
    ExtendTransactionResponse,
    GetDataLakeSettingsResponse,
    GetEffectivePermissionsForPathResponse,
    GetLFTagResponse,
    GetQueryStateResponse,
    GetQueryStatisticsResponse,
    GetResourceLFTagsResponse,
    GetTableObjectsResponse,
    GetTemporaryGluePartitionCredentialsResponse,
    GetTemporaryGlueTableCredentialsResponse,
    GetWorkUnitResultsResponse,
    GetWorkUnitsResponse,
    GrantPermissionsResponse,
    ListDataCellsFilterResponse,
    ListLFTagsResponse,
    ListPermissionsResponse,
    ListResourcesResponse,
    ListTableStorageOptimizersResponse,
    ListTransactionsResponse,
    PutDataLakeSettingsResponse,
    RegisterResourceResponse,
    RemoveLFTagsFromResourceResponse,
    RevokePermissionsResponse,
    SearchDatabasesByLFTagsResponse,
    SearchTablesByLFTagsResponse,
    StartQueryPlanningResponse,
    StartTransactionResponse,
    UpdateLFTagResponse,
    UpdateResourceResponse,
    UpdateTableObjectsResponse,
    UpdateTableStorageOptimizerResponse
} from "aws-sdk/clients/lakeformation";
const schema = require("../apis/lakeformation-2017-03-31.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.lakeformation.DataLakeSettings {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.lakeformation.DataLakeSettings>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.LakeFormation()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
        })
    }
    boot() {
        if (this.booted) {
          return;
        }
        Object.entries(this.capitalizedParams).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value.value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
        this.ops = getResourceOperations(this.capitalizedParams as any, schema);
        this.booted = true;
    }

    invokeAddLFTagsToResource(partialParams: ToOptional<{
      [K in keyof AddLFTagsToResourceRequest]: (AddLFTagsToResourceRequest)[K]
    }>): Request<AddLFTagsToResourceResponse, AWSError> {
        this.boot();
        return this.client.addLFTagsToResource(
          this.ops["AddLFTagsToResource"].apply(partialParams)
        );
    }

    invokeBatchGrantPermissions(partialParams: ToOptional<{
      [K in keyof BatchGrantPermissionsRequest]: (BatchGrantPermissionsRequest)[K]
    }>): Request<BatchGrantPermissionsResponse, AWSError> {
        this.boot();
        return this.client.batchGrantPermissions(
          this.ops["BatchGrantPermissions"].apply(partialParams)
        );
    }

    invokeBatchRevokePermissions(partialParams: ToOptional<{
      [K in keyof BatchRevokePermissionsRequest]: (BatchRevokePermissionsRequest)[K]
    }>): Request<BatchRevokePermissionsResponse, AWSError> {
        this.boot();
        return this.client.batchRevokePermissions(
          this.ops["BatchRevokePermissions"].apply(partialParams)
        );
    }

    invokeCancelTransaction(partialParams: ToOptional<{
      [K in keyof CancelTransactionRequest]: (CancelTransactionRequest)[K]
    }>): Request<CancelTransactionResponse, AWSError> {
        this.boot();
        return this.client.cancelTransaction(
          this.ops["CancelTransaction"].apply(partialParams)
        );
    }

    invokeCommitTransaction(partialParams: ToOptional<{
      [K in keyof CommitTransactionRequest]: (CommitTransactionRequest)[K]
    }>): Request<CommitTransactionResponse, AWSError> {
        this.boot();
        return this.client.commitTransaction(
          this.ops["CommitTransaction"].apply(partialParams)
        );
    }

    invokeCreateDataCellsFilter(partialParams: ToOptional<{
      [K in keyof CreateDataCellsFilterRequest]: (CreateDataCellsFilterRequest)[K]
    }>): Request<CreateDataCellsFilterResponse, AWSError> {
        this.boot();
        return this.client.createDataCellsFilter(
          this.ops["CreateDataCellsFilter"].apply(partialParams)
        );
    }

    invokeCreateLFTag(partialParams: ToOptional<{
      [K in keyof CreateLFTagRequest]: (CreateLFTagRequest)[K]
    }>): Request<CreateLFTagResponse, AWSError> {
        this.boot();
        return this.client.createLFTag(
          this.ops["CreateLFTag"].apply(partialParams)
        );
    }

    invokeDeleteDataCellsFilter(partialParams: ToOptional<{
      [K in keyof DeleteDataCellsFilterRequest]: (DeleteDataCellsFilterRequest)[K]
    }>): Request<DeleteDataCellsFilterResponse, AWSError> {
        this.boot();
        return this.client.deleteDataCellsFilter(
          this.ops["DeleteDataCellsFilter"].apply(partialParams)
        );
    }

    invokeDeleteLFTag(partialParams: ToOptional<{
      [K in keyof DeleteLFTagRequest]: (DeleteLFTagRequest)[K]
    }>): Request<DeleteLFTagResponse, AWSError> {
        this.boot();
        return this.client.deleteLFTag(
          this.ops["DeleteLFTag"].apply(partialParams)
        );
    }

    invokeDeleteObjectsOnCancel(partialParams: ToOptional<{
      [K in keyof DeleteObjectsOnCancelRequest]: (DeleteObjectsOnCancelRequest)[K]
    }>): Request<DeleteObjectsOnCancelResponse, AWSError> {
        this.boot();
        return this.client.deleteObjectsOnCancel(
          this.ops["DeleteObjectsOnCancel"].apply(partialParams)
        );
    }

    invokeDeregisterResource(partialParams: ToOptional<{
      [K in keyof DeregisterResourceRequest]: (DeregisterResourceRequest)[K]
    }>): Request<DeregisterResourceResponse, AWSError> {
        this.boot();
        return this.client.deregisterResource(
          this.ops["DeregisterResource"].apply(partialParams)
        );
    }

    invokeDescribeResource(partialParams: ToOptional<{
      [K in keyof DescribeResourceRequest]: (DescribeResourceRequest)[K]
    }>): Request<DescribeResourceResponse, AWSError> {
        this.boot();
        return this.client.describeResource(
          this.ops["DescribeResource"].apply(partialParams)
        );
    }

    invokeDescribeTransaction(partialParams: ToOptional<{
      [K in keyof DescribeTransactionRequest]: (DescribeTransactionRequest)[K]
    }>): Request<DescribeTransactionResponse, AWSError> {
        this.boot();
        return this.client.describeTransaction(
          this.ops["DescribeTransaction"].apply(partialParams)
        );
    }

    invokeExtendTransaction(partialParams: ToOptional<{
      [K in keyof ExtendTransactionRequest]: (ExtendTransactionRequest)[K]
    }>): Request<ExtendTransactionResponse, AWSError> {
        this.boot();
        return this.client.extendTransaction(
          this.ops["ExtendTransaction"].apply(partialParams)
        );
    }

    invokeGetDataLakeSettings(partialParams: ToOptional<{
      [K in keyof GetDataLakeSettingsRequest]: (GetDataLakeSettingsRequest)[K]
    }>): Request<GetDataLakeSettingsResponse, AWSError> {
        this.boot();
        return this.client.getDataLakeSettings(
          this.ops["GetDataLakeSettings"].apply(partialParams)
        );
    }

    invokeGetEffectivePermissionsForPath(partialParams: ToOptional<{
      [K in keyof GetEffectivePermissionsForPathRequest]: (GetEffectivePermissionsForPathRequest)[K]
    }>): Request<GetEffectivePermissionsForPathResponse, AWSError> {
        this.boot();
        return this.client.getEffectivePermissionsForPath(
          this.ops["GetEffectivePermissionsForPath"].apply(partialParams)
        );
    }

    invokeGetLFTag(partialParams: ToOptional<{
      [K in keyof GetLFTagRequest]: (GetLFTagRequest)[K]
    }>): Request<GetLFTagResponse, AWSError> {
        this.boot();
        return this.client.getLFTag(
          this.ops["GetLFTag"].apply(partialParams)
        );
    }

    invokeGetQueryState(partialParams: ToOptional<{
      [K in keyof GetQueryStateRequest]: (GetQueryStateRequest)[K]
    }>): Request<GetQueryStateResponse, AWSError> {
        this.boot();
        return this.client.getQueryState(
          this.ops["GetQueryState"].apply(partialParams)
        );
    }

    invokeGetQueryStatistics(partialParams: ToOptional<{
      [K in keyof GetQueryStatisticsRequest]: (GetQueryStatisticsRequest)[K]
    }>): Request<GetQueryStatisticsResponse, AWSError> {
        this.boot();
        return this.client.getQueryStatistics(
          this.ops["GetQueryStatistics"].apply(partialParams)
        );
    }

    invokeGetResourceLFTags(partialParams: ToOptional<{
      [K in keyof GetResourceLFTagsRequest]: (GetResourceLFTagsRequest)[K]
    }>): Request<GetResourceLFTagsResponse, AWSError> {
        this.boot();
        return this.client.getResourceLFTags(
          this.ops["GetResourceLFTags"].apply(partialParams)
        );
    }

    invokeGetTableObjects(partialParams: ToOptional<{
      [K in keyof GetTableObjectsRequest]: (GetTableObjectsRequest)[K]
    }>): Request<GetTableObjectsResponse, AWSError> {
        this.boot();
        return this.client.getTableObjects(
          this.ops["GetTableObjects"].apply(partialParams)
        );
    }

    invokeGetTemporaryGluePartitionCredentials(partialParams: ToOptional<{
      [K in keyof GetTemporaryGluePartitionCredentialsRequest]: (GetTemporaryGluePartitionCredentialsRequest)[K]
    }>): Request<GetTemporaryGluePartitionCredentialsResponse, AWSError> {
        this.boot();
        return this.client.getTemporaryGluePartitionCredentials(
          this.ops["GetTemporaryGluePartitionCredentials"].apply(partialParams)
        );
    }

    invokeGetTemporaryGlueTableCredentials(partialParams: ToOptional<{
      [K in keyof GetTemporaryGlueTableCredentialsRequest]: (GetTemporaryGlueTableCredentialsRequest)[K]
    }>): Request<GetTemporaryGlueTableCredentialsResponse, AWSError> {
        this.boot();
        return this.client.getTemporaryGlueTableCredentials(
          this.ops["GetTemporaryGlueTableCredentials"].apply(partialParams)
        );
    }

    invokeGetWorkUnitResults(partialParams: ToOptional<{
      [K in keyof GetWorkUnitResultsRequest]: (GetWorkUnitResultsRequest)[K]
    }>): Request<GetWorkUnitResultsResponse, AWSError> {
        this.boot();
        return this.client.getWorkUnitResults(
          this.ops["GetWorkUnitResults"].apply(partialParams)
        );
    }

    invokeGetWorkUnits(partialParams: ToOptional<{
      [K in keyof GetWorkUnitsRequest]: (GetWorkUnitsRequest)[K]
    }>): Request<GetWorkUnitsResponse, AWSError> {
        this.boot();
        return this.client.getWorkUnits(
          this.ops["GetWorkUnits"].apply(partialParams)
        );
    }

    invokeGrantPermissions(partialParams: ToOptional<{
      [K in keyof GrantPermissionsRequest]: (GrantPermissionsRequest)[K]
    }>): Request<GrantPermissionsResponse, AWSError> {
        this.boot();
        return this.client.grantPermissions(
          this.ops["GrantPermissions"].apply(partialParams)
        );
    }

    invokeListDataCellsFilter(partialParams: ToOptional<{
      [K in keyof ListDataCellsFilterRequest]: (ListDataCellsFilterRequest)[K]
    }>): Request<ListDataCellsFilterResponse, AWSError> {
        this.boot();
        return this.client.listDataCellsFilter(
          this.ops["ListDataCellsFilter"].apply(partialParams)
        );
    }

    invokeListLFTags(partialParams: ToOptional<{
      [K in keyof ListLFTagsRequest]: (ListLFTagsRequest)[K]
    }>): Request<ListLFTagsResponse, AWSError> {
        this.boot();
        return this.client.listLFTags(
          this.ops["ListLFTags"].apply(partialParams)
        );
    }

    invokeListPermissions(partialParams: ToOptional<{
      [K in keyof ListPermissionsRequest]: (ListPermissionsRequest)[K]
    }>): Request<ListPermissionsResponse, AWSError> {
        this.boot();
        return this.client.listPermissions(
          this.ops["ListPermissions"].apply(partialParams)
        );
    }

    invokeListResources(partialParams: ToOptional<{
      [K in keyof ListResourcesRequest]: (ListResourcesRequest)[K]
    }>): Request<ListResourcesResponse, AWSError> {
        this.boot();
        return this.client.listResources(
          this.ops["ListResources"].apply(partialParams)
        );
    }

    invokeListTableStorageOptimizers(partialParams: ToOptional<{
      [K in keyof ListTableStorageOptimizersRequest]: (ListTableStorageOptimizersRequest)[K]
    }>): Request<ListTableStorageOptimizersResponse, AWSError> {
        this.boot();
        return this.client.listTableStorageOptimizers(
          this.ops["ListTableStorageOptimizers"].apply(partialParams)
        );
    }

    invokeListTransactions(partialParams: ToOptional<{
      [K in keyof ListTransactionsRequest]: (ListTransactionsRequest)[K]
    }>): Request<ListTransactionsResponse, AWSError> {
        this.boot();
        return this.client.listTransactions(
          this.ops["ListTransactions"].apply(partialParams)
        );
    }

    invokePutDataLakeSettings(partialParams: ToOptional<{
      [K in keyof PutDataLakeSettingsRequest]: (PutDataLakeSettingsRequest)[K]
    }>): Request<PutDataLakeSettingsResponse, AWSError> {
        this.boot();
        return this.client.putDataLakeSettings(
          this.ops["PutDataLakeSettings"].apply(partialParams)
        );
    }

    invokeRegisterResource(partialParams: ToOptional<{
      [K in keyof RegisterResourceRequest]: (RegisterResourceRequest)[K]
    }>): Request<RegisterResourceResponse, AWSError> {
        this.boot();
        return this.client.registerResource(
          this.ops["RegisterResource"].apply(partialParams)
        );
    }

    invokeRemoveLFTagsFromResource(partialParams: ToOptional<{
      [K in keyof RemoveLFTagsFromResourceRequest]: (RemoveLFTagsFromResourceRequest)[K]
    }>): Request<RemoveLFTagsFromResourceResponse, AWSError> {
        this.boot();
        return this.client.removeLFTagsFromResource(
          this.ops["RemoveLFTagsFromResource"].apply(partialParams)
        );
    }

    invokeRevokePermissions(partialParams: ToOptional<{
      [K in keyof RevokePermissionsRequest]: (RevokePermissionsRequest)[K]
    }>): Request<RevokePermissionsResponse, AWSError> {
        this.boot();
        return this.client.revokePermissions(
          this.ops["RevokePermissions"].apply(partialParams)
        );
    }

    invokeSearchDatabasesByLFTags(partialParams: ToOptional<{
      [K in keyof SearchDatabasesByLFTagsRequest]: (SearchDatabasesByLFTagsRequest)[K]
    }>): Request<SearchDatabasesByLFTagsResponse, AWSError> {
        this.boot();
        return this.client.searchDatabasesByLFTags(
          this.ops["SearchDatabasesByLFTags"].apply(partialParams)
        );
    }

    invokeSearchTablesByLFTags(partialParams: ToOptional<{
      [K in keyof SearchTablesByLFTagsRequest]: (SearchTablesByLFTagsRequest)[K]
    }>): Request<SearchTablesByLFTagsResponse, AWSError> {
        this.boot();
        return this.client.searchTablesByLFTags(
          this.ops["SearchTablesByLFTags"].apply(partialParams)
        );
    }

    invokeStartQueryPlanning(partialParams: ToOptional<{
      [K in keyof StartQueryPlanningRequest]: (StartQueryPlanningRequest)[K]
    }>): Request<StartQueryPlanningResponse, AWSError> {
        this.boot();
        return this.client.startQueryPlanning(
          this.ops["StartQueryPlanning"].apply(partialParams)
        );
    }

    invokeStartTransaction(partialParams: ToOptional<{
      [K in keyof StartTransactionRequest]: (StartTransactionRequest)[K]
    }>): Request<StartTransactionResponse, AWSError> {
        this.boot();
        return this.client.startTransaction(
          this.ops["StartTransaction"].apply(partialParams)
        );
    }

    invokeUpdateLFTag(partialParams: ToOptional<{
      [K in keyof UpdateLFTagRequest]: (UpdateLFTagRequest)[K]
    }>): Request<UpdateLFTagResponse, AWSError> {
        this.boot();
        return this.client.updateLFTag(
          this.ops["UpdateLFTag"].apply(partialParams)
        );
    }

    invokeUpdateResource(partialParams: ToOptional<{
      [K in keyof UpdateResourceRequest]: (UpdateResourceRequest)[K]
    }>): Request<UpdateResourceResponse, AWSError> {
        this.boot();
        return this.client.updateResource(
          this.ops["UpdateResource"].apply(partialParams)
        );
    }

    invokeUpdateTableObjects(partialParams: ToOptional<{
      [K in keyof UpdateTableObjectsRequest]: (UpdateTableObjectsRequest)[K]
    }>): Request<UpdateTableObjectsResponse, AWSError> {
        this.boot();
        return this.client.updateTableObjects(
          this.ops["UpdateTableObjects"].apply(partialParams)
        );
    }

    invokeUpdateTableStorageOptimizer(partialParams: ToOptional<{
      [K in keyof UpdateTableStorageOptimizerRequest]: (UpdateTableStorageOptimizerRequest)[K]
    }>): Request<UpdateTableStorageOptimizerResponse, AWSError> {
        this.boot();
        return this.client.updateTableStorageOptimizer(
          this.ops["UpdateTableStorageOptimizer"].apply(partialParams)
        );
    }
}