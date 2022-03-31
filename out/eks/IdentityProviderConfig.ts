
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AssociateEncryptionConfigRequest,
    AssociateIdentityProviderConfigRequest,
    CreateAddonRequest,
    CreateClusterRequest,
    CreateFargateProfileRequest,
    CreateNodegroupRequest,
    DeleteAddonRequest,
    DeleteClusterRequest,
    DeleteFargateProfileRequest,
    DeleteNodegroupRequest,
    DeregisterClusterRequest,
    DescribeAddonRequest,
    DescribeClusterRequest,
    DescribeFargateProfileRequest,
    DescribeIdentityProviderConfigRequest,
    DescribeNodegroupRequest,
    DescribeUpdateRequest,
    DisassociateIdentityProviderConfigRequest,
    ListAddonsRequest,
    ListFargateProfilesRequest,
    ListIdentityProviderConfigsRequest,
    ListNodegroupsRequest,
    ListTagsForResourceRequest,
    ListUpdatesRequest,
    RegisterClusterRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateAddonRequest,
    UpdateClusterConfigRequest,
    UpdateClusterVersionRequest,
    UpdateNodegroupConfigRequest,
    UpdateNodegroupVersionRequest,
    AssociateEncryptionConfigResponse,
    AssociateIdentityProviderConfigResponse,
    CreateAddonResponse,
    CreateClusterResponse,
    CreateFargateProfileResponse,
    CreateNodegroupResponse,
    DeleteAddonResponse,
    DeleteClusterResponse,
    DeleteFargateProfileResponse,
    DeleteNodegroupResponse,
    DeregisterClusterResponse,
    DescribeAddonResponse,
    DescribeClusterResponse,
    DescribeFargateProfileResponse,
    DescribeIdentityProviderConfigResponse,
    DescribeNodegroupResponse,
    DescribeUpdateResponse,
    DisassociateIdentityProviderConfigResponse,
    ListAddonsResponse,
    ListFargateProfilesResponse,
    ListIdentityProviderConfigsResponse,
    ListNodegroupsResponse,
    ListTagsForResourceResponse,
    ListUpdatesResponse,
    RegisterClusterResponse,
    TagResourceResponse,
    UntagResourceResponse,
    UpdateAddonResponse,
    UpdateClusterConfigResponse,
    UpdateClusterVersionResponse,
    UpdateNodegroupConfigResponse,
    UpdateNodegroupVersionResponse
} from "aws-sdk/clients/eks";
const schema = require("../apis/eks-2017-11-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.eks.IdentityProviderConfig {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.eks.IdentityProviderConfig>) {
        super(...args)
        this.client = new awssdk.EKS()
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

    invokeAssociateEncryptionConfig(partialParams: ToOptional<{
      [K in keyof AssociateEncryptionConfigRequest & keyof AssociateEncryptionConfigRequest & keyof AssociateEncryptionConfigRequest]: (AssociateEncryptionConfigRequest & AssociateEncryptionConfigRequest & AssociateEncryptionConfigRequest)[K]
    }>): Request<AssociateEncryptionConfigResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateEncryptionConfig(
          this.ops["AssociateEncryptionConfig"].applicator.apply(partialParams)
        );
    }

    invokeAssociateIdentityProviderConfig(partialParams: ToOptional<{
      [K in keyof AssociateIdentityProviderConfigRequest & keyof AssociateIdentityProviderConfigRequest & keyof AssociateIdentityProviderConfigRequest]: (AssociateIdentityProviderConfigRequest & AssociateIdentityProviderConfigRequest & AssociateIdentityProviderConfigRequest)[K]
    }>): Request<AssociateIdentityProviderConfigResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateIdentityProviderConfig(
          this.ops["AssociateIdentityProviderConfig"].applicator.apply(partialParams)
        );
    }

    invokeCreateAddon(partialParams: ToOptional<{
      [K in keyof CreateAddonRequest & keyof Omit<CreateAddonRequest, "clusterName"> & keyof CreateAddonRequest]: (CreateAddonRequest & Omit<CreateAddonRequest, "clusterName"> & CreateAddonRequest)[K]
    }>): Request<CreateAddonResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAddon(
          this.ops["CreateAddon"].applicator.apply(partialParams)
        );
    }

    invokeCreateCluster(partialParams: ToOptional<{
      [K in keyof CreateClusterRequest & keyof Omit<CreateClusterRequest, "name"> & keyof CreateClusterRequest]: (CreateClusterRequest & Omit<CreateClusterRequest, "name"> & CreateClusterRequest)[K]
    }>): Request<CreateClusterResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCluster(
          this.ops["CreateCluster"].applicator.apply(partialParams)
        );
    }

    invokeCreateFargateProfile(partialParams: ToOptional<{
      [K in keyof CreateFargateProfileRequest & keyof CreateFargateProfileRequest & keyof CreateFargateProfileRequest]: (CreateFargateProfileRequest & CreateFargateProfileRequest & CreateFargateProfileRequest)[K]
    }>): Request<CreateFargateProfileResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFargateProfile(
          this.ops["CreateFargateProfile"].applicator.apply(partialParams)
        );
    }

    invokeCreateNodegroup(partialParams: ToOptional<{
      [K in keyof CreateNodegroupRequest & keyof CreateNodegroupRequest & keyof CreateNodegroupRequest]: (CreateNodegroupRequest & CreateNodegroupRequest & CreateNodegroupRequest)[K]
    }>): Request<CreateNodegroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createNodegroup(
          this.ops["CreateNodegroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAddon(partialParams: ToOptional<{
      [K in keyof DeleteAddonRequest & keyof Omit<DeleteAddonRequest, "clusterName"> & keyof DeleteAddonRequest]: (DeleteAddonRequest & Omit<DeleteAddonRequest, "clusterName"> & DeleteAddonRequest)[K]
    }>): Request<DeleteAddonResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAddon(
          this.ops["DeleteAddon"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCluster(partialParams: ToOptional<{
      [K in keyof DeleteClusterRequest & keyof DeleteClusterRequest & keyof DeleteClusterRequest]: (DeleteClusterRequest & DeleteClusterRequest & DeleteClusterRequest)[K]
    }>): Request<DeleteClusterResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCluster(
          this.ops["DeleteCluster"].applicator.apply(partialParams)
        );
    }

    invokeDeleteFargateProfile(partialParams: ToOptional<{
      [K in keyof DeleteFargateProfileRequest & keyof DeleteFargateProfileRequest & keyof DeleteFargateProfileRequest]: (DeleteFargateProfileRequest & DeleteFargateProfileRequest & DeleteFargateProfileRequest)[K]
    }>): Request<DeleteFargateProfileResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFargateProfile(
          this.ops["DeleteFargateProfile"].applicator.apply(partialParams)
        );
    }

    invokeDeleteNodegroup(partialParams: ToOptional<{
      [K in keyof DeleteNodegroupRequest & keyof DeleteNodegroupRequest & keyof DeleteNodegroupRequest]: (DeleteNodegroupRequest & DeleteNodegroupRequest & DeleteNodegroupRequest)[K]
    }>): Request<DeleteNodegroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteNodegroup(
          this.ops["DeleteNodegroup"].applicator.apply(partialParams)
        );
    }

    invokeDeregisterCluster(partialParams: ToOptional<{
      [K in keyof DeregisterClusterRequest & keyof DeregisterClusterRequest & keyof DeregisterClusterRequest]: (DeregisterClusterRequest & DeregisterClusterRequest & DeregisterClusterRequest)[K]
    }>): Request<DeregisterClusterResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterCluster(
          this.ops["DeregisterCluster"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAddon(partialParams: ToOptional<{
      [K in keyof DescribeAddonRequest & keyof Omit<DescribeAddonRequest, "clusterName"> & keyof DescribeAddonRequest]: (DescribeAddonRequest & Omit<DescribeAddonRequest, "clusterName"> & DescribeAddonRequest)[K]
    }>): Request<DescribeAddonResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAddon(
          this.ops["DescribeAddon"].applicator.apply(partialParams)
        );
    }

    invokeDescribeCluster(partialParams: ToOptional<{
      [K in keyof DescribeClusterRequest & keyof DescribeClusterRequest & keyof DescribeClusterRequest]: (DescribeClusterRequest & DescribeClusterRequest & DescribeClusterRequest)[K]
    }>): Request<DescribeClusterResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCluster(
          this.ops["DescribeCluster"].applicator.apply(partialParams)
        );
    }

    invokeDescribeFargateProfile(partialParams: ToOptional<{
      [K in keyof DescribeFargateProfileRequest & keyof DescribeFargateProfileRequest & keyof DescribeFargateProfileRequest]: (DescribeFargateProfileRequest & DescribeFargateProfileRequest & DescribeFargateProfileRequest)[K]
    }>): Request<DescribeFargateProfileResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFargateProfile(
          this.ops["DescribeFargateProfile"].applicator.apply(partialParams)
        );
    }

    invokeDescribeIdentityProviderConfig(partialParams: ToOptional<{
      [K in keyof DescribeIdentityProviderConfigRequest & keyof DescribeIdentityProviderConfigRequest & keyof DescribeIdentityProviderConfigRequest]: (DescribeIdentityProviderConfigRequest & DescribeIdentityProviderConfigRequest & DescribeIdentityProviderConfigRequest)[K]
    }>): Request<DescribeIdentityProviderConfigResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeIdentityProviderConfig(
          this.ops["DescribeIdentityProviderConfig"].applicator.apply(partialParams)
        );
    }

    invokeDescribeNodegroup(partialParams: ToOptional<{
      [K in keyof DescribeNodegroupRequest & keyof DescribeNodegroupRequest & keyof DescribeNodegroupRequest]: (DescribeNodegroupRequest & DescribeNodegroupRequest & DescribeNodegroupRequest)[K]
    }>): Request<DescribeNodegroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeNodegroup(
          this.ops["DescribeNodegroup"].applicator.apply(partialParams)
        );
    }

    invokeDescribeUpdate(partialParams: ToOptional<{
      [K in keyof DescribeUpdateRequest & keyof DescribeUpdateRequest & keyof DescribeUpdateRequest]: (DescribeUpdateRequest & DescribeUpdateRequest & DescribeUpdateRequest)[K]
    }>): Request<DescribeUpdateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeUpdate(
          this.ops["DescribeUpdate"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateIdentityProviderConfig(partialParams: ToOptional<{
      [K in keyof DisassociateIdentityProviderConfigRequest & keyof DisassociateIdentityProviderConfigRequest & keyof DisassociateIdentityProviderConfigRequest]: (DisassociateIdentityProviderConfigRequest & DisassociateIdentityProviderConfigRequest & DisassociateIdentityProviderConfigRequest)[K]
    }>): Request<DisassociateIdentityProviderConfigResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateIdentityProviderConfig(
          this.ops["DisassociateIdentityProviderConfig"].applicator.apply(partialParams)
        );
    }

    invokeListAddons(partialParams: ToOptional<{
      [K in keyof ListAddonsRequest & keyof Omit<ListAddonsRequest, "clusterName"> & keyof ListAddonsRequest]: (ListAddonsRequest & Omit<ListAddonsRequest, "clusterName"> & ListAddonsRequest)[K]
    }>): Request<ListAddonsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAddons(
          this.ops["ListAddons"].applicator.apply(partialParams)
        );
    }

    invokeListFargateProfiles(partialParams: ToOptional<{
      [K in keyof ListFargateProfilesRequest & keyof ListFargateProfilesRequest & keyof ListFargateProfilesRequest]: (ListFargateProfilesRequest & ListFargateProfilesRequest & ListFargateProfilesRequest)[K]
    }>): Request<ListFargateProfilesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listFargateProfiles(
          this.ops["ListFargateProfiles"].applicator.apply(partialParams)
        );
    }

    invokeListIdentityProviderConfigs(partialParams: ToOptional<{
      [K in keyof ListIdentityProviderConfigsRequest & keyof ListIdentityProviderConfigsRequest & keyof ListIdentityProviderConfigsRequest]: (ListIdentityProviderConfigsRequest & ListIdentityProviderConfigsRequest & ListIdentityProviderConfigsRequest)[K]
    }>): Request<ListIdentityProviderConfigsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listIdentityProviderConfigs(
          this.ops["ListIdentityProviderConfigs"].applicator.apply(partialParams)
        );
    }

    invokeListNodegroups(partialParams: ToOptional<{
      [K in keyof ListNodegroupsRequest & keyof ListNodegroupsRequest & keyof ListNodegroupsRequest]: (ListNodegroupsRequest & ListNodegroupsRequest & ListNodegroupsRequest)[K]
    }>): Request<ListNodegroupsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listNodegroups(
          this.ops["ListNodegroups"].applicator.apply(partialParams)
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

    invokeListUpdates(partialParams: ToOptional<{
      [K in keyof ListUpdatesRequest & keyof ListUpdatesRequest & keyof ListUpdatesRequest]: (ListUpdatesRequest & ListUpdatesRequest & ListUpdatesRequest)[K]
    }>): Request<ListUpdatesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listUpdates(
          this.ops["ListUpdates"].applicator.apply(partialParams)
        );
    }

    invokeRegisterCluster(partialParams: ToOptional<{
      [K in keyof RegisterClusterRequest & keyof Omit<RegisterClusterRequest, "name"> & keyof RegisterClusterRequest]: (RegisterClusterRequest & Omit<RegisterClusterRequest, "name"> & RegisterClusterRequest)[K]
    }>): Request<RegisterClusterResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerCluster(
          this.ops["RegisterCluster"].applicator.apply(partialParams)
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

    invokeUpdateAddon(partialParams: ToOptional<{
      [K in keyof UpdateAddonRequest & keyof Omit<UpdateAddonRequest, "clusterName"> & keyof UpdateAddonRequest]: (UpdateAddonRequest & Omit<UpdateAddonRequest, "clusterName"> & UpdateAddonRequest)[K]
    }>): Request<UpdateAddonResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAddon(
          this.ops["UpdateAddon"].applicator.apply(partialParams)
        );
    }

    invokeUpdateClusterConfig(partialParams: ToOptional<{
      [K in keyof UpdateClusterConfigRequest & keyof UpdateClusterConfigRequest & keyof UpdateClusterConfigRequest]: (UpdateClusterConfigRequest & UpdateClusterConfigRequest & UpdateClusterConfigRequest)[K]
    }>): Request<UpdateClusterConfigResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateClusterConfig(
          this.ops["UpdateClusterConfig"].applicator.apply(partialParams)
        );
    }

    invokeUpdateClusterVersion(partialParams: ToOptional<{
      [K in keyof UpdateClusterVersionRequest & keyof UpdateClusterVersionRequest & keyof UpdateClusterVersionRequest]: (UpdateClusterVersionRequest & UpdateClusterVersionRequest & UpdateClusterVersionRequest)[K]
    }>): Request<UpdateClusterVersionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateClusterVersion(
          this.ops["UpdateClusterVersion"].applicator.apply(partialParams)
        );
    }

    invokeUpdateNodegroupConfig(partialParams: ToOptional<{
      [K in keyof UpdateNodegroupConfigRequest & keyof Omit<UpdateNodegroupConfigRequest, "clusterName"> & keyof UpdateNodegroupConfigRequest]: (UpdateNodegroupConfigRequest & Omit<UpdateNodegroupConfigRequest, "clusterName"> & UpdateNodegroupConfigRequest)[K]
    }>): Request<UpdateNodegroupConfigResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateNodegroupConfig(
          this.ops["UpdateNodegroupConfig"].applicator.apply(partialParams)
        );
    }

    invokeUpdateNodegroupVersion(partialParams: ToOptional<{
      [K in keyof UpdateNodegroupVersionRequest & keyof Omit<UpdateNodegroupVersionRequest, "clusterName"> & keyof UpdateNodegroupVersionRequest]: (UpdateNodegroupVersionRequest & Omit<UpdateNodegroupVersionRequest, "clusterName"> & UpdateNodegroupVersionRequest)[K]
    }>): Request<UpdateNodegroupVersionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateNodegroupVersion(
          this.ops["UpdateNodegroupVersion"].applicator.apply(partialParams)
        );
    }
}