
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
    DescribeTrailsRequest,
    GetEventDataStoreRequest,
    GetEventSelectorsRequest,
    GetInsightSelectorsRequest,
    GetQueryResultsRequest,
    GetTrailRequest,
    GetTrailStatusRequest,
    ListEventDataStoresRequest,
    ListPublicKeysRequest,
    ListQueriesRequest,
    ListTagsRequest,
    ListTrailsRequest,
    LookupEventsRequest,
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
    DescribeTrailsResponse,
    GetEventDataStoreResponse,
    GetEventSelectorsResponse,
    GetInsightSelectorsResponse,
    GetQueryResultsResponse,
    GetTrailResponse,
    GetTrailStatusResponse,
    ListEventDataStoresResponse,
    ListPublicKeysResponse,
    ListQueriesResponse,
    ListTagsResponse,
    ListTrailsResponse,
    LookupEventsResponse,
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
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.cloudtrail.Trail>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.CloudTrail()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
          console.log(this.capitalizedParams);
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

    invokeAddTags(partialParams: ToOptional<{
      [K in keyof AddTagsRequest]: (AddTagsRequest)[K]
    }>): Request<AddTagsResponse, AWSError> {
        this.boot();
        return this.client.addTags(
          this.ops["AddTags"].apply(partialParams)
        );
    }

    invokeCancelQuery(partialParams: ToOptional<{
      [K in keyof CancelQueryRequest]: (CancelQueryRequest)[K]
    }>): Request<CancelQueryResponse, AWSError> {
        this.boot();
        return this.client.cancelQuery(
          this.ops["CancelQuery"].apply(partialParams)
        );
    }

    invokeCreateEventDataStore(partialParams: ToOptional<{
      [K in keyof CreateEventDataStoreRequest & keyof Omit<CreateEventDataStoreRequest, "Name">]: (CreateEventDataStoreRequest)[K]
    }>): Request<CreateEventDataStoreResponse, AWSError> {
        this.boot();
        return this.client.createEventDataStore(
          this.ops["CreateEventDataStore"].apply(partialParams)
        );
    }

    invokeCreateTrail(partialParams: ToOptional<{
      [K in keyof CreateTrailRequest & keyof Omit<CreateTrailRequest, "Name" | "S3BucketName">]: (CreateTrailRequest)[K]
    }>): Request<CreateTrailResponse, AWSError> {
        this.boot();
        return this.client.createTrail(
          this.ops["CreateTrail"].apply(partialParams)
        );
    }

    invokeDeleteEventDataStore(partialParams: ToOptional<{
      [K in keyof DeleteEventDataStoreRequest]: (DeleteEventDataStoreRequest)[K]
    }>): Request<DeleteEventDataStoreResponse, AWSError> {
        this.boot();
        return this.client.deleteEventDataStore(
          this.ops["DeleteEventDataStore"].apply(partialParams)
        );
    }

    invokeDeleteTrail(partialParams: ToOptional<{
      [K in keyof DeleteTrailRequest & keyof Omit<DeleteTrailRequest, "Name">]: (DeleteTrailRequest)[K]
    }>): Request<DeleteTrailResponse, AWSError> {
        this.boot();
        return this.client.deleteTrail(
          this.ops["DeleteTrail"].apply(partialParams)
        );
    }

    invokeDescribeQuery(partialParams: ToOptional<{
      [K in keyof DescribeQueryRequest]: (DescribeQueryRequest)[K]
    }>): Request<DescribeQueryResponse, AWSError> {
        this.boot();
        return this.client.describeQuery(
          this.ops["DescribeQuery"].apply(partialParams)
        );
    }

    invokeDescribeTrails(partialParams: ToOptional<{
      [K in keyof DescribeTrailsRequest]: (DescribeTrailsRequest)[K]
    }>): Request<DescribeTrailsResponse, AWSError> {
        this.boot();
        return this.client.describeTrails(
          this.ops["DescribeTrails"].apply(partialParams)
        );
    }

    invokeGetEventDataStore(partialParams: ToOptional<{
      [K in keyof GetEventDataStoreRequest]: (GetEventDataStoreRequest)[K]
    }>): Request<GetEventDataStoreResponse, AWSError> {
        this.boot();
        return this.client.getEventDataStore(
          this.ops["GetEventDataStore"].apply(partialParams)
        );
    }

    invokeGetEventSelectors(partialParams: ToOptional<{
      [K in keyof GetEventSelectorsRequest & keyof Omit<GetEventSelectorsRequest, "TrailName">]: (GetEventSelectorsRequest)[K]
    }>): Request<GetEventSelectorsResponse, AWSError> {
        this.boot();
        return this.client.getEventSelectors(
          this.ops["GetEventSelectors"].apply(partialParams)
        );
    }

    invokeGetInsightSelectors(partialParams: ToOptional<{
      [K in keyof GetInsightSelectorsRequest & keyof Omit<GetInsightSelectorsRequest, "TrailName">]: (GetInsightSelectorsRequest)[K]
    }>): Request<GetInsightSelectorsResponse, AWSError> {
        this.boot();
        return this.client.getInsightSelectors(
          this.ops["GetInsightSelectors"].apply(partialParams)
        );
    }

    invokeGetQueryResults(partialParams: ToOptional<{
      [K in keyof GetQueryResultsRequest]: (GetQueryResultsRequest)[K]
    }>): Request<GetQueryResultsResponse, AWSError> {
        this.boot();
        return this.client.getQueryResults(
          this.ops["GetQueryResults"].apply(partialParams)
        );
    }

    invokeGetTrail(partialParams: ToOptional<{
      [K in keyof GetTrailRequest & keyof Omit<GetTrailRequest, "Name">]: (GetTrailRequest)[K]
    }>): Request<GetTrailResponse, AWSError> {
        this.boot();
        return this.client.getTrail(
          this.ops["GetTrail"].apply(partialParams)
        );
    }

    invokeGetTrailStatus(partialParams: ToOptional<{
      [K in keyof GetTrailStatusRequest & keyof Omit<GetTrailStatusRequest, "Name">]: (GetTrailStatusRequest)[K]
    }>): Request<GetTrailStatusResponse, AWSError> {
        this.boot();
        return this.client.getTrailStatus(
          this.ops["GetTrailStatus"].apply(partialParams)
        );
    }

    invokeListEventDataStores(partialParams: ToOptional<{
      [K in keyof ListEventDataStoresRequest]: (ListEventDataStoresRequest)[K]
    }>): Request<ListEventDataStoresResponse, AWSError> {
        this.boot();
        return this.client.listEventDataStores(
          this.ops["ListEventDataStores"].apply(partialParams)
        );
    }

    invokeListPublicKeys(partialParams: ToOptional<{
      [K in keyof ListPublicKeysRequest]: (ListPublicKeysRequest)[K]
    }>): Request<ListPublicKeysResponse, AWSError> {
        this.boot();
        return this.client.listPublicKeys(
          this.ops["ListPublicKeys"].apply(partialParams)
        );
    }

    invokeListQueries(partialParams: ToOptional<{
      [K in keyof ListQueriesRequest]: (ListQueriesRequest)[K]
    }>): Request<ListQueriesResponse, AWSError> {
        this.boot();
        return this.client.listQueries(
          this.ops["ListQueries"].apply(partialParams)
        );
    }

    invokeListTags(partialParams: ToOptional<{
      [K in keyof ListTagsRequest]: (ListTagsRequest)[K]
    }>): Request<ListTagsResponse, AWSError> {
        this.boot();
        return this.client.listTags(
          this.ops["ListTags"].apply(partialParams)
        );
    }

    invokeListTrails(partialParams: ToOptional<{
      [K in keyof ListTrailsRequest]: (ListTrailsRequest)[K]
    }>): Request<ListTrailsResponse, AWSError> {
        this.boot();
        return this.client.listTrails(
          this.ops["ListTrails"].apply(partialParams)
        );
    }

    invokeLookupEvents(partialParams: ToOptional<{
      [K in keyof LookupEventsRequest]: (LookupEventsRequest)[K]
    }>): Request<LookupEventsResponse, AWSError> {
        this.boot();
        return this.client.lookupEvents(
          this.ops["LookupEvents"].apply(partialParams)
        );
    }

    invokePutEventSelectors(partialParams: ToOptional<{
      [K in keyof PutEventSelectorsRequest & keyof Omit<PutEventSelectorsRequest, "TrailName">]: (PutEventSelectorsRequest)[K]
    }>): Request<PutEventSelectorsResponse, AWSError> {
        this.boot();
        return this.client.putEventSelectors(
          this.ops["PutEventSelectors"].apply(partialParams)
        );
    }

    invokePutInsightSelectors(partialParams: ToOptional<{
      [K in keyof PutInsightSelectorsRequest & keyof Omit<PutInsightSelectorsRequest, "TrailName">]: (PutInsightSelectorsRequest)[K]
    }>): Request<PutInsightSelectorsResponse, AWSError> {
        this.boot();
        return this.client.putInsightSelectors(
          this.ops["PutInsightSelectors"].apply(partialParams)
        );
    }

    invokeRemoveTags(partialParams: ToOptional<{
      [K in keyof RemoveTagsRequest]: (RemoveTagsRequest)[K]
    }>): Request<RemoveTagsResponse, AWSError> {
        this.boot();
        return this.client.removeTags(
          this.ops["RemoveTags"].apply(partialParams)
        );
    }

    invokeRestoreEventDataStore(partialParams: ToOptional<{
      [K in keyof RestoreEventDataStoreRequest]: (RestoreEventDataStoreRequest)[K]
    }>): Request<RestoreEventDataStoreResponse, AWSError> {
        this.boot();
        return this.client.restoreEventDataStore(
          this.ops["RestoreEventDataStore"].apply(partialParams)
        );
    }

    invokeStartLogging(partialParams: ToOptional<{
      [K in keyof StartLoggingRequest & keyof Omit<StartLoggingRequest, "Name">]: (StartLoggingRequest)[K]
    }>): Request<StartLoggingResponse, AWSError> {
        this.boot();
        return this.client.startLogging(
          this.ops["StartLogging"].apply(partialParams)
        );
    }

    invokeStartQuery(partialParams: ToOptional<{
      [K in keyof StartQueryRequest]: (StartQueryRequest)[K]
    }>): Request<StartQueryResponse, AWSError> {
        this.boot();
        return this.client.startQuery(
          this.ops["StartQuery"].apply(partialParams)
        );
    }

    invokeStopLogging(partialParams: ToOptional<{
      [K in keyof StopLoggingRequest & keyof Omit<StopLoggingRequest, "Name">]: (StopLoggingRequest)[K]
    }>): Request<StopLoggingResponse, AWSError> {
        this.boot();
        return this.client.stopLogging(
          this.ops["StopLogging"].apply(partialParams)
        );
    }

    invokeUpdateEventDataStore(partialParams: ToOptional<{
      [K in keyof UpdateEventDataStoreRequest]: (UpdateEventDataStoreRequest)[K]
    }>): Request<UpdateEventDataStoreResponse, AWSError> {
        this.boot();
        return this.client.updateEventDataStore(
          this.ops["UpdateEventDataStore"].apply(partialParams)
        );
    }

    invokeUpdateTrail(partialParams: ToOptional<{
      [K in keyof UpdateTrailRequest & keyof Omit<UpdateTrailRequest, "Name">]: (UpdateTrailRequest)[K]
    }>): Request<UpdateTrailResponse, AWSError> {
        this.boot();
        return this.client.updateTrail(
          this.ops["UpdateTrail"].apply(partialParams)
        );
    }
}