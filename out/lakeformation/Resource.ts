
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.lakeformation.Resource {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.lakeformation.Resource>) {
        super(...args)
        this.client = new awssdk.LakeFormation()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/lakeformation-2017-03-31.normal.json"), this.client)
    }

    invokeAddLFTagsToResource(partialParams: ToOptional<{
      [K in keyof AddLFTagsToResourceRequest & keyof AddLFTagsToResourceRequest & keyof AddLFTagsToResourceRequest]: (AddLFTagsToResourceRequest & AddLFTagsToResourceRequest & AddLFTagsToResourceRequest)[K]
    }>): AddLFTagsToResourceResponse {
        return this.client.addLFTagsToResource(
            this.ops["AddLFTagsToResource"].apply(partialParams)
        );
    }

    invokeBatchGrantPermissions(partialParams: ToOptional<{
      [K in keyof BatchGrantPermissionsRequest & keyof BatchGrantPermissionsRequest & keyof BatchGrantPermissionsRequest]: (BatchGrantPermissionsRequest & BatchGrantPermissionsRequest & BatchGrantPermissionsRequest)[K]
    }>): BatchGrantPermissionsResponse {
        return this.client.batchGrantPermissions(
            this.ops["BatchGrantPermissions"].apply(partialParams)
        );
    }

    invokeBatchRevokePermissions(partialParams: ToOptional<{
      [K in keyof BatchRevokePermissionsRequest & keyof BatchRevokePermissionsRequest & keyof BatchRevokePermissionsRequest]: (BatchRevokePermissionsRequest & BatchRevokePermissionsRequest & BatchRevokePermissionsRequest)[K]
    }>): BatchRevokePermissionsResponse {
        return this.client.batchRevokePermissions(
            this.ops["BatchRevokePermissions"].apply(partialParams)
        );
    }

    invokeCancelTransaction(partialParams: ToOptional<{
      [K in keyof CancelTransactionRequest & keyof CancelTransactionRequest & keyof CancelTransactionRequest]: (CancelTransactionRequest & CancelTransactionRequest & CancelTransactionRequest)[K]
    }>): CancelTransactionResponse {
        return this.client.cancelTransaction(
            this.ops["CancelTransaction"].apply(partialParams)
        );
    }

    invokeCommitTransaction(partialParams: ToOptional<{
      [K in keyof CommitTransactionRequest & keyof CommitTransactionRequest & keyof CommitTransactionRequest]: (CommitTransactionRequest & CommitTransactionRequest & CommitTransactionRequest)[K]
    }>): CommitTransactionResponse {
        return this.client.commitTransaction(
            this.ops["CommitTransaction"].apply(partialParams)
        );
    }

    invokeCreateDataCellsFilter(partialParams: ToOptional<{
      [K in keyof CreateDataCellsFilterRequest & keyof CreateDataCellsFilterRequest & keyof CreateDataCellsFilterRequest]: (CreateDataCellsFilterRequest & CreateDataCellsFilterRequest & CreateDataCellsFilterRequest)[K]
    }>): CreateDataCellsFilterResponse {
        return this.client.createDataCellsFilter(
            this.ops["CreateDataCellsFilter"].apply(partialParams)
        );
    }

    invokeCreateLFTag(partialParams: ToOptional<{
      [K in keyof CreateLFTagRequest & keyof CreateLFTagRequest & keyof CreateLFTagRequest]: (CreateLFTagRequest & CreateLFTagRequest & CreateLFTagRequest)[K]
    }>): CreateLFTagResponse {
        return this.client.createLFTag(
            this.ops["CreateLFTag"].apply(partialParams)
        );
    }

    invokeDeleteLFTag(partialParams: ToOptional<{
      [K in keyof DeleteLFTagRequest & keyof DeleteLFTagRequest & keyof DeleteLFTagRequest]: (DeleteLFTagRequest & DeleteLFTagRequest & DeleteLFTagRequest)[K]
    }>): DeleteLFTagResponse {
        return this.client.deleteLFTag(
            this.ops["DeleteLFTag"].apply(partialParams)
        );
    }

    invokeDeleteObjectsOnCancel(partialParams: ToOptional<{
      [K in keyof DeleteObjectsOnCancelRequest & keyof DeleteObjectsOnCancelRequest & keyof DeleteObjectsOnCancelRequest]: (DeleteObjectsOnCancelRequest & DeleteObjectsOnCancelRequest & DeleteObjectsOnCancelRequest)[K]
    }>): DeleteObjectsOnCancelResponse {
        return this.client.deleteObjectsOnCancel(
            this.ops["DeleteObjectsOnCancel"].apply(partialParams)
        );
    }

    invokeDeregisterResource(partialParams: ToOptional<{
      [K in keyof DeregisterResourceRequest & keyof DeregisterResourceRequest & keyof DeregisterResourceRequest]: (DeregisterResourceRequest & DeregisterResourceRequest & DeregisterResourceRequest)[K]
    }>): DeregisterResourceResponse {
        return this.client.deregisterResource(
            this.ops["DeregisterResource"].apply(partialParams)
        );
    }

    invokeDescribeResource(partialParams: ToOptional<{
      [K in keyof DescribeResourceRequest & keyof DescribeResourceRequest & keyof DescribeResourceRequest]: (DescribeResourceRequest & DescribeResourceRequest & DescribeResourceRequest)[K]
    }>): DescribeResourceResponse {
        return this.client.describeResource(
            this.ops["DescribeResource"].apply(partialParams)
        );
    }

    invokeDescribeTransaction(partialParams: ToOptional<{
      [K in keyof DescribeTransactionRequest & keyof DescribeTransactionRequest & keyof DescribeTransactionRequest]: (DescribeTransactionRequest & DescribeTransactionRequest & DescribeTransactionRequest)[K]
    }>): DescribeTransactionResponse {
        return this.client.describeTransaction(
            this.ops["DescribeTransaction"].apply(partialParams)
        );
    }

    invokeGetEffectivePermissionsForPath(partialParams: ToOptional<{
      [K in keyof GetEffectivePermissionsForPathRequest & keyof GetEffectivePermissionsForPathRequest & keyof GetEffectivePermissionsForPathRequest]: (GetEffectivePermissionsForPathRequest & GetEffectivePermissionsForPathRequest & GetEffectivePermissionsForPathRequest)[K]
    }>): GetEffectivePermissionsForPathResponse {
        return this.client.getEffectivePermissionsForPath(
            this.ops["GetEffectivePermissionsForPath"].apply(partialParams)
        );
    }

    invokeGetLFTag(partialParams: ToOptional<{
      [K in keyof GetLFTagRequest & keyof GetLFTagRequest & keyof GetLFTagRequest]: (GetLFTagRequest & GetLFTagRequest & GetLFTagRequest)[K]
    }>): GetLFTagResponse {
        return this.client.getLFTag(
            this.ops["GetLFTag"].apply(partialParams)
        );
    }

    invokeGetQueryState(partialParams: ToOptional<{
      [K in keyof GetQueryStateRequest & keyof GetQueryStateRequest & keyof GetQueryStateRequest]: (GetQueryStateRequest & GetQueryStateRequest & GetQueryStateRequest)[K]
    }>): GetQueryStateResponse {
        return this.client.getQueryState(
            this.ops["GetQueryState"].apply(partialParams)
        );
    }

    invokeGetQueryStatistics(partialParams: ToOptional<{
      [K in keyof GetQueryStatisticsRequest & keyof GetQueryStatisticsRequest & keyof GetQueryStatisticsRequest]: (GetQueryStatisticsRequest & GetQueryStatisticsRequest & GetQueryStatisticsRequest)[K]
    }>): GetQueryStatisticsResponse {
        return this.client.getQueryStatistics(
            this.ops["GetQueryStatistics"].apply(partialParams)
        );
    }

    invokeGetResourceLFTags(partialParams: ToOptional<{
      [K in keyof GetResourceLFTagsRequest & keyof GetResourceLFTagsRequest & keyof GetResourceLFTagsRequest]: (GetResourceLFTagsRequest & GetResourceLFTagsRequest & GetResourceLFTagsRequest)[K]
    }>): GetResourceLFTagsResponse {
        return this.client.getResourceLFTags(
            this.ops["GetResourceLFTags"].apply(partialParams)
        );
    }

    invokeGetTableObjects(partialParams: ToOptional<{
      [K in keyof GetTableObjectsRequest & keyof GetTableObjectsRequest & keyof GetTableObjectsRequest]: (GetTableObjectsRequest & GetTableObjectsRequest & GetTableObjectsRequest)[K]
    }>): GetTableObjectsResponse {
        return this.client.getTableObjects(
            this.ops["GetTableObjects"].apply(partialParams)
        );
    }

    invokeGetTemporaryGluePartitionCredentials(partialParams: ToOptional<{
      [K in keyof GetTemporaryGluePartitionCredentialsRequest & keyof GetTemporaryGluePartitionCredentialsRequest & keyof GetTemporaryGluePartitionCredentialsRequest]: (GetTemporaryGluePartitionCredentialsRequest & GetTemporaryGluePartitionCredentialsRequest & GetTemporaryGluePartitionCredentialsRequest)[K]
    }>): GetTemporaryGluePartitionCredentialsResponse {
        return this.client.getTemporaryGluePartitionCredentials(
            this.ops["GetTemporaryGluePartitionCredentials"].apply(partialParams)
        );
    }

    invokeGetTemporaryGlueTableCredentials(partialParams: ToOptional<{
      [K in keyof GetTemporaryGlueTableCredentialsRequest & keyof GetTemporaryGlueTableCredentialsRequest & keyof GetTemporaryGlueTableCredentialsRequest]: (GetTemporaryGlueTableCredentialsRequest & GetTemporaryGlueTableCredentialsRequest & GetTemporaryGlueTableCredentialsRequest)[K]
    }>): GetTemporaryGlueTableCredentialsResponse {
        return this.client.getTemporaryGlueTableCredentials(
            this.ops["GetTemporaryGlueTableCredentials"].apply(partialParams)
        );
    }

    invokeGetWorkUnitResults(partialParams: ToOptional<{
      [K in keyof GetWorkUnitResultsRequest & keyof GetWorkUnitResultsRequest & keyof GetWorkUnitResultsRequest]: (GetWorkUnitResultsRequest & GetWorkUnitResultsRequest & GetWorkUnitResultsRequest)[K]
    }>): GetWorkUnitResultsResponse {
        return this.client.getWorkUnitResults(
            this.ops["GetWorkUnitResults"].apply(partialParams)
        );
    }

    invokeGetWorkUnits(partialParams: ToOptional<{
      [K in keyof GetWorkUnitsRequest & keyof GetWorkUnitsRequest & keyof GetWorkUnitsRequest]: (GetWorkUnitsRequest & GetWorkUnitsRequest & GetWorkUnitsRequest)[K]
    }>): GetWorkUnitsResponse {
        return this.client.getWorkUnits(
            this.ops["GetWorkUnits"].apply(partialParams)
        );
    }

    invokeGrantPermissions(partialParams: ToOptional<{
      [K in keyof GrantPermissionsRequest & keyof GrantPermissionsRequest & keyof GrantPermissionsRequest]: (GrantPermissionsRequest & GrantPermissionsRequest & GrantPermissionsRequest)[K]
    }>): GrantPermissionsResponse {
        return this.client.grantPermissions(
            this.ops["GrantPermissions"].apply(partialParams)
        );
    }

    invokeListTableStorageOptimizers(partialParams: ToOptional<{
      [K in keyof ListTableStorageOptimizersRequest & keyof ListTableStorageOptimizersRequest & keyof ListTableStorageOptimizersRequest]: (ListTableStorageOptimizersRequest & ListTableStorageOptimizersRequest & ListTableStorageOptimizersRequest)[K]
    }>): ListTableStorageOptimizersResponse {
        return this.client.listTableStorageOptimizers(
            this.ops["ListTableStorageOptimizers"].apply(partialParams)
        );
    }

    invokePutDataLakeSettings(partialParams: ToOptional<{
      [K in keyof PutDataLakeSettingsRequest & keyof PutDataLakeSettingsRequest & keyof PutDataLakeSettingsRequest]: (PutDataLakeSettingsRequest & PutDataLakeSettingsRequest & PutDataLakeSettingsRequest)[K]
    }>): PutDataLakeSettingsResponse {
        return this.client.putDataLakeSettings(
            this.ops["PutDataLakeSettings"].apply(partialParams)
        );
    }

    invokeRegisterResource(partialParams: ToOptional<{
      [K in keyof RegisterResourceRequest & keyof RegisterResourceRequest & keyof RegisterResourceRequest]: (RegisterResourceRequest & RegisterResourceRequest & RegisterResourceRequest)[K]
    }>): RegisterResourceResponse {
        return this.client.registerResource(
            this.ops["RegisterResource"].apply(partialParams)
        );
    }

    invokeRemoveLFTagsFromResource(partialParams: ToOptional<{
      [K in keyof RemoveLFTagsFromResourceRequest & keyof RemoveLFTagsFromResourceRequest & keyof RemoveLFTagsFromResourceRequest]: (RemoveLFTagsFromResourceRequest & RemoveLFTagsFromResourceRequest & RemoveLFTagsFromResourceRequest)[K]
    }>): RemoveLFTagsFromResourceResponse {
        return this.client.removeLFTagsFromResource(
            this.ops["RemoveLFTagsFromResource"].apply(partialParams)
        );
    }

    invokeRevokePermissions(partialParams: ToOptional<{
      [K in keyof RevokePermissionsRequest & keyof RevokePermissionsRequest & keyof RevokePermissionsRequest]: (RevokePermissionsRequest & RevokePermissionsRequest & RevokePermissionsRequest)[K]
    }>): RevokePermissionsResponse {
        return this.client.revokePermissions(
            this.ops["RevokePermissions"].apply(partialParams)
        );
    }

    invokeSearchDatabasesByLFTags(partialParams: ToOptional<{
      [K in keyof SearchDatabasesByLFTagsRequest & keyof SearchDatabasesByLFTagsRequest & keyof SearchDatabasesByLFTagsRequest]: (SearchDatabasesByLFTagsRequest & SearchDatabasesByLFTagsRequest & SearchDatabasesByLFTagsRequest)[K]
    }>): SearchDatabasesByLFTagsResponse {
        return this.client.searchDatabasesByLFTags(
            this.ops["SearchDatabasesByLFTags"].apply(partialParams)
        );
    }

    invokeSearchTablesByLFTags(partialParams: ToOptional<{
      [K in keyof SearchTablesByLFTagsRequest & keyof SearchTablesByLFTagsRequest & keyof SearchTablesByLFTagsRequest]: (SearchTablesByLFTagsRequest & SearchTablesByLFTagsRequest & SearchTablesByLFTagsRequest)[K]
    }>): SearchTablesByLFTagsResponse {
        return this.client.searchTablesByLFTags(
            this.ops["SearchTablesByLFTags"].apply(partialParams)
        );
    }

    invokeStartQueryPlanning(partialParams: ToOptional<{
      [K in keyof StartQueryPlanningRequest & keyof StartQueryPlanningRequest & keyof StartQueryPlanningRequest]: (StartQueryPlanningRequest & StartQueryPlanningRequest & StartQueryPlanningRequest)[K]
    }>): StartQueryPlanningResponse {
        return this.client.startQueryPlanning(
            this.ops["StartQueryPlanning"].apply(partialParams)
        );
    }

    invokeUpdateLFTag(partialParams: ToOptional<{
      [K in keyof UpdateLFTagRequest & keyof UpdateLFTagRequest & keyof UpdateLFTagRequest]: (UpdateLFTagRequest & UpdateLFTagRequest & UpdateLFTagRequest)[K]
    }>): UpdateLFTagResponse {
        return this.client.updateLFTag(
            this.ops["UpdateLFTag"].apply(partialParams)
        );
    }

    invokeUpdateResource(partialParams: ToOptional<{
      [K in keyof UpdateResourceRequest & keyof UpdateResourceRequest & keyof Omit<UpdateResourceRequest, "RoleArn">]: (UpdateResourceRequest & UpdateResourceRequest & Omit<UpdateResourceRequest, "RoleArn">)[K]
    }>): UpdateResourceResponse {
        return this.client.updateResource(
            this.ops["UpdateResource"].apply(partialParams)
        );
    }

    invokeUpdateTableObjects(partialParams: ToOptional<{
      [K in keyof UpdateTableObjectsRequest & keyof UpdateTableObjectsRequest & keyof UpdateTableObjectsRequest]: (UpdateTableObjectsRequest & UpdateTableObjectsRequest & UpdateTableObjectsRequest)[K]
    }>): UpdateTableObjectsResponse {
        return this.client.updateTableObjects(
            this.ops["UpdateTableObjects"].apply(partialParams)
        );
    }

    invokeUpdateTableStorageOptimizer(partialParams: ToOptional<{
      [K in keyof UpdateTableStorageOptimizerRequest & keyof UpdateTableStorageOptimizerRequest & keyof UpdateTableStorageOptimizerRequest]: (UpdateTableStorageOptimizerRequest & UpdateTableStorageOptimizerRequest & UpdateTableStorageOptimizerRequest)[K]
    }>): UpdateTableStorageOptimizerResponse {
        return this.client.updateTableStorageOptimizer(
            this.ops["UpdateTableStorageOptimizer"].apply(partialParams)
        );
    }
}