
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AddTagsRequest,
    CancelQueryRequest,
    CreateEventDataStoreRequest,
    CreateTrailRequest,
    DeleteEventDataStoreRequest,
    DeleteTrailRequest,
    DescribeQueryRequest,
    GetEventDataStoreRequest,
    GetEventSelectorsRequest,
    GetInsightSelectorsRequest,
    GetQueryResultsRequest,
    GetTrailRequest,
    GetTrailStatusRequest,
    ListQueriesRequest,
    ListTagsRequest,
    PutEventSelectorsRequest,
    PutInsightSelectorsRequest,
    RemoveTagsRequest,
    RestoreEventDataStoreRequest,
    StartLoggingRequest,
    StartQueryRequest,
    StopLoggingRequest,
    UpdateEventDataStoreRequest,
    UpdateTrailRequest,
    AddTagsResponse,
    CancelQueryResponse,
    CreateEventDataStoreResponse,
    CreateTrailResponse,
    DeleteEventDataStoreResponse,
    DeleteTrailResponse,
    DescribeQueryResponse,
    GetEventDataStoreResponse,
    GetEventSelectorsResponse,
    GetInsightSelectorsResponse,
    GetQueryResultsResponse,
    GetTrailResponse,
    GetTrailStatusResponse,
    ListQueriesResponse,
    ListTagsResponse,
    PutEventSelectorsResponse,
    PutInsightSelectorsResponse,
    RemoveTagsResponse,
    RestoreEventDataStoreResponse,
    StartLoggingResponse,
    StartQueryResponse,
    StopLoggingResponse,
    UpdateEventDataStoreResponse,
    UpdateTrailResponse
} from "aws-sdk/clients/cloudtrail";
const schema = require("../apis/cloudtrail-2013-11-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.cloudtrail.Trail {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.cloudtrail.Trail>) {
        super(...args)
        this.client = new awssdk.CloudTrail()
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

    invokeAddTags(partialParams: ToOptional<{
      [K in keyof AddTagsRequest & keyof AddTagsRequest & keyof AddTagsRequest & keyof AddTagsRequest & keyof AddTagsRequest & keyof AddTagsRequest & keyof AddTagsRequest & keyof AddTagsRequest & keyof AddTagsRequest]: (AddTagsRequest & AddTagsRequest & AddTagsRequest & AddTagsRequest & AddTagsRequest & AddTagsRequest & AddTagsRequest & AddTagsRequest & AddTagsRequest)[K]
    }>): Request<AddTagsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addTags(
          this.ops["AddTags"].applicator.apply(partialParams)
        );
    }

    invokeCancelQuery(partialParams: ToOptional<{
      [K in keyof CancelQueryRequest & keyof CancelQueryRequest & keyof CancelQueryRequest & keyof CancelQueryRequest & keyof CancelQueryRequest & keyof CancelQueryRequest & keyof CancelQueryRequest & keyof CancelQueryRequest & keyof CancelQueryRequest]: (CancelQueryRequest & CancelQueryRequest & CancelQueryRequest & CancelQueryRequest & CancelQueryRequest & CancelQueryRequest & CancelQueryRequest & CancelQueryRequest & CancelQueryRequest)[K]
    }>): Request<CancelQueryResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelQuery(
          this.ops["CancelQuery"].applicator.apply(partialParams)
        );
    }

    invokeCreateEventDataStore(partialParams: ToOptional<{
      [K in keyof CreateEventDataStoreRequest & keyof CreateEventDataStoreRequest & keyof CreateEventDataStoreRequest & keyof CreateEventDataStoreRequest & keyof CreateEventDataStoreRequest & keyof CreateEventDataStoreRequest & keyof CreateEventDataStoreRequest & keyof CreateEventDataStoreRequest & keyof CreateEventDataStoreRequest]: (CreateEventDataStoreRequest & CreateEventDataStoreRequest & CreateEventDataStoreRequest & CreateEventDataStoreRequest & CreateEventDataStoreRequest & CreateEventDataStoreRequest & CreateEventDataStoreRequest & CreateEventDataStoreRequest & CreateEventDataStoreRequest)[K]
    }>): Request<CreateEventDataStoreResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createEventDataStore(
          this.ops["CreateEventDataStore"].applicator.apply(partialParams)
        );
    }

    invokeCreateTrail(partialParams: ToOptional<{
      [K in keyof CreateTrailRequest & keyof CreateTrailRequest & keyof CreateTrailRequest & keyof CreateTrailRequest & keyof CreateTrailRequest & keyof CreateTrailRequest & keyof CreateTrailRequest & keyof CreateTrailRequest & keyof CreateTrailRequest]: (CreateTrailRequest & CreateTrailRequest & CreateTrailRequest & CreateTrailRequest & CreateTrailRequest & CreateTrailRequest & CreateTrailRequest & CreateTrailRequest & CreateTrailRequest)[K]
    }>): Request<CreateTrailResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTrail(
          this.ops["CreateTrail"].applicator.apply(partialParams)
        );
    }

    invokeDeleteEventDataStore(partialParams: ToOptional<{
      [K in keyof DeleteEventDataStoreRequest & keyof DeleteEventDataStoreRequest & keyof DeleteEventDataStoreRequest & keyof DeleteEventDataStoreRequest & keyof DeleteEventDataStoreRequest & keyof DeleteEventDataStoreRequest & keyof DeleteEventDataStoreRequest & keyof DeleteEventDataStoreRequest & keyof DeleteEventDataStoreRequest]: (DeleteEventDataStoreRequest & DeleteEventDataStoreRequest & DeleteEventDataStoreRequest & DeleteEventDataStoreRequest & DeleteEventDataStoreRequest & DeleteEventDataStoreRequest & DeleteEventDataStoreRequest & DeleteEventDataStoreRequest & DeleteEventDataStoreRequest)[K]
    }>): Request<DeleteEventDataStoreResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEventDataStore(
          this.ops["DeleteEventDataStore"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTrail(partialParams: ToOptional<{
      [K in keyof DeleteTrailRequest & keyof DeleteTrailRequest & keyof DeleteTrailRequest & keyof DeleteTrailRequest & keyof DeleteTrailRequest & keyof DeleteTrailRequest & keyof DeleteTrailRequest & keyof DeleteTrailRequest & keyof DeleteTrailRequest]: (DeleteTrailRequest & DeleteTrailRequest & DeleteTrailRequest & DeleteTrailRequest & DeleteTrailRequest & DeleteTrailRequest & DeleteTrailRequest & DeleteTrailRequest & DeleteTrailRequest)[K]
    }>): Request<DeleteTrailResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTrail(
          this.ops["DeleteTrail"].applicator.apply(partialParams)
        );
    }

    invokeDescribeQuery(partialParams: ToOptional<{
      [K in keyof DescribeQueryRequest & keyof DescribeQueryRequest & keyof DescribeQueryRequest & keyof DescribeQueryRequest & keyof DescribeQueryRequest & keyof DescribeQueryRequest & keyof DescribeQueryRequest & keyof DescribeQueryRequest & keyof DescribeQueryRequest]: (DescribeQueryRequest & DescribeQueryRequest & DescribeQueryRequest & DescribeQueryRequest & DescribeQueryRequest & DescribeQueryRequest & DescribeQueryRequest & DescribeQueryRequest & DescribeQueryRequest)[K]
    }>): Request<DescribeQueryResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeQuery(
          this.ops["DescribeQuery"].applicator.apply(partialParams)
        );
    }

    invokeGetEventDataStore(partialParams: ToOptional<{
      [K in keyof GetEventDataStoreRequest & keyof GetEventDataStoreRequest & keyof GetEventDataStoreRequest & keyof GetEventDataStoreRequest & keyof GetEventDataStoreRequest & keyof GetEventDataStoreRequest & keyof GetEventDataStoreRequest & keyof GetEventDataStoreRequest & keyof GetEventDataStoreRequest]: (GetEventDataStoreRequest & GetEventDataStoreRequest & GetEventDataStoreRequest & GetEventDataStoreRequest & GetEventDataStoreRequest & GetEventDataStoreRequest & GetEventDataStoreRequest & GetEventDataStoreRequest & GetEventDataStoreRequest)[K]
    }>): Request<GetEventDataStoreResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getEventDataStore(
          this.ops["GetEventDataStore"].applicator.apply(partialParams)
        );
    }

    invokeGetEventSelectors(partialParams: ToOptional<{
      [K in keyof GetEventSelectorsRequest & keyof GetEventSelectorsRequest & keyof GetEventSelectorsRequest & keyof GetEventSelectorsRequest & keyof GetEventSelectorsRequest & keyof GetEventSelectorsRequest & keyof GetEventSelectorsRequest & keyof GetEventSelectorsRequest & keyof GetEventSelectorsRequest]: (GetEventSelectorsRequest & GetEventSelectorsRequest & GetEventSelectorsRequest & GetEventSelectorsRequest & GetEventSelectorsRequest & GetEventSelectorsRequest & GetEventSelectorsRequest & GetEventSelectorsRequest & GetEventSelectorsRequest)[K]
    }>): Request<GetEventSelectorsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getEventSelectors(
          this.ops["GetEventSelectors"].applicator.apply(partialParams)
        );
    }

    invokeGetInsightSelectors(partialParams: ToOptional<{
      [K in keyof GetInsightSelectorsRequest & keyof GetInsightSelectorsRequest & keyof GetInsightSelectorsRequest & keyof GetInsightSelectorsRequest & keyof GetInsightSelectorsRequest & keyof GetInsightSelectorsRequest & keyof GetInsightSelectorsRequest & keyof GetInsightSelectorsRequest & keyof GetInsightSelectorsRequest]: (GetInsightSelectorsRequest & GetInsightSelectorsRequest & GetInsightSelectorsRequest & GetInsightSelectorsRequest & GetInsightSelectorsRequest & GetInsightSelectorsRequest & GetInsightSelectorsRequest & GetInsightSelectorsRequest & GetInsightSelectorsRequest)[K]
    }>): Request<GetInsightSelectorsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInsightSelectors(
          this.ops["GetInsightSelectors"].applicator.apply(partialParams)
        );
    }

    invokeGetQueryResults(partialParams: ToOptional<{
      [K in keyof GetQueryResultsRequest & keyof GetQueryResultsRequest & keyof GetQueryResultsRequest & keyof GetQueryResultsRequest & keyof GetQueryResultsRequest & keyof GetQueryResultsRequest & keyof GetQueryResultsRequest & keyof GetQueryResultsRequest & keyof GetQueryResultsRequest]: (GetQueryResultsRequest & GetQueryResultsRequest & GetQueryResultsRequest & GetQueryResultsRequest & GetQueryResultsRequest & GetQueryResultsRequest & GetQueryResultsRequest & GetQueryResultsRequest & GetQueryResultsRequest)[K]
    }>): Request<GetQueryResultsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getQueryResults(
          this.ops["GetQueryResults"].applicator.apply(partialParams)
        );
    }

    invokeGetTrail(partialParams: ToOptional<{
      [K in keyof GetTrailRequest & keyof GetTrailRequest & keyof GetTrailRequest & keyof GetTrailRequest & keyof GetTrailRequest & keyof GetTrailRequest & keyof GetTrailRequest & keyof GetTrailRequest & keyof GetTrailRequest]: (GetTrailRequest & GetTrailRequest & GetTrailRequest & GetTrailRequest & GetTrailRequest & GetTrailRequest & GetTrailRequest & GetTrailRequest & GetTrailRequest)[K]
    }>): Request<GetTrailResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTrail(
          this.ops["GetTrail"].applicator.apply(partialParams)
        );
    }

    invokeGetTrailStatus(partialParams: ToOptional<{
      [K in keyof GetTrailStatusRequest & keyof GetTrailStatusRequest & keyof GetTrailStatusRequest & keyof GetTrailStatusRequest & keyof GetTrailStatusRequest & keyof GetTrailStatusRequest & keyof GetTrailStatusRequest & keyof GetTrailStatusRequest & keyof GetTrailStatusRequest]: (GetTrailStatusRequest & GetTrailStatusRequest & GetTrailStatusRequest & GetTrailStatusRequest & GetTrailStatusRequest & GetTrailStatusRequest & GetTrailStatusRequest & GetTrailStatusRequest & GetTrailStatusRequest)[K]
    }>): Request<GetTrailStatusResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTrailStatus(
          this.ops["GetTrailStatus"].applicator.apply(partialParams)
        );
    }

    invokeListQueries(partialParams: ToOptional<{
      [K in keyof ListQueriesRequest & keyof ListQueriesRequest & keyof ListQueriesRequest & keyof ListQueriesRequest & keyof ListQueriesRequest & keyof ListQueriesRequest & keyof ListQueriesRequest & keyof ListQueriesRequest & keyof ListQueriesRequest]: (ListQueriesRequest & ListQueriesRequest & ListQueriesRequest & ListQueriesRequest & ListQueriesRequest & ListQueriesRequest & ListQueriesRequest & ListQueriesRequest & ListQueriesRequest)[K]
    }>): Request<ListQueriesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listQueries(
          this.ops["ListQueries"].applicator.apply(partialParams)
        );
    }

    invokeListTags(partialParams: ToOptional<{
      [K in keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest]: (ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest)[K]
    }>): Request<ListTagsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTags(
          this.ops["ListTags"].applicator.apply(partialParams)
        );
    }

    invokePutEventSelectors(partialParams: ToOptional<{
      [K in keyof PutEventSelectorsRequest & keyof PutEventSelectorsRequest & keyof PutEventSelectorsRequest & keyof PutEventSelectorsRequest & keyof PutEventSelectorsRequest & keyof PutEventSelectorsRequest & keyof PutEventSelectorsRequest & keyof PutEventSelectorsRequest & keyof PutEventSelectorsRequest]: (PutEventSelectorsRequest & PutEventSelectorsRequest & PutEventSelectorsRequest & PutEventSelectorsRequest & PutEventSelectorsRequest & PutEventSelectorsRequest & PutEventSelectorsRequest & PutEventSelectorsRequest & PutEventSelectorsRequest)[K]
    }>): Request<PutEventSelectorsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putEventSelectors(
          this.ops["PutEventSelectors"].applicator.apply(partialParams)
        );
    }

    invokePutInsightSelectors(partialParams: ToOptional<{
      [K in keyof PutInsightSelectorsRequest & keyof PutInsightSelectorsRequest & keyof PutInsightSelectorsRequest & keyof PutInsightSelectorsRequest & keyof PutInsightSelectorsRequest & keyof PutInsightSelectorsRequest & keyof PutInsightSelectorsRequest & keyof PutInsightSelectorsRequest & keyof PutInsightSelectorsRequest]: (PutInsightSelectorsRequest & PutInsightSelectorsRequest & PutInsightSelectorsRequest & PutInsightSelectorsRequest & PutInsightSelectorsRequest & PutInsightSelectorsRequest & PutInsightSelectorsRequest & PutInsightSelectorsRequest & PutInsightSelectorsRequest)[K]
    }>): Request<PutInsightSelectorsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putInsightSelectors(
          this.ops["PutInsightSelectors"].applicator.apply(partialParams)
        );
    }

    invokeRemoveTags(partialParams: ToOptional<{
      [K in keyof RemoveTagsRequest & keyof RemoveTagsRequest & keyof RemoveTagsRequest & keyof RemoveTagsRequest & keyof RemoveTagsRequest & keyof RemoveTagsRequest & keyof RemoveTagsRequest & keyof RemoveTagsRequest & keyof RemoveTagsRequest]: (RemoveTagsRequest & RemoveTagsRequest & RemoveTagsRequest & RemoveTagsRequest & RemoveTagsRequest & RemoveTagsRequest & RemoveTagsRequest & RemoveTagsRequest & RemoveTagsRequest)[K]
    }>): Request<RemoveTagsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeTags(
          this.ops["RemoveTags"].applicator.apply(partialParams)
        );
    }

    invokeRestoreEventDataStore(partialParams: ToOptional<{
      [K in keyof RestoreEventDataStoreRequest & keyof RestoreEventDataStoreRequest & keyof RestoreEventDataStoreRequest & keyof RestoreEventDataStoreRequest & keyof RestoreEventDataStoreRequest & keyof RestoreEventDataStoreRequest & keyof RestoreEventDataStoreRequest & keyof RestoreEventDataStoreRequest & keyof RestoreEventDataStoreRequest]: (RestoreEventDataStoreRequest & RestoreEventDataStoreRequest & RestoreEventDataStoreRequest & RestoreEventDataStoreRequest & RestoreEventDataStoreRequest & RestoreEventDataStoreRequest & RestoreEventDataStoreRequest & RestoreEventDataStoreRequest & RestoreEventDataStoreRequest)[K]
    }>): Request<RestoreEventDataStoreResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreEventDataStore(
          this.ops["RestoreEventDataStore"].applicator.apply(partialParams)
        );
    }

    invokeStartLogging(partialParams: ToOptional<{
      [K in keyof StartLoggingRequest & keyof StartLoggingRequest & keyof StartLoggingRequest & keyof StartLoggingRequest & keyof StartLoggingRequest & keyof StartLoggingRequest & keyof StartLoggingRequest & keyof StartLoggingRequest & keyof StartLoggingRequest]: (StartLoggingRequest & StartLoggingRequest & StartLoggingRequest & StartLoggingRequest & StartLoggingRequest & StartLoggingRequest & StartLoggingRequest & StartLoggingRequest & StartLoggingRequest)[K]
    }>): Request<StartLoggingResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startLogging(
          this.ops["StartLogging"].applicator.apply(partialParams)
        );
    }

    invokeStartQuery(partialParams: ToOptional<{
      [K in keyof StartQueryRequest & keyof StartQueryRequest & keyof StartQueryRequest & keyof StartQueryRequest & keyof StartQueryRequest & keyof StartQueryRequest & keyof StartQueryRequest & keyof StartQueryRequest & keyof StartQueryRequest]: (StartQueryRequest & StartQueryRequest & StartQueryRequest & StartQueryRequest & StartQueryRequest & StartQueryRequest & StartQueryRequest & StartQueryRequest & StartQueryRequest)[K]
    }>): Request<StartQueryResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startQuery(
          this.ops["StartQuery"].applicator.apply(partialParams)
        );
    }

    invokeStopLogging(partialParams: ToOptional<{
      [K in keyof StopLoggingRequest & keyof StopLoggingRequest & keyof StopLoggingRequest & keyof StopLoggingRequest & keyof StopLoggingRequest & keyof StopLoggingRequest & keyof StopLoggingRequest & keyof StopLoggingRequest & keyof StopLoggingRequest]: (StopLoggingRequest & StopLoggingRequest & StopLoggingRequest & StopLoggingRequest & StopLoggingRequest & StopLoggingRequest & StopLoggingRequest & StopLoggingRequest & StopLoggingRequest)[K]
    }>): Request<StopLoggingResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopLogging(
          this.ops["StopLogging"].applicator.apply(partialParams)
        );
    }

    invokeUpdateEventDataStore(partialParams: ToOptional<{
      [K in keyof UpdateEventDataStoreRequest & keyof UpdateEventDataStoreRequest & keyof UpdateEventDataStoreRequest & keyof UpdateEventDataStoreRequest & keyof UpdateEventDataStoreRequest & keyof UpdateEventDataStoreRequest & keyof UpdateEventDataStoreRequest & keyof UpdateEventDataStoreRequest & keyof UpdateEventDataStoreRequest]: (UpdateEventDataStoreRequest & UpdateEventDataStoreRequest & UpdateEventDataStoreRequest & UpdateEventDataStoreRequest & UpdateEventDataStoreRequest & UpdateEventDataStoreRequest & UpdateEventDataStoreRequest & UpdateEventDataStoreRequest & UpdateEventDataStoreRequest)[K]
    }>): Request<UpdateEventDataStoreResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateEventDataStore(
          this.ops["UpdateEventDataStore"].applicator.apply(partialParams)
        );
    }

    invokeUpdateTrail(partialParams: ToOptional<{
      [K in keyof UpdateTrailRequest & keyof UpdateTrailRequest & keyof UpdateTrailRequest & keyof UpdateTrailRequest & keyof UpdateTrailRequest & keyof Omit<UpdateTrailRequest, "Name"> & keyof UpdateTrailRequest & keyof UpdateTrailRequest & keyof UpdateTrailRequest]: (UpdateTrailRequest & UpdateTrailRequest & UpdateTrailRequest & UpdateTrailRequest & UpdateTrailRequest & Omit<UpdateTrailRequest, "Name"> & UpdateTrailRequest & UpdateTrailRequest & UpdateTrailRequest)[K]
    }>): Request<UpdateTrailResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTrail(
          this.ops["UpdateTrail"].applicator.apply(partialParams)
        );
    }
}