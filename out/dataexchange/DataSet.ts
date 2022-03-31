
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
    constructor(...args: ConstructorParameters<typeof aws.dataexchange.DataSet>) {
        super(...args)
        this.client = new awssdk.DataExchange()
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

    invokeCancelJob(partialParams: ToOptional<{
      [K in keyof CancelJobRequest & keyof CancelJobRequest & keyof CancelJobRequest & keyof CancelJobRequest]: (CancelJobRequest & CancelJobRequest & CancelJobRequest & CancelJobRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelJob(
          this.ops["CancelJob"].applicator.apply(partialParams)
        );
    }

    invokeCreateDataSet(partialParams: ToOptional<{
      [K in keyof CreateDataSetRequest & keyof Omit<CreateDataSetRequest, "AssetType"> & keyof CreateDataSetRequest & keyof CreateDataSetRequest]: (CreateDataSetRequest & Omit<CreateDataSetRequest, "AssetType"> & CreateDataSetRequest & CreateDataSetRequest)[K]
    }>): Request<CreateDataSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDataSet(
          this.ops["CreateDataSet"].applicator.apply(partialParams)
        );
    }

    invokeCreateEventAction(partialParams: ToOptional<{
      [K in keyof CreateEventActionRequest & keyof CreateEventActionRequest & keyof CreateEventActionRequest & keyof CreateEventActionRequest]: (CreateEventActionRequest & CreateEventActionRequest & CreateEventActionRequest & CreateEventActionRequest)[K]
    }>): Request<CreateEventActionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createEventAction(
          this.ops["CreateEventAction"].applicator.apply(partialParams)
        );
    }

    invokeCreateJob(partialParams: ToOptional<{
      [K in keyof CreateJobRequest & keyof CreateJobRequest & keyof CreateJobRequest & keyof CreateJobRequest]: (CreateJobRequest & CreateJobRequest & CreateJobRequest & CreateJobRequest)[K]
    }>): Request<CreateJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createJob(
          this.ops["CreateJob"].applicator.apply(partialParams)
        );
    }

    invokeCreateRevision(partialParams: ToOptional<{
      [K in keyof CreateRevisionRequest & keyof CreateRevisionRequest & keyof CreateRevisionRequest & keyof CreateRevisionRequest]: (CreateRevisionRequest & CreateRevisionRequest & CreateRevisionRequest & CreateRevisionRequest)[K]
    }>): Request<CreateRevisionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRevision(
          this.ops["CreateRevision"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAsset(partialParams: ToOptional<{
      [K in keyof DeleteAssetRequest & keyof DeleteAssetRequest & keyof DeleteAssetRequest & keyof DeleteAssetRequest]: (DeleteAssetRequest & DeleteAssetRequest & DeleteAssetRequest & DeleteAssetRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAsset(
          this.ops["DeleteAsset"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDataSet(partialParams: ToOptional<{
      [K in keyof DeleteDataSetRequest & keyof DeleteDataSetRequest & keyof DeleteDataSetRequest & keyof DeleteDataSetRequest]: (DeleteDataSetRequest & DeleteDataSetRequest & DeleteDataSetRequest & DeleteDataSetRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDataSet(
          this.ops["DeleteDataSet"].applicator.apply(partialParams)
        );
    }

    invokeDeleteEventAction(partialParams: ToOptional<{
      [K in keyof DeleteEventActionRequest & keyof DeleteEventActionRequest & keyof DeleteEventActionRequest & keyof DeleteEventActionRequest]: (DeleteEventActionRequest & DeleteEventActionRequest & DeleteEventActionRequest & DeleteEventActionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEventAction(
          this.ops["DeleteEventAction"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRevision(partialParams: ToOptional<{
      [K in keyof DeleteRevisionRequest & keyof DeleteRevisionRequest & keyof DeleteRevisionRequest & keyof DeleteRevisionRequest]: (DeleteRevisionRequest & DeleteRevisionRequest & DeleteRevisionRequest & DeleteRevisionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRevision(
          this.ops["DeleteRevision"].applicator.apply(partialParams)
        );
    }

    invokeGetAsset(partialParams: ToOptional<{
      [K in keyof GetAssetRequest & keyof GetAssetRequest & keyof GetAssetRequest & keyof GetAssetRequest]: (GetAssetRequest & GetAssetRequest & GetAssetRequest & GetAssetRequest)[K]
    }>): Request<GetAssetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAsset(
          this.ops["GetAsset"].applicator.apply(partialParams)
        );
    }

    invokeGetDataSet(partialParams: ToOptional<{
      [K in keyof GetDataSetRequest & keyof GetDataSetRequest & keyof GetDataSetRequest & keyof GetDataSetRequest]: (GetDataSetRequest & GetDataSetRequest & GetDataSetRequest & GetDataSetRequest)[K]
    }>): Request<GetDataSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDataSet(
          this.ops["GetDataSet"].applicator.apply(partialParams)
        );
    }

    invokeGetEventAction(partialParams: ToOptional<{
      [K in keyof GetEventActionRequest & keyof GetEventActionRequest & keyof GetEventActionRequest & keyof GetEventActionRequest]: (GetEventActionRequest & GetEventActionRequest & GetEventActionRequest & GetEventActionRequest)[K]
    }>): Request<GetEventActionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getEventAction(
          this.ops["GetEventAction"].applicator.apply(partialParams)
        );
    }

    invokeGetJob(partialParams: ToOptional<{
      [K in keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest]: (GetJobRequest & GetJobRequest & GetJobRequest & GetJobRequest)[K]
    }>): Request<GetJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getJob(
          this.ops["GetJob"].applicator.apply(partialParams)
        );
    }

    invokeGetRevision(partialParams: ToOptional<{
      [K in keyof GetRevisionRequest & keyof GetRevisionRequest & keyof GetRevisionRequest & keyof GetRevisionRequest]: (GetRevisionRequest & GetRevisionRequest & GetRevisionRequest & GetRevisionRequest)[K]
    }>): Request<GetRevisionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRevision(
          this.ops["GetRevision"].applicator.apply(partialParams)
        );
    }

    invokeListDataSetRevisions(partialParams: ToOptional<{
      [K in keyof ListDataSetRevisionsRequest & keyof ListDataSetRevisionsRequest & keyof ListDataSetRevisionsRequest & keyof ListDataSetRevisionsRequest]: (ListDataSetRevisionsRequest & ListDataSetRevisionsRequest & ListDataSetRevisionsRequest & ListDataSetRevisionsRequest)[K]
    }>): Request<ListDataSetRevisionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDataSetRevisions(
          this.ops["ListDataSetRevisions"].applicator.apply(partialParams)
        );
    }

    invokeListRevisionAssets(partialParams: ToOptional<{
      [K in keyof ListRevisionAssetsRequest & keyof ListRevisionAssetsRequest & keyof ListRevisionAssetsRequest & keyof ListRevisionAssetsRequest]: (ListRevisionAssetsRequest & ListRevisionAssetsRequest & ListRevisionAssetsRequest & ListRevisionAssetsRequest)[K]
    }>): Request<ListRevisionAssetsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRevisionAssets(
          this.ops["ListRevisionAssets"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeSendApiAsset(partialParams: ToOptional<{
      [K in keyof SendApiAssetRequest & keyof SendApiAssetRequest & keyof SendApiAssetRequest & keyof SendApiAssetRequest]: (SendApiAssetRequest & SendApiAssetRequest & SendApiAssetRequest & SendApiAssetRequest)[K]
    }>): Request<SendApiAssetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.sendApiAsset(
          this.ops["SendApiAsset"].applicator.apply(partialParams)
        );
    }

    invokeStartJob(partialParams: ToOptional<{
      [K in keyof StartJobRequest & keyof StartJobRequest & keyof StartJobRequest & keyof StartJobRequest]: (StartJobRequest & StartJobRequest & StartJobRequest & StartJobRequest)[K]
    }>): Request<StartJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startJob(
          this.ops["StartJob"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAsset(partialParams: ToOptional<{
      [K in keyof UpdateAssetRequest & keyof UpdateAssetRequest & keyof UpdateAssetRequest & keyof Omit<UpdateAssetRequest, "Name">]: (UpdateAssetRequest & UpdateAssetRequest & UpdateAssetRequest & Omit<UpdateAssetRequest, "Name">)[K]
    }>): Request<UpdateAssetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAsset(
          this.ops["UpdateAsset"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDataSet(partialParams: ToOptional<{
      [K in keyof UpdateDataSetRequest & keyof UpdateDataSetRequest & keyof UpdateDataSetRequest & keyof UpdateDataSetRequest]: (UpdateDataSetRequest & UpdateDataSetRequest & UpdateDataSetRequest & UpdateDataSetRequest)[K]
    }>): Request<UpdateDataSetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDataSet(
          this.ops["UpdateDataSet"].applicator.apply(partialParams)
        );
    }

    invokeUpdateEventAction(partialParams: ToOptional<{
      [K in keyof UpdateEventActionRequest & keyof UpdateEventActionRequest & keyof UpdateEventActionRequest & keyof UpdateEventActionRequest]: (UpdateEventActionRequest & UpdateEventActionRequest & UpdateEventActionRequest & UpdateEventActionRequest)[K]
    }>): Request<UpdateEventActionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateEventAction(
          this.ops["UpdateEventAction"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRevision(partialParams: ToOptional<{
      [K in keyof UpdateRevisionRequest & keyof UpdateRevisionRequest & keyof UpdateRevisionRequest & keyof UpdateRevisionRequest]: (UpdateRevisionRequest & UpdateRevisionRequest & UpdateRevisionRequest & UpdateRevisionRequest)[K]
    }>): Request<UpdateRevisionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRevision(
          this.ops["UpdateRevision"].applicator.apply(partialParams)
        );
    }
}