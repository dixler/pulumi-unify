
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    CancelJobRequest,
    CreateDataSetRequest,
    CreateEventActionRequest,
    CreateJobRequest,
    CreateRevisionRequest,
    DeleteAssetRequest,
    DeleteDataSetRequest,
    DeleteEventActionRequest,
    DeleteRevisionRequest,
    GetAssetRequest,
    GetDataSetRequest,
    GetEventActionRequest,
    GetJobRequest,
    GetRevisionRequest,
    ListDataSetRevisionsRequest,
    ListRevisionAssetsRequest,
    ListTagsForResourceRequest,
    SendApiAssetRequest,
    StartJobRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateAssetRequest,
    UpdateDataSetRequest,
    UpdateEventActionRequest,
    UpdateRevisionRequest,
    CreateDataSetResponse,
    CreateEventActionResponse,
    CreateJobResponse,
    CreateRevisionResponse,
    GetAssetResponse,
    GetDataSetResponse,
    GetEventActionResponse,
    GetJobResponse,
    GetRevisionResponse,
    ListDataSetRevisionsResponse,
    ListRevisionAssetsResponse,
    ListTagsForResourceResponse,
    SendApiAssetResponse,
    StartJobResponse,
    UpdateAssetResponse,
    UpdateDataSetResponse,
    UpdateEventActionResponse,
    UpdateRevisionResponse
} from "aws-sdk/clients/dataexchange";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.dataexchange.DataSet {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.dataexchange.DataSet>) {
        super(...args)
        this.client = new awssdk.DataExchange()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/dataexchange-2017-07-25.normal.json"), this.client)
    }

    invokeCancelJob(partialParams: ToOptional<{
      [K in keyof CancelJobRequest & keyof CancelJobRequest & keyof CancelJobRequest & keyof CancelJobRequest]: (CancelJobRequest & CancelJobRequest & CancelJobRequest & CancelJobRequest)[K]
    }>): void {
        return this.client.cancelJob(
            this.ops["CancelJob"].apply(partialParams)
        );
    }

    invokeCreateDataSet(partialParams: ToOptional<{
      [K in keyof CreateDataSetRequest & keyof Omit<CreateDataSetRequest, "AssetType"> & keyof CreateDataSetRequest & keyof CreateDataSetRequest]: (CreateDataSetRequest & Omit<CreateDataSetRequest, "AssetType"> & CreateDataSetRequest & CreateDataSetRequest)[K]
    }>): CreateDataSetResponse {
        return this.client.createDataSet(
            this.ops["CreateDataSet"].apply(partialParams)
        );
    }

    invokeCreateEventAction(partialParams: ToOptional<{
      [K in keyof CreateEventActionRequest & keyof CreateEventActionRequest & keyof CreateEventActionRequest & keyof CreateEventActionRequest]: (CreateEventActionRequest & CreateEventActionRequest & CreateEventActionRequest & CreateEventActionRequest)[K]
    }>): CreateEventActionResponse {
        return this.client.createEventAction(
            this.ops["CreateEventAction"].apply(partialParams)
        );
    }

    invokeCreateJob(partialParams: ToOptional<{
      [K in keyof CreateJobRequest & keyof CreateJobRequest & keyof CreateJobRequest & keyof CreateJobRequest]: (CreateJobRequest & CreateJobRequest & CreateJobRequest & CreateJobRequest)[K]
    }>): CreateJobResponse {
        return this.client.createJob(
            this.ops["CreateJob"].apply(partialParams)
        );
    }

    invokeCreateRevision(partialParams: ToOptional<{
      [K in keyof CreateRevisionRequest & keyof CreateRevisionRequest & keyof CreateRevisionRequest & keyof CreateRevisionRequest]: (CreateRevisionRequest & CreateRevisionRequest & CreateRevisionRequest & CreateRevisionRequest)[K]
    }>): CreateRevisionResponse {
        return this.client.createRevision(
            this.ops["CreateRevision"].apply(partialParams)
        );
    }

    invokeDeleteAsset(partialParams: ToOptional<{
      [K in keyof DeleteAssetRequest & keyof DeleteAssetRequest & keyof DeleteAssetRequest & keyof DeleteAssetRequest]: (DeleteAssetRequest & DeleteAssetRequest & DeleteAssetRequest & DeleteAssetRequest)[K]
    }>): void {
        return this.client.deleteAsset(
            this.ops["DeleteAsset"].apply(partialParams)
        );
    }

    invokeDeleteDataSet(partialParams: ToOptional<{
      [K in keyof DeleteDataSetRequest & keyof DeleteDataSetRequest & keyof DeleteDataSetRequest & keyof DeleteDataSetRequest]: (DeleteDataSetRequest & DeleteDataSetRequest & DeleteDataSetRequest & DeleteDataSetRequest)[K]
    }>): void {
        return this.client.deleteDataSet(
            this.ops["DeleteDataSet"].apply(partialParams)
        );
    }

    invokeDeleteEventAction(partialParams: ToOptional<{
      [K in keyof DeleteEventActionRequest & keyof DeleteEventActionRequest & keyof DeleteEventActionRequest & keyof DeleteEventActionRequest]: (DeleteEventActionRequest & DeleteEventActionRequest & DeleteEventActionRequest & DeleteEventActionRequest)[K]
    }>): void {
        return this.client.deleteEventAction(
            this.ops["DeleteEventAction"].apply(partialParams)
        );
    }

    invokeDeleteRevision(partialParams: ToOptional<{
      [K in keyof DeleteRevisionRequest & keyof DeleteRevisionRequest & keyof DeleteRevisionRequest & keyof DeleteRevisionRequest]: (DeleteRevisionRequest & DeleteRevisionRequest & DeleteRevisionRequest & DeleteRevisionRequest)[K]
    }>): void {
        return this.client.deleteRevision(
            this.ops["DeleteRevision"].apply(partialParams)
        );
    }

    invokeGetAsset(partialParams: ToOptional<{
      [K in keyof GetAssetRequest & keyof GetAssetRequest & keyof GetAssetRequest & keyof GetAssetRequest]: (GetAssetRequest & GetAssetRequest & GetAssetRequest & GetAssetRequest)[K]
    }>): GetAssetResponse {
        return this.client.getAsset(
            this.ops["GetAsset"].apply(partialParams)
        );
    }

    invokeGetDataSet(partialParams: ToOptional<{
      [K in keyof GetDataSetRequest & keyof GetDataSetRequest & keyof GetDataSetRequest & keyof GetDataSetRequest]: (GetDataSetRequest & GetDataSetRequest & GetDataSetRequest & GetDataSetRequest)[K]
    }>): GetDataSetResponse {
        return this.client.getDataSet(
            this.ops["GetDataSet"].apply(partialParams)
        );
    }

    invokeGetEventAction(partialParams: ToOptional<{
      [K in keyof GetEventActionRequest & keyof GetEventActionRequest & keyof GetEventActionRequest & keyof GetEventActionRequest]: (GetEventActionRequest & GetEventActionRequest & GetEventActionRequest & GetEventActionRequest)[K]
    }>): GetEventActionResponse {
        return this.client.getEventAction(
            this.ops["GetEventAction"].apply(partialParams)
        );
    }

    invokeGetJob(partialParams: ToOptional<{
      [K in keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest]: (GetJobRequest & GetJobRequest & GetJobRequest & GetJobRequest)[K]
    }>): GetJobResponse {
        return this.client.getJob(
            this.ops["GetJob"].apply(partialParams)
        );
    }

    invokeGetRevision(partialParams: ToOptional<{
      [K in keyof GetRevisionRequest & keyof GetRevisionRequest & keyof GetRevisionRequest & keyof GetRevisionRequest]: (GetRevisionRequest & GetRevisionRequest & GetRevisionRequest & GetRevisionRequest)[K]
    }>): GetRevisionResponse {
        return this.client.getRevision(
            this.ops["GetRevision"].apply(partialParams)
        );
    }

    invokeListDataSetRevisions(partialParams: ToOptional<{
      [K in keyof ListDataSetRevisionsRequest & keyof ListDataSetRevisionsRequest & keyof ListDataSetRevisionsRequest & keyof ListDataSetRevisionsRequest]: (ListDataSetRevisionsRequest & ListDataSetRevisionsRequest & ListDataSetRevisionsRequest & ListDataSetRevisionsRequest)[K]
    }>): ListDataSetRevisionsResponse {
        return this.client.listDataSetRevisions(
            this.ops["ListDataSetRevisions"].apply(partialParams)
        );
    }

    invokeListRevisionAssets(partialParams: ToOptional<{
      [K in keyof ListRevisionAssetsRequest & keyof ListRevisionAssetsRequest & keyof ListRevisionAssetsRequest & keyof ListRevisionAssetsRequest]: (ListRevisionAssetsRequest & ListRevisionAssetsRequest & ListRevisionAssetsRequest & ListRevisionAssetsRequest)[K]
    }>): ListRevisionAssetsResponse {
        return this.client.listRevisionAssets(
            this.ops["ListRevisionAssets"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeSendApiAsset(partialParams: ToOptional<{
      [K in keyof SendApiAssetRequest & keyof SendApiAssetRequest & keyof SendApiAssetRequest & keyof SendApiAssetRequest]: (SendApiAssetRequest & SendApiAssetRequest & SendApiAssetRequest & SendApiAssetRequest)[K]
    }>): SendApiAssetResponse {
        return this.client.sendApiAsset(
            this.ops["SendApiAsset"].apply(partialParams)
        );
    }

    invokeStartJob(partialParams: ToOptional<{
      [K in keyof StartJobRequest & keyof StartJobRequest & keyof StartJobRequest & keyof StartJobRequest]: (StartJobRequest & StartJobRequest & StartJobRequest & StartJobRequest)[K]
    }>): StartJobResponse {
        return this.client.startJob(
            this.ops["StartJob"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): void {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): void {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateAsset(partialParams: ToOptional<{
      [K in keyof UpdateAssetRequest & keyof UpdateAssetRequest & keyof UpdateAssetRequest & keyof Omit<UpdateAssetRequest, "Name">]: (UpdateAssetRequest & UpdateAssetRequest & UpdateAssetRequest & Omit<UpdateAssetRequest, "Name">)[K]
    }>): UpdateAssetResponse {
        return this.client.updateAsset(
            this.ops["UpdateAsset"].apply(partialParams)
        );
    }

    invokeUpdateDataSet(partialParams: ToOptional<{
      [K in keyof UpdateDataSetRequest & keyof UpdateDataSetRequest & keyof UpdateDataSetRequest & keyof UpdateDataSetRequest]: (UpdateDataSetRequest & UpdateDataSetRequest & UpdateDataSetRequest & UpdateDataSetRequest)[K]
    }>): UpdateDataSetResponse {
        return this.client.updateDataSet(
            this.ops["UpdateDataSet"].apply(partialParams)
        );
    }

    invokeUpdateEventAction(partialParams: ToOptional<{
      [K in keyof UpdateEventActionRequest & keyof UpdateEventActionRequest & keyof UpdateEventActionRequest & keyof UpdateEventActionRequest]: (UpdateEventActionRequest & UpdateEventActionRequest & UpdateEventActionRequest & UpdateEventActionRequest)[K]
    }>): UpdateEventActionResponse {
        return this.client.updateEventAction(
            this.ops["UpdateEventAction"].apply(partialParams)
        );
    }

    invokeUpdateRevision(partialParams: ToOptional<{
      [K in keyof UpdateRevisionRequest & keyof UpdateRevisionRequest & keyof UpdateRevisionRequest & keyof UpdateRevisionRequest]: (UpdateRevisionRequest & UpdateRevisionRequest & UpdateRevisionRequest & UpdateRevisionRequest)[K]
    }>): UpdateRevisionResponse {
        return this.client.updateRevision(
            this.ops["UpdateRevision"].apply(partialParams)
        );
    }
}