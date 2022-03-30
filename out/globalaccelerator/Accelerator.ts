
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    AddCustomRoutingEndpointsRequest,
    AdvertiseByoipCidrRequest,
    AllowCustomRoutingTrafficRequest,
    CreateAcceleratorRequest,
    CreateCustomRoutingAcceleratorRequest,
    CreateCustomRoutingEndpointGroupRequest,
    CreateCustomRoutingListenerRequest,
    CreateEndpointGroupRequest,
    CreateListenerRequest,
    DeleteAcceleratorRequest,
    DeleteCustomRoutingAcceleratorRequest,
    DeleteCustomRoutingEndpointGroupRequest,
    DeleteCustomRoutingListenerRequest,
    DeleteEndpointGroupRequest,
    DeleteListenerRequest,
    DenyCustomRoutingTrafficRequest,
    DeprovisionByoipCidrRequest,
    DescribeAcceleratorRequest,
    DescribeAcceleratorAttributesRequest,
    DescribeCustomRoutingAcceleratorRequest,
    DescribeCustomRoutingAcceleratorAttributesRequest,
    DescribeCustomRoutingEndpointGroupRequest,
    DescribeCustomRoutingListenerRequest,
    DescribeEndpointGroupRequest,
    DescribeListenerRequest,
    ListCustomRoutingEndpointGroupsRequest,
    ListCustomRoutingListenersRequest,
    ListCustomRoutingPortMappingsRequest,
    ListCustomRoutingPortMappingsByDestinationRequest,
    ListEndpointGroupsRequest,
    ListListenersRequest,
    ListTagsForResourceRequest,
    ProvisionByoipCidrRequest,
    RemoveCustomRoutingEndpointsRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateAcceleratorRequest,
    UpdateAcceleratorAttributesRequest,
    UpdateCustomRoutingAcceleratorRequest,
    UpdateCustomRoutingAcceleratorAttributesRequest,
    UpdateCustomRoutingListenerRequest,
    UpdateEndpointGroupRequest,
    UpdateListenerRequest,
    WithdrawByoipCidrRequest,
    AddCustomRoutingEndpointsResponse,
    AdvertiseByoipCidrResponse,
    CreateAcceleratorResponse,
    CreateCustomRoutingAcceleratorResponse,
    CreateCustomRoutingEndpointGroupResponse,
    CreateCustomRoutingListenerResponse,
    CreateEndpointGroupResponse,
    CreateListenerResponse,
    DeprovisionByoipCidrResponse,
    DescribeAcceleratorResponse,
    DescribeAcceleratorAttributesResponse,
    DescribeCustomRoutingAcceleratorResponse,
    DescribeCustomRoutingAcceleratorAttributesResponse,
    DescribeCustomRoutingEndpointGroupResponse,
    DescribeCustomRoutingListenerResponse,
    DescribeEndpointGroupResponse,
    DescribeListenerResponse,
    ListCustomRoutingEndpointGroupsResponse,
    ListCustomRoutingListenersResponse,
    ListCustomRoutingPortMappingsResponse,
    ListCustomRoutingPortMappingsByDestinationResponse,
    ListEndpointGroupsResponse,
    ListListenersResponse,
    ListTagsForResourceResponse,
    ProvisionByoipCidrResponse,
    TagResourceResponse,
    UntagResourceResponse,
    UpdateAcceleratorResponse,
    UpdateAcceleratorAttributesResponse,
    UpdateCustomRoutingAcceleratorResponse,
    UpdateCustomRoutingAcceleratorAttributesResponse,
    UpdateCustomRoutingListenerResponse,
    UpdateEndpointGroupResponse,
    UpdateListenerResponse,
    WithdrawByoipCidrResponse
} from "aws-sdk/clients/globalaccelerator";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.globalaccelerator.Accelerator {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.globalaccelerator.Accelerator>) {
        super(...args)
        this.client = new awssdk.GlobalAccelerator()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/globalaccelerator-2018-08-08.normal.json"), this.client)
    }

    invokeAddCustomRoutingEndpoints(partialParams: ToOptional<{
      [K in keyof AddCustomRoutingEndpointsRequest & keyof AddCustomRoutingEndpointsRequest & keyof AddCustomRoutingEndpointsRequest & keyof AddCustomRoutingEndpointsRequest]: (AddCustomRoutingEndpointsRequest & AddCustomRoutingEndpointsRequest & AddCustomRoutingEndpointsRequest & AddCustomRoutingEndpointsRequest)[K]
    }>): AddCustomRoutingEndpointsResponse {
        return this.client.addCustomRoutingEndpoints(
            this.ops["AddCustomRoutingEndpoints"].apply(partialParams)
        );
    }

    invokeAdvertiseByoipCidr(partialParams: ToOptional<{
      [K in keyof AdvertiseByoipCidrRequest & keyof AdvertiseByoipCidrRequest & keyof AdvertiseByoipCidrRequest & keyof AdvertiseByoipCidrRequest]: (AdvertiseByoipCidrRequest & AdvertiseByoipCidrRequest & AdvertiseByoipCidrRequest & AdvertiseByoipCidrRequest)[K]
    }>): AdvertiseByoipCidrResponse {
        return this.client.advertiseByoipCidr(
            this.ops["AdvertiseByoipCidr"].apply(partialParams)
        );
    }

    invokeAllowCustomRoutingTraffic(partialParams: ToOptional<{
      [K in keyof AllowCustomRoutingTrafficRequest & keyof AllowCustomRoutingTrafficRequest & keyof AllowCustomRoutingTrafficRequest & keyof AllowCustomRoutingTrafficRequest]: (AllowCustomRoutingTrafficRequest & AllowCustomRoutingTrafficRequest & AllowCustomRoutingTrafficRequest & AllowCustomRoutingTrafficRequest)[K]
    }>): void {
        return this.client.allowCustomRoutingTraffic(
            this.ops["AllowCustomRoutingTraffic"].apply(partialParams)
        );
    }

    invokeCreateAccelerator(partialParams: ToOptional<{
      [K in keyof CreateAcceleratorRequest & keyof CreateAcceleratorRequest & keyof CreateAcceleratorRequest & keyof CreateAcceleratorRequest]: (CreateAcceleratorRequest & CreateAcceleratorRequest & CreateAcceleratorRequest & CreateAcceleratorRequest)[K]
    }>): CreateAcceleratorResponse {
        return this.client.createAccelerator(
            this.ops["CreateAccelerator"].apply(partialParams)
        );
    }

    invokeCreateCustomRoutingAccelerator(partialParams: ToOptional<{
      [K in keyof CreateCustomRoutingAcceleratorRequest & keyof CreateCustomRoutingAcceleratorRequest & keyof CreateCustomRoutingAcceleratorRequest & keyof CreateCustomRoutingAcceleratorRequest]: (CreateCustomRoutingAcceleratorRequest & CreateCustomRoutingAcceleratorRequest & CreateCustomRoutingAcceleratorRequest & CreateCustomRoutingAcceleratorRequest)[K]
    }>): CreateCustomRoutingAcceleratorResponse {
        return this.client.createCustomRoutingAccelerator(
            this.ops["CreateCustomRoutingAccelerator"].apply(partialParams)
        );
    }

    invokeCreateCustomRoutingEndpointGroup(partialParams: ToOptional<{
      [K in keyof CreateCustomRoutingEndpointGroupRequest & keyof CreateCustomRoutingEndpointGroupRequest & keyof CreateCustomRoutingEndpointGroupRequest & keyof CreateCustomRoutingEndpointGroupRequest]: (CreateCustomRoutingEndpointGroupRequest & CreateCustomRoutingEndpointGroupRequest & CreateCustomRoutingEndpointGroupRequest & CreateCustomRoutingEndpointGroupRequest)[K]
    }>): CreateCustomRoutingEndpointGroupResponse {
        return this.client.createCustomRoutingEndpointGroup(
            this.ops["CreateCustomRoutingEndpointGroup"].apply(partialParams)
        );
    }

    invokeCreateCustomRoutingListener(partialParams: ToOptional<{
      [K in keyof CreateCustomRoutingListenerRequest & keyof CreateCustomRoutingListenerRequest & keyof CreateCustomRoutingListenerRequest & keyof CreateCustomRoutingListenerRequest]: (CreateCustomRoutingListenerRequest & CreateCustomRoutingListenerRequest & CreateCustomRoutingListenerRequest & CreateCustomRoutingListenerRequest)[K]
    }>): CreateCustomRoutingListenerResponse {
        return this.client.createCustomRoutingListener(
            this.ops["CreateCustomRoutingListener"].apply(partialParams)
        );
    }

    invokeCreateEndpointGroup(partialParams: ToOptional<{
      [K in keyof CreateEndpointGroupRequest & keyof CreateEndpointGroupRequest & keyof CreateEndpointGroupRequest & keyof CreateEndpointGroupRequest]: (CreateEndpointGroupRequest & CreateEndpointGroupRequest & CreateEndpointGroupRequest & CreateEndpointGroupRequest)[K]
    }>): CreateEndpointGroupResponse {
        return this.client.createEndpointGroup(
            this.ops["CreateEndpointGroup"].apply(partialParams)
        );
    }

    invokeCreateListener(partialParams: ToOptional<{
      [K in keyof CreateListenerRequest & keyof CreateListenerRequest & keyof CreateListenerRequest & keyof CreateListenerRequest]: (CreateListenerRequest & CreateListenerRequest & CreateListenerRequest & CreateListenerRequest)[K]
    }>): CreateListenerResponse {
        return this.client.createListener(
            this.ops["CreateListener"].apply(partialParams)
        );
    }

    invokeDeleteAccelerator(partialParams: ToOptional<{
      [K in keyof DeleteAcceleratorRequest & keyof DeleteAcceleratorRequest & keyof DeleteAcceleratorRequest & keyof DeleteAcceleratorRequest]: (DeleteAcceleratorRequest & DeleteAcceleratorRequest & DeleteAcceleratorRequest & DeleteAcceleratorRequest)[K]
    }>): void {
        return this.client.deleteAccelerator(
            this.ops["DeleteAccelerator"].apply(partialParams)
        );
    }

    invokeDeleteCustomRoutingAccelerator(partialParams: ToOptional<{
      [K in keyof DeleteCustomRoutingAcceleratorRequest & keyof DeleteCustomRoutingAcceleratorRequest & keyof DeleteCustomRoutingAcceleratorRequest & keyof DeleteCustomRoutingAcceleratorRequest]: (DeleteCustomRoutingAcceleratorRequest & DeleteCustomRoutingAcceleratorRequest & DeleteCustomRoutingAcceleratorRequest & DeleteCustomRoutingAcceleratorRequest)[K]
    }>): void {
        return this.client.deleteCustomRoutingAccelerator(
            this.ops["DeleteCustomRoutingAccelerator"].apply(partialParams)
        );
    }

    invokeDeleteCustomRoutingEndpointGroup(partialParams: ToOptional<{
      [K in keyof DeleteCustomRoutingEndpointGroupRequest & keyof DeleteCustomRoutingEndpointGroupRequest & keyof DeleteCustomRoutingEndpointGroupRequest & keyof DeleteCustomRoutingEndpointGroupRequest]: (DeleteCustomRoutingEndpointGroupRequest & DeleteCustomRoutingEndpointGroupRequest & DeleteCustomRoutingEndpointGroupRequest & DeleteCustomRoutingEndpointGroupRequest)[K]
    }>): void {
        return this.client.deleteCustomRoutingEndpointGroup(
            this.ops["DeleteCustomRoutingEndpointGroup"].apply(partialParams)
        );
    }

    invokeDeleteCustomRoutingListener(partialParams: ToOptional<{
      [K in keyof DeleteCustomRoutingListenerRequest & keyof DeleteCustomRoutingListenerRequest & keyof DeleteCustomRoutingListenerRequest & keyof DeleteCustomRoutingListenerRequest]: (DeleteCustomRoutingListenerRequest & DeleteCustomRoutingListenerRequest & DeleteCustomRoutingListenerRequest & DeleteCustomRoutingListenerRequest)[K]
    }>): void {
        return this.client.deleteCustomRoutingListener(
            this.ops["DeleteCustomRoutingListener"].apply(partialParams)
        );
    }

    invokeDeleteEndpointGroup(partialParams: ToOptional<{
      [K in keyof DeleteEndpointGroupRequest & keyof DeleteEndpointGroupRequest & keyof DeleteEndpointGroupRequest & keyof DeleteEndpointGroupRequest]: (DeleteEndpointGroupRequest & DeleteEndpointGroupRequest & DeleteEndpointGroupRequest & DeleteEndpointGroupRequest)[K]
    }>): void {
        return this.client.deleteEndpointGroup(
            this.ops["DeleteEndpointGroup"].apply(partialParams)
        );
    }

    invokeDeleteListener(partialParams: ToOptional<{
      [K in keyof DeleteListenerRequest & keyof DeleteListenerRequest & keyof DeleteListenerRequest & keyof DeleteListenerRequest]: (DeleteListenerRequest & DeleteListenerRequest & DeleteListenerRequest & DeleteListenerRequest)[K]
    }>): void {
        return this.client.deleteListener(
            this.ops["DeleteListener"].apply(partialParams)
        );
    }

    invokeDenyCustomRoutingTraffic(partialParams: ToOptional<{
      [K in keyof DenyCustomRoutingTrafficRequest & keyof DenyCustomRoutingTrafficRequest & keyof DenyCustomRoutingTrafficRequest & keyof DenyCustomRoutingTrafficRequest]: (DenyCustomRoutingTrafficRequest & DenyCustomRoutingTrafficRequest & DenyCustomRoutingTrafficRequest & DenyCustomRoutingTrafficRequest)[K]
    }>): void {
        return this.client.denyCustomRoutingTraffic(
            this.ops["DenyCustomRoutingTraffic"].apply(partialParams)
        );
    }

    invokeDeprovisionByoipCidr(partialParams: ToOptional<{
      [K in keyof DeprovisionByoipCidrRequest & keyof DeprovisionByoipCidrRequest & keyof DeprovisionByoipCidrRequest & keyof DeprovisionByoipCidrRequest]: (DeprovisionByoipCidrRequest & DeprovisionByoipCidrRequest & DeprovisionByoipCidrRequest & DeprovisionByoipCidrRequest)[K]
    }>): DeprovisionByoipCidrResponse {
        return this.client.deprovisionByoipCidr(
            this.ops["DeprovisionByoipCidr"].apply(partialParams)
        );
    }

    invokeDescribeAccelerator(partialParams: ToOptional<{
      [K in keyof DescribeAcceleratorRequest & keyof DescribeAcceleratorRequest & keyof DescribeAcceleratorRequest & keyof DescribeAcceleratorRequest]: (DescribeAcceleratorRequest & DescribeAcceleratorRequest & DescribeAcceleratorRequest & DescribeAcceleratorRequest)[K]
    }>): DescribeAcceleratorResponse {
        return this.client.describeAccelerator(
            this.ops["DescribeAccelerator"].apply(partialParams)
        );
    }

    invokeDescribeAcceleratorAttributes(partialParams: ToOptional<{
      [K in keyof DescribeAcceleratorAttributesRequest & keyof DescribeAcceleratorAttributesRequest & keyof DescribeAcceleratorAttributesRequest & keyof DescribeAcceleratorAttributesRequest]: (DescribeAcceleratorAttributesRequest & DescribeAcceleratorAttributesRequest & DescribeAcceleratorAttributesRequest & DescribeAcceleratorAttributesRequest)[K]
    }>): DescribeAcceleratorAttributesResponse {
        return this.client.describeAcceleratorAttributes(
            this.ops["DescribeAcceleratorAttributes"].apply(partialParams)
        );
    }

    invokeDescribeCustomRoutingAccelerator(partialParams: ToOptional<{
      [K in keyof DescribeCustomRoutingAcceleratorRequest & keyof DescribeCustomRoutingAcceleratorRequest & keyof DescribeCustomRoutingAcceleratorRequest & keyof DescribeCustomRoutingAcceleratorRequest]: (DescribeCustomRoutingAcceleratorRequest & DescribeCustomRoutingAcceleratorRequest & DescribeCustomRoutingAcceleratorRequest & DescribeCustomRoutingAcceleratorRequest)[K]
    }>): DescribeCustomRoutingAcceleratorResponse {
        return this.client.describeCustomRoutingAccelerator(
            this.ops["DescribeCustomRoutingAccelerator"].apply(partialParams)
        );
    }

    invokeDescribeCustomRoutingAcceleratorAttributes(partialParams: ToOptional<{
      [K in keyof DescribeCustomRoutingAcceleratorAttributesRequest & keyof DescribeCustomRoutingAcceleratorAttributesRequest & keyof DescribeCustomRoutingAcceleratorAttributesRequest & keyof DescribeCustomRoutingAcceleratorAttributesRequest]: (DescribeCustomRoutingAcceleratorAttributesRequest & DescribeCustomRoutingAcceleratorAttributesRequest & DescribeCustomRoutingAcceleratorAttributesRequest & DescribeCustomRoutingAcceleratorAttributesRequest)[K]
    }>): DescribeCustomRoutingAcceleratorAttributesResponse {
        return this.client.describeCustomRoutingAcceleratorAttributes(
            this.ops["DescribeCustomRoutingAcceleratorAttributes"].apply(partialParams)
        );
    }

    invokeDescribeCustomRoutingEndpointGroup(partialParams: ToOptional<{
      [K in keyof DescribeCustomRoutingEndpointGroupRequest & keyof DescribeCustomRoutingEndpointGroupRequest & keyof DescribeCustomRoutingEndpointGroupRequest & keyof DescribeCustomRoutingEndpointGroupRequest]: (DescribeCustomRoutingEndpointGroupRequest & DescribeCustomRoutingEndpointGroupRequest & DescribeCustomRoutingEndpointGroupRequest & DescribeCustomRoutingEndpointGroupRequest)[K]
    }>): DescribeCustomRoutingEndpointGroupResponse {
        return this.client.describeCustomRoutingEndpointGroup(
            this.ops["DescribeCustomRoutingEndpointGroup"].apply(partialParams)
        );
    }

    invokeDescribeCustomRoutingListener(partialParams: ToOptional<{
      [K in keyof DescribeCustomRoutingListenerRequest & keyof DescribeCustomRoutingListenerRequest & keyof DescribeCustomRoutingListenerRequest & keyof DescribeCustomRoutingListenerRequest]: (DescribeCustomRoutingListenerRequest & DescribeCustomRoutingListenerRequest & DescribeCustomRoutingListenerRequest & DescribeCustomRoutingListenerRequest)[K]
    }>): DescribeCustomRoutingListenerResponse {
        return this.client.describeCustomRoutingListener(
            this.ops["DescribeCustomRoutingListener"].apply(partialParams)
        );
    }

    invokeDescribeEndpointGroup(partialParams: ToOptional<{
      [K in keyof DescribeEndpointGroupRequest & keyof DescribeEndpointGroupRequest & keyof DescribeEndpointGroupRequest & keyof DescribeEndpointGroupRequest]: (DescribeEndpointGroupRequest & DescribeEndpointGroupRequest & DescribeEndpointGroupRequest & DescribeEndpointGroupRequest)[K]
    }>): DescribeEndpointGroupResponse {
        return this.client.describeEndpointGroup(
            this.ops["DescribeEndpointGroup"].apply(partialParams)
        );
    }

    invokeDescribeListener(partialParams: ToOptional<{
      [K in keyof DescribeListenerRequest & keyof DescribeListenerRequest & keyof DescribeListenerRequest & keyof DescribeListenerRequest]: (DescribeListenerRequest & DescribeListenerRequest & DescribeListenerRequest & DescribeListenerRequest)[K]
    }>): DescribeListenerResponse {
        return this.client.describeListener(
            this.ops["DescribeListener"].apply(partialParams)
        );
    }

    invokeListCustomRoutingEndpointGroups(partialParams: ToOptional<{
      [K in keyof ListCustomRoutingEndpointGroupsRequest & keyof ListCustomRoutingEndpointGroupsRequest & keyof ListCustomRoutingEndpointGroupsRequest & keyof ListCustomRoutingEndpointGroupsRequest]: (ListCustomRoutingEndpointGroupsRequest & ListCustomRoutingEndpointGroupsRequest & ListCustomRoutingEndpointGroupsRequest & ListCustomRoutingEndpointGroupsRequest)[K]
    }>): ListCustomRoutingEndpointGroupsResponse {
        return this.client.listCustomRoutingEndpointGroups(
            this.ops["ListCustomRoutingEndpointGroups"].apply(partialParams)
        );
    }

    invokeListCustomRoutingListeners(partialParams: ToOptional<{
      [K in keyof ListCustomRoutingListenersRequest & keyof ListCustomRoutingListenersRequest & keyof ListCustomRoutingListenersRequest & keyof ListCustomRoutingListenersRequest]: (ListCustomRoutingListenersRequest & ListCustomRoutingListenersRequest & ListCustomRoutingListenersRequest & ListCustomRoutingListenersRequest)[K]
    }>): ListCustomRoutingListenersResponse {
        return this.client.listCustomRoutingListeners(
            this.ops["ListCustomRoutingListeners"].apply(partialParams)
        );
    }

    invokeListCustomRoutingPortMappings(partialParams: ToOptional<{
      [K in keyof ListCustomRoutingPortMappingsRequest & keyof ListCustomRoutingPortMappingsRequest & keyof ListCustomRoutingPortMappingsRequest & keyof ListCustomRoutingPortMappingsRequest]: (ListCustomRoutingPortMappingsRequest & ListCustomRoutingPortMappingsRequest & ListCustomRoutingPortMappingsRequest & ListCustomRoutingPortMappingsRequest)[K]
    }>): ListCustomRoutingPortMappingsResponse {
        return this.client.listCustomRoutingPortMappings(
            this.ops["ListCustomRoutingPortMappings"].apply(partialParams)
        );
    }

    invokeListCustomRoutingPortMappingsByDestination(partialParams: ToOptional<{
      [K in keyof ListCustomRoutingPortMappingsByDestinationRequest & keyof ListCustomRoutingPortMappingsByDestinationRequest & keyof ListCustomRoutingPortMappingsByDestinationRequest & keyof ListCustomRoutingPortMappingsByDestinationRequest]: (ListCustomRoutingPortMappingsByDestinationRequest & ListCustomRoutingPortMappingsByDestinationRequest & ListCustomRoutingPortMappingsByDestinationRequest & ListCustomRoutingPortMappingsByDestinationRequest)[K]
    }>): ListCustomRoutingPortMappingsByDestinationResponse {
        return this.client.listCustomRoutingPortMappingsByDestination(
            this.ops["ListCustomRoutingPortMappingsByDestination"].apply(partialParams)
        );
    }

    invokeListEndpointGroups(partialParams: ToOptional<{
      [K in keyof ListEndpointGroupsRequest & keyof ListEndpointGroupsRequest & keyof ListEndpointGroupsRequest & keyof ListEndpointGroupsRequest]: (ListEndpointGroupsRequest & ListEndpointGroupsRequest & ListEndpointGroupsRequest & ListEndpointGroupsRequest)[K]
    }>): ListEndpointGroupsResponse {
        return this.client.listEndpointGroups(
            this.ops["ListEndpointGroups"].apply(partialParams)
        );
    }

    invokeListListeners(partialParams: ToOptional<{
      [K in keyof ListListenersRequest & keyof ListListenersRequest & keyof ListListenersRequest & keyof ListListenersRequest]: (ListListenersRequest & ListListenersRequest & ListListenersRequest & ListListenersRequest)[K]
    }>): ListListenersResponse {
        return this.client.listListeners(
            this.ops["ListListeners"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeProvisionByoipCidr(partialParams: ToOptional<{
      [K in keyof ProvisionByoipCidrRequest & keyof ProvisionByoipCidrRequest & keyof ProvisionByoipCidrRequest & keyof ProvisionByoipCidrRequest]: (ProvisionByoipCidrRequest & ProvisionByoipCidrRequest & ProvisionByoipCidrRequest & ProvisionByoipCidrRequest)[K]
    }>): ProvisionByoipCidrResponse {
        return this.client.provisionByoipCidr(
            this.ops["ProvisionByoipCidr"].apply(partialParams)
        );
    }

    invokeRemoveCustomRoutingEndpoints(partialParams: ToOptional<{
      [K in keyof RemoveCustomRoutingEndpointsRequest & keyof RemoveCustomRoutingEndpointsRequest & keyof RemoveCustomRoutingEndpointsRequest & keyof RemoveCustomRoutingEndpointsRequest]: (RemoveCustomRoutingEndpointsRequest & RemoveCustomRoutingEndpointsRequest & RemoveCustomRoutingEndpointsRequest & RemoveCustomRoutingEndpointsRequest)[K]
    }>): void {
        return this.client.removeCustomRoutingEndpoints(
            this.ops["RemoveCustomRoutingEndpoints"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateAccelerator(partialParams: ToOptional<{
      [K in keyof UpdateAcceleratorRequest & keyof UpdateAcceleratorRequest & keyof UpdateAcceleratorRequest & keyof UpdateAcceleratorRequest]: (UpdateAcceleratorRequest & UpdateAcceleratorRequest & UpdateAcceleratorRequest & UpdateAcceleratorRequest)[K]
    }>): UpdateAcceleratorResponse {
        return this.client.updateAccelerator(
            this.ops["UpdateAccelerator"].apply(partialParams)
        );
    }

    invokeUpdateAcceleratorAttributes(partialParams: ToOptional<{
      [K in keyof UpdateAcceleratorAttributesRequest & keyof UpdateAcceleratorAttributesRequest & keyof UpdateAcceleratorAttributesRequest & keyof UpdateAcceleratorAttributesRequest]: (UpdateAcceleratorAttributesRequest & UpdateAcceleratorAttributesRequest & UpdateAcceleratorAttributesRequest & UpdateAcceleratorAttributesRequest)[K]
    }>): UpdateAcceleratorAttributesResponse {
        return this.client.updateAcceleratorAttributes(
            this.ops["UpdateAcceleratorAttributes"].apply(partialParams)
        );
    }

    invokeUpdateCustomRoutingAccelerator(partialParams: ToOptional<{
      [K in keyof UpdateCustomRoutingAcceleratorRequest & keyof UpdateCustomRoutingAcceleratorRequest & keyof UpdateCustomRoutingAcceleratorRequest & keyof UpdateCustomRoutingAcceleratorRequest]: (UpdateCustomRoutingAcceleratorRequest & UpdateCustomRoutingAcceleratorRequest & UpdateCustomRoutingAcceleratorRequest & UpdateCustomRoutingAcceleratorRequest)[K]
    }>): UpdateCustomRoutingAcceleratorResponse {
        return this.client.updateCustomRoutingAccelerator(
            this.ops["UpdateCustomRoutingAccelerator"].apply(partialParams)
        );
    }

    invokeUpdateCustomRoutingAcceleratorAttributes(partialParams: ToOptional<{
      [K in keyof UpdateCustomRoutingAcceleratorAttributesRequest & keyof UpdateCustomRoutingAcceleratorAttributesRequest & keyof UpdateCustomRoutingAcceleratorAttributesRequest & keyof UpdateCustomRoutingAcceleratorAttributesRequest]: (UpdateCustomRoutingAcceleratorAttributesRequest & UpdateCustomRoutingAcceleratorAttributesRequest & UpdateCustomRoutingAcceleratorAttributesRequest & UpdateCustomRoutingAcceleratorAttributesRequest)[K]
    }>): UpdateCustomRoutingAcceleratorAttributesResponse {
        return this.client.updateCustomRoutingAcceleratorAttributes(
            this.ops["UpdateCustomRoutingAcceleratorAttributes"].apply(partialParams)
        );
    }

    invokeUpdateCustomRoutingListener(partialParams: ToOptional<{
      [K in keyof UpdateCustomRoutingListenerRequest & keyof UpdateCustomRoutingListenerRequest & keyof UpdateCustomRoutingListenerRequest & keyof UpdateCustomRoutingListenerRequest]: (UpdateCustomRoutingListenerRequest & UpdateCustomRoutingListenerRequest & UpdateCustomRoutingListenerRequest & UpdateCustomRoutingListenerRequest)[K]
    }>): UpdateCustomRoutingListenerResponse {
        return this.client.updateCustomRoutingListener(
            this.ops["UpdateCustomRoutingListener"].apply(partialParams)
        );
    }

    invokeUpdateEndpointGroup(partialParams: ToOptional<{
      [K in keyof UpdateEndpointGroupRequest & keyof UpdateEndpointGroupRequest & keyof UpdateEndpointGroupRequest & keyof UpdateEndpointGroupRequest]: (UpdateEndpointGroupRequest & UpdateEndpointGroupRequest & UpdateEndpointGroupRequest & UpdateEndpointGroupRequest)[K]
    }>): UpdateEndpointGroupResponse {
        return this.client.updateEndpointGroup(
            this.ops["UpdateEndpointGroup"].apply(partialParams)
        );
    }

    invokeUpdateListener(partialParams: ToOptional<{
      [K in keyof UpdateListenerRequest & keyof UpdateListenerRequest & keyof UpdateListenerRequest & keyof UpdateListenerRequest]: (UpdateListenerRequest & UpdateListenerRequest & UpdateListenerRequest & UpdateListenerRequest)[K]
    }>): UpdateListenerResponse {
        return this.client.updateListener(
            this.ops["UpdateListener"].apply(partialParams)
        );
    }

    invokeWithdrawByoipCidr(partialParams: ToOptional<{
      [K in keyof WithdrawByoipCidrRequest & keyof WithdrawByoipCidrRequest & keyof WithdrawByoipCidrRequest & keyof WithdrawByoipCidrRequest]: (WithdrawByoipCidrRequest & WithdrawByoipCidrRequest & WithdrawByoipCidrRequest & WithdrawByoipCidrRequest)[K]
    }>): WithdrawByoipCidrResponse {
        return this.client.withdrawByoipCidr(
            this.ops["WithdrawByoipCidr"].apply(partialParams)
        );
    }
}