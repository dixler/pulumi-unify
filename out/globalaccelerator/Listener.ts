
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateCustomRoutingListenerRequest,
    CreateListenerRequest,
    DescribeAcceleratorRequest,
    DescribeAcceleratorAttributesRequest,
    DescribeCustomRoutingAcceleratorRequest,
    DescribeCustomRoutingAcceleratorAttributesRequest,
    ListCustomRoutingListenersRequest,
    ListCustomRoutingPortMappingsRequest,
    ListListenersRequest,
    UpdateAcceleratorRequest,
    UpdateAcceleratorAttributesRequest,
    UpdateCustomRoutingAcceleratorRequest,
    UpdateCustomRoutingAcceleratorAttributesRequest,
    CreateCustomRoutingListenerResponse,
    CreateListenerResponse,
    DescribeAcceleratorResponse,
    DescribeAcceleratorAttributesResponse,
    DescribeCustomRoutingAcceleratorResponse,
    DescribeCustomRoutingAcceleratorAttributesResponse,
    ListCustomRoutingListenersResponse,
    ListCustomRoutingPortMappingsResponse,
    ListListenersResponse,
    UpdateAcceleratorResponse,
    UpdateAcceleratorAttributesResponse,
    UpdateCustomRoutingAcceleratorResponse,
    UpdateCustomRoutingAcceleratorAttributesResponse
} from "aws-sdk/clients/globalaccelerator";
const schema = require("../apis/globalaccelerator-2018-08-08.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.globalaccelerator.Listener {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.globalaccelerator.Listener>) {
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

    invokeCreateCustomRoutingListener(partialParams: ToOptional<{
      [K in keyof CreateCustomRoutingListenerRequest & keyof Omit<CreateCustomRoutingListenerRequest, "AcceleratorArn">]: (CreateCustomRoutingListenerRequest)[K]
    }>): Request<CreateCustomRoutingListenerResponse, AWSError> {
        this.boot();
        return this.client.createCustomRoutingListener(
          this.ops["CreateCustomRoutingListener"].apply(partialParams)
        );
    }

    invokeCreateListener(partialParams: ToOptional<{
      [K in keyof CreateListenerRequest & keyof Omit<CreateListenerRequest, "AcceleratorArn" | "Protocol">]: (CreateListenerRequest)[K]
    }>): Request<CreateListenerResponse, AWSError> {
        this.boot();
        return this.client.createListener(
          this.ops["CreateListener"].apply(partialParams)
        );
    }

    invokeDescribeAccelerator(partialParams: ToOptional<{
      [K in keyof DescribeAcceleratorRequest & keyof Omit<DescribeAcceleratorRequest, "AcceleratorArn">]: (DescribeAcceleratorRequest)[K]
    }>): Request<DescribeAcceleratorResponse, AWSError> {
        this.boot();
        return this.client.describeAccelerator(
          this.ops["DescribeAccelerator"].apply(partialParams)
        );
    }

    invokeDescribeAcceleratorAttributes(partialParams: ToOptional<{
      [K in keyof DescribeAcceleratorAttributesRequest & keyof Omit<DescribeAcceleratorAttributesRequest, "AcceleratorArn">]: (DescribeAcceleratorAttributesRequest)[K]
    }>): Request<DescribeAcceleratorAttributesResponse, AWSError> {
        this.boot();
        return this.client.describeAcceleratorAttributes(
          this.ops["DescribeAcceleratorAttributes"].apply(partialParams)
        );
    }

    invokeDescribeCustomRoutingAccelerator(partialParams: ToOptional<{
      [K in keyof DescribeCustomRoutingAcceleratorRequest & keyof Omit<DescribeCustomRoutingAcceleratorRequest, "AcceleratorArn">]: (DescribeCustomRoutingAcceleratorRequest)[K]
    }>): Request<DescribeCustomRoutingAcceleratorResponse, AWSError> {
        this.boot();
        return this.client.describeCustomRoutingAccelerator(
          this.ops["DescribeCustomRoutingAccelerator"].apply(partialParams)
        );
    }

    invokeDescribeCustomRoutingAcceleratorAttributes(partialParams: ToOptional<{
      [K in keyof DescribeCustomRoutingAcceleratorAttributesRequest & keyof Omit<DescribeCustomRoutingAcceleratorAttributesRequest, "AcceleratorArn">]: (DescribeCustomRoutingAcceleratorAttributesRequest)[K]
    }>): Request<DescribeCustomRoutingAcceleratorAttributesResponse, AWSError> {
        this.boot();
        return this.client.describeCustomRoutingAcceleratorAttributes(
          this.ops["DescribeCustomRoutingAcceleratorAttributes"].apply(partialParams)
        );
    }

    invokeListCustomRoutingListeners(partialParams: ToOptional<{
      [K in keyof ListCustomRoutingListenersRequest & keyof Omit<ListCustomRoutingListenersRequest, "AcceleratorArn">]: (ListCustomRoutingListenersRequest)[K]
    }>): Request<ListCustomRoutingListenersResponse, AWSError> {
        this.boot();
        return this.client.listCustomRoutingListeners(
          this.ops["ListCustomRoutingListeners"].apply(partialParams)
        );
    }

    invokeListCustomRoutingPortMappings(partialParams: ToOptional<{
      [K in keyof ListCustomRoutingPortMappingsRequest & keyof Omit<ListCustomRoutingPortMappingsRequest, "AcceleratorArn">]: (ListCustomRoutingPortMappingsRequest)[K]
    }>): Request<ListCustomRoutingPortMappingsResponse, AWSError> {
        this.boot();
        return this.client.listCustomRoutingPortMappings(
          this.ops["ListCustomRoutingPortMappings"].apply(partialParams)
        );
    }

    invokeListListeners(partialParams: ToOptional<{
      [K in keyof ListListenersRequest & keyof Omit<ListListenersRequest, "AcceleratorArn">]: (ListListenersRequest)[K]
    }>): Request<ListListenersResponse, AWSError> {
        this.boot();
        return this.client.listListeners(
          this.ops["ListListeners"].apply(partialParams)
        );
    }

    invokeUpdateAccelerator(partialParams: ToOptional<{
      [K in keyof UpdateAcceleratorRequest & keyof Omit<UpdateAcceleratorRequest, "AcceleratorArn">]: (UpdateAcceleratorRequest)[K]
    }>): Request<UpdateAcceleratorResponse, AWSError> {
        this.boot();
        return this.client.updateAccelerator(
          this.ops["UpdateAccelerator"].apply(partialParams)
        );
    }

    invokeUpdateAcceleratorAttributes(partialParams: ToOptional<{
      [K in keyof UpdateAcceleratorAttributesRequest & keyof Omit<UpdateAcceleratorAttributesRequest, "AcceleratorArn">]: (UpdateAcceleratorAttributesRequest)[K]
    }>): Request<UpdateAcceleratorAttributesResponse, AWSError> {
        this.boot();
        return this.client.updateAcceleratorAttributes(
          this.ops["UpdateAcceleratorAttributes"].apply(partialParams)
        );
    }

    invokeUpdateCustomRoutingAccelerator(partialParams: ToOptional<{
      [K in keyof UpdateCustomRoutingAcceleratorRequest & keyof Omit<UpdateCustomRoutingAcceleratorRequest, "AcceleratorArn">]: (UpdateCustomRoutingAcceleratorRequest)[K]
    }>): Request<UpdateCustomRoutingAcceleratorResponse, AWSError> {
        this.boot();
        return this.client.updateCustomRoutingAccelerator(
          this.ops["UpdateCustomRoutingAccelerator"].apply(partialParams)
        );
    }

    invokeUpdateCustomRoutingAcceleratorAttributes(partialParams: ToOptional<{
      [K in keyof UpdateCustomRoutingAcceleratorAttributesRequest & keyof Omit<UpdateCustomRoutingAcceleratorAttributesRequest, "AcceleratorArn">]: (UpdateCustomRoutingAcceleratorAttributesRequest)[K]
    }>): Request<UpdateCustomRoutingAcceleratorAttributesResponse, AWSError> {
        this.boot();
        return this.client.updateCustomRoutingAcceleratorAttributes(
          this.ops["UpdateCustomRoutingAcceleratorAttributes"].apply(partialParams)
        );
    }
}