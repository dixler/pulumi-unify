
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
    DescribeACLsRequest,
    DescribeClustersRequest,
    DescribeEngineVersionsRequest,
    DescribeEventsRequest,
    DescribeParameterGroupsRequest,
    DescribeParametersRequest,
    DescribeServiceUpdatesRequest,
    DescribeSnapshotsRequest,
    DescribeSubnetGroupsRequest,
    DescribeUsersRequest,
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
    DescribeACLsResponse,
    DescribeClustersResponse,
    DescribeEngineVersionsResponse,
    DescribeEventsResponse,
    DescribeParameterGroupsResponse,
    DescribeParametersResponse,
    DescribeServiceUpdatesResponse,
    DescribeSnapshotsResponse,
    DescribeSubnetGroupsResponse,
    DescribeUsersResponse,
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
const schema = require("../apis/memorydb-2021-01-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.memorydb.User {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.memorydb.User>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.MemoryDB()
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

    invokeBatchUpdateCluster(partialParams: ToOptional<{
      [K in keyof BatchUpdateClusterRequest]: (BatchUpdateClusterRequest)[K]
    }>): Request<BatchUpdateClusterResponse, AWSError> {
        this.boot();
        return this.client.batchUpdateCluster(
          this.ops["BatchUpdateCluster"].apply(partialParams)
        );
    }

    invokeCopySnapshot(partialParams: ToOptional<{
      [K in keyof CopySnapshotRequest]: (CopySnapshotRequest)[K]
    }>): Request<CopySnapshotResponse, AWSError> {
        this.boot();
        return this.client.copySnapshot(
          this.ops["CopySnapshot"].apply(partialParams)
        );
    }

    invokeCreateACL(partialParams: ToOptional<{
      [K in keyof CreateACLRequest]: (CreateACLRequest)[K]
    }>): Request<CreateACLResponse, AWSError> {
        this.boot();
        return this.client.createACL(
          this.ops["CreateACL"].apply(partialParams)
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

    invokeCreateParameterGroup(partialParams: ToOptional<{
      [K in keyof CreateParameterGroupRequest]: (CreateParameterGroupRequest)[K]
    }>): Request<CreateParameterGroupResponse, AWSError> {
        this.boot();
        return this.client.createParameterGroup(
          this.ops["CreateParameterGroup"].apply(partialParams)
        );
    }

    invokeCreateSnapshot(partialParams: ToOptional<{
      [K in keyof CreateSnapshotRequest]: (CreateSnapshotRequest)[K]
    }>): Request<CreateSnapshotResponse, AWSError> {
        this.boot();
        return this.client.createSnapshot(
          this.ops["CreateSnapshot"].apply(partialParams)
        );
    }

    invokeCreateSubnetGroup(partialParams: ToOptional<{
      [K in keyof CreateSubnetGroupRequest]: (CreateSubnetGroupRequest)[K]
    }>): Request<CreateSubnetGroupResponse, AWSError> {
        this.boot();
        return this.client.createSubnetGroup(
          this.ops["CreateSubnetGroup"].apply(partialParams)
        );
    }

    invokeCreateUser(partialParams: ToOptional<{
      [K in keyof CreateUserRequest & keyof Omit<CreateUserRequest, "UserName" | "AccessString">]: (CreateUserRequest)[K]
    }>): Request<CreateUserResponse, AWSError> {
        this.boot();
        return this.client.createUser(
          this.ops["CreateUser"].apply(partialParams)
        );
    }

    invokeDeleteACL(partialParams: ToOptional<{
      [K in keyof DeleteACLRequest]: (DeleteACLRequest)[K]
    }>): Request<DeleteACLResponse, AWSError> {
        this.boot();
        return this.client.deleteACL(
          this.ops["DeleteACL"].apply(partialParams)
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

    invokeDeleteParameterGroup(partialParams: ToOptional<{
      [K in keyof DeleteParameterGroupRequest]: (DeleteParameterGroupRequest)[K]
    }>): Request<DeleteParameterGroupResponse, AWSError> {
        this.boot();
        return this.client.deleteParameterGroup(
          this.ops["DeleteParameterGroup"].apply(partialParams)
        );
    }

    invokeDeleteSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteSnapshotRequest]: (DeleteSnapshotRequest)[K]
    }>): Request<DeleteSnapshotResponse, AWSError> {
        this.boot();
        return this.client.deleteSnapshot(
          this.ops["DeleteSnapshot"].apply(partialParams)
        );
    }

    invokeDeleteSubnetGroup(partialParams: ToOptional<{
      [K in keyof DeleteSubnetGroupRequest]: (DeleteSubnetGroupRequest)[K]
    }>): Request<DeleteSubnetGroupResponse, AWSError> {
        this.boot();
        return this.client.deleteSubnetGroup(
          this.ops["DeleteSubnetGroup"].apply(partialParams)
        );
    }

    invokeDeleteUser(partialParams: ToOptional<{
      [K in keyof DeleteUserRequest & keyof Omit<DeleteUserRequest, "UserName">]: (DeleteUserRequest)[K]
    }>): Request<DeleteUserResponse, AWSError> {
        this.boot();
        return this.client.deleteUser(
          this.ops["DeleteUser"].apply(partialParams)
        );
    }

    invokeDescribeACLs(partialParams: ToOptional<{
      [K in keyof DescribeACLsRequest]: (DescribeACLsRequest)[K]
    }>): Request<DescribeACLsResponse, AWSError> {
        this.boot();
        return this.client.describeACLs(
          this.ops["DescribeACLs"].apply(partialParams)
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

    invokeDescribeEngineVersions(partialParams: ToOptional<{
      [K in keyof DescribeEngineVersionsRequest]: (DescribeEngineVersionsRequest)[K]
    }>): Request<DescribeEngineVersionsResponse, AWSError> {
        this.boot();
        return this.client.describeEngineVersions(
          this.ops["DescribeEngineVersions"].apply(partialParams)
        );
    }

    invokeDescribeEvents(partialParams: ToOptional<{
      [K in keyof DescribeEventsRequest]: (DescribeEventsRequest)[K]
    }>): Request<DescribeEventsResponse, AWSError> {
        this.boot();
        return this.client.describeEvents(
          this.ops["DescribeEvents"].apply(partialParams)
        );
    }

    invokeDescribeParameterGroups(partialParams: ToOptional<{
      [K in keyof DescribeParameterGroupsRequest]: (DescribeParameterGroupsRequest)[K]
    }>): Request<DescribeParameterGroupsResponse, AWSError> {
        this.boot();
        return this.client.describeParameterGroups(
          this.ops["DescribeParameterGroups"].apply(partialParams)
        );
    }

    invokeDescribeParameters(partialParams: ToOptional<{
      [K in keyof DescribeParametersRequest]: (DescribeParametersRequest)[K]
    }>): Request<DescribeParametersResponse, AWSError> {
        this.boot();
        return this.client.describeParameters(
          this.ops["DescribeParameters"].apply(partialParams)
        );
    }

    invokeDescribeServiceUpdates(partialParams: ToOptional<{
      [K in keyof DescribeServiceUpdatesRequest]: (DescribeServiceUpdatesRequest)[K]
    }>): Request<DescribeServiceUpdatesResponse, AWSError> {
        this.boot();
        return this.client.describeServiceUpdates(
          this.ops["DescribeServiceUpdates"].apply(partialParams)
        );
    }

    invokeDescribeSnapshots(partialParams: ToOptional<{
      [K in keyof DescribeSnapshotsRequest]: (DescribeSnapshotsRequest)[K]
    }>): Request<DescribeSnapshotsResponse, AWSError> {
        this.boot();
        return this.client.describeSnapshots(
          this.ops["DescribeSnapshots"].apply(partialParams)
        );
    }

    invokeDescribeSubnetGroups(partialParams: ToOptional<{
      [K in keyof DescribeSubnetGroupsRequest]: (DescribeSubnetGroupsRequest)[K]
    }>): Request<DescribeSubnetGroupsResponse, AWSError> {
        this.boot();
        return this.client.describeSubnetGroups(
          this.ops["DescribeSubnetGroups"].apply(partialParams)
        );
    }

    invokeDescribeUsers(partialParams: ToOptional<{
      [K in keyof DescribeUsersRequest]: (DescribeUsersRequest)[K]
    }>): Request<DescribeUsersResponse, AWSError> {
        this.boot();
        return this.client.describeUsers(
          this.ops["DescribeUsers"].apply(partialParams)
        );
    }

    invokeFailoverShard(partialParams: ToOptional<{
      [K in keyof FailoverShardRequest]: (FailoverShardRequest)[K]
    }>): Request<FailoverShardResponse, AWSError> {
        this.boot();
        return this.client.failoverShard(
          this.ops["FailoverShard"].apply(partialParams)
        );
    }

    invokeListAllowedNodeTypeUpdates(partialParams: ToOptional<{
      [K in keyof ListAllowedNodeTypeUpdatesRequest]: (ListAllowedNodeTypeUpdatesRequest)[K]
    }>): Request<ListAllowedNodeTypeUpdatesResponse, AWSError> {
        this.boot();
        return this.client.listAllowedNodeTypeUpdates(
          this.ops["ListAllowedNodeTypeUpdates"].apply(partialParams)
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

    invokeResetParameterGroup(partialParams: ToOptional<{
      [K in keyof ResetParameterGroupRequest]: (ResetParameterGroupRequest)[K]
    }>): Request<ResetParameterGroupResponse, AWSError> {
        this.boot();
        return this.client.resetParameterGroup(
          this.ops["ResetParameterGroup"].apply(partialParams)
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

    invokeUpdateACL(partialParams: ToOptional<{
      [K in keyof UpdateACLRequest]: (UpdateACLRequest)[K]
    }>): Request<UpdateACLResponse, AWSError> {
        this.boot();
        return this.client.updateACL(
          this.ops["UpdateACL"].apply(partialParams)
        );
    }

    invokeUpdateCluster(partialParams: ToOptional<{
      [K in keyof UpdateClusterRequest]: (UpdateClusterRequest)[K]
    }>): Request<UpdateClusterResponse, AWSError> {
        this.boot();
        return this.client.updateCluster(
          this.ops["UpdateCluster"].apply(partialParams)
        );
    }

    invokeUpdateParameterGroup(partialParams: ToOptional<{
      [K in keyof UpdateParameterGroupRequest]: (UpdateParameterGroupRequest)[K]
    }>): Request<UpdateParameterGroupResponse, AWSError> {
        this.boot();
        return this.client.updateParameterGroup(
          this.ops["UpdateParameterGroup"].apply(partialParams)
        );
    }

    invokeUpdateSubnetGroup(partialParams: ToOptional<{
      [K in keyof UpdateSubnetGroupRequest]: (UpdateSubnetGroupRequest)[K]
    }>): Request<UpdateSubnetGroupResponse, AWSError> {
        this.boot();
        return this.client.updateSubnetGroup(
          this.ops["UpdateSubnetGroup"].apply(partialParams)
        );
    }

    invokeUpdateUser(partialParams: ToOptional<{
      [K in keyof UpdateUserRequest & keyof Omit<UpdateUserRequest, "UserName">]: (UpdateUserRequest)[K]
    }>): Request<UpdateUserResponse, AWSError> {
        this.boot();
        return this.client.updateUser(
          this.ops["UpdateUser"].apply(partialParams)
        );
    }
}