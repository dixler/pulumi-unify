
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
const schema = require("../apis/opsworks-2013-02-18.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.opsworks.MemcachedLayer {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.opsworks.MemcachedLayer>) {
        super(...args)
        this.client = new awssdk.OpsWorks()
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

    invokeAssignInstance(partialParams: ToOptional<{
      [K in keyof AssignInstanceRequest & keyof AssignInstanceRequest & keyof AssignInstanceRequest & keyof AssignInstanceRequest & keyof AssignInstanceRequest & keyof AssignInstanceRequest]: (AssignInstanceRequest & AssignInstanceRequest & AssignInstanceRequest & AssignInstanceRequest & AssignInstanceRequest & AssignInstanceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.assignInstance(
          this.ops["AssignInstance"].applicator.apply(partialParams)
        );
    }

    invokeAssignVolume(partialParams: ToOptional<{
      [K in keyof AssignVolumeRequest & keyof AssignVolumeRequest & keyof AssignVolumeRequest & keyof AssignVolumeRequest & keyof AssignVolumeRequest & keyof AssignVolumeRequest]: (AssignVolumeRequest & AssignVolumeRequest & AssignVolumeRequest & AssignVolumeRequest & AssignVolumeRequest & AssignVolumeRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.assignVolume(
          this.ops["AssignVolume"].applicator.apply(partialParams)
        );
    }

    invokeAssociateElasticIp(partialParams: ToOptional<{
      [K in keyof AssociateElasticIpRequest & keyof AssociateElasticIpRequest & keyof AssociateElasticIpRequest & keyof AssociateElasticIpRequest & keyof AssociateElasticIpRequest & keyof AssociateElasticIpRequest]: (AssociateElasticIpRequest & AssociateElasticIpRequest & AssociateElasticIpRequest & AssociateElasticIpRequest & AssociateElasticIpRequest & AssociateElasticIpRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateElasticIp(
          this.ops["AssociateElasticIp"].applicator.apply(partialParams)
        );
    }

    invokeAttachElasticLoadBalancer(partialParams: ToOptional<{
      [K in keyof AttachElasticLoadBalancerRequest & keyof AttachElasticLoadBalancerRequest & keyof AttachElasticLoadBalancerRequest & keyof AttachElasticLoadBalancerRequest & keyof AttachElasticLoadBalancerRequest & keyof AttachElasticLoadBalancerRequest]: (AttachElasticLoadBalancerRequest & AttachElasticLoadBalancerRequest & AttachElasticLoadBalancerRequest & AttachElasticLoadBalancerRequest & AttachElasticLoadBalancerRequest & AttachElasticLoadBalancerRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachElasticLoadBalancer(
          this.ops["AttachElasticLoadBalancer"].applicator.apply(partialParams)
        );
    }

    invokeCloneStack(partialParams: ToOptional<{
      [K in keyof CloneStackRequest & keyof CloneStackRequest & keyof CloneStackRequest & keyof CloneStackRequest & keyof CloneStackRequest & keyof CloneStackRequest]: (CloneStackRequest & CloneStackRequest & CloneStackRequest & CloneStackRequest & CloneStackRequest & CloneStackRequest)[K]
    }>): Request<CloneStackResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cloneStack(
          this.ops["CloneStack"].applicator.apply(partialParams)
        );
    }

    invokeCreateApp(partialParams: ToOptional<{
      [K in keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest & keyof CreateAppRequest]: (CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest & CreateAppRequest)[K]
    }>): Request<CreateAppResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createApp(
          this.ops["CreateApp"].applicator.apply(partialParams)
        );
    }

    invokeCreateDeployment(partialParams: ToOptional<{
      [K in keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest & keyof CreateDeploymentRequest]: (CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest & CreateDeploymentRequest)[K]
    }>): Request<CreateDeploymentResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDeployment(
          this.ops["CreateDeployment"].applicator.apply(partialParams)
        );
    }

    invokeCreateInstance(partialParams: ToOptional<{
      [K in keyof CreateInstanceRequest & keyof CreateInstanceRequest & keyof CreateInstanceRequest & keyof CreateInstanceRequest & keyof CreateInstanceRequest & keyof CreateInstanceRequest]: (CreateInstanceRequest & CreateInstanceRequest & CreateInstanceRequest & CreateInstanceRequest & CreateInstanceRequest & CreateInstanceRequest)[K]
    }>): Request<CreateInstanceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createInstance(
          this.ops["CreateInstance"].applicator.apply(partialParams)
        );
    }

    invokeCreateLayer(partialParams: ToOptional<{
      [K in keyof CreateLayerRequest & keyof CreateLayerRequest & keyof CreateLayerRequest & keyof CreateLayerRequest & keyof CreateLayerRequest & keyof CreateLayerRequest]: (CreateLayerRequest & CreateLayerRequest & CreateLayerRequest & CreateLayerRequest & CreateLayerRequest & CreateLayerRequest)[K]
    }>): Request<CreateLayerResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createLayer(
          this.ops["CreateLayer"].applicator.apply(partialParams)
        );
    }

    invokeCreateStack(partialParams: ToOptional<{
      [K in keyof CreateStackRequest & keyof CreateStackRequest & keyof CreateStackRequest & keyof CreateStackRequest & keyof CreateStackRequest & keyof CreateStackRequest]: (CreateStackRequest & CreateStackRequest & CreateStackRequest & CreateStackRequest & CreateStackRequest & CreateStackRequest)[K]
    }>): Request<CreateStackResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createStack(
          this.ops["CreateStack"].applicator.apply(partialParams)
        );
    }

    invokeCreateUserProfile(partialParams: ToOptional<{
      [K in keyof CreateUserProfileRequest & keyof CreateUserProfileRequest & keyof CreateUserProfileRequest & keyof CreateUserProfileRequest & keyof CreateUserProfileRequest & keyof CreateUserProfileRequest]: (CreateUserProfileRequest & CreateUserProfileRequest & CreateUserProfileRequest & CreateUserProfileRequest & CreateUserProfileRequest & CreateUserProfileRequest)[K]
    }>): Request<CreateUserProfileResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUserProfile(
          this.ops["CreateUserProfile"].applicator.apply(partialParams)
        );
    }

    invokeDeleteApp(partialParams: ToOptional<{
      [K in keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest & keyof DeleteAppRequest]: (DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest & DeleteAppRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApp(
          this.ops["DeleteApp"].applicator.apply(partialParams)
        );
    }

    invokeDeleteInstance(partialParams: ToOptional<{
      [K in keyof DeleteInstanceRequest & keyof DeleteInstanceRequest & keyof DeleteInstanceRequest & keyof DeleteInstanceRequest & keyof DeleteInstanceRequest & keyof DeleteInstanceRequest]: (DeleteInstanceRequest & DeleteInstanceRequest & DeleteInstanceRequest & DeleteInstanceRequest & DeleteInstanceRequest & DeleteInstanceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteInstance(
          this.ops["DeleteInstance"].applicator.apply(partialParams)
        );
    }

    invokeDeleteLayer(partialParams: ToOptional<{
      [K in keyof DeleteLayerRequest & keyof DeleteLayerRequest & keyof DeleteLayerRequest & keyof DeleteLayerRequest & keyof DeleteLayerRequest & keyof DeleteLayerRequest]: (DeleteLayerRequest & DeleteLayerRequest & DeleteLayerRequest & DeleteLayerRequest & DeleteLayerRequest & DeleteLayerRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteLayer(
          this.ops["DeleteLayer"].applicator.apply(partialParams)
        );
    }

    invokeDeleteStack(partialParams: ToOptional<{
      [K in keyof DeleteStackRequest & keyof DeleteStackRequest & keyof DeleteStackRequest & keyof DeleteStackRequest & keyof DeleteStackRequest & keyof DeleteStackRequest]: (DeleteStackRequest & DeleteStackRequest & DeleteStackRequest & DeleteStackRequest & DeleteStackRequest & DeleteStackRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteStack(
          this.ops["DeleteStack"].applicator.apply(partialParams)
        );
    }

    invokeDeleteUserProfile(partialParams: ToOptional<{
      [K in keyof DeleteUserProfileRequest & keyof DeleteUserProfileRequest & keyof DeleteUserProfileRequest & keyof DeleteUserProfileRequest & keyof DeleteUserProfileRequest & keyof DeleteUserProfileRequest]: (DeleteUserProfileRequest & DeleteUserProfileRequest & DeleteUserProfileRequest & DeleteUserProfileRequest & DeleteUserProfileRequest & DeleteUserProfileRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUserProfile(
          this.ops["DeleteUserProfile"].applicator.apply(partialParams)
        );
    }

    invokeDeregisterEcsCluster(partialParams: ToOptional<{
      [K in keyof DeregisterEcsClusterRequest & keyof DeregisterEcsClusterRequest & keyof DeregisterEcsClusterRequest & keyof DeregisterEcsClusterRequest & keyof DeregisterEcsClusterRequest & keyof DeregisterEcsClusterRequest]: (DeregisterEcsClusterRequest & DeregisterEcsClusterRequest & DeregisterEcsClusterRequest & DeregisterEcsClusterRequest & DeregisterEcsClusterRequest & DeregisterEcsClusterRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterEcsCluster(
          this.ops["DeregisterEcsCluster"].applicator.apply(partialParams)
        );
    }

    invokeDeregisterElasticIp(partialParams: ToOptional<{
      [K in keyof DeregisterElasticIpRequest & keyof DeregisterElasticIpRequest & keyof DeregisterElasticIpRequest & keyof DeregisterElasticIpRequest & keyof DeregisterElasticIpRequest & keyof DeregisterElasticIpRequest]: (DeregisterElasticIpRequest & DeregisterElasticIpRequest & DeregisterElasticIpRequest & DeregisterElasticIpRequest & DeregisterElasticIpRequest & DeregisterElasticIpRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterElasticIp(
          this.ops["DeregisterElasticIp"].applicator.apply(partialParams)
        );
    }

    invokeDeregisterInstance(partialParams: ToOptional<{
      [K in keyof DeregisterInstanceRequest & keyof DeregisterInstanceRequest & keyof DeregisterInstanceRequest & keyof DeregisterInstanceRequest & keyof DeregisterInstanceRequest & keyof DeregisterInstanceRequest]: (DeregisterInstanceRequest & DeregisterInstanceRequest & DeregisterInstanceRequest & DeregisterInstanceRequest & DeregisterInstanceRequest & DeregisterInstanceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterInstance(
          this.ops["DeregisterInstance"].applicator.apply(partialParams)
        );
    }

    invokeDeregisterRdsDbInstance(partialParams: ToOptional<{
      [K in keyof DeregisterRdsDbInstanceRequest & keyof DeregisterRdsDbInstanceRequest & keyof DeregisterRdsDbInstanceRequest & keyof DeregisterRdsDbInstanceRequest & keyof DeregisterRdsDbInstanceRequest & keyof DeregisterRdsDbInstanceRequest]: (DeregisterRdsDbInstanceRequest & DeregisterRdsDbInstanceRequest & DeregisterRdsDbInstanceRequest & DeregisterRdsDbInstanceRequest & DeregisterRdsDbInstanceRequest & DeregisterRdsDbInstanceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterRdsDbInstance(
          this.ops["DeregisterRdsDbInstance"].applicator.apply(partialParams)
        );
    }

    invokeDeregisterVolume(partialParams: ToOptional<{
      [K in keyof DeregisterVolumeRequest & keyof DeregisterVolumeRequest & keyof DeregisterVolumeRequest & keyof DeregisterVolumeRequest & keyof DeregisterVolumeRequest & keyof DeregisterVolumeRequest]: (DeregisterVolumeRequest & DeregisterVolumeRequest & DeregisterVolumeRequest & DeregisterVolumeRequest & DeregisterVolumeRequest & DeregisterVolumeRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterVolume(
          this.ops["DeregisterVolume"].applicator.apply(partialParams)
        );
    }

    invokeDescribeLoadBasedAutoScaling(partialParams: ToOptional<{
      [K in keyof DescribeLoadBasedAutoScalingRequest & keyof DescribeLoadBasedAutoScalingRequest & keyof DescribeLoadBasedAutoScalingRequest & keyof DescribeLoadBasedAutoScalingRequest & keyof DescribeLoadBasedAutoScalingRequest & keyof DescribeLoadBasedAutoScalingRequest]: (DescribeLoadBasedAutoScalingRequest & DescribeLoadBasedAutoScalingRequest & DescribeLoadBasedAutoScalingRequest & DescribeLoadBasedAutoScalingRequest & DescribeLoadBasedAutoScalingRequest & DescribeLoadBasedAutoScalingRequest)[K]
    }>): Request<DescribeLoadBasedAutoScalingResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeLoadBasedAutoScaling(
          this.ops["DescribeLoadBasedAutoScaling"].applicator.apply(partialParams)
        );
    }

    invokeDescribeRdsDbInstances(partialParams: ToOptional<{
      [K in keyof DescribeRdsDbInstancesRequest & keyof DescribeRdsDbInstancesRequest & keyof DescribeRdsDbInstancesRequest & keyof DescribeRdsDbInstancesRequest & keyof DescribeRdsDbInstancesRequest & keyof DescribeRdsDbInstancesRequest]: (DescribeRdsDbInstancesRequest & DescribeRdsDbInstancesRequest & DescribeRdsDbInstancesRequest & DescribeRdsDbInstancesRequest & DescribeRdsDbInstancesRequest & DescribeRdsDbInstancesRequest)[K]
    }>): Request<DescribeRdsDbInstancesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeRdsDbInstances(
          this.ops["DescribeRdsDbInstances"].applicator.apply(partialParams)
        );
    }

    invokeDescribeStackProvisioningParameters(partialParams: ToOptional<{
      [K in keyof DescribeStackProvisioningParametersRequest & keyof DescribeStackProvisioningParametersRequest & keyof DescribeStackProvisioningParametersRequest & keyof DescribeStackProvisioningParametersRequest & keyof DescribeStackProvisioningParametersRequest & keyof DescribeStackProvisioningParametersRequest]: (DescribeStackProvisioningParametersRequest & DescribeStackProvisioningParametersRequest & DescribeStackProvisioningParametersRequest & DescribeStackProvisioningParametersRequest & DescribeStackProvisioningParametersRequest & DescribeStackProvisioningParametersRequest)[K]
    }>): Request<DescribeStackProvisioningParametersResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeStackProvisioningParameters(
          this.ops["DescribeStackProvisioningParameters"].applicator.apply(partialParams)
        );
    }

    invokeDescribeStackSummary(partialParams: ToOptional<{
      [K in keyof DescribeStackSummaryRequest & keyof DescribeStackSummaryRequest & keyof DescribeStackSummaryRequest & keyof DescribeStackSummaryRequest & keyof DescribeStackSummaryRequest & keyof DescribeStackSummaryRequest]: (DescribeStackSummaryRequest & DescribeStackSummaryRequest & DescribeStackSummaryRequest & DescribeStackSummaryRequest & DescribeStackSummaryRequest & DescribeStackSummaryRequest)[K]
    }>): Request<DescribeStackSummaryResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeStackSummary(
          this.ops["DescribeStackSummary"].applicator.apply(partialParams)
        );
    }

    invokeDescribeTimeBasedAutoScaling(partialParams: ToOptional<{
      [K in keyof DescribeTimeBasedAutoScalingRequest & keyof DescribeTimeBasedAutoScalingRequest & keyof DescribeTimeBasedAutoScalingRequest & keyof DescribeTimeBasedAutoScalingRequest & keyof DescribeTimeBasedAutoScalingRequest & keyof DescribeTimeBasedAutoScalingRequest]: (DescribeTimeBasedAutoScalingRequest & DescribeTimeBasedAutoScalingRequest & DescribeTimeBasedAutoScalingRequest & DescribeTimeBasedAutoScalingRequest & DescribeTimeBasedAutoScalingRequest & DescribeTimeBasedAutoScalingRequest)[K]
    }>): Request<DescribeTimeBasedAutoScalingResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTimeBasedAutoScaling(
          this.ops["DescribeTimeBasedAutoScaling"].applicator.apply(partialParams)
        );
    }

    invokeDetachElasticLoadBalancer(partialParams: ToOptional<{
      [K in keyof DetachElasticLoadBalancerRequest & keyof DetachElasticLoadBalancerRequest & keyof DetachElasticLoadBalancerRequest & keyof DetachElasticLoadBalancerRequest & keyof DetachElasticLoadBalancerRequest & keyof DetachElasticLoadBalancerRequest]: (DetachElasticLoadBalancerRequest & DetachElasticLoadBalancerRequest & DetachElasticLoadBalancerRequest & DetachElasticLoadBalancerRequest & DetachElasticLoadBalancerRequest & DetachElasticLoadBalancerRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachElasticLoadBalancer(
          this.ops["DetachElasticLoadBalancer"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateElasticIp(partialParams: ToOptional<{
      [K in keyof DisassociateElasticIpRequest & keyof DisassociateElasticIpRequest & keyof DisassociateElasticIpRequest & keyof DisassociateElasticIpRequest & keyof DisassociateElasticIpRequest & keyof DisassociateElasticIpRequest]: (DisassociateElasticIpRequest & DisassociateElasticIpRequest & DisassociateElasticIpRequest & DisassociateElasticIpRequest & DisassociateElasticIpRequest & DisassociateElasticIpRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateElasticIp(
          this.ops["DisassociateElasticIp"].applicator.apply(partialParams)
        );
    }

    invokeGetHostnameSuggestion(partialParams: ToOptional<{
      [K in keyof GetHostnameSuggestionRequest & keyof GetHostnameSuggestionRequest & keyof GetHostnameSuggestionRequest & keyof GetHostnameSuggestionRequest & keyof GetHostnameSuggestionRequest & keyof GetHostnameSuggestionRequest]: (GetHostnameSuggestionRequest & GetHostnameSuggestionRequest & GetHostnameSuggestionRequest & GetHostnameSuggestionRequest & GetHostnameSuggestionRequest & GetHostnameSuggestionRequest)[K]
    }>): Request<GetHostnameSuggestionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getHostnameSuggestion(
          this.ops["GetHostnameSuggestion"].applicator.apply(partialParams)
        );
    }

    invokeGrantAccess(partialParams: ToOptional<{
      [K in keyof GrantAccessRequest & keyof GrantAccessRequest & keyof GrantAccessRequest & keyof GrantAccessRequest & keyof GrantAccessRequest & keyof GrantAccessRequest]: (GrantAccessRequest & GrantAccessRequest & GrantAccessRequest & GrantAccessRequest & GrantAccessRequest & GrantAccessRequest)[K]
    }>): Request<GrantAccessResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.grantAccess(
          this.ops["GrantAccess"].applicator.apply(partialParams)
        );
    }

    invokeListTags(partialParams: ToOptional<{
      [K in keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest]: (ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest)[K]
    }>): Request<ListTagsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTags(
          this.ops["ListTags"].applicator.apply(partialParams)
        );
    }

    invokeRebootInstance(partialParams: ToOptional<{
      [K in keyof RebootInstanceRequest & keyof RebootInstanceRequest & keyof RebootInstanceRequest & keyof RebootInstanceRequest & keyof RebootInstanceRequest & keyof RebootInstanceRequest]: (RebootInstanceRequest & RebootInstanceRequest & RebootInstanceRequest & RebootInstanceRequest & RebootInstanceRequest & RebootInstanceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rebootInstance(
          this.ops["RebootInstance"].applicator.apply(partialParams)
        );
    }

    invokeRegisterEcsCluster(partialParams: ToOptional<{
      [K in keyof RegisterEcsClusterRequest & keyof RegisterEcsClusterRequest & keyof RegisterEcsClusterRequest & keyof RegisterEcsClusterRequest & keyof RegisterEcsClusterRequest & keyof RegisterEcsClusterRequest]: (RegisterEcsClusterRequest & RegisterEcsClusterRequest & RegisterEcsClusterRequest & RegisterEcsClusterRequest & RegisterEcsClusterRequest & RegisterEcsClusterRequest)[K]
    }>): Request<RegisterEcsClusterResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerEcsCluster(
          this.ops["RegisterEcsCluster"].applicator.apply(partialParams)
        );
    }

    invokeRegisterElasticIp(partialParams: ToOptional<{
      [K in keyof RegisterElasticIpRequest & keyof RegisterElasticIpRequest & keyof RegisterElasticIpRequest & keyof RegisterElasticIpRequest & keyof RegisterElasticIpRequest & keyof RegisterElasticIpRequest]: (RegisterElasticIpRequest & RegisterElasticIpRequest & RegisterElasticIpRequest & RegisterElasticIpRequest & RegisterElasticIpRequest & RegisterElasticIpRequest)[K]
    }>): Request<RegisterElasticIpResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerElasticIp(
          this.ops["RegisterElasticIp"].applicator.apply(partialParams)
        );
    }

    invokeRegisterInstance(partialParams: ToOptional<{
      [K in keyof RegisterInstanceRequest & keyof RegisterInstanceRequest & keyof RegisterInstanceRequest & keyof RegisterInstanceRequest & keyof RegisterInstanceRequest & keyof RegisterInstanceRequest]: (RegisterInstanceRequest & RegisterInstanceRequest & RegisterInstanceRequest & RegisterInstanceRequest & RegisterInstanceRequest & RegisterInstanceRequest)[K]
    }>): Request<RegisterInstanceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerInstance(
          this.ops["RegisterInstance"].applicator.apply(partialParams)
        );
    }

    invokeRegisterRdsDbInstance(partialParams: ToOptional<{
      [K in keyof RegisterRdsDbInstanceRequest & keyof RegisterRdsDbInstanceRequest & keyof RegisterRdsDbInstanceRequest & keyof RegisterRdsDbInstanceRequest & keyof RegisterRdsDbInstanceRequest & keyof RegisterRdsDbInstanceRequest]: (RegisterRdsDbInstanceRequest & RegisterRdsDbInstanceRequest & RegisterRdsDbInstanceRequest & RegisterRdsDbInstanceRequest & RegisterRdsDbInstanceRequest & RegisterRdsDbInstanceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerRdsDbInstance(
          this.ops["RegisterRdsDbInstance"].applicator.apply(partialParams)
        );
    }

    invokeRegisterVolume(partialParams: ToOptional<{
      [K in keyof RegisterVolumeRequest & keyof RegisterVolumeRequest & keyof RegisterVolumeRequest & keyof RegisterVolumeRequest & keyof RegisterVolumeRequest & keyof RegisterVolumeRequest]: (RegisterVolumeRequest & RegisterVolumeRequest & RegisterVolumeRequest & RegisterVolumeRequest & RegisterVolumeRequest & RegisterVolumeRequest)[K]
    }>): Request<RegisterVolumeResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerVolume(
          this.ops["RegisterVolume"].applicator.apply(partialParams)
        );
    }

    invokeSetLoadBasedAutoScaling(partialParams: ToOptional<{
      [K in keyof SetLoadBasedAutoScalingRequest & keyof SetLoadBasedAutoScalingRequest & keyof SetLoadBasedAutoScalingRequest & keyof SetLoadBasedAutoScalingRequest & keyof SetLoadBasedAutoScalingRequest & keyof SetLoadBasedAutoScalingRequest]: (SetLoadBasedAutoScalingRequest & SetLoadBasedAutoScalingRequest & SetLoadBasedAutoScalingRequest & SetLoadBasedAutoScalingRequest & SetLoadBasedAutoScalingRequest & SetLoadBasedAutoScalingRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setLoadBasedAutoScaling(
          this.ops["SetLoadBasedAutoScaling"].applicator.apply(partialParams)
        );
    }

    invokeSetPermission(partialParams: ToOptional<{
      [K in keyof SetPermissionRequest & keyof SetPermissionRequest & keyof SetPermissionRequest & keyof SetPermissionRequest & keyof SetPermissionRequest & keyof SetPermissionRequest]: (SetPermissionRequest & SetPermissionRequest & SetPermissionRequest & SetPermissionRequest & SetPermissionRequest & SetPermissionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setPermission(
          this.ops["SetPermission"].applicator.apply(partialParams)
        );
    }

    invokeSetTimeBasedAutoScaling(partialParams: ToOptional<{
      [K in keyof SetTimeBasedAutoScalingRequest & keyof SetTimeBasedAutoScalingRequest & keyof SetTimeBasedAutoScalingRequest & keyof SetTimeBasedAutoScalingRequest & keyof SetTimeBasedAutoScalingRequest & keyof SetTimeBasedAutoScalingRequest]: (SetTimeBasedAutoScalingRequest & SetTimeBasedAutoScalingRequest & SetTimeBasedAutoScalingRequest & SetTimeBasedAutoScalingRequest & SetTimeBasedAutoScalingRequest & SetTimeBasedAutoScalingRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setTimeBasedAutoScaling(
          this.ops["SetTimeBasedAutoScaling"].applicator.apply(partialParams)
        );
    }

    invokeStartInstance(partialParams: ToOptional<{
      [K in keyof StartInstanceRequest & keyof StartInstanceRequest & keyof StartInstanceRequest & keyof StartInstanceRequest & keyof StartInstanceRequest & keyof StartInstanceRequest]: (StartInstanceRequest & StartInstanceRequest & StartInstanceRequest & StartInstanceRequest & StartInstanceRequest & StartInstanceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startInstance(
          this.ops["StartInstance"].applicator.apply(partialParams)
        );
    }

    invokeStartStack(partialParams: ToOptional<{
      [K in keyof StartStackRequest & keyof StartStackRequest & keyof StartStackRequest & keyof StartStackRequest & keyof StartStackRequest & keyof StartStackRequest]: (StartStackRequest & StartStackRequest & StartStackRequest & StartStackRequest & StartStackRequest & StartStackRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startStack(
          this.ops["StartStack"].applicator.apply(partialParams)
        );
    }

    invokeStopInstance(partialParams: ToOptional<{
      [K in keyof StopInstanceRequest & keyof StopInstanceRequest & keyof StopInstanceRequest & keyof StopInstanceRequest & keyof StopInstanceRequest & keyof StopInstanceRequest]: (StopInstanceRequest & StopInstanceRequest & StopInstanceRequest & StopInstanceRequest & StopInstanceRequest & StopInstanceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopInstance(
          this.ops["StopInstance"].applicator.apply(partialParams)
        );
    }

    invokeStopStack(partialParams: ToOptional<{
      [K in keyof StopStackRequest & keyof StopStackRequest & keyof StopStackRequest & keyof StopStackRequest & keyof StopStackRequest & keyof StopStackRequest]: (StopStackRequest & StopStackRequest & StopStackRequest & StopStackRequest & StopStackRequest & StopStackRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopStack(
          this.ops["StopStack"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUnassignInstance(partialParams: ToOptional<{
      [K in keyof UnassignInstanceRequest & keyof UnassignInstanceRequest & keyof UnassignInstanceRequest & keyof UnassignInstanceRequest & keyof UnassignInstanceRequest & keyof UnassignInstanceRequest]: (UnassignInstanceRequest & UnassignInstanceRequest & UnassignInstanceRequest & UnassignInstanceRequest & UnassignInstanceRequest & UnassignInstanceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.unassignInstance(
          this.ops["UnassignInstance"].applicator.apply(partialParams)
        );
    }

    invokeUnassignVolume(partialParams: ToOptional<{
      [K in keyof UnassignVolumeRequest & keyof UnassignVolumeRequest & keyof UnassignVolumeRequest & keyof UnassignVolumeRequest & keyof UnassignVolumeRequest & keyof UnassignVolumeRequest]: (UnassignVolumeRequest & UnassignVolumeRequest & UnassignVolumeRequest & UnassignVolumeRequest & UnassignVolumeRequest & UnassignVolumeRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.unassignVolume(
          this.ops["UnassignVolume"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateApp(partialParams: ToOptional<{
      [K in keyof UpdateAppRequest & keyof UpdateAppRequest & keyof UpdateAppRequest & keyof UpdateAppRequest & keyof UpdateAppRequest & keyof UpdateAppRequest]: (UpdateAppRequest & UpdateAppRequest & UpdateAppRequest & UpdateAppRequest & UpdateAppRequest & UpdateAppRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApp(
          this.ops["UpdateApp"].applicator.apply(partialParams)
        );
    }

    invokeUpdateElasticIp(partialParams: ToOptional<{
      [K in keyof UpdateElasticIpRequest & keyof UpdateElasticIpRequest & keyof UpdateElasticIpRequest & keyof UpdateElasticIpRequest & keyof UpdateElasticIpRequest & keyof UpdateElasticIpRequest]: (UpdateElasticIpRequest & UpdateElasticIpRequest & UpdateElasticIpRequest & UpdateElasticIpRequest & UpdateElasticIpRequest & UpdateElasticIpRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateElasticIp(
          this.ops["UpdateElasticIp"].applicator.apply(partialParams)
        );
    }

    invokeUpdateInstance(partialParams: ToOptional<{
      [K in keyof UpdateInstanceRequest & keyof UpdateInstanceRequest & keyof UpdateInstanceRequest & keyof UpdateInstanceRequest & keyof UpdateInstanceRequest & keyof UpdateInstanceRequest]: (UpdateInstanceRequest & UpdateInstanceRequest & UpdateInstanceRequest & UpdateInstanceRequest & UpdateInstanceRequest & UpdateInstanceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateInstance(
          this.ops["UpdateInstance"].applicator.apply(partialParams)
        );
    }

    invokeUpdateLayer(partialParams: ToOptional<{
      [K in keyof UpdateLayerRequest & keyof UpdateLayerRequest & keyof UpdateLayerRequest & keyof UpdateLayerRequest & keyof UpdateLayerRequest & keyof UpdateLayerRequest]: (UpdateLayerRequest & UpdateLayerRequest & UpdateLayerRequest & UpdateLayerRequest & UpdateLayerRequest & UpdateLayerRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateLayer(
          this.ops["UpdateLayer"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRdsDbInstance(partialParams: ToOptional<{
      [K in keyof UpdateRdsDbInstanceRequest & keyof UpdateRdsDbInstanceRequest & keyof UpdateRdsDbInstanceRequest & keyof UpdateRdsDbInstanceRequest & keyof UpdateRdsDbInstanceRequest & keyof UpdateRdsDbInstanceRequest]: (UpdateRdsDbInstanceRequest & UpdateRdsDbInstanceRequest & UpdateRdsDbInstanceRequest & UpdateRdsDbInstanceRequest & UpdateRdsDbInstanceRequest & UpdateRdsDbInstanceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRdsDbInstance(
          this.ops["UpdateRdsDbInstance"].applicator.apply(partialParams)
        );
    }

    invokeUpdateStack(partialParams: ToOptional<{
      [K in keyof UpdateStackRequest & keyof UpdateStackRequest & keyof UpdateStackRequest & keyof UpdateStackRequest & keyof UpdateStackRequest & keyof Omit<UpdateStackRequest, "StackId">]: (UpdateStackRequest & UpdateStackRequest & UpdateStackRequest & UpdateStackRequest & UpdateStackRequest & Omit<UpdateStackRequest, "StackId">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateStack(
          this.ops["UpdateStack"].applicator.apply(partialParams)
        );
    }

    invokeUpdateUserProfile(partialParams: ToOptional<{
      [K in keyof UpdateUserProfileRequest & keyof UpdateUserProfileRequest & keyof UpdateUserProfileRequest & keyof UpdateUserProfileRequest & keyof UpdateUserProfileRequest & keyof UpdateUserProfileRequest]: (UpdateUserProfileRequest & UpdateUserProfileRequest & UpdateUserProfileRequest & UpdateUserProfileRequest & UpdateUserProfileRequest & UpdateUserProfileRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUserProfile(
          this.ops["UpdateUserProfile"].applicator.apply(partialParams)
        );
    }

    invokeUpdateVolume(partialParams: ToOptional<{
      [K in keyof UpdateVolumeRequest & keyof UpdateVolumeRequest & keyof UpdateVolumeRequest & keyof UpdateVolumeRequest & keyof UpdateVolumeRequest & keyof UpdateVolumeRequest]: (UpdateVolumeRequest & UpdateVolumeRequest & UpdateVolumeRequest & UpdateVolumeRequest & UpdateVolumeRequest & UpdateVolumeRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateVolume(
          this.ops["UpdateVolume"].applicator.apply(partialParams)
        );
    }
}