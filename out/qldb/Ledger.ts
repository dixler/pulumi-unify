
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
    constructor(...args: ConstructorParameters<typeof aws.qldb.Ledger>) {
        super(...args)
        this.client = new awssdk.QLDB()
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

    invokeCancelJournalKinesisStream(partialParams: ToOptional<{
      [K in keyof CancelJournalKinesisStreamRequest & keyof CancelJournalKinesisStreamRequest & keyof CancelJournalKinesisStreamRequest]: (CancelJournalKinesisStreamRequest & CancelJournalKinesisStreamRequest & CancelJournalKinesisStreamRequest)[K]
    }>): Request<CancelJournalKinesisStreamResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelJournalKinesisStream(
          this.ops["CancelJournalKinesisStream"].applicator.apply(partialParams)
        );
    }

    invokeCreateLedger(partialParams: ToOptional<{
      [K in keyof CreateLedgerRequest & keyof CreateLedgerRequest & keyof CreateLedgerRequest]: (CreateLedgerRequest & CreateLedgerRequest & CreateLedgerRequest)[K]
    }>): Request<CreateLedgerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createLedger(
          this.ops["CreateLedger"].applicator.apply(partialParams)
        );
    }

    invokeDeleteLedger(partialParams: ToOptional<{
      [K in keyof DeleteLedgerRequest & keyof DeleteLedgerRequest & keyof DeleteLedgerRequest]: (DeleteLedgerRequest & DeleteLedgerRequest & DeleteLedgerRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteLedger(
          this.ops["DeleteLedger"].applicator.apply(partialParams)
        );
    }

    invokeDescribeJournalKinesisStream(partialParams: ToOptional<{
      [K in keyof DescribeJournalKinesisStreamRequest & keyof DescribeJournalKinesisStreamRequest & keyof DescribeJournalKinesisStreamRequest]: (DescribeJournalKinesisStreamRequest & DescribeJournalKinesisStreamRequest & DescribeJournalKinesisStreamRequest)[K]
    }>): Request<DescribeJournalKinesisStreamResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeJournalKinesisStream(
          this.ops["DescribeJournalKinesisStream"].applicator.apply(partialParams)
        );
    }

    invokeDescribeJournalS3Export(partialParams: ToOptional<{
      [K in keyof DescribeJournalS3ExportRequest & keyof DescribeJournalS3ExportRequest & keyof DescribeJournalS3ExportRequest]: (DescribeJournalS3ExportRequest & DescribeJournalS3ExportRequest & DescribeJournalS3ExportRequest)[K]
    }>): Request<DescribeJournalS3ExportResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeJournalS3Export(
          this.ops["DescribeJournalS3Export"].applicator.apply(partialParams)
        );
    }

    invokeDescribeLedger(partialParams: ToOptional<{
      [K in keyof DescribeLedgerRequest & keyof DescribeLedgerRequest & keyof DescribeLedgerRequest]: (DescribeLedgerRequest & DescribeLedgerRequest & DescribeLedgerRequest)[K]
    }>): Request<DescribeLedgerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeLedger(
          this.ops["DescribeLedger"].applicator.apply(partialParams)
        );
    }

    invokeExportJournalToS3(partialParams: ToOptional<{
      [K in keyof Omit<ExportJournalToS3Request, "RoleArn"> & keyof ExportJournalToS3Request & keyof ExportJournalToS3Request]: (Omit<ExportJournalToS3Request, "RoleArn"> & ExportJournalToS3Request & ExportJournalToS3Request)[K]
    }>): Request<ExportJournalToS3Response, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.exportJournalToS3(
          this.ops["ExportJournalToS3"].applicator.apply(partialParams)
        );
    }

    invokeGetBlock(partialParams: ToOptional<{
      [K in keyof GetBlockRequest & keyof GetBlockRequest & keyof GetBlockRequest]: (GetBlockRequest & GetBlockRequest & GetBlockRequest)[K]
    }>): Request<GetBlockResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBlock(
          this.ops["GetBlock"].applicator.apply(partialParams)
        );
    }

    invokeGetDigest(partialParams: ToOptional<{
      [K in keyof GetDigestRequest & keyof GetDigestRequest & keyof GetDigestRequest]: (GetDigestRequest & GetDigestRequest & GetDigestRequest)[K]
    }>): Request<GetDigestResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDigest(
          this.ops["GetDigest"].applicator.apply(partialParams)
        );
    }

    invokeGetRevision(partialParams: ToOptional<{
      [K in keyof GetRevisionRequest & keyof GetRevisionRequest & keyof GetRevisionRequest]: (GetRevisionRequest & GetRevisionRequest & GetRevisionRequest)[K]
    }>): Request<GetRevisionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRevision(
          this.ops["GetRevision"].applicator.apply(partialParams)
        );
    }

    invokeListJournalKinesisStreamsForLedger(partialParams: ToOptional<{
      [K in keyof ListJournalKinesisStreamsForLedgerRequest & keyof ListJournalKinesisStreamsForLedgerRequest & keyof ListJournalKinesisStreamsForLedgerRequest]: (ListJournalKinesisStreamsForLedgerRequest & ListJournalKinesisStreamsForLedgerRequest & ListJournalKinesisStreamsForLedgerRequest)[K]
    }>): Request<ListJournalKinesisStreamsForLedgerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listJournalKinesisStreamsForLedger(
          this.ops["ListJournalKinesisStreamsForLedger"].applicator.apply(partialParams)
        );
    }

    invokeListJournalS3ExportsForLedger(partialParams: ToOptional<{
      [K in keyof ListJournalS3ExportsForLedgerRequest & keyof Omit<ListJournalS3ExportsForLedgerRequest, "Name"> & keyof ListJournalS3ExportsForLedgerRequest]: (ListJournalS3ExportsForLedgerRequest & Omit<ListJournalS3ExportsForLedgerRequest, "Name"> & ListJournalS3ExportsForLedgerRequest)[K]
    }>): Request<ListJournalS3ExportsForLedgerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listJournalS3ExportsForLedger(
          this.ops["ListJournalS3ExportsForLedger"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof Omit<ListTagsForResourceRequest, "ResourceArn"> & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (Omit<ListTagsForResourceRequest, "ResourceArn"> & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeStreamJournalToKinesis(partialParams: ToOptional<{
      [K in keyof Omit<StreamJournalToKinesisRequest, "RoleArn"> & keyof StreamJournalToKinesisRequest & keyof StreamJournalToKinesisRequest]: (Omit<StreamJournalToKinesisRequest, "RoleArn"> & StreamJournalToKinesisRequest & StreamJournalToKinesisRequest)[K]
    }>): Request<StreamJournalToKinesisResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.streamJournalToKinesis(
          this.ops["StreamJournalToKinesis"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof Omit<TagResourceRequest, "ResourceArn"> & keyof TagResourceRequest & keyof TagResourceRequest]: (Omit<TagResourceRequest, "ResourceArn"> & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof Omit<UntagResourceRequest, "ResourceArn"> & keyof UntagResourceRequest & keyof UntagResourceRequest]: (Omit<UntagResourceRequest, "ResourceArn"> & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateLedger(partialParams: ToOptional<{
      [K in keyof UpdateLedgerRequest & keyof Omit<UpdateLedgerRequest, "Name"> & keyof UpdateLedgerRequest]: (UpdateLedgerRequest & Omit<UpdateLedgerRequest, "Name"> & UpdateLedgerRequest)[K]
    }>): Request<UpdateLedgerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateLedger(
          this.ops["UpdateLedger"].applicator.apply(partialParams)
        );
    }

    invokeUpdateLedgerPermissionsMode(partialParams: ToOptional<{
      [K in keyof UpdateLedgerPermissionsModeRequest & keyof Omit<UpdateLedgerPermissionsModeRequest, "Name"> & keyof Omit<UpdateLedgerPermissionsModeRequest, "PermissionsMode">]: (UpdateLedgerPermissionsModeRequest & Omit<UpdateLedgerPermissionsModeRequest, "Name"> & Omit<UpdateLedgerPermissionsModeRequest, "PermissionsMode">)[K]
    }>): Request<UpdateLedgerPermissionsModeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateLedgerPermissionsMode(
          this.ops["UpdateLedgerPermissionsMode"].applicator.apply(partialParams)
        );
    }
}