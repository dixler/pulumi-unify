
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

export default class extends aws.acm.Certificate {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.acm.Certificate>) {
        super(...args)
        this.client = new awssdk.ACM()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/acm-2015-12-08.normal.json"), this.client)
    }

    invokeAddTagsToCertificate(partialParams: ToOptional<{
      [K in keyof AddTagsToCertificateRequest & keyof AddTagsToCertificateRequest & keyof AddTagsToCertificateRequest & keyof AddTagsToCertificateRequest & keyof AddTagsToCertificateRequest & keyof AddTagsToCertificateRequest & keyof AddTagsToCertificateRequest & keyof AddTagsToCertificateRequest]: (AddTagsToCertificateRequest & AddTagsToCertificateRequest & AddTagsToCertificateRequest & AddTagsToCertificateRequest & AddTagsToCertificateRequest & AddTagsToCertificateRequest & AddTagsToCertificateRequest & AddTagsToCertificateRequest)[K]
    }>): void {
        return this.client.addTagsToCertificate(
            this.ops["AddTagsToCertificate"].apply(partialParams)
        );
    }

    invokeDeleteCertificate(partialParams: ToOptional<{
      [K in keyof Omit<DeleteCertificateRequest, "CertificateArn"> & keyof DeleteCertificateRequest & keyof DeleteCertificateRequest & keyof DeleteCertificateRequest & keyof DeleteCertificateRequest & keyof DeleteCertificateRequest & keyof DeleteCertificateRequest & keyof DeleteCertificateRequest]: (Omit<DeleteCertificateRequest, "CertificateArn"> & DeleteCertificateRequest & DeleteCertificateRequest & DeleteCertificateRequest & DeleteCertificateRequest & DeleteCertificateRequest & DeleteCertificateRequest & DeleteCertificateRequest)[K]
    }>): void {
        return this.client.deleteCertificate(
            this.ops["DeleteCertificate"].apply(partialParams)
        );
    }

    invokeDescribeCertificate(partialParams: ToOptional<{
      [K in keyof Omit<DescribeCertificateRequest, "CertificateArn"> & keyof DescribeCertificateRequest & keyof DescribeCertificateRequest & keyof DescribeCertificateRequest & keyof DescribeCertificateRequest & keyof DescribeCertificateRequest & keyof DescribeCertificateRequest & keyof DescribeCertificateRequest]: (Omit<DescribeCertificateRequest, "CertificateArn"> & DescribeCertificateRequest & DescribeCertificateRequest & DescribeCertificateRequest & DescribeCertificateRequest & DescribeCertificateRequest & DescribeCertificateRequest & DescribeCertificateRequest)[K]
    }>): DescribeCertificateResponse {
        return this.client.describeCertificate(
            this.ops["DescribeCertificate"].apply(partialParams)
        );
    }

    invokeExportCertificate(partialParams: ToOptional<{
      [K in keyof Omit<ExportCertificateRequest, "CertificateArn"> & keyof ExportCertificateRequest & keyof ExportCertificateRequest & keyof ExportCertificateRequest & keyof ExportCertificateRequest & keyof ExportCertificateRequest & keyof ExportCertificateRequest & keyof ExportCertificateRequest]: (Omit<ExportCertificateRequest, "CertificateArn"> & ExportCertificateRequest & ExportCertificateRequest & ExportCertificateRequest & ExportCertificateRequest & ExportCertificateRequest & ExportCertificateRequest & ExportCertificateRequest)[K]
    }>): ExportCertificateResponse {
        return this.client.exportCertificate(
            this.ops["ExportCertificate"].apply(partialParams)
        );
    }

    invokeGetCertificate(partialParams: ToOptional<{
      [K in keyof Omit<GetCertificateRequest, "CertificateArn"> & keyof GetCertificateRequest & keyof GetCertificateRequest & keyof GetCertificateRequest & keyof GetCertificateRequest & keyof GetCertificateRequest & keyof GetCertificateRequest & keyof GetCertificateRequest]: (Omit<GetCertificateRequest, "CertificateArn"> & GetCertificateRequest & GetCertificateRequest & GetCertificateRequest & GetCertificateRequest & GetCertificateRequest & GetCertificateRequest & GetCertificateRequest)[K]
    }>): GetCertificateResponse {
        return this.client.getCertificate(
            this.ops["GetCertificate"].apply(partialParams)
        );
    }

    invokeImportCertificate(partialParams: ToOptional<{
      [K in keyof ImportCertificateRequest & keyof ImportCertificateRequest & keyof ImportCertificateRequest & keyof ImportCertificateRequest & keyof ImportCertificateRequest & keyof ImportCertificateRequest & keyof ImportCertificateRequest & keyof ImportCertificateRequest]: (ImportCertificateRequest & ImportCertificateRequest & ImportCertificateRequest & ImportCertificateRequest & ImportCertificateRequest & ImportCertificateRequest & ImportCertificateRequest & ImportCertificateRequest)[K]
    }>): ImportCertificateResponse {
        return this.client.importCertificate(
            this.ops["ImportCertificate"].apply(partialParams)
        );
    }

    invokeListTagsForCertificate(partialParams: ToOptional<{
      [K in keyof Omit<ListTagsForCertificateRequest, "CertificateArn"> & keyof ListTagsForCertificateRequest & keyof ListTagsForCertificateRequest & keyof ListTagsForCertificateRequest & keyof ListTagsForCertificateRequest & keyof ListTagsForCertificateRequest & keyof ListTagsForCertificateRequest & keyof ListTagsForCertificateRequest]: (Omit<ListTagsForCertificateRequest, "CertificateArn"> & ListTagsForCertificateRequest & ListTagsForCertificateRequest & ListTagsForCertificateRequest & ListTagsForCertificateRequest & ListTagsForCertificateRequest & ListTagsForCertificateRequest & ListTagsForCertificateRequest)[K]
    }>): ListTagsForCertificateResponse {
        return this.client.listTagsForCertificate(
            this.ops["ListTagsForCertificate"].apply(partialParams)
        );
    }

    invokePutAccountConfiguration(partialParams: ToOptional<{
      [K in keyof PutAccountConfigurationRequest & keyof PutAccountConfigurationRequest & keyof PutAccountConfigurationRequest & keyof PutAccountConfigurationRequest & keyof PutAccountConfigurationRequest & keyof PutAccountConfigurationRequest & keyof PutAccountConfigurationRequest & keyof PutAccountConfigurationRequest]: (PutAccountConfigurationRequest & PutAccountConfigurationRequest & PutAccountConfigurationRequest & PutAccountConfigurationRequest & PutAccountConfigurationRequest & PutAccountConfigurationRequest & PutAccountConfigurationRequest & PutAccountConfigurationRequest)[K]
    }>): void {
        return this.client.putAccountConfiguration(
            this.ops["PutAccountConfiguration"].apply(partialParams)
        );
    }

    invokeRemoveTagsFromCertificate(partialParams: ToOptional<{
      [K in keyof Omit<RemoveTagsFromCertificateRequest, "CertificateArn"> & keyof RemoveTagsFromCertificateRequest & keyof RemoveTagsFromCertificateRequest & keyof RemoveTagsFromCertificateRequest & keyof RemoveTagsFromCertificateRequest & keyof RemoveTagsFromCertificateRequest & keyof RemoveTagsFromCertificateRequest & keyof RemoveTagsFromCertificateRequest]: (Omit<RemoveTagsFromCertificateRequest, "CertificateArn"> & RemoveTagsFromCertificateRequest & RemoveTagsFromCertificateRequest & RemoveTagsFromCertificateRequest & RemoveTagsFromCertificateRequest & RemoveTagsFromCertificateRequest & RemoveTagsFromCertificateRequest & RemoveTagsFromCertificateRequest)[K]
    }>): void {
        return this.client.removeTagsFromCertificate(
            this.ops["RemoveTagsFromCertificate"].apply(partialParams)
        );
    }

    invokeRenewCertificate(partialParams: ToOptional<{
      [K in keyof Omit<RenewCertificateRequest, "CertificateArn"> & keyof RenewCertificateRequest & keyof RenewCertificateRequest & keyof RenewCertificateRequest & keyof RenewCertificateRequest & keyof RenewCertificateRequest & keyof RenewCertificateRequest & keyof RenewCertificateRequest]: (Omit<RenewCertificateRequest, "CertificateArn"> & RenewCertificateRequest & RenewCertificateRequest & RenewCertificateRequest & RenewCertificateRequest & RenewCertificateRequest & RenewCertificateRequest & RenewCertificateRequest)[K]
    }>): void {
        return this.client.renewCertificate(
            this.ops["RenewCertificate"].apply(partialParams)
        );
    }

    invokeRequestCertificate(partialParams: ToOptional<{
      [K in keyof RequestCertificateRequest & keyof RequestCertificateRequest & keyof RequestCertificateRequest & keyof RequestCertificateRequest & keyof Omit<RequestCertificateRequest, "DomainName"> & keyof RequestCertificateRequest & keyof RequestCertificateRequest & keyof RequestCertificateRequest]: (RequestCertificateRequest & RequestCertificateRequest & RequestCertificateRequest & RequestCertificateRequest & Omit<RequestCertificateRequest, "DomainName"> & RequestCertificateRequest & RequestCertificateRequest & RequestCertificateRequest)[K]
    }>): RequestCertificateResponse {
        return this.client.requestCertificate(
            this.ops["RequestCertificate"].apply(partialParams)
        );
    }

    invokeResendValidationEmail(partialParams: ToOptional<{
      [K in keyof Omit<ResendValidationEmailRequest, "CertificateArn"> & keyof ResendValidationEmailRequest & keyof ResendValidationEmailRequest & keyof ResendValidationEmailRequest & keyof ResendValidationEmailRequest & keyof ResendValidationEmailRequest & keyof ResendValidationEmailRequest & keyof ResendValidationEmailRequest]: (Omit<ResendValidationEmailRequest, "CertificateArn"> & ResendValidationEmailRequest & ResendValidationEmailRequest & ResendValidationEmailRequest & ResendValidationEmailRequest & ResendValidationEmailRequest & ResendValidationEmailRequest & ResendValidationEmailRequest)[K]
    }>): void {
        return this.client.resendValidationEmail(
            this.ops["ResendValidationEmail"].apply(partialParams)
        );
    }

    invokeUpdateCertificateOptions(partialParams: ToOptional<{
      [K in keyof Omit<UpdateCertificateOptionsRequest, "CertificateArn"> & keyof UpdateCertificateOptionsRequest & keyof UpdateCertificateOptionsRequest & keyof UpdateCertificateOptionsRequest & keyof UpdateCertificateOptionsRequest & keyof UpdateCertificateOptionsRequest & keyof UpdateCertificateOptionsRequest & keyof UpdateCertificateOptionsRequest]: (Omit<UpdateCertificateOptionsRequest, "CertificateArn"> & UpdateCertificateOptionsRequest & UpdateCertificateOptionsRequest & UpdateCertificateOptionsRequest & UpdateCertificateOptionsRequest & UpdateCertificateOptionsRequest & UpdateCertificateOptionsRequest & UpdateCertificateOptionsRequest)[K]
    }>): void {
        return this.client.updateCertificateOptions(
            this.ops["UpdateCertificateOptions"].apply(partialParams)
        );
    }
}