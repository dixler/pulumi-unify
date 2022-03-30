
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

export default class extends aws.ec2.EipAssociation {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.ec2.EipAssociation>) {
        super(...args)
        this.client = new awssdk.EC2()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/ec2-2016-11-15.normal.json"), this.client)
    }

    invokeAcceptReservedInstancesExchangeQuote(partialParams: ToOptional<{
      [K in keyof AcceptReservedInstancesExchangeQuoteRequest & keyof AcceptReservedInstancesExchangeQuoteRequest & keyof AcceptReservedInstancesExchangeQuoteRequest & keyof AcceptReservedInstancesExchangeQuoteRequest & keyof AcceptReservedInstancesExchangeQuoteRequest]: (AcceptReservedInstancesExchangeQuoteRequest & AcceptReservedInstancesExchangeQuoteRequest & AcceptReservedInstancesExchangeQuoteRequest & AcceptReservedInstancesExchangeQuoteRequest & AcceptReservedInstancesExchangeQuoteRequest)[K]
    }>): AcceptReservedInstancesExchangeQuoteResult {
        return this.client.acceptReservedInstancesExchangeQuote(
            this.ops["AcceptReservedInstancesExchangeQuote"].apply(partialParams)
        );
    }

    invokeAcceptTransitGatewayPeeringAttachment(partialParams: ToOptional<{
      [K in keyof AcceptTransitGatewayPeeringAttachmentRequest & keyof AcceptTransitGatewayPeeringAttachmentRequest & keyof AcceptTransitGatewayPeeringAttachmentRequest & keyof AcceptTransitGatewayPeeringAttachmentRequest & keyof AcceptTransitGatewayPeeringAttachmentRequest]: (AcceptTransitGatewayPeeringAttachmentRequest & AcceptTransitGatewayPeeringAttachmentRequest & AcceptTransitGatewayPeeringAttachmentRequest & AcceptTransitGatewayPeeringAttachmentRequest & AcceptTransitGatewayPeeringAttachmentRequest)[K]
    }>): AcceptTransitGatewayPeeringAttachmentResult {
        return this.client.acceptTransitGatewayPeeringAttachment(
            this.ops["AcceptTransitGatewayPeeringAttachment"].apply(partialParams)
        );
    }

    invokeAcceptTransitGatewayVpcAttachment(partialParams: ToOptional<{
      [K in keyof AcceptTransitGatewayVpcAttachmentRequest & keyof AcceptTransitGatewayVpcAttachmentRequest & keyof AcceptTransitGatewayVpcAttachmentRequest & keyof AcceptTransitGatewayVpcAttachmentRequest & keyof AcceptTransitGatewayVpcAttachmentRequest]: (AcceptTransitGatewayVpcAttachmentRequest & AcceptTransitGatewayVpcAttachmentRequest & AcceptTransitGatewayVpcAttachmentRequest & AcceptTransitGatewayVpcAttachmentRequest & AcceptTransitGatewayVpcAttachmentRequest)[K]
    }>): AcceptTransitGatewayVpcAttachmentResult {
        return this.client.acceptTransitGatewayVpcAttachment(
            this.ops["AcceptTransitGatewayVpcAttachment"].apply(partialParams)
        );
    }

    invokeAcceptVpcEndpointConnections(partialParams: ToOptional<{
      [K in keyof AcceptVpcEndpointConnectionsRequest & keyof AcceptVpcEndpointConnectionsRequest & keyof AcceptVpcEndpointConnectionsRequest & keyof AcceptVpcEndpointConnectionsRequest & keyof AcceptVpcEndpointConnectionsRequest]: (AcceptVpcEndpointConnectionsRequest & AcceptVpcEndpointConnectionsRequest & AcceptVpcEndpointConnectionsRequest & AcceptVpcEndpointConnectionsRequest & AcceptVpcEndpointConnectionsRequest)[K]
    }>): AcceptVpcEndpointConnectionsResult {
        return this.client.acceptVpcEndpointConnections(
            this.ops["AcceptVpcEndpointConnections"].apply(partialParams)
        );
    }

    invokeAdvertiseByoipCidr(partialParams: ToOptional<{
      [K in keyof AdvertiseByoipCidrRequest & keyof AdvertiseByoipCidrRequest & keyof AdvertiseByoipCidrRequest & keyof AdvertiseByoipCidrRequest & keyof AdvertiseByoipCidrRequest]: (AdvertiseByoipCidrRequest & AdvertiseByoipCidrRequest & AdvertiseByoipCidrRequest & AdvertiseByoipCidrRequest & AdvertiseByoipCidrRequest)[K]
    }>): AdvertiseByoipCidrResult {
        return this.client.advertiseByoipCidr(
            this.ops["AdvertiseByoipCidr"].apply(partialParams)
        );
    }

    invokeAllocateHosts(partialParams: ToOptional<{
      [K in keyof AllocateHostsRequest & keyof AllocateHostsRequest & keyof AllocateHostsRequest & keyof AllocateHostsRequest & keyof AllocateHostsRequest]: (AllocateHostsRequest & AllocateHostsRequest & AllocateHostsRequest & AllocateHostsRequest & AllocateHostsRequest)[K]
    }>): AllocateHostsResult {
        return this.client.allocateHosts(
            this.ops["AllocateHosts"].apply(partialParams)
        );
    }

    invokeAllocateIpamPoolCidr(partialParams: ToOptional<{
      [K in keyof AllocateIpamPoolCidrRequest & keyof AllocateIpamPoolCidrRequest & keyof AllocateIpamPoolCidrRequest & keyof AllocateIpamPoolCidrRequest & keyof AllocateIpamPoolCidrRequest]: (AllocateIpamPoolCidrRequest & AllocateIpamPoolCidrRequest & AllocateIpamPoolCidrRequest & AllocateIpamPoolCidrRequest & AllocateIpamPoolCidrRequest)[K]
    }>): AllocateIpamPoolCidrResult {
        return this.client.allocateIpamPoolCidr(
            this.ops["AllocateIpamPoolCidr"].apply(partialParams)
        );
    }

    invokeApplySecurityGroupsToClientVpnTargetNetwork(partialParams: ToOptional<{
      [K in keyof ApplySecurityGroupsToClientVpnTargetNetworkRequest & keyof ApplySecurityGroupsToClientVpnTargetNetworkRequest & keyof ApplySecurityGroupsToClientVpnTargetNetworkRequest & keyof ApplySecurityGroupsToClientVpnTargetNetworkRequest & keyof ApplySecurityGroupsToClientVpnTargetNetworkRequest]: (ApplySecurityGroupsToClientVpnTargetNetworkRequest & ApplySecurityGroupsToClientVpnTargetNetworkRequest & ApplySecurityGroupsToClientVpnTargetNetworkRequest & ApplySecurityGroupsToClientVpnTargetNetworkRequest & ApplySecurityGroupsToClientVpnTargetNetworkRequest)[K]
    }>): ApplySecurityGroupsToClientVpnTargetNetworkResult {
        return this.client.applySecurityGroupsToClientVpnTargetNetwork(
            this.ops["ApplySecurityGroupsToClientVpnTargetNetwork"].apply(partialParams)
        );
    }

    invokeAssignIpv6Addresses(partialParams: ToOptional<{
      [K in keyof AssignIpv6AddressesRequest & keyof AssignIpv6AddressesRequest & keyof AssignIpv6AddressesRequest & keyof AssignIpv6AddressesRequest & keyof AssignIpv6AddressesRequest]: (AssignIpv6AddressesRequest & AssignIpv6AddressesRequest & AssignIpv6AddressesRequest & AssignIpv6AddressesRequest & AssignIpv6AddressesRequest)[K]
    }>): AssignIpv6AddressesResult {
        return this.client.assignIpv6Addresses(
            this.ops["AssignIpv6Addresses"].apply(partialParams)
        );
    }

    invokeAssignPrivateIpAddresses(partialParams: ToOptional<{
      [K in keyof AssignPrivateIpAddressesRequest & keyof AssignPrivateIpAddressesRequest & keyof AssignPrivateIpAddressesRequest & keyof AssignPrivateIpAddressesRequest & keyof AssignPrivateIpAddressesRequest]: (AssignPrivateIpAddressesRequest & AssignPrivateIpAddressesRequest & AssignPrivateIpAddressesRequest & AssignPrivateIpAddressesRequest & AssignPrivateIpAddressesRequest)[K]
    }>): AssignPrivateIpAddressesResult {
        return this.client.assignPrivateIpAddresses(
            this.ops["AssignPrivateIpAddresses"].apply(partialParams)
        );
    }

    invokeAssociateClientVpnTargetNetwork(partialParams: ToOptional<{
      [K in keyof AssociateClientVpnTargetNetworkRequest & keyof AssociateClientVpnTargetNetworkRequest & keyof AssociateClientVpnTargetNetworkRequest & keyof AssociateClientVpnTargetNetworkRequest & keyof AssociateClientVpnTargetNetworkRequest]: (AssociateClientVpnTargetNetworkRequest & AssociateClientVpnTargetNetworkRequest & AssociateClientVpnTargetNetworkRequest & AssociateClientVpnTargetNetworkRequest & AssociateClientVpnTargetNetworkRequest)[K]
    }>): AssociateClientVpnTargetNetworkResult {
        return this.client.associateClientVpnTargetNetwork(
            this.ops["AssociateClientVpnTargetNetwork"].apply(partialParams)
        );
    }

    invokeAssociateDhcpOptions(partialParams: ToOptional<{
      [K in keyof AssociateDhcpOptionsRequest & keyof AssociateDhcpOptionsRequest & keyof AssociateDhcpOptionsRequest & keyof AssociateDhcpOptionsRequest & keyof AssociateDhcpOptionsRequest]: (AssociateDhcpOptionsRequest & AssociateDhcpOptionsRequest & AssociateDhcpOptionsRequest & AssociateDhcpOptionsRequest & AssociateDhcpOptionsRequest)[K]
    }>): void {
        return this.client.associateDhcpOptions(
            this.ops["AssociateDhcpOptions"].apply(partialParams)
        );
    }

    invokeAssociateIamInstanceProfile(partialParams: ToOptional<{
      [K in keyof AssociateIamInstanceProfileRequest & keyof AssociateIamInstanceProfileRequest & keyof AssociateIamInstanceProfileRequest & keyof AssociateIamInstanceProfileRequest & keyof AssociateIamInstanceProfileRequest]: (AssociateIamInstanceProfileRequest & AssociateIamInstanceProfileRequest & AssociateIamInstanceProfileRequest & AssociateIamInstanceProfileRequest & AssociateIamInstanceProfileRequest)[K]
    }>): AssociateIamInstanceProfileResult {
        return this.client.associateIamInstanceProfile(
            this.ops["AssociateIamInstanceProfile"].apply(partialParams)
        );
    }

    invokeAssociateInstanceEventWindow(partialParams: ToOptional<{
      [K in keyof AssociateInstanceEventWindowRequest & keyof AssociateInstanceEventWindowRequest & keyof AssociateInstanceEventWindowRequest & keyof AssociateInstanceEventWindowRequest & keyof AssociateInstanceEventWindowRequest]: (AssociateInstanceEventWindowRequest & AssociateInstanceEventWindowRequest & AssociateInstanceEventWindowRequest & AssociateInstanceEventWindowRequest & AssociateInstanceEventWindowRequest)[K]
    }>): AssociateInstanceEventWindowResult {
        return this.client.associateInstanceEventWindow(
            this.ops["AssociateInstanceEventWindow"].apply(partialParams)
        );
    }

    invokeAssociateRouteTable(partialParams: ToOptional<{
      [K in keyof AssociateRouteTableRequest & keyof AssociateRouteTableRequest & keyof AssociateRouteTableRequest & keyof AssociateRouteTableRequest & keyof AssociateRouteTableRequest]: (AssociateRouteTableRequest & AssociateRouteTableRequest & AssociateRouteTableRequest & AssociateRouteTableRequest & AssociateRouteTableRequest)[K]
    }>): AssociateRouteTableResult {
        return this.client.associateRouteTable(
            this.ops["AssociateRouteTable"].apply(partialParams)
        );
    }

    invokeAssociateSubnetCidrBlock(partialParams: ToOptional<{
      [K in keyof AssociateSubnetCidrBlockRequest & keyof AssociateSubnetCidrBlockRequest & keyof AssociateSubnetCidrBlockRequest & keyof AssociateSubnetCidrBlockRequest & keyof AssociateSubnetCidrBlockRequest]: (AssociateSubnetCidrBlockRequest & AssociateSubnetCidrBlockRequest & AssociateSubnetCidrBlockRequest & AssociateSubnetCidrBlockRequest & AssociateSubnetCidrBlockRequest)[K]
    }>): AssociateSubnetCidrBlockResult {
        return this.client.associateSubnetCidrBlock(
            this.ops["AssociateSubnetCidrBlock"].apply(partialParams)
        );
    }

    invokeAssociateTransitGatewayRouteTable(partialParams: ToOptional<{
      [K in keyof AssociateTransitGatewayRouteTableRequest & keyof AssociateTransitGatewayRouteTableRequest & keyof AssociateTransitGatewayRouteTableRequest & keyof AssociateTransitGatewayRouteTableRequest & keyof AssociateTransitGatewayRouteTableRequest]: (AssociateTransitGatewayRouteTableRequest & AssociateTransitGatewayRouteTableRequest & AssociateTransitGatewayRouteTableRequest & AssociateTransitGatewayRouteTableRequest & AssociateTransitGatewayRouteTableRequest)[K]
    }>): AssociateTransitGatewayRouteTableResult {
        return this.client.associateTransitGatewayRouteTable(
            this.ops["AssociateTransitGatewayRouteTable"].apply(partialParams)
        );
    }

    invokeAssociateTrunkInterface(partialParams: ToOptional<{
      [K in keyof AssociateTrunkInterfaceRequest & keyof AssociateTrunkInterfaceRequest & keyof AssociateTrunkInterfaceRequest & keyof AssociateTrunkInterfaceRequest & keyof AssociateTrunkInterfaceRequest]: (AssociateTrunkInterfaceRequest & AssociateTrunkInterfaceRequest & AssociateTrunkInterfaceRequest & AssociateTrunkInterfaceRequest & AssociateTrunkInterfaceRequest)[K]
    }>): AssociateTrunkInterfaceResult {
        return this.client.associateTrunkInterface(
            this.ops["AssociateTrunkInterface"].apply(partialParams)
        );
    }

    invokeAssociateVpcCidrBlock(partialParams: ToOptional<{
      [K in keyof AssociateVpcCidrBlockRequest & keyof AssociateVpcCidrBlockRequest & keyof AssociateVpcCidrBlockRequest & keyof AssociateVpcCidrBlockRequest & keyof AssociateVpcCidrBlockRequest]: (AssociateVpcCidrBlockRequest & AssociateVpcCidrBlockRequest & AssociateVpcCidrBlockRequest & AssociateVpcCidrBlockRequest & AssociateVpcCidrBlockRequest)[K]
    }>): AssociateVpcCidrBlockResult {
        return this.client.associateVpcCidrBlock(
            this.ops["AssociateVpcCidrBlock"].apply(partialParams)
        );
    }

    invokeAttachClassicLinkVpc(partialParams: ToOptional<{
      [K in keyof AttachClassicLinkVpcRequest & keyof AttachClassicLinkVpcRequest & keyof AttachClassicLinkVpcRequest & keyof AttachClassicLinkVpcRequest & keyof AttachClassicLinkVpcRequest]: (AttachClassicLinkVpcRequest & AttachClassicLinkVpcRequest & AttachClassicLinkVpcRequest & AttachClassicLinkVpcRequest & AttachClassicLinkVpcRequest)[K]
    }>): AttachClassicLinkVpcResult {
        return this.client.attachClassicLinkVpc(
            this.ops["AttachClassicLinkVpc"].apply(partialParams)
        );
    }

    invokeAttachInternetGateway(partialParams: ToOptional<{
      [K in keyof AttachInternetGatewayRequest & keyof AttachInternetGatewayRequest & keyof AttachInternetGatewayRequest & keyof AttachInternetGatewayRequest & keyof AttachInternetGatewayRequest]: (AttachInternetGatewayRequest & AttachInternetGatewayRequest & AttachInternetGatewayRequest & AttachInternetGatewayRequest & AttachInternetGatewayRequest)[K]
    }>): void {
        return this.client.attachInternetGateway(
            this.ops["AttachInternetGateway"].apply(partialParams)
        );
    }

    invokeAttachNetworkInterface(partialParams: ToOptional<{
      [K in keyof AttachNetworkInterfaceRequest & keyof AttachNetworkInterfaceRequest & keyof AttachNetworkInterfaceRequest & keyof AttachNetworkInterfaceRequest & keyof AttachNetworkInterfaceRequest]: (AttachNetworkInterfaceRequest & AttachNetworkInterfaceRequest & AttachNetworkInterfaceRequest & AttachNetworkInterfaceRequest & AttachNetworkInterfaceRequest)[K]
    }>): AttachNetworkInterfaceResult {
        return this.client.attachNetworkInterface(
            this.ops["AttachNetworkInterface"].apply(partialParams)
        );
    }

    invokeAttachVolume(partialParams: ToOptional<{
      [K in keyof AttachVolumeRequest & keyof AttachVolumeRequest & keyof AttachVolumeRequest & keyof AttachVolumeRequest & keyof AttachVolumeRequest]: (AttachVolumeRequest & AttachVolumeRequest & AttachVolumeRequest & AttachVolumeRequest & AttachVolumeRequest)[K]
    }>): VolumeAttachment {
        return this.client.attachVolume(
            this.ops["AttachVolume"].apply(partialParams)
        );
    }

    invokeAttachVpnGateway(partialParams: ToOptional<{
      [K in keyof AttachVpnGatewayRequest & keyof AttachVpnGatewayRequest & keyof AttachVpnGatewayRequest & keyof AttachVpnGatewayRequest & keyof AttachVpnGatewayRequest]: (AttachVpnGatewayRequest & AttachVpnGatewayRequest & AttachVpnGatewayRequest & AttachVpnGatewayRequest & AttachVpnGatewayRequest)[K]
    }>): AttachVpnGatewayResult {
        return this.client.attachVpnGateway(
            this.ops["AttachVpnGateway"].apply(partialParams)
        );
    }

    invokeAuthorizeClientVpnIngress(partialParams: ToOptional<{
      [K in keyof AuthorizeClientVpnIngressRequest & keyof AuthorizeClientVpnIngressRequest & keyof AuthorizeClientVpnIngressRequest & keyof AuthorizeClientVpnIngressRequest & keyof AuthorizeClientVpnIngressRequest]: (AuthorizeClientVpnIngressRequest & AuthorizeClientVpnIngressRequest & AuthorizeClientVpnIngressRequest & AuthorizeClientVpnIngressRequest & AuthorizeClientVpnIngressRequest)[K]
    }>): AuthorizeClientVpnIngressResult {
        return this.client.authorizeClientVpnIngress(
            this.ops["AuthorizeClientVpnIngress"].apply(partialParams)
        );
    }

    invokeAuthorizeSecurityGroupEgress(partialParams: ToOptional<{
      [K in keyof AuthorizeSecurityGroupEgressRequest & keyof AuthorizeSecurityGroupEgressRequest & keyof AuthorizeSecurityGroupEgressRequest & keyof AuthorizeSecurityGroupEgressRequest & keyof AuthorizeSecurityGroupEgressRequest]: (AuthorizeSecurityGroupEgressRequest & AuthorizeSecurityGroupEgressRequest & AuthorizeSecurityGroupEgressRequest & AuthorizeSecurityGroupEgressRequest & AuthorizeSecurityGroupEgressRequest)[K]
    }>): AuthorizeSecurityGroupEgressResult {
        return this.client.authorizeSecurityGroupEgress(
            this.ops["AuthorizeSecurityGroupEgress"].apply(partialParams)
        );
    }

    invokeBundleInstance(partialParams: ToOptional<{
      [K in keyof BundleInstanceRequest & keyof BundleInstanceRequest & keyof BundleInstanceRequest & keyof BundleInstanceRequest & keyof BundleInstanceRequest]: (BundleInstanceRequest & BundleInstanceRequest & BundleInstanceRequest & BundleInstanceRequest & BundleInstanceRequest)[K]
    }>): BundleInstanceResult {
        return this.client.bundleInstance(
            this.ops["BundleInstance"].apply(partialParams)
        );
    }

    invokeCancelBundleTask(partialParams: ToOptional<{
      [K in keyof CancelBundleTaskRequest & keyof CancelBundleTaskRequest & keyof CancelBundleTaskRequest & keyof CancelBundleTaskRequest & keyof CancelBundleTaskRequest]: (CancelBundleTaskRequest & CancelBundleTaskRequest & CancelBundleTaskRequest & CancelBundleTaskRequest & CancelBundleTaskRequest)[K]
    }>): CancelBundleTaskResult {
        return this.client.cancelBundleTask(
            this.ops["CancelBundleTask"].apply(partialParams)
        );
    }

    invokeCancelCapacityReservation(partialParams: ToOptional<{
      [K in keyof CancelCapacityReservationRequest & keyof CancelCapacityReservationRequest & keyof CancelCapacityReservationRequest & keyof CancelCapacityReservationRequest & keyof CancelCapacityReservationRequest]: (CancelCapacityReservationRequest & CancelCapacityReservationRequest & CancelCapacityReservationRequest & CancelCapacityReservationRequest & CancelCapacityReservationRequest)[K]
    }>): CancelCapacityReservationResult {
        return this.client.cancelCapacityReservation(
            this.ops["CancelCapacityReservation"].apply(partialParams)
        );
    }

    invokeCancelCapacityReservationFleets(partialParams: ToOptional<{
      [K in keyof CancelCapacityReservationFleetsRequest & keyof CancelCapacityReservationFleetsRequest & keyof CancelCapacityReservationFleetsRequest & keyof CancelCapacityReservationFleetsRequest & keyof CancelCapacityReservationFleetsRequest]: (CancelCapacityReservationFleetsRequest & CancelCapacityReservationFleetsRequest & CancelCapacityReservationFleetsRequest & CancelCapacityReservationFleetsRequest & CancelCapacityReservationFleetsRequest)[K]
    }>): CancelCapacityReservationFleetsResult {
        return this.client.cancelCapacityReservationFleets(
            this.ops["CancelCapacityReservationFleets"].apply(partialParams)
        );
    }

    invokeCancelConversionTask(partialParams: ToOptional<{
      [K in keyof CancelConversionRequest & keyof CancelConversionRequest & keyof CancelConversionRequest & keyof CancelConversionRequest & keyof CancelConversionRequest]: (CancelConversionRequest & CancelConversionRequest & CancelConversionRequest & CancelConversionRequest & CancelConversionRequest)[K]
    }>): void {
        return this.client.cancelConversionTask(
            this.ops["CancelConversionTask"].apply(partialParams)
        );
    }

    invokeCancelExportTask(partialParams: ToOptional<{
      [K in keyof CancelExportTaskRequest & keyof CancelExportTaskRequest & keyof CancelExportTaskRequest & keyof CancelExportTaskRequest & keyof CancelExportTaskRequest]: (CancelExportTaskRequest & CancelExportTaskRequest & CancelExportTaskRequest & CancelExportTaskRequest & CancelExportTaskRequest)[K]
    }>): void {
        return this.client.cancelExportTask(
            this.ops["CancelExportTask"].apply(partialParams)
        );
    }

    invokeCancelReservedInstancesListing(partialParams: ToOptional<{
      [K in keyof CancelReservedInstancesListingRequest & keyof CancelReservedInstancesListingRequest & keyof CancelReservedInstancesListingRequest & keyof CancelReservedInstancesListingRequest & keyof CancelReservedInstancesListingRequest]: (CancelReservedInstancesListingRequest & CancelReservedInstancesListingRequest & CancelReservedInstancesListingRequest & CancelReservedInstancesListingRequest & CancelReservedInstancesListingRequest)[K]
    }>): CancelReservedInstancesListingResult {
        return this.client.cancelReservedInstancesListing(
            this.ops["CancelReservedInstancesListing"].apply(partialParams)
        );
    }

    invokeCancelSpotFleetRequests(partialParams: ToOptional<{
      [K in keyof CancelSpotFleetRequestsRequest & keyof CancelSpotFleetRequestsRequest & keyof CancelSpotFleetRequestsRequest & keyof CancelSpotFleetRequestsRequest & keyof CancelSpotFleetRequestsRequest]: (CancelSpotFleetRequestsRequest & CancelSpotFleetRequestsRequest & CancelSpotFleetRequestsRequest & CancelSpotFleetRequestsRequest & CancelSpotFleetRequestsRequest)[K]
    }>): CancelSpotFleetRequestsResponse {
        return this.client.cancelSpotFleetRequests(
            this.ops["CancelSpotFleetRequests"].apply(partialParams)
        );
    }

    invokeCancelSpotInstanceRequests(partialParams: ToOptional<{
      [K in keyof CancelSpotInstanceRequestsRequest & keyof CancelSpotInstanceRequestsRequest & keyof CancelSpotInstanceRequestsRequest & keyof CancelSpotInstanceRequestsRequest & keyof CancelSpotInstanceRequestsRequest]: (CancelSpotInstanceRequestsRequest & CancelSpotInstanceRequestsRequest & CancelSpotInstanceRequestsRequest & CancelSpotInstanceRequestsRequest & CancelSpotInstanceRequestsRequest)[K]
    }>): CancelSpotInstanceRequestsResult {
        return this.client.cancelSpotInstanceRequests(
            this.ops["CancelSpotInstanceRequests"].apply(partialParams)
        );
    }

    invokeConfirmProductInstance(partialParams: ToOptional<{
      [K in keyof ConfirmProductInstanceRequest & keyof ConfirmProductInstanceRequest & keyof ConfirmProductInstanceRequest & keyof ConfirmProductInstanceRequest & keyof ConfirmProductInstanceRequest]: (ConfirmProductInstanceRequest & ConfirmProductInstanceRequest & ConfirmProductInstanceRequest & ConfirmProductInstanceRequest & ConfirmProductInstanceRequest)[K]
    }>): ConfirmProductInstanceResult {
        return this.client.confirmProductInstance(
            this.ops["ConfirmProductInstance"].apply(partialParams)
        );
    }

    invokeCopyFpgaImage(partialParams: ToOptional<{
      [K in keyof CopyFpgaImageRequest & keyof CopyFpgaImageRequest & keyof CopyFpgaImageRequest & keyof CopyFpgaImageRequest & keyof CopyFpgaImageRequest]: (CopyFpgaImageRequest & CopyFpgaImageRequest & CopyFpgaImageRequest & CopyFpgaImageRequest & CopyFpgaImageRequest)[K]
    }>): CopyFpgaImageResult {
        return this.client.copyFpgaImage(
            this.ops["CopyFpgaImage"].apply(partialParams)
        );
    }

    invokeCopyImage(partialParams: ToOptional<{
      [K in keyof CopyImageRequest & keyof CopyImageRequest & keyof CopyImageRequest & keyof CopyImageRequest & keyof CopyImageRequest]: (CopyImageRequest & CopyImageRequest & CopyImageRequest & CopyImageRequest & CopyImageRequest)[K]
    }>): CopyImageResult {
        return this.client.copyImage(
            this.ops["CopyImage"].apply(partialParams)
        );
    }

    invokeCopySnapshot(partialParams: ToOptional<{
      [K in keyof CopySnapshotRequest & keyof CopySnapshotRequest & keyof CopySnapshotRequest & keyof CopySnapshotRequest & keyof CopySnapshotRequest]: (CopySnapshotRequest & CopySnapshotRequest & CopySnapshotRequest & CopySnapshotRequest & CopySnapshotRequest)[K]
    }>): CopySnapshotResult {
        return this.client.copySnapshot(
            this.ops["CopySnapshot"].apply(partialParams)
        );
    }

    invokeCreateCapacityReservation(partialParams: ToOptional<{
      [K in keyof CreateCapacityReservationRequest & keyof CreateCapacityReservationRequest & keyof CreateCapacityReservationRequest & keyof CreateCapacityReservationRequest & keyof CreateCapacityReservationRequest]: (CreateCapacityReservationRequest & CreateCapacityReservationRequest & CreateCapacityReservationRequest & CreateCapacityReservationRequest & CreateCapacityReservationRequest)[K]
    }>): CreateCapacityReservationResult {
        return this.client.createCapacityReservation(
            this.ops["CreateCapacityReservation"].apply(partialParams)
        );
    }

    invokeCreateCapacityReservationFleet(partialParams: ToOptional<{
      [K in keyof CreateCapacityReservationFleetRequest & keyof CreateCapacityReservationFleetRequest & keyof CreateCapacityReservationFleetRequest & keyof CreateCapacityReservationFleetRequest & keyof CreateCapacityReservationFleetRequest]: (CreateCapacityReservationFleetRequest & CreateCapacityReservationFleetRequest & CreateCapacityReservationFleetRequest & CreateCapacityReservationFleetRequest & CreateCapacityReservationFleetRequest)[K]
    }>): CreateCapacityReservationFleetResult {
        return this.client.createCapacityReservationFleet(
            this.ops["CreateCapacityReservationFleet"].apply(partialParams)
        );
    }

    invokeCreateCarrierGateway(partialParams: ToOptional<{
      [K in keyof CreateCarrierGatewayRequest & keyof CreateCarrierGatewayRequest & keyof CreateCarrierGatewayRequest & keyof CreateCarrierGatewayRequest & keyof CreateCarrierGatewayRequest]: (CreateCarrierGatewayRequest & CreateCarrierGatewayRequest & CreateCarrierGatewayRequest & CreateCarrierGatewayRequest & CreateCarrierGatewayRequest)[K]
    }>): CreateCarrierGatewayResult {
        return this.client.createCarrierGateway(
            this.ops["CreateCarrierGateway"].apply(partialParams)
        );
    }

    invokeCreateClientVpnEndpoint(partialParams: ToOptional<{
      [K in keyof CreateClientVpnEndpointRequest & keyof CreateClientVpnEndpointRequest & keyof CreateClientVpnEndpointRequest & keyof CreateClientVpnEndpointRequest & keyof CreateClientVpnEndpointRequest]: (CreateClientVpnEndpointRequest & CreateClientVpnEndpointRequest & CreateClientVpnEndpointRequest & CreateClientVpnEndpointRequest & CreateClientVpnEndpointRequest)[K]
    }>): CreateClientVpnEndpointResult {
        return this.client.createClientVpnEndpoint(
            this.ops["CreateClientVpnEndpoint"].apply(partialParams)
        );
    }

    invokeCreateClientVpnRoute(partialParams: ToOptional<{
      [K in keyof CreateClientVpnRouteRequest & keyof CreateClientVpnRouteRequest & keyof CreateClientVpnRouteRequest & keyof CreateClientVpnRouteRequest & keyof CreateClientVpnRouteRequest]: (CreateClientVpnRouteRequest & CreateClientVpnRouteRequest & CreateClientVpnRouteRequest & CreateClientVpnRouteRequest & CreateClientVpnRouteRequest)[K]
    }>): CreateClientVpnRouteResult {
        return this.client.createClientVpnRoute(
            this.ops["CreateClientVpnRoute"].apply(partialParams)
        );
    }

    invokeCreateCustomerGateway(partialParams: ToOptional<{
      [K in keyof CreateCustomerGatewayRequest & keyof CreateCustomerGatewayRequest & keyof CreateCustomerGatewayRequest & keyof CreateCustomerGatewayRequest & keyof CreateCustomerGatewayRequest]: (CreateCustomerGatewayRequest & CreateCustomerGatewayRequest & CreateCustomerGatewayRequest & CreateCustomerGatewayRequest & CreateCustomerGatewayRequest)[K]
    }>): CreateCustomerGatewayResult {
        return this.client.createCustomerGateway(
            this.ops["CreateCustomerGateway"].apply(partialParams)
        );
    }

    invokeCreateDefaultSubnet(partialParams: ToOptional<{
      [K in keyof CreateDefaultSubnetRequest & keyof CreateDefaultSubnetRequest & keyof CreateDefaultSubnetRequest & keyof CreateDefaultSubnetRequest & keyof CreateDefaultSubnetRequest]: (CreateDefaultSubnetRequest & CreateDefaultSubnetRequest & CreateDefaultSubnetRequest & CreateDefaultSubnetRequest & CreateDefaultSubnetRequest)[K]
    }>): CreateDefaultSubnetResult {
        return this.client.createDefaultSubnet(
            this.ops["CreateDefaultSubnet"].apply(partialParams)
        );
    }

    invokeCreateDhcpOptions(partialParams: ToOptional<{
      [K in keyof CreateDhcpOptionsRequest & keyof CreateDhcpOptionsRequest & keyof CreateDhcpOptionsRequest & keyof CreateDhcpOptionsRequest & keyof CreateDhcpOptionsRequest]: (CreateDhcpOptionsRequest & CreateDhcpOptionsRequest & CreateDhcpOptionsRequest & CreateDhcpOptionsRequest & CreateDhcpOptionsRequest)[K]
    }>): CreateDhcpOptionsResult {
        return this.client.createDhcpOptions(
            this.ops["CreateDhcpOptions"].apply(partialParams)
        );
    }

    invokeCreateEgressOnlyInternetGateway(partialParams: ToOptional<{
      [K in keyof CreateEgressOnlyInternetGatewayRequest & keyof CreateEgressOnlyInternetGatewayRequest & keyof CreateEgressOnlyInternetGatewayRequest & keyof CreateEgressOnlyInternetGatewayRequest & keyof CreateEgressOnlyInternetGatewayRequest]: (CreateEgressOnlyInternetGatewayRequest & CreateEgressOnlyInternetGatewayRequest & CreateEgressOnlyInternetGatewayRequest & CreateEgressOnlyInternetGatewayRequest & CreateEgressOnlyInternetGatewayRequest)[K]
    }>): CreateEgressOnlyInternetGatewayResult {
        return this.client.createEgressOnlyInternetGateway(
            this.ops["CreateEgressOnlyInternetGateway"].apply(partialParams)
        );
    }

    invokeCreateFleet(partialParams: ToOptional<{
      [K in keyof CreateFleetRequest & keyof CreateFleetRequest & keyof CreateFleetRequest & keyof CreateFleetRequest & keyof CreateFleetRequest]: (CreateFleetRequest & CreateFleetRequest & CreateFleetRequest & CreateFleetRequest & CreateFleetRequest)[K]
    }>): CreateFleetResult {
        return this.client.createFleet(
            this.ops["CreateFleet"].apply(partialParams)
        );
    }

    invokeCreateFlowLogs(partialParams: ToOptional<{
      [K in keyof CreateFlowLogsRequest & keyof CreateFlowLogsRequest & keyof CreateFlowLogsRequest & keyof CreateFlowLogsRequest & keyof CreateFlowLogsRequest]: (CreateFlowLogsRequest & CreateFlowLogsRequest & CreateFlowLogsRequest & CreateFlowLogsRequest & CreateFlowLogsRequest)[K]
    }>): CreateFlowLogsResult {
        return this.client.createFlowLogs(
            this.ops["CreateFlowLogs"].apply(partialParams)
        );
    }

    invokeCreateFpgaImage(partialParams: ToOptional<{
      [K in keyof CreateFpgaImageRequest & keyof CreateFpgaImageRequest & keyof CreateFpgaImageRequest & keyof CreateFpgaImageRequest & keyof CreateFpgaImageRequest]: (CreateFpgaImageRequest & CreateFpgaImageRequest & CreateFpgaImageRequest & CreateFpgaImageRequest & CreateFpgaImageRequest)[K]
    }>): CreateFpgaImageResult {
        return this.client.createFpgaImage(
            this.ops["CreateFpgaImage"].apply(partialParams)
        );
    }

    invokeCreateImage(partialParams: ToOptional<{
      [K in keyof CreateImageRequest & keyof CreateImageRequest & keyof CreateImageRequest & keyof CreateImageRequest & keyof CreateImageRequest]: (CreateImageRequest & CreateImageRequest & CreateImageRequest & CreateImageRequest & CreateImageRequest)[K]
    }>): CreateImageResult {
        return this.client.createImage(
            this.ops["CreateImage"].apply(partialParams)
        );
    }

    invokeCreateInstanceExportTask(partialParams: ToOptional<{
      [K in keyof CreateInstanceExportTaskRequest & keyof CreateInstanceExportTaskRequest & keyof CreateInstanceExportTaskRequest & keyof CreateInstanceExportTaskRequest & keyof CreateInstanceExportTaskRequest]: (CreateInstanceExportTaskRequest & CreateInstanceExportTaskRequest & CreateInstanceExportTaskRequest & CreateInstanceExportTaskRequest & CreateInstanceExportTaskRequest)[K]
    }>): CreateInstanceExportTaskResult {
        return this.client.createInstanceExportTask(
            this.ops["CreateInstanceExportTask"].apply(partialParams)
        );
    }

    invokeCreateIpamPool(partialParams: ToOptional<{
      [K in keyof CreateIpamPoolRequest & keyof CreateIpamPoolRequest & keyof CreateIpamPoolRequest & keyof CreateIpamPoolRequest & keyof CreateIpamPoolRequest]: (CreateIpamPoolRequest & CreateIpamPoolRequest & CreateIpamPoolRequest & CreateIpamPoolRequest & CreateIpamPoolRequest)[K]
    }>): CreateIpamPoolResult {
        return this.client.createIpamPool(
            this.ops["CreateIpamPool"].apply(partialParams)
        );
    }

    invokeCreateIpamScope(partialParams: ToOptional<{
      [K in keyof CreateIpamScopeRequest & keyof CreateIpamScopeRequest & keyof CreateIpamScopeRequest & keyof CreateIpamScopeRequest & keyof CreateIpamScopeRequest]: (CreateIpamScopeRequest & CreateIpamScopeRequest & CreateIpamScopeRequest & CreateIpamScopeRequest & CreateIpamScopeRequest)[K]
    }>): CreateIpamScopeResult {
        return this.client.createIpamScope(
            this.ops["CreateIpamScope"].apply(partialParams)
        );
    }

    invokeCreateKeyPair(partialParams: ToOptional<{
      [K in keyof CreateKeyPairRequest & keyof CreateKeyPairRequest & keyof CreateKeyPairRequest & keyof CreateKeyPairRequest & keyof CreateKeyPairRequest]: (CreateKeyPairRequest & CreateKeyPairRequest & CreateKeyPairRequest & CreateKeyPairRequest & CreateKeyPairRequest)[K]
    }>): KeyPair {
        return this.client.createKeyPair(
            this.ops["CreateKeyPair"].apply(partialParams)
        );
    }

    invokeCreateLaunchTemplate(partialParams: ToOptional<{
      [K in keyof CreateLaunchTemplateRequest & keyof CreateLaunchTemplateRequest & keyof CreateLaunchTemplateRequest & keyof CreateLaunchTemplateRequest & keyof CreateLaunchTemplateRequest]: (CreateLaunchTemplateRequest & CreateLaunchTemplateRequest & CreateLaunchTemplateRequest & CreateLaunchTemplateRequest & CreateLaunchTemplateRequest)[K]
    }>): CreateLaunchTemplateResult {
        return this.client.createLaunchTemplate(
            this.ops["CreateLaunchTemplate"].apply(partialParams)
        );
    }

    invokeCreateLaunchTemplateVersion(partialParams: ToOptional<{
      [K in keyof CreateLaunchTemplateVersionRequest & keyof CreateLaunchTemplateVersionRequest & keyof CreateLaunchTemplateVersionRequest & keyof CreateLaunchTemplateVersionRequest & keyof CreateLaunchTemplateVersionRequest]: (CreateLaunchTemplateVersionRequest & CreateLaunchTemplateVersionRequest & CreateLaunchTemplateVersionRequest & CreateLaunchTemplateVersionRequest & CreateLaunchTemplateVersionRequest)[K]
    }>): CreateLaunchTemplateVersionResult {
        return this.client.createLaunchTemplateVersion(
            this.ops["CreateLaunchTemplateVersion"].apply(partialParams)
        );
    }

    invokeCreateLocalGatewayRoute(partialParams: ToOptional<{
      [K in keyof CreateLocalGatewayRouteRequest & keyof CreateLocalGatewayRouteRequest & keyof CreateLocalGatewayRouteRequest & keyof CreateLocalGatewayRouteRequest & keyof CreateLocalGatewayRouteRequest]: (CreateLocalGatewayRouteRequest & CreateLocalGatewayRouteRequest & CreateLocalGatewayRouteRequest & CreateLocalGatewayRouteRequest & CreateLocalGatewayRouteRequest)[K]
    }>): CreateLocalGatewayRouteResult {
        return this.client.createLocalGatewayRoute(
            this.ops["CreateLocalGatewayRoute"].apply(partialParams)
        );
    }

    invokeCreateLocalGatewayRouteTableVpcAssociation(partialParams: ToOptional<{
      [K in keyof CreateLocalGatewayRouteTableVpcAssociationRequest & keyof CreateLocalGatewayRouteTableVpcAssociationRequest & keyof CreateLocalGatewayRouteTableVpcAssociationRequest & keyof CreateLocalGatewayRouteTableVpcAssociationRequest & keyof CreateLocalGatewayRouteTableVpcAssociationRequest]: (CreateLocalGatewayRouteTableVpcAssociationRequest & CreateLocalGatewayRouteTableVpcAssociationRequest & CreateLocalGatewayRouteTableVpcAssociationRequest & CreateLocalGatewayRouteTableVpcAssociationRequest & CreateLocalGatewayRouteTableVpcAssociationRequest)[K]
    }>): CreateLocalGatewayRouteTableVpcAssociationResult {
        return this.client.createLocalGatewayRouteTableVpcAssociation(
            this.ops["CreateLocalGatewayRouteTableVpcAssociation"].apply(partialParams)
        );
    }

    invokeCreateManagedPrefixList(partialParams: ToOptional<{
      [K in keyof CreateManagedPrefixListRequest & keyof CreateManagedPrefixListRequest & keyof CreateManagedPrefixListRequest & keyof CreateManagedPrefixListRequest & keyof CreateManagedPrefixListRequest]: (CreateManagedPrefixListRequest & CreateManagedPrefixListRequest & CreateManagedPrefixListRequest & CreateManagedPrefixListRequest & CreateManagedPrefixListRequest)[K]
    }>): CreateManagedPrefixListResult {
        return this.client.createManagedPrefixList(
            this.ops["CreateManagedPrefixList"].apply(partialParams)
        );
    }

    invokeCreateNatGateway(partialParams: ToOptional<{
      [K in keyof CreateNatGatewayRequest & keyof CreateNatGatewayRequest & keyof CreateNatGatewayRequest & keyof CreateNatGatewayRequest & keyof CreateNatGatewayRequest]: (CreateNatGatewayRequest & CreateNatGatewayRequest & CreateNatGatewayRequest & CreateNatGatewayRequest & CreateNatGatewayRequest)[K]
    }>): CreateNatGatewayResult {
        return this.client.createNatGateway(
            this.ops["CreateNatGateway"].apply(partialParams)
        );
    }

    invokeCreateNetworkAcl(partialParams: ToOptional<{
      [K in keyof CreateNetworkAclRequest & keyof CreateNetworkAclRequest & keyof CreateNetworkAclRequest & keyof CreateNetworkAclRequest & keyof CreateNetworkAclRequest]: (CreateNetworkAclRequest & CreateNetworkAclRequest & CreateNetworkAclRequest & CreateNetworkAclRequest & CreateNetworkAclRequest)[K]
    }>): CreateNetworkAclResult {
        return this.client.createNetworkAcl(
            this.ops["CreateNetworkAcl"].apply(partialParams)
        );
    }

    invokeCreateNetworkAclEntry(partialParams: ToOptional<{
      [K in keyof CreateNetworkAclEntryRequest & keyof CreateNetworkAclEntryRequest & keyof CreateNetworkAclEntryRequest & keyof CreateNetworkAclEntryRequest & keyof CreateNetworkAclEntryRequest]: (CreateNetworkAclEntryRequest & CreateNetworkAclEntryRequest & CreateNetworkAclEntryRequest & CreateNetworkAclEntryRequest & CreateNetworkAclEntryRequest)[K]
    }>): void {
        return this.client.createNetworkAclEntry(
            this.ops["CreateNetworkAclEntry"].apply(partialParams)
        );
    }

    invokeCreateNetworkInsightsAccessScope(partialParams: ToOptional<{
      [K in keyof CreateNetworkInsightsAccessScopeRequest & keyof CreateNetworkInsightsAccessScopeRequest & keyof CreateNetworkInsightsAccessScopeRequest & keyof CreateNetworkInsightsAccessScopeRequest & keyof CreateNetworkInsightsAccessScopeRequest]: (CreateNetworkInsightsAccessScopeRequest & CreateNetworkInsightsAccessScopeRequest & CreateNetworkInsightsAccessScopeRequest & CreateNetworkInsightsAccessScopeRequest & CreateNetworkInsightsAccessScopeRequest)[K]
    }>): CreateNetworkInsightsAccessScopeResult {
        return this.client.createNetworkInsightsAccessScope(
            this.ops["CreateNetworkInsightsAccessScope"].apply(partialParams)
        );
    }

    invokeCreateNetworkInsightsPath(partialParams: ToOptional<{
      [K in keyof CreateNetworkInsightsPathRequest & keyof CreateNetworkInsightsPathRequest & keyof CreateNetworkInsightsPathRequest & keyof CreateNetworkInsightsPathRequest & keyof CreateNetworkInsightsPathRequest]: (CreateNetworkInsightsPathRequest & CreateNetworkInsightsPathRequest & CreateNetworkInsightsPathRequest & CreateNetworkInsightsPathRequest & CreateNetworkInsightsPathRequest)[K]
    }>): CreateNetworkInsightsPathResult {
        return this.client.createNetworkInsightsPath(
            this.ops["CreateNetworkInsightsPath"].apply(partialParams)
        );
    }

    invokeCreateNetworkInterface(partialParams: ToOptional<{
      [K in keyof CreateNetworkInterfaceRequest & keyof CreateNetworkInterfaceRequest & keyof CreateNetworkInterfaceRequest & keyof CreateNetworkInterfaceRequest & keyof CreateNetworkInterfaceRequest]: (CreateNetworkInterfaceRequest & CreateNetworkInterfaceRequest & CreateNetworkInterfaceRequest & CreateNetworkInterfaceRequest & CreateNetworkInterfaceRequest)[K]
    }>): CreateNetworkInterfaceResult {
        return this.client.createNetworkInterface(
            this.ops["CreateNetworkInterface"].apply(partialParams)
        );
    }

    invokeCreateNetworkInterfacePermission(partialParams: ToOptional<{
      [K in keyof CreateNetworkInterfacePermissionRequest & keyof CreateNetworkInterfacePermissionRequest & keyof CreateNetworkInterfacePermissionRequest & keyof CreateNetworkInterfacePermissionRequest & keyof CreateNetworkInterfacePermissionRequest]: (CreateNetworkInterfacePermissionRequest & CreateNetworkInterfacePermissionRequest & CreateNetworkInterfacePermissionRequest & CreateNetworkInterfacePermissionRequest & CreateNetworkInterfacePermissionRequest)[K]
    }>): CreateNetworkInterfacePermissionResult {
        return this.client.createNetworkInterfacePermission(
            this.ops["CreateNetworkInterfacePermission"].apply(partialParams)
        );
    }

    invokeCreateReplaceRootVolumeTask(partialParams: ToOptional<{
      [K in keyof CreateReplaceRootVolumeTaskRequest & keyof CreateReplaceRootVolumeTaskRequest & keyof CreateReplaceRootVolumeTaskRequest & keyof CreateReplaceRootVolumeTaskRequest & keyof CreateReplaceRootVolumeTaskRequest]: (CreateReplaceRootVolumeTaskRequest & CreateReplaceRootVolumeTaskRequest & CreateReplaceRootVolumeTaskRequest & CreateReplaceRootVolumeTaskRequest & CreateReplaceRootVolumeTaskRequest)[K]
    }>): CreateReplaceRootVolumeTaskResult {
        return this.client.createReplaceRootVolumeTask(
            this.ops["CreateReplaceRootVolumeTask"].apply(partialParams)
        );
    }

    invokeCreateReservedInstancesListing(partialParams: ToOptional<{
      [K in keyof CreateReservedInstancesListingRequest & keyof CreateReservedInstancesListingRequest & keyof CreateReservedInstancesListingRequest & keyof CreateReservedInstancesListingRequest & keyof CreateReservedInstancesListingRequest]: (CreateReservedInstancesListingRequest & CreateReservedInstancesListingRequest & CreateReservedInstancesListingRequest & CreateReservedInstancesListingRequest & CreateReservedInstancesListingRequest)[K]
    }>): CreateReservedInstancesListingResult {
        return this.client.createReservedInstancesListing(
            this.ops["CreateReservedInstancesListing"].apply(partialParams)
        );
    }

    invokeCreateRestoreImageTask(partialParams: ToOptional<{
      [K in keyof CreateRestoreImageTaskRequest & keyof CreateRestoreImageTaskRequest & keyof CreateRestoreImageTaskRequest & keyof CreateRestoreImageTaskRequest & keyof CreateRestoreImageTaskRequest]: (CreateRestoreImageTaskRequest & CreateRestoreImageTaskRequest & CreateRestoreImageTaskRequest & CreateRestoreImageTaskRequest & CreateRestoreImageTaskRequest)[K]
    }>): CreateRestoreImageTaskResult {
        return this.client.createRestoreImageTask(
            this.ops["CreateRestoreImageTask"].apply(partialParams)
        );
    }

    invokeCreateRoute(partialParams: ToOptional<{
      [K in keyof CreateRouteRequest & keyof CreateRouteRequest & keyof CreateRouteRequest & keyof CreateRouteRequest & keyof CreateRouteRequest]: (CreateRouteRequest & CreateRouteRequest & CreateRouteRequest & CreateRouteRequest & CreateRouteRequest)[K]
    }>): CreateRouteResult {
        return this.client.createRoute(
            this.ops["CreateRoute"].apply(partialParams)
        );
    }

    invokeCreateRouteTable(partialParams: ToOptional<{
      [K in keyof CreateRouteTableRequest & keyof CreateRouteTableRequest & keyof CreateRouteTableRequest & keyof CreateRouteTableRequest & keyof CreateRouteTableRequest]: (CreateRouteTableRequest & CreateRouteTableRequest & CreateRouteTableRequest & CreateRouteTableRequest & CreateRouteTableRequest)[K]
    }>): CreateRouteTableResult {
        return this.client.createRouteTable(
            this.ops["CreateRouteTable"].apply(partialParams)
        );
    }

    invokeCreateSecurityGroup(partialParams: ToOptional<{
      [K in keyof CreateSecurityGroupRequest & keyof CreateSecurityGroupRequest & keyof CreateSecurityGroupRequest & keyof CreateSecurityGroupRequest & keyof CreateSecurityGroupRequest]: (CreateSecurityGroupRequest & CreateSecurityGroupRequest & CreateSecurityGroupRequest & CreateSecurityGroupRequest & CreateSecurityGroupRequest)[K]
    }>): CreateSecurityGroupResult {
        return this.client.createSecurityGroup(
            this.ops["CreateSecurityGroup"].apply(partialParams)
        );
    }

    invokeCreateSnapshot(partialParams: ToOptional<{
      [K in keyof CreateSnapshotRequest & keyof CreateSnapshotRequest & keyof CreateSnapshotRequest & keyof CreateSnapshotRequest & keyof CreateSnapshotRequest]: (CreateSnapshotRequest & CreateSnapshotRequest & CreateSnapshotRequest & CreateSnapshotRequest & CreateSnapshotRequest)[K]
    }>): Snapshot {
        return this.client.createSnapshot(
            this.ops["CreateSnapshot"].apply(partialParams)
        );
    }

    invokeCreateSnapshots(partialParams: ToOptional<{
      [K in keyof CreateSnapshotsRequest & keyof CreateSnapshotsRequest & keyof CreateSnapshotsRequest & keyof CreateSnapshotsRequest & keyof CreateSnapshotsRequest]: (CreateSnapshotsRequest & CreateSnapshotsRequest & CreateSnapshotsRequest & CreateSnapshotsRequest & CreateSnapshotsRequest)[K]
    }>): CreateSnapshotsResult {
        return this.client.createSnapshots(
            this.ops["CreateSnapshots"].apply(partialParams)
        );
    }

    invokeCreateSpotDatafeedSubscription(partialParams: ToOptional<{
      [K in keyof CreateSpotDatafeedSubscriptionRequest & keyof CreateSpotDatafeedSubscriptionRequest & keyof CreateSpotDatafeedSubscriptionRequest & keyof CreateSpotDatafeedSubscriptionRequest & keyof CreateSpotDatafeedSubscriptionRequest]: (CreateSpotDatafeedSubscriptionRequest & CreateSpotDatafeedSubscriptionRequest & CreateSpotDatafeedSubscriptionRequest & CreateSpotDatafeedSubscriptionRequest & CreateSpotDatafeedSubscriptionRequest)[K]
    }>): CreateSpotDatafeedSubscriptionResult {
        return this.client.createSpotDatafeedSubscription(
            this.ops["CreateSpotDatafeedSubscription"].apply(partialParams)
        );
    }

    invokeCreateStoreImageTask(partialParams: ToOptional<{
      [K in keyof CreateStoreImageTaskRequest & keyof CreateStoreImageTaskRequest & keyof CreateStoreImageTaskRequest & keyof CreateStoreImageTaskRequest & keyof CreateStoreImageTaskRequest]: (CreateStoreImageTaskRequest & CreateStoreImageTaskRequest & CreateStoreImageTaskRequest & CreateStoreImageTaskRequest & CreateStoreImageTaskRequest)[K]
    }>): CreateStoreImageTaskResult {
        return this.client.createStoreImageTask(
            this.ops["CreateStoreImageTask"].apply(partialParams)
        );
    }

    invokeCreateSubnet(partialParams: ToOptional<{
      [K in keyof CreateSubnetRequest & keyof CreateSubnetRequest & keyof CreateSubnetRequest & keyof CreateSubnetRequest & keyof CreateSubnetRequest]: (CreateSubnetRequest & CreateSubnetRequest & CreateSubnetRequest & CreateSubnetRequest & CreateSubnetRequest)[K]
    }>): CreateSubnetResult {
        return this.client.createSubnet(
            this.ops["CreateSubnet"].apply(partialParams)
        );
    }

    invokeCreateSubnetCidrReservation(partialParams: ToOptional<{
      [K in keyof CreateSubnetCidrReservationRequest & keyof CreateSubnetCidrReservationRequest & keyof CreateSubnetCidrReservationRequest & keyof CreateSubnetCidrReservationRequest & keyof CreateSubnetCidrReservationRequest]: (CreateSubnetCidrReservationRequest & CreateSubnetCidrReservationRequest & CreateSubnetCidrReservationRequest & CreateSubnetCidrReservationRequest & CreateSubnetCidrReservationRequest)[K]
    }>): CreateSubnetCidrReservationResult {
        return this.client.createSubnetCidrReservation(
            this.ops["CreateSubnetCidrReservation"].apply(partialParams)
        );
    }

    invokeCreateTags(partialParams: ToOptional<{
      [K in keyof CreateTagsRequest & keyof CreateTagsRequest & keyof CreateTagsRequest & keyof CreateTagsRequest & keyof CreateTagsRequest]: (CreateTagsRequest & CreateTagsRequest & CreateTagsRequest & CreateTagsRequest & CreateTagsRequest)[K]
    }>): void {
        return this.client.createTags(
            this.ops["CreateTags"].apply(partialParams)
        );
    }

    invokeCreateTrafficMirrorFilterRule(partialParams: ToOptional<{
      [K in keyof CreateTrafficMirrorFilterRuleRequest & keyof CreateTrafficMirrorFilterRuleRequest & keyof CreateTrafficMirrorFilterRuleRequest & keyof CreateTrafficMirrorFilterRuleRequest & keyof CreateTrafficMirrorFilterRuleRequest]: (CreateTrafficMirrorFilterRuleRequest & CreateTrafficMirrorFilterRuleRequest & CreateTrafficMirrorFilterRuleRequest & CreateTrafficMirrorFilterRuleRequest & CreateTrafficMirrorFilterRuleRequest)[K]
    }>): CreateTrafficMirrorFilterRuleResult {
        return this.client.createTrafficMirrorFilterRule(
            this.ops["CreateTrafficMirrorFilterRule"].apply(partialParams)
        );
    }

    invokeCreateTrafficMirrorSession(partialParams: ToOptional<{
      [K in keyof CreateTrafficMirrorSessionRequest & keyof CreateTrafficMirrorSessionRequest & keyof CreateTrafficMirrorSessionRequest & keyof CreateTrafficMirrorSessionRequest & keyof CreateTrafficMirrorSessionRequest]: (CreateTrafficMirrorSessionRequest & CreateTrafficMirrorSessionRequest & CreateTrafficMirrorSessionRequest & CreateTrafficMirrorSessionRequest & CreateTrafficMirrorSessionRequest)[K]
    }>): CreateTrafficMirrorSessionResult {
        return this.client.createTrafficMirrorSession(
            this.ops["CreateTrafficMirrorSession"].apply(partialParams)
        );
    }

    invokeCreateTransitGatewayConnect(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayConnectRequest & keyof CreateTransitGatewayConnectRequest & keyof CreateTransitGatewayConnectRequest & keyof CreateTransitGatewayConnectRequest & keyof CreateTransitGatewayConnectRequest]: (CreateTransitGatewayConnectRequest & CreateTransitGatewayConnectRequest & CreateTransitGatewayConnectRequest & CreateTransitGatewayConnectRequest & CreateTransitGatewayConnectRequest)[K]
    }>): CreateTransitGatewayConnectResult {
        return this.client.createTransitGatewayConnect(
            this.ops["CreateTransitGatewayConnect"].apply(partialParams)
        );
    }

    invokeCreateTransitGatewayConnectPeer(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayConnectPeerRequest & keyof CreateTransitGatewayConnectPeerRequest & keyof CreateTransitGatewayConnectPeerRequest & keyof CreateTransitGatewayConnectPeerRequest & keyof CreateTransitGatewayConnectPeerRequest]: (CreateTransitGatewayConnectPeerRequest & CreateTransitGatewayConnectPeerRequest & CreateTransitGatewayConnectPeerRequest & CreateTransitGatewayConnectPeerRequest & CreateTransitGatewayConnectPeerRequest)[K]
    }>): CreateTransitGatewayConnectPeerResult {
        return this.client.createTransitGatewayConnectPeer(
            this.ops["CreateTransitGatewayConnectPeer"].apply(partialParams)
        );
    }

    invokeCreateTransitGatewayMulticastDomain(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayMulticastDomainRequest & keyof CreateTransitGatewayMulticastDomainRequest & keyof CreateTransitGatewayMulticastDomainRequest & keyof CreateTransitGatewayMulticastDomainRequest & keyof CreateTransitGatewayMulticastDomainRequest]: (CreateTransitGatewayMulticastDomainRequest & CreateTransitGatewayMulticastDomainRequest & CreateTransitGatewayMulticastDomainRequest & CreateTransitGatewayMulticastDomainRequest & CreateTransitGatewayMulticastDomainRequest)[K]
    }>): CreateTransitGatewayMulticastDomainResult {
        return this.client.createTransitGatewayMulticastDomain(
            this.ops["CreateTransitGatewayMulticastDomain"].apply(partialParams)
        );
    }

    invokeCreateTransitGatewayPeeringAttachment(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayPeeringAttachmentRequest & keyof CreateTransitGatewayPeeringAttachmentRequest & keyof CreateTransitGatewayPeeringAttachmentRequest & keyof CreateTransitGatewayPeeringAttachmentRequest & keyof CreateTransitGatewayPeeringAttachmentRequest]: (CreateTransitGatewayPeeringAttachmentRequest & CreateTransitGatewayPeeringAttachmentRequest & CreateTransitGatewayPeeringAttachmentRequest & CreateTransitGatewayPeeringAttachmentRequest & CreateTransitGatewayPeeringAttachmentRequest)[K]
    }>): CreateTransitGatewayPeeringAttachmentResult {
        return this.client.createTransitGatewayPeeringAttachment(
            this.ops["CreateTransitGatewayPeeringAttachment"].apply(partialParams)
        );
    }

    invokeCreateTransitGatewayPrefixListReference(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayPrefixListReferenceRequest & keyof CreateTransitGatewayPrefixListReferenceRequest & keyof CreateTransitGatewayPrefixListReferenceRequest & keyof CreateTransitGatewayPrefixListReferenceRequest & keyof CreateTransitGatewayPrefixListReferenceRequest]: (CreateTransitGatewayPrefixListReferenceRequest & CreateTransitGatewayPrefixListReferenceRequest & CreateTransitGatewayPrefixListReferenceRequest & CreateTransitGatewayPrefixListReferenceRequest & CreateTransitGatewayPrefixListReferenceRequest)[K]
    }>): CreateTransitGatewayPrefixListReferenceResult {
        return this.client.createTransitGatewayPrefixListReference(
            this.ops["CreateTransitGatewayPrefixListReference"].apply(partialParams)
        );
    }

    invokeCreateTransitGatewayRoute(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayRouteRequest & keyof CreateTransitGatewayRouteRequest & keyof CreateTransitGatewayRouteRequest & keyof CreateTransitGatewayRouteRequest & keyof CreateTransitGatewayRouteRequest]: (CreateTransitGatewayRouteRequest & CreateTransitGatewayRouteRequest & CreateTransitGatewayRouteRequest & CreateTransitGatewayRouteRequest & CreateTransitGatewayRouteRequest)[K]
    }>): CreateTransitGatewayRouteResult {
        return this.client.createTransitGatewayRoute(
            this.ops["CreateTransitGatewayRoute"].apply(partialParams)
        );
    }

    invokeCreateTransitGatewayRouteTable(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayRouteTableRequest & keyof CreateTransitGatewayRouteTableRequest & keyof CreateTransitGatewayRouteTableRequest & keyof CreateTransitGatewayRouteTableRequest & keyof CreateTransitGatewayRouteTableRequest]: (CreateTransitGatewayRouteTableRequest & CreateTransitGatewayRouteTableRequest & CreateTransitGatewayRouteTableRequest & CreateTransitGatewayRouteTableRequest & CreateTransitGatewayRouteTableRequest)[K]
    }>): CreateTransitGatewayRouteTableResult {
        return this.client.createTransitGatewayRouteTable(
            this.ops["CreateTransitGatewayRouteTable"].apply(partialParams)
        );
    }

    invokeCreateTransitGatewayVpcAttachment(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayVpcAttachmentRequest & keyof CreateTransitGatewayVpcAttachmentRequest & keyof CreateTransitGatewayVpcAttachmentRequest & keyof CreateTransitGatewayVpcAttachmentRequest & keyof CreateTransitGatewayVpcAttachmentRequest]: (CreateTransitGatewayVpcAttachmentRequest & CreateTransitGatewayVpcAttachmentRequest & CreateTransitGatewayVpcAttachmentRequest & CreateTransitGatewayVpcAttachmentRequest & CreateTransitGatewayVpcAttachmentRequest)[K]
    }>): CreateTransitGatewayVpcAttachmentResult {
        return this.client.createTransitGatewayVpcAttachment(
            this.ops["CreateTransitGatewayVpcAttachment"].apply(partialParams)
        );
    }

    invokeCreateVolume(partialParams: ToOptional<{
      [K in keyof CreateVolumeRequest & keyof CreateVolumeRequest & keyof CreateVolumeRequest & keyof CreateVolumeRequest & keyof CreateVolumeRequest]: (CreateVolumeRequest & CreateVolumeRequest & CreateVolumeRequest & CreateVolumeRequest & CreateVolumeRequest)[K]
    }>): Volume {
        return this.client.createVolume(
            this.ops["CreateVolume"].apply(partialParams)
        );
    }

    invokeCreateVpcEndpoint(partialParams: ToOptional<{
      [K in keyof CreateVpcEndpointRequest & keyof CreateVpcEndpointRequest & keyof CreateVpcEndpointRequest & keyof CreateVpcEndpointRequest & keyof CreateVpcEndpointRequest]: (CreateVpcEndpointRequest & CreateVpcEndpointRequest & CreateVpcEndpointRequest & CreateVpcEndpointRequest & CreateVpcEndpointRequest)[K]
    }>): CreateVpcEndpointResult {
        return this.client.createVpcEndpoint(
            this.ops["CreateVpcEndpoint"].apply(partialParams)
        );
    }

    invokeCreateVpcEndpointConnectionNotification(partialParams: ToOptional<{
      [K in keyof CreateVpcEndpointConnectionNotificationRequest & keyof CreateVpcEndpointConnectionNotificationRequest & keyof CreateVpcEndpointConnectionNotificationRequest & keyof CreateVpcEndpointConnectionNotificationRequest & keyof CreateVpcEndpointConnectionNotificationRequest]: (CreateVpcEndpointConnectionNotificationRequest & CreateVpcEndpointConnectionNotificationRequest & CreateVpcEndpointConnectionNotificationRequest & CreateVpcEndpointConnectionNotificationRequest & CreateVpcEndpointConnectionNotificationRequest)[K]
    }>): CreateVpcEndpointConnectionNotificationResult {
        return this.client.createVpcEndpointConnectionNotification(
            this.ops["CreateVpcEndpointConnectionNotification"].apply(partialParams)
        );
    }

    invokeCreateVpnConnection(partialParams: ToOptional<{
      [K in keyof CreateVpnConnectionRequest & keyof CreateVpnConnectionRequest & keyof CreateVpnConnectionRequest & keyof CreateVpnConnectionRequest & keyof CreateVpnConnectionRequest]: (CreateVpnConnectionRequest & CreateVpnConnectionRequest & CreateVpnConnectionRequest & CreateVpnConnectionRequest & CreateVpnConnectionRequest)[K]
    }>): CreateVpnConnectionResult {
        return this.client.createVpnConnection(
            this.ops["CreateVpnConnection"].apply(partialParams)
        );
    }

    invokeCreateVpnConnectionRoute(partialParams: ToOptional<{
      [K in keyof CreateVpnConnectionRouteRequest & keyof CreateVpnConnectionRouteRequest & keyof CreateVpnConnectionRouteRequest & keyof CreateVpnConnectionRouteRequest & keyof CreateVpnConnectionRouteRequest]: (CreateVpnConnectionRouteRequest & CreateVpnConnectionRouteRequest & CreateVpnConnectionRouteRequest & CreateVpnConnectionRouteRequest & CreateVpnConnectionRouteRequest)[K]
    }>): void {
        return this.client.createVpnConnectionRoute(
            this.ops["CreateVpnConnectionRoute"].apply(partialParams)
        );
    }

    invokeCreateVpnGateway(partialParams: ToOptional<{
      [K in keyof CreateVpnGatewayRequest & keyof CreateVpnGatewayRequest & keyof CreateVpnGatewayRequest & keyof CreateVpnGatewayRequest & keyof CreateVpnGatewayRequest]: (CreateVpnGatewayRequest & CreateVpnGatewayRequest & CreateVpnGatewayRequest & CreateVpnGatewayRequest & CreateVpnGatewayRequest)[K]
    }>): CreateVpnGatewayResult {
        return this.client.createVpnGateway(
            this.ops["CreateVpnGateway"].apply(partialParams)
        );
    }

    invokeDeleteCarrierGateway(partialParams: ToOptional<{
      [K in keyof DeleteCarrierGatewayRequest & keyof DeleteCarrierGatewayRequest & keyof DeleteCarrierGatewayRequest & keyof DeleteCarrierGatewayRequest & keyof DeleteCarrierGatewayRequest]: (DeleteCarrierGatewayRequest & DeleteCarrierGatewayRequest & DeleteCarrierGatewayRequest & DeleteCarrierGatewayRequest & DeleteCarrierGatewayRequest)[K]
    }>): DeleteCarrierGatewayResult {
        return this.client.deleteCarrierGateway(
            this.ops["DeleteCarrierGateway"].apply(partialParams)
        );
    }

    invokeDeleteClientVpnEndpoint(partialParams: ToOptional<{
      [K in keyof DeleteClientVpnEndpointRequest & keyof DeleteClientVpnEndpointRequest & keyof DeleteClientVpnEndpointRequest & keyof DeleteClientVpnEndpointRequest & keyof DeleteClientVpnEndpointRequest]: (DeleteClientVpnEndpointRequest & DeleteClientVpnEndpointRequest & DeleteClientVpnEndpointRequest & DeleteClientVpnEndpointRequest & DeleteClientVpnEndpointRequest)[K]
    }>): DeleteClientVpnEndpointResult {
        return this.client.deleteClientVpnEndpoint(
            this.ops["DeleteClientVpnEndpoint"].apply(partialParams)
        );
    }

    invokeDeleteClientVpnRoute(partialParams: ToOptional<{
      [K in keyof DeleteClientVpnRouteRequest & keyof DeleteClientVpnRouteRequest & keyof DeleteClientVpnRouteRequest & keyof DeleteClientVpnRouteRequest & keyof DeleteClientVpnRouteRequest]: (DeleteClientVpnRouteRequest & DeleteClientVpnRouteRequest & DeleteClientVpnRouteRequest & DeleteClientVpnRouteRequest & DeleteClientVpnRouteRequest)[K]
    }>): DeleteClientVpnRouteResult {
        return this.client.deleteClientVpnRoute(
            this.ops["DeleteClientVpnRoute"].apply(partialParams)
        );
    }

    invokeDeleteCustomerGateway(partialParams: ToOptional<{
      [K in keyof DeleteCustomerGatewayRequest & keyof DeleteCustomerGatewayRequest & keyof DeleteCustomerGatewayRequest & keyof DeleteCustomerGatewayRequest & keyof DeleteCustomerGatewayRequest]: (DeleteCustomerGatewayRequest & DeleteCustomerGatewayRequest & DeleteCustomerGatewayRequest & DeleteCustomerGatewayRequest & DeleteCustomerGatewayRequest)[K]
    }>): void {
        return this.client.deleteCustomerGateway(
            this.ops["DeleteCustomerGateway"].apply(partialParams)
        );
    }

    invokeDeleteDhcpOptions(partialParams: ToOptional<{
      [K in keyof DeleteDhcpOptionsRequest & keyof DeleteDhcpOptionsRequest & keyof DeleteDhcpOptionsRequest & keyof DeleteDhcpOptionsRequest & keyof DeleteDhcpOptionsRequest]: (DeleteDhcpOptionsRequest & DeleteDhcpOptionsRequest & DeleteDhcpOptionsRequest & DeleteDhcpOptionsRequest & DeleteDhcpOptionsRequest)[K]
    }>): void {
        return this.client.deleteDhcpOptions(
            this.ops["DeleteDhcpOptions"].apply(partialParams)
        );
    }

    invokeDeleteEgressOnlyInternetGateway(partialParams: ToOptional<{
      [K in keyof DeleteEgressOnlyInternetGatewayRequest & keyof DeleteEgressOnlyInternetGatewayRequest & keyof DeleteEgressOnlyInternetGatewayRequest & keyof DeleteEgressOnlyInternetGatewayRequest & keyof DeleteEgressOnlyInternetGatewayRequest]: (DeleteEgressOnlyInternetGatewayRequest & DeleteEgressOnlyInternetGatewayRequest & DeleteEgressOnlyInternetGatewayRequest & DeleteEgressOnlyInternetGatewayRequest & DeleteEgressOnlyInternetGatewayRequest)[K]
    }>): DeleteEgressOnlyInternetGatewayResult {
        return this.client.deleteEgressOnlyInternetGateway(
            this.ops["DeleteEgressOnlyInternetGateway"].apply(partialParams)
        );
    }

    invokeDeleteFleets(partialParams: ToOptional<{
      [K in keyof DeleteFleetsRequest & keyof DeleteFleetsRequest & keyof DeleteFleetsRequest & keyof DeleteFleetsRequest & keyof DeleteFleetsRequest]: (DeleteFleetsRequest & DeleteFleetsRequest & DeleteFleetsRequest & DeleteFleetsRequest & DeleteFleetsRequest)[K]
    }>): DeleteFleetsResult {
        return this.client.deleteFleets(
            this.ops["DeleteFleets"].apply(partialParams)
        );
    }

    invokeDeleteFlowLogs(partialParams: ToOptional<{
      [K in keyof DeleteFlowLogsRequest & keyof DeleteFlowLogsRequest & keyof DeleteFlowLogsRequest & keyof DeleteFlowLogsRequest & keyof DeleteFlowLogsRequest]: (DeleteFlowLogsRequest & DeleteFlowLogsRequest & DeleteFlowLogsRequest & DeleteFlowLogsRequest & DeleteFlowLogsRequest)[K]
    }>): DeleteFlowLogsResult {
        return this.client.deleteFlowLogs(
            this.ops["DeleteFlowLogs"].apply(partialParams)
        );
    }

    invokeDeleteFpgaImage(partialParams: ToOptional<{
      [K in keyof DeleteFpgaImageRequest & keyof DeleteFpgaImageRequest & keyof DeleteFpgaImageRequest & keyof DeleteFpgaImageRequest & keyof DeleteFpgaImageRequest]: (DeleteFpgaImageRequest & DeleteFpgaImageRequest & DeleteFpgaImageRequest & DeleteFpgaImageRequest & DeleteFpgaImageRequest)[K]
    }>): DeleteFpgaImageResult {
        return this.client.deleteFpgaImage(
            this.ops["DeleteFpgaImage"].apply(partialParams)
        );
    }

    invokeDeleteInstanceEventWindow(partialParams: ToOptional<{
      [K in keyof DeleteInstanceEventWindowRequest & keyof DeleteInstanceEventWindowRequest & keyof DeleteInstanceEventWindowRequest & keyof DeleteInstanceEventWindowRequest & keyof DeleteInstanceEventWindowRequest]: (DeleteInstanceEventWindowRequest & DeleteInstanceEventWindowRequest & DeleteInstanceEventWindowRequest & DeleteInstanceEventWindowRequest & DeleteInstanceEventWindowRequest)[K]
    }>): DeleteInstanceEventWindowResult {
        return this.client.deleteInstanceEventWindow(
            this.ops["DeleteInstanceEventWindow"].apply(partialParams)
        );
    }

    invokeDeleteInternetGateway(partialParams: ToOptional<{
      [K in keyof DeleteInternetGatewayRequest & keyof DeleteInternetGatewayRequest & keyof DeleteInternetGatewayRequest & keyof DeleteInternetGatewayRequest & keyof DeleteInternetGatewayRequest]: (DeleteInternetGatewayRequest & DeleteInternetGatewayRequest & DeleteInternetGatewayRequest & DeleteInternetGatewayRequest & DeleteInternetGatewayRequest)[K]
    }>): void {
        return this.client.deleteInternetGateway(
            this.ops["DeleteInternetGateway"].apply(partialParams)
        );
    }

    invokeDeleteIpam(partialParams: ToOptional<{
      [K in keyof DeleteIpamRequest & keyof DeleteIpamRequest & keyof DeleteIpamRequest & keyof DeleteIpamRequest & keyof DeleteIpamRequest]: (DeleteIpamRequest & DeleteIpamRequest & DeleteIpamRequest & DeleteIpamRequest & DeleteIpamRequest)[K]
    }>): DeleteIpamResult {
        return this.client.deleteIpam(
            this.ops["DeleteIpam"].apply(partialParams)
        );
    }

    invokeDeleteIpamPool(partialParams: ToOptional<{
      [K in keyof DeleteIpamPoolRequest & keyof DeleteIpamPoolRequest & keyof DeleteIpamPoolRequest & keyof DeleteIpamPoolRequest & keyof DeleteIpamPoolRequest]: (DeleteIpamPoolRequest & DeleteIpamPoolRequest & DeleteIpamPoolRequest & DeleteIpamPoolRequest & DeleteIpamPoolRequest)[K]
    }>): DeleteIpamPoolResult {
        return this.client.deleteIpamPool(
            this.ops["DeleteIpamPool"].apply(partialParams)
        );
    }

    invokeDeleteIpamScope(partialParams: ToOptional<{
      [K in keyof DeleteIpamScopeRequest & keyof DeleteIpamScopeRequest & keyof DeleteIpamScopeRequest & keyof DeleteIpamScopeRequest & keyof DeleteIpamScopeRequest]: (DeleteIpamScopeRequest & DeleteIpamScopeRequest & DeleteIpamScopeRequest & DeleteIpamScopeRequest & DeleteIpamScopeRequest)[K]
    }>): DeleteIpamScopeResult {
        return this.client.deleteIpamScope(
            this.ops["DeleteIpamScope"].apply(partialParams)
        );
    }

    invokeDeleteLaunchTemplateVersions(partialParams: ToOptional<{
      [K in keyof DeleteLaunchTemplateVersionsRequest & keyof DeleteLaunchTemplateVersionsRequest & keyof DeleteLaunchTemplateVersionsRequest & keyof DeleteLaunchTemplateVersionsRequest & keyof DeleteLaunchTemplateVersionsRequest]: (DeleteLaunchTemplateVersionsRequest & DeleteLaunchTemplateVersionsRequest & DeleteLaunchTemplateVersionsRequest & DeleteLaunchTemplateVersionsRequest & DeleteLaunchTemplateVersionsRequest)[K]
    }>): DeleteLaunchTemplateVersionsResult {
        return this.client.deleteLaunchTemplateVersions(
            this.ops["DeleteLaunchTemplateVersions"].apply(partialParams)
        );
    }

    invokeDeleteLocalGatewayRoute(partialParams: ToOptional<{
      [K in keyof DeleteLocalGatewayRouteRequest & keyof DeleteLocalGatewayRouteRequest & keyof DeleteLocalGatewayRouteRequest & keyof DeleteLocalGatewayRouteRequest & keyof DeleteLocalGatewayRouteRequest]: (DeleteLocalGatewayRouteRequest & DeleteLocalGatewayRouteRequest & DeleteLocalGatewayRouteRequest & DeleteLocalGatewayRouteRequest & DeleteLocalGatewayRouteRequest)[K]
    }>): DeleteLocalGatewayRouteResult {
        return this.client.deleteLocalGatewayRoute(
            this.ops["DeleteLocalGatewayRoute"].apply(partialParams)
        );
    }

    invokeDeleteLocalGatewayRouteTableVpcAssociation(partialParams: ToOptional<{
      [K in keyof DeleteLocalGatewayRouteTableVpcAssociationRequest & keyof DeleteLocalGatewayRouteTableVpcAssociationRequest & keyof DeleteLocalGatewayRouteTableVpcAssociationRequest & keyof DeleteLocalGatewayRouteTableVpcAssociationRequest & keyof DeleteLocalGatewayRouteTableVpcAssociationRequest]: (DeleteLocalGatewayRouteTableVpcAssociationRequest & DeleteLocalGatewayRouteTableVpcAssociationRequest & DeleteLocalGatewayRouteTableVpcAssociationRequest & DeleteLocalGatewayRouteTableVpcAssociationRequest & DeleteLocalGatewayRouteTableVpcAssociationRequest)[K]
    }>): DeleteLocalGatewayRouteTableVpcAssociationResult {
        return this.client.deleteLocalGatewayRouteTableVpcAssociation(
            this.ops["DeleteLocalGatewayRouteTableVpcAssociation"].apply(partialParams)
        );
    }

    invokeDeleteManagedPrefixList(partialParams: ToOptional<{
      [K in keyof DeleteManagedPrefixListRequest & keyof DeleteManagedPrefixListRequest & keyof DeleteManagedPrefixListRequest & keyof DeleteManagedPrefixListRequest & keyof DeleteManagedPrefixListRequest]: (DeleteManagedPrefixListRequest & DeleteManagedPrefixListRequest & DeleteManagedPrefixListRequest & DeleteManagedPrefixListRequest & DeleteManagedPrefixListRequest)[K]
    }>): DeleteManagedPrefixListResult {
        return this.client.deleteManagedPrefixList(
            this.ops["DeleteManagedPrefixList"].apply(partialParams)
        );
    }

    invokeDeleteNatGateway(partialParams: ToOptional<{
      [K in keyof DeleteNatGatewayRequest & keyof DeleteNatGatewayRequest & keyof DeleteNatGatewayRequest & keyof DeleteNatGatewayRequest & keyof DeleteNatGatewayRequest]: (DeleteNatGatewayRequest & DeleteNatGatewayRequest & DeleteNatGatewayRequest & DeleteNatGatewayRequest & DeleteNatGatewayRequest)[K]
    }>): DeleteNatGatewayResult {
        return this.client.deleteNatGateway(
            this.ops["DeleteNatGateway"].apply(partialParams)
        );
    }

    invokeDeleteNetworkAcl(partialParams: ToOptional<{
      [K in keyof DeleteNetworkAclRequest & keyof DeleteNetworkAclRequest & keyof DeleteNetworkAclRequest & keyof DeleteNetworkAclRequest & keyof DeleteNetworkAclRequest]: (DeleteNetworkAclRequest & DeleteNetworkAclRequest & DeleteNetworkAclRequest & DeleteNetworkAclRequest & DeleteNetworkAclRequest)[K]
    }>): void {
        return this.client.deleteNetworkAcl(
            this.ops["DeleteNetworkAcl"].apply(partialParams)
        );
    }

    invokeDeleteNetworkAclEntry(partialParams: ToOptional<{
      [K in keyof DeleteNetworkAclEntryRequest & keyof DeleteNetworkAclEntryRequest & keyof DeleteNetworkAclEntryRequest & keyof DeleteNetworkAclEntryRequest & keyof DeleteNetworkAclEntryRequest]: (DeleteNetworkAclEntryRequest & DeleteNetworkAclEntryRequest & DeleteNetworkAclEntryRequest & DeleteNetworkAclEntryRequest & DeleteNetworkAclEntryRequest)[K]
    }>): void {
        return this.client.deleteNetworkAclEntry(
            this.ops["DeleteNetworkAclEntry"].apply(partialParams)
        );
    }

    invokeDeleteNetworkInsightsAccessScope(partialParams: ToOptional<{
      [K in keyof DeleteNetworkInsightsAccessScopeRequest & keyof DeleteNetworkInsightsAccessScopeRequest & keyof DeleteNetworkInsightsAccessScopeRequest & keyof DeleteNetworkInsightsAccessScopeRequest & keyof DeleteNetworkInsightsAccessScopeRequest]: (DeleteNetworkInsightsAccessScopeRequest & DeleteNetworkInsightsAccessScopeRequest & DeleteNetworkInsightsAccessScopeRequest & DeleteNetworkInsightsAccessScopeRequest & DeleteNetworkInsightsAccessScopeRequest)[K]
    }>): DeleteNetworkInsightsAccessScopeResult {
        return this.client.deleteNetworkInsightsAccessScope(
            this.ops["DeleteNetworkInsightsAccessScope"].apply(partialParams)
        );
    }

    invokeDeleteNetworkInsightsAccessScopeAnalysis(partialParams: ToOptional<{
      [K in keyof DeleteNetworkInsightsAccessScopeAnalysisRequest & keyof DeleteNetworkInsightsAccessScopeAnalysisRequest & keyof DeleteNetworkInsightsAccessScopeAnalysisRequest & keyof DeleteNetworkInsightsAccessScopeAnalysisRequest & keyof DeleteNetworkInsightsAccessScopeAnalysisRequest]: (DeleteNetworkInsightsAccessScopeAnalysisRequest & DeleteNetworkInsightsAccessScopeAnalysisRequest & DeleteNetworkInsightsAccessScopeAnalysisRequest & DeleteNetworkInsightsAccessScopeAnalysisRequest & DeleteNetworkInsightsAccessScopeAnalysisRequest)[K]
    }>): DeleteNetworkInsightsAccessScopeAnalysisResult {
        return this.client.deleteNetworkInsightsAccessScopeAnalysis(
            this.ops["DeleteNetworkInsightsAccessScopeAnalysis"].apply(partialParams)
        );
    }

    invokeDeleteNetworkInsightsAnalysis(partialParams: ToOptional<{
      [K in keyof DeleteNetworkInsightsAnalysisRequest & keyof DeleteNetworkInsightsAnalysisRequest & keyof DeleteNetworkInsightsAnalysisRequest & keyof DeleteNetworkInsightsAnalysisRequest & keyof DeleteNetworkInsightsAnalysisRequest]: (DeleteNetworkInsightsAnalysisRequest & DeleteNetworkInsightsAnalysisRequest & DeleteNetworkInsightsAnalysisRequest & DeleteNetworkInsightsAnalysisRequest & DeleteNetworkInsightsAnalysisRequest)[K]
    }>): DeleteNetworkInsightsAnalysisResult {
        return this.client.deleteNetworkInsightsAnalysis(
            this.ops["DeleteNetworkInsightsAnalysis"].apply(partialParams)
        );
    }

    invokeDeleteNetworkInsightsPath(partialParams: ToOptional<{
      [K in keyof DeleteNetworkInsightsPathRequest & keyof DeleteNetworkInsightsPathRequest & keyof DeleteNetworkInsightsPathRequest & keyof DeleteNetworkInsightsPathRequest & keyof DeleteNetworkInsightsPathRequest]: (DeleteNetworkInsightsPathRequest & DeleteNetworkInsightsPathRequest & DeleteNetworkInsightsPathRequest & DeleteNetworkInsightsPathRequest & DeleteNetworkInsightsPathRequest)[K]
    }>): DeleteNetworkInsightsPathResult {
        return this.client.deleteNetworkInsightsPath(
            this.ops["DeleteNetworkInsightsPath"].apply(partialParams)
        );
    }

    invokeDeleteNetworkInterface(partialParams: ToOptional<{
      [K in keyof DeleteNetworkInterfaceRequest & keyof DeleteNetworkInterfaceRequest & keyof DeleteNetworkInterfaceRequest & keyof DeleteNetworkInterfaceRequest & keyof DeleteNetworkInterfaceRequest]: (DeleteNetworkInterfaceRequest & DeleteNetworkInterfaceRequest & DeleteNetworkInterfaceRequest & DeleteNetworkInterfaceRequest & DeleteNetworkInterfaceRequest)[K]
    }>): void {
        return this.client.deleteNetworkInterface(
            this.ops["DeleteNetworkInterface"].apply(partialParams)
        );
    }

    invokeDeleteNetworkInterfacePermission(partialParams: ToOptional<{
      [K in keyof DeleteNetworkInterfacePermissionRequest & keyof DeleteNetworkInterfacePermissionRequest & keyof DeleteNetworkInterfacePermissionRequest & keyof DeleteNetworkInterfacePermissionRequest & keyof DeleteNetworkInterfacePermissionRequest]: (DeleteNetworkInterfacePermissionRequest & DeleteNetworkInterfacePermissionRequest & DeleteNetworkInterfacePermissionRequest & DeleteNetworkInterfacePermissionRequest & DeleteNetworkInterfacePermissionRequest)[K]
    }>): DeleteNetworkInterfacePermissionResult {
        return this.client.deleteNetworkInterfacePermission(
            this.ops["DeleteNetworkInterfacePermission"].apply(partialParams)
        );
    }

    invokeDeletePlacementGroup(partialParams: ToOptional<{
      [K in keyof DeletePlacementGroupRequest & keyof DeletePlacementGroupRequest & keyof DeletePlacementGroupRequest & keyof DeletePlacementGroupRequest & keyof DeletePlacementGroupRequest]: (DeletePlacementGroupRequest & DeletePlacementGroupRequest & DeletePlacementGroupRequest & DeletePlacementGroupRequest & DeletePlacementGroupRequest)[K]
    }>): void {
        return this.client.deletePlacementGroup(
            this.ops["DeletePlacementGroup"].apply(partialParams)
        );
    }

    invokeDeletePublicIpv4Pool(partialParams: ToOptional<{
      [K in keyof DeletePublicIpv4PoolRequest & keyof DeletePublicIpv4PoolRequest & keyof DeletePublicIpv4PoolRequest & keyof DeletePublicIpv4PoolRequest & keyof DeletePublicIpv4PoolRequest]: (DeletePublicIpv4PoolRequest & DeletePublicIpv4PoolRequest & DeletePublicIpv4PoolRequest & DeletePublicIpv4PoolRequest & DeletePublicIpv4PoolRequest)[K]
    }>): DeletePublicIpv4PoolResult {
        return this.client.deletePublicIpv4Pool(
            this.ops["DeletePublicIpv4Pool"].apply(partialParams)
        );
    }

    invokeDeleteQueuedReservedInstances(partialParams: ToOptional<{
      [K in keyof DeleteQueuedReservedInstancesRequest & keyof DeleteQueuedReservedInstancesRequest & keyof DeleteQueuedReservedInstancesRequest & keyof DeleteQueuedReservedInstancesRequest & keyof DeleteQueuedReservedInstancesRequest]: (DeleteQueuedReservedInstancesRequest & DeleteQueuedReservedInstancesRequest & DeleteQueuedReservedInstancesRequest & DeleteQueuedReservedInstancesRequest & DeleteQueuedReservedInstancesRequest)[K]
    }>): DeleteQueuedReservedInstancesResult {
        return this.client.deleteQueuedReservedInstances(
            this.ops["DeleteQueuedReservedInstances"].apply(partialParams)
        );
    }

    invokeDeleteRoute(partialParams: ToOptional<{
      [K in keyof DeleteRouteRequest & keyof DeleteRouteRequest & keyof DeleteRouteRequest & keyof DeleteRouteRequest & keyof DeleteRouteRequest]: (DeleteRouteRequest & DeleteRouteRequest & DeleteRouteRequest & DeleteRouteRequest & DeleteRouteRequest)[K]
    }>): void {
        return this.client.deleteRoute(
            this.ops["DeleteRoute"].apply(partialParams)
        );
    }

    invokeDeleteRouteTable(partialParams: ToOptional<{
      [K in keyof DeleteRouteTableRequest & keyof DeleteRouteTableRequest & keyof DeleteRouteTableRequest & keyof DeleteRouteTableRequest & keyof DeleteRouteTableRequest]: (DeleteRouteTableRequest & DeleteRouteTableRequest & DeleteRouteTableRequest & DeleteRouteTableRequest & DeleteRouteTableRequest)[K]
    }>): void {
        return this.client.deleteRouteTable(
            this.ops["DeleteRouteTable"].apply(partialParams)
        );
    }

    invokeDeleteSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteSnapshotRequest & keyof DeleteSnapshotRequest & keyof DeleteSnapshotRequest & keyof DeleteSnapshotRequest & keyof DeleteSnapshotRequest]: (DeleteSnapshotRequest & DeleteSnapshotRequest & DeleteSnapshotRequest & DeleteSnapshotRequest & DeleteSnapshotRequest)[K]
    }>): void {
        return this.client.deleteSnapshot(
            this.ops["DeleteSnapshot"].apply(partialParams)
        );
    }

    invokeDeleteSubnet(partialParams: ToOptional<{
      [K in keyof DeleteSubnetRequest & keyof DeleteSubnetRequest & keyof DeleteSubnetRequest & keyof DeleteSubnetRequest & keyof DeleteSubnetRequest]: (DeleteSubnetRequest & DeleteSubnetRequest & DeleteSubnetRequest & DeleteSubnetRequest & DeleteSubnetRequest)[K]
    }>): void {
        return this.client.deleteSubnet(
            this.ops["DeleteSubnet"].apply(partialParams)
        );
    }

    invokeDeleteSubnetCidrReservation(partialParams: ToOptional<{
      [K in keyof DeleteSubnetCidrReservationRequest & keyof DeleteSubnetCidrReservationRequest & keyof DeleteSubnetCidrReservationRequest & keyof DeleteSubnetCidrReservationRequest & keyof DeleteSubnetCidrReservationRequest]: (DeleteSubnetCidrReservationRequest & DeleteSubnetCidrReservationRequest & DeleteSubnetCidrReservationRequest & DeleteSubnetCidrReservationRequest & DeleteSubnetCidrReservationRequest)[K]
    }>): DeleteSubnetCidrReservationResult {
        return this.client.deleteSubnetCidrReservation(
            this.ops["DeleteSubnetCidrReservation"].apply(partialParams)
        );
    }

    invokeDeleteTags(partialParams: ToOptional<{
      [K in keyof DeleteTagsRequest & keyof DeleteTagsRequest & keyof DeleteTagsRequest & keyof DeleteTagsRequest & keyof DeleteTagsRequest]: (DeleteTagsRequest & DeleteTagsRequest & DeleteTagsRequest & DeleteTagsRequest & DeleteTagsRequest)[K]
    }>): void {
        return this.client.deleteTags(
            this.ops["DeleteTags"].apply(partialParams)
        );
    }

    invokeDeleteTrafficMirrorFilter(partialParams: ToOptional<{
      [K in keyof DeleteTrafficMirrorFilterRequest & keyof DeleteTrafficMirrorFilterRequest & keyof DeleteTrafficMirrorFilterRequest & keyof DeleteTrafficMirrorFilterRequest & keyof DeleteTrafficMirrorFilterRequest]: (DeleteTrafficMirrorFilterRequest & DeleteTrafficMirrorFilterRequest & DeleteTrafficMirrorFilterRequest & DeleteTrafficMirrorFilterRequest & DeleteTrafficMirrorFilterRequest)[K]
    }>): DeleteTrafficMirrorFilterResult {
        return this.client.deleteTrafficMirrorFilter(
            this.ops["DeleteTrafficMirrorFilter"].apply(partialParams)
        );
    }

    invokeDeleteTrafficMirrorFilterRule(partialParams: ToOptional<{
      [K in keyof DeleteTrafficMirrorFilterRuleRequest & keyof DeleteTrafficMirrorFilterRuleRequest & keyof DeleteTrafficMirrorFilterRuleRequest & keyof DeleteTrafficMirrorFilterRuleRequest & keyof DeleteTrafficMirrorFilterRuleRequest]: (DeleteTrafficMirrorFilterRuleRequest & DeleteTrafficMirrorFilterRuleRequest & DeleteTrafficMirrorFilterRuleRequest & DeleteTrafficMirrorFilterRuleRequest & DeleteTrafficMirrorFilterRuleRequest)[K]
    }>): DeleteTrafficMirrorFilterRuleResult {
        return this.client.deleteTrafficMirrorFilterRule(
            this.ops["DeleteTrafficMirrorFilterRule"].apply(partialParams)
        );
    }

    invokeDeleteTrafficMirrorSession(partialParams: ToOptional<{
      [K in keyof DeleteTrafficMirrorSessionRequest & keyof DeleteTrafficMirrorSessionRequest & keyof DeleteTrafficMirrorSessionRequest & keyof DeleteTrafficMirrorSessionRequest & keyof DeleteTrafficMirrorSessionRequest]: (DeleteTrafficMirrorSessionRequest & DeleteTrafficMirrorSessionRequest & DeleteTrafficMirrorSessionRequest & DeleteTrafficMirrorSessionRequest & DeleteTrafficMirrorSessionRequest)[K]
    }>): DeleteTrafficMirrorSessionResult {
        return this.client.deleteTrafficMirrorSession(
            this.ops["DeleteTrafficMirrorSession"].apply(partialParams)
        );
    }

    invokeDeleteTrafficMirrorTarget(partialParams: ToOptional<{
      [K in keyof DeleteTrafficMirrorTargetRequest & keyof DeleteTrafficMirrorTargetRequest & keyof DeleteTrafficMirrorTargetRequest & keyof DeleteTrafficMirrorTargetRequest & keyof DeleteTrafficMirrorTargetRequest]: (DeleteTrafficMirrorTargetRequest & DeleteTrafficMirrorTargetRequest & DeleteTrafficMirrorTargetRequest & DeleteTrafficMirrorTargetRequest & DeleteTrafficMirrorTargetRequest)[K]
    }>): DeleteTrafficMirrorTargetResult {
        return this.client.deleteTrafficMirrorTarget(
            this.ops["DeleteTrafficMirrorTarget"].apply(partialParams)
        );
    }

    invokeDeleteTransitGateway(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayRequest & keyof DeleteTransitGatewayRequest & keyof DeleteTransitGatewayRequest & keyof DeleteTransitGatewayRequest & keyof DeleteTransitGatewayRequest]: (DeleteTransitGatewayRequest & DeleteTransitGatewayRequest & DeleteTransitGatewayRequest & DeleteTransitGatewayRequest & DeleteTransitGatewayRequest)[K]
    }>): DeleteTransitGatewayResult {
        return this.client.deleteTransitGateway(
            this.ops["DeleteTransitGateway"].apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayConnect(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayConnectRequest & keyof DeleteTransitGatewayConnectRequest & keyof DeleteTransitGatewayConnectRequest & keyof DeleteTransitGatewayConnectRequest & keyof DeleteTransitGatewayConnectRequest]: (DeleteTransitGatewayConnectRequest & DeleteTransitGatewayConnectRequest & DeleteTransitGatewayConnectRequest & DeleteTransitGatewayConnectRequest & DeleteTransitGatewayConnectRequest)[K]
    }>): DeleteTransitGatewayConnectResult {
        return this.client.deleteTransitGatewayConnect(
            this.ops["DeleteTransitGatewayConnect"].apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayConnectPeer(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayConnectPeerRequest & keyof DeleteTransitGatewayConnectPeerRequest & keyof DeleteTransitGatewayConnectPeerRequest & keyof DeleteTransitGatewayConnectPeerRequest & keyof DeleteTransitGatewayConnectPeerRequest]: (DeleteTransitGatewayConnectPeerRequest & DeleteTransitGatewayConnectPeerRequest & DeleteTransitGatewayConnectPeerRequest & DeleteTransitGatewayConnectPeerRequest & DeleteTransitGatewayConnectPeerRequest)[K]
    }>): DeleteTransitGatewayConnectPeerResult {
        return this.client.deleteTransitGatewayConnectPeer(
            this.ops["DeleteTransitGatewayConnectPeer"].apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayMulticastDomain(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayMulticastDomainRequest & keyof DeleteTransitGatewayMulticastDomainRequest & keyof DeleteTransitGatewayMulticastDomainRequest & keyof DeleteTransitGatewayMulticastDomainRequest & keyof DeleteTransitGatewayMulticastDomainRequest]: (DeleteTransitGatewayMulticastDomainRequest & DeleteTransitGatewayMulticastDomainRequest & DeleteTransitGatewayMulticastDomainRequest & DeleteTransitGatewayMulticastDomainRequest & DeleteTransitGatewayMulticastDomainRequest)[K]
    }>): DeleteTransitGatewayMulticastDomainResult {
        return this.client.deleteTransitGatewayMulticastDomain(
            this.ops["DeleteTransitGatewayMulticastDomain"].apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayPeeringAttachment(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayPeeringAttachmentRequest & keyof DeleteTransitGatewayPeeringAttachmentRequest & keyof DeleteTransitGatewayPeeringAttachmentRequest & keyof DeleteTransitGatewayPeeringAttachmentRequest & keyof DeleteTransitGatewayPeeringAttachmentRequest]: (DeleteTransitGatewayPeeringAttachmentRequest & DeleteTransitGatewayPeeringAttachmentRequest & DeleteTransitGatewayPeeringAttachmentRequest & DeleteTransitGatewayPeeringAttachmentRequest & DeleteTransitGatewayPeeringAttachmentRequest)[K]
    }>): DeleteTransitGatewayPeeringAttachmentResult {
        return this.client.deleteTransitGatewayPeeringAttachment(
            this.ops["DeleteTransitGatewayPeeringAttachment"].apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayPrefixListReference(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayPrefixListReferenceRequest & keyof DeleteTransitGatewayPrefixListReferenceRequest & keyof DeleteTransitGatewayPrefixListReferenceRequest & keyof DeleteTransitGatewayPrefixListReferenceRequest & keyof DeleteTransitGatewayPrefixListReferenceRequest]: (DeleteTransitGatewayPrefixListReferenceRequest & DeleteTransitGatewayPrefixListReferenceRequest & DeleteTransitGatewayPrefixListReferenceRequest & DeleteTransitGatewayPrefixListReferenceRequest & DeleteTransitGatewayPrefixListReferenceRequest)[K]
    }>): DeleteTransitGatewayPrefixListReferenceResult {
        return this.client.deleteTransitGatewayPrefixListReference(
            this.ops["DeleteTransitGatewayPrefixListReference"].apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayRoute(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayRouteRequest & keyof DeleteTransitGatewayRouteRequest & keyof DeleteTransitGatewayRouteRequest & keyof DeleteTransitGatewayRouteRequest & keyof DeleteTransitGatewayRouteRequest]: (DeleteTransitGatewayRouteRequest & DeleteTransitGatewayRouteRequest & DeleteTransitGatewayRouteRequest & DeleteTransitGatewayRouteRequest & DeleteTransitGatewayRouteRequest)[K]
    }>): DeleteTransitGatewayRouteResult {
        return this.client.deleteTransitGatewayRoute(
            this.ops["DeleteTransitGatewayRoute"].apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayRouteTable(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayRouteTableRequest & keyof DeleteTransitGatewayRouteTableRequest & keyof DeleteTransitGatewayRouteTableRequest & keyof DeleteTransitGatewayRouteTableRequest & keyof DeleteTransitGatewayRouteTableRequest]: (DeleteTransitGatewayRouteTableRequest & DeleteTransitGatewayRouteTableRequest & DeleteTransitGatewayRouteTableRequest & DeleteTransitGatewayRouteTableRequest & DeleteTransitGatewayRouteTableRequest)[K]
    }>): DeleteTransitGatewayRouteTableResult {
        return this.client.deleteTransitGatewayRouteTable(
            this.ops["DeleteTransitGatewayRouteTable"].apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayVpcAttachment(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayVpcAttachmentRequest & keyof DeleteTransitGatewayVpcAttachmentRequest & keyof DeleteTransitGatewayVpcAttachmentRequest & keyof DeleteTransitGatewayVpcAttachmentRequest & keyof DeleteTransitGatewayVpcAttachmentRequest]: (DeleteTransitGatewayVpcAttachmentRequest & DeleteTransitGatewayVpcAttachmentRequest & DeleteTransitGatewayVpcAttachmentRequest & DeleteTransitGatewayVpcAttachmentRequest & DeleteTransitGatewayVpcAttachmentRequest)[K]
    }>): DeleteTransitGatewayVpcAttachmentResult {
        return this.client.deleteTransitGatewayVpcAttachment(
            this.ops["DeleteTransitGatewayVpcAttachment"].apply(partialParams)
        );
    }

    invokeDeleteVolume(partialParams: ToOptional<{
      [K in keyof DeleteVolumeRequest & keyof DeleteVolumeRequest & keyof DeleteVolumeRequest & keyof DeleteVolumeRequest & keyof DeleteVolumeRequest]: (DeleteVolumeRequest & DeleteVolumeRequest & DeleteVolumeRequest & DeleteVolumeRequest & DeleteVolumeRequest)[K]
    }>): void {
        return this.client.deleteVolume(
            this.ops["DeleteVolume"].apply(partialParams)
        );
    }

    invokeDeleteVpc(partialParams: ToOptional<{
      [K in keyof DeleteVpcRequest & keyof DeleteVpcRequest & keyof DeleteVpcRequest & keyof DeleteVpcRequest & keyof DeleteVpcRequest]: (DeleteVpcRequest & DeleteVpcRequest & DeleteVpcRequest & DeleteVpcRequest & DeleteVpcRequest)[K]
    }>): void {
        return this.client.deleteVpc(
            this.ops["DeleteVpc"].apply(partialParams)
        );
    }

    invokeDeleteVpcEndpointConnectionNotifications(partialParams: ToOptional<{
      [K in keyof DeleteVpcEndpointConnectionNotificationsRequest & keyof DeleteVpcEndpointConnectionNotificationsRequest & keyof DeleteVpcEndpointConnectionNotificationsRequest & keyof DeleteVpcEndpointConnectionNotificationsRequest & keyof DeleteVpcEndpointConnectionNotificationsRequest]: (DeleteVpcEndpointConnectionNotificationsRequest & DeleteVpcEndpointConnectionNotificationsRequest & DeleteVpcEndpointConnectionNotificationsRequest & DeleteVpcEndpointConnectionNotificationsRequest & DeleteVpcEndpointConnectionNotificationsRequest)[K]
    }>): DeleteVpcEndpointConnectionNotificationsResult {
        return this.client.deleteVpcEndpointConnectionNotifications(
            this.ops["DeleteVpcEndpointConnectionNotifications"].apply(partialParams)
        );
    }

    invokeDeleteVpcEndpointServiceConfigurations(partialParams: ToOptional<{
      [K in keyof DeleteVpcEndpointServiceConfigurationsRequest & keyof DeleteVpcEndpointServiceConfigurationsRequest & keyof DeleteVpcEndpointServiceConfigurationsRequest & keyof DeleteVpcEndpointServiceConfigurationsRequest & keyof DeleteVpcEndpointServiceConfigurationsRequest]: (DeleteVpcEndpointServiceConfigurationsRequest & DeleteVpcEndpointServiceConfigurationsRequest & DeleteVpcEndpointServiceConfigurationsRequest & DeleteVpcEndpointServiceConfigurationsRequest & DeleteVpcEndpointServiceConfigurationsRequest)[K]
    }>): DeleteVpcEndpointServiceConfigurationsResult {
        return this.client.deleteVpcEndpointServiceConfigurations(
            this.ops["DeleteVpcEndpointServiceConfigurations"].apply(partialParams)
        );
    }

    invokeDeleteVpcEndpoints(partialParams: ToOptional<{
      [K in keyof DeleteVpcEndpointsRequest & keyof DeleteVpcEndpointsRequest & keyof DeleteVpcEndpointsRequest & keyof DeleteVpcEndpointsRequest & keyof DeleteVpcEndpointsRequest]: (DeleteVpcEndpointsRequest & DeleteVpcEndpointsRequest & DeleteVpcEndpointsRequest & DeleteVpcEndpointsRequest & DeleteVpcEndpointsRequest)[K]
    }>): DeleteVpcEndpointsResult {
        return this.client.deleteVpcEndpoints(
            this.ops["DeleteVpcEndpoints"].apply(partialParams)
        );
    }

    invokeDeleteVpcPeeringConnection(partialParams: ToOptional<{
      [K in keyof DeleteVpcPeeringConnectionRequest & keyof DeleteVpcPeeringConnectionRequest & keyof DeleteVpcPeeringConnectionRequest & keyof DeleteVpcPeeringConnectionRequest & keyof DeleteVpcPeeringConnectionRequest]: (DeleteVpcPeeringConnectionRequest & DeleteVpcPeeringConnectionRequest & DeleteVpcPeeringConnectionRequest & DeleteVpcPeeringConnectionRequest & DeleteVpcPeeringConnectionRequest)[K]
    }>): DeleteVpcPeeringConnectionResult {
        return this.client.deleteVpcPeeringConnection(
            this.ops["DeleteVpcPeeringConnection"].apply(partialParams)
        );
    }

    invokeDeleteVpnConnection(partialParams: ToOptional<{
      [K in keyof DeleteVpnConnectionRequest & keyof DeleteVpnConnectionRequest & keyof DeleteVpnConnectionRequest & keyof DeleteVpnConnectionRequest & keyof DeleteVpnConnectionRequest]: (DeleteVpnConnectionRequest & DeleteVpnConnectionRequest & DeleteVpnConnectionRequest & DeleteVpnConnectionRequest & DeleteVpnConnectionRequest)[K]
    }>): void {
        return this.client.deleteVpnConnection(
            this.ops["DeleteVpnConnection"].apply(partialParams)
        );
    }

    invokeDeleteVpnConnectionRoute(partialParams: ToOptional<{
      [K in keyof DeleteVpnConnectionRouteRequest & keyof DeleteVpnConnectionRouteRequest & keyof DeleteVpnConnectionRouteRequest & keyof DeleteVpnConnectionRouteRequest & keyof DeleteVpnConnectionRouteRequest]: (DeleteVpnConnectionRouteRequest & DeleteVpnConnectionRouteRequest & DeleteVpnConnectionRouteRequest & DeleteVpnConnectionRouteRequest & DeleteVpnConnectionRouteRequest)[K]
    }>): void {
        return this.client.deleteVpnConnectionRoute(
            this.ops["DeleteVpnConnectionRoute"].apply(partialParams)
        );
    }

    invokeDeleteVpnGateway(partialParams: ToOptional<{
      [K in keyof DeleteVpnGatewayRequest & keyof DeleteVpnGatewayRequest & keyof DeleteVpnGatewayRequest & keyof DeleteVpnGatewayRequest & keyof DeleteVpnGatewayRequest]: (DeleteVpnGatewayRequest & DeleteVpnGatewayRequest & DeleteVpnGatewayRequest & DeleteVpnGatewayRequest & DeleteVpnGatewayRequest)[K]
    }>): void {
        return this.client.deleteVpnGateway(
            this.ops["DeleteVpnGateway"].apply(partialParams)
        );
    }

    invokeDeprovisionByoipCidr(partialParams: ToOptional<{
      [K in keyof DeprovisionByoipCidrRequest & keyof DeprovisionByoipCidrRequest & keyof DeprovisionByoipCidrRequest & keyof DeprovisionByoipCidrRequest & keyof DeprovisionByoipCidrRequest]: (DeprovisionByoipCidrRequest & DeprovisionByoipCidrRequest & DeprovisionByoipCidrRequest & DeprovisionByoipCidrRequest & DeprovisionByoipCidrRequest)[K]
    }>): DeprovisionByoipCidrResult {
        return this.client.deprovisionByoipCidr(
            this.ops["DeprovisionByoipCidr"].apply(partialParams)
        );
    }

    invokeDeprovisionIpamPoolCidr(partialParams: ToOptional<{
      [K in keyof DeprovisionIpamPoolCidrRequest & keyof DeprovisionIpamPoolCidrRequest & keyof DeprovisionIpamPoolCidrRequest & keyof DeprovisionIpamPoolCidrRequest & keyof DeprovisionIpamPoolCidrRequest]: (DeprovisionIpamPoolCidrRequest & DeprovisionIpamPoolCidrRequest & DeprovisionIpamPoolCidrRequest & DeprovisionIpamPoolCidrRequest & DeprovisionIpamPoolCidrRequest)[K]
    }>): DeprovisionIpamPoolCidrResult {
        return this.client.deprovisionIpamPoolCidr(
            this.ops["DeprovisionIpamPoolCidr"].apply(partialParams)
        );
    }

    invokeDeprovisionPublicIpv4PoolCidr(partialParams: ToOptional<{
      [K in keyof DeprovisionPublicIpv4PoolCidrRequest & keyof DeprovisionPublicIpv4PoolCidrRequest & keyof DeprovisionPublicIpv4PoolCidrRequest & keyof DeprovisionPublicIpv4PoolCidrRequest & keyof DeprovisionPublicIpv4PoolCidrRequest]: (DeprovisionPublicIpv4PoolCidrRequest & DeprovisionPublicIpv4PoolCidrRequest & DeprovisionPublicIpv4PoolCidrRequest & DeprovisionPublicIpv4PoolCidrRequest & DeprovisionPublicIpv4PoolCidrRequest)[K]
    }>): DeprovisionPublicIpv4PoolCidrResult {
        return this.client.deprovisionPublicIpv4PoolCidr(
            this.ops["DeprovisionPublicIpv4PoolCidr"].apply(partialParams)
        );
    }

    invokeDeregisterImage(partialParams: ToOptional<{
      [K in keyof DeregisterImageRequest & keyof DeregisterImageRequest & keyof DeregisterImageRequest & keyof DeregisterImageRequest & keyof DeregisterImageRequest]: (DeregisterImageRequest & DeregisterImageRequest & DeregisterImageRequest & DeregisterImageRequest & DeregisterImageRequest)[K]
    }>): void {
        return this.client.deregisterImage(
            this.ops["DeregisterImage"].apply(partialParams)
        );
    }

    invokeDescribeByoipCidrs(partialParams: ToOptional<{
      [K in keyof DescribeByoipCidrsRequest & keyof DescribeByoipCidrsRequest & keyof DescribeByoipCidrsRequest & keyof DescribeByoipCidrsRequest & keyof DescribeByoipCidrsRequest]: (DescribeByoipCidrsRequest & DescribeByoipCidrsRequest & DescribeByoipCidrsRequest & DescribeByoipCidrsRequest & DescribeByoipCidrsRequest)[K]
    }>): DescribeByoipCidrsResult {
        return this.client.describeByoipCidrs(
            this.ops["DescribeByoipCidrs"].apply(partialParams)
        );
    }

    invokeDescribeClientVpnAuthorizationRules(partialParams: ToOptional<{
      [K in keyof DescribeClientVpnAuthorizationRulesRequest & keyof DescribeClientVpnAuthorizationRulesRequest & keyof DescribeClientVpnAuthorizationRulesRequest & keyof DescribeClientVpnAuthorizationRulesRequest & keyof DescribeClientVpnAuthorizationRulesRequest]: (DescribeClientVpnAuthorizationRulesRequest & DescribeClientVpnAuthorizationRulesRequest & DescribeClientVpnAuthorizationRulesRequest & DescribeClientVpnAuthorizationRulesRequest & DescribeClientVpnAuthorizationRulesRequest)[K]
    }>): DescribeClientVpnAuthorizationRulesResult {
        return this.client.describeClientVpnAuthorizationRules(
            this.ops["DescribeClientVpnAuthorizationRules"].apply(partialParams)
        );
    }

    invokeDescribeClientVpnConnections(partialParams: ToOptional<{
      [K in keyof DescribeClientVpnConnectionsRequest & keyof DescribeClientVpnConnectionsRequest & keyof DescribeClientVpnConnectionsRequest & keyof DescribeClientVpnConnectionsRequest & keyof DescribeClientVpnConnectionsRequest]: (DescribeClientVpnConnectionsRequest & DescribeClientVpnConnectionsRequest & DescribeClientVpnConnectionsRequest & DescribeClientVpnConnectionsRequest & DescribeClientVpnConnectionsRequest)[K]
    }>): DescribeClientVpnConnectionsResult {
        return this.client.describeClientVpnConnections(
            this.ops["DescribeClientVpnConnections"].apply(partialParams)
        );
    }

    invokeDescribeClientVpnRoutes(partialParams: ToOptional<{
      [K in keyof DescribeClientVpnRoutesRequest & keyof DescribeClientVpnRoutesRequest & keyof DescribeClientVpnRoutesRequest & keyof DescribeClientVpnRoutesRequest & keyof DescribeClientVpnRoutesRequest]: (DescribeClientVpnRoutesRequest & DescribeClientVpnRoutesRequest & DescribeClientVpnRoutesRequest & DescribeClientVpnRoutesRequest & DescribeClientVpnRoutesRequest)[K]
    }>): DescribeClientVpnRoutesResult {
        return this.client.describeClientVpnRoutes(
            this.ops["DescribeClientVpnRoutes"].apply(partialParams)
        );
    }

    invokeDescribeClientVpnTargetNetworks(partialParams: ToOptional<{
      [K in keyof DescribeClientVpnTargetNetworksRequest & keyof DescribeClientVpnTargetNetworksRequest & keyof DescribeClientVpnTargetNetworksRequest & keyof DescribeClientVpnTargetNetworksRequest & keyof DescribeClientVpnTargetNetworksRequest]: (DescribeClientVpnTargetNetworksRequest & DescribeClientVpnTargetNetworksRequest & DescribeClientVpnTargetNetworksRequest & DescribeClientVpnTargetNetworksRequest & DescribeClientVpnTargetNetworksRequest)[K]
    }>): DescribeClientVpnTargetNetworksResult {
        return this.client.describeClientVpnTargetNetworks(
            this.ops["DescribeClientVpnTargetNetworks"].apply(partialParams)
        );
    }

    invokeDescribeFleetHistory(partialParams: ToOptional<{
      [K in keyof DescribeFleetHistoryRequest & keyof DescribeFleetHistoryRequest & keyof DescribeFleetHistoryRequest & keyof DescribeFleetHistoryRequest & keyof DescribeFleetHistoryRequest]: (DescribeFleetHistoryRequest & DescribeFleetHistoryRequest & DescribeFleetHistoryRequest & DescribeFleetHistoryRequest & DescribeFleetHistoryRequest)[K]
    }>): DescribeFleetHistoryResult {
        return this.client.describeFleetHistory(
            this.ops["DescribeFleetHistory"].apply(partialParams)
        );
    }

    invokeDescribeFleetInstances(partialParams: ToOptional<{
      [K in keyof DescribeFleetInstancesRequest & keyof DescribeFleetInstancesRequest & keyof DescribeFleetInstancesRequest & keyof DescribeFleetInstancesRequest & keyof DescribeFleetInstancesRequest]: (DescribeFleetInstancesRequest & DescribeFleetInstancesRequest & DescribeFleetInstancesRequest & DescribeFleetInstancesRequest & DescribeFleetInstancesRequest)[K]
    }>): DescribeFleetInstancesResult {
        return this.client.describeFleetInstances(
            this.ops["DescribeFleetInstances"].apply(partialParams)
        );
    }

    invokeDescribeFpgaImageAttribute(partialParams: ToOptional<{
      [K in keyof DescribeFpgaImageAttributeRequest & keyof DescribeFpgaImageAttributeRequest & keyof DescribeFpgaImageAttributeRequest & keyof DescribeFpgaImageAttributeRequest & keyof DescribeFpgaImageAttributeRequest]: (DescribeFpgaImageAttributeRequest & DescribeFpgaImageAttributeRequest & DescribeFpgaImageAttributeRequest & DescribeFpgaImageAttributeRequest & DescribeFpgaImageAttributeRequest)[K]
    }>): DescribeFpgaImageAttributeResult {
        return this.client.describeFpgaImageAttribute(
            this.ops["DescribeFpgaImageAttribute"].apply(partialParams)
        );
    }

    invokeDescribeIdentityIdFormat(partialParams: ToOptional<{
      [K in keyof DescribeIdentityIdFormatRequest & keyof DescribeIdentityIdFormatRequest & keyof DescribeIdentityIdFormatRequest & keyof DescribeIdentityIdFormatRequest & keyof DescribeIdentityIdFormatRequest]: (DescribeIdentityIdFormatRequest & DescribeIdentityIdFormatRequest & DescribeIdentityIdFormatRequest & DescribeIdentityIdFormatRequest & DescribeIdentityIdFormatRequest)[K]
    }>): DescribeIdentityIdFormatResult {
        return this.client.describeIdentityIdFormat(
            this.ops["DescribeIdentityIdFormat"].apply(partialParams)
        );
    }

    invokeDescribeImageAttribute(partialParams: ToOptional<{
      [K in keyof DescribeImageAttributeRequest & keyof DescribeImageAttributeRequest & keyof DescribeImageAttributeRequest & keyof DescribeImageAttributeRequest & keyof DescribeImageAttributeRequest]: (DescribeImageAttributeRequest & DescribeImageAttributeRequest & DescribeImageAttributeRequest & DescribeImageAttributeRequest & DescribeImageAttributeRequest)[K]
    }>): ImageAttribute {
        return this.client.describeImageAttribute(
            this.ops["DescribeImageAttribute"].apply(partialParams)
        );
    }

    invokeDescribeInstanceAttribute(partialParams: ToOptional<{
      [K in keyof DescribeInstanceAttributeRequest & keyof DescribeInstanceAttributeRequest & keyof DescribeInstanceAttributeRequest & keyof DescribeInstanceAttributeRequest & keyof DescribeInstanceAttributeRequest]: (DescribeInstanceAttributeRequest & DescribeInstanceAttributeRequest & DescribeInstanceAttributeRequest & DescribeInstanceAttributeRequest & DescribeInstanceAttributeRequest)[K]
    }>): InstanceAttribute {
        return this.client.describeInstanceAttribute(
            this.ops["DescribeInstanceAttribute"].apply(partialParams)
        );
    }

    invokeDescribeNetworkInterfaceAttribute(partialParams: ToOptional<{
      [K in keyof DescribeNetworkInterfaceAttributeRequest & keyof DescribeNetworkInterfaceAttributeRequest & keyof DescribeNetworkInterfaceAttributeRequest & keyof DescribeNetworkInterfaceAttributeRequest & keyof DescribeNetworkInterfaceAttributeRequest]: (DescribeNetworkInterfaceAttributeRequest & DescribeNetworkInterfaceAttributeRequest & DescribeNetworkInterfaceAttributeRequest & DescribeNetworkInterfaceAttributeRequest & DescribeNetworkInterfaceAttributeRequest)[K]
    }>): DescribeNetworkInterfaceAttributeResult {
        return this.client.describeNetworkInterfaceAttribute(
            this.ops["DescribeNetworkInterfaceAttribute"].apply(partialParams)
        );
    }

    invokeDescribeScheduledInstanceAvailability(partialParams: ToOptional<{
      [K in keyof DescribeScheduledInstanceAvailabilityRequest & keyof DescribeScheduledInstanceAvailabilityRequest & keyof DescribeScheduledInstanceAvailabilityRequest & keyof DescribeScheduledInstanceAvailabilityRequest & keyof DescribeScheduledInstanceAvailabilityRequest]: (DescribeScheduledInstanceAvailabilityRequest & DescribeScheduledInstanceAvailabilityRequest & DescribeScheduledInstanceAvailabilityRequest & DescribeScheduledInstanceAvailabilityRequest & DescribeScheduledInstanceAvailabilityRequest)[K]
    }>): DescribeScheduledInstanceAvailabilityResult {
        return this.client.describeScheduledInstanceAvailability(
            this.ops["DescribeScheduledInstanceAvailability"].apply(partialParams)
        );
    }

    invokeDescribeSecurityGroupReferences(partialParams: ToOptional<{
      [K in keyof DescribeSecurityGroupReferencesRequest & keyof DescribeSecurityGroupReferencesRequest & keyof DescribeSecurityGroupReferencesRequest & keyof DescribeSecurityGroupReferencesRequest & keyof DescribeSecurityGroupReferencesRequest]: (DescribeSecurityGroupReferencesRequest & DescribeSecurityGroupReferencesRequest & DescribeSecurityGroupReferencesRequest & DescribeSecurityGroupReferencesRequest & DescribeSecurityGroupReferencesRequest)[K]
    }>): DescribeSecurityGroupReferencesResult {
        return this.client.describeSecurityGroupReferences(
            this.ops["DescribeSecurityGroupReferences"].apply(partialParams)
        );
    }

    invokeDescribeSnapshotAttribute(partialParams: ToOptional<{
      [K in keyof DescribeSnapshotAttributeRequest & keyof DescribeSnapshotAttributeRequest & keyof DescribeSnapshotAttributeRequest & keyof DescribeSnapshotAttributeRequest & keyof DescribeSnapshotAttributeRequest]: (DescribeSnapshotAttributeRequest & DescribeSnapshotAttributeRequest & DescribeSnapshotAttributeRequest & DescribeSnapshotAttributeRequest & DescribeSnapshotAttributeRequest)[K]
    }>): DescribeSnapshotAttributeResult {
        return this.client.describeSnapshotAttribute(
            this.ops["DescribeSnapshotAttribute"].apply(partialParams)
        );
    }

    invokeDescribeSpotFleetInstances(partialParams: ToOptional<{
      [K in keyof DescribeSpotFleetInstancesRequest & keyof DescribeSpotFleetInstancesRequest & keyof DescribeSpotFleetInstancesRequest & keyof DescribeSpotFleetInstancesRequest & keyof DescribeSpotFleetInstancesRequest]: (DescribeSpotFleetInstancesRequest & DescribeSpotFleetInstancesRequest & DescribeSpotFleetInstancesRequest & DescribeSpotFleetInstancesRequest & DescribeSpotFleetInstancesRequest)[K]
    }>): DescribeSpotFleetInstancesResponse {
        return this.client.describeSpotFleetInstances(
            this.ops["DescribeSpotFleetInstances"].apply(partialParams)
        );
    }

    invokeDescribeSpotFleetRequestHistory(partialParams: ToOptional<{
      [K in keyof DescribeSpotFleetRequestHistoryRequest & keyof DescribeSpotFleetRequestHistoryRequest & keyof DescribeSpotFleetRequestHistoryRequest & keyof DescribeSpotFleetRequestHistoryRequest & keyof DescribeSpotFleetRequestHistoryRequest]: (DescribeSpotFleetRequestHistoryRequest & DescribeSpotFleetRequestHistoryRequest & DescribeSpotFleetRequestHistoryRequest & DescribeSpotFleetRequestHistoryRequest & DescribeSpotFleetRequestHistoryRequest)[K]
    }>): DescribeSpotFleetRequestHistoryResponse {
        return this.client.describeSpotFleetRequestHistory(
            this.ops["DescribeSpotFleetRequestHistory"].apply(partialParams)
        );
    }

    invokeDescribeStaleSecurityGroups(partialParams: ToOptional<{
      [K in keyof DescribeStaleSecurityGroupsRequest & keyof DescribeStaleSecurityGroupsRequest & keyof DescribeStaleSecurityGroupsRequest & keyof DescribeStaleSecurityGroupsRequest & keyof DescribeStaleSecurityGroupsRequest]: (DescribeStaleSecurityGroupsRequest & DescribeStaleSecurityGroupsRequest & DescribeStaleSecurityGroupsRequest & DescribeStaleSecurityGroupsRequest & DescribeStaleSecurityGroupsRequest)[K]
    }>): DescribeStaleSecurityGroupsResult {
        return this.client.describeStaleSecurityGroups(
            this.ops["DescribeStaleSecurityGroups"].apply(partialParams)
        );
    }

    invokeDescribeVolumeAttribute(partialParams: ToOptional<{
      [K in keyof DescribeVolumeAttributeRequest & keyof DescribeVolumeAttributeRequest & keyof DescribeVolumeAttributeRequest & keyof DescribeVolumeAttributeRequest & keyof DescribeVolumeAttributeRequest]: (DescribeVolumeAttributeRequest & DescribeVolumeAttributeRequest & DescribeVolumeAttributeRequest & DescribeVolumeAttributeRequest & DescribeVolumeAttributeRequest)[K]
    }>): DescribeVolumeAttributeResult {
        return this.client.describeVolumeAttribute(
            this.ops["DescribeVolumeAttribute"].apply(partialParams)
        );
    }

    invokeDescribeVpcAttribute(partialParams: ToOptional<{
      [K in keyof DescribeVpcAttributeRequest & keyof DescribeVpcAttributeRequest & keyof DescribeVpcAttributeRequest & keyof DescribeVpcAttributeRequest & keyof DescribeVpcAttributeRequest]: (DescribeVpcAttributeRequest & DescribeVpcAttributeRequest & DescribeVpcAttributeRequest & DescribeVpcAttributeRequest & DescribeVpcAttributeRequest)[K]
    }>): DescribeVpcAttributeResult {
        return this.client.describeVpcAttribute(
            this.ops["DescribeVpcAttribute"].apply(partialParams)
        );
    }

    invokeDescribeVpcEndpointServicePermissions(partialParams: ToOptional<{
      [K in keyof DescribeVpcEndpointServicePermissionsRequest & keyof DescribeVpcEndpointServicePermissionsRequest & keyof DescribeVpcEndpointServicePermissionsRequest & keyof DescribeVpcEndpointServicePermissionsRequest & keyof DescribeVpcEndpointServicePermissionsRequest]: (DescribeVpcEndpointServicePermissionsRequest & DescribeVpcEndpointServicePermissionsRequest & DescribeVpcEndpointServicePermissionsRequest & DescribeVpcEndpointServicePermissionsRequest & DescribeVpcEndpointServicePermissionsRequest)[K]
    }>): DescribeVpcEndpointServicePermissionsResult {
        return this.client.describeVpcEndpointServicePermissions(
            this.ops["DescribeVpcEndpointServicePermissions"].apply(partialParams)
        );
    }

    invokeDetachClassicLinkVpc(partialParams: ToOptional<{
      [K in keyof DetachClassicLinkVpcRequest & keyof DetachClassicLinkVpcRequest & keyof DetachClassicLinkVpcRequest & keyof DetachClassicLinkVpcRequest & keyof DetachClassicLinkVpcRequest]: (DetachClassicLinkVpcRequest & DetachClassicLinkVpcRequest & DetachClassicLinkVpcRequest & DetachClassicLinkVpcRequest & DetachClassicLinkVpcRequest)[K]
    }>): DetachClassicLinkVpcResult {
        return this.client.detachClassicLinkVpc(
            this.ops["DetachClassicLinkVpc"].apply(partialParams)
        );
    }

    invokeDetachInternetGateway(partialParams: ToOptional<{
      [K in keyof DetachInternetGatewayRequest & keyof DetachInternetGatewayRequest & keyof DetachInternetGatewayRequest & keyof DetachInternetGatewayRequest & keyof DetachInternetGatewayRequest]: (DetachInternetGatewayRequest & DetachInternetGatewayRequest & DetachInternetGatewayRequest & DetachInternetGatewayRequest & DetachInternetGatewayRequest)[K]
    }>): void {
        return this.client.detachInternetGateway(
            this.ops["DetachInternetGateway"].apply(partialParams)
        );
    }

    invokeDetachNetworkInterface(partialParams: ToOptional<{
      [K in keyof DetachNetworkInterfaceRequest & keyof DetachNetworkInterfaceRequest & keyof DetachNetworkInterfaceRequest & keyof DetachNetworkInterfaceRequest & keyof DetachNetworkInterfaceRequest]: (DetachNetworkInterfaceRequest & DetachNetworkInterfaceRequest & DetachNetworkInterfaceRequest & DetachNetworkInterfaceRequest & DetachNetworkInterfaceRequest)[K]
    }>): void {
        return this.client.detachNetworkInterface(
            this.ops["DetachNetworkInterface"].apply(partialParams)
        );
    }

    invokeDetachVolume(partialParams: ToOptional<{
      [K in keyof DetachVolumeRequest & keyof DetachVolumeRequest & keyof DetachVolumeRequest & keyof DetachVolumeRequest & keyof DetachVolumeRequest]: (DetachVolumeRequest & DetachVolumeRequest & DetachVolumeRequest & DetachVolumeRequest & DetachVolumeRequest)[K]
    }>): VolumeAttachment {
        return this.client.detachVolume(
            this.ops["DetachVolume"].apply(partialParams)
        );
    }

    invokeDetachVpnGateway(partialParams: ToOptional<{
      [K in keyof DetachVpnGatewayRequest & keyof DetachVpnGatewayRequest & keyof DetachVpnGatewayRequest & keyof DetachVpnGatewayRequest & keyof DetachVpnGatewayRequest]: (DetachVpnGatewayRequest & DetachVpnGatewayRequest & DetachVpnGatewayRequest & DetachVpnGatewayRequest & DetachVpnGatewayRequest)[K]
    }>): void {
        return this.client.detachVpnGateway(
            this.ops["DetachVpnGateway"].apply(partialParams)
        );
    }

    invokeDisableFastLaunch(partialParams: ToOptional<{
      [K in keyof DisableFastLaunchRequest & keyof DisableFastLaunchRequest & keyof DisableFastLaunchRequest & keyof DisableFastLaunchRequest & keyof DisableFastLaunchRequest]: (DisableFastLaunchRequest & DisableFastLaunchRequest & DisableFastLaunchRequest & DisableFastLaunchRequest & DisableFastLaunchRequest)[K]
    }>): DisableFastLaunchResult {
        return this.client.disableFastLaunch(
            this.ops["DisableFastLaunch"].apply(partialParams)
        );
    }

    invokeDisableFastSnapshotRestores(partialParams: ToOptional<{
      [K in keyof DisableFastSnapshotRestoresRequest & keyof DisableFastSnapshotRestoresRequest & keyof DisableFastSnapshotRestoresRequest & keyof DisableFastSnapshotRestoresRequest & keyof DisableFastSnapshotRestoresRequest]: (DisableFastSnapshotRestoresRequest & DisableFastSnapshotRestoresRequest & DisableFastSnapshotRestoresRequest & DisableFastSnapshotRestoresRequest & DisableFastSnapshotRestoresRequest)[K]
    }>): DisableFastSnapshotRestoresResult {
        return this.client.disableFastSnapshotRestores(
            this.ops["DisableFastSnapshotRestores"].apply(partialParams)
        );
    }

    invokeDisableImageDeprecation(partialParams: ToOptional<{
      [K in keyof DisableImageDeprecationRequest & keyof DisableImageDeprecationRequest & keyof DisableImageDeprecationRequest & keyof DisableImageDeprecationRequest & keyof DisableImageDeprecationRequest]: (DisableImageDeprecationRequest & DisableImageDeprecationRequest & DisableImageDeprecationRequest & DisableImageDeprecationRequest & DisableImageDeprecationRequest)[K]
    }>): DisableImageDeprecationResult {
        return this.client.disableImageDeprecation(
            this.ops["DisableImageDeprecation"].apply(partialParams)
        );
    }

    invokeDisableIpamOrganizationAdminAccount(partialParams: ToOptional<{
      [K in keyof DisableIpamOrganizationAdminAccountRequest & keyof DisableIpamOrganizationAdminAccountRequest & keyof DisableIpamOrganizationAdminAccountRequest & keyof DisableIpamOrganizationAdminAccountRequest & keyof DisableIpamOrganizationAdminAccountRequest]: (DisableIpamOrganizationAdminAccountRequest & DisableIpamOrganizationAdminAccountRequest & DisableIpamOrganizationAdminAccountRequest & DisableIpamOrganizationAdminAccountRequest & DisableIpamOrganizationAdminAccountRequest)[K]
    }>): DisableIpamOrganizationAdminAccountResult {
        return this.client.disableIpamOrganizationAdminAccount(
            this.ops["DisableIpamOrganizationAdminAccount"].apply(partialParams)
        );
    }

    invokeDisableTransitGatewayRouteTablePropagation(partialParams: ToOptional<{
      [K in keyof DisableTransitGatewayRouteTablePropagationRequest & keyof DisableTransitGatewayRouteTablePropagationRequest & keyof DisableTransitGatewayRouteTablePropagationRequest & keyof DisableTransitGatewayRouteTablePropagationRequest & keyof DisableTransitGatewayRouteTablePropagationRequest]: (DisableTransitGatewayRouteTablePropagationRequest & DisableTransitGatewayRouteTablePropagationRequest & DisableTransitGatewayRouteTablePropagationRequest & DisableTransitGatewayRouteTablePropagationRequest & DisableTransitGatewayRouteTablePropagationRequest)[K]
    }>): DisableTransitGatewayRouteTablePropagationResult {
        return this.client.disableTransitGatewayRouteTablePropagation(
            this.ops["DisableTransitGatewayRouteTablePropagation"].apply(partialParams)
        );
    }

    invokeDisableVgwRoutePropagation(partialParams: ToOptional<{
      [K in keyof DisableVgwRoutePropagationRequest & keyof DisableVgwRoutePropagationRequest & keyof DisableVgwRoutePropagationRequest & keyof DisableVgwRoutePropagationRequest & keyof DisableVgwRoutePropagationRequest]: (DisableVgwRoutePropagationRequest & DisableVgwRoutePropagationRequest & DisableVgwRoutePropagationRequest & DisableVgwRoutePropagationRequest & DisableVgwRoutePropagationRequest)[K]
    }>): void {
        return this.client.disableVgwRoutePropagation(
            this.ops["DisableVgwRoutePropagation"].apply(partialParams)
        );
    }

    invokeDisableVpcClassicLink(partialParams: ToOptional<{
      [K in keyof DisableVpcClassicLinkRequest & keyof DisableVpcClassicLinkRequest & keyof DisableVpcClassicLinkRequest & keyof DisableVpcClassicLinkRequest & keyof DisableVpcClassicLinkRequest]: (DisableVpcClassicLinkRequest & DisableVpcClassicLinkRequest & DisableVpcClassicLinkRequest & DisableVpcClassicLinkRequest & DisableVpcClassicLinkRequest)[K]
    }>): DisableVpcClassicLinkResult {
        return this.client.disableVpcClassicLink(
            this.ops["DisableVpcClassicLink"].apply(partialParams)
        );
    }

    invokeDisassociateClientVpnTargetNetwork(partialParams: ToOptional<{
      [K in keyof DisassociateClientVpnTargetNetworkRequest & keyof DisassociateClientVpnTargetNetworkRequest & keyof DisassociateClientVpnTargetNetworkRequest & keyof DisassociateClientVpnTargetNetworkRequest & keyof DisassociateClientVpnTargetNetworkRequest]: (DisassociateClientVpnTargetNetworkRequest & DisassociateClientVpnTargetNetworkRequest & DisassociateClientVpnTargetNetworkRequest & DisassociateClientVpnTargetNetworkRequest & DisassociateClientVpnTargetNetworkRequest)[K]
    }>): DisassociateClientVpnTargetNetworkResult {
        return this.client.disassociateClientVpnTargetNetwork(
            this.ops["DisassociateClientVpnTargetNetwork"].apply(partialParams)
        );
    }

    invokeDisassociateIamInstanceProfile(partialParams: ToOptional<{
      [K in keyof DisassociateIamInstanceProfileRequest & keyof DisassociateIamInstanceProfileRequest & keyof DisassociateIamInstanceProfileRequest & keyof DisassociateIamInstanceProfileRequest & keyof DisassociateIamInstanceProfileRequest]: (DisassociateIamInstanceProfileRequest & DisassociateIamInstanceProfileRequest & DisassociateIamInstanceProfileRequest & DisassociateIamInstanceProfileRequest & DisassociateIamInstanceProfileRequest)[K]
    }>): DisassociateIamInstanceProfileResult {
        return this.client.disassociateIamInstanceProfile(
            this.ops["DisassociateIamInstanceProfile"].apply(partialParams)
        );
    }

    invokeDisassociateInstanceEventWindow(partialParams: ToOptional<{
      [K in keyof DisassociateInstanceEventWindowRequest & keyof DisassociateInstanceEventWindowRequest & keyof DisassociateInstanceEventWindowRequest & keyof DisassociateInstanceEventWindowRequest & keyof DisassociateInstanceEventWindowRequest]: (DisassociateInstanceEventWindowRequest & DisassociateInstanceEventWindowRequest & DisassociateInstanceEventWindowRequest & DisassociateInstanceEventWindowRequest & DisassociateInstanceEventWindowRequest)[K]
    }>): DisassociateInstanceEventWindowResult {
        return this.client.disassociateInstanceEventWindow(
            this.ops["DisassociateInstanceEventWindow"].apply(partialParams)
        );
    }

    invokeDisassociateRouteTable(partialParams: ToOptional<{
      [K in keyof DisassociateRouteTableRequest & keyof DisassociateRouteTableRequest & keyof DisassociateRouteTableRequest & keyof DisassociateRouteTableRequest & keyof DisassociateRouteTableRequest]: (DisassociateRouteTableRequest & DisassociateRouteTableRequest & DisassociateRouteTableRequest & DisassociateRouteTableRequest & DisassociateRouteTableRequest)[K]
    }>): void {
        return this.client.disassociateRouteTable(
            this.ops["DisassociateRouteTable"].apply(partialParams)
        );
    }

    invokeDisassociateSubnetCidrBlock(partialParams: ToOptional<{
      [K in keyof DisassociateSubnetCidrBlockRequest & keyof DisassociateSubnetCidrBlockRequest & keyof DisassociateSubnetCidrBlockRequest & keyof DisassociateSubnetCidrBlockRequest & keyof DisassociateSubnetCidrBlockRequest]: (DisassociateSubnetCidrBlockRequest & DisassociateSubnetCidrBlockRequest & DisassociateSubnetCidrBlockRequest & DisassociateSubnetCidrBlockRequest & DisassociateSubnetCidrBlockRequest)[K]
    }>): DisassociateSubnetCidrBlockResult {
        return this.client.disassociateSubnetCidrBlock(
            this.ops["DisassociateSubnetCidrBlock"].apply(partialParams)
        );
    }

    invokeDisassociateTransitGatewayRouteTable(partialParams: ToOptional<{
      [K in keyof DisassociateTransitGatewayRouteTableRequest & keyof DisassociateTransitGatewayRouteTableRequest & keyof DisassociateTransitGatewayRouteTableRequest & keyof DisassociateTransitGatewayRouteTableRequest & keyof DisassociateTransitGatewayRouteTableRequest]: (DisassociateTransitGatewayRouteTableRequest & DisassociateTransitGatewayRouteTableRequest & DisassociateTransitGatewayRouteTableRequest & DisassociateTransitGatewayRouteTableRequest & DisassociateTransitGatewayRouteTableRequest)[K]
    }>): DisassociateTransitGatewayRouteTableResult {
        return this.client.disassociateTransitGatewayRouteTable(
            this.ops["DisassociateTransitGatewayRouteTable"].apply(partialParams)
        );
    }

    invokeDisassociateTrunkInterface(partialParams: ToOptional<{
      [K in keyof DisassociateTrunkInterfaceRequest & keyof DisassociateTrunkInterfaceRequest & keyof DisassociateTrunkInterfaceRequest & keyof DisassociateTrunkInterfaceRequest & keyof DisassociateTrunkInterfaceRequest]: (DisassociateTrunkInterfaceRequest & DisassociateTrunkInterfaceRequest & DisassociateTrunkInterfaceRequest & DisassociateTrunkInterfaceRequest & DisassociateTrunkInterfaceRequest)[K]
    }>): DisassociateTrunkInterfaceResult {
        return this.client.disassociateTrunkInterface(
            this.ops["DisassociateTrunkInterface"].apply(partialParams)
        );
    }

    invokeDisassociateVpcCidrBlock(partialParams: ToOptional<{
      [K in keyof DisassociateVpcCidrBlockRequest & keyof DisassociateVpcCidrBlockRequest & keyof DisassociateVpcCidrBlockRequest & keyof DisassociateVpcCidrBlockRequest & keyof DisassociateVpcCidrBlockRequest]: (DisassociateVpcCidrBlockRequest & DisassociateVpcCidrBlockRequest & DisassociateVpcCidrBlockRequest & DisassociateVpcCidrBlockRequest & DisassociateVpcCidrBlockRequest)[K]
    }>): DisassociateVpcCidrBlockResult {
        return this.client.disassociateVpcCidrBlock(
            this.ops["DisassociateVpcCidrBlock"].apply(partialParams)
        );
    }

    invokeEnableFastLaunch(partialParams: ToOptional<{
      [K in keyof EnableFastLaunchRequest & keyof EnableFastLaunchRequest & keyof EnableFastLaunchRequest & keyof EnableFastLaunchRequest & keyof EnableFastLaunchRequest]: (EnableFastLaunchRequest & EnableFastLaunchRequest & EnableFastLaunchRequest & EnableFastLaunchRequest & EnableFastLaunchRequest)[K]
    }>): EnableFastLaunchResult {
        return this.client.enableFastLaunch(
            this.ops["EnableFastLaunch"].apply(partialParams)
        );
    }

    invokeEnableFastSnapshotRestores(partialParams: ToOptional<{
      [K in keyof EnableFastSnapshotRestoresRequest & keyof EnableFastSnapshotRestoresRequest & keyof EnableFastSnapshotRestoresRequest & keyof EnableFastSnapshotRestoresRequest & keyof EnableFastSnapshotRestoresRequest]: (EnableFastSnapshotRestoresRequest & EnableFastSnapshotRestoresRequest & EnableFastSnapshotRestoresRequest & EnableFastSnapshotRestoresRequest & EnableFastSnapshotRestoresRequest)[K]
    }>): EnableFastSnapshotRestoresResult {
        return this.client.enableFastSnapshotRestores(
            this.ops["EnableFastSnapshotRestores"].apply(partialParams)
        );
    }

    invokeEnableImageDeprecation(partialParams: ToOptional<{
      [K in keyof EnableImageDeprecationRequest & keyof EnableImageDeprecationRequest & keyof EnableImageDeprecationRequest & keyof EnableImageDeprecationRequest & keyof EnableImageDeprecationRequest]: (EnableImageDeprecationRequest & EnableImageDeprecationRequest & EnableImageDeprecationRequest & EnableImageDeprecationRequest & EnableImageDeprecationRequest)[K]
    }>): EnableImageDeprecationResult {
        return this.client.enableImageDeprecation(
            this.ops["EnableImageDeprecation"].apply(partialParams)
        );
    }

    invokeEnableIpamOrganizationAdminAccount(partialParams: ToOptional<{
      [K in keyof EnableIpamOrganizationAdminAccountRequest & keyof EnableIpamOrganizationAdminAccountRequest & keyof EnableIpamOrganizationAdminAccountRequest & keyof EnableIpamOrganizationAdminAccountRequest & keyof EnableIpamOrganizationAdminAccountRequest]: (EnableIpamOrganizationAdminAccountRequest & EnableIpamOrganizationAdminAccountRequest & EnableIpamOrganizationAdminAccountRequest & EnableIpamOrganizationAdminAccountRequest & EnableIpamOrganizationAdminAccountRequest)[K]
    }>): EnableIpamOrganizationAdminAccountResult {
        return this.client.enableIpamOrganizationAdminAccount(
            this.ops["EnableIpamOrganizationAdminAccount"].apply(partialParams)
        );
    }

    invokeEnableTransitGatewayRouteTablePropagation(partialParams: ToOptional<{
      [K in keyof EnableTransitGatewayRouteTablePropagationRequest & keyof EnableTransitGatewayRouteTablePropagationRequest & keyof EnableTransitGatewayRouteTablePropagationRequest & keyof EnableTransitGatewayRouteTablePropagationRequest & keyof EnableTransitGatewayRouteTablePropagationRequest]: (EnableTransitGatewayRouteTablePropagationRequest & EnableTransitGatewayRouteTablePropagationRequest & EnableTransitGatewayRouteTablePropagationRequest & EnableTransitGatewayRouteTablePropagationRequest & EnableTransitGatewayRouteTablePropagationRequest)[K]
    }>): EnableTransitGatewayRouteTablePropagationResult {
        return this.client.enableTransitGatewayRouteTablePropagation(
            this.ops["EnableTransitGatewayRouteTablePropagation"].apply(partialParams)
        );
    }

    invokeEnableVgwRoutePropagation(partialParams: ToOptional<{
      [K in keyof EnableVgwRoutePropagationRequest & keyof EnableVgwRoutePropagationRequest & keyof EnableVgwRoutePropagationRequest & keyof EnableVgwRoutePropagationRequest & keyof EnableVgwRoutePropagationRequest]: (EnableVgwRoutePropagationRequest & EnableVgwRoutePropagationRequest & EnableVgwRoutePropagationRequest & EnableVgwRoutePropagationRequest & EnableVgwRoutePropagationRequest)[K]
    }>): void {
        return this.client.enableVgwRoutePropagation(
            this.ops["EnableVgwRoutePropagation"].apply(partialParams)
        );
    }

    invokeEnableVolumeIO(partialParams: ToOptional<{
      [K in keyof EnableVolumeIORequest & keyof EnableVolumeIORequest & keyof EnableVolumeIORequest & keyof EnableVolumeIORequest & keyof EnableVolumeIORequest]: (EnableVolumeIORequest & EnableVolumeIORequest & EnableVolumeIORequest & EnableVolumeIORequest & EnableVolumeIORequest)[K]
    }>): void {
        return this.client.enableVolumeIO(
            this.ops["EnableVolumeIO"].apply(partialParams)
        );
    }

    invokeEnableVpcClassicLink(partialParams: ToOptional<{
      [K in keyof EnableVpcClassicLinkRequest & keyof EnableVpcClassicLinkRequest & keyof EnableVpcClassicLinkRequest & keyof EnableVpcClassicLinkRequest & keyof EnableVpcClassicLinkRequest]: (EnableVpcClassicLinkRequest & EnableVpcClassicLinkRequest & EnableVpcClassicLinkRequest & EnableVpcClassicLinkRequest & EnableVpcClassicLinkRequest)[K]
    }>): EnableVpcClassicLinkResult {
        return this.client.enableVpcClassicLink(
            this.ops["EnableVpcClassicLink"].apply(partialParams)
        );
    }

    invokeExportClientVpnClientCertificateRevocationList(partialParams: ToOptional<{
      [K in keyof ExportClientVpnClientCertificateRevocationListRequest & keyof ExportClientVpnClientCertificateRevocationListRequest & keyof ExportClientVpnClientCertificateRevocationListRequest & keyof ExportClientVpnClientCertificateRevocationListRequest & keyof ExportClientVpnClientCertificateRevocationListRequest]: (ExportClientVpnClientCertificateRevocationListRequest & ExportClientVpnClientCertificateRevocationListRequest & ExportClientVpnClientCertificateRevocationListRequest & ExportClientVpnClientCertificateRevocationListRequest & ExportClientVpnClientCertificateRevocationListRequest)[K]
    }>): ExportClientVpnClientCertificateRevocationListResult {
        return this.client.exportClientVpnClientCertificateRevocationList(
            this.ops["ExportClientVpnClientCertificateRevocationList"].apply(partialParams)
        );
    }

    invokeExportClientVpnClientConfiguration(partialParams: ToOptional<{
      [K in keyof ExportClientVpnClientConfigurationRequest & keyof ExportClientVpnClientConfigurationRequest & keyof ExportClientVpnClientConfigurationRequest & keyof ExportClientVpnClientConfigurationRequest & keyof ExportClientVpnClientConfigurationRequest]: (ExportClientVpnClientConfigurationRequest & ExportClientVpnClientConfigurationRequest & ExportClientVpnClientConfigurationRequest & ExportClientVpnClientConfigurationRequest & ExportClientVpnClientConfigurationRequest)[K]
    }>): ExportClientVpnClientConfigurationResult {
        return this.client.exportClientVpnClientConfiguration(
            this.ops["ExportClientVpnClientConfiguration"].apply(partialParams)
        );
    }

    invokeExportImage(partialParams: ToOptional<{
      [K in keyof ExportImageRequest & keyof ExportImageRequest & keyof ExportImageRequest & keyof ExportImageRequest & keyof ExportImageRequest]: (ExportImageRequest & ExportImageRequest & ExportImageRequest & ExportImageRequest & ExportImageRequest)[K]
    }>): ExportImageResult {
        return this.client.exportImage(
            this.ops["ExportImage"].apply(partialParams)
        );
    }

    invokeExportTransitGatewayRoutes(partialParams: ToOptional<{
      [K in keyof ExportTransitGatewayRoutesRequest & keyof ExportTransitGatewayRoutesRequest & keyof ExportTransitGatewayRoutesRequest & keyof ExportTransitGatewayRoutesRequest & keyof ExportTransitGatewayRoutesRequest]: (ExportTransitGatewayRoutesRequest & ExportTransitGatewayRoutesRequest & ExportTransitGatewayRoutesRequest & ExportTransitGatewayRoutesRequest & ExportTransitGatewayRoutesRequest)[K]
    }>): ExportTransitGatewayRoutesResult {
        return this.client.exportTransitGatewayRoutes(
            this.ops["ExportTransitGatewayRoutes"].apply(partialParams)
        );
    }

    invokeGetAssociatedIpv6PoolCidrs(partialParams: ToOptional<{
      [K in keyof GetAssociatedIpv6PoolCidrsRequest & keyof GetAssociatedIpv6PoolCidrsRequest & keyof GetAssociatedIpv6PoolCidrsRequest & keyof GetAssociatedIpv6PoolCidrsRequest & keyof GetAssociatedIpv6PoolCidrsRequest]: (GetAssociatedIpv6PoolCidrsRequest & GetAssociatedIpv6PoolCidrsRequest & GetAssociatedIpv6PoolCidrsRequest & GetAssociatedIpv6PoolCidrsRequest & GetAssociatedIpv6PoolCidrsRequest)[K]
    }>): GetAssociatedIpv6PoolCidrsResult {
        return this.client.getAssociatedIpv6PoolCidrs(
            this.ops["GetAssociatedIpv6PoolCidrs"].apply(partialParams)
        );
    }

    invokeGetCapacityReservationUsage(partialParams: ToOptional<{
      [K in keyof GetCapacityReservationUsageRequest & keyof GetCapacityReservationUsageRequest & keyof GetCapacityReservationUsageRequest & keyof GetCapacityReservationUsageRequest & keyof GetCapacityReservationUsageRequest]: (GetCapacityReservationUsageRequest & GetCapacityReservationUsageRequest & GetCapacityReservationUsageRequest & GetCapacityReservationUsageRequest & GetCapacityReservationUsageRequest)[K]
    }>): GetCapacityReservationUsageResult {
        return this.client.getCapacityReservationUsage(
            this.ops["GetCapacityReservationUsage"].apply(partialParams)
        );
    }

    invokeGetCoipPoolUsage(partialParams: ToOptional<{
      [K in keyof GetCoipPoolUsageRequest & keyof GetCoipPoolUsageRequest & keyof GetCoipPoolUsageRequest & keyof GetCoipPoolUsageRequest & keyof GetCoipPoolUsageRequest]: (GetCoipPoolUsageRequest & GetCoipPoolUsageRequest & GetCoipPoolUsageRequest & GetCoipPoolUsageRequest & GetCoipPoolUsageRequest)[K]
    }>): GetCoipPoolUsageResult {
        return this.client.getCoipPoolUsage(
            this.ops["GetCoipPoolUsage"].apply(partialParams)
        );
    }

    invokeGetConsoleOutput(partialParams: ToOptional<{
      [K in keyof GetConsoleOutputRequest & keyof GetConsoleOutputRequest & keyof GetConsoleOutputRequest & keyof GetConsoleOutputRequest & keyof GetConsoleOutputRequest]: (GetConsoleOutputRequest & GetConsoleOutputRequest & GetConsoleOutputRequest & GetConsoleOutputRequest & GetConsoleOutputRequest)[K]
    }>): GetConsoleOutputResult {
        return this.client.getConsoleOutput(
            this.ops["GetConsoleOutput"].apply(partialParams)
        );
    }

    invokeGetConsoleScreenshot(partialParams: ToOptional<{
      [K in keyof GetConsoleScreenshotRequest & keyof GetConsoleScreenshotRequest & keyof GetConsoleScreenshotRequest & keyof GetConsoleScreenshotRequest & keyof GetConsoleScreenshotRequest]: (GetConsoleScreenshotRequest & GetConsoleScreenshotRequest & GetConsoleScreenshotRequest & GetConsoleScreenshotRequest & GetConsoleScreenshotRequest)[K]
    }>): GetConsoleScreenshotResult {
        return this.client.getConsoleScreenshot(
            this.ops["GetConsoleScreenshot"].apply(partialParams)
        );
    }

    invokeGetDefaultCreditSpecification(partialParams: ToOptional<{
      [K in keyof GetDefaultCreditSpecificationRequest & keyof GetDefaultCreditSpecificationRequest & keyof GetDefaultCreditSpecificationRequest & keyof GetDefaultCreditSpecificationRequest & keyof GetDefaultCreditSpecificationRequest]: (GetDefaultCreditSpecificationRequest & GetDefaultCreditSpecificationRequest & GetDefaultCreditSpecificationRequest & GetDefaultCreditSpecificationRequest & GetDefaultCreditSpecificationRequest)[K]
    }>): GetDefaultCreditSpecificationResult {
        return this.client.getDefaultCreditSpecification(
            this.ops["GetDefaultCreditSpecification"].apply(partialParams)
        );
    }

    invokeGetFlowLogsIntegrationTemplate(partialParams: ToOptional<{
      [K in keyof GetFlowLogsIntegrationTemplateRequest & keyof GetFlowLogsIntegrationTemplateRequest & keyof GetFlowLogsIntegrationTemplateRequest & keyof GetFlowLogsIntegrationTemplateRequest & keyof GetFlowLogsIntegrationTemplateRequest]: (GetFlowLogsIntegrationTemplateRequest & GetFlowLogsIntegrationTemplateRequest & GetFlowLogsIntegrationTemplateRequest & GetFlowLogsIntegrationTemplateRequest & GetFlowLogsIntegrationTemplateRequest)[K]
    }>): GetFlowLogsIntegrationTemplateResult {
        return this.client.getFlowLogsIntegrationTemplate(
            this.ops["GetFlowLogsIntegrationTemplate"].apply(partialParams)
        );
    }

    invokeGetGroupsForCapacityReservation(partialParams: ToOptional<{
      [K in keyof GetGroupsForCapacityReservationRequest & keyof GetGroupsForCapacityReservationRequest & keyof GetGroupsForCapacityReservationRequest & keyof GetGroupsForCapacityReservationRequest & keyof GetGroupsForCapacityReservationRequest]: (GetGroupsForCapacityReservationRequest & GetGroupsForCapacityReservationRequest & GetGroupsForCapacityReservationRequest & GetGroupsForCapacityReservationRequest & GetGroupsForCapacityReservationRequest)[K]
    }>): GetGroupsForCapacityReservationResult {
        return this.client.getGroupsForCapacityReservation(
            this.ops["GetGroupsForCapacityReservation"].apply(partialParams)
        );
    }

    invokeGetHostReservationPurchasePreview(partialParams: ToOptional<{
      [K in keyof GetHostReservationPurchasePreviewRequest & keyof GetHostReservationPurchasePreviewRequest & keyof GetHostReservationPurchasePreviewRequest & keyof GetHostReservationPurchasePreviewRequest & keyof GetHostReservationPurchasePreviewRequest]: (GetHostReservationPurchasePreviewRequest & GetHostReservationPurchasePreviewRequest & GetHostReservationPurchasePreviewRequest & GetHostReservationPurchasePreviewRequest & GetHostReservationPurchasePreviewRequest)[K]
    }>): GetHostReservationPurchasePreviewResult {
        return this.client.getHostReservationPurchasePreview(
            this.ops["GetHostReservationPurchasePreview"].apply(partialParams)
        );
    }

    invokeGetInstanceTypesFromInstanceRequirements(partialParams: ToOptional<{
      [K in keyof GetInstanceTypesFromInstanceRequirementsRequest & keyof GetInstanceTypesFromInstanceRequirementsRequest & keyof GetInstanceTypesFromInstanceRequirementsRequest & keyof GetInstanceTypesFromInstanceRequirementsRequest & keyof GetInstanceTypesFromInstanceRequirementsRequest]: (GetInstanceTypesFromInstanceRequirementsRequest & GetInstanceTypesFromInstanceRequirementsRequest & GetInstanceTypesFromInstanceRequirementsRequest & GetInstanceTypesFromInstanceRequirementsRequest & GetInstanceTypesFromInstanceRequirementsRequest)[K]
    }>): GetInstanceTypesFromInstanceRequirementsResult {
        return this.client.getInstanceTypesFromInstanceRequirements(
            this.ops["GetInstanceTypesFromInstanceRequirements"].apply(partialParams)
        );
    }

    invokeGetIpamAddressHistory(partialParams: ToOptional<{
      [K in keyof GetIpamAddressHistoryRequest & keyof GetIpamAddressHistoryRequest & keyof GetIpamAddressHistoryRequest & keyof GetIpamAddressHistoryRequest & keyof GetIpamAddressHistoryRequest]: (GetIpamAddressHistoryRequest & GetIpamAddressHistoryRequest & GetIpamAddressHistoryRequest & GetIpamAddressHistoryRequest & GetIpamAddressHistoryRequest)[K]
    }>): GetIpamAddressHistoryResult {
        return this.client.getIpamAddressHistory(
            this.ops["GetIpamAddressHistory"].apply(partialParams)
        );
    }

    invokeGetIpamPoolAllocations(partialParams: ToOptional<{
      [K in keyof GetIpamPoolAllocationsRequest & keyof GetIpamPoolAllocationsRequest & keyof GetIpamPoolAllocationsRequest & keyof GetIpamPoolAllocationsRequest & keyof GetIpamPoolAllocationsRequest]: (GetIpamPoolAllocationsRequest & GetIpamPoolAllocationsRequest & GetIpamPoolAllocationsRequest & GetIpamPoolAllocationsRequest & GetIpamPoolAllocationsRequest)[K]
    }>): GetIpamPoolAllocationsResult {
        return this.client.getIpamPoolAllocations(
            this.ops["GetIpamPoolAllocations"].apply(partialParams)
        );
    }

    invokeGetIpamPoolCidrs(partialParams: ToOptional<{
      [K in keyof GetIpamPoolCidrsRequest & keyof GetIpamPoolCidrsRequest & keyof GetIpamPoolCidrsRequest & keyof GetIpamPoolCidrsRequest & keyof GetIpamPoolCidrsRequest]: (GetIpamPoolCidrsRequest & GetIpamPoolCidrsRequest & GetIpamPoolCidrsRequest & GetIpamPoolCidrsRequest & GetIpamPoolCidrsRequest)[K]
    }>): GetIpamPoolCidrsResult {
        return this.client.getIpamPoolCidrs(
            this.ops["GetIpamPoolCidrs"].apply(partialParams)
        );
    }

    invokeGetIpamResourceCidrs(partialParams: ToOptional<{
      [K in keyof GetIpamResourceCidrsRequest & keyof GetIpamResourceCidrsRequest & keyof GetIpamResourceCidrsRequest & keyof GetIpamResourceCidrsRequest & keyof GetIpamResourceCidrsRequest]: (GetIpamResourceCidrsRequest & GetIpamResourceCidrsRequest & GetIpamResourceCidrsRequest & GetIpamResourceCidrsRequest & GetIpamResourceCidrsRequest)[K]
    }>): GetIpamResourceCidrsResult {
        return this.client.getIpamResourceCidrs(
            this.ops["GetIpamResourceCidrs"].apply(partialParams)
        );
    }

    invokeGetLaunchTemplateData(partialParams: ToOptional<{
      [K in keyof GetLaunchTemplateDataRequest & keyof GetLaunchTemplateDataRequest & keyof GetLaunchTemplateDataRequest & keyof GetLaunchTemplateDataRequest & keyof GetLaunchTemplateDataRequest]: (GetLaunchTemplateDataRequest & GetLaunchTemplateDataRequest & GetLaunchTemplateDataRequest & GetLaunchTemplateDataRequest & GetLaunchTemplateDataRequest)[K]
    }>): GetLaunchTemplateDataResult {
        return this.client.getLaunchTemplateData(
            this.ops["GetLaunchTemplateData"].apply(partialParams)
        );
    }

    invokeGetManagedPrefixListAssociations(partialParams: ToOptional<{
      [K in keyof GetManagedPrefixListAssociationsRequest & keyof GetManagedPrefixListAssociationsRequest & keyof GetManagedPrefixListAssociationsRequest & keyof GetManagedPrefixListAssociationsRequest & keyof GetManagedPrefixListAssociationsRequest]: (GetManagedPrefixListAssociationsRequest & GetManagedPrefixListAssociationsRequest & GetManagedPrefixListAssociationsRequest & GetManagedPrefixListAssociationsRequest & GetManagedPrefixListAssociationsRequest)[K]
    }>): GetManagedPrefixListAssociationsResult {
        return this.client.getManagedPrefixListAssociations(
            this.ops["GetManagedPrefixListAssociations"].apply(partialParams)
        );
    }

    invokeGetManagedPrefixListEntries(partialParams: ToOptional<{
      [K in keyof GetManagedPrefixListEntriesRequest & keyof GetManagedPrefixListEntriesRequest & keyof GetManagedPrefixListEntriesRequest & keyof GetManagedPrefixListEntriesRequest & keyof GetManagedPrefixListEntriesRequest]: (GetManagedPrefixListEntriesRequest & GetManagedPrefixListEntriesRequest & GetManagedPrefixListEntriesRequest & GetManagedPrefixListEntriesRequest & GetManagedPrefixListEntriesRequest)[K]
    }>): GetManagedPrefixListEntriesResult {
        return this.client.getManagedPrefixListEntries(
            this.ops["GetManagedPrefixListEntries"].apply(partialParams)
        );
    }

    invokeGetNetworkInsightsAccessScopeAnalysisFindings(partialParams: ToOptional<{
      [K in keyof GetNetworkInsightsAccessScopeAnalysisFindingsRequest & keyof GetNetworkInsightsAccessScopeAnalysisFindingsRequest & keyof GetNetworkInsightsAccessScopeAnalysisFindingsRequest & keyof GetNetworkInsightsAccessScopeAnalysisFindingsRequest & keyof GetNetworkInsightsAccessScopeAnalysisFindingsRequest]: (GetNetworkInsightsAccessScopeAnalysisFindingsRequest & GetNetworkInsightsAccessScopeAnalysisFindingsRequest & GetNetworkInsightsAccessScopeAnalysisFindingsRequest & GetNetworkInsightsAccessScopeAnalysisFindingsRequest & GetNetworkInsightsAccessScopeAnalysisFindingsRequest)[K]
    }>): GetNetworkInsightsAccessScopeAnalysisFindingsResult {
        return this.client.getNetworkInsightsAccessScopeAnalysisFindings(
            this.ops["GetNetworkInsightsAccessScopeAnalysisFindings"].apply(partialParams)
        );
    }

    invokeGetNetworkInsightsAccessScopeContent(partialParams: ToOptional<{
      [K in keyof GetNetworkInsightsAccessScopeContentRequest & keyof GetNetworkInsightsAccessScopeContentRequest & keyof GetNetworkInsightsAccessScopeContentRequest & keyof GetNetworkInsightsAccessScopeContentRequest & keyof GetNetworkInsightsAccessScopeContentRequest]: (GetNetworkInsightsAccessScopeContentRequest & GetNetworkInsightsAccessScopeContentRequest & GetNetworkInsightsAccessScopeContentRequest & GetNetworkInsightsAccessScopeContentRequest & GetNetworkInsightsAccessScopeContentRequest)[K]
    }>): GetNetworkInsightsAccessScopeContentResult {
        return this.client.getNetworkInsightsAccessScopeContent(
            this.ops["GetNetworkInsightsAccessScopeContent"].apply(partialParams)
        );
    }

    invokeGetPasswordData(partialParams: ToOptional<{
      [K in keyof GetPasswordDataRequest & keyof GetPasswordDataRequest & keyof GetPasswordDataRequest & keyof GetPasswordDataRequest & keyof GetPasswordDataRequest]: (GetPasswordDataRequest & GetPasswordDataRequest & GetPasswordDataRequest & GetPasswordDataRequest & GetPasswordDataRequest)[K]
    }>): GetPasswordDataResult {
        return this.client.getPasswordData(
            this.ops["GetPasswordData"].apply(partialParams)
        );
    }

    invokeGetReservedInstancesExchangeQuote(partialParams: ToOptional<{
      [K in keyof GetReservedInstancesExchangeQuoteRequest & keyof GetReservedInstancesExchangeQuoteRequest & keyof GetReservedInstancesExchangeQuoteRequest & keyof GetReservedInstancesExchangeQuoteRequest & keyof GetReservedInstancesExchangeQuoteRequest]: (GetReservedInstancesExchangeQuoteRequest & GetReservedInstancesExchangeQuoteRequest & GetReservedInstancesExchangeQuoteRequest & GetReservedInstancesExchangeQuoteRequest & GetReservedInstancesExchangeQuoteRequest)[K]
    }>): GetReservedInstancesExchangeQuoteResult {
        return this.client.getReservedInstancesExchangeQuote(
            this.ops["GetReservedInstancesExchangeQuote"].apply(partialParams)
        );
    }

    invokeGetSpotPlacementScores(partialParams: ToOptional<{
      [K in keyof GetSpotPlacementScoresRequest & keyof GetSpotPlacementScoresRequest & keyof GetSpotPlacementScoresRequest & keyof GetSpotPlacementScoresRequest & keyof GetSpotPlacementScoresRequest]: (GetSpotPlacementScoresRequest & GetSpotPlacementScoresRequest & GetSpotPlacementScoresRequest & GetSpotPlacementScoresRequest & GetSpotPlacementScoresRequest)[K]
    }>): GetSpotPlacementScoresResult {
        return this.client.getSpotPlacementScores(
            this.ops["GetSpotPlacementScores"].apply(partialParams)
        );
    }

    invokeGetSubnetCidrReservations(partialParams: ToOptional<{
      [K in keyof GetSubnetCidrReservationsRequest & keyof GetSubnetCidrReservationsRequest & keyof GetSubnetCidrReservationsRequest & keyof GetSubnetCidrReservationsRequest & keyof GetSubnetCidrReservationsRequest]: (GetSubnetCidrReservationsRequest & GetSubnetCidrReservationsRequest & GetSubnetCidrReservationsRequest & GetSubnetCidrReservationsRequest & GetSubnetCidrReservationsRequest)[K]
    }>): GetSubnetCidrReservationsResult {
        return this.client.getSubnetCidrReservations(
            this.ops["GetSubnetCidrReservations"].apply(partialParams)
        );
    }

    invokeGetTransitGatewayAttachmentPropagations(partialParams: ToOptional<{
      [K in keyof GetTransitGatewayAttachmentPropagationsRequest & keyof GetTransitGatewayAttachmentPropagationsRequest & keyof GetTransitGatewayAttachmentPropagationsRequest & keyof GetTransitGatewayAttachmentPropagationsRequest & keyof GetTransitGatewayAttachmentPropagationsRequest]: (GetTransitGatewayAttachmentPropagationsRequest & GetTransitGatewayAttachmentPropagationsRequest & GetTransitGatewayAttachmentPropagationsRequest & GetTransitGatewayAttachmentPropagationsRequest & GetTransitGatewayAttachmentPropagationsRequest)[K]
    }>): GetTransitGatewayAttachmentPropagationsResult {
        return this.client.getTransitGatewayAttachmentPropagations(
            this.ops["GetTransitGatewayAttachmentPropagations"].apply(partialParams)
        );
    }

    invokeGetTransitGatewayPrefixListReferences(partialParams: ToOptional<{
      [K in keyof GetTransitGatewayPrefixListReferencesRequest & keyof GetTransitGatewayPrefixListReferencesRequest & keyof GetTransitGatewayPrefixListReferencesRequest & keyof GetTransitGatewayPrefixListReferencesRequest & keyof GetTransitGatewayPrefixListReferencesRequest]: (GetTransitGatewayPrefixListReferencesRequest & GetTransitGatewayPrefixListReferencesRequest & GetTransitGatewayPrefixListReferencesRequest & GetTransitGatewayPrefixListReferencesRequest & GetTransitGatewayPrefixListReferencesRequest)[K]
    }>): GetTransitGatewayPrefixListReferencesResult {
        return this.client.getTransitGatewayPrefixListReferences(
            this.ops["GetTransitGatewayPrefixListReferences"].apply(partialParams)
        );
    }

    invokeGetTransitGatewayRouteTableAssociations(partialParams: ToOptional<{
      [K in keyof GetTransitGatewayRouteTableAssociationsRequest & keyof GetTransitGatewayRouteTableAssociationsRequest & keyof GetTransitGatewayRouteTableAssociationsRequest & keyof GetTransitGatewayRouteTableAssociationsRequest & keyof GetTransitGatewayRouteTableAssociationsRequest]: (GetTransitGatewayRouteTableAssociationsRequest & GetTransitGatewayRouteTableAssociationsRequest & GetTransitGatewayRouteTableAssociationsRequest & GetTransitGatewayRouteTableAssociationsRequest & GetTransitGatewayRouteTableAssociationsRequest)[K]
    }>): GetTransitGatewayRouteTableAssociationsResult {
        return this.client.getTransitGatewayRouteTableAssociations(
            this.ops["GetTransitGatewayRouteTableAssociations"].apply(partialParams)
        );
    }

    invokeGetTransitGatewayRouteTablePropagations(partialParams: ToOptional<{
      [K in keyof GetTransitGatewayRouteTablePropagationsRequest & keyof GetTransitGatewayRouteTablePropagationsRequest & keyof GetTransitGatewayRouteTablePropagationsRequest & keyof GetTransitGatewayRouteTablePropagationsRequest & keyof GetTransitGatewayRouteTablePropagationsRequest]: (GetTransitGatewayRouteTablePropagationsRequest & GetTransitGatewayRouteTablePropagationsRequest & GetTransitGatewayRouteTablePropagationsRequest & GetTransitGatewayRouteTablePropagationsRequest & GetTransitGatewayRouteTablePropagationsRequest)[K]
    }>): GetTransitGatewayRouteTablePropagationsResult {
        return this.client.getTransitGatewayRouteTablePropagations(
            this.ops["GetTransitGatewayRouteTablePropagations"].apply(partialParams)
        );
    }

    invokeGetVpnConnectionDeviceSampleConfiguration(partialParams: ToOptional<{
      [K in keyof GetVpnConnectionDeviceSampleConfigurationRequest & keyof GetVpnConnectionDeviceSampleConfigurationRequest & keyof GetVpnConnectionDeviceSampleConfigurationRequest & keyof GetVpnConnectionDeviceSampleConfigurationRequest & keyof GetVpnConnectionDeviceSampleConfigurationRequest]: (GetVpnConnectionDeviceSampleConfigurationRequest & GetVpnConnectionDeviceSampleConfigurationRequest & GetVpnConnectionDeviceSampleConfigurationRequest & GetVpnConnectionDeviceSampleConfigurationRequest & GetVpnConnectionDeviceSampleConfigurationRequest)[K]
    }>): GetVpnConnectionDeviceSampleConfigurationResult {
        return this.client.getVpnConnectionDeviceSampleConfiguration(
            this.ops["GetVpnConnectionDeviceSampleConfiguration"].apply(partialParams)
        );
    }

    invokeImportClientVpnClientCertificateRevocationList(partialParams: ToOptional<{
      [K in keyof ImportClientVpnClientCertificateRevocationListRequest & keyof ImportClientVpnClientCertificateRevocationListRequest & keyof ImportClientVpnClientCertificateRevocationListRequest & keyof ImportClientVpnClientCertificateRevocationListRequest & keyof ImportClientVpnClientCertificateRevocationListRequest]: (ImportClientVpnClientCertificateRevocationListRequest & ImportClientVpnClientCertificateRevocationListRequest & ImportClientVpnClientCertificateRevocationListRequest & ImportClientVpnClientCertificateRevocationListRequest & ImportClientVpnClientCertificateRevocationListRequest)[K]
    }>): ImportClientVpnClientCertificateRevocationListResult {
        return this.client.importClientVpnClientCertificateRevocationList(
            this.ops["ImportClientVpnClientCertificateRevocationList"].apply(partialParams)
        );
    }

    invokeImportInstance(partialParams: ToOptional<{
      [K in keyof ImportInstanceRequest & keyof ImportInstanceRequest & keyof ImportInstanceRequest & keyof ImportInstanceRequest & keyof ImportInstanceRequest]: (ImportInstanceRequest & ImportInstanceRequest & ImportInstanceRequest & ImportInstanceRequest & ImportInstanceRequest)[K]
    }>): ImportInstanceResult {
        return this.client.importInstance(
            this.ops["ImportInstance"].apply(partialParams)
        );
    }

    invokeImportKeyPair(partialParams: ToOptional<{
      [K in keyof ImportKeyPairRequest & keyof ImportKeyPairRequest & keyof ImportKeyPairRequest & keyof ImportKeyPairRequest & keyof ImportKeyPairRequest]: (ImportKeyPairRequest & ImportKeyPairRequest & ImportKeyPairRequest & ImportKeyPairRequest & ImportKeyPairRequest)[K]
    }>): ImportKeyPairResult {
        return this.client.importKeyPair(
            this.ops["ImportKeyPair"].apply(partialParams)
        );
    }

    invokeImportVolume(partialParams: ToOptional<{
      [K in keyof ImportVolumeRequest & keyof ImportVolumeRequest & keyof ImportVolumeRequest & keyof ImportVolumeRequest & keyof ImportVolumeRequest]: (ImportVolumeRequest & ImportVolumeRequest & ImportVolumeRequest & ImportVolumeRequest & ImportVolumeRequest)[K]
    }>): ImportVolumeResult {
        return this.client.importVolume(
            this.ops["ImportVolume"].apply(partialParams)
        );
    }

    invokeModifyAddressAttribute(partialParams: ToOptional<{
      [K in keyof Omit<ModifyAddressAttributeRequest, "AllocationId"> & keyof ModifyAddressAttributeRequest & keyof ModifyAddressAttributeRequest & keyof ModifyAddressAttributeRequest & keyof ModifyAddressAttributeRequest]: (Omit<ModifyAddressAttributeRequest, "AllocationId"> & ModifyAddressAttributeRequest & ModifyAddressAttributeRequest & ModifyAddressAttributeRequest & ModifyAddressAttributeRequest)[K]
    }>): ModifyAddressAttributeResult {
        return this.client.modifyAddressAttribute(
            this.ops["ModifyAddressAttribute"].apply(partialParams)
        );
    }

    invokeModifyAvailabilityZoneGroup(partialParams: ToOptional<{
      [K in keyof ModifyAvailabilityZoneGroupRequest & keyof ModifyAvailabilityZoneGroupRequest & keyof ModifyAvailabilityZoneGroupRequest & keyof ModifyAvailabilityZoneGroupRequest & keyof ModifyAvailabilityZoneGroupRequest]: (ModifyAvailabilityZoneGroupRequest & ModifyAvailabilityZoneGroupRequest & ModifyAvailabilityZoneGroupRequest & ModifyAvailabilityZoneGroupRequest & ModifyAvailabilityZoneGroupRequest)[K]
    }>): ModifyAvailabilityZoneGroupResult {
        return this.client.modifyAvailabilityZoneGroup(
            this.ops["ModifyAvailabilityZoneGroup"].apply(partialParams)
        );
    }

    invokeModifyCapacityReservation(partialParams: ToOptional<{
      [K in keyof ModifyCapacityReservationRequest & keyof ModifyCapacityReservationRequest & keyof ModifyCapacityReservationRequest & keyof ModifyCapacityReservationRequest & keyof ModifyCapacityReservationRequest]: (ModifyCapacityReservationRequest & ModifyCapacityReservationRequest & ModifyCapacityReservationRequest & ModifyCapacityReservationRequest & ModifyCapacityReservationRequest)[K]
    }>): ModifyCapacityReservationResult {
        return this.client.modifyCapacityReservation(
            this.ops["ModifyCapacityReservation"].apply(partialParams)
        );
    }

    invokeModifyCapacityReservationFleet(partialParams: ToOptional<{
      [K in keyof ModifyCapacityReservationFleetRequest & keyof ModifyCapacityReservationFleetRequest & keyof ModifyCapacityReservationFleetRequest & keyof ModifyCapacityReservationFleetRequest & keyof ModifyCapacityReservationFleetRequest]: (ModifyCapacityReservationFleetRequest & ModifyCapacityReservationFleetRequest & ModifyCapacityReservationFleetRequest & ModifyCapacityReservationFleetRequest & ModifyCapacityReservationFleetRequest)[K]
    }>): ModifyCapacityReservationFleetResult {
        return this.client.modifyCapacityReservationFleet(
            this.ops["ModifyCapacityReservationFleet"].apply(partialParams)
        );
    }

    invokeModifyClientVpnEndpoint(partialParams: ToOptional<{
      [K in keyof ModifyClientVpnEndpointRequest & keyof ModifyClientVpnEndpointRequest & keyof ModifyClientVpnEndpointRequest & keyof ModifyClientVpnEndpointRequest & keyof ModifyClientVpnEndpointRequest]: (ModifyClientVpnEndpointRequest & ModifyClientVpnEndpointRequest & ModifyClientVpnEndpointRequest & ModifyClientVpnEndpointRequest & ModifyClientVpnEndpointRequest)[K]
    }>): ModifyClientVpnEndpointResult {
        return this.client.modifyClientVpnEndpoint(
            this.ops["ModifyClientVpnEndpoint"].apply(partialParams)
        );
    }

    invokeModifyDefaultCreditSpecification(partialParams: ToOptional<{
      [K in keyof ModifyDefaultCreditSpecificationRequest & keyof ModifyDefaultCreditSpecificationRequest & keyof ModifyDefaultCreditSpecificationRequest & keyof ModifyDefaultCreditSpecificationRequest & keyof ModifyDefaultCreditSpecificationRequest]: (ModifyDefaultCreditSpecificationRequest & ModifyDefaultCreditSpecificationRequest & ModifyDefaultCreditSpecificationRequest & ModifyDefaultCreditSpecificationRequest & ModifyDefaultCreditSpecificationRequest)[K]
    }>): ModifyDefaultCreditSpecificationResult {
        return this.client.modifyDefaultCreditSpecification(
            this.ops["ModifyDefaultCreditSpecification"].apply(partialParams)
        );
    }

    invokeModifyEbsDefaultKmsKeyId(partialParams: ToOptional<{
      [K in keyof ModifyEbsDefaultKmsKeyIdRequest & keyof ModifyEbsDefaultKmsKeyIdRequest & keyof ModifyEbsDefaultKmsKeyIdRequest & keyof ModifyEbsDefaultKmsKeyIdRequest & keyof ModifyEbsDefaultKmsKeyIdRequest]: (ModifyEbsDefaultKmsKeyIdRequest & ModifyEbsDefaultKmsKeyIdRequest & ModifyEbsDefaultKmsKeyIdRequest & ModifyEbsDefaultKmsKeyIdRequest & ModifyEbsDefaultKmsKeyIdRequest)[K]
    }>): ModifyEbsDefaultKmsKeyIdResult {
        return this.client.modifyEbsDefaultKmsKeyId(
            this.ops["ModifyEbsDefaultKmsKeyId"].apply(partialParams)
        );
    }

    invokeModifyFleet(partialParams: ToOptional<{
      [K in keyof ModifyFleetRequest & keyof ModifyFleetRequest & keyof ModifyFleetRequest & keyof ModifyFleetRequest & keyof ModifyFleetRequest]: (ModifyFleetRequest & ModifyFleetRequest & ModifyFleetRequest & ModifyFleetRequest & ModifyFleetRequest)[K]
    }>): ModifyFleetResult {
        return this.client.modifyFleet(
            this.ops["ModifyFleet"].apply(partialParams)
        );
    }

    invokeModifyFpgaImageAttribute(partialParams: ToOptional<{
      [K in keyof ModifyFpgaImageAttributeRequest & keyof ModifyFpgaImageAttributeRequest & keyof ModifyFpgaImageAttributeRequest & keyof ModifyFpgaImageAttributeRequest & keyof ModifyFpgaImageAttributeRequest]: (ModifyFpgaImageAttributeRequest & ModifyFpgaImageAttributeRequest & ModifyFpgaImageAttributeRequest & ModifyFpgaImageAttributeRequest & ModifyFpgaImageAttributeRequest)[K]
    }>): ModifyFpgaImageAttributeResult {
        return this.client.modifyFpgaImageAttribute(
            this.ops["ModifyFpgaImageAttribute"].apply(partialParams)
        );
    }

    invokeModifyHosts(partialParams: ToOptional<{
      [K in keyof ModifyHostsRequest & keyof ModifyHostsRequest & keyof ModifyHostsRequest & keyof ModifyHostsRequest & keyof ModifyHostsRequest]: (ModifyHostsRequest & ModifyHostsRequest & ModifyHostsRequest & ModifyHostsRequest & ModifyHostsRequest)[K]
    }>): ModifyHostsResult {
        return this.client.modifyHosts(
            this.ops["ModifyHosts"].apply(partialParams)
        );
    }

    invokeModifyIdFormat(partialParams: ToOptional<{
      [K in keyof ModifyIdFormatRequest & keyof ModifyIdFormatRequest & keyof ModifyIdFormatRequest & keyof ModifyIdFormatRequest & keyof ModifyIdFormatRequest]: (ModifyIdFormatRequest & ModifyIdFormatRequest & ModifyIdFormatRequest & ModifyIdFormatRequest & ModifyIdFormatRequest)[K]
    }>): void {
        return this.client.modifyIdFormat(
            this.ops["ModifyIdFormat"].apply(partialParams)
        );
    }

    invokeModifyIdentityIdFormat(partialParams: ToOptional<{
      [K in keyof ModifyIdentityIdFormatRequest & keyof ModifyIdentityIdFormatRequest & keyof ModifyIdentityIdFormatRequest & keyof ModifyIdentityIdFormatRequest & keyof ModifyIdentityIdFormatRequest]: (ModifyIdentityIdFormatRequest & ModifyIdentityIdFormatRequest & ModifyIdentityIdFormatRequest & ModifyIdentityIdFormatRequest & ModifyIdentityIdFormatRequest)[K]
    }>): void {
        return this.client.modifyIdentityIdFormat(
            this.ops["ModifyIdentityIdFormat"].apply(partialParams)
        );
    }

    invokeModifyImageAttribute(partialParams: ToOptional<{
      [K in keyof ModifyImageAttributeRequest & keyof ModifyImageAttributeRequest & keyof ModifyImageAttributeRequest & keyof ModifyImageAttributeRequest & keyof ModifyImageAttributeRequest]: (ModifyImageAttributeRequest & ModifyImageAttributeRequest & ModifyImageAttributeRequest & ModifyImageAttributeRequest & ModifyImageAttributeRequest)[K]
    }>): void {
        return this.client.modifyImageAttribute(
            this.ops["ModifyImageAttribute"].apply(partialParams)
        );
    }

    invokeModifyInstanceAttribute(partialParams: ToOptional<{
      [K in keyof ModifyInstanceAttributeRequest & keyof Omit<ModifyInstanceAttributeRequest, "InstanceId"> & keyof ModifyInstanceAttributeRequest & keyof ModifyInstanceAttributeRequest & keyof ModifyInstanceAttributeRequest]: (ModifyInstanceAttributeRequest & Omit<ModifyInstanceAttributeRequest, "InstanceId"> & ModifyInstanceAttributeRequest & ModifyInstanceAttributeRequest & ModifyInstanceAttributeRequest)[K]
    }>): void {
        return this.client.modifyInstanceAttribute(
            this.ops["ModifyInstanceAttribute"].apply(partialParams)
        );
    }

    invokeModifyInstanceCapacityReservationAttributes(partialParams: ToOptional<{
      [K in keyof ModifyInstanceCapacityReservationAttributesRequest & keyof Omit<ModifyInstanceCapacityReservationAttributesRequest, "InstanceId"> & keyof ModifyInstanceCapacityReservationAttributesRequest & keyof ModifyInstanceCapacityReservationAttributesRequest & keyof ModifyInstanceCapacityReservationAttributesRequest]: (ModifyInstanceCapacityReservationAttributesRequest & Omit<ModifyInstanceCapacityReservationAttributesRequest, "InstanceId"> & ModifyInstanceCapacityReservationAttributesRequest & ModifyInstanceCapacityReservationAttributesRequest & ModifyInstanceCapacityReservationAttributesRequest)[K]
    }>): ModifyInstanceCapacityReservationAttributesResult {
        return this.client.modifyInstanceCapacityReservationAttributes(
            this.ops["ModifyInstanceCapacityReservationAttributes"].apply(partialParams)
        );
    }

    invokeModifyInstanceCreditSpecification(partialParams: ToOptional<{
      [K in keyof ModifyInstanceCreditSpecificationRequest & keyof ModifyInstanceCreditSpecificationRequest & keyof ModifyInstanceCreditSpecificationRequest & keyof ModifyInstanceCreditSpecificationRequest & keyof ModifyInstanceCreditSpecificationRequest]: (ModifyInstanceCreditSpecificationRequest & ModifyInstanceCreditSpecificationRequest & ModifyInstanceCreditSpecificationRequest & ModifyInstanceCreditSpecificationRequest & ModifyInstanceCreditSpecificationRequest)[K]
    }>): ModifyInstanceCreditSpecificationResult {
        return this.client.modifyInstanceCreditSpecification(
            this.ops["ModifyInstanceCreditSpecification"].apply(partialParams)
        );
    }

    invokeModifyInstanceEventStartTime(partialParams: ToOptional<{
      [K in keyof ModifyInstanceEventStartTimeRequest & keyof Omit<ModifyInstanceEventStartTimeRequest, "InstanceId"> & keyof ModifyInstanceEventStartTimeRequest & keyof ModifyInstanceEventStartTimeRequest & keyof ModifyInstanceEventStartTimeRequest]: (ModifyInstanceEventStartTimeRequest & Omit<ModifyInstanceEventStartTimeRequest, "InstanceId"> & ModifyInstanceEventStartTimeRequest & ModifyInstanceEventStartTimeRequest & ModifyInstanceEventStartTimeRequest)[K]
    }>): ModifyInstanceEventStartTimeResult {
        return this.client.modifyInstanceEventStartTime(
            this.ops["ModifyInstanceEventStartTime"].apply(partialParams)
        );
    }

    invokeModifyInstanceEventWindow(partialParams: ToOptional<{
      [K in keyof ModifyInstanceEventWindowRequest & keyof ModifyInstanceEventWindowRequest & keyof ModifyInstanceEventWindowRequest & keyof ModifyInstanceEventWindowRequest & keyof ModifyInstanceEventWindowRequest]: (ModifyInstanceEventWindowRequest & ModifyInstanceEventWindowRequest & ModifyInstanceEventWindowRequest & ModifyInstanceEventWindowRequest & ModifyInstanceEventWindowRequest)[K]
    }>): ModifyInstanceEventWindowResult {
        return this.client.modifyInstanceEventWindow(
            this.ops["ModifyInstanceEventWindow"].apply(partialParams)
        );
    }

    invokeModifyInstanceMetadataOptions(partialParams: ToOptional<{
      [K in keyof ModifyInstanceMetadataOptionsRequest & keyof Omit<ModifyInstanceMetadataOptionsRequest, "InstanceId"> & keyof ModifyInstanceMetadataOptionsRequest & keyof ModifyInstanceMetadataOptionsRequest & keyof ModifyInstanceMetadataOptionsRequest]: (ModifyInstanceMetadataOptionsRequest & Omit<ModifyInstanceMetadataOptionsRequest, "InstanceId"> & ModifyInstanceMetadataOptionsRequest & ModifyInstanceMetadataOptionsRequest & ModifyInstanceMetadataOptionsRequest)[K]
    }>): ModifyInstanceMetadataOptionsResult {
        return this.client.modifyInstanceMetadataOptions(
            this.ops["ModifyInstanceMetadataOptions"].apply(partialParams)
        );
    }

    invokeModifyInstancePlacement(partialParams: ToOptional<{
      [K in keyof ModifyInstancePlacementRequest & keyof Omit<ModifyInstancePlacementRequest, "InstanceId"> & keyof ModifyInstancePlacementRequest & keyof ModifyInstancePlacementRequest & keyof ModifyInstancePlacementRequest]: (ModifyInstancePlacementRequest & Omit<ModifyInstancePlacementRequest, "InstanceId"> & ModifyInstancePlacementRequest & ModifyInstancePlacementRequest & ModifyInstancePlacementRequest)[K]
    }>): ModifyInstancePlacementResult {
        return this.client.modifyInstancePlacement(
            this.ops["ModifyInstancePlacement"].apply(partialParams)
        );
    }

    invokeModifyIpam(partialParams: ToOptional<{
      [K in keyof ModifyIpamRequest & keyof ModifyIpamRequest & keyof ModifyIpamRequest & keyof ModifyIpamRequest & keyof ModifyIpamRequest]: (ModifyIpamRequest & ModifyIpamRequest & ModifyIpamRequest & ModifyIpamRequest & ModifyIpamRequest)[K]
    }>): ModifyIpamResult {
        return this.client.modifyIpam(
            this.ops["ModifyIpam"].apply(partialParams)
        );
    }

    invokeModifyIpamPool(partialParams: ToOptional<{
      [K in keyof ModifyIpamPoolRequest & keyof ModifyIpamPoolRequest & keyof ModifyIpamPoolRequest & keyof ModifyIpamPoolRequest & keyof ModifyIpamPoolRequest]: (ModifyIpamPoolRequest & ModifyIpamPoolRequest & ModifyIpamPoolRequest & ModifyIpamPoolRequest & ModifyIpamPoolRequest)[K]
    }>): ModifyIpamPoolResult {
        return this.client.modifyIpamPool(
            this.ops["ModifyIpamPool"].apply(partialParams)
        );
    }

    invokeModifyIpamResourceCidr(partialParams: ToOptional<{
      [K in keyof ModifyIpamResourceCidrRequest & keyof ModifyIpamResourceCidrRequest & keyof ModifyIpamResourceCidrRequest & keyof ModifyIpamResourceCidrRequest & keyof ModifyIpamResourceCidrRequest]: (ModifyIpamResourceCidrRequest & ModifyIpamResourceCidrRequest & ModifyIpamResourceCidrRequest & ModifyIpamResourceCidrRequest & ModifyIpamResourceCidrRequest)[K]
    }>): ModifyIpamResourceCidrResult {
        return this.client.modifyIpamResourceCidr(
            this.ops["ModifyIpamResourceCidr"].apply(partialParams)
        );
    }

    invokeModifyIpamScope(partialParams: ToOptional<{
      [K in keyof ModifyIpamScopeRequest & keyof ModifyIpamScopeRequest & keyof ModifyIpamScopeRequest & keyof ModifyIpamScopeRequest & keyof ModifyIpamScopeRequest]: (ModifyIpamScopeRequest & ModifyIpamScopeRequest & ModifyIpamScopeRequest & ModifyIpamScopeRequest & ModifyIpamScopeRequest)[K]
    }>): ModifyIpamScopeResult {
        return this.client.modifyIpamScope(
            this.ops["ModifyIpamScope"].apply(partialParams)
        );
    }

    invokeModifyManagedPrefixList(partialParams: ToOptional<{
      [K in keyof ModifyManagedPrefixListRequest & keyof ModifyManagedPrefixListRequest & keyof ModifyManagedPrefixListRequest & keyof ModifyManagedPrefixListRequest & keyof ModifyManagedPrefixListRequest]: (ModifyManagedPrefixListRequest & ModifyManagedPrefixListRequest & ModifyManagedPrefixListRequest & ModifyManagedPrefixListRequest & ModifyManagedPrefixListRequest)[K]
    }>): ModifyManagedPrefixListResult {
        return this.client.modifyManagedPrefixList(
            this.ops["ModifyManagedPrefixList"].apply(partialParams)
        );
    }

    invokeModifyNetworkInterfaceAttribute(partialParams: ToOptional<{
      [K in keyof ModifyNetworkInterfaceAttributeRequest & keyof ModifyNetworkInterfaceAttributeRequest & keyof ModifyNetworkInterfaceAttributeRequest & keyof ModifyNetworkInterfaceAttributeRequest & keyof ModifyNetworkInterfaceAttributeRequest]: (ModifyNetworkInterfaceAttributeRequest & ModifyNetworkInterfaceAttributeRequest & ModifyNetworkInterfaceAttributeRequest & ModifyNetworkInterfaceAttributeRequest & ModifyNetworkInterfaceAttributeRequest)[K]
    }>): void {
        return this.client.modifyNetworkInterfaceAttribute(
            this.ops["ModifyNetworkInterfaceAttribute"].apply(partialParams)
        );
    }

    invokeModifyReservedInstances(partialParams: ToOptional<{
      [K in keyof ModifyReservedInstancesRequest & keyof ModifyReservedInstancesRequest & keyof ModifyReservedInstancesRequest & keyof ModifyReservedInstancesRequest & keyof ModifyReservedInstancesRequest]: (ModifyReservedInstancesRequest & ModifyReservedInstancesRequest & ModifyReservedInstancesRequest & ModifyReservedInstancesRequest & ModifyReservedInstancesRequest)[K]
    }>): ModifyReservedInstancesResult {
        return this.client.modifyReservedInstances(
            this.ops["ModifyReservedInstances"].apply(partialParams)
        );
    }

    invokeModifySecurityGroupRules(partialParams: ToOptional<{
      [K in keyof ModifySecurityGroupRulesRequest & keyof ModifySecurityGroupRulesRequest & keyof ModifySecurityGroupRulesRequest & keyof ModifySecurityGroupRulesRequest & keyof ModifySecurityGroupRulesRequest]: (ModifySecurityGroupRulesRequest & ModifySecurityGroupRulesRequest & ModifySecurityGroupRulesRequest & ModifySecurityGroupRulesRequest & ModifySecurityGroupRulesRequest)[K]
    }>): ModifySecurityGroupRulesResult {
        return this.client.modifySecurityGroupRules(
            this.ops["ModifySecurityGroupRules"].apply(partialParams)
        );
    }

    invokeModifySnapshotAttribute(partialParams: ToOptional<{
      [K in keyof ModifySnapshotAttributeRequest & keyof ModifySnapshotAttributeRequest & keyof ModifySnapshotAttributeRequest & keyof ModifySnapshotAttributeRequest & keyof ModifySnapshotAttributeRequest]: (ModifySnapshotAttributeRequest & ModifySnapshotAttributeRequest & ModifySnapshotAttributeRequest & ModifySnapshotAttributeRequest & ModifySnapshotAttributeRequest)[K]
    }>): void {
        return this.client.modifySnapshotAttribute(
            this.ops["ModifySnapshotAttribute"].apply(partialParams)
        );
    }

    invokeModifySnapshotTier(partialParams: ToOptional<{
      [K in keyof ModifySnapshotTierRequest & keyof ModifySnapshotTierRequest & keyof ModifySnapshotTierRequest & keyof ModifySnapshotTierRequest & keyof ModifySnapshotTierRequest]: (ModifySnapshotTierRequest & ModifySnapshotTierRequest & ModifySnapshotTierRequest & ModifySnapshotTierRequest & ModifySnapshotTierRequest)[K]
    }>): ModifySnapshotTierResult {
        return this.client.modifySnapshotTier(
            this.ops["ModifySnapshotTier"].apply(partialParams)
        );
    }

    invokeModifySpotFleetRequest(partialParams: ToOptional<{
      [K in keyof ModifySpotFleetRequestRequest & keyof ModifySpotFleetRequestRequest & keyof ModifySpotFleetRequestRequest & keyof ModifySpotFleetRequestRequest & keyof ModifySpotFleetRequestRequest]: (ModifySpotFleetRequestRequest & ModifySpotFleetRequestRequest & ModifySpotFleetRequestRequest & ModifySpotFleetRequestRequest & ModifySpotFleetRequestRequest)[K]
    }>): ModifySpotFleetRequestResponse {
        return this.client.modifySpotFleetRequest(
            this.ops["ModifySpotFleetRequest"].apply(partialParams)
        );
    }

    invokeModifySubnetAttribute(partialParams: ToOptional<{
      [K in keyof ModifySubnetAttributeRequest & keyof ModifySubnetAttributeRequest & keyof ModifySubnetAttributeRequest & keyof ModifySubnetAttributeRequest & keyof ModifySubnetAttributeRequest]: (ModifySubnetAttributeRequest & ModifySubnetAttributeRequest & ModifySubnetAttributeRequest & ModifySubnetAttributeRequest & ModifySubnetAttributeRequest)[K]
    }>): void {
        return this.client.modifySubnetAttribute(
            this.ops["ModifySubnetAttribute"].apply(partialParams)
        );
    }

    invokeModifyTrafficMirrorFilterNetworkServices(partialParams: ToOptional<{
      [K in keyof ModifyTrafficMirrorFilterNetworkServicesRequest & keyof ModifyTrafficMirrorFilterNetworkServicesRequest & keyof ModifyTrafficMirrorFilterNetworkServicesRequest & keyof ModifyTrafficMirrorFilterNetworkServicesRequest & keyof ModifyTrafficMirrorFilterNetworkServicesRequest]: (ModifyTrafficMirrorFilterNetworkServicesRequest & ModifyTrafficMirrorFilterNetworkServicesRequest & ModifyTrafficMirrorFilterNetworkServicesRequest & ModifyTrafficMirrorFilterNetworkServicesRequest & ModifyTrafficMirrorFilterNetworkServicesRequest)[K]
    }>): ModifyTrafficMirrorFilterNetworkServicesResult {
        return this.client.modifyTrafficMirrorFilterNetworkServices(
            this.ops["ModifyTrafficMirrorFilterNetworkServices"].apply(partialParams)
        );
    }

    invokeModifyTrafficMirrorFilterRule(partialParams: ToOptional<{
      [K in keyof ModifyTrafficMirrorFilterRuleRequest & keyof ModifyTrafficMirrorFilterRuleRequest & keyof ModifyTrafficMirrorFilterRuleRequest & keyof ModifyTrafficMirrorFilterRuleRequest & keyof ModifyTrafficMirrorFilterRuleRequest]: (ModifyTrafficMirrorFilterRuleRequest & ModifyTrafficMirrorFilterRuleRequest & ModifyTrafficMirrorFilterRuleRequest & ModifyTrafficMirrorFilterRuleRequest & ModifyTrafficMirrorFilterRuleRequest)[K]
    }>): ModifyTrafficMirrorFilterRuleResult {
        return this.client.modifyTrafficMirrorFilterRule(
            this.ops["ModifyTrafficMirrorFilterRule"].apply(partialParams)
        );
    }

    invokeModifyTrafficMirrorSession(partialParams: ToOptional<{
      [K in keyof ModifyTrafficMirrorSessionRequest & keyof ModifyTrafficMirrorSessionRequest & keyof ModifyTrafficMirrorSessionRequest & keyof ModifyTrafficMirrorSessionRequest & keyof ModifyTrafficMirrorSessionRequest]: (ModifyTrafficMirrorSessionRequest & ModifyTrafficMirrorSessionRequest & ModifyTrafficMirrorSessionRequest & ModifyTrafficMirrorSessionRequest & ModifyTrafficMirrorSessionRequest)[K]
    }>): ModifyTrafficMirrorSessionResult {
        return this.client.modifyTrafficMirrorSession(
            this.ops["ModifyTrafficMirrorSession"].apply(partialParams)
        );
    }

    invokeModifyTransitGateway(partialParams: ToOptional<{
      [K in keyof ModifyTransitGatewayRequest & keyof ModifyTransitGatewayRequest & keyof ModifyTransitGatewayRequest & keyof ModifyTransitGatewayRequest & keyof ModifyTransitGatewayRequest]: (ModifyTransitGatewayRequest & ModifyTransitGatewayRequest & ModifyTransitGatewayRequest & ModifyTransitGatewayRequest & ModifyTransitGatewayRequest)[K]
    }>): ModifyTransitGatewayResult {
        return this.client.modifyTransitGateway(
            this.ops["ModifyTransitGateway"].apply(partialParams)
        );
    }

    invokeModifyTransitGatewayPrefixListReference(partialParams: ToOptional<{
      [K in keyof ModifyTransitGatewayPrefixListReferenceRequest & keyof ModifyTransitGatewayPrefixListReferenceRequest & keyof ModifyTransitGatewayPrefixListReferenceRequest & keyof ModifyTransitGatewayPrefixListReferenceRequest & keyof ModifyTransitGatewayPrefixListReferenceRequest]: (ModifyTransitGatewayPrefixListReferenceRequest & ModifyTransitGatewayPrefixListReferenceRequest & ModifyTransitGatewayPrefixListReferenceRequest & ModifyTransitGatewayPrefixListReferenceRequest & ModifyTransitGatewayPrefixListReferenceRequest)[K]
    }>): ModifyTransitGatewayPrefixListReferenceResult {
        return this.client.modifyTransitGatewayPrefixListReference(
            this.ops["ModifyTransitGatewayPrefixListReference"].apply(partialParams)
        );
    }

    invokeModifyTransitGatewayVpcAttachment(partialParams: ToOptional<{
      [K in keyof ModifyTransitGatewayVpcAttachmentRequest & keyof ModifyTransitGatewayVpcAttachmentRequest & keyof ModifyTransitGatewayVpcAttachmentRequest & keyof ModifyTransitGatewayVpcAttachmentRequest & keyof ModifyTransitGatewayVpcAttachmentRequest]: (ModifyTransitGatewayVpcAttachmentRequest & ModifyTransitGatewayVpcAttachmentRequest & ModifyTransitGatewayVpcAttachmentRequest & ModifyTransitGatewayVpcAttachmentRequest & ModifyTransitGatewayVpcAttachmentRequest)[K]
    }>): ModifyTransitGatewayVpcAttachmentResult {
        return this.client.modifyTransitGatewayVpcAttachment(
            this.ops["ModifyTransitGatewayVpcAttachment"].apply(partialParams)
        );
    }

    invokeModifyVolume(partialParams: ToOptional<{
      [K in keyof ModifyVolumeRequest & keyof ModifyVolumeRequest & keyof ModifyVolumeRequest & keyof ModifyVolumeRequest & keyof ModifyVolumeRequest]: (ModifyVolumeRequest & ModifyVolumeRequest & ModifyVolumeRequest & ModifyVolumeRequest & ModifyVolumeRequest)[K]
    }>): ModifyVolumeResult {
        return this.client.modifyVolume(
            this.ops["ModifyVolume"].apply(partialParams)
        );
    }

    invokeModifyVolumeAttribute(partialParams: ToOptional<{
      [K in keyof ModifyVolumeAttributeRequest & keyof ModifyVolumeAttributeRequest & keyof ModifyVolumeAttributeRequest & keyof ModifyVolumeAttributeRequest & keyof ModifyVolumeAttributeRequest]: (ModifyVolumeAttributeRequest & ModifyVolumeAttributeRequest & ModifyVolumeAttributeRequest & ModifyVolumeAttributeRequest & ModifyVolumeAttributeRequest)[K]
    }>): void {
        return this.client.modifyVolumeAttribute(
            this.ops["ModifyVolumeAttribute"].apply(partialParams)
        );
    }

    invokeModifyVpcAttribute(partialParams: ToOptional<{
      [K in keyof ModifyVpcAttributeRequest & keyof ModifyVpcAttributeRequest & keyof ModifyVpcAttributeRequest & keyof ModifyVpcAttributeRequest & keyof ModifyVpcAttributeRequest]: (ModifyVpcAttributeRequest & ModifyVpcAttributeRequest & ModifyVpcAttributeRequest & ModifyVpcAttributeRequest & ModifyVpcAttributeRequest)[K]
    }>): void {
        return this.client.modifyVpcAttribute(
            this.ops["ModifyVpcAttribute"].apply(partialParams)
        );
    }

    invokeModifyVpcEndpoint(partialParams: ToOptional<{
      [K in keyof ModifyVpcEndpointRequest & keyof ModifyVpcEndpointRequest & keyof ModifyVpcEndpointRequest & keyof ModifyVpcEndpointRequest & keyof ModifyVpcEndpointRequest]: (ModifyVpcEndpointRequest & ModifyVpcEndpointRequest & ModifyVpcEndpointRequest & ModifyVpcEndpointRequest & ModifyVpcEndpointRequest)[K]
    }>): ModifyVpcEndpointResult {
        return this.client.modifyVpcEndpoint(
            this.ops["ModifyVpcEndpoint"].apply(partialParams)
        );
    }

    invokeModifyVpcEndpointConnectionNotification(partialParams: ToOptional<{
      [K in keyof ModifyVpcEndpointConnectionNotificationRequest & keyof ModifyVpcEndpointConnectionNotificationRequest & keyof ModifyVpcEndpointConnectionNotificationRequest & keyof ModifyVpcEndpointConnectionNotificationRequest & keyof ModifyVpcEndpointConnectionNotificationRequest]: (ModifyVpcEndpointConnectionNotificationRequest & ModifyVpcEndpointConnectionNotificationRequest & ModifyVpcEndpointConnectionNotificationRequest & ModifyVpcEndpointConnectionNotificationRequest & ModifyVpcEndpointConnectionNotificationRequest)[K]
    }>): ModifyVpcEndpointConnectionNotificationResult {
        return this.client.modifyVpcEndpointConnectionNotification(
            this.ops["ModifyVpcEndpointConnectionNotification"].apply(partialParams)
        );
    }

    invokeModifyVpcEndpointServiceConfiguration(partialParams: ToOptional<{
      [K in keyof ModifyVpcEndpointServiceConfigurationRequest & keyof ModifyVpcEndpointServiceConfigurationRequest & keyof ModifyVpcEndpointServiceConfigurationRequest & keyof ModifyVpcEndpointServiceConfigurationRequest & keyof ModifyVpcEndpointServiceConfigurationRequest]: (ModifyVpcEndpointServiceConfigurationRequest & ModifyVpcEndpointServiceConfigurationRequest & ModifyVpcEndpointServiceConfigurationRequest & ModifyVpcEndpointServiceConfigurationRequest & ModifyVpcEndpointServiceConfigurationRequest)[K]
    }>): ModifyVpcEndpointServiceConfigurationResult {
        return this.client.modifyVpcEndpointServiceConfiguration(
            this.ops["ModifyVpcEndpointServiceConfiguration"].apply(partialParams)
        );
    }

    invokeModifyVpcEndpointServicePayerResponsibility(partialParams: ToOptional<{
      [K in keyof ModifyVpcEndpointServicePayerResponsibilityRequest & keyof ModifyVpcEndpointServicePayerResponsibilityRequest & keyof ModifyVpcEndpointServicePayerResponsibilityRequest & keyof ModifyVpcEndpointServicePayerResponsibilityRequest & keyof ModifyVpcEndpointServicePayerResponsibilityRequest]: (ModifyVpcEndpointServicePayerResponsibilityRequest & ModifyVpcEndpointServicePayerResponsibilityRequest & ModifyVpcEndpointServicePayerResponsibilityRequest & ModifyVpcEndpointServicePayerResponsibilityRequest & ModifyVpcEndpointServicePayerResponsibilityRequest)[K]
    }>): ModifyVpcEndpointServicePayerResponsibilityResult {
        return this.client.modifyVpcEndpointServicePayerResponsibility(
            this.ops["ModifyVpcEndpointServicePayerResponsibility"].apply(partialParams)
        );
    }

    invokeModifyVpcEndpointServicePermissions(partialParams: ToOptional<{
      [K in keyof ModifyVpcEndpointServicePermissionsRequest & keyof ModifyVpcEndpointServicePermissionsRequest & keyof ModifyVpcEndpointServicePermissionsRequest & keyof ModifyVpcEndpointServicePermissionsRequest & keyof ModifyVpcEndpointServicePermissionsRequest]: (ModifyVpcEndpointServicePermissionsRequest & ModifyVpcEndpointServicePermissionsRequest & ModifyVpcEndpointServicePermissionsRequest & ModifyVpcEndpointServicePermissionsRequest & ModifyVpcEndpointServicePermissionsRequest)[K]
    }>): ModifyVpcEndpointServicePermissionsResult {
        return this.client.modifyVpcEndpointServicePermissions(
            this.ops["ModifyVpcEndpointServicePermissions"].apply(partialParams)
        );
    }

    invokeModifyVpcPeeringConnectionOptions(partialParams: ToOptional<{
      [K in keyof ModifyVpcPeeringConnectionOptionsRequest & keyof ModifyVpcPeeringConnectionOptionsRequest & keyof ModifyVpcPeeringConnectionOptionsRequest & keyof ModifyVpcPeeringConnectionOptionsRequest & keyof ModifyVpcPeeringConnectionOptionsRequest]: (ModifyVpcPeeringConnectionOptionsRequest & ModifyVpcPeeringConnectionOptionsRequest & ModifyVpcPeeringConnectionOptionsRequest & ModifyVpcPeeringConnectionOptionsRequest & ModifyVpcPeeringConnectionOptionsRequest)[K]
    }>): ModifyVpcPeeringConnectionOptionsResult {
        return this.client.modifyVpcPeeringConnectionOptions(
            this.ops["ModifyVpcPeeringConnectionOptions"].apply(partialParams)
        );
    }

    invokeModifyVpcTenancy(partialParams: ToOptional<{
      [K in keyof ModifyVpcTenancyRequest & keyof ModifyVpcTenancyRequest & keyof ModifyVpcTenancyRequest & keyof ModifyVpcTenancyRequest & keyof ModifyVpcTenancyRequest]: (ModifyVpcTenancyRequest & ModifyVpcTenancyRequest & ModifyVpcTenancyRequest & ModifyVpcTenancyRequest & ModifyVpcTenancyRequest)[K]
    }>): ModifyVpcTenancyResult {
        return this.client.modifyVpcTenancy(
            this.ops["ModifyVpcTenancy"].apply(partialParams)
        );
    }

    invokeModifyVpnConnection(partialParams: ToOptional<{
      [K in keyof ModifyVpnConnectionRequest & keyof ModifyVpnConnectionRequest & keyof ModifyVpnConnectionRequest & keyof ModifyVpnConnectionRequest & keyof ModifyVpnConnectionRequest]: (ModifyVpnConnectionRequest & ModifyVpnConnectionRequest & ModifyVpnConnectionRequest & ModifyVpnConnectionRequest & ModifyVpnConnectionRequest)[K]
    }>): ModifyVpnConnectionResult {
        return this.client.modifyVpnConnection(
            this.ops["ModifyVpnConnection"].apply(partialParams)
        );
    }

    invokeModifyVpnConnectionOptions(partialParams: ToOptional<{
      [K in keyof ModifyVpnConnectionOptionsRequest & keyof ModifyVpnConnectionOptionsRequest & keyof ModifyVpnConnectionOptionsRequest & keyof ModifyVpnConnectionOptionsRequest & keyof ModifyVpnConnectionOptionsRequest]: (ModifyVpnConnectionOptionsRequest & ModifyVpnConnectionOptionsRequest & ModifyVpnConnectionOptionsRequest & ModifyVpnConnectionOptionsRequest & ModifyVpnConnectionOptionsRequest)[K]
    }>): ModifyVpnConnectionOptionsResult {
        return this.client.modifyVpnConnectionOptions(
            this.ops["ModifyVpnConnectionOptions"].apply(partialParams)
        );
    }

    invokeModifyVpnTunnelCertificate(partialParams: ToOptional<{
      [K in keyof ModifyVpnTunnelCertificateRequest & keyof ModifyVpnTunnelCertificateRequest & keyof ModifyVpnTunnelCertificateRequest & keyof ModifyVpnTunnelCertificateRequest & keyof ModifyVpnTunnelCertificateRequest]: (ModifyVpnTunnelCertificateRequest & ModifyVpnTunnelCertificateRequest & ModifyVpnTunnelCertificateRequest & ModifyVpnTunnelCertificateRequest & ModifyVpnTunnelCertificateRequest)[K]
    }>): ModifyVpnTunnelCertificateResult {
        return this.client.modifyVpnTunnelCertificate(
            this.ops["ModifyVpnTunnelCertificate"].apply(partialParams)
        );
    }

    invokeModifyVpnTunnelOptions(partialParams: ToOptional<{
      [K in keyof ModifyVpnTunnelOptionsRequest & keyof ModifyVpnTunnelOptionsRequest & keyof ModifyVpnTunnelOptionsRequest & keyof ModifyVpnTunnelOptionsRequest & keyof ModifyVpnTunnelOptionsRequest]: (ModifyVpnTunnelOptionsRequest & ModifyVpnTunnelOptionsRequest & ModifyVpnTunnelOptionsRequest & ModifyVpnTunnelOptionsRequest & ModifyVpnTunnelOptionsRequest)[K]
    }>): ModifyVpnTunnelOptionsResult {
        return this.client.modifyVpnTunnelOptions(
            this.ops["ModifyVpnTunnelOptions"].apply(partialParams)
        );
    }

    invokeMonitorInstances(partialParams: ToOptional<{
      [K in keyof MonitorInstancesRequest & keyof MonitorInstancesRequest & keyof MonitorInstancesRequest & keyof MonitorInstancesRequest & keyof MonitorInstancesRequest]: (MonitorInstancesRequest & MonitorInstancesRequest & MonitorInstancesRequest & MonitorInstancesRequest & MonitorInstancesRequest)[K]
    }>): MonitorInstancesResult {
        return this.client.monitorInstances(
            this.ops["MonitorInstances"].apply(partialParams)
        );
    }

    invokeMoveAddressToVpc(partialParams: ToOptional<{
      [K in keyof MoveAddressToVpcRequest & keyof MoveAddressToVpcRequest & keyof MoveAddressToVpcRequest & keyof MoveAddressToVpcRequest & keyof MoveAddressToVpcRequest]: (MoveAddressToVpcRequest & MoveAddressToVpcRequest & MoveAddressToVpcRequest & MoveAddressToVpcRequest & MoveAddressToVpcRequest)[K]
    }>): MoveAddressToVpcResult {
        return this.client.moveAddressToVpc(
            this.ops["MoveAddressToVpc"].apply(partialParams)
        );
    }

    invokeMoveByoipCidrToIpam(partialParams: ToOptional<{
      [K in keyof MoveByoipCidrToIpamRequest & keyof MoveByoipCidrToIpamRequest & keyof MoveByoipCidrToIpamRequest & keyof MoveByoipCidrToIpamRequest & keyof MoveByoipCidrToIpamRequest]: (MoveByoipCidrToIpamRequest & MoveByoipCidrToIpamRequest & MoveByoipCidrToIpamRequest & MoveByoipCidrToIpamRequest & MoveByoipCidrToIpamRequest)[K]
    }>): MoveByoipCidrToIpamResult {
        return this.client.moveByoipCidrToIpam(
            this.ops["MoveByoipCidrToIpam"].apply(partialParams)
        );
    }

    invokeProvisionByoipCidr(partialParams: ToOptional<{
      [K in keyof ProvisionByoipCidrRequest & keyof ProvisionByoipCidrRequest & keyof ProvisionByoipCidrRequest & keyof ProvisionByoipCidrRequest & keyof ProvisionByoipCidrRequest]: (ProvisionByoipCidrRequest & ProvisionByoipCidrRequest & ProvisionByoipCidrRequest & ProvisionByoipCidrRequest & ProvisionByoipCidrRequest)[K]
    }>): ProvisionByoipCidrResult {
        return this.client.provisionByoipCidr(
            this.ops["ProvisionByoipCidr"].apply(partialParams)
        );
    }

    invokeProvisionIpamPoolCidr(partialParams: ToOptional<{
      [K in keyof ProvisionIpamPoolCidrRequest & keyof ProvisionIpamPoolCidrRequest & keyof ProvisionIpamPoolCidrRequest & keyof ProvisionIpamPoolCidrRequest & keyof ProvisionIpamPoolCidrRequest]: (ProvisionIpamPoolCidrRequest & ProvisionIpamPoolCidrRequest & ProvisionIpamPoolCidrRequest & ProvisionIpamPoolCidrRequest & ProvisionIpamPoolCidrRequest)[K]
    }>): ProvisionIpamPoolCidrResult {
        return this.client.provisionIpamPoolCidr(
            this.ops["ProvisionIpamPoolCidr"].apply(partialParams)
        );
    }

    invokeProvisionPublicIpv4PoolCidr(partialParams: ToOptional<{
      [K in keyof ProvisionPublicIpv4PoolCidrRequest & keyof ProvisionPublicIpv4PoolCidrRequest & keyof ProvisionPublicIpv4PoolCidrRequest & keyof ProvisionPublicIpv4PoolCidrRequest & keyof ProvisionPublicIpv4PoolCidrRequest]: (ProvisionPublicIpv4PoolCidrRequest & ProvisionPublicIpv4PoolCidrRequest & ProvisionPublicIpv4PoolCidrRequest & ProvisionPublicIpv4PoolCidrRequest & ProvisionPublicIpv4PoolCidrRequest)[K]
    }>): ProvisionPublicIpv4PoolCidrResult {
        return this.client.provisionPublicIpv4PoolCidr(
            this.ops["ProvisionPublicIpv4PoolCidr"].apply(partialParams)
        );
    }

    invokePurchaseHostReservation(partialParams: ToOptional<{
      [K in keyof PurchaseHostReservationRequest & keyof PurchaseHostReservationRequest & keyof PurchaseHostReservationRequest & keyof PurchaseHostReservationRequest & keyof PurchaseHostReservationRequest]: (PurchaseHostReservationRequest & PurchaseHostReservationRequest & PurchaseHostReservationRequest & PurchaseHostReservationRequest & PurchaseHostReservationRequest)[K]
    }>): PurchaseHostReservationResult {
        return this.client.purchaseHostReservation(
            this.ops["PurchaseHostReservation"].apply(partialParams)
        );
    }

    invokePurchaseReservedInstancesOffering(partialParams: ToOptional<{
      [K in keyof PurchaseReservedInstancesOfferingRequest & keyof PurchaseReservedInstancesOfferingRequest & keyof PurchaseReservedInstancesOfferingRequest & keyof PurchaseReservedInstancesOfferingRequest & keyof PurchaseReservedInstancesOfferingRequest]: (PurchaseReservedInstancesOfferingRequest & PurchaseReservedInstancesOfferingRequest & PurchaseReservedInstancesOfferingRequest & PurchaseReservedInstancesOfferingRequest & PurchaseReservedInstancesOfferingRequest)[K]
    }>): PurchaseReservedInstancesOfferingResult {
        return this.client.purchaseReservedInstancesOffering(
            this.ops["PurchaseReservedInstancesOffering"].apply(partialParams)
        );
    }

    invokePurchaseScheduledInstances(partialParams: ToOptional<{
      [K in keyof PurchaseScheduledInstancesRequest & keyof PurchaseScheduledInstancesRequest & keyof PurchaseScheduledInstancesRequest & keyof PurchaseScheduledInstancesRequest & keyof PurchaseScheduledInstancesRequest]: (PurchaseScheduledInstancesRequest & PurchaseScheduledInstancesRequest & PurchaseScheduledInstancesRequest & PurchaseScheduledInstancesRequest & PurchaseScheduledInstancesRequest)[K]
    }>): PurchaseScheduledInstancesResult {
        return this.client.purchaseScheduledInstances(
            this.ops["PurchaseScheduledInstances"].apply(partialParams)
        );
    }

    invokeRebootInstances(partialParams: ToOptional<{
      [K in keyof RebootInstancesRequest & keyof RebootInstancesRequest & keyof RebootInstancesRequest & keyof RebootInstancesRequest & keyof RebootInstancesRequest]: (RebootInstancesRequest & RebootInstancesRequest & RebootInstancesRequest & RebootInstancesRequest & RebootInstancesRequest)[K]
    }>): void {
        return this.client.rebootInstances(
            this.ops["RebootInstances"].apply(partialParams)
        );
    }

    invokeRegisterImage(partialParams: ToOptional<{
      [K in keyof RegisterImageRequest & keyof RegisterImageRequest & keyof RegisterImageRequest & keyof RegisterImageRequest & keyof RegisterImageRequest]: (RegisterImageRequest & RegisterImageRequest & RegisterImageRequest & RegisterImageRequest & RegisterImageRequest)[K]
    }>): RegisterImageResult {
        return this.client.registerImage(
            this.ops["RegisterImage"].apply(partialParams)
        );
    }

    invokeRejectTransitGatewayPeeringAttachment(partialParams: ToOptional<{
      [K in keyof RejectTransitGatewayPeeringAttachmentRequest & keyof RejectTransitGatewayPeeringAttachmentRequest & keyof RejectTransitGatewayPeeringAttachmentRequest & keyof RejectTransitGatewayPeeringAttachmentRequest & keyof RejectTransitGatewayPeeringAttachmentRequest]: (RejectTransitGatewayPeeringAttachmentRequest & RejectTransitGatewayPeeringAttachmentRequest & RejectTransitGatewayPeeringAttachmentRequest & RejectTransitGatewayPeeringAttachmentRequest & RejectTransitGatewayPeeringAttachmentRequest)[K]
    }>): RejectTransitGatewayPeeringAttachmentResult {
        return this.client.rejectTransitGatewayPeeringAttachment(
            this.ops["RejectTransitGatewayPeeringAttachment"].apply(partialParams)
        );
    }

    invokeRejectTransitGatewayVpcAttachment(partialParams: ToOptional<{
      [K in keyof RejectTransitGatewayVpcAttachmentRequest & keyof RejectTransitGatewayVpcAttachmentRequest & keyof RejectTransitGatewayVpcAttachmentRequest & keyof RejectTransitGatewayVpcAttachmentRequest & keyof RejectTransitGatewayVpcAttachmentRequest]: (RejectTransitGatewayVpcAttachmentRequest & RejectTransitGatewayVpcAttachmentRequest & RejectTransitGatewayVpcAttachmentRequest & RejectTransitGatewayVpcAttachmentRequest & RejectTransitGatewayVpcAttachmentRequest)[K]
    }>): RejectTransitGatewayVpcAttachmentResult {
        return this.client.rejectTransitGatewayVpcAttachment(
            this.ops["RejectTransitGatewayVpcAttachment"].apply(partialParams)
        );
    }

    invokeRejectVpcEndpointConnections(partialParams: ToOptional<{
      [K in keyof RejectVpcEndpointConnectionsRequest & keyof RejectVpcEndpointConnectionsRequest & keyof RejectVpcEndpointConnectionsRequest & keyof RejectVpcEndpointConnectionsRequest & keyof RejectVpcEndpointConnectionsRequest]: (RejectVpcEndpointConnectionsRequest & RejectVpcEndpointConnectionsRequest & RejectVpcEndpointConnectionsRequest & RejectVpcEndpointConnectionsRequest & RejectVpcEndpointConnectionsRequest)[K]
    }>): RejectVpcEndpointConnectionsResult {
        return this.client.rejectVpcEndpointConnections(
            this.ops["RejectVpcEndpointConnections"].apply(partialParams)
        );
    }

    invokeRejectVpcPeeringConnection(partialParams: ToOptional<{
      [K in keyof RejectVpcPeeringConnectionRequest & keyof RejectVpcPeeringConnectionRequest & keyof RejectVpcPeeringConnectionRequest & keyof RejectVpcPeeringConnectionRequest & keyof RejectVpcPeeringConnectionRequest]: (RejectVpcPeeringConnectionRequest & RejectVpcPeeringConnectionRequest & RejectVpcPeeringConnectionRequest & RejectVpcPeeringConnectionRequest & RejectVpcPeeringConnectionRequest)[K]
    }>): RejectVpcPeeringConnectionResult {
        return this.client.rejectVpcPeeringConnection(
            this.ops["RejectVpcPeeringConnection"].apply(partialParams)
        );
    }

    invokeReleaseHosts(partialParams: ToOptional<{
      [K in keyof ReleaseHostsRequest & keyof ReleaseHostsRequest & keyof ReleaseHostsRequest & keyof ReleaseHostsRequest & keyof ReleaseHostsRequest]: (ReleaseHostsRequest & ReleaseHostsRequest & ReleaseHostsRequest & ReleaseHostsRequest & ReleaseHostsRequest)[K]
    }>): ReleaseHostsResult {
        return this.client.releaseHosts(
            this.ops["ReleaseHosts"].apply(partialParams)
        );
    }

    invokeReleaseIpamPoolAllocation(partialParams: ToOptional<{
      [K in keyof ReleaseIpamPoolAllocationRequest & keyof ReleaseIpamPoolAllocationRequest & keyof ReleaseIpamPoolAllocationRequest & keyof ReleaseIpamPoolAllocationRequest & keyof ReleaseIpamPoolAllocationRequest]: (ReleaseIpamPoolAllocationRequest & ReleaseIpamPoolAllocationRequest & ReleaseIpamPoolAllocationRequest & ReleaseIpamPoolAllocationRequest & ReleaseIpamPoolAllocationRequest)[K]
    }>): ReleaseIpamPoolAllocationResult {
        return this.client.releaseIpamPoolAllocation(
            this.ops["ReleaseIpamPoolAllocation"].apply(partialParams)
        );
    }

    invokeReplaceIamInstanceProfileAssociation(partialParams: ToOptional<{
      [K in keyof ReplaceIamInstanceProfileAssociationRequest & keyof ReplaceIamInstanceProfileAssociationRequest & keyof ReplaceIamInstanceProfileAssociationRequest & keyof ReplaceIamInstanceProfileAssociationRequest & keyof ReplaceIamInstanceProfileAssociationRequest]: (ReplaceIamInstanceProfileAssociationRequest & ReplaceIamInstanceProfileAssociationRequest & ReplaceIamInstanceProfileAssociationRequest & ReplaceIamInstanceProfileAssociationRequest & ReplaceIamInstanceProfileAssociationRequest)[K]
    }>): ReplaceIamInstanceProfileAssociationResult {
        return this.client.replaceIamInstanceProfileAssociation(
            this.ops["ReplaceIamInstanceProfileAssociation"].apply(partialParams)
        );
    }

    invokeReplaceNetworkAclAssociation(partialParams: ToOptional<{
      [K in keyof ReplaceNetworkAclAssociationRequest & keyof ReplaceNetworkAclAssociationRequest & keyof ReplaceNetworkAclAssociationRequest & keyof ReplaceNetworkAclAssociationRequest & keyof ReplaceNetworkAclAssociationRequest]: (ReplaceNetworkAclAssociationRequest & ReplaceNetworkAclAssociationRequest & ReplaceNetworkAclAssociationRequest & ReplaceNetworkAclAssociationRequest & ReplaceNetworkAclAssociationRequest)[K]
    }>): ReplaceNetworkAclAssociationResult {
        return this.client.replaceNetworkAclAssociation(
            this.ops["ReplaceNetworkAclAssociation"].apply(partialParams)
        );
    }

    invokeReplaceNetworkAclEntry(partialParams: ToOptional<{
      [K in keyof ReplaceNetworkAclEntryRequest & keyof ReplaceNetworkAclEntryRequest & keyof ReplaceNetworkAclEntryRequest & keyof ReplaceNetworkAclEntryRequest & keyof ReplaceNetworkAclEntryRequest]: (ReplaceNetworkAclEntryRequest & ReplaceNetworkAclEntryRequest & ReplaceNetworkAclEntryRequest & ReplaceNetworkAclEntryRequest & ReplaceNetworkAclEntryRequest)[K]
    }>): void {
        return this.client.replaceNetworkAclEntry(
            this.ops["ReplaceNetworkAclEntry"].apply(partialParams)
        );
    }

    invokeReplaceRoute(partialParams: ToOptional<{
      [K in keyof ReplaceRouteRequest & keyof ReplaceRouteRequest & keyof ReplaceRouteRequest & keyof ReplaceRouteRequest & keyof ReplaceRouteRequest]: (ReplaceRouteRequest & ReplaceRouteRequest & ReplaceRouteRequest & ReplaceRouteRequest & ReplaceRouteRequest)[K]
    }>): void {
        return this.client.replaceRoute(
            this.ops["ReplaceRoute"].apply(partialParams)
        );
    }

    invokeReplaceRouteTableAssociation(partialParams: ToOptional<{
      [K in keyof ReplaceRouteTableAssociationRequest & keyof ReplaceRouteTableAssociationRequest & keyof ReplaceRouteTableAssociationRequest & keyof ReplaceRouteTableAssociationRequest & keyof ReplaceRouteTableAssociationRequest]: (ReplaceRouteTableAssociationRequest & ReplaceRouteTableAssociationRequest & ReplaceRouteTableAssociationRequest & ReplaceRouteTableAssociationRequest & ReplaceRouteTableAssociationRequest)[K]
    }>): ReplaceRouteTableAssociationResult {
        return this.client.replaceRouteTableAssociation(
            this.ops["ReplaceRouteTableAssociation"].apply(partialParams)
        );
    }

    invokeReplaceTransitGatewayRoute(partialParams: ToOptional<{
      [K in keyof ReplaceTransitGatewayRouteRequest & keyof ReplaceTransitGatewayRouteRequest & keyof ReplaceTransitGatewayRouteRequest & keyof ReplaceTransitGatewayRouteRequest & keyof ReplaceTransitGatewayRouteRequest]: (ReplaceTransitGatewayRouteRequest & ReplaceTransitGatewayRouteRequest & ReplaceTransitGatewayRouteRequest & ReplaceTransitGatewayRouteRequest & ReplaceTransitGatewayRouteRequest)[K]
    }>): ReplaceTransitGatewayRouteResult {
        return this.client.replaceTransitGatewayRoute(
            this.ops["ReplaceTransitGatewayRoute"].apply(partialParams)
        );
    }

    invokeReportInstanceStatus(partialParams: ToOptional<{
      [K in keyof ReportInstanceStatusRequest & keyof ReportInstanceStatusRequest & keyof ReportInstanceStatusRequest & keyof ReportInstanceStatusRequest & keyof ReportInstanceStatusRequest]: (ReportInstanceStatusRequest & ReportInstanceStatusRequest & ReportInstanceStatusRequest & ReportInstanceStatusRequest & ReportInstanceStatusRequest)[K]
    }>): void {
        return this.client.reportInstanceStatus(
            this.ops["ReportInstanceStatus"].apply(partialParams)
        );
    }

    invokeRequestSpotFleet(partialParams: ToOptional<{
      [K in keyof RequestSpotFleetRequest & keyof RequestSpotFleetRequest & keyof RequestSpotFleetRequest & keyof RequestSpotFleetRequest & keyof RequestSpotFleetRequest]: (RequestSpotFleetRequest & RequestSpotFleetRequest & RequestSpotFleetRequest & RequestSpotFleetRequest & RequestSpotFleetRequest)[K]
    }>): RequestSpotFleetResponse {
        return this.client.requestSpotFleet(
            this.ops["RequestSpotFleet"].apply(partialParams)
        );
    }

    invokeResetAddressAttribute(partialParams: ToOptional<{
      [K in keyof Omit<ResetAddressAttributeRequest, "AllocationId"> & keyof ResetAddressAttributeRequest & keyof ResetAddressAttributeRequest & keyof ResetAddressAttributeRequest & keyof ResetAddressAttributeRequest]: (Omit<ResetAddressAttributeRequest, "AllocationId"> & ResetAddressAttributeRequest & ResetAddressAttributeRequest & ResetAddressAttributeRequest & ResetAddressAttributeRequest)[K]
    }>): ResetAddressAttributeResult {
        return this.client.resetAddressAttribute(
            this.ops["ResetAddressAttribute"].apply(partialParams)
        );
    }

    invokeResetFpgaImageAttribute(partialParams: ToOptional<{
      [K in keyof ResetFpgaImageAttributeRequest & keyof ResetFpgaImageAttributeRequest & keyof ResetFpgaImageAttributeRequest & keyof ResetFpgaImageAttributeRequest & keyof ResetFpgaImageAttributeRequest]: (ResetFpgaImageAttributeRequest & ResetFpgaImageAttributeRequest & ResetFpgaImageAttributeRequest & ResetFpgaImageAttributeRequest & ResetFpgaImageAttributeRequest)[K]
    }>): ResetFpgaImageAttributeResult {
        return this.client.resetFpgaImageAttribute(
            this.ops["ResetFpgaImageAttribute"].apply(partialParams)
        );
    }

    invokeResetImageAttribute(partialParams: ToOptional<{
      [K in keyof ResetImageAttributeRequest & keyof ResetImageAttributeRequest & keyof ResetImageAttributeRequest & keyof ResetImageAttributeRequest & keyof ResetImageAttributeRequest]: (ResetImageAttributeRequest & ResetImageAttributeRequest & ResetImageAttributeRequest & ResetImageAttributeRequest & ResetImageAttributeRequest)[K]
    }>): void {
        return this.client.resetImageAttribute(
            this.ops["ResetImageAttribute"].apply(partialParams)
        );
    }

    invokeResetInstanceAttribute(partialParams: ToOptional<{
      [K in keyof ResetInstanceAttributeRequest & keyof Omit<ResetInstanceAttributeRequest, "InstanceId"> & keyof ResetInstanceAttributeRequest & keyof ResetInstanceAttributeRequest & keyof ResetInstanceAttributeRequest]: (ResetInstanceAttributeRequest & Omit<ResetInstanceAttributeRequest, "InstanceId"> & ResetInstanceAttributeRequest & ResetInstanceAttributeRequest & ResetInstanceAttributeRequest)[K]
    }>): void {
        return this.client.resetInstanceAttribute(
            this.ops["ResetInstanceAttribute"].apply(partialParams)
        );
    }

    invokeResetNetworkInterfaceAttribute(partialParams: ToOptional<{
      [K in keyof ResetNetworkInterfaceAttributeRequest & keyof ResetNetworkInterfaceAttributeRequest & keyof Omit<ResetNetworkInterfaceAttributeRequest, "NetworkInterfaceId"> & keyof ResetNetworkInterfaceAttributeRequest & keyof ResetNetworkInterfaceAttributeRequest]: (ResetNetworkInterfaceAttributeRequest & ResetNetworkInterfaceAttributeRequest & Omit<ResetNetworkInterfaceAttributeRequest, "NetworkInterfaceId"> & ResetNetworkInterfaceAttributeRequest & ResetNetworkInterfaceAttributeRequest)[K]
    }>): void {
        return this.client.resetNetworkInterfaceAttribute(
            this.ops["ResetNetworkInterfaceAttribute"].apply(partialParams)
        );
    }

    invokeResetSnapshotAttribute(partialParams: ToOptional<{
      [K in keyof ResetSnapshotAttributeRequest & keyof ResetSnapshotAttributeRequest & keyof ResetSnapshotAttributeRequest & keyof ResetSnapshotAttributeRequest & keyof ResetSnapshotAttributeRequest]: (ResetSnapshotAttributeRequest & ResetSnapshotAttributeRequest & ResetSnapshotAttributeRequest & ResetSnapshotAttributeRequest & ResetSnapshotAttributeRequest)[K]
    }>): void {
        return this.client.resetSnapshotAttribute(
            this.ops["ResetSnapshotAttribute"].apply(partialParams)
        );
    }

    invokeRestoreAddressToClassic(partialParams: ToOptional<{
      [K in keyof RestoreAddressToClassicRequest & keyof RestoreAddressToClassicRequest & keyof RestoreAddressToClassicRequest & keyof RestoreAddressToClassicRequest & keyof RestoreAddressToClassicRequest]: (RestoreAddressToClassicRequest & RestoreAddressToClassicRequest & RestoreAddressToClassicRequest & RestoreAddressToClassicRequest & RestoreAddressToClassicRequest)[K]
    }>): RestoreAddressToClassicResult {
        return this.client.restoreAddressToClassic(
            this.ops["RestoreAddressToClassic"].apply(partialParams)
        );
    }

    invokeRestoreImageFromRecycleBin(partialParams: ToOptional<{
      [K in keyof RestoreImageFromRecycleBinRequest & keyof RestoreImageFromRecycleBinRequest & keyof RestoreImageFromRecycleBinRequest & keyof RestoreImageFromRecycleBinRequest & keyof RestoreImageFromRecycleBinRequest]: (RestoreImageFromRecycleBinRequest & RestoreImageFromRecycleBinRequest & RestoreImageFromRecycleBinRequest & RestoreImageFromRecycleBinRequest & RestoreImageFromRecycleBinRequest)[K]
    }>): RestoreImageFromRecycleBinResult {
        return this.client.restoreImageFromRecycleBin(
            this.ops["RestoreImageFromRecycleBin"].apply(partialParams)
        );
    }

    invokeRestoreManagedPrefixListVersion(partialParams: ToOptional<{
      [K in keyof RestoreManagedPrefixListVersionRequest & keyof RestoreManagedPrefixListVersionRequest & keyof RestoreManagedPrefixListVersionRequest & keyof RestoreManagedPrefixListVersionRequest & keyof RestoreManagedPrefixListVersionRequest]: (RestoreManagedPrefixListVersionRequest & RestoreManagedPrefixListVersionRequest & RestoreManagedPrefixListVersionRequest & RestoreManagedPrefixListVersionRequest & RestoreManagedPrefixListVersionRequest)[K]
    }>): RestoreManagedPrefixListVersionResult {
        return this.client.restoreManagedPrefixListVersion(
            this.ops["RestoreManagedPrefixListVersion"].apply(partialParams)
        );
    }

    invokeRestoreSnapshotFromRecycleBin(partialParams: ToOptional<{
      [K in keyof RestoreSnapshotFromRecycleBinRequest & keyof RestoreSnapshotFromRecycleBinRequest & keyof RestoreSnapshotFromRecycleBinRequest & keyof RestoreSnapshotFromRecycleBinRequest & keyof RestoreSnapshotFromRecycleBinRequest]: (RestoreSnapshotFromRecycleBinRequest & RestoreSnapshotFromRecycleBinRequest & RestoreSnapshotFromRecycleBinRequest & RestoreSnapshotFromRecycleBinRequest & RestoreSnapshotFromRecycleBinRequest)[K]
    }>): RestoreSnapshotFromRecycleBinResult {
        return this.client.restoreSnapshotFromRecycleBin(
            this.ops["RestoreSnapshotFromRecycleBin"].apply(partialParams)
        );
    }

    invokeRestoreSnapshotTier(partialParams: ToOptional<{
      [K in keyof RestoreSnapshotTierRequest & keyof RestoreSnapshotTierRequest & keyof RestoreSnapshotTierRequest & keyof RestoreSnapshotTierRequest & keyof RestoreSnapshotTierRequest]: (RestoreSnapshotTierRequest & RestoreSnapshotTierRequest & RestoreSnapshotTierRequest & RestoreSnapshotTierRequest & RestoreSnapshotTierRequest)[K]
    }>): RestoreSnapshotTierResult {
        return this.client.restoreSnapshotTier(
            this.ops["RestoreSnapshotTier"].apply(partialParams)
        );
    }

    invokeRevokeClientVpnIngress(partialParams: ToOptional<{
      [K in keyof RevokeClientVpnIngressRequest & keyof RevokeClientVpnIngressRequest & keyof RevokeClientVpnIngressRequest & keyof RevokeClientVpnIngressRequest & keyof RevokeClientVpnIngressRequest]: (RevokeClientVpnIngressRequest & RevokeClientVpnIngressRequest & RevokeClientVpnIngressRequest & RevokeClientVpnIngressRequest & RevokeClientVpnIngressRequest)[K]
    }>): RevokeClientVpnIngressResult {
        return this.client.revokeClientVpnIngress(
            this.ops["RevokeClientVpnIngress"].apply(partialParams)
        );
    }

    invokeRevokeSecurityGroupEgress(partialParams: ToOptional<{
      [K in keyof RevokeSecurityGroupEgressRequest & keyof RevokeSecurityGroupEgressRequest & keyof RevokeSecurityGroupEgressRequest & keyof RevokeSecurityGroupEgressRequest & keyof RevokeSecurityGroupEgressRequest]: (RevokeSecurityGroupEgressRequest & RevokeSecurityGroupEgressRequest & RevokeSecurityGroupEgressRequest & RevokeSecurityGroupEgressRequest & RevokeSecurityGroupEgressRequest)[K]
    }>): RevokeSecurityGroupEgressResult {
        return this.client.revokeSecurityGroupEgress(
            this.ops["RevokeSecurityGroupEgress"].apply(partialParams)
        );
    }

    invokeRunInstances(partialParams: ToOptional<{
      [K in keyof RunInstancesRequest & keyof RunInstancesRequest & keyof RunInstancesRequest & keyof RunInstancesRequest & keyof RunInstancesRequest]: (RunInstancesRequest & RunInstancesRequest & RunInstancesRequest & RunInstancesRequest & RunInstancesRequest)[K]
    }>): Reservation {
        return this.client.runInstances(
            this.ops["RunInstances"].apply(partialParams)
        );
    }

    invokeRunScheduledInstances(partialParams: ToOptional<{
      [K in keyof RunScheduledInstancesRequest & keyof RunScheduledInstancesRequest & keyof RunScheduledInstancesRequest & keyof RunScheduledInstancesRequest & keyof RunScheduledInstancesRequest]: (RunScheduledInstancesRequest & RunScheduledInstancesRequest & RunScheduledInstancesRequest & RunScheduledInstancesRequest & RunScheduledInstancesRequest)[K]
    }>): RunScheduledInstancesResult {
        return this.client.runScheduledInstances(
            this.ops["RunScheduledInstances"].apply(partialParams)
        );
    }

    invokeSearchLocalGatewayRoutes(partialParams: ToOptional<{
      [K in keyof SearchLocalGatewayRoutesRequest & keyof SearchLocalGatewayRoutesRequest & keyof SearchLocalGatewayRoutesRequest & keyof SearchLocalGatewayRoutesRequest & keyof SearchLocalGatewayRoutesRequest]: (SearchLocalGatewayRoutesRequest & SearchLocalGatewayRoutesRequest & SearchLocalGatewayRoutesRequest & SearchLocalGatewayRoutesRequest & SearchLocalGatewayRoutesRequest)[K]
    }>): SearchLocalGatewayRoutesResult {
        return this.client.searchLocalGatewayRoutes(
            this.ops["SearchLocalGatewayRoutes"].apply(partialParams)
        );
    }

    invokeSearchTransitGatewayRoutes(partialParams: ToOptional<{
      [K in keyof SearchTransitGatewayRoutesRequest & keyof SearchTransitGatewayRoutesRequest & keyof SearchTransitGatewayRoutesRequest & keyof SearchTransitGatewayRoutesRequest & keyof SearchTransitGatewayRoutesRequest]: (SearchTransitGatewayRoutesRequest & SearchTransitGatewayRoutesRequest & SearchTransitGatewayRoutesRequest & SearchTransitGatewayRoutesRequest & SearchTransitGatewayRoutesRequest)[K]
    }>): SearchTransitGatewayRoutesResult {
        return this.client.searchTransitGatewayRoutes(
            this.ops["SearchTransitGatewayRoutes"].apply(partialParams)
        );
    }

    invokeSendDiagnosticInterrupt(partialParams: ToOptional<{
      [K in keyof SendDiagnosticInterruptRequest & keyof Omit<SendDiagnosticInterruptRequest, "InstanceId"> & keyof SendDiagnosticInterruptRequest & keyof SendDiagnosticInterruptRequest & keyof SendDiagnosticInterruptRequest]: (SendDiagnosticInterruptRequest & Omit<SendDiagnosticInterruptRequest, "InstanceId"> & SendDiagnosticInterruptRequest & SendDiagnosticInterruptRequest & SendDiagnosticInterruptRequest)[K]
    }>): void {
        return this.client.sendDiagnosticInterrupt(
            this.ops["SendDiagnosticInterrupt"].apply(partialParams)
        );
    }

    invokeStartInstances(partialParams: ToOptional<{
      [K in keyof StartInstancesRequest & keyof StartInstancesRequest & keyof StartInstancesRequest & keyof StartInstancesRequest & keyof StartInstancesRequest]: (StartInstancesRequest & StartInstancesRequest & StartInstancesRequest & StartInstancesRequest & StartInstancesRequest)[K]
    }>): StartInstancesResult {
        return this.client.startInstances(
            this.ops["StartInstances"].apply(partialParams)
        );
    }

    invokeStartNetworkInsightsAccessScopeAnalysis(partialParams: ToOptional<{
      [K in keyof StartNetworkInsightsAccessScopeAnalysisRequest & keyof StartNetworkInsightsAccessScopeAnalysisRequest & keyof StartNetworkInsightsAccessScopeAnalysisRequest & keyof StartNetworkInsightsAccessScopeAnalysisRequest & keyof StartNetworkInsightsAccessScopeAnalysisRequest]: (StartNetworkInsightsAccessScopeAnalysisRequest & StartNetworkInsightsAccessScopeAnalysisRequest & StartNetworkInsightsAccessScopeAnalysisRequest & StartNetworkInsightsAccessScopeAnalysisRequest & StartNetworkInsightsAccessScopeAnalysisRequest)[K]
    }>): StartNetworkInsightsAccessScopeAnalysisResult {
        return this.client.startNetworkInsightsAccessScopeAnalysis(
            this.ops["StartNetworkInsightsAccessScopeAnalysis"].apply(partialParams)
        );
    }

    invokeStartNetworkInsightsAnalysis(partialParams: ToOptional<{
      [K in keyof StartNetworkInsightsAnalysisRequest & keyof StartNetworkInsightsAnalysisRequest & keyof StartNetworkInsightsAnalysisRequest & keyof StartNetworkInsightsAnalysisRequest & keyof StartNetworkInsightsAnalysisRequest]: (StartNetworkInsightsAnalysisRequest & StartNetworkInsightsAnalysisRequest & StartNetworkInsightsAnalysisRequest & StartNetworkInsightsAnalysisRequest & StartNetworkInsightsAnalysisRequest)[K]
    }>): StartNetworkInsightsAnalysisResult {
        return this.client.startNetworkInsightsAnalysis(
            this.ops["StartNetworkInsightsAnalysis"].apply(partialParams)
        );
    }

    invokeStartVpcEndpointServicePrivateDnsVerification(partialParams: ToOptional<{
      [K in keyof StartVpcEndpointServicePrivateDnsVerificationRequest & keyof StartVpcEndpointServicePrivateDnsVerificationRequest & keyof StartVpcEndpointServicePrivateDnsVerificationRequest & keyof StartVpcEndpointServicePrivateDnsVerificationRequest & keyof StartVpcEndpointServicePrivateDnsVerificationRequest]: (StartVpcEndpointServicePrivateDnsVerificationRequest & StartVpcEndpointServicePrivateDnsVerificationRequest & StartVpcEndpointServicePrivateDnsVerificationRequest & StartVpcEndpointServicePrivateDnsVerificationRequest & StartVpcEndpointServicePrivateDnsVerificationRequest)[K]
    }>): StartVpcEndpointServicePrivateDnsVerificationResult {
        return this.client.startVpcEndpointServicePrivateDnsVerification(
            this.ops["StartVpcEndpointServicePrivateDnsVerification"].apply(partialParams)
        );
    }

    invokeStopInstances(partialParams: ToOptional<{
      [K in keyof StopInstancesRequest & keyof StopInstancesRequest & keyof StopInstancesRequest & keyof StopInstancesRequest & keyof StopInstancesRequest]: (StopInstancesRequest & StopInstancesRequest & StopInstancesRequest & StopInstancesRequest & StopInstancesRequest)[K]
    }>): StopInstancesResult {
        return this.client.stopInstances(
            this.ops["StopInstances"].apply(partialParams)
        );
    }

    invokeTerminateClientVpnConnections(partialParams: ToOptional<{
      [K in keyof TerminateClientVpnConnectionsRequest & keyof TerminateClientVpnConnectionsRequest & keyof TerminateClientVpnConnectionsRequest & keyof TerminateClientVpnConnectionsRequest & keyof TerminateClientVpnConnectionsRequest]: (TerminateClientVpnConnectionsRequest & TerminateClientVpnConnectionsRequest & TerminateClientVpnConnectionsRequest & TerminateClientVpnConnectionsRequest & TerminateClientVpnConnectionsRequest)[K]
    }>): TerminateClientVpnConnectionsResult {
        return this.client.terminateClientVpnConnections(
            this.ops["TerminateClientVpnConnections"].apply(partialParams)
        );
    }

    invokeTerminateInstances(partialParams: ToOptional<{
      [K in keyof TerminateInstancesRequest & keyof TerminateInstancesRequest & keyof TerminateInstancesRequest & keyof TerminateInstancesRequest & keyof TerminateInstancesRequest]: (TerminateInstancesRequest & TerminateInstancesRequest & TerminateInstancesRequest & TerminateInstancesRequest & TerminateInstancesRequest)[K]
    }>): TerminateInstancesResult {
        return this.client.terminateInstances(
            this.ops["TerminateInstances"].apply(partialParams)
        );
    }

    invokeUnassignIpv6Addresses(partialParams: ToOptional<{
      [K in keyof UnassignIpv6AddressesRequest & keyof UnassignIpv6AddressesRequest & keyof Omit<UnassignIpv6AddressesRequest, "NetworkInterfaceId"> & keyof UnassignIpv6AddressesRequest & keyof UnassignIpv6AddressesRequest]: (UnassignIpv6AddressesRequest & UnassignIpv6AddressesRequest & Omit<UnassignIpv6AddressesRequest, "NetworkInterfaceId"> & UnassignIpv6AddressesRequest & UnassignIpv6AddressesRequest)[K]
    }>): UnassignIpv6AddressesResult {
        return this.client.unassignIpv6Addresses(
            this.ops["UnassignIpv6Addresses"].apply(partialParams)
        );
    }

    invokeUnassignPrivateIpAddresses(partialParams: ToOptional<{
      [K in keyof UnassignPrivateIpAddressesRequest & keyof UnassignPrivateIpAddressesRequest & keyof Omit<UnassignPrivateIpAddressesRequest, "NetworkInterfaceId"> & keyof UnassignPrivateIpAddressesRequest & keyof UnassignPrivateIpAddressesRequest]: (UnassignPrivateIpAddressesRequest & UnassignPrivateIpAddressesRequest & Omit<UnassignPrivateIpAddressesRequest, "NetworkInterfaceId"> & UnassignPrivateIpAddressesRequest & UnassignPrivateIpAddressesRequest)[K]
    }>): void {
        return this.client.unassignPrivateIpAddresses(
            this.ops["UnassignPrivateIpAddresses"].apply(partialParams)
        );
    }

    invokeUnmonitorInstances(partialParams: ToOptional<{
      [K in keyof UnmonitorInstancesRequest & keyof UnmonitorInstancesRequest & keyof UnmonitorInstancesRequest & keyof UnmonitorInstancesRequest & keyof UnmonitorInstancesRequest]: (UnmonitorInstancesRequest & UnmonitorInstancesRequest & UnmonitorInstancesRequest & UnmonitorInstancesRequest & UnmonitorInstancesRequest)[K]
    }>): UnmonitorInstancesResult {
        return this.client.unmonitorInstances(
            this.ops["UnmonitorInstances"].apply(partialParams)
        );
    }

    invokeWithdrawByoipCidr(partialParams: ToOptional<{
      [K in keyof WithdrawByoipCidrRequest & keyof WithdrawByoipCidrRequest & keyof WithdrawByoipCidrRequest & keyof WithdrawByoipCidrRequest & keyof WithdrawByoipCidrRequest]: (WithdrawByoipCidrRequest & WithdrawByoipCidrRequest & WithdrawByoipCidrRequest & WithdrawByoipCidrRequest & WithdrawByoipCidrRequest)[K]
    }>): WithdrawByoipCidrResult {
        return this.client.withdrawByoipCidr(
            this.ops["WithdrawByoipCidr"].apply(partialParams)
        );
    }
}