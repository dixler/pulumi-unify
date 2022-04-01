
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateAlertManagerDefinitionRequest,
    CreateRuleGroupsNamespaceRequest,
    CreateWorkspaceRequest,
    DescribeAlertManagerDefinitionRequest,
    DescribeRuleGroupsNamespaceRequest,
    DescribeWorkspaceRequest,
    ListRuleGroupsNamespacesRequest,
    ListTagsForResourceRequest,
    ListWorkspacesRequest,
    PutAlertManagerDefinitionRequest,
    PutRuleGroupsNamespaceRequest,
    TagResourceRequest,
    UntagResourceRequest,
    CreateAlertManagerDefinitionResponse,
    CreateRuleGroupsNamespaceResponse,
    CreateWorkspaceResponse,
    DescribeAlertManagerDefinitionResponse,
    DescribeRuleGroupsNamespaceResponse,
    DescribeWorkspaceResponse,
    ListRuleGroupsNamespacesResponse,
    ListTagsForResourceResponse,
    ListWorkspacesResponse,
    PutAlertManagerDefinitionResponse,
    PutRuleGroupsNamespaceResponse,
    TagResourceResponse,
    UntagResourceResponse
} from "aws-sdk/clients/amp";
const schema = require("../apis/amp-2020-08-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.amp.Workspace {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.amp.Workspace>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Amp()
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

    invokeCreateAlertManagerDefinition(partialParams: ToOptional<{
      [K in keyof CreateAlertManagerDefinitionRequest]: (CreateAlertManagerDefinitionRequest)[K]
    }>): Request<CreateAlertManagerDefinitionResponse, AWSError> {
        this.boot();
        return this.client.createAlertManagerDefinition(
          this.ops["CreateAlertManagerDefinition"].apply(partialParams)
        );
    }

    invokeCreateRuleGroupsNamespace(partialParams: ToOptional<{
      [K in keyof CreateRuleGroupsNamespaceRequest]: (CreateRuleGroupsNamespaceRequest)[K]
    }>): Request<CreateRuleGroupsNamespaceResponse, AWSError> {
        this.boot();
        return this.client.createRuleGroupsNamespace(
          this.ops["CreateRuleGroupsNamespace"].apply(partialParams)
        );
    }

    invokeCreateWorkspace(partialParams: ToOptional<{
      [K in keyof CreateWorkspaceRequest]: (CreateWorkspaceRequest)[K]
    }>): Request<CreateWorkspaceResponse, AWSError> {
        this.boot();
        return this.client.createWorkspace(
          this.ops["CreateWorkspace"].apply(partialParams)
        );
    }

    invokeDescribeAlertManagerDefinition(partialParams: ToOptional<{
      [K in keyof DescribeAlertManagerDefinitionRequest]: (DescribeAlertManagerDefinitionRequest)[K]
    }>): Request<DescribeAlertManagerDefinitionResponse, AWSError> {
        this.boot();
        return this.client.describeAlertManagerDefinition(
          this.ops["DescribeAlertManagerDefinition"].apply(partialParams)
        );
    }

    invokeDescribeRuleGroupsNamespace(partialParams: ToOptional<{
      [K in keyof DescribeRuleGroupsNamespaceRequest]: (DescribeRuleGroupsNamespaceRequest)[K]
    }>): Request<DescribeRuleGroupsNamespaceResponse, AWSError> {
        this.boot();
        return this.client.describeRuleGroupsNamespace(
          this.ops["DescribeRuleGroupsNamespace"].apply(partialParams)
        );
    }

    invokeDescribeWorkspace(partialParams: ToOptional<{
      [K in keyof DescribeWorkspaceRequest]: (DescribeWorkspaceRequest)[K]
    }>): Request<DescribeWorkspaceResponse, AWSError> {
        this.boot();
        return this.client.describeWorkspace(
          this.ops["DescribeWorkspace"].apply(partialParams)
        );
    }

    invokeListRuleGroupsNamespaces(partialParams: ToOptional<{
      [K in keyof ListRuleGroupsNamespacesRequest]: (ListRuleGroupsNamespacesRequest)[K]
    }>): Request<ListRuleGroupsNamespacesResponse, AWSError> {
        this.boot();
        return this.client.listRuleGroupsNamespaces(
          this.ops["ListRuleGroupsNamespaces"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeListWorkspaces(partialParams: ToOptional<{
      [K in keyof ListWorkspacesRequest]: (ListWorkspacesRequest)[K]
    }>): Request<ListWorkspacesResponse, AWSError> {
        this.boot();
        return this.client.listWorkspaces(
          this.ops["ListWorkspaces"].apply(partialParams)
        );
    }

    invokePutAlertManagerDefinition(partialParams: ToOptional<{
      [K in keyof PutAlertManagerDefinitionRequest]: (PutAlertManagerDefinitionRequest)[K]
    }>): Request<PutAlertManagerDefinitionResponse, AWSError> {
        this.boot();
        return this.client.putAlertManagerDefinition(
          this.ops["PutAlertManagerDefinition"].apply(partialParams)
        );
    }

    invokePutRuleGroupsNamespace(partialParams: ToOptional<{
      [K in keyof PutRuleGroupsNamespaceRequest]: (PutRuleGroupsNamespaceRequest)[K]
    }>): Request<PutRuleGroupsNamespaceResponse, AWSError> {
        this.boot();
        return this.client.putRuleGroupsNamespace(
          this.ops["PutRuleGroupsNamespace"].apply(partialParams)
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
}