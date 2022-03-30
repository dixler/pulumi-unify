
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    AssignInstanceRequest,
    AssignVolumeRequest,
    AssociateElasticIpRequest,
    AttachElasticLoadBalancerRequest,
    CloneStackRequest,
    CreateAppRequest,
    CreateDeploymentRequest,
    CreateInstanceRequest,
    CreateLayerRequest,
    CreateStackRequest,
    CreateUserProfileRequest,
    DeleteAppRequest,
    DeleteInstanceRequest,
    DeleteLayerRequest,
    DeleteStackRequest,
    DeleteUserProfileRequest,
    DeregisterEcsClusterRequest,
    DeregisterElasticIpRequest,
    DeregisterInstanceRequest,
    DeregisterRdsDbInstanceRequest,
    DeregisterVolumeRequest,
    DescribeLoadBasedAutoScalingRequest,
    DescribeRdsDbInstancesRequest,
    DescribeStackProvisioningParametersRequest,
    DescribeStackSummaryRequest,
    DescribeTimeBasedAutoScalingRequest,
    DetachElasticLoadBalancerRequest,
    DisassociateElasticIpRequest,
    GetHostnameSuggestionRequest,
    GrantAccessRequest,
    ListTagsRequest,
    RebootInstanceRequest,
    RegisterEcsClusterRequest,
    RegisterElasticIpRequest,
    RegisterInstanceRequest,
    RegisterRdsDbInstanceRequest,
    RegisterVolumeRequest,
    SetLoadBasedAutoScalingRequest,
    SetPermissionRequest,
    SetTimeBasedAutoScalingRequest,
    StartInstanceRequest,
    StartStackRequest,
    StopInstanceRequest,
    StopStackRequest,
    TagResourceRequest,
    UnassignInstanceRequest,
    UnassignVolumeRequest,
    UntagResourceRequest,
    UpdateAppRequest,
    UpdateElasticIpRequest,
    UpdateInstanceRequest,
    UpdateLayerRequest,
    UpdateRdsDbInstanceRequest,
    UpdateStackRequest,
    UpdateUserProfileRequest,
    UpdateVolumeRequest,
    CloneStackResult,
    CreateAppResult,
    CreateDeploymentResult,
    CreateInstanceResult,
    CreateLayerResult,
    CreateStackResult,
    CreateUserProfileResult,
    DescribeLoadBasedAutoScalingResult,
    DescribeRdsDbInstancesResult,
    DescribeStackProvisioningParametersResult,
    DescribeStackSummaryResult,
    DescribeTimeBasedAutoScalingResult,
    GetHostnameSuggestionResult,
    GrantAccessResult,
    ListTagsResult,
    RegisterEcsClusterResult,
    RegisterElasticIpResult,
    RegisterInstanceResult,
    RegisterVolumeResult
} from "aws-sdk/clients/opsworks";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.opsworks.HaproxyLayer {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.opsworks.HaproxyLayer>) {
        super(...args)
        this.client = new awssdk.OpsWorks()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/opsworks-2013-02-18.normal.json"), this.client)
    }

    invokeAssignInstance(partialParams: ToOptional<{
      [K in keyof AssignInstanceRequest & keyof AssignInstanceRequest & keyof AssignInstanceRequest & keyof AssignInstanceRequest & keyof AssignInstanceRequest & keyof AssignInstanceRequest & keyof AssignInstanceRequest & keyof AssignInstanceRequest & keyof AssignInstanceRequest & keyof AssignInstanceRequest & keyof AssignInstanceRequest]: (AssignInstanceRequest & AssignInstanceRequest & AssignInstanceRequest & AssignInstanceRequest & AssignInstanceRequest & AssignInstanceRequest & AssignInstanceRequest & AssignInstanceRequest & AssignInstanceRequest & AssignInstanceRequest & AssignInstanceRequest)[K]
    }>): void {
        return this.client.assignInstance(
            this.ops["AssignInstance"].apply(partialParams)
        );
    }

    invokeAssignVolume(partialParams: ToOptional<{
      [K in keyof AssignVolumeRequest & keyof AssignVolumeRequest & keyof AssignVolumeRequest & keyof AssignVolumeRequest & keyof AssignVolumeRequest & keyof AssignVolumeRequest & keyof AssignVolumeRequest & keyof AssignVolumeRequest & keyof AssignVolumeRequest & keyof AssignVolumeRequest & keyof AssignVolumeRequest]: (AssignVolumeRequest & AssignVolumeRequest & AssignVolumeRequest & AssignVolumeRequest & AssignVolumeRequest & AssignVolumeRequest & AssignVolumeRequest & AssignVolumeRequest & AssignVolumeRequest & AssignVolumeRequest & AssignVolumeRequest)[K]
    }>): void {
        return this.client.assignVolume(
            this.ops["AssignVolume"].apply(partialParams)
        );
    }

    invokeAssociateElasticIp(partialParams: ToOptional<{
      [K in keyof AssociateElasticIpRequest & keyof AssociateElasticIpRequest & keyof AssociateElasticIpRequest & keyof AssociateElasticIpRequest & keyof AssociateElasticIpRequest & keyof AssociateElasticIpRequest & keyof AssociateElasticIpRequest & keyof AssociateElasticIpRequest & keyof AssociateElasticIpRequest & keyof AssociateElasticIpRequest & keyof AssociateElasticIpRequest]: (AssociateElasticIpRequest & AssociateElasticIpRequest & AssociateElasticIpRequest & AssociateElasticIpRequest & AssociateElasticIpRequest & AssociateElasticIpRequest & AssociateElasticIpRequest & AssociateElasticIpRequest & AssociateElasticIpRequest & AssociateElasticIpRequest & AssociateElasticIpRequest)[K]
    }>): void {
        return this.client.associateElasticIp(
            this.ops["AssociateElasticIp"].apply(partialParams)
        );
    }

    invokeAttachElasticLoadBalancer(partialParams: ToOptional<{
      [K in keyof AttachElasticLoadBalancerRequest & keyof AttachElasticLoadBalancerRequest & keyof AttachElasticLoadBalancerRequest & keyof AttachElasticLoadBalancerRequest & keyof AttachElasticLoadBalancerRequest & keyof AttachElasticLoadBalancerRequest & keyof AttachElasticLoadBalancerRequest & keyof AttachElasticLoadBalancerRequest & keyof AttachElasticLoadBalancerRequest & keyof AttachElasticLoadBalancerRequest & keyof AttachElasticLoadBalancerRequest]: (AttachElasticLoadBalancerRequest & AttachElasticLoadBalancerRequest & AttachElasticLoadBalancerRequest & AttachElasticLoadBalancerRequest & AttachElasticLoadBalancerRequest & AttachElasticLoadBalancerRequest & AttachElasticLoadBalancerRequest & AttachElasticLoadBalancerRequest & AttachElasticLoadBalancerRequest & AttachElasticLoadBalancerRequest & AttachElasticLoadBalancerRequest)[K]
    }>): void {
        return this.client.attachElasticLoadBalancer(
            this.ops["AttachElasticLoadBalancer"].apply(partialParams)
        );
    }

    invokeCloneStack(partialParams: ToOptional<{
      [K in keyof CloneStackRequest & keyof CloneStackRequest & keyof CloneStackRequest & keyof CloneStackRequest & keyof CloneStackRequest & keyof CloneStackRequest & keyof CloneStackRequest & keyof CloneStackRequest & keyof CloneStackRequest & keyof CloneStackRequest & keyof CloneStackRequest]: (CloneStackRequest & CloneStackRequest & CloneStackRequest & CloneStackRequest & CloneStackRequest & CloneStackRequest & CloneStackRequest & CloneStackRequest & CloneStackRequest & CloneStackRequest & CloneStackRequest)[K]
    }>): CloneStackResult {
        return this.client.cloneStack(
            this.ops["CloneStack"].apply(partialParams)
        );
    }

    invokeCreateApp(partialParams: ToOptional<{
      [K in keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest]: (CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest)[K]
    }>): CreateAppResult {
        return this.client.createApp(
            this.ops["CreateApp"].apply(partialParams)
        );
    }

    invokeCreateDeployment(partialParams: ToOptional<{
      [K in keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest]: (CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest)[K]
    }>): CreateDeploymentResult {
        return this.client.createDeployment(
            this.ops["CreateDeployment"].apply(partialParams)
        );
    }

    invokeCreateInstance(partialParams: ToOptional<{
      [K in keyof CreateInstanceRequest & keyof CreateInstanceRequest & keyof CreateInstanceRequest & keyof CreateInstanceRequest & keyof CreateInstanceRequest & keyof CreateInstanceRequest & keyof CreateInstanceRequest & keyof CreateInstanceRequest & keyof CreateInstanceRequest & keyof CreateInstanceRequest & keyof CreateInstanceRequest]: (CreateInstanceRequest & CreateInstanceRequest & CreateInstanceRequest & CreateInstanceRequest & CreateInstanceRequest & CreateInstanceRequest & CreateInstanceRequest & CreateInstanceRequest & CreateInstanceRequest & CreateInstanceRequest & CreateInstanceRequest)[K]
    }>): CreateInstanceResult {
        return this.client.createInstance(
            this.ops["CreateInstance"].apply(partialParams)
        );
    }

    invokeCreateLayer(partialParams: ToOptional<{
      [K in keyof CreateLayerRequest & keyof CreateLayerRequest & keyof CreateLayerRequest & keyof CreateLayerRequest & keyof CreateLayerRequest & keyof CreateLayerRequest & keyof CreateLayerRequest & keyof CreateLayerRequest & keyof CreateLayerRequest & keyof CreateLayerRequest & keyof CreateLayerRequest]: (CreateLayerRequest & CreateLayerRequest & CreateLayerRequest & CreateLayerRequest & CreateLayerRequest & CreateLayerRequest & CreateLayerRequest & CreateLayerRequest & CreateLayerRequest & CreateLayerRequest & CreateLayerRequest)[K]
    }>): CreateLayerResult {
        return this.client.createLayer(
            this.ops["CreateLayer"].apply(partialParams)
        );
    }

    invokeCreateStack(partialParams: ToOptional<{
      [K in keyof CreateStackRequest & keyof CreateStackRequest & keyof CreateStackRequest & keyof CreateStackRequest & keyof CreateStackRequest & keyof CreateStackRequest & keyof CreateStackRequest & keyof CreateStackRequest & keyof CreateStackRequest & keyof CreateStackRequest & keyof CreateStackRequest]: (CreateStackRequest & CreateStackRequest & CreateStackRequest & CreateStackRequest & CreateStackRequest & CreateStackRequest & CreateStackRequest & CreateStackRequest & CreateStackRequest & CreateStackRequest & CreateStackRequest)[K]
    }>): CreateStackResult {
        return this.client.createStack(
            this.ops["CreateStack"].apply(partialParams)
        );
    }

    invokeCreateUserProfile(partialParams: ToOptional<{
      [K in keyof CreateUserProfileRequest & keyof CreateUserProfileRequest & keyof CreateUserProfileRequest & keyof CreateUserProfileRequest & keyof CreateUserProfileRequest & keyof CreateUserProfileRequest & keyof CreateUserProfileRequest & keyof CreateUserProfileRequest & keyof CreateUserProfileRequest & keyof CreateUserProfileRequest & keyof CreateUserProfileRequest]: (CreateUserProfileRequest & CreateUserProfileRequest & CreateUserProfileRequest & CreateUserProfileRequest & CreateUserProfileRequest & CreateUserProfileRequest & CreateUserProfileRequest & CreateUserProfileRequest & CreateUserProfileRequest & CreateUserProfileRequest & CreateUserProfileRequest)[K]
    }>): CreateUserProfileResult {
        return this.client.createUserProfile(
            this.ops["CreateUserProfile"].apply(partialParams)
        );
    }

    invokeDeleteApp(partialParams: ToOptional<{
      [K in keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest]: (DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest)[K]
    }>): void {
        return this.client.deleteApp(
            this.ops["DeleteApp"].apply(partialParams)
        );
    }

    invokeDeleteInstance(partialParams: ToOptional<{
      [K in keyof DeleteInstanceRequest & keyof DeleteInstanceRequest & keyof DeleteInstanceRequest & keyof DeleteInstanceRequest & keyof DeleteInstanceRequest & keyof DeleteInstanceRequest & keyof DeleteInstanceRequest & keyof DeleteInstanceRequest & keyof DeleteInstanceRequest & keyof DeleteInstanceRequest & keyof DeleteInstanceRequest]: (DeleteInstanceRequest & DeleteInstanceRequest & DeleteInstanceRequest & DeleteInstanceRequest & DeleteInstanceRequest & DeleteInstanceRequest & DeleteInstanceRequest & DeleteInstanceRequest & DeleteInstanceRequest & DeleteInstanceRequest & DeleteInstanceRequest)[K]
    }>): void {
        return this.client.deleteInstance(
            this.ops["DeleteInstance"].apply(partialParams)
        );
    }

    invokeDeleteLayer(partialParams: ToOptional<{
      [K in keyof DeleteLayerRequest & keyof DeleteLayerRequest & keyof DeleteLayerRequest & keyof DeleteLayerRequest & keyof DeleteLayerRequest & keyof DeleteLayerRequest & keyof DeleteLayerRequest & keyof DeleteLayerRequest & keyof DeleteLayerRequest & keyof DeleteLayerRequest & keyof DeleteLayerRequest]: (DeleteLayerRequest & DeleteLayerRequest & DeleteLayerRequest & DeleteLayerRequest & DeleteLayerRequest & DeleteLayerRequest & DeleteLayerRequest & DeleteLayerRequest & DeleteLayerRequest & DeleteLayerRequest & DeleteLayerRequest)[K]
    }>): void {
        return this.client.deleteLayer(
            this.ops["DeleteLayer"].apply(partialParams)
        );
    }

    invokeDeleteStack(partialParams: ToOptional<{
      [K in keyof DeleteStackRequest & keyof DeleteStackRequest & keyof DeleteStackRequest & keyof DeleteStackRequest & keyof DeleteStackRequest & keyof DeleteStackRequest & keyof DeleteStackRequest & keyof DeleteStackRequest & keyof DeleteStackRequest & keyof DeleteStackRequest & keyof DeleteStackRequest]: (DeleteStackRequest & DeleteStackRequest & DeleteStackRequest & DeleteStackRequest & DeleteStackRequest & DeleteStackRequest & DeleteStackRequest & DeleteStackRequest & DeleteStackRequest & DeleteStackRequest & DeleteStackRequest)[K]
    }>): void {
        return this.client.deleteStack(
            this.ops["DeleteStack"].apply(partialParams)
        );
    }

    invokeDeleteUserProfile(partialParams: ToOptional<{
      [K in keyof DeleteUserProfileRequest & keyof DeleteUserProfileRequest & keyof DeleteUserProfileRequest & keyof DeleteUserProfileRequest & keyof DeleteUserProfileRequest & keyof DeleteUserProfileRequest & keyof DeleteUserProfileRequest & keyof DeleteUserProfileRequest & keyof DeleteUserProfileRequest & keyof DeleteUserProfileRequest & keyof DeleteUserProfileRequest]: (DeleteUserProfileRequest & DeleteUserProfileRequest & DeleteUserProfileRequest & DeleteUserProfileRequest & DeleteUserProfileRequest & DeleteUserProfileRequest & DeleteUserProfileRequest & DeleteUserProfileRequest & DeleteUserProfileRequest & DeleteUserProfileRequest & DeleteUserProfileRequest)[K]
    }>): void {
        return this.client.deleteUserProfile(
            this.ops["DeleteUserProfile"].apply(partialParams)
        );
    }

    invokeDeregisterEcsCluster(partialParams: ToOptional<{
      [K in keyof DeregisterEcsClusterRequest & keyof DeregisterEcsClusterRequest & keyof DeregisterEcsClusterRequest & keyof DeregisterEcsClusterRequest & keyof DeregisterEcsClusterRequest & keyof DeregisterEcsClusterRequest & keyof DeregisterEcsClusterRequest & keyof DeregisterEcsClusterRequest & keyof DeregisterEcsClusterRequest & keyof DeregisterEcsClusterRequest & keyof DeregisterEcsClusterRequest]: (DeregisterEcsClusterRequest & DeregisterEcsClusterRequest & DeregisterEcsClusterRequest & DeregisterEcsClusterRequest & DeregisterEcsClusterRequest & DeregisterEcsClusterRequest & DeregisterEcsClusterRequest & DeregisterEcsClusterRequest & DeregisterEcsClusterRequest & DeregisterEcsClusterRequest & DeregisterEcsClusterRequest)[K]
    }>): void {
        return this.client.deregisterEcsCluster(
            this.ops["DeregisterEcsCluster"].apply(partialParams)
        );
    }

    invokeDeregisterElasticIp(partialParams: ToOptional<{
      [K in keyof DeregisterElasticIpRequest & keyof DeregisterElasticIpRequest & keyof DeregisterElasticIpRequest & keyof DeregisterElasticIpRequest & keyof DeregisterElasticIpRequest & keyof DeregisterElasticIpRequest & keyof DeregisterElasticIpRequest & keyof DeregisterElasticIpRequest & keyof DeregisterElasticIpRequest & keyof DeregisterElasticIpRequest & keyof DeregisterElasticIpRequest]: (DeregisterElasticIpRequest & DeregisterElasticIpRequest & DeregisterElasticIpRequest & DeregisterElasticIpRequest & DeregisterElasticIpRequest & DeregisterElasticIpRequest & DeregisterElasticIpRequest & DeregisterElasticIpRequest & DeregisterElasticIpRequest & DeregisterElasticIpRequest & DeregisterElasticIpRequest)[K]
    }>): void {
        return this.client.deregisterElasticIp(
            this.ops["DeregisterElasticIp"].apply(partialParams)
        );
    }

    invokeDeregisterInstance(partialParams: ToOptional<{
      [K in keyof DeregisterInstanceRequest & keyof DeregisterInstanceRequest & keyof DeregisterInstanceRequest & keyof DeregisterInstanceRequest & keyof DeregisterInstanceRequest & keyof DeregisterInstanceRequest & keyof DeregisterInstanceRequest & keyof DeregisterInstanceRequest & keyof DeregisterInstanceRequest & keyof DeregisterInstanceRequest & keyof DeregisterInstanceRequest]: (DeregisterInstanceRequest & DeregisterInstanceRequest & DeregisterInstanceRequest & DeregisterInstanceRequest & DeregisterInstanceRequest & DeregisterInstanceRequest & DeregisterInstanceRequest & DeregisterInstanceRequest & DeregisterInstanceRequest & DeregisterInstanceRequest & DeregisterInstanceRequest)[K]
    }>): void {
        return this.client.deregisterInstance(
            this.ops["DeregisterInstance"].apply(partialParams)
        );
    }

    invokeDeregisterRdsDbInstance(partialParams: ToOptional<{
      [K in keyof DeregisterRdsDbInstanceRequest & keyof DeregisterRdsDbInstanceRequest & keyof DeregisterRdsDbInstanceRequest & keyof DeregisterRdsDbInstanceRequest & keyof DeregisterRdsDbInstanceRequest & keyof DeregisterRdsDbInstanceRequest & keyof DeregisterRdsDbInstanceRequest & keyof DeregisterRdsDbInstanceRequest & keyof DeregisterRdsDbInstanceRequest & keyof DeregisterRdsDbInstanceRequest & keyof DeregisterRdsDbInstanceRequest]: (DeregisterRdsDbInstanceRequest & DeregisterRdsDbInstanceRequest & DeregisterRdsDbInstanceRequest & DeregisterRdsDbInstanceRequest & DeregisterRdsDbInstanceRequest & DeregisterRdsDbInstanceRequest & DeregisterRdsDbInstanceRequest & DeregisterRdsDbInstanceRequest & DeregisterRdsDbInstanceRequest & DeregisterRdsDbInstanceRequest & DeregisterRdsDbInstanceRequest)[K]
    }>): void {
        return this.client.deregisterRdsDbInstance(
            this.ops["DeregisterRdsDbInstance"].apply(partialParams)
        );
    }

    invokeDeregisterVolume(partialParams: ToOptional<{
      [K in keyof DeregisterVolumeRequest & keyof DeregisterVolumeRequest & keyof DeregisterVolumeRequest & keyof DeregisterVolumeRequest & keyof DeregisterVolumeRequest & keyof DeregisterVolumeRequest & keyof DeregisterVolumeRequest & keyof DeregisterVolumeRequest & keyof DeregisterVolumeRequest & keyof DeregisterVolumeRequest & keyof DeregisterVolumeRequest]: (DeregisterVolumeRequest & DeregisterVolumeRequest & DeregisterVolumeRequest & DeregisterVolumeRequest & DeregisterVolumeRequest & DeregisterVolumeRequest & DeregisterVolumeRequest & DeregisterVolumeRequest & DeregisterVolumeRequest & DeregisterVolumeRequest & DeregisterVolumeRequest)[K]
    }>): void {
        return this.client.deregisterVolume(
            this.ops["DeregisterVolume"].apply(partialParams)
        );
    }

    invokeDescribeLoadBasedAutoScaling(partialParams: ToOptional<{
      [K in keyof DescribeLoadBasedAutoScalingRequest & keyof DescribeLoadBasedAutoScalingRequest & keyof DescribeLoadBasedAutoScalingRequest & keyof DescribeLoadBasedAutoScalingRequest & keyof DescribeLoadBasedAutoScalingRequest & keyof DescribeLoadBasedAutoScalingRequest & keyof DescribeLoadBasedAutoScalingRequest & keyof DescribeLoadBasedAutoScalingRequest & keyof DescribeLoadBasedAutoScalingRequest & keyof DescribeLoadBasedAutoScalingRequest & keyof DescribeLoadBasedAutoScalingRequest]: (DescribeLoadBasedAutoScalingRequest & DescribeLoadBasedAutoScalingRequest & DescribeLoadBasedAutoScalingRequest & DescribeLoadBasedAutoScalingRequest & DescribeLoadBasedAutoScalingRequest & DescribeLoadBasedAutoScalingRequest & DescribeLoadBasedAutoScalingRequest & DescribeLoadBasedAutoScalingRequest & DescribeLoadBasedAutoScalingRequest & DescribeLoadBasedAutoScalingRequest & DescribeLoadBasedAutoScalingRequest)[K]
    }>): DescribeLoadBasedAutoScalingResult {
        return this.client.describeLoadBasedAutoScaling(
            this.ops["DescribeLoadBasedAutoScaling"].apply(partialParams)
        );
    }

    invokeDescribeRdsDbInstances(partialParams: ToOptional<{
      [K in keyof DescribeRdsDbInstancesRequest & keyof DescribeRdsDbInstancesRequest & keyof DescribeRdsDbInstancesRequest & keyof DescribeRdsDbInstancesRequest & keyof DescribeRdsDbInstancesRequest & keyof DescribeRdsDbInstancesRequest & keyof DescribeRdsDbInstancesRequest & keyof DescribeRdsDbInstancesRequest & keyof DescribeRdsDbInstancesRequest & keyof DescribeRdsDbInstancesRequest & keyof DescribeRdsDbInstancesRequest]: (DescribeRdsDbInstancesRequest & DescribeRdsDbInstancesRequest & DescribeRdsDbInstancesRequest & DescribeRdsDbInstancesRequest & DescribeRdsDbInstancesRequest & DescribeRdsDbInstancesRequest & DescribeRdsDbInstancesRequest & DescribeRdsDbInstancesRequest & DescribeRdsDbInstancesRequest & DescribeRdsDbInstancesRequest & DescribeRdsDbInstancesRequest)[K]
    }>): DescribeRdsDbInstancesResult {
        return this.client.describeRdsDbInstances(
            this.ops["DescribeRdsDbInstances"].apply(partialParams)
        );
    }

    invokeDescribeStackProvisioningParameters(partialParams: ToOptional<{
      [K in keyof DescribeStackProvisioningParametersRequest & keyof DescribeStackProvisioningParametersRequest & keyof DescribeStackProvisioningParametersRequest & keyof DescribeStackProvisioningParametersRequest & keyof DescribeStackProvisioningParametersRequest & keyof DescribeStackProvisioningParametersRequest & keyof DescribeStackProvisioningParametersRequest & keyof DescribeStackProvisioningParametersRequest & keyof DescribeStackProvisioningParametersRequest & keyof DescribeStackProvisioningParametersRequest & keyof DescribeStackProvisioningParametersRequest]: (DescribeStackProvisioningParametersRequest & DescribeStackProvisioningParametersRequest & DescribeStackProvisioningParametersRequest & DescribeStackProvisioningParametersRequest & DescribeStackProvisioningParametersRequest & DescribeStackProvisioningParametersRequest & DescribeStackProvisioningParametersRequest & DescribeStackProvisioningParametersRequest & DescribeStackProvisioningParametersRequest & DescribeStackProvisioningParametersRequest & DescribeStackProvisioningParametersRequest)[K]
    }>): DescribeStackProvisioningParametersResult {
        return this.client.describeStackProvisioningParameters(
            this.ops["DescribeStackProvisioningParameters"].apply(partialParams)
        );
    }

    invokeDescribeStackSummary(partialParams: ToOptional<{
      [K in keyof DescribeStackSummaryRequest & keyof DescribeStackSummaryRequest & keyof DescribeStackSummaryRequest & keyof DescribeStackSummaryRequest & keyof DescribeStackSummaryRequest & keyof DescribeStackSummaryRequest & keyof DescribeStackSummaryRequest & keyof DescribeStackSummaryRequest & keyof DescribeStackSummaryRequest & keyof DescribeStackSummaryRequest & keyof DescribeStackSummaryRequest]: (DescribeStackSummaryRequest & DescribeStackSummaryRequest & DescribeStackSummaryRequest & DescribeStackSummaryRequest & DescribeStackSummaryRequest & DescribeStackSummaryRequest & DescribeStackSummaryRequest & DescribeStackSummaryRequest & DescribeStackSummaryRequest & DescribeStackSummaryRequest & DescribeStackSummaryRequest)[K]
    }>): DescribeStackSummaryResult {
        return this.client.describeStackSummary(
            this.ops["DescribeStackSummary"].apply(partialParams)
        );
    }

    invokeDescribeTimeBasedAutoScaling(partialParams: ToOptional<{
      [K in keyof DescribeTimeBasedAutoScalingRequest & keyof DescribeTimeBasedAutoScalingRequest & keyof DescribeTimeBasedAutoScalingRequest & keyof DescribeTimeBasedAutoScalingRequest & keyof DescribeTimeBasedAutoScalingRequest & keyof DescribeTimeBasedAutoScalingRequest & keyof DescribeTimeBasedAutoScalingRequest & keyof DescribeTimeBasedAutoScalingRequest & keyof DescribeTimeBasedAutoScalingRequest & keyof DescribeTimeBasedAutoScalingRequest & keyof DescribeTimeBasedAutoScalingRequest]: (DescribeTimeBasedAutoScalingRequest & DescribeTimeBasedAutoScalingRequest & DescribeTimeBasedAutoScalingRequest & DescribeTimeBasedAutoScalingRequest & DescribeTimeBasedAutoScalingRequest & DescribeTimeBasedAutoScalingRequest & DescribeTimeBasedAutoScalingRequest & DescribeTimeBasedAutoScalingRequest & DescribeTimeBasedAutoScalingRequest & DescribeTimeBasedAutoScalingRequest & DescribeTimeBasedAutoScalingRequest)[K]
    }>): DescribeTimeBasedAutoScalingResult {
        return this.client.describeTimeBasedAutoScaling(
            this.ops["DescribeTimeBasedAutoScaling"].apply(partialParams)
        );
    }

    invokeDetachElasticLoadBalancer(partialParams: ToOptional<{
      [K in keyof DetachElasticLoadBalancerRequest & keyof DetachElasticLoadBalancerRequest & keyof DetachElasticLoadBalancerRequest & keyof DetachElasticLoadBalancerRequest & keyof DetachElasticLoadBalancerRequest & keyof DetachElasticLoadBalancerRequest & keyof DetachElasticLoadBalancerRequest & keyof DetachElasticLoadBalancerRequest & keyof DetachElasticLoadBalancerRequest & keyof DetachElasticLoadBalancerRequest & keyof DetachElasticLoadBalancerRequest]: (DetachElasticLoadBalancerRequest & DetachElasticLoadBalancerRequest & DetachElasticLoadBalancerRequest & DetachElasticLoadBalancerRequest & DetachElasticLoadBalancerRequest & DetachElasticLoadBalancerRequest & DetachElasticLoadBalancerRequest & DetachElasticLoadBalancerRequest & DetachElasticLoadBalancerRequest & DetachElasticLoadBalancerRequest & DetachElasticLoadBalancerRequest)[K]
    }>): void {
        return this.client.detachElasticLoadBalancer(
            this.ops["DetachElasticLoadBalancer"].apply(partialParams)
        );
    }

    invokeDisassociateElasticIp(partialParams: ToOptional<{
      [K in keyof DisassociateElasticIpRequest & keyof DisassociateElasticIpRequest & keyof DisassociateElasticIpRequest & keyof DisassociateElasticIpRequest & keyof DisassociateElasticIpRequest & keyof DisassociateElasticIpRequest & keyof DisassociateElasticIpRequest & keyof DisassociateElasticIpRequest & keyof DisassociateElasticIpRequest & keyof DisassociateElasticIpRequest & keyof DisassociateElasticIpRequest]: (DisassociateElasticIpRequest & DisassociateElasticIpRequest & DisassociateElasticIpRequest & DisassociateElasticIpRequest & DisassociateElasticIpRequest & DisassociateElasticIpRequest & DisassociateElasticIpRequest & DisassociateElasticIpRequest & DisassociateElasticIpRequest & DisassociateElasticIpRequest & DisassociateElasticIpRequest)[K]
    }>): void {
        return this.client.disassociateElasticIp(
            this.ops["DisassociateElasticIp"].apply(partialParams)
        );
    }

    invokeGetHostnameSuggestion(partialParams: ToOptional<{
      [K in keyof GetHostnameSuggestionRequest & keyof GetHostnameSuggestionRequest & keyof GetHostnameSuggestionRequest & keyof GetHostnameSuggestionRequest & keyof GetHostnameSuggestionRequest & keyof GetHostnameSuggestionRequest & keyof GetHostnameSuggestionRequest & keyof GetHostnameSuggestionRequest & keyof GetHostnameSuggestionRequest & keyof GetHostnameSuggestionRequest & keyof GetHostnameSuggestionRequest]: (GetHostnameSuggestionRequest & GetHostnameSuggestionRequest & GetHostnameSuggestionRequest & GetHostnameSuggestionRequest & GetHostnameSuggestionRequest & GetHostnameSuggestionRequest & GetHostnameSuggestionRequest & GetHostnameSuggestionRequest & GetHostnameSuggestionRequest & GetHostnameSuggestionRequest & GetHostnameSuggestionRequest)[K]
    }>): GetHostnameSuggestionResult {
        return this.client.getHostnameSuggestion(
            this.ops["GetHostnameSuggestion"].apply(partialParams)
        );
    }

    invokeGrantAccess(partialParams: ToOptional<{
      [K in keyof GrantAccessRequest & keyof GrantAccessRequest & keyof GrantAccessRequest & keyof GrantAccessRequest & keyof GrantAccessRequest & keyof GrantAccessRequest & keyof GrantAccessRequest & keyof GrantAccessRequest & keyof GrantAccessRequest & keyof GrantAccessRequest & keyof GrantAccessRequest]: (GrantAccessRequest & GrantAccessRequest & GrantAccessRequest & GrantAccessRequest & GrantAccessRequest & GrantAccessRequest & GrantAccessRequest & GrantAccessRequest & GrantAccessRequest & GrantAccessRequest & GrantAccessRequest)[K]
    }>): GrantAccessResult {
        return this.client.grantAccess(
            this.ops["GrantAccess"].apply(partialParams)
        );
    }

    invokeListTags(partialParams: ToOptional<{
      [K in keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest]: (ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest)[K]
    }>): ListTagsResult {
        return this.client.listTags(
            this.ops["ListTags"].apply(partialParams)
        );
    }

    invokeRebootInstance(partialParams: ToOptional<{
      [K in keyof RebootInstanceRequest & keyof RebootInstanceRequest & keyof RebootInstanceRequest & keyof RebootInstanceRequest & keyof RebootInstanceRequest & keyof RebootInstanceRequest & keyof RebootInstanceRequest & keyof RebootInstanceRequest & keyof RebootInstanceRequest & keyof RebootInstanceRequest & keyof RebootInstanceRequest]: (RebootInstanceRequest & RebootInstanceRequest & RebootInstanceRequest & RebootInstanceRequest & RebootInstanceRequest & RebootInstanceRequest & RebootInstanceRequest & RebootInstanceRequest & RebootInstanceRequest & RebootInstanceRequest & RebootInstanceRequest)[K]
    }>): void {
        return this.client.rebootInstance(
            this.ops["RebootInstance"].apply(partialParams)
        );
    }

    invokeRegisterEcsCluster(partialParams: ToOptional<{
      [K in keyof RegisterEcsClusterRequest & keyof RegisterEcsClusterRequest & keyof RegisterEcsClusterRequest & keyof RegisterEcsClusterRequest & keyof RegisterEcsClusterRequest & keyof RegisterEcsClusterRequest & keyof RegisterEcsClusterRequest & keyof RegisterEcsClusterRequest & keyof RegisterEcsClusterRequest & keyof RegisterEcsClusterRequest & keyof RegisterEcsClusterRequest]: (RegisterEcsClusterRequest & RegisterEcsClusterRequest & RegisterEcsClusterRequest & RegisterEcsClusterRequest & RegisterEcsClusterRequest & RegisterEcsClusterRequest & RegisterEcsClusterRequest & RegisterEcsClusterRequest & RegisterEcsClusterRequest & RegisterEcsClusterRequest & RegisterEcsClusterRequest)[K]
    }>): RegisterEcsClusterResult {
        return this.client.registerEcsCluster(
            this.ops["RegisterEcsCluster"].apply(partialParams)
        );
    }

    invokeRegisterElasticIp(partialParams: ToOptional<{
      [K in keyof RegisterElasticIpRequest & keyof RegisterElasticIpRequest & keyof RegisterElasticIpRequest & keyof RegisterElasticIpRequest & keyof RegisterElasticIpRequest & keyof RegisterElasticIpRequest & keyof RegisterElasticIpRequest & keyof RegisterElasticIpRequest & keyof RegisterElasticIpRequest & keyof RegisterElasticIpRequest & keyof RegisterElasticIpRequest]: (RegisterElasticIpRequest & RegisterElasticIpRequest & RegisterElasticIpRequest & RegisterElasticIpRequest & RegisterElasticIpRequest & RegisterElasticIpRequest & RegisterElasticIpRequest & RegisterElasticIpRequest & RegisterElasticIpRequest & RegisterElasticIpRequest & RegisterElasticIpRequest)[K]
    }>): RegisterElasticIpResult {
        return this.client.registerElasticIp(
            this.ops["RegisterElasticIp"].apply(partialParams)
        );
    }

    invokeRegisterInstance(partialParams: ToOptional<{
      [K in keyof RegisterInstanceRequest & keyof RegisterInstanceRequest & keyof RegisterInstanceRequest & keyof RegisterInstanceRequest & keyof RegisterInstanceRequest & keyof RegisterInstanceRequest & keyof RegisterInstanceRequest & keyof RegisterInstanceRequest & keyof RegisterInstanceRequest & keyof RegisterInstanceRequest & keyof RegisterInstanceRequest]: (RegisterInstanceRequest & RegisterInstanceRequest & RegisterInstanceRequest & RegisterInstanceRequest & RegisterInstanceRequest & RegisterInstanceRequest & RegisterInstanceRequest & RegisterInstanceRequest & RegisterInstanceRequest & RegisterInstanceRequest & RegisterInstanceRequest)[K]
    }>): RegisterInstanceResult {
        return this.client.registerInstance(
            this.ops["RegisterInstance"].apply(partialParams)
        );
    }

    invokeRegisterRdsDbInstance(partialParams: ToOptional<{
      [K in keyof RegisterRdsDbInstanceRequest & keyof RegisterRdsDbInstanceRequest & keyof RegisterRdsDbInstanceRequest & keyof RegisterRdsDbInstanceRequest & keyof RegisterRdsDbInstanceRequest & keyof RegisterRdsDbInstanceRequest & keyof RegisterRdsDbInstanceRequest & keyof RegisterRdsDbInstanceRequest & keyof RegisterRdsDbInstanceRequest & keyof RegisterRdsDbInstanceRequest & keyof RegisterRdsDbInstanceRequest]: (RegisterRdsDbInstanceRequest & RegisterRdsDbInstanceRequest & RegisterRdsDbInstanceRequest & RegisterRdsDbInstanceRequest & RegisterRdsDbInstanceRequest & RegisterRdsDbInstanceRequest & RegisterRdsDbInstanceRequest & RegisterRdsDbInstanceRequest & RegisterRdsDbInstanceRequest & RegisterRdsDbInstanceRequest & RegisterRdsDbInstanceRequest)[K]
    }>): void {
        return this.client.registerRdsDbInstance(
            this.ops["RegisterRdsDbInstance"].apply(partialParams)
        );
    }

    invokeRegisterVolume(partialParams: ToOptional<{
      [K in keyof RegisterVolumeRequest & keyof RegisterVolumeRequest & keyof RegisterVolumeRequest & keyof RegisterVolumeRequest & keyof RegisterVolumeRequest & keyof RegisterVolumeRequest & keyof RegisterVolumeRequest & keyof RegisterVolumeRequest & keyof RegisterVolumeRequest & keyof RegisterVolumeRequest & keyof RegisterVolumeRequest]: (RegisterVolumeRequest & RegisterVolumeRequest & RegisterVolumeRequest & RegisterVolumeRequest & RegisterVolumeRequest & RegisterVolumeRequest & RegisterVolumeRequest & RegisterVolumeRequest & RegisterVolumeRequest & RegisterVolumeRequest & RegisterVolumeRequest)[K]
    }>): RegisterVolumeResult {
        return this.client.registerVolume(
            this.ops["RegisterVolume"].apply(partialParams)
        );
    }

    invokeSetLoadBasedAutoScaling(partialParams: ToOptional<{
      [K in keyof SetLoadBasedAutoScalingRequest & keyof SetLoadBasedAutoScalingRequest & keyof SetLoadBasedAutoScalingRequest & keyof SetLoadBasedAutoScalingRequest & keyof SetLoadBasedAutoScalingRequest & keyof SetLoadBasedAutoScalingRequest & keyof SetLoadBasedAutoScalingRequest & keyof SetLoadBasedAutoScalingRequest & keyof SetLoadBasedAutoScalingRequest & keyof SetLoadBasedAutoScalingRequest & keyof SetLoadBasedAutoScalingRequest]: (SetLoadBasedAutoScalingRequest & SetLoadBasedAutoScalingRequest & SetLoadBasedAutoScalingRequest & SetLoadBasedAutoScalingRequest & SetLoadBasedAutoScalingRequest & SetLoadBasedAutoScalingRequest & SetLoadBasedAutoScalingRequest & SetLoadBasedAutoScalingRequest & SetLoadBasedAutoScalingRequest & SetLoadBasedAutoScalingRequest & SetLoadBasedAutoScalingRequest)[K]
    }>): void {
        return this.client.setLoadBasedAutoScaling(
            this.ops["SetLoadBasedAutoScaling"].apply(partialParams)
        );
    }

    invokeSetPermission(partialParams: ToOptional<{
      [K in keyof SetPermissionRequest & keyof SetPermissionRequest & keyof SetPermissionRequest & keyof SetPermissionRequest & keyof SetPermissionRequest & keyof SetPermissionRequest & keyof SetPermissionRequest & keyof SetPermissionRequest & keyof SetPermissionRequest & keyof SetPermissionRequest & keyof SetPermissionRequest]: (SetPermissionRequest & SetPermissionRequest & SetPermissionRequest & SetPermissionRequest & SetPermissionRequest & SetPermissionRequest & SetPermissionRequest & SetPermissionRequest & SetPermissionRequest & SetPermissionRequest & SetPermissionRequest)[K]
    }>): void {
        return this.client.setPermission(
            this.ops["SetPermission"].apply(partialParams)
        );
    }

    invokeSetTimeBasedAutoScaling(partialParams: ToOptional<{
      [K in keyof SetTimeBasedAutoScalingRequest & keyof SetTimeBasedAutoScalingRequest & keyof SetTimeBasedAutoScalingRequest & keyof SetTimeBasedAutoScalingRequest & keyof SetTimeBasedAutoScalingRequest & keyof SetTimeBasedAutoScalingRequest & keyof SetTimeBasedAutoScalingRequest & keyof SetTimeBasedAutoScalingRequest & keyof SetTimeBasedAutoScalingRequest & keyof SetTimeBasedAutoScalingRequest & keyof SetTimeBasedAutoScalingRequest]: (SetTimeBasedAutoScalingRequest & SetTimeBasedAutoScalingRequest & SetTimeBasedAutoScalingRequest & SetTimeBasedAutoScalingRequest & SetTimeBasedAutoScalingRequest & SetTimeBasedAutoScalingRequest & SetTimeBasedAutoScalingRequest & SetTimeBasedAutoScalingRequest & SetTimeBasedAutoScalingRequest & SetTimeBasedAutoScalingRequest & SetTimeBasedAutoScalingRequest)[K]
    }>): void {
        return this.client.setTimeBasedAutoScaling(
            this.ops["SetTimeBasedAutoScaling"].apply(partialParams)
        );
    }

    invokeStartInstance(partialParams: ToOptional<{
      [K in keyof StartInstanceRequest & keyof StartInstanceRequest & keyof StartInstanceRequest & keyof StartInstanceRequest & keyof StartInstanceRequest & keyof StartInstanceRequest & keyof StartInstanceRequest & keyof StartInstanceRequest & keyof StartInstanceRequest & keyof StartInstanceRequest & keyof StartInstanceRequest]: (StartInstanceRequest & StartInstanceRequest & StartInstanceRequest & StartInstanceRequest & StartInstanceRequest & StartInstanceRequest & StartInstanceRequest & StartInstanceRequest & StartInstanceRequest & StartInstanceRequest & StartInstanceRequest)[K]
    }>): void {
        return this.client.startInstance(
            this.ops["StartInstance"].apply(partialParams)
        );
    }

    invokeStartStack(partialParams: ToOptional<{
      [K in keyof StartStackRequest & keyof StartStackRequest & keyof StartStackRequest & keyof StartStackRequest & keyof StartStackRequest & keyof StartStackRequest & keyof StartStackRequest & keyof StartStackRequest & keyof StartStackRequest & keyof StartStackRequest & keyof StartStackRequest]: (StartStackRequest & StartStackRequest & StartStackRequest & StartStackRequest & StartStackRequest & StartStackRequest & StartStackRequest & StartStackRequest & StartStackRequest & StartStackRequest & StartStackRequest)[K]
    }>): void {
        return this.client.startStack(
            this.ops["StartStack"].apply(partialParams)
        );
    }

    invokeStopInstance(partialParams: ToOptional<{
      [K in keyof StopInstanceRequest & keyof StopInstanceRequest & keyof StopInstanceRequest & keyof StopInstanceRequest & keyof StopInstanceRequest & keyof StopInstanceRequest & keyof StopInstanceRequest & keyof StopInstanceRequest & keyof StopInstanceRequest & keyof StopInstanceRequest & keyof StopInstanceRequest]: (StopInstanceRequest & StopInstanceRequest & StopInstanceRequest & StopInstanceRequest & StopInstanceRequest & StopInstanceRequest & StopInstanceRequest & StopInstanceRequest & StopInstanceRequest & StopInstanceRequest & StopInstanceRequest)[K]
    }>): void {
        return this.client.stopInstance(
            this.ops["StopInstance"].apply(partialParams)
        );
    }

    invokeStopStack(partialParams: ToOptional<{
      [K in keyof StopStackRequest & keyof StopStackRequest & keyof StopStackRequest & keyof StopStackRequest & keyof StopStackRequest & keyof StopStackRequest & keyof StopStackRequest & keyof StopStackRequest & keyof StopStackRequest & keyof StopStackRequest & keyof StopStackRequest]: (StopStackRequest & StopStackRequest & StopStackRequest & StopStackRequest & StopStackRequest & StopStackRequest & StopStackRequest & StopStackRequest & StopStackRequest & StopStackRequest & StopStackRequest)[K]
    }>): void {
        return this.client.stopStack(
            this.ops["StopStack"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): void {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUnassignInstance(partialParams: ToOptional<{
      [K in keyof UnassignInstanceRequest & keyof UnassignInstanceRequest & keyof UnassignInstanceRequest & keyof UnassignInstanceRequest & keyof UnassignInstanceRequest & keyof UnassignInstanceRequest & keyof UnassignInstanceRequest & keyof UnassignInstanceRequest & keyof UnassignInstanceRequest & keyof UnassignInstanceRequest & keyof UnassignInstanceRequest]: (UnassignInstanceRequest & UnassignInstanceRequest & UnassignInstanceRequest & UnassignInstanceRequest & UnassignInstanceRequest & UnassignInstanceRequest & UnassignInstanceRequest & UnassignInstanceRequest & UnassignInstanceRequest & UnassignInstanceRequest & UnassignInstanceRequest)[K]
    }>): void {
        return this.client.unassignInstance(
            this.ops["UnassignInstance"].apply(partialParams)
        );
    }

    invokeUnassignVolume(partialParams: ToOptional<{
      [K in keyof UnassignVolumeRequest & keyof UnassignVolumeRequest & keyof UnassignVolumeRequest & keyof UnassignVolumeRequest & keyof UnassignVolumeRequest & keyof UnassignVolumeRequest & keyof UnassignVolumeRequest & keyof UnassignVolumeRequest & keyof UnassignVolumeRequest & keyof UnassignVolumeRequest & keyof UnassignVolumeRequest]: (UnassignVolumeRequest & UnassignVolumeRequest & UnassignVolumeRequest & UnassignVolumeRequest & UnassignVolumeRequest & UnassignVolumeRequest & UnassignVolumeRequest & UnassignVolumeRequest & UnassignVolumeRequest & UnassignVolumeRequest & UnassignVolumeRequest)[K]
    }>): void {
        return this.client.unassignVolume(
            this.ops["UnassignVolume"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): void {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateApp(partialParams: ToOptional<{
      [K in keyof UpdateAppRequest & keyof UpdateAppRequest & keyof UpdateAppRequest & keyof UpdateAppRequest & keyof UpdateAppRequest & keyof UpdateAppRequest & keyof UpdateAppRequest & keyof UpdateAppRequest & keyof UpdateAppRequest & keyof UpdateAppRequest & keyof UpdateAppRequest]: (UpdateAppRequest & UpdateAppRequest & UpdateAppRequest & UpdateAppRequest & UpdateAppRequest & UpdateAppRequest & UpdateAppRequest & UpdateAppRequest & UpdateAppRequest & UpdateAppRequest & UpdateAppRequest)[K]
    }>): void {
        return this.client.updateApp(
            this.ops["UpdateApp"].apply(partialParams)
        );
    }

    invokeUpdateElasticIp(partialParams: ToOptional<{
      [K in keyof UpdateElasticIpRequest & keyof UpdateElasticIpRequest & keyof UpdateElasticIpRequest & keyof UpdateElasticIpRequest & keyof UpdateElasticIpRequest & keyof UpdateElasticIpRequest & keyof UpdateElasticIpRequest & keyof UpdateElasticIpRequest & keyof UpdateElasticIpRequest & keyof UpdateElasticIpRequest & keyof UpdateElasticIpRequest]: (UpdateElasticIpRequest & UpdateElasticIpRequest & UpdateElasticIpRequest & UpdateElasticIpRequest & UpdateElasticIpRequest & UpdateElasticIpRequest & UpdateElasticIpRequest & UpdateElasticIpRequest & UpdateElasticIpRequest & UpdateElasticIpRequest & UpdateElasticIpRequest)[K]
    }>): void {
        return this.client.updateElasticIp(
            this.ops["UpdateElasticIp"].apply(partialParams)
        );
    }

    invokeUpdateInstance(partialParams: ToOptional<{
      [K in keyof UpdateInstanceRequest & keyof UpdateInstanceRequest & keyof UpdateInstanceRequest & keyof UpdateInstanceRequest & keyof UpdateInstanceRequest & keyof UpdateInstanceRequest & keyof UpdateInstanceRequest & keyof UpdateInstanceRequest & keyof UpdateInstanceRequest & keyof UpdateInstanceRequest & keyof UpdateInstanceRequest]: (UpdateInstanceRequest & UpdateInstanceRequest & UpdateInstanceRequest & UpdateInstanceRequest & UpdateInstanceRequest & UpdateInstanceRequest & UpdateInstanceRequest & UpdateInstanceRequest & UpdateInstanceRequest & UpdateInstanceRequest & UpdateInstanceRequest)[K]
    }>): void {
        return this.client.updateInstance(
            this.ops["UpdateInstance"].apply(partialParams)
        );
    }

    invokeUpdateLayer(partialParams: ToOptional<{
      [K in keyof UpdateLayerRequest & keyof UpdateLayerRequest & keyof UpdateLayerRequest & keyof UpdateLayerRequest & keyof UpdateLayerRequest & keyof UpdateLayerRequest & keyof UpdateLayerRequest & keyof UpdateLayerRequest & keyof UpdateLayerRequest & keyof UpdateLayerRequest & keyof UpdateLayerRequest]: (UpdateLayerRequest & UpdateLayerRequest & UpdateLayerRequest & UpdateLayerRequest & UpdateLayerRequest & UpdateLayerRequest & UpdateLayerRequest & UpdateLayerRequest & UpdateLayerRequest & UpdateLayerRequest & UpdateLayerRequest)[K]
    }>): void {
        return this.client.updateLayer(
            this.ops["UpdateLayer"].apply(partialParams)
        );
    }

    invokeUpdateRdsDbInstance(partialParams: ToOptional<{
      [K in keyof UpdateRdsDbInstanceRequest & keyof UpdateRdsDbInstanceRequest & keyof UpdateRdsDbInstanceRequest & keyof UpdateRdsDbInstanceRequest & keyof UpdateRdsDbInstanceRequest & keyof UpdateRdsDbInstanceRequest & keyof UpdateRdsDbInstanceRequest & keyof UpdateRdsDbInstanceRequest & keyof UpdateRdsDbInstanceRequest & keyof UpdateRdsDbInstanceRequest & keyof UpdateRdsDbInstanceRequest]: (UpdateRdsDbInstanceRequest & UpdateRdsDbInstanceRequest & UpdateRdsDbInstanceRequest & UpdateRdsDbInstanceRequest & UpdateRdsDbInstanceRequest & UpdateRdsDbInstanceRequest & UpdateRdsDbInstanceRequest & UpdateRdsDbInstanceRequest & UpdateRdsDbInstanceRequest & UpdateRdsDbInstanceRequest & UpdateRdsDbInstanceRequest)[K]
    }>): void {
        return this.client.updateRdsDbInstance(
            this.ops["UpdateRdsDbInstance"].apply(partialParams)
        );
    }

    invokeUpdateStack(partialParams: ToOptional<{
      [K in keyof UpdateStackRequest & keyof UpdateStackRequest & keyof UpdateStackRequest & keyof UpdateStackRequest & keyof UpdateStackRequest & keyof UpdateStackRequest & keyof UpdateStackRequest & keyof Omit<UpdateStackRequest, "StackId"> & keyof UpdateStackRequest & keyof UpdateStackRequest & keyof UpdateStackRequest]: (UpdateStackRequest & UpdateStackRequest & UpdateStackRequest & UpdateStackRequest & UpdateStackRequest & UpdateStackRequest & UpdateStackRequest & Omit<UpdateStackRequest, "StackId"> & UpdateStackRequest & UpdateStackRequest & UpdateStackRequest)[K]
    }>): void {
        return this.client.updateStack(
            this.ops["UpdateStack"].apply(partialParams)
        );
    }

    invokeUpdateUserProfile(partialParams: ToOptional<{
      [K in keyof UpdateUserProfileRequest & keyof UpdateUserProfileRequest & keyof UpdateUserProfileRequest & keyof UpdateUserProfileRequest & keyof UpdateUserProfileRequest & keyof UpdateUserProfileRequest & keyof UpdateUserProfileRequest & keyof UpdateUserProfileRequest & keyof UpdateUserProfileRequest & keyof UpdateUserProfileRequest & keyof UpdateUserProfileRequest]: (UpdateUserProfileRequest & UpdateUserProfileRequest & UpdateUserProfileRequest & UpdateUserProfileRequest & UpdateUserProfileRequest & UpdateUserProfileRequest & UpdateUserProfileRequest & UpdateUserProfileRequest & UpdateUserProfileRequest & UpdateUserProfileRequest & UpdateUserProfileRequest)[K]
    }>): void {
        return this.client.updateUserProfile(
            this.ops["UpdateUserProfile"].apply(partialParams)
        );
    }

    invokeUpdateVolume(partialParams: ToOptional<{
      [K in keyof UpdateVolumeRequest & keyof UpdateVolumeRequest & keyof UpdateVolumeRequest & keyof UpdateVolumeRequest & keyof UpdateVolumeRequest & keyof UpdateVolumeRequest & keyof UpdateVolumeRequest & keyof UpdateVolumeRequest & keyof UpdateVolumeRequest & keyof UpdateVolumeRequest & keyof UpdateVolumeRequest]: (UpdateVolumeRequest & UpdateVolumeRequest & UpdateVolumeRequest & UpdateVolumeRequest & UpdateVolumeRequest & UpdateVolumeRequest & UpdateVolumeRequest & UpdateVolumeRequest & UpdateVolumeRequest & UpdateVolumeRequest & UpdateVolumeRequest)[K]
    }>): void {
        return this.client.updateVolume(
            this.ops["UpdateVolume"].apply(partialParams)
        );
    }
}