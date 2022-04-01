
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CancelJournalKinesisStreamRequest,
    CreateLedgerRequest,
    DescribeJournalKinesisStreamRequest,
    DescribeJournalS3ExportRequest,
    DescribeLedgerRequest,
    ExportJournalToS3Request,
    GetBlockRequest,
    GetDigestRequest,
    GetRevisionRequest,
    ListJournalKinesisStreamsForLedgerRequest,
    ListJournalS3ExportsRequest,
    ListJournalS3ExportsForLedgerRequest,
    ListLedgersRequest,
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
    ListJournalS3ExportsResponse,
    ListJournalS3ExportsForLedgerResponse,
    ListLedgersResponse,
    ListTagsForResourceResponse,
    StreamJournalToKinesisResponse,
    TagResourceResponse,
    UntagResourceResponse,
    UpdateLedgerResponse,
    UpdateLedgerPermissionsModeResponse
} from "aws-sdk/clients/qldb";
const schema = require("../apis/qldb-2019-01-02.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.qldb.Ledger {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.qldb.Ledger>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.QLDB()
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

    invokeCancelJournalKinesisStream(partialParams: ToOptional<{
      [K in keyof CancelJournalKinesisStreamRequest & keyof Omit<CancelJournalKinesisStreamRequest, "LedgerName">]: (CancelJournalKinesisStreamRequest)[K]
    }>): Request<CancelJournalKinesisStreamResponse, AWSError> {
        this.boot();
        return this.client.cancelJournalKinesisStream(
          this.ops["CancelJournalKinesisStream"].apply(partialParams)
        );
    }

    invokeCreateLedger(partialParams: ToOptional<{
      [K in keyof CreateLedgerRequest & keyof Omit<CreateLedgerRequest, "Name" | "PermissionsMode">]: (CreateLedgerRequest)[K]
    }>): Request<CreateLedgerResponse, AWSError> {
        this.boot();
        return this.client.createLedger(
          this.ops["CreateLedger"].apply(partialParams)
        );
    }

    invokeDescribeJournalKinesisStream(partialParams: ToOptional<{
      [K in keyof DescribeJournalKinesisStreamRequest & keyof Omit<DescribeJournalKinesisStreamRequest, "LedgerName">]: (DescribeJournalKinesisStreamRequest)[K]
    }>): Request<DescribeJournalKinesisStreamResponse, AWSError> {
        this.boot();
        return this.client.describeJournalKinesisStream(
          this.ops["DescribeJournalKinesisStream"].apply(partialParams)
        );
    }

    invokeDescribeJournalS3Export(partialParams: ToOptional<{
      [K in keyof DescribeJournalS3ExportRequest & keyof Omit<DescribeJournalS3ExportRequest, "Name">]: (DescribeJournalS3ExportRequest)[K]
    }>): Request<DescribeJournalS3ExportResponse, AWSError> {
        this.boot();
        return this.client.describeJournalS3Export(
          this.ops["DescribeJournalS3Export"].apply(partialParams)
        );
    }

    invokeDescribeLedger(partialParams: ToOptional<{
      [K in keyof DescribeLedgerRequest & keyof Omit<DescribeLedgerRequest, "Name">]: (DescribeLedgerRequest)[K]
    }>): Request<DescribeLedgerResponse, AWSError> {
        this.boot();
        return this.client.describeLedger(
          this.ops["DescribeLedger"].apply(partialParams)
        );
    }

    invokeExportJournalToS3(partialParams: ToOptional<{
      [K in keyof ExportJournalToS3Request & keyof Omit<ExportJournalToS3Request, "Name">]: (ExportJournalToS3Request)[K]
    }>): Request<ExportJournalToS3Response, AWSError> {
        this.boot();
        return this.client.exportJournalToS3(
          this.ops["ExportJournalToS3"].apply(partialParams)
        );
    }

    invokeGetBlock(partialParams: ToOptional<{
      [K in keyof GetBlockRequest & keyof Omit<GetBlockRequest, "Name">]: (GetBlockRequest)[K]
    }>): Request<GetBlockResponse, AWSError> {
        this.boot();
        return this.client.getBlock(
          this.ops["GetBlock"].apply(partialParams)
        );
    }

    invokeGetDigest(partialParams: ToOptional<{
      [K in keyof GetDigestRequest & keyof Omit<GetDigestRequest, "Name">]: (GetDigestRequest)[K]
    }>): Request<GetDigestResponse, AWSError> {
        this.boot();
        return this.client.getDigest(
          this.ops["GetDigest"].apply(partialParams)
        );
    }

    invokeGetRevision(partialParams: ToOptional<{
      [K in keyof GetRevisionRequest & keyof Omit<GetRevisionRequest, "Name">]: (GetRevisionRequest)[K]
    }>): Request<GetRevisionResponse, AWSError> {
        this.boot();
        return this.client.getRevision(
          this.ops["GetRevision"].apply(partialParams)
        );
    }

    invokeListJournalKinesisStreamsForLedger(partialParams: ToOptional<{
      [K in keyof ListJournalKinesisStreamsForLedgerRequest & keyof Omit<ListJournalKinesisStreamsForLedgerRequest, "LedgerName">]: (ListJournalKinesisStreamsForLedgerRequest)[K]
    }>): Request<ListJournalKinesisStreamsForLedgerResponse, AWSError> {
        this.boot();
        return this.client.listJournalKinesisStreamsForLedger(
          this.ops["ListJournalKinesisStreamsForLedger"].apply(partialParams)
        );
    }

    invokeListJournalS3Exports(partialParams: ToOptional<{
      [K in keyof ListJournalS3ExportsRequest]: (ListJournalS3ExportsRequest)[K]
    }>): Request<ListJournalS3ExportsResponse, AWSError> {
        this.boot();
        return this.client.listJournalS3Exports(
          this.ops["ListJournalS3Exports"].apply(partialParams)
        );
    }

    invokeListJournalS3ExportsForLedger(partialParams: ToOptional<{
      [K in keyof ListJournalS3ExportsForLedgerRequest & keyof Omit<ListJournalS3ExportsForLedgerRequest, "Name">]: (ListJournalS3ExportsForLedgerRequest)[K]
    }>): Request<ListJournalS3ExportsForLedgerResponse, AWSError> {
        this.boot();
        return this.client.listJournalS3ExportsForLedger(
          this.ops["ListJournalS3ExportsForLedger"].apply(partialParams)
        );
    }

    invokeListLedgers(partialParams: ToOptional<{
      [K in keyof ListLedgersRequest]: (ListLedgersRequest)[K]
    }>): Request<ListLedgersResponse, AWSError> {
        this.boot();
        return this.client.listLedgers(
          this.ops["ListLedgers"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeStreamJournalToKinesis(partialParams: ToOptional<{
      [K in keyof StreamJournalToKinesisRequest & keyof Omit<StreamJournalToKinesisRequest, "LedgerName">]: (StreamJournalToKinesisRequest)[K]
    }>): Request<StreamJournalToKinesisResponse, AWSError> {
        this.boot();
        return this.client.streamJournalToKinesis(
          this.ops["StreamJournalToKinesis"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest]: (TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest]: (UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateLedger(partialParams: ToOptional<{
      [K in keyof UpdateLedgerRequest & keyof Omit<UpdateLedgerRequest, "Name">]: (UpdateLedgerRequest)[K]
    }>): Request<UpdateLedgerResponse, AWSError> {
        this.boot();
        return this.client.updateLedger(
          this.ops["UpdateLedger"].apply(partialParams)
        );
    }

    invokeUpdateLedgerPermissionsMode(partialParams: ToOptional<{
      [K in keyof UpdateLedgerPermissionsModeRequest & keyof Omit<UpdateLedgerPermissionsModeRequest, "Name" | "PermissionsMode">]: (UpdateLedgerPermissionsModeRequest)[K]
    }>): Request<UpdateLedgerPermissionsModeResponse, AWSError> {
        this.boot();
        return this.client.updateLedgerPermissionsMode(
          this.ops["UpdateLedgerPermissionsMode"].apply(partialParams)
        );
    }
}