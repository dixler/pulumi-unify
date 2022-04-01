
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AcceptReservedInstancesExchangeQuoteRequest,
    AcceptTransitGatewayMulticastDomainAssociationsRequest,
    AcceptTransitGatewayPeeringAttachmentRequest,
    AcceptTransitGatewayVpcAttachmentRequest,
    AcceptVpcEndpointConnectionsRequest,
    AcceptVpcPeeringConnectionRequest,
    AdvertiseByoipCidrRequest,
    AllocateAddressRequest,
    AllocateHostsRequest,
    AllocateIpamPoolCidrRequest,
    ApplySecurityGroupsToClientVpnTargetNetworkRequest,
    AssignIpv6AddressesRequest,
    AssignPrivateIpAddressesRequest,
    AssociateAddressRequest,
    AssociateClientVpnTargetNetworkRequest,
    AssociateEnclaveCertificateIamRoleRequest,
    AssociateIamInstanceProfileRequest,
    AssociateInstanceEventWindowRequest,
    AssociateRouteTableRequest,
    AssociateSubnetCidrBlockRequest,
    AssociateTransitGatewayMulticastDomainRequest,
    AssociateTransitGatewayRouteTableRequest,
    AssociateTrunkInterfaceRequest,
    AssociateVpcCidrBlockRequest,
    AttachClassicLinkVpcRequest,
    AttachNetworkInterfaceRequest,
    AttachVolumeRequest,
    AttachVpnGatewayRequest,
    AuthorizeClientVpnIngressRequest,
    AuthorizeSecurityGroupEgressRequest,
    AuthorizeSecurityGroupIngressRequest,
    BundleInstanceRequest,
    CancelBundleTaskRequest,
    CancelCapacityReservationRequest,
    CancelCapacityReservationFleetsRequest,
    CancelImportTaskRequest,
    CancelReservedInstancesListingRequest,
    CancelSpotFleetRequestsRequest,
    CancelSpotInstanceRequestsRequest,
    ConfirmProductInstanceRequest,
    CopyFpgaImageRequest,
    CopyImageRequest,
    CopySnapshotRequest,
    CreateCapacityReservationRequest,
    CreateCapacityReservationFleetRequest,
    CreateCarrierGatewayRequest,
    CreateClientVpnEndpointRequest,
    CreateClientVpnRouteRequest,
    CreateCustomerGatewayRequest,
    CreateDefaultSubnetRequest,
    CreateDefaultVpcRequest,
    CreateDhcpOptionsRequest,
    CreateEgressOnlyInternetGatewayRequest,
    CreateFleetRequest,
    CreateFlowLogsRequest,
    CreateFpgaImageRequest,
    CreateImageRequest,
    CreateInstanceEventWindowRequest,
    CreateInstanceExportTaskRequest,
    CreateInternetGatewayRequest,
    CreateIpamRequest,
    CreateIpamPoolRequest,
    CreateIpamScopeRequest,
    CreateKeyPairRequest,
    CreateLaunchTemplateRequest,
    CreateLaunchTemplateVersionRequest,
    CreateLocalGatewayRouteRequest,
    CreateLocalGatewayRouteTableVpcAssociationRequest,
    CreateManagedPrefixListRequest,
    CreateNatGatewayRequest,
    CreateNetworkAclRequest,
    CreateNetworkInsightsAccessScopeRequest,
    CreateNetworkInsightsPathRequest,
    CreateNetworkInterfaceRequest,
    CreateNetworkInterfacePermissionRequest,
    CreatePlacementGroupRequest,
    CreatePublicIpv4PoolRequest,
    CreateReplaceRootVolumeTaskRequest,
    CreateReservedInstancesListingRequest,
    CreateRestoreImageTaskRequest,
    CreateRouteRequest,
    CreateRouteTableRequest,
    CreateSecurityGroupRequest,
    CreateSnapshotRequest,
    CreateSnapshotsRequest,
    CreateSpotDatafeedSubscriptionRequest,
    CreateStoreImageTaskRequest,
    CreateSubnetRequest,
    CreateSubnetCidrReservationRequest,
    CreateTrafficMirrorFilterRequest,
    CreateTrafficMirrorFilterRuleRequest,
    CreateTrafficMirrorSessionRequest,
    CreateTrafficMirrorTargetRequest,
    CreateTransitGatewayRequest,
    CreateTransitGatewayConnectRequest,
    CreateTransitGatewayConnectPeerRequest,
    CreateTransitGatewayMulticastDomainRequest,
    CreateTransitGatewayPeeringAttachmentRequest,
    CreateTransitGatewayPrefixListReferenceRequest,
    CreateTransitGatewayRouteRequest,
    CreateTransitGatewayRouteTableRequest,
    CreateTransitGatewayVpcAttachmentRequest,
    CreateVolumeRequest,
    CreateVpcRequest,
    CreateVpcEndpointRequest,
    CreateVpcEndpointConnectionNotificationRequest,
    CreateVpcEndpointServiceConfigurationRequest,
    CreateVpcPeeringConnectionRequest,
    CreateVpnConnectionRequest,
    CreateVpnGatewayRequest,
    DeleteCarrierGatewayRequest,
    DeleteClientVpnEndpointRequest,
    DeleteClientVpnRouteRequest,
    DeleteEgressOnlyInternetGatewayRequest,
    DeleteFleetsRequest,
    DeleteFlowLogsRequest,
    DeleteFpgaImageRequest,
    DeleteInstanceEventWindowRequest,
    DeleteIpamRequest,
    DeleteIpamPoolRequest,
    DeleteIpamScopeRequest,
    DeleteLaunchTemplateRequest,
    DeleteLaunchTemplateVersionsRequest,
    DeleteLocalGatewayRouteRequest,
    DeleteLocalGatewayRouteTableVpcAssociationRequest,
    DeleteManagedPrefixListRequest,
    DeleteNatGatewayRequest,
    DeleteNetworkInsightsAccessScopeRequest,
    DeleteNetworkInsightsAccessScopeAnalysisRequest,
    DeleteNetworkInsightsAnalysisRequest,
    DeleteNetworkInsightsPathRequest,
    DeleteNetworkInterfacePermissionRequest,
    DeletePublicIpv4PoolRequest,
    DeleteQueuedReservedInstancesRequest,
    DeleteSubnetCidrReservationRequest,
    DeleteTrafficMirrorFilterRequest,
    DeleteTrafficMirrorFilterRuleRequest,
    DeleteTrafficMirrorSessionRequest,
    DeleteTrafficMirrorTargetRequest,
    DeleteTransitGatewayRequest,
    DeleteTransitGatewayConnectRequest,
    DeleteTransitGatewayConnectPeerRequest,
    DeleteTransitGatewayMulticastDomainRequest,
    DeleteTransitGatewayPeeringAttachmentRequest,
    DeleteTransitGatewayPrefixListReferenceRequest,
    DeleteTransitGatewayRouteRequest,
    DeleteTransitGatewayRouteTableRequest,
    DeleteTransitGatewayVpcAttachmentRequest,
    DeleteVpcEndpointConnectionNotificationsRequest,
    DeleteVpcEndpointServiceConfigurationsRequest,
    DeleteVpcEndpointsRequest,
    DeleteVpcPeeringConnectionRequest,
    DeprovisionByoipCidrRequest,
    DeprovisionIpamPoolCidrRequest,
    DeprovisionPublicIpv4PoolCidrRequest,
    DeregisterInstanceEventNotificationAttributesRequest,
    DeregisterTransitGatewayMulticastGroupMembersRequest,
    DeregisterTransitGatewayMulticastGroupSourcesRequest,
    DescribeAccountAttributesRequest,
    DescribeAddressesRequest,
    DescribeAddressesAttributeRequest,
    DescribeAggregateIdFormatRequest,
    DescribeAvailabilityZonesRequest,
    DescribeBundleTasksRequest,
    DescribeByoipCidrsRequest,
    DescribeCapacityReservationFleetsRequest,
    DescribeCapacityReservationsRequest,
    DescribeCarrierGatewaysRequest,
    DescribeClassicLinkInstancesRequest,
    DescribeClientVpnAuthorizationRulesRequest,
    DescribeClientVpnConnectionsRequest,
    DescribeClientVpnEndpointsRequest,
    DescribeClientVpnRoutesRequest,
    DescribeClientVpnTargetNetworksRequest,
    DescribeCoipPoolsRequest,
    DescribeConversionTasksRequest,
    DescribeCustomerGatewaysRequest,
    DescribeDhcpOptionsRequest,
    DescribeEgressOnlyInternetGatewaysRequest,
    DescribeElasticGpusRequest,
    DescribeExportImageTasksRequest,
    DescribeExportTasksRequest,
    DescribeFastLaunchImagesRequest,
    DescribeFastSnapshotRestoresRequest,
    DescribeFleetHistoryRequest,
    DescribeFleetInstancesRequest,
    DescribeFleetsRequest,
    DescribeFlowLogsRequest,
    DescribeFpgaImageAttributeRequest,
    DescribeFpgaImagesRequest,
    DescribeHostReservationOfferingsRequest,
    DescribeHostReservationsRequest,
    DescribeHostsRequest,
    DescribeIamInstanceProfileAssociationsRequest,
    DescribeIdFormatRequest,
    DescribeIdentityIdFormatRequest,
    DescribeImageAttributeRequest,
    DescribeImagesRequest,
    DescribeImportImageTasksRequest,
    DescribeImportSnapshotTasksRequest,
    DescribeInstanceAttributeRequest,
    DescribeInstanceCreditSpecificationsRequest,
    DescribeInstanceEventNotificationAttributesRequest,
    DescribeInstanceEventWindowsRequest,
    DescribeInstanceStatusRequest,
    DescribeInstanceTypeOfferingsRequest,
    DescribeInstanceTypesRequest,
    DescribeInstancesRequest,
    DescribeInternetGatewaysRequest,
    DescribeIpamPoolsRequest,
    DescribeIpamScopesRequest,
    DescribeIpamsRequest,
    DescribeIpv6PoolsRequest,
    DescribeKeyPairsRequest,
    DescribeLaunchTemplateVersionsRequest,
    DescribeLaunchTemplatesRequest,
    DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest,
    DescribeLocalGatewayRouteTableVpcAssociationsRequest,
    DescribeLocalGatewayRouteTablesRequest,
    DescribeLocalGatewayVirtualInterfaceGroupsRequest,
    DescribeLocalGatewayVirtualInterfacesRequest,
    DescribeLocalGatewaysRequest,
    DescribeManagedPrefixListsRequest,
    DescribeMovingAddressesRequest,
    DescribeNatGatewaysRequest,
    DescribeNetworkAclsRequest,
    DescribeNetworkInsightsAccessScopeAnalysesRequest,
    DescribeNetworkInsightsAccessScopesRequest,
    DescribeNetworkInsightsAnalysesRequest,
    DescribeNetworkInsightsPathsRequest,
    DescribeNetworkInterfaceAttributeRequest,
    DescribeNetworkInterfacePermissionsRequest,
    DescribeNetworkInterfacesRequest,
    DescribePlacementGroupsRequest,
    DescribePrefixListsRequest,
    DescribePrincipalIdFormatRequest,
    DescribePublicIpv4PoolsRequest,
    DescribeRegionsRequest,
    DescribeReplaceRootVolumeTasksRequest,
    DescribeReservedInstancesRequest,
    DescribeReservedInstancesListingsRequest,
    DescribeReservedInstancesModificationsRequest,
    DescribeReservedInstancesOfferingsRequest,
    DescribeRouteTablesRequest,
    DescribeScheduledInstanceAvailabilityRequest,
    DescribeScheduledInstancesRequest,
    DescribeSecurityGroupReferencesRequest,
    DescribeSecurityGroupRulesRequest,
    DescribeSecurityGroupsRequest,
    DescribeSnapshotAttributeRequest,
    DescribeSnapshotTierStatusRequest,
    DescribeSnapshotsRequest,
    DescribeSpotDatafeedSubscriptionRequest,
    DescribeSpotFleetInstancesRequest,
    DescribeSpotFleetRequestHistoryRequest,
    DescribeSpotFleetRequestsRequest,
    DescribeSpotInstanceRequestsRequest,
    DescribeSpotPriceHistoryRequest,
    DescribeStaleSecurityGroupsRequest,
    DescribeStoreImageTasksRequest,
    DescribeSubnetsRequest,
    DescribeTagsRequest,
    DescribeTrafficMirrorFiltersRequest,
    DescribeTrafficMirrorSessionsRequest,
    DescribeTrafficMirrorTargetsRequest,
    DescribeTransitGatewayAttachmentsRequest,
    DescribeTransitGatewayConnectPeersRequest,
    DescribeTransitGatewayConnectsRequest,
    DescribeTransitGatewayMulticastDomainsRequest,
    DescribeTransitGatewayPeeringAttachmentsRequest,
    DescribeTransitGatewayRouteTablesRequest,
    DescribeTransitGatewayVpcAttachmentsRequest,
    DescribeTransitGatewaysRequest,
    DescribeTrunkInterfaceAssociationsRequest,
    DescribeVolumeAttributeRequest,
    DescribeVolumeStatusRequest,
    DescribeVolumesRequest,
    DescribeVolumesModificationsRequest,
    DescribeVpcAttributeRequest,
    DescribeVpcClassicLinkRequest,
    DescribeVpcClassicLinkDnsSupportRequest,
    DescribeVpcEndpointConnectionNotificationsRequest,
    DescribeVpcEndpointConnectionsRequest,
    DescribeVpcEndpointServiceConfigurationsRequest,
    DescribeVpcEndpointServicePermissionsRequest,
    DescribeVpcEndpointServicesRequest,
    DescribeVpcEndpointsRequest,
    DescribeVpcPeeringConnectionsRequest,
    DescribeVpcsRequest,
    DescribeVpnConnectionsRequest,
    DescribeVpnGatewaysRequest,
    DetachClassicLinkVpcRequest,
    DetachVolumeRequest,
    DisableEbsEncryptionByDefaultRequest,
    DisableFastLaunchRequest,
    DisableFastSnapshotRestoresRequest,
    DisableImageDeprecationRequest,
    DisableIpamOrganizationAdminAccountRequest,
    DisableSerialConsoleAccessRequest,
    DisableTransitGatewayRouteTablePropagationRequest,
    DisableVpcClassicLinkRequest,
    DisableVpcClassicLinkDnsSupportRequest,
    DisassociateClientVpnTargetNetworkRequest,
    DisassociateEnclaveCertificateIamRoleRequest,
    DisassociateIamInstanceProfileRequest,
    DisassociateInstanceEventWindowRequest,
    DisassociateSubnetCidrBlockRequest,
    DisassociateTransitGatewayMulticastDomainRequest,
    DisassociateTransitGatewayRouteTableRequest,
    DisassociateTrunkInterfaceRequest,
    DisassociateVpcCidrBlockRequest,
    EnableEbsEncryptionByDefaultRequest,
    EnableFastLaunchRequest,
    EnableFastSnapshotRestoresRequest,
    EnableImageDeprecationRequest,
    EnableIpamOrganizationAdminAccountRequest,
    EnableSerialConsoleAccessRequest,
    EnableTransitGatewayRouteTablePropagationRequest,
    EnableVpcClassicLinkRequest,
    EnableVpcClassicLinkDnsSupportRequest,
    ExportClientVpnClientCertificateRevocationListRequest,
    ExportClientVpnClientConfigurationRequest,
    ExportImageRequest,
    ExportTransitGatewayRoutesRequest,
    GetAssociatedEnclaveCertificateIamRolesRequest,
    GetAssociatedIpv6PoolCidrsRequest,
    GetCapacityReservationUsageRequest,
    GetCoipPoolUsageRequest,
    GetConsoleOutputRequest,
    GetConsoleScreenshotRequest,
    GetDefaultCreditSpecificationRequest,
    GetEbsDefaultKmsKeyIdRequest,
    GetEbsEncryptionByDefaultRequest,
    GetFlowLogsIntegrationTemplateRequest,
    GetGroupsForCapacityReservationRequest,
    GetHostReservationPurchasePreviewRequest,
    GetInstanceTypesFromInstanceRequirementsRequest,
    GetIpamAddressHistoryRequest,
    GetIpamPoolAllocationsRequest,
    GetIpamPoolCidrsRequest,
    GetIpamResourceCidrsRequest,
    GetLaunchTemplateDataRequest,
    GetManagedPrefixListAssociationsRequest,
    GetManagedPrefixListEntriesRequest,
    GetNetworkInsightsAccessScopeAnalysisFindingsRequest,
    GetNetworkInsightsAccessScopeContentRequest,
    GetPasswordDataRequest,
    GetReservedInstancesExchangeQuoteRequest,
    GetSerialConsoleAccessStatusRequest,
    GetSpotPlacementScoresRequest,
    GetSubnetCidrReservationsRequest,
    GetTransitGatewayAttachmentPropagationsRequest,
    GetTransitGatewayMulticastDomainAssociationsRequest,
    GetTransitGatewayPrefixListReferencesRequest,
    GetTransitGatewayRouteTableAssociationsRequest,
    GetTransitGatewayRouteTablePropagationsRequest,
    GetVpnConnectionDeviceSampleConfigurationRequest,
    GetVpnConnectionDeviceTypesRequest,
    ImportClientVpnClientCertificateRevocationListRequest,
    ImportImageRequest,
    ImportInstanceRequest,
    ImportKeyPairRequest,
    ImportSnapshotRequest,
    ImportVolumeRequest,
    ListImagesInRecycleBinRequest,
    ListSnapshotsInRecycleBinRequest,
    ModifyAddressAttributeRequest,
    ModifyAvailabilityZoneGroupRequest,
    ModifyCapacityReservationRequest,
    ModifyCapacityReservationFleetRequest,
    ModifyClientVpnEndpointRequest,
    ModifyDefaultCreditSpecificationRequest,
    ModifyEbsDefaultKmsKeyIdRequest,
    ModifyFleetRequest,
    ModifyFpgaImageAttributeRequest,
    ModifyHostsRequest,
    ModifyInstanceCapacityReservationAttributesRequest,
    ModifyInstanceCreditSpecificationRequest,
    ModifyInstanceEventStartTimeRequest,
    ModifyInstanceEventWindowRequest,
    ModifyInstanceMetadataOptionsRequest,
    ModifyInstancePlacementRequest,
    ModifyIpamRequest,
    ModifyIpamPoolRequest,
    ModifyIpamResourceCidrRequest,
    ModifyIpamScopeRequest,
    ModifyLaunchTemplateRequest,
    ModifyManagedPrefixListRequest,
    ModifyPrivateDnsNameOptionsRequest,
    ModifyReservedInstancesRequest,
    ModifySecurityGroupRulesRequest,
    ModifySnapshotTierRequest,
    ModifySpotFleetRequestRequest,
    ModifyTrafficMirrorFilterNetworkServicesRequest,
    ModifyTrafficMirrorFilterRuleRequest,
    ModifyTrafficMirrorSessionRequest,
    ModifyTransitGatewayRequest,
    ModifyTransitGatewayPrefixListReferenceRequest,
    ModifyTransitGatewayVpcAttachmentRequest,
    ModifyVolumeRequest,
    ModifyVpcEndpointRequest,
    ModifyVpcEndpointConnectionNotificationRequest,
    ModifyVpcEndpointServiceConfigurationRequest,
    ModifyVpcEndpointServicePayerResponsibilityRequest,
    ModifyVpcEndpointServicePermissionsRequest,
    ModifyVpcPeeringConnectionOptionsRequest,
    ModifyVpcTenancyRequest,
    ModifyVpnConnectionRequest,
    ModifyVpnConnectionOptionsRequest,
    ModifyVpnTunnelCertificateRequest,
    ModifyVpnTunnelOptionsRequest,
    MonitorInstancesRequest,
    MoveAddressToVpcRequest,
    MoveByoipCidrToIpamRequest,
    ProvisionByoipCidrRequest,
    ProvisionIpamPoolCidrRequest,
    ProvisionPublicIpv4PoolCidrRequest,
    PurchaseHostReservationRequest,
    PurchaseReservedInstancesOfferingRequest,
    PurchaseScheduledInstancesRequest,
    RegisterImageRequest,
    RegisterInstanceEventNotificationAttributesRequest,
    RegisterTransitGatewayMulticastGroupMembersRequest,
    RegisterTransitGatewayMulticastGroupSourcesRequest,
    RejectTransitGatewayMulticastDomainAssociationsRequest,
    RejectTransitGatewayPeeringAttachmentRequest,
    RejectTransitGatewayVpcAttachmentRequest,
    RejectVpcEndpointConnectionsRequest,
    RejectVpcPeeringConnectionRequest,
    ReleaseHostsRequest,
    ReleaseIpamPoolAllocationRequest,
    ReplaceIamInstanceProfileAssociationRequest,
    ReplaceNetworkAclAssociationRequest,
    ReplaceRouteTableAssociationRequest,
    ReplaceTransitGatewayRouteRequest,
    RequestSpotFleetRequest,
    RequestSpotInstancesRequest,
    ResetAddressAttributeRequest,
    ResetEbsDefaultKmsKeyIdRequest,
    ResetFpgaImageAttributeRequest,
    RestoreAddressToClassicRequest,
    RestoreImageFromRecycleBinRequest,
    RestoreManagedPrefixListVersionRequest,
    RestoreSnapshotFromRecycleBinRequest,
    RestoreSnapshotTierRequest,
    RevokeClientVpnIngressRequest,
    RevokeSecurityGroupEgressRequest,
    RevokeSecurityGroupIngressRequest,
    RunInstancesRequest,
    RunScheduledInstancesRequest,
    SearchLocalGatewayRoutesRequest,
    SearchTransitGatewayMulticastGroupsRequest,
    SearchTransitGatewayRoutesRequest,
    StartInstancesRequest,
    StartNetworkInsightsAccessScopeAnalysisRequest,
    StartNetworkInsightsAnalysisRequest,
    StartVpcEndpointServicePrivateDnsVerificationRequest,
    StopInstancesRequest,
    TerminateClientVpnConnectionsRequest,
    TerminateInstancesRequest,
    UnassignIpv6AddressesRequest,
    UnmonitorInstancesRequest,
    UpdateSecurityGroupRuleDescriptionsEgressRequest,
    UpdateSecurityGroupRuleDescriptionsIngressRequest,
    WithdrawByoipCidrRequest,
    AcceptReservedInstancesExchangeQuoteResult,
    AcceptTransitGatewayMulticastDomainAssociationsResult,
    AcceptTransitGatewayPeeringAttachmentResult,
    AcceptTransitGatewayVpcAttachmentResult,
    AcceptVpcEndpointConnectionsResult,
    AcceptVpcPeeringConnectionResult,
    AdvertiseByoipCidrResult,
    AllocateAddressResult,
    AllocateHostsResult,
    AllocateIpamPoolCidrResult,
    ApplySecurityGroupsToClientVpnTargetNetworkResult,
    AssignIpv6AddressesResult,
    AssignPrivateIpAddressesResult,
    AssociateAddressResult,
    AssociateClientVpnTargetNetworkResult,
    AssociateEnclaveCertificateIamRoleResult,
    AssociateIamInstanceProfileResult,
    AssociateInstanceEventWindowResult,
    AssociateRouteTableResult,
    AssociateSubnetCidrBlockResult,
    AssociateTransitGatewayMulticastDomainResult,
    AssociateTransitGatewayRouteTableResult,
    AssociateTrunkInterfaceResult,
    AssociateVpcCidrBlockResult,
    AttachClassicLinkVpcResult,
    AttachNetworkInterfaceResult,
    VolumeAttachment,
    AttachVpnGatewayResult,
    AuthorizeClientVpnIngressResult,
    AuthorizeSecurityGroupEgressResult,
    AuthorizeSecurityGroupIngressResult,
    BundleInstanceResult,
    CancelBundleTaskResult,
    CancelCapacityReservationResult,
    CancelCapacityReservationFleetsResult,
    CancelImportTaskResult,
    CancelReservedInstancesListingResult,
    CancelSpotFleetRequestsResponse,
    CancelSpotInstanceRequestsResult,
    ConfirmProductInstanceResult,
    CopyFpgaImageResult,
    CopyImageResult,
    CopySnapshotResult,
    CreateCapacityReservationResult,
    CreateCapacityReservationFleetResult,
    CreateCarrierGatewayResult,
    CreateClientVpnEndpointResult,
    CreateClientVpnRouteResult,
    CreateCustomerGatewayResult,
    CreateDefaultSubnetResult,
    CreateDefaultVpcResult,
    CreateDhcpOptionsResult,
    CreateEgressOnlyInternetGatewayResult,
    CreateFleetResult,
    CreateFlowLogsResult,
    CreateFpgaImageResult,
    CreateImageResult,
    CreateInstanceEventWindowResult,
    CreateInstanceExportTaskResult,
    CreateInternetGatewayResult,
    CreateIpamResult,
    CreateIpamPoolResult,
    CreateIpamScopeResult,
    KeyPair,
    CreateLaunchTemplateResult,
    CreateLaunchTemplateVersionResult,
    CreateLocalGatewayRouteResult,
    CreateLocalGatewayRouteTableVpcAssociationResult,
    CreateManagedPrefixListResult,
    CreateNatGatewayResult,
    CreateNetworkAclResult,
    CreateNetworkInsightsAccessScopeResult,
    CreateNetworkInsightsPathResult,
    CreateNetworkInterfaceResult,
    CreateNetworkInterfacePermissionResult,
    CreatePlacementGroupResult,
    CreatePublicIpv4PoolResult,
    CreateReplaceRootVolumeTaskResult,
    CreateReservedInstancesListingResult,
    CreateRestoreImageTaskResult,
    CreateRouteResult,
    CreateRouteTableResult,
    CreateSecurityGroupResult,
    Snapshot,
    CreateSnapshotsResult,
    CreateSpotDatafeedSubscriptionResult,
    CreateStoreImageTaskResult,
    CreateSubnetResult,
    CreateSubnetCidrReservationResult,
    CreateTrafficMirrorFilterResult,
    CreateTrafficMirrorFilterRuleResult,
    CreateTrafficMirrorSessionResult,
    CreateTrafficMirrorTargetResult,
    CreateTransitGatewayResult,
    CreateTransitGatewayConnectResult,
    CreateTransitGatewayConnectPeerResult,
    CreateTransitGatewayMulticastDomainResult,
    CreateTransitGatewayPeeringAttachmentResult,
    CreateTransitGatewayPrefixListReferenceResult,
    CreateTransitGatewayRouteResult,
    CreateTransitGatewayRouteTableResult,
    CreateTransitGatewayVpcAttachmentResult,
    Volume,
    CreateVpcResult,
    CreateVpcEndpointResult,
    CreateVpcEndpointConnectionNotificationResult,
    CreateVpcEndpointServiceConfigurationResult,
    CreateVpcPeeringConnectionResult,
    CreateVpnConnectionResult,
    CreateVpnGatewayResult,
    DeleteCarrierGatewayResult,
    DeleteClientVpnEndpointResult,
    DeleteClientVpnRouteResult,
    DeleteEgressOnlyInternetGatewayResult,
    DeleteFleetsResult,
    DeleteFlowLogsResult,
    DeleteFpgaImageResult,
    DeleteInstanceEventWindowResult,
    DeleteIpamResult,
    DeleteIpamPoolResult,
    DeleteIpamScopeResult,
    DeleteLaunchTemplateResult,
    DeleteLaunchTemplateVersionsResult,
    DeleteLocalGatewayRouteResult,
    DeleteLocalGatewayRouteTableVpcAssociationResult,
    DeleteManagedPrefixListResult,
    DeleteNatGatewayResult,
    DeleteNetworkInsightsAccessScopeResult,
    DeleteNetworkInsightsAccessScopeAnalysisResult,
    DeleteNetworkInsightsAnalysisResult,
    DeleteNetworkInsightsPathResult,
    DeleteNetworkInterfacePermissionResult,
    DeletePublicIpv4PoolResult,
    DeleteQueuedReservedInstancesResult,
    DeleteSubnetCidrReservationResult,
    DeleteTrafficMirrorFilterResult,
    DeleteTrafficMirrorFilterRuleResult,
    DeleteTrafficMirrorSessionResult,
    DeleteTrafficMirrorTargetResult,
    DeleteTransitGatewayResult,
    DeleteTransitGatewayConnectResult,
    DeleteTransitGatewayConnectPeerResult,
    DeleteTransitGatewayMulticastDomainResult,
    DeleteTransitGatewayPeeringAttachmentResult,
    DeleteTransitGatewayPrefixListReferenceResult,
    DeleteTransitGatewayRouteResult,
    DeleteTransitGatewayRouteTableResult,
    DeleteTransitGatewayVpcAttachmentResult,
    DeleteVpcEndpointConnectionNotificationsResult,
    DeleteVpcEndpointServiceConfigurationsResult,
    DeleteVpcEndpointsResult,
    DeleteVpcPeeringConnectionResult,
    DeprovisionByoipCidrResult,
    DeprovisionIpamPoolCidrResult,
    DeprovisionPublicIpv4PoolCidrResult,
    DeregisterInstanceEventNotificationAttributesResult,
    DeregisterTransitGatewayMulticastGroupMembersResult,
    DeregisterTransitGatewayMulticastGroupSourcesResult,
    DescribeAccountAttributesResult,
    DescribeAddressesResult,
    DescribeAddressesAttributeResult,
    DescribeAggregateIdFormatResult,
    DescribeAvailabilityZonesResult,
    DescribeBundleTasksResult,
    DescribeByoipCidrsResult,
    DescribeCapacityReservationFleetsResult,
    DescribeCapacityReservationsResult,
    DescribeCarrierGatewaysResult,
    DescribeClassicLinkInstancesResult,
    DescribeClientVpnAuthorizationRulesResult,
    DescribeClientVpnConnectionsResult,
    DescribeClientVpnEndpointsResult,
    DescribeClientVpnRoutesResult,
    DescribeClientVpnTargetNetworksResult,
    DescribeCoipPoolsResult,
    DescribeConversionTasksResult,
    DescribeCustomerGatewaysResult,
    DescribeDhcpOptionsResult,
    DescribeEgressOnlyInternetGatewaysResult,
    DescribeElasticGpusResult,
    DescribeExportImageTasksResult,
    DescribeExportTasksResult,
    DescribeFastLaunchImagesResult,
    DescribeFastSnapshotRestoresResult,
    DescribeFleetHistoryResult,
    DescribeFleetInstancesResult,
    DescribeFleetsResult,
    DescribeFlowLogsResult,
    DescribeFpgaImageAttributeResult,
    DescribeFpgaImagesResult,
    DescribeHostReservationOfferingsResult,
    DescribeHostReservationsResult,
    DescribeHostsResult,
    DescribeIamInstanceProfileAssociationsResult,
    DescribeIdFormatResult,
    DescribeIdentityIdFormatResult,
    ImageAttribute,
    DescribeImagesResult,
    DescribeImportImageTasksResult,
    DescribeImportSnapshotTasksResult,
    InstanceAttribute,
    DescribeInstanceCreditSpecificationsResult,
    DescribeInstanceEventNotificationAttributesResult,
    DescribeInstanceEventWindowsResult,
    DescribeInstanceStatusResult,
    DescribeInstanceTypeOfferingsResult,
    DescribeInstanceTypesResult,
    DescribeInstancesResult,
    DescribeInternetGatewaysResult,
    DescribeIpamPoolsResult,
    DescribeIpamScopesResult,
    DescribeIpamsResult,
    DescribeIpv6PoolsResult,
    DescribeKeyPairsResult,
    DescribeLaunchTemplateVersionsResult,
    DescribeLaunchTemplatesResult,
    DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult,
    DescribeLocalGatewayRouteTableVpcAssociationsResult,
    DescribeLocalGatewayRouteTablesResult,
    DescribeLocalGatewayVirtualInterfaceGroupsResult,
    DescribeLocalGatewayVirtualInterfacesResult,
    DescribeLocalGatewaysResult,
    DescribeManagedPrefixListsResult,
    DescribeMovingAddressesResult,
    DescribeNatGatewaysResult,
    DescribeNetworkAclsResult,
    DescribeNetworkInsightsAccessScopeAnalysesResult,
    DescribeNetworkInsightsAccessScopesResult,
    DescribeNetworkInsightsAnalysesResult,
    DescribeNetworkInsightsPathsResult,
    DescribeNetworkInterfaceAttributeResult,
    DescribeNetworkInterfacePermissionsResult,
    DescribeNetworkInterfacesResult,
    DescribePlacementGroupsResult,
    DescribePrefixListsResult,
    DescribePrincipalIdFormatResult,
    DescribePublicIpv4PoolsResult,
    DescribeRegionsResult,
    DescribeReplaceRootVolumeTasksResult,
    DescribeReservedInstancesResult,
    DescribeReservedInstancesListingsResult,
    DescribeReservedInstancesModificationsResult,
    DescribeReservedInstancesOfferingsResult,
    DescribeRouteTablesResult,
    DescribeScheduledInstanceAvailabilityResult,
    DescribeScheduledInstancesResult,
    DescribeSecurityGroupReferencesResult,
    DescribeSecurityGroupRulesResult,
    DescribeSecurityGroupsResult,
    DescribeSnapshotAttributeResult,
    DescribeSnapshotTierStatusResult,
    DescribeSnapshotsResult,
    DescribeSpotDatafeedSubscriptionResult,
    DescribeSpotFleetInstancesResponse,
    DescribeSpotFleetRequestHistoryResponse,
    DescribeSpotFleetRequestsResponse,
    DescribeSpotInstanceRequestsResult,
    DescribeSpotPriceHistoryResult,
    DescribeStaleSecurityGroupsResult,
    DescribeStoreImageTasksResult,
    DescribeSubnetsResult,
    DescribeTagsResult,
    DescribeTrafficMirrorFiltersResult,
    DescribeTrafficMirrorSessionsResult,
    DescribeTrafficMirrorTargetsResult,
    DescribeTransitGatewayAttachmentsResult,
    DescribeTransitGatewayConnectPeersResult,
    DescribeTransitGatewayConnectsResult,
    DescribeTransitGatewayMulticastDomainsResult,
    DescribeTransitGatewayPeeringAttachmentsResult,
    DescribeTransitGatewayRouteTablesResult,
    DescribeTransitGatewayVpcAttachmentsResult,
    DescribeTransitGatewaysResult,
    DescribeTrunkInterfaceAssociationsResult,
    DescribeVolumeAttributeResult,
    DescribeVolumeStatusResult,
    DescribeVolumesResult,
    DescribeVolumesModificationsResult,
    DescribeVpcAttributeResult,
    DescribeVpcClassicLinkResult,
    DescribeVpcClassicLinkDnsSupportResult,
    DescribeVpcEndpointConnectionNotificationsResult,
    DescribeVpcEndpointConnectionsResult,
    DescribeVpcEndpointServiceConfigurationsResult,
    DescribeVpcEndpointServicePermissionsResult,
    DescribeVpcEndpointServicesResult,
    DescribeVpcEndpointsResult,
    DescribeVpcPeeringConnectionsResult,
    DescribeVpcsResult,
    DescribeVpnConnectionsResult,
    DescribeVpnGatewaysResult,
    DetachClassicLinkVpcResult,
    DisableEbsEncryptionByDefaultResult,
    DisableFastLaunchResult,
    DisableFastSnapshotRestoresResult,
    DisableImageDeprecationResult,
    DisableIpamOrganizationAdminAccountResult,
    DisableSerialConsoleAccessResult,
    DisableTransitGatewayRouteTablePropagationResult,
    DisableVpcClassicLinkResult,
    DisableVpcClassicLinkDnsSupportResult,
    DisassociateClientVpnTargetNetworkResult,
    DisassociateEnclaveCertificateIamRoleResult,
    DisassociateIamInstanceProfileResult,
    DisassociateInstanceEventWindowResult,
    DisassociateSubnetCidrBlockResult,
    DisassociateTransitGatewayMulticastDomainResult,
    DisassociateTransitGatewayRouteTableResult,
    DisassociateTrunkInterfaceResult,
    DisassociateVpcCidrBlockResult,
    EnableEbsEncryptionByDefaultResult,
    EnableFastLaunchResult,
    EnableFastSnapshotRestoresResult,
    EnableImageDeprecationResult,
    EnableIpamOrganizationAdminAccountResult,
    EnableSerialConsoleAccessResult,
    EnableTransitGatewayRouteTablePropagationResult,
    EnableVpcClassicLinkResult,
    EnableVpcClassicLinkDnsSupportResult,
    ExportClientVpnClientCertificateRevocationListResult,
    ExportClientVpnClientConfigurationResult,
    ExportImageResult,
    ExportTransitGatewayRoutesResult,
    GetAssociatedEnclaveCertificateIamRolesResult,
    GetAssociatedIpv6PoolCidrsResult,
    GetCapacityReservationUsageResult,
    GetCoipPoolUsageResult,
    GetConsoleOutputResult,
    GetConsoleScreenshotResult,
    GetDefaultCreditSpecificationResult,
    GetEbsDefaultKmsKeyIdResult,
    GetEbsEncryptionByDefaultResult,
    GetFlowLogsIntegrationTemplateResult,
    GetGroupsForCapacityReservationResult,
    GetHostReservationPurchasePreviewResult,
    GetInstanceTypesFromInstanceRequirementsResult,
    GetIpamAddressHistoryResult,
    GetIpamPoolAllocationsResult,
    GetIpamPoolCidrsResult,
    GetIpamResourceCidrsResult,
    GetLaunchTemplateDataResult,
    GetManagedPrefixListAssociationsResult,
    GetManagedPrefixListEntriesResult,
    GetNetworkInsightsAccessScopeAnalysisFindingsResult,
    GetNetworkInsightsAccessScopeContentResult,
    GetPasswordDataResult,
    GetReservedInstancesExchangeQuoteResult,
    GetSerialConsoleAccessStatusResult,
    GetSpotPlacementScoresResult,
    GetSubnetCidrReservationsResult,
    GetTransitGatewayAttachmentPropagationsResult,
    GetTransitGatewayMulticastDomainAssociationsResult,
    GetTransitGatewayPrefixListReferencesResult,
    GetTransitGatewayRouteTableAssociationsResult,
    GetTransitGatewayRouteTablePropagationsResult,
    GetVpnConnectionDeviceSampleConfigurationResult,
    GetVpnConnectionDeviceTypesResult,
    ImportClientVpnClientCertificateRevocationListResult,
    ImportImageResult,
    ImportInstanceResult,
    ImportKeyPairResult,
    ImportSnapshotResult,
    ImportVolumeResult,
    ListImagesInRecycleBinResult,
    ListSnapshotsInRecycleBinResult,
    ModifyAddressAttributeResult,
    ModifyAvailabilityZoneGroupResult,
    ModifyCapacityReservationResult,
    ModifyCapacityReservationFleetResult,
    ModifyClientVpnEndpointResult,
    ModifyDefaultCreditSpecificationResult,
    ModifyEbsDefaultKmsKeyIdResult,
    ModifyFleetResult,
    ModifyFpgaImageAttributeResult,
    ModifyHostsResult,
    ModifyInstanceCapacityReservationAttributesResult,
    ModifyInstanceCreditSpecificationResult,
    ModifyInstanceEventStartTimeResult,
    ModifyInstanceEventWindowResult,
    ModifyInstanceMetadataOptionsResult,
    ModifyInstancePlacementResult,
    ModifyIpamResult,
    ModifyIpamPoolResult,
    ModifyIpamResourceCidrResult,
    ModifyIpamScopeResult,
    ModifyLaunchTemplateResult,
    ModifyManagedPrefixListResult,
    ModifyPrivateDnsNameOptionsResult,
    ModifyReservedInstancesResult,
    ModifySecurityGroupRulesResult,
    ModifySnapshotTierResult,
    ModifySpotFleetRequestResponse,
    ModifyTrafficMirrorFilterNetworkServicesResult,
    ModifyTrafficMirrorFilterRuleResult,
    ModifyTrafficMirrorSessionResult,
    ModifyTransitGatewayResult,
    ModifyTransitGatewayPrefixListReferenceResult,
    ModifyTransitGatewayVpcAttachmentResult,
    ModifyVolumeResult,
    ModifyVpcEndpointResult,
    ModifyVpcEndpointConnectionNotificationResult,
    ModifyVpcEndpointServiceConfigurationResult,
    ModifyVpcEndpointServicePayerResponsibilityResult,
    ModifyVpcEndpointServicePermissionsResult,
    ModifyVpcPeeringConnectionOptionsResult,
    ModifyVpcTenancyResult,
    ModifyVpnConnectionResult,
    ModifyVpnConnectionOptionsResult,
    ModifyVpnTunnelCertificateResult,
    ModifyVpnTunnelOptionsResult,
    MonitorInstancesResult,
    MoveAddressToVpcResult,
    MoveByoipCidrToIpamResult,
    ProvisionByoipCidrResult,
    ProvisionIpamPoolCidrResult,
    ProvisionPublicIpv4PoolCidrResult,
    PurchaseHostReservationResult,
    PurchaseReservedInstancesOfferingResult,
    PurchaseScheduledInstancesResult,
    RegisterImageResult,
    RegisterInstanceEventNotificationAttributesResult,
    RegisterTransitGatewayMulticastGroupMembersResult,
    RegisterTransitGatewayMulticastGroupSourcesResult,
    RejectTransitGatewayMulticastDomainAssociationsResult,
    RejectTransitGatewayPeeringAttachmentResult,
    RejectTransitGatewayVpcAttachmentResult,
    RejectVpcEndpointConnectionsResult,
    RejectVpcPeeringConnectionResult,
    ReleaseHostsResult,
    ReleaseIpamPoolAllocationResult,
    ReplaceIamInstanceProfileAssociationResult,
    ReplaceNetworkAclAssociationResult,
    ReplaceRouteTableAssociationResult,
    ReplaceTransitGatewayRouteResult,
    RequestSpotFleetResponse,
    RequestSpotInstancesResult,
    ResetAddressAttributeResult,
    ResetEbsDefaultKmsKeyIdResult,
    ResetFpgaImageAttributeResult,
    RestoreAddressToClassicResult,
    RestoreImageFromRecycleBinResult,
    RestoreManagedPrefixListVersionResult,
    RestoreSnapshotFromRecycleBinResult,
    RestoreSnapshotTierResult,
    RevokeClientVpnIngressResult,
    RevokeSecurityGroupEgressResult,
    RevokeSecurityGroupIngressResult,
    Reservation,
    RunScheduledInstancesResult,
    SearchLocalGatewayRoutesResult,
    SearchTransitGatewayMulticastGroupsResult,
    SearchTransitGatewayRoutesResult,
    StartInstancesResult,
    StartNetworkInsightsAccessScopeAnalysisResult,
    StartNetworkInsightsAnalysisResult,
    StartVpcEndpointServicePrivateDnsVerificationResult,
    StopInstancesResult,
    TerminateClientVpnConnectionsResult,
    TerminateInstancesResult,
    UnassignIpv6AddressesResult,
    UnmonitorInstancesResult,
    UpdateSecurityGroupRuleDescriptionsEgressResult,
    UpdateSecurityGroupRuleDescriptionsIngressResult,
    WithdrawByoipCidrResult
} from "aws-sdk/clients/ec2";
const schema = require("../apis/ec2-2016-11-15.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ec2.LaunchTemplate {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.ec2.LaunchTemplate>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.EC2()
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

    invokeAcceptReservedInstancesExchangeQuote(partialParams: ToOptional<{
      [K in keyof AcceptReservedInstancesExchangeQuoteRequest]: (AcceptReservedInstancesExchangeQuoteRequest)[K]
    }>): Request<AcceptReservedInstancesExchangeQuoteResult, AWSError> {
        this.boot();
        return this.client.acceptReservedInstancesExchangeQuote(
          this.ops["AcceptReservedInstancesExchangeQuote"].apply(partialParams)
        );
    }

    invokeAcceptTransitGatewayMulticastDomainAssociations(partialParams: ToOptional<{
      [K in keyof AcceptTransitGatewayMulticastDomainAssociationsRequest]: (AcceptTransitGatewayMulticastDomainAssociationsRequest)[K]
    }>): Request<AcceptTransitGatewayMulticastDomainAssociationsResult, AWSError> {
        this.boot();
        return this.client.acceptTransitGatewayMulticastDomainAssociations(
          this.ops["AcceptTransitGatewayMulticastDomainAssociations"].apply(partialParams)
        );
    }

    invokeAcceptTransitGatewayPeeringAttachment(partialParams: ToOptional<{
      [K in keyof AcceptTransitGatewayPeeringAttachmentRequest]: (AcceptTransitGatewayPeeringAttachmentRequest)[K]
    }>): Request<AcceptTransitGatewayPeeringAttachmentResult, AWSError> {
        this.boot();
        return this.client.acceptTransitGatewayPeeringAttachment(
          this.ops["AcceptTransitGatewayPeeringAttachment"].apply(partialParams)
        );
    }

    invokeAcceptTransitGatewayVpcAttachment(partialParams: ToOptional<{
      [K in keyof AcceptTransitGatewayVpcAttachmentRequest]: (AcceptTransitGatewayVpcAttachmentRequest)[K]
    }>): Request<AcceptTransitGatewayVpcAttachmentResult, AWSError> {
        this.boot();
        return this.client.acceptTransitGatewayVpcAttachment(
          this.ops["AcceptTransitGatewayVpcAttachment"].apply(partialParams)
        );
    }

    invokeAcceptVpcEndpointConnections(partialParams: ToOptional<{
      [K in keyof AcceptVpcEndpointConnectionsRequest]: (AcceptVpcEndpointConnectionsRequest)[K]
    }>): Request<AcceptVpcEndpointConnectionsResult, AWSError> {
        this.boot();
        return this.client.acceptVpcEndpointConnections(
          this.ops["AcceptVpcEndpointConnections"].apply(partialParams)
        );
    }

    invokeAcceptVpcPeeringConnection(partialParams: ToOptional<{
      [K in keyof AcceptVpcPeeringConnectionRequest]: (AcceptVpcPeeringConnectionRequest)[K]
    }>): Request<AcceptVpcPeeringConnectionResult, AWSError> {
        this.boot();
        return this.client.acceptVpcPeeringConnection(
          this.ops["AcceptVpcPeeringConnection"].apply(partialParams)
        );
    }

    invokeAdvertiseByoipCidr(partialParams: ToOptional<{
      [K in keyof AdvertiseByoipCidrRequest]: (AdvertiseByoipCidrRequest)[K]
    }>): Request<AdvertiseByoipCidrResult, AWSError> {
        this.boot();
        return this.client.advertiseByoipCidr(
          this.ops["AdvertiseByoipCidr"].apply(partialParams)
        );
    }

    invokeAllocateAddress(partialParams: ToOptional<{
      [K in keyof AllocateAddressRequest]: (AllocateAddressRequest)[K]
    }>): Request<AllocateAddressResult, AWSError> {
        this.boot();
        return this.client.allocateAddress(
          this.ops["AllocateAddress"].apply(partialParams)
        );
    }

    invokeAllocateHosts(partialParams: ToOptional<{
      [K in keyof AllocateHostsRequest]: (AllocateHostsRequest)[K]
    }>): Request<AllocateHostsResult, AWSError> {
        this.boot();
        return this.client.allocateHosts(
          this.ops["AllocateHosts"].apply(partialParams)
        );
    }

    invokeAllocateIpamPoolCidr(partialParams: ToOptional<{
      [K in keyof AllocateIpamPoolCidrRequest]: (AllocateIpamPoolCidrRequest)[K]
    }>): Request<AllocateIpamPoolCidrResult, AWSError> {
        this.boot();
        return this.client.allocateIpamPoolCidr(
          this.ops["AllocateIpamPoolCidr"].apply(partialParams)
        );
    }

    invokeApplySecurityGroupsToClientVpnTargetNetwork(partialParams: ToOptional<{
      [K in keyof ApplySecurityGroupsToClientVpnTargetNetworkRequest]: (ApplySecurityGroupsToClientVpnTargetNetworkRequest)[K]
    }>): Request<ApplySecurityGroupsToClientVpnTargetNetworkResult, AWSError> {
        this.boot();
        return this.client.applySecurityGroupsToClientVpnTargetNetwork(
          this.ops["ApplySecurityGroupsToClientVpnTargetNetwork"].apply(partialParams)
        );
    }

    invokeAssignIpv6Addresses(partialParams: ToOptional<{
      [K in keyof AssignIpv6AddressesRequest]: (AssignIpv6AddressesRequest)[K]
    }>): Request<AssignIpv6AddressesResult, AWSError> {
        this.boot();
        return this.client.assignIpv6Addresses(
          this.ops["AssignIpv6Addresses"].apply(partialParams)
        );
    }

    invokeAssignPrivateIpAddresses(partialParams: ToOptional<{
      [K in keyof AssignPrivateIpAddressesRequest]: (AssignPrivateIpAddressesRequest)[K]
    }>): Request<AssignPrivateIpAddressesResult, AWSError> {
        this.boot();
        return this.client.assignPrivateIpAddresses(
          this.ops["AssignPrivateIpAddresses"].apply(partialParams)
        );
    }

    invokeAssociateAddress(partialParams: ToOptional<{
      [K in keyof AssociateAddressRequest]: (AssociateAddressRequest)[K]
    }>): Request<AssociateAddressResult, AWSError> {
        this.boot();
        return this.client.associateAddress(
          this.ops["AssociateAddress"].apply(partialParams)
        );
    }

    invokeAssociateClientVpnTargetNetwork(partialParams: ToOptional<{
      [K in keyof AssociateClientVpnTargetNetworkRequest]: (AssociateClientVpnTargetNetworkRequest)[K]
    }>): Request<AssociateClientVpnTargetNetworkResult, AWSError> {
        this.boot();
        return this.client.associateClientVpnTargetNetwork(
          this.ops["AssociateClientVpnTargetNetwork"].apply(partialParams)
        );
    }

    invokeAssociateEnclaveCertificateIamRole(partialParams: ToOptional<{
      [K in keyof AssociateEnclaveCertificateIamRoleRequest]: (AssociateEnclaveCertificateIamRoleRequest)[K]
    }>): Request<AssociateEnclaveCertificateIamRoleResult, AWSError> {
        this.boot();
        return this.client.associateEnclaveCertificateIamRole(
          this.ops["AssociateEnclaveCertificateIamRole"].apply(partialParams)
        );
    }

    invokeAssociateIamInstanceProfile(partialParams: ToOptional<{
      [K in keyof AssociateIamInstanceProfileRequest]: (AssociateIamInstanceProfileRequest)[K]
    }>): Request<AssociateIamInstanceProfileResult, AWSError> {
        this.boot();
        return this.client.associateIamInstanceProfile(
          this.ops["AssociateIamInstanceProfile"].apply(partialParams)
        );
    }

    invokeAssociateInstanceEventWindow(partialParams: ToOptional<{
      [K in keyof AssociateInstanceEventWindowRequest]: (AssociateInstanceEventWindowRequest)[K]
    }>): Request<AssociateInstanceEventWindowResult, AWSError> {
        this.boot();
        return this.client.associateInstanceEventWindow(
          this.ops["AssociateInstanceEventWindow"].apply(partialParams)
        );
    }

    invokeAssociateRouteTable(partialParams: ToOptional<{
      [K in keyof AssociateRouteTableRequest]: (AssociateRouteTableRequest)[K]
    }>): Request<AssociateRouteTableResult, AWSError> {
        this.boot();
        return this.client.associateRouteTable(
          this.ops["AssociateRouteTable"].apply(partialParams)
        );
    }

    invokeAssociateSubnetCidrBlock(partialParams: ToOptional<{
      [K in keyof AssociateSubnetCidrBlockRequest]: (AssociateSubnetCidrBlockRequest)[K]
    }>): Request<AssociateSubnetCidrBlockResult, AWSError> {
        this.boot();
        return this.client.associateSubnetCidrBlock(
          this.ops["AssociateSubnetCidrBlock"].apply(partialParams)
        );
    }

    invokeAssociateTransitGatewayMulticastDomain(partialParams: ToOptional<{
      [K in keyof AssociateTransitGatewayMulticastDomainRequest]: (AssociateTransitGatewayMulticastDomainRequest)[K]
    }>): Request<AssociateTransitGatewayMulticastDomainResult, AWSError> {
        this.boot();
        return this.client.associateTransitGatewayMulticastDomain(
          this.ops["AssociateTransitGatewayMulticastDomain"].apply(partialParams)
        );
    }

    invokeAssociateTransitGatewayRouteTable(partialParams: ToOptional<{
      [K in keyof AssociateTransitGatewayRouteTableRequest]: (AssociateTransitGatewayRouteTableRequest)[K]
    }>): Request<AssociateTransitGatewayRouteTableResult, AWSError> {
        this.boot();
        return this.client.associateTransitGatewayRouteTable(
          this.ops["AssociateTransitGatewayRouteTable"].apply(partialParams)
        );
    }

    invokeAssociateTrunkInterface(partialParams: ToOptional<{
      [K in keyof AssociateTrunkInterfaceRequest]: (AssociateTrunkInterfaceRequest)[K]
    }>): Request<AssociateTrunkInterfaceResult, AWSError> {
        this.boot();
        return this.client.associateTrunkInterface(
          this.ops["AssociateTrunkInterface"].apply(partialParams)
        );
    }

    invokeAssociateVpcCidrBlock(partialParams: ToOptional<{
      [K in keyof AssociateVpcCidrBlockRequest]: (AssociateVpcCidrBlockRequest)[K]
    }>): Request<AssociateVpcCidrBlockResult, AWSError> {
        this.boot();
        return this.client.associateVpcCidrBlock(
          this.ops["AssociateVpcCidrBlock"].apply(partialParams)
        );
    }

    invokeAttachClassicLinkVpc(partialParams: ToOptional<{
      [K in keyof AttachClassicLinkVpcRequest]: (AttachClassicLinkVpcRequest)[K]
    }>): Request<AttachClassicLinkVpcResult, AWSError> {
        this.boot();
        return this.client.attachClassicLinkVpc(
          this.ops["AttachClassicLinkVpc"].apply(partialParams)
        );
    }

    invokeAttachNetworkInterface(partialParams: ToOptional<{
      [K in keyof AttachNetworkInterfaceRequest]: (AttachNetworkInterfaceRequest)[K]
    }>): Request<AttachNetworkInterfaceResult, AWSError> {
        this.boot();
        return this.client.attachNetworkInterface(
          this.ops["AttachNetworkInterface"].apply(partialParams)
        );
    }

    invokeAttachVolume(partialParams: ToOptional<{
      [K in keyof AttachVolumeRequest]: (AttachVolumeRequest)[K]
    }>): Request<VolumeAttachment, AWSError> {
        this.boot();
        return this.client.attachVolume(
          this.ops["AttachVolume"].apply(partialParams)
        );
    }

    invokeAttachVpnGateway(partialParams: ToOptional<{
      [K in keyof AttachVpnGatewayRequest]: (AttachVpnGatewayRequest)[K]
    }>): Request<AttachVpnGatewayResult, AWSError> {
        this.boot();
        return this.client.attachVpnGateway(
          this.ops["AttachVpnGateway"].apply(partialParams)
        );
    }

    invokeAuthorizeClientVpnIngress(partialParams: ToOptional<{
      [K in keyof AuthorizeClientVpnIngressRequest]: (AuthorizeClientVpnIngressRequest)[K]
    }>): Request<AuthorizeClientVpnIngressResult, AWSError> {
        this.boot();
        return this.client.authorizeClientVpnIngress(
          this.ops["AuthorizeClientVpnIngress"].apply(partialParams)
        );
    }

    invokeAuthorizeSecurityGroupEgress(partialParams: ToOptional<{
      [K in keyof AuthorizeSecurityGroupEgressRequest]: (AuthorizeSecurityGroupEgressRequest)[K]
    }>): Request<AuthorizeSecurityGroupEgressResult, AWSError> {
        this.boot();
        return this.client.authorizeSecurityGroupEgress(
          this.ops["AuthorizeSecurityGroupEgress"].apply(partialParams)
        );
    }

    invokeAuthorizeSecurityGroupIngress(partialParams: ToOptional<{
      [K in keyof AuthorizeSecurityGroupIngressRequest]: (AuthorizeSecurityGroupIngressRequest)[K]
    }>): Request<AuthorizeSecurityGroupIngressResult, AWSError> {
        this.boot();
        return this.client.authorizeSecurityGroupIngress(
          this.ops["AuthorizeSecurityGroupIngress"].apply(partialParams)
        );
    }

    invokeBundleInstance(partialParams: ToOptional<{
      [K in keyof BundleInstanceRequest]: (BundleInstanceRequest)[K]
    }>): Request<BundleInstanceResult, AWSError> {
        this.boot();
        return this.client.bundleInstance(
          this.ops["BundleInstance"].apply(partialParams)
        );
    }

    invokeCancelBundleTask(partialParams: ToOptional<{
      [K in keyof CancelBundleTaskRequest]: (CancelBundleTaskRequest)[K]
    }>): Request<CancelBundleTaskResult, AWSError> {
        this.boot();
        return this.client.cancelBundleTask(
          this.ops["CancelBundleTask"].apply(partialParams)
        );
    }

    invokeCancelCapacityReservation(partialParams: ToOptional<{
      [K in keyof CancelCapacityReservationRequest]: (CancelCapacityReservationRequest)[K]
    }>): Request<CancelCapacityReservationResult, AWSError> {
        this.boot();
        return this.client.cancelCapacityReservation(
          this.ops["CancelCapacityReservation"].apply(partialParams)
        );
    }

    invokeCancelCapacityReservationFleets(partialParams: ToOptional<{
      [K in keyof CancelCapacityReservationFleetsRequest]: (CancelCapacityReservationFleetsRequest)[K]
    }>): Request<CancelCapacityReservationFleetsResult, AWSError> {
        this.boot();
        return this.client.cancelCapacityReservationFleets(
          this.ops["CancelCapacityReservationFleets"].apply(partialParams)
        );
    }

    invokeCancelImportTask(partialParams: ToOptional<{
      [K in keyof CancelImportTaskRequest]: (CancelImportTaskRequest)[K]
    }>): Request<CancelImportTaskResult, AWSError> {
        this.boot();
        return this.client.cancelImportTask(
          this.ops["CancelImportTask"].apply(partialParams)
        );
    }

    invokeCancelReservedInstancesListing(partialParams: ToOptional<{
      [K in keyof CancelReservedInstancesListingRequest]: (CancelReservedInstancesListingRequest)[K]
    }>): Request<CancelReservedInstancesListingResult, AWSError> {
        this.boot();
        return this.client.cancelReservedInstancesListing(
          this.ops["CancelReservedInstancesListing"].apply(partialParams)
        );
    }

    invokeCancelSpotFleetRequests(partialParams: ToOptional<{
      [K in keyof CancelSpotFleetRequestsRequest]: (CancelSpotFleetRequestsRequest)[K]
    }>): Request<CancelSpotFleetRequestsResponse, AWSError> {
        this.boot();
        return this.client.cancelSpotFleetRequests(
          this.ops["CancelSpotFleetRequests"].apply(partialParams)
        );
    }

    invokeCancelSpotInstanceRequests(partialParams: ToOptional<{
      [K in keyof CancelSpotInstanceRequestsRequest]: (CancelSpotInstanceRequestsRequest)[K]
    }>): Request<CancelSpotInstanceRequestsResult, AWSError> {
        this.boot();
        return this.client.cancelSpotInstanceRequests(
          this.ops["CancelSpotInstanceRequests"].apply(partialParams)
        );
    }

    invokeConfirmProductInstance(partialParams: ToOptional<{
      [K in keyof ConfirmProductInstanceRequest]: (ConfirmProductInstanceRequest)[K]
    }>): Request<ConfirmProductInstanceResult, AWSError> {
        this.boot();
        return this.client.confirmProductInstance(
          this.ops["ConfirmProductInstance"].apply(partialParams)
        );
    }

    invokeCopyFpgaImage(partialParams: ToOptional<{
      [K in keyof CopyFpgaImageRequest]: (CopyFpgaImageRequest)[K]
    }>): Request<CopyFpgaImageResult, AWSError> {
        this.boot();
        return this.client.copyFpgaImage(
          this.ops["CopyFpgaImage"].apply(partialParams)
        );
    }

    invokeCopyImage(partialParams: ToOptional<{
      [K in keyof CopyImageRequest & keyof Omit<CopyImageRequest, "Name">]: (CopyImageRequest)[K]
    }>): Request<CopyImageResult, AWSError> {
        this.boot();
        return this.client.copyImage(
          this.ops["CopyImage"].apply(partialParams)
        );
    }

    invokeCopySnapshot(partialParams: ToOptional<{
      [K in keyof CopySnapshotRequest]: (CopySnapshotRequest)[K]
    }>): Request<CopySnapshotResult, AWSError> {
        this.boot();
        return this.client.copySnapshot(
          this.ops["CopySnapshot"].apply(partialParams)
        );
    }

    invokeCreateCapacityReservation(partialParams: ToOptional<{
      [K in keyof CreateCapacityReservationRequest & keyof Omit<CreateCapacityReservationRequest, "InstanceType">]: (CreateCapacityReservationRequest)[K]
    }>): Request<CreateCapacityReservationResult, AWSError> {
        this.boot();
        return this.client.createCapacityReservation(
          this.ops["CreateCapacityReservation"].apply(partialParams)
        );
    }

    invokeCreateCapacityReservationFleet(partialParams: ToOptional<{
      [K in keyof CreateCapacityReservationFleetRequest]: (CreateCapacityReservationFleetRequest)[K]
    }>): Request<CreateCapacityReservationFleetResult, AWSError> {
        this.boot();
        return this.client.createCapacityReservationFleet(
          this.ops["CreateCapacityReservationFleet"].apply(partialParams)
        );
    }

    invokeCreateCarrierGateway(partialParams: ToOptional<{
      [K in keyof CreateCarrierGatewayRequest]: (CreateCarrierGatewayRequest)[K]
    }>): Request<CreateCarrierGatewayResult, AWSError> {
        this.boot();
        return this.client.createCarrierGateway(
          this.ops["CreateCarrierGateway"].apply(partialParams)
        );
    }

    invokeCreateClientVpnEndpoint(partialParams: ToOptional<{
      [K in keyof CreateClientVpnEndpointRequest]: (CreateClientVpnEndpointRequest)[K]
    }>): Request<CreateClientVpnEndpointResult, AWSError> {
        this.boot();
        return this.client.createClientVpnEndpoint(
          this.ops["CreateClientVpnEndpoint"].apply(partialParams)
        );
    }

    invokeCreateClientVpnRoute(partialParams: ToOptional<{
      [K in keyof CreateClientVpnRouteRequest]: (CreateClientVpnRouteRequest)[K]
    }>): Request<CreateClientVpnRouteResult, AWSError> {
        this.boot();
        return this.client.createClientVpnRoute(
          this.ops["CreateClientVpnRoute"].apply(partialParams)
        );
    }

    invokeCreateCustomerGateway(partialParams: ToOptional<{
      [K in keyof CreateCustomerGatewayRequest]: (CreateCustomerGatewayRequest)[K]
    }>): Request<CreateCustomerGatewayResult, AWSError> {
        this.boot();
        return this.client.createCustomerGateway(
          this.ops["CreateCustomerGateway"].apply(partialParams)
        );
    }

    invokeCreateDefaultSubnet(partialParams: ToOptional<{
      [K in keyof CreateDefaultSubnetRequest]: (CreateDefaultSubnetRequest)[K]
    }>): Request<CreateDefaultSubnetResult, AWSError> {
        this.boot();
        return this.client.createDefaultSubnet(
          this.ops["CreateDefaultSubnet"].apply(partialParams)
        );
    }

    invokeCreateDefaultVpc(partialParams: ToOptional<{
      [K in keyof CreateDefaultVpcRequest]: (CreateDefaultVpcRequest)[K]
    }>): Request<CreateDefaultVpcResult, AWSError> {
        this.boot();
        return this.client.createDefaultVpc(
          this.ops["CreateDefaultVpc"].apply(partialParams)
        );
    }

    invokeCreateDhcpOptions(partialParams: ToOptional<{
      [K in keyof CreateDhcpOptionsRequest]: (CreateDhcpOptionsRequest)[K]
    }>): Request<CreateDhcpOptionsResult, AWSError> {
        this.boot();
        return this.client.createDhcpOptions(
          this.ops["CreateDhcpOptions"].apply(partialParams)
        );
    }

    invokeCreateEgressOnlyInternetGateway(partialParams: ToOptional<{
      [K in keyof CreateEgressOnlyInternetGatewayRequest]: (CreateEgressOnlyInternetGatewayRequest)[K]
    }>): Request<CreateEgressOnlyInternetGatewayResult, AWSError> {
        this.boot();
        return this.client.createEgressOnlyInternetGateway(
          this.ops["CreateEgressOnlyInternetGateway"].apply(partialParams)
        );
    }

    invokeCreateFleet(partialParams: ToOptional<{
      [K in keyof CreateFleetRequest]: (CreateFleetRequest)[K]
    }>): Request<CreateFleetResult, AWSError> {
        this.boot();
        return this.client.createFleet(
          this.ops["CreateFleet"].apply(partialParams)
        );
    }

    invokeCreateFlowLogs(partialParams: ToOptional<{
      [K in keyof CreateFlowLogsRequest]: (CreateFlowLogsRequest)[K]
    }>): Request<CreateFlowLogsResult, AWSError> {
        this.boot();
        return this.client.createFlowLogs(
          this.ops["CreateFlowLogs"].apply(partialParams)
        );
    }

    invokeCreateFpgaImage(partialParams: ToOptional<{
      [K in keyof CreateFpgaImageRequest]: (CreateFpgaImageRequest)[K]
    }>): Request<CreateFpgaImageResult, AWSError> {
        this.boot();
        return this.client.createFpgaImage(
          this.ops["CreateFpgaImage"].apply(partialParams)
        );
    }

    invokeCreateImage(partialParams: ToOptional<{
      [K in keyof CreateImageRequest & keyof Omit<CreateImageRequest, "Name">]: (CreateImageRequest)[K]
    }>): Request<CreateImageResult, AWSError> {
        this.boot();
        return this.client.createImage(
          this.ops["CreateImage"].apply(partialParams)
        );
    }

    invokeCreateInstanceEventWindow(partialParams: ToOptional<{
      [K in keyof CreateInstanceEventWindowRequest]: (CreateInstanceEventWindowRequest)[K]
    }>): Request<CreateInstanceEventWindowResult, AWSError> {
        this.boot();
        return this.client.createInstanceEventWindow(
          this.ops["CreateInstanceEventWindow"].apply(partialParams)
        );
    }

    invokeCreateInstanceExportTask(partialParams: ToOptional<{
      [K in keyof CreateInstanceExportTaskRequest]: (CreateInstanceExportTaskRequest)[K]
    }>): Request<CreateInstanceExportTaskResult, AWSError> {
        this.boot();
        return this.client.createInstanceExportTask(
          this.ops["CreateInstanceExportTask"].apply(partialParams)
        );
    }

    invokeCreateInternetGateway(partialParams: ToOptional<{
      [K in keyof CreateInternetGatewayRequest]: (CreateInternetGatewayRequest)[K]
    }>): Request<CreateInternetGatewayResult, AWSError> {
        this.boot();
        return this.client.createInternetGateway(
          this.ops["CreateInternetGateway"].apply(partialParams)
        );
    }

    invokeCreateIpam(partialParams: ToOptional<{
      [K in keyof CreateIpamRequest]: (CreateIpamRequest)[K]
    }>): Request<CreateIpamResult, AWSError> {
        this.boot();
        return this.client.createIpam(
          this.ops["CreateIpam"].apply(partialParams)
        );
    }

    invokeCreateIpamPool(partialParams: ToOptional<{
      [K in keyof CreateIpamPoolRequest]: (CreateIpamPoolRequest)[K]
    }>): Request<CreateIpamPoolResult, AWSError> {
        this.boot();
        return this.client.createIpamPool(
          this.ops["CreateIpamPool"].apply(partialParams)
        );
    }

    invokeCreateIpamScope(partialParams: ToOptional<{
      [K in keyof CreateIpamScopeRequest]: (CreateIpamScopeRequest)[K]
    }>): Request<CreateIpamScopeResult, AWSError> {
        this.boot();
        return this.client.createIpamScope(
          this.ops["CreateIpamScope"].apply(partialParams)
        );
    }

    invokeCreateKeyPair(partialParams: ToOptional<{
      [K in keyof CreateKeyPairRequest & keyof Omit<CreateKeyPairRequest, "KeyName">]: (CreateKeyPairRequest)[K]
    }>): Request<KeyPair, AWSError> {
        this.boot();
        return this.client.createKeyPair(
          this.ops["CreateKeyPair"].apply(partialParams)
        );
    }

    invokeCreateLaunchTemplate(partialParams: ToOptional<{
      [K in keyof CreateLaunchTemplateRequest & keyof Omit<CreateLaunchTemplateRequest, "LaunchTemplateName">]: (CreateLaunchTemplateRequest)[K]
    }>): Request<CreateLaunchTemplateResult, AWSError> {
        this.boot();
        return this.client.createLaunchTemplate(
          this.ops["CreateLaunchTemplate"].apply(partialParams)
        );
    }

    invokeCreateLaunchTemplateVersion(partialParams: ToOptional<{
      [K in keyof CreateLaunchTemplateVersionRequest]: (CreateLaunchTemplateVersionRequest)[K]
    }>): Request<CreateLaunchTemplateVersionResult, AWSError> {
        this.boot();
        return this.client.createLaunchTemplateVersion(
          this.ops["CreateLaunchTemplateVersion"].apply(partialParams)
        );
    }

    invokeCreateLocalGatewayRoute(partialParams: ToOptional<{
      [K in keyof CreateLocalGatewayRouteRequest]: (CreateLocalGatewayRouteRequest)[K]
    }>): Request<CreateLocalGatewayRouteResult, AWSError> {
        this.boot();
        return this.client.createLocalGatewayRoute(
          this.ops["CreateLocalGatewayRoute"].apply(partialParams)
        );
    }

    invokeCreateLocalGatewayRouteTableVpcAssociation(partialParams: ToOptional<{
      [K in keyof CreateLocalGatewayRouteTableVpcAssociationRequest]: (CreateLocalGatewayRouteTableVpcAssociationRequest)[K]
    }>): Request<CreateLocalGatewayRouteTableVpcAssociationResult, AWSError> {
        this.boot();
        return this.client.createLocalGatewayRouteTableVpcAssociation(
          this.ops["CreateLocalGatewayRouteTableVpcAssociation"].apply(partialParams)
        );
    }

    invokeCreateManagedPrefixList(partialParams: ToOptional<{
      [K in keyof CreateManagedPrefixListRequest]: (CreateManagedPrefixListRequest)[K]
    }>): Request<CreateManagedPrefixListResult, AWSError> {
        this.boot();
        return this.client.createManagedPrefixList(
          this.ops["CreateManagedPrefixList"].apply(partialParams)
        );
    }

    invokeCreateNatGateway(partialParams: ToOptional<{
      [K in keyof CreateNatGatewayRequest]: (CreateNatGatewayRequest)[K]
    }>): Request<CreateNatGatewayResult, AWSError> {
        this.boot();
        return this.client.createNatGateway(
          this.ops["CreateNatGateway"].apply(partialParams)
        );
    }

    invokeCreateNetworkAcl(partialParams: ToOptional<{
      [K in keyof CreateNetworkAclRequest]: (CreateNetworkAclRequest)[K]
    }>): Request<CreateNetworkAclResult, AWSError> {
        this.boot();
        return this.client.createNetworkAcl(
          this.ops["CreateNetworkAcl"].apply(partialParams)
        );
    }

    invokeCreateNetworkInsightsAccessScope(partialParams: ToOptional<{
      [K in keyof CreateNetworkInsightsAccessScopeRequest]: (CreateNetworkInsightsAccessScopeRequest)[K]
    }>): Request<CreateNetworkInsightsAccessScopeResult, AWSError> {
        this.boot();
        return this.client.createNetworkInsightsAccessScope(
          this.ops["CreateNetworkInsightsAccessScope"].apply(partialParams)
        );
    }

    invokeCreateNetworkInsightsPath(partialParams: ToOptional<{
      [K in keyof CreateNetworkInsightsPathRequest]: (CreateNetworkInsightsPathRequest)[K]
    }>): Request<CreateNetworkInsightsPathResult, AWSError> {
        this.boot();
        return this.client.createNetworkInsightsPath(
          this.ops["CreateNetworkInsightsPath"].apply(partialParams)
        );
    }

    invokeCreateNetworkInterface(partialParams: ToOptional<{
      [K in keyof CreateNetworkInterfaceRequest]: (CreateNetworkInterfaceRequest)[K]
    }>): Request<CreateNetworkInterfaceResult, AWSError> {
        this.boot();
        return this.client.createNetworkInterface(
          this.ops["CreateNetworkInterface"].apply(partialParams)
        );
    }

    invokeCreateNetworkInterfacePermission(partialParams: ToOptional<{
      [K in keyof CreateNetworkInterfacePermissionRequest]: (CreateNetworkInterfacePermissionRequest)[K]
    }>): Request<CreateNetworkInterfacePermissionResult, AWSError> {
        this.boot();
        return this.client.createNetworkInterfacePermission(
          this.ops["CreateNetworkInterfacePermission"].apply(partialParams)
        );
    }

    invokeCreatePlacementGroup(partialParams: ToOptional<{
      [K in keyof CreatePlacementGroupRequest]: (CreatePlacementGroupRequest)[K]
    }>): Request<CreatePlacementGroupResult, AWSError> {
        this.boot();
        return this.client.createPlacementGroup(
          this.ops["CreatePlacementGroup"].apply(partialParams)
        );
    }

    invokeCreatePublicIpv4Pool(partialParams: ToOptional<{
      [K in keyof CreatePublicIpv4PoolRequest]: (CreatePublicIpv4PoolRequest)[K]
    }>): Request<CreatePublicIpv4PoolResult, AWSError> {
        this.boot();
        return this.client.createPublicIpv4Pool(
          this.ops["CreatePublicIpv4Pool"].apply(partialParams)
        );
    }

    invokeCreateReplaceRootVolumeTask(partialParams: ToOptional<{
      [K in keyof CreateReplaceRootVolumeTaskRequest]: (CreateReplaceRootVolumeTaskRequest)[K]
    }>): Request<CreateReplaceRootVolumeTaskResult, AWSError> {
        this.boot();
        return this.client.createReplaceRootVolumeTask(
          this.ops["CreateReplaceRootVolumeTask"].apply(partialParams)
        );
    }

    invokeCreateReservedInstancesListing(partialParams: ToOptional<{
      [K in keyof CreateReservedInstancesListingRequest]: (CreateReservedInstancesListingRequest)[K]
    }>): Request<CreateReservedInstancesListingResult, AWSError> {
        this.boot();
        return this.client.createReservedInstancesListing(
          this.ops["CreateReservedInstancesListing"].apply(partialParams)
        );
    }

    invokeCreateRestoreImageTask(partialParams: ToOptional<{
      [K in keyof CreateRestoreImageTaskRequest]: (CreateRestoreImageTaskRequest)[K]
    }>): Request<CreateRestoreImageTaskResult, AWSError> {
        this.boot();
        return this.client.createRestoreImageTask(
          this.ops["CreateRestoreImageTask"].apply(partialParams)
        );
    }

    invokeCreateRoute(partialParams: ToOptional<{
      [K in keyof CreateRouteRequest]: (CreateRouteRequest)[K]
    }>): Request<CreateRouteResult, AWSError> {
        this.boot();
        return this.client.createRoute(
          this.ops["CreateRoute"].apply(partialParams)
        );
    }

    invokeCreateRouteTable(partialParams: ToOptional<{
      [K in keyof CreateRouteTableRequest]: (CreateRouteTableRequest)[K]
    }>): Request<CreateRouteTableResult, AWSError> {
        this.boot();
        return this.client.createRouteTable(
          this.ops["CreateRouteTable"].apply(partialParams)
        );
    }

    invokeCreateSecurityGroup(partialParams: ToOptional<{
      [K in keyof CreateSecurityGroupRequest & keyof Omit<CreateSecurityGroupRequest, "Description">]: (CreateSecurityGroupRequest)[K]
    }>): Request<CreateSecurityGroupResult, AWSError> {
        this.boot();
        return this.client.createSecurityGroup(
          this.ops["CreateSecurityGroup"].apply(partialParams)
        );
    }

    invokeCreateSnapshot(partialParams: ToOptional<{
      [K in keyof CreateSnapshotRequest]: (CreateSnapshotRequest)[K]
    }>): Request<Snapshot, AWSError> {
        this.boot();
        return this.client.createSnapshot(
          this.ops["CreateSnapshot"].apply(partialParams)
        );
    }

    invokeCreateSnapshots(partialParams: ToOptional<{
      [K in keyof CreateSnapshotsRequest]: (CreateSnapshotsRequest)[K]
    }>): Request<CreateSnapshotsResult, AWSError> {
        this.boot();
        return this.client.createSnapshots(
          this.ops["CreateSnapshots"].apply(partialParams)
        );
    }

    invokeCreateSpotDatafeedSubscription(partialParams: ToOptional<{
      [K in keyof CreateSpotDatafeedSubscriptionRequest]: (CreateSpotDatafeedSubscriptionRequest)[K]
    }>): Request<CreateSpotDatafeedSubscriptionResult, AWSError> {
        this.boot();
        return this.client.createSpotDatafeedSubscription(
          this.ops["CreateSpotDatafeedSubscription"].apply(partialParams)
        );
    }

    invokeCreateStoreImageTask(partialParams: ToOptional<{
      [K in keyof CreateStoreImageTaskRequest & keyof Omit<CreateStoreImageTaskRequest, "ImageId">]: (CreateStoreImageTaskRequest)[K]
    }>): Request<CreateStoreImageTaskResult, AWSError> {
        this.boot();
        return this.client.createStoreImageTask(
          this.ops["CreateStoreImageTask"].apply(partialParams)
        );
    }

    invokeCreateSubnet(partialParams: ToOptional<{
      [K in keyof CreateSubnetRequest]: (CreateSubnetRequest)[K]
    }>): Request<CreateSubnetResult, AWSError> {
        this.boot();
        return this.client.createSubnet(
          this.ops["CreateSubnet"].apply(partialParams)
        );
    }

    invokeCreateSubnetCidrReservation(partialParams: ToOptional<{
      [K in keyof CreateSubnetCidrReservationRequest]: (CreateSubnetCidrReservationRequest)[K]
    }>): Request<CreateSubnetCidrReservationResult, AWSError> {
        this.boot();
        return this.client.createSubnetCidrReservation(
          this.ops["CreateSubnetCidrReservation"].apply(partialParams)
        );
    }

    invokeCreateTrafficMirrorFilter(partialParams: ToOptional<{
      [K in keyof CreateTrafficMirrorFilterRequest]: (CreateTrafficMirrorFilterRequest)[K]
    }>): Request<CreateTrafficMirrorFilterResult, AWSError> {
        this.boot();
        return this.client.createTrafficMirrorFilter(
          this.ops["CreateTrafficMirrorFilter"].apply(partialParams)
        );
    }

    invokeCreateTrafficMirrorFilterRule(partialParams: ToOptional<{
      [K in keyof CreateTrafficMirrorFilterRuleRequest]: (CreateTrafficMirrorFilterRuleRequest)[K]
    }>): Request<CreateTrafficMirrorFilterRuleResult, AWSError> {
        this.boot();
        return this.client.createTrafficMirrorFilterRule(
          this.ops["CreateTrafficMirrorFilterRule"].apply(partialParams)
        );
    }

    invokeCreateTrafficMirrorSession(partialParams: ToOptional<{
      [K in keyof CreateTrafficMirrorSessionRequest]: (CreateTrafficMirrorSessionRequest)[K]
    }>): Request<CreateTrafficMirrorSessionResult, AWSError> {
        this.boot();
        return this.client.createTrafficMirrorSession(
          this.ops["CreateTrafficMirrorSession"].apply(partialParams)
        );
    }

    invokeCreateTrafficMirrorTarget(partialParams: ToOptional<{
      [K in keyof CreateTrafficMirrorTargetRequest]: (CreateTrafficMirrorTargetRequest)[K]
    }>): Request<CreateTrafficMirrorTargetResult, AWSError> {
        this.boot();
        return this.client.createTrafficMirrorTarget(
          this.ops["CreateTrafficMirrorTarget"].apply(partialParams)
        );
    }

    invokeCreateTransitGateway(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayRequest]: (CreateTransitGatewayRequest)[K]
    }>): Request<CreateTransitGatewayResult, AWSError> {
        this.boot();
        return this.client.createTransitGateway(
          this.ops["CreateTransitGateway"].apply(partialParams)
        );
    }

    invokeCreateTransitGatewayConnect(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayConnectRequest]: (CreateTransitGatewayConnectRequest)[K]
    }>): Request<CreateTransitGatewayConnectResult, AWSError> {
        this.boot();
        return this.client.createTransitGatewayConnect(
          this.ops["CreateTransitGatewayConnect"].apply(partialParams)
        );
    }

    invokeCreateTransitGatewayConnectPeer(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayConnectPeerRequest]: (CreateTransitGatewayConnectPeerRequest)[K]
    }>): Request<CreateTransitGatewayConnectPeerResult, AWSError> {
        this.boot();
        return this.client.createTransitGatewayConnectPeer(
          this.ops["CreateTransitGatewayConnectPeer"].apply(partialParams)
        );
    }

    invokeCreateTransitGatewayMulticastDomain(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayMulticastDomainRequest]: (CreateTransitGatewayMulticastDomainRequest)[K]
    }>): Request<CreateTransitGatewayMulticastDomainResult, AWSError> {
        this.boot();
        return this.client.createTransitGatewayMulticastDomain(
          this.ops["CreateTransitGatewayMulticastDomain"].apply(partialParams)
        );
    }

    invokeCreateTransitGatewayPeeringAttachment(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayPeeringAttachmentRequest]: (CreateTransitGatewayPeeringAttachmentRequest)[K]
    }>): Request<CreateTransitGatewayPeeringAttachmentResult, AWSError> {
        this.boot();
        return this.client.createTransitGatewayPeeringAttachment(
          this.ops["CreateTransitGatewayPeeringAttachment"].apply(partialParams)
        );
    }

    invokeCreateTransitGatewayPrefixListReference(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayPrefixListReferenceRequest]: (CreateTransitGatewayPrefixListReferenceRequest)[K]
    }>): Request<CreateTransitGatewayPrefixListReferenceResult, AWSError> {
        this.boot();
        return this.client.createTransitGatewayPrefixListReference(
          this.ops["CreateTransitGatewayPrefixListReference"].apply(partialParams)
        );
    }

    invokeCreateTransitGatewayRoute(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayRouteRequest]: (CreateTransitGatewayRouteRequest)[K]
    }>): Request<CreateTransitGatewayRouteResult, AWSError> {
        this.boot();
        return this.client.createTransitGatewayRoute(
          this.ops["CreateTransitGatewayRoute"].apply(partialParams)
        );
    }

    invokeCreateTransitGatewayRouteTable(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayRouteTableRequest]: (CreateTransitGatewayRouteTableRequest)[K]
    }>): Request<CreateTransitGatewayRouteTableResult, AWSError> {
        this.boot();
        return this.client.createTransitGatewayRouteTable(
          this.ops["CreateTransitGatewayRouteTable"].apply(partialParams)
        );
    }

    invokeCreateTransitGatewayVpcAttachment(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayVpcAttachmentRequest]: (CreateTransitGatewayVpcAttachmentRequest)[K]
    }>): Request<CreateTransitGatewayVpcAttachmentResult, AWSError> {
        this.boot();
        return this.client.createTransitGatewayVpcAttachment(
          this.ops["CreateTransitGatewayVpcAttachment"].apply(partialParams)
        );
    }

    invokeCreateVolume(partialParams: ToOptional<{
      [K in keyof CreateVolumeRequest]: (CreateVolumeRequest)[K]
    }>): Request<Volume, AWSError> {
        this.boot();
        return this.client.createVolume(
          this.ops["CreateVolume"].apply(partialParams)
        );
    }

    invokeCreateVpc(partialParams: ToOptional<{
      [K in keyof CreateVpcRequest]: (CreateVpcRequest)[K]
    }>): Request<CreateVpcResult, AWSError> {
        this.boot();
        return this.client.createVpc(
          this.ops["CreateVpc"].apply(partialParams)
        );
    }

    invokeCreateVpcEndpoint(partialParams: ToOptional<{
      [K in keyof CreateVpcEndpointRequest]: (CreateVpcEndpointRequest)[K]
    }>): Request<CreateVpcEndpointResult, AWSError> {
        this.boot();
        return this.client.createVpcEndpoint(
          this.ops["CreateVpcEndpoint"].apply(partialParams)
        );
    }

    invokeCreateVpcEndpointConnectionNotification(partialParams: ToOptional<{
      [K in keyof CreateVpcEndpointConnectionNotificationRequest]: (CreateVpcEndpointConnectionNotificationRequest)[K]
    }>): Request<CreateVpcEndpointConnectionNotificationResult, AWSError> {
        this.boot();
        return this.client.createVpcEndpointConnectionNotification(
          this.ops["CreateVpcEndpointConnectionNotification"].apply(partialParams)
        );
    }

    invokeCreateVpcEndpointServiceConfiguration(partialParams: ToOptional<{
      [K in keyof CreateVpcEndpointServiceConfigurationRequest]: (CreateVpcEndpointServiceConfigurationRequest)[K]
    }>): Request<CreateVpcEndpointServiceConfigurationResult, AWSError> {
        this.boot();
        return this.client.createVpcEndpointServiceConfiguration(
          this.ops["CreateVpcEndpointServiceConfiguration"].apply(partialParams)
        );
    }

    invokeCreateVpcPeeringConnection(partialParams: ToOptional<{
      [K in keyof CreateVpcPeeringConnectionRequest]: (CreateVpcPeeringConnectionRequest)[K]
    }>): Request<CreateVpcPeeringConnectionResult, AWSError> {
        this.boot();
        return this.client.createVpcPeeringConnection(
          this.ops["CreateVpcPeeringConnection"].apply(partialParams)
        );
    }

    invokeCreateVpnConnection(partialParams: ToOptional<{
      [K in keyof CreateVpnConnectionRequest]: (CreateVpnConnectionRequest)[K]
    }>): Request<CreateVpnConnectionResult, AWSError> {
        this.boot();
        return this.client.createVpnConnection(
          this.ops["CreateVpnConnection"].apply(partialParams)
        );
    }

    invokeCreateVpnGateway(partialParams: ToOptional<{
      [K in keyof CreateVpnGatewayRequest]: (CreateVpnGatewayRequest)[K]
    }>): Request<CreateVpnGatewayResult, AWSError> {
        this.boot();
        return this.client.createVpnGateway(
          this.ops["CreateVpnGateway"].apply(partialParams)
        );
    }

    invokeDeleteCarrierGateway(partialParams: ToOptional<{
      [K in keyof DeleteCarrierGatewayRequest]: (DeleteCarrierGatewayRequest)[K]
    }>): Request<DeleteCarrierGatewayResult, AWSError> {
        this.boot();
        return this.client.deleteCarrierGateway(
          this.ops["DeleteCarrierGateway"].apply(partialParams)
        );
    }

    invokeDeleteClientVpnEndpoint(partialParams: ToOptional<{
      [K in keyof DeleteClientVpnEndpointRequest]: (DeleteClientVpnEndpointRequest)[K]
    }>): Request<DeleteClientVpnEndpointResult, AWSError> {
        this.boot();
        return this.client.deleteClientVpnEndpoint(
          this.ops["DeleteClientVpnEndpoint"].apply(partialParams)
        );
    }

    invokeDeleteClientVpnRoute(partialParams: ToOptional<{
      [K in keyof DeleteClientVpnRouteRequest]: (DeleteClientVpnRouteRequest)[K]
    }>): Request<DeleteClientVpnRouteResult, AWSError> {
        this.boot();
        return this.client.deleteClientVpnRoute(
          this.ops["DeleteClientVpnRoute"].apply(partialParams)
        );
    }

    invokeDeleteEgressOnlyInternetGateway(partialParams: ToOptional<{
      [K in keyof DeleteEgressOnlyInternetGatewayRequest]: (DeleteEgressOnlyInternetGatewayRequest)[K]
    }>): Request<DeleteEgressOnlyInternetGatewayResult, AWSError> {
        this.boot();
        return this.client.deleteEgressOnlyInternetGateway(
          this.ops["DeleteEgressOnlyInternetGateway"].apply(partialParams)
        );
    }

    invokeDeleteFleets(partialParams: ToOptional<{
      [K in keyof DeleteFleetsRequest]: (DeleteFleetsRequest)[K]
    }>): Request<DeleteFleetsResult, AWSError> {
        this.boot();
        return this.client.deleteFleets(
          this.ops["DeleteFleets"].apply(partialParams)
        );
    }

    invokeDeleteFlowLogs(partialParams: ToOptional<{
      [K in keyof DeleteFlowLogsRequest]: (DeleteFlowLogsRequest)[K]
    }>): Request<DeleteFlowLogsResult, AWSError> {
        this.boot();
        return this.client.deleteFlowLogs(
          this.ops["DeleteFlowLogs"].apply(partialParams)
        );
    }

    invokeDeleteFpgaImage(partialParams: ToOptional<{
      [K in keyof DeleteFpgaImageRequest]: (DeleteFpgaImageRequest)[K]
    }>): Request<DeleteFpgaImageResult, AWSError> {
        this.boot();
        return this.client.deleteFpgaImage(
          this.ops["DeleteFpgaImage"].apply(partialParams)
        );
    }

    invokeDeleteInstanceEventWindow(partialParams: ToOptional<{
      [K in keyof DeleteInstanceEventWindowRequest]: (DeleteInstanceEventWindowRequest)[K]
    }>): Request<DeleteInstanceEventWindowResult, AWSError> {
        this.boot();
        return this.client.deleteInstanceEventWindow(
          this.ops["DeleteInstanceEventWindow"].apply(partialParams)
        );
    }

    invokeDeleteIpam(partialParams: ToOptional<{
      [K in keyof DeleteIpamRequest]: (DeleteIpamRequest)[K]
    }>): Request<DeleteIpamResult, AWSError> {
        this.boot();
        return this.client.deleteIpam(
          this.ops["DeleteIpam"].apply(partialParams)
        );
    }

    invokeDeleteIpamPool(partialParams: ToOptional<{
      [K in keyof DeleteIpamPoolRequest]: (DeleteIpamPoolRequest)[K]
    }>): Request<DeleteIpamPoolResult, AWSError> {
        this.boot();
        return this.client.deleteIpamPool(
          this.ops["DeleteIpamPool"].apply(partialParams)
        );
    }

    invokeDeleteIpamScope(partialParams: ToOptional<{
      [K in keyof DeleteIpamScopeRequest]: (DeleteIpamScopeRequest)[K]
    }>): Request<DeleteIpamScopeResult, AWSError> {
        this.boot();
        return this.client.deleteIpamScope(
          this.ops["DeleteIpamScope"].apply(partialParams)
        );
    }

    invokeDeleteLaunchTemplate(partialParams: ToOptional<{
      [K in keyof DeleteLaunchTemplateRequest]: (DeleteLaunchTemplateRequest)[K]
    }>): Request<DeleteLaunchTemplateResult, AWSError> {
        this.boot();
        return this.client.deleteLaunchTemplate(
          this.ops["DeleteLaunchTemplate"].apply(partialParams)
        );
    }

    invokeDeleteLaunchTemplateVersions(partialParams: ToOptional<{
      [K in keyof DeleteLaunchTemplateVersionsRequest]: (DeleteLaunchTemplateVersionsRequest)[K]
    }>): Request<DeleteLaunchTemplateVersionsResult, AWSError> {
        this.boot();
        return this.client.deleteLaunchTemplateVersions(
          this.ops["DeleteLaunchTemplateVersions"].apply(partialParams)
        );
    }

    invokeDeleteLocalGatewayRoute(partialParams: ToOptional<{
      [K in keyof DeleteLocalGatewayRouteRequest]: (DeleteLocalGatewayRouteRequest)[K]
    }>): Request<DeleteLocalGatewayRouteResult, AWSError> {
        this.boot();
        return this.client.deleteLocalGatewayRoute(
          this.ops["DeleteLocalGatewayRoute"].apply(partialParams)
        );
    }

    invokeDeleteLocalGatewayRouteTableVpcAssociation(partialParams: ToOptional<{
      [K in keyof DeleteLocalGatewayRouteTableVpcAssociationRequest]: (DeleteLocalGatewayRouteTableVpcAssociationRequest)[K]
    }>): Request<DeleteLocalGatewayRouteTableVpcAssociationResult, AWSError> {
        this.boot();
        return this.client.deleteLocalGatewayRouteTableVpcAssociation(
          this.ops["DeleteLocalGatewayRouteTableVpcAssociation"].apply(partialParams)
        );
    }

    invokeDeleteManagedPrefixList(partialParams: ToOptional<{
      [K in keyof DeleteManagedPrefixListRequest]: (DeleteManagedPrefixListRequest)[K]
    }>): Request<DeleteManagedPrefixListResult, AWSError> {
        this.boot();
        return this.client.deleteManagedPrefixList(
          this.ops["DeleteManagedPrefixList"].apply(partialParams)
        );
    }

    invokeDeleteNatGateway(partialParams: ToOptional<{
      [K in keyof DeleteNatGatewayRequest]: (DeleteNatGatewayRequest)[K]
    }>): Request<DeleteNatGatewayResult, AWSError> {
        this.boot();
        return this.client.deleteNatGateway(
          this.ops["DeleteNatGateway"].apply(partialParams)
        );
    }

    invokeDeleteNetworkInsightsAccessScope(partialParams: ToOptional<{
      [K in keyof DeleteNetworkInsightsAccessScopeRequest]: (DeleteNetworkInsightsAccessScopeRequest)[K]
    }>): Request<DeleteNetworkInsightsAccessScopeResult, AWSError> {
        this.boot();
        return this.client.deleteNetworkInsightsAccessScope(
          this.ops["DeleteNetworkInsightsAccessScope"].apply(partialParams)
        );
    }

    invokeDeleteNetworkInsightsAccessScopeAnalysis(partialParams: ToOptional<{
      [K in keyof DeleteNetworkInsightsAccessScopeAnalysisRequest]: (DeleteNetworkInsightsAccessScopeAnalysisRequest)[K]
    }>): Request<DeleteNetworkInsightsAccessScopeAnalysisResult, AWSError> {
        this.boot();
        return this.client.deleteNetworkInsightsAccessScopeAnalysis(
          this.ops["DeleteNetworkInsightsAccessScopeAnalysis"].apply(partialParams)
        );
    }

    invokeDeleteNetworkInsightsAnalysis(partialParams: ToOptional<{
      [K in keyof DeleteNetworkInsightsAnalysisRequest]: (DeleteNetworkInsightsAnalysisRequest)[K]
    }>): Request<DeleteNetworkInsightsAnalysisResult, AWSError> {
        this.boot();
        return this.client.deleteNetworkInsightsAnalysis(
          this.ops["DeleteNetworkInsightsAnalysis"].apply(partialParams)
        );
    }

    invokeDeleteNetworkInsightsPath(partialParams: ToOptional<{
      [K in keyof DeleteNetworkInsightsPathRequest]: (DeleteNetworkInsightsPathRequest)[K]
    }>): Request<DeleteNetworkInsightsPathResult, AWSError> {
        this.boot();
        return this.client.deleteNetworkInsightsPath(
          this.ops["DeleteNetworkInsightsPath"].apply(partialParams)
        );
    }

    invokeDeleteNetworkInterfacePermission(partialParams: ToOptional<{
      [K in keyof DeleteNetworkInterfacePermissionRequest]: (DeleteNetworkInterfacePermissionRequest)[K]
    }>): Request<DeleteNetworkInterfacePermissionResult, AWSError> {
        this.boot();
        return this.client.deleteNetworkInterfacePermission(
          this.ops["DeleteNetworkInterfacePermission"].apply(partialParams)
        );
    }

    invokeDeletePublicIpv4Pool(partialParams: ToOptional<{
      [K in keyof DeletePublicIpv4PoolRequest]: (DeletePublicIpv4PoolRequest)[K]
    }>): Request<DeletePublicIpv4PoolResult, AWSError> {
        this.boot();
        return this.client.deletePublicIpv4Pool(
          this.ops["DeletePublicIpv4Pool"].apply(partialParams)
        );
    }

    invokeDeleteQueuedReservedInstances(partialParams: ToOptional<{
      [K in keyof DeleteQueuedReservedInstancesRequest]: (DeleteQueuedReservedInstancesRequest)[K]
    }>): Request<DeleteQueuedReservedInstancesResult, AWSError> {
        this.boot();
        return this.client.deleteQueuedReservedInstances(
          this.ops["DeleteQueuedReservedInstances"].apply(partialParams)
        );
    }

    invokeDeleteSubnetCidrReservation(partialParams: ToOptional<{
      [K in keyof DeleteSubnetCidrReservationRequest]: (DeleteSubnetCidrReservationRequest)[K]
    }>): Request<DeleteSubnetCidrReservationResult, AWSError> {
        this.boot();
        return this.client.deleteSubnetCidrReservation(
          this.ops["DeleteSubnetCidrReservation"].apply(partialParams)
        );
    }

    invokeDeleteTrafficMirrorFilter(partialParams: ToOptional<{
      [K in keyof DeleteTrafficMirrorFilterRequest]: (DeleteTrafficMirrorFilterRequest)[K]
    }>): Request<DeleteTrafficMirrorFilterResult, AWSError> {
        this.boot();
        return this.client.deleteTrafficMirrorFilter(
          this.ops["DeleteTrafficMirrorFilter"].apply(partialParams)
        );
    }

    invokeDeleteTrafficMirrorFilterRule(partialParams: ToOptional<{
      [K in keyof DeleteTrafficMirrorFilterRuleRequest]: (DeleteTrafficMirrorFilterRuleRequest)[K]
    }>): Request<DeleteTrafficMirrorFilterRuleResult, AWSError> {
        this.boot();
        return this.client.deleteTrafficMirrorFilterRule(
          this.ops["DeleteTrafficMirrorFilterRule"].apply(partialParams)
        );
    }

    invokeDeleteTrafficMirrorSession(partialParams: ToOptional<{
      [K in keyof DeleteTrafficMirrorSessionRequest]: (DeleteTrafficMirrorSessionRequest)[K]
    }>): Request<DeleteTrafficMirrorSessionResult, AWSError> {
        this.boot();
        return this.client.deleteTrafficMirrorSession(
          this.ops["DeleteTrafficMirrorSession"].apply(partialParams)
        );
    }

    invokeDeleteTrafficMirrorTarget(partialParams: ToOptional<{
      [K in keyof DeleteTrafficMirrorTargetRequest]: (DeleteTrafficMirrorTargetRequest)[K]
    }>): Request<DeleteTrafficMirrorTargetResult, AWSError> {
        this.boot();
        return this.client.deleteTrafficMirrorTarget(
          this.ops["DeleteTrafficMirrorTarget"].apply(partialParams)
        );
    }

    invokeDeleteTransitGateway(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayRequest]: (DeleteTransitGatewayRequest)[K]
    }>): Request<DeleteTransitGatewayResult, AWSError> {
        this.boot();
        return this.client.deleteTransitGateway(
          this.ops["DeleteTransitGateway"].apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayConnect(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayConnectRequest]: (DeleteTransitGatewayConnectRequest)[K]
    }>): Request<DeleteTransitGatewayConnectResult, AWSError> {
        this.boot();
        return this.client.deleteTransitGatewayConnect(
          this.ops["DeleteTransitGatewayConnect"].apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayConnectPeer(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayConnectPeerRequest]: (DeleteTransitGatewayConnectPeerRequest)[K]
    }>): Request<DeleteTransitGatewayConnectPeerResult, AWSError> {
        this.boot();
        return this.client.deleteTransitGatewayConnectPeer(
          this.ops["DeleteTransitGatewayConnectPeer"].apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayMulticastDomain(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayMulticastDomainRequest]: (DeleteTransitGatewayMulticastDomainRequest)[K]
    }>): Request<DeleteTransitGatewayMulticastDomainResult, AWSError> {
        this.boot();
        return this.client.deleteTransitGatewayMulticastDomain(
          this.ops["DeleteTransitGatewayMulticastDomain"].apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayPeeringAttachment(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayPeeringAttachmentRequest]: (DeleteTransitGatewayPeeringAttachmentRequest)[K]
    }>): Request<DeleteTransitGatewayPeeringAttachmentResult, AWSError> {
        this.boot();
        return this.client.deleteTransitGatewayPeeringAttachment(
          this.ops["DeleteTransitGatewayPeeringAttachment"].apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayPrefixListReference(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayPrefixListReferenceRequest]: (DeleteTransitGatewayPrefixListReferenceRequest)[K]
    }>): Request<DeleteTransitGatewayPrefixListReferenceResult, AWSError> {
        this.boot();
        return this.client.deleteTransitGatewayPrefixListReference(
          this.ops["DeleteTransitGatewayPrefixListReference"].apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayRoute(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayRouteRequest]: (DeleteTransitGatewayRouteRequest)[K]
    }>): Request<DeleteTransitGatewayRouteResult, AWSError> {
        this.boot();
        return this.client.deleteTransitGatewayRoute(
          this.ops["DeleteTransitGatewayRoute"].apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayRouteTable(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayRouteTableRequest]: (DeleteTransitGatewayRouteTableRequest)[K]
    }>): Request<DeleteTransitGatewayRouteTableResult, AWSError> {
        this.boot();
        return this.client.deleteTransitGatewayRouteTable(
          this.ops["DeleteTransitGatewayRouteTable"].apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayVpcAttachment(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayVpcAttachmentRequest]: (DeleteTransitGatewayVpcAttachmentRequest)[K]
    }>): Request<DeleteTransitGatewayVpcAttachmentResult, AWSError> {
        this.boot();
        return this.client.deleteTransitGatewayVpcAttachment(
          this.ops["DeleteTransitGatewayVpcAttachment"].apply(partialParams)
        );
    }

    invokeDeleteVpcEndpointConnectionNotifications(partialParams: ToOptional<{
      [K in keyof DeleteVpcEndpointConnectionNotificationsRequest]: (DeleteVpcEndpointConnectionNotificationsRequest)[K]
    }>): Request<DeleteVpcEndpointConnectionNotificationsResult, AWSError> {
        this.boot();
        return this.client.deleteVpcEndpointConnectionNotifications(
          this.ops["DeleteVpcEndpointConnectionNotifications"].apply(partialParams)
        );
    }

    invokeDeleteVpcEndpointServiceConfigurations(partialParams: ToOptional<{
      [K in keyof DeleteVpcEndpointServiceConfigurationsRequest]: (DeleteVpcEndpointServiceConfigurationsRequest)[K]
    }>): Request<DeleteVpcEndpointServiceConfigurationsResult, AWSError> {
        this.boot();
        return this.client.deleteVpcEndpointServiceConfigurations(
          this.ops["DeleteVpcEndpointServiceConfigurations"].apply(partialParams)
        );
    }

    invokeDeleteVpcEndpoints(partialParams: ToOptional<{
      [K in keyof DeleteVpcEndpointsRequest]: (DeleteVpcEndpointsRequest)[K]
    }>): Request<DeleteVpcEndpointsResult, AWSError> {
        this.boot();
        return this.client.deleteVpcEndpoints(
          this.ops["DeleteVpcEndpoints"].apply(partialParams)
        );
    }

    invokeDeleteVpcPeeringConnection(partialParams: ToOptional<{
      [K in keyof DeleteVpcPeeringConnectionRequest]: (DeleteVpcPeeringConnectionRequest)[K]
    }>): Request<DeleteVpcPeeringConnectionResult, AWSError> {
        this.boot();
        return this.client.deleteVpcPeeringConnection(
          this.ops["DeleteVpcPeeringConnection"].apply(partialParams)
        );
    }

    invokeDeprovisionByoipCidr(partialParams: ToOptional<{
      [K in keyof DeprovisionByoipCidrRequest]: (DeprovisionByoipCidrRequest)[K]
    }>): Request<DeprovisionByoipCidrResult, AWSError> {
        this.boot();
        return this.client.deprovisionByoipCidr(
          this.ops["DeprovisionByoipCidr"].apply(partialParams)
        );
    }

    invokeDeprovisionIpamPoolCidr(partialParams: ToOptional<{
      [K in keyof DeprovisionIpamPoolCidrRequest]: (DeprovisionIpamPoolCidrRequest)[K]
    }>): Request<DeprovisionIpamPoolCidrResult, AWSError> {
        this.boot();
        return this.client.deprovisionIpamPoolCidr(
          this.ops["DeprovisionIpamPoolCidr"].apply(partialParams)
        );
    }

    invokeDeprovisionPublicIpv4PoolCidr(partialParams: ToOptional<{
      [K in keyof DeprovisionPublicIpv4PoolCidrRequest]: (DeprovisionPublicIpv4PoolCidrRequest)[K]
    }>): Request<DeprovisionPublicIpv4PoolCidrResult, AWSError> {
        this.boot();
        return this.client.deprovisionPublicIpv4PoolCidr(
          this.ops["DeprovisionPublicIpv4PoolCidr"].apply(partialParams)
        );
    }

    invokeDeregisterInstanceEventNotificationAttributes(partialParams: ToOptional<{
      [K in keyof DeregisterInstanceEventNotificationAttributesRequest]: (DeregisterInstanceEventNotificationAttributesRequest)[K]
    }>): Request<DeregisterInstanceEventNotificationAttributesResult, AWSError> {
        this.boot();
        return this.client.deregisterInstanceEventNotificationAttributes(
          this.ops["DeregisterInstanceEventNotificationAttributes"].apply(partialParams)
        );
    }

    invokeDeregisterTransitGatewayMulticastGroupMembers(partialParams: ToOptional<{
      [K in keyof DeregisterTransitGatewayMulticastGroupMembersRequest]: (DeregisterTransitGatewayMulticastGroupMembersRequest)[K]
    }>): Request<DeregisterTransitGatewayMulticastGroupMembersResult, AWSError> {
        this.boot();
        return this.client.deregisterTransitGatewayMulticastGroupMembers(
          this.ops["DeregisterTransitGatewayMulticastGroupMembers"].apply(partialParams)
        );
    }

    invokeDeregisterTransitGatewayMulticastGroupSources(partialParams: ToOptional<{
      [K in keyof DeregisterTransitGatewayMulticastGroupSourcesRequest]: (DeregisterTransitGatewayMulticastGroupSourcesRequest)[K]
    }>): Request<DeregisterTransitGatewayMulticastGroupSourcesResult, AWSError> {
        this.boot();
        return this.client.deregisterTransitGatewayMulticastGroupSources(
          this.ops["DeregisterTransitGatewayMulticastGroupSources"].apply(partialParams)
        );
    }

    invokeDescribeAccountAttributes(partialParams: ToOptional<{
      [K in keyof DescribeAccountAttributesRequest]: (DescribeAccountAttributesRequest)[K]
    }>): Request<DescribeAccountAttributesResult, AWSError> {
        this.boot();
        return this.client.describeAccountAttributes(
          this.ops["DescribeAccountAttributes"].apply(partialParams)
        );
    }

    invokeDescribeAddresses(partialParams: ToOptional<{
      [K in keyof DescribeAddressesRequest]: (DescribeAddressesRequest)[K]
    }>): Request<DescribeAddressesResult, AWSError> {
        this.boot();
        return this.client.describeAddresses(
          this.ops["DescribeAddresses"].apply(partialParams)
        );
    }

    invokeDescribeAddressesAttribute(partialParams: ToOptional<{
      [K in keyof DescribeAddressesAttributeRequest]: (DescribeAddressesAttributeRequest)[K]
    }>): Request<DescribeAddressesAttributeResult, AWSError> {
        this.boot();
        return this.client.describeAddressesAttribute(
          this.ops["DescribeAddressesAttribute"].apply(partialParams)
        );
    }

    invokeDescribeAggregateIdFormat(partialParams: ToOptional<{
      [K in keyof DescribeAggregateIdFormatRequest]: (DescribeAggregateIdFormatRequest)[K]
    }>): Request<DescribeAggregateIdFormatResult, AWSError> {
        this.boot();
        return this.client.describeAggregateIdFormat(
          this.ops["DescribeAggregateIdFormat"].apply(partialParams)
        );
    }

    invokeDescribeAvailabilityZones(partialParams: ToOptional<{
      [K in keyof DescribeAvailabilityZonesRequest]: (DescribeAvailabilityZonesRequest)[K]
    }>): Request<DescribeAvailabilityZonesResult, AWSError> {
        this.boot();
        return this.client.describeAvailabilityZones(
          this.ops["DescribeAvailabilityZones"].apply(partialParams)
        );
    }

    invokeDescribeBundleTasks(partialParams: ToOptional<{
      [K in keyof DescribeBundleTasksRequest]: (DescribeBundleTasksRequest)[K]
    }>): Request<DescribeBundleTasksResult, AWSError> {
        this.boot();
        return this.client.describeBundleTasks(
          this.ops["DescribeBundleTasks"].apply(partialParams)
        );
    }

    invokeDescribeByoipCidrs(partialParams: ToOptional<{
      [K in keyof DescribeByoipCidrsRequest]: (DescribeByoipCidrsRequest)[K]
    }>): Request<DescribeByoipCidrsResult, AWSError> {
        this.boot();
        return this.client.describeByoipCidrs(
          this.ops["DescribeByoipCidrs"].apply(partialParams)
        );
    }

    invokeDescribeCapacityReservationFleets(partialParams: ToOptional<{
      [K in keyof DescribeCapacityReservationFleetsRequest]: (DescribeCapacityReservationFleetsRequest)[K]
    }>): Request<DescribeCapacityReservationFleetsResult, AWSError> {
        this.boot();
        return this.client.describeCapacityReservationFleets(
          this.ops["DescribeCapacityReservationFleets"].apply(partialParams)
        );
    }

    invokeDescribeCapacityReservations(partialParams: ToOptional<{
      [K in keyof DescribeCapacityReservationsRequest]: (DescribeCapacityReservationsRequest)[K]
    }>): Request<DescribeCapacityReservationsResult, AWSError> {
        this.boot();
        return this.client.describeCapacityReservations(
          this.ops["DescribeCapacityReservations"].apply(partialParams)
        );
    }

    invokeDescribeCarrierGateways(partialParams: ToOptional<{
      [K in keyof DescribeCarrierGatewaysRequest]: (DescribeCarrierGatewaysRequest)[K]
    }>): Request<DescribeCarrierGatewaysResult, AWSError> {
        this.boot();
        return this.client.describeCarrierGateways(
          this.ops["DescribeCarrierGateways"].apply(partialParams)
        );
    }

    invokeDescribeClassicLinkInstances(partialParams: ToOptional<{
      [K in keyof DescribeClassicLinkInstancesRequest]: (DescribeClassicLinkInstancesRequest)[K]
    }>): Request<DescribeClassicLinkInstancesResult, AWSError> {
        this.boot();
        return this.client.describeClassicLinkInstances(
          this.ops["DescribeClassicLinkInstances"].apply(partialParams)
        );
    }

    invokeDescribeClientVpnAuthorizationRules(partialParams: ToOptional<{
      [K in keyof DescribeClientVpnAuthorizationRulesRequest]: (DescribeClientVpnAuthorizationRulesRequest)[K]
    }>): Request<DescribeClientVpnAuthorizationRulesResult, AWSError> {
        this.boot();
        return this.client.describeClientVpnAuthorizationRules(
          this.ops["DescribeClientVpnAuthorizationRules"].apply(partialParams)
        );
    }

    invokeDescribeClientVpnConnections(partialParams: ToOptional<{
      [K in keyof DescribeClientVpnConnectionsRequest]: (DescribeClientVpnConnectionsRequest)[K]
    }>): Request<DescribeClientVpnConnectionsResult, AWSError> {
        this.boot();
        return this.client.describeClientVpnConnections(
          this.ops["DescribeClientVpnConnections"].apply(partialParams)
        );
    }

    invokeDescribeClientVpnEndpoints(partialParams: ToOptional<{
      [K in keyof DescribeClientVpnEndpointsRequest]: (DescribeClientVpnEndpointsRequest)[K]
    }>): Request<DescribeClientVpnEndpointsResult, AWSError> {
        this.boot();
        return this.client.describeClientVpnEndpoints(
          this.ops["DescribeClientVpnEndpoints"].apply(partialParams)
        );
    }

    invokeDescribeClientVpnRoutes(partialParams: ToOptional<{
      [K in keyof DescribeClientVpnRoutesRequest]: (DescribeClientVpnRoutesRequest)[K]
    }>): Request<DescribeClientVpnRoutesResult, AWSError> {
        this.boot();
        return this.client.describeClientVpnRoutes(
          this.ops["DescribeClientVpnRoutes"].apply(partialParams)
        );
    }

    invokeDescribeClientVpnTargetNetworks(partialParams: ToOptional<{
      [K in keyof DescribeClientVpnTargetNetworksRequest]: (DescribeClientVpnTargetNetworksRequest)[K]
    }>): Request<DescribeClientVpnTargetNetworksResult, AWSError> {
        this.boot();
        return this.client.describeClientVpnTargetNetworks(
          this.ops["DescribeClientVpnTargetNetworks"].apply(partialParams)
        );
    }

    invokeDescribeCoipPools(partialParams: ToOptional<{
      [K in keyof DescribeCoipPoolsRequest]: (DescribeCoipPoolsRequest)[K]
    }>): Request<DescribeCoipPoolsResult, AWSError> {
        this.boot();
        return this.client.describeCoipPools(
          this.ops["DescribeCoipPools"].apply(partialParams)
        );
    }

    invokeDescribeConversionTasks(partialParams: ToOptional<{
      [K in keyof DescribeConversionTasksRequest]: (DescribeConversionTasksRequest)[K]
    }>): Request<DescribeConversionTasksResult, AWSError> {
        this.boot();
        return this.client.describeConversionTasks(
          this.ops["DescribeConversionTasks"].apply(partialParams)
        );
    }

    invokeDescribeCustomerGateways(partialParams: ToOptional<{
      [K in keyof DescribeCustomerGatewaysRequest]: (DescribeCustomerGatewaysRequest)[K]
    }>): Request<DescribeCustomerGatewaysResult, AWSError> {
        this.boot();
        return this.client.describeCustomerGateways(
          this.ops["DescribeCustomerGateways"].apply(partialParams)
        );
    }

    invokeDescribeDhcpOptions(partialParams: ToOptional<{
      [K in keyof DescribeDhcpOptionsRequest]: (DescribeDhcpOptionsRequest)[K]
    }>): Request<DescribeDhcpOptionsResult, AWSError> {
        this.boot();
        return this.client.describeDhcpOptions(
          this.ops["DescribeDhcpOptions"].apply(partialParams)
        );
    }

    invokeDescribeEgressOnlyInternetGateways(partialParams: ToOptional<{
      [K in keyof DescribeEgressOnlyInternetGatewaysRequest]: (DescribeEgressOnlyInternetGatewaysRequest)[K]
    }>): Request<DescribeEgressOnlyInternetGatewaysResult, AWSError> {
        this.boot();
        return this.client.describeEgressOnlyInternetGateways(
          this.ops["DescribeEgressOnlyInternetGateways"].apply(partialParams)
        );
    }

    invokeDescribeElasticGpus(partialParams: ToOptional<{
      [K in keyof DescribeElasticGpusRequest]: (DescribeElasticGpusRequest)[K]
    }>): Request<DescribeElasticGpusResult, AWSError> {
        this.boot();
        return this.client.describeElasticGpus(
          this.ops["DescribeElasticGpus"].apply(partialParams)
        );
    }

    invokeDescribeExportImageTasks(partialParams: ToOptional<{
      [K in keyof DescribeExportImageTasksRequest]: (DescribeExportImageTasksRequest)[K]
    }>): Request<DescribeExportImageTasksResult, AWSError> {
        this.boot();
        return this.client.describeExportImageTasks(
          this.ops["DescribeExportImageTasks"].apply(partialParams)
        );
    }

    invokeDescribeExportTasks(partialParams: ToOptional<{
      [K in keyof DescribeExportTasksRequest]: (DescribeExportTasksRequest)[K]
    }>): Request<DescribeExportTasksResult, AWSError> {
        this.boot();
        return this.client.describeExportTasks(
          this.ops["DescribeExportTasks"].apply(partialParams)
        );
    }

    invokeDescribeFastLaunchImages(partialParams: ToOptional<{
      [K in keyof DescribeFastLaunchImagesRequest]: (DescribeFastLaunchImagesRequest)[K]
    }>): Request<DescribeFastLaunchImagesResult, AWSError> {
        this.boot();
        return this.client.describeFastLaunchImages(
          this.ops["DescribeFastLaunchImages"].apply(partialParams)
        );
    }

    invokeDescribeFastSnapshotRestores(partialParams: ToOptional<{
      [K in keyof DescribeFastSnapshotRestoresRequest]: (DescribeFastSnapshotRestoresRequest)[K]
    }>): Request<DescribeFastSnapshotRestoresResult, AWSError> {
        this.boot();
        return this.client.describeFastSnapshotRestores(
          this.ops["DescribeFastSnapshotRestores"].apply(partialParams)
        );
    }

    invokeDescribeFleetHistory(partialParams: ToOptional<{
      [K in keyof DescribeFleetHistoryRequest]: (DescribeFleetHistoryRequest)[K]
    }>): Request<DescribeFleetHistoryResult, AWSError> {
        this.boot();
        return this.client.describeFleetHistory(
          this.ops["DescribeFleetHistory"].apply(partialParams)
        );
    }

    invokeDescribeFleetInstances(partialParams: ToOptional<{
      [K in keyof DescribeFleetInstancesRequest]: (DescribeFleetInstancesRequest)[K]
    }>): Request<DescribeFleetInstancesResult, AWSError> {
        this.boot();
        return this.client.describeFleetInstances(
          this.ops["DescribeFleetInstances"].apply(partialParams)
        );
    }

    invokeDescribeFleets(partialParams: ToOptional<{
      [K in keyof DescribeFleetsRequest]: (DescribeFleetsRequest)[K]
    }>): Request<DescribeFleetsResult, AWSError> {
        this.boot();
        return this.client.describeFleets(
          this.ops["DescribeFleets"].apply(partialParams)
        );
    }

    invokeDescribeFlowLogs(partialParams: ToOptional<{
      [K in keyof DescribeFlowLogsRequest]: (DescribeFlowLogsRequest)[K]
    }>): Request<DescribeFlowLogsResult, AWSError> {
        this.boot();
        return this.client.describeFlowLogs(
          this.ops["DescribeFlowLogs"].apply(partialParams)
        );
    }

    invokeDescribeFpgaImageAttribute(partialParams: ToOptional<{
      [K in keyof DescribeFpgaImageAttributeRequest]: (DescribeFpgaImageAttributeRequest)[K]
    }>): Request<DescribeFpgaImageAttributeResult, AWSError> {
        this.boot();
        return this.client.describeFpgaImageAttribute(
          this.ops["DescribeFpgaImageAttribute"].apply(partialParams)
        );
    }

    invokeDescribeFpgaImages(partialParams: ToOptional<{
      [K in keyof DescribeFpgaImagesRequest]: (DescribeFpgaImagesRequest)[K]
    }>): Request<DescribeFpgaImagesResult, AWSError> {
        this.boot();
        return this.client.describeFpgaImages(
          this.ops["DescribeFpgaImages"].apply(partialParams)
        );
    }

    invokeDescribeHostReservationOfferings(partialParams: ToOptional<{
      [K in keyof DescribeHostReservationOfferingsRequest]: (DescribeHostReservationOfferingsRequest)[K]
    }>): Request<DescribeHostReservationOfferingsResult, AWSError> {
        this.boot();
        return this.client.describeHostReservationOfferings(
          this.ops["DescribeHostReservationOfferings"].apply(partialParams)
        );
    }

    invokeDescribeHostReservations(partialParams: ToOptional<{
      [K in keyof DescribeHostReservationsRequest]: (DescribeHostReservationsRequest)[K]
    }>): Request<DescribeHostReservationsResult, AWSError> {
        this.boot();
        return this.client.describeHostReservations(
          this.ops["DescribeHostReservations"].apply(partialParams)
        );
    }

    invokeDescribeHosts(partialParams: ToOptional<{
      [K in keyof DescribeHostsRequest]: (DescribeHostsRequest)[K]
    }>): Request<DescribeHostsResult, AWSError> {
        this.boot();
        return this.client.describeHosts(
          this.ops["DescribeHosts"].apply(partialParams)
        );
    }

    invokeDescribeIamInstanceProfileAssociations(partialParams: ToOptional<{
      [K in keyof DescribeIamInstanceProfileAssociationsRequest]: (DescribeIamInstanceProfileAssociationsRequest)[K]
    }>): Request<DescribeIamInstanceProfileAssociationsResult, AWSError> {
        this.boot();
        return this.client.describeIamInstanceProfileAssociations(
          this.ops["DescribeIamInstanceProfileAssociations"].apply(partialParams)
        );
    }

    invokeDescribeIdFormat(partialParams: ToOptional<{
      [K in keyof DescribeIdFormatRequest]: (DescribeIdFormatRequest)[K]
    }>): Request<DescribeIdFormatResult, AWSError> {
        this.boot();
        return this.client.describeIdFormat(
          this.ops["DescribeIdFormat"].apply(partialParams)
        );
    }

    invokeDescribeIdentityIdFormat(partialParams: ToOptional<{
      [K in keyof DescribeIdentityIdFormatRequest]: (DescribeIdentityIdFormatRequest)[K]
    }>): Request<DescribeIdentityIdFormatResult, AWSError> {
        this.boot();
        return this.client.describeIdentityIdFormat(
          this.ops["DescribeIdentityIdFormat"].apply(partialParams)
        );
    }

    invokeDescribeImageAttribute(partialParams: ToOptional<{
      [K in keyof DescribeImageAttributeRequest & keyof Omit<DescribeImageAttributeRequest, "ImageId">]: (DescribeImageAttributeRequest)[K]
    }>): Request<ImageAttribute, AWSError> {
        this.boot();
        return this.client.describeImageAttribute(
          this.ops["DescribeImageAttribute"].apply(partialParams)
        );
    }

    invokeDescribeImages(partialParams: ToOptional<{
      [K in keyof DescribeImagesRequest]: (DescribeImagesRequest)[K]
    }>): Request<DescribeImagesResult, AWSError> {
        this.boot();
        return this.client.describeImages(
          this.ops["DescribeImages"].apply(partialParams)
        );
    }

    invokeDescribeImportImageTasks(partialParams: ToOptional<{
      [K in keyof DescribeImportImageTasksRequest]: (DescribeImportImageTasksRequest)[K]
    }>): Request<DescribeImportImageTasksResult, AWSError> {
        this.boot();
        return this.client.describeImportImageTasks(
          this.ops["DescribeImportImageTasks"].apply(partialParams)
        );
    }

    invokeDescribeImportSnapshotTasks(partialParams: ToOptional<{
      [K in keyof DescribeImportSnapshotTasksRequest]: (DescribeImportSnapshotTasksRequest)[K]
    }>): Request<DescribeImportSnapshotTasksResult, AWSError> {
        this.boot();
        return this.client.describeImportSnapshotTasks(
          this.ops["DescribeImportSnapshotTasks"].apply(partialParams)
        );
    }

    invokeDescribeInstanceAttribute(partialParams: ToOptional<{
      [K in keyof DescribeInstanceAttributeRequest]: (DescribeInstanceAttributeRequest)[K]
    }>): Request<InstanceAttribute, AWSError> {
        this.boot();
        return this.client.describeInstanceAttribute(
          this.ops["DescribeInstanceAttribute"].apply(partialParams)
        );
    }

    invokeDescribeInstanceCreditSpecifications(partialParams: ToOptional<{
      [K in keyof DescribeInstanceCreditSpecificationsRequest]: (DescribeInstanceCreditSpecificationsRequest)[K]
    }>): Request<DescribeInstanceCreditSpecificationsResult, AWSError> {
        this.boot();
        return this.client.describeInstanceCreditSpecifications(
          this.ops["DescribeInstanceCreditSpecifications"].apply(partialParams)
        );
    }

    invokeDescribeInstanceEventNotificationAttributes(partialParams: ToOptional<{
      [K in keyof DescribeInstanceEventNotificationAttributesRequest]: (DescribeInstanceEventNotificationAttributesRequest)[K]
    }>): Request<DescribeInstanceEventNotificationAttributesResult, AWSError> {
        this.boot();
        return this.client.describeInstanceEventNotificationAttributes(
          this.ops["DescribeInstanceEventNotificationAttributes"].apply(partialParams)
        );
    }

    invokeDescribeInstanceEventWindows(partialParams: ToOptional<{
      [K in keyof DescribeInstanceEventWindowsRequest]: (DescribeInstanceEventWindowsRequest)[K]
    }>): Request<DescribeInstanceEventWindowsResult, AWSError> {
        this.boot();
        return this.client.describeInstanceEventWindows(
          this.ops["DescribeInstanceEventWindows"].apply(partialParams)
        );
    }

    invokeDescribeInstanceStatus(partialParams: ToOptional<{
      [K in keyof DescribeInstanceStatusRequest]: (DescribeInstanceStatusRequest)[K]
    }>): Request<DescribeInstanceStatusResult, AWSError> {
        this.boot();
        return this.client.describeInstanceStatus(
          this.ops["DescribeInstanceStatus"].apply(partialParams)
        );
    }

    invokeDescribeInstanceTypeOfferings(partialParams: ToOptional<{
      [K in keyof DescribeInstanceTypeOfferingsRequest]: (DescribeInstanceTypeOfferingsRequest)[K]
    }>): Request<DescribeInstanceTypeOfferingsResult, AWSError> {
        this.boot();
        return this.client.describeInstanceTypeOfferings(
          this.ops["DescribeInstanceTypeOfferings"].apply(partialParams)
        );
    }

    invokeDescribeInstanceTypes(partialParams: ToOptional<{
      [K in keyof DescribeInstanceTypesRequest]: (DescribeInstanceTypesRequest)[K]
    }>): Request<DescribeInstanceTypesResult, AWSError> {
        this.boot();
        return this.client.describeInstanceTypes(
          this.ops["DescribeInstanceTypes"].apply(partialParams)
        );
    }

    invokeDescribeInstances(partialParams: ToOptional<{
      [K in keyof DescribeInstancesRequest]: (DescribeInstancesRequest)[K]
    }>): Request<DescribeInstancesResult, AWSError> {
        this.boot();
        return this.client.describeInstances(
          this.ops["DescribeInstances"].apply(partialParams)
        );
    }

    invokeDescribeInternetGateways(partialParams: ToOptional<{
      [K in keyof DescribeInternetGatewaysRequest]: (DescribeInternetGatewaysRequest)[K]
    }>): Request<DescribeInternetGatewaysResult, AWSError> {
        this.boot();
        return this.client.describeInternetGateways(
          this.ops["DescribeInternetGateways"].apply(partialParams)
        );
    }

    invokeDescribeIpamPools(partialParams: ToOptional<{
      [K in keyof DescribeIpamPoolsRequest]: (DescribeIpamPoolsRequest)[K]
    }>): Request<DescribeIpamPoolsResult, AWSError> {
        this.boot();
        return this.client.describeIpamPools(
          this.ops["DescribeIpamPools"].apply(partialParams)
        );
    }

    invokeDescribeIpamScopes(partialParams: ToOptional<{
      [K in keyof DescribeIpamScopesRequest]: (DescribeIpamScopesRequest)[K]
    }>): Request<DescribeIpamScopesResult, AWSError> {
        this.boot();
        return this.client.describeIpamScopes(
          this.ops["DescribeIpamScopes"].apply(partialParams)
        );
    }

    invokeDescribeIpams(partialParams: ToOptional<{
      [K in keyof DescribeIpamsRequest]: (DescribeIpamsRequest)[K]
    }>): Request<DescribeIpamsResult, AWSError> {
        this.boot();
        return this.client.describeIpams(
          this.ops["DescribeIpams"].apply(partialParams)
        );
    }

    invokeDescribeIpv6Pools(partialParams: ToOptional<{
      [K in keyof DescribeIpv6PoolsRequest]: (DescribeIpv6PoolsRequest)[K]
    }>): Request<DescribeIpv6PoolsResult, AWSError> {
        this.boot();
        return this.client.describeIpv6Pools(
          this.ops["DescribeIpv6Pools"].apply(partialParams)
        );
    }

    invokeDescribeKeyPairs(partialParams: ToOptional<{
      [K in keyof DescribeKeyPairsRequest]: (DescribeKeyPairsRequest)[K]
    }>): Request<DescribeKeyPairsResult, AWSError> {
        this.boot();
        return this.client.describeKeyPairs(
          this.ops["DescribeKeyPairs"].apply(partialParams)
        );
    }

    invokeDescribeLaunchTemplateVersions(partialParams: ToOptional<{
      [K in keyof DescribeLaunchTemplateVersionsRequest]: (DescribeLaunchTemplateVersionsRequest)[K]
    }>): Request<DescribeLaunchTemplateVersionsResult, AWSError> {
        this.boot();
        return this.client.describeLaunchTemplateVersions(
          this.ops["DescribeLaunchTemplateVersions"].apply(partialParams)
        );
    }

    invokeDescribeLaunchTemplates(partialParams: ToOptional<{
      [K in keyof DescribeLaunchTemplatesRequest]: (DescribeLaunchTemplatesRequest)[K]
    }>): Request<DescribeLaunchTemplatesResult, AWSError> {
        this.boot();
        return this.client.describeLaunchTemplates(
          this.ops["DescribeLaunchTemplates"].apply(partialParams)
        );
    }

    invokeDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations(partialParams: ToOptional<{
      [K in keyof DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest]: (DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest)[K]
    }>): Request<DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult, AWSError> {
        this.boot();
        return this.client.describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations(
          this.ops["DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations"].apply(partialParams)
        );
    }

    invokeDescribeLocalGatewayRouteTableVpcAssociations(partialParams: ToOptional<{
      [K in keyof DescribeLocalGatewayRouteTableVpcAssociationsRequest]: (DescribeLocalGatewayRouteTableVpcAssociationsRequest)[K]
    }>): Request<DescribeLocalGatewayRouteTableVpcAssociationsResult, AWSError> {
        this.boot();
        return this.client.describeLocalGatewayRouteTableVpcAssociations(
          this.ops["DescribeLocalGatewayRouteTableVpcAssociations"].apply(partialParams)
        );
    }

    invokeDescribeLocalGatewayRouteTables(partialParams: ToOptional<{
      [K in keyof DescribeLocalGatewayRouteTablesRequest]: (DescribeLocalGatewayRouteTablesRequest)[K]
    }>): Request<DescribeLocalGatewayRouteTablesResult, AWSError> {
        this.boot();
        return this.client.describeLocalGatewayRouteTables(
          this.ops["DescribeLocalGatewayRouteTables"].apply(partialParams)
        );
    }

    invokeDescribeLocalGatewayVirtualInterfaceGroups(partialParams: ToOptional<{
      [K in keyof DescribeLocalGatewayVirtualInterfaceGroupsRequest]: (DescribeLocalGatewayVirtualInterfaceGroupsRequest)[K]
    }>): Request<DescribeLocalGatewayVirtualInterfaceGroupsResult, AWSError> {
        this.boot();
        return this.client.describeLocalGatewayVirtualInterfaceGroups(
          this.ops["DescribeLocalGatewayVirtualInterfaceGroups"].apply(partialParams)
        );
    }

    invokeDescribeLocalGatewayVirtualInterfaces(partialParams: ToOptional<{
      [K in keyof DescribeLocalGatewayVirtualInterfacesRequest]: (DescribeLocalGatewayVirtualInterfacesRequest)[K]
    }>): Request<DescribeLocalGatewayVirtualInterfacesResult, AWSError> {
        this.boot();
        return this.client.describeLocalGatewayVirtualInterfaces(
          this.ops["DescribeLocalGatewayVirtualInterfaces"].apply(partialParams)
        );
    }

    invokeDescribeLocalGateways(partialParams: ToOptional<{
      [K in keyof DescribeLocalGatewaysRequest]: (DescribeLocalGatewaysRequest)[K]
    }>): Request<DescribeLocalGatewaysResult, AWSError> {
        this.boot();
        return this.client.describeLocalGateways(
          this.ops["DescribeLocalGateways"].apply(partialParams)
        );
    }

    invokeDescribeManagedPrefixLists(partialParams: ToOptional<{
      [K in keyof DescribeManagedPrefixListsRequest]: (DescribeManagedPrefixListsRequest)[K]
    }>): Request<DescribeManagedPrefixListsResult, AWSError> {
        this.boot();
        return this.client.describeManagedPrefixLists(
          this.ops["DescribeManagedPrefixLists"].apply(partialParams)
        );
    }

    invokeDescribeMovingAddresses(partialParams: ToOptional<{
      [K in keyof DescribeMovingAddressesRequest]: (DescribeMovingAddressesRequest)[K]
    }>): Request<DescribeMovingAddressesResult, AWSError> {
        this.boot();
        return this.client.describeMovingAddresses(
          this.ops["DescribeMovingAddresses"].apply(partialParams)
        );
    }

    invokeDescribeNatGateways(partialParams: ToOptional<{
      [K in keyof DescribeNatGatewaysRequest]: (DescribeNatGatewaysRequest)[K]
    }>): Request<DescribeNatGatewaysResult, AWSError> {
        this.boot();
        return this.client.describeNatGateways(
          this.ops["DescribeNatGateways"].apply(partialParams)
        );
    }

    invokeDescribeNetworkAcls(partialParams: ToOptional<{
      [K in keyof DescribeNetworkAclsRequest]: (DescribeNetworkAclsRequest)[K]
    }>): Request<DescribeNetworkAclsResult, AWSError> {
        this.boot();
        return this.client.describeNetworkAcls(
          this.ops["DescribeNetworkAcls"].apply(partialParams)
        );
    }

    invokeDescribeNetworkInsightsAccessScopeAnalyses(partialParams: ToOptional<{
      [K in keyof DescribeNetworkInsightsAccessScopeAnalysesRequest]: (DescribeNetworkInsightsAccessScopeAnalysesRequest)[K]
    }>): Request<DescribeNetworkInsightsAccessScopeAnalysesResult, AWSError> {
        this.boot();
        return this.client.describeNetworkInsightsAccessScopeAnalyses(
          this.ops["DescribeNetworkInsightsAccessScopeAnalyses"].apply(partialParams)
        );
    }

    invokeDescribeNetworkInsightsAccessScopes(partialParams: ToOptional<{
      [K in keyof DescribeNetworkInsightsAccessScopesRequest]: (DescribeNetworkInsightsAccessScopesRequest)[K]
    }>): Request<DescribeNetworkInsightsAccessScopesResult, AWSError> {
        this.boot();
        return this.client.describeNetworkInsightsAccessScopes(
          this.ops["DescribeNetworkInsightsAccessScopes"].apply(partialParams)
        );
    }

    invokeDescribeNetworkInsightsAnalyses(partialParams: ToOptional<{
      [K in keyof DescribeNetworkInsightsAnalysesRequest]: (DescribeNetworkInsightsAnalysesRequest)[K]
    }>): Request<DescribeNetworkInsightsAnalysesResult, AWSError> {
        this.boot();
        return this.client.describeNetworkInsightsAnalyses(
          this.ops["DescribeNetworkInsightsAnalyses"].apply(partialParams)
        );
    }

    invokeDescribeNetworkInsightsPaths(partialParams: ToOptional<{
      [K in keyof DescribeNetworkInsightsPathsRequest]: (DescribeNetworkInsightsPathsRequest)[K]
    }>): Request<DescribeNetworkInsightsPathsResult, AWSError> {
        this.boot();
        return this.client.describeNetworkInsightsPaths(
          this.ops["DescribeNetworkInsightsPaths"].apply(partialParams)
        );
    }

    invokeDescribeNetworkInterfaceAttribute(partialParams: ToOptional<{
      [K in keyof DescribeNetworkInterfaceAttributeRequest]: (DescribeNetworkInterfaceAttributeRequest)[K]
    }>): Request<DescribeNetworkInterfaceAttributeResult, AWSError> {
        this.boot();
        return this.client.describeNetworkInterfaceAttribute(
          this.ops["DescribeNetworkInterfaceAttribute"].apply(partialParams)
        );
    }

    invokeDescribeNetworkInterfacePermissions(partialParams: ToOptional<{
      [K in keyof DescribeNetworkInterfacePermissionsRequest]: (DescribeNetworkInterfacePermissionsRequest)[K]
    }>): Request<DescribeNetworkInterfacePermissionsResult, AWSError> {
        this.boot();
        return this.client.describeNetworkInterfacePermissions(
          this.ops["DescribeNetworkInterfacePermissions"].apply(partialParams)
        );
    }

    invokeDescribeNetworkInterfaces(partialParams: ToOptional<{
      [K in keyof DescribeNetworkInterfacesRequest]: (DescribeNetworkInterfacesRequest)[K]
    }>): Request<DescribeNetworkInterfacesResult, AWSError> {
        this.boot();
        return this.client.describeNetworkInterfaces(
          this.ops["DescribeNetworkInterfaces"].apply(partialParams)
        );
    }

    invokeDescribePlacementGroups(partialParams: ToOptional<{
      [K in keyof DescribePlacementGroupsRequest]: (DescribePlacementGroupsRequest)[K]
    }>): Request<DescribePlacementGroupsResult, AWSError> {
        this.boot();
        return this.client.describePlacementGroups(
          this.ops["DescribePlacementGroups"].apply(partialParams)
        );
    }

    invokeDescribePrefixLists(partialParams: ToOptional<{
      [K in keyof DescribePrefixListsRequest]: (DescribePrefixListsRequest)[K]
    }>): Request<DescribePrefixListsResult, AWSError> {
        this.boot();
        return this.client.describePrefixLists(
          this.ops["DescribePrefixLists"].apply(partialParams)
        );
    }

    invokeDescribePrincipalIdFormat(partialParams: ToOptional<{
      [K in keyof DescribePrincipalIdFormatRequest]: (DescribePrincipalIdFormatRequest)[K]
    }>): Request<DescribePrincipalIdFormatResult, AWSError> {
        this.boot();
        return this.client.describePrincipalIdFormat(
          this.ops["DescribePrincipalIdFormat"].apply(partialParams)
        );
    }

    invokeDescribePublicIpv4Pools(partialParams: ToOptional<{
      [K in keyof DescribePublicIpv4PoolsRequest]: (DescribePublicIpv4PoolsRequest)[K]
    }>): Request<DescribePublicIpv4PoolsResult, AWSError> {
        this.boot();
        return this.client.describePublicIpv4Pools(
          this.ops["DescribePublicIpv4Pools"].apply(partialParams)
        );
    }

    invokeDescribeRegions(partialParams: ToOptional<{
      [K in keyof DescribeRegionsRequest]: (DescribeRegionsRequest)[K]
    }>): Request<DescribeRegionsResult, AWSError> {
        this.boot();
        return this.client.describeRegions(
          this.ops["DescribeRegions"].apply(partialParams)
        );
    }

    invokeDescribeReplaceRootVolumeTasks(partialParams: ToOptional<{
      [K in keyof DescribeReplaceRootVolumeTasksRequest]: (DescribeReplaceRootVolumeTasksRequest)[K]
    }>): Request<DescribeReplaceRootVolumeTasksResult, AWSError> {
        this.boot();
        return this.client.describeReplaceRootVolumeTasks(
          this.ops["DescribeReplaceRootVolumeTasks"].apply(partialParams)
        );
    }

    invokeDescribeReservedInstances(partialParams: ToOptional<{
      [K in keyof DescribeReservedInstancesRequest]: (DescribeReservedInstancesRequest)[K]
    }>): Request<DescribeReservedInstancesResult, AWSError> {
        this.boot();
        return this.client.describeReservedInstances(
          this.ops["DescribeReservedInstances"].apply(partialParams)
        );
    }

    invokeDescribeReservedInstancesListings(partialParams: ToOptional<{
      [K in keyof DescribeReservedInstancesListingsRequest]: (DescribeReservedInstancesListingsRequest)[K]
    }>): Request<DescribeReservedInstancesListingsResult, AWSError> {
        this.boot();
        return this.client.describeReservedInstancesListings(
          this.ops["DescribeReservedInstancesListings"].apply(partialParams)
        );
    }

    invokeDescribeReservedInstancesModifications(partialParams: ToOptional<{
      [K in keyof DescribeReservedInstancesModificationsRequest]: (DescribeReservedInstancesModificationsRequest)[K]
    }>): Request<DescribeReservedInstancesModificationsResult, AWSError> {
        this.boot();
        return this.client.describeReservedInstancesModifications(
          this.ops["DescribeReservedInstancesModifications"].apply(partialParams)
        );
    }

    invokeDescribeReservedInstancesOfferings(partialParams: ToOptional<{
      [K in keyof DescribeReservedInstancesOfferingsRequest]: (DescribeReservedInstancesOfferingsRequest)[K]
    }>): Request<DescribeReservedInstancesOfferingsResult, AWSError> {
        this.boot();
        return this.client.describeReservedInstancesOfferings(
          this.ops["DescribeReservedInstancesOfferings"].apply(partialParams)
        );
    }

    invokeDescribeRouteTables(partialParams: ToOptional<{
      [K in keyof DescribeRouteTablesRequest]: (DescribeRouteTablesRequest)[K]
    }>): Request<DescribeRouteTablesResult, AWSError> {
        this.boot();
        return this.client.describeRouteTables(
          this.ops["DescribeRouteTables"].apply(partialParams)
        );
    }

    invokeDescribeScheduledInstanceAvailability(partialParams: ToOptional<{
      [K in keyof DescribeScheduledInstanceAvailabilityRequest]: (DescribeScheduledInstanceAvailabilityRequest)[K]
    }>): Request<DescribeScheduledInstanceAvailabilityResult, AWSError> {
        this.boot();
        return this.client.describeScheduledInstanceAvailability(
          this.ops["DescribeScheduledInstanceAvailability"].apply(partialParams)
        );
    }

    invokeDescribeScheduledInstances(partialParams: ToOptional<{
      [K in keyof DescribeScheduledInstancesRequest]: (DescribeScheduledInstancesRequest)[K]
    }>): Request<DescribeScheduledInstancesResult, AWSError> {
        this.boot();
        return this.client.describeScheduledInstances(
          this.ops["DescribeScheduledInstances"].apply(partialParams)
        );
    }

    invokeDescribeSecurityGroupReferences(partialParams: ToOptional<{
      [K in keyof DescribeSecurityGroupReferencesRequest]: (DescribeSecurityGroupReferencesRequest)[K]
    }>): Request<DescribeSecurityGroupReferencesResult, AWSError> {
        this.boot();
        return this.client.describeSecurityGroupReferences(
          this.ops["DescribeSecurityGroupReferences"].apply(partialParams)
        );
    }

    invokeDescribeSecurityGroupRules(partialParams: ToOptional<{
      [K in keyof DescribeSecurityGroupRulesRequest]: (DescribeSecurityGroupRulesRequest)[K]
    }>): Request<DescribeSecurityGroupRulesResult, AWSError> {
        this.boot();
        return this.client.describeSecurityGroupRules(
          this.ops["DescribeSecurityGroupRules"].apply(partialParams)
        );
    }

    invokeDescribeSecurityGroups(partialParams: ToOptional<{
      [K in keyof DescribeSecurityGroupsRequest]: (DescribeSecurityGroupsRequest)[K]
    }>): Request<DescribeSecurityGroupsResult, AWSError> {
        this.boot();
        return this.client.describeSecurityGroups(
          this.ops["DescribeSecurityGroups"].apply(partialParams)
        );
    }

    invokeDescribeSnapshotAttribute(partialParams: ToOptional<{
      [K in keyof DescribeSnapshotAttributeRequest]: (DescribeSnapshotAttributeRequest)[K]
    }>): Request<DescribeSnapshotAttributeResult, AWSError> {
        this.boot();
        return this.client.describeSnapshotAttribute(
          this.ops["DescribeSnapshotAttribute"].apply(partialParams)
        );
    }

    invokeDescribeSnapshotTierStatus(partialParams: ToOptional<{
      [K in keyof DescribeSnapshotTierStatusRequest]: (DescribeSnapshotTierStatusRequest)[K]
    }>): Request<DescribeSnapshotTierStatusResult, AWSError> {
        this.boot();
        return this.client.describeSnapshotTierStatus(
          this.ops["DescribeSnapshotTierStatus"].apply(partialParams)
        );
    }

    invokeDescribeSnapshots(partialParams: ToOptional<{
      [K in keyof DescribeSnapshotsRequest]: (DescribeSnapshotsRequest)[K]
    }>): Request<DescribeSnapshotsResult, AWSError> {
        this.boot();
        return this.client.describeSnapshots(
          this.ops["DescribeSnapshots"].apply(partialParams)
        );
    }

    invokeDescribeSpotDatafeedSubscription(partialParams: ToOptional<{
      [K in keyof DescribeSpotDatafeedSubscriptionRequest]: (DescribeSpotDatafeedSubscriptionRequest)[K]
    }>): Request<DescribeSpotDatafeedSubscriptionResult, AWSError> {
        this.boot();
        return this.client.describeSpotDatafeedSubscription(
          this.ops["DescribeSpotDatafeedSubscription"].apply(partialParams)
        );
    }

    invokeDescribeSpotFleetInstances(partialParams: ToOptional<{
      [K in keyof DescribeSpotFleetInstancesRequest]: (DescribeSpotFleetInstancesRequest)[K]
    }>): Request<DescribeSpotFleetInstancesResponse, AWSError> {
        this.boot();
        return this.client.describeSpotFleetInstances(
          this.ops["DescribeSpotFleetInstances"].apply(partialParams)
        );
    }

    invokeDescribeSpotFleetRequestHistory(partialParams: ToOptional<{
      [K in keyof DescribeSpotFleetRequestHistoryRequest]: (DescribeSpotFleetRequestHistoryRequest)[K]
    }>): Request<DescribeSpotFleetRequestHistoryResponse, AWSError> {
        this.boot();
        return this.client.describeSpotFleetRequestHistory(
          this.ops["DescribeSpotFleetRequestHistory"].apply(partialParams)
        );
    }

    invokeDescribeSpotFleetRequests(partialParams: ToOptional<{
      [K in keyof DescribeSpotFleetRequestsRequest]: (DescribeSpotFleetRequestsRequest)[K]
    }>): Request<DescribeSpotFleetRequestsResponse, AWSError> {
        this.boot();
        return this.client.describeSpotFleetRequests(
          this.ops["DescribeSpotFleetRequests"].apply(partialParams)
        );
    }

    invokeDescribeSpotInstanceRequests(partialParams: ToOptional<{
      [K in keyof DescribeSpotInstanceRequestsRequest]: (DescribeSpotInstanceRequestsRequest)[K]
    }>): Request<DescribeSpotInstanceRequestsResult, AWSError> {
        this.boot();
        return this.client.describeSpotInstanceRequests(
          this.ops["DescribeSpotInstanceRequests"].apply(partialParams)
        );
    }

    invokeDescribeSpotPriceHistory(partialParams: ToOptional<{
      [K in keyof DescribeSpotPriceHistoryRequest]: (DescribeSpotPriceHistoryRequest)[K]
    }>): Request<DescribeSpotPriceHistoryResult, AWSError> {
        this.boot();
        return this.client.describeSpotPriceHistory(
          this.ops["DescribeSpotPriceHistory"].apply(partialParams)
        );
    }

    invokeDescribeStaleSecurityGroups(partialParams: ToOptional<{
      [K in keyof DescribeStaleSecurityGroupsRequest]: (DescribeStaleSecurityGroupsRequest)[K]
    }>): Request<DescribeStaleSecurityGroupsResult, AWSError> {
        this.boot();
        return this.client.describeStaleSecurityGroups(
          this.ops["DescribeStaleSecurityGroups"].apply(partialParams)
        );
    }

    invokeDescribeStoreImageTasks(partialParams: ToOptional<{
      [K in keyof DescribeStoreImageTasksRequest]: (DescribeStoreImageTasksRequest)[K]
    }>): Request<DescribeStoreImageTasksResult, AWSError> {
        this.boot();
        return this.client.describeStoreImageTasks(
          this.ops["DescribeStoreImageTasks"].apply(partialParams)
        );
    }

    invokeDescribeSubnets(partialParams: ToOptional<{
      [K in keyof DescribeSubnetsRequest]: (DescribeSubnetsRequest)[K]
    }>): Request<DescribeSubnetsResult, AWSError> {
        this.boot();
        return this.client.describeSubnets(
          this.ops["DescribeSubnets"].apply(partialParams)
        );
    }

    invokeDescribeTags(partialParams: ToOptional<{
      [K in keyof DescribeTagsRequest]: (DescribeTagsRequest)[K]
    }>): Request<DescribeTagsResult, AWSError> {
        this.boot();
        return this.client.describeTags(
          this.ops["DescribeTags"].apply(partialParams)
        );
    }

    invokeDescribeTrafficMirrorFilters(partialParams: ToOptional<{
      [K in keyof DescribeTrafficMirrorFiltersRequest]: (DescribeTrafficMirrorFiltersRequest)[K]
    }>): Request<DescribeTrafficMirrorFiltersResult, AWSError> {
        this.boot();
        return this.client.describeTrafficMirrorFilters(
          this.ops["DescribeTrafficMirrorFilters"].apply(partialParams)
        );
    }

    invokeDescribeTrafficMirrorSessions(partialParams: ToOptional<{
      [K in keyof DescribeTrafficMirrorSessionsRequest]: (DescribeTrafficMirrorSessionsRequest)[K]
    }>): Request<DescribeTrafficMirrorSessionsResult, AWSError> {
        this.boot();
        return this.client.describeTrafficMirrorSessions(
          this.ops["DescribeTrafficMirrorSessions"].apply(partialParams)
        );
    }

    invokeDescribeTrafficMirrorTargets(partialParams: ToOptional<{
      [K in keyof DescribeTrafficMirrorTargetsRequest]: (DescribeTrafficMirrorTargetsRequest)[K]
    }>): Request<DescribeTrafficMirrorTargetsResult, AWSError> {
        this.boot();
        return this.client.describeTrafficMirrorTargets(
          this.ops["DescribeTrafficMirrorTargets"].apply(partialParams)
        );
    }

    invokeDescribeTransitGatewayAttachments(partialParams: ToOptional<{
      [K in keyof DescribeTransitGatewayAttachmentsRequest]: (DescribeTransitGatewayAttachmentsRequest)[K]
    }>): Request<DescribeTransitGatewayAttachmentsResult, AWSError> {
        this.boot();
        return this.client.describeTransitGatewayAttachments(
          this.ops["DescribeTransitGatewayAttachments"].apply(partialParams)
        );
    }

    invokeDescribeTransitGatewayConnectPeers(partialParams: ToOptional<{
      [K in keyof DescribeTransitGatewayConnectPeersRequest]: (DescribeTransitGatewayConnectPeersRequest)[K]
    }>): Request<DescribeTransitGatewayConnectPeersResult, AWSError> {
        this.boot();
        return this.client.describeTransitGatewayConnectPeers(
          this.ops["DescribeTransitGatewayConnectPeers"].apply(partialParams)
        );
    }

    invokeDescribeTransitGatewayConnects(partialParams: ToOptional<{
      [K in keyof DescribeTransitGatewayConnectsRequest]: (DescribeTransitGatewayConnectsRequest)[K]
    }>): Request<DescribeTransitGatewayConnectsResult, AWSError> {
        this.boot();
        return this.client.describeTransitGatewayConnects(
          this.ops["DescribeTransitGatewayConnects"].apply(partialParams)
        );
    }

    invokeDescribeTransitGatewayMulticastDomains(partialParams: ToOptional<{
      [K in keyof DescribeTransitGatewayMulticastDomainsRequest]: (DescribeTransitGatewayMulticastDomainsRequest)[K]
    }>): Request<DescribeTransitGatewayMulticastDomainsResult, AWSError> {
        this.boot();
        return this.client.describeTransitGatewayMulticastDomains(
          this.ops["DescribeTransitGatewayMulticastDomains"].apply(partialParams)
        );
    }

    invokeDescribeTransitGatewayPeeringAttachments(partialParams: ToOptional<{
      [K in keyof DescribeTransitGatewayPeeringAttachmentsRequest]: (DescribeTransitGatewayPeeringAttachmentsRequest)[K]
    }>): Request<DescribeTransitGatewayPeeringAttachmentsResult, AWSError> {
        this.boot();
        return this.client.describeTransitGatewayPeeringAttachments(
          this.ops["DescribeTransitGatewayPeeringAttachments"].apply(partialParams)
        );
    }

    invokeDescribeTransitGatewayRouteTables(partialParams: ToOptional<{
      [K in keyof DescribeTransitGatewayRouteTablesRequest]: (DescribeTransitGatewayRouteTablesRequest)[K]
    }>): Request<DescribeTransitGatewayRouteTablesResult, AWSError> {
        this.boot();
        return this.client.describeTransitGatewayRouteTables(
          this.ops["DescribeTransitGatewayRouteTables"].apply(partialParams)
        );
    }

    invokeDescribeTransitGatewayVpcAttachments(partialParams: ToOptional<{
      [K in keyof DescribeTransitGatewayVpcAttachmentsRequest]: (DescribeTransitGatewayVpcAttachmentsRequest)[K]
    }>): Request<DescribeTransitGatewayVpcAttachmentsResult, AWSError> {
        this.boot();
        return this.client.describeTransitGatewayVpcAttachments(
          this.ops["DescribeTransitGatewayVpcAttachments"].apply(partialParams)
        );
    }

    invokeDescribeTransitGateways(partialParams: ToOptional<{
      [K in keyof DescribeTransitGatewaysRequest]: (DescribeTransitGatewaysRequest)[K]
    }>): Request<DescribeTransitGatewaysResult, AWSError> {
        this.boot();
        return this.client.describeTransitGateways(
          this.ops["DescribeTransitGateways"].apply(partialParams)
        );
    }

    invokeDescribeTrunkInterfaceAssociations(partialParams: ToOptional<{
      [K in keyof DescribeTrunkInterfaceAssociationsRequest]: (DescribeTrunkInterfaceAssociationsRequest)[K]
    }>): Request<DescribeTrunkInterfaceAssociationsResult, AWSError> {
        this.boot();
        return this.client.describeTrunkInterfaceAssociations(
          this.ops["DescribeTrunkInterfaceAssociations"].apply(partialParams)
        );
    }

    invokeDescribeVolumeAttribute(partialParams: ToOptional<{
      [K in keyof DescribeVolumeAttributeRequest]: (DescribeVolumeAttributeRequest)[K]
    }>): Request<DescribeVolumeAttributeResult, AWSError> {
        this.boot();
        return this.client.describeVolumeAttribute(
          this.ops["DescribeVolumeAttribute"].apply(partialParams)
        );
    }

    invokeDescribeVolumeStatus(partialParams: ToOptional<{
      [K in keyof DescribeVolumeStatusRequest]: (DescribeVolumeStatusRequest)[K]
    }>): Request<DescribeVolumeStatusResult, AWSError> {
        this.boot();
        return this.client.describeVolumeStatus(
          this.ops["DescribeVolumeStatus"].apply(partialParams)
        );
    }

    invokeDescribeVolumes(partialParams: ToOptional<{
      [K in keyof DescribeVolumesRequest]: (DescribeVolumesRequest)[K]
    }>): Request<DescribeVolumesResult, AWSError> {
        this.boot();
        return this.client.describeVolumes(
          this.ops["DescribeVolumes"].apply(partialParams)
        );
    }

    invokeDescribeVolumesModifications(partialParams: ToOptional<{
      [K in keyof DescribeVolumesModificationsRequest]: (DescribeVolumesModificationsRequest)[K]
    }>): Request<DescribeVolumesModificationsResult, AWSError> {
        this.boot();
        return this.client.describeVolumesModifications(
          this.ops["DescribeVolumesModifications"].apply(partialParams)
        );
    }

    invokeDescribeVpcAttribute(partialParams: ToOptional<{
      [K in keyof DescribeVpcAttributeRequest]: (DescribeVpcAttributeRequest)[K]
    }>): Request<DescribeVpcAttributeResult, AWSError> {
        this.boot();
        return this.client.describeVpcAttribute(
          this.ops["DescribeVpcAttribute"].apply(partialParams)
        );
    }

    invokeDescribeVpcClassicLink(partialParams: ToOptional<{
      [K in keyof DescribeVpcClassicLinkRequest]: (DescribeVpcClassicLinkRequest)[K]
    }>): Request<DescribeVpcClassicLinkResult, AWSError> {
        this.boot();
        return this.client.describeVpcClassicLink(
          this.ops["DescribeVpcClassicLink"].apply(partialParams)
        );
    }

    invokeDescribeVpcClassicLinkDnsSupport(partialParams: ToOptional<{
      [K in keyof DescribeVpcClassicLinkDnsSupportRequest]: (DescribeVpcClassicLinkDnsSupportRequest)[K]
    }>): Request<DescribeVpcClassicLinkDnsSupportResult, AWSError> {
        this.boot();
        return this.client.describeVpcClassicLinkDnsSupport(
          this.ops["DescribeVpcClassicLinkDnsSupport"].apply(partialParams)
        );
    }

    invokeDescribeVpcEndpointConnectionNotifications(partialParams: ToOptional<{
      [K in keyof DescribeVpcEndpointConnectionNotificationsRequest]: (DescribeVpcEndpointConnectionNotificationsRequest)[K]
    }>): Request<DescribeVpcEndpointConnectionNotificationsResult, AWSError> {
        this.boot();
        return this.client.describeVpcEndpointConnectionNotifications(
          this.ops["DescribeVpcEndpointConnectionNotifications"].apply(partialParams)
        );
    }

    invokeDescribeVpcEndpointConnections(partialParams: ToOptional<{
      [K in keyof DescribeVpcEndpointConnectionsRequest]: (DescribeVpcEndpointConnectionsRequest)[K]
    }>): Request<DescribeVpcEndpointConnectionsResult, AWSError> {
        this.boot();
        return this.client.describeVpcEndpointConnections(
          this.ops["DescribeVpcEndpointConnections"].apply(partialParams)
        );
    }

    invokeDescribeVpcEndpointServiceConfigurations(partialParams: ToOptional<{
      [K in keyof DescribeVpcEndpointServiceConfigurationsRequest]: (DescribeVpcEndpointServiceConfigurationsRequest)[K]
    }>): Request<DescribeVpcEndpointServiceConfigurationsResult, AWSError> {
        this.boot();
        return this.client.describeVpcEndpointServiceConfigurations(
          this.ops["DescribeVpcEndpointServiceConfigurations"].apply(partialParams)
        );
    }

    invokeDescribeVpcEndpointServicePermissions(partialParams: ToOptional<{
      [K in keyof DescribeVpcEndpointServicePermissionsRequest]: (DescribeVpcEndpointServicePermissionsRequest)[K]
    }>): Request<DescribeVpcEndpointServicePermissionsResult, AWSError> {
        this.boot();
        return this.client.describeVpcEndpointServicePermissions(
          this.ops["DescribeVpcEndpointServicePermissions"].apply(partialParams)
        );
    }

    invokeDescribeVpcEndpointServices(partialParams: ToOptional<{
      [K in keyof DescribeVpcEndpointServicesRequest]: (DescribeVpcEndpointServicesRequest)[K]
    }>): Request<DescribeVpcEndpointServicesResult, AWSError> {
        this.boot();
        return this.client.describeVpcEndpointServices(
          this.ops["DescribeVpcEndpointServices"].apply(partialParams)
        );
    }

    invokeDescribeVpcEndpoints(partialParams: ToOptional<{
      [K in keyof DescribeVpcEndpointsRequest]: (DescribeVpcEndpointsRequest)[K]
    }>): Request<DescribeVpcEndpointsResult, AWSError> {
        this.boot();
        return this.client.describeVpcEndpoints(
          this.ops["DescribeVpcEndpoints"].apply(partialParams)
        );
    }

    invokeDescribeVpcPeeringConnections(partialParams: ToOptional<{
      [K in keyof DescribeVpcPeeringConnectionsRequest]: (DescribeVpcPeeringConnectionsRequest)[K]
    }>): Request<DescribeVpcPeeringConnectionsResult, AWSError> {
        this.boot();
        return this.client.describeVpcPeeringConnections(
          this.ops["DescribeVpcPeeringConnections"].apply(partialParams)
        );
    }

    invokeDescribeVpcs(partialParams: ToOptional<{
      [K in keyof DescribeVpcsRequest]: (DescribeVpcsRequest)[K]
    }>): Request<DescribeVpcsResult, AWSError> {
        this.boot();
        return this.client.describeVpcs(
          this.ops["DescribeVpcs"].apply(partialParams)
        );
    }

    invokeDescribeVpnConnections(partialParams: ToOptional<{
      [K in keyof DescribeVpnConnectionsRequest]: (DescribeVpnConnectionsRequest)[K]
    }>): Request<DescribeVpnConnectionsResult, AWSError> {
        this.boot();
        return this.client.describeVpnConnections(
          this.ops["DescribeVpnConnections"].apply(partialParams)
        );
    }

    invokeDescribeVpnGateways(partialParams: ToOptional<{
      [K in keyof DescribeVpnGatewaysRequest]: (DescribeVpnGatewaysRequest)[K]
    }>): Request<DescribeVpnGatewaysResult, AWSError> {
        this.boot();
        return this.client.describeVpnGateways(
          this.ops["DescribeVpnGateways"].apply(partialParams)
        );
    }

    invokeDetachClassicLinkVpc(partialParams: ToOptional<{
      [K in keyof DetachClassicLinkVpcRequest]: (DetachClassicLinkVpcRequest)[K]
    }>): Request<DetachClassicLinkVpcResult, AWSError> {
        this.boot();
        return this.client.detachClassicLinkVpc(
          this.ops["DetachClassicLinkVpc"].apply(partialParams)
        );
    }

    invokeDetachVolume(partialParams: ToOptional<{
      [K in keyof DetachVolumeRequest]: (DetachVolumeRequest)[K]
    }>): Request<VolumeAttachment, AWSError> {
        this.boot();
        return this.client.detachVolume(
          this.ops["DetachVolume"].apply(partialParams)
        );
    }

    invokeDisableEbsEncryptionByDefault(partialParams: ToOptional<{
      [K in keyof DisableEbsEncryptionByDefaultRequest]: (DisableEbsEncryptionByDefaultRequest)[K]
    }>): Request<DisableEbsEncryptionByDefaultResult, AWSError> {
        this.boot();
        return this.client.disableEbsEncryptionByDefault(
          this.ops["DisableEbsEncryptionByDefault"].apply(partialParams)
        );
    }

    invokeDisableFastLaunch(partialParams: ToOptional<{
      [K in keyof DisableFastLaunchRequest & keyof Omit<DisableFastLaunchRequest, "ImageId">]: (DisableFastLaunchRequest)[K]
    }>): Request<DisableFastLaunchResult, AWSError> {
        this.boot();
        return this.client.disableFastLaunch(
          this.ops["DisableFastLaunch"].apply(partialParams)
        );
    }

    invokeDisableFastSnapshotRestores(partialParams: ToOptional<{
      [K in keyof DisableFastSnapshotRestoresRequest]: (DisableFastSnapshotRestoresRequest)[K]
    }>): Request<DisableFastSnapshotRestoresResult, AWSError> {
        this.boot();
        return this.client.disableFastSnapshotRestores(
          this.ops["DisableFastSnapshotRestores"].apply(partialParams)
        );
    }

    invokeDisableImageDeprecation(partialParams: ToOptional<{
      [K in keyof DisableImageDeprecationRequest & keyof Omit<DisableImageDeprecationRequest, "ImageId">]: (DisableImageDeprecationRequest)[K]
    }>): Request<DisableImageDeprecationResult, AWSError> {
        this.boot();
        return this.client.disableImageDeprecation(
          this.ops["DisableImageDeprecation"].apply(partialParams)
        );
    }

    invokeDisableIpamOrganizationAdminAccount(partialParams: ToOptional<{
      [K in keyof DisableIpamOrganizationAdminAccountRequest]: (DisableIpamOrganizationAdminAccountRequest)[K]
    }>): Request<DisableIpamOrganizationAdminAccountResult, AWSError> {
        this.boot();
        return this.client.disableIpamOrganizationAdminAccount(
          this.ops["DisableIpamOrganizationAdminAccount"].apply(partialParams)
        );
    }

    invokeDisableSerialConsoleAccess(partialParams: ToOptional<{
      [K in keyof DisableSerialConsoleAccessRequest]: (DisableSerialConsoleAccessRequest)[K]
    }>): Request<DisableSerialConsoleAccessResult, AWSError> {
        this.boot();
        return this.client.disableSerialConsoleAccess(
          this.ops["DisableSerialConsoleAccess"].apply(partialParams)
        );
    }

    invokeDisableTransitGatewayRouteTablePropagation(partialParams: ToOptional<{
      [K in keyof DisableTransitGatewayRouteTablePropagationRequest]: (DisableTransitGatewayRouteTablePropagationRequest)[K]
    }>): Request<DisableTransitGatewayRouteTablePropagationResult, AWSError> {
        this.boot();
        return this.client.disableTransitGatewayRouteTablePropagation(
          this.ops["DisableTransitGatewayRouteTablePropagation"].apply(partialParams)
        );
    }

    invokeDisableVpcClassicLink(partialParams: ToOptional<{
      [K in keyof DisableVpcClassicLinkRequest]: (DisableVpcClassicLinkRequest)[K]
    }>): Request<DisableVpcClassicLinkResult, AWSError> {
        this.boot();
        return this.client.disableVpcClassicLink(
          this.ops["DisableVpcClassicLink"].apply(partialParams)
        );
    }

    invokeDisableVpcClassicLinkDnsSupport(partialParams: ToOptional<{
      [K in keyof DisableVpcClassicLinkDnsSupportRequest]: (DisableVpcClassicLinkDnsSupportRequest)[K]
    }>): Request<DisableVpcClassicLinkDnsSupportResult, AWSError> {
        this.boot();
        return this.client.disableVpcClassicLinkDnsSupport(
          this.ops["DisableVpcClassicLinkDnsSupport"].apply(partialParams)
        );
    }

    invokeDisassociateClientVpnTargetNetwork(partialParams: ToOptional<{
      [K in keyof DisassociateClientVpnTargetNetworkRequest]: (DisassociateClientVpnTargetNetworkRequest)[K]
    }>): Request<DisassociateClientVpnTargetNetworkResult, AWSError> {
        this.boot();
        return this.client.disassociateClientVpnTargetNetwork(
          this.ops["DisassociateClientVpnTargetNetwork"].apply(partialParams)
        );
    }

    invokeDisassociateEnclaveCertificateIamRole(partialParams: ToOptional<{
      [K in keyof DisassociateEnclaveCertificateIamRoleRequest]: (DisassociateEnclaveCertificateIamRoleRequest)[K]
    }>): Request<DisassociateEnclaveCertificateIamRoleResult, AWSError> {
        this.boot();
        return this.client.disassociateEnclaveCertificateIamRole(
          this.ops["DisassociateEnclaveCertificateIamRole"].apply(partialParams)
        );
    }

    invokeDisassociateIamInstanceProfile(partialParams: ToOptional<{
      [K in keyof DisassociateIamInstanceProfileRequest]: (DisassociateIamInstanceProfileRequest)[K]
    }>): Request<DisassociateIamInstanceProfileResult, AWSError> {
        this.boot();
        return this.client.disassociateIamInstanceProfile(
          this.ops["DisassociateIamInstanceProfile"].apply(partialParams)
        );
    }

    invokeDisassociateInstanceEventWindow(partialParams: ToOptional<{
      [K in keyof DisassociateInstanceEventWindowRequest]: (DisassociateInstanceEventWindowRequest)[K]
    }>): Request<DisassociateInstanceEventWindowResult, AWSError> {
        this.boot();
        return this.client.disassociateInstanceEventWindow(
          this.ops["DisassociateInstanceEventWindow"].apply(partialParams)
        );
    }

    invokeDisassociateSubnetCidrBlock(partialParams: ToOptional<{
      [K in keyof DisassociateSubnetCidrBlockRequest]: (DisassociateSubnetCidrBlockRequest)[K]
    }>): Request<DisassociateSubnetCidrBlockResult, AWSError> {
        this.boot();
        return this.client.disassociateSubnetCidrBlock(
          this.ops["DisassociateSubnetCidrBlock"].apply(partialParams)
        );
    }

    invokeDisassociateTransitGatewayMulticastDomain(partialParams: ToOptional<{
      [K in keyof DisassociateTransitGatewayMulticastDomainRequest]: (DisassociateTransitGatewayMulticastDomainRequest)[K]
    }>): Request<DisassociateTransitGatewayMulticastDomainResult, AWSError> {
        this.boot();
        return this.client.disassociateTransitGatewayMulticastDomain(
          this.ops["DisassociateTransitGatewayMulticastDomain"].apply(partialParams)
        );
    }

    invokeDisassociateTransitGatewayRouteTable(partialParams: ToOptional<{
      [K in keyof DisassociateTransitGatewayRouteTableRequest]: (DisassociateTransitGatewayRouteTableRequest)[K]
    }>): Request<DisassociateTransitGatewayRouteTableResult, AWSError> {
        this.boot();
        return this.client.disassociateTransitGatewayRouteTable(
          this.ops["DisassociateTransitGatewayRouteTable"].apply(partialParams)
        );
    }

    invokeDisassociateTrunkInterface(partialParams: ToOptional<{
      [K in keyof DisassociateTrunkInterfaceRequest]: (DisassociateTrunkInterfaceRequest)[K]
    }>): Request<DisassociateTrunkInterfaceResult, AWSError> {
        this.boot();
        return this.client.disassociateTrunkInterface(
          this.ops["DisassociateTrunkInterface"].apply(partialParams)
        );
    }

    invokeDisassociateVpcCidrBlock(partialParams: ToOptional<{
      [K in keyof DisassociateVpcCidrBlockRequest]: (DisassociateVpcCidrBlockRequest)[K]
    }>): Request<DisassociateVpcCidrBlockResult, AWSError> {
        this.boot();
        return this.client.disassociateVpcCidrBlock(
          this.ops["DisassociateVpcCidrBlock"].apply(partialParams)
        );
    }

    invokeEnableEbsEncryptionByDefault(partialParams: ToOptional<{
      [K in keyof EnableEbsEncryptionByDefaultRequest]: (EnableEbsEncryptionByDefaultRequest)[K]
    }>): Request<EnableEbsEncryptionByDefaultResult, AWSError> {
        this.boot();
        return this.client.enableEbsEncryptionByDefault(
          this.ops["EnableEbsEncryptionByDefault"].apply(partialParams)
        );
    }

    invokeEnableFastLaunch(partialParams: ToOptional<{
      [K in keyof EnableFastLaunchRequest & keyof Omit<EnableFastLaunchRequest, "ImageId">]: (EnableFastLaunchRequest)[K]
    }>): Request<EnableFastLaunchResult, AWSError> {
        this.boot();
        return this.client.enableFastLaunch(
          this.ops["EnableFastLaunch"].apply(partialParams)
        );
    }

    invokeEnableFastSnapshotRestores(partialParams: ToOptional<{
      [K in keyof EnableFastSnapshotRestoresRequest]: (EnableFastSnapshotRestoresRequest)[K]
    }>): Request<EnableFastSnapshotRestoresResult, AWSError> {
        this.boot();
        return this.client.enableFastSnapshotRestores(
          this.ops["EnableFastSnapshotRestores"].apply(partialParams)
        );
    }

    invokeEnableImageDeprecation(partialParams: ToOptional<{
      [K in keyof EnableImageDeprecationRequest & keyof Omit<EnableImageDeprecationRequest, "ImageId">]: (EnableImageDeprecationRequest)[K]
    }>): Request<EnableImageDeprecationResult, AWSError> {
        this.boot();
        return this.client.enableImageDeprecation(
          this.ops["EnableImageDeprecation"].apply(partialParams)
        );
    }

    invokeEnableIpamOrganizationAdminAccount(partialParams: ToOptional<{
      [K in keyof EnableIpamOrganizationAdminAccountRequest]: (EnableIpamOrganizationAdminAccountRequest)[K]
    }>): Request<EnableIpamOrganizationAdminAccountResult, AWSError> {
        this.boot();
        return this.client.enableIpamOrganizationAdminAccount(
          this.ops["EnableIpamOrganizationAdminAccount"].apply(partialParams)
        );
    }

    invokeEnableSerialConsoleAccess(partialParams: ToOptional<{
      [K in keyof EnableSerialConsoleAccessRequest]: (EnableSerialConsoleAccessRequest)[K]
    }>): Request<EnableSerialConsoleAccessResult, AWSError> {
        this.boot();
        return this.client.enableSerialConsoleAccess(
          this.ops["EnableSerialConsoleAccess"].apply(partialParams)
        );
    }

    invokeEnableTransitGatewayRouteTablePropagation(partialParams: ToOptional<{
      [K in keyof EnableTransitGatewayRouteTablePropagationRequest]: (EnableTransitGatewayRouteTablePropagationRequest)[K]
    }>): Request<EnableTransitGatewayRouteTablePropagationResult, AWSError> {
        this.boot();
        return this.client.enableTransitGatewayRouteTablePropagation(
          this.ops["EnableTransitGatewayRouteTablePropagation"].apply(partialParams)
        );
    }

    invokeEnableVpcClassicLink(partialParams: ToOptional<{
      [K in keyof EnableVpcClassicLinkRequest]: (EnableVpcClassicLinkRequest)[K]
    }>): Request<EnableVpcClassicLinkResult, AWSError> {
        this.boot();
        return this.client.enableVpcClassicLink(
          this.ops["EnableVpcClassicLink"].apply(partialParams)
        );
    }

    invokeEnableVpcClassicLinkDnsSupport(partialParams: ToOptional<{
      [K in keyof EnableVpcClassicLinkDnsSupportRequest]: (EnableVpcClassicLinkDnsSupportRequest)[K]
    }>): Request<EnableVpcClassicLinkDnsSupportResult, AWSError> {
        this.boot();
        return this.client.enableVpcClassicLinkDnsSupport(
          this.ops["EnableVpcClassicLinkDnsSupport"].apply(partialParams)
        );
    }

    invokeExportClientVpnClientCertificateRevocationList(partialParams: ToOptional<{
      [K in keyof ExportClientVpnClientCertificateRevocationListRequest]: (ExportClientVpnClientCertificateRevocationListRequest)[K]
    }>): Request<ExportClientVpnClientCertificateRevocationListResult, AWSError> {
        this.boot();
        return this.client.exportClientVpnClientCertificateRevocationList(
          this.ops["ExportClientVpnClientCertificateRevocationList"].apply(partialParams)
        );
    }

    invokeExportClientVpnClientConfiguration(partialParams: ToOptional<{
      [K in keyof ExportClientVpnClientConfigurationRequest]: (ExportClientVpnClientConfigurationRequest)[K]
    }>): Request<ExportClientVpnClientConfigurationResult, AWSError> {
        this.boot();
        return this.client.exportClientVpnClientConfiguration(
          this.ops["ExportClientVpnClientConfiguration"].apply(partialParams)
        );
    }

    invokeExportImage(partialParams: ToOptional<{
      [K in keyof ExportImageRequest & keyof Omit<ExportImageRequest, "ImageId">]: (ExportImageRequest)[K]
    }>): Request<ExportImageResult, AWSError> {
        this.boot();
        return this.client.exportImage(
          this.ops["ExportImage"].apply(partialParams)
        );
    }

    invokeExportTransitGatewayRoutes(partialParams: ToOptional<{
      [K in keyof ExportTransitGatewayRoutesRequest]: (ExportTransitGatewayRoutesRequest)[K]
    }>): Request<ExportTransitGatewayRoutesResult, AWSError> {
        this.boot();
        return this.client.exportTransitGatewayRoutes(
          this.ops["ExportTransitGatewayRoutes"].apply(partialParams)
        );
    }

    invokeGetAssociatedEnclaveCertificateIamRoles(partialParams: ToOptional<{
      [K in keyof GetAssociatedEnclaveCertificateIamRolesRequest]: (GetAssociatedEnclaveCertificateIamRolesRequest)[K]
    }>): Request<GetAssociatedEnclaveCertificateIamRolesResult, AWSError> {
        this.boot();
        return this.client.getAssociatedEnclaveCertificateIamRoles(
          this.ops["GetAssociatedEnclaveCertificateIamRoles"].apply(partialParams)
        );
    }

    invokeGetAssociatedIpv6PoolCidrs(partialParams: ToOptional<{
      [K in keyof GetAssociatedIpv6PoolCidrsRequest]: (GetAssociatedIpv6PoolCidrsRequest)[K]
    }>): Request<GetAssociatedIpv6PoolCidrsResult, AWSError> {
        this.boot();
        return this.client.getAssociatedIpv6PoolCidrs(
          this.ops["GetAssociatedIpv6PoolCidrs"].apply(partialParams)
        );
    }

    invokeGetCapacityReservationUsage(partialParams: ToOptional<{
      [K in keyof GetCapacityReservationUsageRequest]: (GetCapacityReservationUsageRequest)[K]
    }>): Request<GetCapacityReservationUsageResult, AWSError> {
        this.boot();
        return this.client.getCapacityReservationUsage(
          this.ops["GetCapacityReservationUsage"].apply(partialParams)
        );
    }

    invokeGetCoipPoolUsage(partialParams: ToOptional<{
      [K in keyof GetCoipPoolUsageRequest]: (GetCoipPoolUsageRequest)[K]
    }>): Request<GetCoipPoolUsageResult, AWSError> {
        this.boot();
        return this.client.getCoipPoolUsage(
          this.ops["GetCoipPoolUsage"].apply(partialParams)
        );
    }

    invokeGetConsoleOutput(partialParams: ToOptional<{
      [K in keyof GetConsoleOutputRequest]: (GetConsoleOutputRequest)[K]
    }>): Request<GetConsoleOutputResult, AWSError> {
        this.boot();
        return this.client.getConsoleOutput(
          this.ops["GetConsoleOutput"].apply(partialParams)
        );
    }

    invokeGetConsoleScreenshot(partialParams: ToOptional<{
      [K in keyof GetConsoleScreenshotRequest]: (GetConsoleScreenshotRequest)[K]
    }>): Request<GetConsoleScreenshotResult, AWSError> {
        this.boot();
        return this.client.getConsoleScreenshot(
          this.ops["GetConsoleScreenshot"].apply(partialParams)
        );
    }

    invokeGetDefaultCreditSpecification(partialParams: ToOptional<{
      [K in keyof GetDefaultCreditSpecificationRequest]: (GetDefaultCreditSpecificationRequest)[K]
    }>): Request<GetDefaultCreditSpecificationResult, AWSError> {
        this.boot();
        return this.client.getDefaultCreditSpecification(
          this.ops["GetDefaultCreditSpecification"].apply(partialParams)
        );
    }

    invokeGetEbsDefaultKmsKeyId(partialParams: ToOptional<{
      [K in keyof GetEbsDefaultKmsKeyIdRequest]: (GetEbsDefaultKmsKeyIdRequest)[K]
    }>): Request<GetEbsDefaultKmsKeyIdResult, AWSError> {
        this.boot();
        return this.client.getEbsDefaultKmsKeyId(
          this.ops["GetEbsDefaultKmsKeyId"].apply(partialParams)
        );
    }

    invokeGetEbsEncryptionByDefault(partialParams: ToOptional<{
      [K in keyof GetEbsEncryptionByDefaultRequest]: (GetEbsEncryptionByDefaultRequest)[K]
    }>): Request<GetEbsEncryptionByDefaultResult, AWSError> {
        this.boot();
        return this.client.getEbsEncryptionByDefault(
          this.ops["GetEbsEncryptionByDefault"].apply(partialParams)
        );
    }

    invokeGetFlowLogsIntegrationTemplate(partialParams: ToOptional<{
      [K in keyof GetFlowLogsIntegrationTemplateRequest]: (GetFlowLogsIntegrationTemplateRequest)[K]
    }>): Request<GetFlowLogsIntegrationTemplateResult, AWSError> {
        this.boot();
        return this.client.getFlowLogsIntegrationTemplate(
          this.ops["GetFlowLogsIntegrationTemplate"].apply(partialParams)
        );
    }

    invokeGetGroupsForCapacityReservation(partialParams: ToOptional<{
      [K in keyof GetGroupsForCapacityReservationRequest]: (GetGroupsForCapacityReservationRequest)[K]
    }>): Request<GetGroupsForCapacityReservationResult, AWSError> {
        this.boot();
        return this.client.getGroupsForCapacityReservation(
          this.ops["GetGroupsForCapacityReservation"].apply(partialParams)
        );
    }

    invokeGetHostReservationPurchasePreview(partialParams: ToOptional<{
      [K in keyof GetHostReservationPurchasePreviewRequest]: (GetHostReservationPurchasePreviewRequest)[K]
    }>): Request<GetHostReservationPurchasePreviewResult, AWSError> {
        this.boot();
        return this.client.getHostReservationPurchasePreview(
          this.ops["GetHostReservationPurchasePreview"].apply(partialParams)
        );
    }

    invokeGetInstanceTypesFromInstanceRequirements(partialParams: ToOptional<{
      [K in keyof GetInstanceTypesFromInstanceRequirementsRequest]: (GetInstanceTypesFromInstanceRequirementsRequest)[K]
    }>): Request<GetInstanceTypesFromInstanceRequirementsResult, AWSError> {
        this.boot();
        return this.client.getInstanceTypesFromInstanceRequirements(
          this.ops["GetInstanceTypesFromInstanceRequirements"].apply(partialParams)
        );
    }

    invokeGetIpamAddressHistory(partialParams: ToOptional<{
      [K in keyof GetIpamAddressHistoryRequest]: (GetIpamAddressHistoryRequest)[K]
    }>): Request<GetIpamAddressHistoryResult, AWSError> {
        this.boot();
        return this.client.getIpamAddressHistory(
          this.ops["GetIpamAddressHistory"].apply(partialParams)
        );
    }

    invokeGetIpamPoolAllocations(partialParams: ToOptional<{
      [K in keyof GetIpamPoolAllocationsRequest]: (GetIpamPoolAllocationsRequest)[K]
    }>): Request<GetIpamPoolAllocationsResult, AWSError> {
        this.boot();
        return this.client.getIpamPoolAllocations(
          this.ops["GetIpamPoolAllocations"].apply(partialParams)
        );
    }

    invokeGetIpamPoolCidrs(partialParams: ToOptional<{
      [K in keyof GetIpamPoolCidrsRequest]: (GetIpamPoolCidrsRequest)[K]
    }>): Request<GetIpamPoolCidrsResult, AWSError> {
        this.boot();
        return this.client.getIpamPoolCidrs(
          this.ops["GetIpamPoolCidrs"].apply(partialParams)
        );
    }

    invokeGetIpamResourceCidrs(partialParams: ToOptional<{
      [K in keyof GetIpamResourceCidrsRequest]: (GetIpamResourceCidrsRequest)[K]
    }>): Request<GetIpamResourceCidrsResult, AWSError> {
        this.boot();
        return this.client.getIpamResourceCidrs(
          this.ops["GetIpamResourceCidrs"].apply(partialParams)
        );
    }

    invokeGetLaunchTemplateData(partialParams: ToOptional<{
      [K in keyof GetLaunchTemplateDataRequest]: (GetLaunchTemplateDataRequest)[K]
    }>): Request<GetLaunchTemplateDataResult, AWSError> {
        this.boot();
        return this.client.getLaunchTemplateData(
          this.ops["GetLaunchTemplateData"].apply(partialParams)
        );
    }

    invokeGetManagedPrefixListAssociations(partialParams: ToOptional<{
      [K in keyof GetManagedPrefixListAssociationsRequest]: (GetManagedPrefixListAssociationsRequest)[K]
    }>): Request<GetManagedPrefixListAssociationsResult, AWSError> {
        this.boot();
        return this.client.getManagedPrefixListAssociations(
          this.ops["GetManagedPrefixListAssociations"].apply(partialParams)
        );
    }

    invokeGetManagedPrefixListEntries(partialParams: ToOptional<{
      [K in keyof GetManagedPrefixListEntriesRequest]: (GetManagedPrefixListEntriesRequest)[K]
    }>): Request<GetManagedPrefixListEntriesResult, AWSError> {
        this.boot();
        return this.client.getManagedPrefixListEntries(
          this.ops["GetManagedPrefixListEntries"].apply(partialParams)
        );
    }

    invokeGetNetworkInsightsAccessScopeAnalysisFindings(partialParams: ToOptional<{
      [K in keyof GetNetworkInsightsAccessScopeAnalysisFindingsRequest]: (GetNetworkInsightsAccessScopeAnalysisFindingsRequest)[K]
    }>): Request<GetNetworkInsightsAccessScopeAnalysisFindingsResult, AWSError> {
        this.boot();
        return this.client.getNetworkInsightsAccessScopeAnalysisFindings(
          this.ops["GetNetworkInsightsAccessScopeAnalysisFindings"].apply(partialParams)
        );
    }

    invokeGetNetworkInsightsAccessScopeContent(partialParams: ToOptional<{
      [K in keyof GetNetworkInsightsAccessScopeContentRequest]: (GetNetworkInsightsAccessScopeContentRequest)[K]
    }>): Request<GetNetworkInsightsAccessScopeContentResult, AWSError> {
        this.boot();
        return this.client.getNetworkInsightsAccessScopeContent(
          this.ops["GetNetworkInsightsAccessScopeContent"].apply(partialParams)
        );
    }

    invokeGetPasswordData(partialParams: ToOptional<{
      [K in keyof GetPasswordDataRequest]: (GetPasswordDataRequest)[K]
    }>): Request<GetPasswordDataResult, AWSError> {
        this.boot();
        return this.client.getPasswordData(
          this.ops["GetPasswordData"].apply(partialParams)
        );
    }

    invokeGetReservedInstancesExchangeQuote(partialParams: ToOptional<{
      [K in keyof GetReservedInstancesExchangeQuoteRequest]: (GetReservedInstancesExchangeQuoteRequest)[K]
    }>): Request<GetReservedInstancesExchangeQuoteResult, AWSError> {
        this.boot();
        return this.client.getReservedInstancesExchangeQuote(
          this.ops["GetReservedInstancesExchangeQuote"].apply(partialParams)
        );
    }

    invokeGetSerialConsoleAccessStatus(partialParams: ToOptional<{
      [K in keyof GetSerialConsoleAccessStatusRequest]: (GetSerialConsoleAccessStatusRequest)[K]
    }>): Request<GetSerialConsoleAccessStatusResult, AWSError> {
        this.boot();
        return this.client.getSerialConsoleAccessStatus(
          this.ops["GetSerialConsoleAccessStatus"].apply(partialParams)
        );
    }

    invokeGetSpotPlacementScores(partialParams: ToOptional<{
      [K in keyof GetSpotPlacementScoresRequest]: (GetSpotPlacementScoresRequest)[K]
    }>): Request<GetSpotPlacementScoresResult, AWSError> {
        this.boot();
        return this.client.getSpotPlacementScores(
          this.ops["GetSpotPlacementScores"].apply(partialParams)
        );
    }

    invokeGetSubnetCidrReservations(partialParams: ToOptional<{
      [K in keyof GetSubnetCidrReservationsRequest]: (GetSubnetCidrReservationsRequest)[K]
    }>): Request<GetSubnetCidrReservationsResult, AWSError> {
        this.boot();
        return this.client.getSubnetCidrReservations(
          this.ops["GetSubnetCidrReservations"].apply(partialParams)
        );
    }

    invokeGetTransitGatewayAttachmentPropagations(partialParams: ToOptional<{
      [K in keyof GetTransitGatewayAttachmentPropagationsRequest]: (GetTransitGatewayAttachmentPropagationsRequest)[K]
    }>): Request<GetTransitGatewayAttachmentPropagationsResult, AWSError> {
        this.boot();
        return this.client.getTransitGatewayAttachmentPropagations(
          this.ops["GetTransitGatewayAttachmentPropagations"].apply(partialParams)
        );
    }

    invokeGetTransitGatewayMulticastDomainAssociations(partialParams: ToOptional<{
      [K in keyof GetTransitGatewayMulticastDomainAssociationsRequest]: (GetTransitGatewayMulticastDomainAssociationsRequest)[K]
    }>): Request<GetTransitGatewayMulticastDomainAssociationsResult, AWSError> {
        this.boot();
        return this.client.getTransitGatewayMulticastDomainAssociations(
          this.ops["GetTransitGatewayMulticastDomainAssociations"].apply(partialParams)
        );
    }

    invokeGetTransitGatewayPrefixListReferences(partialParams: ToOptional<{
      [K in keyof GetTransitGatewayPrefixListReferencesRequest]: (GetTransitGatewayPrefixListReferencesRequest)[K]
    }>): Request<GetTransitGatewayPrefixListReferencesResult, AWSError> {
        this.boot();
        return this.client.getTransitGatewayPrefixListReferences(
          this.ops["GetTransitGatewayPrefixListReferences"].apply(partialParams)
        );
    }

    invokeGetTransitGatewayRouteTableAssociations(partialParams: ToOptional<{
      [K in keyof GetTransitGatewayRouteTableAssociationsRequest]: (GetTransitGatewayRouteTableAssociationsRequest)[K]
    }>): Request<GetTransitGatewayRouteTableAssociationsResult, AWSError> {
        this.boot();
        return this.client.getTransitGatewayRouteTableAssociations(
          this.ops["GetTransitGatewayRouteTableAssociations"].apply(partialParams)
        );
    }

    invokeGetTransitGatewayRouteTablePropagations(partialParams: ToOptional<{
      [K in keyof GetTransitGatewayRouteTablePropagationsRequest]: (GetTransitGatewayRouteTablePropagationsRequest)[K]
    }>): Request<GetTransitGatewayRouteTablePropagationsResult, AWSError> {
        this.boot();
        return this.client.getTransitGatewayRouteTablePropagations(
          this.ops["GetTransitGatewayRouteTablePropagations"].apply(partialParams)
        );
    }

    invokeGetVpnConnectionDeviceSampleConfiguration(partialParams: ToOptional<{
      [K in keyof GetVpnConnectionDeviceSampleConfigurationRequest]: (GetVpnConnectionDeviceSampleConfigurationRequest)[K]
    }>): Request<GetVpnConnectionDeviceSampleConfigurationResult, AWSError> {
        this.boot();
        return this.client.getVpnConnectionDeviceSampleConfiguration(
          this.ops["GetVpnConnectionDeviceSampleConfiguration"].apply(partialParams)
        );
    }

    invokeGetVpnConnectionDeviceTypes(partialParams: ToOptional<{
      [K in keyof GetVpnConnectionDeviceTypesRequest]: (GetVpnConnectionDeviceTypesRequest)[K]
    }>): Request<GetVpnConnectionDeviceTypesResult, AWSError> {
        this.boot();
        return this.client.getVpnConnectionDeviceTypes(
          this.ops["GetVpnConnectionDeviceTypes"].apply(partialParams)
        );
    }

    invokeImportClientVpnClientCertificateRevocationList(partialParams: ToOptional<{
      [K in keyof ImportClientVpnClientCertificateRevocationListRequest]: (ImportClientVpnClientCertificateRevocationListRequest)[K]
    }>): Request<ImportClientVpnClientCertificateRevocationListResult, AWSError> {
        this.boot();
        return this.client.importClientVpnClientCertificateRevocationList(
          this.ops["ImportClientVpnClientCertificateRevocationList"].apply(partialParams)
        );
    }

    invokeImportImage(partialParams: ToOptional<{
      [K in keyof ImportImageRequest]: (ImportImageRequest)[K]
    }>): Request<ImportImageResult, AWSError> {
        this.boot();
        return this.client.importImage(
          this.ops["ImportImage"].apply(partialParams)
        );
    }

    invokeImportInstance(partialParams: ToOptional<{
      [K in keyof ImportInstanceRequest]: (ImportInstanceRequest)[K]
    }>): Request<ImportInstanceResult, AWSError> {
        this.boot();
        return this.client.importInstance(
          this.ops["ImportInstance"].apply(partialParams)
        );
    }

    invokeImportKeyPair(partialParams: ToOptional<{
      [K in keyof ImportKeyPairRequest & keyof Omit<ImportKeyPairRequest, "KeyName">]: (ImportKeyPairRequest)[K]
    }>): Request<ImportKeyPairResult, AWSError> {
        this.boot();
        return this.client.importKeyPair(
          this.ops["ImportKeyPair"].apply(partialParams)
        );
    }

    invokeImportSnapshot(partialParams: ToOptional<{
      [K in keyof ImportSnapshotRequest]: (ImportSnapshotRequest)[K]
    }>): Request<ImportSnapshotResult, AWSError> {
        this.boot();
        return this.client.importSnapshot(
          this.ops["ImportSnapshot"].apply(partialParams)
        );
    }

    invokeImportVolume(partialParams: ToOptional<{
      [K in keyof ImportVolumeRequest]: (ImportVolumeRequest)[K]
    }>): Request<ImportVolumeResult, AWSError> {
        this.boot();
        return this.client.importVolume(
          this.ops["ImportVolume"].apply(partialParams)
        );
    }

    invokeListImagesInRecycleBin(partialParams: ToOptional<{
      [K in keyof ListImagesInRecycleBinRequest]: (ListImagesInRecycleBinRequest)[K]
    }>): Request<ListImagesInRecycleBinResult, AWSError> {
        this.boot();
        return this.client.listImagesInRecycleBin(
          this.ops["ListImagesInRecycleBin"].apply(partialParams)
        );
    }

    invokeListSnapshotsInRecycleBin(partialParams: ToOptional<{
      [K in keyof ListSnapshotsInRecycleBinRequest]: (ListSnapshotsInRecycleBinRequest)[K]
    }>): Request<ListSnapshotsInRecycleBinResult, AWSError> {
        this.boot();
        return this.client.listSnapshotsInRecycleBin(
          this.ops["ListSnapshotsInRecycleBin"].apply(partialParams)
        );
    }

    invokeModifyAddressAttribute(partialParams: ToOptional<{
      [K in keyof ModifyAddressAttributeRequest]: (ModifyAddressAttributeRequest)[K]
    }>): Request<ModifyAddressAttributeResult, AWSError> {
        this.boot();
        return this.client.modifyAddressAttribute(
          this.ops["ModifyAddressAttribute"].apply(partialParams)
        );
    }

    invokeModifyAvailabilityZoneGroup(partialParams: ToOptional<{
      [K in keyof ModifyAvailabilityZoneGroupRequest]: (ModifyAvailabilityZoneGroupRequest)[K]
    }>): Request<ModifyAvailabilityZoneGroupResult, AWSError> {
        this.boot();
        return this.client.modifyAvailabilityZoneGroup(
          this.ops["ModifyAvailabilityZoneGroup"].apply(partialParams)
        );
    }

    invokeModifyCapacityReservation(partialParams: ToOptional<{
      [K in keyof ModifyCapacityReservationRequest]: (ModifyCapacityReservationRequest)[K]
    }>): Request<ModifyCapacityReservationResult, AWSError> {
        this.boot();
        return this.client.modifyCapacityReservation(
          this.ops["ModifyCapacityReservation"].apply(partialParams)
        );
    }

    invokeModifyCapacityReservationFleet(partialParams: ToOptional<{
      [K in keyof ModifyCapacityReservationFleetRequest]: (ModifyCapacityReservationFleetRequest)[K]
    }>): Request<ModifyCapacityReservationFleetResult, AWSError> {
        this.boot();
        return this.client.modifyCapacityReservationFleet(
          this.ops["ModifyCapacityReservationFleet"].apply(partialParams)
        );
    }

    invokeModifyClientVpnEndpoint(partialParams: ToOptional<{
      [K in keyof ModifyClientVpnEndpointRequest]: (ModifyClientVpnEndpointRequest)[K]
    }>): Request<ModifyClientVpnEndpointResult, AWSError> {
        this.boot();
        return this.client.modifyClientVpnEndpoint(
          this.ops["ModifyClientVpnEndpoint"].apply(partialParams)
        );
    }

    invokeModifyDefaultCreditSpecification(partialParams: ToOptional<{
      [K in keyof ModifyDefaultCreditSpecificationRequest]: (ModifyDefaultCreditSpecificationRequest)[K]
    }>): Request<ModifyDefaultCreditSpecificationResult, AWSError> {
        this.boot();
        return this.client.modifyDefaultCreditSpecification(
          this.ops["ModifyDefaultCreditSpecification"].apply(partialParams)
        );
    }

    invokeModifyEbsDefaultKmsKeyId(partialParams: ToOptional<{
      [K in keyof ModifyEbsDefaultKmsKeyIdRequest]: (ModifyEbsDefaultKmsKeyIdRequest)[K]
    }>): Request<ModifyEbsDefaultKmsKeyIdResult, AWSError> {
        this.boot();
        return this.client.modifyEbsDefaultKmsKeyId(
          this.ops["ModifyEbsDefaultKmsKeyId"].apply(partialParams)
        );
    }

    invokeModifyFleet(partialParams: ToOptional<{
      [K in keyof ModifyFleetRequest]: (ModifyFleetRequest)[K]
    }>): Request<ModifyFleetResult, AWSError> {
        this.boot();
        return this.client.modifyFleet(
          this.ops["ModifyFleet"].apply(partialParams)
        );
    }

    invokeModifyFpgaImageAttribute(partialParams: ToOptional<{
      [K in keyof ModifyFpgaImageAttributeRequest]: (ModifyFpgaImageAttributeRequest)[K]
    }>): Request<ModifyFpgaImageAttributeResult, AWSError> {
        this.boot();
        return this.client.modifyFpgaImageAttribute(
          this.ops["ModifyFpgaImageAttribute"].apply(partialParams)
        );
    }

    invokeModifyHosts(partialParams: ToOptional<{
      [K in keyof ModifyHostsRequest]: (ModifyHostsRequest)[K]
    }>): Request<ModifyHostsResult, AWSError> {
        this.boot();
        return this.client.modifyHosts(
          this.ops["ModifyHosts"].apply(partialParams)
        );
    }

    invokeModifyInstanceCapacityReservationAttributes(partialParams: ToOptional<{
      [K in keyof ModifyInstanceCapacityReservationAttributesRequest]: (ModifyInstanceCapacityReservationAttributesRequest)[K]
    }>): Request<ModifyInstanceCapacityReservationAttributesResult, AWSError> {
        this.boot();
        return this.client.modifyInstanceCapacityReservationAttributes(
          this.ops["ModifyInstanceCapacityReservationAttributes"].apply(partialParams)
        );
    }

    invokeModifyInstanceCreditSpecification(partialParams: ToOptional<{
      [K in keyof ModifyInstanceCreditSpecificationRequest]: (ModifyInstanceCreditSpecificationRequest)[K]
    }>): Request<ModifyInstanceCreditSpecificationResult, AWSError> {
        this.boot();
        return this.client.modifyInstanceCreditSpecification(
          this.ops["ModifyInstanceCreditSpecification"].apply(partialParams)
        );
    }

    invokeModifyInstanceEventStartTime(partialParams: ToOptional<{
      [K in keyof ModifyInstanceEventStartTimeRequest]: (ModifyInstanceEventStartTimeRequest)[K]
    }>): Request<ModifyInstanceEventStartTimeResult, AWSError> {
        this.boot();
        return this.client.modifyInstanceEventStartTime(
          this.ops["ModifyInstanceEventStartTime"].apply(partialParams)
        );
    }

    invokeModifyInstanceEventWindow(partialParams: ToOptional<{
      [K in keyof ModifyInstanceEventWindowRequest]: (ModifyInstanceEventWindowRequest)[K]
    }>): Request<ModifyInstanceEventWindowResult, AWSError> {
        this.boot();
        return this.client.modifyInstanceEventWindow(
          this.ops["ModifyInstanceEventWindow"].apply(partialParams)
        );
    }

    invokeModifyInstanceMetadataOptions(partialParams: ToOptional<{
      [K in keyof ModifyInstanceMetadataOptionsRequest]: (ModifyInstanceMetadataOptionsRequest)[K]
    }>): Request<ModifyInstanceMetadataOptionsResult, AWSError> {
        this.boot();
        return this.client.modifyInstanceMetadataOptions(
          this.ops["ModifyInstanceMetadataOptions"].apply(partialParams)
        );
    }

    invokeModifyInstancePlacement(partialParams: ToOptional<{
      [K in keyof ModifyInstancePlacementRequest]: (ModifyInstancePlacementRequest)[K]
    }>): Request<ModifyInstancePlacementResult, AWSError> {
        this.boot();
        return this.client.modifyInstancePlacement(
          this.ops["ModifyInstancePlacement"].apply(partialParams)
        );
    }

    invokeModifyIpam(partialParams: ToOptional<{
      [K in keyof ModifyIpamRequest]: (ModifyIpamRequest)[K]
    }>): Request<ModifyIpamResult, AWSError> {
        this.boot();
        return this.client.modifyIpam(
          this.ops["ModifyIpam"].apply(partialParams)
        );
    }

    invokeModifyIpamPool(partialParams: ToOptional<{
      [K in keyof ModifyIpamPoolRequest]: (ModifyIpamPoolRequest)[K]
    }>): Request<ModifyIpamPoolResult, AWSError> {
        this.boot();
        return this.client.modifyIpamPool(
          this.ops["ModifyIpamPool"].apply(partialParams)
        );
    }

    invokeModifyIpamResourceCidr(partialParams: ToOptional<{
      [K in keyof ModifyIpamResourceCidrRequest]: (ModifyIpamResourceCidrRequest)[K]
    }>): Request<ModifyIpamResourceCidrResult, AWSError> {
        this.boot();
        return this.client.modifyIpamResourceCidr(
          this.ops["ModifyIpamResourceCidr"].apply(partialParams)
        );
    }

    invokeModifyIpamScope(partialParams: ToOptional<{
      [K in keyof ModifyIpamScopeRequest]: (ModifyIpamScopeRequest)[K]
    }>): Request<ModifyIpamScopeResult, AWSError> {
        this.boot();
        return this.client.modifyIpamScope(
          this.ops["ModifyIpamScope"].apply(partialParams)
        );
    }

    invokeModifyLaunchTemplate(partialParams: ToOptional<{
      [K in keyof ModifyLaunchTemplateRequest]: (ModifyLaunchTemplateRequest)[K]
    }>): Request<ModifyLaunchTemplateResult, AWSError> {
        this.boot();
        return this.client.modifyLaunchTemplate(
          this.ops["ModifyLaunchTemplate"].apply(partialParams)
        );
    }

    invokeModifyManagedPrefixList(partialParams: ToOptional<{
      [K in keyof ModifyManagedPrefixListRequest]: (ModifyManagedPrefixListRequest)[K]
    }>): Request<ModifyManagedPrefixListResult, AWSError> {
        this.boot();
        return this.client.modifyManagedPrefixList(
          this.ops["ModifyManagedPrefixList"].apply(partialParams)
        );
    }

    invokeModifyPrivateDnsNameOptions(partialParams: ToOptional<{
      [K in keyof ModifyPrivateDnsNameOptionsRequest]: (ModifyPrivateDnsNameOptionsRequest)[K]
    }>): Request<ModifyPrivateDnsNameOptionsResult, AWSError> {
        this.boot();
        return this.client.modifyPrivateDnsNameOptions(
          this.ops["ModifyPrivateDnsNameOptions"].apply(partialParams)
        );
    }

    invokeModifyReservedInstances(partialParams: ToOptional<{
      [K in keyof ModifyReservedInstancesRequest]: (ModifyReservedInstancesRequest)[K]
    }>): Request<ModifyReservedInstancesResult, AWSError> {
        this.boot();
        return this.client.modifyReservedInstances(
          this.ops["ModifyReservedInstances"].apply(partialParams)
        );
    }

    invokeModifySecurityGroupRules(partialParams: ToOptional<{
      [K in keyof ModifySecurityGroupRulesRequest]: (ModifySecurityGroupRulesRequest)[K]
    }>): Request<ModifySecurityGroupRulesResult, AWSError> {
        this.boot();
        return this.client.modifySecurityGroupRules(
          this.ops["ModifySecurityGroupRules"].apply(partialParams)
        );
    }

    invokeModifySnapshotTier(partialParams: ToOptional<{
      [K in keyof ModifySnapshotTierRequest]: (ModifySnapshotTierRequest)[K]
    }>): Request<ModifySnapshotTierResult, AWSError> {
        this.boot();
        return this.client.modifySnapshotTier(
          this.ops["ModifySnapshotTier"].apply(partialParams)
        );
    }

    invokeModifySpotFleetRequest(partialParams: ToOptional<{
      [K in keyof ModifySpotFleetRequestRequest]: (ModifySpotFleetRequestRequest)[K]
    }>): Request<ModifySpotFleetRequestResponse, AWSError> {
        this.boot();
        return this.client.modifySpotFleetRequest(
          this.ops["ModifySpotFleetRequest"].apply(partialParams)
        );
    }

    invokeModifyTrafficMirrorFilterNetworkServices(partialParams: ToOptional<{
      [K in keyof ModifyTrafficMirrorFilterNetworkServicesRequest]: (ModifyTrafficMirrorFilterNetworkServicesRequest)[K]
    }>): Request<ModifyTrafficMirrorFilterNetworkServicesResult, AWSError> {
        this.boot();
        return this.client.modifyTrafficMirrorFilterNetworkServices(
          this.ops["ModifyTrafficMirrorFilterNetworkServices"].apply(partialParams)
        );
    }

    invokeModifyTrafficMirrorFilterRule(partialParams: ToOptional<{
      [K in keyof ModifyTrafficMirrorFilterRuleRequest]: (ModifyTrafficMirrorFilterRuleRequest)[K]
    }>): Request<ModifyTrafficMirrorFilterRuleResult, AWSError> {
        this.boot();
        return this.client.modifyTrafficMirrorFilterRule(
          this.ops["ModifyTrafficMirrorFilterRule"].apply(partialParams)
        );
    }

    invokeModifyTrafficMirrorSession(partialParams: ToOptional<{
      [K in keyof ModifyTrafficMirrorSessionRequest]: (ModifyTrafficMirrorSessionRequest)[K]
    }>): Request<ModifyTrafficMirrorSessionResult, AWSError> {
        this.boot();
        return this.client.modifyTrafficMirrorSession(
          this.ops["ModifyTrafficMirrorSession"].apply(partialParams)
        );
    }

    invokeModifyTransitGateway(partialParams: ToOptional<{
      [K in keyof ModifyTransitGatewayRequest]: (ModifyTransitGatewayRequest)[K]
    }>): Request<ModifyTransitGatewayResult, AWSError> {
        this.boot();
        return this.client.modifyTransitGateway(
          this.ops["ModifyTransitGateway"].apply(partialParams)
        );
    }

    invokeModifyTransitGatewayPrefixListReference(partialParams: ToOptional<{
      [K in keyof ModifyTransitGatewayPrefixListReferenceRequest]: (ModifyTransitGatewayPrefixListReferenceRequest)[K]
    }>): Request<ModifyTransitGatewayPrefixListReferenceResult, AWSError> {
        this.boot();
        return this.client.modifyTransitGatewayPrefixListReference(
          this.ops["ModifyTransitGatewayPrefixListReference"].apply(partialParams)
        );
    }

    invokeModifyTransitGatewayVpcAttachment(partialParams: ToOptional<{
      [K in keyof ModifyTransitGatewayVpcAttachmentRequest]: (ModifyTransitGatewayVpcAttachmentRequest)[K]
    }>): Request<ModifyTransitGatewayVpcAttachmentResult, AWSError> {
        this.boot();
        return this.client.modifyTransitGatewayVpcAttachment(
          this.ops["ModifyTransitGatewayVpcAttachment"].apply(partialParams)
        );
    }

    invokeModifyVolume(partialParams: ToOptional<{
      [K in keyof ModifyVolumeRequest]: (ModifyVolumeRequest)[K]
    }>): Request<ModifyVolumeResult, AWSError> {
        this.boot();
        return this.client.modifyVolume(
          this.ops["ModifyVolume"].apply(partialParams)
        );
    }

    invokeModifyVpcEndpoint(partialParams: ToOptional<{
      [K in keyof ModifyVpcEndpointRequest]: (ModifyVpcEndpointRequest)[K]
    }>): Request<ModifyVpcEndpointResult, AWSError> {
        this.boot();
        return this.client.modifyVpcEndpoint(
          this.ops["ModifyVpcEndpoint"].apply(partialParams)
        );
    }

    invokeModifyVpcEndpointConnectionNotification(partialParams: ToOptional<{
      [K in keyof ModifyVpcEndpointConnectionNotificationRequest]: (ModifyVpcEndpointConnectionNotificationRequest)[K]
    }>): Request<ModifyVpcEndpointConnectionNotificationResult, AWSError> {
        this.boot();
        return this.client.modifyVpcEndpointConnectionNotification(
          this.ops["ModifyVpcEndpointConnectionNotification"].apply(partialParams)
        );
    }

    invokeModifyVpcEndpointServiceConfiguration(partialParams: ToOptional<{
      [K in keyof ModifyVpcEndpointServiceConfigurationRequest]: (ModifyVpcEndpointServiceConfigurationRequest)[K]
    }>): Request<ModifyVpcEndpointServiceConfigurationResult, AWSError> {
        this.boot();
        return this.client.modifyVpcEndpointServiceConfiguration(
          this.ops["ModifyVpcEndpointServiceConfiguration"].apply(partialParams)
        );
    }

    invokeModifyVpcEndpointServicePayerResponsibility(partialParams: ToOptional<{
      [K in keyof ModifyVpcEndpointServicePayerResponsibilityRequest]: (ModifyVpcEndpointServicePayerResponsibilityRequest)[K]
    }>): Request<ModifyVpcEndpointServicePayerResponsibilityResult, AWSError> {
        this.boot();
        return this.client.modifyVpcEndpointServicePayerResponsibility(
          this.ops["ModifyVpcEndpointServicePayerResponsibility"].apply(partialParams)
        );
    }

    invokeModifyVpcEndpointServicePermissions(partialParams: ToOptional<{
      [K in keyof ModifyVpcEndpointServicePermissionsRequest]: (ModifyVpcEndpointServicePermissionsRequest)[K]
    }>): Request<ModifyVpcEndpointServicePermissionsResult, AWSError> {
        this.boot();
        return this.client.modifyVpcEndpointServicePermissions(
          this.ops["ModifyVpcEndpointServicePermissions"].apply(partialParams)
        );
    }

    invokeModifyVpcPeeringConnectionOptions(partialParams: ToOptional<{
      [K in keyof ModifyVpcPeeringConnectionOptionsRequest]: (ModifyVpcPeeringConnectionOptionsRequest)[K]
    }>): Request<ModifyVpcPeeringConnectionOptionsResult, AWSError> {
        this.boot();
        return this.client.modifyVpcPeeringConnectionOptions(
          this.ops["ModifyVpcPeeringConnectionOptions"].apply(partialParams)
        );
    }

    invokeModifyVpcTenancy(partialParams: ToOptional<{
      [K in keyof ModifyVpcTenancyRequest]: (ModifyVpcTenancyRequest)[K]
    }>): Request<ModifyVpcTenancyResult, AWSError> {
        this.boot();
        return this.client.modifyVpcTenancy(
          this.ops["ModifyVpcTenancy"].apply(partialParams)
        );
    }

    invokeModifyVpnConnection(partialParams: ToOptional<{
      [K in keyof ModifyVpnConnectionRequest]: (ModifyVpnConnectionRequest)[K]
    }>): Request<ModifyVpnConnectionResult, AWSError> {
        this.boot();
        return this.client.modifyVpnConnection(
          this.ops["ModifyVpnConnection"].apply(partialParams)
        );
    }

    invokeModifyVpnConnectionOptions(partialParams: ToOptional<{
      [K in keyof ModifyVpnConnectionOptionsRequest]: (ModifyVpnConnectionOptionsRequest)[K]
    }>): Request<ModifyVpnConnectionOptionsResult, AWSError> {
        this.boot();
        return this.client.modifyVpnConnectionOptions(
          this.ops["ModifyVpnConnectionOptions"].apply(partialParams)
        );
    }

    invokeModifyVpnTunnelCertificate(partialParams: ToOptional<{
      [K in keyof ModifyVpnTunnelCertificateRequest]: (ModifyVpnTunnelCertificateRequest)[K]
    }>): Request<ModifyVpnTunnelCertificateResult, AWSError> {
        this.boot();
        return this.client.modifyVpnTunnelCertificate(
          this.ops["ModifyVpnTunnelCertificate"].apply(partialParams)
        );
    }

    invokeModifyVpnTunnelOptions(partialParams: ToOptional<{
      [K in keyof ModifyVpnTunnelOptionsRequest]: (ModifyVpnTunnelOptionsRequest)[K]
    }>): Request<ModifyVpnTunnelOptionsResult, AWSError> {
        this.boot();
        return this.client.modifyVpnTunnelOptions(
          this.ops["ModifyVpnTunnelOptions"].apply(partialParams)
        );
    }

    invokeMonitorInstances(partialParams: ToOptional<{
      [K in keyof MonitorInstancesRequest]: (MonitorInstancesRequest)[K]
    }>): Request<MonitorInstancesResult, AWSError> {
        this.boot();
        return this.client.monitorInstances(
          this.ops["MonitorInstances"].apply(partialParams)
        );
    }

    invokeMoveAddressToVpc(partialParams: ToOptional<{
      [K in keyof MoveAddressToVpcRequest]: (MoveAddressToVpcRequest)[K]
    }>): Request<MoveAddressToVpcResult, AWSError> {
        this.boot();
        return this.client.moveAddressToVpc(
          this.ops["MoveAddressToVpc"].apply(partialParams)
        );
    }

    invokeMoveByoipCidrToIpam(partialParams: ToOptional<{
      [K in keyof MoveByoipCidrToIpamRequest]: (MoveByoipCidrToIpamRequest)[K]
    }>): Request<MoveByoipCidrToIpamResult, AWSError> {
        this.boot();
        return this.client.moveByoipCidrToIpam(
          this.ops["MoveByoipCidrToIpam"].apply(partialParams)
        );
    }

    invokeProvisionByoipCidr(partialParams: ToOptional<{
      [K in keyof ProvisionByoipCidrRequest]: (ProvisionByoipCidrRequest)[K]
    }>): Request<ProvisionByoipCidrResult, AWSError> {
        this.boot();
        return this.client.provisionByoipCidr(
          this.ops["ProvisionByoipCidr"].apply(partialParams)
        );
    }

    invokeProvisionIpamPoolCidr(partialParams: ToOptional<{
      [K in keyof ProvisionIpamPoolCidrRequest]: (ProvisionIpamPoolCidrRequest)[K]
    }>): Request<ProvisionIpamPoolCidrResult, AWSError> {
        this.boot();
        return this.client.provisionIpamPoolCidr(
          this.ops["ProvisionIpamPoolCidr"].apply(partialParams)
        );
    }

    invokeProvisionPublicIpv4PoolCidr(partialParams: ToOptional<{
      [K in keyof ProvisionPublicIpv4PoolCidrRequest]: (ProvisionPublicIpv4PoolCidrRequest)[K]
    }>): Request<ProvisionPublicIpv4PoolCidrResult, AWSError> {
        this.boot();
        return this.client.provisionPublicIpv4PoolCidr(
          this.ops["ProvisionPublicIpv4PoolCidr"].apply(partialParams)
        );
    }

    invokePurchaseHostReservation(partialParams: ToOptional<{
      [K in keyof PurchaseHostReservationRequest]: (PurchaseHostReservationRequest)[K]
    }>): Request<PurchaseHostReservationResult, AWSError> {
        this.boot();
        return this.client.purchaseHostReservation(
          this.ops["PurchaseHostReservation"].apply(partialParams)
        );
    }

    invokePurchaseReservedInstancesOffering(partialParams: ToOptional<{
      [K in keyof PurchaseReservedInstancesOfferingRequest]: (PurchaseReservedInstancesOfferingRequest)[K]
    }>): Request<PurchaseReservedInstancesOfferingResult, AWSError> {
        this.boot();
        return this.client.purchaseReservedInstancesOffering(
          this.ops["PurchaseReservedInstancesOffering"].apply(partialParams)
        );
    }

    invokePurchaseScheduledInstances(partialParams: ToOptional<{
      [K in keyof PurchaseScheduledInstancesRequest]: (PurchaseScheduledInstancesRequest)[K]
    }>): Request<PurchaseScheduledInstancesResult, AWSError> {
        this.boot();
        return this.client.purchaseScheduledInstances(
          this.ops["PurchaseScheduledInstances"].apply(partialParams)
        );
    }

    invokeRegisterImage(partialParams: ToOptional<{
      [K in keyof RegisterImageRequest & keyof Omit<RegisterImageRequest, "Name">]: (RegisterImageRequest)[K]
    }>): Request<RegisterImageResult, AWSError> {
        this.boot();
        return this.client.registerImage(
          this.ops["RegisterImage"].apply(partialParams)
        );
    }

    invokeRegisterInstanceEventNotificationAttributes(partialParams: ToOptional<{
      [K in keyof RegisterInstanceEventNotificationAttributesRequest]: (RegisterInstanceEventNotificationAttributesRequest)[K]
    }>): Request<RegisterInstanceEventNotificationAttributesResult, AWSError> {
        this.boot();
        return this.client.registerInstanceEventNotificationAttributes(
          this.ops["RegisterInstanceEventNotificationAttributes"].apply(partialParams)
        );
    }

    invokeRegisterTransitGatewayMulticastGroupMembers(partialParams: ToOptional<{
      [K in keyof RegisterTransitGatewayMulticastGroupMembersRequest]: (RegisterTransitGatewayMulticastGroupMembersRequest)[K]
    }>): Request<RegisterTransitGatewayMulticastGroupMembersResult, AWSError> {
        this.boot();
        return this.client.registerTransitGatewayMulticastGroupMembers(
          this.ops["RegisterTransitGatewayMulticastGroupMembers"].apply(partialParams)
        );
    }

    invokeRegisterTransitGatewayMulticastGroupSources(partialParams: ToOptional<{
      [K in keyof RegisterTransitGatewayMulticastGroupSourcesRequest]: (RegisterTransitGatewayMulticastGroupSourcesRequest)[K]
    }>): Request<RegisterTransitGatewayMulticastGroupSourcesResult, AWSError> {
        this.boot();
        return this.client.registerTransitGatewayMulticastGroupSources(
          this.ops["RegisterTransitGatewayMulticastGroupSources"].apply(partialParams)
        );
    }

    invokeRejectTransitGatewayMulticastDomainAssociations(partialParams: ToOptional<{
      [K in keyof RejectTransitGatewayMulticastDomainAssociationsRequest]: (RejectTransitGatewayMulticastDomainAssociationsRequest)[K]
    }>): Request<RejectTransitGatewayMulticastDomainAssociationsResult, AWSError> {
        this.boot();
        return this.client.rejectTransitGatewayMulticastDomainAssociations(
          this.ops["RejectTransitGatewayMulticastDomainAssociations"].apply(partialParams)
        );
    }

    invokeRejectTransitGatewayPeeringAttachment(partialParams: ToOptional<{
      [K in keyof RejectTransitGatewayPeeringAttachmentRequest]: (RejectTransitGatewayPeeringAttachmentRequest)[K]
    }>): Request<RejectTransitGatewayPeeringAttachmentResult, AWSError> {
        this.boot();
        return this.client.rejectTransitGatewayPeeringAttachment(
          this.ops["RejectTransitGatewayPeeringAttachment"].apply(partialParams)
        );
    }

    invokeRejectTransitGatewayVpcAttachment(partialParams: ToOptional<{
      [K in keyof RejectTransitGatewayVpcAttachmentRequest]: (RejectTransitGatewayVpcAttachmentRequest)[K]
    }>): Request<RejectTransitGatewayVpcAttachmentResult, AWSError> {
        this.boot();
        return this.client.rejectTransitGatewayVpcAttachment(
          this.ops["RejectTransitGatewayVpcAttachment"].apply(partialParams)
        );
    }

    invokeRejectVpcEndpointConnections(partialParams: ToOptional<{
      [K in keyof RejectVpcEndpointConnectionsRequest]: (RejectVpcEndpointConnectionsRequest)[K]
    }>): Request<RejectVpcEndpointConnectionsResult, AWSError> {
        this.boot();
        return this.client.rejectVpcEndpointConnections(
          this.ops["RejectVpcEndpointConnections"].apply(partialParams)
        );
    }

    invokeRejectVpcPeeringConnection(partialParams: ToOptional<{
      [K in keyof RejectVpcPeeringConnectionRequest]: (RejectVpcPeeringConnectionRequest)[K]
    }>): Request<RejectVpcPeeringConnectionResult, AWSError> {
        this.boot();
        return this.client.rejectVpcPeeringConnection(
          this.ops["RejectVpcPeeringConnection"].apply(partialParams)
        );
    }

    invokeReleaseHosts(partialParams: ToOptional<{
      [K in keyof ReleaseHostsRequest]: (ReleaseHostsRequest)[K]
    }>): Request<ReleaseHostsResult, AWSError> {
        this.boot();
        return this.client.releaseHosts(
          this.ops["ReleaseHosts"].apply(partialParams)
        );
    }

    invokeReleaseIpamPoolAllocation(partialParams: ToOptional<{
      [K in keyof ReleaseIpamPoolAllocationRequest]: (ReleaseIpamPoolAllocationRequest)[K]
    }>): Request<ReleaseIpamPoolAllocationResult, AWSError> {
        this.boot();
        return this.client.releaseIpamPoolAllocation(
          this.ops["ReleaseIpamPoolAllocation"].apply(partialParams)
        );
    }

    invokeReplaceIamInstanceProfileAssociation(partialParams: ToOptional<{
      [K in keyof ReplaceIamInstanceProfileAssociationRequest]: (ReplaceIamInstanceProfileAssociationRequest)[K]
    }>): Request<ReplaceIamInstanceProfileAssociationResult, AWSError> {
        this.boot();
        return this.client.replaceIamInstanceProfileAssociation(
          this.ops["ReplaceIamInstanceProfileAssociation"].apply(partialParams)
        );
    }

    invokeReplaceNetworkAclAssociation(partialParams: ToOptional<{
      [K in keyof ReplaceNetworkAclAssociationRequest]: (ReplaceNetworkAclAssociationRequest)[K]
    }>): Request<ReplaceNetworkAclAssociationResult, AWSError> {
        this.boot();
        return this.client.replaceNetworkAclAssociation(
          this.ops["ReplaceNetworkAclAssociation"].apply(partialParams)
        );
    }

    invokeReplaceRouteTableAssociation(partialParams: ToOptional<{
      [K in keyof ReplaceRouteTableAssociationRequest]: (ReplaceRouteTableAssociationRequest)[K]
    }>): Request<ReplaceRouteTableAssociationResult, AWSError> {
        this.boot();
        return this.client.replaceRouteTableAssociation(
          this.ops["ReplaceRouteTableAssociation"].apply(partialParams)
        );
    }

    invokeReplaceTransitGatewayRoute(partialParams: ToOptional<{
      [K in keyof ReplaceTransitGatewayRouteRequest]: (ReplaceTransitGatewayRouteRequest)[K]
    }>): Request<ReplaceTransitGatewayRouteResult, AWSError> {
        this.boot();
        return this.client.replaceTransitGatewayRoute(
          this.ops["ReplaceTransitGatewayRoute"].apply(partialParams)
        );
    }

    invokeRequestSpotFleet(partialParams: ToOptional<{
      [K in keyof RequestSpotFleetRequest]: (RequestSpotFleetRequest)[K]
    }>): Request<RequestSpotFleetResponse, AWSError> {
        this.boot();
        return this.client.requestSpotFleet(
          this.ops["RequestSpotFleet"].apply(partialParams)
        );
    }

    invokeRequestSpotInstances(partialParams: ToOptional<{
      [K in keyof RequestSpotInstancesRequest]: (RequestSpotInstancesRequest)[K]
    }>): Request<RequestSpotInstancesResult, AWSError> {
        this.boot();
        return this.client.requestSpotInstances(
          this.ops["RequestSpotInstances"].apply(partialParams)
        );
    }

    invokeResetAddressAttribute(partialParams: ToOptional<{
      [K in keyof ResetAddressAttributeRequest]: (ResetAddressAttributeRequest)[K]
    }>): Request<ResetAddressAttributeResult, AWSError> {
        this.boot();
        return this.client.resetAddressAttribute(
          this.ops["ResetAddressAttribute"].apply(partialParams)
        );
    }

    invokeResetEbsDefaultKmsKeyId(partialParams: ToOptional<{
      [K in keyof ResetEbsDefaultKmsKeyIdRequest]: (ResetEbsDefaultKmsKeyIdRequest)[K]
    }>): Request<ResetEbsDefaultKmsKeyIdResult, AWSError> {
        this.boot();
        return this.client.resetEbsDefaultKmsKeyId(
          this.ops["ResetEbsDefaultKmsKeyId"].apply(partialParams)
        );
    }

    invokeResetFpgaImageAttribute(partialParams: ToOptional<{
      [K in keyof ResetFpgaImageAttributeRequest]: (ResetFpgaImageAttributeRequest)[K]
    }>): Request<ResetFpgaImageAttributeResult, AWSError> {
        this.boot();
        return this.client.resetFpgaImageAttribute(
          this.ops["ResetFpgaImageAttribute"].apply(partialParams)
        );
    }

    invokeRestoreAddressToClassic(partialParams: ToOptional<{
      [K in keyof RestoreAddressToClassicRequest]: (RestoreAddressToClassicRequest)[K]
    }>): Request<RestoreAddressToClassicResult, AWSError> {
        this.boot();
        return this.client.restoreAddressToClassic(
          this.ops["RestoreAddressToClassic"].apply(partialParams)
        );
    }

    invokeRestoreImageFromRecycleBin(partialParams: ToOptional<{
      [K in keyof RestoreImageFromRecycleBinRequest & keyof Omit<RestoreImageFromRecycleBinRequest, "ImageId">]: (RestoreImageFromRecycleBinRequest)[K]
    }>): Request<RestoreImageFromRecycleBinResult, AWSError> {
        this.boot();
        return this.client.restoreImageFromRecycleBin(
          this.ops["RestoreImageFromRecycleBin"].apply(partialParams)
        );
    }

    invokeRestoreManagedPrefixListVersion(partialParams: ToOptional<{
      [K in keyof RestoreManagedPrefixListVersionRequest]: (RestoreManagedPrefixListVersionRequest)[K]
    }>): Request<RestoreManagedPrefixListVersionResult, AWSError> {
        this.boot();
        return this.client.restoreManagedPrefixListVersion(
          this.ops["RestoreManagedPrefixListVersion"].apply(partialParams)
        );
    }

    invokeRestoreSnapshotFromRecycleBin(partialParams: ToOptional<{
      [K in keyof RestoreSnapshotFromRecycleBinRequest]: (RestoreSnapshotFromRecycleBinRequest)[K]
    }>): Request<RestoreSnapshotFromRecycleBinResult, AWSError> {
        this.boot();
        return this.client.restoreSnapshotFromRecycleBin(
          this.ops["RestoreSnapshotFromRecycleBin"].apply(partialParams)
        );
    }

    invokeRestoreSnapshotTier(partialParams: ToOptional<{
      [K in keyof RestoreSnapshotTierRequest]: (RestoreSnapshotTierRequest)[K]
    }>): Request<RestoreSnapshotTierResult, AWSError> {
        this.boot();
        return this.client.restoreSnapshotTier(
          this.ops["RestoreSnapshotTier"].apply(partialParams)
        );
    }

    invokeRevokeClientVpnIngress(partialParams: ToOptional<{
      [K in keyof RevokeClientVpnIngressRequest]: (RevokeClientVpnIngressRequest)[K]
    }>): Request<RevokeClientVpnIngressResult, AWSError> {
        this.boot();
        return this.client.revokeClientVpnIngress(
          this.ops["RevokeClientVpnIngress"].apply(partialParams)
        );
    }

    invokeRevokeSecurityGroupEgress(partialParams: ToOptional<{
      [K in keyof RevokeSecurityGroupEgressRequest]: (RevokeSecurityGroupEgressRequest)[K]
    }>): Request<RevokeSecurityGroupEgressResult, AWSError> {
        this.boot();
        return this.client.revokeSecurityGroupEgress(
          this.ops["RevokeSecurityGroupEgress"].apply(partialParams)
        );
    }

    invokeRevokeSecurityGroupIngress(partialParams: ToOptional<{
      [K in keyof RevokeSecurityGroupIngressRequest]: (RevokeSecurityGroupIngressRequest)[K]
    }>): Request<RevokeSecurityGroupIngressResult, AWSError> {
        this.boot();
        return this.client.revokeSecurityGroupIngress(
          this.ops["RevokeSecurityGroupIngress"].apply(partialParams)
        );
    }

    invokeRunInstances(partialParams: ToOptional<{
      [K in keyof RunInstancesRequest]: (RunInstancesRequest)[K]
    }>): Request<Reservation, AWSError> {
        this.boot();
        return this.client.runInstances(
          this.ops["RunInstances"].apply(partialParams)
        );
    }

    invokeRunScheduledInstances(partialParams: ToOptional<{
      [K in keyof RunScheduledInstancesRequest]: (RunScheduledInstancesRequest)[K]
    }>): Request<RunScheduledInstancesResult, AWSError> {
        this.boot();
        return this.client.runScheduledInstances(
          this.ops["RunScheduledInstances"].apply(partialParams)
        );
    }

    invokeSearchLocalGatewayRoutes(partialParams: ToOptional<{
      [K in keyof SearchLocalGatewayRoutesRequest]: (SearchLocalGatewayRoutesRequest)[K]
    }>): Request<SearchLocalGatewayRoutesResult, AWSError> {
        this.boot();
        return this.client.searchLocalGatewayRoutes(
          this.ops["SearchLocalGatewayRoutes"].apply(partialParams)
        );
    }

    invokeSearchTransitGatewayMulticastGroups(partialParams: ToOptional<{
      [K in keyof SearchTransitGatewayMulticastGroupsRequest]: (SearchTransitGatewayMulticastGroupsRequest)[K]
    }>): Request<SearchTransitGatewayMulticastGroupsResult, AWSError> {
        this.boot();
        return this.client.searchTransitGatewayMulticastGroups(
          this.ops["SearchTransitGatewayMulticastGroups"].apply(partialParams)
        );
    }

    invokeSearchTransitGatewayRoutes(partialParams: ToOptional<{
      [K in keyof SearchTransitGatewayRoutesRequest]: (SearchTransitGatewayRoutesRequest)[K]
    }>): Request<SearchTransitGatewayRoutesResult, AWSError> {
        this.boot();
        return this.client.searchTransitGatewayRoutes(
          this.ops["SearchTransitGatewayRoutes"].apply(partialParams)
        );
    }

    invokeStartInstances(partialParams: ToOptional<{
      [K in keyof StartInstancesRequest]: (StartInstancesRequest)[K]
    }>): Request<StartInstancesResult, AWSError> {
        this.boot();
        return this.client.startInstances(
          this.ops["StartInstances"].apply(partialParams)
        );
    }

    invokeStartNetworkInsightsAccessScopeAnalysis(partialParams: ToOptional<{
      [K in keyof StartNetworkInsightsAccessScopeAnalysisRequest]: (StartNetworkInsightsAccessScopeAnalysisRequest)[K]
    }>): Request<StartNetworkInsightsAccessScopeAnalysisResult, AWSError> {
        this.boot();
        return this.client.startNetworkInsightsAccessScopeAnalysis(
          this.ops["StartNetworkInsightsAccessScopeAnalysis"].apply(partialParams)
        );
    }

    invokeStartNetworkInsightsAnalysis(partialParams: ToOptional<{
      [K in keyof StartNetworkInsightsAnalysisRequest]: (StartNetworkInsightsAnalysisRequest)[K]
    }>): Request<StartNetworkInsightsAnalysisResult, AWSError> {
        this.boot();
        return this.client.startNetworkInsightsAnalysis(
          this.ops["StartNetworkInsightsAnalysis"].apply(partialParams)
        );
    }

    invokeStartVpcEndpointServicePrivateDnsVerification(partialParams: ToOptional<{
      [K in keyof StartVpcEndpointServicePrivateDnsVerificationRequest]: (StartVpcEndpointServicePrivateDnsVerificationRequest)[K]
    }>): Request<StartVpcEndpointServicePrivateDnsVerificationResult, AWSError> {
        this.boot();
        return this.client.startVpcEndpointServicePrivateDnsVerification(
          this.ops["StartVpcEndpointServicePrivateDnsVerification"].apply(partialParams)
        );
    }

    invokeStopInstances(partialParams: ToOptional<{
      [K in keyof StopInstancesRequest]: (StopInstancesRequest)[K]
    }>): Request<StopInstancesResult, AWSError> {
        this.boot();
        return this.client.stopInstances(
          this.ops["StopInstances"].apply(partialParams)
        );
    }

    invokeTerminateClientVpnConnections(partialParams: ToOptional<{
      [K in keyof TerminateClientVpnConnectionsRequest]: (TerminateClientVpnConnectionsRequest)[K]
    }>): Request<TerminateClientVpnConnectionsResult, AWSError> {
        this.boot();
        return this.client.terminateClientVpnConnections(
          this.ops["TerminateClientVpnConnections"].apply(partialParams)
        );
    }

    invokeTerminateInstances(partialParams: ToOptional<{
      [K in keyof TerminateInstancesRequest]: (TerminateInstancesRequest)[K]
    }>): Request<TerminateInstancesResult, AWSError> {
        this.boot();
        return this.client.terminateInstances(
          this.ops["TerminateInstances"].apply(partialParams)
        );
    }

    invokeUnassignIpv6Addresses(partialParams: ToOptional<{
      [K in keyof UnassignIpv6AddressesRequest]: (UnassignIpv6AddressesRequest)[K]
    }>): Request<UnassignIpv6AddressesResult, AWSError> {
        this.boot();
        return this.client.unassignIpv6Addresses(
          this.ops["UnassignIpv6Addresses"].apply(partialParams)
        );
    }

    invokeUnmonitorInstances(partialParams: ToOptional<{
      [K in keyof UnmonitorInstancesRequest]: (UnmonitorInstancesRequest)[K]
    }>): Request<UnmonitorInstancesResult, AWSError> {
        this.boot();
        return this.client.unmonitorInstances(
          this.ops["UnmonitorInstances"].apply(partialParams)
        );
    }

    invokeUpdateSecurityGroupRuleDescriptionsEgress(partialParams: ToOptional<{
      [K in keyof UpdateSecurityGroupRuleDescriptionsEgressRequest]: (UpdateSecurityGroupRuleDescriptionsEgressRequest)[K]
    }>): Request<UpdateSecurityGroupRuleDescriptionsEgressResult, AWSError> {
        this.boot();
        return this.client.updateSecurityGroupRuleDescriptionsEgress(
          this.ops["UpdateSecurityGroupRuleDescriptionsEgress"].apply(partialParams)
        );
    }

    invokeUpdateSecurityGroupRuleDescriptionsIngress(partialParams: ToOptional<{
      [K in keyof UpdateSecurityGroupRuleDescriptionsIngressRequest]: (UpdateSecurityGroupRuleDescriptionsIngressRequest)[K]
    }>): Request<UpdateSecurityGroupRuleDescriptionsIngressResult, AWSError> {
        this.boot();
        return this.client.updateSecurityGroupRuleDescriptionsIngress(
          this.ops["UpdateSecurityGroupRuleDescriptionsIngress"].apply(partialParams)
        );
    }

    invokeWithdrawByoipCidr(partialParams: ToOptional<{
      [K in keyof WithdrawByoipCidrRequest]: (WithdrawByoipCidrRequest)[K]
    }>): Request<WithdrawByoipCidrResult, AWSError> {
        this.boot();
        return this.client.withdrawByoipCidr(
          this.ops["WithdrawByoipCidr"].apply(partialParams)
        );
    }
}