
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
const schema = require("../apis/memorydb-2021-01-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.memorydb.Acl {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.memorydb.Acl>) {
        super(...args)
        this.client = new awssdk.MemoryDB()
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

    invokeBatchUpdateCluster(partialParams: ToOptional<{
      [K in keyof BatchUpdateClusterRequest & keyof BatchUpdateClusterRequest & keyof BatchUpdateClusterRequest & keyof BatchUpdateClusterRequest]: (BatchUpdateClusterRequest & BatchUpdateClusterRequest & BatchUpdateClusterRequest & BatchUpdateClusterRequest)[K]
    }>): Request<BatchUpdateClusterResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchUpdateCluster(
          this.ops["BatchUpdateCluster"].applicator.apply(partialParams)
        );
    }

    invokeCopySnapshot(partialParams: ToOptional<{
      [K in keyof CopySnapshotRequest & keyof CopySnapshotRequest & keyof CopySnapshotRequest & keyof CopySnapshotRequest]: (CopySnapshotRequest & CopySnapshotRequest & CopySnapshotRequest & CopySnapshotRequest)[K]
    }>): Request<CopySnapshotResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.copySnapshot(
          this.ops["CopySnapshot"].applicator.apply(partialParams)
        );
    }

    invokeCreateACL(partialParams: ToOptional<{
      [K in keyof CreateACLRequest & keyof CreateACLRequest & keyof CreateACLRequest & keyof CreateACLRequest]: (CreateACLRequest & CreateACLRequest & CreateACLRequest & CreateACLRequest)[K]
    }>): Request<CreateACLResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createACL(
          this.ops["CreateACL"].applicator.apply(partialParams)
        );
    }

    invokeCreateCluster(partialParams: ToOptional<{
      [K in keyof CreateClusterRequest & keyof CreateClusterRequest & keyof CreateClusterRequest & keyof CreateClusterRequest]: (CreateClusterRequest & CreateClusterRequest & CreateClusterRequest & CreateClusterRequest)[K]
    }>): Request<CreateClusterResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCluster(
          this.ops["CreateCluster"].applicator.apply(partialParams)
        );
    }

    invokeCreateParameterGroup(partialParams: ToOptional<{
      [K in keyof CreateParameterGroupRequest & keyof CreateParameterGroupRequest & keyof CreateParameterGroupRequest & keyof CreateParameterGroupRequest]: (CreateParameterGroupRequest & CreateParameterGroupRequest & CreateParameterGroupRequest & CreateParameterGroupRequest)[K]
    }>): Request<CreateParameterGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createParameterGroup(
          this.ops["CreateParameterGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateSnapshot(partialParams: ToOptional<{
      [K in keyof CreateSnapshotRequest & keyof CreateSnapshotRequest & keyof CreateSnapshotRequest & keyof CreateSnapshotRequest]: (CreateSnapshotRequest & CreateSnapshotRequest & CreateSnapshotRequest & CreateSnapshotRequest)[K]
    }>): Request<CreateSnapshotResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSnapshot(
          this.ops["CreateSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeCreateSubnetGroup(partialParams: ToOptional<{
      [K in keyof CreateSubnetGroupRequest & keyof CreateSubnetGroupRequest & keyof CreateSubnetGroupRequest & keyof CreateSubnetGroupRequest]: (CreateSubnetGroupRequest & CreateSubnetGroupRequest & CreateSubnetGroupRequest & CreateSubnetGroupRequest)[K]
    }>): Request<CreateSubnetGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSubnetGroup(
          this.ops["CreateSubnetGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateUser(partialParams: ToOptional<{
      [K in keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest]: (CreateUserRequest & CreateUserRequest & CreateUserRequest & CreateUserRequest)[K]
    }>): Request<CreateUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUser(
          this.ops["CreateUser"].applicator.apply(partialParams)
        );
    }

    invokeDeleteACL(partialParams: ToOptional<{
      [K in keyof DeleteACLRequest & keyof DeleteACLRequest & keyof DeleteACLRequest & keyof DeleteACLRequest]: (DeleteACLRequest & DeleteACLRequest & DeleteACLRequest & DeleteACLRequest)[K]
    }>): Request<DeleteACLResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteACL(
          this.ops["DeleteACL"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCluster(partialParams: ToOptional<{
      [K in keyof DeleteClusterRequest & keyof DeleteClusterRequest & keyof DeleteClusterRequest & keyof DeleteClusterRequest]: (DeleteClusterRequest & DeleteClusterRequest & DeleteClusterRequest & DeleteClusterRequest)[K]
    }>): Request<DeleteClusterResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCluster(
          this.ops["DeleteCluster"].applicator.apply(partialParams)
        );
    }

    invokeDeleteParameterGroup(partialParams: ToOptional<{
      [K in keyof DeleteParameterGroupRequest & keyof DeleteParameterGroupRequest & keyof DeleteParameterGroupRequest & keyof DeleteParameterGroupRequest]: (DeleteParameterGroupRequest & DeleteParameterGroupRequest & DeleteParameterGroupRequest & DeleteParameterGroupRequest)[K]
    }>): Request<DeleteParameterGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteParameterGroup(
          this.ops["DeleteParameterGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteSnapshotRequest & keyof DeleteSnapshotRequest & keyof DeleteSnapshotRequest & keyof DeleteSnapshotRequest]: (DeleteSnapshotRequest & DeleteSnapshotRequest & DeleteSnapshotRequest & DeleteSnapshotRequest)[K]
    }>): Request<DeleteSnapshotResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSnapshot(
          this.ops["DeleteSnapshot"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSubnetGroup(partialParams: ToOptional<{
      [K in keyof DeleteSubnetGroupRequest & keyof DeleteSubnetGroupRequest & keyof DeleteSubnetGroupRequest & keyof DeleteSubnetGroupRequest]: (DeleteSubnetGroupRequest & DeleteSubnetGroupRequest & DeleteSubnetGroupRequest & DeleteSubnetGroupRequest)[K]
    }>): Request<DeleteSubnetGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSubnetGroup(
          this.ops["DeleteSubnetGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteUser(partialParams: ToOptional<{
      [K in keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest]: (DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest)[K]
    }>): Request<DeleteUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUser(
          this.ops["DeleteUser"].applicator.apply(partialParams)
        );
    }

    invokeDescribeParameters(partialParams: ToOptional<{
      [K in keyof DescribeParametersRequest & keyof DescribeParametersRequest & keyof DescribeParametersRequest & keyof DescribeParametersRequest]: (DescribeParametersRequest & DescribeParametersRequest & DescribeParametersRequest & DescribeParametersRequest)[K]
    }>): Request<DescribeParametersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeParameters(
          this.ops["DescribeParameters"].applicator.apply(partialParams)
        );
    }

    invokeFailoverShard(partialParams: ToOptional<{
      [K in keyof FailoverShardRequest & keyof FailoverShardRequest & keyof FailoverShardRequest & keyof FailoverShardRequest]: (FailoverShardRequest & FailoverShardRequest & FailoverShardRequest & FailoverShardRequest)[K]
    }>): Request<FailoverShardResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.failoverShard(
          this.ops["FailoverShard"].applicator.apply(partialParams)
        );
    }

    invokeListAllowedNodeTypeUpdates(partialParams: ToOptional<{
      [K in keyof ListAllowedNodeTypeUpdatesRequest & keyof ListAllowedNodeTypeUpdatesRequest & keyof ListAllowedNodeTypeUpdatesRequest & keyof ListAllowedNodeTypeUpdatesRequest]: (ListAllowedNodeTypeUpdatesRequest & ListAllowedNodeTypeUpdatesRequest & ListAllowedNodeTypeUpdatesRequest & ListAllowedNodeTypeUpdatesRequest)[K]
    }>): Request<ListAllowedNodeTypeUpdatesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAllowedNodeTypeUpdates(
          this.ops["ListAllowedNodeTypeUpdates"].applicator.apply(partialParams)
        );
    }

    invokeListTags(partialParams: ToOptional<{
      [K in keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest]: (ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest)[K]
    }>): Request<ListTagsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTags(
          this.ops["ListTags"].applicator.apply(partialParams)
        );
    }

    invokeResetParameterGroup(partialParams: ToOptional<{
      [K in keyof ResetParameterGroupRequest & keyof ResetParameterGroupRequest & keyof ResetParameterGroupRequest & keyof ResetParameterGroupRequest]: (ResetParameterGroupRequest & ResetParameterGroupRequest & ResetParameterGroupRequest & ResetParameterGroupRequest)[K]
    }>): Request<ResetParameterGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetParameterGroup(
          this.ops["ResetParameterGroup"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateACL(partialParams: ToOptional<{
      [K in keyof UpdateACLRequest & keyof UpdateACLRequest & keyof UpdateACLRequest & keyof UpdateACLRequest]: (UpdateACLRequest & UpdateACLRequest & UpdateACLRequest & UpdateACLRequest)[K]
    }>): Request<UpdateACLResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateACL(
          this.ops["UpdateACL"].applicator.apply(partialParams)
        );
    }

    invokeUpdateCluster(partialParams: ToOptional<{
      [K in keyof UpdateClusterRequest & keyof UpdateClusterRequest & keyof UpdateClusterRequest & keyof UpdateClusterRequest]: (UpdateClusterRequest & UpdateClusterRequest & UpdateClusterRequest & UpdateClusterRequest)[K]
    }>): Request<UpdateClusterResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCluster(
          this.ops["UpdateCluster"].applicator.apply(partialParams)
        );
    }

    invokeUpdateParameterGroup(partialParams: ToOptional<{
      [K in keyof UpdateParameterGroupRequest & keyof UpdateParameterGroupRequest & keyof UpdateParameterGroupRequest & keyof UpdateParameterGroupRequest]: (UpdateParameterGroupRequest & UpdateParameterGroupRequest & UpdateParameterGroupRequest & UpdateParameterGroupRequest)[K]
    }>): Request<UpdateParameterGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateParameterGroup(
          this.ops["UpdateParameterGroup"].applicator.apply(partialParams)
        );
    }

    invokeUpdateSubnetGroup(partialParams: ToOptional<{
      [K in keyof UpdateSubnetGroupRequest & keyof UpdateSubnetGroupRequest & keyof UpdateSubnetGroupRequest & keyof UpdateSubnetGroupRequest]: (UpdateSubnetGroupRequest & UpdateSubnetGroupRequest & UpdateSubnetGroupRequest & UpdateSubnetGroupRequest)[K]
    }>): Request<UpdateSubnetGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSubnetGroup(
          this.ops["UpdateSubnetGroup"].applicator.apply(partialParams)
        );
    }

    invokeUpdateUser(partialParams: ToOptional<{
      [K in keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest]: (UpdateUserRequest & UpdateUserRequest & UpdateUserRequest & UpdateUserRequest)[K]
    }>): Request<UpdateUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUser(
          this.ops["UpdateUser"].applicator.apply(partialParams)
        );
    }
}