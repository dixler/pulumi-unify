
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    CreateAlertManagerDefinitionRequest,
    CreateRuleGroupsNamespaceRequest,
    DeleteAlertManagerDefinitionRequest,
    DeleteRuleGroupsNamespaceRequest,
    DeleteWorkspaceRequest,
    DescribeAlertManagerDefinitionRequest,
    DescribeRuleGroupsNamespaceRequest,
    DescribeWorkspaceRequest,
    ListRuleGroupsNamespacesRequest,
    ListTagsForResourceRequest,
    PutAlertManagerDefinitionRequest,
    PutRuleGroupsNamespaceRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateWorkspaceAliasRequest,
    CreateAlertManagerDefinitionResponse,
    CreateRuleGroupsNamespaceResponse,
    DescribeAlertManagerDefinitionResponse,
    DescribeRuleGroupsNamespaceResponse,
    DescribeWorkspaceResponse,
    ListRuleGroupsNamespacesResponse,
    ListTagsForResourceResponse,
    PutAlertManagerDefinitionResponse,
    PutRuleGroupsNamespaceResponse,
    TagResourceResponse,
    UntagResourceResponse
} from "aws-sdk/clients/amp";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.amp.Workspace {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.amp.Workspace>) {
        super(...args)
        this.client = new awssdk.Amp()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/amp-2020-08-01.normal.json"), this.client)
    }

    invokeCreateAlertManagerDefinition(partialParams: ToOptional<{
      [K in keyof CreateAlertManagerDefinitionRequest & keyof CreateAlertManagerDefinitionRequest & keyof CreateAlertManagerDefinitionRequest]: (CreateAlertManagerDefinitionRequest & CreateAlertManagerDefinitionRequest & CreateAlertManagerDefinitionRequest)[K]
    }>): CreateAlertManagerDefinitionResponse {
        return this.client.createAlertManagerDefinition(
            this.ops["CreateAlertManagerDefinition"].apply(partialParams)
        );
    }

    invokeCreateRuleGroupsNamespace(partialParams: ToOptional<{
      [K in keyof CreateRuleGroupsNamespaceRequest & keyof CreateRuleGroupsNamespaceRequest & keyof CreateRuleGroupsNamespaceRequest]: (CreateRuleGroupsNamespaceRequest & CreateRuleGroupsNamespaceRequest & CreateRuleGroupsNamespaceRequest)[K]
    }>): CreateRuleGroupsNamespaceResponse {
        return this.client.createRuleGroupsNamespace(
            this.ops["CreateRuleGroupsNamespace"].apply(partialParams)
        );
    }

    invokeDeleteAlertManagerDefinition(partialParams: ToOptional<{
      [K in keyof DeleteAlertManagerDefinitionRequest & keyof DeleteAlertManagerDefinitionRequest & keyof DeleteAlertManagerDefinitionRequest]: (DeleteAlertManagerDefinitionRequest & DeleteAlertManagerDefinitionRequest & DeleteAlertManagerDefinitionRequest)[K]
    }>): void {
        return this.client.deleteAlertManagerDefinition(
            this.ops["DeleteAlertManagerDefinition"].apply(partialParams)
        );
    }

    invokeDeleteRuleGroupsNamespace(partialParams: ToOptional<{
      [K in keyof DeleteRuleGroupsNamespaceRequest & keyof DeleteRuleGroupsNamespaceRequest & keyof DeleteRuleGroupsNamespaceRequest]: (DeleteRuleGroupsNamespaceRequest & DeleteRuleGroupsNamespaceRequest & DeleteRuleGroupsNamespaceRequest)[K]
    }>): void {
        return this.client.deleteRuleGroupsNamespace(
            this.ops["DeleteRuleGroupsNamespace"].apply(partialParams)
        );
    }

    invokeDeleteWorkspace(partialParams: ToOptional<{
      [K in keyof DeleteWorkspaceRequest & keyof DeleteWorkspaceRequest & keyof DeleteWorkspaceRequest]: (DeleteWorkspaceRequest & DeleteWorkspaceRequest & DeleteWorkspaceRequest)[K]
    }>): void {
        return this.client.deleteWorkspace(
            this.ops["DeleteWorkspace"].apply(partialParams)
        );
    }

    invokeDescribeAlertManagerDefinition(partialParams: ToOptional<{
      [K in keyof DescribeAlertManagerDefinitionRequest & keyof DescribeAlertManagerDefinitionRequest & keyof DescribeAlertManagerDefinitionRequest]: (DescribeAlertManagerDefinitionRequest & DescribeAlertManagerDefinitionRequest & DescribeAlertManagerDefinitionRequest)[K]
    }>): DescribeAlertManagerDefinitionResponse {
        return this.client.describeAlertManagerDefinition(
            this.ops["DescribeAlertManagerDefinition"].apply(partialParams)
        );
    }

    invokeDescribeRuleGroupsNamespace(partialParams: ToOptional<{
      [K in keyof DescribeRuleGroupsNamespaceRequest & keyof DescribeRuleGroupsNamespaceRequest & keyof DescribeRuleGroupsNamespaceRequest]: (DescribeRuleGroupsNamespaceRequest & DescribeRuleGroupsNamespaceRequest & DescribeRuleGroupsNamespaceRequest)[K]
    }>): DescribeRuleGroupsNamespaceResponse {
        return this.client.describeRuleGroupsNamespace(
            this.ops["DescribeRuleGroupsNamespace"].apply(partialParams)
        );
    }

    invokeDescribeWorkspace(partialParams: ToOptional<{
      [K in keyof DescribeWorkspaceRequest & keyof DescribeWorkspaceRequest & keyof DescribeWorkspaceRequest]: (DescribeWorkspaceRequest & DescribeWorkspaceRequest & DescribeWorkspaceRequest)[K]
    }>): DescribeWorkspaceResponse {
        return this.client.describeWorkspace(
            this.ops["DescribeWorkspace"].apply(partialParams)
        );
    }

    invokeListRuleGroupsNamespaces(partialParams: ToOptional<{
      [K in keyof ListRuleGroupsNamespacesRequest & keyof ListRuleGroupsNamespacesRequest & keyof ListRuleGroupsNamespacesRequest]: (ListRuleGroupsNamespacesRequest & ListRuleGroupsNamespacesRequest & ListRuleGroupsNamespacesRequest)[K]
    }>): ListRuleGroupsNamespacesResponse {
        return this.client.listRuleGroupsNamespaces(
            this.ops["ListRuleGroupsNamespaces"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokePutAlertManagerDefinition(partialParams: ToOptional<{
      [K in keyof PutAlertManagerDefinitionRequest & keyof PutAlertManagerDefinitionRequest & keyof PutAlertManagerDefinitionRequest]: (PutAlertManagerDefinitionRequest & PutAlertManagerDefinitionRequest & PutAlertManagerDefinitionRequest)[K]
    }>): PutAlertManagerDefinitionResponse {
        return this.client.putAlertManagerDefinition(
            this.ops["PutAlertManagerDefinition"].apply(partialParams)
        );
    }

    invokePutRuleGroupsNamespace(partialParams: ToOptional<{
      [K in keyof PutRuleGroupsNamespaceRequest & keyof PutRuleGroupsNamespaceRequest & keyof PutRuleGroupsNamespaceRequest]: (PutRuleGroupsNamespaceRequest & PutRuleGroupsNamespaceRequest & PutRuleGroupsNamespaceRequest)[K]
    }>): PutRuleGroupsNamespaceResponse {
        return this.client.putRuleGroupsNamespace(
            this.ops["PutRuleGroupsNamespace"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateWorkspaceAlias(partialParams: ToOptional<{
      [K in keyof UpdateWorkspaceAliasRequest & keyof UpdateWorkspaceAliasRequest & keyof UpdateWorkspaceAliasRequest]: (UpdateWorkspaceAliasRequest & UpdateWorkspaceAliasRequest & UpdateWorkspaceAliasRequest)[K]
    }>): void {
        return this.client.updateWorkspaceAlias(
            this.ops["UpdateWorkspaceAlias"].apply(partialParams)
        );
    }
}