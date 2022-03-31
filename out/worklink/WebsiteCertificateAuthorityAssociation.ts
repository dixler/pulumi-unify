
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
    constructor(...args: ConstructorParameters<typeof aws.worklink.WebsiteCertificateAuthorityAssociation>) {
        super(...args)
        this.client = new awssdk.WorkLink()
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

    invokeAssociateDomain(partialParams: ToOptional<{
      [K in keyof AssociateDomainRequest & keyof AssociateDomainRequest & keyof AssociateDomainRequest & keyof AssociateDomainRequest]: (AssociateDomainRequest & AssociateDomainRequest & AssociateDomainRequest & AssociateDomainRequest)[K]
    }>): Request<AssociateDomainResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateDomain(
          this.ops["AssociateDomain"].applicator.apply(partialParams)
        );
    }

    invokeAssociateWebsiteAuthorizationProvider(partialParams: ToOptional<{
      [K in keyof AssociateWebsiteAuthorizationProviderRequest & keyof AssociateWebsiteAuthorizationProviderRequest & keyof AssociateWebsiteAuthorizationProviderRequest & keyof AssociateWebsiteAuthorizationProviderRequest]: (AssociateWebsiteAuthorizationProviderRequest & AssociateWebsiteAuthorizationProviderRequest & AssociateWebsiteAuthorizationProviderRequest & AssociateWebsiteAuthorizationProviderRequest)[K]
    }>): Request<AssociateWebsiteAuthorizationProviderResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateWebsiteAuthorizationProvider(
          this.ops["AssociateWebsiteAuthorizationProvider"].applicator.apply(partialParams)
        );
    }

    invokeAssociateWebsiteCertificateAuthority(partialParams: ToOptional<{
      [K in keyof AssociateWebsiteCertificateAuthorityRequest & keyof AssociateWebsiteCertificateAuthorityRequest & keyof AssociateWebsiteCertificateAuthorityRequest & keyof AssociateWebsiteCertificateAuthorityRequest]: (AssociateWebsiteCertificateAuthorityRequest & AssociateWebsiteCertificateAuthorityRequest & AssociateWebsiteCertificateAuthorityRequest & AssociateWebsiteCertificateAuthorityRequest)[K]
    }>): Request<AssociateWebsiteCertificateAuthorityResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateWebsiteCertificateAuthority(
          this.ops["AssociateWebsiteCertificateAuthority"].applicator.apply(partialParams)
        );
    }

    invokeCreateFleet(partialParams: ToOptional<{
      [K in keyof CreateFleetRequest & keyof CreateFleetRequest & keyof CreateFleetRequest & keyof CreateFleetRequest]: (CreateFleetRequest & CreateFleetRequest & CreateFleetRequest & CreateFleetRequest)[K]
    }>): Request<CreateFleetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFleet(
          this.ops["CreateFleet"].applicator.apply(partialParams)
        );
    }

    invokeDeleteFleet(partialParams: ToOptional<{
      [K in keyof DeleteFleetRequest & keyof DeleteFleetRequest & keyof DeleteFleetRequest & keyof DeleteFleetRequest]: (DeleteFleetRequest & DeleteFleetRequest & DeleteFleetRequest & DeleteFleetRequest)[K]
    }>): Request<DeleteFleetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFleet(
          this.ops["DeleteFleet"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAuditStreamConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeAuditStreamConfigurationRequest & keyof DescribeAuditStreamConfigurationRequest & keyof DescribeAuditStreamConfigurationRequest & keyof DescribeAuditStreamConfigurationRequest]: (DescribeAuditStreamConfigurationRequest & DescribeAuditStreamConfigurationRequest & DescribeAuditStreamConfigurationRequest & DescribeAuditStreamConfigurationRequest)[K]
    }>): Request<DescribeAuditStreamConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAuditStreamConfiguration(
          this.ops["DescribeAuditStreamConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDescribeCompanyNetworkConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeCompanyNetworkConfigurationRequest & keyof DescribeCompanyNetworkConfigurationRequest & keyof DescribeCompanyNetworkConfigurationRequest & keyof DescribeCompanyNetworkConfigurationRequest]: (DescribeCompanyNetworkConfigurationRequest & DescribeCompanyNetworkConfigurationRequest & DescribeCompanyNetworkConfigurationRequest & DescribeCompanyNetworkConfigurationRequest)[K]
    }>): Request<DescribeCompanyNetworkConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCompanyNetworkConfiguration(
          this.ops["DescribeCompanyNetworkConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDescribeDevice(partialParams: ToOptional<{
      [K in keyof DescribeDeviceRequest & keyof DescribeDeviceRequest & keyof DescribeDeviceRequest & keyof DescribeDeviceRequest]: (DescribeDeviceRequest & DescribeDeviceRequest & DescribeDeviceRequest & DescribeDeviceRequest)[K]
    }>): Request<DescribeDeviceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDevice(
          this.ops["DescribeDevice"].applicator.apply(partialParams)
        );
    }

    invokeDescribeDevicePolicyConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeDevicePolicyConfigurationRequest & keyof DescribeDevicePolicyConfigurationRequest & keyof DescribeDevicePolicyConfigurationRequest & keyof DescribeDevicePolicyConfigurationRequest]: (DescribeDevicePolicyConfigurationRequest & DescribeDevicePolicyConfigurationRequest & DescribeDevicePolicyConfigurationRequest & DescribeDevicePolicyConfigurationRequest)[K]
    }>): Request<DescribeDevicePolicyConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDevicePolicyConfiguration(
          this.ops["DescribeDevicePolicyConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDescribeDomain(partialParams: ToOptional<{
      [K in keyof DescribeDomainRequest & keyof DescribeDomainRequest & keyof DescribeDomainRequest & keyof DescribeDomainRequest]: (DescribeDomainRequest & DescribeDomainRequest & DescribeDomainRequest & DescribeDomainRequest)[K]
    }>): Request<DescribeDomainResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDomain(
          this.ops["DescribeDomain"].applicator.apply(partialParams)
        );
    }

    invokeDescribeFleetMetadata(partialParams: ToOptional<{
      [K in keyof DescribeFleetMetadataRequest & keyof DescribeFleetMetadataRequest & keyof DescribeFleetMetadataRequest & keyof DescribeFleetMetadataRequest]: (DescribeFleetMetadataRequest & DescribeFleetMetadataRequest & DescribeFleetMetadataRequest & DescribeFleetMetadataRequest)[K]
    }>): Request<DescribeFleetMetadataResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFleetMetadata(
          this.ops["DescribeFleetMetadata"].applicator.apply(partialParams)
        );
    }

    invokeDescribeIdentityProviderConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeIdentityProviderConfigurationRequest & keyof DescribeIdentityProviderConfigurationRequest & keyof DescribeIdentityProviderConfigurationRequest & keyof DescribeIdentityProviderConfigurationRequest]: (DescribeIdentityProviderConfigurationRequest & DescribeIdentityProviderConfigurationRequest & DescribeIdentityProviderConfigurationRequest & DescribeIdentityProviderConfigurationRequest)[K]
    }>): Request<DescribeIdentityProviderConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeIdentityProviderConfiguration(
          this.ops["DescribeIdentityProviderConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDescribeWebsiteCertificateAuthority(partialParams: ToOptional<{
      [K in keyof DescribeWebsiteCertificateAuthorityRequest & keyof DescribeWebsiteCertificateAuthorityRequest & keyof DescribeWebsiteCertificateAuthorityRequest & keyof DescribeWebsiteCertificateAuthorityRequest]: (DescribeWebsiteCertificateAuthorityRequest & DescribeWebsiteCertificateAuthorityRequest & DescribeWebsiteCertificateAuthorityRequest & DescribeWebsiteCertificateAuthorityRequest)[K]
    }>): Request<DescribeWebsiteCertificateAuthorityResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeWebsiteCertificateAuthority(
          this.ops["DescribeWebsiteCertificateAuthority"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateDomain(partialParams: ToOptional<{
      [K in keyof DisassociateDomainRequest & keyof DisassociateDomainRequest & keyof DisassociateDomainRequest & keyof DisassociateDomainRequest]: (DisassociateDomainRequest & DisassociateDomainRequest & DisassociateDomainRequest & DisassociateDomainRequest)[K]
    }>): Request<DisassociateDomainResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateDomain(
          this.ops["DisassociateDomain"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateWebsiteAuthorizationProvider(partialParams: ToOptional<{
      [K in keyof DisassociateWebsiteAuthorizationProviderRequest & keyof DisassociateWebsiteAuthorizationProviderRequest & keyof DisassociateWebsiteAuthorizationProviderRequest & keyof DisassociateWebsiteAuthorizationProviderRequest]: (DisassociateWebsiteAuthorizationProviderRequest & DisassociateWebsiteAuthorizationProviderRequest & DisassociateWebsiteAuthorizationProviderRequest & DisassociateWebsiteAuthorizationProviderRequest)[K]
    }>): Request<DisassociateWebsiteAuthorizationProviderResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateWebsiteAuthorizationProvider(
          this.ops["DisassociateWebsiteAuthorizationProvider"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateWebsiteCertificateAuthority(partialParams: ToOptional<{
      [K in keyof DisassociateWebsiteCertificateAuthorityRequest & keyof DisassociateWebsiteCertificateAuthorityRequest & keyof DisassociateWebsiteCertificateAuthorityRequest & keyof DisassociateWebsiteCertificateAuthorityRequest]: (DisassociateWebsiteCertificateAuthorityRequest & DisassociateWebsiteCertificateAuthorityRequest & DisassociateWebsiteCertificateAuthorityRequest & DisassociateWebsiteCertificateAuthorityRequest)[K]
    }>): Request<DisassociateWebsiteCertificateAuthorityResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateWebsiteCertificateAuthority(
          this.ops["DisassociateWebsiteCertificateAuthority"].applicator.apply(partialParams)
        );
    }

    invokeListDevices(partialParams: ToOptional<{
      [K in keyof ListDevicesRequest & keyof ListDevicesRequest & keyof Omit<ListDevicesRequest, "FleetArn"> & keyof ListDevicesRequest]: (ListDevicesRequest & ListDevicesRequest & Omit<ListDevicesRequest, "FleetArn"> & ListDevicesRequest)[K]
    }>): Request<ListDevicesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDevices(
          this.ops["ListDevices"].applicator.apply(partialParams)
        );
    }

    invokeListDomains(partialParams: ToOptional<{
      [K in keyof ListDomainsRequest & keyof ListDomainsRequest & keyof Omit<ListDomainsRequest, "FleetArn"> & keyof ListDomainsRequest]: (ListDomainsRequest & ListDomainsRequest & Omit<ListDomainsRequest, "FleetArn"> & ListDomainsRequest)[K]
    }>): Request<ListDomainsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDomains(
          this.ops["ListDomains"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof Omit<ListTagsForResourceRequest, "ResourceArn"> & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & Omit<ListTagsForResourceRequest, "ResourceArn"> & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeListWebsiteAuthorizationProviders(partialParams: ToOptional<{
      [K in keyof ListWebsiteAuthorizationProvidersRequest & keyof ListWebsiteAuthorizationProvidersRequest & keyof Omit<ListWebsiteAuthorizationProvidersRequest, "FleetArn"> & keyof ListWebsiteAuthorizationProvidersRequest]: (ListWebsiteAuthorizationProvidersRequest & ListWebsiteAuthorizationProvidersRequest & Omit<ListWebsiteAuthorizationProvidersRequest, "FleetArn"> & ListWebsiteAuthorizationProvidersRequest)[K]
    }>): Request<ListWebsiteAuthorizationProvidersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listWebsiteAuthorizationProviders(
          this.ops["ListWebsiteAuthorizationProviders"].applicator.apply(partialParams)
        );
    }

    invokeListWebsiteCertificateAuthorities(partialParams: ToOptional<{
      [K in keyof ListWebsiteCertificateAuthoritiesRequest & keyof ListWebsiteCertificateAuthoritiesRequest & keyof Omit<ListWebsiteCertificateAuthoritiesRequest, "FleetArn"> & keyof ListWebsiteCertificateAuthoritiesRequest]: (ListWebsiteCertificateAuthoritiesRequest & ListWebsiteCertificateAuthoritiesRequest & Omit<ListWebsiteCertificateAuthoritiesRequest, "FleetArn"> & ListWebsiteCertificateAuthoritiesRequest)[K]
    }>): Request<ListWebsiteCertificateAuthoritiesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listWebsiteCertificateAuthorities(
          this.ops["ListWebsiteCertificateAuthorities"].applicator.apply(partialParams)
        );
    }

    invokeRestoreDomainAccess(partialParams: ToOptional<{
      [K in keyof RestoreDomainAccessRequest & keyof RestoreDomainAccessRequest & keyof Omit<RestoreDomainAccessRequest, "FleetArn"> & keyof RestoreDomainAccessRequest]: (RestoreDomainAccessRequest & RestoreDomainAccessRequest & Omit<RestoreDomainAccessRequest, "FleetArn"> & RestoreDomainAccessRequest)[K]
    }>): Request<RestoreDomainAccessResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreDomainAccess(
          this.ops["RestoreDomainAccess"].applicator.apply(partialParams)
        );
    }

    invokeRevokeDomainAccess(partialParams: ToOptional<{
      [K in keyof RevokeDomainAccessRequest & keyof RevokeDomainAccessRequest & keyof Omit<RevokeDomainAccessRequest, "FleetArn"> & keyof RevokeDomainAccessRequest]: (RevokeDomainAccessRequest & RevokeDomainAccessRequest & Omit<RevokeDomainAccessRequest, "FleetArn"> & RevokeDomainAccessRequest)[K]
    }>): Request<RevokeDomainAccessResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.revokeDomainAccess(
          this.ops["RevokeDomainAccess"].applicator.apply(partialParams)
        );
    }

    invokeSignOutUser(partialParams: ToOptional<{
      [K in keyof SignOutUserRequest & keyof SignOutUserRequest & keyof Omit<SignOutUserRequest, "FleetArn"> & keyof SignOutUserRequest]: (SignOutUserRequest & SignOutUserRequest & Omit<SignOutUserRequest, "FleetArn"> & SignOutUserRequest)[K]
    }>): Request<SignOutUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.signOutUser(
          this.ops["SignOutUser"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof Omit<TagResourceRequest, "ResourceArn"> & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & Omit<TagResourceRequest, "ResourceArn"> & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof Omit<UntagResourceRequest, "ResourceArn"> & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & Omit<UntagResourceRequest, "ResourceArn"> & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAuditStreamConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateAuditStreamConfigurationRequest & keyof UpdateAuditStreamConfigurationRequest & keyof Omit<UpdateAuditStreamConfigurationRequest, "FleetArn"> & keyof UpdateAuditStreamConfigurationRequest]: (UpdateAuditStreamConfigurationRequest & UpdateAuditStreamConfigurationRequest & Omit<UpdateAuditStreamConfigurationRequest, "FleetArn"> & UpdateAuditStreamConfigurationRequest)[K]
    }>): Request<UpdateAuditStreamConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAuditStreamConfiguration(
          this.ops["UpdateAuditStreamConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeUpdateCompanyNetworkConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateCompanyNetworkConfigurationRequest & keyof UpdateCompanyNetworkConfigurationRequest & keyof Omit<UpdateCompanyNetworkConfigurationRequest, "FleetArn"> & keyof UpdateCompanyNetworkConfigurationRequest]: (UpdateCompanyNetworkConfigurationRequest & UpdateCompanyNetworkConfigurationRequest & Omit<UpdateCompanyNetworkConfigurationRequest, "FleetArn"> & UpdateCompanyNetworkConfigurationRequest)[K]
    }>): Request<UpdateCompanyNetworkConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCompanyNetworkConfiguration(
          this.ops["UpdateCompanyNetworkConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDevicePolicyConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateDevicePolicyConfigurationRequest & keyof UpdateDevicePolicyConfigurationRequest & keyof Omit<UpdateDevicePolicyConfigurationRequest, "FleetArn"> & keyof UpdateDevicePolicyConfigurationRequest]: (UpdateDevicePolicyConfigurationRequest & UpdateDevicePolicyConfigurationRequest & Omit<UpdateDevicePolicyConfigurationRequest, "FleetArn"> & UpdateDevicePolicyConfigurationRequest)[K]
    }>): Request<UpdateDevicePolicyConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDevicePolicyConfiguration(
          this.ops["UpdateDevicePolicyConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDomainMetadata(partialParams: ToOptional<{
      [K in keyof UpdateDomainMetadataRequest & keyof UpdateDomainMetadataRequest & keyof Omit<UpdateDomainMetadataRequest, "FleetArn"> & keyof UpdateDomainMetadataRequest]: (UpdateDomainMetadataRequest & UpdateDomainMetadataRequest & Omit<UpdateDomainMetadataRequest, "FleetArn"> & UpdateDomainMetadataRequest)[K]
    }>): Request<UpdateDomainMetadataResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDomainMetadata(
          this.ops["UpdateDomainMetadata"].applicator.apply(partialParams)
        );
    }

    invokeUpdateFleetMetadata(partialParams: ToOptional<{
      [K in keyof UpdateFleetMetadataRequest & keyof UpdateFleetMetadataRequest & keyof Omit<UpdateFleetMetadataRequest, "FleetArn"> & keyof UpdateFleetMetadataRequest]: (UpdateFleetMetadataRequest & UpdateFleetMetadataRequest & Omit<UpdateFleetMetadataRequest, "FleetArn"> & UpdateFleetMetadataRequest)[K]
    }>): Request<UpdateFleetMetadataResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFleetMetadata(
          this.ops["UpdateFleetMetadata"].applicator.apply(partialParams)
        );
    }

    invokeUpdateIdentityProviderConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateIdentityProviderConfigurationRequest & keyof UpdateIdentityProviderConfigurationRequest & keyof Omit<UpdateIdentityProviderConfigurationRequest, "FleetArn"> & keyof UpdateIdentityProviderConfigurationRequest]: (UpdateIdentityProviderConfigurationRequest & UpdateIdentityProviderConfigurationRequest & Omit<UpdateIdentityProviderConfigurationRequest, "FleetArn"> & UpdateIdentityProviderConfigurationRequest)[K]
    }>): Request<UpdateIdentityProviderConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateIdentityProviderConfiguration(
          this.ops["UpdateIdentityProviderConfiguration"].applicator.apply(partialParams)
        );
    }
}