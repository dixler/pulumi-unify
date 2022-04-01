
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateClusterRequest,
    CreateParameterGroupRequest,
    CreateSnapshotRequest,
    CreateSubnetGroupRequest,
    DeleteClusterRequest,
    DeleteParameterGroupRequest,
    DeleteSnapshotRequest,
    DeleteSubnetGroupRequest,
    DescribeParametersRequest,
    FailoverShardRequest,
    ListAllowedNodeTypeUpdatesRequest,
    ResetParameterGroupRequest,
    UpdateClusterRequest,
    UpdateParameterGroupRequest,
    UpdateSubnetGroupRequest,
    CreateClusterResponse,
    CreateParameterGroupResponse,
    CreateSnapshotResponse,
    CreateSubnetGroupResponse,
    DeleteClusterResponse,
    DeleteParameterGroupResponse,
    DeleteSnapshotResponse,
    DeleteSubnetGroupResponse,
    DescribeParametersResponse,
    FailoverShardResponse,
    ListAllowedNodeTypeUpdatesResponse,
    ResetParameterGroupResponse,
    UpdateClusterResponse,
    UpdateParameterGroupResponse,
    UpdateSubnetGroupResponse
} from "aws-sdk/clients/memorydb";
const schema = require("../apis/memorydb-2021-01-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.memorydb.Cluster {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.memorydb.Cluster>) {
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

    invokeCreateCluster(partialParams: ToOptional<{
      [K in keyof CreateClusterRequest & keyof Omit<CreateClusterRequest, "ClusterName" | "NodeType">]: (CreateClusterRequest)[K]
    }>): Request<CreateClusterResponse, AWSError> {
        this.boot();
        return this.client.createCluster(
          this.ops["CreateCluster"].apply(partialParams)
        );
    }

    invokeCreateParameterGroup(partialParams: ToOptional<{
      [K in keyof CreateParameterGroupRequest & keyof Omit<CreateParameterGroupRequest, "ParameterGroupName">]: (CreateParameterGroupRequest)[K]
    }>): Request<CreateParameterGroupResponse, AWSError> {
        this.boot();
        return this.client.createParameterGroup(
          this.ops["CreateParameterGroup"].apply(partialParams)
        );
    }

    invokeCreateSnapshot(partialParams: ToOptional<{
      [K in keyof CreateSnapshotRequest & keyof Omit<CreateSnapshotRequest, "ClusterName" | "SnapshotName">]: (CreateSnapshotRequest)[K]
    }>): Request<CreateSnapshotResponse, AWSError> {
        this.boot();
        return this.client.createSnapshot(
          this.ops["CreateSnapshot"].apply(partialParams)
        );
    }

    invokeCreateSubnetGroup(partialParams: ToOptional<{
      [K in keyof CreateSubnetGroupRequest & keyof Omit<CreateSubnetGroupRequest, "SubnetGroupName">]: (CreateSubnetGroupRequest)[K]
    }>): Request<CreateSubnetGroupResponse, AWSError> {
        this.boot();
        return this.client.createSubnetGroup(
          this.ops["CreateSubnetGroup"].apply(partialParams)
        );
    }

    invokeDeleteCluster(partialParams: ToOptional<{
      [K in keyof DeleteClusterRequest & keyof Omit<DeleteClusterRequest, "ClusterName">]: (DeleteClusterRequest)[K]
    }>): Request<DeleteClusterResponse, AWSError> {
        this.boot();
        return this.client.deleteCluster(
          this.ops["DeleteCluster"].apply(partialParams)
        );
    }

    invokeDeleteParameterGroup(partialParams: ToOptional<{
      [K in keyof DeleteParameterGroupRequest & keyof Omit<DeleteParameterGroupRequest, "ParameterGroupName">]: (DeleteParameterGroupRequest)[K]
    }>): Request<DeleteParameterGroupResponse, AWSError> {
        this.boot();
        return this.client.deleteParameterGroup(
          this.ops["DeleteParameterGroup"].apply(partialParams)
        );
    }

    invokeDeleteSnapshot(partialParams: ToOptional<{
      [K in keyof DeleteSnapshotRequest & keyof Omit<DeleteSnapshotRequest, "SnapshotName">]: (DeleteSnapshotRequest)[K]
    }>): Request<DeleteSnapshotResponse, AWSError> {
        this.boot();
        return this.client.deleteSnapshot(
          this.ops["DeleteSnapshot"].apply(partialParams)
        );
    }

    invokeDeleteSubnetGroup(partialParams: ToOptional<{
      [K in keyof DeleteSubnetGroupRequest & keyof Omit<DeleteSubnetGroupRequest, "SubnetGroupName">]: (DeleteSubnetGroupRequest)[K]
    }>): Request<DeleteSubnetGroupResponse, AWSError> {
        this.boot();
        return this.client.deleteSubnetGroup(
          this.ops["DeleteSubnetGroup"].apply(partialParams)
        );
    }

    invokeDescribeParameters(partialParams: ToOptional<{
      [K in keyof DescribeParametersRequest & keyof Omit<DescribeParametersRequest, "ParameterGroupName">]: (DescribeParametersRequest)[K]
    }>): Request<DescribeParametersResponse, AWSError> {
        this.boot();
        return this.client.describeParameters(
          this.ops["DescribeParameters"].apply(partialParams)
        );
    }

    invokeFailoverShard(partialParams: ToOptional<{
      [K in keyof FailoverShardRequest & keyof Omit<FailoverShardRequest, "ClusterName">]: (FailoverShardRequest)[K]
    }>): Request<FailoverShardResponse, AWSError> {
        this.boot();
        return this.client.failoverShard(
          this.ops["FailoverShard"].apply(partialParams)
        );
    }

    invokeListAllowedNodeTypeUpdates(partialParams: ToOptional<{
      [K in keyof ListAllowedNodeTypeUpdatesRequest & keyof Omit<ListAllowedNodeTypeUpdatesRequest, "ClusterName">]: (ListAllowedNodeTypeUpdatesRequest)[K]
    }>): Request<ListAllowedNodeTypeUpdatesResponse, AWSError> {
        this.boot();
        return this.client.listAllowedNodeTypeUpdates(
          this.ops["ListAllowedNodeTypeUpdates"].apply(partialParams)
        );
    }

    invokeResetParameterGroup(partialParams: ToOptional<{
      [K in keyof ResetParameterGroupRequest & keyof Omit<ResetParameterGroupRequest, "ParameterGroupName">]: (ResetParameterGroupRequest)[K]
    }>): Request<ResetParameterGroupResponse, AWSError> {
        this.boot();
        return this.client.resetParameterGroup(
          this.ops["ResetParameterGroup"].apply(partialParams)
        );
    }

    invokeUpdateCluster(partialParams: ToOptional<{
      [K in keyof UpdateClusterRequest & keyof Omit<UpdateClusterRequest, "ClusterName">]: (UpdateClusterRequest)[K]
    }>): Request<UpdateClusterResponse, AWSError> {
        this.boot();
        return this.client.updateCluster(
          this.ops["UpdateCluster"].apply(partialParams)
        );
    }

    invokeUpdateParameterGroup(partialParams: ToOptional<{
      [K in keyof UpdateParameterGroupRequest & keyof Omit<UpdateParameterGroupRequest, "ParameterGroupName">]: (UpdateParameterGroupRequest)[K]
    }>): Request<UpdateParameterGroupResponse, AWSError> {
        this.boot();
        return this.client.updateParameterGroup(
          this.ops["UpdateParameterGroup"].apply(partialParams)
        );
    }

    invokeUpdateSubnetGroup(partialParams: ToOptional<{
      [K in keyof UpdateSubnetGroupRequest & keyof Omit<UpdateSubnetGroupRequest, "SubnetGroupName">]: (UpdateSubnetGroupRequest)[K]
    }>): Request<UpdateSubnetGroupResponse, AWSError> {
        this.boot();
        return this.client.updateSubnetGroup(
          this.ops["UpdateSubnetGroup"].apply(partialParams)
        );
    }
}