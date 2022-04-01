
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
    DescribeClustersRequest,
    DescribeDefaultParametersRequest,
    DescribeEventsRequest,
    DescribeParameterGroupsRequest,
    DescribeParametersRequest,
    DescribeSubnetGroupsRequest,
    IncreaseReplicationFactorRequest,
    ListTagsRequest,
    RebootNodeRequest,
    TagResourceRequest,
    UntagResourceRequest,
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
    DescribeClustersResponse,
    DescribeDefaultParametersResponse,
    DescribeEventsResponse,
    DescribeParameterGroupsResponse,
    DescribeParametersResponse,
    DescribeSubnetGroupsResponse,
    IncreaseReplicationFactorResponse,
    ListTagsResponse,
    RebootNodeResponse,
    TagResourceResponse,
    UntagResourceResponse,
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

export default class extends aws.dax.ParameterGroup {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.dax.ParameterGroup>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.DAX()
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

    invokeCreateCluster(partialParams: ToOptional<{
      [K in keyof CreateClusterRequest]: (CreateClusterRequest)[K]
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
      [K in keyof CreateSubnetGroupRequest]: (CreateSubnetGroupRequest)[K]
    }>): Request<CreateSubnetGroupResponse, AWSError> {
        this.boot();
        return this.client.createSubnetGroup(
          this.ops["CreateSubnetGroup"].apply(partialParams)
        );
    }

    invokeDecreaseReplicationFactor(partialParams: ToOptional<{
      [K in keyof DecreaseReplicationFactorRequest]: (DecreaseReplicationFactorRequest)[K]
    }>): Request<DecreaseReplicationFactorResponse, AWSError> {
        this.boot();
        return this.client.decreaseReplicationFactor(
          this.ops["DecreaseReplicationFactor"].apply(partialParams)
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
      [K in keyof DeleteParameterGroupRequest & keyof Omit<DeleteParameterGroupRequest, "ParameterGroupName">]: (DeleteParameterGroupRequest)[K]
    }>): Request<DeleteParameterGroupResponse, AWSError> {
        this.boot();
        return this.client.deleteParameterGroup(
          this.ops["DeleteParameterGroup"].apply(partialParams)
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

    invokeDescribeClusters(partialParams: ToOptional<{
      [K in keyof DescribeClustersRequest]: (DescribeClustersRequest)[K]
    }>): Request<DescribeClustersResponse, AWSError> {
        this.boot();
        return this.client.describeClusters(
          this.ops["DescribeClusters"].apply(partialParams)
        );
    }

    invokeDescribeDefaultParameters(partialParams: ToOptional<{
      [K in keyof DescribeDefaultParametersRequest]: (DescribeDefaultParametersRequest)[K]
    }>): Request<DescribeDefaultParametersResponse, AWSError> {
        this.boot();
        return this.client.describeDefaultParameters(
          this.ops["DescribeDefaultParameters"].apply(partialParams)
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
      [K in keyof DescribeParametersRequest & keyof Omit<DescribeParametersRequest, "ParameterGroupName">]: (DescribeParametersRequest)[K]
    }>): Request<DescribeParametersResponse, AWSError> {
        this.boot();
        return this.client.describeParameters(
          this.ops["DescribeParameters"].apply(partialParams)
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

    invokeIncreaseReplicationFactor(partialParams: ToOptional<{
      [K in keyof IncreaseReplicationFactorRequest]: (IncreaseReplicationFactorRequest)[K]
    }>): Request<IncreaseReplicationFactorResponse, AWSError> {
        this.boot();
        return this.client.increaseReplicationFactor(
          this.ops["IncreaseReplicationFactor"].apply(partialParams)
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

    invokeRebootNode(partialParams: ToOptional<{
      [K in keyof RebootNodeRequest]: (RebootNodeRequest)[K]
    }>): Request<RebootNodeResponse, AWSError> {
        this.boot();
        return this.client.rebootNode(
          this.ops["RebootNode"].apply(partialParams)
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

    invokeUpdateCluster(partialParams: ToOptional<{
      [K in keyof UpdateClusterRequest]: (UpdateClusterRequest)[K]
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
      [K in keyof UpdateSubnetGroupRequest]: (UpdateSubnetGroupRequest)[K]
    }>): Request<UpdateSubnetGroupResponse, AWSError> {
        this.boot();
        return this.client.updateSubnetGroup(
          this.ops["UpdateSubnetGroup"].apply(partialParams)
        );
    }
}