
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateClusterRequest,
    CreateParameterGroupRequest,
    CreateSubnetGroupRequest,
    DecreaseReplicationFactorRequest,
    DeleteClusterRequest,
    DeleteParameterGroupRequest,
    DeleteSubnetGroupRequest,
    DescribeParametersRequest,
    IncreaseReplicationFactorRequest,
    RebootNodeRequest,
    UpdateClusterRequest,
    UpdateParameterGroupRequest,
    UpdateSubnetGroupRequest,
    CreateClusterResponse,
    CreateParameterGroupResponse,
    CreateSubnetGroupResponse,
    DecreaseReplicationFactorResponse,
    DeleteClusterResponse,
    DeleteParameterGroupResponse,
    DeleteSubnetGroupResponse,
    DescribeParametersResponse,
    IncreaseReplicationFactorResponse,
    RebootNodeResponse,
    UpdateClusterResponse,
    UpdateParameterGroupResponse,
    UpdateSubnetGroupResponse
} from "aws-sdk/clients/dax";
const schema = require("../apis/dax-2017-04-19.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.dax.Cluster {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.dax.Cluster>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.DAX()
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
      [K in keyof CreateClusterRequest & keyof Omit<CreateClusterRequest, "ClusterName" | "NodeType" | "IamRoleArn">]: (CreateClusterRequest)[K]
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

    invokeCreateSubnetGroup(partialParams: ToOptional<{
      [K in keyof CreateSubnetGroupRequest & keyof Omit<CreateSubnetGroupRequest, "SubnetGroupName">]: (CreateSubnetGroupRequest)[K]
    }>): Request<CreateSubnetGroupResponse, AWSError> {
        this.boot();
        return this.client.createSubnetGroup(
          this.ops["CreateSubnetGroup"].apply(partialParams)
        );
    }

    invokeDecreaseReplicationFactor(partialParams: ToOptional<{
      [K in keyof DecreaseReplicationFactorRequest & keyof Omit<DecreaseReplicationFactorRequest, "ClusterName">]: (DecreaseReplicationFactorRequest)[K]
    }>): Request<DecreaseReplicationFactorResponse, AWSError> {
        this.boot();
        return this.client.decreaseReplicationFactor(
          this.ops["DecreaseReplicationFactor"].apply(partialParams)
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

    invokeIncreaseReplicationFactor(partialParams: ToOptional<{
      [K in keyof IncreaseReplicationFactorRequest & keyof Omit<IncreaseReplicationFactorRequest, "ClusterName">]: (IncreaseReplicationFactorRequest)[K]
    }>): Request<IncreaseReplicationFactorResponse, AWSError> {
        this.boot();
        return this.client.increaseReplicationFactor(
          this.ops["IncreaseReplicationFactor"].apply(partialParams)
        );
    }

    invokeRebootNode(partialParams: ToOptional<{
      [K in keyof RebootNodeRequest & keyof Omit<RebootNodeRequest, "ClusterName">]: (RebootNodeRequest)[K]
    }>): Request<RebootNodeResponse, AWSError> {
        this.boot();
        return this.client.rebootNode(
          this.ops["RebootNode"].apply(partialParams)
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