
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
    DescribeAddonVersionsRequest,
    DescribeClusterRequest,
    DescribeFargateProfileRequest,
    DescribeIdentityProviderConfigRequest,
    DescribeNodegroupRequest,
    DescribeUpdateRequest,
    DisassociateIdentityProviderConfigRequest,
    ListAddonsRequest,
    ListClustersRequest,
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
    DescribeAddonVersionsResponse,
    DescribeClusterResponse,
    DescribeFargateProfileResponse,
    DescribeIdentityProviderConfigResponse,
    DescribeNodegroupResponse,
    DescribeUpdateResponse,
    DisassociateIdentityProviderConfigResponse,
    ListAddonsResponse,
    ListClustersResponse,
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
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.eks.IdentityProviderConfig>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.EKS()
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

    invokeAssociateEncryptionConfig(partialParams: ToOptional<{
      [K in keyof AssociateEncryptionConfigRequest]: (AssociateEncryptionConfigRequest)[K]
    }>): Request<AssociateEncryptionConfigResponse, AWSError> {
        this.boot();
        return this.client.associateEncryptionConfig(
          this.ops["AssociateEncryptionConfig"].apply(partialParams)
        );
    }

    invokeAssociateIdentityProviderConfig(partialParams: ToOptional<{
      [K in keyof AssociateIdentityProviderConfigRequest]: (AssociateIdentityProviderConfigRequest)[K]
    }>): Request<AssociateIdentityProviderConfigResponse, AWSError> {
        this.boot();
        return this.client.associateIdentityProviderConfig(
          this.ops["AssociateIdentityProviderConfig"].apply(partialParams)
        );
    }

    invokeCreateAddon(partialParams: ToOptional<{
      [K in keyof CreateAddonRequest]: (CreateAddonRequest)[K]
    }>): Request<CreateAddonResponse, AWSError> {
        this.boot();
        return this.client.createAddon(
          this.ops["CreateAddon"].apply(partialParams)
        );
    }

    invokeCreateCluster(partialParams: ToOptional<{
      [K in keyof CreateClusterRequest]: (CreateClusterRequest)[K]
    }>): Request<CreateClusterResponse, AWSError> {
        this.boot();
        return this.client.createCluster(
          this.ops["CreateCluster"].apply(partialParams)
        );
    }

    invokeCreateFargateProfile(partialParams: ToOptional<{
      [K in keyof CreateFargateProfileRequest]: (CreateFargateProfileRequest)[K]
    }>): Request<CreateFargateProfileResponse, AWSError> {
        this.boot();
        return this.client.createFargateProfile(
          this.ops["CreateFargateProfile"].apply(partialParams)
        );
    }

    invokeCreateNodegroup(partialParams: ToOptional<{
      [K in keyof CreateNodegroupRequest]: (CreateNodegroupRequest)[K]
    }>): Request<CreateNodegroupResponse, AWSError> {
        this.boot();
        return this.client.createNodegroup(
          this.ops["CreateNodegroup"].apply(partialParams)
        );
    }

    invokeDeleteAddon(partialParams: ToOptional<{
      [K in keyof DeleteAddonRequest]: (DeleteAddonRequest)[K]
    }>): Request<DeleteAddonResponse, AWSError> {
        this.boot();
        return this.client.deleteAddon(
          this.ops["DeleteAddon"].apply(partialParams)
        );
    }

    invokeDeleteCluster(partialParams: ToOptional<{
      [K in keyof DeleteClusterRequest]: (DeleteClusterRequest)[K]
    }>): Request<DeleteClusterResponse, AWSError> {
        this.boot();
        return this.client.deleteCluster(
          this.ops["DeleteCluster"].apply(partialParams)
        );
    }

    invokeDeleteFargateProfile(partialParams: ToOptional<{
      [K in keyof DeleteFargateProfileRequest]: (DeleteFargateProfileRequest)[K]
    }>): Request<DeleteFargateProfileResponse, AWSError> {
        this.boot();
        return this.client.deleteFargateProfile(
          this.ops["DeleteFargateProfile"].apply(partialParams)
        );
    }

    invokeDeleteNodegroup(partialParams: ToOptional<{
      [K in keyof DeleteNodegroupRequest]: (DeleteNodegroupRequest)[K]
    }>): Request<DeleteNodegroupResponse, AWSError> {
        this.boot();
        return this.client.deleteNodegroup(
          this.ops["DeleteNodegroup"].apply(partialParams)
        );
    }

    invokeDeregisterCluster(partialParams: ToOptional<{
      [K in keyof DeregisterClusterRequest]: (DeregisterClusterRequest)[K]
    }>): Request<DeregisterClusterResponse, AWSError> {
        this.boot();
        return this.client.deregisterCluster(
          this.ops["DeregisterCluster"].apply(partialParams)
        );
    }

    invokeDescribeAddon(partialParams: ToOptional<{
      [K in keyof DescribeAddonRequest]: (DescribeAddonRequest)[K]
    }>): Request<DescribeAddonResponse, AWSError> {
        this.boot();
        return this.client.describeAddon(
          this.ops["DescribeAddon"].apply(partialParams)
        );
    }

    invokeDescribeAddonVersions(partialParams: ToOptional<{
      [K in keyof DescribeAddonVersionsRequest]: (DescribeAddonVersionsRequest)[K]
    }>): Request<DescribeAddonVersionsResponse, AWSError> {
        this.boot();
        return this.client.describeAddonVersions(
          this.ops["DescribeAddonVersions"].apply(partialParams)
        );
    }

    invokeDescribeCluster(partialParams: ToOptional<{
      [K in keyof DescribeClusterRequest]: (DescribeClusterRequest)[K]
    }>): Request<DescribeClusterResponse, AWSError> {
        this.boot();
        return this.client.describeCluster(
          this.ops["DescribeCluster"].apply(partialParams)
        );
    }

    invokeDescribeFargateProfile(partialParams: ToOptional<{
      [K in keyof DescribeFargateProfileRequest]: (DescribeFargateProfileRequest)[K]
    }>): Request<DescribeFargateProfileResponse, AWSError> {
        this.boot();
        return this.client.describeFargateProfile(
          this.ops["DescribeFargateProfile"].apply(partialParams)
        );
    }

    invokeDescribeIdentityProviderConfig(partialParams: ToOptional<{
      [K in keyof DescribeIdentityProviderConfigRequest]: (DescribeIdentityProviderConfigRequest)[K]
    }>): Request<DescribeIdentityProviderConfigResponse, AWSError> {
        this.boot();
        return this.client.describeIdentityProviderConfig(
          this.ops["DescribeIdentityProviderConfig"].apply(partialParams)
        );
    }

    invokeDescribeNodegroup(partialParams: ToOptional<{
      [K in keyof DescribeNodegroupRequest]: (DescribeNodegroupRequest)[K]
    }>): Request<DescribeNodegroupResponse, AWSError> {
        this.boot();
        return this.client.describeNodegroup(
          this.ops["DescribeNodegroup"].apply(partialParams)
        );
    }

    invokeDescribeUpdate(partialParams: ToOptional<{
      [K in keyof DescribeUpdateRequest]: (DescribeUpdateRequest)[K]
    }>): Request<DescribeUpdateResponse, AWSError> {
        this.boot();
        return this.client.describeUpdate(
          this.ops["DescribeUpdate"].apply(partialParams)
        );
    }

    invokeDisassociateIdentityProviderConfig(partialParams: ToOptional<{
      [K in keyof DisassociateIdentityProviderConfigRequest]: (DisassociateIdentityProviderConfigRequest)[K]
    }>): Request<DisassociateIdentityProviderConfigResponse, AWSError> {
        this.boot();
        return this.client.disassociateIdentityProviderConfig(
          this.ops["DisassociateIdentityProviderConfig"].apply(partialParams)
        );
    }

    invokeListAddons(partialParams: ToOptional<{
      [K in keyof ListAddonsRequest]: (ListAddonsRequest)[K]
    }>): Request<ListAddonsResponse, AWSError> {
        this.boot();
        return this.client.listAddons(
          this.ops["ListAddons"].apply(partialParams)
        );
    }

    invokeListClusters(partialParams: ToOptional<{
      [K in keyof ListClustersRequest]: (ListClustersRequest)[K]
    }>): Request<ListClustersResponse, AWSError> {
        this.boot();
        return this.client.listClusters(
          this.ops["ListClusters"].apply(partialParams)
        );
    }

    invokeListFargateProfiles(partialParams: ToOptional<{
      [K in keyof ListFargateProfilesRequest]: (ListFargateProfilesRequest)[K]
    }>): Request<ListFargateProfilesResponse, AWSError> {
        this.boot();
        return this.client.listFargateProfiles(
          this.ops["ListFargateProfiles"].apply(partialParams)
        );
    }

    invokeListIdentityProviderConfigs(partialParams: ToOptional<{
      [K in keyof ListIdentityProviderConfigsRequest]: (ListIdentityProviderConfigsRequest)[K]
    }>): Request<ListIdentityProviderConfigsResponse, AWSError> {
        this.boot();
        return this.client.listIdentityProviderConfigs(
          this.ops["ListIdentityProviderConfigs"].apply(partialParams)
        );
    }

    invokeListNodegroups(partialParams: ToOptional<{
      [K in keyof ListNodegroupsRequest]: (ListNodegroupsRequest)[K]
    }>): Request<ListNodegroupsResponse, AWSError> {
        this.boot();
        return this.client.listNodegroups(
          this.ops["ListNodegroups"].apply(partialParams)
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

    invokeListUpdates(partialParams: ToOptional<{
      [K in keyof ListUpdatesRequest]: (ListUpdatesRequest)[K]
    }>): Request<ListUpdatesResponse, AWSError> {
        this.boot();
        return this.client.listUpdates(
          this.ops["ListUpdates"].apply(partialParams)
        );
    }

    invokeRegisterCluster(partialParams: ToOptional<{
      [K in keyof RegisterClusterRequest]: (RegisterClusterRequest)[K]
    }>): Request<RegisterClusterResponse, AWSError> {
        this.boot();
        return this.client.registerCluster(
          this.ops["RegisterCluster"].apply(partialParams)
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

    invokeUpdateAddon(partialParams: ToOptional<{
      [K in keyof UpdateAddonRequest]: (UpdateAddonRequest)[K]
    }>): Request<UpdateAddonResponse, AWSError> {
        this.boot();
        return this.client.updateAddon(
          this.ops["UpdateAddon"].apply(partialParams)
        );
    }

    invokeUpdateClusterConfig(partialParams: ToOptional<{
      [K in keyof UpdateClusterConfigRequest]: (UpdateClusterConfigRequest)[K]
    }>): Request<UpdateClusterConfigResponse, AWSError> {
        this.boot();
        return this.client.updateClusterConfig(
          this.ops["UpdateClusterConfig"].apply(partialParams)
        );
    }

    invokeUpdateClusterVersion(partialParams: ToOptional<{
      [K in keyof UpdateClusterVersionRequest]: (UpdateClusterVersionRequest)[K]
    }>): Request<UpdateClusterVersionResponse, AWSError> {
        this.boot();
        return this.client.updateClusterVersion(
          this.ops["UpdateClusterVersion"].apply(partialParams)
        );
    }

    invokeUpdateNodegroupConfig(partialParams: ToOptional<{
      [K in keyof UpdateNodegroupConfigRequest]: (UpdateNodegroupConfigRequest)[K]
    }>): Request<UpdateNodegroupConfigResponse, AWSError> {
        this.boot();
        return this.client.updateNodegroupConfig(
          this.ops["UpdateNodegroupConfig"].apply(partialParams)
        );
    }

    invokeUpdateNodegroupVersion(partialParams: ToOptional<{
      [K in keyof UpdateNodegroupVersionRequest]: (UpdateNodegroupVersionRequest)[K]
    }>): Request<UpdateNodegroupVersionResponse, AWSError> {
        this.boot();
        return this.client.updateNodegroupVersion(
          this.ops["UpdateNodegroupVersion"].apply(partialParams)
        );
    }
}