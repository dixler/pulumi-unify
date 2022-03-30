
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.cloudhsmv2.Cluster {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.cloudhsmv2.Cluster>) {
        super(...args)
        this.client = new awssdk.CloudHSMV2()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/cloudhsmv2-2017-04-28.normal.json"), this.client)
    }

    invokeCopyBackupToRegion(partialParams: ToOptional<{
      [K in keyof CopyBackupToRegionRequest & keyof CopyBackupToRegionRequest & keyof CopyBackupToRegionRequest & keyof CopyBackupToRegionRequest & keyof CopyBackupToRegionRequest & keyof CopyBackupToRegionRequest]: (CopyBackupToRegionRequest & CopyBackupToRegionRequest & CopyBackupToRegionRequest & CopyBackupToRegionRequest & CopyBackupToRegionRequest & CopyBackupToRegionRequest)[K]
    }>): CopyBackupToRegionResponse {
        return this.client.copyBackupToRegion(
            this.ops["CopyBackupToRegion"].apply(partialParams)
        );
    }

    invokeCreateCluster(partialParams: ToOptional<{
      [K in keyof CreateClusterRequest & keyof CreateClusterRequest & keyof CreateClusterRequest & keyof CreateClusterRequest & keyof CreateClusterRequest & keyof CreateClusterRequest]: (CreateClusterRequest & CreateClusterRequest & CreateClusterRequest & CreateClusterRequest & CreateClusterRequest & CreateClusterRequest)[K]
    }>): CreateClusterResponse {
        return this.client.createCluster(
            this.ops["CreateCluster"].apply(partialParams)
        );
    }

    invokeCreateHsm(partialParams: ToOptional<{
      [K in keyof Omit<CreateHsmRequest, "ClusterId"> & keyof CreateHsmRequest & keyof CreateHsmRequest & keyof CreateHsmRequest & keyof CreateHsmRequest & keyof CreateHsmRequest]: (Omit<CreateHsmRequest, "ClusterId"> & CreateHsmRequest & CreateHsmRequest & CreateHsmRequest & CreateHsmRequest & CreateHsmRequest)[K]
    }>): CreateHsmResponse {
        return this.client.createHsm(
            this.ops["CreateHsm"].apply(partialParams)
        );
    }

    invokeDeleteBackup(partialParams: ToOptional<{
      [K in keyof DeleteBackupRequest & keyof DeleteBackupRequest & keyof DeleteBackupRequest & keyof DeleteBackupRequest & keyof DeleteBackupRequest & keyof DeleteBackupRequest]: (DeleteBackupRequest & DeleteBackupRequest & DeleteBackupRequest & DeleteBackupRequest & DeleteBackupRequest & DeleteBackupRequest)[K]
    }>): DeleteBackupResponse {
        return this.client.deleteBackup(
            this.ops["DeleteBackup"].apply(partialParams)
        );
    }

    invokeDeleteCluster(partialParams: ToOptional<{
      [K in keyof Omit<DeleteClusterRequest, "ClusterId"> & keyof DeleteClusterRequest & keyof DeleteClusterRequest & keyof DeleteClusterRequest & keyof DeleteClusterRequest & keyof DeleteClusterRequest]: (Omit<DeleteClusterRequest, "ClusterId"> & DeleteClusterRequest & DeleteClusterRequest & DeleteClusterRequest & DeleteClusterRequest & DeleteClusterRequest)[K]
    }>): DeleteClusterResponse {
        return this.client.deleteCluster(
            this.ops["DeleteCluster"].apply(partialParams)
        );
    }

    invokeDeleteHsm(partialParams: ToOptional<{
      [K in keyof Omit<DeleteHsmRequest, "ClusterId"> & keyof DeleteHsmRequest & keyof DeleteHsmRequest & keyof DeleteHsmRequest & keyof DeleteHsmRequest & keyof DeleteHsmRequest]: (Omit<DeleteHsmRequest, "ClusterId"> & DeleteHsmRequest & DeleteHsmRequest & DeleteHsmRequest & DeleteHsmRequest & DeleteHsmRequest)[K]
    }>): DeleteHsmResponse {
        return this.client.deleteHsm(
            this.ops["DeleteHsm"].apply(partialParams)
        );
    }

    invokeInitializeCluster(partialParams: ToOptional<{
      [K in keyof Omit<InitializeClusterRequest, "ClusterId"> & keyof InitializeClusterRequest & keyof InitializeClusterRequest & keyof InitializeClusterRequest & keyof InitializeClusterRequest & keyof InitializeClusterRequest]: (Omit<InitializeClusterRequest, "ClusterId"> & InitializeClusterRequest & InitializeClusterRequest & InitializeClusterRequest & InitializeClusterRequest & InitializeClusterRequest)[K]
    }>): InitializeClusterResponse {
        return this.client.initializeCluster(
            this.ops["InitializeCluster"].apply(partialParams)
        );
    }

    invokeListTags(partialParams: ToOptional<{
      [K in keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest]: (ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest)[K]
    }>): ListTagsResponse {
        return this.client.listTags(
            this.ops["ListTags"].apply(partialParams)
        );
    }

    invokeModifyBackupAttributes(partialParams: ToOptional<{
      [K in keyof ModifyBackupAttributesRequest & keyof ModifyBackupAttributesRequest & keyof ModifyBackupAttributesRequest & keyof ModifyBackupAttributesRequest & keyof ModifyBackupAttributesRequest & keyof ModifyBackupAttributesRequest]: (ModifyBackupAttributesRequest & ModifyBackupAttributesRequest & ModifyBackupAttributesRequest & ModifyBackupAttributesRequest & ModifyBackupAttributesRequest & ModifyBackupAttributesRequest)[K]
    }>): ModifyBackupAttributesResponse {
        return this.client.modifyBackupAttributes(
            this.ops["ModifyBackupAttributes"].apply(partialParams)
        );
    }

    invokeModifyCluster(partialParams: ToOptional<{
      [K in keyof Omit<ModifyClusterRequest, "ClusterId"> & keyof ModifyClusterRequest & keyof ModifyClusterRequest & keyof ModifyClusterRequest & keyof ModifyClusterRequest & keyof ModifyClusterRequest]: (Omit<ModifyClusterRequest, "ClusterId"> & ModifyClusterRequest & ModifyClusterRequest & ModifyClusterRequest & ModifyClusterRequest & ModifyClusterRequest)[K]
    }>): ModifyClusterResponse {
        return this.client.modifyCluster(
            this.ops["ModifyCluster"].apply(partialParams)
        );
    }

    invokeRestoreBackup(partialParams: ToOptional<{
      [K in keyof RestoreBackupRequest & keyof RestoreBackupRequest & keyof RestoreBackupRequest & keyof RestoreBackupRequest & keyof RestoreBackupRequest & keyof RestoreBackupRequest]: (RestoreBackupRequest & RestoreBackupRequest & RestoreBackupRequest & RestoreBackupRequest & RestoreBackupRequest & RestoreBackupRequest)[K]
    }>): RestoreBackupResponse {
        return this.client.restoreBackup(
            this.ops["RestoreBackup"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }
}