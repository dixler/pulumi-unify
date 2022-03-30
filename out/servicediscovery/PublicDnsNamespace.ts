
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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
    ListTagsForResourceRequest,
    RegisterInstanceRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateHttpNamespaceRequest,
    UpdateInstanceCustomHealthStatusRequest,
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
    ListTagsForResourceResponse,
    RegisterInstanceResponse,
    TagResourceResponse,
    UntagResourceResponse,
    UpdateHttpNamespaceResponse,
    UpdatePrivateDnsNamespaceResponse,
    UpdatePublicDnsNamespaceResponse,
    UpdateServiceResponse
} from "aws-sdk/clients/servicediscovery";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.servicediscovery.PublicDnsNamespace {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.servicediscovery.PublicDnsNamespace>) {
        super(...args)
        this.client = new awssdk.ServiceDiscovery()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/servicediscovery-2017-03-14.normal.json"), this.client)
    }

    invokeCreateHttpNamespace(partialParams: ToOptional<{
      [K in keyof CreateHttpNamespaceRequest & keyof CreateHttpNamespaceRequest & keyof CreateHttpNamespaceRequest & keyof CreateHttpNamespaceRequest]: (CreateHttpNamespaceRequest & CreateHttpNamespaceRequest & CreateHttpNamespaceRequest & CreateHttpNamespaceRequest)[K]
    }>): CreateHttpNamespaceResponse {
        return this.client.createHttpNamespace(
            this.ops["CreateHttpNamespace"].apply(partialParams)
        );
    }

    invokeCreatePrivateDnsNamespace(partialParams: ToOptional<{
      [K in keyof CreatePrivateDnsNamespaceRequest & keyof CreatePrivateDnsNamespaceRequest & keyof CreatePrivateDnsNamespaceRequest & keyof CreatePrivateDnsNamespaceRequest]: (CreatePrivateDnsNamespaceRequest & CreatePrivateDnsNamespaceRequest & CreatePrivateDnsNamespaceRequest & CreatePrivateDnsNamespaceRequest)[K]
    }>): CreatePrivateDnsNamespaceResponse {
        return this.client.createPrivateDnsNamespace(
            this.ops["CreatePrivateDnsNamespace"].apply(partialParams)
        );
    }

    invokeCreatePublicDnsNamespace(partialParams: ToOptional<{
      [K in keyof CreatePublicDnsNamespaceRequest & keyof CreatePublicDnsNamespaceRequest & keyof CreatePublicDnsNamespaceRequest & keyof CreatePublicDnsNamespaceRequest]: (CreatePublicDnsNamespaceRequest & CreatePublicDnsNamespaceRequest & CreatePublicDnsNamespaceRequest & CreatePublicDnsNamespaceRequest)[K]
    }>): CreatePublicDnsNamespaceResponse {
        return this.client.createPublicDnsNamespace(
            this.ops["CreatePublicDnsNamespace"].apply(partialParams)
        );
    }

    invokeCreateService(partialParams: ToOptional<{
      [K in keyof CreateServiceRequest & keyof CreateServiceRequest & keyof CreateServiceRequest & keyof CreateServiceRequest]: (CreateServiceRequest & CreateServiceRequest & CreateServiceRequest & CreateServiceRequest)[K]
    }>): CreateServiceResponse {
        return this.client.createService(
            this.ops["CreateService"].apply(partialParams)
        );
    }

    invokeDeleteNamespace(partialParams: ToOptional<{
      [K in keyof DeleteNamespaceRequest & keyof DeleteNamespaceRequest & keyof DeleteNamespaceRequest & keyof DeleteNamespaceRequest]: (DeleteNamespaceRequest & DeleteNamespaceRequest & DeleteNamespaceRequest & DeleteNamespaceRequest)[K]
    }>): DeleteNamespaceResponse {
        return this.client.deleteNamespace(
            this.ops["DeleteNamespace"].apply(partialParams)
        );
    }

    invokeDeleteService(partialParams: ToOptional<{
      [K in keyof DeleteServiceRequest & keyof DeleteServiceRequest & keyof DeleteServiceRequest & keyof DeleteServiceRequest]: (DeleteServiceRequest & DeleteServiceRequest & DeleteServiceRequest & DeleteServiceRequest)[K]
    }>): DeleteServiceResponse {
        return this.client.deleteService(
            this.ops["DeleteService"].apply(partialParams)
        );
    }

    invokeDeregisterInstance(partialParams: ToOptional<{
      [K in keyof DeregisterInstanceRequest & keyof DeregisterInstanceRequest & keyof DeregisterInstanceRequest & keyof DeregisterInstanceRequest]: (DeregisterInstanceRequest & DeregisterInstanceRequest & DeregisterInstanceRequest & DeregisterInstanceRequest)[K]
    }>): DeregisterInstanceResponse {
        return this.client.deregisterInstance(
            this.ops["DeregisterInstance"].apply(partialParams)
        );
    }

    invokeDiscoverInstances(partialParams: ToOptional<{
      [K in keyof DiscoverInstancesRequest & keyof DiscoverInstancesRequest & keyof DiscoverInstancesRequest & keyof DiscoverInstancesRequest]: (DiscoverInstancesRequest & DiscoverInstancesRequest & DiscoverInstancesRequest & DiscoverInstancesRequest)[K]
    }>): DiscoverInstancesResponse {
        return this.client.discoverInstances(
            this.ops["DiscoverInstances"].apply(partialParams)
        );
    }

    invokeGetInstance(partialParams: ToOptional<{
      [K in keyof GetInstanceRequest & keyof GetInstanceRequest & keyof GetInstanceRequest & keyof GetInstanceRequest]: (GetInstanceRequest & GetInstanceRequest & GetInstanceRequest & GetInstanceRequest)[K]
    }>): GetInstanceResponse {
        return this.client.getInstance(
            this.ops["GetInstance"].apply(partialParams)
        );
    }

    invokeGetInstancesHealthStatus(partialParams: ToOptional<{
      [K in keyof GetInstancesHealthStatusRequest & keyof GetInstancesHealthStatusRequest & keyof GetInstancesHealthStatusRequest & keyof GetInstancesHealthStatusRequest]: (GetInstancesHealthStatusRequest & GetInstancesHealthStatusRequest & GetInstancesHealthStatusRequest & GetInstancesHealthStatusRequest)[K]
    }>): GetInstancesHealthStatusResponse {
        return this.client.getInstancesHealthStatus(
            this.ops["GetInstancesHealthStatus"].apply(partialParams)
        );
    }

    invokeGetNamespace(partialParams: ToOptional<{
      [K in keyof GetNamespaceRequest & keyof GetNamespaceRequest & keyof GetNamespaceRequest & keyof GetNamespaceRequest]: (GetNamespaceRequest & GetNamespaceRequest & GetNamespaceRequest & GetNamespaceRequest)[K]
    }>): GetNamespaceResponse {
        return this.client.getNamespace(
            this.ops["GetNamespace"].apply(partialParams)
        );
    }

    invokeGetOperation(partialParams: ToOptional<{
      [K in keyof GetOperationRequest & keyof GetOperationRequest & keyof GetOperationRequest & keyof GetOperationRequest]: (GetOperationRequest & GetOperationRequest & GetOperationRequest & GetOperationRequest)[K]
    }>): GetOperationResponse {
        return this.client.getOperation(
            this.ops["GetOperation"].apply(partialParams)
        );
    }

    invokeGetService(partialParams: ToOptional<{
      [K in keyof GetServiceRequest & keyof GetServiceRequest & keyof GetServiceRequest & keyof GetServiceRequest]: (GetServiceRequest & GetServiceRequest & GetServiceRequest & GetServiceRequest)[K]
    }>): GetServiceResponse {
        return this.client.getService(
            this.ops["GetService"].apply(partialParams)
        );
    }

    invokeListInstances(partialParams: ToOptional<{
      [K in keyof ListInstancesRequest & keyof ListInstancesRequest & keyof ListInstancesRequest & keyof ListInstancesRequest]: (ListInstancesRequest & ListInstancesRequest & ListInstancesRequest & ListInstancesRequest)[K]
    }>): ListInstancesResponse {
        return this.client.listInstances(
            this.ops["ListInstances"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeRegisterInstance(partialParams: ToOptional<{
      [K in keyof RegisterInstanceRequest & keyof RegisterInstanceRequest & keyof RegisterInstanceRequest & keyof RegisterInstanceRequest]: (RegisterInstanceRequest & RegisterInstanceRequest & RegisterInstanceRequest & RegisterInstanceRequest)[K]
    }>): RegisterInstanceResponse {
        return this.client.registerInstance(
            this.ops["RegisterInstance"].apply(partialParams)
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

    invokeUpdateHttpNamespace(partialParams: ToOptional<{
      [K in keyof UpdateHttpNamespaceRequest & keyof UpdateHttpNamespaceRequest & keyof UpdateHttpNamespaceRequest & keyof UpdateHttpNamespaceRequest]: (UpdateHttpNamespaceRequest & UpdateHttpNamespaceRequest & UpdateHttpNamespaceRequest & UpdateHttpNamespaceRequest)[K]
    }>): UpdateHttpNamespaceResponse {
        return this.client.updateHttpNamespace(
            this.ops["UpdateHttpNamespace"].apply(partialParams)
        );
    }

    invokeUpdateInstanceCustomHealthStatus(partialParams: ToOptional<{
      [K in keyof UpdateInstanceCustomHealthStatusRequest & keyof UpdateInstanceCustomHealthStatusRequest & keyof UpdateInstanceCustomHealthStatusRequest & keyof UpdateInstanceCustomHealthStatusRequest]: (UpdateInstanceCustomHealthStatusRequest & UpdateInstanceCustomHealthStatusRequest & UpdateInstanceCustomHealthStatusRequest & UpdateInstanceCustomHealthStatusRequest)[K]
    }>): void {
        return this.client.updateInstanceCustomHealthStatus(
            this.ops["UpdateInstanceCustomHealthStatus"].apply(partialParams)
        );
    }

    invokeUpdatePrivateDnsNamespace(partialParams: ToOptional<{
      [K in keyof UpdatePrivateDnsNamespaceRequest & keyof UpdatePrivateDnsNamespaceRequest & keyof UpdatePrivateDnsNamespaceRequest & keyof UpdatePrivateDnsNamespaceRequest]: (UpdatePrivateDnsNamespaceRequest & UpdatePrivateDnsNamespaceRequest & UpdatePrivateDnsNamespaceRequest & UpdatePrivateDnsNamespaceRequest)[K]
    }>): UpdatePrivateDnsNamespaceResponse {
        return this.client.updatePrivateDnsNamespace(
            this.ops["UpdatePrivateDnsNamespace"].apply(partialParams)
        );
    }

    invokeUpdatePublicDnsNamespace(partialParams: ToOptional<{
      [K in keyof UpdatePublicDnsNamespaceRequest & keyof UpdatePublicDnsNamespaceRequest & keyof UpdatePublicDnsNamespaceRequest & keyof UpdatePublicDnsNamespaceRequest]: (UpdatePublicDnsNamespaceRequest & UpdatePublicDnsNamespaceRequest & UpdatePublicDnsNamespaceRequest & UpdatePublicDnsNamespaceRequest)[K]
    }>): UpdatePublicDnsNamespaceResponse {
        return this.client.updatePublicDnsNamespace(
            this.ops["UpdatePublicDnsNamespace"].apply(partialParams)
        );
    }

    invokeUpdateService(partialParams: ToOptional<{
      [K in keyof UpdateServiceRequest & keyof UpdateServiceRequest & keyof UpdateServiceRequest & keyof UpdateServiceRequest]: (UpdateServiceRequest & UpdateServiceRequest & UpdateServiceRequest & UpdateServiceRequest)[K]
    }>): UpdateServiceResponse {
        return this.client.updateService(
            this.ops["UpdateService"].apply(partialParams)
        );
    }
}