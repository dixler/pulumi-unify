
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
const schema = require("../apis/codeartifact-2018-09-22.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.codeartifact.RepositoryPermissionsPolicy {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.codeartifact.RepositoryPermissionsPolicy>) {
        super(...args)
        this.client = new awssdk.CodeArtifact()
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

    invokeAssociateExternalConnection(partialParams: ToOptional<{
      [K in keyof AssociateExternalConnectionRequest & keyof AssociateExternalConnectionRequest & keyof AssociateExternalConnectionRequest & keyof AssociateExternalConnectionRequest & keyof AssociateExternalConnectionRequest & keyof AssociateExternalConnectionRequest]: (AssociateExternalConnectionRequest & AssociateExternalConnectionRequest & AssociateExternalConnectionRequest & AssociateExternalConnectionRequest & AssociateExternalConnectionRequest & AssociateExternalConnectionRequest)[K]
    }>): Request<AssociateExternalConnectionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateExternalConnection(
          this.ops["AssociateExternalConnection"].applicator.apply(partialParams)
        );
    }

    invokeCopyPackageVersions(partialParams: ToOptional<{
      [K in keyof CopyPackageVersionsRequest & keyof CopyPackageVersionsRequest & keyof CopyPackageVersionsRequest & keyof CopyPackageVersionsRequest & keyof CopyPackageVersionsRequest & keyof CopyPackageVersionsRequest]: (CopyPackageVersionsRequest & CopyPackageVersionsRequest & CopyPackageVersionsRequest & CopyPackageVersionsRequest & CopyPackageVersionsRequest & CopyPackageVersionsRequest)[K]
    }>): Request<CopyPackageVersionsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copyPackageVersions(
          this.ops["CopyPackageVersions"].applicator.apply(partialParams)
        );
    }

    invokeCreateDomain(partialParams: ToOptional<{
      [K in keyof CreateDomainRequest & keyof CreateDomainRequest & keyof CreateDomainRequest & keyof CreateDomainRequest & keyof CreateDomainRequest & keyof CreateDomainRequest]: (CreateDomainRequest & CreateDomainRequest & CreateDomainRequest & CreateDomainRequest & CreateDomainRequest & CreateDomainRequest)[K]
    }>): Request<CreateDomainResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDomain(
          this.ops["CreateDomain"].applicator.apply(partialParams)
        );
    }

    invokeCreateRepository(partialParams: ToOptional<{
      [K in keyof CreateRepositoryRequest & keyof CreateRepositoryRequest & keyof CreateRepositoryRequest & keyof CreateRepositoryRequest & keyof CreateRepositoryRequest & keyof CreateRepositoryRequest]: (CreateRepositoryRequest & CreateRepositoryRequest & CreateRepositoryRequest & CreateRepositoryRequest & CreateRepositoryRequest & CreateRepositoryRequest)[K]
    }>): Request<CreateRepositoryResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRepository(
          this.ops["CreateRepository"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDomain(partialParams: ToOptional<{
      [K in keyof DeleteDomainRequest & keyof DeleteDomainRequest & keyof DeleteDomainRequest & keyof DeleteDomainRequest & keyof DeleteDomainRequest & keyof DeleteDomainRequest]: (DeleteDomainRequest & DeleteDomainRequest & DeleteDomainRequest & DeleteDomainRequest & DeleteDomainRequest & DeleteDomainRequest)[K]
    }>): Request<DeleteDomainResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDomain(
          this.ops["DeleteDomain"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDomainPermissionsPolicy(partialParams: ToOptional<{
      [K in keyof DeleteDomainPermissionsPolicyRequest & keyof DeleteDomainPermissionsPolicyRequest & keyof DeleteDomainPermissionsPolicyRequest & keyof DeleteDomainPermissionsPolicyRequest & keyof DeleteDomainPermissionsPolicyRequest & keyof DeleteDomainPermissionsPolicyRequest]: (DeleteDomainPermissionsPolicyRequest & DeleteDomainPermissionsPolicyRequest & DeleteDomainPermissionsPolicyRequest & DeleteDomainPermissionsPolicyRequest & DeleteDomainPermissionsPolicyRequest & DeleteDomainPermissionsPolicyRequest)[K]
    }>): Request<DeleteDomainPermissionsPolicyResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDomainPermissionsPolicy(
          this.ops["DeleteDomainPermissionsPolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeletePackageVersions(partialParams: ToOptional<{
      [K in keyof DeletePackageVersionsRequest & keyof DeletePackageVersionsRequest & keyof DeletePackageVersionsRequest & keyof DeletePackageVersionsRequest & keyof DeletePackageVersionsRequest & keyof DeletePackageVersionsRequest]: (DeletePackageVersionsRequest & DeletePackageVersionsRequest & DeletePackageVersionsRequest & DeletePackageVersionsRequest & DeletePackageVersionsRequest & DeletePackageVersionsRequest)[K]
    }>): Request<DeletePackageVersionsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePackageVersions(
          this.ops["DeletePackageVersions"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRepository(partialParams: ToOptional<{
      [K in keyof DeleteRepositoryRequest & keyof DeleteRepositoryRequest & keyof DeleteRepositoryRequest & keyof DeleteRepositoryRequest & keyof DeleteRepositoryRequest & keyof DeleteRepositoryRequest]: (DeleteRepositoryRequest & DeleteRepositoryRequest & DeleteRepositoryRequest & DeleteRepositoryRequest & DeleteRepositoryRequest & DeleteRepositoryRequest)[K]
    }>): Request<DeleteRepositoryResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRepository(
          this.ops["DeleteRepository"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRepositoryPermissionsPolicy(partialParams: ToOptional<{
      [K in keyof DeleteRepositoryPermissionsPolicyRequest & keyof DeleteRepositoryPermissionsPolicyRequest & keyof DeleteRepositoryPermissionsPolicyRequest & keyof DeleteRepositoryPermissionsPolicyRequest & keyof DeleteRepositoryPermissionsPolicyRequest & keyof DeleteRepositoryPermissionsPolicyRequest]: (DeleteRepositoryPermissionsPolicyRequest & DeleteRepositoryPermissionsPolicyRequest & DeleteRepositoryPermissionsPolicyRequest & DeleteRepositoryPermissionsPolicyRequest & DeleteRepositoryPermissionsPolicyRequest & DeleteRepositoryPermissionsPolicyRequest)[K]
    }>): Request<DeleteRepositoryPermissionsPolicyResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRepositoryPermissionsPolicy(
          this.ops["DeleteRepositoryPermissionsPolicy"].applicator.apply(partialParams)
        );
    }

    invokeDescribeDomain(partialParams: ToOptional<{
      [K in keyof DescribeDomainRequest & keyof DescribeDomainRequest & keyof DescribeDomainRequest & keyof DescribeDomainRequest & keyof DescribeDomainRequest & keyof DescribeDomainRequest]: (DescribeDomainRequest & DescribeDomainRequest & DescribeDomainRequest & DescribeDomainRequest & DescribeDomainRequest & DescribeDomainRequest)[K]
    }>): Request<DescribeDomainResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDomain(
          this.ops["DescribeDomain"].applicator.apply(partialParams)
        );
    }

    invokeDescribePackageVersion(partialParams: ToOptional<{
      [K in keyof DescribePackageVersionRequest & keyof DescribePackageVersionRequest & keyof DescribePackageVersionRequest & keyof DescribePackageVersionRequest & keyof DescribePackageVersionRequest & keyof DescribePackageVersionRequest]: (DescribePackageVersionRequest & DescribePackageVersionRequest & DescribePackageVersionRequest & DescribePackageVersionRequest & DescribePackageVersionRequest & DescribePackageVersionRequest)[K]
    }>): Request<DescribePackageVersionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describePackageVersion(
          this.ops["DescribePackageVersion"].applicator.apply(partialParams)
        );
    }

    invokeDescribeRepository(partialParams: ToOptional<{
      [K in keyof DescribeRepositoryRequest & keyof DescribeRepositoryRequest & keyof DescribeRepositoryRequest & keyof DescribeRepositoryRequest & keyof DescribeRepositoryRequest & keyof DescribeRepositoryRequest]: (DescribeRepositoryRequest & DescribeRepositoryRequest & DescribeRepositoryRequest & DescribeRepositoryRequest & DescribeRepositoryRequest & DescribeRepositoryRequest)[K]
    }>): Request<DescribeRepositoryResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeRepository(
          this.ops["DescribeRepository"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateExternalConnection(partialParams: ToOptional<{
      [K in keyof DisassociateExternalConnectionRequest & keyof DisassociateExternalConnectionRequest & keyof DisassociateExternalConnectionRequest & keyof DisassociateExternalConnectionRequest & keyof DisassociateExternalConnectionRequest & keyof DisassociateExternalConnectionRequest]: (DisassociateExternalConnectionRequest & DisassociateExternalConnectionRequest & DisassociateExternalConnectionRequest & DisassociateExternalConnectionRequest & DisassociateExternalConnectionRequest & DisassociateExternalConnectionRequest)[K]
    }>): Request<DisassociateExternalConnectionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateExternalConnection(
          this.ops["DisassociateExternalConnection"].applicator.apply(partialParams)
        );
    }

    invokeDisposePackageVersions(partialParams: ToOptional<{
      [K in keyof DisposePackageVersionsRequest & keyof DisposePackageVersionsRequest & keyof DisposePackageVersionsRequest & keyof DisposePackageVersionsRequest & keyof DisposePackageVersionsRequest & keyof DisposePackageVersionsRequest]: (DisposePackageVersionsRequest & DisposePackageVersionsRequest & DisposePackageVersionsRequest & DisposePackageVersionsRequest & DisposePackageVersionsRequest & DisposePackageVersionsRequest)[K]
    }>): Request<DisposePackageVersionsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disposePackageVersions(
          this.ops["DisposePackageVersions"].applicator.apply(partialParams)
        );
    }

    invokeGetAuthorizationToken(partialParams: ToOptional<{
      [K in keyof Omit<GetAuthorizationTokenRequest, "domain"> & keyof GetAuthorizationTokenRequest & keyof GetAuthorizationTokenRequest & keyof GetAuthorizationTokenRequest & keyof GetAuthorizationTokenRequest & keyof GetAuthorizationTokenRequest]: (Omit<GetAuthorizationTokenRequest, "domain"> & GetAuthorizationTokenRequest & GetAuthorizationTokenRequest & GetAuthorizationTokenRequest & GetAuthorizationTokenRequest & GetAuthorizationTokenRequest)[K]
    }>): Request<GetAuthorizationTokenResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAuthorizationToken(
          this.ops["GetAuthorizationToken"].applicator.apply(partialParams)
        );
    }

    invokeGetDomainPermissionsPolicy(partialParams: ToOptional<{
      [K in keyof Omit<GetDomainPermissionsPolicyRequest, "domain"> & keyof GetDomainPermissionsPolicyRequest & keyof GetDomainPermissionsPolicyRequest & keyof GetDomainPermissionsPolicyRequest & keyof GetDomainPermissionsPolicyRequest & keyof GetDomainPermissionsPolicyRequest]: (Omit<GetDomainPermissionsPolicyRequest, "domain"> & GetDomainPermissionsPolicyRequest & GetDomainPermissionsPolicyRequest & GetDomainPermissionsPolicyRequest & GetDomainPermissionsPolicyRequest & GetDomainPermissionsPolicyRequest)[K]
    }>): Request<GetDomainPermissionsPolicyResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDomainPermissionsPolicy(
          this.ops["GetDomainPermissionsPolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetPackageVersionAsset(partialParams: ToOptional<{
      [K in keyof Omit<GetPackageVersionAssetRequest, "domain"> & keyof GetPackageVersionAssetRequest & keyof GetPackageVersionAssetRequest & keyof GetPackageVersionAssetRequest & keyof GetPackageVersionAssetRequest & keyof GetPackageVersionAssetRequest]: (Omit<GetPackageVersionAssetRequest, "domain"> & GetPackageVersionAssetRequest & GetPackageVersionAssetRequest & GetPackageVersionAssetRequest & GetPackageVersionAssetRequest & GetPackageVersionAssetRequest)[K]
    }>): Request<GetPackageVersionAssetResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPackageVersionAsset(
          this.ops["GetPackageVersionAsset"].applicator.apply(partialParams)
        );
    }

    invokeGetPackageVersionReadme(partialParams: ToOptional<{
      [K in keyof Omit<GetPackageVersionReadmeRequest, "domain"> & keyof GetPackageVersionReadmeRequest & keyof GetPackageVersionReadmeRequest & keyof GetPackageVersionReadmeRequest & keyof GetPackageVersionReadmeRequest & keyof GetPackageVersionReadmeRequest]: (Omit<GetPackageVersionReadmeRequest, "domain"> & GetPackageVersionReadmeRequest & GetPackageVersionReadmeRequest & GetPackageVersionReadmeRequest & GetPackageVersionReadmeRequest & GetPackageVersionReadmeRequest)[K]
    }>): Request<GetPackageVersionReadmeResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPackageVersionReadme(
          this.ops["GetPackageVersionReadme"].applicator.apply(partialParams)
        );
    }

    invokeGetRepositoryEndpoint(partialParams: ToOptional<{
      [K in keyof Omit<GetRepositoryEndpointRequest, "domain"> & keyof GetRepositoryEndpointRequest & keyof GetRepositoryEndpointRequest & keyof GetRepositoryEndpointRequest & keyof GetRepositoryEndpointRequest & keyof GetRepositoryEndpointRequest]: (Omit<GetRepositoryEndpointRequest, "domain"> & GetRepositoryEndpointRequest & GetRepositoryEndpointRequest & GetRepositoryEndpointRequest & GetRepositoryEndpointRequest & GetRepositoryEndpointRequest)[K]
    }>): Request<GetRepositoryEndpointResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRepositoryEndpoint(
          this.ops["GetRepositoryEndpoint"].applicator.apply(partialParams)
        );
    }

    invokeGetRepositoryPermissionsPolicy(partialParams: ToOptional<{
      [K in keyof Omit<GetRepositoryPermissionsPolicyRequest, "domain"> & keyof GetRepositoryPermissionsPolicyRequest & keyof GetRepositoryPermissionsPolicyRequest & keyof GetRepositoryPermissionsPolicyRequest & keyof GetRepositoryPermissionsPolicyRequest & keyof GetRepositoryPermissionsPolicyRequest]: (Omit<GetRepositoryPermissionsPolicyRequest, "domain"> & GetRepositoryPermissionsPolicyRequest & GetRepositoryPermissionsPolicyRequest & GetRepositoryPermissionsPolicyRequest & GetRepositoryPermissionsPolicyRequest & GetRepositoryPermissionsPolicyRequest)[K]
    }>): Request<GetRepositoryPermissionsPolicyResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRepositoryPermissionsPolicy(
          this.ops["GetRepositoryPermissionsPolicy"].applicator.apply(partialParams)
        );
    }

    invokeListPackageVersionAssets(partialParams: ToOptional<{
      [K in keyof Omit<ListPackageVersionAssetsRequest, "domain"> & keyof ListPackageVersionAssetsRequest & keyof ListPackageVersionAssetsRequest & keyof ListPackageVersionAssetsRequest & keyof ListPackageVersionAssetsRequest & keyof ListPackageVersionAssetsRequest]: (Omit<ListPackageVersionAssetsRequest, "domain"> & ListPackageVersionAssetsRequest & ListPackageVersionAssetsRequest & ListPackageVersionAssetsRequest & ListPackageVersionAssetsRequest & ListPackageVersionAssetsRequest)[K]
    }>): Request<ListPackageVersionAssetsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPackageVersionAssets(
          this.ops["ListPackageVersionAssets"].applicator.apply(partialParams)
        );
    }

    invokeListPackageVersionDependencies(partialParams: ToOptional<{
      [K in keyof Omit<ListPackageVersionDependenciesRequest, "domain"> & keyof ListPackageVersionDependenciesRequest & keyof ListPackageVersionDependenciesRequest & keyof ListPackageVersionDependenciesRequest & keyof ListPackageVersionDependenciesRequest & keyof ListPackageVersionDependenciesRequest]: (Omit<ListPackageVersionDependenciesRequest, "domain"> & ListPackageVersionDependenciesRequest & ListPackageVersionDependenciesRequest & ListPackageVersionDependenciesRequest & ListPackageVersionDependenciesRequest & ListPackageVersionDependenciesRequest)[K]
    }>): Request<ListPackageVersionDependenciesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPackageVersionDependencies(
          this.ops["ListPackageVersionDependencies"].applicator.apply(partialParams)
        );
    }

    invokeListPackageVersions(partialParams: ToOptional<{
      [K in keyof Omit<ListPackageVersionsRequest, "domain"> & keyof ListPackageVersionsRequest & keyof ListPackageVersionsRequest & keyof ListPackageVersionsRequest & keyof ListPackageVersionsRequest & keyof ListPackageVersionsRequest]: (Omit<ListPackageVersionsRequest, "domain"> & ListPackageVersionsRequest & ListPackageVersionsRequest & ListPackageVersionsRequest & ListPackageVersionsRequest & ListPackageVersionsRequest)[K]
    }>): Request<ListPackageVersionsResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPackageVersions(
          this.ops["ListPackageVersions"].applicator.apply(partialParams)
        );
    }

    invokeListPackages(partialParams: ToOptional<{
      [K in keyof Omit<ListPackagesRequest, "domain"> & keyof ListPackagesRequest & keyof ListPackagesRequest & keyof ListPackagesRequest & keyof ListPackagesRequest & keyof ListPackagesRequest]: (Omit<ListPackagesRequest, "domain"> & ListPackagesRequest & ListPackagesRequest & ListPackagesRequest & ListPackagesRequest & ListPackagesRequest)[K]
    }>): Request<ListPackagesResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPackages(
          this.ops["ListPackages"].applicator.apply(partialParams)
        );
    }

    invokeListRepositoriesInDomain(partialParams: ToOptional<{
      [K in keyof Omit<ListRepositoriesInDomainRequest, "domain"> & keyof ListRepositoriesInDomainRequest & keyof ListRepositoriesInDomainRequest & keyof ListRepositoriesInDomainRequest & keyof ListRepositoriesInDomainRequest & keyof ListRepositoriesInDomainRequest]: (Omit<ListRepositoriesInDomainRequest, "domain"> & ListRepositoriesInDomainRequest & ListRepositoriesInDomainRequest & ListRepositoriesInDomainRequest & ListRepositoriesInDomainRequest & ListRepositoriesInDomainRequest)[K]
    }>): Request<ListRepositoriesInDomainResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRepositoriesInDomain(
          this.ops["ListRepositoriesInDomain"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof Omit<ListTagsForResourceRequest, "resourceArn">]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & Omit<ListTagsForResourceRequest, "resourceArn">)[K]
    }>): Request<ListTagsForResourceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokePutDomainPermissionsPolicy(partialParams: ToOptional<{
      [K in keyof Omit<PutDomainPermissionsPolicyRequest, "domain"> & keyof PutDomainPermissionsPolicyRequest & keyof Omit<PutDomainPermissionsPolicyRequest, "policyDocument"> & keyof PutDomainPermissionsPolicyRequest & keyof PutDomainPermissionsPolicyRequest & keyof PutDomainPermissionsPolicyRequest]: (Omit<PutDomainPermissionsPolicyRequest, "domain"> & PutDomainPermissionsPolicyRequest & Omit<PutDomainPermissionsPolicyRequest, "policyDocument"> & PutDomainPermissionsPolicyRequest & PutDomainPermissionsPolicyRequest & PutDomainPermissionsPolicyRequest)[K]
    }>): Request<PutDomainPermissionsPolicyResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putDomainPermissionsPolicy(
          this.ops["PutDomainPermissionsPolicy"].applicator.apply(partialParams)
        );
    }

    invokePutRepositoryPermissionsPolicy(partialParams: ToOptional<{
      [K in keyof Omit<PutRepositoryPermissionsPolicyRequest, "domain"> & keyof PutRepositoryPermissionsPolicyRequest & keyof Omit<PutRepositoryPermissionsPolicyRequest, "policyDocument"> & keyof PutRepositoryPermissionsPolicyRequest & keyof PutRepositoryPermissionsPolicyRequest & keyof PutRepositoryPermissionsPolicyRequest]: (Omit<PutRepositoryPermissionsPolicyRequest, "domain"> & PutRepositoryPermissionsPolicyRequest & Omit<PutRepositoryPermissionsPolicyRequest, "policyDocument"> & PutRepositoryPermissionsPolicyRequest & PutRepositoryPermissionsPolicyRequest & PutRepositoryPermissionsPolicyRequest)[K]
    }>): Request<PutRepositoryPermissionsPolicyResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putRepositoryPermissionsPolicy(
          this.ops["PutRepositoryPermissionsPolicy"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof Omit<TagResourceRequest, "resourceArn">]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & Omit<TagResourceRequest, "resourceArn">)[K]
    }>): Request<TagResourceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof Omit<UntagResourceRequest, "resourceArn">]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & Omit<UntagResourceRequest, "resourceArn">)[K]
    }>): Request<UntagResourceResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdatePackageVersionsStatus(partialParams: ToOptional<{
      [K in keyof Omit<UpdatePackageVersionsStatusRequest, "domain"> & keyof UpdatePackageVersionsStatusRequest & keyof UpdatePackageVersionsStatusRequest & keyof UpdatePackageVersionsStatusRequest & keyof Omit<UpdatePackageVersionsStatusRequest, "repository"> & keyof UpdatePackageVersionsStatusRequest]: (Omit<UpdatePackageVersionsStatusRequest, "domain"> & UpdatePackageVersionsStatusRequest & UpdatePackageVersionsStatusRequest & UpdatePackageVersionsStatusRequest & Omit<UpdatePackageVersionsStatusRequest, "repository"> & UpdatePackageVersionsStatusRequest)[K]
    }>): Request<UpdatePackageVersionsStatusResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePackageVersionsStatus(
          this.ops["UpdatePackageVersionsStatus"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRepository(partialParams: ToOptional<{
      [K in keyof Omit<UpdateRepositoryRequest, "domain"> & keyof UpdateRepositoryRequest & keyof UpdateRepositoryRequest & keyof UpdateRepositoryRequest & keyof Omit<UpdateRepositoryRequest, "repository"> & keyof UpdateRepositoryRequest]: (Omit<UpdateRepositoryRequest, "domain"> & UpdateRepositoryRequest & UpdateRepositoryRequest & UpdateRepositoryRequest & Omit<UpdateRepositoryRequest, "repository"> & UpdateRepositoryRequest)[K]
    }>): Request<UpdateRepositoryResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRepository(
          this.ops["UpdateRepository"].applicator.apply(partialParams)
        );
    }
}