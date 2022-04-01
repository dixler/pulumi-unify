
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateDataSetRequest,
    CreateEventActionRequest,
    CreateJobRequest,
    CreateRevisionRequest,
    GetAssetRequest,
    GetDataSetRequest,
    GetEventActionRequest,
    GetJobRequest,
    GetRevisionRequest,
    ListDataSetRevisionsRequest,
    ListDataSetsRequest,
    ListEventActionsRequest,
    ListJobsRequest,
    ListRevisionAssetsRequest,
    ListTagsForResourceRequest,
    SendApiAssetRequest,
    StartJobRequest,
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
    ListDataSetsResponse,
    ListEventActionsResponse,
    ListJobsResponse,
    ListRevisionAssetsResponse,
    ListTagsForResourceResponse,
    SendApiAssetResponse,
    StartJobResponse,
    UpdateAssetResponse,
    UpdateDataSetResponse,
    UpdateEventActionResponse,
    UpdateRevisionResponse
} from "aws-sdk/clients/dataexchange";
const schema = require("../apis/dataexchange-2017-07-25.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.dataexchange.DataSet {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.dataexchange.DataSet>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.DataExchange()
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

    invokeCreateDataSet(partialParams: ToOptional<{
      [K in keyof CreateDataSetRequest & keyof Omit<CreateDataSetRequest, "AssetType" | "Description" | "Name">]: (CreateDataSetRequest)[K]
    }>): Request<CreateDataSetResponse, AWSError> {
        this.boot();
        return this.client.createDataSet(
          this.ops["CreateDataSet"].apply(partialParams)
        );
    }

    invokeCreateEventAction(partialParams: ToOptional<{
      [K in keyof CreateEventActionRequest]: (CreateEventActionRequest)[K]
    }>): Request<CreateEventActionResponse, AWSError> {
        this.boot();
        return this.client.createEventAction(
          this.ops["CreateEventAction"].apply(partialParams)
        );
    }

    invokeCreateJob(partialParams: ToOptional<{
      [K in keyof CreateJobRequest]: (CreateJobRequest)[K]
    }>): Request<CreateJobResponse, AWSError> {
        this.boot();
        return this.client.createJob(
          this.ops["CreateJob"].apply(partialParams)
        );
    }

    invokeCreateRevision(partialParams: ToOptional<{
      [K in keyof CreateRevisionRequest]: (CreateRevisionRequest)[K]
    }>): Request<CreateRevisionResponse, AWSError> {
        this.boot();
        return this.client.createRevision(
          this.ops["CreateRevision"].apply(partialParams)
        );
    }

    invokeGetAsset(partialParams: ToOptional<{
      [K in keyof GetAssetRequest]: (GetAssetRequest)[K]
    }>): Request<GetAssetResponse, AWSError> {
        this.boot();
        return this.client.getAsset(
          this.ops["GetAsset"].apply(partialParams)
        );
    }

    invokeGetDataSet(partialParams: ToOptional<{
      [K in keyof GetDataSetRequest]: (GetDataSetRequest)[K]
    }>): Request<GetDataSetResponse, AWSError> {
        this.boot();
        return this.client.getDataSet(
          this.ops["GetDataSet"].apply(partialParams)
        );
    }

    invokeGetEventAction(partialParams: ToOptional<{
      [K in keyof GetEventActionRequest]: (GetEventActionRequest)[K]
    }>): Request<GetEventActionResponse, AWSError> {
        this.boot();
        return this.client.getEventAction(
          this.ops["GetEventAction"].apply(partialParams)
        );
    }

    invokeGetJob(partialParams: ToOptional<{
      [K in keyof GetJobRequest]: (GetJobRequest)[K]
    }>): Request<GetJobResponse, AWSError> {
        this.boot();
        return this.client.getJob(
          this.ops["GetJob"].apply(partialParams)
        );
    }

    invokeGetRevision(partialParams: ToOptional<{
      [K in keyof GetRevisionRequest]: (GetRevisionRequest)[K]
    }>): Request<GetRevisionResponse, AWSError> {
        this.boot();
        return this.client.getRevision(
          this.ops["GetRevision"].apply(partialParams)
        );
    }

    invokeListDataSetRevisions(partialParams: ToOptional<{
      [K in keyof ListDataSetRevisionsRequest]: (ListDataSetRevisionsRequest)[K]
    }>): Request<ListDataSetRevisionsResponse, AWSError> {
        this.boot();
        return this.client.listDataSetRevisions(
          this.ops["ListDataSetRevisions"].apply(partialParams)
        );
    }

    invokeListDataSets(partialParams: ToOptional<{
      [K in keyof ListDataSetsRequest]: (ListDataSetsRequest)[K]
    }>): Request<ListDataSetsResponse, AWSError> {
        this.boot();
        return this.client.listDataSets(
          this.ops["ListDataSets"].apply(partialParams)
        );
    }

    invokeListEventActions(partialParams: ToOptional<{
      [K in keyof ListEventActionsRequest]: (ListEventActionsRequest)[K]
    }>): Request<ListEventActionsResponse, AWSError> {
        this.boot();
        return this.client.listEventActions(
          this.ops["ListEventActions"].apply(partialParams)
        );
    }

    invokeListJobs(partialParams: ToOptional<{
      [K in keyof ListJobsRequest]: (ListJobsRequest)[K]
    }>): Request<ListJobsResponse, AWSError> {
        this.boot();
        return this.client.listJobs(
          this.ops["ListJobs"].apply(partialParams)
        );
    }

    invokeListRevisionAssets(partialParams: ToOptional<{
      [K in keyof ListRevisionAssetsRequest]: (ListRevisionAssetsRequest)[K]
    }>): Request<ListRevisionAssetsResponse, AWSError> {
        this.boot();
        return this.client.listRevisionAssets(
          this.ops["ListRevisionAssets"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeSendApiAsset(partialParams: ToOptional<{
      [K in keyof SendApiAssetRequest]: (SendApiAssetRequest)[K]
    }>): Request<SendApiAssetResponse, AWSError> {
        this.boot();
        return this.client.sendApiAsset(
          this.ops["SendApiAsset"].apply(partialParams)
        );
    }

    invokeStartJob(partialParams: ToOptional<{
      [K in keyof StartJobRequest]: (StartJobRequest)[K]
    }>): Request<StartJobResponse, AWSError> {
        this.boot();
        return this.client.startJob(
          this.ops["StartJob"].apply(partialParams)
        );
    }

    invokeUpdateAsset(partialParams: ToOptional<{
      [K in keyof UpdateAssetRequest & keyof Omit<UpdateAssetRequest, "Name">]: (UpdateAssetRequest)[K]
    }>): Request<UpdateAssetResponse, AWSError> {
        this.boot();
        return this.client.updateAsset(
          this.ops["UpdateAsset"].apply(partialParams)
        );
    }

    invokeUpdateDataSet(partialParams: ToOptional<{
      [K in keyof UpdateDataSetRequest]: (UpdateDataSetRequest)[K]
    }>): Request<UpdateDataSetResponse, AWSError> {
        this.boot();
        return this.client.updateDataSet(
          this.ops["UpdateDataSet"].apply(partialParams)
        );
    }

    invokeUpdateEventAction(partialParams: ToOptional<{
      [K in keyof UpdateEventActionRequest]: (UpdateEventActionRequest)[K]
    }>): Request<UpdateEventActionResponse, AWSError> {
        this.boot();
        return this.client.updateEventAction(
          this.ops["UpdateEventAction"].apply(partialParams)
        );
    }

    invokeUpdateRevision(partialParams: ToOptional<{
      [K in keyof UpdateRevisionRequest]: (UpdateRevisionRequest)[K]
    }>): Request<UpdateRevisionResponse, AWSError> {
        this.boot();
        return this.client.updateRevision(
          this.ops["UpdateRevision"].apply(partialParams)
        );
    }
}