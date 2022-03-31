
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
    DeleteLFTagRequest,
    DeleteObjectsOnCancelRequest,
    DeregisterResourceRequest,
    DescribeResourceRequest,
    DescribeTransactionRequest,
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
    ListTableStorageOptimizersRequest,
    PutDataLakeSettingsRequest,
    RegisterResourceRequest,
    RemoveLFTagsFromResourceRequest,
    RevokePermissionsRequest,
    SearchDatabasesByLFTagsRequest,
    SearchTablesByLFTagsRequest,
    StartQueryPlanningRequest,
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
    DeleteLFTagResponse,
    DeleteObjectsOnCancelResponse,
    DeregisterResourceResponse,
    DescribeResourceResponse,
    DescribeTransactionResponse,
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
    ListTableStorageOptimizersResponse,
    PutDataLakeSettingsResponse,
    RegisterResourceResponse,
    RemoveLFTagsFromResourceResponse,
    RevokePermissionsResponse,
    SearchDatabasesByLFTagsResponse,
    SearchTablesByLFTagsResponse,
    StartQueryPlanningResponse,
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

export default class extends aws.lakeformation.Permissions {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.lakeformation.Permissions>) {
        super(...args)
        this.client = new awssdk.LakeFormation()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
    }
    boot() {
        Object.entries(this.capitalizedParams).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value.value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
        this.ops = getResourceOperations(this.capitalizedParams as any, schema, this.client)
    }

    invokeAddLFTagsToResource(partialParams: ToOptional<{
      [K in keyof AddLFTagsToResourceRequest & keyof AddLFTagsToResourceRequest]: (AddLFTagsToResourceRequest & AddLFTagsToResourceRequest)[K]
    }>): Request<AddLFTagsToResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addLFTagsToResource(
          this.ops["AddLFTagsToResource"].applicator.apply(partialParams)
        );
    }

    invokeBatchGrantPermissions(partialParams: ToOptional<{
      [K in keyof BatchGrantPermissionsRequest & keyof BatchGrantPermissionsRequest]: (BatchGrantPermissionsRequest & BatchGrantPermissionsRequest)[K]
    }>): Request<BatchGrantPermissionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGrantPermissions(
          this.ops["BatchGrantPermissions"].applicator.apply(partialParams)
        );
    }

    invokeBatchRevokePermissions(partialParams: ToOptional<{
      [K in keyof BatchRevokePermissionsRequest & keyof BatchRevokePermissionsRequest]: (BatchRevokePermissionsRequest & BatchRevokePermissionsRequest)[K]
    }>): Request<BatchRevokePermissionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchRevokePermissions(
          this.ops["BatchRevokePermissions"].applicator.apply(partialParams)
        );
    }

    invokeCancelTransaction(partialParams: ToOptional<{
      [K in keyof CancelTransactionRequest & keyof CancelTransactionRequest]: (CancelTransactionRequest & CancelTransactionRequest)[K]
    }>): Request<CancelTransactionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelTransaction(
          this.ops["CancelTransaction"].applicator.apply(partialParams)
        );
    }

    invokeCommitTransaction(partialParams: ToOptional<{
      [K in keyof CommitTransactionRequest & keyof CommitTransactionRequest]: (CommitTransactionRequest & CommitTransactionRequest)[K]
    }>): Request<CommitTransactionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.commitTransaction(
          this.ops["CommitTransaction"].applicator.apply(partialParams)
        );
    }

    invokeCreateDataCellsFilter(partialParams: ToOptional<{
      [K in keyof CreateDataCellsFilterRequest & keyof CreateDataCellsFilterRequest]: (CreateDataCellsFilterRequest & CreateDataCellsFilterRequest)[K]
    }>): Request<CreateDataCellsFilterResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDataCellsFilter(
          this.ops["CreateDataCellsFilter"].applicator.apply(partialParams)
        );
    }

    invokeCreateLFTag(partialParams: ToOptional<{
      [K in keyof CreateLFTagRequest & keyof CreateLFTagRequest]: (CreateLFTagRequest & CreateLFTagRequest)[K]
    }>): Request<CreateLFTagResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createLFTag(
          this.ops["CreateLFTag"].applicator.apply(partialParams)
        );
    }

    invokeDeleteLFTag(partialParams: ToOptional<{
      [K in keyof DeleteLFTagRequest & keyof DeleteLFTagRequest]: (DeleteLFTagRequest & DeleteLFTagRequest)[K]
    }>): Request<DeleteLFTagResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteLFTag(
          this.ops["DeleteLFTag"].applicator.apply(partialParams)
        );
    }

    invokeDeleteObjectsOnCancel(partialParams: ToOptional<{
      [K in keyof DeleteObjectsOnCancelRequest & keyof DeleteObjectsOnCancelRequest]: (DeleteObjectsOnCancelRequest & DeleteObjectsOnCancelRequest)[K]
    }>): Request<DeleteObjectsOnCancelResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteObjectsOnCancel(
          this.ops["DeleteObjectsOnCancel"].applicator.apply(partialParams)
        );
    }

    invokeDeregisterResource(partialParams: ToOptional<{
      [K in keyof DeregisterResourceRequest & keyof DeregisterResourceRequest]: (DeregisterResourceRequest & DeregisterResourceRequest)[K]
    }>): Request<DeregisterResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterResource(
          this.ops["DeregisterResource"].applicator.apply(partialParams)
        );
    }

    invokeDescribeResource(partialParams: ToOptional<{
      [K in keyof DescribeResourceRequest & keyof DescribeResourceRequest]: (DescribeResourceRequest & DescribeResourceRequest)[K]
    }>): Request<DescribeResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeResource(
          this.ops["DescribeResource"].applicator.apply(partialParams)
        );
    }

    invokeDescribeTransaction(partialParams: ToOptional<{
      [K in keyof DescribeTransactionRequest & keyof DescribeTransactionRequest]: (DescribeTransactionRequest & DescribeTransactionRequest)[K]
    }>): Request<DescribeTransactionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTransaction(
          this.ops["DescribeTransaction"].applicator.apply(partialParams)
        );
    }

    invokeGetEffectivePermissionsForPath(partialParams: ToOptional<{
      [K in keyof GetEffectivePermissionsForPathRequest & keyof GetEffectivePermissionsForPathRequest]: (GetEffectivePermissionsForPathRequest & GetEffectivePermissionsForPathRequest)[K]
    }>): Request<GetEffectivePermissionsForPathResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getEffectivePermissionsForPath(
          this.ops["GetEffectivePermissionsForPath"].applicator.apply(partialParams)
        );
    }

    invokeGetLFTag(partialParams: ToOptional<{
      [K in keyof GetLFTagRequest & keyof GetLFTagRequest]: (GetLFTagRequest & GetLFTagRequest)[K]
    }>): Request<GetLFTagResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getLFTag(
          this.ops["GetLFTag"].applicator.apply(partialParams)
        );
    }

    invokeGetQueryState(partialParams: ToOptional<{
      [K in keyof GetQueryStateRequest & keyof GetQueryStateRequest]: (GetQueryStateRequest & GetQueryStateRequest)[K]
    }>): Request<GetQueryStateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getQueryState(
          this.ops["GetQueryState"].applicator.apply(partialParams)
        );
    }

    invokeGetQueryStatistics(partialParams: ToOptional<{
      [K in keyof GetQueryStatisticsRequest & keyof GetQueryStatisticsRequest]: (GetQueryStatisticsRequest & GetQueryStatisticsRequest)[K]
    }>): Request<GetQueryStatisticsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getQueryStatistics(
          this.ops["GetQueryStatistics"].applicator.apply(partialParams)
        );
    }

    invokeGetResourceLFTags(partialParams: ToOptional<{
      [K in keyof GetResourceLFTagsRequest & keyof GetResourceLFTagsRequest]: (GetResourceLFTagsRequest & GetResourceLFTagsRequest)[K]
    }>): Request<GetResourceLFTagsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getResourceLFTags(
          this.ops["GetResourceLFTags"].applicator.apply(partialParams)
        );
    }

    invokeGetTableObjects(partialParams: ToOptional<{
      [K in keyof GetTableObjectsRequest & keyof GetTableObjectsRequest]: (GetTableObjectsRequest & GetTableObjectsRequest)[K]
    }>): Request<GetTableObjectsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTableObjects(
          this.ops["GetTableObjects"].applicator.apply(partialParams)
        );
    }

    invokeGetTemporaryGluePartitionCredentials(partialParams: ToOptional<{
      [K in keyof GetTemporaryGluePartitionCredentialsRequest & keyof GetTemporaryGluePartitionCredentialsRequest]: (GetTemporaryGluePartitionCredentialsRequest & GetTemporaryGluePartitionCredentialsRequest)[K]
    }>): Request<GetTemporaryGluePartitionCredentialsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTemporaryGluePartitionCredentials(
          this.ops["GetTemporaryGluePartitionCredentials"].applicator.apply(partialParams)
        );
    }

    invokeGetTemporaryGlueTableCredentials(partialParams: ToOptional<{
      [K in keyof GetTemporaryGlueTableCredentialsRequest & keyof GetTemporaryGlueTableCredentialsRequest]: (GetTemporaryGlueTableCredentialsRequest & GetTemporaryGlueTableCredentialsRequest)[K]
    }>): Request<GetTemporaryGlueTableCredentialsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTemporaryGlueTableCredentials(
          this.ops["GetTemporaryGlueTableCredentials"].applicator.apply(partialParams)
        );
    }

    invokeGetWorkUnitResults(partialParams: ToOptional<{
      [K in keyof GetWorkUnitResultsRequest & keyof GetWorkUnitResultsRequest]: (GetWorkUnitResultsRequest & GetWorkUnitResultsRequest)[K]
    }>): Request<GetWorkUnitResultsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getWorkUnitResults(
          this.ops["GetWorkUnitResults"].applicator.apply(partialParams)
        );
    }

    invokeGetWorkUnits(partialParams: ToOptional<{
      [K in keyof GetWorkUnitsRequest & keyof GetWorkUnitsRequest]: (GetWorkUnitsRequest & GetWorkUnitsRequest)[K]
    }>): Request<GetWorkUnitsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getWorkUnits(
          this.ops["GetWorkUnits"].applicator.apply(partialParams)
        );
    }

    invokeGrantPermissions(partialParams: ToOptional<{
      [K in keyof GrantPermissionsRequest & keyof GrantPermissionsRequest]: (GrantPermissionsRequest & GrantPermissionsRequest)[K]
    }>): Request<GrantPermissionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.grantPermissions(
          this.ops["GrantPermissions"].applicator.apply(partialParams)
        );
    }

    invokeListTableStorageOptimizers(partialParams: ToOptional<{
      [K in keyof ListTableStorageOptimizersRequest & keyof ListTableStorageOptimizersRequest]: (ListTableStorageOptimizersRequest & ListTableStorageOptimizersRequest)[K]
    }>): Request<ListTableStorageOptimizersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTableStorageOptimizers(
          this.ops["ListTableStorageOptimizers"].applicator.apply(partialParams)
        );
    }

    invokePutDataLakeSettings(partialParams: ToOptional<{
      [K in keyof PutDataLakeSettingsRequest & keyof PutDataLakeSettingsRequest]: (PutDataLakeSettingsRequest & PutDataLakeSettingsRequest)[K]
    }>): Request<PutDataLakeSettingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putDataLakeSettings(
          this.ops["PutDataLakeSettings"].applicator.apply(partialParams)
        );
    }

    invokeRegisterResource(partialParams: ToOptional<{
      [K in keyof RegisterResourceRequest & keyof RegisterResourceRequest]: (RegisterResourceRequest & RegisterResourceRequest)[K]
    }>): Request<RegisterResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerResource(
          this.ops["RegisterResource"].applicator.apply(partialParams)
        );
    }

    invokeRemoveLFTagsFromResource(partialParams: ToOptional<{
      [K in keyof RemoveLFTagsFromResourceRequest & keyof RemoveLFTagsFromResourceRequest]: (RemoveLFTagsFromResourceRequest & RemoveLFTagsFromResourceRequest)[K]
    }>): Request<RemoveLFTagsFromResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeLFTagsFromResource(
          this.ops["RemoveLFTagsFromResource"].applicator.apply(partialParams)
        );
    }

    invokeRevokePermissions(partialParams: ToOptional<{
      [K in keyof RevokePermissionsRequest & keyof RevokePermissionsRequest]: (RevokePermissionsRequest & RevokePermissionsRequest)[K]
    }>): Request<RevokePermissionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.revokePermissions(
          this.ops["RevokePermissions"].applicator.apply(partialParams)
        );
    }

    invokeSearchDatabasesByLFTags(partialParams: ToOptional<{
      [K in keyof SearchDatabasesByLFTagsRequest & keyof SearchDatabasesByLFTagsRequest]: (SearchDatabasesByLFTagsRequest & SearchDatabasesByLFTagsRequest)[K]
    }>): Request<SearchDatabasesByLFTagsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.searchDatabasesByLFTags(
          this.ops["SearchDatabasesByLFTags"].applicator.apply(partialParams)
        );
    }

    invokeSearchTablesByLFTags(partialParams: ToOptional<{
      [K in keyof SearchTablesByLFTagsRequest & keyof SearchTablesByLFTagsRequest]: (SearchTablesByLFTagsRequest & SearchTablesByLFTagsRequest)[K]
    }>): Request<SearchTablesByLFTagsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.searchTablesByLFTags(
          this.ops["SearchTablesByLFTags"].applicator.apply(partialParams)
        );
    }

    invokeStartQueryPlanning(partialParams: ToOptional<{
      [K in keyof StartQueryPlanningRequest & keyof StartQueryPlanningRequest]: (StartQueryPlanningRequest & StartQueryPlanningRequest)[K]
    }>): Request<StartQueryPlanningResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startQueryPlanning(
          this.ops["StartQueryPlanning"].applicator.apply(partialParams)
        );
    }

    invokeUpdateLFTag(partialParams: ToOptional<{
      [K in keyof UpdateLFTagRequest & keyof UpdateLFTagRequest]: (UpdateLFTagRequest & UpdateLFTagRequest)[K]
    }>): Request<UpdateLFTagResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateLFTag(
          this.ops["UpdateLFTag"].applicator.apply(partialParams)
        );
    }

    invokeUpdateResource(partialParams: ToOptional<{
      [K in keyof UpdateResourceRequest & keyof UpdateResourceRequest]: (UpdateResourceRequest & UpdateResourceRequest)[K]
    }>): Request<UpdateResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateResource(
          this.ops["UpdateResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateTableObjects(partialParams: ToOptional<{
      [K in keyof UpdateTableObjectsRequest & keyof UpdateTableObjectsRequest]: (UpdateTableObjectsRequest & UpdateTableObjectsRequest)[K]
    }>): Request<UpdateTableObjectsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTableObjects(
          this.ops["UpdateTableObjects"].applicator.apply(partialParams)
        );
    }

    invokeUpdateTableStorageOptimizer(partialParams: ToOptional<{
      [K in keyof UpdateTableStorageOptimizerRequest & keyof UpdateTableStorageOptimizerRequest]: (UpdateTableStorageOptimizerRequest & UpdateTableStorageOptimizerRequest)[K]
    }>): Request<UpdateTableStorageOptimizerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTableStorageOptimizer(
          this.ops["UpdateTableStorageOptimizer"].applicator.apply(partialParams)
        );
    }
}