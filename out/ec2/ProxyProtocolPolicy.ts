
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    AcceptReservedInstancesExchangeQuoteRequest,
    AcceptTransitGatewayPeeringAttachmentRequest,
    AcceptTransitGatewayVpcAttachmentRequest,
    AcceptVpcEndpointConnectionsRequest,
    AdvertiseByoipCidrRequest,
    AllocateHostsRequest,
    AllocateIpamPoolCidrRequest,
    ApplySecurityGroupsToClientVpnTargetNetworkRequest,
    AssignIpv6AddressesRequest,
    AssignPrivateIpAddressesRequest,
    AssociateClientVpnTargetNetworkRequest,
    AssociateDhcpOptionsRequest,
    AssociateIamInstanceProfileRequest,
    AssociateInstanceEventWindowRequest,
    AssociateRouteTableRequest,
    AssociateSubnetCidrBlockRequest,
    AssociateTransitGatewayRouteTableRequest,
    AssociateTrunkInterfaceRequest,
    AssociateVpcCidrBlockRequest,
    AttachClassicLinkVpcRequest,
    AttachInternetGatewayRequest,
    AttachNetworkInterfaceRequest,
    AttachVolumeRequest,
    AttachVpnGatewayRequest,
    AuthorizeClientVpnIngressRequest,
    AuthorizeSecurityGroupEgressRequest,
    BundleInstanceRequest,
    CancelBundleTaskRequest,
    CancelCapacityReservationRequest,
    CancelCapacityReservationFleetsRequest,
    CancelConversionRequest,
    CancelExportTaskRequest,
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
    CreateDhcpOptionsRequest,
    CreateEgressOnlyInternetGatewayRequest,
    CreateFleetRequest,
    CreateFlowLogsRequest,
    CreateFpgaImageRequest,
    CreateImageRequest,
    CreateInstanceExportTaskRequest,
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
    CreateNetworkAclEntryRequest,
    CreateNetworkInsightsAccessScopeRequest,
    CreateNetworkInsightsPathRequest,
    CreateNetworkInterfaceRequest,
    CreateNetworkInterfacePermissionRequest,
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
    CreateTagsRequest,
    CreateTrafficMirrorFilterRuleRequest,
    CreateTrafficMirrorSessionRequest,
    CreateTransitGatewayConnectRequest,
    CreateTransitGatewayConnectPeerRequest,
    CreateTransitGatewayMulticastDomainRequest,
    CreateTransitGatewayPeeringAttachmentRequest,
    CreateTransitGatewayPrefixListReferenceRequest,
    CreateTransitGatewayRouteRequest,
    CreateTransitGatewayRouteTableRequest,
    CreateTransitGatewayVpcAttachmentRequest,
    CreateVolumeRequest,
    CreateVpcEndpointRequest,
    CreateVpcEndpointConnectionNotificationRequest,
    CreateVpnConnectionRequest,
    CreateVpnConnectionRouteRequest,
    CreateVpnGatewayRequest,
    DeleteCarrierGatewayRequest,
    DeleteClientVpnEndpointRequest,
    DeleteClientVpnRouteRequest,
    DeleteCustomerGatewayRequest,
    DeleteDhcpOptionsRequest,
    DeleteEgressOnlyInternetGatewayRequest,
    DeleteFleetsRequest,
    DeleteFlowLogsRequest,
    DeleteFpgaImageRequest,
    DeleteInstanceEventWindowRequest,
    DeleteInternetGatewayRequest,
    DeleteIpamRequest,
    DeleteIpamPoolRequest,
    DeleteIpamScopeRequest,
    DeleteLaunchTemplateVersionsRequest,
    DeleteLocalGatewayRouteRequest,
    DeleteLocalGatewayRouteTableVpcAssociationRequest,
    DeleteManagedPrefixListRequest,
    DeleteNatGatewayRequest,
    DeleteNetworkAclRequest,
    DeleteNetworkAclEntryRequest,
    DeleteNetworkInsightsAccessScopeRequest,
    DeleteNetworkInsightsAccessScopeAnalysisRequest,
    DeleteNetworkInsightsAnalysisRequest,
    DeleteNetworkInsightsPathRequest,
    DeleteNetworkInterfaceRequest,
    DeleteNetworkInterfacePermissionRequest,
    DeletePlacementGroupRequest,
    DeletePublicIpv4PoolRequest,
    DeleteQueuedReservedInstancesRequest,
    DeleteRouteRequest,
    DeleteRouteTableRequest,
    DeleteSnapshotRequest,
    DeleteSubnetRequest,
    DeleteSubnetCidrReservationRequest,
    DeleteTagsRequest,
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
    DeleteVolumeRequest,
    DeleteVpcRequest,
    DeleteVpcEndpointConnectionNotificationsRequest,
    DeleteVpcEndpointServiceConfigurationsRequest,
    DeleteVpcEndpointsRequest,
    DeleteVpcPeeringConnectionRequest,
    DeleteVpnConnectionRequest,
    DeleteVpnConnectionRouteRequest,
    DeleteVpnGatewayRequest,
    DeprovisionByoipCidrRequest,
    DeprovisionIpamPoolCidrRequest,
    DeprovisionPublicIpv4PoolCidrRequest,
    DeregisterImageRequest,
    DescribeByoipCidrsRequest,
    DescribeClientVpnAuthorizationRulesRequest,
    DescribeClientVpnConnectionsRequest,
    DescribeClientVpnRoutesRequest,
    DescribeClientVpnTargetNetworksRequest,
    DescribeFleetHistoryRequest,
    DescribeFleetInstancesRequest,
    DescribeFpgaImageAttributeRequest,
    DescribeIdentityIdFormatRequest,
    DescribeImageAttributeRequest,
    DescribeInstanceAttributeRequest,
    DescribeNetworkInterfaceAttributeRequest,
    DescribeScheduledInstanceAvailabilityRequest,
    DescribeSecurityGroupReferencesRequest,
    DescribeSnapshotAttributeRequest,
    DescribeSpotFleetInstancesRequest,
    DescribeSpotFleetRequestHistoryRequest,
    DescribeStaleSecurityGroupsRequest,
    DescribeVolumeAttributeRequest,
    DescribeVpcAttributeRequest,
    DescribeVpcEndpointServicePermissionsRequest,
    DetachClassicLinkVpcRequest,
    DetachInternetGatewayRequest,
    DetachNetworkInterfaceRequest,
    DetachVolumeRequest,
    DetachVpnGatewayRequest,
    DisableFastLaunchRequest,
    DisableFastSnapshotRestoresRequest,
    DisableImageDeprecationRequest,
    DisableIpamOrganizationAdminAccountRequest,
    DisableTransitGatewayRouteTablePropagationRequest,
    DisableVgwRoutePropagationRequest,
    DisableVpcClassicLinkRequest,
    DisassociateClientVpnTargetNetworkRequest,
    DisassociateIamInstanceProfileRequest,
    DisassociateInstanceEventWindowRequest,
    DisassociateRouteTableRequest,
    DisassociateSubnetCidrBlockRequest,
    DisassociateTransitGatewayRouteTableRequest,
    DisassociateTrunkInterfaceRequest,
    DisassociateVpcCidrBlockRequest,
    EnableFastLaunchRequest,
    EnableFastSnapshotRestoresRequest,
    EnableImageDeprecationRequest,
    EnableIpamOrganizationAdminAccountRequest,
    EnableTransitGatewayRouteTablePropagationRequest,
    EnableVgwRoutePropagationRequest,
    EnableVolumeIORequest,
    EnableVpcClassicLinkRequest,
    ExportClientVpnClientCertificateRevocationListRequest,
    ExportClientVpnClientConfigurationRequest,
    ExportImageRequest,
    ExportTransitGatewayRoutesRequest,
    GetAssociatedIpv6PoolCidrsRequest,
    GetCapacityReservationUsageRequest,
    GetCoipPoolUsageRequest,
    GetConsoleOutputRequest,
    GetConsoleScreenshotRequest,
    GetDefaultCreditSpecificationRequest,
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
    GetSpotPlacementScoresRequest,
    GetSubnetCidrReservationsRequest,
    GetTransitGatewayAttachmentPropagationsRequest,
    GetTransitGatewayPrefixListReferencesRequest,
    GetTransitGatewayRouteTableAssociationsRequest,
    GetTransitGatewayRouteTablePropagationsRequest,
    GetVpnConnectionDeviceSampleConfigurationRequest,
    ImportClientVpnClientCertificateRevocationListRequest,
    ImportInstanceRequest,
    ImportKeyPairRequest,
    ImportVolumeRequest,
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
    ModifyIdFormatRequest,
    ModifyIdentityIdFormatRequest,
    ModifyImageAttributeRequest,
    ModifyInstanceAttributeRequest,
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
    ModifyManagedPrefixListRequest,
    ModifyNetworkInterfaceAttributeRequest,
    ModifyReservedInstancesRequest,
    ModifySecurityGroupRulesRequest,
    ModifySnapshotAttributeRequest,
    ModifySnapshotTierRequest,
    ModifySpotFleetRequestRequest,
    ModifySubnetAttributeRequest,
    ModifyTrafficMirrorFilterNetworkServicesRequest,
    ModifyTrafficMirrorFilterRuleRequest,
    ModifyTrafficMirrorSessionRequest,
    ModifyTransitGatewayRequest,
    ModifyTransitGatewayPrefixListReferenceRequest,
    ModifyTransitGatewayVpcAttachmentRequest,
    ModifyVolumeRequest,
    ModifyVolumeAttributeRequest,
    ModifyVpcAttributeRequest,
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
    RebootInstancesRequest,
    RegisterImageRequest,
    RejectTransitGatewayPeeringAttachmentRequest,
    RejectTransitGatewayVpcAttachmentRequest,
    RejectVpcEndpointConnectionsRequest,
    RejectVpcPeeringConnectionRequest,
    ReleaseHostsRequest,
    ReleaseIpamPoolAllocationRequest,
    ReplaceIamInstanceProfileAssociationRequest,
    ReplaceNetworkAclAssociationRequest,
    ReplaceNetworkAclEntryRequest,
    ReplaceRouteRequest,
    ReplaceRouteTableAssociationRequest,
    ReplaceTransitGatewayRouteRequest,
    ReportInstanceStatusRequest,
    RequestSpotFleetRequest,
    ResetAddressAttributeRequest,
    ResetFpgaImageAttributeRequest,
    ResetImageAttributeRequest,
    ResetInstanceAttributeRequest,
    ResetNetworkInterfaceAttributeRequest,
    ResetSnapshotAttributeRequest,
    RestoreAddressToClassicRequest,
    RestoreImageFromRecycleBinRequest,
    RestoreManagedPrefixListVersionRequest,
    RestoreSnapshotFromRecycleBinRequest,
    RestoreSnapshotTierRequest,
    RevokeClientVpnIngressRequest,
    RevokeSecurityGroupEgressRequest,
    RunInstancesRequest,
    RunScheduledInstancesRequest,
    SearchLocalGatewayRoutesRequest,
    SearchTransitGatewayRoutesRequest,
    SendDiagnosticInterruptRequest,
    StartInstancesRequest,
    StartNetworkInsightsAccessScopeAnalysisRequest,
    StartNetworkInsightsAnalysisRequest,
    StartVpcEndpointServicePrivateDnsVerificationRequest,
    StopInstancesRequest,
    TerminateClientVpnConnectionsRequest,
    TerminateInstancesRequest,
    UnassignIpv6AddressesRequest,
    UnassignPrivateIpAddressesRequest,
    UnmonitorInstancesRequest,
    WithdrawByoipCidrRequest,
    AcceptReservedInstancesExchangeQuoteResult,
    AcceptTransitGatewayPeeringAttachmentResult,
    AcceptTransitGatewayVpcAttachmentResult,
    AcceptVpcEndpointConnectionsResult,
    AdvertiseByoipCidrResult,
    AllocateHostsResult,
    AllocateIpamPoolCidrResult,
    ApplySecurityGroupsToClientVpnTargetNetworkResult,
    AssignIpv6AddressesResult,
    AssignPrivateIpAddressesResult,
    AssociateClientVpnTargetNetworkResult,
    AssociateIamInstanceProfileResult,
    AssociateInstanceEventWindowResult,
    AssociateRouteTableResult,
    AssociateSubnetCidrBlockResult,
    AssociateTransitGatewayRouteTableResult,
    AssociateTrunkInterfaceResult,
    AssociateVpcCidrBlockResult,
    AttachClassicLinkVpcResult,
    AttachNetworkInterfaceResult,
    VolumeAttachment,
    AttachVpnGatewayResult,
    AuthorizeClientVpnIngressResult,
    AuthorizeSecurityGroupEgressResult,
    BundleInstanceResult,
    CancelBundleTaskResult,
    CancelCapacityReservationResult,
    CancelCapacityReservationFleetsResult,
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
    CreateDhcpOptionsResult,
    CreateEgressOnlyInternetGatewayResult,
    CreateFleetResult,
    CreateFlowLogsResult,
    CreateFpgaImageResult,
    CreateImageResult,
    CreateInstanceExportTaskResult,
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
    CreateTrafficMirrorFilterRuleResult,
    CreateTrafficMirrorSessionResult,
    CreateTransitGatewayConnectResult,
    CreateTransitGatewayConnectPeerResult,
    CreateTransitGatewayMulticastDomainResult,
    CreateTransitGatewayPeeringAttachmentResult,
    CreateTransitGatewayPrefixListReferenceResult,
    CreateTransitGatewayRouteResult,
    CreateTransitGatewayRouteTableResult,
    CreateTransitGatewayVpcAttachmentResult,
    Volume,
    CreateVpcEndpointResult,
    CreateVpcEndpointConnectionNotificationResult,
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
    DescribeByoipCidrsResult,
    DescribeClientVpnAuthorizationRulesResult,
    DescribeClientVpnConnectionsResult,
    DescribeClientVpnRoutesResult,
    DescribeClientVpnTargetNetworksResult,
    DescribeFleetHistoryResult,
    DescribeFleetInstancesResult,
    DescribeFpgaImageAttributeResult,
    DescribeIdentityIdFormatResult,
    ImageAttribute,
    InstanceAttribute,
    DescribeNetworkInterfaceAttributeResult,
    DescribeScheduledInstanceAvailabilityResult,
    DescribeSecurityGroupReferencesResult,
    DescribeSnapshotAttributeResult,
    DescribeSpotFleetInstancesResponse,
    DescribeSpotFleetRequestHistoryResponse,
    DescribeStaleSecurityGroupsResult,
    DescribeVolumeAttributeResult,
    DescribeVpcAttributeResult,
    DescribeVpcEndpointServicePermissionsResult,
    DetachClassicLinkVpcResult,
    DisableFastLaunchResult,
    DisableFastSnapshotRestoresResult,
    DisableImageDeprecationResult,
    DisableIpamOrganizationAdminAccountResult,
    DisableTransitGatewayRouteTablePropagationResult,
    DisableVpcClassicLinkResult,
    DisassociateClientVpnTargetNetworkResult,
    DisassociateIamInstanceProfileResult,
    DisassociateInstanceEventWindowResult,
    DisassociateSubnetCidrBlockResult,
    DisassociateTransitGatewayRouteTableResult,
    DisassociateTrunkInterfaceResult,
    DisassociateVpcCidrBlockResult,
    EnableFastLaunchResult,
    EnableFastSnapshotRestoresResult,
    EnableImageDeprecationResult,
    EnableIpamOrganizationAdminAccountResult,
    EnableTransitGatewayRouteTablePropagationResult,
    EnableVpcClassicLinkResult,
    ExportClientVpnClientCertificateRevocationListResult,
    ExportClientVpnClientConfigurationResult,
    ExportImageResult,
    ExportTransitGatewayRoutesResult,
    GetAssociatedIpv6PoolCidrsResult,
    GetCapacityReservationUsageResult,
    GetCoipPoolUsageResult,
    GetConsoleOutputResult,
    GetConsoleScreenshotResult,
    GetDefaultCreditSpecificationResult,
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
    GetSpotPlacementScoresResult,
    GetSubnetCidrReservationsResult,
    GetTransitGatewayAttachmentPropagationsResult,
    GetTransitGatewayPrefixListReferencesResult,
    GetTransitGatewayRouteTableAssociationsResult,
    GetTransitGatewayRouteTablePropagationsResult,
    GetVpnConnectionDeviceSampleConfigurationResult,
    ImportClientVpnClientCertificateRevocationListResult,
    ImportInstanceResult,
    ImportKeyPairResult,
    ImportVolumeResult,
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
    ModifyManagedPrefixListResult,
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
    ResetAddressAttributeResult,
    ResetFpgaImageAttributeResult,
    RestoreAddressToClassicResult,
    RestoreImageFromRecycleBinResult,
    RestoreManagedPrefixListVersionResult,
    RestoreSnapshotFromRecycleBinResult,
    RestoreSnapshotTierResult,
    RevokeClientVpnIngressResult,
    RevokeSecurityGroupEgressResult,
    Reservation,
    RunScheduledInstancesResult,
    SearchLocalGatewayRoutesResult,
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
    WithdrawByoipCidrResult
} from "aws-sdk/clients/ec2";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ec2.ProxyProtocolPolicy {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.ec2.ProxyProtocolPolicy>) {
        super(...args)
        this.client = new awssdk.EC2()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/ec2-2016-11-15.normal.json"), this.client)
    }

    invokeAcceptReservedInstancesExchangeQuote(partialParams: ToOptional<{
      [K in keyof AcceptReservedInstancesExchangeQuoteRequest]: (AcceptReservedInstancesExchangeQuoteRequest)[K]
    }>): AcceptReservedInstancesExchangeQuoteResult {
        return this.client.acceptReservedInstancesExchangeQuote(
            this.ops["AcceptReservedInstancesExchangeQuote"].apply(partialParams)
        );
    }

    invokeAcceptTransitGatewayPeeringAttachment(partialParams: ToOptional<{
      [K in keyof AcceptTransitGatewayPeeringAttachmentRequest]: (AcceptTransitGatewayPeeringAttachmentRequest)[K]
    }>): AcceptTransitGatewayPeeringAttachmentResult {
        return this.client.acceptTransitGatewayPeeringAttachment(
            this.ops["AcceptTransitGatewayPeeringAttachment"].apply(partialParams)
        );
    }

    invokeAcceptTransitGatewayVpcAttachment(partialParams: ToOptional<{
      [K in keyof AcceptTransitGatewayVpcAttachmentRequest]: (AcceptTransitGatewayVpcAttachmentRequest)[K]
    }>): AcceptTransitGatewayVpcAttachmentResult {
        return this.client.acceptTransitGatewayVpcAttachment(
            this.ops["AcceptTransitGatewayVpcAttachment"].apply(partialParams)
        );
    }

    invokeAcceptVpcEndpointConnections(partialParams: ToOptional<{
      [K in keyof AcceptVpcEndpointConnectionsRequest]: (AcceptVpcEndpointConnectionsRequest)[K]
    }>): AcceptVpcEndpointConnectionsResult {
        return this.client.acceptVpcEndpointConnections(
            this.ops["AcceptVpcEndpointConnections"].apply(partialParams)
        );
    }

    invokeAdvertiseByoipCidr(partialParams: ToOptional<{
      [K in keyof AdvertiseByoipCidrRequest]: (AdvertiseByoipCidrRequest)[K]
    }>): AdvertiseByoipCidrResult {
        return this.client.advertiseByoipCidr(
            this.ops["AdvertiseByoipCidr"].apply(partialParams)
        );
    }

    invokeAllocateHosts(partialParams: ToOptional<{
      [K in keyof AllocateHostsRequest]: (AllocateHostsRequest)[K]
    }>): AllocateHostsResult {
        return this.client.allocateHosts(
            this.ops["AllocateHosts"].apply(partialParams)
        );
    }

    invokeAllocateIpamPoolCidr(partialParams: ToOptional<{
      [K in keyof AllocateIpamPoolCidrRequest]: (AllocateIpamPoolCidrRequest)[K]
    }>): AllocateIpamPoolCidrResult {
        return this.client.allocateIpamPoolCidr(
            this.ops["AllocateIpamPoolCidr"].apply(partialParams)
        );
    }

    invokeApplySecurityGroupsToClientVpnTargetNetwork(partialParams: ToOptional<{
      [K in keyof ApplySecurityGroupsToClientVpnTargetNetworkRequest]: (ApplySecurityGroupsToClientVpnTargetNetworkRequest)[K]
    }>): ApplySecurityGroupsToClientVpnTargetNetworkResult {
        return this.client.applySecurityGroupsToClientVpnTargetNetwork(
            this.ops["ApplySecurityGroupsToClientVpnTargetNetwork"].apply(partialParams)
        );
    }

    invokeAssignIpv6Addresses(partialParams: ToOptional<{
      [K in keyof AssignIpv6AddressesRequest]: (AssignIpv6AddressesRequest)[K]
    }>): AssignIpv6AddressesResult {
        return this.client.assignIpv6Addresses(
            this.ops["AssignIpv6Addresses"].apply(partialParams)
        );
    }

    invokeAssignPrivateIpAddresses(partialParams: ToOptional<{
      [K in keyof AssignPrivateIpAddressesRequest]: (AssignPrivateIpAddressesRequest)[K]
    }>): AssignPrivateIpAddressesResult {
        return this.client.assignPrivateIpAddresses(
            this.ops["AssignPrivateIpAddresses"].apply(partialParams)
        );
    }

    invokeAssociateClientVpnTargetNetwork(partialParams: ToOptional<{
      [K in keyof AssociateClientVpnTargetNetworkRequest]: (AssociateClientVpnTargetNetworkRequest)[K]
    }>): AssociateClientVpnTargetNetworkResult {
        return this.client.associateClientVpnTargetNetwork(
            this.ops["AssociateClientVpnTargetNetwork"].apply(partialParams)
        );
    }

    invokeAssociateDhcpOptions(partialParams: ToOptional<{
      [K in keyof AssociateDhcpOptionsRequest]: (AssociateDhcpOptionsRequest)[K]
    }>): void {
        return this.client.associateDhcpOptions(
            this.ops["AssociateDhcpOptions"].apply(partialParams)
        );
    }

    invokeAssociateIamInstanceProfile(partialParams: ToOptional<{
      [K in keyof AssociateIamInstanceProfileRequest]: (AssociateIamInstanceProfileRequest)[K]
    }>): AssociateIamInstanceProfileResult {
        return this.client.associateIamInstanceProfile(
            this.ops["AssociateIamInstanceProfile"].apply(partialParams)
        );
    }

    invokeAssociateInstanceEventWindow(partialParams: ToOptional<{
      [K in keyof AssociateInstanceEventWindowRequest]: (AssociateInstanceEventWindowRequest)[K]
    }>): AssociateInstanceEventWindowResult {
        return this.client.associateInstanceEventWindow(
            this.ops["AssociateInstanceEventWindow"].apply(partialParams)
        );
    }

    invokeAssociateRouteTable(partialParams: ToOptional<{
      [K in keyof AssociateRouteTableRequest]: (AssociateRouteTableRequest)[K]
    }>): AssociateRouteTableResult {
        return this.client.associateRouteTable(
            this.ops["AssociateRouteTable"].apply(partialParams)
        );
    }

    invokeAssociateSubnetCidrBlock(partialParams: ToOptional<{
      [K in keyof AssociateSubnetCidrBlockRequest]: (AssociateSubnetCidrBlockRequest)[K]
    }>): AssociateSubnetCidrBlockResult {
        return this.client.associateSubnetCidrBlock(
            this.ops["AssociateSubnetCidrBlock"].apply(partialParams)
        );
    }

    invokeAssociateTransitGatewayRouteTable(partialParams: ToOptional<{
      [K in keyof AssociateTransitGatewayRouteTableRequest]: (AssociateTransitGatewayRouteTableRequest)[K]
    }>): AssociateTransitGatewayRouteTableResult {
        return this.client.associateTransitGatewayRouteTable(
            this.ops["AssociateTransitGatewayRouteTable"].apply(partialParams)
        );
    }

    invokeAssociateTrunkInterface(partialParams: ToOptional<{
      [K in keyof AssociateTrunkInterfaceRequest]: (AssociateTrunkInterfaceRequest)[K]
    }>): AssociateTrunkInterfaceResult {
        return this.client.associateTrunkInterface(
            this.ops["AssociateTrunkInterface"].apply(partialParams)
        );
    }

    invokeAssociateVpcCidrBlock(partialParams: ToOptional<{
      [K in keyof AssociateVpcCidrBlockRequest]: (AssociateVpcCidrBlockRequest)[K]
    }>): AssociateVpcCidrBlockResult {
        return this.client.associateVpcCidrBlock(
            this.ops["AssociateVpcCidrBlock"].apply(partialParams)
        );
    }

    invokeAttachClassicLinkVpc(partialParams: ToOptional<{
      [K in keyof AttachClassicLinkVpcRequest]: (AttachClassicLinkVpcRequest)[K]
    }>): AttachClassicLinkVpcResult {
        return this.client.attachClassicLinkVpc(
            this.ops["AttachClassicLinkVpc"].apply(partialParams)
        );
    }

    invokeAttachInternetGateway(partialParams: ToOptional<{
      [K in keyof AttachInternetGatewayRequest]: (AttachInternetGatewayRequest)[K]
    }>): void {
        return this.client.attachInternetGateway(
            this.ops["AttachInternetGateway"].apply(partialParams)
        );
    }

    invokeAttachNetworkInterface(partialParams: ToOptional<{
      [K in keyof AttachNetworkInterfaceRequest]: (AttachNetworkInterfaceRequest)[K]
    }>): AttachNetworkInterfaceResult {
        return this.client.attachNetworkInterface(
            this.ops["AttachNetworkInterface"].apply(partialParams)
        );
    }

    invokeAttachVolume(partialParams: ToOptional<{
      [K in keyof AttachVolumeRequest]: (AttachVolumeRequest)[K]
    }>): VolumeAttachment {
        return this.client.attachVolume(
            this.ops["AttachVolume"].apply(partialParams)
        );
    }

    invokeAttachVpnGateway(partialParams: ToOptional<{
      [K in keyof AttachVpnGatewayRequest]: (AttachVpnGatewayRequest)[K]
    }>): AttachVpnGatewayResult {
        return this.client.attachVpnGateway(
            this.ops["AttachVpnGateway"].apply(partialParams)
        );
    }

    invokeAuthorizeClientVpnIngress(partialParams: ToOptional<{
      [K in keyof AuthorizeClientVpnIngressRequest]: (AuthorizeClientVpnIngressRequest)[K]
    }>): AuthorizeClientVpnIngressResult {
        return this.client.authorizeClientVpnIngress(
            this.ops["AuthorizeClientVpnIngress"].apply(partialParams)
        );
    }

    invokeAuthorizeSecurityGroupEgress(partialParams: ToOptional<{
      [K in keyof AuthorizeSecurityGroupEgressRequest]: (AuthorizeSecurityGroupEgressRequest)[K]
    }>): AuthorizeSecurityGroupEgressResult {
        return this.client.authorizeSecurityGroupEgress(
            this.ops["AuthorizeSecurityGroupEgress"].apply(partialParams)
        );
    }

    invokeBundleInstance(partialParams: ToOptional<{
      [K in keyof BundleInstanceRequest]: (BundleInstanceRequest)[K]
    }>): BundleInstanceResult {
        return this.client.bundleInstance(
            this.ops["BundleInstance"].apply(partialParams)
        );
    }

    invokeCancelBundleTask(partialParams: ToOptional<{
      [K in keyof CancelBundleTaskRequest]: (CancelBundleTaskRequest)[K]
    }>): CancelBundleTaskResult {
        return this.client.cancelBundleTask(
            this.ops["CancelBundleTask"].apply(partialParams)
        );
    }

    invokeCancelCapacityReservation(partialParams: ToOptional<{
      [K in keyof CancelCapacityReservationRequest]: (CancelCapacityReservationRequest)[K]
    }>): CancelCapacityReservationResult {
        return this.client.cancelCapacityReservation(
            this.ops["CancelCapacityReservation"].apply(partialParams)
        );
    }

    invokeCancelCapacityReservationFleets(partialParams: ToOptional<{
      [K in keyof CancelCapacityReservationFleetsRequest]: (CancelCapacityReservationFleetsRequest)[K]
    }>): CancelCapacityReservationFleetsResult {
        return this.client.cancelCapacityReservationFleets(
            this.ops["CancelCapacityReservationFleets"].apply(partialParams)
        );
    }

    invokeCancelConversionTask(partialParams: ToOptional<{
      [K in keyof CancelConversionRequest]: (CancelConversionRequest)[K]
    }>): void {
        return this.client.cancelConversionTask(
            this.ops["CancelConversionTask"].apply(partialParams)
        );
    }

    invokeCancelExportTask(partialParams: ToOptional<{
      [K in keyof CancelExportTaskRequest]: (CancelExportTaskRequest)[K]
    }>): void {
        return this.client.cancelExportTask(
            this.ops["CancelExportTask"].apply(partialParams)
        );
    }

    invokeCancelReservedInstancesListing(partialParams: ToOptional<{
      [K in keyof CancelReservedInstancesListingRequest]: (CancelReservedInstancesListingRequest)[K]
    }>): CancelReservedInstancesListingResult {
        return this.client.cancelReservedInstancesListing(
            this.ops["CancelReservedInstancesListing"].apply(partialParams)
        );
    }

    invokeCancelSpotFleetRequests(partialParams: ToOptional<{
      [K in keyof CancelSpotFleetRequestsRequest]: (CancelSpotFleetRequestsRequest)[K]
    }>): CancelSpotFleetRequestsResponse {
        return this.client.cancelSpotFleetRequests(
            this.ops["CancelSpotFleetRequests"].apply(partialParams)
        );
    }

    invokeCancelSpotInstanceRequests(partialParams: ToOptional<{
      [K in keyof CancelSpotInstanceRequestsRequest]: (CancelSpotInstanceRequestsRequest)[K]
    }>): CancelSpotInstanceRequestsResult {
        return this.client.cancelSpotInstanceRequests(
            this.ops["CancelSpotInstanceRequests"].apply(partialParams)
        );
    }

    invokeConfirmProductInstance(partialParams: ToOptional<{
      [K in keyof ConfirmProductInstanceRequest]: (ConfirmProductInstanceRequest)[K]
    }>): ConfirmProductInstanceResult {
        return this.client.confirmProductInstance(
            this.ops["ConfirmProductInstance"].apply(partialParams)
        );
    }

    invokeCopyFpgaImage(partialParams: ToOptional<{
      [K in keyof CopyFpgaImageRequest]: (CopyFpgaImageRequest)[K]
    }>): CopyFpgaImageResult {
        return this.client.copyFpgaImage(
            this.ops["CopyFpgaImage"].apply(partialParams)
        );
    }

    invokeCopyImage(partialParams: ToOptional<{
      [K in keyof CopyImageRequest]: (CopyImageRequest)[K]
    }>): CopyImageResult {
        return this.client.copyImage(
            this.ops["CopyImage"].apply(partialParams)
        );
    }

    invokeCopySnapshot(partialParams: ToOptional<{
      [K in keyof CopySnapshotRequest]: (CopySnapshotRequest)[K]
    }>): CopySnapshotResult {
        return this.client.copySnapshot(
            this.ops["CopySnapshot"].apply(partialParams)
        );
    }

    invokeCreateCapacityReservation(partialParams: ToOptional<{
      [K in keyof CreateCapacityReservationRequest]: (CreateCapacityReservationRequest)[K]
    }>): CreateCapacityReservationResult {
        return this.client.createCapacityReservation(
            this.ops["CreateCapacityReservation"].apply(partialParams)
        );
    }

    invokeCreateCapacityReservationFleet(partialParams: ToOptional<{
      [K in keyof CreateCapacityReservationFleetRequest]: (CreateCapacityReservationFleetRequest)[K]
    }>): CreateCapacityReservationFleetResult {
        return this.client.createCapacityReservationFleet(
            this.ops["CreateCapacityReservationFleet"].apply(partialParams)
        );
    }

    invokeCreateCarrierGateway(partialParams: ToOptional<{
      [K in keyof CreateCarrierGatewayRequest]: (CreateCarrierGatewayRequest)[K]
    }>): CreateCarrierGatewayResult {
        return this.client.createCarrierGateway(
            this.ops["CreateCarrierGateway"].apply(partialParams)
        );
    }

    invokeCreateClientVpnEndpoint(partialParams: ToOptional<{
      [K in keyof CreateClientVpnEndpointRequest]: (CreateClientVpnEndpointRequest)[K]
    }>): CreateClientVpnEndpointResult {
        return this.client.createClientVpnEndpoint(
            this.ops["CreateClientVpnEndpoint"].apply(partialParams)
        );
    }

    invokeCreateClientVpnRoute(partialParams: ToOptional<{
      [K in keyof CreateClientVpnRouteRequest]: (CreateClientVpnRouteRequest)[K]
    }>): CreateClientVpnRouteResult {
        return this.client.createClientVpnRoute(
            this.ops["CreateClientVpnRoute"].apply(partialParams)
        );
    }

    invokeCreateCustomerGateway(partialParams: ToOptional<{
      [K in keyof CreateCustomerGatewayRequest]: (CreateCustomerGatewayRequest)[K]
    }>): CreateCustomerGatewayResult {
        return this.client.createCustomerGateway(
            this.ops["CreateCustomerGateway"].apply(partialParams)
        );
    }

    invokeCreateDefaultSubnet(partialParams: ToOptional<{
      [K in keyof CreateDefaultSubnetRequest]: (CreateDefaultSubnetRequest)[K]
    }>): CreateDefaultSubnetResult {
        return this.client.createDefaultSubnet(
            this.ops["CreateDefaultSubnet"].apply(partialParams)
        );
    }

    invokeCreateDhcpOptions(partialParams: ToOptional<{
      [K in keyof CreateDhcpOptionsRequest]: (CreateDhcpOptionsRequest)[K]
    }>): CreateDhcpOptionsResult {
        return this.client.createDhcpOptions(
            this.ops["CreateDhcpOptions"].apply(partialParams)
        );
    }

    invokeCreateEgressOnlyInternetGateway(partialParams: ToOptional<{
      [K in keyof CreateEgressOnlyInternetGatewayRequest]: (CreateEgressOnlyInternetGatewayRequest)[K]
    }>): CreateEgressOnlyInternetGatewayResult {
        return this.client.createEgressOnlyInternetGateway(
            this.ops["CreateEgressOnlyInternetGateway"].apply(partialParams)
        );
    }

    invokeCreateFleet(partialParams: ToOptional<{
      [K in keyof CreateFleetRequest]: (CreateFleetRequest)[K]
    }>): CreateFleetResult {
        return this.client.createFleet(
            this.ops["CreateFleet"].apply(partialParams)
        );
    }

    invokeCreateFlowLogs(partialParams: ToOptional<{
      [K in keyof CreateFlowLogsRequest]: (CreateFlowLogsRequest)[K]
    }>): CreateFlowLogsResult {
        return this.client.createFlowLogs(
            this.ops["CreateFlowLogs"].apply(partialParams)
        );
    }

    invokeCreateFpgaImage(partialParams: ToOptional<{
      [K in keyof CreateFpgaImageRequest]: (CreateFpgaImageRequest)[K]
    }>): CreateFpgaImageResult {
        return this.client.createFpgaImage(
            this.ops["CreateFpgaImage"].apply(partialParams)
        );
    }

    invokeCreateImage(partialParams: ToOptional<{
      [K in keyof CreateImageRequest]: (CreateImageRequest)[K]
    }>): CreateImageResult {
        return this.client.createImage(
            this.ops["CreateImage"].apply(partialParams)
        );
    }

    invokeCreateInstanceExportTask(partialParams: ToOptional<{
      [K in keyof CreateInstanceExportTaskRequest]: (CreateInstanceExportTaskRequest)[K]
    }>): CreateInstanceExportTaskResult {
        return this.client.createInstanceExportTask(
            this.ops["CreateInstanceExportTask"].apply(partialParams)
        );
    }

    invokeCreateIpamPool(partialParams: ToOptional<{
      [K in keyof CreateIpamPoolRequest]: (CreateIpamPoolRequest)[K]
    }>): CreateIpamPoolResult {
        return this.client.createIpamPool(
            this.ops["CreateIpamPool"].apply(partialParams)
        );
    }

    invokeCreateIpamScope(partialParams: ToOptional<{
      [K in keyof CreateIpamScopeRequest]: (CreateIpamScopeRequest)[K]
    }>): CreateIpamScopeResult {
        return this.client.createIpamScope(
            this.ops["CreateIpamScope"].apply(partialParams)
        );
    }

    invokeCreateKeyPair(partialParams: ToOptional<{
      [K in keyof CreateKeyPairRequest]: (CreateKeyPairRequest)[K]
    }>): KeyPair {
        return this.client.createKeyPair(
            this.ops["CreateKeyPair"].apply(partialParams)
        );
    }

    invokeCreateLaunchTemplate(partialParams: ToOptional<{
      [K in keyof CreateLaunchTemplateRequest]: (CreateLaunchTemplateRequest)[K]
    }>): CreateLaunchTemplateResult {
        return this.client.createLaunchTemplate(
            this.ops["CreateLaunchTemplate"].apply(partialParams)
        );
    }

    invokeCreateLaunchTemplateVersion(partialParams: ToOptional<{
      [K in keyof CreateLaunchTemplateVersionRequest]: (CreateLaunchTemplateVersionRequest)[K]
    }>): CreateLaunchTemplateVersionResult {
        return this.client.createLaunchTemplateVersion(
            this.ops["CreateLaunchTemplateVersion"].apply(partialParams)
        );
    }

    invokeCreateLocalGatewayRoute(partialParams: ToOptional<{
      [K in keyof CreateLocalGatewayRouteRequest]: (CreateLocalGatewayRouteRequest)[K]
    }>): CreateLocalGatewayRouteResult {
        return this.client.createLocalGatewayRoute(
            this.ops["CreateLocalGatewayRoute"].apply(partialParams)
        );
    }

    invokeCreateLocalGatewayRouteTableVpcAssociation(partialParams: ToOptional<{
      [K in keyof CreateLocalGatewayRouteTableVpcAssociationRequest]: (CreateLocalGatewayRouteTableVpcAssociationRequest)[K]
    }>): CreateLocalGatewayRouteTableVpcAssociationResult {
        return this.client.createLocalGatewayRouteTableVpcAssociation(
            this.ops["CreateLocalGatewayRouteTableVpcAssociation"].apply(partialParams)
        );
    }

    invokeCreateManagedPrefixList(partialParams: ToOptional<{
      [K in keyof CreateManagedPrefixListRequest]: (CreateManagedPrefixListRequest)[K]
    }>): CreateManagedPrefixListResult {
        return this.client.createManagedPrefixList(
            this.ops["CreateManagedPrefixList"].apply(partialParams)
        );
    }

    invokeCreateNatGateway(partialParams: ToOptional<{
      [K in keyof CreateNatGatewayRequest]: (CreateNatGatewayRequest)[K]
    }>): CreateNatGatewayResult {
        return this.client.createNatGateway(
            this.ops["CreateNatGateway"].apply(partialParams)
        );
    }

    invokeCreateNetworkAcl(partialParams: ToOptional<{
      [K in keyof CreateNetworkAclRequest]: (CreateNetworkAclRequest)[K]
    }>): CreateNetworkAclResult {
        return this.client.createNetworkAcl(
            this.ops["CreateNetworkAcl"].apply(partialParams)
        );
    }

    invokeCreateNetworkAclEntry(partialParams: ToOptional<{
      [K in keyof CreateNetworkAclEntryRequest]: (CreateNetworkAclEntryRequest)[K]
    }>): void {
        return this.client.createNetworkAclEntry(
            this.ops["CreateNetworkAclEntry"].apply(partialParams)
        );
    }

    invokeCreateNetworkInsightsAccessScope(partialParams: ToOptional<{
      [K in keyof CreateNetworkInsightsAccessScopeRequest]: (CreateNetworkInsightsAccessScopeRequest)[K]
    }>): CreateNetworkInsightsAccessScopeResult {
        return this.client.createNetworkInsightsAccessScope(
            this.ops["CreateNetworkInsightsAccessScope"].apply(partialParams)
        );
    }

    invokeCreateNetworkInsightsPath(partialParams: ToOptional<{
      [K in keyof CreateNetworkInsightsPathRequest]: (CreateNetworkInsightsPathRequest)[K]
    }>): CreateNetworkInsightsPathResult {
        return this.client.createNetworkInsightsPath(
            this.ops["CreateNetworkInsightsPath"].apply(partialParams)
        );
    }

    invokeCreateNetworkInterface(partialParams: ToOptional<{
      [K in keyof CreateNetworkInterfaceRequest]: (CreateNetworkInterfaceRequest)[K]
    }>): CreateNetworkInterfaceResult {
        return this.client.createNetworkInterface(
            this.ops["CreateNetworkInterface"].apply(partialParams)
        );
    }

    invokeCreateNetworkInterfacePermission(partialParams: ToOptional<{
      [K in keyof CreateNetworkInterfacePermissionRequest]: (CreateNetworkInterfacePermissionRequest)[K]
    }>): CreateNetworkInterfacePermissionResult {
        return this.client.createNetworkInterfacePermission(
            this.ops["CreateNetworkInterfacePermission"].apply(partialParams)
        );
    }

    invokeCreateReplaceRootVolumeTask(partialParams: ToOptional<{
      [K in keyof CreateReplaceRootVolumeTaskRequest]: (CreateReplaceRootVolumeTaskRequest)[K]
    }>): CreateReplaceRootVolumeTaskResult {
        return this.client.createReplaceRootVolumeTask(
            this.ops["CreateReplaceRootVolumeTask"].apply(partialParams)
        );
    }

    invokeCreateReservedInstancesListing(partialParams: ToOptional<{
      [K in keyof CreateReservedInstancesListingRequest]: (CreateReservedInstancesListingRequest)[K]
    }>): CreateReservedInstancesListingResult {
        return this.client.createReservedInstancesListing(
            this.ops["CreateReservedInstancesListing"].apply(partialParams)
        );
    }

    invokeCreateRestoreImageTask(partialParams: ToOptional<{
      [K in keyof CreateRestoreImageTaskRequest]: (CreateRestoreImageTaskRequest)[K]
    }>): CreateRestoreImageTaskResult {
        return this.client.createRestoreImageTask(
            this.ops["CreateRestoreImageTask"].apply(partialParams)
        );
    }

    invokeCreateRoute(partialParams: ToOptional<{
      [K in keyof CreateRouteRequest]: (CreateRouteRequest)[K]
    }>): CreateRouteResult {
        return this.client.createRoute(
            this.ops["CreateRoute"].apply(partialParams)
        );
    }

    invokeCreateRouteTable(partialParams: ToOptional<{
      [K in keyof CreateRouteTableRequest]: (CreateRouteTableRequest)[K]
    }>): CreateRouteTableResult {
        return this.client.createRouteTable(
            this.ops["CreateRouteTable"].apply(partialParams)
        );
    }

    invokeCreateSecurityGroup(partialParams: ToOptional<{
      [K in keyof CreateSecurityGroupRequest]: (CreateSecurityGroupRequest)[K]
    }>): CreateSecurityGroupResult {
        return this.client.createSecurityGroup(
            this.ops["CreateSecurityGroup"].apply(partialParams)
        );
    }

    invokeCreateSnapshot(partialParams: ToOptional<{
      [K in keyof CreateSnapshotRequest]: (CreateSnapshotRequest)[K]
    }>): Snapshot {
        return this.client.createSnapshot(
            this.ops["CreateSnapshot"].apply(partialParams)
        );
    }

    invokeCreateSnapshots(partialParams: ToOptional<{
      [K in keyof CreateSnapshotsRequest]: (CreateSnapshotsRequest)[K]
    }>): CreateSnapshotsResult {
        return this.client.createSnapshots(
            this.ops["CreateSnapshots"].apply(partialParams)
        );
    }

    invokeCreateSpotDatafeedSubscription(partialParams: ToOptional<{
      [K in keyof CreateSpotDatafeedSubscriptionRequest]: (CreateSpotDatafeedSubscriptionRequest)[K]
    }>): CreateSpotDatafeedSubscriptionResult {
        return this.client.createSpotDatafeedSubscription(
            this.ops["CreateSpotDatafeedSubscription"].apply(partialParams)
        );
    }

    invokeCreateStoreImageTask(partialParams: ToOptional<{
      [K in keyof CreateStoreImageTaskRequest]: (CreateStoreImageTaskRequest)[K]
    }>): CreateStoreImageTaskResult {
        return this.client.createStoreImageTask(
            this.ops["CreateStoreImageTask"].apply(partialParams)
        );
    }

    invokeCreateSubnet(partialParams: ToOptional<{
      [K in keyof CreateSubnetRequest]: (CreateSubnetRequest)[K]
    }>): CreateSubnetResult {
        return this.client.createSubnet(
            this.ops["CreateSubnet"].apply(partialParams)
        );
    }

    invokeCreateSubnetCidrReservation(partialParams: ToOptional<{
      [K in keyof CreateSubnetCidrReservationRequest]: (CreateSubnetCidrReservationRequest)[K]
    }>): CreateSubnetCidrReservationResult {
        return this.client.createSubnetCidrReservation(
            this.ops["CreateSubnetCidrReservation"].apply(partialParams)
        );
    }

    invokeCreateTags(partialParams: ToOptional<{
      [K in keyof CreateTagsRequest]: (CreateTagsRequest)[K]
    }>): void {
        return this.client.createTags(
            this.ops["CreateTags"].apply(partialParams)
        );
    }

    invokeCreateTrafficMirrorFilterRule(partialParams: ToOptional<{
      [K in keyof CreateTrafficMirrorFilterRuleRequest]: (CreateTrafficMirrorFilterRuleRequest)[K]
    }>): CreateTrafficMirrorFilterRuleResult {
        return this.client.createTrafficMirrorFilterRule(
            this.ops["CreateTrafficMirrorFilterRule"].apply(partialParams)
        );
    }

    invokeCreateTrafficMirrorSession(partialParams: ToOptional<{
      [K in keyof CreateTrafficMirrorSessionRequest]: (CreateTrafficMirrorSessionRequest)[K]
    }>): CreateTrafficMirrorSessionResult {
        return this.client.createTrafficMirrorSession(
            this.ops["CreateTrafficMirrorSession"].apply(partialParams)
        );
    }

    invokeCreateTransitGatewayConnect(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayConnectRequest]: (CreateTransitGatewayConnectRequest)[K]
    }>): CreateTransitGatewayConnectResult {
        return this.client.createTransitGatewayConnect(
            this.ops["CreateTransitGatewayConnect"].apply(partialParams)
        );
    }

    invokeCreateTransitGatewayConnectPeer(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayConnectPeerRequest]: (CreateTransitGatewayConnectPeerRequest)[K]
    }>): CreateTransitGatewayConnectPeerResult {
        return this.client.createTransitGatewayConnectPeer(
            this.ops["CreateTransitGatewayConnectPeer"].apply(partialParams)
        );
    }

    invokeCreateTransitGatewayMulticastDomain(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayMulticastDomainRequest]: (CreateTransitGatewayMulticastDomainRequest)[K]
    }>): CreateTransitGatewayMulticastDomainResult {
        return this.client.createTransitGatewayMulticastDomain(
            this.ops["CreateTransitGatewayMulticastDomain"].apply(partialParams)
        );
    }

    invokeCreateTransitGatewayPeeringAttachment(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayPeeringAttachmentRequest]: (CreateTransitGatewayPeeringAttachmentRequest)[K]
    }>): CreateTransitGatewayPeeringAttachmentResult {
        return this.client.createTransitGatewayPeeringAttachment(
            this.ops["CreateTransitGatewayPeeringAttachment"].apply(partialParams)
        );
    }

    invokeCreateTransitGatewayPrefixListReference(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayPrefixListReferenceRequest]: (CreateTransitGatewayPrefixListReferenceRequest)[K]
    }>): CreateTransitGatewayPrefixListReferenceResult {
        return this.client.createTransitGatewayPrefixListReference(
            this.ops["CreateTransitGatewayPrefixListReference"].apply(partialParams)
        );
    }

    invokeCreateTransitGatewayRoute(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayRouteRequest]: (CreateTransitGatewayRouteRequest)[K]
    }>): CreateTransitGatewayRouteResult {
        return this.client.createTransitGatewayRoute(
            this.ops["CreateTransitGatewayRoute"].apply(partialParams)
        );
    }

    invokeCreateTransitGatewayRouteTable(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayRouteTableRequest]: (CreateTransitGatewayRouteTableRequest)[K]
    }>): CreateTransitGatewayRouteTableResult {
        return this.client.createTransitGatewayRouteTable(
            this.ops["CreateTransitGatewayRouteTable"].apply(partialParams)
        );
    }

    invokeCreateTransitGatewayVpcAttachment(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayVpcAttachmentRequest]: (CreateTransitGatewayVpcAttachmentRequest)[K]
    }>): CreateTransitGatewayVpcAttachmentResult {
        return this.client.createTransitGatewayVpcAttachment(
            this.ops["CreateTransitGatewayVpcAttachment"].apply(partialParams)
        );
    }

    invokeCreateVolume(partialParams: ToOptional<{
      [K in keyof CreateVolumeRequest]: (CreateVolumeRequest)[K]
    }>): Volume {
        return this.client.createVolume(
            this.ops["CreateVolume"].apply(partialParams)
        );
    }

    invokeCreateVpcEndpoint(partialParams: ToOptional<{
      [K in keyof CreateVpcEndpointRequest]: (CreateVpcEndpointRequest)[K]
    }>): CreateVpcEndpointResult {
        return this.client.createVpcEndpoint(
            this.ops["CreateVpcEndpoint"].apply(partialParams)
        );
    }

    invokeCreateVpcEndpointConnectionNotification(partialParams: ToOptional<{
      [K in keyof CreateVpcEndpointConnectionNotificationRequest]: (CreateVpcEndpointConnectionNotificationRequest)[K]
    }>): CreateVpcEndpointConnectionNotificationResult {
        return this.client.createVpcEndpointConnectionNotification(
            this.ops["CreateVpcEndpointConnectionNotification"].apply(partialParams)
        );
    }

    invokeCreateVpnConnection(partialParams: ToOptional<{
      [K in keyof CreateVpnConnectionRequest]: (CreateVpnConnectionRequest)[K]
    }>): CreateVpnConnectionResult {
        return this.client.createVpnConnection(
            this.ops["CreateVpnConnection"].apply(partialParams)
        );
    }

    invokeCreateVpnConnectionRoute(partialParams: ToOptional<{
      [K in keyof CreateVpnConnectionRouteRequest]: (CreateVpnConnectionRouteRequest)[K]
    }>): void {
        return this.client.createVpnConnectionRoute(
            this.ops["CreateVpnConnectionRoute"].apply(partialParams)
        );
    }

    invokeCreateVpnGateway(partialParams: ToOptional<{
      [K in keyof CreateVpnGatewayRequest]: (CreateVpnGatewayRequest)[K]
    }>): CreateVpnGatewayResult {
        return this.client.createVpnGateway(
            this.ops["CreateVpnGateway"].apply(partialParams)
        );
    }

    invokeDeleteCarrierGateway(partialParams: ToOptional<{
      [K in keyof DeleteCarrierGatewayRequest]: (DeleteCarrierGatewayRequest)[K]
    }>): DeleteCarrierGatewayResult {
        return this.client.deleteCarrierGateway(
            this.ops["DeleteCarrierGateway"].apply(partialParams)
        );
    }

    invokeDeleteClientVpnEndpoint(partialParams: ToOptional<{
      [K in keyof DeleteClientVpnEndpointRequest]: (DeleteClientVpnEndpointRequest)[K]
    }>): DeleteClientVpnEndpointResult {
        return this.client.deleteClientVpnEndpoint(
            this.ops["DeleteClientVpnEndpoint"].apply(partialParams)
        );
    }

    invokeDeleteClientVpnRoute(partialParams: ToOptional<{
      [K in keyof DeleteClientVpnRouteRequest]: (DeleteClientVpnRouteRequest)[K]
    }>): DeleteClientVpnRouteResult {
        return this.client.deleteClientVpnRoute(
            this.ops["DeleteClientVpnRoute"].apply(partialParams)
        );
    }

    invokeDeleteCustomerGateway(partialParams: ToOptional<{
      [K in keyof DeleteCustomerGatewayRequest]: (DeleteCustomerGatewayRequest)[K]
    }>): void {
        return this.client.deleteCustomerGateway(
            this.ops["DeleteCustomerGateway"].apply(partialParams)
        );
    }

    invokeDeleteDhcpOptions(partialParams: ToOptional<{
      [K in keyof DeleteDhcpOptionsRequest]: (DeleteDhcpOptionsRequest)[K]
    }>): void {
        return this.client.deleteDhcpOptions(
            this.ops["DeleteDhcpOptions"].apply(partialParams)
        );
    }

    invokeDeleteEgressOnlyInternetGateway(partialParams: ToOptional<{
      [K in keyof DeleteEgressOnlyInternetGatewayRequest]: (DeleteEgressOnlyInternetGatewayRequest)[K]
    }>): DeleteEgressOnlyInternetGatewayResult {
        return this.client.deleteEgressOnlyInternetGateway(
            this.ops["DeleteEgressOnlyInternetGateway"].apply(partialParams)
        );
    }

    invokeDeleteFleets(partialParams: ToOptional<{
      [K in keyof DeleteFleetsRequest]: (DeleteFleetsRequest)[K]
    }>): DeleteFleetsResult {
        return this.client.deleteFleets(
            this.ops["DeleteFleets"].apply(partialParams)
        );
    }

    invokeDeleteFlowLogs(partialParams: ToOptional<{
      [K in keyof DeleteFlowLogsRequest]: (DeleteFlowLogsRequest)[K]
    }>): DeleteFlowLogsResult {
        return this.client.deleteFlowLogs(
            this.ops["DeleteFlowLogs"].apply(partialParams)
        );
    }

    invokeDeleteFpgaImage(partialParams: ToOptional<{
      [K in keyof DeleteFpgaImageRequest]: (DeleteFpgaImageRequest)[K]
    }>): DeleteFpgaImageResult {
        return this.client.deleteFpgaImage(
            this.ops["DeleteFpgaImage"].apply(partialParams)
        );
    }

    invokeDeleteInstanceEventWindow(partialParams: ToOptional<{
      [K in keyof DeleteInstanceEventWindowRequest]: (DeleteInstanceEventWindowRequest)[K]
    }>): DeleteInstanceEventWindowResult {
        return this.client.deleteInstanceEventWindow(
            this.ops["DeleteInstanceEventWindow"].apply(partialParams)
        );
    }

    invokeDeleteInternetGateway(partialParams: ToOptional<{
      [K in keyof DeleteInternetGatewayRequest]: (DeleteInternetGatewayRequest)[K]
    }>): void {
        return this.client.deleteInternetGateway(
            this.ops["DeleteInternetGateway"].apply(partialParams)
        );
    }

    invokeDeleteIpam(partialParams: ToOptional<{
      [K in keyof DeleteIpamRequest]: (DeleteIpamRequest)[K]
    }>): DeleteIpamResult {
        return this.client.deleteIpam(
            this.ops["DeleteIpam"].apply(partialParams)
        );
    }

    invokeDeleteIpamPool(partialParams: ToOptional<{
      [K in keyof DeleteIpamPoolRequest]: (DeleteIpamPoolRequest)[K]
    }>): DeleteIpamPoolResult {
        return this.client.deleteIpamPool(
            this.ops["DeleteIpamPool"].apply(partialParams)
        );
    }

    invokeDeleteIpamScope(partialParams: ToOptional<{
      [K in keyof DeleteIpamScopeRequest]: (DeleteIpamScopeRequest)[K]
    }>): DeleteIpamScopeResult {
        return this.client.deleteIpamScope(
            this.ops["DeleteIpamScope"].apply(partialParams)
        );
    }

    invokeDeleteLaunchTemplateVersions(partialParams: ToOptional<{
      [K in keyof DeleteLaunchTemplateVersionsRequest]: (DeleteLaunchTemplateVersionsRequest)[K]
    }>): DeleteLaunchTemplateVersionsResult {
        return this.client.deleteLaunchTemplateVersions(
            this.ops["DeleteLaunchTemplateVersions"].apply(partialParams)
        );
    }

    invokeDeleteLocalGatewayRoute(partialParams: ToOptional<{
      [K in keyof DeleteLocalGatewayRouteRequest]: (DeleteLocalGatewayRouteRequest)[K]
    }>): DeleteLocalGatewayRouteResult {
        return this.client.deleteLocalGatewayRoute(
            this.ops["DeleteLocalGatewayRoute"].apply(partialParams)
        );
    }

    invokeDeleteLocalGatewayRouteTableVpcAssociation(partialParams: ToOptional<{
      [K in keyof DeleteLocalGatewayRouteTableVpcAssociationRequest]: (DeleteLocalGatewayRouteTableVpcAssociationRequest)[K]
    }>): DeleteLocalGatewayRouteTableVpcAssociationResult {
        return this.client.deleteLocalGatewayRouteTableVpcAssociation(
            this.ops["DeleteLocalGatewayRouteTableVpcAssociation"].apply(partialParams)
        );
    }

    invokeDeleteManagedPrefixList(partialParams: ToOptional<{
      [K in keyof DeleteManagedPrefixListRequest]: (DeleteManagedPrefixListRequest)[K]
    }>): DeleteManagedPrefixListResult {
        return this.client.deleteManagedPrefixList(
            this.ops["DeleteManagedPrefixList"].apply(partialParams)
        );
    }

    invokeDeleteNatGateway(partialParams: ToOptional<{
      [K in keyof DeleteNatGatewayRequest]: (DeleteNatGatewayRequest)[K]
    }>): DeleteNatGatewayResult {
        return this.client.deleteNatGateway(
            this.ops["DeleteNatGateway"].apply(partialParams)
        );
    }

    invokeDeleteNetworkAcl(partialParams: ToOptional<{
      [K in keyof DeleteNetworkAclRequest]: (DeleteNetworkAclRequest)[K]
    }>): void {
        return this.client.deleteNetworkAcl(
            this.ops["DeleteNetworkAcl"].apply(partialParams)
        );
    }

    invokeDeleteNetworkAclEntry(partialParams: ToOptional<{
      [K in keyof DeleteNetworkAclEntryRequest]: (DeleteNetworkAclEntryRequest)[K]
    }>): void {
        return this.client.deleteNetworkAclEntry(
            this.ops["DeleteNetworkAclEntry"].apply(partialParams)
        );
    }

    invokeDeleteNetworkInsightsAccessScope(partialParams: ToOptional<{
      [K in keyof DeleteNetworkInsightsAccessScopeRequest]: (DeleteNetworkInsightsAccessScopeRequest)[K]
    }>): DeleteNetworkInsightsAccessScopeResult {
        return this.client.deleteNetworkInsightsAccessScope(
            this.ops["DeleteNetworkInsightsAccessScope"].apply(partialParams)
        );
    }

    invokeDeleteNetworkInsightsAccessScopeAnalysis(partialParams: ToOptional<{
      [K in keyof DeleteNetworkInsightsAccessScopeAnalysisRequest]: (DeleteNetworkInsightsAccessScopeAnalysisRequest)[K]
    }>): DeleteNetworkInsightsAccessScopeAnalysisResult {
        return this.client.deleteNetworkInsightsAccessScopeAnalysis(
            this.ops["DeleteNetworkInsightsAccessScopeAnalysis"].apply(partialParams)
        );
    }

    invokeDeleteNetworkInsightsAnalysis(partialParams: ToOptional<{
      [K in keyof DeleteNetworkInsightsAnalysisRequest]: (DeleteNetworkInsightsAnalysisRequest)[K]
    }>): DeleteNetworkInsightsAnalysisResult {
        return this.client.deleteNetworkInsightsAnalysis(
            this.ops["DeleteNetworkInsightsAnalysis"].apply(partialParams)
        );
    }

    invokeDeleteNetworkInsightsPath(partialParams: ToOptional<{
      [K in keyof DeleteNetworkInsightsPathRequest]: (DeleteNetworkInsightsPathRequest)[K]
    }>): DeleteNetworkInsightsPathResult {
        return this.client.deleteNetworkInsightsPath(
            this.ops["DeleteNetworkInsightsPath"].apply(partialParams)
        );
    }

    invokeDeleteNetworkInterface(partialParams: ToOptional<{
      [K in keyof DeleteNetworkInterfaceRequest]: (DeleteNetworkInterfaceRequest)[K]
    }>): void {
        return this.client.deleteNetworkInterface(
            this.ops["DeleteNetworkInterface"].apply(partialParams)
        );
    }

    invokeDeleteNetworkInterfacePermission(partialParams: ToOptional<{
      [K in keyof DeleteNetworkInterfacePermissionRequest]: (DeleteNetworkInterfacePermissionRequest)[K]
    }>): DeleteNetworkInterfacePermissionResult {
        return this.client.deleteNetworkInterfacePermission(
            this.ops["DeleteNetworkInterfacePermission"].apply(partialParams)
        );
    }

    invokeDeletePlacementGroup(partialParams: ToOptional<{
      [K in keyof DeletePlacementGroupRequest]: (DeletePlacementGroupRequest)[K]
    }>): void {
        return this.client.deletePlacementGroup(
            this.ops["DeletePlacementGroup"].apply(partialParams)
        );
    }

    invokeDeletePublicIpv4Pool(partialParams: ToOptional<{
      [K in keyof DeletePublicIpv4PoolRequest]: (DeletePublicIpv4PoolRequest)[K]
    }>): DeletePublicIpv4PoolResult {
        return this.client.deletePublicIpv4Pool(
            this.ops["DeletePublicIpv4Pool"].apply(partialParams)
        );
    }

    invokeDeleteQueuedReservedInstances(partialParams: ToOptional<{
      [K in keyof DeleteQueuedReservedInstancesRequest]: (DeleteQueuedReservedInstancesRequest)[K]
    }>): DeleteQueuedReservedInstancesResult {
        return this.client.deleteQueuedReservedInstances(
            this.ops["DeleteQueuedReservedInstances"].apply(partialParams)
        );
    }

    invokeDeleteRoute(partialParams: ToOptional<{
      [K in keyof DeleteRouteRequest]: (DeleteRouteRequest)[K]
    }>): void {
        return this.client.deleteRoute(
            this.ops["DeleteRoute"].apply(partialParams)
        );
    }

    invokeDeleteRouteTable(partialParams: ToOptional<{
      [K in keyof DeleteRouteTableRequest]: (DeleteRouteTableRequest)[K]
    }>): void {
        return this.client.deleteRouteTable(
            this.ops["DeleteRouteTable"].apply(partialParams)
        );
    }

    invokeDeleteSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteSnapshotRequest]: (DeleteSnapshotRequest)[K]
    }>): void {
        return this.client.deleteSnapshot(
            this.ops["DeleteSnapshot"].apply(partialParams)
        );
    }

    invokeDeleteSubnet(partialParams: ToOptional<{
      [K in keyof DeleteSubnetRequest]: (DeleteSubnetRequest)[K]
    }>): void {
        return this.client.deleteSubnet(
            this.ops["DeleteSubnet"].apply(partialParams)
        );
    }

    invokeDeleteSubnetCidrReservation(partialParams: ToOptional<{
      [K in keyof DeleteSubnetCidrReservationRequest]: (DeleteSubnetCidrReservationRequest)[K]
    }>): DeleteSubnetCidrReservationResult {
        return this.client.deleteSubnetCidrReservation(
            this.ops["DeleteSubnetCidrReservation"].apply(partialParams)
        );
    }

    invokeDeleteTags(partialParams: ToOptional<{
      [K in keyof DeleteTagsRequest]: (DeleteTagsRequest)[K]
    }>): void {
        return this.client.deleteTags(
            this.ops["DeleteTags"].apply(partialParams)
        );
    }

    invokeDeleteTrafficMirrorFilter(partialParams: ToOptional<{
      [K in keyof DeleteTrafficMirrorFilterRequest]: (DeleteTrafficMirrorFilterRequest)[K]
    }>): DeleteTrafficMirrorFilterResult {
        return this.client.deleteTrafficMirrorFilter(
            this.ops["DeleteTrafficMirrorFilter"].apply(partialParams)
        );
    }

    invokeDeleteTrafficMirrorFilterRule(partialParams: ToOptional<{
      [K in keyof DeleteTrafficMirrorFilterRuleRequest]: (DeleteTrafficMirrorFilterRuleRequest)[K]
    }>): DeleteTrafficMirrorFilterRuleResult {
        return this.client.deleteTrafficMirrorFilterRule(
            this.ops["DeleteTrafficMirrorFilterRule"].apply(partialParams)
        );
    }

    invokeDeleteTrafficMirrorSession(partialParams: ToOptional<{
      [K in keyof DeleteTrafficMirrorSessionRequest]: (DeleteTrafficMirrorSessionRequest)[K]
    }>): DeleteTrafficMirrorSessionResult {
        return this.client.deleteTrafficMirrorSession(
            this.ops["DeleteTrafficMirrorSession"].apply(partialParams)
        );
    }

    invokeDeleteTrafficMirrorTarget(partialParams: ToOptional<{
      [K in keyof DeleteTrafficMirrorTargetRequest]: (DeleteTrafficMirrorTargetRequest)[K]
    }>): DeleteTrafficMirrorTargetResult {
        return this.client.deleteTrafficMirrorTarget(
            this.ops["DeleteTrafficMirrorTarget"].apply(partialParams)
        );
    }

    invokeDeleteTransitGateway(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayRequest]: (DeleteTransitGatewayRequest)[K]
    }>): DeleteTransitGatewayResult {
        return this.client.deleteTransitGateway(
            this.ops["DeleteTransitGateway"].apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayConnect(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayConnectRequest]: (DeleteTransitGatewayConnectRequest)[K]
    }>): DeleteTransitGatewayConnectResult {
        return this.client.deleteTransitGatewayConnect(
            this.ops["DeleteTransitGatewayConnect"].apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayConnectPeer(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayConnectPeerRequest]: (DeleteTransitGatewayConnectPeerRequest)[K]
    }>): DeleteTransitGatewayConnectPeerResult {
        return this.client.deleteTransitGatewayConnectPeer(
            this.ops["DeleteTransitGatewayConnectPeer"].apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayMulticastDomain(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayMulticastDomainRequest]: (DeleteTransitGatewayMulticastDomainRequest)[K]
    }>): DeleteTransitGatewayMulticastDomainResult {
        return this.client.deleteTransitGatewayMulticastDomain(
            this.ops["DeleteTransitGatewayMulticastDomain"].apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayPeeringAttachment(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayPeeringAttachmentRequest]: (DeleteTransitGatewayPeeringAttachmentRequest)[K]
    }>): DeleteTransitGatewayPeeringAttachmentResult {
        return this.client.deleteTransitGatewayPeeringAttachment(
            this.ops["DeleteTransitGatewayPeeringAttachment"].apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayPrefixListReference(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayPrefixListReferenceRequest]: (DeleteTransitGatewayPrefixListReferenceRequest)[K]
    }>): DeleteTransitGatewayPrefixListReferenceResult {
        return this.client.deleteTransitGatewayPrefixListReference(
            this.ops["DeleteTransitGatewayPrefixListReference"].apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayRoute(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayRouteRequest]: (DeleteTransitGatewayRouteRequest)[K]
    }>): DeleteTransitGatewayRouteResult {
        return this.client.deleteTransitGatewayRoute(
            this.ops["DeleteTransitGatewayRoute"].apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayRouteTable(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayRouteTableRequest]: (DeleteTransitGatewayRouteTableRequest)[K]
    }>): DeleteTransitGatewayRouteTableResult {
        return this.client.deleteTransitGatewayRouteTable(
            this.ops["DeleteTransitGatewayRouteTable"].apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayVpcAttachment(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayVpcAttachmentRequest]: (DeleteTransitGatewayVpcAttachmentRequest)[K]
    }>): DeleteTransitGatewayVpcAttachmentResult {
        return this.client.deleteTransitGatewayVpcAttachment(
            this.ops["DeleteTransitGatewayVpcAttachment"].apply(partialParams)
        );
    }

    invokeDeleteVolume(partialParams: ToOptional<{
      [K in keyof DeleteVolumeRequest]: (DeleteVolumeRequest)[K]
    }>): void {
        return this.client.deleteVolume(
            this.ops["DeleteVolume"].apply(partialParams)
        );
    }

    invokeDeleteVpc(partialParams: ToOptional<{
      [K in keyof DeleteVpcRequest]: (DeleteVpcRequest)[K]
    }>): void {
        return this.client.deleteVpc(
            this.ops["DeleteVpc"].apply(partialParams)
        );
    }

    invokeDeleteVpcEndpointConnectionNotifications(partialParams: ToOptional<{
      [K in keyof DeleteVpcEndpointConnectionNotificationsRequest]: (DeleteVpcEndpointConnectionNotificationsRequest)[K]
    }>): DeleteVpcEndpointConnectionNotificationsResult {
        return this.client.deleteVpcEndpointConnectionNotifications(
            this.ops["DeleteVpcEndpointConnectionNotifications"].apply(partialParams)
        );
    }

    invokeDeleteVpcEndpointServiceConfigurations(partialParams: ToOptional<{
      [K in keyof DeleteVpcEndpointServiceConfigurationsRequest]: (DeleteVpcEndpointServiceConfigurationsRequest)[K]
    }>): DeleteVpcEndpointServiceConfigurationsResult {
        return this.client.deleteVpcEndpointServiceConfigurations(
            this.ops["DeleteVpcEndpointServiceConfigurations"].apply(partialParams)
        );
    }

    invokeDeleteVpcEndpoints(partialParams: ToOptional<{
      [K in keyof DeleteVpcEndpointsRequest]: (DeleteVpcEndpointsRequest)[K]
    }>): DeleteVpcEndpointsResult {
        return this.client.deleteVpcEndpoints(
            this.ops["DeleteVpcEndpoints"].apply(partialParams)
        );
    }

    invokeDeleteVpcPeeringConnection(partialParams: ToOptional<{
      [K in keyof DeleteVpcPeeringConnectionRequest]: (DeleteVpcPeeringConnectionRequest)[K]
    }>): DeleteVpcPeeringConnectionResult {
        return this.client.deleteVpcPeeringConnection(
            this.ops["DeleteVpcPeeringConnection"].apply(partialParams)
        );
    }

    invokeDeleteVpnConnection(partialParams: ToOptional<{
      [K in keyof DeleteVpnConnectionRequest]: (DeleteVpnConnectionRequest)[K]
    }>): void {
        return this.client.deleteVpnConnection(
            this.ops["DeleteVpnConnection"].apply(partialParams)
        );
    }

    invokeDeleteVpnConnectionRoute(partialParams: ToOptional<{
      [K in keyof DeleteVpnConnectionRouteRequest]: (DeleteVpnConnectionRouteRequest)[K]
    }>): void {
        return this.client.deleteVpnConnectionRoute(
            this.ops["DeleteVpnConnectionRoute"].apply(partialParams)
        );
    }

    invokeDeleteVpnGateway(partialParams: ToOptional<{
      [K in keyof DeleteVpnGatewayRequest]: (DeleteVpnGatewayRequest)[K]
    }>): void {
        return this.client.deleteVpnGateway(
            this.ops["DeleteVpnGateway"].apply(partialParams)
        );
    }

    invokeDeprovisionByoipCidr(partialParams: ToOptional<{
      [K in keyof DeprovisionByoipCidrRequest]: (DeprovisionByoipCidrRequest)[K]
    }>): DeprovisionByoipCidrResult {
        return this.client.deprovisionByoipCidr(
            this.ops["DeprovisionByoipCidr"].apply(partialParams)
        );
    }

    invokeDeprovisionIpamPoolCidr(partialParams: ToOptional<{
      [K in keyof DeprovisionIpamPoolCidrRequest]: (DeprovisionIpamPoolCidrRequest)[K]
    }>): DeprovisionIpamPoolCidrResult {
        return this.client.deprovisionIpamPoolCidr(
            this.ops["DeprovisionIpamPoolCidr"].apply(partialParams)
        );
    }

    invokeDeprovisionPublicIpv4PoolCidr(partialParams: ToOptional<{
      [K in keyof DeprovisionPublicIpv4PoolCidrRequest]: (DeprovisionPublicIpv4PoolCidrRequest)[K]
    }>): DeprovisionPublicIpv4PoolCidrResult {
        return this.client.deprovisionPublicIpv4PoolCidr(
            this.ops["DeprovisionPublicIpv4PoolCidr"].apply(partialParams)
        );
    }

    invokeDeregisterImage(partialParams: ToOptional<{
      [K in keyof DeregisterImageRequest]: (DeregisterImageRequest)[K]
    }>): void {
        return this.client.deregisterImage(
            this.ops["DeregisterImage"].apply(partialParams)
        );
    }

    invokeDescribeByoipCidrs(partialParams: ToOptional<{
      [K in keyof DescribeByoipCidrsRequest]: (DescribeByoipCidrsRequest)[K]
    }>): DescribeByoipCidrsResult {
        return this.client.describeByoipCidrs(
            this.ops["DescribeByoipCidrs"].apply(partialParams)
        );
    }

    invokeDescribeClientVpnAuthorizationRules(partialParams: ToOptional<{
      [K in keyof DescribeClientVpnAuthorizationRulesRequest]: (DescribeClientVpnAuthorizationRulesRequest)[K]
    }>): DescribeClientVpnAuthorizationRulesResult {
        return this.client.describeClientVpnAuthorizationRules(
            this.ops["DescribeClientVpnAuthorizationRules"].apply(partialParams)
        );
    }

    invokeDescribeClientVpnConnections(partialParams: ToOptional<{
      [K in keyof DescribeClientVpnConnectionsRequest]: (DescribeClientVpnConnectionsRequest)[K]
    }>): DescribeClientVpnConnectionsResult {
        return this.client.describeClientVpnConnections(
            this.ops["DescribeClientVpnConnections"].apply(partialParams)
        );
    }

    invokeDescribeClientVpnRoutes(partialParams: ToOptional<{
      [K in keyof DescribeClientVpnRoutesRequest]: (DescribeClientVpnRoutesRequest)[K]
    }>): DescribeClientVpnRoutesResult {
        return this.client.describeClientVpnRoutes(
            this.ops["DescribeClientVpnRoutes"].apply(partialParams)
        );
    }

    invokeDescribeClientVpnTargetNetworks(partialParams: ToOptional<{
      [K in keyof DescribeClientVpnTargetNetworksRequest]: (DescribeClientVpnTargetNetworksRequest)[K]
    }>): DescribeClientVpnTargetNetworksResult {
        return this.client.describeClientVpnTargetNetworks(
            this.ops["DescribeClientVpnTargetNetworks"].apply(partialParams)
        );
    }

    invokeDescribeFleetHistory(partialParams: ToOptional<{
      [K in keyof DescribeFleetHistoryRequest]: (DescribeFleetHistoryRequest)[K]
    }>): DescribeFleetHistoryResult {
        return this.client.describeFleetHistory(
            this.ops["DescribeFleetHistory"].apply(partialParams)
        );
    }

    invokeDescribeFleetInstances(partialParams: ToOptional<{
      [K in keyof DescribeFleetInstancesRequest]: (DescribeFleetInstancesRequest)[K]
    }>): DescribeFleetInstancesResult {
        return this.client.describeFleetInstances(
            this.ops["DescribeFleetInstances"].apply(partialParams)
        );
    }

    invokeDescribeFpgaImageAttribute(partialParams: ToOptional<{
      [K in keyof DescribeFpgaImageAttributeRequest]: (DescribeFpgaImageAttributeRequest)[K]
    }>): DescribeFpgaImageAttributeResult {
        return this.client.describeFpgaImageAttribute(
            this.ops["DescribeFpgaImageAttribute"].apply(partialParams)
        );
    }

    invokeDescribeIdentityIdFormat(partialParams: ToOptional<{
      [K in keyof DescribeIdentityIdFormatRequest]: (DescribeIdentityIdFormatRequest)[K]
    }>): DescribeIdentityIdFormatResult {
        return this.client.describeIdentityIdFormat(
            this.ops["DescribeIdentityIdFormat"].apply(partialParams)
        );
    }

    invokeDescribeImageAttribute(partialParams: ToOptional<{
      [K in keyof DescribeImageAttributeRequest]: (DescribeImageAttributeRequest)[K]
    }>): ImageAttribute {
        return this.client.describeImageAttribute(
            this.ops["DescribeImageAttribute"].apply(partialParams)
        );
    }

    invokeDescribeInstanceAttribute(partialParams: ToOptional<{
      [K in keyof DescribeInstanceAttributeRequest]: (DescribeInstanceAttributeRequest)[K]
    }>): InstanceAttribute {
        return this.client.describeInstanceAttribute(
            this.ops["DescribeInstanceAttribute"].apply(partialParams)
        );
    }

    invokeDescribeNetworkInterfaceAttribute(partialParams: ToOptional<{
      [K in keyof DescribeNetworkInterfaceAttributeRequest]: (DescribeNetworkInterfaceAttributeRequest)[K]
    }>): DescribeNetworkInterfaceAttributeResult {
        return this.client.describeNetworkInterfaceAttribute(
            this.ops["DescribeNetworkInterfaceAttribute"].apply(partialParams)
        );
    }

    invokeDescribeScheduledInstanceAvailability(partialParams: ToOptional<{
      [K in keyof DescribeScheduledInstanceAvailabilityRequest]: (DescribeScheduledInstanceAvailabilityRequest)[K]
    }>): DescribeScheduledInstanceAvailabilityResult {
        return this.client.describeScheduledInstanceAvailability(
            this.ops["DescribeScheduledInstanceAvailability"].apply(partialParams)
        );
    }

    invokeDescribeSecurityGroupReferences(partialParams: ToOptional<{
      [K in keyof DescribeSecurityGroupReferencesRequest]: (DescribeSecurityGroupReferencesRequest)[K]
    }>): DescribeSecurityGroupReferencesResult {
        return this.client.describeSecurityGroupReferences(
            this.ops["DescribeSecurityGroupReferences"].apply(partialParams)
        );
    }

    invokeDescribeSnapshotAttribute(partialParams: ToOptional<{
      [K in keyof DescribeSnapshotAttributeRequest]: (DescribeSnapshotAttributeRequest)[K]
    }>): DescribeSnapshotAttributeResult {
        return this.client.describeSnapshotAttribute(
            this.ops["DescribeSnapshotAttribute"].apply(partialParams)
        );
    }

    invokeDescribeSpotFleetInstances(partialParams: ToOptional<{
      [K in keyof DescribeSpotFleetInstancesRequest]: (DescribeSpotFleetInstancesRequest)[K]
    }>): DescribeSpotFleetInstancesResponse {
        return this.client.describeSpotFleetInstances(
            this.ops["DescribeSpotFleetInstances"].apply(partialParams)
        );
    }

    invokeDescribeSpotFleetRequestHistory(partialParams: ToOptional<{
      [K in keyof DescribeSpotFleetRequestHistoryRequest]: (DescribeSpotFleetRequestHistoryRequest)[K]
    }>): DescribeSpotFleetRequestHistoryResponse {
        return this.client.describeSpotFleetRequestHistory(
            this.ops["DescribeSpotFleetRequestHistory"].apply(partialParams)
        );
    }

    invokeDescribeStaleSecurityGroups(partialParams: ToOptional<{
      [K in keyof DescribeStaleSecurityGroupsRequest]: (DescribeStaleSecurityGroupsRequest)[K]
    }>): DescribeStaleSecurityGroupsResult {
        return this.client.describeStaleSecurityGroups(
            this.ops["DescribeStaleSecurityGroups"].apply(partialParams)
        );
    }

    invokeDescribeVolumeAttribute(partialParams: ToOptional<{
      [K in keyof DescribeVolumeAttributeRequest]: (DescribeVolumeAttributeRequest)[K]
    }>): DescribeVolumeAttributeResult {
        return this.client.describeVolumeAttribute(
            this.ops["DescribeVolumeAttribute"].apply(partialParams)
        );
    }

    invokeDescribeVpcAttribute(partialParams: ToOptional<{
      [K in keyof DescribeVpcAttributeRequest]: (DescribeVpcAttributeRequest)[K]
    }>): DescribeVpcAttributeResult {
        return this.client.describeVpcAttribute(
            this.ops["DescribeVpcAttribute"].apply(partialParams)
        );
    }

    invokeDescribeVpcEndpointServicePermissions(partialParams: ToOptional<{
      [K in keyof DescribeVpcEndpointServicePermissionsRequest]: (DescribeVpcEndpointServicePermissionsRequest)[K]
    }>): DescribeVpcEndpointServicePermissionsResult {
        return this.client.describeVpcEndpointServicePermissions(
            this.ops["DescribeVpcEndpointServicePermissions"].apply(partialParams)
        );
    }

    invokeDetachClassicLinkVpc(partialParams: ToOptional<{
      [K in keyof DetachClassicLinkVpcRequest]: (DetachClassicLinkVpcRequest)[K]
    }>): DetachClassicLinkVpcResult {
        return this.client.detachClassicLinkVpc(
            this.ops["DetachClassicLinkVpc"].apply(partialParams)
        );
    }

    invokeDetachInternetGateway(partialParams: ToOptional<{
      [K in keyof DetachInternetGatewayRequest]: (DetachInternetGatewayRequest)[K]
    }>): void {
        return this.client.detachInternetGateway(
            this.ops["DetachInternetGateway"].apply(partialParams)
        );
    }

    invokeDetachNetworkInterface(partialParams: ToOptional<{
      [K in keyof DetachNetworkInterfaceRequest]: (DetachNetworkInterfaceRequest)[K]
    }>): void {
        return this.client.detachNetworkInterface(
            this.ops["DetachNetworkInterface"].apply(partialParams)
        );
    }

    invokeDetachVolume(partialParams: ToOptional<{
      [K in keyof DetachVolumeRequest]: (DetachVolumeRequest)[K]
    }>): VolumeAttachment {
        return this.client.detachVolume(
            this.ops["DetachVolume"].apply(partialParams)
        );
    }

    invokeDetachVpnGateway(partialParams: ToOptional<{
      [K in keyof DetachVpnGatewayRequest]: (DetachVpnGatewayRequest)[K]
    }>): void {
        return this.client.detachVpnGateway(
            this.ops["DetachVpnGateway"].apply(partialParams)
        );
    }

    invokeDisableFastLaunch(partialParams: ToOptional<{
      [K in keyof DisableFastLaunchRequest]: (DisableFastLaunchRequest)[K]
    }>): DisableFastLaunchResult {
        return this.client.disableFastLaunch(
            this.ops["DisableFastLaunch"].apply(partialParams)
        );
    }

    invokeDisableFastSnapshotRestores(partialParams: ToOptional<{
      [K in keyof DisableFastSnapshotRestoresRequest]: (DisableFastSnapshotRestoresRequest)[K]
    }>): DisableFastSnapshotRestoresResult {
        return this.client.disableFastSnapshotRestores(
            this.ops["DisableFastSnapshotRestores"].apply(partialParams)
        );
    }

    invokeDisableImageDeprecation(partialParams: ToOptional<{
      [K in keyof DisableImageDeprecationRequest]: (DisableImageDeprecationRequest)[K]
    }>): DisableImageDeprecationResult {
        return this.client.disableImageDeprecation(
            this.ops["DisableImageDeprecation"].apply(partialParams)
        );
    }

    invokeDisableIpamOrganizationAdminAccount(partialParams: ToOptional<{
      [K in keyof DisableIpamOrganizationAdminAccountRequest]: (DisableIpamOrganizationAdminAccountRequest)[K]
    }>): DisableIpamOrganizationAdminAccountResult {
        return this.client.disableIpamOrganizationAdminAccount(
            this.ops["DisableIpamOrganizationAdminAccount"].apply(partialParams)
        );
    }

    invokeDisableTransitGatewayRouteTablePropagation(partialParams: ToOptional<{
      [K in keyof DisableTransitGatewayRouteTablePropagationRequest]: (DisableTransitGatewayRouteTablePropagationRequest)[K]
    }>): DisableTransitGatewayRouteTablePropagationResult {
        return this.client.disableTransitGatewayRouteTablePropagation(
            this.ops["DisableTransitGatewayRouteTablePropagation"].apply(partialParams)
        );
    }

    invokeDisableVgwRoutePropagation(partialParams: ToOptional<{
      [K in keyof DisableVgwRoutePropagationRequest]: (DisableVgwRoutePropagationRequest)[K]
    }>): void {
        return this.client.disableVgwRoutePropagation(
            this.ops["DisableVgwRoutePropagation"].apply(partialParams)
        );
    }

    invokeDisableVpcClassicLink(partialParams: ToOptional<{
      [K in keyof DisableVpcClassicLinkRequest]: (DisableVpcClassicLinkRequest)[K]
    }>): DisableVpcClassicLinkResult {
        return this.client.disableVpcClassicLink(
            this.ops["DisableVpcClassicLink"].apply(partialParams)
        );
    }

    invokeDisassociateClientVpnTargetNetwork(partialParams: ToOptional<{
      [K in keyof DisassociateClientVpnTargetNetworkRequest]: (DisassociateClientVpnTargetNetworkRequest)[K]
    }>): DisassociateClientVpnTargetNetworkResult {
        return this.client.disassociateClientVpnTargetNetwork(
            this.ops["DisassociateClientVpnTargetNetwork"].apply(partialParams)
        );
    }

    invokeDisassociateIamInstanceProfile(partialParams: ToOptional<{
      [K in keyof DisassociateIamInstanceProfileRequest]: (DisassociateIamInstanceProfileRequest)[K]
    }>): DisassociateIamInstanceProfileResult {
        return this.client.disassociateIamInstanceProfile(
            this.ops["DisassociateIamInstanceProfile"].apply(partialParams)
        );
    }

    invokeDisassociateInstanceEventWindow(partialParams: ToOptional<{
      [K in keyof DisassociateInstanceEventWindowRequest]: (DisassociateInstanceEventWindowRequest)[K]
    }>): DisassociateInstanceEventWindowResult {
        return this.client.disassociateInstanceEventWindow(
            this.ops["DisassociateInstanceEventWindow"].apply(partialParams)
        );
    }

    invokeDisassociateRouteTable(partialParams: ToOptional<{
      [K in keyof DisassociateRouteTableRequest]: (DisassociateRouteTableRequest)[K]
    }>): void {
        return this.client.disassociateRouteTable(
            this.ops["DisassociateRouteTable"].apply(partialParams)
        );
    }

    invokeDisassociateSubnetCidrBlock(partialParams: ToOptional<{
      [K in keyof DisassociateSubnetCidrBlockRequest]: (DisassociateSubnetCidrBlockRequest)[K]
    }>): DisassociateSubnetCidrBlockResult {
        return this.client.disassociateSubnetCidrBlock(
            this.ops["DisassociateSubnetCidrBlock"].apply(partialParams)
        );
    }

    invokeDisassociateTransitGatewayRouteTable(partialParams: ToOptional<{
      [K in keyof DisassociateTransitGatewayRouteTableRequest]: (DisassociateTransitGatewayRouteTableRequest)[K]
    }>): DisassociateTransitGatewayRouteTableResult {
        return this.client.disassociateTransitGatewayRouteTable(
            this.ops["DisassociateTransitGatewayRouteTable"].apply(partialParams)
        );
    }

    invokeDisassociateTrunkInterface(partialParams: ToOptional<{
      [K in keyof DisassociateTrunkInterfaceRequest]: (DisassociateTrunkInterfaceRequest)[K]
    }>): DisassociateTrunkInterfaceResult {
        return this.client.disassociateTrunkInterface(
            this.ops["DisassociateTrunkInterface"].apply(partialParams)
        );
    }

    invokeDisassociateVpcCidrBlock(partialParams: ToOptional<{
      [K in keyof DisassociateVpcCidrBlockRequest]: (DisassociateVpcCidrBlockRequest)[K]
    }>): DisassociateVpcCidrBlockResult {
        return this.client.disassociateVpcCidrBlock(
            this.ops["DisassociateVpcCidrBlock"].apply(partialParams)
        );
    }

    invokeEnableFastLaunch(partialParams: ToOptional<{
      [K in keyof EnableFastLaunchRequest]: (EnableFastLaunchRequest)[K]
    }>): EnableFastLaunchResult {
        return this.client.enableFastLaunch(
            this.ops["EnableFastLaunch"].apply(partialParams)
        );
    }

    invokeEnableFastSnapshotRestores(partialParams: ToOptional<{
      [K in keyof EnableFastSnapshotRestoresRequest]: (EnableFastSnapshotRestoresRequest)[K]
    }>): EnableFastSnapshotRestoresResult {
        return this.client.enableFastSnapshotRestores(
            this.ops["EnableFastSnapshotRestores"].apply(partialParams)
        );
    }

    invokeEnableImageDeprecation(partialParams: ToOptional<{
      [K in keyof EnableImageDeprecationRequest]: (EnableImageDeprecationRequest)[K]
    }>): EnableImageDeprecationResult {
        return this.client.enableImageDeprecation(
            this.ops["EnableImageDeprecation"].apply(partialParams)
        );
    }

    invokeEnableIpamOrganizationAdminAccount(partialParams: ToOptional<{
      [K in keyof EnableIpamOrganizationAdminAccountRequest]: (EnableIpamOrganizationAdminAccountRequest)[K]
    }>): EnableIpamOrganizationAdminAccountResult {
        return this.client.enableIpamOrganizationAdminAccount(
            this.ops["EnableIpamOrganizationAdminAccount"].apply(partialParams)
        );
    }

    invokeEnableTransitGatewayRouteTablePropagation(partialParams: ToOptional<{
      [K in keyof EnableTransitGatewayRouteTablePropagationRequest]: (EnableTransitGatewayRouteTablePropagationRequest)[K]
    }>): EnableTransitGatewayRouteTablePropagationResult {
        return this.client.enableTransitGatewayRouteTablePropagation(
            this.ops["EnableTransitGatewayRouteTablePropagation"].apply(partialParams)
        );
    }

    invokeEnableVgwRoutePropagation(partialParams: ToOptional<{
      [K in keyof EnableVgwRoutePropagationRequest]: (EnableVgwRoutePropagationRequest)[K]
    }>): void {
        return this.client.enableVgwRoutePropagation(
            this.ops["EnableVgwRoutePropagation"].apply(partialParams)
        );
    }

    invokeEnableVolumeIO(partialParams: ToOptional<{
      [K in keyof EnableVolumeIORequest]: (EnableVolumeIORequest)[K]
    }>): void {
        return this.client.enableVolumeIO(
            this.ops["EnableVolumeIO"].apply(partialParams)
        );
    }

    invokeEnableVpcClassicLink(partialParams: ToOptional<{
      [K in keyof EnableVpcClassicLinkRequest]: (EnableVpcClassicLinkRequest)[K]
    }>): EnableVpcClassicLinkResult {
        return this.client.enableVpcClassicLink(
            this.ops["EnableVpcClassicLink"].apply(partialParams)
        );
    }

    invokeExportClientVpnClientCertificateRevocationList(partialParams: ToOptional<{
      [K in keyof ExportClientVpnClientCertificateRevocationListRequest]: (ExportClientVpnClientCertificateRevocationListRequest)[K]
    }>): ExportClientVpnClientCertificateRevocationListResult {
        return this.client.exportClientVpnClientCertificateRevocationList(
            this.ops["ExportClientVpnClientCertificateRevocationList"].apply(partialParams)
        );
    }

    invokeExportClientVpnClientConfiguration(partialParams: ToOptional<{
      [K in keyof ExportClientVpnClientConfigurationRequest]: (ExportClientVpnClientConfigurationRequest)[K]
    }>): ExportClientVpnClientConfigurationResult {
        return this.client.exportClientVpnClientConfiguration(
            this.ops["ExportClientVpnClientConfiguration"].apply(partialParams)
        );
    }

    invokeExportImage(partialParams: ToOptional<{
      [K in keyof ExportImageRequest]: (ExportImageRequest)[K]
    }>): ExportImageResult {
        return this.client.exportImage(
            this.ops["ExportImage"].apply(partialParams)
        );
    }

    invokeExportTransitGatewayRoutes(partialParams: ToOptional<{
      [K in keyof ExportTransitGatewayRoutesRequest]: (ExportTransitGatewayRoutesRequest)[K]
    }>): ExportTransitGatewayRoutesResult {
        return this.client.exportTransitGatewayRoutes(
            this.ops["ExportTransitGatewayRoutes"].apply(partialParams)
        );
    }

    invokeGetAssociatedIpv6PoolCidrs(partialParams: ToOptional<{
      [K in keyof GetAssociatedIpv6PoolCidrsRequest]: (GetAssociatedIpv6PoolCidrsRequest)[K]
    }>): GetAssociatedIpv6PoolCidrsResult {
        return this.client.getAssociatedIpv6PoolCidrs(
            this.ops["GetAssociatedIpv6PoolCidrs"].apply(partialParams)
        );
    }

    invokeGetCapacityReservationUsage(partialParams: ToOptional<{
      [K in keyof GetCapacityReservationUsageRequest]: (GetCapacityReservationUsageRequest)[K]
    }>): GetCapacityReservationUsageResult {
        return this.client.getCapacityReservationUsage(
            this.ops["GetCapacityReservationUsage"].apply(partialParams)
        );
    }

    invokeGetCoipPoolUsage(partialParams: ToOptional<{
      [K in keyof GetCoipPoolUsageRequest]: (GetCoipPoolUsageRequest)[K]
    }>): GetCoipPoolUsageResult {
        return this.client.getCoipPoolUsage(
            this.ops["GetCoipPoolUsage"].apply(partialParams)
        );
    }

    invokeGetConsoleOutput(partialParams: ToOptional<{
      [K in keyof GetConsoleOutputRequest]: (GetConsoleOutputRequest)[K]
    }>): GetConsoleOutputResult {
        return this.client.getConsoleOutput(
            this.ops["GetConsoleOutput"].apply(partialParams)
        );
    }

    invokeGetConsoleScreenshot(partialParams: ToOptional<{
      [K in keyof GetConsoleScreenshotRequest]: (GetConsoleScreenshotRequest)[K]
    }>): GetConsoleScreenshotResult {
        return this.client.getConsoleScreenshot(
            this.ops["GetConsoleScreenshot"].apply(partialParams)
        );
    }

    invokeGetDefaultCreditSpecification(partialParams: ToOptional<{
      [K in keyof GetDefaultCreditSpecificationRequest]: (GetDefaultCreditSpecificationRequest)[K]
    }>): GetDefaultCreditSpecificationResult {
        return this.client.getDefaultCreditSpecification(
            this.ops["GetDefaultCreditSpecification"].apply(partialParams)
        );
    }

    invokeGetFlowLogsIntegrationTemplate(partialParams: ToOptional<{
      [K in keyof GetFlowLogsIntegrationTemplateRequest]: (GetFlowLogsIntegrationTemplateRequest)[K]
    }>): GetFlowLogsIntegrationTemplateResult {
        return this.client.getFlowLogsIntegrationTemplate(
            this.ops["GetFlowLogsIntegrationTemplate"].apply(partialParams)
        );
    }

    invokeGetGroupsForCapacityReservation(partialParams: ToOptional<{
      [K in keyof GetGroupsForCapacityReservationRequest]: (GetGroupsForCapacityReservationRequest)[K]
    }>): GetGroupsForCapacityReservationResult {
        return this.client.getGroupsForCapacityReservation(
            this.ops["GetGroupsForCapacityReservation"].apply(partialParams)
        );
    }

    invokeGetHostReservationPurchasePreview(partialParams: ToOptional<{
      [K in keyof GetHostReservationPurchasePreviewRequest]: (GetHostReservationPurchasePreviewRequest)[K]
    }>): GetHostReservationPurchasePreviewResult {
        return this.client.getHostReservationPurchasePreview(
            this.ops["GetHostReservationPurchasePreview"].apply(partialParams)
        );
    }

    invokeGetInstanceTypesFromInstanceRequirements(partialParams: ToOptional<{
      [K in keyof GetInstanceTypesFromInstanceRequirementsRequest]: (GetInstanceTypesFromInstanceRequirementsRequest)[K]
    }>): GetInstanceTypesFromInstanceRequirementsResult {
        return this.client.getInstanceTypesFromInstanceRequirements(
            this.ops["GetInstanceTypesFromInstanceRequirements"].apply(partialParams)
        );
    }

    invokeGetIpamAddressHistory(partialParams: ToOptional<{
      [K in keyof GetIpamAddressHistoryRequest]: (GetIpamAddressHistoryRequest)[K]
    }>): GetIpamAddressHistoryResult {
        return this.client.getIpamAddressHistory(
            this.ops["GetIpamAddressHistory"].apply(partialParams)
        );
    }

    invokeGetIpamPoolAllocations(partialParams: ToOptional<{
      [K in keyof GetIpamPoolAllocationsRequest]: (GetIpamPoolAllocationsRequest)[K]
    }>): GetIpamPoolAllocationsResult {
        return this.client.getIpamPoolAllocations(
            this.ops["GetIpamPoolAllocations"].apply(partialParams)
        );
    }

    invokeGetIpamPoolCidrs(partialParams: ToOptional<{
      [K in keyof GetIpamPoolCidrsRequest]: (GetIpamPoolCidrsRequest)[K]
    }>): GetIpamPoolCidrsResult {
        return this.client.getIpamPoolCidrs(
            this.ops["GetIpamPoolCidrs"].apply(partialParams)
        );
    }

    invokeGetIpamResourceCidrs(partialParams: ToOptional<{
      [K in keyof GetIpamResourceCidrsRequest]: (GetIpamResourceCidrsRequest)[K]
    }>): GetIpamResourceCidrsResult {
        return this.client.getIpamResourceCidrs(
            this.ops["GetIpamResourceCidrs"].apply(partialParams)
        );
    }

    invokeGetLaunchTemplateData(partialParams: ToOptional<{
      [K in keyof GetLaunchTemplateDataRequest]: (GetLaunchTemplateDataRequest)[K]
    }>): GetLaunchTemplateDataResult {
        return this.client.getLaunchTemplateData(
            this.ops["GetLaunchTemplateData"].apply(partialParams)
        );
    }

    invokeGetManagedPrefixListAssociations(partialParams: ToOptional<{
      [K in keyof GetManagedPrefixListAssociationsRequest]: (GetManagedPrefixListAssociationsRequest)[K]
    }>): GetManagedPrefixListAssociationsResult {
        return this.client.getManagedPrefixListAssociations(
            this.ops["GetManagedPrefixListAssociations"].apply(partialParams)
        );
    }

    invokeGetManagedPrefixListEntries(partialParams: ToOptional<{
      [K in keyof GetManagedPrefixListEntriesRequest]: (GetManagedPrefixListEntriesRequest)[K]
    }>): GetManagedPrefixListEntriesResult {
        return this.client.getManagedPrefixListEntries(
            this.ops["GetManagedPrefixListEntries"].apply(partialParams)
        );
    }

    invokeGetNetworkInsightsAccessScopeAnalysisFindings(partialParams: ToOptional<{
      [K in keyof GetNetworkInsightsAccessScopeAnalysisFindingsRequest]: (GetNetworkInsightsAccessScopeAnalysisFindingsRequest)[K]
    }>): GetNetworkInsightsAccessScopeAnalysisFindingsResult {
        return this.client.getNetworkInsightsAccessScopeAnalysisFindings(
            this.ops["GetNetworkInsightsAccessScopeAnalysisFindings"].apply(partialParams)
        );
    }

    invokeGetNetworkInsightsAccessScopeContent(partialParams: ToOptional<{
      [K in keyof GetNetworkInsightsAccessScopeContentRequest]: (GetNetworkInsightsAccessScopeContentRequest)[K]
    }>): GetNetworkInsightsAccessScopeContentResult {
        return this.client.getNetworkInsightsAccessScopeContent(
            this.ops["GetNetworkInsightsAccessScopeContent"].apply(partialParams)
        );
    }

    invokeGetPasswordData(partialParams: ToOptional<{
      [K in keyof GetPasswordDataRequest]: (GetPasswordDataRequest)[K]
    }>): GetPasswordDataResult {
        return this.client.getPasswordData(
            this.ops["GetPasswordData"].apply(partialParams)
        );
    }

    invokeGetReservedInstancesExchangeQuote(partialParams: ToOptional<{
      [K in keyof GetReservedInstancesExchangeQuoteRequest]: (GetReservedInstancesExchangeQuoteRequest)[K]
    }>): GetReservedInstancesExchangeQuoteResult {
        return this.client.getReservedInstancesExchangeQuote(
            this.ops["GetReservedInstancesExchangeQuote"].apply(partialParams)
        );
    }

    invokeGetSpotPlacementScores(partialParams: ToOptional<{
      [K in keyof GetSpotPlacementScoresRequest]: (GetSpotPlacementScoresRequest)[K]
    }>): GetSpotPlacementScoresResult {
        return this.client.getSpotPlacementScores(
            this.ops["GetSpotPlacementScores"].apply(partialParams)
        );
    }

    invokeGetSubnetCidrReservations(partialParams: ToOptional<{
      [K in keyof GetSubnetCidrReservationsRequest]: (GetSubnetCidrReservationsRequest)[K]
    }>): GetSubnetCidrReservationsResult {
        return this.client.getSubnetCidrReservations(
            this.ops["GetSubnetCidrReservations"].apply(partialParams)
        );
    }

    invokeGetTransitGatewayAttachmentPropagations(partialParams: ToOptional<{
      [K in keyof GetTransitGatewayAttachmentPropagationsRequest]: (GetTransitGatewayAttachmentPropagationsRequest)[K]
    }>): GetTransitGatewayAttachmentPropagationsResult {
        return this.client.getTransitGatewayAttachmentPropagations(
            this.ops["GetTransitGatewayAttachmentPropagations"].apply(partialParams)
        );
    }

    invokeGetTransitGatewayPrefixListReferences(partialParams: ToOptional<{
      [K in keyof GetTransitGatewayPrefixListReferencesRequest]: (GetTransitGatewayPrefixListReferencesRequest)[K]
    }>): GetTransitGatewayPrefixListReferencesResult {
        return this.client.getTransitGatewayPrefixListReferences(
            this.ops["GetTransitGatewayPrefixListReferences"].apply(partialParams)
        );
    }

    invokeGetTransitGatewayRouteTableAssociations(partialParams: ToOptional<{
      [K in keyof GetTransitGatewayRouteTableAssociationsRequest]: (GetTransitGatewayRouteTableAssociationsRequest)[K]
    }>): GetTransitGatewayRouteTableAssociationsResult {
        return this.client.getTransitGatewayRouteTableAssociations(
            this.ops["GetTransitGatewayRouteTableAssociations"].apply(partialParams)
        );
    }

    invokeGetTransitGatewayRouteTablePropagations(partialParams: ToOptional<{
      [K in keyof GetTransitGatewayRouteTablePropagationsRequest]: (GetTransitGatewayRouteTablePropagationsRequest)[K]
    }>): GetTransitGatewayRouteTablePropagationsResult {
        return this.client.getTransitGatewayRouteTablePropagations(
            this.ops["GetTransitGatewayRouteTablePropagations"].apply(partialParams)
        );
    }

    invokeGetVpnConnectionDeviceSampleConfiguration(partialParams: ToOptional<{
      [K in keyof GetVpnConnectionDeviceSampleConfigurationRequest]: (GetVpnConnectionDeviceSampleConfigurationRequest)[K]
    }>): GetVpnConnectionDeviceSampleConfigurationResult {
        return this.client.getVpnConnectionDeviceSampleConfiguration(
            this.ops["GetVpnConnectionDeviceSampleConfiguration"].apply(partialParams)
        );
    }

    invokeImportClientVpnClientCertificateRevocationList(partialParams: ToOptional<{
      [K in keyof ImportClientVpnClientCertificateRevocationListRequest]: (ImportClientVpnClientCertificateRevocationListRequest)[K]
    }>): ImportClientVpnClientCertificateRevocationListResult {
        return this.client.importClientVpnClientCertificateRevocationList(
            this.ops["ImportClientVpnClientCertificateRevocationList"].apply(partialParams)
        );
    }

    invokeImportInstance(partialParams: ToOptional<{
      [K in keyof ImportInstanceRequest]: (ImportInstanceRequest)[K]
    }>): ImportInstanceResult {
        return this.client.importInstance(
            this.ops["ImportInstance"].apply(partialParams)
        );
    }

    invokeImportKeyPair(partialParams: ToOptional<{
      [K in keyof ImportKeyPairRequest]: (ImportKeyPairRequest)[K]
    }>): ImportKeyPairResult {
        return this.client.importKeyPair(
            this.ops["ImportKeyPair"].apply(partialParams)
        );
    }

    invokeImportVolume(partialParams: ToOptional<{
      [K in keyof ImportVolumeRequest]: (ImportVolumeRequest)[K]
    }>): ImportVolumeResult {
        return this.client.importVolume(
            this.ops["ImportVolume"].apply(partialParams)
        );
    }

    invokeModifyAddressAttribute(partialParams: ToOptional<{
      [K in keyof ModifyAddressAttributeRequest]: (ModifyAddressAttributeRequest)[K]
    }>): ModifyAddressAttributeResult {
        return this.client.modifyAddressAttribute(
            this.ops["ModifyAddressAttribute"].apply(partialParams)
        );
    }

    invokeModifyAvailabilityZoneGroup(partialParams: ToOptional<{
      [K in keyof ModifyAvailabilityZoneGroupRequest]: (ModifyAvailabilityZoneGroupRequest)[K]
    }>): ModifyAvailabilityZoneGroupResult {
        return this.client.modifyAvailabilityZoneGroup(
            this.ops["ModifyAvailabilityZoneGroup"].apply(partialParams)
        );
    }

    invokeModifyCapacityReservation(partialParams: ToOptional<{
      [K in keyof ModifyCapacityReservationRequest]: (ModifyCapacityReservationRequest)[K]
    }>): ModifyCapacityReservationResult {
        return this.client.modifyCapacityReservation(
            this.ops["ModifyCapacityReservation"].apply(partialParams)
        );
    }

    invokeModifyCapacityReservationFleet(partialParams: ToOptional<{
      [K in keyof ModifyCapacityReservationFleetRequest]: (ModifyCapacityReservationFleetRequest)[K]
    }>): ModifyCapacityReservationFleetResult {
        return this.client.modifyCapacityReservationFleet(
            this.ops["ModifyCapacityReservationFleet"].apply(partialParams)
        );
    }

    invokeModifyClientVpnEndpoint(partialParams: ToOptional<{
      [K in keyof ModifyClientVpnEndpointRequest]: (ModifyClientVpnEndpointRequest)[K]
    }>): ModifyClientVpnEndpointResult {
        return this.client.modifyClientVpnEndpoint(
            this.ops["ModifyClientVpnEndpoint"].apply(partialParams)
        );
    }

    invokeModifyDefaultCreditSpecification(partialParams: ToOptional<{
      [K in keyof ModifyDefaultCreditSpecificationRequest]: (ModifyDefaultCreditSpecificationRequest)[K]
    }>): ModifyDefaultCreditSpecificationResult {
        return this.client.modifyDefaultCreditSpecification(
            this.ops["ModifyDefaultCreditSpecification"].apply(partialParams)
        );
    }

    invokeModifyEbsDefaultKmsKeyId(partialParams: ToOptional<{
      [K in keyof ModifyEbsDefaultKmsKeyIdRequest]: (ModifyEbsDefaultKmsKeyIdRequest)[K]
    }>): ModifyEbsDefaultKmsKeyIdResult {
        return this.client.modifyEbsDefaultKmsKeyId(
            this.ops["ModifyEbsDefaultKmsKeyId"].apply(partialParams)
        );
    }

    invokeModifyFleet(partialParams: ToOptional<{
      [K in keyof ModifyFleetRequest]: (ModifyFleetRequest)[K]
    }>): ModifyFleetResult {
        return this.client.modifyFleet(
            this.ops["ModifyFleet"].apply(partialParams)
        );
    }

    invokeModifyFpgaImageAttribute(partialParams: ToOptional<{
      [K in keyof ModifyFpgaImageAttributeRequest]: (ModifyFpgaImageAttributeRequest)[K]
    }>): ModifyFpgaImageAttributeResult {
        return this.client.modifyFpgaImageAttribute(
            this.ops["ModifyFpgaImageAttribute"].apply(partialParams)
        );
    }

    invokeModifyHosts(partialParams: ToOptional<{
      [K in keyof ModifyHostsRequest]: (ModifyHostsRequest)[K]
    }>): ModifyHostsResult {
        return this.client.modifyHosts(
            this.ops["ModifyHosts"].apply(partialParams)
        );
    }

    invokeModifyIdFormat(partialParams: ToOptional<{
      [K in keyof ModifyIdFormatRequest]: (ModifyIdFormatRequest)[K]
    }>): void {
        return this.client.modifyIdFormat(
            this.ops["ModifyIdFormat"].apply(partialParams)
        );
    }

    invokeModifyIdentityIdFormat(partialParams: ToOptional<{
      [K in keyof ModifyIdentityIdFormatRequest]: (ModifyIdentityIdFormatRequest)[K]
    }>): void {
        return this.client.modifyIdentityIdFormat(
            this.ops["ModifyIdentityIdFormat"].apply(partialParams)
        );
    }

    invokeModifyImageAttribute(partialParams: ToOptional<{
      [K in keyof ModifyImageAttributeRequest]: (ModifyImageAttributeRequest)[K]
    }>): void {
        return this.client.modifyImageAttribute(
            this.ops["ModifyImageAttribute"].apply(partialParams)
        );
    }

    invokeModifyInstanceAttribute(partialParams: ToOptional<{
      [K in keyof ModifyInstanceAttributeRequest]: (ModifyInstanceAttributeRequest)[K]
    }>): void {
        return this.client.modifyInstanceAttribute(
            this.ops["ModifyInstanceAttribute"].apply(partialParams)
        );
    }

    invokeModifyInstanceCapacityReservationAttributes(partialParams: ToOptional<{
      [K in keyof ModifyInstanceCapacityReservationAttributesRequest]: (ModifyInstanceCapacityReservationAttributesRequest)[K]
    }>): ModifyInstanceCapacityReservationAttributesResult {
        return this.client.modifyInstanceCapacityReservationAttributes(
            this.ops["ModifyInstanceCapacityReservationAttributes"].apply(partialParams)
        );
    }

    invokeModifyInstanceCreditSpecification(partialParams: ToOptional<{
      [K in keyof ModifyInstanceCreditSpecificationRequest]: (ModifyInstanceCreditSpecificationRequest)[K]
    }>): ModifyInstanceCreditSpecificationResult {
        return this.client.modifyInstanceCreditSpecification(
            this.ops["ModifyInstanceCreditSpecification"].apply(partialParams)
        );
    }

    invokeModifyInstanceEventStartTime(partialParams: ToOptional<{
      [K in keyof ModifyInstanceEventStartTimeRequest]: (ModifyInstanceEventStartTimeRequest)[K]
    }>): ModifyInstanceEventStartTimeResult {
        return this.client.modifyInstanceEventStartTime(
            this.ops["ModifyInstanceEventStartTime"].apply(partialParams)
        );
    }

    invokeModifyInstanceEventWindow(partialParams: ToOptional<{
      [K in keyof ModifyInstanceEventWindowRequest]: (ModifyInstanceEventWindowRequest)[K]
    }>): ModifyInstanceEventWindowResult {
        return this.client.modifyInstanceEventWindow(
            this.ops["ModifyInstanceEventWindow"].apply(partialParams)
        );
    }

    invokeModifyInstanceMetadataOptions(partialParams: ToOptional<{
      [K in keyof ModifyInstanceMetadataOptionsRequest]: (ModifyInstanceMetadataOptionsRequest)[K]
    }>): ModifyInstanceMetadataOptionsResult {
        return this.client.modifyInstanceMetadataOptions(
            this.ops["ModifyInstanceMetadataOptions"].apply(partialParams)
        );
    }

    invokeModifyInstancePlacement(partialParams: ToOptional<{
      [K in keyof ModifyInstancePlacementRequest]: (ModifyInstancePlacementRequest)[K]
    }>): ModifyInstancePlacementResult {
        return this.client.modifyInstancePlacement(
            this.ops["ModifyInstancePlacement"].apply(partialParams)
        );
    }

    invokeModifyIpam(partialParams: ToOptional<{
      [K in keyof ModifyIpamRequest]: (ModifyIpamRequest)[K]
    }>): ModifyIpamResult {
        return this.client.modifyIpam(
            this.ops["ModifyIpam"].apply(partialParams)
        );
    }

    invokeModifyIpamPool(partialParams: ToOptional<{
      [K in keyof ModifyIpamPoolRequest]: (ModifyIpamPoolRequest)[K]
    }>): ModifyIpamPoolResult {
        return this.client.modifyIpamPool(
            this.ops["ModifyIpamPool"].apply(partialParams)
        );
    }

    invokeModifyIpamResourceCidr(partialParams: ToOptional<{
      [K in keyof ModifyIpamResourceCidrRequest]: (ModifyIpamResourceCidrRequest)[K]
    }>): ModifyIpamResourceCidrResult {
        return this.client.modifyIpamResourceCidr(
            this.ops["ModifyIpamResourceCidr"].apply(partialParams)
        );
    }

    invokeModifyIpamScope(partialParams: ToOptional<{
      [K in keyof ModifyIpamScopeRequest]: (ModifyIpamScopeRequest)[K]
    }>): ModifyIpamScopeResult {
        return this.client.modifyIpamScope(
            this.ops["ModifyIpamScope"].apply(partialParams)
        );
    }

    invokeModifyManagedPrefixList(partialParams: ToOptional<{
      [K in keyof ModifyManagedPrefixListRequest]: (ModifyManagedPrefixListRequest)[K]
    }>): ModifyManagedPrefixListResult {
        return this.client.modifyManagedPrefixList(
            this.ops["ModifyManagedPrefixList"].apply(partialParams)
        );
    }

    invokeModifyNetworkInterfaceAttribute(partialParams: ToOptional<{
      [K in keyof ModifyNetworkInterfaceAttributeRequest]: (ModifyNetworkInterfaceAttributeRequest)[K]
    }>): void {
        return this.client.modifyNetworkInterfaceAttribute(
            this.ops["ModifyNetworkInterfaceAttribute"].apply(partialParams)
        );
    }

    invokeModifyReservedInstances(partialParams: ToOptional<{
      [K in keyof ModifyReservedInstancesRequest]: (ModifyReservedInstancesRequest)[K]
    }>): ModifyReservedInstancesResult {
        return this.client.modifyReservedInstances(
            this.ops["ModifyReservedInstances"].apply(partialParams)
        );
    }

    invokeModifySecurityGroupRules(partialParams: ToOptional<{
      [K in keyof ModifySecurityGroupRulesRequest]: (ModifySecurityGroupRulesRequest)[K]
    }>): ModifySecurityGroupRulesResult {
        return this.client.modifySecurityGroupRules(
            this.ops["ModifySecurityGroupRules"].apply(partialParams)
        );
    }

    invokeModifySnapshotAttribute(partialParams: ToOptional<{
      [K in keyof ModifySnapshotAttributeRequest]: (ModifySnapshotAttributeRequest)[K]
    }>): void {
        return this.client.modifySnapshotAttribute(
            this.ops["ModifySnapshotAttribute"].apply(partialParams)
        );
    }

    invokeModifySnapshotTier(partialParams: ToOptional<{
      [K in keyof ModifySnapshotTierRequest]: (ModifySnapshotTierRequest)[K]
    }>): ModifySnapshotTierResult {
        return this.client.modifySnapshotTier(
            this.ops["ModifySnapshotTier"].apply(partialParams)
        );
    }

    invokeModifySpotFleetRequest(partialParams: ToOptional<{
      [K in keyof ModifySpotFleetRequestRequest]: (ModifySpotFleetRequestRequest)[K]
    }>): ModifySpotFleetRequestResponse {
        return this.client.modifySpotFleetRequest(
            this.ops["ModifySpotFleetRequest"].apply(partialParams)
        );
    }

    invokeModifySubnetAttribute(partialParams: ToOptional<{
      [K in keyof ModifySubnetAttributeRequest]: (ModifySubnetAttributeRequest)[K]
    }>): void {
        return this.client.modifySubnetAttribute(
            this.ops["ModifySubnetAttribute"].apply(partialParams)
        );
    }

    invokeModifyTrafficMirrorFilterNetworkServices(partialParams: ToOptional<{
      [K in keyof ModifyTrafficMirrorFilterNetworkServicesRequest]: (ModifyTrafficMirrorFilterNetworkServicesRequest)[K]
    }>): ModifyTrafficMirrorFilterNetworkServicesResult {
        return this.client.modifyTrafficMirrorFilterNetworkServices(
            this.ops["ModifyTrafficMirrorFilterNetworkServices"].apply(partialParams)
        );
    }

    invokeModifyTrafficMirrorFilterRule(partialParams: ToOptional<{
      [K in keyof ModifyTrafficMirrorFilterRuleRequest]: (ModifyTrafficMirrorFilterRuleRequest)[K]
    }>): ModifyTrafficMirrorFilterRuleResult {
        return this.client.modifyTrafficMirrorFilterRule(
            this.ops["ModifyTrafficMirrorFilterRule"].apply(partialParams)
        );
    }

    invokeModifyTrafficMirrorSession(partialParams: ToOptional<{
      [K in keyof ModifyTrafficMirrorSessionRequest]: (ModifyTrafficMirrorSessionRequest)[K]
    }>): ModifyTrafficMirrorSessionResult {
        return this.client.modifyTrafficMirrorSession(
            this.ops["ModifyTrafficMirrorSession"].apply(partialParams)
        );
    }

    invokeModifyTransitGateway(partialParams: ToOptional<{
      [K in keyof ModifyTransitGatewayRequest]: (ModifyTransitGatewayRequest)[K]
    }>): ModifyTransitGatewayResult {
        return this.client.modifyTransitGateway(
            this.ops["ModifyTransitGateway"].apply(partialParams)
        );
    }

    invokeModifyTransitGatewayPrefixListReference(partialParams: ToOptional<{
      [K in keyof ModifyTransitGatewayPrefixListReferenceRequest]: (ModifyTransitGatewayPrefixListReferenceRequest)[K]
    }>): ModifyTransitGatewayPrefixListReferenceResult {
        return this.client.modifyTransitGatewayPrefixListReference(
            this.ops["ModifyTransitGatewayPrefixListReference"].apply(partialParams)
        );
    }

    invokeModifyTransitGatewayVpcAttachment(partialParams: ToOptional<{
      [K in keyof ModifyTransitGatewayVpcAttachmentRequest]: (ModifyTransitGatewayVpcAttachmentRequest)[K]
    }>): ModifyTransitGatewayVpcAttachmentResult {
        return this.client.modifyTransitGatewayVpcAttachment(
            this.ops["ModifyTransitGatewayVpcAttachment"].apply(partialParams)
        );
    }

    invokeModifyVolume(partialParams: ToOptional<{
      [K in keyof ModifyVolumeRequest]: (ModifyVolumeRequest)[K]
    }>): ModifyVolumeResult {
        return this.client.modifyVolume(
            this.ops["ModifyVolume"].apply(partialParams)
        );
    }

    invokeModifyVolumeAttribute(partialParams: ToOptional<{
      [K in keyof ModifyVolumeAttributeRequest]: (ModifyVolumeAttributeRequest)[K]
    }>): void {
        return this.client.modifyVolumeAttribute(
            this.ops["ModifyVolumeAttribute"].apply(partialParams)
        );
    }

    invokeModifyVpcAttribute(partialParams: ToOptional<{
      [K in keyof ModifyVpcAttributeRequest]: (ModifyVpcAttributeRequest)[K]
    }>): void {
        return this.client.modifyVpcAttribute(
            this.ops["ModifyVpcAttribute"].apply(partialParams)
        );
    }

    invokeModifyVpcEndpoint(partialParams: ToOptional<{
      [K in keyof ModifyVpcEndpointRequest]: (ModifyVpcEndpointRequest)[K]
    }>): ModifyVpcEndpointResult {
        return this.client.modifyVpcEndpoint(
            this.ops["ModifyVpcEndpoint"].apply(partialParams)
        );
    }

    invokeModifyVpcEndpointConnectionNotification(partialParams: ToOptional<{
      [K in keyof ModifyVpcEndpointConnectionNotificationRequest]: (ModifyVpcEndpointConnectionNotificationRequest)[K]
    }>): ModifyVpcEndpointConnectionNotificationResult {
        return this.client.modifyVpcEndpointConnectionNotification(
            this.ops["ModifyVpcEndpointConnectionNotification"].apply(partialParams)
        );
    }

    invokeModifyVpcEndpointServiceConfiguration(partialParams: ToOptional<{
      [K in keyof ModifyVpcEndpointServiceConfigurationRequest]: (ModifyVpcEndpointServiceConfigurationRequest)[K]
    }>): ModifyVpcEndpointServiceConfigurationResult {
        return this.client.modifyVpcEndpointServiceConfiguration(
            this.ops["ModifyVpcEndpointServiceConfiguration"].apply(partialParams)
        );
    }

    invokeModifyVpcEndpointServicePayerResponsibility(partialParams: ToOptional<{
      [K in keyof ModifyVpcEndpointServicePayerResponsibilityRequest]: (ModifyVpcEndpointServicePayerResponsibilityRequest)[K]
    }>): ModifyVpcEndpointServicePayerResponsibilityResult {
        return this.client.modifyVpcEndpointServicePayerResponsibility(
            this.ops["ModifyVpcEndpointServicePayerResponsibility"].apply(partialParams)
        );
    }

    invokeModifyVpcEndpointServicePermissions(partialParams: ToOptional<{
      [K in keyof ModifyVpcEndpointServicePermissionsRequest]: (ModifyVpcEndpointServicePermissionsRequest)[K]
    }>): ModifyVpcEndpointServicePermissionsResult {
        return this.client.modifyVpcEndpointServicePermissions(
            this.ops["ModifyVpcEndpointServicePermissions"].apply(partialParams)
        );
    }

    invokeModifyVpcPeeringConnectionOptions(partialParams: ToOptional<{
      [K in keyof ModifyVpcPeeringConnectionOptionsRequest]: (ModifyVpcPeeringConnectionOptionsRequest)[K]
    }>): ModifyVpcPeeringConnectionOptionsResult {
        return this.client.modifyVpcPeeringConnectionOptions(
            this.ops["ModifyVpcPeeringConnectionOptions"].apply(partialParams)
        );
    }

    invokeModifyVpcTenancy(partialParams: ToOptional<{
      [K in keyof ModifyVpcTenancyRequest]: (ModifyVpcTenancyRequest)[K]
    }>): ModifyVpcTenancyResult {
        return this.client.modifyVpcTenancy(
            this.ops["ModifyVpcTenancy"].apply(partialParams)
        );
    }

    invokeModifyVpnConnection(partialParams: ToOptional<{
      [K in keyof ModifyVpnConnectionRequest]: (ModifyVpnConnectionRequest)[K]
    }>): ModifyVpnConnectionResult {
        return this.client.modifyVpnConnection(
            this.ops["ModifyVpnConnection"].apply(partialParams)
        );
    }

    invokeModifyVpnConnectionOptions(partialParams: ToOptional<{
      [K in keyof ModifyVpnConnectionOptionsRequest]: (ModifyVpnConnectionOptionsRequest)[K]
    }>): ModifyVpnConnectionOptionsResult {
        return this.client.modifyVpnConnectionOptions(
            this.ops["ModifyVpnConnectionOptions"].apply(partialParams)
        );
    }

    invokeModifyVpnTunnelCertificate(partialParams: ToOptional<{
      [K in keyof ModifyVpnTunnelCertificateRequest]: (ModifyVpnTunnelCertificateRequest)[K]
    }>): ModifyVpnTunnelCertificateResult {
        return this.client.modifyVpnTunnelCertificate(
            this.ops["ModifyVpnTunnelCertificate"].apply(partialParams)
        );
    }

    invokeModifyVpnTunnelOptions(partialParams: ToOptional<{
      [K in keyof ModifyVpnTunnelOptionsRequest]: (ModifyVpnTunnelOptionsRequest)[K]
    }>): ModifyVpnTunnelOptionsResult {
        return this.client.modifyVpnTunnelOptions(
            this.ops["ModifyVpnTunnelOptions"].apply(partialParams)
        );
    }

    invokeMonitorInstances(partialParams: ToOptional<{
      [K in keyof MonitorInstancesRequest]: (MonitorInstancesRequest)[K]
    }>): MonitorInstancesResult {
        return this.client.monitorInstances(
            this.ops["MonitorInstances"].apply(partialParams)
        );
    }

    invokeMoveAddressToVpc(partialParams: ToOptional<{
      [K in keyof MoveAddressToVpcRequest]: (MoveAddressToVpcRequest)[K]
    }>): MoveAddressToVpcResult {
        return this.client.moveAddressToVpc(
            this.ops["MoveAddressToVpc"].apply(partialParams)
        );
    }

    invokeMoveByoipCidrToIpam(partialParams: ToOptional<{
      [K in keyof MoveByoipCidrToIpamRequest]: (MoveByoipCidrToIpamRequest)[K]
    }>): MoveByoipCidrToIpamResult {
        return this.client.moveByoipCidrToIpam(
            this.ops["MoveByoipCidrToIpam"].apply(partialParams)
        );
    }

    invokeProvisionByoipCidr(partialParams: ToOptional<{
      [K in keyof ProvisionByoipCidrRequest]: (ProvisionByoipCidrRequest)[K]
    }>): ProvisionByoipCidrResult {
        return this.client.provisionByoipCidr(
            this.ops["ProvisionByoipCidr"].apply(partialParams)
        );
    }

    invokeProvisionIpamPoolCidr(partialParams: ToOptional<{
      [K in keyof ProvisionIpamPoolCidrRequest]: (ProvisionIpamPoolCidrRequest)[K]
    }>): ProvisionIpamPoolCidrResult {
        return this.client.provisionIpamPoolCidr(
            this.ops["ProvisionIpamPoolCidr"].apply(partialParams)
        );
    }

    invokeProvisionPublicIpv4PoolCidr(partialParams: ToOptional<{
      [K in keyof ProvisionPublicIpv4PoolCidrRequest]: (ProvisionPublicIpv4PoolCidrRequest)[K]
    }>): ProvisionPublicIpv4PoolCidrResult {
        return this.client.provisionPublicIpv4PoolCidr(
            this.ops["ProvisionPublicIpv4PoolCidr"].apply(partialParams)
        );
    }

    invokePurchaseHostReservation(partialParams: ToOptional<{
      [K in keyof PurchaseHostReservationRequest]: (PurchaseHostReservationRequest)[K]
    }>): PurchaseHostReservationResult {
        return this.client.purchaseHostReservation(
            this.ops["PurchaseHostReservation"].apply(partialParams)
        );
    }

    invokePurchaseReservedInstancesOffering(partialParams: ToOptional<{
      [K in keyof PurchaseReservedInstancesOfferingRequest]: (PurchaseReservedInstancesOfferingRequest)[K]
    }>): PurchaseReservedInstancesOfferingResult {
        return this.client.purchaseReservedInstancesOffering(
            this.ops["PurchaseReservedInstancesOffering"].apply(partialParams)
        );
    }

    invokePurchaseScheduledInstances(partialParams: ToOptional<{
      [K in keyof PurchaseScheduledInstancesRequest]: (PurchaseScheduledInstancesRequest)[K]
    }>): PurchaseScheduledInstancesResult {
        return this.client.purchaseScheduledInstances(
            this.ops["PurchaseScheduledInstances"].apply(partialParams)
        );
    }

    invokeRebootInstances(partialParams: ToOptional<{
      [K in keyof RebootInstancesRequest]: (RebootInstancesRequest)[K]
    }>): void {
        return this.client.rebootInstances(
            this.ops["RebootInstances"].apply(partialParams)
        );
    }

    invokeRegisterImage(partialParams: ToOptional<{
      [K in keyof RegisterImageRequest]: (RegisterImageRequest)[K]
    }>): RegisterImageResult {
        return this.client.registerImage(
            this.ops["RegisterImage"].apply(partialParams)
        );
    }

    invokeRejectTransitGatewayPeeringAttachment(partialParams: ToOptional<{
      [K in keyof RejectTransitGatewayPeeringAttachmentRequest]: (RejectTransitGatewayPeeringAttachmentRequest)[K]
    }>): RejectTransitGatewayPeeringAttachmentResult {
        return this.client.rejectTransitGatewayPeeringAttachment(
            this.ops["RejectTransitGatewayPeeringAttachment"].apply(partialParams)
        );
    }

    invokeRejectTransitGatewayVpcAttachment(partialParams: ToOptional<{
      [K in keyof RejectTransitGatewayVpcAttachmentRequest]: (RejectTransitGatewayVpcAttachmentRequest)[K]
    }>): RejectTransitGatewayVpcAttachmentResult {
        return this.client.rejectTransitGatewayVpcAttachment(
            this.ops["RejectTransitGatewayVpcAttachment"].apply(partialParams)
        );
    }

    invokeRejectVpcEndpointConnections(partialParams: ToOptional<{
      [K in keyof RejectVpcEndpointConnectionsRequest]: (RejectVpcEndpointConnectionsRequest)[K]
    }>): RejectVpcEndpointConnectionsResult {
        return this.client.rejectVpcEndpointConnections(
            this.ops["RejectVpcEndpointConnections"].apply(partialParams)
        );
    }

    invokeRejectVpcPeeringConnection(partialParams: ToOptional<{
      [K in keyof RejectVpcPeeringConnectionRequest]: (RejectVpcPeeringConnectionRequest)[K]
    }>): RejectVpcPeeringConnectionResult {
        return this.client.rejectVpcPeeringConnection(
            this.ops["RejectVpcPeeringConnection"].apply(partialParams)
        );
    }

    invokeReleaseHosts(partialParams: ToOptional<{
      [K in keyof ReleaseHostsRequest]: (ReleaseHostsRequest)[K]
    }>): ReleaseHostsResult {
        return this.client.releaseHosts(
            this.ops["ReleaseHosts"].apply(partialParams)
        );
    }

    invokeReleaseIpamPoolAllocation(partialParams: ToOptional<{
      [K in keyof ReleaseIpamPoolAllocationRequest]: (ReleaseIpamPoolAllocationRequest)[K]
    }>): ReleaseIpamPoolAllocationResult {
        return this.client.releaseIpamPoolAllocation(
            this.ops["ReleaseIpamPoolAllocation"].apply(partialParams)
        );
    }

    invokeReplaceIamInstanceProfileAssociation(partialParams: ToOptional<{
      [K in keyof ReplaceIamInstanceProfileAssociationRequest]: (ReplaceIamInstanceProfileAssociationRequest)[K]
    }>): ReplaceIamInstanceProfileAssociationResult {
        return this.client.replaceIamInstanceProfileAssociation(
            this.ops["ReplaceIamInstanceProfileAssociation"].apply(partialParams)
        );
    }

    invokeReplaceNetworkAclAssociation(partialParams: ToOptional<{
      [K in keyof ReplaceNetworkAclAssociationRequest]: (ReplaceNetworkAclAssociationRequest)[K]
    }>): ReplaceNetworkAclAssociationResult {
        return this.client.replaceNetworkAclAssociation(
            this.ops["ReplaceNetworkAclAssociation"].apply(partialParams)
        );
    }

    invokeReplaceNetworkAclEntry(partialParams: ToOptional<{
      [K in keyof ReplaceNetworkAclEntryRequest]: (ReplaceNetworkAclEntryRequest)[K]
    }>): void {
        return this.client.replaceNetworkAclEntry(
            this.ops["ReplaceNetworkAclEntry"].apply(partialParams)
        );
    }

    invokeReplaceRoute(partialParams: ToOptional<{
      [K in keyof ReplaceRouteRequest]: (ReplaceRouteRequest)[K]
    }>): void {
        return this.client.replaceRoute(
            this.ops["ReplaceRoute"].apply(partialParams)
        );
    }

    invokeReplaceRouteTableAssociation(partialParams: ToOptional<{
      [K in keyof ReplaceRouteTableAssociationRequest]: (ReplaceRouteTableAssociationRequest)[K]
    }>): ReplaceRouteTableAssociationResult {
        return this.client.replaceRouteTableAssociation(
            this.ops["ReplaceRouteTableAssociation"].apply(partialParams)
        );
    }

    invokeReplaceTransitGatewayRoute(partialParams: ToOptional<{
      [K in keyof ReplaceTransitGatewayRouteRequest]: (ReplaceTransitGatewayRouteRequest)[K]
    }>): ReplaceTransitGatewayRouteResult {
        return this.client.replaceTransitGatewayRoute(
            this.ops["ReplaceTransitGatewayRoute"].apply(partialParams)
        );
    }

    invokeReportInstanceStatus(partialParams: ToOptional<{
      [K in keyof ReportInstanceStatusRequest]: (ReportInstanceStatusRequest)[K]
    }>): void {
        return this.client.reportInstanceStatus(
            this.ops["ReportInstanceStatus"].apply(partialParams)
        );
    }

    invokeRequestSpotFleet(partialParams: ToOptional<{
      [K in keyof RequestSpotFleetRequest]: (RequestSpotFleetRequest)[K]
    }>): RequestSpotFleetResponse {
        return this.client.requestSpotFleet(
            this.ops["RequestSpotFleet"].apply(partialParams)
        );
    }

    invokeResetAddressAttribute(partialParams: ToOptional<{
      [K in keyof ResetAddressAttributeRequest]: (ResetAddressAttributeRequest)[K]
    }>): ResetAddressAttributeResult {
        return this.client.resetAddressAttribute(
            this.ops["ResetAddressAttribute"].apply(partialParams)
        );
    }

    invokeResetFpgaImageAttribute(partialParams: ToOptional<{
      [K in keyof ResetFpgaImageAttributeRequest]: (ResetFpgaImageAttributeRequest)[K]
    }>): ResetFpgaImageAttributeResult {
        return this.client.resetFpgaImageAttribute(
            this.ops["ResetFpgaImageAttribute"].apply(partialParams)
        );
    }

    invokeResetImageAttribute(partialParams: ToOptional<{
      [K in keyof ResetImageAttributeRequest]: (ResetImageAttributeRequest)[K]
    }>): void {
        return this.client.resetImageAttribute(
            this.ops["ResetImageAttribute"].apply(partialParams)
        );
    }

    invokeResetInstanceAttribute(partialParams: ToOptional<{
      [K in keyof ResetInstanceAttributeRequest]: (ResetInstanceAttributeRequest)[K]
    }>): void {
        return this.client.resetInstanceAttribute(
            this.ops["ResetInstanceAttribute"].apply(partialParams)
        );
    }

    invokeResetNetworkInterfaceAttribute(partialParams: ToOptional<{
      [K in keyof ResetNetworkInterfaceAttributeRequest]: (ResetNetworkInterfaceAttributeRequest)[K]
    }>): void {
        return this.client.resetNetworkInterfaceAttribute(
            this.ops["ResetNetworkInterfaceAttribute"].apply(partialParams)
        );
    }

    invokeResetSnapshotAttribute(partialParams: ToOptional<{
      [K in keyof ResetSnapshotAttributeRequest]: (ResetSnapshotAttributeRequest)[K]
    }>): void {
        return this.client.resetSnapshotAttribute(
            this.ops["ResetSnapshotAttribute"].apply(partialParams)
        );
    }

    invokeRestoreAddressToClassic(partialParams: ToOptional<{
      [K in keyof RestoreAddressToClassicRequest]: (RestoreAddressToClassicRequest)[K]
    }>): RestoreAddressToClassicResult {
        return this.client.restoreAddressToClassic(
            this.ops["RestoreAddressToClassic"].apply(partialParams)
        );
    }

    invokeRestoreImageFromRecycleBin(partialParams: ToOptional<{
      [K in keyof RestoreImageFromRecycleBinRequest]: (RestoreImageFromRecycleBinRequest)[K]
    }>): RestoreImageFromRecycleBinResult {
        return this.client.restoreImageFromRecycleBin(
            this.ops["RestoreImageFromRecycleBin"].apply(partialParams)
        );
    }

    invokeRestoreManagedPrefixListVersion(partialParams: ToOptional<{
      [K in keyof RestoreManagedPrefixListVersionRequest]: (RestoreManagedPrefixListVersionRequest)[K]
    }>): RestoreManagedPrefixListVersionResult {
        return this.client.restoreManagedPrefixListVersion(
            this.ops["RestoreManagedPrefixListVersion"].apply(partialParams)
        );
    }

    invokeRestoreSnapshotFromRecycleBin(partialParams: ToOptional<{
      [K in keyof RestoreSnapshotFromRecycleBinRequest]: (RestoreSnapshotFromRecycleBinRequest)[K]
    }>): RestoreSnapshotFromRecycleBinResult {
        return this.client.restoreSnapshotFromRecycleBin(
            this.ops["RestoreSnapshotFromRecycleBin"].apply(partialParams)
        );
    }

    invokeRestoreSnapshotTier(partialParams: ToOptional<{
      [K in keyof RestoreSnapshotTierRequest]: (RestoreSnapshotTierRequest)[K]
    }>): RestoreSnapshotTierResult {
        return this.client.restoreSnapshotTier(
            this.ops["RestoreSnapshotTier"].apply(partialParams)
        );
    }

    invokeRevokeClientVpnIngress(partialParams: ToOptional<{
      [K in keyof RevokeClientVpnIngressRequest]: (RevokeClientVpnIngressRequest)[K]
    }>): RevokeClientVpnIngressResult {
        return this.client.revokeClientVpnIngress(
            this.ops["RevokeClientVpnIngress"].apply(partialParams)
        );
    }

    invokeRevokeSecurityGroupEgress(partialParams: ToOptional<{
      [K in keyof RevokeSecurityGroupEgressRequest]: (RevokeSecurityGroupEgressRequest)[K]
    }>): RevokeSecurityGroupEgressResult {
        return this.client.revokeSecurityGroupEgress(
            this.ops["RevokeSecurityGroupEgress"].apply(partialParams)
        );
    }

    invokeRunInstances(partialParams: ToOptional<{
      [K in keyof RunInstancesRequest]: (RunInstancesRequest)[K]
    }>): Reservation {
        return this.client.runInstances(
            this.ops["RunInstances"].apply(partialParams)
        );
    }

    invokeRunScheduledInstances(partialParams: ToOptional<{
      [K in keyof RunScheduledInstancesRequest]: (RunScheduledInstancesRequest)[K]
    }>): RunScheduledInstancesResult {
        return this.client.runScheduledInstances(
            this.ops["RunScheduledInstances"].apply(partialParams)
        );
    }

    invokeSearchLocalGatewayRoutes(partialParams: ToOptional<{
      [K in keyof SearchLocalGatewayRoutesRequest]: (SearchLocalGatewayRoutesRequest)[K]
    }>): SearchLocalGatewayRoutesResult {
        return this.client.searchLocalGatewayRoutes(
            this.ops["SearchLocalGatewayRoutes"].apply(partialParams)
        );
    }

    invokeSearchTransitGatewayRoutes(partialParams: ToOptional<{
      [K in keyof SearchTransitGatewayRoutesRequest]: (SearchTransitGatewayRoutesRequest)[K]
    }>): SearchTransitGatewayRoutesResult {
        return this.client.searchTransitGatewayRoutes(
            this.ops["SearchTransitGatewayRoutes"].apply(partialParams)
        );
    }

    invokeSendDiagnosticInterrupt(partialParams: ToOptional<{
      [K in keyof SendDiagnosticInterruptRequest]: (SendDiagnosticInterruptRequest)[K]
    }>): void {
        return this.client.sendDiagnosticInterrupt(
            this.ops["SendDiagnosticInterrupt"].apply(partialParams)
        );
    }

    invokeStartInstances(partialParams: ToOptional<{
      [K in keyof StartInstancesRequest]: (StartInstancesRequest)[K]
    }>): StartInstancesResult {
        return this.client.startInstances(
            this.ops["StartInstances"].apply(partialParams)
        );
    }

    invokeStartNetworkInsightsAccessScopeAnalysis(partialParams: ToOptional<{
      [K in keyof StartNetworkInsightsAccessScopeAnalysisRequest]: (StartNetworkInsightsAccessScopeAnalysisRequest)[K]
    }>): StartNetworkInsightsAccessScopeAnalysisResult {
        return this.client.startNetworkInsightsAccessScopeAnalysis(
            this.ops["StartNetworkInsightsAccessScopeAnalysis"].apply(partialParams)
        );
    }

    invokeStartNetworkInsightsAnalysis(partialParams: ToOptional<{
      [K in keyof StartNetworkInsightsAnalysisRequest]: (StartNetworkInsightsAnalysisRequest)[K]
    }>): StartNetworkInsightsAnalysisResult {
        return this.client.startNetworkInsightsAnalysis(
            this.ops["StartNetworkInsightsAnalysis"].apply(partialParams)
        );
    }

    invokeStartVpcEndpointServicePrivateDnsVerification(partialParams: ToOptional<{
      [K in keyof StartVpcEndpointServicePrivateDnsVerificationRequest]: (StartVpcEndpointServicePrivateDnsVerificationRequest)[K]
    }>): StartVpcEndpointServicePrivateDnsVerificationResult {
        return this.client.startVpcEndpointServicePrivateDnsVerification(
            this.ops["StartVpcEndpointServicePrivateDnsVerification"].apply(partialParams)
        );
    }

    invokeStopInstances(partialParams: ToOptional<{
      [K in keyof StopInstancesRequest]: (StopInstancesRequest)[K]
    }>): StopInstancesResult {
        return this.client.stopInstances(
            this.ops["StopInstances"].apply(partialParams)
        );
    }

    invokeTerminateClientVpnConnections(partialParams: ToOptional<{
      [K in keyof TerminateClientVpnConnectionsRequest]: (TerminateClientVpnConnectionsRequest)[K]
    }>): TerminateClientVpnConnectionsResult {
        return this.client.terminateClientVpnConnections(
            this.ops["TerminateClientVpnConnections"].apply(partialParams)
        );
    }

    invokeTerminateInstances(partialParams: ToOptional<{
      [K in keyof TerminateInstancesRequest]: (TerminateInstancesRequest)[K]
    }>): TerminateInstancesResult {
        return this.client.terminateInstances(
            this.ops["TerminateInstances"].apply(partialParams)
        );
    }

    invokeUnassignIpv6Addresses(partialParams: ToOptional<{
      [K in keyof UnassignIpv6AddressesRequest]: (UnassignIpv6AddressesRequest)[K]
    }>): UnassignIpv6AddressesResult {
        return this.client.unassignIpv6Addresses(
            this.ops["UnassignIpv6Addresses"].apply(partialParams)
        );
    }

    invokeUnassignPrivateIpAddresses(partialParams: ToOptional<{
      [K in keyof UnassignPrivateIpAddressesRequest]: (UnassignPrivateIpAddressesRequest)[K]
    }>): void {
        return this.client.unassignPrivateIpAddresses(
            this.ops["UnassignPrivateIpAddresses"].apply(partialParams)
        );
    }

    invokeUnmonitorInstances(partialParams: ToOptional<{
      [K in keyof UnmonitorInstancesRequest]: (UnmonitorInstancesRequest)[K]
    }>): UnmonitorInstancesResult {
        return this.client.unmonitorInstances(
            this.ops["UnmonitorInstances"].apply(partialParams)
        );
    }

    invokeWithdrawByoipCidr(partialParams: ToOptional<{
      [K in keyof WithdrawByoipCidrRequest]: (WithdrawByoipCidrRequest)[K]
    }>): WithdrawByoipCidrResult {
        return this.client.withdrawByoipCidr(
            this.ops["WithdrawByoipCidr"].apply(partialParams)
        );
    }
}