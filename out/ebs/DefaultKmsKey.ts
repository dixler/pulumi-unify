
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

export default class extends aws.ebs.DefaultKmsKey {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.ebs.DefaultKmsKey>) {
        super(...args)
        this.client = new awssdk.EBS()
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

    invokeCompleteSnapshot(partialParams: ToOptional<{
      [K in keyof CompleteSnapshotRequest]: (CompleteSnapshotRequest)[K]
    }>): Request<CompleteSnapshotResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.completeSnapshot(
          this.ops["CompleteSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeGetSnapshotBlock(partialParams: ToOptional<{
      [K in keyof GetSnapshotBlockRequest]: (GetSnapshotBlockRequest)[K]
    }>): Request<GetSnapshotBlockResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSnapshotBlock(
          this.ops["GetSnapshotBlock"].applicator.apply(partialParams)
        );
    }

    invokeListChangedBlocks(partialParams: ToOptional<{
      [K in keyof ListChangedBlocksRequest]: (ListChangedBlocksRequest)[K]
    }>): Request<ListChangedBlocksResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listChangedBlocks(
          this.ops["ListChangedBlocks"].applicator.apply(partialParams)
        );
    }

    invokeListSnapshotBlocks(partialParams: ToOptional<{
      [K in keyof ListSnapshotBlocksRequest]: (ListSnapshotBlocksRequest)[K]
    }>): Request<ListSnapshotBlocksResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listSnapshotBlocks(
          this.ops["ListSnapshotBlocks"].applicator.apply(partialParams)
        );
    }

    invokePutSnapshotBlock(partialParams: ToOptional<{
      [K in keyof PutSnapshotBlockRequest]: (PutSnapshotBlockRequest)[K]
    }>): Request<PutSnapshotBlockResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putSnapshotBlock(
          this.ops["PutSnapshotBlock"].applicator.apply(partialParams)
        );
    }

    invokeStartSnapshot(partialParams: ToOptional<{
      [K in keyof StartSnapshotRequest]: (StartSnapshotRequest)[K]
    }>): Request<StartSnapshotResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startSnapshot(
          this.ops["StartSnapshot"].applicator.apply(partialParams)
        );
    }
}