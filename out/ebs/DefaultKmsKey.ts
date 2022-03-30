
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ebs.DefaultKmsKey {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.ebs.DefaultKmsKey>) {
        super(...args)
        this.client = new awssdk.EBS()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/ebs-2019-11-02.normal.json"), this.client)
    }

    invokeCompleteSnapshot(partialParams: ToOptional<{
      [K in keyof CompleteSnapshotRequest]: (CompleteSnapshotRequest)[K]
    }>): CompleteSnapshotResponse {
        return this.client.completeSnapshot(
            this.ops["CompleteSnapshot"].apply(partialParams)
        );
    }

    invokeGetSnapshotBlock(partialParams: ToOptional<{
      [K in keyof GetSnapshotBlockRequest]: (GetSnapshotBlockRequest)[K]
    }>): GetSnapshotBlockResponse {
        return this.client.getSnapshotBlock(
            this.ops["GetSnapshotBlock"].apply(partialParams)
        );
    }

    invokeListChangedBlocks(partialParams: ToOptional<{
      [K in keyof ListChangedBlocksRequest]: (ListChangedBlocksRequest)[K]
    }>): ListChangedBlocksResponse {
        return this.client.listChangedBlocks(
            this.ops["ListChangedBlocks"].apply(partialParams)
        );
    }

    invokeListSnapshotBlocks(partialParams: ToOptional<{
      [K in keyof ListSnapshotBlocksRequest]: (ListSnapshotBlocksRequest)[K]
    }>): ListSnapshotBlocksResponse {
        return this.client.listSnapshotBlocks(
            this.ops["ListSnapshotBlocks"].apply(partialParams)
        );
    }

    invokePutSnapshotBlock(partialParams: ToOptional<{
      [K in keyof PutSnapshotBlockRequest]: (PutSnapshotBlockRequest)[K]
    }>): PutSnapshotBlockResponse {
        return this.client.putSnapshotBlock(
            this.ops["PutSnapshotBlock"].apply(partialParams)
        );
    }

    invokeStartSnapshot(partialParams: ToOptional<{
      [K in keyof StartSnapshotRequest]: (StartSnapshotRequest)[K]
    }>): StartSnapshotResponse {
        return this.client.startSnapshot(
            this.ops["StartSnapshot"].apply(partialParams)
        );
    }
}