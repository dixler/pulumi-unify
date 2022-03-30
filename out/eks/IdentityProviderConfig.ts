
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.eks.IdentityProviderConfig {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.eks.IdentityProviderConfig>) {
        super(...args)
        this.client = new awssdk.EKS()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/eks-2017-11-01.normal.json"), this.client)
    }

    invokeAssociateEncryptionConfig(partialParams: ToOptional<{
      [K in keyof AssociateEncryptionConfigRequest & keyof AssociateEncryptionConfigRequest & keyof AssociateEncryptionConfigRequest]: (AssociateEncryptionConfigRequest & AssociateEncryptionConfigRequest & AssociateEncryptionConfigRequest)[K]
    }>): AssociateEncryptionConfigResponse {
        return this.client.associateEncryptionConfig(
            this.ops["AssociateEncryptionConfig"].apply(partialParams)
        );
    }

    invokeAssociateIdentityProviderConfig(partialParams: ToOptional<{
      [K in keyof AssociateIdentityProviderConfigRequest & keyof AssociateIdentityProviderConfigRequest & keyof AssociateIdentityProviderConfigRequest]: (AssociateIdentityProviderConfigRequest & AssociateIdentityProviderConfigRequest & AssociateIdentityProviderConfigRequest)[K]
    }>): AssociateIdentityProviderConfigResponse {
        return this.client.associateIdentityProviderConfig(
            this.ops["AssociateIdentityProviderConfig"].apply(partialParams)
        );
    }

    invokeCreateAddon(partialParams: ToOptional<{
      [K in keyof CreateAddonRequest & keyof Omit<CreateAddonRequest, "clusterName"> & keyof CreateAddonRequest]: (CreateAddonRequest & Omit<CreateAddonRequest, "clusterName"> & CreateAddonRequest)[K]
    }>): CreateAddonResponse {
        return this.client.createAddon(
            this.ops["CreateAddon"].apply(partialParams)
        );
    }

    invokeCreateCluster(partialParams: ToOptional<{
      [K in keyof CreateClusterRequest & keyof Omit<CreateClusterRequest, "name"> & keyof CreateClusterRequest]: (CreateClusterRequest & Omit<CreateClusterRequest, "name"> & CreateClusterRequest)[K]
    }>): CreateClusterResponse {
        return this.client.createCluster(
            this.ops["CreateCluster"].apply(partialParams)
        );
    }

    invokeCreateFargateProfile(partialParams: ToOptional<{
      [K in keyof CreateFargateProfileRequest & keyof CreateFargateProfileRequest & keyof CreateFargateProfileRequest]: (CreateFargateProfileRequest & CreateFargateProfileRequest & CreateFargateProfileRequest)[K]
    }>): CreateFargateProfileResponse {
        return this.client.createFargateProfile(
            this.ops["CreateFargateProfile"].apply(partialParams)
        );
    }

    invokeCreateNodegroup(partialParams: ToOptional<{
      [K in keyof CreateNodegroupRequest & keyof CreateNodegroupRequest & keyof CreateNodegroupRequest]: (CreateNodegroupRequest & CreateNodegroupRequest & CreateNodegroupRequest)[K]
    }>): CreateNodegroupResponse {
        return this.client.createNodegroup(
            this.ops["CreateNodegroup"].apply(partialParams)
        );
    }

    invokeDeleteAddon(partialParams: ToOptional<{
      [K in keyof DeleteAddonRequest & keyof Omit<DeleteAddonRequest, "clusterName"> & keyof DeleteAddonRequest]: (DeleteAddonRequest & Omit<DeleteAddonRequest, "clusterName"> & DeleteAddonRequest)[K]
    }>): DeleteAddonResponse {
        return this.client.deleteAddon(
            this.ops["DeleteAddon"].apply(partialParams)
        );
    }

    invokeDeleteCluster(partialParams: ToOptional<{
      [K in keyof DeleteClusterRequest & keyof DeleteClusterRequest & keyof DeleteClusterRequest]: (DeleteClusterRequest & DeleteClusterRequest & DeleteClusterRequest)[K]
    }>): DeleteClusterResponse {
        return this.client.deleteCluster(
            this.ops["DeleteCluster"].apply(partialParams)
        );
    }

    invokeDeleteFargateProfile(partialParams: ToOptional<{
      [K in keyof DeleteFargateProfileRequest & keyof DeleteFargateProfileRequest & keyof DeleteFargateProfileRequest]: (DeleteFargateProfileRequest & DeleteFargateProfileRequest & DeleteFargateProfileRequest)[K]
    }>): DeleteFargateProfileResponse {
        return this.client.deleteFargateProfile(
            this.ops["DeleteFargateProfile"].apply(partialParams)
        );
    }

    invokeDeleteNodegroup(partialParams: ToOptional<{
      [K in keyof DeleteNodegroupRequest & keyof DeleteNodegroupRequest & keyof DeleteNodegroupRequest]: (DeleteNodegroupRequest & DeleteNodegroupRequest & DeleteNodegroupRequest)[K]
    }>): DeleteNodegroupResponse {
        return this.client.deleteNodegroup(
            this.ops["DeleteNodegroup"].apply(partialParams)
        );
    }

    invokeDeregisterCluster(partialParams: ToOptional<{
      [K in keyof DeregisterClusterRequest & keyof DeregisterClusterRequest & keyof DeregisterClusterRequest]: (DeregisterClusterRequest & DeregisterClusterRequest & DeregisterClusterRequest)[K]
    }>): DeregisterClusterResponse {
        return this.client.deregisterCluster(
            this.ops["DeregisterCluster"].apply(partialParams)
        );
    }

    invokeDescribeAddon(partialParams: ToOptional<{
      [K in keyof DescribeAddonRequest & keyof Omit<DescribeAddonRequest, "clusterName"> & keyof DescribeAddonRequest]: (DescribeAddonRequest & Omit<DescribeAddonRequest, "clusterName"> & DescribeAddonRequest)[K]
    }>): DescribeAddonResponse {
        return this.client.describeAddon(
            this.ops["DescribeAddon"].apply(partialParams)
        );
    }

    invokeDescribeCluster(partialParams: ToOptional<{
      [K in keyof DescribeClusterRequest & keyof DescribeClusterRequest & keyof DescribeClusterRequest]: (DescribeClusterRequest & DescribeClusterRequest & DescribeClusterRequest)[K]
    }>): DescribeClusterResponse {
        return this.client.describeCluster(
            this.ops["DescribeCluster"].apply(partialParams)
        );
    }

    invokeDescribeFargateProfile(partialParams: ToOptional<{
      [K in keyof DescribeFargateProfileRequest & keyof DescribeFargateProfileRequest & keyof DescribeFargateProfileRequest]: (DescribeFargateProfileRequest & DescribeFargateProfileRequest & DescribeFargateProfileRequest)[K]
    }>): DescribeFargateProfileResponse {
        return this.client.describeFargateProfile(
            this.ops["DescribeFargateProfile"].apply(partialParams)
        );
    }

    invokeDescribeIdentityProviderConfig(partialParams: ToOptional<{
      [K in keyof DescribeIdentityProviderConfigRequest & keyof DescribeIdentityProviderConfigRequest & keyof DescribeIdentityProviderConfigRequest]: (DescribeIdentityProviderConfigRequest & DescribeIdentityProviderConfigRequest & DescribeIdentityProviderConfigRequest)[K]
    }>): DescribeIdentityProviderConfigResponse {
        return this.client.describeIdentityProviderConfig(
            this.ops["DescribeIdentityProviderConfig"].apply(partialParams)
        );
    }

    invokeDescribeNodegroup(partialParams: ToOptional<{
      [K in keyof DescribeNodegroupRequest & keyof DescribeNodegroupRequest & keyof DescribeNodegroupRequest]: (DescribeNodegroupRequest & DescribeNodegroupRequest & DescribeNodegroupRequest)[K]
    }>): DescribeNodegroupResponse {
        return this.client.describeNodegroup(
            this.ops["DescribeNodegroup"].apply(partialParams)
        );
    }

    invokeDescribeUpdate(partialParams: ToOptional<{
      [K in keyof DescribeUpdateRequest & keyof DescribeUpdateRequest & keyof DescribeUpdateRequest]: (DescribeUpdateRequest & DescribeUpdateRequest & DescribeUpdateRequest)[K]
    }>): DescribeUpdateResponse {
        return this.client.describeUpdate(
            this.ops["DescribeUpdate"].apply(partialParams)
        );
    }

    invokeDisassociateIdentityProviderConfig(partialParams: ToOptional<{
      [K in keyof DisassociateIdentityProviderConfigRequest & keyof DisassociateIdentityProviderConfigRequest & keyof DisassociateIdentityProviderConfigRequest]: (DisassociateIdentityProviderConfigRequest & DisassociateIdentityProviderConfigRequest & DisassociateIdentityProviderConfigRequest)[K]
    }>): DisassociateIdentityProviderConfigResponse {
        return this.client.disassociateIdentityProviderConfig(
            this.ops["DisassociateIdentityProviderConfig"].apply(partialParams)
        );
    }

    invokeListAddons(partialParams: ToOptional<{
      [K in keyof ListAddonsRequest & keyof Omit<ListAddonsRequest, "clusterName"> & keyof ListAddonsRequest]: (ListAddonsRequest & Omit<ListAddonsRequest, "clusterName"> & ListAddonsRequest)[K]
    }>): ListAddonsResponse {
        return this.client.listAddons(
            this.ops["ListAddons"].apply(partialParams)
        );
    }

    invokeListFargateProfiles(partialParams: ToOptional<{
      [K in keyof ListFargateProfilesRequest & keyof ListFargateProfilesRequest & keyof ListFargateProfilesRequest]: (ListFargateProfilesRequest & ListFargateProfilesRequest & ListFargateProfilesRequest)[K]
    }>): ListFargateProfilesResponse {
        return this.client.listFargateProfiles(
            this.ops["ListFargateProfiles"].apply(partialParams)
        );
    }

    invokeListIdentityProviderConfigs(partialParams: ToOptional<{
      [K in keyof ListIdentityProviderConfigsRequest & keyof ListIdentityProviderConfigsRequest & keyof ListIdentityProviderConfigsRequest]: (ListIdentityProviderConfigsRequest & ListIdentityProviderConfigsRequest & ListIdentityProviderConfigsRequest)[K]
    }>): ListIdentityProviderConfigsResponse {
        return this.client.listIdentityProviderConfigs(
            this.ops["ListIdentityProviderConfigs"].apply(partialParams)
        );
    }

    invokeListNodegroups(partialParams: ToOptional<{
      [K in keyof ListNodegroupsRequest & keyof ListNodegroupsRequest & keyof ListNodegroupsRequest]: (ListNodegroupsRequest & ListNodegroupsRequest & ListNodegroupsRequest)[K]
    }>): ListNodegroupsResponse {
        return this.client.listNodegroups(
            this.ops["ListNodegroups"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeListUpdates(partialParams: ToOptional<{
      [K in keyof ListUpdatesRequest & keyof ListUpdatesRequest & keyof ListUpdatesRequest]: (ListUpdatesRequest & ListUpdatesRequest & ListUpdatesRequest)[K]
    }>): ListUpdatesResponse {
        return this.client.listUpdates(
            this.ops["ListUpdates"].apply(partialParams)
        );
    }

    invokeRegisterCluster(partialParams: ToOptional<{
      [K in keyof RegisterClusterRequest & keyof Omit<RegisterClusterRequest, "name"> & keyof RegisterClusterRequest]: (RegisterClusterRequest & Omit<RegisterClusterRequest, "name"> & RegisterClusterRequest)[K]
    }>): RegisterClusterResponse {
        return this.client.registerCluster(
            this.ops["RegisterCluster"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateAddon(partialParams: ToOptional<{
      [K in keyof UpdateAddonRequest & keyof Omit<UpdateAddonRequest, "clusterName"> & keyof UpdateAddonRequest]: (UpdateAddonRequest & Omit<UpdateAddonRequest, "clusterName"> & UpdateAddonRequest)[K]
    }>): UpdateAddonResponse {
        return this.client.updateAddon(
            this.ops["UpdateAddon"].apply(partialParams)
        );
    }

    invokeUpdateClusterConfig(partialParams: ToOptional<{
      [K in keyof UpdateClusterConfigRequest & keyof UpdateClusterConfigRequest & keyof UpdateClusterConfigRequest]: (UpdateClusterConfigRequest & UpdateClusterConfigRequest & UpdateClusterConfigRequest)[K]
    }>): UpdateClusterConfigResponse {
        return this.client.updateClusterConfig(
            this.ops["UpdateClusterConfig"].apply(partialParams)
        );
    }

    invokeUpdateClusterVersion(partialParams: ToOptional<{
      [K in keyof UpdateClusterVersionRequest & keyof UpdateClusterVersionRequest & keyof UpdateClusterVersionRequest]: (UpdateClusterVersionRequest & UpdateClusterVersionRequest & UpdateClusterVersionRequest)[K]
    }>): UpdateClusterVersionResponse {
        return this.client.updateClusterVersion(
            this.ops["UpdateClusterVersion"].apply(partialParams)
        );
    }

    invokeUpdateNodegroupConfig(partialParams: ToOptional<{
      [K in keyof UpdateNodegroupConfigRequest & keyof Omit<UpdateNodegroupConfigRequest, "clusterName"> & keyof UpdateNodegroupConfigRequest]: (UpdateNodegroupConfigRequest & Omit<UpdateNodegroupConfigRequest, "clusterName"> & UpdateNodegroupConfigRequest)[K]
    }>): UpdateNodegroupConfigResponse {
        return this.client.updateNodegroupConfig(
            this.ops["UpdateNodegroupConfig"].apply(partialParams)
        );
    }

    invokeUpdateNodegroupVersion(partialParams: ToOptional<{
      [K in keyof UpdateNodegroupVersionRequest & keyof Omit<UpdateNodegroupVersionRequest, "clusterName"> & keyof UpdateNodegroupVersionRequest]: (UpdateNodegroupVersionRequest & Omit<UpdateNodegroupVersionRequest, "clusterName"> & UpdateNodegroupVersionRequest)[K]
    }>): UpdateNodegroupVersionResponse {
        return this.client.updateNodegroupVersion(
            this.ops["UpdateNodegroupVersion"].apply(partialParams)
        );
    }
}