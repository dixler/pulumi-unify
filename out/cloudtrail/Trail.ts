
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateEventDataStoreRequest,
    CreateTrailRequest,
    DeleteTrailRequest,
    GetEventSelectorsRequest,
    GetInsightSelectorsRequest,
    GetTrailRequest,
    GetTrailStatusRequest,
    PutEventSelectorsRequest,
    PutInsightSelectorsRequest,
    StartLoggingRequest,
    StopLoggingRequest,
    UpdateTrailRequest,
    CreateEventDataStoreResponse,
    CreateTrailResponse,
    DeleteTrailResponse,
    GetEventSelectorsResponse,
    GetInsightSelectorsResponse,
    GetTrailResponse,
    GetTrailStatusResponse,
    PutEventSelectorsResponse,
    PutInsightSelectorsResponse,
    StartLoggingResponse,
    StopLoggingResponse,
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

    invokeDeleteTrail(partialParams: ToOptional<{
      [K in keyof DeleteTrailRequest & keyof Omit<DeleteTrailRequest, "Name">]: (DeleteTrailRequest)[K]
    }>): Request<DeleteTrailResponse, AWSError> {
        this.boot();
        return this.client.deleteTrail(
          this.ops["DeleteTrail"].apply(partialParams)
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

    invokeStartLogging(partialParams: ToOptional<{
      [K in keyof StartLoggingRequest & keyof Omit<StartLoggingRequest, "Name">]: (StartLoggingRequest)[K]
    }>): Request<StartLoggingResponse, AWSError> {
        this.boot();
        return this.client.startLogging(
          this.ops["StartLogging"].apply(partialParams)
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

    invokeUpdateTrail(partialParams: ToOptional<{
      [K in keyof UpdateTrailRequest & keyof Omit<UpdateTrailRequest, "Name">]: (UpdateTrailRequest)[K]
    }>): Request<UpdateTrailResponse, AWSError> {
        this.boot();
        return this.client.updateTrail(
          this.ops["UpdateTrail"].apply(partialParams)
        );
    }
}