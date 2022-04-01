
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    DescribeCertificateRequest,
    ExportCertificateRequest,
    GetCertificateRequest,
    ImportCertificateRequest,
    ListTagsForCertificateRequest,
    RequestCertificateRequest,
    DescribeCertificateResponse,
    ExportCertificateResponse,
    GetCertificateResponse,
    ImportCertificateResponse,
    ListTagsForCertificateResponse,
    RequestCertificateResponse
} from "aws-sdk/clients/acm";
const schema = require("../apis/acm-2015-12-08.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.acm.Certificate {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.acm.Certificate>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.ACM()
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

    invokeDescribeCertificate(partialParams: ToOptional<{
      [K in keyof DescribeCertificateRequest & keyof Omit<DescribeCertificateRequest, "CertificateArn">]: (DescribeCertificateRequest)[K]
    }>): Request<DescribeCertificateResponse, AWSError> {
        this.boot();
        return this.client.describeCertificate(
          this.ops["DescribeCertificate"].apply(partialParams)
        );
    }

    invokeExportCertificate(partialParams: ToOptional<{
      [K in keyof ExportCertificateRequest & keyof Omit<ExportCertificateRequest, "CertificateArn">]: (ExportCertificateRequest)[K]
    }>): Request<ExportCertificateResponse, AWSError> {
        this.boot();
        return this.client.exportCertificate(
          this.ops["ExportCertificate"].apply(partialParams)
        );
    }

    invokeGetCertificate(partialParams: ToOptional<{
      [K in keyof GetCertificateRequest & keyof Omit<GetCertificateRequest, "CertificateArn">]: (GetCertificateRequest)[K]
    }>): Request<GetCertificateResponse, AWSError> {
        this.boot();
        return this.client.getCertificate(
          this.ops["GetCertificate"].apply(partialParams)
        );
    }

    invokeImportCertificate(partialParams: ToOptional<{
      [K in keyof ImportCertificateRequest & keyof Omit<ImportCertificateRequest, "PrivateKey">]: (ImportCertificateRequest)[K]
    }>): Request<ImportCertificateResponse, AWSError> {
        this.boot();
        return this.client.importCertificate(
          this.ops["ImportCertificate"].apply(partialParams)
        );
    }

    invokeListTagsForCertificate(partialParams: ToOptional<{
      [K in keyof ListTagsForCertificateRequest & keyof Omit<ListTagsForCertificateRequest, "CertificateArn">]: (ListTagsForCertificateRequest)[K]
    }>): Request<ListTagsForCertificateResponse, AWSError> {
        this.boot();
        return this.client.listTagsForCertificate(
          this.ops["ListTagsForCertificate"].apply(partialParams)
        );
    }

    invokeRequestCertificate(partialParams: ToOptional<{
      [K in keyof RequestCertificateRequest & keyof Omit<RequestCertificateRequest, "DomainName">]: (RequestCertificateRequest)[K]
    }>): Request<RequestCertificateResponse, AWSError> {
        this.boot();
        return this.client.requestCertificate(
          this.ops["RequestCertificate"].apply(partialParams)
        );
    }
}