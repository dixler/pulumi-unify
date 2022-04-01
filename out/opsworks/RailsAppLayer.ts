
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateAppRequest,
    CreateDeploymentRequest,
    CreateInstanceRequest,
    CreateLayerRequest,
    CreateStackRequest,
    DescribeRdsDbInstancesRequest,
    DescribeStackProvisioningParametersRequest,
    DescribeStackSummaryRequest,
    RegisterEcsClusterRequest,
    RegisterElasticIpRequest,
    RegisterInstanceRequest,
    RegisterVolumeRequest,
    CreateAppResult,
    CreateDeploymentResult,
    CreateInstanceResult,
    CreateLayerResult,
    CreateStackResult,
    DescribeRdsDbInstancesResult,
    DescribeStackProvisioningParametersResult,
    DescribeStackSummaryResult,
    RegisterEcsClusterResult,
    RegisterElasticIpResult,
    RegisterInstanceResult,
    RegisterVolumeResult
} from "aws-sdk/clients/opsworks";
const schema = require("../apis/opsworks-2013-02-18.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.opsworks.RailsAppLayer {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.opsworks.RailsAppLayer>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.OpsWorks()
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

    invokeCreateApp(partialParams: ToOptional<{
      [K in keyof CreateAppRequest & keyof Omit<CreateAppRequest, "StackId" | "Name">]: (CreateAppRequest)[K]
    }>): Request<CreateAppResult, AWSError> {
        this.boot();
        return this.client.createApp(
          this.ops["CreateApp"].apply(partialParams)
        );
    }

    invokeCreateDeployment(partialParams: ToOptional<{
      [K in keyof CreateDeploymentRequest & keyof Omit<CreateDeploymentRequest, "StackId">]: (CreateDeploymentRequest)[K]
    }>): Request<CreateDeploymentResult, AWSError> {
        this.boot();
        return this.client.createDeployment(
          this.ops["CreateDeployment"].apply(partialParams)
        );
    }

    invokeCreateInstance(partialParams: ToOptional<{
      [K in keyof CreateInstanceRequest & keyof Omit<CreateInstanceRequest, "StackId">]: (CreateInstanceRequest)[K]
    }>): Request<CreateInstanceResult, AWSError> {
        this.boot();
        return this.client.createInstance(
          this.ops["CreateInstance"].apply(partialParams)
        );
    }

    invokeCreateLayer(partialParams: ToOptional<{
      [K in keyof CreateLayerRequest & keyof Omit<CreateLayerRequest, "StackId" | "Name">]: (CreateLayerRequest)[K]
    }>): Request<CreateLayerResult, AWSError> {
        this.boot();
        return this.client.createLayer(
          this.ops["CreateLayer"].apply(partialParams)
        );
    }

    invokeCreateStack(partialParams: ToOptional<{
      [K in keyof CreateStackRequest & keyof Omit<CreateStackRequest, "Name">]: (CreateStackRequest)[K]
    }>): Request<CreateStackResult, AWSError> {
        this.boot();
        return this.client.createStack(
          this.ops["CreateStack"].apply(partialParams)
        );
    }

    invokeDescribeRdsDbInstances(partialParams: ToOptional<{
      [K in keyof DescribeRdsDbInstancesRequest & keyof Omit<DescribeRdsDbInstancesRequest, "StackId">]: (DescribeRdsDbInstancesRequest)[K]
    }>): Request<DescribeRdsDbInstancesResult, AWSError> {
        this.boot();
        return this.client.describeRdsDbInstances(
          this.ops["DescribeRdsDbInstances"].apply(partialParams)
        );
    }

    invokeDescribeStackProvisioningParameters(partialParams: ToOptional<{
      [K in keyof DescribeStackProvisioningParametersRequest & keyof Omit<DescribeStackProvisioningParametersRequest, "StackId">]: (DescribeStackProvisioningParametersRequest)[K]
    }>): Request<DescribeStackProvisioningParametersResult, AWSError> {
        this.boot();
        return this.client.describeStackProvisioningParameters(
          this.ops["DescribeStackProvisioningParameters"].apply(partialParams)
        );
    }

    invokeDescribeStackSummary(partialParams: ToOptional<{
      [K in keyof DescribeStackSummaryRequest & keyof Omit<DescribeStackSummaryRequest, "StackId">]: (DescribeStackSummaryRequest)[K]
    }>): Request<DescribeStackSummaryResult, AWSError> {
        this.boot();
        return this.client.describeStackSummary(
          this.ops["DescribeStackSummary"].apply(partialParams)
        );
    }

    invokeRegisterEcsCluster(partialParams: ToOptional<{
      [K in keyof RegisterEcsClusterRequest & keyof Omit<RegisterEcsClusterRequest, "StackId">]: (RegisterEcsClusterRequest)[K]
    }>): Request<RegisterEcsClusterResult, AWSError> {
        this.boot();
        return this.client.registerEcsCluster(
          this.ops["RegisterEcsCluster"].apply(partialParams)
        );
    }

    invokeRegisterElasticIp(partialParams: ToOptional<{
      [K in keyof RegisterElasticIpRequest & keyof Omit<RegisterElasticIpRequest, "StackId">]: (RegisterElasticIpRequest)[K]
    }>): Request<RegisterElasticIpResult, AWSError> {
        this.boot();
        return this.client.registerElasticIp(
          this.ops["RegisterElasticIp"].apply(partialParams)
        );
    }

    invokeRegisterInstance(partialParams: ToOptional<{
      [K in keyof RegisterInstanceRequest & keyof Omit<RegisterInstanceRequest, "StackId">]: (RegisterInstanceRequest)[K]
    }>): Request<RegisterInstanceResult, AWSError> {
        this.boot();
        return this.client.registerInstance(
          this.ops["RegisterInstance"].apply(partialParams)
        );
    }

    invokeRegisterVolume(partialParams: ToOptional<{
      [K in keyof RegisterVolumeRequest & keyof Omit<RegisterVolumeRequest, "StackId">]: (RegisterVolumeRequest)[K]
    }>): Request<RegisterVolumeResult, AWSError> {
        this.boot();
        return this.client.registerVolume(
          this.ops["RegisterVolume"].apply(partialParams)
        );
    }
}