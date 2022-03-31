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
class default_1 extends aws.ec2.TrafficMirrorFilter {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.EC2();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
    }
    boot() {
        Object.entries(this.capitalizedParams).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value.value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
        this.ops = (0, parse_1.getResourceOperations)(this.capitalizedParams, schema, this.client);
    }
    invokeAcceptReservedInstancesExchangeQuote(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.acceptReservedInstancesExchangeQuote(this.ops["AcceptReservedInstancesExchangeQuote"].applicator.apply(partialParams));
    }
    invokeAcceptTransitGatewayPeeringAttachment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.acceptTransitGatewayPeeringAttachment(this.ops["AcceptTransitGatewayPeeringAttachment"].applicator.apply(partialParams));
    }
    invokeAcceptTransitGatewayVpcAttachment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.acceptTransitGatewayVpcAttachment(this.ops["AcceptTransitGatewayVpcAttachment"].applicator.apply(partialParams));
    }
    invokeAcceptVpcEndpointConnections(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.acceptVpcEndpointConnections(this.ops["AcceptVpcEndpointConnections"].applicator.apply(partialParams));
    }
    invokeAdvertiseByoipCidr(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.advertiseByoipCidr(this.ops["AdvertiseByoipCidr"].applicator.apply(partialParams));
    }
    invokeAllocateHosts(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.allocateHosts(this.ops["AllocateHosts"].applicator.apply(partialParams));
    }
    invokeAllocateIpamPoolCidr(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.allocateIpamPoolCidr(this.ops["AllocateIpamPoolCidr"].applicator.apply(partialParams));
    }
    invokeApplySecurityGroupsToClientVpnTargetNetwork(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.applySecurityGroupsToClientVpnTargetNetwork(this.ops["ApplySecurityGroupsToClientVpnTargetNetwork"].applicator.apply(partialParams));
    }
    invokeAssignIpv6Addresses(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.assignIpv6Addresses(this.ops["AssignIpv6Addresses"].applicator.apply(partialParams));
    }
    invokeAssignPrivateIpAddresses(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.assignPrivateIpAddresses(this.ops["AssignPrivateIpAddresses"].applicator.apply(partialParams));
    }
    invokeAssociateClientVpnTargetNetwork(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateClientVpnTargetNetwork(this.ops["AssociateClientVpnTargetNetwork"].applicator.apply(partialParams));
    }
    invokeAssociateDhcpOptions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateDhcpOptions(this.ops["AssociateDhcpOptions"].applicator.apply(partialParams));
    }
    invokeAssociateIamInstanceProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateIamInstanceProfile(this.ops["AssociateIamInstanceProfile"].applicator.apply(partialParams));
    }
    invokeAssociateInstanceEventWindow(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateInstanceEventWindow(this.ops["AssociateInstanceEventWindow"].applicator.apply(partialParams));
    }
    invokeAssociateRouteTable(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateRouteTable(this.ops["AssociateRouteTable"].applicator.apply(partialParams));
    }
    invokeAssociateSubnetCidrBlock(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateSubnetCidrBlock(this.ops["AssociateSubnetCidrBlock"].applicator.apply(partialParams));
    }
    invokeAssociateTransitGatewayRouteTable(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateTransitGatewayRouteTable(this.ops["AssociateTransitGatewayRouteTable"].applicator.apply(partialParams));
    }
    invokeAssociateTrunkInterface(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateTrunkInterface(this.ops["AssociateTrunkInterface"].applicator.apply(partialParams));
    }
    invokeAssociateVpcCidrBlock(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateVpcCidrBlock(this.ops["AssociateVpcCidrBlock"].applicator.apply(partialParams));
    }
    invokeAttachClassicLinkVpc(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachClassicLinkVpc(this.ops["AttachClassicLinkVpc"].applicator.apply(partialParams));
    }
    invokeAttachInternetGateway(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachInternetGateway(this.ops["AttachInternetGateway"].applicator.apply(partialParams));
    }
    invokeAttachNetworkInterface(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachNetworkInterface(this.ops["AttachNetworkInterface"].applicator.apply(partialParams));
    }
    invokeAttachVolume(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachVolume(this.ops["AttachVolume"].applicator.apply(partialParams));
    }
    invokeAttachVpnGateway(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachVpnGateway(this.ops["AttachVpnGateway"].applicator.apply(partialParams));
    }
    invokeAuthorizeClientVpnIngress(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.authorizeClientVpnIngress(this.ops["AuthorizeClientVpnIngress"].applicator.apply(partialParams));
    }
    invokeAuthorizeSecurityGroupEgress(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.authorizeSecurityGroupEgress(this.ops["AuthorizeSecurityGroupEgress"].applicator.apply(partialParams));
    }
    invokeBundleInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.bundleInstance(this.ops["BundleInstance"].applicator.apply(partialParams));
    }
    invokeCancelBundleTask(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelBundleTask(this.ops["CancelBundleTask"].applicator.apply(partialParams));
    }
    invokeCancelCapacityReservation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelCapacityReservation(this.ops["CancelCapacityReservation"].applicator.apply(partialParams));
    }
    invokeCancelCapacityReservationFleets(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelCapacityReservationFleets(this.ops["CancelCapacityReservationFleets"].applicator.apply(partialParams));
    }
    invokeCancelConversionTask(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelConversionTask(this.ops["CancelConversionTask"].applicator.apply(partialParams));
    }
    invokeCancelExportTask(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelExportTask(this.ops["CancelExportTask"].applicator.apply(partialParams));
    }
    invokeCancelReservedInstancesListing(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelReservedInstancesListing(this.ops["CancelReservedInstancesListing"].applicator.apply(partialParams));
    }
    invokeCancelSpotFleetRequests(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelSpotFleetRequests(this.ops["CancelSpotFleetRequests"].applicator.apply(partialParams));
    }
    invokeCancelSpotInstanceRequests(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelSpotInstanceRequests(this.ops["CancelSpotInstanceRequests"].applicator.apply(partialParams));
    }
    invokeConfirmProductInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.confirmProductInstance(this.ops["ConfirmProductInstance"].applicator.apply(partialParams));
    }
    invokeCopyFpgaImage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copyFpgaImage(this.ops["CopyFpgaImage"].applicator.apply(partialParams));
    }
    invokeCopyImage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copyImage(this.ops["CopyImage"].applicator.apply(partialParams));
    }
    invokeCopySnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copySnapshot(this.ops["CopySnapshot"].applicator.apply(partialParams));
    }
    invokeCreateCapacityReservation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCapacityReservation(this.ops["CreateCapacityReservation"].applicator.apply(partialParams));
    }
    invokeCreateCapacityReservationFleet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCapacityReservationFleet(this.ops["CreateCapacityReservationFleet"].applicator.apply(partialParams));
    }
    invokeCreateCarrierGateway(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCarrierGateway(this.ops["CreateCarrierGateway"].applicator.apply(partialParams));
    }
    invokeCreateClientVpnEndpoint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createClientVpnEndpoint(this.ops["CreateClientVpnEndpoint"].applicator.apply(partialParams));
    }
    invokeCreateClientVpnRoute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createClientVpnRoute(this.ops["CreateClientVpnRoute"].applicator.apply(partialParams));
    }
    invokeCreateCustomerGateway(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCustomerGateway(this.ops["CreateCustomerGateway"].applicator.apply(partialParams));
    }
    invokeCreateDefaultSubnet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDefaultSubnet(this.ops["CreateDefaultSubnet"].applicator.apply(partialParams));
    }
    invokeCreateDhcpOptions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDhcpOptions(this.ops["CreateDhcpOptions"].applicator.apply(partialParams));
    }
    invokeCreateEgressOnlyInternetGateway(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createEgressOnlyInternetGateway(this.ops["CreateEgressOnlyInternetGateway"].applicator.apply(partialParams));
    }
    invokeCreateFleet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFleet(this.ops["CreateFleet"].applicator.apply(partialParams));
    }
    invokeCreateFlowLogs(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFlowLogs(this.ops["CreateFlowLogs"].applicator.apply(partialParams));
    }
    invokeCreateFpgaImage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFpgaImage(this.ops["CreateFpgaImage"].applicator.apply(partialParams));
    }
    invokeCreateImage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createImage(this.ops["CreateImage"].applicator.apply(partialParams));
    }
    invokeCreateInstanceExportTask(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createInstanceExportTask(this.ops["CreateInstanceExportTask"].applicator.apply(partialParams));
    }
    invokeCreateIpamPool(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createIpamPool(this.ops["CreateIpamPool"].applicator.apply(partialParams));
    }
    invokeCreateIpamScope(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createIpamScope(this.ops["CreateIpamScope"].applicator.apply(partialParams));
    }
    invokeCreateKeyPair(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createKeyPair(this.ops["CreateKeyPair"].applicator.apply(partialParams));
    }
    invokeCreateLaunchTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createLaunchTemplate(this.ops["CreateLaunchTemplate"].applicator.apply(partialParams));
    }
    invokeCreateLaunchTemplateVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createLaunchTemplateVersion(this.ops["CreateLaunchTemplateVersion"].applicator.apply(partialParams));
    }
    invokeCreateLocalGatewayRoute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createLocalGatewayRoute(this.ops["CreateLocalGatewayRoute"].applicator.apply(partialParams));
    }
    invokeCreateLocalGatewayRouteTableVpcAssociation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createLocalGatewayRouteTableVpcAssociation(this.ops["CreateLocalGatewayRouteTableVpcAssociation"].applicator.apply(partialParams));
    }
    invokeCreateManagedPrefixList(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createManagedPrefixList(this.ops["CreateManagedPrefixList"].applicator.apply(partialParams));
    }
    invokeCreateNatGateway(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createNatGateway(this.ops["CreateNatGateway"].applicator.apply(partialParams));
    }
    invokeCreateNetworkAcl(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createNetworkAcl(this.ops["CreateNetworkAcl"].applicator.apply(partialParams));
    }
    invokeCreateNetworkAclEntry(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createNetworkAclEntry(this.ops["CreateNetworkAclEntry"].applicator.apply(partialParams));
    }
    invokeCreateNetworkInsightsAccessScope(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createNetworkInsightsAccessScope(this.ops["CreateNetworkInsightsAccessScope"].applicator.apply(partialParams));
    }
    invokeCreateNetworkInsightsPath(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createNetworkInsightsPath(this.ops["CreateNetworkInsightsPath"].applicator.apply(partialParams));
    }
    invokeCreateNetworkInterface(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createNetworkInterface(this.ops["CreateNetworkInterface"].applicator.apply(partialParams));
    }
    invokeCreateNetworkInterfacePermission(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createNetworkInterfacePermission(this.ops["CreateNetworkInterfacePermission"].applicator.apply(partialParams));
    }
    invokeCreateReplaceRootVolumeTask(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createReplaceRootVolumeTask(this.ops["CreateReplaceRootVolumeTask"].applicator.apply(partialParams));
    }
    invokeCreateReservedInstancesListing(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createReservedInstancesListing(this.ops["CreateReservedInstancesListing"].applicator.apply(partialParams));
    }
    invokeCreateRestoreImageTask(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRestoreImageTask(this.ops["CreateRestoreImageTask"].applicator.apply(partialParams));
    }
    invokeCreateRoute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRoute(this.ops["CreateRoute"].applicator.apply(partialParams));
    }
    invokeCreateRouteTable(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRouteTable(this.ops["CreateRouteTable"].applicator.apply(partialParams));
    }
    invokeCreateSecurityGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSecurityGroup(this.ops["CreateSecurityGroup"].applicator.apply(partialParams));
    }
    invokeCreateSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSnapshot(this.ops["CreateSnapshot"].applicator.apply(partialParams));
    }
    invokeCreateSnapshots(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSnapshots(this.ops["CreateSnapshots"].applicator.apply(partialParams));
    }
    invokeCreateSpotDatafeedSubscription(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSpotDatafeedSubscription(this.ops["CreateSpotDatafeedSubscription"].applicator.apply(partialParams));
    }
    invokeCreateStoreImageTask(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createStoreImageTask(this.ops["CreateStoreImageTask"].applicator.apply(partialParams));
    }
    invokeCreateSubnet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSubnet(this.ops["CreateSubnet"].applicator.apply(partialParams));
    }
    invokeCreateSubnetCidrReservation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSubnetCidrReservation(this.ops["CreateSubnetCidrReservation"].applicator.apply(partialParams));
    }
    invokeCreateTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTags(this.ops["CreateTags"].applicator.apply(partialParams));
    }
    invokeCreateTrafficMirrorFilterRule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTrafficMirrorFilterRule(this.ops["CreateTrafficMirrorFilterRule"].applicator.apply(partialParams));
    }
    invokeCreateTrafficMirrorSession(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTrafficMirrorSession(this.ops["CreateTrafficMirrorSession"].applicator.apply(partialParams));
    }
    invokeCreateTransitGatewayConnect(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTransitGatewayConnect(this.ops["CreateTransitGatewayConnect"].applicator.apply(partialParams));
    }
    invokeCreateTransitGatewayConnectPeer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTransitGatewayConnectPeer(this.ops["CreateTransitGatewayConnectPeer"].applicator.apply(partialParams));
    }
    invokeCreateTransitGatewayMulticastDomain(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTransitGatewayMulticastDomain(this.ops["CreateTransitGatewayMulticastDomain"].applicator.apply(partialParams));
    }
    invokeCreateTransitGatewayPeeringAttachment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTransitGatewayPeeringAttachment(this.ops["CreateTransitGatewayPeeringAttachment"].applicator.apply(partialParams));
    }
    invokeCreateTransitGatewayPrefixListReference(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTransitGatewayPrefixListReference(this.ops["CreateTransitGatewayPrefixListReference"].applicator.apply(partialParams));
    }
    invokeCreateTransitGatewayRoute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTransitGatewayRoute(this.ops["CreateTransitGatewayRoute"].applicator.apply(partialParams));
    }
    invokeCreateTransitGatewayRouteTable(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTransitGatewayRouteTable(this.ops["CreateTransitGatewayRouteTable"].applicator.apply(partialParams));
    }
    invokeCreateTransitGatewayVpcAttachment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTransitGatewayVpcAttachment(this.ops["CreateTransitGatewayVpcAttachment"].applicator.apply(partialParams));
    }
    invokeCreateVolume(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVolume(this.ops["CreateVolume"].applicator.apply(partialParams));
    }
    invokeCreateVpcEndpoint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVpcEndpoint(this.ops["CreateVpcEndpoint"].applicator.apply(partialParams));
    }
    invokeCreateVpcEndpointConnectionNotification(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVpcEndpointConnectionNotification(this.ops["CreateVpcEndpointConnectionNotification"].applicator.apply(partialParams));
    }
    invokeCreateVpnConnection(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVpnConnection(this.ops["CreateVpnConnection"].applicator.apply(partialParams));
    }
    invokeCreateVpnConnectionRoute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVpnConnectionRoute(this.ops["CreateVpnConnectionRoute"].applicator.apply(partialParams));
    }
    invokeCreateVpnGateway(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVpnGateway(this.ops["CreateVpnGateway"].applicator.apply(partialParams));
    }
    invokeDeleteCarrierGateway(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCarrierGateway(this.ops["DeleteCarrierGateway"].applicator.apply(partialParams));
    }
    invokeDeleteClientVpnEndpoint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteClientVpnEndpoint(this.ops["DeleteClientVpnEndpoint"].applicator.apply(partialParams));
    }
    invokeDeleteClientVpnRoute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteClientVpnRoute(this.ops["DeleteClientVpnRoute"].applicator.apply(partialParams));
    }
    invokeDeleteCustomerGateway(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCustomerGateway(this.ops["DeleteCustomerGateway"].applicator.apply(partialParams));
    }
    invokeDeleteDhcpOptions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDhcpOptions(this.ops["DeleteDhcpOptions"].applicator.apply(partialParams));
    }
    invokeDeleteEgressOnlyInternetGateway(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEgressOnlyInternetGateway(this.ops["DeleteEgressOnlyInternetGateway"].applicator.apply(partialParams));
    }
    invokeDeleteFleets(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFleets(this.ops["DeleteFleets"].applicator.apply(partialParams));
    }
    invokeDeleteFlowLogs(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFlowLogs(this.ops["DeleteFlowLogs"].applicator.apply(partialParams));
    }
    invokeDeleteFpgaImage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFpgaImage(this.ops["DeleteFpgaImage"].applicator.apply(partialParams));
    }
    invokeDeleteInstanceEventWindow(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteInstanceEventWindow(this.ops["DeleteInstanceEventWindow"].applicator.apply(partialParams));
    }
    invokeDeleteInternetGateway(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteInternetGateway(this.ops["DeleteInternetGateway"].applicator.apply(partialParams));
    }
    invokeDeleteIpam(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteIpam(this.ops["DeleteIpam"].applicator.apply(partialParams));
    }
    invokeDeleteIpamPool(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteIpamPool(this.ops["DeleteIpamPool"].applicator.apply(partialParams));
    }
    invokeDeleteIpamScope(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteIpamScope(this.ops["DeleteIpamScope"].applicator.apply(partialParams));
    }
    invokeDeleteLaunchTemplateVersions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteLaunchTemplateVersions(this.ops["DeleteLaunchTemplateVersions"].applicator.apply(partialParams));
    }
    invokeDeleteLocalGatewayRoute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteLocalGatewayRoute(this.ops["DeleteLocalGatewayRoute"].applicator.apply(partialParams));
    }
    invokeDeleteLocalGatewayRouteTableVpcAssociation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteLocalGatewayRouteTableVpcAssociation(this.ops["DeleteLocalGatewayRouteTableVpcAssociation"].applicator.apply(partialParams));
    }
    invokeDeleteManagedPrefixList(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteManagedPrefixList(this.ops["DeleteManagedPrefixList"].applicator.apply(partialParams));
    }
    invokeDeleteNatGateway(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteNatGateway(this.ops["DeleteNatGateway"].applicator.apply(partialParams));
    }
    invokeDeleteNetworkAcl(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteNetworkAcl(this.ops["DeleteNetworkAcl"].applicator.apply(partialParams));
    }
    invokeDeleteNetworkAclEntry(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteNetworkAclEntry(this.ops["DeleteNetworkAclEntry"].applicator.apply(partialParams));
    }
    invokeDeleteNetworkInsightsAccessScope(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteNetworkInsightsAccessScope(this.ops["DeleteNetworkInsightsAccessScope"].applicator.apply(partialParams));
    }
    invokeDeleteNetworkInsightsAccessScopeAnalysis(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteNetworkInsightsAccessScopeAnalysis(this.ops["DeleteNetworkInsightsAccessScopeAnalysis"].applicator.apply(partialParams));
    }
    invokeDeleteNetworkInsightsAnalysis(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteNetworkInsightsAnalysis(this.ops["DeleteNetworkInsightsAnalysis"].applicator.apply(partialParams));
    }
    invokeDeleteNetworkInsightsPath(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteNetworkInsightsPath(this.ops["DeleteNetworkInsightsPath"].applicator.apply(partialParams));
    }
    invokeDeleteNetworkInterface(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteNetworkInterface(this.ops["DeleteNetworkInterface"].applicator.apply(partialParams));
    }
    invokeDeleteNetworkInterfacePermission(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteNetworkInterfacePermission(this.ops["DeleteNetworkInterfacePermission"].applicator.apply(partialParams));
    }
    invokeDeletePlacementGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePlacementGroup(this.ops["DeletePlacementGroup"].applicator.apply(partialParams));
    }
    invokeDeletePublicIpv4Pool(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePublicIpv4Pool(this.ops["DeletePublicIpv4Pool"].applicator.apply(partialParams));
    }
    invokeDeleteQueuedReservedInstances(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteQueuedReservedInstances(this.ops["DeleteQueuedReservedInstances"].applicator.apply(partialParams));
    }
    invokeDeleteRoute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRoute(this.ops["DeleteRoute"].applicator.apply(partialParams));
    }
    invokeDeleteRouteTable(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRouteTable(this.ops["DeleteRouteTable"].applicator.apply(partialParams));
    }
    invokeDeleteSnapshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSnapshot(this.ops["DeleteSnapshot"].applicator.apply(partialParams));
    }
    invokeDeleteSubnet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSubnet(this.ops["DeleteSubnet"].applicator.apply(partialParams));
    }
    invokeDeleteSubnetCidrReservation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSubnetCidrReservation(this.ops["DeleteSubnetCidrReservation"].applicator.apply(partialParams));
    }
    invokeDeleteTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTags(this.ops["DeleteTags"].applicator.apply(partialParams));
    }
    invokeDeleteTrafficMirrorFilter(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTrafficMirrorFilter(this.ops["DeleteTrafficMirrorFilter"].applicator.apply(partialParams));
    }
    invokeDeleteTrafficMirrorFilterRule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTrafficMirrorFilterRule(this.ops["DeleteTrafficMirrorFilterRule"].applicator.apply(partialParams));
    }
    invokeDeleteTrafficMirrorSession(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTrafficMirrorSession(this.ops["DeleteTrafficMirrorSession"].applicator.apply(partialParams));
    }
    invokeDeleteTrafficMirrorTarget(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTrafficMirrorTarget(this.ops["DeleteTrafficMirrorTarget"].applicator.apply(partialParams));
    }
    invokeDeleteTransitGateway(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTransitGateway(this.ops["DeleteTransitGateway"].applicator.apply(partialParams));
    }
    invokeDeleteTransitGatewayConnect(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTransitGatewayConnect(this.ops["DeleteTransitGatewayConnect"].applicator.apply(partialParams));
    }
    invokeDeleteTransitGatewayConnectPeer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTransitGatewayConnectPeer(this.ops["DeleteTransitGatewayConnectPeer"].applicator.apply(partialParams));
    }
    invokeDeleteTransitGatewayMulticastDomain(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTransitGatewayMulticastDomain(this.ops["DeleteTransitGatewayMulticastDomain"].applicator.apply(partialParams));
    }
    invokeDeleteTransitGatewayPeeringAttachment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTransitGatewayPeeringAttachment(this.ops["DeleteTransitGatewayPeeringAttachment"].applicator.apply(partialParams));
    }
    invokeDeleteTransitGatewayPrefixListReference(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTransitGatewayPrefixListReference(this.ops["DeleteTransitGatewayPrefixListReference"].applicator.apply(partialParams));
    }
    invokeDeleteTransitGatewayRoute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTransitGatewayRoute(this.ops["DeleteTransitGatewayRoute"].applicator.apply(partialParams));
    }
    invokeDeleteTransitGatewayRouteTable(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTransitGatewayRouteTable(this.ops["DeleteTransitGatewayRouteTable"].applicator.apply(partialParams));
    }
    invokeDeleteTransitGatewayVpcAttachment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTransitGatewayVpcAttachment(this.ops["DeleteTransitGatewayVpcAttachment"].applicator.apply(partialParams));
    }
    invokeDeleteVolume(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVolume(this.ops["DeleteVolume"].applicator.apply(partialParams));
    }
    invokeDeleteVpc(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVpc(this.ops["DeleteVpc"].applicator.apply(partialParams));
    }
    invokeDeleteVpcEndpointConnectionNotifications(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVpcEndpointConnectionNotifications(this.ops["DeleteVpcEndpointConnectionNotifications"].applicator.apply(partialParams));
    }
    invokeDeleteVpcEndpointServiceConfigurations(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVpcEndpointServiceConfigurations(this.ops["DeleteVpcEndpointServiceConfigurations"].applicator.apply(partialParams));
    }
    invokeDeleteVpcEndpoints(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVpcEndpoints(this.ops["DeleteVpcEndpoints"].applicator.apply(partialParams));
    }
    invokeDeleteVpcPeeringConnection(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVpcPeeringConnection(this.ops["DeleteVpcPeeringConnection"].applicator.apply(partialParams));
    }
    invokeDeleteVpnConnection(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVpnConnection(this.ops["DeleteVpnConnection"].applicator.apply(partialParams));
    }
    invokeDeleteVpnConnectionRoute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVpnConnectionRoute(this.ops["DeleteVpnConnectionRoute"].applicator.apply(partialParams));
    }
    invokeDeleteVpnGateway(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVpnGateway(this.ops["DeleteVpnGateway"].applicator.apply(partialParams));
    }
    invokeDeprovisionByoipCidr(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deprovisionByoipCidr(this.ops["DeprovisionByoipCidr"].applicator.apply(partialParams));
    }
    invokeDeprovisionIpamPoolCidr(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deprovisionIpamPoolCidr(this.ops["DeprovisionIpamPoolCidr"].applicator.apply(partialParams));
    }
    invokeDeprovisionPublicIpv4PoolCidr(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deprovisionPublicIpv4PoolCidr(this.ops["DeprovisionPublicIpv4PoolCidr"].applicator.apply(partialParams));
    }
    invokeDeregisterImage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterImage(this.ops["DeregisterImage"].applicator.apply(partialParams));
    }
    invokeDescribeByoipCidrs(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeByoipCidrs(this.ops["DescribeByoipCidrs"].applicator.apply(partialParams));
    }
    invokeDescribeClientVpnAuthorizationRules(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeClientVpnAuthorizationRules(this.ops["DescribeClientVpnAuthorizationRules"].applicator.apply(partialParams));
    }
    invokeDescribeClientVpnConnections(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeClientVpnConnections(this.ops["DescribeClientVpnConnections"].applicator.apply(partialParams));
    }
    invokeDescribeClientVpnRoutes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeClientVpnRoutes(this.ops["DescribeClientVpnRoutes"].applicator.apply(partialParams));
    }
    invokeDescribeClientVpnTargetNetworks(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeClientVpnTargetNetworks(this.ops["DescribeClientVpnTargetNetworks"].applicator.apply(partialParams));
    }
    invokeDescribeFleetHistory(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFleetHistory(this.ops["DescribeFleetHistory"].applicator.apply(partialParams));
    }
    invokeDescribeFleetInstances(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFleetInstances(this.ops["DescribeFleetInstances"].applicator.apply(partialParams));
    }
    invokeDescribeFpgaImageAttribute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFpgaImageAttribute(this.ops["DescribeFpgaImageAttribute"].applicator.apply(partialParams));
    }
    invokeDescribeIdentityIdFormat(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeIdentityIdFormat(this.ops["DescribeIdentityIdFormat"].applicator.apply(partialParams));
    }
    invokeDescribeImageAttribute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeImageAttribute(this.ops["DescribeImageAttribute"].applicator.apply(partialParams));
    }
    invokeDescribeInstanceAttribute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeInstanceAttribute(this.ops["DescribeInstanceAttribute"].applicator.apply(partialParams));
    }
    invokeDescribeNetworkInterfaceAttribute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeNetworkInterfaceAttribute(this.ops["DescribeNetworkInterfaceAttribute"].applicator.apply(partialParams));
    }
    invokeDescribeScheduledInstanceAvailability(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeScheduledInstanceAvailability(this.ops["DescribeScheduledInstanceAvailability"].applicator.apply(partialParams));
    }
    invokeDescribeSecurityGroupReferences(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeSecurityGroupReferences(this.ops["DescribeSecurityGroupReferences"].applicator.apply(partialParams));
    }
    invokeDescribeSnapshotAttribute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeSnapshotAttribute(this.ops["DescribeSnapshotAttribute"].applicator.apply(partialParams));
    }
    invokeDescribeSpotFleetInstances(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeSpotFleetInstances(this.ops["DescribeSpotFleetInstances"].applicator.apply(partialParams));
    }
    invokeDescribeSpotFleetRequestHistory(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeSpotFleetRequestHistory(this.ops["DescribeSpotFleetRequestHistory"].applicator.apply(partialParams));
    }
    invokeDescribeStaleSecurityGroups(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeStaleSecurityGroups(this.ops["DescribeStaleSecurityGroups"].applicator.apply(partialParams));
    }
    invokeDescribeVolumeAttribute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeVolumeAttribute(this.ops["DescribeVolumeAttribute"].applicator.apply(partialParams));
    }
    invokeDescribeVpcAttribute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeVpcAttribute(this.ops["DescribeVpcAttribute"].applicator.apply(partialParams));
    }
    invokeDescribeVpcEndpointServicePermissions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeVpcEndpointServicePermissions(this.ops["DescribeVpcEndpointServicePermissions"].applicator.apply(partialParams));
    }
    invokeDetachClassicLinkVpc(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachClassicLinkVpc(this.ops["DetachClassicLinkVpc"].applicator.apply(partialParams));
    }
    invokeDetachInternetGateway(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachInternetGateway(this.ops["DetachInternetGateway"].applicator.apply(partialParams));
    }
    invokeDetachNetworkInterface(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachNetworkInterface(this.ops["DetachNetworkInterface"].applicator.apply(partialParams));
    }
    invokeDetachVolume(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachVolume(this.ops["DetachVolume"].applicator.apply(partialParams));
    }
    invokeDetachVpnGateway(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachVpnGateway(this.ops["DetachVpnGateway"].applicator.apply(partialParams));
    }
    invokeDisableFastLaunch(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableFastLaunch(this.ops["DisableFastLaunch"].applicator.apply(partialParams));
    }
    invokeDisableFastSnapshotRestores(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableFastSnapshotRestores(this.ops["DisableFastSnapshotRestores"].applicator.apply(partialParams));
    }
    invokeDisableImageDeprecation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableImageDeprecation(this.ops["DisableImageDeprecation"].applicator.apply(partialParams));
    }
    invokeDisableIpamOrganizationAdminAccount(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableIpamOrganizationAdminAccount(this.ops["DisableIpamOrganizationAdminAccount"].applicator.apply(partialParams));
    }
    invokeDisableTransitGatewayRouteTablePropagation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableTransitGatewayRouteTablePropagation(this.ops["DisableTransitGatewayRouteTablePropagation"].applicator.apply(partialParams));
    }
    invokeDisableVgwRoutePropagation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableVgwRoutePropagation(this.ops["DisableVgwRoutePropagation"].applicator.apply(partialParams));
    }
    invokeDisableVpcClassicLink(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableVpcClassicLink(this.ops["DisableVpcClassicLink"].applicator.apply(partialParams));
    }
    invokeDisassociateClientVpnTargetNetwork(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateClientVpnTargetNetwork(this.ops["DisassociateClientVpnTargetNetwork"].applicator.apply(partialParams));
    }
    invokeDisassociateIamInstanceProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateIamInstanceProfile(this.ops["DisassociateIamInstanceProfile"].applicator.apply(partialParams));
    }
    invokeDisassociateInstanceEventWindow(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateInstanceEventWindow(this.ops["DisassociateInstanceEventWindow"].applicator.apply(partialParams));
    }
    invokeDisassociateRouteTable(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateRouteTable(this.ops["DisassociateRouteTable"].applicator.apply(partialParams));
    }
    invokeDisassociateSubnetCidrBlock(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateSubnetCidrBlock(this.ops["DisassociateSubnetCidrBlock"].applicator.apply(partialParams));
    }
    invokeDisassociateTransitGatewayRouteTable(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateTransitGatewayRouteTable(this.ops["DisassociateTransitGatewayRouteTable"].applicator.apply(partialParams));
    }
    invokeDisassociateTrunkInterface(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateTrunkInterface(this.ops["DisassociateTrunkInterface"].applicator.apply(partialParams));
    }
    invokeDisassociateVpcCidrBlock(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateVpcCidrBlock(this.ops["DisassociateVpcCidrBlock"].applicator.apply(partialParams));
    }
    invokeEnableFastLaunch(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableFastLaunch(this.ops["EnableFastLaunch"].applicator.apply(partialParams));
    }
    invokeEnableFastSnapshotRestores(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableFastSnapshotRestores(this.ops["EnableFastSnapshotRestores"].applicator.apply(partialParams));
    }
    invokeEnableImageDeprecation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableImageDeprecation(this.ops["EnableImageDeprecation"].applicator.apply(partialParams));
    }
    invokeEnableIpamOrganizationAdminAccount(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableIpamOrganizationAdminAccount(this.ops["EnableIpamOrganizationAdminAccount"].applicator.apply(partialParams));
    }
    invokeEnableTransitGatewayRouteTablePropagation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableTransitGatewayRouteTablePropagation(this.ops["EnableTransitGatewayRouteTablePropagation"].applicator.apply(partialParams));
    }
    invokeEnableVgwRoutePropagation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableVgwRoutePropagation(this.ops["EnableVgwRoutePropagation"].applicator.apply(partialParams));
    }
    invokeEnableVolumeIO(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableVolumeIO(this.ops["EnableVolumeIO"].applicator.apply(partialParams));
    }
    invokeEnableVpcClassicLink(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableVpcClassicLink(this.ops["EnableVpcClassicLink"].applicator.apply(partialParams));
    }
    invokeExportClientVpnClientCertificateRevocationList(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.exportClientVpnClientCertificateRevocationList(this.ops["ExportClientVpnClientCertificateRevocationList"].applicator.apply(partialParams));
    }
    invokeExportClientVpnClientConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.exportClientVpnClientConfiguration(this.ops["ExportClientVpnClientConfiguration"].applicator.apply(partialParams));
    }
    invokeExportImage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.exportImage(this.ops["ExportImage"].applicator.apply(partialParams));
    }
    invokeExportTransitGatewayRoutes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.exportTransitGatewayRoutes(this.ops["ExportTransitGatewayRoutes"].applicator.apply(partialParams));
    }
    invokeGetAssociatedIpv6PoolCidrs(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAssociatedIpv6PoolCidrs(this.ops["GetAssociatedIpv6PoolCidrs"].applicator.apply(partialParams));
    }
    invokeGetCapacityReservationUsage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCapacityReservationUsage(this.ops["GetCapacityReservationUsage"].applicator.apply(partialParams));
    }
    invokeGetCoipPoolUsage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCoipPoolUsage(this.ops["GetCoipPoolUsage"].applicator.apply(partialParams));
    }
    invokeGetConsoleOutput(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getConsoleOutput(this.ops["GetConsoleOutput"].applicator.apply(partialParams));
    }
    invokeGetConsoleScreenshot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getConsoleScreenshot(this.ops["GetConsoleScreenshot"].applicator.apply(partialParams));
    }
    invokeGetDefaultCreditSpecification(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDefaultCreditSpecification(this.ops["GetDefaultCreditSpecification"].applicator.apply(partialParams));
    }
    invokeGetFlowLogsIntegrationTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFlowLogsIntegrationTemplate(this.ops["GetFlowLogsIntegrationTemplate"].applicator.apply(partialParams));
    }
    invokeGetGroupsForCapacityReservation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getGroupsForCapacityReservation(this.ops["GetGroupsForCapacityReservation"].applicator.apply(partialParams));
    }
    invokeGetHostReservationPurchasePreview(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getHostReservationPurchasePreview(this.ops["GetHostReservationPurchasePreview"].applicator.apply(partialParams));
    }
    invokeGetInstanceTypesFromInstanceRequirements(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInstanceTypesFromInstanceRequirements(this.ops["GetInstanceTypesFromInstanceRequirements"].applicator.apply(partialParams));
    }
    invokeGetIpamAddressHistory(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getIpamAddressHistory(this.ops["GetIpamAddressHistory"].applicator.apply(partialParams));
    }
    invokeGetIpamPoolAllocations(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getIpamPoolAllocations(this.ops["GetIpamPoolAllocations"].applicator.apply(partialParams));
    }
    invokeGetIpamPoolCidrs(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getIpamPoolCidrs(this.ops["GetIpamPoolCidrs"].applicator.apply(partialParams));
    }
    invokeGetIpamResourceCidrs(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getIpamResourceCidrs(this.ops["GetIpamResourceCidrs"].applicator.apply(partialParams));
    }
    invokeGetLaunchTemplateData(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getLaunchTemplateData(this.ops["GetLaunchTemplateData"].applicator.apply(partialParams));
    }
    invokeGetManagedPrefixListAssociations(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getManagedPrefixListAssociations(this.ops["GetManagedPrefixListAssociations"].applicator.apply(partialParams));
    }
    invokeGetManagedPrefixListEntries(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getManagedPrefixListEntries(this.ops["GetManagedPrefixListEntries"].applicator.apply(partialParams));
    }
    invokeGetNetworkInsightsAccessScopeAnalysisFindings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getNetworkInsightsAccessScopeAnalysisFindings(this.ops["GetNetworkInsightsAccessScopeAnalysisFindings"].applicator.apply(partialParams));
    }
    invokeGetNetworkInsightsAccessScopeContent(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getNetworkInsightsAccessScopeContent(this.ops["GetNetworkInsightsAccessScopeContent"].applicator.apply(partialParams));
    }
    invokeGetPasswordData(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPasswordData(this.ops["GetPasswordData"].applicator.apply(partialParams));
    }
    invokeGetReservedInstancesExchangeQuote(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getReservedInstancesExchangeQuote(this.ops["GetReservedInstancesExchangeQuote"].applicator.apply(partialParams));
    }
    invokeGetSpotPlacementScores(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSpotPlacementScores(this.ops["GetSpotPlacementScores"].applicator.apply(partialParams));
    }
    invokeGetSubnetCidrReservations(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSubnetCidrReservations(this.ops["GetSubnetCidrReservations"].applicator.apply(partialParams));
    }
    invokeGetTransitGatewayAttachmentPropagations(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTransitGatewayAttachmentPropagations(this.ops["GetTransitGatewayAttachmentPropagations"].applicator.apply(partialParams));
    }
    invokeGetTransitGatewayPrefixListReferences(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTransitGatewayPrefixListReferences(this.ops["GetTransitGatewayPrefixListReferences"].applicator.apply(partialParams));
    }
    invokeGetTransitGatewayRouteTableAssociations(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTransitGatewayRouteTableAssociations(this.ops["GetTransitGatewayRouteTableAssociations"].applicator.apply(partialParams));
    }
    invokeGetTransitGatewayRouteTablePropagations(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTransitGatewayRouteTablePropagations(this.ops["GetTransitGatewayRouteTablePropagations"].applicator.apply(partialParams));
    }
    invokeGetVpnConnectionDeviceSampleConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVpnConnectionDeviceSampleConfiguration(this.ops["GetVpnConnectionDeviceSampleConfiguration"].applicator.apply(partialParams));
    }
    invokeImportClientVpnClientCertificateRevocationList(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importClientVpnClientCertificateRevocationList(this.ops["ImportClientVpnClientCertificateRevocationList"].applicator.apply(partialParams));
    }
    invokeImportInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importInstance(this.ops["ImportInstance"].applicator.apply(partialParams));
    }
    invokeImportKeyPair(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importKeyPair(this.ops["ImportKeyPair"].applicator.apply(partialParams));
    }
    invokeImportVolume(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importVolume(this.ops["ImportVolume"].applicator.apply(partialParams));
    }
    invokeModifyAddressAttribute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyAddressAttribute(this.ops["ModifyAddressAttribute"].applicator.apply(partialParams));
    }
    invokeModifyAvailabilityZoneGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyAvailabilityZoneGroup(this.ops["ModifyAvailabilityZoneGroup"].applicator.apply(partialParams));
    }
    invokeModifyCapacityReservation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyCapacityReservation(this.ops["ModifyCapacityReservation"].applicator.apply(partialParams));
    }
    invokeModifyCapacityReservationFleet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyCapacityReservationFleet(this.ops["ModifyCapacityReservationFleet"].applicator.apply(partialParams));
    }
    invokeModifyClientVpnEndpoint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyClientVpnEndpoint(this.ops["ModifyClientVpnEndpoint"].applicator.apply(partialParams));
    }
    invokeModifyDefaultCreditSpecification(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDefaultCreditSpecification(this.ops["ModifyDefaultCreditSpecification"].applicator.apply(partialParams));
    }
    invokeModifyEbsDefaultKmsKeyId(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyEbsDefaultKmsKeyId(this.ops["ModifyEbsDefaultKmsKeyId"].applicator.apply(partialParams));
    }
    invokeModifyFleet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyFleet(this.ops["ModifyFleet"].applicator.apply(partialParams));
    }
    invokeModifyFpgaImageAttribute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyFpgaImageAttribute(this.ops["ModifyFpgaImageAttribute"].applicator.apply(partialParams));
    }
    invokeModifyHosts(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyHosts(this.ops["ModifyHosts"].applicator.apply(partialParams));
    }
    invokeModifyIdFormat(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyIdFormat(this.ops["ModifyIdFormat"].applicator.apply(partialParams));
    }
    invokeModifyIdentityIdFormat(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyIdentityIdFormat(this.ops["ModifyIdentityIdFormat"].applicator.apply(partialParams));
    }
    invokeModifyImageAttribute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyImageAttribute(this.ops["ModifyImageAttribute"].applicator.apply(partialParams));
    }
    invokeModifyInstanceAttribute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyInstanceAttribute(this.ops["ModifyInstanceAttribute"].applicator.apply(partialParams));
    }
    invokeModifyInstanceCapacityReservationAttributes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyInstanceCapacityReservationAttributes(this.ops["ModifyInstanceCapacityReservationAttributes"].applicator.apply(partialParams));
    }
    invokeModifyInstanceCreditSpecification(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyInstanceCreditSpecification(this.ops["ModifyInstanceCreditSpecification"].applicator.apply(partialParams));
    }
    invokeModifyInstanceEventStartTime(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyInstanceEventStartTime(this.ops["ModifyInstanceEventStartTime"].applicator.apply(partialParams));
    }
    invokeModifyInstanceEventWindow(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyInstanceEventWindow(this.ops["ModifyInstanceEventWindow"].applicator.apply(partialParams));
    }
    invokeModifyInstanceMetadataOptions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyInstanceMetadataOptions(this.ops["ModifyInstanceMetadataOptions"].applicator.apply(partialParams));
    }
    invokeModifyInstancePlacement(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyInstancePlacement(this.ops["ModifyInstancePlacement"].applicator.apply(partialParams));
    }
    invokeModifyIpam(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyIpam(this.ops["ModifyIpam"].applicator.apply(partialParams));
    }
    invokeModifyIpamPool(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyIpamPool(this.ops["ModifyIpamPool"].applicator.apply(partialParams));
    }
    invokeModifyIpamResourceCidr(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyIpamResourceCidr(this.ops["ModifyIpamResourceCidr"].applicator.apply(partialParams));
    }
    invokeModifyIpamScope(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyIpamScope(this.ops["ModifyIpamScope"].applicator.apply(partialParams));
    }
    invokeModifyManagedPrefixList(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyManagedPrefixList(this.ops["ModifyManagedPrefixList"].applicator.apply(partialParams));
    }
    invokeModifyNetworkInterfaceAttribute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyNetworkInterfaceAttribute(this.ops["ModifyNetworkInterfaceAttribute"].applicator.apply(partialParams));
    }
    invokeModifyReservedInstances(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyReservedInstances(this.ops["ModifyReservedInstances"].applicator.apply(partialParams));
    }
    invokeModifySecurityGroupRules(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifySecurityGroupRules(this.ops["ModifySecurityGroupRules"].applicator.apply(partialParams));
    }
    invokeModifySnapshotAttribute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifySnapshotAttribute(this.ops["ModifySnapshotAttribute"].applicator.apply(partialParams));
    }
    invokeModifySnapshotTier(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifySnapshotTier(this.ops["ModifySnapshotTier"].applicator.apply(partialParams));
    }
    invokeModifySpotFleetRequest(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifySpotFleetRequest(this.ops["ModifySpotFleetRequest"].applicator.apply(partialParams));
    }
    invokeModifySubnetAttribute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifySubnetAttribute(this.ops["ModifySubnetAttribute"].applicator.apply(partialParams));
    }
    invokeModifyTrafficMirrorFilterNetworkServices(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyTrafficMirrorFilterNetworkServices(this.ops["ModifyTrafficMirrorFilterNetworkServices"].applicator.apply(partialParams));
    }
    invokeModifyTrafficMirrorFilterRule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyTrafficMirrorFilterRule(this.ops["ModifyTrafficMirrorFilterRule"].applicator.apply(partialParams));
    }
    invokeModifyTrafficMirrorSession(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyTrafficMirrorSession(this.ops["ModifyTrafficMirrorSession"].applicator.apply(partialParams));
    }
    invokeModifyTransitGateway(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyTransitGateway(this.ops["ModifyTransitGateway"].applicator.apply(partialParams));
    }
    invokeModifyTransitGatewayPrefixListReference(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyTransitGatewayPrefixListReference(this.ops["ModifyTransitGatewayPrefixListReference"].applicator.apply(partialParams));
    }
    invokeModifyTransitGatewayVpcAttachment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyTransitGatewayVpcAttachment(this.ops["ModifyTransitGatewayVpcAttachment"].applicator.apply(partialParams));
    }
    invokeModifyVolume(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyVolume(this.ops["ModifyVolume"].applicator.apply(partialParams));
    }
    invokeModifyVolumeAttribute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyVolumeAttribute(this.ops["ModifyVolumeAttribute"].applicator.apply(partialParams));
    }
    invokeModifyVpcAttribute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyVpcAttribute(this.ops["ModifyVpcAttribute"].applicator.apply(partialParams));
    }
    invokeModifyVpcEndpoint(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyVpcEndpoint(this.ops["ModifyVpcEndpoint"].applicator.apply(partialParams));
    }
    invokeModifyVpcEndpointConnectionNotification(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyVpcEndpointConnectionNotification(this.ops["ModifyVpcEndpointConnectionNotification"].applicator.apply(partialParams));
    }
    invokeModifyVpcEndpointServiceConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyVpcEndpointServiceConfiguration(this.ops["ModifyVpcEndpointServiceConfiguration"].applicator.apply(partialParams));
    }
    invokeModifyVpcEndpointServicePayerResponsibility(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyVpcEndpointServicePayerResponsibility(this.ops["ModifyVpcEndpointServicePayerResponsibility"].applicator.apply(partialParams));
    }
    invokeModifyVpcEndpointServicePermissions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyVpcEndpointServicePermissions(this.ops["ModifyVpcEndpointServicePermissions"].applicator.apply(partialParams));
    }
    invokeModifyVpcPeeringConnectionOptions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyVpcPeeringConnectionOptions(this.ops["ModifyVpcPeeringConnectionOptions"].applicator.apply(partialParams));
    }
    invokeModifyVpcTenancy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyVpcTenancy(this.ops["ModifyVpcTenancy"].applicator.apply(partialParams));
    }
    invokeModifyVpnConnection(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyVpnConnection(this.ops["ModifyVpnConnection"].applicator.apply(partialParams));
    }
    invokeModifyVpnConnectionOptions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyVpnConnectionOptions(this.ops["ModifyVpnConnectionOptions"].applicator.apply(partialParams));
    }
    invokeModifyVpnTunnelCertificate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyVpnTunnelCertificate(this.ops["ModifyVpnTunnelCertificate"].applicator.apply(partialParams));
    }
    invokeModifyVpnTunnelOptions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyVpnTunnelOptions(this.ops["ModifyVpnTunnelOptions"].applicator.apply(partialParams));
    }
    invokeMonitorInstances(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.monitorInstances(this.ops["MonitorInstances"].applicator.apply(partialParams));
    }
    invokeMoveAddressToVpc(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.moveAddressToVpc(this.ops["MoveAddressToVpc"].applicator.apply(partialParams));
    }
    invokeMoveByoipCidrToIpam(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.moveByoipCidrToIpam(this.ops["MoveByoipCidrToIpam"].applicator.apply(partialParams));
    }
    invokeProvisionByoipCidr(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.provisionByoipCidr(this.ops["ProvisionByoipCidr"].applicator.apply(partialParams));
    }
    invokeProvisionIpamPoolCidr(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.provisionIpamPoolCidr(this.ops["ProvisionIpamPoolCidr"].applicator.apply(partialParams));
    }
    invokeProvisionPublicIpv4PoolCidr(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.provisionPublicIpv4PoolCidr(this.ops["ProvisionPublicIpv4PoolCidr"].applicator.apply(partialParams));
    }
    invokePurchaseHostReservation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.purchaseHostReservation(this.ops["PurchaseHostReservation"].applicator.apply(partialParams));
    }
    invokePurchaseReservedInstancesOffering(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.purchaseReservedInstancesOffering(this.ops["PurchaseReservedInstancesOffering"].applicator.apply(partialParams));
    }
    invokePurchaseScheduledInstances(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.purchaseScheduledInstances(this.ops["PurchaseScheduledInstances"].applicator.apply(partialParams));
    }
    invokeRebootInstances(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rebootInstances(this.ops["RebootInstances"].applicator.apply(partialParams));
    }
    invokeRegisterImage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerImage(this.ops["RegisterImage"].applicator.apply(partialParams));
    }
    invokeRejectTransitGatewayPeeringAttachment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rejectTransitGatewayPeeringAttachment(this.ops["RejectTransitGatewayPeeringAttachment"].applicator.apply(partialParams));
    }
    invokeRejectTransitGatewayVpcAttachment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rejectTransitGatewayVpcAttachment(this.ops["RejectTransitGatewayVpcAttachment"].applicator.apply(partialParams));
    }
    invokeRejectVpcEndpointConnections(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rejectVpcEndpointConnections(this.ops["RejectVpcEndpointConnections"].applicator.apply(partialParams));
    }
    invokeRejectVpcPeeringConnection(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rejectVpcPeeringConnection(this.ops["RejectVpcPeeringConnection"].applicator.apply(partialParams));
    }
    invokeReleaseHosts(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.releaseHosts(this.ops["ReleaseHosts"].applicator.apply(partialParams));
    }
    invokeReleaseIpamPoolAllocation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.releaseIpamPoolAllocation(this.ops["ReleaseIpamPoolAllocation"].applicator.apply(partialParams));
    }
    invokeReplaceIamInstanceProfileAssociation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.replaceIamInstanceProfileAssociation(this.ops["ReplaceIamInstanceProfileAssociation"].applicator.apply(partialParams));
    }
    invokeReplaceNetworkAclAssociation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.replaceNetworkAclAssociation(this.ops["ReplaceNetworkAclAssociation"].applicator.apply(partialParams));
    }
    invokeReplaceNetworkAclEntry(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.replaceNetworkAclEntry(this.ops["ReplaceNetworkAclEntry"].applicator.apply(partialParams));
    }
    invokeReplaceRoute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.replaceRoute(this.ops["ReplaceRoute"].applicator.apply(partialParams));
    }
    invokeReplaceRouteTableAssociation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.replaceRouteTableAssociation(this.ops["ReplaceRouteTableAssociation"].applicator.apply(partialParams));
    }
    invokeReplaceTransitGatewayRoute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.replaceTransitGatewayRoute(this.ops["ReplaceTransitGatewayRoute"].applicator.apply(partialParams));
    }
    invokeReportInstanceStatus(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.reportInstanceStatus(this.ops["ReportInstanceStatus"].applicator.apply(partialParams));
    }
    invokeRequestSpotFleet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.requestSpotFleet(this.ops["RequestSpotFleet"].applicator.apply(partialParams));
    }
    invokeResetAddressAttribute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetAddressAttribute(this.ops["ResetAddressAttribute"].applicator.apply(partialParams));
    }
    invokeResetFpgaImageAttribute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetFpgaImageAttribute(this.ops["ResetFpgaImageAttribute"].applicator.apply(partialParams));
    }
    invokeResetImageAttribute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetImageAttribute(this.ops["ResetImageAttribute"].applicator.apply(partialParams));
    }
    invokeResetInstanceAttribute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetInstanceAttribute(this.ops["ResetInstanceAttribute"].applicator.apply(partialParams));
    }
    invokeResetNetworkInterfaceAttribute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetNetworkInterfaceAttribute(this.ops["ResetNetworkInterfaceAttribute"].applicator.apply(partialParams));
    }
    invokeResetSnapshotAttribute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetSnapshotAttribute(this.ops["ResetSnapshotAttribute"].applicator.apply(partialParams));
    }
    invokeRestoreAddressToClassic(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreAddressToClassic(this.ops["RestoreAddressToClassic"].applicator.apply(partialParams));
    }
    invokeRestoreImageFromRecycleBin(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreImageFromRecycleBin(this.ops["RestoreImageFromRecycleBin"].applicator.apply(partialParams));
    }
    invokeRestoreManagedPrefixListVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreManagedPrefixListVersion(this.ops["RestoreManagedPrefixListVersion"].applicator.apply(partialParams));
    }
    invokeRestoreSnapshotFromRecycleBin(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreSnapshotFromRecycleBin(this.ops["RestoreSnapshotFromRecycleBin"].applicator.apply(partialParams));
    }
    invokeRestoreSnapshotTier(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreSnapshotTier(this.ops["RestoreSnapshotTier"].applicator.apply(partialParams));
    }
    invokeRevokeClientVpnIngress(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.revokeClientVpnIngress(this.ops["RevokeClientVpnIngress"].applicator.apply(partialParams));
    }
    invokeRevokeSecurityGroupEgress(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.revokeSecurityGroupEgress(this.ops["RevokeSecurityGroupEgress"].applicator.apply(partialParams));
    }
    invokeRunInstances(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.runInstances(this.ops["RunInstances"].applicator.apply(partialParams));
    }
    invokeRunScheduledInstances(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.runScheduledInstances(this.ops["RunScheduledInstances"].applicator.apply(partialParams));
    }
    invokeSearchLocalGatewayRoutes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.searchLocalGatewayRoutes(this.ops["SearchLocalGatewayRoutes"].applicator.apply(partialParams));
    }
    invokeSearchTransitGatewayRoutes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.searchTransitGatewayRoutes(this.ops["SearchTransitGatewayRoutes"].applicator.apply(partialParams));
    }
    invokeSendDiagnosticInterrupt(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.sendDiagnosticInterrupt(this.ops["SendDiagnosticInterrupt"].applicator.apply(partialParams));
    }
    invokeStartInstances(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startInstances(this.ops["StartInstances"].applicator.apply(partialParams));
    }
    invokeStartNetworkInsightsAccessScopeAnalysis(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startNetworkInsightsAccessScopeAnalysis(this.ops["StartNetworkInsightsAccessScopeAnalysis"].applicator.apply(partialParams));
    }
    invokeStartNetworkInsightsAnalysis(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startNetworkInsightsAnalysis(this.ops["StartNetworkInsightsAnalysis"].applicator.apply(partialParams));
    }
    invokeStartVpcEndpointServicePrivateDnsVerification(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startVpcEndpointServicePrivateDnsVerification(this.ops["StartVpcEndpointServicePrivateDnsVerification"].applicator.apply(partialParams));
    }
    invokeStopInstances(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopInstances(this.ops["StopInstances"].applicator.apply(partialParams));
    }
    invokeTerminateClientVpnConnections(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.terminateClientVpnConnections(this.ops["TerminateClientVpnConnections"].applicator.apply(partialParams));
    }
    invokeTerminateInstances(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.terminateInstances(this.ops["TerminateInstances"].applicator.apply(partialParams));
    }
    invokeUnassignIpv6Addresses(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.unassignIpv6Addresses(this.ops["UnassignIpv6Addresses"].applicator.apply(partialParams));
    }
    invokeUnassignPrivateIpAddresses(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.unassignPrivateIpAddresses(this.ops["UnassignPrivateIpAddresses"].applicator.apply(partialParams));
    }
    invokeUnmonitorInstances(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.unmonitorInstances(this.ops["UnmonitorInstances"].applicator.apply(partialParams));
    }
    invokeWithdrawByoipCidr(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.withdrawByoipCidr(this.ops["WithdrawByoipCidr"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
