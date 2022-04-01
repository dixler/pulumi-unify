
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AssociateDomainRequest,
    AssociateWebsiteAuthorizationProviderRequest,
    AssociateWebsiteCertificateAuthorityRequest,
    CreateFleetRequest,
    DeleteFleetRequest,
    DescribeAuditStreamConfigurationRequest,
    DescribeCompanyNetworkConfigurationRequest,
    DescribeDeviceRequest,
    DescribeDevicePolicyConfigurationRequest,
    DescribeDomainRequest,
    DescribeFleetMetadataRequest,
    DescribeIdentityProviderConfigurationRequest,
    DescribeWebsiteCertificateAuthorityRequest,
    DisassociateDomainRequest,
    DisassociateWebsiteAuthorizationProviderRequest,
    DisassociateWebsiteCertificateAuthorityRequest,
    ListDevicesRequest,
    ListDomainsRequest,
    ListFleetsRequest,
    ListTagsForResourceRequest,
    ListWebsiteAuthorizationProvidersRequest,
    ListWebsiteCertificateAuthoritiesRequest,
    RestoreDomainAccessRequest,
    RevokeDomainAccessRequest,
    SignOutUserRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateAuditStreamConfigurationRequest,
    UpdateCompanyNetworkConfigurationRequest,
    UpdateDevicePolicyConfigurationRequest,
    UpdateDomainMetadataRequest,
    UpdateFleetMetadataRequest,
    UpdateIdentityProviderConfigurationRequest,
    AssociateDomainResponse,
    AssociateWebsiteAuthorizationProviderResponse,
    AssociateWebsiteCertificateAuthorityResponse,
    CreateFleetResponse,
    DeleteFleetResponse,
    DescribeAuditStreamConfigurationResponse,
    DescribeCompanyNetworkConfigurationResponse,
    DescribeDeviceResponse,
    DescribeDevicePolicyConfigurationResponse,
    DescribeDomainResponse,
    DescribeFleetMetadataResponse,
    DescribeIdentityProviderConfigurationResponse,
    DescribeWebsiteCertificateAuthorityResponse,
    DisassociateDomainResponse,
    DisassociateWebsiteAuthorizationProviderResponse,
    DisassociateWebsiteCertificateAuthorityResponse,
    ListDevicesResponse,
    ListDomainsResponse,
    ListFleetsResponse,
    ListTagsForResourceResponse,
    ListWebsiteAuthorizationProvidersResponse,
    ListWebsiteCertificateAuthoritiesResponse,
    RestoreDomainAccessResponse,
    RevokeDomainAccessResponse,
    SignOutUserResponse,
    TagResourceResponse,
    UntagResourceResponse,
    UpdateAuditStreamConfigurationResponse,
    UpdateCompanyNetworkConfigurationResponse,
    UpdateDevicePolicyConfigurationResponse,
    UpdateDomainMetadataResponse,
    UpdateFleetMetadataResponse,
    UpdateIdentityProviderConfigurationResponse
} from "aws-sdk/clients/worklink";
const schema = require("../apis/worklink-2018-09-25.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.worklink.WebsiteCertificateAuthorityAssociation {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.worklink.WebsiteCertificateAuthorityAssociation>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.WorkLink()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
          console.log(this.capitalizedParams);
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

    invokeAssociateDomain(partialParams: ToOptional<{
      [K in keyof AssociateDomainRequest & keyof Omit<AssociateDomainRequest, "FleetArn">]: (AssociateDomainRequest)[K]
    }>): Request<AssociateDomainResponse, AWSError> {
        this.boot();
        return this.client.associateDomain(
          this.ops["AssociateDomain"].apply(partialParams)
        );
    }

    invokeAssociateWebsiteAuthorizationProvider(partialParams: ToOptional<{
      [K in keyof AssociateWebsiteAuthorizationProviderRequest & keyof Omit<AssociateWebsiteAuthorizationProviderRequest, "FleetArn">]: (AssociateWebsiteAuthorizationProviderRequest)[K]
    }>): Request<AssociateWebsiteAuthorizationProviderResponse, AWSError> {
        this.boot();
        return this.client.associateWebsiteAuthorizationProvider(
          this.ops["AssociateWebsiteAuthorizationProvider"].apply(partialParams)
        );
    }

    invokeAssociateWebsiteCertificateAuthority(partialParams: ToOptional<{
      [K in keyof AssociateWebsiteCertificateAuthorityRequest & keyof Omit<AssociateWebsiteCertificateAuthorityRequest, "FleetArn" | "Certificate">]: (AssociateWebsiteCertificateAuthorityRequest)[K]
    }>): Request<AssociateWebsiteCertificateAuthorityResponse, AWSError> {
        this.boot();
        return this.client.associateWebsiteCertificateAuthority(
          this.ops["AssociateWebsiteCertificateAuthority"].apply(partialParams)
        );
    }

    invokeCreateFleet(partialParams: ToOptional<{
      [K in keyof CreateFleetRequest]: (CreateFleetRequest)[K]
    }>): Request<CreateFleetResponse, AWSError> {
        this.boot();
        return this.client.createFleet(
          this.ops["CreateFleet"].apply(partialParams)
        );
    }

    invokeDeleteFleet(partialParams: ToOptional<{
      [K in keyof DeleteFleetRequest & keyof Omit<DeleteFleetRequest, "FleetArn">]: (DeleteFleetRequest)[K]
    }>): Request<DeleteFleetResponse, AWSError> {
        this.boot();
        return this.client.deleteFleet(
          this.ops["DeleteFleet"].apply(partialParams)
        );
    }

    invokeDescribeAuditStreamConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeAuditStreamConfigurationRequest & keyof Omit<DescribeAuditStreamConfigurationRequest, "FleetArn">]: (DescribeAuditStreamConfigurationRequest)[K]
    }>): Request<DescribeAuditStreamConfigurationResponse, AWSError> {
        this.boot();
        return this.client.describeAuditStreamConfiguration(
          this.ops["DescribeAuditStreamConfiguration"].apply(partialParams)
        );
    }

    invokeDescribeCompanyNetworkConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeCompanyNetworkConfigurationRequest & keyof Omit<DescribeCompanyNetworkConfigurationRequest, "FleetArn">]: (DescribeCompanyNetworkConfigurationRequest)[K]
    }>): Request<DescribeCompanyNetworkConfigurationResponse, AWSError> {
        this.boot();
        return this.client.describeCompanyNetworkConfiguration(
          this.ops["DescribeCompanyNetworkConfiguration"].apply(partialParams)
        );
    }

    invokeDescribeDevice(partialParams: ToOptional<{
      [K in keyof DescribeDeviceRequest & keyof Omit<DescribeDeviceRequest, "FleetArn">]: (DescribeDeviceRequest)[K]
    }>): Request<DescribeDeviceResponse, AWSError> {
        this.boot();
        return this.client.describeDevice(
          this.ops["DescribeDevice"].apply(partialParams)
        );
    }

    invokeDescribeDevicePolicyConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeDevicePolicyConfigurationRequest & keyof Omit<DescribeDevicePolicyConfigurationRequest, "FleetArn">]: (DescribeDevicePolicyConfigurationRequest)[K]
    }>): Request<DescribeDevicePolicyConfigurationResponse, AWSError> {
        this.boot();
        return this.client.describeDevicePolicyConfiguration(
          this.ops["DescribeDevicePolicyConfiguration"].apply(partialParams)
        );
    }

    invokeDescribeDomain(partialParams: ToOptional<{
      [K in keyof DescribeDomainRequest & keyof Omit<DescribeDomainRequest, "FleetArn">]: (DescribeDomainRequest)[K]
    }>): Request<DescribeDomainResponse, AWSError> {
        this.boot();
        return this.client.describeDomain(
          this.ops["DescribeDomain"].apply(partialParams)
        );
    }

    invokeDescribeFleetMetadata(partialParams: ToOptional<{
      [K in keyof DescribeFleetMetadataRequest & keyof Omit<DescribeFleetMetadataRequest, "FleetArn">]: (DescribeFleetMetadataRequest)[K]
    }>): Request<DescribeFleetMetadataResponse, AWSError> {
        this.boot();
        return this.client.describeFleetMetadata(
          this.ops["DescribeFleetMetadata"].apply(partialParams)
        );
    }

    invokeDescribeIdentityProviderConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeIdentityProviderConfigurationRequest & keyof Omit<DescribeIdentityProviderConfigurationRequest, "FleetArn">]: (DescribeIdentityProviderConfigurationRequest)[K]
    }>): Request<DescribeIdentityProviderConfigurationResponse, AWSError> {
        this.boot();
        return this.client.describeIdentityProviderConfiguration(
          this.ops["DescribeIdentityProviderConfiguration"].apply(partialParams)
        );
    }

    invokeDescribeWebsiteCertificateAuthority(partialParams: ToOptional<{
      [K in keyof DescribeWebsiteCertificateAuthorityRequest & keyof Omit<DescribeWebsiteCertificateAuthorityRequest, "FleetArn" | "WebsiteCaId">]: (DescribeWebsiteCertificateAuthorityRequest)[K]
    }>): Request<DescribeWebsiteCertificateAuthorityResponse, AWSError> {
        this.boot();
        return this.client.describeWebsiteCertificateAuthority(
          this.ops["DescribeWebsiteCertificateAuthority"].apply(partialParams)
        );
    }

    invokeDisassociateDomain(partialParams: ToOptional<{
      [K in keyof DisassociateDomainRequest & keyof Omit<DisassociateDomainRequest, "FleetArn">]: (DisassociateDomainRequest)[K]
    }>): Request<DisassociateDomainResponse, AWSError> {
        this.boot();
        return this.client.disassociateDomain(
          this.ops["DisassociateDomain"].apply(partialParams)
        );
    }

    invokeDisassociateWebsiteAuthorizationProvider(partialParams: ToOptional<{
      [K in keyof DisassociateWebsiteAuthorizationProviderRequest & keyof Omit<DisassociateWebsiteAuthorizationProviderRequest, "FleetArn">]: (DisassociateWebsiteAuthorizationProviderRequest)[K]
    }>): Request<DisassociateWebsiteAuthorizationProviderResponse, AWSError> {
        this.boot();
        return this.client.disassociateWebsiteAuthorizationProvider(
          this.ops["DisassociateWebsiteAuthorizationProvider"].apply(partialParams)
        );
    }

    invokeDisassociateWebsiteCertificateAuthority(partialParams: ToOptional<{
      [K in keyof DisassociateWebsiteCertificateAuthorityRequest & keyof Omit<DisassociateWebsiteCertificateAuthorityRequest, "FleetArn" | "WebsiteCaId">]: (DisassociateWebsiteCertificateAuthorityRequest)[K]
    }>): Request<DisassociateWebsiteCertificateAuthorityResponse, AWSError> {
        this.boot();
        return this.client.disassociateWebsiteCertificateAuthority(
          this.ops["DisassociateWebsiteCertificateAuthority"].apply(partialParams)
        );
    }

    invokeListDevices(partialParams: ToOptional<{
      [K in keyof ListDevicesRequest & keyof Omit<ListDevicesRequest, "FleetArn">]: (ListDevicesRequest)[K]
    }>): Request<ListDevicesResponse, AWSError> {
        this.boot();
        return this.client.listDevices(
          this.ops["ListDevices"].apply(partialParams)
        );
    }

    invokeListDomains(partialParams: ToOptional<{
      [K in keyof ListDomainsRequest & keyof Omit<ListDomainsRequest, "FleetArn">]: (ListDomainsRequest)[K]
    }>): Request<ListDomainsResponse, AWSError> {
        this.boot();
        return this.client.listDomains(
          this.ops["ListDomains"].apply(partialParams)
        );
    }

    invokeListFleets(partialParams: ToOptional<{
      [K in keyof ListFleetsRequest]: (ListFleetsRequest)[K]
    }>): Request<ListFleetsResponse, AWSError> {
        this.boot();
        return this.client.listFleets(
          this.ops["ListFleets"].apply(partialParams)
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

    invokeListWebsiteAuthorizationProviders(partialParams: ToOptional<{
      [K in keyof ListWebsiteAuthorizationProvidersRequest & keyof Omit<ListWebsiteAuthorizationProvidersRequest, "FleetArn">]: (ListWebsiteAuthorizationProvidersRequest)[K]
    }>): Request<ListWebsiteAuthorizationProvidersResponse, AWSError> {
        this.boot();
        return this.client.listWebsiteAuthorizationProviders(
          this.ops["ListWebsiteAuthorizationProviders"].apply(partialParams)
        );
    }

    invokeListWebsiteCertificateAuthorities(partialParams: ToOptional<{
      [K in keyof ListWebsiteCertificateAuthoritiesRequest & keyof Omit<ListWebsiteCertificateAuthoritiesRequest, "FleetArn">]: (ListWebsiteCertificateAuthoritiesRequest)[K]
    }>): Request<ListWebsiteCertificateAuthoritiesResponse, AWSError> {
        this.boot();
        return this.client.listWebsiteCertificateAuthorities(
          this.ops["ListWebsiteCertificateAuthorities"].apply(partialParams)
        );
    }

    invokeRestoreDomainAccess(partialParams: ToOptional<{
      [K in keyof RestoreDomainAccessRequest & keyof Omit<RestoreDomainAccessRequest, "FleetArn">]: (RestoreDomainAccessRequest)[K]
    }>): Request<RestoreDomainAccessResponse, AWSError> {
        this.boot();
        return this.client.restoreDomainAccess(
          this.ops["RestoreDomainAccess"].apply(partialParams)
        );
    }

    invokeRevokeDomainAccess(partialParams: ToOptional<{
      [K in keyof RevokeDomainAccessRequest & keyof Omit<RevokeDomainAccessRequest, "FleetArn">]: (RevokeDomainAccessRequest)[K]
    }>): Request<RevokeDomainAccessResponse, AWSError> {
        this.boot();
        return this.client.revokeDomainAccess(
          this.ops["RevokeDomainAccess"].apply(partialParams)
        );
    }

    invokeSignOutUser(partialParams: ToOptional<{
      [K in keyof SignOutUserRequest & keyof Omit<SignOutUserRequest, "FleetArn">]: (SignOutUserRequest)[K]
    }>): Request<SignOutUserResponse, AWSError> {
        this.boot();
        return this.client.signOutUser(
          this.ops["SignOutUser"].apply(partialParams)
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

    invokeUpdateAuditStreamConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateAuditStreamConfigurationRequest & keyof Omit<UpdateAuditStreamConfigurationRequest, "FleetArn">]: (UpdateAuditStreamConfigurationRequest)[K]
    }>): Request<UpdateAuditStreamConfigurationResponse, AWSError> {
        this.boot();
        return this.client.updateAuditStreamConfiguration(
          this.ops["UpdateAuditStreamConfiguration"].apply(partialParams)
        );
    }

    invokeUpdateCompanyNetworkConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateCompanyNetworkConfigurationRequest & keyof Omit<UpdateCompanyNetworkConfigurationRequest, "FleetArn">]: (UpdateCompanyNetworkConfigurationRequest)[K]
    }>): Request<UpdateCompanyNetworkConfigurationResponse, AWSError> {
        this.boot();
        return this.client.updateCompanyNetworkConfiguration(
          this.ops["UpdateCompanyNetworkConfiguration"].apply(partialParams)
        );
    }

    invokeUpdateDevicePolicyConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateDevicePolicyConfigurationRequest & keyof Omit<UpdateDevicePolicyConfigurationRequest, "FleetArn">]: (UpdateDevicePolicyConfigurationRequest)[K]
    }>): Request<UpdateDevicePolicyConfigurationResponse, AWSError> {
        this.boot();
        return this.client.updateDevicePolicyConfiguration(
          this.ops["UpdateDevicePolicyConfiguration"].apply(partialParams)
        );
    }

    invokeUpdateDomainMetadata(partialParams: ToOptional<{
      [K in keyof UpdateDomainMetadataRequest & keyof Omit<UpdateDomainMetadataRequest, "FleetArn">]: (UpdateDomainMetadataRequest)[K]
    }>): Request<UpdateDomainMetadataResponse, AWSError> {
        this.boot();
        return this.client.updateDomainMetadata(
          this.ops["UpdateDomainMetadata"].apply(partialParams)
        );
    }

    invokeUpdateFleetMetadata(partialParams: ToOptional<{
      [K in keyof UpdateFleetMetadataRequest & keyof Omit<UpdateFleetMetadataRequest, "FleetArn">]: (UpdateFleetMetadataRequest)[K]
    }>): Request<UpdateFleetMetadataResponse, AWSError> {
        this.boot();
        return this.client.updateFleetMetadata(
          this.ops["UpdateFleetMetadata"].apply(partialParams)
        );
    }

    invokeUpdateIdentityProviderConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateIdentityProviderConfigurationRequest & keyof Omit<UpdateIdentityProviderConfigurationRequest, "FleetArn">]: (UpdateIdentityProviderConfigurationRequest)[K]
    }>): Request<UpdateIdentityProviderConfigurationResponse, AWSError> {
        this.boot();
        return this.client.updateIdentityProviderConfiguration(
          this.ops["UpdateIdentityProviderConfiguration"].apply(partialParams)
        );
    }
}