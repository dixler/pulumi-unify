
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateSAMLProviderRequest,
    GenerateServiceLastAccessedDetailsRequest,
    GetServerCertificateRequest,
    ListPoliciesGrantingServiceAccessRequest,
    ListServerCertificateTagsRequest,
    UploadServerCertificateRequest,
    UploadSigningCertificateRequest,
    CreateSAMLProviderResponse,
    GenerateServiceLastAccessedDetailsResponse,
    GetServerCertificateResponse,
    ListPoliciesGrantingServiceAccessResponse,
    ListServerCertificateTagsResponse,
    UploadServerCertificateResponse,
    UploadSigningCertificateResponse
} from "aws-sdk/clients/iam";
const schema = require("../apis/iam-2010-05-08.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.iam.ServerCertificate {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.iam.ServerCertificate>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.IAM()
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

    invokeCreateSAMLProvider(partialParams: ToOptional<{
      [K in keyof CreateSAMLProviderRequest & keyof Omit<CreateSAMLProviderRequest, "Name">]: (CreateSAMLProviderRequest)[K]
    }>): Request<CreateSAMLProviderResponse, AWSError> {
        this.boot();
        return this.client.createSAMLProvider(
          this.ops["CreateSAMLProvider"].apply(partialParams)
        );
    }

    invokeGenerateServiceLastAccessedDetails(partialParams: ToOptional<{
      [K in keyof GenerateServiceLastAccessedDetailsRequest & keyof Omit<GenerateServiceLastAccessedDetailsRequest, "Arn">]: (GenerateServiceLastAccessedDetailsRequest)[K]
    }>): Request<GenerateServiceLastAccessedDetailsResponse, AWSError> {
        this.boot();
        return this.client.generateServiceLastAccessedDetails(
          this.ops["GenerateServiceLastAccessedDetails"].apply(partialParams)
        );
    }

    invokeGetServerCertificate(partialParams: ToOptional<{
      [K in keyof GetServerCertificateRequest & keyof Omit<GetServerCertificateRequest, "ServerCertificateName">]: (GetServerCertificateRequest)[K]
    }>): Request<GetServerCertificateResponse, AWSError> {
        this.boot();
        return this.client.getServerCertificate(
          this.ops["GetServerCertificate"].apply(partialParams)
        );
    }

    invokeListPoliciesGrantingServiceAccess(partialParams: ToOptional<{
      [K in keyof ListPoliciesGrantingServiceAccessRequest & keyof Omit<ListPoliciesGrantingServiceAccessRequest, "Arn">]: (ListPoliciesGrantingServiceAccessRequest)[K]
    }>): Request<ListPoliciesGrantingServiceAccessResponse, AWSError> {
        this.boot();
        return this.client.listPoliciesGrantingServiceAccess(
          this.ops["ListPoliciesGrantingServiceAccess"].apply(partialParams)
        );
    }

    invokeListServerCertificateTags(partialParams: ToOptional<{
      [K in keyof ListServerCertificateTagsRequest & keyof Omit<ListServerCertificateTagsRequest, "ServerCertificateName">]: (ListServerCertificateTagsRequest)[K]
    }>): Request<ListServerCertificateTagsResponse, AWSError> {
        this.boot();
        return this.client.listServerCertificateTags(
          this.ops["ListServerCertificateTags"].apply(partialParams)
        );
    }

    invokeUploadServerCertificate(partialParams: ToOptional<{
      [K in keyof UploadServerCertificateRequest & keyof Omit<UploadServerCertificateRequest, "ServerCertificateName" | "CertificateBody" | "PrivateKey">]: (UploadServerCertificateRequest)[K]
    }>): Request<UploadServerCertificateResponse, AWSError> {
        this.boot();
        return this.client.uploadServerCertificate(
          this.ops["UploadServerCertificate"].apply(partialParams)
        );
    }

    invokeUploadSigningCertificate(partialParams: ToOptional<{
      [K in keyof UploadSigningCertificateRequest & keyof Omit<UploadSigningCertificateRequest, "CertificateBody">]: (UploadSigningCertificateRequest)[K]
    }>): Request<UploadSigningCertificateResponse, AWSError> {
        this.boot();
        return this.client.uploadSigningCertificate(
          this.ops["UploadSigningCertificate"].apply(partialParams)
        );
    }
}