
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
const schema = require("../apis/servicediscovery-2017-03-14.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.servicediscovery.HttpNamespace {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.servicediscovery.HttpNamespace>) {
        super(...args)
        this.client = new awssdk.ServiceDiscovery()
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

    invokeCreateHttpNamespace(partialParams: ToOptional<{
      [K in keyof CreateHttpNamespaceRequest & keyof CreateHttpNamespaceRequest & keyof CreateHttpNamespaceRequest]: (CreateHttpNamespaceRequest & CreateHttpNamespaceRequest & CreateHttpNamespaceRequest)[K]
    }>): Request<CreateHttpNamespaceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createHttpNamespace(
          this.ops["CreateHttpNamespace"].applicator.apply(partialParams)
        );
    }

    invokeCreatePrivateDnsNamespace(partialParams: ToOptional<{
      [K in keyof CreatePrivateDnsNamespaceRequest & keyof CreatePrivateDnsNamespaceRequest & keyof CreatePrivateDnsNamespaceRequest]: (CreatePrivateDnsNamespaceRequest & CreatePrivateDnsNamespaceRequest & CreatePrivateDnsNamespaceRequest)[K]
    }>): Request<CreatePrivateDnsNamespaceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPrivateDnsNamespace(
          this.ops["CreatePrivateDnsNamespace"].applicator.apply(partialParams)
        );
    }

    invokeCreatePublicDnsNamespace(partialParams: ToOptional<{
      [K in keyof CreatePublicDnsNamespaceRequest & keyof CreatePublicDnsNamespaceRequest & keyof CreatePublicDnsNamespaceRequest]: (CreatePublicDnsNamespaceRequest & CreatePublicDnsNamespaceRequest & CreatePublicDnsNamespaceRequest)[K]
    }>): Request<CreatePublicDnsNamespaceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPublicDnsNamespace(
          this.ops["CreatePublicDnsNamespace"].applicator.apply(partialParams)
        );
    }

    invokeCreateService(partialParams: ToOptional<{
      [K in keyof CreateServiceRequest & keyof CreateServiceRequest & keyof CreateServiceRequest]: (CreateServiceRequest & CreateServiceRequest & CreateServiceRequest)[K]
    }>): Request<CreateServiceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createService(
          this.ops["CreateService"].applicator.apply(partialParams)
        );
    }

    invokeDeleteNamespace(partialParams: ToOptional<{
      [K in keyof DeleteNamespaceRequest & keyof DeleteNamespaceRequest & keyof DeleteNamespaceRequest]: (DeleteNamespaceRequest & DeleteNamespaceRequest & DeleteNamespaceRequest)[K]
    }>): Request<DeleteNamespaceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteNamespace(
          this.ops["DeleteNamespace"].applicator.apply(partialParams)
        );
    }

    invokeDeleteService(partialParams: ToOptional<{
      [K in keyof DeleteServiceRequest & keyof DeleteServiceRequest & keyof DeleteServiceRequest]: (DeleteServiceRequest & DeleteServiceRequest & DeleteServiceRequest)[K]
    }>): Request<DeleteServiceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteService(
          this.ops["DeleteService"].applicator.apply(partialParams)
        );
    }

    invokeDeregisterInstance(partialParams: ToOptional<{
      [K in keyof DeregisterInstanceRequest & keyof DeregisterInstanceRequest & keyof DeregisterInstanceRequest]: (DeregisterInstanceRequest & DeregisterInstanceRequest & DeregisterInstanceRequest)[K]
    }>): Request<DeregisterInstanceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterInstance(
          this.ops["DeregisterInstance"].applicator.apply(partialParams)
        );
    }

    invokeDiscoverInstances(partialParams: ToOptional<{
      [K in keyof DiscoverInstancesRequest & keyof DiscoverInstancesRequest & keyof DiscoverInstancesRequest]: (DiscoverInstancesRequest & DiscoverInstancesRequest & DiscoverInstancesRequest)[K]
    }>): Request<DiscoverInstancesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.discoverInstances(
          this.ops["DiscoverInstances"].applicator.apply(partialParams)
        );
    }

    invokeGetInstance(partialParams: ToOptional<{
      [K in keyof GetInstanceRequest & keyof GetInstanceRequest & keyof GetInstanceRequest]: (GetInstanceRequest & GetInstanceRequest & GetInstanceRequest)[K]
    }>): Request<GetInstanceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInstance(
          this.ops["GetInstance"].applicator.apply(partialParams)
        );
    }

    invokeGetInstancesHealthStatus(partialParams: ToOptional<{
      [K in keyof GetInstancesHealthStatusRequest & keyof GetInstancesHealthStatusRequest & keyof GetInstancesHealthStatusRequest]: (GetInstancesHealthStatusRequest & GetInstancesHealthStatusRequest & GetInstancesHealthStatusRequest)[K]
    }>): Request<GetInstancesHealthStatusResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInstancesHealthStatus(
          this.ops["GetInstancesHealthStatus"].applicator.apply(partialParams)
        );
    }

    invokeGetNamespace(partialParams: ToOptional<{
      [K in keyof GetNamespaceRequest & keyof GetNamespaceRequest & keyof GetNamespaceRequest]: (GetNamespaceRequest & GetNamespaceRequest & GetNamespaceRequest)[K]
    }>): Request<GetNamespaceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getNamespace(
          this.ops["GetNamespace"].applicator.apply(partialParams)
        );
    }

    invokeGetOperation(partialParams: ToOptional<{
      [K in keyof GetOperationRequest & keyof GetOperationRequest & keyof GetOperationRequest]: (GetOperationRequest & GetOperationRequest & GetOperationRequest)[K]
    }>): Request<GetOperationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getOperation(
          this.ops["GetOperation"].applicator.apply(partialParams)
        );
    }

    invokeGetService(partialParams: ToOptional<{
      [K in keyof GetServiceRequest & keyof GetServiceRequest & keyof GetServiceRequest]: (GetServiceRequest & GetServiceRequest & GetServiceRequest)[K]
    }>): Request<GetServiceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getService(
          this.ops["GetService"].applicator.apply(partialParams)
        );
    }

    invokeListInstances(partialParams: ToOptional<{
      [K in keyof ListInstancesRequest & keyof ListInstancesRequest & keyof ListInstancesRequest]: (ListInstancesRequest & ListInstancesRequest & ListInstancesRequest)[K]
    }>): Request<ListInstancesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listInstances(
          this.ops["ListInstances"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeRegisterInstance(partialParams: ToOptional<{
      [K in keyof RegisterInstanceRequest & keyof RegisterInstanceRequest & keyof RegisterInstanceRequest]: (RegisterInstanceRequest & RegisterInstanceRequest & RegisterInstanceRequest)[K]
    }>): Request<RegisterInstanceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerInstance(
          this.ops["RegisterInstance"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateHttpNamespace(partialParams: ToOptional<{
      [K in keyof UpdateHttpNamespaceRequest & keyof UpdateHttpNamespaceRequest & keyof UpdateHttpNamespaceRequest]: (UpdateHttpNamespaceRequest & UpdateHttpNamespaceRequest & UpdateHttpNamespaceRequest)[K]
    }>): Request<UpdateHttpNamespaceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateHttpNamespace(
          this.ops["UpdateHttpNamespace"].applicator.apply(partialParams)
        );
    }

    invokeUpdateInstanceCustomHealthStatus(partialParams: ToOptional<{
      [K in keyof UpdateInstanceCustomHealthStatusRequest & keyof UpdateInstanceCustomHealthStatusRequest & keyof UpdateInstanceCustomHealthStatusRequest]: (UpdateInstanceCustomHealthStatusRequest & UpdateInstanceCustomHealthStatusRequest & UpdateInstanceCustomHealthStatusRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateInstanceCustomHealthStatus(
          this.ops["UpdateInstanceCustomHealthStatus"].applicator.apply(partialParams)
        );
    }

    invokeUpdatePrivateDnsNamespace(partialParams: ToOptional<{
      [K in keyof UpdatePrivateDnsNamespaceRequest & keyof UpdatePrivateDnsNamespaceRequest & keyof UpdatePrivateDnsNamespaceRequest]: (UpdatePrivateDnsNamespaceRequest & UpdatePrivateDnsNamespaceRequest & UpdatePrivateDnsNamespaceRequest)[K]
    }>): Request<UpdatePrivateDnsNamespaceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePrivateDnsNamespace(
          this.ops["UpdatePrivateDnsNamespace"].applicator.apply(partialParams)
        );
    }

    invokeUpdatePublicDnsNamespace(partialParams: ToOptional<{
      [K in keyof UpdatePublicDnsNamespaceRequest & keyof UpdatePublicDnsNamespaceRequest & keyof UpdatePublicDnsNamespaceRequest]: (UpdatePublicDnsNamespaceRequest & UpdatePublicDnsNamespaceRequest & UpdatePublicDnsNamespaceRequest)[K]
    }>): Request<UpdatePublicDnsNamespaceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePublicDnsNamespace(
          this.ops["UpdatePublicDnsNamespace"].applicator.apply(partialParams)
        );
    }

    invokeUpdateService(partialParams: ToOptional<{
      [K in keyof UpdateServiceRequest & keyof UpdateServiceRequest & keyof UpdateServiceRequest]: (UpdateServiceRequest & UpdateServiceRequest & UpdateServiceRequest)[K]
    }>): Request<UpdateServiceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateService(
          this.ops["UpdateService"].applicator.apply(partialParams)
        );
    }
}