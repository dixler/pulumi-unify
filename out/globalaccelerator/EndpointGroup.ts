
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AddCustomRoutingEndpointsRequest,
    AdvertiseByoipCidrRequest,
    CreateAcceleratorRequest,
    CreateCustomRoutingAcceleratorRequest,
    CreateCustomRoutingEndpointGroupRequest,
    CreateCustomRoutingListenerRequest,
    CreateEndpointGroupRequest,
    CreateListenerRequest,
    DeprovisionByoipCidrRequest,
    DescribeAcceleratorRequest,
    DescribeAcceleratorAttributesRequest,
    DescribeCustomRoutingAcceleratorRequest,
    DescribeCustomRoutingAcceleratorAttributesRequest,
    DescribeCustomRoutingEndpointGroupRequest,
    DescribeCustomRoutingListenerRequest,
    DescribeEndpointGroupRequest,
    DescribeListenerRequest,
    ListAcceleratorsRequest,
    ListByoipCidrsRequest,
    ListCustomRoutingAcceleratorsRequest,
    ListCustomRoutingEndpointGroupsRequest,
    ListCustomRoutingListenersRequest,
    ListCustomRoutingPortMappingsRequest,
    ListCustomRoutingPortMappingsByDestinationRequest,
    ListEndpointGroupsRequest,
    ListListenersRequest,
    ListTagsForResourceRequest,
    ProvisionByoipCidrRequest,
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
    ListAcceleratorsResponse,
    ListByoipCidrsResponse,
    ListCustomRoutingAcceleratorsResponse,
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
const schema = require("../apis/globalaccelerator-2018-08-08.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.globalaccelerator.EndpointGroup {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.globalaccelerator.EndpointGroup>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.GlobalAccelerator()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
          console.log(this.capitalizedParams);
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

    invokeAddCustomRoutingEndpoints(partialParams: ToOptional<{
      [K in keyof AddCustomRoutingEndpointsRequest & keyof Omit<AddCustomRoutingEndpointsRequest, "EndpointGroupArn">]: (AddCustomRoutingEndpointsRequest)[K]
    }>): Request<AddCustomRoutingEndpointsResponse, AWSError> {
        this.boot();
        return this.client.addCustomRoutingEndpoints(
          this.ops["AddCustomRoutingEndpoints"].apply(partialParams)
        );
    }

    invokeAdvertiseByoipCidr(partialParams: ToOptional<{
      [K in keyof AdvertiseByoipCidrRequest]: (AdvertiseByoipCidrRequest)[K]
    }>): Request<AdvertiseByoipCidrResponse, AWSError> {
        this.boot();
        return this.client.advertiseByoipCidr(
          this.ops["AdvertiseByoipCidr"].apply(partialParams)
        );
    }

    invokeCreateAccelerator(partialParams: ToOptional<{
      [K in keyof CreateAcceleratorRequest]: (CreateAcceleratorRequest)[K]
    }>): Request<CreateAcceleratorResponse, AWSError> {
        this.boot();
        return this.client.createAccelerator(
          this.ops["CreateAccelerator"].apply(partialParams)
        );
    }

    invokeCreateCustomRoutingAccelerator(partialParams: ToOptional<{
      [K in keyof CreateCustomRoutingAcceleratorRequest]: (CreateCustomRoutingAcceleratorRequest)[K]
    }>): Request<CreateCustomRoutingAcceleratorResponse, AWSError> {
        this.boot();
        return this.client.createCustomRoutingAccelerator(
          this.ops["CreateCustomRoutingAccelerator"].apply(partialParams)
        );
    }

    invokeCreateCustomRoutingEndpointGroup(partialParams: ToOptional<{
      [K in keyof CreateCustomRoutingEndpointGroupRequest & keyof Omit<CreateCustomRoutingEndpointGroupRequest, "ListenerArn" | "EndpointGroupRegion">]: (CreateCustomRoutingEndpointGroupRequest)[K]
    }>): Request<CreateCustomRoutingEndpointGroupResponse, AWSError> {
        this.boot();
        return this.client.createCustomRoutingEndpointGroup(
          this.ops["CreateCustomRoutingEndpointGroup"].apply(partialParams)
        );
    }

    invokeCreateCustomRoutingListener(partialParams: ToOptional<{
      [K in keyof CreateCustomRoutingListenerRequest]: (CreateCustomRoutingListenerRequest)[K]
    }>): Request<CreateCustomRoutingListenerResponse, AWSError> {
        this.boot();
        return this.client.createCustomRoutingListener(
          this.ops["CreateCustomRoutingListener"].apply(partialParams)
        );
    }

    invokeCreateEndpointGroup(partialParams: ToOptional<{
      [K in keyof CreateEndpointGroupRequest & keyof Omit<CreateEndpointGroupRequest, "ListenerArn" | "EndpointGroupRegion">]: (CreateEndpointGroupRequest)[K]
    }>): Request<CreateEndpointGroupResponse, AWSError> {
        this.boot();
        return this.client.createEndpointGroup(
          this.ops["CreateEndpointGroup"].apply(partialParams)
        );
    }

    invokeCreateListener(partialParams: ToOptional<{
      [K in keyof CreateListenerRequest]: (CreateListenerRequest)[K]
    }>): Request<CreateListenerResponse, AWSError> {
        this.boot();
        return this.client.createListener(
          this.ops["CreateListener"].apply(partialParams)
        );
    }

    invokeDeprovisionByoipCidr(partialParams: ToOptional<{
      [K in keyof DeprovisionByoipCidrRequest]: (DeprovisionByoipCidrRequest)[K]
    }>): Request<DeprovisionByoipCidrResponse, AWSError> {
        this.boot();
        return this.client.deprovisionByoipCidr(
          this.ops["DeprovisionByoipCidr"].apply(partialParams)
        );
    }

    invokeDescribeAccelerator(partialParams: ToOptional<{
      [K in keyof DescribeAcceleratorRequest]: (DescribeAcceleratorRequest)[K]
    }>): Request<DescribeAcceleratorResponse, AWSError> {
        this.boot();
        return this.client.describeAccelerator(
          this.ops["DescribeAccelerator"].apply(partialParams)
        );
    }

    invokeDescribeAcceleratorAttributes(partialParams: ToOptional<{
      [K in keyof DescribeAcceleratorAttributesRequest]: (DescribeAcceleratorAttributesRequest)[K]
    }>): Request<DescribeAcceleratorAttributesResponse, AWSError> {
        this.boot();
        return this.client.describeAcceleratorAttributes(
          this.ops["DescribeAcceleratorAttributes"].apply(partialParams)
        );
    }

    invokeDescribeCustomRoutingAccelerator(partialParams: ToOptional<{
      [K in keyof DescribeCustomRoutingAcceleratorRequest]: (DescribeCustomRoutingAcceleratorRequest)[K]
    }>): Request<DescribeCustomRoutingAcceleratorResponse, AWSError> {
        this.boot();
        return this.client.describeCustomRoutingAccelerator(
          this.ops["DescribeCustomRoutingAccelerator"].apply(partialParams)
        );
    }

    invokeDescribeCustomRoutingAcceleratorAttributes(partialParams: ToOptional<{
      [K in keyof DescribeCustomRoutingAcceleratorAttributesRequest]: (DescribeCustomRoutingAcceleratorAttributesRequest)[K]
    }>): Request<DescribeCustomRoutingAcceleratorAttributesResponse, AWSError> {
        this.boot();
        return this.client.describeCustomRoutingAcceleratorAttributes(
          this.ops["DescribeCustomRoutingAcceleratorAttributes"].apply(partialParams)
        );
    }

    invokeDescribeCustomRoutingEndpointGroup(partialParams: ToOptional<{
      [K in keyof DescribeCustomRoutingEndpointGroupRequest & keyof Omit<DescribeCustomRoutingEndpointGroupRequest, "EndpointGroupArn">]: (DescribeCustomRoutingEndpointGroupRequest)[K]
    }>): Request<DescribeCustomRoutingEndpointGroupResponse, AWSError> {
        this.boot();
        return this.client.describeCustomRoutingEndpointGroup(
          this.ops["DescribeCustomRoutingEndpointGroup"].apply(partialParams)
        );
    }

    invokeDescribeCustomRoutingListener(partialParams: ToOptional<{
      [K in keyof DescribeCustomRoutingListenerRequest & keyof Omit<DescribeCustomRoutingListenerRequest, "ListenerArn">]: (DescribeCustomRoutingListenerRequest)[K]
    }>): Request<DescribeCustomRoutingListenerResponse, AWSError> {
        this.boot();
        return this.client.describeCustomRoutingListener(
          this.ops["DescribeCustomRoutingListener"].apply(partialParams)
        );
    }

    invokeDescribeEndpointGroup(partialParams: ToOptional<{
      [K in keyof DescribeEndpointGroupRequest & keyof Omit<DescribeEndpointGroupRequest, "EndpointGroupArn">]: (DescribeEndpointGroupRequest)[K]
    }>): Request<DescribeEndpointGroupResponse, AWSError> {
        this.boot();
        return this.client.describeEndpointGroup(
          this.ops["DescribeEndpointGroup"].apply(partialParams)
        );
    }

    invokeDescribeListener(partialParams: ToOptional<{
      [K in keyof DescribeListenerRequest & keyof Omit<DescribeListenerRequest, "ListenerArn">]: (DescribeListenerRequest)[K]
    }>): Request<DescribeListenerResponse, AWSError> {
        this.boot();
        return this.client.describeListener(
          this.ops["DescribeListener"].apply(partialParams)
        );
    }

    invokeListAccelerators(partialParams: ToOptional<{
      [K in keyof ListAcceleratorsRequest]: (ListAcceleratorsRequest)[K]
    }>): Request<ListAcceleratorsResponse, AWSError> {
        this.boot();
        return this.client.listAccelerators(
          this.ops["ListAccelerators"].apply(partialParams)
        );
    }

    invokeListByoipCidrs(partialParams: ToOptional<{
      [K in keyof ListByoipCidrsRequest]: (ListByoipCidrsRequest)[K]
    }>): Request<ListByoipCidrsResponse, AWSError> {
        this.boot();
        return this.client.listByoipCidrs(
          this.ops["ListByoipCidrs"].apply(partialParams)
        );
    }

    invokeListCustomRoutingAccelerators(partialParams: ToOptional<{
      [K in keyof ListCustomRoutingAcceleratorsRequest]: (ListCustomRoutingAcceleratorsRequest)[K]
    }>): Request<ListCustomRoutingAcceleratorsResponse, AWSError> {
        this.boot();
        return this.client.listCustomRoutingAccelerators(
          this.ops["ListCustomRoutingAccelerators"].apply(partialParams)
        );
    }

    invokeListCustomRoutingEndpointGroups(partialParams: ToOptional<{
      [K in keyof ListCustomRoutingEndpointGroupsRequest & keyof Omit<ListCustomRoutingEndpointGroupsRequest, "ListenerArn">]: (ListCustomRoutingEndpointGroupsRequest)[K]
    }>): Request<ListCustomRoutingEndpointGroupsResponse, AWSError> {
        this.boot();
        return this.client.listCustomRoutingEndpointGroups(
          this.ops["ListCustomRoutingEndpointGroups"].apply(partialParams)
        );
    }

    invokeListCustomRoutingListeners(partialParams: ToOptional<{
      [K in keyof ListCustomRoutingListenersRequest]: (ListCustomRoutingListenersRequest)[K]
    }>): Request<ListCustomRoutingListenersResponse, AWSError> {
        this.boot();
        return this.client.listCustomRoutingListeners(
          this.ops["ListCustomRoutingListeners"].apply(partialParams)
        );
    }

    invokeListCustomRoutingPortMappings(partialParams: ToOptional<{
      [K in keyof ListCustomRoutingPortMappingsRequest]: (ListCustomRoutingPortMappingsRequest)[K]
    }>): Request<ListCustomRoutingPortMappingsResponse, AWSError> {
        this.boot();
        return this.client.listCustomRoutingPortMappings(
          this.ops["ListCustomRoutingPortMappings"].apply(partialParams)
        );
    }

    invokeListCustomRoutingPortMappingsByDestination(partialParams: ToOptional<{
      [K in keyof ListCustomRoutingPortMappingsByDestinationRequest]: (ListCustomRoutingPortMappingsByDestinationRequest)[K]
    }>): Request<ListCustomRoutingPortMappingsByDestinationResponse, AWSError> {
        this.boot();
        return this.client.listCustomRoutingPortMappingsByDestination(
          this.ops["ListCustomRoutingPortMappingsByDestination"].apply(partialParams)
        );
    }

    invokeListEndpointGroups(partialParams: ToOptional<{
      [K in keyof ListEndpointGroupsRequest & keyof Omit<ListEndpointGroupsRequest, "ListenerArn">]: (ListEndpointGroupsRequest)[K]
    }>): Request<ListEndpointGroupsResponse, AWSError> {
        this.boot();
        return this.client.listEndpointGroups(
          this.ops["ListEndpointGroups"].apply(partialParams)
        );
    }

    invokeListListeners(partialParams: ToOptional<{
      [K in keyof ListListenersRequest]: (ListListenersRequest)[K]
    }>): Request<ListListenersResponse, AWSError> {
        this.boot();
        return this.client.listListeners(
          this.ops["ListListeners"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeProvisionByoipCidr(partialParams: ToOptional<{
      [K in keyof ProvisionByoipCidrRequest]: (ProvisionByoipCidrRequest)[K]
    }>): Request<ProvisionByoipCidrResponse, AWSError> {
        this.boot();
        return this.client.provisionByoipCidr(
          this.ops["ProvisionByoipCidr"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest]: (TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest]: (UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateAccelerator(partialParams: ToOptional<{
      [K in keyof UpdateAcceleratorRequest]: (UpdateAcceleratorRequest)[K]
    }>): Request<UpdateAcceleratorResponse, AWSError> {
        this.boot();
        return this.client.updateAccelerator(
          this.ops["UpdateAccelerator"].apply(partialParams)
        );
    }

    invokeUpdateAcceleratorAttributes(partialParams: ToOptional<{
      [K in keyof UpdateAcceleratorAttributesRequest]: (UpdateAcceleratorAttributesRequest)[K]
    }>): Request<UpdateAcceleratorAttributesResponse, AWSError> {
        this.boot();
        return this.client.updateAcceleratorAttributes(
          this.ops["UpdateAcceleratorAttributes"].apply(partialParams)
        );
    }

    invokeUpdateCustomRoutingAccelerator(partialParams: ToOptional<{
      [K in keyof UpdateCustomRoutingAcceleratorRequest]: (UpdateCustomRoutingAcceleratorRequest)[K]
    }>): Request<UpdateCustomRoutingAcceleratorResponse, AWSError> {
        this.boot();
        return this.client.updateCustomRoutingAccelerator(
          this.ops["UpdateCustomRoutingAccelerator"].apply(partialParams)
        );
    }

    invokeUpdateCustomRoutingAcceleratorAttributes(partialParams: ToOptional<{
      [K in keyof UpdateCustomRoutingAcceleratorAttributesRequest]: (UpdateCustomRoutingAcceleratorAttributesRequest)[K]
    }>): Request<UpdateCustomRoutingAcceleratorAttributesResponse, AWSError> {
        this.boot();
        return this.client.updateCustomRoutingAcceleratorAttributes(
          this.ops["UpdateCustomRoutingAcceleratorAttributes"].apply(partialParams)
        );
    }

    invokeUpdateCustomRoutingListener(partialParams: ToOptional<{
      [K in keyof UpdateCustomRoutingListenerRequest & keyof Omit<UpdateCustomRoutingListenerRequest, "ListenerArn">]: (UpdateCustomRoutingListenerRequest)[K]
    }>): Request<UpdateCustomRoutingListenerResponse, AWSError> {
        this.boot();
        return this.client.updateCustomRoutingListener(
          this.ops["UpdateCustomRoutingListener"].apply(partialParams)
        );
    }

    invokeUpdateEndpointGroup(partialParams: ToOptional<{
      [K in keyof UpdateEndpointGroupRequest & keyof Omit<UpdateEndpointGroupRequest, "EndpointGroupArn">]: (UpdateEndpointGroupRequest)[K]
    }>): Request<UpdateEndpointGroupResponse, AWSError> {
        this.boot();
        return this.client.updateEndpointGroup(
          this.ops["UpdateEndpointGroup"].apply(partialParams)
        );
    }

    invokeUpdateListener(partialParams: ToOptional<{
      [K in keyof UpdateListenerRequest & keyof Omit<UpdateListenerRequest, "ListenerArn">]: (UpdateListenerRequest)[K]
    }>): Request<UpdateListenerResponse, AWSError> {
        this.boot();
        return this.client.updateListener(
          this.ops["UpdateListener"].apply(partialParams)
        );
    }

    invokeWithdrawByoipCidr(partialParams: ToOptional<{
      [K in keyof WithdrawByoipCidrRequest]: (WithdrawByoipCidrRequest)[K]
    }>): Request<WithdrawByoipCidrResponse, AWSError> {
        this.boot();
        return this.client.withdrawByoipCidr(
          this.ops["WithdrawByoipCidr"].apply(partialParams)
        );
    }
}