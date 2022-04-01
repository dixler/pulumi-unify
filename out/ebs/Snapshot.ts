
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CompleteSnapshotRequest,
    GetSnapshotBlockRequest,
    ListChangedBlocksRequest,
    ListSnapshotBlocksRequest,
    PutSnapshotBlockRequest,
    StartSnapshotRequest,
    CompleteSnapshotResponse,
    GetSnapshotBlockResponse,
    ListChangedBlocksResponse,
    ListSnapshotBlocksResponse,
    PutSnapshotBlockResponse,
    StartSnapshotResponse
} from "aws-sdk/clients/ebs";
const schema = require("../apis/ebs-2019-11-02.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ebs.Snapshot {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.ebs.Snapshot>) {
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
      [K in keyof CompleteSnapshotRequest]: (CompleteSnapshotRequest)[K]
    }>): Request<CompleteSnapshotResponse, AWSError> {
        this.boot();
        return this.client.completeSnapshot(
          this.ops["CompleteSnapshot"].apply(partialParams)
        );
    }

    invokeGetSnapshotBlock(partialParams: ToOptional<{
      [K in keyof GetSnapshotBlockRequest]: (GetSnapshotBlockRequest)[K]
    }>): Request<GetSnapshotBlockResponse, AWSError> {
        this.boot();
        return this.client.getSnapshotBlock(
          this.ops["GetSnapshotBlock"].apply(partialParams)
        );
    }

    invokeListChangedBlocks(partialParams: ToOptional<{
      [K in keyof ListChangedBlocksRequest]: (ListChangedBlocksRequest)[K]
    }>): Request<ListChangedBlocksResponse, AWSError> {
        this.boot();
        return this.client.listChangedBlocks(
          this.ops["ListChangedBlocks"].apply(partialParams)
        );
    }

    invokeListSnapshotBlocks(partialParams: ToOptional<{
      [K in keyof ListSnapshotBlocksRequest]: (ListSnapshotBlocksRequest)[K]
    }>): Request<ListSnapshotBlocksResponse, AWSError> {
        this.boot();
        return this.client.listSnapshotBlocks(
          this.ops["ListSnapshotBlocks"].apply(partialParams)
        );
    }

    invokePutSnapshotBlock(partialParams: ToOptional<{
      [K in keyof PutSnapshotBlockRequest]: (PutSnapshotBlockRequest)[K]
    }>): Request<PutSnapshotBlockResponse, AWSError> {
        this.boot();
        return this.client.putSnapshotBlock(
          this.ops["PutSnapshotBlock"].apply(partialParams)
        );
    }

    invokeStartSnapshot(partialParams: ToOptional<{
      [K in keyof StartSnapshotRequest]: (StartSnapshotRequest)[K]
    }>): Request<StartSnapshotResponse, AWSError> {
        this.boot();
        return this.client.startSnapshot(
          this.ops["StartSnapshot"].apply(partialParams)
        );
    }
}