"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
const schema = require("../apis/ec2-2016-11-15.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.ec2.TrafficMirrorFilterRule {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.EC2();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
            if (this[(0, parse_1.upperCamelCase)(this.constructor.name) + (0, parse_1.upperCamelCase)(key)] === undefined) {
                this.capitalizedParams[this.constructor.name + (0, parse_1.upperCamelCase)(key)] = value;
            }
            console.log(this.capitalizedParams);
        });
    }
    boot() {
        if (this.booted) {
            return;
        }
        Object.entries(this.capitalizedParams).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value.value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
        this.ops = (0, parse_1.getResourceOperations)(this.capitalizedParams, schema);
        this.booted = true;
    }
    invokeAcceptReservedInstancesExchangeQuote(partialParams) {
        this.boot();
        return this.client.acceptReservedInstancesExchangeQuote(this.ops["AcceptReservedInstancesExchangeQuote"].apply(partialParams));
    }
    invokeAcceptTransitGatewayMulticastDomainAssociations(partialParams) {
        this.boot();
        return this.client.acceptTransitGatewayMulticastDomainAssociations(this.ops["AcceptTransitGatewayMulticastDomainAssociations"].apply(partialParams));
    }
    invokeAcceptTransitGatewayPeeringAttachment(partialParams) {
        this.boot();
        return this.client.acceptTransitGatewayPeeringAttachment(this.ops["AcceptTransitGatewayPeeringAttachment"].apply(partialParams));
    }
    invokeAcceptTransitGatewayVpcAttachment(partialParams) {
        this.boot();
        return this.client.acceptTransitGatewayVpcAttachment(this.ops["AcceptTransitGatewayVpcAttachment"].apply(partialParams));
    }
    invokeAcceptVpcEndpointConnections(partialParams) {
        this.boot();
        return this.client.acceptVpcEndpointConnections(this.ops["AcceptVpcEndpointConnections"].apply(partialParams));
    }
    invokeAcceptVpcPeeringConnection(partialParams) {
        this.boot();
        return this.client.acceptVpcPeeringConnection(this.ops["AcceptVpcPeeringConnection"].apply(partialParams));
    }
    invokeAdvertiseByoipCidr(partialParams) {
        this.boot();
        return this.client.advertiseByoipCidr(this.ops["AdvertiseByoipCidr"].apply(partialParams));
    }
    invokeAllocateAddress(partialParams) {
        this.boot();
        return this.client.allocateAddress(this.ops["AllocateAddress"].apply(partialParams));
    }
    invokeAllocateHosts(partialParams) {
        this.boot();
        return this.client.allocateHosts(this.ops["AllocateHosts"].apply(partialParams));
    }
    invokeAllocateIpamPoolCidr(partialParams) {
        this.boot();
        return this.client.allocateIpamPoolCidr(this.ops["AllocateIpamPoolCidr"].apply(partialParams));
    }
    invokeApplySecurityGroupsToClientVpnTargetNetwork(partialParams) {
        this.boot();
        return this.client.applySecurityGroupsToClientVpnTargetNetwork(this.ops["ApplySecurityGroupsToClientVpnTargetNetwork"].apply(partialParams));
    }
    invokeAssignIpv6Addresses(partialParams) {
        this.boot();
        return this.client.assignIpv6Addresses(this.ops["AssignIpv6Addresses"].apply(partialParams));
    }
    invokeAssignPrivateIpAddresses(partialParams) {
        this.boot();
        return this.client.assignPrivateIpAddresses(this.ops["AssignPrivateIpAddresses"].apply(partialParams));
    }
    invokeAssociateAddress(partialParams) {
        this.boot();
        return this.client.associateAddress(this.ops["AssociateAddress"].apply(partialParams));
    }
    invokeAssociateClientVpnTargetNetwork(partialParams) {
        this.boot();
        return this.client.associateClientVpnTargetNetwork(this.ops["AssociateClientVpnTargetNetwork"].apply(partialParams));
    }
    invokeAssociateEnclaveCertificateIamRole(partialParams) {
        this.boot();
        return this.client.associateEnclaveCertificateIamRole(this.ops["AssociateEnclaveCertificateIamRole"].apply(partialParams));
    }
    invokeAssociateIamInstanceProfile(partialParams) {
        this.boot();
        return this.client.associateIamInstanceProfile(this.ops["AssociateIamInstanceProfile"].apply(partialParams));
    }
    invokeAssociateInstanceEventWindow(partialParams) {
        this.boot();
        return this.client.associateInstanceEventWindow(this.ops["AssociateInstanceEventWindow"].apply(partialParams));
    }
    invokeAssociateRouteTable(partialParams) {
        this.boot();
        return this.client.associateRouteTable(this.ops["AssociateRouteTable"].apply(partialParams));
    }
    invokeAssociateSubnetCidrBlock(partialParams) {
        this.boot();
        return this.client.associateSubnetCidrBlock(this.ops["AssociateSubnetCidrBlock"].apply(partialParams));
    }
    invokeAssociateTransitGatewayMulticastDomain(partialParams) {
        this.boot();
        return this.client.associateTransitGatewayMulticastDomain(this.ops["AssociateTransitGatewayMulticastDomain"].apply(partialParams));
    }
    invokeAssociateTransitGatewayRouteTable(partialParams) {
        this.boot();
        return this.client.associateTransitGatewayRouteTable(this.ops["AssociateTransitGatewayRouteTable"].apply(partialParams));
    }
    invokeAssociateTrunkInterface(partialParams) {
        this.boot();
        return this.client.associateTrunkInterface(this.ops["AssociateTrunkInterface"].apply(partialParams));
    }
    invokeAssociateVpcCidrBlock(partialParams) {
        this.boot();
        return this.client.associateVpcCidrBlock(this.ops["AssociateVpcCidrBlock"].apply(partialParams));
    }
    invokeAttachClassicLinkVpc(partialParams) {
        this.boot();
        return this.client.attachClassicLinkVpc(this.ops["AttachClassicLinkVpc"].apply(partialParams));
    }
    invokeAttachNetworkInterface(partialParams) {
        this.boot();
        return this.client.attachNetworkInterface(this.ops["AttachNetworkInterface"].apply(partialParams));
    }
    invokeAttachVolume(partialParams) {
        this.boot();
        return this.client.attachVolume(this.ops["AttachVolume"].apply(partialParams));
    }
    invokeAttachVpnGateway(partialParams) {
        this.boot();
        return this.client.attachVpnGateway(this.ops["AttachVpnGateway"].apply(partialParams));
    }
    invokeAuthorizeClientVpnIngress(partialParams) {
        this.boot();
        return this.client.authorizeClientVpnIngress(this.ops["AuthorizeClientVpnIngress"].apply(partialParams));
    }
    invokeAuthorizeSecurityGroupEgress(partialParams) {
        this.boot();
        return this.client.authorizeSecurityGroupEgress(this.ops["AuthorizeSecurityGroupEgress"].apply(partialParams));
    }
    invokeAuthorizeSecurityGroupIngress(partialParams) {
        this.boot();
        return this.client.authorizeSecurityGroupIngress(this.ops["AuthorizeSecurityGroupIngress"].apply(partialParams));
    }
    invokeBundleInstance(partialParams) {
        this.boot();
        return this.client.bundleInstance(this.ops["BundleInstance"].apply(partialParams));
    }
    invokeCancelBundleTask(partialParams) {
        this.boot();
        return this.client.cancelBundleTask(this.ops["CancelBundleTask"].apply(partialParams));
    }
    invokeCancelCapacityReservation(partialParams) {
        this.boot();
        return this.client.cancelCapacityReservation(this.ops["CancelCapacityReservation"].apply(partialParams));
    }
    invokeCancelCapacityReservationFleets(partialParams) {
        this.boot();
        return this.client.cancelCapacityReservationFleets(this.ops["CancelCapacityReservationFleets"].apply(partialParams));
    }
    invokeCancelImportTask(partialParams) {
        this.boot();
        return this.client.cancelImportTask(this.ops["CancelImportTask"].apply(partialParams));
    }
    invokeCancelReservedInstancesListing(partialParams) {
        this.boot();
        return this.client.cancelReservedInstancesListing(this.ops["CancelReservedInstancesListing"].apply(partialParams));
    }
    invokeCancelSpotFleetRequests(partialParams) {
        this.boot();
        return this.client.cancelSpotFleetRequests(this.ops["CancelSpotFleetRequests"].apply(partialParams));
    }
    invokeCancelSpotInstanceRequests(partialParams) {
        this.boot();
        return this.client.cancelSpotInstanceRequests(this.ops["CancelSpotInstanceRequests"].apply(partialParams));
    }
    invokeConfirmProductInstance(partialParams) {
        this.boot();
        return this.client.confirmProductInstance(this.ops["ConfirmProductInstance"].apply(partialParams));
    }
    invokeCopyFpgaImage(partialParams) {
        this.boot();
        return this.client.copyFpgaImage(this.ops["CopyFpgaImage"].apply(partialParams));
    }
    invokeCopyImage(partialParams) {
        this.boot();
        return this.client.copyImage(this.ops["CopyImage"].apply(partialParams));
    }
    invokeCopySnapshot(partialParams) {
        this.boot();
        return this.client.copySnapshot(this.ops["CopySnapshot"].apply(partialParams));
    }
    invokeCreateCapacityReservation(partialParams) {
        this.boot();
        return this.client.createCapacityReservation(this.ops["CreateCapacityReservation"].apply(partialParams));
    }
    invokeCreateCapacityReservationFleet(partialParams) {
        this.boot();
        return this.client.createCapacityReservationFleet(this.ops["CreateCapacityReservationFleet"].apply(partialParams));
    }
    invokeCreateCarrierGateway(partialParams) {
        this.boot();
        return this.client.createCarrierGateway(this.ops["CreateCarrierGateway"].apply(partialParams));
    }
    invokeCreateClientVpnEndpoint(partialParams) {
        this.boot();
        return this.client.createClientVpnEndpoint(this.ops["CreateClientVpnEndpoint"].apply(partialParams));
    }
    invokeCreateClientVpnRoute(partialParams) {
        this.boot();
        return this.client.createClientVpnRoute(this.ops["CreateClientVpnRoute"].apply(partialParams));
    }
    invokeCreateCustomerGateway(partialParams) {
        this.boot();
        return this.client.createCustomerGateway(this.ops["CreateCustomerGateway"].apply(partialParams));
    }
    invokeCreateDefaultSubnet(partialParams) {
        this.boot();
        return this.client.createDefaultSubnet(this.ops["CreateDefaultSubnet"].apply(partialParams));
    }
    invokeCreateDefaultVpc(partialParams) {
        this.boot();
        return this.client.createDefaultVpc(this.ops["CreateDefaultVpc"].apply(partialParams));
    }
    invokeCreateDhcpOptions(partialParams) {
        this.boot();
        return this.client.createDhcpOptions(this.ops["CreateDhcpOptions"].apply(partialParams));
    }
    invokeCreateEgressOnlyInternetGateway(partialParams) {
        this.boot();
        return this.client.createEgressOnlyInternetGateway(this.ops["CreateEgressOnlyInternetGateway"].apply(partialParams));
    }
    invokeCreateFleet(partialParams) {
        this.boot();
        return this.client.createFleet(this.ops["CreateFleet"].apply(partialParams));
    }
    invokeCreateFlowLogs(partialParams) {
        this.boot();
        return this.client.createFlowLogs(this.ops["CreateFlowLogs"].apply(partialParams));
    }
    invokeCreateFpgaImage(partialParams) {
        this.boot();
        return this.client.createFpgaImage(this.ops["CreateFpgaImage"].apply(partialParams));
    }
    invokeCreateImage(partialParams) {
        this.boot();
        return this.client.createImage(this.ops["CreateImage"].apply(partialParams));
    }
    invokeCreateInstanceEventWindow(partialParams) {
        this.boot();
        return this.client.createInstanceEventWindow(this.ops["CreateInstanceEventWindow"].apply(partialParams));
    }
    invokeCreateInstanceExportTask(partialParams) {
        this.boot();
        return this.client.createInstanceExportTask(this.ops["CreateInstanceExportTask"].apply(partialParams));
    }
    invokeCreateInternetGateway(partialParams) {
        this.boot();
        return this.client.createInternetGateway(this.ops["CreateInternetGateway"].apply(partialParams));
    }
    invokeCreateIpam(partialParams) {
        this.boot();
        return this.client.createIpam(this.ops["CreateIpam"].apply(partialParams));
    }
    invokeCreateIpamPool(partialParams) {
        this.boot();
        return this.client.createIpamPool(this.ops["CreateIpamPool"].apply(partialParams));
    }
    invokeCreateIpamScope(partialParams) {
        this.boot();
        return this.client.createIpamScope(this.ops["CreateIpamScope"].apply(partialParams));
    }
    invokeCreateKeyPair(partialParams) {
        this.boot();
        return this.client.createKeyPair(this.ops["CreateKeyPair"].apply(partialParams));
    }
    invokeCreateLaunchTemplate(partialParams) {
        this.boot();
        return this.client.createLaunchTemplate(this.ops["CreateLaunchTemplate"].apply(partialParams));
    }
    invokeCreateLaunchTemplateVersion(partialParams) {
        this.boot();
        return this.client.createLaunchTemplateVersion(this.ops["CreateLaunchTemplateVersion"].apply(partialParams));
    }
    invokeCreateLocalGatewayRoute(partialParams) {
        this.boot();
        return this.client.createLocalGatewayRoute(this.ops["CreateLocalGatewayRoute"].apply(partialParams));
    }
    invokeCreateLocalGatewayRouteTableVpcAssociation(partialParams) {
        this.boot();
        return this.client.createLocalGatewayRouteTableVpcAssociation(this.ops["CreateLocalGatewayRouteTableVpcAssociation"].apply(partialParams));
    }
    invokeCreateManagedPrefixList(partialParams) {
        this.boot();
        return this.client.createManagedPrefixList(this.ops["CreateManagedPrefixList"].apply(partialParams));
    }
    invokeCreateNatGateway(partialParams) {
        this.boot();
        return this.client.createNatGateway(this.ops["CreateNatGateway"].apply(partialParams));
    }
    invokeCreateNetworkAcl(partialParams) {
        this.boot();
        return this.client.createNetworkAcl(this.ops["CreateNetworkAcl"].apply(partialParams));
    }
    invokeCreateNetworkInsightsAccessScope(partialParams) {
        this.boot();
        return this.client.createNetworkInsightsAccessScope(this.ops["CreateNetworkInsightsAccessScope"].apply(partialParams));
    }
    invokeCreateNetworkInsightsPath(partialParams) {
        this.boot();
        return this.client.createNetworkInsightsPath(this.ops["CreateNetworkInsightsPath"].apply(partialParams));
    }
    invokeCreateNetworkInterface(partialParams) {
        this.boot();
        return this.client.createNetworkInterface(this.ops["CreateNetworkInterface"].apply(partialParams));
    }
    invokeCreateNetworkInterfacePermission(partialParams) {
        this.boot();
        return this.client.createNetworkInterfacePermission(this.ops["CreateNetworkInterfacePermission"].apply(partialParams));
    }
    invokeCreatePlacementGroup(partialParams) {
        this.boot();
        return this.client.createPlacementGroup(this.ops["CreatePlacementGroup"].apply(partialParams));
    }
    invokeCreatePublicIpv4Pool(partialParams) {
        this.boot();
        return this.client.createPublicIpv4Pool(this.ops["CreatePublicIpv4Pool"].apply(partialParams));
    }
    invokeCreateReplaceRootVolumeTask(partialParams) {
        this.boot();
        return this.client.createReplaceRootVolumeTask(this.ops["CreateReplaceRootVolumeTask"].apply(partialParams));
    }
    invokeCreateReservedInstancesListing(partialParams) {
        this.boot();
        return this.client.createReservedInstancesListing(this.ops["CreateReservedInstancesListing"].apply(partialParams));
    }
    invokeCreateRestoreImageTask(partialParams) {
        this.boot();
        return this.client.createRestoreImageTask(this.ops["CreateRestoreImageTask"].apply(partialParams));
    }
    invokeCreateRoute(partialParams) {
        this.boot();
        return this.client.createRoute(this.ops["CreateRoute"].apply(partialParams));
    }
    invokeCreateRouteTable(partialParams) {
        this.boot();
        return this.client.createRouteTable(this.ops["CreateRouteTable"].apply(partialParams));
    }
    invokeCreateSecurityGroup(partialParams) {
        this.boot();
        return this.client.createSecurityGroup(this.ops["CreateSecurityGroup"].apply(partialParams));
    }
    invokeCreateSnapshot(partialParams) {
        this.boot();
        return this.client.createSnapshot(this.ops["CreateSnapshot"].apply(partialParams));
    }
    invokeCreateSnapshots(partialParams) {
        this.boot();
        return this.client.createSnapshots(this.ops["CreateSnapshots"].apply(partialParams));
    }
    invokeCreateSpotDatafeedSubscription(partialParams) {
        this.boot();
        return this.client.createSpotDatafeedSubscription(this.ops["CreateSpotDatafeedSubscription"].apply(partialParams));
    }
    invokeCreateStoreImageTask(partialParams) {
        this.boot();
        return this.client.createStoreImageTask(this.ops["CreateStoreImageTask"].apply(partialParams));
    }
    invokeCreateSubnet(partialParams) {
        this.boot();
        return this.client.createSubnet(this.ops["CreateSubnet"].apply(partialParams));
    }
    invokeCreateSubnetCidrReservation(partialParams) {
        this.boot();
        return this.client.createSubnetCidrReservation(this.ops["CreateSubnetCidrReservation"].apply(partialParams));
    }
    invokeCreateTrafficMirrorFilter(partialParams) {
        this.boot();
        return this.client.createTrafficMirrorFilter(this.ops["CreateTrafficMirrorFilter"].apply(partialParams));
    }
    invokeCreateTrafficMirrorFilterRule(partialParams) {
        this.boot();
        return this.client.createTrafficMirrorFilterRule(this.ops["CreateTrafficMirrorFilterRule"].apply(partialParams));
    }
    invokeCreateTrafficMirrorSession(partialParams) {
        this.boot();
        return this.client.createTrafficMirrorSession(this.ops["CreateTrafficMirrorSession"].apply(partialParams));
    }
    invokeCreateTrafficMirrorTarget(partialParams) {
        this.boot();
        return this.client.createTrafficMirrorTarget(this.ops["CreateTrafficMirrorTarget"].apply(partialParams));
    }
    invokeCreateTransitGateway(partialParams) {
        this.boot();
        return this.client.createTransitGateway(this.ops["CreateTransitGateway"].apply(partialParams));
    }
    invokeCreateTransitGatewayConnect(partialParams) {
        this.boot();
        return this.client.createTransitGatewayConnect(this.ops["CreateTransitGatewayConnect"].apply(partialParams));
    }
    invokeCreateTransitGatewayConnectPeer(partialParams) {
        this.boot();
        return this.client.createTransitGatewayConnectPeer(this.ops["CreateTransitGatewayConnectPeer"].apply(partialParams));
    }
    invokeCreateTransitGatewayMulticastDomain(partialParams) {
        this.boot();
        return this.client.createTransitGatewayMulticastDomain(this.ops["CreateTransitGatewayMulticastDomain"].apply(partialParams));
    }
    invokeCreateTransitGatewayPeeringAttachment(partialParams) {
        this.boot();
        return this.client.createTransitGatewayPeeringAttachment(this.ops["CreateTransitGatewayPeeringAttachment"].apply(partialParams));
    }
    invokeCreateTransitGatewayPrefixListReference(partialParams) {
        this.boot();
        return this.client.createTransitGatewayPrefixListReference(this.ops["CreateTransitGatewayPrefixListReference"].apply(partialParams));
    }
    invokeCreateTransitGatewayRoute(partialParams) {
        this.boot();
        return this.client.createTransitGatewayRoute(this.ops["CreateTransitGatewayRoute"].apply(partialParams));
    }
    invokeCreateTransitGatewayRouteTable(partialParams) {
        this.boot();
        return this.client.createTransitGatewayRouteTable(this.ops["CreateTransitGatewayRouteTable"].apply(partialParams));
    }
    invokeCreateTransitGatewayVpcAttachment(partialParams) {
        this.boot();
        return this.client.createTransitGatewayVpcAttachment(this.ops["CreateTransitGatewayVpcAttachment"].apply(partialParams));
    }
    invokeCreateVolume(partialParams) {
        this.boot();
        return this.client.createVolume(this.ops["CreateVolume"].apply(partialParams));
    }
    invokeCreateVpc(partialParams) {
        this.boot();
        return this.client.createVpc(this.ops["CreateVpc"].apply(partialParams));
    }
    invokeCreateVpcEndpoint(partialParams) {
        this.boot();
        return this.client.createVpcEndpoint(this.ops["CreateVpcEndpoint"].apply(partialParams));
    }
    invokeCreateVpcEndpointConnectionNotification(partialParams) {
        this.boot();
        return this.client.createVpcEndpointConnectionNotification(this.ops["CreateVpcEndpointConnectionNotification"].apply(partialParams));
    }
    invokeCreateVpcEndpointServiceConfiguration(partialParams) {
        this.boot();
        return this.client.createVpcEndpointServiceConfiguration(this.ops["CreateVpcEndpointServiceConfiguration"].apply(partialParams));
    }
    invokeCreateVpcPeeringConnection(partialParams) {
        this.boot();
        return this.client.createVpcPeeringConnection(this.ops["CreateVpcPeeringConnection"].apply(partialParams));
    }
    invokeCreateVpnConnection(partialParams) {
        this.boot();
        return this.client.createVpnConnection(this.ops["CreateVpnConnection"].apply(partialParams));
    }
    invokeCreateVpnGateway(partialParams) {
        this.boot();
        return this.client.createVpnGateway(this.ops["CreateVpnGateway"].apply(partialParams));
    }
    invokeDeleteCarrierGateway(partialParams) {
        this.boot();
        return this.client.deleteCarrierGateway(this.ops["DeleteCarrierGateway"].apply(partialParams));
    }
    invokeDeleteClientVpnEndpoint(partialParams) {
        this.boot();
        return this.client.deleteClientVpnEndpoint(this.ops["DeleteClientVpnEndpoint"].apply(partialParams));
    }
    invokeDeleteClientVpnRoute(partialParams) {
        this.boot();
        return this.client.deleteClientVpnRoute(this.ops["DeleteClientVpnRoute"].apply(partialParams));
    }
    invokeDeleteEgressOnlyInternetGateway(partialParams) {
        this.boot();
        return this.client.deleteEgressOnlyInternetGateway(this.ops["DeleteEgressOnlyInternetGateway"].apply(partialParams));
    }
    invokeDeleteFleets(partialParams) {
        this.boot();
        return this.client.deleteFleets(this.ops["DeleteFleets"].apply(partialParams));
    }
    invokeDeleteFlowLogs(partialParams) {
        this.boot();
        return this.client.deleteFlowLogs(this.ops["DeleteFlowLogs"].apply(partialParams));
    }
    invokeDeleteFpgaImage(partialParams) {
        this.boot();
        return this.client.deleteFpgaImage(this.ops["DeleteFpgaImage"].apply(partialParams));
    }
    invokeDeleteInstanceEventWindow(partialParams) {
        this.boot();
        return this.client.deleteInstanceEventWindow(this.ops["DeleteInstanceEventWindow"].apply(partialParams));
    }
    invokeDeleteIpam(partialParams) {
        this.boot();
        return this.client.deleteIpam(this.ops["DeleteIpam"].apply(partialParams));
    }
    invokeDeleteIpamPool(partialParams) {
        this.boot();
        return this.client.deleteIpamPool(this.ops["DeleteIpamPool"].apply(partialParams));
    }
    invokeDeleteIpamScope(partialParams) {
        this.boot();
        return this.client.deleteIpamScope(this.ops["DeleteIpamScope"].apply(partialParams));
    }
    invokeDeleteLaunchTemplate(partialParams) {
        this.boot();
        return this.client.deleteLaunchTemplate(this.ops["DeleteLaunchTemplate"].apply(partialParams));
    }
    invokeDeleteLaunchTemplateVersions(partialParams) {
        this.boot();
        return this.client.deleteLaunchTemplateVersions(this.ops["DeleteLaunchTemplateVersions"].apply(partialParams));
    }
    invokeDeleteLocalGatewayRoute(partialParams) {
        this.boot();
        return this.client.deleteLocalGatewayRoute(this.ops["DeleteLocalGatewayRoute"].apply(partialParams));
    }
    invokeDeleteLocalGatewayRouteTableVpcAssociation(partialParams) {
        this.boot();
        return this.client.deleteLocalGatewayRouteTableVpcAssociation(this.ops["DeleteLocalGatewayRouteTableVpcAssociation"].apply(partialParams));
    }
    invokeDeleteManagedPrefixList(partialParams) {
        this.boot();
        return this.client.deleteManagedPrefixList(this.ops["DeleteManagedPrefixList"].apply(partialParams));
    }
    invokeDeleteNatGateway(partialParams) {
        this.boot();
        return this.client.deleteNatGateway(this.ops["DeleteNatGateway"].apply(partialParams));
    }
    invokeDeleteNetworkInsightsAccessScope(partialParams) {
        this.boot();
        return this.client.deleteNetworkInsightsAccessScope(this.ops["DeleteNetworkInsightsAccessScope"].apply(partialParams));
    }
    invokeDeleteNetworkInsightsAccessScopeAnalysis(partialParams) {
        this.boot();
        return this.client.deleteNetworkInsightsAccessScopeAnalysis(this.ops["DeleteNetworkInsightsAccessScopeAnalysis"].apply(partialParams));
    }
    invokeDeleteNetworkInsightsAnalysis(partialParams) {
        this.boot();
        return this.client.deleteNetworkInsightsAnalysis(this.ops["DeleteNetworkInsightsAnalysis"].apply(partialParams));
    }
    invokeDeleteNetworkInsightsPath(partialParams) {
        this.boot();
        return this.client.deleteNetworkInsightsPath(this.ops["DeleteNetworkInsightsPath"].apply(partialParams));
    }
    invokeDeleteNetworkInterfacePermission(partialParams) {
        this.boot();
        return this.client.deleteNetworkInterfacePermission(this.ops["DeleteNetworkInterfacePermission"].apply(partialParams));
    }
    invokeDeletePublicIpv4Pool(partialParams) {
        this.boot();
        return this.client.deletePublicIpv4Pool(this.ops["DeletePublicIpv4Pool"].apply(partialParams));
    }
    invokeDeleteQueuedReservedInstances(partialParams) {
        this.boot();
        return this.client.deleteQueuedReservedInstances(this.ops["DeleteQueuedReservedInstances"].apply(partialParams));
    }
    invokeDeleteSubnetCidrReservation(partialParams) {
        this.boot();
        return this.client.deleteSubnetCidrReservation(this.ops["DeleteSubnetCidrReservation"].apply(partialParams));
    }
    invokeDeleteTrafficMirrorFilter(partialParams) {
        this.boot();
        return this.client.deleteTrafficMirrorFilter(this.ops["DeleteTrafficMirrorFilter"].apply(partialParams));
    }
    invokeDeleteTrafficMirrorFilterRule(partialParams) {
        this.boot();
        return this.client.deleteTrafficMirrorFilterRule(this.ops["DeleteTrafficMirrorFilterRule"].apply(partialParams));
    }
    invokeDeleteTrafficMirrorSession(partialParams) {
        this.boot();
        return this.client.deleteTrafficMirrorSession(this.ops["DeleteTrafficMirrorSession"].apply(partialParams));
    }
    invokeDeleteTrafficMirrorTarget(partialParams) {
        this.boot();
        return this.client.deleteTrafficMirrorTarget(this.ops["DeleteTrafficMirrorTarget"].apply(partialParams));
    }
    invokeDeleteTransitGateway(partialParams) {
        this.boot();
        return this.client.deleteTransitGateway(this.ops["DeleteTransitGateway"].apply(partialParams));
    }
    invokeDeleteTransitGatewayConnect(partialParams) {
        this.boot();
        return this.client.deleteTransitGatewayConnect(this.ops["DeleteTransitGatewayConnect"].apply(partialParams));
    }
    invokeDeleteTransitGatewayConnectPeer(partialParams) {
        this.boot();
        return this.client.deleteTransitGatewayConnectPeer(this.ops["DeleteTransitGatewayConnectPeer"].apply(partialParams));
    }
    invokeDeleteTransitGatewayMulticastDomain(partialParams) {
        this.boot();
        return this.client.deleteTransitGatewayMulticastDomain(this.ops["DeleteTransitGatewayMulticastDomain"].apply(partialParams));
    }
    invokeDeleteTransitGatewayPeeringAttachment(partialParams) {
        this.boot();
        return this.client.deleteTransitGatewayPeeringAttachment(this.ops["DeleteTransitGatewayPeeringAttachment"].apply(partialParams));
    }
    invokeDeleteTransitGatewayPrefixListReference(partialParams) {
        this.boot();
        return this.client.deleteTransitGatewayPrefixListReference(this.ops["DeleteTransitGatewayPrefixListReference"].apply(partialParams));
    }
    invokeDeleteTransitGatewayRoute(partialParams) {
        this.boot();
        return this.client.deleteTransitGatewayRoute(this.ops["DeleteTransitGatewayRoute"].apply(partialParams));
    }
    invokeDeleteTransitGatewayRouteTable(partialParams) {
        this.boot();
        return this.client.deleteTransitGatewayRouteTable(this.ops["DeleteTransitGatewayRouteTable"].apply(partialParams));
    }
    invokeDeleteTransitGatewayVpcAttachment(partialParams) {
        this.boot();
        return this.client.deleteTransitGatewayVpcAttachment(this.ops["DeleteTransitGatewayVpcAttachment"].apply(partialParams));
    }
    invokeDeleteVpcEndpointConnectionNotifications(partialParams) {
        this.boot();
        return this.client.deleteVpcEndpointConnectionNotifications(this.ops["DeleteVpcEndpointConnectionNotifications"].apply(partialParams));
    }
    invokeDeleteVpcEndpointServiceConfigurations(partialParams) {
        this.boot();
        return this.client.deleteVpcEndpointServiceConfigurations(this.ops["DeleteVpcEndpointServiceConfigurations"].apply(partialParams));
    }
    invokeDeleteVpcEndpoints(partialParams) {
        this.boot();
        return this.client.deleteVpcEndpoints(this.ops["DeleteVpcEndpoints"].apply(partialParams));
    }
    invokeDeleteVpcPeeringConnection(partialParams) {
        this.boot();
        return this.client.deleteVpcPeeringConnection(this.ops["DeleteVpcPeeringConnection"].apply(partialParams));
    }
    invokeDeprovisionByoipCidr(partialParams) {
        this.boot();
        return this.client.deprovisionByoipCidr(this.ops["DeprovisionByoipCidr"].apply(partialParams));
    }
    invokeDeprovisionIpamPoolCidr(partialParams) {
        this.boot();
        return this.client.deprovisionIpamPoolCidr(this.ops["DeprovisionIpamPoolCidr"].apply(partialParams));
    }
    invokeDeprovisionPublicIpv4PoolCidr(partialParams) {
        this.boot();
        return this.client.deprovisionPublicIpv4PoolCidr(this.ops["DeprovisionPublicIpv4PoolCidr"].apply(partialParams));
    }
    invokeDeregisterInstanceEventNotificationAttributes(partialParams) {
        this.boot();
        return this.client.deregisterInstanceEventNotificationAttributes(this.ops["DeregisterInstanceEventNotificationAttributes"].apply(partialParams));
    }
    invokeDeregisterTransitGatewayMulticastGroupMembers(partialParams) {
        this.boot();
        return this.client.deregisterTransitGatewayMulticastGroupMembers(this.ops["DeregisterTransitGatewayMulticastGroupMembers"].apply(partialParams));
    }
    invokeDeregisterTransitGatewayMulticastGroupSources(partialParams) {
        this.boot();
        return this.client.deregisterTransitGatewayMulticastGroupSources(this.ops["DeregisterTransitGatewayMulticastGroupSources"].apply(partialParams));
    }
    invokeDescribeAccountAttributes(partialParams) {
        this.boot();
        return this.client.describeAccountAttributes(this.ops["DescribeAccountAttributes"].apply(partialParams));
    }
    invokeDescribeAddresses(partialParams) {
        this.boot();
        return this.client.describeAddresses(this.ops["DescribeAddresses"].apply(partialParams));
    }
    invokeDescribeAddressesAttribute(partialParams) {
        this.boot();
        return this.client.describeAddressesAttribute(this.ops["DescribeAddressesAttribute"].apply(partialParams));
    }
    invokeDescribeAggregateIdFormat(partialParams) {
        this.boot();
        return this.client.describeAggregateIdFormat(this.ops["DescribeAggregateIdFormat"].apply(partialParams));
    }
    invokeDescribeAvailabilityZones(partialParams) {
        this.boot();
        return this.client.describeAvailabilityZones(this.ops["DescribeAvailabilityZones"].apply(partialParams));
    }
    invokeDescribeBundleTasks(partialParams) {
        this.boot();
        return this.client.describeBundleTasks(this.ops["DescribeBundleTasks"].apply(partialParams));
    }
    invokeDescribeByoipCidrs(partialParams) {
        this.boot();
        return this.client.describeByoipCidrs(this.ops["DescribeByoipCidrs"].apply(partialParams));
    }
    invokeDescribeCapacityReservationFleets(partialParams) {
        this.boot();
        return this.client.describeCapacityReservationFleets(this.ops["DescribeCapacityReservationFleets"].apply(partialParams));
    }
    invokeDescribeCapacityReservations(partialParams) {
        this.boot();
        return this.client.describeCapacityReservations(this.ops["DescribeCapacityReservations"].apply(partialParams));
    }
    invokeDescribeCarrierGateways(partialParams) {
        this.boot();
        return this.client.describeCarrierGateways(this.ops["DescribeCarrierGateways"].apply(partialParams));
    }
    invokeDescribeClassicLinkInstances(partialParams) {
        this.boot();
        return this.client.describeClassicLinkInstances(this.ops["DescribeClassicLinkInstances"].apply(partialParams));
    }
    invokeDescribeClientVpnAuthorizationRules(partialParams) {
        this.boot();
        return this.client.describeClientVpnAuthorizationRules(this.ops["DescribeClientVpnAuthorizationRules"].apply(partialParams));
    }
    invokeDescribeClientVpnConnections(partialParams) {
        this.boot();
        return this.client.describeClientVpnConnections(this.ops["DescribeClientVpnConnections"].apply(partialParams));
    }
    invokeDescribeClientVpnEndpoints(partialParams) {
        this.boot();
        return this.client.describeClientVpnEndpoints(this.ops["DescribeClientVpnEndpoints"].apply(partialParams));
    }
    invokeDescribeClientVpnRoutes(partialParams) {
        this.boot();
        return this.client.describeClientVpnRoutes(this.ops["DescribeClientVpnRoutes"].apply(partialParams));
    }
    invokeDescribeClientVpnTargetNetworks(partialParams) {
        this.boot();
        return this.client.describeClientVpnTargetNetworks(this.ops["DescribeClientVpnTargetNetworks"].apply(partialParams));
    }
    invokeDescribeCoipPools(partialParams) {
        this.boot();
        return this.client.describeCoipPools(this.ops["DescribeCoipPools"].apply(partialParams));
    }
    invokeDescribeConversionTasks(partialParams) {
        this.boot();
        return this.client.describeConversionTasks(this.ops["DescribeConversionTasks"].apply(partialParams));
    }
    invokeDescribeCustomerGateways(partialParams) {
        this.boot();
        return this.client.describeCustomerGateways(this.ops["DescribeCustomerGateways"].apply(partialParams));
    }
    invokeDescribeDhcpOptions(partialParams) {
        this.boot();
        return this.client.describeDhcpOptions(this.ops["DescribeDhcpOptions"].apply(partialParams));
    }
    invokeDescribeEgressOnlyInternetGateways(partialParams) {
        this.boot();
        return this.client.describeEgressOnlyInternetGateways(this.ops["DescribeEgressOnlyInternetGateways"].apply(partialParams));
    }
    invokeDescribeElasticGpus(partialParams) {
        this.boot();
        return this.client.describeElasticGpus(this.ops["DescribeElasticGpus"].apply(partialParams));
    }
    invokeDescribeExportImageTasks(partialParams) {
        this.boot();
        return this.client.describeExportImageTasks(this.ops["DescribeExportImageTasks"].apply(partialParams));
    }
    invokeDescribeExportTasks(partialParams) {
        this.boot();
        return this.client.describeExportTasks(this.ops["DescribeExportTasks"].apply(partialParams));
    }
    invokeDescribeFastLaunchImages(partialParams) {
        this.boot();
        return this.client.describeFastLaunchImages(this.ops["DescribeFastLaunchImages"].apply(partialParams));
    }
    invokeDescribeFastSnapshotRestores(partialParams) {
        this.boot();
        return this.client.describeFastSnapshotRestores(this.ops["DescribeFastSnapshotRestores"].apply(partialParams));
    }
    invokeDescribeFleetHistory(partialParams) {
        this.boot();
        return this.client.describeFleetHistory(this.ops["DescribeFleetHistory"].apply(partialParams));
    }
    invokeDescribeFleetInstances(partialParams) {
        this.boot();
        return this.client.describeFleetInstances(this.ops["DescribeFleetInstances"].apply(partialParams));
    }
    invokeDescribeFleets(partialParams) {
        this.boot();
        return this.client.describeFleets(this.ops["DescribeFleets"].apply(partialParams));
    }
    invokeDescribeFlowLogs(partialParams) {
        this.boot();
        return this.client.describeFlowLogs(this.ops["DescribeFlowLogs"].apply(partialParams));
    }
    invokeDescribeFpgaImageAttribute(partialParams) {
        this.boot();
        return this.client.describeFpgaImageAttribute(this.ops["DescribeFpgaImageAttribute"].apply(partialParams));
    }
    invokeDescribeFpgaImages(partialParams) {
        this.boot();
        return this.client.describeFpgaImages(this.ops["DescribeFpgaImages"].apply(partialParams));
    }
    invokeDescribeHostReservationOfferings(partialParams) {
        this.boot();
        return this.client.describeHostReservationOfferings(this.ops["DescribeHostReservationOfferings"].apply(partialParams));
    }
    invokeDescribeHostReservations(partialParams) {
        this.boot();
        return this.client.describeHostReservations(this.ops["DescribeHostReservations"].apply(partialParams));
    }
    invokeDescribeHosts(partialParams) {
        this.boot();
        return this.client.describeHosts(this.ops["DescribeHosts"].apply(partialParams));
    }
    invokeDescribeIamInstanceProfileAssociations(partialParams) {
        this.boot();
        return this.client.describeIamInstanceProfileAssociations(this.ops["DescribeIamInstanceProfileAssociations"].apply(partialParams));
    }
    invokeDescribeIdFormat(partialParams) {
        this.boot();
        return this.client.describeIdFormat(this.ops["DescribeIdFormat"].apply(partialParams));
    }
    invokeDescribeIdentityIdFormat(partialParams) {
        this.boot();
        return this.client.describeIdentityIdFormat(this.ops["DescribeIdentityIdFormat"].apply(partialParams));
    }
    invokeDescribeImageAttribute(partialParams) {
        this.boot();
        return this.client.describeImageAttribute(this.ops["DescribeImageAttribute"].apply(partialParams));
    }
    invokeDescribeImages(partialParams) {
        this.boot();
        return this.client.describeImages(this.ops["DescribeImages"].apply(partialParams));
    }
    invokeDescribeImportImageTasks(partialParams) {
        this.boot();
        return this.client.describeImportImageTasks(this.ops["DescribeImportImageTasks"].apply(partialParams));
    }
    invokeDescribeImportSnapshotTasks(partialParams) {
        this.boot();
        return this.client.describeImportSnapshotTasks(this.ops["DescribeImportSnapshotTasks"].apply(partialParams));
    }
    invokeDescribeInstanceAttribute(partialParams) {
        this.boot();
        return this.client.describeInstanceAttribute(this.ops["DescribeInstanceAttribute"].apply(partialParams));
    }
    invokeDescribeInstanceCreditSpecifications(partialParams) {
        this.boot();
        return this.client.describeInstanceCreditSpecifications(this.ops["DescribeInstanceCreditSpecifications"].apply(partialParams));
    }
    invokeDescribeInstanceEventNotificationAttributes(partialParams) {
        this.boot();
        return this.client.describeInstanceEventNotificationAttributes(this.ops["DescribeInstanceEventNotificationAttributes"].apply(partialParams));
    }
    invokeDescribeInstanceEventWindows(partialParams) {
        this.boot();
        return this.client.describeInstanceEventWindows(this.ops["DescribeInstanceEventWindows"].apply(partialParams));
    }
    invokeDescribeInstanceStatus(partialParams) {
        this.boot();
        return this.client.describeInstanceStatus(this.ops["DescribeInstanceStatus"].apply(partialParams));
    }
    invokeDescribeInstanceTypeOfferings(partialParams) {
        this.boot();
        return this.client.describeInstanceTypeOfferings(this.ops["DescribeInstanceTypeOfferings"].apply(partialParams));
    }
    invokeDescribeInstanceTypes(partialParams) {
        this.boot();
        return this.client.describeInstanceTypes(this.ops["DescribeInstanceTypes"].apply(partialParams));
    }
    invokeDescribeInstances(partialParams) {
        this.boot();
        return this.client.describeInstances(this.ops["DescribeInstances"].apply(partialParams));
    }
    invokeDescribeInternetGateways(partialParams) {
        this.boot();
        return this.client.describeInternetGateways(this.ops["DescribeInternetGateways"].apply(partialParams));
    }
    invokeDescribeIpamPools(partialParams) {
        this.boot();
        return this.client.describeIpamPools(this.ops["DescribeIpamPools"].apply(partialParams));
    }
    invokeDescribeIpamScopes(partialParams) {
        this.boot();
        return this.client.describeIpamScopes(this.ops["DescribeIpamScopes"].apply(partialParams));
    }
    invokeDescribeIpams(partialParams) {
        this.boot();
        return this.client.describeIpams(this.ops["DescribeIpams"].apply(partialParams));
    }
    invokeDescribeIpv6Pools(partialParams) {
        this.boot();
        return this.client.describeIpv6Pools(this.ops["DescribeIpv6Pools"].apply(partialParams));
    }
    invokeDescribeKeyPairs(partialParams) {
        this.boot();
        return this.client.describeKeyPairs(this.ops["DescribeKeyPairs"].apply(partialParams));
    }
    invokeDescribeLaunchTemplateVersions(partialParams) {
        this.boot();
        return this.client.describeLaunchTemplateVersions(this.ops["DescribeLaunchTemplateVersions"].apply(partialParams));
    }
    invokeDescribeLaunchTemplates(partialParams) {
        this.boot();
        return this.client.describeLaunchTemplates(this.ops["DescribeLaunchTemplates"].apply(partialParams));
    }
    invokeDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations(partialParams) {
        this.boot();
        return this.client.describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations(this.ops["DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations"].apply(partialParams));
    }
    invokeDescribeLocalGatewayRouteTableVpcAssociations(partialParams) {
        this.boot();
        return this.client.describeLocalGatewayRouteTableVpcAssociations(this.ops["DescribeLocalGatewayRouteTableVpcAssociations"].apply(partialParams));
    }
    invokeDescribeLocalGatewayRouteTables(partialParams) {
        this.boot();
        return this.client.describeLocalGatewayRouteTables(this.ops["DescribeLocalGatewayRouteTables"].apply(partialParams));
    }
    invokeDescribeLocalGatewayVirtualInterfaceGroups(partialParams) {
        this.boot();
        return this.client.describeLocalGatewayVirtualInterfaceGroups(this.ops["DescribeLocalGatewayVirtualInterfaceGroups"].apply(partialParams));
    }
    invokeDescribeLocalGatewayVirtualInterfaces(partialParams) {
        this.boot();
        return this.client.describeLocalGatewayVirtualInterfaces(this.ops["DescribeLocalGatewayVirtualInterfaces"].apply(partialParams));
    }
    invokeDescribeLocalGateways(partialParams) {
        this.boot();
        return this.client.describeLocalGateways(this.ops["DescribeLocalGateways"].apply(partialParams));
    }
    invokeDescribeManagedPrefixLists(partialParams) {
        this.boot();
        return this.client.describeManagedPrefixLists(this.ops["DescribeManagedPrefixLists"].apply(partialParams));
    }
    invokeDescribeMovingAddresses(partialParams) {
        this.boot();
        return this.client.describeMovingAddresses(this.ops["DescribeMovingAddresses"].apply(partialParams));
    }
    invokeDescribeNatGateways(partialParams) {
        this.boot();
        return this.client.describeNatGateways(this.ops["DescribeNatGateways"].apply(partialParams));
    }
    invokeDescribeNetworkAcls(partialParams) {
        this.boot();
        return this.client.describeNetworkAcls(this.ops["DescribeNetworkAcls"].apply(partialParams));
    }
    invokeDescribeNetworkInsightsAccessScopeAnalyses(partialParams) {
        this.boot();
        return this.client.describeNetworkInsightsAccessScopeAnalyses(this.ops["DescribeNetworkInsightsAccessScopeAnalyses"].apply(partialParams));
    }
    invokeDescribeNetworkInsightsAccessScopes(partialParams) {
        this.boot();
        return this.client.describeNetworkInsightsAccessScopes(this.ops["DescribeNetworkInsightsAccessScopes"].apply(partialParams));
    }
    invokeDescribeNetworkInsightsAnalyses(partialParams) {
        this.boot();
        return this.client.describeNetworkInsightsAnalyses(this.ops["DescribeNetworkInsightsAnalyses"].apply(partialParams));
    }
    invokeDescribeNetworkInsightsPaths(partialParams) {
        this.boot();
        return this.client.describeNetworkInsightsPaths(this.ops["DescribeNetworkInsightsPaths"].apply(partialParams));
    }
    invokeDescribeNetworkInterfaceAttribute(partialParams) {
        this.boot();
        return this.client.describeNetworkInterfaceAttribute(this.ops["DescribeNetworkInterfaceAttribute"].apply(partialParams));
    }
    invokeDescribeNetworkInterfacePermissions(partialParams) {
        this.boot();
        return this.client.describeNetworkInterfacePermissions(this.ops["DescribeNetworkInterfacePermissions"].apply(partialParams));
    }
    invokeDescribeNetworkInterfaces(partialParams) {
        this.boot();
        return this.client.describeNetworkInterfaces(this.ops["DescribeNetworkInterfaces"].apply(partialParams));
    }
    invokeDescribePlacementGroups(partialParams) {
        this.boot();
        return this.client.describePlacementGroups(this.ops["DescribePlacementGroups"].apply(partialParams));
    }
    invokeDescribePrefixLists(partialParams) {
        this.boot();
        return this.client.describePrefixLists(this.ops["DescribePrefixLists"].apply(partialParams));
    }
    invokeDescribePrincipalIdFormat(partialParams) {
        this.boot();
        return this.client.describePrincipalIdFormat(this.ops["DescribePrincipalIdFormat"].apply(partialParams));
    }
    invokeDescribePublicIpv4Pools(partialParams) {
        this.boot();
        return this.client.describePublicIpv4Pools(this.ops["DescribePublicIpv4Pools"].apply(partialParams));
    }
    invokeDescribeRegions(partialParams) {
        this.boot();
        return this.client.describeRegions(this.ops["DescribeRegions"].apply(partialParams));
    }
    invokeDescribeReplaceRootVolumeTasks(partialParams) {
        this.boot();
        return this.client.describeReplaceRootVolumeTasks(this.ops["DescribeReplaceRootVolumeTasks"].apply(partialParams));
    }
    invokeDescribeReservedInstances(partialParams) {
        this.boot();
        return this.client.describeReservedInstances(this.ops["DescribeReservedInstances"].apply(partialParams));
    }
    invokeDescribeReservedInstancesListings(partialParams) {
        this.boot();
        return this.client.describeReservedInstancesListings(this.ops["DescribeReservedInstancesListings"].apply(partialParams));
    }
    invokeDescribeReservedInstancesModifications(partialParams) {
        this.boot();
        return this.client.describeReservedInstancesModifications(this.ops["DescribeReservedInstancesModifications"].apply(partialParams));
    }
    invokeDescribeReservedInstancesOfferings(partialParams) {
        this.boot();
        return this.client.describeReservedInstancesOfferings(this.ops["DescribeReservedInstancesOfferings"].apply(partialParams));
    }
    invokeDescribeRouteTables(partialParams) {
        this.boot();
        return this.client.describeRouteTables(this.ops["DescribeRouteTables"].apply(partialParams));
    }
    invokeDescribeScheduledInstanceAvailability(partialParams) {
        this.boot();
        return this.client.describeScheduledInstanceAvailability(this.ops["DescribeScheduledInstanceAvailability"].apply(partialParams));
    }
    invokeDescribeScheduledInstances(partialParams) {
        this.boot();
        return this.client.describeScheduledInstances(this.ops["DescribeScheduledInstances"].apply(partialParams));
    }
    invokeDescribeSecurityGroupReferences(partialParams) {
        this.boot();
        return this.client.describeSecurityGroupReferences(this.ops["DescribeSecurityGroupReferences"].apply(partialParams));
    }
    invokeDescribeSecurityGroupRules(partialParams) {
        this.boot();
        return this.client.describeSecurityGroupRules(this.ops["DescribeSecurityGroupRules"].apply(partialParams));
    }
    invokeDescribeSecurityGroups(partialParams) {
        this.boot();
        return this.client.describeSecurityGroups(this.ops["DescribeSecurityGroups"].apply(partialParams));
    }
    invokeDescribeSnapshotAttribute(partialParams) {
        this.boot();
        return this.client.describeSnapshotAttribute(this.ops["DescribeSnapshotAttribute"].apply(partialParams));
    }
    invokeDescribeSnapshotTierStatus(partialParams) {
        this.boot();
        return this.client.describeSnapshotTierStatus(this.ops["DescribeSnapshotTierStatus"].apply(partialParams));
    }
    invokeDescribeSnapshots(partialParams) {
        this.boot();
        return this.client.describeSnapshots(this.ops["DescribeSnapshots"].apply(partialParams));
    }
    invokeDescribeSpotDatafeedSubscription(partialParams) {
        this.boot();
        return this.client.describeSpotDatafeedSubscription(this.ops["DescribeSpotDatafeedSubscription"].apply(partialParams));
    }
    invokeDescribeSpotFleetInstances(partialParams) {
        this.boot();
        return this.client.describeSpotFleetInstances(this.ops["DescribeSpotFleetInstances"].apply(partialParams));
    }
    invokeDescribeSpotFleetRequestHistory(partialParams) {
        this.boot();
        return this.client.describeSpotFleetRequestHistory(this.ops["DescribeSpotFleetRequestHistory"].apply(partialParams));
    }
    invokeDescribeSpotFleetRequests(partialParams) {
        this.boot();
        return this.client.describeSpotFleetRequests(this.ops["DescribeSpotFleetRequests"].apply(partialParams));
    }
    invokeDescribeSpotInstanceRequests(partialParams) {
        this.boot();
        return this.client.describeSpotInstanceRequests(this.ops["DescribeSpotInstanceRequests"].apply(partialParams));
    }
    invokeDescribeSpotPriceHistory(partialParams) {
        this.boot();
        return this.client.describeSpotPriceHistory(this.ops["DescribeSpotPriceHistory"].apply(partialParams));
    }
    invokeDescribeStaleSecurityGroups(partialParams) {
        this.boot();
        return this.client.describeStaleSecurityGroups(this.ops["DescribeStaleSecurityGroups"].apply(partialParams));
    }
    invokeDescribeStoreImageTasks(partialParams) {
        this.boot();
        return this.client.describeStoreImageTasks(this.ops["DescribeStoreImageTasks"].apply(partialParams));
    }
    invokeDescribeSubnets(partialParams) {
        this.boot();
        return this.client.describeSubnets(this.ops["DescribeSubnets"].apply(partialParams));
    }
    invokeDescribeTags(partialParams) {
        this.boot();
        return this.client.describeTags(this.ops["DescribeTags"].apply(partialParams));
    }
    invokeDescribeTrafficMirrorFilters(partialParams) {
        this.boot();
        return this.client.describeTrafficMirrorFilters(this.ops["DescribeTrafficMirrorFilters"].apply(partialParams));
    }
    invokeDescribeTrafficMirrorSessions(partialParams) {
        this.boot();
        return this.client.describeTrafficMirrorSessions(this.ops["DescribeTrafficMirrorSessions"].apply(partialParams));
    }
    invokeDescribeTrafficMirrorTargets(partialParams) {
        this.boot();
        return this.client.describeTrafficMirrorTargets(this.ops["DescribeTrafficMirrorTargets"].apply(partialParams));
    }
    invokeDescribeTransitGatewayAttachments(partialParams) {
        this.boot();
        return this.client.describeTransitGatewayAttachments(this.ops["DescribeTransitGatewayAttachments"].apply(partialParams));
    }
    invokeDescribeTransitGatewayConnectPeers(partialParams) {
        this.boot();
        return this.client.describeTransitGatewayConnectPeers(this.ops["DescribeTransitGatewayConnectPeers"].apply(partialParams));
    }
    invokeDescribeTransitGatewayConnects(partialParams) {
        this.boot();
        return this.client.describeTransitGatewayConnects(this.ops["DescribeTransitGatewayConnects"].apply(partialParams));
    }
    invokeDescribeTransitGatewayMulticastDomains(partialParams) {
        this.boot();
        return this.client.describeTransitGatewayMulticastDomains(this.ops["DescribeTransitGatewayMulticastDomains"].apply(partialParams));
    }
    invokeDescribeTransitGatewayPeeringAttachments(partialParams) {
        this.boot();
        return this.client.describeTransitGatewayPeeringAttachments(this.ops["DescribeTransitGatewayPeeringAttachments"].apply(partialParams));
    }
    invokeDescribeTransitGatewayRouteTables(partialParams) {
        this.boot();
        return this.client.describeTransitGatewayRouteTables(this.ops["DescribeTransitGatewayRouteTables"].apply(partialParams));
    }
    invokeDescribeTransitGatewayVpcAttachments(partialParams) {
        this.boot();
        return this.client.describeTransitGatewayVpcAttachments(this.ops["DescribeTransitGatewayVpcAttachments"].apply(partialParams));
    }
    invokeDescribeTransitGateways(partialParams) {
        this.boot();
        return this.client.describeTransitGateways(this.ops["DescribeTransitGateways"].apply(partialParams));
    }
    invokeDescribeTrunkInterfaceAssociations(partialParams) {
        this.boot();
        return this.client.describeTrunkInterfaceAssociations(this.ops["DescribeTrunkInterfaceAssociations"].apply(partialParams));
    }
    invokeDescribeVolumeAttribute(partialParams) {
        this.boot();
        return this.client.describeVolumeAttribute(this.ops["DescribeVolumeAttribute"].apply(partialParams));
    }
    invokeDescribeVolumeStatus(partialParams) {
        this.boot();
        return this.client.describeVolumeStatus(this.ops["DescribeVolumeStatus"].apply(partialParams));
    }
    invokeDescribeVolumes(partialParams) {
        this.boot();
        return this.client.describeVolumes(this.ops["DescribeVolumes"].apply(partialParams));
    }
    invokeDescribeVolumesModifications(partialParams) {
        this.boot();
        return this.client.describeVolumesModifications(this.ops["DescribeVolumesModifications"].apply(partialParams));
    }
    invokeDescribeVpcAttribute(partialParams) {
        this.boot();
        return this.client.describeVpcAttribute(this.ops["DescribeVpcAttribute"].apply(partialParams));
    }
    invokeDescribeVpcClassicLink(partialParams) {
        this.boot();
        return this.client.describeVpcClassicLink(this.ops["DescribeVpcClassicLink"].apply(partialParams));
    }
    invokeDescribeVpcClassicLinkDnsSupport(partialParams) {
        this.boot();
        return this.client.describeVpcClassicLinkDnsSupport(this.ops["DescribeVpcClassicLinkDnsSupport"].apply(partialParams));
    }
    invokeDescribeVpcEndpointConnectionNotifications(partialParams) {
        this.boot();
        return this.client.describeVpcEndpointConnectionNotifications(this.ops["DescribeVpcEndpointConnectionNotifications"].apply(partialParams));
    }
    invokeDescribeVpcEndpointConnections(partialParams) {
        this.boot();
        return this.client.describeVpcEndpointConnections(this.ops["DescribeVpcEndpointConnections"].apply(partialParams));
    }
    invokeDescribeVpcEndpointServiceConfigurations(partialParams) {
        this.boot();
        return this.client.describeVpcEndpointServiceConfigurations(this.ops["DescribeVpcEndpointServiceConfigurations"].apply(partialParams));
    }
    invokeDescribeVpcEndpointServicePermissions(partialParams) {
        this.boot();
        return this.client.describeVpcEndpointServicePermissions(this.ops["DescribeVpcEndpointServicePermissions"].apply(partialParams));
    }
    invokeDescribeVpcEndpointServices(partialParams) {
        this.boot();
        return this.client.describeVpcEndpointServices(this.ops["DescribeVpcEndpointServices"].apply(partialParams));
    }
    invokeDescribeVpcEndpoints(partialParams) {
        this.boot();
        return this.client.describeVpcEndpoints(this.ops["DescribeVpcEndpoints"].apply(partialParams));
    }
    invokeDescribeVpcPeeringConnections(partialParams) {
        this.boot();
        return this.client.describeVpcPeeringConnections(this.ops["DescribeVpcPeeringConnections"].apply(partialParams));
    }
    invokeDescribeVpcs(partialParams) {
        this.boot();
        return this.client.describeVpcs(this.ops["DescribeVpcs"].apply(partialParams));
    }
    invokeDescribeVpnConnections(partialParams) {
        this.boot();
        return this.client.describeVpnConnections(this.ops["DescribeVpnConnections"].apply(partialParams));
    }
    invokeDescribeVpnGateways(partialParams) {
        this.boot();
        return this.client.describeVpnGateways(this.ops["DescribeVpnGateways"].apply(partialParams));
    }
    invokeDetachClassicLinkVpc(partialParams) {
        this.boot();
        return this.client.detachClassicLinkVpc(this.ops["DetachClassicLinkVpc"].apply(partialParams));
    }
    invokeDetachVolume(partialParams) {
        this.boot();
        return this.client.detachVolume(this.ops["DetachVolume"].apply(partialParams));
    }
    invokeDisableEbsEncryptionByDefault(partialParams) {
        this.boot();
        return this.client.disableEbsEncryptionByDefault(this.ops["DisableEbsEncryptionByDefault"].apply(partialParams));
    }
    invokeDisableFastLaunch(partialParams) {
        this.boot();
        return this.client.disableFastLaunch(this.ops["DisableFastLaunch"].apply(partialParams));
    }
    invokeDisableFastSnapshotRestores(partialParams) {
        this.boot();
        return this.client.disableFastSnapshotRestores(this.ops["DisableFastSnapshotRestores"].apply(partialParams));
    }
    invokeDisableImageDeprecation(partialParams) {
        this.boot();
        return this.client.disableImageDeprecation(this.ops["DisableImageDeprecation"].apply(partialParams));
    }
    invokeDisableIpamOrganizationAdminAccount(partialParams) {
        this.boot();
        return this.client.disableIpamOrganizationAdminAccount(this.ops["DisableIpamOrganizationAdminAccount"].apply(partialParams));
    }
    invokeDisableSerialConsoleAccess(partialParams) {
        this.boot();
        return this.client.disableSerialConsoleAccess(this.ops["DisableSerialConsoleAccess"].apply(partialParams));
    }
    invokeDisableTransitGatewayRouteTablePropagation(partialParams) {
        this.boot();
        return this.client.disableTransitGatewayRouteTablePropagation(this.ops["DisableTransitGatewayRouteTablePropagation"].apply(partialParams));
    }
    invokeDisableVpcClassicLink(partialParams) {
        this.boot();
        return this.client.disableVpcClassicLink(this.ops["DisableVpcClassicLink"].apply(partialParams));
    }
    invokeDisableVpcClassicLinkDnsSupport(partialParams) {
        this.boot();
        return this.client.disableVpcClassicLinkDnsSupport(this.ops["DisableVpcClassicLinkDnsSupport"].apply(partialParams));
    }
    invokeDisassociateClientVpnTargetNetwork(partialParams) {
        this.boot();
        return this.client.disassociateClientVpnTargetNetwork(this.ops["DisassociateClientVpnTargetNetwork"].apply(partialParams));
    }
    invokeDisassociateEnclaveCertificateIamRole(partialParams) {
        this.boot();
        return this.client.disassociateEnclaveCertificateIamRole(this.ops["DisassociateEnclaveCertificateIamRole"].apply(partialParams));
    }
    invokeDisassociateIamInstanceProfile(partialParams) {
        this.boot();
        return this.client.disassociateIamInstanceProfile(this.ops["DisassociateIamInstanceProfile"].apply(partialParams));
    }
    invokeDisassociateInstanceEventWindow(partialParams) {
        this.boot();
        return this.client.disassociateInstanceEventWindow(this.ops["DisassociateInstanceEventWindow"].apply(partialParams));
    }
    invokeDisassociateSubnetCidrBlock(partialParams) {
        this.boot();
        return this.client.disassociateSubnetCidrBlock(this.ops["DisassociateSubnetCidrBlock"].apply(partialParams));
    }
    invokeDisassociateTransitGatewayMulticastDomain(partialParams) {
        this.boot();
        return this.client.disassociateTransitGatewayMulticastDomain(this.ops["DisassociateTransitGatewayMulticastDomain"].apply(partialParams));
    }
    invokeDisassociateTransitGatewayRouteTable(partialParams) {
        this.boot();
        return this.client.disassociateTransitGatewayRouteTable(this.ops["DisassociateTransitGatewayRouteTable"].apply(partialParams));
    }
    invokeDisassociateTrunkInterface(partialParams) {
        this.boot();
        return this.client.disassociateTrunkInterface(this.ops["DisassociateTrunkInterface"].apply(partialParams));
    }
    invokeDisassociateVpcCidrBlock(partialParams) {
        this.boot();
        return this.client.disassociateVpcCidrBlock(this.ops["DisassociateVpcCidrBlock"].apply(partialParams));
    }
    invokeEnableEbsEncryptionByDefault(partialParams) {
        this.boot();
        return this.client.enableEbsEncryptionByDefault(this.ops["EnableEbsEncryptionByDefault"].apply(partialParams));
    }
    invokeEnableFastLaunch(partialParams) {
        this.boot();
        return this.client.enableFastLaunch(this.ops["EnableFastLaunch"].apply(partialParams));
    }
    invokeEnableFastSnapshotRestores(partialParams) {
        this.boot();
        return this.client.enableFastSnapshotRestores(this.ops["EnableFastSnapshotRestores"].apply(partialParams));
    }
    invokeEnableImageDeprecation(partialParams) {
        this.boot();
        return this.client.enableImageDeprecation(this.ops["EnableImageDeprecation"].apply(partialParams));
    }
    invokeEnableIpamOrganizationAdminAccount(partialParams) {
        this.boot();
        return this.client.enableIpamOrganizationAdminAccount(this.ops["EnableIpamOrganizationAdminAccount"].apply(partialParams));
    }
    invokeEnableSerialConsoleAccess(partialParams) {
        this.boot();
        return this.client.enableSerialConsoleAccess(this.ops["EnableSerialConsoleAccess"].apply(partialParams));
    }
    invokeEnableTransitGatewayRouteTablePropagation(partialParams) {
        this.boot();
        return this.client.enableTransitGatewayRouteTablePropagation(this.ops["EnableTransitGatewayRouteTablePropagation"].apply(partialParams));
    }
    invokeEnableVpcClassicLink(partialParams) {
        this.boot();
        return this.client.enableVpcClassicLink(this.ops["EnableVpcClassicLink"].apply(partialParams));
    }
    invokeEnableVpcClassicLinkDnsSupport(partialParams) {
        this.boot();
        return this.client.enableVpcClassicLinkDnsSupport(this.ops["EnableVpcClassicLinkDnsSupport"].apply(partialParams));
    }
    invokeExportClientVpnClientCertificateRevocationList(partialParams) {
        this.boot();
        return this.client.exportClientVpnClientCertificateRevocationList(this.ops["ExportClientVpnClientCertificateRevocationList"].apply(partialParams));
    }
    invokeExportClientVpnClientConfiguration(partialParams) {
        this.boot();
        return this.client.exportClientVpnClientConfiguration(this.ops["ExportClientVpnClientConfiguration"].apply(partialParams));
    }
    invokeExportImage(partialParams) {
        this.boot();
        return this.client.exportImage(this.ops["ExportImage"].apply(partialParams));
    }
    invokeExportTransitGatewayRoutes(partialParams) {
        this.boot();
        return this.client.exportTransitGatewayRoutes(this.ops["ExportTransitGatewayRoutes"].apply(partialParams));
    }
    invokeGetAssociatedEnclaveCertificateIamRoles(partialParams) {
        this.boot();
        return this.client.getAssociatedEnclaveCertificateIamRoles(this.ops["GetAssociatedEnclaveCertificateIamRoles"].apply(partialParams));
    }
    invokeGetAssociatedIpv6PoolCidrs(partialParams) {
        this.boot();
        return this.client.getAssociatedIpv6PoolCidrs(this.ops["GetAssociatedIpv6PoolCidrs"].apply(partialParams));
    }
    invokeGetCapacityReservationUsage(partialParams) {
        this.boot();
        return this.client.getCapacityReservationUsage(this.ops["GetCapacityReservationUsage"].apply(partialParams));
    }
    invokeGetCoipPoolUsage(partialParams) {
        this.boot();
        return this.client.getCoipPoolUsage(this.ops["GetCoipPoolUsage"].apply(partialParams));
    }
    invokeGetConsoleOutput(partialParams) {
        this.boot();
        return this.client.getConsoleOutput(this.ops["GetConsoleOutput"].apply(partialParams));
    }
    invokeGetConsoleScreenshot(partialParams) {
        this.boot();
        return this.client.getConsoleScreenshot(this.ops["GetConsoleScreenshot"].apply(partialParams));
    }
    invokeGetDefaultCreditSpecification(partialParams) {
        this.boot();
        return this.client.getDefaultCreditSpecification(this.ops["GetDefaultCreditSpecification"].apply(partialParams));
    }
    invokeGetEbsDefaultKmsKeyId(partialParams) {
        this.boot();
        return this.client.getEbsDefaultKmsKeyId(this.ops["GetEbsDefaultKmsKeyId"].apply(partialParams));
    }
    invokeGetEbsEncryptionByDefault(partialParams) {
        this.boot();
        return this.client.getEbsEncryptionByDefault(this.ops["GetEbsEncryptionByDefault"].apply(partialParams));
    }
    invokeGetFlowLogsIntegrationTemplate(partialParams) {
        this.boot();
        return this.client.getFlowLogsIntegrationTemplate(this.ops["GetFlowLogsIntegrationTemplate"].apply(partialParams));
    }
    invokeGetGroupsForCapacityReservation(partialParams) {
        this.boot();
        return this.client.getGroupsForCapacityReservation(this.ops["GetGroupsForCapacityReservation"].apply(partialParams));
    }
    invokeGetHostReservationPurchasePreview(partialParams) {
        this.boot();
        return this.client.getHostReservationPurchasePreview(this.ops["GetHostReservationPurchasePreview"].apply(partialParams));
    }
    invokeGetInstanceTypesFromInstanceRequirements(partialParams) {
        this.boot();
        return this.client.getInstanceTypesFromInstanceRequirements(this.ops["GetInstanceTypesFromInstanceRequirements"].apply(partialParams));
    }
    invokeGetIpamAddressHistory(partialParams) {
        this.boot();
        return this.client.getIpamAddressHistory(this.ops["GetIpamAddressHistory"].apply(partialParams));
    }
    invokeGetIpamPoolAllocations(partialParams) {
        this.boot();
        return this.client.getIpamPoolAllocations(this.ops["GetIpamPoolAllocations"].apply(partialParams));
    }
    invokeGetIpamPoolCidrs(partialParams) {
        this.boot();
        return this.client.getIpamPoolCidrs(this.ops["GetIpamPoolCidrs"].apply(partialParams));
    }
    invokeGetIpamResourceCidrs(partialParams) {
        this.boot();
        return this.client.getIpamResourceCidrs(this.ops["GetIpamResourceCidrs"].apply(partialParams));
    }
    invokeGetLaunchTemplateData(partialParams) {
        this.boot();
        return this.client.getLaunchTemplateData(this.ops["GetLaunchTemplateData"].apply(partialParams));
    }
    invokeGetManagedPrefixListAssociations(partialParams) {
        this.boot();
        return this.client.getManagedPrefixListAssociations(this.ops["GetManagedPrefixListAssociations"].apply(partialParams));
    }
    invokeGetManagedPrefixListEntries(partialParams) {
        this.boot();
        return this.client.getManagedPrefixListEntries(this.ops["GetManagedPrefixListEntries"].apply(partialParams));
    }
    invokeGetNetworkInsightsAccessScopeAnalysisFindings(partialParams) {
        this.boot();
        return this.client.getNetworkInsightsAccessScopeAnalysisFindings(this.ops["GetNetworkInsightsAccessScopeAnalysisFindings"].apply(partialParams));
    }
    invokeGetNetworkInsightsAccessScopeContent(partialParams) {
        this.boot();
        return this.client.getNetworkInsightsAccessScopeContent(this.ops["GetNetworkInsightsAccessScopeContent"].apply(partialParams));
    }
    invokeGetPasswordData(partialParams) {
        this.boot();
        return this.client.getPasswordData(this.ops["GetPasswordData"].apply(partialParams));
    }
    invokeGetReservedInstancesExchangeQuote(partialParams) {
        this.boot();
        return this.client.getReservedInstancesExchangeQuote(this.ops["GetReservedInstancesExchangeQuote"].apply(partialParams));
    }
    invokeGetSerialConsoleAccessStatus(partialParams) {
        this.boot();
        return this.client.getSerialConsoleAccessStatus(this.ops["GetSerialConsoleAccessStatus"].apply(partialParams));
    }
    invokeGetSpotPlacementScores(partialParams) {
        this.boot();
        return this.client.getSpotPlacementScores(this.ops["GetSpotPlacementScores"].apply(partialParams));
    }
    invokeGetSubnetCidrReservations(partialParams) {
        this.boot();
        return this.client.getSubnetCidrReservations(this.ops["GetSubnetCidrReservations"].apply(partialParams));
    }
    invokeGetTransitGatewayAttachmentPropagations(partialParams) {
        this.boot();
        return this.client.getTransitGatewayAttachmentPropagations(this.ops["GetTransitGatewayAttachmentPropagations"].apply(partialParams));
    }
    invokeGetTransitGatewayMulticastDomainAssociations(partialParams) {
        this.boot();
        return this.client.getTransitGatewayMulticastDomainAssociations(this.ops["GetTransitGatewayMulticastDomainAssociations"].apply(partialParams));
    }
    invokeGetTransitGatewayPrefixListReferences(partialParams) {
        this.boot();
        return this.client.getTransitGatewayPrefixListReferences(this.ops["GetTransitGatewayPrefixListReferences"].apply(partialParams));
    }
    invokeGetTransitGatewayRouteTableAssociations(partialParams) {
        this.boot();
        return this.client.getTransitGatewayRouteTableAssociations(this.ops["GetTransitGatewayRouteTableAssociations"].apply(partialParams));
    }
    invokeGetTransitGatewayRouteTablePropagations(partialParams) {
        this.boot();
        return this.client.getTransitGatewayRouteTablePropagations(this.ops["GetTransitGatewayRouteTablePropagations"].apply(partialParams));
    }
    invokeGetVpnConnectionDeviceSampleConfiguration(partialParams) {
        this.boot();
        return this.client.getVpnConnectionDeviceSampleConfiguration(this.ops["GetVpnConnectionDeviceSampleConfiguration"].apply(partialParams));
    }
    invokeGetVpnConnectionDeviceTypes(partialParams) {
        this.boot();
        return this.client.getVpnConnectionDeviceTypes(this.ops["GetVpnConnectionDeviceTypes"].apply(partialParams));
    }
    invokeImportClientVpnClientCertificateRevocationList(partialParams) {
        this.boot();
        return this.client.importClientVpnClientCertificateRevocationList(this.ops["ImportClientVpnClientCertificateRevocationList"].apply(partialParams));
    }
    invokeImportImage(partialParams) {
        this.boot();
        return this.client.importImage(this.ops["ImportImage"].apply(partialParams));
    }
    invokeImportInstance(partialParams) {
        this.boot();
        return this.client.importInstance(this.ops["ImportInstance"].apply(partialParams));
    }
    invokeImportKeyPair(partialParams) {
        this.boot();
        return this.client.importKeyPair(this.ops["ImportKeyPair"].apply(partialParams));
    }
    invokeImportSnapshot(partialParams) {
        this.boot();
        return this.client.importSnapshot(this.ops["ImportSnapshot"].apply(partialParams));
    }
    invokeImportVolume(partialParams) {
        this.boot();
        return this.client.importVolume(this.ops["ImportVolume"].apply(partialParams));
    }
    invokeListImagesInRecycleBin(partialParams) {
        this.boot();
        return this.client.listImagesInRecycleBin(this.ops["ListImagesInRecycleBin"].apply(partialParams));
    }
    invokeListSnapshotsInRecycleBin(partialParams) {
        this.boot();
        return this.client.listSnapshotsInRecycleBin(this.ops["ListSnapshotsInRecycleBin"].apply(partialParams));
    }
    invokeModifyAddressAttribute(partialParams) {
        this.boot();
        return this.client.modifyAddressAttribute(this.ops["ModifyAddressAttribute"].apply(partialParams));
    }
    invokeModifyAvailabilityZoneGroup(partialParams) {
        this.boot();
        return this.client.modifyAvailabilityZoneGroup(this.ops["ModifyAvailabilityZoneGroup"].apply(partialParams));
    }
    invokeModifyCapacityReservation(partialParams) {
        this.boot();
        return this.client.modifyCapacityReservation(this.ops["ModifyCapacityReservation"].apply(partialParams));
    }
    invokeModifyCapacityReservationFleet(partialParams) {
        this.boot();
        return this.client.modifyCapacityReservationFleet(this.ops["ModifyCapacityReservationFleet"].apply(partialParams));
    }
    invokeModifyClientVpnEndpoint(partialParams) {
        this.boot();
        return this.client.modifyClientVpnEndpoint(this.ops["ModifyClientVpnEndpoint"].apply(partialParams));
    }
    invokeModifyDefaultCreditSpecification(partialParams) {
        this.boot();
        return this.client.modifyDefaultCreditSpecification(this.ops["ModifyDefaultCreditSpecification"].apply(partialParams));
    }
    invokeModifyEbsDefaultKmsKeyId(partialParams) {
        this.boot();
        return this.client.modifyEbsDefaultKmsKeyId(this.ops["ModifyEbsDefaultKmsKeyId"].apply(partialParams));
    }
    invokeModifyFleet(partialParams) {
        this.boot();
        return this.client.modifyFleet(this.ops["ModifyFleet"].apply(partialParams));
    }
    invokeModifyFpgaImageAttribute(partialParams) {
        this.boot();
        return this.client.modifyFpgaImageAttribute(this.ops["ModifyFpgaImageAttribute"].apply(partialParams));
    }
    invokeModifyHosts(partialParams) {
        this.boot();
        return this.client.modifyHosts(this.ops["ModifyHosts"].apply(partialParams));
    }
    invokeModifyInstanceCapacityReservationAttributes(partialParams) {
        this.boot();
        return this.client.modifyInstanceCapacityReservationAttributes(this.ops["ModifyInstanceCapacityReservationAttributes"].apply(partialParams));
    }
    invokeModifyInstanceCreditSpecification(partialParams) {
        this.boot();
        return this.client.modifyInstanceCreditSpecification(this.ops["ModifyInstanceCreditSpecification"].apply(partialParams));
    }
    invokeModifyInstanceEventStartTime(partialParams) {
        this.boot();
        return this.client.modifyInstanceEventStartTime(this.ops["ModifyInstanceEventStartTime"].apply(partialParams));
    }
    invokeModifyInstanceEventWindow(partialParams) {
        this.boot();
        return this.client.modifyInstanceEventWindow(this.ops["ModifyInstanceEventWindow"].apply(partialParams));
    }
    invokeModifyInstanceMetadataOptions(partialParams) {
        this.boot();
        return this.client.modifyInstanceMetadataOptions(this.ops["ModifyInstanceMetadataOptions"].apply(partialParams));
    }
    invokeModifyInstancePlacement(partialParams) {
        this.boot();
        return this.client.modifyInstancePlacement(this.ops["ModifyInstancePlacement"].apply(partialParams));
    }
    invokeModifyIpam(partialParams) {
        this.boot();
        return this.client.modifyIpam(this.ops["ModifyIpam"].apply(partialParams));
    }
    invokeModifyIpamPool(partialParams) {
        this.boot();
        return this.client.modifyIpamPool(this.ops["ModifyIpamPool"].apply(partialParams));
    }
    invokeModifyIpamResourceCidr(partialParams) {
        this.boot();
        return this.client.modifyIpamResourceCidr(this.ops["ModifyIpamResourceCidr"].apply(partialParams));
    }
    invokeModifyIpamScope(partialParams) {
        this.boot();
        return this.client.modifyIpamScope(this.ops["ModifyIpamScope"].apply(partialParams));
    }
    invokeModifyLaunchTemplate(partialParams) {
        this.boot();
        return this.client.modifyLaunchTemplate(this.ops["ModifyLaunchTemplate"].apply(partialParams));
    }
    invokeModifyManagedPrefixList(partialParams) {
        this.boot();
        return this.client.modifyManagedPrefixList(this.ops["ModifyManagedPrefixList"].apply(partialParams));
    }
    invokeModifyPrivateDnsNameOptions(partialParams) {
        this.boot();
        return this.client.modifyPrivateDnsNameOptions(this.ops["ModifyPrivateDnsNameOptions"].apply(partialParams));
    }
    invokeModifyReservedInstances(partialParams) {
        this.boot();
        return this.client.modifyReservedInstances(this.ops["ModifyReservedInstances"].apply(partialParams));
    }
    invokeModifySecurityGroupRules(partialParams) {
        this.boot();
        return this.client.modifySecurityGroupRules(this.ops["ModifySecurityGroupRules"].apply(partialParams));
    }
    invokeModifySnapshotTier(partialParams) {
        this.boot();
        return this.client.modifySnapshotTier(this.ops["ModifySnapshotTier"].apply(partialParams));
    }
    invokeModifySpotFleetRequest(partialParams) {
        this.boot();
        return this.client.modifySpotFleetRequest(this.ops["ModifySpotFleetRequest"].apply(partialParams));
    }
    invokeModifyTrafficMirrorFilterNetworkServices(partialParams) {
        this.boot();
        return this.client.modifyTrafficMirrorFilterNetworkServices(this.ops["ModifyTrafficMirrorFilterNetworkServices"].apply(partialParams));
    }
    invokeModifyTrafficMirrorFilterRule(partialParams) {
        this.boot();
        return this.client.modifyTrafficMirrorFilterRule(this.ops["ModifyTrafficMirrorFilterRule"].apply(partialParams));
    }
    invokeModifyTrafficMirrorSession(partialParams) {
        this.boot();
        return this.client.modifyTrafficMirrorSession(this.ops["ModifyTrafficMirrorSession"].apply(partialParams));
    }
    invokeModifyTransitGateway(partialParams) {
        this.boot();
        return this.client.modifyTransitGateway(this.ops["ModifyTransitGateway"].apply(partialParams));
    }
    invokeModifyTransitGatewayPrefixListReference(partialParams) {
        this.boot();
        return this.client.modifyTransitGatewayPrefixListReference(this.ops["ModifyTransitGatewayPrefixListReference"].apply(partialParams));
    }
    invokeModifyTransitGatewayVpcAttachment(partialParams) {
        this.boot();
        return this.client.modifyTransitGatewayVpcAttachment(this.ops["ModifyTransitGatewayVpcAttachment"].apply(partialParams));
    }
    invokeModifyVolume(partialParams) {
        this.boot();
        return this.client.modifyVolume(this.ops["ModifyVolume"].apply(partialParams));
    }
    invokeModifyVpcEndpoint(partialParams) {
        this.boot();
        return this.client.modifyVpcEndpoint(this.ops["ModifyVpcEndpoint"].apply(partialParams));
    }
    invokeModifyVpcEndpointConnectionNotification(partialParams) {
        this.boot();
        return this.client.modifyVpcEndpointConnectionNotification(this.ops["ModifyVpcEndpointConnectionNotification"].apply(partialParams));
    }
    invokeModifyVpcEndpointServiceConfiguration(partialParams) {
        this.boot();
        return this.client.modifyVpcEndpointServiceConfiguration(this.ops["ModifyVpcEndpointServiceConfiguration"].apply(partialParams));
    }
    invokeModifyVpcEndpointServicePayerResponsibility(partialParams) {
        this.boot();
        return this.client.modifyVpcEndpointServicePayerResponsibility(this.ops["ModifyVpcEndpointServicePayerResponsibility"].apply(partialParams));
    }
    invokeModifyVpcEndpointServicePermissions(partialParams) {
        this.boot();
        return this.client.modifyVpcEndpointServicePermissions(this.ops["ModifyVpcEndpointServicePermissions"].apply(partialParams));
    }
    invokeModifyVpcPeeringConnectionOptions(partialParams) {
        this.boot();
        return this.client.modifyVpcPeeringConnectionOptions(this.ops["ModifyVpcPeeringConnectionOptions"].apply(partialParams));
    }
    invokeModifyVpcTenancy(partialParams) {
        this.boot();
        return this.client.modifyVpcTenancy(this.ops["ModifyVpcTenancy"].apply(partialParams));
    }
    invokeModifyVpnConnection(partialParams) {
        this.boot();
        return this.client.modifyVpnConnection(this.ops["ModifyVpnConnection"].apply(partialParams));
    }
    invokeModifyVpnConnectionOptions(partialParams) {
        this.boot();
        return this.client.modifyVpnConnectionOptions(this.ops["ModifyVpnConnectionOptions"].apply(partialParams));
    }
    invokeModifyVpnTunnelCertificate(partialParams) {
        this.boot();
        return this.client.modifyVpnTunnelCertificate(this.ops["ModifyVpnTunnelCertificate"].apply(partialParams));
    }
    invokeModifyVpnTunnelOptions(partialParams) {
        this.boot();
        return this.client.modifyVpnTunnelOptions(this.ops["ModifyVpnTunnelOptions"].apply(partialParams));
    }
    invokeMonitorInstances(partialParams) {
        this.boot();
        return this.client.monitorInstances(this.ops["MonitorInstances"].apply(partialParams));
    }
    invokeMoveAddressToVpc(partialParams) {
        this.boot();
        return this.client.moveAddressToVpc(this.ops["MoveAddressToVpc"].apply(partialParams));
    }
    invokeMoveByoipCidrToIpam(partialParams) {
        this.boot();
        return this.client.moveByoipCidrToIpam(this.ops["MoveByoipCidrToIpam"].apply(partialParams));
    }
    invokeProvisionByoipCidr(partialParams) {
        this.boot();
        return this.client.provisionByoipCidr(this.ops["ProvisionByoipCidr"].apply(partialParams));
    }
    invokeProvisionIpamPoolCidr(partialParams) {
        this.boot();
        return this.client.provisionIpamPoolCidr(this.ops["ProvisionIpamPoolCidr"].apply(partialParams));
    }
    invokeProvisionPublicIpv4PoolCidr(partialParams) {
        this.boot();
        return this.client.provisionPublicIpv4PoolCidr(this.ops["ProvisionPublicIpv4PoolCidr"].apply(partialParams));
    }
    invokePurchaseHostReservation(partialParams) {
        this.boot();
        return this.client.purchaseHostReservation(this.ops["PurchaseHostReservation"].apply(partialParams));
    }
    invokePurchaseReservedInstancesOffering(partialParams) {
        this.boot();
        return this.client.purchaseReservedInstancesOffering(this.ops["PurchaseReservedInstancesOffering"].apply(partialParams));
    }
    invokePurchaseScheduledInstances(partialParams) {
        this.boot();
        return this.client.purchaseScheduledInstances(this.ops["PurchaseScheduledInstances"].apply(partialParams));
    }
    invokeRegisterImage(partialParams) {
        this.boot();
        return this.client.registerImage(this.ops["RegisterImage"].apply(partialParams));
    }
    invokeRegisterInstanceEventNotificationAttributes(partialParams) {
        this.boot();
        return this.client.registerInstanceEventNotificationAttributes(this.ops["RegisterInstanceEventNotificationAttributes"].apply(partialParams));
    }
    invokeRegisterTransitGatewayMulticastGroupMembers(partialParams) {
        this.boot();
        return this.client.registerTransitGatewayMulticastGroupMembers(this.ops["RegisterTransitGatewayMulticastGroupMembers"].apply(partialParams));
    }
    invokeRegisterTransitGatewayMulticastGroupSources(partialParams) {
        this.boot();
        return this.client.registerTransitGatewayMulticastGroupSources(this.ops["RegisterTransitGatewayMulticastGroupSources"].apply(partialParams));
    }
    invokeRejectTransitGatewayMulticastDomainAssociations(partialParams) {
        this.boot();
        return this.client.rejectTransitGatewayMulticastDomainAssociations(this.ops["RejectTransitGatewayMulticastDomainAssociations"].apply(partialParams));
    }
    invokeRejectTransitGatewayPeeringAttachment(partialParams) {
        this.boot();
        return this.client.rejectTransitGatewayPeeringAttachment(this.ops["RejectTransitGatewayPeeringAttachment"].apply(partialParams));
    }
    invokeRejectTransitGatewayVpcAttachment(partialParams) {
        this.boot();
        return this.client.rejectTransitGatewayVpcAttachment(this.ops["RejectTransitGatewayVpcAttachment"].apply(partialParams));
    }
    invokeRejectVpcEndpointConnections(partialParams) {
        this.boot();
        return this.client.rejectVpcEndpointConnections(this.ops["RejectVpcEndpointConnections"].apply(partialParams));
    }
    invokeRejectVpcPeeringConnection(partialParams) {
        this.boot();
        return this.client.rejectVpcPeeringConnection(this.ops["RejectVpcPeeringConnection"].apply(partialParams));
    }
    invokeReleaseHosts(partialParams) {
        this.boot();
        return this.client.releaseHosts(this.ops["ReleaseHosts"].apply(partialParams));
    }
    invokeReleaseIpamPoolAllocation(partialParams) {
        this.boot();
        return this.client.releaseIpamPoolAllocation(this.ops["ReleaseIpamPoolAllocation"].apply(partialParams));
    }
    invokeReplaceIamInstanceProfileAssociation(partialParams) {
        this.boot();
        return this.client.replaceIamInstanceProfileAssociation(this.ops["ReplaceIamInstanceProfileAssociation"].apply(partialParams));
    }
    invokeReplaceNetworkAclAssociation(partialParams) {
        this.boot();
        return this.client.replaceNetworkAclAssociation(this.ops["ReplaceNetworkAclAssociation"].apply(partialParams));
    }
    invokeReplaceRouteTableAssociation(partialParams) {
        this.boot();
        return this.client.replaceRouteTableAssociation(this.ops["ReplaceRouteTableAssociation"].apply(partialParams));
    }
    invokeReplaceTransitGatewayRoute(partialParams) {
        this.boot();
        return this.client.replaceTransitGatewayRoute(this.ops["ReplaceTransitGatewayRoute"].apply(partialParams));
    }
    invokeRequestSpotFleet(partialParams) {
        this.boot();
        return this.client.requestSpotFleet(this.ops["RequestSpotFleet"].apply(partialParams));
    }
    invokeRequestSpotInstances(partialParams) {
        this.boot();
        return this.client.requestSpotInstances(this.ops["RequestSpotInstances"].apply(partialParams));
    }
    invokeResetAddressAttribute(partialParams) {
        this.boot();
        return this.client.resetAddressAttribute(this.ops["ResetAddressAttribute"].apply(partialParams));
    }
    invokeResetEbsDefaultKmsKeyId(partialParams) {
        this.boot();
        return this.client.resetEbsDefaultKmsKeyId(this.ops["ResetEbsDefaultKmsKeyId"].apply(partialParams));
    }
    invokeResetFpgaImageAttribute(partialParams) {
        this.boot();
        return this.client.resetFpgaImageAttribute(this.ops["ResetFpgaImageAttribute"].apply(partialParams));
    }
    invokeRestoreAddressToClassic(partialParams) {
        this.boot();
        return this.client.restoreAddressToClassic(this.ops["RestoreAddressToClassic"].apply(partialParams));
    }
    invokeRestoreImageFromRecycleBin(partialParams) {
        this.boot();
        return this.client.restoreImageFromRecycleBin(this.ops["RestoreImageFromRecycleBin"].apply(partialParams));
    }
    invokeRestoreManagedPrefixListVersion(partialParams) {
        this.boot();
        return this.client.restoreManagedPrefixListVersion(this.ops["RestoreManagedPrefixListVersion"].apply(partialParams));
    }
    invokeRestoreSnapshotFromRecycleBin(partialParams) {
        this.boot();
        return this.client.restoreSnapshotFromRecycleBin(this.ops["RestoreSnapshotFromRecycleBin"].apply(partialParams));
    }
    invokeRestoreSnapshotTier(partialParams) {
        this.boot();
        return this.client.restoreSnapshotTier(this.ops["RestoreSnapshotTier"].apply(partialParams));
    }
    invokeRevokeClientVpnIngress(partialParams) {
        this.boot();
        return this.client.revokeClientVpnIngress(this.ops["RevokeClientVpnIngress"].apply(partialParams));
    }
    invokeRevokeSecurityGroupEgress(partialParams) {
        this.boot();
        return this.client.revokeSecurityGroupEgress(this.ops["RevokeSecurityGroupEgress"].apply(partialParams));
    }
    invokeRevokeSecurityGroupIngress(partialParams) {
        this.boot();
        return this.client.revokeSecurityGroupIngress(this.ops["RevokeSecurityGroupIngress"].apply(partialParams));
    }
    invokeRunInstances(partialParams) {
        this.boot();
        return this.client.runInstances(this.ops["RunInstances"].apply(partialParams));
    }
    invokeRunScheduledInstances(partialParams) {
        this.boot();
        return this.client.runScheduledInstances(this.ops["RunScheduledInstances"].apply(partialParams));
    }
    invokeSearchLocalGatewayRoutes(partialParams) {
        this.boot();
        return this.client.searchLocalGatewayRoutes(this.ops["SearchLocalGatewayRoutes"].apply(partialParams));
    }
    invokeSearchTransitGatewayMulticastGroups(partialParams) {
        this.boot();
        return this.client.searchTransitGatewayMulticastGroups(this.ops["SearchTransitGatewayMulticastGroups"].apply(partialParams));
    }
    invokeSearchTransitGatewayRoutes(partialParams) {
        this.boot();
        return this.client.searchTransitGatewayRoutes(this.ops["SearchTransitGatewayRoutes"].apply(partialParams));
    }
    invokeStartInstances(partialParams) {
        this.boot();
        return this.client.startInstances(this.ops["StartInstances"].apply(partialParams));
    }
    invokeStartNetworkInsightsAccessScopeAnalysis(partialParams) {
        this.boot();
        return this.client.startNetworkInsightsAccessScopeAnalysis(this.ops["StartNetworkInsightsAccessScopeAnalysis"].apply(partialParams));
    }
    invokeStartNetworkInsightsAnalysis(partialParams) {
        this.boot();
        return this.client.startNetworkInsightsAnalysis(this.ops["StartNetworkInsightsAnalysis"].apply(partialParams));
    }
    invokeStartVpcEndpointServicePrivateDnsVerification(partialParams) {
        this.boot();
        return this.client.startVpcEndpointServicePrivateDnsVerification(this.ops["StartVpcEndpointServicePrivateDnsVerification"].apply(partialParams));
    }
    invokeStopInstances(partialParams) {
        this.boot();
        return this.client.stopInstances(this.ops["StopInstances"].apply(partialParams));
    }
    invokeTerminateClientVpnConnections(partialParams) {
        this.boot();
        return this.client.terminateClientVpnConnections(this.ops["TerminateClientVpnConnections"].apply(partialParams));
    }
    invokeTerminateInstances(partialParams) {
        this.boot();
        return this.client.terminateInstances(this.ops["TerminateInstances"].apply(partialParams));
    }
    invokeUnassignIpv6Addresses(partialParams) {
        this.boot();
        return this.client.unassignIpv6Addresses(this.ops["UnassignIpv6Addresses"].apply(partialParams));
    }
    invokeUnmonitorInstances(partialParams) {
        this.boot();
        return this.client.unmonitorInstances(this.ops["UnmonitorInstances"].apply(partialParams));
    }
    invokeUpdateSecurityGroupRuleDescriptionsEgress(partialParams) {
        this.boot();
        return this.client.updateSecurityGroupRuleDescriptionsEgress(this.ops["UpdateSecurityGroupRuleDescriptionsEgress"].apply(partialParams));
    }
    invokeUpdateSecurityGroupRuleDescriptionsIngress(partialParams) {
        this.boot();
        return this.client.updateSecurityGroupRuleDescriptionsIngress(this.ops["UpdateSecurityGroupRuleDescriptionsIngress"].apply(partialParams));
    }
    invokeWithdrawByoipCidr(partialParams) {
        this.boot();
        return this.client.withdrawByoipCidr(this.ops["WithdrawByoipCidr"].apply(partialParams));
    }
}
exports.default = default_1;
