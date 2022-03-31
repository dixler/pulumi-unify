
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AddTagsToCertificateRequest,
    DeleteCertificateRequest,
    DescribeCertificateRequest,
    ExportCertificateRequest,
    GetCertificateRequest,
    ImportCertificateRequest,
    ListTagsForCertificateRequest,
    PutAccountConfigurationRequest,
    RemoveTagsFromCertificateRequest,
    RenewCertificateRequest,
    RequestCertificateRequest,
    ResendValidationEmailRequest,
    UpdateCertificateOptionsRequest,
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

export default class extends aws.acm.CertificateValidation {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.acm.CertificateValidation>) {
        super(...args)
        this.client = new awssdk.ACM()
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

    invokeAddTagsToCertificate(partialParams: ToOptional<{
      [K in keyof AddTagsToCertificateRequest]: (AddTagsToCertificateRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addTagsToCertificate(
          this.ops["AddTagsToCertificate"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCertificate(partialParams: ToOptional<{
      [K in keyof Omit<DeleteCertificateRequest, "CertificateArn">]: (Omit<DeleteCertificateRequest, "CertificateArn">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCertificate(
          this.ops["DeleteCertificate"].applicator.apply(partialParams)
        );
    }

    invokeDescribeCertificate(partialParams: ToOptional<{
      [K in keyof Omit<DescribeCertificateRequest, "CertificateArn">]: (Omit<DescribeCertificateRequest, "CertificateArn">)[K]
    }>): Request<DescribeCertificateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCertificate(
          this.ops["DescribeCertificate"].applicator.apply(partialParams)
        );
    }

    invokeExportCertificate(partialParams: ToOptional<{
      [K in keyof Omit<ExportCertificateRequest, "CertificateArn">]: (Omit<ExportCertificateRequest, "CertificateArn">)[K]
    }>): Request<ExportCertificateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.exportCertificate(
          this.ops["ExportCertificate"].applicator.apply(partialParams)
        );
    }

    invokeGetCertificate(partialParams: ToOptional<{
      [K in keyof Omit<GetCertificateRequest, "CertificateArn">]: (Omit<GetCertificateRequest, "CertificateArn">)[K]
    }>): Request<GetCertificateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCertificate(
          this.ops["GetCertificate"].applicator.apply(partialParams)
        );
    }

    invokeImportCertificate(partialParams: ToOptional<{
      [K in keyof ImportCertificateRequest]: (ImportCertificateRequest)[K]
    }>): Request<ImportCertificateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importCertificate(
          this.ops["ImportCertificate"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForCertificate(partialParams: ToOptional<{
      [K in keyof Omit<ListTagsForCertificateRequest, "CertificateArn">]: (Omit<ListTagsForCertificateRequest, "CertificateArn">)[K]
    }>): Request<ListTagsForCertificateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForCertificate(
          this.ops["ListTagsForCertificate"].applicator.apply(partialParams)
        );
    }

    invokePutAccountConfiguration(partialParams: ToOptional<{
      [K in keyof PutAccountConfigurationRequest]: (PutAccountConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putAccountConfiguration(
          this.ops["PutAccountConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeRemoveTagsFromCertificate(partialParams: ToOptional<{
      [K in keyof Omit<RemoveTagsFromCertificateRequest, "CertificateArn">]: (Omit<RemoveTagsFromCertificateRequest, "CertificateArn">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeTagsFromCertificate(
          this.ops["RemoveTagsFromCertificate"].applicator.apply(partialParams)
        );
    }

    invokeRenewCertificate(partialParams: ToOptional<{
      [K in keyof Omit<RenewCertificateRequest, "CertificateArn">]: (Omit<RenewCertificateRequest, "CertificateArn">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.renewCertificate(
          this.ops["RenewCertificate"].applicator.apply(partialParams)
        );
    }

    invokeRequestCertificate(partialParams: ToOptional<{
      [K in keyof RequestCertificateRequest]: (RequestCertificateRequest)[K]
    }>): Request<RequestCertificateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.requestCertificate(
          this.ops["RequestCertificate"].applicator.apply(partialParams)
        );
    }

    invokeResendValidationEmail(partialParams: ToOptional<{
      [K in keyof Omit<ResendValidationEmailRequest, "CertificateArn">]: (Omit<ResendValidationEmailRequest, "CertificateArn">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resendValidationEmail(
          this.ops["ResendValidationEmail"].applicator.apply(partialParams)
        );
    }

    invokeUpdateCertificateOptions(partialParams: ToOptional<{
      [K in keyof Omit<UpdateCertificateOptionsRequest, "CertificateArn">]: (Omit<UpdateCertificateOptionsRequest, "CertificateArn">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCertificateOptions(
          this.ops["UpdateCertificateOptions"].applicator.apply(partialParams)
        );
    }
}