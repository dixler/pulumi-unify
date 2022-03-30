
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    AssociateExternalConnectionRequest,
    CopyPackageVersionsRequest,
    CreateDomainRequest,
    CreateRepositoryRequest,
    DeleteDomainRequest,
    DeleteDomainPermissionsPolicyRequest,
    DeletePackageVersionsRequest,
    DeleteRepositoryRequest,
    DeleteRepositoryPermissionsPolicyRequest,
    DescribeDomainRequest,
    DescribePackageVersionRequest,
    DescribeRepositoryRequest,
    DisassociateExternalConnectionRequest,
    DisposePackageVersionsRequest,
    GetAuthorizationTokenRequest,
    GetDomainPermissionsPolicyRequest,
    GetPackageVersionAssetRequest,
    GetPackageVersionReadmeRequest,
    GetRepositoryEndpointRequest,
    GetRepositoryPermissionsPolicyRequest,
    ListPackageVersionAssetsRequest,
    ListPackageVersionDependenciesRequest,
    ListPackageVersionsRequest,
    ListPackagesRequest,
    ListRepositoriesInDomainRequest,
    ListTagsForResourceRequest,
    PutDomainPermissionsPolicyRequest,
    PutRepositoryPermissionsPolicyRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdatePackageVersionsStatusRequest,
    UpdateRepositoryRequest,
    AssociateExternalConnectionResult,
    CopyPackageVersionsResult,
    CreateDomainResult,
    CreateRepositoryResult,
    DeleteDomainResult,
    DeleteDomainPermissionsPolicyResult,
    DeletePackageVersionsResult,
    DeleteRepositoryResult,
    DeleteRepositoryPermissionsPolicyResult,
    DescribeDomainResult,
    DescribePackageVersionResult,
    DescribeRepositoryResult,
    DisassociateExternalConnectionResult,
    DisposePackageVersionsResult,
    GetAuthorizationTokenResult,
    GetDomainPermissionsPolicyResult,
    GetPackageVersionAssetResult,
    GetPackageVersionReadmeResult,
    GetRepositoryEndpointResult,
    GetRepositoryPermissionsPolicyResult,
    ListPackageVersionAssetsResult,
    ListPackageVersionDependenciesResult,
    ListPackageVersionsResult,
    ListPackagesResult,
    ListRepositoriesInDomainResult,
    ListTagsForResourceResult,
    PutDomainPermissionsPolicyResult,
    PutRepositoryPermissionsPolicyResult,
    TagResourceResult,
    UntagResourceResult,
    UpdatePackageVersionsStatusResult,
    UpdateRepositoryResult
} from "aws-sdk/clients/codeartifact";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.codeartifact.RepositoryPermissionsPolicy {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.codeartifact.RepositoryPermissionsPolicy>) {
        super(...args)
        this.client = new awssdk.CodeArtifact()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/codeartifact-2018-09-22.normal.json"), this.client)
    }

    invokeAssociateExternalConnection(partialParams: ToOptional<{
      [K in keyof AssociateExternalConnectionRequest & keyof AssociateExternalConnectionRequest & keyof AssociateExternalConnectionRequest & keyof AssociateExternalConnectionRequest & keyof AssociateExternalConnectionRequest & keyof AssociateExternalConnectionRequest]: (AssociateExternalConnectionRequest & AssociateExternalConnectionRequest & AssociateExternalConnectionRequest & AssociateExternalConnectionRequest & AssociateExternalConnectionRequest & AssociateExternalConnectionRequest)[K]
    }>): AssociateExternalConnectionResult {
        return this.client.associateExternalConnection(
            this.ops["AssociateExternalConnection"].apply(partialParams)
        );
    }

    invokeCopyPackageVersions(partialParams: ToOptional<{
      [K in keyof CopyPackageVersionsRequest & keyof CopyPackageVersionsRequest & keyof CopyPackageVersionsRequest & keyof CopyPackageVersionsRequest & keyof CopyPackageVersionsRequest & keyof CopyPackageVersionsRequest]: (CopyPackageVersionsRequest & CopyPackageVersionsRequest & CopyPackageVersionsRequest & CopyPackageVersionsRequest & CopyPackageVersionsRequest & CopyPackageVersionsRequest)[K]
    }>): CopyPackageVersionsResult {
        return this.client.copyPackageVersions(
            this.ops["CopyPackageVersions"].apply(partialParams)
        );
    }

    invokeCreateDomain(partialParams: ToOptional<{
      [K in keyof CreateDomainRequest & keyof CreateDomainRequest & keyof CreateDomainRequest & keyof CreateDomainRequest & keyof CreateDomainRequest & keyof CreateDomainRequest]: (CreateDomainRequest & CreateDomainRequest & CreateDomainRequest & CreateDomainRequest & CreateDomainRequest & CreateDomainRequest)[K]
    }>): CreateDomainResult {
        return this.client.createDomain(
            this.ops["CreateDomain"].apply(partialParams)
        );
    }

    invokeCreateRepository(partialParams: ToOptional<{
      [K in keyof CreateRepositoryRequest & keyof CreateRepositoryRequest & keyof CreateRepositoryRequest & keyof CreateRepositoryRequest & keyof CreateRepositoryRequest & keyof CreateRepositoryRequest]: (CreateRepositoryRequest & CreateRepositoryRequest & CreateRepositoryRequest & CreateRepositoryRequest & CreateRepositoryRequest & CreateRepositoryRequest)[K]
    }>): CreateRepositoryResult {
        return this.client.createRepository(
            this.ops["CreateRepository"].apply(partialParams)
        );
    }

    invokeDeleteDomain(partialParams: ToOptional<{
      [K in keyof DeleteDomainRequest & keyof DeleteDomainRequest & keyof DeleteDomainRequest & keyof DeleteDomainRequest & keyof DeleteDomainRequest & keyof DeleteDomainRequest]: (DeleteDomainRequest & DeleteDomainRequest & DeleteDomainRequest & DeleteDomainRequest & DeleteDomainRequest & DeleteDomainRequest)[K]
    }>): DeleteDomainResult {
        return this.client.deleteDomain(
            this.ops["DeleteDomain"].apply(partialParams)
        );
    }

    invokeDeleteDomainPermissionsPolicy(partialParams: ToOptional<{
      [K in keyof DeleteDomainPermissionsPolicyRequest & keyof DeleteDomainPermissionsPolicyRequest & keyof DeleteDomainPermissionsPolicyRequest & keyof DeleteDomainPermissionsPolicyRequest & keyof DeleteDomainPermissionsPolicyRequest & keyof DeleteDomainPermissionsPolicyRequest]: (DeleteDomainPermissionsPolicyRequest & DeleteDomainPermissionsPolicyRequest & DeleteDomainPermissionsPolicyRequest & DeleteDomainPermissionsPolicyRequest & DeleteDomainPermissionsPolicyRequest & DeleteDomainPermissionsPolicyRequest)[K]
    }>): DeleteDomainPermissionsPolicyResult {
        return this.client.deleteDomainPermissionsPolicy(
            this.ops["DeleteDomainPermissionsPolicy"].apply(partialParams)
        );
    }

    invokeDeletePackageVersions(partialParams: ToOptional<{
      [K in keyof DeletePackageVersionsRequest & keyof DeletePackageVersionsRequest & keyof DeletePackageVersionsRequest & keyof DeletePackageVersionsRequest & keyof DeletePackageVersionsRequest & keyof DeletePackageVersionsRequest]: (DeletePackageVersionsRequest & DeletePackageVersionsRequest & DeletePackageVersionsRequest & DeletePackageVersionsRequest & DeletePackageVersionsRequest & DeletePackageVersionsRequest)[K]
    }>): DeletePackageVersionsResult {
        return this.client.deletePackageVersions(
            this.ops["DeletePackageVersions"].apply(partialParams)
        );
    }

    invokeDeleteRepository(partialParams: ToOptional<{
      [K in keyof DeleteRepositoryRequest & keyof DeleteRepositoryRequest & keyof DeleteRepositoryRequest & keyof DeleteRepositoryRequest & keyof DeleteRepositoryRequest & keyof DeleteRepositoryRequest]: (DeleteRepositoryRequest & DeleteRepositoryRequest & DeleteRepositoryRequest & DeleteRepositoryRequest & DeleteRepositoryRequest & DeleteRepositoryRequest)[K]
    }>): DeleteRepositoryResult {
        return this.client.deleteRepository(
            this.ops["DeleteRepository"].apply(partialParams)
        );
    }

    invokeDeleteRepositoryPermissionsPolicy(partialParams: ToOptional<{
      [K in keyof DeleteRepositoryPermissionsPolicyRequest & keyof DeleteRepositoryPermissionsPolicyRequest & keyof DeleteRepositoryPermissionsPolicyRequest & keyof DeleteRepositoryPermissionsPolicyRequest & keyof DeleteRepositoryPermissionsPolicyRequest & keyof DeleteRepositoryPermissionsPolicyRequest]: (DeleteRepositoryPermissionsPolicyRequest & DeleteRepositoryPermissionsPolicyRequest & DeleteRepositoryPermissionsPolicyRequest & DeleteRepositoryPermissionsPolicyRequest & DeleteRepositoryPermissionsPolicyRequest & DeleteRepositoryPermissionsPolicyRequest)[K]
    }>): DeleteRepositoryPermissionsPolicyResult {
        return this.client.deleteRepositoryPermissionsPolicy(
            this.ops["DeleteRepositoryPermissionsPolicy"].apply(partialParams)
        );
    }

    invokeDescribeDomain(partialParams: ToOptional<{
      [K in keyof DescribeDomainRequest & keyof DescribeDomainRequest & keyof DescribeDomainRequest & keyof DescribeDomainRequest & keyof DescribeDomainRequest & keyof DescribeDomainRequest]: (DescribeDomainRequest & DescribeDomainRequest & DescribeDomainRequest & DescribeDomainRequest & DescribeDomainRequest & DescribeDomainRequest)[K]
    }>): DescribeDomainResult {
        return this.client.describeDomain(
            this.ops["DescribeDomain"].apply(partialParams)
        );
    }

    invokeDescribePackageVersion(partialParams: ToOptional<{
      [K in keyof DescribePackageVersionRequest & keyof DescribePackageVersionRequest & keyof DescribePackageVersionRequest & keyof DescribePackageVersionRequest & keyof DescribePackageVersionRequest & keyof DescribePackageVersionRequest]: (DescribePackageVersionRequest & DescribePackageVersionRequest & DescribePackageVersionRequest & DescribePackageVersionRequest & DescribePackageVersionRequest & DescribePackageVersionRequest)[K]
    }>): DescribePackageVersionResult {
        return this.client.describePackageVersion(
            this.ops["DescribePackageVersion"].apply(partialParams)
        );
    }

    invokeDescribeRepository(partialParams: ToOptional<{
      [K in keyof DescribeRepositoryRequest & keyof DescribeRepositoryRequest & keyof DescribeRepositoryRequest & keyof DescribeRepositoryRequest & keyof DescribeRepositoryRequest & keyof DescribeRepositoryRequest]: (DescribeRepositoryRequest & DescribeRepositoryRequest & DescribeRepositoryRequest & DescribeRepositoryRequest & DescribeRepositoryRequest & DescribeRepositoryRequest)[K]
    }>): DescribeRepositoryResult {
        return this.client.describeRepository(
            this.ops["DescribeRepository"].apply(partialParams)
        );
    }

    invokeDisassociateExternalConnection(partialParams: ToOptional<{
      [K in keyof DisassociateExternalConnectionRequest & keyof DisassociateExternalConnectionRequest & keyof DisassociateExternalConnectionRequest & keyof DisassociateExternalConnectionRequest & keyof DisassociateExternalConnectionRequest & keyof DisassociateExternalConnectionRequest]: (DisassociateExternalConnectionRequest & DisassociateExternalConnectionRequest & DisassociateExternalConnectionRequest & DisassociateExternalConnectionRequest & DisassociateExternalConnectionRequest & DisassociateExternalConnectionRequest)[K]
    }>): DisassociateExternalConnectionResult {
        return this.client.disassociateExternalConnection(
            this.ops["DisassociateExternalConnection"].apply(partialParams)
        );
    }

    invokeDisposePackageVersions(partialParams: ToOptional<{
      [K in keyof DisposePackageVersionsRequest & keyof DisposePackageVersionsRequest & keyof DisposePackageVersionsRequest & keyof DisposePackageVersionsRequest & keyof DisposePackageVersionsRequest & keyof DisposePackageVersionsRequest]: (DisposePackageVersionsRequest & DisposePackageVersionsRequest & DisposePackageVersionsRequest & DisposePackageVersionsRequest & DisposePackageVersionsRequest & DisposePackageVersionsRequest)[K]
    }>): DisposePackageVersionsResult {
        return this.client.disposePackageVersions(
            this.ops["DisposePackageVersions"].apply(partialParams)
        );
    }

    invokeGetAuthorizationToken(partialParams: ToOptional<{
      [K in keyof Omit<GetAuthorizationTokenRequest, "domain"> & keyof GetAuthorizationTokenRequest & keyof GetAuthorizationTokenRequest & keyof GetAuthorizationTokenRequest & keyof GetAuthorizationTokenRequest & keyof GetAuthorizationTokenRequest]: (Omit<GetAuthorizationTokenRequest, "domain"> & GetAuthorizationTokenRequest & GetAuthorizationTokenRequest & GetAuthorizationTokenRequest & GetAuthorizationTokenRequest & GetAuthorizationTokenRequest)[K]
    }>): GetAuthorizationTokenResult {
        return this.client.getAuthorizationToken(
            this.ops["GetAuthorizationToken"].apply(partialParams)
        );
    }

    invokeGetDomainPermissionsPolicy(partialParams: ToOptional<{
      [K in keyof Omit<GetDomainPermissionsPolicyRequest, "domain"> & keyof GetDomainPermissionsPolicyRequest & keyof GetDomainPermissionsPolicyRequest & keyof GetDomainPermissionsPolicyRequest & keyof GetDomainPermissionsPolicyRequest & keyof GetDomainPermissionsPolicyRequest]: (Omit<GetDomainPermissionsPolicyRequest, "domain"> & GetDomainPermissionsPolicyRequest & GetDomainPermissionsPolicyRequest & GetDomainPermissionsPolicyRequest & GetDomainPermissionsPolicyRequest & GetDomainPermissionsPolicyRequest)[K]
    }>): GetDomainPermissionsPolicyResult {
        return this.client.getDomainPermissionsPolicy(
            this.ops["GetDomainPermissionsPolicy"].apply(partialParams)
        );
    }

    invokeGetPackageVersionAsset(partialParams: ToOptional<{
      [K in keyof Omit<GetPackageVersionAssetRequest, "domain"> & keyof GetPackageVersionAssetRequest & keyof GetPackageVersionAssetRequest & keyof GetPackageVersionAssetRequest & keyof GetPackageVersionAssetRequest & keyof GetPackageVersionAssetRequest]: (Omit<GetPackageVersionAssetRequest, "domain"> & GetPackageVersionAssetRequest & GetPackageVersionAssetRequest & GetPackageVersionAssetRequest & GetPackageVersionAssetRequest & GetPackageVersionAssetRequest)[K]
    }>): GetPackageVersionAssetResult {
        return this.client.getPackageVersionAsset(
            this.ops["GetPackageVersionAsset"].apply(partialParams)
        );
    }

    invokeGetPackageVersionReadme(partialParams: ToOptional<{
      [K in keyof Omit<GetPackageVersionReadmeRequest, "domain"> & keyof GetPackageVersionReadmeRequest & keyof GetPackageVersionReadmeRequest & keyof GetPackageVersionReadmeRequest & keyof GetPackageVersionReadmeRequest & keyof GetPackageVersionReadmeRequest]: (Omit<GetPackageVersionReadmeRequest, "domain"> & GetPackageVersionReadmeRequest & GetPackageVersionReadmeRequest & GetPackageVersionReadmeRequest & GetPackageVersionReadmeRequest & GetPackageVersionReadmeRequest)[K]
    }>): GetPackageVersionReadmeResult {
        return this.client.getPackageVersionReadme(
            this.ops["GetPackageVersionReadme"].apply(partialParams)
        );
    }

    invokeGetRepositoryEndpoint(partialParams: ToOptional<{
      [K in keyof Omit<GetRepositoryEndpointRequest, "domain"> & keyof GetRepositoryEndpointRequest & keyof GetRepositoryEndpointRequest & keyof GetRepositoryEndpointRequest & keyof GetRepositoryEndpointRequest & keyof GetRepositoryEndpointRequest]: (Omit<GetRepositoryEndpointRequest, "domain"> & GetRepositoryEndpointRequest & GetRepositoryEndpointRequest & GetRepositoryEndpointRequest & GetRepositoryEndpointRequest & GetRepositoryEndpointRequest)[K]
    }>): GetRepositoryEndpointResult {
        return this.client.getRepositoryEndpoint(
            this.ops["GetRepositoryEndpoint"].apply(partialParams)
        );
    }

    invokeGetRepositoryPermissionsPolicy(partialParams: ToOptional<{
      [K in keyof Omit<GetRepositoryPermissionsPolicyRequest, "domain"> & keyof GetRepositoryPermissionsPolicyRequest & keyof GetRepositoryPermissionsPolicyRequest & keyof GetRepositoryPermissionsPolicyRequest & keyof GetRepositoryPermissionsPolicyRequest & keyof GetRepositoryPermissionsPolicyRequest]: (Omit<GetRepositoryPermissionsPolicyRequest, "domain"> & GetRepositoryPermissionsPolicyRequest & GetRepositoryPermissionsPolicyRequest & GetRepositoryPermissionsPolicyRequest & GetRepositoryPermissionsPolicyRequest & GetRepositoryPermissionsPolicyRequest)[K]
    }>): GetRepositoryPermissionsPolicyResult {
        return this.client.getRepositoryPermissionsPolicy(
            this.ops["GetRepositoryPermissionsPolicy"].apply(partialParams)
        );
    }

    invokeListPackageVersionAssets(partialParams: ToOptional<{
      [K in keyof Omit<ListPackageVersionAssetsRequest, "domain"> & keyof ListPackageVersionAssetsRequest & keyof ListPackageVersionAssetsRequest & keyof ListPackageVersionAssetsRequest & keyof ListPackageVersionAssetsRequest & keyof ListPackageVersionAssetsRequest]: (Omit<ListPackageVersionAssetsRequest, "domain"> & ListPackageVersionAssetsRequest & ListPackageVersionAssetsRequest & ListPackageVersionAssetsRequest & ListPackageVersionAssetsRequest & ListPackageVersionAssetsRequest)[K]
    }>): ListPackageVersionAssetsResult {
        return this.client.listPackageVersionAssets(
            this.ops["ListPackageVersionAssets"].apply(partialParams)
        );
    }

    invokeListPackageVersionDependencies(partialParams: ToOptional<{
      [K in keyof Omit<ListPackageVersionDependenciesRequest, "domain"> & keyof ListPackageVersionDependenciesRequest & keyof ListPackageVersionDependenciesRequest & keyof ListPackageVersionDependenciesRequest & keyof ListPackageVersionDependenciesRequest & keyof ListPackageVersionDependenciesRequest]: (Omit<ListPackageVersionDependenciesRequest, "domain"> & ListPackageVersionDependenciesRequest & ListPackageVersionDependenciesRequest & ListPackageVersionDependenciesRequest & ListPackageVersionDependenciesRequest & ListPackageVersionDependenciesRequest)[K]
    }>): ListPackageVersionDependenciesResult {
        return this.client.listPackageVersionDependencies(
            this.ops["ListPackageVersionDependencies"].apply(partialParams)
        );
    }

    invokeListPackageVersions(partialParams: ToOptional<{
      [K in keyof Omit<ListPackageVersionsRequest, "domain"> & keyof ListPackageVersionsRequest & keyof ListPackageVersionsRequest & keyof ListPackageVersionsRequest & keyof ListPackageVersionsRequest & keyof ListPackageVersionsRequest]: (Omit<ListPackageVersionsRequest, "domain"> & ListPackageVersionsRequest & ListPackageVersionsRequest & ListPackageVersionsRequest & ListPackageVersionsRequest & ListPackageVersionsRequest)[K]
    }>): ListPackageVersionsResult {
        return this.client.listPackageVersions(
            this.ops["ListPackageVersions"].apply(partialParams)
        );
    }

    invokeListPackages(partialParams: ToOptional<{
      [K in keyof Omit<ListPackagesRequest, "domain"> & keyof ListPackagesRequest & keyof ListPackagesRequest & keyof ListPackagesRequest & keyof ListPackagesRequest & keyof ListPackagesRequest]: (Omit<ListPackagesRequest, "domain"> & ListPackagesRequest & ListPackagesRequest & ListPackagesRequest & ListPackagesRequest & ListPackagesRequest)[K]
    }>): ListPackagesResult {
        return this.client.listPackages(
            this.ops["ListPackages"].apply(partialParams)
        );
    }

    invokeListRepositoriesInDomain(partialParams: ToOptional<{
      [K in keyof Omit<ListRepositoriesInDomainRequest, "domain"> & keyof ListRepositoriesInDomainRequest & keyof ListRepositoriesInDomainRequest & keyof ListRepositoriesInDomainRequest & keyof ListRepositoriesInDomainRequest & keyof ListRepositoriesInDomainRequest]: (Omit<ListRepositoriesInDomainRequest, "domain"> & ListRepositoriesInDomainRequest & ListRepositoriesInDomainRequest & ListRepositoriesInDomainRequest & ListRepositoriesInDomainRequest & ListRepositoriesInDomainRequest)[K]
    }>): ListRepositoriesInDomainResult {
        return this.client.listRepositoriesInDomain(
            this.ops["ListRepositoriesInDomain"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof Omit<ListTagsForResourceRequest, "resourceArn">]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & Omit<ListTagsForResourceRequest, "resourceArn">)[K]
    }>): ListTagsForResourceResult {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokePutDomainPermissionsPolicy(partialParams: ToOptional<{
      [K in keyof Omit<PutDomainPermissionsPolicyRequest, "domain"> & keyof PutDomainPermissionsPolicyRequest & keyof Omit<PutDomainPermissionsPolicyRequest, "policyDocument"> & keyof PutDomainPermissionsPolicyRequest & keyof PutDomainPermissionsPolicyRequest & keyof PutDomainPermissionsPolicyRequest]: (Omit<PutDomainPermissionsPolicyRequest, "domain"> & PutDomainPermissionsPolicyRequest & Omit<PutDomainPermissionsPolicyRequest, "policyDocument"> & PutDomainPermissionsPolicyRequest & PutDomainPermissionsPolicyRequest & PutDomainPermissionsPolicyRequest)[K]
    }>): PutDomainPermissionsPolicyResult {
        return this.client.putDomainPermissionsPolicy(
            this.ops["PutDomainPermissionsPolicy"].apply(partialParams)
        );
    }

    invokePutRepositoryPermissionsPolicy(partialParams: ToOptional<{
      [K in keyof Omit<PutRepositoryPermissionsPolicyRequest, "domain"> & keyof PutRepositoryPermissionsPolicyRequest & keyof Omit<PutRepositoryPermissionsPolicyRequest, "policyDocument"> & keyof PutRepositoryPermissionsPolicyRequest & keyof PutRepositoryPermissionsPolicyRequest & keyof PutRepositoryPermissionsPolicyRequest]: (Omit<PutRepositoryPermissionsPolicyRequest, "domain"> & PutRepositoryPermissionsPolicyRequest & Omit<PutRepositoryPermissionsPolicyRequest, "policyDocument"> & PutRepositoryPermissionsPolicyRequest & PutRepositoryPermissionsPolicyRequest & PutRepositoryPermissionsPolicyRequest)[K]
    }>): PutRepositoryPermissionsPolicyResult {
        return this.client.putRepositoryPermissionsPolicy(
            this.ops["PutRepositoryPermissionsPolicy"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof Omit<TagResourceRequest, "resourceArn">]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & Omit<TagResourceRequest, "resourceArn">)[K]
    }>): TagResourceResult {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof Omit<UntagResourceRequest, "resourceArn">]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & Omit<UntagResourceRequest, "resourceArn">)[K]
    }>): UntagResourceResult {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdatePackageVersionsStatus(partialParams: ToOptional<{
      [K in keyof Omit<UpdatePackageVersionsStatusRequest, "domain"> & keyof UpdatePackageVersionsStatusRequest & keyof UpdatePackageVersionsStatusRequest & keyof UpdatePackageVersionsStatusRequest & keyof Omit<UpdatePackageVersionsStatusRequest, "repository"> & keyof UpdatePackageVersionsStatusRequest]: (Omit<UpdatePackageVersionsStatusRequest, "domain"> & UpdatePackageVersionsStatusRequest & UpdatePackageVersionsStatusRequest & UpdatePackageVersionsStatusRequest & Omit<UpdatePackageVersionsStatusRequest, "repository"> & UpdatePackageVersionsStatusRequest)[K]
    }>): UpdatePackageVersionsStatusResult {
        return this.client.updatePackageVersionsStatus(
            this.ops["UpdatePackageVersionsStatus"].apply(partialParams)
        );
    }

    invokeUpdateRepository(partialParams: ToOptional<{
      [K in keyof Omit<UpdateRepositoryRequest, "domain"> & keyof UpdateRepositoryRequest & keyof UpdateRepositoryRequest & keyof UpdateRepositoryRequest & keyof Omit<UpdateRepositoryRequest, "repository"> & keyof UpdateRepositoryRequest]: (Omit<UpdateRepositoryRequest, "domain"> & UpdateRepositoryRequest & UpdateRepositoryRequest & UpdateRepositoryRequest & Omit<UpdateRepositoryRequest, "repository"> & UpdateRepositoryRequest)[K]
    }>): UpdateRepositoryResult {
        return this.client.updateRepository(
            this.ops["UpdateRepository"].apply(partialParams)
        );
    }
}