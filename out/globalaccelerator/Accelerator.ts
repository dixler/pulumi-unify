
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
const schema = require("../apis/globalaccelerator-2018-08-08.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.globalaccelerator.Accelerator {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.globalaccelerator.Accelerator>) {
        super(...args)
        this.client = new awssdk.GlobalAccelerator()
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

    invokeAddCustomRoutingEndpoints(partialParams: ToOptional<{
      [K in keyof AddCustomRoutingEndpointsRequest & keyof AddCustomRoutingEndpointsRequest & keyof AddCustomRoutingEndpointsRequest & keyof AddCustomRoutingEndpointsRequest]: (AddCustomRoutingEndpointsRequest & AddCustomRoutingEndpointsRequest & AddCustomRoutingEndpointsRequest & AddCustomRoutingEndpointsRequest)[K]
    }>): Request<AddCustomRoutingEndpointsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addCustomRoutingEndpoints(
          this.ops["AddCustomRoutingEndpoints"].applicator.apply(partialParams)
        );
    }

    invokeAdvertiseByoipCidr(partialParams: ToOptional<{
      [K in keyof AdvertiseByoipCidrRequest & keyof AdvertiseByoipCidrRequest & keyof AdvertiseByoipCidrRequest & keyof AdvertiseByoipCidrRequest]: (AdvertiseByoipCidrRequest & AdvertiseByoipCidrRequest & AdvertiseByoipCidrRequest & AdvertiseByoipCidrRequest)[K]
    }>): Request<AdvertiseByoipCidrResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.advertiseByoipCidr(
          this.ops["AdvertiseByoipCidr"].applicator.apply(partialParams)
        );
    }

    invokeAllowCustomRoutingTraffic(partialParams: ToOptional<{
      [K in keyof AllowCustomRoutingTrafficRequest & keyof AllowCustomRoutingTrafficRequest & keyof AllowCustomRoutingTrafficRequest & keyof AllowCustomRoutingTrafficRequest]: (AllowCustomRoutingTrafficRequest & AllowCustomRoutingTrafficRequest & AllowCustomRoutingTrafficRequest & AllowCustomRoutingTrafficRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.allowCustomRoutingTraffic(
          this.ops["AllowCustomRoutingTraffic"].applicator.apply(partialParams)
        );
    }

    invokeCreateAccelerator(partialParams: ToOptional<{
      [K in keyof CreateAcceleratorRequest & keyof CreateAcceleratorRequest & keyof CreateAcceleratorRequest & keyof CreateAcceleratorRequest]: (CreateAcceleratorRequest & CreateAcceleratorRequest & CreateAcceleratorRequest & CreateAcceleratorRequest)[K]
    }>): Request<CreateAcceleratorResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAccelerator(
          this.ops["CreateAccelerator"].applicator.apply(partialParams)
        );
    }

    invokeCreateCustomRoutingAccelerator(partialParams: ToOptional<{
      [K in keyof CreateCustomRoutingAcceleratorRequest & keyof CreateCustomRoutingAcceleratorRequest & keyof CreateCustomRoutingAcceleratorRequest & keyof CreateCustomRoutingAcceleratorRequest]: (CreateCustomRoutingAcceleratorRequest & CreateCustomRoutingAcceleratorRequest & CreateCustomRoutingAcceleratorRequest & CreateCustomRoutingAcceleratorRequest)[K]
    }>): Request<CreateCustomRoutingAcceleratorResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCustomRoutingAccelerator(
          this.ops["CreateCustomRoutingAccelerator"].applicator.apply(partialParams)
        );
    }

    invokeCreateCustomRoutingEndpointGroup(partialParams: ToOptional<{
      [K in keyof CreateCustomRoutingEndpointGroupRequest & keyof CreateCustomRoutingEndpointGroupRequest & keyof CreateCustomRoutingEndpointGroupRequest & keyof CreateCustomRoutingEndpointGroupRequest]: (CreateCustomRoutingEndpointGroupRequest & CreateCustomRoutingEndpointGroupRequest & CreateCustomRoutingEndpointGroupRequest & CreateCustomRoutingEndpointGroupRequest)[K]
    }>): Request<CreateCustomRoutingEndpointGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCustomRoutingEndpointGroup(
          this.ops["CreateCustomRoutingEndpointGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateCustomRoutingListener(partialParams: ToOptional<{
      [K in keyof CreateCustomRoutingListenerRequest & keyof CreateCustomRoutingListenerRequest & keyof CreateCustomRoutingListenerRequest & keyof CreateCustomRoutingListenerRequest]: (CreateCustomRoutingListenerRequest & CreateCustomRoutingListenerRequest & CreateCustomRoutingListenerRequest & CreateCustomRoutingListenerRequest)[K]
    }>): Request<CreateCustomRoutingListenerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCustomRoutingListener(
          this.ops["CreateCustomRoutingListener"].applicator.apply(partialParams)
        );
    }

    invokeCreateEndpointGroup(partialParams: ToOptional<{
      [K in keyof CreateEndpointGroupRequest & keyof CreateEndpointGroupRequest & keyof CreateEndpointGroupRequest & keyof CreateEndpointGroupRequest]: (CreateEndpointGroupRequest & CreateEndpointGroupRequest & CreateEndpointGroupRequest & CreateEndpointGroupRequest)[K]
    }>): Request<CreateEndpointGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createEndpointGroup(
          this.ops["CreateEndpointGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateListener(partialParams: ToOptional<{
      [K in keyof CreateListenerRequest & keyof CreateListenerRequest & keyof CreateListenerRequest & keyof CreateListenerRequest]: (CreateListenerRequest & CreateListenerRequest & CreateListenerRequest & CreateListenerRequest)[K]
    }>): Request<CreateListenerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createListener(
          this.ops["CreateListener"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAccelerator(partialParams: ToOptional<{
      [K in keyof DeleteAcceleratorRequest & keyof DeleteAcceleratorRequest & keyof DeleteAcceleratorRequest & keyof DeleteAcceleratorRequest]: (DeleteAcceleratorRequest & DeleteAcceleratorRequest & DeleteAcceleratorRequest & DeleteAcceleratorRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAccelerator(
          this.ops["DeleteAccelerator"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCustomRoutingAccelerator(partialParams: ToOptional<{
      [K in keyof DeleteCustomRoutingAcceleratorRequest & keyof DeleteCustomRoutingAcceleratorRequest & keyof DeleteCustomRoutingAcceleratorRequest & keyof DeleteCustomRoutingAcceleratorRequest]: (DeleteCustomRoutingAcceleratorRequest & DeleteCustomRoutingAcceleratorRequest & DeleteCustomRoutingAcceleratorRequest & DeleteCustomRoutingAcceleratorRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCustomRoutingAccelerator(
          this.ops["DeleteCustomRoutingAccelerator"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCustomRoutingEndpointGroup(partialParams: ToOptional<{
      [K in keyof DeleteCustomRoutingEndpointGroupRequest & keyof DeleteCustomRoutingEndpointGroupRequest & keyof DeleteCustomRoutingEndpointGroupRequest & keyof DeleteCustomRoutingEndpointGroupRequest]: (DeleteCustomRoutingEndpointGroupRequest & DeleteCustomRoutingEndpointGroupRequest & DeleteCustomRoutingEndpointGroupRequest & DeleteCustomRoutingEndpointGroupRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCustomRoutingEndpointGroup(
          this.ops["DeleteCustomRoutingEndpointGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCustomRoutingListener(partialParams: ToOptional<{
      [K in keyof DeleteCustomRoutingListenerRequest & keyof DeleteCustomRoutingListenerRequest & keyof DeleteCustomRoutingListenerRequest & keyof DeleteCustomRoutingListenerRequest]: (DeleteCustomRoutingListenerRequest & DeleteCustomRoutingListenerRequest & DeleteCustomRoutingListenerRequest & DeleteCustomRoutingListenerRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCustomRoutingListener(
          this.ops["DeleteCustomRoutingListener"].applicator.apply(partialParams)
        );
    }

    invokeDeleteEndpointGroup(partialParams: ToOptional<{
      [K in keyof DeleteEndpointGroupRequest & keyof DeleteEndpointGroupRequest & keyof DeleteEndpointGroupRequest & keyof DeleteEndpointGroupRequest]: (DeleteEndpointGroupRequest & DeleteEndpointGroupRequest & DeleteEndpointGroupRequest & DeleteEndpointGroupRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEndpointGroup(
          this.ops["DeleteEndpointGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteListener(partialParams: ToOptional<{
      [K in keyof DeleteListenerRequest & keyof DeleteListenerRequest & keyof DeleteListenerRequest & keyof DeleteListenerRequest]: (DeleteListenerRequest & DeleteListenerRequest & DeleteListenerRequest & DeleteListenerRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteListener(
          this.ops["DeleteListener"].applicator.apply(partialParams)
        );
    }

    invokeDenyCustomRoutingTraffic(partialParams: ToOptional<{
      [K in keyof DenyCustomRoutingTrafficRequest & keyof DenyCustomRoutingTrafficRequest & keyof DenyCustomRoutingTrafficRequest & keyof DenyCustomRoutingTrafficRequest]: (DenyCustomRoutingTrafficRequest & DenyCustomRoutingTrafficRequest & DenyCustomRoutingTrafficRequest & DenyCustomRoutingTrafficRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.denyCustomRoutingTraffic(
          this.ops["DenyCustomRoutingTraffic"].applicator.apply(partialParams)
        );
    }

    invokeDeprovisionByoipCidr(partialParams: ToOptional<{
      [K in keyof DeprovisionByoipCidrRequest & keyof DeprovisionByoipCidrRequest & keyof DeprovisionByoipCidrRequest & keyof DeprovisionByoipCidrRequest]: (DeprovisionByoipCidrRequest & DeprovisionByoipCidrRequest & DeprovisionByoipCidrRequest & DeprovisionByoipCidrRequest)[K]
    }>): Request<DeprovisionByoipCidrResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deprovisionByoipCidr(
          this.ops["DeprovisionByoipCidr"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAccelerator(partialParams: ToOptional<{
      [K in keyof DescribeAcceleratorRequest & keyof DescribeAcceleratorRequest & keyof DescribeAcceleratorRequest & keyof DescribeAcceleratorRequest]: (DescribeAcceleratorRequest & DescribeAcceleratorRequest & DescribeAcceleratorRequest & DescribeAcceleratorRequest)[K]
    }>): Request<DescribeAcceleratorResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAccelerator(
          this.ops["DescribeAccelerator"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAcceleratorAttributes(partialParams: ToOptional<{
      [K in keyof DescribeAcceleratorAttributesRequest & keyof DescribeAcceleratorAttributesRequest & keyof DescribeAcceleratorAttributesRequest & keyof DescribeAcceleratorAttributesRequest]: (DescribeAcceleratorAttributesRequest & DescribeAcceleratorAttributesRequest & DescribeAcceleratorAttributesRequest & DescribeAcceleratorAttributesRequest)[K]
    }>): Request<DescribeAcceleratorAttributesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAcceleratorAttributes(
          this.ops["DescribeAcceleratorAttributes"].applicator.apply(partialParams)
        );
    }

    invokeDescribeCustomRoutingAccelerator(partialParams: ToOptional<{
      [K in keyof DescribeCustomRoutingAcceleratorRequest & keyof DescribeCustomRoutingAcceleratorRequest & keyof DescribeCustomRoutingAcceleratorRequest & keyof DescribeCustomRoutingAcceleratorRequest]: (DescribeCustomRoutingAcceleratorRequest & DescribeCustomRoutingAcceleratorRequest & DescribeCustomRoutingAcceleratorRequest & DescribeCustomRoutingAcceleratorRequest)[K]
    }>): Request<DescribeCustomRoutingAcceleratorResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCustomRoutingAccelerator(
          this.ops["DescribeCustomRoutingAccelerator"].applicator.apply(partialParams)
        );
    }

    invokeDescribeCustomRoutingAcceleratorAttributes(partialParams: ToOptional<{
      [K in keyof DescribeCustomRoutingAcceleratorAttributesRequest & keyof DescribeCustomRoutingAcceleratorAttributesRequest & keyof DescribeCustomRoutingAcceleratorAttributesRequest & keyof DescribeCustomRoutingAcceleratorAttributesRequest]: (DescribeCustomRoutingAcceleratorAttributesRequest & DescribeCustomRoutingAcceleratorAttributesRequest & DescribeCustomRoutingAcceleratorAttributesRequest & DescribeCustomRoutingAcceleratorAttributesRequest)[K]
    }>): Request<DescribeCustomRoutingAcceleratorAttributesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCustomRoutingAcceleratorAttributes(
          this.ops["DescribeCustomRoutingAcceleratorAttributes"].applicator.apply(partialParams)
        );
    }

    invokeDescribeCustomRoutingEndpointGroup(partialParams: ToOptional<{
      [K in keyof DescribeCustomRoutingEndpointGroupRequest & keyof DescribeCustomRoutingEndpointGroupRequest & keyof DescribeCustomRoutingEndpointGroupRequest & keyof DescribeCustomRoutingEndpointGroupRequest]: (DescribeCustomRoutingEndpointGroupRequest & DescribeCustomRoutingEndpointGroupRequest & DescribeCustomRoutingEndpointGroupRequest & DescribeCustomRoutingEndpointGroupRequest)[K]
    }>): Request<DescribeCustomRoutingEndpointGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCustomRoutingEndpointGroup(
          this.ops["DescribeCustomRoutingEndpointGroup"].applicator.apply(partialParams)
        );
    }

    invokeDescribeCustomRoutingListener(partialParams: ToOptional<{
      [K in keyof DescribeCustomRoutingListenerRequest & keyof DescribeCustomRoutingListenerRequest & keyof DescribeCustomRoutingListenerRequest & keyof DescribeCustomRoutingListenerRequest]: (DescribeCustomRoutingListenerRequest & DescribeCustomRoutingListenerRequest & DescribeCustomRoutingListenerRequest & DescribeCustomRoutingListenerRequest)[K]
    }>): Request<DescribeCustomRoutingListenerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCustomRoutingListener(
          this.ops["DescribeCustomRoutingListener"].applicator.apply(partialParams)
        );
    }

    invokeDescribeEndpointGroup(partialParams: ToOptional<{
      [K in keyof DescribeEndpointGroupRequest & keyof DescribeEndpointGroupRequest & keyof DescribeEndpointGroupRequest & keyof DescribeEndpointGroupRequest]: (DescribeEndpointGroupRequest & DescribeEndpointGroupRequest & DescribeEndpointGroupRequest & DescribeEndpointGroupRequest)[K]
    }>): Request<DescribeEndpointGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeEndpointGroup(
          this.ops["DescribeEndpointGroup"].applicator.apply(partialParams)
        );
    }

    invokeDescribeListener(partialParams: ToOptional<{
      [K in keyof DescribeListenerRequest & keyof DescribeListenerRequest & keyof DescribeListenerRequest & keyof DescribeListenerRequest]: (DescribeListenerRequest & DescribeListenerRequest & DescribeListenerRequest & DescribeListenerRequest)[K]
    }>): Request<DescribeListenerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeListener(
          this.ops["DescribeListener"].applicator.apply(partialParams)
        );
    }

    invokeListCustomRoutingEndpointGroups(partialParams: ToOptional<{
      [K in keyof ListCustomRoutingEndpointGroupsRequest & keyof ListCustomRoutingEndpointGroupsRequest & keyof ListCustomRoutingEndpointGroupsRequest & keyof ListCustomRoutingEndpointGroupsRequest]: (ListCustomRoutingEndpointGroupsRequest & ListCustomRoutingEndpointGroupsRequest & ListCustomRoutingEndpointGroupsRequest & ListCustomRoutingEndpointGroupsRequest)[K]
    }>): Request<ListCustomRoutingEndpointGroupsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listCustomRoutingEndpointGroups(
          this.ops["ListCustomRoutingEndpointGroups"].applicator.apply(partialParams)
        );
    }

    invokeListCustomRoutingListeners(partialParams: ToOptional<{
      [K in keyof ListCustomRoutingListenersRequest & keyof ListCustomRoutingListenersRequest & keyof ListCustomRoutingListenersRequest & keyof ListCustomRoutingListenersRequest]: (ListCustomRoutingListenersRequest & ListCustomRoutingListenersRequest & ListCustomRoutingListenersRequest & ListCustomRoutingListenersRequest)[K]
    }>): Request<ListCustomRoutingListenersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listCustomRoutingListeners(
          this.ops["ListCustomRoutingListeners"].applicator.apply(partialParams)
        );
    }

    invokeListCustomRoutingPortMappings(partialParams: ToOptional<{
      [K in keyof ListCustomRoutingPortMappingsRequest & keyof ListCustomRoutingPortMappingsRequest & keyof ListCustomRoutingPortMappingsRequest & keyof ListCustomRoutingPortMappingsRequest]: (ListCustomRoutingPortMappingsRequest & ListCustomRoutingPortMappingsRequest & ListCustomRoutingPortMappingsRequest & ListCustomRoutingPortMappingsRequest)[K]
    }>): Request<ListCustomRoutingPortMappingsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listCustomRoutingPortMappings(
          this.ops["ListCustomRoutingPortMappings"].applicator.apply(partialParams)
        );
    }

    invokeListCustomRoutingPortMappingsByDestination(partialParams: ToOptional<{
      [K in keyof ListCustomRoutingPortMappingsByDestinationRequest & keyof ListCustomRoutingPortMappingsByDestinationRequest & keyof ListCustomRoutingPortMappingsByDestinationRequest & keyof ListCustomRoutingPortMappingsByDestinationRequest]: (ListCustomRoutingPortMappingsByDestinationRequest & ListCustomRoutingPortMappingsByDestinationRequest & ListCustomRoutingPortMappingsByDestinationRequest & ListCustomRoutingPortMappingsByDestinationRequest)[K]
    }>): Request<ListCustomRoutingPortMappingsByDestinationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listCustomRoutingPortMappingsByDestination(
          this.ops["ListCustomRoutingPortMappingsByDestination"].applicator.apply(partialParams)
        );
    }

    invokeListEndpointGroups(partialParams: ToOptional<{
      [K in keyof ListEndpointGroupsRequest & keyof ListEndpointGroupsRequest & keyof ListEndpointGroupsRequest & keyof ListEndpointGroupsRequest]: (ListEndpointGroupsRequest & ListEndpointGroupsRequest & ListEndpointGroupsRequest & ListEndpointGroupsRequest)[K]
    }>): Request<ListEndpointGroupsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listEndpointGroups(
          this.ops["ListEndpointGroups"].applicator.apply(partialParams)
        );
    }

    invokeListListeners(partialParams: ToOptional<{
      [K in keyof ListListenersRequest & keyof ListListenersRequest & keyof ListListenersRequest & keyof ListListenersRequest]: (ListListenersRequest & ListListenersRequest & ListListenersRequest & ListListenersRequest)[K]
    }>): Request<ListListenersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listListeners(
          this.ops["ListListeners"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeProvisionByoipCidr(partialParams: ToOptional<{
      [K in keyof ProvisionByoipCidrRequest & keyof ProvisionByoipCidrRequest & keyof ProvisionByoipCidrRequest & keyof ProvisionByoipCidrRequest]: (ProvisionByoipCidrRequest & ProvisionByoipCidrRequest & ProvisionByoipCidrRequest & ProvisionByoipCidrRequest)[K]
    }>): Request<ProvisionByoipCidrResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.provisionByoipCidr(
          this.ops["ProvisionByoipCidr"].applicator.apply(partialParams)
        );
    }

    invokeRemoveCustomRoutingEndpoints(partialParams: ToOptional<{
      [K in keyof RemoveCustomRoutingEndpointsRequest & keyof RemoveCustomRoutingEndpointsRequest & keyof RemoveCustomRoutingEndpointsRequest & keyof RemoveCustomRoutingEndpointsRequest]: (RemoveCustomRoutingEndpointsRequest & RemoveCustomRoutingEndpointsRequest & RemoveCustomRoutingEndpointsRequest & RemoveCustomRoutingEndpointsRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeCustomRoutingEndpoints(
          this.ops["RemoveCustomRoutingEndpoints"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAccelerator(partialParams: ToOptional<{
      [K in keyof UpdateAcceleratorRequest & keyof UpdateAcceleratorRequest & keyof UpdateAcceleratorRequest & keyof UpdateAcceleratorRequest]: (UpdateAcceleratorRequest & UpdateAcceleratorRequest & UpdateAcceleratorRequest & UpdateAcceleratorRequest)[K]
    }>): Request<UpdateAcceleratorResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAccelerator(
          this.ops["UpdateAccelerator"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAcceleratorAttributes(partialParams: ToOptional<{
      [K in keyof UpdateAcceleratorAttributesRequest & keyof UpdateAcceleratorAttributesRequest & keyof UpdateAcceleratorAttributesRequest & keyof UpdateAcceleratorAttributesRequest]: (UpdateAcceleratorAttributesRequest & UpdateAcceleratorAttributesRequest & UpdateAcceleratorAttributesRequest & UpdateAcceleratorAttributesRequest)[K]
    }>): Request<UpdateAcceleratorAttributesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAcceleratorAttributes(
          this.ops["UpdateAcceleratorAttributes"].applicator.apply(partialParams)
        );
    }

    invokeUpdateCustomRoutingAccelerator(partialParams: ToOptional<{
      [K in keyof UpdateCustomRoutingAcceleratorRequest & keyof UpdateCustomRoutingAcceleratorRequest & keyof UpdateCustomRoutingAcceleratorRequest & keyof UpdateCustomRoutingAcceleratorRequest]: (UpdateCustomRoutingAcceleratorRequest & UpdateCustomRoutingAcceleratorRequest & UpdateCustomRoutingAcceleratorRequest & UpdateCustomRoutingAcceleratorRequest)[K]
    }>): Request<UpdateCustomRoutingAcceleratorResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCustomRoutingAccelerator(
          this.ops["UpdateCustomRoutingAccelerator"].applicator.apply(partialParams)
        );
    }

    invokeUpdateCustomRoutingAcceleratorAttributes(partialParams: ToOptional<{
      [K in keyof UpdateCustomRoutingAcceleratorAttributesRequest & keyof UpdateCustomRoutingAcceleratorAttributesRequest & keyof UpdateCustomRoutingAcceleratorAttributesRequest & keyof UpdateCustomRoutingAcceleratorAttributesRequest]: (UpdateCustomRoutingAcceleratorAttributesRequest & UpdateCustomRoutingAcceleratorAttributesRequest & UpdateCustomRoutingAcceleratorAttributesRequest & UpdateCustomRoutingAcceleratorAttributesRequest)[K]
    }>): Request<UpdateCustomRoutingAcceleratorAttributesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCustomRoutingAcceleratorAttributes(
          this.ops["UpdateCustomRoutingAcceleratorAttributes"].applicator.apply(partialParams)
        );
    }

    invokeUpdateCustomRoutingListener(partialParams: ToOptional<{
      [K in keyof UpdateCustomRoutingListenerRequest & keyof UpdateCustomRoutingListenerRequest & keyof UpdateCustomRoutingListenerRequest & keyof UpdateCustomRoutingListenerRequest]: (UpdateCustomRoutingListenerRequest & UpdateCustomRoutingListenerRequest & UpdateCustomRoutingListenerRequest & UpdateCustomRoutingListenerRequest)[K]
    }>): Request<UpdateCustomRoutingListenerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCustomRoutingListener(
          this.ops["UpdateCustomRoutingListener"].applicator.apply(partialParams)
        );
    }

    invokeUpdateEndpointGroup(partialParams: ToOptional<{
      [K in keyof UpdateEndpointGroupRequest & keyof UpdateEndpointGroupRequest & keyof UpdateEndpointGroupRequest & keyof UpdateEndpointGroupRequest]: (UpdateEndpointGroupRequest & UpdateEndpointGroupRequest & UpdateEndpointGroupRequest & UpdateEndpointGroupRequest)[K]
    }>): Request<UpdateEndpointGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateEndpointGroup(
          this.ops["UpdateEndpointGroup"].applicator.apply(partialParams)
        );
    }

    invokeUpdateListener(partialParams: ToOptional<{
      [K in keyof UpdateListenerRequest & keyof UpdateListenerRequest & keyof UpdateListenerRequest & keyof UpdateListenerRequest]: (UpdateListenerRequest & UpdateListenerRequest & UpdateListenerRequest & UpdateListenerRequest)[K]
    }>): Request<UpdateListenerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateListener(
          this.ops["UpdateListener"].applicator.apply(partialParams)
        );
    }

    invokeWithdrawByoipCidr(partialParams: ToOptional<{
      [K in keyof WithdrawByoipCidrRequest & keyof WithdrawByoipCidrRequest & keyof WithdrawByoipCidrRequest & keyof WithdrawByoipCidrRequest]: (WithdrawByoipCidrRequest & WithdrawByoipCidrRequest & WithdrawByoipCidrRequest & WithdrawByoipCidrRequest)[K]
    }>): Request<WithdrawByoipCidrResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.withdrawByoipCidr(
          this.ops["WithdrawByoipCidr"].applicator.apply(partialParams)
        );
    }
}