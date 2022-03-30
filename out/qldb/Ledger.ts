
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    CancelJournalKinesisStreamRequest,
    CreateLedgerRequest,
    DeleteLedgerRequest,
    DescribeJournalKinesisStreamRequest,
    DescribeJournalS3ExportRequest,
    DescribeLedgerRequest,
    ExportJournalToS3Request,
    GetBlockRequest,
    GetDigestRequest,
    GetRevisionRequest,
    ListJournalKinesisStreamsForLedgerRequest,
    ListJournalS3ExportsForLedgerRequest,
    ListTagsForResourceRequest,
    StreamJournalToKinesisRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateLedgerRequest,
    UpdateLedgerPermissionsModeRequest,
    CancelJournalKinesisStreamResponse,
    CreateLedgerResponse,
    DescribeJournalKinesisStreamResponse,
    DescribeJournalS3ExportResponse,
    DescribeLedgerResponse,
    ExportJournalToS3Response,
    GetBlockResponse,
    GetDigestResponse,
    GetRevisionResponse,
    ListJournalKinesisStreamsForLedgerResponse,
    ListJournalS3ExportsForLedgerResponse,
    ListTagsForResourceResponse,
    StreamJournalToKinesisResponse,
    TagResourceResponse,
    UntagResourceResponse,
    UpdateLedgerResponse,
    UpdateLedgerPermissionsModeResponse
} from "aws-sdk/clients/qldb";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.qldb.Ledger {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.qldb.Ledger>) {
        super(...args)
        this.client = new awssdk.QLDB()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/qldb-2019-01-02.normal.json"), this.client)
    }

    invokeCancelJournalKinesisStream(partialParams: ToOptional<{
      [K in keyof CancelJournalKinesisStreamRequest & keyof CancelJournalKinesisStreamRequest & keyof CancelJournalKinesisStreamRequest]: (CancelJournalKinesisStreamRequest & CancelJournalKinesisStreamRequest & CancelJournalKinesisStreamRequest)[K]
    }>): CancelJournalKinesisStreamResponse {
        return this.client.cancelJournalKinesisStream(
            this.ops["CancelJournalKinesisStream"].apply(partialParams)
        );
    }

    invokeCreateLedger(partialParams: ToOptional<{
      [K in keyof CreateLedgerRequest & keyof CreateLedgerRequest & keyof CreateLedgerRequest]: (CreateLedgerRequest & CreateLedgerRequest & CreateLedgerRequest)[K]
    }>): CreateLedgerResponse {
        return this.client.createLedger(
            this.ops["CreateLedger"].apply(partialParams)
        );
    }

    invokeDeleteLedger(partialParams: ToOptional<{
      [K in keyof DeleteLedgerRequest & keyof DeleteLedgerRequest & keyof DeleteLedgerRequest]: (DeleteLedgerRequest & DeleteLedgerRequest & DeleteLedgerRequest)[K]
    }>): void {
        return this.client.deleteLedger(
            this.ops["DeleteLedger"].apply(partialParams)
        );
    }

    invokeDescribeJournalKinesisStream(partialParams: ToOptional<{
      [K in keyof DescribeJournalKinesisStreamRequest & keyof DescribeJournalKinesisStreamRequest & keyof DescribeJournalKinesisStreamRequest]: (DescribeJournalKinesisStreamRequest & DescribeJournalKinesisStreamRequest & DescribeJournalKinesisStreamRequest)[K]
    }>): DescribeJournalKinesisStreamResponse {
        return this.client.describeJournalKinesisStream(
            this.ops["DescribeJournalKinesisStream"].apply(partialParams)
        );
    }

    invokeDescribeJournalS3Export(partialParams: ToOptional<{
      [K in keyof DescribeJournalS3ExportRequest & keyof DescribeJournalS3ExportRequest & keyof DescribeJournalS3ExportRequest]: (DescribeJournalS3ExportRequest & DescribeJournalS3ExportRequest & DescribeJournalS3ExportRequest)[K]
    }>): DescribeJournalS3ExportResponse {
        return this.client.describeJournalS3Export(
            this.ops["DescribeJournalS3Export"].apply(partialParams)
        );
    }

    invokeDescribeLedger(partialParams: ToOptional<{
      [K in keyof DescribeLedgerRequest & keyof DescribeLedgerRequest & keyof DescribeLedgerRequest]: (DescribeLedgerRequest & DescribeLedgerRequest & DescribeLedgerRequest)[K]
    }>): DescribeLedgerResponse {
        return this.client.describeLedger(
            this.ops["DescribeLedger"].apply(partialParams)
        );
    }

    invokeExportJournalToS3(partialParams: ToOptional<{
      [K in keyof Omit<ExportJournalToS3Request, "RoleArn"> & keyof ExportJournalToS3Request & keyof ExportJournalToS3Request]: (Omit<ExportJournalToS3Request, "RoleArn"> & ExportJournalToS3Request & ExportJournalToS3Request)[K]
    }>): ExportJournalToS3Response {
        return this.client.exportJournalToS3(
            this.ops["ExportJournalToS3"].apply(partialParams)
        );
    }

    invokeGetBlock(partialParams: ToOptional<{
      [K in keyof GetBlockRequest & keyof GetBlockRequest & keyof GetBlockRequest]: (GetBlockRequest & GetBlockRequest & GetBlockRequest)[K]
    }>): GetBlockResponse {
        return this.client.getBlock(
            this.ops["GetBlock"].apply(partialParams)
        );
    }

    invokeGetDigest(partialParams: ToOptional<{
      [K in keyof GetDigestRequest & keyof GetDigestRequest & keyof GetDigestRequest]: (GetDigestRequest & GetDigestRequest & GetDigestRequest)[K]
    }>): GetDigestResponse {
        return this.client.getDigest(
            this.ops["GetDigest"].apply(partialParams)
        );
    }

    invokeGetRevision(partialParams: ToOptional<{
      [K in keyof GetRevisionRequest & keyof GetRevisionRequest & keyof GetRevisionRequest]: (GetRevisionRequest & GetRevisionRequest & GetRevisionRequest)[K]
    }>): GetRevisionResponse {
        return this.client.getRevision(
            this.ops["GetRevision"].apply(partialParams)
        );
    }

    invokeListJournalKinesisStreamsForLedger(partialParams: ToOptional<{
      [K in keyof ListJournalKinesisStreamsForLedgerRequest & keyof ListJournalKinesisStreamsForLedgerRequest & keyof ListJournalKinesisStreamsForLedgerRequest]: (ListJournalKinesisStreamsForLedgerRequest & ListJournalKinesisStreamsForLedgerRequest & ListJournalKinesisStreamsForLedgerRequest)[K]
    }>): ListJournalKinesisStreamsForLedgerResponse {
        return this.client.listJournalKinesisStreamsForLedger(
            this.ops["ListJournalKinesisStreamsForLedger"].apply(partialParams)
        );
    }

    invokeListJournalS3ExportsForLedger(partialParams: ToOptional<{
      [K in keyof ListJournalS3ExportsForLedgerRequest & keyof Omit<ListJournalS3ExportsForLedgerRequest, "Name"> & keyof ListJournalS3ExportsForLedgerRequest]: (ListJournalS3ExportsForLedgerRequest & Omit<ListJournalS3ExportsForLedgerRequest, "Name"> & ListJournalS3ExportsForLedgerRequest)[K]
    }>): ListJournalS3ExportsForLedgerResponse {
        return this.client.listJournalS3ExportsForLedger(
            this.ops["ListJournalS3ExportsForLedger"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof Omit<ListTagsForResourceRequest, "ResourceArn"> & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (Omit<ListTagsForResourceRequest, "ResourceArn"> & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeStreamJournalToKinesis(partialParams: ToOptional<{
      [K in keyof Omit<StreamJournalToKinesisRequest, "RoleArn"> & keyof StreamJournalToKinesisRequest & keyof StreamJournalToKinesisRequest]: (Omit<StreamJournalToKinesisRequest, "RoleArn"> & StreamJournalToKinesisRequest & StreamJournalToKinesisRequest)[K]
    }>): StreamJournalToKinesisResponse {
        return this.client.streamJournalToKinesis(
            this.ops["StreamJournalToKinesis"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof Omit<TagResourceRequest, "ResourceArn"> & keyof TagResourceRequest & keyof TagResourceRequest]: (Omit<TagResourceRequest, "ResourceArn"> & TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof Omit<UntagResourceRequest, "ResourceArn"> & keyof UntagResourceRequest & keyof UntagResourceRequest]: (Omit<UntagResourceRequest, "ResourceArn"> & UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateLedger(partialParams: ToOptional<{
      [K in keyof UpdateLedgerRequest & keyof Omit<UpdateLedgerRequest, "Name"> & keyof UpdateLedgerRequest]: (UpdateLedgerRequest & Omit<UpdateLedgerRequest, "Name"> & UpdateLedgerRequest)[K]
    }>): UpdateLedgerResponse {
        return this.client.updateLedger(
            this.ops["UpdateLedger"].apply(partialParams)
        );
    }

    invokeUpdateLedgerPermissionsMode(partialParams: ToOptional<{
      [K in keyof UpdateLedgerPermissionsModeRequest & keyof Omit<UpdateLedgerPermissionsModeRequest, "Name"> & keyof Omit<UpdateLedgerPermissionsModeRequest, "PermissionsMode">]: (UpdateLedgerPermissionsModeRequest & Omit<UpdateLedgerPermissionsModeRequest, "Name"> & Omit<UpdateLedgerPermissionsModeRequest, "PermissionsMode">)[K]
    }>): UpdateLedgerPermissionsModeResponse {
        return this.client.updateLedgerPermissionsMode(
            this.ops["UpdateLedgerPermissionsMode"].apply(partialParams)
        );
    }
}