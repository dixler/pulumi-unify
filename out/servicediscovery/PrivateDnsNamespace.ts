
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateHttpNamespaceRequest,
    CreatePrivateDnsNamespaceRequest,
    CreatePublicDnsNamespaceRequest,
    CreateServiceRequest,
    DeleteNamespaceRequest,
    DeleteServiceRequest,
    DeregisterInstanceRequest,
    DiscoverInstancesRequest,
    GetInstanceRequest,
    GetInstancesHealthStatusRequest,
    GetNamespaceRequest,
    GetOperationRequest,
    GetServiceRequest,
    ListInstancesRequest,
    ListNamespacesRequest,
    ListOperationsRequest,
    ListServicesRequest,
    ListTagsForResourceRequest,
    RegisterInstanceRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateHttpNamespaceRequest,
    UpdatePrivateDnsNamespaceRequest,
    UpdatePublicDnsNamespaceRequest,
    UpdateServiceRequest,
    CreateHttpNamespaceResponse,
    CreatePrivateDnsNamespaceResponse,
    CreatePublicDnsNamespaceResponse,
    CreateServiceResponse,
    DeleteNamespaceResponse,
    DeleteServiceResponse,
    DeregisterInstanceResponse,
    DiscoverInstancesResponse,
    GetInstanceResponse,
    GetInstancesHealthStatusResponse,
    GetNamespaceResponse,
    GetOperationResponse,
    GetServiceResponse,
    ListInstancesResponse,
    ListNamespacesResponse,
    ListOperationsResponse,
    ListServicesResponse,
    ListTagsForResourceResponse,
    RegisterInstanceResponse,
    TagResourceResponse,
    UntagResourceResponse,
    UpdateHttpNamespaceResponse,
    UpdatePrivateDnsNamespaceResponse,
    UpdatePublicDnsNamespaceResponse,
    UpdateServiceResponse
} from "aws-sdk/clients/servicediscovery";
const schema = require("../apis/servicediscovery-2017-03-14.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.servicediscovery.PrivateDnsNamespace {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.servicediscovery.PrivateDnsNamespace>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.ServiceDiscovery()
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

    invokeCreateHttpNamespace(partialParams: ToOptional<{
      [K in keyof CreateHttpNamespaceRequest & keyof Omit<CreateHttpNamespaceRequest, "Name">]: (CreateHttpNamespaceRequest)[K]
    }>): Request<CreateHttpNamespaceResponse, AWSError> {
        this.boot();
        return this.client.createHttpNamespace(
          this.ops["CreateHttpNamespace"].apply(partialParams)
        );
    }

    invokeCreatePrivateDnsNamespace(partialParams: ToOptional<{
      [K in keyof CreatePrivateDnsNamespaceRequest & keyof Omit<CreatePrivateDnsNamespaceRequest, "Name" | "Vpc">]: (CreatePrivateDnsNamespaceRequest)[K]
    }>): Request<CreatePrivateDnsNamespaceResponse, AWSError> {
        this.boot();
        return this.client.createPrivateDnsNamespace(
          this.ops["CreatePrivateDnsNamespace"].apply(partialParams)
        );
    }

    invokeCreatePublicDnsNamespace(partialParams: ToOptional<{
      [K in keyof CreatePublicDnsNamespaceRequest & keyof Omit<CreatePublicDnsNamespaceRequest, "Name">]: (CreatePublicDnsNamespaceRequest)[K]
    }>): Request<CreatePublicDnsNamespaceResponse, AWSError> {
        this.boot();
        return this.client.createPublicDnsNamespace(
          this.ops["CreatePublicDnsNamespace"].apply(partialParams)
        );
    }

    invokeCreateService(partialParams: ToOptional<{
      [K in keyof CreateServiceRequest & keyof Omit<CreateServiceRequest, "Name">]: (CreateServiceRequest)[K]
    }>): Request<CreateServiceResponse, AWSError> {
        this.boot();
        return this.client.createService(
          this.ops["CreateService"].apply(partialParams)
        );
    }

    invokeDeleteNamespace(partialParams: ToOptional<{
      [K in keyof DeleteNamespaceRequest]: (DeleteNamespaceRequest)[K]
    }>): Request<DeleteNamespaceResponse, AWSError> {
        this.boot();
        return this.client.deleteNamespace(
          this.ops["DeleteNamespace"].apply(partialParams)
        );
    }

    invokeDeleteService(partialParams: ToOptional<{
      [K in keyof DeleteServiceRequest]: (DeleteServiceRequest)[K]
    }>): Request<DeleteServiceResponse, AWSError> {
        this.boot();
        return this.client.deleteService(
          this.ops["DeleteService"].apply(partialParams)
        );
    }

    invokeDeregisterInstance(partialParams: ToOptional<{
      [K in keyof DeregisterInstanceRequest]: (DeregisterInstanceRequest)[K]
    }>): Request<DeregisterInstanceResponse, AWSError> {
        this.boot();
        return this.client.deregisterInstance(
          this.ops["DeregisterInstance"].apply(partialParams)
        );
    }

    invokeDiscoverInstances(partialParams: ToOptional<{
      [K in keyof DiscoverInstancesRequest]: (DiscoverInstancesRequest)[K]
    }>): Request<DiscoverInstancesResponse, AWSError> {
        this.boot();
        return this.client.discoverInstances(
          this.ops["DiscoverInstances"].apply(partialParams)
        );
    }

    invokeGetInstance(partialParams: ToOptional<{
      [K in keyof GetInstanceRequest]: (GetInstanceRequest)[K]
    }>): Request<GetInstanceResponse, AWSError> {
        this.boot();
        return this.client.getInstance(
          this.ops["GetInstance"].apply(partialParams)
        );
    }

    invokeGetInstancesHealthStatus(partialParams: ToOptional<{
      [K in keyof GetInstancesHealthStatusRequest]: (GetInstancesHealthStatusRequest)[K]
    }>): Request<GetInstancesHealthStatusResponse, AWSError> {
        this.boot();
        return this.client.getInstancesHealthStatus(
          this.ops["GetInstancesHealthStatus"].apply(partialParams)
        );
    }

    invokeGetNamespace(partialParams: ToOptional<{
      [K in keyof GetNamespaceRequest]: (GetNamespaceRequest)[K]
    }>): Request<GetNamespaceResponse, AWSError> {
        this.boot();
        return this.client.getNamespace(
          this.ops["GetNamespace"].apply(partialParams)
        );
    }

    invokeGetOperation(partialParams: ToOptional<{
      [K in keyof GetOperationRequest]: (GetOperationRequest)[K]
    }>): Request<GetOperationResponse, AWSError> {
        this.boot();
        return this.client.getOperation(
          this.ops["GetOperation"].apply(partialParams)
        );
    }

    invokeGetService(partialParams: ToOptional<{
      [K in keyof GetServiceRequest]: (GetServiceRequest)[K]
    }>): Request<GetServiceResponse, AWSError> {
        this.boot();
        return this.client.getService(
          this.ops["GetService"].apply(partialParams)
        );
    }

    invokeListInstances(partialParams: ToOptional<{
      [K in keyof ListInstancesRequest]: (ListInstancesRequest)[K]
    }>): Request<ListInstancesResponse, AWSError> {
        this.boot();
        return this.client.listInstances(
          this.ops["ListInstances"].apply(partialParams)
        );
    }

    invokeListNamespaces(partialParams: ToOptional<{
      [K in keyof ListNamespacesRequest]: (ListNamespacesRequest)[K]
    }>): Request<ListNamespacesResponse, AWSError> {
        this.boot();
        return this.client.listNamespaces(
          this.ops["ListNamespaces"].apply(partialParams)
        );
    }

    invokeListOperations(partialParams: ToOptional<{
      [K in keyof ListOperationsRequest]: (ListOperationsRequest)[K]
    }>): Request<ListOperationsResponse, AWSError> {
        this.boot();
        return this.client.listOperations(
          this.ops["ListOperations"].apply(partialParams)
        );
    }

    invokeListServices(partialParams: ToOptional<{
      [K in keyof ListServicesRequest]: (ListServicesRequest)[K]
    }>): Request<ListServicesResponse, AWSError> {
        this.boot();
        return this.client.listServices(
          this.ops["ListServices"].apply(partialParams)
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

    invokeRegisterInstance(partialParams: ToOptional<{
      [K in keyof RegisterInstanceRequest]: (RegisterInstanceRequest)[K]
    }>): Request<RegisterInstanceResponse, AWSError> {
        this.boot();
        return this.client.registerInstance(
          this.ops["RegisterInstance"].apply(partialParams)
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

    invokeUpdateHttpNamespace(partialParams: ToOptional<{
      [K in keyof UpdateHttpNamespaceRequest]: (UpdateHttpNamespaceRequest)[K]
    }>): Request<UpdateHttpNamespaceResponse, AWSError> {
        this.boot();
        return this.client.updateHttpNamespace(
          this.ops["UpdateHttpNamespace"].apply(partialParams)
        );
    }

    invokeUpdatePrivateDnsNamespace(partialParams: ToOptional<{
      [K in keyof UpdatePrivateDnsNamespaceRequest]: (UpdatePrivateDnsNamespaceRequest)[K]
    }>): Request<UpdatePrivateDnsNamespaceResponse, AWSError> {
        this.boot();
        return this.client.updatePrivateDnsNamespace(
          this.ops["UpdatePrivateDnsNamespace"].apply(partialParams)
        );
    }

    invokeUpdatePublicDnsNamespace(partialParams: ToOptional<{
      [K in keyof UpdatePublicDnsNamespaceRequest]: (UpdatePublicDnsNamespaceRequest)[K]
    }>): Request<UpdatePublicDnsNamespaceResponse, AWSError> {
        this.boot();
        return this.client.updatePublicDnsNamespace(
          this.ops["UpdatePublicDnsNamespace"].apply(partialParams)
        );
    }

    invokeUpdateService(partialParams: ToOptional<{
      [K in keyof UpdateServiceRequest]: (UpdateServiceRequest)[K]
    }>): Request<UpdateServiceResponse, AWSError> {
        this.boot();
        return this.client.updateService(
          this.ops["UpdateService"].apply(partialParams)
        );
    }
}