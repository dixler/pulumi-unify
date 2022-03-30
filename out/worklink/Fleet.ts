
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.worklink.Fleet {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.worklink.Fleet>) {
        super(...args)
        this.client = new awssdk.WorkLink()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/worklink-2018-09-25.normal.json"), this.client)
    }

    invokeAssociateDomain(partialParams: ToOptional<{
      [K in keyof AssociateDomainRequest & keyof AssociateDomainRequest & keyof AssociateDomainRequest & keyof AssociateDomainRequest & keyof AssociateDomainRequest & keyof AssociateDomainRequest & keyof AssociateDomainRequest & keyof AssociateDomainRequest]: (AssociateDomainRequest & AssociateDomainRequest & AssociateDomainRequest & AssociateDomainRequest & AssociateDomainRequest & AssociateDomainRequest & AssociateDomainRequest & AssociateDomainRequest)[K]
    }>): AssociateDomainResponse {
        return this.client.associateDomain(
            this.ops["AssociateDomain"].apply(partialParams)
        );
    }

    invokeAssociateWebsiteAuthorizationProvider(partialParams: ToOptional<{
      [K in keyof AssociateWebsiteAuthorizationProviderRequest & keyof AssociateWebsiteAuthorizationProviderRequest & keyof AssociateWebsiteAuthorizationProviderRequest & keyof AssociateWebsiteAuthorizationProviderRequest & keyof AssociateWebsiteAuthorizationProviderRequest & keyof AssociateWebsiteAuthorizationProviderRequest & keyof AssociateWebsiteAuthorizationProviderRequest & keyof AssociateWebsiteAuthorizationProviderRequest]: (AssociateWebsiteAuthorizationProviderRequest & AssociateWebsiteAuthorizationProviderRequest & AssociateWebsiteAuthorizationProviderRequest & AssociateWebsiteAuthorizationProviderRequest & AssociateWebsiteAuthorizationProviderRequest & AssociateWebsiteAuthorizationProviderRequest & AssociateWebsiteAuthorizationProviderRequest & AssociateWebsiteAuthorizationProviderRequest)[K]
    }>): AssociateWebsiteAuthorizationProviderResponse {
        return this.client.associateWebsiteAuthorizationProvider(
            this.ops["AssociateWebsiteAuthorizationProvider"].apply(partialParams)
        );
    }

    invokeAssociateWebsiteCertificateAuthority(partialParams: ToOptional<{
      [K in keyof AssociateWebsiteCertificateAuthorityRequest & keyof AssociateWebsiteCertificateAuthorityRequest & keyof AssociateWebsiteCertificateAuthorityRequest & keyof AssociateWebsiteCertificateAuthorityRequest & keyof AssociateWebsiteCertificateAuthorityRequest & keyof AssociateWebsiteCertificateAuthorityRequest & keyof AssociateWebsiteCertificateAuthorityRequest & keyof AssociateWebsiteCertificateAuthorityRequest]: (AssociateWebsiteCertificateAuthorityRequest & AssociateWebsiteCertificateAuthorityRequest & AssociateWebsiteCertificateAuthorityRequest & AssociateWebsiteCertificateAuthorityRequest & AssociateWebsiteCertificateAuthorityRequest & AssociateWebsiteCertificateAuthorityRequest & AssociateWebsiteCertificateAuthorityRequest & AssociateWebsiteCertificateAuthorityRequest)[K]
    }>): AssociateWebsiteCertificateAuthorityResponse {
        return this.client.associateWebsiteCertificateAuthority(
            this.ops["AssociateWebsiteCertificateAuthority"].apply(partialParams)
        );
    }

    invokeCreateFleet(partialParams: ToOptional<{
      [K in keyof CreateFleetRequest & keyof CreateFleetRequest & keyof CreateFleetRequest & keyof CreateFleetRequest & keyof CreateFleetRequest & keyof CreateFleetRequest & keyof CreateFleetRequest & keyof CreateFleetRequest]: (CreateFleetRequest & CreateFleetRequest & CreateFleetRequest & CreateFleetRequest & CreateFleetRequest & CreateFleetRequest & CreateFleetRequest & CreateFleetRequest)[K]
    }>): CreateFleetResponse {
        return this.client.createFleet(
            this.ops["CreateFleet"].apply(partialParams)
        );
    }

    invokeDeleteFleet(partialParams: ToOptional<{
      [K in keyof DeleteFleetRequest & keyof DeleteFleetRequest & keyof DeleteFleetRequest & keyof DeleteFleetRequest & keyof DeleteFleetRequest & keyof DeleteFleetRequest & keyof DeleteFleetRequest & keyof DeleteFleetRequest]: (DeleteFleetRequest & DeleteFleetRequest & DeleteFleetRequest & DeleteFleetRequest & DeleteFleetRequest & DeleteFleetRequest & DeleteFleetRequest & DeleteFleetRequest)[K]
    }>): DeleteFleetResponse {
        return this.client.deleteFleet(
            this.ops["DeleteFleet"].apply(partialParams)
        );
    }

    invokeDescribeAuditStreamConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeAuditStreamConfigurationRequest & keyof DescribeAuditStreamConfigurationRequest & keyof DescribeAuditStreamConfigurationRequest & keyof DescribeAuditStreamConfigurationRequest & keyof DescribeAuditStreamConfigurationRequest & keyof DescribeAuditStreamConfigurationRequest & keyof DescribeAuditStreamConfigurationRequest & keyof DescribeAuditStreamConfigurationRequest]: (DescribeAuditStreamConfigurationRequest & DescribeAuditStreamConfigurationRequest & DescribeAuditStreamConfigurationRequest & DescribeAuditStreamConfigurationRequest & DescribeAuditStreamConfigurationRequest & DescribeAuditStreamConfigurationRequest & DescribeAuditStreamConfigurationRequest & DescribeAuditStreamConfigurationRequest)[K]
    }>): DescribeAuditStreamConfigurationResponse {
        return this.client.describeAuditStreamConfiguration(
            this.ops["DescribeAuditStreamConfiguration"].apply(partialParams)
        );
    }

    invokeDescribeCompanyNetworkConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeCompanyNetworkConfigurationRequest & keyof DescribeCompanyNetworkConfigurationRequest & keyof DescribeCompanyNetworkConfigurationRequest & keyof DescribeCompanyNetworkConfigurationRequest & keyof DescribeCompanyNetworkConfigurationRequest & keyof DescribeCompanyNetworkConfigurationRequest & keyof DescribeCompanyNetworkConfigurationRequest & keyof DescribeCompanyNetworkConfigurationRequest]: (DescribeCompanyNetworkConfigurationRequest & DescribeCompanyNetworkConfigurationRequest & DescribeCompanyNetworkConfigurationRequest & DescribeCompanyNetworkConfigurationRequest & DescribeCompanyNetworkConfigurationRequest & DescribeCompanyNetworkConfigurationRequest & DescribeCompanyNetworkConfigurationRequest & DescribeCompanyNetworkConfigurationRequest)[K]
    }>): DescribeCompanyNetworkConfigurationResponse {
        return this.client.describeCompanyNetworkConfiguration(
            this.ops["DescribeCompanyNetworkConfiguration"].apply(partialParams)
        );
    }

    invokeDescribeDevice(partialParams: ToOptional<{
      [K in keyof DescribeDeviceRequest & keyof DescribeDeviceRequest & keyof DescribeDeviceRequest & keyof DescribeDeviceRequest & keyof DescribeDeviceRequest & keyof DescribeDeviceRequest & keyof DescribeDeviceRequest & keyof DescribeDeviceRequest]: (DescribeDeviceRequest & DescribeDeviceRequest & DescribeDeviceRequest & DescribeDeviceRequest & DescribeDeviceRequest & DescribeDeviceRequest & DescribeDeviceRequest & DescribeDeviceRequest)[K]
    }>): DescribeDeviceResponse {
        return this.client.describeDevice(
            this.ops["DescribeDevice"].apply(partialParams)
        );
    }

    invokeDescribeDevicePolicyConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeDevicePolicyConfigurationRequest & keyof DescribeDevicePolicyConfigurationRequest & keyof DescribeDevicePolicyConfigurationRequest & keyof DescribeDevicePolicyConfigurationRequest & keyof DescribeDevicePolicyConfigurationRequest & keyof DescribeDevicePolicyConfigurationRequest & keyof DescribeDevicePolicyConfigurationRequest & keyof DescribeDevicePolicyConfigurationRequest]: (DescribeDevicePolicyConfigurationRequest & DescribeDevicePolicyConfigurationRequest & DescribeDevicePolicyConfigurationRequest & DescribeDevicePolicyConfigurationRequest & DescribeDevicePolicyConfigurationRequest & DescribeDevicePolicyConfigurationRequest & DescribeDevicePolicyConfigurationRequest & DescribeDevicePolicyConfigurationRequest)[K]
    }>): DescribeDevicePolicyConfigurationResponse {
        return this.client.describeDevicePolicyConfiguration(
            this.ops["DescribeDevicePolicyConfiguration"].apply(partialParams)
        );
    }

    invokeDescribeDomain(partialParams: ToOptional<{
      [K in keyof DescribeDomainRequest & keyof DescribeDomainRequest & keyof DescribeDomainRequest & keyof DescribeDomainRequest & keyof DescribeDomainRequest & keyof DescribeDomainRequest & keyof DescribeDomainRequest & keyof DescribeDomainRequest]: (DescribeDomainRequest & DescribeDomainRequest & DescribeDomainRequest & DescribeDomainRequest & DescribeDomainRequest & DescribeDomainRequest & DescribeDomainRequest & DescribeDomainRequest)[K]
    }>): DescribeDomainResponse {
        return this.client.describeDomain(
            this.ops["DescribeDomain"].apply(partialParams)
        );
    }

    invokeDescribeFleetMetadata(partialParams: ToOptional<{
      [K in keyof DescribeFleetMetadataRequest & keyof DescribeFleetMetadataRequest & keyof DescribeFleetMetadataRequest & keyof DescribeFleetMetadataRequest & keyof DescribeFleetMetadataRequest & keyof DescribeFleetMetadataRequest & keyof DescribeFleetMetadataRequest & keyof DescribeFleetMetadataRequest]: (DescribeFleetMetadataRequest & DescribeFleetMetadataRequest & DescribeFleetMetadataRequest & DescribeFleetMetadataRequest & DescribeFleetMetadataRequest & DescribeFleetMetadataRequest & DescribeFleetMetadataRequest & DescribeFleetMetadataRequest)[K]
    }>): DescribeFleetMetadataResponse {
        return this.client.describeFleetMetadata(
            this.ops["DescribeFleetMetadata"].apply(partialParams)
        );
    }

    invokeDescribeIdentityProviderConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeIdentityProviderConfigurationRequest & keyof DescribeIdentityProviderConfigurationRequest & keyof DescribeIdentityProviderConfigurationRequest & keyof DescribeIdentityProviderConfigurationRequest & keyof DescribeIdentityProviderConfigurationRequest & keyof DescribeIdentityProviderConfigurationRequest & keyof DescribeIdentityProviderConfigurationRequest & keyof DescribeIdentityProviderConfigurationRequest]: (DescribeIdentityProviderConfigurationRequest & DescribeIdentityProviderConfigurationRequest & DescribeIdentityProviderConfigurationRequest & DescribeIdentityProviderConfigurationRequest & DescribeIdentityProviderConfigurationRequest & DescribeIdentityProviderConfigurationRequest & DescribeIdentityProviderConfigurationRequest & DescribeIdentityProviderConfigurationRequest)[K]
    }>): DescribeIdentityProviderConfigurationResponse {
        return this.client.describeIdentityProviderConfiguration(
            this.ops["DescribeIdentityProviderConfiguration"].apply(partialParams)
        );
    }

    invokeDescribeWebsiteCertificateAuthority(partialParams: ToOptional<{
      [K in keyof DescribeWebsiteCertificateAuthorityRequest & keyof DescribeWebsiteCertificateAuthorityRequest & keyof DescribeWebsiteCertificateAuthorityRequest & keyof DescribeWebsiteCertificateAuthorityRequest & keyof DescribeWebsiteCertificateAuthorityRequest & keyof DescribeWebsiteCertificateAuthorityRequest & keyof DescribeWebsiteCertificateAuthorityRequest & keyof DescribeWebsiteCertificateAuthorityRequest]: (DescribeWebsiteCertificateAuthorityRequest & DescribeWebsiteCertificateAuthorityRequest & DescribeWebsiteCertificateAuthorityRequest & DescribeWebsiteCertificateAuthorityRequest & DescribeWebsiteCertificateAuthorityRequest & DescribeWebsiteCertificateAuthorityRequest & DescribeWebsiteCertificateAuthorityRequest & DescribeWebsiteCertificateAuthorityRequest)[K]
    }>): DescribeWebsiteCertificateAuthorityResponse {
        return this.client.describeWebsiteCertificateAuthority(
            this.ops["DescribeWebsiteCertificateAuthority"].apply(partialParams)
        );
    }

    invokeDisassociateDomain(partialParams: ToOptional<{
      [K in keyof DisassociateDomainRequest & keyof DisassociateDomainRequest & keyof DisassociateDomainRequest & keyof DisassociateDomainRequest & keyof DisassociateDomainRequest & keyof DisassociateDomainRequest & keyof DisassociateDomainRequest & keyof DisassociateDomainRequest]: (DisassociateDomainRequest & DisassociateDomainRequest & DisassociateDomainRequest & DisassociateDomainRequest & DisassociateDomainRequest & DisassociateDomainRequest & DisassociateDomainRequest & DisassociateDomainRequest)[K]
    }>): DisassociateDomainResponse {
        return this.client.disassociateDomain(
            this.ops["DisassociateDomain"].apply(partialParams)
        );
    }

    invokeDisassociateWebsiteAuthorizationProvider(partialParams: ToOptional<{
      [K in keyof DisassociateWebsiteAuthorizationProviderRequest & keyof DisassociateWebsiteAuthorizationProviderRequest & keyof DisassociateWebsiteAuthorizationProviderRequest & keyof DisassociateWebsiteAuthorizationProviderRequest & keyof DisassociateWebsiteAuthorizationProviderRequest & keyof DisassociateWebsiteAuthorizationProviderRequest & keyof DisassociateWebsiteAuthorizationProviderRequest & keyof DisassociateWebsiteAuthorizationProviderRequest]: (DisassociateWebsiteAuthorizationProviderRequest & DisassociateWebsiteAuthorizationProviderRequest & DisassociateWebsiteAuthorizationProviderRequest & DisassociateWebsiteAuthorizationProviderRequest & DisassociateWebsiteAuthorizationProviderRequest & DisassociateWebsiteAuthorizationProviderRequest & DisassociateWebsiteAuthorizationProviderRequest & DisassociateWebsiteAuthorizationProviderRequest)[K]
    }>): DisassociateWebsiteAuthorizationProviderResponse {
        return this.client.disassociateWebsiteAuthorizationProvider(
            this.ops["DisassociateWebsiteAuthorizationProvider"].apply(partialParams)
        );
    }

    invokeDisassociateWebsiteCertificateAuthority(partialParams: ToOptional<{
      [K in keyof DisassociateWebsiteCertificateAuthorityRequest & keyof DisassociateWebsiteCertificateAuthorityRequest & keyof DisassociateWebsiteCertificateAuthorityRequest & keyof DisassociateWebsiteCertificateAuthorityRequest & keyof DisassociateWebsiteCertificateAuthorityRequest & keyof DisassociateWebsiteCertificateAuthorityRequest & keyof DisassociateWebsiteCertificateAuthorityRequest & keyof DisassociateWebsiteCertificateAuthorityRequest]: (DisassociateWebsiteCertificateAuthorityRequest & DisassociateWebsiteCertificateAuthorityRequest & DisassociateWebsiteCertificateAuthorityRequest & DisassociateWebsiteCertificateAuthorityRequest & DisassociateWebsiteCertificateAuthorityRequest & DisassociateWebsiteCertificateAuthorityRequest & DisassociateWebsiteCertificateAuthorityRequest & DisassociateWebsiteCertificateAuthorityRequest)[K]
    }>): DisassociateWebsiteCertificateAuthorityResponse {
        return this.client.disassociateWebsiteCertificateAuthority(
            this.ops["DisassociateWebsiteCertificateAuthority"].apply(partialParams)
        );
    }

    invokeListDevices(partialParams: ToOptional<{
      [K in keyof ListDevicesRequest & keyof ListDevicesRequest & keyof ListDevicesRequest & keyof ListDevicesRequest & keyof ListDevicesRequest & keyof ListDevicesRequest & keyof ListDevicesRequest & keyof ListDevicesRequest]: (ListDevicesRequest & ListDevicesRequest & ListDevicesRequest & ListDevicesRequest & ListDevicesRequest & ListDevicesRequest & ListDevicesRequest & ListDevicesRequest)[K]
    }>): ListDevicesResponse {
        return this.client.listDevices(
            this.ops["ListDevices"].apply(partialParams)
        );
    }

    invokeListDomains(partialParams: ToOptional<{
      [K in keyof ListDomainsRequest & keyof ListDomainsRequest & keyof ListDomainsRequest & keyof ListDomainsRequest & keyof ListDomainsRequest & keyof ListDomainsRequest & keyof ListDomainsRequest & keyof ListDomainsRequest]: (ListDomainsRequest & ListDomainsRequest & ListDomainsRequest & ListDomainsRequest & ListDomainsRequest & ListDomainsRequest & ListDomainsRequest & ListDomainsRequest)[K]
    }>): ListDomainsResponse {
        return this.client.listDomains(
            this.ops["ListDomains"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeListWebsiteAuthorizationProviders(partialParams: ToOptional<{
      [K in keyof ListWebsiteAuthorizationProvidersRequest & keyof ListWebsiteAuthorizationProvidersRequest & keyof ListWebsiteAuthorizationProvidersRequest & keyof ListWebsiteAuthorizationProvidersRequest & keyof ListWebsiteAuthorizationProvidersRequest & keyof ListWebsiteAuthorizationProvidersRequest & keyof ListWebsiteAuthorizationProvidersRequest & keyof ListWebsiteAuthorizationProvidersRequest]: (ListWebsiteAuthorizationProvidersRequest & ListWebsiteAuthorizationProvidersRequest & ListWebsiteAuthorizationProvidersRequest & ListWebsiteAuthorizationProvidersRequest & ListWebsiteAuthorizationProvidersRequest & ListWebsiteAuthorizationProvidersRequest & ListWebsiteAuthorizationProvidersRequest & ListWebsiteAuthorizationProvidersRequest)[K]
    }>): ListWebsiteAuthorizationProvidersResponse {
        return this.client.listWebsiteAuthorizationProviders(
            this.ops["ListWebsiteAuthorizationProviders"].apply(partialParams)
        );
    }

    invokeListWebsiteCertificateAuthorities(partialParams: ToOptional<{
      [K in keyof ListWebsiteCertificateAuthoritiesRequest & keyof ListWebsiteCertificateAuthoritiesRequest & keyof ListWebsiteCertificateAuthoritiesRequest & keyof ListWebsiteCertificateAuthoritiesRequest & keyof ListWebsiteCertificateAuthoritiesRequest & keyof ListWebsiteCertificateAuthoritiesRequest & keyof ListWebsiteCertificateAuthoritiesRequest & keyof ListWebsiteCertificateAuthoritiesRequest]: (ListWebsiteCertificateAuthoritiesRequest & ListWebsiteCertificateAuthoritiesRequest & ListWebsiteCertificateAuthoritiesRequest & ListWebsiteCertificateAuthoritiesRequest & ListWebsiteCertificateAuthoritiesRequest & ListWebsiteCertificateAuthoritiesRequest & ListWebsiteCertificateAuthoritiesRequest & ListWebsiteCertificateAuthoritiesRequest)[K]
    }>): ListWebsiteCertificateAuthoritiesResponse {
        return this.client.listWebsiteCertificateAuthorities(
            this.ops["ListWebsiteCertificateAuthorities"].apply(partialParams)
        );
    }

    invokeRestoreDomainAccess(partialParams: ToOptional<{
      [K in keyof RestoreDomainAccessRequest & keyof RestoreDomainAccessRequest & keyof RestoreDomainAccessRequest & keyof RestoreDomainAccessRequest & keyof RestoreDomainAccessRequest & keyof RestoreDomainAccessRequest & keyof RestoreDomainAccessRequest & keyof RestoreDomainAccessRequest]: (RestoreDomainAccessRequest & RestoreDomainAccessRequest & RestoreDomainAccessRequest & RestoreDomainAccessRequest & RestoreDomainAccessRequest & RestoreDomainAccessRequest & RestoreDomainAccessRequest & RestoreDomainAccessRequest)[K]
    }>): RestoreDomainAccessResponse {
        return this.client.restoreDomainAccess(
            this.ops["RestoreDomainAccess"].apply(partialParams)
        );
    }

    invokeRevokeDomainAccess(partialParams: ToOptional<{
      [K in keyof RevokeDomainAccessRequest & keyof RevokeDomainAccessRequest & keyof RevokeDomainAccessRequest & keyof RevokeDomainAccessRequest & keyof RevokeDomainAccessRequest & keyof RevokeDomainAccessRequest & keyof RevokeDomainAccessRequest & keyof RevokeDomainAccessRequest]: (RevokeDomainAccessRequest & RevokeDomainAccessRequest & RevokeDomainAccessRequest & RevokeDomainAccessRequest & RevokeDomainAccessRequest & RevokeDomainAccessRequest & RevokeDomainAccessRequest & RevokeDomainAccessRequest)[K]
    }>): RevokeDomainAccessResponse {
        return this.client.revokeDomainAccess(
            this.ops["RevokeDomainAccess"].apply(partialParams)
        );
    }

    invokeSignOutUser(partialParams: ToOptional<{
      [K in keyof SignOutUserRequest & keyof SignOutUserRequest & keyof SignOutUserRequest & keyof SignOutUserRequest & keyof SignOutUserRequest & keyof SignOutUserRequest & keyof SignOutUserRequest & keyof SignOutUserRequest]: (SignOutUserRequest & SignOutUserRequest & SignOutUserRequest & SignOutUserRequest & SignOutUserRequest & SignOutUserRequest & SignOutUserRequest & SignOutUserRequest)[K]
    }>): SignOutUserResponse {
        return this.client.signOutUser(
            this.ops["SignOutUser"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateAuditStreamConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateAuditStreamConfigurationRequest & keyof UpdateAuditStreamConfigurationRequest & keyof UpdateAuditStreamConfigurationRequest & keyof UpdateAuditStreamConfigurationRequest & keyof UpdateAuditStreamConfigurationRequest & keyof UpdateAuditStreamConfigurationRequest & keyof UpdateAuditStreamConfigurationRequest & keyof UpdateAuditStreamConfigurationRequest]: (UpdateAuditStreamConfigurationRequest & UpdateAuditStreamConfigurationRequest & UpdateAuditStreamConfigurationRequest & UpdateAuditStreamConfigurationRequest & UpdateAuditStreamConfigurationRequest & UpdateAuditStreamConfigurationRequest & UpdateAuditStreamConfigurationRequest & UpdateAuditStreamConfigurationRequest)[K]
    }>): UpdateAuditStreamConfigurationResponse {
        return this.client.updateAuditStreamConfiguration(
            this.ops["UpdateAuditStreamConfiguration"].apply(partialParams)
        );
    }

    invokeUpdateCompanyNetworkConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateCompanyNetworkConfigurationRequest & keyof UpdateCompanyNetworkConfigurationRequest & keyof UpdateCompanyNetworkConfigurationRequest & keyof UpdateCompanyNetworkConfigurationRequest & keyof UpdateCompanyNetworkConfigurationRequest & keyof UpdateCompanyNetworkConfigurationRequest & keyof UpdateCompanyNetworkConfigurationRequest & keyof UpdateCompanyNetworkConfigurationRequest]: (UpdateCompanyNetworkConfigurationRequest & UpdateCompanyNetworkConfigurationRequest & UpdateCompanyNetworkConfigurationRequest & UpdateCompanyNetworkConfigurationRequest & UpdateCompanyNetworkConfigurationRequest & UpdateCompanyNetworkConfigurationRequest & UpdateCompanyNetworkConfigurationRequest & UpdateCompanyNetworkConfigurationRequest)[K]
    }>): UpdateCompanyNetworkConfigurationResponse {
        return this.client.updateCompanyNetworkConfiguration(
            this.ops["UpdateCompanyNetworkConfiguration"].apply(partialParams)
        );
    }

    invokeUpdateDevicePolicyConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateDevicePolicyConfigurationRequest & keyof UpdateDevicePolicyConfigurationRequest & keyof UpdateDevicePolicyConfigurationRequest & keyof UpdateDevicePolicyConfigurationRequest & keyof UpdateDevicePolicyConfigurationRequest & keyof UpdateDevicePolicyConfigurationRequest & keyof UpdateDevicePolicyConfigurationRequest & keyof UpdateDevicePolicyConfigurationRequest]: (UpdateDevicePolicyConfigurationRequest & UpdateDevicePolicyConfigurationRequest & UpdateDevicePolicyConfigurationRequest & UpdateDevicePolicyConfigurationRequest & UpdateDevicePolicyConfigurationRequest & UpdateDevicePolicyConfigurationRequest & UpdateDevicePolicyConfigurationRequest & UpdateDevicePolicyConfigurationRequest)[K]
    }>): UpdateDevicePolicyConfigurationResponse {
        return this.client.updateDevicePolicyConfiguration(
            this.ops["UpdateDevicePolicyConfiguration"].apply(partialParams)
        );
    }

    invokeUpdateDomainMetadata(partialParams: ToOptional<{
      [K in keyof UpdateDomainMetadataRequest & keyof UpdateDomainMetadataRequest & keyof UpdateDomainMetadataRequest & keyof UpdateDomainMetadataRequest & keyof UpdateDomainMetadataRequest & keyof UpdateDomainMetadataRequest & keyof UpdateDomainMetadataRequest & keyof UpdateDomainMetadataRequest]: (UpdateDomainMetadataRequest & UpdateDomainMetadataRequest & UpdateDomainMetadataRequest & UpdateDomainMetadataRequest & UpdateDomainMetadataRequest & UpdateDomainMetadataRequest & UpdateDomainMetadataRequest & UpdateDomainMetadataRequest)[K]
    }>): UpdateDomainMetadataResponse {
        return this.client.updateDomainMetadata(
            this.ops["UpdateDomainMetadata"].apply(partialParams)
        );
    }

    invokeUpdateFleetMetadata(partialParams: ToOptional<{
      [K in keyof UpdateFleetMetadataRequest & keyof UpdateFleetMetadataRequest & keyof UpdateFleetMetadataRequest & keyof UpdateFleetMetadataRequest & keyof UpdateFleetMetadataRequest & keyof UpdateFleetMetadataRequest & keyof UpdateFleetMetadataRequest & keyof UpdateFleetMetadataRequest]: (UpdateFleetMetadataRequest & UpdateFleetMetadataRequest & UpdateFleetMetadataRequest & UpdateFleetMetadataRequest & UpdateFleetMetadataRequest & UpdateFleetMetadataRequest & UpdateFleetMetadataRequest & UpdateFleetMetadataRequest)[K]
    }>): UpdateFleetMetadataResponse {
        return this.client.updateFleetMetadata(
            this.ops["UpdateFleetMetadata"].apply(partialParams)
        );
    }

    invokeUpdateIdentityProviderConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateIdentityProviderConfigurationRequest & keyof UpdateIdentityProviderConfigurationRequest & keyof UpdateIdentityProviderConfigurationRequest & keyof UpdateIdentityProviderConfigurationRequest & keyof UpdateIdentityProviderConfigurationRequest & keyof UpdateIdentityProviderConfigurationRequest & keyof UpdateIdentityProviderConfigurationRequest & keyof UpdateIdentityProviderConfigurationRequest]: (UpdateIdentityProviderConfigurationRequest & UpdateIdentityProviderConfigurationRequest & UpdateIdentityProviderConfigurationRequest & UpdateIdentityProviderConfigurationRequest & UpdateIdentityProviderConfigurationRequest & UpdateIdentityProviderConfigurationRequest & UpdateIdentityProviderConfigurationRequest & UpdateIdentityProviderConfigurationRequest)[K]
    }>): UpdateIdentityProviderConfigurationResponse {
        return this.client.updateIdentityProviderConfiguration(
            this.ops["UpdateIdentityProviderConfiguration"].apply(partialParams)
        );
    }
}