
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CompleteSnapshotRequest,
    GetSnapshotBlockRequest,
    ListSnapshotBlocksRequest,
    PutSnapshotBlockRequest,
    CompleteSnapshotResponse,
    GetSnapshotBlockResponse,
    ListSnapshotBlocksResponse,
    PutSnapshotBlockResponse
} from "aws-sdk/clients/ebs";
const schema = require("../apis/ebs-2019-11-02.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ebs.Volume {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.ebs.Volume>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.EBS()
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

    invokeCompleteSnapshot(partialParams: ToOptional<{
      [K in keyof CompleteSnapshotRequest & keyof Omit<CompleteSnapshotRequest, "SnapshotId">]: (CompleteSnapshotRequest)[K]
    }>): Request<CompleteSnapshotResponse, AWSError> {
        this.boot();
        return this.client.completeSnapshot(
          this.ops["CompleteSnapshot"].apply(partialParams)
        );
    }

    invokeGetSnapshotBlock(partialParams: ToOptional<{
      [K in keyof GetSnapshotBlockRequest & keyof Omit<GetSnapshotBlockRequest, "SnapshotId">]: (GetSnapshotBlockRequest)[K]
    }>): Request<GetSnapshotBlockResponse, AWSError> {
        this.boot();
        return this.client.getSnapshotBlock(
          this.ops["GetSnapshotBlock"].apply(partialParams)
        );
    }

    invokeListSnapshotBlocks(partialParams: ToOptional<{
      [K in keyof ListSnapshotBlocksRequest & keyof Omit<ListSnapshotBlocksRequest, "SnapshotId">]: (ListSnapshotBlocksRequest)[K]
    }>): Request<ListSnapshotBlocksResponse, AWSError> {
        this.boot();
        return this.client.listSnapshotBlocks(
          this.ops["ListSnapshotBlocks"].apply(partialParams)
        );
    }

    invokePutSnapshotBlock(partialParams: ToOptional<{
      [K in keyof PutSnapshotBlockRequest & keyof Omit<PutSnapshotBlockRequest, "SnapshotId">]: (PutSnapshotBlockRequest)[K]
    }>): Request<PutSnapshotBlockResponse, AWSError> {
        this.boot();
        return this.client.putSnapshotBlock(
          this.ops["PutSnapshotBlock"].apply(partialParams)
        );
    }
}