
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.acm.CertificateValidation {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.acm.CertificateValidation>) {
        super(...args)
        this.client = new awssdk.ACM()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/acm-2015-12-08.normal.json"), this.client)
    }

    invokeAddTagsToCertificate(partialParams: ToOptional<{
      [K in keyof AddTagsToCertificateRequest]: (AddTagsToCertificateRequest)[K]
    }>): void {
        return this.client.addTagsToCertificate(
            this.ops["AddTagsToCertificate"].apply(partialParams)
        );
    }

    invokeDeleteCertificate(partialParams: ToOptional<{
      [K in keyof Omit<DeleteCertificateRequest, "CertificateArn">]: (Omit<DeleteCertificateRequest, "CertificateArn">)[K]
    }>): void {
        return this.client.deleteCertificate(
            this.ops["DeleteCertificate"].apply(partialParams)
        );
    }

    invokeDescribeCertificate(partialParams: ToOptional<{
      [K in keyof Omit<DescribeCertificateRequest, "CertificateArn">]: (Omit<DescribeCertificateRequest, "CertificateArn">)[K]
    }>): DescribeCertificateResponse {
        return this.client.describeCertificate(
            this.ops["DescribeCertificate"].apply(partialParams)
        );
    }

    invokeExportCertificate(partialParams: ToOptional<{
      [K in keyof Omit<ExportCertificateRequest, "CertificateArn">]: (Omit<ExportCertificateRequest, "CertificateArn">)[K]
    }>): ExportCertificateResponse {
        return this.client.exportCertificate(
            this.ops["ExportCertificate"].apply(partialParams)
        );
    }

    invokeGetCertificate(partialParams: ToOptional<{
      [K in keyof Omit<GetCertificateRequest, "CertificateArn">]: (Omit<GetCertificateRequest, "CertificateArn">)[K]
    }>): GetCertificateResponse {
        return this.client.getCertificate(
            this.ops["GetCertificate"].apply(partialParams)
        );
    }

    invokeImportCertificate(partialParams: ToOptional<{
      [K in keyof ImportCertificateRequest]: (ImportCertificateRequest)[K]
    }>): ImportCertificateResponse {
        return this.client.importCertificate(
            this.ops["ImportCertificate"].apply(partialParams)
        );
    }

    invokeListTagsForCertificate(partialParams: ToOptional<{
      [K in keyof Omit<ListTagsForCertificateRequest, "CertificateArn">]: (Omit<ListTagsForCertificateRequest, "CertificateArn">)[K]
    }>): ListTagsForCertificateResponse {
        return this.client.listTagsForCertificate(
            this.ops["ListTagsForCertificate"].apply(partialParams)
        );
    }

    invokePutAccountConfiguration(partialParams: ToOptional<{
      [K in keyof PutAccountConfigurationRequest]: (PutAccountConfigurationRequest)[K]
    }>): void {
        return this.client.putAccountConfiguration(
            this.ops["PutAccountConfiguration"].apply(partialParams)
        );
    }

    invokeRemoveTagsFromCertificate(partialParams: ToOptional<{
      [K in keyof Omit<RemoveTagsFromCertificateRequest, "CertificateArn">]: (Omit<RemoveTagsFromCertificateRequest, "CertificateArn">)[K]
    }>): void {
        return this.client.removeTagsFromCertificate(
            this.ops["RemoveTagsFromCertificate"].apply(partialParams)
        );
    }

    invokeRenewCertificate(partialParams: ToOptional<{
      [K in keyof Omit<RenewCertificateRequest, "CertificateArn">]: (Omit<RenewCertificateRequest, "CertificateArn">)[K]
    }>): void {
        return this.client.renewCertificate(
            this.ops["RenewCertificate"].apply(partialParams)
        );
    }

    invokeRequestCertificate(partialParams: ToOptional<{
      [K in keyof RequestCertificateRequest]: (RequestCertificateRequest)[K]
    }>): RequestCertificateResponse {
        return this.client.requestCertificate(
            this.ops["RequestCertificate"].apply(partialParams)
        );
    }

    invokeResendValidationEmail(partialParams: ToOptional<{
      [K in keyof Omit<ResendValidationEmailRequest, "CertificateArn">]: (Omit<ResendValidationEmailRequest, "CertificateArn">)[K]
    }>): void {
        return this.client.resendValidationEmail(
            this.ops["ResendValidationEmail"].apply(partialParams)
        );
    }

    invokeUpdateCertificateOptions(partialParams: ToOptional<{
      [K in keyof Omit<UpdateCertificateOptionsRequest, "CertificateArn">]: (Omit<UpdateCertificateOptionsRequest, "CertificateArn">)[K]
    }>): void {
        return this.client.updateCertificateOptions(
            this.ops["UpdateCertificateOptions"].apply(partialParams)
        );
    }
}