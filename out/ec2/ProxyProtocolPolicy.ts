
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
const schema = require("../apis/ec2-2016-11-15.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ec2.ProxyProtocolPolicy {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.ec2.ProxyProtocolPolicy>) {
        super(...args)
        this.client = new awssdk.EC2()
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

    invokeAcceptReservedInstancesExchangeQuote(partialParams: ToOptional<{
      [K in keyof AcceptReservedInstancesExchangeQuoteRequest]: (AcceptReservedInstancesExchangeQuoteRequest)[K]
    }>): Request<AcceptReservedInstancesExchangeQuoteResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.acceptReservedInstancesExchangeQuote(
          this.ops["AcceptReservedInstancesExchangeQuote"].applicator.apply(partialParams)
        );
    }

    invokeAcceptTransitGatewayPeeringAttachment(partialParams: ToOptional<{
      [K in keyof AcceptTransitGatewayPeeringAttachmentRequest]: (AcceptTransitGatewayPeeringAttachmentRequest)[K]
    }>): Request<AcceptTransitGatewayPeeringAttachmentResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.acceptTransitGatewayPeeringAttachment(
          this.ops["AcceptTransitGatewayPeeringAttachment"].applicator.apply(partialParams)
        );
    }

    invokeAcceptTransitGatewayVpcAttachment(partialParams: ToOptional<{
      [K in keyof AcceptTransitGatewayVpcAttachmentRequest]: (AcceptTransitGatewayVpcAttachmentRequest)[K]
    }>): Request<AcceptTransitGatewayVpcAttachmentResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.acceptTransitGatewayVpcAttachment(
          this.ops["AcceptTransitGatewayVpcAttachment"].applicator.apply(partialParams)
        );
    }

    invokeAcceptVpcEndpointConnections(partialParams: ToOptional<{
      [K in keyof AcceptVpcEndpointConnectionsRequest]: (AcceptVpcEndpointConnectionsRequest)[K]
    }>): Request<AcceptVpcEndpointConnectionsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.acceptVpcEndpointConnections(
          this.ops["AcceptVpcEndpointConnections"].applicator.apply(partialParams)
        );
    }

    invokeAdvertiseByoipCidr(partialParams: ToOptional<{
      [K in keyof AdvertiseByoipCidrRequest]: (AdvertiseByoipCidrRequest)[K]
    }>): Request<AdvertiseByoipCidrResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.advertiseByoipCidr(
          this.ops["AdvertiseByoipCidr"].applicator.apply(partialParams)
        );
    }

    invokeAllocateHosts(partialParams: ToOptional<{
      [K in keyof AllocateHostsRequest]: (AllocateHostsRequest)[K]
    }>): Request<AllocateHostsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.allocateHosts(
          this.ops["AllocateHosts"].applicator.apply(partialParams)
        );
    }

    invokeAllocateIpamPoolCidr(partialParams: ToOptional<{
      [K in keyof AllocateIpamPoolCidrRequest]: (AllocateIpamPoolCidrRequest)[K]
    }>): Request<AllocateIpamPoolCidrResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.allocateIpamPoolCidr(
          this.ops["AllocateIpamPoolCidr"].applicator.apply(partialParams)
        );
    }

    invokeApplySecurityGroupsToClientVpnTargetNetwork(partialParams: ToOptional<{
      [K in keyof ApplySecurityGroupsToClientVpnTargetNetworkRequest]: (ApplySecurityGroupsToClientVpnTargetNetworkRequest)[K]
    }>): Request<ApplySecurityGroupsToClientVpnTargetNetworkResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.applySecurityGroupsToClientVpnTargetNetwork(
          this.ops["ApplySecurityGroupsToClientVpnTargetNetwork"].applicator.apply(partialParams)
        );
    }

    invokeAssignIpv6Addresses(partialParams: ToOptional<{
      [K in keyof AssignIpv6AddressesRequest]: (AssignIpv6AddressesRequest)[K]
    }>): Request<AssignIpv6AddressesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.assignIpv6Addresses(
          this.ops["AssignIpv6Addresses"].applicator.apply(partialParams)
        );
    }

    invokeAssignPrivateIpAddresses(partialParams: ToOptional<{
      [K in keyof AssignPrivateIpAddressesRequest]: (AssignPrivateIpAddressesRequest)[K]
    }>): Request<AssignPrivateIpAddressesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.assignPrivateIpAddresses(
          this.ops["AssignPrivateIpAddresses"].applicator.apply(partialParams)
        );
    }

    invokeAssociateClientVpnTargetNetwork(partialParams: ToOptional<{
      [K in keyof AssociateClientVpnTargetNetworkRequest]: (AssociateClientVpnTargetNetworkRequest)[K]
    }>): Request<AssociateClientVpnTargetNetworkResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateClientVpnTargetNetwork(
          this.ops["AssociateClientVpnTargetNetwork"].applicator.apply(partialParams)
        );
    }

    invokeAssociateDhcpOptions(partialParams: ToOptional<{
      [K in keyof AssociateDhcpOptionsRequest]: (AssociateDhcpOptionsRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateDhcpOptions(
          this.ops["AssociateDhcpOptions"].applicator.apply(partialParams)
        );
    }

    invokeAssociateIamInstanceProfile(partialParams: ToOptional<{
      [K in keyof AssociateIamInstanceProfileRequest]: (AssociateIamInstanceProfileRequest)[K]
    }>): Request<AssociateIamInstanceProfileResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateIamInstanceProfile(
          this.ops["AssociateIamInstanceProfile"].applicator.apply(partialParams)
        );
    }

    invokeAssociateInstanceEventWindow(partialParams: ToOptional<{
      [K in keyof AssociateInstanceEventWindowRequest]: (AssociateInstanceEventWindowRequest)[K]
    }>): Request<AssociateInstanceEventWindowResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateInstanceEventWindow(
          this.ops["AssociateInstanceEventWindow"].applicator.apply(partialParams)
        );
    }

    invokeAssociateRouteTable(partialParams: ToOptional<{
      [K in keyof AssociateRouteTableRequest]: (AssociateRouteTableRequest)[K]
    }>): Request<AssociateRouteTableResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateRouteTable(
          this.ops["AssociateRouteTable"].applicator.apply(partialParams)
        );
    }

    invokeAssociateSubnetCidrBlock(partialParams: ToOptional<{
      [K in keyof AssociateSubnetCidrBlockRequest]: (AssociateSubnetCidrBlockRequest)[K]
    }>): Request<AssociateSubnetCidrBlockResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateSubnetCidrBlock(
          this.ops["AssociateSubnetCidrBlock"].applicator.apply(partialParams)
        );
    }

    invokeAssociateTransitGatewayRouteTable(partialParams: ToOptional<{
      [K in keyof AssociateTransitGatewayRouteTableRequest]: (AssociateTransitGatewayRouteTableRequest)[K]
    }>): Request<AssociateTransitGatewayRouteTableResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateTransitGatewayRouteTable(
          this.ops["AssociateTransitGatewayRouteTable"].applicator.apply(partialParams)
        );
    }

    invokeAssociateTrunkInterface(partialParams: ToOptional<{
      [K in keyof AssociateTrunkInterfaceRequest]: (AssociateTrunkInterfaceRequest)[K]
    }>): Request<AssociateTrunkInterfaceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateTrunkInterface(
          this.ops["AssociateTrunkInterface"].applicator.apply(partialParams)
        );
    }

    invokeAssociateVpcCidrBlock(partialParams: ToOptional<{
      [K in keyof AssociateVpcCidrBlockRequest]: (AssociateVpcCidrBlockRequest)[K]
    }>): Request<AssociateVpcCidrBlockResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateVpcCidrBlock(
          this.ops["AssociateVpcCidrBlock"].applicator.apply(partialParams)
        );
    }

    invokeAttachClassicLinkVpc(partialParams: ToOptional<{
      [K in keyof AttachClassicLinkVpcRequest]: (AttachClassicLinkVpcRequest)[K]
    }>): Request<AttachClassicLinkVpcResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachClassicLinkVpc(
          this.ops["AttachClassicLinkVpc"].applicator.apply(partialParams)
        );
    }

    invokeAttachInternetGateway(partialParams: ToOptional<{
      [K in keyof AttachInternetGatewayRequest]: (AttachInternetGatewayRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachInternetGateway(
          this.ops["AttachInternetGateway"].applicator.apply(partialParams)
        );
    }

    invokeAttachNetworkInterface(partialParams: ToOptional<{
      [K in keyof AttachNetworkInterfaceRequest]: (AttachNetworkInterfaceRequest)[K]
    }>): Request<AttachNetworkInterfaceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachNetworkInterface(
          this.ops["AttachNetworkInterface"].applicator.apply(partialParams)
        );
    }

    invokeAttachVolume(partialParams: ToOptional<{
      [K in keyof AttachVolumeRequest]: (AttachVolumeRequest)[K]
    }>): Request<VolumeAttachment, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachVolume(
          this.ops["AttachVolume"].applicator.apply(partialParams)
        );
    }

    invokeAttachVpnGateway(partialParams: ToOptional<{
      [K in keyof AttachVpnGatewayRequest]: (AttachVpnGatewayRequest)[K]
    }>): Request<AttachVpnGatewayResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachVpnGateway(
          this.ops["AttachVpnGateway"].applicator.apply(partialParams)
        );
    }

    invokeAuthorizeClientVpnIngress(partialParams: ToOptional<{
      [K in keyof AuthorizeClientVpnIngressRequest]: (AuthorizeClientVpnIngressRequest)[K]
    }>): Request<AuthorizeClientVpnIngressResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.authorizeClientVpnIngress(
          this.ops["AuthorizeClientVpnIngress"].applicator.apply(partialParams)
        );
    }

    invokeAuthorizeSecurityGroupEgress(partialParams: ToOptional<{
      [K in keyof AuthorizeSecurityGroupEgressRequest]: (AuthorizeSecurityGroupEgressRequest)[K]
    }>): Request<AuthorizeSecurityGroupEgressResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.authorizeSecurityGroupEgress(
          this.ops["AuthorizeSecurityGroupEgress"].applicator.apply(partialParams)
        );
    }

    invokeBundleInstance(partialParams: ToOptional<{
      [K in keyof BundleInstanceRequest]: (BundleInstanceRequest)[K]
    }>): Request<BundleInstanceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.bundleInstance(
          this.ops["BundleInstance"].applicator.apply(partialParams)
        );
    }

    invokeCancelBundleTask(partialParams: ToOptional<{
      [K in keyof CancelBundleTaskRequest]: (CancelBundleTaskRequest)[K]
    }>): Request<CancelBundleTaskResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelBundleTask(
          this.ops["CancelBundleTask"].applicator.apply(partialParams)
        );
    }

    invokeCancelCapacityReservation(partialParams: ToOptional<{
      [K in keyof CancelCapacityReservationRequest]: (CancelCapacityReservationRequest)[K]
    }>): Request<CancelCapacityReservationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelCapacityReservation(
          this.ops["CancelCapacityReservation"].applicator.apply(partialParams)
        );
    }

    invokeCancelCapacityReservationFleets(partialParams: ToOptional<{
      [K in keyof CancelCapacityReservationFleetsRequest]: (CancelCapacityReservationFleetsRequest)[K]
    }>): Request<CancelCapacityReservationFleetsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelCapacityReservationFleets(
          this.ops["CancelCapacityReservationFleets"].applicator.apply(partialParams)
        );
    }

    invokeCancelConversionTask(partialParams: ToOptional<{
      [K in keyof CancelConversionRequest]: (CancelConversionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelConversionTask(
          this.ops["CancelConversionTask"].applicator.apply(partialParams)
        );
    }

    invokeCancelExportTask(partialParams: ToOptional<{
      [K in keyof CancelExportTaskRequest]: (CancelExportTaskRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelExportTask(
          this.ops["CancelExportTask"].applicator.apply(partialParams)
        );
    }

    invokeCancelReservedInstancesListing(partialParams: ToOptional<{
      [K in keyof CancelReservedInstancesListingRequest]: (CancelReservedInstancesListingRequest)[K]
    }>): Request<CancelReservedInstancesListingResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelReservedInstancesListing(
          this.ops["CancelReservedInstancesListing"].applicator.apply(partialParams)
        );
    }

    invokeCancelSpotFleetRequests(partialParams: ToOptional<{
      [K in keyof CancelSpotFleetRequestsRequest]: (CancelSpotFleetRequestsRequest)[K]
    }>): Request<CancelSpotFleetRequestsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelSpotFleetRequests(
          this.ops["CancelSpotFleetRequests"].applicator.apply(partialParams)
        );
    }

    invokeCancelSpotInstanceRequests(partialParams: ToOptional<{
      [K in keyof CancelSpotInstanceRequestsRequest]: (CancelSpotInstanceRequestsRequest)[K]
    }>): Request<CancelSpotInstanceRequestsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelSpotInstanceRequests(
          this.ops["CancelSpotInstanceRequests"].applicator.apply(partialParams)
        );
    }

    invokeConfirmProductInstance(partialParams: ToOptional<{
      [K in keyof ConfirmProductInstanceRequest]: (ConfirmProductInstanceRequest)[K]
    }>): Request<ConfirmProductInstanceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.confirmProductInstance(
          this.ops["ConfirmProductInstance"].applicator.apply(partialParams)
        );
    }

    invokeCopyFpgaImage(partialParams: ToOptional<{
      [K in keyof CopyFpgaImageRequest]: (CopyFpgaImageRequest)[K]
    }>): Request<CopyFpgaImageResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copyFpgaImage(
          this.ops["CopyFpgaImage"].applicator.apply(partialParams)
        );
    }

    invokeCopyImage(partialParams: ToOptional<{
      [K in keyof CopyImageRequest]: (CopyImageRequest)[K]
    }>): Request<CopyImageResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copyImage(
          this.ops["CopyImage"].applicator.apply(partialParams)
        );
    }

    invokeCopySnapshot(partialParams: ToOptional<{
      [K in keyof CopySnapshotRequest]: (CopySnapshotRequest)[K]
    }>): Request<CopySnapshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copySnapshot(
          this.ops["CopySnapshot"].applicator.apply(partialParams)
        );
    }

    invokeCreateCapacityReservation(partialParams: ToOptional<{
      [K in keyof CreateCapacityReservationRequest]: (CreateCapacityReservationRequest)[K]
    }>): Request<CreateCapacityReservationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCapacityReservation(
          this.ops["CreateCapacityReservation"].applicator.apply(partialParams)
        );
    }

    invokeCreateCapacityReservationFleet(partialParams: ToOptional<{
      [K in keyof CreateCapacityReservationFleetRequest]: (CreateCapacityReservationFleetRequest)[K]
    }>): Request<CreateCapacityReservationFleetResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCapacityReservationFleet(
          this.ops["CreateCapacityReservationFleet"].applicator.apply(partialParams)
        );
    }

    invokeCreateCarrierGateway(partialParams: ToOptional<{
      [K in keyof CreateCarrierGatewayRequest]: (CreateCarrierGatewayRequest)[K]
    }>): Request<CreateCarrierGatewayResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCarrierGateway(
          this.ops["CreateCarrierGateway"].applicator.apply(partialParams)
        );
    }

    invokeCreateClientVpnEndpoint(partialParams: ToOptional<{
      [K in keyof CreateClientVpnEndpointRequest]: (CreateClientVpnEndpointRequest)[K]
    }>): Request<CreateClientVpnEndpointResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createClientVpnEndpoint(
          this.ops["CreateClientVpnEndpoint"].applicator.apply(partialParams)
        );
    }

    invokeCreateClientVpnRoute(partialParams: ToOptional<{
      [K in keyof CreateClientVpnRouteRequest]: (CreateClientVpnRouteRequest)[K]
    }>): Request<CreateClientVpnRouteResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createClientVpnRoute(
          this.ops["CreateClientVpnRoute"].applicator.apply(partialParams)
        );
    }

    invokeCreateCustomerGateway(partialParams: ToOptional<{
      [K in keyof CreateCustomerGatewayRequest]: (CreateCustomerGatewayRequest)[K]
    }>): Request<CreateCustomerGatewayResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCustomerGateway(
          this.ops["CreateCustomerGateway"].applicator.apply(partialParams)
        );
    }

    invokeCreateDefaultSubnet(partialParams: ToOptional<{
      [K in keyof CreateDefaultSubnetRequest]: (CreateDefaultSubnetRequest)[K]
    }>): Request<CreateDefaultSubnetResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDefaultSubnet(
          this.ops["CreateDefaultSubnet"].applicator.apply(partialParams)
        );
    }

    invokeCreateDhcpOptions(partialParams: ToOptional<{
      [K in keyof CreateDhcpOptionsRequest]: (CreateDhcpOptionsRequest)[K]
    }>): Request<CreateDhcpOptionsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDhcpOptions(
          this.ops["CreateDhcpOptions"].applicator.apply(partialParams)
        );
    }

    invokeCreateEgressOnlyInternetGateway(partialParams: ToOptional<{
      [K in keyof CreateEgressOnlyInternetGatewayRequest]: (CreateEgressOnlyInternetGatewayRequest)[K]
    }>): Request<CreateEgressOnlyInternetGatewayResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createEgressOnlyInternetGateway(
          this.ops["CreateEgressOnlyInternetGateway"].applicator.apply(partialParams)
        );
    }

    invokeCreateFleet(partialParams: ToOptional<{
      [K in keyof CreateFleetRequest]: (CreateFleetRequest)[K]
    }>): Request<CreateFleetResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFleet(
          this.ops["CreateFleet"].applicator.apply(partialParams)
        );
    }

    invokeCreateFlowLogs(partialParams: ToOptional<{
      [K in keyof CreateFlowLogsRequest]: (CreateFlowLogsRequest)[K]
    }>): Request<CreateFlowLogsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFlowLogs(
          this.ops["CreateFlowLogs"].applicator.apply(partialParams)
        );
    }

    invokeCreateFpgaImage(partialParams: ToOptional<{
      [K in keyof CreateFpgaImageRequest]: (CreateFpgaImageRequest)[K]
    }>): Request<CreateFpgaImageResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFpgaImage(
          this.ops["CreateFpgaImage"].applicator.apply(partialParams)
        );
    }

    invokeCreateImage(partialParams: ToOptional<{
      [K in keyof CreateImageRequest]: (CreateImageRequest)[K]
    }>): Request<CreateImageResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createImage(
          this.ops["CreateImage"].applicator.apply(partialParams)
        );
    }

    invokeCreateInstanceExportTask(partialParams: ToOptional<{
      [K in keyof CreateInstanceExportTaskRequest]: (CreateInstanceExportTaskRequest)[K]
    }>): Request<CreateInstanceExportTaskResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createInstanceExportTask(
          this.ops["CreateInstanceExportTask"].applicator.apply(partialParams)
        );
    }

    invokeCreateIpamPool(partialParams: ToOptional<{
      [K in keyof CreateIpamPoolRequest]: (CreateIpamPoolRequest)[K]
    }>): Request<CreateIpamPoolResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createIpamPool(
          this.ops["CreateIpamPool"].applicator.apply(partialParams)
        );
    }

    invokeCreateIpamScope(partialParams: ToOptional<{
      [K in keyof CreateIpamScopeRequest]: (CreateIpamScopeRequest)[K]
    }>): Request<CreateIpamScopeResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createIpamScope(
          this.ops["CreateIpamScope"].applicator.apply(partialParams)
        );
    }

    invokeCreateKeyPair(partialParams: ToOptional<{
      [K in keyof CreateKeyPairRequest]: (CreateKeyPairRequest)[K]
    }>): Request<KeyPair, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createKeyPair(
          this.ops["CreateKeyPair"].applicator.apply(partialParams)
        );
    }

    invokeCreateLaunchTemplate(partialParams: ToOptional<{
      [K in keyof CreateLaunchTemplateRequest]: (CreateLaunchTemplateRequest)[K]
    }>): Request<CreateLaunchTemplateResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createLaunchTemplate(
          this.ops["CreateLaunchTemplate"].applicator.apply(partialParams)
        );
    }

    invokeCreateLaunchTemplateVersion(partialParams: ToOptional<{
      [K in keyof CreateLaunchTemplateVersionRequest]: (CreateLaunchTemplateVersionRequest)[K]
    }>): Request<CreateLaunchTemplateVersionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createLaunchTemplateVersion(
          this.ops["CreateLaunchTemplateVersion"].applicator.apply(partialParams)
        );
    }

    invokeCreateLocalGatewayRoute(partialParams: ToOptional<{
      [K in keyof CreateLocalGatewayRouteRequest]: (CreateLocalGatewayRouteRequest)[K]
    }>): Request<CreateLocalGatewayRouteResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createLocalGatewayRoute(
          this.ops["CreateLocalGatewayRoute"].applicator.apply(partialParams)
        );
    }

    invokeCreateLocalGatewayRouteTableVpcAssociation(partialParams: ToOptional<{
      [K in keyof CreateLocalGatewayRouteTableVpcAssociationRequest]: (CreateLocalGatewayRouteTableVpcAssociationRequest)[K]
    }>): Request<CreateLocalGatewayRouteTableVpcAssociationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createLocalGatewayRouteTableVpcAssociation(
          this.ops["CreateLocalGatewayRouteTableVpcAssociation"].applicator.apply(partialParams)
        );
    }

    invokeCreateManagedPrefixList(partialParams: ToOptional<{
      [K in keyof CreateManagedPrefixListRequest]: (CreateManagedPrefixListRequest)[K]
    }>): Request<CreateManagedPrefixListResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createManagedPrefixList(
          this.ops["CreateManagedPrefixList"].applicator.apply(partialParams)
        );
    }

    invokeCreateNatGateway(partialParams: ToOptional<{
      [K in keyof CreateNatGatewayRequest]: (CreateNatGatewayRequest)[K]
    }>): Request<CreateNatGatewayResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createNatGateway(
          this.ops["CreateNatGateway"].applicator.apply(partialParams)
        );
    }

    invokeCreateNetworkAcl(partialParams: ToOptional<{
      [K in keyof CreateNetworkAclRequest]: (CreateNetworkAclRequest)[K]
    }>): Request<CreateNetworkAclResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createNetworkAcl(
          this.ops["CreateNetworkAcl"].applicator.apply(partialParams)
        );
    }

    invokeCreateNetworkAclEntry(partialParams: ToOptional<{
      [K in keyof CreateNetworkAclEntryRequest]: (CreateNetworkAclEntryRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createNetworkAclEntry(
          this.ops["CreateNetworkAclEntry"].applicator.apply(partialParams)
        );
    }

    invokeCreateNetworkInsightsAccessScope(partialParams: ToOptional<{
      [K in keyof CreateNetworkInsightsAccessScopeRequest]: (CreateNetworkInsightsAccessScopeRequest)[K]
    }>): Request<CreateNetworkInsightsAccessScopeResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createNetworkInsightsAccessScope(
          this.ops["CreateNetworkInsightsAccessScope"].applicator.apply(partialParams)
        );
    }

    invokeCreateNetworkInsightsPath(partialParams: ToOptional<{
      [K in keyof CreateNetworkInsightsPathRequest]: (CreateNetworkInsightsPathRequest)[K]
    }>): Request<CreateNetworkInsightsPathResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createNetworkInsightsPath(
          this.ops["CreateNetworkInsightsPath"].applicator.apply(partialParams)
        );
    }

    invokeCreateNetworkInterface(partialParams: ToOptional<{
      [K in keyof CreateNetworkInterfaceRequest]: (CreateNetworkInterfaceRequest)[K]
    }>): Request<CreateNetworkInterfaceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createNetworkInterface(
          this.ops["CreateNetworkInterface"].applicator.apply(partialParams)
        );
    }

    invokeCreateNetworkInterfacePermission(partialParams: ToOptional<{
      [K in keyof CreateNetworkInterfacePermissionRequest]: (CreateNetworkInterfacePermissionRequest)[K]
    }>): Request<CreateNetworkInterfacePermissionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createNetworkInterfacePermission(
          this.ops["CreateNetworkInterfacePermission"].applicator.apply(partialParams)
        );
    }

    invokeCreateReplaceRootVolumeTask(partialParams: ToOptional<{
      [K in keyof CreateReplaceRootVolumeTaskRequest]: (CreateReplaceRootVolumeTaskRequest)[K]
    }>): Request<CreateReplaceRootVolumeTaskResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createReplaceRootVolumeTask(
          this.ops["CreateReplaceRootVolumeTask"].applicator.apply(partialParams)
        );
    }

    invokeCreateReservedInstancesListing(partialParams: ToOptional<{
      [K in keyof CreateReservedInstancesListingRequest]: (CreateReservedInstancesListingRequest)[K]
    }>): Request<CreateReservedInstancesListingResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createReservedInstancesListing(
          this.ops["CreateReservedInstancesListing"].applicator.apply(partialParams)
        );
    }

    invokeCreateRestoreImageTask(partialParams: ToOptional<{
      [K in keyof CreateRestoreImageTaskRequest]: (CreateRestoreImageTaskRequest)[K]
    }>): Request<CreateRestoreImageTaskResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRestoreImageTask(
          this.ops["CreateRestoreImageTask"].applicator.apply(partialParams)
        );
    }

    invokeCreateRoute(partialParams: ToOptional<{
      [K in keyof CreateRouteRequest]: (CreateRouteRequest)[K]
    }>): Request<CreateRouteResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRoute(
          this.ops["CreateRoute"].applicator.apply(partialParams)
        );
    }

    invokeCreateRouteTable(partialParams: ToOptional<{
      [K in keyof CreateRouteTableRequest]: (CreateRouteTableRequest)[K]
    }>): Request<CreateRouteTableResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRouteTable(
          this.ops["CreateRouteTable"].applicator.apply(partialParams)
        );
    }

    invokeCreateSecurityGroup(partialParams: ToOptional<{
      [K in keyof CreateSecurityGroupRequest]: (CreateSecurityGroupRequest)[K]
    }>): Request<CreateSecurityGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSecurityGroup(
          this.ops["CreateSecurityGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateSnapshot(partialParams: ToOptional<{
      [K in keyof CreateSnapshotRequest]: (CreateSnapshotRequest)[K]
    }>): Request<Snapshot, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSnapshot(
          this.ops["CreateSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeCreateSnapshots(partialParams: ToOptional<{
      [K in keyof CreateSnapshotsRequest]: (CreateSnapshotsRequest)[K]
    }>): Request<CreateSnapshotsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSnapshots(
          this.ops["CreateSnapshots"].applicator.apply(partialParams)
        );
    }

    invokeCreateSpotDatafeedSubscription(partialParams: ToOptional<{
      [K in keyof CreateSpotDatafeedSubscriptionRequest]: (CreateSpotDatafeedSubscriptionRequest)[K]
    }>): Request<CreateSpotDatafeedSubscriptionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSpotDatafeedSubscription(
          this.ops["CreateSpotDatafeedSubscription"].applicator.apply(partialParams)
        );
    }

    invokeCreateStoreImageTask(partialParams: ToOptional<{
      [K in keyof CreateStoreImageTaskRequest]: (CreateStoreImageTaskRequest)[K]
    }>): Request<CreateStoreImageTaskResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createStoreImageTask(
          this.ops["CreateStoreImageTask"].applicator.apply(partialParams)
        );
    }

    invokeCreateSubnet(partialParams: ToOptional<{
      [K in keyof CreateSubnetRequest]: (CreateSubnetRequest)[K]
    }>): Request<CreateSubnetResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSubnet(
          this.ops["CreateSubnet"].applicator.apply(partialParams)
        );
    }

    invokeCreateSubnetCidrReservation(partialParams: ToOptional<{
      [K in keyof CreateSubnetCidrReservationRequest]: (CreateSubnetCidrReservationRequest)[K]
    }>): Request<CreateSubnetCidrReservationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSubnetCidrReservation(
          this.ops["CreateSubnetCidrReservation"].applicator.apply(partialParams)
        );
    }

    invokeCreateTags(partialParams: ToOptional<{
      [K in keyof CreateTagsRequest]: (CreateTagsRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTags(
          this.ops["CreateTags"].applicator.apply(partialParams)
        );
    }

    invokeCreateTrafficMirrorFilterRule(partialParams: ToOptional<{
      [K in keyof CreateTrafficMirrorFilterRuleRequest]: (CreateTrafficMirrorFilterRuleRequest)[K]
    }>): Request<CreateTrafficMirrorFilterRuleResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTrafficMirrorFilterRule(
          this.ops["CreateTrafficMirrorFilterRule"].applicator.apply(partialParams)
        );
    }

    invokeCreateTrafficMirrorSession(partialParams: ToOptional<{
      [K in keyof CreateTrafficMirrorSessionRequest]: (CreateTrafficMirrorSessionRequest)[K]
    }>): Request<CreateTrafficMirrorSessionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTrafficMirrorSession(
          this.ops["CreateTrafficMirrorSession"].applicator.apply(partialParams)
        );
    }

    invokeCreateTransitGatewayConnect(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayConnectRequest]: (CreateTransitGatewayConnectRequest)[K]
    }>): Request<CreateTransitGatewayConnectResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTransitGatewayConnect(
          this.ops["CreateTransitGatewayConnect"].applicator.apply(partialParams)
        );
    }

    invokeCreateTransitGatewayConnectPeer(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayConnectPeerRequest]: (CreateTransitGatewayConnectPeerRequest)[K]
    }>): Request<CreateTransitGatewayConnectPeerResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTransitGatewayConnectPeer(
          this.ops["CreateTransitGatewayConnectPeer"].applicator.apply(partialParams)
        );
    }

    invokeCreateTransitGatewayMulticastDomain(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayMulticastDomainRequest]: (CreateTransitGatewayMulticastDomainRequest)[K]
    }>): Request<CreateTransitGatewayMulticastDomainResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTransitGatewayMulticastDomain(
          this.ops["CreateTransitGatewayMulticastDomain"].applicator.apply(partialParams)
        );
    }

    invokeCreateTransitGatewayPeeringAttachment(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayPeeringAttachmentRequest]: (CreateTransitGatewayPeeringAttachmentRequest)[K]
    }>): Request<CreateTransitGatewayPeeringAttachmentResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTransitGatewayPeeringAttachment(
          this.ops["CreateTransitGatewayPeeringAttachment"].applicator.apply(partialParams)
        );
    }

    invokeCreateTransitGatewayPrefixListReference(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayPrefixListReferenceRequest]: (CreateTransitGatewayPrefixListReferenceRequest)[K]
    }>): Request<CreateTransitGatewayPrefixListReferenceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTransitGatewayPrefixListReference(
          this.ops["CreateTransitGatewayPrefixListReference"].applicator.apply(partialParams)
        );
    }

    invokeCreateTransitGatewayRoute(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayRouteRequest]: (CreateTransitGatewayRouteRequest)[K]
    }>): Request<CreateTransitGatewayRouteResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTransitGatewayRoute(
          this.ops["CreateTransitGatewayRoute"].applicator.apply(partialParams)
        );
    }

    invokeCreateTransitGatewayRouteTable(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayRouteTableRequest]: (CreateTransitGatewayRouteTableRequest)[K]
    }>): Request<CreateTransitGatewayRouteTableResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTransitGatewayRouteTable(
          this.ops["CreateTransitGatewayRouteTable"].applicator.apply(partialParams)
        );
    }

    invokeCreateTransitGatewayVpcAttachment(partialParams: ToOptional<{
      [K in keyof CreateTransitGatewayVpcAttachmentRequest]: (CreateTransitGatewayVpcAttachmentRequest)[K]
    }>): Request<CreateTransitGatewayVpcAttachmentResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTransitGatewayVpcAttachment(
          this.ops["CreateTransitGatewayVpcAttachment"].applicator.apply(partialParams)
        );
    }

    invokeCreateVolume(partialParams: ToOptional<{
      [K in keyof CreateVolumeRequest]: (CreateVolumeRequest)[K]
    }>): Request<Volume, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVolume(
          this.ops["CreateVolume"].applicator.apply(partialParams)
        );
    }

    invokeCreateVpcEndpoint(partialParams: ToOptional<{
      [K in keyof CreateVpcEndpointRequest]: (CreateVpcEndpointRequest)[K]
    }>): Request<CreateVpcEndpointResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVpcEndpoint(
          this.ops["CreateVpcEndpoint"].applicator.apply(partialParams)
        );
    }

    invokeCreateVpcEndpointConnectionNotification(partialParams: ToOptional<{
      [K in keyof CreateVpcEndpointConnectionNotificationRequest]: (CreateVpcEndpointConnectionNotificationRequest)[K]
    }>): Request<CreateVpcEndpointConnectionNotificationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVpcEndpointConnectionNotification(
          this.ops["CreateVpcEndpointConnectionNotification"].applicator.apply(partialParams)
        );
    }

    invokeCreateVpnConnection(partialParams: ToOptional<{
      [K in keyof CreateVpnConnectionRequest]: (CreateVpnConnectionRequest)[K]
    }>): Request<CreateVpnConnectionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVpnConnection(
          this.ops["CreateVpnConnection"].applicator.apply(partialParams)
        );
    }

    invokeCreateVpnConnectionRoute(partialParams: ToOptional<{
      [K in keyof CreateVpnConnectionRouteRequest]: (CreateVpnConnectionRouteRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVpnConnectionRoute(
          this.ops["CreateVpnConnectionRoute"].applicator.apply(partialParams)
        );
    }

    invokeCreateVpnGateway(partialParams: ToOptional<{
      [K in keyof CreateVpnGatewayRequest]: (CreateVpnGatewayRequest)[K]
    }>): Request<CreateVpnGatewayResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVpnGateway(
          this.ops["CreateVpnGateway"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCarrierGateway(partialParams: ToOptional<{
      [K in keyof DeleteCarrierGatewayRequest]: (DeleteCarrierGatewayRequest)[K]
    }>): Request<DeleteCarrierGatewayResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCarrierGateway(
          this.ops["DeleteCarrierGateway"].applicator.apply(partialParams)
        );
    }

    invokeDeleteClientVpnEndpoint(partialParams: ToOptional<{
      [K in keyof DeleteClientVpnEndpointRequest]: (DeleteClientVpnEndpointRequest)[K]
    }>): Request<DeleteClientVpnEndpointResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteClientVpnEndpoint(
          this.ops["DeleteClientVpnEndpoint"].applicator.apply(partialParams)
        );
    }

    invokeDeleteClientVpnRoute(partialParams: ToOptional<{
      [K in keyof DeleteClientVpnRouteRequest]: (DeleteClientVpnRouteRequest)[K]
    }>): Request<DeleteClientVpnRouteResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteClientVpnRoute(
          this.ops["DeleteClientVpnRoute"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCustomerGateway(partialParams: ToOptional<{
      [K in keyof DeleteCustomerGatewayRequest]: (DeleteCustomerGatewayRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCustomerGateway(
          this.ops["DeleteCustomerGateway"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDhcpOptions(partialParams: ToOptional<{
      [K in keyof DeleteDhcpOptionsRequest]: (DeleteDhcpOptionsRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDhcpOptions(
          this.ops["DeleteDhcpOptions"].applicator.apply(partialParams)
        );
    }

    invokeDeleteEgressOnlyInternetGateway(partialParams: ToOptional<{
      [K in keyof DeleteEgressOnlyInternetGatewayRequest]: (DeleteEgressOnlyInternetGatewayRequest)[K]
    }>): Request<DeleteEgressOnlyInternetGatewayResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEgressOnlyInternetGateway(
          this.ops["DeleteEgressOnlyInternetGateway"].applicator.apply(partialParams)
        );
    }

    invokeDeleteFleets(partialParams: ToOptional<{
      [K in keyof DeleteFleetsRequest]: (DeleteFleetsRequest)[K]
    }>): Request<DeleteFleetsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFleets(
          this.ops["DeleteFleets"].applicator.apply(partialParams)
        );
    }

    invokeDeleteFlowLogs(partialParams: ToOptional<{
      [K in keyof DeleteFlowLogsRequest]: (DeleteFlowLogsRequest)[K]
    }>): Request<DeleteFlowLogsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFlowLogs(
          this.ops["DeleteFlowLogs"].applicator.apply(partialParams)
        );
    }

    invokeDeleteFpgaImage(partialParams: ToOptional<{
      [K in keyof DeleteFpgaImageRequest]: (DeleteFpgaImageRequest)[K]
    }>): Request<DeleteFpgaImageResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFpgaImage(
          this.ops["DeleteFpgaImage"].applicator.apply(partialParams)
        );
    }

    invokeDeleteInstanceEventWindow(partialParams: ToOptional<{
      [K in keyof DeleteInstanceEventWindowRequest]: (DeleteInstanceEventWindowRequest)[K]
    }>): Request<DeleteInstanceEventWindowResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteInstanceEventWindow(
          this.ops["DeleteInstanceEventWindow"].applicator.apply(partialParams)
        );
    }

    invokeDeleteInternetGateway(partialParams: ToOptional<{
      [K in keyof DeleteInternetGatewayRequest]: (DeleteInternetGatewayRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteInternetGateway(
          this.ops["DeleteInternetGateway"].applicator.apply(partialParams)
        );
    }

    invokeDeleteIpam(partialParams: ToOptional<{
      [K in keyof DeleteIpamRequest]: (DeleteIpamRequest)[K]
    }>): Request<DeleteIpamResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteIpam(
          this.ops["DeleteIpam"].applicator.apply(partialParams)
        );
    }

    invokeDeleteIpamPool(partialParams: ToOptional<{
      [K in keyof DeleteIpamPoolRequest]: (DeleteIpamPoolRequest)[K]
    }>): Request<DeleteIpamPoolResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteIpamPool(
          this.ops["DeleteIpamPool"].applicator.apply(partialParams)
        );
    }

    invokeDeleteIpamScope(partialParams: ToOptional<{
      [K in keyof DeleteIpamScopeRequest]: (DeleteIpamScopeRequest)[K]
    }>): Request<DeleteIpamScopeResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteIpamScope(
          this.ops["DeleteIpamScope"].applicator.apply(partialParams)
        );
    }

    invokeDeleteLaunchTemplateVersions(partialParams: ToOptional<{
      [K in keyof DeleteLaunchTemplateVersionsRequest]: (DeleteLaunchTemplateVersionsRequest)[K]
    }>): Request<DeleteLaunchTemplateVersionsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteLaunchTemplateVersions(
          this.ops["DeleteLaunchTemplateVersions"].applicator.apply(partialParams)
        );
    }

    invokeDeleteLocalGatewayRoute(partialParams: ToOptional<{
      [K in keyof DeleteLocalGatewayRouteRequest]: (DeleteLocalGatewayRouteRequest)[K]
    }>): Request<DeleteLocalGatewayRouteResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteLocalGatewayRoute(
          this.ops["DeleteLocalGatewayRoute"].applicator.apply(partialParams)
        );
    }

    invokeDeleteLocalGatewayRouteTableVpcAssociation(partialParams: ToOptional<{
      [K in keyof DeleteLocalGatewayRouteTableVpcAssociationRequest]: (DeleteLocalGatewayRouteTableVpcAssociationRequest)[K]
    }>): Request<DeleteLocalGatewayRouteTableVpcAssociationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteLocalGatewayRouteTableVpcAssociation(
          this.ops["DeleteLocalGatewayRouteTableVpcAssociation"].applicator.apply(partialParams)
        );
    }

    invokeDeleteManagedPrefixList(partialParams: ToOptional<{
      [K in keyof DeleteManagedPrefixListRequest]: (DeleteManagedPrefixListRequest)[K]
    }>): Request<DeleteManagedPrefixListResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteManagedPrefixList(
          this.ops["DeleteManagedPrefixList"].applicator.apply(partialParams)
        );
    }

    invokeDeleteNatGateway(partialParams: ToOptional<{
      [K in keyof DeleteNatGatewayRequest]: (DeleteNatGatewayRequest)[K]
    }>): Request<DeleteNatGatewayResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteNatGateway(
          this.ops["DeleteNatGateway"].applicator.apply(partialParams)
        );
    }

    invokeDeleteNetworkAcl(partialParams: ToOptional<{
      [K in keyof DeleteNetworkAclRequest]: (DeleteNetworkAclRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteNetworkAcl(
          this.ops["DeleteNetworkAcl"].applicator.apply(partialParams)
        );
    }

    invokeDeleteNetworkAclEntry(partialParams: ToOptional<{
      [K in keyof DeleteNetworkAclEntryRequest]: (DeleteNetworkAclEntryRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteNetworkAclEntry(
          this.ops["DeleteNetworkAclEntry"].applicator.apply(partialParams)
        );
    }

    invokeDeleteNetworkInsightsAccessScope(partialParams: ToOptional<{
      [K in keyof DeleteNetworkInsightsAccessScopeRequest]: (DeleteNetworkInsightsAccessScopeRequest)[K]
    }>): Request<DeleteNetworkInsightsAccessScopeResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteNetworkInsightsAccessScope(
          this.ops["DeleteNetworkInsightsAccessScope"].applicator.apply(partialParams)
        );
    }

    invokeDeleteNetworkInsightsAccessScopeAnalysis(partialParams: ToOptional<{
      [K in keyof DeleteNetworkInsightsAccessScopeAnalysisRequest]: (DeleteNetworkInsightsAccessScopeAnalysisRequest)[K]
    }>): Request<DeleteNetworkInsightsAccessScopeAnalysisResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteNetworkInsightsAccessScopeAnalysis(
          this.ops["DeleteNetworkInsightsAccessScopeAnalysis"].applicator.apply(partialParams)
        );
    }

    invokeDeleteNetworkInsightsAnalysis(partialParams: ToOptional<{
      [K in keyof DeleteNetworkInsightsAnalysisRequest]: (DeleteNetworkInsightsAnalysisRequest)[K]
    }>): Request<DeleteNetworkInsightsAnalysisResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteNetworkInsightsAnalysis(
          this.ops["DeleteNetworkInsightsAnalysis"].applicator.apply(partialParams)
        );
    }

    invokeDeleteNetworkInsightsPath(partialParams: ToOptional<{
      [K in keyof DeleteNetworkInsightsPathRequest]: (DeleteNetworkInsightsPathRequest)[K]
    }>): Request<DeleteNetworkInsightsPathResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteNetworkInsightsPath(
          this.ops["DeleteNetworkInsightsPath"].applicator.apply(partialParams)
        );
    }

    invokeDeleteNetworkInterface(partialParams: ToOptional<{
      [K in keyof DeleteNetworkInterfaceRequest]: (DeleteNetworkInterfaceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteNetworkInterface(
          this.ops["DeleteNetworkInterface"].applicator.apply(partialParams)
        );
    }

    invokeDeleteNetworkInterfacePermission(partialParams: ToOptional<{
      [K in keyof DeleteNetworkInterfacePermissionRequest]: (DeleteNetworkInterfacePermissionRequest)[K]
    }>): Request<DeleteNetworkInterfacePermissionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteNetworkInterfacePermission(
          this.ops["DeleteNetworkInterfacePermission"].applicator.apply(partialParams)
        );
    }

    invokeDeletePlacementGroup(partialParams: ToOptional<{
      [K in keyof DeletePlacementGroupRequest]: (DeletePlacementGroupRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePlacementGroup(
          this.ops["DeletePlacementGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeletePublicIpv4Pool(partialParams: ToOptional<{
      [K in keyof DeletePublicIpv4PoolRequest]: (DeletePublicIpv4PoolRequest)[K]
    }>): Request<DeletePublicIpv4PoolResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePublicIpv4Pool(
          this.ops["DeletePublicIpv4Pool"].applicator.apply(partialParams)
        );
    }

    invokeDeleteQueuedReservedInstances(partialParams: ToOptional<{
      [K in keyof DeleteQueuedReservedInstancesRequest]: (DeleteQueuedReservedInstancesRequest)[K]
    }>): Request<DeleteQueuedReservedInstancesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteQueuedReservedInstances(
          this.ops["DeleteQueuedReservedInstances"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRoute(partialParams: ToOptional<{
      [K in keyof DeleteRouteRequest]: (DeleteRouteRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRoute(
          this.ops["DeleteRoute"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRouteTable(partialParams: ToOptional<{
      [K in keyof DeleteRouteTableRequest]: (DeleteRouteTableRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRouteTable(
          this.ops["DeleteRouteTable"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteSnapshotRequest]: (DeleteSnapshotRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSnapshot(
          this.ops["DeleteSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSubnet(partialParams: ToOptional<{
      [K in keyof DeleteSubnetRequest]: (DeleteSubnetRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSubnet(
          this.ops["DeleteSubnet"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSubnetCidrReservation(partialParams: ToOptional<{
      [K in keyof DeleteSubnetCidrReservationRequest]: (DeleteSubnetCidrReservationRequest)[K]
    }>): Request<DeleteSubnetCidrReservationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSubnetCidrReservation(
          this.ops["DeleteSubnetCidrReservation"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTags(partialParams: ToOptional<{
      [K in keyof DeleteTagsRequest]: (DeleteTagsRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTags(
          this.ops["DeleteTags"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTrafficMirrorFilter(partialParams: ToOptional<{
      [K in keyof DeleteTrafficMirrorFilterRequest]: (DeleteTrafficMirrorFilterRequest)[K]
    }>): Request<DeleteTrafficMirrorFilterResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTrafficMirrorFilter(
          this.ops["DeleteTrafficMirrorFilter"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTrafficMirrorFilterRule(partialParams: ToOptional<{
      [K in keyof DeleteTrafficMirrorFilterRuleRequest]: (DeleteTrafficMirrorFilterRuleRequest)[K]
    }>): Request<DeleteTrafficMirrorFilterRuleResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTrafficMirrorFilterRule(
          this.ops["DeleteTrafficMirrorFilterRule"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTrafficMirrorSession(partialParams: ToOptional<{
      [K in keyof DeleteTrafficMirrorSessionRequest]: (DeleteTrafficMirrorSessionRequest)[K]
    }>): Request<DeleteTrafficMirrorSessionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTrafficMirrorSession(
          this.ops["DeleteTrafficMirrorSession"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTrafficMirrorTarget(partialParams: ToOptional<{
      [K in keyof DeleteTrafficMirrorTargetRequest]: (DeleteTrafficMirrorTargetRequest)[K]
    }>): Request<DeleteTrafficMirrorTargetResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTrafficMirrorTarget(
          this.ops["DeleteTrafficMirrorTarget"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTransitGateway(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayRequest]: (DeleteTransitGatewayRequest)[K]
    }>): Request<DeleteTransitGatewayResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTransitGateway(
          this.ops["DeleteTransitGateway"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayConnect(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayConnectRequest]: (DeleteTransitGatewayConnectRequest)[K]
    }>): Request<DeleteTransitGatewayConnectResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTransitGatewayConnect(
          this.ops["DeleteTransitGatewayConnect"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayConnectPeer(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayConnectPeerRequest]: (DeleteTransitGatewayConnectPeerRequest)[K]
    }>): Request<DeleteTransitGatewayConnectPeerResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTransitGatewayConnectPeer(
          this.ops["DeleteTransitGatewayConnectPeer"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayMulticastDomain(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayMulticastDomainRequest]: (DeleteTransitGatewayMulticastDomainRequest)[K]
    }>): Request<DeleteTransitGatewayMulticastDomainResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTransitGatewayMulticastDomain(
          this.ops["DeleteTransitGatewayMulticastDomain"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayPeeringAttachment(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayPeeringAttachmentRequest]: (DeleteTransitGatewayPeeringAttachmentRequest)[K]
    }>): Request<DeleteTransitGatewayPeeringAttachmentResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTransitGatewayPeeringAttachment(
          this.ops["DeleteTransitGatewayPeeringAttachment"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayPrefixListReference(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayPrefixListReferenceRequest]: (DeleteTransitGatewayPrefixListReferenceRequest)[K]
    }>): Request<DeleteTransitGatewayPrefixListReferenceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTransitGatewayPrefixListReference(
          this.ops["DeleteTransitGatewayPrefixListReference"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayRoute(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayRouteRequest]: (DeleteTransitGatewayRouteRequest)[K]
    }>): Request<DeleteTransitGatewayRouteResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTransitGatewayRoute(
          this.ops["DeleteTransitGatewayRoute"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayRouteTable(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayRouteTableRequest]: (DeleteTransitGatewayRouteTableRequest)[K]
    }>): Request<DeleteTransitGatewayRouteTableResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTransitGatewayRouteTable(
          this.ops["DeleteTransitGatewayRouteTable"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTransitGatewayVpcAttachment(partialParams: ToOptional<{
      [K in keyof DeleteTransitGatewayVpcAttachmentRequest]: (DeleteTransitGatewayVpcAttachmentRequest)[K]
    }>): Request<DeleteTransitGatewayVpcAttachmentResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTransitGatewayVpcAttachment(
          this.ops["DeleteTransitGatewayVpcAttachment"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVolume(partialParams: ToOptional<{
      [K in keyof DeleteVolumeRequest]: (DeleteVolumeRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVolume(
          this.ops["DeleteVolume"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVpc(partialParams: ToOptional<{
      [K in keyof DeleteVpcRequest]: (DeleteVpcRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVpc(
          this.ops["DeleteVpc"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVpcEndpointConnectionNotifications(partialParams: ToOptional<{
      [K in keyof DeleteVpcEndpointConnectionNotificationsRequest]: (DeleteVpcEndpointConnectionNotificationsRequest)[K]
    }>): Request<DeleteVpcEndpointConnectionNotificationsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVpcEndpointConnectionNotifications(
          this.ops["DeleteVpcEndpointConnectionNotifications"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVpcEndpointServiceConfigurations(partialParams: ToOptional<{
      [K in keyof DeleteVpcEndpointServiceConfigurationsRequest]: (DeleteVpcEndpointServiceConfigurationsRequest)[K]
    }>): Request<DeleteVpcEndpointServiceConfigurationsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVpcEndpointServiceConfigurations(
          this.ops["DeleteVpcEndpointServiceConfigurations"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVpcEndpoints(partialParams: ToOptional<{
      [K in keyof DeleteVpcEndpointsRequest]: (DeleteVpcEndpointsRequest)[K]
    }>): Request<DeleteVpcEndpointsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVpcEndpoints(
          this.ops["DeleteVpcEndpoints"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVpcPeeringConnection(partialParams: ToOptional<{
      [K in keyof DeleteVpcPeeringConnectionRequest]: (DeleteVpcPeeringConnectionRequest)[K]
    }>): Request<DeleteVpcPeeringConnectionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVpcPeeringConnection(
          this.ops["DeleteVpcPeeringConnection"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVpnConnection(partialParams: ToOptional<{
      [K in keyof DeleteVpnConnectionRequest]: (DeleteVpnConnectionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVpnConnection(
          this.ops["DeleteVpnConnection"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVpnConnectionRoute(partialParams: ToOptional<{
      [K in keyof DeleteVpnConnectionRouteRequest]: (DeleteVpnConnectionRouteRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVpnConnectionRoute(
          this.ops["DeleteVpnConnectionRoute"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVpnGateway(partialParams: ToOptional<{
      [K in keyof DeleteVpnGatewayRequest]: (DeleteVpnGatewayRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVpnGateway(
          this.ops["DeleteVpnGateway"].applicator.apply(partialParams)
        );
    }

    invokeDeprovisionByoipCidr(partialParams: ToOptional<{
      [K in keyof DeprovisionByoipCidrRequest]: (DeprovisionByoipCidrRequest)[K]
    }>): Request<DeprovisionByoipCidrResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deprovisionByoipCidr(
          this.ops["DeprovisionByoipCidr"].applicator.apply(partialParams)
        );
    }

    invokeDeprovisionIpamPoolCidr(partialParams: ToOptional<{
      [K in keyof DeprovisionIpamPoolCidrRequest]: (DeprovisionIpamPoolCidrRequest)[K]
    }>): Request<DeprovisionIpamPoolCidrResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deprovisionIpamPoolCidr(
          this.ops["DeprovisionIpamPoolCidr"].applicator.apply(partialParams)
        );
    }

    invokeDeprovisionPublicIpv4PoolCidr(partialParams: ToOptional<{
      [K in keyof DeprovisionPublicIpv4PoolCidrRequest]: (DeprovisionPublicIpv4PoolCidrRequest)[K]
    }>): Request<DeprovisionPublicIpv4PoolCidrResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deprovisionPublicIpv4PoolCidr(
          this.ops["DeprovisionPublicIpv4PoolCidr"].applicator.apply(partialParams)
        );
    }

    invokeDeregisterImage(partialParams: ToOptional<{
      [K in keyof DeregisterImageRequest]: (DeregisterImageRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterImage(
          this.ops["DeregisterImage"].applicator.apply(partialParams)
        );
    }

    invokeDescribeByoipCidrs(partialParams: ToOptional<{
      [K in keyof DescribeByoipCidrsRequest]: (DescribeByoipCidrsRequest)[K]
    }>): Request<DescribeByoipCidrsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeByoipCidrs(
          this.ops["DescribeByoipCidrs"].applicator.apply(partialParams)
        );
    }

    invokeDescribeClientVpnAuthorizationRules(partialParams: ToOptional<{
      [K in keyof DescribeClientVpnAuthorizationRulesRequest]: (DescribeClientVpnAuthorizationRulesRequest)[K]
    }>): Request<DescribeClientVpnAuthorizationRulesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeClientVpnAuthorizationRules(
          this.ops["DescribeClientVpnAuthorizationRules"].applicator.apply(partialParams)
        );
    }

    invokeDescribeClientVpnConnections(partialParams: ToOptional<{
      [K in keyof DescribeClientVpnConnectionsRequest]: (DescribeClientVpnConnectionsRequest)[K]
    }>): Request<DescribeClientVpnConnectionsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeClientVpnConnections(
          this.ops["DescribeClientVpnConnections"].applicator.apply(partialParams)
        );
    }

    invokeDescribeClientVpnRoutes(partialParams: ToOptional<{
      [K in keyof DescribeClientVpnRoutesRequest]: (DescribeClientVpnRoutesRequest)[K]
    }>): Request<DescribeClientVpnRoutesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeClientVpnRoutes(
          this.ops["DescribeClientVpnRoutes"].applicator.apply(partialParams)
        );
    }

    invokeDescribeClientVpnTargetNetworks(partialParams: ToOptional<{
      [K in keyof DescribeClientVpnTargetNetworksRequest]: (DescribeClientVpnTargetNetworksRequest)[K]
    }>): Request<DescribeClientVpnTargetNetworksResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeClientVpnTargetNetworks(
          this.ops["DescribeClientVpnTargetNetworks"].applicator.apply(partialParams)
        );
    }

    invokeDescribeFleetHistory(partialParams: ToOptional<{
      [K in keyof DescribeFleetHistoryRequest]: (DescribeFleetHistoryRequest)[K]
    }>): Request<DescribeFleetHistoryResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFleetHistory(
          this.ops["DescribeFleetHistory"].applicator.apply(partialParams)
        );
    }

    invokeDescribeFleetInstances(partialParams: ToOptional<{
      [K in keyof DescribeFleetInstancesRequest]: (DescribeFleetInstancesRequest)[K]
    }>): Request<DescribeFleetInstancesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFleetInstances(
          this.ops["DescribeFleetInstances"].applicator.apply(partialParams)
        );
    }

    invokeDescribeFpgaImageAttribute(partialParams: ToOptional<{
      [K in keyof DescribeFpgaImageAttributeRequest]: (DescribeFpgaImageAttributeRequest)[K]
    }>): Request<DescribeFpgaImageAttributeResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFpgaImageAttribute(
          this.ops["DescribeFpgaImageAttribute"].applicator.apply(partialParams)
        );
    }

    invokeDescribeIdentityIdFormat(partialParams: ToOptional<{
      [K in keyof DescribeIdentityIdFormatRequest]: (DescribeIdentityIdFormatRequest)[K]
    }>): Request<DescribeIdentityIdFormatResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeIdentityIdFormat(
          this.ops["DescribeIdentityIdFormat"].applicator.apply(partialParams)
        );
    }

    invokeDescribeImageAttribute(partialParams: ToOptional<{
      [K in keyof DescribeImageAttributeRequest]: (DescribeImageAttributeRequest)[K]
    }>): Request<ImageAttribute, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeImageAttribute(
          this.ops["DescribeImageAttribute"].applicator.apply(partialParams)
        );
    }

    invokeDescribeInstanceAttribute(partialParams: ToOptional<{
      [K in keyof DescribeInstanceAttributeRequest]: (DescribeInstanceAttributeRequest)[K]
    }>): Request<InstanceAttribute, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeInstanceAttribute(
          this.ops["DescribeInstanceAttribute"].applicator.apply(partialParams)
        );
    }

    invokeDescribeNetworkInterfaceAttribute(partialParams: ToOptional<{
      [K in keyof DescribeNetworkInterfaceAttributeRequest]: (DescribeNetworkInterfaceAttributeRequest)[K]
    }>): Request<DescribeNetworkInterfaceAttributeResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeNetworkInterfaceAttribute(
          this.ops["DescribeNetworkInterfaceAttribute"].applicator.apply(partialParams)
        );
    }

    invokeDescribeScheduledInstanceAvailability(partialParams: ToOptional<{
      [K in keyof DescribeScheduledInstanceAvailabilityRequest]: (DescribeScheduledInstanceAvailabilityRequest)[K]
    }>): Request<DescribeScheduledInstanceAvailabilityResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeScheduledInstanceAvailability(
          this.ops["DescribeScheduledInstanceAvailability"].applicator.apply(partialParams)
        );
    }

    invokeDescribeSecurityGroupReferences(partialParams: ToOptional<{
      [K in keyof DescribeSecurityGroupReferencesRequest]: (DescribeSecurityGroupReferencesRequest)[K]
    }>): Request<DescribeSecurityGroupReferencesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeSecurityGroupReferences(
          this.ops["DescribeSecurityGroupReferences"].applicator.apply(partialParams)
        );
    }

    invokeDescribeSnapshotAttribute(partialParams: ToOptional<{
      [K in keyof DescribeSnapshotAttributeRequest]: (DescribeSnapshotAttributeRequest)[K]
    }>): Request<DescribeSnapshotAttributeResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeSnapshotAttribute(
          this.ops["DescribeSnapshotAttribute"].applicator.apply(partialParams)
        );
    }

    invokeDescribeSpotFleetInstances(partialParams: ToOptional<{
      [K in keyof DescribeSpotFleetInstancesRequest]: (DescribeSpotFleetInstancesRequest)[K]
    }>): Request<DescribeSpotFleetInstancesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeSpotFleetInstances(
          this.ops["DescribeSpotFleetInstances"].applicator.apply(partialParams)
        );
    }

    invokeDescribeSpotFleetRequestHistory(partialParams: ToOptional<{
      [K in keyof DescribeSpotFleetRequestHistoryRequest]: (DescribeSpotFleetRequestHistoryRequest)[K]
    }>): Request<DescribeSpotFleetRequestHistoryResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeSpotFleetRequestHistory(
          this.ops["DescribeSpotFleetRequestHistory"].applicator.apply(partialParams)
        );
    }

    invokeDescribeStaleSecurityGroups(partialParams: ToOptional<{
      [K in keyof DescribeStaleSecurityGroupsRequest]: (DescribeStaleSecurityGroupsRequest)[K]
    }>): Request<DescribeStaleSecurityGroupsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeStaleSecurityGroups(
          this.ops["DescribeStaleSecurityGroups"].applicator.apply(partialParams)
        );
    }

    invokeDescribeVolumeAttribute(partialParams: ToOptional<{
      [K in keyof DescribeVolumeAttributeRequest]: (DescribeVolumeAttributeRequest)[K]
    }>): Request<DescribeVolumeAttributeResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeVolumeAttribute(
          this.ops["DescribeVolumeAttribute"].applicator.apply(partialParams)
        );
    }

    invokeDescribeVpcAttribute(partialParams: ToOptional<{
      [K in keyof DescribeVpcAttributeRequest]: (DescribeVpcAttributeRequest)[K]
    }>): Request<DescribeVpcAttributeResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeVpcAttribute(
          this.ops["DescribeVpcAttribute"].applicator.apply(partialParams)
        );
    }

    invokeDescribeVpcEndpointServicePermissions(partialParams: ToOptional<{
      [K in keyof DescribeVpcEndpointServicePermissionsRequest]: (DescribeVpcEndpointServicePermissionsRequest)[K]
    }>): Request<DescribeVpcEndpointServicePermissionsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeVpcEndpointServicePermissions(
          this.ops["DescribeVpcEndpointServicePermissions"].applicator.apply(partialParams)
        );
    }

    invokeDetachClassicLinkVpc(partialParams: ToOptional<{
      [K in keyof DetachClassicLinkVpcRequest]: (DetachClassicLinkVpcRequest)[K]
    }>): Request<DetachClassicLinkVpcResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachClassicLinkVpc(
          this.ops["DetachClassicLinkVpc"].applicator.apply(partialParams)
        );
    }

    invokeDetachInternetGateway(partialParams: ToOptional<{
      [K in keyof DetachInternetGatewayRequest]: (DetachInternetGatewayRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachInternetGateway(
          this.ops["DetachInternetGateway"].applicator.apply(partialParams)
        );
    }

    invokeDetachNetworkInterface(partialParams: ToOptional<{
      [K in keyof DetachNetworkInterfaceRequest]: (DetachNetworkInterfaceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachNetworkInterface(
          this.ops["DetachNetworkInterface"].applicator.apply(partialParams)
        );
    }

    invokeDetachVolume(partialParams: ToOptional<{
      [K in keyof DetachVolumeRequest]: (DetachVolumeRequest)[K]
    }>): Request<VolumeAttachment, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachVolume(
          this.ops["DetachVolume"].applicator.apply(partialParams)
        );
    }

    invokeDetachVpnGateway(partialParams: ToOptional<{
      [K in keyof DetachVpnGatewayRequest]: (DetachVpnGatewayRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachVpnGateway(
          this.ops["DetachVpnGateway"].applicator.apply(partialParams)
        );
    }

    invokeDisableFastLaunch(partialParams: ToOptional<{
      [K in keyof DisableFastLaunchRequest]: (DisableFastLaunchRequest)[K]
    }>): Request<DisableFastLaunchResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableFastLaunch(
          this.ops["DisableFastLaunch"].applicator.apply(partialParams)
        );
    }

    invokeDisableFastSnapshotRestores(partialParams: ToOptional<{
      [K in keyof DisableFastSnapshotRestoresRequest]: (DisableFastSnapshotRestoresRequest)[K]
    }>): Request<DisableFastSnapshotRestoresResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableFastSnapshotRestores(
          this.ops["DisableFastSnapshotRestores"].applicator.apply(partialParams)
        );
    }

    invokeDisableImageDeprecation(partialParams: ToOptional<{
      [K in keyof DisableImageDeprecationRequest]: (DisableImageDeprecationRequest)[K]
    }>): Request<DisableImageDeprecationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableImageDeprecation(
          this.ops["DisableImageDeprecation"].applicator.apply(partialParams)
        );
    }

    invokeDisableIpamOrganizationAdminAccount(partialParams: ToOptional<{
      [K in keyof DisableIpamOrganizationAdminAccountRequest]: (DisableIpamOrganizationAdminAccountRequest)[K]
    }>): Request<DisableIpamOrganizationAdminAccountResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableIpamOrganizationAdminAccount(
          this.ops["DisableIpamOrganizationAdminAccount"].applicator.apply(partialParams)
        );
    }

    invokeDisableTransitGatewayRouteTablePropagation(partialParams: ToOptional<{
      [K in keyof DisableTransitGatewayRouteTablePropagationRequest]: (DisableTransitGatewayRouteTablePropagationRequest)[K]
    }>): Request<DisableTransitGatewayRouteTablePropagationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableTransitGatewayRouteTablePropagation(
          this.ops["DisableTransitGatewayRouteTablePropagation"].applicator.apply(partialParams)
        );
    }

    invokeDisableVgwRoutePropagation(partialParams: ToOptional<{
      [K in keyof DisableVgwRoutePropagationRequest]: (DisableVgwRoutePropagationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableVgwRoutePropagation(
          this.ops["DisableVgwRoutePropagation"].applicator.apply(partialParams)
        );
    }

    invokeDisableVpcClassicLink(partialParams: ToOptional<{
      [K in keyof DisableVpcClassicLinkRequest]: (DisableVpcClassicLinkRequest)[K]
    }>): Request<DisableVpcClassicLinkResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableVpcClassicLink(
          this.ops["DisableVpcClassicLink"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateClientVpnTargetNetwork(partialParams: ToOptional<{
      [K in keyof DisassociateClientVpnTargetNetworkRequest]: (DisassociateClientVpnTargetNetworkRequest)[K]
    }>): Request<DisassociateClientVpnTargetNetworkResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateClientVpnTargetNetwork(
          this.ops["DisassociateClientVpnTargetNetwork"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateIamInstanceProfile(partialParams: ToOptional<{
      [K in keyof DisassociateIamInstanceProfileRequest]: (DisassociateIamInstanceProfileRequest)[K]
    }>): Request<DisassociateIamInstanceProfileResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateIamInstanceProfile(
          this.ops["DisassociateIamInstanceProfile"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateInstanceEventWindow(partialParams: ToOptional<{
      [K in keyof DisassociateInstanceEventWindowRequest]: (DisassociateInstanceEventWindowRequest)[K]
    }>): Request<DisassociateInstanceEventWindowResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateInstanceEventWindow(
          this.ops["DisassociateInstanceEventWindow"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateRouteTable(partialParams: ToOptional<{
      [K in keyof DisassociateRouteTableRequest]: (DisassociateRouteTableRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateRouteTable(
          this.ops["DisassociateRouteTable"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateSubnetCidrBlock(partialParams: ToOptional<{
      [K in keyof DisassociateSubnetCidrBlockRequest]: (DisassociateSubnetCidrBlockRequest)[K]
    }>): Request<DisassociateSubnetCidrBlockResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateSubnetCidrBlock(
          this.ops["DisassociateSubnetCidrBlock"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateTransitGatewayRouteTable(partialParams: ToOptional<{
      [K in keyof DisassociateTransitGatewayRouteTableRequest]: (DisassociateTransitGatewayRouteTableRequest)[K]
    }>): Request<DisassociateTransitGatewayRouteTableResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateTransitGatewayRouteTable(
          this.ops["DisassociateTransitGatewayRouteTable"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateTrunkInterface(partialParams: ToOptional<{
      [K in keyof DisassociateTrunkInterfaceRequest]: (DisassociateTrunkInterfaceRequest)[K]
    }>): Request<DisassociateTrunkInterfaceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateTrunkInterface(
          this.ops["DisassociateTrunkInterface"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateVpcCidrBlock(partialParams: ToOptional<{
      [K in keyof DisassociateVpcCidrBlockRequest]: (DisassociateVpcCidrBlockRequest)[K]
    }>): Request<DisassociateVpcCidrBlockResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateVpcCidrBlock(
          this.ops["DisassociateVpcCidrBlock"].applicator.apply(partialParams)
        );
    }

    invokeEnableFastLaunch(partialParams: ToOptional<{
      [K in keyof EnableFastLaunchRequest]: (EnableFastLaunchRequest)[K]
    }>): Request<EnableFastLaunchResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableFastLaunch(
          this.ops["EnableFastLaunch"].applicator.apply(partialParams)
        );
    }

    invokeEnableFastSnapshotRestores(partialParams: ToOptional<{
      [K in keyof EnableFastSnapshotRestoresRequest]: (EnableFastSnapshotRestoresRequest)[K]
    }>): Request<EnableFastSnapshotRestoresResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableFastSnapshotRestores(
          this.ops["EnableFastSnapshotRestores"].applicator.apply(partialParams)
        );
    }

    invokeEnableImageDeprecation(partialParams: ToOptional<{
      [K in keyof EnableImageDeprecationRequest]: (EnableImageDeprecationRequest)[K]
    }>): Request<EnableImageDeprecationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableImageDeprecation(
          this.ops["EnableImageDeprecation"].applicator.apply(partialParams)
        );
    }

    invokeEnableIpamOrganizationAdminAccount(partialParams: ToOptional<{
      [K in keyof EnableIpamOrganizationAdminAccountRequest]: (EnableIpamOrganizationAdminAccountRequest)[K]
    }>): Request<EnableIpamOrganizationAdminAccountResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableIpamOrganizationAdminAccount(
          this.ops["EnableIpamOrganizationAdminAccount"].applicator.apply(partialParams)
        );
    }

    invokeEnableTransitGatewayRouteTablePropagation(partialParams: ToOptional<{
      [K in keyof EnableTransitGatewayRouteTablePropagationRequest]: (EnableTransitGatewayRouteTablePropagationRequest)[K]
    }>): Request<EnableTransitGatewayRouteTablePropagationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableTransitGatewayRouteTablePropagation(
          this.ops["EnableTransitGatewayRouteTablePropagation"].applicator.apply(partialParams)
        );
    }

    invokeEnableVgwRoutePropagation(partialParams: ToOptional<{
      [K in keyof EnableVgwRoutePropagationRequest]: (EnableVgwRoutePropagationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableVgwRoutePropagation(
          this.ops["EnableVgwRoutePropagation"].applicator.apply(partialParams)
        );
    }

    invokeEnableVolumeIO(partialParams: ToOptional<{
      [K in keyof EnableVolumeIORequest]: (EnableVolumeIORequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableVolumeIO(
          this.ops["EnableVolumeIO"].applicator.apply(partialParams)
        );
    }

    invokeEnableVpcClassicLink(partialParams: ToOptional<{
      [K in keyof EnableVpcClassicLinkRequest]: (EnableVpcClassicLinkRequest)[K]
    }>): Request<EnableVpcClassicLinkResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableVpcClassicLink(
          this.ops["EnableVpcClassicLink"].applicator.apply(partialParams)
        );
    }

    invokeExportClientVpnClientCertificateRevocationList(partialParams: ToOptional<{
      [K in keyof ExportClientVpnClientCertificateRevocationListRequest]: (ExportClientVpnClientCertificateRevocationListRequest)[K]
    }>): Request<ExportClientVpnClientCertificateRevocationListResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.exportClientVpnClientCertificateRevocationList(
          this.ops["ExportClientVpnClientCertificateRevocationList"].applicator.apply(partialParams)
        );
    }

    invokeExportClientVpnClientConfiguration(partialParams: ToOptional<{
      [K in keyof ExportClientVpnClientConfigurationRequest]: (ExportClientVpnClientConfigurationRequest)[K]
    }>): Request<ExportClientVpnClientConfigurationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.exportClientVpnClientConfiguration(
          this.ops["ExportClientVpnClientConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeExportImage(partialParams: ToOptional<{
      [K in keyof ExportImageRequest]: (ExportImageRequest)[K]
    }>): Request<ExportImageResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.exportImage(
          this.ops["ExportImage"].applicator.apply(partialParams)
        );
    }

    invokeExportTransitGatewayRoutes(partialParams: ToOptional<{
      [K in keyof ExportTransitGatewayRoutesRequest]: (ExportTransitGatewayRoutesRequest)[K]
    }>): Request<ExportTransitGatewayRoutesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.exportTransitGatewayRoutes(
          this.ops["ExportTransitGatewayRoutes"].applicator.apply(partialParams)
        );
    }

    invokeGetAssociatedIpv6PoolCidrs(partialParams: ToOptional<{
      [K in keyof GetAssociatedIpv6PoolCidrsRequest]: (GetAssociatedIpv6PoolCidrsRequest)[K]
    }>): Request<GetAssociatedIpv6PoolCidrsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAssociatedIpv6PoolCidrs(
          this.ops["GetAssociatedIpv6PoolCidrs"].applicator.apply(partialParams)
        );
    }

    invokeGetCapacityReservationUsage(partialParams: ToOptional<{
      [K in keyof GetCapacityReservationUsageRequest]: (GetCapacityReservationUsageRequest)[K]
    }>): Request<GetCapacityReservationUsageResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCapacityReservationUsage(
          this.ops["GetCapacityReservationUsage"].applicator.apply(partialParams)
        );
    }

    invokeGetCoipPoolUsage(partialParams: ToOptional<{
      [K in keyof GetCoipPoolUsageRequest]: (GetCoipPoolUsageRequest)[K]
    }>): Request<GetCoipPoolUsageResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCoipPoolUsage(
          this.ops["GetCoipPoolUsage"].applicator.apply(partialParams)
        );
    }

    invokeGetConsoleOutput(partialParams: ToOptional<{
      [K in keyof GetConsoleOutputRequest]: (GetConsoleOutputRequest)[K]
    }>): Request<GetConsoleOutputResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getConsoleOutput(
          this.ops["GetConsoleOutput"].applicator.apply(partialParams)
        );
    }

    invokeGetConsoleScreenshot(partialParams: ToOptional<{
      [K in keyof GetConsoleScreenshotRequest]: (GetConsoleScreenshotRequest)[K]
    }>): Request<GetConsoleScreenshotResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getConsoleScreenshot(
          this.ops["GetConsoleScreenshot"].applicator.apply(partialParams)
        );
    }

    invokeGetDefaultCreditSpecification(partialParams: ToOptional<{
      [K in keyof GetDefaultCreditSpecificationRequest]: (GetDefaultCreditSpecificationRequest)[K]
    }>): Request<GetDefaultCreditSpecificationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDefaultCreditSpecification(
          this.ops["GetDefaultCreditSpecification"].applicator.apply(partialParams)
        );
    }

    invokeGetFlowLogsIntegrationTemplate(partialParams: ToOptional<{
      [K in keyof GetFlowLogsIntegrationTemplateRequest]: (GetFlowLogsIntegrationTemplateRequest)[K]
    }>): Request<GetFlowLogsIntegrationTemplateResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFlowLogsIntegrationTemplate(
          this.ops["GetFlowLogsIntegrationTemplate"].applicator.apply(partialParams)
        );
    }

    invokeGetGroupsForCapacityReservation(partialParams: ToOptional<{
      [K in keyof GetGroupsForCapacityReservationRequest]: (GetGroupsForCapacityReservationRequest)[K]
    }>): Request<GetGroupsForCapacityReservationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getGroupsForCapacityReservation(
          this.ops["GetGroupsForCapacityReservation"].applicator.apply(partialParams)
        );
    }

    invokeGetHostReservationPurchasePreview(partialParams: ToOptional<{
      [K in keyof GetHostReservationPurchasePreviewRequest]: (GetHostReservationPurchasePreviewRequest)[K]
    }>): Request<GetHostReservationPurchasePreviewResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getHostReservationPurchasePreview(
          this.ops["GetHostReservationPurchasePreview"].applicator.apply(partialParams)
        );
    }

    invokeGetInstanceTypesFromInstanceRequirements(partialParams: ToOptional<{
      [K in keyof GetInstanceTypesFromInstanceRequirementsRequest]: (GetInstanceTypesFromInstanceRequirementsRequest)[K]
    }>): Request<GetInstanceTypesFromInstanceRequirementsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInstanceTypesFromInstanceRequirements(
          this.ops["GetInstanceTypesFromInstanceRequirements"].applicator.apply(partialParams)
        );
    }

    invokeGetIpamAddressHistory(partialParams: ToOptional<{
      [K in keyof GetIpamAddressHistoryRequest]: (GetIpamAddressHistoryRequest)[K]
    }>): Request<GetIpamAddressHistoryResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getIpamAddressHistory(
          this.ops["GetIpamAddressHistory"].applicator.apply(partialParams)
        );
    }

    invokeGetIpamPoolAllocations(partialParams: ToOptional<{
      [K in keyof GetIpamPoolAllocationsRequest]: (GetIpamPoolAllocationsRequest)[K]
    }>): Request<GetIpamPoolAllocationsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getIpamPoolAllocations(
          this.ops["GetIpamPoolAllocations"].applicator.apply(partialParams)
        );
    }

    invokeGetIpamPoolCidrs(partialParams: ToOptional<{
      [K in keyof GetIpamPoolCidrsRequest]: (GetIpamPoolCidrsRequest)[K]
    }>): Request<GetIpamPoolCidrsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getIpamPoolCidrs(
          this.ops["GetIpamPoolCidrs"].applicator.apply(partialParams)
        );
    }

    invokeGetIpamResourceCidrs(partialParams: ToOptional<{
      [K in keyof GetIpamResourceCidrsRequest]: (GetIpamResourceCidrsRequest)[K]
    }>): Request<GetIpamResourceCidrsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getIpamResourceCidrs(
          this.ops["GetIpamResourceCidrs"].applicator.apply(partialParams)
        );
    }

    invokeGetLaunchTemplateData(partialParams: ToOptional<{
      [K in keyof GetLaunchTemplateDataRequest]: (GetLaunchTemplateDataRequest)[K]
    }>): Request<GetLaunchTemplateDataResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getLaunchTemplateData(
          this.ops["GetLaunchTemplateData"].applicator.apply(partialParams)
        );
    }

    invokeGetManagedPrefixListAssociations(partialParams: ToOptional<{
      [K in keyof GetManagedPrefixListAssociationsRequest]: (GetManagedPrefixListAssociationsRequest)[K]
    }>): Request<GetManagedPrefixListAssociationsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getManagedPrefixListAssociations(
          this.ops["GetManagedPrefixListAssociations"].applicator.apply(partialParams)
        );
    }

    invokeGetManagedPrefixListEntries(partialParams: ToOptional<{
      [K in keyof GetManagedPrefixListEntriesRequest]: (GetManagedPrefixListEntriesRequest)[K]
    }>): Request<GetManagedPrefixListEntriesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getManagedPrefixListEntries(
          this.ops["GetManagedPrefixListEntries"].applicator.apply(partialParams)
        );
    }

    invokeGetNetworkInsightsAccessScopeAnalysisFindings(partialParams: ToOptional<{
      [K in keyof GetNetworkInsightsAccessScopeAnalysisFindingsRequest]: (GetNetworkInsightsAccessScopeAnalysisFindingsRequest)[K]
    }>): Request<GetNetworkInsightsAccessScopeAnalysisFindingsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getNetworkInsightsAccessScopeAnalysisFindings(
          this.ops["GetNetworkInsightsAccessScopeAnalysisFindings"].applicator.apply(partialParams)
        );
    }

    invokeGetNetworkInsightsAccessScopeContent(partialParams: ToOptional<{
      [K in keyof GetNetworkInsightsAccessScopeContentRequest]: (GetNetworkInsightsAccessScopeContentRequest)[K]
    }>): Request<GetNetworkInsightsAccessScopeContentResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getNetworkInsightsAccessScopeContent(
          this.ops["GetNetworkInsightsAccessScopeContent"].applicator.apply(partialParams)
        );
    }

    invokeGetPasswordData(partialParams: ToOptional<{
      [K in keyof GetPasswordDataRequest]: (GetPasswordDataRequest)[K]
    }>): Request<GetPasswordDataResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPasswordData(
          this.ops["GetPasswordData"].applicator.apply(partialParams)
        );
    }

    invokeGetReservedInstancesExchangeQuote(partialParams: ToOptional<{
      [K in keyof GetReservedInstancesExchangeQuoteRequest]: (GetReservedInstancesExchangeQuoteRequest)[K]
    }>): Request<GetReservedInstancesExchangeQuoteResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getReservedInstancesExchangeQuote(
          this.ops["GetReservedInstancesExchangeQuote"].applicator.apply(partialParams)
        );
    }

    invokeGetSpotPlacementScores(partialParams: ToOptional<{
      [K in keyof GetSpotPlacementScoresRequest]: (GetSpotPlacementScoresRequest)[K]
    }>): Request<GetSpotPlacementScoresResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSpotPlacementScores(
          this.ops["GetSpotPlacementScores"].applicator.apply(partialParams)
        );
    }

    invokeGetSubnetCidrReservations(partialParams: ToOptional<{
      [K in keyof GetSubnetCidrReservationsRequest]: (GetSubnetCidrReservationsRequest)[K]
    }>): Request<GetSubnetCidrReservationsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSubnetCidrReservations(
          this.ops["GetSubnetCidrReservations"].applicator.apply(partialParams)
        );
    }

    invokeGetTransitGatewayAttachmentPropagations(partialParams: ToOptional<{
      [K in keyof GetTransitGatewayAttachmentPropagationsRequest]: (GetTransitGatewayAttachmentPropagationsRequest)[K]
    }>): Request<GetTransitGatewayAttachmentPropagationsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTransitGatewayAttachmentPropagations(
          this.ops["GetTransitGatewayAttachmentPropagations"].applicator.apply(partialParams)
        );
    }

    invokeGetTransitGatewayPrefixListReferences(partialParams: ToOptional<{
      [K in keyof GetTransitGatewayPrefixListReferencesRequest]: (GetTransitGatewayPrefixListReferencesRequest)[K]
    }>): Request<GetTransitGatewayPrefixListReferencesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTransitGatewayPrefixListReferences(
          this.ops["GetTransitGatewayPrefixListReferences"].applicator.apply(partialParams)
        );
    }

    invokeGetTransitGatewayRouteTableAssociations(partialParams: ToOptional<{
      [K in keyof GetTransitGatewayRouteTableAssociationsRequest]: (GetTransitGatewayRouteTableAssociationsRequest)[K]
    }>): Request<GetTransitGatewayRouteTableAssociationsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTransitGatewayRouteTableAssociations(
          this.ops["GetTransitGatewayRouteTableAssociations"].applicator.apply(partialParams)
        );
    }

    invokeGetTransitGatewayRouteTablePropagations(partialParams: ToOptional<{
      [K in keyof GetTransitGatewayRouteTablePropagationsRequest]: (GetTransitGatewayRouteTablePropagationsRequest)[K]
    }>): Request<GetTransitGatewayRouteTablePropagationsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTransitGatewayRouteTablePropagations(
          this.ops["GetTransitGatewayRouteTablePropagations"].applicator.apply(partialParams)
        );
    }

    invokeGetVpnConnectionDeviceSampleConfiguration(partialParams: ToOptional<{
      [K in keyof GetVpnConnectionDeviceSampleConfigurationRequest]: (GetVpnConnectionDeviceSampleConfigurationRequest)[K]
    }>): Request<GetVpnConnectionDeviceSampleConfigurationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVpnConnectionDeviceSampleConfiguration(
          this.ops["GetVpnConnectionDeviceSampleConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeImportClientVpnClientCertificateRevocationList(partialParams: ToOptional<{
      [K in keyof ImportClientVpnClientCertificateRevocationListRequest]: (ImportClientVpnClientCertificateRevocationListRequest)[K]
    }>): Request<ImportClientVpnClientCertificateRevocationListResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importClientVpnClientCertificateRevocationList(
          this.ops["ImportClientVpnClientCertificateRevocationList"].applicator.apply(partialParams)
        );
    }

    invokeImportInstance(partialParams: ToOptional<{
      [K in keyof ImportInstanceRequest]: (ImportInstanceRequest)[K]
    }>): Request<ImportInstanceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importInstance(
          this.ops["ImportInstance"].applicator.apply(partialParams)
        );
    }

    invokeImportKeyPair(partialParams: ToOptional<{
      [K in keyof ImportKeyPairRequest]: (ImportKeyPairRequest)[K]
    }>): Request<ImportKeyPairResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importKeyPair(
          this.ops["ImportKeyPair"].applicator.apply(partialParams)
        );
    }

    invokeImportVolume(partialParams: ToOptional<{
      [K in keyof ImportVolumeRequest]: (ImportVolumeRequest)[K]
    }>): Request<ImportVolumeResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importVolume(
          this.ops["ImportVolume"].applicator.apply(partialParams)
        );
    }

    invokeModifyAddressAttribute(partialParams: ToOptional<{
      [K in keyof ModifyAddressAttributeRequest]: (ModifyAddressAttributeRequest)[K]
    }>): Request<ModifyAddressAttributeResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyAddressAttribute(
          this.ops["ModifyAddressAttribute"].applicator.apply(partialParams)
        );
    }

    invokeModifyAvailabilityZoneGroup(partialParams: ToOptional<{
      [K in keyof ModifyAvailabilityZoneGroupRequest]: (ModifyAvailabilityZoneGroupRequest)[K]
    }>): Request<ModifyAvailabilityZoneGroupResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyAvailabilityZoneGroup(
          this.ops["ModifyAvailabilityZoneGroup"].applicator.apply(partialParams)
        );
    }

    invokeModifyCapacityReservation(partialParams: ToOptional<{
      [K in keyof ModifyCapacityReservationRequest]: (ModifyCapacityReservationRequest)[K]
    }>): Request<ModifyCapacityReservationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyCapacityReservation(
          this.ops["ModifyCapacityReservation"].applicator.apply(partialParams)
        );
    }

    invokeModifyCapacityReservationFleet(partialParams: ToOptional<{
      [K in keyof ModifyCapacityReservationFleetRequest]: (ModifyCapacityReservationFleetRequest)[K]
    }>): Request<ModifyCapacityReservationFleetResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyCapacityReservationFleet(
          this.ops["ModifyCapacityReservationFleet"].applicator.apply(partialParams)
        );
    }

    invokeModifyClientVpnEndpoint(partialParams: ToOptional<{
      [K in keyof ModifyClientVpnEndpointRequest]: (ModifyClientVpnEndpointRequest)[K]
    }>): Request<ModifyClientVpnEndpointResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyClientVpnEndpoint(
          this.ops["ModifyClientVpnEndpoint"].applicator.apply(partialParams)
        );
    }

    invokeModifyDefaultCreditSpecification(partialParams: ToOptional<{
      [K in keyof ModifyDefaultCreditSpecificationRequest]: (ModifyDefaultCreditSpecificationRequest)[K]
    }>): Request<ModifyDefaultCreditSpecificationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDefaultCreditSpecification(
          this.ops["ModifyDefaultCreditSpecification"].applicator.apply(partialParams)
        );
    }

    invokeModifyEbsDefaultKmsKeyId(partialParams: ToOptional<{
      [K in keyof ModifyEbsDefaultKmsKeyIdRequest]: (ModifyEbsDefaultKmsKeyIdRequest)[K]
    }>): Request<ModifyEbsDefaultKmsKeyIdResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyEbsDefaultKmsKeyId(
          this.ops["ModifyEbsDefaultKmsKeyId"].applicator.apply(partialParams)
        );
    }

    invokeModifyFleet(partialParams: ToOptional<{
      [K in keyof ModifyFleetRequest]: (ModifyFleetRequest)[K]
    }>): Request<ModifyFleetResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyFleet(
          this.ops["ModifyFleet"].applicator.apply(partialParams)
        );
    }

    invokeModifyFpgaImageAttribute(partialParams: ToOptional<{
      [K in keyof ModifyFpgaImageAttributeRequest]: (ModifyFpgaImageAttributeRequest)[K]
    }>): Request<ModifyFpgaImageAttributeResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyFpgaImageAttribute(
          this.ops["ModifyFpgaImageAttribute"].applicator.apply(partialParams)
        );
    }

    invokeModifyHosts(partialParams: ToOptional<{
      [K in keyof ModifyHostsRequest]: (ModifyHostsRequest)[K]
    }>): Request<ModifyHostsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyHosts(
          this.ops["ModifyHosts"].applicator.apply(partialParams)
        );
    }

    invokeModifyIdFormat(partialParams: ToOptional<{
      [K in keyof ModifyIdFormatRequest]: (ModifyIdFormatRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyIdFormat(
          this.ops["ModifyIdFormat"].applicator.apply(partialParams)
        );
    }

    invokeModifyIdentityIdFormat(partialParams: ToOptional<{
      [K in keyof ModifyIdentityIdFormatRequest]: (ModifyIdentityIdFormatRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyIdentityIdFormat(
          this.ops["ModifyIdentityIdFormat"].applicator.apply(partialParams)
        );
    }

    invokeModifyImageAttribute(partialParams: ToOptional<{
      [K in keyof ModifyImageAttributeRequest]: (ModifyImageAttributeRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyImageAttribute(
          this.ops["ModifyImageAttribute"].applicator.apply(partialParams)
        );
    }

    invokeModifyInstanceAttribute(partialParams: ToOptional<{
      [K in keyof ModifyInstanceAttributeRequest]: (ModifyInstanceAttributeRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyInstanceAttribute(
          this.ops["ModifyInstanceAttribute"].applicator.apply(partialParams)
        );
    }

    invokeModifyInstanceCapacityReservationAttributes(partialParams: ToOptional<{
      [K in keyof ModifyInstanceCapacityReservationAttributesRequest]: (ModifyInstanceCapacityReservationAttributesRequest)[K]
    }>): Request<ModifyInstanceCapacityReservationAttributesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyInstanceCapacityReservationAttributes(
          this.ops["ModifyInstanceCapacityReservationAttributes"].applicator.apply(partialParams)
        );
    }

    invokeModifyInstanceCreditSpecification(partialParams: ToOptional<{
      [K in keyof ModifyInstanceCreditSpecificationRequest]: (ModifyInstanceCreditSpecificationRequest)[K]
    }>): Request<ModifyInstanceCreditSpecificationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyInstanceCreditSpecification(
          this.ops["ModifyInstanceCreditSpecification"].applicator.apply(partialParams)
        );
    }

    invokeModifyInstanceEventStartTime(partialParams: ToOptional<{
      [K in keyof ModifyInstanceEventStartTimeRequest]: (ModifyInstanceEventStartTimeRequest)[K]
    }>): Request<ModifyInstanceEventStartTimeResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyInstanceEventStartTime(
          this.ops["ModifyInstanceEventStartTime"].applicator.apply(partialParams)
        );
    }

    invokeModifyInstanceEventWindow(partialParams: ToOptional<{
      [K in keyof ModifyInstanceEventWindowRequest]: (ModifyInstanceEventWindowRequest)[K]
    }>): Request<ModifyInstanceEventWindowResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyInstanceEventWindow(
          this.ops["ModifyInstanceEventWindow"].applicator.apply(partialParams)
        );
    }

    invokeModifyInstanceMetadataOptions(partialParams: ToOptional<{
      [K in keyof ModifyInstanceMetadataOptionsRequest]: (ModifyInstanceMetadataOptionsRequest)[K]
    }>): Request<ModifyInstanceMetadataOptionsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyInstanceMetadataOptions(
          this.ops["ModifyInstanceMetadataOptions"].applicator.apply(partialParams)
        );
    }

    invokeModifyInstancePlacement(partialParams: ToOptional<{
      [K in keyof ModifyInstancePlacementRequest]: (ModifyInstancePlacementRequest)[K]
    }>): Request<ModifyInstancePlacementResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyInstancePlacement(
          this.ops["ModifyInstancePlacement"].applicator.apply(partialParams)
        );
    }

    invokeModifyIpam(partialParams: ToOptional<{
      [K in keyof ModifyIpamRequest]: (ModifyIpamRequest)[K]
    }>): Request<ModifyIpamResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyIpam(
          this.ops["ModifyIpam"].applicator.apply(partialParams)
        );
    }

    invokeModifyIpamPool(partialParams: ToOptional<{
      [K in keyof ModifyIpamPoolRequest]: (ModifyIpamPoolRequest)[K]
    }>): Request<ModifyIpamPoolResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyIpamPool(
          this.ops["ModifyIpamPool"].applicator.apply(partialParams)
        );
    }

    invokeModifyIpamResourceCidr(partialParams: ToOptional<{
      [K in keyof ModifyIpamResourceCidrRequest]: (ModifyIpamResourceCidrRequest)[K]
    }>): Request<ModifyIpamResourceCidrResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyIpamResourceCidr(
          this.ops["ModifyIpamResourceCidr"].applicator.apply(partialParams)
        );
    }

    invokeModifyIpamScope(partialParams: ToOptional<{
      [K in keyof ModifyIpamScopeRequest]: (ModifyIpamScopeRequest)[K]
    }>): Request<ModifyIpamScopeResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyIpamScope(
          this.ops["ModifyIpamScope"].applicator.apply(partialParams)
        );
    }

    invokeModifyManagedPrefixList(partialParams: ToOptional<{
      [K in keyof ModifyManagedPrefixListRequest]: (ModifyManagedPrefixListRequest)[K]
    }>): Request<ModifyManagedPrefixListResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyManagedPrefixList(
          this.ops["ModifyManagedPrefixList"].applicator.apply(partialParams)
        );
    }

    invokeModifyNetworkInterfaceAttribute(partialParams: ToOptional<{
      [K in keyof ModifyNetworkInterfaceAttributeRequest]: (ModifyNetworkInterfaceAttributeRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyNetworkInterfaceAttribute(
          this.ops["ModifyNetworkInterfaceAttribute"].applicator.apply(partialParams)
        );
    }

    invokeModifyReservedInstances(partialParams: ToOptional<{
      [K in keyof ModifyReservedInstancesRequest]: (ModifyReservedInstancesRequest)[K]
    }>): Request<ModifyReservedInstancesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyReservedInstances(
          this.ops["ModifyReservedInstances"].applicator.apply(partialParams)
        );
    }

    invokeModifySecurityGroupRules(partialParams: ToOptional<{
      [K in keyof ModifySecurityGroupRulesRequest]: (ModifySecurityGroupRulesRequest)[K]
    }>): Request<ModifySecurityGroupRulesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifySecurityGroupRules(
          this.ops["ModifySecurityGroupRules"].applicator.apply(partialParams)
        );
    }

    invokeModifySnapshotAttribute(partialParams: ToOptional<{
      [K in keyof ModifySnapshotAttributeRequest]: (ModifySnapshotAttributeRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifySnapshotAttribute(
          this.ops["ModifySnapshotAttribute"].applicator.apply(partialParams)
        );
    }

    invokeModifySnapshotTier(partialParams: ToOptional<{
      [K in keyof ModifySnapshotTierRequest]: (ModifySnapshotTierRequest)[K]
    }>): Request<ModifySnapshotTierResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifySnapshotTier(
          this.ops["ModifySnapshotTier"].applicator.apply(partialParams)
        );
    }

    invokeModifySpotFleetRequest(partialParams: ToOptional<{
      [K in keyof ModifySpotFleetRequestRequest]: (ModifySpotFleetRequestRequest)[K]
    }>): Request<ModifySpotFleetRequestResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifySpotFleetRequest(
          this.ops["ModifySpotFleetRequest"].applicator.apply(partialParams)
        );
    }

    invokeModifySubnetAttribute(partialParams: ToOptional<{
      [K in keyof ModifySubnetAttributeRequest]: (ModifySubnetAttributeRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifySubnetAttribute(
          this.ops["ModifySubnetAttribute"].applicator.apply(partialParams)
        );
    }

    invokeModifyTrafficMirrorFilterNetworkServices(partialParams: ToOptional<{
      [K in keyof ModifyTrafficMirrorFilterNetworkServicesRequest]: (ModifyTrafficMirrorFilterNetworkServicesRequest)[K]
    }>): Request<ModifyTrafficMirrorFilterNetworkServicesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyTrafficMirrorFilterNetworkServices(
          this.ops["ModifyTrafficMirrorFilterNetworkServices"].applicator.apply(partialParams)
        );
    }

    invokeModifyTrafficMirrorFilterRule(partialParams: ToOptional<{
      [K in keyof ModifyTrafficMirrorFilterRuleRequest]: (ModifyTrafficMirrorFilterRuleRequest)[K]
    }>): Request<ModifyTrafficMirrorFilterRuleResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyTrafficMirrorFilterRule(
          this.ops["ModifyTrafficMirrorFilterRule"].applicator.apply(partialParams)
        );
    }

    invokeModifyTrafficMirrorSession(partialParams: ToOptional<{
      [K in keyof ModifyTrafficMirrorSessionRequest]: (ModifyTrafficMirrorSessionRequest)[K]
    }>): Request<ModifyTrafficMirrorSessionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyTrafficMirrorSession(
          this.ops["ModifyTrafficMirrorSession"].applicator.apply(partialParams)
        );
    }

    invokeModifyTransitGateway(partialParams: ToOptional<{
      [K in keyof ModifyTransitGatewayRequest]: (ModifyTransitGatewayRequest)[K]
    }>): Request<ModifyTransitGatewayResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyTransitGateway(
          this.ops["ModifyTransitGateway"].applicator.apply(partialParams)
        );
    }

    invokeModifyTransitGatewayPrefixListReference(partialParams: ToOptional<{
      [K in keyof ModifyTransitGatewayPrefixListReferenceRequest]: (ModifyTransitGatewayPrefixListReferenceRequest)[K]
    }>): Request<ModifyTransitGatewayPrefixListReferenceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyTransitGatewayPrefixListReference(
          this.ops["ModifyTransitGatewayPrefixListReference"].applicator.apply(partialParams)
        );
    }

    invokeModifyTransitGatewayVpcAttachment(partialParams: ToOptional<{
      [K in keyof ModifyTransitGatewayVpcAttachmentRequest]: (ModifyTransitGatewayVpcAttachmentRequest)[K]
    }>): Request<ModifyTransitGatewayVpcAttachmentResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyTransitGatewayVpcAttachment(
          this.ops["ModifyTransitGatewayVpcAttachment"].applicator.apply(partialParams)
        );
    }

    invokeModifyVolume(partialParams: ToOptional<{
      [K in keyof ModifyVolumeRequest]: (ModifyVolumeRequest)[K]
    }>): Request<ModifyVolumeResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyVolume(
          this.ops["ModifyVolume"].applicator.apply(partialParams)
        );
    }

    invokeModifyVolumeAttribute(partialParams: ToOptional<{
      [K in keyof ModifyVolumeAttributeRequest]: (ModifyVolumeAttributeRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyVolumeAttribute(
          this.ops["ModifyVolumeAttribute"].applicator.apply(partialParams)
        );
    }

    invokeModifyVpcAttribute(partialParams: ToOptional<{
      [K in keyof ModifyVpcAttributeRequest]: (ModifyVpcAttributeRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyVpcAttribute(
          this.ops["ModifyVpcAttribute"].applicator.apply(partialParams)
        );
    }

    invokeModifyVpcEndpoint(partialParams: ToOptional<{
      [K in keyof ModifyVpcEndpointRequest]: (ModifyVpcEndpointRequest)[K]
    }>): Request<ModifyVpcEndpointResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyVpcEndpoint(
          this.ops["ModifyVpcEndpoint"].applicator.apply(partialParams)
        );
    }

    invokeModifyVpcEndpointConnectionNotification(partialParams: ToOptional<{
      [K in keyof ModifyVpcEndpointConnectionNotificationRequest]: (ModifyVpcEndpointConnectionNotificationRequest)[K]
    }>): Request<ModifyVpcEndpointConnectionNotificationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyVpcEndpointConnectionNotification(
          this.ops["ModifyVpcEndpointConnectionNotification"].applicator.apply(partialParams)
        );
    }

    invokeModifyVpcEndpointServiceConfiguration(partialParams: ToOptional<{
      [K in keyof ModifyVpcEndpointServiceConfigurationRequest]: (ModifyVpcEndpointServiceConfigurationRequest)[K]
    }>): Request<ModifyVpcEndpointServiceConfigurationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyVpcEndpointServiceConfiguration(
          this.ops["ModifyVpcEndpointServiceConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeModifyVpcEndpointServicePayerResponsibility(partialParams: ToOptional<{
      [K in keyof ModifyVpcEndpointServicePayerResponsibilityRequest]: (ModifyVpcEndpointServicePayerResponsibilityRequest)[K]
    }>): Request<ModifyVpcEndpointServicePayerResponsibilityResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyVpcEndpointServicePayerResponsibility(
          this.ops["ModifyVpcEndpointServicePayerResponsibility"].applicator.apply(partialParams)
        );
    }

    invokeModifyVpcEndpointServicePermissions(partialParams: ToOptional<{
      [K in keyof ModifyVpcEndpointServicePermissionsRequest]: (ModifyVpcEndpointServicePermissionsRequest)[K]
    }>): Request<ModifyVpcEndpointServicePermissionsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyVpcEndpointServicePermissions(
          this.ops["ModifyVpcEndpointServicePermissions"].applicator.apply(partialParams)
        );
    }

    invokeModifyVpcPeeringConnectionOptions(partialParams: ToOptional<{
      [K in keyof ModifyVpcPeeringConnectionOptionsRequest]: (ModifyVpcPeeringConnectionOptionsRequest)[K]
    }>): Request<ModifyVpcPeeringConnectionOptionsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyVpcPeeringConnectionOptions(
          this.ops["ModifyVpcPeeringConnectionOptions"].applicator.apply(partialParams)
        );
    }

    invokeModifyVpcTenancy(partialParams: ToOptional<{
      [K in keyof ModifyVpcTenancyRequest]: (ModifyVpcTenancyRequest)[K]
    }>): Request<ModifyVpcTenancyResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyVpcTenancy(
          this.ops["ModifyVpcTenancy"].applicator.apply(partialParams)
        );
    }

    invokeModifyVpnConnection(partialParams: ToOptional<{
      [K in keyof ModifyVpnConnectionRequest]: (ModifyVpnConnectionRequest)[K]
    }>): Request<ModifyVpnConnectionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyVpnConnection(
          this.ops["ModifyVpnConnection"].applicator.apply(partialParams)
        );
    }

    invokeModifyVpnConnectionOptions(partialParams: ToOptional<{
      [K in keyof ModifyVpnConnectionOptionsRequest]: (ModifyVpnConnectionOptionsRequest)[K]
    }>): Request<ModifyVpnConnectionOptionsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyVpnConnectionOptions(
          this.ops["ModifyVpnConnectionOptions"].applicator.apply(partialParams)
        );
    }

    invokeModifyVpnTunnelCertificate(partialParams: ToOptional<{
      [K in keyof ModifyVpnTunnelCertificateRequest]: (ModifyVpnTunnelCertificateRequest)[K]
    }>): Request<ModifyVpnTunnelCertificateResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyVpnTunnelCertificate(
          this.ops["ModifyVpnTunnelCertificate"].applicator.apply(partialParams)
        );
    }

    invokeModifyVpnTunnelOptions(partialParams: ToOptional<{
      [K in keyof ModifyVpnTunnelOptionsRequest]: (ModifyVpnTunnelOptionsRequest)[K]
    }>): Request<ModifyVpnTunnelOptionsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyVpnTunnelOptions(
          this.ops["ModifyVpnTunnelOptions"].applicator.apply(partialParams)
        );
    }

    invokeMonitorInstances(partialParams: ToOptional<{
      [K in keyof MonitorInstancesRequest]: (MonitorInstancesRequest)[K]
    }>): Request<MonitorInstancesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.monitorInstances(
          this.ops["MonitorInstances"].applicator.apply(partialParams)
        );
    }

    invokeMoveAddressToVpc(partialParams: ToOptional<{
      [K in keyof MoveAddressToVpcRequest]: (MoveAddressToVpcRequest)[K]
    }>): Request<MoveAddressToVpcResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.moveAddressToVpc(
          this.ops["MoveAddressToVpc"].applicator.apply(partialParams)
        );
    }

    invokeMoveByoipCidrToIpam(partialParams: ToOptional<{
      [K in keyof MoveByoipCidrToIpamRequest]: (MoveByoipCidrToIpamRequest)[K]
    }>): Request<MoveByoipCidrToIpamResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.moveByoipCidrToIpam(
          this.ops["MoveByoipCidrToIpam"].applicator.apply(partialParams)
        );
    }

    invokeProvisionByoipCidr(partialParams: ToOptional<{
      [K in keyof ProvisionByoipCidrRequest]: (ProvisionByoipCidrRequest)[K]
    }>): Request<ProvisionByoipCidrResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.provisionByoipCidr(
          this.ops["ProvisionByoipCidr"].applicator.apply(partialParams)
        );
    }

    invokeProvisionIpamPoolCidr(partialParams: ToOptional<{
      [K in keyof ProvisionIpamPoolCidrRequest]: (ProvisionIpamPoolCidrRequest)[K]
    }>): Request<ProvisionIpamPoolCidrResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.provisionIpamPoolCidr(
          this.ops["ProvisionIpamPoolCidr"].applicator.apply(partialParams)
        );
    }

    invokeProvisionPublicIpv4PoolCidr(partialParams: ToOptional<{
      [K in keyof ProvisionPublicIpv4PoolCidrRequest]: (ProvisionPublicIpv4PoolCidrRequest)[K]
    }>): Request<ProvisionPublicIpv4PoolCidrResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.provisionPublicIpv4PoolCidr(
          this.ops["ProvisionPublicIpv4PoolCidr"].applicator.apply(partialParams)
        );
    }

    invokePurchaseHostReservation(partialParams: ToOptional<{
      [K in keyof PurchaseHostReservationRequest]: (PurchaseHostReservationRequest)[K]
    }>): Request<PurchaseHostReservationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.purchaseHostReservation(
          this.ops["PurchaseHostReservation"].applicator.apply(partialParams)
        );
    }

    invokePurchaseReservedInstancesOffering(partialParams: ToOptional<{
      [K in keyof PurchaseReservedInstancesOfferingRequest]: (PurchaseReservedInstancesOfferingRequest)[K]
    }>): Request<PurchaseReservedInstancesOfferingResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.purchaseReservedInstancesOffering(
          this.ops["PurchaseReservedInstancesOffering"].applicator.apply(partialParams)
        );
    }

    invokePurchaseScheduledInstances(partialParams: ToOptional<{
      [K in keyof PurchaseScheduledInstancesRequest]: (PurchaseScheduledInstancesRequest)[K]
    }>): Request<PurchaseScheduledInstancesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.purchaseScheduledInstances(
          this.ops["PurchaseScheduledInstances"].applicator.apply(partialParams)
        );
    }

    invokeRebootInstances(partialParams: ToOptional<{
      [K in keyof RebootInstancesRequest]: (RebootInstancesRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rebootInstances(
          this.ops["RebootInstances"].applicator.apply(partialParams)
        );
    }

    invokeRegisterImage(partialParams: ToOptional<{
      [K in keyof RegisterImageRequest]: (RegisterImageRequest)[K]
    }>): Request<RegisterImageResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerImage(
          this.ops["RegisterImage"].applicator.apply(partialParams)
        );
    }

    invokeRejectTransitGatewayPeeringAttachment(partialParams: ToOptional<{
      [K in keyof RejectTransitGatewayPeeringAttachmentRequest]: (RejectTransitGatewayPeeringAttachmentRequest)[K]
    }>): Request<RejectTransitGatewayPeeringAttachmentResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rejectTransitGatewayPeeringAttachment(
          this.ops["RejectTransitGatewayPeeringAttachment"].applicator.apply(partialParams)
        );
    }

    invokeRejectTransitGatewayVpcAttachment(partialParams: ToOptional<{
      [K in keyof RejectTransitGatewayVpcAttachmentRequest]: (RejectTransitGatewayVpcAttachmentRequest)[K]
    }>): Request<RejectTransitGatewayVpcAttachmentResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rejectTransitGatewayVpcAttachment(
          this.ops["RejectTransitGatewayVpcAttachment"].applicator.apply(partialParams)
        );
    }

    invokeRejectVpcEndpointConnections(partialParams: ToOptional<{
      [K in keyof RejectVpcEndpointConnectionsRequest]: (RejectVpcEndpointConnectionsRequest)[K]
    }>): Request<RejectVpcEndpointConnectionsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rejectVpcEndpointConnections(
          this.ops["RejectVpcEndpointConnections"].applicator.apply(partialParams)
        );
    }

    invokeRejectVpcPeeringConnection(partialParams: ToOptional<{
      [K in keyof RejectVpcPeeringConnectionRequest]: (RejectVpcPeeringConnectionRequest)[K]
    }>): Request<RejectVpcPeeringConnectionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rejectVpcPeeringConnection(
          this.ops["RejectVpcPeeringConnection"].applicator.apply(partialParams)
        );
    }

    invokeReleaseHosts(partialParams: ToOptional<{
      [K in keyof ReleaseHostsRequest]: (ReleaseHostsRequest)[K]
    }>): Request<ReleaseHostsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.releaseHosts(
          this.ops["ReleaseHosts"].applicator.apply(partialParams)
        );
    }

    invokeReleaseIpamPoolAllocation(partialParams: ToOptional<{
      [K in keyof ReleaseIpamPoolAllocationRequest]: (ReleaseIpamPoolAllocationRequest)[K]
    }>): Request<ReleaseIpamPoolAllocationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.releaseIpamPoolAllocation(
          this.ops["ReleaseIpamPoolAllocation"].applicator.apply(partialParams)
        );
    }

    invokeReplaceIamInstanceProfileAssociation(partialParams: ToOptional<{
      [K in keyof ReplaceIamInstanceProfileAssociationRequest]: (ReplaceIamInstanceProfileAssociationRequest)[K]
    }>): Request<ReplaceIamInstanceProfileAssociationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.replaceIamInstanceProfileAssociation(
          this.ops["ReplaceIamInstanceProfileAssociation"].applicator.apply(partialParams)
        );
    }

    invokeReplaceNetworkAclAssociation(partialParams: ToOptional<{
      [K in keyof ReplaceNetworkAclAssociationRequest]: (ReplaceNetworkAclAssociationRequest)[K]
    }>): Request<ReplaceNetworkAclAssociationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.replaceNetworkAclAssociation(
          this.ops["ReplaceNetworkAclAssociation"].applicator.apply(partialParams)
        );
    }

    invokeReplaceNetworkAclEntry(partialParams: ToOptional<{
      [K in keyof ReplaceNetworkAclEntryRequest]: (ReplaceNetworkAclEntryRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.replaceNetworkAclEntry(
          this.ops["ReplaceNetworkAclEntry"].applicator.apply(partialParams)
        );
    }

    invokeReplaceRoute(partialParams: ToOptional<{
      [K in keyof ReplaceRouteRequest]: (ReplaceRouteRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.replaceRoute(
          this.ops["ReplaceRoute"].applicator.apply(partialParams)
        );
    }

    invokeReplaceRouteTableAssociation(partialParams: ToOptional<{
      [K in keyof ReplaceRouteTableAssociationRequest]: (ReplaceRouteTableAssociationRequest)[K]
    }>): Request<ReplaceRouteTableAssociationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.replaceRouteTableAssociation(
          this.ops["ReplaceRouteTableAssociation"].applicator.apply(partialParams)
        );
    }

    invokeReplaceTransitGatewayRoute(partialParams: ToOptional<{
      [K in keyof ReplaceTransitGatewayRouteRequest]: (ReplaceTransitGatewayRouteRequest)[K]
    }>): Request<ReplaceTransitGatewayRouteResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.replaceTransitGatewayRoute(
          this.ops["ReplaceTransitGatewayRoute"].applicator.apply(partialParams)
        );
    }

    invokeReportInstanceStatus(partialParams: ToOptional<{
      [K in keyof ReportInstanceStatusRequest]: (ReportInstanceStatusRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.reportInstanceStatus(
          this.ops["ReportInstanceStatus"].applicator.apply(partialParams)
        );
    }

    invokeRequestSpotFleet(partialParams: ToOptional<{
      [K in keyof RequestSpotFleetRequest]: (RequestSpotFleetRequest)[K]
    }>): Request<RequestSpotFleetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.requestSpotFleet(
          this.ops["RequestSpotFleet"].applicator.apply(partialParams)
        );
    }

    invokeResetAddressAttribute(partialParams: ToOptional<{
      [K in keyof ResetAddressAttributeRequest]: (ResetAddressAttributeRequest)[K]
    }>): Request<ResetAddressAttributeResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetAddressAttribute(
          this.ops["ResetAddressAttribute"].applicator.apply(partialParams)
        );
    }

    invokeResetFpgaImageAttribute(partialParams: ToOptional<{
      [K in keyof ResetFpgaImageAttributeRequest]: (ResetFpgaImageAttributeRequest)[K]
    }>): Request<ResetFpgaImageAttributeResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetFpgaImageAttribute(
          this.ops["ResetFpgaImageAttribute"].applicator.apply(partialParams)
        );
    }

    invokeResetImageAttribute(partialParams: ToOptional<{
      [K in keyof ResetImageAttributeRequest]: (ResetImageAttributeRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetImageAttribute(
          this.ops["ResetImageAttribute"].applicator.apply(partialParams)
        );
    }

    invokeResetInstanceAttribute(partialParams: ToOptional<{
      [K in keyof ResetInstanceAttributeRequest]: (ResetInstanceAttributeRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetInstanceAttribute(
          this.ops["ResetInstanceAttribute"].applicator.apply(partialParams)
        );
    }

    invokeResetNetworkInterfaceAttribute(partialParams: ToOptional<{
      [K in keyof ResetNetworkInterfaceAttributeRequest]: (ResetNetworkInterfaceAttributeRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetNetworkInterfaceAttribute(
          this.ops["ResetNetworkInterfaceAttribute"].applicator.apply(partialParams)
        );
    }

    invokeResetSnapshotAttribute(partialParams: ToOptional<{
      [K in keyof ResetSnapshotAttributeRequest]: (ResetSnapshotAttributeRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetSnapshotAttribute(
          this.ops["ResetSnapshotAttribute"].applicator.apply(partialParams)
        );
    }

    invokeRestoreAddressToClassic(partialParams: ToOptional<{
      [K in keyof RestoreAddressToClassicRequest]: (RestoreAddressToClassicRequest)[K]
    }>): Request<RestoreAddressToClassicResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreAddressToClassic(
          this.ops["RestoreAddressToClassic"].applicator.apply(partialParams)
        );
    }

    invokeRestoreImageFromRecycleBin(partialParams: ToOptional<{
      [K in keyof RestoreImageFromRecycleBinRequest]: (RestoreImageFromRecycleBinRequest)[K]
    }>): Request<RestoreImageFromRecycleBinResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreImageFromRecycleBin(
          this.ops["RestoreImageFromRecycleBin"].applicator.apply(partialParams)
        );
    }

    invokeRestoreManagedPrefixListVersion(partialParams: ToOptional<{
      [K in keyof RestoreManagedPrefixListVersionRequest]: (RestoreManagedPrefixListVersionRequest)[K]
    }>): Request<RestoreManagedPrefixListVersionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreManagedPrefixListVersion(
          this.ops["RestoreManagedPrefixListVersion"].applicator.apply(partialParams)
        );
    }

    invokeRestoreSnapshotFromRecycleBin(partialParams: ToOptional<{
      [K in keyof RestoreSnapshotFromRecycleBinRequest]: (RestoreSnapshotFromRecycleBinRequest)[K]
    }>): Request<RestoreSnapshotFromRecycleBinResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreSnapshotFromRecycleBin(
          this.ops["RestoreSnapshotFromRecycleBin"].applicator.apply(partialParams)
        );
    }

    invokeRestoreSnapshotTier(partialParams: ToOptional<{
      [K in keyof RestoreSnapshotTierRequest]: (RestoreSnapshotTierRequest)[K]
    }>): Request<RestoreSnapshotTierResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreSnapshotTier(
          this.ops["RestoreSnapshotTier"].applicator.apply(partialParams)
        );
    }

    invokeRevokeClientVpnIngress(partialParams: ToOptional<{
      [K in keyof RevokeClientVpnIngressRequest]: (RevokeClientVpnIngressRequest)[K]
    }>): Request<RevokeClientVpnIngressResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.revokeClientVpnIngress(
          this.ops["RevokeClientVpnIngress"].applicator.apply(partialParams)
        );
    }

    invokeRevokeSecurityGroupEgress(partialParams: ToOptional<{
      [K in keyof RevokeSecurityGroupEgressRequest]: (RevokeSecurityGroupEgressRequest)[K]
    }>): Request<RevokeSecurityGroupEgressResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.revokeSecurityGroupEgress(
          this.ops["RevokeSecurityGroupEgress"].applicator.apply(partialParams)
        );
    }

    invokeRunInstances(partialParams: ToOptional<{
      [K in keyof RunInstancesRequest]: (RunInstancesRequest)[K]
    }>): Request<Reservation, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.runInstances(
          this.ops["RunInstances"].applicator.apply(partialParams)
        );
    }

    invokeRunScheduledInstances(partialParams: ToOptional<{
      [K in keyof RunScheduledInstancesRequest]: (RunScheduledInstancesRequest)[K]
    }>): Request<RunScheduledInstancesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.runScheduledInstances(
          this.ops["RunScheduledInstances"].applicator.apply(partialParams)
        );
    }

    invokeSearchLocalGatewayRoutes(partialParams: ToOptional<{
      [K in keyof SearchLocalGatewayRoutesRequest]: (SearchLocalGatewayRoutesRequest)[K]
    }>): Request<SearchLocalGatewayRoutesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.searchLocalGatewayRoutes(
          this.ops["SearchLocalGatewayRoutes"].applicator.apply(partialParams)
        );
    }

    invokeSearchTransitGatewayRoutes(partialParams: ToOptional<{
      [K in keyof SearchTransitGatewayRoutesRequest]: (SearchTransitGatewayRoutesRequest)[K]
    }>): Request<SearchTransitGatewayRoutesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.searchTransitGatewayRoutes(
          this.ops["SearchTransitGatewayRoutes"].applicator.apply(partialParams)
        );
    }

    invokeSendDiagnosticInterrupt(partialParams: ToOptional<{
      [K in keyof SendDiagnosticInterruptRequest]: (SendDiagnosticInterruptRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.sendDiagnosticInterrupt(
          this.ops["SendDiagnosticInterrupt"].applicator.apply(partialParams)
        );
    }

    invokeStartInstances(partialParams: ToOptional<{
      [K in keyof StartInstancesRequest]: (StartInstancesRequest)[K]
    }>): Request<StartInstancesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startInstances(
          this.ops["StartInstances"].applicator.apply(partialParams)
        );
    }

    invokeStartNetworkInsightsAccessScopeAnalysis(partialParams: ToOptional<{
      [K in keyof StartNetworkInsightsAccessScopeAnalysisRequest]: (StartNetworkInsightsAccessScopeAnalysisRequest)[K]
    }>): Request<StartNetworkInsightsAccessScopeAnalysisResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startNetworkInsightsAccessScopeAnalysis(
          this.ops["StartNetworkInsightsAccessScopeAnalysis"].applicator.apply(partialParams)
        );
    }

    invokeStartNetworkInsightsAnalysis(partialParams: ToOptional<{
      [K in keyof StartNetworkInsightsAnalysisRequest]: (StartNetworkInsightsAnalysisRequest)[K]
    }>): Request<StartNetworkInsightsAnalysisResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startNetworkInsightsAnalysis(
          this.ops["StartNetworkInsightsAnalysis"].applicator.apply(partialParams)
        );
    }

    invokeStartVpcEndpointServicePrivateDnsVerification(partialParams: ToOptional<{
      [K in keyof StartVpcEndpointServicePrivateDnsVerificationRequest]: (StartVpcEndpointServicePrivateDnsVerificationRequest)[K]
    }>): Request<StartVpcEndpointServicePrivateDnsVerificationResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startVpcEndpointServicePrivateDnsVerification(
          this.ops["StartVpcEndpointServicePrivateDnsVerification"].applicator.apply(partialParams)
        );
    }

    invokeStopInstances(partialParams: ToOptional<{
      [K in keyof StopInstancesRequest]: (StopInstancesRequest)[K]
    }>): Request<StopInstancesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopInstances(
          this.ops["StopInstances"].applicator.apply(partialParams)
        );
    }

    invokeTerminateClientVpnConnections(partialParams: ToOptional<{
      [K in keyof TerminateClientVpnConnectionsRequest]: (TerminateClientVpnConnectionsRequest)[K]
    }>): Request<TerminateClientVpnConnectionsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.terminateClientVpnConnections(
          this.ops["TerminateClientVpnConnections"].applicator.apply(partialParams)
        );
    }

    invokeTerminateInstances(partialParams: ToOptional<{
      [K in keyof TerminateInstancesRequest]: (TerminateInstancesRequest)[K]
    }>): Request<TerminateInstancesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.terminateInstances(
          this.ops["TerminateInstances"].applicator.apply(partialParams)
        );
    }

    invokeUnassignIpv6Addresses(partialParams: ToOptional<{
      [K in keyof UnassignIpv6AddressesRequest]: (UnassignIpv6AddressesRequest)[K]
    }>): Request<UnassignIpv6AddressesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.unassignIpv6Addresses(
          this.ops["UnassignIpv6Addresses"].applicator.apply(partialParams)
        );
    }

    invokeUnassignPrivateIpAddresses(partialParams: ToOptional<{
      [K in keyof UnassignPrivateIpAddressesRequest]: (UnassignPrivateIpAddressesRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.unassignPrivateIpAddresses(
          this.ops["UnassignPrivateIpAddresses"].applicator.apply(partialParams)
        );
    }

    invokeUnmonitorInstances(partialParams: ToOptional<{
      [K in keyof UnmonitorInstancesRequest]: (UnmonitorInstancesRequest)[K]
    }>): Request<UnmonitorInstancesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.unmonitorInstances(
          this.ops["UnmonitorInstances"].applicator.apply(partialParams)
        );
    }

    invokeWithdrawByoipCidr(partialParams: ToOptional<{
      [K in keyof WithdrawByoipCidrRequest]: (WithdrawByoipCidrRequest)[K]
    }>): Request<WithdrawByoipCidrResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.withdrawByoipCidr(
          this.ops["WithdrawByoipCidr"].applicator.apply(partialParams)
        );
    }
}