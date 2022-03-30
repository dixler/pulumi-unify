
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.cloudtrail.Trail {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.cloudtrail.Trail>) {
        super(...args)
        this.client = new awssdk.CloudTrail()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/cloudtrail-2013-11-01.normal.json"), this.client)
    }

    invokeAddTags(partialParams: ToOptional<{
      [K in keyof AddTagsRequest & keyof AddTagsRequest & keyof AddTagsRequest & keyof AddTagsRequest & keyof AddTagsRequest & keyof AddTagsRequest & keyof AddTagsRequest & keyof AddTagsRequest & keyof AddTagsRequest]: (AddTagsRequest & AddTagsRequest & AddTagsRequest & AddTagsRequest & AddTagsRequest & AddTagsRequest & AddTagsRequest & AddTagsRequest & AddTagsRequest)[K]
    }>): AddTagsResponse {
        return this.client.addTags(
            this.ops["AddTags"].apply(partialParams)
        );
    }

    invokeCancelQuery(partialParams: ToOptional<{
      [K in keyof CancelQueryRequest & keyof CancelQueryRequest & keyof CancelQueryRequest & keyof CancelQueryRequest & keyof CancelQueryRequest & keyof CancelQueryRequest & keyof CancelQueryRequest & keyof CancelQueryRequest & keyof CancelQueryRequest]: (CancelQueryRequest & CancelQueryRequest & CancelQueryRequest & CancelQueryRequest & CancelQueryRequest & CancelQueryRequest & CancelQueryRequest & CancelQueryRequest & CancelQueryRequest)[K]
    }>): CancelQueryResponse {
        return this.client.cancelQuery(
            this.ops["CancelQuery"].apply(partialParams)
        );
    }

    invokeCreateEventDataStore(partialParams: ToOptional<{
      [K in keyof CreateEventDataStoreRequest & keyof CreateEventDataStoreRequest & keyof CreateEventDataStoreRequest & keyof CreateEventDataStoreRequest & keyof CreateEventDataStoreRequest & keyof CreateEventDataStoreRequest & keyof CreateEventDataStoreRequest & keyof CreateEventDataStoreRequest & keyof CreateEventDataStoreRequest]: (CreateEventDataStoreRequest & CreateEventDataStoreRequest & CreateEventDataStoreRequest & CreateEventDataStoreRequest & CreateEventDataStoreRequest & CreateEventDataStoreRequest & CreateEventDataStoreRequest & CreateEventDataStoreRequest & CreateEventDataStoreRequest)[K]
    }>): CreateEventDataStoreResponse {
        return this.client.createEventDataStore(
            this.ops["CreateEventDataStore"].apply(partialParams)
        );
    }

    invokeCreateTrail(partialParams: ToOptional<{
      [K in keyof CreateTrailRequest & keyof CreateTrailRequest & keyof CreateTrailRequest & keyof CreateTrailRequest & keyof CreateTrailRequest & keyof CreateTrailRequest & keyof CreateTrailRequest & keyof CreateTrailRequest & keyof CreateTrailRequest]: (CreateTrailRequest & CreateTrailRequest & CreateTrailRequest & CreateTrailRequest & CreateTrailRequest & CreateTrailRequest & CreateTrailRequest & CreateTrailRequest & CreateTrailRequest)[K]
    }>): CreateTrailResponse {
        return this.client.createTrail(
            this.ops["CreateTrail"].apply(partialParams)
        );
    }

    invokeDeleteEventDataStore(partialParams: ToOptional<{
      [K in keyof DeleteEventDataStoreRequest & keyof DeleteEventDataStoreRequest & keyof DeleteEventDataStoreRequest & keyof DeleteEventDataStoreRequest & keyof DeleteEventDataStoreRequest & keyof DeleteEventDataStoreRequest & keyof DeleteEventDataStoreRequest & keyof DeleteEventDataStoreRequest & keyof DeleteEventDataStoreRequest]: (DeleteEventDataStoreRequest & DeleteEventDataStoreRequest & DeleteEventDataStoreRequest & DeleteEventDataStoreRequest & DeleteEventDataStoreRequest & DeleteEventDataStoreRequest & DeleteEventDataStoreRequest & DeleteEventDataStoreRequest & DeleteEventDataStoreRequest)[K]
    }>): DeleteEventDataStoreResponse {
        return this.client.deleteEventDataStore(
            this.ops["DeleteEventDataStore"].apply(partialParams)
        );
    }

    invokeDeleteTrail(partialParams: ToOptional<{
      [K in keyof DeleteTrailRequest & keyof DeleteTrailRequest & keyof DeleteTrailRequest & keyof DeleteTrailRequest & keyof DeleteTrailRequest & keyof DeleteTrailRequest & keyof DeleteTrailRequest & keyof DeleteTrailRequest & keyof DeleteTrailRequest]: (DeleteTrailRequest & DeleteTrailRequest & DeleteTrailRequest & DeleteTrailRequest & DeleteTrailRequest & DeleteTrailRequest & DeleteTrailRequest & DeleteTrailRequest & DeleteTrailRequest)[K]
    }>): DeleteTrailResponse {
        return this.client.deleteTrail(
            this.ops["DeleteTrail"].apply(partialParams)
        );
    }

    invokeDescribeQuery(partialParams: ToOptional<{
      [K in keyof DescribeQueryRequest & keyof DescribeQueryRequest & keyof DescribeQueryRequest & keyof DescribeQueryRequest & keyof DescribeQueryRequest & keyof DescribeQueryRequest & keyof DescribeQueryRequest & keyof DescribeQueryRequest & keyof DescribeQueryRequest]: (DescribeQueryRequest & DescribeQueryRequest & DescribeQueryRequest & DescribeQueryRequest & DescribeQueryRequest & DescribeQueryRequest & DescribeQueryRequest & DescribeQueryRequest & DescribeQueryRequest)[K]
    }>): DescribeQueryResponse {
        return this.client.describeQuery(
            this.ops["DescribeQuery"].apply(partialParams)
        );
    }

    invokeGetEventDataStore(partialParams: ToOptional<{
      [K in keyof GetEventDataStoreRequest & keyof GetEventDataStoreRequest & keyof GetEventDataStoreRequest & keyof GetEventDataStoreRequest & keyof GetEventDataStoreRequest & keyof GetEventDataStoreRequest & keyof GetEventDataStoreRequest & keyof GetEventDataStoreRequest & keyof GetEventDataStoreRequest]: (GetEventDataStoreRequest & GetEventDataStoreRequest & GetEventDataStoreRequest & GetEventDataStoreRequest & GetEventDataStoreRequest & GetEventDataStoreRequest & GetEventDataStoreRequest & GetEventDataStoreRequest & GetEventDataStoreRequest)[K]
    }>): GetEventDataStoreResponse {
        return this.client.getEventDataStore(
            this.ops["GetEventDataStore"].apply(partialParams)
        );
    }

    invokeGetEventSelectors(partialParams: ToOptional<{
      [K in keyof GetEventSelectorsRequest & keyof GetEventSelectorsRequest & keyof GetEventSelectorsRequest & keyof GetEventSelectorsRequest & keyof GetEventSelectorsRequest & keyof GetEventSelectorsRequest & keyof GetEventSelectorsRequest & keyof GetEventSelectorsRequest & keyof GetEventSelectorsRequest]: (GetEventSelectorsRequest & GetEventSelectorsRequest & GetEventSelectorsRequest & GetEventSelectorsRequest & GetEventSelectorsRequest & GetEventSelectorsRequest & GetEventSelectorsRequest & GetEventSelectorsRequest & GetEventSelectorsRequest)[K]
    }>): GetEventSelectorsResponse {
        return this.client.getEventSelectors(
            this.ops["GetEventSelectors"].apply(partialParams)
        );
    }

    invokeGetInsightSelectors(partialParams: ToOptional<{
      [K in keyof GetInsightSelectorsRequest & keyof GetInsightSelectorsRequest & keyof GetInsightSelectorsRequest & keyof GetInsightSelectorsRequest & keyof GetInsightSelectorsRequest & keyof GetInsightSelectorsRequest & keyof GetInsightSelectorsRequest & keyof GetInsightSelectorsRequest & keyof GetInsightSelectorsRequest]: (GetInsightSelectorsRequest & GetInsightSelectorsRequest & GetInsightSelectorsRequest & GetInsightSelectorsRequest & GetInsightSelectorsRequest & GetInsightSelectorsRequest & GetInsightSelectorsRequest & GetInsightSelectorsRequest & GetInsightSelectorsRequest)[K]
    }>): GetInsightSelectorsResponse {
        return this.client.getInsightSelectors(
            this.ops["GetInsightSelectors"].apply(partialParams)
        );
    }

    invokeGetQueryResults(partialParams: ToOptional<{
      [K in keyof GetQueryResultsRequest & keyof GetQueryResultsRequest & keyof GetQueryResultsRequest & keyof GetQueryResultsRequest & keyof GetQueryResultsRequest & keyof GetQueryResultsRequest & keyof GetQueryResultsRequest & keyof GetQueryResultsRequest & keyof GetQueryResultsRequest]: (GetQueryResultsRequest & GetQueryResultsRequest & GetQueryResultsRequest & GetQueryResultsRequest & GetQueryResultsRequest & GetQueryResultsRequest & GetQueryResultsRequest & GetQueryResultsRequest & GetQueryResultsRequest)[K]
    }>): GetQueryResultsResponse {
        return this.client.getQueryResults(
            this.ops["GetQueryResults"].apply(partialParams)
        );
    }

    invokeGetTrail(partialParams: ToOptional<{
      [K in keyof GetTrailRequest & keyof GetTrailRequest & keyof GetTrailRequest & keyof GetTrailRequest & keyof GetTrailRequest & keyof GetTrailRequest & keyof GetTrailRequest & keyof GetTrailRequest & keyof GetTrailRequest]: (GetTrailRequest & GetTrailRequest & GetTrailRequest & GetTrailRequest & GetTrailRequest & GetTrailRequest & GetTrailRequest & GetTrailRequest & GetTrailRequest)[K]
    }>): GetTrailResponse {
        return this.client.getTrail(
            this.ops["GetTrail"].apply(partialParams)
        );
    }

    invokeGetTrailStatus(partialParams: ToOptional<{
      [K in keyof GetTrailStatusRequest & keyof GetTrailStatusRequest & keyof GetTrailStatusRequest & keyof GetTrailStatusRequest & keyof GetTrailStatusRequest & keyof GetTrailStatusRequest & keyof GetTrailStatusRequest & keyof GetTrailStatusRequest & keyof GetTrailStatusRequest]: (GetTrailStatusRequest & GetTrailStatusRequest & GetTrailStatusRequest & GetTrailStatusRequest & GetTrailStatusRequest & GetTrailStatusRequest & GetTrailStatusRequest & GetTrailStatusRequest & GetTrailStatusRequest)[K]
    }>): GetTrailStatusResponse {
        return this.client.getTrailStatus(
            this.ops["GetTrailStatus"].apply(partialParams)
        );
    }

    invokeListQueries(partialParams: ToOptional<{
      [K in keyof ListQueriesRequest & keyof ListQueriesRequest & keyof ListQueriesRequest & keyof ListQueriesRequest & keyof ListQueriesRequest & keyof ListQueriesRequest & keyof ListQueriesRequest & keyof ListQueriesRequest & keyof ListQueriesRequest]: (ListQueriesRequest & ListQueriesRequest & ListQueriesRequest & ListQueriesRequest & ListQueriesRequest & ListQueriesRequest & ListQueriesRequest & ListQueriesRequest & ListQueriesRequest)[K]
    }>): ListQueriesResponse {
        return this.client.listQueries(
            this.ops["ListQueries"].apply(partialParams)
        );
    }

    invokeListTags(partialParams: ToOptional<{
      [K in keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest]: (ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest)[K]
    }>): ListTagsResponse {
        return this.client.listTags(
            this.ops["ListTags"].apply(partialParams)
        );
    }

    invokePutEventSelectors(partialParams: ToOptional<{
      [K in keyof PutEventSelectorsRequest & keyof PutEventSelectorsRequest & keyof PutEventSelectorsRequest & keyof PutEventSelectorsRequest & keyof PutEventSelectorsRequest & keyof PutEventSelectorsRequest & keyof PutEventSelectorsRequest & keyof PutEventSelectorsRequest & keyof PutEventSelectorsRequest]: (PutEventSelectorsRequest & PutEventSelectorsRequest & PutEventSelectorsRequest & PutEventSelectorsRequest & PutEventSelectorsRequest & PutEventSelectorsRequest & PutEventSelectorsRequest & PutEventSelectorsRequest & PutEventSelectorsRequest)[K]
    }>): PutEventSelectorsResponse {
        return this.client.putEventSelectors(
            this.ops["PutEventSelectors"].apply(partialParams)
        );
    }

    invokePutInsightSelectors(partialParams: ToOptional<{
      [K in keyof PutInsightSelectorsRequest & keyof PutInsightSelectorsRequest & keyof PutInsightSelectorsRequest & keyof PutInsightSelectorsRequest & keyof PutInsightSelectorsRequest & keyof PutInsightSelectorsRequest & keyof PutInsightSelectorsRequest & keyof PutInsightSelectorsRequest & keyof PutInsightSelectorsRequest]: (PutInsightSelectorsRequest & PutInsightSelectorsRequest & PutInsightSelectorsRequest & PutInsightSelectorsRequest & PutInsightSelectorsRequest & PutInsightSelectorsRequest & PutInsightSelectorsRequest & PutInsightSelectorsRequest & PutInsightSelectorsRequest)[K]
    }>): PutInsightSelectorsResponse {
        return this.client.putInsightSelectors(
            this.ops["PutInsightSelectors"].apply(partialParams)
        );
    }

    invokeRemoveTags(partialParams: ToOptional<{
      [K in keyof RemoveTagsRequest & keyof RemoveTagsRequest & keyof RemoveTagsRequest & keyof RemoveTagsRequest & keyof RemoveTagsRequest & keyof RemoveTagsRequest & keyof RemoveTagsRequest & keyof RemoveTagsRequest & keyof RemoveTagsRequest]: (RemoveTagsRequest & RemoveTagsRequest & RemoveTagsRequest & RemoveTagsRequest & RemoveTagsRequest & RemoveTagsRequest & RemoveTagsRequest & RemoveTagsRequest & RemoveTagsRequest)[K]
    }>): RemoveTagsResponse {
        return this.client.removeTags(
            this.ops["RemoveTags"].apply(partialParams)
        );
    }

    invokeRestoreEventDataStore(partialParams: ToOptional<{
      [K in keyof RestoreEventDataStoreRequest & keyof RestoreEventDataStoreRequest & keyof RestoreEventDataStoreRequest & keyof RestoreEventDataStoreRequest & keyof RestoreEventDataStoreRequest & keyof RestoreEventDataStoreRequest & keyof RestoreEventDataStoreRequest & keyof RestoreEventDataStoreRequest & keyof RestoreEventDataStoreRequest]: (RestoreEventDataStoreRequest & RestoreEventDataStoreRequest & RestoreEventDataStoreRequest & RestoreEventDataStoreRequest & RestoreEventDataStoreRequest & RestoreEventDataStoreRequest & RestoreEventDataStoreRequest & RestoreEventDataStoreRequest & RestoreEventDataStoreRequest)[K]
    }>): RestoreEventDataStoreResponse {
        return this.client.restoreEventDataStore(
            this.ops["RestoreEventDataStore"].apply(partialParams)
        );
    }

    invokeStartLogging(partialParams: ToOptional<{
      [K in keyof StartLoggingRequest & keyof StartLoggingRequest & keyof StartLoggingRequest & keyof StartLoggingRequest & keyof StartLoggingRequest & keyof StartLoggingRequest & keyof StartLoggingRequest & keyof StartLoggingRequest & keyof StartLoggingRequest]: (StartLoggingRequest & StartLoggingRequest & StartLoggingRequest & StartLoggingRequest & StartLoggingRequest & StartLoggingRequest & StartLoggingRequest & StartLoggingRequest & StartLoggingRequest)[K]
    }>): StartLoggingResponse {
        return this.client.startLogging(
            this.ops["StartLogging"].apply(partialParams)
        );
    }

    invokeStartQuery(partialParams: ToOptional<{
      [K in keyof StartQueryRequest & keyof StartQueryRequest & keyof StartQueryRequest & keyof StartQueryRequest & keyof StartQueryRequest & keyof StartQueryRequest & keyof StartQueryRequest & keyof StartQueryRequest & keyof StartQueryRequest]: (StartQueryRequest & StartQueryRequest & StartQueryRequest & StartQueryRequest & StartQueryRequest & StartQueryRequest & StartQueryRequest & StartQueryRequest & StartQueryRequest)[K]
    }>): StartQueryResponse {
        return this.client.startQuery(
            this.ops["StartQuery"].apply(partialParams)
        );
    }

    invokeStopLogging(partialParams: ToOptional<{
      [K in keyof StopLoggingRequest & keyof StopLoggingRequest & keyof StopLoggingRequest & keyof StopLoggingRequest & keyof StopLoggingRequest & keyof StopLoggingRequest & keyof StopLoggingRequest & keyof StopLoggingRequest & keyof StopLoggingRequest]: (StopLoggingRequest & StopLoggingRequest & StopLoggingRequest & StopLoggingRequest & StopLoggingRequest & StopLoggingRequest & StopLoggingRequest & StopLoggingRequest & StopLoggingRequest)[K]
    }>): StopLoggingResponse {
        return this.client.stopLogging(
            this.ops["StopLogging"].apply(partialParams)
        );
    }

    invokeUpdateEventDataStore(partialParams: ToOptional<{
      [K in keyof UpdateEventDataStoreRequest & keyof UpdateEventDataStoreRequest & keyof UpdateEventDataStoreRequest & keyof UpdateEventDataStoreRequest & keyof UpdateEventDataStoreRequest & keyof UpdateEventDataStoreRequest & keyof UpdateEventDataStoreRequest & keyof UpdateEventDataStoreRequest & keyof UpdateEventDataStoreRequest]: (UpdateEventDataStoreRequest & UpdateEventDataStoreRequest & UpdateEventDataStoreRequest & UpdateEventDataStoreRequest & UpdateEventDataStoreRequest & UpdateEventDataStoreRequest & UpdateEventDataStoreRequest & UpdateEventDataStoreRequest & UpdateEventDataStoreRequest)[K]
    }>): UpdateEventDataStoreResponse {
        return this.client.updateEventDataStore(
            this.ops["UpdateEventDataStore"].apply(partialParams)
        );
    }

    invokeUpdateTrail(partialParams: ToOptional<{
      [K in keyof UpdateTrailRequest & keyof UpdateTrailRequest & keyof UpdateTrailRequest & keyof UpdateTrailRequest & keyof UpdateTrailRequest & keyof Omit<UpdateTrailRequest, "Name"> & keyof UpdateTrailRequest & keyof UpdateTrailRequest & keyof UpdateTrailRequest]: (UpdateTrailRequest & UpdateTrailRequest & UpdateTrailRequest & UpdateTrailRequest & UpdateTrailRequest & Omit<UpdateTrailRequest, "Name"> & UpdateTrailRequest & UpdateTrailRequest & UpdateTrailRequest)[K]
    }>): UpdateTrailResponse {
        return this.client.updateTrail(
            this.ops["UpdateTrail"].apply(partialParams)
        );
    }
}