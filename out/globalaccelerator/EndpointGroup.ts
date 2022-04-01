
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AddCustomRoutingEndpointsRequest,
    CreateCustomRoutingEndpointGroupRequest,
    CreateEndpointGroupRequest,
    DescribeCustomRoutingEndpointGroupRequest,
    DescribeCustomRoutingListenerRequest,
    DescribeEndpointGroupRequest,
    DescribeListenerRequest,
    ListCustomRoutingEndpointGroupsRequest,
    ListEndpointGroupsRequest,
    UpdateCustomRoutingListenerRequest,
    UpdateEndpointGroupRequest,
    UpdateListenerRequest,
    AddCustomRoutingEndpointsResponse,
    CreateCustomRoutingEndpointGroupResponse,
    CreateEndpointGroupResponse,
    DescribeCustomRoutingEndpointGroupResponse,
    DescribeCustomRoutingListenerResponse,
    DescribeEndpointGroupResponse,
    DescribeListenerResponse,
    ListCustomRoutingEndpointGroupsResponse,
    ListEndpointGroupsResponse,
    UpdateCustomRoutingListenerResponse,
    UpdateEndpointGroupResponse,
    UpdateListenerResponse
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

    invokeCreateCustomRoutingEndpointGroup(partialParams: ToOptional<{
      [K in keyof CreateCustomRoutingEndpointGroupRequest & keyof Omit<CreateCustomRoutingEndpointGroupRequest, "ListenerArn" | "EndpointGroupRegion">]: (CreateCustomRoutingEndpointGroupRequest)[K]
    }>): Request<CreateCustomRoutingEndpointGroupResponse, AWSError> {
        this.boot();
        return this.client.createCustomRoutingEndpointGroup(
          this.ops["CreateCustomRoutingEndpointGroup"].apply(partialParams)
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

    invokeListCustomRoutingEndpointGroups(partialParams: ToOptional<{
      [K in keyof ListCustomRoutingEndpointGroupsRequest & keyof Omit<ListCustomRoutingEndpointGroupsRequest, "ListenerArn">]: (ListCustomRoutingEndpointGroupsRequest)[K]
    }>): Request<ListCustomRoutingEndpointGroupsResponse, AWSError> {
        this.boot();
        return this.client.listCustomRoutingEndpointGroups(
          this.ops["ListCustomRoutingEndpointGroups"].apply(partialParams)
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
}