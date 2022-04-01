
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CopyBackupToRegionRequest,
    CreateClusterRequest,
    CreateHsmRequest,
    DeleteBackupRequest,
    DeleteClusterRequest,
    DeleteHsmRequest,
    DescribeBackupsRequest,
    DescribeClustersRequest,
    InitializeClusterRequest,
    ListTagsRequest,
    ModifyBackupAttributesRequest,
    ModifyClusterRequest,
    RestoreBackupRequest,
    TagResourceRequest,
    UntagResourceRequest,
    CopyBackupToRegionResponse,
    CreateClusterResponse,
    CreateHsmResponse,
    DeleteBackupResponse,
    DeleteClusterResponse,
    DeleteHsmResponse,
    DescribeBackupsResponse,
    DescribeClustersResponse,
    InitializeClusterResponse,
    ListTagsResponse,
    ModifyBackupAttributesResponse,
    ModifyClusterResponse,
    RestoreBackupResponse,
    TagResourceResponse,
    UntagResourceResponse
} from "aws-sdk/clients/cloudhsmv2";
const schema = require("../apis/cloudhsmv2-2017-04-28.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.cloudhsmv2.Hsm {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.cloudhsmv2.Hsm>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.CloudHSMV2()
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

    invokeCopyBackupToRegion(partialParams: ToOptional<{
      [K in keyof CopyBackupToRegionRequest]: (CopyBackupToRegionRequest)[K]
    }>): Request<CopyBackupToRegionResponse, AWSError> {
        this.boot();
        return this.client.copyBackupToRegion(
          this.ops["CopyBackupToRegion"].apply(partialParams)
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

    invokeCreateHsm(partialParams: ToOptional<{
      [K in keyof CreateHsmRequest & keyof Omit<CreateHsmRequest, "ClusterId" | "AvailabilityZone">]: (CreateHsmRequest)[K]
    }>): Request<CreateHsmResponse, AWSError> {
        this.boot();
        return this.client.createHsm(
          this.ops["CreateHsm"].apply(partialParams)
        );
    }

    invokeDeleteBackup(partialParams: ToOptional<{
      [K in keyof DeleteBackupRequest]: (DeleteBackupRequest)[K]
    }>): Request<DeleteBackupResponse, AWSError> {
        this.boot();
        return this.client.deleteBackup(
          this.ops["DeleteBackup"].apply(partialParams)
        );
    }

    invokeDeleteCluster(partialParams: ToOptional<{
      [K in keyof DeleteClusterRequest & keyof Omit<DeleteClusterRequest, "ClusterId">]: (DeleteClusterRequest)[K]
    }>): Request<DeleteClusterResponse, AWSError> {
        this.boot();
        return this.client.deleteCluster(
          this.ops["DeleteCluster"].apply(partialParams)
        );
    }

    invokeDeleteHsm(partialParams: ToOptional<{
      [K in keyof DeleteHsmRequest & keyof Omit<DeleteHsmRequest, "ClusterId">]: (DeleteHsmRequest)[K]
    }>): Request<DeleteHsmResponse, AWSError> {
        this.boot();
        return this.client.deleteHsm(
          this.ops["DeleteHsm"].apply(partialParams)
        );
    }

    invokeDescribeBackups(partialParams: ToOptional<{
      [K in keyof DescribeBackupsRequest]: (DescribeBackupsRequest)[K]
    }>): Request<DescribeBackupsResponse, AWSError> {
        this.boot();
        return this.client.describeBackups(
          this.ops["DescribeBackups"].apply(partialParams)
        );
    }

    invokeDescribeClusters(partialParams: ToOptional<{
      [K in keyof DescribeClustersRequest]: (DescribeClustersRequest)[K]
    }>): Request<DescribeClustersResponse, AWSError> {
        this.boot();
        return this.client.describeClusters(
          this.ops["DescribeClusters"].apply(partialParams)
        );
    }

    invokeInitializeCluster(partialParams: ToOptional<{
      [K in keyof InitializeClusterRequest & keyof Omit<InitializeClusterRequest, "ClusterId">]: (InitializeClusterRequest)[K]
    }>): Request<InitializeClusterResponse, AWSError> {
        this.boot();
        return this.client.initializeCluster(
          this.ops["InitializeCluster"].apply(partialParams)
        );
    }

    invokeListTags(partialParams: ToOptional<{
      [K in keyof ListTagsRequest]: (ListTagsRequest)[K]
    }>): Request<ListTagsResponse, AWSError> {
        this.boot();
        return this.client.listTags(
          this.ops["ListTags"].apply(partialParams)
        );
    }

    invokeModifyBackupAttributes(partialParams: ToOptional<{
      [K in keyof ModifyBackupAttributesRequest]: (ModifyBackupAttributesRequest)[K]
    }>): Request<ModifyBackupAttributesResponse, AWSError> {
        this.boot();
        return this.client.modifyBackupAttributes(
          this.ops["ModifyBackupAttributes"].apply(partialParams)
        );
    }

    invokeModifyCluster(partialParams: ToOptional<{
      [K in keyof ModifyClusterRequest & keyof Omit<ModifyClusterRequest, "ClusterId">]: (ModifyClusterRequest)[K]
    }>): Request<ModifyClusterResponse, AWSError> {
        this.boot();
        return this.client.modifyCluster(
          this.ops["ModifyCluster"].apply(partialParams)
        );
    }

    invokeRestoreBackup(partialParams: ToOptional<{
      [K in keyof RestoreBackupRequest]: (RestoreBackupRequest)[K]
    }>): Request<RestoreBackupResponse, AWSError> {
        this.boot();
        return this.client.restoreBackup(
          this.ops["RestoreBackup"].apply(partialParams)
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
}