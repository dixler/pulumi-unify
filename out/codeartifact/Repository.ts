
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
    ListDomainsRequest,
    ListPackageVersionAssetsRequest,
    ListPackageVersionDependenciesRequest,
    ListPackageVersionsRequest,
    ListPackagesRequest,
    ListRepositoriesRequest,
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
    ListDomainsResult,
    ListPackageVersionAssetsResult,
    ListPackageVersionDependenciesResult,
    ListPackageVersionsResult,
    ListPackagesResult,
    ListRepositoriesResult,
    ListRepositoriesInDomainResult,
    ListTagsForResourceResult,
    PutDomainPermissionsPolicyResult,
    PutRepositoryPermissionsPolicyResult,
    TagResourceResult,
    UntagResourceResult,
    UpdatePackageVersionsStatusResult,
    UpdateRepositoryResult
} from "aws-sdk/clients/codeartifact";
const schema = require("../apis/codeartifact-2018-09-22.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.codeartifact.Repository {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.codeartifact.Repository>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.CodeArtifact()
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

    invokeAssociateExternalConnection(partialParams: ToOptional<{
      [K in keyof AssociateExternalConnectionRequest]: (AssociateExternalConnectionRequest)[K]
    }>): Request<AssociateExternalConnectionResult, AWSError> {
        this.boot();
        return this.client.associateExternalConnection(
          this.ops["AssociateExternalConnection"].apply(partialParams)
        );
    }

    invokeCopyPackageVersions(partialParams: ToOptional<{
      [K in keyof CopyPackageVersionsRequest]: (CopyPackageVersionsRequest)[K]
    }>): Request<CopyPackageVersionsResult, AWSError> {
        this.boot();
        return this.client.copyPackageVersions(
          this.ops["CopyPackageVersions"].apply(partialParams)
        );
    }

    invokeCreateDomain(partialParams: ToOptional<{
      [K in keyof CreateDomainRequest]: (CreateDomainRequest)[K]
    }>): Request<CreateDomainResult, AWSError> {
        this.boot();
        return this.client.createDomain(
          this.ops["CreateDomain"].apply(partialParams)
        );
    }

    invokeCreateRepository(partialParams: ToOptional<{
      [K in keyof CreateRepositoryRequest]: (CreateRepositoryRequest)[K]
    }>): Request<CreateRepositoryResult, AWSError> {
        this.boot();
        return this.client.createRepository(
          this.ops["CreateRepository"].apply(partialParams)
        );
    }

    invokeDeleteDomain(partialParams: ToOptional<{
      [K in keyof DeleteDomainRequest]: (DeleteDomainRequest)[K]
    }>): Request<DeleteDomainResult, AWSError> {
        this.boot();
        return this.client.deleteDomain(
          this.ops["DeleteDomain"].apply(partialParams)
        );
    }

    invokeDeleteDomainPermissionsPolicy(partialParams: ToOptional<{
      [K in keyof DeleteDomainPermissionsPolicyRequest]: (DeleteDomainPermissionsPolicyRequest)[K]
    }>): Request<DeleteDomainPermissionsPolicyResult, AWSError> {
        this.boot();
        return this.client.deleteDomainPermissionsPolicy(
          this.ops["DeleteDomainPermissionsPolicy"].apply(partialParams)
        );
    }

    invokeDeletePackageVersions(partialParams: ToOptional<{
      [K in keyof DeletePackageVersionsRequest]: (DeletePackageVersionsRequest)[K]
    }>): Request<DeletePackageVersionsResult, AWSError> {
        this.boot();
        return this.client.deletePackageVersions(
          this.ops["DeletePackageVersions"].apply(partialParams)
        );
    }

    invokeDeleteRepository(partialParams: ToOptional<{
      [K in keyof DeleteRepositoryRequest]: (DeleteRepositoryRequest)[K]
    }>): Request<DeleteRepositoryResult, AWSError> {
        this.boot();
        return this.client.deleteRepository(
          this.ops["DeleteRepository"].apply(partialParams)
        );
    }

    invokeDeleteRepositoryPermissionsPolicy(partialParams: ToOptional<{
      [K in keyof DeleteRepositoryPermissionsPolicyRequest]: (DeleteRepositoryPermissionsPolicyRequest)[K]
    }>): Request<DeleteRepositoryPermissionsPolicyResult, AWSError> {
        this.boot();
        return this.client.deleteRepositoryPermissionsPolicy(
          this.ops["DeleteRepositoryPermissionsPolicy"].apply(partialParams)
        );
    }

    invokeDescribeDomain(partialParams: ToOptional<{
      [K in keyof DescribeDomainRequest]: (DescribeDomainRequest)[K]
    }>): Request<DescribeDomainResult, AWSError> {
        this.boot();
        return this.client.describeDomain(
          this.ops["DescribeDomain"].apply(partialParams)
        );
    }

    invokeDescribePackageVersion(partialParams: ToOptional<{
      [K in keyof DescribePackageVersionRequest]: (DescribePackageVersionRequest)[K]
    }>): Request<DescribePackageVersionResult, AWSError> {
        this.boot();
        return this.client.describePackageVersion(
          this.ops["DescribePackageVersion"].apply(partialParams)
        );
    }

    invokeDescribeRepository(partialParams: ToOptional<{
      [K in keyof DescribeRepositoryRequest]: (DescribeRepositoryRequest)[K]
    }>): Request<DescribeRepositoryResult, AWSError> {
        this.boot();
        return this.client.describeRepository(
          this.ops["DescribeRepository"].apply(partialParams)
        );
    }

    invokeDisassociateExternalConnection(partialParams: ToOptional<{
      [K in keyof DisassociateExternalConnectionRequest]: (DisassociateExternalConnectionRequest)[K]
    }>): Request<DisassociateExternalConnectionResult, AWSError> {
        this.boot();
        return this.client.disassociateExternalConnection(
          this.ops["DisassociateExternalConnection"].apply(partialParams)
        );
    }

    invokeDisposePackageVersions(partialParams: ToOptional<{
      [K in keyof DisposePackageVersionsRequest]: (DisposePackageVersionsRequest)[K]
    }>): Request<DisposePackageVersionsResult, AWSError> {
        this.boot();
        return this.client.disposePackageVersions(
          this.ops["DisposePackageVersions"].apply(partialParams)
        );
    }

    invokeGetAuthorizationToken(partialParams: ToOptional<{
      [K in keyof GetAuthorizationTokenRequest]: (GetAuthorizationTokenRequest)[K]
    }>): Request<GetAuthorizationTokenResult, AWSError> {
        this.boot();
        return this.client.getAuthorizationToken(
          this.ops["GetAuthorizationToken"].apply(partialParams)
        );
    }

    invokeGetDomainPermissionsPolicy(partialParams: ToOptional<{
      [K in keyof GetDomainPermissionsPolicyRequest]: (GetDomainPermissionsPolicyRequest)[K]
    }>): Request<GetDomainPermissionsPolicyResult, AWSError> {
        this.boot();
        return this.client.getDomainPermissionsPolicy(
          this.ops["GetDomainPermissionsPolicy"].apply(partialParams)
        );
    }

    invokeGetPackageVersionAsset(partialParams: ToOptional<{
      [K in keyof GetPackageVersionAssetRequest]: (GetPackageVersionAssetRequest)[K]
    }>): Request<GetPackageVersionAssetResult, AWSError> {
        this.boot();
        return this.client.getPackageVersionAsset(
          this.ops["GetPackageVersionAsset"].apply(partialParams)
        );
    }

    invokeGetPackageVersionReadme(partialParams: ToOptional<{
      [K in keyof GetPackageVersionReadmeRequest]: (GetPackageVersionReadmeRequest)[K]
    }>): Request<GetPackageVersionReadmeResult, AWSError> {
        this.boot();
        return this.client.getPackageVersionReadme(
          this.ops["GetPackageVersionReadme"].apply(partialParams)
        );
    }

    invokeGetRepositoryEndpoint(partialParams: ToOptional<{
      [K in keyof GetRepositoryEndpointRequest]: (GetRepositoryEndpointRequest)[K]
    }>): Request<GetRepositoryEndpointResult, AWSError> {
        this.boot();
        return this.client.getRepositoryEndpoint(
          this.ops["GetRepositoryEndpoint"].apply(partialParams)
        );
    }

    invokeGetRepositoryPermissionsPolicy(partialParams: ToOptional<{
      [K in keyof GetRepositoryPermissionsPolicyRequest]: (GetRepositoryPermissionsPolicyRequest)[K]
    }>): Request<GetRepositoryPermissionsPolicyResult, AWSError> {
        this.boot();
        return this.client.getRepositoryPermissionsPolicy(
          this.ops["GetRepositoryPermissionsPolicy"].apply(partialParams)
        );
    }

    invokeListDomains(partialParams: ToOptional<{
      [K in keyof ListDomainsRequest]: (ListDomainsRequest)[K]
    }>): Request<ListDomainsResult, AWSError> {
        this.boot();
        return this.client.listDomains(
          this.ops["ListDomains"].apply(partialParams)
        );
    }

    invokeListPackageVersionAssets(partialParams: ToOptional<{
      [K in keyof ListPackageVersionAssetsRequest]: (ListPackageVersionAssetsRequest)[K]
    }>): Request<ListPackageVersionAssetsResult, AWSError> {
        this.boot();
        return this.client.listPackageVersionAssets(
          this.ops["ListPackageVersionAssets"].apply(partialParams)
        );
    }

    invokeListPackageVersionDependencies(partialParams: ToOptional<{
      [K in keyof ListPackageVersionDependenciesRequest]: (ListPackageVersionDependenciesRequest)[K]
    }>): Request<ListPackageVersionDependenciesResult, AWSError> {
        this.boot();
        return this.client.listPackageVersionDependencies(
          this.ops["ListPackageVersionDependencies"].apply(partialParams)
        );
    }

    invokeListPackageVersions(partialParams: ToOptional<{
      [K in keyof ListPackageVersionsRequest]: (ListPackageVersionsRequest)[K]
    }>): Request<ListPackageVersionsResult, AWSError> {
        this.boot();
        return this.client.listPackageVersions(
          this.ops["ListPackageVersions"].apply(partialParams)
        );
    }

    invokeListPackages(partialParams: ToOptional<{
      [K in keyof ListPackagesRequest]: (ListPackagesRequest)[K]
    }>): Request<ListPackagesResult, AWSError> {
        this.boot();
        return this.client.listPackages(
          this.ops["ListPackages"].apply(partialParams)
        );
    }

    invokeListRepositories(partialParams: ToOptional<{
      [K in keyof ListRepositoriesRequest]: (ListRepositoriesRequest)[K]
    }>): Request<ListRepositoriesResult, AWSError> {
        this.boot();
        return this.client.listRepositories(
          this.ops["ListRepositories"].apply(partialParams)
        );
    }

    invokeListRepositoriesInDomain(partialParams: ToOptional<{
      [K in keyof ListRepositoriesInDomainRequest]: (ListRepositoriesInDomainRequest)[K]
    }>): Request<ListRepositoriesInDomainResult, AWSError> {
        this.boot();
        return this.client.listRepositoriesInDomain(
          this.ops["ListRepositoriesInDomain"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResult, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokePutDomainPermissionsPolicy(partialParams: ToOptional<{
      [K in keyof PutDomainPermissionsPolicyRequest]: (PutDomainPermissionsPolicyRequest)[K]
    }>): Request<PutDomainPermissionsPolicyResult, AWSError> {
        this.boot();
        return this.client.putDomainPermissionsPolicy(
          this.ops["PutDomainPermissionsPolicy"].apply(partialParams)
        );
    }

    invokePutRepositoryPermissionsPolicy(partialParams: ToOptional<{
      [K in keyof PutRepositoryPermissionsPolicyRequest]: (PutRepositoryPermissionsPolicyRequest)[K]
    }>): Request<PutRepositoryPermissionsPolicyResult, AWSError> {
        this.boot();
        return this.client.putRepositoryPermissionsPolicy(
          this.ops["PutRepositoryPermissionsPolicy"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest]: (TagResourceRequest)[K]
    }>): Request<TagResourceResult, AWSError> {
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest]: (UntagResourceRequest)[K]
    }>): Request<UntagResourceResult, AWSError> {
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdatePackageVersionsStatus(partialParams: ToOptional<{
      [K in keyof UpdatePackageVersionsStatusRequest]: (UpdatePackageVersionsStatusRequest)[K]
    }>): Request<UpdatePackageVersionsStatusResult, AWSError> {
        this.boot();
        return this.client.updatePackageVersionsStatus(
          this.ops["UpdatePackageVersionsStatus"].apply(partialParams)
        );
    }

    invokeUpdateRepository(partialParams: ToOptional<{
      [K in keyof UpdateRepositoryRequest]: (UpdateRepositoryRequest)[K]
    }>): Request<UpdateRepositoryResult, AWSError> {
        this.boot();
        return this.client.updateRepository(
          this.ops["UpdateRepository"].apply(partialParams)
        );
    }
}