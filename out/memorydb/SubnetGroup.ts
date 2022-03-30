
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    BatchUpdateClusterRequest,
    CopySnapshotRequest,
    CreateACLRequest,
    CreateClusterRequest,
    CreateParameterGroupRequest,
    CreateSnapshotRequest,
    CreateSubnetGroupRequest,
    CreateUserRequest,
    DeleteACLRequest,
    DeleteClusterRequest,
    DeleteParameterGroupRequest,
    DeleteSnapshotRequest,
    DeleteSubnetGroupRequest,
    DeleteUserRequest,
    DescribeParametersRequest,
    FailoverShardRequest,
    ListAllowedNodeTypeUpdatesRequest,
    ListTagsRequest,
    ResetParameterGroupRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateACLRequest,
    UpdateClusterRequest,
    UpdateParameterGroupRequest,
    UpdateSubnetGroupRequest,
    UpdateUserRequest,
    BatchUpdateClusterResponse,
    CopySnapshotResponse,
    CreateACLResponse,
    CreateClusterResponse,
    CreateParameterGroupResponse,
    CreateSnapshotResponse,
    CreateSubnetGroupResponse,
    CreateUserResponse,
    DeleteACLResponse,
    DeleteClusterResponse,
    DeleteParameterGroupResponse,
    DeleteSnapshotResponse,
    DeleteSubnetGroupResponse,
    DeleteUserResponse,
    DescribeParametersResponse,
    FailoverShardResponse,
    ListAllowedNodeTypeUpdatesResponse,
    ListTagsResponse,
    ResetParameterGroupResponse,
    TagResourceResponse,
    UntagResourceResponse,
    UpdateACLResponse,
    UpdateClusterResponse,
    UpdateParameterGroupResponse,
    UpdateSubnetGroupResponse,
    UpdateUserResponse
} from "aws-sdk/clients/memorydb";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.memorydb.SubnetGroup {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.memorydb.SubnetGroup>) {
        super(...args)
        this.client = new awssdk.MemoryDB()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/memorydb-2021-01-01.normal.json"), this.client)
    }

    invokeBatchUpdateCluster(partialParams: ToOptional<{
      [K in keyof BatchUpdateClusterRequest & keyof BatchUpdateClusterRequest & keyof BatchUpdateClusterRequest & keyof BatchUpdateClusterRequest & keyof BatchUpdateClusterRequest]: (BatchUpdateClusterRequest & BatchUpdateClusterRequest & BatchUpdateClusterRequest & BatchUpdateClusterRequest & BatchUpdateClusterRequest)[K]
    }>): BatchUpdateClusterResponse {
        return this.client.batchUpdateCluster(
            this.ops["BatchUpdateCluster"].apply(partialParams)
        );
    }

    invokeCopySnapshot(partialParams: ToOptional<{
      [K in keyof CopySnapshotRequest & keyof CopySnapshotRequest & keyof CopySnapshotRequest & keyof CopySnapshotRequest & keyof CopySnapshotRequest]: (CopySnapshotRequest & CopySnapshotRequest & CopySnapshotRequest & CopySnapshotRequest & CopySnapshotRequest)[K]
    }>): CopySnapshotResponse {
        return this.client.copySnapshot(
            this.ops["CopySnapshot"].apply(partialParams)
        );
    }

    invokeCreateACL(partialParams: ToOptional<{
      [K in keyof CreateACLRequest & keyof CreateACLRequest & keyof CreateACLRequest & keyof CreateACLRequest & keyof CreateACLRequest]: (CreateACLRequest & CreateACLRequest & CreateACLRequest & CreateACLRequest & CreateACLRequest)[K]
    }>): CreateACLResponse {
        return this.client.createACL(
            this.ops["CreateACL"].apply(partialParams)
        );
    }

    invokeCreateCluster(partialParams: ToOptional<{
      [K in keyof CreateClusterRequest & keyof CreateClusterRequest & keyof CreateClusterRequest & keyof CreateClusterRequest & keyof CreateClusterRequest]: (CreateClusterRequest & CreateClusterRequest & CreateClusterRequest & CreateClusterRequest & CreateClusterRequest)[K]
    }>): CreateClusterResponse {
        return this.client.createCluster(
            this.ops["CreateCluster"].apply(partialParams)
        );
    }

    invokeCreateParameterGroup(partialParams: ToOptional<{
      [K in keyof CreateParameterGroupRequest & keyof CreateParameterGroupRequest & keyof CreateParameterGroupRequest & keyof CreateParameterGroupRequest & keyof CreateParameterGroupRequest]: (CreateParameterGroupRequest & CreateParameterGroupRequest & CreateParameterGroupRequest & CreateParameterGroupRequest & CreateParameterGroupRequest)[K]
    }>): CreateParameterGroupResponse {
        return this.client.createParameterGroup(
            this.ops["CreateParameterGroup"].apply(partialParams)
        );
    }

    invokeCreateSnapshot(partialParams: ToOptional<{
      [K in keyof CreateSnapshotRequest & keyof CreateSnapshotRequest & keyof CreateSnapshotRequest & keyof CreateSnapshotRequest & keyof CreateSnapshotRequest]: (CreateSnapshotRequest & CreateSnapshotRequest & CreateSnapshotRequest & CreateSnapshotRequest & CreateSnapshotRequest)[K]
    }>): CreateSnapshotResponse {
        return this.client.createSnapshot(
            this.ops["CreateSnapshot"].apply(partialParams)
        );
    }

    invokeCreateSubnetGroup(partialParams: ToOptional<{
      [K in keyof CreateSubnetGroupRequest & keyof CreateSubnetGroupRequest & keyof CreateSubnetGroupRequest & keyof CreateSubnetGroupRequest & keyof CreateSubnetGroupRequest]: (CreateSubnetGroupRequest & CreateSubnetGroupRequest & CreateSubnetGroupRequest & CreateSubnetGroupRequest & CreateSubnetGroupRequest)[K]
    }>): CreateSubnetGroupResponse {
        return this.client.createSubnetGroup(
            this.ops["CreateSubnetGroup"].apply(partialParams)
        );
    }

    invokeCreateUser(partialParams: ToOptional<{
      [K in keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest]: (CreateUserRequest & CreateUserRequest & CreateUserRequest & CreateUserRequest & CreateUserRequest)[K]
    }>): CreateUserResponse {
        return this.client.createUser(
            this.ops["CreateUser"].apply(partialParams)
        );
    }

    invokeDeleteACL(partialParams: ToOptional<{
      [K in keyof DeleteACLRequest & keyof DeleteACLRequest & keyof DeleteACLRequest & keyof DeleteACLRequest & keyof DeleteACLRequest]: (DeleteACLRequest & DeleteACLRequest & DeleteACLRequest & DeleteACLRequest & DeleteACLRequest)[K]
    }>): DeleteACLResponse {
        return this.client.deleteACL(
            this.ops["DeleteACL"].apply(partialParams)
        );
    }

    invokeDeleteCluster(partialParams: ToOptional<{
      [K in keyof DeleteClusterRequest & keyof DeleteClusterRequest & keyof DeleteClusterRequest & keyof DeleteClusterRequest & keyof DeleteClusterRequest]: (DeleteClusterRequest & DeleteClusterRequest & DeleteClusterRequest & DeleteClusterRequest & DeleteClusterRequest)[K]
    }>): DeleteClusterResponse {
        return this.client.deleteCluster(
            this.ops["DeleteCluster"].apply(partialParams)
        );
    }

    invokeDeleteParameterGroup(partialParams: ToOptional<{
      [K in keyof DeleteParameterGroupRequest & keyof DeleteParameterGroupRequest & keyof DeleteParameterGroupRequest & keyof DeleteParameterGroupRequest & keyof DeleteParameterGroupRequest]: (DeleteParameterGroupRequest & DeleteParameterGroupRequest & DeleteParameterGroupRequest & DeleteParameterGroupRequest & DeleteParameterGroupRequest)[K]
    }>): DeleteParameterGroupResponse {
        return this.client.deleteParameterGroup(
            this.ops["DeleteParameterGroup"].apply(partialParams)
        );
    }

    invokeDeleteSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteSnapshotRequest & keyof DeleteSnapshotRequest & keyof DeleteSnapshotRequest & keyof DeleteSnapshotRequest & keyof DeleteSnapshotRequest]: (DeleteSnapshotRequest & DeleteSnapshotRequest & DeleteSnapshotRequest & DeleteSnapshotRequest & DeleteSnapshotRequest)[K]
    }>): DeleteSnapshotResponse {
        return this.client.deleteSnapshot(
            this.ops["DeleteSnapshot"].apply(partialParams)
        );
    }

    invokeDeleteSubnetGroup(partialParams: ToOptional<{
      [K in keyof DeleteSubnetGroupRequest & keyof DeleteSubnetGroupRequest & keyof DeleteSubnetGroupRequest & keyof DeleteSubnetGroupRequest & keyof DeleteSubnetGroupRequest]: (DeleteSubnetGroupRequest & DeleteSubnetGroupRequest & DeleteSubnetGroupRequest & DeleteSubnetGroupRequest & DeleteSubnetGroupRequest)[K]
    }>): DeleteSubnetGroupResponse {
        return this.client.deleteSubnetGroup(
            this.ops["DeleteSubnetGroup"].apply(partialParams)
        );
    }

    invokeDeleteUser(partialParams: ToOptional<{
      [K in keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest]: (DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest)[K]
    }>): DeleteUserResponse {
        return this.client.deleteUser(
            this.ops["DeleteUser"].apply(partialParams)
        );
    }

    invokeDescribeParameters(partialParams: ToOptional<{
      [K in keyof DescribeParametersRequest & keyof DescribeParametersRequest & keyof DescribeParametersRequest & keyof DescribeParametersRequest & keyof DescribeParametersRequest]: (DescribeParametersRequest & DescribeParametersRequest & DescribeParametersRequest & DescribeParametersRequest & DescribeParametersRequest)[K]
    }>): DescribeParametersResponse {
        return this.client.describeParameters(
            this.ops["DescribeParameters"].apply(partialParams)
        );
    }

    invokeFailoverShard(partialParams: ToOptional<{
      [K in keyof FailoverShardRequest & keyof FailoverShardRequest & keyof FailoverShardRequest & keyof FailoverShardRequest & keyof FailoverShardRequest]: (FailoverShardRequest & FailoverShardRequest & FailoverShardRequest & FailoverShardRequest & FailoverShardRequest)[K]
    }>): FailoverShardResponse {
        return this.client.failoverShard(
            this.ops["FailoverShard"].apply(partialParams)
        );
    }

    invokeListAllowedNodeTypeUpdates(partialParams: ToOptional<{
      [K in keyof ListAllowedNodeTypeUpdatesRequest & keyof ListAllowedNodeTypeUpdatesRequest & keyof ListAllowedNodeTypeUpdatesRequest & keyof ListAllowedNodeTypeUpdatesRequest & keyof ListAllowedNodeTypeUpdatesRequest]: (ListAllowedNodeTypeUpdatesRequest & ListAllowedNodeTypeUpdatesRequest & ListAllowedNodeTypeUpdatesRequest & ListAllowedNodeTypeUpdatesRequest & ListAllowedNodeTypeUpdatesRequest)[K]
    }>): ListAllowedNodeTypeUpdatesResponse {
        return this.client.listAllowedNodeTypeUpdates(
            this.ops["ListAllowedNodeTypeUpdates"].apply(partialParams)
        );
    }

    invokeListTags(partialParams: ToOptional<{
      [K in keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest]: (ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest)[K]
    }>): ListTagsResponse {
        return this.client.listTags(
            this.ops["ListTags"].apply(partialParams)
        );
    }

    invokeResetParameterGroup(partialParams: ToOptional<{
      [K in keyof ResetParameterGroupRequest & keyof ResetParameterGroupRequest & keyof ResetParameterGroupRequest & keyof ResetParameterGroupRequest & keyof ResetParameterGroupRequest]: (ResetParameterGroupRequest & ResetParameterGroupRequest & ResetParameterGroupRequest & ResetParameterGroupRequest & ResetParameterGroupRequest)[K]
    }>): ResetParameterGroupResponse {
        return this.client.resetParameterGroup(
            this.ops["ResetParameterGroup"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateACL(partialParams: ToOptional<{
      [K in keyof UpdateACLRequest & keyof UpdateACLRequest & keyof UpdateACLRequest & keyof UpdateACLRequest & keyof UpdateACLRequest]: (UpdateACLRequest & UpdateACLRequest & UpdateACLRequest & UpdateACLRequest & UpdateACLRequest)[K]
    }>): UpdateACLResponse {
        return this.client.updateACL(
            this.ops["UpdateACL"].apply(partialParams)
        );
    }

    invokeUpdateCluster(partialParams: ToOptional<{
      [K in keyof UpdateClusterRequest & keyof UpdateClusterRequest & keyof UpdateClusterRequest & keyof UpdateClusterRequest & keyof UpdateClusterRequest]: (UpdateClusterRequest & UpdateClusterRequest & UpdateClusterRequest & UpdateClusterRequest & UpdateClusterRequest)[K]
    }>): UpdateClusterResponse {
        return this.client.updateCluster(
            this.ops["UpdateCluster"].apply(partialParams)
        );
    }

    invokeUpdateParameterGroup(partialParams: ToOptional<{
      [K in keyof UpdateParameterGroupRequest & keyof UpdateParameterGroupRequest & keyof UpdateParameterGroupRequest & keyof UpdateParameterGroupRequest & keyof UpdateParameterGroupRequest]: (UpdateParameterGroupRequest & UpdateParameterGroupRequest & UpdateParameterGroupRequest & UpdateParameterGroupRequest & UpdateParameterGroupRequest)[K]
    }>): UpdateParameterGroupResponse {
        return this.client.updateParameterGroup(
            this.ops["UpdateParameterGroup"].apply(partialParams)
        );
    }

    invokeUpdateSubnetGroup(partialParams: ToOptional<{
      [K in keyof UpdateSubnetGroupRequest & keyof UpdateSubnetGroupRequest & keyof UpdateSubnetGroupRequest & keyof UpdateSubnetGroupRequest & keyof UpdateSubnetGroupRequest]: (UpdateSubnetGroupRequest & UpdateSubnetGroupRequest & UpdateSubnetGroupRequest & UpdateSubnetGroupRequest & UpdateSubnetGroupRequest)[K]
    }>): UpdateSubnetGroupResponse {
        return this.client.updateSubnetGroup(
            this.ops["UpdateSubnetGroup"].apply(partialParams)
        );
    }

    invokeUpdateUser(partialParams: ToOptional<{
      [K in keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest]: (UpdateUserRequest & UpdateUserRequest & UpdateUserRequest & UpdateUserRequest & UpdateUserRequest)[K]
    }>): UpdateUserResponse {
        return this.client.updateUser(
            this.ops["UpdateUser"].apply(partialParams)
        );
    }
}