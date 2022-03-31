
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

export default class extends aws.cloudhsmv2.Cluster {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.cloudhsmv2.Cluster>) {
        super(...args)
        this.client = new awssdk.CloudHSMV2()
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

    invokeCopyBackupToRegion(partialParams: ToOptional<{
      [K in keyof CopyBackupToRegionRequest & keyof CopyBackupToRegionRequest & keyof CopyBackupToRegionRequest & keyof CopyBackupToRegionRequest & keyof CopyBackupToRegionRequest & keyof CopyBackupToRegionRequest]: (CopyBackupToRegionRequest & CopyBackupToRegionRequest & CopyBackupToRegionRequest & CopyBackupToRegionRequest & CopyBackupToRegionRequest & CopyBackupToRegionRequest)[K]
    }>): Request<CopyBackupToRegionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copyBackupToRegion(
          this.ops["CopyBackupToRegion"].applicator.apply(partialParams)
        );
    }

    invokeCreateCluster(partialParams: ToOptional<{
      [K in keyof CreateClusterRequest & keyof CreateClusterRequest & keyof CreateClusterRequest & keyof CreateClusterRequest & keyof CreateClusterRequest & keyof CreateClusterRequest]: (CreateClusterRequest & CreateClusterRequest & CreateClusterRequest & CreateClusterRequest & CreateClusterRequest & CreateClusterRequest)[K]
    }>): Request<CreateClusterResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCluster(
          this.ops["CreateCluster"].applicator.apply(partialParams)
        );
    }

    invokeCreateHsm(partialParams: ToOptional<{
      [K in keyof Omit<CreateHsmRequest, "ClusterId"> & keyof CreateHsmRequest & keyof CreateHsmRequest & keyof CreateHsmRequest & keyof CreateHsmRequest & keyof CreateHsmRequest]: (Omit<CreateHsmRequest, "ClusterId"> & CreateHsmRequest & CreateHsmRequest & CreateHsmRequest & CreateHsmRequest & CreateHsmRequest)[K]
    }>): Request<CreateHsmResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createHsm(
          this.ops["CreateHsm"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBackup(partialParams: ToOptional<{
      [K in keyof DeleteBackupRequest & keyof DeleteBackupRequest & keyof DeleteBackupRequest & keyof DeleteBackupRequest & keyof DeleteBackupRequest & keyof DeleteBackupRequest]: (DeleteBackupRequest & DeleteBackupRequest & DeleteBackupRequest & DeleteBackupRequest & DeleteBackupRequest & DeleteBackupRequest)[K]
    }>): Request<DeleteBackupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBackup(
          this.ops["DeleteBackup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCluster(partialParams: ToOptional<{
      [K in keyof Omit<DeleteClusterRequest, "ClusterId"> & keyof DeleteClusterRequest & keyof DeleteClusterRequest & keyof DeleteClusterRequest & keyof DeleteClusterRequest & keyof DeleteClusterRequest]: (Omit<DeleteClusterRequest, "ClusterId"> & DeleteClusterRequest & DeleteClusterRequest & DeleteClusterRequest & DeleteClusterRequest & DeleteClusterRequest)[K]
    }>): Request<DeleteClusterResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCluster(
          this.ops["DeleteCluster"].applicator.apply(partialParams)
        );
    }

    invokeDeleteHsm(partialParams: ToOptional<{
      [K in keyof Omit<DeleteHsmRequest, "ClusterId"> & keyof DeleteHsmRequest & keyof DeleteHsmRequest & keyof DeleteHsmRequest & keyof DeleteHsmRequest & keyof DeleteHsmRequest]: (Omit<DeleteHsmRequest, "ClusterId"> & DeleteHsmRequest & DeleteHsmRequest & DeleteHsmRequest & DeleteHsmRequest & DeleteHsmRequest)[K]
    }>): Request<DeleteHsmResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteHsm(
          this.ops["DeleteHsm"].applicator.apply(partialParams)
        );
    }

    invokeInitializeCluster(partialParams: ToOptional<{
      [K in keyof Omit<InitializeClusterRequest, "ClusterId"> & keyof InitializeClusterRequest & keyof InitializeClusterRequest & keyof InitializeClusterRequest & keyof InitializeClusterRequest & keyof InitializeClusterRequest]: (Omit<InitializeClusterRequest, "ClusterId"> & InitializeClusterRequest & InitializeClusterRequest & InitializeClusterRequest & InitializeClusterRequest & InitializeClusterRequest)[K]
    }>): Request<InitializeClusterResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.initializeCluster(
          this.ops["InitializeCluster"].applicator.apply(partialParams)
        );
    }

    invokeListTags(partialParams: ToOptional<{
      [K in keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest]: (ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest)[K]
    }>): Request<ListTagsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTags(
          this.ops["ListTags"].applicator.apply(partialParams)
        );
    }

    invokeModifyBackupAttributes(partialParams: ToOptional<{
      [K in keyof ModifyBackupAttributesRequest & keyof ModifyBackupAttributesRequest & keyof ModifyBackupAttributesRequest & keyof ModifyBackupAttributesRequest & keyof ModifyBackupAttributesRequest & keyof ModifyBackupAttributesRequest]: (ModifyBackupAttributesRequest & ModifyBackupAttributesRequest & ModifyBackupAttributesRequest & ModifyBackupAttributesRequest & ModifyBackupAttributesRequest & ModifyBackupAttributesRequest)[K]
    }>): Request<ModifyBackupAttributesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyBackupAttributes(
          this.ops["ModifyBackupAttributes"].applicator.apply(partialParams)
        );
    }

    invokeModifyCluster(partialParams: ToOptional<{
      [K in keyof Omit<ModifyClusterRequest, "ClusterId"> & keyof ModifyClusterRequest & keyof ModifyClusterRequest & keyof ModifyClusterRequest & keyof ModifyClusterRequest & keyof ModifyClusterRequest]: (Omit<ModifyClusterRequest, "ClusterId"> & ModifyClusterRequest & ModifyClusterRequest & ModifyClusterRequest & ModifyClusterRequest & ModifyClusterRequest)[K]
    }>): Request<ModifyClusterResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyCluster(
          this.ops["ModifyCluster"].applicator.apply(partialParams)
        );
    }

    invokeRestoreBackup(partialParams: ToOptional<{
      [K in keyof RestoreBackupRequest & keyof RestoreBackupRequest & keyof RestoreBackupRequest & keyof RestoreBackupRequest & keyof RestoreBackupRequest & keyof RestoreBackupRequest]: (RestoreBackupRequest & RestoreBackupRequest & RestoreBackupRequest & RestoreBackupRequest & RestoreBackupRequest & RestoreBackupRequest)[K]
    }>): Request<RestoreBackupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreBackup(
          this.ops["RestoreBackup"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }
}