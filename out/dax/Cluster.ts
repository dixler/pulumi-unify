
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
    DescribeParametersResponse,
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

export default class extends aws.dax.Cluster {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.dax.Cluster>) {
        super(...args)
        this.client = new awssdk.DAX()
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

    invokeCreateCluster(partialParams: ToOptional<{
      [K in keyof CreateClusterRequest & keyof CreateClusterRequest & keyof CreateClusterRequest & keyof CreateClusterRequest & keyof CreateClusterRequest & keyof CreateClusterRequest & keyof CreateClusterRequest & keyof CreateClusterRequest & keyof CreateClusterRequest & keyof CreateClusterRequest & keyof CreateClusterRequest & keyof CreateClusterRequest]: (CreateClusterRequest & CreateClusterRequest & CreateClusterRequest & CreateClusterRequest & CreateClusterRequest & CreateClusterRequest & CreateClusterRequest & CreateClusterRequest & CreateClusterRequest & CreateClusterRequest & CreateClusterRequest & CreateClusterRequest)[K]
    }>): Request<CreateClusterResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCluster(
          this.ops["CreateCluster"].applicator.apply(partialParams)
        );
    }

    invokeCreateParameterGroup(partialParams: ToOptional<{
      [K in keyof CreateParameterGroupRequest & keyof CreateParameterGroupRequest & keyof CreateParameterGroupRequest & keyof CreateParameterGroupRequest & keyof CreateParameterGroupRequest & keyof CreateParameterGroupRequest & keyof CreateParameterGroupRequest & keyof CreateParameterGroupRequest & keyof CreateParameterGroupRequest & keyof CreateParameterGroupRequest & keyof CreateParameterGroupRequest & keyof CreateParameterGroupRequest]: (CreateParameterGroupRequest & CreateParameterGroupRequest & CreateParameterGroupRequest & CreateParameterGroupRequest & CreateParameterGroupRequest & CreateParameterGroupRequest & CreateParameterGroupRequest & CreateParameterGroupRequest & CreateParameterGroupRequest & CreateParameterGroupRequest & CreateParameterGroupRequest & CreateParameterGroupRequest)[K]
    }>): Request<CreateParameterGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createParameterGroup(
          this.ops["CreateParameterGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateSubnetGroup(partialParams: ToOptional<{
      [K in keyof CreateSubnetGroupRequest & keyof CreateSubnetGroupRequest & keyof CreateSubnetGroupRequest & keyof CreateSubnetGroupRequest & keyof CreateSubnetGroupRequest & keyof CreateSubnetGroupRequest & keyof CreateSubnetGroupRequest & keyof CreateSubnetGroupRequest & keyof CreateSubnetGroupRequest & keyof CreateSubnetGroupRequest & keyof CreateSubnetGroupRequest & keyof CreateSubnetGroupRequest]: (CreateSubnetGroupRequest & CreateSubnetGroupRequest & CreateSubnetGroupRequest & CreateSubnetGroupRequest & CreateSubnetGroupRequest & CreateSubnetGroupRequest & CreateSubnetGroupRequest & CreateSubnetGroupRequest & CreateSubnetGroupRequest & CreateSubnetGroupRequest & CreateSubnetGroupRequest & CreateSubnetGroupRequest)[K]
    }>): Request<CreateSubnetGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSubnetGroup(
          this.ops["CreateSubnetGroup"].applicator.apply(partialParams)
        );
    }

    invokeDecreaseReplicationFactor(partialParams: ToOptional<{
      [K in keyof DecreaseReplicationFactorRequest & keyof DecreaseReplicationFactorRequest & keyof DecreaseReplicationFactorRequest & keyof DecreaseReplicationFactorRequest & keyof DecreaseReplicationFactorRequest & keyof DecreaseReplicationFactorRequest & keyof DecreaseReplicationFactorRequest & keyof DecreaseReplicationFactorRequest & keyof DecreaseReplicationFactorRequest & keyof DecreaseReplicationFactorRequest & keyof DecreaseReplicationFactorRequest & keyof DecreaseReplicationFactorRequest]: (DecreaseReplicationFactorRequest & DecreaseReplicationFactorRequest & DecreaseReplicationFactorRequest & DecreaseReplicationFactorRequest & DecreaseReplicationFactorRequest & DecreaseReplicationFactorRequest & DecreaseReplicationFactorRequest & DecreaseReplicationFactorRequest & DecreaseReplicationFactorRequest & DecreaseReplicationFactorRequest & DecreaseReplicationFactorRequest & DecreaseReplicationFactorRequest)[K]
    }>): Request<DecreaseReplicationFactorResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.decreaseReplicationFactor(
          this.ops["DecreaseReplicationFactor"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCluster(partialParams: ToOptional<{
      [K in keyof DeleteClusterRequest & keyof DeleteClusterRequest & keyof DeleteClusterRequest & keyof DeleteClusterRequest & keyof DeleteClusterRequest & keyof DeleteClusterRequest & keyof DeleteClusterRequest & keyof DeleteClusterRequest & keyof DeleteClusterRequest & keyof DeleteClusterRequest & keyof DeleteClusterRequest & keyof DeleteClusterRequest]: (DeleteClusterRequest & DeleteClusterRequest & DeleteClusterRequest & DeleteClusterRequest & DeleteClusterRequest & DeleteClusterRequest & DeleteClusterRequest & DeleteClusterRequest & DeleteClusterRequest & DeleteClusterRequest & DeleteClusterRequest & DeleteClusterRequest)[K]
    }>): Request<DeleteClusterResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCluster(
          this.ops["DeleteCluster"].applicator.apply(partialParams)
        );
    }

    invokeDeleteParameterGroup(partialParams: ToOptional<{
      [K in keyof DeleteParameterGroupRequest & keyof DeleteParameterGroupRequest & keyof DeleteParameterGroupRequest & keyof DeleteParameterGroupRequest & keyof DeleteParameterGroupRequest & keyof DeleteParameterGroupRequest & keyof DeleteParameterGroupRequest & keyof DeleteParameterGroupRequest & keyof DeleteParameterGroupRequest & keyof DeleteParameterGroupRequest & keyof DeleteParameterGroupRequest & keyof DeleteParameterGroupRequest]: (DeleteParameterGroupRequest & DeleteParameterGroupRequest & DeleteParameterGroupRequest & DeleteParameterGroupRequest & DeleteParameterGroupRequest & DeleteParameterGroupRequest & DeleteParameterGroupRequest & DeleteParameterGroupRequest & DeleteParameterGroupRequest & DeleteParameterGroupRequest & DeleteParameterGroupRequest & DeleteParameterGroupRequest)[K]
    }>): Request<DeleteParameterGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteParameterGroup(
          this.ops["DeleteParameterGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSubnetGroup(partialParams: ToOptional<{
      [K in keyof DeleteSubnetGroupRequest & keyof DeleteSubnetGroupRequest & keyof DeleteSubnetGroupRequest & keyof DeleteSubnetGroupRequest & keyof DeleteSubnetGroupRequest & keyof DeleteSubnetGroupRequest & keyof DeleteSubnetGroupRequest & keyof DeleteSubnetGroupRequest & keyof DeleteSubnetGroupRequest & keyof DeleteSubnetGroupRequest & keyof DeleteSubnetGroupRequest & keyof DeleteSubnetGroupRequest]: (DeleteSubnetGroupRequest & DeleteSubnetGroupRequest & DeleteSubnetGroupRequest & DeleteSubnetGroupRequest & DeleteSubnetGroupRequest & DeleteSubnetGroupRequest & DeleteSubnetGroupRequest & DeleteSubnetGroupRequest & DeleteSubnetGroupRequest & DeleteSubnetGroupRequest & DeleteSubnetGroupRequest & DeleteSubnetGroupRequest)[K]
    }>): Request<DeleteSubnetGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSubnetGroup(
          this.ops["DeleteSubnetGroup"].applicator.apply(partialParams)
        );
    }

    invokeDescribeParameters(partialParams: ToOptional<{
      [K in keyof DescribeParametersRequest & keyof DescribeParametersRequest & keyof DescribeParametersRequest & keyof DescribeParametersRequest & keyof DescribeParametersRequest & keyof DescribeParametersRequest & keyof DescribeParametersRequest & keyof DescribeParametersRequest & keyof DescribeParametersRequest & keyof DescribeParametersRequest & keyof DescribeParametersRequest & keyof DescribeParametersRequest]: (DescribeParametersRequest & DescribeParametersRequest & DescribeParametersRequest & DescribeParametersRequest & DescribeParametersRequest & DescribeParametersRequest & DescribeParametersRequest & DescribeParametersRequest & DescribeParametersRequest & DescribeParametersRequest & DescribeParametersRequest & DescribeParametersRequest)[K]
    }>): Request<DescribeParametersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeParameters(
          this.ops["DescribeParameters"].applicator.apply(partialParams)
        );
    }

    invokeIncreaseReplicationFactor(partialParams: ToOptional<{
      [K in keyof IncreaseReplicationFactorRequest & keyof IncreaseReplicationFactorRequest & keyof IncreaseReplicationFactorRequest & keyof IncreaseReplicationFactorRequest & keyof IncreaseReplicationFactorRequest & keyof IncreaseReplicationFactorRequest & keyof IncreaseReplicationFactorRequest & keyof IncreaseReplicationFactorRequest & keyof IncreaseReplicationFactorRequest & keyof IncreaseReplicationFactorRequest & keyof IncreaseReplicationFactorRequest & keyof IncreaseReplicationFactorRequest]: (IncreaseReplicationFactorRequest & IncreaseReplicationFactorRequest & IncreaseReplicationFactorRequest & IncreaseReplicationFactorRequest & IncreaseReplicationFactorRequest & IncreaseReplicationFactorRequest & IncreaseReplicationFactorRequest & IncreaseReplicationFactorRequest & IncreaseReplicationFactorRequest & IncreaseReplicationFactorRequest & IncreaseReplicationFactorRequest & IncreaseReplicationFactorRequest)[K]
    }>): Request<IncreaseReplicationFactorResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.increaseReplicationFactor(
          this.ops["IncreaseReplicationFactor"].applicator.apply(partialParams)
        );
    }

    invokeListTags(partialParams: ToOptional<{
      [K in keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest]: (ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest)[K]
    }>): Request<ListTagsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTags(
          this.ops["ListTags"].applicator.apply(partialParams)
        );
    }

    invokeRebootNode(partialParams: ToOptional<{
      [K in keyof RebootNodeRequest & keyof RebootNodeRequest & keyof RebootNodeRequest & keyof RebootNodeRequest & keyof RebootNodeRequest & keyof RebootNodeRequest & keyof RebootNodeRequest & keyof RebootNodeRequest & keyof RebootNodeRequest & keyof RebootNodeRequest & keyof RebootNodeRequest & keyof RebootNodeRequest]: (RebootNodeRequest & RebootNodeRequest & RebootNodeRequest & RebootNodeRequest & RebootNodeRequest & RebootNodeRequest & RebootNodeRequest & RebootNodeRequest & RebootNodeRequest & RebootNodeRequest & RebootNodeRequest & RebootNodeRequest)[K]
    }>): Request<RebootNodeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rebootNode(
          this.ops["RebootNode"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateCluster(partialParams: ToOptional<{
      [K in keyof UpdateClusterRequest & keyof UpdateClusterRequest & keyof UpdateClusterRequest & keyof Omit<UpdateClusterRequest, "ClusterName"> & keyof UpdateClusterRequest & keyof UpdateClusterRequest & keyof UpdateClusterRequest & keyof UpdateClusterRequest & keyof UpdateClusterRequest & keyof UpdateClusterRequest & keyof UpdateClusterRequest & keyof UpdateClusterRequest]: (UpdateClusterRequest & UpdateClusterRequest & UpdateClusterRequest & Omit<UpdateClusterRequest, "ClusterName"> & UpdateClusterRequest & UpdateClusterRequest & UpdateClusterRequest & UpdateClusterRequest & UpdateClusterRequest & UpdateClusterRequest & UpdateClusterRequest & UpdateClusterRequest)[K]
    }>): Request<UpdateClusterResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCluster(
          this.ops["UpdateCluster"].applicator.apply(partialParams)
        );
    }

    invokeUpdateParameterGroup(partialParams: ToOptional<{
      [K in keyof UpdateParameterGroupRequest & keyof UpdateParameterGroupRequest & keyof UpdateParameterGroupRequest & keyof UpdateParameterGroupRequest & keyof UpdateParameterGroupRequest & keyof UpdateParameterGroupRequest & keyof UpdateParameterGroupRequest & keyof UpdateParameterGroupRequest & keyof UpdateParameterGroupRequest & keyof UpdateParameterGroupRequest & keyof Omit<UpdateParameterGroupRequest, "ParameterGroupName"> & keyof UpdateParameterGroupRequest]: (UpdateParameterGroupRequest & UpdateParameterGroupRequest & UpdateParameterGroupRequest & UpdateParameterGroupRequest & UpdateParameterGroupRequest & UpdateParameterGroupRequest & UpdateParameterGroupRequest & UpdateParameterGroupRequest & UpdateParameterGroupRequest & UpdateParameterGroupRequest & Omit<UpdateParameterGroupRequest, "ParameterGroupName"> & UpdateParameterGroupRequest)[K]
    }>): Request<UpdateParameterGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateParameterGroup(
          this.ops["UpdateParameterGroup"].applicator.apply(partialParams)
        );
    }

    invokeUpdateSubnetGroup(partialParams: ToOptional<{
      [K in keyof UpdateSubnetGroupRequest & keyof UpdateSubnetGroupRequest & keyof UpdateSubnetGroupRequest & keyof UpdateSubnetGroupRequest & keyof UpdateSubnetGroupRequest & keyof UpdateSubnetGroupRequest & keyof UpdateSubnetGroupRequest & keyof UpdateSubnetGroupRequest & keyof UpdateSubnetGroupRequest & keyof UpdateSubnetGroupRequest & keyof UpdateSubnetGroupRequest & keyof Omit<UpdateSubnetGroupRequest, "SubnetGroupName">]: (UpdateSubnetGroupRequest & UpdateSubnetGroupRequest & UpdateSubnetGroupRequest & UpdateSubnetGroupRequest & UpdateSubnetGroupRequest & UpdateSubnetGroupRequest & UpdateSubnetGroupRequest & UpdateSubnetGroupRequest & UpdateSubnetGroupRequest & UpdateSubnetGroupRequest & UpdateSubnetGroupRequest & Omit<UpdateSubnetGroupRequest, "SubnetGroupName">)[K]
    }>): Request<UpdateSubnetGroupResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSubnetGroup(
          this.ops["UpdateSubnetGroup"].applicator.apply(partialParams)
        );
    }
}