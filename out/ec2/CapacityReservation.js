"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws = __importStar(require("@pulumi/aws"));
const awssdk = __importStar(require("aws-sdk"));
const parse_1 = require("../parse");
class default_1 extends aws.ec2.CapacityReservation {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.EC2();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/ec2-2016-11-15.normal.json"), this.client);
    }
    invokeAcceptReservedInstancesExchangeQuote(partialParams) {
        return this.client.acceptReservedInstancesExchangeQuote(this.ops["AcceptReservedInstancesExchangeQuote"].apply(partialParams));
    }
    invokeAcceptTransitGatewayPeeringAttachment(partialParams) {
        return this.client.acceptTransitGatewayPeeringAttachment(this.ops["AcceptTransitGatewayPeeringAttachment"].apply(partialParams));
    }
    invokeAcceptTransitGatewayVpcAttachment(partialParams) {
        return this.client.acceptTransitGatewayVpcAttachment(this.ops["AcceptTransitGatewayVpcAttachment"].apply(partialParams));
    }
    invokeAcceptVpcEndpointConnections(partialParams) {
        return this.client.acceptVpcEndpointConnections(this.ops["AcceptVpcEndpointConnections"].apply(partialParams));
    }
    invokeAdvertiseByoipCidr(partialParams) {
        return this.client.advertiseByoipCidr(this.ops["AdvertiseByoipCidr"].apply(partialParams));
    }
    invokeAllocateHosts(partialParams) {
        return this.client.allocateHosts(this.ops["AllocateHosts"].apply(partialParams));
    }
    invokeAllocateIpamPoolCidr(partialParams) {
        return this.client.allocateIpamPoolCidr(this.ops["AllocateIpamPoolCidr"].apply(partialParams));
    }
    invokeApplySecurityGroupsToClientVpnTargetNetwork(partialParams) {
        return this.client.applySecurityGroupsToClientVpnTargetNetwork(this.ops["ApplySecurityGroupsToClientVpnTargetNetwork"].apply(partialParams));
    }
    invokeAssignIpv6Addresses(partialParams) {
        return this.client.assignIpv6Addresses(this.ops["AssignIpv6Addresses"].apply(partialParams));
    }
    invokeAssignPrivateIpAddresses(partialParams) {
        return this.client.assignPrivateIpAddresses(this.ops["AssignPrivateIpAddresses"].apply(partialParams));
    }
    invokeAssociateClientVpnTargetNetwork(partialParams) {
        return this.client.associateClientVpnTargetNetwork(this.ops["AssociateClientVpnTargetNetwork"].apply(partialParams));
    }
    invokeAssociateDhcpOptions(partialParams) {
        return this.client.associateDhcpOptions(this.ops["AssociateDhcpOptions"].apply(partialParams));
    }
    invokeAssociateIamInstanceProfile(partialParams) {
        return this.client.associateIamInstanceProfile(this.ops["AssociateIamInstanceProfile"].apply(partialParams));
    }
    invokeAssociateInstanceEventWindow(partialParams) {
        return this.client.associateInstanceEventWindow(this.ops["AssociateInstanceEventWindow"].apply(partialParams));
    }
    invokeAssociateRouteTable(partialParams) {
        return this.client.associateRouteTable(this.ops["AssociateRouteTable"].apply(partialParams));
    }
    invokeAssociateSubnetCidrBlock(partialParams) {
        return this.client.associateSubnetCidrBlock(this.ops["AssociateSubnetCidrBlock"].apply(partialParams));
    }
    invokeAssociateTransitGatewayRouteTable(partialParams) {
        return this.client.associateTransitGatewayRouteTable(this.ops["AssociateTransitGatewayRouteTable"].apply(partialParams));
    }
    invokeAssociateTrunkInterface(partialParams) {
        return this.client.associateTrunkInterface(this.ops["AssociateTrunkInterface"].apply(partialParams));
    }
    invokeAssociateVpcCidrBlock(partialParams) {
        return this.client.associateVpcCidrBlock(this.ops["AssociateVpcCidrBlock"].apply(partialParams));
    }
    invokeAttachClassicLinkVpc(partialParams) {
        return this.client.attachClassicLinkVpc(this.ops["AttachClassicLinkVpc"].apply(partialParams));
    }
    invokeAttachInternetGateway(partialParams) {
        return this.client.attachInternetGateway(this.ops["AttachInternetGateway"].apply(partialParams));
    }
    invokeAttachNetworkInterface(partialParams) {
        return this.client.attachNetworkInterface(this.ops["AttachNetworkInterface"].apply(partialParams));
    }
    invokeAttachVolume(partialParams) {
        return this.client.attachVolume(this.ops["AttachVolume"].apply(partialParams));
    }
    invokeAttachVpnGateway(partialParams) {
        return this.client.attachVpnGateway(this.ops["AttachVpnGateway"].apply(partialParams));
    }
    invokeAuthorizeClientVpnIngress(partialParams) {
        return this.client.authorizeClientVpnIngress(this.ops["AuthorizeClientVpnIngress"].apply(partialParams));
    }
    invokeAuthorizeSecurityGroupEgress(partialParams) {
        return this.client.authorizeSecurityGroupEgress(this.ops["AuthorizeSecurityGroupEgress"].apply(partialParams));
    }
    invokeBundleInstance(partialParams) {
        return this.client.bundleInstance(this.ops["BundleInstance"].apply(partialParams));
    }
    invokeCancelBundleTask(partialParams) {
        return this.client.cancelBundleTask(this.ops["CancelBundleTask"].apply(partialParams));
    }
    invokeCancelCapacityReservation(partialParams) {
        return this.client.cancelCapacityReservation(this.ops["CancelCapacityReservation"].apply(partialParams));
    }
    invokeCancelCapacityReservationFleets(partialParams) {
        return this.client.cancelCapacityReservationFleets(this.ops["CancelCapacityReservationFleets"].apply(partialParams));
    }
    invokeCancelConversionTask(partialParams) {
        return this.client.cancelConversionTask(this.ops["CancelConversionTask"].apply(partialParams));
    }
    invokeCancelExportTask(partialParams) {
        return this.client.cancelExportTask(this.ops["CancelExportTask"].apply(partialParams));
    }
    invokeCancelReservedInstancesListing(partialParams) {
        return this.client.cancelReservedInstancesListing(this.ops["CancelReservedInstancesListing"].apply(partialParams));
    }
    invokeCancelSpotFleetRequests(partialParams) {
        return this.client.cancelSpotFleetRequests(this.ops["CancelSpotFleetRequests"].apply(partialParams));
    }
    invokeCancelSpotInstanceRequests(partialParams) {
        return this.client.cancelSpotInstanceRequests(this.ops["CancelSpotInstanceRequests"].apply(partialParams));
    }
    invokeConfirmProductInstance(partialParams) {
        return this.client.confirmProductInstance(this.ops["ConfirmProductInstance"].apply(partialParams));
    }
    invokeCopyFpgaImage(partialParams) {
        return this.client.copyFpgaImage(this.ops["CopyFpgaImage"].apply(partialParams));
    }
    invokeCopyImage(partialParams) {
        return this.client.copyImage(this.ops["CopyImage"].apply(partialParams));
    }
    invokeCopySnapshot(partialParams) {
        return this.client.copySnapshot(this.ops["CopySnapshot"].apply(partialParams));
    }
    invokeCreateCapacityReservation(partialParams) {
        return this.client.createCapacityReservation(this.ops["CreateCapacityReservation"].apply(partialParams));
    }
    invokeCreateCapacityReservationFleet(partialParams) {
        return this.client.createCapacityReservationFleet(this.ops["CreateCapacityReservationFleet"].apply(partialParams));
    }
    invokeCreateCarrierGateway(partialParams) {
        return this.client.createCarrierGateway(this.ops["CreateCarrierGateway"].apply(partialParams));
    }
    invokeCreateClientVpnEndpoint(partialParams) {
        return this.client.createClientVpnEndpoint(this.ops["CreateClientVpnEndpoint"].apply(partialParams));
    }
    invokeCreateClientVpnRoute(partialParams) {
        return this.client.createClientVpnRoute(this.ops["CreateClientVpnRoute"].apply(partialParams));
    }
    invokeCreateCustomerGateway(partialParams) {
        return this.client.createCustomerGateway(this.ops["CreateCustomerGateway"].apply(partialParams));
    }
    invokeCreateDefaultSubnet(partialParams) {
        return this.client.createDefaultSubnet(this.ops["CreateDefaultSubnet"].apply(partialParams));
    }
    invokeCreateDhcpOptions(partialParams) {
        return this.client.createDhcpOptions(this.ops["CreateDhcpOptions"].apply(partialParams));
    }
    invokeCreateEgressOnlyInternetGateway(partialParams) {
        return this.client.createEgressOnlyInternetGateway(this.ops["CreateEgressOnlyInternetGateway"].apply(partialParams));
    }
    invokeCreateFleet(partialParams) {
        return this.client.createFleet(this.ops["CreateFleet"].apply(partialParams));
    }
    invokeCreateFlowLogs(partialParams) {
        return this.client.createFlowLogs(this.ops["CreateFlowLogs"].apply(partialParams));
    }
    invokeCreateFpgaImage(partialParams) {
        return this.client.createFpgaImage(this.ops["CreateFpgaImage"].apply(partialParams));
    }
    invokeCreateImage(partialParams) {
        return this.client.createImage(this.ops["CreateImage"].apply(partialParams));
    }
    invokeCreateInstanceExportTask(partialParams) {
        return this.client.createInstanceExportTask(this.ops["CreateInstanceExportTask"].apply(partialParams));
    }
    invokeCreateIpamPool(partialParams) {
        return this.client.createIpamPool(this.ops["CreateIpamPool"].apply(partialParams));
    }
    invokeCreateIpamScope(partialParams) {
        return this.client.createIpamScope(this.ops["CreateIpamScope"].apply(partialParams));
    }
    invokeCreateKeyPair(partialParams) {
        return this.client.createKeyPair(this.ops["CreateKeyPair"].apply(partialParams));
    }
    invokeCreateLaunchTemplate(partialParams) {
        return this.client.createLaunchTemplate(this.ops["CreateLaunchTemplate"].apply(partialParams));
    }
    invokeCreateLaunchTemplateVersion(partialParams) {
        return this.client.createLaunchTemplateVersion(this.ops["CreateLaunchTemplateVersion"].apply(partialParams));
    }
    invokeCreateLocalGatewayRoute(partialParams) {
        return this.client.createLocalGatewayRoute(this.ops["CreateLocalGatewayRoute"].apply(partialParams));
    }
    invokeCreateLocalGatewayRouteTableVpcAssociation(partialParams) {
        return this.client.createLocalGatewayRouteTableVpcAssociation(this.ops["CreateLocalGatewayRouteTableVpcAssociation"].apply(partialParams));
    }
    invokeCreateManagedPrefixList(partialParams) {
        return this.client.createManagedPrefixList(this.ops["CreateManagedPrefixList"].apply(partialParams));
    }
    invokeCreateNatGateway(partialParams) {
        return this.client.createNatGateway(this.ops["CreateNatGateway"].apply(partialParams));
    }
    invokeCreateNetworkAcl(partialParams) {
        return this.client.createNetworkAcl(this.ops["CreateNetworkAcl"].apply(partialParams));
    }
    invokeCreateNetworkAclEntry(partialParams) {
        return this.client.createNetworkAclEntry(this.ops["CreateNetworkAclEntry"].apply(partialParams));
    }
    invokeCreateNetworkInsightsAccessScope(partialParams) {
        return this.client.createNetworkInsightsAccessScope(this.ops["CreateNetworkInsightsAccessScope"].apply(partialParams));
    }
    invokeCreateNetworkInsightsPath(partialParams) {
        return this.client.createNetworkInsightsPath(this.ops["CreateNetworkInsightsPath"].apply(partialParams));
    }
    invokeCreateNetworkInterface(partialParams) {
        return this.client.createNetworkInterface(this.ops["CreateNetworkInterface"].apply(partialParams));
    }
    invokeCreateNetworkInterfacePermission(partialParams) {
        return this.client.createNetworkInterfacePermission(this.ops["CreateNetworkInterfacePermission"].apply(partialParams));
    }
    invokeCreateReplaceRootVolumeTask(partialParams) {
        return this.client.createReplaceRootVolumeTask(this.ops["CreateReplaceRootVolumeTask"].apply(partialParams));
    }
    invokeCreateReservedInstancesListing(partialParams) {
        return this.client.createReservedInstancesListing(this.ops["CreateReservedInstancesListing"].apply(partialParams));
    }
    invokeCreateRestoreImageTask(partialParams) {
        return this.client.createRestoreImageTask(this.ops["CreateRestoreImageTask"].apply(partialParams));
    }
    invokeCreateRoute(partialParams) {
        return this.client.createRoute(this.ops["CreateRoute"].apply(partialParams));
    }
    invokeCreateRouteTable(partialParams) {
        return this.client.createRouteTable(this.ops["CreateRouteTable"].apply(partialParams));
    }
    invokeCreateSecurityGroup(partialParams) {
        return this.client.createSecurityGroup(this.ops["CreateSecurityGroup"].apply(partialParams));
    }
    invokeCreateSnapshot(partialParams) {
        return this.client.createSnapshot(this.ops["CreateSnapshot"].apply(partialParams));
    }
    invokeCreateSnapshots(partialParams) {
        return this.client.createSnapshots(this.ops["CreateSnapshots"].apply(partialParams));
    }
    invokeCreateSpotDatafeedSubscription(partialParams) {
        return this.client.createSpotDatafeedSubscription(this.ops["CreateSpotDatafeedSubscription"].apply(partialParams));
    }
    invokeCreateStoreImageTask(partialParams) {
        return this.client.createStoreImageTask(this.ops["CreateStoreImageTask"].apply(partialParams));
    }
    invokeCreateSubnet(partialParams) {
        return this.client.createSubnet(this.ops["CreateSubnet"].apply(partialParams));
    }
    invokeCreateSubnetCidrReservation(partialParams) {
        return this.client.createSubnetCidrReservation(this.ops["CreateSubnetCidrReservation"].apply(partialParams));
    }
    invokeCreateTags(partialParams) {
        return this.client.createTags(this.ops["CreateTags"].apply(partialParams));
    }
    invokeCreateTrafficMirrorFilterRule(partialParams) {
        return this.client.createTrafficMirrorFilterRule(this.ops["CreateTrafficMirrorFilterRule"].apply(partialParams));
    }
    invokeCreateTrafficMirrorSession(partialParams) {
        return this.client.createTrafficMirrorSession(this.ops["CreateTrafficMirrorSession"].apply(partialParams));
    }
    invokeCreateTransitGatewayConnect(partialParams) {
        return this.client.createTransitGatewayConnect(this.ops["CreateTransitGatewayConnect"].apply(partialParams));
    }
    invokeCreateTransitGatewayConnectPeer(partialParams) {
        return this.client.createTransitGatewayConnectPeer(this.ops["CreateTransitGatewayConnectPeer"].apply(partialParams));
    }
    invokeCreateTransitGatewayMulticastDomain(partialParams) {
        return this.client.createTransitGatewayMulticastDomain(this.ops["CreateTransitGatewayMulticastDomain"].apply(partialParams));
    }
    invokeCreateTransitGatewayPeeringAttachment(partialParams) {
        return this.client.createTransitGatewayPeeringAttachment(this.ops["CreateTransitGatewayPeeringAttachment"].apply(partialParams));
    }
    invokeCreateTransitGatewayPrefixListReference(partialParams) {
        return this.client.createTransitGatewayPrefixListReference(this.ops["CreateTransitGatewayPrefixListReference"].apply(partialParams));
    }
    invokeCreateTransitGatewayRoute(partialParams) {
        return this.client.createTransitGatewayRoute(this.ops["CreateTransitGatewayRoute"].apply(partialParams));
    }
    invokeCreateTransitGatewayRouteTable(partialParams) {
        return this.client.createTransitGatewayRouteTable(this.ops["CreateTransitGatewayRouteTable"].apply(partialParams));
    }
    invokeCreateTransitGatewayVpcAttachment(partialParams) {
        return this.client.createTransitGatewayVpcAttachment(this.ops["CreateTransitGatewayVpcAttachment"].apply(partialParams));
    }
    invokeCreateVolume(partialParams) {
        return this.client.createVolume(this.ops["CreateVolume"].apply(partialParams));
    }
    invokeCreateVpcEndpoint(partialParams) {
        return this.client.createVpcEndpoint(this.ops["CreateVpcEndpoint"].apply(partialParams));
    }
    invokeCreateVpcEndpointConnectionNotification(partialParams) {
        return this.client.createVpcEndpointConnectionNotification(this.ops["CreateVpcEndpointConnectionNotification"].apply(partialParams));
    }
    invokeCreateVpnConnection(partialParams) {
        return this.client.createVpnConnection(this.ops["CreateVpnConnection"].apply(partialParams));
    }
    invokeCreateVpnConnectionRoute(partialParams) {
        return this.client.createVpnConnectionRoute(this.ops["CreateVpnConnectionRoute"].apply(partialParams));
    }
    invokeCreateVpnGateway(partialParams) {
        return this.client.createVpnGateway(this.ops["CreateVpnGateway"].apply(partialParams));
    }
    invokeDeleteCarrierGateway(partialParams) {
        return this.client.deleteCarrierGateway(this.ops["DeleteCarrierGateway"].apply(partialParams));
    }
    invokeDeleteClientVpnEndpoint(partialParams) {
        return this.client.deleteClientVpnEndpoint(this.ops["DeleteClientVpnEndpoint"].apply(partialParams));
    }
    invokeDeleteClientVpnRoute(partialParams) {
        return this.client.deleteClientVpnRoute(this.ops["DeleteClientVpnRoute"].apply(partialParams));
    }
    invokeDeleteCustomerGateway(partialParams) {
        return this.client.deleteCustomerGateway(this.ops["DeleteCustomerGateway"].apply(partialParams));
    }
    invokeDeleteDhcpOptions(partialParams) {
        return this.client.deleteDhcpOptions(this.ops["DeleteDhcpOptions"].apply(partialParams));
    }
    invokeDeleteEgressOnlyInternetGateway(partialParams) {
        return this.client.deleteEgressOnlyInternetGateway(this.ops["DeleteEgressOnlyInternetGateway"].apply(partialParams));
    }
    invokeDeleteFleets(partialParams) {
        return this.client.deleteFleets(this.ops["DeleteFleets"].apply(partialParams));
    }
    invokeDeleteFlowLogs(partialParams) {
        return this.client.deleteFlowLogs(this.ops["DeleteFlowLogs"].apply(partialParams));
    }
    invokeDeleteFpgaImage(partialParams) {
        return this.client.deleteFpgaImage(this.ops["DeleteFpgaImage"].apply(partialParams));
    }
    invokeDeleteInstanceEventWindow(partialParams) {
        return this.client.deleteInstanceEventWindow(this.ops["DeleteInstanceEventWindow"].apply(partialParams));
    }
    invokeDeleteInternetGateway(partialParams) {
        return this.client.deleteInternetGateway(this.ops["DeleteInternetGateway"].apply(partialParams));
    }
    invokeDeleteIpam(partialParams) {
        return this.client.deleteIpam(this.ops["DeleteIpam"].apply(partialParams));
    }
    invokeDeleteIpamPool(partialParams) {
        return this.client.deleteIpamPool(this.ops["DeleteIpamPool"].apply(partialParams));
    }
    invokeDeleteIpamScope(partialParams) {
        return this.client.deleteIpamScope(this.ops["DeleteIpamScope"].apply(partialParams));
    }
    invokeDeleteLaunchTemplateVersions(partialParams) {
        return this.client.deleteLaunchTemplateVersions(this.ops["DeleteLaunchTemplateVersions"].apply(partialParams));
    }
    invokeDeleteLocalGatewayRoute(partialParams) {
        return this.client.deleteLocalGatewayRoute(this.ops["DeleteLocalGatewayRoute"].apply(partialParams));
    }
    invokeDeleteLocalGatewayRouteTableVpcAssociation(partialParams) {
        return this.client.deleteLocalGatewayRouteTableVpcAssociation(this.ops["DeleteLocalGatewayRouteTableVpcAssociation"].apply(partialParams));
    }
    invokeDeleteManagedPrefixList(partialParams) {
        return this.client.deleteManagedPrefixList(this.ops["DeleteManagedPrefixList"].apply(partialParams));
    }
    invokeDeleteNatGateway(partialParams) {
        return this.client.deleteNatGateway(this.ops["DeleteNatGateway"].apply(partialParams));
    }
    invokeDeleteNetworkAcl(partialParams) {
        return this.client.deleteNetworkAcl(this.ops["DeleteNetworkAcl"].apply(partialParams));
    }
    invokeDeleteNetworkAclEntry(partialParams) {
        return this.client.deleteNetworkAclEntry(this.ops["DeleteNetworkAclEntry"].apply(partialParams));
    }
    invokeDeleteNetworkInsightsAccessScope(partialParams) {
        return this.client.deleteNetworkInsightsAccessScope(this.ops["DeleteNetworkInsightsAccessScope"].apply(partialParams));
    }
    invokeDeleteNetworkInsightsAccessScopeAnalysis(partialParams) {
        return this.client.deleteNetworkInsightsAccessScopeAnalysis(this.ops["DeleteNetworkInsightsAccessScopeAnalysis"].apply(partialParams));
    }
    invokeDeleteNetworkInsightsAnalysis(partialParams) {
        return this.client.deleteNetworkInsightsAnalysis(this.ops["DeleteNetworkInsightsAnalysis"].apply(partialParams));
    }
    invokeDeleteNetworkInsightsPath(partialParams) {
        return this.client.deleteNetworkInsightsPath(this.ops["DeleteNetworkInsightsPath"].apply(partialParams));
    }
    invokeDeleteNetworkInterface(partialParams) {
        return this.client.deleteNetworkInterface(this.ops["DeleteNetworkInterface"].apply(partialParams));
    }
    invokeDeleteNetworkInterfacePermission(partialParams) {
        return this.client.deleteNetworkInterfacePermission(this.ops["DeleteNetworkInterfacePermission"].apply(partialParams));
    }
    invokeDeletePlacementGroup(partialParams) {
        return this.client.deletePlacementGroup(this.ops["DeletePlacementGroup"].apply(partialParams));
    }
    invokeDeletePublicIpv4Pool(partialParams) {
        return this.client.deletePublicIpv4Pool(this.ops["DeletePublicIpv4Pool"].apply(partialParams));
    }
    invokeDeleteQueuedReservedInstances(partialParams) {
        return this.client.deleteQueuedReservedInstances(this.ops["DeleteQueuedReservedInstances"].apply(partialParams));
    }
    invokeDeleteRoute(partialParams) {
        return this.client.deleteRoute(this.ops["DeleteRoute"].apply(partialParams));
    }
    invokeDeleteRouteTable(partialParams) {
        return this.client.deleteRouteTable(this.ops["DeleteRouteTable"].apply(partialParams));
    }
    invokeDeleteSnapshot(partialParams) {
        return this.client.deleteSnapshot(this.ops["DeleteSnapshot"].apply(partialParams));
    }
    invokeDeleteSubnet(partialParams) {
        return this.client.deleteSubnet(this.ops["DeleteSubnet"].apply(partialParams));
    }
    invokeDeleteSubnetCidrReservation(partialParams) {
        return this.client.deleteSubnetCidrReservation(this.ops["DeleteSubnetCidrReservation"].apply(partialParams));
    }
    invokeDeleteTags(partialParams) {
        return this.client.deleteTags(this.ops["DeleteTags"].apply(partialParams));
    }
    invokeDeleteTrafficMirrorFilter(partialParams) {
        return this.client.deleteTrafficMirrorFilter(this.ops["DeleteTrafficMirrorFilter"].apply(partialParams));
    }
    invokeDeleteTrafficMirrorFilterRule(partialParams) {
        return this.client.deleteTrafficMirrorFilterRule(this.ops["DeleteTrafficMirrorFilterRule"].apply(partialParams));
    }
    invokeDeleteTrafficMirrorSession(partialParams) {
        return this.client.deleteTrafficMirrorSession(this.ops["DeleteTrafficMirrorSession"].apply(partialParams));
    }
    invokeDeleteTrafficMirrorTarget(partialParams) {
        return this.client.deleteTrafficMirrorTarget(this.ops["DeleteTrafficMirrorTarget"].apply(partialParams));
    }
    invokeDeleteTransitGateway(partialParams) {
        return this.client.deleteTransitGateway(this.ops["DeleteTransitGateway"].apply(partialParams));
    }
    invokeDeleteTransitGatewayConnect(partialParams) {
        return this.client.deleteTransitGatewayConnect(this.ops["DeleteTransitGatewayConnect"].apply(partialParams));
    }
    invokeDeleteTransitGatewayConnectPeer(partialParams) {
        return this.client.deleteTransitGatewayConnectPeer(this.ops["DeleteTransitGatewayConnectPeer"].apply(partialParams));
    }
    invokeDeleteTransitGatewayMulticastDomain(partialParams) {
        return this.client.deleteTransitGatewayMulticastDomain(this.ops["DeleteTransitGatewayMulticastDomain"].apply(partialParams));
    }
    invokeDeleteTransitGatewayPeeringAttachment(partialParams) {
        return this.client.deleteTransitGatewayPeeringAttachment(this.ops["DeleteTransitGatewayPeeringAttachment"].apply(partialParams));
    }
    invokeDeleteTransitGatewayPrefixListReference(partialParams) {
        return this.client.deleteTransitGatewayPrefixListReference(this.ops["DeleteTransitGatewayPrefixListReference"].apply(partialParams));
    }
    invokeDeleteTransitGatewayRoute(partialParams) {
        return this.client.deleteTransitGatewayRoute(this.ops["DeleteTransitGatewayRoute"].apply(partialParams));
    }
    invokeDeleteTransitGatewayRouteTable(partialParams) {
        return this.client.deleteTransitGatewayRouteTable(this.ops["DeleteTransitGatewayRouteTable"].apply(partialParams));
    }
    invokeDeleteTransitGatewayVpcAttachment(partialParams) {
        return this.client.deleteTransitGatewayVpcAttachment(this.ops["DeleteTransitGatewayVpcAttachment"].apply(partialParams));
    }
    invokeDeleteVolume(partialParams) {
        return this.client.deleteVolume(this.ops["DeleteVolume"].apply(partialParams));
    }
    invokeDeleteVpc(partialParams) {
        return this.client.deleteVpc(this.ops["DeleteVpc"].apply(partialParams));
    }
    invokeDeleteVpcEndpointConnectionNotifications(partialParams) {
        return this.client.deleteVpcEndpointConnectionNotifications(this.ops["DeleteVpcEndpointConnectionNotifications"].apply(partialParams));
    }
    invokeDeleteVpcEndpointServiceConfigurations(partialParams) {
        return this.client.deleteVpcEndpointServiceConfigurations(this.ops["DeleteVpcEndpointServiceConfigurations"].apply(partialParams));
    }
    invokeDeleteVpcEndpoints(partialParams) {
        return this.client.deleteVpcEndpoints(this.ops["DeleteVpcEndpoints"].apply(partialParams));
    }
    invokeDeleteVpcPeeringConnection(partialParams) {
        return this.client.deleteVpcPeeringConnection(this.ops["DeleteVpcPeeringConnection"].apply(partialParams));
    }
    invokeDeleteVpnConnection(partialParams) {
        return this.client.deleteVpnConnection(this.ops["DeleteVpnConnection"].apply(partialParams));
    }
    invokeDeleteVpnConnectionRoute(partialParams) {
        return this.client.deleteVpnConnectionRoute(this.ops["DeleteVpnConnectionRoute"].apply(partialParams));
    }
    invokeDeleteVpnGateway(partialParams) {
        return this.client.deleteVpnGateway(this.ops["DeleteVpnGateway"].apply(partialParams));
    }
    invokeDeprovisionByoipCidr(partialParams) {
        return this.client.deprovisionByoipCidr(this.ops["DeprovisionByoipCidr"].apply(partialParams));
    }
    invokeDeprovisionIpamPoolCidr(partialParams) {
        return this.client.deprovisionIpamPoolCidr(this.ops["DeprovisionIpamPoolCidr"].apply(partialParams));
    }
    invokeDeprovisionPublicIpv4PoolCidr(partialParams) {
        return this.client.deprovisionPublicIpv4PoolCidr(this.ops["DeprovisionPublicIpv4PoolCidr"].apply(partialParams));
    }
    invokeDeregisterImage(partialParams) {
        return this.client.deregisterImage(this.ops["DeregisterImage"].apply(partialParams));
    }
    invokeDescribeByoipCidrs(partialParams) {
        return this.client.describeByoipCidrs(this.ops["DescribeByoipCidrs"].apply(partialParams));
    }
    invokeDescribeClientVpnAuthorizationRules(partialParams) {
        return this.client.describeClientVpnAuthorizationRules(this.ops["DescribeClientVpnAuthorizationRules"].apply(partialParams));
    }
    invokeDescribeClientVpnConnections(partialParams) {
        return this.client.describeClientVpnConnections(this.ops["DescribeClientVpnConnections"].apply(partialParams));
    }
    invokeDescribeClientVpnRoutes(partialParams) {
        return this.client.describeClientVpnRoutes(this.ops["DescribeClientVpnRoutes"].apply(partialParams));
    }
    invokeDescribeClientVpnTargetNetworks(partialParams) {
        return this.client.describeClientVpnTargetNetworks(this.ops["DescribeClientVpnTargetNetworks"].apply(partialParams));
    }
    invokeDescribeFleetHistory(partialParams) {
        return this.client.describeFleetHistory(this.ops["DescribeFleetHistory"].apply(partialParams));
    }
    invokeDescribeFleetInstances(partialParams) {
        return this.client.describeFleetInstances(this.ops["DescribeFleetInstances"].apply(partialParams));
    }
    invokeDescribeFpgaImageAttribute(partialParams) {
        return this.client.describeFpgaImageAttribute(this.ops["DescribeFpgaImageAttribute"].apply(partialParams));
    }
    invokeDescribeIdentityIdFormat(partialParams) {
        return this.client.describeIdentityIdFormat(this.ops["DescribeIdentityIdFormat"].apply(partialParams));
    }
    invokeDescribeImageAttribute(partialParams) {
        return this.client.describeImageAttribute(this.ops["DescribeImageAttribute"].apply(partialParams));
    }
    invokeDescribeInstanceAttribute(partialParams) {
        return this.client.describeInstanceAttribute(this.ops["DescribeInstanceAttribute"].apply(partialParams));
    }
    invokeDescribeNetworkInterfaceAttribute(partialParams) {
        return this.client.describeNetworkInterfaceAttribute(this.ops["DescribeNetworkInterfaceAttribute"].apply(partialParams));
    }
    invokeDescribeScheduledInstanceAvailability(partialParams) {
        return this.client.describeScheduledInstanceAvailability(this.ops["DescribeScheduledInstanceAvailability"].apply(partialParams));
    }
    invokeDescribeSecurityGroupReferences(partialParams) {
        return this.client.describeSecurityGroupReferences(this.ops["DescribeSecurityGroupReferences"].apply(partialParams));
    }
    invokeDescribeSnapshotAttribute(partialParams) {
        return this.client.describeSnapshotAttribute(this.ops["DescribeSnapshotAttribute"].apply(partialParams));
    }
    invokeDescribeSpotFleetInstances(partialParams) {
        return this.client.describeSpotFleetInstances(this.ops["DescribeSpotFleetInstances"].apply(partialParams));
    }
    invokeDescribeSpotFleetRequestHistory(partialParams) {
        return this.client.describeSpotFleetRequestHistory(this.ops["DescribeSpotFleetRequestHistory"].apply(partialParams));
    }
    invokeDescribeStaleSecurityGroups(partialParams) {
        return this.client.describeStaleSecurityGroups(this.ops["DescribeStaleSecurityGroups"].apply(partialParams));
    }
    invokeDescribeVolumeAttribute(partialParams) {
        return this.client.describeVolumeAttribute(this.ops["DescribeVolumeAttribute"].apply(partialParams));
    }
    invokeDescribeVpcAttribute(partialParams) {
        return this.client.describeVpcAttribute(this.ops["DescribeVpcAttribute"].apply(partialParams));
    }
    invokeDescribeVpcEndpointServicePermissions(partialParams) {
        return this.client.describeVpcEndpointServicePermissions(this.ops["DescribeVpcEndpointServicePermissions"].apply(partialParams));
    }
    invokeDetachClassicLinkVpc(partialParams) {
        return this.client.detachClassicLinkVpc(this.ops["DetachClassicLinkVpc"].apply(partialParams));
    }
    invokeDetachInternetGateway(partialParams) {
        return this.client.detachInternetGateway(this.ops["DetachInternetGateway"].apply(partialParams));
    }
    invokeDetachNetworkInterface(partialParams) {
        return this.client.detachNetworkInterface(this.ops["DetachNetworkInterface"].apply(partialParams));
    }
    invokeDetachVolume(partialParams) {
        return this.client.detachVolume(this.ops["DetachVolume"].apply(partialParams));
    }
    invokeDetachVpnGateway(partialParams) {
        return this.client.detachVpnGateway(this.ops["DetachVpnGateway"].apply(partialParams));
    }
    invokeDisableFastLaunch(partialParams) {
        return this.client.disableFastLaunch(this.ops["DisableFastLaunch"].apply(partialParams));
    }
    invokeDisableFastSnapshotRestores(partialParams) {
        return this.client.disableFastSnapshotRestores(this.ops["DisableFastSnapshotRestores"].apply(partialParams));
    }
    invokeDisableImageDeprecation(partialParams) {
        return this.client.disableImageDeprecation(this.ops["DisableImageDeprecation"].apply(partialParams));
    }
    invokeDisableIpamOrganizationAdminAccount(partialParams) {
        return this.client.disableIpamOrganizationAdminAccount(this.ops["DisableIpamOrganizationAdminAccount"].apply(partialParams));
    }
    invokeDisableTransitGatewayRouteTablePropagation(partialParams) {
        return this.client.disableTransitGatewayRouteTablePropagation(this.ops["DisableTransitGatewayRouteTablePropagation"].apply(partialParams));
    }
    invokeDisableVgwRoutePropagation(partialParams) {
        return this.client.disableVgwRoutePropagation(this.ops["DisableVgwRoutePropagation"].apply(partialParams));
    }
    invokeDisableVpcClassicLink(partialParams) {
        return this.client.disableVpcClassicLink(this.ops["DisableVpcClassicLink"].apply(partialParams));
    }
    invokeDisassociateClientVpnTargetNetwork(partialParams) {
        return this.client.disassociateClientVpnTargetNetwork(this.ops["DisassociateClientVpnTargetNetwork"].apply(partialParams));
    }
    invokeDisassociateIamInstanceProfile(partialParams) {
        return this.client.disassociateIamInstanceProfile(this.ops["DisassociateIamInstanceProfile"].apply(partialParams));
    }
    invokeDisassociateInstanceEventWindow(partialParams) {
        return this.client.disassociateInstanceEventWindow(this.ops["DisassociateInstanceEventWindow"].apply(partialParams));
    }
    invokeDisassociateRouteTable(partialParams) {
        return this.client.disassociateRouteTable(this.ops["DisassociateRouteTable"].apply(partialParams));
    }
    invokeDisassociateSubnetCidrBlock(partialParams) {
        return this.client.disassociateSubnetCidrBlock(this.ops["DisassociateSubnetCidrBlock"].apply(partialParams));
    }
    invokeDisassociateTransitGatewayRouteTable(partialParams) {
        return this.client.disassociateTransitGatewayRouteTable(this.ops["DisassociateTransitGatewayRouteTable"].apply(partialParams));
    }
    invokeDisassociateTrunkInterface(partialParams) {
        return this.client.disassociateTrunkInterface(this.ops["DisassociateTrunkInterface"].apply(partialParams));
    }
    invokeDisassociateVpcCidrBlock(partialParams) {
        return this.client.disassociateVpcCidrBlock(this.ops["DisassociateVpcCidrBlock"].apply(partialParams));
    }
    invokeEnableFastLaunch(partialParams) {
        return this.client.enableFastLaunch(this.ops["EnableFastLaunch"].apply(partialParams));
    }
    invokeEnableFastSnapshotRestores(partialParams) {
        return this.client.enableFastSnapshotRestores(this.ops["EnableFastSnapshotRestores"].apply(partialParams));
    }
    invokeEnableImageDeprecation(partialParams) {
        return this.client.enableImageDeprecation(this.ops["EnableImageDeprecation"].apply(partialParams));
    }
    invokeEnableIpamOrganizationAdminAccount(partialParams) {
        return this.client.enableIpamOrganizationAdminAccount(this.ops["EnableIpamOrganizationAdminAccount"].apply(partialParams));
    }
    invokeEnableTransitGatewayRouteTablePropagation(partialParams) {
        return this.client.enableTransitGatewayRouteTablePropagation(this.ops["EnableTransitGatewayRouteTablePropagation"].apply(partialParams));
    }
    invokeEnableVgwRoutePropagation(partialParams) {
        return this.client.enableVgwRoutePropagation(this.ops["EnableVgwRoutePropagation"].apply(partialParams));
    }
    invokeEnableVolumeIO(partialParams) {
        return this.client.enableVolumeIO(this.ops["EnableVolumeIO"].apply(partialParams));
    }
    invokeEnableVpcClassicLink(partialParams) {
        return this.client.enableVpcClassicLink(this.ops["EnableVpcClassicLink"].apply(partialParams));
    }
    invokeExportClientVpnClientCertificateRevocationList(partialParams) {
        return this.client.exportClientVpnClientCertificateRevocationList(this.ops["ExportClientVpnClientCertificateRevocationList"].apply(partialParams));
    }
    invokeExportClientVpnClientConfiguration(partialParams) {
        return this.client.exportClientVpnClientConfiguration(this.ops["ExportClientVpnClientConfiguration"].apply(partialParams));
    }
    invokeExportImage(partialParams) {
        return this.client.exportImage(this.ops["ExportImage"].apply(partialParams));
    }
    invokeExportTransitGatewayRoutes(partialParams) {
        return this.client.exportTransitGatewayRoutes(this.ops["ExportTransitGatewayRoutes"].apply(partialParams));
    }
    invokeGetAssociatedIpv6PoolCidrs(partialParams) {
        return this.client.getAssociatedIpv6PoolCidrs(this.ops["GetAssociatedIpv6PoolCidrs"].apply(partialParams));
    }
    invokeGetCapacityReservationUsage(partialParams) {
        return this.client.getCapacityReservationUsage(this.ops["GetCapacityReservationUsage"].apply(partialParams));
    }
    invokeGetCoipPoolUsage(partialParams) {
        return this.client.getCoipPoolUsage(this.ops["GetCoipPoolUsage"].apply(partialParams));
    }
    invokeGetConsoleOutput(partialParams) {
        return this.client.getConsoleOutput(this.ops["GetConsoleOutput"].apply(partialParams));
    }
    invokeGetConsoleScreenshot(partialParams) {
        return this.client.getConsoleScreenshot(this.ops["GetConsoleScreenshot"].apply(partialParams));
    }
    invokeGetDefaultCreditSpecification(partialParams) {
        return this.client.getDefaultCreditSpecification(this.ops["GetDefaultCreditSpecification"].apply(partialParams));
    }
    invokeGetFlowLogsIntegrationTemplate(partialParams) {
        return this.client.getFlowLogsIntegrationTemplate(this.ops["GetFlowLogsIntegrationTemplate"].apply(partialParams));
    }
    invokeGetGroupsForCapacityReservation(partialParams) {
        return this.client.getGroupsForCapacityReservation(this.ops["GetGroupsForCapacityReservation"].apply(partialParams));
    }
    invokeGetHostReservationPurchasePreview(partialParams) {
        return this.client.getHostReservationPurchasePreview(this.ops["GetHostReservationPurchasePreview"].apply(partialParams));
    }
    invokeGetInstanceTypesFromInstanceRequirements(partialParams) {
        return this.client.getInstanceTypesFromInstanceRequirements(this.ops["GetInstanceTypesFromInstanceRequirements"].apply(partialParams));
    }
    invokeGetIpamAddressHistory(partialParams) {
        return this.client.getIpamAddressHistory(this.ops["GetIpamAddressHistory"].apply(partialParams));
    }
    invokeGetIpamPoolAllocations(partialParams) {
        return this.client.getIpamPoolAllocations(this.ops["GetIpamPoolAllocations"].apply(partialParams));
    }
    invokeGetIpamPoolCidrs(partialParams) {
        return this.client.getIpamPoolCidrs(this.ops["GetIpamPoolCidrs"].apply(partialParams));
    }
    invokeGetIpamResourceCidrs(partialParams) {
        return this.client.getIpamResourceCidrs(this.ops["GetIpamResourceCidrs"].apply(partialParams));
    }
    invokeGetLaunchTemplateData(partialParams) {
        return this.client.getLaunchTemplateData(this.ops["GetLaunchTemplateData"].apply(partialParams));
    }
    invokeGetManagedPrefixListAssociations(partialParams) {
        return this.client.getManagedPrefixListAssociations(this.ops["GetManagedPrefixListAssociations"].apply(partialParams));
    }
    invokeGetManagedPrefixListEntries(partialParams) {
        return this.client.getManagedPrefixListEntries(this.ops["GetManagedPrefixListEntries"].apply(partialParams));
    }
    invokeGetNetworkInsightsAccessScopeAnalysisFindings(partialParams) {
        return this.client.getNetworkInsightsAccessScopeAnalysisFindings(this.ops["GetNetworkInsightsAccessScopeAnalysisFindings"].apply(partialParams));
    }
    invokeGetNetworkInsightsAccessScopeContent(partialParams) {
        return this.client.getNetworkInsightsAccessScopeContent(this.ops["GetNetworkInsightsAccessScopeContent"].apply(partialParams));
    }
    invokeGetPasswordData(partialParams) {
        return this.client.getPasswordData(this.ops["GetPasswordData"].apply(partialParams));
    }
    invokeGetReservedInstancesExchangeQuote(partialParams) {
        return this.client.getReservedInstancesExchangeQuote(this.ops["GetReservedInstancesExchangeQuote"].apply(partialParams));
    }
    invokeGetSpotPlacementScores(partialParams) {
        return this.client.getSpotPlacementScores(this.ops["GetSpotPlacementScores"].apply(partialParams));
    }
    invokeGetSubnetCidrReservations(partialParams) {
        return this.client.getSubnetCidrReservations(this.ops["GetSubnetCidrReservations"].apply(partialParams));
    }
    invokeGetTransitGatewayAttachmentPropagations(partialParams) {
        return this.client.getTransitGatewayAttachmentPropagations(this.ops["GetTransitGatewayAttachmentPropagations"].apply(partialParams));
    }
    invokeGetTransitGatewayPrefixListReferences(partialParams) {
        return this.client.getTransitGatewayPrefixListReferences(this.ops["GetTransitGatewayPrefixListReferences"].apply(partialParams));
    }
    invokeGetTransitGatewayRouteTableAssociations(partialParams) {
        return this.client.getTransitGatewayRouteTableAssociations(this.ops["GetTransitGatewayRouteTableAssociations"].apply(partialParams));
    }
    invokeGetTransitGatewayRouteTablePropagations(partialParams) {
        return this.client.getTransitGatewayRouteTablePropagations(this.ops["GetTransitGatewayRouteTablePropagations"].apply(partialParams));
    }
    invokeGetVpnConnectionDeviceSampleConfiguration(partialParams) {
        return this.client.getVpnConnectionDeviceSampleConfiguration(this.ops["GetVpnConnectionDeviceSampleConfiguration"].apply(partialParams));
    }
    invokeImportClientVpnClientCertificateRevocationList(partialParams) {
        return this.client.importClientVpnClientCertificateRevocationList(this.ops["ImportClientVpnClientCertificateRevocationList"].apply(partialParams));
    }
    invokeImportInstance(partialParams) {
        return this.client.importInstance(this.ops["ImportInstance"].apply(partialParams));
    }
    invokeImportKeyPair(partialParams) {
        return this.client.importKeyPair(this.ops["ImportKeyPair"].apply(partialParams));
    }
    invokeImportVolume(partialParams) {
        return this.client.importVolume(this.ops["ImportVolume"].apply(partialParams));
    }
    invokeModifyAddressAttribute(partialParams) {
        return this.client.modifyAddressAttribute(this.ops["ModifyAddressAttribute"].apply(partialParams));
    }
    invokeModifyAvailabilityZoneGroup(partialParams) {
        return this.client.modifyAvailabilityZoneGroup(this.ops["ModifyAvailabilityZoneGroup"].apply(partialParams));
    }
    invokeModifyCapacityReservation(partialParams) {
        return this.client.modifyCapacityReservation(this.ops["ModifyCapacityReservation"].apply(partialParams));
    }
    invokeModifyCapacityReservationFleet(partialParams) {
        return this.client.modifyCapacityReservationFleet(this.ops["ModifyCapacityReservationFleet"].apply(partialParams));
    }
    invokeModifyClientVpnEndpoint(partialParams) {
        return this.client.modifyClientVpnEndpoint(this.ops["ModifyClientVpnEndpoint"].apply(partialParams));
    }
    invokeModifyDefaultCreditSpecification(partialParams) {
        return this.client.modifyDefaultCreditSpecification(this.ops["ModifyDefaultCreditSpecification"].apply(partialParams));
    }
    invokeModifyEbsDefaultKmsKeyId(partialParams) {
        return this.client.modifyEbsDefaultKmsKeyId(this.ops["ModifyEbsDefaultKmsKeyId"].apply(partialParams));
    }
    invokeModifyFleet(partialParams) {
        return this.client.modifyFleet(this.ops["ModifyFleet"].apply(partialParams));
    }
    invokeModifyFpgaImageAttribute(partialParams) {
        return this.client.modifyFpgaImageAttribute(this.ops["ModifyFpgaImageAttribute"].apply(partialParams));
    }
    invokeModifyHosts(partialParams) {
        return this.client.modifyHosts(this.ops["ModifyHosts"].apply(partialParams));
    }
    invokeModifyIdFormat(partialParams) {
        return this.client.modifyIdFormat(this.ops["ModifyIdFormat"].apply(partialParams));
    }
    invokeModifyIdentityIdFormat(partialParams) {
        return this.client.modifyIdentityIdFormat(this.ops["ModifyIdentityIdFormat"].apply(partialParams));
    }
    invokeModifyImageAttribute(partialParams) {
        return this.client.modifyImageAttribute(this.ops["ModifyImageAttribute"].apply(partialParams));
    }
    invokeModifyInstanceAttribute(partialParams) {
        return this.client.modifyInstanceAttribute(this.ops["ModifyInstanceAttribute"].apply(partialParams));
    }
    invokeModifyInstanceCapacityReservationAttributes(partialParams) {
        return this.client.modifyInstanceCapacityReservationAttributes(this.ops["ModifyInstanceCapacityReservationAttributes"].apply(partialParams));
    }
    invokeModifyInstanceCreditSpecification(partialParams) {
        return this.client.modifyInstanceCreditSpecification(this.ops["ModifyInstanceCreditSpecification"].apply(partialParams));
    }
    invokeModifyInstanceEventStartTime(partialParams) {
        return this.client.modifyInstanceEventStartTime(this.ops["ModifyInstanceEventStartTime"].apply(partialParams));
    }
    invokeModifyInstanceEventWindow(partialParams) {
        return this.client.modifyInstanceEventWindow(this.ops["ModifyInstanceEventWindow"].apply(partialParams));
    }
    invokeModifyInstanceMetadataOptions(partialParams) {
        return this.client.modifyInstanceMetadataOptions(this.ops["ModifyInstanceMetadataOptions"].apply(partialParams));
    }
    invokeModifyInstancePlacement(partialParams) {
        return this.client.modifyInstancePlacement(this.ops["ModifyInstancePlacement"].apply(partialParams));
    }
    invokeModifyIpam(partialParams) {
        return this.client.modifyIpam(this.ops["ModifyIpam"].apply(partialParams));
    }
    invokeModifyIpamPool(partialParams) {
        return this.client.modifyIpamPool(this.ops["ModifyIpamPool"].apply(partialParams));
    }
    invokeModifyIpamResourceCidr(partialParams) {
        return this.client.modifyIpamResourceCidr(this.ops["ModifyIpamResourceCidr"].apply(partialParams));
    }
    invokeModifyIpamScope(partialParams) {
        return this.client.modifyIpamScope(this.ops["ModifyIpamScope"].apply(partialParams));
    }
    invokeModifyManagedPrefixList(partialParams) {
        return this.client.modifyManagedPrefixList(this.ops["ModifyManagedPrefixList"].apply(partialParams));
    }
    invokeModifyNetworkInterfaceAttribute(partialParams) {
        return this.client.modifyNetworkInterfaceAttribute(this.ops["ModifyNetworkInterfaceAttribute"].apply(partialParams));
    }
    invokeModifyReservedInstances(partialParams) {
        return this.client.modifyReservedInstances(this.ops["ModifyReservedInstances"].apply(partialParams));
    }
    invokeModifySecurityGroupRules(partialParams) {
        return this.client.modifySecurityGroupRules(this.ops["ModifySecurityGroupRules"].apply(partialParams));
    }
    invokeModifySnapshotAttribute(partialParams) {
        return this.client.modifySnapshotAttribute(this.ops["ModifySnapshotAttribute"].apply(partialParams));
    }
    invokeModifySnapshotTier(partialParams) {
        return this.client.modifySnapshotTier(this.ops["ModifySnapshotTier"].apply(partialParams));
    }
    invokeModifySpotFleetRequest(partialParams) {
        return this.client.modifySpotFleetRequest(this.ops["ModifySpotFleetRequest"].apply(partialParams));
    }
    invokeModifySubnetAttribute(partialParams) {
        return this.client.modifySubnetAttribute(this.ops["ModifySubnetAttribute"].apply(partialParams));
    }
    invokeModifyTrafficMirrorFilterNetworkServices(partialParams) {
        return this.client.modifyTrafficMirrorFilterNetworkServices(this.ops["ModifyTrafficMirrorFilterNetworkServices"].apply(partialParams));
    }
    invokeModifyTrafficMirrorFilterRule(partialParams) {
        return this.client.modifyTrafficMirrorFilterRule(this.ops["ModifyTrafficMirrorFilterRule"].apply(partialParams));
    }
    invokeModifyTrafficMirrorSession(partialParams) {
        return this.client.modifyTrafficMirrorSession(this.ops["ModifyTrafficMirrorSession"].apply(partialParams));
    }
    invokeModifyTransitGateway(partialParams) {
        return this.client.modifyTransitGateway(this.ops["ModifyTransitGateway"].apply(partialParams));
    }
    invokeModifyTransitGatewayPrefixListReference(partialParams) {
        return this.client.modifyTransitGatewayPrefixListReference(this.ops["ModifyTransitGatewayPrefixListReference"].apply(partialParams));
    }
    invokeModifyTransitGatewayVpcAttachment(partialParams) {
        return this.client.modifyTransitGatewayVpcAttachment(this.ops["ModifyTransitGatewayVpcAttachment"].apply(partialParams));
    }
    invokeModifyVolume(partialParams) {
        return this.client.modifyVolume(this.ops["ModifyVolume"].apply(partialParams));
    }
    invokeModifyVolumeAttribute(partialParams) {
        return this.client.modifyVolumeAttribute(this.ops["ModifyVolumeAttribute"].apply(partialParams));
    }
    invokeModifyVpcAttribute(partialParams) {
        return this.client.modifyVpcAttribute(this.ops["ModifyVpcAttribute"].apply(partialParams));
    }
    invokeModifyVpcEndpoint(partialParams) {
        return this.client.modifyVpcEndpoint(this.ops["ModifyVpcEndpoint"].apply(partialParams));
    }
    invokeModifyVpcEndpointConnectionNotification(partialParams) {
        return this.client.modifyVpcEndpointConnectionNotification(this.ops["ModifyVpcEndpointConnectionNotification"].apply(partialParams));
    }
    invokeModifyVpcEndpointServiceConfiguration(partialParams) {
        return this.client.modifyVpcEndpointServiceConfiguration(this.ops["ModifyVpcEndpointServiceConfiguration"].apply(partialParams));
    }
    invokeModifyVpcEndpointServicePayerResponsibility(partialParams) {
        return this.client.modifyVpcEndpointServicePayerResponsibility(this.ops["ModifyVpcEndpointServicePayerResponsibility"].apply(partialParams));
    }
    invokeModifyVpcEndpointServicePermissions(partialParams) {
        return this.client.modifyVpcEndpointServicePermissions(this.ops["ModifyVpcEndpointServicePermissions"].apply(partialParams));
    }
    invokeModifyVpcPeeringConnectionOptions(partialParams) {
        return this.client.modifyVpcPeeringConnectionOptions(this.ops["ModifyVpcPeeringConnectionOptions"].apply(partialParams));
    }
    invokeModifyVpcTenancy(partialParams) {
        return this.client.modifyVpcTenancy(this.ops["ModifyVpcTenancy"].apply(partialParams));
    }
    invokeModifyVpnConnection(partialParams) {
        return this.client.modifyVpnConnection(this.ops["ModifyVpnConnection"].apply(partialParams));
    }
    invokeModifyVpnConnectionOptions(partialParams) {
        return this.client.modifyVpnConnectionOptions(this.ops["ModifyVpnConnectionOptions"].apply(partialParams));
    }
    invokeModifyVpnTunnelCertificate(partialParams) {
        return this.client.modifyVpnTunnelCertificate(this.ops["ModifyVpnTunnelCertificate"].apply(partialParams));
    }
    invokeModifyVpnTunnelOptions(partialParams) {
        return this.client.modifyVpnTunnelOptions(this.ops["ModifyVpnTunnelOptions"].apply(partialParams));
    }
    invokeMonitorInstances(partialParams) {
        return this.client.monitorInstances(this.ops["MonitorInstances"].apply(partialParams));
    }
    invokeMoveAddressToVpc(partialParams) {
        return this.client.moveAddressToVpc(this.ops["MoveAddressToVpc"].apply(partialParams));
    }
    invokeMoveByoipCidrToIpam(partialParams) {
        return this.client.moveByoipCidrToIpam(this.ops["MoveByoipCidrToIpam"].apply(partialParams));
    }
    invokeProvisionByoipCidr(partialParams) {
        return this.client.provisionByoipCidr(this.ops["ProvisionByoipCidr"].apply(partialParams));
    }
    invokeProvisionIpamPoolCidr(partialParams) {
        return this.client.provisionIpamPoolCidr(this.ops["ProvisionIpamPoolCidr"].apply(partialParams));
    }
    invokeProvisionPublicIpv4PoolCidr(partialParams) {
        return this.client.provisionPublicIpv4PoolCidr(this.ops["ProvisionPublicIpv4PoolCidr"].apply(partialParams));
    }
    invokePurchaseHostReservation(partialParams) {
        return this.client.purchaseHostReservation(this.ops["PurchaseHostReservation"].apply(partialParams));
    }
    invokePurchaseReservedInstancesOffering(partialParams) {
        return this.client.purchaseReservedInstancesOffering(this.ops["PurchaseReservedInstancesOffering"].apply(partialParams));
    }
    invokePurchaseScheduledInstances(partialParams) {
        return this.client.purchaseScheduledInstances(this.ops["PurchaseScheduledInstances"].apply(partialParams));
    }
    invokeRebootInstances(partialParams) {
        return this.client.rebootInstances(this.ops["RebootInstances"].apply(partialParams));
    }
    invokeRegisterImage(partialParams) {
        return this.client.registerImage(this.ops["RegisterImage"].apply(partialParams));
    }
    invokeRejectTransitGatewayPeeringAttachment(partialParams) {
        return this.client.rejectTransitGatewayPeeringAttachment(this.ops["RejectTransitGatewayPeeringAttachment"].apply(partialParams));
    }
    invokeRejectTransitGatewayVpcAttachment(partialParams) {
        return this.client.rejectTransitGatewayVpcAttachment(this.ops["RejectTransitGatewayVpcAttachment"].apply(partialParams));
    }
    invokeRejectVpcEndpointConnections(partialParams) {
        return this.client.rejectVpcEndpointConnections(this.ops["RejectVpcEndpointConnections"].apply(partialParams));
    }
    invokeRejectVpcPeeringConnection(partialParams) {
        return this.client.rejectVpcPeeringConnection(this.ops["RejectVpcPeeringConnection"].apply(partialParams));
    }
    invokeReleaseHosts(partialParams) {
        return this.client.releaseHosts(this.ops["ReleaseHosts"].apply(partialParams));
    }
    invokeReleaseIpamPoolAllocation(partialParams) {
        return this.client.releaseIpamPoolAllocation(this.ops["ReleaseIpamPoolAllocation"].apply(partialParams));
    }
    invokeReplaceIamInstanceProfileAssociation(partialParams) {
        return this.client.replaceIamInstanceProfileAssociation(this.ops["ReplaceIamInstanceProfileAssociation"].apply(partialParams));
    }
    invokeReplaceNetworkAclAssociation(partialParams) {
        return this.client.replaceNetworkAclAssociation(this.ops["ReplaceNetworkAclAssociation"].apply(partialParams));
    }
    invokeReplaceNetworkAclEntry(partialParams) {
        return this.client.replaceNetworkAclEntry(this.ops["ReplaceNetworkAclEntry"].apply(partialParams));
    }
    invokeReplaceRoute(partialParams) {
        return this.client.replaceRoute(this.ops["ReplaceRoute"].apply(partialParams));
    }
    invokeReplaceRouteTableAssociation(partialParams) {
        return this.client.replaceRouteTableAssociation(this.ops["ReplaceRouteTableAssociation"].apply(partialParams));
    }
    invokeReplaceTransitGatewayRoute(partialParams) {
        return this.client.replaceTransitGatewayRoute(this.ops["ReplaceTransitGatewayRoute"].apply(partialParams));
    }
    invokeReportInstanceStatus(partialParams) {
        return this.client.reportInstanceStatus(this.ops["ReportInstanceStatus"].apply(partialParams));
    }
    invokeRequestSpotFleet(partialParams) {
        return this.client.requestSpotFleet(this.ops["RequestSpotFleet"].apply(partialParams));
    }
    invokeResetAddressAttribute(partialParams) {
        return this.client.resetAddressAttribute(this.ops["ResetAddressAttribute"].apply(partialParams));
    }
    invokeResetFpgaImageAttribute(partialParams) {
        return this.client.resetFpgaImageAttribute(this.ops["ResetFpgaImageAttribute"].apply(partialParams));
    }
    invokeResetImageAttribute(partialParams) {
        return this.client.resetImageAttribute(this.ops["ResetImageAttribute"].apply(partialParams));
    }
    invokeResetInstanceAttribute(partialParams) {
        return this.client.resetInstanceAttribute(this.ops["ResetInstanceAttribute"].apply(partialParams));
    }
    invokeResetNetworkInterfaceAttribute(partialParams) {
        return this.client.resetNetworkInterfaceAttribute(this.ops["ResetNetworkInterfaceAttribute"].apply(partialParams));
    }
    invokeResetSnapshotAttribute(partialParams) {
        return this.client.resetSnapshotAttribute(this.ops["ResetSnapshotAttribute"].apply(partialParams));
    }
    invokeRestoreAddressToClassic(partialParams) {
        return this.client.restoreAddressToClassic(this.ops["RestoreAddressToClassic"].apply(partialParams));
    }
    invokeRestoreImageFromRecycleBin(partialParams) {
        return this.client.restoreImageFromRecycleBin(this.ops["RestoreImageFromRecycleBin"].apply(partialParams));
    }
    invokeRestoreManagedPrefixListVersion(partialParams) {
        return this.client.restoreManagedPrefixListVersion(this.ops["RestoreManagedPrefixListVersion"].apply(partialParams));
    }
    invokeRestoreSnapshotFromRecycleBin(partialParams) {
        return this.client.restoreSnapshotFromRecycleBin(this.ops["RestoreSnapshotFromRecycleBin"].apply(partialParams));
    }
    invokeRestoreSnapshotTier(partialParams) {
        return this.client.restoreSnapshotTier(this.ops["RestoreSnapshotTier"].apply(partialParams));
    }
    invokeRevokeClientVpnIngress(partialParams) {
        return this.client.revokeClientVpnIngress(this.ops["RevokeClientVpnIngress"].apply(partialParams));
    }
    invokeRevokeSecurityGroupEgress(partialParams) {
        return this.client.revokeSecurityGroupEgress(this.ops["RevokeSecurityGroupEgress"].apply(partialParams));
    }
    invokeRunInstances(partialParams) {
        return this.client.runInstances(this.ops["RunInstances"].apply(partialParams));
    }
    invokeRunScheduledInstances(partialParams) {
        return this.client.runScheduledInstances(this.ops["RunScheduledInstances"].apply(partialParams));
    }
    invokeSearchLocalGatewayRoutes(partialParams) {
        return this.client.searchLocalGatewayRoutes(this.ops["SearchLocalGatewayRoutes"].apply(partialParams));
    }
    invokeSearchTransitGatewayRoutes(partialParams) {
        return this.client.searchTransitGatewayRoutes(this.ops["SearchTransitGatewayRoutes"].apply(partialParams));
    }
    invokeSendDiagnosticInterrupt(partialParams) {
        return this.client.sendDiagnosticInterrupt(this.ops["SendDiagnosticInterrupt"].apply(partialParams));
    }
    invokeStartInstances(partialParams) {
        return this.client.startInstances(this.ops["StartInstances"].apply(partialParams));
    }
    invokeStartNetworkInsightsAccessScopeAnalysis(partialParams) {
        return this.client.startNetworkInsightsAccessScopeAnalysis(this.ops["StartNetworkInsightsAccessScopeAnalysis"].apply(partialParams));
    }
    invokeStartNetworkInsightsAnalysis(partialParams) {
        return this.client.startNetworkInsightsAnalysis(this.ops["StartNetworkInsightsAnalysis"].apply(partialParams));
    }
    invokeStartVpcEndpointServicePrivateDnsVerification(partialParams) {
        return this.client.startVpcEndpointServicePrivateDnsVerification(this.ops["StartVpcEndpointServicePrivateDnsVerification"].apply(partialParams));
    }
    invokeStopInstances(partialParams) {
        return this.client.stopInstances(this.ops["StopInstances"].apply(partialParams));
    }
    invokeTerminateClientVpnConnections(partialParams) {
        return this.client.terminateClientVpnConnections(this.ops["TerminateClientVpnConnections"].apply(partialParams));
    }
    invokeTerminateInstances(partialParams) {
        return this.client.terminateInstances(this.ops["TerminateInstances"].apply(partialParams));
    }
    invokeUnassignIpv6Addresses(partialParams) {
        return this.client.unassignIpv6Addresses(this.ops["UnassignIpv6Addresses"].apply(partialParams));
    }
    invokeUnassignPrivateIpAddresses(partialParams) {
        return this.client.unassignPrivateIpAddresses(this.ops["UnassignPrivateIpAddresses"].apply(partialParams));
    }
    invokeUnmonitorInstances(partialParams) {
        return this.client.unmonitorInstances(this.ops["UnmonitorInstances"].apply(partialParams));
    }
    invokeWithdrawByoipCidr(partialParams) {
        return this.client.withdrawByoipCidr(this.ops["WithdrawByoipCidr"].apply(partialParams));
    }
}
exports.default = default_1;
