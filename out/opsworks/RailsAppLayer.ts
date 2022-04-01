
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CloneStackRequest,
    CreateAppRequest,
    CreateDeploymentRequest,
    CreateInstanceRequest,
    CreateLayerRequest,
    CreateStackRequest,
    CreateUserProfileRequest,
    DescribeAgentVersionsRequest,
    DescribeAppsRequest,
    DescribeCommandsRequest,
    DescribeDeploymentsRequest,
    DescribeEcsClustersRequest,
    DescribeElasticIpsRequest,
    DescribeElasticLoadBalancersRequest,
    DescribeInstancesRequest,
    DescribeLayersRequest,
    DescribeLoadBasedAutoScalingRequest,
    DescribePermissionsRequest,
    DescribeRaidArraysRequest,
    DescribeRdsDbInstancesRequest,
    DescribeServiceErrorsRequest,
    DescribeStackProvisioningParametersRequest,
    DescribeStackSummaryRequest,
    DescribeStacksRequest,
    DescribeTimeBasedAutoScalingRequest,
    DescribeUserProfilesRequest,
    DescribeVolumesRequest,
    GetHostnameSuggestionRequest,
    GrantAccessRequest,
    ListTagsRequest,
    RegisterEcsClusterRequest,
    RegisterElasticIpRequest,
    RegisterInstanceRequest,
    RegisterVolumeRequest,
    CloneStackResult,
    CreateAppResult,
    CreateDeploymentResult,
    CreateInstanceResult,
    CreateLayerResult,
    CreateStackResult,
    CreateUserProfileResult,
    DescribeAgentVersionsResult,
    DescribeAppsResult,
    DescribeCommandsResult,
    DescribeDeploymentsResult,
    DescribeEcsClustersResult,
    DescribeElasticIpsResult,
    DescribeElasticLoadBalancersResult,
    DescribeInstancesResult,
    DescribeLayersResult,
    DescribeLoadBasedAutoScalingResult,
    DescribePermissionsResult,
    DescribeRaidArraysResult,
    DescribeRdsDbInstancesResult,
    DescribeServiceErrorsResult,
    DescribeStackProvisioningParametersResult,
    DescribeStackSummaryResult,
    DescribeStacksResult,
    DescribeTimeBasedAutoScalingResult,
    DescribeUserProfilesResult,
    DescribeVolumesResult,
    GetHostnameSuggestionResult,
    GrantAccessResult,
    ListTagsResult,
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

    invokeCloneStack(partialParams: ToOptional<{
      [K in keyof CloneStackRequest]: (CloneStackRequest)[K]
    }>): Request<CloneStackResult, AWSError> {
        this.boot();
        return this.client.cloneStack(
          this.ops["CloneStack"].apply(partialParams)
        );
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

    invokeCreateUserProfile(partialParams: ToOptional<{
      [K in keyof CreateUserProfileRequest]: (CreateUserProfileRequest)[K]
    }>): Request<CreateUserProfileResult, AWSError> {
        this.boot();
        return this.client.createUserProfile(
          this.ops["CreateUserProfile"].apply(partialParams)
        );
    }

    invokeDescribeAgentVersions(partialParams: ToOptional<{
      [K in keyof DescribeAgentVersionsRequest]: (DescribeAgentVersionsRequest)[K]
    }>): Request<DescribeAgentVersionsResult, AWSError> {
        this.boot();
        return this.client.describeAgentVersions(
          this.ops["DescribeAgentVersions"].apply(partialParams)
        );
    }

    invokeDescribeApps(partialParams: ToOptional<{
      [K in keyof DescribeAppsRequest]: (DescribeAppsRequest)[K]
    }>): Request<DescribeAppsResult, AWSError> {
        this.boot();
        return this.client.describeApps(
          this.ops["DescribeApps"].apply(partialParams)
        );
    }

    invokeDescribeCommands(partialParams: ToOptional<{
      [K in keyof DescribeCommandsRequest]: (DescribeCommandsRequest)[K]
    }>): Request<DescribeCommandsResult, AWSError> {
        this.boot();
        return this.client.describeCommands(
          this.ops["DescribeCommands"].apply(partialParams)
        );
    }

    invokeDescribeDeployments(partialParams: ToOptional<{
      [K in keyof DescribeDeploymentsRequest]: (DescribeDeploymentsRequest)[K]
    }>): Request<DescribeDeploymentsResult, AWSError> {
        this.boot();
        return this.client.describeDeployments(
          this.ops["DescribeDeployments"].apply(partialParams)
        );
    }

    invokeDescribeEcsClusters(partialParams: ToOptional<{
      [K in keyof DescribeEcsClustersRequest]: (DescribeEcsClustersRequest)[K]
    }>): Request<DescribeEcsClustersResult, AWSError> {
        this.boot();
        return this.client.describeEcsClusters(
          this.ops["DescribeEcsClusters"].apply(partialParams)
        );
    }

    invokeDescribeElasticIps(partialParams: ToOptional<{
      [K in keyof DescribeElasticIpsRequest]: (DescribeElasticIpsRequest)[K]
    }>): Request<DescribeElasticIpsResult, AWSError> {
        this.boot();
        return this.client.describeElasticIps(
          this.ops["DescribeElasticIps"].apply(partialParams)
        );
    }

    invokeDescribeElasticLoadBalancers(partialParams: ToOptional<{
      [K in keyof DescribeElasticLoadBalancersRequest]: (DescribeElasticLoadBalancersRequest)[K]
    }>): Request<DescribeElasticLoadBalancersResult, AWSError> {
        this.boot();
        return this.client.describeElasticLoadBalancers(
          this.ops["DescribeElasticLoadBalancers"].apply(partialParams)
        );
    }

    invokeDescribeInstances(partialParams: ToOptional<{
      [K in keyof DescribeInstancesRequest]: (DescribeInstancesRequest)[K]
    }>): Request<DescribeInstancesResult, AWSError> {
        this.boot();
        return this.client.describeInstances(
          this.ops["DescribeInstances"].apply(partialParams)
        );
    }

    invokeDescribeLayers(partialParams: ToOptional<{
      [K in keyof DescribeLayersRequest]: (DescribeLayersRequest)[K]
    }>): Request<DescribeLayersResult, AWSError> {
        this.boot();
        return this.client.describeLayers(
          this.ops["DescribeLayers"].apply(partialParams)
        );
    }

    invokeDescribeLoadBasedAutoScaling(partialParams: ToOptional<{
      [K in keyof DescribeLoadBasedAutoScalingRequest]: (DescribeLoadBasedAutoScalingRequest)[K]
    }>): Request<DescribeLoadBasedAutoScalingResult, AWSError> {
        this.boot();
        return this.client.describeLoadBasedAutoScaling(
          this.ops["DescribeLoadBasedAutoScaling"].apply(partialParams)
        );
    }

    invokeDescribePermissions(partialParams: ToOptional<{
      [K in keyof DescribePermissionsRequest]: (DescribePermissionsRequest)[K]
    }>): Request<DescribePermissionsResult, AWSError> {
        this.boot();
        return this.client.describePermissions(
          this.ops["DescribePermissions"].apply(partialParams)
        );
    }

    invokeDescribeRaidArrays(partialParams: ToOptional<{
      [K in keyof DescribeRaidArraysRequest]: (DescribeRaidArraysRequest)[K]
    }>): Request<DescribeRaidArraysResult, AWSError> {
        this.boot();
        return this.client.describeRaidArrays(
          this.ops["DescribeRaidArrays"].apply(partialParams)
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

    invokeDescribeServiceErrors(partialParams: ToOptional<{
      [K in keyof DescribeServiceErrorsRequest]: (DescribeServiceErrorsRequest)[K]
    }>): Request<DescribeServiceErrorsResult, AWSError> {
        this.boot();
        return this.client.describeServiceErrors(
          this.ops["DescribeServiceErrors"].apply(partialParams)
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

    invokeDescribeStacks(partialParams: ToOptional<{
      [K in keyof DescribeStacksRequest]: (DescribeStacksRequest)[K]
    }>): Request<DescribeStacksResult, AWSError> {
        this.boot();
        return this.client.describeStacks(
          this.ops["DescribeStacks"].apply(partialParams)
        );
    }

    invokeDescribeTimeBasedAutoScaling(partialParams: ToOptional<{
      [K in keyof DescribeTimeBasedAutoScalingRequest]: (DescribeTimeBasedAutoScalingRequest)[K]
    }>): Request<DescribeTimeBasedAutoScalingResult, AWSError> {
        this.boot();
        return this.client.describeTimeBasedAutoScaling(
          this.ops["DescribeTimeBasedAutoScaling"].apply(partialParams)
        );
    }

    invokeDescribeUserProfiles(partialParams: ToOptional<{
      [K in keyof DescribeUserProfilesRequest]: (DescribeUserProfilesRequest)[K]
    }>): Request<DescribeUserProfilesResult, AWSError> {
        this.boot();
        return this.client.describeUserProfiles(
          this.ops["DescribeUserProfiles"].apply(partialParams)
        );
    }

    invokeDescribeVolumes(partialParams: ToOptional<{
      [K in keyof DescribeVolumesRequest]: (DescribeVolumesRequest)[K]
    }>): Request<DescribeVolumesResult, AWSError> {
        this.boot();
        return this.client.describeVolumes(
          this.ops["DescribeVolumes"].apply(partialParams)
        );
    }

    invokeGetHostnameSuggestion(partialParams: ToOptional<{
      [K in keyof GetHostnameSuggestionRequest]: (GetHostnameSuggestionRequest)[K]
    }>): Request<GetHostnameSuggestionResult, AWSError> {
        this.boot();
        return this.client.getHostnameSuggestion(
          this.ops["GetHostnameSuggestion"].apply(partialParams)
        );
    }

    invokeGrantAccess(partialParams: ToOptional<{
      [K in keyof GrantAccessRequest]: (GrantAccessRequest)[K]
    }>): Request<GrantAccessResult, AWSError> {
        this.boot();
        return this.client.grantAccess(
          this.ops["GrantAccess"].apply(partialParams)
        );
    }

    invokeListTags(partialParams: ToOptional<{
      [K in keyof ListTagsRequest]: (ListTagsRequest)[K]
    }>): Request<ListTagsResult, AWSError> {
        this.boot();
        return this.client.listTags(
          this.ops["ListTags"].apply(partialParams)
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