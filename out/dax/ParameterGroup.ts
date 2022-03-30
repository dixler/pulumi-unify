
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.dax.ParameterGroup {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.dax.ParameterGroup>) {
        super(...args)
        this.client = new awssdk.DAX()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/dax-2017-04-19.normal.json"), this.client)
    }

    invokeCreateCluster(partialParams: ToOptional<{
      [K in keyof CreateClusterRequest & keyof CreateClusterRequest]: (CreateClusterRequest & CreateClusterRequest)[K]
    }>): CreateClusterResponse {
        return this.client.createCluster(
            this.ops["CreateCluster"].apply(partialParams)
        );
    }

    invokeCreateParameterGroup(partialParams: ToOptional<{
      [K in keyof CreateParameterGroupRequest & keyof CreateParameterGroupRequest]: (CreateParameterGroupRequest & CreateParameterGroupRequest)[K]
    }>): CreateParameterGroupResponse {
        return this.client.createParameterGroup(
            this.ops["CreateParameterGroup"].apply(partialParams)
        );
    }

    invokeCreateSubnetGroup(partialParams: ToOptional<{
      [K in keyof CreateSubnetGroupRequest & keyof CreateSubnetGroupRequest]: (CreateSubnetGroupRequest & CreateSubnetGroupRequest)[K]
    }>): CreateSubnetGroupResponse {
        return this.client.createSubnetGroup(
            this.ops["CreateSubnetGroup"].apply(partialParams)
        );
    }

    invokeDecreaseReplicationFactor(partialParams: ToOptional<{
      [K in keyof DecreaseReplicationFactorRequest & keyof DecreaseReplicationFactorRequest]: (DecreaseReplicationFactorRequest & DecreaseReplicationFactorRequest)[K]
    }>): DecreaseReplicationFactorResponse {
        return this.client.decreaseReplicationFactor(
            this.ops["DecreaseReplicationFactor"].apply(partialParams)
        );
    }

    invokeDeleteCluster(partialParams: ToOptional<{
      [K in keyof DeleteClusterRequest & keyof DeleteClusterRequest]: (DeleteClusterRequest & DeleteClusterRequest)[K]
    }>): DeleteClusterResponse {
        return this.client.deleteCluster(
            this.ops["DeleteCluster"].apply(partialParams)
        );
    }

    invokeDeleteParameterGroup(partialParams: ToOptional<{
      [K in keyof DeleteParameterGroupRequest & keyof DeleteParameterGroupRequest]: (DeleteParameterGroupRequest & DeleteParameterGroupRequest)[K]
    }>): DeleteParameterGroupResponse {
        return this.client.deleteParameterGroup(
            this.ops["DeleteParameterGroup"].apply(partialParams)
        );
    }

    invokeDeleteSubnetGroup(partialParams: ToOptional<{
      [K in keyof DeleteSubnetGroupRequest & keyof DeleteSubnetGroupRequest]: (DeleteSubnetGroupRequest & DeleteSubnetGroupRequest)[K]
    }>): DeleteSubnetGroupResponse {
        return this.client.deleteSubnetGroup(
            this.ops["DeleteSubnetGroup"].apply(partialParams)
        );
    }

    invokeDescribeParameters(partialParams: ToOptional<{
      [K in keyof DescribeParametersRequest & keyof DescribeParametersRequest]: (DescribeParametersRequest & DescribeParametersRequest)[K]
    }>): DescribeParametersResponse {
        return this.client.describeParameters(
            this.ops["DescribeParameters"].apply(partialParams)
        );
    }

    invokeIncreaseReplicationFactor(partialParams: ToOptional<{
      [K in keyof IncreaseReplicationFactorRequest & keyof IncreaseReplicationFactorRequest]: (IncreaseReplicationFactorRequest & IncreaseReplicationFactorRequest)[K]
    }>): IncreaseReplicationFactorResponse {
        return this.client.increaseReplicationFactor(
            this.ops["IncreaseReplicationFactor"].apply(partialParams)
        );
    }

    invokeListTags(partialParams: ToOptional<{
      [K in keyof ListTagsRequest & keyof ListTagsRequest]: (ListTagsRequest & ListTagsRequest)[K]
    }>): ListTagsResponse {
        return this.client.listTags(
            this.ops["ListTags"].apply(partialParams)
        );
    }

    invokeRebootNode(partialParams: ToOptional<{
      [K in keyof RebootNodeRequest & keyof RebootNodeRequest]: (RebootNodeRequest & RebootNodeRequest)[K]
    }>): RebootNodeResponse {
        return this.client.rebootNode(
            this.ops["RebootNode"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateCluster(partialParams: ToOptional<{
      [K in keyof UpdateClusterRequest & keyof UpdateClusterRequest]: (UpdateClusterRequest & UpdateClusterRequest)[K]
    }>): UpdateClusterResponse {
        return this.client.updateCluster(
            this.ops["UpdateCluster"].apply(partialParams)
        );
    }

    invokeUpdateParameterGroup(partialParams: ToOptional<{
      [K in keyof UpdateParameterGroupRequest & keyof UpdateParameterGroupRequest]: (UpdateParameterGroupRequest & UpdateParameterGroupRequest)[K]
    }>): UpdateParameterGroupResponse {
        return this.client.updateParameterGroup(
            this.ops["UpdateParameterGroup"].apply(partialParams)
        );
    }

    invokeUpdateSubnetGroup(partialParams: ToOptional<{
      [K in keyof UpdateSubnetGroupRequest & keyof UpdateSubnetGroupRequest]: (UpdateSubnetGroupRequest & UpdateSubnetGroupRequest)[K]
    }>): UpdateSubnetGroupResponse {
        return this.client.updateSubnetGroup(
            this.ops["UpdateSubnetGroup"].apply(partialParams)
        );
    }
}